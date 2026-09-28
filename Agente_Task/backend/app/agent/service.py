"""Agent orchestrator.

Pipeline per message:
  1. context (screen entity + session)  2. deterministic entity resolution
  3. LLM structured interpretation     4. deterministic policy (auto vs confirm)
  5. apply + history                    6. rules → recommendations  7. structured reply
If the AI provider is unavailable, a deterministic fallback keeps the essentials working.
"""
import logging
from typing import Any

from pydantic.alias_generators import to_snake

from app import repositories as repos
from app.agent import context as ctx
from app.agent import fallback, prompts
from app.agent.policy import FIELD_LABELS, coerce, important_action_reason, important_reason, resolve_person
from app.agent.resolver import Candidate, candidate_activity_ids, resolve
from app.agent.schemas import (
    AgentReply, AppliedChange, ChatContext, ChatRequest, EntityRef, LLMAnswer, LLMInterpretation,
)
from app.ai import AIError, get_provider
from app.domain.enums import (
    ActionStatus, BlockerStatus, CreatedBy, HistorySource, PendingStatus, QuestionStatus,
)
from app.domain.models import (
    Activity, Build, ChatMessage, ChatSession, OpenQuestion, PendingChange,
)
from app.services import changes, operations, recommendations
from app.services.briefing import build_briefing
from app.services.insights import Snapshot, snapshot
from app.utils.text import new_id, normalize, tokens
from app.utils.time import now_iso, today, today_label

log = logging.getLogger(__name__)
SRC, BY = HistorySource.AGENT, CreatedBy.AGENT


# ─── Sessions ────────────────────────────────────────────────────────────────


def get_or_create_session(session_id: str | None, context: ChatContext | None) -> ChatSession:
    if session_id:
        s = repos.chat_sessions.get(session_id)
        if s:
            return s
    if context and context.entity_id:
        for s in repos.chat_sessions.all():
            if s.context_type == context.entity_type and s.context_id == context.entity_id:
                return s
        return repos.chat_sessions.save(ChatSession(
            id=new_id("chat"), title="Chat contextual",
            context_type=context.entity_type, context_id=context.entity_id,
        ))
    return repos.chat_sessions.save(ChatSession(id=new_id("chat"), title="Nueva conversación"))


def session_messages(session_id: str) -> list[ChatMessage]:
    return sorted((m for m in repos.chat_messages.all() if m.session_id == session_id), key=lambda m: m.created_at)


def _save_message(session: ChatSession, role: str, content: str, data: dict | None = None) -> ChatMessage:
    msg = repos.chat_messages.save(ChatMessage(
        id=new_id("msg"), session_id=session.id, role=role, content=content, data=data,
    ))
    update: dict[str, Any] = {"updated_at": now_iso()}
    if role == "user" and session.title in ("Nueva conversación", "Chat contextual"):
        update["title"] = content[:60]
    repos.chat_sessions.save(session.model_copy(update=update))
    return msg


def _recent_text(session_id: str, limit: int = 6) -> str:
    msgs = session_messages(session_id)[-limit:]
    if not msgs:
        return "(sin mensajes previos)"
    return "\n".join(f"{'Usuario' if m.role == 'user' else 'Agente'}: {m.content[:400]}" for m in msgs)


# ─── Entry point ─────────────────────────────────────────────────────────────


def chat(req: ChatRequest) -> AgentReply:
    session = get_or_create_session(req.session_id, req.context)
    context = req.context or ChatContext(entity_type=session.context_type, entity_id=session.context_id)
    if not context.entity_id and req.question_id and (q := repos.questions.get(req.question_id)):
        # Answering an open question from the general chat: the question's entity is the context.
        if q.activity_id:
            context = ChatContext(entity_type="activity", entity_id=q.activity_id)
        elif q.entity_id:
            context = ChatContext(entity_type=q.entity_type, entity_id=q.entity_id)
    recent = _recent_text(session.id)
    _save_message(session, "user", req.message)

    snap = snapshot()
    provider = get_provider()
    health = provider.health()
    if health.available:
        try:
            reply = _ai_flow(req, session, context, snap, recent)
        except AIError as e:
            log.warning("Fallo de IA, usando modo determinístico: %s", e)
            reply = fallback.handle(req.message, context, snapshot(), session.id)
            reply.warnings.append(f"La IA no respondió correctamente ({e}). Respondí en modo determinístico.")
    else:
        reply = fallback.handle(req.message, context, snap, session.id)
        reply.warnings.append(health.error or "Ollama no disponible.")

    if req.question_id:
        _answer_question(req.question_id, req.message)

    msg = _save_message(session, "assistant", reply.message, reply.dump())
    reply.message_id = msg.id
    return reply


# ─── AI flow ─────────────────────────────────────────────────────────────────


def _screen_text(context: ChatContext, snap: Snapshot) -> str:
    if not context.entity_id:
        return "PANTALLA: chat general (sin entidad seleccionada)."
    coll = {"activity": snap.activities, "pull_request": snap.prs, "project": snap.projects,
            "person": snap.people, "initiative": snap.initiatives}.get(context.entity_type or "", {})
    e = coll.get(context.entity_id)
    name = (getattr(e, "title", None) or getattr(e, "name", None)) if e else context.entity_id
    return (f"PANTALLA: el usuario está viendo {context.entity_type} '{name}' (id {context.entity_id}). "
            f"Si no menciona otra cosa, habla de esta entidad.")


def _ai_flow(req: ChatRequest, session: ChatSession, context: ChatContext, snap: Snapshot, recent: str) -> AgentReply:
    provider = get_provider()
    cands = resolve(req.message, snap, context)
    act_ids = candidate_activity_ids(cands)
    cand_details = [ctx.activity_detail(i, snap) for i in act_ids]
    question_hint = ""
    if req.question_id and (q := repos.questions.get(req.question_id)):
        question_hint = f"\n(El usuario está respondiendo la pregunta abierta {q.id}: \"{q.question}\")"

    interp = provider.structured([
        {"role": "system", "content": prompts.INTERPRET_SYSTEM.format(today=today_label())},
        {"role": "user", "content": prompts.INTERPRET_USER.format(
            screen=_screen_text(context, snap),
            index=ctx.index_block(snap),
            candidates=ctx.to_json(cand_details) if cand_details else "(ninguna coincidencia directa)",
            recent=recent,
            message=req.message + question_hint,
        )},
    ], LLMInterpretation)
    log.info("Interpretación: %s", interp.model_dump_json())

    if interp.intent == "BRIEFING":
        # Small models over-use BRIEFING; only honour it for genuine "what should I review today" questions.
        if _looks_like_briefing(req.message) and not context.entity_id:
            return _briefing_reply(session.id)
        interp.intent = "QUERY"

    has_mutations = any([
        interp.changes, interp.new_blockers, interp.resolve_blocker_ids, interp.new_actions,
        interp.complete_actions, interp.new_activities, interp.answered_question_ids,
    ])
    if interp.intent in ("UPDATE", "CREATE_ACTIVITY") or has_mutations:
        return _apply_flow(req, session, context, snap, cands, interp)
    return _answer_flow(req, session, context, snap, cands, interp, recent)


BRIEFING_HINTS = ("hoy", "revisar", "briefing", "prioridad", "prioriz", "resumen del dia", "enfoc", "atender",
                  "atencion", "empiezo", "arranco")


def _looks_like_briefing(message: str) -> bool:
    n = normalize(message)
    return any(h in n for h in BRIEFING_HINTS)


def _target(interp: LLMInterpretation, snap: Snapshot, cands: list[Candidate], context: ChatContext) -> tuple[str, str] | None:
    colls = {"activity": snap.activities, "pull_request": snap.prs, "project": snap.projects,
             "person": snap.people, "initiative": snap.initiatives}
    if interp.target_entity_type in colls and interp.target_entity_id in colls[interp.target_entity_type]:
        return interp.target_entity_type, interp.target_entity_id
    for coll_name, coll in colls.items():
        if interp.target_entity_id in coll:
            return coll_name, interp.target_entity_id
    if context.entity_id:
        return context.entity_type or "activity", context.entity_id
    if cands and cands[0].score >= 85:
        return cands[0].entity_type, cands[0].entity_id
    return None


def _target_activity_id(target: tuple[str, str] | None, snap: Snapshot) -> str | None:
    if not target:
        return None
    t, i = target
    if t == "activity":
        return i
    if t == "pull_request" and i in snap.prs:
        return snap.prs[i].activity_id
    return None


def _ref(entity_type: str, entity_id: str, snap: Snapshot) -> EntityRef | None:
    coll = {"activity": snap.activities, "pull_request": snap.prs, "project": snap.projects,
            "person": snap.people, "initiative": snap.initiatives}.get(entity_type, {})
    e = coll.get(entity_id)
    if not e:
        return None
    return EntityRef(type=entity_type, id=entity_id, name=changes.display_name(entity_type, e))


def _apply_flow(req, session, context, snap, cands, interp: LLMInterpretation) -> AgentReply:
    target = _target(interp, snap, cands, context)
    target_activity = _target_activity_id(target, snap)
    applied: list[AppliedChange] = []
    pending_ids: list[str] = []
    created: list[EntityRef] = []
    warnings: list[str] = []
    touched: set[str] = set()
    comment = f"Agente: «{req.message[:300]}»"

    # 1) Field changes → auto patch or pending confirmation
    patches: dict[tuple[str, str], dict[str, Any]] = {}
    evidence_of: dict[tuple[str, str], str] = {}
    entity_maps = {"activity": snap.activities, "pull_request": snap.prs, "blocker": snap.blockers}
    for ch in interp.changes:
        entity = entity_maps[ch.entity_type].get(ch.entity_id)
        if entity is None:
            warnings.append(f"Ignoré un cambio sobre una entidad desconocida ({ch.entity_id}).")
            continue
        c = coerce(ch.entity_type, ch.field, ch.new_value, snap)
        if not c.ok:
            warnings.append(c.error or "Valor inválido")
            continue
        current = getattr(entity, to_snake(ch.field), None)
        if current == c.value:
            continue
        reason = important_reason(ch.entity_type, ch.field, c.value)
        if ch.basis == "INFERENCE" or reason:
            pid = _create_pending(
                entity_type=ch.entity_type, entity=entity, field=ch.field, old=current, new=c.value,
                basis=ch.basis, reason=reason or "Es una inferencia: necesito tu confirmación antes de aplicarla.",
                evidence=ch.evidence, message=req.message, session_id=session.id,
            )
            if pid:
                pending_ids.append(pid)
            continue
        patches.setdefault((ch.entity_type, ch.entity_id), {})[to_snake(ch.field)] = c.value
        evidence_of[(ch.entity_type, ch.entity_id)] = ch.evidence

    for (etype, eid), patch in patches.items():
        if etype == "pull_request":
            _merge_build(snap.prs[eid], patch)
        updated, diff = changes.update(etype, eid, patch, source=SRC, created_by=BY, comment=comment)
        name = changes.display_name(etype, updated)
        for d in diff:
            if d["field"] == "builds":
                continue
            applied.append(AppliedChange(entity_type=etype, entity_id=eid, entity_name=name,
                                         field=d["field"], old_value=d["oldValue"], new_value=d["newValue"]))
        touched.add(changes.activity_id_of(etype, updated) or "")

    # 2) Blockers
    for nb in interp.new_blockers:
        activity = snap.activities.get(nb.activity_id) or snap.activities.get(target_activity or "")
        if activity is None:
            warnings.append("No pude asociar el bloqueo a una actividad.")
            continue
        duplicate = any(b.type == nb.type for b in snap.open_blockers_for(activity.id))
        if duplicate:
            warnings.append(f"Ya existe un bloqueo abierto de tipo {nb.type} en {activity.title}; no lo dupliqué.")
            continue
        data = {"type": nb.type, "description": nb.description, "responsible": nb.responsible or None,
                "waitingFor": nb.waiting_for or None}
        if nb.basis == "INFERENCE":
            pc = _save_pending(PendingChange(
                id=new_id("pc"), kind="CREATE_BLOCKER", entity_type="activity", entity_id=activity.id,
                entity_name=activity.title, field="blocked", old_value=activity.blocked, new_value=True,
                payload=data, basis="INFERENCE", reason="Bloqueo inferido: confirma antes de registrarlo.",
                evidence=nb.description, source_message=req.message, session_id=session.id,
            ))
            pending_ids.append(pc.id)
            continue
        llm_has_followup = any(a.activity_id in (activity.id, "") for a in interp.new_actions)
        blocker = operations.create_blocker(activity.id, data, source=SRC, created_by=BY, comment=comment,
                                            follow_up_action=not llm_has_followup)
        created.append(EntityRef(type="blocker", id=blocker.id, name=f"Bloqueo {blocker.type}: {blocker.description}"))
        applied.append(AppliedChange(entity_type="activity", entity_id=activity.id, entity_name=activity.title,
                                     field="blocked", old_value=activity.blocked, new_value=True))
        touched.add(activity.id)

    for bid in interp.resolve_blocker_ids:
        b = snap.blockers.get(bid)
        if b and b.status == BlockerStatus.OPEN:
            operations.resolve_blocker(bid, req.message[:200], source=SRC, created_by=BY)
            applied.append(AppliedChange(entity_type="blocker", entity_id=bid, entity_name=changes.display_name("blocker", b),
                                         field="status", old_value="OPEN", new_value="RESOLVED"))
            touched.add(b.activity_id)

    # 3) Actions
    for ca in interp.complete_actions:
        a = snap.actions.get(ca.action_id)
        if not a or a.status == ActionStatus.DONE:
            continue
        reason = important_action_reason(a.title)
        if ca.basis == "INFERENCE" or reason:
            pid = _create_pending(
                entity_type="action", entity=a, field="status", old=a.status, new=ActionStatus.DONE.value,
                basis=ca.basis, reason=reason or "Es una inferencia: necesito tu confirmación antes de aplicarla.",
                evidence=ca.evidence, message=req.message, session_id=session.id,
            )
            if pid:
                pending_ids.append(pid)
            continue
        operations.set_action_status(a.id, ActionStatus.DONE.value, source=SRC, created_by=BY, comment=comment)
        applied.append(AppliedChange(entity_type="action", entity_id=a.id, entity_name=a.title,
                                     field="status", old_value=a.status, new_value="DONE"))
        touched.add(a.activity_id)

    # 4) New activities (explicit user request → created directly; owner/date only if given).
    #    Created before new actions so follow-up actions and questions attach to the new activity.
    new_activity_titles: list[str] = []
    for nact in interp.new_activities:
        if not nact.title.strip():
            continue
        data: dict[str, Any] = {
            "title": nact.title.strip(), "type": nact.type or None, "description": nact.description or None,
            "priority": nact.priority or None, "status": nact.status, "requestDate": today().isoformat(),
            "ownerId": resolve_person(nact.owner_id, snap),
            "projectDependencyId": nact.project_id if nact.project_id in snap.projects else None,
        }
        if target and target[0] == "initiative":
            data["initiativeId"] = target[1]
        elif target and target[0] == "activity" and target[1] in snap.activities:
            parent = snap.activities[target[1]]
            data["initiativeId"] = parent.initiative_id
            data["projectDependencyId"] = data["projectDependencyId"] or parent.project_dependency_id
        if nact.due_date:
            c = coerce("activity", "dueDate", nact.due_date, snap)
            data["dueDate"] = c.value if c.ok else None
        activity = changes.create_from_dict("activity", data, source=SRC, created_by=BY, comment=comment)
        created.append(EntityRef(type="activity", id=activity.id, name=activity.title))
        new_activity_titles.append(normalize(activity.title))
        target_activity = activity.id
        touched.add(activity.id)

    for na in interp.new_actions:
        activity_id = target_activity if new_activity_titles else (
            na.activity_id if na.activity_id in snap.activities else target_activity)
        if not activity_id or not na.title.strip():
            continue
        existing = [normalize(x.title) for x in repos.actions.all()
                    if x.activity_id == activity_id and x.status != ActionStatus.CANCELLED]
        if _is_duplicate(na.title, existing + new_activity_titles):
            continue
        action = operations.create_action(activity_id, {
            "title": na.title.strip(), "ownerId": resolve_person(na.owner_id, snap),
        }, source=SRC, created_by=BY)
        created.append(EntityRef(type="action", id=action.id, name=action.title))
        touched.add(activity_id)

    # 5) Note (not for pure creations), answered questions and new open questions
    note_target = target_activity or next(iter(t for t in touched if t), None)
    noted = False
    if interp.note.strip() and note_target and not new_activity_titles:
        operations.add_note(note_target, interp.note.strip(), SRC, BY)
        touched.add(note_target)
        noted = True
    for qid in interp.answered_question_ids:
        _answer_question(qid, req.message)
    questions = [q for q in interp.questions if q.strip()][:3]
    q_target = note_target
    if q_target:
        _store_questions(questions, q_target)

    # 6) Compose reply
    snap2 = snapshot()
    findings = recommendations.sync(snap2)
    touched.discard("")
    recs = []
    for f in findings:
        # "missing info" is already covered by the open questions → skip it here.
        if f.activity_id in touched and f.rule_id != "missing_info" and f.action not in recs:
            recs.append(f.action)
    refs = [r for r in (_ref("activity", t, snap2) for t in touched) if r]
    if not refs and target and (r := _ref(*target, snap2)):
        refs.append(r)

    if not (applied or pending_ids or created) and not target and not interp.new_activities:
        options = [c.name for c in cands if c.entity_type == "activity"][:4]
        msg = "No identifiqué con seguridad a qué actividad te refieres."
        if options:
            msg += " ¿Es alguna de estas?\n" + "\n".join(f"- {o}" for o in options)
        return AgentReply(session_id=session.id, mode="ai", intent=interp.intent, message=msg,
                          facts=interp.facts, inferences=interp.inferences, questions=questions, warnings=warnings)

    return AgentReply(
        session_id=session.id, mode="ai", intent=interp.intent,
        message=_update_message(refs, applied, pending_ids, created, noted),
        facts=interp.facts, inferences=interp.inferences, recommendations=recs[:3], questions=questions,
        applied_changes=applied, pending_change_ids=pending_ids, created=created, references=refs,
        warnings=warnings,
    )


def _update_message(refs: list[EntityRef], applied, pending_ids, created, noted: bool) -> str:
    names = ", ".join(f"**{r.name}**" for r in refs[:3]) or "el tablero"
    parts = []
    if applied:
        parts.append(f"Actualicé {names} ({len(applied)} cambio(s) aplicados y registrados en el historial).")
    elif noted:
        parts.append(f"Registré tu reporte como nota en {names}.")
    if created:
        kinds = {"activity": "actividad(es)", "action": "acción(es)", "blocker": "bloqueo(s)"}
        counts: dict[str, int] = {}
        for c in created:
            counts[c.type] = counts.get(c.type, 0) + 1
        parts.append("Creé " + ", ".join(f"{n} {kinds.get(k, k)}" for k, n in counts.items()) + ".")
    if pending_ids:
        parts.append(f"{len(pending_ids)} cambio(s) importantes quedan **pendientes de tu confirmación**.")
    if not parts:
        parts.append(f"Registré tu comentario en {names}. No detecté cambios de estado que aplicar.")
    return " ".join(parts)


def _merge_build(pr, patch: dict[str, Any]) -> None:
    """Keeps the PR build list in sync when the agent reports a build number/result."""
    number = patch.get("latest_build")
    status = patch.get("build_status")
    if number is None:
        return
    builds = [b for b in pr.builds if b.number != number]
    builds.append(Build(number=number, status=status or pr.build_status, date=today().isoformat()))
    builds.sort(key=lambda b: b.number or 0)
    patch["builds"] = [b.model_dump() for b in builds]


def _is_duplicate(title: str, existing: list[str]) -> bool:
    t = set(tokens(title))
    if not t:
        return True
    for e in existing:
        et = set(tokens(e))
        if et and len(t & et) / max(len(t | et), 1) >= 0.6:
            return True
    return False


def _save_pending(pc: PendingChange) -> PendingChange:
    return repos.pending_changes.save(pc)


def _create_pending(*, entity_type, entity, field, old, new, basis, reason, evidence, message, session_id) -> str | None:
    for p in repos.pending_changes.all():
        if (p.status == PendingStatus.PENDING and p.entity_id == entity.id and p.field == field
                and p.new_value == new):
            return p.id
    pc = _save_pending(PendingChange(
        id=new_id("pc"), kind="UPDATE", entity_type=entity_type, entity_id=entity.id,
        entity_name=changes.display_name(entity_type, entity), field=field, old_value=old, new_value=new,
        basis=basis, reason=reason, evidence=evidence, source_message=message, session_id=session_id,
    ))
    return pc.id


def _store_questions(questions: list[str], activity_id: str) -> None:
    existing = [normalize(q.question) for q in repos.questions.all()
                if q.status == QuestionStatus.OPEN and (q.activity_id == activity_id or q.entity_id == activity_id)]
    for text in questions:
        if _is_duplicate(text, existing):
            continue
        changes.create("question", OpenQuestion(
            entity_type="activity", entity_id=activity_id, activity_id=activity_id,
            question=text.strip(), created_by=CreatedBy.AGENT,
        ))
        existing.append(normalize(text))


def _answer_question(question_id: str, answer: str) -> None:
    q = repos.questions.get(question_id)
    if q and q.status == QuestionStatus.OPEN:
        changes.update("question", q.id, {
            "status": QuestionStatus.ANSWERED.value, "answer": answer[:1000], "answered_at": now_iso(),
        })
        if q.activity_id:
            operations.add_note(q.activity_id, f"Respuesta a «{q.question}»: {answer[:500]}", SRC, CreatedBy.USER)


# ─── Query / answer flow ─────────────────────────────────────────────────────


PEOPLE_HINTS = ("saturad", "carga", "quien", "disponib", "persona", "equipo", "capacidad", "conoce")
HISTORY_HINTS = ("semana", "paso", "historial", "cambio", "ayer", "hoy", "ultim")


def _answer_flow(req, session, context, snap, cands, interp, recent) -> AgentReply:
    provider = get_provider()
    target = _target(interp, snap, cands, context)
    n = normalize(req.message)
    blocks = []
    refs = []
    if target:
        detail = ctx.entity_detail(target[0], target[1], snap)
        if detail:
            blocks.append("ENTIDAD PRINCIPAL:\n" + ctx.to_json(detail))
            if r := _ref(*target, snap):
                refs.append(r)
    findings = recommendations.sync(snap)
    if target:
        aid = _target_activity_id(target, snap)
        blocks.append(ctx.findings_block([f for f in findings if f.activity_id == aid or f.entity_id == target[1]]))
    else:
        blocks.append(ctx.board_block(snap))
        blocks.append(ctx.findings_block(findings))
    if any(h in n for h in PEOPLE_HINTS) or not target:
        blocks.append(ctx.workload_block(snap))
    if any(h in n for h in HISTORY_HINTS) and not target:
        blocks.append(ctx.recent_history_block())

    ans = provider.structured([
        {"role": "system", "content": prompts.ANSWER_SYSTEM.format(today=today_label())},
        {"role": "user", "content": prompts.ANSWER_USER.format(
            screen=_screen_text(context, snap), context="\n\n".join(blocks), recent=recent, message=req.message,
        )},
    ], LLMAnswer, temperature=0.2)
    return AgentReply(
        session_id=session.id, mode="ai", intent=interp.intent, message=ans.answer,
        facts=ans.facts, inferences=ans.inferences, recommendations=ans.recommendations,
        questions=ans.questions, references=refs,
    )


def _briefing_reply(session_id: str) -> AgentReply:
    b = briefing_with_ai()
    return AgentReply(session_id=session_id, mode="ai" if b.get("focus") else "fallback", intent="BRIEFING",
                      message=b["text"], briefing=b,
                      recommendations=[f"{i['name']}: {i['action']}" for i in b["items"]])


def briefing_with_ai() -> dict[str, Any]:
    """Deterministic briefing + (optional) short AI focus paragraph that cannot add facts."""
    b = build_briefing()
    provider = get_provider()
    if b["items"] and provider.health().available:
        try:
            points = "\n".join(f"- {i['name']} [{i['severity']}]: {i['situation']} Acción: {i['action']}" for i in b["items"])
            b["focus"] = provider.chat([
                {"role": "system", "content": prompts.BRIEFING_SYSTEM.format(today=today_label())},
                {"role": "user", "content": f"PUNTOS DE ATENCIÓN:\n{points}"},
            ], temperature=0.3)
        except AIError as e:
            log.warning("Briefing sin IA: %s", e)
    if b.get("focus"):
        b["text"] = f"{b['text']}\n\n**Enfoque del día:** {b['focus']}"
    return b


# ─── Pending confirmations ───────────────────────────────────────────────────


def confirm_pending(pending_id: str) -> PendingChange:
    pc = repos.pending_changes.get(pending_id)
    if pc is None:
        raise changes.NotFoundError("Cambio pendiente no encontrado")
    if pc.status != PendingStatus.PENDING:
        return pc
    comment = f"Confirmado por el usuario. Evidencia: {pc.evidence or pc.source_message or '—'}"
    if pc.kind == "CREATE_BLOCKER":
        operations.create_blocker(pc.entity_id, pc.payload, source=SRC, created_by=CreatedBy.USER, comment=comment)
    elif pc.entity_type == "action" and pc.field == "status":
        operations.set_action_status(pc.entity_id, pc.new_value, source=SRC, created_by=CreatedBy.USER, comment=comment)
    else:
        operations_patch = {to_snake(pc.field): pc.new_value}
        if pc.entity_type == "pull_request" and pc.field == "mergeStatus" and pc.new_value == "MERGED":
            operations_patch["status"] = "MERGED"
        changes.update(pc.entity_type, pc.entity_id, operations_patch, source=SRC,
                       created_by=CreatedBy.USER, comment=comment)
    updated = pc.model_copy(update={"status": PendingStatus.APPLIED.value, "resolved_at": now_iso(), "updated_at": now_iso()})
    return repos.pending_changes.save(updated)


def reject_pending(pending_id: str) -> PendingChange:
    pc = repos.pending_changes.get(pending_id)
    if pc is None:
        raise changes.NotFoundError("Cambio pendiente no encontrado")
    updated = pc.model_copy(update={"status": PendingStatus.REJECTED.value, "resolved_at": now_iso(), "updated_at": now_iso()})
    return repos.pending_changes.save(updated)


# ─── Activity AI summary ─────────────────────────────────────────────────────


def activity_summary(activity_id: str) -> Activity:
    from app.agent.schemas import LLMSummary

    snap = snapshot()
    if activity_id not in snap.activities:
        raise changes.NotFoundError("Actividad no encontrada")
    detail = ctx.activity_detail(activity_id, snap, include_history=20)
    provider = get_provider()
    if not provider.health().available:
        raise AIError("Ollama no está disponible para generar el resumen.")
    s = provider.structured([
        {"role": "system", "content": prompts.SUMMARY_SYSTEM.format(today=today_label())},
        {"role": "user", "content": ctx.to_json(detail)},
    ], LLMSummary, temperature=0.2)
    text = s.summary
    if s.risks:
        text += "\n\n**Riesgos:** " + "; ".join(s.risks)
    if s.missing_info:
        text += "\n\n**Por confirmar:** " + "; ".join(s.missing_info)
    text += f"\n\n**Siguiente acción sugerida:** {s.next_action}"
    a = snap.activities[activity_id]
    updated = a.model_copy(update={"ai_summary": text, "ai_summary_at": now_iso()})
    return repos.activities.save(updated)


__all__ = ["chat", "confirm_pending", "reject_pending", "activity_summary", "briefing_with_ai",
           "session_messages", "FIELD_LABELS"]

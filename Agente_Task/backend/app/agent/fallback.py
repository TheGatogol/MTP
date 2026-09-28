"""Deterministic agent used when the AI provider is unavailable. It cannot interpret free-form
updates, but it answers the essentials (briefing, entity status, workload) from the data + rules."""
from app.agent.resolver import resolve
from app.agent.schemas import AgentReply, ChatContext, EntityRef
from app.domain.enums import (
    ActionStatus, ActivityStatus, AutomationStatus, BuildStatus, MergeStatus, RegressionStatus, label,
)
from app.services import recommendations
from app.services.briefing import build_briefing
from app.services.insights import Snapshot, derive_activity, person_workload
from app.utils.text import normalize

BRIEFING_HINTS = ("hoy", "revisar", "briefing", "prioridad", "resumen del dia", "atencion")
PEOPLE_HINTS = ("saturad", "carga", "disponib", "quien tiene")
NO_AI = ("_Modo sin IA: Ollama no está disponible. Puedo mostrar estados, el briefing y la carga del equipo; "
         "para actualizar con lenguaje natural enciende Ollama o usa los formularios._")


def handle(message: str, context: ChatContext, snap: Snapshot, session_id: str) -> AgentReply:
    n = normalize(message)
    if any(h in n for h in BRIEFING_HINTS) and not context.entity_id:
        b = build_briefing(snap)
        return AgentReply(session_id=session_id, mode="fallback", intent="BRIEFING", message=b["text"], briefing=b,
                          recommendations=[f"{i['name']}: {i['action']}" for i in b["items"]])
    if any(h in n for h in PEOPLE_HINTS):
        return AgentReply(session_id=session_id, mode="fallback", intent="QUERY",
                          message=workload_text(snap) + "\n\n" + NO_AI)

    activity_id = None
    if context.entity_id:
        if context.entity_type == "activity":
            activity_id = context.entity_id
        elif context.entity_type == "pull_request" and context.entity_id in snap.prs:
            activity_id = snap.prs[context.entity_id].activity_id
    if not activity_id:
        cands = [c for c in resolve(message, snap) if c.score >= 60]
        for c in cands:
            aid = c.entity_id if c.entity_type == "activity" else c.activity_id
            if aid in snap.activities:
                activity_id = aid
                break
    if activity_id and activity_id in snap.activities:
        a = snap.activities[activity_id]
        findings = recommendations.for_activity(recommendations.sync(snap), activity_id)
        return AgentReply(
            session_id=session_id, mode="fallback", intent="QUERY",
            message=activity_status_text(activity_id, snap) + "\n\n" + NO_AI,
            recommendations=[f.action for f in findings][:3],
            references=[EntityRef(type="activity", id=a.id, name=a.title)],
        )
    return AgentReply(
        session_id=session_id, mode="fallback", intent="SMALLTALK",
        message=("No identifiqué una actividad en tu mensaje. Prueba con un nombre o número de PR "
                 "(p. ej. *DIFO*, *9792*) o pregunta *¿qué tengo que revisar hoy?*.\n\n" + NO_AI),
    )


def activity_status_text(activity_id: str, snap: Snapshot) -> str:
    a = snap.activities[activity_id]
    d = derive_activity(a, snap)
    lines = [
        f"**{a.title}**",
        f"Estado: {label(ActivityStatus, a.status)} · Prioridad: {a.priority or 'Por confirmar'} · "
        f"Responsable: {d['ownerName'] or 'Por confirmar'} · Semáforo: {d['trafficLight']}",
    ]
    if a.technical_status:
        lines.append(f"Estado técnico: {a.technical_status}")
    for b in snap.open_blockers_for(a.id):
        lines.append(f"🔒 Bloqueo {b.type}: {b.description}")
    for p in snap.prs_for(a.id):
        lines.append(
            f"PR {p.pull_request_number}: automatización {label(AutomationStatus, p.automation_status)}, "
            f"build {('#' + str(p.latest_build) + ' ') if p.latest_build else ''}{label(BuildStatus, p.build_status)}, "
            f"regresión {label(RegressionStatus, p.regression_status)}, merge {label(MergeStatus, p.merge_status)}"
        )
    pending = [x.title for x in snap.actions_for(a.id) if x.status in (ActionStatus.PENDING, ActionStatus.IN_PROGRESS)]
    if pending:
        lines.append("Acciones pendientes: " + "; ".join(pending[:5]))
    if a.next_action:
        lines.append(f"Siguiente acción: {a.next_action}")
    qs = snap.open_questions_for(a.id)
    if qs:
        lines.append("Preguntas abiertas: " + " ".join(f"«{q.question}»" for q in qs[:3]))
    if d["reasons"]:
        lines.append("Alertas: " + "; ".join(d["reasons"]))
    return "\n".join(lines)


def workload_text(snap: Snapshot) -> str:
    rows = []
    for p in sorted(snap.people.values(), key=lambda x: x.name):
        w = person_workload(p, snap)
        flag = " ⚠️ posible saturación" if w["saturated"] else ""
        hours = f", {w['assignedHours']}h asignadas / {w['availableHours']}h disponibles" if w["availableHours"] else \
            ", horas disponibles por confirmar"
        rows.append(f"- **{p.name}**: {w['activeActivities']} activas como responsable, "
                    f"{w['supportActivities']} como apoyo{hours}{flag}")
    return "**Carga del equipo**\n" + "\n".join(rows)

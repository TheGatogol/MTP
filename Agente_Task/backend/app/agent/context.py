"""Builds compact, factual context blocks for the LLM from the current snapshot."""
import json
from typing import Any

from app import repositories as repos
from app.domain.enums import ActionStatus
from app.rules import Finding
from app.services.insights import Snapshot, derive_activity, person_workload
from app.utils.time import days_since


def _clean(d: dict[str, Any]) -> dict[str, Any]:
    return {k: v for k, v in d.items() if v not in (None, "", [], {})}


def activity_detail(activity_id: str, snap: Snapshot, include_history: int = 0) -> dict[str, Any]:
    a = snap.activities[activity_id]
    derived = derive_activity(a, snap)
    detail = _clean({
        "id": a.id,
        "title": a.title,
        "type": a.type,
        "project": snap.project_name(a.project_dependency_id),
        "status": a.status,
        "technicalStatus": a.technical_status,
        "priority": a.priority or "Por confirmar",
        "ownerId": a.owner_id,
        "owner": snap.person_name(a.owner_id) or "Por confirmar",
        "support": [snap.person_name(p) for p in a.support_people],
        "dueDate": a.due_date or "Por confirmar",
        "blocked": a.blocked,
        "waitingFor": a.waiting_for,
        "nextAction": a.next_action,
        "nextFollowUp": a.next_follow_up,
        "riskLevel": a.risk_level,
        "riskReason": a.risk_reason,
        "description": a.description,
        "result": a.result,
        "semaforo": derived["trafficLight"],
        "motivosSemaforo": derived["reasons"],
        "diasSinActualizar": derived["daysSinceUpdate"],
        "notasRecientes": [n.text for n in a.notes[-3:]],
        "pullRequests": [_clean({
            "id": p.id, "number": p.pull_request_number, "title": p.title, "status": p.status,
            "automationStatus": p.automation_status, "latestBuild": p.latest_build, "buildStatus": p.build_status,
            "regressionStatus": p.regression_status, "gherkinTotal": p.gherkin_total,
            "gherkinPassed": p.gherkin_passed, "gherkinFailed": p.gherkin_failed,
            "approvalStatus": p.approval_status, "mergeStatus": p.merge_status, "reviewer": p.reviewer,
            "builds": [f"#{b.number}={b.status}" for b in p.builds], "notes": p.notes,
        }) for p in snap.prs_for(a.id)],
        "openBlockers": [_clean({
            "id": b.id, "type": b.type, "description": b.description, "responsible": b.responsible,
            "blockedSince": b.blocked_since or "Por confirmar", "waitingFor": b.waiting_for,
        }) for b in snap.open_blockers_for(a.id)],
        "actions": [
            {"id": x.id, "title": x.title, "status": x.status}
            for x in snap.actions_for(a.id) if x.status != ActionStatus.CANCELLED
        ],
        "openQuestions": [{"id": q.id, "question": q.question} for q in snap.open_questions_for(a.id)],
    })
    if include_history:
        related = {a.id, *(p.id for p in snap.prs_for(a.id))}
        entries = sorted(
            (h for h in repos.history.all() if h.activity_id == a.id or h.entity_id in related),
            key=lambda h: h.created_at, reverse=True,
        )[:include_history]
        detail["historial"] = [
            f"{h.created_at[:10]} {h.entity_name}: {h.field} {_short(h.old_value)} → {_short(h.new_value)}"
            + (f" ({h.comment[:80]})" if h.comment else "")
            for h in reversed(entries)
        ]
    return detail


def _short(v: Any) -> str:
    if v is None:
        return "∅"
    if isinstance(v, (dict, list)):
        return "[…]"
    s = str(v)
    return s if len(s) <= 60 else s[:57] + "…"


def index_block(snap: Snapshot) -> str:
    people = "\n".join(
        f"- {p.id} | {p.name} | {p.role or 'rol por confirmar'} | alias: {', '.join(p.aliases) or '—'}"
        for p in snap.people.values()
    )
    projects = "\n".join(
        f"- {p.id} | {p.name} | {p.jira_id or '—'} | {p.quarter or ''}" for p in snap.projects.values()
    )
    acts = "\n".join(
        f"- {a.id} | {a.title} | {a.status} | resp: {snap.person_name(a.owner_id) or 'por confirmar'}"
        + (" | BLOQUEADA" if a.blocked else "")
        for a in sorted(snap.activities.values(), key=lambda x: x.title)
    )
    return f"PERSONAS (id | nombre | rol | alias):\n{people}\n\nPROYECTOS/DEP (id | nombre | jira | quarter):\n{projects}\n\nACTIVIDADES (id | título | estado | responsable):\n{acts}"


def workload_block(snap: Snapshot) -> str:
    lines = []
    for p in snap.people.values():
        w = person_workload(p, snap)
        titles = [snap.activities[i].title for i in w["activityIds"]]
        lines.append(
            f"- {p.name} ({p.role or 'rol por confirmar'}): {w['activeActivities']} actividades activas como responsable, "
            f"{w['supportActivities']} como apoyo, horas disponibles: {w['availableHours'] if w['availableHours'] is not None else 'por confirmar'}, "
            f"horas asignadas estimadas: {w['assignedHours']}, saturado: {'sí' if w['saturated'] else 'no'}. "
            f"Especialidades: {', '.join(p.specialties) or 'por confirmar'}. Actividades: {'; '.join(titles) or 'ninguna'}"
        )
    return "CARGA DE PERSONAS:\n" + "\n".join(lines)


def findings_block(findings: list[Finding], limit: int = 12) -> str:
    if not findings:
        return "ALERTAS DE REGLAS: ninguna."
    return "ALERTAS DE REGLAS (determinísticas):\n" + "\n".join(
        f"- [{f.severity}] {f.entity_name}: {f.title} → {f.action}" for f in findings[:limit]
    )


def board_block(snap: Snapshot) -> str:
    rows = []
    for a in sorted(snap.activities.values(), key=lambda x: x.title):
        d = derive_activity(a, snap)
        rows.append(
            f"- {a.title} | {a.status} | {d['trafficLight']} | resp: {d['ownerName'] or 'por confirmar'} | "
            f"proyecto: {d['projectName'] or '—'} | {'; '.join(d['reasons'][:3]) or 'sin alertas'}"
        )
    risks = "\n".join(
        f"- {r.title} (nivel: {r.level or 'por confirmar'}): {r.description or ''}"
        for r in snap.risks.values() if r.status == "OPEN"
    )
    initiatives = "\n".join(
        f"- {i.name} | {i.status} | fase: {i.phase or 'por confirmar'} | siguiente: {i.next_action or '—'}"
        for i in snap.initiatives.values()
    )
    return f"TABLERO:\n" + "\n".join(rows) + f"\n\nRIESGOS OPERATIVOS:\n{risks or '—'}\n\nINICIATIVAS:\n{initiatives or '—'}"


def entity_detail(entity_type: str, entity_id: str, snap: Snapshot) -> dict[str, Any] | None:
    if entity_type == "activity" and entity_id in snap.activities:
        return activity_detail(entity_id, snap, include_history=25)
    if entity_type == "pull_request" and entity_id in snap.prs:
        p = snap.prs[entity_id]
        d = {"pullRequest": p.dump(exclude={"created_at", "updated_at"})}
        if p.activity_id in snap.activities:
            d["activity"] = activity_detail(p.activity_id, snap, include_history=25)
        return d
    if entity_type == "project" and entity_id in snap.projects:
        p = snap.projects[entity_id]
        acts = [a for a in snap.activities.values() if a.project_dependency_id == entity_id]
        return {"project": _clean(p.dump(exclude={"created_at", "updated_at"})),
                "activities": [activity_detail(a.id, snap, include_history=8) for a in acts[:5]]}
    if entity_type == "person" and entity_id in snap.people:
        p = snap.people[entity_id]
        w = person_workload(p, snap)
        return {"person": _clean(p.dump(exclude={"created_at", "updated_at"})), "workload": w,
                "activities": [activity_detail(i, snap) for i in w["activityIds"][:6]]}
    if entity_type == "initiative" and entity_id in snap.initiatives:
        i = snap.initiatives[entity_id]
        acts = [a for a in snap.activities.values() if a.initiative_id == entity_id]
        return {"initiative": _clean(i.dump(exclude={"created_at", "updated_at"})),
                "activities": [activity_detail(a.id, snap, include_history=8) for a in acts[:4]]}
    return None


def recent_history_block(days: int = 7, limit: int = 40) -> str:
    entries = [h for h in repos.history.all() if (days_since(h.created_at) or 0) <= days]
    entries.sort(key=lambda h: h.created_at)
    if not entries:
        return f"HISTORIAL ÚLTIMOS {days} DÍAS: sin cambios."
    return f"HISTORIAL ÚLTIMOS {days} DÍAS:\n" + "\n".join(
        f"- {h.created_at[:10]} {h.entity_name}: {h.field} {_short(h.old_value)} → {_short(h.new_value)}"
        for h in entries[-limit:]
    )


def to_json(d: Any) -> str:
    return json.dumps(d, ensure_ascii=False, indent=1)


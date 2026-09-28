"""Deterministic daily briefing and dashboard aggregation."""
from typing import Any

from app import repositories as repos
from app.config import get_settings
from app.domain.enums import (
    ActivityStatus, BlockerStatus, PendingStatus, PRStatus, QuestionStatus, RiskLevel,
)
from app.rules import Finding
from app.rules.engine import SEVERITY_RANK
from app.services import recommendations
from app.services.insights import Snapshot, derive_activity, snapshot
from app.utils.time import greeting, today_label


def attention_items(snap: Snapshot, findings: list[Finding], limit: int = 6) -> list[dict[str, Any]]:
    """Groups findings by activity (or entity) and returns the most important groups."""
    groups: dict[str, list[Finding]] = {}
    for f in findings:
        groups.setdefault(f.activity_id or f.entity_id, []).append(f)
    items = []
    for key, fs in groups.items():
        fs.sort(key=lambda f: SEVERITY_RANK[f.severity])
        main = fs[0]
        items.append({
            "key": key,
            "entityType": "activity" if main.activity_id else main.entity_type,
            "entityId": main.activity_id or main.entity_id,
            "name": main.entity_name,
            "severity": main.severity,
            "situation": main.title,
            "detail": main.message,
            "action": main.action,
            "extra": [f.title for f in fs[1:] if f.title != main.title][:3],
            "ruleIds": [f.rule_id for f in fs],
            "score": sum(3 - SEVERITY_RANK[f.severity] for f in fs),
        })
    items.sort(key=lambda i: (SEVERITY_RANK[i["severity"]], -i["score"]))
    important = [i for i in items if i["severity"] != "LOW"]
    if len(important) < 3:
        important = items
    return important[:limit]


def briefing_text(items: list[dict[str, Any]]) -> str:
    head = f"{greeting()}."
    if not items:
        return f"{head}\n\nNo detecto puntos críticos hoy. El tablero está al día."
    lines = [head, "", f"Hoy recomiendo revisar {len(items)} punto(s):", ""]
    for n, i in enumerate(items, 1):
        lines.append(f"{n}. **{i['name']}**")
        lines.append(i["situation"])
        lines.append(f"Acción: {i['action']}")
        lines.append("")
    return "\n".join(lines).strip()


def build_briefing(snap: Snapshot | None = None) -> dict[str, Any]:
    snap = snap or snapshot()
    findings = recommendations.sync(snap)
    items = attention_items(snap, findings, limit=5)
    return {"greeting": greeting(), "date": today_label(), "items": items, "text": briefing_text(items)}


def build_dashboard() -> dict[str, Any]:
    snap = snapshot()
    findings = recommendations.sync(snap)
    active = snap.active_activities()
    derived = {a.id: derive_activity(a, snap) for a in active}
    open_prs = [p for p in snap.prs.values() if p.status in (PRStatus.OPEN, PRStatus.DRAFT)]
    open_questions = [q for q in snap.questions.values() if q.status == QuestionStatus.OPEN]
    pending = [p for p in repos.pending_changes.all() if p.status == PendingStatus.PENDING]
    open_risks = [r for r in snap.risks.values() if r.status == "OPEN"]

    def entity_label(q) -> str | None:
        if q.activity_id and q.activity_id in snap.activities:
            return snap.activities[q.activity_id].title
        for coll in (snap.activities, snap.prs, snap.projects, snap.initiatives, snap.people):
            if q.entity_id in coll:
                e = coll[q.entity_id]
                return getattr(e, "title", None) or getattr(e, "name", None)
        return q.group

    status_counts = {s.value: 0 for s in ActivityStatus}
    for a in snap.activities.values():
        status_counts[a.status] = status_counts.get(a.status, 0) + 1

    lights = {"GREEN": 0, "YELLOW": 0, "RED": 0}
    for d in derived.values():
        lights[d["trafficLight"]] = lights.get(d["trafficLight"], 0) + 1

    recent = sorted(repos.history.all(), key=lambda h: h.created_at, reverse=True)[:8]
    user = get_settings().current_user_name
    return {
        "greeting": greeting(),
        "userName": user,
        "date": today_label(),
        "kpis": {
            "openPrs": len(open_prs),
            "blocked": sum(1 for a in active if a.blocked),
            "highRisks": sum(1 for d in derived.values() if d["effectiveRisk"] == "HIGH")
            + sum(1 for r in open_risks if r.level == RiskLevel.HIGH),
            "waitingThirdParty": sum(1 for d in derived.values() if d["isWaiting"]),
            "active": len(active),
            "openQuestions": len(open_questions),
            "pendingConfirmations": len(pending),
            "openBlockers": sum(1 for b in snap.blockers.values() if b.status == BlockerStatus.OPEN),
        },
        "trafficLights": lights,
        "statusCounts": status_counts,
        "attention": attention_items(snap, findings),
        "pendingChanges": [p.dump() for p in sorted(pending, key=lambda p: p.created_at, reverse=True)],
        "openQuestions": [
            {**q.dump(), "entityLabel": entity_label(q)}
            for q in sorted(open_questions, key=lambda q: q.created_at)
        ],
        "risks": [r.dump() for r in open_risks],
        "recentHistory": [h.dump() for h in recent],
    }

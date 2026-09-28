"""Persists rule findings as AI_RECOMMENDATION documents so they can be dismissed and tracked."""
from app import repositories as repos
from app.domain.enums import RecommendationStatus
from app.domain.models import Recommendation
from app.rules import Finding, run_rules
from app.services.insights import Snapshot
from app.utils.time import now_iso


def sync(snap: Snapshot) -> list[Finding]:
    """Runs the rules and upserts recommendations. Only writes when something changed."""
    findings = run_rules(snap)
    current = {r.id: r for r in repos.recommendations.all() if r.source == "RULES"}
    seen = set()
    to_save = []
    for f in findings:
        seen.add(f.key)
        existing = current.get(f.key)
        fields = dict(
            rule_id=f.rule_id, entity_type=f.entity_type, entity_id=f.entity_id, entity_name=f.entity_name,
            activity_id=f.activity_id, severity=f.severity, title=f.title, message=f.message,
            action=f.action, category=f.category,
        )
        if existing is None:
            to_save.append(Recommendation(id=f.key, source="RULES", **fields))
        else:
            changed = any(getattr(existing, k) != v for k, v in fields.items())
            reopened = existing.status == RecommendationStatus.RESOLVED
            if changed or reopened:
                status = RecommendationStatus.OPEN if reopened or existing.status == RecommendationStatus.OPEN \
                    else existing.status
                to_save.append(existing.model_copy(update={**fields, "status": status, "updated_at": now_iso()}))
    for key, rec in current.items():
        if key not in seen and rec.status != RecommendationStatus.RESOLVED:
            to_save.append(rec.model_copy(update={"status": RecommendationStatus.RESOLVED.value, "updated_at": now_iso()}))
    if to_save:
        repos.recommendations.save_many(to_save)
    dismissed = {r.id for r in repos.recommendations.all() if r.status == RecommendationStatus.DISMISSED}
    return [f for f in findings if f.key not in dismissed]


def for_activity(findings: list[Finding], activity_id: str) -> list[Finding]:
    return [f for f in findings if f.activity_id == activity_id]

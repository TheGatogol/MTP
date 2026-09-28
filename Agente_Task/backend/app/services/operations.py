"""Domain operations that touch more than one entity (blockers ↔ activity, builds ↔ PR, etc.)."""
from typing import Any

from app import repositories as repos
from app.domain.enums import (
    CLOSED_STATUSES, ActionStatus, ActivityStatus, BlockerStatus, CreatedBy, HistorySource,
    QuestionStatus, label,
)
from app.domain.models import Action, Blocker, Build, Note
from app.services import changes
from app.services.changes import ConfirmationRequired, NotFoundError
from app.utils.time import now_iso, today

# Changes that always require explicit confirmation (from the agent or the Kanban).
IMPORTANT_STATUS = {ActivityStatus.DONE.value, ActivityStatus.CANCELLED.value}


def create_blocker(
    activity_id: str, data: dict[str, Any], *, source: HistorySource = HistorySource.UI,
    created_by: CreatedBy = CreatedBy.USER, comment: str | None = None,
    follow_up_action: bool = True,
) -> Blocker:
    activity = repos.activities.get(activity_id)
    if activity is None:
        raise NotFoundError("Actividad no encontrada")
    payload = {**data, "activityId": activity_id, "status": BlockerStatus.OPEN.value}
    payload.setdefault("blockedSince", today().isoformat())
    blocker = changes.create_from_dict("blocker", payload, source=source, created_by=created_by, comment=comment)
    patch: dict[str, Any] = {"blocked": True, "blocker_id": blocker.id}
    if blocker.waiting_for:
        patch["waiting_for"] = blocker.waiting_for
    changes.update("activity", activity_id, patch, source=source, created_by=created_by, comment=comment)
    if follow_up_action:
        who = f" con {blocker.responsible}" if blocker.responsible else ""
        changes.create("action", Action(
            activity_id=activity_id,
            title=f"Dar seguimiento{who}: {blocker.description[:90]}",
            created_by=created_by if created_by != CreatedBy.USER else CreatedBy.SYSTEM,
            order=_next_order(activity_id),
        ), source=source, created_by=created_by)
    return blocker


def resolve_blocker(
    blocker_id: str, resolution: str | None, *, source: HistorySource = HistorySource.UI,
    created_by: CreatedBy = CreatedBy.USER,
) -> Blocker:
    blocker = repos.blockers.get(blocker_id)
    if blocker is None:
        raise NotFoundError("Bloqueo no encontrado")
    blocker, _ = changes.update("blocker", blocker_id, {
        "status": BlockerStatus.RESOLVED.value, "resolution": resolution or "Resuelto", "resolved_at": now_iso(),
    }, source=source, created_by=created_by, comment=resolution)
    remaining = [b for b in repos.blockers.all()
                 if b.activity_id == blocker.activity_id and b.status == BlockerStatus.OPEN]
    patch: dict[str, Any] = {"blocked": bool(remaining), "blocker_id": remaining[0].id if remaining else None}
    activity = repos.activities.get(blocker.activity_id)
    if not remaining and activity and activity.waiting_for and activity.waiting_for == blocker.waiting_for:
        patch["waiting_for"] = None
    changes.update("activity", blocker.activity_id, patch, source=source, created_by=created_by,
                   comment=f"Bloqueo resuelto: {resolution or ''}".strip())
    return blocker


def follow_up_blocker(blocker_id: str, comment: str | None, next_follow_up: str | None) -> Blocker:
    patch: dict[str, Any] = {"last_follow_up": today().isoformat()}
    if next_follow_up is not None:
        patch["next_follow_up"] = next_follow_up
    blocker, _ = changes.update("blocker", blocker_id, patch, comment=comment)
    if comment:
        add_note(blocker.activity_id, f"Seguimiento de bloqueo: {comment}", HistorySource.UI, CreatedBy.USER)
    return blocker


def move_activity(activity_id: str, status: str, confirmed: bool, source: HistorySource) -> Any:
    activity = repos.activities.get(activity_id)
    if activity is None:
        raise NotFoundError("Actividad no encontrada")
    if status in IMPORTANT_STATUS and activity.status != status and not confirmed:
        raise ConfirmationRequired(
            f"Mover a '{label(ActivityStatus, status)}' es un cambio importante y requiere confirmación.",
            reason="IMPORTANT_STATUS",
        )
    updated, _ = changes.update("activity", activity_id, {"status": status}, source=source)
    return updated


def add_note(activity_id: str, text: str, source: HistorySource, created_by: CreatedBy) -> None:
    activity = repos.activities.get(activity_id)
    if activity is None or not text.strip():
        return
    note = Note(text=text.strip(), source=source)
    now = now_iso()
    repos.activities.save(activity.model_copy(update={
        "notes": [*activity.notes, note], "last_update": now, "updated_at": now,
    }))
    changes.record_history("activity", activity, "note", None, note.text, source=source, created_by=created_by)


def _next_order(activity_id: str) -> int:
    orders = [a.order for a in repos.actions.all() if a.activity_id == activity_id]
    return (max(orders) + 1) if orders else 0


def create_action(activity_id: str, data: dict[str, Any], *, source: HistorySource = HistorySource.UI,
                  created_by: CreatedBy = CreatedBy.USER) -> Action:
    if repos.activities.get(activity_id) is None:
        raise NotFoundError("Actividad no encontrada")
    payload = {**data, "activityId": activity_id, "createdBy": created_by.value}
    payload.setdefault("order", _next_order(activity_id))
    return changes.create_from_dict("action", payload, source=source, created_by=created_by)


def set_action_status(action_id: str, status: str, *, source: HistorySource = HistorySource.UI,
                      created_by: CreatedBy = CreatedBy.USER, comment: str | None = None) -> Action:
    patch: dict[str, Any] = {"status": status}
    patch["completed_at"] = now_iso() if status == ActionStatus.DONE else None
    action, _ = changes.update("action", action_id, patch, source=source, created_by=created_by, comment=comment)
    return action


def add_build(pr_id: str, number: int | None, status: str, notes: str | None, *,
              source: HistorySource = HistorySource.UI, created_by: CreatedBy = CreatedBy.USER) -> Any:
    pr = repos.pull_requests.get(pr_id)
    if pr is None:
        raise NotFoundError("PR no encontrada")
    builds = [b for b in pr.builds if number is None or b.number != number]
    builds.append(Build(number=number, status=status, date=today().isoformat(), notes=notes))
    builds.sort(key=lambda b: b.number or 0)
    patch: dict[str, Any] = {"builds": [b.model_dump() for b in builds], "build_status": status}
    if number is not None and (pr.latest_build is None or number >= pr.latest_build):
        patch["latest_build"] = number
    updated, _ = changes.update("pull_request", pr_id, patch, source=source, created_by=created_by, comment=notes)
    return updated


def delete_activity(activity_id: str) -> None:
    if repos.activities.get(activity_id) is None:
        raise NotFoundError("Actividad no encontrada")
    for a in [x for x in repos.actions.all() if x.activity_id == activity_id]:
        changes.delete("action", a.id)
    for b in [x for x in repos.blockers.all() if x.activity_id == activity_id]:
        changes.delete("blocker", b.id)
    for pr in [x for x in repos.pull_requests.all() if x.activity_id == activity_id]:
        changes.update("pull_request", pr.id, {"activity_id": None})
    for q in [x for x in repos.questions.all() if x.activity_id == activity_id and x.status == QuestionStatus.OPEN]:
        changes.update("question", q.id, {"status": QuestionStatus.DISMISSED.value})
    changes.delete("activity", activity_id)


def is_closed(status: str) -> bool:
    return status in CLOSED_STATUSES

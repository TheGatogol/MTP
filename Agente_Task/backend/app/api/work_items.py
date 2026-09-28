"""Actions, blockers and pull requests."""
from typing import Any

from fastapi import APIRouter, HTTPException
from pydantic import BaseModel

from app import repositories as repos
from app.domain.enums import BlockerStatus, PRStatus
from app.services import changes, operations
from app.services.changes import NotFoundError
from app.services.insights import derive_activity, snapshot
from app.utils.time import days_since

actions_router = APIRouter(prefix="/api/actions", tags=["actions"])
blockers_router = APIRouter(prefix="/api/blockers", tags=["blockers"])
prs_router = APIRouter(prefix="/api/prs", tags=["pull_requests"])


# ─── Actions ────────────────────────────────────────────────────────────────


@actions_router.get("")
def list_actions(activityId: str | None = None):
    items = [a for a in repos.actions.all() if activityId is None or a.activity_id == activityId]
    return [a.dump() for a in sorted(items, key=lambda a: (a.order, a.created_at))]


@actions_router.post("")
def create_action(body: dict[str, Any]):
    activity_id = body.get("activityId")
    if not activity_id:
        raise HTTPException(400, "activityId es obligatorio")
    return operations.create_action(activity_id, body).dump()


@actions_router.patch("/{action_id}")
def update_action(action_id: str, body: dict[str, Any]):
    body = dict(body)
    status = body.pop("status", None)
    action = repos.actions.get(action_id)
    if action is None:
        raise NotFoundError("Acción no encontrada")
    if body:
        action, _ = changes.update("action", action_id, body)
    if status and status != action.status:
        action = operations.set_action_status(action_id, status)
    return action.dump()


@actions_router.delete("/{action_id}")
def delete_action(action_id: str):
    changes.delete("action", action_id)
    return {"ok": True}


# ─── Blockers ───────────────────────────────────────────────────────────────


class ResolveBody(BaseModel):
    resolution: str | None = None


class FollowUpBody(BaseModel):
    comment: str | None = None
    nextFollowUp: str | None = None


def _enrich_blocker(b, snap) -> dict[str, Any]:
    a = snap.activities.get(b.activity_id)
    return {
        **b.dump(),
        "activityTitle": a.title if a else None,
        "ownerName": snap.person_name(a.owner_id) if a else None,
        "blockedDays": days_since(b.blocked_since) if b.status == BlockerStatus.OPEN else None,
    }


@blockers_router.get("")
def list_blockers(status: str | None = None, activityId: str | None = None):
    snap = snapshot()
    items = [b for b in snap.blockers.values()
             if (status is None or b.status == status) and (activityId is None or b.activity_id == activityId)]
    items.sort(key=lambda b: (b.status != BlockerStatus.OPEN, b.blocked_since or "0000"))
    return [_enrich_blocker(b, snap) for b in items]


@blockers_router.post("")
def create_blocker(body: dict[str, Any]):
    activity_id = body.get("activityId")
    if not activity_id:
        raise HTTPException(400, "activityId es obligatorio")
    blocker = operations.create_blocker(activity_id, body, follow_up_action=bool(body.get("createFollowUp", True)))
    return _enrich_blocker(blocker, snapshot())


@blockers_router.patch("/{blocker_id}")
def update_blocker(blocker_id: str, body: dict[str, Any]):
    blocker, _ = changes.update("blocker", blocker_id, body)
    return _enrich_blocker(blocker, snapshot())


@blockers_router.post("/{blocker_id}/resolve")
def resolve_blocker(blocker_id: str, body: ResolveBody):
    blocker = operations.resolve_blocker(blocker_id, body.resolution)
    return _enrich_blocker(blocker, snapshot())


@blockers_router.post("/{blocker_id}/follow-up")
def follow_up(blocker_id: str, body: FollowUpBody):
    blocker = operations.follow_up_blocker(blocker_id, body.comment, body.nextFollowUp)
    return _enrich_blocker(blocker, snapshot())


# ─── Pull requests ──────────────────────────────────────────────────────────


class BuildBody(BaseModel):
    number: int | None = None
    status: str
    notes: str | None = None


def _enrich_pr(p, snap) -> dict[str, Any]:
    a = snap.activities.get(p.activity_id or "")
    return {
        **p.dump(),
        "activityTitle": a.title if a else None,
        "trafficLight": derive_activity(a, snap)["trafficLight"] if a else None,
        "ownerName": snap.person_name(a.owner_id) if a else None,
        "projectName": snap.project_name(p.project_id),
        "isOpen": p.status in (PRStatus.OPEN, PRStatus.DRAFT),
    }


@prs_router.get("")
def list_prs():
    snap = snapshot()
    return [_enrich_pr(p, snap) for p in sorted(snap.prs.values(), key=lambda p: p.pull_request_number, reverse=True)]


@prs_router.post("")
def create_pr(body: dict[str, Any]):
    pr = changes.create_from_dict("pull_request", body)
    return _enrich_pr(pr, snapshot())


@prs_router.get("/{pr_id}")
def get_pr(pr_id: str):
    snap = snapshot()
    p = snap.prs.get(pr_id)
    if p is None:
        raise NotFoundError("PR no encontrada")
    history = sorted((h for h in repos.history.all() if h.entity_id == pr_id), key=lambda h: h.created_at, reverse=True)
    return {**_enrich_pr(p, snap), "history": [h.dump() for h in history]}


@prs_router.patch("/{pr_id}")
def update_pr(pr_id: str, body: dict[str, Any]):
    pr, _ = changes.update("pull_request", pr_id, body)
    return _enrich_pr(pr, snapshot())


@prs_router.post("/{pr_id}/builds")
def add_build(pr_id: str, body: BuildBody):
    pr = operations.add_build(pr_id, body.number, body.status, body.notes)
    return _enrich_pr(pr, snapshot())


@prs_router.delete("/{pr_id}")
def delete_pr(pr_id: str):
    changes.delete("pull_request", pr_id)
    return {"ok": True}

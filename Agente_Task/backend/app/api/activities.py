from typing import Any

from fastapi import APIRouter
from pydantic import BaseModel

from app import repositories as repos
from app.agent import service as agent
from app.domain.enums import ActionStatus, HistorySource, QuestionStatus
from app.services import changes, operations, recommendations
from app.services.changes import NotFoundError
from app.services.insights import enrich_activity, snapshot

router = APIRouter(prefix="/api/activities", tags=["activities"])


class MoveBody(BaseModel):
    status: str
    confirmed: bool = False


class NoteBody(BaseModel):
    text: str


def _history_for_activity(activity_id: str, pr_ids: list[str]) -> list[dict[str, Any]]:
    related = {activity_id, *pr_ids}
    entries = [h for h in repos.history.all() if h.activity_id == activity_id or h.entity_id in related]
    return [h.dump() for h in sorted(entries, key=lambda h: h.created_at, reverse=True)]


@router.get("")
def list_activities():
    snap = snapshot()
    return [enrich_activity(a, snap) for a in sorted(snap.activities.values(), key=lambda a: a.updated_at, reverse=True)]


@router.post("")
def create_activity(body: dict[str, Any]):
    activity = changes.create_from_dict("activity", body)
    return enrich_activity(activity, snapshot())


@router.get("/{activity_id}")
def get_activity(activity_id: str):
    snap = snapshot()
    a = snap.activities.get(activity_id)
    if a is None:
        raise NotFoundError("Actividad no encontrada")
    prs = snap.prs_for(a.id)
    findings = recommendations.for_activity(recommendations.sync(snap), a.id)
    pending_actions = [x for x in snap.actions_for(a.id) if x.status in (ActionStatus.PENDING, ActionStatus.IN_PROGRESS)]
    if findings:
        next_action = {"text": findings[0].action, "reason": findings[0].title, "source": "RULES"}
    elif a.next_action:
        next_action = {"text": a.next_action, "reason": None, "source": "ACTIVITY"}
    elif pending_actions:
        next_action = {"text": pending_actions[0].title, "reason": "Primera acción pendiente", "source": "ACTIONS"}
    else:
        next_action = None
    questions = [q for q in snap.questions.values() if q.activity_id == a.id or q.entity_id == a.id]
    project = snap.projects.get(a.project_dependency_id or "")
    initiative = snap.initiatives.get(a.initiative_id or "")
    return {
        "activity": enrich_activity(a, snap),
        "project": project.dump() if project else None,
        "initiative": initiative.dump() if initiative else None,
        "owner": snap.people[a.owner_id].dump() if a.owner_id in snap.people else None,
        "supportPeople": [snap.people[p].dump() for p in a.support_people if p in snap.people],
        "pullRequests": [p.dump() for p in prs],
        "blockers": [b.dump() for b in sorted(snap.blockers_for(a.id), key=lambda b: b.created_at, reverse=True)],
        "actions": [x.dump() for x in snap.actions_for(a.id)],
        "questions": [q.dump() for q in sorted(questions, key=lambda q: (q.status != QuestionStatus.OPEN, q.created_at))],
        "history": _history_for_activity(a.id, [p.id for p in prs]),
        "recommendations": [f.dump() for f in findings],
        "nextRecommendedAction": next_action,
    }


@router.patch("/{activity_id}")
def update_activity(activity_id: str, body: dict[str, Any]):
    activity, _ = changes.update("activity", activity_id, body)
    return enrich_activity(activity, snapshot())


@router.post("/{activity_id}/move")
def move_activity(activity_id: str, body: MoveBody):
    activity = operations.move_activity(activity_id, body.status, body.confirmed, HistorySource.KANBAN)
    return enrich_activity(activity, snapshot())


@router.post("/{activity_id}/notes")
def add_note(activity_id: str, body: NoteBody):
    from app.domain.enums import CreatedBy

    operations.add_note(activity_id, body.text, HistorySource.UI, CreatedBy.USER)
    return enrich_activity(repos.activities.get(activity_id), snapshot())


@router.post("/{activity_id}/ai-summary")
def ai_summary(activity_id: str):
    activity = agent.activity_summary(activity_id)
    return enrich_activity(activity, snapshot())


@router.delete("/{activity_id}")
def delete_activity(activity_id: str):
    operations.delete_activity(activity_id)
    return {"ok": True}

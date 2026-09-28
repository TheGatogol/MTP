"""Projects/dependencies, people, initiatives and operational risks."""
from typing import Any

from fastapi import APIRouter

from app import repositories as repos
from app.domain.enums import BlockerStatus, QuestionStatus
from app.services import changes
from app.services.changes import NotFoundError
from app.services.insights import enrich_activity, enrich_person, person_workload, snapshot

projects_router = APIRouter(prefix="/api/projects", tags=["projects"])
people_router = APIRouter(prefix="/api/people", tags=["people"])
initiatives_router = APIRouter(prefix="/api/initiatives", tags=["initiatives"])
risks_router = APIRouter(prefix="/api/risks", tags=["risks"])


def _questions_for(snap, entity_ids: set[str]) -> list[dict[str, Any]]:
    return [q.dump() for q in snap.questions.values()
            if q.status == QuestionStatus.OPEN and (q.entity_id in entity_ids or q.activity_id in entity_ids)]


# ─── Projects / dependencies ────────────────────────────────────────────────


@projects_router.get("")
def list_projects():
    snap = snapshot()
    out = []
    for p in sorted(snap.projects.values(), key=lambda p: p.name):
        acts = [a for a in snap.activities.values() if a.project_dependency_id == p.id]
        out.append({
            **p.dump(),
            "activityCount": len(acts),
            "blockedCount": sum(1 for a in acts if a.blocked),
            "prCount": sum(1 for pr in snap.prs.values() if pr.project_id == p.id),
            "openQuestions": len(_questions_for(snap, {p.id, *(a.id for a in acts)})),
        })
    return out


@projects_router.post("")
def create_project(body: dict[str, Any]):
    return changes.create_from_dict("project", body).dump()


@projects_router.get("/{project_id}")
def get_project(project_id: str):
    snap = snapshot()
    p = snap.projects.get(project_id)
    if p is None:
        raise NotFoundError("Proyecto no encontrado")
    acts = [a for a in snap.activities.values() if a.project_dependency_id == p.id]
    act_ids = {a.id for a in acts}
    people_ids = {a.owner_id for a in acts if a.owner_id} | {s for a in acts for s in a.support_people}
    initiative_ids = {a.initiative_id for a in acts if a.initiative_id}
    return {
        "project": p.dump(),
        "activities": [enrich_activity(a, snap) for a in acts],
        "pullRequests": [pr.dump() for pr in snap.prs.values() if pr.project_id == p.id or pr.activity_id in act_ids],
        "blockers": [b.dump() for b in snap.blockers.values() if b.activity_id in act_ids and b.status == BlockerStatus.OPEN],
        "people": [snap.people[i].dump() for i in people_ids if i in snap.people],
        "initiatives": [snap.initiatives[i].dump() for i in initiative_ids if i in snap.initiatives],
        "questions": _questions_for(snap, {p.id, *act_ids}),
        "history": [h.dump() for h in sorted(
            (h for h in repos.history.all() if h.entity_id == p.id), key=lambda h: h.created_at, reverse=True)],
    }


@projects_router.patch("/{project_id}")
def update_project(project_id: str, body: dict[str, Any]):
    project, _ = changes.update("project", project_id, body)
    return project.dump()


@projects_router.delete("/{project_id}")
def delete_project(project_id: str):
    for a in repos.activities.all():
        if a.project_dependency_id == project_id:
            changes.update("activity", a.id, {"project_dependency_id": None})
    changes.delete("project", project_id)
    return {"ok": True}


# ─── People ─────────────────────────────────────────────────────────────────


@people_router.get("")
def list_people():
    snap = snapshot()
    return [enrich_person(p, snap) for p in sorted(snap.people.values(), key=lambda p: p.name)]


@people_router.post("")
def create_person(body: dict[str, Any]):
    person = changes.create_from_dict("person", body)
    return enrich_person(person, snapshot())


@people_router.get("/{person_id}")
def get_person(person_id: str):
    snap = snapshot()
    p = snap.people.get(person_id)
    if p is None:
        raise NotFoundError("Persona no encontrada")
    owned = [a for a in snap.activities.values() if a.owner_id == p.id]
    support = [a for a in snap.activities.values() if p.id in a.support_people and a.owner_id != p.id]
    project_ids = {a.project_dependency_id for a in owned + support if a.project_dependency_id}
    return {
        "person": enrich_person(p, snap),
        "owned": [enrich_activity(a, snap) for a in owned],
        "support": [enrich_activity(a, snap) for a in support],
        "projects": [snap.projects[i].dump() for i in project_ids if i in snap.projects],
        "initiatives": [i.dump() for i in snap.initiatives.values() if i.owner_id == p.id or p.id in i.collaborators],
        "workload": person_workload(p, snap),
    }


@people_router.patch("/{person_id}")
def update_person(person_id: str, body: dict[str, Any]):
    person, _ = changes.update("person", person_id, body)
    return enrich_person(person, snapshot())


@people_router.delete("/{person_id}")
def delete_person(person_id: str):
    changes.delete("person", person_id)
    return {"ok": True}


# ─── Initiatives ────────────────────────────────────────────────────────────


@initiatives_router.get("")
def list_initiatives():
    snap = snapshot()
    out = []
    for i in sorted(snap.initiatives.values(), key=lambda i: i.name):
        acts = [a for a in snap.activities.values() if a.initiative_id == i.id]
        out.append({
            **i.dump(),
            "ownerName": snap.person_name(i.owner_id),
            "activityCount": len(acts),
            "openQuestions": len(_questions_for(snap, {i.id, *(a.id for a in acts)})),
        })
    return out


@initiatives_router.post("")
def create_initiative(body: dict[str, Any]):
    return changes.create_from_dict("initiative", body).dump()


@initiatives_router.get("/{initiative_id}")
def get_initiative(initiative_id: str):
    snap = snapshot()
    i = snap.initiatives.get(initiative_id)
    if i is None:
        raise NotFoundError("Iniciativa no encontrada")
    acts = [a for a in snap.activities.values() if a.initiative_id == i.id]
    return {
        "initiative": {**i.dump(), "ownerName": snap.person_name(i.owner_id)},
        "activities": [enrich_activity(a, snap) for a in acts],
        "collaborators": [snap.people[c].dump() for c in i.collaborators if c in snap.people],
        "questions": _questions_for(snap, {i.id, *(a.id for a in acts)}),
        "history": [h.dump() for h in sorted(
            (h for h in repos.history.all() if h.entity_id == i.id), key=lambda h: h.created_at, reverse=True)],
    }


@initiatives_router.patch("/{initiative_id}")
def update_initiative(initiative_id: str, body: dict[str, Any]):
    initiative, _ = changes.update("initiative", initiative_id, body)
    return initiative.dump()


@initiatives_router.delete("/{initiative_id}")
def delete_initiative(initiative_id: str):
    changes.delete("initiative", initiative_id)
    return {"ok": True}


# ─── Risks ──────────────────────────────────────────────────────────────────


@risks_router.get("")
def list_risks():
    return [r.dump() for r in sorted(repos.risks.all(), key=lambda r: r.created_at)]


@risks_router.post("")
def create_risk(body: dict[str, Any]):
    return changes.create_from_dict("risk", body).dump()


@risks_router.patch("/{risk_id}")
def update_risk(risk_id: str, body: dict[str, Any]):
    risk, _ = changes.update("risk", risk_id, body)
    return risk.dump()

"""Read-side helpers: an in-memory snapshot of the board plus derived indicators
(traffic light, effective risk, workload). Derived values are computed on read, never stored,
so they are always consistent with the data."""
from dataclasses import dataclass, field
from datetime import date
from typing import Any

from app import repositories as repos
from app.domain.enums import (
    ACTIVE_STATUSES, CLOSED_STATUSES, RISK_RANK, ActionStatus, BlockerStatus, BuildStatus,
    PRStatus, ProjectStatus, QuestionStatus, RegressionStatus, RiskLevel, TrafficLight,
)
from app.domain.models import (
    Action, Activity, AppSettings, Blocker, Initiative, OpenQuestion, Person, Project, PullRequest, Risk,
)
from app.utils.time import days_since, days_until, today


@dataclass
class Snapshot:
    today: date
    settings: AppSettings
    activities: dict[str, Activity]
    actions: dict[str, Action]
    blockers: dict[str, Blocker]
    prs: dict[str, PullRequest]
    people: dict[str, Person]
    projects: dict[str, Project]
    initiatives: dict[str, Initiative]
    risks: dict[str, Risk]
    questions: dict[str, OpenQuestion]
    _prs_by_activity: dict[str, list[PullRequest]] = field(default_factory=dict)
    _blockers_by_activity: dict[str, list[Blocker]] = field(default_factory=dict)
    _actions_by_activity: dict[str, list[Action]] = field(default_factory=dict)

    def __post_init__(self):
        for pr in self.prs.values():
            if pr.activity_id:
                self._prs_by_activity.setdefault(pr.activity_id, []).append(pr)
        for b in self.blockers.values():
            self._blockers_by_activity.setdefault(b.activity_id, []).append(b)
        for a in sorted(self.actions.values(), key=lambda x: (x.order, x.created_at)):
            self._actions_by_activity.setdefault(a.activity_id, []).append(a)

    def prs_for(self, activity_id: str) -> list[PullRequest]:
        return self._prs_by_activity.get(activity_id, [])

    def blockers_for(self, activity_id: str) -> list[Blocker]:
        return self._blockers_by_activity.get(activity_id, [])

    def open_blockers_for(self, activity_id: str) -> list[Blocker]:
        return [b for b in self.blockers_for(activity_id) if b.status == BlockerStatus.OPEN]

    def actions_for(self, activity_id: str) -> list[Action]:
        return self._actions_by_activity.get(activity_id, [])

    def open_questions_for(self, *entity_ids: str) -> list[OpenQuestion]:
        ids = set(entity_ids)
        return [
            q for q in self.questions.values()
            if q.status == QuestionStatus.OPEN and (q.entity_id in ids or q.activity_id in ids)
        ]

    def person_name(self, person_id: str | None) -> str | None:
        p = self.people.get(person_id) if person_id else None
        return p.name if p else None

    def project_name(self, project_id: str | None) -> str | None:
        p = self.projects.get(project_id) if project_id else None
        return p.name if p else None

    def active_activities(self) -> list[Activity]:
        return [a for a in self.activities.values() if a.status in ACTIVE_STATUSES]


def snapshot() -> Snapshot:
    return Snapshot(
        today=today(),
        settings=repos.get_app_settings(),
        activities={a.id: a for a in repos.activities.all()},
        actions={a.id: a for a in repos.actions.all()},
        blockers={b.id: b for b in repos.blockers.all()},
        prs={p.id: p for p in repos.pull_requests.all()},
        people={p.id: p for p in repos.people.all()},
        projects={p.id: p for p in repos.projects.all()},
        initiatives={i.id: i for i in repos.initiatives.all()},
        risks={r.id: r for r in repos.risks.all()},
        questions={q.id: q for q in repos.questions.all()},
    )


def derive_activity(a: Activity, snap: Snapshot) -> dict[str, Any]:
    s = snap.settings
    open_blockers = snap.open_blockers_for(a.id)
    prs = snap.prs_for(a.id)
    open_prs = [p for p in prs if p.status in (PRStatus.OPEN, PRStatus.DRAFT)]
    actions = snap.actions_for(a.id)
    questions = snap.open_questions_for(a.id)
    d_update = days_since(a.last_update)
    d_due = days_until(a.due_date)
    d_follow = days_until(a.next_follow_up)
    closed = a.status in CLOSED_STATUSES

    red: list[str] = []
    yellow: list[str] = []
    if not closed:
        if a.blocked or open_blockers:
            red.append("Bloqueada")
        if d_due is not None:
            if d_due < 0:
                red.append(f"Vencida hace {-d_due} día(s)")
            elif d_due <= s.due_soon_days:
                red.append("Vence hoy" if d_due == 0 else f"Vence en {d_due} día(s)")
        if a.risk_level == RiskLevel.HIGH:
            red.append("Riesgo alto")
        for pr in open_prs:
            if pr.build_status == BuildStatus.FAILED:
                red.append(f"Build fallido en PR {pr.pull_request_number}")
            if pr.regression_status == RegressionStatus.FAILED or (pr.gherkin_failed or 0) > 0:
                red.append(f"Regresión con fallos en PR {pr.pull_request_number}")
        if d_update is not None and d_update >= s.stale_days:
            yellow.append(f"Sin actualizar hace {d_update} día(s)")
        if a.waiting_for:
            yellow.append(f"Esperando: {a.waiting_for}")
        if d_follow is not None and d_follow <= 0:
            yellow.append("Seguimiento programado vencido" if d_follow < 0 else "Seguimiento programado hoy")
        if a.risk_level == RiskLevel.MEDIUM:
            yellow.append("Riesgo medio")
        if questions:
            yellow.append(f"{len(questions)} pregunta(s) abierta(s)")
        project = snap.projects.get(a.project_dependency_id or "")
        if project and (project.status == ProjectStatus.BLOCKED or project.risk_level == RiskLevel.HIGH):
            yellow.append("Dependencia/proyecto en riesgo")
        for pr in open_prs:
            if pr.build_status == BuildStatus.IN_PROGRESS or pr.regression_status == RegressionStatus.RUNNING:
                yellow.append(f"Ejecución en progreso en PR {pr.pull_request_number}")

    if closed:
        light = TrafficLight.GRAY
    elif red:
        light = TrafficLight.RED
    elif yellow:
        light = TrafficLight.YELLOW
    else:
        light = TrafficLight.GREEN

    computed_risk = "HIGH" if red else ("MEDIUM" if yellow else "LOW")
    effective_risk = None if closed else max(
        [a.risk_level, computed_risk], key=lambda r: RISK_RANK.get(r, 0)
    )
    return {
        "trafficLight": light.value,
        "reasons": red + yellow,
        "effectiveRisk": effective_risk,
        "daysSinceUpdate": d_update,
        "daysToDue": d_due,
        "isStale": bool(not closed and d_update is not None and d_update >= s.stale_days),
        "isDueSoon": bool(not closed and d_due is not None and d_due <= s.due_soon_days),
        "isWaiting": bool(not closed and a.waiting_for),
        "hasOpenPr": bool(open_prs),
        "prBuildFailed": any(p.build_status == BuildStatus.FAILED for p in open_prs),
        "openBlockers": len(open_blockers),
        "openQuestions": len(questions),
        "totalActions": len(actions),
        "doneActions": sum(1 for x in actions if x.status == ActionStatus.DONE),
        "ownerName": snap.person_name(a.owner_id),
        "projectName": snap.project_name(a.project_dependency_id),
        "prNumbers": [p.pull_request_number for p in prs],
    }


def enrich_activity(a: Activity, snap: Snapshot) -> dict[str, Any]:
    return {**a.dump(), "derived": derive_activity(a, snap)}


def person_workload(p: Person, snap: Snapshot) -> dict[str, Any]:
    owned = [a for a in snap.active_activities() if a.owner_id == p.id]
    supporting = [a for a in snap.active_activities() if p.id in a.support_people and a.owner_id != p.id]
    assigned = sum(max((a.estimated_hours or 0) - (a.consumed_hours or 0), 0) for a in owned)
    s = snap.settings
    over_hours = p.available_hours is not None and assigned > p.available_hours
    saturated = len(owned) > s.max_active_activities or over_hours
    load_pct = None
    if p.available_hours:
        load_pct = round(assigned / p.available_hours * 100)
    return {
        "activeActivities": len(owned),
        "supportActivities": len(supporting),
        "assignedHours": round(assigned, 1),
        "availableHours": p.available_hours,
        "loadPct": load_pct,
        "saturated": saturated,
        "blockedActivities": sum(1 for a in owned if a.blocked),
        "activityIds": [a.id for a in owned],
    }


def enrich_person(p: Person, snap: Snapshot) -> dict[str, Any]:
    return {**p.dump(), "workload": person_workload(p, snap)}

"""Persistent entities. Python uses snake_case; Firestore documents and the API use camelCase."""
from typing import Any, Literal

from pydantic import BaseModel, ConfigDict, Field
from pydantic.alias_generators import to_camel

from app.domain.enums import (
    ActionStatus, ActivityStatus, ApprovalStatus, AutomationStatus, BlockerStatus, BlockerType,
    BuildStatus, CreatedBy, HistorySource, InitiativeStatus, MergeStatus, PendingStatus,
    PersonStatus, Priority, PRStatus, ProjectStatus, QuestionStatus, RecommendationStatus,
    RegressionStatus, RiskLevel,
)
from app.utils.time import now_iso


class CamelModel(BaseModel):
    model_config = ConfigDict(
        alias_generator=to_camel, populate_by_name=True, use_enum_values=True, extra="ignore"
    )

    def dump(self, **kwargs) -> dict[str, Any]:
        return self.model_dump(by_alias=True, mode="json", **kwargs)


class Entity(CamelModel):
    id: str = ""
    created_at: str = Field(default_factory=now_iso)
    updated_at: str = Field(default_factory=now_iso)


class Note(CamelModel):
    text: str
    source: HistorySource = HistorySource.UI
    created_at: str = Field(default_factory=now_iso)


class Project(Entity):
    name: str
    kind: Literal["PROJECT", "DEPENDENCY"] = "PROJECT"
    jira_id: str | None = None
    quarter: str | None = None
    scrum: str | None = None
    reporter: str | None = None
    status: ProjectStatus = ProjectStatus.TO_CONFIRM
    start_date: str | None = None
    due_date: str | None = None
    estimated_automation_hours: float | None = None
    assigned_automation_hours: float | None = None
    description: str | None = None
    automation_scope: str | None = None
    risk_level: RiskLevel | None = None
    aliases: list[str] = []


class Activity(Entity):
    title: str
    type: str | None = None
    project_dependency_id: str | None = None
    initiative_id: str | None = None
    description: str | None = None
    priority: Priority | None = None
    status: ActivityStatus = ActivityStatus.PENDING
    technical_status: str | None = None
    owner_id: str | None = None
    support_people: list[str] = []
    requester: str | None = None
    request_date: str | None = None
    due_date: str | None = None
    last_update: str = Field(default_factory=now_iso)
    blocked: bool = False
    blocker_id: str | None = None
    waiting_for: str | None = None
    next_action: str | None = None
    next_follow_up: str | None = None
    evidence_urls: list[str] = []
    estimated_hours: float | None = None
    consumed_hours: float | None = None
    risk_level: RiskLevel | None = None
    risk_reason: str | None = None
    result: str | None = None
    aliases: list[str] = []
    notes: list[Note] = []
    ai_summary: str | None = None
    ai_summary_at: str | None = None


class Action(Entity):
    activity_id: str
    title: str
    description: str | None = None
    owner_id: str | None = None
    status: ActionStatus = ActionStatus.PENDING
    priority: Priority | None = None
    due_date: str | None = None
    created_by: CreatedBy = CreatedBy.USER
    completed_at: str | None = None
    order: int = 0


class Blocker(Entity):
    activity_id: str
    type: BlockerType = BlockerType.UNKNOWN
    description: str
    responsible: str | None = None
    waiting_for: str | None = None
    blocked_since: str | None = None
    last_follow_up: str | None = None
    next_follow_up: str | None = None
    status: BlockerStatus = BlockerStatus.OPEN
    resolution: str | None = None
    resolved_at: str | None = None


class Build(CamelModel):
    number: int | None = None
    status: BuildStatus = BuildStatus.UNKNOWN
    date: str | None = None
    notes: str | None = None


class PullRequest(Entity):
    activity_id: str | None = None
    project_id: str | None = None
    project: str | None = None
    repository: str | None = None
    pull_request_number: str
    jira_ref: str | None = None
    title: str
    branch: str | None = None
    url: str | None = None
    status: PRStatus = PRStatus.OPEN
    automation_status: AutomationStatus = AutomationStatus.UNKNOWN
    latest_build: int | None = None
    build_status: BuildStatus = BuildStatus.UNKNOWN
    regression_status: RegressionStatus = RegressionStatus.UNKNOWN
    gherkin_total: int | None = None
    gherkin_passed: int | None = None
    gherkin_failed: int | None = None
    pending_comments: int | None = None
    reviewer: str | None = None
    approval_status: ApprovalStatus = ApprovalStatus.UNKNOWN
    merge_status: MergeStatus = MergeStatus.NOT_MERGED
    last_update: str = Field(default_factory=now_iso)
    next_action: str | None = None
    risk_level: RiskLevel | None = None
    builds: list[Build] = []
    notes: str | None = None


class Person(Entity):
    name: str
    role: str | None = None
    team: str | None = None
    kind: Literal["INTERNAL", "EXTERNAL"] = "INTERNAL"
    specialties: list[str] = []
    available_hours: float | None = None
    status: PersonStatus = PersonStatus.ACTIVE
    aliases: list[str] = []


class Initiative(Entity):
    name: str
    description: str | None = None
    owner_id: str | None = None
    status: InitiativeStatus = InitiativeStatus.TO_CONFIRM
    phase: str | None = None
    objective: str | None = None
    mvp: str | None = None
    due_date: str | None = None
    risk: str | None = None
    next_action: str | None = None
    collaborators: list[str] = []
    aliases: list[str] = []


class Risk(Entity):
    title: str
    description: str | None = None
    level: RiskLevel | None = None
    status: Literal["OPEN", "MITIGATED", "CLOSED"] = "OPEN"
    mitigation: str | None = None
    related_pr_ids: list[str] = []
    related_activity_ids: list[str] = []


class HistoryEntry(Entity):
    entity_type: str
    entity_id: str
    entity_name: str | None = None
    activity_id: str | None = None
    field: str
    old_value: Any = None
    new_value: Any = None
    comment: str | None = None
    source: HistorySource = HistorySource.UI
    created_by: CreatedBy = CreatedBy.USER


class OpenQuestion(Entity):
    entity_type: str
    entity_id: str | None = None
    activity_id: str | None = None
    question: str
    field: str | None = None
    status: QuestionStatus = QuestionStatus.OPEN
    answer: str | None = None
    answered_at: str | None = None
    created_by: CreatedBy = CreatedBy.SYSTEM
    group: str | None = None


class PendingChange(Entity):
    kind: Literal["UPDATE", "CREATE_BLOCKER"] = "UPDATE"
    entity_type: str
    entity_id: str
    entity_name: str | None = None
    field: str | None = None
    old_value: Any = None
    new_value: Any = None
    payload: dict[str, Any] = {}
    basis: Literal["FACT", "INFERENCE"] = "INFERENCE"
    reason: str | None = None
    evidence: str | None = None
    source_message: str | None = None
    session_id: str | None = None
    status: PendingStatus = PendingStatus.PENDING
    resolved_at: str | None = None


class Recommendation(Entity):
    rule_id: str
    source: Literal["RULES", "AI"] = "RULES"
    entity_type: str
    entity_id: str
    entity_name: str | None = None
    activity_id: str | None = None
    severity: Literal["HIGH", "MEDIUM", "LOW"] = "MEDIUM"
    title: str
    message: str | None = None
    action: str | None = None
    category: str | None = None
    status: RecommendationStatus = RecommendationStatus.OPEN


class ChatSession(Entity):
    title: str = "Conversación"
    context_type: str | None = None
    context_id: str | None = None


class ChatMessage(Entity):
    session_id: str
    role: Literal["user", "assistant"]
    content: str
    data: dict[str, Any] | None = None


class AppSettings(Entity):
    blocked_escalation_days: int = 2
    stale_days: int = 3
    due_soon_days: int = 2
    max_active_activities: int = 5
    current_user_id: str | None = None
    ai_model_override: str | None = None

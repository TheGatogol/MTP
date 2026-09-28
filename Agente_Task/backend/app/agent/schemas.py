"""Schemas. `LLM*` models are sent to Ollama as JSON Schema (structured output). They avoid null
values on purpose: empty string / empty list mean "not provided", which small models handle better."""
from typing import Any, Literal

from pydantic import BaseModel, Field

from app.domain.models import CamelModel

EditableField = Literal[
    # activity
    "status", "technicalStatus", "priority", "ownerId", "dueDate", "waitingFor", "nextAction",
    "nextFollowUp", "riskLevel", "riskReason", "result", "estimatedHours", "consumedHours", "description",
    # pull_request
    "automationStatus", "latestBuild", "buildStatus", "regressionStatus", "gherkinTotal", "gherkinPassed",
    "gherkinFailed", "pendingComments", "reviewer", "approvalStatus", "mergeStatus", "repository",
    "branch", "url",
    # blocker
    "responsible", "lastFollowUp",
]

BlockerTypeLit = Literal[
    "AUTOMATION", "DEVELOPMENT", "ENVIRONMENT", "DATA", "ACCESS", "REVIEWER", "SCRUM", "ITW",
    "CLIENT", "EXTERNAL", "UNKNOWN",
]


class LLMChange(BaseModel):
    entity_type: Literal["activity", "pull_request", "blocker"]
    entity_id: str
    field: EditableField
    new_value: str = Field(description="Siempre texto: enum exacto, fecha YYYY-MM-DD, número o id")
    basis: Literal["FACT", "INFERENCE"]
    evidence: str = Field(description="Frase del usuario que justifica el cambio")


class LLMNewBlocker(BaseModel):
    activity_id: str
    type: BlockerTypeLit
    description: str
    responsible: str = ""
    waiting_for: str = ""
    basis: Literal["FACT", "INFERENCE"]


class LLMNewAction(BaseModel):
    activity_id: str
    title: str
    owner_id: str = ""


class LLMCompleteAction(BaseModel):
    action_id: str
    basis: Literal["FACT", "INFERENCE"]
    evidence: str


class LLMNewActivity(BaseModel):
    title: str
    type: str = ""
    description: str = ""
    priority: Literal["", "P0", "P1", "P2", "P3"] = ""
    owner_id: str = ""
    project_id: str = ""
    due_date: str = ""
    status: Literal["PENDING", "ANALYSIS", "IN_PROGRESS"] = "PENDING"


class LLMInterpretation(BaseModel):
    intent: Literal["UPDATE", "CREATE_ACTIVITY", "QUERY", "BRIEFING", "SMALLTALK"]
    target_entity_type: Literal["activity", "pull_request", "project", "person", "initiative", "none"]
    target_entity_id: str
    facts: list[str]
    inferences: list[str]
    changes: list[LLMChange]
    new_blockers: list[LLMNewBlocker]
    resolve_blocker_ids: list[str]
    new_actions: list[LLMNewAction]
    complete_actions: list[LLMCompleteAction]
    new_activities: list[LLMNewActivity]
    answered_question_ids: list[str]
    note: str
    questions: list[str]


class LLMAnswer(BaseModel):
    answer: str = Field(description="Respuesta directa en español, en markdown breve")
    facts: list[str]
    inferences: list[str]
    recommendations: list[str]
    questions: list[str]


class LLMSummary(BaseModel):
    summary: str
    next_action: str
    risks: list[str]
    missing_info: list[str]


# ─── API models ─────────────────────────────────────────────────────────────


class ChatContext(CamelModel):
    entity_type: str | None = None
    entity_id: str | None = None


class ChatRequest(CamelModel):
    message: str
    session_id: str | None = None
    context: ChatContext | None = None
    question_id: str | None = None


class EntityRef(CamelModel):
    type: str
    id: str
    name: str


class AppliedChange(CamelModel):
    entity_type: str
    entity_id: str
    entity_name: str
    field: str
    old_value: Any = None
    new_value: Any = None


class AgentReply(CamelModel):
    session_id: str
    message_id: str = ""
    mode: Literal["ai", "fallback"]
    intent: str
    message: str
    facts: list[str] = []
    inferences: list[str] = []
    recommendations: list[str] = []
    questions: list[str] = []
    applied_changes: list[AppliedChange] = []
    pending_change_ids: list[str] = []
    created: list[EntityRef] = []
    references: list[EntityRef] = []
    briefing: dict[str, Any] | None = None
    warnings: list[str] = []

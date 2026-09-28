"""Enumerations. Values are stored in English (stable for rules); labels are Spanish (UI/agent)."""
from enum import StrEnum

from app.utils.text import normalize


class ActivityStatus(StrEnum):
    PENDING = "PENDING"
    ANALYSIS = "ANALYSIS"
    IN_PROGRESS = "IN_PROGRESS"
    VALIDATION = "VALIDATION"
    READY_TO_CLOSE = "READY_TO_CLOSE"
    DONE = "DONE"
    CANCELLED = "CANCELLED"


ACTIVE_STATUSES = {
    ActivityStatus.PENDING, ActivityStatus.ANALYSIS, ActivityStatus.IN_PROGRESS,
    ActivityStatus.VALIDATION, ActivityStatus.READY_TO_CLOSE,
}
CLOSED_STATUSES = {ActivityStatus.DONE, ActivityStatus.CANCELLED}


class Priority(StrEnum):
    P0 = "P0"
    P1 = "P1"
    P2 = "P2"
    P3 = "P3"


class RiskLevel(StrEnum):
    LOW = "LOW"
    MEDIUM = "MEDIUM"
    HIGH = "HIGH"


RISK_RANK = {None: 0, "LOW": 1, "MEDIUM": 2, "HIGH": 3}


class TrafficLight(StrEnum):
    GREEN = "GREEN"
    YELLOW = "YELLOW"
    RED = "RED"
    GRAY = "GRAY"


class BlockerType(StrEnum):
    AUTOMATION = "AUTOMATION"
    DEVELOPMENT = "DEVELOPMENT"
    ENVIRONMENT = "ENVIRONMENT"
    DATA = "DATA"
    ACCESS = "ACCESS"
    REVIEWER = "REVIEWER"
    SCRUM = "SCRUM"
    ITW = "ITW"
    CLIENT = "CLIENT"
    EXTERNAL = "EXTERNAL"
    UNKNOWN = "UNKNOWN"


class BlockerStatus(StrEnum):
    OPEN = "OPEN"
    RESOLVED = "RESOLVED"


class ActionStatus(StrEnum):
    PENDING = "PENDING"
    IN_PROGRESS = "IN_PROGRESS"
    DONE = "DONE"
    CANCELLED = "CANCELLED"


class CreatedBy(StrEnum):
    USER = "USER"
    AGENT = "AGENT"
    SYSTEM = "SYSTEM"


class HistorySource(StrEnum):
    UI = "UI"
    AGENT = "AGENT"
    KANBAN = "KANBAN"
    SEED = "SEED"
    SYSTEM = "SYSTEM"


class PRStatus(StrEnum):
    OPEN = "OPEN"
    DRAFT = "DRAFT"
    MERGED = "MERGED"
    DECLINED = "DECLINED"


class AutomationStatus(StrEnum):
    NOT_STARTED = "NOT_STARTED"
    IN_PROGRESS = "IN_PROGRESS"
    MAINTENANCE = "MAINTENANCE"
    IN_REVIEW = "IN_REVIEW"
    COMPLETED = "COMPLETED"
    UNKNOWN = "UNKNOWN"


class BuildStatus(StrEnum):
    PENDING = "PENDING"
    IN_PROGRESS = "IN_PROGRESS"
    PASSED = "PASSED"
    FAILED = "FAILED"
    UNKNOWN = "UNKNOWN"


class RegressionStatus(StrEnum):
    PENDING = "PENDING"
    RUNNING = "RUNNING"
    PASSED = "PASSED"
    FAILED = "FAILED"
    NOT_REQUIRED = "NOT_REQUIRED"
    UNKNOWN = "UNKNOWN"


class ApprovalStatus(StrEnum):
    PENDING = "PENDING"
    APPROVED = "APPROVED"
    CHANGES_REQUESTED = "CHANGES_REQUESTED"
    UNKNOWN = "UNKNOWN"


class MergeStatus(StrEnum):
    NOT_MERGED = "NOT_MERGED"
    MERGED = "MERGED"
    UNKNOWN = "UNKNOWN"


class ProjectStatus(StrEnum):
    TO_CONFIRM = "TO_CONFIRM"
    ACTIVE = "ACTIVE"
    BLOCKED = "BLOCKED"
    ON_HOLD = "ON_HOLD"
    DONE = "DONE"
    CANCELLED = "CANCELLED"


class InitiativeStatus(StrEnum):
    TO_CONFIRM = "TO_CONFIRM"
    NOT_STARTED = "NOT_STARTED"
    IN_PROGRESS = "IN_PROGRESS"
    ON_HOLD = "ON_HOLD"
    DONE = "DONE"
    CANCELLED = "CANCELLED"


class PersonStatus(StrEnum):
    ACTIVE = "ACTIVE"
    INACTIVE = "INACTIVE"


class QuestionStatus(StrEnum):
    OPEN = "OPEN"
    ANSWERED = "ANSWERED"
    DISMISSED = "DISMISSED"


class PendingStatus(StrEnum):
    PENDING = "PENDING"
    APPLIED = "APPLIED"
    REJECTED = "REJECTED"


class RecommendationStatus(StrEnum):
    OPEN = "OPEN"
    DISMISSED = "DISMISSED"
    RESOLVED = "RESOLVED"


LABELS: dict[type[StrEnum], dict[str, str]] = {
    ActivityStatus: {
        "PENDING": "Pendiente", "ANALYSIS": "Análisis", "IN_PROGRESS": "En proceso",
        "VALIDATION": "Validación", "READY_TO_CLOSE": "Lista para cierre",
        "DONE": "Finalizada", "CANCELLED": "Cancelada",
    },
    RiskLevel: {"LOW": "Bajo", "MEDIUM": "Medio", "HIGH": "Alto"},
    BlockerType: {
        "AUTOMATION": "Automation", "DEVELOPMENT": "Development", "ENVIRONMENT": "Environment",
        "DATA": "Data", "ACCESS": "Access", "REVIEWER": "Reviewer", "SCRUM": "Scrum", "ITW": "ITW",
        "CLIENT": "Client", "EXTERNAL": "External", "UNKNOWN": "Unknown",
    },
    BlockerStatus: {"OPEN": "Abierto", "RESOLVED": "Resuelto"},
    ActionStatus: {"PENDING": "Pendiente", "IN_PROGRESS": "En proceso", "DONE": "Hecha", "CANCELLED": "Cancelada"},
    PRStatus: {"OPEN": "Open", "DRAFT": "Draft", "MERGED": "Merged", "DECLINED": "Declined"},
    AutomationStatus: {
        "NOT_STARTED": "Sin iniciar", "IN_PROGRESS": "En proceso", "MAINTENANCE": "Mantenimiento",
        "IN_REVIEW": "En revisión", "COMPLETED": "Terminada", "UNKNOWN": "Por confirmar",
    },
    BuildStatus: {
        "PENDING": "Pending", "IN_PROGRESS": "In Progress", "PASSED": "Passed",
        "FAILED": "Failed", "UNKNOWN": "Unknown",
    },
    RegressionStatus: {
        "PENDING": "Pending", "RUNNING": "Running", "PASSED": "Passed", "FAILED": "Failed",
        "NOT_REQUIRED": "Not Required", "UNKNOWN": "Por confirmar",
    },
    ApprovalStatus: {
        "PENDING": "Pendiente", "APPROVED": "Aprobada", "CHANGES_REQUESTED": "Cambios solicitados",
        "UNKNOWN": "Por confirmar",
    },
    MergeStatus: {"NOT_MERGED": "No mergeada", "MERGED": "Mergeada", "UNKNOWN": "Por confirmar"},
    ProjectStatus: {
        "TO_CONFIRM": "Por confirmar", "ACTIVE": "Activo", "BLOCKED": "Bloqueado",
        "ON_HOLD": "En pausa", "DONE": "Terminado", "CANCELLED": "Cancelado",
    },
    InitiativeStatus: {
        "TO_CONFIRM": "Por confirmar", "NOT_STARTED": "Por iniciar", "IN_PROGRESS": "En proceso",
        "ON_HOLD": "En pausa", "DONE": "Terminada", "CANCELLED": "Cancelada",
    },
}

# Extra natural-language synonyms used to coerce values coming from the LLM or the user.
SYNONYMS: dict[type[StrEnum], dict[str, str]] = {
    ActivityStatus: {
        "en progreso": "IN_PROGRESS", "proceso": "IN_PROGRESS", "terminada": "DONE", "finalizado": "DONE",
        "cerrada": "DONE", "completada": "DONE", "cancelado": "CANCELLED", "lista": "READY_TO_CLOSE",
        "validacion": "VALIDATION", "analisis": "ANALYSIS",
    },
    BuildStatus: {
        "paso": "PASSED", "verde": "PASSED", "ok": "PASSED", "success": "PASSED", "exitoso": "PASSED",
        "fallo": "FAILED", "fallido": "FAILED", "rojo": "FAILED", "en progreso": "IN_PROGRESS",
        "running": "IN_PROGRESS", "corriendo": "IN_PROGRESS", "pendiente": "PENDING",
    },
    RegressionStatus: {
        "paso": "PASSED", "verde": "PASSED", "ok": "PASSED", "fallo": "FAILED", "fallida": "FAILED",
        "en progreso": "RUNNING", "corriendo": "RUNNING", "in progress": "RUNNING", "pendiente": "PENDING",
    },
    MergeStatus: {"mergeada": "MERGED", "merge": "MERGED", "integrada": "MERGED", "abierta": "NOT_MERGED"},
    ApprovalStatus: {"aprobado": "APPROVED", "vobo": "APPROVED", "approved": "APPROVED"},
    AutomationStatus: {"terminado": "COMPLETED", "completa": "COMPLETED", "lista": "COMPLETED"},
    RiskLevel: {"alta": "HIGH", "media": "MEDIUM", "baja": "LOW"},
}


def label(enum_cls: type[StrEnum], value: str | None) -> str:
    if value is None:
        return "Por confirmar"
    return LABELS.get(enum_cls, {}).get(value, value)


def coerce_enum(enum_cls: type[StrEnum], raw: str | None) -> str | None:
    """Maps a value, Spanish label or synonym to the canonical enum value. Returns None if unknown."""
    if raw is None:
        return None
    key = normalize(str(raw)).replace("_", " ")
    for member in enum_cls:
        if key in (normalize(member.value).replace("_", " "), normalize(label(enum_cls, member.value))):
            return member.value
    return SYNONYMS.get(enum_cls, {}).get(key)

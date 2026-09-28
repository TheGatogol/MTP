"""Change policy — deterministic, never delegated to the LLM.

* Every value proposed by the LLM is coerced/validated against the domain.
* INFERENCE changes are never applied: they become pending confirmations.
* Important changes (finish/cancel, owner, deadline, priority, merge) always need confirmation.
* Everything else (technical status, build results, notes, follow-ups…) is low risk → auto-applied.
"""
import re
from dataclasses import dataclass
from datetime import date
from typing import Any

from app.domain.enums import (
    ActivityStatus, ApprovalStatus, AutomationStatus, BuildStatus, MergeStatus, Priority,
    RegressionStatus, RiskLevel, coerce_enum,
)
from app.services.insights import Snapshot
from app.utils.text import normalize

FIELD_SPECS: dict[str, dict[str, tuple]] = {
    "activity": {
        "status": ("enum", ActivityStatus), "technicalStatus": ("str",), "priority": ("enum", Priority),
        "ownerId": ("person",), "dueDate": ("date",), "waitingFor": ("str",), "nextAction": ("str",),
        "nextFollowUp": ("date",), "riskLevel": ("enum", RiskLevel), "riskReason": ("str",),
        "result": ("str",), "estimatedHours": ("float",), "consumedHours": ("float",), "description": ("str",),
    },
    "pull_request": {
        "automationStatus": ("enum", AutomationStatus), "latestBuild": ("int",),
        "buildStatus": ("enum", BuildStatus), "regressionStatus": ("enum", RegressionStatus),
        "gherkinTotal": ("int",), "gherkinPassed": ("int",), "gherkinFailed": ("int",),
        "pendingComments": ("int",), "reviewer": ("str",), "approvalStatus": ("enum", ApprovalStatus),
        "mergeStatus": ("enum", MergeStatus), "nextAction": ("str",), "riskLevel": ("enum", RiskLevel),
        "repository": ("str",), "branch": ("str",), "url": ("str",), "status": ("prstatus",),
    },
    "blocker": {
        "responsible": ("str",), "nextFollowUp": ("date",), "lastFollowUp": ("date",),
        "description": ("str",), "waitingFor": ("str",),
    },
}

FIELD_LABELS = {
    "status": "Estado", "technicalStatus": "Estado técnico", "priority": "Prioridad", "ownerId": "Responsable",
    "dueDate": "Deadline", "waitingFor": "Esperando", "nextAction": "Siguiente acción",
    "nextFollowUp": "Próximo seguimiento", "riskLevel": "Riesgo", "riskReason": "Motivo de riesgo",
    "result": "Resultado", "estimatedHours": "Horas estimadas", "consumedHours": "Horas consumidas",
    "description": "Descripción", "automationStatus": "Automatización", "latestBuild": "Último build",
    "buildStatus": "Build", "regressionStatus": "Regresión", "gherkinTotal": "Gherkins totales",
    "gherkinPassed": "Gherkins OK", "gherkinFailed": "Gherkins fallidos", "pendingComments": "Comentarios pendientes",
    "reviewer": "Reviewer", "approvalStatus": "Aprobación", "mergeStatus": "Merge", "repository": "Repositorio",
    "branch": "Rama", "url": "URL", "responsible": "Responsable", "lastFollowUp": "Último seguimiento",
    "blocked": "Bloqueada", "blockerId": "Bloqueo", "note": "Nota",
}

EMPTY = {"", "null", "none", "n/a", "por confirmar", "desconocido", "unknown?"}


@dataclass
class Coerced:
    ok: bool
    value: Any = None
    error: str | None = None


def coerce(entity_type: str, field: str, raw: str, snap: Snapshot) -> Coerced:
    spec = FIELD_SPECS.get(entity_type, {}).get(field)
    if spec is None:
        return Coerced(False, error=f"Campo '{field}' no editable en {entity_type}")
    kind = spec[0]
    text = (raw or "").strip()
    if normalize(text) in EMPTY:
        return Coerced(False, error=f"Valor vacío para {field}")
    if kind == "str":
        return Coerced(True, text)
    if kind == "enum":
        v = coerce_enum(spec[1], text)
        return Coerced(v is not None, v, None if v else f"Valor '{text}' inválido para {field}")
    if kind == "prstatus":
        v = {"open": "OPEN", "abierta": "OPEN", "merged": "MERGED", "mergeada": "MERGED",
             "declined": "DECLINED", "draft": "DRAFT"}.get(normalize(text))
        return Coerced(v is not None, v, None if v else f"Estado de PR inválido: {text}")
    if kind in ("int", "float"):
        m = re.search(r"-?\d+(?:[.,]\d+)?", text)
        if not m:
            return Coerced(False, error=f"Número inválido para {field}: {text}")
        num = float(m.group().replace(",", "."))
        return Coerced(True, int(num) if kind == "int" else num)
    if kind == "date":
        try:
            return Coerced(True, date.fromisoformat(text[:10]).isoformat())
        except ValueError:
            return Coerced(False, error=f"Fecha inválida para {field}: {text}")
    if kind == "person":
        pid = resolve_person(text, snap)
        return Coerced(pid is not None, pid, None if pid else f"Persona no encontrada: {text}")
    return Coerced(False, error="Tipo no soportado")


def resolve_person(text: str, snap: Snapshot) -> str | None:
    if not text:
        return None
    if text in snap.people:
        return text
    n = normalize(text)
    for p in snap.people.values():
        if n in (normalize(p.name), *(normalize(a) for a in p.aliases)):
            return p.id
    for p in snap.people.values():
        if n and (n in normalize(p.name) or normalize(p.name) in n):
            return p.id
    return None


IMPORTANT_ACTION_WORDS = ("merge", "vobo", "aprob", "autoriz", "cerrar actividad", "cierre", "finaliz", "post-merge")


def important_action_reason(title: str) -> str | None:
    t = normalize(title)
    if any(w in t for w in IMPORTANT_ACTION_WORDS):
        return "Completar esta acción implica aprobación/merge/cierre: requiere confirmación."
    return None


def important_reason(entity_type: str, field: str, value: Any) -> str | None:
    """Returns why a change needs confirmation, or None if it is low risk."""
    if entity_type == "activity":
        if field == "status" and value in (ActivityStatus.DONE, ActivityStatus.CANCELLED):
            return "Finalizar o cancelar una actividad requiere confirmación."
        if field == "ownerId":
            return "Cambiar el responsable requiere confirmación."
        if field == "dueDate":
            return "Cambiar el deadline requiere confirmación."
        if field == "priority":
            return "Cambiar la prioridad requiere confirmación."
    if entity_type == "pull_request":
        if field == "mergeStatus" and value == MergeStatus.MERGED:
            return "Marcar la PR como mergeada requiere confirmación."
        if field == "status" and value in ("MERGED", "DECLINED"):
            return "Cerrar/mergear la PR requiere confirmación."
    return None

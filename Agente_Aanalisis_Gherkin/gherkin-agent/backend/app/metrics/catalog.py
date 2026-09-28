"""Catálogo de reglas curado a partir de los documentos de MetricasCodigo (catalog.json)."""
import json
from functools import lru_cache
from pathlib import Path

from app.domain.models import FileKind, Rule

CATALOG_PATH = Path(__file__).with_name("catalog.json")


@lru_cache
def _catalog() -> tuple[Rule, ...]:
    return tuple(Rule.model_validate(r) for r in json.loads(CATALOG_PATH.read_text(encoding="utf-8")))


def all_rules() -> list[Rule]:
    return list(_catalog())


def get(rule_id: str) -> Rule | None:
    return next((r for r in _catalog() if r.id == rule_id), None)


def for_ai(kind: FileKind) -> list[Rule]:
    """Reglas que la IA debe revisar para un tipo de archivo (las 'code' ya las cubre el motor)."""
    return [r for r in _catalog() if kind in r.applies_to and r.check in ("ai", "code+ai")]

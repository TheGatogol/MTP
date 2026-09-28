"""Rule engine core. A rule is a small class with an `id` and an `evaluate(snapshot)` generator.
To add a rule: create a subclass of Rule in builtin.py (or any module imported by the package)
and decorate it with @register."""
from abc import ABC, abstractmethod
from typing import Iterable, Literal

from app.domain.models import CamelModel
from app.services.insights import Snapshot

Severity = Literal["HIGH", "MEDIUM", "LOW"]
SEVERITY_RANK = {"HIGH": 0, "MEDIUM": 1, "LOW": 2}


class Finding(CamelModel):
    rule_id: str
    severity: Severity
    category: str
    entity_type: str
    entity_id: str
    entity_name: str
    activity_id: str | None = None
    title: str
    message: str | None = None
    action: str

    @property
    def key(self) -> str:
        return f"{self.rule_id}__{self.entity_id}"


class Rule(ABC):
    id: str = ""
    description: str = ""

    @abstractmethod
    def evaluate(self, snap: Snapshot) -> Iterable[Finding]:
        ...


REGISTRY: list[Rule] = []


def register(cls: type[Rule]) -> type[Rule]:
    REGISTRY.append(cls())
    return cls


def run_rules(snap: Snapshot) -> list[Finding]:
    findings: list[Finding] = []
    for rule in REGISTRY:
        findings.extend(rule.evaluate(snap))
    return sorted(findings, key=lambda f: (SEVERITY_RANK[f.severity], f.entity_name))

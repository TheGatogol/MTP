"""Motor de reglas determinísticas (sin IA).

Cada check se registra con @check(<objetivo>) y recibe un RuleContext. Los metadatos (título, severidad,
recomendación, ejemplo) salen del catálogo, así que un check solo decide dónde está la mala práctica.
Los overrides permiten evaluar contenido propuesto (skill «validar») sin tocar disco.
"""
from collections.abc import Callable
from dataclasses import dataclass, field

from app.domain.models import Finding, StepDef
from app.framework import jsparse
from app.framework.indexer import FrameworkIndex
from app.framework.relate import Relation
from app.metrics import catalog
from app.utils.text import clip

CHECKS: dict[str, list[Callable]] = {"feature": [], "step": [], "page": [], "navigation": [], "component": [], "shared": []}


def check(target: str):
    def deco(fn: Callable) -> Callable:
        CHECKS[target].append(fn)
        return fn
    return deco


@dataclass
class UsedStep:
    sd: StepDef
    header: str
    body: str
    line: int
    body_line: int


@dataclass
class RuleContext:
    ix: FrameworkIndex
    relation: Relation
    overrides: dict[str, str] = field(default_factory=dict)
    findings: list[Finding] = field(default_factory=list)

    def text(self, path: str) -> str:
        return self.overrides[path] if path in self.overrides else self.ix.read(path)

    def add(self, rule_id: str, file: str, line: int | None, evidence: str = "", message: str = "",
            severity: str | None = None) -> Finding | None:
        rule = catalog.get(rule_id)
        if rule is None:
            return None
        self.findings.append(Finding(
            rule_id=rule_id, title=rule.title, category=rule.category,
            file=file, line=line, evidence=clip(evidence, 220), message=message or rule.description,
            severity=severity or rule.severity,
            recommendation=rule.recommendation, example_good=rule.example_good, source="reglas",
            fix=rule.fix, manual_reason=rule.manual_reason, doc=rule.source,
        ))
        return self.findings[-1]

    def used_steps(self, file: str) -> list[UsedStep]:
        """Step definitions usadas por el feature, leídas del texto actual (o del override)."""
        used = self.relation.used_defs.get(file, [])
        text = self.text(file)
        raws = jsparse.extract_step_defs(text)
        out = []
        for sd in used:
            raw = next((r for r in raws if r.pattern == sd.pattern), None)
            if raw is None:
                continue
            from app.utils.text import line_of
            out.append(UsedStep(sd, raw.header, raw.body, raw.line, line_of(text, raw.body_start)))
        return out


def run_rules(ctx: RuleContext) -> list[Finding]:
    # Importa los módulos para registrar sus checks.
    from app.rules import code_rules, feature_rules  # noqa: F401

    if ctx.relation.feature.path:          # análisis de un .feature (en modo JS no hay feature)
        for fn in CHECKS["feature"]:
            fn(ctx)
    for file in ctx.relation.used_defs:
        for fn in CHECKS["step"]:
            fn(ctx, file)
    for rf in ctx.relation.related:
        if rf.kind not in ("page", "navigation", "component"):
            continue
        # Principal: archivo completo. Compartido: solo los métodos que usa este feature.
        for fn in CHECKS[rf.kind] if rf.role == "principal" else CHECKS["shared"]:
            fn(ctx, rf.path)
    return ctx.findings

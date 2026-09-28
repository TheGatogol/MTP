"""Skill 4 · revisar_ia: la IA local revisa las métricas que requieren criterio (no verificables con código).

Envía solo fragmentos relevantes y pocas reglas por llamada para que el modelo responda rápido.
"""
import re
from concurrent.futures import ThreadPoolExecutor
from dataclasses import dataclass

from app.domain.models import Finding
from app.framework import jsparse
from app.metrics import catalog
from app.rules.lang import ACTION_WORDS_RE, UI_WORDS_RE
from app.skills.base import Skill, SkillContext, register, skip
from app.skills.excerpt import around, excerpt
from app.skills.prompts import KIND_LABEL, REVIEW_SYSTEM, REVIEW_USER, AIReview, rules_block

MIN_CONFIDENCE = 4
# Hallazgos donde la propia IA dice que el código está bien.
SELF_CONTRADICTION = re.compile(
    r"(est[aá]|es) correct[oa]|no (hay|existe) (ning[uú]n )?incumplimiento|cumple con la (regla|m[eé]trica)", re.I)


STEP_RE = re.compile(r"^\s*(Given|When|Then|And|But)\s+(.*)$")


def _plausible(ctx: SkillContext, t: "Target", rule_id: str, line: int | None) -> bool:
    """Descarta hallazgos de la IA que el propio código contradice."""
    if rule_id not in ("GHK-016", "GHK-003") or t.kind != "feature":
        return True
    lines = ctx.feature_text.split("\n")

    def is_action(i: int) -> bool:
        m = STEP_RE.match(lines[i]) if 0 <= i < len(lines) else None
        return bool(m and (ACTION_WORDS_RE.search(m.group(2)) or UI_WORDS_RE.search(m.group(2))))

    if not line:
        return False
    i = line - 1
    if rule_id == "GHK-003":
        # Solo aplica a un Then (o And/But dentro del Then) que describe una acción.
        keyword = next((m.group(1) for j in range(i, -1, -1) if (m := STEP_RE.match(lines[j]))
                        and m.group(1) in ("Given", "When", "Then")), None)
        return keyword == "Then" and is_action(i)
    # Micro-acciones: el step es una acción de interfaz y hay otra acción justo antes o después.
    return is_action(i) and any(is_action(j) for j in (i - 2, i - 1, i + 1, i + 2))


@dataclass
class Target:
    path: str
    kind: str
    code: str
    label: str
    total_lines: int


def _feature_targets(ctx: SkillContext) -> list[Target]:
    text, max_lines = ctx.feature_text, ctx.settings.max_ai_lines
    n = text.count("\n") + 1
    if n <= max_lines:
        code, _ = excerpt(text, max_lines=max_lines)
        return [Target(ctx.report.feature_path, "feature", code, "feature", n)]
    # Divide por escenarios en bloques de hasta max_lines (máximo 3 llamadas).
    starts = [min([sc.line, *sc.tag_lines]) for sc in ctx.relation.feature.scenarios] + [n + 1]
    chunks, cur = [], [1, 0]
    for a, b in zip(starts, starts[1:]):
        if b - 1 - cur[0] + 1 > max_lines and cur[1]:
            chunks.append(tuple(cur))
            cur = [a, 0]
        cur[1] = b - 1
    if cur[1]:
        chunks.append(tuple(cur))
    out = []
    for i, (a, b) in enumerate(chunks[:3], 1):
        code, _ = excerpt(text, [(1, 3), (a, b)], max_lines=max_lines + 3)
        out.append(Target(ctx.report.feature_path, "feature", code, f"feature (parte {i}/{min(3, len(chunks))})", n))
    return out


def _called_methods(ctx: SkillContext, page: str) -> set[str]:
    return set(ctx.relation.used_methods.get(page, set()))


def _code_targets(ctx: SkillContext) -> list[Target]:
    rel, max_lines, budget = ctx.relation, ctx.settings.max_ai_lines, ctx.settings.max_ai_files
    finding_lines: dict[str, list[int]] = {}
    for f in ctx.findings:
        if f.line:
            finding_lines.setdefault(f.file, []).append(f.line)
    out: list[Target] = []
    for file, defs in rel.used_defs.items():
        if file not in rel.files(role="principal"):
            continue
        text = ctx.ix.read(file)
        code, _ = excerpt(text, [(1, 6)] + [(d.line, d.end_line) for d in defs], max_lines=max_lines)
        out.append(Target(file, "step_definition", code, file.rsplit("/", 1)[-1], text.count("\n") + 1))
    validation_pages = {v.page for v in rel.validations if v.page}
    pages = sorted(rel.files("page", "principal"),
                   key=lambda p: (p not in validation_pages, -len(finding_lines.get(p, []))))
    for page in pages:
        text = ctx.ix.read(page)
        methods = jsparse.extract_methods(text)
        wanted = _called_methods(ctx, page) | {"constructor", "_screenValidation"}
        ranges = [(m.line, m.end_line) for m in methods if m.name in wanted] + around(finding_lines.get(page, []), 6)
        code, _ = excerpt(text, ranges or None, max_lines=max_lines)
        out.append(Target(page, "page", code, page.rsplit("/", 1)[-1], text.count("\n") + 1))
    for nav in rel.files("navigation", "principal"):
        if ctx.ix.navigation_page(nav) in validation_pages:
            text = ctx.ix.read(nav)
            code, _ = excerpt(text, max_lines=max_lines)
            out.append(Target(nav, "navigation", code, nav.rsplit("/", 1)[-1], text.count("\n") + 1))
    return out[:budget]


def _js_target(ctx: SkillContext) -> Target:
    path, text = ctx.report.feature_path, ctx.feature_text
    lines = [f.line for f in ctx.findings if f.file == path and f.line]
    methods = jsparse.extract_methods(text)
    ranges = [(m.line, m.end_line) for m in methods if m.name in ("constructor", "_screenValidation", "go_impl")]
    code, _ = excerpt(text, (ranges + around(lines, 6)) or None, max_lines=ctx.settings.max_ai_lines)
    return Target(path, ctx.ix.kind_of(path), code, path.rsplit("/", 1)[-1], text.count("\n") + 1)


def _review(ctx: SkillContext, t: Target) -> list[Finding]:
    rules = catalog.for_ai(t.kind)  # type: ignore[arg-type]
    if not rules:
        return []
    known = [f"- {f.rule_id} línea {f.line}" for f in ctx.findings if f.file == t.path][:25]
    result = ctx.provider.structured([
        {"role": "system", "content": REVIEW_SYSTEM.format(kind=KIND_LABEL.get(t.kind, t.kind))},
        {"role": "user", "content": REVIEW_USER.format(
            rules=rules_block(rules), known="\n".join(known) or "(nada)", path=t.path, code=t.code, limit=4)},
    ], AIReview, max_tokens=1400)
    valid = {r.id: r for r in rules}
    out = []
    for af in result.findings[:4]:
        rule = valid.get(af.rule_id.strip().upper())
        if rule is None or af.confidence < MIN_CONFIDENCE or SELF_CONTRADICTION.search(af.problem):
            continue
        line = af.line if af.line and 1 <= af.line <= t.total_lines else None
        if not _plausible(ctx, t, rule.id, line):
            continue
        # La IA no marca hallazgos críticos salvo que esté segura.
        severity = rule.severity if (rule.severity != "HIGH" or af.confidence == 5) else "MEDIUM"
        out.append(Finding(
            rule_id=rule.id, title=rule.title, category=rule.category, severity=severity, file=t.path,
            line=line, evidence=af.evidence[:220], message=af.problem, recommendation=af.recommendation,
            example_good=rule.example_good, suggested_code=af.suggested_code, source="ia", fix=rule.fix,
            doc=rule.source,
        ))
    return out


@register
class RevisarIA(Skill):
    name = "revisar_ia"
    label = "Revisar con IA"
    on_error = "estandarizar"

    def run(self, ctx: SkillContext) -> str:
        if ctx.report.target_type == "js":
            targets = [_js_target(ctx)]
        else:
            targets = _feature_targets(ctx) + (_code_targets(ctx) if ctx.settings.ai_review_code else [])
        targets = [t for t in targets if catalog.for_ai(t.kind)]  # type: ignore[arg-type]
        if not targets:
            skip(ctx, self.name, "Sin reglas de IA aplicables a estos archivos")
            return "estandarizar"
        done, errors, total = 0, [], len(targets)
        ctx.progress(self.name, f"0/{total} · {', '.join(t.label for t in targets)}")
        with ThreadPoolExecutor(max_workers=2) as pool:
            futures = {pool.submit(_review, ctx, t): t for t in targets}
            for fut, t in futures.items():
                try:
                    found = fut.result()
                    ctx.findings.extend(found)
                except Exception as e:  # noqa: BLE001 - una revisión fallida no detiene las demás
                    errors.append(f"{t.label}: {e}")
                done += 1
                ctx.progress(self.name, f"{done}/{total} revisados · último: {t.label}")
        ctx.report.ai_used = True
        ia = sum(1 for f in ctx.findings if f.source == "ia")
        detail = f"{total} revisiones · {ia} hallazgos de la IA"
        if errors:
            ctx.report.warnings.extend(f"IA: {e}" for e in errors)
            detail += f" · {len(errors)} con error"
        ctx.progress(self.name, detail)
        return "estandarizar"

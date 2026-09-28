"""Skill 5 · estandarizar: une hallazgos de reglas e IA, quita duplicados, agrupa repetidos y asigna ids."""
from app.domain.models import SEVERITY_ORDER, Finding
from app.skills.base import Skill, SkillContext, register

GROUP_THRESHOLD = 3
# Reglas con corrección automática cuyo fixer corrige todas las líneas de un hallazgo agrupado.
GROUPABLE_AUTO = {"COD-009", "SCV-003", "COD-001", "COD-003", "COD-007", "COD-015", "CMP-003", "CMP-004", "PAG-004"}


def _dedupe(findings: list[Finding]) -> list[Finding]:
    rules = [f for f in findings if f.source == "reglas"]
    out, seen = list(rules), {(f.rule_id, f.file, f.line, f.evidence) for f in rules}
    for f in findings:
        if f.source != "ia":
            continue
        # La IA no debe repetir lo que ya detectaron las reglas (misma regla y archivo, línea cercana).
        if any(r.rule_id == f.rule_id and r.file == f.file and (r.line is None or f.line is None
               or abs(r.line - f.line) <= 1) for r in out):
            continue
        key = (f.rule_id, f.file, f.line, f.evidence)
        if key not in seen:
            seen.add(key)
            out.append(f)
    # Duplicados exactos de reglas (p. ej. el mismo step en Background y escenario)
    unique, keys = [], set()
    for f in out:
        k = (f.rule_id, f.file, f.line, f.message)
        if k not in keys:
            keys.add(k)
            unique.append(f)
    return unique


def _group(findings: list[Finding]) -> list[Finding]:
    """Agrupa la misma regla en el mismo archivo cuando se repite mucho (evita ruido)."""
    buckets: dict[tuple[str, str, str], list[Finding]] = {}
    for f in findings:
        buckets.setdefault((f.rule_id, f.file, f.severity), []).append(f)
    out = []
    for group in buckets.values():
        if len(group) <= GROUP_THRESHOLD or group[0].fix == "auto" and group[0].rule_id not in GROUPABLE_AUTO:
            out.extend(group)
            continue
        group.sort(key=lambda f: f.line or 0)
        head = group[0].model_copy()
        head.lines = [f.line for f in group[1:] if f.line]
        head.message = (f"{group[0].title}: se repite {len(group)} veces en este archivo "
                        f"(líneas {', '.join(str(f.line) for f in group[:8] if f.line)}"
                        f"{'…' if len(group) > 8 else ''}). Ejemplo: {group[0].message}")
        out.append(head)
    return out


@register
class Estandarizar(Skill):
    name = "estandarizar"
    label = "Estandarizar hallazgos"

    def run(self, ctx: SkillContext) -> str:
        before = len(ctx.findings)
        findings = _group(_dedupe(ctx.findings))
        feature = ctx.report.feature_path
        findings.sort(key=lambda f: (f.file != feature, SEVERITY_ORDER[f.severity], f.file, f.line or 0))
        for i, f in enumerate(findings, 1):
            f.id = f"F{i:03d}"
        ctx.findings = findings
        ctx.report.findings = findings
        ctx.progress(self.name, f"{before} → {len(findings)} hallazgos únicos")
        return "recomendar"

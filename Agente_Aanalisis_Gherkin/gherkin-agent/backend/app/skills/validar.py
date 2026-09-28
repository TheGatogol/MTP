"""Skill 8 · validar: vuelve a pasar las reglas sobre el código corregido (en memoria).

Confirma qué hallazgos quedan resueltos y avisa si la corrección introduce problemas nuevos
(por ejemplo, un step que ya no tiene step definition).
"""
import re

from collections import Counter

from app.framework.relate import relate
from app.rules.engine import RuleContext, run_rules
from app.skills.base import Skill, SkillContext, register


def _key(f) -> tuple[str, str, str]:
    # Hallazgos de selectores: se identifican por el nombre del elemento (otra regla pudo cambiar el texto del selector)
    if f.rule_id.startswith("PAG-") and (m := re.match(r"([\w$]+):\s*['\"`]", f.evidence)):
        return f.rule_id, f.file, m.group(1)
    return f.rule_id, f.file, f.evidence


@register
class Validar(Skill):
    name = "validar"
    label = "Validar corrección"
    on_error = "reportar"

    def run(self, ctx: SkillContext) -> str:
        feature = ctx.report.feature_path
        overrides = {fx.file: fx.proposed for fx in ctx.report.fixes if fx.action == "edit"}
        before_ctx = RuleContext(ctx.ix, ctx.relation)
        before_list = run_rules(before_ctx)
        before = Counter(_key(f) for f in before_list)
        rule_before = Counter((f.rule_id, f.file) for f in before_list)
        with ctx.ix.step_overlay(overrides):
            new_relation = (relate(ctx.ix, feature, overrides.get(feature, ctx.feature_text))
                            if ctx.report.target_type == "feature" else ctx.relation)
            after_findings = run_rules(RuleContext(ctx.ix, new_relation, overrides))
        after = Counter(_key(f) for f in after_findings)
        rule_after = Counter((f.rule_id, f.file) for f in after_findings)

        by_id = {f.id: f for f in ctx.findings}
        resolved_total = 0
        for fx in ctx.report.fixes:
            if fx.action == "delete":
                resolved_total += len(fx.finding_ids)
                continue
            confirmed = []
            # Se verifican todos los hallazgos del archivo: un fixer puede resolver más de los que declara.
            candidates = [f.id for f in ctx.findings if f.file == fx.file and (f.source == "reglas" or f.id in fx.finding_ids)]
            for fid in candidates:
                f = by_id.get(fid)
                if f is None:
                    continue
                if f.lines:   # hallazgo agrupado: se resuelve si desaparecen todas sus ocurrencias
                    ok = rule_after[(f.rule_id, f.file)] <= rule_before[(f.rule_id, f.file)] - (1 + len(f.lines))
                else:
                    ok = f.source == "ia" or after[_key(f)] < before[_key(f)]
                if ok:
                    f.resolved_by_fix = True
                    confirmed.append(fid)
            fx.finding_ids = confirmed
            resolved_total += len(confirmed)
            # Nuevo = hay más ocurrencias de la regla que antes (si solo cambió el texto de la línea, no es nuevo).
            introduced = Counter({rule_id: n - rule_before[(rule_id, file)] for (rule_id, file), n in rule_after.items()
                                  if file == fx.file and n > rule_before[(rule_id, file)]})
            for rule_id, n in introduced.items():
                fx.warnings.append(f"La corrección introduce {n} hallazgo(s) nuevo(s) de {rule_id}; revísalo antes de aplicar.")

        old_undefined = {m.text for m in ctx.relation.matches if m.status == "undefined"}
        for m in new_relation.matches:
            if m.status == "undefined" and m.text not in old_undefined:
                fx = next((x for x in ctx.report.fixes if x.file == feature), None)
                if fx and not any(m.text in w for w in fx.warnings):
                    fx.warnings.append(f"El step «{m.text}» no existe en el framework: habrá que crear su step definition.")
        ctx.progress(self.name, f"{resolved_total} hallazgos resueltos por las correcciones")
        return "reportar"

"""Skill 3 · revisar_reglas: métricas verificables con código (rápido, sin IA)."""
from app.rules.engine import RuleContext, run_rules
from app.skills.base import Skill, SkillContext, register, skip


@register
class RevisarReglas(Skill):
    name = "revisar_reglas"
    label = "Revisar métricas (reglas)"

    def run(self, ctx: SkillContext) -> str:
        found = run_rules(RuleContext(ctx.ix, ctx.relation))
        ctx.findings.extend(found)
        high = sum(1 for f in found if f.severity == "HIGH")
        ctx.progress(self.name, f"{len(found)} hallazgos ({high} altos)")
        if not (ctx.settings.ai_enabled and ctx.ai_available):
            skip(ctx, "revisar_ia", "IA desactivada o no disponible")
            return "estandarizar"
        return "revisar_ia"

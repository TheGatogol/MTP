"""Skill 6 · recomendar: completa cada hallazgo con la recomendación y el ejemplo correcto de la métrica."""
from app.metrics import catalog
from app.skills.base import Skill, SkillContext, register, skip


@register
class Recomendar(Skill):
    name = "recomendar"
    label = "Recomendar"

    def run(self, ctx: SkillContext) -> str:
        with_code = 0
        for f in ctx.findings:
            rule = catalog.get(f.rule_id)
            if rule is None:
                continue
            if not f.recommendation:
                f.recommendation = rule.recommendation
            if f.source == "ia" and rule.recommendation not in f.recommendation:
                f.recommendation = f"{f.recommendation}\n\nMétrica: {rule.recommendation}"
            f.example_good = f.example_good or rule.example_good
            if f.suggested_code or f.example_good:
                with_code += 1
        fixable = sum(1 for f in ctx.findings if f.fix in ("auto", "ai"))
        ctx.progress(self.name, f"{with_code} con ejemplo de código · {fixable} corregibles")
        if fixable == 0:
            skip(ctx, "generar", "No hay hallazgos corregibles automáticamente")
            skip(ctx, "validar", "Sin correcciones que validar")
            return "reportar"
        return "generar"

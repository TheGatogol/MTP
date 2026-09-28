"""Skill 2 · relacionar: step definitions, navigations y pages del feature. Si nada cambió, usa la caché."""
from app.analysis import cache
from app.framework.relate import relate
from app.framework.usage import get_usage, relate_js
from app.skills.base import Skill, SkillContext, register, skip
from app.utils.text import sha


@register
class Relacionar(Skill):
    name = "relacionar"
    label = "Relacionar documentos"

    def run(self, ctx: SkillContext) -> str:
        if ctx.report.target_type == "js":
            usage = get_usage()
            if usage.state != "ready":
                ctx.progress(self.name, "Construyendo el mapa de uso del framework (solo la primera vez, ≈25 s)…")
            ctx.relation = rel = relate_js(ctx.ix, ctx.report.feature_path)
        else:
            ctx.relation = rel = relate(ctx.ix, ctx.report.feature_path, ctx.feature_text)
        ctx.report.related = rel.related
        ctx.report.matches = rel.matches
        for r in rel.related:
            ctx.ix.invalidate(r.path)
        combined = "".join(sha(ctx.ix.read(r.path)) for r in rel.related)
        ctx.report.content_hash = sha(combined)
        if ctx.report.target_type == "js":
            n = len(rel.files("feature"))
            ctx.progress(self.name, f"{n} feature(s) usan este archivo" if n else "Ningún feature usa este archivo")
        else:
            kinds = {k: len(rel.files(k)) for k in ("step_definition", "navigation", "page")}
            undefined = sum(1 for m in rel.matches if m.status != "ok")
            ctx.progress(self.name, f"{kinds['step_definition']} steps · {kinds['navigation']} navigations · "
                                    f"{kinds['page']} pages" + (f" · {undefined} steps sin resolver" if undefined else ""))

        if ctx.use_cache and ctx.cached is None and (hit := cache.lookup(ctx.report, ctx.settings)):
            ctx.cached = hit
        if ctx.cached is not None:
            ctx.findings = [f.model_copy() for f in ctx.cached.findings]
            ctx.report.fixes = [f.model_copy() for f in ctx.cached.fixes if not f.applied]
            ctx.report.ai_used = ctx.cached.ai_used
            for name in ("revisar_reglas", "revisar_ia", "estandarizar", "recomendar", "generar", "validar"):
                skip(ctx, name, "Sin cambios desde el último análisis (caché)")
            return "reportar"
        return "revisar_reglas"

"""Skill 9 · reportar: resumen, puntaje y semáforo del archivo analizado."""
from collections import Counter

from app.domain.models import SEVERITY_WEIGHT, Summary
from app.skills.base import Skill, SkillContext, register
from app.utils.text import now_iso


@register
class Reportar(Skill):
    name = "reportar"
    label = "Reportar"

    def run(self, ctx: SkillContext) -> None:
        r = ctx.report
        r.findings = ctx.findings
        counts = Counter(f.severity for f in r.findings)
        penalty = sum(SEVERITY_WEIGHT[f.severity] * min(1 + len(f.lines), 3) for f in r.findings)
        score = max(0, 100 - penalty)
        level = "critical" if counts["HIGH"] else ("warning" if counts["MEDIUM"] else "ok")
        resolved = sum(1 for f in r.findings if f.resolved_by_fix)
        name = r.feature_path.rsplit("/", 1)[-1]
        if not r.findings:
            text = f"{name} cumple con las métricas revisadas. No se encontraron malas prácticas."
        else:
            text = (f"{name}: {len(r.findings)} malas prácticas ({counts['HIGH']} altas, {counts['MEDIUM']} medias, "
                    f"{counts['LOW']} bajas) en {len({f.file for f in r.findings})} archivo(s).")
            if r.fixes:
                text += f" Hay correcciones propuestas para {len(r.fixes)} archivo(s) que resuelven {resolved} hallazgo(s)."
            manual = sum(1 for f in r.findings if f.fix == "manual")
            if manual:
                text += f" {manual} requieren corrección manual (ver recomendación)."
        r.summary = Summary(
            score=score, level=level, counts={k: counts.get(k, 0) for k in ("HIGH", "MEDIUM", "LOW")},
            by_file=dict(Counter(f.file for f in r.findings)),
            by_category=dict(Counter(f.category for f in r.findings)), text=text,
        )
        r.status = "done"
        r.finished_at = now_iso()
        ctx.progress(self.name, f"Puntaje {score}/100")
        return None

"""Skill 1 · buscar: localiza el .feature seleccionado y lo lee."""
from app.skills.base import Skill, SkillContext, register
from app.utils.text import sha

KIND_NAME = {"step_definition": "Step definitions", "page": "Page", "navigation": "Navigation",
             "component": "Component"}


@register
class Buscar(Skill):
    name = "buscar"
    label = "Buscar archivo"

    def run(self, ctx: SkillContext) -> str:
        path = ctx.report.feature_path
        valid = path.endswith(".feature") or ctx.ix.kind_of(path) in ("step_definition", "page", "navigation", "component")
        if not valid or not ctx.ix.exists(path):
            raise FileNotFoundError(f"No existe el archivo {path} o no es un .feature/.js del framework")
        ctx.ix.invalidate(path)
        ctx.feature_text = ctx.ix.read(path)
        entry = ctx.ix.features.get(path)
        ctx.report.feature_name = entry.name if entry else KIND_NAME.get(ctx.ix.kind_of(path), "")
        ctx.report.content_hash = sha(ctx.feature_text)
        lines = ctx.feature_text.count("\n") + 1
        ctx.progress(self.name, f"{path.rsplit('/', 1)[-1]} · {lines} líneas")
        return "relacionar"

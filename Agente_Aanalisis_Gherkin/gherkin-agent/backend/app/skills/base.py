"""Skills encadenadas.

Cada skill hace UNA cosa, corta y rápida, y al terminar devuelve el nombre de la siguiente skill:

  buscar → relacionar → revisar_reglas → revisar_ia → estandarizar → recomendar → generar → validar → reportar

El runner publica el progreso después de cada skill para que la UI lo muestre en vivo.
"""
import logging
import time
from abc import ABC, abstractmethod
from collections.abc import Callable
from dataclasses import dataclass, field

from app.ai import AIProvider
from app.domain.models import AnalysisReport, Finding, SkillRun
from app.framework.indexer import FrameworkIndex
from app.framework.relate import Relation
from app.settings_store import AppSettings

log = logging.getLogger(__name__)


@dataclass
class SkillContext:
    report: AnalysisReport
    ix: FrameworkIndex
    settings: AppSettings
    provider: AIProvider | None
    ai_available: bool
    publish: Callable[[], None] = lambda: None
    relation: Relation | None = None
    feature_text: str = ""
    findings: list[Finding] = field(default_factory=list)
    cached: AnalysisReport | None = None
    use_cache: bool = True

    def run_of(self, name: str) -> SkillRun:
        return next(s for s in self.report.skills if s.name == name)

    def progress(self, name: str, detail: str) -> None:
        self.run_of(name).detail = detail
        self.publish()


class Skill(ABC):
    name: str
    label: str
    on_error: str | None = None     # skill a la que saltar si esta falla (None = abortar)

    @abstractmethod
    def run(self, ctx: SkillContext) -> str | None:
        """Ejecuta la skill y devuelve la siguiente (o None para terminar)."""


SKILLS: dict[str, Skill] = {}
ORDER: list[str] = []


def register(cls: type[Skill]) -> type[Skill]:
    SKILLS[cls.name] = cls()
    ORDER.append(cls.name)
    return cls


def skip(ctx: SkillContext, name: str, reason: str) -> None:
    run = ctx.run_of(name)
    run.status, run.detail = "skipped", reason


def run_chain(ctx: SkillContext, start: str = "buscar") -> None:
    name: str | None = start
    visited = 0
    while name and visited < 20:
        visited += 1
        skill = SKILLS[name]
        run = ctx.run_of(name)
        run.status = "running"
        ctx.publish()
        t0 = time.perf_counter()
        try:
            nxt = skill.run(ctx)
            if run.status == "running":
                run.status = "done"
        except Exception as e:  # noqa: BLE001 - cada skill decide si el error es recuperable
            log.exception("Skill %s falló", name)
            run.status, run.detail = "error", str(e)[:300]
            if skill.on_error is None:
                ctx.report.status, ctx.report.error = "error", f"{skill.label}: {e}"
                nxt = None
            else:
                ctx.report.warnings.append(f"{skill.label} falló ({str(e)[:160]}); se continuó sin ese paso.")
                nxt = skill.on_error
        run.ms = int((time.perf_counter() - t0) * 1000)
        ctx.publish()
        name = nxt


def new_skill_runs() -> list[SkillRun]:
    from app import skills  # noqa: F401  (registra las skills)
    return [SkillRun(name=n, label=SKILLS[n].label) for n in ORDER]

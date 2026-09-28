"""Ejecución de análisis en segundo plano. La UI consulta el progreso por polling."""
import logging
import threading

from app import store
from app.ai import get_provider
from app.analysis import cache
from app.domain.models import AnalysisReport
from app.framework.indexer import get_index
from app.settings_store import get_app_settings
from app.skills.base import SkillContext, new_skill_runs, run_chain
from app.utils.text import new_id, now_iso

log = logging.getLogger(__name__)
_jobs: dict[str, AnalysisReport] = {}
_lock = threading.Lock()


class NotReady(Exception):
    pass


def start(feature_path: str, force: bool = False) -> AnalysisReport:
    ix = get_index()
    if ix.state != "ready":
        raise NotReady("El índice del framework todavía se está construyendo. Intenta en unos segundos.")
    settings = get_app_settings()
    provider = get_provider()
    health = provider.health() if settings.ai_enabled else None
    ai_ok = bool(health and health.available)
    report = AnalysisReport(
        id=new_id("an"), feature_path=feature_path, created_at=now_iso(), skills=new_skill_runs(),
        target_type="feature" if feature_path.endswith(".feature") else "js",
        model=provider.model if ai_ok else None, signature=cache.signature(settings, provider.model),
    )
    if settings.ai_enabled and not ai_ok and health:
        report.warnings.append(f"IA no disponible: {health.error}. Se analizó solo con reglas.")
    ctx = SkillContext(report=report, ix=ix, settings=settings, provider=provider if ai_ok else None,
                       ai_available=ai_ok)
    if force:
        ctx.cached = None
        ctx.use_cache = False

    def publish() -> None:
        with _lock:
            _jobs[report.id] = report.model_copy(deep=True)

    ctx.publish = publish
    publish()

    def worker() -> None:
        try:
            run_chain(ctx)
        except Exception as e:  # noqa: BLE001
            log.exception("Análisis falló")
            report.status, report.error = "error", str(e)
        if report.status == "running":
            report.status = "error"
            report.error = report.error or "El análisis terminó sin reporte."
        report.finished_at = report.finished_at or now_iso()
        save(report)
        publish()

    threading.Thread(target=worker, name=f"analysis-{report.id}", daemon=True).start()
    return _jobs[report.id]


def save(report: AnalysisReport) -> None:
    store.write_json(f"reports/{report.id}.json", report)
    store.append_jsonl(cache.INDEX_FILE, cache.index_entry(report))
    with _lock:
        _jobs[report.id] = report.model_copy(deep=True)


def get(report_id: str) -> AnalysisReport | None:
    with _lock:
        if report_id in _jobs:
            return _jobs[report_id]
    data = store.read_json(f"reports/{report_id}.json")
    return AnalysisReport.model_validate(data) if data else None


def history(feature_path: str | None = None, limit: int = 50) -> list[dict]:
    latest: dict[str, dict] = {}
    for e in store.read_jsonl(cache.INDEX_FILE):
        latest[e["id"]] = e      # la última línea de cada id gana (p. ej. tras aplicar una corrección)
    rows = [e for e in latest.values() if not feature_path or e.get("featurePath") == feature_path]
    rows.sort(key=lambda e: e.get("createdAt", ""), reverse=True)
    return rows[:limit]

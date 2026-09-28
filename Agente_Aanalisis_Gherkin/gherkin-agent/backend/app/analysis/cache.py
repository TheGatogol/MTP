"""Caché de reportes: si el feature, sus archivos relacionados, las reglas y la configuración no cambiaron,
se reutiliza el último análisis (respuesta instantánea)."""
import hashlib

from app import store
from app.domain.models import AnalysisReport
from app.metrics.catalog import CATALOG_PATH
from app.settings_store import AppSettings

INDEX_FILE = "reports_index.jsonl"


def rules_version() -> str:
    return hashlib.sha1(CATALOG_PATH.read_bytes()).hexdigest()[:10]


def signature(settings: AppSettings, model: str) -> str:
    return f"{settings.signature(model)}|{rules_version()}"


def lookup(report: AnalysisReport, settings: AppSettings) -> AnalysisReport | None:
    for entry in reversed(store.read_jsonl(INDEX_FILE)):
        if (entry.get("featurePath") == report.feature_path and entry.get("contentHash") == report.content_hash
                and entry.get("signature") == report.signature and entry.get("status") == "done"):
            data = store.read_json(f"reports/{entry['id']}.json")
            if data:
                return AnalysisReport.model_validate(data)
    return None


def index_entry(report: AnalysisReport) -> dict:
    return {
        "id": report.id, "featurePath": report.feature_path, "featureName": report.feature_name,
        "createdAt": report.created_at, "finishedAt": report.finished_at, "status": report.status,
        "contentHash": report.content_hash, "signature": report.signature, "model": report.model,
        "aiUsed": report.ai_used, "targetType": report.target_type, "score": report.summary.score, "level": report.summary.level,
        "counts": report.summary.counts, "fixes": len(report.fixes),
    }

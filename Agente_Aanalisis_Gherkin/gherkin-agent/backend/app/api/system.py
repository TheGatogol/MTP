import threading

from fastapi import APIRouter

from app.ai import get_provider
from app.config import get_settings
from app.framework.indexer import build_in_background, get_index
from app.framework.usage import get_usage
from app.metrics import catalog
from app.settings_store import get_app_settings, save_app_settings

router = APIRouter(prefix="/api", tags=["system"])


@router.get("/health")
def health():
    ix = get_index()
    s = get_settings()
    app_settings = get_app_settings()
    ai = get_provider().health()
    return {
        "index": {
            "state": ix.state, "error": ix.error, "buildMs": ix.build_ms, "features": len(ix.features),
            "stepDefinitions": len(ix.steps), "jsFiles": len(ix.js_files),
            "recordings": sum(len(v) for v in ix.recordings.values()),
            "usageMap": get_usage().state,
        },
        "ai": {"available": ai.available, "provider": ai.provider, "model": ai.model,
               "modelInstalled": ai.model_installed, "models": ai.models, "error": ai.error,
               "enabled": app_settings.ai_enabled},
        "paths": {"framework": str(s.framework_dir), "e2e": str(s.e2e_dir), "metrics": str(s.metrics_dir),
                  "data": str(s.data_dir)},
        "rules": len(catalog.all_rules()),
    }


@router.get("/settings")
def read_settings():
    return get_app_settings().dump() | {"defaultModel": get_settings().ollama_model}


@router.put("/settings")
def update_settings(patch: dict):
    saved = save_app_settings(patch)
    provider = get_provider()
    if saved.ai_enabled:
        threading.Thread(target=provider.warmup, daemon=True).start()
    return saved.dump() | {"defaultModel": get_settings().ollama_model}


@router.get("/models")
def models():
    h = get_provider().health(force=True)
    return {"models": h.models, "current": h.model, "available": h.available, "error": h.error}


@router.post("/index/rebuild")
def rebuild_index():
    ix = get_index()
    if ix.state != "building":
        build_in_background()
    return {"state": "building"}

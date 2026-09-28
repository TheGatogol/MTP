import logging
import threading
from contextlib import asynccontextmanager

from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse

from app.ai import AIError, get_provider
from app.api import analysis, features, metrics, system
from app.config import get_settings
from app.framework.indexer import build_in_background
from app.settings_store import get_app_settings

logging.basicConfig(level=logging.INFO, format="%(asctime)s %(levelname)s %(name)s: %(message)s")


@asynccontextmanager
async def lifespan(_: FastAPI):
    build_in_background()
    if get_app_settings().ai_enabled:
        threading.Thread(target=get_provider().warmup, name="ai-warmup", daemon=True).start()
    yield


app = FastAPI(title="MTP Gherkin Agent API", version="1.0.0", lifespan=lifespan)
app.add_middleware(CORSMiddleware, allow_origins=get_settings().cors_origin_list, allow_methods=["*"],
                   allow_headers=["*"])


@app.exception_handler(AIError)
def ai_error(_: Request, exc: AIError):
    return JSONResponse(status_code=503, content={"detail": str(exc)})


for r in (system.router, features.router, analysis.router, metrics.router):
    app.include_router(r)


@app.get("/")
def root():
    return {"name": "MTP Gherkin Agent API", "docs": "/docs", "health": "/api/health"}

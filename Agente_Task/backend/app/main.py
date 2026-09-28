import logging

from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from pydantic import ValidationError

from app.ai import AIError
from app.api import activities, agent, catalog, system, work_items
from app.config import get_settings
from app.services.changes import ConfirmationRequired, NotFoundError

logging.basicConfig(level=logging.INFO, format="%(asctime)s %(levelname)s %(name)s: %(message)s")

app = FastAPI(title="QA Task Agent API", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=get_settings().cors_origin_list,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.exception_handler(NotFoundError)
def not_found(_: Request, exc: NotFoundError):
    return JSONResponse(status_code=404, content={"detail": str(exc)})


@app.exception_handler(ConfirmationRequired)
def confirmation_required(_: Request, exc: ConfirmationRequired):
    return JSONResponse(status_code=409, content={"detail": str(exc), "requiresConfirmation": True, "reason": exc.reason})


@app.exception_handler(ValidationError)
def validation_error(_: Request, exc: ValidationError):
    errors = [f"{'.'.join(str(p) for p in e['loc'])}: {e['msg']}" for e in exc.errors()]
    return JSONResponse(status_code=422, content={"detail": "; ".join(errors)})


@app.exception_handler(AIError)
def ai_error(_: Request, exc: AIError):
    return JSONResponse(status_code=503, content={"detail": str(exc)})


for r in (
    system.router, activities.router, work_items.actions_router, work_items.blockers_router,
    work_items.prs_router, catalog.projects_router, catalog.people_router, catalog.initiatives_router,
    catalog.risks_router, agent.router,
):
    app.include_router(r)


@app.get("/")
def root():
    return {"name": "QA Task Agent API", "docs": "/docs", "health": "/api/health"}

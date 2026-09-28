"""Dashboard, briefing, search, history, questions, confirmations, recommendations, settings, health."""
from typing import Any

from fastapi import APIRouter
from pydantic import BaseModel

from app import repositories as repos
from app.agent import service as agent
from app.ai import get_provider
from app.config import get_settings
from app.domain.enums import CreatedBy, HistorySource, PendingStatus, QuestionStatus, RecommendationStatus
from app.rules import REGISTRY
from app.services import changes, operations
from app.services.briefing import build_dashboard
from app.services.changes import NotFoundError
from app.services.search import search as global_search
from app.utils.time import days_since, now_iso

router = APIRouter(prefix="/api", tags=["system"])


@router.get("/health")
def health():
    ai = get_provider().health(force=True)
    try:
        repos.get_app_settings()
        firestore = {"ok": True}
    except Exception as e:  # noqa: BLE001 — health must report any failure
        firestore = {"ok": False, "error": str(e)}
    return {"ok": firestore["ok"], "firestore": firestore, "ai": ai.model_dump()}


@router.get("/dashboard")
def dashboard():
    return build_dashboard()


@router.get("/briefing")
def briefing():
    return agent.briefing_with_ai()


@router.get("/search")
def search(q: str = ""):
    return global_search(q)


@router.get("/history")
def history(entityType: str | None = None, entityId: str | None = None, activityId: str | None = None,
            days: int | None = None, limit: int = 300):
    items = [
        h for h in repos.history.all()
        if (entityType is None or h.entity_type == entityType)
        and (entityId is None or h.entity_id == entityId)
        and (activityId is None or h.activity_id == activityId)
        and (days is None or (days_since(h.created_at) or 0) <= days)
    ]
    items.sort(key=lambda h: h.created_at, reverse=True)
    return [h.dump() for h in items[:limit]]


# ─── Open questions ─────────────────────────────────────────────────────────


class AnswerBody(BaseModel):
    answer: str


@router.get("/questions")
def list_questions(status: str | None = "OPEN"):
    items = [q for q in repos.questions.all() if status in (None, "ALL") or q.status == status]
    return [q.dump() for q in sorted(items, key=lambda q: q.created_at)]


@router.post("/questions")
def create_question(body: dict[str, Any]):
    return changes.create_from_dict("question", {**body, "createdBy": "USER"}).dump()


@router.post("/questions/{question_id}/answer")
def answer_question(question_id: str, body: AnswerBody):
    q = repos.questions.get(question_id)
    if q is None:
        raise NotFoundError("Pregunta no encontrada")
    q, _ = changes.update("question", question_id, {
        "status": QuestionStatus.ANSWERED.value, "answer": body.answer, "answered_at": now_iso(),
    })
    if q.activity_id:
        operations.add_note(q.activity_id, f"Respuesta a «{q.question}»: {body.answer}", HistorySource.UI, CreatedBy.USER)
    return q.dump()


@router.post("/questions/{question_id}/dismiss")
def dismiss_question(question_id: str):
    q, _ = changes.update("question", question_id, {"status": QuestionStatus.DISMISSED.value})
    return q.dump()


# ─── Pending confirmations ──────────────────────────────────────────────────


@router.get("/pending-changes")
def list_pending(status: str | None = None):
    items = [p for p in repos.pending_changes.all() if status is None or p.status == status]
    return [p.dump() for p in sorted(items, key=lambda p: p.created_at, reverse=True)]


@router.post("/pending-changes/{pending_id}/confirm")
def confirm_pending(pending_id: str):
    return agent.confirm_pending(pending_id).dump()


@router.post("/pending-changes/{pending_id}/reject")
def reject_pending(pending_id: str):
    return agent.reject_pending(pending_id).dump()


# ─── Recommendations ────────────────────────────────────────────────────────


@router.get("/recommendations")
def list_recommendations(status: str | None = "OPEN"):
    from app.services import recommendations
    from app.services.insights import snapshot

    recommendations.sync(snapshot())
    items = [r for r in repos.recommendations.all() if status is None or r.status == status]
    rank = {"HIGH": 0, "MEDIUM": 1, "LOW": 2}
    return [r.dump() for r in sorted(items, key=lambda r: (rank[r.severity], r.entity_name or ""))]


@router.post("/recommendations/{rec_id}/dismiss")
def dismiss_recommendation(rec_id: str):
    r = repos.recommendations.get(rec_id)
    if r is None:
        raise NotFoundError("Recomendación no encontrada")
    updated = r.model_copy(update={"status": RecommendationStatus.DISMISSED.value, "updated_at": now_iso()})
    return repos.recommendations.save(updated).dump()


# ─── Settings ───────────────────────────────────────────────────────────────


@router.get("/settings")
def get_app_settings():
    s = get_settings()
    return {
        "app": repos.get_app_settings().dump(),
        "env": {
            "firebaseProjectId": s.firebase_project_id,
            "aiProvider": s.ai_provider,
            "ollamaBaseUrl": s.ollama_base_url,
            "ollamaModel": s.ollama_model,
            "ollamaNumCtx": s.ollama_num_ctx,
            "timezone": s.app_timezone,
            "currentUserName": s.current_user_name,
        },
        "rules": [{"id": r.id, "description": r.description} for r in REGISTRY],
        "pendingCount": sum(1 for p in repos.pending_changes.all() if p.status == PendingStatus.PENDING),
    }


@router.patch("/settings")
def update_app_settings(body: dict[str, Any]):
    current = repos.get_app_settings()
    patch = changes.normalize_patch(type(current), body)
    updated = type(current).model_validate({**current.model_dump(), **patch, "updated_at": now_iso()})
    repos.app_settings.save(updated)
    get_provider().health(force=True)
    return updated.dump()

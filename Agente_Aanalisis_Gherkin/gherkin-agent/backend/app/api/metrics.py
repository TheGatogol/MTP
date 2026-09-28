from fastapi import APIRouter

from app import store
from app.metrics import catalog

router = APIRouter(prefix="/api", tags=["metrics"])


@router.get("/rules")
def rules():
    return [r.dump() for r in catalog.all_rules()]


@router.get("/history")
def history(limit: int = 100):
    return list(reversed(store.read_jsonl("history.jsonl")))[:limit]

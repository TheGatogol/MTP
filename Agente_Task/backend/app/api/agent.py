from fastapi import APIRouter

from app import repositories as repos
from app.agent import service as agent
from app.agent.schemas import ChatContext, ChatRequest
from app.domain.models import ChatSession
from app.utils.text import new_id

router = APIRouter(prefix="/api/agent", tags=["agent"])


@router.post("/chat")
def chat(req: ChatRequest):
    return agent.chat(req).dump()


@router.get("/sessions")
def list_sessions(contextType: str | None = None, contextId: str | None = None):
    items = repos.chat_sessions.all()
    if contextType or contextId:
        items = [s for s in items if s.context_type == contextType and s.context_id == contextId]
    else:
        items = [s for s in items if not s.context_id]
    return [s.dump() for s in sorted(items, key=lambda s: s.updated_at, reverse=True)]


@router.post("/sessions")
def create_session(body: ChatContext | None = None):
    if body and body.entity_id:
        session = agent.get_or_create_session(None, body)
    else:
        session = repos.chat_sessions.save(ChatSession(id=new_id("chat"), title="Nueva conversación"))
    return session.dump()


@router.get("/sessions/{session_id}/messages")
def messages(session_id: str):
    return [m.dump() for m in agent.session_messages(session_id)]


@router.delete("/sessions/{session_id}")
def delete_session(session_id: str):
    for m in agent.session_messages(session_id):
        repos.chat_messages.delete(m.id)
    repos.chat_sessions.delete(session_id)
    return {"ok": True}

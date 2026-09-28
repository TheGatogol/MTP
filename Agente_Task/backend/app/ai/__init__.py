"""AI provider abstraction. The agent only depends on AIProvider, never on a concrete backend."""
from app.ai.factory import get_provider
from app.ai.provider import AIError, AIHealth, AIProvider

__all__ = ["AIError", "AIHealth", "AIProvider", "get_provider"]

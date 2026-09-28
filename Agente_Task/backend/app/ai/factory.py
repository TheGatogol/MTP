from functools import lru_cache

from app.ai.ollama_provider import OllamaProvider
from app.ai.provider import AIProvider
from app.config import get_settings

# Register new providers here (e.g. "openai_compatible": OpenAICompatibleProvider).
PROVIDERS: dict[str, type[AIProvider]] = {
    "ollama": OllamaProvider,
}


@lru_cache
def get_provider() -> AIProvider:
    name = get_settings().ai_provider.lower()
    if name not in PROVIDERS:
        raise ValueError(f"AI_PROVIDER desconocido: {name}. Opciones: {', '.join(PROVIDERS)}")
    return PROVIDERS[name]()

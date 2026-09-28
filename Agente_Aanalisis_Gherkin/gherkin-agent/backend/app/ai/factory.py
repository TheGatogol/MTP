from app.ai.ollama_provider import OllamaProvider
from app.ai.provider import AIProvider
from app.config import get_settings

PROVIDERS: dict[str, type[AIProvider]] = {"ollama": OllamaProvider}
_cache: dict[tuple[str, str], AIProvider] = {}


def get_provider() -> AIProvider:
    from app.settings_store import get_app_settings

    name = get_settings().ai_provider
    model = get_app_settings().model_override or get_settings().ollama_model
    key = (name, model)
    if key not in _cache:
        if name not in PROVIDERS:
            raise ValueError(f"Proveedor de IA desconocido: {name}")
        _cache[key] = PROVIDERS[name](model=model)
    return _cache[key]

import json
import logging
import time

import httpx
from pydantic import ValidationError

from app.ai.provider import AIError, AIHealth, AIProvider, T
from app.config import get_settings
from app.repositories import get_app_settings

log = logging.getLogger(__name__)


class OllamaProvider(AIProvider):
    name = "ollama"

    def __init__(self):
        self._health: AIHealth | None = None
        self._health_at = 0.0

    @property
    def base_url(self) -> str:
        return get_settings().ollama_base_url.rstrip("/")

    @property
    def model(self) -> str:
        override = get_app_settings().ai_model_override
        return override or get_settings().ollama_model

    def health(self, force: bool = False) -> AIHealth:
        if not force and self._health and time.monotonic() - self._health_at < 10:
            return self._health
        h = AIHealth(provider=self.name, available=False, base_url=self.base_url, model=self.model)
        try:
            with httpx.Client(timeout=3) as client:
                tags = client.get(f"{self.base_url}/api/tags").json()
                h.installed_models = sorted(m["name"] for m in tags.get("models", []))
                h.model_installed = self.model in h.installed_models or f"{self.model}:latest" in h.installed_models
                ps = client.get(f"{self.base_url}/api/ps").json()
                h.model_loaded = any(m.get("name") in (self.model, f"{self.model}:latest") for m in ps.get("models", []))
            h.available = h.model_installed
            if not h.model_installed:
                h.error = f"El modelo '{self.model}' no está descargado. Ejecuta: ollama pull {self.model}"
        except (httpx.HTTPError, ValueError) as e:
            h.error = f"Ollama no disponible en {self.base_url} ({type(e).__name__})"
        self._health, self._health_at = h, time.monotonic()
        return h

    def _post_chat(self, messages: list[dict[str, str]], temperature: float, fmt: dict | None) -> str:
        s = get_settings()
        body = {
            "model": self.model,
            "messages": messages,
            "stream": False,
            "think": False,
            "keep_alive": s.ollama_keep_alive,
            "options": {"temperature": temperature, "num_ctx": s.ollama_num_ctx},
        }
        if fmt is not None:
            body["format"] = fmt
        try:
            with httpx.Client(timeout=s.ollama_timeout_seconds) as client:
                r = client.post(f"{self.base_url}/api/chat", json=body)
                r.raise_for_status()
                return r.json()["message"]["content"]
        except httpx.HTTPError as e:
            self._health = None
            raise AIError(f"Error llamando a Ollama: {e}") from e
        except (KeyError, ValueError) as e:
            raise AIError(f"Respuesta inesperada de Ollama: {e}") from e

    def chat(self, messages: list[dict[str, str]], temperature: float = 0.3) -> str:
        return self._post_chat(messages, temperature, None).strip()

    def structured(self, messages: list[dict[str, str]], schema: type[T], temperature: float = 0.1) -> T:
        json_schema = schema.model_json_schema()
        attempt_messages = list(messages)
        last_error: Exception | None = None
        for _ in range(2):
            raw = self._post_chat(attempt_messages, temperature, json_schema)
            try:
                return schema.model_validate(json.loads(raw))
            except (json.JSONDecodeError, ValidationError) as e:
                last_error = e
                log.warning("Structured output inválido, reintentando: %s", e)
                attempt_messages = [*messages, {"role": "assistant", "content": raw}, {
                    "role": "user",
                    "content": f"La respuesta no cumple el esquema JSON ({str(e)[:400]}). Devuelve SOLO el JSON válido.",
                }]
        raise AIError(f"El modelo no devolvió JSON válido: {last_error}")

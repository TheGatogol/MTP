"""Proveedor Ollama: IA 100 % local. Usa salida estructurada (JSON Schema desde Pydantic) y sin thinking."""
import json
import logging
import time

import httpx
from pydantic import ValidationError

from app.ai.provider import AIError, AIHealth, AIProvider, T
from app.config import get_settings

log = logging.getLogger(__name__)


class OllamaProvider(AIProvider):
    name = "ollama"

    def __init__(self, model: str | None = None) -> None:
        s = get_settings()
        self.base_url = s.ollama_base_url.rstrip("/")
        self.model = model or s.ollama_model
        self.timeout = s.ollama_timeout_seconds
        self.keep_alive = s.ollama_keep_alive
        self.num_ctx = s.ollama_num_ctx
        self._health: tuple[float, AIHealth] | None = None

    def health(self, force: bool = False) -> AIHealth:
        if not force and self._health and time.time() - self._health[0] < 15:
            return self._health[1]
        try:
            r = httpx.get(f"{self.base_url}/api/tags", timeout=3)
            r.raise_for_status()
            models = [m["name"] for m in r.json().get("models", [])]
            installed = self.model in models or f"{self.model}:latest" in models
            h = AIHealth(available=installed, provider=self.name, model=self.model, model_installed=installed,
                         models=models, error=None if installed else
                         f"El modelo '{self.model}' no está descargado. Ejecuta: ollama pull {self.model}")
        except httpx.HTTPError as e:
            h = AIHealth(available=False, provider=self.name, model=self.model,
                         error=f"Ollama no disponible en {self.base_url} ({e.__class__.__name__}). Abre Ollama o ejecuta 'ollama serve'.")
        self._health = (time.time(), h)
        return h

    def _post(self, payload: dict) -> dict:
        try:
            r = httpx.post(f"{self.base_url}/api/chat", json=payload, timeout=self.timeout)
        except httpx.TimeoutException as e:
            raise AIError(f"Ollama tardó más de {int(self.timeout)} s en responder") from e
        except httpx.HTTPError as e:
            raise AIError(f"No se pudo conectar con Ollama: {e}") from e
        if r.status_code >= 400:
            raise AIError(f"Ollama respondió {r.status_code}: {r.text[:200]}")
        return r.json()

    def _payload(self, messages: list[dict[str, str]], temperature: float) -> dict:
        return {
            "model": self.model,
            "messages": messages,
            "stream": False,
            "think": False,
            "keep_alive": self.keep_alive,
            "options": {"temperature": temperature, "num_ctx": self.num_ctx},
        }

    def chat(self, messages: list[dict[str, str]], temperature: float = 0.2) -> str:
        return self._post(self._payload(messages, temperature)).get("message", {}).get("content", "").strip()

    def structured(self, messages: list[dict[str, str]], schema: type[T], temperature: float = 0.1,
                   max_tokens: int | None = None) -> T:
        payload = self._payload(messages, temperature)
        if max_tokens:
            payload["options"]["num_predict"] = max_tokens
        payload["format"] = schema.model_json_schema()
        last_error: Exception | None = None
        for attempt in range(2):
            t0 = time.perf_counter()
            data = self._post(payload)
            content = data.get("message", {}).get("content", "")
            log.info("Ollama %s: %s en %.1fs (entrada %s tokens, salida %s tokens)", self.model, schema.__name__,
                     time.perf_counter() - t0, data.get("prompt_eval_count"), data.get("eval_count"))
            try:
                return schema.model_validate_json(content)
            except (ValidationError, json.JSONDecodeError) as e:
                last_error = e
                log.warning("Respuesta inválida (intento %s): %s", attempt + 1, str(e)[:200])
        raise AIError(f"La IA devolvió una respuesta inválida: {str(last_error)[:160]}")

    def warmup(self) -> None:
        """Carga el modelo en memoria para que el primer análisis sea rápido."""
        if not self.health(force=True).available:
            return
        try:
            httpx.post(f"{self.base_url}/api/generate",
                       json={"model": self.model, "prompt": "", "keep_alive": self.keep_alive}, timeout=self.timeout)
            log.info("Modelo %s cargado en memoria", self.model)
        except httpx.HTTPError as e:
            log.warning("No se pudo precargar el modelo: %s", e)

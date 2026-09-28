from functools import lru_cache
from pathlib import Path

from pydantic_settings import BaseSettings, SettingsConfigDict

BACKEND_DIR = Path(__file__).resolve().parents[1]


class Settings(BaseSettings):
    model_config = SettingsConfigDict(
        env_file=BACKEND_DIR / ".env", env_file_encoding="utf-8", extra="ignore"
    )

    firebase_project_id: str
    google_application_credentials: str

    ai_provider: str = "ollama"
    ollama_base_url: str = "http://127.0.0.1:11434"
    ollama_model: str = "qwen3:14b"
    ollama_timeout_seconds: float = 180
    ollama_keep_alive: str = "30m"
    ollama_num_ctx: int = 8192

    app_timezone: str = "America/Mexico_City"
    current_user_name: str = "Rodrigo"
    cors_origins: str = "http://localhost:5173,http://127.0.0.1:5173"
    api_host: str = "127.0.0.1"
    api_port: int = 8000

    @property
    def cors_origin_list(self) -> list[str]:
        return [o.strip() for o in self.cors_origins.split(",") if o.strip()]


@lru_cache
def get_settings() -> Settings:
    return Settings()

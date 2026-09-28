from functools import lru_cache
from pathlib import Path

from pydantic import field_validator
from pydantic_settings import BaseSettings, SettingsConfigDict

BACKEND_DIR = Path(__file__).resolve().parent.parent
PROJECT_DIR = BACKEND_DIR.parent
WORKSPACE_DIR = PROJECT_DIR.parent


class Settings(BaseSettings):
    model_config = SettingsConfigDict(env_file=BACKEND_DIR / ".env", env_file_encoding="utf-8", extra="ignore")

    framework_dir: Path = WORKSPACE_DIR / "framework" / "glomo-mx"
    e2e_subdir: str = "test/e2e"
    metrics_dir: Path = WORKSPACE_DIR / "MetricasCodigo"
    data_dir: Path = PROJECT_DIR / "data"

    ai_provider: str = "ollama"
    ollama_base_url: str = "http://127.0.0.1:11434"
    ollama_model: str = "qwen3:14b"
    ollama_timeout_seconds: float = 300
    ollama_keep_alive: str = "30m"
    ollama_num_ctx: int = 8192

    cors_origins: str = "http://localhost:5174,http://127.0.0.1:5174"

    @field_validator("framework_dir", "metrics_dir", "data_dir", mode="after")
    @classmethod
    def _resolve(cls, v: Path) -> Path:
        return v if v.is_absolute() else (BACKEND_DIR / v).resolve()

    @property
    def e2e_dir(self) -> Path:
        return self.framework_dir / self.e2e_subdir

    @property
    def features_dir(self) -> Path:
        return self.e2e_dir / "lib" / "features"

    @property
    def cors_origin_list(self) -> list[str]:
        return [o.strip() for o in self.cors_origins.split(",") if o.strip()]


@lru_cache
def get_settings() -> Settings:
    return Settings()

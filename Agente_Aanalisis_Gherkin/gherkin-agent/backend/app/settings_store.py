"""Configuración editable desde la UI (data/settings.json)."""
from app import store
from app.domain.models import CamelModel

FILE = "settings.json"


class AppSettings(CamelModel):
    model_override: str | None = None
    ai_enabled: bool = True
    ai_review_code: bool = True       # la IA revisa también steps/pages/navigation (no solo el feature)
    ai_generate_fixes: bool = True    # la IA propone correcciones para lo que no se arregla con reglas
    max_ai_files: int = 2            # archivos de código que la IA revisa/corrige por análisis
    max_ai_lines: int = 320           # líneas máximas de un archivo que se envían completas a la IA

    def signature(self, model: str) -> str:
        return f"{model}|{self.ai_enabled}|{self.ai_review_code}|{self.ai_generate_fixes}|{self.max_ai_files}"


def get_app_settings() -> AppSettings:
    return AppSettings.model_validate(store.read_json(FILE, {}))


def save_app_settings(patch: dict) -> AppSettings:
    data = AppSettings.model_validate({**get_app_settings().model_dump(by_alias=True), **patch})
    if data.model_override is not None and not data.model_override.strip():
        data.model_override = None
    data.max_ai_files = max(0, min(data.max_ai_files, 10))
    store.write_json(FILE, data.model_dump(by_alias=True))
    return data

from abc import ABC, abstractmethod
from typing import TypeVar

from pydantic import BaseModel

T = TypeVar("T", bound=BaseModel)


class AIError(Exception):
    """Fallo de la IA (no disponible, timeout o respuesta inválida)."""


class AIHealth(BaseModel):
    available: bool
    provider: str
    model: str
    model_installed: bool = False
    models: list[str] = []
    error: str | None = None


class AIProvider(ABC):
    name: str = "base"

    @abstractmethod
    def health(self, force: bool = False) -> AIHealth: ...

    @abstractmethod
    def chat(self, messages: list[dict[str, str]], temperature: float = 0.2) -> str: ...

    @abstractmethod
    def structured(self, messages: list[dict[str, str]], schema: type[T], temperature: float = 0.1,
                   max_tokens: int | None = None) -> T: ...

    def warmup(self) -> None:  # opcional
        return None

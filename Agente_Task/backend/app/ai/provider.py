from abc import ABC, abstractmethod
from typing import TypeVar

from pydantic import BaseModel

T = TypeVar("T", bound=BaseModel)


class AIError(Exception):
    """Raised when the provider is unreachable or returns an unusable answer."""


class AIHealth(BaseModel):
    provider: str
    available: bool
    base_url: str | None = None
    model: str | None = None
    model_installed: bool = False
    model_loaded: bool = False
    installed_models: list[str] = []
    error: str | None = None


class AIProvider(ABC):
    name: str = "base"

    @abstractmethod
    def health(self, force: bool = False) -> AIHealth:
        ...

    @abstractmethod
    def chat(self, messages: list[dict[str, str]], temperature: float = 0.3) -> str:
        """Free-text completion."""

    @abstractmethod
    def structured(self, messages: list[dict[str, str]], schema: type[T], temperature: float = 0.1) -> T:
        """Completion constrained to `schema` (JSON) and validated with Pydantic."""

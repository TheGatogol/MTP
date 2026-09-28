"""Deterministic recommendation engine. Importing this package registers every rule."""
from app.rules import builtin  # noqa: F401  (registers rules)
from app.rules.engine import REGISTRY, Finding, run_rules

__all__ = ["REGISTRY", "Finding", "run_rules"]

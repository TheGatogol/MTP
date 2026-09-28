"""Guía de programación y machote (ejemplos reales antes/después) que recibe la IA al corregir."""
import json
import re
from functools import lru_cache
from pathlib import Path

GUIDE_DIR = Path(__file__).parent
SECTION_BY_KIND = {"page": "Page", "component": "Component", "navigation": "Navigation",
                   "step_definition": "Step definitions", "feature": "Feature"}


@lru_cache
def _sections() -> dict[str, str]:
    text = (GUIDE_DIR / "programar.md").read_text(encoding="utf-8")
    out = {}
    for block in re.split(r"^## ", text, flags=re.M)[1:]:
        title, _, body = block.partition("\n")
        out[title.strip()] = body.strip()
    return out


@lru_cache
def _examples() -> list[dict]:
    return json.loads((GUIDE_DIR / "examples" / "index.json").read_text(encoding="utf-8"))


def guide_for(kind: str) -> str:
    """Principios + reglas del tipo de archivo (y de Page para componentes, que comparten reglas)."""
    sections = _sections()
    keys = [k for k in sections if k.startswith("Principios")]
    title = SECTION_BY_KIND.get(kind)
    if kind == "component":
        keys += [k for k in sections if k.startswith("Page")]
    keys += [k for k in sections if title and k.startswith(title)]
    return "\n\n".join(f"{k}:\n{sections[k]}" for k in keys)


def examples_for(rule_ids: set[str], kind: str, limit: int = 4) -> str:
    chosen = [e for e in _examples() if set(e["rules"]) & rule_ids]
    chosen.sort(key=lambda e: (e["kind"] != kind, -len(set(e["rules"]) & rule_ids)))
    blocks = []
    for e in chosen[:limit]:
        blocks.append(f"[{', '.join(e['rules'])}] {e['note']}\nANTES:\n{e['before']}\nDESPUÉS:\n{e['after']}")
    return "\n\n".join(blocks)

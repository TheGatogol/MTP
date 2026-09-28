"""Validación de sintaxis real de JavaScript (Babel, vía Node) para no proponer código roto."""
import json
import logging
import shutil
import subprocess
from functools import lru_cache

from app.config import PROJECT_DIR

log = logging.getLogger(__name__)
CHECKER = PROJECT_DIR / "tools" / "jscheck" / "check.js"


@lru_cache
def _node() -> str | None:
    node = shutil.which("node")
    if not node or not CHECKER.exists() or not (CHECKER.parent / "node_modules" / "@babel" / "parser").exists():
        log.warning("Validador de sintaxis JS no disponible (node o tools/jscheck sin instalar)")
        return None
    return node


def check(code: str) -> tuple[bool, int | None, str]:
    """(válido, línea del error, mensaje). Si el validador no está instalado, se considera válido."""
    node = _node()
    if node is None:
        return True, None, ""
    try:
        out = subprocess.run([node, str(CHECKER)], input=code, capture_output=True, text=True, encoding="utf-8",
                             timeout=20)
        data = json.loads(out.stdout or "{}")
    except (subprocess.SubprocessError, json.JSONDecodeError, OSError) as e:
        log.warning("No se pudo validar la sintaxis: %s", e)
        return True, None, ""
    return bool(data.get("ok")), data.get("line"), data.get("message", "")


def breaks(old: str, new: str) -> str | None:
    """Mensaje si `new` rompe la sintaxis que `old` tenía bien; None si está bien."""
    ok, line, msg = check(new)
    if ok:
        return None
    if not check(old)[0]:
        return None          # el original ya estaba roto: no se puede exigir más
    return f"deja el archivo con un error de sintaxis (línea {line}: {msg[:80]})"

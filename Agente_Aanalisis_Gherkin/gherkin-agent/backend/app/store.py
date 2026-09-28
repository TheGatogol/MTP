"""Almacenamiento local en archivos JSON (sin base de datos).

data/
  settings.json      configuración editable desde la UI
  reports/<id>.json  reportes de análisis (también sirven de caché)
  history.jsonl      correcciones aplicadas / revertidas (append-only)
  backups/<id>/...   copia del archivo original antes de aplicar una corrección
"""
import json
import os
import threading
from pathlib import Path
from typing import Any

from pydantic import BaseModel

from app.config import get_settings

_lock = threading.Lock()


def data_dir() -> Path:
    d = get_settings().data_dir
    d.mkdir(parents=True, exist_ok=True)
    return d


def read_json(name: str, default: Any = None) -> Any:
    path = data_dir() / name
    if not path.exists():
        return default
    try:
        return json.loads(path.read_text(encoding="utf-8"))
    except (OSError, json.JSONDecodeError):
        return default


def write_json(name: str, value: Any) -> None:
    path = data_dir() / name
    path.parent.mkdir(parents=True, exist_ok=True)
    if isinstance(value, BaseModel):
        text = value.model_dump_json(by_alias=True, indent=2)
    else:
        text = json.dumps(value, ensure_ascii=False, indent=2)
    tmp = path.with_suffix(path.suffix + ".tmp")
    with _lock:
        tmp.write_text(text, encoding="utf-8")
        os.replace(tmp, path)


def append_jsonl(name: str, record: dict) -> None:
    path = data_dir() / name
    with _lock, path.open("a", encoding="utf-8") as f:
        f.write(json.dumps(record, ensure_ascii=False) + "\n")


def read_jsonl(name: str) -> list[dict]:
    path = data_dir() / name
    if not path.exists():
        return []
    out = []
    for line in path.read_text(encoding="utf-8").splitlines():
        if line.strip():
            try:
                out.append(json.loads(line))
            except json.JSONDecodeError:
                continue
    return out


def list_dir(name: str) -> list[Path]:
    d = data_dir() / name
    return sorted(d.glob("*.json"), key=lambda p: p.stat().st_mtime, reverse=True) if d.exists() else []

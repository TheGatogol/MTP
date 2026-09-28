import hashlib
import re
import unicodedata
import uuid
from datetime import datetime, timezone


def new_id(prefix: str) -> str:
    return f"{prefix}_{uuid.uuid4().hex[:12]}"


def now_iso() -> str:
    return datetime.now(timezone.utc).isoformat(timespec="seconds")


def sha(text: str) -> str:
    return hashlib.sha1(text.encode("utf-8")).hexdigest()


def fold(text: str) -> str:
    """Lowercase and strip accents, for search."""
    text = unicodedata.normalize("NFKD", text or "")
    return "".join(c for c in text if not unicodedata.combining(c)).lower()


def kebab(text: str) -> str:
    return re.sub(r"[^a-z0-9]+", "-", fold(text)).strip("-")


def vbank_slug(text: str) -> str:
    """Como nombra vBank las carpetas (kebabCase de lodash): separa camelCase, siglas y números.
    «N2» -> n-2, «ATMs» -> at-ms, «user's» -> users."""
    text = unicodedata.normalize("NFKD", text or "")
    text = "".join(c for c in text if not unicodedata.combining(c))
    text = re.sub(r"['’]", "", text)
    words = re.findall(r"[A-Z]+(?=[A-Z][a-z])|[A-Z]?[a-z]+|[A-Z]+|\d+", text)
    return "-".join(w.lower() for w in words)


def line_of(text: str, index: int) -> int:
    """1-based line number of a character offset."""
    return text.count("\n", 0, index) + 1


def clip(text: str, size: int = 160) -> str:
    text = (text or "").strip()
    return text if len(text) <= size else text[: size - 1] + "…"


def numbered(text: str, start: int = 1) -> str:
    return "\n".join(f"{i:>4}| {line}" for i, line in enumerate(text.split("\n"), start))


def read_source(path) -> tuple[str, str]:
    """Read a text file and return (content with \\n newlines, original newline)."""
    raw = path.read_bytes().decode("utf-8", errors="replace")
    newline = "\r\n" if "\r\n" in raw else "\n"
    return raw.replace("\r\n", "\n"), newline

import re
import unicodedata
import uuid


def new_id(prefix: str) -> str:
    return f"{prefix}_{uuid.uuid4().hex[:10]}"


def normalize(text: str | None) -> str:
    """Lowercase, strip accents and collapse whitespace — used for matching and search."""
    if not text:
        return ""
    text = unicodedata.normalize("NFKD", text)
    text = "".join(c for c in text if not unicodedata.combining(c))
    return re.sub(r"\s+", " ", text.lower()).strip()


STOPWORDS = {
    "de", "la", "el", "los", "las", "del", "para", "por", "con", "que", "una", "uno", "the",
    "and", "pr", "cerrar", "cierre", "actividad", "mx", "ya", "en", "se", "al", "lo", "su",
}


def tokens(text: str | None) -> list[str]:
    return [t for t in re.split(r"[^a-z0-9]+", normalize(text)) if len(t) >= 3 and t not in STOPWORDS]


def slug(text: str) -> str:
    return re.sub(r"[^a-z0-9]+", "-", normalize(text)).strip("-")

"""Heurísticas de texto compartidas por los checks."""
import re

SPANISH_WORDS = {
    "el", "la", "los", "las", "del", "al", "que", "para", "con", "por", "una", "uno", "usuario", "pantalla",
    "cuenta", "cuentas", "tarjeta", "ingresa", "selecciona", "valida", "validar", "muestra", "mostrar", "boton",
    "botón", "datos", "pago", "pagos", "cuando", "entonces", "dado", "esta", "está", "sus", "este", "esto",
    "debe", "espera", "esperar", "elemento", "elementos", "clic", "pulsa", "inicio", "sesion", "sesión",
    "operacion", "operación", "exitosa", "exitoso", "error", "correcto", "correcta", "movimientos", "saldo",
}
SPANISH_ONLY = SPANISH_WORDS - {"error", "correcto"}
ACCENT_RE = re.compile(r"[áéíóúñÁÉÍÓÚÑ¿¡]")
WORD_RE = re.compile(r"[A-Za-záéíóúñÁÉÍÓÚÑ]+")
UI_WORDS_RE = re.compile(
    r"\b(click|clicks|clicked|clicking|tap|taps|tapped|press|presses|pressed|button|buttons|checkbox|"
    r"swipe|swipes|scroll|scrolls|dropdown|textbox|input field)\b", re.I)
VALIDATION_WORDS_RE = re.compile(
    r"\b(sees?|seen|watch(es)?|views?\s+(the|a|an|all|his|her|their|that|this)\b|verif(y|ies)|"
    r"(is|are) (displayed|shown|visible))\b", re.I)
ACTION_WORDS_RE = re.compile(
    r"\b(?:user|he|she|they|client|customer)\s+(?:also\s+)?(clicks?|taps?|press(es)?|enters?|fills?|selects?|types?|goes to|"
    r"navigates?|opens?|closes?|confirms?|accepts?|submits?|logs? in|swipes?|scrolls?|writes?|inserts?)\b", re.I)
HARDCODED_RE = re.compile(
    r"(?<![\w.])(\d{10,}|\d{4}[ -]\d{4}[ -]\d{4}[ -]\d{4}|[\w.+-]+@[\w-]+\.[\w.]+)(?![\w.])")


def spanish_hits(text: str) -> int:
    words = [w.lower() for w in WORD_RE.findall(text)]
    hits = sum(1 for w in words if w in SPANISH_ONLY)
    return hits + (2 if ACCENT_RE.search(text) else 0)


def is_spanish(text: str) -> bool:
    return spanish_hits(text) >= 2


def split_identifier(name: str) -> list[str]:
    return [p.lower() for p in re.findall(r"[A-Z]?[a-z]+|[A-Z]+(?![a-z])", name)]


def unquoted(text: str) -> str:
    return re.sub(r"\"[^\"]*\"|'[^']*'", "", text)

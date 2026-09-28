"""Convierte patrones de step definitions (Cucumber Expressions o regex JS) a regex de Python."""
import re

PARAMS = {
    "string": r"(\"[^\"]*\"|'[^']*')",
    "int": r"(-?\d+)",
    "float": r"(-?\d*[.,]?\d+)",
    "double": r"(-?\d*[.,]?\d+)",
    "bigdecimal": r"(-?\d*[.,]?\d+)",
    "long": r"(-?\d+)",
    "word": r"([^\s]+)",
    "": r"(.*)",
}


def _split_alternatives(token: str) -> list[str]:
    alts, depth, cur, i = [], 0, "", 0
    while i < len(token):
        c = token[i]
        if c == "\\" and i + 1 < len(token):
            cur += token[i:i + 2]
            i += 2
            continue
        if c in "{(":
            depth += 1
        elif c in "})":
            depth -= 1
        if c == "/" and depth == 0:
            alts.append(cur)
            cur = ""
        else:
            cur += c
        i += 1
    alts.append(cur)
    return alts


def _piece(s: str) -> str:
    out, i = [], 0
    while i < len(s):
        c = s[i]
        if c == "\\" and i + 1 < len(s):
            out.append(re.escape(s[i + 1]))
            i += 2
        elif c == "{" and (j := s.find("}", i)) != -1:
            out.append(PARAMS.get(s[i + 1:j].strip(), r"(.*)"))
            i = j + 1
        elif c == "(" and (j := s.find(")", i)) != -1:
            out.append(f"(?:{_piece(s[i + 1:j])})?")
            i = j + 1
        else:
            out.append(re.escape(c))
            i += 1
    return "".join(out)


def expression_to_regex(expr: str) -> str:
    parts = []
    for tok in re.split(r"(\s+)", expr):
        if not tok:
            continue
        if tok.isspace():
            parts.append(r"\s+")
            continue
        alts = _split_alternatives(tok)
        parts.append(f"(?:{'|'.join(_piece(a) for a in alts)})" if len(alts) > 1 else _piece(tok))
    return "^" + "".join(parts) + "$"


def js_regex_to_python(pattern: str) -> str:
    p = re.sub(r"\(\?<([A-Za-z_]\w*)>", r"(?P<\1>", pattern)
    p = p.replace("[^]", r"[\s\S]")
    return p


def compile_step(pattern: str, kind: str, flags: str = "") -> re.Pattern | None:
    try:
        if kind == "expression":
            return re.compile(expression_to_regex(pattern))
        return re.compile(js_regex_to_python(pattern), re.I if "i" in flags else 0)
    except re.error:
        return None


def matches(compiled: re.Pattern, kind: str, text: str) -> re.Match | None:
    return compiled.fullmatch(text) if kind == "expression" else compiled.search(text)


def captured_args(m: re.Match) -> list[str]:
    return [g.strip("\"'") for g in m.groups() if g is not None]


REGEX_META_RE = re.compile(r"[()\[\]{}*+?|]")


def readable(pattern: str) -> str:
    """Texto legible de un patrón: los parámetros se muestran como <param>."""
    p = pattern.strip("^$")
    p = re.sub(r"\"\(\[\^\"\]\*\)\"|\"\(\.\*\??\)\"|\{string\}", "\"<param>\"", p)
    p = re.sub(r"\{(int|float|word|)\}", "<param>", p)
    p = re.sub(r"\((?:\?:)?[^()]*\)\??", "<param>", p)
    return p.replace("\\", "")


def literal_text(pattern: str, kind: str) -> str | None:
    """Si el patrón no tiene parámetros ni alternativas, devuelve el texto exacto del step."""
    p = pattern.strip("^$") if kind == "regex" else pattern
    if kind == "regex":
        if REGEX_META_RE.search(re.sub(r"\\.", "", p)):
            return None
        return re.sub(r"\\(.)", r"\1", p)
    if re.search(r"[{}()/]", p):
        return None
    return p

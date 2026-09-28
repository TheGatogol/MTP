"""Utilidades mínimas para leer JavaScript del framework sin un parser completo.

Saltan strings, template literals, comentarios y literales regex para emparejar llaves.
"""
import re
from dataclasses import dataclass, field

from app.utils.text import line_of

REGEX_PREV = set("(,=:[!&|?{};+-*%<>~^")
KEYWORDS_NOT_METHODS = {"if", "for", "while", "switch", "catch", "function", "return", "with", "else"}


def _skip_string(text: str, i: int) -> int:
    quote, n = text[i], len(text)
    i += 1
    while i < n:
        c = text[i]
        if c == "\\":
            i += 2
            continue
        if c == quote or c == "\n":
            return i + 1
        i += 1
    return n


def _skip_template(text: str, i: int) -> int:
    n = len(text)
    i += 1
    while i < n:
        c = text[i]
        if c == "\\":
            i += 2
            continue
        if c == "`":
            return i + 1
        if c == "$" and i + 1 < n and text[i + 1] == "{":
            i = match_brace(text, i + 1) + 1
            continue
        i += 1
    return n


def _skip_regex(text: str, i: int) -> int:
    n, in_class = len(text), False
    i += 1
    while i < n:
        c = text[i]
        if c == "\\":
            i += 2
            continue
        if c == "\n":
            return i
        if c == "[":
            in_class = True
        elif c == "]":
            in_class = False
        elif c == "/" and not in_class:
            i += 1
            while i < n and text[i].isalpha():
                i += 1
            return i
        i += 1
    return n


def _prev_significant(text: str, i: int) -> str:
    j = i - 1
    while j >= 0 and text[j] in " \t\r\n":
        j -= 1
    if j < 0:
        return "("
    # "return /x/" también es regex
    if text[max(0, j - 5): j + 1] == "return":
        return "("
    return text[j]


def skip_token(text: str, i: int) -> int | None:
    """Si en i empieza un string/comentario/regex, devuelve el índice posterior; si no, None."""
    c = text[i]
    if c in "\"'":
        return _skip_string(text, i)
    if c == "`":
        return _skip_template(text, i)
    if c == "/" and i + 1 < len(text):
        nxt = text[i + 1]
        if nxt == "/":
            j = text.find("\n", i)
            return len(text) if j == -1 else j
        if nxt == "*":
            j = text.find("*/", i + 2)
            return len(text) if j == -1 else j + 2
        if _prev_significant(text, i) in REGEX_PREV:
            return _skip_regex(text, i)
    return None


def match_brace(text: str, open_idx: int) -> int:
    """Índice del cierre que corresponde a la apertura ({, [ o () en open_idx."""
    pairs = {"{": "}", "[": "]", "(": ")"}
    opener = text[open_idx]
    closer = pairs[opener]
    depth, i, n = 0, open_idx, len(text)
    while i < n:
        skipped = skip_token(text, i)
        if skipped is not None:
            i = skipped
            continue
        c = text[i]
        if c == opener:
            depth += 1
        elif c == closer:
            depth -= 1
            if depth == 0:
                return i
        i += 1
    return n - 1


def strip_comments(text: str) -> str:
    """Reemplaza comentarios por espacios (conserva posiciones y saltos de línea)."""
    out, i, n = list(text), 0, len(text)
    while i < n:
        c = text[i]
        if c in "\"'`":
            i = skip_token(text, i) or i + 1
            continue
        if c == "/" and i + 1 < n and text[i + 1] in "/*":
            end = skip_token(text, i) or i + 1
            for k in range(i, end):
                if out[k] != "\n":
                    out[k] = " "
            i = end
            continue
        i += 1
    return "".join(out)


# ─── Step definitions ────────────────────────────────────────────────────────

STEP_CALL_RE = re.compile(r"(?<![\w.$])(Given|When|Then|defineStep|defineParameterType)\s*\(\s*")
FUNC_RE = re.compile(r"(?:async\s+)?function\b[^(]*\(")
ASYNC_RE = re.compile(r"(?:async\s*)?")
IDENT_RE = re.compile(r"[\w$]+")
ARROW_RE = re.compile(r"\s*=>\s*")


@dataclass
class RawStepDef:
    keyword: str
    pattern: str
    kind: str          # regex | expression
    flags: str
    line: int
    end_line: int
    header: str        # texto desde el keyword hasta la llave de apertura del cuerpo
    body: str
    start: int
    body_start: int
    end: int


def _read_pattern(text: str, i: int) -> tuple[str, str, str, int] | None:
    c = text[i] if i < len(text) else ""
    if c == "/":
        end = _skip_regex(text, i)
        literal = text[i:end]
        last = literal.rfind("/")
        return literal[1:last], "regex", literal[last + 1:], end
    if c in "\"'`":
        end = _skip_string(text, i) if c != "`" else _skip_template(text, i)
        return text[i + 1:end - 1], "expression", "", end
    return None


def extract_step_defs(text: str) -> list[RawStepDef]:
    out: list[RawStepDef] = []
    for m in STEP_CALL_RE.finditer(text):
        if m.group(1) == "defineParameterType":
            continue
        pat = _read_pattern(text, m.end())
        if not pat:
            continue
        pattern, kind, flags, i = pat
        n = len(text)
        # Salta opciones opcionales: , {timeout: 1000}
        while i < n and text[i] in " \t\r\n,":
            i += 1
        if i < n and text[i] == "{":
            i = match_brace(text, i) + 1
            while i < n and text[i] in " \t\r\n,":
                i += 1
        if fm := FUNC_RE.match(text, i):
            brace = text.find("{", match_brace(text, fm.end() - 1))
        else:
            k = ASYNC_RE.match(text, i).end()
            if k < n and text[k] == "(":
                k = match_brace(text, k) + 1
            elif wm := IDENT_RE.match(text, k):
                k = wm.end()
            else:
                continue
            arrow = ARROW_RE.match(text, k)
            if not arrow:
                continue
            brace = arrow.end()
            if brace >= n or text[brace] != "{":
                # Arrow sin llaves: async () => expr
                end = text.find("\n", brace)
                end = n if end == -1 else end
                out.append(RawStepDef(m.group(1), pattern, kind, flags, line_of(text, m.start()), line_of(text, end),
                                      text[m.start():brace], text[brace:end].strip(), m.start(), brace, end))
                continue
        if brace == -1:
            continue
        close = match_brace(text, brace)
        out.append(RawStepDef(
            keyword=m.group(1), pattern=pattern, kind=kind, flags=flags,
            line=line_of(text, m.start()), end_line=line_of(text, close),
            header=text[m.start():brace], body=text[brace + 1:close],
            start=m.start(), body_start=brace + 1, end=close,
        ))
    return out


# ─── Clases: métodos y objetos ───────────────────────────────────────────────

METHOD_RE = re.compile(
    r"^[ \t]+(?:static\s+)?(?:async\s+)?(?:get\s+|set\s+)?\*?([A-Za-z_$][\w$]*)\s*\(([^)]*(?:\([^)]*\)[^)]*)*)\)\s*\{",
    re.M,
)


@dataclass
class Method:
    name: str
    params: str
    line: int
    end_line: int
    body: str
    start: int
    body_start: int
    end: int


def extract_methods(text: str) -> list[Method]:
    """Métodos de primer nivel dentro de clases."""
    out: list[Method] = []
    for cls in re.finditer(r"\bclass\s+\w+[^{]*\{", text):
        cls_end = match_brace(text, cls.end() - 1)
        pos = cls.end()
        while True:
            m = METHOD_RE.search(text, pos, cls_end)
            if not m:
                break
            name = m.group(1)
            open_idx = m.end() - 1
            close = match_brace(text, open_idx)
            if name not in KEYWORDS_NOT_METHODS:
                out.append(Method(name, m.group(2).strip(), line_of(text, m.start()), line_of(text, close),
                                  text[open_idx + 1:close], m.start(), open_idx + 1, close))
            pos = close + 1
    return out


def find_object(text: str, key: str, start: int = 0) -> tuple[int, int] | None:
    """Posición (apertura, cierre) del objeto/array asignado a `key:`."""
    m = re.compile(rf"(?<![\w$]){re.escape(key)}\s*:\s*([{{\[])").search(text, start)
    if not m:
        return None
    open_idx = m.end() - 1
    return open_idx, match_brace(text, open_idx)


def split_top_level(content: str) -> list[tuple[str, int]]:
    """Divide por comas de primer nivel. Devuelve (fragmento, offset)."""
    parts, depth, i, start, n = [], 0, 0, 0, len(content)
    while i < n:
        skipped = skip_token(content, i)
        if skipped is not None:
            i = skipped
            continue
        c = content[i]
        if c in "{[(":
            depth += 1
        elif c in "}])":
            depth -= 1
        elif c == "," and depth == 0:
            parts.append((content[start:i], start))
            start = i + 1
        i += 1
    if content[start:].strip():
        parts.append((content[start:], start))
    return parts


@dataclass
class ObjEntry:
    key: str
    value: str
    line: int


def object_entries(text: str, key: str, start: int = 0) -> tuple[list[ObjEntry], int, int] | None:
    pos = find_object(text, key, start)
    if not pos:
        return None
    open_idx, close = pos
    inner = text[open_idx + 1:close]
    entries = []
    for frag, off in split_top_level(inner):
        m = re.match(r"\s*(?:\[\s*)?['\"]?([\w$-]+)['\"]?(?:\s*\])?\s*:\s*([\s\S]*)$", frag)
        if m:
            lead = len(frag) - len(frag.lstrip())
            entries.append(ObjEntry(m.group(1), m.group(2).strip(), line_of(text, open_idx + 1 + off + lead)))
    return entries, open_idx, close


def string_literals(value: str) -> list[str]:
    return [m.group(2) for m in re.finditer(r"(['\"`])((?:\\.|(?!\1).)*)\1", value)]


# ─── Imports / exports ───────────────────────────────────────────────────────

IMPORT_RE = re.compile(r"^\s*import\s+(?P<what>[^;]*?)\s*from\s*['\"](?P<src>[^'\"]+)['\"]", re.M)
EXPORT_NS_RE = re.compile(r"export\s+\*\s+as\s+(\w+)\s*from\s*['\"]([^'\"]+)['\"]")
EXPORT_DEFAULT_RE = re.compile(r"export\s*\{\s*default\s+as\s+(\w+)\s*\}\s*from\s*['\"]([^'\"]+)['\"]")
EXPORT_ALL_RE = re.compile(r"export\s+\*\s+from\s*['\"]([^'\"]+)['\"]")


@dataclass
class Import:
    src: str
    default: str | None = None
    namespace: str | None = None
    names: dict[str, str] = field(default_factory=dict)   # local -> imported


def parse_imports(text: str) -> list[Import]:
    out = []
    for m in IMPORT_RE.finditer(text):
        what, imp = m.group("what").strip(), Import(src=m.group("src"))
        if ns := re.search(r"\*\s+as\s+(\w+)", what):
            imp.namespace = ns.group(1)
        if braces := re.search(r"\{([^}]*)\}", what):
            for part in braces.group(1).split(","):
                part = part.strip()
                if not part:
                    continue
                if " as " in part:
                    orig, local = [p.strip() for p in part.split(" as ")]
                else:
                    orig = local = part
                imp.names[local] = orig
        head = re.sub(r"\{[^}]*\}|\*\s+as\s+\w+", "", what).strip().rstrip(",").strip()
        if head and re.fullmatch(r"[\w$]+", head):
            imp.default = head
        out.append(imp)
    return out

"""Correcciones determinísticas (fix = "auto" en el catálogo). No usan IA: son exactas y seguras.

Cada fixer recibe las líneas del archivo (lista mutable, 0-based) y el hallazgo, y devuelve una
descripción del cambio o None si no pudo aplicarlo.
"""
import re
from collections import Counter
from collections.abc import Callable

from app.domain.models import Finding

Fixer = Callable[[list[str], Finding, dict], str | None]
FEATURE_FIXERS: dict[str, Fixer] = {}
CODE_FIXERS: dict[str, Fixer] = {}
DELETE = "\x00__delete__"


def feature_fixer(rule_id: str):
    def deco(fn: Fixer) -> Fixer:
        FEATURE_FIXERS[rule_id] = fn
        return fn
    return deco


def code_fixer(rule_id: str):
    def deco(fn: Fixer) -> Fixer:
        CODE_FIXERS[rule_id] = fn
        return fn
    return deco


def _edit_tags(lines: list[str], line: int | None, fn: Callable[[list[str]], list[str]]) -> bool:
    if not line or line - 1 >= len(lines) or "#" in lines[line - 1]:
        return False
    raw = lines[line - 1]
    indent = raw[: len(raw) - len(raw.lstrip())]
    tokens = raw.split()
    new = fn(list(tokens))
    if new == tokens:
        return False
    lines[line - 1] = indent + " ".join(new) if new else DELETE
    return True


# ─── Feature ─────────────────────────────────────────────────────────────────


@feature_fixer("TAG-002")
def _id_hyphen(lines, f, _):
    tag = f.evidence.strip()
    fixed = tag.replace("-", "")
    ok = _edit_tags(lines, f.line, lambda t: [fixed if x == tag else x for x in t])
    return f"{tag} → {fixed}" if ok else None


@feature_fixer("TAG-005")
def _country(lines, f, info):
    country = info.get("country", "@MX")
    ok = _edit_tags(lines, f.line, lambda t: t + [country] if t and t[0].startswith("@") else t)
    return f"Se agregó {country}" if ok else None


@feature_fixer("TAG-006")
def _devices(lines, f, _):
    missing = re.findall(r"@(?:web|ios|android)\b", f.message.split(":", 1)[-1])
    ok = _edit_tags(lines, f.line, lambda t: t + [m for m in missing if m not in t])
    return f"Se agregaron {' '.join(missing)}" if ok else None


@feature_fixer("TAG-007")
def _manual_done(lines, f, _):
    ok = _edit_tags(lines, f.line, lambda t: [x for x in t if x != "@web-done"])
    return "Se quitó @web-done del escenario manual" if ok else None


def _tag_block(lines: list[str], line: int | None) -> set[str]:
    """Tags de las líneas de tags contiguas a `line` (el bloque de tags del escenario)."""
    if not line:
        return set()
    out, i = set(), line - 1
    while i >= 0 and lines[i].strip().startswith("@"):
        out.update(lines[i].split())
        i -= 1
    i = line
    while i < len(lines) and lines[i].strip().startswith("@"):
        out.update(lines[i].split())
        i += 1
    return out


@feature_fixer("TAG-010")
def _test_alias(lines, f, info):
    has_backend = "@backend(test)" in _tag_block(lines, f.line)
    ok = _edit_tags(lines, f.line, lambda t: [x for x in t if x != "@test"] if has_backend
                    else ["@backend(test)" if x == "@test" else x for x in t])
    return "@test → @backend(test)" if ok else None


@feature_fixer("TAG-011")
def _glomo(lines, f, _):
    ok = _edit_tags(lines, f.line, lambda t: [x for x in t if x != "@glomo"])
    return "Se quitó @glomo" if ok else None


@feature_fixer("TAG-014")
def _no_dm(lines, f, _):
    ok = _edit_tags(lines, f.line, lambda t: t + ["@no-data-manager"] if "@no-data-manager" not in t else t)
    return "Se agregó @no-data-manager" if ok else None


@feature_fixer("TAG-016")
def _vbank(lines, f, _):
    if not f.message.startswith("No hay grabaciones"):
        return None
    ok = _edit_tags(lines, f.line, lambda t: ["@!vbank" if x == "@vbank" else x for x in t])
    return "@vbank → @!vbank (sin grabaciones)" if ok else None


def _delete_entry(lines: list[str], f: Finding) -> str | None:
    """Borra una entrada de una sola línea `key: 'selector',` de un objeto de elementos."""
    key = f.evidence.split(":", 1)[0].strip()
    deleted = []
    for ln in [f.line, *f.lines]:
        if not ln or ln - 1 >= len(lines):
            continue
        line = lines[ln - 1].strip()
        if re.match(rf"^['\"]?{re.escape(key)}['\"]?\s*:\s*(['\"`])[^'\"`]*\1\s*,?$", line):
            lines[ln - 1] = DELETE
            deleted.append(key)
    return f"Se eliminó el elemento «{key}»" if deleted else None


@code_fixer("CMP-004")
def _short_component(lines, f, _):
    changed = False
    for ln in [f.line, *f.lines]:
        if not ln or ln - 1 >= len(lines):
            continue
        new = re.sub(r"(\b[\w$]+\s*:\s*)\[\s*([A-Z][\w$]*)\s*\]", r"\1\2", lines[ln - 1])
        if new != lines[ln - 1]:
            lines[ln - 1], changed = new, True
    return "Componente sin argumentos: [Clase] → Clase" if changed else None


@code_fixer("COD-015")
def _scroll_before_click(lines, f, _):
    deleted = False
    for ln in [f.line, *f.lines]:
        if not ln or ln - 1 >= len(lines):
            continue
        if re.match(r"^\s*(?:await\s*\(?\s*)*[\w$.\[\]]+\.(scrollIntoView|scrollToElement)\([^;]*?\)\s*\)?;?\s*$",
                    lines[ln - 1]):
            lines[ln - 1] = DELETE
            deleted = True
    return "Se eliminó el scroll antes del click" if deleted else None


@code_fixer("PAG-006")
def _unused(lines, f, _):
    return _delete_entry(lines, f)


@code_fixer("PAG-012")
def _spherica_dup(lines, f, _):
    return _delete_entry(lines, f)


@feature_fixer("GHK-013")
def _closest_step(lines, f, _):
    if not f.suggested_code or not f.line or f.line - 1 >= len(lines):
        return None
    raw = lines[f.line - 1]
    indent = raw[: len(raw) - len(raw.lstrip())]
    keyword = raw.strip().split(" ", 1)[0]
    new_text = f.suggested_code.split(" ", 1)[1]
    lines[f.line - 1] = f"{indent}{keyword} {new_text}"
    return f"Step sin definición → «{new_text}»"


def _block_lines(lines: list[str], line: int | None) -> list[int]:
    """Índices (0-based) de las líneas de tags contiguas a `line`."""
    if not line or line - 1 >= len(lines):
        return []
    out, i = [], line - 1
    while i >= 0 and lines[i].strip().startswith("@"):
        out.append(i)
        i -= 1
    i = line
    while i < len(lines) and lines[i].strip().startswith("@"):
        out.append(i)
        i += 1
    return sorted(out)


def _edit_block(lines: list[str], line: int | None, fn) -> bool:
    changed = False
    for i in _block_lines(lines, line):
        if _edit_tags(lines, i + 1, fn):
            changed = True
    return changed


@feature_fixer("TAG-001")
def _missing_id(lines, f, info):
    new_id = info.get("new_ids", {}).get(f.line)
    if not new_id:
        return None
    bad = f.evidence.strip() if f.evidence.strip().startswith("@") else None
    if bad and _edit_block(lines, f.line, lambda t: [new_id if x == bad else x for x in t]):
        return f"{bad} → {new_id}"
    ok = _edit_tags(lines, f.line, lambda t: t + [new_id] if t and t[0].startswith("@") else t)
    return f"Se agregó el identificador {new_id}" if ok else None


def _renumber(lines, f, info):
    """Renumera todos los identificadores del archivo: un prefijo, consecutivos y en orden de aparición."""
    if info.get("renumbered"):
        return None
    info["renumbered"] = True
    from app.framework.gherkin import ID_TAG_RE
    ids = [(i, tok) for i, l in enumerate(lines) if l.strip().startswith("@")
           for tok in l.split() if ID_TAG_RE.match(tok)]
    if not ids:
        return None
    parsed = [re.match(r"^@(.*?)-?(\d{3})$", tok) for _, tok in ids]
    base = Counter(re.sub(r"^(?:ANA_(?:EVENT_)?)", "", p.group(1)) for p in parsed if p).most_common(1)[0][0]
    counters: dict[str, int] = {}
    changed = 0
    for (i, tok), p in zip(ids, parsed):
        if not p:
            continue
        ana = re.match(r"^(ANA_(?:EVENT_)?)", p.group(1))
        prefix = (ana.group(1) if ana else "") + base
        counters[prefix] = counters.get(prefix, 0) + 1
        new = f"@{prefix}{counters[prefix]:03d}"
        if new != tok:
            lines[i] = re.sub(rf"(?<!\S){re.escape(tok)}(?!\S)", new, lines[i], count=1)
            changed += 1
    return f"Se renumeraron {changed} identificadores (prefijo @{base}, consecutivos)" if changed else None


feature_fixer("TAG-003")(_renumber)
feature_fixer("TAG-004")(_renumber)


@feature_fixer("TAG-009")
def _one_backend(lines, f, _):
    ok = _edit_block(lines, f.line, lambda t: [x for x in t if x not in ("@artichoke", "@backend(artichoke)")])
    return "Se dejó un solo entorno: @backend(test)" if ok else None


@feature_fixer("TAG-012")
def _add_smoke(lines, f, info):
    target = info.get("smoke_candidate")
    if not target:
        return None
    ok = _edit_tags(lines, target, lambda t: t + ["@smokeTest"] if "@smokeTest" not in t else t)
    return "Se agregó @smokeTest al escenario que cubre más funcionalidad" if ok else None


@feature_fixer("TAG-013")
def _limit_smoke(lines, f, info):
    removed = 0
    for tag_line in info.get("smoke_remove", []):
        if _edit_block(lines, tag_line, lambda t: [x for x in t if x != "@smokeTest"]):
            removed += 1
    return f"Se quitó @smokeTest de {removed} escenario(s) (queda en los que cubren más funcionalidad)" if removed else None


def _camel(tag: str) -> str:
    parts = [p for p in re.split(r"[_\-\s]+", tag.lstrip("@")) if p]
    if not parts:
        return tag
    first = parts[0]
    lead = re.match(r"^[A-Z]+(?=[A-Z][a-z]|$)", first)      # sigla inicial: QRCard -> qrCard
    first = first[:lead.end()].lower() + first[lead.end():] if lead else first[0].lower() + first[1:]
    return "@" + first + "".join(p[0].upper() + p[1:] for p in parts[1:])


@feature_fixer("TAG-015")
def _camel_tag(lines, f, _):
    tag = f.evidence.strip()
    new = _camel(tag)
    if new == tag:
        return None
    ok = _edit_tags(lines, f.line, lambda t: [new if x == tag else x for x in t])
    return f"{tag} → {new}" if ok else None


@feature_fixer("TAG-017")
def _required_tags(lines, f, _):
    wanted = (f.suggested_code or "").split()
    if not wanted:
        return None
    present = {t for i in _block_lines(lines, f.line) for t in lines[i].split()}
    add = [t for t in wanted if t not in present]
    ok = bool(add) and _edit_tags(lines, f.line, lambda t: t + add)
    return "Se agregaron " + " ".join(add) if ok else None


def feature_info(text: str, findings: list[Finding] | None = None) -> dict:
    import math

    from app.framework.gherkin import parse_feature, scenario_id
    tags = re.findall(r"(?<!\S)@[A-Z]{2}(?!\S)", text)
    common = Counter(tags).most_common(1)
    info: dict = {"country": common[0][0] if common else "@MX"}
    doc = parse_feature(text)
    ids = [scenario_id(s.tags) for s in doc.scenarios]
    ids = [i.replace("-", "") for i in ids if i]
    parsed = [re.match(r"^@(.*?)(\d{3})$", i) for i in ids]
    parsed = [p for p in parsed if p]
    if parsed:
        prefix = Counter(p.group(1) for p in parsed).most_common(1)[0][0]
        nxt = max(int(p.group(2)) for p in parsed if p.group(1) == prefix) + 1
        missing = sorted(f.line for f in (findings or []) if f.rule_id == "TAG-001" and f.line)
        info["new_ids"] = {ln: f"@{prefix}{nxt + i:03d}" for i, ln in enumerate(missing)}
    # Escenario que cubre más funcionalidad = más steps (sin @manual)
    def weight(s):
        return len(s.steps)
    candidates = [s for s in doc.scenarios if not any(t.startswith("@manual") for t in s.tags) and s.tag_lines]
    if candidates:
        info["smoke_candidate"] = max(candidates, key=weight).tag_lines[-1]
    smoke = [s for s in doc.scenarios if "@smokeTest" in s.tags and s.tag_lines]
    keep = max(1, math.ceil(len(doc.scenarios) * 0.10))
    info["smoke_remove"] = [s.tag_lines[-1] for s in sorted(smoke, key=weight, reverse=True)[keep:]]
    return info


# ─── JavaScript ──────────────────────────────────────────────────────────────

ARROW_PAREN_RE = re.compile(r"(async\s*)?\(([^()]*)\)\s*=>\s*\{")
ARROW_SINGLE_RE = re.compile(r"(async\s+)?([A-Za-z_$][\w$]*)\s*=>\s*\{")


@code_fixer("STP-001")
def _arrow(lines, f, _):
    for i in range((f.line or 1) - 1, min(len(lines), (f.line or 1) + 2)):
        line = lines[i]
        m = ARROW_PAREN_RE.search(line)
        if m:
            lines[i] = line[:m.start()] + f"{'async ' if m.group(1) else ''}function({m.group(2)}) {{" + line[m.end():]
            return "Arrow function → function anónima"
        m = ARROW_SINGLE_RE.search(line)
        if m:
            lines[i] = line[:m.start()] + f"{'async ' if m.group(1) else ''}function({m.group(2)}) {{" + line[m.end():]
            return "Arrow function → function anónima"
    return None


@code_fixer("SCV-001")
def _lowercase(lines, f, _):
    i = (f.line or 1) - 1
    if i >= len(lines):
        return None
    new = re.sub(r"switch\s*\(\s*([\w$.]+)\s*\)", r"switch (\1.toLowerCase())", lines[i], count=1)
    if new == lines[i]:
        return None
    lines[i] = new
    # Los case deben quedar en minúsculas para que sigan coincidiendo.
    depth = 0
    for j in range(i, len(lines)):
        lines[j] = re.sub(r"(case\s*)(['\"`])([^'\"`]*)\2", lambda m: m.group(1) + m.group(2) + m.group(3).lower() + m.group(2), lines[j])
        depth += lines[j].count("{") - lines[j].count("}")
        if j > i and depth <= 0:
            break
    return "switch (item.toLowerCase()) y case en minúsculas"


@code_fixer("COD-007")
def _deprecated(lines, f, _):
    changed = False
    for ln in [f.line, *f.lines]:
        if not ln or ln - 1 >= len(lines):
            continue
        line = lines[ln - 1]
        line2 = re.sub(r"\.isVisible\s*\(", ".isDisplayed(", line)
        line2 = re.sub(r"\.waitForVisible\s*\(\s*\)", ".waitForDisplayed()", line2)
        line2 = re.sub(r"\.waitForVisible\s*\(\s*([^{)][^)]*)\)", r".waitForDisplayed({timeout: \1})", line2)
        line2 = re.sub(r"\.waitForVisible\s*\(\s*\{", ".waitForDisplayed({", line2)
        if line2 != line:
            lines[ln - 1], changed = line2, True
    return "waitForVisible/isVisible → waitForDisplayed/isDisplayed" if changed else None


@code_fixer("NAV-004")
def _sort_index(lines, f, _):
    idx = [i for i, l in enumerate(lines) if re.match(r"\s*export\s", l) and "from" in l and l.rstrip().endswith(";")]
    if len(idx) < 2:
        return None

    def key(l: str) -> str:
        m = re.search(r"as\s+(\w+)", l)
        return (m.group(1) if m else l).lower()

    ordered = sorted((lines[i] for i in idx), key=key)
    if ordered == [lines[i] for i in idx]:
        return None
    for i, l in zip(idx, ordered):
        lines[i] = l
    return "Exports ordenados alfabéticamente"


@code_fixer("COD-003")
def _max_size(lines, f, _):
    changed = 0
    for ln in [f.line, *f.lines]:
        if ln and ln - 1 < len(lines):
            size = "L" if "timeoutToDisappear" in lines[ln - 1] else "M"      # spinner: L permitido
            new = re.sub(r"config\.wait\.(XL|XXL|XXXL)\b", f"config.wait.{size}", lines[ln - 1])
            if new != lines[ln - 1]:
                lines[ln - 1], changed = new, changed + 1
    return f"Tallas XL/XXL/XXXL → M ({changed} esperas)" if changed else None


NEXT_ELEMENT_RE = re.compile(
    r"((?:this|[a-z][\w$]*)\.[\w$]+(?:\.[\w$]+)*)\.(?:waitFor\w*|click|setValue|addValue|elements|scrollIntoView|getText|isDisplayed)\s*\(")
PAUSE_LINE_RE = re.compile(r"^(\s*)(?:await\s+)?(?:Commands|browser)\.pause\s*\(.*\);?\s*(//.*)?$")


@code_fixer("COD-001")
def _static_wait(lines, f, _):
    done = 0
    for ln in sorted([f.line, *f.lines], key=lambda x: -(x or 0)):
        if not ln or ln - 1 >= len(lines):
            continue
        m = PAUSE_LINE_RE.match(lines[ln - 1])
        if not m:
            continue
        after = next((l for l in lines[ln:ln + 4] if l.strip()), "")
        if re.search(r"\.waitFor\w*\s*\(", after):
            lines[ln - 1] = DELETE            # la siguiente instrucción ya espera dinámicamente
            done += 1
            continue
        nxt = next((NEXT_ELEMENT_RE.search(l) for l in lines[ln:ln + 5] if NEXT_ELEMENT_RE.search(l)), None)
        if nxt is None:
            continue
        following = "\n".join(lines[ln:ln + 2])
        if f"{nxt.group(1)}.waitFor" in following:
            lines[ln - 1] = DELETE            # ya hay una espera dinámica sobre ese elemento
        else:
            lines[ln - 1] = f"{m.group(1)}await {nxt.group(1)}.waitForDisplayed({{timeout: config.wait.M}});"
        done += 1
    return f"Espera estática → espera dinámica ({done})" if done else None


@code_fixer("COD-009")
def _redundant_wait(lines, f, _):
    removed = 0
    for ln in sorted([f.line, *f.lines], reverse=True):
        if not ln or ln < 2 or ln - 1 >= len(lines):
            continue
        second = re.search(r"this\.([\w$]+)\.(waitFor\w+)\(", lines[ln - 1])
        if not second:
            continue
        for j in range(ln - 2, max(-1, ln - 4), -1):
            first = re.match(r"^\s*await\s+this\.([\w$]+)\.(waitFor\w+)\((?:[^;]*)\);\s*$", lines[j])
            redundant = first and (first.group(2) == second.group(2) or (
                second.group(2) == "waitForClickable" and first.group(2) in ("waitForDisplayed", "waitForExist")))
            if first and first.group(1) == second.group(1) and redundant:
                lines[j] = DELETE
                removed += 1
                break
    return f"Se quitaron {removed} espera(s) redundante(s)" if removed else None


@code_fixer("SCV-003")
def _scroll_in_validation(lines, f, _):
    """Dentro de _screenValidation, un scrollIntoView suelto antes de la espera se borra (el resto lo corrige la IA)."""
    start = next((i for i in range(len(lines)) if re.search(r"\b_screenValidation\s*\(", lines[i])), None)
    if start is None:
        return None
    depth, removed = 0, 0
    for i in range(start, len(lines)):
        depth += lines[i].count("{") - lines[i].count("}")
        if re.match(r"^\s*await\s+[^;]*\.scrollIntoView\s*\([^;]*\);\s*$", lines[i]):
            lines[i] = DELETE
            removed += 1
        elif re.match(r"^\s*\.scrollIntoView\(\s*\)\)\s*$", lines[i]):
            # await (await (await X.waitFor…())  .scrollIntoView())  .waitForText() → se quita un nivel
            opener = next((j for j in range(i - 1, max(start, i - 12), -1) if "(await (await " in lines[j]), None)
            if opener is not None:
                lines[opener] = lines[opener].replace("(await ", "", 1)
                lines[i] = DELETE
                removed += 1
        if i > start and depth <= 0:
            break
    return f"Se quitó scrollIntoView de _screenValidation ({removed})" if removed else None


@code_fixer("COD-012")
def _exist_first(lines, f, _):
    elem = f.evidence.split(".waitForDisplayed")[0].strip()
    i = (f.line or 1) - 1
    if not elem or i >= len(lines) or f"{elem}.waitForExist" not in lines[i]:
        return None
    for j in range(i - 1, max(-1, i - 40), -1):
        if f"{elem}.waitForDisplayed" in lines[j] and lines[j].rstrip().endswith(";") and lines[i].rstrip().endswith(";"):
            lines[i], lines[j] = lines[j], lines[i]
            return f"waitForExist antes de waitForDisplayed en {elem}"
    return None


@code_fixer("SCV-005")
def _unused_params(lines, f, _):
    names = [n.strip(" .") for n in f.message.split(":")[-1].split(",") if n.strip(" .")]
    i = (f.line or 1) - 1
    if not names or i >= len(lines):
        return None
    line = lines[i]
    m = re.search(r"\((.*)\)\s*\{", line)
    if not m:
        return None
    params = m.group(1)

    def keep(token: str) -> bool:
        name = token.strip().lstrip(".").split("=")[0].split(":")[-1].strip()
        return name not in names

    inner = re.match(r"^\s*\{(.*)\}(\s*=\s*\{\s*\})?\s*$", params)
    if inner:
        kept = [t.strip() for t in inner.group(1).split(",") if t.strip() and keep(t)]
        new_params = ("{" + ", ".join(kept) + "}" + (inner.group(2) or "")) if kept else ""
    else:
        new_params = ", ".join(t.strip() for t in params.split(",") if t.strip() and keep(t))
    if new_params == params:
        return None
    lines[i] = line[:m.start(1)] + new_params + line[m.end(1):]
    return "Se quitaron parámetros sin uso: " + ", ".join(names)


# ─── Correcciones sobre la estructura del archivo (no por línea) ─────────────

TextFixer = Callable[[str, Finding], tuple[str, str | None]]
TEXT_FIXERS: dict[str, TextFixer] = {}


def text_fixer(rule_id: str):
    def deco(fn: TextFixer) -> TextFixer:
        TEXT_FIXERS[rule_id] = fn
        return fn
    return deco


def _remove_entry(text: str, obj: str, key: str) -> str | None:
    """Quita `key` del objeto `obj:` (busca en todos los objetos con ese nombre, también anidados)."""
    from app.framework import jsparse
    search = 0
    while pos := jsparse.find_object(text, obj, search):
        open_idx, close = pos
        for frag, off in jsparse.split_top_level(text[open_idx + 1:close]):
            m = re.match(r"\s*['\"]?([\w$-]+)['\"]?\s*:", jsparse.strip_comments(frag))
            if m and m.group(1) == key:
                # Desde el inicio de la línea de la clave (conserva comentarios previos) hasta la coma.
                key_pos = open_idx + 1 + off + m.start(1)
                start = text.rfind("\n", 0, key_pos)
                start = key_pos if start < open_idx else start
                end = open_idx + 1 + off + len(frag)
                if end < len(text) and text[end] == ",":
                    end += 1
                return text[:start] + text[end:]
        search = open_idx + 1
    return None


@text_fixer("PAG-006")
def _unused_entry(text, f):
    key = f.evidence.split(":", 1)[0].strip()
    new = _remove_entry(text, "elements", key)
    return (new, f"Se eliminó el selector sin uso «{key}»") if new else (text, None)


@text_fixer("PAG-007")
def _inline_constant(text, f):
    m = re.match(r"\s*const\s+([A-Za-z_$][\w$]*)\s*=", f.evidence)
    if not m:
        return text, None
    name = m.group(1)
    decl = re.search(rf"^[ \t]*const\s+{re.escape(name)}\s*=\s*(['\"])((?:(?!\1)[^\\\n`$])*)\1\s*;?[ \t]*\n", text, re.M)
    if not decl:
        return text, None
    value = decl.group(2)
    rest = text[:decl.start()] + text[decl.end():]
    token = "${" + name + "}"
    if not rest.count(token) or len(re.findall(rf"(?<![\w$]){re.escape(name)}(?![\w$])", rest)) != rest.count(token):
        return text, None   # se usa fuera de selectores: lo resuelve la IA

    def inline(tm: re.Match) -> str:
        body = tm.group(1).replace(token, value)
        return f"'{body}'" if "${" not in body and "'" not in body else f"`{body}`"

    rest = re.sub(r"`([^`]*)`", lambda tm: inline(tm) if token in tm.group(1) else tm.group(0), rest)
    return rest, f"Se integró la constante «{name}» en los selectores de elements"


@text_fixer("PAG-012")
def _spherica_entry(text, f):
    key = f.evidence.split(":", 1)[0].strip()
    new = _remove_entry(text, "elementsSpherica", key)
    return (new, f"Se quitó «{key}» de elementsSpherica (mismo selector que en elements)") if new else (text, None)


FULL_COMPONENT_RE = re.compile(r"([\w$]+)(\s*:\s*)\{\s*component\s*:\s*\{")


@text_fixer("CMP-004")
def _full_form(text, f):
    from app.framework import jsparse
    count, pos = 0, 0
    while m := FULL_COMPONENT_RE.search(text, pos):
        outer_open = text.index("{", m.end(2) - 1)
        outer_close = jsparse.match_brace(text, outer_open)
        inner_open = m.end() - 1
        inner_close = jsparse.match_brace(text, inner_open)
        rest = text[inner_close + 1:outer_close].strip().strip(",").strip()
        entries = {}
        for frag, _ in jsparse.split_top_level(text[inner_open + 1:inner_close]):
            em = re.match(r"\s*([\w$]+)\s*:\s*([\s\S]*)$", frag)
            if em:
                entries[em.group(1)] = em.group(2).strip()
        cls = entries.get("ComponentClass")
        if rest or not cls or set(entries) - {"ComponentClass", "args"}:
            pos = m.end()
            continue
        if entries.get("args"):
            line_start = text.rfind("\n", 0, m.start()) + 1
            indent = text[line_start:m.start()]
            inner = [ln.strip() for ln in entries["args"].strip()[1:-1].split("\n") if ln.strip()]
            body = "\n".join(f"{indent}    {ln}" for ln in inner)
            replacement = f"[{cls}, {{\n{body}\n{indent}}}]"
        else:
            replacement = cls
        text = text[:m.end(2)] + replacement + text[outer_close + 1:]
        pos = m.start() + len(m.group(1)) + len(m.group(2)) + len(replacement)
        count += 1
    text, n = re.subn(r"(\b[\w$]+\s*:\s*)\[\s*([A-Z][\w$]*)\s*\]", r"\1\2", text)
    count += n
    return text, (f"Forma resumida en {count} componente(s)" if count else None)


ROOT_TEMPLATE_RE = re.compile(
    r"root\s*:\s*(?:`\$\{[\w$]+\._baseRoot\}([^`\s$][^`$]*)`"
    r"|\{\s*web\s*:\s*`\$\{[\w$]+\._baseRoot\}([^`\s$][^`$]*)`\s*,\s*isWithoutRoot\s*:\s*true\s*,?\s*\})")


@text_fixer("CMP-003")
def _root_to_modifiers(text, f):
    count = 0

    def sub(m: re.Match) -> str:
        nonlocal count
        suffix = m.group(1) or m.group(2)
        count += 1
        quote = "'" if "'" not in suffix else "`"
        return f"modifiers: {quote}{suffix}{quote}"

    new = ROOT_TEMPLATE_RE.sub(sub, text)
    return new, (f"root → modifiers en {count} componente(s)" if count else None)


@code_fixer("COD-004")
def _scroll_with_clickable(lines, f, _):
    """En el método, el scrollIntoView suelto sobre un elemento que luego espera waitForClickable sobra."""
    elems = [e.strip() for e in f.evidence.split(" sobre ", 1)[-1].split(",")] if " sobre " in f.evidence else []
    if not elems or not f.line:
        return None
    depth, removed, started = 0, 0, False
    for i in range(f.line - 1, len(lines)):
        for e in elems:
            if re.match(rf"^\s*(?:await\s*\(?\s*)*{re.escape(e)}\.scrollIntoView\([^;]*?\)\s*\)?;?\s*$", lines[i]):
                lines[i] = DELETE
                removed += 1
                break
        if lines[i] != DELETE:
            depth += lines[i].count("{") - lines[i].count("}")
            started = started or "{" in lines[i]
        if started and depth <= 0:
            break
    return f"Se quitó el scrollIntoView (waitForClickable ya lo hace) ({removed})" if removed else None


@code_fixer("CMP-003")
def _root_literal(lines, f, _):
    if not f.suggested_code or not f.line:
        return None
    for i in range(f.line - 1, min(len(lines), f.line + 3)):
        new = re.sub(r"\broot\s*:\s*(['\"])[^'\"`$]+\1", lambda _m: f.suggested_code, lines[i], count=1)
        if new != lines[i]:
            lines[i] = new
            return f"root → {f.suggested_code}"
    return None


@code_fixer("PAG-004")
def _child_combinator(lines, f, _):
    changed = False
    for ln in [f.line, *f.lines]:
        if not ln or ln - 1 >= len(lines):
            continue
        line = lines[ln - 1]

        def fix_literal(m: re.Match) -> str:
            body = m.group(2)
            parts = re.split(r"(\[[^\]]*\])", body)     # no tocar los atributos [a>b]
            body = "".join(p if p.startswith("[") else re.sub(r"\s*>\s*", " ", p) for p in parts)
            return m.group(1) + body + m.group(1)

        new = re.sub(r"(['\"`])((?:(?!\1).)*?>(?:(?!\1).)*)\1", fix_literal, line)
        if new != line:
            lines[ln - 1], changed = new, True
    return "Selector sin «>» (descendiente)" if changed else None


@text_fixer("PAG-001")
def _page_decorator(text, f):
    m = re.search(r"^([ \t]*)(export\s+default\s+)?class\s+\w+", text, re.M)
    if not m or re.search(r"@page\s*\(", text):
        return text, None
    text = text[:m.start()] + f"{m.group(1)}@page()\n" + text[m.start():]
    imp = re.search(r"import\s*\{([^}]*)\}\s*from\s*['\"]@csqe/radish['\"]\s*;?", text)
    if imp:
        if not re.search(r"\bpage\b", imp.group(1)):
            names = imp.group(1).strip().rstrip(",")
            text = text[:imp.start(1)] + f"{names}, page" + text[imp.end(1):]
    else:
        last = list(re.finditer(r"^import .*;?$", text, re.M))
        pos = last[-1].end() if last else 0
        text = text[:pos] + "\nimport {page} from '@csqe/radish';" + text[pos:]
    return text, "Se agregó el decorator @page()"


@text_fixer("CMP-001")
def _component_base(text, f):
    import posixpath
    m = re.search(r"\bclass\s+(\w+)\s*\{", text)
    if not m:
        return text, None
    text = text[:m.start()] + f"class {m.group(1)} extends AbstractGlomoComponent {{" + text[m.end():]
    if "AbstractGlomoComponent" not in text[:m.start()]:
        rel = posixpath.relpath("lib/features/components/abstract-glomo-component", posixpath.dirname(f.file))
        rel = rel if rel.startswith(".") else "./" + rel
        last = list(re.finditer(r"^import .*;?$", text, re.M))
        pos = last[-1].end() if last else 0
        text = text[:pos] + ("\n" if pos else "") + f"import AbstractGlomoComponent from '{rel}';" + ("" if pos else "\n") + text[pos:]
    return text, "La clase ahora extiende AbstractGlomoComponent"


def apply_fixers(text: str, findings: list[Finding], is_feature: bool) -> tuple[str, list[str], list[str]]:
    """Aplica los fixers de los hallazgos. Devuelve (texto, ids corregidos, descripciones)."""
    fixers = FEATURE_FIXERS if is_feature else CODE_FIXERS
    lines = text.split("\n")
    info = feature_info(text, findings) if is_feature else {}
    done, changes = [], []
    # 1) Por línea, de abajo hacia arriba para que las líneas no se desplacen.
    for f in sorted(findings, key=lambda x: -(x.line or 0)):
        fixer = fixers.get(f.rule_id)
        if not fixer:
            continue
        desc = fixer(lines, f, info)
        if desc:
            done.append(f.id)
            changes.append(f"{f.rule_id} (línea {f.line}): {desc}")
    changes.reverse()
    text = "\n".join(l for l in lines if l != DELETE)
    # 2) Sobre la estructura del archivo (entradas de varias líneas, formas de componentes…).
    if not is_feature:
        for f in findings:
            fixer = TEXT_FIXERS.get(f.rule_id)
            if not fixer:
                continue
            text, desc = fixer(text, f)
            if desc:
                if f.id not in done:
                    done.append(f.id)
                changes.append(f"{f.rule_id} (línea {f.line}): {desc}")
    return text, done, changes

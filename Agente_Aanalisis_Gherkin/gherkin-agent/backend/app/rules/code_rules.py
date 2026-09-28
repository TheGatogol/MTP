"""Checks determinísticos sobre JavaScript: step definitions, pages, components y navigations."""
import posixpath
import re

from app.framework import jsparse
from app.rules.engine import RuleContext, check
from app.rules.lang import SPANISH_ONLY, UI_WORDS_RE, is_spanish, split_identifier, unquoted
from app.utils.text import line_of

PAUSE_RE = re.compile(r"(Commands|browser)\.pause\s*\(")
HARD_TIMEOUT_RE = re.compile(r"(timeout\s*:\s*\d{3,}|waitFor\w*\(\s*\d{3,}|pause\(\s*\d{3,})")
BIG_WAIT_RE = re.compile(r"config\.wait\.(XL|XXL|XXXL)\b")
DEPRECATED_RE = re.compile(r"\.(waitForVisible|isVisible)\s*\(")
ELEMENT_ACTION = r"(click|press|tap|setValue|addValue|insert|clearValue|scrollIntoView|moveTo|doubleClick)"
DIRECT_ELEMENT_RE = re.compile(rf"\b([A-Za-z_$][\w$]*)\.([A-Za-z_$][\w$]*)\.({ELEMENT_ACTION}|waitFor\w+|isDisplayed|getText)\s*\(")
ACTION_IN_VALIDATION_RE = re.compile(rf"\.{ELEMENT_ACTION}\s*\(")
NOT_PAGE_ROOTS = {"navigation", "config", "Commands", "browser", "driver", "console", "Object", "Math", "JSON",
                  "expect", "assert", "this", "args", "table", "Promise", "arguments"}
COMMENT_RE = re.compile(r"//[^\n]*|/\*[\s\S]*?\*/")
ERROR_MSG_RE = re.compile(r"throw\s+new\s+Error\s*\(\s*(['\"`])((?:\\.|(?!\1).)*)\1")
UI_METHOD_RE = re.compile(r"^(click|press|tap)(?=[A-Z_]|$)|(Click|Press|Tap)[A-Z]|Button$|Btn$|Checkbox")


def _line(text: str, idx: int) -> int:
    return line_of(text, idx)


def _generic(ctx: RuleContext, path: str, text: str, offset: int = 0, base_line: int = 1) -> None:
    """Checks comunes a cualquier bloque de JS (text puede ser un fragmento con su línea base)."""
    def ln(i: int) -> int:
        return base_line + text.count("\n", 0, i)

    for m in PAUSE_RE.finditer(text):
        ctx.add("COD-001", path, ln(m.start()), text[m.start():text.find("\n", m.start())].strip())
    for m in HARD_TIMEOUT_RE.finditer(text):
        ctx.add("COD-002", path, ln(m.start()), m.group(0))
    for m in BIG_WAIT_RE.finditer(text):
        ctx.add("COD-003", path, ln(m.start()), m.group(0))
    for m in DEPRECATED_RE.finditer(text):
        ctx.add("COD-007", path, ln(m.start()), m.group(0), f"{m.group(1)} está deprecada.")
    for m in ERROR_MSG_RE.finditer(text):
        msg = m.group(2)
        if len(msg.split()) < 3 or is_spanish(msg):
            ctx.add("COD-006", path, ln(m.start()), m.group(0))
    for m in COMMENT_RE.finditer(text):
        if is_spanish(unquoted(m.group(0))):
            ctx.add("COD-005", path, ln(m.start()), m.group(0).strip()[:120], "Comentario en español.")
    for m in re.finditer(r"\b(?:const|let|var|async|function)\s+([A-Za-z_$][\w$]*)", text):
        if any(w in SPANISH_ONLY and len(w) >= 4 for w in split_identifier(m.group(1))):
            ctx.add("COD-005", path, ln(m.start()), m.group(0), f"Identificador en español: {m.group(1)}.")
    # COD-009 esperas repetidas sobre el mismo elemento en líneas seguidas
    waits = [(ln(m.start()), m.group(1), m.group(2), m.start(), m.end())
             for m in re.finditer(r"this\.([\w$]+)\.(waitFor\w+)\(", text)]
    for (l1, e1, w1, _, end1), (l2, e2, w2, start2, _) in zip(waits, waits[1:]):
        if not ((w1 == w2) or (w2 == "waitForClickable" and w1 in ("waitForDisplayed", "waitForExist"))):
            continue   # esperan estados distintos (texto, habilitado, animación…): no es redundante
        if re.search(r"\bif\s*\(|\belse\b|\?|\bcase\b|\bbreak\b|\breturn\b", text[end1:start2]):
            continue   # cada espera está en una rama distinta
        if e1 == e2 and l2 - l1 <= 2:
            ctx.add("COD-009", path, l2, f"this.{e2}.waitFor…", f"Esperas múltiples seguidas sobre {e2}.")


# ─── Step definitions (solo las usadas por el feature) ───────────────────────


@check("step")
def step_definitions(ctx: RuleContext, path: str) -> None:
    for us in ctx.used_steps(path):
        sd = us.sd
        head = us.header.strip().split("\n")[0][:160]
        if "=>" in us.header:
            ctx.add("STP-001", path, us.line, head)
        if "switch" not in us.body:
            goes = re.findall(r"navigation((?:\.[\w$]+)+)\.go\s*\(", us.body)
            if len(goes) > 1:
                ctx.add("STP-002", path, us.line, head, "El step navega " + str(len(goes)) + " veces: "
                        + ", ".join(g.lstrip('.') for g in goes))
        for m in DIRECT_ELEMENT_RE.finditer(us.body):
            root = m.group(1)
            if root in NOT_PAGE_ROOTS or root[0].isupper():
                continue
            ctx.add("STP-003", path, us.body_line + us.body.count("\n", 0, m.start()), m.group(0))
            break
        if re.search(r"\bbrowser\.\$|\$\(\s*['\"`]", us.body):
            ctx.add("STP-003", path, us.line, head, "El step usa selectores directamente ($).")
        code_lines = [l for l in us.body.split("\n") if l.strip() and not l.strip().startswith("//")
                      and not re.match(r"^(case\b.*:|default\s*:|break;|switch\s*\(.*\)\s*\{|[{}]\)?;?)$", l.strip())]
        if len(code_lines) > 15:
            ctx.add("STP-004", path, us.line, head, f"El step tiene {len(code_lines)} líneas de código.")
        letters = re.sub(r"[^A-Za-z]", "", sd.pattern)
        if len(letters) > 3 and letters == letters.upper():
            ctx.add("STP-005", path, us.line, sd.pattern)
        if UI_WORDS_RE.search(sd.pattern):
            ctx.add("STP-008", path, us.line, sd.pattern)
        norm = _norm_pattern(sd.pattern)
        dup = next((cs.step for cs in ctx.ix.steps if cs.step.id != sd.id and _norm_pattern(cs.step.pattern) == norm), None)
        if dup:
            ctx.add("STP-006", path, us.line, sd.pattern, f"Patrón duplicado en {dup.file}:{dup.line}.")
        _generic(ctx, path, us.body, base_line=us.body_line)


def _norm_pattern(p: str) -> str:
    return re.sub(r"\s+", " ", p.strip("^$").lower())


# ─── Pages y componentes ─────────────────────────────────────────────────────


def _screen_validation(ctx: RuleContext, path: str, text: str, methods: list[jsparse.Method]) -> None:
    sv = next((m for m in methods if m.name == "_screenValidation"), None)
    if not sv:
        return
    sw = re.search(r"switch\s*\(([^)]*)\)", sv.body)
    if sw and "toLowerCase" not in sw.group(1):
        ctx.add("SCV-001", path, sv.line + sv.body.count("\n", 0, sw.start()), sw.group(0))
    if sw and "ScreenValidationKeyNotFound" not in sv.body:
        ctx.add("SCV-002", path, sv.line, "_screenValidation", "El default no lanza ScreenValidationKeyNotFound.")
    for m in ACTION_IN_VALIDATION_RE.finditer(sv.body):
        ctx.add("SCV-003", path, sv.line + sv.body.count("\n", 0, m.start()), m.group(0).strip("."))
    for cm in re.finditer(r"case\s*['\"`]([^'\"`]+)['\"`]\s*:", sv.body):
        nxt = re.compile(r"\bcase\s*['\"`]|\bdefault\s*:").search(sv.body, cm.end())
        block = sv.body[cm.end(): nxt.start() if nxt else len(sv.body)]
        elems = set(re.findall(r"this\.([\w$]+)\.waitFor", block))
        conditional = re.search(r"\bif\s*\(|\?|\belse\b|\bswitch\s*\(", block)
        if len(elems) > 1 and not conditional:
            ctx.add("SCV-004", path, sv.line + sv.body.count("\n", 0, cm.start()), f"case '{cm.group(1)}'",
                    f"El case valida {len(elems)} elementos: " + ", ".join(sorted(elems)))


ORDINAL_NAME_RE = re.compile(r"first|second|third|fourth|fifth|last|\d", re.I)
POSITION_RE = re.compile(r"([^\s>~+]+?):(?:nth-(?:child|of-type)\((\d+)\)|first-child|last-child|nth-last-(?:child|of-type)\(\d+\))")
LIST_ITEM_RE = re.compile(r"^(li|tr|td)\b|item|slide|swipe|row", re.I)


def _intentional_position(name: str, sel: str, text: str) -> bool:
    """La posición es la intención del elemento (no un atajo): «first…», series 1/2/3 o filas de una lista."""
    if re.search(r":contains\(|text\(\)", sel):
        return False          # por texto: nunca es estable
    if ORDINAL_NAME_RE.search(name):
        return True
    for m in POSITION_RE.finditer(sel):
        base, index = m.group(1), m.group(2)
        row = re.split(r"\s+", sel[:m.start()].strip())[-1:]      # el ancestro inmediato (p. ej. li.__alert__)
        if LIST_ITEM_RE.search(base) or (row and row[0] and LIST_ITEM_RE.search(row[0])):
            return True
        if index and re.search(rf"{re.escape(base)}:nth-(?:child|of-type)\((?!{index}\))\d+\)", text):
            return True       # el archivo recorre varias posiciones del mismo elemento
    return False


def _selectors(ctx: RuleContext, path: str, text: str) -> tuple[list[jsparse.ObjEntry], tuple[int, int] | None]:
    found = jsparse.object_entries(text, "elements")
    if not found:
        return [], None
    entries, open_idx, close = found
    spherica = jsparse.object_entries(text, "elementsSpherica")
    starts = [0] + [i + 1 for i, ch in enumerate(text) if ch == "\n"]
    for e in entries + (spherica[0] if spherica else []):
        pos = starts[e.line - 1] if 0 < e.line <= len(starts) else 0
        for sel in jsparse.string_literals(e.value):
            if sel.startswith(("~", "/", "(/", "android=", "-ios", "id=")):
                continue  # selectores nativos (accessibility id / xpath / uiautomator)
            at = text.find(sel, pos)
            line = line_of(text, at) if at != -1 else e.line     # línea real (también en objetos anidados)
            key = re.search(r"([\w$]+)\s*:\s*[^\n]*$", text[starts[line - 1]:at]) if at != -1 else None
            name = key.group(1) if key else e.key
            plain = re.sub(r"\[[^\]]*\]", "", sel)
            if ">" in plain or "~" in plain:
                ctx.add("PAG-004", path, line, f"{name}: '{sel}'")
            if re.search(r":nth-(child|of-type|last-child|last-of-type)|:first-child|:last-child|:contains\(|text\(\)", sel) \
                    and not _intentional_position(name, sel, text):
                ctx.add("PAG-005", path, line, f"{name}: '{sel}'")
        if e.value.strip().rstrip(",") in ("undefined", "null"):
            ctx.add("PAG-011", path, e.line, f"{e.key}: {e.value}")
    return entries, (open_idx, close)


def _unused_selectors(ctx: RuleContext, path: str, text: str, entries: list[jsparse.ObjEntry],
                      block: tuple[int, int]) -> None:
    outside = text[:block[0]] + text[block[1]:]
    required = ""
    if req := re.search(r"requiredElements\s*:\s*\[([^\]]*)\]", text):
        required = req.group(1)
    others = [ctx.text(p) for p in sorted(ctx.ix.importers.get(path, set()))]
    # Accesos dinámicos (this[`${x}Futura`], page[name + 'Button']…): sus partes fijas protegen a los elementos
    dynamic = [p for m in re.finditer(r"\[\s*`([^`]*\$\{[^`]*)`\s*\]", "\n".join([outside, *others]))
               for p in re.split(r"\$\{[^}]*\}", m.group(1)) if len(p) >= 3]
    dynamic += [p for m in re.finditer(r"\[[^\]\n]*['\"]([\w$]{3,})['\"]\s*\+|\[[^\]\n]*\+\s*['\"]([\w$]{3,})['\"]",
                                       "\n".join([outside, *others])) for p in m.groups() if p]
    unused = []
    for e in entries:
        if any(p in e.key for p in dynamic):
            continue
        k = re.escape(e.key)
        if e.value.strip().rstrip(",") in ("''", '""', "``"):
            continue   # selector vacío: representa la raíz
        if re.search(rf"\.{k}\b|['\"`]{k}['\"`]|\[\s*{k}\s*\]", outside) or re.search(rf"['\"`]{k}['\"`]", required):
            continue
        if any(re.search(rf"\.{k}\b", o) for o in others):
            continue
        unused.append(e)
    for e in unused:
        ctx.add("PAG-006", path, e.line, f"{e.key}: {e.value[:80]}", f"El selector «{e.key}» no se usa.")


ROOT_ARG_RE = re.compile(r"(?:\[\s*[A-Z][\w$]*\s*,\s*\{|args\s*:\s*\{)[^}]*?\broot\s*:")
ARRAY_NO_ARGS_RE = re.compile(r"\b[\w$]+\s*:\s*\[\s*[A-Z][\w$]*\s*\]")
FULL_FORM_RE = re.compile(r"\bComponentClass\s*:")


BASE_ROOT_RE = re.compile(r"_baseRoot\s*\(\)\s*\{\s*return\s*(?:\{\s*web\s*:\s*)?(['\"])([^'\"`]+)\1")
ROOT_LITERAL_RE = re.compile(r"\broot\s*:\s*(['\"])([^'\"`$]+)\1")


def _root_replacement(ctx: RuleContext, path: str, code: str, m: re.Match) -> str | None:
    """root: '<base>#id' → modifiers: '#id'; root: '<padre> <base>' → prefix: '<padre>'. Solo con el _baseRoot real."""
    cls = re.search(r"\[\s*([A-Z][\w$]*)\s*,", m.group(0))
    end = code.find("}", m.end())
    lit = ROOT_LITERAL_RE.search(code, m.start(), end if end != -1 else len(code))
    if not cls or not lit:
        return None
    target = next((ctx.ix.resolve_module(path, imp.src) for imp in jsparse.parse_imports(code)
                   if imp.default == cls.group(1)), None)
    base = BASE_ROOT_RE.search(ctx.text(target)) if target else None
    if not base:
        return None
    root, base = lit.group(2).strip(), base.group(2).strip()
    head, sep, tail = root.rpartition(base)
    if not sep or (head and not head.endswith(" ")) or (tail and tail[0] not in "#.[:"):
        return None
    parts = []
    if head.strip():
        parts.append(f"prefix: '{head.strip()}'")
    if tail:
        parts.append(f"modifiers: '{tail}'")
    return ", ".join(parts) or None


def _component_usage(ctx: RuleContext, path: str, code: str, text: str) -> None:
    """CMP-003/004: cómo se instancian los componentes dentro de pages y componentes."""
    for m in ROOT_ARG_RE.finditer(code):
        f = ctx.add("CMP-003", path, _line(text, m.start()), m.group(0)[:120])
        if f is not None:
            f.suggested_code = _root_replacement(ctx, path, code, m)
    for m in ARRAY_NO_ARGS_RE.finditer(code):
        ctx.add("CMP-004", path, _line(text, m.start()), m.group(0), "Componente en array sin argumentos: basta con la clase.")
    for m in FULL_FORM_RE.finditer(code):
        ctx.add("CMP-004", path, _line(text, m.start()), text[m.start():text.find("\n", m.start())].strip(),
                "Forma completa {component: {ComponentClass}}: usa la forma resumida.")


def _component_class(ctx: RuleContext, path: str, code: str, cls_line: int) -> None:
    decl = re.search(r"\bclass\s+\w+(\s+extends\s+[\w$.]+)?", code)
    if decl and not decl.group(1):
        ctx.add("CMP-001", path, cls_line, decl.group(0))
    sup = re.search(r"super\s*\(", code)
    if sup and not re.match(r"super\s*\(\s*[\w$]+\s*\)", code[sup.start():]):
        ctor = re.search(r"\bconstructor\s*\(", code)
        head = code[ctor.start() if ctor and ctor.start() < sup.start() else sup.start(): sup.start() + 1500]
        missing = [k for k in ("elements", "requiredElements", "name") if not re.search(rf"\b{k}\s*:", head)]
        if missing and "arguments[0]" not in head:
            ctx.add("CMP-002", path, _line(code, sup.start()), "super({...})", "Falta definir: " + ", ".join(missing) + ".")


def _page_like(ctx: RuleContext, path: str, is_page: bool) -> None:
    text = ctx.text(path)
    code = jsparse.strip_comments(text)
    cls = re.search(r"\bclass\s+\w+", code)
    if is_page and re.search(r"\bclass\s+\w+\s+extends\s+\w*Component\b", code):
        is_page = False
    cls_line = _line(text, cls.start()) if cls else 1
    if is_page and cls and not re.search(r"@page\s*\(", code):
        ctx.add("PAG-001", path, cls_line, cls.group(0))
    if is_page and cls and "super(" in code and not re.search(r"\broot\s*:", code):
        ctx.add("PAG-002", path, cls_line, cls.group(0))
    if req := re.search(r"requiredElements\s*:\s*\[([^\]]*)\]", code):
        items = [i for i in re.findall(r"['\"`]([^'\"`]+)['\"`]", req.group(1))]
        if len(items) > 3:
            ctx.add("PAG-003", path, _line(text, req.start()), req.group(0)[:160],
                    f"La page tiene {len(items)} requiredElements.")
    entries, block = _selectors(ctx, path, code)
    if block:
        _unused_selectors(ctx, path, code, entries, block)
    if spherica := jsparse.object_entries(code, "elementsSpherica"):
        base = {e.key: e.value.rstrip(",").strip() for e in entries}
        for e in spherica[0]:
            if base.get(e.key) == e.value.rstrip(",").strip():
                ctx.add("PAG-012", path, e.line, f"{e.key}: {e.value[:80]}",
                        f"«{e.key}» tiene el mismo selector en elements y en elementsSpherica.")
    for m in re.finditer(r"^const\s+([A-Z_][A-Z0-9_]*|\w+)\s*=\s*(['\"`])([#.\[]|cells-|bbva-|glomo-)[^\n]*", code, re.M):
        if "getId" not in m.group(0) and not re.search(r"\[ERR|\b(the|is|not|does|expected|error|invalid)\b", m.group(0), re.I):
            ctx.add("PAG-007", path, _line(text, m.start()), m.group(0)[:140])
    if re.search(r"\bnavigation\.\w+", code) or re.search(r"from\s+['\"][./]*navigation", code):
        m = re.search(r"\bnavigation\.\w+|from\s+['\"][./]*navigation[^'\"]*['\"]", code)
        ctx.add("PAG-008", path, _line(text, m.start()) if m else 1, m.group(0) if m else "navigation")
    _component_usage(ctx, path, code, text)
    if not is_page and cls:
        _component_class(ctx, path, code, cls_line)
    methods = jsparse.extract_methods(code)
    _screen_validation(ctx, path, code, methods)
    for mt in methods:
        _unused_params(ctx, path, mt)
        method_checks(ctx, path, mt)
        if mt.name.startswith("_") or mt.name == "constructor":
            continue
        if UI_METHOD_RE.search(mt.name):
            ctx.add("COD-011", path, mt.line, f"{mt.name}({mt.params})")
        scrolled = set(re.findall(r"([\w$.]+)\.scrollIntoView\s*\(", mt.body))
        clickable = set(re.findall(r"([\w$.]+)\.waitForClickable\s*\(", mt.body))
        if scrolled & clickable:
            ctx.add("COD-004", path, mt.line, f"{mt.name}(): waitForClickable + scrollIntoView sobre "
                    + ", ".join(sorted(scrolled & clickable)))
    _generic(ctx, path, text)


def _param_names(params: str) -> list[str]:
    inner = params.strip()
    if inner.startswith("{"):
        inner = inner[1:inner.find("}")] if "}" in inner else inner[1:]
    names = []
    for part in jsparse.split_top_level(inner):
        token = part[0].split("=")[0].strip()
        if ":" in token:
            token = token.split(":", 1)[1].strip()
        token = token.lstrip(".")
        if re.fullmatch(r"[A-Za-z_$][\w$]*", token):
            names.append(token)
    return names


def _unused_params(ctx: RuleContext, path: str, mt: jsparse.Method) -> None:
    if not mt.params or "arguments" in mt.body or mt.name == "constructor":
        return
    body = jsparse.strip_comments(mt.body)
    unused = [n for n in _param_names(mt.params) if not n.startswith("_") and not re.search(rf"(?<![\w$.]){re.escape(n)}(?![\w$])", body)]
    if unused:
        ctx.add("SCV-005", path, mt.line, f"{mt.name}({mt.params[:80]})",
                f"{mt.name}() recibe parámetros que no usa: {', '.join(unused)}.")


SCROLL_RE = re.compile(r"((?:this\.)?[\w$]+(?:\.[\w$]+)*)\.(scrollIntoView|scrollToElement)\s*\(")
LOOP_RE = re.compile(r"\bfor\s*\(|\bwhile\s*\(|\.forEach\s*\(")
CASE_RE = re.compile(r"\bcase\s+[^:]+:|\bdefault\s*:")


def method_checks(ctx: RuleContext, path: str, mt: jsparse.Method) -> None:
    """Checks por método (comentarios de revisión de PR): orden de esperas, scroll y ciclos."""
    body = jsparse.strip_comments(mt.body)

    def ln(i: int) -> int:
        return mt.line + body.count("\n", 0, i)

    # COD-012: waitForExist antes de waitForDisplayed
    for elem in set(re.findall(r"(this\.[\w$.]+)\.waitForExist\s*\(", body)):
        exist = body.find(f"{elem}.waitForExist")
        displayed = body.find(f"{elem}.waitForDisplayed")
        if 0 <= displayed < exist:
            ctx.add("COD-012", path, ln(exist), f"{elem}.waitForDisplayed → {elem}.waitForExist")
    # COD-013 doble scroll y COD-015 scroll antes de click (cada case de un switch es una rama distinta)
    cuts = [0] + [m.start() for m in CASE_RE.finditer(body)] + [len(body)]
    for a, b in zip(cuts, cuts[1:]):
        _scroll_checks(ctx, path, mt, body, a, b, ln)
    # COD-014 la misma espera dentro y fuera de un ciclo
    for loop in LOOP_RE.finditer(body):
        brace = body.find("{", loop.end())
        if brace == -1:
            continue
        end = jsparse.match_brace(body, brace)
        inside = set(re.findall(r"(this\.[\w$.]+)\.waitFor\w+\s*\(", body[brace:end]))
        outside = set(re.findall(r"(this\.[\w$.]+)\.waitFor\w+\s*\(", body[:loop.start()] + body[end:]))
        if re.search(r"\belse\b", body):
            continue   # con if/else la espera de fuera suele ser de otra rama
        for elem in sorted(inside & outside):
            ctx.add("COD-014", path, ln(loop.start()), f"{elem}.waitFor… (dentro y fuera del ciclo)")


def _scroll_checks(ctx: RuleContext, path: str, mt: jsparse.Method, body: str, a: int, b: int, ln) -> None:
    segment = body[a:b]
    seen: dict[str, int] = {}
    for m in SCROLL_RE.finditer(segment):
        idx, elem = a + m.start(), m.group(1)
        if elem in seen and "else" not in segment[seen[elem] - a:idx - a]:
            ctx.add("COD-013", path, ln(idx), f"{elem}.scroll… (x2)", f"{elem} hace scroll más de una vez en {mt.name}().")
        seen.setdefault(elem, idx)
        if re.search(rf"{re.escape(elem)}\.click\s*\(", body[idx:b]):
            stmt = body[body.rfind("\n", 0, idx) + 1: body.find("\n", idx)].strip()
            ctx.add("COD-015", path, ln(idx), stmt, f"{elem} hace scroll y luego click en {mt.name}(): el click ya hace scroll.")


@check("shared")
def shared_file(ctx: RuleContext, path: str) -> None:
    """Archivo compartido (dashboard, sidebar…): solo se revisan los métodos que usa este feature."""
    wanted = ctx.relation.used_methods.get(path, set())
    if not wanted:
        return
    text = ctx.text(path)
    for mt in jsparse.extract_methods(jsparse.strip_comments(text)):
        if mt.name not in wanted:
            continue
        _generic(ctx, path, text[mt.body_start:mt.end], base_line=line_of(text, mt.body_start))
        method_checks(ctx, path, mt)
        if UI_METHOD_RE.search(mt.name) and not mt.name.startswith("_"):
            ctx.add("COD-011", path, mt.line, f"{mt.name}({mt.params})")


@check("page")
def pages(ctx: RuleContext, path: str) -> None:
    _page_like(ctx, path, is_page=True)


@check("component")
def components(ctx: RuleContext, path: str) -> None:
    _page_like(ctx, path, is_page=False)


# ─── Navigations ─────────────────────────────────────────────────────────────


@check("navigation")
def navigations(ctx: RuleContext, path: str) -> None:
    text = ctx.text(path)
    code = jsparse.strip_comments(text)
    page_imports = {}
    for imp in jsparse.parse_imports(code):
        target = ctx.ix.resolve_module(path, imp.src)
        if imp.default and target and "/pages/" in target:
            page_imports[imp.default] = target
    nav_methods = jsparse.extract_methods(code)
    for mt in nav_methods:
        method_checks(ctx, path, mt)
    go = next((m for m in nav_methods if m.name == "go_impl"), None)
    if go:
        if "switch" in go.body and "NotPathNavigationError" not in go.body:
            ctx.add("NAV-001", path, go.line, "go_impl()", "El default del switch no lanza NotPathNavigationError.")
        for cm in re.finditer(r"case\s+([\w$.]+)\s*:", go.body):
            nxt = re.compile(r"\bcase\s+[\w$.]+\s*:|\bdefault\s*:").search(go.body, cm.end())
            block = go.body[cm.end(): nxt.start() if nxt else len(go.body)]
            used = {r for r in re.findall(r"(?<![\w$.])([\w$]+)\.[\w$]+\s*\(", block) if r in page_imports}
            if len(used) > 1:
                ctx.add("NAV-002", path, go.line + go.body.count("\n", 0, cm.start()), f"case {cm.group(1)}",
                        "El case usa funciones de varias pantallas: " + ", ".join(sorted(used)))
            for m in DIRECT_ELEMENT_RE.finditer(block):
                if m.group(1) in page_imports:
                    ctx.add("NAV-003", path, go.line + go.body.count("\n", 0, cm.end() + m.start()), m.group(0))
    _generic(ctx, path, text)
    index = posixpath.join(posixpath.dirname(path), "index.js")
    if index != path and ctx.ix.exists(index):
        idx_text = ctx.text(index)
        names = re.findall(r"export\s*(?:\*\s+as\s+(\w+)|\{\s*default\s+as\s+(\w+)\s*\})", idx_text)
        flat = [a or b for a, b in names]
        already = any(f.rule_id == "NAV-004" and f.file == index for f in ctx.findings)
        if flat != sorted(flat, key=str.lower) and not already:
            ctx.add("NAV-004", index, 1, ", ".join(flat[:6]), "Los exports del índice no están en orden alfabético.")

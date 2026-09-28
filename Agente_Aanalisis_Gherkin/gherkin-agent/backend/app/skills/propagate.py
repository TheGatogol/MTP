"""Correcciones que afectan a otros archivos: si se renombra algo, todos los que lo usan se adaptan.

- Métodos (COD-011): se renombra la definición y todas sus llamadas en el framework.
- Steps (GHK-004, STP-005, STP-008): se cambia el patrón de la step definition y el texto de todos los
  .feature que lo usan, conservando los parámetros de cada uso.
"""
import re

from pydantic import BaseModel, Field

from app.domain.models import Finding
from app.framework import jsparse
from app.framework.gherkin import parse_feature
from app.framework.relate import relate
from app.framework.stepmatch import PARAMS, compile_step, expression_to_regex, matches
from app.framework.usage import get_usage
from app.skills.base import SkillContext

UI_WORD_RE = re.compile(r"\b(click|clicks|tap|taps|press|presses|button|btn|checkbox|swipe|scroll)\b", re.I)
REGEX_CHUNK_RE = re.compile(r"\"?\((?!\?)(?:[^()\\]|\\.)*\)\"?")
EXPR_CHUNK_RE = re.compile(r"\"?\{[^}]*\}\"?")

RENAME_METHOD_SYSTEM = (
    "Eres un ingeniero de automatización E2E. Renombras métodos de Page Objects para que describan la acción "
    "funcional (qué hace el usuario) y no la interfaz: sin click, tap, press, check, button, btn ni checkbox. "
    "Nombres en inglés y camelCase, breves y derivados de lo que hace el cuerpo. Ejemplo: clickContinueButton → "
    "confirmOperation."
)
RENAME_STEP_SYSTEM = (
    "Eres un ingeniero de automatización E2E (Cucumber). Reescribes el TEXTO de steps para que describan la acción "
    "funcional y no la interfaz (sin click, tap, press, button...), sin palabras de validación (see, view, watch) en "
    "steps de acción, en inglés y en minúsculas salvo nombres propios. "
    "Conserva EXACTAMENTE los marcadores {1}, {2}… (son los parámetros) en el mismo orden. Deriva el texto de lo que "
    "hace la step definition (p. ej. currentPage.showDeliveryAddress() → «the user shows the delivery address»). "
    "Empieza como el original (p. ej. «the user …»)."
)


class MethodRename(BaseModel):
    old: str
    new: str


class MethodRenames(BaseModel):
    renames: list[MethodRename] = Field(default_factory=list, max_length=10)


class StepRename(BaseModel):
    step_id: str
    template: str


class StepRenames(BaseModel):
    steps: list[StepRename] = Field(default_factory=list, max_length=10)


def draft(ctx: SkillContext, drafts: dict[str, dict], path: str) -> dict:
    if path not in drafts:
        original, newline = ctx.ix.read_with_newline(path)
        drafts[path] = {"original": original, "newline": newline, "text": original, "ids": [],
                        "changes": [], "warnings": [], "pending": [], "by": "reglas"}
    return drafts[path]


# ─── Métodos ─────────────────────────────────────────────────────────────────


def rename_methods(ctx: SkillContext, path: str, drafts: dict[str, dict], findings: list[Finding]) -> None:
    d = draft(ctx, drafts, path)
    methods = {m.name: m for m in jsparse.extract_methods(d["text"])}
    wanted = [f for f in findings if f.evidence.split("(")[0].strip() in methods]
    if not wanted:
        return
    listing = "\n\n".join(f"{f.evidence}\n{methods[f.evidence.split('(')[0].strip()].body[:400]}" for f in wanted)
    plan = ctx.provider.structured([
        {"role": "system", "content": RENAME_METHOD_SYSTEM},
        {"role": "user", "content": f"MÉTODOS (archivo {path}):\n{listing}\n\nDevuelve un nombre nuevo para cada uno."},
    ], MethodRenames, max_tokens=600)
    for r in plan.renames:
        old, new = r.old.strip(), r.new.strip()
        f = next((x for x in wanted if x.evidence.startswith(old + "(")), None)
        if (f is None or not re.fullmatch(r"[a-z][A-Za-z0-9]*", new) or UI_WORD_RE.search(re.sub(r"([A-Z])", r" \1", new))
                or new in methods or re.search(rf"\b{re.escape(new)}\b", d["text"])):
            continue
        definition = re.compile(rf"^\s+(?:async\s+)?{re.escape(old)}\s*\(", re.M)
        others_defining = [js for js in ctx.ix.js_files if js != path and definition.search(ctx.ix.read(js))]
        if others_defining:
            continue   # otro archivo define un método con el mismo nombre: no se puede saber a cuál llaman
        call = re.compile(rf"(?<=\.){re.escape(old)}(?=\s*\()")
        d["text"] = re.sub(rf"\b{re.escape(old)}\b(?=\s*\()", new, d["text"])
        updated = []
        for js in ctx.ix.js_files:
            if js == path:
                continue
            text = drafts[js]["text"] if js in drafts else ctx.ix.read(js)
            if not call.search(text):
                continue
            dd = draft(ctx, drafts, js)
            dd["text"] = call.sub(new, dd["text"])
            dd["changes"].append(f"Se actualizó la llamada {old}() → {new}()")
            updated.append(js.rsplit("/", 1)[-1])
        d["ids"].append(f.id)
        d["changes"].append(f"Se renombró el método {old}() → {new}()"
                            + (f" y sus llamadas en {', '.join(updated)}" if updated else ""))


# ─── Steps ───────────────────────────────────────────────────────────────────


def _chunks(pattern: str, kind: str) -> list[re.Match]:
    return list((REGEX_CHUNK_RE if kind == "regex" else EXPR_CHUNK_RE).finditer(pattern))


def _template(pattern: str, kind: str) -> str:
    body = pattern.strip("^$") if kind == "regex" else pattern
    out, last = [], 0
    for i, m in enumerate(_chunks(body, kind), 1):
        out.append(body[last:m.start()].replace("\\", ""))
        out.append(f"{{{i}}}")
        last = m.end()
    out.append(body[last:].replace("\\", ""))
    return "".join(out)


def _new_pattern(old: str, kind: str, template: str) -> str | None:
    body = old.strip("^$") if kind == "regex" else old
    chunks = [m.group(0) for m in _chunks(body, kind)]
    parts = re.split(r"\{(\d+)\}", template)
    if [int(x) for x in parts[1::2]] != list(range(1, len(chunks) + 1)):
        return None      # mismos parámetros y en el mismo orden (el step recibe los argumentos por posición)
    out = []
    for i, piece in enumerate(parts):
        if i % 2:
            out.append(chunks[int(piece) - 1])
        elif kind == "regex":
            out.append(re.escape(piece).replace("\\ ", " "))
        else:
            out.append(re.sub(r"([(){}/\\])", r"\\\1", piece))
    new_body = "".join(out)
    if kind == "regex":
        new_body = ("^" if old.startswith("^") else "") + new_body + ("$" if old.endswith("$") else "")
    return new_body


def _chunk_regex(pattern: str, kind: str) -> re.Pattern | None:
    """Regex del patrón viejo con cada parámetro capturado entero (con sus comillas)."""
    body = pattern.strip("^$") if kind == "regex" else pattern
    chunks = _chunks(body, kind)
    if kind == "expression":
        # Se sustituye cada parámetro por un marcador, se convierte la expresión (alternativas, opcionales)
        # y luego el marcador se cambia por el grupo con nombre.
        marked, last = [], 0
        for i, m in enumerate(chunks, 1):
            marked.append(body[last:m.start()] + f"zzchunk{i}zz")
            last = m.end()
        marked.append(body[last:])
        rx = expression_to_regex("".join(marked))
        for i, m in enumerate(chunks, 1):
            name = re.search(r"\{([^}]*)\}", m.group(0)).group(1)
            quote = '"' if m.group(0).startswith('"') else ""
            rx = rx.replace(f"zzchunk{i}zz", f"(?P<c{i}>{quote}{PARAMS.get(name, r'(.*)')}{quote})")
        try:
            return re.compile(rx)
        except re.error:
            return None
    out, last = [], 0
    for i, m in enumerate(chunks, 1):
        out.append(body[last:m.start()])
        out.append(f"(?P<c{i}>{m.group(0)})")
        last = m.end()
    out.append(body[last:])
    try:
        return re.compile("^" + "".join(out) + "$", re.I)
    except re.error:
        return None


def rename_steps(ctx: SkillContext, drafts: dict[str, dict], targets: dict[str, list[Finding]]) -> None:
    """targets: step_def_id -> hallazgos que se resuelven cambiando su texto."""
    real = [sid for sid in targets if sid in ctx.ix.step_by_id]
    if not real:
        return
    short = {f"S{i}": sid for i, sid in enumerate(real, 1)}      # ids cortos: el modelo los copia sin errores
    defs = {k: ctx.ix.step_by_id[sid] for k, sid in short.items()}

    def ask(keys: list[str]) -> list[StepRename]:
        listing = "\n\n".join(f"[{k}] {_template(defs[k].pattern, defs[k].kind)}\n{defs[k].body.strip()[:300]}"
                              for k in keys)
        reasons = "\n".join(f"[{k}] " + "; ".join(sorted({f.title for f in targets[short[k]]})) for k in keys)
        return ctx.provider.structured([
            {"role": "system", "content": RENAME_STEP_SYSTEM},
            {"role": "user", "content": f"STEPS:\n{listing}\n\nPROBLEMAS A RESOLVER:\n{reasons}\n\n"
                                        f"Devuelve un elemento por cada step_id ({', '.join(keys)}) con su template nuevo."},
        ], StepRenames, max_tokens=800).steps

    items = ask(list(defs))
    answered = {i.step_id.strip().strip("[]") for i in items}
    for k in [k for k in defs if k not in answered]:        # si omitió alguno, se pregunta uno por uno
        items += ask([k])
    usage = get_usage()
    usage.build(ctx.ix)
    for item in items:
        sd = defs.get(item.step_id.strip().strip("[]"))
        if sd is None or not item.template.strip():
            continue
        template = item.template.strip().strip("^$")
        new_pat = _new_pattern(sd.pattern, sd.kind, template)
        chunk_rx = _chunk_regex(sd.pattern, sd.kind)
        if not new_pat or chunk_rx is None or UI_WORD_RE.search(re.sub(r"\{\d+\}", "", template)):
            continue
        new_rx = compile_step(new_pat, sd.kind)
        if new_rx is None:
            continue
        # Actualiza los .feature que usan el step (conservando los valores de cada uso)
        feature_updates: dict[str, str] = {}
        ok = True
        for feature in usage.def_features.get(sd.id, set()):
            text = drafts[feature]["text"] if feature in drafts else ctx.ix.read(feature)
            lines = text.split("\n")
            doc = parse_feature(text, feature)
            steps = [st for sc in doc.scenarios for st in sc.steps] + (doc.background.steps if doc.background else [])
            for st in steps:
                m = chunk_rx.match(st.text)
                if not m:
                    continue
                new_text = re.sub(r"\{(\d+)\}", lambda g: m.group(f"c{g.group(1)}"), template)
                if not matches(new_rx, sd.kind, new_text) and "<" not in new_text:
                    ok = False
                    break
                raw = lines[st.line - 1]
                lines[st.line - 1] = raw.replace(st.text, new_text, 1)
            if not ok:
                break
            feature_updates[feature] = "\n".join(lines)
        if not ok:
            continue
        # Actualiza la step definition
        d = draft(ctx, drafts, sd.file)
        old_literal = ("/" + sd.pattern + "/") if sd.kind == "regex" else sd.pattern
        if old_literal not in d["text"]:
            continue
        new_literal = ("/" + new_pat + "/") if sd.kind == "regex" else new_pat
        d["text"] = d["text"].replace(old_literal, new_literal, 1)
        old_readable = _template(sd.pattern, sd.kind)
        d["changes"].append(f"Se cambió el step «{old_readable}» → «{template}»"
                            + (f" y su uso en {len(feature_updates)} feature(s)" if feature_updates else ""))
        for feature, new_text in feature_updates.items():
            fd = draft(ctx, drafts, feature)
            if fd["text"] != new_text:
                fd["text"] = new_text
                fd["changes"].append(f"Se actualizó el step «{old_readable}» → «{template}»")
        for f in targets[sd.id]:
            owner = draft(ctx, drafts, f.file)
            if f.id not in owner["ids"]:
                owner["ids"].append(f.id)


# ─── Elementos de tablas de validación (.feature ↔ _screenValidation) ────────


def _validation_of(ctx: SkillContext, f: Finding):
    return next(((v, item) for v in ctx.relation.validations for item, line in v.items if line == f.line), (None, None))


def _screen_method(text: str):
    return next((m for m in jsparse.extract_methods(text) if m.name == "_screenValidation"), None)


def rename_items(ctx: SkillContext, drafts: dict[str, dict], findings: list[Finding]) -> None:
    """GHK-010: el item se escribe con espacios. La page conserva su case y suma el nuevo (nada se rompe)."""
    for f in findings:
        v, item = _validation_of(ctx, f)
        if not v or not v.page or not item:
            continue
        new_item = re.sub(r"\s+", " ", re.sub(r"[_\-]+", " ", item)).strip()
        page = draft(ctx, drafts, v.page)
        label = re.compile(rf"^([ \t]*)case\s*(['\"`]){re.escape(item.lower())}\2\s*:[ \t]*$", re.M | re.I)
        m = label.search(page["text"])
        if not m:
            continue
        if not re.search(rf"case\s*(['\"`]){re.escape(new_item.lower())}\1\s*:", page["text"], re.I):
            insert = f"\n{m.group(1)}case {m.group(2)}{new_item.lower()}{m.group(2)}:"
            page["text"] = page["text"][:m.end()] + insert + page["text"][m.end():]
            page["changes"].append(f"Se agregó el case «{new_item.lower()}» (se conserva «{item.lower()}»)")
        feat = draft(ctx, drafts, f.file)
        lines = feat["text"].split("\n")
        if f.line - 1 < len(lines) and item in lines[f.line - 1]:
            lines[f.line - 1] = lines[f.line - 1].replace(item, new_item.ljust(len(item)), 1)
            feat["text"] = "\n".join(lines)
            feat["changes"].append(f"Elemento «{item}» → «{new_item}»")
            feat["ids"].append(f.id)


def add_missing_cases(ctx: SkillContext, drafts: dict[str, dict], findings: list[Finding]) -> None:
    """GHK-015: si la page ya tiene el elemento (camelCase del item), se agrega su case de visibilidad."""
    for f in findings:
        if f.severity == "LOW":     # existe en otra page: la pantalla inferida puede no ser la correcta
            continue
        v, item = _validation_of(ctx, f)
        if not v or not v.page or not item:
            continue
        page = draft(ctx, drafts, v.page)
        found = jsparse.object_entries(page["text"], "elements")
        keys = {e.key.lower(): e.key for e in (found[0] if found else [])}
        words = re.findall(r"[a-z0-9]+", item.lower())
        camel = (words[0] + "".join(w.capitalize() for w in words[1:])) if words else ""
        element = keys.get(camel.lower())
        method = _screen_method(page["text"])
        if not element or not method:
            continue
        default = re.search(r"^([ \t]*)default\s*:", method.body, re.M)
        case_line = re.search(r"^([ \t]*)case\s", method.body, re.M)
        if not default or not case_line:
            continue
        indent = case_line.group(1)
        inner = indent + "    "
        block = (f"{indent}case '{item.lower()}':\n{inner}await this.{element}.waitForDisplayed({{timeout: config.wait.M}});\n"
                 f"{inner}break;\n")
        pos = method.body_start + default.start()
        page["text"] = page["text"][:pos] + block + page["text"][pos:]
        page["changes"].append(f"Se agregó el case «{item.lower()}» (valida this.{element})")
        owner = draft(ctx, drafts, f.file)
        owner["ids"].append(f.id)


# ─── Un case por elemento (SCV-004): el case se divide y los features listan cada elemento ─


WAIT_STMT_RE = re.compile(r"^\s*await\s+this\.([\w$]+)\.waitFor\w*\([^;]*\);\s*$")


def _label_of(element: str) -> str:
    return " ".join(p.lower() for p in re.findall(r"[A-Z]?[a-z]+|[0-9]+|[A-Z]+(?![a-z])", element))


def _split_row(line: str, item: str, labels: list[str]) -> list[str] | None:
    """| benefits | x |  →  una fila por label, con el resto de celdas igual."""
    if not line.strip().startswith("|"):
        return None
    indent = line[: len(line) - len(line.lstrip())]
    cells = line.strip().strip("|").split("|")
    idx = next((i for i, c in enumerate(cells) if c.strip().lower() == item.lower()), None)
    if idx is None:
        return None
    width = max(len(cells[idx]) - 2, *(len(l) for l in labels))
    rows = []
    for label in labels:
        new = list(cells)
        new[idx] = f" {label.ljust(width)} "
        rows.append(indent + "|" + "|".join(new) + "|")
    return rows


def _realign(lines: list[str], ln: int) -> None:
    """Realinea la tabla Gherkin que contiene la línea ln (0-based)."""
    is_row = lambda i: 0 <= i < len(lines) and lines[i].strip().startswith("|")
    a = ln
    while is_row(a - 1):
        a -= 1
    b = ln
    while is_row(b + 1):
        b += 1
    rows = [[c.strip() for c in lines[i].strip().strip("|").split("|")] for i in range(a, b + 1)]
    if len({len(r) for r in rows}) != 1:
        return
    widths = [max(len(r[c]) for r in rows) for c in range(len(rows[0]))]
    indent = lines[a][: len(lines[a]) - len(lines[a].lstrip())]
    for i, r in zip(range(a, b + 1), rows):
        lines[i] = indent + "| " + " | ".join(c.ljust(w) for c, w in zip(r, widths)) + " |"


def split_cases(ctx: SkillContext, drafts: dict[str, dict], findings: list[Finding]) -> None:
    """SCV-004: `case 'benefits'` que valida 3 elementos → 3 cases; los features que usaban «benefits» listan los 3."""
    usage = get_usage()
    usage.build(ctx.ix)
    for f in findings:
        m = re.match(r"case '(.+)'$", f.evidence)
        if not m:
            continue
        item = m.group(1)
        page = draft(ctx, drafts, f.file)
        text = page["text"]
        head = re.search(rf"^([ \t]*)case\s*(['\"`]){re.escape(item)}\2\s*:[ \t]*\n", text, re.M)
        if not head or re.search(r"case\s*['\"`][^'\"`]*['\"`]\s*:\s*$", text[:head.start()].rstrip().rsplit("\n", 1)[-1]):
            continue   # case apilado con otro: lo resuelve la IA
        rest = text[head.end():]
        brk = re.search(r"^[ \t]*break;[ \t]*\n", rest, re.M)
        if not brk:
            continue
        body = [l for l in rest[:brk.start()].split("\n") if l.strip()]
        stmts = [WAIT_STMT_RE.match(l) for l in body]
        if not stmts or not all(stmts):
            continue   # hay lógica además de esperas: lo resuelve la IA
        existing = {c.lower() for c in re.findall(r"case\s*['\"`]([^'\"`]+)['\"`]\s*:", text)}
        labels, blocks = [], []
        indent, quote = head.group(1), head.group(2)
        for line, sm in zip(body, stmts):
            label = _label_of(sm.group(1))
            if label in labels:
                continue
            labels.append(label)
            if label not in existing:
                blocks.append(f"{indent}case {quote}{label}{quote}:\n{line}\n{indent}    break;\n")
        # Features que usan el item en esta page
        updates: dict[str, str] = {}
        ok = True
        for feature in usage.features_for(ctx.ix, f.file):
            ftext = drafts[feature]["text"] if feature in drafts else ctx.ix.read(feature)
            if not re.search(rf"\|\s*{re.escape(item)}\s*\|", ftext, re.I):
                continue
            rel = ctx.relation if feature == ctx.report.feature_path and ftext == ctx.feature_text else \
                relate(ctx.ix, feature, ftext)
            lines = ftext.split("\n")
            hits = sorted({ln for v in rel.validations if v.page == f.file for it, ln in v.items if it.lower() == item.lower()},
                          reverse=True)
            for ln in hits:
                rows = _split_row(lines[ln - 1], item, labels)
                if rows is None:
                    ok = False
                    break
                lines[ln - 1:ln] = rows
                _realign(lines, ln - 1)
            if not ok:
                break
            if hits:
                updates[feature] = "\n".join(lines)
        if not ok:
            continue
        page["text"] = text[:head.start()] + "".join(blocks) + rest[brk.end():]
        page["changes"].append(f"El case «{item}» se dividió en un case por elemento: " + ", ".join(f"«{l}»" for l in labels))
        page["ids"].append(f.id)
        for feature, new_text in updates.items():
            fd = draft(ctx, drafts, feature)
            fd["text"] = new_text
            fd["changes"].append(f"El elemento «{item}» se lista como " + ", ".join(f"«{l}»" for l in labels))

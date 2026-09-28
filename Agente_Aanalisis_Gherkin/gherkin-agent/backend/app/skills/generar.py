"""Skill 7 · generar: propone la corrección de cada archivo.

1) Fixers determinísticos (exactos) para las reglas con fix="auto".
2) La IA propone ediciones buscar/reemplazar para las reglas con fix="ai" (solo fragmentos, respuesta corta).
Nada se escribe en disco: el usuario revisa el diff y confirma en la UI.
"""
import difflib
import re
from dataclasses import dataclass
from concurrent.futures import ThreadPoolExecutor

from app.domain.models import SEVERITY_ORDER, FileFix, Finding
from app.framework import jsparse, jssyntax
from app.guide import examples_for, guide_for
from app.framework.stepmatch import readable
from app.framework.relate import relate
from app.rules.engine import RuleContext, run_rules
from app.rules.fixers import apply_fixers
from app.skills.estandarizar import _group
from app.skills.propagate import add_missing_cases, draft, rename_items, rename_methods, rename_steps, split_cases
from app.skills.base import Skill, SkillContext, register, skip
from app.skills.excerpt import around, excerpt
from app.skills.prompts import (
    FIX_SYSTEM, FIX_USER, AIEdit, AIFixPlan,
)
from app.utils.text import sha


def unified_diff(path: str, a: str, b: str) -> str:
    return "\n".join(difflib.unified_diff(a.split("\n"), b.split("\n"), f"a/{path}", f"b/{path}", lineterm="", n=3))


NUMBER_PREFIX_RE = re.compile(r"^\s*\d+\|\s?")


@dataclass
class Segment:
    find: str
    replace: str


def _norm(s: str) -> str:
    return re.sub(r"\s+", " ", s.strip())


def locate(lines: list[str], edit: AIEdit) -> tuple[int, int] | None:
    """Índices (0-based, inclusivos) que reemplaza la edición, verificados con first_line."""
    first = _norm(NUMBER_PREFIX_RE.sub("", edit.first_line))
    span = max(0, edit.end_line - edit.start_line)
    for d in (0, -1, 1, -2, 2, -3, 3, -5, 5, -8, 8):
        i = edit.start_line - 1 + d
        if 0 <= i < len(lines) and (_norm(lines[i]) == first or (first and first in _norm(lines[i]))):
            return i, min(len(lines) - 1, i + span)
    return None


def replacement_lines(edit: AIEdit, original_first: str) -> list[str]:
    if not edit.replace.strip():
        return []
    out = [NUMBER_PREFIX_RE.sub("", l) if NUMBER_PREFIX_RE.match(l) else l for l in edit.replace.strip("\n").split("\n")]
    indent = original_first[: len(original_first) - len(original_first.lstrip())]
    given = out[0][: len(out[0]) - len(out[0].lstrip())]
    if len(given) < len(indent):              # la IA perdió la indentación: se restaura
        delta = indent[len(given):]
        out = [delta + l if l.strip() else l for l in out]
    elif len(given) > len(indent):            # la IA agregó espacios de más: se quitan
        extra = len(given) - len(indent)
        out = [l[extra:] if l[:extra].strip() == "" else l for l in out]
    return out


MAX_ROUNDS = 4
STEP_PREFIX_RE = re.compile(r"^\s*(Given|When|Then|And|But)\s+")
STOP = {"the", "user", "and", "with", "from", "that", "for", "to", "in", "of", "a", "an", "on", "is", "his", "her"}
SELECTORISH_RE = re.compile(r"^(?:\$\{[^}]*\}\s*)?(?:[#.\[~>]|[a-z]+-[a-z])|^(?:\$\{[^}]*\}\s*)?[a-z][\w-]*(?:[#.\[:]|\s*>)")
SIBLING_RE = re.compile(r"\s~\s")
STRING_RE = re.compile(r"(['\"`])((?:(?!\1)[^\\\n]|\\.)*)\1")


def selectors_in(code: str) -> list[str]:
    """Cadenas que parecen selectores CSS (respeta comillas internas: '[data-tag-name="x"] .y')."""
    return [m.group(2) for m in STRING_RE.finditer(code) if SELECTORISH_RE.search(m.group(2))]


def _tokens(text: str) -> set[str]:
    return {w for w in re.findall(r"[a-z]{3,}", text.lower()) if w not in STOP}


def candidate_steps(ctx: SkillContext, findings: list[Finding], limit: int = 14) -> list[str]:
    out: list[str] = []
    for f in findings:
        words = _tokens(re.sub(r"^(Given|When|Then|And|But)\s+", "", f.evidence))
        if not words:
            continue
        scored = []
        for cs in ctx.ix.steps:
            common = words & _tokens(cs.step.pattern)
            if len(common) >= 2:
                scored.append((len(common) / len(words | _tokens(cs.step.pattern)), cs.step.pattern))
        for _, pat in sorted(scored, reverse=True)[:4]:
            r = readable(pat)
            if r not in out:
                out.append(r)
    return out[:limit]


SELECTOR_RULES = {"PAG-002", "PAG-004", "PAG-005", "PAG-007", "PAG-011", "GHK-015"}
TITLE_RULES = {"GHK-006", "GHK-012"}
DUPLICATE_RULES = {"STP-006", "GHK-014"}
MULTI_FILE_RULES = {"STP-003", "STP-004", "NAV-002", "NAV-003"}


CASE_LABEL_RE = re.compile(r"\bcase\s*(['\"`][^'\"`]+['\"`]|[\w$.]+)\s*:")


def structure_reason(old: str, new: str) -> str | None:
    """Una corrección no puede perder case (los usan los features), métodos, ni `break`, ni romper la sintaxis."""
    lost_cases = {c.lower() for c in CASE_LABEL_RE.findall(old)} - {c.lower() for c in CASE_LABEL_RE.findall(new)}
    if lost_cases:
        return "quita o renombra un case que usan los features (" + ", ".join(sorted(lost_cases))[:80] + ")"
    old_methods = {m.name for m in jsparse.extract_methods(old)}
    lost_methods = old_methods - {m.name for m in jsparse.extract_methods(new)}
    if lost_methods:
        return "elimina o renombra métodos (" + ", ".join(sorted(lost_methods))[:80] + ")"
    if len(re.findall(r"\bbreak\s*;", new)) < len(re.findall(r"\bbreak\s*;", old)):
        return "quita un break (un case caería en el siguiente)"
    return jssyntax.breaks(old, new)


POSITIONAL_RE = re.compile(r":nth-(child|of-type|last-child|last-of-type)|:first-child|:last-child|:contains\(|text\(\)")
SELECTOR_TOKEN_RE = re.compile(r"#[\w-]+|\.[A-Za-z_][\w-]*|\[[^\]]+\]|(?<![\w#.\[\-])[a-z][a-z0-9]*(?:-[a-z0-9]+)+")


def _positional_reason(old: str, edit) -> str | None:
    """PAG-005: el selector nuevo solo puede usar ids, clases, atributos y etiquetas que ya existen en el archivo."""
    before = set(selectors_in(edit.find))
    old_tokens = {tok for s in before for tok in SELECTOR_TOKEN_RE.findall(s)}
    for sel in selectors_in(edit.replace):
        if sel in before:
            continue
        if POSITIONAL_RE.search(sel):
            return "el selector sigue siendo posicional"
        tokens = SELECTOR_TOKEN_RE.findall(sel)
        for tok in tokens:
            if tok not in old:
                return f"usa «{tok}», que no existe en el archivo (no se inventan selectores)"
        if any(SIBLING_RE.search(re.sub(r"\[[^\]]*\]", "", s)) for s in before) and \
                not SIBLING_RE.search(re.sub(r"\[[^\]]*\]", "", sel)) and not set(tokens) - old_tokens:
            return "cambia «~» (hermano) por descendiente: apuntaría a otro elemento"
        if any(POSITIONAL_RE.search(s) for s in before) and not set(tokens) - old_tokens:
            # solo quitó la posición: el selector queda ambiguo (podría encontrar otro elemento)
            return "solo quita la posición sin agregar un id/atributo que identifique al elemento"
    return None


def reject_reason(ctx: SkillContext, path: str, old: str, new: str, edit: AIEdit,
                  allowed: set[str] | None = None) -> str | None:
    """Protecciones: la IA no puede inventar selectores, renombrar escenarios/IDs ni dejar steps sin definición,
    salvo cuando el hallazgo que corrige es precisamente de eso (`allowed`)."""
    allowed = allowed or set()
    if len(edit.replace) > 3 * len(edit.find) + 400:
        return "reescribe demasiado código"
    if not path.endswith(".feature"):
        old_patterns = sorted(s.pattern for s in jsparse.extract_step_defs(old))
        new_patterns = sorted(s.pattern for s in jsparse.extract_step_defs(new))
        if "/step_definitions/" in path and old_patterns != new_patterns:
            removed = set(old_patterns) - set(new_patterns)
            duplicated = all(sum(1 for cs in ctx.ix.steps if cs.step.pattern == pat) > 1 for pat in removed)
            if not (allowed & DUPLICATE_RULES and removed and duplicated and not set(new_patterns) - set(old_patterns)):
                return "cambia el texto de un step definition (afectaría a otros features)"
        if not allowed & SELECTOR_RULES and sorted(selectors_in(edit.find)) != sorted(selectors_in(edit.replace)):
            return "modifica selectores (hay que validarlos en la app)"
        if reason := _positional_reason(old, edit):     # ningún selector nuevo con piezas inventadas
            return reason
        return structure_reason(old, new)
    old_lines = set(old.split("\n"))
    old_ids = set(re.findall(r"@(?:[A-Z]+_)*[A-Z]{2,5}-?\d{3}\b", old))
    if set(re.findall(r"@(?:[A-Z]+_)*[A-Z]{2,5}-?\d{3}\b", new)) != old_ids:
        return "cambia tags identificadores"
    new_lines = new.split("\n")
    for i, line in enumerate(new_lines):
        if line in old_lines:
            continue
        step = STEP_PREFIX_RE.sub("", line)
        neighbours = [STEP_PREFIX_RE.sub("", l) for l in new_lines[max(0, i - 1):i] + new_lines[i + 1:i + 2]]
        if step.strip() and step in neighbours:
            return "deja dos steps iguales seguidos"
        s = line.strip()
        if re.match(r"(Scenario|Scenario Outline|Feature)\s*:", s) and not allowed & TITLE_RULES:
            return "cambia el título de un escenario (obligaría a regrabar)"
        m = re.match(r"(Given|When|Then|And|But)\s+(.*)$", s)
        if m and "<" not in m.group(2) and not ctx.ix.match_step(m.group(2)):
            return f"el step «{m.group(2)[:70]}» no existe en el framework"
    return None


def _ai_fix(ctx: SkillContext, path: str, texts: dict[str, str], findings: list[Finding]
            ) -> tuple[dict[str, str], list[str], list[str], list[str]]:
    """Pide a la IA ediciones por rango de líneas. `texts` = archivo principal + archivos auxiliares editables."""
    rule_of = {f.id: f.rule_id for f in findings}
    listing = "\n".join(
        f"- {f.id} [{f.rule_id}] línea {f.line or '?'}"
        + (f" y TAMBIÉN en las líneas {', '.join(map(str, f.lines))} (corrige todas)" if f.lines else "")
        + f": {f.message} | Cómo: {f.recommendation.splitlines()[0]}"
        for f in findings)
    steps = ""
    if path.endswith(".feature"):
        cands = candidate_steps(ctx, findings)
        steps = "\nSTEPS EXISTENTES (usa solo estos textos para steps nuevos o modificados):\n" + (
            "\n".join(f"- {c}" for c in cands) if cands else "(ninguno parecido: no cambies el texto de los steps)") + "\n"
    lines_ = [l for f in findings for l in [f.line, *f.lines] if l]
    code, partial = excerpt(texts[path], around(lines_, 12) if lines_ else None, max_lines=AI_MAX_LINES)
    if partial:
        code = "(fragmentos del archivo; «…» indica código omitido)\n" + code
    for extra, extra_text in texts.items():
        if extra == path:
            continue
        methods = jsparse.extract_methods(extra_text)
        ranges = [(1, 12)] + [(m.line, m.end_line) for m in methods if m.name in ("constructor",)]
        extra_code, _ = excerpt(extra_text, ranges, max_lines=60)
        code += f"\n\nARCHIVO AUXILIAR {extra} (puedes agregarle métodos; usa file=\"{extra}\"):\n{extra_code}"
    plan = ctx.provider.structured([
        {"role": "system", "content": FIX_SYSTEM},
        {"role": "user", "content": FIX_USER.format(
            guide=guide_for(ctx.ix.kind_of(path)),
            examples=examples_for({f.rule_id for f in findings}, ctx.ix.kind_of(path)) or "(sin ejemplos para estas reglas)",
            findings=listing, steps=steps, path=path, code=code, limit=14)},
    ], AIFixPlan, max_tokens=2000)

    out = dict(texts)
    ids, changes, warnings = [], [], []
    by_file: dict[str, list[AIEdit]] = {}
    for edit in plan.edits:
        target = edit.file.strip() if edit.file.strip() in texts else path
        by_file.setdefault(target, []).append(edit)
    for target, edits in by_file.items():
        lines = out[target].split("\n")
        located = sorted(((pos, e) for e in edits if (pos := locate(lines, e))), key=lambda x: -x[0][0])
        last_start = len(lines) + 1
        for (a, b), edit in located:
            if b >= last_start:
                continue
            new_lines = lines[:a] + replacement_lines(edit, lines[a]) + lines[b + 1:]
            new_text = "\n".join(new_lines)
            allowed = {rule_of.get(i, "") for i in edit.finding_ids}
            if target == path and not _near_findings(a, b, [f for f in findings if f.id in edit.finding_ids]):
                warnings.append("Se descartó una edición de la IA porque cambia líneas sin hallazgos.")
                continue
            seg = Segment("\n".join(lines[a:b + 1]), edit.replace)
            if reason := reject_reason(ctx, target, "\n".join(lines), new_text, seg, allowed):
                warnings.append(f"Se descartó una edición de la IA porque {reason}.")
                continue
            if allowed & (SELECTOR_RULES | TITLE_RULES):
                warnings.append("Verifica al ejecutar el test: se propuso " + (
                    "un selector nuevo." if allowed & SELECTOR_RULES else "unir escenarios (hay que regrabarlos en vBank)."))
            lines, last_start = new_lines, a
            ids.extend(i for i in edit.finding_ids if i not in ids)
            changes.append(edit.explanation or "Corrección aplicada")
        out[target] = "\n".join(lines)
    return out, ids, changes, list(dict.fromkeys(warnings))


def _recording_fixes(ctx: SkillContext) -> list[FileFix]:
    """REC-002 (grabaciones sobrantes) y REC-003 (escenario @manual con grabación): se retiran las carpetas."""
    from app.framework.gherkin import parse_feature, scenario_id
    from app.rules.feature_rules import recording_matches
    out = []
    for f in ctx.findings:
        if f.rule_id not in ("REC-002", "REC-003") or not f.file.endswith(".feature"):
            continue
        sid = f.evidence.split()[0] if f.evidence else ""
        recs = ctx.ix.recordings_for(sid) if sid.startswith("@") else []
        if not recs:
            continue
        if f.rule_id == "REC-003":
            remove = recs
        else:
            doc = parse_feature(ctx.ix.read(f.file), f.file)
            sc = next((s for s in doc.scenarios if scenario_id(s.tags) == sid), None)
            valid = [r for r in recs if sc and recording_matches(sid, sc, r.title_slug)]
            keep = valid[:1] or [max(recs, key=lambda r: (ctx.ix.abs(r.folder).stat().st_mtime))]
            remove = [r for r in recs if r not in keep]
        if not remove:
            continue
        listing = "\n".join(f"- {r.folder}/ ({r.files} archivos)" for r in remove)
        out.append(FileFix(
            file=remove[0].folder, action="delete", paths=[r.folder for r in remove], kind="other",
            original_hash=sha(listing), original=listing, proposed="", diff=listing, finding_ids=[f.id],
            changes=[("Se retira la grabación del escenario @manual " if f.rule_id == "REC-003"
                      else "Se retiran las grabaciones sobrantes de ") + sid + f" ({len(remove)} carpeta(s))"],
            generated_by="reglas",
        ))
        f.resolved_by_fix = True
    return out


def safe_fixers(path: str, text: str, findings: list[Finding]) -> tuple[str, list[str], list[str]]:
    """Aplica los fixers; en JS, si el resultado no compila, los aplica de uno en uno y descarta el que rompa."""
    new, ids, changes = apply_fixers(text, findings, path.endswith(".feature"))
    if path.endswith(".feature") or new == text or structure_reason(text, new) is None:
        return new, ids, changes
    current, ok_ids, ok_changes = text, [], []
    for f in findings:
        candidate, fid, ch = apply_fixers(current, [f], False)
        if candidate != current and structure_reason(current, candidate) is None:
            current, ok_ids, ok_changes = candidate, ok_ids + fid, ok_changes + ch
    return current, ok_ids, ok_changes


BATCH_SIZE = 6
AI_MAX_LINES = 200     # fragmento de código por llamada (el modelo debe caber completo en la GPU)


def _batches(findings: list[Finding]) -> list[list[Finding]]:
    """Lotes pequeños de hallazgos cercanos entre sí: respuestas cortas y precisas, y ninguno se queda fuera."""
    ordered = sorted(findings, key=lambda f: f.line or 0)
    return [ordered[i:i + BATCH_SIZE] for i in range(0, len(ordered), BATCH_SIZE)]


STEP_TEXT_RULES = {"GHK-002", "GHK-004", "GHK-012", "STP-005", "STP-008"}


def _step_def_of(ctx: SkillContext, f: Finding) -> str | None:
    """Step definition cuyo texto hay que cambiar para resolver el hallazgo."""
    if f.rule_id not in STEP_TEXT_RULES:
        return None
    if f.file.endswith(".feature"):
        if not re.match(r"(Given|When|Then|And|But)\s", f.evidence):   # p. ej. GHK-012 sobre un título
            return None
        m = next((m for m in ctx.relation.matches if m.line == f.line and m.status == "ok"), None)
        return m.step_def_ids[0] if m else None
    return next((sd.id for sd in ctx.ix.step_by_id.values() if sd.file == f.file and sd.line == f.line), None)


def _near_findings(a: int, b: int, findings: list[Finding], margin: int = 4) -> bool:
    """¿El rango editado (0-based) toca alguna línea de los hallazgos (1-based) que dice corregir?"""
    lines = [l for f in findings for l in [f.line, *f.lines] if l]
    return any(a - margin <= l - 1 <= b + margin for l in lines)


def _aux_files(ctx: SkillContext, path: str, text: str, findings: list[Finding]) -> list[str]:
    """Pages que se pueden editar junto con un step/navigation (para crear el método que falta)."""
    if not any(f.rule_id in MULTI_FILE_RULES for f in findings):
        return []
    out = []
    lines = text.split("\n")
    snippet = "\n".join(lines[max(0, (f.line or 1) - 1):(f.line or 1) + 20] for f in findings if f.rule_id in MULTI_FILE_RULES)
    for imp in jsparse.parse_imports(text):
        target = ctx.ix.resolve_module(path, imp.src)
        if target and imp.default and ctx.ix.kind_of(target) == "page" and f"{imp.default}." in snippet:
            out.append(target)
    return out[:2]




@register
class Generar(Skill):
    name = "generar"
    label = "Generar corrección"
    on_error = "validar"

    def run(self, ctx: SkillContext) -> str:
        by_file: dict[str, list[Finding]] = {}
        for f in ctx.findings:
            if f.fix in ("auto", "ai") and f.rule_id not in ("REC-002", "REC-003"):   # grabaciones: _recording_fixes
                by_file.setdefault(f.file, []).append(f)
        feature = ctx.report.feature_path
        order = sorted(by_file, key=lambda p: (p != feature, min(SEVERITY_ORDER[f.severity] for f in by_file[p])))
        use_ai = ctx.settings.ai_enabled and ctx.settings.ai_generate_fixes and ctx.ai_available
        ai_budget = 1 + ctx.settings.max_ai_files

        drafts: dict[str, dict] = {}
        for path in order:
            ctx.ix.invalidate(path)
            original, newline = ctx.ix.read_with_newline(path)
            findings = by_file[path]
            text, ids, changes = safe_fixers(path, original, [f for f in findings if f.fix == "auto"])
            pending = [f for f in findings if f.id not in ids]
            drafts[path] = {"original": original, "newline": newline, "text": text, "ids": ids,
                            "changes": changes, "warnings": [], "pending": pending, "by": "reglas" if ids else ""}
        ctx.progress(self.name, f"Reglas: {sum(len(d['ids']) for d in drafts.values())} correcciones automáticas")

        if use_ai:
            self._propagating_fixes(ctx, drafts, list(drafts))

        ai_files = [p for p in order if drafts[p]["pending"]] if use_ai else []
        if ai_files:
            self._ai_round(ctx, drafts, ai_files, 1)
        if not use_ai:
            ctx.report.warnings.append("Correcciones con IA desactivadas o IA no disponible: solo se aplicaron reglas.")

        self._converge(ctx, drafts, use_ai, ai_budget)

        fixes = _recording_fixes(ctx)
        for path, d in drafts.items():
            if d["text"] == d["original"]:
                continue
            if not path.endswith(".feature") and (reason := jssyntax.breaks(d["original"], d["text"])):
                ctx.report.warnings.append(f"No se propone la corrección de {path.rsplit('/', 1)[-1]} porque {reason}.")
                continue
            fixes.append(FileFix(
                file=path, kind=ctx.ix.kind_of(path), original_hash=sha(d["original"]), newline=d["newline"],
                original=d["original"], proposed=d["text"], diff=unified_diff(path, d["original"], d["text"]),
                finding_ids=d["ids"], changes=d["changes"], warnings=d["warnings"], generated_by=d["by"] or "ia",
            ))
        ctx.report.fixes = fixes
        if not fixes:
            skip(ctx, "validar", "No se generaron cambios")
            ctx.progress(self.name, "Sin cambios propuestos")
            return "reportar"
        ctx.progress(self.name, f"{len(fixes)} archivo(s) con corrección propuesta")
        return "validar"

    def _converge(self, ctx: SkillContext, drafts: dict[str, dict], use_ai: bool, ai_budget: int) -> None:
        """Vuelve a pasar las reglas sobre el código ya corregido y corrige lo que quede (todas las ocurrencias,
        en todas las secciones), hasta que no quede nada corregible o una vuelta ya no avance."""
        feature = ctx.report.feature_path
        for vuelta in range(2, MAX_ROUNDS + 1):
            overrides = {pth: d["text"] for pth, d in drafts.items() if d["text"] != d["original"]}
            with ctx.ix.step_overlay(overrides):
                relation = ctx.relation
                if ctx.report.target_type == "feature" and feature in overrides:
                    relation = relate(ctx.ix, feature, overrides[feature])
                remaining = [f for f in run_rules(RuleContext(ctx.ix, relation, overrides))
                             if f.fix in ("auto", "ai") and f.rule_id not in ("REC-002", "REC-003")]
            remaining = _group(remaining)
            for i, f in enumerate(remaining, 1):
                f.id = f"V{vuelta}-{i:03d}"
            if not remaining:
                ctx.progress(self.name, "Corrección verificada: no quedan malas prácticas corregibles")
                return
            ctx.progress(self.name, f"Revisando la corrección (vuelta {vuelta}): quedan {len(remaining)} por corregir…")
            before = {pth: d["text"] for pth, d in drafts.items()}
            by_file: dict[str, list[Finding]] = {}
            for f in remaining:
                by_file.setdefault(f.file, []).append(f)
            for pth, findings in by_file.items():
                if pth not in drafts:
                    original, newline = ctx.ix.read_with_newline(pth)
                    drafts[pth] = {"original": original, "newline": newline, "text": original, "ids": [],
                                   "changes": [], "warnings": [], "pending": [], "by": ""}
                d = drafts[pth]
                text, ids, changes = safe_fixers(pth, d["text"], [f for f in findings if f.fix == "auto"])
                if text != d["text"]:
                    d["text"] = text
                    d["changes"] += changes
                    d["by"] = d["by"] or "reglas"
                d["pending"] = [f for f in findings if f.id not in ids]
            if use_ai:
                self._propagating_fixes(ctx, drafts, list(by_file))
                files = [pth for pth in by_file if drafts[pth]["pending"]]
                if files:
                    self._ai_round(ctx, drafts, files, vuelta)
            if all(drafts[pth]["text"] == before.get(pth, drafts[pth]["original"]) for pth in drafts):
                ctx.progress(self.name, f"La vuelta {vuelta} ya no pudo corregir más ({len(remaining)} pendiente(s))")
                return

    def _propagating_fixes(self, ctx: SkillContext, drafts: dict[str, dict], paths: list[str]) -> None:
        """Renombrados que afectan a otros archivos: métodos (COD-011) y textos de steps (GHK-004/STP-005/STP-008)."""
        step_targets: dict[str, list[Finding]] = {}
        for path in paths:
            d = drafts[path]
            methods = [f for f in d["pending"] if f.rule_id == "COD-011"]
            if methods:
                try:
                    rename_methods(ctx, path, drafts, methods)
                except Exception as e:  # noqa: BLE001
                    d["warnings"].append(f"No se pudo renombrar: {str(e)[:120]}")
            for f in d["pending"]:
                sid = _step_def_of(ctx, f)
                if sid:
                    step_targets.setdefault(sid, []).append(f)
        if step_targets:
            try:
                rename_steps(ctx, drafts, step_targets)
            except Exception as e:  # noqa: BLE001
                ctx.report.warnings.append(f"No se pudieron renombrar steps: {str(e)[:120]}")
        if ctx.report.target_type == "feature":
            pending = [f for pth in paths for f in drafts[pth]["pending"]]
            rename_items(ctx, drafts, [f for f in pending if f.rule_id == "GHK-010"])
            add_missing_cases(ctx, drafts, [f for f in pending if f.rule_id == "GHK-015"])
        split_cases(ctx, drafts, [f for pth in paths for f in drafts[pth]["pending"] if f.rule_id == "SCV-004"])
        for path in paths:
            drafts[path]["pending"] = [f for f in drafts[path]["pending"] if f.id not in drafts[path]["ids"]]

    def _ai_round(self, ctx: SkillContext, drafts: dict[str, dict], files: list[str], round_: int) -> None:
        total = sum(len(drafts[p]["pending"]) for p in files)
        ctx.progress(self.name, f"Corrigiendo {total} mala(s) práctica(s) en {len(files)} archivo(s)"
                     + (f" (vuelta {round_})" if round_ > 1 else "") + "…")

        def fix_file(p: str) -> None:
            d = drafts[p]
            batches = _batches(d["pending"])
            while batches:
                batch = batches.pop(0)
                aux = _aux_files(ctx, p, d["text"], batch)
                for a in aux:
                    draft(ctx, drafts, a)
                texts = {x: drafts[x]["text"] for x in [p, *aux]}
                try:
                    new_texts, ids, changes, warnings = _ai_fix(ctx, p, texts, batch)
                except Exception as e:  # noqa: BLE001
                    if len(batch) > 1:          # lote muy pesado: se reintenta de uno en uno
                        batches = [[f] for f in batch] + batches
                    else:
                        d["warnings"].append(f"La IA no pudo generar la corrección: {str(e)[:160]}")
                    continue
                for x, new_text in new_texts.items():
                    if new_text != drafts[x]["text"]:
                        drafts[x]["text"] = new_text
                        if x != p:
                            drafts[x]["changes"].append(f"Se agregó el método que usa {p.rsplit('/', 1)[-1]}")
                d["ids"] += [i for i in ids if i not in d["ids"]]
                d["changes"] += changes
                d["warnings"] += warnings
                if changes:
                    d["by"] = "reglas+ia" if d["by"] else "ia"
            d["pending"] = [f for f in d["pending"] if f.id not in d["ids"]]

        # Los steps ya renombrados en esta corrección cuentan como existentes al validar lo que propone la IA.
        overrides = {x: dd["text"] for x, dd in drafts.items() if dd["text"] != dd["original"] and x.endswith(".js")}
        with ctx.ix.step_overlay(overrides), ThreadPoolExecutor(max_workers=2) as pool:
            list(pool.map(fix_file, files))

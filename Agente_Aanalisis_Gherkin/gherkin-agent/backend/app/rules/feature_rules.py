"""Checks determinísticos sobre el .feature: Gherkin, tags y grabaciones vBank."""
import math
import re

from app.domain.models import Scenario
from app.framework import jsparse
from app.framework.gherkin import ID_TAG_RE, scenario_id
from app.framework.indexer import id_slug
from app.rules.engine import RuleContext, check
from app.rules.lang import (
    ACTION_WORDS_RE, HARDCODED_RE, UI_WORDS_RE, VALIDATION_WORDS_RE, is_spanish, unquoted,
)
from app.utils.text import kebab, vbank_slug
from difflib import SequenceMatcher

from app.framework.stepmatch import literal_text, readable

DEVICE = {"@web", "@ios", "@android"}
EXCLUSION = {"@manual", "@manual-android", "@manual-ios", "@manual-web", "@failure", "@appFix", "@tmpExclude",
             "@quarantine", "@quarantine-android", "@quarantine-ios", "@quarantine-web"}
JIRA_RE = re.compile(r"^@JIRA\.[A-Z]+-\d+$")
COUNTRY_RE = re.compile(r"^@[A-Z]{2}$")
ID_LIKE_RE = re.compile(r"^@(?:[A-Za-z]+_)*[A-Za-z]{1,6}-?\d{1,4}$")
KNOWN_TAGS = DEVICE | EXCLUSION | {
    "@web-done", "@ios-done", "@android-done", "@vbank", "@!vbank", "@vbank-modified", "@smokeTest",
    "@backend-smoke", "@no-data-manager", "@sanity", "@test", "@artichoke", "@glomo", "@exclude-headless",
}
RANK = {"given": 0, "when": 1, "then": 2}
CRITERIA_RE = re.compile(r"following criteria|criteria", re.I)


def _tags(ctx: RuleContext, sc: Scenario) -> set[str]:
    return set(ctx.relation.feature.tags) | set(sc.tags) | {t for ex in sc.examples for t in ex.tags}


def _tag_line(sc: Scenario, tag: str | None = None) -> int:
    """Línea donde está el tag (o la última línea de tags del escenario)."""
    if tag:
        for ln, toks in _line_tags.get(id(sc), {}).items():
            if tag in toks:
                return ln
    return sc.tag_lines[-1] if sc.tag_lines else sc.line


_line_tags: dict[int, dict[int, list[str]]] = {}


def _index_tag_lines(ctx: RuleContext) -> None:
    lines = ctx.text(ctx.relation.feature.path).split("\n")
    _line_tags.clear()
    for sc in ctx.relation.feature.scenarios:
        _line_tags[id(sc)] = {ln: lines[ln - 1].split() for ln in sc.tag_lines if ln - 1 < len(lines)}


def _feature_line(ctx: RuleContext) -> int:
    return ctx.relation.feature.line


def _is_manual(tags: set[str]) -> bool:
    return any(t.startswith("@manual") for t in tags)


# ─── Gherkin ─────────────────────────────────────────────────────────────────


@check("feature")
def gherkin_structure(ctx: RuleContext) -> None:
    path = ctx.relation.feature.path
    _index_tag_lines(ctx)
    matches = {(m.scenario, m.line): m for m in ctx.relation.matches}
    for sc in ctx.relation.feature.scenarios:
        steps = sc.steps
        # GHK-001 orden
        top = 0
        for st in steps:
            r = RANK[st.effective]
            if r < top:
                ctx.add("GHK-001", path, st.line, f"{st.keyword} {st.text}",
                        f"En «{sc.name}» aparece un {st.effective.capitalize()} después de un "
                        f"{['Given', 'When', 'Then'][top]}.")
                break
            top = max(top, r)
        when_steps = 0
        last_validation_page: str | None = "-"
        last_validation_def: str | None = None
        for st in steps:
            m = matches.get((sc.name, st.line))
            clean = unquoted(st.text)
            if st.effective in ("given", "when"):
                if VALIDATION_WORDS_RE.search(clean) or (m and m.validates_screen):
                    ctx.add("GHK-002", path, st.line, f"{st.keyword} {st.text}")
                if st.table and st.table[0] and any(h.lower() in ("item", "items", "element", "elements")
                                                    for h in st.table[0]):
                    ctx.add("GHK-007", path, st.table_line, f"{st.keyword} {st.text} | {' | '.join(st.table[0])} |")
            if st.effective == "when":
                when_steps += 1
            if st.effective == "then" and ACTION_WORDS_RE.search(clean):
                ctx.add("GHK-003", path, st.line, f"{st.keyword} {st.text}")
            if UI_WORDS_RE.search(clean):
                ctx.add("GHK-004", path, st.line, f"{st.keyword} {st.text}")
            # GHK-009: dos validaciones seguidas de la misma pantalla
            if m and m.validates_screen:
                same_step = last_validation_def == (m.step_def_ids[0] if m.step_def_ids else None)
                if last_validation_page == (m.current_page or "?") and same_step:
                    ctx.add("GHK-009", path, st.line, f"{st.keyword} {st.text}",
                            "Hay dos validaciones seguidas sobre la misma pantalla; únelas en una sola tabla.")
                last_validation_page = m.current_page or "?"
                last_validation_def = m.step_def_ids[0] if m.step_def_ids else None
            elif st.effective != "then":
                last_validation_page = "-"
            # GHK-008 celdas vacías (tablas de validación del Then)
            if st.table and st.effective == "then":
                for i, row in enumerate(st.table):
                    if any(c == "" for c in row):
                        ctx.add("GHK-008", path, (st.table_line or st.line) + i, "| " + " | ".join(row) + " |")
                        break
            # GHK-011 datos en duro
            if not CRITERIA_RE.search(st.text):
                blob = st.text + " " + " ".join(c for row in (st.table or [])[1:] for c in row)
                if hit := HARDCODED_RE.search(blob):
                    ctx.add("GHK-011", path, st.line, hit.group(0),
                            f"Dato en duro «{hit.group(0)}»: obténlo del Data Manager.")
            # GHK-012 idioma
            if is_spanish(clean):
                ctx.add("GHK-012", path, st.line, f"{st.keyword} {st.text}")
        if when_steps > 5:
            ctx.add("GHK-005", path, sc.line, f"Scenario: {sc.name}",
                    f"El escenario tiene {when_steps} pasos When/And (máximo recomendado: 5).")
        if is_spanish(sc.name):
            ctx.add("GHK-012", path, sc.line, f"{sc.kind}: {sc.name}")

    # GHK-006 escenarios con los mismos steps
    skeletons: dict[tuple, list[Scenario]] = {}
    for sc in ctx.relation.feature.scenarios:
        if sc.kind != "Scenario" or len(sc.steps) < 2:
            continue
        sk = tuple(re.sub(r"\d+", "#", re.sub(r"\"[^\"]*\"|'[^']*'", "\"_\"", s.text))
                   + ("|" + "|".join(",".join(r) for r in s.table) if s.table and not CRITERIA_RE.search(s.text) else "")
                   for s in sc.steps)
        skeletons.setdefault(sk, []).append(sc)
    for group in skeletons.values():
        if len(group) > 1 and len({tuple(s.text for s in g.steps) for g in group}) > 1:
            names = ", ".join(f"«{g.name}»" for g in group)
            ctx.add("GHK-006", path, group[1].line, f"Scenario: {group[1].name}",
                    f"{len(group)} escenarios tienen los mismos steps y solo cambian los datos: {names}.")

    # GHK-010: items poco descriptivos
    for v in ctx.relation.validations:
        for item, line in v.items:
            if not item.startswith("<") and ("_" in item or re.search(r"\w-\w", item)):
                ctx.add("GHK-010", path, line, f"| {item} |", f"El elemento «{item}» usa «_» o «-».")


@check("feature")
def step_resolution(ctx: RuleContext) -> None:
    path = ctx.relation.feature.path
    seen = set()
    manual = {sc.name for sc in ctx.relation.feature.scenarios if _is_manual(_tags(ctx, sc))}
    for m in ctx.relation.matches:
        if (m.line, m.status) in seen:
            continue
        seen.add((m.line, m.status))
        sev = "LOW" if m.scenario in manual else None
        note = " (escenario @manual: no se ejecuta)" if sev else ""
        if m.status == "undefined":
            best, ratio, literal = closest_step(ctx.ix, m.text)
            msg = "Ninguna step definition coincide con este texto" + note + "."
            if best and ratio >= 0.72:
                msg += f" ¿Quisiste decir «{best}»? (similitud {int(ratio * 100)} %)"
            ctx.add("GHK-013", path, m.line, f"{m.keyword} {m.text}", msg, severity=sev)
            if best and literal and ratio >= 0.85:
                ctx.findings[-1].suggested_code = f"{m.keyword} {best}"
        elif m.status == "ambiguous":
            ctx.add("GHK-014", path, m.line, f"{m.keyword} {m.text}",
                    "Coincide con varias step definitions: " + ", ".join(m.step_def_ids[:4]) + note, severity=sev)


def closest_step(ix, text: str) -> tuple[str | None, float, bool]:
    """Step existente más parecido (texto legible, similitud 0-1, si es literal y se puede sustituir)."""
    target = text.lower()
    best: tuple[str | None, float, bool] = (None, 0.0, False)
    for cs in ix.steps:
        lit = literal_text(cs.step.pattern, cs.step.kind)
        cand = lit if lit is not None else readable(cs.step.pattern)
        sm = SequenceMatcher(None, target, cand.lower())
        if sm.real_quick_ratio() <= best[1] or sm.quick_ratio() <= best[1]:
            continue
        r = sm.ratio()
        if r > best[1]:
            best = (cand, r, lit is not None)
    return best


@check("feature")
def screen_validation_coverage(ctx: RuleContext) -> None:
    path = ctx.relation.feature.path
    cache: dict[str, tuple[set[str] | None, bool]] = {}
    for v in ctx.relation.validations:
        if not v.page:
            continue
        if v.page not in cache:
            text = ctx.text(v.page)
            method = next((mt for mt in jsparse.extract_methods(text) if mt.name == "_screenValidation"), None)
            if method is None:
                cache[v.page] = (None, False)
            else:
                lower = "toLowerCase" in method.body
                cases = {c if not lower else c.lower()
                         for c in re.findall(r"case\s*['\"`]([^'\"`]+)['\"`]\s*:", method.body)}
                cache[v.page] = (cases, lower)
        cases, lower = cache[v.page]
        sc_manual = any(_is_manual(_tags(ctx, sc)) for sc in ctx.relation.feature.scenarios if sc.name == v.scenario)
        if sc_manual:
            continue
        if cases is None:
            ctx.add("GHK-015", path, v.step.line, f"{v.step.keyword} {v.step.text}",
                    f"La page {v.page} no implementa _screenValidation.")
            continue
        for item, line in v.items:
            key = item.lower() if lower else item
            if "<" in key or key in cases:
                continue
            page_name = v.page.rsplit('/', 1)[-1]
            elsewhere = sorted(ctx.ix.screen_cases.get(item.lower(), set()) - {v.page})
            if elsewhere:
                ctx.add("GHK-015", path, line, f"| {item} |",
                        f"«{item}» no está en {page_name}, pero sí en {elsewhere[0].rsplit('/', 1)[-1]}"
                        + (f" y {len(elsewhere) - 1} más" if len(elsewhere) > 1 else "")
                        + ". Verifica que la pantalla actual sea la correcta.", severity="LOW")
            else:
                ctx.add("GHK-015", path, line, f"| {item} |",
                        f"«{item}» no existe como case en _screenValidation de {page_name} ni en ninguna otra page.")


# ─── Tags ────────────────────────────────────────────────────────────────────


@check("feature")
def tags(ctx: RuleContext) -> None:
    doc = ctx.relation.feature
    path = doc.path
    ids: list[tuple[str, int]] = []
    smoke = 0
    for sc in doc.scenarios:
        tg = _tags(ctx, sc)
        line = _tag_line(sc)
        sid = scenario_id(sc.tags)
        if sid:
            ids.append((sid, _tag_line(sc, sid)))
            if "-" in sid:
                ctx.add("TAG-002", path, _tag_line(sc, sid), sid)
        else:
            bad = next((t for t in sc.tags if ID_LIKE_RE.match(t) and t.lower() not in {x.lower() for x in KNOWN_TAGS}), None)
            ctx.add("TAG-001", path, line, bad or f"Scenario: {sc.name}",
                    f"El identificador «{bad}» no cumple el formato de 2-5 letras + 3 números." if bad
                    else f"«{sc.name}» no tiene tag identificador.")
        if not any(COUNTRY_RE.match(t) for t in tg):
            ctx.add("TAG-005", path, line, f"Scenario: {sc.name}")
        if "@web-done" in tg and (missing := DEVICE - tg):
            ctx.add("TAG-006", path, _tag_line(sc, "@web-done"), "@web-done",
                    "Faltan los tags: " + " ".join(sorted(missing)))
        manual = _is_manual(tg)
        if manual and "@web-done" in tg:
            ctx.add("TAG-007", path, _tag_line(sc, "@web-done"), "@manual + @web-done")
        if (tg & EXCLUSION) and not any(JIRA_RE.match(t) for t in tg):
            ctx.add("TAG-008", path, line, " ".join(sorted(tg & EXCLUSION)))
        has_test = "@test" in tg or "@backend(test)" in tg
        has_art = "@artichoke" in tg or "@backend(artichoke)" in tg
        if has_test and has_art:
            ctx.add("TAG-009", path, line, "@backend(test) + @backend(artichoke)")
        if "@test" in tg:
            ctx.add("TAG-010", path, _tag_line(sc, "@test"), "@test")
        if "@glomo" in sc.tags:
            ctx.add("TAG-011", path, _tag_line(sc, "@glomo"), "@glomo")
        if "@smokeTest" in tg:
            smoke += 1
        steps = (doc.background.steps if doc.background else []) + sc.steps
        uses_dm = any(CRITERIA_RE.search(s.text) for s in steps) or any(
            any("data-manager" in i for i in m.step_def_ids) for m in ctx.relation.matches if m.scenario == sc.name)
        if not uses_dm and "@no-data-manager" not in tg:
            ctx.add("TAG-014", path, line, f"Scenario: {sc.name}", f"«{sc.name}» no usa criteria y no tiene @no-data-manager.")
        missing = []
        if not tg & DEVICE:
            missing.append("dispositivo (@web/@ios/@android)")
        if not (has_test or has_art or any(t.startswith("@backend(") for t in tg)):
            missing.append("entorno (@backend(test))")
        if "@vbank" not in tg and "@!vbank" not in tg:
            missing.append("vBank (@vbank/@!vbank)")
        if missing:
            ctx.add("TAG-017", path, line, f"Scenario: {sc.name}", "Faltan tags de: " + ", ".join(missing))
            add = []
            if not tg & DEVICE:
                add += ["@ios", "@android", "@web"]
            if not (has_test or has_art or any(t.startswith("@backend(") for t in tg)):
                add.append("@backend(test)")
            if "@vbank" not in tg and "@!vbank" not in tg:
                add.append("@vbank" if sid and ctx.ix.recordings_for(sid) else "@!vbank")
            ctx.findings[-1].suggested_code = " ".join(add)
        if any(t.startswith("@ANA_EVENT") for t in tg) and not any(
                "analytics interceptor service is initiated" in s.text for s in steps):
            ctx.add("TAG-018", path, sc.line, f"Scenario: {sc.name}")
        _recordings(ctx, sc, tg, sid, manual)

    # TAG-003 consecutivos / únicos y TAG-004 un prefijo
    if ids:
        prefixes: dict[str, list[tuple[int, int, str]]] = {}
        for tag, line in ids:
            m = re.match(r"^@(.*?)-?(\d{3})$", tag)
            if m:
                prefixes.setdefault(m.group(1).upper(), []).append((int(m.group(2)), line, tag))
        if len(prefixes) > 1:
            ctx.add("TAG-004", path, doc.line, " ".join(f"@{p}…" for p in prefixes),
                    "El archivo combina los prefijos: " + ", ".join(sorted(prefixes)))
        for prefix, nums in prefixes.items():
            values = [n for n, _, _ in nums]
            dups = sorted({n for n in values if values.count(n) > 1})
            for n, line, tag in nums:
                if n in dups:
                    ctx.add("TAG-003", path, line, tag, f"El identificador {tag} está repetido.")
            uniq = sorted(set(values))
            gaps = [f"{prefix}{n:03d}" for n in range(uniq[0], uniq[-1] + 1) if n not in set(uniq)]
            if gaps:
                ctx.add("TAG-003", path, nums[0][1], f"@{prefix}{uniq[0]:03d}…@{prefix}{uniq[-1]:03d}",
                        "Faltan identificadores en la secuencia: " + ", ".join(gaps[:10]))
            if values != sorted(values) and not dups:
                ctx.add("TAG-003", path, nums[0][1], " ".join(t for _, _, t in nums[:6]),
                        "Los identificadores no están en orden consecutivo dentro del archivo.")

    n = len(doc.scenarios)
    if n and smoke == 0:
        ctx.add("TAG-012", path, doc.line, f"Feature: {doc.name}")
    elif n and smoke > max(1, math.ceil(n * 0.10)):
        ctx.add("TAG-013", path, doc.line, f"{smoke} de {n} escenarios con @smokeTest",
                f"{smoke} de {n} escenarios tienen @smokeTest (máximo recomendado: {max(1, math.ceil(n * 0.10))}).")
    for i, tag in enumerate(doc.tags):
        if tag.lower() in {t.lower() for t in KNOWN_TAGS} or COUNTRY_RE.match(tag) or ID_TAG_RE.match(tag):
            continue
        if "(" in tag or tag.startswith(("@JIRA.", "@XRAY.")):
            continue
        if not re.match(r"^@[a-z][a-zA-Z0-9]*$", tag):
            ctx.add("TAG-015", path, doc.tag_lines[0] if doc.tag_lines else doc.line, tag)


VBANK_NAME_MAX = 128   # vBank recorta «<id>-<título>» a 128 caracteres


def recording_matches(sid: str | None, sc: Scenario, title_slug: str) -> bool:
    """¿La carpeta de grabación corresponde al nombre actual del escenario? (mismo algoritmo que vBank)."""
    if not sid:
        return False
    prefix = id_slug(sid) + "-"
    recorded = prefix + title_slug
    names = [sc.name]
    if sc.kind == "Scenario Outline":   # un nombre por fila de Examples
        names = []
        for ex in sc.examples:
            for row in ex.rows:
                values = dict(zip(ex.header, row))
                names.append(re.sub(r"<([^>]+)>", lambda m: values.get(m.group(1), m.group(0)), sc.name))
    return any(recorded in {(prefix + vbank_slug(n))[:VBANK_NAME_MAX], (prefix + vbank_slug(n))[:VBANK_NAME_MAX].rstrip("-")}
               for n in names)


def _recordings(ctx: RuleContext, sc: Scenario, tg: set[str], sid: str | None, manual: bool) -> None:
    path = ctx.relation.feature.path
    line = _tag_line(sc)
    recs = ctx.ix.recordings_for(sid) if sid else []
    if "@vbank" in tg and "@!vbank" in tg:
        ctx.add("TAG-016", path, _tag_line(sc, "@vbank"), "@vbank + @!vbank", "El escenario tiene @vbank y @!vbank a la vez.")
    elif "@vbank" in tg and sid and not recs:
        ctx.add("TAG-016", path, _tag_line(sc, "@vbank"), "@vbank",
                f"No hay grabaciones en vbank/ para {sid} ({id_slug(sid)}-…): graba el escenario o usa @!vbank.")
    if not recs:
        return
    if manual:
        ctx.add("REC-003", path, line, sid or "", f"{sid} es @manual y tiene {len(recs)} grabación(es).")
    valid = [r for r in recs if recording_matches(sid, sc, r.title_slug)]
    expected = (sum(len(ex.rows) for ex in sc.examples) or 1) if sc.kind == "Scenario Outline" else 1
    if not valid:
        ctx.add("REC-001", path, sc.line, f"Scenario: {sc.name}",
                f"La grabación existente ({recs[0].folder.rsplit('/', 1)[-1][:70]}…) no corresponde al nombre actual "
                f"del escenario: hay que regrabar.")
    if len(recs) > expected:
        ctx.add("REC-002", path, sc.line, sid or "",
                f"Hay {len(recs)} carpetas de grabación para {sid} (se esperaba {expected}): "
                + ", ".join(r.folder.rsplit('/', 1)[-1][:50] for r in recs[:4]))

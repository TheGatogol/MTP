"""Parser de archivos .feature, pensado para reportar líneas exactas.

No es un parser Gherkin completo, pero cubre lo que usa el framework: tags, Feature, Background,
Scenario / Scenario Outline, Examples, steps, tablas y docstrings.
"""
import re

from app.domain.models import Examples, FeatureDoc, Scenario, Step

STEP_KEYWORDS = ("Given", "When", "Then", "And", "But", "*")
SCENARIO_RE = re.compile(r"^\s*(Scenario Outline|Scenario Template|Scenario|Example|Background)\s*:\s*(.*)$")
FEATURE_RE = re.compile(r"^\s*Feature\s*:\s*(.*)$")
EXAMPLES_RE = re.compile(r"^\s*(Examples|Scenarios)\s*:")
STEP_RE = re.compile(r"^\s*(Given|When|Then|And|But|\*)\s+(.*)$")
ID_TAG_RE = re.compile(r"^@(?:[A-Z]+_)*[A-Z]{2,5}-?\d{3}$")


def split_tags(line: str) -> list[str]:
    line = line.split(" #")[0]
    return [t for t in line.split() if t.startswith("@")]


def table_cells(line: str) -> list[str]:
    raw = line.strip()
    if raw.startswith("|"):
        raw = raw[1:]
    if raw.endswith("|"):
        raw = raw[:-1]
    return [c.strip() for c in re.split(r"(?<!\\)\|", raw)]


def scenario_id(tags: list[str]) -> str | None:
    for t in tags:
        if ID_TAG_RE.match(t):
            return t
    return None


def parse_feature(text: str, path: str = "") -> FeatureDoc:
    lines = text.split("\n")
    feature: FeatureDoc | None = None
    pending_tags: list[str] = []
    pending_tag_lines: list[int] = []
    current: Scenario | None = None
    current_examples: Examples | None = None
    last_step: Step | None = None
    last_effective = "given"
    in_docstring = False
    scenarios: list[Scenario] = []
    background: Scenario | None = None

    for idx, raw in enumerate(lines, 1):
        stripped = raw.strip()
        if in_docstring:
            if stripped.startswith('"""') or stripped.startswith("```"):
                in_docstring = False
            continue
        if not stripped or stripped.startswith("#"):
            continue
        if stripped.startswith('"""') or stripped.startswith("```"):
            in_docstring = True
            continue
        if stripped.startswith("@"):
            pending_tags += split_tags(stripped)
            pending_tag_lines.append(idx)
            continue
        if m := FEATURE_RE.match(raw):
            feature = FeatureDoc(path=path, name=m.group(1).strip(), line=idx,
                                 tags=pending_tags, tag_lines=pending_tag_lines)
            pending_tags, pending_tag_lines = [], []
            continue
        if m := SCENARIO_RE.match(raw):
            kind = {"Scenario Template": "Scenario Outline", "Example": "Scenario"}.get(m.group(1), m.group(1))
            current = Scenario(kind=kind, name=m.group(2).strip(), line=idx,
                               tags=pending_tags, tag_lines=pending_tag_lines)
            pending_tags, pending_tag_lines = [], []
            current_examples, last_step, last_effective = None, None, "given"
            if kind == "Background":
                background = current
            else:
                scenarios.append(current)
            continue
        if EXAMPLES_RE.match(raw) and current is not None:
            current_examples = Examples(line=idx, tags=pending_tags)
            pending_tags, pending_tag_lines = [], []
            current.examples.append(current_examples)
            last_step = None
            continue
        if stripped.startswith("|"):
            cells = table_cells(stripped)
            if current_examples is not None and last_step is None:
                if not current_examples.header:
                    current_examples.header = cells
                else:
                    current_examples.rows.append(cells)
            elif last_step is not None:
                if last_step.table is None:
                    last_step.table, last_step.table_line = [], idx
                last_step.table.append(cells)
            continue
        if (m := STEP_RE.match(raw)) and current is not None:
            kw = m.group(1)
            effective = kw.lower() if kw in ("Given", "When", "Then") else last_effective
            last_effective = effective
            last_step = Step(keyword=kw, effective=effective, text=m.group(2).strip(), line=idx)
            current.steps.append(last_step)
            continue
        # Descripción libre de la feature/escenario: se ignora.

    if feature is None:
        feature = FeatureDoc(path=path, name="(sin Feature)", line=1)
    feature.background = background
    feature.scenarios = scenarios
    return feature


def expand_outline_text(text: str, scenario: Scenario) -> str:
    """Sustituye <param> por el valor de la primera fila de Examples (para hacer match con steps)."""
    if "<" not in text or not scenario.examples:
        return text
    ex = scenario.examples[0]
    if not ex.rows:
        return text
    values = dict(zip(ex.header, ex.rows[0]))
    return re.sub(r"<([^>]+)>", lambda m: values.get(m.group(1), m.group(0)), text)

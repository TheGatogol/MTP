"""Relaciona un .feature con su código: step definitions, navigations y pages.

Función pura (no escribe nada): la usan las skills «relacionar» y «validar».
"""
import posixpath
import re
from dataclasses import dataclass, field

from app.domain.models import FeatureDoc, RelatedFile, Scenario, Step, StepDef, StepMatch
from app.framework import jsparse
from app.framework.gherkin import expand_outline_text, parse_feature
from app.framework.indexer import FrameworkIndex
from app.framework.stepmatch import captured_args

NAV_CALL_RE = re.compile(r"navigation((?:\.[A-Za-z_$][\w$]*)+)\.(go|assert|attempt|deeplink)\s*\(")
ANY_NAV_CALL_RE = re.compile(r"\.(go|attempt|deeplink)\s*\(")
VALIDATION_HINT_RE = re.compile(r"validateScreen|screenValidation")


@dataclass
class Validation:
    scenario: str
    step: Step
    page: str | None
    items: list[tuple[str, int]]          # (item, línea)


@dataclass
class Relation:
    feature: FeatureDoc
    matches: list[StepMatch] = field(default_factory=list)
    related: list[RelatedFile] = field(default_factory=list)
    used_defs: dict[str, list[StepDef]] = field(default_factory=dict)
    validations: list[Validation] = field(default_factory=list)
    used_methods: dict[str, set[str]] = field(default_factory=dict)   # page/navigation -> métodos que usa el feature

    def files(self, kind: str | None = None, role: str | None = None) -> list[str]:
        return [r.path for r in self.related if (kind is None or r.kind == kind) and (role is None or r.role == role)]


def _case_block(body: str, value: str) -> str | None:
    m = re.search(rf"case\s*['\"`]{re.escape(value)}['\"`]\s*:", body, re.I)
    if not m:
        return None
    nxt = re.compile(r"\bcase\s*['\"`]|\bdefault\s*:").search(body, m.end())
    return body[m.end(): nxt.start() if nxt else len(body)]


def nav_calls(body: str, args: list[str]) -> tuple[list[str], bool]:
    """Navegaciones que ejecuta el step y si se pudieron determinar con certeza."""
    def scan(code: str) -> tuple[list[str], bool]:
        calls = [c[0].lstrip(".") for c in NAV_CALL_RE.findall(code)]
        generic = len(ANY_NAV_CALL_RE.findall(code))
        return calls, generic <= len(calls) and "navigation[" not in code

    calls, certain = scan(body)
    if len(set(calls)) <= 1 or "switch" not in body:
        return calls, certain
    for arg in args:
        block = _case_block(body, arg.lower()) or _case_block(body, arg)
        if block is not None:
            return scan(block)
    return [], False


def _used_pages(ix: FrameworkIndex, step_file: str, body: str) -> list[str]:
    out = []
    for imp in jsparse.parse_imports(ix.read(step_file)):
        target = ix.resolve_module(step_file, imp.src)
        if not target or "/pages/" not in target and "/components/" not in target:
            continue
        if imp.default and re.search(rf"\b{re.escape(imp.default)}\.", body):
            out.append(target)
    return out


def _folder(rel: str) -> str:
    """Carpeta funcional: lib/features/pages/about/aboutInfo.js -> about."""
    parts = rel.split("/")
    for anchor in ("pages", "navigation", "step_definitions", "components", "epics"):
        if anchor in parts:
            i = parts.index(anchor)
            return parts[i + 1].strip().lower() if i + 2 < len(parts) else ""
    return ""


def relate(ix: FrameworkIndex, feature_path: str, text: str | None = None) -> Relation:
    text = ix.read(feature_path) if text is None else text
    doc = parse_feature(text, feature_path)
    rel = Relation(feature=doc)
    roles: dict[str, tuple[str, str]] = {}   # path -> (reason, role hint)
    epic = _folder(feature_path)
    stem = posixpath.basename(feature_path).rsplit(".", 1)[0].lower()
    principal_pages: set[str] = set()

    def add(path: str, reason: str) -> None:
        if path not in roles:
            roles[path] = (reason, "")

    scenarios: list[Scenario] = doc.scenarios
    for sc in scenarios:
        steps = (doc.background.steps if doc.background else []) + sc.steps
        current_nav: str | None = None
        for st in steps:
            text_ = expand_outline_text(st.text, sc)
            found = ix.match_step(text_)
            sm = StepMatch(scenario=sc.name, line=st.line, keyword=st.keyword, text=st.text,
                           status="ok" if len(found) == 1 else ("undefined" if not found else "ambiguous"),
                           step_def_ids=[cs.step.id for cs, _ in found])
            if found:
                cs, m = found[0]
                sd = cs.step
                defs = rel.used_defs.setdefault(sd.file, [])
                if all(d.id != sd.id for d in defs):
                    defs.append(sd)
                add(sd.file, "Step definitions usadas por el feature")
                navs, certain = nav_calls(sd.body, captured_args(m))
                sm.navigations = navs
                if not certain:
                    current_nav = None
                for dotted in navs:
                    nav_file = ix.resolve_navigation(dotted)
                    if not nav_file:
                        continue
                    add(nav_file, f"Navegación navigation.{dotted}")
                    current_nav = nav_file
                    if page := ix.navigation_page(nav_file):
                        add(page, f"Page de la navegación {dotted}")
                for page in _used_pages(ix, sd.file, sd.body):
                    add(page, f"Page usada directamente en el step «{clip_step(st.text)}»")
                if VALIDATION_HINT_RE.search(sd.body):
                    sm.validates_screen = True
                    page = ix.navigation_page(current_nav) if current_nav else None
                    sm.current_page = page
                    if page:
                        principal_pages.add(page)
                    if st.table and len(st.table) > 1:
                        header = [h.lower() for h in st.table[0]]
                        col = header.index("item") if "item" in header else 0
                        items = [(row[col], (st.table_line or st.line) + i)
                                 for i, row in enumerate(st.table[1:], 1) if col < len(row)]
                        rel.validations.append(Validation(sc.name, st, page, items))
            if not found:
                current_nav = None
            rel.matches.append(sm)

    for path, (reason, _) in roles.items():
        kind = ix.kind_of(path)
        folder = _folder(path)
        principal = (
            folder in (epic, stem)
            or path in principal_pages
            or (kind == "navigation" and ix.navigation_page(path) in principal_pages)
        )
        rel.related.append(RelatedFile(
            path=path, kind=kind, role="principal" if principal else "compartido", reason=reason,
            lines=ix.read(path).count("\n") + 1,
        ))
    rel.used_methods = _used_methods(ix, rel)
    order = {"step_definition": 0, "navigation": 1, "page": 2, "component": 3, "other": 4}
    rel.related.sort(key=lambda r: (r.role != "principal", order.get(r.kind, 9), r.path))
    rel.related.insert(0, RelatedFile(path=feature_path, kind="feature", role="principal",
                                      reason="Archivo seleccionado", lines=text.count("\n") + 1))
    return rel


def _used_methods(ix: FrameworkIndex, rel: Relation) -> dict[str, set[str]]:
    """Métodos de pages/navigations que ejecuta el feature (llamados desde sus steps y navigations)."""
    used: dict[str, set[str]] = {}
    navs = [r.path for r in rel.related if r.kind == "navigation"]
    sources = [(f, [d.body for d in defs]) for f, defs in rel.used_defs.items()] + [(n, [ix.read(n)]) for n in navs]
    for file, bodies in sources:
        for imp in jsparse.parse_imports(ix.read(file)):
            target = ix.resolve_module(file, imp.src)
            if not target or not imp.default:
                continue
            for body in bodies:
                names = re.findall(rf"\b{re.escape(imp.default)}\.([\w$]+)\s*\(", body)
                if names:
                    used.setdefault(target, set()).update(names)
    for n in navs:
        used.setdefault(n, set()).add("go_impl")
    return used


def clip_step(text: str, size: int = 50) -> str:
    return text if len(text) <= size else text[: size - 1] + "…"

"""Mapa de uso inverso: qué features usan cada archivo JS (steps, pages, navigations, components).

Se construye una vez en segundo plano (≈25 s: empareja todos los steps de todos los features) y se reutiliza.
"""
import logging
import re
import threading
import time

from app.domain.models import FeatureDoc, RelatedFile, StepDef
from app.framework import jsparse
from app.framework.gherkin import expand_outline_text, parse_feature
from app.framework.indexer import FrameworkIndex
from app.framework.relate import Relation
from app.framework.stepmatch import captured_args

CASE_RE = re.compile(r"\bcase\s*['\"`]([^'\"`]+)['\"`]\s*:|\bdefault\s*:")

log = logging.getLogger(__name__)
JS_KINDS = ("step_definition", "page", "navigation", "component")


class UsageMap:
    def __init__(self) -> None:
        self.state = "idle"
        self.def_features: dict[str, set[str]] = {}
        self.def_args: dict[str, dict[str, set[str]]] = {}   # def -> feature -> argumentos usados (minúsculas)
        self.nav_dotted: dict[str, set[str]] = {}
        self._lock = threading.Lock()

    def build(self, ix: FrameworkIndex) -> None:
        with self._lock:
            if self.state == "ready":
                return
            self.state = "building"
            t0 = time.perf_counter()
            def_features: dict[str, set[str]] = {}
            def_args: dict[str, dict[str, set[str]]] = {}
            for path in ix.features:
                doc = parse_feature(ix.read(path), path)
                for sc in doc.scenarios:
                    steps = (doc.background.steps if doc.background else []) + sc.steps
                    for st in steps:
                        for cs, m in ix.match_step(expand_outline_text(st.text, sc)):
                            def_features.setdefault(cs.step.id, set()).add(path)
                            args = def_args.setdefault(cs.step.id, {}).setdefault(path, set())
                            args.update(a.lower() for a in captured_args(m))
            nav_dotted: dict[str, set[str]] = {}

            def walk(index_file: str, prefix: str, depth: int = 0) -> None:
                if depth > 6:
                    return
                for name, target in ix.exports.get(index_file, {}).items():
                    if target.endswith("index.js"):
                        walk(target, f"{prefix}{name}.", depth + 1)
                    else:
                        nav_dotted.setdefault(target, set()).add(prefix + name)

            walk("lib/features/navigation/index.js", "")
            self.def_features, self.def_args, self.nav_dotted = def_features, def_args, nav_dotted
            self.state = "ready"
            log.info("Mapa de uso: %s steps usados, %.1f s", len(def_features), time.perf_counter() - t0)

    def reset(self) -> None:
        self.state = "idle"

    def defs_using(self, ix: FrameworkIndex, path: str) -> list[tuple[StepDef, set[str] | None]]:
        """Step definitions que usan el archivo (directamente o a través de su navigation)."""
        kind = ix.kind_of(path)
        targets = {path}
        if kind == "component":
            targets |= {p for p in ix.importers.get(path, set()) if ix.kind_of(p) == "page"}
        navs = {path} if kind == "navigation" else {n for n in self.nav_dotted if ix.navigation_page(n) in targets}
        dotted = [d for n in navs for d in self.nav_dotted.get(n, ())]
        imports_cache: dict[str, list[str]] = {}
        out: list[tuple[StepDef, set[str] | None]] = []
        if kind == "step_definition":
            return [(sd, None) for sd in ix.step_by_id.values() if sd.file == path]
        for sd in ix.step_by_id.values():
            if sd.file not in imports_cache:
                imports_cache[sd.file] = [imp.default for imp in jsparse.parse_imports(ix.read(sd.file))
                                          if imp.default and ix.resolve_module(sd.file, imp.src) in targets]
            refs = [f"navigation.{d}." for d in dotted] + [f"{local}." for local in imports_cache[sd.file]]
            positions = [m.start() for r in refs for m in re.finditer(re.escape(r), sd.body)]
            if positions:
                out.append((sd, _case_labels(sd.body, positions)))
        return out

    def features_for(self, ix: FrameworkIndex, path: str) -> dict[str, int]:
        """Features que usan el archivo → cuántas step definitions del archivo usan."""
        out: dict[str, int] = {}
        for sd, labels in self.defs_using(ix, path):
            for f in self.def_features.get(sd.id, ()):
                if labels is not None and not (self.def_args.get(sd.id, {}).get(f, set()) & labels):
                    continue   # el feature usa el step, pero nunca entra al case que llega a este archivo
                out[f] = out.get(f, 0) + 1
        return out


def _case_labels(body: str, positions: list[int]) -> set[str] | None:
    """Etiquetas de los case (minúsculas) que contienen las referencias; None si alguna está fuera de un switch."""
    marks = list(CASE_RE.finditer(body))
    if "switch" not in body or not marks:
        return None
    # Bloques: cada case va hasta el siguiente case/default con código (los case apilados comparten bloque).
    blocks: list[tuple[set[str], int, int]] = []
    pending: set[str] = set()
    for i, m in enumerate(marks):
        end = marks[i + 1].start() if i + 1 < len(marks) else len(body)
        if m.group(1):
            pending.add(m.group(1).lower())
        if body[m.end():end].strip():
            blocks.append((pending, m.end(), end))
            pending = set()
    labels: set[str] = set()
    for pos in positions:
        block = next((b for b in blocks if b[1] <= pos < b[2]), None)
        if block is None or not block[0]:
            return None   # referencia fuera de un case (o en default): la usan todos
        labels |= block[0]
    return labels


_usage = UsageMap()


def get_usage() -> UsageMap:
    return _usage


def relate_js(ix: FrameworkIndex, path: str) -> Relation:
    """Relación para analizar un JS: el archivo es el principal y los features que lo usan son su contexto."""
    usage = get_usage()
    usage.build(ix)
    kind = ix.kind_of(path)
    rel = Relation(feature=FeatureDoc(path="", name=path.rsplit("/", 1)[-1], line=1))
    rel.related.append(RelatedFile(path=path, kind=kind, role="principal", reason="Archivo seleccionado",
                                   lines=ix.read(path).count("\n") + 1))
    if kind == "step_definition":
        rel.used_defs = {path: [sd for sd in ix.step_by_id.values() if sd.file == path]}
    features = usage.features_for(ix, path)
    for f in sorted(features, key=lambda p: (-features[p], p)):
        rel.related.append(RelatedFile(path=f, kind="feature", role="compartido",
                                       reason=f"Usa este archivo ({features[f]} step definition(s))",
                                       lines=ix.read(f).count("\n") + 1))
    return rel

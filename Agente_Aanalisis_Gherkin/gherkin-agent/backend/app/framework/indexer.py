"""Índice en memoria del framework E2E: features, step definitions, imports/exports y grabaciones vBank.

Se construye una vez al arrancar (unos segundos) y se reconstruye bajo demanda desde la UI.
Todas las rutas son relativas a test/e2e y usan '/'.
"""
import logging
import os
import posixpath
import re
import threading
import time
from contextlib import contextmanager
from dataclasses import dataclass
from pathlib import Path

from app.config import get_settings
from app.domain.models import FeatureEntry, FileKind, StepDef
from app.framework import jsparse
from app.framework.gherkin import parse_feature, scenario_id
from app.framework.stepmatch import compile_step, matches
from app.utils.text import read_source

log = logging.getLogger(__name__)
HASH_SUFFIX_RE = re.compile(r"_[0-9a-f]{32}$")
REC_RE = re.compile(r"^(.*?-\d{3})-(.*)$")
NAV_PAGE_RE = re.compile(r"\bpage\s*:\s*['\"]([^'\"]+)['\"]")
NAV_PARENT_RE = re.compile(r"\bparentNavigation\s*:\s*['\"]([^'\"]+)['\"]")


def id_slug(tag: str) -> str:
    """@ANA_EVENT_PP001 -> ana-event-pp-001 (como nombra vBank las carpetas)."""
    s = tag.lstrip("@").replace("_", "-").lower()
    return re.sub(r"(?<=[a-z])-?(?=\d{3}$)", "-", s)


@dataclass
class CompiledStep:
    step: StepDef
    regex: re.Pattern


@dataclass
class Recording:
    folder: str
    title_slug: str
    files: int = -1


class FrameworkIndex:
    def __init__(self) -> None:
        self.state = "idle"
        self.error: str | None = None
        self.built_at: float | None = None
        self.build_ms = 0
        self.features: dict[str, FeatureEntry] = {}
        self.steps: list[CompiledStep] = []
        self.step_by_id: dict[str, StepDef] = {}
        self.bad_patterns: list[str] = []
        self.exports: dict[str, dict[str, str]] = {}
        self.importers: dict[str, set[str]] = {}
        self.recordings: dict[str, list[Recording]] = {}
        self.js_files: list[str] = []
        self.screen_cases: dict[str, set[str]] = {}   # case (minúsculas) -> pages
        self._texts: dict[str, tuple[float, str, str]] = {}
        self._lock = threading.Lock()

    # ─── Rutas ───────────────────────────────────────────────────────────────

    @property
    def root(self) -> Path:
        return get_settings().e2e_dir

    def abs(self, rel: str) -> Path:
        return self.root / rel

    def rel(self, path: Path) -> str:
        return path.relative_to(self.root).as_posix()

    def exists(self, rel: str) -> bool:
        return self.abs(rel).is_file()

    def read(self, rel: str) -> str:
        return self.read_with_newline(rel)[0]

    def read_with_newline(self, rel: str) -> tuple[str, str]:
        path = self.abs(rel)
        mtime = path.stat().st_mtime
        cached = self._texts.get(rel)
        if cached and cached[0] == mtime:
            return cached[1], cached[2]
        text, newline = read_source(path)
        self._texts[rel] = (mtime, text, newline)
        return text, newline

    def invalidate(self, rel: str) -> None:
        self._texts.pop(rel, None)

    @staticmethod
    def kind_of(rel: str) -> FileKind:
        if rel.endswith(".feature"):
            return "feature"
        for folder, kind in (("/step_definitions/", "step_definition"), ("/pages/", "page"),
                             ("/navigation/", "navigation"), ("/components/", "component")):
            if folder in f"/{rel}":
                return kind  # type: ignore[return-value]
        return "other"

    def resolve_module(self, from_rel: str, src: str) -> str | None:
        if not src.startswith("."):
            return None
        base = posixpath.normpath(posixpath.join(posixpath.dirname(from_rel), src))
        for cand in (base, base + ".js", base + "/index.js"):
            if self.exists(cand):
                return cand
        return None

    # ─── Construcción ────────────────────────────────────────────────────────

    def build(self) -> None:
        with self._lock:
            self.state, self.error = "building", None
            t0 = time.perf_counter()
            try:
                self._build()
                self.state = "ready"
            except Exception as e:  # noqa: BLE001 - se reporta en /api/health
                log.exception("Error construyendo el índice")
                self.state, self.error = "error", str(e)
            self.build_ms = int((time.perf_counter() - t0) * 1000)
            self.built_at = time.time()
            log.info("Índice: %s features, %s steps, %s archivos JS, %s ms",
                     len(self.features), len(self.steps), len(self.js_files), self.build_ms)

    def _build(self) -> None:
        features_dir = get_settings().features_dir
        if not features_dir.is_dir():
            raise FileNotFoundError(f"No existe la carpeta de features: {features_dir}")
        self._texts.clear()
        features, js_files = {}, []
        for dirpath, dirnames, filenames in os.walk(features_dir):
            dirnames[:] = [d for d in dirnames if d != "node_modules" and not d.startswith(".")]
            for fn in filenames:
                full = Path(dirpath) / fn
                if fn.endswith(".feature"):
                    rel = self.rel(full)
                    features[rel] = self._feature_entry(rel)
                elif fn.endswith(".js"):
                    js_files.append(self.rel(full))
        self.features = dict(sorted(features.items(), key=lambda kv: kv[0].lower()))
        self.js_files = sorted(js_files)

        steps, by_id, bad, exports, importers, cases = [], {}, [], {}, {}, {}
        for rel in self.js_files:
            text = self.read(rel)
            if "/step_definitions/" in f"/{rel}" or "/support/" in f"/{rel}":
                for i, raw in enumerate(jsparse.extract_step_defs(text)):
                    sd = StepDef(id=f"{rel}#{raw.line}", file=rel, line=raw.line, end_line=raw.end_line,
                                 keyword=raw.keyword, pattern=raw.pattern, kind=raw.kind, body=raw.body)
                    rx = compile_step(raw.pattern, raw.kind, raw.flags)
                    if rx is None:
                        bad.append(sd.id)
                        continue
                    steps.append(CompiledStep(sd, rx))
                    by_id[sd.id] = sd
            if rel.endswith("index.js"):
                exp: dict[str, str] = {}
                for name, src in jsparse.EXPORT_NS_RE.findall(text) + jsparse.EXPORT_DEFAULT_RE.findall(text):
                    if target := self.resolve_module(rel, src):
                        exp[name] = target
                exports[rel] = exp
            if "_screenValidation" in text and "/pages/" in f"/{rel}":
                for mt in jsparse.extract_methods(text):
                    if mt.name == "_screenValidation":
                        for c in re.findall(r"case\s*['\"`]([^'\"`]+)['\"`]\s*:", mt.body):
                            cases.setdefault(c.lower(), set()).add(rel)
            for imp in jsparse.parse_imports(text):
                if target := self.resolve_module(rel, imp.src):
                    importers.setdefault(target, set()).add(rel)
        self.steps, self.step_by_id, self.bad_patterns = steps, by_id, bad
        self.exports, self.importers, self.screen_cases = exports, importers, cases
        self.recordings = self._scan_recordings()

    def _feature_entry(self, rel: str) -> FeatureEntry:
        doc = parse_feature(self.read(rel), rel)
        ids = [sid for s in doc.scenarios if (sid := scenario_id(s.tags))]
        parts = rel.split("/")
        epic = parts[-2] if len(parts) >= 2 else ""
        tags = sorted({t for s in doc.scenarios for t in s.tags} | set(doc.tags))
        return FeatureEntry(path=rel, name=doc.name, file_name=parts[-1], epic=epic.strip(),
                            tags=tags[:60], scenario_ids=ids, scenarios=len(doc.scenarios))

    def _scan_recordings(self) -> dict[str, list[Recording]]:
        out: dict[str, list[Recording]] = {}
        vbank = self.root / "vbank"
        if not vbank.is_dir():
            return out
        for feat in os.scandir(vbank):
            if not feat.is_dir():
                continue
            for sc in os.scandir(feat.path):
                if not sc.is_dir():
                    continue
                name = HASH_SUFFIX_RE.sub("", sc.name)
                if m := REC_RE.match(name):
                    out.setdefault(m.group(1), []).append(Recording(f"vbank/{feat.name}/{sc.name}", m.group(2)))
        return out

    # ─── Consultas ───────────────────────────────────────────────────────────

    @contextmanager
    def step_overlay(self, overrides: dict[str, str]):
        """Usa temporalmente las step definitions de `overrides` (código corregido aún no aplicado)."""
        files = {p for p in overrides if "/step_definitions/" in f"/{p}"}
        if not files:
            yield
            return
        saved = self.steps
        steps = [cs for cs in saved if cs.step.file not in files]
        for path in files:
            for raw in jsparse.extract_step_defs(overrides[path]):
                rx = compile_step(raw.pattern, raw.kind, raw.flags)
                if rx:
                    sd = StepDef(id=f"{path}#{raw.line}", file=path, line=raw.line, end_line=raw.end_line,
                                 keyword=raw.keyword, pattern=raw.pattern, kind=raw.kind, body=raw.body)
                    steps.append(CompiledStep(sd, rx))
        self.steps = steps
        try:
            yield
        finally:
            self.steps = saved

    def match_step(self, text: str) -> list[tuple[CompiledStep, re.Match]]:
        out = []
        for cs in self.steps:
            if m := matches(cs.regex, cs.step.kind, text):
                out.append((cs, m))
        return out

    def resolve_navigation(self, dotted: str) -> str | None:
        """'about.aboutInfoPage' -> lib/features/navigation/about/aboutInfoPage.js"""
        current = "lib/features/navigation/index.js"
        for seg in dotted.split("."):
            exp = self.exports.get(current)
            if exp is None or seg not in exp:
                return None
            current = exp[seg]
        return current if current.endswith(".js") else None

    def navigation_page(self, nav_rel: str) -> str | None:
        text = self.read(nav_rel)
        m = NAV_PAGE_RE.search(text)
        if not m:
            return None
        base = f"lib/features/pages/{m.group(1)}"
        for cand in (base + ".js", base + "/index.js", base):
            if self.exists(cand):
                return cand
        return None

    def navigation_parent(self, nav_rel: str) -> str | None:
        m = NAV_PARENT_RE.search(self.read(nav_rel))
        if not m:
            return None
        base = f"lib/features/navigation/{m.group(1)}"
        for cand in (base + ".js", base + "/index.js"):
            if self.exists(cand):
                return cand
        return None

    def recordings_for(self, tag: str) -> list[Recording]:
        recs = self.recordings.get(id_slug(tag), [])
        for r in recs:
            if r.files < 0:
                try:
                    r.files = sum(1 for e in os.scandir(self.abs(r.folder)) if e.is_file())
                except OSError:
                    r.files = 0
        return recs

    def js_entries(self) -> list[dict]:
        out = []
        for rel in self.js_files:
            kind = self.kind_of(rel)
            if kind not in ("step_definition", "page", "navigation", "component"):
                continue
            parts = rel.split("/")
            anchor = next((i for i, p in enumerate(parts) if p in ("step_definitions", "pages", "navigation", "components")), 0)
            folder = "/".join(parts[anchor + 1:-1]) or "(raíz)"
            out.append({"path": rel, "fileName": parts[-1], "kind": kind, "folder": folder})
        return out

    def search(self, q: str, limit: int = 50) -> list[FeatureEntry]:
        from app.utils.text import fold
        terms = fold(q).split()
        if not terms:
            return list(self.features.values())[:limit]
        scored = []
        for f in self.features.values():
            hay = fold(" ".join([f.path, f.name, " ".join(f.scenario_ids), " ".join(f.tags)]))
            if all(t in hay for t in terms):
                name = fold(f.file_name + " " + f.name)
                scored.append((0 if all(t in name for t in terms) else 1, f.path, f))
        scored.sort(key=lambda x: (x[0], x[1]))
        return [s[2] for s in scored[:limit]]


_index = FrameworkIndex()


def get_index() -> FrameworkIndex:
    return _index


def build_in_background() -> None:
    def run() -> None:
        from app.framework.usage import get_usage
        get_usage().reset()
        _index.build()
        if _index.state == "ready":
            get_usage().build(_index)

    threading.Thread(target=run, name="framework-index", daemon=True).start()

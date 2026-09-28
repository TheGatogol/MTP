from fastapi import APIRouter, HTTPException, Query

from app.framework.gherkin import parse_feature
from app.framework.indexer import get_index

router = APIRouter(prefix="/api", tags=["features"])


@router.get("/features")
def list_features(q: str = "", limit: int = Query(60, le=1000)):
    ix = get_index()
    items = ix.search(q, limit)
    return {"total": len(ix.features), "items": [f.dump() for f in items], "state": ix.state}


@router.get("/js")
def list_js():
    """Archivos JS analizables: step definitions, pages, navigations y components."""
    ix = get_index()
    return {"items": ix.js_entries(), "state": ix.state}


@router.get("/features/epics")
def epics():
    ix = get_index()
    counts: dict[str, int] = {}
    for f in ix.features.values():
        counts[f.epic] = counts.get(f.epic, 0) + 1
    return [{"epic": k, "count": v} for k, v in sorted(counts.items(), key=lambda kv: kv[0].lower())]


@router.get("/features/detail")
def feature_detail(path: str):
    ix = get_index()
    if path not in ix.features:
        raise HTTPException(404, "Feature no encontrado")
    text = ix.read(path)
    doc = parse_feature(text, path)
    return {"entry": ix.features[path].dump(), "content": text, "scenarios": [
        {"name": s.name, "line": s.line, "kind": s.kind, "tags": s.tags} for s in doc.scenarios]}


@router.get("/files")
def read_file(path: str):
    ix = get_index()
    target = (ix.root / path).resolve()
    if not target.is_relative_to(ix.root.resolve()) or not target.is_file():
        raise HTTPException(404, "Archivo no encontrado")
    if target.suffix not in (".js", ".feature", ".json", ".yml", ".md"):
        raise HTTPException(400, "Tipo de archivo no permitido")
    ix.invalidate(path)
    return {"path": path, "kind": ix.kind_of(path), "content": ix.read(path)}

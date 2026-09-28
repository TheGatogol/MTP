from fastapi import APIRouter, HTTPException
from pydantic import BaseModel

from app.analysis import apply, jobs
from app.domain.models import CamelModel

router = APIRouter(prefix="/api/analysis", tags=["analysis"])


class AnalyzeRequest(CamelModel):
    feature_path: str
    force: bool = False


class FixRequest(BaseModel):
    file: str = ""
    confirm: bool = False


@router.post("")
def analyze(req: AnalyzeRequest):
    try:
        return jobs.start(req.feature_path, req.force).dump()
    except jobs.NotReady as e:
        raise HTTPException(409, str(e)) from e


@router.get("")
def history(feature_path: str | None = None, limit: int = 50):
    return jobs.history(feature_path, limit)


@router.get("/{report_id}")
def get_report(report_id: str):
    report = jobs.get(report_id)
    if report is None:
        raise HTTPException(404, "Reporte no encontrado")
    return report.dump()


@router.post("/{report_id}/apply")
def apply_fix(report_id: str, req: FixRequest):
    if not req.confirm:
        raise HTTPException(400, "Aplicar una corrección requiere confirmación explícita (confirm=true).")
    try:
        return apply.apply_fix(report_id, req.file).dump()
    except apply.FixConflict as e:
        raise HTTPException(409, str(e)) from e
    except (FileNotFoundError, ValueError) as e:
        raise HTTPException(404, str(e)) from e


@router.post("/{report_id}/apply-all")
def apply_all(report_id: str, req: FixRequest):
    if not req.confirm:
        raise HTTPException(400, "Aplicar las correcciones requiere confirmación explícita (confirm=true).")
    try:
        return apply.apply_all(report_id).dump()
    except apply.FixConflict as e:
        raise HTTPException(409, str(e)) from e
    except (FileNotFoundError, ValueError) as e:
        raise HTTPException(404, str(e)) from e


@router.post("/{report_id}/revert")
def revert_fix(report_id: str, req: FixRequest):
    if not req.confirm:
        raise HTTPException(400, "Revertir requiere confirmación explícita (confirm=true).")
    try:
        return apply.revert_fix(report_id, req.file).dump()
    except apply.FixConflict as e:
        raise HTTPException(409, str(e)) from e
    except (FileNotFoundError, ValueError) as e:
        raise HTTPException(404, str(e)) from e

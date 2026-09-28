"""Aplicar / revertir una corrección propuesta. Siempre con confirmación del usuario y respaldo previo."""
import shutil
from pathlib import Path

from app import store
from app.analysis import jobs
from app.domain.models import AnalysisReport, FileFix
from app.framework import jssyntax
from app.framework.indexer import get_index
from app.utils.text import new_id, now_iso, read_source, sha


class FixConflict(Exception):
    pass


def _target(rel: str) -> Path:
    ix = get_index()
    root = ix.root.resolve()
    path = (ix.root / rel).resolve()
    if not path.is_relative_to(root):
        raise ValueError("Ruta fuera del framework")
    return path


def _find(report_id: str, file: str) -> tuple[AnalysisReport, FileFix]:
    report = jobs.get(report_id)
    if report is None:
        raise FileNotFoundError("Reporte no encontrado")
    report = report.model_copy(deep=True)
    fx = next((f for f in report.fixes if f.file == file), None)
    if fx is None:
        raise FileNotFoundError("No hay corrección para ese archivo")
    return report, fx


def _refresh_index(file: str) -> None:
    ix = get_index()
    ix.invalidate(file)
    if file.endswith(".feature") and file in ix.features:
        ix.features[file] = ix._feature_entry(file)


def _move_folders(fx: FileFix, backup_id: str, restore: bool) -> None:
    for folder in fx.paths:
        live = _target(folder)
        saved = store.data_dir() / "backups" / backup_id / folder
        src, dst = (saved, live) if restore else (live, saved)
        if not src.exists():
            raise FixConflict(f"No existe {folder}.")
        dst.parent.mkdir(parents=True, exist_ok=True)
        shutil.move(str(src), str(dst))
    get_index().recordings = get_index()._scan_recordings()


def apply_fix(report_id: str, file: str) -> AnalysisReport:
    report, fx = _find(report_id, file)
    if fx.applied:
        raise FixConflict("La corrección ya está aplicada.")
    if fx.action == "delete":
        backup_id = new_id("bk")
        _move_folders(fx, backup_id, restore=False)
        fx.applied, fx.applied_at, fx.backup_id = True, now_iso(), backup_id
        store.append_jsonl("history.jsonl", {"action": "apply", "at": fx.applied_at, "reportId": report_id,
                                             "featurePath": report.feature_path, "file": file, "backupId": backup_id,
                                             "findingIds": fx.finding_ids, "changes": fx.changes})
        jobs.save(report)
        return report
    path = _target(file)
    current, newline = read_source(path)
    if sha(current) != fx.original_hash:
        raise FixConflict("El archivo cambió desde el análisis. Vuelve a analizarlo antes de aplicar la corrección.")
    if file.endswith(".js") and (reason := jssyntax.breaks(current, fx.proposed)):
        raise FixConflict(f"No se aplica: la corrección {reason}. Vuelve a analizar el archivo.")
    backup_id = new_id("bk")
    backup = store.data_dir() / "backups" / backup_id / file
    backup.parent.mkdir(parents=True, exist_ok=True)
    backup.write_bytes(path.read_bytes())
    path.write_bytes(fx.proposed.replace("\n", newline).encode("utf-8"))
    fx.applied, fx.applied_at, fx.backup_id = True, now_iso(), backup_id
    store.append_jsonl("history.jsonl", {
        "action": "apply", "at": fx.applied_at, "reportId": report_id, "featurePath": report.feature_path,
        "file": file, "backupId": backup_id, "findingIds": fx.finding_ids, "changes": fx.changes,
    })
    _refresh_index(file)
    jobs.save(report)
    return report


def revert_fix(report_id: str, file: str) -> AnalysisReport:
    report, fx = _find(report_id, file)
    if not fx.applied or not fx.backup_id:
        raise FixConflict("La corrección no está aplicada.")
    if fx.action == "delete":
        _move_folders(fx, fx.backup_id, restore=True)
        store.append_jsonl("history.jsonl", {"action": "revert", "at": now_iso(), "reportId": report_id,
                                             "featurePath": report.feature_path, "file": file, "backupId": fx.backup_id})
        fx.applied, fx.applied_at = False, None
        jobs.save(report)
        return report
    path = _target(file)
    current, _ = read_source(path)
    if sha(current) != sha(fx.proposed):
        raise FixConflict("El archivo se modificó después de aplicar la corrección; no se revierte para no perder cambios.")
    backup = store.data_dir() / "backups" / fx.backup_id / file
    if not backup.exists():
        raise FixConflict("No se encontró el respaldo.")
    path.write_bytes(backup.read_bytes())
    store.append_jsonl("history.jsonl", {
        "action": "revert", "at": now_iso(), "reportId": report_id, "featurePath": report.feature_path,
        "file": file, "backupId": fx.backup_id,
    })
    fx.applied, fx.applied_at = False, None
    _refresh_index(file)
    jobs.save(report)
    return report


def apply_all(report_id: str) -> AnalysisReport:
    """Aplica todas las correcciones pendientes del reporte (cada una con su respaldo)."""
    report = jobs.get(report_id)
    if report is None:
        raise FileNotFoundError("Reporte no encontrado")
    for fx in [f for f in report.fixes if not f.applied]:
        report = apply_fix(report_id, fx.file)
    return report

"""Built-in deterministic rules."""
from typing import Iterable

from app.domain.enums import (
    ActionStatus, AutomationStatus, BlockerStatus, BlockerType, BuildStatus, MergeStatus, PRStatus,
    RegressionStatus, label,
)
from app.rules.engine import Finding, Rule, register
from app.services.insights import Snapshot, person_workload
from app.utils.time import days_since, days_until

ESCALATION_BY_TYPE = {
    BlockerType.ACCESS: "Escalar la solicitud de permisos/accesos.",
    BlockerType.SCRUM: "Escalar o solicitar decisión formal a la Scrum.",
    BlockerType.REVIEWER: "Escalar con el reviewer o solicitar VoBo a otra persona.",
    BlockerType.ENVIRONMENT: "Escalar con el equipo responsable del ambiente.",
    BlockerType.DATA: "Solicitar/escalar la preparación de datos de prueba.",
    BlockerType.DEVELOPMENT: "Escalar con desarrollo para obtener fecha de corrección.",
    BlockerType.ITW: "Dar seguimiento/escalar con ITW.",
    BlockerType.CLIENT: "Escalar con el cliente/negocio.",
}


def _open_prs(snap: Snapshot):
    return [p for p in snap.prs.values() if p.status in (PRStatus.OPEN, PRStatus.DRAFT)]


def _pr_name(snap: Snapshot, pr) -> str:
    activity = snap.activities.get(pr.activity_id or "")
    return activity.title if activity else f"PR {pr.pull_request_number} · {pr.title}"


@register
class BlockedEscalationRule(Rule):
    id = "blocked_escalation"
    description = "Actividad bloqueada ≥ N días (o sin fecha de inicio) → recomendar escalación."

    def evaluate(self, snap: Snapshot) -> Iterable[Finding]:
        limit = snap.settings.blocked_escalation_days
        for a in snap.active_activities():
            open_blockers = snap.open_blockers_for(a.id)
            if a.blocked and not open_blockers:
                yield Finding(
                    rule_id=self.id, severity="HIGH", category="blocker", entity_type="activity",
                    entity_id=a.id, entity_name=a.title, activity_id=a.id,
                    title="Marcada como bloqueada sin detalle del bloqueo.",
                    action="Registrar tipo, responsable y fecha del bloqueo.",
                )
            for b in open_blockers:
                days = days_since(b.blocked_since)
                what = f"Bloqueada por {label(BlockerType, b.type)}: {b.description}"
                action = ESCALATION_BY_TYPE.get(b.type, "Escalar el bloqueo con el responsable.")
                if days is None:
                    yield Finding(
                        rule_id=self.id, severity="HIGH", category="blocker", entity_type="blocker",
                        entity_id=b.id, entity_name=a.title, activity_id=a.id, title=what,
                        message="Fecha de inicio del bloqueo por confirmar.",
                        action=f"{action} Confirmar desde cuándo está bloqueada.",
                    )
                elif days >= limit:
                    yield Finding(
                        rule_id=self.id, severity="HIGH", category="blocker", entity_type="blocker",
                        entity_id=b.id, entity_name=a.title, activity_id=a.id, title=what,
                        message=f"Bloqueada hace {days} día(s).", action=action,
                    )
                else:
                    yield Finding(
                        rule_id=self.id, severity="MEDIUM", category="blocker", entity_type="blocker",
                        entity_id=b.id, entity_name=a.title, activity_id=a.id, title=what,
                        message=f"Bloqueada hace {days} día(s).", action="Dar seguimiento al bloqueo.",
                    )


@register
class PrReadyToMergeRule(Rule):
    id = "pr_ready_to_merge"
    description = "Build Passed + automatización terminada + PR sin merge → revisar aprobación/merge."

    def evaluate(self, snap: Snapshot) -> Iterable[Finding]:
        for pr in _open_prs(snap):
            if (pr.build_status == BuildStatus.PASSED and pr.automation_status == AutomationStatus.COMPLETED
                    and pr.merge_status != MergeStatus.MERGED):
                build = f" (#{pr.latest_build})" if pr.latest_build else ""
                yield Finding(
                    rule_id=self.id, severity="MEDIUM", category="pr", entity_type="pull_request",
                    entity_id=pr.id, entity_name=_pr_name(snap, pr), activity_id=pr.activity_id,
                    title=f"Automatización terminada y último build Passed{build}, pero la PR continúa abierta.",
                    action="Confirmar condición pendiente para aprobación/merge.",
                )


@register
class RegressionFailedRule(Rule):
    id = "regression_failed"
    description = "Regresión fallida o Gherkins fallidos → clasificar fallos."

    def evaluate(self, snap: Snapshot) -> Iterable[Finding]:
        for pr in _open_prs(snap):
            failed = pr.gherkin_failed or 0
            if pr.regression_status == RegressionStatus.FAILED or failed > 0:
                title = f"{failed} Gherkins fallidos." if failed else "Regresión fallida."
                yield Finding(
                    rule_id=self.id, severity="HIGH", category="pr", entity_type="pull_request",
                    entity_id=pr.id, entity_name=_pr_name(snap, pr), activity_id=pr.activity_id,
                    title=title,
                    action="Clasificar los fallos (Automation, Functional, Environment, Data, Service) antes del cierre.",
                )


@register
class BuildFailedRule(Rule):
    id = "build_failed"
    description = "Último build Failed → revisar causa y relanzar."

    def evaluate(self, snap: Snapshot) -> Iterable[Finding]:
        for pr in _open_prs(snap):
            if pr.build_status == BuildStatus.FAILED:
                build = f" (#{pr.latest_build})" if pr.latest_build else ""
                yield Finding(
                    rule_id=self.id, severity="HIGH", category="pr", entity_type="pull_request",
                    entity_id=pr.id, entity_name=_pr_name(snap, pr), activity_id=pr.activity_id,
                    title=f"Último build fallido{build}.",
                    action="Revisar la causa del fallo, corregir y relanzar el build.",
                )


@register
class PendingExecutionRule(Rule):
    id = "pending_execution"
    description = "Build/regresión en progreso o pendiente → confirmar resultado / responsable y horario."

    def evaluate(self, snap: Snapshot) -> Iterable[Finding]:
        for pr in _open_prs(snap):
            common = dict(entity_type="pull_request", entity_id=pr.id, entity_name=_pr_name(snap, pr),
                          activity_id=pr.activity_id, rule_id=self.id, category="pr")
            if pr.build_status == BuildStatus.IN_PROGRESS or pr.regression_status == RegressionStatus.RUNNING:
                yield Finding(severity="MEDIUM", title="Última ejecución en progreso.",
                              action="Confirmar el resultado de la última ejecución/regresión.", **common)
            elif pr.regression_status == RegressionStatus.PENDING:
                yield Finding(severity="MEDIUM", title="Pendiente de regresión.",
                              action="Confirmar responsable y horario de ejecución de la regresión.", **common)


@register
class DueDateRule(Rule):
    id = "due_date"
    description = "Deadline vencido o ≤ N días y actividad no finalizada → riesgo alto."

    def evaluate(self, snap: Snapshot) -> Iterable[Finding]:
        limit = snap.settings.due_soon_days
        for a in snap.active_activities():
            d = days_until(a.due_date)
            if d is None or d > limit:
                continue
            title = f"Vencida hace {-d} día(s)." if d < 0 else ("Vence hoy." if d == 0 else f"Vence en {d} día(s).")
            yield Finding(
                rule_id=self.id, severity="HIGH", category="deadline", entity_type="activity",
                entity_id=a.id, entity_name=a.title, activity_id=a.id, title=title,
                action="Confirmar si se cumple la fecha o solicitar replanificación.",
            )


@register
class StaleActivityRule(Rule):
    id = "stale_activity"
    description = "Sin actualización ≥ N días y estado activo → dar seguimiento."

    def evaluate(self, snap: Snapshot) -> Iterable[Finding]:
        limit = snap.settings.stale_days
        for a in snap.active_activities():
            d = days_since(a.last_update)
            if d is not None and d >= limit:
                yield Finding(
                    rule_id=self.id, severity="MEDIUM", category="followup", entity_type="activity",
                    entity_id=a.id, entity_name=a.title, activity_id=a.id,
                    title=f"Sin actualización hace {d} día(s).",
                    action="Dar seguimiento y actualizar el estado.",
                )


@register
class FollowUpDueRule(Rule):
    id = "follow_up_due"
    description = "Seguimiento programado para hoy o vencido."

    def evaluate(self, snap: Snapshot) -> Iterable[Finding]:
        for a in snap.active_activities():
            d = days_until(a.next_follow_up)
            if d is not None and d <= 0:
                yield Finding(
                    rule_id=self.id, severity="MEDIUM", category="followup", entity_type="activity",
                    entity_id=a.id, entity_name=a.title, activity_id=a.id,
                    title="Seguimiento programado para hoy." if d == 0 else f"Seguimiento vencido hace {-d} día(s).",
                    action=a.next_action or "Realizar el seguimiento programado.",
                )
        for b in snap.blockers.values():
            d = days_until(b.next_follow_up)
            a = snap.activities.get(b.activity_id)
            if b.status == BlockerStatus.OPEN and a and d is not None and d <= 0:
                yield Finding(
                    rule_id=self.id, severity="MEDIUM", category="blocker", entity_type="blocker",
                    entity_id=b.id, entity_name=a.title, activity_id=a.id,
                    title="Seguimiento del bloqueo programado para hoy." if d == 0 else "Seguimiento del bloqueo vencido.",
                    action=f"Dar seguimiento con {b.responsible or 'el responsable'}.",
                )


@register
class WaitingThirdPartyRule(Rule):
    id = "waiting_third_party"
    description = "Actividad esperando a un tercero (sin bloqueo formal)."

    def evaluate(self, snap: Snapshot) -> Iterable[Finding]:
        for a in snap.active_activities():
            if a.waiting_for and not a.blocked:
                yield Finding(
                    rule_id=self.id, severity="LOW", category="followup", entity_type="activity",
                    entity_id=a.id, entity_name=a.title, activity_id=a.id,
                    title=f"Esperando: {a.waiting_for}.",
                    action=a.next_action or f"Confirmar avance de: {a.waiting_for}.",
                )


@register
class WorkloadRule(Rule):
    id = "workload"
    description = "Persona con demasiadas actividades activas u horas por encima de su disponibilidad."

    def evaluate(self, snap: Snapshot) -> Iterable[Finding]:
        for p in snap.people.values():
            w = person_workload(p, snap)
            if w["saturated"]:
                hours = ""
                if w["loadPct"] is not None:
                    hours = f" Carga estimada {w['loadPct']}% de sus horas disponibles."
                yield Finding(
                    rule_id=self.id, severity="MEDIUM", category="workload", entity_type="person",
                    entity_id=p.id, entity_name=p.name,
                    title=f"Posible saturación: {w['activeActivities']} actividades activas.{hours}",
                    action="Revisar prioridades o redistribuir actividades.",
                )


@register
class MissingInfoRule(Rule):
    id = "missing_info"
    description = "Actividad activa sin responsable / prioridad / deadline."

    def evaluate(self, snap: Snapshot) -> Iterable[Finding]:
        for a in snap.active_activities():
            missing = []
            if not a.owner_id:
                missing.append("responsable")
            if not a.priority:
                missing.append("prioridad")
            if not a.due_date:
                missing.append("deadline")
            if missing:
                yield Finding(
                    rule_id=self.id, severity="LOW", category="data", entity_type="activity",
                    entity_id=a.id, entity_name=a.title, activity_id=a.id,
                    title=f"Datos por confirmar: {', '.join(missing)}.",
                    action="Solicitar la información faltante al solicitante o a la Scrum.",
                )


@register
class PendingActionsOverdueRule(Rule):
    id = "actions_overdue"
    description = "Acciones con fecha vencida."

    def evaluate(self, snap: Snapshot) -> Iterable[Finding]:
        for act in snap.actions.values():
            if act.status not in (ActionStatus.PENDING, ActionStatus.IN_PROGRESS):
                continue
            d = days_until(act.due_date)
            a = snap.activities.get(act.activity_id)
            if d is not None and d < 0 and a:
                yield Finding(
                    rule_id=self.id, severity="MEDIUM", category="followup", entity_type="action",
                    entity_id=act.id, entity_name=a.title, activity_id=a.id,
                    title=f"Acción vencida: {act.title}.", action="Completar o reprogramar la acción.",
                )

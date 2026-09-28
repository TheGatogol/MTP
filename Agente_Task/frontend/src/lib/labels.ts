export const STATUS_LABELS: Record<string, string> = {
  PENDING: "Pendiente",
  ANALYSIS: "Análisis",
  IN_PROGRESS: "En proceso",
  VALIDATION: "Validación",
  READY_TO_CLOSE: "Lista para cierre",
  DONE: "Finalizada",
  CANCELLED: "Cancelada",
};
export const STATUS_ORDER = ["PENDING", "ANALYSIS", "IN_PROGRESS", "VALIDATION", "READY_TO_CLOSE", "DONE", "CANCELLED"];

export const PRIORITIES = ["P0", "P1", "P2", "P3"];
export const RISK_LABELS: Record<string, string> = { LOW: "Bajo", MEDIUM: "Medio", HIGH: "Alto" };

export const BLOCKER_TYPES = [
  "AUTOMATION", "DEVELOPMENT", "ENVIRONMENT", "DATA", "ACCESS", "REVIEWER", "SCRUM", "ITW", "CLIENT", "EXTERNAL", "UNKNOWN",
];
export const BLOCKER_TYPE_LABELS: Record<string, string> = {
  AUTOMATION: "Automation", DEVELOPMENT: "Development", ENVIRONMENT: "Environment", DATA: "Data", ACCESS: "Access",
  REVIEWER: "Reviewer", SCRUM: "Scrum", ITW: "ITW", CLIENT: "Client", EXTERNAL: "External", UNKNOWN: "Unknown",
};

export const BUILD_LABELS: Record<string, string> = {
  PENDING: "Pending", IN_PROGRESS: "In Progress", PASSED: "Passed", FAILED: "Failed", UNKNOWN: "Unknown",
};
export const REGRESSION_LABELS: Record<string, string> = {
  PENDING: "Pending", RUNNING: "Running", PASSED: "Passed", FAILED: "Failed", NOT_REQUIRED: "Not Required",
  UNKNOWN: "Por confirmar",
};
export const AUTOMATION_LABELS: Record<string, string> = {
  NOT_STARTED: "Sin iniciar", IN_PROGRESS: "En proceso", MAINTENANCE: "Mantenimiento", IN_REVIEW: "En revisión",
  COMPLETED: "Terminada", UNKNOWN: "Por confirmar",
};
export const APPROVAL_LABELS: Record<string, string> = {
  PENDING: "Pendiente", APPROVED: "Aprobada", CHANGES_REQUESTED: "Cambios solicitados", UNKNOWN: "Por confirmar",
};
export const MERGE_LABELS: Record<string, string> = { NOT_MERGED: "No mergeada", MERGED: "Mergeada", UNKNOWN: "Por confirmar" };
export const PR_STATUS_LABELS: Record<string, string> = { OPEN: "Open", DRAFT: "Draft", MERGED: "Merged", DECLINED: "Declined" };
export const PROJECT_STATUS_LABELS: Record<string, string> = {
  TO_CONFIRM: "Por confirmar", ACTIVE: "Activo", BLOCKED: "Bloqueado", ON_HOLD: "En pausa", DONE: "Terminado",
  CANCELLED: "Cancelado",
};
export const INITIATIVE_STATUS_LABELS: Record<string, string> = {
  TO_CONFIRM: "Por confirmar", NOT_STARTED: "Por iniciar", IN_PROGRESS: "En proceso", ON_HOLD: "En pausa",
  DONE: "Terminada", CANCELLED: "Cancelada",
};
export const ACTION_STATUS_LABELS: Record<string, string> = {
  PENDING: "Pendiente", IN_PROGRESS: "En proceso", DONE: "Hecha", CANCELLED: "Cancelada",
};
export const SOURCE_LABELS: Record<string, string> = {
  UI: "Manual", AGENT: "Agente", KANBAN: "Kanban", SEED: "Carga inicial", SYSTEM: "Sistema",
};
export const ENTITY_LABELS: Record<string, string> = {
  activity: "Actividad", action: "Acción", blocker: "Bloqueo", pull_request: "PR", project: "Proyecto/DEP",
  person: "Persona", initiative: "Iniciativa", risk: "Riesgo", question: "Pregunta",
};

export const FIELD_LABELS: Record<string, string> = {
  _created: "Creación", _deleted: "Eliminación", note: "Nota", title: "Título", type: "Tipo",
  status: "Estado", technicalStatus: "Estado técnico", priority: "Prioridad", ownerId: "Responsable",
  supportPeople: "Apoyo", dueDate: "Deadline", waitingFor: "Esperando", nextAction: "Siguiente acción",
  nextFollowUp: "Próximo seguimiento", riskLevel: "Riesgo", riskReason: "Motivo de riesgo", result: "Resultado",
  estimatedHours: "Horas estimadas", consumedHours: "Horas consumidas", description: "Descripción",
  blocked: "Bloqueada", blockerId: "Bloqueo", projectDependencyId: "Proyecto/DEP", initiativeId: "Iniciativa",
  requester: "Solicitante", requestDate: "Fecha de solicitud", evidenceUrls: "Evidencias",
  automationStatus: "Automatización", latestBuild: "Último build", buildStatus: "Build", builds: "Builds",
  regressionStatus: "Regresión", gherkinTotal: "Gherkins totales", gherkinPassed: "Gherkins OK",
  gherkinFailed: "Gherkins fallidos", pendingComments: "Comentarios pendientes", reviewer: "Reviewer",
  approvalStatus: "Aprobación", mergeStatus: "Merge", repository: "Repositorio", branch: "Rama", url: "URL",
  responsible: "Responsable", blockedSince: "Bloqueada desde", lastFollowUp: "Último seguimiento",
  resolution: "Resolución", resolvedAt: "Resuelto", completedAt: "Completada", answer: "Respuesta",
  name: "Nombre", role: "Rol", team: "Equipo", availableHours: "Horas disponibles", jiraId: "Jira",
  quarter: "Quarter", scrum: "Scrum", reporter: "Reporter", phase: "Fase", objective: "Objetivo", mvp: "MVP",
};

const ENUM_MAPS: Record<string, Record<string, string>> = {
  status: { ...STATUS_LABELS, ...PR_STATUS_LABELS, ...ACTION_STATUS_LABELS, OPEN: "Abierto", RESOLVED: "Resuelto" },
  buildStatus: BUILD_LABELS,
  regressionStatus: REGRESSION_LABELS,
  automationStatus: AUTOMATION_LABELS,
  approvalStatus: APPROVAL_LABELS,
  mergeStatus: MERGE_LABELS,
  riskLevel: RISK_LABELS,
  type: BLOCKER_TYPE_LABELS,
};

export function formatValue(field: string, value: unknown, people?: Record<string, string>): string {
  if (value === null || value === undefined || value === "") return "—";
  if (typeof value === "boolean") return value ? "Sí" : "No";
  if (Array.isArray(value)) return value.length ? `${value.length} elemento(s)` : "—";
  if (typeof value === "object") return "…";
  const s = String(value);
  if ((field === "ownerId" || field === "responsible") && people?.[s]) return people[s];
  return ENUM_MAPS[field]?.[s] ?? s;
}

export const fieldLabel = (f: string) => FIELD_LABELS[f] ?? f;

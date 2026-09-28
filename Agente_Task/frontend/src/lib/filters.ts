import type { Activity } from "./types";

const isClosed = (a: Activity) => a.status === "DONE" || a.status === "CANCELLED";

export interface ActivityFilter {
  id: string;
  label: string;
  test: (a: Activity, ctx: { currentUserId: string | null }) => boolean;
}

export const ACTIVITY_FILTERS: ActivityFilter[] = [
  { id: "active", label: "Activas", test: (a) => !isClosed(a) },
  { id: "mine", label: "Mis actividades", test: (a, c) => !isClosed(a) && !!c.currentUserId && (a.ownerId === c.currentUserId || a.supportPeople.includes(c.currentUserId)) },
  { id: "blocked", label: "Bloqueadas", test: (a) => !isClosed(a) && a.blocked },
  { id: "p0", label: "P0", test: (a) => !isClosed(a) && a.priority === "P0" },
  { id: "p1", label: "P1", test: (a) => !isClosed(a) && a.priority === "P1" },
  { id: "waiting", label: "Esperando tercero", test: (a) => a.derived.isWaiting },
  { id: "stale", label: "Sin actualizar", test: (a) => a.derived.isStale },
  { id: "due_soon", label: "Deadline cercano", test: (a) => a.derived.isDueSoon },
  { id: "open_pr", label: "PR abiertas", test: (a) => !isClosed(a) && a.derived.hasOpenPr },
  { id: "build_failed", label: "Build Failed", test: (a) => a.derived.prBuildFailed },
  { id: "validation", label: "En validación", test: (a) => a.status === "VALIDATION" || a.status === "READY_TO_CLOSE" },
  { id: "high_risk", label: "Riesgo alto", test: (a) => a.derived.effectiveRisk === "HIGH" },
  { id: "done", label: "Finalizadas", test: (a) => isClosed(a) },
  { id: "all", label: "Todas", test: () => true },
];

export function applyFilter(list: Activity[], filterId: string, currentUserId: string | null) {
  const f = ACTIVITY_FILTERS.find((x) => x.id === filterId) ?? ACTIVITY_FILTERS[0]!;
  return list.filter((a) => f.test(a, { currentUserId }));
}

export function matchesText(a: Activity, q: string) {
  if (!q.trim()) return true;
  const norm = (s: string) => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
  const hay = norm([a.title, a.description, a.technicalStatus, a.derived.ownerName, a.derived.projectName, ...a.aliases, ...a.derived.prNumbers].filter(Boolean).join(" "));
  return norm(q).split(/\s+/).every((t) => hay.includes(t));
}

const LIGHT_RANK = { RED: 0, YELLOW: 1, GREEN: 2, GRAY: 3 } as const;
export function sortByAttention(list: Activity[]) {
  return [...list].sort((a, b) => {
    const l = LIGHT_RANK[a.derived.trafficLight] - LIGHT_RANK[b.derived.trafficLight];
    if (l !== 0) return l;
    const pa = a.priority ? Number(a.priority[1]) : 9;
    const pb = b.priority ? Number(b.priority[1]) : 9;
    if (pa !== pb) return pa - pb;
    return (b.lastUpdate ?? "").localeCompare(a.lastUpdate ?? "");
  });
}

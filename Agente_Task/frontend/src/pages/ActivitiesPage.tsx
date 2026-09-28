import { Columns3, List, Plus, Search } from "lucide-react";
import { useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ActivityCard, ActivityMeta } from "@/components/ActivityCard";
import { Avatar, PriorityBadge, StatusBadge, TrafficLight } from "@/components/badges";
import { ActivityFormDialog } from "@/components/forms";
import { KanbanBoard } from "@/components/KanbanBoard";
import { Button, Card, Chip, EmptyState, ErrorState, Input, PageHeader, PageLoader } from "@/components/ui";
import { ACTIVITY_FILTERS, applyFilter, matchesText, sortByAttention } from "@/lib/filters";
import { useActivities, useSettings } from "@/lib/queries";
import { cn, relativeTime } from "@/lib/utils";

export function ActivitiesPage() {
  const [params, setParams] = useSearchParams();
  const view = params.get("view") === "kanban" ? "kanban" : "list";
  const filter = params.get("filter") ?? "active";
  const [q, setQ] = useState("");
  const [newOpen, setNewOpen] = useState(false);
  const { data = [], isLoading, error, refetch } = useActivities();
  const { data: settings } = useSettings();
  const currentUserId = settings?.app.currentUserId ?? null;

  const set = (k: string, v: string) => {
    const next = new URLSearchParams(params);
    next.set(k, v);
    setParams(next, { replace: true });
  };

  const counts = useMemo(
    () => Object.fromEntries(ACTIVITY_FILTERS.map((f) => [f.id, applyFilter(data, f.id, currentUserId).length])),
    [data, currentUserId],
  );
  const kanbanFilter = view === "kanban" && filter === "active" ? "all" : filter;
  const list = sortByAttention(applyFilter(data, kanbanFilter, currentUserId).filter((a) => matchesText(a, q)));

  return (
    <div>
      <PageHeader
        title="Actividades"
        subtitle="Estado y bloqueo son independientes: una actividad puede estar «En proceso» y bloqueada."
        actions={
          <>
            <div className="flex rounded-lg border border-border bg-surface p-0.5">
              {([["list", <List key="l" className="h-4 w-4" />, "Lista"], ["kanban", <Columns3 key="k" className="h-4 w-4" />, "Kanban"]] as const).map(([v, icon, label]) => (
                <button key={v} onClick={() => set("view", v)}
                  className={cn("flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-xs font-medium", view === v ? "bg-accent-soft text-accent" : "text-muted hover:text-fg")}>
                  {icon} {label}
                </button>
              ))}
            </div>
            <Button onClick={() => setNewOpen(true)}><Plus className="h-4 w-4" /> Nueva</Button>
          </>
        }
      />

      <div className="mb-4 flex flex-col gap-3">
        <div className="relative max-w-sm">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-subtle" />
          <Input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Filtrar por texto, PR, persona…" className="pl-9" />
        </div>
        <div className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:px-0">
          {ACTIVITY_FILTERS.map((f) => (
            <Chip key={f.id} active={filter === f.id} onClick={() => set("filter", f.id)} count={counts[f.id]}>{f.label}</Chip>
          ))}
        </div>
        {filter === "mine" && !currentUserId && (
          <p className="text-xs text-amber-600">Define tu usuario en Configuración para usar «Mis actividades».</p>
        )}
      </div>

      {isLoading ? (
        <PageLoader />
      ) : error ? (
        <ErrorState error={error} onRetry={refetch} />
      ) : view === "kanban" ? (
        <KanbanBoard activities={list} />
      ) : list.length === 0 ? (
        <Card><EmptyState title="No hay actividades con este filtro" action={<Button variant="outline" onClick={() => setNewOpen(true)}>Crear actividad</Button>} /></Card>
      ) : (
        <>
          <Card className="hidden overflow-hidden md:block">
            <table className="w-full text-sm">
              <thead className="border-b border-border bg-surface-2/50 text-left text-[11px] font-semibold uppercase tracking-wide text-subtle">
                <tr>
                  <th className="w-8 px-4 py-2.5" />
                  <th className="px-2 py-2.5">Actividad</th>
                  <th className="px-2 py-2.5">Estado</th>
                  <th className="px-2 py-2.5">Prioridad</th>
                  <th className="px-2 py-2.5">Responsable</th>
                  <th className="px-2 py-2.5">Señales</th>
                  <th className="px-4 py-2.5 text-right">Actualizada</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {list.map((a) => (
                  <tr key={a.id} className="group hover:bg-surface-2/40">
                    <td className="px-4 py-3"><TrafficLight value={a.derived.trafficLight} reasons={a.derived.reasons} /></td>
                    <td className="max-w-[360px] px-2 py-3">
                      <Link to={`/activities/${a.id}`} className="font-medium text-fg group-hover:text-accent">{a.title}</Link>
                      <p className="truncate text-xs text-muted">{a.technicalStatus || a.derived.projectName || a.type || "—"}</p>
                    </td>
                    <td className="px-2 py-3"><StatusBadge status={a.status} /></td>
                    <td className="px-2 py-3"><PriorityBadge priority={a.priority} /></td>
                    <td className="px-2 py-3">
                      <div className="flex items-center gap-2">
                        <Avatar name={a.derived.ownerName} size="sm" />
                        <span className="text-xs text-muted">{a.derived.ownerName ?? "Por confirmar"}</span>
                      </div>
                    </td>
                    <td className="px-2 py-3"><ActivityMeta a={a} /></td>
                    <td className="whitespace-nowrap px-4 py-3 text-right text-xs text-subtle">{relativeTime(a.lastUpdate)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Card>
          <div className="grid gap-2.5 md:hidden">
            {list.map((a) => <ActivityCard key={a.id} a={a} />)}
          </div>
        </>
      )}

      <ActivityFormDialog open={newOpen} onOpenChange={setNewOpen} />
    </div>
  );
}

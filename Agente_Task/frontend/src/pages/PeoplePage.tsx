import { useQuery } from "@tanstack/react-query";
import { ArrowLeft, Bot, Pencil, Plus, TriangleAlert } from "lucide-react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ActivityCard } from "@/components/ActivityCard";
import { useAgentUI, usePageContext } from "@/components/agent/AgentUI";
import { Avatar } from "@/components/badges";
import { PersonFormDialog } from "@/components/forms";
import { Badge, Button, Card, EmptyState, ErrorState, PageHeader, PageLoader, Progress } from "@/components/ui";
import { api } from "@/lib/api";
import { usePeople } from "@/lib/queries";
import type { Person } from "@/lib/types";

function Load({ p }: { p: Person }) {
  const w = p.workload!;
  const pct = w.loadPct ?? Math.min(100, (w.activeActivities / 5) * 100);
  return (
    <div>
      <div className="mb-1 flex items-center justify-between text-[11px] text-muted">
        <span>{w.activeActivities} activas · {w.supportActivities} de apoyo</span>
        <span>{w.availableHours ? `${w.assignedHours}h / ${w.availableHours}h` : "Horas por confirmar"}</span>
      </div>
      <Progress value={pct} tone={w.saturated ? "red" : pct > 70 ? "amber" : "green"} />
    </div>
  );
}

export function PeoplePage() {
  const [newOpen, setNewOpen] = useState(false);
  const { ask } = useAgentUI();
  const { data = [], isLoading, error, refetch } = usePeople();
  return (
    <div>
      <PageHeader title="Personas" subtitle="Carga calculada con las actividades activas y las horas registradas."
        actions={<>
          <Button variant="outline" onClick={() => ask({ text: "¿Quién está saturado y quién tiene menos carga?", autoSend: true })}><Bot className="h-4 w-4" /> ¿Quién está saturado?</Button>
          <Button onClick={() => setNewOpen(true)}><Plus className="h-4 w-4" /> Nueva</Button>
        </>} />
      {isLoading ? <PageLoader /> : error ? <ErrorState error={error} onRetry={refetch} /> : (
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {data.map((p) => (
            <Link key={p.id} to={`/people/${p.id}`} className="rounded-xl border border-border bg-surface p-4 transition-shadow hover:shadow-md">
              <div className="flex items-center gap-3">
                <Avatar name={p.name} size="lg" />
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold text-fg">{p.name}</p>
                  <p className="truncate text-xs text-muted">{p.role ?? "Rol por confirmar"}</p>
                  <p className="truncate text-[11px] text-subtle">{p.team ?? "Equipo por confirmar"}</p>
                </div>
                {p.kind === "EXTERNAL" && <Badge tone="violet">Externo</Badge>}
                {p.workload?.saturated && <Badge tone="red"><TriangleAlert className="h-3 w-3" /> Saturado</Badge>}
              </div>
              <div className="mt-4"><Load p={p} /></div>
            </Link>
          ))}
        </div>
      )}
      <PersonFormDialog open={newOpen} onOpenChange={setNewOpen} />
    </div>
  );
}

export function PersonDetailPage() {
  const { id = "" } = useParams();
  const { setOpen } = useAgentUI();
  const [edit, setEdit] = useState(false);
  const { data, isLoading, error, refetch } = useQuery({ queryKey: ["person", id], queryFn: () => api.people.get(id) });
  usePageContext(data ? { entityType: "person", entityId: id, label: data.person.name } : null);
  if (isLoading) return <PageLoader />;
  if (error || !data) return <ErrorState error={error} onRetry={refetch} />;
  const p = data.person;
  const active = data.owned.filter((a) => a.status !== "DONE" && a.status !== "CANCELLED");
  const closed = data.owned.length - active.length;

  return (
    <div className="space-y-5">
      <Link to="/people" className="inline-flex items-center gap-1 text-xs font-medium text-muted hover:text-fg"><ArrowLeft className="h-3.5 w-3.5" /> Personas</Link>
      <Card className="p-5">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <Avatar name={p.name} size="lg" />
            <div>
              <h1 className="text-xl font-semibold text-fg">{p.name}</h1>
              <p className="text-sm text-muted">{p.role ?? "Rol por confirmar"} · {p.team ?? "Equipo por confirmar"}</p>
              {p.specialties.length > 0 && <div className="mt-1.5 flex flex-wrap gap-1">{p.specialties.map((s) => <Badge key={s}>{s}</Badge>)}</div>}
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" onClick={() => setEdit(true)}><Pencil className="h-4 w-4" /> Editar</Button>
            <Button onClick={() => setOpen(true)}><Bot className="h-4 w-4" /> Preguntar</Button>
          </div>
        </div>
        <div className="mt-5 max-w-md"><Load p={p} /></div>
        {p.workload?.saturated && <p className="mt-2 text-xs font-medium text-red-600">Posible saturación: revisa prioridades o redistribuye.</p>}
      </Card>

      <div>
        <h3 className="mb-2 text-sm font-semibold text-fg">Responsable de ({active.length} activas{closed ? `, ${closed} cerradas` : ""})</h3>
        {active.length === 0 ? <Card><EmptyState title="Sin actividades activas" /></Card> : (
          <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">{active.map((a) => <ActivityCard key={a.id} a={a} />)}</div>
        )}
      </div>
      {data.support.length > 0 && (
        <div>
          <h3 className="mb-2 text-sm font-semibold text-fg">Apoya en</h3>
          <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">{data.support.map((a) => <ActivityCard key={a.id} a={a} />)}</div>
        </div>
      )}
      {(data.projects.length > 0 || data.initiatives.length > 0) && (
        <Card className="p-5">
          <h3 className="text-sm font-semibold text-fg">Conoce / participa en</h3>
          <div className="mt-2 flex flex-wrap gap-2">
            {data.projects.map((x) => <Link key={x.id} to={`/projects/${x.id}`}><Badge tone="blue">{x.name}</Badge></Link>)}
            {data.initiatives.map((x) => <Link key={x.id} to={`/initiatives/${x.id}`}><Badge tone="violet">{x.name}</Badge></Link>)}
          </div>
        </Card>
      )}
      <PersonFormDialog open={edit} onOpenChange={setEdit} person={p} />
    </div>
  );
}

import { useQuery } from "@tanstack/react-query";
import { ArrowLeft, Bot, CircleHelp, Lightbulb, Pencil, Plus } from "lucide-react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ActivityCard } from "@/components/ActivityCard";
import { useAgentUI, usePageContext } from "@/components/agent/AgentUI";
import { InitiativeFormDialog } from "@/components/forms";
import { Badge, Button, Card, EmptyState, ErrorState, PageHeader, PageLoader } from "@/components/ui";
import { api } from "@/lib/api";
import { INITIATIVE_STATUS_LABELS } from "@/lib/labels";
import { useInitiatives } from "@/lib/queries";
import { fmtDate } from "@/lib/utils";

const tone = (s: string) => (s === "IN_PROGRESS" ? "blue" : s === "DONE" ? "green" : s === "NOT_STARTED" ? "violet" : "gray") as "blue" | "green" | "violet" | "gray";

export function InitiativesPage() {
  const [newOpen, setNewOpen] = useState(false);
  const { data = [], isLoading, error, refetch } = useInitiatives();
  return (
    <div>
      <PageHeader title="Iniciativas" subtitle="Innovación y mejoras del equipo: objetivo, fase, MVP y siguiente paso."
        actions={<Button onClick={() => setNewOpen(true)}><Plus className="h-4 w-4" /> Nueva</Button>} />
      {isLoading ? <PageLoader /> : error ? <ErrorState error={error} onRetry={refetch} /> : data.length === 0 ? (
        <Card><EmptyState icon={<Lightbulb className="h-6 w-6" />} title="Sin iniciativas" /></Card>
      ) : (
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {data.map((i) => (
            <Link key={i.id} to={`/initiatives/${i.id}`} className="flex flex-col rounded-xl border border-border bg-surface p-4 transition-shadow hover:shadow-md">
              <div className="flex items-start justify-between gap-2">
                <p className="text-sm font-semibold text-fg">{i.name}</p>
                <Badge tone={tone(i.status)}>{INITIATIVE_STATUS_LABELS[i.status] ?? i.status}</Badge>
              </div>
              <p className="mt-1 text-xs text-muted">{i.phase ?? "Fase por confirmar"} · {i.ownerName ?? "Responsable por confirmar"}</p>
              {i.objective && <p className="mt-2 line-clamp-2 text-[13px] text-fg">{i.objective}</p>}
              <div className="mt-auto flex flex-wrap gap-1.5 pt-3">
                {!!i.activityCount && <Badge>{i.activityCount} actividades</Badge>}
                {!!i.openQuestions && <Badge tone="blue"><CircleHelp className="h-3 w-3" /> {i.openQuestions} por confirmar</Badge>}
              </div>
            </Link>
          ))}
        </div>
      )}
      <InitiativeFormDialog open={newOpen} onOpenChange={setNewOpen} />
    </div>
  );
}

export function InitiativeDetailPage() {
  const { id = "" } = useParams();
  const { setOpen } = useAgentUI();
  const [edit, setEdit] = useState(false);
  const { data, isLoading, error, refetch } = useQuery({ queryKey: ["initiative", id], queryFn: () => api.initiatives.get(id) });
  usePageContext(data ? { entityType: "initiative", entityId: id, label: data.initiative.name } : null);
  if (isLoading) return <PageLoader />;
  if (error || !data) return <ErrorState error={error} onRetry={refetch} />;
  const i = data.initiative;
  const field = (label: string, v: string | null | undefined) => (
    <div>
      <p className="text-[11px] font-medium uppercase tracking-wide text-subtle">{label}</p>
      <p className="mt-0.5 text-sm text-fg">{v ?? <i className="text-subtle">Por confirmar</i>}</p>
    </div>
  );

  return (
    <div className="space-y-5">
      <Link to="/initiatives" className="inline-flex items-center gap-1 text-xs font-medium text-muted hover:text-fg"><ArrowLeft className="h-3.5 w-3.5" /> Iniciativas</Link>
      <PageHeader title={i.name} subtitle={`${INITIATIVE_STATUS_LABELS[i.status]} · ${i.phase ?? "Fase por confirmar"}`}
        actions={<><Button variant="outline" onClick={() => setEdit(true)}><Pencil className="h-4 w-4" /> Editar</Button><Button onClick={() => setOpen(true)}><Bot className="h-4 w-4" /> Preguntar</Button></>} />
      <Card className="p-5">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {field("Responsable", i.ownerName)}
          {field("Fecha objetivo", i.dueDate ? fmtDate(i.dueDate) : null)}
          {field("MVP", i.mvp)}
          {field("Riesgo", i.risk)}
        </div>
        <div className="mt-4 grid gap-4 border-t border-border pt-4 sm:grid-cols-2">
          {field("Objetivo", i.objective)}
          {field("Siguiente acción", i.nextAction)}
        </div>
        {i.description && <p className="mt-4 whitespace-pre-wrap text-sm leading-6 text-fg">{i.description}</p>}
        {data.collaborators.length > 0 && (
          <p className="mt-3 text-xs text-muted">Colaboración: {data.collaborators.map((c) => c.name).join(", ")}</p>
        )}
      </Card>
      {data.questions.length > 0 && (
        <Card className="p-4">
          <h3 className="flex items-center gap-2 text-sm font-semibold text-fg"><CircleHelp className="h-4 w-4 text-sky-600" /> Por confirmar</h3>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-[13px] text-fg">{data.questions.map((q) => <li key={q.id}>{q.question}</li>)}</ul>
        </Card>
      )}
      <div>
        <h3 className="mb-2 text-sm font-semibold text-fg">Actividades</h3>
        {data.activities.length === 0 ? <Card><EmptyState title="Sin actividades vinculadas" /></Card> : (
          <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">{data.activities.map((a) => <ActivityCard key={a.id} a={a} />)}</div>
        )}
      </div>
      <InitiativeFormDialog open={edit} onOpenChange={setEdit} initiative={i} />
    </div>
  );
}

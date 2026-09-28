import { useQuery } from "@tanstack/react-query";
import { ArrowLeft, Bot, CircleHelp, FolderKanban, Pencil, Plus } from "lucide-react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ActivityCard } from "@/components/ActivityCard";
import { useAgentUI, usePageContext } from "@/components/agent/AgentUI";
import { Avatar, BlockerTypeBadge } from "@/components/badges";
import { ProjectFormDialog } from "@/components/forms";
import { PRSummaryCard } from "@/components/PRSummary";
import { Badge, Button, Card, CardHeader, EmptyState, ErrorState, PageHeader, PageLoader } from "@/components/ui";
import { api } from "@/lib/api";
import { PROJECT_STATUS_LABELS, RISK_LABELS } from "@/lib/labels";
import { useProjects } from "@/lib/queries";
import { fmtDate } from "@/lib/utils";

const statusTone = (s: string) => (s === "BLOCKED" ? "red" : s === "ACTIVE" ? "blue" : s === "DONE" ? "green" : "gray") as "red" | "blue" | "green" | "gray";

export function ProjectsPage() {
  const [newOpen, setNewOpen] = useState(false);
  const { data = [], isLoading, error, refetch } = useProjects();
  return (
    <div>
      <PageHeader title="Proyectos / Dependencias" subtitle="Cada DEP se relaciona con actividades, PR, personas, bloqueos e iniciativas."
        actions={<Button onClick={() => setNewOpen(true)}><Plus className="h-4 w-4" /> Nuevo</Button>} />
      {isLoading ? <PageLoader /> : error ? <ErrorState error={error} onRetry={refetch} /> : data.length === 0 ? (
        <Card><EmptyState icon={<FolderKanban className="h-6 w-6" />} title="Sin proyectos" /></Card>
      ) : (
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {data.map((p) => (
            <Link key={p.id} to={`/projects/${p.id}`} className="rounded-xl border border-border bg-surface p-4 transition-shadow hover:shadow-md">
              <div className="flex items-start justify-between gap-2">
                <p className="text-sm font-semibold text-fg">{p.name}</p>
                <Badge tone={statusTone(p.status)}>{PROJECT_STATUS_LABELS[p.status] ?? p.status}</Badge>
              </div>
              <p className="mt-1 text-xs text-muted">
                {[p.kind === "DEPENDENCY" ? "DEP" : "Proyecto", p.jiraId, p.quarter].filter(Boolean).join(" · ")}
              </p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                <Badge>{p.activityCount} actividades</Badge>
                {!!p.prCount && <Badge tone="violet">{p.prCount} PR</Badge>}
                {!!p.blockedCount && <Badge tone="red">{p.blockedCount} bloqueadas</Badge>}
                {!!p.openQuestions && <Badge tone="blue"><CircleHelp className="h-3 w-3" /> {p.openQuestions} por confirmar</Badge>}
              </div>
            </Link>
          ))}
        </div>
      )}
      <ProjectFormDialog open={newOpen} onOpenChange={setNewOpen} />
    </div>
  );
}

function Field({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div>
      <p className="text-[11px] font-medium uppercase tracking-wide text-subtle">{label}</p>
      <p className="mt-0.5 text-sm text-fg">{value ?? <i className="text-subtle">Por confirmar</i>}</p>
    </div>
  );
}

export function ProjectDetailPage() {
  const { id = "" } = useParams();
  const { setOpen, ask } = useAgentUI();
  const [edit, setEdit] = useState(false);
  const { data, isLoading, error, refetch } = useQuery({ queryKey: ["project", id], queryFn: () => api.projects.get(id) });
  usePageContext(data ? { entityType: "project", entityId: id, label: data.project.name } : null);
  if (isLoading) return <PageLoader />;
  if (error || !data) return <ErrorState error={error} onRetry={refetch} />;
  const p = data.project;

  return (
    <div className="space-y-5">
      <Link to="/projects" className="inline-flex items-center gap-1 text-xs font-medium text-muted hover:text-fg"><ArrowLeft className="h-3.5 w-3.5" /> Proyectos / DEP</Link>
      <PageHeader title={p.name}
        subtitle={[p.kind === "DEPENDENCY" ? "Dependencia" : "Proyecto", p.jiraId, p.quarter, PROJECT_STATUS_LABELS[p.status]].filter(Boolean).join(" · ")}
        actions={<><Button variant="outline" onClick={() => setEdit(true)}><Pencil className="h-4 w-4" /> Editar</Button><Button onClick={() => setOpen(true)}><Bot className="h-4 w-4" /> Preguntar</Button></>} />

      <Card className="p-5">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          <Field label="Scrum" value={p.scrum} />
          <Field label="Reporter" value={p.reporter} />
          <Field label="Inicio" value={p.startDate ? fmtDate(p.startDate) : null} />
          <Field label="Entrega" value={p.dueDate ? fmtDate(p.dueDate) : null} />
          <Field label="Horas estimadas" value={p.estimatedAutomationHours} />
          <Field label="Horas asignadas" value={p.assignedAutomationHours} />
          <Field label="Riesgo" value={p.riskLevel ? RISK_LABELS[p.riskLevel] : null} />
          <Field label="Alcance automatización" value={p.automationScope} />
        </div>
        {p.description && <p className="mt-4 border-t border-border pt-4 text-sm leading-6 text-fg">{p.description}</p>}
      </Card>

      {data.questions.length > 0 && (
        <Card className="border-sky-200 bg-sky-50/40 p-4 dark:border-sky-900/50 dark:bg-sky-950/10">
          <h3 className="flex items-center gap-2 text-sm font-semibold text-fg"><CircleHelp className="h-4 w-4 text-sky-600" /> Información faltante</h3>
          <ul className="mt-2 space-y-1.5">
            {data.questions.map((q) => (
              <li key={q.id} className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                <span className="text-[13px] text-fg">{q.question}</span>
                <Button size="sm" variant="soft" onClick={() => ask({ text: "", questionId: q.id, questionText: q.question })}>Responder</Button>
              </li>
            ))}
          </ul>
        </Card>
      )}

      <div className="grid gap-5 lg:grid-cols-3">
        <div className="space-y-3 lg:col-span-2">
          <h3 className="text-sm font-semibold text-fg">Actividades ({data.activities.length})</h3>
          {data.activities.length === 0 ? <Card><EmptyState title="Sin actividades" /></Card> : (
            <div className="grid gap-2.5 sm:grid-cols-2">{data.activities.map((a) => <ActivityCard key={a.id} a={a} />)}</div>
          )}
          {data.pullRequests.length > 0 && (
            <>
              <h3 className="pt-2 text-sm font-semibold text-fg">Pull Requests</h3>
              {data.pullRequests.map((pr) => <PRSummaryCard key={pr.id} pr={pr} />)}
            </>
          )}
        </div>
        <div className="space-y-5">
          <Card>
            <CardHeader title="Personas" />
            <ul className="space-y-2 px-4 pb-4">
              {data.people.length === 0 ? <li className="text-xs text-subtle">Por confirmar</li> : data.people.map((x) => (
                <li key={x.id}><Link to={`/people/${x.id}`} className="flex items-center gap-2 text-sm text-fg hover:text-accent"><Avatar name={x.name} size="sm" /> {x.name}</Link></li>
              ))}
            </ul>
          </Card>
          <Card>
            <CardHeader title="Bloqueos abiertos" />
            <ul className="space-y-2 px-4 pb-4">
              {data.blockers.length === 0 ? <li className="text-xs text-subtle">Ninguno</li> : data.blockers.map((b) => (
                <li key={b.id} className="text-[13px] text-fg"><BlockerTypeBadge type={b.type} /> <span className="ml-1">{b.description}</span></li>
              ))}
            </ul>
          </Card>
          {data.initiatives.length > 0 && (
            <Card>
              <CardHeader title="Iniciativas" />
              <ul className="space-y-1.5 px-4 pb-4">
                {data.initiatives.map((i) => <li key={i.id}><Link to={`/initiatives/${i.id}`} className="text-sm text-fg hover:text-accent">{i.name}</Link></li>)}
              </ul>
            </Card>
          )}
        </div>
      </div>
      <ProjectFormDialog open={edit} onOpenChange={setEdit} project={p} />
    </div>
  );
}

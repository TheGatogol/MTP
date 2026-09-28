import { useQuery } from "@tanstack/react-query";
import { ArrowLeft, Bot, GitPullRequest, Hammer, Pencil, Plus } from "lucide-react";
import { useState } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { useAgentUI, usePageContext } from "@/components/agent/AgentUI";
import { BuildDialog, PRFormDialog } from "@/components/forms";
import { HistoryList } from "@/components/HistoryTimeline";
import { PRSummaryCard } from "@/components/PRSummary";
import { Button, Card, Chip, EmptyState, ErrorState, PageHeader, PageLoader } from "@/components/ui";
import { api } from "@/lib/api";
import { APPROVAL_LABELS, AUTOMATION_LABELS, BUILD_LABELS, MERGE_LABELS, REGRESSION_LABELS } from "@/lib/labels";
import type { PullRequest } from "@/lib/types";

const FILTERS: { id: string; label: string; test: (p: PullRequest) => boolean }[] = [
  { id: "open", label: "Abiertas", test: (p) => Boolean(p.isOpen) },
  { id: "ready", label: "Listas para merge", test: (p) => Boolean(p.isOpen) && p.buildStatus === "PASSED" && p.automationStatus === "COMPLETED" },
  { id: "failed", label: "Build Failed", test: (p) => p.buildStatus === "FAILED" },
  { id: "regression", label: "Pendiente de regresión", test: (p) => Boolean(p.isOpen) && ["PENDING", "RUNNING", "UNKNOWN"].includes(p.regressionStatus) },
  { id: "merged", label: "Mergeadas", test: (p) => p.status === "MERGED" },
  { id: "all", label: "Todas", test: () => true },
];

export function PullRequestsPage() {
  const [params, setParams] = useSearchParams();
  const filter = params.get("filter") ?? "open";
  const [newOpen, setNewOpen] = useState(false);
  const { data = [], isLoading, error, refetch } = useQuery({ queryKey: ["prs"], queryFn: api.prs.list });
  const f = FILTERS.find((x) => x.id === filter) ?? FILTERS[0]!;
  const list = data.filter(f.test);

  return (
    <div>
      <PageHeader title="Pull Requests" subtitle="Automatización, builds, regresión, VoBo y merge en un vistazo."
        actions={<Button onClick={() => setNewOpen(true)}><Plus className="h-4 w-4" /> Nueva PR</Button>} />
      <div className="-mx-4 mb-4 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:px-0">
        {FILTERS.map((x) => (
          <Chip key={x.id} active={filter === x.id} count={data.filter(x.test).length} onClick={() => setParams({ filter: x.id }, { replace: true })}>{x.label}</Chip>
        ))}
      </div>
      {isLoading ? <PageLoader /> : error ? <ErrorState error={error} onRetry={refetch} /> : list.length === 0 ? (
        <Card><EmptyState icon={<GitPullRequest className="h-6 w-6" />} title="Sin PR con este filtro" /></Card>
      ) : (
        <div className="grid gap-3 lg:grid-cols-2">
          {list.map((p) => (
            <div key={p.id}>
              <PRSummaryCard pr={p} />
              {p.activityTitle && (
                <Link to={`/activities/${p.activityId}`} className="mt-1 block px-1 text-[11px] text-subtle hover:text-accent">Actividad: {p.activityTitle}</Link>
              )}
            </div>
          ))}
        </div>
      )}
      <PRFormDialog open={newOpen} onOpenChange={setNewOpen} />
    </div>
  );
}

function Row({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between gap-3 border-b border-border py-2 last:border-0">
      <span className="text-xs text-muted">{label}</span>
      <span className="text-right text-sm text-fg">{value ?? <i className="text-subtle">Por confirmar</i>}</span>
    </div>
  );
}

export function PullRequestDetailPage() {
  const { id = "" } = useParams();
  const { setOpen } = useAgentUI();
  const [edit, setEdit] = useState(false);
  const [build, setBuild] = useState(false);
  const { data: pr, isLoading, error, refetch } = useQuery({ queryKey: ["pr", id], queryFn: () => api.prs.get(id) });
  usePageContext(pr ? { entityType: "pull_request", entityId: id, label: `PR ${pr.pullRequestNumber}` } : null);

  if (isLoading) return <PageLoader />;
  if (error || !pr) return <ErrorState error={error} onRetry={refetch} />;

  return (
    <div className="space-y-5">
      <Link to="/prs" className="inline-flex items-center gap-1 text-xs font-medium text-muted hover:text-fg"><ArrowLeft className="h-3.5 w-3.5" /> Pull Requests</Link>
      <PageHeader
        title={<span className="flex items-center gap-2"><GitPullRequest className="h-6 w-6 text-violet-500" /> PR {pr.pullRequestNumber}</span>}
        subtitle={pr.title}
        actions={<>
          <Button variant="outline" onClick={() => setBuild(true)}><Hammer className="h-4 w-4" /> Registrar build</Button>
          <Button variant="outline" onClick={() => setEdit(true)}><Pencil className="h-4 w-4" /> Editar</Button>
          <Button onClick={() => setOpen(true)}><Bot className="h-4 w-4" /> Preguntar</Button>
        </>}
      />
      <div className="grid gap-5 lg:grid-cols-3">
        <div className="space-y-5 lg:col-span-2">
          <PRSummaryCard pr={pr} />
          <Card className="p-5">
            <h3 className="mb-3 text-sm font-semibold text-fg">Historial de la PR</h3>
            <HistoryList entries={pr.history} showEntity={false} />
          </Card>
        </div>
        <Card className="h-fit p-5">
          <h3 className="mb-2 text-sm font-semibold text-fg">Detalle</h3>
          <Row label="Actividad" value={pr.activityTitle ? <Link className="hover:text-accent" to={`/activities/${pr.activityId}`}>{pr.activityTitle}</Link> : null} />
          <Row label="Proyecto" value={pr.projectName ?? pr.project} />
          <Row label="Jira" value={pr.jiraRef} />
          <Row label="Repositorio" value={pr.repository} />
          <Row label="Rama" value={pr.branch} />
          <Row label="Automatización" value={AUTOMATION_LABELS[pr.automationStatus]} />
          <Row label="Último build" value={pr.latestBuild ? `#${pr.latestBuild} · ${BUILD_LABELS[pr.buildStatus]}` : BUILD_LABELS[pr.buildStatus]} />
          <Row label="Regresión" value={REGRESSION_LABELS[pr.regressionStatus]} />
          <Row label="Comentarios pendientes" value={pr.pendingComments} />
          <Row label="Reviewer" value={pr.reviewer} />
          <Row label="Aprobación" value={APPROVAL_LABELS[pr.approvalStatus]} />
          <Row label="Merge" value={MERGE_LABELS[pr.mergeStatus]} />
          <Row label="Responsable" value={pr.ownerName} />
        </Card>
      </div>
      <PRFormDialog open={edit} onOpenChange={setEdit} pr={pr} />
      <BuildDialog open={build} onOpenChange={setBuild} pr={pr} />
    </div>
  );
}

import { useQuery } from "@tanstack/react-query";
import {
  ArrowLeft, Bot, CalendarClock, CircleHelp, ExternalLink, FolderKanban, Lightbulb, Lock, MoreHorizontal, Pencil,
  Plus, RefreshCw, Sparkles, Trash2,
} from "lucide-react";
import { useState, type ReactNode } from "react";
import ReactMarkdown from "react-markdown";
import { Link, useNavigate, useParams, useSearchParams } from "react-router-dom";
import { ActionList } from "@/components/ActionList";
import { ContextChat } from "@/components/agent/AgentPanel";
import { useAgentUI, usePageContext } from "@/components/agent/AgentUI";
import { Avatar, PriorityBadge, RiskBadge, SeverityDot, ToConfirm, TrafficLight } from "@/components/badges";
import { BlockerList } from "@/components/BlockerList";
import { ActivityFormDialog, BlockerFormDialog, PRFormDialog } from "@/components/forms";
import { HistoryList } from "@/components/HistoryTimeline";
import { PRSummaryCard } from "@/components/PRSummary";
import {
  Badge, Button, Card, ConfirmModal, EmptyState, ErrorState, Input, PageLoader, Select, Tabs, TabsContent, TabsList,
} from "@/components/ui";
import { api, ApiError } from "@/lib/api";
import { STATUS_LABELS, STATUS_ORDER } from "@/lib/labels";
import { errorMessage, useAppMutation, useHealth, useRefreshAll } from "@/lib/queries";
import type { ActivityDetail } from "@/lib/types";
import { dueLabel, fmtDate, fmtDateTime, relativeTime } from "@/lib/utils";
import { toast } from "sonner";

function Info({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="min-w-0">
      <dt className="text-[11px] font-medium uppercase tracking-wide text-subtle">{label}</dt>
      <dd className="mt-0.5 text-sm text-fg">{children}</dd>
    </div>
  );
}

function StatusSelect({ d }: { d: ActivityDetail }) {
  const a = d.activity;
  const refresh = useRefreshAll();
  const [confirm, setConfirm] = useState<string | null>(null);
  const move = async (status: string, confirmed = false) => {
    try {
      await api.activities.move(a.id, status, confirmed);
      toast.success(`Estado: ${STATUS_LABELS[status]}`);
      setConfirm(null);
      refresh();
    } catch (e) {
      if (e instanceof ApiError && e.requiresConfirmation) setConfirm(status);
      else toast.error(errorMessage(e));
    }
  };
  return (
    <>
      <Select value={a.status} onChange={(e) => move(e.target.value)} className="h-8 w-auto text-xs">
        {STATUS_ORDER.map((s) => <option key={s} value={s}>{STATUS_LABELS[s]}</option>)}
      </Select>
      <ConfirmModal
        open={Boolean(confirm)}
        onOpenChange={(o) => !o && setConfirm(null)}
        title={`¿Marcar como «${confirm ? STATUS_LABELS[confirm] : ""}»?`}
        description="Es un cambio importante. El estado anterior queda en el historial."
        onConfirm={() => confirm && move(confirm, true)}
      />
    </>
  );
}

function NotesPanel({ d }: { d: ActivityDetail }) {
  const [text, setText] = useState("");
  const add = useAppMutation((t: string) => api.activities.note(d.activity.id, t), { success: "Nota agregada", onSuccess: () => setText("") });
  const notes = [...d.activity.notes].reverse();
  return (
    <div>
      <form className="flex gap-2" onSubmit={(e) => { e.preventDefault(); if (text.trim()) add.mutate(text.trim()); }}>
        <Input value={text} onChange={(e) => setText(e.target.value)} placeholder="Agregar nota / comentario…" />
        <Button type="submit" variant="outline" disabled={!text.trim()} loading={add.isPending}>Agregar</Button>
      </form>
      {notes.length > 0 && (
        <ul className="mt-3 space-y-2">
          {notes.map((n, i) => (
            <li key={i} className="rounded-lg bg-surface-2/60 px-3 py-2">
              <p className="text-[13px] text-fg">{n.text}</p>
              <p className="mt-0.5 text-[11px] text-subtle">{fmtDateTime(n.createdAt)} · {n.source === "AGENT" ? "Agente" : "Manual"}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export function ActivityDetailPage() {
  const { id = "" } = useParams();
  const navigate = useNavigate();
  const [params, setParams] = useSearchParams();
  const tab = params.get("tab") ?? "general";
  const { ask, setOpen } = useAgentUI();
  const { data: health } = useHealth();
  const [edit, setEdit] = useState(false);
  const [blockOpen, setBlockOpen] = useState(false);
  const [prOpen, setPrOpen] = useState(false);
  const [menu, setMenu] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);

  const { data: d, isLoading, error, refetch } = useQuery({ queryKey: ["activity", id], queryFn: () => api.activities.get(id) });
  usePageContext(d ? { entityType: "activity", entityId: id, label: d.activity.title } : null);

  const summary = useAppMutation(() => api.activities.aiSummary(id), { success: "Resumen generado" });
  const remove = useAppMutation(() => api.activities.remove(id), { success: "Actividad eliminada (queda en el historial)", onSuccess: () => navigate("/activities") });

  if (isLoading) return <PageLoader />;
  if (error || !d) return <ErrorState error={error} onRetry={refetch} />;

  const a = d.activity;
  const dv = a.derived;
  const openBlockers = d.blockers.filter((b) => b.status === "OPEN");
  const openQuestions = d.questions.filter((q) => q.status === "OPEN");
  const setTab = (t: string) => { const n = new URLSearchParams(params); n.set("tab", t); setParams(n, { replace: true }); };

  return (
    <div className="space-y-5">
      <Link to="/activities" className="inline-flex items-center gap-1 text-xs font-medium text-muted hover:text-fg"><ArrowLeft className="h-3.5 w-3.5" /> Actividades</Link>

      <Card className="p-5">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
          <div className="min-w-0 flex-1">
            <div className="flex items-start gap-3">
              <span className="mt-2"><TrafficLight value={dv.trafficLight} reasons={dv.reasons} size="lg" /></span>
              <div className="min-w-0">
                <h1 className="text-xl font-semibold tracking-tight text-fg sm:text-2xl">{a.title}</h1>
                {a.technicalStatus && <p className="mt-1 text-sm text-muted">{a.technicalStatus}</p>}
              </div>
            </div>
            <div className="mt-3 flex flex-wrap items-center gap-2">
              <StatusSelect d={d} />
              <PriorityBadge priority={a.priority} />
              {a.blocked && <Badge tone="red"><Lock className="h-3 w-3" /> Bloqueada</Badge>}
              <RiskBadge risk={dv.effectiveRisk} />
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <Button variant="outline" onClick={() => setEdit(true)}><Pencil className="h-4 w-4" /> Editar</Button>
            {!a.blocked && <Button variant="outline" onClick={() => setBlockOpen(true)}><Lock className="h-4 w-4" /> Bloqueo</Button>}
            <Button onClick={() => setOpen(true)}><Bot className="h-4 w-4" /> Preguntar</Button>
            <div className="relative">
              <Button variant="ghost" size="icon" onClick={() => setMenu((m) => !m)} aria-label="Más"><MoreHorizontal className="h-4 w-4" /></Button>
              {menu && (
                <div className="absolute right-0 z-20 mt-1 w-44 rounded-lg border border-border bg-surface p-1 shadow-lg" onMouseLeave={() => setMenu(false)}>
                  <button className="flex w-full items-center gap-2 rounded-md px-2.5 py-2 text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-950/40" onClick={() => { setMenu(false); setConfirmDelete(true); }}>
                    <Trash2 className="h-4 w-4" /> Eliminar
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        <dl className="mt-5 grid grid-cols-2 gap-4 border-t border-border pt-4 sm:grid-cols-3 lg:grid-cols-6">
          <Info label="Responsable">
            <span className="flex items-center gap-2"><Avatar name={d.owner?.name} size="sm" /> <ToConfirm value={d.owner?.name} /></span>
          </Info>
          <Info label="Proyecto / DEP">
            {d.project ? <Link to={`/projects/${d.project.id}`} className="hover:text-accent">{d.project.name}</Link> : <ToConfirm value={null} />}
          </Info>
          <Info label="Deadline"><span className={dv.isDueSoon ? "font-medium text-red-600" : ""}>{a.dueDate ? dueLabel(dv.daysToDue, a.dueDate) : <ToConfirm value={null} />}</span></Info>
          <Info label="Última actualización">{relativeTime(a.lastUpdate)}</Info>
          <Info label="Esperando">{a.waitingFor ?? "—"}</Info>
          <Info label="Próximo seguimiento">{a.nextFollowUp ? fmtDate(a.nextFollowUp) : "—"}</Info>
        </dl>

        {dv.reasons.length > 0 && dv.trafficLight !== "GRAY" && (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {dv.reasons.map((r) => <Badge key={r} tone={dv.trafficLight === "RED" ? "red" : "amber"}>{r}</Badge>)}
          </div>
        )}
      </Card>

      <div className="grid gap-5 lg:grid-cols-5">
        <Card className="p-5 lg:col-span-3">
          <div className="flex items-center justify-between gap-2">
            <h2 className="flex items-center gap-2 text-sm font-semibold text-fg"><Sparkles className="h-4 w-4 text-accent" /> Resumen generado por IA</h2>
            <Button size="sm" variant="ghost" onClick={() => summary.mutate(undefined)} loading={summary.isPending} disabled={!health?.ai.available}
              title={health?.ai.available ? "Generar con Ollama" : "Ollama no disponible"}>
              <RefreshCw className="h-3.5 w-3.5" /> {a.aiSummary ? "Regenerar" : "Generar"}
            </Button>
          </div>
          {a.aiSummary ? (
            <>
              <div className="markdown mt-2 text-sm leading-6 text-fg"><ReactMarkdown>{a.aiSummary}</ReactMarkdown></div>
              <p className="mt-2 text-[11px] text-subtle">Generado {relativeTime(a.aiSummaryAt)} · puede estar desactualizado si hubo cambios después.</p>
            </>
          ) : (
            <div className="mt-2 text-sm leading-6 text-muted">
              {a.description ?? "Sin descripción."}
              <p className="mt-2 text-xs text-subtle">
                {health?.ai.available ? "Pulsa «Generar» para un resumen con IA local." : "Ollama no está disponible: se muestra la descripción registrada."}
              </p>
            </div>
          )}
        </Card>

        <Card className="p-5 lg:col-span-2">
          <h2 className="flex items-center gap-2 text-sm font-semibold text-fg"><Lightbulb className="h-4 w-4 text-amber-500" /> Siguiente acción recomendada</h2>
          {d.nextRecommendedAction ? (
            <div className="mt-2">
              <p className="text-[15px] font-medium leading-6 text-fg">{d.nextRecommendedAction.text}</p>
              {d.nextRecommendedAction.reason && <p className="mt-1 text-xs text-muted">Motivo: {d.nextRecommendedAction.reason}</p>}
            </div>
          ) : (
            <p className="mt-2 text-sm text-muted">No hay acciones sugeridas.</p>
          )}
          {d.recommendations.length > 1 && (
            <ul className="mt-3 space-y-1.5 border-t border-border pt-3">
              {d.recommendations.slice(1, 5).map((r) => (
                <li key={r.ruleId + r.entityId} className="flex items-start gap-2 text-[13px] text-muted">
                  <span className="mt-1.5"><SeverityDot severity={r.severity} /></span>
                  <span><span className="text-fg">{r.title}</span> → {r.action}</span>
                </li>
              ))}
            </ul>
          )}
        </Card>
      </div>

      {openQuestions.length > 0 && (
        <Card className="border-sky-200 bg-sky-50/40 p-4 dark:border-sky-900/50 dark:bg-sky-950/10">
          <h2 className="flex items-center gap-2 text-sm font-semibold text-fg"><CircleHelp className="h-4 w-4 text-sky-600" /> El agente necesita confirmar</h2>
          <ul className="mt-2 space-y-1.5">
            {openQuestions.map((q) => (
              <li key={q.id} className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                <span className="text-[13px] text-fg">{q.question}</span>
                <Button size="sm" variant="soft" onClick={() => ask({ text: "", questionId: q.id, questionText: q.question })}>Responder</Button>
              </li>
            ))}
          </ul>
        </Card>
      )}

      <Tabs value={tab} onValueChange={setTab}>
        <TabsList tabs={[
          { value: "general", label: "General" },
          { value: "actions", label: "Acciones", count: d.actions.filter((x) => x.status !== "DONE" && x.status !== "CANCELLED").length },
          { value: "prs", label: "PR", count: d.pullRequests.length },
          { value: "blockers", label: "Bloqueos", count: openBlockers.length },
          { value: "history", label: "Historial", count: d.history.length },
          { value: "ai", label: "IA" },
        ]} />

        <TabsContent value="general" className="pt-5">
          <div className="grid gap-5 lg:grid-cols-3">
            <Card className="p-5 lg:col-span-2">
              <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Info label="Tipo"><ToConfirm value={a.type} /></Info>
                <Info label="Iniciativa">{d.initiative ? <Link to={`/initiatives/${d.initiative.id}`} className="hover:text-accent">{d.initiative.name}</Link> : "—"}</Info>
                <Info label="Solicitante"><ToConfirm value={a.requester} /></Info>
                <Info label="Fecha de solicitud">{a.requestDate ? fmtDate(a.requestDate) : <ToConfirm value={null} />}</Info>
                <Info label="Apoyo">{d.supportPeople.length ? d.supportPeople.map((p) => p.name).join(", ") : "—"}</Info>
                <Info label="Horas (consumidas / estimadas)">{a.consumedHours ?? "—"} / {a.estimatedHours ?? <ToConfirm value={null} />}</Info>
                <Info label="Riesgo declarado"><ToConfirm value={a.riskLevel}>{a.riskLevel}</ToConfirm>{a.riskReason && <span className="block text-xs text-muted">{a.riskReason}</span>}</Info>
                <Info label="Resultado">{a.result ?? "—"}</Info>
                <Info label="Siguiente acción (registrada)">{a.nextAction ?? "—"}</Info>
                <Info label="Creada">{fmtDateTime(a.createdAt)}</Info>
              </dl>
              {a.description && (
                <div className="mt-5 border-t border-border pt-4">
                  <p className="text-[11px] font-medium uppercase tracking-wide text-subtle">Descripción</p>
                  <p className="mt-1 whitespace-pre-wrap text-sm leading-6 text-fg">{a.description}</p>
                </div>
              )}
              {a.evidenceUrls.length > 0 && (
                <div className="mt-4">
                  <p className="text-[11px] font-medium uppercase tracking-wide text-subtle">Evidencias</p>
                  <ul className="mt-1 space-y-1">
                    {a.evidenceUrls.map((u) => (
                      <li key={u}><a href={u} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-sm text-accent hover:underline">{u} <ExternalLink className="h-3 w-3" /></a></li>
                    ))}
                  </ul>
                </div>
              )}
            </Card>
            <Card className="p-5">
              <h3 className="mb-3 text-sm font-semibold text-fg">Notas</h3>
              <NotesPanel d={d} />
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="actions" className="pt-5">
          <Card className="p-5"><ActionList activityId={a.id} actions={d.actions} /></Card>
        </TabsContent>

        <TabsContent value="prs" className="space-y-3 pt-5">
          <div className="flex justify-end"><Button variant="outline" onClick={() => setPrOpen(true)}><Plus className="h-4 w-4" /> Vincular PR</Button></div>
          {d.pullRequests.length === 0 ? (
            <Card><EmptyState icon={<FolderKanban className="h-6 w-6" />} title="Sin PR vinculadas" /></Card>
          ) : d.pullRequests.map((p) => <PRSummaryCard key={p.id} pr={p} />)}
        </TabsContent>

        <TabsContent value="blockers" className="space-y-3 pt-5">
          <div className="flex justify-end"><Button variant="outline" onClick={() => setBlockOpen(true)}><Lock className="h-4 w-4" /> Registrar bloqueo</Button></div>
          <BlockerList blockers={d.blockers} />
        </TabsContent>

        <TabsContent value="history" className="pt-5">
          <Card className="p-5"><HistoryList entries={d.history} /></Card>
        </TabsContent>

        <TabsContent value="ai" className="pt-5">
          <Card className="h-[620px] overflow-hidden">
            <ContextChat context={{ entityType: "activity", entityId: a.id, label: a.title }} className="h-full" />
          </Card>
          <p className="mt-2 flex items-center gap-1 text-xs text-subtle"><CalendarClock className="h-3 w-3" /> El chat de esta actividad es persistente: el agente sabe que hablas de «{a.title}».</p>
        </TabsContent>
      </Tabs>

      <ActivityFormDialog open={edit} onOpenChange={setEdit} activity={a} />
      <BlockerFormDialog open={blockOpen} onOpenChange={setBlockOpen} activityId={a.id} />
      <PRFormDialog open={prOpen} onOpenChange={setPrOpen} activityId={a.id} />
      <ConfirmModal open={confirmDelete} onOpenChange={setConfirmDelete} danger title="¿Eliminar la actividad?"
        description="Se eliminarán también sus acciones y bloqueos. El estado anterior completo queda guardado en el historial."
        confirmLabel="Eliminar" loading={remove.isPending} onConfirm={() => remove.mutate(undefined)} />
    </div>
  );
}

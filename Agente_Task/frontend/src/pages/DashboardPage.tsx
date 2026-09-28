import { useQuery } from "@tanstack/react-query";
import {
  ArrowRight, ArrowUp, CircleHelp, GitPullRequest, Hourglass, Lock, Plus, ShieldAlert, Sparkles, TriangleAlert,
} from "lucide-react";
import { useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { useAgentUI } from "@/components/agent/AgentUI";
import { SeverityDot } from "@/components/badges";
import { entityUrl } from "@/components/chat/AgentMessage";
import { PendingChangeCard } from "@/components/chat/PendingChangeCard";
import { ActivityFormDialog } from "@/components/forms";
import { HistoryList } from "@/components/HistoryTimeline";
import { Badge, Button, Card, CardHeader, EmptyState, ErrorState, PageLoader } from "@/components/ui";
import { api } from "@/lib/api";
import { RISK_LABELS } from "@/lib/labels";
import { useAppMutation } from "@/lib/queries";
import type { OpenQuestion } from "@/lib/types";
import { cn } from "@/lib/utils";

function Kpi({ value, label, icon, to, tone }: { value: number; label: string; icon: ReactNode; to: string; tone: string }) {
  return (
    <Link to={to} className="group rounded-xl border border-border bg-surface p-4 transition-shadow hover:shadow-md">
      <div className="flex items-center justify-between">
        <span className={cn("flex h-8 w-8 items-center justify-center rounded-lg", tone)}>{icon}</span>
        <ArrowRight className="h-4 w-4 text-subtle opacity-0 transition-opacity group-hover:opacity-100" />
      </div>
      <p className="mt-3 text-2xl font-semibold tracking-tight text-fg">{value}</p>
      <p className="text-xs text-muted">{label}</p>
    </Link>
  );
}

function QuickAsk() {
  const { ask } = useAgentUI();
  const [text, setText] = useState("");
  const submit = () => {
    if (!text.trim()) return;
    ask({ text, autoSend: true });
    setText("");
  };
  return (
    <div className="flex items-center gap-2 rounded-xl border border-border bg-surface p-1.5 pl-3 shadow-sm focus-within:border-accent/60 focus-within:ring-2 focus-within:ring-accent/20">
      <Sparkles className="h-4 w-4 shrink-0 text-accent" />
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && submit()}
        placeholder="Cuéntale al agente qué pasó… ej. «DIFO ya tiene VoBo, falta el merge»"
        className="h-9 min-w-0 flex-1 bg-transparent text-sm text-fg placeholder:text-subtle focus:outline-none"
      />
      <Button size="icon" onClick={submit} disabled={!text.trim()} aria-label="Enviar al agente"><ArrowUp className="h-4 w-4" /></Button>
    </div>
  );
}

function QuestionRow({ q }: { q: OpenQuestion }) {
  const { ask } = useAgentUI();
  const dismiss = useAppMutation(() => api.questions.dismiss(q.id), { success: "Pregunta descartada" });
  return (
    <li className="group rounded-lg px-2 py-2 hover:bg-surface-2">
      <p className="text-[13px] leading-5 text-fg">{q.question}</p>
      <div className="mt-1 flex items-center gap-2">
        {q.entityLabel && <span className="truncate text-[11px] text-subtle">{q.entityLabel}</span>}
        <div className="ml-auto flex shrink-0 gap-1">
          <button onClick={() => ask({ text: "", questionId: q.id, questionText: q.question })} className="rounded px-1.5 py-0.5 text-[11px] font-medium text-accent hover:bg-accent-soft">Responder</button>
          <button onClick={() => dismiss.mutate(undefined)} className="rounded px-1.5 py-0.5 text-[11px] text-subtle hover:bg-surface hover:text-fg">Descartar</button>
        </div>
      </div>
    </li>
  );
}

export function DashboardPage() {
  const { setBriefingOpen } = useAgentUI();
  const [newOpen, setNewOpen] = useState(false);
  const { data, isLoading, error, refetch } = useQuery({ queryKey: ["dashboard"], queryFn: api.dashboard });

  if (isLoading) return <PageLoader />;
  if (error || !data) return <ErrorState error={error} onRetry={refetch} />;
  const k = data.kpis;
  const totalLights = data.trafficLights.RED + data.trafficLights.YELLOW + data.trafficLights.GREEN || 1;

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-subtle">{data.date}</p>
          <h1 className="mt-1 text-2xl font-semibold tracking-tight text-fg sm:text-3xl">{data.greeting}, {data.userName}.</h1>
          <p className="mt-1 text-sm text-muted">
            {k.active} actividades activas · {data.attention.length} necesitan tu atención
            {k.pendingConfirmations > 0 && <> · <b className="text-amber-600 dark:text-amber-400">{k.pendingConfirmations} por confirmar</b></>}
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={() => setNewOpen(true)}><Plus className="h-4 w-4" /> Actividad</Button>
          <Button onClick={() => setBriefingOpen(true)}><Sparkles className="h-4 w-4" /> ¿Qué tengo que revisar hoy?</Button>
        </div>
      </div>

      <QuickAsk />

      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        <Kpi value={k.openPrs} label="PR abiertas" to="/prs" icon={<GitPullRequest className="h-4 w-4" />} tone="bg-violet-50 text-violet-600 dark:bg-violet-950/60 dark:text-violet-300" />
        <Kpi value={k.blocked} label="Actividades bloqueadas" to="/activities?filter=blocked" icon={<Lock className="h-4 w-4" />} tone="bg-red-50 text-red-600 dark:bg-red-950/60 dark:text-red-300" />
        <Kpi value={k.highRisks} label="Riesgos altos" to="/activities?filter=high_risk" icon={<ShieldAlert className="h-4 w-4" />} tone="bg-amber-50 text-amber-600 dark:bg-amber-950/60 dark:text-amber-300" />
        <Kpi value={k.waitingThirdParty} label="Esperando a terceros" to="/activities?filter=waiting" icon={<Hourglass className="h-4 w-4" />} tone="bg-sky-50 text-sky-600 dark:bg-sky-950/60 dark:text-sky-300" />
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-2">
          <Card>
            <CardHeader title="Necesitan tu atención" subtitle="Priorizado por reglas: bloqueos, deadlines, builds, seguimientos" icon={<TriangleAlert className="h-4 w-4" />} />
            {data.attention.length === 0 ? (
              <EmptyState title="Todo en orden" description="No hay puntos críticos en este momento." />
            ) : (
              <ol className="divide-y divide-border">
                {data.attention.map((i, n) => {
                  const url = entityUrl({ type: i.entityType, id: i.entityId });
                  return (
                    <li key={i.key}>
                      <Link to={url ?? "#"} className="flex items-start gap-3 px-4 py-3.5 hover:bg-surface-2/60">
                        <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-surface-2 text-xs font-semibold text-muted">{n + 1}</span>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-2">
                            <SeverityDot severity={i.severity} />
                            <p className="truncate text-sm font-semibold text-fg">{i.name}</p>
                          </div>
                          <p className="mt-0.5 text-[13px] text-muted">{i.situation}</p>
                          <p className="mt-1 text-[13px] text-fg"><span className="font-medium text-accent">Recomendación:</span> {i.action}</p>
                        </div>
                        <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-subtle" />
                      </Link>
                    </li>
                  );
                })}
              </ol>
            )}
          </Card>

          {data.pendingChanges.length > 0 && (
            <Card>
              <CardHeader title="Cambios esperando tu confirmación" subtitle="El agente no aplica cambios importantes ni inferencias sin tu visto bueno" />
              <div className="space-y-2 px-4 pb-4">
                {data.pendingChanges.map((p) => <PendingChangeCard key={p.id} pc={p} />)}
              </div>
            </Card>
          )}

          <Card>
            <CardHeader title="Actividad reciente" action={<Link to="/history" className="text-xs font-medium text-accent hover:underline">Ver historial</Link>} />
            <div className="px-4 pb-3"><HistoryList entries={data.recentHistory} compact /></div>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="p-4">
            <h3 className="text-sm font-semibold text-fg">Semáforo</h3>
            <div className="mt-3 flex h-2.5 overflow-hidden rounded-full bg-surface-2">
              <div className="bg-red-500" style={{ width: `${(data.trafficLights.RED / totalLights) * 100}%` }} />
              <div className="bg-amber-400" style={{ width: `${(data.trafficLights.YELLOW / totalLights) * 100}%` }} />
              <div className="bg-emerald-500" style={{ width: `${(data.trafficLights.GREEN / totalLights) * 100}%` }} />
            </div>
            <div className="mt-3 grid grid-cols-3 gap-2 text-center">
              {([["RED", "Rojo", "text-red-600"], ["YELLOW", "Amarillo", "text-amber-600"], ["GREEN", "Verde", "text-emerald-600"]] as const).map(([key, l, c]) => (
                <div key={key}>
                  <p className={cn("text-lg font-semibold", c)}>{data.trafficLights[key]}</p>
                  <p className="text-[11px] text-muted">{l}</p>
                </div>
              ))}
            </div>
          </Card>

          <Card>
            <CardHeader title="Información por confirmar" subtitle={`${data.openQuestions.length} preguntas abiertas del agente`} icon={<CircleHelp className="h-4 w-4" />} />
            {data.openQuestions.length === 0 ? (
              <EmptyState title="Sin preguntas abiertas" />
            ) : (
              <ul className="max-h-[420px] space-y-0.5 overflow-y-auto px-2 pb-3">
                {data.openQuestions.map((q) => <QuestionRow key={q.id} q={q} />)}
              </ul>
            )}
          </Card>

          {data.risks.length > 0 && (
            <Card>
              <CardHeader title="Riesgos operativos" icon={<ShieldAlert className="h-4 w-4" />} />
              <ul className="space-y-3 px-4 pb-4">
                {data.risks.map((r) => (
                  <li key={r.id}>
                    <div className="flex items-center gap-2">
                      <p className="text-[13px] font-medium text-fg">{r.title}</p>
                      <Badge tone={r.level === "HIGH" ? "red" : r.level === "MEDIUM" ? "amber" : "gray"}>{r.level ? RISK_LABELS[r.level] : "Nivel por confirmar"}</Badge>
                    </div>
                    {r.description && <p className="mt-0.5 text-xs text-muted">{r.description}</p>}
                  </li>
                ))}
              </ul>
            </Card>
          )}
        </div>
      </div>

      <ActivityFormDialog open={newOpen} onOpenChange={setNewOpen} />
    </div>
  );
}

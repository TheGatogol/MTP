import { CircleCheck, CircleX, Cpu, Database, RefreshCw, SlidersHorizontal } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { Badge, Button, Card, CardHeader, ErrorState, Field, Input, PageHeader, PageLoader, Select } from "@/components/ui";
import { api } from "@/lib/api";
import { useAppMutation, useHealth, usePeople, useSettings } from "@/lib/queries";

function StatusLine({ ok, label, detail }: { ok: boolean; label: string; detail?: ReactNode }) {
  return (
    <div className="flex items-start gap-2.5">
      {ok ? <CircleCheck className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" /> : <CircleX className="mt-0.5 h-4 w-4 shrink-0 text-red-500" />}
      <div>
        <p className="text-sm font-medium text-fg">{label}</p>
        {detail && <p className="text-xs text-muted">{detail}</p>}
      </div>
    </div>
  );
}

export function SettingsPage() {
  const { data: settings, isLoading, error, refetch } = useSettings();
  const { data: health, refetch: refetchHealth, isFetching } = useHealth();
  const { data: people = [] } = usePeople();
  const [form, setForm] = useState({ blockedEscalationDays: "2", staleDays: "3", dueSoonDays: "2", maxActiveActivities: "5", currentUserId: "", aiModelOverride: "" });

  useEffect(() => {
    if (!settings) return;
    const a = settings.app;
    setForm({
      blockedEscalationDays: String(a.blockedEscalationDays), staleDays: String(a.staleDays), dueSoonDays: String(a.dueSoonDays),
      maxActiveActivities: String(a.maxActiveActivities), currentUserId: a.currentUserId ?? "", aiModelOverride: a.aiModelOverride ?? "",
    });
  }, [settings]);

  const save = useAppMutation(() => api.settings.update({
    blockedEscalationDays: Number(form.blockedEscalationDays), staleDays: Number(form.staleDays), dueSoonDays: Number(form.dueSoonDays),
    maxActiveActivities: Number(form.maxActiveActivities), currentUserId: form.currentUserId || null, aiModelOverride: form.aiModelOverride || null,
  }), { success: "Configuración guardada" });

  if (isLoading) return <PageLoader />;
  if (error || !settings) return <ErrorState error={error} onRetry={refetch} />;
  const ai = health?.ai;
  const bind = (k: keyof typeof form) => ({ value: form[k], onChange: (e: { target: { value: string } }) => setForm((f) => ({ ...f, [k]: e.target.value })) });

  return (
    <div className="space-y-5">
      <PageHeader title="Configuración" subtitle="La URL y el modelo base de Ollama vienen de variables de entorno del backend (backend/.env)." />
      <div className="grid gap-5 lg:grid-cols-2">
        <Card>
          <CardHeader title="IA local (Ollama)" icon={<Cpu className="h-4 w-4" />}
            action={<Button size="sm" variant="ghost" onClick={() => refetchHealth()} loading={isFetching}><RefreshCw className="h-3.5 w-3.5" /> Verificar</Button>} />
          <div className="space-y-3 px-4 pb-4">
            <StatusLine ok={Boolean(ai?.available)} label={ai?.available ? "Ollama conectado" : "Ollama no disponible"} detail={ai?.error ?? ai?.base_url} />
            <StatusLine ok={Boolean(ai?.model_installed)} label={`Modelo ${ai?.model ?? ""} ${ai?.model_installed ? "descargado" : "no descargado"}`}
              detail={ai?.model_loaded ? "Cargado en memoria (respuestas rápidas)" : "Se cargará en la primera consulta (~30-60 s)"} />
            <div className="grid gap-3 border-t border-border pt-3 sm:grid-cols-2">
              <Field label="Modelo (override)" hint={`Vacío = OLLAMA_MODEL del .env (${settings.env.ollamaModel})`}>
                <Select {...bind("aiModelOverride")}>
                  <option value="">Usar .env ({settings.env.ollamaModel})</option>
                  {(ai?.installed_models ?? []).map((m) => <option key={m} value={m}>{m}</option>)}
                </Select>
              </Field>
              <Field label="URL"><Input value={settings.env.ollamaBaseUrl} readOnly className="bg-surface-2 text-muted" /></Field>
            </div>
            <p className="text-[11px] text-subtle">Contexto: {settings.env.ollamaNumCtx} tokens · Proveedor: {settings.env.aiProvider}. Ningún dato sale de tu equipo.</p>
          </div>
        </Card>

        <Card>
          <CardHeader title="Persistencia" icon={<Database className="h-4 w-4" />} />
          <div className="space-y-3 px-4 pb-4">
            <StatusLine ok={Boolean(health?.firestore.ok)} label={health?.firestore.ok ? "Firestore conectado" : "Firestore con error"}
              detail={health?.firestore.error ?? `Proyecto: ${settings.env.firebaseProjectId}`} />
            <p className="text-xs text-muted">Zona horaria: {settings.env.timezone}</p>
            <p className="text-xs text-muted">Confirmaciones pendientes: <Badge tone={settings.pendingCount ? "amber" : "gray"}>{settings.pendingCount}</Badge></p>
          </div>
        </Card>
      </div>

      <Card>
        <CardHeader title="Reglas y umbrales" subtitle="El motor de recomendaciones es determinístico y funciona aunque Ollama esté apagado." icon={<SlidersHorizontal className="h-4 w-4" />} />
        <div className="grid gap-3 px-4 pb-4 sm:grid-cols-2 lg:grid-cols-5">
          <Field label="Escalar bloqueo tras (días)"><Input type="number" min="0" {...bind("blockedEscalationDays")} /></Field>
          <Field label="Sin actualizar tras (días)"><Input type="number" min="1" {...bind("staleDays")} /></Field>
          <Field label="Deadline cercano (días)"><Input type="number" min="0" {...bind("dueSoonDays")} /></Field>
          <Field label="Máx. actividades activas"><Input type="number" min="1" {...bind("maxActiveActivities")} /></Field>
          <Field label="Yo soy («Mis actividades»)">
            <Select {...bind("currentUserId")}>
              <option value="">—</option>
              {people.map((p) => <option key={p.id} value={p.id}>{p.name}</option>)}
            </Select>
          </Field>
        </div>
        <div className="flex justify-end border-t border-border px-4 py-3">
          <Button onClick={() => save.mutate(undefined)} loading={save.isPending}>Guardar</Button>
        </div>
        <div className="border-t border-border px-4 py-4">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-subtle">Reglas activas ({settings.rules.length})</p>
          <ul className="grid gap-1.5 sm:grid-cols-2">
            {settings.rules.map((r) => (
              <li key={r.id} className="text-[13px] text-muted"><code className="rounded bg-surface-2 px-1 text-[11px] text-fg">{r.id}</code> {r.description}</li>
            ))}
          </ul>
        </div>
      </Card>
    </div>
  );
}

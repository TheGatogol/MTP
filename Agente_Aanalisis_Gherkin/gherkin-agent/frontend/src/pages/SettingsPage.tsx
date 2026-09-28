import {useMutation, useQueryClient} from '@tanstack/react-query';
import {Database, RefreshCw} from 'lucide-react';
import {toast} from 'sonner';

import {Button, Card, Spinner, Toggle} from '../components/ui';
import {api} from '../lib/api';
import {useHealth, useModels, useSaveSettings, useSettings} from '../lib/queries';

export function SettingsPage() {
    const settings = useSettings();
    const health = useHealth();
    const models = useModels();
    const save = useSaveSettings();
    const qc = useQueryClient();
    const rebuild = useMutation({
        mutationFn: api.rebuildIndex,
        onSuccess: () => {
            toast.success('Reconstruyendo el índice del framework…');
            setTimeout(() => qc.invalidateQueries(), 4000);
        },
    });
    const s = settings.data;
    const h = health.data;

    if (!s) return <div className="flex justify-center p-16"><Spinner /></div>;

    return (
        <div className="mx-auto grid max-w-5xl gap-4 p-4 md:grid-cols-2 lg:p-6">
            <Card className="p-5">
                <h2 className="mb-1 font-semibold">IA local (Ollama)</h2>
                <p className="mb-3 text-xs text-slate-500">Sin IA, el agente sigue funcionando con reglas determinísticas y correcciones automáticas.</p>
                <Toggle label="Usar IA" hint="Revisión de métricas que requieren criterio y correcciones con IA"
                    checked={s.aiEnabled} onChange={(v) => save.mutate({aiEnabled: v})} />
                <Toggle label="Revisar también código con IA" hint="Además del feature, steps/pages/navigation principales (más lento)"
                    checked={s.aiReviewCode} onChange={(v) => save.mutate({aiReviewCode: v})} />
                <Toggle label="Generar correcciones con IA" hint="Si se desactiva, solo se proponen correcciones exactas por reglas"
                    checked={s.aiGenerateFixes} onChange={(v) => save.mutate({aiGenerateFixes: v})} />
                <label className="mt-3 block text-sm font-medium">Modelo</label>
                <select className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm dark:border-slate-700 dark:bg-slate-900"
                    value={s.modelOverride ?? ''} onChange={(e) => save.mutate({modelOverride: e.target.value || null})}>
                    <option value="">{s.defaultModel} (por defecto, .env)</option>
                    {models.data?.models.filter((m) => m !== s.defaultModel).map((m) => <option key={m} value={m}>{m}</option>)}
                </select>
                <label className="mt-3 block text-sm font-medium">Archivos de código por análisis (IA)</label>
                <input type="number" min={0} max={10} value={s.maxAiFiles}
                    onChange={(e) => save.mutate({maxAiFiles: Number(e.target.value)})}
                    className="mt-1 w-24 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm dark:border-slate-700 dark:bg-slate-900" />
                <p className="mt-1 text-xs text-slate-500">Menos archivos = análisis más rápido. El feature siempre se revisa.</p>
                {h && !h.ai.available && <p className="mt-3 rounded-md bg-amber-50 px-3 py-2 text-xs text-amber-800">{h.ai.error}</p>}
            </Card>

            <Card className="p-5">
                <h2 className="mb-1 font-semibold">Framework y datos</h2>
                <p className="mb-3 text-xs text-slate-500">Todo es local: no hay base de datos. Los reportes y respaldos se guardan como archivos.</p>
                {h && (
                    <dl className="space-y-2 text-sm">
                        <Row k="Framework" v={h.paths.framework} />
                        <Row k="Métricas" v={h.paths.metrics} />
                        <Row k="Datos locales" v={h.paths.data} />
                        <Row k="Índice" v={h.index.state === 'ready'
                            ? `${h.index.features} features · ${h.index.stepDefinitions} steps · ${h.index.jsFiles} JS · ${h.index.recordings} grabaciones (${(h.index.buildMs / 1000).toFixed(1)} s)`
                            : h.index.error ?? 'Construyendo…'} />
                    </dl>
                )}
                <Button className="mt-4" onClick={() => rebuild.mutate()} loading={rebuild.isPending}>
                    <RefreshCw className="size-4" />Reindexar framework
                </Button>
                <p className="mt-2 flex items-center gap-1 text-xs text-slate-500">
                    <Database className="size-3.5" />Reindexa si hiciste git pull o cambiaste archivos fuera del agente.
                </p>
            </Card>
        </div>
    );
}

function Row({k, v}: {k: string; v: string}) {
    return (
        <div>
            <dt className="text-xs text-slate-500">{k}</dt>
            <dd className="break-all">{v}</dd>
        </div>
    );
}

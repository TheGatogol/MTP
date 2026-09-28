import {Bot, FileSearch, Gauge, ListChecks, Sparkles, Wand2} from 'lucide-react';
import type {ReactNode} from 'react';
import {Link, useNavigate} from 'react-router-dom';

import {Button, Card, Empty, SEVERITY_STYLE} from '../components/ui';
import {useApplied, useHealth, useHistory} from '../lib/queries';
import type {Severity} from '../lib/types';
import {cn, fileName, formatDate} from '../lib/utils';

export function DashboardPage() {
    const health = useHealth();
    const history = useHistory();
    const applied = useApplied();
    const navigate = useNavigate();
    const h = health.data;
    const done = (history.data ?? []).filter((r) => r.status === 'done');
    const avg = done.length ? Math.round(done.reduce((a, r) => a + r.score, 0) / done.length) : null;
    const appliedCount = (applied.data ?? []).filter((a) => a.action === 'apply').length;

    return (
        <div className="mx-auto max-w-[1300px] space-y-5 p-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                    <h1 className="text-xl font-semibold text-white">Dashboard</h1>
                    <p className="text-sm text-mtp-muted">Calidad de los Gherkin frente a las métricas de código.</p>
                </div>
                <Button variant="primary" onClick={() => navigate('/analizar')}><Sparkles className="size-4" />Analizar un feature</Button>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <Kpi icon={<FileSearch className="size-5" />} label="Features en el framework" value={h?.index.features ?? '—'} />
                <Kpi icon={<ListChecks className="size-5" />} label="Reglas de métricas" value={h?.rules ?? '—'} />
                <Kpi icon={<Gauge className="size-5" />} label="Puntaje promedio" value={avg ?? '—'} hint={`${done.length} análisis`} />
                <Kpi icon={<Wand2 className="size-5" />} label="Correcciones aplicadas" value={appliedCount} />
            </div>

            <div className="grid gap-4 lg:grid-cols-[1fr_320px]">
                <Card>
                    <div className="flex items-center justify-between border-b border-slate-800 px-4 py-3">
                        <h2 className="font-semibold text-white">Últimos análisis</h2>
                        <Link to="/historial" className="text-xs text-brand-500 hover:underline">Ver historial</Link>
                    </div>
                    {!done.length && <Empty title="Todavía no hay análisis">Empieza en «Analizar» seleccionando un .feature.</Empty>}
                    <ul className="divide-y divide-slate-800">
                        {done.slice(0, 8).map((r) => (
                            <li key={r.id}>
                                <Link to={`/analisis/${r.id}`} className="flex items-center gap-3 px-4 py-2.5 transition hover:bg-brand-50">
                                    <div className="min-w-0 flex-1">
                                        <div className="truncate text-sm font-medium text-white">{fileName(r.featurePath)}</div>
                                        <div className="text-xs text-mtp-muted">{formatDate(r.createdAt)}</div>
                                    </div>
                                    <div className="hidden gap-1 sm:flex">
                                        {(['HIGH', 'MEDIUM', 'LOW'] as Severity[]).map((s) => (
                                            <span key={s} className={cn('rounded px-1.5 text-[11px]', SEVERITY_STYLE[s])}>{r.counts?.[s] ?? 0}</span>
                                        ))}
                                    </div>
                                    <span className="w-10 text-right text-sm font-semibold text-white">{r.score}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </Card>

                <Card className="space-y-3 p-4 text-sm">
                    <h2 className="font-semibold text-white">Estado</h2>
                    <Status label="Índice del framework" ok={h?.index.state === 'ready'}
                        text={h?.index.state === 'ready' ? `${h.index.stepDefinitions} steps · ${h.index.recordings} grabaciones` : 'Construyendo…'} />
                    <Status label="IA local" ok={!!h?.ai.enabled && !!h?.ai.available}
                        text={!h ? '—' : !h.ai.enabled ? 'Desactivada' : h.ai.available ? h.ai.model : (h.ai.error ?? 'No disponible')}
                        icon={<Bot className="size-4" />} />
                </Card>
            </div>
        </div>
    );
}

function Kpi({icon, label, value, hint}: {icon: ReactNode; label: string; value: ReactNode; hint?: string}) {
    return (
        <Card className="p-4">
            <div className="flex items-center gap-2 text-mtp-muted">{icon}<span className="text-xs">{label}</span></div>
            <div className="mt-2 text-2xl font-semibold text-white">{value}</div>
            {hint && <div className="text-xs text-mtp-muted">{hint}</div>}
        </Card>
    );
}

function Status({label, ok, text, icon}: {label: string; ok: boolean; text: string; icon?: ReactNode}) {
    return (
        <div className="flex items-start gap-2">
            <span className={cn('mt-1.5 size-2 shrink-0 rounded-full', ok ? 'bg-emerald-400' : 'bg-amber-400')} />
            <div className="min-w-0">
                <div className="flex items-center gap-1 text-white">{icon}{label}</div>
                <div className="break-words text-xs text-mtp-muted">{text}</div>
            </div>
        </div>
    );
}

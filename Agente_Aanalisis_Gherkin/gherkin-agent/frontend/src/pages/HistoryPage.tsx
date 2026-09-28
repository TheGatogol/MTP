import {Bot, Cpu, RotateCcw, Wand2} from 'lucide-react';
import {Link} from 'react-router-dom';

import {Card, Empty, SEVERITY_STYLE, Spinner} from '../components/ui';
import {useApplied, useHistory} from '../lib/queries';
import type {Severity} from '../lib/types';
import {cn, fileName, formatDate, shortPath} from '../lib/utils';

const LEVEL_DOT = {ok: 'bg-emerald-500', warning: 'bg-amber-500', critical: 'bg-rose-500'};

export function HistoryPage() {
    const history = useHistory();
    const applied = useApplied();
    return (
        <div className="mx-auto grid max-w-[1500px] gap-4 p-4 lg:grid-cols-[1fr_420px] lg:p-6">
            <Card className="min-w-0">
                <div className="border-b border-slate-100 px-4 py-3 dark:border-slate-800">
                    <h2 className="font-semibold">Análisis realizados</h2>
                    <p className="text-xs text-slate-500">Se guardan en local (gherkin-agent/data). Si el archivo no cambió, el siguiente análisis sale de la caché.</p>
                </div>
                {history.isLoading && <div className="flex justify-center p-10"><Spinner /></div>}
                {history.data?.length === 0 && <Empty title="Todavía no hay análisis" />}
                <ul className="divide-y divide-slate-100 dark:divide-slate-800">
                    {history.data?.map((h) => (
                        <li key={h.id}>
                            <Link to={`/analisis/${h.id}`} className="flex items-center gap-3 px-4 py-2.5 hover:bg-slate-50 dark:hover:bg-slate-800/50">
                                <span className={cn('size-2.5 shrink-0 rounded-full', h.status === 'done' ? LEVEL_DOT[h.level] : 'bg-slate-300')} />
                                <div className="min-w-0 flex-1">
                                    <div className="truncate text-sm font-medium">{fileName(h.featurePath)} <span className="font-normal text-slate-500">{h.featureName}</span></div>
                                    <div className="text-xs text-slate-400">{formatDate(h.createdAt)} · {shortPath(h.featurePath)}</div>
                                </div>
                                <div className="hidden gap-1 sm:flex">
                                    {(['HIGH', 'MEDIUM', 'LOW'] as Severity[]).map((s) => (
                                        <span key={s} className={cn('rounded px-1.5 text-[11px]', SEVERITY_STYLE[s])}>{h.counts?.[s] ?? 0}</span>
                                    ))}
                                </div>
                                <span className="w-10 text-right text-sm font-semibold">{h.status === 'done' ? h.score : '—'}</span>
                                {h.aiUsed ? <Bot className="size-4 text-slate-400" /> : <Cpu className="size-4 text-slate-300" />}
                            </Link>
                        </li>
                    ))}
                </ul>
            </Card>
            <Card>
                <div className="border-b border-slate-100 px-4 py-3 dark:border-slate-800">
                    <h2 className="font-semibold">Correcciones aplicadas</h2>
                    <p className="text-xs text-slate-500">Cada cambio tiene respaldo en data/backups.</p>
                </div>
                {applied.data?.length === 0 && <Empty title="Sin correcciones aplicadas" />}
                <ul className="divide-y divide-slate-100 dark:divide-slate-800">
                    {applied.data?.map((a, i) => (
                        <li key={i} className="px-4 py-2.5">
                            <div className="flex items-center gap-2 text-sm">
                                {a.action === 'apply' ? <Wand2 className="size-4 text-brand-600" /> : <RotateCcw className="size-4 text-slate-500" />}
                                <span className="font-medium">{a.action === 'apply' ? 'Aplicada' : 'Revertida'}</span>
                                <span className="truncate text-slate-500">{fileName(a.file)}</span>
                                <Link to={`/analisis/${a.reportId}`} className="ml-auto shrink-0 text-xs text-brand-700 hover:underline dark:text-brand-500">ver</Link>
                            </div>
                            <div className="text-xs text-slate-400">{formatDate(a.at)} · respaldo {a.backupId}</div>
                        </li>
                    ))}
                </ul>
            </Card>
        </div>
    );
}

import {ChevronDown, Search} from 'lucide-react';
import {useMemo, useState} from 'react';

import {Badge, Card, SeverityBadge, Spinner} from '../components/ui';
import {useRules} from '../lib/queries';
import type {Rule, Severity} from '../lib/types';
import {CHECK_LABEL, cn, FIX_LABEL, KIND_LABEL} from '../lib/utils';

const FILTERS: {value: Severity | 'all'; label: string}[] = [
    {value: 'all', label: 'Todas'},
    {value: 'HIGH', label: 'Alta'},
    {value: 'MEDIUM', label: 'Media'},
    {value: 'LOW', label: 'Baja'},
];

export function MetricsPage() {
    const rules = useRules();
    const [q, setQ] = useState('');
    const [severity, setSeverity] = useState<Severity | 'all'>('all');

    const groups = useMemo(() => {
        const list = (rules.data ?? []).filter((r) =>
            (severity === 'all' || r.severity === severity) &&
            (!q || `${r.id} ${r.title} ${r.description} ${r.source}`.toLowerCase().includes(q.toLowerCase())));
        const map = new Map<string, Rule[]>();
        for (const r of list) map.set(r.category, [...(map.get(r.category) ?? []), r]);
        return [...map.entries()];
    }, [rules.data, q, severity]);

    return (
        <div className="mx-auto max-w-[1100px] p-4 lg:p-6">
            <Card>
                <div className="flex flex-wrap items-center gap-2 border-b border-slate-100 px-4 py-3 dark:border-slate-800">
                    <h2 className="font-semibold">Catálogo de métricas</h2>
                    <span className="text-sm text-slate-500">{rules.data?.length ?? 0} reglas</span>
                    <div className="ml-auto flex flex-wrap items-center gap-2">
                        {FILTERS.map((f) => (
                            <button key={f.value} onClick={() => setSeverity(f.value)}
                                className={cn('rounded-md px-2 py-1 text-xs', severity === f.value
                                    ? 'bg-slate-800 text-white dark:bg-white dark:text-mtp-navy'
                                    : 'text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800')}>
                                {f.label}
                            </button>
                        ))}
                        <div className="flex items-center gap-1.5 rounded-md border border-slate-200 px-2 dark:border-slate-700">
                            <Search className="size-3.5 text-slate-400" />
                            <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Buscar regla…" className="h-7 w-40 bg-transparent text-xs outline-none" />
                        </div>
                    </div>
                </div>
                {rules.isLoading && <div className="flex justify-center p-10"><Spinner /></div>}
                <div className="space-y-6 p-4">
                    {groups.map(([cat, list]) => (
                        <section key={cat}>
                            <h3 className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">{cat} ({list.length})</h3>
                            <div className="space-y-1.5">{list.map((r) => <RuleRow key={r.id} r={r} />)}</div>
                        </section>
                    ))}
                    {!rules.isLoading && !groups.length && <p className="py-8 text-center text-sm text-slate-500">Ninguna regla con esos filtros.</p>}
                </div>
            </Card>
        </div>
    );
}

function RuleRow({r}: {r: Rule}) {
    const [open, setOpen] = useState(false);
    return (
        <div className="rounded-lg border border-slate-200 dark:border-slate-800">
            <button onClick={() => setOpen(!open)} className="flex w-full items-center gap-2 px-3 py-2 text-left">
                <SeverityBadge severity={r.severity} />
                <span className="w-16 shrink-0 text-xs text-slate-400">{r.id}</span>
                <span className="min-w-0 flex-1 truncate text-sm">{r.title}</span>
                <Badge className="bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300">{CHECK_LABEL[r.check]}</Badge>
                <ChevronDown className={cn('size-4 shrink-0 text-slate-400 transition', open && 'rotate-180')} />
            </button>
            {open && (
                <div className="space-y-2 border-t border-slate-100 px-3 py-3 text-sm dark:border-slate-800">
                    <p>{r.description}</p>
                    <p className="text-slate-600 dark:text-slate-400"><b>Recomendación:</b> {r.recommendation}</p>
                    {(r.exampleBad || r.exampleGood) && (
                        <div className="grid gap-2 md:grid-cols-2">
                            {r.exampleBad && <pre className="code overflow-x-auto rounded-md bg-rose-50 px-3 py-2 text-rose-900 dark:bg-rose-950/40 dark:text-rose-200">{r.exampleBad}</pre>}
                            {r.exampleGood && <pre className="code overflow-x-auto rounded-md bg-emerald-50 px-3 py-2 text-emerald-900 dark:bg-emerald-950/40 dark:text-emerald-200">{r.exampleGood}</pre>}
                        </div>
                    )}
                    <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
                        <span>Aplica a: {r.appliesTo.map((k) => KIND_LABEL[k]).join(', ')}</span>·<span>{FIX_LABEL[r.fix]}</span>·<span>Fuente: {r.source}</span>
                    </div>
                </div>
            )}
        </div>
    );
}

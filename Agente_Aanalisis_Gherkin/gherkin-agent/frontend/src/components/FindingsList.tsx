import {CheckCircle2, Eye} from 'lucide-react';
import {useMemo, useState} from 'react';

import type {Finding, Severity} from '../lib/types';
import {cn, fileName, SEVERITY_LABEL, SEVERITY_ORDER, shortPath} from '../lib/utils';
import {Empty, SEVERITY_STYLE} from './ui';

const DOT: Record<Severity, string> = {HIGH: 'bg-rose-400', MEDIUM: 'bg-amber-400', LOW: 'bg-sky-400'};

export function FindingsList({findings, onOpen, featurePath}: {
    findings: Finding[]; onOpen: (file: string, line: number | null) => void; featurePath: string;
}) {
    const [sev, setSev] = useState<Severity | 'all'>('all');

    const groups = useMemo(() => {
        const map = new Map<string, Finding[]>();
        for (const f of findings.filter((x) => sev === 'all' || x.severity === sev)) {
            map.set(f.file, [...(map.get(f.file) ?? []), f]);
        }
        return [...map.entries()].sort(([a], [b]) => (a === featurePath ? -1 : b === featurePath ? 1 : a.localeCompare(b)));
    }, [findings, sev, featurePath]);

    if (!findings.length) {
        return <Empty icon={<CheckCircle2 className="size-10" />} title="Sin malas prácticas">
            El archivo cumple las métricas revisadas.
        </Empty>;
    }

    return (
        <div>
            <div className="sticky top-0 z-10 flex flex-wrap gap-2 border-b border-slate-800 bg-mtp-surface px-4 py-2.5">
                {(['all', 'HIGH', 'MEDIUM', 'LOW'] as const).map((s) => (
                    <button key={s} onClick={() => setSev(s)}
                        className={cn('rounded-md px-2 py-1 text-xs transition', sev === s
                            ? (s === 'all' ? 'bg-white text-mtp-navy' : SEVERITY_STYLE[s])
                            : 'text-mtp-muted hover:bg-brand-50 hover:text-white')}>
                        {s === 'all' ? `Todas (${findings.length})` : `${SEVERITY_LABEL[s]} (${findings.filter((f) => f.severity === s).length})`}
                    </button>
                ))}
            </div>
            <div className="space-y-6 p-4">
                {groups.map(([file, list]) => (
                    <section key={file}>
                        <h4 className="mb-2 text-sm font-semibold text-white" title={shortPath(file)}>{fileName(file)}</h4>
                        <ol className="space-y-3">
                            {list.sort((a, b) => SEVERITY_ORDER[a.severity] - SEVERITY_ORDER[b.severity] || (a.line ?? 0) - (b.line ?? 0))
                                .map((f, i) => <Item key={f.id} n={i + 1} f={f} onOpen={onOpen} />)}
                        </ol>
                    </section>
                ))}
            </div>
        </div>
    );
}

function Item({n, f, onOpen}: {n: number; f: Finding; onOpen: (file: string, line: number | null) => void}) {
    const lines = [f.line, ...f.lines].filter(Boolean) as number[];
    return (
        <li className="rounded-lg border border-slate-800 px-4 py-3">
            <div className="flex items-start gap-2">
                <span className={cn('mt-1.5 size-2 shrink-0 rounded-full', DOT[f.severity])} title={SEVERITY_LABEL[f.severity]} />
                <div className="min-w-0 flex-1 space-y-1">
                    <p className="text-sm font-medium text-white">{n}. {f.title}</p>
                    <p className="text-sm text-slate-300">{simplify(f.message)}</p>
                    <p className="text-sm text-mtp-muted"><span className="text-slate-300">Cómo corregirlo:</span> {f.recommendation.split('\n')[0]}</p>
                    {f.resolvedByFix && <p className="text-xs text-emerald-300">✔ Se corrige en la pestaña «Corrección».</p>}
                    {!f.resolvedByFix && f.fix === 'manual' && f.manualReason && (
                        <p className="text-xs text-amber-200">No se puede corregir desde el código: {f.manualReason}</p>
                    )}
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 pt-1 text-xs text-mtp-muted">
                        {lines.length > 0
                            ? <span>{lines.length === 1 ? 'Línea' : 'Líneas'} {lines.slice(0, 12).join(', ')}{lines.length > 12 ? '…' : ''}</span>
                            : <span>Todo el archivo</span>}
                        <button onClick={() => onOpen(f.file, f.line)} className="inline-flex items-center gap-1 text-brand-500 hover:underline">
                            <Eye className="size-3.5" />Ver en el código
                        </button>
                    </div>
                </div>
            </div>
        </li>
    );
}

/** Quita el encabezado repetido de los hallazgos agrupados («X: se repite N veces… Ejemplo: …»). */
function simplify(message: string) {
    const m = /se repite (\d+) veces[^.]*\)\. Ejemplo: (.*)$/s.exec(message);
    return m ? `${m[2]} (se repite ${m[1]} veces)` : message;
}

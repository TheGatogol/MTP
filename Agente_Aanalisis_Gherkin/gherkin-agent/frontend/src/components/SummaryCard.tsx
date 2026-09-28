import {CheckCircle2, ListChecks, Wand2, Wrench} from 'lucide-react';

import type {AnalysisReport, Severity} from '../lib/types';
import {cn, SEVERITY_LABEL} from '../lib/utils';
import {SEVERITY_STYLE} from './ui';

const LEVEL = {
    ok: {ring: 'text-emerald-500', label: 'Cumple', text: 'text-emerald-700 dark:text-emerald-400'},
    warning: {ring: 'text-amber-500', label: 'Mejorable', text: 'text-amber-700 dark:text-amber-400'},
    critical: {ring: 'text-rose-500', label: 'Crítico', text: 'text-rose-700 dark:text-rose-400'},
};

export function SummaryCard({report}: {report: AnalysisReport}) {
    const s = report.summary;
    const level = LEVEL[s.level];
    const done = report.status === 'done';
    const circumference = 2 * Math.PI * 26;
    return (
        <div>
            <div className="flex items-center gap-4">
                <div className="relative size-16 shrink-0">
                    <svg viewBox="0 0 64 64" className="size-16 -rotate-90">
                        <circle cx="32" cy="32" r="26" fill="none" strokeWidth="7" className="stroke-slate-100 dark:stroke-slate-800" />
                        {done && (
                            <circle cx="32" cy="32" r="26" fill="none" strokeWidth="7" strokeLinecap="round"
                                className={cn('stroke-current transition-all', level.ring)}
                                strokeDasharray={circumference} strokeDashoffset={circumference * (1 - s.score / 100)} />
                        )}
                    </svg>
                    <span className="absolute inset-0 flex items-center justify-center text-lg font-bold">{done ? s.score : '…'}</span>
                </div>
                <div className="min-w-0">
                    <div className={cn('text-sm font-semibold', done ? level.text : 'text-slate-500')}>
                        {done ? level.label : report.status === 'error' ? 'Error' : 'Analizando…'}
                    </div>
                    <div className="mt-1 flex flex-wrap gap-1">
                        {(['HIGH', 'MEDIUM', 'LOW'] as Severity[]).map((sev) => (
                            <span key={sev} className={cn('rounded px-1.5 py-0.5 text-[11px] font-medium', SEVERITY_STYLE[sev])}>
                                {s.counts[sev] ?? 0} {SEVERITY_LABEL[sev].toLowerCase()}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
            {done && <SummaryPoints report={report} />}
        </div>
    );
}

function plural(n: number, one: string, many: string) {
    return `${n} ${n === 1 ? one : many}`;
}

function SummaryPoints({report}: {report: AnalysisReport}) {
    const total = report.findings.length;
    if (!total) {
        return (
            <p className="mt-4 flex items-center gap-2 rounded-lg bg-emerald-950/40 px-3 py-2 text-sm text-emerald-200">
                <CheckCircle2 className="size-4 shrink-0" />Cumple con todas las métricas revisadas.
            </p>
        );
    }
    const files = new Set(report.findings.map((f) => f.file)).size;
    const resolved = report.findings.filter((f) => f.resolvedByFix).length;
    const external = report.findings.filter((f) => !f.resolvedByFix && f.fix === 'manual').length;
    const pending = report.findings.filter((f) => !f.resolvedByFix && f.fix !== 'manual').length;
    const points = [
        {icon: <ListChecks className="size-4" />, color: 'text-brand-500',
            text: <><b className="text-white">{plural(total, 'mala práctica', 'malas prácticas')}</b> en {plural(files, 'archivo', 'archivos')}</>},
        resolved > 0 && {icon: <Wand2 className="size-4" />, color: 'text-emerald-400',
            text: <><b className="text-white">{resolved}</b> se {resolved === 1 ? 'resuelve' : 'resuelven'} con la corrección propuesta
                {report.fixes.length > 0 && ` (${plural(report.fixes.length, 'archivo', 'archivos')})`}</>},
        pending > 0 && {icon: <Wrench className="size-4" />, color: 'text-amber-400',
            text: <><b className="text-white">{pending}</b> sin corregir en este análisis (aplica la corrección y vuelve a analizar)</>},
        external > 0 && {icon: <Wrench className="size-4" />, color: 'text-amber-400',
            text: <><b className="text-white">{external}</b> {external === 1 ? 'necesita' : 'necesitan'} información de la app (ver motivo)</>},
    ].filter(Boolean) as {icon: React.ReactNode; color: string; text: React.ReactNode}[];
    return (
        <ul className="mt-4 space-y-2 border-t border-slate-800 pt-3">
            {points.map((p, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-slate-300">
                    <span className={cn('mt-0.5 shrink-0', p.color)}>{p.icon}</span>
                    <span>{p.text}</span>
                </li>
            ))}
        </ul>
    );
}

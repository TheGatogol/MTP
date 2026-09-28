import {Check, CircleDashed, Loader2, TriangleAlert} from 'lucide-react';

import type {SkillRun} from '../lib/types';
import {cn, formatMs} from '../lib/utils';

type Status = 'pending' | 'running' | 'done' | 'error';

/* El proceso interno (skills) no cambia: aquí solo se agrupa en fases fáciles de entender. */
const PHASES: {label: string; skills: string[]; milestone?: boolean}[] = [
    {label: 'Analizando archivo', skills: ['buscar', 'relacionar', 'revisar_reglas', 'revisar_ia']},
    {label: 'Finalizando análisis', skills: ['estandarizar', 'recomendar']},
    {label: 'Análisis finalizado', skills: ['estandarizar', 'recomendar'], milestone: true},
    {label: 'Generando corrección', skills: ['generar']},
    {label: 'Finalizando corrección', skills: ['validar']},
    {label: 'Corrección finalizada', skills: ['generar', 'validar', 'reportar'], milestone: true},
];

function phaseStatus(runs: SkillRun[], milestone?: boolean): Status {
    if (!runs.length) return 'pending';
    if (runs.some((r) => r.status === 'error')) return 'error';
    const finished = runs.every((r) => r.status === 'done' || r.status === 'skipped');
    if (finished) return 'done';
    if (!milestone && runs.some((r) => r.status === 'running' || r.status === 'done' || r.status === 'skipped')) return 'running';
    return 'pending';
}

const ICON: Record<Status, React.ReactNode> = {
    pending: <CircleDashed className="size-4 text-slate-600" />,
    running: <Loader2 className="size-4 animate-spin text-brand-500" />,
    done: <Check className="size-4 text-emerald-400" />,
    error: <TriangleAlert className="size-4 text-rose-400" />,
};

export function SkillPipeline({skills}: {skills: SkillRun[]}) {
    const byName = new Map(skills.map((s) => [s.name, s]));
    const total = skills.reduce((acc, s) => acc + (s.ms ?? 0), 0);
    const noFix = byName.get('generar')?.status === 'skipped';
    return (
        <div>
            <div className="mb-2 flex items-center justify-between">
                <h3 className="text-xs font-semibold uppercase tracking-wide text-mtp-muted">Progreso</h3>
                {total > 0 && <span className="text-xs text-mtp-muted">{formatMs(total)}</span>}
            </div>
            <ol className="space-y-0.5">
                {PHASES.map((p, i) => {
                    const status = phaseStatus(p.skills.map((s) => byName.get(s)).filter(Boolean) as SkillRun[], p.milestone);
                    const note = noFix && i >= 3 && status === 'done' ? 'No se necesitó corrección automática' : '';
                    return (
                        <li key={p.label} className="relative flex gap-3 py-1.5">
                            {i < PHASES.length - 1 && <span className="absolute left-[7px] top-6 h-[calc(100%-12px)] w-px bg-slate-800" />}
                            <span className="relative z-10 mt-0.5 bg-mtp-surface">{ICON[status]}</span>
                            <div className="min-w-0">
                                <span className={cn('text-sm', status === 'running' ? 'font-semibold text-white'
                                    : status === 'pending' ? 'text-slate-500' : 'text-slate-300')}>
                                    {i + 1}. {p.label}
                                </span>
                                {note && <p className="text-xs text-mtp-muted">{note}</p>}
                            </div>
                        </li>
                    );
                })}
            </ol>
        </div>
    );
}

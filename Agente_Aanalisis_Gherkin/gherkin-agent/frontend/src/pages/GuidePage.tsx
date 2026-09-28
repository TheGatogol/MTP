import {AlertTriangle, Check, Copy, FolderOpen, Lightbulb, RotateCcw} from 'lucide-react';
import {useState} from 'react';
import {toast} from 'sonner';

import {Button, Card} from '../components/ui';
import {cn} from '../lib/utils';
import {GUIDE, type GuideBlock} from './guide/content';

const KEY = 'gherkin-agent:guide-checks';

function loadChecks(): Record<string, boolean> {
    try {
        return JSON.parse(localStorage.getItem(KEY) ?? '{}') as Record<string, boolean>;
    } catch {
        return {};
    }
}

export function GuidePage() {
    const [active, setActive] = useState(0);
    const [checks, setChecks] = useState(loadChecks);
    const step = GUIDE[active];

    const save = (next: Record<string, boolean>) => {
        setChecks(next);
        try {
            localStorage.setItem(KEY, JSON.stringify(next));
        } catch { /* sin almacenamiento */ }
    };
    const done = (i: number) => GUIDE[i].checklist.every((_, j) => checks[`${GUIDE[i].id}-${j}`]);
    const total = GUIDE.reduce((a, s) => a + s.checklist.length, 0);
    const checked = Object.values(checks).filter(Boolean).length;

    return (
        <div className="mx-auto grid max-w-[1300px] gap-5 p-6 lg:grid-cols-[260px_1fr]">
            <div className="space-y-3">
                <div>
                    <h1 className="text-xl font-semibold text-white">Guía de desarrollo</h1>
                    <p className="text-sm text-mtp-muted">Automatiza un escenario E2E paso a paso.</p>
                </div>
                <div>
                    <div className="mb-1 flex justify-between text-xs text-mtp-muted"><span>Progreso</span><span>{checked}/{total}</span></div>
                    <div className="h-1.5 rounded-full bg-slate-800">
                        <div className="h-1.5 rounded-full bg-brand-500 transition-all" style={{width: `${(checked / total) * 100}%`}} />
                    </div>
                </div>
                <ol className="space-y-1">
                    {GUIDE.map((s, i) => (
                        <li key={s.id}>
                            <button onClick={() => setActive(i)}
                                className={cn('flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-sm transition',
                                    i === active ? 'bg-mtp-accent font-medium text-white' : 'text-mtp-muted hover:bg-brand-50 hover:text-white')}>
                                <span className={cn('flex size-6 shrink-0 items-center justify-center rounded-full text-xs',
                                    done(i) ? 'bg-emerald-500 text-white' : 'border border-slate-700')}>
                                    {done(i) ? <Check className="size-3.5" /> : i + 1}
                                </span>
                                <span className="truncate">{s.title}</span>
                            </button>
                        </li>
                    ))}
                </ol>
                <button onClick={() => save({})} className="flex items-center gap-1.5 px-3 text-xs text-mtp-muted hover:text-white">
                    <RotateCcw className="size-3.5" />Reiniciar checklist
                </button>
            </div>

            <Card className="min-w-0 p-6">
                <div className="text-xs text-mtp-muted">Paso {active + 1} de {GUIDE.length}</div>
                <h2 className="mt-1 text-lg font-semibold text-white">{step.title}</h2>
                <p className="mt-1 text-sm text-mtp-muted">{step.summary}</p>

                {step.where && (
                    <Section title="Dónde">
                        <ul className="space-y-1">
                            {step.where.map((w) => (
                                <li key={w} className="flex items-center gap-2 text-sm">
                                    <FolderOpen className="size-4 shrink-0 text-brand-500" /><code className="code break-all text-slate-300">{w}</code>
                                </li>
                            ))}
                        </ul>
                    </Section>
                )}

                <Section title="Cómo">
                    <div className="space-y-3">{step.blocks.map((b, i) => <Block key={i} b={b} />)}</div>
                </Section>

                <Section title="Por qué">
                    <ul className="list-inside list-disc space-y-1 text-sm text-slate-300">{step.why.map((w) => <li key={w}>{w}</li>)}</ul>
                </Section>

                <Section title="Valida antes de seguir">
                    <ul className="space-y-1.5">
                        {step.checklist.map((c, j) => {
                            const key = `${step.id}-${j}`;
                            return (
                                <li key={key}>
                                    <label className="flex items-start gap-2.5 text-sm">
                                        <input type="checkbox" checked={!!checks[key]} onChange={(e) => save({...checks, [key]: e.target.checked})}
                                            className="mt-0.5 size-4 accent-[var(--color-brand-600)]" />
                                        <span className={cn(checks[key] ? 'text-mtp-muted line-through' : 'text-white')}>{c}</span>
                                    </label>
                                </li>
                            );
                        })}
                    </ul>
                </Section>

                <div className="mt-6 flex justify-between border-t border-slate-800 pt-4">
                    <Button onClick={() => setActive(active - 1)} disabled={active === 0}>Anterior</Button>
                    <Button variant="primary" onClick={() => setActive(active + 1)} disabled={active === GUIDE.length - 1}>Siguiente</Button>
                </div>
            </Card>
        </div>
    );
}

function Section({title, children}: {title: string; children: React.ReactNode}) {
    return (
        <section className="mt-5">
            <h3 className="mb-2 text-xs font-semibold uppercase tracking-wide text-brand-500">{title}</h3>
            {children}
        </section>
    );
}

function Block({b}: {b: GuideBlock}) {
    if (b.kind === 'code') {
        const copy = async () => {
            await navigator.clipboard.writeText(b.body);
            toast.success('Copiado');
        };
        return (
            <div className="overflow-hidden rounded-lg border border-slate-800">
                <div className="flex items-center justify-between bg-mtp-darkest px-3 py-1.5 text-xs text-mtp-muted">
                    <span>{b.title ?? 'Código'}</span>
                    <button onClick={copy} className="flex items-center gap-1 hover:text-white"><Copy className="size-3.5" />Copiar</button>
                </div>
                <pre className="code overflow-x-auto bg-slate-950 px-4 py-3 text-slate-300">{b.body}</pre>
            </div>
        );
    }
    if (b.kind === 'tip' || b.kind === 'warn') {
        const warn = b.kind === 'warn';
        return (
            <p className={cn('flex gap-2 rounded-lg px-3 py-2 text-sm', warn ? 'bg-amber-950/50 text-amber-200' : 'bg-brand-50 text-slate-300')}>
                {warn ? <AlertTriangle className="mt-0.5 size-4 shrink-0" /> : <Lightbulb className="mt-0.5 size-4 shrink-0 text-brand-500" />}
                {b.body}
            </p>
        );
    }
    return (
        <div>
            {b.title && <div className="mb-1 text-sm font-medium text-white">{b.title}</div>}
            <p className="whitespace-pre-line text-sm text-slate-300">{b.body}</p>
        </div>
    );
}

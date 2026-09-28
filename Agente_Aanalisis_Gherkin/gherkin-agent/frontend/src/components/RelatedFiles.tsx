import {AlertTriangle, CircleHelp} from 'lucide-react';

import type {AnalysisReport} from '../lib/types';
import {cn, fileName, KIND_LABEL, shortPath} from '../lib/utils';
import {Badge} from './ui';

const KIND_STYLE: Record<string, string> = {
    feature: 'bg-violet-100 text-violet-700 dark:bg-violet-950 dark:text-violet-300',
    step_definition: 'bg-sky-100 text-sky-700 dark:bg-sky-950 dark:text-sky-300',
    navigation: 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300',
    page: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300',
    component: 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300',
};

export function RelatedFiles({report, onOpen}: {report: AnalysisReport; onOpen: (file: string, line: number | null) => void}) {
    const problems = report.matches.filter((m) => m.status !== 'ok');
    const isJs = report.targetType === 'js';
    return (
        <div className="space-y-5 p-4">
            <div className="overflow-hidden rounded-lg border border-slate-200 dark:border-slate-800">
                <table className="w-full text-sm">
                    <thead className="bg-slate-50 text-left text-xs text-slate-500 dark:bg-slate-950">
                        <tr>
                            <th className="px-3 py-2 font-medium">Archivo</th>
                            <th className="px-3 py-2 font-medium">Tipo</th>
                            <th className="hidden px-3 py-2 font-medium md:table-cell">Por qué se relaciona</th>
                            <th className="px-3 py-2 text-right font-medium">Hallazgos</th>
                        </tr>
                    </thead>
                    <tbody>
                        {report.related.map((r) => {
                            const n = report.findings.filter((f) => f.file === r.path).length;
                            return (
                                <tr key={r.path} onClick={() => onOpen(r.path, null)}
                                    className="cursor-pointer border-t border-slate-100 hover:bg-slate-50 dark:border-slate-800 dark:hover:bg-slate-800/50">
                                    <td className="px-3 py-2">
                                        <div className="font-medium">{fileName(r.path)}</div>
                                        <div className="text-xs text-slate-400">{shortPath(r.path)} · {r.lines} líneas</div>
                                    </td>
                                    <td className="px-3 py-2">
                                        <div className="flex flex-col items-start gap-1">
                                            <Badge className={KIND_STYLE[r.kind]}>{KIND_LABEL[r.kind]}</Badge>
                                            <span className={cn('text-[11px]', r.role === 'principal' ? 'text-brand-700 dark:text-brand-500' : 'text-slate-400')}>
                                                {r.role === 'principal' ? (isJs ? 'Analizado' : 'Principal') : isJs ? 'Lo usa' : 'Compartido'}
                                            </span>
                                        </div>
                                    </td>
                                    <td className="hidden px-3 py-2 text-xs text-slate-500 md:table-cell">{r.reason}</td>
                                    <td className="px-3 py-2 text-right">{n > 0 ? <span className="font-semibold">{n}</span> : <span className="text-slate-300">0</span>}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
            {isJs ? (
                <p className="text-xs text-slate-500">
                    Features que ejecutan este archivo (directamente o a través de sus steps y navigations). Ábrelos para ver
                    dónde se usa, o analízalos desde «Analizar» → Gherkin.
                </p>
            ) : (
            <p className="text-xs text-slate-500">
                <b>Principal</b>: código propio de esta funcionalidad (se revisa completo). <b>Compartido</b>: código común usado por
                varios features; de ahí solo se revisan los steps y los métodos que ejecuta este feature.
            </p>
            )}
            {problems.length > 0 && (
                <div>
                    <h4 className="mb-2 flex items-center gap-1.5 text-sm font-semibold"><AlertTriangle className="size-4 text-amber-500" />Steps sin resolver</h4>
                    <ul className="space-y-1">
                        {problems.map((m) => (
                            <li key={`${m.scenario}-${m.line}`} className="flex items-center gap-2 text-sm">
                                <CircleHelp className="size-3.5 shrink-0 text-slate-400" />
                                <button className="text-left hover:underline" onClick={() => onOpen(report.featurePath, m.line)}>
                                    <span className="text-slate-400">L{m.line}</span> {m.keyword} {m.text}
                                </button>
                                <Badge className="bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300">
                                    {m.status === 'undefined' ? 'sin definición' : 'ambiguo'}
                                </Badge>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

import {AlertTriangle, Check, Copy, Eye, RotateCcw, Wand2} from 'lucide-react';
import {useQueryClient} from '@tanstack/react-query';
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {toast} from 'sonner';

import {api} from '../lib/api';
import {useFixAction} from '../lib/queries';
import type {AnalysisReport, FileFix} from '../lib/types';
import {formatDate, KIND_LABEL, shortPath} from '../lib/utils';
import {DiffView} from './DiffView';
import {FileViewer} from './FileViewer';
import {Badge, Button, Empty, Modal} from './ui';

export function FixesPanel({report}: {report: AnalysisReport}) {
    const [preview, setPreview] = useState<FileFix | null>(null);
    const [confirmAll, setConfirmAll] = useState(false);
    const [applying, setApplying] = useState(false);
    const navigate = useNavigate();
    const qc = useQueryClient();
    const pending = report.fixes.filter((f) => !f.applied);

    const applyAll = async () => {
        setApplying(true);
        try {
            await api.applyAll(report.id);
            qc.invalidateQueries({queryKey: ['applied']});
            toast.success('Correcciones aplicadas. Analizando de nuevo para confirmar…');
            const next = await api.analyze(report.featurePath, true);
            navigate(`/analisis/${next.id}`);
        } catch (e) {
            toast.error((e as Error).message);
            qc.invalidateQueries({queryKey: ['report', report.id]});
        } finally {
            setApplying(false);
            setConfirmAll(false);
        }
    };

    if (!report.fixes.length) {
        const running = report.status === 'running';
        return <Empty icon={<Wand2 className="size-10" />} title={running ? 'Generando correcciones…' : 'No hay nada que corregir'}>
            {running ? 'La corrección aparece cuando termina el análisis.' : 'El archivo no tiene malas prácticas corregibles.'}
        </Empty>;
    }
    return (
        <div className="space-y-4 p-4">
            {pending.length > 0 && report.status === 'done' && (
                <div className="flex flex-wrap items-center gap-3 rounded-xl border border-brand-600 bg-brand-50 px-4 py-3">
                    <div className="min-w-0 flex-1 text-sm">
                        <p className="font-medium text-white">Aplica todo de una vez</p>
                        <p className="text-mtp-muted">Se aplican las {pending.length} correcciones (con respaldo) y se vuelve a analizar para confirmar.</p>
                    </div>
                    <Button variant="primary" onClick={() => setConfirmAll(true)}><Wand2 className="size-4" />Aplicar todas las correcciones</Button>
                </div>
            )}
            <p className="rounded-lg bg-slate-50 px-3 py-2 text-xs text-slate-600 dark:bg-slate-950 dark:text-slate-400">
                Revisa cada diff antes de aplicarlo. Al aplicar se guarda un respaldo del archivo original y puedes revertirlo.
                Si la corrección cambia el nombre de un escenario o sus peticiones, recuerda regrabar en vBank.
            </p>
            <Modal open={confirmAll} onOpenChange={(o) => !applying && setConfirmAll(o)} title="Aplicar todas las correcciones">
                <div className="space-y-4 p-5 text-sm">
                    <p>Se modificarán {pending.length} archivo(s) del framework. Antes se guarda un respaldo de cada uno y podrás
                        revertirlos. Después se analizará el archivo de nuevo para confirmar el resultado.</p>
                    <div className="flex justify-end gap-2">
                        <Button onClick={() => setConfirmAll(false)} disabled={applying}>Cancelar</Button>
                        <Button variant="primary" loading={applying} onClick={applyAll}>Sí, aplicar todo</Button>
                    </div>
                </div>
            </Modal>
            {report.fixes.map((fx) => <FixCard key={fx.file} fx={fx} report={report} onPreview={() => setPreview(fx)} />)}
            <FileViewer path={preview?.file ?? null} content={preview?.proposed} findings={[]} onClose={() => setPreview(null)} />
        </div>
    );
}

/** Avisos internos del proceso de corrección (ediciones descartadas, notas): no se muestran al usuario. */
const INTERNAL_WARNING = /\bIA\b|descartó una edición/i;

/** «TAG-014 (línea 7): Se agregó …» → «Línea 7: se agregó …»; «IA: …» → «…». */
function cleanChange(change: string) {
    const rule = /^[A-Z]{3}-\d{3} \(línea (\d+)\): (.*)$/.exec(change);
    if (rule) return `Línea ${rule[1]}: ${rule[2]}`;
    return change.replace(/^IA:\s*/, '');
}

function FixCard({fx, report, onPreview}: {fx: FileFix; report: AnalysisReport; onPreview: () => void}) {
    const action = useFixAction();
    const [confirm, setConfirm] = useState<'apply' | 'revert' | null>(null);
    const resolved = report.findings.filter((f) => fx.findingIds.includes(f.id));
    const changes = [...new Set(fx.changes.map(cleanChange))];
    const warnings = fx.warnings.filter((w) => !INTERNAL_WARNING.test(w));
    const copy = async () => {
        await navigator.clipboard.writeText(fx.proposed);
        toast.success('Código corregido copiado');
    };
    const run = (kind: 'apply' | 'revert') => action.mutate({id: report.id, file: fx.file, action: kind}, {onSettled: () => setConfirm(null)});

    return (
        <div className="rounded-xl border border-slate-200 dark:border-slate-800">
            <div className="flex flex-wrap items-center gap-2 border-b border-slate-100 px-4 py-3 dark:border-slate-800">
                <Badge className="bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300">{KIND_LABEL[fx.kind]}</Badge>
                <span className="min-w-0 truncate font-medium" title={fx.file}>{shortPath(fx.file)}</span>
                <div className="ml-auto flex items-center gap-1.5">
                    {fx.action === 'edit' && <>
                        <Button variant="ghost" onClick={copy} title="Copiar archivo corregido"><Copy className="size-4" /></Button>
                        <Button variant="ghost" onClick={onPreview} title="Ver archivo corregido completo"><Eye className="size-4" /></Button>
                    </>}
                    {fx.applied ? (
                        <>
                            <Badge className="bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300"><Check className="size-3" />Aplicada {formatDate(fx.appliedAt)}</Badge>
                            <Button onClick={() => setConfirm('revert')}><RotateCcw className="size-4" />Revertir</Button>
                        </>
                    ) : (
                        <Button variant="primary" onClick={() => setConfirm('apply')} disabled={report.status !== 'done'}>
                            <Wand2 className="size-4" />Aplicar corrección
                        </Button>
                    )}
                </div>
            </div>
            <div className="space-y-3 px-4 py-3">
                {changes.length > 0 && (
                    <div>
                        <h4 className="mb-1 text-sm font-medium text-white">Correcciones</h4>
                        <ol className="list-inside list-decimal space-y-0.5 text-sm text-slate-300">
                            {changes.map((c, i) => <li key={i}>{c}</li>)}
                        </ol>
                    </div>
                )}
                {resolved.length > 0 && (
                    <div>
                        <h4 className="mb-1 text-sm font-medium text-white">Se resuelve lo siguiente</h4>
                        <ol className="list-inside list-decimal space-y-0.5 text-sm text-slate-300">
                            {resolved.map((f) => <li key={f.id}>{f.title}{f.line ? ` (línea ${f.line})` : ''}</li>)}
                        </ol>
                    </div>
                )}
                {warnings.length > 0 && (
                    <div className="space-y-1 rounded-lg bg-amber-950/40 px-3 py-2 text-xs text-amber-200">
                        {warnings.map((w, i) => <p key={i} className="flex gap-1.5"><AlertTriangle className="mt-0.5 size-3 shrink-0" />{w}</p>)}
                    </div>
                )}
                {fx.action === 'delete' ? (
                    <div className="rounded-lg border border-slate-800 p-3 text-sm">
                        <p className="mb-1 text-slate-300">Se retirarán estas carpetas de grabación (quedan en respaldo):</p>
                        <ul className="code space-y-0.5 text-rose-300">{fx.paths.map((x) => <li key={x}>− {x}</li>)}</ul>
                    </div>
                ) : <DiffView diff={fx.diff} />}
            </div>
            <Modal open={!!confirm} onOpenChange={(o) => !o && setConfirm(null)}
                title={confirm === 'apply' ? 'Aplicar corrección' : 'Revertir corrección'}>
                <div className="space-y-4 p-5 text-sm">
                    {confirm === 'apply' ? (
                        <p>Se modificará <b>{shortPath(fx.file)}</b> en el framework. Antes se guarda un respaldo en
                            <code className="mx-1 rounded bg-slate-100 px-1 text-xs dark:bg-slate-800">gherkin-agent/data/backups</code>
                            y podrás revertir el cambio desde aquí.</p>
                    ) : (
                        <p>Se restaurará <b>{shortPath(fx.file)}</b> desde el respaldo tomado al aplicar la corrección.</p>
                    )}
                    {confirm === 'apply' && fx.warnings.length > 0 && (
                        <p className="rounded-md bg-amber-50 px-3 py-2 text-xs text-amber-800 dark:bg-amber-950/40 dark:text-amber-300">
                            Esta corrección tiene {fx.warnings.length} advertencia(s). Revísalas antes de continuar.
                        </p>
                    )}
                    <div className="flex justify-end gap-2">
                        <Button onClick={() => setConfirm(null)}>Cancelar</Button>
                        <Button variant={confirm === 'apply' ? 'primary' : 'danger'} loading={action.isPending} onClick={() => confirm && run(confirm)}>
                            {confirm === 'apply' ? 'Sí, aplicar' : 'Sí, revertir'}
                        </Button>
                    </div>
                </div>
            </Modal>
        </div>
    );
}

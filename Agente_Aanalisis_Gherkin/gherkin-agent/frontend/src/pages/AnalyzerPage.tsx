import * as Tabs from '@radix-ui/react-tabs';
import {
    AlertTriangle, ArrowLeft, Bot, Check, ChevronsUpDown, FileCode2, FileText, GitCompare, ListChecks, Network, Plus,
    RefreshCw,
} from 'lucide-react';
import {useState, type ReactNode} from 'react';
import {useNavigate, useParams, useSearchParams} from 'react-router-dom';
import {toast} from 'sonner';

import {FeaturePicker} from '../components/FeaturePicker';
import {FileViewer} from '../components/FileViewer';
import {FindingsList} from '../components/FindingsList';
import {FixesPanel} from '../components/FixesPanel';
import {JsPicker} from '../components/JsPicker';
import {RelatedFiles} from '../components/RelatedFiles';
import {SkillPipeline} from '../components/SkillPipeline';
import {SummaryCard} from '../components/SummaryCard';
import {Button, Card, Empty, Spinner} from '../components/ui';
import {api} from '../lib/api';
import {useHealth, useReport} from '../lib/queries';
import {cn, fileName, pushRecent, shortPath} from '../lib/utils';

type Mode = 'feature' | 'js';

const STEPS = ['Tipo de archivo', 'Buscar archivo', 'Analizar'];

export function AnalyzerPage() {
    const {id} = useParams();
    const [params, setParams] = useSearchParams();
    const navigate = useNavigate();
    const report = useReport(id ?? null);
    const [starting, setStarting] = useState(false);
    const r = report.data;
    const mode: Mode | null = r?.targetType ?? ((params.get('tipo') as Mode | null) || null);
    const step = id ? 3 : mode ? 2 : 1;

    const start = async (path: string, force = false) => {
        setStarting(true);
        try {
            if (path.endsWith('.feature')) pushRecent(path);
            const created = await api.analyze(path, force);
            navigate(`/analisis/${created.id}`);
        } catch (e) {
            toast.error((e as Error).message);
        } finally {
            setStarting(false);
        }
    };

    return (
        <div className="mx-auto flex max-w-[1500px] flex-col gap-4 p-6">
            <Stepper step={step} onGo={(s) => {
                if (s === 1) navigate('/analizar');
                if (s === 2 && mode) navigate(`/analizar?tipo=${mode}`);
            }} />

            {step === 1 && <ChooseType onChoose={(m) => setParams({tipo: m})} />}
            {step === 2 && mode && <ChooseFile mode={mode} starting={starting} onBack={() => navigate('/analizar')} onSelect={(p) => start(p)} />}
            {step === 3 && (
                <>
                    {report.isLoading && <div className="flex justify-center p-16"><Spinner className="size-6" /></div>}
                    {report.error && <Card className="p-6 text-sm text-rose-300">{(report.error as Error).message}</Card>}
                    {r && (
                        <Results report={r} starting={starting}
                            onReanalyze={() => start(r.featurePath, true)}
                            onNew={() => navigate('/analizar')} />
                    )}
                </>
            )}
        </div>
    );
}

function Stepper({step, onGo}: {step: number; onGo: (s: number) => void}) {
    return (
        <ol className="flex flex-wrap items-center gap-2">
            {STEPS.map((label, i) => {
                const n = i + 1;
                const done = n < step;
                return (
                    <li key={label} className="flex items-center gap-2">
                        <button onClick={() => done && onGo(n)} disabled={!done}
                            className={cn('flex items-center gap-2 rounded-lg px-2 py-1 text-sm transition',
                                n === step ? 'text-white' : done ? 'text-mtp-muted hover:bg-brand-50 hover:text-white' : 'text-slate-500',
                                !done && 'disabled:cursor-default')}>
                            <span className={cn('flex size-6 items-center justify-center rounded-full text-xs',
                                n === step ? 'bg-brand-600 text-white' : done ? 'bg-emerald-500 text-white' : 'border border-slate-700')}>
                                {done ? <Check className="size-3.5" /> : n}
                            </span>
                            {label}
                        </button>
                        {n < STEPS.length && <span className="h-px w-8 bg-slate-700" />}
                    </li>
                );
            })}
        </ol>
    );
}

function ChooseType({onChoose}: {onChoose: (m: Mode) => void}) {
    const health = useHealth();
    const h = health.data;
    return (
        <div className="space-y-4">
            <div>
                <h1 className="text-xl font-semibold text-white">¿Qué quieres analizar?</h1>
                <p className="text-sm text-mtp-muted">El agente revisa el archivo contra las métricas, recomienda cómo cumplirlas y propone la corrección.</p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
                <TypeCard icon={<FileText className="size-8" />} title="Gherkin (.feature)" onClick={() => onChoose('feature')}
                    text="Analiza el feature y también sus archivos JS relacionados: step definitions, navigations y pages que usa." />
                <TypeCard icon={<FileCode2 className="size-8" />} title="Código JS" onClick={() => onChoose('js')}
                    text="Analiza una page, step definition, navigation o component, y te muestra qué features lo usan." />
            </div>
            {h && (
                <p className="flex items-center gap-1.5 text-xs text-mtp-muted">
                    <Bot className="size-3.5" />
                    IA local: {!h.ai.enabled ? 'desactivada' : h.ai.available ? h.ai.model : 'no disponible (se analizará solo con reglas)'}
                    {h.index.state !== 'ready' && ' · indexando el framework…'}
                </p>
            )}
        </div>
    );
}

function TypeCard({icon, title, text, onClick}: {icon: ReactNode; title: string; text: string; onClick: () => void}) {
    return (
        <button onClick={onClick}
            className="group rounded-xl border border-slate-800 bg-mtp-surface p-6 text-left transition hover:border-brand-500 hover:bg-brand-50">
            <div className="text-brand-500">{icon}</div>
            <div className="mt-3 text-lg font-semibold text-white">{title}</div>
            <p className="mt-1 text-sm text-mtp-muted">{text}</p>
            <div className="mt-4 text-sm font-medium text-brand-500 group-hover:underline">Seleccionar →</div>
        </button>
    );
}

function ChooseFile({mode, starting, onBack, onSelect}: {mode: Mode; starting: boolean; onBack: () => void; onSelect: (p: string) => void}) {
    const [open, setOpen] = useState(mode === 'js');
    return (
        <div className="space-y-4">
            <div className="flex items-center gap-3">
                <Button variant="ghost" onClick={onBack}><ArrowLeft className="size-4" />Cambiar tipo</Button>
                <h1 className="text-xl font-semibold text-white">{mode === 'feature' ? 'Busca el Gherkin' : 'Busca el archivo JS'}</h1>
                {starting && <Spinner />}
            </div>
            {mode === 'feature' ? (
                <FeaturePicker value={null} onSelect={onSelect} />
            ) : (
                <>
                    <button onClick={() => setOpen(true)}
                        className="flex w-full items-center gap-3 rounded-xl border border-slate-800 bg-mtp-surface px-4 py-3 text-left shadow-sm transition hover:border-brand-500">
                        <FileCode2 className="size-5 shrink-0 text-brand-500" />
                        <div className="min-w-0 flex-1">
                            <div className="font-medium text-white">Selecciona un archivo .js</div>
                            <div className="text-xs text-mtp-muted">Pages, step definitions, navigations y components</div>
                        </div>
                        <ChevronsUpDown className="size-4 text-slate-400" />
                    </button>
                    <JsPicker open={open} onOpenChange={setOpen} onSelect={(p) => { setOpen(false); onSelect(p); }} />
                </>
            )}
        </div>
    );
}

function Results({report: r, starting, onReanalyze, onNew}: {
    report: NonNullable<ReturnType<typeof useReport>['data']>; starting: boolean; onReanalyze: () => void; onNew: () => void;
}) {
    const [viewer, setViewer] = useState<{file: string; line: number | null} | null>(null);
    const [tab, setTab] = useState('findings');
    const isJs = r.targetType === 'js';
    const warnings = r.warnings.filter((w) => !/IA/.test(w));
    const open = (file: string, line: number | null) => setViewer({file, line});

    return (
        <>
            <div className="flex flex-wrap items-center gap-3">
                <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                        {isJs ? <FileCode2 className="size-5 text-brand-500" /> : <FileText className="size-5 text-brand-500" />}
                        <h1 className="truncate text-xl font-semibold text-white">{fileName(r.featurePath)}</h1>
                        {r.featureName && <span className="truncate text-sm text-mtp-muted">{r.featureName}</span>}
                    </div>
                    <div className="truncate text-xs text-mtp-muted">{shortPath(r.featurePath)}</div>
                </div>
                <Button onClick={onReanalyze} loading={starting} disabled={r.status === 'running'} title="Vuelve a analizar sin usar la caché">
                    <RefreshCw className="size-4" />Reanalizar
                </Button>
                <Button variant="primary" onClick={onNew}><Plus className="size-4" />Analizar otro archivo</Button>
            </div>

            <div className="grid gap-4 lg:grid-cols-[320px_1fr]">
                <div className="space-y-4">
                    <Card className="p-4"><SummaryCard report={r} /></Card>
                    <Card className="p-4"><SkillPipeline skills={r.skills} /></Card>
                    {(warnings.length > 0 || r.error) && (
                        <Card className="space-y-1.5 p-4 text-xs text-amber-200">
                            {r.error && <p className="text-rose-300">{r.error}</p>}
                            {warnings.map((w, i) => <p key={i} className="flex gap-1.5"><AlertTriangle className="mt-0.5 size-3 shrink-0" />{w}</p>)}
                        </Card>
                    )}
                </div>

                <Card className="min-w-0 overflow-hidden">
                    <Tabs.Root value={tab} onValueChange={setTab}>
                        <Tabs.List className="flex gap-1 overflow-x-auto border-b border-slate-800 px-2">
                            <TabBtn value="findings" icon={<ListChecks className="size-4" />} label="Malas prácticas" count={r.findings.length} />
                            <TabBtn value="fixes" icon={<GitCompare className="size-4" />} label="Corrección" count={r.fixes.length} />
                            <TabBtn value="related" icon={<Network className="size-4" />}
                                label={isJs ? 'Features que lo usan' : 'Relacionados'}
                                count={isJs ? r.related.filter((x) => x.kind === 'feature').length : r.related.length} />
                        </Tabs.List>
                        <Tabs.Content value="findings" className="max-h-[calc(100vh-260px)] overflow-auto">
                            {r.status === 'running' && !r.findings.length
                                ? <Empty icon={<Spinner className="size-8" />} title="Analizando…">Las malas prácticas aparecen al terminar el análisis.</Empty>
                                : <FindingsList findings={r.findings} onOpen={open} featurePath={r.featurePath} />}
                        </Tabs.Content>
                        <Tabs.Content value="fixes" className="max-h-[calc(100vh-260px)] overflow-auto">
                            <FixesPanel report={r} />
                        </Tabs.Content>
                        <Tabs.Content value="related" className="max-h-[calc(100vh-260px)] overflow-auto">
                            <RelatedFiles report={r} onOpen={open} />
                        </Tabs.Content>
                    </Tabs.Root>
                </Card>
            </div>
            <FileViewer path={viewer?.file ?? null} line={viewer?.line} findings={r.findings} onClose={() => setViewer(null)} />
        </>
    );
}

function TabBtn({value, icon, label, count}: {value: string; icon: ReactNode; label: string; count?: number}) {
    return (
        <Tabs.Trigger value={value}
            className={cn('flex shrink-0 items-center gap-1.5 border-b-2 border-transparent px-3 py-2.5 text-sm text-mtp-muted transition hover:text-white',
                'data-[state=active]:border-brand-500 data-[state=active]:font-medium data-[state=active]:text-white')}>
            {icon}{label}
            {count !== undefined && <span className="rounded-full bg-slate-800 px-1.5 text-[11px]">{count}</span>}
        </Tabs.Trigger>
    );
}

import {Command} from 'cmdk';
import {ChevronsUpDown, FileText, History, Search} from 'lucide-react';
import {useEffect, useMemo, useState} from 'react';

import {useFeatures} from '../lib/queries';
import type {FeatureEntry} from '../lib/types';
import {cn, recentFeatures, shortPath} from '../lib/utils';
import {Modal, Spinner} from './ui';

function idRange(ids: string[]) {
    if (!ids.length) return '';
    return ids.length === 1 ? ids[0] : `${ids[0]} … ${ids[ids.length - 1]}`;
}

export function FeaturePicker({value, onSelect}: {value: string | null; onSelect: (path: string) => void}) {
    const {data, isLoading} = useFeatures();
    const [open, setOpen] = useState(false);
    const items = useMemo(() => data?.items ?? [], [data]);
    const selected = items.find((f) => f.path === value);

    const groups = useMemo(() => {
        const map = new Map<string, FeatureEntry[]>();
        for (const f of items) {
            const list = map.get(f.epic) ?? [];
            list.push(f);
            map.set(f.epic, list);
        }
        return [...map.entries()];
    }, [items]);

    const recent = recentFeatures().map((p) => items.find((f) => f.path === p)).filter(Boolean) as FeatureEntry[];

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
                e.preventDefault();
                setOpen(true);
            }
        };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, []);

    const choose = (path: string) => {
        setOpen(false);
        onSelect(path);
    };

    return (
        <>
            <button
                onClick={() => setOpen(true)}
                className={cn(
                    'group flex w-full items-center gap-3 rounded-xl border bg-white px-4 py-3 text-left shadow-sm transition',
                    'border-slate-200 hover:border-brand-500 hover:shadow dark:border-slate-700 dark:bg-slate-900',
                )}
            >
                <FileText className="size-5 shrink-0 text-brand-600" />
                <div className="min-w-0 flex-1">
                    {selected ? (
                        <>
                            <div className="truncate font-semibold">{selected.fileName}
                                <span className="ml-2 font-normal text-slate-500">{selected.name}</span>
                            </div>
                            <div className="truncate text-xs text-slate-500">
                                {shortPath(selected.path)} · {selected.scenarios} escenarios {selected.scenarioIds.length > 0 && `· ${idRange(selected.scenarioIds)}`}
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="font-medium text-slate-600 dark:text-slate-300">Selecciona un archivo .feature</div>
                            <div className="text-xs text-slate-500">
                                {isLoading ? 'Cargando…' : `${data?.total ?? 0} features · busca por nombre, épica, ID (@ABI001) o tag`}
                            </div>
                        </>
                    )}
                </div>
                <kbd className="hidden rounded border border-slate-200 px-1.5 text-[11px] text-slate-400 sm:block dark:border-slate-700">Ctrl K</kbd>
                <ChevronsUpDown className="size-4 text-slate-400" />
            </button>

            <Modal open={open} onOpenChange={setOpen} title="Buscar feature" wide>
                <Command className="flex h-[70vh] flex-col" loop>
                    <div className="flex items-center gap-2 border-b border-slate-100 px-4 dark:border-slate-800">
                        <Search className="size-4 text-slate-400" />
                        <Command.Input
                            autoFocus
                            placeholder="Nombre del archivo, épica, título, @ID o tag…"
                            className="h-12 flex-1 bg-transparent text-sm outline-none placeholder:text-slate-400"
                        />
                        {isLoading && <Spinner />}
                    </div>
                    <Command.List className="flex-1 overflow-auto p-2">
                        <Command.Empty className="py-10 text-center text-sm text-slate-500">Sin coincidencias.</Command.Empty>
                        {recent.length > 0 && (
                            <Command.Group heading="Recientes">
                                {recent.map((f) => <Item key={`r-${f.path}`} f={f} onSelect={choose} recent />)}
                            </Command.Group>
                        )}
                        {groups.map(([epic, list]) => (
                            <Command.Group key={epic} heading={`${epic} (${list.length})`}>
                                {list.map((f) => <Item key={f.path} f={f} onSelect={choose} />)}
                            </Command.Group>
                        ))}
                    </Command.List>
                </Command>
            </Modal>
        </>
    );
}

function Item({f, onSelect, recent}: {f: FeatureEntry; onSelect: (p: string) => void; recent?: boolean}) {
    return (
        <Command.Item
            value={`${recent ? 'reciente ' : ''}${f.path}`}
            keywords={[f.name, f.epic, ...f.scenarioIds, ...f.tags.slice(0, 20)]}
            onSelect={() => onSelect(f.path)}
            className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2"
        >
            {recent ? <History className="size-4 shrink-0 text-slate-400" /> : <FileText className="size-4 shrink-0 text-slate-400" />}
            <div className="min-w-0 flex-1">
                <div className="truncate text-sm"><span className="font-medium">{f.fileName}</span>
                    <span className="ml-2 text-slate-500">{f.name}</span>
                </div>
                <div className="truncate text-xs text-slate-400">{shortPath(f.path)}</div>
            </div>
            <span className="shrink-0 text-xs text-slate-400">{f.scenarios} esc.</span>
            {f.scenarioIds.length > 0 && (
                <span className="hidden shrink-0 rounded bg-slate-100 px-1.5 py-0.5 text-[11px] text-slate-500 md:block dark:bg-slate-800">
                    {idRange(f.scenarioIds)}
                </span>
            )}
        </Command.Item>
    );
}

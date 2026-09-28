import {useQuery} from '@tanstack/react-query';
import {Command} from 'cmdk';
import {FileCode2, Search} from 'lucide-react';
import {useMemo} from 'react';

import {api} from '../lib/api';
import type {JsEntry} from '../lib/types';
import {KIND_LABEL, shortPath} from '../lib/utils';
import {Modal, Spinner} from './ui';

const KIND_ORDER = ['page', 'step_definition', 'navigation', 'component'] as const;

export function JsPicker({open, onOpenChange, onSelect}: {
    open: boolean; onOpenChange: (o: boolean) => void; onSelect: (path: string) => void;
}) {
    const {data, isLoading} = useQuery({queryKey: ['js-files'], queryFn: api.jsFiles, staleTime: 5 * 60_000});
    const groups = useMemo(() => {
        const items = data?.items ?? [];
        return KIND_ORDER.map((k) => [k, items.filter((i) => i.kind === k)] as const).filter(([, list]) => list.length);
    }, [data]);

    return (
        <Modal open={open} onOpenChange={onOpenChange} title="Buscar archivo JS" wide
            description={data ? `${data.items.length} archivos: pages, step definitions, navigations y components` : undefined}>
            <Command className="flex h-[70vh] flex-col" loop>
                <div className="flex items-center gap-2 border-b border-slate-800 px-4">
                    <Search className="size-4 text-slate-400" />
                    <Command.Input autoFocus placeholder="Nombre del archivo o carpeta (ej. aboutPage, rewards)…"
                        className="h-12 flex-1 bg-transparent text-sm text-white outline-none placeholder:text-slate-500" />
                    {isLoading && <Spinner />}
                </div>
                <Command.List className="flex-1 overflow-auto p-2">
                    <Command.Empty className="py-10 text-center text-sm text-slate-500">Sin coincidencias.</Command.Empty>
                    {groups.map(([kind, list]) => (
                        <Command.Group key={kind} heading={`${KIND_LABEL[kind]} (${list.length})`}>
                            {list.map((f) => <Item key={f.path} f={f} onSelect={onSelect} />)}
                        </Command.Group>
                    ))}
                </Command.List>
            </Command>
        </Modal>
    );
}

function Item({f, onSelect}: {f: JsEntry; onSelect: (p: string) => void}) {
    return (
        <Command.Item value={f.path} keywords={[f.fileName, f.folder, KIND_LABEL[f.kind]]} onSelect={() => onSelect(f.path)}
            className="flex items-center gap-3 rounded-lg px-3 py-2">
            <FileCode2 className="size-4 shrink-0 text-slate-400" />
            <div className="min-w-0 flex-1">
                <div className="truncate text-sm font-medium text-white">{f.fileName}</div>
                <div className="truncate text-xs text-slate-400">{shortPath(f.path)}</div>
            </div>
            <span className="shrink-0 rounded bg-slate-800 px-1.5 py-0.5 text-[11px] text-slate-300">{KIND_LABEL[f.kind]}</span>
        </Command.Item>
    );
}

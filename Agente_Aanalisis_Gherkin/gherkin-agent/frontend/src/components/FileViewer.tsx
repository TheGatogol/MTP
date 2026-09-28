import {useQuery} from '@tanstack/react-query';

import {api} from '../lib/api';
import type {Finding} from '../lib/types';
import {SEVERITY_ORDER, shortPath} from '../lib/utils';
import {CodeView, type LineMark} from './CodeView';
import {Modal, Spinner} from './ui';

export function marksFor(findings: Finding[], file: string) {
    const marks = new Map<number, LineMark[]>();
    const sorted = [...findings].filter((f) => f.file === file).sort((a, b) => SEVERITY_ORDER[a.severity] - SEVERITY_ORDER[b.severity]);
    for (const f of sorted) {
        for (const line of [f.line, ...f.lines]) {
            if (!line) continue;
            const list = marks.get(line) ?? [];
            list.push({severity: f.severity, title: `${f.ruleId} · ${f.title}`});
            marks.set(line, list);
        }
    }
    return marks;
}

export function FileViewer({path, line, findings, onClose, content}: {
    path: string | null; line?: number | null; findings: Finding[]; onClose: () => void; content?: string;
}) {
    const {data, isLoading, error} = useQuery({
        queryKey: ['file', path],
        queryFn: () => api.file(path!),
        enabled: !!path && content === undefined,
    });
    const text = content ?? data?.content;
    return (
        <Modal open={!!path} onOpenChange={(o) => !o && onClose()} wide
            title={path ? shortPath(path) : ''}
            description={content !== undefined ? 'Versión corregida (propuesta)' : `${findings.filter((f) => f.file === path).length} hallazgos marcados en el código`}>
            {isLoading && <div className="flex justify-center p-10"><Spinner /></div>}
            {error && <p className="p-6 text-sm text-rose-600">{(error as Error).message}</p>}
            {text !== undefined && path && (
                <CodeView content={text} language={path.endsWith('.feature') ? 'gherkin' : 'js'}
                    marks={content !== undefined ? undefined : marksFor(findings, path)} focusLine={line} className="max-h-[75vh]" />
            )}
        </Modal>
    );
}

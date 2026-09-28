import {useEffect, useRef, type ReactNode} from 'react';

import type {Severity} from '../lib/types';
import {cn} from '../lib/utils';
import {SEVERITY_LINE} from './ui';

export interface LineMark {
    severity: Severity;
    title: string;
}

const GHERKIN_KW = /^(\s*)(Feature|Background|Scenario Outline|Scenario|Examples|Given|When|Then|And|But)(:?)/;

function highlightGherkin(line: string): ReactNode {
    const trimmed = line.trim();
    if (trimmed.startsWith('#')) return <span className="text-slate-400">{line}</span>;
    if (trimmed.startsWith('@')) return <span className="text-violet-600 dark:text-violet-400">{line}</span>;
    if (trimmed.startsWith('|')) return <span className="text-slate-500">{line}</span>;
    const m = GHERKIN_KW.exec(line);
    if (!m) return line;
    const rest = line.slice(m[0].length);
    return (
        <>
            {m[1]}<span className="font-semibold text-brand-700 dark:text-brand-500">{m[2]}{m[3]}</span>
            {rest.split(/("[^"]*")/).map((part, i) =>
                part.startsWith('"') ? <span key={i} className="text-amber-700 dark:text-amber-400">{part}</span> : part)}
        </>
    );
}

function highlightJs(line: string): ReactNode {
    const trimmed = line.trim();
    if (trimmed.startsWith('//') || trimmed.startsWith('*') || trimmed.startsWith('/*')) return <span className="text-slate-400">{line}</span>;
    return line.split(/('[^']*'|"[^"]*"|`[^`]*`)/).map((part, i) =>
        /^['"`]/.test(part) ? <span key={i} className="text-amber-700 dark:text-amber-400">{part}</span> :
            <span key={i}>{part.split(/\b(async|await|function|return|const|let|class|extends|import|export|from|switch|case|break|default|throw|new|if|else)\b/).map((p, j) =>
                j % 2 ? <span key={j} className="text-brand-700 dark:text-brand-500">{p}</span> : p)}</span>);
}

export function CodeView({content, language, marks, focusLine, className}: {
    content: string; language: 'gherkin' | 'js'; marks?: Map<number, LineMark[]>; focusLine?: number | null; className?: string;
}) {
    const ref = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (!focusLine || !ref.current) return;
        const el = ref.current.querySelector(`[data-line="${focusLine}"]`);
        el?.scrollIntoView({block: 'center'});
    }, [focusLine, content]);
    const lines = content.split('\n');
    return (
        <div ref={ref} className={cn('code overflow-auto', className)}>
            <table className="w-full border-collapse">
                <tbody>
                    {lines.map((line, i) => {
                        const n = i + 1;
                        const m = marks?.get(n);
                        const sev = m?.[0]?.severity;
                        return (
                            <tr key={n} data-line={n} className={cn(sev && SEVERITY_LINE[sev], focusLine === n && 'outline outline-2 -outline-offset-2 outline-brand-500')}
                                title={m?.map((x) => x.title).join('\n')}>
                                <td className="w-12 select-none border-r border-slate-100 pr-3 text-right align-top text-slate-400 dark:border-slate-800">{n}</td>
                                <td className="whitespace-pre pl-3 pr-4">{language === 'gherkin' ? highlightGherkin(line) : highlightJs(line)}{'​'}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

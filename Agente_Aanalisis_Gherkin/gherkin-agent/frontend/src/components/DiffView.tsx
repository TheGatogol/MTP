import {cn} from '../lib/utils';

export function DiffView({diff}: {diff: string}) {
    const lines = diff.split('\n').filter((l) => !l.startsWith('---') && !l.startsWith('+++'));
    let oldN = 0;
    let newN = 0;
    return (
        <div className="code overflow-auto rounded-lg border border-slate-200 dark:border-slate-800">
            <table className="w-full border-collapse">
                <tbody>
                    {lines.map((line, i) => {
                        const hunk = /^@@ -(\d+)(?:,\d+)? \+(\d+)/.exec(line);
                        if (hunk) {
                            oldN = Number(hunk[1]);
                            newN = Number(hunk[2]);
                            return (
                                <tr key={i} className="bg-sky-50 text-sky-700 dark:bg-sky-950/50 dark:text-sky-300">
                                    <td colSpan={3} className="px-3 py-0.5">{line}</td>
                                </tr>
                            );
                        }
                        const type = line[0];
                        const a = type === '+' ? '' : oldN++;
                        const b = type === '-' ? '' : newN++;
                        return (
                            <tr key={i} className={cn(type === '+' && 'bg-emerald-50 dark:bg-emerald-950/40', type === '-' && 'bg-rose-50 dark:bg-rose-950/40')}>
                                <td className="w-10 select-none pr-2 text-right text-slate-400">{a}</td>
                                <td className="w-10 select-none border-r border-slate-100 pr-2 text-right text-slate-400 dark:border-slate-800">{b}</td>
                                <td className={cn('whitespace-pre pl-3 pr-4', type === '+' && 'text-emerald-800 dark:text-emerald-300',
                                    type === '-' && 'text-rose-800 dark:text-rose-300')}>{line || '​'}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

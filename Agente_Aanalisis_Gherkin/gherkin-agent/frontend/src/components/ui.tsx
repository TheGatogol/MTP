import * as Dialog from '@radix-ui/react-dialog';
import {Loader2, X} from 'lucide-react';
import type {ButtonHTMLAttributes, ReactNode} from 'react';

import type {Severity} from '../lib/types';
import {cn, SEVERITY_LABEL} from '../lib/utils';

type Variant = 'primary' | 'secondary' | 'ghost' | 'danger';

export function Button({variant = 'secondary', loading, className, children, disabled, ...props}:
    ButtonHTMLAttributes<HTMLButtonElement> & {variant?: Variant; loading?: boolean}) {
    return (
        <button
            {...props}
            disabled={disabled || loading}
            className={cn(
                'inline-flex items-center justify-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-medium transition',
                'disabled:cursor-not-allowed disabled:opacity-50',
                variant === 'primary' && 'border border-brand-600 bg-brand-700 text-white hover:bg-brand-600',
                variant === 'secondary' && 'border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800',
                variant === 'ghost' && 'text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800',
                variant === 'danger' && 'bg-rose-600 text-white hover:bg-rose-700',
                className,
            )}
        >
            {loading && <Loader2 className="size-4 animate-spin" />}
            {children}
        </button>
    );
}

export function Card({className, children}: {className?: string; children: ReactNode}) {
    return (
        <div className={cn('rounded-xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900', className)}>
            {children}
        </div>
    );
}

export function Badge({className, children, title}: {className?: string; children: ReactNode; title?: string}) {
    return (
        <span title={title} className={cn('inline-flex items-center gap-1 rounded-md px-1.5 py-0.5 text-[11px] font-medium', className)}>
            {children}
        </span>
    );
}

export const SEVERITY_STYLE: Record<Severity, string> = {
    HIGH: 'bg-rose-100 text-rose-700 dark:bg-rose-950 dark:text-rose-300',
    MEDIUM: 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300',
    LOW: 'bg-sky-100 text-sky-700 dark:bg-sky-950 dark:text-sky-300',
};

export const SEVERITY_LINE: Record<Severity, string> = {
    HIGH: 'bg-rose-50 dark:bg-rose-950/40',
    MEDIUM: 'bg-amber-50 dark:bg-amber-950/40',
    LOW: 'bg-sky-50 dark:bg-sky-950/40',
};

export function SeverityBadge({severity}: {severity: Severity}) {
    return <Badge className={SEVERITY_STYLE[severity]}>{SEVERITY_LABEL[severity]}</Badge>;
}

export function Spinner({className}: {className?: string}) {
    return <Loader2 className={cn('size-4 animate-spin text-brand-600', className)} />;
}

export function Empty({icon, title, children}: {icon?: ReactNode; title: string; children?: ReactNode}) {
    return (
        <div className="flex flex-col items-center justify-center gap-2 px-6 py-14 text-center">
            {icon && <div className="text-slate-300 dark:text-slate-600">{icon}</div>}
            <p className="font-medium text-slate-600 dark:text-slate-300">{title}</p>
            {children && <div className="max-w-md text-sm text-slate-500">{children}</div>}
        </div>
    );
}

export function Modal({open, onOpenChange, title, description, children, wide}: {
    open: boolean; onOpenChange: (o: boolean) => void; title: ReactNode; description?: ReactNode; children: ReactNode; wide?: boolean;
}) {
    return (
        <Dialog.Root open={open} onOpenChange={onOpenChange}>
            <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 z-40 bg-slate-900/40 backdrop-blur-[1px]" />
                <Dialog.Content
                    className={cn(
                        'fixed left-1/2 top-1/2 z-50 flex max-h-[88vh] w-[94vw] -translate-x-1/2 -translate-y-1/2 flex-col rounded-xl',
                        'border border-slate-200 bg-white shadow-xl dark:border-slate-800 dark:bg-slate-900',
                        wide ? 'max-w-6xl' : 'max-w-lg',
                    )}
                >
                    <div className="flex items-start justify-between gap-4 border-b border-slate-100 px-5 py-3 dark:border-slate-800">
                        <div className="min-w-0">
                            <Dialog.Title className="truncate font-semibold">{title}</Dialog.Title>
                            {description && <Dialog.Description className="text-sm text-slate-500">{description}</Dialog.Description>}
                        </div>
                        <Dialog.Close className="rounded-md p-1 text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800">
                            <X className="size-4" />
                        </Dialog.Close>
                    </div>
                    <div className="min-h-0 flex-1 overflow-auto">{children}</div>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
}

export function Toggle({checked, onChange, label, hint}: {checked: boolean; onChange: (v: boolean) => void; label: string; hint?: string}) {
    return (
        <label className="flex cursor-pointer items-start justify-between gap-4 py-2">
            <span>
                <span className="block text-sm font-medium">{label}</span>
                {hint && <span className="block text-xs text-slate-500">{hint}</span>}
            </span>
            <button
                type="button"
                role="switch"
                aria-checked={checked}
                onClick={() => onChange(!checked)}
                className={cn('relative mt-0.5 h-5 w-9 shrink-0 rounded-full transition', checked ? 'bg-brand-600' : 'bg-slate-300 dark:bg-slate-700')}
            >
                <span className={cn('absolute top-0.5 size-4 rounded-full bg-white shadow transition', checked ? 'left-[18px]' : 'left-0.5')} />
            </button>
        </label>
    );
}

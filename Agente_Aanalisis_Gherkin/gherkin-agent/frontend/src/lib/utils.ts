import {clsx, type ClassValue} from 'clsx';
import {twMerge} from 'tailwind-merge';

import type {FileKind, FixMode, Severity} from './types';

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export const SEVERITY_LABEL: Record<Severity, string> = {HIGH: 'Alta', MEDIUM: 'Media', LOW: 'Baja'};
export const SEVERITY_ORDER: Record<Severity, number> = {HIGH: 0, MEDIUM: 1, LOW: 2};

export const KIND_LABEL: Record<FileKind, string> = {
    feature: 'Feature',
    step_definition: 'Steps',
    page: 'Page',
    navigation: 'Navigation',
    component: 'Component',
    other: 'Otro',
};

export const FIX_LABEL: Record<FixMode, string> = {
    auto: 'Corrección automática',
    ai: 'Corrección con IA',
    manual: 'Corrección manual',
};

export const CHECK_LABEL = {code: 'Reglas', ai: 'IA', 'code+ai': 'Reglas + IA', manual: 'Revisión humana'} as const;

export const fileName = (path: string) => path.split('/').pop() ?? path;
export const shortPath = (path: string) => path.replace(/^lib\/features\//, '');

export function formatMs(ms: number | null | undefined) {
    if (ms == null) return '';
    return ms < 1000 ? `${ms} ms` : `${(ms / 1000).toFixed(1)} s`;
}

export function formatDate(iso: string | null | undefined) {
    if (!iso) return '';
    return new Date(iso).toLocaleString('es-MX', {dateStyle: 'medium', timeStyle: 'short'});
}

const RECENT_KEY = 'gherkin-agent:recent';

export function recentFeatures(): string[] {
    try {
        return JSON.parse(localStorage.getItem(RECENT_KEY) ?? '[]') as string[];
    } catch {
        return [];
    }
}

export function pushRecent(path: string) {
    try {
        const list = [path, ...recentFeatures().filter((p) => p !== path)].slice(0, 6);
        localStorage.setItem(RECENT_KEY, JSON.stringify(list));
    } catch { /* almacenamiento no disponible */ }
}

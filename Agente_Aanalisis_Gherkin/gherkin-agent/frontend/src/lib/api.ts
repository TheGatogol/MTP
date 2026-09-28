import type {
    AnalysisReport, AppliedRow, AppSettings, FeatureEntry, Health, HistoryRow, JsEntry, Rule,
} from './types';

const BASE = (import.meta.env.VITE_API_BASE_URL as string | undefined) ?? 'http://127.0.0.1:8100';

export class ApiError extends Error {
    constructor(message: string, public status: number) {
        super(message);
    }
}

async function request<T>(path: string, init?: RequestInit): Promise<T> {
    let res: Response;
    try {
        res = await fetch(`${BASE}${path}`, {
            ...init,
            headers: {'Content-Type': 'application/json', ...(init?.headers ?? {})},
        });
    } catch {
        throw new ApiError('No hay conexión con el backend. ¿Está corriendo en ' + BASE + '?', 0);
    }
    if (!res.ok) {
        let detail = res.statusText;
        try {
            detail = (await res.json()).detail ?? detail;
        } catch { /* sin cuerpo JSON */ }
        throw new ApiError(detail, res.status);
    }
    return res.json() as Promise<T>;
}

const post = <T>(path: string, body?: unknown) => request<T>(path, {method: 'POST', body: JSON.stringify(body ?? {})});

export const api = {
    health: () => request<Health>('/api/health'),
    features: () => request<{total: number; items: FeatureEntry[]; state: string}>('/api/features?limit=1000'),
    jsFiles: () => request<{items: JsEntry[]; state: string}>('/api/js'),
    file: (path: string) => request<{path: string; kind: string; content: string}>(`/api/files?path=${encodeURIComponent(path)}`),
    analyze: (featurePath: string, force = false) => post<AnalysisReport>('/api/analysis', {featurePath, force}),
    report: (id: string) => request<AnalysisReport>(`/api/analysis/${id}`),
    history: (featurePath?: string) =>
        request<HistoryRow[]>(`/api/analysis${featurePath ? `?feature_path=${encodeURIComponent(featurePath)}` : ''}`),
    applyFix: (id: string, file: string) => post<AnalysisReport>(`/api/analysis/${id}/apply`, {file, confirm: true}),
    applyAll: (id: string) => post<AnalysisReport>(`/api/analysis/${id}/apply-all`, {confirm: true}),
    revertFix: (id: string, file: string) => post<AnalysisReport>(`/api/analysis/${id}/revert`, {file, confirm: true}),
    rules: () => request<Rule[]>('/api/rules'),
    applied: () => request<AppliedRow[]>('/api/history'),
    settings: () => request<AppSettings>('/api/settings'),
    saveSettings: (patch: Partial<AppSettings>) => request<AppSettings>('/api/settings', {method: 'PUT', body: JSON.stringify(patch)}),
    models: () => request<{models: string[]; current: string; available: boolean; error: string | null}>('/api/models'),
    rebuildIndex: () => post<{state: string}>('/api/index/rebuild'),
};

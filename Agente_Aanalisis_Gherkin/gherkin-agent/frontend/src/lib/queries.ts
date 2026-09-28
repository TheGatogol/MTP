import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query';
import {toast} from 'sonner';

import {api} from './api';
import type {AnalysisReport, AppSettings} from './types';

export const useHealth = () => useQuery({queryKey: ['health'], queryFn: api.health, refetchInterval: 15000});

export const useFeatures = () => {
    const health = useHealth();
    return useQuery({
        queryKey: ['features', health.data?.index.state],
        queryFn: api.features,
        staleTime: 5 * 60_000,
        refetchInterval: (q) => (q.state.data?.state === 'ready' ? false : 2000),
    });
};

export const useReport = (id: string | null) =>
    useQuery({
        queryKey: ['report', id],
        queryFn: () => api.report(id!),
        enabled: !!id,
        refetchInterval: (q) => (q.state.data?.status === 'running' ? 1000 : false),
    });

export const useHistory = (featurePath?: string) =>
    useQuery({queryKey: ['history', featurePath ?? ''], queryFn: () => api.history(featurePath)});

export const useApplied = () => useQuery({queryKey: ['applied'], queryFn: api.applied});
export const useRules = () => useQuery({queryKey: ['rules'], queryFn: api.rules});
export const useSettings = () => useQuery({queryKey: ['settings'], queryFn: api.settings});
export const useModels = () => useQuery({queryKey: ['models'], queryFn: api.models});

export function useFixAction() {
    const qc = useQueryClient();
    return useMutation({
        mutationFn: ({id, file, action}: {id: string; file: string; action: 'apply' | 'revert'}) =>
            action === 'apply' ? api.applyFix(id, file) : api.revertFix(id, file),
        onSuccess: (report: AnalysisReport, v) => {
            qc.setQueryData(['report', report.id], report);
            qc.invalidateQueries({queryKey: ['applied']});
            qc.invalidateQueries({queryKey: ['history']});
            toast.success(v.action === 'apply' ? 'Corrección aplicada (con respaldo)' : 'Corrección revertida');
        },
        onError: (e: Error) => toast.error(e.message),
    });
}

export function useSaveSettings() {
    const qc = useQueryClient();
    return useMutation({
        mutationFn: (patch: Partial<AppSettings>) => api.saveSettings(patch),
        onSuccess: (s) => {
            qc.setQueryData(['settings'], s);
            qc.invalidateQueries({queryKey: ['health']});
            toast.success('Configuración guardada');
        },
        onError: (e: Error) => toast.error(e.message),
    });
}

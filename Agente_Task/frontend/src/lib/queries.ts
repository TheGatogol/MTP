import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { api, ApiError } from "./api";

export const usePeople = () => useQuery({ queryKey: ["people"], queryFn: api.people.list });
export const useProjects = () => useQuery({ queryKey: ["projects"], queryFn: api.projects.list });
export const useInitiatives = () => useQuery({ queryKey: ["initiatives"], queryFn: api.initiatives.list });
export const useActivities = () => useQuery({ queryKey: ["activities"], queryFn: api.activities.list });
export const usePending = () =>
  useQuery({ queryKey: ["pending"], queryFn: () => api.pending.list(), refetchInterval: 60_000 });
export const useSettings = () => useQuery({ queryKey: ["settings"], queryFn: api.settings.get });

export const useHealth = () =>
  useQuery({ queryKey: ["health"], queryFn: api.health, refetchInterval: 30_000, retry: false });

/** id → name map for people, used to render owner ids. */
export function usePeopleMap(): Record<string, string> {
  const { data } = usePeople();
  return Object.fromEntries((data ?? []).map((p) => [p.id, p.name]));
}

/** Data is small: after any write we simply refresh every query. */
export function useRefreshAll() {
  const qc = useQueryClient();
  return () => qc.invalidateQueries();
}

export function errorMessage(e: unknown): string {
  if (e instanceof ApiError) return e.message;
  if (e instanceof Error) return e.message;
  return "Error inesperado";
}

/** Mutation that refreshes everything on success and toasts errors. */
export function useAppMutation<TVars, TResult>(
  fn: (vars: TVars) => Promise<TResult>,
  opts: { success?: string | ((r: TResult) => string); onSuccess?: (r: TResult, v: TVars) => void; onError?: (e: unknown, v: TVars) => boolean | void } = {},
) {
  const refresh = useRefreshAll();
  return useMutation({
    mutationFn: fn,
    onSuccess: (r, v) => {
      refresh();
      if (opts.success) toast.success(typeof opts.success === "function" ? opts.success(r) : opts.success);
      opts.onSuccess?.(r, v);
    },
    onError: (e, v) => {
      if (opts.onError?.(e, v)) return;
      toast.error(errorMessage(e));
    },
  });
}

import type {
  Action, Activity, ActivityDetail, AgentReply, AppSettings, Blocker, Briefing, ChatContext, ChatMessage,
  ChatSession, Dashboard, Finding, Health, HistoryEntry, Initiative, OpenQuestion, PendingChange, Person,
  Project, PullRequest, Risk, SearchResult, SettingsResponse,
} from "./types";

const BASE = (import.meta.env.VITE_API_BASE_URL as string | undefined)?.replace(/\/$/, "") ?? "http://127.0.0.1:8000";

export class ApiError extends Error {
  status: number;
  data: Record<string, unknown>;
  constructor(status: number, message: string, data: Record<string, unknown>) {
    super(message);
    this.status = status;
    this.data = data;
  }
  get requiresConfirmation() {
    return this.status === 409 && Boolean(this.data.requiresConfirmation);
  }
}

async function request<T>(method: string, path: string, body?: unknown): Promise<T> {
  let res: Response;
  try {
    res = await fetch(`${BASE}${path}`, {
      method,
      headers: body !== undefined ? { "Content-Type": "application/json" } : undefined,
      body: body !== undefined ? JSON.stringify(body) : undefined,
    });
  } catch {
    throw new ApiError(0, "No se pudo conectar con el backend. ¿Está corriendo en " + BASE + "?", {});
  }
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    const detail = typeof data?.detail === "string" ? data.detail : `Error ${res.status}`;
    throw new ApiError(res.status, detail, data ?? {});
  }
  return data as T;
}

const get = <T>(p: string) => request<T>("GET", p);
const post = <T>(p: string, b?: unknown) => request<T>("POST", p, b ?? {});
const patch = <T>(p: string, b: unknown) => request<T>("PATCH", p, b);
const del = <T>(p: string) => request<T>("DELETE", p);
const qs = (params: Record<string, string | number | undefined | null>) => {
  const s = new URLSearchParams();
  Object.entries(params).forEach(([k, v]) => v !== undefined && v !== null && v !== "" && s.set(k, String(v)));
  const str = s.toString();
  return str ? `?${str}` : "";
};

type Body = Record<string, unknown>;

export const api = {
  health: () => get<Health>("/api/health"),
  dashboard: () => get<Dashboard>("/api/dashboard"),
  briefing: () => get<Briefing>("/api/briefing"),
  search: (q: string) => get<SearchResult[]>(`/api/search${qs({ q })}`),

  activities: {
    list: () => get<Activity[]>("/api/activities"),
    get: (id: string) => get<ActivityDetail>(`/api/activities/${id}`),
    create: (b: Body) => post<Activity>("/api/activities", b),
    update: (id: string, b: Body) => patch<Activity>(`/api/activities/${id}`, b),
    move: (id: string, status: string, confirmed = false) =>
      post<Activity>(`/api/activities/${id}/move`, { status, confirmed }),
    note: (id: string, text: string) => post<Activity>(`/api/activities/${id}/notes`, { text }),
    aiSummary: (id: string) => post<Activity>(`/api/activities/${id}/ai-summary`),
    remove: (id: string) => del<{ ok: boolean }>(`/api/activities/${id}`),
  },
  actions: {
    create: (b: Body) => post<Action>("/api/actions", b),
    update: (id: string, b: Body) => patch<Action>(`/api/actions/${id}`, b),
    remove: (id: string) => del<{ ok: boolean }>(`/api/actions/${id}`),
  },
  blockers: {
    list: (status?: string) => get<Blocker[]>(`/api/blockers${qs({ status })}`),
    create: (b: Body) => post<Blocker>("/api/blockers", b),
    update: (id: string, b: Body) => patch<Blocker>(`/api/blockers/${id}`, b),
    resolve: (id: string, resolution: string) => post<Blocker>(`/api/blockers/${id}/resolve`, { resolution }),
    followUp: (id: string, comment: string, nextFollowUp?: string | null) =>
      post<Blocker>(`/api/blockers/${id}/follow-up`, { comment, nextFollowUp }),
  },
  prs: {
    list: () => get<PullRequest[]>("/api/prs"),
    get: (id: string) => get<PullRequest & { history: HistoryEntry[] }>(`/api/prs/${id}`),
    create: (b: Body) => post<PullRequest>("/api/prs", b),
    update: (id: string, b: Body) => patch<PullRequest>(`/api/prs/${id}`, b),
    addBuild: (id: string, b: Body) => post<PullRequest>(`/api/prs/${id}/builds`, b),
    remove: (id: string) => del<{ ok: boolean }>(`/api/prs/${id}`),
  },
  projects: {
    list: () => get<Project[]>("/api/projects"),
    get: (id: string) => get<{
      project: Project; activities: Activity[]; pullRequests: PullRequest[]; blockers: Blocker[];
      people: Person[]; initiatives: Initiative[]; questions: OpenQuestion[]; history: HistoryEntry[];
    }>(`/api/projects/${id}`),
    create: (b: Body) => post<Project>("/api/projects", b),
    update: (id: string, b: Body) => patch<Project>(`/api/projects/${id}`, b),
    remove: (id: string) => del<{ ok: boolean }>(`/api/projects/${id}`),
  },
  people: {
    list: () => get<Person[]>("/api/people"),
    get: (id: string) => get<{
      person: Person; owned: Activity[]; support: Activity[]; projects: Project[]; initiatives: Initiative[];
    }>(`/api/people/${id}`),
    create: (b: Body) => post<Person>("/api/people", b),
    update: (id: string, b: Body) => patch<Person>(`/api/people/${id}`, b),
    remove: (id: string) => del<{ ok: boolean }>(`/api/people/${id}`),
  },
  initiatives: {
    list: () => get<Initiative[]>("/api/initiatives"),
    get: (id: string) => get<{
      initiative: Initiative; activities: Activity[]; collaborators: Person[]; questions: OpenQuestion[];
      history: HistoryEntry[];
    }>(`/api/initiatives/${id}`),
    create: (b: Body) => post<Initiative>("/api/initiatives", b),
    update: (id: string, b: Body) => patch<Initiative>(`/api/initiatives/${id}`, b),
    remove: (id: string) => del<{ ok: boolean }>(`/api/initiatives/${id}`),
  },
  risks: {
    list: () => get<Risk[]>("/api/risks"),
    update: (id: string, b: Body) => patch<Risk>(`/api/risks/${id}`, b),
  },
  history: (params: { entityType?: string; entityId?: string; activityId?: string; days?: number; limit?: number } = {}) =>
    get<HistoryEntry[]>(`/api/history${qs(params)}`),
  questions: {
    list: (status = "OPEN") => get<OpenQuestion[]>(`/api/questions${qs({ status })}`),
    answer: (id: string, answer: string) => post<OpenQuestion>(`/api/questions/${id}/answer`, { answer }),
    dismiss: (id: string) => post<OpenQuestion>(`/api/questions/${id}/dismiss`),
  },
  pending: {
    list: (status?: string) => get<PendingChange[]>(`/api/pending-changes${qs({ status })}`),
    confirm: (id: string) => post<PendingChange>(`/api/pending-changes/${id}/confirm`),
    reject: (id: string) => post<PendingChange>(`/api/pending-changes/${id}/reject`),
  },
  recommendations: {
    dismiss: (id: string) => post<Finding>(`/api/recommendations/${id}/dismiss`),
  },
  settings: {
    get: () => get<SettingsResponse>("/api/settings"),
    update: (b: Partial<AppSettings>) => patch<AppSettings>("/api/settings", b),
  },
  agent: {
    chat: (b: { message: string; sessionId?: string | null; context?: ChatContext | null; questionId?: string | null }) =>
      post<AgentReply>("/api/agent/chat", b),
    sessions: (ctx?: { contextType: string; contextId: string }) =>
      get<ChatSession[]>(`/api/agent/sessions${qs({ contextType: ctx?.contextType, contextId: ctx?.contextId })}`),
    createSession: () => post<ChatSession>("/api/agent/sessions"),
    messages: (sessionId: string) => get<ChatMessage[]>(`/api/agent/sessions/${sessionId}/messages`),
    deleteSession: (sessionId: string) => del<{ ok: boolean }>(`/api/agent/sessions/${sessionId}`),
  },
};

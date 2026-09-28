export type ActivityStatus = "PENDING" | "ANALYSIS" | "IN_PROGRESS" | "VALIDATION" | "READY_TO_CLOSE" | "DONE" | "CANCELLED";
export type Priority = "P0" | "P1" | "P2" | "P3";
export type RiskLevel = "LOW" | "MEDIUM" | "HIGH";
export type TrafficLight = "GREEN" | "YELLOW" | "RED" | "GRAY";
export type Severity = "HIGH" | "MEDIUM" | "LOW";

export interface Note {
  text: string;
  source: string;
  createdAt: string;
}

export interface ActivityDerived {
  trafficLight: TrafficLight;
  reasons: string[];
  effectiveRisk: RiskLevel | null;
  daysSinceUpdate: number | null;
  daysToDue: number | null;
  isStale: boolean;
  isDueSoon: boolean;
  isWaiting: boolean;
  hasOpenPr: boolean;
  prBuildFailed: boolean;
  openBlockers: number;
  openQuestions: number;
  totalActions: number;
  doneActions: number;
  ownerName: string | null;
  projectName: string | null;
  prNumbers: string[];
}

export interface Activity {
  id: string;
  title: string;
  type: string | null;
  projectDependencyId: string | null;
  initiativeId: string | null;
  description: string | null;
  priority: Priority | null;
  status: ActivityStatus;
  technicalStatus: string | null;
  ownerId: string | null;
  supportPeople: string[];
  requester: string | null;
  requestDate: string | null;
  dueDate: string | null;
  lastUpdate: string;
  blocked: boolean;
  blockerId: string | null;
  waitingFor: string | null;
  nextAction: string | null;
  nextFollowUp: string | null;
  evidenceUrls: string[];
  estimatedHours: number | null;
  consumedHours: number | null;
  riskLevel: RiskLevel | null;
  riskReason: string | null;
  result: string | null;
  aliases: string[];
  notes: Note[];
  aiSummary: string | null;
  aiSummaryAt: string | null;
  createdAt: string;
  updatedAt: string;
  derived: ActivityDerived;
}

export interface Action {
  id: string;
  activityId: string;
  title: string;
  description: string | null;
  ownerId: string | null;
  status: "PENDING" | "IN_PROGRESS" | "DONE" | "CANCELLED";
  priority: Priority | null;
  dueDate: string | null;
  createdBy: "USER" | "AGENT" | "SYSTEM";
  createdAt: string;
  completedAt: string | null;
  order: number;
}

export interface Blocker {
  id: string;
  activityId: string;
  type: string;
  description: string;
  responsible: string | null;
  waitingFor: string | null;
  blockedSince: string | null;
  lastFollowUp: string | null;
  nextFollowUp: string | null;
  status: "OPEN" | "RESOLVED";
  resolution: string | null;
  resolvedAt: string | null;
  createdAt: string;
  activityTitle?: string | null;
  ownerName?: string | null;
  blockedDays?: number | null;
}

export interface Build {
  number: number | null;
  status: string;
  date: string | null;
  notes: string | null;
}

export interface PullRequest {
  id: string;
  activityId: string | null;
  projectId: string | null;
  project: string | null;
  repository: string | null;
  pullRequestNumber: string;
  jiraRef: string | null;
  title: string;
  branch: string | null;
  url: string | null;
  status: "OPEN" | "DRAFT" | "MERGED" | "DECLINED";
  automationStatus: string;
  latestBuild: number | null;
  buildStatus: string;
  regressionStatus: string;
  gherkinTotal: number | null;
  gherkinPassed: number | null;
  gherkinFailed: number | null;
  pendingComments: number | null;
  reviewer: string | null;
  approvalStatus: string;
  mergeStatus: string;
  lastUpdate: string;
  nextAction: string | null;
  riskLevel: RiskLevel | null;
  builds: Build[];
  notes: string | null;
  createdAt: string;
  updatedAt: string;
  activityTitle?: string | null;
  trafficLight?: TrafficLight | null;
  ownerName?: string | null;
  projectName?: string | null;
  isOpen?: boolean;
}

export interface Workload {
  activeActivities: number;
  supportActivities: number;
  assignedHours: number;
  availableHours: number | null;
  loadPct: number | null;
  saturated: boolean;
  blockedActivities: number;
  activityIds: string[];
}

export interface Person {
  id: string;
  name: string;
  role: string | null;
  team: string | null;
  kind: "INTERNAL" | "EXTERNAL";
  specialties: string[];
  availableHours: number | null;
  status: string;
  aliases: string[];
  workload?: Workload;
}

export interface Project {
  id: string;
  name: string;
  kind: "PROJECT" | "DEPENDENCY";
  jiraId: string | null;
  quarter: string | null;
  scrum: string | null;
  reporter: string | null;
  status: string;
  startDate: string | null;
  dueDate: string | null;
  estimatedAutomationHours: number | null;
  assignedAutomationHours: number | null;
  description: string | null;
  automationScope: string | null;
  riskLevel: RiskLevel | null;
  aliases: string[];
  activityCount?: number;
  blockedCount?: number;
  prCount?: number;
  openQuestions?: number;
}

export interface Initiative {
  id: string;
  name: string;
  description: string | null;
  ownerId: string | null;
  status: string;
  phase: string | null;
  objective: string | null;
  mvp: string | null;
  dueDate: string | null;
  risk: string | null;
  nextAction: string | null;
  collaborators: string[];
  aliases: string[];
  ownerName?: string | null;
  activityCount?: number;
  openQuestions?: number;
}

export interface Risk {
  id: string;
  title: string;
  description: string | null;
  level: RiskLevel | null;
  status: "OPEN" | "MITIGATED" | "CLOSED";
  mitigation: string | null;
  relatedPrIds: string[];
  relatedActivityIds: string[];
}

export interface HistoryEntry {
  id: string;
  entityType: string;
  entityId: string;
  entityName: string | null;
  activityId: string | null;
  field: string;
  oldValue: unknown;
  newValue: unknown;
  comment: string | null;
  source: string;
  createdBy: string;
  createdAt: string;
}

export interface OpenQuestion {
  id: string;
  entityType: string;
  entityId: string | null;
  activityId: string | null;
  question: string;
  field: string | null;
  status: "OPEN" | "ANSWERED" | "DISMISSED";
  answer: string | null;
  answeredAt: string | null;
  createdBy: string;
  group: string | null;
  createdAt: string;
  entityLabel?: string | null;
}

export interface PendingChange {
  id: string;
  kind: "UPDATE" | "CREATE_BLOCKER";
  entityType: string;
  entityId: string;
  entityName: string | null;
  field: string | null;
  oldValue: unknown;
  newValue: unknown;
  payload: Record<string, unknown>;
  basis: "FACT" | "INFERENCE";
  reason: string | null;
  evidence: string | null;
  sourceMessage: string | null;
  status: "PENDING" | "APPLIED" | "REJECTED";
  createdAt: string;
}

export interface Finding {
  ruleId: string;
  severity: Severity;
  category: string;
  entityType: string;
  entityId: string;
  entityName: string;
  activityId: string | null;
  title: string;
  message: string | null;
  action: string;
}

export interface AttentionItem {
  key: string;
  entityType: string;
  entityId: string;
  name: string;
  severity: Severity;
  situation: string;
  detail: string | null;
  action: string;
  extra: string[];
}

export interface Dashboard {
  greeting: string;
  userName: string;
  date: string;
  kpis: {
    openPrs: number;
    blocked: number;
    highRisks: number;
    waitingThirdParty: number;
    active: number;
    openQuestions: number;
    pendingConfirmations: number;
    openBlockers: number;
  };
  trafficLights: Record<"GREEN" | "YELLOW" | "RED", number>;
  statusCounts: Record<ActivityStatus, number>;
  attention: AttentionItem[];
  pendingChanges: PendingChange[];
  openQuestions: OpenQuestion[];
  risks: Risk[];
  recentHistory: HistoryEntry[];
}

export interface Briefing {
  greeting: string;
  date: string;
  items: AttentionItem[];
  text: string;
  focus?: string;
}

export interface NextAction {
  text: string;
  reason: string | null;
  source: string;
}

export interface ActivityDetail {
  activity: Activity;
  project: Project | null;
  initiative: Initiative | null;
  owner: Person | null;
  supportPeople: Person[];
  pullRequests: PullRequest[];
  blockers: Blocker[];
  actions: Action[];
  questions: OpenQuestion[];
  history: HistoryEntry[];
  recommendations: Finding[];
  nextRecommendedAction: NextAction | null;
}

export interface SearchResult {
  type: string;
  id: string;
  title: string;
  subtitle: string | null;
  score: number;
  url: string;
}

export interface AIHealth {
  provider: string;
  available: boolean;
  base_url: string | null;
  model: string | null;
  model_installed: boolean;
  model_loaded: boolean;
  installed_models: string[];
  error: string | null;
}

export interface Health {
  ok: boolean;
  firestore: { ok: boolean; error?: string };
  ai: AIHealth;
}

export interface EntityRef {
  type: string;
  id: string;
  name: string;
}

export interface AppliedChange {
  entityType: string;
  entityId: string;
  entityName: string;
  field: string;
  oldValue: unknown;
  newValue: unknown;
}

export interface AgentReply {
  sessionId: string;
  messageId: string;
  mode: "ai" | "fallback";
  intent: string;
  message: string;
  facts: string[];
  inferences: string[];
  recommendations: string[];
  questions: string[];
  appliedChanges: AppliedChange[];
  pendingChangeIds: string[];
  created: EntityRef[];
  references: EntityRef[];
  briefing: Briefing | null;
  warnings: string[];
}

export interface ChatSession {
  id: string;
  title: string;
  contextType: string | null;
  contextId: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface ChatMessage {
  id: string;
  sessionId: string;
  role: "user" | "assistant";
  content: string;
  data: AgentReply | null;
  createdAt: string;
}

export interface ChatContext {
  entityType: string;
  entityId: string;
  label?: string;
}

export interface AppSettings {
  blockedEscalationDays: number;
  staleDays: number;
  dueSoonDays: number;
  maxActiveActivities: number;
  currentUserId: string | null;
  aiModelOverride: string | null;
}

export interface SettingsResponse {
  app: AppSettings;
  env: {
    firebaseProjectId: string;
    aiProvider: string;
    ollamaBaseUrl: string;
    ollamaModel: string;
    ollamaNumCtx: number;
    timezone: string;
    currentUserName: string;
  };
  rules: { id: string; description: string }[];
  pendingCount: number;
}

export type Severity = 'HIGH' | 'MEDIUM' | 'LOW';
export type FileKind = 'feature' | 'step_definition' | 'page' | 'navigation' | 'component' | 'other';
export type FixMode = 'auto' | 'ai' | 'manual';

export interface FeatureEntry {
    path: string;
    name: string;
    fileName: string;
    epic: string;
    tags: string[];
    scenarioIds: string[];
    scenarios: number;
}

export interface JsEntry {
    path: string;
    fileName: string;
    kind: FileKind;
    folder: string;
}

export interface SkillRun {
    name: string;
    label: string;
    status: 'pending' | 'running' | 'done' | 'skipped' | 'error';
    ms: number | null;
    detail: string;
}

export interface RelatedFile {
    path: string;
    kind: FileKind;
    role: 'principal' | 'compartido';
    reason: string;
    lines: number;
}

export interface StepMatch {
    scenario: string;
    line: number;
    keyword: string;
    text: string;
    status: 'ok' | 'undefined' | 'ambiguous';
    stepDefIds: string[];
    navigations: string[];
    currentPage: string | null;
    validatesScreen: boolean;
}

export interface Finding {
    id: string;
    ruleId: string;
    title: string;
    category: string;
    severity: Severity;
    file: string;
    line: number | null;
    lines: number[];
    evidence: string;
    message: string;
    recommendation: string;
    exampleGood: string | null;
    suggestedCode: string | null;
    source: 'reglas' | 'ia';
    fix: FixMode;
    manualReason: string | null;
    doc: string;
    resolvedByFix: boolean;
}

export interface FileFix {
    file: string;
    action: 'edit' | 'delete';
    paths: string[];
    kind: FileKind;
    originalHash: string;
    original: string;
    proposed: string;
    diff: string;
    findingIds: string[];
    changes: string[];
    warnings: string[];
    generatedBy: string;
    applied: boolean;
    appliedAt: string | null;
    backupId: string | null;
}

export interface Summary {
    score: number;
    level: 'ok' | 'warning' | 'critical';
    counts: Record<Severity, number>;
    byFile: Record<string, number>;
    byCategory: Record<string, number>;
    text: string;
}

export interface AnalysisReport {
    id: string;
    featurePath: string;
    featureName: string;
    targetType: 'feature' | 'js';
    status: 'running' | 'done' | 'error';
    createdAt: string;
    finishedAt: string | null;
    contentHash: string;
    model: string | null;
    aiUsed: boolean;
    skills: SkillRun[];
    related: RelatedFile[];
    matches: StepMatch[];
    findings: Finding[];
    fixes: FileFix[];
    summary: Summary;
    warnings: string[];
    error: string | null;
}

export interface HistoryRow {
    id: string;
    featurePath: string;
    featureName: string;
    createdAt: string;
    finishedAt: string | null;
    status: string;
    model: string | null;
    aiUsed: boolean;
    score: number;
    level: Summary['level'];
    counts: Record<Severity, number>;
    fixes: number;
}

export interface AppliedRow {
    action: 'apply' | 'revert';
    at: string;
    reportId: string;
    featurePath: string;
    file: string;
    backupId: string;
    changes?: string[];
}

export interface Rule {
    id: string;
    title: string;
    description: string;
    category: string;
    appliesTo: FileKind[];
    severity: Severity;
    check: 'code' | 'ai' | 'code+ai' | 'manual';
    fix: FixMode;
    source: string;
    recommendation: string;
    exampleBad: string | null;
    exampleGood: string | null;
}

export interface Health {
    index: {state: string; error: string | null; buildMs: number; features: number; stepDefinitions: number; jsFiles: number; recordings: number};
    ai: {available: boolean; provider: string; model: string; modelInstalled: boolean; models: string[]; error: string | null; enabled: boolean};
    paths: {framework: string; e2e: string; metrics: string; data: string};
    rules: number;
}

export interface AppSettings {
    modelOverride: string | null;
    aiEnabled: boolean;
    aiReviewCode: boolean;
    aiGenerateFixes: boolean;
    maxAiFiles: number;
    maxAiLines: number;
    defaultModel: string;
}

import { Bot, Cog, Lock, User } from "lucide-react";
import {
  AUTOMATION_LABELS, BLOCKER_TYPE_LABELS, BUILD_LABELS, MERGE_LABELS, REGRESSION_LABELS, RISK_LABELS, STATUS_LABELS,
} from "@/lib/labels";
import type { TrafficLight as TL } from "@/lib/types";
import { cn, initials } from "@/lib/utils";
import { Badge, type Tone } from "./ui";

const LIGHT: Record<TL, { dot: string; label: string }> = {
  GREEN: { dot: "bg-emerald-500", label: "Normal" },
  YELLOW: { dot: "bg-amber-400", label: "Necesita seguimiento" },
  RED: { dot: "bg-red-500", label: "Atención inmediata" },
  GRAY: { dot: "bg-slate-400", label: "Cerrada" },
};

export function TrafficLight({ value, reasons, size = "md", withLabel }: { value: TL; reasons?: string[]; size?: "sm" | "md" | "lg"; withLabel?: boolean }) {
  const s = { sm: "h-2 w-2", md: "h-2.5 w-2.5", lg: "h-3.5 w-3.5" }[size];
  const l = LIGHT[value] ?? LIGHT.GRAY;
  const title = [l.label, ...(reasons ?? [])].join("\n");
  return (
    <span className="inline-flex items-center gap-1.5" title={title}>
      <span className={cn("relative inline-block shrink-0 rounded-full", s, l.dot)}>
        {value === "RED" && <span className={cn("absolute inset-0 animate-ping rounded-full opacity-40", l.dot)} />}
      </span>
      {withLabel && <span className="text-xs text-muted">{l.label}</span>}
    </span>
  );
}

const STATUS_TONE: Record<string, Tone> = {
  PENDING: "gray", ANALYSIS: "violet", IN_PROGRESS: "blue", VALIDATION: "amber", READY_TO_CLOSE: "green",
  DONE: "gray", CANCELLED: "gray",
};
export function StatusBadge({ status }: { status: string }) {
  return <Badge tone={STATUS_TONE[status] ?? "gray"}>{STATUS_LABELS[status] ?? status}</Badge>;
}

const PRIORITY_TONE: Record<string, Tone> = { P0: "red", P1: "amber", P2: "blue", P3: "gray" };
export function PriorityBadge({ priority }: { priority: string | null }) {
  if (!priority) return <Badge tone="gray" className="opacity-70" title="Prioridad por confirmar">P?</Badge>;
  return <Badge tone={PRIORITY_TONE[priority] ?? "gray"}>{priority}</Badge>;
}

const RISK_TONE: Record<string, Tone> = { LOW: "green", MEDIUM: "amber", HIGH: "red" };
export function RiskBadge({ risk }: { risk: string | null }) {
  if (!risk) return <Badge tone="gray">Riesgo por confirmar</Badge>;
  return <Badge tone={RISK_TONE[risk]}>Riesgo {RISK_LABELS[risk]?.toLowerCase()}</Badge>;
}

const RESULT_TONE: Record<string, Tone> = {
  PASSED: "green", FAILED: "red", IN_PROGRESS: "blue", RUNNING: "blue", PENDING: "amber", UNKNOWN: "gray", NOT_REQUIRED: "gray",
};
export function BuildBadge({ status, number }: { status: string; number?: number | null }) {
  return (
    <Badge tone={RESULT_TONE[status] ?? "gray"}>
      Build{number ? ` #${number}` : ""}: {BUILD_LABELS[status] ?? status}
    </Badge>
  );
}
export function RegressionBadge({ status }: { status: string }) {
  return <Badge tone={RESULT_TONE[status] ?? "gray"}>Regresión: {REGRESSION_LABELS[status] ?? status}</Badge>;
}
export function AutomationBadge({ status }: { status: string }) {
  const tone: Tone = status === "COMPLETED" ? "green" : status === "MAINTENANCE" ? "amber" : status === "UNKNOWN" ? "gray" : "blue";
  return <Badge tone={tone}>Automatización: {AUTOMATION_LABELS[status] ?? status}</Badge>;
}
export function MergeBadge({ status }: { status: string }) {
  return <Badge tone={status === "MERGED" ? "green" : status === "UNKNOWN" ? "gray" : "violet"}>{MERGE_LABELS[status] ?? status}</Badge>;
}
export function BlockerTypeBadge({ type }: { type: string }) {
  return (
    <Badge tone="red">
      <Lock className="h-3 w-3" /> {BLOCKER_TYPE_LABELS[type] ?? type}
    </Badge>
  );
}

export function SeverityDot({ severity }: { severity: string }) {
  const c = severity === "HIGH" ? "bg-red-500" : severity === "MEDIUM" ? "bg-amber-400" : "bg-sky-400";
  return <span className={cn("inline-block h-2 w-2 shrink-0 rounded-full", c)} />;
}

export function CreatedByIcon({ by }: { by: string }) {
  if (by === "AGENT") return <span title="Creada por el agente"><Bot className="h-3.5 w-3.5 text-accent" /></span>;
  if (by === "SYSTEM") return <span title="Creada por el sistema"><Cog className="h-3.5 w-3.5 text-subtle" /></span>;
  return <span title="Creada por el usuario"><User className="h-3.5 w-3.5 text-subtle" /></span>;
}

const AVATAR_COLORS = [
  "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/60 dark:text-indigo-200",
  "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/60 dark:text-emerald-200",
  "bg-amber-100 text-amber-800 dark:bg-amber-900/60 dark:text-amber-200",
  "bg-rose-100 text-rose-700 dark:bg-rose-900/60 dark:text-rose-200",
  "bg-sky-100 text-sky-700 dark:bg-sky-900/60 dark:text-sky-200",
];

export function Avatar({ name, size = "md" }: { name?: string | null; size?: "sm" | "md" | "lg" }) {
  const s = { sm: "h-6 w-6 text-[10px]", md: "h-8 w-8 text-xs", lg: "h-12 w-12 text-base" }[size];
  if (!name) {
    return (
      <span title="Responsable por confirmar" className={cn("inline-flex shrink-0 items-center justify-center rounded-full border border-dashed border-border text-subtle", s)}>
        ?
      </span>
    );
  }
  const color = AVATAR_COLORS[[...name].reduce((a, c) => a + c.charCodeAt(0), 0) % AVATAR_COLORS.length];
  return (
    <span title={name} className={cn("inline-flex shrink-0 items-center justify-center rounded-full font-semibold", s, color)}>
      {initials(name)}
    </span>
  );
}

export function ToConfirm({ value, children }: { value: unknown; children?: React.ReactNode }) {
  if (value === null || value === undefined || value === "") {
    return <span className="italic text-subtle">Por confirmar</span>;
  }
  return <>{children ?? String(value)}</>;
}

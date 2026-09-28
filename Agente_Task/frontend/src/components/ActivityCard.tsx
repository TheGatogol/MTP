import { CalendarClock, CircleAlert, GitPullRequest, Hourglass, Lock, MessageCircleQuestion } from "lucide-react";
import { Link } from "react-router-dom";
import type { Activity } from "@/lib/types";
import { cn, dueLabel, relativeTime } from "@/lib/utils";
import { Avatar, PriorityBadge, StatusBadge, TrafficLight } from "./badges";
import { Badge } from "./ui";

export function ActivityMeta({ a, compact }: { a: Activity; compact?: boolean }) {
  const d = a.derived;
  return (
    <div className="flex flex-wrap items-center gap-1.5">
      {a.blocked && (
        <Badge tone="red"><Lock className="h-3 w-3" /> Bloqueada</Badge>
      )}
      {d.hasOpenPr && d.prNumbers.length > 0 && (
        <Badge tone={d.prBuildFailed ? "red" : "violet"}><GitPullRequest className="h-3 w-3" /> {d.prNumbers.join(", ")}</Badge>
      )}
      {a.waitingFor && !compact && (
        <Badge tone="amber" title={a.waitingFor}><Hourglass className="h-3 w-3" /> Esperando</Badge>
      )}
      {d.openQuestions > 0 && (
        <Badge tone="blue" title="Preguntas abiertas"><MessageCircleQuestion className="h-3 w-3" /> {d.openQuestions}</Badge>
      )}
      {a.dueDate && (
        <Badge tone={d.isDueSoon ? "red" : "gray"}><CalendarClock className="h-3 w-3" /> {dueLabel(d.daysToDue, a.dueDate)}</Badge>
      )}
    </div>
  );
}

/** Card used in lists and in the Kanban board. */
export function ActivityCard({ a, showStatus = true, className, dragging }: { a: Activity; showStatus?: boolean; className?: string; dragging?: boolean }) {
  const d = a.derived;
  const progress = d.totalActions ? Math.round((d.doneActions / d.totalActions) * 100) : null;
  return (
    <div
      className={cn(
        "group rounded-xl border border-border bg-surface p-3 transition-shadow hover:shadow-md",
        a.derived.trafficLight === "RED" && "border-l-[3px] border-l-red-500",
        a.derived.trafficLight === "YELLOW" && "border-l-[3px] border-l-amber-400",
        dragging && "shadow-xl ring-2 ring-accent/40",
        className,
      )}
    >
      <div className="flex items-start gap-2">
        <span className="mt-1.5"><TrafficLight value={d.trafficLight} reasons={d.reasons} /></span>
        <div className="min-w-0 flex-1">
          <Link to={`/activities/${a.id}`} className="block text-sm font-medium leading-snug text-fg hover:text-accent" onPointerDown={(e) => e.stopPropagation()}>
            {a.title}
          </Link>
          <p className="mt-0.5 truncate text-xs text-muted">
            {a.technicalStatus || d.projectName || a.type || "Sin estado técnico"}
          </p>
        </div>
        <Avatar name={d.ownerName} size="sm" />
      </div>
      <div className="mt-2.5 flex flex-wrap items-center gap-1.5">
        {showStatus && <StatusBadge status={a.status} />}
        <PriorityBadge priority={a.priority} />
      </div>
      <div className="mt-2"><ActivityMeta a={a} compact /></div>
      {d.reasons.length > 0 && d.trafficLight !== "GRAY" && (
        <p className="mt-2 flex items-start gap-1 text-[11px] leading-4 text-muted">
          <CircleAlert className="mt-px h-3 w-3 shrink-0 text-subtle" />
          <span className="line-clamp-2">{d.reasons.slice(0, 2).join(" · ")}</span>
        </p>
      )}
      <div className="mt-2 flex items-center justify-between gap-2 text-[11px] text-subtle">
        <span>Act. {relativeTime(a.lastUpdate)}</span>
        {progress !== null && <span>{d.doneActions}/{d.totalActions} acciones</span>}
      </div>
    </div>
  );
}

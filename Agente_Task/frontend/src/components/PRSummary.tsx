import { ExternalLink, GitPullRequest } from "lucide-react";
import { Link } from "react-router-dom";
import { APPROVAL_LABELS, PR_STATUS_LABELS } from "@/lib/labels";
import type { PullRequest } from "@/lib/types";
import { cn, relativeTime } from "@/lib/utils";
import { AutomationBadge, BuildBadge, MergeBadge, RegressionBadge, TrafficLight } from "./badges";
import { Badge } from "./ui";

export function BuildStrip({ pr }: { pr: PullRequest }) {
  if (!pr.builds.length) return <span className="text-xs text-subtle">Historial de builds por confirmar</span>;
  return (
    <div className="flex flex-wrap items-center gap-1">
      {pr.builds.map((b, i) => (
        <span
          key={i}
          title={`Build #${b.number ?? "?"}: ${b.status}${b.notes ? " · " + b.notes : ""}`}
          className={cn(
            "rounded px-1.5 py-0.5 text-[10px] font-semibold",
            b.status === "PASSED" && "bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300",
            b.status === "FAILED" && "bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-300",
            !["PASSED", "FAILED"].includes(b.status) && "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300",
          )}
        >
          #{b.number ?? "?"}
        </span>
      ))}
    </div>
  );
}

export function GherkinBar({ pr }: { pr: PullRequest }) {
  if (pr.gherkinTotal === null && pr.gherkinFailed === null && pr.gherkinPassed === null) {
    return <span className="text-xs text-subtle">Gherkins: por confirmar</span>;
  }
  const total = pr.gherkinTotal ?? (pr.gherkinPassed ?? 0) + (pr.gherkinFailed ?? 0);
  const passed = pr.gherkinPassed ?? 0;
  const failed = pr.gherkinFailed ?? 0;
  return (
    <div className="w-full">
      <div className="flex h-1.5 overflow-hidden rounded-full bg-surface-2">
        <div className="bg-emerald-500" style={{ width: `${total ? (passed / total) * 100 : 0}%` }} />
        <div className="bg-red-500" style={{ width: `${total ? (failed / total) * 100 : 0}%` }} />
      </div>
      <p className="mt-1 text-[11px] text-muted">Gherkins: {passed} OK · {failed} fallidos · {total} totales</p>
    </div>
  );
}

export function PRSummaryCard({ pr }: { pr: PullRequest }) {
  return (
    <div className="rounded-xl border border-border bg-surface p-4">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <Link to={`/prs/${pr.id}`} className="flex items-center gap-2 text-sm font-semibold text-fg hover:text-accent">
            {pr.trafficLight && <TrafficLight value={pr.trafficLight} />}<GitPullRequest className="h-4 w-4 shrink-0 text-violet-500" /> PR {pr.pullRequestNumber} · {pr.title}
          </Link>
          <p className="mt-0.5 text-xs text-muted">
            {[pr.jiraRef, pr.repository, pr.branch].filter(Boolean).join(" · ") || "Repositorio/rama por confirmar"} · act. {relativeTime(pr.lastUpdate)}
          </p>
        </div>
        <div className="flex items-center gap-1.5">
          <Badge tone={pr.status === "OPEN" ? "violet" : pr.status === "MERGED" ? "green" : "gray"}>{PR_STATUS_LABELS[pr.status]}</Badge>
          {pr.url && (
            <a href={pr.url} target="_blank" rel="noreferrer" className="rounded p-1 text-subtle hover:text-accent" title="Abrir PR"><ExternalLink className="h-3.5 w-3.5" /></a>
          )}
        </div>
      </div>
      <div className="mt-3 flex flex-wrap gap-1.5">
        <AutomationBadge status={pr.automationStatus} />
        <BuildBadge status={pr.buildStatus} number={pr.latestBuild} />
        <RegressionBadge status={pr.regressionStatus} />
        <Badge tone={pr.approvalStatus === "APPROVED" ? "green" : "gray"}>VoBo: {APPROVAL_LABELS[pr.approvalStatus]}</Badge>
        <MergeBadge status={pr.mergeStatus} />
      </div>
      <div className="mt-3 grid gap-3 sm:grid-cols-2">
        <div>
          <p className="mb-1 text-[11px] font-medium text-subtle">Builds</p>
          <BuildStrip pr={pr} />
        </div>
        <GherkinBar pr={pr} />
      </div>
      {pr.nextAction && <p className="mt-3 text-[13px] text-fg"><span className="font-medium text-accent">Siguiente:</span> {pr.nextAction}</p>}
      {pr.notes && <p className="mt-1 text-xs text-muted">{pr.notes}</p>}
    </div>
  );
}

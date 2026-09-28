import { ArrowRight, Bot, Cog, MousePointerClick, Sprout, User } from "lucide-react";
import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ENTITY_LABELS, SOURCE_LABELS, fieldLabel, formatValue } from "@/lib/labels";
import { usePeopleMap } from "@/lib/queries";
import type { HistoryEntry } from "@/lib/types";
import { fmtDateTime } from "@/lib/utils";
import { entityUrl } from "./chat/AgentMessage";
import { EmptyState } from "./ui";

const SOURCE_ICON: Record<string, ReactNode> = {
  AGENT: <Bot className="h-3.5 w-3.5 text-accent" />,
  UI: <User className="h-3.5 w-3.5 text-muted" />,
  KANBAN: <MousePointerClick className="h-3.5 w-3.5 text-muted" />,
  SEED: <Sprout className="h-3.5 w-3.5 text-emerald-600" />,
  SYSTEM: <Cog className="h-3.5 w-3.5 text-muted" />,
};

function Change({ h, people }: { h: HistoryEntry; people: Record<string, string> }) {
  if (h.field === "_created") return <span className="text-muted">Creado</span>;
  if (h.field === "_deleted") return <span className="text-red-600">Eliminado (estado anterior conservado)</span>;
  if (h.field === "note") return <span className="text-fg">📝 {String(h.newValue)}</span>;
  return (
    <span>
      <span className="text-muted">{fieldLabel(h.field)}:</span>{" "}
      <span className="text-muted line-through decoration-subtle/60">{formatValue(h.field, h.oldValue, people)}</span>
      <ArrowRight className="mx-1 inline h-3 w-3 text-subtle" />
      <b className="font-medium text-fg">{formatValue(h.field, h.newValue, people)}</b>
    </span>
  );
}

// Internal bookkeeping fields: the meaningful change is already recorded in another entry.
const HIDDEN_FIELDS = new Set(["blockerId", "updatedAt", "lastUpdate"]);

export function HistoryList({ entries: all, compact, showEntity = true }: { entries: HistoryEntry[]; compact?: boolean; showEntity?: boolean }) {
  const people = usePeopleMap();
  const entries = all.filter((h) => !HIDDEN_FIELDS.has(h.field));
  if (!entries.length) return <EmptyState title="Sin movimientos todavía" />;

  const groups: Record<string, HistoryEntry[]> = {};
  // Group by the local calendar day (createdAt is UTC); "sv-SE" formats as YYYY-MM-DD.
  for (const h of entries) (groups[new Date(h.createdAt).toLocaleDateString("sv-SE")] ??= []).push(h);

  return (
    <div className="space-y-4">
      {Object.entries(groups).map(([day, items]) => (
        <div key={day}>
          {!compact && <p className="mb-2 text-[11px] font-semibold uppercase tracking-wide text-subtle">{fmtDateTime(day).split(",")[0]}</p>}
          <ol className="relative space-y-2.5 border-l border-border pl-4">
            {items.map((h) => {
              const url = entityUrl({ type: h.activityId ? "activity" : h.entityType, id: h.activityId ?? h.entityId });
              return (
                <li key={h.id} className="relative">
                  <span className="absolute -left-[23px] top-0.5 flex h-4 w-4 items-center justify-center rounded-full border border-border bg-surface">
                    {SOURCE_ICON[h.source] ?? SOURCE_ICON.SYSTEM}
                  </span>
                  <div className="text-[13px] leading-5">
                    {showEntity && (
                      <>
                        {url ? (
                          <Link to={url} className="font-medium text-fg hover:text-accent">{h.entityName}</Link>
                        ) : (
                          <span className="font-medium text-fg">{h.entityName}</span>
                        )}
                        <span className="text-subtle"> · {ENTITY_LABELS[h.entityType] ?? h.entityType}</span>
                        <br />
                      </>
                    )}
                    <Change h={h} people={people} />
                  </div>
                  {h.comment && !compact && <p className="mt-0.5 text-xs italic text-subtle">{h.comment}</p>}
                  <p className="mt-0.5 text-[11px] text-subtle">{fmtDateTime(h.createdAt)} · {SOURCE_LABELS[h.source] ?? h.source}</p>
                </li>
              );
            })}
          </ol>
        </div>
      ))}
    </div>
  );
}

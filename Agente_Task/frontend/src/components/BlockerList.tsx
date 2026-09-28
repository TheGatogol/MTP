import { CalendarClock, CircleCheck, MessageSquarePlus, Pencil } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import type { Blocker } from "@/lib/types";
import { cn, fmtDate } from "@/lib/utils";
import { BlockerTypeBadge } from "./badges";
import { BlockerFormDialog, FollowUpDialog, ResolveBlockerDialog } from "./forms";
import { Badge, Button, EmptyState } from "./ui";

export function BlockerList({ blockers, showActivity }: { blockers: Blocker[]; showActivity?: boolean }) {
  const [edit, setEdit] = useState<Blocker | null>(null);
  const [resolve, setResolve] = useState<Blocker | null>(null);
  const [follow, setFollow] = useState<Blocker | null>(null);

  if (!blockers.length) return <EmptyState title="Sin bloqueos" description="Nada impide avanzar." />;

  return (
    <>
      <ul className="space-y-2.5">
        {blockers.map((b) => {
          const open = b.status === "OPEN";
          return (
            <li key={b.id} className={cn("rounded-xl border p-3.5", open ? "border-red-200 bg-red-50/40 dark:border-red-900/50 dark:bg-red-950/10" : "border-border opacity-80")}>
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-1.5">
                    <BlockerTypeBadge type={b.type} />
                    {open ? (
                      <Badge tone="red">{b.blockedDays !== null && b.blockedDays !== undefined ? `${b.blockedDays} día(s)` : "Desde: por confirmar"}</Badge>
                    ) : (
                      <Badge tone="green"><CircleCheck className="h-3 w-3" /> Resuelto {fmtDate(b.resolvedAt)}</Badge>
                    )}
                  </div>
                  {showActivity && b.activityTitle && (
                    <Link to={`/activities/${b.activityId}`} className="mt-1.5 block text-sm font-semibold text-fg hover:text-accent">{b.activityTitle}</Link>
                  )}
                  <p className="mt-1 text-sm text-fg">{b.description}</p>
                  <div className="mt-1.5 flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted">
                    <span>Responsable: {b.responsible ?? <i className="text-subtle">por confirmar</i>}</span>
                    {b.waitingFor && <span>Esperando: {b.waitingFor}</span>}
                    <span>Último seguimiento: {b.lastFollowUp ? fmtDate(b.lastFollowUp) : "—"}</span>
                    {b.nextFollowUp && <span className="flex items-center gap-1"><CalendarClock className="h-3 w-3" /> Próximo: {fmtDate(b.nextFollowUp)}</span>}
                  </div>
                  {!open && b.resolution && <p className="mt-1 text-xs italic text-muted">Resolución: {b.resolution}</p>}
                </div>
                {open && (
                  <div className="flex gap-1.5">
                    <Button size="sm" variant="outline" onClick={() => setFollow(b)}><MessageSquarePlus className="h-3.5 w-3.5" /> Seguimiento</Button>
                    <Button size="sm" variant="outline" onClick={() => setEdit(b)} aria-label="Editar"><Pencil className="h-3.5 w-3.5" /></Button>
                    <Button size="sm" onClick={() => setResolve(b)}><CircleCheck className="h-3.5 w-3.5" /> Resolver</Button>
                  </div>
                )}
              </div>
            </li>
          );
        })}
      </ul>
      <BlockerFormDialog open={Boolean(edit)} onOpenChange={(o) => !o && setEdit(null)} blocker={edit} />
      <ResolveBlockerDialog open={Boolean(resolve)} onOpenChange={(o) => !o && setResolve(null)} blockers={resolve ? [resolve] : []} />
      <FollowUpDialog open={Boolean(follow)} onOpenChange={(o) => !o && setFollow(null)} blocker={follow} />
    </>
  );
}

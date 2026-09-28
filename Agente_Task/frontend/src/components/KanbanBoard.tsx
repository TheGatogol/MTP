import {
  DndContext, DragOverlay, PointerSensor, TouchSensor, useDraggable, useDroppable, useSensor, useSensors,
  type DragEndEvent, type DragStartEvent,
} from "@dnd-kit/core";
import { Lock } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { api, ApiError } from "@/lib/api";
import { STATUS_LABELS } from "@/lib/labels";
import { errorMessage, useRefreshAll } from "@/lib/queries";
import type { Activity, Blocker } from "@/lib/types";
import { cn } from "@/lib/utils";
import { ActivityCard } from "./ActivityCard";
import { BlockerFormDialog, ResolveBlockerDialog } from "./forms";
import { ConfirmModal } from "./ui";

const BLOCKED = "BLOCKED";
const COLUMNS = ["PENDING", "ANALYSIS", "IN_PROGRESS", BLOCKED, "VALIDATION", "READY_TO_CLOSE", "DONE"];
const COLUMN_LABEL: Record<string, string> = { ...STATUS_LABELS, BLOCKED: "Bloqueado", DONE: "Finalizado" };

/** "Bloqueado" is a virtual column: status and blocked are independent, so blocked cards live there. */
const columnOf = (a: Activity) => (a.blocked && a.status !== "DONE" && a.status !== "CANCELLED" ? BLOCKED : a.status);

function DraggableCard({ a }: { a: Activity }) {
  const { attributes, listeners, setNodeRef, isDragging } = useDraggable({ id: a.id });
  return (
    <div ref={setNodeRef} {...listeners} {...attributes} className={cn("touch-none cursor-grab active:cursor-grabbing", isDragging && "opacity-30")}>
      <ActivityCard a={a} showStatus={a.blocked} />
    </div>
  );
}

function Column({ id, items }: { id: string; items: Activity[] }) {
  const { setNodeRef, isOver } = useDroppable({ id });
  return (
    <div className="flex w-[272px] shrink-0 flex-col">
      <div className="mb-2 flex items-center gap-2 px-1">
        {id === BLOCKED && <Lock className="h-3.5 w-3.5 text-red-500" />}
        <h3 className="text-xs font-semibold uppercase tracking-wide text-muted">{COLUMN_LABEL[id]}</h3>
        <span className="rounded-full bg-surface-2 px-1.5 text-[11px] text-subtle">{items.length}</span>
      </div>
      <div
        ref={setNodeRef}
        className={cn(
          "flex min-h-[160px] flex-1 flex-col gap-2 rounded-xl border border-dashed p-2 transition-colors",
          isOver ? "border-accent bg-accent-soft/60" : "border-transparent bg-surface-2/50",
          id === BLOCKED && !isOver && "bg-red-50/40 dark:bg-red-950/10",
        )}
      >
        {items.map((a) => <DraggableCard key={a.id} a={a} />)}
      </div>
    </div>
  );
}

export function KanbanBoard({ activities }: { activities: Activity[] }) {
  const refresh = useRefreshAll();
  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 6 } }),
    useSensor(TouchSensor, { activationConstraint: { delay: 200, tolerance: 6 } }),
  );
  const [dragging, setDragging] = useState<Activity | null>(null);
  const [blockFor, setBlockFor] = useState<Activity | null>(null);
  const [unblock, setUnblock] = useState<{ a: Activity; target: string; blockers: Blocker[] } | null>(null);
  const [confirm, setConfirm] = useState<{ a: Activity; target: string } | null>(null);
  const [busy, setBusy] = useState(false);

  const visible = activities.filter((a) => a.status !== "CANCELLED");
  const byColumn = Object.fromEntries(COLUMNS.map((c) => [c, visible.filter((a) => columnOf(a) === c)]));

  const move = async (a: Activity, status: string, confirmed = false) => {
    if (a.status === status) return;
    setBusy(true);
    try {
      await api.activities.move(a.id, status, confirmed);
      toast.success(`${a.title} → ${STATUS_LABELS[status]}`);
      setConfirm(null);
      refresh();
    } catch (e) {
      if (e instanceof ApiError && e.requiresConfirmation) setConfirm({ a, target: status });
      else toast.error(errorMessage(e));
    } finally {
      setBusy(false);
    }
  };

  const onDragStart = (e: DragStartEvent) => setDragging(visible.find((a) => a.id === e.active.id) ?? null);

  const onDragEnd = async (e: DragEndEvent) => {
    setDragging(null);
    const a = visible.find((x) => x.id === e.active.id);
    const target = e.over?.id as string | undefined;
    if (!a || !target || target === columnOf(a)) return;
    if (target === BLOCKED) {
      setBlockFor(a);
      return;
    }
    if (a.blocked) {
      const blockers = (await api.blockers.list("OPEN")).filter((b) => b.activityId === a.id);
      setUnblock({ a, target, blockers });
      return;
    }
    await move(a, target);
  };

  return (
    <>
      <DndContext sensors={sensors} onDragStart={onDragStart} onDragEnd={onDragEnd} onDragCancel={() => setDragging(null)}>
        <div className="-mx-4 overflow-x-auto px-4 pb-4 sm:-mx-6 sm:px-6">
          <div className="flex gap-3">
            {COLUMNS.map((c) => <Column key={c} id={c} items={byColumn[c] ?? []} />)}
          </div>
        </div>
        <DragOverlay>{dragging && <div className="w-[256px] rotate-1"><ActivityCard a={dragging} dragging /></div>}</DragOverlay>
      </DndContext>

      <BlockerFormDialog open={Boolean(blockFor)} onOpenChange={(o) => !o && setBlockFor(null)} activityId={blockFor?.id} />

      <ResolveBlockerDialog
        open={Boolean(unblock)}
        onOpenChange={(o) => !o && setUnblock(null)}
        blockers={unblock?.blockers ?? []}
        onDone={() => unblock && move({ ...unblock.a, blocked: false }, unblock.target)}
      />

      <ConfirmModal
        open={Boolean(confirm)}
        onOpenChange={(o) => !o && setConfirm(null)}
        title={`¿Mover a «${confirm ? STATUS_LABELS[confirm.target] : ""}»?`}
        description={<>Es un cambio importante para <b>{confirm?.a.title}</b>. Quedará registrado en el historial.</>}
        loading={busy}
        onConfirm={() => confirm && move(confirm.a, confirm.target, true)}
      />
    </>
  );
}

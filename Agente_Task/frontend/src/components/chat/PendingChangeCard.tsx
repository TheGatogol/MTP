import { Check, ShieldQuestion, X } from "lucide-react";
import { api } from "@/lib/api";
import { BLOCKER_TYPE_LABELS, ENTITY_LABELS, fieldLabel, formatValue } from "@/lib/labels";
import { useAppMutation, usePeopleMap } from "@/lib/queries";
import type { PendingChange } from "@/lib/types";
import { cn } from "@/lib/utils";
import { Badge, Button } from "../ui";

export function PendingChangeCard({ pc, compact }: { pc: PendingChange; compact?: boolean }) {
  const people = usePeopleMap();
  const confirm = useAppMutation(() => api.pending.confirm(pc.id), { success: "Cambio confirmado y aplicado" });
  const reject = useAppMutation(() => api.pending.reject(pc.id), { success: "Cambio descartado" });
  const done = pc.status !== "PENDING";
  const blocker = pc.kind === "CREATE_BLOCKER";

  return (
    <div className={cn("rounded-lg border p-3", done ? "border-border bg-surface-2/50 opacity-75" : "border-amber-300/70 bg-amber-50/60 dark:border-amber-700/50 dark:bg-amber-950/20")}>
      <div className="flex items-start gap-2">
        <ShieldQuestion className="mt-0.5 h-4 w-4 shrink-0 text-amber-600 dark:text-amber-400" />
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-xs font-semibold text-fg">{pc.entityName ?? ENTITY_LABELS[pc.entityType]}</span>
            <Badge tone={pc.basis === "INFERENCE" ? "violet" : "blue"}>{pc.basis === "INFERENCE" ? "Inferencia" : "Hecho"}</Badge>
            {done && <Badge tone={pc.status === "APPLIED" ? "green" : "gray"}>{pc.status === "APPLIED" ? "Aplicado" : "Descartado"}</Badge>}
          </div>
          <p className="mt-1 text-sm text-fg">
            {blocker ? (
              <>Registrar bloqueo <b>{BLOCKER_TYPE_LABELS[String(pc.payload.type)] ?? String(pc.payload.type)}</b>: {String(pc.payload.description ?? "")}</>
            ) : (
              <>
                <span className="text-muted">{fieldLabel(pc.field ?? "")}:</span>{" "}
                <span className="line-through decoration-subtle/60 text-muted">{formatValue(pc.field ?? "", pc.oldValue, people)}</span>
                {" → "}
                <b>{formatValue(pc.field ?? "", pc.newValue, people)}</b>
              </>
            )}
          </p>
          {!compact && pc.reason && <p className="mt-1 text-xs text-muted">{pc.reason}</p>}
          {!compact && pc.evidence && <p className="mt-0.5 text-xs italic text-subtle">«{pc.evidence}»</p>}
          {!done && (
            <div className="mt-2 flex gap-2">
              <Button size="sm" onClick={() => confirm.mutate(undefined)} loading={confirm.isPending}><Check className="h-3.5 w-3.5" /> Confirmar</Button>
              <Button size="sm" variant="outline" onClick={() => reject.mutate(undefined)} loading={reject.isPending}><X className="h-3.5 w-3.5" /> Descartar</Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

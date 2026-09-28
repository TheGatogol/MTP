import { Check, Plus, Trash2 } from "lucide-react";
import { useState } from "react";
import { api } from "@/lib/api";
import { useAppMutation, usePeopleMap } from "@/lib/queries";
import type { Action } from "@/lib/types";
import { cn, fmtDate } from "@/lib/utils";
import { CreatedByIcon } from "./badges";
import { Button, EmptyState, Input, Progress } from "./ui";

export function ActionList({ activityId, actions }: { activityId: string; actions: Action[] }) {
  const people = usePeopleMap();
  const [title, setTitle] = useState("");
  const add = useAppMutation((t: string) => api.actions.create({ activityId, title: t }), { onSuccess: () => setTitle("") });
  const toggle = useAppMutation((a: Action) => api.actions.update(a.id, { status: a.status === "DONE" ? "PENDING" : "DONE" }));
  const remove = useAppMutation((a: Action) => api.actions.remove(a.id), { success: "Acción eliminada" });

  const visible = actions.filter((a) => a.status !== "CANCELLED");
  const done = visible.filter((a) => a.status === "DONE").length;

  return (
    <div>
      {visible.length > 0 && (
        <div className="mb-4 flex items-center gap-3">
          <Progress value={(done / visible.length) * 100} tone={done === visible.length ? "green" : "accent"} />
          <span className="shrink-0 text-xs text-muted">{done}/{visible.length}</span>
        </div>
      )}
      {visible.length === 0 ? (
        <EmptyState title="Sin acciones" description="Agrega pasos concretos o deja que el agente los genere." />
      ) : (
        <ul className="space-y-1">
          {visible.map((a) => (
            <li key={a.id} className="group flex items-start gap-3 rounded-lg px-2 py-2 hover:bg-surface-2">
              <button
                onClick={() => toggle.mutate(a)}
                className={cn(
                  "mt-0.5 flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-md border transition-colors",
                  a.status === "DONE" ? "border-emerald-500 bg-emerald-500 text-white" : "border-border hover:border-accent",
                )}
                aria-label={a.status === "DONE" ? "Marcar pendiente" : "Marcar hecha"}
              >
                {a.status === "DONE" && <Check className="h-3 w-3" />}
              </button>
              <div className="min-w-0 flex-1">
                <p className={cn("text-sm", a.status === "DONE" ? "text-subtle line-through" : "text-fg")}>{a.title}</p>
                <div className="mt-0.5 flex flex-wrap items-center gap-2 text-[11px] text-subtle">
                  <CreatedByIcon by={a.createdBy} />
                  {a.ownerId && <span>{people[a.ownerId] ?? a.ownerId}</span>}
                  {a.dueDate && <span>Vence {fmtDate(a.dueDate)}</span>}
                  {a.completedAt && <span>Hecha {fmtDate(a.completedAt)}</span>}
                </div>
              </div>
              <button onClick={() => remove.mutate(a)} className="rounded p-1 text-subtle opacity-0 hover:text-red-600 group-hover:opacity-100" aria-label="Eliminar">
                <Trash2 className="h-3.5 w-3.5" />
              </button>
            </li>
          ))}
        </ul>
      )}
      <form className="mt-3 flex gap-2" onSubmit={(e) => { e.preventDefault(); if (title.trim()) add.mutate(title.trim()); }}>
        <Input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Nueva acción…" />
        <Button type="submit" variant="outline" loading={add.isPending} disabled={!title.trim()}><Plus className="h-4 w-4" /> Agregar</Button>
      </form>
    </div>
  );
}

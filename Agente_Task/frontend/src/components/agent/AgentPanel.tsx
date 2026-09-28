import * as DialogPrimitive from "@radix-ui/react-dialog";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Bot, Maximize2, SquarePen, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "@/lib/api";
import type { ChatContext } from "@/lib/types";
import { cn } from "@/lib/utils";
import { ChatView, type Draft } from "../chat/ChatView";
import { useAgentUI } from "./AgentUI";

/** Chat bound to one entity: reuses the entity's persistent session. */
export function ContextChat({ context, draft, onDraftConsumed, onNavigate, className }: {
  context: ChatContext; draft?: Draft | null; onDraftConsumed?: () => void; onNavigate?: () => void; className?: string;
}) {
  const qc = useQueryClient();
  const key = { contextType: context.entityType, contextId: context.entityId };
  const { data: sessions, isLoading } = useQuery({
    queryKey: ["sessions", key],
    queryFn: () => api.agent.sessions(key),
  });
  if (isLoading) return <div className="flex-1" />;
  return (
    <ChatView
      className={className}
      sessionId={sessions?.[0]?.id ?? null}
      onSessionChange={() => qc.invalidateQueries({ queryKey: ["sessions", key] })}
      context={context}
      draft={draft}
      onDraftConsumed={onDraftConsumed}
      onNavigate={onNavigate}
    />
  );
}

export function AgentPanel() {
  const { open, setOpen, pageContext, draft, setDraft, generalSessionId, setGeneralSessionId } = useAgentUI();
  const [mode, setMode] = useState<"context" | "general">("context");
  useEffect(() => {
    if (pageContext) setMode("context");
  }, [pageContext]);
  const contextual = Boolean(pageContext) && mode === "context";

  return (
    <DialogPrimitive.Root open={open} onOpenChange={setOpen} modal={false}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Content
          onInteractOutside={(e) => e.preventDefault()}
          className="fixed inset-y-0 right-0 z-40 flex w-full flex-col border-l border-border bg-bg shadow-2xl sm:w-[440px] focus:outline-none"
        >
          <div className="flex items-center justify-between gap-2 border-b border-border bg-surface px-4 py-3">
            <div className="flex min-w-0 items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-soft text-accent"><Bot className="h-4 w-4" /></div>
              <div className="min-w-0">
                <DialogPrimitive.Title className="text-sm font-semibold text-fg">Agente</DialogPrimitive.Title>
                <DialogPrimitive.Description className="truncate text-[11px] text-muted">
                  {contextual ? `Contexto: ${pageContext!.label ?? pageContext!.entityId}` : "Conversación general"}
                </DialogPrimitive.Description>
              </div>
            </div>
            <div className="flex items-center gap-1">
              {!contextual && (
                <button title="Nueva conversación" onClick={() => setGeneralSessionId(null)} className="rounded-md p-1.5 text-subtle hover:bg-surface-2 hover:text-fg">
                  <SquarePen className="h-4 w-4" />
                </button>
              )}
              <Link to="/agent" title="Abrir en pantalla completa" onClick={() => setOpen(false)} className="rounded-md p-1.5 text-subtle hover:bg-surface-2 hover:text-fg">
                <Maximize2 className="h-4 w-4" />
              </Link>
              <DialogPrimitive.Close className="rounded-md p-1.5 text-subtle hover:bg-surface-2 hover:text-fg" aria-label="Cerrar">
                <X className="h-4 w-4" />
              </DialogPrimitive.Close>
            </div>
          </div>
          {pageContext && (
            <div className="flex gap-1 border-b border-border bg-surface px-3 py-2">
              {(["context", "general"] as const).map((m) => (
                <button key={m} onClick={() => setMode(m)}
                  className={cn("rounded-md px-2.5 py-1 text-xs font-medium", mode === m ? "bg-accent-soft text-accent" : "text-muted hover:bg-surface-2")}>
                  {m === "context" ? pageContext.label ?? "Esta página" : "General"}
                </button>
              ))}
            </div>
          )}
          {contextual ? (
            <ContextChat key={pageContext!.entityId} context={pageContext!} draft={draft} onDraftConsumed={() => setDraft(null)} className="flex-1" />
          ) : (
            <ChatView className="flex-1" sessionId={generalSessionId} onSessionChange={setGeneralSessionId}
              draft={draft} onDraftConsumed={() => setDraft(null)} />
          )}
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}

import { useQuery, useQueryClient } from "@tanstack/react-query";
import { MessageSquare, SquarePen, Trash2 } from "lucide-react";
import { useAgentUI } from "@/components/agent/AgentUI";
import { ChatView } from "@/components/chat/ChatView";
import { Button, Card, PageHeader } from "@/components/ui";
import { api } from "@/lib/api";
import { useAppMutation } from "@/lib/queries";
import { cn, relativeTime } from "@/lib/utils";

export function AgentPage() {
  const qc = useQueryClient();
  const { generalSessionId, setGeneralSessionId, draft, setDraft } = useAgentUI();
  const { data: sessions = [] } = useQuery({ queryKey: ["sessions", "general"], queryFn: () => api.agent.sessions() });
  const remove = useAppMutation((id: string) => api.agent.deleteSession(id), {
    success: "Conversación eliminada",
    onSuccess: (_r, id) => { if (id === generalSessionId) setGeneralSessionId(null); },
  });

  return (
    <div className="flex h-[calc(100vh-8.5rem)] flex-col">
      <PageHeader title="Agente IA" subtitle="Háblale en lenguaje natural: actualiza el tablero, registra historial y te pregunta lo que falta."
        actions={<Button variant="outline" onClick={() => setGeneralSessionId(null)}><SquarePen className="h-4 w-4" /> Nueva conversación</Button>} />
      <div className="flex min-h-0 flex-1 gap-4">
        <Card className="hidden w-64 shrink-0 flex-col overflow-hidden md:flex">
          <p className="border-b border-border px-4 py-3 text-xs font-semibold uppercase tracking-wide text-subtle">Conversaciones</p>
          <ul className="flex-1 space-y-0.5 overflow-y-auto p-2">
            {sessions.length === 0 && <li className="px-2 py-4 text-center text-xs text-subtle">Aún no hay conversaciones</li>}
            {sessions.map((s) => (
              <li key={s.id} className="group relative">
                <button
                  onClick={() => setGeneralSessionId(s.id)}
                  className={cn("flex w-full items-start gap-2 rounded-lg px-2.5 py-2 text-left", s.id === generalSessionId ? "bg-accent-soft" : "hover:bg-surface-2")}
                >
                  <MessageSquare className={cn("mt-0.5 h-3.5 w-3.5 shrink-0", s.id === generalSessionId ? "text-accent" : "text-subtle")} />
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-[13px] text-fg">{s.title}</span>
                    <span className="text-[11px] text-subtle">{relativeTime(s.updatedAt)}</span>
                  </span>
                </button>
                <button onClick={() => remove.mutate(s.id)} className="absolute right-1.5 top-2 rounded p-1 text-subtle opacity-0 hover:text-red-600 group-hover:opacity-100" aria-label="Eliminar conversación">
                  <Trash2 className="h-3.5 w-3.5" />
                </button>
              </li>
            ))}
          </ul>
        </Card>
        <Card className="flex min-w-0 flex-1 flex-col overflow-hidden">
          <ChatView
            className="flex-1"
            sessionId={generalSessionId}
            onSessionChange={(id) => { setGeneralSessionId(id); qc.invalidateQueries({ queryKey: ["sessions", "general"] }); }}
            draft={draft}
            onDraftConsumed={() => setDraft(null)}
          />
        </Card>
      </div>
    </div>
  );
}

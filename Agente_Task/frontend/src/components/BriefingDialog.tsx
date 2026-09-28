import { useQuery } from "@tanstack/react-query";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { api } from "@/lib/api";
import { SeverityDot } from "./badges";
import { entityUrl } from "./chat/AgentMessage";
import { Button, EmptyState, Modal, Spinner } from "./ui";

export function BriefingDialog({ open, onOpenChange }: { open: boolean; onOpenChange: (o: boolean) => void }) {
  const { data, isLoading, refetch, isFetching } = useQuery({
    queryKey: ["briefing"],
    queryFn: api.briefing,
    enabled: open,
    staleTime: 60_000,
  });

  return (
    <Modal
      open={open}
      onOpenChange={onOpenChange}
      size="lg"
      title={data ? `${data.greeting}.` : "¿Qué tengo que revisar hoy?"}
      description={data ? `Briefing del ${data.date}. Generado con reglas determinísticas${data.focus ? " + IA local" : ""}.` : undefined}
      footer={<Button variant="outline" onClick={() => refetch()} loading={isFetching}>Actualizar</Button>}
    >
      {isLoading ? (
        <div className="flex flex-col items-center gap-2 py-10 text-sm text-muted"><Spinner /> Analizando el tablero…</div>
      ) : !data || data.items.length === 0 ? (
        <EmptyState title="Nada crítico hoy" description="No detecto bloqueos, riesgos ni seguimientos vencidos." />
      ) : (
        <div className="space-y-4">
          <p className="text-sm text-muted">Hoy recomiendo revisar <b className="text-fg">{data.items.length} punto(s)</b>:</p>
          <ol className="space-y-2.5">
            {data.items.map((i, n) => {
              const url = entityUrl({ type: i.entityType, id: i.entityId });
              return (
                <li key={i.key} className="rounded-xl border border-border p-3">
                  <div className="flex items-start gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-surface-2 text-xs font-semibold text-muted">{n + 1}</span>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <SeverityDot severity={i.severity} />
                        <p className="text-sm font-semibold text-fg">{i.name}</p>
                      </div>
                      <p className="mt-1 text-sm text-muted">{i.situation}</p>
                      {i.extra.length > 0 && <p className="mt-0.5 text-xs text-subtle">También: {i.extra.join(" · ")}</p>}
                      <p className="mt-1.5 text-sm text-fg"><span className="font-medium text-accent">Acción:</span> {i.action}</p>
                    </div>
                    {url && (
                      <Link to={url} onClick={() => onOpenChange(false)} className="rounded-md p-1 text-subtle hover:bg-surface-2 hover:text-accent" title="Abrir">
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    )}
                  </div>
                </li>
              );
            })}
          </ol>
          {data.focus && (
            <div className="rounded-xl bg-accent-soft p-3">
              <p className="mb-1 flex items-center gap-1.5 text-xs font-semibold text-accent"><Sparkles className="h-3.5 w-3.5" /> Enfoque del día</p>
              <p className="text-sm text-fg">{data.focus}</p>
            </div>
          )}
        </div>
      )}
    </Modal>
  );
}

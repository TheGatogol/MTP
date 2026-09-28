import { useQuery } from "@tanstack/react-query";
import { Lock, Plus } from "lucide-react";
import { useState } from "react";
import { BlockerList } from "@/components/BlockerList";
import { BlockerFormDialog } from "@/components/forms";
import { Button, Card, Chip, EmptyState, ErrorState, PageHeader, PageLoader } from "@/components/ui";
import { api } from "@/lib/api";
import { BLOCKER_TYPE_LABELS } from "@/lib/labels";

export function BlockersPage() {
  const [status, setStatus] = useState<"OPEN" | "RESOLVED">("OPEN");
  const [type, setType] = useState<string | null>(null);
  const [newOpen, setNewOpen] = useState(false);
  const { data = [], isLoading, error, refetch } = useQuery({ queryKey: ["blockers"], queryFn: () => api.blockers.list() });
  const byStatus = data.filter((b) => b.status === status);
  const types = [...new Set(byStatus.map((b) => b.type))];
  const list = byStatus.filter((b) => !type || b.type === type);

  return (
    <div>
      <PageHeader title="Bloqueos" subtitle="Un bloqueo no cambia el estado de la actividad. Da seguimiento y escala cuando pase el umbral."
        actions={<Button onClick={() => setNewOpen(true)}><Plus className="h-4 w-4" /> Registrar bloqueo</Button>} />
      <div className="mb-4 flex flex-wrap gap-2">
        <Chip active={status === "OPEN"} count={data.filter((b) => b.status === "OPEN").length} onClick={() => { setStatus("OPEN"); setType(null); }}>Abiertos</Chip>
        <Chip active={status === "RESOLVED"} count={data.filter((b) => b.status === "RESOLVED").length} onClick={() => { setStatus("RESOLVED"); setType(null); }}>Resueltos</Chip>
        {types.length > 1 && <span className="mx-1 w-px bg-border" />}
        {types.length > 1 && types.map((t) => (
          <Chip key={t} active={type === t} onClick={() => setType(type === t ? null : t)}>{BLOCKER_TYPE_LABELS[t] ?? t}</Chip>
        ))}
      </div>
      {isLoading ? <PageLoader /> : error ? <ErrorState error={error} onRetry={refetch} /> : list.length === 0 ? (
        <Card><EmptyState icon={<Lock className="h-6 w-6" />} title={status === "OPEN" ? "Sin bloqueos abiertos" : "Sin bloqueos resueltos"} /></Card>
      ) : (
        <BlockerList blockers={list} showActivity />
      )}
      <BlockerFormDialog open={newOpen} onOpenChange={setNewOpen} />
    </div>
  );
}

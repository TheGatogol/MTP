import { useQuery } from "@tanstack/react-query";
import { Search } from "lucide-react";
import { useState } from "react";
import { HistoryList } from "@/components/HistoryTimeline";
import { Card, Chip, ErrorState, Input, PageHeader, PageLoader } from "@/components/ui";
import { api } from "@/lib/api";
import { ENTITY_LABELS, SOURCE_LABELS } from "@/lib/labels";

const RANGES = [
  { label: "Hoy", days: 0 },
  { label: "7 días", days: 7 },
  { label: "30 días", days: 30 },
  { label: "Todo", days: undefined },
];

export function HistoryPage() {
  const [days, setDays] = useState<number | undefined>(7);
  const [type, setType] = useState<string | null>(null);
  const [source, setSource] = useState<string | null>(null);
  const [q, setQ] = useState("");
  const { data = [], isLoading, error, refetch } = useQuery({
    queryKey: ["history", days],
    queryFn: () => api.history({ days, limit: 500 }),
  });
  const norm = (s: string) => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
  const list = data.filter((h) =>
    (!type || h.entityType === type) &&
    (!source || h.source === source) &&
    (!q || norm(`${h.entityName} ${h.field} ${String(h.newValue)} ${String(h.oldValue)} ${h.comment ?? ""}`).includes(norm(q))),
  );

  return (
    <div>
      <PageHeader title="Historial" subtitle="Nunca se pierde el estado anterior: cada cambio queda registrado con su origen." />
      <div className="mb-4 space-y-3">
        <div className="flex flex-wrap items-center gap-2">
          {RANGES.map((r) => <Chip key={r.label} active={days === r.days} onClick={() => setDays(r.days)}>{r.label}</Chip>)}
          <div className="relative ml-auto w-full sm:w-64">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-subtle" />
            <Input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Filtrar (ej. Upgrade, Build)…" className="pl-9" />
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          {["activity", "pull_request", "blocker", "action", "project", "initiative", "person"].map((t) => (
            <Chip key={t} active={type === t} onClick={() => setType(type === t ? null : t)}>{ENTITY_LABELS[t]}</Chip>
          ))}
          <span className="mx-1 w-px bg-border" />
          {["AGENT", "UI", "KANBAN", "SEED"].map((s) => (
            <Chip key={s} active={source === s} onClick={() => setSource(source === s ? null : s)}>{SOURCE_LABELS[s]}</Chip>
          ))}
        </div>
      </div>
      {isLoading ? <PageLoader /> : error ? <ErrorState error={error} onRetry={refetch} /> : (
        <Card className="p-5"><HistoryList entries={list} /></Card>
      )}
    </div>
  );
}

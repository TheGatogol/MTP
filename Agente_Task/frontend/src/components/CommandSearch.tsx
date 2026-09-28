import * as DialogPrimitive from "@radix-ui/react-dialog";
import { useQuery } from "@tanstack/react-query";
import { Command } from "cmdk";
import {
  Bot, FolderKanban, GitPullRequest, History, LayoutDashboard, Lightbulb, ListTodo, Lock, Search, Settings, User,
} from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "@/lib/api";
import { ENTITY_LABELS } from "@/lib/labels";
import { Kbd, Spinner } from "./ui";

const ICONS: Record<string, ReactNode> = {
  activity: <ListTodo className="h-4 w-4" />,
  pull_request: <GitPullRequest className="h-4 w-4" />,
  person: <User className="h-4 w-4" />,
  project: <FolderKanban className="h-4 w-4" />,
  initiative: <Lightbulb className="h-4 w-4" />,
  blocker: <Lock className="h-4 w-4" />,
};

const PAGES = [
  { label: "Dashboard", url: "/", icon: <LayoutDashboard className="h-4 w-4" /> },
  { label: "Actividades", url: "/activities", icon: <ListTodo className="h-4 w-4" /> },
  { label: "Kanban", url: "/activities?view=kanban", icon: <ListTodo className="h-4 w-4" /> },
  { label: "Pull Requests", url: "/prs", icon: <GitPullRequest className="h-4 w-4" /> },
  { label: "Bloqueos", url: "/blockers", icon: <Lock className="h-4 w-4" /> },
  { label: "Historial", url: "/history", icon: <History className="h-4 w-4" /> },
  { label: "Agente IA", url: "/agent", icon: <Bot className="h-4 w-4" /> },
  { label: "Configuración", url: "/settings", icon: <Settings className="h-4 w-4" /> },
];

function useDebounced(value: string, ms = 180) {
  const [v, setV] = useState(value);
  useEffect(() => {
    const t = setTimeout(() => setV(value), ms);
    return () => clearTimeout(t);
  }, [value, ms]);
  return v;
}

export function CommandSearch({ open, onOpenChange }: { open: boolean; onOpenChange: (o: boolean) => void }) {
  const navigate = useNavigate();
  const [q, setQ] = useState("");
  const dq = useDebounced(q);
  const { data = [], isFetching } = useQuery({
    queryKey: ["search", dq],
    queryFn: () => api.search(dq),
    enabled: dq.trim().length > 0,
  });
  const [selected, setSelected] = useState("");
  useEffect(() => { if (!open) setQ(""); }, [open]);
  // Results arrive asynchronously: keep the first one selected so Enter always navigates.
  useEffect(() => {
    const first = data[0];
    setSelected(dq.trim() ? (first ? `${first.type}-${first.id}` : "") : PAGES[0]!.url);
  }, [data, dq]);

  const go = (url: string) => {
    onOpenChange(false);
    navigate(url);
  };

  return (
    <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-black/40 backdrop-blur-[2px]" />
        <DialogPrimitive.Content className="fixed left-1/2 top-[12vh] z-50 w-[calc(100vw-1.5rem)] max-w-xl -translate-x-1/2 overflow-hidden rounded-2xl border border-border bg-surface shadow-2xl focus:outline-none">
          <DialogPrimitive.Title className="sr-only">Búsqueda global</DialogPrimitive.Title>
          <DialogPrimitive.Description className="sr-only">Busca actividades, PR, personas, proyectos e iniciativas</DialogPrimitive.Description>
          <Command shouldFilter={false} loop value={selected} onValueChange={setSelected}>
            <div className="flex items-center gap-2 border-b border-border px-4">
              <Search className="h-4 w-4 text-subtle" />
              <Command.Input
                autoFocus
                value={q}
                onValueChange={setQ}
                placeholder="Busca DIFO, 9792, Yair, Xray, Q3…"
                className="h-12 flex-1 bg-transparent text-sm text-fg placeholder:text-subtle focus:outline-none"
              />
              {isFetching && <Spinner className="h-4 w-4" />}
              <Kbd>Esc</Kbd>
            </div>
            <Command.List className="max-h-[60vh] overflow-y-auto p-2">
              {dq.trim() && !isFetching && data.length === 0 && (
                <Command.Empty className="py-8 text-center text-sm text-muted">Sin resultados para «{dq}»</Command.Empty>
              )}
              {data.length > 0 && (
                <Command.Group heading="Resultados" className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-[11px] [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-subtle">
                  {data.map((r) => (
                    <Command.Item key={`${r.type}-${r.id}`} value={`${r.type}-${r.id}`} onSelect={() => go(r.url)}
                      className="flex cursor-pointer items-center gap-3 rounded-lg px-2.5 py-2 text-sm aria-selected:bg-accent-soft">
                      <span className="text-subtle">{ICONS[r.type]}</span>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-fg">{r.title}</p>
                        {r.subtitle && <p className="truncate text-xs text-muted">{r.subtitle}</p>}
                      </div>
                      <span className="text-[11px] text-subtle">{ENTITY_LABELS[r.type] ?? r.type}</span>
                    </Command.Item>
                  ))}
                </Command.Group>
              )}
              {!dq.trim() && (
                <Command.Group heading="Ir a" className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-[11px] [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-subtle">
                  {PAGES.map((p) => (
                    <Command.Item key={p.url} value={p.url} onSelect={() => go(p.url)}
                      className="flex cursor-pointer items-center gap-3 rounded-lg px-2.5 py-2 text-sm text-fg aria-selected:bg-accent-soft">
                      <span className="text-subtle">{p.icon}</span> {p.label}
                    </Command.Item>
                  ))}
                </Command.Group>
              )}
            </Command.List>
          </Command>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}

import {
  Bot, FolderKanban, GitPullRequest, History, LayoutDashboard, Lightbulb, ListTodo, Lock, Menu, Moon, Search,
  Settings, Sparkles, Sun, Users, X,
} from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { useHealth, usePending } from "@/lib/queries";
import { cn } from "@/lib/utils";
import { AgentPanel } from "../agent/AgentPanel";
import { useAgentUI } from "../agent/AgentUI";
import { BriefingDialog } from "../BriefingDialog";
import { CommandSearch } from "../CommandSearch";
import { Button, Kbd } from "../ui";

const NAV: { to: string; label: string; icon: ReactNode; end?: boolean }[] = [
  { to: "/", label: "Dashboard", icon: <LayoutDashboard className="h-4 w-4" />, end: true },
  { to: "/activities", label: "Actividades", icon: <ListTodo className="h-4 w-4" /> },
  { to: "/prs", label: "PR", icon: <GitPullRequest className="h-4 w-4" /> },
  { to: "/projects", label: "Proyectos / DEP", icon: <FolderKanban className="h-4 w-4" /> },
  { to: "/people", label: "Personas", icon: <Users className="h-4 w-4" /> },
  { to: "/blockers", label: "Bloqueos", icon: <Lock className="h-4 w-4" /> },
  { to: "/initiatives", label: "Iniciativas", icon: <Lightbulb className="h-4 w-4" /> },
  { to: "/history", label: "Historial", icon: <History className="h-4 w-4" /> },
  { to: "/agent", label: "Agente IA", icon: <Bot className="h-4 w-4" /> },
  { to: "/settings", label: "Configuración", icon: <Settings className="h-4 w-4" /> },
];

function AIStatus() {
  const { data, isError } = useHealth();
  const ok = data?.ai.available;
  const label = isError ? "Backend sin conexión" : !data ? "Verificando…" : ok ? (data.ai.model_loaded ? "IA lista" : "IA disponible") : "IA no disponible";
  const title = isError ? "No se pudo contactar al backend" : data ? `${data.ai.model ?? ""}${data.ai.error ? " · " + data.ai.error : ""}` : "";
  return (
    <NavLink to="/settings" title={title} className="hidden items-center gap-1.5 rounded-full border border-border px-2.5 py-1 text-[11px] font-medium text-muted hover:bg-surface-2 md:inline-flex">
      <span className={cn("h-1.5 w-1.5 rounded-full", isError ? "bg-red-500" : ok ? "bg-emerald-500" : data ? "bg-amber-400" : "bg-slate-400")} />
      {label}
    </NavLink>
  );
}

function ThemeToggle() {
  const [dark, setDark] = useState(() => document.documentElement.classList.contains("dark"));
  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    try { localStorage.setItem("theme", next ? "dark" : "light"); } catch { /* ignore */ }
  };
  return (
    <button onClick={toggle} className="rounded-lg p-2 text-subtle hover:bg-surface-2 hover:text-fg" aria-label="Cambiar tema">
      {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
}

function SidebarContent({ onNavigate }: { onNavigate?: () => void }) {
  const { data: pending = [] } = usePending();
  const pendingCount = pending.filter((p) => p.status === "PENDING").length;
  return (
    <>
      <div className="flex items-center gap-2.5 px-4 py-5">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent text-accent-fg"><Sparkles className="h-4 w-4" /></div>
        <div>
          <p className="text-sm font-semibold leading-4 text-fg">QA Task Agent</p>
          <p className="text-[11px] text-subtle">El agente administra el tablero</p>
        </div>
      </div>
      <nav className="flex-1 space-y-0.5 px-2">
        {NAV.map((n) => (
          <NavLink
            key={n.to}
            to={n.to}
            end={n.end}
            onClick={onNavigate}
            className={({ isActive }) => cn(
              "flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
              isActive ? "bg-accent-soft text-accent" : "text-muted hover:bg-surface-2 hover:text-fg",
            )}
          >
            {n.icon}
            <span className="flex-1">{n.label}</span>
            {n.to === "/" && pendingCount > 0 && (
              <span className="rounded-full bg-amber-100 px-1.5 text-[10px] font-semibold text-amber-800 dark:bg-amber-900/60 dark:text-amber-200" title="Confirmaciones pendientes">{pendingCount}</span>
            )}
          </NavLink>
        ))}
      </nav>
      <p className="px-4 py-4 text-[11px] text-subtle">IA 100% local · Ollama</p>
    </>
  );
}

export function AppShell() {
  const { open: agentOpen, setOpen: setAgentOpen, briefingOpen, setBriefingOpen } = useAgentUI();
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setSearchOpen((o) => !o);
      }
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "j") {
        e.preventDefault();
        setAgentOpen(!agentOpen);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [agentOpen, setAgentOpen]);

  useEffect(() => setMobileNav(false), [location.pathname]);

  return (
    <div className="flex h-full">
      <aside className="hidden w-60 shrink-0 flex-col border-r border-border bg-surface lg:flex">
        <SidebarContent />
      </aside>

      {mobileNav && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/40" onClick={() => setMobileNav(false)} />
          <aside className="absolute inset-y-0 left-0 flex w-64 flex-col bg-surface shadow-xl">
            <button className="absolute right-3 top-5 rounded-md p-1 text-subtle" onClick={() => setMobileNav(false)} aria-label="Cerrar menú"><X className="h-4 w-4" /></button>
            <SidebarContent onNavigate={() => setMobileNav(false)} />
          </aside>
        </div>
      )}

      <div className={cn("flex min-w-0 flex-1 flex-col transition-[margin]", agentOpen && "sm:mr-[440px]")}>
        <header className="sticky top-0 z-30 flex h-14 items-center gap-2 border-b border-border bg-surface/85 px-3 backdrop-blur sm:px-5">
          <button className="rounded-lg p-2 text-muted hover:bg-surface-2 lg:hidden" onClick={() => setMobileNav(true)} aria-label="Menú">
            <Menu className="h-5 w-5" />
          </button>
          <button
            onClick={() => setSearchOpen(true)}
            className="flex h-9 min-w-0 flex-1 items-center gap-2 rounded-lg border border-border bg-surface-2/60 px-3 text-sm text-subtle hover:border-accent/40 sm:max-w-md"
          >
            <Search className="h-4 w-4 shrink-0" />
            <span className="truncate">Buscar actividades, PR, personas…</span>
            <span className="ml-auto hidden sm:inline"><Kbd>Ctrl K</Kbd></span>
          </button>
          <div className="ml-auto flex items-center gap-1.5">
            <AIStatus />
            <Button variant="soft" size="md" onClick={() => setBriefingOpen(true)} className="hidden sm:inline-flex">
              <Sparkles className="h-4 w-4" /> ¿Qué reviso hoy?
            </Button>
            <Button variant="soft" size="icon" onClick={() => setBriefingOpen(true)} className="sm:hidden" aria-label="¿Qué reviso hoy?">
              <Sparkles className="h-4 w-4" />
            </Button>
            <ThemeToggle />
            <Button variant={agentOpen ? "secondary" : "primary"} size="md" onClick={() => setAgentOpen(!agentOpen)} title="Agente (Ctrl J)">
              <Bot className="h-4 w-4" /> <span className="hidden sm:inline">Agente</span>
            </Button>
          </div>
        </header>
        <main className="min-w-0 flex-1 overflow-y-auto">
          <div className="mx-auto w-full max-w-7xl px-4 py-5 sm:px-6 sm:py-7">
            <Outlet />
          </div>
        </main>
      </div>

      <AgentPanel />
      <CommandSearch open={searchOpen} onOpenChange={setSearchOpen} />
      <BriefingDialog open={briefingOpen} onOpenChange={setBriefingOpen} />
    </div>
  );
}

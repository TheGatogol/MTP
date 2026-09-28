import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import type { ChatContext } from "@/lib/types";
import type { Draft } from "../chat/ChatView";

interface AgentUIState {
  open: boolean;
  setOpen: (o: boolean) => void;
  pageContext: ChatContext | null;
  setPageContext: (c: ChatContext | null) => void;
  draft: Draft | null;
  setDraft: (d: Draft | null) => void;
  /** Opens the side panel with a message prefilled (or auto-sent). */
  ask: (d: Draft) => void;
  generalSessionId: string | null;
  setGeneralSessionId: (id: string | null) => void;
  briefingOpen: boolean;
  setBriefingOpen: (o: boolean) => void;
}

const Ctx = createContext<AgentUIState | null>(null);

function readSession(): string | null {
  try {
    return localStorage.getItem("generalSessionId");
  } catch {
    return null;
  }
}

export function AgentUIProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [pageContext, setPageContext] = useState<ChatContext | null>(null);
  const [draft, setDraft] = useState<Draft | null>(null);
  const [briefingOpen, setBriefingOpen] = useState(false);
  const [generalSessionId, setGeneralSessionIdState] = useState<string | null>(readSession);

  const setGeneralSessionId = (id: string | null) => {
    setGeneralSessionIdState(id);
    try {
      if (id) localStorage.setItem("generalSessionId", id);
      else localStorage.removeItem("generalSessionId");
    } catch {
      /* storage unavailable: keep it in memory only */
    }
  };

  const value = useMemo<AgentUIState>(() => ({
    open, setOpen, pageContext, setPageContext, draft, setDraft,
    ask: (d) => { setDraft(d); setOpen(true); },
    generalSessionId, setGeneralSessionId, briefingOpen, setBriefingOpen,
  }), [open, pageContext, draft, generalSessionId, briefingOpen]);

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useAgentUI(): AgentUIState {
  const c = useContext(Ctx);
  if (!c) throw new Error("useAgentUI must be used inside AgentUIProvider");
  return c;
}

/** Declares which entity the current page shows, so the agent panel becomes contextual. */
export function usePageContext(ctx: ChatContext | null) {
  const { setPageContext } = useAgentUI();
  const key = ctx ? `${ctx.entityType}:${ctx.entityId}:${ctx.label ?? ""}` : "";
  useEffect(() => {
    setPageContext(ctx);
    return () => setPageContext(null);
  }, [key]);
}

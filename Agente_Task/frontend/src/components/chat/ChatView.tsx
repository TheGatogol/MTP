import { useQuery, useQueryClient } from "@tanstack/react-query";
import { ArrowUp, Bot, Sparkles } from "lucide-react";
import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import { toast } from "sonner";
import { api } from "@/lib/api";
import { errorMessage, useHealth } from "@/lib/queries";
import type { AgentReply, ChatContext, ChatMessage } from "@/lib/types";
import { cn } from "@/lib/utils";
import { Spinner } from "../ui";
import { AgentMessage } from "./AgentMessage";

export interface Draft {
  text: string;
  questionId?: string | null;
  questionText?: string;
  autoSend?: boolean;
}

const GENERAL_SUGGESTIONS = [
  "¿Qué tengo que revisar hoy?",
  "¿Quién está saturado?",
  "¿Qué PR están listas para merge?",
  "Upgrade ya pasó todos los tests y José Luis dice que ya quedó.",
];
const CONTEXT_SUGGESTIONS = ["¿Qué falta?", "¿Qué pasó esta semana?", "¿Cuál es el siguiente paso?", "Resume el estado"];

export function ChatView({
  sessionId, onSessionChange, context, draft, onDraftConsumed, onNavigate, className,
}: {
  sessionId: string | null;
  onSessionChange?: (id: string) => void;
  context?: ChatContext | null;
  draft?: Draft | null;
  onDraftConsumed?: () => void;
  onNavigate?: () => void;
  className?: string;
}) {
  const qc = useQueryClient();
  const { data: health } = useHealth();
  const [text, setText] = useState("");
  const [questionId, setQuestionId] = useState<string | null>(null);
  const [questionText, setQuestionText] = useState<string | null>(null);
  const [sending, setSending] = useState<string | null>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const messagesQuery = useQuery({
    queryKey: ["chat", sessionId],
    queryFn: () => api.agent.messages(sessionId!),
    enabled: Boolean(sessionId),
  });
  const messages: ChatMessage[] = sessionId ? messagesQuery.data ?? [] : [];

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages.length, sending]);

  const send = async (message: string, qid: string | null = questionId) => {
    const m = message.trim();
    if (!m || sending) return;
    setSending(m);
    setText("");
    setQuestionId(null);
    try {
      const reply: AgentReply = await api.agent.chat({ message: m, sessionId, context: context ?? null, questionId: qid });
      if (reply.sessionId !== sessionId) onSessionChange?.(reply.sessionId);
      await qc.invalidateQueries();
    } catch (e) {
      toast.error(errorMessage(e));
      setText(m);
    } finally {
      setSending(null);
      inputRef.current?.focus();
    }
  };

  useEffect(() => {
    if (!draft) return;
    if (draft.autoSend) {
      void send(draft.text, draft.questionId ?? null);
    } else {
      setText(draft.text);
      setQuestionId(draft.questionId ?? null);
      setQuestionText(draft.questionText ?? null);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
    onDraftConsumed?.();
  }, [draft]);

  const onKey = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      void send(text);
    }
  };

  const suggestions = context ? CONTEXT_SUGGESTIONS : GENERAL_SUGGESTIONS;
  const aiDown = health && !health.ai.available;

  return (
    <div className={cn("flex h-full min-h-0 flex-col", className)}>
      <div className="flex-1 space-y-4 overflow-y-auto px-4 py-4">
        {messages.length === 0 && !sending && (
          messagesQuery.isLoading && sessionId ? (
            <div className="flex justify-center py-10"><Spinner /></div>
          ) : (
            <div className="flex flex-col items-center py-8 text-center">
              <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-accent-soft text-accent">
                <Sparkles className="h-5 w-5" />
              </div>
              <p className="text-sm font-medium text-fg">
                {context ? `Pregúntame sobre ${context.label ?? "esta entidad"}` : "Cuéntame qué pasó o pregúntame algo"}
              </p>
              <p className="mt-1 max-w-xs text-xs text-muted">
                Actualizo el tablero, registro el historial y te pido confirmación en los cambios importantes.
              </p>
              <div className="mt-4 flex flex-wrap justify-center gap-2">
                {suggestions.map((s) => (
                  <button key={s} onClick={() => send(s)} className="rounded-full border border-border bg-surface px-3 py-1.5 text-xs text-muted hover:border-accent hover:text-accent">
                    {s}
                  </button>
                ))}
              </div>
            </div>
          )
        )}
        {messages.map((m) =>
          m.role === "user" ? (
            <div key={m.id} className="flex justify-end">
              <div className="max-w-[85%] whitespace-pre-wrap rounded-2xl rounded-br-md bg-accent px-3.5 py-2 text-[13.5px] text-accent-fg">{m.content}</div>
            </div>
          ) : (
            <div key={m.id} className="flex gap-2.5">
              <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent"><Bot className="h-4 w-4" /></div>
              <div className="min-w-0 max-w-[92%] flex-1 rounded-2xl rounded-tl-md border border-border bg-surface px-3.5 py-2.5">
                {m.data ? <AgentMessage reply={m.data} onNavigate={onNavigate} /> : <p className="text-sm">{m.content}</p>}
              </div>
            </div>
          ),
        )}
        {sending && (
          <>
            <div className="flex justify-end">
              <div className="max-w-[85%] whitespace-pre-wrap rounded-2xl rounded-br-md bg-accent/80 px-3.5 py-2 text-[13.5px] text-accent-fg">{sending}</div>
            </div>
            <div className="flex gap-2.5">
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent"><Bot className="h-4 w-4" /></div>
              <div className="rounded-2xl rounded-tl-md border border-border bg-surface px-3.5 py-3">
                <div className="typing flex items-center gap-1 text-accent">
                  <span className="h-1.5 w-1.5 rounded-full bg-current" /><span className="h-1.5 w-1.5 rounded-full bg-current" /><span className="h-1.5 w-1.5 rounded-full bg-current" />
                  <span className="ml-2 text-xs text-muted" style={{ animation: "none" }}>Analizando el tablero…</span>
                </div>
              </div>
            </div>
          </>
        )}
        <div ref={bottomRef} />
      </div>

      <div className="border-t border-border bg-surface p-3">
        {questionId && (
          <div className="mb-2 flex items-center justify-between rounded-lg bg-sky-50 px-2.5 py-1.5 text-xs text-sky-800 dark:bg-sky-950/40 dark:text-sky-300">
            <span className="min-w-0">Respondiendo: <b>{questionText ?? "pregunta abierta del agente"}</b></span>
            <button className="ml-2 shrink-0 underline" onClick={() => setQuestionId(null)}>quitar</button>
          </div>
        )}
        {aiDown && (
          <p className="mb-2 text-[11px] text-amber-700 dark:text-amber-400">
            Ollama no disponible: respondo en modo determinístico (estado, briefing, carga). Los cambios por lenguaje natural requieren IA.
          </p>
        )}
        <div className="flex items-end gap-2 rounded-xl border border-border bg-surface-2/60 p-1.5 focus-within:border-accent/60 focus-within:ring-2 focus-within:ring-accent/20">
          <textarea
            ref={inputRef}
            rows={1}
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={onKey}
            placeholder={context ? `Escribe sobre ${context.label ?? "esta entidad"}…` : "Ej. Yair terminó los Gherkins pero no tiene acceso al repo"}
            className="max-h-40 min-h-[36px] flex-1 resize-none bg-transparent px-2 py-2 text-sm text-fg placeholder:text-subtle focus:outline-none"
            style={{ fieldSizing: "content" } as React.CSSProperties}
          />
          <button
            onClick={() => send(text)}
            disabled={!text.trim() || Boolean(sending)}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent text-accent-fg transition-opacity disabled:opacity-40"
            aria-label="Enviar"
          >
            {sending ? <Spinner className="h-4 w-4 text-accent-fg" /> : <ArrowUp className="h-4 w-4" />}
          </button>
        </div>
      </div>
    </div>
  );
}

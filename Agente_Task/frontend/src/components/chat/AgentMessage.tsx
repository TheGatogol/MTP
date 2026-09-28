import { ArrowRight, CircleCheck, CircleHelp, Lightbulb, Plus, Sparkles, TriangleAlert, Wand2 } from "lucide-react";
import type { ReactNode } from "react";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";
import { ENTITY_LABELS, fieldLabel, formatValue } from "@/lib/labels";
import { usePending, usePeopleMap } from "@/lib/queries";
import type { AgentReply, EntityRef } from "@/lib/types";
import { Badge } from "../ui";
import { PendingChangeCard } from "./PendingChangeCard";

export function entityUrl(ref: { type: string; id: string }): string | null {
  switch (ref.type) {
    case "activity": return `/activities/${ref.id}`;
    case "pull_request": return `/prs/${ref.id}`;
    case "project": return `/projects/${ref.id}`;
    case "person": return `/people/${ref.id}`;
    case "initiative": return `/initiatives/${ref.id}`;
    default: return null;
  }
}

function Section({ icon, title, items, tone }: { icon: ReactNode; title: string; items: string[]; tone: string }) {
  if (!items.length) return null;
  return (
    <div className="mt-3">
      <div className={`mb-1 flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wide ${tone}`}>
        {icon} {title}
      </div>
      <ul className="space-y-1">
        {items.map((t, i) => (
          <li key={i} className="flex gap-1.5 text-[13px] leading-5 text-fg">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-subtle" />
            <span>{t}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function RefLink({ r, onNavigate }: { r: EntityRef; onNavigate?: () => void }) {
  const url = entityUrl(r);
  const label = `${ENTITY_LABELS[r.type] ?? r.type}: ${r.name}`;
  if (!url) return <Badge tone="gray">{label}</Badge>;
  return (
    <Link to={url} onClick={onNavigate} className="inline-flex items-center gap-1 rounded-md bg-accent-soft px-2 py-0.5 text-[11px] font-medium text-accent hover:opacity-80">
      {label} <ArrowRight className="h-3 w-3" />
    </Link>
  );
}

export function AgentMessage({ reply, onNavigate }: { reply: AgentReply; onNavigate?: () => void }) {
  const people = usePeopleMap();
  const { data: pending = [] } = usePending();
  const pendingCards = reply.pendingChangeIds.map((id) => pending.find((p) => p.id === id)).filter(Boolean);

  return (
    <div>
      <div className="markdown text-[13.5px] leading-6 text-fg">
        <ReactMarkdown>{reply.message}</ReactMarkdown>
      </div>

      {reply.appliedChanges.length > 0 && (
        <div className="mt-3 rounded-lg border border-emerald-200 bg-emerald-50/60 p-2.5 dark:border-emerald-900/60 dark:bg-emerald-950/20">
          <div className="mb-1 flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wide text-emerald-700 dark:text-emerald-400">
            <CircleCheck className="h-3.5 w-3.5" /> Cambios aplicados
          </div>
          <ul className="space-y-0.5">
            {reply.appliedChanges.map((c, i) => (
              <li key={i} className="text-[13px] text-fg">
                <span className="text-muted">{c.entityName} · {fieldLabel(c.field)}:</span>{" "}
                <span className="text-muted line-through decoration-subtle/60">{formatValue(c.field, c.oldValue, people)}</span> →{" "}
                <b>{formatValue(c.field, c.newValue, people)}</b>
              </li>
            ))}
          </ul>
        </div>
      )}

      {reply.created.length > 0 && (
        <div className="mt-2 flex flex-wrap items-center gap-1.5">
          <span className="flex items-center gap-1 text-[11px] font-semibold uppercase tracking-wide text-accent"><Plus className="h-3.5 w-3.5" /> Creado</span>
          {reply.created.map((c) => (
            <Badge key={c.id} tone="accent">{ENTITY_LABELS[c.type] ?? c.type}: {c.name}</Badge>
          ))}
        </div>
      )}

      {pendingCards.length > 0 && (
        <div className="mt-3 space-y-2">
          {pendingCards.map((p) => <PendingChangeCard key={p!.id} pc={p!} />)}
        </div>
      )}

      <Section icon={<CircleCheck className="h-3.5 w-3.5" />} title="Hechos" items={reply.facts} tone="text-emerald-700 dark:text-emerald-400" />
      <Section icon={<Wand2 className="h-3.5 w-3.5" />} title="Inferencias" items={reply.inferences} tone="text-violet-700 dark:text-violet-400" />
      {!reply.briefing && (
        <Section icon={<Lightbulb className="h-3.5 w-3.5" />} title="Recomendaciones" items={reply.recommendations} tone="text-amber-700 dark:text-amber-400" />
      )}
      <Section icon={<CircleHelp className="h-3.5 w-3.5" />} title="Preguntas" items={reply.questions} tone="text-sky-700 dark:text-sky-400" />

      {reply.references.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-1.5">
          {reply.references.map((r) => <RefLink key={`${r.type}-${r.id}`} r={r} onNavigate={onNavigate} />)}
        </div>
      )}
      {reply.briefing && reply.briefing.items.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-1.5">
          {reply.briefing.items.map((i) => (
            <RefLink key={i.key} r={{ type: i.entityType, id: i.entityId, name: i.name }} onNavigate={onNavigate} />
          ))}
        </div>
      )}

      {reply.warnings.length > 0 && (
        <div className="mt-3 space-y-1">
          {reply.warnings.map((w, i) => (
            <p key={i} className="flex items-start gap-1.5 text-[11px] text-amber-700 dark:text-amber-400">
              <TriangleAlert className="mt-0.5 h-3 w-3 shrink-0" /> {w}
            </p>
          ))}
        </div>
      )}
      <div className="mt-2 flex items-center gap-1 text-[10px] uppercase tracking-wide text-subtle">
        {reply.mode === "ai" ? <><Sparkles className="h-3 w-3" /> IA local</> : <>Modo determinístico</>}
      </div>
    </div>
  );
}

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const dateFmt = new Intl.DateTimeFormat("es-MX", { day: "2-digit", month: "short" });
const dateTimeFmt = new Intl.DateTimeFormat("es-MX", {
  day: "2-digit", month: "short", hour: "2-digit", minute: "2-digit",
});

function parse(value: string): Date {
  // Plain dates (YYYY-MM-DD) are calendar days: parse them as local dates, not UTC.
  return /^\d{4}-\d{2}-\d{2}$/.test(value) ? new Date(`${value}T00:00:00`) : new Date(value);
}

export function fmtDate(value?: string | null): string {
  if (!value) return "Por confirmar";
  const d = parse(value);
  return Number.isNaN(d.getTime()) ? value : dateFmt.format(d);
}

export function fmtDateTime(value?: string | null): string {
  if (!value) return "—";
  const d = parse(value);
  return Number.isNaN(d.getTime()) ? value : dateTimeFmt.format(d);
}

export function relativeTime(value?: string | null): string {
  if (!value) return "—";
  const diff = Date.now() - parse(value).getTime();
  const min = Math.round(diff / 60000);
  if (min < 1) return "justo ahora";
  if (min < 60) return `hace ${min} min`;
  const h = Math.round(min / 60);
  if (h < 24) return `hace ${h} h`;
  const d = Math.round(h / 24);
  return d === 1 ? "ayer" : `hace ${d} días`;
}

export function dueLabel(daysToDue: number | null | undefined, dueDate?: string | null): string {
  if (!dueDate || daysToDue === null || daysToDue === undefined) return "Sin deadline";
  if (daysToDue < 0) return `Vencida (${fmtDate(dueDate)})`;
  if (daysToDue === 0) return "Vence hoy";
  if (daysToDue === 1) return "Vence mañana";
  return `${fmtDate(dueDate)} · ${daysToDue} días`;
}

export function initials(name?: string | null): string {
  if (!name) return "?";
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0]!.toUpperCase())
    .join("");
}

export function todayISO(): string {
  const d = new Date();
  const off = d.getTimezoneOffset();
  return new Date(d.getTime() - off * 60000).toISOString().slice(0, 10);
}

/** Removes empty strings so optional fields are stored as null ("Por confirmar"). */
export function cleanForm<T extends Record<string, unknown>>(values: T): Record<string, unknown> {
  const out: Record<string, unknown> = {};
  for (const [k, v] of Object.entries(values)) {
    if (typeof v === "string") out[k] = v.trim() === "" ? null : v.trim();
    else out[k] = v;
  }
  return out;
}

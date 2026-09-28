import * as DialogPrimitive from "@radix-ui/react-dialog";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { LoaderCircle, X } from "lucide-react";
import {
  forwardRef, type ButtonHTMLAttributes, type InputHTMLAttributes, type ReactNode, type SelectHTMLAttributes,
  type TextareaHTMLAttributes,
} from "react";
import { cn } from "@/lib/utils";

// ─── Button ────────────────────────────────────────────────────────────────

type Variant = "primary" | "secondary" | "ghost" | "danger" | "outline" | "soft";
type Size = "sm" | "md" | "icon";

const variants: Record<Variant, string> = {
  primary: "bg-accent text-accent-fg hover:opacity-90 shadow-sm",
  secondary: "bg-surface-2 text-fg hover:bg-border/60",
  ghost: "text-muted hover:bg-surface-2 hover:text-fg",
  danger: "bg-red-600 text-white hover:bg-red-700",
  outline: "border border-border bg-surface text-fg hover:bg-surface-2",
  soft: "bg-accent-soft text-accent hover:opacity-90",
};
const sizes: Record<Size, string> = {
  sm: "h-8 px-2.5 text-xs gap-1.5",
  md: "h-9 px-3.5 text-sm gap-2",
  icon: "h-8 w-8 justify-center",
};

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  loading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", loading, disabled, children, ...props }, ref) => (
    <button
      ref={ref}
      disabled={disabled || loading}
      className={cn(
        "inline-flex items-center rounded-lg font-medium transition-colors disabled:opacity-50 disabled:pointer-events-none",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 whitespace-nowrap",
        variants[variant], sizes[size], className,
      )}
      {...props}
    >
      {loading && <LoaderCircle className="h-4 w-4 animate-spin" />}
      {children}
    </button>
  ),
);
Button.displayName = "Button";

// ─── Card ──────────────────────────────────────────────────────────────────

export function Card({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("rounded-xl border border-border bg-surface shadow-[0_1px_2px_rgba(16,24,40,0.04)]", className)} {...props}>
      {children}
    </div>
  );
}

export function CardHeader({ title, subtitle, action, icon }: { title: ReactNode; subtitle?: ReactNode; action?: ReactNode; icon?: ReactNode }) {
  return (
    <div className="flex items-start justify-between gap-3 px-4 pt-4 pb-2">
      <div className="flex items-center gap-2 min-w-0">
        {icon && <span className="text-subtle">{icon}</span>}
        <div className="min-w-0">
          <h3 className="text-sm font-semibold text-fg">{title}</h3>
          {subtitle && <p className="text-xs text-muted mt-0.5">{subtitle}</p>}
        </div>
      </div>
      {action}
    </div>
  );
}

// ─── Badge ─────────────────────────────────────────────────────────────────

export type Tone = "gray" | "red" | "amber" | "green" | "blue" | "violet" | "accent";
const tones: Record<Tone, string> = {
  gray: "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300",
  red: "bg-red-50 text-red-700 dark:bg-red-950/60 dark:text-red-300",
  amber: "bg-amber-50 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300",
  green: "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300",
  blue: "bg-sky-50 text-sky-700 dark:bg-sky-950/60 dark:text-sky-300",
  violet: "bg-violet-50 text-violet-700 dark:bg-violet-950/60 dark:text-violet-300",
  accent: "bg-accent-soft text-accent",
};

export function Badge({ tone = "gray", className, children, title }: { tone?: Tone; className?: string; children: ReactNode; title?: string }) {
  return (
    <span title={title} className={cn("inline-flex items-center gap-1 rounded-md px-1.5 py-0.5 text-[11px] font-medium leading-4 whitespace-nowrap", tones[tone], className)}>
      {children}
    </span>
  );
}

// ─── Form controls ─────────────────────────────────────────────────────────

const fieldBase =
  "w-full rounded-lg border border-border bg-surface px-3 text-sm text-fg placeholder:text-subtle focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent/60";

export const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(({ className, ...p }, ref) => (
  <input ref={ref} className={cn(fieldBase, "h-9", className)} {...p} />
));
Input.displayName = "Input";

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaHTMLAttributes<HTMLTextAreaElement>>(({ className, ...p }, ref) => (
  <textarea ref={ref} className={cn(fieldBase, "py-2 min-h-[72px] resize-y", className)} {...p} />
));
Textarea.displayName = "Textarea";

export function Select({ className, children, ...p }: SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select className={cn(fieldBase, "h-9 pr-8", className)} {...p}>
      {children}
    </select>
  );
}

export function Field({ label, hint, children, className }: { label: string; hint?: string; children: ReactNode; className?: string }) {
  return (
    <label className={cn("block space-y-1", className)}>
      <span className="text-xs font-medium text-muted">{label}</span>
      {children}
      {hint && <span className="block text-[11px] text-subtle">{hint}</span>}
    </label>
  );
}

// ─── Misc ──────────────────────────────────────────────────────────────────

export function Spinner({ className }: { className?: string }) {
  return <LoaderCircle className={cn("h-5 w-5 animate-spin text-subtle", className)} />;
}

export function PageLoader() {
  return (
    <div className="flex h-64 items-center justify-center">
      <Spinner className="h-6 w-6" />
    </div>
  );
}

export function EmptyState({ icon, title, description, action }: { icon?: ReactNode; title: string; description?: string; action?: ReactNode }) {
  return (
    <div className="flex flex-col items-center justify-center text-center py-10 px-4">
      {icon && <div className="mb-3 text-subtle">{icon}</div>}
      <p className="text-sm font-medium text-fg">{title}</p>
      {description && <p className="mt-1 text-xs text-muted max-w-sm">{description}</p>}
      {action && <div className="mt-4">{action}</div>}
    </div>
  );
}

export function ErrorState({ error, onRetry }: { error: unknown; onRetry?: () => void }) {
  return (
    <Card className="p-6 text-center">
      <p className="text-sm font-medium text-red-600">No se pudo cargar la información</p>
      <p className="mt-1 text-xs text-muted">{error instanceof Error ? error.message : String(error)}</p>
      {onRetry && <Button className="mt-3" variant="outline" size="sm" onClick={onRetry}>Reintentar</Button>}
    </Card>
  );
}

export function PageHeader({ title, subtitle, actions }: { title: ReactNode; subtitle?: ReactNode; actions?: ReactNode }) {
  return (
    <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
      <div className="min-w-0">
        <h1 className="text-xl font-semibold tracking-tight text-fg sm:text-2xl">{title}</h1>
        {subtitle && <p className="mt-1 text-sm text-muted">{subtitle}</p>}
      </div>
      {actions && <div className="flex flex-wrap items-center gap-2">{actions}</div>}
    </div>
  );
}

export function Progress({ value, tone = "accent" }: { value: number; tone?: "accent" | "red" | "amber" | "green" }) {
  const color = { accent: "bg-accent", red: "bg-red-500", amber: "bg-amber-500", green: "bg-emerald-500" }[tone];
  return (
    <div className="h-1.5 w-full overflow-hidden rounded-full bg-surface-2">
      <div className={cn("h-full rounded-full transition-all", color)} style={{ width: `${Math.max(0, Math.min(100, value))}%` }} />
    </div>
  );
}

export function Kbd({ children }: { children: ReactNode }) {
  return <kbd className="rounded border border-border bg-surface-2 px-1.5 py-0.5 text-[10px] font-medium text-muted">{children}</kbd>;
}

export function Chip({ active, children, onClick, count }: { active?: boolean; children: ReactNode; onClick?: () => void; count?: number }) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium transition-colors whitespace-nowrap",
        active ? "border-accent bg-accent-soft text-accent" : "border-border bg-surface text-muted hover:text-fg hover:bg-surface-2",
      )}
    >
      {children}
      {count !== undefined && <span className={cn("rounded-full px-1.5 text-[10px]", active ? "bg-accent/15" : "bg-surface-2")}>{count}</span>}
    </button>
  );
}

// ─── Dialog ────────────────────────────────────────────────────────────────

export function Modal({
  open, onOpenChange, title, description, children, footer, size = "md",
}: {
  open: boolean; onOpenChange: (o: boolean) => void; title: ReactNode; description?: ReactNode;
  children: ReactNode; footer?: ReactNode; size?: "sm" | "md" | "lg" | "xl";
}) {
  const width = { sm: "max-w-sm", md: "max-w-lg", lg: "max-w-2xl", xl: "max-w-4xl" }[size];
  return (
    <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-black/40 backdrop-blur-[2px]" />
        <DialogPrimitive.Content
          className={cn(
            "fixed left-1/2 top-1/2 z-50 flex max-h-[92vh] w-[calc(100vw-1.5rem)] -translate-x-1/2 -translate-y-1/2 flex-col",
            "rounded-2xl border border-border bg-surface shadow-2xl focus:outline-none", width,
          )}
        >
          <div className="flex items-start justify-between gap-4 border-b border-border px-5 py-4">
            <div>
              <DialogPrimitive.Title className="text-base font-semibold text-fg">{title}</DialogPrimitive.Title>
              {description ? (
                <DialogPrimitive.Description className="mt-1 text-xs text-muted">{description}</DialogPrimitive.Description>
              ) : (
                <DialogPrimitive.Description className="sr-only">{typeof title === "string" ? title : "Diálogo"}</DialogPrimitive.Description>
              )}
            </div>
            <DialogPrimitive.Close className="rounded-md p-1 text-subtle hover:bg-surface-2 hover:text-fg" aria-label="Cerrar">
              <X className="h-4 w-4" />
            </DialogPrimitive.Close>
          </div>
          <div className="overflow-y-auto px-5 py-4">{children}</div>
          {footer && <div className="flex justify-end gap-2 border-t border-border px-5 py-3">{footer}</div>}
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}

export function ConfirmModal({
  open, onOpenChange, title, description, confirmLabel = "Confirmar", danger, loading, onConfirm, children,
}: {
  open: boolean; onOpenChange: (o: boolean) => void; title: string; description?: ReactNode; confirmLabel?: string;
  danger?: boolean; loading?: boolean; onConfirm: () => void; children?: ReactNode;
}) {
  return (
    <Modal
      open={open}
      onOpenChange={onOpenChange}
      title={title}
      size="sm"
      footer={
        <>
          <Button variant="ghost" onClick={() => onOpenChange(false)}>Cancelar</Button>
          <Button variant={danger ? "danger" : "primary"} loading={loading} onClick={onConfirm}>{confirmLabel}</Button>
        </>
      }
    >
      {description && <div className="text-sm text-muted">{description}</div>}
      {children}
    </Modal>
  );
}

// ─── Tabs ──────────────────────────────────────────────────────────────────

export const Tabs = TabsPrimitive.Root;
export const TabsContent = TabsPrimitive.Content;

export function TabsList({ tabs }: { tabs: { value: string; label: string; count?: number }[] }) {
  return (
    <TabsPrimitive.List className="flex gap-1 overflow-x-auto border-b border-border">
      {tabs.map((t) => (
        <TabsPrimitive.Trigger
          key={t.value}
          value={t.value}
          className={cn(
            "relative -mb-px flex items-center gap-1.5 whitespace-nowrap border-b-2 border-transparent px-3 py-2 text-sm font-medium text-muted",
            "hover:text-fg data-[state=active]:border-accent data-[state=active]:text-fg",
          )}
        >
          {t.label}
          {t.count !== undefined && t.count > 0 && (
            <span className="rounded-full bg-surface-2 px-1.5 text-[10px] text-muted">{t.count}</span>
          )}
        </TabsPrimitive.Trigger>
      ))}
    </TabsPrimitive.List>
  );
}

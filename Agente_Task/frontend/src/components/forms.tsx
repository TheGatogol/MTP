import { useEffect, useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "@/lib/api";
import {
  APPROVAL_LABELS, AUTOMATION_LABELS, BLOCKER_TYPE_LABELS, BLOCKER_TYPES, BUILD_LABELS, INITIATIVE_STATUS_LABELS,
  MERGE_LABELS, PR_STATUS_LABELS, PRIORITIES, PROJECT_STATUS_LABELS, REGRESSION_LABELS, RISK_LABELS, STATUS_LABELS,
} from "@/lib/labels";
import { useActivities, useAppMutation, useInitiatives, usePeople, useProjects } from "@/lib/queries";
import type { Activity, Blocker, Initiative, Person, Project, PullRequest } from "@/lib/types";
import { cleanForm, todayISO } from "@/lib/utils";
import { Button, ConfirmModal, Field, Input, Modal, Select, Textarea } from "./ui";

type Values = Record<string, string>;
const str = (v: unknown) => (v === null || v === undefined ? "" : String(v));
const num = (v: string) => (v.trim() === "" ? null : Number(v));

function useFormState(initial: Values, open: boolean) {
  const [values, setValues] = useState<Values>(initial);
  useEffect(() => {
    if (open) setValues(initial);
  }, [open]);
  const bind = (k: string) => ({
    value: values[k] ?? "",
    onChange: (e: { target: { value: string } }) => setValues((s) => ({ ...s, [k]: e.target.value })),
  });
  return { values, setValues, bind };
}

function EnumSelect({ labels, allowEmpty = "Por confirmar", ...p }: { labels: Record<string, string>; allowEmpty?: string | false } & React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <Select {...p}>
      {allowEmpty !== false && <option value="">{allowEmpty}</option>}
      {Object.entries(labels).map(([v, l]) => (
        <option key={v} value={v}>{l}</option>
      ))}
    </Select>
  );
}

function PersonSelect(p: React.SelectHTMLAttributes<HTMLSelectElement>) {
  const { data: people = [] } = usePeople();
  return (
    <Select {...p}>
      <option value="">Por confirmar</option>
      {people.map((x) => <option key={x.id} value={x.id}>{x.name}</option>)}
    </Select>
  );
}

// ─── Activity ──────────────────────────────────────────────────────────────

export function ActivityFormDialog({ open, onOpenChange, activity, defaults }: {
  open: boolean; onOpenChange: (o: boolean) => void; activity?: Activity | null; defaults?: Partial<Record<string, string>>;
}) {
  const navigate = useNavigate();
  const { data: projects = [] } = useProjects();
  const { data: initiatives = [] } = useInitiatives();
  const { data: people = [] } = usePeople();
  const editing = Boolean(activity);
  const initial: Values = {
    title: str(activity?.title), type: str(activity?.type), description: str(activity?.description),
    projectDependencyId: str(activity?.projectDependencyId), initiativeId: str(activity?.initiativeId),
    priority: str(activity?.priority), status: activity?.status ?? "PENDING", technicalStatus: str(activity?.technicalStatus),
    ownerId: str(activity?.ownerId), requester: str(activity?.requester), requestDate: str(activity?.requestDate),
    dueDate: str(activity?.dueDate), waitingFor: str(activity?.waitingFor), nextAction: str(activity?.nextAction),
    nextFollowUp: str(activity?.nextFollowUp), estimatedHours: str(activity?.estimatedHours),
    consumedHours: str(activity?.consumedHours), riskLevel: str(activity?.riskLevel), riskReason: str(activity?.riskReason),
    result: str(activity?.result), evidenceUrls: (activity?.evidenceUrls ?? []).join("\n"),
    aliases: (activity?.aliases ?? []).join(", "),
    ...(defaults as Values | undefined),
  };
  const { values, bind } = useFormState(initial, open);
  const [support, setSupport] = useState<string[]>(activity?.supportPeople ?? []);
  const [confirmClose, setConfirmClose] = useState(false);
  useEffect(() => { if (open) setSupport(activity?.supportPeople ?? []); }, [open, activity]);

  const save = useAppMutation(
    (body: Record<string, unknown>) => (editing ? api.activities.update(activity!.id, body) : api.activities.create(body)),
    {
      success: editing ? "Actividad actualizada" : "Actividad creada",
      onSuccess: (a) => { onOpenChange(false); if (!editing) navigate(`/activities/${a.id}`); },
    },
  );

  const submit = (e?: FormEvent) => {
    e?.preventDefault();
    const closing = (values.status === "DONE" || values.status === "CANCELLED") && values.status !== activity?.status;
    if (closing && !confirmClose) { setConfirmClose(true); return; }
    setConfirmClose(false);
    const body = cleanForm({ ...values, evidenceUrls: "", aliases: "" });
    body.aliases = (values.aliases ?? "").split(",").map((s) => s.trim()).filter(Boolean);
    body.estimatedHours = num(values.estimatedHours ?? "");
    body.consumedHours = num(values.consumedHours ?? "");
    body.supportPeople = support;
    body.evidenceUrls = (values.evidenceUrls ?? "").split("\n").map((s) => s.trim()).filter(Boolean);
    save.mutate(body);
  };

  return (
    <>
      <Modal
        open={open}
        onOpenChange={onOpenChange}
        size="lg"
        title={editing ? "Editar actividad" : "Nueva actividad"}
        description="Deja vacío lo que no esté confirmado: se mostrará como «Por confirmar»."
        footer={<>
          <Button variant="ghost" onClick={() => onOpenChange(false)}>Cancelar</Button>
          <Button onClick={() => submit()} loading={save.isPending} disabled={!values.title?.trim()}>Guardar</Button>
        </>}
      >
        <form onSubmit={submit} className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <Field label="Título *" className="sm:col-span-2"><Input autoFocus {...bind("title")} placeholder="Ej. Cierre PR 9792 DIFO" /></Field>
          <Field label="Estado"><EnumSelect labels={STATUS_LABELS} allowEmpty={false} {...bind("status")} /></Field>
          <Field label="Prioridad">
            <Select {...bind("priority")}><option value="">Por confirmar</option>{PRIORITIES.map((p) => <option key={p}>{p}</option>)}</Select>
          </Field>
          <Field label="Responsable"><PersonSelect {...bind("ownerId")} /></Field>
          <Field label="Deadline"><Input type="date" {...bind("dueDate")} /></Field>
          <Field label="Proyecto / DEP">
            <Select {...bind("projectDependencyId")}>
              <option value="">Sin proyecto</option>
              {projects.map((p) => <option key={p.id} value={p.id}>{p.name}</option>)}
            </Select>
          </Field>
          <Field label="Iniciativa">
            <Select {...bind("initiativeId")}>
              <option value="">Sin iniciativa</option>
              {initiatives.map((p) => <option key={p.id} value={p.id}>{p.name}</option>)}
            </Select>
          </Field>
          <Field label="Tipo"><Input {...bind("type")} placeholder="Construcción, Mantenimiento, Cierre PR…" /></Field>
          <Field label="Estado técnico"><Input {...bind("technicalStatus")} placeholder="Ej. Gherkins terminados" /></Field>
          <Field label="Descripción" className="sm:col-span-2"><Textarea {...bind("description")} /></Field>
          <Field label="Esperando a"><Input {...bind("waitingFor")} placeholder="Tercero / condición" /></Field>
          <Field label="Siguiente acción"><Input {...bind("nextAction")} /></Field>
          <Field label="Próximo seguimiento"><Input type="date" {...bind("nextFollowUp")} /></Field>
          <Field label="Solicitante"><Input {...bind("requester")} /></Field>
          <Field label="Horas estimadas"><Input type="number" min="0" step="0.5" {...bind("estimatedHours")} /></Field>
          <Field label="Horas consumidas"><Input type="number" min="0" step="0.5" {...bind("consumedHours")} /></Field>
          <Field label="Riesgo"><EnumSelect labels={RISK_LABELS} {...bind("riskLevel")} /></Field>
          <Field label="Motivo del riesgo"><Input {...bind("riskReason")} /></Field>
          <Field label="Apoyo" className="sm:col-span-2">
            <div className="flex flex-wrap gap-2">
              {people.map((p) => (
                <label key={p.id} className="flex items-center gap-1.5 rounded-lg border border-border px-2 py-1 text-xs">
                  <input type="checkbox" checked={support.includes(p.id)}
                    onChange={(e) => setSupport((s) => (e.target.checked ? [...s, p.id] : s.filter((x) => x !== p.id)))} />
                  {p.name}
                </label>
              ))}
            </div>
          </Field>
          <Field label="Alias (coma)" hint="Ayudan al agente a reconocerla: DIFO, 9792…" className="sm:col-span-2"><Input {...bind("aliases")} /></Field>
          <Field label="Evidencias (una URL por línea)" className="sm:col-span-2"><Textarea {...bind("evidenceUrls")} className="min-h-[56px]" /></Field>
          {editing && <Field label="Resultado" className="sm:col-span-2"><Input {...bind("result")} /></Field>}
          <button type="submit" className="hidden" />
        </form>
      </Modal>
      <ConfirmModal
        open={confirmClose}
        onOpenChange={setConfirmClose}
        title={`¿Marcar como ${STATUS_LABELS[values.status ?? ""]}?`}
        description="Es un cambio importante. Quedará registrado en el historial con el estado anterior."
        onConfirm={() => submit()}
        loading={save.isPending}
      />
    </>
  );
}

// ─── Blockers ──────────────────────────────────────────────────────────────

export function BlockerFormDialog({ open, onOpenChange, activityId, blocker, onDone }: {
  open: boolean; onOpenChange: (o: boolean) => void; activityId?: string; blocker?: Blocker | null; onDone?: () => void;
}) {
  const { data: activities = [] } = useActivities();
  const editing = Boolean(blocker);
  const { values, bind } = useFormState({
    activityId: activityId ?? blocker?.activityId ?? "", type: blocker?.type ?? "UNKNOWN",
    description: str(blocker?.description), responsible: str(blocker?.responsible), waitingFor: str(blocker?.waitingFor),
    blockedSince: blocker ? str(blocker.blockedSince) : todayISO(), nextFollowUp: str(blocker?.nextFollowUp),
  }, open);
  const save = useAppMutation(
    (body: Record<string, unknown>) => (editing ? api.blockers.update(blocker!.id, body) : api.blockers.create(body)),
    { success: editing ? "Bloqueo actualizado" : "Bloqueo registrado", onSuccess: () => { onOpenChange(false); onDone?.(); } },
  );
  return (
    <Modal open={open} onOpenChange={onOpenChange} title={editing ? "Editar bloqueo" : "Registrar bloqueo"}
      description="El bloqueo no cambia el estado de la actividad: solo la marca como bloqueada."
      footer={<>
        <Button variant="ghost" onClick={() => onOpenChange(false)}>Cancelar</Button>
        <Button loading={save.isPending} disabled={!values.description?.trim() || !values.activityId}
          onClick={() => save.mutate(cleanForm(values))}>Guardar</Button>
      </>}
    >
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {!activityId && !editing && (
          <Field label="Actividad *" className="sm:col-span-2">
            <Select {...bind("activityId")}>
              <option value="">Selecciona…</option>
              {activities.filter((a) => a.status !== "DONE" && a.status !== "CANCELLED").map((a) => <option key={a.id} value={a.id}>{a.title}</option>)}
            </Select>
          </Field>
        )}
        <Field label="Tipo"><EnumSelect labels={Object.fromEntries(BLOCKER_TYPES.map((t) => [t, BLOCKER_TYPE_LABELS[t]!]))} allowEmpty={false} {...bind("type")} /></Field>
        <Field label="Responsable de desbloquear"><Input {...bind("responsible")} placeholder="Persona / equipo" /></Field>
        <Field label="Descripción *" className="sm:col-span-2"><Textarea autoFocus {...bind("description")} placeholder="¿Qué impide avanzar?" /></Field>
        <Field label="Esperando"><Input {...bind("waitingFor")} placeholder="Ej. Permisos de repositorio" /></Field>
        <Field label="Bloqueada desde" hint="Vacío = por confirmar"><Input type="date" {...bind("blockedSince")} /></Field>
        <Field label="Próximo seguimiento"><Input type="date" {...bind("nextFollowUp")} /></Field>
      </div>
    </Modal>
  );
}

export function ResolveBlockerDialog({ open, onOpenChange, blockers, onDone }: {
  open: boolean; onOpenChange: (o: boolean) => void; blockers: Blocker[]; onDone?: () => void;
}) {
  const [resolution, setResolution] = useState("");
  useEffect(() => { if (open) setResolution(""); }, [open]);
  const resolve = useAppMutation(
    async (text: string) => { for (const b of blockers) await api.blockers.resolve(b.id, text); return true; },
    { success: blockers.length > 1 ? "Bloqueos resueltos" : "Bloqueo resuelto", onSuccess: () => { onOpenChange(false); onDone?.(); } },
  );
  return (
    <Modal open={open} onOpenChange={onOpenChange} title="Resolver bloqueo" size="sm"
      description={blockers.map((b) => b.description).join(" · ")}
      footer={<>
        <Button variant="ghost" onClick={() => onOpenChange(false)}>Cancelar</Button>
        <Button loading={resolve.isPending} onClick={() => resolve.mutate(resolution || "Resuelto")}>Resolver</Button>
      </>}
    >
      <Field label="¿Cómo se resolvió?"><Textarea autoFocus value={resolution} onChange={(e) => setResolution(e.target.value)} placeholder="Ej. Se otorgaron permisos de escritura" /></Field>
    </Modal>
  );
}

export function FollowUpDialog({ open, onOpenChange, blocker }: { open: boolean; onOpenChange: (o: boolean) => void; blocker: Blocker | null }) {
  const [comment, setComment] = useState("");
  const [next, setNext] = useState("");
  useEffect(() => { if (open) { setComment(""); setNext(""); } }, [open]);
  const save = useAppMutation(() => api.blockers.followUp(blocker!.id, comment, next || null),
    { success: "Seguimiento registrado", onSuccess: () => onOpenChange(false) });
  return (
    <Modal open={open} onOpenChange={onOpenChange} title="Registrar seguimiento" size="sm" description={blocker?.description}
      footer={<><Button variant="ghost" onClick={() => onOpenChange(false)}>Cancelar</Button><Button loading={save.isPending} onClick={() => save.mutate(undefined)}>Guardar</Button></>}
    >
      <div className="space-y-3">
        <Field label="Comentario"><Textarea autoFocus value={comment} onChange={(e) => setComment(e.target.value)} placeholder="Ej. Se volvió a solicitar al equipo de accesos" /></Field>
        <Field label="Próximo seguimiento"><Input type="date" value={next} onChange={(e) => setNext(e.target.value)} /></Field>
      </div>
    </Modal>
  );
}

// ─── Pull requests ─────────────────────────────────────────────────────────

export function PRFormDialog({ open, onOpenChange, pr, activityId }: {
  open: boolean; onOpenChange: (o: boolean) => void; pr?: PullRequest | null; activityId?: string;
}) {
  const { data: activities = [] } = useActivities();
  const { data: projects = [] } = useProjects();
  const editing = Boolean(pr);
  const { values, bind } = useFormState({
    pullRequestNumber: str(pr?.pullRequestNumber), title: str(pr?.title), activityId: activityId ?? str(pr?.activityId),
    projectId: str(pr?.projectId), jiraRef: str(pr?.jiraRef), repository: str(pr?.repository), branch: str(pr?.branch),
    url: str(pr?.url), status: pr?.status ?? "OPEN", automationStatus: pr?.automationStatus ?? "UNKNOWN",
    buildStatus: pr?.buildStatus ?? "UNKNOWN", latestBuild: str(pr?.latestBuild), regressionStatus: pr?.regressionStatus ?? "UNKNOWN",
    gherkinTotal: str(pr?.gherkinTotal), gherkinPassed: str(pr?.gherkinPassed), gherkinFailed: str(pr?.gherkinFailed),
    pendingComments: str(pr?.pendingComments), reviewer: str(pr?.reviewer), approvalStatus: pr?.approvalStatus ?? "UNKNOWN",
    mergeStatus: pr?.mergeStatus ?? "NOT_MERGED", nextAction: str(pr?.nextAction), riskLevel: str(pr?.riskLevel), notes: str(pr?.notes),
  }, open);
  const [confirmMerge, setConfirmMerge] = useState(false);
  const save = useAppMutation(
    (body: Record<string, unknown>) => (editing ? api.prs.update(pr!.id, body) : api.prs.create(body)),
    { success: editing ? "PR actualizada" : "PR creada", onSuccess: () => onOpenChange(false) },
  );
  const submit = () => {
    const merging = values.mergeStatus === "MERGED" && pr?.mergeStatus !== "MERGED";
    if (merging && !confirmMerge) { setConfirmMerge(true); return; }
    setConfirmMerge(false);
    const body = cleanForm(values);
    for (const k of ["latestBuild", "gherkinTotal", "gherkinPassed", "gherkinFailed", "pendingComments"]) body[k] = num(values[k] ?? "");
    save.mutate(body);
  };
  return (
    <>
      <Modal open={open} onOpenChange={onOpenChange} size="lg" title={editing ? `Editar PR ${pr!.pullRequestNumber}` : "Nueva PR"}
        footer={<><Button variant="ghost" onClick={() => onOpenChange(false)}>Cancelar</Button>
          <Button loading={save.isPending} disabled={!values.pullRequestNumber?.trim() || !values.title?.trim()} onClick={submit}>Guardar</Button></>}
      >
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          <Field label="Número *"><Input autoFocus {...bind("pullRequestNumber")} /></Field>
          <Field label="Título *" className="sm:col-span-2"><Input {...bind("title")} /></Field>
          <Field label="Actividad" className="sm:col-span-2">
            <Select {...bind("activityId")}><option value="">Sin actividad</option>{activities.map((a) => <option key={a.id} value={a.id}>{a.title}</option>)}</Select>
          </Field>
          <Field label="Proyecto">
            <Select {...bind("projectId")}><option value="">Sin proyecto</option>{projects.map((p) => <option key={p.id} value={p.id}>{p.name}</option>)}</Select>
          </Field>
          <Field label="Referencia Jira"><Input {...bind("jiraRef")} /></Field>
          <Field label="Repositorio"><Input {...bind("repository")} /></Field>
          <Field label="Rama"><Input {...bind("branch")} /></Field>
          <Field label="URL" className="sm:col-span-3"><Input {...bind("url")} placeholder="https://…" /></Field>
          <Field label="Estado PR"><EnumSelect labels={PR_STATUS_LABELS} allowEmpty={false} {...bind("status")} /></Field>
          <Field label="Automatización"><EnumSelect labels={AUTOMATION_LABELS} allowEmpty={false} {...bind("automationStatus")} /></Field>
          <Field label="Reviewer"><Input {...bind("reviewer")} /></Field>
          <Field label="Último build #"><Input type="number" {...bind("latestBuild")} /></Field>
          <Field label="Estado build"><EnumSelect labels={BUILD_LABELS} allowEmpty={false} {...bind("buildStatus")} /></Field>
          <Field label="Regresión"><EnumSelect labels={REGRESSION_LABELS} allowEmpty={false} {...bind("regressionStatus")} /></Field>
          <Field label="Gherkins totales"><Input type="number" min="0" {...bind("gherkinTotal")} /></Field>
          <Field label="Gherkins OK"><Input type="number" min="0" {...bind("gherkinPassed")} /></Field>
          <Field label="Gherkins fallidos"><Input type="number" min="0" {...bind("gherkinFailed")} /></Field>
          <Field label="Comentarios pendientes"><Input type="number" min="0" {...bind("pendingComments")} /></Field>
          <Field label="Aprobación"><EnumSelect labels={APPROVAL_LABELS} allowEmpty={false} {...bind("approvalStatus")} /></Field>
          <Field label="Merge"><EnumSelect labels={MERGE_LABELS} allowEmpty={false} {...bind("mergeStatus")} /></Field>
          <Field label="Siguiente acción" className="sm:col-span-2"><Input {...bind("nextAction")} /></Field>
          <Field label="Riesgo"><EnumSelect labels={RISK_LABELS} {...bind("riskLevel")} /></Field>
          <Field label="Notas" className="sm:col-span-3"><Textarea {...bind("notes")} /></Field>
        </div>
      </Modal>
      <ConfirmModal open={confirmMerge} onOpenChange={setConfirmMerge} title="¿Marcar la PR como mergeada?"
        description="Es un cambio importante. Confírmalo solo si tienes evidencia del merge." onConfirm={submit} loading={save.isPending} />
    </>
  );
}

export function BuildDialog({ open, onOpenChange, pr }: { open: boolean; onOpenChange: (o: boolean) => void; pr: PullRequest | null }) {
  const { values, bind } = useFormState({ number: pr?.latestBuild ? String(pr.latestBuild + 1) : "", status: "PASSED", notes: "" }, open);
  const save = useAppMutation(() => api.prs.addBuild(pr!.id, { number: num(values.number ?? ""), status: values.status, notes: values.notes || null }),
    { success: "Build registrado", onSuccess: () => onOpenChange(false) });
  return (
    <Modal open={open} onOpenChange={onOpenChange} size="sm" title={`Registrar build · PR ${pr?.pullRequestNumber ?? ""}`}
      footer={<><Button variant="ghost" onClick={() => onOpenChange(false)}>Cancelar</Button><Button loading={save.isPending} onClick={() => save.mutate(undefined)}>Guardar</Button></>}
    >
      <div className="grid grid-cols-2 gap-3">
        <Field label="Build #"><Input type="number" autoFocus {...bind("number")} /></Field>
        <Field label="Resultado"><EnumSelect labels={BUILD_LABELS} allowEmpty={false} {...bind("status")} /></Field>
        <Field label="Notas" className="col-span-2"><Input {...bind("notes")} /></Field>
      </div>
    </Modal>
  );
}

// ─── Project / Person / Initiative ─────────────────────────────────────────

export function ProjectFormDialog({ open, onOpenChange, project }: { open: boolean; onOpenChange: (o: boolean) => void; project?: Project | null }) {
  const editing = Boolean(project);
  const { values, bind } = useFormState({
    name: str(project?.name), kind: project?.kind ?? "PROJECT", jiraId: str(project?.jiraId), quarter: str(project?.quarter),
    scrum: str(project?.scrum), reporter: str(project?.reporter), status: project?.status ?? "TO_CONFIRM",
    startDate: str(project?.startDate), dueDate: str(project?.dueDate),
    estimatedAutomationHours: str(project?.estimatedAutomationHours), assignedAutomationHours: str(project?.assignedAutomationHours),
    description: str(project?.description), automationScope: str(project?.automationScope), riskLevel: str(project?.riskLevel),
    aliases: (project?.aliases ?? []).join(", "),
  }, open);
  const save = useAppMutation((b: Record<string, unknown>) => (editing ? api.projects.update(project!.id, b) : api.projects.create(b)),
    { success: "Guardado", onSuccess: () => onOpenChange(false) });
  const submit = () => {
    const b = cleanForm(values);
    b.estimatedAutomationHours = num(values.estimatedAutomationHours ?? "");
    b.assignedAutomationHours = num(values.assignedAutomationHours ?? "");
    b.aliases = (values.aliases ?? "").split(",").map((s) => s.trim()).filter(Boolean);
    save.mutate(b);
  };
  return (
    <Modal open={open} onOpenChange={onOpenChange} size="lg" title={editing ? "Editar proyecto / DEP" : "Nuevo proyecto / DEP"}
      footer={<><Button variant="ghost" onClick={() => onOpenChange(false)}>Cancelar</Button><Button loading={save.isPending} disabled={!values.name?.trim()} onClick={submit}>Guardar</Button></>}
    >
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        <Field label="Nombre *" className="sm:col-span-2"><Input autoFocus {...bind("name")} /></Field>
        <Field label="Tipo"><Select {...bind("kind")}><option value="PROJECT">Proyecto</option><option value="DEPENDENCY">Dependencia (DEP)</option></Select></Field>
        <Field label="Jira ID"><Input {...bind("jiraId")} /></Field>
        <Field label="Quarter"><Input {...bind("quarter")} placeholder="Q4" /></Field>
        <Field label="Estado"><EnumSelect labels={PROJECT_STATUS_LABELS} allowEmpty={false} {...bind("status")} /></Field>
        <Field label="Scrum"><Input {...bind("scrum")} /></Field>
        <Field label="Reporter"><Input {...bind("reporter")} /></Field>
        <Field label="Riesgo"><EnumSelect labels={RISK_LABELS} {...bind("riskLevel")} /></Field>
        <Field label="Inicio"><Input type="date" {...bind("startDate")} /></Field>
        <Field label="Entrega"><Input type="date" {...bind("dueDate")} /></Field>
        <Field label="Alias (coma)"><Input {...bind("aliases")} placeholder="DIFO, 9792" /></Field>
        <Field label="Horas automatización estimadas"><Input type="number" {...bind("estimatedAutomationHours")} /></Field>
        <Field label="Horas automatización asignadas"><Input type="number" {...bind("assignedAutomationHours")} /></Field>
        <Field label="Alcance de automatización" className="sm:col-span-3"><Textarea {...bind("automationScope")} /></Field>
        <Field label="Descripción" className="sm:col-span-3"><Textarea {...bind("description")} /></Field>
      </div>
    </Modal>
  );
}

export function PersonFormDialog({ open, onOpenChange, person }: { open: boolean; onOpenChange: (o: boolean) => void; person?: Person | null }) {
  const editing = Boolean(person);
  const { values, bind } = useFormState({
    name: str(person?.name), role: str(person?.role), team: str(person?.team), kind: person?.kind ?? "INTERNAL",
    specialties: (person?.specialties ?? []).join(", "), availableHours: str(person?.availableHours),
    aliases: (person?.aliases ?? []).join(", "),
  }, open);
  const save = useAppMutation((b: Record<string, unknown>) => (editing ? api.people.update(person!.id, b) : api.people.create(b)),
    { success: "Guardado", onSuccess: () => onOpenChange(false) });
  const submit = () => {
    const b = cleanForm(values);
    b.availableHours = num(values.availableHours ?? "");
    b.specialties = (values.specialties ?? "").split(",").map((s) => s.trim()).filter(Boolean);
    b.aliases = (values.aliases ?? "").split(",").map((s) => s.trim()).filter(Boolean);
    save.mutate(b);
  };
  return (
    <Modal open={open} onOpenChange={onOpenChange} title={editing ? "Editar persona" : "Nueva persona"}
      footer={<><Button variant="ghost" onClick={() => onOpenChange(false)}>Cancelar</Button><Button loading={save.isPending} disabled={!values.name?.trim()} onClick={submit}>Guardar</Button></>}
    >
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <Field label="Nombre *"><Input autoFocus {...bind("name")} /></Field>
        <Field label="Tipo"><Select {...bind("kind")}><option value="INTERNAL">Interno</option><option value="EXTERNAL">Externo / equipo</option></Select></Field>
        <Field label="Rol"><Input {...bind("role")} /></Field>
        <Field label="Equipo"><Input {...bind("team")} /></Field>
        <Field label="Horas disponibles / semana" hint="Vacío = por confirmar"><Input type="number" min="0" {...bind("availableHours")} /></Field>
        <Field label="Alias (coma)"><Input {...bind("aliases")} /></Field>
        <Field label="Especialidades (coma)" className="sm:col-span-2"><Input {...bind("specialties")} /></Field>
      </div>
    </Modal>
  );
}

export function InitiativeFormDialog({ open, onOpenChange, initiative }: { open: boolean; onOpenChange: (o: boolean) => void; initiative?: Initiative | null }) {
  const editing = Boolean(initiative);
  const { values, bind } = useFormState({
    name: str(initiative?.name), description: str(initiative?.description), ownerId: str(initiative?.ownerId),
    status: initiative?.status ?? "TO_CONFIRM", phase: str(initiative?.phase), objective: str(initiative?.objective),
    mvp: str(initiative?.mvp), dueDate: str(initiative?.dueDate), risk: str(initiative?.risk), nextAction: str(initiative?.nextAction),
  }, open);
  const save = useAppMutation((b: Record<string, unknown>) => (editing ? api.initiatives.update(initiative!.id, b) : api.initiatives.create(b)),
    { success: "Guardado", onSuccess: () => onOpenChange(false) });
  return (
    <Modal open={open} onOpenChange={onOpenChange} size="lg" title={editing ? "Editar iniciativa" : "Nueva iniciativa"}
      footer={<><Button variant="ghost" onClick={() => onOpenChange(false)}>Cancelar</Button><Button loading={save.isPending} disabled={!values.name?.trim()} onClick={() => save.mutate(cleanForm(values))}>Guardar</Button></>}
    >
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <Field label="Nombre *" className="sm:col-span-2"><Input autoFocus {...bind("name")} /></Field>
        <Field label="Estado"><EnumSelect labels={INITIATIVE_STATUS_LABELS} allowEmpty={false} {...bind("status")} /></Field>
        <Field label="Fase"><Input {...bind("phase")} /></Field>
        <Field label="Responsable"><PersonSelect {...bind("ownerId")} /></Field>
        <Field label="Fecha objetivo"><Input type="date" {...bind("dueDate")} /></Field>
        <Field label="Objetivo" className="sm:col-span-2"><Textarea {...bind("objective")} /></Field>
        <Field label="MVP" className="sm:col-span-2"><Input {...bind("mvp")} /></Field>
        <Field label="Riesgo"><Input {...bind("risk")} /></Field>
        <Field label="Siguiente acción"><Input {...bind("nextAction")} /></Field>
        <Field label="Descripción" className="sm:col-span-2"><Textarea {...bind("description")} /></Field>
      </div>
    </Modal>
  );
}

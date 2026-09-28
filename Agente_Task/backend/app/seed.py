"""Initial data. Run from backend/:  python -m app.seed          (only if the DB is empty)
                                    python -m app.seed --reset  (wipes every collection first)

Unknown business data is stored as null ("Por confirmar") and turned into open questions —
nothing is invented (owners, dates, hours, build numbers, failure counts…)."""
import argparse

from app import repositories as repos
from app.domain.enums import CreatedBy, HistorySource
from app.domain.models import (
    Action, Activity, AppSettings, Blocker, Build, HistoryEntry, Initiative, OpenQuestion, Person,
    Project, PullRequest, Risk,
)
from app.services.changes import display_name
from app.utils.text import new_id

SEED_COMMENT = "Carga inicial (seed)"


def people() -> list[Person]:
    return [
        Person(id="per_rodrigo", name="Rodrigo", role="Lead / Coordinación Automatización", team="MTP / BBVA",
               specialties=["Coordinación", "Automatización"], aliases=["Rodri"]),
        Person(id="per_jose_luis", name="José Luis", role="Automatización", aliases=["Jose Luis", "JL"],
               specialties=["Automatización"]),
        Person(id="per_hector_yair", name="Héctor Yair", role="Automatización / iniciativas",
               aliases=["Yair", "Hector", "Héctor", "Hector Yair"], specialties=["Automatización", "Iniciativas"]),
        Person(id="per_itw", name="ITW", role="Equipo externo / colaboración", kind="EXTERNAL",
               specialties=["Jira Xray"], aliases=["ITW"]),
    ]


def projects() -> list[Project]:
    return [
        Project(id="prj_redoc", name="Redocumentación / KYC Redocumentation Model", jira_id="GLOMOMX-270596",
                status="ACTIVE", aliases=["Redocumentación", "Redocumentacion", "KYC", "Redocumentation"]),
        Project(id="prj_upgrade", name="Upgrade Foreigners", jira_id="GLOMOMX-267103", status="ACTIVE",
                aliases=["Upgrade", "Foreigners"],
                description="Cambios en elementos utilizados por la automatización provocaron mantenimiento."),
        Project(id="prj_difo", name="DIFO Funds Pending MX", jira_id="GLOMOMX-295865", status="ACTIVE",
                aliases=["DIFO", "Funds Pending"]),
        Project(id="prj_dtrewards", name="DT Rewards", status="ACTIVE", aliases=["DT Rewards", "Rewards"]),
        Project(id="prj_dep_q3", name="DEP Q3 bloqueada", kind="DEPENDENCY", quarter="Q3", status="BLOCKED",
                aliases=["DEP Q3", "Q3"],
                description="Dependencia de Q3 sin respuesta de la Scrum. Nombre/Jira por confirmar."),
        Project(id="prj_q4", name="Dependencias Q4 (por levantar)", kind="DEPENDENCY", quarter="Q4",
                status="TO_CONFIRM", aliases=["Q4", "Dependencias Q4"],
                description=("Existen 4 dependencias propias de automatización, además de dependencias compartidas "
                             "con manual y dependencias a las que se estimó un porcentaje de automatización. "
                             "Falta levantar el detalle de cada una.")),
    ]


def initiatives() -> list[Initiative]:
    gema_common = dict(status="TO_CONFIRM", phase="Levantamiento")
    return [
        Initiative(id="ini_xray", name="Jira Xray Pilot", status="IN_PROGRESS", phase="Piloto",
                   aliases=["Xray", "Piloto Xray", "Jira Xray"], collaborators=["per_itw"],
                   objective="Asociar tests automatizados con tests manuales en Jira Xray.",
                   description=("Flujo objetivo: Manual Test → Automated Test → Execution → PASS/FAIL → Evidence. "
                                "Posteriormente explorar integración CI/CD."),
                   next_action="Definir el mapeo Manual Test ↔ Automated Test con ITW."),
        Initiative(id="ini_gema_factibilidad", name="GEMA Análisis de Factibilidad", aliases=["GEMA Factibilidad"], **gema_common),
        Initiative(id="ini_gema_defectos", name="GEMA Defectos", aliases=["GEMA Defectos"], **gema_common),
        Initiative(id="ini_gema_cps", name="GEMA Diseño de CPs", aliases=["GEMA CPs", "Diseño de CPs"], **gema_common),
        Initiative(id="ini_gema_gherkins", name="GEMA Creación de Gherkins", aliases=["GEMA Gherkins"], **gema_common),
        Initiative(id="ini_jira_sheets", name="Jira Bugs → Google Sheets", status="NOT_STARTED", phase="MVP por iniciar",
                   aliases=["Jira Sheets", "Bugs Sheets", "Google Sheets"],
                   objective="Extraer bugs desde Jira y reflejarlos en Google Sheets, con la información lo más actualizada posible.",
                   mvp="Hoja con bugs de Jira actualizada automáticamente.",
                   next_action="Definir campos, fuente y frecuencia de actualización."),
    ]


def activities() -> list[Activity]:
    return [
        Activity(
            id="act_redoc", title="Redocumentación – Cierre PR 9492", type="Cierre PR", project_dependency_id="prj_redoc",
            status="VALIDATION", technical_status="Automatización lista / revisión",
            aliases=["Redocumentación", "Redocumentacion", "KYC", "9492"],
            description=("Se resolvieron comentarios anteriores. Se han ejecutado múltiples builds correctamente. "
                         "La ejecución más reciente observada se encontraba en progreso. "
                         "Se está esperando regresión/revisión para autorización."),
            waiting_for="Regresión / revisión para autorización",
            next_action="Confirmar resultado de última ejecución/regresión. Si pasa, confirmar VoBo y merge.",
            risk_reason="Debe entrar en la ventana de release (fecha por confirmar).",
        ),
        Activity(
            id="act_upgrade", title="Upgrade Foreigners – Cierre PR 9424", type="Mantenimiento / Cierre PR",
            project_dependency_id="prj_upgrade", status="VALIDATION",
            technical_status="Mantenimiento realizado / validación pendiente",
            aliases=["Upgrade", "Foreigners", "9424"],
            description="Cambios en elementos utilizados por la automatización provocaron mantenimiento.",
            next_action="Confirmar si los últimos builds Passed cierran el mantenimiento o falta otra validación antes del merge.",
            risk_reason="Debe entrar en la ventana de release (fecha por confirmar).",
        ),
        Activity(
            id="act_difo", title="DIFO – Cierre PR 9792", type="Cierre PR", project_dependency_id="prj_difo",
            status="VALIDATION", technical_status="Automatización terminada / en observación por comentarios",
            aliases=["DIFO", "Funds Pending", "9792"],
            description="Automatización terminada. PR continúa abierta. Se mantiene en observación por posibles comentarios.",
            next_action="Confirmar qué condición falta para aprobación/merge.",
            risk_reason="Debe entrar en la ventana de release (fecha por confirmar).",
        ),
        Activity(
            id="act_dtrewards", title="DT Rewards – Cierre PR 9664", type="Cierre PR", project_dependency_id="prj_dtrewards",
            status="VALIDATION", technical_status="Automatización terminada / revisión",
            aliases=["DT Rewards", "Rewards", "9664"],
            description=("Pendiente de regresión/autorización. Existe información previa de fallos de Gherkins "
                         "que debe confirmarse antes de tomarla como estado actual."),
            waiting_for="Regresión / autorización",
            next_action="Confirmar última regresión y clasificar cualquier fallo (Automation, Functional, Environment, Data, Service).",
            risk_reason="Debe entrar en la ventana de release (fecha por confirmar).",
        ),
        Activity(
            id="act_gema_c204", title="Construcción GEMA – C204 (Gherkin adicional)", type="Construcción / innovación",
            owner_id="per_hector_yair", status="IN_PROGRESS", requester="Scrum",
            aliases=["Construcción Yair", "Construccion Yair", "C204", "Construcción GEMA", "GEMA C204"],
            description=("La Scrum solicitó recientemente modificar el C204 automatizado agregando un Gherkin adicional. "
                         "Además, una construcción de Yair ha tenido problemas relacionados con rama/permisos del "
                         "repositorio; no está confirmado que sea el mismo bloqueo."),
            next_action="Aclarar si el problema de rama/permisos afecta a esta construcción.",
        ),
        Activity(
            id="act_xray", title="Piloto Jira Xray", type="Iniciativa / piloto", initiative_id="ini_xray",
            status="IN_PROGRESS", support_people=["per_itw"], aliases=["Xray", "Jira Xray", "Piloto Xray"],
            description=("Objetivo: asociar tests automatizados con tests manuales en Jira Xray. "
                         "Flujo: Manual Test → Automated Test → Execution → PASS/FAIL → Evidence. "
                         "Debe permitir posteriormente explorar integración CI/CD. Colaboración con ITW."),
            next_action="Definir el mapeo Manual Test ↔ Automated Test con ITW.",
        ),
        Activity(
            id="act_dep_q3", title="Definir destino de DEP Q3 bloqueada", type="Dependencia",
            project_dependency_id="prj_dep_q3", status="IN_PROGRESS", blocked=True, blocker_id="blk_dep_q3",
            aliases=["DEP Q3", "Q3"],
            description=("Se contactó a la Scrum varias veces sin respuesta. También se dejó comentario en Jira, "
                         "sin respuesta. Fecha del último contacto por confirmar."),
            waiting_for="Respuesta/decisión de la Scrum",
            next_action="Escalar o solicitar decisión formal: Continuar / Replanificar / Cerrar.",
        ),
        Activity(
            id="act_q4", title="Levantar información de dependencias Q4", type="Planeación",
            project_dependency_id="prj_q4", status="PENDING", aliases=["Q4", "Dependencias Q4"],
            description=("Existen 4 dependencias propias de automatización, dependencias compartidas con manual y "
                         "dependencias con porcentaje estimado de automatización. Falta levantar: nombre, Scrum, "
                         "reporter, fecha inicio, fecha entrega, horas estimadas, horas asignadas, alcance de "
                         "automatización, estado y riesgos."),
            next_action="Levantar el detalle de las 4 dependencias propias de automatización.",
        ),
        Activity(
            id="act_capacity", title="Levantar capacidad real de automatización", type="Planeación / capacidad",
            status="PENDING", aliases=["Capacidad", "FTE"],
            description=("Se reportó que oficialmente el equipo de automatización tiene una capacidad muy reducida. "
                         "No asumir número de FTE disponibles. Datos requeridos: persona, horas disponibles, horas "
                         "asignadas, actividades, mantenimiento, construcción, iniciativas, Q4."),
            next_action="Recopilar horas disponibles y asignadas por persona.",
        ),
        Activity(
            id="act_jira_sheets", title="MVP Jira Bugs → Google Sheets", type="Iniciativa / MVP",
            initiative_id="ini_jira_sheets", status="PENDING", aliases=["Jira Sheets", "Google Sheets"],
            description="Extraer bugs desde Jira y reflejarlos en Google Sheets con la información lo más actualizada posible.",
            next_action="Definir campos, fuente y frecuencia.",
        ),
    ]


def actions() -> list[Action]:
    spec: dict[str, list[tuple[str, str]]] = {
        "act_redoc": [
            ("Resolver comentarios anteriores de la PR", "DONE"),
            ("Ejecutar builds de validación", "DONE"),
            ("Confirmar resultado de la última ejecución/regresión", "PENDING"),
            ("Obtener VoBo", "PENDING"),
            ("Merge", "PENDING"),
            ("Cerrar actividad", "PENDING"),
        ],
        "act_upgrade": [
            ("Mantenimiento por cambios en elementos usados por la automatización", "DONE"),
            ("Ejecutar builds tras el mantenimiento (#51–#53 Passed)", "DONE"),
            ("Confirmar si falta otra validación antes del merge", "PENDING"),
            ("Obtener VoBo", "PENDING"),
            ("Merge", "PENDING"),
            ("Cerrar actividad", "PENDING"),
        ],
        "act_difo": [
            ("Automatización terminada", "DONE"),
            ("Ejecutar build", "DONE"),
            ("Build Passed", "DONE"),
            ("Revisar comentarios", "PENDING"),
            ("Obtener VoBo", "PENDING"),
            ("Merge", "PENDING"),
            ("Ejecución post-merge", "PENDING"),
            ("Cerrar actividad", "PENDING"),
        ],
        "act_dtrewards": [
            ("Confirmar resultado de la última regresión", "PENDING"),
            ("Clasificar fallos (Automation / Functional / Environment / Data / Service)", "PENDING"),
            ("Obtener autorización", "PENDING"),
            ("Merge", "PENDING"),
        ],
        "act_gema_c204": [
            ("Agregar Gherkin adicional al C204 automatizado", "PENDING"),
            ("Aclarar si el problema de rama/permisos del repositorio afecta esta construcción", "PENDING"),
        ],
        "act_xray": [
            ("Asociar Manual Test ↔ Automated Test", "PENDING"),
            ("Registrar Execution con resultado PASS/FAIL", "PENDING"),
            ("Adjuntar Evidence a la ejecución", "PENDING"),
            ("Explorar integración CI/CD", "PENDING"),
        ],
        "act_dep_q3": [
            ("Contactar a la Scrum (varios intentos)", "DONE"),
            ("Dejar comentario en Jira", "DONE"),
            ("Escalar o solicitar decisión formal: Continuar / Replanificar / Cerrar", "PENDING"),
        ],
        "act_q4": [
            ("Levantar nombre, Scrum y reporter de cada dependencia", "PENDING"),
            ("Levantar fechas de inicio y entrega", "PENDING"),
            ("Levantar horas estimadas y asignadas", "PENDING"),
            ("Definir alcance de automatización, estado y riesgos", "PENDING"),
            ("Identificar dependencias compartidas con manual y % de automatización", "PENDING"),
        ],
        "act_capacity": [
            ("Levantar horas disponibles por persona", "PENDING"),
            ("Levantar horas asignadas por persona", "PENDING"),
            ("Clasificar carga: mantenimiento / construcción / iniciativas / Q4", "PENDING"),
        ],
        "act_jira_sheets": [
            ("Definir campos", "PENDING"),
            ("Definir fuente", "PENDING"),
            ("Definir frecuencia de actualización", "PENDING"),
            ("Evaluar automatización / API / integración", "PENDING"),
        ],
    }
    out = []
    for activity_id, items in spec.items():
        for order, (title, status) in enumerate(items):
            out.append(Action(
                id=f"acn_{activity_id[4:]}_{order}", activity_id=activity_id, title=title, status=status,
                order=order, created_by=CreatedBy.SYSTEM,
            ))
    return out


def pull_requests() -> list[PullRequest]:
    return [
        PullRequest(
            id="pr_9492", activity_id="act_redoc", project_id="prj_redoc", project="Redocumentación",
            pull_request_number="9492", jira_ref="GLOMOMX-270596", title="Redocumentación / KYC Redocumentation Model",
            status="OPEN", automation_status="COMPLETED", build_status="IN_PROGRESS", regression_status="PENDING",
            approval_status="PENDING", merge_status="NOT_MERGED",
            next_action="Confirmar resultado de última ejecución/regresión. Si pasa, confirmar VoBo y merge.",
            notes="Se resolvieron comentarios anteriores. Múltiples builds correctos (números por confirmar). "
                  "La ejecución más reciente observada estaba en progreso.",
        ),
        PullRequest(
            id="pr_9424", activity_id="act_upgrade", project_id="prj_upgrade", project="Upgrade Foreigners",
            pull_request_number="9424", jira_ref="GLOMOMX-267103", title="Upgrade Foreigners",
            status="OPEN", automation_status="IN_REVIEW", latest_build=53, build_status="PASSED",
            regression_status="UNKNOWN", approval_status="UNKNOWN", merge_status="NOT_MERGED",
            builds=[Build(number=50, status="FAILED"), Build(number=51, status="PASSED"),
                    Build(number=52, status="PASSED"), Build(number=53, status="PASSED")],
            next_action="Confirmar si los builds Passed cierran el mantenimiento o falta otra validación antes del merge.",
            notes="Mantenimiento realizado / validación pendiente. No marcar como finalizada.",
        ),
        PullRequest(
            id="pr_9792", activity_id="act_difo", project_id="prj_difo", project="DIFO",
            pull_request_number="9792", jira_ref="GLOMOMX-295865", title="DIFO Funds Pending MX",
            status="OPEN", automation_status="COMPLETED", latest_build=7, build_status="PASSED",
            regression_status="UNKNOWN", approval_status="PENDING", merge_status="NOT_MERGED",
            builds=[Build(number=4, status="FAILED"), Build(number=5, status="PASSED"),
                    Build(number=6, status="PASSED"), Build(number=7, status="PASSED")],
            next_action="Confirmar qué condición falta para aprobación/merge.",
            notes="Se mantiene en observación por posibles comentarios.",
        ),
        PullRequest(
            id="pr_9664", activity_id="act_dtrewards", project_id="prj_dtrewards", project="DT Rewards",
            pull_request_number="9664", title="DT Rewards", status="OPEN", automation_status="IN_REVIEW",
            build_status="UNKNOWN", regression_status="PENDING", approval_status="PENDING", merge_status="NOT_MERGED",
            next_action="Confirmar última regresión y clasificar fallos.",
            notes="Existe información previa de fallos de Gherkins; la cantidad actual está por confirmar.",
        ),
    ]


def blockers() -> list[Blocker]:
    return [
        Blocker(id="blk_dep_q3", activity_id="act_dep_q3", type="SCRUM",
                description="Sin respuesta de la Scrum tras varios contactos y comentario en Jira.",
                responsible="Scrum (por confirmar)", waiting_for="Respuesta/decisión de la Scrum",
                blocked_since=None, status="OPEN"),
    ]


def risks() -> list[Risk]:
    return [
        Risk(id="rsk_release_window", title="PRs fuera de la ventana de release",
             description=("Existen PR que deben cerrarse/mergearse dentro de la ventana de release. Si no entran, "
                          "pueden desplazarse a una ventana posterior. Fecha exacta y siguiente ventana por confirmar."),
             related_pr_ids=["pr_9492", "pr_9424", "pr_9792", "pr_9664"],
             related_activity_ids=["act_redoc", "act_upgrade", "act_difo", "act_dtrewards"],
             mitigation="Confirmar fecha de la ventana y priorizar aprobaciones/merge."),
        Risk(id="rsk_capacity", title="Capacidad de automatización reducida",
             description=("Se reportó que oficialmente el equipo de automatización tiene una capacidad muy reducida. "
                          "Número de FTE disponibles por confirmar."),
             related_activity_ids=["act_capacity"],
             mitigation="Levantar capacidad real por persona."),
    ]


def questions() -> list[OpenQuestion]:
    def q(qid, activity_id, text, field=None, group=None, entity_type="activity", entity_id=None):
        return OpenQuestion(id=f"q_{qid}", entity_type=entity_type, entity_id=entity_id or activity_id,
                            activity_id=activity_id, question=text, field=field, group=group)

    return [
        q("upgrade_validation", "act_upgrade",
          "¿Los últimos builds Passed confirman que el mantenimiento quedó solucionado o falta otra validación antes del merge?"),
        q("redoc_last_run", "act_redoc", "¿Cuál fue el resultado de la última ejecución/regresión de Redocumentación (PR 9492)?"),
        q("difo_merge", "act_difo", "¿Qué condición falta para la aprobación/merge de la PR 9792 de DIFO?"),
        q("dtrewards_regression", "act_dtrewards",
          "¿Cuál fue el resultado de la última regresión de DT Rewards (total / pasados / fallidos)?"),
        q("gema_same_blocker", "act_gema_c204",
          "¿El problema de rama/permisos del repositorio de Yair es el mismo que afecta la modificación del C204, o son situaciones distintas?"),
        q("dep_q3_last_contact", "act_dep_q3", "¿Cuándo fue el último contacto con la Scrum de DEP Q3?", field="blockedSince"),
        q("dep_q3_identity", "act_dep_q3", "¿Cuál es el nombre/ID de Jira de la DEP Q3 bloqueada y quién es su Scrum?"),
        q("pr_owners", "act_redoc", "¿Quién es el responsable de cada PR abierta (9492, 9424, 9792, 9664)?",
          field="ownerId", group="PR"),
        q("release_window", None, "¿Cuál es la fecha exacta de la ventana de release y cuál es la siguiente ventana?",
          group="Release", entity_type="risk", entity_id="rsk_release_window"),
        q("team_members", None, "¿A qué equipo pertenecen José Luis y Héctor Yair?", field="team", group="Personas",
          entity_type="person", entity_id="per_jose_luis"),
        q("q4_details", "act_q4",
          "Q4: ¿nombre, Scrum, reporter, fechas, horas estimadas/asignadas, alcance, estado y riesgos de las 4 dependencias propias?",
          group="Q4"),
        q("q4_shared", "act_q4", "Q4: ¿cuáles dependencias son compartidas con manual y qué % de automatización se estimó?",
          group="Q4"),
        q("capacity_hours", "act_capacity", "¿Cuántas horas disponibles por semana tiene cada persona del equipo?",
          field="availableHours", group="Capacidad"),
        q("gema_owners", None, "¿Quién es responsable de las iniciativas GEMA y cuáles son sus fechas objetivo?",
          group="GEMA", entity_type="initiative", entity_id="ini_gema_factibilidad"),
        q("xray_owner", "act_xray", "¿Quién es el responsable interno del Piloto Jira Xray?", field="ownerId"),
    ]


def seed_history(entities: list[tuple[str, object]]) -> list[HistoryEntry]:
    out = []
    for etype, e in entities:
        out.append(HistoryEntry(
            id=new_id("h"), entity_type=etype, entity_id=e.id, entity_name=display_name(etype, e),
            activity_id=e.id if etype == "activity" else getattr(e, "activity_id", None),
            field="_created", new_value=display_name(etype, e), comment=SEED_COMMENT,
            source=HistorySource.SEED, created_by=CreatedBy.SYSTEM,
        ))
    observed = [
        ("pr_9424", "act_upgrade", "PR 9424 · Upgrade Foreigners", "FAILED", "PASSED", "Build #50 Failed → #51 Passed (fecha por confirmar)"),
        ("pr_9792", "act_difo", "PR 9792 · DIFO Funds Pending MX", "FAILED", "PASSED", "Build #4 Failed → #5 Passed (fecha por confirmar)"),
    ]
    for pr_id, act_id, name, old, new, comment in observed:
        out.append(HistoryEntry(
            id=new_id("h"), entity_type="pull_request", entity_id=pr_id, entity_name=name, activity_id=act_id,
            field="buildStatus", old_value=old, new_value=new, comment=f"Histórico observado: {comment}",
            source=HistorySource.SEED, created_by=CreatedBy.SYSTEM,
        ))
    return out


def run(reset: bool) -> None:
    existing = repos.activities.all()
    if existing and not reset:
        print(f"La base ya tiene {len(existing)} actividades. Usa --reset para borrar y recargar.")
        return
    if reset:
        for repo in repos.ALL_REPOS:
            n = repo.delete_all()
            print(f"  borrados {n:>4} docs de {repo.collection}")

    data = {
        "person": people(), "project": projects(), "initiative": initiatives(), "activity": activities(),
        "action": actions(), "pull_request": pull_requests(), "blocker": blockers(), "risk": risks(),
    }
    for etype, items in data.items():
        repos.REPOS[etype].save_many(items)
        print(f"  {len(items):>3} {etype}")
    qs = questions()
    repos.questions.save_many(qs)
    print(f"  {len(qs):>3} question")
    repos.app_settings.save(AppSettings(id="app", current_user_id="per_rodrigo"))
    tracked = [(etype, e) for etype in ("person", "project", "initiative", "activity", "pull_request", "blocker", "risk")
               for e in data[etype]]
    hist = seed_history(tracked)
    repos.history.save_many(hist)
    print(f"  {len(hist):>3} history")
    print("Seed completado. Si el backend estaba corriendo, reinícialo para recargar su caché.")


def main() -> None:
    parser = argparse.ArgumentParser(description="Carga los datos iniciales en Firestore.")
    parser.add_argument("--reset", action="store_true", help="Borra todas las colecciones antes de cargar.")
    parser.add_argument("--yes", action="store_true", help="No pedir confirmación con --reset.")
    args = parser.parse_args()
    if args.reset and not args.yes:
        answer = input("⚠️  --reset borra TODOS los datos de Firestore (incluido el historial). ¿Continuar? [s/N] ")
        if answer.strip().lower() not in ("s", "si", "sí", "y", "yes"):
            print("Cancelado.")
            return
    run(args.reset)


if __name__ == "__main__":
    main()

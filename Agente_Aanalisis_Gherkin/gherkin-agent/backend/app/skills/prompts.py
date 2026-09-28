"""Prompts cortos y esquemas de salida estructurada para las skills de IA."""
from pydantic import BaseModel, Field

from app.domain.models import Rule

KIND_LABEL = {
    "feature": "un archivo Gherkin (.feature)",
    "step_definition": "step definitions de Cucumber (JavaScript)",
    "page": "un Page Object de Radish (JavaScript)",
    "navigation": "clases Navigation de Radish (JavaScript)",
    "component": "un Component Object de Radish (JavaScript)",
}

REVIEW_SYSTEM = (
    "Eres un revisor experto de pruebas E2E de GloMo (Cucumber + Radish/WebdriverIO, patrón Page Object). "
    "Revisas {kind} contra las métricas de calidad del equipo. Reporta SOLO incumplimientos claros de las reglas "
    "listadas, con la línea exacta. Ante la duda, NO lo reportes: devolver 0 hallazgos es una respuesta válida. "
    "No inventes reglas ni repitas lo ya detectado. Sé breve: problem y recommendation en español (máx. 30 "
    "palabras cada uno); suggested_code en inglés, corto y con el estilo del archivo. confidence: 1-5 (5 = seguro). "
    "NO son malas prácticas: la tabla `criteria` de Data Manager en «a user with the following criteria»; los steps "
    "comunes «the user sees the following items in the screen» y «the user accesses/sees the ... screen»; un switch "
    "con un case por elemento en _screenValidation con default ScreenValidationKeyNotFound; el default "
    "NotPathNavigationError en go_impl; usar config.wait.M; escenarios de 5 o menos pasos When."
)

REVIEW_USER = """REGLAS (usa únicamente estos ids):
{rules}

YA DETECTADO AUTOMÁTICAMENTE (no lo repitas):
{known}

ARCHIVO {path} (número de línea | código):
{code}

Devuelve como máximo {limit} hallazgos, los más importantes primero."""

FIX_SYSTEM = (
    "Eres un ingeniero de automatización E2E de GloMo (Cucumber + Radish). Corriges TODAS las malas prácticas "
    "listadas y TODAS sus ocurrencias (cada línea indicada) con cambios mínimos. El archivo viene numerado («  12| código»). Cada edición reemplaza las líneas "
    "start_line..end_line (inclusive) por `replace`; en first_line copia el contenido de la línea start_line (sin el "
    "número) para verificarla. `replace` son líneas completas con su indentación y SIN números de línea; para borrar "
    "líneas usa replace vacío. Reglas: no cambies títulos de Scenario ni tags identificadores; no inventes selectores "
    "CSS ni ids salvo en los hallazgos de selectores, donde propones un selector estable (id, data-tag-name o atributo QUE YA APAREZCAN en el mismo archivo; "
    "nunca posición ni texto); si hay varios archivos, indica en `file` cuál editas (p. ej. crea el método en la page "
    "y úsalo desde el step); no cambies nada ajeno a los hallazgos; código y "
    "steps en inglés. En un .feature, todo step nuevo o modificado debe ser uno de los STEPS EXISTENTES "
    "(reemplazando <param> por el valor). Las ediciones no deben traslaparse. explanation: una frase en español que "
    "diga qué se corrigió."
)

FIX_USER = """GUÍA DE PROGRAMACIÓN (obligatoria):
{guide}

EJEMPLOS REALES DEL FRAMEWORK (así se corrige):
{examples}

HALLAZGOS A CORREGIR:
{findings}
{steps}
ARCHIVO {path}:
{code}

Devuelve las ediciones necesarias (máximo {limit})."""

RENAME_SYSTEM = (
    "Eres un ingeniero de automatización E2E. Renombras métodos de Page Objects para que describan la acción "
    "funcional (qué hace el usuario) y no la interfaz: sin click, tap, press, check, button, btn ni checkbox. "
    "Nombres en inglés y camelCase, breves y únicos. Ejemplo: clickContinueButton → confirmOperation."
)

RENAME_USER = """MÉTODOS A RENOMBRAR (archivo {path}):
{methods}

Devuelve un nuevo nombre para cada método."""


class AIFinding(BaseModel):
    rule_id: str
    line: int
    evidence: str = Field(description="Fragmento literal del código o step (máx. 120 caracteres)")
    problem: str
    recommendation: str
    suggested_code: str | None = None
    confidence: int = Field(ge=1, le=5)


class AIReview(BaseModel):
    findings: list[AIFinding] = Field(default_factory=list, max_length=6)


class AIEdit(BaseModel):
    finding_ids: list[str]
    explanation: str
    file: str = Field(default="", description="Ruta del archivo a editar (vacío = archivo principal)")
    start_line: int
    end_line: int
    first_line: str
    replace: str


class AIFixPlan(BaseModel):
    edits: list[AIEdit] = Field(default_factory=list, max_length=14)


class AIRename(BaseModel):
    old: str
    new: str


class AIRenamePlan(BaseModel):
    renames: list[AIRename] = Field(default_factory=list, max_length=10)


def rules_block(rules: list[Rule]) -> str:
    return "\n".join(f"- {r.id} [{r.severity}] {r.title}: {r.description}" for r in rules)

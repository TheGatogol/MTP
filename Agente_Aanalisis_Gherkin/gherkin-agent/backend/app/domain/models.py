"""Modelos Pydantic. Se serializan en camelCase para el frontend."""
from typing import Literal

from pydantic import BaseModel, ConfigDict, Field
from pydantic.alias_generators import to_camel

Severity = Literal["HIGH", "MEDIUM", "LOW"]
FileKind = Literal["feature", "step_definition", "page", "navigation", "component", "other"]
SEVERITY_ORDER = {"HIGH": 0, "MEDIUM": 1, "LOW": 2}
SEVERITY_WEIGHT = {"HIGH": 10, "MEDIUM": 4, "LOW": 1}


class CamelModel(BaseModel):
    model_config = ConfigDict(alias_generator=to_camel, populate_by_name=True)

    def dump(self) -> dict:
        return self.model_dump(by_alias=True, mode="json")


# ─── Gherkin ─────────────────────────────────────────────────────────────────


class Step(CamelModel):
    keyword: str                      # Given / When / Then / And / But / *
    effective: str                    # given / when / then (And/But heredan)
    text: str
    line: int
    table: list[list[str]] | None = None
    table_line: int | None = None


class Examples(CamelModel):
    line: int
    tags: list[str] = []
    header: list[str] = []
    rows: list[list[str]] = []


class Scenario(CamelModel):
    kind: str                         # Scenario / Scenario Outline / Background
    name: str
    line: int
    tags: list[str] = []
    tag_lines: list[int] = []
    steps: list[Step] = []
    examples: list[Examples] = []

    @property
    def id_tag(self) -> str | None:
        from app.framework.gherkin import scenario_id
        return scenario_id(self.tags)


class FeatureDoc(CamelModel):
    path: str
    name: str
    line: int
    tags: list[str] = []
    tag_lines: list[int] = []
    background: Scenario | None = None
    scenarios: list[Scenario] = []


class FeatureEntry(CamelModel):
    """Entrada ligera del índice para el buscador."""
    path: str
    name: str
    file_name: str
    epic: str
    tags: list[str] = []
    scenario_ids: list[str] = []
    scenarios: int = 0


# ─── Relación feature → código ───────────────────────────────────────────────


class StepDef(CamelModel):
    id: str
    file: str
    line: int
    end_line: int
    keyword: str
    pattern: str
    kind: Literal["regex", "expression"]
    body: str


class StepMatch(CamelModel):
    scenario: str
    line: int
    keyword: str
    text: str
    status: Literal["ok", "undefined", "ambiguous"]
    step_def_ids: list[str] = []
    navigations: list[str] = []
    current_page: str | None = None
    validates_screen: bool = False


class RelatedFile(CamelModel):
    path: str
    kind: FileKind
    role: Literal["principal", "compartido"] = "principal"
    reason: str = ""
    lines: int = 0


# ─── Reglas y hallazgos ──────────────────────────────────────────────────────


class Rule(CamelModel):
    id: str
    title: str
    description: str
    category: str
    applies_to: list[FileKind]
    severity: Severity
    check: Literal["code", "ai", "code+ai", "manual"]
    fix: Literal["auto", "ai", "manual"] = "ai"
    source: str
    recommendation: str
    example_bad: str | None = None
    example_good: str | None = None
    manual_reason: str | None = None


class Finding(CamelModel):
    id: str = ""
    rule_id: str
    title: str = ""
    category: str = ""
    severity: Severity = "MEDIUM"
    file: str
    line: int | None = None
    lines: list[int] = []            # otras líneas con la misma mala práctica (agrupadas)
    evidence: str = ""
    message: str = ""
    recommendation: str = ""
    example_good: str | None = None
    suggested_code: str | None = None
    source: Literal["reglas", "ia"] = "reglas"
    fix: Literal["auto", "ai", "manual"] = "ai"
    manual_reason: str | None = None
    doc: str = ""
    resolved_by_fix: bool = False


class FileFix(CamelModel):
    file: str
    action: Literal["edit", "delete"] = "edit"      # delete = retirar carpeta(s) de grabación (con respaldo)
    paths: list[str] = []                            # carpetas a retirar cuando action = delete
    kind: FileKind
    original_hash: str
    newline: str = "\n"
    original: str
    proposed: str
    diff: str
    finding_ids: list[str] = []
    changes: list[str] = []
    warnings: list[str] = []
    generated_by: str = "reglas"
    applied: bool = False
    applied_at: str | None = None
    backup_id: str | None = None


# ─── Reporte ─────────────────────────────────────────────────────────────────


class SkillRun(CamelModel):
    name: str
    label: str
    status: Literal["pending", "running", "done", "skipped", "error"] = "pending"
    ms: int | None = None
    detail: str = ""


class Summary(CamelModel):
    score: int = 100
    level: Literal["ok", "warning", "critical"] = "ok"
    counts: dict[str, int] = Field(default_factory=lambda: {"HIGH": 0, "MEDIUM": 0, "LOW": 0})
    by_file: dict[str, int] = {}
    by_category: dict[str, int] = {}
    text: str = ""


class AnalysisReport(CamelModel):
    id: str
    feature_path: str                 # archivo analizado (.feature o .js)
    feature_name: str = ""
    target_type: Literal["feature", "js"] = "feature"
    status: Literal["running", "done", "error"] = "running"
    created_at: str
    finished_at: str | None = None
    content_hash: str = ""
    signature: str = ""
    model: str | None = None
    ai_used: bool = False
    skills: list[SkillRun] = []
    related: list[RelatedFile] = []
    matches: list[StepMatch] = []
    findings: list[Finding] = []
    fixes: list[FileFix] = []
    summary: Summary = Field(default_factory=Summary)
    warnings: list[str] = []
    error: str | None = None

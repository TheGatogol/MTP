# MTP Gherkin Agent

Analiza un archivo `.feature` del framework E2E de GloMo **y sus documentos relacionados** (step definitions,
navigations y pages), detecta las malas prácticas según las métricas de `MetricasCodigo`, recomienda cómo cumplir
cada métrica y **propone la corrección**, que se aplica solo si la confirmas.

- **100 % local.** La IA corre en Ollama (`qwen3:14b`) y no hay base de datos: los reportes, respaldos y configuración son archivos JSON en `data/`.
- **Sin IA sigue funcionando.** El motor de reglas y las correcciones exactas no dependen del modelo.

## Arquitectura

Es la misma de QA Task Agent (monolito modular FastAPI + React), sin Firestore.

```
┌───────────────────────┐  HTTP/JSON  ┌──────────────────────────────────────────────┐
│ Frontend (SPA)        │ ──────────► │ Backend FastAPI (Python 3.12)                │
│ React 19 + TS + Vite  │   polling   │  api/        rutas REST                      │
│ Tailwind 4, TanStack  │             │  framework/  índice, parser Gherkin/JS,      │
│ Query, cmdk           │             │              relación feature → código       │
└───────────────────────┘             │  metrics/    catálogo de reglas curado       │
                                      │  rules/      motor determinístico + fixers   │
                                      │  skills/     agentes cortos encadenados      │
                                      │  ai/         AIProvider → Ollama             │
                                      │  analysis/   jobs, caché, aplicar/revertir   │
                                      │  store.py    archivos JSON en data/          │
                                      └──────┬───────────────────────┬───────────────┘
                                             │ lee / escribe          │ HTTP local
                                             ▼                        ▼
                                  framework/glomo-mx/test/e2e   Ollama (qwen3:14b)
```

### Skills encadenadas

Cada skill hace una sola cosa. Al terminar devuelve el nombre de la siguiente, y la UI muestra el avance en vivo.

| # | Skill | Qué hace | IA |
|---|---|---|---|
| 1 | `buscar` | Localiza y lee el `.feature` | — |
| 2 | `relacionar` | Empareja cada step con su definición (regex y Cucumber Expressions), sigue las navegaciones hasta las pages y deduce la page actual en cada validación. Si nada cambió, usa la caché | — |
| 3 | `revisar_reglas` | Revisa unas 60 métricas verificables con código (≈100 ms) | — |
| 4 | `revisar_ia` | Revisa las métricas que requieren criterio, con fragmentos cortos y pocas reglas | ✔ |
| 5 | `estandarizar` | Une reglas e IA, quita duplicados y agrupa los repetidos | — |
| 6 | `recomendar` | Añade la recomendación y el ejemplo correcto de la métrica | — |
| 7 | `generar` | Aplica las correcciones exactas (fixers) y después pide a la IA ediciones buscar/reemplazar | ✔ |
| 8 | `validar` | Vuelve a pasar las reglas sobre el código corregido y confirma qué quedó resuelto | — |
| 9 | `reportar` | Calcula el puntaje, el semáforo y el resumen | — |

### Protecciones de la IA

La IA solo puede proponer cambios. Además, se descartan automáticamente las ediciones que:

- inventan o cambian selectores CSS;
- cambian títulos de escenario o tags identificadores (obligarían a regrabar);
- cambian el texto de un step definition (afectaría a otros features);
- dejan un step sin definición o duplican un step contiguo;
- reescriben demasiado código.

Los hallazgos de la IA con confianza menor a 4 de 5 se descartan. Las métricas que no se pueden juzgar de forma
fiable se marcan como **Revisión humana**.

## Requisitos

Python 3.12, Node 20 o superior y Ollama con `qwen3:14b`. Para máquinas con menos VRAM puedes usar `qwen3:8b` desde Configuración.

## Instalación e inicio

```powershell
cd C:\Users\rodri\OneDrive\Desktop\AgentesMtp\Agente_Aanalisis_Gherkin\gherkin-agent
.\scripts\setup.ps1     # venv + pip + npm + .env
.\scripts\start.ps1     # backend (8100) + frontend (5174) + navegador
```

- App: http://127.0.0.1:5174
- API: http://127.0.0.1:8100/docs

Los puertos no chocan con QA Task Agent (8000/5173). Las rutas del framework y de las métricas se detectan solas
(carpetas hermanas `framework/glomo-mx` y `MetricasCodigo`). Puedes cambiarlas en `backend/.env`.

## Uso

1. **Analizar**: abre el buscador (o pulsa `Ctrl+K`) y busca por nombre de archivo, épica, título, `@ID` o tag.
2. Al seleccionar el archivo empieza el análisis. Primero aparecen los hallazgos y después las correcciones.
3. Pestañas del resultado:
   - **Malas prácticas**: severidad, evidencia, recomendación, código sugerido y botón «Ver en el código».
   - **Corrección**: diff por archivo. **Aplicar corrección** pide confirmación y guarda un respaldo; también puedes **Revertir**.
   - **Feature**: el archivo con las líneas marcadas.
   - **Relacionados**: los archivos que usa el feature y los steps sin resolver.
4. **Métricas**: consulta el catálogo de reglas, con filtro por severidad y buscador.
5. **Historial**: consulta los análisis anteriores y las correcciones aplicadas.
6. **Configuración**: activa o desactiva la IA, elige el modelo, define cuántos archivos revisa la IA y reindexa el framework.

## Datos locales (`data/`)

| Archivo | Contenido |
|---|---|
| `settings.json` | Configuración de la UI |
| `reports/*.json`, `reports_index.jsonl` | Reportes, que también funcionan como caché |
| `backups/<id>/…` | Original de cada archivo antes de aplicar una corrección |
| `history.jsonl` | Correcciones aplicadas y revertidas |

## Extender

- **Nueva métrica** (por ejemplo, si llega un documento nuevo a `MetricasCodigo`): agrégala a `backend/app/metrics/catalog.json`.
- **Nueva regla determinística**: agrégala a `backend/app/metrics/catalog.json` y escribe el check con `@check("feature" | "step" | "page" | "navigation")` en `app/rules/`.
- **Corrección exacta**: agrega `@feature_fixer("ID")` o `@code_fixer("ID")` en `app/rules/fixers.py` y marca la regla con `"fix": "auto"`.
- **Nueva skill**: crea una clase `Skill` con `@register` en `app/skills/` y haz que la skill anterior devuelva su nombre.

## Troubleshooting

| Síntoma | Solución |
|---|---|
| «IA no disponible» | Abre Ollama o ejecuta `ollama serve`. Verifica `ollama pull qwen3:14b` |
| El primer análisis tarda | La primera vez se carga el modelo. El backend lo precarga al arrancar |
| Muy lento | En Configuración baja «Archivos de código por análisis» o desactiva «Revisar también código con IA» |
| «El archivo cambió desde el análisis» | Vuelve a analizar antes de aplicar la corrección |
| No ves cambios hechos fuera del agente | Usa Configuración → **Reindexar framework** |
| `npm install` lento o `EPERM` | OneDrive está sincronizando `node_modules`. Pausa la sincronización o mueve el proyecto a `C:\dev` |

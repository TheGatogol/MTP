# QA Task Agent

> **El agente administra el tablero. El usuario administra al agente.**

Herramienta de seguimiento operativo para equipos de QA y QA Automation. Le hablas en lenguaje natural
(«Upgrade ya pasó todos los tests y José Luis dice que ya quedó») y el agente:

1. identifica la actividad, PR o persona de la que hablas;
2. compara con el estado actual en la base de datos;
3. aplica los cambios **seguros** y registra cada uno en el historial;
4. deja los cambios **importantes** o las **inferencias** como confirmaciones pendientes;
5. pregunta la información que falta;
6. genera acciones de seguimiento y recomienda qué hacer después.

La IA es **100 % local** (Ollama). Ningún dato se envía a servicios externos de IA.

---

## Índice

- [Arquitectura](#arquitectura)
- [Requisitos](#requisitos)
- [Instalación rápida](#instalación-rápida)
- [Firebase](#firebase)
- [Ollama y modelo recomendado](#ollama-y-modelo-recomendado)
- [Variables de entorno](#variables-de-entorno)
- [Cómo iniciar](#cómo-iniciar)
- [Datos iniciales (seed)](#datos-iniciales-seed)
- [Uso](#uso)
- [Cómo funciona el agente](#cómo-funciona-el-agente)
- [Motor de reglas y semáforo](#motor-de-reglas-y-semáforo)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Modelo de datos (Firestore)](#modelo-de-datos-firestore)
- [API](#api)
- [Extender](#extender)
- [Seguridad](#seguridad)
- [Troubleshooting](#troubleshooting)

---

## Arquitectura

```
┌───────────────────────┐   HTTP/JSON   ┌──────────────────────────────────────────┐
│ Frontend (SPA)        │ ────────────► │ Backend FastAPI (Python 3.12)            │
│ React 19 + TS + Vite  │               │  api/            rutas REST              │
│ Tailwind 4            │               │  domain/         modelos Pydantic        │
│ Sin secretos          │               │  services/       CRUD, historial, KPIs   │
└───────────────────────┘               │  rules/          motor determinístico    │
                                        │  agent/          pipeline del agente     │
                                        │  ai/             AIProvider → Ollama     │
                                        │  repositories.py Firestore + caché       │
                                        └──────┬──────────────────────┬────────────┘
                                               │ Admin SDK            │ HTTP local
                                               ▼                      ▼
                                          Firestore             Ollama (qwen3:14b)
```

- **El frontend nunca habla con Firebase.** Solo el backend, con el Admin SDK. Las reglas de Firestore
  bloquean todo acceso de clientes.
- **Monolito modular.** Sin microservicios, sin CQRS, sin event sourcing. El historial es la colección
  `history`, escrita en el mismo punto donde se aplica cada cambio (`services/changes.py`).
- **Caché write-through.** Cada colección se lee una vez de Firestore y queda en memoria. Las escrituras
  van primero a Firestore y luego a la caché. Así se consumen pocas lecturas del plan gratuito y las
  reglas y la búsqueda son instantáneas. Si reinicias el backend, todo se recarga desde Firestore.
- **Sin Ollama la app sigue funcionando:** CRUD, Kanban, búsqueda, filtros, semáforo, recomendaciones y
  briefing son determinísticos. El chat responde en *modo determinístico* (estado de entidades, briefing,
  carga del equipo).

## Requisitos

| Herramienta | Versión probada | Nota |
|---|---|---|
| Windows 10/11 | 11 Pro | Los scripts son PowerShell; en macOS/Linux usa los comandos manuales |
| Python | 3.12 | `python --version` |
| Node.js | 20+ (probado 24) | `node --version` |
| Ollama | 0.34+ | https://ollama.com/download |
| GPU | recomendada | `qwen3:14b` usa ~9.6 GB de VRAM. Con menos VRAM usa `qwen3:8b` |
| Proyecto Firebase | plan Spark (gratis) | Firestore en modo producción |

> ⚠️ **No ubiques el proyecto dentro de OneDrive, Dropbox ni carpetas sincronizadas**: `node_modules` y
> `.venv` tienen decenas de miles de archivos y provocan bloqueos y lentitud. Ruta sugerida: `C:\dev\qa-task-agent`.

## Instalación rápida

```powershell
cd C:\dev\qa-task-agent
.\scripts\setup.ps1          # venv + pip install + npm install + copia .env.example → .env
# edita backend\.env (Project ID y ruta de la clave de servicio)
.\scripts\seed.ps1           # carga datos iniciales (solo si la base está vacía)
.\scripts\start.ps1          # abre backend y frontend en dos ventanas + navegador
```

Instalación manual equivalente:

```powershell
# Backend
cd backend
python -m venv .venv
.\.venv\Scripts\pip install -r requirements.txt
copy .env.example .env      # y edítalo

# Frontend
cd ..\frontend
npm install
copy .env.example .env
```

## Firebase

1. Entra a https://console.firebase.google.com y haz clic en **Crear proyecto**. Analytics no es necesario.
2. En **Compilación → Firestore Database → Crear base de datos**, elige **modo producción** y una ubicación
   (por ejemplo `nam5`). La ubicación **no se puede cambiar** después.
3. En **⚙️ Configuración del proyecto → Cuentas de servicio → Generar nueva clave privada**, descarga el JSON.
4. Guarda el JSON **fuera del repositorio**, por ejemplo `C:\secrets\qa-task-agent-sa.json`.
5. En `backend\.env` define:
   ```
   FIREBASE_PROJECT_ID=<tu-project-id>
   GOOGLE_APPLICATION_CREDENTIALS=C:\secrets\qa-task-agent-sa.json
   ```
6. Aplica las reglas de seguridad (`firestore.rules`, que deniegan todo acceso de clientes) de una de estas formas:
   - **Consola:** Firestore → Reglas → pega el contenido de `firestore.rules` → Publicar.
   - **CLI (opcional):** `npm i -g firebase-tools`, `firebase login`, `firebase deploy --only firestore:rules`.
     `.firebaserc` ya apunta al proyecto.

No se usan Firebase Authentication ni Storage: la app es monousuario y local, y las evidencias se guardan como URL.
La configuración web de Firebase (`apiKey`, `appId`…) **no es necesaria**.

## Ollama y modelo recomendado

```powershell
# 1. Instala Ollama y ábrelo (queda escuchando en http://127.0.0.1:11434)
# 2. Descarga el modelo
ollama pull qwen3:14b
# 3. Prueba
ollama run qwen3:14b "hola"
```

| Modelo | VRAM | Uso |
|---|---|---|
| **`qwen3:14b`** (por defecto) | ~9.6 GB | Mejor interpretación, extracción estructurada y razonamiento en español. Ideal con 12 GB+ |
| `qwen3:8b` | ~5.5 GB | Más rápido. Para GPUs de 8 GB o si priorizas la latencia |

- El backend usa la **salida estructurada nativa** de Ollama (JSON Schema generado desde Pydantic) y
  desactiva el modo *thinking* para responder rápido.
- La **primera** consulta carga el modelo en memoria (30–60 s). Después, cada mensaje tarda 5–20 s. El modelo
  permanece cargado `OLLAMA_KEEP_ALIVE` (30 min).
- Puedes cambiar de modelo sin reiniciar desde **Configuración → Modelo (override)**.

## Variables de entorno

### `backend/.env`

| Variable | Obligatoria | Default | Descripción |
|---|---|---|---|
| `FIREBASE_PROJECT_ID` | Sí | — | ID del proyecto Firebase |
| `GOOGLE_APPLICATION_CREDENTIALS` | Sí | — | Ruta absoluta al JSON de la cuenta de servicio (fuera del repo) |
| `AI_PROVIDER` | No | `ollama` | Proveedor de IA registrado en `app/ai/factory.py` |
| `OLLAMA_BASE_URL` | No | `http://127.0.0.1:11434` | URL de Ollama (puede ser otra máquina de tu red) |
| `OLLAMA_MODEL` | No | `qwen3:14b` | Modelo por defecto |
| `OLLAMA_TIMEOUT_SECONDS` | No | `180` | Timeout por llamada |
| `OLLAMA_KEEP_ALIVE` | No | `30m` | Tiempo que el modelo queda en memoria |
| `OLLAMA_NUM_CTX` | No | `8192` | Ventana de contexto |
| `APP_TIMEZONE` | No | `America/Mexico_City` | Zona horaria para días, deadlines y saludo |
| `CURRENT_USER_NAME` | No | `Rodrigo` | Nombre para el saludo del dashboard |
| `CORS_ORIGINS` | No | `http://localhost:5173,http://127.0.0.1:5173` | Orígenes permitidos |
| `API_HOST` / `API_PORT` | No | `127.0.0.1` / `8000` | Referencia para los scripts |

### `frontend/.env`

| Variable | Default | Descripción |
|---|---|---|
| `VITE_API_BASE_URL` | `http://127.0.0.1:8000` | URL del backend. **Nunca** pongas secretos con prefijo `VITE_`: llegan al navegador |

## Cómo iniciar

```powershell
.\scripts\start.ps1
```

O en dos terminales:

```powershell
# Terminal 1 – backend
cd backend
.\.venv\Scripts\python -m uvicorn app.main:app --host 127.0.0.1 --port 8000 --reload

# Terminal 2 – frontend
cd frontend
npm run dev
```

- App: http://127.0.0.1:5173
- API y documentación interactiva: http://127.0.0.1:8000/docs
- Salud: http://127.0.0.1:8000/api/health

Build de producción del frontend: `npm run build` (queda en `frontend/dist`).

## Datos iniciales (seed)

```powershell
.\scripts\seed.ps1            # carga solo si no hay actividades
.\scripts\seed.ps1 -Reset     # ⚠️ borra TODAS las colecciones (incluido historial) y recarga
```

Equivalente: `cd backend; .\.venv\Scripts\python -m app.seed [--reset] [--yes]`.

> Si el backend estaba corriendo durante el seed, **reinícialo**, porque mantiene una caché en memoria.

El seed carga personas (Rodrigo, José Luis, Héctor Yair, ITW), 4 PR (9492, 9424, 9792, 9664), proyectos y
DEP (incluida DEP Q3 bloqueada y Q4 por levantar), las actividades pedidas (Construcción GEMA C204, Piloto
Xray, Capacidad real, Jira Bugs → Sheets…), iniciativas GEMA y Xray, riesgos operativos (ventana de release y
capacidad) y **15 preguntas abiertas** con la información que no se proporcionó.
**Nada se inventa**: responsables, fechas, horas, cantidades de fallos o números de build desconocidos quedan en
`null` y la UI los muestra como «Por confirmar».

## Uso

| Quiero… | Dónde |
|---|---|
| Ver qué atender hoy | Dashboard → **¿Qué tengo que revisar hoy?** (o el botón ✨ de la barra superior) |
| Contarle algo al agente | Barra «Cuéntale al agente…» del dashboard, botón **Agente** (`Ctrl+J`) o página **Agente IA** |
| Preguntar sobre una actividad sin nombrarla | Abre la actividad → **Preguntar** o pestaña **IA** (chat contextual persistente) |
| Confirmar cambios importantes | Tarjetas amarillas en el chat o en el dashboard: **Confirmar / Descartar** |
| Responder información faltante | Dashboard → «Información por confirmar» → **Responder** |
| Mover actividades | Actividades → **Kanban** (arrastrar y soltar) |
| Buscar | `Ctrl+K`: DIFO, 9792, Yair, Xray, Q3… |
| Filtrar | Actividades → chips: Mis actividades, Bloqueadas, P0, P1, Esperando tercero, Sin actualizar, Deadline cercano, PR abiertas, Build Failed, En validación, Finalizadas |

Ejemplos de mensajes:

- «Upgrade ya pasó todos los tests y José Luis dice que ya quedó.»
- «Yair terminó los Gherkins pero no puede subirlos porque no tiene acceso al repo.»
- «La última regresión de DT Rewards falló: 120 Gherkins, 108 pasaron y 12 fallaron.»
- «Crea una actividad para preparar la demo del piloto Xray con ITW, prioridad P2.»
- «¿Qué pasó con Upgrade esta semana?» · «¿Quién está saturado?» · (dentro de DIFO) «¿Qué falta?»

## Cómo funciona el agente

```
mensaje ─► contexto (pantalla + sesión)
        ─► resolución determinística de entidades (alias, nº PR, Jira, personas)
        ─► LLM: interpretación estructurada (JSON validado con Pydantic)
              intent · hechos · inferencias · cambios · bloqueos · acciones · preguntas
        ─► política de cambios (código, no LLM)
              ├─ bajo riesgo + HECHO ─► se aplica + HistoryEntry
              └─ importante o INFERENCIA ─► PendingChange (requiere confirmación)
        ─► reglas determinísticas ─► recomendaciones
        ─► respuesta: HECHOS / INFERENCIAS / RECOMENDACIONES / PREGUNTAS
```

**Niveles de modificación:**

| Se aplica automáticamente (bajo riesgo) | Requiere confirmación |
|---|---|
| Estado técnico, notas, siguiente acción, seguimiento | Finalizar o cancelar una actividad |
| Resultados de build/regresión, Gherkins, comentarios | Cambiar el responsable |
| Registrar bloqueos reportados como hecho, acciones de seguimiento | Cambiar el deadline o la prioridad |
| Marcar acciones como hechas (si no son VoBo/merge/cierre) | Marcar una PR como mergeada/cerrada |
| | Completar acciones de VoBo/merge/cierre |
| | **Cualquier cambio basado en una inferencia** |

«Creo que ya quedó Upgrade» **nunca** finaliza la actividad: queda como inferencia pendiente y el agente
pregunta si la PR fue aprobada o mergeada. El Kanban aplica la misma regla: soltar una tarjeta en «Finalizado»
pide confirmación, y la columna «Bloqueado» abre el formulario de bloqueo.

## Motor de reglas y semáforo

Reglas en `backend/app/rules/builtin.py` (umbrales editables en **Configuración**):

| Regla | Condición | Recomendación |
|---|---|---|
| `blocked_escalation` | bloqueada ≥ N días (o sin fecha de inicio) | escalar según el tipo de bloqueo |
| `pr_ready_to_merge` | build Passed + automatización terminada + sin merge | confirmar condición para aprobación/merge |
| `regression_failed` | regresión Failed o Gherkins fallidos | clasificar fallos: Automation / Functional / Environment / Data / Service |
| `build_failed` | último build Failed | revisar causa y relanzar |
| `pending_execution` | build/regresión en progreso o pendiente | confirmar resultado / responsable y horario |
| `due_date` | deadline vencido o ≤ N días | riesgo alto; confirmar fecha o replanificar |
| `stale_activity` | sin actualizar ≥ N días | dar seguimiento |
| `follow_up_due` | seguimiento programado hoy/vencido | realizar seguimiento |
| `waiting_third_party` | esperando a un tercero | confirmar avance |
| `workload` | más de N actividades activas o horas > disponibles | posible saturación |
| `missing_info` | sin responsable/prioridad/deadline | solicitar información |
| `actions_overdue` | acciones vencidas | completar o reprogramar |

**Semáforo** (calculado al leer, nunca guardado):

- 🔴 **Rojo:** bloqueada, deadline vencido o cercano, riesgo alto, build o regresión con fallos.
- 🟡 **Amarillo:** sin actualizar, esperando a terceros, seguimiento vencido, riesgo medio, preguntas abiertas,
  dependencia en riesgo, ejecución en curso.
- 🟢 **Verde:** normal.
- ⚪ **Gris:** finalizada o cancelada.

## Estructura del proyecto

```
qa-task-agent/
├── backend/
│   ├── app/
│   │   ├── main.py              # FastAPI: routers + manejo de errores
│   │   ├── config.py            # Settings (variables de entorno)
│   │   ├── db.py                # Cliente Firestore (Admin SDK)
│   │   ├── repositories.py      # Repositorios con caché write-through
│   │   ├── seed.py              # Datos iniciales
│   │   ├── domain/              # enums (valores + etiquetas ES) y modelos Pydantic
│   │   ├── services/            # changes (escritura + historial), operations, insights,
│   │   │                        # briefing/dashboard, recommendations, search
│   │   ├── rules/               # engine.py + builtin.py
│   │   ├── ai/                  # AIProvider, OllamaProvider, factory
│   │   ├── agent/               # service (orquestador), resolver, policy, context,
│   │   │                        # prompts, schemas, fallback (sin IA)
│   │   └── api/                 # activities, work_items (acciones/bloqueos/PR),
│   │                            # catalog (proyectos/personas/iniciativas/riesgos), system, agent
│   ├── requirements.txt
│   └── .env.example
├── frontend/
│   ├── src/
│   │   ├── pages/               # Dashboard, Actividades (+Kanban), Detalle, PR, Proyectos,
│   │   │                        # Personas, Bloqueos, Iniciativas, Historial, Agente, Configuración
│   │   ├── components/          # ui, badges, forms, chat/, agent/, layout/, Kanban, búsqueda…
│   │   └── lib/                 # api, types, labels, filters, queries, utils
│   └── .env.example
├── scripts/                     # setup, seed, start (PowerShell)
├── firestore.rules              # deniega todo acceso de clientes
└── firebase.json / .firebaserc
```

## Modelo de datos (Firestore)

```
projects ◄── activities ──► actions
               │  ▲ │
               │  │ └──► blockers
               │  └───── pull_requests
               └──► history (entityType, entityId, activityId, field, oldValue → newValue, source)
people · initiatives · risks · open_questions · pending_changes · recommendations
chat_sessions · chat_messages · settings/app
```

- Los valores de estado se guardan en inglés (`IN_PROGRESS`, `PASSED`…) y la UI los muestra en español.
- **Estado y bloqueo son independientes**: `activity.status` + `activity.blocked` + documentos `blockers`.
- **El historial nunca se borra.** Al eliminar una entidad se guarda su estado completo en `history` (`_deleted`).

## API

Documentación interactiva en http://127.0.0.1:8000/docs. Endpoints principales:

| Método | Ruta | Descripción |
|---|---|---|
| GET | `/api/health` | Estado de Firestore y Ollama |
| GET | `/api/dashboard` · `/api/briefing` | KPIs, atención, briefing |
| GET/POST/PATCH/DELETE | `/api/activities[/{id}]` | CRUD + detalle enriquecido |
| POST | `/api/activities/{id}/move` | Cambio de estado (409 si requiere confirmación) |
| POST | `/api/activities/{id}/ai-summary` | Resumen con IA |
| * | `/api/actions`, `/api/blockers`, `/api/prs`, `/api/projects`, `/api/people`, `/api/initiatives`, `/api/risks` | CRUD |
| POST | `/api/blockers/{id}/resolve` · `/follow-up` | Gestión de bloqueos |
| POST | `/api/prs/{id}/builds` | Registrar build |
| GET | `/api/search?q=` | Búsqueda global |
| GET | `/api/history` | Historial filtrable |
| GET/POST | `/api/questions`, `/api/pending-changes/{id}/confirm|reject` | Preguntas y confirmaciones |
| POST | `/api/agent/chat` | Conversación con el agente |

## Extender

**Nueva regla:** agrega una clase en `backend/app/rules/builtin.py`:

```python
@register
class MiRegla(Rule):
    id = "mi_regla"
    description = "Qué detecta"

    def evaluate(self, snap):
        for a in snap.active_activities():
            if ...:
                yield Finding(rule_id=self.id, severity="MEDIUM", category="followup",
                              entity_type="activity", entity_id=a.id, entity_name=a.title,
                              activity_id=a.id, title="Situación", action="Qué hacer")
```

**Nuevo proveedor de IA:** implementa `AIProvider` (`health`, `chat`, `structured`) en `backend/app/ai/`,
regístralo en `PROVIDERS` (`ai/factory.py`) y define `AI_PROVIDER=<nombre>`. El agente no cambia.

## Seguridad

- IA local: Ollama corre en tu equipo y no se usan APIs externas de IA.
- El único secreto es el JSON de la cuenta de servicio. Vive **fuera del repo** y se referencia por
  variable de entorno. `.gitignore` excluye `.env`, `*-sa.json` y similares.
- El frontend no contiene credenciales. Firestore deniega todo acceso de clientes.
- El backend escucha solo en `127.0.0.1` y no tiene login (app monousuario local). Para compartirla con el
  equipo habría que agregar autenticación (por ejemplo Firebase Auth con verificación de ID token en FastAPI).
- No guardes credenciales de Jira/Bitbucket en Firestore. Si en el futuro se integra, van en variables de
  entorno del backend.
- Revisa la política de tu organización antes de almacenar información de proyectos en un Firebase personal.

## Troubleshooting

| Síntoma | Causa / solución |
|---|---|
| Badge «Backend sin conexión» | El backend no está corriendo. Revisa la ventana del backend o ejecuta `.\scripts\start-backend.ps1` |
| `ValidationError: firebase_project_id Field required` | Falta `backend\.env`. Copia `.env.example` y complétalo |
| `DefaultCredentialsError` / `FileNotFoundError` del JSON | La ruta de `GOOGLE_APPLICATION_CREDENTIALS` es incorrecta |
| `403 PERMISSION_DENIED` / `Cloud Firestore API has not been used` | Firestore no está creado en el proyecto, o la clave es de otro proyecto |
| «Ollama no disponible» | Abre la app de Ollama o ejecuta `ollama serve`. Verifica `OLLAMA_BASE_URL` |
| «El modelo 'X' no está descargado» | `ollama pull X`, o elige otro modelo en Configuración |
| La primera respuesta tarda ~1 min | Es la carga del modelo en GPU. Las siguientes son rápidas |
| Respuestas muy lentas | El modelo no cabe en la VRAM (`ollama ps` muestra CPU/GPU). Usa `qwen3:8b` o baja `OLLAMA_NUM_CTX` |
| Tras el seed no veo los cambios | Reinicia el backend (caché en memoria) |
| `npm install` lento o con errores `EPERM` | El proyecto está en una carpeta sincronizada (OneDrive). Muévelo a `C:\dev` |
| Error CORS en el navegador | Agrega el origen del frontend a `CORS_ORIGINS` |
| `.ps1 cannot be loaded because running scripts is disabled` | `Set-ExecutionPolicy -Scope CurrentUser RemoteSigned`, o ejecuta `powershell -ExecutionPolicy Bypass -File .\scripts\start.ps1` |
| El agente eligió la actividad equivocada | Nombra la PR/actividad o agrega **alias** a la actividad o proyecto (Editar → Alias) |

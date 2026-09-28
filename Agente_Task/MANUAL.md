# Manual de uso – QA Task Agent

Armé esta herramienta porque llevar el seguimiento del equipo de automatización en tableros tradicionales
me obligaba a editar diez campos cada vez que algo cambiaba, y aun así la información terminaba
desactualizada. La idea es simple:

> **El agente administra el tablero. Nosotros administramos al agente.**

En lugar de editar campos, le cuento al agente lo que pasó con mis propias palabras y él se encarga de
actualizar la actividad, registrar el historial, detectar lo que falta y decirme qué sigue. Todo corre
de forma local: la IA vive en mi equipo (Ollama) y la información se guarda en Firebase.

---

## 1. Arrancar la aplicación

1. Verifico que **Ollama** esté abierto (ícono en la barra de tareas).
2. En PowerShell:
   ```powershell
   cd C:\dev\qa-task-agent
   .\scripts\start.ps1
   ```
3. Se abren dos ventanas (backend y frontend) y el navegador en **http://127.0.0.1:5173**.

Para cerrar, basta con cerrar esas dos ventanas. No se pierde nada: todo queda guardado en Firebase.

> La primera pregunta del día al agente tarda cerca de un minuto porque el modelo se carga en memoria.
> Después responde en unos segundos.

---

## 2. Mi rutina diaria

1. **Abro el Dashboard.** Ahí veo de un vistazo las PR abiertas, las actividades bloqueadas, los riesgos
   altos y lo que está esperando a terceros.
2. **Pulso «¿Qué tengo que revisar hoy?».** El agente me da una lista corta y priorizada, con la acción
   recomendada para cada punto.
3. **Reviso «Necesitan tu atención»** y entro a lo que esté en rojo.
4. **Confirmo o descarto los cambios pendientes** (tarjetas amarillas).
5. **Durante el día, le cuento al agente lo que va pasando** en la barra «Cuéntale al agente qué pasó…».
6. **Contesto las preguntas de «Información por confirmar»** cuando tengo el dato.

---

## 3. Cómo le cuento cosas al agente

Hay cuatro lugares y todos guardan en el mismo tablero:

| Dónde | Cuándo lo uso |
|---|---|
| **Barra del Dashboard** «Cuéntale al agente qué pasó…» | Lo más rápido: escribo y doy Enter |
| **Botón «Agente»** (arriba a la derecha, o `Ctrl+J`) | Desde cualquier pantalla, sin perder lo que estoy viendo |
| **Dentro de una actividad**: botón «Preguntar» o pestaña **IA** | Cuando hablo solo de esa actividad; no hace falta nombrarla |
| **Menú → Agente IA** | Conversaciones largas y consultar pláticas anteriores |

### Ejemplos que uso

- «Upgrade ya pasó todos los tests y José Luis dice que ya quedó.»
- «Yair terminó los Gherkins pero no puede subirlos porque no tiene acceso al repo.»
- «La última regresión de DT Rewards falló: 120 Gherkins, 108 pasaron y 12 fallaron.»
- «DIFO ya tiene VoBo, falta el merge.»
- «Crea una actividad para preparar la demo del piloto Xray con ITW, prioridad P2.»

Y preguntas:

- «¿Qué tengo que revisar hoy?»
- «¿Qué pasó con Upgrade esta semana?»
- «¿Quién está saturado?» / «¿Quién tiene menos carga?»
- Dentro de DIFO: «¿Qué falta?»

### Consejos

- **Menciono el nombre, un alias o el número de PR** (DIFO, 9792, Upgrade, Q3). Si el agente no sabe de
  qué hablo, me lo pregunta y no guarda nada en el tablero.
- **Si estoy dentro de una actividad, no la tengo que nombrar.**
- **Hablo como hablaría con alguien del equipo.** No hace falta un formato especial.
- Si el agente confunde una actividad con otra, le agrego **alias** desde **Editar → Alias**.

---

## 4. Qué guarda el agente y qué me pregunta

Cada respuesta separa claramente:

- **Hechos**: lo que dije de forma directa.
- **Inferencias**: lo que el agente deduce. **Nunca las aplica solo.**
- **Recomendaciones**: qué hacer después.
- **Preguntas**: lo que le falta saber.

### Lo aplica solo (bajo riesgo)
- Estado técnico, notas, siguiente acción, seguimientos.
- Resultados de builds y regresiones, conteo de Gherkins.
- Bloqueos que reporto como hecho y sus acciones de seguimiento.

### Me pide confirmación (cambios importantes)
- Finalizar o cancelar una actividad.
- Cambiar responsable, deadline o prioridad.
- Marcar una PR como mergeada.
- Completar acciones de VoBo, merge o cierre.
- **Cualquier cosa que sea una inferencia.** Por ejemplo, si digo «creo que ya quedó Upgrade», no la
  finaliza: me pregunta si la PR ya fue aprobada o mergeada.

Esos cambios aparecen como **tarjetas amarillas** con **Confirmar / Descartar**, en el chat y en el
Dashboard. Se quedan guardados hasta que los resuelvo.

### Cómo sé que sí se guardó
- En la respuesta aparece el bloque verde **«Cambios aplicados»**.
- En la actividad, la pestaña **Historial** muestra cada cambio con su valor anterior y el nuevo.

---

## 5. Pantallas

| Pantalla | Para qué la uso |
|---|---|
| **Dashboard** | Resumen del día, atención prioritaria, confirmaciones y preguntas pendientes |
| **Actividades** | Lista con filtros o vista **Kanban** |
| **PR** | Estado de automatización, builds, regresión, VoBo y merge de cada PR |
| **Proyectos / DEP** | Cada proyecto o dependencia con sus actividades, PR, personas y bloqueos |
| **Personas** | Carga de cada quien y posibles saturaciones |
| **Bloqueos** | Todo lo que está detenido, desde cuándo y quién debe desbloquearlo |
| **Iniciativas** | GEMA, Jira Xray, Jira Bugs → Sheets: objetivo, fase y siguiente paso |
| **Historial** | Todo lo que cambió, cuándo y quién lo cambió (yo, el agente o el Kanban) |
| **Agente IA** | Chat completo y conversaciones anteriores |
| **Configuración** | Estado de Ollama y Firebase, modelo y umbrales de las reglas |

**Búsqueda global:** `Ctrl+K` y escribo lo que sea: DIFO, 9792, Yair, Xray, Q3…

**Filtros en Actividades:** Mis actividades, Bloqueadas, P0, P1, Esperando tercero, Sin actualizar,
Deadline cercano, PR abiertas, Build Failed, En validación, Finalizadas.

---

## 6. Detalle de una actividad

Al abrir una actividad veo, en este orden:

1. **Título, semáforo, estado, prioridad, responsable, proyecto, deadline y última actualización.**
2. **Resumen generado por IA** (botón «Generar»).
3. **Siguiente acción recomendada.**
4. **Preguntas que el agente necesita confirmar**, con su botón «Responder».
5. Pestañas: **General · Acciones · PR · Bloqueos · Historial · IA**.

El estado se cambia directamente con el selector que está junto al título.

---

## 7. Estado ≠ bloqueo

Es la regla más importante del tablero. Una actividad puede estar **«En proceso» y bloqueada al mismo
tiempo**. El bloqueo no cambia el estado: se registra aparte, con su tipo (Access, Scrum, Environment,
Reviewer, ITW…), su responsable y desde cuándo.

- **Registrar:** botón **Bloqueo** en la actividad, pantalla **Bloqueos** o simplemente contárselo al agente.
- **Dar seguimiento:** botón **Seguimiento** (queda el comentario y la fecha).
- **Resolver:** botón **Resolver**, indicando cómo se resolvió.

Si un bloqueo pasa de 2 días, el tablero recomienda escalarlo.

---

## 8. Kanban

Columnas: Pendiente · Análisis · En proceso · **Bloqueado** · Validación · Lista para cierre · Finalizado.

- Arrastro la tarjeta desde su cuerpo; el título es un enlace para abrirla.
- Soltar en **Bloqueado** abre el formulario del bloqueo.
- Sacar una tarjeta de **Bloqueado** me pide indicar cómo se resolvió.
- Soltar en **Finalizado** me pide confirmación.

---

## 9. Semáforo

| Color | Significa |
|---|---|
| 🔴 Rojo | Bloqueada, deadline vencido o cercano, riesgo alto, build o regresión con fallos |
| 🟡 Amarillo | Necesita seguimiento: sin actualizar, esperando a terceros, preguntas abiertas, ejecución en curso |
| 🟢 Verde | Normal |
| ⚪ Gris | Finalizada o cancelada |

No depende solo del estado: considera deadline, bloqueos, antigüedad, última actualización, riesgo y
dependencias. Al pasar el cursor sobre el punto se ve el motivo.

---

## 10. Información «Por confirmar»

Cuando un dato no está confirmado (responsable, fecha, horas, número de build, cantidad de fallos), el
tablero lo muestra como **«Por confirmar»** en lugar de inventarlo, y el agente genera una pregunta.

Para contestar: Dashboard → **Información por confirmar** → **Responder**. Escribo la respuesta en el chat
y el agente actualiza lo que corresponda y cierra la pregunta. Si una pregunta ya no aplica, la **descarto**.

---

## 11. Si Ollama está apagado

La aplicación **sigue funcionando** como gestor de tareas: dashboard, briefing, Kanban, filtros, búsqueda,
semáforo, recomendaciones y formularios.

Lo único que no puede hacer es **interpretar mensajes en lenguaje natural**. En ese modo el chat responde
con el estado de la actividad, el briefing o la carga del equipo, pero no actualiza nada. Lo que le cuente
queda en el chat; para que llegue al tablero lo repito con Ollama encendido o lo registro a mano
(**Editar**, **Agregar nota**, **Bloqueo**).

El indicador de arriba a la derecha me dice el estado: **IA lista** / **IA no disponible**.

---

## 12. Iniciativas

Además del seguimiento diario, quiero que el tablero sea el lugar donde vivan las **iniciativas para
mejorar la gestión del equipo**: ideas, pilotos y automatizaciones que no son una PR ni una dependencia,
pero que nos ayudan a trabajar mejor (por ejemplo, Jira Bugs → Google Sheets o el piloto de Jira Xray).

### Cómo cargo una iniciativa

1. Voy a **Menú → Iniciativas → Nueva**.
2. Lleno lo que sepa y dejo vacío lo que no esté confirmado (se mostrará como «Por confirmar»):

| Campo | Qué pongo |
|---|---|
| **Nombre** | Nombre corto y reconocible |
| **Objetivo** | Qué problema de gestión resuelve |
| **Estado** | Por confirmar · Por iniciar · En proceso · En pausa · Terminada · Cancelada |
| **Fase** | Levantamiento, análisis, piloto, MVP… |
| **Responsable** | Quién la impulsa |
| **MVP** | La versión mínima que ya daría valor |
| **Fecha objetivo** | Solo si está acordada |
| **Riesgo** | Qué podría impedir que avance |
| **Siguiente acción** | El próximo paso concreto |

3. Si la iniciativa requiere trabajo con seguimiento, creo una **actividad** y la vinculo a la iniciativa
   (**Editar → Iniciativa**). Así sus acciones, bloqueos e historial se ven desde la iniciativa.

También puedo pedírselo al agente: «Crea una actividad para definir los campos del MVP de Jira Bugs →
Sheets».

### Cómo les doy seguimiento

- En **Iniciativas** veo de un vistazo el estado, la fase, el responsable y cuántos datos faltan por confirmar.
- Dentro de cada iniciativa, con **Preguntar**, consulto al agente: «¿Qué falta para arrancar el MVP?».
- Cuando una iniciativa avanza de fase o cambia de estado, lo actualizo en **Editar**; el cambio queda en el historial.

### Registro de iniciativas de mejora

Aquí anoto las propuestas antes de cargarlas en la aplicación:

| Iniciativa | Objetivo | Responsable | Estado |
|---|---|---|---|
| | | | |

---

## 13. Problemas comunes

| Qué pasa | Qué hago |
|---|---|
| «Backend sin conexión» | Reviso que la ventana del backend esté abierta; si no, `.\scripts\start.ps1` |
| «IA no disponible» | Abro Ollama y pulso **Verificar** en Configuración |
| La primera respuesta tarda mucho | Es normal: se está cargando el modelo |
| El agente eligió otra actividad | Nombro la PR o agrego alias a la actividad |
| No veo un cambio que le conté | Reviso si quedó como **pendiente de confirmación** o si el agente me preguntó a qué actividad me refería |

Para instalación, variables de entorno y detalles técnicos está el **README.md**.

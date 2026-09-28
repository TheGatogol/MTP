# Guía de programación para corregir código E2E de GloMo

Se usa en cada corrección. Los ejemplos reales (antes/después) están en `examples/`.

## Principios (siempre)
- AJUSTA, no reescribas: cambia solo las líneas del hallazgo y lo mínimo para cumplir la métrica.
- NO inventes identificadores: selectores, ids, atributos, nombres de elementos, métodos, steps o case. Usa solo lo que ya existe en el archivo o en el framework. Si la métrica pide algo que no existe (por ejemplo, un atributo estable), conserva el valor actual.
- Respeta el estilo del archivo: indentación, comillas, punto y coma, orden de propiedades y comentarios.
- Nunca quites ni renombres un `case` (lo usan las tablas de los .feature), un método ni un `break`.
- Nunca conviertas un `switch` en un objeto/mapa ni cambies la lógica condicional (if/else, ternarios, `value`).
- Si quitas el último uso de un import, quita también el import.
- Nunca reformatees el archivo completo.

## Page (`pages/`)
- `@page(...)` sobre la clase, `root` con el template activo y `requiredElements` con 1-2 elementos que indiquen que la pantalla cargó (máximo 3). Para reducir `requiredElements`, conserva los que ya estaban (el primero y el más representativo); no agregues nuevos. Si al quitarlos un elemento queda sin ningún uso, elimínalo de `elements`.
- `elements`: quita los que no se usan (ni en la page ni en quien la importa). Selectores sin `>` ni `~`: sustitúyelos por un espacio (descendiente). No cambies nada más del selector.
- `_screenValidation({item})`: `switch (item.toLowerCase())`, un `case` por elemento de la tabla, solo esperas de visibilidad/existencia (`waitForDisplayed`, `waitForExist`) y `default` con `ScreenValidationKeyNotFound`. Un `case` que elige el elemento según `value` es válido.
- Si un `case` de `_screenValidation` hace acciones (click, setValue, scrollIntoView), deja en el `case` solo la espera de visibilidad del elemento y mueve las acciones, tal cual, a un método nuevo con nombre funcional (qué hace el usuario, p. ej. `selectTravelersNumber`).
- Esperas dinámicas con tallas: `config.wait.S` o `config.wait.M`; `L` solo si ya estaba y es necesario. Para el spinner (`waitUntilSpinnerVeil`) `timeoutToDisappear` puede ser `L`.
- `Commands.pause`: si la línea siguiente ya espera al elemento que se usa, borra la pausa; si no, cámbiala por `await this.<elemento que se usa después>.waitForDisplayed({timeout: config.wait.M});`.
- No hagas `scrollIntoView` antes de `click` (el click ya hace scroll): borra el scroll.
- No encadenes esperas sobre el mismo elemento sin necesidad (`waitForAnimation` + `waitForClickable`): deja la que habilita la acción (`waitForClickable`).
- Componentes en `elements` con forma resumida: `clave: [Clase, {args}]` o `clave: Clase`. Para variar instancias usa `modifiers`/`prefix`, no `root`.

## Component (`components/`)
- Mismas reglas que la page. Extiende `AbstractGlomoComponent`; `name`, `elements` y `requiredElements` pueden venir en `defaultArgs` pasados a `super(Object.assign(defaultArgs, args))`.
- Un elemento con selector vacío `''` representa la raíz del componente: es válido, no lo borres.

## Navigation (`navigation/`)
- `go_impl()` con `switch (currentPage.getId())`, un `case` por pantalla de origen usando solo métodos de esa page, y `default: throw new NotPathNavigationError();`.
- Para pantallas intermedias usa recursividad: `await navigation.x.go(); await this.go_impl();` (llamar a `navigation.*.assert()` no es usar otra page).
- Sin esperas estáticas; después de la acción, `await this.page.waitUntilSpinnerVeil({timeoutToAppear: config.wait.XS, timeoutToDisappear: config.wait.L});`.

## Step definitions (`step_definitions/`)
- `async function(...)`, no arrow functions. Una sola navegación por step. Sin tocar elementos (solo métodos de page o navigation).
- Mensajes de error descriptivos en inglés con el valor: ``throw new Error(`The option "${option}" is not implemented in <contexto>`);``.
- Si cambias el texto de un step, cambia también todos los .feature que lo usan. El texto nuevo sale del nombre del método que ya llama (p. ej. `currentPage.showDeliveryAddress()` → `the user shows the delivery address`).

## Feature (`.feature`)
- No cambies títulos de `Scenario` ni tags identificadores (obligarían a regrabar vBank).
- Steps funcionales: sin click/tap/button. Usa un step existente o el que se derive del método de la page (y actualiza su step definition).
- Celdas vacías en tablas del `Then`: rellénalas con el valor por defecto que acepta la page (normalmente `visible`); no quites columnas que la page usa.
- Solo une escenarios en un Scenario Outline si sus steps Y sus tablas son iguales salvo los datos.

## Cambios que afectan a otros archivos (los hace la herramienta)
- Renombrar un método (COD-011): se cambian la definición y todas sus llamadas del framework.
- Cambiar el texto de un step (GHK-002, GHK-004, GHK-012, STP-005, STP-008): se cambia el patrón de la step definition y el texto en todos los .feature que lo usan, conservando sus parámetros y su orden.
- Renombrar un elemento de tabla (GHK-010): en la page se conserva el case viejo y se agrega el nuevo; el .feature usa el nuevo.
- Elemento de tabla sin case (GHK-015): si la page ya tiene ese elemento, se agrega su case de visibilidad.
- Lógica en un step o navigation que toca elementos (STP-003, STP-004, NAV-003): se crea el método en la page (archivo auxiliar) con las mismas líneas y se llama desde el step/navigation.

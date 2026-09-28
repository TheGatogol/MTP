/* Guía de desarrollo E2E para perfiles junior.
   Basada en MetricasCodigo (Guía Buenas Prácticas E2E, Guía de pruebas E2E, Page Object, Navigating Pages,
   Test Flakies) y en el código real de glomo-mx. Ejemplo ficticio: «Mis metas de ahorro» (savingsGoals). */

export interface GuideBlock {
    kind: 'text' | 'code' | 'tip' | 'warn';
    title?: string;
    body: string;
}

export interface GuideStep {
    id: string;
    title: string;
    summary: string;
    where?: string[];
    blocks: GuideBlock[];
    why: string[];
    checklist: string[];
}

export const GUIDE: GuideStep[] = [
    {
        id: 'mapa',
        title: 'Entiende las 4 piezas',
        summary: 'Una automatización son 4 archivos que se conectan en cadena.',
        blocks: [
            {kind: 'code', title: 'Cómo se conectan', body:
`.feature          →  step definition   →  navigation         →  page
(qué prueba,          (traduce cada         (cómo llegar a        (qué hay en la
 en inglés simple)     frase a código)       la pantalla)          pantalla y qué se
                                                                   puede hacer)`},
            {kind: 'text', body: 'Todo vive en `glomo-mx/test/e2e/lib/features/`. Cada pieza tiene su carpeta: `epics/`, `step_definitions/`, `navigation/` y `pages/`. Dentro, crea una carpeta con el nombre de tu funcionalidad en camelCase (ej. `savingsGoals`).'},
            {kind: 'tip', body: 'Antes de crear algo, busca si ya existe: muchas pantallas (dashboard, sidebar, login) y steps comunes ya están hechos. Reutilizar es la regla.'},
        ],
        why: ['Separar «qué» (feature) de «cómo» (código) permite que, si cambia la pantalla, solo se corrija la page y no todos los tests.'],
        checklist: [
            'Sé qué pantalla(s) voy a probar y desde dónde se llega',
            'Busqué en pages/ y navigation/ si la pantalla ya existe',
            'Elegí el nombre de la funcionalidad en camelCase',
        ],
    },
    {
        id: 'entorno',
        title: 'Prepara tu entorno',
        summary: 'Levanta la app en vBank y deja listas las dependencias de los tests.',
        where: ['glomo-mx/ (raíz)', 'glomo-mx/test/e2e/'],
        blocks: [
            {kind: 'text', body: 'Versiones recomendadas: Node 18.18.2, npm 9.8.1, Cells CLI 4.6.0, Java 19.'},
            {kind: 'code', title: 'Terminal 1 · raíz de glomo-mx (PowerShell)', body:
`$env:NODE_OPTIONS="--max_old_space_size=16384"
cells app:serve -c mx/web-vbank-spherica.js`},
            {kind: 'code', title: 'Terminal 2 · test/e2e', body:
`cd test/e2e
npm i`},
        ],
        why: ['vBank reproduce las respuestas de backend grabadas: así el test no depende de que el ambiente TEST esté arriba.'],
        checklist: [
            'La app abre en el navegador servida con vBank',
            'Ejecuté npm i dentro de test/e2e sin errores',
        ],
    },
    {
        id: 'feature',
        title: 'Escribe el Gherkin',
        summary: 'Describe la prueba en inglés, como la contaría un usuario.',
        where: ['lib/features/epics/savingsGoals/savingsGoals.feature'],
        blocks: [
            {kind: 'code', title: 'Plantilla', body:
`@savingsGoals
Feature: Savings goals

    @SGO001
    @MX
    @ios @android @web
    @vbank @backend(test)
    @smokeTest @web-done
    Scenario: See savings goals summary
        Given a user with the following criteria
            | criteria            |
            | savings goals user  |
        When the user accesses to savings goals
        Then the user sees the following items in the screen
            | item               |
            | goals title        |
            | create goal button |`},
            {kind: 'text', title: 'Tags obligatorios', body:
`• ID: 2-5 letras + 3 números, sin guion, consecutivos (@SGO001, @SGO002…) y un solo prefijo por archivo.
• País: @MX · Dispositivos: @ios @android @web · Entorno: @backend(test) (no @test).
• @vbank si hay grabación; @!vbank si no la hay.
• @web-done cuando está automatizado. Al menos un @smokeTest por feature (máx. 10 %).
• Sin «criteria» (sin login) → agrega @no-data-manager.
• @manual solo con Jira: @JIRA.GLOMOMX-12345, y sin @web-done.`},
            {kind: 'text', title: 'Reglas de los steps', body:
`• Orden: Given (precondición) → When (acciones) → Then (validación).
• Given/When no validan («sees», «views»…). Then no hace acciones.
• Describe la intención, no la interfaz: «confirms the transfer», no «clicks the continue button».
• Máximo 5 pasos When por escenario. Si solo cambian datos → Scenario Outline.
• Sin datos en duro (cuentas, teléfonos, nombres): vienen del Data Manager. Solo OTP y montos.
• Elementos de la tabla descriptivos y sin «_» ni «-».`},
        ],
        why: [
            'El Gherkin es la documentación viva: debe entenderlo alguien de negocio.',
            'Los tags controlan qué se ejecuta en Jenkins; un tag mal puesto excluye o rompe el test.',
        ],
        checklist: [
            'Cada escenario tiene ID, @MX, @ios @android @web, @backend(test) y @vbank/@!vbank',
            'Los IDs son consecutivos y sin guion',
            'Given → When → Then, sin validar en When ni actuar en Then',
            'Reutilicé steps existentes (el agente marca los que no existen)',
            'No hay datos en duro',
        ],
    },
    {
        id: 'datos',
        title: 'Usuario de pruebas (Data Manager)',
        summary: 'Si el flujo requiere login, el usuario sale del Data Manager, nunca del código.',
        where: ['lib/features/support/data-manager/dictionaries/Users.js', 'Data Manager: GloMo_MX_test_Users'],
        blocks: [
            {kind: 'code', title: 'Users.js · clave del feature → tag del Data Manager', body: `'savings goals user': 'savings_goals_user',`},
            {kind: 'code', title: 'Registro en el Data Manager', body:
`{
    "tags": ["savings_goals_user"],
    "authentication": {"user": "<teléfono>", "deviceId": "<device id>", "password": "<password>"}
}`},
            {kind: 'warn', body: 'Ese cliente queda reservado para E2E: no lo uses para otras pruebas. Nunca pongas usuario, password ni device ID en el código.'},
        ],
        why: ['Centralizar datos evita credenciales en el repo y permite cambiar el cliente sin tocar tests.'],
        checklist: [
            'La clave de criteria del feature existe en Users.js',
            'El tag existe en GloMo_MX_test_Users con un cliente ambientado en TEST',
            'Si no hay login, el escenario tiene @no-data-manager',
        ],
    },
    {
        id: 'selectores',
        title: 'Identifica los elementos',
        summary: 'Encuentra un selector estable para cada elemento que vas a usar o validar.',
        blocks: [
            {kind: 'text', title: 'Paso a paso', body:
`1. Abre la pantalla en Chrome → clic derecho → Inspeccionar.
2. Busca la etiqueta cells-template-… con state="active": ese es el root de la page.
   Ej.: #cells-template-savingsGoals[state="active"]
3. Para cada elemento, prefiere en este orden: id (#goalsTitle) → data-tag-name → clase estable.
4. Puedes ayudarte con la extensión csqe-selector-helper (instrucciones en el README de test/e2e).
5. Comprueba en la consola que el selector encuentra UN solo elemento.`},
            {kind: 'code', title: 'Bien vs. mal', body:
`goalsTitle: 'h1#goalsTitle'                               ✔ id estable
createGoal: '[data-tag-name="bbva-button-default"]'         ✔ atributo
createGoal: 'div > div:nth-child(3) button'                 ✘ posición y «>»
createGoal: 'button:contains("Crear meta")'                 ✘ depende del texto`},
        ],
        why: ['Los selectores por posición o texto son la causa principal de tests «flaky»: fallan cuando cambia el diseño o el idioma.'],
        checklist: [
            'Tengo el root (cells-template-…[state="active"])',
            'Ningún selector usa nth-child, nth-of-type, «>», «~» ni texto',
            'Cada selector encuentra un solo elemento',
        ],
    },
    {
        id: 'page',
        title: 'Crea la Page',
        summary: 'La page es la única que toca elementos. Expone métodos con nombre funcional.',
        where: ['lib/features/pages/savingsGoals/savingsGoals.js'],
        blocks: [
            {kind: 'code', title: 'Plantilla', body:
`import AbstractGlomoPage from '../abstract-glomo-page';
import {ScreenValidationKeyNotFound, page} from '@csqe/radish';

@page()
class SavingsGoalsPage extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-savingsGoals[state="active"]',
            elements: {
                goalsTitle: 'h1#goalsTitle',
                createGoalButton: '[data-tag-name="bbva-button-default"]',
            },
            requiredElements: ['goalsTitle'],
        });
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'goals title':
                await this.goalsTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'create goal button':
                await this.createGoalButton.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async startGoalCreation() {
        await this.createGoalButton.waitForClickable({timeout: config.wait.M});
        await this.createGoalButton.click();
        await this.waitUntilSpinnerVeil({timeoutToAppear: config.wait.XS, timeoutToDisappear: config.wait.L});
    }
}

export default new SavingsGoalsPage();`},
            {kind: 'text', title: 'Reglas', body:
`• @page() obligatorio, root obligatorio, máximo 3 requiredElements (ideal 1-2).
• _screenValidation: switch con toLowerCase(), un case por elemento (igual que en la tabla del Gherkin),
  sin acciones y con default ScreenValidationKeyNotFound.
• Métodos con nombre funcional: startGoalCreation(), no clickCreateButton().
• Esperas dinámicas (waitForDisplayed/waitForClickable) con config.wait.M. Nunca Commands.pause.
• No combines waitForClickable con scrollIntoView. La page no llama a navigation.
• Sin selectores sin uso, sin constantes para selectores, todo en inglés.`},
        ],
        why: [
            'Si cambia la pantalla, solo se corrige aquí (patrón Page Object).',
            'Las esperas fijas hacen el test lento o inestable; las dinámicas esperan lo justo.',
        ],
        checklist: [
            'La clase tiene @page() y root',
            'Cada item de la tabla del Gherkin tiene su case en _screenValidation',
            'No hay Commands.pause ni timeouts en números',
            'Los métodos tienen nombre funcional',
        ],
    },
    {
        id: 'navigation',
        title: 'Crea la Navigation',
        summary: 'Le dice al framework cómo llegar a tu page desde la pantalla anterior.',
        where: ['lib/features/navigation/savingsGoals/savingsGoals.js', 'lib/features/navigation/savingsGoals/index.js', 'lib/features/navigation/index.js'],
        blocks: [
            {kind: 'code', title: 'navigation/savingsGoals/savingsGoals.js', body:
`import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import dashboardPage from '../../pages/dashboard/dashboard';

// Page Objects IDs
const DASHBOARD = dashboardPage.getId();

class SavingsGoals extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'savingsGoals/savingsGoals', parentNavigation: 'dashboard'});
    }

    async go_impl(args = {}) {
        switch (currentPage.getId()) {
            case DASHBOARD:
                await dashboardPage.accessToSavingsGoals(args);
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new SavingsGoals();`},
            {kind: 'code', title: 'Índices (en orden alfabético)', body:
`// navigation/savingsGoals/index.js
export {default as savingsGoals} from './savingsGoals';

// navigation/index.js (agrega tu línea en su lugar alfabético)
export * as savingsGoals from './savingsGoals';`},
            {kind: 'text', title: 'Reglas', body:
`• page = ruta de tu page dentro de pages/; parentNavigation = la pantalla anterior.
• Un case por pantalla de origen, usando solo métodos de ESA page (nunca elementos directos).
• Si hay pantallas intermedias, navega recursivamente: await x.go(); await this.go_impl(args);
• El default siempre lanza NotPathNavigationError.`},
        ],
        why: ['Con parentNavigation, el framework encuentra solo el camino desde cualquier pantalla: el step solo dice «ve a savingsGoals».'],
        checklist: [
            'page y parentNavigation apuntan a rutas que existen',
            'El default lanza NotPathNavigationError',
            'Registré la navigation en ambos index.js en orden alfabético',
        ],
    },
    {
        id: 'steps',
        title: 'Crea los Step definitions',
        summary: 'Conectan cada frase del Gherkin con la navigation o la page. Deben ser cortos.',
        where: ['lib/features/step_definitions/savingsGoals/savingsGoals.js'],
        blocks: [
            {kind: 'tip', body: 'Primero revisa step_definitions/common/: «a user with the following criteria» y «the user sees the following items in the screen» ya existen. No los copies.'},
            {kind: 'code', title: 'Plantilla', body:
`import {When} from '@cucumber/cucumber';
import * as navigation from '../../navigation';
import savingsGoalsPage from '../../pages/savingsGoals/savingsGoals';

When(/^the user accesses to savings goals$/, async function() {
    await navigation.savingsGoals.savingsGoals.go();
});

When(/^the user starts the creation of a savings goal$/, async function() {
    await savingsGoalsPage.startGoalCreation();
});`},
            {kind: 'text', title: 'Reglas', body:
`• function() anónima, no arrow functions (=>).
• Una sola navegación por step; nada de elementos directos (page.button.click()).
• Si el step crece, esa lógica va a un método de la page.
• El texto del step en minúsculas, funcional y sin duplicar otro existente.`},
        ],
        why: ['Los steps son solo el «pegamento»: si tienen lógica, se duplica y se vuelve difícil de mantener.'],
        checklist: [
            'Cada step del .feature tiene definición (y solo una)',
            'Ningún step usa arrow functions ni toca elementos',
            'Reutilicé los steps comunes de validación',
        ],
    },
    {
        id: 'ejecutar',
        title: 'Ejecuta y graba',
        summary: 'Corre tu escenario y, cuando pase, grábalo en vBank.',
        where: ['test/e2e/config/localExampleWeb.js (haz una copia local, no subas cambios a la plantilla)'],
        blocks: [
            {kind: 'code', title: 'En tu copia de localExampleWeb.js', body:
`cucumberOpts: {
    tagExpression: '@SGO001',
},
vbank: {
    recording: true,   // solo para grabar; déjalo en false para reproducir
},`},
            {kind: 'code', title: 'Terminal 2 · test/e2e', body: `npm run test:e2e -- -c config/localExampleWeb.js`},
            {kind: 'text', body:
`• Graba cuando el test ya pase. Si cambias el nombre de un escenario, regrábalo y borra la carpeta vieja en vbank/.
• Escenarios con OTP: pausa larga solo al grabar; al reproducir, OTP fija (ej. 123456) en la grabación.
• Ejecútalo 3 veces seguidas: si falla alguna, es flaky y hay que corregir esperas o selectores.`},
        ],
        why: ['Un test flaky bloquea las PR de todo el equipo; por eso no se integra hasta ser estable.'],
        checklist: [
            'El escenario pasa 3 veces seguidas',
            'Existe su carpeta en vbank/ y no hay grabaciones duplicadas',
            'recording vuelve a false y no subí cambios a la plantilla de config',
        ],
    },
    {
        id: 'validar',
        title: 'Valida con MTP Gherkin Agent',
        summary: 'Antes de abrir la PR, revisa tu feature con el agente.',
        blocks: [
            {kind: 'text', body:
`1. Ve a Analizar Métricas → Analizar y selecciona tu .feature.
2. Corrige todos los hallazgos de severidad Alta y revisa los Media.
3. Si el agente propone una corrección, revisa el diff antes de aplicarla.
4. Vuelve a analizar hasta que no queden altas.`},
            {kind: 'tip', body: 'El agente revisa tu feature y también las step definitions, navigations y pages que usa.'},
        ],
        why: ['Son las mismas métricas con las que se revisa la PR: corregirlas antes ahorra rondas de comentarios.'],
        checklist: [
            'El análisis no tiene hallazgos de severidad Alta',
            'Revisé los hallazgos Media y justifiqué los que quedan',
            'Los escenarios del C204 coinciden con la PR (ID, títulos y estado)',
        ],
    },
];

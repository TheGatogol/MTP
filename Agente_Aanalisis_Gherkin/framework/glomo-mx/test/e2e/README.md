# GloMo E2E tests
En esta carpeta están los tests automatizados para el frontal de la aplicación GloMo.

## Solicitudes soporte
Para solicitar soporte para los tests e2e de GloMo, se debe contactar con el equipo CS QE, bien por buzón de
correo [Retail CS QE - MX <retail-cs-qe-mx.group@bbva.com>](mailto:retail-cs-qe-mx.group@bbva.com) o bien por el canal
Webex para soporte, [QE (Canal de soporte tests e2e)](webexteams://im?space=2e7fa420-693d-11ea-837a-4371bdf7ef0e).

## Documentación
Aunque en este fichero hay algunas nociones básicas, la documentación completa puede encontrarse
en [TeamSpaces > CS Retail Customers QE](https://teamspaces.bbva.com/teamspaces/cs-retail-customers-qe/overview).
Además, las notificaciones de actualizaciones en las herramientas las publicamos tanto en el TeamSpaces como en el canal
Webex de anuncios, [General · CS Retail Customers QE](webexteams://im?space=c7c3dc70-fd7e-11ea-8066-93ac28b2d4ed).

### Configuración
La configuración se basa en los ficheros de ejemplo incluidos en la carpeta [./config](./config):
* **[./config/localExampleWeb.js](./config/localExampleWeb.js)**: Fichero de ejemplo para ejecutar pruebas sobre un
  navegador de escritorio, concretamente Google Chrome.
* **[./config/localExampleAndroid.js](./config/localExampleAndroid.js)**: Fichero de ejemplo para ejecutar pruebas sobre
  un emulador Android.
* **[./config/localExampleIOS.js](./config/localExampleIOS.js)**: Fichero de ejemplo para ejecutar pruebas sobre un
  emulador iOS.

Estos ficheros no deben manipularse directamente, pues afectaría a otros desarrolladores, para evitarlo, hay que crear
una copia del fichero de ejemplo con otro nombre, cualquier copia creada será automáticamente ignorada por git, por lo
que no habría riesgo de que

### Ejecución
Para ejecutar se debe utilizar el siguiente comando, usando la copia de alguno de los ficheros de configuración.
```bash
npm run test:e2e -- -c config/MY_CONFIG.js
```
Esto ejecutará los tests que cumplan la expresión de tags que hayas indicado en la
propiedad `cucumberOpts.tagExpression`.

### Tags
Los tags sirven para identificar características de los escenarios. Hay una serie de tags definidos que tienen un
significado concreto:

#### Tags obligatorios
Todos los escenarios deben tener al menos un tag de cada punto de la siguiente enumeración:
* **ID escenario (`@ABC012`):** Tag identificador, todos los escenarios deben tener uno, que debe estar formado por 2-5
  letras y 3 números, pudiendo estar separado de manera opcional por un guion. Además, algunos escenarios tendrán un
  prefijo como `ANA_` para identificar que es un escenario de analíticas.
* **Tag de país (`@MX`):** Identificador del país en formado 2 caracteres.
* **Funcionalidad (`@foobar`):** Tag para identificar la funcionalidad, aunque generalmente se indicará a nivel Feature,
  en algunos casos podrá ir junto al escenario, si se trata de un caso que integra 2 funcionalidades, por ejemplo,
  mostrar viaje en curso en Dashboard, pertenece tanto a "Dashboard" como a "My Trips".
* **Dispositivo (`@android`/`@ios`/`@web`):** Marca en que dispositivos debe poder ejecutarse el escenario. Todo
  desarrollo web que no requiera de plugins nativos, tendrá que llevar el tag `@web`, y siempre que la funcionalidad,
  sea desarrollo nativo o web, esté pensada tanto para la aplicación Android como iOS, llevarán sus tags
  correspondientes, además del de web. Si la funcionalidad es nativa, solo el tag correspondiente al tipo de dispositivo
  para el que está desarrollada.
* **Dispositivo preparado (`@android-done`/`@ios-done`/`@web-done`):** Marca para que dispositivos el escenario está
  preparado para ejecutar. Por regla general, el tag `@web-done` exclude que estén también los tags `@android-done` e
  `@ios-done`, y ambos tags para dispositivos nativos, por lo general estarán presentes por igual.
* **Entorno de automatización (`@backend(name)`):** Identifica para que entorno está preparado el test. Dentro de los
  paréntesis se indica el nombre del entorno, los más habituales son `test` que se refiere al entorno de desarrollo
  y `artichoke` que se refiere al entorno de Artichoke.
    * `@test` es un alias de `@backend(test)`.
    * `@artichoke` es un alias de `@backend(artichoke)`.
* **Modo vBank (`@vbank`, `@!vbank`):** Indica si el escenario tiene o no tiene grabaciones de vBank. Siempre que tenga
  peticiones a backend que deban ser grabadas, tendrá que tener el tag `@vbank`, si no hay ninguna grabación, se
  indicará con `@!vbank`.

#### Tags opcionales
Estos tags se indican solo en determinados casos, según necesidad y el caso de uso en cuestión.
* **Smoke (`@smokeTest`):** Indica que el escenario es de tipo smoke, por tanto, se debe ejecutar en todas las
  construcciones.
* **Smoke (`@backend-smoke`):** Indica que es un escenario smoke con uso de backend, es decir, además de estar preparado
  para funcionar con vBank (que es obligatorio), está preparado para usarse usando backends de entornos previos.
* **vBank modificado (`@vbank-modified`):** Indica que ha sido necesario editar manualmente alguna de las grabaciones
  para que el escenario reproduzca el caso de uso.
* **Sin Data Manager (`@no-data-manager`):** Indica que no es necesario inicializar la conexión con DataManager para el
  test, ya que no se va a usar en el mismo.

#### Otros tags
Hay otros tags, que sin ser obligatorios, aportan mayor visión y trazabilidad a los casos definidos:
* **Identificador Xray: (`@XRAY.GLOMOAA-12345`):** Identifica el caso de uso en la plataforma Xray de Jira, se debe
  seguir el formato del ejemplo, siempre empezando por `XRAY.`
* **Test sanity (`@sanity`):** Identifica el test como "sanity", para usar dicho test como parte del flujo para validar
  el funcionamiento más básico de la aplicación.

#### Tags de exclusión
Hay algunos tags que excluyen de la ejecución en las integraciones, estos tags deben ser autorizados por QE antes de
incluirlos en un escenario, y siempre deben llevar una tarea Jira asociada con formato `@JIRA.GLOMOAA-12345`. Esta tarea
no puede ser, ni la tarea que se está entregando ni una tarea cerrada, debe ser la referencia a la tarea que, una vez
finalizada, desbloquee el escenario, permitiendo su automatización.
* **Manual (`@manual`):** Indica que el escenario no es automatizable, por tanto solo se entrega su definición. Esto no
  excluye que a futuro pueda dársele soporte y si pueda automatizarse.
    * Hay 3 variaciones de este tag, para cuando es necesario aplicarla solo a Android (`@manual-android`) o a
      iOS (`@manual-ios`) o a Web (`@manual-web`).
* **Fallo desconocido (`@failure`):** El test está mostrando errores que no se han podido identificar la causa.
* **Fallo en aplicación (`@appFix`):** Se ha detectado un error en la aplicación y el test arroja un error, pero, por
  causa mayor, el arreglo se demora, por tanto, el test se excluye (caso MUY puntual, debe tener una justificación de
  peso).
* **Exclusión temporal (`@tmpExclude`):** Es necesario excluir el test temporalmente de la ejecución automática.
* **Cuarentena (`@quarantine`):** El test está en cuarentena temporalmente por inestabilidad alta. Estará asociado a un
  equipo que tendrá un tiempo asignado para solucionar la inestabilidad.
    * Hay 3 variaciones de este tag, para cuando es necesario aplicarla solo a Android (`@quarantine-android`) o a
      iOS (`@quarantine-ios`) o a Web (`@quarantine-web`).
* **Exclusion Headless (`@exclude-headless`):** Por ciertas limitaciones los tests en Jenkins tanto en rama como en PR
  se ejecutan en modo *headless* (sin ventana). Algunos tests reportan fallo en este modo, por lo que es necesario
  excluirlos en dichas ejecuciones.

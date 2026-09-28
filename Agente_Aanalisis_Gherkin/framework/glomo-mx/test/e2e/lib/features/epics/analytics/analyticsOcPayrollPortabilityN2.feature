@ocPayrollPortabilityN2Analytics
Feature: Analytics - OC One Click N2

    @ANA_EVENT_OCN001
    @analytics
    @backend(test) @vbank @MX
    @ios @android @web
    @web-done
    Scenario: App On Click Start - The user access to proceedings from normal card
        Given a user with the following criteria
            | criteria                         |
            | payroll portability one click n2 |
        When the user accesses contract product section
        And the analytics interceptor service is initiated
        And the user accesses to the payroll portability n2 from "opportunities"
        Then the analytics events contains the following variables
            | item                                         | value                                              | type         | event              |
            | analytics                                    | analytics/glomo_base                               | json schema  | App On Click Start |
            | version DL                                   | 20250414_5.0                                       | string       | App On Click Start |
            | page intent                                  | informacion                                        | string       | App On Click Start |
            | page segment                                 | personas                                           | string       | App On Click Start |
            | page name                                    | app:privada:personas:oportunidades                 | string       | App On Click Start |
            | sysEnv                                       | app                                                | string       | App On Click Start |
            | channel                                      | online                                             | string       | App On Click Start |
            | language                                     | ES                                                 | string       | App On Click Start |
            | level 1                                      | oportunidades                                      | string       | App On Click Start |
            | business unit                                | BBVA Mexico                                        | string       | App On Click Start |
            | site app name                                | App BBVA Mexico                                    | string       | App On Click Start |
            | project name                                 | Glomo                                              | string       | App On Click Start |
            | page area                                    | privada                                            | string       | App On Click Start |
            | internal campaign event name                 | IntCmpClick                                        | string       | App On Click Start |
            | internal campaign attributes location        | contract product section--centro-2-5-16            | string       | App On Click Start |
            | internal campaign attributes campaign format | list                                               | string       | App On Click Start |
            | internal campaign attributes name            | -tus beneficios ya estan aqui no los dejes escapar | string       | App On Click Start |
            | internal campaign attributes product         | cuentas                                            | string       | App On Click Start |
            | device mobile                                | si                                                 | string       | App On Click Start |
            | device root                                  |                                                    | string       | App On Click Start |
            | user userState                               | logado                                             | string       | App On Click Start |
            | user segment global                          | 003001                                             | string       | App On Click Start |
            | user gender                                  | gender                                             | regexp named | App On Click Start |
            | user age                                     | age                                                | regexp named | App On Click Start |
            | product primary category                     | cuentas                                            | string       | App On Click Start |
            | product name                                 | cuenta nomina                                      | string       | App On Click Start |
            | fulfillment model                            | online                                             | string       | App On Click Start |
            | application type                             | contratacion                                       | string       | App On Click Start |
            | application name                             | portabilidad nomina                                | string       | App On Click Start |
            | application step                             | me interesa oportunidades clientes n2              | string       | App On Click Start |
            | global application                           | payroll portability                                | string       | App On Click Start |

    @ANA_EVENT_OCN002
    @analytics
    @backend(test) @vbank @MX
    @ios @android @web
    @web-done
    Scenario: App On Click Start - The user access to proceedings from priority card
        Given a user with the following criteria
            | criteria                         |
            | payroll portability one click n2 |
        When the user accesses contract product section
        And the analytics interceptor service is initiated
        And the user accesses to the payroll portability n2 from "opportunities"
        Then the analytics events contains the following variables
            | item                                         | value                                              | type         | event              |
            | analytics                                    | analytics/glomo_base                               | json schema  | App On Click Start |
            | version DL                                   | 20250414_5.0                                       | string       | App On Click Start |
            | page intent                                  | informacion                                        | string       | App On Click Start |
            | page segment                                 | personas                                           | string       | App On Click Start |
            | page name                                    | app:privada:personas:oportunidades                 | string       | App On Click Start |
            | sysEnv                                       | app                                                | string       | App On Click Start |
            | channel                                      | online                                             | string       | App On Click Start |
            | language                                     | ES                                                 | string       | App On Click Start |
            | level 1                                      | oportunidades                                      | string       | App On Click Start |
            | business unit                                | BBVA Mexico                                        | string       | App On Click Start |
            | site app name                                | App BBVA Mexico                                    | string       | App On Click Start |
            | project name                                 | Glomo                                              | string       | App On Click Start |
            | page area                                    | privada                                            | string       | App On Click Start |
            | internal campaign event name                 | IntCmpClick                                        | string       | App On Click Start |
            | internal campaign attributes location        | contract product section--superior-1-1-16          | string       | App On Click Start |
            | internal campaign attributes campaign format | card                                               | string       | App On Click Start |
            | internal campaign attributes name            | -tus beneficios ya estan aqui no los dejes escapar | string       | App On Click Start |
            | internal campaign attributes product         | cuentas                                            | string       | App On Click Start |
            | device mobile                                | si                                                 | string       | App On Click Start |
            | device root                                  |                                                    | string       | App On Click Start |
            | user userState                               | logado                                             | string       | App On Click Start |
            | user segment global                          | 003001                                             | string       | App On Click Start |
            | user gender                                  | gender                                             | regexp named | App On Click Start |
            | user age                                     | age                                                | regexp named | App On Click Start |
            | product primary category                     | cuentas                                            | string       | App On Click Start |
            | product name                                 | cuenta nomina                                      | string       | App On Click Start |
            | fulfillment model                            | online                                             | string       | App On Click Start |
            | application type                             | contratacion                                       | string       | App On Click Start |
            | application name                             | portabilidad nomina                                | string       | App On Click Start |
            | application step                             | me interesa oportunidades clientes n2              | string       | App On Click Start |
            | global application                           | payroll portability                                | string       | App On Click Start |

    @ANA_EVENT_OCN003
    @analytics
    @backend(test) @vbank @MX
    @ios @android @web
    @web-done
    Scenario: App On Click Start - The user sees oc payroll portability n2 offer on the dashboard
        Given a user with the following criteria
            | criteria                         |
            | payroll portability one click n2 |
        When the user access the "dashboard" screen
        And the analytics interceptor service is initiated
        And the user accesses to the payroll portability n2 from "nbo"
        Then the analytics events contains the following variables
            | item                                         | value                                               | type         | event              | event number |
            | analytics                                    | analytics/glomo_base                                | json schema  | App On Click Start | 1            |
            | version DL                                   | 20250414_5.0                                        | string       | App On Click Start | 1            |
            | page intent                                  | informacion                                         | string       | App On Click Start | 1            |
            | page segment                                 | personas                                            | string       | App On Click Start | 1            |
            | page name                                    | app:privada:personas:posicion global:destacado      | string       | App On Click Start | 1            |
            | sysEnv                                       | app                                                 | string       | App On Click Start | 1            |
            | channel                                      | online                                              | string       | App On Click Start | 1            |
            | language                                     | ES                                                  | string       | App On Click Start | 1            |
            | level 1                                      | posicion global                                     | string       | App On Click Start | 1            |
            | level 2                                      | destacado                                           | string       | App On Click Start | 1            |
            | business unit                                | BBVA Mexico                                         | string       | App On Click Start | 1            |
            | site app name                                | App BBVA Mexico                                     | string       | App On Click Start | 1            |
            | project name                                 | Futura                                              | string       | App On Click Start | 1            |
            | page area                                    | privada                                             | string       | App On Click Start | 1            |
            | internal campaign event name                 | IntCmpClick                                         | string       | App On Click Start | 1            |
            | internal campaign attributes location        | dashboard destacado-te puede interesar-centro-2-1-5 | string       | App On Click Start | 1            |
            | internal campaign attributes campaign format | carrusel                                            | string       | App On Click Start | 1            |
            | internal campaign attributes name            | -tus beneficios ya estan aqui no los dejes escapar  | string       | App On Click Start | 1            |
            | internal campaign attributes product         | cuentas                                             | string       | App On Click Start | 1            |
            | device mobile                                | si                                                  | string       | App On Click Start | 1            |
            | device root                                  |                                                     | string       | App On Click Start | 1            |
            | user userState                               | logado                                              | string       | App On Click Start | 1            |
            | user segment global                          | 003001                                              | string       | App On Click Start | 1            |
            | user gender                                  | gender                                              | regexp named | App On Click Start | 1            |
            | user age                                     | age                                                 | regexp named | App On Click Start | 1            |
            | product primary category                     | cuentas                                             | string       | App On Click Start | 1            |
            | product name                                 | cuenta nomina                                       | string       | App On Click Start | 1            |
            | fulfillment model                            | online                                              | string       | App On Click Start | 1            |
            | application type                             | contratacion                                        | string       | App On Click Start | 1            |
            | application name                             | portabilidad nomina                                 | string       | App On Click Start | 1            |
            | application step                             | me interesa posicion global nbo                     | string       | App On Click Start | 1            |
            | global application                           | payroll portability                                 | string       | App On Click Start | 1            |

@IntelligentFrequentOperationsCreditCardAnalytics
Feature: Analytics - Notification Detail - Credit Card Payment

    @ANA_EVT_PCN001
    @analytics
    @vbank
    @MX @android @ios
    @web
    @backend(test)
    @web-done
    Scenario: Notification Card Payment - analytics event App On Click Start, App Page Visit
        Given a user with the following criteria
            | criteria                         |
            | frequent operations notification |
        And the user accesses center notification
        And the user open a credit card notification
        And the analytics interceptor service is initiated
        When the user access a credit card notification
        Then the analytics events contains the following variables
        | item                     | value                                                                     | type         | event                              |
        | analytics                | analytics/glomo_base                                                      | json schema  | App On Click Start, App Page Visit |
        | version dl               | 20250414_5.0                                                              | string       | App On Click Start, App Page Visit |
        | page name                | app:privada:personas:notificaciones:detalle                               | string       | App On Click Start                 |
        | page name                | app:privada:personas:operaciones frecuentes:transferencias:1 confirmacion | string       | App Page Visit                     |
        | level 1                  | notificaciones                                                            | string       | App On Click Start                 |
        | level 1                  | operaciones frecuentes                                                    | string       | App Page Visit                     |
        | level 2                  | detalle                                                                   | string       | App On Click Start                 |
        | level 2                  | transferencias                                                            | string       | App Page Visit                     |
        | level 3                  | 1 confirmacion                                                            | string       | App Page Visit                     |
        | language                 | ES                                                                        | string       | App On Click Start, App Page Visit |
        | page area                | privada                                                                   | string       | App On Click Start, App Page Visit |
        | page intent              | informacion                                                               | string       | App On Click Start, App Page Visit |
        | channel                  | online                                                                    | string       | App Page Visit                     |
        | page instance ID         | de                                                                        | string       | App On Click Start, App Page Visit |
        | page info version        | appVersion                                                                | regexp named | App On Click Start, App Page Visit |
        | page segment             | personas                                                                  | string       | App On Click Start, App Page Visit |
        | sysEnv                   | app                                                                       | string       | App On Click Start, App Page Visit |
        | business unit            | BBVA Mexico                                                               | string       | App On Click Start, App Page Visit |
        | site app name            | App BBVA Mexico                                                           | string       | App On Click Start, App Page Visit |
        | project name             | Glomo                                                                     | string       | App On Click Start, App Page Visit |
        | device mobile            | si                                                                        | string       | App On Click Start, App Page Visit |
        | user userState           | logado                                                                    | string       | App On Click Start, App Page Visit |
        | user segment global      | 003001                                                                    | string       | App On Click Start, App Page Visit |
        | profile ID               | profileID                                                                 | regexp named | App On Click Start, App Page Visit |
        | user age                 | age                                                                       | regexp named | App On Click Start, App Page Visit |
        | user gender              | femenino                                                                  | string       | App On Click Start, App Page Visit |
        | global application       | smart frequent operation                                                  | string       | App On Click Start, App Page Visit |
        | application name         | realizar operacion frecuente inteligente                                  | string       | App On Click Start, App Page Visit |
        | application type         | operativa                                                                 | string       | App On Click Start, App Page Visit |
        | application step         | centro de notificaciones                                                  | string       | App On Click Start                 |
        | application step         | 1 confirmacion                                                            | string       | App Page Visit                     |
        | fulfillment model        | online                                                                    | string       | App On Click Start                 |
        | application typology     | journey notificaciones                                                    | string       | App On Click Start, App Page Visit |
        | application process      | pagar tarjeta                                                             | string       | App On Click Start, App Page Visit |
        | product primary category | cuentas                                                                   | string       | App Page Visit                     |
        | product subtype          | cuentas ahorro                                                            | string       | App Page Visit                     |
        | product amount           | 16735.33                                                                  | number       | App Page Visit                     |
        | product currency         | MXN                                                                       | string       | App Page Visit                     |

    @ANA_EVT_PCN002
    @analytics
    @vbank
    @MX @android @ios
    @web
    @backend(test)
    @web-done
    Scenario: Notification Card Payment - analytics event App Started
        Given a user with the following criteria
            | criteria                         |
            | frequent operations notification |
        And the user accesses center notification
        And the user open a credit card notification
        And the analytics interceptor service is initiated
        And the user access a credit card notification
        And the user selects open notification for "minimum amount" payment method
        When the user change the payment amount
        Then the analytics events contains the following variables
        | item                     | value                                                                     | type         | event       |
        | analytics                | analytics/glomo_base                                                      | json schema  | App Started |
        | version dl               | 20250414_5.0                                                              | string       | App Started |
        | page name                | app:privada:personas:operaciones frecuentes:transferencias:1 confirmacion | string       | App Started |
        | level 1                  | operaciones frecuentes                                                    | string       | App Started |
        | level 2                  | transferencias                                                            | string       | App Started |
        | level 3                  | 1 confirmacion                                                            | string       | App Started |
        | language                 | ES                                                                        | string       | App Started |
        | page area                | privada                                                                   | string       | App Started |
        | page intent              | informacion                                                               | string       | App Started |
        | channel                  | online                                                                    | string       | App Started |
        | page instance ID         | de                                                                        | string       | App Started |
        | page info version        | appVersion                                                                | regexp named | App Started |
        | page segment             | personas                                                                  | string       | App Started |
        | sysEnv                   | app                                                                       | string       | App Started |
        | business unit            | BBVA Mexico                                                               | string       | App Started |
        | site app name            | App BBVA Mexico                                                           | string       | App Started |
        | project name             | Glomo                                                                     | string       | App Started |
        | device mobile            | si                                                                        | string       | App Started |
        | user userState           | logado                                                                    | string       | App Started |
        | user segment global      | 003001                                                                    | string       | App Started |
        | profile ID               | profileID                                                                 | regexp named | App Started |
        | user age                 | age                                                                       | regexp named | App Started |
        | user gender              | femenino                                                                  | string       | App Started |
        | global application       | smart frequent operation                                                  | string       | App Started |
        | application name         | realizar operacion frecuente inteligente                                  | string       | App Started |
        | application type         | operativa                                                                 | string       | App Started |
        | application step         | cambiar importe                                                           | string       | App Started |
        | fulfillment model        | online                                                                    | string       | App Started |
        | application typology     | journey notificaciones                                                    | string       | App Started |
        | application process      | pagar tarjeta                                                             | string       | App Started |
        | product primary category | cuentas                                                                   | string       | App Started |
        | product subtype          | cuentas ahorro                                                            | string       | App Started |
        | product amount           | 16633.33                                                                  | number       | App Started |
        | product currency         | MXN                                                                       | string       | App Started |

    @ANA_EVT_PCN003
    @analytics
    @vbank
    @MX @android @ios
    @web
    @backend(test)
    @web-done
    Scenario: Notification Card Payment - analytics event App Completed
        Given a user with the following criteria
            | criteria                         |
            | frequent operations notification |
        And the user accesses center notification
        And the user open a credit card notification
        And the analytics interceptor service is initiated
        And the user access a credit card notification
        And the user selects open notification for "minimum amount" payment method
        When the user execute frequent credit card payment receipt operation
        Then the analytics events contains the following variables
        | item                     | value                                                                     | type         | event         |
        | analytics                | analytics/glomo_base                                                      | json schema  | App Completed |
        | version dl               | 20250414_5.0                                                              | string       | App Completed |
        | page name                | app:privada:personas:operaciones frecuentes:transferencias:pagina exitosa | string       | App Completed |
        | level 1                  | operaciones frecuentes                                                    | string       | App Completed |
        | level 2                  | transferencias                                                            | string       | App Completed |
        | level 3                  | pagina exitosa                                                            | string       | App Completed |
        | language                 | ES                                                                        | string       | App Completed |
        | page area                | privada                                                                   | string       | App Completed |
        | page intent              | informacion                                                               | string       | App Completed |
        | channel                  | online                                                                    | string       | App Completed |
        | page instance ID         | de                                                                        | string       | App Completed |
        | page info version        | appVersion                                                                | regexp named | App Completed |
        | page segment             | personas                                                                  | string       | App Completed |
        | sysEnv                   | app                                                                       | string       | App Completed |
        | business unit            | BBVA Mexico                                                               | string       | App Completed |
        | site app name            | App BBVA Mexico                                                           | string       | App Completed |
        | project name             | Glomo                                                                     | string       | App Completed |
        | device mobile            | si                                                                        | string       | App Completed |
        | user userState           | logado                                                                    | string       | App Completed |
        | user segment global      | 003001                                                                    | string       | App Completed |
        | profile ID               | profileID                                                                 | regexp named | App Completed |
        | user age                 | age                                                                       | regexp named | App Completed |
        | user gender              | femenino                                                                  | string       | App Completed |
        | global application       | smart frequent operation                                                  | string       | App Completed |
        | application name         | realizar operacion frecuente inteligente                                  | string       | App Completed |
        | application type         | operativa                                                                 | string       | App Completed |
        | application step         | pagina exitosa                                                            | string       | App Completed |
        | fulfillment model        | online                                                                    | string       | App Completed |
        | application typology     | journey notificaciones                                                    | string       | App Completed |
        | application process      | pagar tarjeta                                                             | string       | App Completed |
        | product primary category | cuentas                                                                   | string       | App Completed |
        | product subtype          | cuentas ahorro                                                            | string       | App Completed |
        | product amount           | 16650.33                                                                  | number       | App Completed |
        | product currency         | MXN                                                                       | string       | App Completed |

@reuseTransferAnalytics
Feature: Analytics - Reuse Transfer

    @ANA_EVENT_RET001
    @vbank
    @MX
    @analytics
    @backend(test)
    @web @ios @android
    @web-done
    Scenario Outline: Reuse operation list <transaction> transfer - analytics event App On Click Start, App Page Visit
        Given a user with the following criteria
            | criteria |
            | accounts |
        And the user accesses to transfer from dashboard and selects a origin "account own"
        And the analytics interceptor service is initiated
        And the user selects a destinatary from "reuse operations"
        When the user select an "<transaction>" operation from transactions list
        Then the analytics events contains the following variables
            | item                     | value                                                                       | type         | event                              |
            | analytics                | analytics/glomo_base                                                        | json schema  | App On Click Start, App Page Visit |
            | version dl               | 20250414_5.0                                                                | string       | App On Click Start, App Page Visit |
            | page name                | app:privada:personas:cuentas:transferencias:1 cuenta destino                | string       | App On Click Start                 |
            | page name                | app:privada:personas:operaciones reutilizadas:transferencias:1 confirmacion | string       | App Page Visit                     |
            | level 1                  | cuentas                                                                     | string       | App On Click Start                 |
            | level 1                  | operaciones reutilizadas                                                    | string       | App Page Visit                     |
            | level 2                  | transferencias                                                              | string       | App On Click Start, App Page Visit |
            | level 3                  | 1 cuenta destino                                                            | string       | App On Click Start                 |
            | level 3                  | 1 confirmacion                                                              | string       | App Page Visit                     |
            | language                 | ES                                                                          | string       | App On Click Start, App Page Visit |
            | page area                | privada                                                                     | string       | App On Click Start, App Page Visit |
            | page intent              | informacion                                                                 | string       | App On Click Start                 |
            | page intent              | transaccion                                                                 | string       | App Page Visit                     |
            | channel                  | online                                                                      | string       | App Page Visit                     |
            | page instance ID         | de                                                                          | string       | App On Click Start, App Page Visit |
            | page info version        | appVersion                                                                  | regexp named | App On Click Start, App Page Visit |
            | page segment             | personas                                                                    | string       | App On Click Start, App Page Visit |
            | sysEnv                   | app                                                                         | string       | App On Click Start, App Page Visit |
            | business unit            | BBVA Mexico                                                                 | string       | App On Click Start, App Page Visit |
            | site app name            | App BBVA Mexico                                                             | string       | App On Click Start, App Page Visit |
            | project name             | Glomo                                                                       | string       | App On Click Start, App Page Visit |
            | device mobile            | si                                                                          | string       | App On Click Start, App Page Visit |
            | user userState           | logado                                                                      | string       | App On Click Start, App Page Visit |
            | user segment global      | 003001                                                                      | string       | App On Click Start, App Page Visit |
            | profile ID               | profileID                                                                   | regexp named | App On Click Start, App Page Visit |
            | user age                 | age                                                                         | regexp named | App On Click Start, App Page Visit |
            | user gender              | femenino                                                                    | string       | App On Click Start, App Page Visit |
            | global application       | frequent operation                                                          | string       | App On Click Start, App Page Visit |
            | application name         | realizar operacion frecuente                                                | string       | App On Click Start, App Page Visit |
            | application type         | operativa                                                                   | string       | App On Click Start, App Page Visit |
            | application step         | reutilizar operacion destinatario transferencias                            | string       | App On Click Start                 |
            | application step         | 1 confirmacion                                                              | string       | App Page Visit                     |
            | fulfillment model        | online                                                                      | string       | App On Click Start                 |
            | application typology     | journey transferir                                                          | string       | App On Click Start, App Page Visit |
            | application process      | <process>                                                                   | string       | App On Click Start, App Page Visit |
            | custom fields            | id operacion reutilizada:<id_operation>                                     | string       | App On Click Start, App Page Visit |
            | product primary category | cuentas                                                                     | string       | App On Click Start, App Page Visit |
            | product subtype          | cuentas ahorro                                                              | string       | App On Click Start, App Page Visit |
            | product amount           | <amount>                                                                    | number       | App On Click Start, App Page Visit |
            | product currency         | MXN                                                                         | string       | App On Click Start, App Page Visit |

        Examples:
            | transaction | process                       | id_operation | amount |
            | own         | transferencia cuentas propias | 8880072725   | 122    |
            | internal    | transferencia a terceros      | 0032002068   | 50     |
            | interbank   | transferencia otros bancos    | 1802250      | 31     |

    @ANA_EVENT_RET002
    @vbank
    @MX
    @analytics
    @backend(test)
    @web @ios @android
    @tmpExclude @JIRA.GLOMOMX-254311
    Scenario Outline: Reuse operation list <transaction> transfer from modal - analytics event App On Click Start
        Given a user with the following criteria
            | criteria |
            | accounts |
        And the user accesses to transfer from dashboard and selects a origin "account own"
        And the analytics interceptor service is initiated
        And the user selects a destinatary from "reuse operations"
        When the user select an "<transaction>" operation from transactions list modal
        Then the analytics events contains the following variables
            | item                     | value                                                              | type         | event              |
            | analytics                | analytics/glomo_base                                               | json schema  | App On Click Start |
            | version dl               | 20250414_5.0                                                       | string       | App On Click Start |
            | page name                | app:privada:personas:cuentas:transferencias:ultimas transferencias | string       | App On Click Start |
            | level 1                  | cuentas                                                            | string       | App On Click Start |
            | level 2                  | transferencias                                                     | string       | App On Click Start |
            | level 3                  | ultimas transferencias                                             | string       | App On Click Start |
            | language                 | ES                                                                 | string       | App On Click Start |
            | page area                | privada                                                            | string       | App On Click Start |
            | page intent              | informacion                                                        | string       | App On Click Start |
            | page instance ID         | de                                                                 | string       | App On Click Start |
            | page info version        | appVersion                                                         | regexp named | App On Click Start |
            | page segment             | personas                                                           | string       | App On Click Start |
            | sysEnv                   | app                                                                | string       | App On Click Start |
            | business unit            | BBVA Mexico                                                        | string       | App On Click Start |
            | site app name            | App BBVA Mexico                                                    | string       | App On Click Start |
            | project name             | Glomo                                                              | string       | App On Click Start |
            | device mobile            | si                                                                 | string       | App On Click Start |
            | user userState           | logado                                                             | string       | App On Click Start |
            | user segment global      | 003001                                                             | string       | App On Click Start |
            | profile ID               | profileID                                                          | regexp named | App On Click Start |
            | user age                 | age                                                                | regexp named | App On Click Start |
            | user gender              | femenino                                                           | string       | App On Click Start |
            | global application       | frequent operation                                                 | string       | App On Click Start |
            | application name         | realizar operacion frecuente                                       | string       | App On Click Start |
            | application type         | operativa                                                          | string       | App On Click Start |
            | application step         | reutilizar operacion ultimas transferencias                        | string       | App On Click Start |
            | fulfillment model        | online                                                             | string       | App On Click Start |
            | application typology     | journey transferir                                                 | string       | App On Click Start |
            | application process      | <process>                                                          | string       | App On Click Start |
            | custom fields            | id operacion reutilizada:<id_operation>                            | string       | App On Click Start |
            | product primary category | cuentas                                                            | string       | App On Click Start |
            | product subtype          | cuentas ahorro                                                     | string       | App On Click Start |
            | product amount           | <amount>                                                           | number       | App On Click Start |
            | product currency         | MXN                                                                | string       | App On Click Start |

        Examples:
            | transaction | process                       | id_operation | amount |
            | own         | transferencia cuentas propias | 8880072725   | 122    |
            | internal    | transferencia a terceros      | 0032002068   | 50     |
            | interbank   | transferencia otros bancos    | 1802250      | 31     |

    @ANA_EVENT_RET003
    @vbank
    @analytics
    @MX @web @android @ios
    @backend(test)
    @web-done
    Scenario Outline: Reuse operation list <transaction> transfer - analytics event App Started, App Completed
        Given a user with the following criteria
            | criteria |
            | accounts |
        And the user accesses to transfer from dashboard and selects a origin "account own"
        And the user selects a destinatary from "reuse operations"
        And the analytics interceptor service is initiated
        And the user select an "<transaction>" operation from transactions list
        When the user completes the reuse transfer process with otp code
        Then the analytics events contains the following variables
            | item                     | value                                                                       | type         | event                      |
            | analytics                | analytics/glomo_base                                                        | json schema  | App Started, App Completed |
            | version dl               | 20250414_5.0                                                                | string       | App Started, App Completed |
            | page name                | app:privada:personas:operaciones reutilizadas:transferencias:1 confirmacion | string       | App Started                |
            | page name                | app:privada:personas:operaciones reutilizadas:transferencias:pagina exitosa | string       | App Completed              |
            | level 1                  | operaciones reutilizadas                                                    | string       | App Started, App Completed |
            | level 2                  | transferencias                                                              | string       | App Started, App Completed |
            | level 3                  | 1 confirmacion                                                              | string       | App Started                |
            | level 3                  | pagina exitosa                                                              | string       | App Completed              |
            | language                 | ES                                                                          | string       | App Started, App Completed |
            | page area                | privada                                                                     | string       | App Started, App Completed |
            | page intent              | transaccion                                                                 | string       | App Started, App Completed |
            | channel                  | online                                                                      | string       | App Started, App Completed |
            | page instance ID         | de                                                                          | string       | App Started, App Completed |
            | page info version        | appVersion                                                                  | regexp named | App Started, App Completed |
            | page segment             | personas                                                                    | string       | App Started, App Completed |
            | sysEnv                   | app                                                                         | string       | App Started, App Completed |
            | business unit            | BBVA Mexico                                                                 | string       | App Started, App Completed |
            | site app name            | App BBVA Mexico                                                             | string       | App Started, App Completed |
            | project name             | Glomo                                                                       | string       | App Started, App Completed |
            | device mobile            | si                                                                          | string       | App Started, App Completed |
            | user userState           | logado                                                                      | string       | App Started, App Completed |
            | user segment global      | 003001                                                                      | string       | App Started, App Completed |
            | profile ID               | profileID                                                                   | regexp named | App Started, App Completed |
            | user age                 | age                                                                         | regexp named | App Started, App Completed |
            | user gender              | gender                                                                      | regexp named | App Started, App Completed |
            | global application       | frequent operation                                                          | string       | App Started, App Completed |
            | application name         | realizar operacion frecuente                                                | string       | App Started, App Completed |
            | application type         | operativa                                                                   | string       | App Started, App Completed |
            | fulfillment model        | online                                                                      | string       | App Started, App Completed |
            | application step         | continuar                                                                   | string       | App Started                |
            | application step         | pagina exitosa                                                              | string       | App Completed              |
            | application typology     | journey transferir                                                          | string       | App Started, App Completed |
            | application process      | <process>                                                                   | string       | App Started, App Completed |
            | custom fields            | id operacion reutilizada:<id_operation>                                     | string       | App Started                |
            | custom fields            | id operacion reutilizada:<id_operation>,firma:token                         | string       | App Completed              |
            | product primary category | cuentas                                                                     | string       | App Started, App Completed |
            | product subtype          | cuentas ahorro                                                              | string       | App Started, App Completed |
            | product amount           | <amount>                                                                    | number       | App Started, App Completed |
            | product currency         | MXN                                                                         | string       | App Started, App Completed |

        Examples:
            | transaction | process                       | id_operation | amount |
            | internal    | transferencia a terceros      | 0032002068   | 50     |
            | interbank   | transferencia otros bancos    | 1802250      | 31     |

    @ANA_EVENT_RET004
    @vbank
    @analytics
    @MX @web @android @ios
    @backend(test)
    @web-done
    Scenario: Reuse operation list own transfer - analytics event App Started, App Completed
        Given a user with the following criteria
            | criteria |
            | accounts |
        And the user accesses to transfer from dashboard and selects a origin "account own"
        And the user selects a destinatary from "reuse operations"
        And the analytics interceptor service is initiated
        And the user select an "own" operation from transactions list
        When the user completes the transfer process
        Then the analytics events contains the following variables
            | item                     | value                                                                       | type         | event                      |
            | analytics                | analytics/glomo_base                                                        | json schema  | App Started, App Completed |
            | version dl               | 20250414_5.0                                                                | string       | App Started, App Completed |
            | page name                | app:privada:personas:operaciones reutilizadas:transferencias:1 confirmacion | string       | App Started                |
            | page name                | app:privada:personas:operaciones reutilizadas:transferencias:pagina exitosa | string       | App Completed              |
            | level 1                  | operaciones reutilizadas                                                    | string       | App Started, App Completed |
            | level 2                  | transferencias                                                              | string       | App Started, App Completed |
            | level 3                  | 1 confirmacion                                                              | string       | App Started                |
            | level 3                  | pagina exitosa                                                              | string       | App Completed              |
            | language                 | ES                                                                          | string       | App Started, App Completed |
            | page area                | privada                                                                     | string       | App Started, App Completed |
            | page intent              | transaccion                                                                 | string       | App Started, App Completed |
            | channel                  | online                                                                      | string       | App Started, App Completed |
            | page instance ID         | de                                                                          | string       | App Started, App Completed |
            | page info version        | appVersion                                                                  | regexp named | App Started, App Completed |
            | page segment             | personas                                                                    | string       | App Started, App Completed |
            | sysEnv                   | app                                                                         | string       | App Started, App Completed |
            | business unit            | BBVA Mexico                                                                 | string       | App Started, App Completed |
            | site app name            | App BBVA Mexico                                                             | string       | App Started, App Completed |
            | project name             | Glomo                                                                       | string       | App Started, App Completed |
            | device mobile            | si                                                                          | string       | App Started, App Completed |
            | user userState           | logado                                                                      | string       | App Started, App Completed |
            | user segment global      | 003001                                                                      | string       | App Started, App Completed |
            | profile ID               | profileID                                                                   | regexp named | App Started, App Completed |
            | user age                 | age                                                                         | regexp named | App Started, App Completed |
            | user gender              | gender                                                                      | regexp named | App Started, App Completed |
            | global application       | frequent operation                                                          | string       | App Started, App Completed |
            | application name         | realizar operacion frecuente                                                | string       | App Started, App Completed |
            | application type         | operativa                                                                   | string       | App Started, App Completed |
            | fulfillment model        | online                                                                      | string       | App Started, App Completed |
            | application step         | continuar                                                                   | string       | App Started                |
            | application step         | pagina exitosa                                                              | string       | App Completed              |
            | application typology     | journey transferir                                                          | string       | App Started, App Completed |
            | application process      | transferencia cuentas propias                                               | string       | App Started, App Completed |
            | custom fields            | id operacion reutilizada:8182293435                                         | string       | App Started, App Completed |
            | product primary category | cuentas                                                                     | string       | App Started, App Completed |
            | product subtype          | cuentas ahorro                                                              | string       | App Started, App Completed |
            | product amount           | 100                                                                         | number       | App Started, App Completed |
            | product currency         | MXN                                                                         | string       | App Started, App Completed |

    @ANA_EVENT_RET005
    @vbank
    @analytics
    @MX @web @android @ios
    @backend(test)
    @web-done
    Scenario: Reuse operation list interbank transfer - concept - Analytics concept view
        Given a user with the following criteria
            | criteria |
            | accounts |
        And the user accesses to transfer from dashboard and selects a origin "account own"
        And the analytics interceptor service is initiated
        And the user selects a destinatary from "reuse operations"
        When the user select an "interbank" operation from transactions list
        Then the analytics events contains the following variables
            | item                    | value                                                                 | type             | event     |
            | analytics               | analytics/glomo_base                                                  | json schema      | Page View |
            | version dl              | 20250414_5.0                                                          | string           | Page View |
            | page name               | app:privada:personas:operaciones reutilizadas:transferencias:concepto | string           | Page View |
            | level 1                 | operaciones reutilizadas                                              | string           | Page View |
            | level 2                 | transferencias                                                        | string           | Page View |
            | level 3                 | concepto                                                              | string           | Page View |
            | language                | ES                                                                    | string           | Page View |
            | page area               | privada                                                               | string           | Page View |
            | page intent             | transaccion                                                           | string           | Page View |
            | channel                 | online                                                                | string           | Page View |
            | page instance ID        | de                                                                    | string           | Page View |
            | page info version       | appVersion                                                            | regexp named     | Page View |
            | page segment            | personas                                                              | string           | Page View |
            | sysEnv                  | app                                                                   | string           | Page View |
            | business unit           | BBVA Mexico                                                           | string           | Page View |
            | site app name           | App BBVA Mexico                                                       | string           | Page View |
            | project name            | Glomo                                                                 | string           | Page View |
            | device mobile           | si                                                                    | string           | Page View |
            | user userState          | logado                                                                | string           | Page View |
            | user segment global     | 003001                                                                | string           | Page View |
            | profile ID              | profileID                                                             | regexp named     | Page View |
            | user age                | age                                                                   | regexp named     | Page View |
            | user gender             | gender                                                                | regexp named     | Page View |
            | internal campaign       |                                                                       | empty array      | Page View |
            | optimization attributes |                                                                       | empty array      | Page View |
            | application             |                                                                       | empty str object | Page View |
            | products attributes     |                                                                       | empty array      | Page View |

    @ANA_EVENT_RET006
    @vbank
    @analytics
    @MX @web @android @ios
    @backend(test)
    @web-done
    Scenario: Reuse operation list interbank transfer - otp - Analytics concept view
        Given a user with the following criteria
            | criteria |
            | accounts |
        And the user accesses to transfer from dashboard and selects a origin "account own"
        And the user selects a destinatary from "reuse operations"
        And the user select an "internal" operation from transactions list
        And the analytics interceptor service is initiated
        When the user completes the reuse transfer process with otp code
        Then the analytics events contains the following variables
            | item                    | value                                                            | type             | event     |
            | analytics               | analytics/glomo_base                                             | json schema      | Page View |
            | version dl              | 20250414_5.0                                                     | string           | Page View |
            | page name               | app:privada:personas:operaciones reutilizadas:transferencias:otp | string           | Page View |
            | level 1                 | operaciones reutilizadas                                         | string           | Page View |
            | level 2                 | transferencias                                                   | string           | Page View |
            | level 3                 | otp                                                              | string           | Page View |
            | language                | ES                                                               | string           | Page View |
            | page area               | privada                                                          | string           | Page View |
            | page intent             | transaccion                                                      | string           | Page View |
            | channel                 | online                                                           | string           | Page View |
            | page instance ID        | de                                                               | string           | Page View |
            | page info version       | appVersion                                                       | regexp named     | Page View |
            | page segment            | personas                                                         | string           | Page View |
            | sysEnv                  | app                                                              | string           | Page View |
            | business unit           | BBVA Mexico                                                      | string           | Page View |
            | site app name           | App BBVA Mexico                                                  | string           | Page View |
            | project name            | Glomo                                                            | string           | Page View |
            | device mobile           | si                                                               | string           | Page View |
            | user userState          | logado                                                           | string           | Page View |
            | user segment global     | 003001                                                           | string           | Page View |
            | profile ID              | profileID                                                        | regexp named     | Page View |
            | user age                | age                                                              | regexp named     | Page View |
            | user gender             | gender                                                           | regexp named     | Page View |
            | internal campaign       |                                                                  | empty array      | Page View |
            | optimization attributes |                                                                  | empty array      | Page View |
            | application             |                                                                  | empty str object | Page View |
            | products attributes     |                                                                  | empty array      | Page View |

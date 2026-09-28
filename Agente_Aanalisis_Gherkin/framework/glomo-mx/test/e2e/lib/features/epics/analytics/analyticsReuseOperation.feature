@ReuseOperationAnalytics

Feature: Analytics - ReuseOperation
    @ANA_EVENT_RO001 @vbank
    @analytics
    @MX @web @android @ios
    @backend(test)
    @web-done
    Scenario Outline: Reuse operation <transaction> - analytics event App On Click Start, App Page Visit
        Given a user with the following criteria
            | criteria               |
            | reuse operation detail |
        And the user accesses to the operative account product detail
        And the user accesses the details of a movement from "detail product"
        And the analytics interceptor service is initiated
        When the user wants to reuse an "<transaction>" operation
        Then the analytics events contains the following variables
            | item                     | value                                                                         | type         | event                              |
            | analytics                | analytics/glomo_base                                                          | json schema  | App On Click Start, App Page Visit |
            | version dl               | 20250414_5.0                                                                  | string       | App On Click Start, App Page Visit |
            | page name                | app:privada:personas:cuentas:detalle:movimientos:detalle del movimiento       | string       | App On Click Start                 |
            | page name                | app:privada:personas:operaciones reutilizadas:<type_operation>:1 confirmacion | string       | App Page Visit                     |
            | level 1                  | cuentas                                                                       | string       | App On Click Start                 |
            | level 1                  | operaciones reutilizadas                                                      | string       | App Page Visit                     |
            | level 2                  | detalle                                                                       | string       | App On Click Start                 |
            | level 2                  | <type_operation>                                                              | string       | App Page Visit                     |
            | level 3                  | movimientos                                                                   | string       | App On Click Start                 |
            | level 3                  | 1 confirmacion                                                                | string       | App Page Visit                     |
            | level 4                  | detalle del movimiento                                                        | string       | App On Click Start                 |
            | language                 | ES                                                                            | string       | App On Click Start, App Page Visit |
            | page area                | privada                                                                       | string       | App On Click Start, App Page Visit |
            | page intent              | informacion                                                                   | string       | App On Click Start                 |
            | page intent              | transaccion                                                                   | string       | App Page Visit                     |
            | channel                  | online                                                                        | string       | App Page Visit                     |
            | page instance ID         | de                                                                            | string       | App On Click Start, App Page Visit |
            | page info version        | appVersion                                                                    | regexp named | App On Click Start, App Page Visit |
            | page segment             | personas                                                                      | string       | App On Click Start, App Page Visit |
            | sysEnv                   | app                                                                           | string       | App On Click Start, App Page Visit |
            | business unit            | BBVA Mexico                                                                   | string       | App On Click Start, App Page Visit |
            | site app name            | App BBVA Mexico                                                               | string       | App On Click Start, App Page Visit |
            | project name             | Glomo                                                                         | string       | App On Click Start, App Page Visit |
            | device mobile            | si                                                                            | string       | App On Click Start, App Page Visit |
            | user userState           | logado                                                                        | string       | App On Click Start, App Page Visit |
            | user segment global      | 003001                                                                        | string       | App On Click Start, App Page Visit |
            | profile ID               | profileID                                                                     | regexp named | App On Click Start, App Page Visit |
            | user age                 | age                                                                           | regexp named | App On Click Start, App Page Visit |
            | user gender              | masculino                                                                     | string       | App On Click Start, App Page Visit |
            | global application       | frequent operation                                                            | string       | App On Click Start, App Page Visit |
            | application name         | realizar operacion frecuente                                                  | string       | App On Click Start, App Page Visit |
            | application type         | operativa                                                                     | string       | App On Click Start, App Page Visit |
            | application step         | reutilizar operacion                                                          | string       | App On Click Start                 |
            | application step         | 1 confirmacion                                                                | string       | App Page Visit                     |
            | fulfillment model        | online                                                                        | string       | App On Click Start                 |
            | application typology     | <journey>                                                                     | string       | App On Click Start, App Page Visit |
            | application process      | <transaction>                                                                 | string       | App On Click Start, App Page Visit |
            | custom fields            | id operacion reutilizada:<id_operation>                                       | string       | App On Click Start, App Page Visit |
            | product primary category | cuentas                                                                       | string       | App On Click Start, App Page Visit |
            | product subtype          | cuentas ahorro                                                                | string       | App On Click Start, App Page Visit |
            | product amount           | <amount>                                                                      | number       | App On Click Start, App Page Visit |
            | product currency         | MXN                                                                           | string       | App On Click Start, App Page Visit |

        Examples:
            | transaction                   | id_operation | amount | type_operation  | journey                       |
            | pagar servicios               | 000578869    | 280    | pagar servicios | journey servicios o impuestos |
            | transferencia otros bancos    | 2010230      | 15     | transferencias  | journey transferir            |
            | transferencia a terceros      | 6810326479   | 150    | transferencias  | journey transferir            |
            | transferencia cuentas propias | 6798281878   | 100    | transferencias  | journey transferir            |

    @ANA_EVENT_RO002 @vbank
    @analytics
    @MX @web @android @ios
    @backend(test)
    @web-done
    Scenario Outline: Reuse operation <transaction> - analytics event App Started, APP STEP 2
        Given a user with the following criteria
            | criteria               |
            | reuse operation detail |
        And the user accesses to the operative account product detail
        And the user accesses the details of a movement from "detail product"
        And the user wants to reuse an "<transaction>" operation
        And the analytics interceptor service is initiated
        When the user attempts to access to the reuse operation success page "<transaction>"
        Then the analytics events contains the following variables
            | item                     | value                                                                         | type         | event                   |
            | analytics                | analytics/glomo_base                                                          | json schema  | App Started, App Step 2 |
            | version dl               | 20250414_5.0                                                                  | string       | App Started, App Step 2 |
            | page name                | app:privada:personas:operaciones reutilizadas:<type_operation>:1 confirmacion | string       | App Started             |
            | page name                | app:privada:personas:operaciones reutilizadas:<type_operation>:2 otp          | string       | App Step 2              |
            | level 1                  | operaciones reutilizadas                                                      | string       | App Started, App Step 2 |
            | level 2                  | <type_operation>                                                              | string       | App Started, App Step 2 |
            | level 3                  | 1 confirmacion                                                                | string       | App Started             |
            | level 3                  | 2 otp                                                                         | string       | App Step 2              |
            | language                 | ES                                                                            | string       | App Started, App Step 2 |
            | page area                | privada                                                                       | string       | App Started, App Step 2 |
            | page intent              | transaccion                                                                   | string       | App Started, App Step 2 |
            | channel                  | online                                                                        | string       | App Started, App Step 2 |
            | page instance ID         | de                                                                            | string       | App Started, App Step 2 |
            | page info version        | appVersion                                                                    | regexp named | App Started, App Step 2 |
            | page segment             | personas                                                                      | string       | App Started, App Step 2 |
            | sysEnv                   | app                                                                           | string       | App Started, App Step 2 |
            | business unit            | BBVA Mexico                                                                   | string       | App Started, App Step 2 |
            | site app name            | App BBVA Mexico                                                               | string       | App Started, App Step 2 |
            | project name             | Glomo                                                                         | string       | App Started, App Step 2 |
            | device mobile            | si                                                                            | string       | App Started, App Step 2 |
            | user userState           | logado                                                                        | string       | App Started, App Step 2 |
            | user segment global      | 003001                                                                        | string       | App Started, App Step 2 |
            | profile ID               | profileID                                                                     | regexp named | App Started, App Step 2 |
            | user age                 | age                                                                           | regexp named | App Started, App Step 2 |
            | user gender              | gender                                                                        | regexp named | App Started, App Step 2 |
            | global application       | frequent operation                                                            | string       | App Started, App Step 2 |
            | application name         | realizar operacion frecuente                                                  | string       | App Started, App Step 2 |
            | application type         | operativa                                                                     | string       | App Started, App Step 2 |
            | fulfillment model        | online                                                                        | string       | App Started, App Step 2 |
            | application typology     | <journey>                                                                     | string       | App Started, App Step 2 |
            | application process      | <transaction>                                                                 | string       | App Started, App Step 2 |
            | custom fields            | id operacion reutilizada:<id_operation>                                       | string       | App Started, App Step 2 |
            | product primary category | cuentas                                                                       | string       | App Started, App Step 2 |
            | product subtype          | cuentas ahorro                                                                | string       | App Started, App Step 2 |
            | product amount           | <amount>                                                                      | number       | App Started, App Step 2 |
            | product currency         | MXN                                                                           | string       | App Started, App Step 2 |

        Examples:
            | transaction                | id_operation | amount | type_operation  | journey                       |
            | pagar servicios            | 000653837    | 300    | pagar servicios | journey servicios o impuestos |
            | transferencia otros bancos | 2010230      | 15     | transferencias  | journey transferir            |
            | transferencia a terceros   | 6810326479   | 150    | transferencias  | journey transferir            |

    @ANA_EVENT_RO003 @vbank
    @analytics
    @MX @web @android @ios
    @backend(test)
    @tmpExclude @JIRA.GLOMOMX-254311
    Scenario Outline: Reuse operation  <transaction> - Analytics App Completed
        Given a user with the following criteria
            | criteria               |
            | reuse operation detail |
        And the user accesses to the operative account product detail
        And the user accesses the details of a movement from "detail product"
        And the user wants to reuse an "<transaction>" operation
        And the analytics interceptor service is initiated
        When the user accesses to the reuse operation success page "<transaction>"
        Then the analytics events contains the following variables
            | item                     | value                                                                         | type         | event         |
            | analytics                | analytics/glomo_base                                                          | json schema  | App Completed |
            | version dl               | 20250414_5.0                                                                  | string       | App Completed |
            | page name                | app:privada:personas:operaciones reutilizadas:<type_operation>:pagina exitosa | string       | App Completed |
            | level 1                  | operaciones reutilizadas                                                      | string       | App Completed |
            | level 2                  | <type_operation>                                                              | string       | App Completed |
            | level 3                  | pagina exitosa                                                                | string       | App Completed |
            | language                 | ES                                                                            | string       | App Completed |
            | page area                | privada                                                                       | string       | App Completed |
            | page intent              | transaccion                                                                   | string       | App Completed |
            | channel                  | online                                                                        | string       | App Completed |
            | page instance ID         | de                                                                            | string       | App Completed |
            | page info version        | appVersion                                                                    | regexp named | App Completed |
            | page segment             | personas                                                                      | string       | App Completed |
            | sysEnv                   | app                                                                           | string       | App Completed |
            | business unit            | BBVA Mexico                                                                   | string       | App Completed |
            | site app name            | App BBVA Mexico                                                               | string       | App Completed |
            | project name             | Glomo                                                                         | string       | App Completed |
            | device mobile            | si                                                                            | string       | App Completed |
            | user userState           | logado                                                                        | string       | App Completed |
            | user segment global      | 003001                                                                        | string       | App Completed |
            | profile ID               | profileID                                                                     | regexp named | App Completed |
            | user age                 | age                                                                           | regexp named | App Completed |
            | user gender              | gender                                                                        | regexp named | App Completed |
            | global application       | frequent operation                                                            | string       | App Completed |
            | application name         | realizar operacion frecuente                                                  | string       | App Completed |
            | application type         | operativa                                                                     | string       | App Completed |
            | application step         | pagina exitosa                                                                | string       | App Completed |
            | fulfillment model        | online                                                                        | string       | App Completed |
            | product state            | finalizado                                                                    | string       | App Completed |
            | product primary category | cuentas                                                                       | string       | App Completed |
            | product subtype          | cuentas ahorro                                                                | string       | App Completed |
            | product amount           | <amount>                                                                      | number       | App Completed |
            | product currency         | MXN                                                                           | string       | App Completed |
            | internal campaign        |                                                                               | empty array  | App Completed |
            | optimization attributes  |                                                                               | empty array  | App Completed |
            | application process      | <transaction>                                                                 | string       | App Completed |
            | custom fields            | id operacion reutilizada:<id_operation>                                       | string       | App Completed |
            | application typology     | <journey>                                                                     | string       | App Completed |

        Examples:
            | transaction                   | id_operation | amount | type_operation | journey            |
            | transferencia a terceros      | 6871516522   | 150    | transferencias | journey transferir |
            | transferencia cuentas propias | 6871643532   | 18     | transferencias | journey transferir |
            | transferencia otros bancos    | 2010230      | 15     | transferencias | journey transferir |

    @ANA_EVENT_RO004 @vbank
    @analytics
    @MX @web @android @ios
    @backend(test)
    @web-done
    Scenario Outline: Reuse  <transaction> - <huella> - Analytics concept view
        Given a user with the following criteria
            | criteria               |
            | reuse operation detail |
        And the user accesses to the operative account product detail
        And the user accesses the details of a movement from "detail product"
        And the analytics interceptor service is initiated
        When the user wants to reuse an "<transaction>" operation
        Then the analytics events contains the following variables
            | item                    | value                                                                   | type             | event     |
            | analytics               | analytics/glomo_base                                                    | json schema      | Page View |
            | version dl              | 20250414_5.0                                                            | string           | Page View |
            | page name               | app:privada:personas:operaciones reutilizadas:<type_operation>:<huella> | string           | Page View |
            | level 1                 | operaciones reutilizadas                                                | string           | Page View |
            | level 2                 | <type_operation>                                                        | string           | Page View |
            | level 3                 | <huella>                                                                | string           | Page View |
            | language                | ES                                                                      | string           | Page View |
            | page area               | privada                                                                 | string           | Page View |
            | page intent             | transaccion                                                             | string           | Page View |
            | channel                 | online                                                                  | string           | Page View |
            | page instance ID        | de                                                                      | string           | Page View |
            | page info version       | appVersion                                                              | regexp named     | Page View |
            | page segment            | personas                                                                | string           | Page View |
            | sysEnv                  | app                                                                     | string           | Page View |
            | business unit           | BBVA Mexico                                                             | string           | Page View |
            | site app name           | App BBVA Mexico                                                         | string           | Page View |
            | project name            | Glomo                                                                   | string           | Page View |
            | device mobile           | si                                                                      | string           | Page View |
            | user userState          | logado                                                                  | string           | Page View |
            | user segment global     | 003001                                                                  | string           | Page View |
            | profile ID              | profileID                                                               | regexp named     | Page View |
            | user age                | age                                                                     | regexp named     | Page View |
            | user gender             | gender                                                                  | regexp named     | Page View |
            | internal campaign       |                                                                         | empty array      | Page View |
            | optimization attributes |                                                                         | empty array      | Page View |
            | application             |                                                                         | empty str object | Page View |
            | products attributes     |                                                                         | empty array      | Page View |

        Examples:
            | transaction                | huella             | type_operation  |
            | pagar servicios            | referencia de pago | pagar servicios |
            | transferencia otros bancos | concepto           | transferencias  |

@refoundTransfersAnalytics
Feature: Analytics - refunds transfers

    @ANA_RT001
    @analytics
    @glomo
    @web
    @web-done
    @backend(test)
    @MX
    @vbank
    Scenario: RT - Launch refunds money modal info
        Given a user with the following criteria
            | criteria                  |
            | interbank transfer refund |
        And the user access the "dashboard" screen
        When the user accesses to the operative account product detail
        And the user accesses the details of a movement from "detail product"
        And the analytics interceptor service is initiated
        And the user wants to refund money
        Then the analytics events contains the following variables
            | item                     | value                                | type         | event              |
            | analytics                | analytics/glomo_base                 | json schema  | App On Click Start |
            | version DL               | 20250414_5.0                         | string       | App On Click Start |
            | page name                | app:privada:personas:cuentas:detalle | string       | App On Click Start |
            | level 1                  | cuentas                              | string       | App On Click Start |
            | level 2                  | detalle                              | string       | App On Click Start |
            | language                 | ES                                   | string       | App On Click Start |
            | page area                | privada                              | string       | App On Click Start |
            | page intent              | informacion                          | string       | App On Click Start |
            | channel                  | online                               | string       | App On Click Start |
            | page instance ID         | de                                   | string       | App On Click Start |
            | page info version        | appVersion                           | regexp named | App On Click Start |
            | page segment             | personas                             | string       | App On Click Start |
            | sysEnv                   | app                                  | string       | App On Click Start |
            | business unit            | BBVA Mexico                          | string       | App On Click Start |
            | site app name            | App BBVA Mexico                      | string       | App On Click Start |
            | project name             | Glomo                                | string       | App On Click Start |
            | device mobile            | si                                   | string       | App On Click Start |
            | user userState           | logado                               | string       | App On Click Start |
            | profile ID               | profileID                            | regexp named | App On Click Start |
            | user segment global      | 003001                               | string       | App On Click Start |
            | user gender              | gender                               | regexp named | App On Click Start |
            | user age                 | age                                  | regexp named | App On Click Start |
            | global application       | refund transfer                      | string       | App On Click Start |
            | application name         | devolver transferencia               | string       | App On Click Start |
            | application type         | operativa                            | string       | App On Click Start |
            | application step         | detalle de cuenta                    | string       | App On Click Start |
            | fulfillment model        | online                               | string       | App On Click Start |
            | product primary category | cuentas                              | string       | App On Click Start |
            | internal campaign        |                                      | empty array  | App On Click Start |
            | optimization attributes  |                                      | empty array  | App On Click Start |

    @ANA_RT002
    @analytics
    @glomo
    @web
    @web-done
    @backend(test)
    @MX
    @vbank
    Scenario: RT - Refund money modal info
        Given a user with the following criteria
            | criteria                  |
            | interbank transfer refund |
        And the user access the "dashboard" screen
        When the user accesses to the operative account product detail
        And the user accesses the details of a movement from "detail product"
        And the analytics interceptor service is initiated
        And the user wants to refund money
        Then the analytics events contains the following variables
            | item                     | value                                                      | type         | event          |
            | analytics                | analytics/glomo_base                                       | json schema  | App Page Visit |
            | version DL               | 20250414_5.0                                               | string       | App Page Visit |
            | page name                | app:privada:personas:cuentas:regresar dinero:1 informacion | string       | App Page Visit |
            | level 1                  | cuentas                                                    | string       | App Page Visit |
            | level 2                  | regresar dinero                                            | string       | App Page Visit |
            | level 3                  | 1 informacion                                              | string       | App Page Visit |
            | language                 | ES                                                         | string       | App Page Visit |
            | page area                | privada                                                    | string       | App Page Visit |
            | page intent              | transaccion                                                | string       | App Page Visit |
            | channel                  | online                                                     | string       | App Page Visit |
            | page instance ID         | de                                                         | string       | App Page Visit |
            | page info version        | appVersion                                                 | regexp named | App Page Visit |
            | page segment             | personas                                                   | string       | App Page Visit |
            | sysEnv                   | app                                                        | string       | App Page Visit |
            | business unit            | BBVA Mexico                                                | string       | App Page Visit |
            | site app name            | App BBVA Mexico                                            | string       | App Page Visit |
            | project name             | Glomo                                                      | string       | App Page Visit |
            | device mobile            | si                                                         | string       | App Page Visit |
            | user userState           | logado                                                     | string       | App Page Visit |
            | profile ID               | profileID                                                  | regexp named | App Page Visit |
            | user segment global      | 003001                                                     | string       | App Page Visit |
            | user gender              | gender                                                     | regexp named | App Page Visit |
            | user age                 | age                                                        | regexp named | App Page Visit |
            | global application       | refund transfer                                            | string       | App Page Visit |
            | application name         | devolver transferencia                                     | string       | App Page Visit |
            | application type         | operativa                                                  | string       | App Page Visit |
            | application step         | 1 informacion                                              | string       | App Page Visit |
            | fulfillment model        | online                                                     | string       | App Page Visit |
            | product primary category | cuentas                                                    | string       | App Page Visit |
            | internal campaign        |                                                            | empty array  | App Page Visit |
            | optimization attributes  |                                                            | empty array  | App Page Visit |

    @ANA_RT003
    @analytics
    @glomo
    @web
    @web-done
    @backend(test)
    @MX
    @vbank
    Scenario: RT - Start refund money screen
        Given a user with the following criteria
            | criteria                  |
            | interbank transfer refund |
        And the user access the "dashboard" screen
        When the user accesses to the operative account product detail
        And the user accesses the details of a movement from "detail product"
        And the user wants to refund money
        And the analytics interceptor service is initiated
        And the user accept modal information
        Then the analytics events contains the following variables
            | item                     | value                                                      | type         | event       |
            | analytics                | analytics/glomo_base                                       | json schema  | App Started |
            | version DL               | 20250414_5.0                                               | string       | App Started |
            | page name                | app:privada:personas:cuentas:regresar dinero:1 informacion | string       | App Started |
            | level 1                  | cuentas                                                    | string       | App Started |
            | level 2                  | regresar dinero                                            | string       | App Started |
            | level 3                  | 1 informacion                                              | string       | App Started |
            | language                 | ES                                                         | string       | App Started |
            | page area                | privada                                                    | string       | App Started |
            | page intent              | transaccion                                                | string       | App Started |
            | channel                  | online                                                     | string       | App Started |
            | page instance ID         | de                                                         | string       | App Started |
            | page info version        | appVersion                                                 | regexp named | App Started |
            | page segment             | personas                                                   | string       | App Started |
            | sysEnv                   | app                                                        | string       | App Started |
            | business unit            | BBVA Mexico                                                | string       | App Started |
            | site app name            | App BBVA Mexico                                            | string       | App Started |
            | project name             | Glomo                                                      | string       | App Started |
            | device mobile            | si                                                         | string       | App Started |
            | user userState           | logado                                                     | string       | App Started |
            | profile ID               | profileID                                                  | regexp named | App Started |
            | user segment global      | 003001                                                     | string       | App Started |
            | user gender              | gender                                                     | regexp named | App Started |
            | user age                 | age                                                        | regexp named | App Started |
            | global application       | refund transfer                                            | string       | App Started |
            | application name         | devolver transferencia                                     | string       | App Started |
            | application type         | operativa                                                  | string       | App Started |
            | application step         | regresar dinero                                            | string       | App Started |
            | fulfillment model        | online                                                     | string       | App Started |
            | product primary category | cuentas                                                    | string       | App Started |
            | internal campaign        |                                                            | empty array  | App Started |
            | optimization attributes  |                                                            | empty array  | App Started |

    @ANA_RT004
    @analytics
    @glomo
    @web
    @web-done
    @backend(test)
    @MX
    @vbank
    Scenario: RT - Refund money screen
        Given a user with the following criteria
            | criteria                  |
            | interbank transfer refund |
        And the user access the "dashboard" screen
        When the user accesses to the operative account product detail
        And the user accesses the details of a movement from "detail product"
        And the user wants to refund money
        And the analytics interceptor service is initiated
        And the user accept modal information
        Then the analytics events contains the following variables
            | item                                                      | value                                                  | type         | event      |
            | analytics                                                 | analytics/glomo_base                                   | json schema  | App Step 2 |
            | version DL                                                | 20250414_5.0                                           | string       | App Step 2 |
            | page name                                                 | app:privada:personas:cuentas:regresar dinero:2 importe | string       | App Step 2 |
            | level 1                                                   | cuentas                                                | string       | App Step 2 |
            | level 2                                                   | regresar dinero                                        | string       | App Step 2 |
            | level 3                                                   | 2 importe                                              | string       | App Step 2 |
            | language                                                  | ES                                                     | string       | App Step 2 |
            | page area                                                 | privada                                                | string       | App Step 2 |
            | page intent                                               | transaccion                                            | string       | App Step 2 |
            | channel                                                   | online                                                 | string       | App Step 2 |
            | page instance ID                                          | de                                                     | string       | App Step 2 |
            | page info version                                         | appVersion                                             | regexp named | App Step 2 |
            | page segment                                              | personas                                               | string       | App Step 2 |
            | sysEnv                                                    | app                                                    | string       | App Step 2 |
            | business unit                                             | BBVA Mexico                                            | string       | App Step 2 |
            | site app name                                             | App BBVA Mexico                                        | string       | App Step 2 |
            | project name                                              | Glomo                                                  | string       | App Step 2 |
            | device mobile                                             | si                                                     | string       | App Step 2 |
            | user userState                                            | logado                                                 | string       | App Step 2 |
            | profile ID                                                | profileID                                              | regexp named | App Step 2 |
            | user segment global                                       | 003001                                                 | string       | App Step 2 |
            | user gender                                               | gender                                                 | regexp named | App Step 2 |
            | user age                                                  | age                                                    | regexp named | App Step 2 |
            | global application                                        | refund transfer                                        | string       | App Step 2 |
            | application name                                          | devolver transferencia                                 | string       | App Step 2 |
            | application type                                          | operativa                                              | string       | App Step 2 |
            | application step                                          | 2 importe                                              | string       | App Step 2 |
            | fulfillment model                                         | online                                                 | string       | App Step 2 |
            | product primary category                                  | cuentas                                                | string       | App Step 2 |
            | product subtype                                           |                                                        | string       | App Step 2 |
            | product name                                              | tarjeta nomina basica bbva                             | string       | App Step 2 |
            | product amount                                            | 10                                                     | number       | App Step 2 |
            | product currency                                          | MXN                                                    | string       | App Step 2 |
            | internal campaign                                         |                                                        | empty array  | App Step 2 |
            | optimization attributes                                   |                                                        | empty array  | App Step 2 |

    @ANA_RT005
    @analytics
    @glomo
    @web
    @web-done
    @backend(test)
    @MX
    @vbank
    Scenario: RT - Launch otp screen
        Given a user with the following criteria
            | criteria                  |
            | interbank transfer refund |
        And the user access the "dashboard" screen
        When the user accesses to the operative account product detail
        And the user accesses the details of a movement from "detail product"
        And the user wants to refund money
        And the analytics interceptor service is initiated
        And the user confim refund review information
        Then the analytics events contains the following variables
            | item                                                      | value                                              | type         | event      |
            | analytics                                                 | analytics/glomo_base                               | json schema  | App Step 3 |
            | version DL                                                | 20250414_5.0                                       | string       | App Step 3 |
            | page name                                                 | app:privada:personas:cuentas:regresar dinero:3 otp | string       | App Step 3 |
            | level 1                                                   | cuentas                                            | string       | App Step 3 |
            | level 2                                                   | regresar dinero                                    | string       | App Step 3 |
            | level 3                                                   | 3 otp                                              | string       | App Step 3 |
            | language                                                  | ES                                                 | string       | App Step 3 |
            | page area                                                 | privada                                            | string       | App Step 3 |
            | page intent                                               | transaccion                                        | string       | App Step 3 |
            | channel                                                   | online                                             | string       | App Step 3 |
            | page instance ID                                          | de                                                 | string       | App Step 3 |
            | page info version                                         | appVersion                                         | regexp named | App Step 3 |
            | page segment                                              | personas                                           | string       | App Step 3 |
            | sysEnv                                                    | app                                                | string       | App Step 3 |
            | business unit                                             | BBVA Mexico                                        | string       | App Step 3 |
            | site app name                                             | App BBVA Mexico                                    | string       | App Step 3 |
            | project name                                              | Glomo                                              | string       | App Step 3 |
            | device mobile                                             | si                                                 | string       | App Step 3 |
            | user userState                                            | logado                                             | string       | App Step 3 |
            | profile ID                                                | profileID                                          | regexp named | App Step 3 |
            | user segment global                                       | 003001                                             | string       | App Step 3 |
            | user gender                                               | gender                                             | regexp named | App Step 3 |
            | user age                                                  | age                                                | regexp named | App Step 3 |
            | global application                                        | refund transfer                                    | string       | App Step 3 |
            | application name                                          | devolver transferencia                             | string       | App Step 3 |
            | application type                                          | operativa                                          | string       | App Step 3 |
            | application step                                          | 3 otp                                              | string       | App Step 3 |
            | fulfillment model                                         | online                                             | string       | App Step 3 |
            | product primary category                                  | cuentas                                            | string       | App Step 3 |
            | product subtype                                           |                                                    | string       | App Step 3 |
            | product name                                              | tarjeta nomina basica bbva                         | string       | App Step 3 |
            | product amount                                            | 10                                                 | number       | App Step 3 |
            | product currency                                          | MXN                                                | string       | App Step 3 |
            | internal campaign                                         |                                                    | empty array  | App Step 3 |
            | optimization attributes                                   |                                                    | empty array  | App Step 3 |

    @ANA_RT006
    @analytics
    @glomo
    @web
    @web-done
    @backend(test)
    @MX
    @vbank
    Scenario: RT - Refund completed
        Given a user with the following criteria
            | criteria                  |
            | interbank transfer refund |
        And the user access the "dashboard" screen
        When the user accesses to the operative account product detail
        And the user accesses the details of a movement from "detail product"
        And the user wants to refund money
        And the analytics interceptor service is initiated
        And the user insert otp token and continue
        Then the analytics events contains the following variables
            | item                                                      | value                                                       | type         | event         |
            | analytics                                                 | analytics/glomo_base                                        | json schema  | App Completed |
            | version DL                                                | 20250414_5.0                                                | string       | App Completed |
            | page name                                                 | app:privada:personas:cuentas:regresar dinero:pagina exitosa | string       | App Completed |
            | level 1                                                   | cuentas                                                     | string       | App Completed |
            | level 2                                                   | regresar dinero                                             | string       | App Completed |
            | level 3                                                   | pagina exitosa                                              | string       | App Completed |
            | language                                                  | ES                                                          | string       | App Completed |
            | page area                                                 | privada                                                     | string       | App Completed |
            | page intent                                               | transaccion                                                 | string       | App Completed |
            | channel                                                   | online                                                      | string       | App Completed |
            | page instance ID                                          | de                                                          | string       | App Completed |
            | page info version                                         | appVersion                                                  | regexp named | App Completed |
            | page segment                                              | personas                                                    | string       | App Completed |
            | sysEnv                                                    | app                                                         | string       | App Completed |
            | business unit                                             | BBVA Mexico                                                 | string       | App Completed |
            | site app name                                             | App BBVA Mexico                                             | string       | App Completed |
            | project name                                              | Glomo                                                       | string       | App Completed |
            | device mobile                                             | si                                                          | string       | App Completed |
            | user userState                                            | logado                                                      | string       | App Completed |
            | profile ID                                                | profileID                                                   | regexp named | App Completed |
            | user segment global                                       | 003001                                                      | string       | App Completed |
            | user gender                                               | gender                                                      | regexp named | App Completed |
            | user age                                                  | age                                                         | regexp named | App Completed |
            | global application                                        | refund transfer                                             | string       | App Completed |
            | application name                                          | devolver transferencia                                      | string       | App Completed |
            | application type                                          | operativa                                                   | string       | App Completed |
            | application step                                          | pagina exitosa                                              | string       | App Completed |
            | fulfillment model                                         | online                                                      | string       | App Completed |
            | custom fields                                             | firma:token                                                 | string       | App Completed |
            | application state                                         | finalizado                                                  | string       | App Completed |
            | application operation number                              |                                                             | string       | App Completed |
            | product primary category                                  | cuentas                                                     | string       | App Completed |
            | product subtype                                           |                                                             | string       | App Completed |
            | product name                                              |                                                             | string       | App Completed |
            | product amount                                            |                                                             | string       | App Completed |
            | product currency                                          |                                                             | string       | App Completed |
            | internal campaign                                         |                                                             | empty array  | App Completed |
            | optimization attributes                                   |                                                             | empty array  | App Completed |

    @ANA_RT007
    @analytics
    @glomo
    @web
    @web-done
    @backend(test)
    @MX
    @vbank
    Scenario: RT - Refund init cancel
        Given a user with the following criteria
            | criteria                  |
            | interbank transfer refund |
        And the user access the "dashboard" screen
        When the user accesses to the operative account product detail
        And the user accesses the details of a movement from "detail product"
        And the user wants to refund money
        And the analytics interceptor service is initiated
        And the user dont want to refund money
        Then the analytics events contains the following variables
            | item                    | value                                                      | type             | event         |
            | analytics               | analytics/glomo_base                                       | json schema      | Internal Link |
            | version DL              | 20250414_5.0                                               | string           | Internal Link |
            | page name               | app:privada:personas:cuentas:regresar dinero:1 informacion | string           | Internal Link |
            | level 1                 | cuentas                                                    | string           | Internal Link |
            | level 2                 | regresar dinero                                            | string           | Internal Link |
            | level 3                 | 1 informacion                                              | string           | Internal Link |
            | language                | ES                                                         | string           | Internal Link |
            | page area               | privada                                                    | string           | Internal Link |
            | page intent             | transaccion                                                | string           | Internal Link |
            | channel                 | online                                                     | string           | Internal Link |
            | page instance ID        | de                                                         | string           | Internal Link |
            | page info version       | appVersion                                                 | regexp named     | Internal Link |
            | page segment            | personas                                                   | string           | Internal Link |
            | sysEnv                  | app                                                        | string           | Internal Link |
            | business unit           | BBVA Mexico                                                | string           | Internal Link |
            | site app name           | App BBVA Mexico                                            | string           | Internal Link |
            | project name            | Glomo                                                      | string           | Internal Link |
            | link name               | cancelar                                                   | string           | Internal Link |
            | device mobile           | si                                                         | string           | Internal Link |
            | user userState          | logado                                                     | string           | Internal Link |
            | profile ID              | profileID                                                  | regexp named     | Internal Link |
            | user segment global     | 003001                                                     | string           | Internal Link |
            | user gender             | gender                                                     | regexp named     | Internal Link |
            | user age                | age                                                        | regexp named     | Internal Link |
            | internal campaign       |                                                            | empty array      | Internal Link |
            | optimization attributes |                                                            | empty array      | Internal Link |
            | application             |                                                            | empty str object | Internal Link |
            | products attributes     |                                                            | empty array      | Internal Link |

    @ANA_RT008
    @analytics
    @glomo
    @web
    @web-done
    @backend(test)
    @MX
    @vbank
    Scenario: RT - Warning refund exit modal
        Given a user with the following criteria
            | criteria                  |
            | interbank transfer refund |
        And the user access the "dashboard" screen
        When the user accesses to the operative account product detail
        And the user accesses the details of a movement from "detail product"
        And the user wants to refund money
        And the analytics interceptor service is initiated
        And the user accept modal information
        And the user suddenly want to leave refund money
        Then the analytics events contains the following variables
            | item                    | value                                                    | type             | event     |
            | analytics               | analytics/glomo_base                                     | json schema      | Page View |
            | version DL              | 20250414_5.0                                             | string           | Page View |
            | page name               | app:privada:personas:cuentas:regresar dinero:modal salir | string           | Page View |
            | level 1                 | cuentas                                                  | string           | Page View |
            | level 2                 | regresar dinero                                          | string           | Page View |
            | level 3                 | modal salir                                              | string           | Page View |
            | language                | ES                                                       | string           | Page View |
            | page area               | privada                                                  | string           | Page View |
            | page intent             | transaccion                                              | string           | Page View |
            | channel                 | online                                                   | string           | Page View |
            | page instance ID        | de                                                       | string           | Page View |
            | page info version       | appVersion                                               | regexp named     | Page View |
            | page segment            | personas                                                 | string           | Page View |
            | sysEnv                  | app                                                      | string           | Page View |
            | business unit           | BBVA Mexico                                              | string           | Page View |
            | site app name           | App BBVA Mexico                                          | string           | Page View |
            | project name            | Glomo                                                    | string           | Page View |
            | device mobile           | si                                                       | string           | Page View |
            | user userState          | logado                                                   | string           | Page View |
            | profile ID              | profileID                                                | regexp named     | Page View |
            | user segment global     | 003001                                                   | string           | Page View |
            | user gender             | gender                                                   | regexp named     | Page View |
            | user age                | age                                                      | regexp named     | Page View |
            | internal campaign       |                                                          | empty array      | Page View |
            | optimization attributes |                                                          | empty array      | Page View |
            | application             |                                                          | empty str object | Page View |
            | products attributes     |                                                          | empty array      | Page View |

    @ANA_RT009
    @analytics
    @glomo
    @web
    @web-done
    @backend(test)
    @MX
    @vbank
    Scenario: RT - Error refund insufficient modal
        Given a user with the following criteria
            | criteria                  |
            | interbank transfer refund |
        When the user accesses to the operative account product detail
        And the user accesses the details of a movement from "detail product"
        And the user wants to refund money
        And the analytics interceptor service is initiated
        And the user has not enough funds in his account to refund money.
        Then the analytics events contains the following variables
            | item                    | value                                                                 | type             | event     |
            | analytics               | analytics/glomo_base                                                  | json schema      | Page View |
            | version DL              | 20250414_5.0                                                          | string           | Page View |
            | page name               | app:privada:personas:cuentas:regresar dinero:error saldo insuficiente | string           | Page View |
            | level 1                 | cuentas                                                               | string           | Page View |
            | level 2                 | regresar dinero                                                       | string           | Page View |
            | level 3                 | error saldo insuficiente                                              | string           | Page View |
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
            | error page              | error saldo insuficiente                                              | string           | Page View |
            | device mobile           | si                                                                    | string           | Page View |
            | user userState          | logado                                                                | string           | Page View |
            | profile ID              | profileID                                                             | regexp named     | Page View |
            | user segment global     | 003001                                                                | string           | Page View |
            | user gender             | gender                                                                | regexp named     | Page View |
            | user age                | age                                                                   | regexp named     | Page View |
            | internal campaign       |                                                                       | empty array      | Page View |
            | optimization attributes |                                                                       | empty array      | Page View |
            | application             |                                                                       | empty str object | Page View |
            | products attributes     |                                                                       | empty array      | Page View |

    @ANA_RT0010
    @analytics
    @glomo
    @web
    @web-done
    @backend(test)
    @MX
    @vbank
    Scenario: RT - Error refunds service response
        Given a user with the following criteria
            | criteria                  |
            | interbank transfer refund |
        When the user accesses to the operative account product detail
        And the user accesses the details of a movement from "detail product"
        And the user wants to refund money
        And the user decides refund money
        And the analytics interceptor service is initiated
        And the user insert otp token
        Then the analytics events contains the following variables
            | item                    | value                                                                        | type             | event     |
            | analytics               | analytics/glomo_base                                                         | json schema      | Page View |
            | version DL              | 20250414_5.0                                                                 | string           | Page View |
            | page name               | app:privada:personas:cuentas:regresar dinero:error comunicacion interrumpida | string           | Page View |
            | level 1                 | cuentas                                                                      | string           | Page View |
            | level 2                 | regresar dinero                                                              | string           | Page View |
            | level 3                 | error comunicacion interrumpida                                              | string           | Page View |
            | language                | ES                                                                           | string           | Page View |
            | page area               | privada                                                                      | string           | Page View |
            | page intent             | transaccion                                                                  | string           | Page View |
            | channel                 | online                                                                       | string           | Page View |
            | page instance ID        | de                                                                           | string           | Page View |
            | page info version       | appVersion                                                                   | regexp named     | Page View |
            | page segment            | personas                                                                     | string           | Page View |
            | sysEnv                  | app                                                                          | string           | Page View |
            | business unit           | BBVA Mexico                                                                  | string           | Page View |
            | site app name           | App BBVA Mexico                                                              | string           | Page View |
            | project name            | Glomo                                                                        | string           | Page View |
            | error page              | error comunicacion interrumpida                                              | string           | Page View |
            | device mobile           | si                                                                           | string           | Page View |
            | user userState          | logado                                                                       | string           | Page View |
            | profile ID              | profileID                                                                    | regexp named     | Page View |
            | user segment global     | 003001                                                                       | string           | Page View |
            | user gender             | gender                                                                       | regexp named     | Page View |
            | user age                | age                                                                          | regexp named     | Page View |
            | internal campaign       |                                                                              | empty array      | Page View |
            | optimization attributes |                                                                              | empty array      | Page View |
            | application             |                                                                              | empty str object | Page View |
            | products attributes     |                                                                              | empty array      | Page View |

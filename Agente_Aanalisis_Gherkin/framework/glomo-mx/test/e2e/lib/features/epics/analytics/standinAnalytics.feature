@dashboard_standin_analytics
Feature: Dashboard Standin Mode Analytics

    @ANA_DST001 @vbank
    @analytics
    @MX @web @android @ios
    @backend(test)
    @web-done
    Scenario: Dashboard - Stand-In Alert when user selects transfer operation
        Given a user with the following criteria
            | criteria                |
            | dashboard standin two   |
        And the user accesses to dashboard
        When the user accesses the "transfer" operation
        Then the device contains the following variables:
            | item                       | value                                                    | type             |
            | version DL                 | 20250414_5.0                                             | string           |
            | page name                  | app:privada:personas:operacion no disponible transferir  | string           |
            | level 1                    | operacion no disponible transferir                       | string           |
            | language                   | ES                                                       | string           |
            | page area                  | privada                                                  | string           |
            | page intent                | informacion                                              | string           |
            | channel                    | online                                                   | string           |
            | page instance ID           | de                                                       | string           |
            | page info version          | appVersion                                               | regexp named     |
            | page segment               | personas                                                 | string           |
            | sysEnv                     | app                                                      | string           |
            | business unit              | BBVA Mexico                                              | string           |
            | site app name              | App BBVA Mexico                                          | string           |
            | project name               | Glomo Always ON                                          | string           |
            | device mobile              | si                                                       | string           |
            | user userState             | logado                                                   | string           |
            | user segment global        | 003001                                                   | string           |
            | internal campaign          |                                                          | empty array      |
            | optimization attributes    |                                                          | empty array      |
            | application                |                                                          | empty str object |
            | products attributes        |                                                          | empty array      |

    @ANA_DST002 @vbank
    @analytics
    @MX @web @android @ios
    @backend(test)
    @web-done
    Scenario: Dashboard - Stand-In Alert Operatives when user selects footer operation
        Given a user with the following criteria
            | criteria                |
            | dashboard standin two   |
        And the user accesses to dashboard
        When the user selects "contact footer option from dashboard"
        Then the device contains the following variables:
            | item                       | value                                                    | type             |
            | version DL                 | 20250414_5.0                                             | string           |
            | page name                  | app:privada:personas:informacion no disponible ayuda     | string           |
            | level 1                    | informacion no disponible ayuda                          | string           |
            | language                   | ES                                                       | string           |
            | page area                  | privada                                                  | string           |
            | page intent                | informacion                                              | string           |
            | channel                    | online                                                   | string           |
            | page instance ID           | de                                                       | string           |
            | page info version          | appVersion                                               | regexp named     |
            | page segment               | personas                                                 | string           |
            | sysEnv                     | app                                                      | string           |
            | business unit              | BBVA Mexico                                              | string           |
            | site app name              | App BBVA Mexico                                          | string           |
            | project name               | Glomo Always ON                                          | string           |
            | device mobile              | si                                                       | string           |
            | user userState             | logado                                                   | string           |
            | user segment global        | 003001                                                   | string           |
            | internal campaign          |                                                          | empty array      |
            | optimization attributes    |                                                          | empty array      |
            | application                |                                                          | empty str object |
            | products attributes        |                                                          | empty array      |

    @ANA_EVENT_DST003 @vbank
    @analytics
    @MX @web @android @ios
    @backend(test)
    @web-done
    Scenario: Dashboard - Stand-In Alert Operatives when user access account page
        Given a user with the following criteria
            | criteria                     |
            | account transactions standin |
        And the user accesses to dashboard
        And the analytics interceptor service is initiated
        When the user accesses to the operative account product detail
        Then the analytics events contains the following variables
            | item                       | value                                | type             | event     | event number |
            | version DL                 | 20250414_5.0                         | string           | Page View | 1            |
            | page name                  | app:privada:personas:cuentas:detalle | string           | Page View | 1            |
            | level 1                    | cuentas                              | string           | Page View | 1            |
            | level 2                    | detalle                              | string           | Page View | 1            |
            | language                   | ES                                   | string           | Page View | 1            |
            | page area                  | privada                              | string           | Page View | 1            |
            | page intent                | informacion                          | string           | Page View | 1            |
            | channel                    | online                               | string           | Page View | 1            |
            | page instance ID           | de                                   | string           | Page View | 1            |
            | page info version          | appVersion                           | regexp named     | Page View | 1            |
            | page segment               | personas                             | string           | Page View | 1            |
            | sysEnv                     | app                                  | string           | Page View | 1            |
            | business unit              | BBVA Mexico                          | string           | Page View | 1            |
            | site app name              | App BBVA Mexico                      | string           | Page View | 1            |
            | project name               | Glomo Always ON                      | string           | Page View | 1            |
            | device mobile              | si                                   | string           | Page View | 1            |
            | user userState             | logado                               | string           | Page View | 1            |
            | user segment global        | 003001                               | string           | Page View | 1            |
            | internal campaign          |                                      | empty array      | Page View | 1            |
            | optimization attributes    |                                      | empty array      | Page View | 1            |
            | application                |                                      | empty str object | Page View | 1            |
            | products attributes        |                                      | empty array      | Page View | 1            |

    @ANA_DST004 @vbank
    @analytics
    @MX @web @android @ios
    @backend(test)
    @web-done
    Scenario: Dashboard - Stand-In Alert Operatives when user access credit card page
        Given a user with the following criteria
            | criteria                    |
            | stand in cards              |
        And the user accesses to dashboard
        When the user accesses to the "operative" "credit" card product detail for the first time
        Then the device contains the following variables:
            | item                       | value                                                    | type             |
            | version DL                 | 20250414_5.0                                             | string           |
            | page name                  | app:privada:personas:tarjetas:detalle                    | string           |
            | level 1                    | tarjetas                                                 | string           |
            | level 2                    | detalle                                                  | string           |
            | language                   | ES                                                       | string           |
            | page area                  | privada                                                  | string           |
            | page intent                | informacion                                              | string           |
            | channel                    | online                                                   | string           |
            | page instance ID           | de                                                       | string           |
            | page info version          | appVersion                                               | regexp named     |
            | page segment               | personas                                                 | string           |
            | sysEnv                     | app                                                      | string           |
            | business unit              | BBVA Mexico                                              | string           |
            | site app name              | App BBVA Mexico                                          | string           |
            | project name               | Glomo Always ON                                          | string           |
            | device mobile              | si                                                       | string           |
            | user userState             | logado                                                   | string           |
            | user segment global        | 003001                                                   | string           |
            | internal campaign          |                                                          | empty array      |
            | optimization attributes    |                                                          | empty array      |
            | application                |                                                          | empty str object |
            | products attributes        |                                                          | empty array      |

    @ANA_DST005 @vbank
    @analytics
    @MX @web @android @ios
    @backend(test)
    @web-done
    Scenario: Dashboard - Stand-In Alert Operatives when user selects help button
        Given a user with the following criteria
            | criteria                |
            | dashboard standin two   |
        And the user accesses to dashboard
        When the user selects "help section"
        Then the device contains the following variables:
            | item                       | value                                                                       | type             |
            | version DL                 | 20250414_5.0                                                                | string           |
            | page name                  | app:privada:personas:informacion no disponible preguntas frecuentes         | string           |
            | level 1                    | informacion no disponible preguntas frecuentes                              | string           |
            | language                   | ES                                                                          | string           |
            | page area                  | privada                                                                     | string           |
            | page intent                | informacion                                                                 | string           |
            | channel                    | online                                                                      | string           |
            | page instance ID           | de                                                                          | string           |
            | page info version          | appVersion                                                                  | regexp named     |
            | page segment               | personas                                                                    | string           |
            | sysEnv                     | app                                                                         | string           |
            | business unit              | BBVA Mexico                                                                 | string           |
            | site app name              | App BBVA Mexico                                                             | string           |
            | project name               | Glomo Always ON                                                             | string |
            | device mobile              | si                                                                          | string           |
            | user userState             | logado                                                                      | string           |
            | user segment global        | 003001                                                                      | string           |
            | internal campaign          |                                                                             | empty array      |
            | optimization attributes    |                                                                             | empty array      |
            | application                |                                                                             | empty str object |
            | products attributes        |                                                                             | empty array      |

    @ANA_DST006 @vbank
    @analytics
    @MX @web @android @ios
    @backend(test)
    @web-done
    Scenario: Dashboard - Stand-In Alert Operatives when user close standin notification
        Given a user with the following criteria
            | criteria                |
            | dashboard standin two   |
        And the user accesses to dashboard
        When the user closes the notification card
        Then the device contains the following variables:
            | item                       | value                                                 | type             |
            | version DL                 | 20250414_5.0                                          | string           |
            | page name                  | app:privada:personas:posicion global                  | string           |
            | level 1                    | posicion global                                       | string           |
            | language                   | ES                                                    | string           |
            | page area                  | privada                                               | string           |
            | page intent                | informacion                                           | string           |
            | channel                    | online                                                | string           |
            | page instance ID           | de                                                    | string           |
            | page info version          | appVersion                                            | regexp named     |
            | page segment               | personas                                              | string           |
            | sysEnv                     | app                                                   | string           |
            | business unit              | BBVA Mexico                                           | string           |
            | site app name              | App BBVA Mexico                                       | string           |
            | project name               | Glomo Always ON                                       | string           |
            | device mobile              | si                                                    | string           |
            | user userState             | logado                                                | string           |
            | user segment global        | 003001                                                | string           |
            | internal campaign          |                                                       | empty array      |
            | optimization attributes    |                                                       | empty array      |
            | application                |                                                       | empty str object |
            | products attributes        |                                                       | empty array      |

    @ANA_DST007 @vbank
    @analytics
    @MX @web @android @ios
    @backend(test)
    @web-done
    Scenario: Account - Stand-In  Alert Operatives when user selects more info option
        Given a user with the following criteria
            | criteria                      |
            | stand in accounts user        |
        And the user accesses to dashboard
        And the user accesses to the operative account product detail
        When the user selects "more info"
        Then the device contains the following variables:
            | item                       | value                                                                   | type             |
            | version DL                 | 20250414_5.0                                                            | string           |
            | page name                  | app:privada:personas:cuentas:detalle:aplicacion limitada a consultas    | string           |
            | level 1                    | cuentas                                                                 | string           |
            | level 2                    | detalle                                                                 | string           |
            | level 3                    | aplicacion limitada a consultas                                         | string           |
            | language                   | ES                                                                      | string           |
            | page area                  | privada                                                                 | string           |
            | page intent                | informacion                                                             | string           |
            | channel                    | online                                                                  | string           |
            | page instance ID           | de                                                                      | string           |
            | page info version          | appVersion                                                              | regexp named     |
            | page segment               | personas                                                                | string           |
            | sysEnv                     | app                                                                     | string           |
            | business unit              | BBVA Mexico                                                             | string           |
            | site app name              | App BBVA Mexico                                                         | string           |
            | project name               | Glomo Always ON                                                         | string           |
            | device mobile              | si                                                                      | string           |
            | user userState             | logado                                                                  | string           |
            | user segment global        | 003001                                                                  | string           |
            | internal campaign          |                                                                         | empty array      |
            | optimization attributes    |                                                                         | empty array      |
            | application                |                                                                         | empty str object |
            | products attributes        |                                                                         | empty array      |

    @ANA_DST008 @vbank
    @analytics
    @MX @web @android @ios
    @backend(test)
    @web-done
    Scenario: Account - Stand-In  Alert Operatives when user selects view account data
        Given a user with the following criteria
            | criteria                      |
            | stand in accounts user        |
        And the user accesses to dashboard
        And the user accesses to the operative account product detail
        When the user selects "view account data"
        Then the device contains the following variables:
            | item                       | value                                                                             | type             |
            | version DL                 | 20250414_5.0                                                                      | string           |
            | page name                  | app:privada:personas:cuentas:detalle:informacion no disponible mas informacion   | string           |
            | level 1                    | cuentas                                                                          | string           |
            | level 2                    | detalle                                                                           | string           |
            | level 3                    | informacion no disponible mas informacion                                         | string           |
            | language                   | ES                                                                                | string           |
            | page area                  | privada                                                                           | string           |
            | page intent                | informacion                                                                       | string           |
            | channel                    | online                                                                            | string           |
            | page instance ID           | de                                                                                | string           |
            | page info version          | appVersion                                                                        | regexp named     |
            | page segment               | personas                                                                          | string           |
            | sysEnv                     | app                                                                               | string           |
            | business unit              | BBVA Mexico                                                                       | string           |
            | site app name              | App BBVA Mexico                                                                   | string           |
            | project name               | Glomo Always ON                                                                   | string           |
            | device mobile              | si                                                                                | string           |
            | user userState             | logado                                                                            | string           |
            | user segment global        | 003001                                                                            | string           |
            | internal campaign          |                                                                                   | empty array      |
            | optimization attributes    |                                                                                   | empty array      |
            | application                |                                                                                   | empty str object |
            | products attributes        |                                                                                   | empty array      |

    @ANA_DST009 @vbank
    @analytics
    @MX @web @android @ios
    @backend(test)
    @web-done
    Scenario: The user accesses to product detail to select switch off option
        Given a user with the following criteria
            | criteria              |
            | always on products    |
        And the user accesses to dashboard
        And the user accesses to the "operative" "credit" card product detail for the first time
        When the user selects "switch off option"
        Then the device contains the following variables:
            | item                       | value                                                                        | type             |
            | version DL                 | 20250414_5.0                                                                 | string           |
            | page name                  | app:privada:personas:tarjetas:detalle:operacion no disponible apagar tarjeta | string           |
            | level 1                    | tarjetas                                                                     | string           |
            | level 2                    | detalle                                                                      | string           |
            | level 3                    | operacion no disponible apagar tarjeta                                       | string           |
            | language                   | ES                                                                           | string           |
            | page area                  | privada                                                                      | string           |
            | page intent                | informacion                                                                  | string           |
            | channel                    | online                                                                       | string           |
            | page instance ID           | de                                                                           | string           |
            | page info version          | appVersion                                                                   | regexp named     |
            | page segment               | personas                                                                     | string           |
            | sysEnv                     | app                                                                          | string           |
            | business unit              | BBVA Mexico                                                                  | string           |
            | site app name              | App BBVA Mexico                                                              | string           |
            | project name               | Glomo Always ON                                                              | string           |
            | device mobile              | si                                                                           | string           |
            | user userState             | logado                                                                       | string           |
            | user segment global        | 003001                                                                       | string           |
            | internal campaign          |                                                                              | empty array      |
            | optimization attributes    |                                                                              | empty array      |
            | application                |                                                                              | empty str object |
            | products attributes        |                                                                              | empty array      |

    @ANA_DST010 @vbank
    @analytics
    @MX @web @android @ios
    @backend(test)
    @web-done
    Scenario: The user accesses to product detail to select paycard option
        Given a user with the following criteria
            | criteria         |
            | stand in cards   |
        And the user accesses to dashboard
        And the user accesses to the "operative" "credit" card product detail for the first time
        When the user selects "paycard operative"
        Then the device contains the following variables:
            | item                       | value                                                                        | type             |
            | version DL                 | 20250414_5.0                                                                 | string           |
            | page name                  | app:privada:personas:tarjetas:detalle:operacion no disponible pagar tarjeta  | string           |
            | level 1                    | tarjetas                                                                     | string           |
            | level 2                    | detalle                                                                      | string           |
            | level 3                    | operacion no disponible pagar tarjeta                                        | string           |
            | language                   | ES                                                                           | string           |
            | page area                  | privada                                                                      | string           |
            | page intent                | informacion                                                                  | string           |
            | channel                    | online                                                                       | string           |
            | page instance ID           | de                                                                           | string           |
            | page info version          | appVersion                                                                   | regexp named     |
            | page segment               | personas                                                                     | string           |
            | sysEnv                     | app                                                                          | string           |
            | business unit              | BBVA Mexico                                                                  | string           |
            | site app name              | App BBVA Mexico                                                              | string           |
            | project name               | Glomo Always ON                                                              | string           |
            | device mobile              | si                                                                           | string           |
            | user userState             | logado                                                                       | string           |
            | user segment global        | 003001                                                                       | string           |
            | internal campaign          |                                                                              | empty array      |
            | optimization attributes    |                                                                              | empty array      |
            | application                |                                                                              | empty str object |
            | products attributes        |                                                                              | empty array      |

    @ANA_DST011 @vbank
    @analytics
    @MX @web @android @ios
    @backend(test)
    @web-done
    Scenario: The user accesses to product detail to select more info message
        Given a user with the following criteria
            | criteria         |
            | stand in cards   |
        And the user accesses to dashboard
        And the user accesses to the "operative" "credit" card product detail for the first time
        When the user access more info message
        Then the device contains the following variables:
            | item                       | value                                                                        | type             |
            | version DL                 | 20250414_5.0                                                                 | string           |
            | page name                  | app:privada:personas:tarjetas:detalle:aplicacion limitada a consultas        | string           |
            | level 1                    | tarjetas                                                                     | string           |
            | level 2                    | detalle                                                                      | string           |
            | level 3                    | aplicacion limitada a consultas                                              | string           |
            | language                   | ES                                                                           | string           |
            | page area                  | privada                                                                      | string           |
            | page intent                | informacion                                                                  | string           |
            | channel                    | online                                                                       | string           |
            | page instance ID           | de                                                                           | string           |
            | page info version          | appVersion                                                                   | regexp named     |
            | page segment               | personas                                                                     | string           |
            | sysEnv                     | app                                                                          | string           |
            | business unit              | BBVA Mexico                                                                  | string           |
            | site app name              | App BBVA Mexico                                                              | string           |
            | project name               | Glomo Always ON                                                              | string           |
            | device mobile              | si                                                                           | string           |
            | user userState             | logado                                                                       | string           |
            | user segment global        | 003001                                                                       | string           |
            | internal campaign          |                                                                              | empty array      |
            | optimization attributes    |                                                                              | empty array      |
            | application                |                                                                              | empty str object |
            | products attributes        |                                                                              | empty array      |

    @ANA_EVENT_DST014 @vbank
    @MX @web @android @ios
    @backend(test)
    @web-done
    @analytics
    Scenario: Account Detail - Stand-In The user accesses to detail movements page
        Given a user with the following criteria
            | criteria                     |
            | account transactions standin |
        And the user accesses to dashboard
        And the analytics interceptor service is initiated
        And the user accesses to the operative account product detail
        When the user accesses the details of a movement from "detail product"
        Then the analytics events contains the following variables
            | item                    | value                                                      | type             | event     | event number |
            | version DL              | 20250414_5.0                                               | string           | Page View | 3            |
            | page name               | app:privada:personas:cuentas:detalle:detalle de movimiento | string           | Page View | 3            |
            | level 1                 | cuentas                                                    | string           | Page View | 3            |
            | level 2                 | detalle                                                    | string           | Page View | 3            |
            | level 3                 | detalle de movimiento                                      | string           | Page View | 3            |
            | language                | ES                                                         | string           | Page View | 3            |
            | page area               | privada                                                    | string           | Page View | 3            |
            | page intent             | informacion                                                | string           | Page View | 3            |
            | channel                 | online                                                     | string           | Page View | 3            |
            | page instance ID        | de                                                         | string           | Page View | 3            |
            | page info version       | appVersion                                                 | regexp named     | Page View | 3            |
            | page segment            | personas                                                   | string           | Page View | 3            |
            | sysEnv                  | app                                                        | string           | Page View | 3            |
            | business unit           | BBVA Mexico                                                | string           | Page View | 3            |
            | site app name           | App BBVA Mexico                                            | string           | Page View | 3            |
            | project name            | Glomo Always ON                                            | string           | Page View | 3            |
            | device mobile           | si                                                         | string           | Page View | 3            |
            | user userState          | logado                                                     | string           | Page View | 3            |
            | user segment global     | 003001                                                     | string           | Page View | 3            |
            | internal campaign       |                                                            | empty array      | Page View | 3            |
            | optimization attributes |                                                            | empty array      | Page View | 3            |
            | application             |                                                            | empty str object | Page View | 3            |
            | products attributes     |                                                            | empty array      | Page View | 3            |

    @ANA_DST015 @vbank
    @MX @web @android @ios
    @backend(test)
    @web-done
    @analytics
    Scenario: Account Detail - Stand-In The user accesses to detail movements page and press the share receipt button
        Given a user with the following criteria
            | criteria                     |
            | account transactions standin |
        And the user accesses to dashboard
        And the user accesses to the operative account product detail
        When the user accesses the details of a movement from "detail product"
        And the user selects "share transaction"
        Then the device contains the following variables:
            | item                    | value                                                                                                    | type             |
            | version DL              | 20250414_5.0                                                                                             | string           |
            | page name               | app:privada:personas:cuentas:detalle:detalle de movimiento:operacion no disponible compartir comprobante | string           |
            | level 1                 | cuentas                                                                                                  | string           |
            | level 2                 | detalle                                                                                                  | string           |
            | level 3                 | detalle de movimiento                                                                                    | string           |
            | level 4                 | operacion no disponible compartir comprobante                                                            | string           |
            | language                | ES                                                                                                       | string           |
            | page area               | privada                                                                                                  | string           |
            | page intent             | informacion                                                                                              | string           |
            | channel                 | online                                                                                                   | string           |
            | page instance ID        | de                                                                                                       | string           |
            | page info version       | appVersion                                                                                               | regexp named     |
            | page segment            | personas                                                                                                 | string           |
            | sysEnv                  | app                                                                                                      | string           |
            | business unit           | BBVA Mexico                                                                                              | string           |
            | site app name           | App BBVA Mexico                                                                                          | string           |
            | project name            | Glomo Always ON                                                                                          | string           |
            | device mobile           | si                                                                                                       | string           |
            | user userState          | logado                                                                                                   | string           |
            | user segment global     | 003001                                                                                                   | string           |
            | internal campaign       |                                                                                                          | empty array      |
            | optimization attributes |                                                                                                          | empty array      |
            | application             |                                                                                                          | empty str object |
            | products attributes     |                                                                                                          | empty array      |

@purchasePointsAnalytics
Feature: Analytics - Purchase Points

    @ANA_PP001
    @analytics
    @ios @android @web @web-done
    @MX @backend(artichoke) @vbank
    Scenario: Funnel - app onclick start - pay with points
        Given a user with the following criteria
            | criteria            |
            | Pay with points     |
            | Card without errors |
        And the user accesses to movement detail from a "card with points" within Product detail
        And the analytics interceptor service is initiated
        When the user goes to Pay with Points
        Then the analytics events contains the following variables
            | item                     | value                                                              | type         | event              |
            | analytics                | analytics/glomo_base                                               | json schema  | App On Click Start |
            | version DL               | 20250414_5.0                                                       | string       | App On Click Start |
            | page name                | app:privada:personas:tarjetas:credito:detalle:movimientos:consulta | string       | App On Click Start |
            | level 1                  | tarjetas                                                           | string       | App On Click Start |
            | level 2                  | credito                                                            | string       | App On Click Start |
            | level 3                  | detalle                                                            | string       | App On Click Start |
            | language                 | ES                                                                 | string       | App On Click Start |
            | page area                | privada                                                            | string       | App On Click Start |
            | page intent              | informacion                                                        | string       | App On Click Start |
            | channel                  | online                                                             | string       | App On Click Start |
            | page instance ID         | de                                                                 | string       | App On Click Start |
            | page info version        | appVersion                                                         | regexp named | App On Click Start |
            | page segment             | personas                                                           | string       | App On Click Start |
            | sysEnv                   | app                                                                | string       | App On Click Start |
            | business unit            | BBVA Mexico                                                        | string       | App On Click Start |
            | site app name            | App BBVA Mexico                                                    | string       | App On Click Start |
            | project name             | Rewards                                                            | string       | App On Click Start |
            | device mobile            | si                                                                 | string       | App On Click Start |
            | user userState           | logado                                                             | string       | App On Click Start |
            | user segment global      | 003001                                                             | string       | App On Click Start |
            | profile ID               | profileID                                                          | regexp named | App On Click Start |
            | global application       | points redeem                                                      | string       | App On Click Start |
            | application name         | pagar con puntos                                                   | string       | App On Click Start |
            | application type         | operativa                                                          | string       | App On Click Start |
            | application step         | detalle del movimiento                                             | string       | App On Click Start |
            | fulfillment model        | online                                                             | string       | App On Click Start |
            | product primary category | tarjetas                                                           | string       | App On Click Start |
            | product subtype          | tarjetas credito                                                   | string       | App On Click Start |
            | product name             | oro bbva                                                           | string       | App On Click Start |
            | internal campaign        |                                                                    | empty array  | App On Click Start |
            | optimization attributes  |                                                                    | empty array  | App On Click Start |

    @ANA_PP002 @purchasePoints
    @analytics
    @ios @android @web @web-done
    @backend(artichoke) @MX @vbank
    Scenario: Funnel - app page visit - considerations
        Given a user with the following criteria
            | criteria            |
            | Pay with points     |
            | Card without errors |
        And the user accesses to movement detail from a "card with points" within Product detail
        When the user accesses to Pay with Points
        Then the device contains the following variables
            | item                     | value                                                                    | type         |
            | analytics                | analytics/glomo_base                                                     | json schema  |
            | version DL               | 20250414_5.0                                                             | string       |
            | page name                | app:privada:personas:tarjetas:credito:pagar con puntos:1 consideraciones | string       |
            | level 1                  | tarjetas                                                                 | string       |
            | level 2                  | credito                                                                  | string       |
            | level 3                  | pagar con puntos                                                         | string       |
            | level 4                  | 1 consideraciones                                                        | string       |
            | language                 | ES                                                                       | string       |
            | page area                | privada                                                                  | string       |
            | page intent              | transaccion                                                              | string       |
            | channel                  | online                                                                   | string       |
            | page instance ID         | de                                                                       | string       |
            | page info version        | appVersion                                                               | regexp named |
            | page segment             | personas                                                                 | string       |
            | sysEnv                   | app                                                                      | string       |
            | business unit            | BBVA Mexico                                                              | string       |
            | site app name            | App BBVA Mexico                                                          | string       |
            | project name             | Rewards                                                                  | string       |
            | device mobile            | si                                                                       | string       |
            | user userState           | logado                                                                   | string       |
            | user segment global      | 003001                                                                   | string       |
            | profile ID               | profileID                                                                | regexp named |
            | global application       | points redeem                                                            | string       |
            | application name         | pagar con puntos                                                         | string       |
            | application type         | operativa                                                                | string       |
            | application step         | 1 consideraciones                                                        | string       |
            | fulfillment model        | online                                                                   | string       |
            | application typology     |                                                                          | string       |
            | custom fields            | 34002                                                                    | string       |
            | product primary category | tarjetas                                                                 | string       |
            | product subtype          | tarjetas credito                                                         | string       |
            | product name             | oro bbva                                                                 | string       |
            | product currency         | MXN                                                                      | string       |
            | product amount           | 3400.26                                                                  | string       |
            | product quantity         | 80                                                                       | string       |
            | internal campaign        |                                                                          | empty array  |
            | optimization attributes  |                                                                          | empty array  |

    @ANA_PP003 @purchasePoints
    @analytics
    @ios @android @web @web-done
    @backend(artichoke) @MX @vbank
    Scenario: Funnel - app started - continue button
        Given a user with the following criteria
            | criteria            |
            | Pay with points     |
            | Card without errors |
        And the user accesses to movement detail from a "card with points" within Product detail
        And the analytics interceptor service is initiated
        When the user accesses to Pay with Points
        And the user continues the process
        Then the analytics events contains the following variables
            | item                     | value                                                                    | type         | event       |
            | analytics                | analytics/glomo_base                                                     | json schema  | App Started |
            | version DL               | 20250414_5.0                                                             | string       | App Started |
            | page name                | app:privada:personas:tarjetas:credito:pagar con puntos:1 consideraciones | string       | App Started |
            | level 1                  | tarjetas                                                                 | string       | App Started |
            | level 2                  | credito                                                                  | string       | App Started |
            | level 3                  | pagar con puntos                                                         | string       | App Started |
            | level 4                  | 1 consideraciones                                                        | string       | App Started |
            | language                 | ES                                                                       | string       | App Started |
            | page area                | privada                                                                  | string       | App Started |
            | page intent              | transaccion                                                              | string       | App Started |
            | channel                  | online                                                                   | string       | App Started |
            | page instance ID         | de                                                                       | string       | App Started |
            | page info version        | appVersion                                                               | regexp named | App Started |
            | page segment             | personas                                                                 | string       | App Started |
            | sysEnv                   | app                                                                      | string       | App Started |
            | business unit            | BBVA Mexico                                                              | string       | App Started |
            | site app name            | App BBVA Mexico                                                          | string       | App Started |
            | project name             | Rewards                                                                  | string       | App Started |
            | device mobile            | si                                                                       | string       | App Started |
            | user userState           | logado                                                                   | string       | App Started |
            | user segment global      | 003001                                                                   | string       | App Started |
            | profile ID               | profileID                                                                | regexp named | App Started |
            | global application       | points redeem                                                            | string       | App Started |
            | application name         | pagar con puntos                                                         | string       | App Started |
            | application type         | operativa                                                                | string       | App Started |
            | application step         | continuar                                                                | string       | App Started |
            | fulfillment model        | online                                                                   | string       | App Started |
            | custom fields            | 34002                                                                    | string       | App Started |
            | product primary category | tarjetas                                                                 | string       | App Started |
            | product subtype          | tarjetas credito                                                         | string       | App Started |
            | product name             | oro bbva                                                                 | string       | App Started |
            | product currency         | MXN                                                                      | string       | App Started |
            | product amount           | 3400.26                                                                  | string       | App Started |
            | product quantity         | 80                                                                       | string       | App Started |
            | internal campaign        |                                                                          | empty array  | App Started |
            | optimization attributes  |                                                                          | empty array  | App Started |

    @ANA_PP004 @purchasePoints
    @analytics
    @ios @android @web @web-done
    @backend(artichoke) @MX @vbank
    Scenario: Funnel - app step 2 - points pay summary
        Given a user with the following criteria
            | criteria            |
            | Pay with points     |
            | Card without errors |
        And the user accesses to movement detail from a "card with points" within Product detail
        When the user accesses to Pay with Points
        And the user accesses the points pay summary
        Then the device contains the following variables
            | item                     | value                                                                 | type         |
            | analytics                | analytics/glomo_base                                                  | json schema  |
            | version DL               | 20250414_5.0                                                          | string       |
            | page name                | app:privada:personas:tarjetas:credito:pagar con puntos:2 confirmacion | string       |
            | level 1                  | tarjetas                                                              | string       |
            | level 2                  | credito                                                               | string       |
            | level 3                  | pagar con puntos                                                      | string       |
            | level 4                  | 2 confirmacion                                                        | string       |
            | language                 | ES                                                                    | string       |
            | page area                | privada                                                               | string       |
            | page intent              | transaccion                                                           | string       |
            | channel                  | online                                                                | string       |
            | page instance ID         | de                                                                    | string       |
            | page info version        | appVersion                                                            | regexp named |
            | page segment             | personas                                                              | string       |
            | sysEnv                   | app                                                                   | string       |
            | business unit            | BBVA Mexico                                                           | string       |
            | site app name            | App BBVA Mexico                                                       | string       |
            | project name             | Rewards                                                               | string       |
            | device mobile            | si                                                                    | string       |
            | user userState           | logado                                                                | string       |
            | user segment global      | 003001                                                                | string       |
            | profile ID               | profileID                                                             | regexp named |
            | global application       | points redeem                                                         | string       |
            | application name         | pagar con puntos                                                      | string       |
            | application type         | operativa                                                             | string       |
            | application step         | 2 confirmacion                                                        | string       |
            | fulfillment model        | online                                                                | string       |
            | application typology     |                                                                       | string       |
            | custom fields            | 34002                                                                 | string       |
            | product primary category | tarjetas                                                              | string       |
            | product subtype          | tarjetas credito                                                      | string       |
            | product name             | oro bbva                                                              | string       |
            | product currency         | MXN                                                                   | string       |
            | product amount           | 3400.26                                                               | string       |
            | product quantity         | 80                                                                    | string       |
            | internal campaign        |                                                                       | empty array  |
            | optimization attributes  |                                                                       | empty array  |

    @ANA_PP005 @purchasePoints
    @analytics
    @ios @android @web @web-done
    @backend(artichoke) @MX @vbank
    Scenario: Funnel - app completed - points pay receipt
        Given a user with the following criteria
            | criteria            |
            | Pay with points     |
            | Card without errors |
        And the user accesses to movement detail from a "card with points" within Product detail
        When the user accesses to Pay with Points
        And the user continues with the pay process
        Then the device contains the following variables
            | item                     | value                                                                 | type         |
            | analytics                | analytics/glomo_base                                                  | json schema  |
            | version DL               | 20250414_5.0                                                          | string       |
            | page name                | app:privada:personas:tarjetas:credito:pagar con puntos:pagina exitosa | string       |
            | level 1                  | tarjetas                                                              | string       |
            | level 2                  | credito                                                               | string       |
            | level 3                  | pagar con puntos                                                      | string       |
            | level 4                  | pagina exitosa                                                        | string       |
            | language                 | ES                                                                    | string       |
            | page area                | privada                                                               | string       |
            | page intent              | transaccion                                                           | string       |
            | channel                  | online                                                                | string       |
            | page instance ID         | de                                                                    | string       |
            | page info version        | appVersion                                                            | regexp named |
            | page segment             | personas                                                              | string       |
            | sysEnv                   | app                                                                   | string       |
            | business unit            | BBVA Mexico                                                           | string       |
            | site app name            | App BBVA Mexico                                                       | string       |
            | project name             | Rewards                                                               | string       |
            | device mobile            | si                                                                    | string       |
            | user userState           | logado                                                                | string       |
            | user segment global      | 003001                                                                | string       |
            | profile ID               | profileID                                                             | regexp named |
            | global application       | points redeem                                                         | string       |
            | application name         | pagar con puntos                                                      | string       |
            | application type         | operativa                                                             | string       |
            | application step         | pagina exitosa                                                        | string       |
            | fulfillment model        | online                                                                | string       |
            | application typology     |                                                                       | string       |
            | custom fields            | 34002                                                                 | string       |
            | product primary category | tarjetas                                                              | string       |
            | product subtype          | tarjetas credito                                                      | string       |
            | product name             | oro bbva                                                              | string       |
            | product currency         | MXN                                                                   | string       |
            | product amount           | 3400.26                                                               | string       |
            | product quantity         | 80                                                                    | string       |
            | internal campaign        |                                                                       | empty array  |
            | optimization attributes  |                                                                       | empty array  |

    @ANA_PP006 @purchasePoints
    @analytics
    @ios @android @web @web-done
    @backend(artichoke) @MX @vbank
    Scenario: Page view - faqs
        Given a user with the following criteria
            | criteria            |
            | Pay with points     |
            | Card without errors |
        And the user accesses to movement detail from a "card with points" within Product detail
        When the user accesses to Pay with Points
        And the user accesses to faq questions page
        Then the device contains the following variables
            | item                    | value                                                      | type             |
            | analytics               | analytics/glomo_base                                       | json schema      |
            | version DL              | 20250414_5.0                                               | string           |
            | page name               | app:privada:personas:tarjetas:credito:pagar con puntos:faq | string           |
            | level 1                 | tarjetas                                                   | string           |
            | level 2                 | credito                                                    | string           |
            | level 3                 | pagar con puntos                                           | string           |
            | level 4                 | faq                                                        | string           |
            | language                | ES                                                         | string           |
            | page area               | privada                                                    | string           |
            | page intent             | transaccion                                                | string           |
            | channel                 | online                                                     | string           |
            | page instance ID        | de                                                         | string           |
            | page info version       | appVersion                                                 | regexp named     |
            | page segment            | personas                                                   | string           |
            | sysEnv                  | app                                                        | string           |
            | business unit           | BBVA Mexico                                                | string           |
            | site app name           | App BBVA Mexico                                            | string           |
            | project name            | Rewards                                                    | string           |
            | device mobile           | si                                                         | string           |
            | user userState          | logado                                                     | string           |
            | user segment global     | 003001                                                     | string           |
            | profile ID              | profileID                                                  | regexp named     |
            | internal campaign       |                                                            | empty array      |
            | optimization attributes |                                                            | empty array      |
            | application             |                                                            | empty str object |
            | products attributes     |                                                            | empty array      |

    @ANA_PP007 @purchasePoints
    @analytics
    @ios @android @web @web-done
    @backend(artichoke) @MX @vbank @vbank-modified
    Scenario: FootPrint - error - servicio no disponible
        Given a user with the following criteria
            | criteria              |
            | Pay with points       |
            | Card with third error |
        And the user accesses to movement detail from a "card with points" within Product detail
        When the user attempts to accesses to Pay with Points
        And the user retries "2" more times
        Then the device contains the following variables
            | item                    | value                                                                                  | type             |
            | analytics               | analytics/glomo_base                                                                   | json schema      |
            | version DL              | 20250414_5.0                                                                           | string           |
            | page name               | app:privada:personas:tarjetas:credito:pagar con puntos:error de servicio no disponible | string           |
            | level 1                 | tarjetas                                                                               | string           |
            | level 2                 | credito                                                                                | string           |
            | level 3                 | pagar con puntos                                                                       | string           |
            | level 4                 | error de servicio no disponible                                                        | string           |
            | error page              | error de servicio no disponible                                                        | string           |
            | language                | ES                                                                                     | string           |
            | page area               | privada                                                                                | string           |
            | page intent             | transaccion                                                                            | string           |
            | channel                 | online                                                                                 | string           |
            | page instance ID        | de                                                                                     | string           |
            | page info version       | appVersion                                                                             | regexp named     |
            | page segment            | personas                                                                               | string           |
            | sysEnv                  | app                                                                                    | string           |
            | business unit           | BBVA Mexico                                                                            | string           |
            | site app name           | App BBVA Mexico                                                                        | string           |
            | project name            | Rewards                                                                                | string           |
            | device mobile           | si                                                                                     | string           |
            | user userState          | logado                                                                                 | string           |
            | user segment global     | 003001                                                                                 | string           |
            | profile ID              | profileID                                                                              | regexp named     |
            | internal campaign       |                                                                                        | empty array      |
            | optimization attributes |                                                                                        | empty array      |
            | application             |                                                                                        | empty str object |
            | products attributes     |                                                                                        | empty array      |

    @ANA_PP008 @purchasePoints
    @analytics
    @ios @android @web @web-done
    @backend(artichoke) @MX @vbank @vbank-modified
    @tmpExclude @JIRA.GLOMOMX-192448
    Scenario: FootPrint - error - backend
        Given a user with the following criteria
            | criteria                  |
            | Pay with points           |
            | Card with third error pay |
        And the user accesses to movement detail from a "card with points" within Product detail
        And the user accesses to Pay with Points
        When the user continues with the pay process
        And the user retries "2" more times
        Then the device contains the following variables
            | item                    | value                                                                   | type             |
            | analytics               | analytics/glomo_base                                                    | json schema      |
            | version DL              | 20250414_5.0                                                            | string           |
            | page name               | app:privada:personas:tarjetas:credito:pagar con puntos:error de backend | string           |
            | level 1                 | tarjetas                                                                | string           |
            | level 2                 | credito                                                                 | string           |
            | level 3                 | pagar con puntos                                                        | string           |
            | level 4                 | error de backend                                                        | string           |
            | error page              | error de backend                                                        | string           |
            | language                | ES                                                                      | string           |
            | page area               | privada                                                                 | string           |
            | page intent             | transaccion                                                             | string           |
            | channel                 | online                                                                  | string           |
            | page instance ID        | de                                                                      | string           |
            | page info version       | appVersion                                                              | regexp named     |
            | page segment            | personas                                                                | string           |
            | sysEnv                  | app                                                                     | string           |
            | business unit           | BBVA Mexico                                                             | string           |
            | site app name           | App BBVA Mexico                                                         | string           |
            | project name            | Rewards                                                                 | string           |
            | device mobile           | si                                                                      | string           |
            | user userState          | logado                                                                  | string           |
            | user segment global     | 003001                                                                  | string           |
            | profile ID              | profileID                                                               | regexp named     |
            | internal campaign       |                                                                         | empty array      |
            | optimization attributes |                                                                         | empty array      |
            | application             |                                                                         | empty str object |
            | products attributes     |                                                                         | empty array      |

    @ANA_PP009 @purchasePoints
    @analytics
    @ios @android @web @web-done
    @backend(artichoke) @MX @vbank
    Scenario: FootPrint - error - tarjeta inactiva
        Given a user with the following criteria
            | criteria            |
            | Pay with points     |
            | card blocked with points and without overdraft |
        And the user accesses to movement detail from a "card blocked with points and without overdraft" within Product detail
        And the analytics interceptor service is initiated
        When the user attempts to accesses to Pay with Points
        Then the analytics events contains the following variables
            | item                    | value                                                                            | type             | event     |
            | analytics               | analytics/glomo_base                                                             | json schema      | Page View |
            | version DL              | 20250414_5.0                                                                     | string           | Page View |
            | page name               | app:privada:personas:tarjetas:credito:pagar con puntos:error de tarjeta inactiva | string           | Page View |
            | level 1                 | tarjetas                                                                         | string           | Page View |
            | level 2                 | credito                                                                          | string           | Page View |
            | level 3                 | pagar con puntos                                                                 | string           | Page View |
            | level 4                 | error de tarjeta inactiva                                                        | string           | Page View |
            | error page              | error de tarjeta inactiva                                                        | string           | Page View |
            | language                | ES                                                                               | string           | Page View |
            | page area               | privada                                                                          | string           | Page View |
            | page intent             | transaccion                                                                      | string           | Page View |
            | channel                 | online                                                                           | string           | Page View |
            | page instance ID        | de                                                                               | string           | Page View |
            | page info version       | appVersion                                                                       | regexp named     | Page View |
            | page segment            | personas                                                                         | string           | Page View |
            | sysEnv                  | app                                                                              | string           | Page View |
            | business unit           | BBVA Mexico                                                                      | string           | Page View |
            | site app name           | App BBVA Mexico                                                                  | string           | Page View |
            | project name            | Rewards                                                                          | string           | Page View |
            | device mobile           | si                                                                               | string           | Page View |
            | user userState          | logado                                                                           | string           | Page View |
            | user segment global     | 003001                                                                           | string           | Page View |
            | profile ID              | profileID                                                                        | regexp named     | Page View |
            | internal campaign       |                                                                                  | empty array      | Page View |
            | optimization attributes |                                                                                  | empty array      | Page View |
            | application             |                                                                                  | empty str object | Page View |
            | products attributes     |                                                                                  | empty array      | Page View |

    @ANA_PP010 @purchasePoints
    @analytics
    @ios @android @web @web-done
    @backend(artichoke) @MX @vbank
    Scenario: FootPrint - faqs - que significa pagar mis compras con puntos
        Given a user with the following criteria
            | criteria            |
            | Pay with points     |
            | Card without errors |
        And the user accesses to movement detail from a "card with points" within Product detail
        And the user accesses to Pay with Points
        When the user accesses to faq questions page
        And the user accesses to some question
        Then the device contains the following variables
            | item                    | value                                                                                                 | type             |
            | analytics               | analytics/glomo_base                                                                                  | json schema      |
            | version DL              | 20250414_5.0                                                                                          | string           |
            | page name               | app:privada:personas:tarjetas:credito:pagar con puntos:faq:que significa pagar mis compras con puntos | string           |
            | level 1                 | tarjetas                                                                                              | string           |
            | level 2                 | credito                                                                                               | string           |
            | level 3                 | pagar con puntos                                                                                      | string           |
            | level 4                 | faq                                                                                                   | string           |
            | level 5                 | que significa pagar mis compras con puntos                                                            | string           |
            | language                | ES                                                                                                    | string           |
            | page area               | privada                                                                                               | string           |
            | page intent             | transaccion                                                                                           | string           |
            | channel                 | online                                                                                                | string           |
            | page instance ID        | de                                                                                                    | string           |
            | page info version       | appVersion                                                                                            | regexp named     |
            | page segment            | personas                                                                                              | string           |
            | sysEnv                  | app                                                                                                   | string           |
            | business unit           | BBVA Mexico                                                                                           | string           |
            | site app name           | App BBVA Mexico                                                                                       | string           |
            | project name            | Rewards                                                                                               | string           |
            | device mobile           | si                                                                                                    | string           |
            | user userState          | logado                                                                                                | string           |
            | user segment global     | 003001                                                                                                | string           |
            | profile ID              | profileID                                                                                             | regexp named     |
            | internal campaign       |                                                                                                       | empty array      |
            | optimization attributes |                                                                                                       | empty array      |
            | application             |                                                                                                       | empty str object |
            | products attributes     |                                                                                                       | empty array      |

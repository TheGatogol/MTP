@financeTransactionCreditCardAnalytics
Feature: Analytics - Finance Transaction Credit Card

    @ANA_EVENT_FTSP001
    @analytics
    @ios @android @web
    @MX @backend(artichoke) @vbank
    @web-done
    Scenario: Analytics - apply promotion - analytics events App On Click Start, App Page Visit
        Given a user with the following criteria
            | criteria                       |
            | campaigns offers id equal 0744 |
        And the user accesses to movement detail from a "card with points" within Product detail
        And the analytics interceptor service is initiated
        When the user attempts to finance transaction
        Then the analytics events contains the following variables
            | item                     | value                                                                     | type         | event                              |
            | analytics                | analytics/glomo_base                                                      | json schema  | App On Click Start, App Page Visit |
            | version DL               | 20250414_5.0                                                              | string       | App On Click Start, App Page Visit |
            | page name                | app:privada:personas:tarjetas:credito:movimientos:compra                  | string       | App On Click Start                 |
            | page name                | app:privada:personas:tarjetas:credito:financiamiento de compras:1 detalle | string       | App Page Visit                     |
            | level 1                  | tarjetas                                                                  | string       | App On Click Start, App Page Visit |
            | level 2                  | credito                                                                   | string       | App On Click Start, App Page Visit |
            | level 3                  | movimientos                                                               | string       | App On Click Start                 |
            | level 3                  | financiamiento de compras                                                 | string       | App Page Visit                     |
            | level 4                  | compra                                                                    | string       | App On Click Start                 |
            | level 4                  | 1 detalle                                                                 | string       | App Page Visit                     |
            | language                 | ES                                                                        | string       | App On Click Start, App Page Visit |
            | page area                | privada                                                                   | string       | App On Click Start, App Page Visit |
            | page intent              | informacion                                                               | string       | App On Click Start                 |
            | page intent              | transaccion                                                               | string       | App Page Visit                     |
            | channel                  | online                                                                    | string       | App On Click Start, App Page Visit |
            | page instance ID         | de                                                                        | string       | App On Click Start, App Page Visit |
            | version DL               | 20250414_5.0                                                              | string       | App On Click Start, App Page Visit |
            | page info version        | appVersion                                                                | regexp named | App On Click Start, App Page Visit |
            | page segment             | personas                                                                  | string       | App On Click Start                 |
            | page segment             | personas                                                                  | string       | App Page Visit                     |
            | sysEnv                   | app                                                                       | string       | App On Click Start, App Page Visit |
            | business unit            | BBVA Mexico                                                               | string       | App On Click Start, App Page Visit |
            | site app name            | App BBVA Mexico                                                           | string       | App On Click Start, App Page Visit |
            | project name             | Glomo                                                                     | string       | App On Click Start, App Page Visit |
            | device mobile            | si                                                                        | string       | App On Click Start, App Page Visit |
            | user userState           | logado                                                                    | string       | App On Click Start, App Page Visit |
            | profile ID               | profileID                                                                 | regexp named | App On Click Start, App Page Visit |
            | user segment global      | 003001                                                                    | string       | App On Click Start, App Page Visit |
            | user gender              | gender                                                                    | regexp named | App On Click Start, App Page Visit |
            | user age                 | age                                                                       | regexp named | App On Click Start, App Page Visit |
            | global application       | purchase financing                                                        | string       | App On Click Start, App Page Visit |
            | application name         | financiamiento de compras                                                 | string       | App On Click Start, App Page Visit |
            | application type         | operativa                                                                 | string       | App On Click Start, App Page Visit |
            | application step         | me interesa                                                               | string       | App On Click Start                 |
            | application step         | 1 detalle                                                                 | string       | App Page Visit                     |
            | fulfillment model        | online                                                                    | string       | App On Click Start, App Page Visit |
            | product primary Category | tarjetas                                                                  | string       | App On Click Start, App Page Visit |
            | product subtype          | tarjetas credito                                                          | string       | App On Click Start, App Page Visit |
            | internal campaign        |                                                                           | empty array  | App On Click Start, App Page Visit |
            | optimization attributes  |                                                                           | empty array  | App On Click Start, App Page Visit |

    @ANA_EVENT_FTSP002
    @analytics
    @ios @android @web
    @MX @backend(artichoke) @vbank
    @web-done
    Scenario: Analytics - apply promotion - APP STARTED
        Given a user with the following criteria
            | criteria                       |
            | campaigns offers id equal 0744 |
        And the user accesses to switch to instalments from a fundable movement
        And the analytics interceptor service is initiated
        When the user accesses to "monthly payment" help modal
        Then the analytics events contains the following variables
            | item                     | value                                                                     | type         | event       |
            | analytics                | analytics/glomo_base                                                      | json schema  | App Started |
            | version DL               | 20250414_5.0                                                              | string       | App Started |
            | page name                | app:privada:personas:tarjetas:credito:financiamiento de compras:1 detalle | string       | App Started |
            | level 1                  | tarjetas                                                                  | string       | App Started |
            | level 2                  | credito                                                                   | string       | App Started |
            | level 3                  | financiamiento de compras                                                 | string       | App Started |
            | level 4                  | 1 detalle                                                                 | string       | App Started |
            | language                 | ES                                                                        | string       | App Started |
            | page area                | privada                                                                   | string       | App Started |
            | page intent              | transaccion                                                               | string       | App Started |
            | channel                  | online                                                                    | string       | App Started |
            | page instance ID         | de                                                                        | string       | App Started |
            | version DL               | 20250414_5.0                                                              | string       | App Started |
            | page info version        | appVersion                                                                | regexp named | App Started |
            | page segment             | personas                                                                  | string       | App Started |
            | sysEnv                   | app                                                                       | string       | App Started |
            | business unit            | BBVA Mexico                                                               | string       | App Started |
            | site app name            | App BBVA Mexico                                                           | string       | App Started |
            | project name             | Glomo                                                                     | string       | App Started |
            | device mobile            | si                                                                        | string       | App Started |
            | user userState           | logado                                                                    | string       | App Started |
            | profile ID               | profileID                                                                 | regexp named | App Started |
            | user segment global      | 003001                                                                    | string       | App Started |
            | user gender              | gender                                                                    | regexp named | App Started |
            | user age                 | age                                                                       | regexp named | App Started |
            | global application       | purchase financing                                                        | string       | App Started |
            | application name         | financiamiento de compras                                                 | string       | App Started |
            | application type         | operativa                                                                 | string       | App Started |
            | application step         | info pago mensual                                                         | string       | App Started |
            | fulfillment model        | online                                                                    | string       | App Started |
            | product primary Category | tarjetas                                                                  | string       | App Started |
            | product subtype          | tarjetas credito                                                          | string       | App Started |
            | internal campaign        |                                                                           | empty array  | App Started |
            | optimization attributes  |                                                                           | empty array  | App Started |

    @ANA_EVENT_FTSP003
    @analytics
    @ios @android @web
    @MX @backend(artichoke) @vbank
    @web-done
    Scenario: Analytics - apply promotion - APP COMPLETED
        Given a user with the following criteria
            | criteria                       |
            | campaigns offers id equal 0744 |
        And the user accesses to switch to instalments from a fundable movement
        And the analytics interceptor service is initiated
        When the user applies the financing offer
        Then the analytics events contains the following variables
            | item                         | value                                                                          | type         | event         |
            | analytics                    | analytics/glomo_base                                                           | json schema  | App Completed |
            | version DL                   | 20250414_5.0                                                                   | string       | App Completed |
            | page name                    | app:privada:personas:tarjetas:credito:financiamiento de compras:pagina exitosa | string       | App Completed |
            | level 1                      | tarjetas                                                                       | string       | App Completed |
            | level 2                      | credito                                                                        | string       | App Completed |
            | level 3                      | financiamiento de compras                                                      | string       | App Completed |
            | level 4                      | pagina exitosa                                                                 | string       | App Completed |
            | language                     | ES                                                                             | string       | App Completed |
            | page area                    | privada                                                                        | string       | App Completed |
            | page intent                  | transaccion                                                                    | string       | App Completed |
            | channel                      | online                                                                         | string       | App Completed |
            | page instance ID             | de                                                                             | string       | App Completed |
            | version DL                   | 20250414_5.0                                                                   | string       | App Completed |
            | page info version            | appVersion                                                                     | regexp named | App Completed |
            | page segment                 | personas                                                                       | string       | App Completed |
            | sysEnv                       | app                                                                            | string       | App Completed |
            | business unit                | BBVA Mexico                                                                    | string       | App Completed |
            | site app name                | App BBVA Mexico                                                                | string       | App Completed |
            | project name                 | Glomo                                                                          | string       | App Completed |
            | device mobile                | si                                                                             | string       | App Completed |
            | user userState               | logado                                                                         | string       | App Completed |
            | profile ID                   | profileID                                                                      | regexp named | App Completed |
            | user segment global          | 003001                                                                         | string       | App Completed |
            | user gender                  | gender                                                                         | regexp named | App Completed |
            | user age                     | age                                                                            | regexp named | App Completed |
            | global application           | purchase financing                                                             | string       | App Completed |
            | application name             | financiamiento de compras                                                      | string       | App Completed |
            | application type             | operativa                                                                      | string       | App Completed |
            | application step             | pagina exitosa                                                                 | string       | App Completed |
            | fulfillment model            | online                                                                         | string       | App Completed |
            | custom fields                | firma:token                                                                    | string       | App Completed |
            | application typology         | 800                                                                            | string       | App Completed |
            | application state            | finalizado                                                                     | string       | App Completed |
            | application operation number | 8866                                                                           | string       | App Completed |
            | product primary category     | tarjetas                                                                       | string       | App Completed |
            | product subtype              | tarjetas credito                                                               | string       | App Completed |
            | product amount               | 1500.1                                                                         | string       | App Completed |
            | product payment amount       | 500.03                                                                         | string       | App Completed |
            | product number of payments   | 3                                                                              | string       | App Completed |
            | product interest rate        | 12                                                                             | string       | App Completed |
            | product state                | finalizado                                                                     | string       | App Completed |
            | internal campaign            |                                                                                | empty array  | App Completed |
            | optimization attributes      |                                                                                | empty array  | App Completed |

    @ANA_EVENT_FTSP004
    @analytics
    @ios @android @web
    @MX @backend(artichoke) @vbank
    @web-done
    Scenario: Analytics - apply promotion - Advanced Footprint
        Given a user with the following criteria
            | criteria                       |
            | campaigns offers id equal 0744 |
        And the user accesses to movement detail from a "card with points" within Product detail
        When the user attempts to finance considerations
        Then the device contains the following variables
            | item                    | value                                                                           | type         |
            | analytics               | analytics/glomo_base                                                            | json schema  |
            | version DL              | 20250414_5.0                                                                    | string       |
            | page name               | app:privada:personas:tarjetas:credito:financiamiento de compras:consideraciones | string       |
            | level 1                 | tarjetas                                                                        | string       |
            | level 2                 | credito                                                                         | string       |
            | level 3                 | financiamiento de compras                                                       | string       |
            | level 4                 | consideraciones                                                                 | string       |
            | language                | ES                                                                              | string       |
            | page area               | privada                                                                         | string       |
            | page intent             | informacion                                                                     | string       |
            | channel                 | online                                                                          | string       |
            | page instance ID        | de                                                                              | string       |
            | page info version       | appVersion                                                                      | regexp named |
            | page segment            | personas                                                                        | string       |
            | sysEnv                  | app                                                                             | string       |
            | business unit           | BBVA Mexico                                                                     | string       |
            | site app name           | App BBVA Mexico                                                                 | string       |
            | project name            | Glomo                                                                           | string       |
            | device mobile           | si                                                                              | string       |
            | user userState          | logado                                                                          | string       |
            | user segment global     | 003001                                                                          | string       |
            | profile ID              | profileID                                                                       | regexp named |
            | user gender             | gender                                                                          | regexp named |
            | user age                | age                                                                             | regexp named |
            | internal campaign       |                                                                                 | empty array  |
            | optimization attributes |                                                                                 | empty array  |

    @ANA_EVENT_FTSP005
    @analytics
    @ios @android @web
    @MX @backend(artichoke) @vbank
    @web-done
    Scenario: Analytics - access to total payment help modal - Advanced Footprint
        Given a user with the following criteria
            | criteria                       |
            | campaigns offers id equal 0744 |
        And the user accesses to switch to instalments from a fundable movement
        When the user accesses to "total payment" help modal
        Then the device contains the following variables
            | item                    | value                                                                                   | type         |
            | analytics               | analytics/glomo_base                                                                    | json schema  |
            | version DL              | 20250414_5.0                                                                            | string       |
            | page name               | app:privada:personas:tarjetas:credito:financiamiento de compras:1 detalle:total a pagar | string       |
            | level 1                 | tarjetas                                                                                | string       |
            | level 2                 | credito                                                                                 | string       |
            | level 3                 | financiamiento de compras                                                               | string       |
            | level 4                 | 1 detalle                                                                               | string       |
            | level 5                 | total a pagar                                                                           | string       |
            | language                | ES                                                                                      | string       |
            | page area               | privada                                                                                 | string       |
            | page intent             | informacion                                                                             | string       |
            | channel                 | online                                                                                  | string       |
            | page instance ID        | de                                                                                      | string       |
            | page info version       | appVersion                                                                              | regexp named |
            | page segment            | personas                                                                                | string       |
            | sysEnv                  | app                                                                                     | string       |
            | business unit           | BBVA Mexico                                                                             | string       |
            | site app name           | App BBVA Mexico                                                                         | string       |
            | project name            | Glomo                                                                                   | string       |
            | device mobile           | si                                                                                      | string       |
            | user userState          | logado                                                                                  | string       |
            | user segment global     | 003001                                                                                  | string       |
            | profile ID              | profileID                                                                               | regexp named |
            | user gender             | gender                                                                                  | regexp named |
            | user age                | age                                                                                     | regexp named |
            | internal campaign       |                                                                                         | empty array  |
            | optimization attributes |                                                                                         | empty array  |

    @ANA_EVENT_FTSP006
    @analytics
    @ios @android @web
    @MX @backend(artichoke) @vbank
    @web-done
    Scenario: Analytics - access to monthly payment help modal - Advanced Footprint
        Given a user with the following criteria
            | criteria                       |
            | campaigns offers id equal 0744 |
        And the user accesses to switch to instalments from a fundable movement
        When the user accesses to "monthly payment" help modal
        Then the device contains the following variables
            | item                    | value                                                                                  | type         |
            | analytics               | analytics/glomo_base                                                                   | json schema  |
            | version DL              | 20250414_5.0                                                                           | string       |
            | page name               | app:privada:personas:tarjetas:credito:financiamiento de compras:1 detalle:pago mensual | string       |
            | level 1                 | tarjetas                                                                               | string       |
            | level 2                 | credito                                                                                | string       |
            | level 3                 | financiamiento de compras                                                              | string       |
            | level 4                 | 1 detalle                                                                              | string       |
            | level 5                 | pago mensual                                                                           | string       |
            | language                | ES                                                                                     | string       |
            | page area               | privada                                                                                | string       |
            | page intent             | informacion                                                                            | string       |
            | channel                 | online                                                                                 | string       |
            | page instance ID        | de                                                                                     | string       |
            | page info version       | appVersion                                                                             | regexp named |
            | page segment            | personas                                                                               | string       |
            | sysEnv                  | app                                                                                    | string       |
            | business unit           | BBVA Mexico                                                                            | string       |
            | site app name           | App BBVA Mexico                                                                        | string       |
            | project name            | Glomo                                                                                  | string       |
            | device mobile           | si                                                                                     | string       |
            | user userState          | logado                                                                                 | string       |
            | user segment global     | 003001                                                                                 | string       |
            | profile ID              | profileID                                                                              | regexp named |
            | user gender             | gender                                                                                 | regexp named |
            | user age                | age                                                                                    | regexp named |
            | internal campaign       |                                                                                        | empty array  |
            | optimization attributes |                                                                                        | empty array  |

    @ANA_EVENT_FTSP007
    @analytics
    @ios @android @web
    @MX @backend(artichoke) @vbank
    @web-done
    Scenario: Analytics - access to bbva points help modal - Advanced Footprint
        Given a user with the following criteria
            | criteria                       |
            | campaigns offers id equal 0744 |
        And the user accesses to switch to instalments from a fundable movement
        When the user accesses to "bbva points" help modal
        Then the device contains the following variables
            | item                    | value                                                                                        | type         |
            | analytics               | analytics/glomo_base                                                                         | json schema  |
            | version DL              | 20250414_5.0                                                                                 | string       |
            | page name               | app:privada:personas:tarjetas:credito:financiamiento de compras:1 detalle:puntos a descontar | string       |
            | level 1                 | tarjetas                                                                                     | string       |
            | level 2                 | credito                                                                                      | string       |
            | level 3                 | financiamiento de compras                                                                    | string       |
            | level 4                 | 1 detalle                                                                                    | string       |
            | level 5                 | puntos a descontar                                                                           | string       |
            | language                | ES                                                                                           | string       |
            | page area               | privada                                                                                      | string       |
            | page intent             | informacion                                                                                  | string       |
            | channel                 | online                                                                                       | string       |
            | page instance ID        | de                                                                                           | string       |
            | page info version       | appVersion                                                                                   | regexp named |
            | page segment            | personas                                                                                     | string       |
            | sysEnv                  | app                                                                                          | string       |
            | business unit           | BBVA Mexico                                                                                  | string       |
            | site app name           | App BBVA Mexico                                                                              | string       |
            | project name            | Glomo                                                                                        | string       |
            | device mobile           | si                                                                                           | string       |
            | user userState          | logado                                                                                       | string       |
            | user segment global     | 003001                                                                                       | string       |
            | profile ID              | profileID                                                                                    | regexp named |
            | user gender             | gender                                                                                       | regexp named |
            | user age                | age                                                                                          | regexp named |
            | internal campaign       |                                                                                              | empty array  |
            | optimization attributes |                                                                                              | empty array  |

    @ANA_EVENT_FTSP008
    @analytics
    @ios @android @web
    @MX @backend(artichoke) @vbank
    @web-done
    Scenario: Analytics - access to CAT help modal - Advanced Footprint
        Given a user with the following criteria
            | criteria                       |
            | campaigns offers id equal 0744 |
        And the user accesses to switch to instalments from a fundable movement
        When the user accesses to "CAT" help modal
        Then the device contains the following variables
            | item                    | value                                                                                 | type         |
            | analytics               | analytics/glomo_base                                                                  | json schema  |
            | version DL              | 20250414_5.0                                                                          | string       |
            | page name               | app:privada:personas:tarjetas:credito:financiamiento de compras:1 detalle:coste anual | string       |
            | level 1                 | tarjetas                                                                              | string       |
            | level 2                 | credito                                                                               | string       |
            | level 3                 | financiamiento de compras                                                             | string       |
            | level 4                 | 1 detalle                                                                             | string       |
            | level 5                 | coste anual                                                                           | string       |
            | language                | ES                                                                                    | string       |
            | page area               | privada                                                                               | string       |
            | page intent             | informacion                                                                           | string       |
            | channel                 | online                                                                                | string       |
            | page instance ID        | de                                                                                    | string       |
            | page info version       | appVersion                                                                            | regexp named |
            | page segment            | personas                                                                              | string       |
            | sysEnv                  | app                                                                                   | string       |
            | business unit           | BBVA Mexico                                                                           | string       |
            | site app name           | App BBVA Mexico                                                                       | string       |
            | project name            | Glomo                                                                                 | string       |
            | device mobile           | si                                                                                    | string       |
            | user userState          | logado                                                                                | string       |
            | user segment global     | 003001                                                                                | string       |
            | profile ID              | profileID                                                                             | regexp named |
            | user gender             | gender                                                                                | regexp named |
            | user age                | age                                                                                   | regexp named |
            | internal campaign       |                                                                                       | empty array  |
            | optimization attributes |                                                                                       | empty array  |

    @ANA_EVENT_FTSP009
    @analytics
    @ios @android @web
    @MX @backend(artichoke) @vbank
    @web-done
    Scenario: Analytics - error current balance - Advanced Footprint
        Given a user with the following criteria
            | criteria                           |
            | campaigns offers id equal 0744     |
            | always 500 error final installment |
        And the user accesses the product detail of a card that "return balance error" service
        And the user attempts to access the installments simulation from a fundable movement
        When the user attempts to apply the financing offer
        Then the device contains the following variables
            | item                    | value                                                                                | type         |
            | analytics               | analytics/glomo_base                                                                 | json schema  |
            | version DL              | 20250414_5.0                                                                         | string       |
            | page name               | app:privada:personas:tarjetas:credito:financiamiento de compras:sin saldo revolvente | string       |
            | level 1                 | tarjetas                                                                             | string       |
            | level 2                 | credito                                                                              | string       |
            | level 3                 | financiamiento de compras                                                            | string       |
            | level 4                 | sin saldo revolvente                                                                 | string       |
            | error page              | sin saldo revolvente                                                                 | string       |
            | language                | ES                                                                                   | string       |
            | page area               | privada                                                                              | string       |
            | page intent             | informacion                                                                          | string       |
            | channel                 | online                                                                               | string       |
            | page instance ID        | de                                                                                   | string       |
            | page info version       | appVersion                                                                           | regexp named |
            | page segment            | personas                                                                             | string       |
            | sysEnv                  | app                                                                                  | string       |
            | business unit           | BBVA Mexico                                                                          | string       |
            | site app name           | App BBVA Mexico                                                                      | string       |
            | project name            | Glomo                                                                                | string       |
            | device mobile           | si                                                                                   | string       |
            | user userState          | logado                                                                               | string       |
            | user segment global     | 003001                                                                               | string       |
            | profile ID              | profileID                                                                            | regexp named |
            | user gender             | gender                                                                               | regexp named |
            | user age                | age                                                                                  | regexp named |
            | internal campaign       |                                                                                      | empty array  |
            | optimization attributes |                                                                                      | empty array  |

    @ANA_EVENT_FTSP010
    @analytics
    @ios @android @web
    @MX @backend(artichoke) @vbank
    @web-done
    Scenario: Analytics - error promotion not applicable - Advanced Footprint
        Given a user with the following criteria
            | criteria                 |
            | promotion not applicable |
        And the user accesses to movement detail from a "card with points" within Product detail
        When the user attempts to finance considerations
        Then the device contains the following variables
            | item                    | value                                                                               | type         |
            | analytics               | analytics/glomo_base                                                                | json schema  |
            | version DL              | 20250414_5.0                                                                        | string       |
            | page name               | app:privada:personas:tarjetas:credito:financiamiento de compras:promocion no aplica | string       |
            | level 1                 | tarjetas                                                                            | string       |
            | level 2                 | credito                                                                             | string       |
            | level 3                 | financiamiento de compras                                                           | string       |
            | level 4                 | promocion no aplica                                                                 | string       |
            | error page              | promocion no aplica                                                                 | string       |
            | language                | ES                                                                                  | string       |
            | page area               | privada                                                                             | string       |
            | page intent             | informacion                                                                         | string       |
            | channel                 | online                                                                              | string       |
            | page instance ID        | de                                                                                  | string       |
            | page info version       | appVersion                                                                          | regexp named |
            | page segment            | personas                                                                            | string       |
            | sysEnv                  | app                                                                                 | string       |
            | business unit           | BBVA Mexico                                                                         | string       |
            | site app name           | App BBVA Mexico                                                                     | string       |
            | project name            | Glomo                                                                               | string       |
            | device mobile           | si                                                                                  | string       |
            | user userState          | logado                                                                              | string       |
            | user segment global     | 003001                                                                              | string       |
            | profile ID              | profileID                                                                           | regexp named |
            | user gender             | gender                                                                              | regexp named |
            | user age                | age                                                                                 | regexp named |
            | internal campaign       |                                                                                     | empty array  |
            | optimization attributes |                                                                                     | empty array  |

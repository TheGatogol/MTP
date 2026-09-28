@financeTransactionMultipurchaseAnalytics

Feature: Finance Transaction Multipurchase Analytics
    @ANA_EVENT_FTMP001
    @analytics
    @ios @android @web @web-done
    @MX @artichoke @vbank
    Scenario: Analytics - App On Click Start
        Given a user with the following criteria
            | criteria                          |
            | Finance Transaction Multipurchase |
            | First time access                 |
        And the user accesses to the "multipurchase active" "credit" card product detail
        And the analytics interceptor service is initiated
        When the user accesses to finance transaction multipurchase
        Then the analytics events contains the following variables
            | item                     | value                                         | type         | event              |
            | analytics                | analytics/glomo_base                          | json schema  | App On Click Start |
            | version DL               | 20250414_5.0                                  | string       | App On Click Start |
            | page name                | app:privada:personas:tarjetas:credito:detalle | string       | App On Click Start |
            | level 1                  | tarjetas                                      | string       | App On Click Start |
            | level 2                  | credito                                       | string       | App On Click Start |
            | level 3                  | detalle                                       | string       | App On Click Start |
            | language                 | ES                                            | string       | App On Click Start |
            | page area                | privada                                       | string       | App On Click Start |
            | page intent              | informacion                                   | string       | App On Click Start |
            | channel                  | online                                        | string       | App On Click Start |
            | page instance ID         | de                                            | string       | App On Click Start |
            | page info version        | appVersion                                    | regexp named | App On Click Start |
            | page segment             | personas                                      | string       | App On Click Start |
            | sysEnv                   | app                                           | string       | App On Click Start |
            | business unit            | BBVA Mexico                                   | string       | App On Click Start |
            | site app name            | App BBVA Mexico                               | string       | App On Click Start |
            | project name             | Glomo                                         | string       | App On Click Start |
            | device mobile            | si                                            | string       | App On Click Start |
            | user userState           | logado                                        | string       | App On Click Start |
            | profile ID               | profileID                                     | regexp named | App On Click Start |
            | user segment global      | 003001                                        | string       | App On Click Start |
            | user gender              | gender                                        | regexp named | App On Click Start |
            | user age                 | age                                           | regexp named | App On Click Start |
            | global application       | finance transaction multi purchase            | string       | App On Click Start |
            | application name         | diferir compras                               | string       | App On Click Start |
            | application type         | operativa                                     | string       | App On Click Start |
            | application step         | detalle de tarjeta                            | string       | App On Click Start |
            | fulfillment model        | online                                        | string       | App On Click Start |
            | product primary category | tarjetas                                      | string       | App On Click Start |
            | product subtype          | tarjetas credito                              | string       | App On Click Start |
            | product name             | ipn bbva                                      | string       | App On Click Start |
            | internal campaign        |                                               | empty array  | App On Click Start |
            | optimization attributes  |                                               | empty array  | App On Click Start |

    @ANA_EVENT_FTMP002
    @analytics
    @ios @android @web @web-done
    @MX @artichoke @vbank
    Scenario: Analytics - App Page Visit
        Given a user with the following criteria
            | criteria                          |
            | Finance Transaction Multipurchase |
            | First time access                 |
        And the user accesses to the "multipurchase active" "credit" card product detail
        And the analytics interceptor service is initiated
        When the user accesses to finance transaction multipurchase
        Then the analytics events contains the following variables
            | item                     | value                                                                        | type         | event          |
            | analytics                | analytics/glomo_base                                                         | json schema  | App Page Visit |
            | version DL               | 20250414_5.0                                                                 | string       | App Page Visit |
            | page name                | app:privada:personas:tarjetas:credito:diferir compras:1 seleccion de compras | string       | App Page Visit |
            | level 1                  | tarjetas                                                                     | string       | App Page Visit |
            | level 2                  | credito                                                                      | string       | App Page Visit |
            | level 3                  | diferir compras                                                              | string       | App Page Visit |
            | level 4                  | 1 seleccion de compras                                                       | string       | App Page Visit |
            | language                 | ES                                                                           | string       | App Page Visit |
            | page area                | privada                                                                      | string       | App Page Visit |
            | page intent              | transaccion                                                                  | string       | App Page Visit |
            | channel                  | online                                                                       | string       | App Page Visit |
            | page instance ID         | de                                                                           | string       | App Page Visit |
            | page info version        | appVersion                                                                   | regexp named | App Page Visit |
            | page segment             | personas                                                                     | string       | App Page Visit |
            | sysEnv                   | app                                                                          | string       | App Page Visit |
            | business unit            | BBVA Mexico                                                                  | string       | App Page Visit |
            | site app name            | App BBVA Mexico                                                              | string       | App Page Visit |
            | project name             | Glomo                                                                        | string       | App Page Visit |
            | device mobile            | si                                                                           | string       | App Page Visit |
            | user userState           | logado                                                                       | string       | App Page Visit |
            | profile ID               | profileID                                                                    | regexp named | App Page Visit |
            | user segment global      | 003001                                                                       | string       | App Page Visit |
            | user gender              | gender                                                                       | regexp named | App Page Visit |
            | user age                 | age                                                                          | regexp named | App Page Visit |
            | global application       | finance transaction multi purchase                                           | string       | App Page Visit |
            | application name         | diferir compras                                                              | string       | App Page Visit |
            | application type         | operativa                                                                    | string       | App Page Visit |
            | application step         | 1 seleccion de compras                                                       | string       | App Page Visit |
            | fulfillment model        | online                                                                       | string       | App Page Visit |
            | product primary category | tarjetas                                                                     | string       | App Page Visit |
            | product subtype          | tarjetas credito                                                             | string       | App Page Visit |
            | product name             | ipn bbva                                                                     | string       | App Page Visit |
            | internal campaign        |                                                                              | empty array  | App Page Visit |
            | optimization attributes  |                                                                              | empty array  | App Page Visit |

    @ANA_EVENT_FTMP003
    @analytics
    @ios @android @web @web-done
    @MX @artichoke @vbank
    Scenario: Analytics - App Started Select Purchase
        Given a user with the following criteria
            | criteria                          |
            | Finance Transaction Multipurchase |
            | First time access                 |
        And the user accesses to the "multipurchase active" "credit" card product detail
        And the user accesses to finance transaction multipurchase
        And the analytics interceptor service is initiated
        When the user completes finance transaction multipurchase process for "3" months
        Then the analytics events contains the following variables
            | item                     | value                                                                        | type         | event       |
            | analytics                | analytics/glomo_base                                                         | json schema  | App Started |
            | version DL               | 20250414_5.0                                                                 | string       | App Started |
            | page name                | app:privada:personas:tarjetas:credito:diferir compras:1 seleccion de compras | string       | App Started |
            | level 1                  | tarjetas                                                                     | string       | App Started |
            | level 2                  | credito                                                                      | string       | App Started |
            | level 3                  | diferir compras                                                              | string       | App Started |
            | level 4                  | 1 seleccion de compras                                                       | string       | App Started |
            | language                 | ES                                                                           | string       | App Started |
            | page area                | privada                                                                      | string       | App Started |
            | page intent              | transaccion                                                                  | string       | App Started |
            | channel                  | online                                                                       | string       | App Started |
            | page instance ID         | de                                                                           | string       | App Started |
            | page info version        | appVersion                                                                   | regexp named | App Started |
            | page segment             | personas                                                                     | string       | App Started |
            | sysEnv                   | app                                                                          | string       | App Started |
            | business unit            | BBVA Mexico                                                                  | string       | App Started |
            | site app name            | App BBVA Mexico                                                              | string       | App Started |
            | project name             | Glomo                                                                        | string       | App Started |
            | device mobile            | si                                                                           | string       | App Started |
            | user userState           | logado                                                                       | string       | App Started |
            | profile ID               | profileID                                                                    | regexp named | App Started |
            | user segment global      | 003001                                                                       | string       | App Started |
            | user gender              | gender                                                                       | regexp named | App Started |
            | user age                 | age                                                                          | regexp named | App Started |
            | global application       | finance transaction multi purchase                                           | string       | App Started |
            | application name         | diferir compras                                                              | string       | App Started |
            | application type         | operativa                                                                    | string       | App Started |
            | application step         | seleccionar compra                                                           | string       | App Started |
            | fulfillment model        | online                                                                       | string       | App Started |
            | product primary category | tarjetas                                                                     | string       | App Started |
            | product subtype          | tarjetas credito                                                             | string       | App Started |
            | product name             | ipn bbva                                                                     | string       | App Started |
            | internal campaign        |                                                                              | empty array  | App Started |
            | optimization attributes  |                                                                              | empty array  | App Started |

    @ANA_EVENT_FTMP004
    @analytics
    @ios @android @web @web-done
    @MX @artichoke @vbank
    Scenario: Analytics - App Started Tooltips
        Given a user with the following criteria
            | criteria                          |
            | Finance Transaction Multipurchase |
            | First time access                 |
        And the user accesses to the "multipurchase active" "credit" card product detail
        And the user accesses to finance transaction multipurchase
        And the analytics interceptor service is initiated
        When the user opens "participate purchases" tooltip
        Then the analytics events contains the following variables
            | item                     | value                                                                        | type         | event       |
            | analytics                | analytics/glomo_base                                                         | json schema  | App Started |
            | version DL               | 20250414_5.0                                                                 | string       | App Started |
            | page name                | app:privada:personas:tarjetas:credito:diferir compras:1 seleccion de compras | string       | App Started |
            | level 1                  | tarjetas                                                                     | string       | App Started |
            | level 2                  | credito                                                                      | string       | App Started |
            | level 3                  | diferir compras                                                              | string       | App Started |
            | level 4                  | 1 seleccion de compras                                                       | string       | App Started |
            | language                 | ES                                                                           | string       | App Started |
            | page area                | privada                                                                      | string       | App Started |
            | page intent              | transaccion                                                                  | string       | App Started |
            | channel                  | online                                                                       | string       | App Started |
            | page instance ID         | de                                                                           | string       | App Started |
            | page info version        | appVersion                                                                   | regexp named | App Started |
            | page segment             | personas                                                                     | string       | App Started |
            | sysEnv                   | app                                                                          | string       | App Started |
            | business unit            | BBVA Mexico                                                                  | string       | App Started |
            | site app name            | App BBVA Mexico                                                              | string       | App Started |
            | project name             | Glomo                                                                        | string       | App Started |
            | device mobile            | si                                                                           | string       | App Started |
            | user userState           | logado                                                                       | string       | App Started |
            | profile ID               | profileID                                                                    | regexp named | App Started |
            | user segment global      | 003001                                                                       | string       | App Started |
            | user gender              | gender                                                                       | regexp named | App Started |
            | user age                 | age                                                                          | regexp named | App Started |
            | global application       | finance transaction multi purchase                                           | string       | App Started |
            | application name         | diferir compras                                                              | string       | App Started |
            | application type         | operativa                                                                    | string       | App Started |
            | application step         | tooltips                                                                     | string       | App Started |
            | fulfillment model        | online                                                                       | string       | App Started |
            | product primary category | tarjetas                                                                     | string       | App Started |
            | product subtype          | tarjetas credito                                                             | string       | App Started |
            | product name             | ipn bbva                                                                     | string       | App Started |
            | internal campaign        |                                                                              | empty array  | App Started |
            | optimization attributes  |                                                                              | empty array  | App Started |

    @ANA_EVENT_FTMP005
    @analytics
    @ios @android @web @web-done
    @MX @artichoke @vbank
    Scenario: Analytics - App Started Show More Purchases
        Given a user with the following criteria
            | criteria                          |
            | Finance Transaction Multipurchase |
            | more than 7 transactions          |
        And the user accesses to the "multipurchase more than 7 transactions" "credit" card product detail
        And the user accesses to finance transaction multipurchase
        And the analytics interceptor service is initiated
        When the user shows more transactions
        Then the analytics events contains the following variables
            | item                     | value                                                                        | type         | event       |
            | analytics                | analytics/glomo_base                                                         | json schema  | App Started |
            | version DL               | 20250414_5.0                                                                 | string       | App Started |
            | page name                | app:privada:personas:tarjetas:credito:diferir compras:1 seleccion de compras | string       | App Started |
            | level 1                  | tarjetas                                                                     | string       | App Started |
            | level 2                  | credito                                                                      | string       | App Started |
            | level 3                  | diferir compras                                                              | string       | App Started |
            | level 4                  | 1 seleccion de compras                                                       | string       | App Started |
            | language                 | ES                                                                           | string       | App Started |
            | page area                | privada                                                                      | string       | App Started |
            | page intent              | transaccion                                                                  | string       | App Started |
            | channel                  | online                                                                       | string       | App Started |
            | page instance ID         | de                                                                           | string       | App Started |
            | page info version        | appVersion                                                                   | regexp named | App Started |
            | page segment             | personas                                                                     | string       | App Started |
            | sysEnv                   | app                                                                          | string       | App Started |
            | business unit            | BBVA Mexico                                                                  | string       | App Started |
            | site app name            | App BBVA Mexico                                                              | string       | App Started |
            | project name             | Glomo                                                                        | string       | App Started |
            | device mobile            | si                                                                           | string       | App Started |
            | user userState           | logado                                                                       | string       | App Started |
            | profile ID               | profileID                                                                    | regexp named | App Started |
            | user segment global      | 003001                                                                       | string       | App Started |
            | user gender              | gender                                                                       | regexp named | App Started |
            | user age                 | age                                                                          | regexp named | App Started |
            | global application       | finance transaction multi purchase                                           | string       | App Started |
            | application name         | diferir compras                                                              | string       | App Started |
            | application type         | operativa                                                                    | string       | App Started |
            | application step         | mostrar mas                                                                  | string       | App Started |
            | fulfillment model        | online                                                                       | string       | App Started |
            | product primary category | tarjetas                                                                     | string       | App Started |
            | product subtype          | tarjetas credito                                                             | string       | App Started |
            | product name             | ipn bbva                                                                     | string       | App Started |
            | internal campaign        |                                                                              | empty array  | App Started |
            | optimization attributes  |                                                                              | empty array  | App Started |

    @ANA_EVENT_FTMP006
    @analytics
    @ios @android @web @web-done
    @MX @artichoke @vbank
    Scenario: Analytics - App Step 2
        Given a user with the following criteria
            | criteria                          |
            | Finance Transaction Multipurchase |
            | First time access                 |
        And the user accesses to the "multipurchase active" "credit" card product detail
        And the user accesses to finance transaction multipurchase
        And the analytics interceptor service is initiated
        When the user completes selection of "2" transaction multipurchase
        Then the analytics events contains the following variables
            | item                     | value                                                                   | type         | event      |
            | analytics                | analytics/glomo_base                                                    | json schema  | App Step 2 |
            | version DL               | 20250414_5.0                                                            | string       | App Step 2 |
            | page name                | app:privada:personas:tarjetas:credito:diferir compras:2 meses a diferir | string       | App Step 2 |
            | level 1                  | tarjetas                                                                | string       | App Step 2 |
            | level 2                  | credito                                                                 | string       | App Step 2 |
            | level 3                  | diferir compras                                                         | string       | App Step 2 |
            | level 4                  | 2 meses a diferir                                                       | string       | App Step 2 |
            | language                 | ES                                                                      | string       | App Step 2 |
            | page area                | privada                                                                 | string       | App Step 2 |
            | page intent              | transaccion                                                             | string       | App Step 2 |
            | channel                  | online                                                                  | string       | App Step 2 |
            | page instance ID         | de                                                                      | string       | App Step 2 |
            | page info version        | appVersion                                                              | regexp named | App Step 2 |
            | page segment             | personas                                                                | string       | App Step 2 |
            | sysEnv                   | app                                                                     | string       | App Step 2 |
            | business unit            | BBVA Mexico                                                             | string       | App Step 2 |
            | site app name            | App BBVA Mexico                                                         | string       | App Step 2 |
            | project name             | Glomo                                                                   | string       | App Step 2 |
            | device mobile            | si                                                                      | string       | App Step 2 |
            | user userState           | logado                                                                  | string       | App Step 2 |
            | profile ID               | profileID                                                               | regexp named | App Step 2 |
            | user segment global      | 003001                                                                  | string       | App Step 2 |
            | user gender              | gender                                                                  | regexp named | App Step 2 |
            | user age                 | age                                                                     | regexp named | App Step 2 |
            | global application       | finance transaction multi purchase                                      | string       | App Step 2 |
            | application name         | diferir compras                                                         | string       | App Step 2 |
            | application type         | operativa                                                               | string       | App Step 2 |
            | application step         | 2 meses a diferir                                                       | string       | App Step 2 |
            | fulfillment model        | online                                                                  | string       | App Step 2 |
            | custom fields            | numero de compras a diferir:2,monto total a diferir:3811                | string       | App Step 2 |
            | product primary category | tarjetas                                                                | string       | App Step 2 |
            | product subtype          | tarjetas credito                                                        | string       | App Step 2 |
            | product name             | ipn bbva                                                                | string       | App Step 2 |
            | internal campaign        |                                                                         | empty array  | App Step 2 |
            | optimization attributes  |                                                                         | empty array  | App Step 2 |

    @ANA_EVENT_FTMP007
    @analytics
    @ios @android @web @web-done
    @MX @artichoke @vbank
    Scenario: Analytics - App Step 3
        Given a user with the following criteria
            | criteria                          |
            | Finance Transaction Multipurchase |
            | First time access                 |
        And the user accesses to the "multipurchase active" "credit" card product detail
        And the user accesses to finance transaction multipurchase
        And the analytics interceptor service is initiated
        When the user selects "2" purchases and "3" months
        Then the analytics events contains the following variables
            | item                       | value                                                                          | type         | event      |
            | analytics                  | analytics/glomo_base                                                           | json schema  | App Step 3 |
            | version DL                 | 20250414_5.0                                                                   | string       | App Step 3 |
            | page name                  | app:privada:personas:tarjetas:credito:diferir compras:3 terminos y condiciones | string       | App Step 3 |
            | level 1                    | tarjetas                                                                       | string       | App Step 3 |
            | level 2                    | credito                                                                        | string       | App Step 3 |
            | level 3                    | diferir compras                                                                | string       | App Step 3 |
            | level 4                    | 3 terminos y condiciones                                                       | string       | App Step 3 |
            | language                   | ES                                                                             | string       | App Step 3 |
            | page area                  | privada                                                                        | string       | App Step 3 |
            | page intent                | transaccion                                                                    | string       | App Step 3 |
            | channel                    | online                                                                         | string       | App Step 3 |
            | page instance ID           | de                                                                             | string       | App Step 3 |
            | page info version          | appVersion                                                                     | regexp named | App Step 3 |
            | page segment               | personas                                                                       | string       | App Step 3 |
            | sysEnv                     | app                                                                            | string       | App Step 3 |
            | business unit              | BBVA Mexico                                                                    | string       | App Step 3 |
            | site app name              | App BBVA Mexico                                                                | string       | App Step 3 |
            | project name               | Glomo                                                                          | string       | App Step 3 |
            | device mobile              | si                                                                             | string       | App Step 3 |
            | user userState             | logado                                                                         | string       | App Step 3 |
            | profile ID                 | profileID                                                                      | regexp named | App Step 3 |
            | user segment global        | 003001                                                                         | string       | App Step 3 |
            | user gender                | gender                                                                         | regexp named | App Step 3 |
            | user age                   | age                                                                            | regexp named | App Step 3 |
            | global application         | finance transaction multi purchase                                             | string       | App Step 3 |
            | application name           | diferir compras                                                                | string       | App Step 3 |
            | application type           | operativa                                                                      | string       | App Step 3 |
            | application step           | 3 terminos y condiciones                                                       | string       | App Step 3 |
            | fulfillment model          | online                                                                         | string       | App Step 3 |
            | custom fields              | numero de compras a diferir:2,monto total a diferir:3811                       | string       | App Step 3 |
            | product primary category   | tarjetas                                                                       | string       | App Step 3 |
            | product subtype            | tarjetas credito                                                               | string       | App Step 3 |
            | product name               | ipn bbva                                                                       | string       | App Step 3 |
            | product amount             | 4056.14                                                                        | string       | App Step 3 |
            | product currency           | MXN                                                                            | string       | App Step 3 |
            | product payment amount     | 1271                                                                           | string       | App Step 3 |
            | product number of payments | 3                                                                              | string       | App Step 3 |
            | product payment type       | mensual                                                                        | string       | App Step 3 |
            | product service charge     | 243.14                                                                         | string       | App Step 3 |
            | product interest rate      | 0                                                                              | string       | App Step 3 |
            | product payment date       | 13092025                                                                       | string       | App Step 3 |
            | internal campaign          |                                                                                | empty array  | App Step 3 |
            | optimization attributes    |                                                                                | empty array  | App Step 3 |

    @ANA_EVENT_FTMP008
    @analytics
    @ios @android @web @web-done
    @MX @artichoke @vbank
    Scenario: Analytics - App Step 4
        Given a user with the following criteria
            | criteria                          |
            | Finance Transaction Multipurchase |
            | First time access                 |
        And the user accesses to the "multipurchase active" "credit" card product detail
        And the user accesses to finance transaction multipurchase
        And the user completes selection of "2" transaction multipurchase
        And the analytics interceptor service is initiated
        When the user finishes finance transaction multipurchase process for "3" months
        Then the analytics events contains the following variables
            | item                       | value                                                                | type         | event      |
            | analytics                  | analytics/glomo_base                                                 | json schema  | App Step 4 |
            | version DL                 | 20250414_5.0                                                         | string       | App Step 4 |
            | page name                  | app:privada:personas:tarjetas:credito:diferir compras:4 confirmacion | string       | App Step 4 |
            | level 1                    | tarjetas                                                             | string       | App Step 4 |
            | level 2                    | credito                                                              | string       | App Step 4 |
            | level 3                    | diferir compras                                                      | string       | App Step 4 |
            | level 4                    | 4 confirmacion                                                       | string       | App Step 4 |
            | language                   | ES                                                                   | string       | App Step 4 |
            | page area                  | privada                                                              | string       | App Step 4 |
            | page intent                | transaccion                                                          | string       | App Step 4 |
            | channel                    | online                                                               | string       | App Step 4 |
            | page instance ID           | de                                                                   | string       | App Step 4 |
            | page info version          | appVersion                                                           | regexp named | App Step 4 |
            | page segment               | personas                                                             | string       | App Step 4 |
            | sysEnv                     | app                                                                  | string       | App Step 4 |
            | business unit              | BBVA Mexico                                                          | string       | App Step 4 |
            | site app name              | App BBVA Mexico                                                      | string       | App Step 4 |
            | project name               | Glomo                                                                | string       | App Step 4 |
            | device mobile              | si                                                                   | string       | App Step 4 |
            | user userState             | logado                                                               | string       | App Step 4 |
            | profile ID                 | profileID                                                            | regexp named | App Step 4 |
            | user segment global        | 003001                                                               | string       | App Step 4 |
            | user gender                | gender                                                               | regexp named | App Step 4 |
            | user age                   | age                                                                  | regexp named | App Step 4 |
            | global application         | finance transaction multi purchase                                   | string       | App Step 4 |
            | application name           | diferir compras                                                      | string       | App Step 4 |
            | application type           | operativa                                                            | string       | App Step 4 |
            | application step           | 4 confirmacion                                                       | string       | App Step 4 |
            | fulfillment model          | online                                                               | string       | App Step 4 |
            | custom fields              | numero de compras a diferir:2,monto total a diferir:3811             | string       | App Step 4 |
            | product primary category   | tarjetas                                                             | string       | App Step 4 |
            | product subtype            | tarjetas credito                                                     | string       | App Step 4 |
            | product name               | ipn bbva                                                             | string       | App Step 4 |
            | product amount             | 4056.14                                                              | string       | App Step 4 |
            | product currency           | MXN                                                                  | string       | App Step 4 |
            | product payment amount     | 1271                                                                 | string       | App Step 4 |
            | product number of payments | 3                                                                    | string       | App Step 4 |
            | product payment type       | mensual                                                              | string       | App Step 4 |
            | product service charge     | 243.14                                                               | string       | App Step 4 |
            | product interest rate      | 0                                                                    | string       | App Step 4 |
            | product payment date       | 13092025                                                             | string       | App Step 4 |
            | internal campaign          |                                                                      | empty array  | App Step 4 |
            | optimization attributes    |                                                                      | empty array  | App Step 4 |

    @ANA_EVENT_FTMP009
    @analytics
    @ios @android @web @web-done
    @MX @artichoke @vbank
    Scenario: Analytics - Page View Otp
        Given a user with the following criteria
            | criteria                          |
            | Finance Transaction Multipurchase |
            | First time access                 |
        And the user accesses to the "multipurchase active" "credit" card product detail
        And the user accesses to finance transaction multipurchase
        And the analytics interceptor service is initiated
        When the user completes finance transaction simulation
        Then the analytics events contains the following variables
            | item                    | value                                                     | type         | event      |
            | analytics               | analytics/glomo_base                                      | json schema  | Page View  |
            | version DL              | 20250414_5.0                                              | string       | Page View  |
            | page name               | app:privada:personas:tarjetas:credito:diferir compras:otp | string       | Page View  |
            | level 1                 | tarjetas                                                  | string       | Page View  |
            | level 2                 | credito                                                   | string       | Page View  |
            | level 3                 | diferir compras                                           | string       | Page View  |
            | level 4                 | otp                                                       | string       | Page View  |
            | language                | ES                                                        | string       | Page View  |
            | page area               | privada                                                   | string       | Page View  |
            | page intent             | transaccion                                               | string       | Page View  |
            | channel                 | online                                                    | string       | Page View  |
            | page instance ID        | de                                                        | string       | Page View  |
            | page info version       | appVersion                                                | regexp named | Page View  |
            | page segment            | personas                                                  | string       | Page View  |
            | sysEnv                  | app                                                       | string       | Page View  |
            | business unit           | BBVA Mexico                                               | string       | Page View  |
            | site app name           | App BBVA Mexico                                           | string       | Page View  |
            | project name            | Glomo                                                     | string       | Page View  |
            | device mobile           | si                                                        | string       | Page View  |
            | user userState          | logado                                                    | string       | Page View  |
            | profile ID              | profileID                                                 | regexp named | Page View  |
            | user segment global     | 003001                                                    | string       | Page View  |
            | user gender             | gender                                                    | regexp named | Page View  |
            | user age                | age                                                       | regexp named | Page View  |
            | custom fields           | firma:token                                               | string       | Page View  |
            | internal campaign       |                                                           | empty array  | Page View  |
            | optimization attributes |                                                           | empty array  | Page View  |

    @ANA_EVENT_FTMP010
    @analytics
    @ios @android @web @web-done
    @MX @artichoke @vbank
    Scenario: Analytics - App Completed
        Given a user with the following criteria
            | criteria                          |
            | Finance Transaction Multipurchase |
            | First time access                 |
        And the user accesses to the "multipurchase active" "credit" card product detail
        And the user accesses to finance transaction multipurchase
        And the user completes finance transaction multipurchase process for "9" months
        And the analytics interceptor service is initiated
        When the user confirms finance multipurchase simulation
        Then the analytics events contains the following variables
            | item                         | value                                                                | type         | event         |
            | analytics                    | analytics/glomo_base                                                 | json schema  | App Completed |
            | version DL                   | 20250414_5.0                                                         | string       | App Completed |
            | page name                    | app:privada:personas:tarjetas:credito:diferir compras:pagina exitosa | string       | App Completed |
            | level 1                      | tarjetas                                                             | string       | App Completed |
            | level 2                      | credito                                                              | string       | App Completed |
            | level 3                      | diferir compras                                                      | string       | App Completed |
            | level 4                      | pagina exitosa                                                       | string       | App Completed |
            | language                     | ES                                                                   | string       | App Completed |
            | page area                    | privada                                                              | string       | App Completed |
            | page intent                  | transaccion                                                          | string       | App Completed |
            | channel                      | online                                                               | string       | App Completed |
            | page instance ID             | de                                                                   | string       | App Completed |
            | page info version            | appVersion                                                           | regexp named | App Completed |
            | page segment                 | personas                                                             | string       | App Completed |
            | sysEnv                       | app                                                                  | string       | App Completed |
            | business unit                | BBVA Mexico                                                          | string       | App Completed |
            | site app name                | App BBVA Mexico                                                      | string       | App Completed |
            | project name                 | Glomo                                                                | string       | App Completed |
            | device mobile                | si                                                                   | string       | App Completed |
            | user userState               | logado                                                               | string       | App Completed |
            | profile ID                   | profileID                                                            | regexp named | App Completed |
            | user segment global          | 003001                                                               | string       | App Completed |
            | user gender                  | gender                                                               | regexp named | App Completed |
            | user age                     | age                                                                  | regexp named | App Completed |
            | global application           | finance transaction multi purchase                                   | string       | App Completed |
            | application name             | diferir compras                                                      | string       | App Completed |
            | application type             | operativa                                                            | string       | App Completed |
            | application step             | pagina exitosa                                                       | string       | App Completed |
            | fulfillment model            | online                                                               | string       | App Completed |
            | custom fields                | numero de compras a diferir:3,monto total a diferir:6340,firma:token | string       | App Completed |
            | application state            | finalizado                                                           | string       | App Completed |
            | application operation number | 6448687447                                                           | string       | App Completed |
            | product primary category     | tarjetas                                                             | string       | App Completed |
            | product subtype              | tarjetas credito                                                     | string       | App Completed |
            | product name                 | infinite bbva                                                        | string       | App Completed |
            | product amount               | 2461.68                                                              | string       | App Completed |
            | product currency             | MXN                                                                  | string       | App Completed |
            | product payment amount       | 273.52                                                               | string       | App Completed |
            | product number of payments   | 9                                                                    | string       | App Completed |
            | product payment type         | mensual                                                              | string       | App Completed |
            | product service charge       |                                                                      | string       | App Completed |
            | product interest rate        | 1.84                                                                 | string       | App Completed |
            | product payment date         | 19082025                                                             | string       | App Completed |
            | product state                | finalizado                                                           | string       | App Completed |
            | internal campaign            |                                                                      | empty array  | App Completed |
            | optimization attributes      |                                                                      | empty array  | App Completed |

    @ANA_EVENT_FTMP011
    @analytics
    @ios @android @web @web-done
    @MX @artichoke @vbank
    Scenario Outline: Analytics - Page View - "<slider>" Slider
        Given a user with the following criteria
            | criteria                          |
            | Finance Transaction Multipurchase |
            | First time access                 |
        And the user accesses to the "multipurchase active" "credit" card product detail
        And the analytics interceptor service is initiated
        When the user accesses to finance transaction multipurchase and moves to slide "<slider_number>"
        Then the analytics events contains the following variables
            | item                    | value                                                                | type             | event     | event number   |
            | analytics               | analytics/glomo_base                                                 | json schema      | Page View | <event_number> |
            | version DL              | 20250414_5.0                                                         | string           | Page View | <event_number> |
            | page name               | app:privada:personas:tarjetas:credito:diferir compras:<slider_level> | string           | Page View | <event_number> |
            | level 1                 | tarjetas                                                             | string           | Page View | <event_number> |
            | level 2                 | credito                                                              | string           | Page View | <event_number> |
            | level 3                 | diferir compras                                                      | string           | Page View | <event_number> |
            | level 4                 | <slider_level>                                                       | string           | Page View | <event_number> |
            | language                | ES                                                                   | string           | Page View | <event_number> |
            | page area               | privada                                                              | string           | Page View | <event_number> |
            | page intent             | transaccion                                                          | string           | Page View | <event_number> |
            | channel                 | online                                                               | string           | Page View | <event_number> |
            | page instance ID        | de                                                                   | string           | Page View | <event_number> |
            | page info version       | appVersion                                                           | regexp named     | Page View | <event_number> |
            | page segment            | personas                                                             | string           | Page View | <event_number> |
            | sysEnv                  | app                                                                  | string           | Page View | <event_number> |
            | business unit           | BBVA Mexico                                                          | string           | Page View | <event_number> |
            | site app name           | App BBVA Mexico                                                      | string           | Page View | <event_number> |
            | project name            | Glomo                                                                | string           | Page View | <event_number> |
            | device mobile           | si                                                                   | string           | Page View | <event_number> |
            | user userState          | logado                                                               | string           | Page View | <event_number> |
            | profile ID              | profileID                                                            | regexp named     | Page View | <event_number> |
            | user segment global     | 003001                                                               | string           | Page View | <event_number> |
            | user gender             | gender                                                               | regexp named     | Page View | <event_number> |
            | user age                | age                                                                  | regexp named     | Page View | <event_number> |
            | internal campaign       |                                                                      | empty array      | Page View | <event_number> |
            | optimization attributes |                                                                      | empty array      | Page View | <event_number> |
            | application             |                                                                      | empty str object | Page View | <event_number> |
            | products attributes     |                                                                      | empty array      | Page View | <event_number> |

        Examples:
            | slider | slider_number | slider_level                          | event_number |
            | First  | 1             | arma el plan a tu medida              | 1            |
            | Second | 2             | diferir tus compras esta en tus manos | 2            |
            | Third  | 3             | paga a tu manera y a tu ritmo         | 3            |

    @ANA_EVENT_FTMP012
    @analytics
    @ios @android @web @web-done
    @MX @artichoke @vbank
    Scenario Outline: Analytics - Page View - <info_modal>
        Given a user with the following criteria
            | criteria                          |
            | Finance Transaction Multipurchase |
            | <info_modal>              |
        And the user accesses to the "<info_modal>" "credit" card product detail
        And the analytics interceptor service is initiated
        When the user attempts to access to finance transaction multipurchase for the first time
        Then the analytics events contains the following variables
            | item                    | value                                                                | type         | event     |
            | analytics               | analytics/glomo_base                                                 | json schema  | Page View |
            | version DL              | 20250414_5.0                                                         | string       | Page View |
            | page name               | app:privada:personas:tarjetas:credito:diferir compras:<dynamic_data> | string       | Page View |
            | level 1                 | tarjetas                                                             | string       | Page View |
            | level 2                 | credito                                                              | string       | Page View |
            | level 3                 | diferir compras                                                      | string       | Page View |
            | level 4                 | <dynamic_data>                                                       | string       | Page View |
            | language                | ES                                                                   | string       | Page View |
            | page area               | privada                                                              | string       | Page View |
            | page intent             | transaccion                                                          | string       | Page View |
            | channel                 | online                                                               | string       | Page View |
            | page instance ID        | de                                                                   | string       | Page View |
            | page info version       | appVersion                                                           | regexp named | Page View |
            | page segment            | personas                                                             | string       | Page View |
            | sysEnv                  | app                                                                  | string       | Page View |
            | business unit           | BBVA Mexico                                                          | string       | Page View |
            | site app name           | App BBVA Mexico                                                      | string       | Page View |
            | project name            | Glomo                                                                | string       | Page View |
            | device mobile           | si                                                                   | string       | Page View |
            | user userState          | logado                                                               | string       | Page View |
            | profile ID              | profileID                                                            | regexp named | Page View |
            | user segment global     | 003001                                                               | string       | Page View |
            | user gender             | gender                                                               | regexp named | Page View |
            | user age                | age                                                                  | regexp named | Page View |
            | custom fields           | fin diferir compras:<dynamic_custom_fields>                          | string       | Page View |
            | internal campaign       |                                                                      | empty array  | Page View |
            | optimization attributes |                                                                      | empty array  | Page View |
            | products attributes     |                                                                      | empty array  | Page View |

        Examples:
            | info_modal                  | dynamic_data                     | dynamic_custom_fields                                                       |
            | without transactions        | no tienes compras para financiar | no tienes compras para financiar                                            |
            | not enought debt to finance | no tienes saldo para diferir     | no tienes saldo para diferir                                                |
            | active finance promotion    | revisa tus promociones           | revisa tus promociones                                                      |
            | surprassed credit limit     | plan no disponible               | plan no disponible superaste el limite de tu credito                        |
            | overdue financing payments  | plan no disponible               | plan no disponible tienes uno o mas pagos vencidos                          |
            | personal finance plan       | plan no disponible               | plan no disponible estas en un plan de finanzas personales                  |
            | insufficient balance        | plan no disponible               | plan no disponible el saldo disponible actual de tu tarjeta es menor a 1000 |

    @ANA_EVENT_FTMP013
    @analytics
    @ios @android @web @web-done
    @MX @artichoke @vbank
    Scenario: Analytics - Error - Unavailable Information
        Given a user with the following criteria
            | criteria                          |
            | Finance Transaction Multipurchase |
            | error 500 access multipurchase    |
        And the user accesses to the "multipurchase active" "credit" card product detail
        And the user attempts to access to finance transaction multipurchase for the first time
        And the analytics interceptor service is initiated
        When the user retries "3" more times
        Then the analytics events contains the following variables
            | item                    | value                                                                   | type             | event     |
            | analytics               | analytics/glomo_base                                                    | json schema      | Page View |
            | version DL              | 20250414_5.0                                                            | string           | Page View |
            | page name               | app:privada:personas:tarjetas:credito:diferir compras:error de servicio | string           | Page View |
            | level 1                 | tarjetas                                                                | string           | Page View |
            | level 2                 | credito                                                                 | string           | Page View |
            | level 3                 | diferir compras                                                         | string           | Page View |
            | level 4                 | error de servicio                                                       | string           | Page View |
            | error page              | error de servicio                                                       | string           | Page View |
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
            | profile ID              | profileID                                                               | regexp named     | Page View |
            | user segment global     | 003001                                                                  | string           | Page View |
            | user gender             | gender                                                                  | regexp named     | Page View |
            | user age                | age                                                                     | regexp named     | Page View |
            | internal campaign       |                                                                         | empty array      | Page View |
            | optimization attributes |                                                                         | empty array      | Page View |
            | application             |                                                                         | empty str object | Page View |
            | products attributes     |                                                                         | empty array      | Page View |

    @ANA_EVENT_FTMP014
    @analytics
    @ios @android @web @web-done
    @MX @artichoke @vbank
    Scenario: Analytics - Error - Operation not performed
        Given a user with the following criteria
            | criteria                          |
            | Finance Transaction Multipurchase |
            | Error Financing Multipurchase     |
        And the user accesses to the "error financing multipurchase" "credit" card product detail
        And the user accesses to finance transaction multipurchase
        And the user completes finance transaction simulation
        And the analytics interceptor service is initiated
        When the user retries "3" more times
        Then the analytics events contains the following variables
            | item                    | value                                                                        | type             | event     |
            | analytics               | analytics/glomo_base                                                         | json schema      | Page View |
            | version DL              | 20250414_5.0                                                                 | string           | Page View |
            | page name               | app:privada:personas:tarjetas:credito:diferir compras:operacion no realizada | string           | Page View |
            | level 1                 | tarjetas                                                                     | string           | Page View |
            | level 2                 | credito                                                                      | string           | Page View |
            | level 3                 | diferir compras                                                              | string           | Page View |
            | level 4                 | operacion no realizada                                                       | string           | Page View |
            | error page              | operacion no realizada                                                       | string           | Page View |
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

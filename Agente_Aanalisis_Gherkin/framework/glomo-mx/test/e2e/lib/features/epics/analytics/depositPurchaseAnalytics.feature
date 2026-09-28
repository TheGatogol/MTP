@depositPurchaseAnalytics
Feature: Analytics - Deposit Purchase

    @ANA_DDP001
    @analytics
    @MX
    @vbank @backend(test)
    @ios @android @web
    @web-done
    Scenario: Deposit Purchase - App Page Visit
        Given a user with the following criteria
            | criteria                 |
            | deposits purchase coupon |
        And the user accesses to dashboard
        And the analytics interceptor service is initiated
        When the user accesses to purchase deposit "2397"
        Then the analytics events contains the following variables
            | item                     | value                                                            | type         | event          |
            | analytics                | analytics/glomo_base                                             | json schema  | App Page Visit |
            | version DL               | 20250414_5.0                                                     | string       | App Page Visit |
            | page name                | app:privada:personas:inversiones:compra nuevo plazo:1 simulacion | string       | App Page Visit |
            | level 1                  | inversiones                                                      | string       | App Page Visit |
            | level 2                  | compra nuevo plazo                                               | string       | App Page Visit |
            | level 3                  | 1 simulacion                                                     | string       | App Page Visit |
            | language                 | ES                                                               | string       | App Page Visit |
            | page area                | privada                                                          | string       | App Page Visit |
            | page intent              | transaccion                                                      | string       | App Page Visit |
            | channel                  | online                                                           | string       | App Page Visit |
            | page instance ID         | de                                                               | string       | App Page Visit |
            | page info version        | appVersion                                                       | regexp named | App Page Visit |
            | page segment             | personas                                                         | string       | App Page Visit |
            | sysEnv                   | app                                                              | string       | App Page Visit |
            | business unit            | BBVA Mexico                                                      | string       | App Page Visit |
            | site app name            | App BBVA Mexico                                                  | string       | App Page Visit |
            | project name             | DIY E2E Sales                                                    | string       | App Page Visit |
            | device mobile            | si                                                               | string       | App Page Visit |
            | user userState           | logado                                                           | string       | App Page Visit |
            | profile ID               | profileID                                                        | regexp named | App Page Visit |
            | user segment global      | 003001                                                           | string       | App Page Visit |
            | global application       | trade deposits                                                   | string       | App Page Visit |
            | application name         | compra nuevo plazo                                               | string       | App Page Visit |
            | application type         | contratacion                                                     | string       | App Page Visit |
            | application step         | 1 simulacion                                                     | string       | App Page Visit |
            | fulfillment model        | online                                                           | string       | App Page Visit |
            | qualified visits         | true                                                             | string       | App Page Visit |
            | application process      | cliente con codigo                                               | string       | App Page Visit |
            | product primary category | inversiones                                                      | string       | App Page Visit |
            | product name             | plazos                                                           | string       | App Page Visit |

    @ANA_DDP002
    @analytics
    @MX
    @vbank @backend(test)
    @ios @android @web
    @web-done
    Scenario: Deposit Purchase - App Started
        Given a user with the following criteria
            | criteria                 |
            | deposits purchase coupon |
        And the user accesses to purchase deposit "0003IN9302"
        And the analytics interceptor service is initiated
        When the user accesses to screen help gat
        Then the analytics events contains the following variables
            | item                     | value                                                            | type         | event       |
            | analytics                | analytics/glomo_base                                             | json schema  | App Started |
            | version DL               | 20250414_5.0                                                     | string       | App Started |
            | page name                | app:privada:personas:inversiones:compra nuevo plazo:1 simulacion | string       | App Started |
            | level 1                  | inversiones                                                      | string       | App Started |
            | level 2                  | compra nuevo plazo                                               | string       | App Started |
            | level 3                  | 1 simulacion                                                     | string       | App Started |
            | language                 | ES                                                               | string       | App Started |
            | page area                | privada                                                          | string       | App Started |
            | page intent              | transaccion                                                      | string       | App Started |
            | channel                  | online                                                           | string       | App Started |
            | page instance ID         | de                                                               | string       | App Started |
            | page info version        | appVersion                                                       | regexp named | App Started |
            | page segment             | personas                                                         | string       | App Started |
            | sysEnv                   | app                                                              | string       | App Started |
            | business unit            | BBVA Mexico                                                      | string       | App Started |
            | site app name            | App BBVA Mexico                                                  | string       | App Started |
            | project name             | DIY E2E Sales                                                    | string       | App Started |
            | device mobile            | si                                                               | string       | App Started |
            | user userState           | logado                                                           | string       | App Started |
            | profile ID               | profileID                                                        | regexp named | App Started |
            | user segment global      | 003001                                                           | string       | App Started |
            | global application       | trade deposits                                                   | string       | App Started |
            | application name         | compra nuevo plazo                                               | string       | App Started |
            | application type         | contratacion                                                     | string       | App Started |
            | application step         | info gat nominal                                                 | string       | App Started |
            | fulfillment model        | online                                                           | string       | App Started |
            | application process      | cliente con codigo                                               | string       | App Started |
            | product primary category | inversiones                                                      | string       | App Started |
            | product name             | plazos                                                           | string       | App Started |

    @ANA_DDP003
    @analytics
    @MX
    @vbank @backend(test)
    @ios @android @web
    @web-done
    Scenario: Deposit Purchase - App Step 2
        Given a user with the following criteria
            | criteria                 |
            | deposits purchase coupon |
        And the user accesses to purchase deposit "0003IN9302"
        And the analytics interceptor service is initiated
        When the user select simulate continue
        Then the analytics events contains the following variables
            | item                     | value                                                                            | type         | event      |
            | analytics                | analytics/glomo_base                                                             | json schema  | App Step 2 |
            | version DL               | 20250414_5.0                                                                     | string       | App Step 2 |
            | page name                | app:privada:personas:inversiones:compra nuevo plazo:2 instruccion al vencimiento | string       | App Step 2 |
            | level 1                  | inversiones                                                                      | string       | App Step 2 |
            | level 2                  | compra nuevo plazo                                                               | string       | App Step 2 |
            | level 3                  | 2 instruccion al vencimiento                                                     | string       | App Step 2 |
            | language                 | ES                                                                               | string       | App Step 2 |
            | page area                | privada                                                                          | string       | App Step 2 |
            | page intent              | transaccion                                                                      | string       | App Step 2 |
            | channel                  | online                                                                           | string       | App Step 2 |
            | page instance ID         | de                                                                               | string       | App Step 2 |
            | page info version        | appVersion                                                                       | regexp named | App Step 2 |
            | page segment             | personas                                                                         | string       | App Step 2 |
            | sysEnv                   | app                                                                              | string       | App Step 2 |
            | business unit            | BBVA Mexico                                                                      | string       | App Step 2 |
            | site app name            | App BBVA Mexico                                                                  | string       | App Step 2 |
            | project name             | DIY E2E Sales                                                                    | string       | App Step 2 |
            | device mobile            | si                                                                               | string       | App Step 2 |
            | user userState           | logado                                                                           | string       | App Step 2 |
            | profile ID               | profileID                                                                        | regexp named | App Step 2 |
            | user segment global      | 003001                                                                           | string       | App Step 2 |
            | global application       | trade deposits                                                                   | string       | App Step 2 |
            | application typology     | renovar inversion con ganancias                                                  | string       | App Step 2 |
            | application name         | compra nuevo plazo                                                               | string       | App Step 2 |
            | application type         | contratacion                                                                     | string       | App Step 2 |
            | application step         | 2 instruccion al vencimiento                                                     | string       | App Step 2 |
            | fulfillment model        | online                                                                           | string       | App Step 2 |
            | product primary category | inversiones                                                                      | string       | App Step 2 |
            | product name             | plazos                                                                           | string       | App Step 2 |
            | product amount           | 2000                                                                             | string       | App Step 2 |
            | application process      | cliente con codigo                                                               | string       | App Step 2 |
            | product currency         | mxn                                                                              | string       | App Step 2 |
            | product payment date     | 28                                                                               | string       | App Step 2 |
            | product interest rate    | 4                                                                                | string       | App Step 2 |

    @ANA_DDP004
    @analytics
    @MX
    @vbank @backend(test)
    @ios @android @web
    @web-done
    Scenario: Deposit Purchase - App Step 3
        Given a user with the following criteria
            | criteria                 |
            | deposits purchase coupon |
        And the user accesses to purchase deposit "0003IN9302"
        When the user select simulate continue
        And the analytics interceptor service is initiated
        And the user select renovation
        Then the analytics events contains the following variables
            | item                     | value                                                           | type         | event      |
            | analytics                | analytics/glomo_base                                            | json schema  | App Step 3 |
            | version DL               | 20250414_5.0                                                    | string       | App Step 3 |
            | page name                | app:privada:personas:inversiones:compra nuevo plazo:3 confirmar | string       | App Step 3 |
            | level 1                  | inversiones                                                     | string       | App Step 3 |
            | level 2                  | compra nuevo plazo                                              | string       | App Step 3 |
            | level 3                  | 3 confirmar                                                     | string       | App Step 3 |
            | language                 | ES                                                              | string       | App Step 3 |
            | page area                | privada                                                         | string       | App Step 3 |
            | page intent              | transaccion                                                     | string       | App Step 3 |
            | channel                  | online                                                          | string       | App Step 3 |
            | page instance ID         | de                                                              | string       | App Step 3 |
            | page info version        | appVersion                                                      | regexp named | App Step 3 |
            | page segment             | personas                                                        | string       | App Step 3 |
            | sysEnv                   | app                                                             | string       | App Step 3 |
            | business unit            | BBVA Mexico                                                     | string       | App Step 3 |
            | site app name            | App BBVA Mexico                                                 | string       | App Step 3 |
            | project name             | DIY E2E Sales                                                   | string       | App Step 3 |
            | device mobile            | si                                                              | string       | App Step 3 |
            | user userState           | logado                                                          | string       | App Step 3 |
            | profile ID               | profileID                                                       | regexp named | App Step 3 |
            | user segment global      | 003001                                                          | string       | App Step 3 |
            | global application       | trade deposits                                                  | string       | App Step 3 |
            | application typology     | renovar inversion con ganancias                                 | string       | App Step 3 |
            | application name         | compra nuevo plazo                                              | string       | App Step 3 |
            | application type         | contratacion                                                    | string       | App Step 3 |
            | application step         | 3 confirmar                                                     | string       | App Step 3 |
            | fulfillment model        | online                                                          | string       | App Step 3 |
            | product primary category | inversiones                                                     | string       | App Step 3 |
            | product name             | plazos                                                          | string       | App Step 3 |
            | product name             | plazos                                                          | string       | App Step 3 |
            | product amount           | 2000                                                            | string       | App Step 3 |
            | product currency         | mxn                                                             | string       | App Step 3 |
            | application process      | cliente con codigo                                              | string       | App Step 3 |
            | product payment date     | 28                                                              | string       | App Step 3 |
            | product interest rate    | 4                                                               | string       | App Step 3 |

    @ANA_DDP005
    @analytics
    @MX
    @vbank @backend(test)
    @ios @android @web
    @web-done
    Scenario: Deposit Purchase - App Completed
        Given a user with the following criteria
            | criteria                 |
            | deposits purchase coupon |
        And the user accesses to purchase deposit "0003IN9302"
        And the user select simulate continue
        And the user select renovation
        And the analytics interceptor service is initiated
        When the user confirms otp code
        Then the analytics events contains the following variables
            | item                     | value                                                              | type         | event         |
            | analytics                | analytics/glomo_base                                               | json schema  | App Completed |
            | version DL               | 20250414_5.0                                                       | string       | App Completed |
            | page name                | app:privada:personas:inversiones:compra nuevo plazo:pagina exitosa | string       | App Completed |
            | level 1                  | inversiones                                                        | string       | App Completed |
            | level 2                  | compra nuevo plazo                                                 | string       | App Completed |
            | level 3                  | pagina exitosa                                                     | string       | App Completed |
            | language                 | ES                                                                 | string       | App Completed |
            | page area                | privada                                                            | string       | App Completed |
            | page intent              | transaccion                                                        | string       | App Completed |
            | channel                  | online                                                             | string       | App Completed |
            | page instance ID         | de                                                                 | string       | App Completed |
            | page info version        | appVersion                                                         | regexp named | App Completed |
            | page segment             | personas                                                           | string       | App Completed |
            | sysEnv                   | app                                                                | string       | App Completed |
            | business unit            | BBVA Mexico                                                        | string       | App Completed |
            | site app name            | App BBVA Mexico                                                    | string       | App Completed |
            | project name             | DIY E2E Sales                                                      | string       | App Completed |
            | device mobile            | si                                                                 | string       | App Completed |
            | user userState           | logado                                                             | string       | App Completed |
            | profile ID               | profileID                                                          | regexp named | App Completed |
            | user segment global      | 003001                                                             | string       | App Completed |
            | global application       | trade deposits                                                     | string       | App Completed |
            | application typology     | renovar inversion con ganancias                                    | string       | App Completed |
            | application name         | compra nuevo plazo                                                 | string       | App Completed |
            | application type         | contratacion                                                       | string       | App Completed |
            | application step         | pagina exitosa                                                     | string       | App Completed |
            | fulfillment model        | online                                                             | string       | App Completed |
            | product primary category | inversiones                                                        | string       | App Completed |
            | product name             | plazos                                                             | string       | App Completed |
            | product name             | plazos                                                             | string       | App Completed |
            | product amount           | 2000                                                               | string       | App Completed |
            | product currency         | mxn                                                                | string       | App Completed |
            | application process      | cliente con codigo                                                 | string       | App Completed |
            | product payment date     | 28                                                                 | string       | App Completed |
            | product interest rate    | 9.1                                                                | string       | App Completed |
            | product state            | contratado                                                         | string       | App Completed |

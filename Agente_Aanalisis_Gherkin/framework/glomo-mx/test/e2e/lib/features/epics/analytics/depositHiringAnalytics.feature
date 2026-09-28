@depositHiringAnalytics
Feature: Analytics - Deposit Hiring

    @ANA_EVENT_DH001
    @analytics
    @vbank
    @MX
    @android @ios @web
    @backend(test)
    @web-done
    Scenario: Deposit Hiring - App Page Visit
        Given a user with the following criteria
            | criteria             |
            | offer deposit hiring |
        And the user goes to the contract payment offer operation
        And the analytics interceptor service is initiated
        When the user goes to the deposit hiring operation
        Then the analytics events contains the following variables
            | item                | value                                                            | type         | event          |
            | analytics           | analytics/glomo_base                                             | json schema  | App Page Visit |
            | version DL          | 20250414_5.0                                                     | string       | App Page Visit |
            | page name           | app:privada:personas:inversiones:inversion a plazos:1 simulacion | string       | App Page Visit |
            | level 1             | inversiones                                                      | string       | App Page Visit |
            | level 2             | inversion a plazos                                               | string       | App Page Visit |
            | level 3             | 1 simulacion                                                     | string       | App Page Visit |
            | language            | ES                                                               | string       | App Page Visit |
            | page area           | privada                                                          | string       | App Page Visit |
            | page intent         | transaccion                                                      | string       | App Page Visit |
            | channel             | online                                                           | string       | App Page Visit |
            | page instance ID    | de                                                               | string       | App Page Visit |
            | page info version   | appVersion                                                       | regexp named | App Page Visit |
            | page segment        | personas                                                         | string       | App Page Visit |
            | sysEnv              | app                                                              | string       | App Page Visit |
            | business unit       | BBVA Mexico                                                      | string       | App Page Visit |
            | site app name       | App BBVA Mexico                                                  | string       | App Page Visit |
            | project name        | DIY E2E Sales                                                    | string       | App Page Visit |
            | device mobile       | si                                                               | string       | App Page Visit |
            | user userState      | logado                                                           | string       | App Page Visit |
            | profile ID          | profileID                                                        | regexp named | App Page Visit |
            | user segment global | 003001                                                           | string       | App Page Visit |
            | global application  | deposits                                                         | string       | App Page Visit |
            | application name    | inversion a plazos                                               | string       | App Page Visit |
            | application type    | contratacion                                                     | string       | App Page Visit |
            | application step    | 1 simulacion                                                     | string       | App Page Visit |
            | fulfillment model   | online                                                           | string       | App Page Visit |
            | qualified visits    | true                                                             | string       | App Page Visit |

    @ANA_EVENT_DH002
    @analytics
    @MX
    @vbank @backend(test)
    @ios @android @web
    @web-done
    Scenario: Deposit Hiring - App Started
        Given a user with the following criteria
            | criteria             |
            | offer deposit hiring |
        And the user goes to the contract payment offer operation
        And the user goes to the deposit hiring operation
        And the analytics interceptor service is initiated
        When the user accesses to screen help modal gat
        Then the analytics events contains the following variables
            | item                     | value                                                            | type         | event       |
            | analytics                | analytics/glomo_base                                             | json schema  | App Started |
            | version DL               | 20250414_5.0                                                     | string       | App Started |
            | page name                | app:privada:personas:inversiones:inversion a plazos:1 simulacion | string       | App Started |
            | level 1                  | inversiones                                                      | string       | App Started |
            | level 2                  | inversion a plazos                                               | string       | App Started |
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
            | user segment global      | 003001                                                           | string       | App Started |
            | profile ID               | profileID                                                        | regexp named | App Started |
            | user gender              | gender                                                           | regexp named | App Started |
            | user age                 | age                                                              | regexp named | App Started |
            | global application       | deposits                                                         | string       | App Started |
            | application name         | inversion a plazos                                               | string       | App Started |
            | application type         | contratacion                                                     | string       | App Started |
            | application step         | info gat nominal                                                 | string       | App Started |
            | fulfillment model        | online                                                           | string       | App Started |
            | product primary category | inversiones                                                      | string       | App Started |
            | product name             | plazos                                                           | string       | App Started |

    @ANA_EVENT_DH003
    @analytics
    @MX
    @vbank @backend(test)
    @ios @android @web
    @web-done
    Scenario: Deposit Hiring - App Step 2
        Given a user with the following criteria
            | criteria             |
            | offer deposit hiring |
        And the user goes to the contract payment offer operation
        And the user goes to the deposit hiring operation
        And the analytics interceptor service is initiated
        When the user accesses to account step
        Then the analytics events contains the following variables
            | item                     | value                                                                 | type         | event      |
            | analytics                | analytics/glomo_base                                                  | json schema  | App Step 2 |
            | version DL               | 20250414_5.0                                                          | string       | App Step 2 |
            | page name                | app:privada:personas:inversiones:inversion a plazos:2 cuenta deposito | string       | App Step 2 |
            | level 1                  | inversiones                                                           | string       | App Step 2 |
            | level 2                  | inversion a plazos                                                    | string       | App Step 2 |
            | level 3                  | 2 cuenta deposito                                                     | string       | App Step 2 |
            | language                 | ES                                                                    | string       | App Step 2 |
            | page area                | privada                                                               | string       | App Step 2 |
            | page intent              | transaccion                                                           | string       | App Step 2 |
            | channel                  | online                                                                | string       | App Step 2 |
            | page instance ID         | de                                                                    | string       | App Step 2 |
            | page info version        | appVersion                                                            | regexp named | App Step 2 |
            | page segment             | personas                                                              | string       | App Step 2 |
            | sysEnv                   | app                                                                   | string       | App Step 2 |
            | business unit            | BBVA Mexico                                                           | string       | App Step 2 |
            | site app name            | App BBVA Mexico                                                       | string       | App Step 2 |
            | project name             | DIY E2E Sales                                                         | string       | App Step 2 |
            | device mobile            | si                                                                    | string       | App Step 2 |
            | user userState           | logado                                                                | string       | App Step 2 |
            | user segment global      | 003001                                                                | string       | App Step 2 |
            | profile ID               | profileID                                                             | regexp named | App Step 2 |
            | user gender              | gender                                                                | regexp named | App Step 2 |
            | user age                 | age                                                                   | regexp named | App Step 2 |
            | global application       | deposits                                                              | string       | App Step 2 |
            | application name         | inversion a plazos                                                    | string       | App Step 2 |
            | application process      | cliente con codigo                                                    | string       | App Step 2 |
            | application type         | contratacion                                                          | string       | App Step 2 |
            | application step         | 2 cuenta deposito                                                     | string       | App Step 2 |
            | fulfillment model        | online                                                                | string       | App Step 2 |
            | product primary category | inversiones                                                           | string       | App Step 2 |
            | product name             | plazos                                                                | string       | App Step 2 |
            | product payment date     | 28                                                                    | string       | App Step 2 |
            | product interest rate    | 4.4                                                                   | number       | App Step 2 |
            | product amount           | 2000                                                                  | string       | App Step 2 |

    @ANA_EVENT_DH004
    @analytics
    @MX
    @vbank @backend(test)
    @ios @android @web
    @web-done
    Scenario: Deposit Hiring - App Step 3
        Given a user with the following criteria
            | criteria             |
            | offer deposit hiring |
        And the user goes to the contract payment offer operation
        And the user goes to the deposit hiring operation
        And the analytics interceptor service is initiated
        When the user accesses to instruction step
        Then the analytics events contains the following variables
            | item                     | value                                                                            | type         | event      |
            | analytics                | analytics/glomo_base                                                             | json schema  | App Step 3 |
            | version DL               | 20250414_5.0                                                                     | string       | App Step 3 |
            | page name                | app:privada:personas:inversiones:inversion a plazos:3 instruccion al vencimiento | string       | App Step 3 |
            | level 1                  | inversiones                                                                      | string       | App Step 3 |
            | level 2                  | inversion a plazos                                                               | string       | App Step 3 |
            | level 3                  | 3 instruccion al vencimiento                                                     | string       | App Step 3 |
            | language                 | ES                                                                               | string       | App Step 3 |
            | page area                | privada                                                                          | string       | App Step 3 |
            | page intent              | transaccion                                                                      | string       | App Step 3 |
            | channel                  | online                                                                           | string       | App Step 3 |
            | page instance ID         | de                                                                               | string       | App Step 3 |
            | page info version        | appVersion                                                                       | regexp named | App Step 3 |
            | page segment             | personas                                                                         | string       | App Step 3 |
            | sysEnv                   | app                                                                              | string       | App Step 3 |
            | business unit            | BBVA Mexico                                                                      | string       | App Step 3 |
            | site app name            | App BBVA Mexico                                                                  | string       | App Step 3 |
            | project name             | DIY E2E Sales                                                                    | string       | App Step 3 |
            | device mobile            | si                                                                               | string       | App Step 3 |
            | user userState           | logado                                                                           | string       | App Step 3 |
            | user segment global      | 003001                                                                           | string       | App Step 3 |
            | profile ID               | profileID                                                                        | regexp named | App Step 3 |
            | user gender              | gender                                                                           | regexp named | App Step 3 |
            | user age                 | age                                                                              | regexp named | App Step 3 |
            | global application       | deposits                                                                         | string       | App Step 3 |
            | application name         | inversion a plazos                                                               | string       | App Step 3 |
            | application process      | cliente con codigo                                                               | string       | App Step 3 |
            | application type         | contratacion                                                                     | string       | App Step 3 |
            | application step         | 3 instruccion al vencimiento                                                     | string       | App Step 3 |
            | fulfillment model        | online                                                                           | string       | App Step 3 |
            | product primary category | inversiones                                                                      | string       | App Step 3 |
            | product name             | plazos                                                                           | string       | App Step 3 |
            | product payment date     | 28                                                                               | string       | App Step 3 |
            | product interest rate    | 4.4                                                                              | number       | App Step 3 |
            | product amount           | 2000                                                                             | string       | App Step 3 |
            | product currency         | mxn                                                                              | string       | App Step 3 |

    @ANA_EVENT_DH005
    @analytics
    @MX
    @vbank @backend(test)
    @ios @android @web
    @web-done
    Scenario: Deposit Hiring - App Step 4
        Given a user with the following criteria
            | criteria             |
            | offer deposit hiring |
        And the user goes to the contract payment offer operation
        And the user goes to the deposit hiring operation
        And the analytics interceptor service is initiated
        When the user accesses to terms and conditions step
        Then the analytics events contains the following variables
            | item                     | value                                                                        | type         | event      |
            | analytics                | analytics/glomo_base                                                         | json schema  | App Step 4 |
            | version DL               | 20250414_5.0                                                                 | string       | App Step 4 |
            | page name                | app:privada:personas:inversiones:inversion a plazos:4 terminos y condiciones | string       | App Step 4 |
            | level 1                  | inversiones                                                                  | string       | App Step 4 |
            | level 2                  | inversion a plazos                                                           | string       | App Step 4 |
            | level 3                  | 4 terminos y condiciones                                                     | string       | App Step 4 |
            | language                 | ES                                                                           | string       | App Step 4 |
            | page area                | privada                                                                      | string       | App Step 4 |
            | page intent              | transaccion                                                                  | string       | App Step 4 |
            | channel                  | online                                                                       | string       | App Step 4 |
            | page instance ID         | de                                                                           | string       | App Step 4 |
            | page info version        | appVersion                                                                   | regexp named | App Step 4 |
            | page segment             | personas                                                                     | string       | App Step 4 |
            | sysEnv                   | app                                                                          | string       | App Step 4 |
            | business unit            | BBVA Mexico                                                                  | string       | App Step 4 |
            | site app name            | App BBVA Mexico                                                              | string       | App Step 4 |
            | project name             | DIY E2E Sales                                                                | string       | App Step 4 |
            | device mobile            | si                                                                           | string       | App Step 4 |
            | user userState           | logado                                                                       | string       | App Step 4 |
            | user segment global      | 003001                                                                       | string       | App Step 4 |
            | profile ID               | profileID                                                                    | regexp named | App Step 4 |
            | user gender              | gender                                                                       | regexp named | App Step 4 |
            | user age                 | age                                                                          | regexp named | App Step 4 |
            | application typology     | renovar inversion con ganancias                                              | string       | App Step 4 |
            | global application       | deposits                                                                     | string       | App Step 4 |
            | application name         | inversion a plazos                                                           | string       | App Step 4 |
            | application process      | cliente con codigo                                                           | string       | App Step 4 |
            | application type         | contratacion                                                                 | string       | App Step 4 |
            | application step         | 4 terminos y condiciones                                                     | string       | App Step 4 |
            | fulfillment model        | online                                                                       | string       | App Step 4 |
            | product primary category | inversiones                                                                  | string       | App Step 4 |
            | product name             | plazos                                                                       | string       | App Step 4 |
            | product payment date     | 28                                                                           | string       | App Step 4 |
            | product interest rate    | 4.4                                                                          | number       | App Step 4 |
            | product amount           | 2000                                                                         | string       | App Step 4 |
            | product currency         | mxn                                                                          | string       | App Step 4 |

    @ANA_EVENT_DH006
    @analytics
    @MX
    @vbank @backend(test)
    @ios @android @web
    @no-data-manager
    @manual @JIRA.GLOMOMX-133404
    Scenario: Deposit Hiring - App Step 5
        Given the user "5531025051" and "Glomo2022"
        And the user goes to the contract payment offer operation
        When the user goes to the deposit hiring operation
        And the analytics interceptor service is initiated
        Then the analytics events contains the following variables
            | item                     | value                                                           | type         | event      |
            | analytics                | analytics/glomo_base                                            | json schema  | App Step 5 |
            | version DL               | 20250414_5.0                                                    | string       | App Step 5 |
            | page name                | app:privada:personas:inversiones:inversion a plazos:5 confirmar | string       | App Step 5 |
            | level 1                  | inversiones                                                     | string       | App Step 5 |
            | level 2                  | inversion a plazos                                              | string       | App Step 5 |
            | level 3                  | 5 confirmar                                                     | string       | App Step 5 |
            | language                 | ES                                                              | string       | App Step 5 |
            | page area                | privada                                                         | string       | App Step 5 |
            | page intent              | transaccion                                                     | string       | App Step 5 |
            | channel                  | online                                                          | string       | App Step 5 |
            | page instance ID         | de                                                              | string       | App Step 5 |
            | page info version        | appVersion                                                      | regexp named | App Step 5 |
            | page segment             | personas                                                        | string       | App Step 5 |
            | sysEnv                   | app                                                             | string       | App Step 5 |
            | business unit            | BBVA Mexico                                                     | string       | App Step 5 |
            | site app name            | App BBVA Mexico                                                 | string       | App Step 5 |
            | project name             | DIY E2E Sales                                                   | string       | App Step 5 |
            | device mobile            | si                                                              | string       | App Step 5 |
            | user userState           | logado                                                          | string       | App Step 5 |
            | user segment global      | 003001                                                          | string       | App Step 5 |
            | profile ID               | profileID                                                       | regexp named | App Step 5 |
            | user gender              | gender                                                          | regexp named | App Step 5 |
            | user age                 | age                                                             | regexp named | App Step 5 |
            | application typology     | renovar inversion con ganancias                                 | string       | App Step 5 |
            | global application       | deposits                                                        | string       | App Step 5 |
            | application name         | inversion a plazos                                              | string       | App Step 5 |
            | application process      | cliente con codigo                                              | string       | App Step 5 |
            | application type         | contratacion                                                    | string       | App Step 5 |
            | application step         | 5 confirmar                                                     | string       | App Step 5 |
            | fulfillment model        | online                                                          | string       | App Step 5 |
            | product primary category | inversiones                                                     | string       | App Step 5 |
            | product name             | plazos                                                          | string       | App Step 5 |
            | product payment date     | 28                                                              | string       | App Step 5 |
            | product interest rate    | 4.5                                                             | string       | App Step 5 |
            | product amount           | 2000                                                            | string       | App Step 5 |
            | product currency         | MXN                                                             | string       | App Step 5 |

    @ANA_EVENT_DH007
    @analytics
    @web @ios @android @no-data-manager
    @MX @backend(test) @vbank
    @manual @JIRA.GLOMOMX-133404
    Scenario: Deposit Hiring - App Completed
        Given the user "5531025051" and "Glomo2022"
        And the user goes to the contract payment offer operation
        When the user goes to the deposit hiring operation
        And the analytics interceptor service is initiated
        And the user confirms otp deposit code
        Then the analytics events contains the following variables
            | item                     | value                                                              | type         | event         |
            | analytics                | analytics/glomo_base                                               | json schema  | App Completed |
            | version DL               | 20250414_5.0                                                       | string       | App Completed |
            | page name                | app:privada:personas:inversiones:inversion a plazos:pagina exitosa | string       | App Completed |
            | level 1                  | inversiones                                                        | string       | App Completed |
            | level 2                  | inversion a plazos                                                 | string       | App Completed |
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
            | user segment global      | 003001                                                             | string       | App Completed |
            | profile ID               | profileID                                                          | regexp named | App Completed |
            | user gender              | gender                                                             | regexp named | App Completed |
            | user age                 | age                                                                | regexp named | App Completed |
            | application typology     | sin renovacion automatica                                          | string       | App Completed |
            | user segment profile     | informacion incompleta beneficiarios                               | string       | App Completed |
            | global application       | deposits                                                           | string       | App Completed |
            | application name         | inversion a plazos                                                 | string       | App Completed |
            | application process      | cliente con codigo                                                 | string       | App Completed |
            | application type         | contratacion                                                       | string       | App Completed |
            | application step         | pagina exitosa                                                     | string       | App Completed |
            | application state        | contratado                                                         | string       | App Completed |
            | application state        | en revision                                                        | string       | App Completed |
            | application state        | rechazado                                                          | string       | App Completed |
            | fulfillment model        | online                                                             | string       | App Completed |
            | product primary category | inversiones                                                        | string       | App Completed |
            | product name             | plazos                                                             | string       | App Completed |
            | product state            | contratado                                                         | string       | App Completed |
            | product state            | en revision                                                        | string       | App Completed |
            | product state            | rechazado                                                          | string       | App Completed |
            | product payment date     | 28                                                                 | string       | App Completed |
            | product interest rate    | 3.8                                                                | string       | App Completed |
            | product amount           | 2000                                                               | string       | App Completed |
            | product currency         | mxn                                                                | string       | App Completed |
            | internal campaign        |                                                                    | empty array  | App Completed |
            | optimization attributes  |                                                                    | empty array  | App Completed |

    @ANA_EVENT_DH008
    @analytics
    @web @ios @android
    @MX @backend(test) @vbank @no-data-manager
    @manual @JIRA.GLOMOMX-133404
    Scenario: Deposit Hiring - Page View 2
        Given a user with the following criteria
            | criteria             |
            | offer deposit hiring |
        And the user goes to the contract payment offer operation
        And the analytics interceptor service is initiated
        When the user goes to the deposit purchase operation
        Then the analytics events contains the following variables
            | item                    | value                                                                     | type             | event     |
            | analytics               | analytics/glomo_base                                                      | json schema      | Page View |
            | version DL              | 20250414_5.0                                                              | string           | Page View |
            | page name               | app:privada:personas:inversiones:inversion a plazos:ya tienes un contrato | string           | Page View |
            | level 1                 | inversiones                                                               | string           | Page View |
            | level 2                 | inversion a plazos                                                        | string           | Page View |
            | level 3                 | ya tienes un contrato                                                     | string           | Page View |
            | language                | ES                                                                        | string           | Page View |
            | page area               | privada                                                                   | string           | Page View |
            | page intent             | informacion                                                               | string           | Page View |
            | channel                 | online                                                                    | string           | Page View |
            | page instance ID        | de                                                                        | string           | Page View |
            | page info version       | appVersion                                                                | regexp named     | Page View |
            | page segment            | personas                                                                  | string           | Page View |
            | sysEnv                  | app                                                                       | string           | Page View |
            | business unit           | BBVA Mexico                                                               | string           | Page View |
            | site app name           | App BBVA Mexico                                                           | string           | Page View |
            | project name            | DIY E2E Sales                                                             | string           | Page View |
            | device mobile           | si                                                                        | string           | Page View |
            | user userState          | logado                                                                    | string           | Page View |
            | user segment global     | 003001                                                                    | string           | Page View |
            | profile ID              | profileID                                                                 | regexp named     | Page View |
            | internal campaign       |                                                                           | empty array      | Page View |
            | optimization attributes |                                                                           | empty array      | Page View |
            | application             |                                                                           | empty str object | Page View |
            | products attributes     |                                                                           | empty array      | Page View |

    @ANA_EVENT_DH009
    @analytics
    @web @ios @android
    @MX @backend(test) @vbank
    @web-done
    Scenario: Deposit Hiring - Page View
        Given a user with the following criteria
            | criteria             |
            | offer deposit hiring |
        And the user goes to the contract payment offer operation
        And the analytics interceptor service is initiated
        When the user goes to the deposit purchase operation
        Then the analytics events contains the following variables
            | item                    | value                                                                    | type             | event     |
            | analytics               | analytics/glomo_base                                                     | json schema      | Page View |
            | version DL              | 20250414_5.0                                                             | string           | Page View |
            | page name               | app:privada:personas:inversiones:inversion a plazos:listado de contratos | string           | Page View |
            | level 1                 | inversiones                                                              | string           | Page View |
            | level 2                 | inversion a plazos                                                       | string           | Page View |
            | level 3                 | listado de contratos                                                     | string           | Page View |
            | language                | ES                                                                       | string           | Page View |
            | page area               | privada                                                                  | string           | Page View |
            | page intent             | informacion                                                              | string           | Page View |
            | channel                 | online                                                                   | string           | Page View |
            | page instance ID        | de                                                                       | string           | Page View |
            | page info version       | appVersion                                                               | regexp named     | Page View |
            | page segment            | personas                                                                 | string           | Page View |
            | sysEnv                  | app                                                                      | string           | Page View |
            | business unit           | BBVA Mexico                                                              | string           | Page View |
            | site app name           | App BBVA Mexico                                                          | string           | Page View |
            | project name            | DIY E2E Sales                                                            | string           | Page View |
            | device mobile           | si                                                                       | string           | Page View |
            | user userState          | logado                                                                   | string           | Page View |
            | user segment global     | 003001                                                                   | string           | Page View |
            | profile ID              | profileID                                                                | regexp named     | Page View |
            | internal campaign       |                                                                          | empty array      | Page View |
            | optimization attributes |                                                                          | empty array      | Page View |
            | application             |                                                                          | empty str object | Page View |
            | products attributes     |                                                                          | empty array      | Page View |

    @ANA_EVENT_DH0010
    @analytics
    @web @ios @android
    @MX @backend(test) @vbank
    @web-done
    Scenario: Deposit Hiring - Internal Link
        Given a user with the following criteria
            | criteria             |
            | offer deposit hiring |
        And the user goes to the contract payment offer operation
        And the analytics interceptor service is initiated
        When the user goes to the deposit hiring operation
        Then the analytics events contains the following variables
            | item                    | value                                                                     | type             | event         |
            | analytics               | analytics/glomo_base                                                      | json schema      | Internal Link |
            | version DL              | 20250414_5.0                                                              | string           | Internal Link |
            | page name               | app:privada:personas:inversiones:inversion a plazos:ya tienes un contrato | string           | Internal Link |
            | level 1                 | inversiones                                                               | string           | Internal Link |
            | level 2                 | inversion a plazos                                                        | string           | Internal Link |
            | level 3                 | ya tienes un contrato                                                     | string           | Internal Link |
            | link name               | abrir nuevo contrato                                                      | string           | Internal Link |
            | language                | ES                                                                        | string           | Internal Link |
            | page area               | privada                                                                   | string           | Internal Link |
            | page intent             | informacion                                                               | string           | Internal Link |
            | channel                 | online                                                                    | string           | Internal Link |
            | page instance ID        | de                                                                        | string           | Internal Link |
            | page info version       | appVersion                                                                | regexp named     | Internal Link |
            | page segment            | personas                                                                  | string           | Internal Link |
            | sysEnv                  | app                                                                       | string           | Internal Link |
            | business unit           | BBVA Mexico                                                               | string           | Internal Link |
            | site app name           | App BBVA Mexico                                                           | string           | Internal Link |
            | project name            | DIY E2E Sales                                                             | string           | Internal Link |
            | device mobile           | si                                                                        | string           | Internal Link |
            | user userState          | logado                                                                    | string           | Internal Link |
            | user segment global     | 003001                                                                    | string           | Internal Link |
            | profile ID              | profileID                                                                 | regexp named     | Internal Link |
            | internal campaign       |                                                                           | empty array      | Internal Link |
            | optimization attributes |                                                                           | empty array      | Internal Link |
            | application             |                                                                           | empty str object | Internal Link |
            | products attributes     |                                                                           | empty array      | Internal Link |

    @ANA_EVENT_DH0011
    @analytics
    @web @ios @android
    @MX @backend(test) @vbank
    @web-done
    Scenario: Deposit Hiring - Internal Link 2
        Given a user with the following criteria
            | criteria             |
            | offer deposit hiring |
        And the user goes to the contract payment offer operation
        And the analytics interceptor service is initiated
        When the user goes to the deposit purchase operation
        Then the analytics events contains the following variables
            | item                    | value                                                                     | type             | event         |
            | analytics               | analytics/glomo_base                                                      | json schema      | Internal Link |
            | version DL              | 20250414_5.0                                                              | string           | Internal Link |
            | page name               | app:privada:personas:inversiones:inversion a plazos:ya tienes un contrato | string           | Internal Link |
            | level 1                 | inversiones                                                               | string           | Internal Link |
            | level 2                 | inversion a plazos                                                        | string           | Internal Link |
            | level 3                 | ya tienes un contrato                                                     | string           | Internal Link |
            | link name               | nuevo pagare                                                              | string           | Internal Link |
            | language                | ES                                                                        | string           | Internal Link |
            | page area               | privada                                                                   | string           | Internal Link |
            | page intent             | informacion                                                               | string           | Internal Link |
            | channel                 | online                                                                    | string           | Internal Link |
            | page instance ID        | de                                                                        | string           | Internal Link |
            | page info version       | appVersion                                                                | regexp named     | Internal Link |
            | page segment            | personas                                                                  | string           | Internal Link |
            | sysEnv                  | app                                                                       | string           | Internal Link |
            | business unit           | BBVA Mexico                                                               | string           | Internal Link |
            | site app name           | App BBVA Mexico                                                           | string           | Internal Link |
            | project name            | DIY E2E Sales                                                             | string           | Internal Link |
            | device mobile           | si                                                                        | string           | Internal Link |
            | user userState          | logado                                                                    | string           | Internal Link |
            | user segment global     | 003001                                                                    | string           | Internal Link |
            | profile ID              | profileID                                                                 | regexp named     | Internal Link |
            | internal campaign       |                                                                           | empty array      | Internal Link |
            | optimization attributes |                                                                           | empty array      | Internal Link |
            | application             |                                                                           | empty str object | Internal Link |
            | products attributes     |                                                                           | empty array      | Internal Link |

    @ANA_EVENT_DH0012
    @analytics
    @web @ios @android @no-data-manager
    @MX @backend(test) @vbank
    @manual @JIRA.GLOMOMX-133404
    Scenario: Deposit Hiring - App Completed - Reject
        Given a user with the following criteria
            | criteria                   |
            | offer deposit hiring error |
        When the user goes to the contract page
        Then the device contains the following variables
            | item                     | value                                                              | type         |
            | analytics                | analytics/glomo_base                                               | json schema  |
            | version DL               | 20250414_5.0                                                       | string       |
            | page name                | app:privada:personas:inversiones:inversion a plazos:pagina exitosa | string       |
            | level 1                  | inversiones                                                        | string       |
            | level 2                  | inversion a plazos                                                 | string       |
            | level 3                  | pagina exitosa                                                     | string       |
            | language                 | ES                                                                 | string       |
            | page area                | privada                                                            | string       |
            | page intent              | transaccion                                                        | string       |
            | channel                  | online                                                             | string       |
            | page instance ID         | de                                                                 | string       |
            | page info version        | appVersion                                                         | regexp named |
            | page segment             | personas                                                           | string       |
            | sysEnv                   | app                                                                | string       |
            | business unit            | BBVA Mexico                                                        | string       |
            | site app name            | App BBVA Mexico                                                    | string       |
            | project name             | DIY E2E Sales                                                      | string       |
            | device mobile            | si                                                                 | string       |
            | user userState           | logado                                                             | string       |
            | user segment global      | 003001                                                             | string       |
            | profile ID               | profileID                                                          | regexp named |
            | user gender              | gender                                                             | regexp named |
            | user age                 | age                                                                | regexp named |
            | user segment profile     | informacion incompleta                                             | string       |
            | global application       | deposits                                                           | string       |
            | application name         | inversion a plazos                                                 | string       |
            | application type         | contratacion                                                       | string       |
            | application step         | pagina exitosa                                                     | string       |
            | application state        | rechazado                                                          | string       |
            | fulfillment model        | online                                                             | string       |
            | product primary category | inversiones                                                        | string       |
            | product name             | plazos                                                             | string       |
            | product state            | rechazado                                                          | string       |
            | internal campaign        |                                                                    | empty array  |
            | optimization attributes  |                                                                    | empty array  |

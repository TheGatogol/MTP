@equityContractsNewFundAnalytics
Feature: OC Fund Equity Contract - Analytics

    @ANA_EVENT_ENFC001
    @analytics @MX @vbank @backend(test)
    @web @ios @android @tmpExclude @JIRA.GLOMOMX-254311
    Scenario: OC Fund Equity Contract - App page visit
        Given a user with the following criteria
            | criteria                 |
            | equity new fund contract |
        And the user accesses to equity
        And the analytics interceptor service is initiated
        When the user accesses to equity new fund contract
        Then the analytics events contains the following variables
            | item                     | value                                                             | type         | event          |
            | analytics                | analytics/glomo_base                                              | json schema  | App Page Visit |
            | version DL               | 20250414_5.0                                                      | string       | App Page Visit |
            | page instance ID         | de                                                                | string       | App Page Visit |
            | page area                | privada                                                           | string       | App Page Visit |
            | level 1                  | fondos                                                            | string       | App Page Visit |
            | level 2                  | nuevo fondo                                                       | string       | App Page Visit |
            | level 3                  | 1 construye tu estrategia                                         | string       | App Page Visit |
            | sysEnv                   | app                                                               | string       | App Page Visit |
            | channel                  | online                                                            | string       | App Page Visit |
            | language                 | ES                                                                | string       | App Page Visit |
            | page name                | app:privada:personas:fondos:nuevo fondo:1 construye tu estrategia | string       | App Page Visit |
            | page intent              | transaccion                                                       | string       | App Page Visit |
            | page segment             | personas                                                          | string       | App Page Visit |
            | project name             | Glomo                                                             | string       | App Page Visit |
            | site app name            | App BBVA Mexico                                                   | string       | App Page Visit |
            | business unit            | BBVA Mexico                                                       | string       | App Page Visit |
            | device mobile            | si                                                                | string       | App Page Visit |
            | user age                 | age                                                               | regexp named | App Page Visit |
            | user gender              | gender                                                            | regexp named | App Page Visit |
            | profile ID               | profileID                                                         | regexp named | App Page Visit |
            | user userState           | logado                                                            | string       | App Page Visit |
            | user segment global      | 003001                                                            | string       | App Page Visit |
            | application step         | 1 construye tu estrategia                                         | string       | App Page Visit |
            | application state        | inicio                                                            | string       | App Page Visit |
            | application name         | nuevo fondo en contrato existente                                 | string       | App Page Visit |
            | application type         | contratacion                                                      | string       | App Page Visit |
            | fulfillment model        | online                                                            | string       | App Page Visit |
            | global application       | fund contracting                                                  | string       | App Page Visit |
            | qualified visits         | true                                                              | string       | App Page Visit |
            | product primary category | inversiones                                                       | string       | App Page Visit |
            | product subtype          | fondos inversion                                                  | string       | App Page Visit |
            | internal campaign        |                                                                   | empty array  | App Page Visit |
            | optimization attributes  |                                                                   | empty array  | App Page Visit |

    @ANA_EVENT_ENFC002
    @analytics @MX @vbank @backend(test)
    @web @ios @android @tmpExclude @JIRA.GLOMOMX-254311
    Scenario: OC Fund Equity Contract - App started
        Given a user with the following criteria
            | criteria                 |
            | equity new fund contract |
        And the user accesses to equity new fund contract
        And the user goes to the "fund list" step
        And the analytics interceptor service is initiated
        When the user selects the "debt" fund category
        Then the analytics events contains the following variables
            | item                     | value                                                             | type         | event       |
            | analytics                | analytics/glomo_base                                              | json schema  | App Started |
            | version DL               | 20250414_5.0                                                      | string       | App Started |
            | page instance ID         | de                                                                | string       | App Started |
            | page area                | privada                                                           | string       | App Started |
            | level 1                  | fondos                                                            | string       | App Started |
            | level 2                  | nuevo fondo                                                       | string       | App Started |
            | level 3                  | 1 construye tu estrategia                                         | string       | App Started |
            | sysEnv                   | app                                                               | string       | App Started |
            | channel                  | online                                                            | string       | App Started |
            | language                 | ES                                                                | string       | App Started |
            | page name                | app:privada:personas:fondos:nuevo fondo:1 construye tu estrategia | string       | App Started |
            | page intent              | transaccion                                                       | string       | App Started |
            | page segment             | personas                                                          | string       | App Started |
            | project name             | Glomo                                                             | string       | App Started |
            | site app name            | App BBVA Mexico                                                   | string       | App Started |
            | business unit            | BBVA Mexico                                                       | string       | App Started |
            | device mobile            | si                                                                | string       | App Started |
            | user age                 | age                                                               | regexp named | App Started |
            | user gender              | gender                                                            | regexp named | App Started |
            | profile ID               | profileID                                                         | regexp named | App Started |
            | user userState           | logado                                                            | string       | App Started |
            | user segment global      | 003001                                                            | string       | App Started |
            | application step         | deuda                                                             | string       | App Started |
            | application name         | nuevo fondo en contrato existente                                 | string       | App Started |
            | application type         | contratacion                                                      | string       | App Started |
            | fulfillment model        | online                                                            | string       | App Started |
            | global application       | fund contracting                                                  | string       | App Started |
            | product primary category | inversiones                                                       | string       | App Started |
            | product subtype          | fondos inversion                                                  | string       | App Started |
            | internal campaign        |                                                                   | empty array  | App Started |
            | optimization attributes  |                                                                   | empty array  | App Started |

    @ANA_EVENT_ENFC003
    @analytics @MX @vbank @backend(test)
    @web @ios @android @tmpExclude @JIRA.GLOMOMX-254311
    Scenario: OC Fund Equity Contract - App step 2
        Given a user with the following criteria
            | criteria                 |
            | equity new fund contract |
        And the user accesses to equity new fund contract
        And the analytics interceptor service is initiated
        When the user goes to the "amount" step
        Then the analytics events contains the following variables
            | item                     | value                                                          | type         | event      |
            | analytics                | analytics/glomo_base                                           | json schema  | App Step 2 |
            | version DL               | 20250414_5.0                                                   | string       | App Step 2 |
            | page instance ID         | de                                                             | string       | App Step 2 |
            | page area                | privada                                                        | string       | App Step 2 |
            | level 1                  | fondos                                                         | string       | App Step 2 |
            | level 2                  | nuevo fondo                                                    | string       | App Step 2 |
            | level 3                  | 2 importe de inversion                                         | string       | App Step 2 |
            | sysEnv                   | app                                                            | string       | App Step 2 |
            | channel                  | online                                                         | string       | App Step 2 |
            | language                 | ES                                                             | string       | App Step 2 |
            | page name                | app:privada:personas:fondos:nuevo fondo:2 importe de inversion | string       | App Step 2 |
            | page intent              | transaccion                                                    | string       | App Step 2 |
            | page segment             | personas                                                       | string       | App Step 2 |
            | project name             | Glomo                                                          | string       | App Step 2 |
            | site app name            | App BBVA Mexico                                                | string       | App Step 2 |
            | business unit            | BBVA Mexico                                                    | string       | App Step 2 |
            | device mobile            | si                                                             | string       | App Step 2 |
            | user age                 | age                                                            | regexp named | App Step 2 |
            | user gender              | gender                                                         | regexp named | App Step 2 |
            | profile ID               | profileID                                                      | regexp named | App Step 2 |
            | user userState           | logado                                                         | string       | App Step 2 |
            | user segment global      | 003001                                                         | string       | App Step 2 |
            | application step         | 2 importe de inversion                                         | string       | App Step 2 |
            | application name         | nuevo fondo en contrato existente                              | string       | App Step 2 |
            | application type         | contratacion                                                   | string       | App Step 2 |
            | fulfillment model        | online                                                         | string       | App Step 2 |
            | global application       | fund contracting                                               | string       | App Step 2 |
            | product primary category | inversiones                                                    | string       | App Step 2 |
            | product subtype          | fondos inversion                                               | string       | App Step 2 |
            | product name             | bbvacor                                                        | string       | App Step 2 |
            | internal campaign        |                                                                | empty array  | App Step 2 |
            | optimization attributes  |                                                                | empty array  | App Step 2 |

    @ANA_EVENT_ENFC004
    @analytics @MX @vbank @backend(test)
    @web @ios @android @tmpExclude @JIRA.GLOMOMX-254311
    Scenario: OC Fund Equity Contract - App Step 3
        Given a user with the following criteria
            | criteria                 |
            | equity new fund contract |
        And the user accesses to equity new fund contract
        And the analytics interceptor service is initiated
        When the user goes to the "legals" step
        Then the analytics events contains the following variables
            | item                     | value                                                | type         | event      |
            | analytics                | analytics/glomo_base                                 | json schema  | App Step 3 |
            | version DL               | 20250414_5.0                                         | string       | App Step 3 |
            | page instance ID         | de                                                   | string       | App Step 3 |
            | page area                | privada                                              | string       | App Step 3 |
            | level 1                  | fondos                                               | string       | App Step 3 |
            | level 2                  | nuevo fondo                                          | string       | App Step 3 |
            | level 3                  | 3 simulacion                                         | string       | App Step 3 |
            | sysEnv                   | app                                                  | string       | App Step 3 |
            | channel                  | online                                               | string       | App Step 3 |
            | language                 | ES                                                   | string       | App Step 3 |
            | page name                | app:privada:personas:fondos:nuevo fondo:3 simulacion | string       | App Step 3 |
            | page intent              | transaccion                                          | string       | App Step 3 |
            | page segment             | personas                                             | string       | App Step 3 |
            | project name             | Glomo                                                | string       | App Step 3 |
            | site app name            | App BBVA Mexico                                      | string       | App Step 3 |
            | business unit            | BBVA Mexico                                          | string       | App Step 3 |
            | device mobile            | si                                                   | string       | App Step 3 |
            | user age                 | age                                                  | regexp named | App Step 3 |
            | user gender              | gender                                               | regexp named | App Step 3 |
            | profile ID               | profileID                                            | regexp named | App Step 3 |
            | user userState           | logado                                               | string       | App Step 3 |
            | user segment global      | 003001                                               | string       | App Step 3 |
            | application step         | 3 simulacion                                         | string       | App Step 3 |
            | application name         | nuevo fondo en contrato existente                    | string       | App Step 3 |
            | application type         | contratacion                                         | string       | App Step 3 |
            | fulfillment model        | online                                               | string       | App Step 3 |
            | global application       | fund contracting                                     | string       | App Step 3 |
            | product primary category | inversiones                                          | string       | App Step 3 |
            | product subtype          | fondos inversion                                     | string       | App Step 3 |
            | product name             | bbvacor                                              | string       | App Step 3 |
            | product amount           | 2000                                                 | string       | App Step 3 |
            | product currency         | MXN                                                  | string       | App Step 3 |
            | internal campaign        |                                                      | empty array  | App Step 3 |
            | optimization attributes  |                                                      | empty array  | App Step 3 |

    @ANA_EVENT_ENFC005
    @analytics @MX @vbank @backend(test)
    @web @ios @android @tmpExclude @JIRA.GLOMOMX-254311
    Scenario: OC Fund Equity Contract - App Step 4
        Given a user with the following criteria
            | criteria                 |
            | equity new fund contract |
        And the user accesses to equity new fund contract
        And the analytics interceptor service is initiated
        When the user goes to the "legals" step
        Then the analytics events contains the following variables
            | item                     | value                                                            | type         | event      |
            | analytics                | analytics/glomo_base                                             | json schema  | App Step 4 |
            | version DL               | 20250414_5.0                                                     | string       | App Step 4 |
            | page instance ID         | de                                                               | string       | App Step 4 |
            | page area                | privada                                                          | string       | App Step 4 |
            | level 1                  | fondos                                                           | string       | App Step 4 |
            | level 2                  | nuevo fondo                                                      | string       | App Step 4 |
            | level 3                  | 4 terminos y condiciones                                         | string       | App Step 4 |
            | sysEnv                   | app                                                              | string       | App Step 4 |
            | channel                  | online                                                           | string       | App Step 4 |
            | language                 | ES                                                               | string       | App Step 4 |
            | page name                | app:privada:personas:fondos:nuevo fondo:4 terminos y condiciones | string       | App Step 4 |
            | page intent              | transaccion                                                      | string       | App Step 4 |
            | page segment             | personas                                                         | string       | App Step 4 |
            | project name             | Glomo                                                            | string       | App Step 4 |
            | site app name            | App BBVA Mexico                                                  | string       | App Step 4 |
            | business unit            | BBVA Mexico                                                      | string       | App Step 4 |
            | device mobile            | si                                                               | string       | App Step 4 |
            | user age                 | age                                                              | regexp named | App Step 4 |
            | user gender              | gender                                                           | regexp named | App Step 4 |
            | profile ID               | profileID                                                        | regexp named | App Step 4 |
            | user userState           | logado                                                           | string       | App Step 4 |
            | user segment global      | 003001                                                           | string       | App Step 4 |
            | application step         | 4 terminos y condiciones                                         | string       | App Step 4 |
            | application name         | nuevo fondo en contrato existente                                | string       | App Step 4 |
            | application type         | contratacion                                                     | string       | App Step 4 |
            | fulfillment model        | online                                                           | string       | App Step 4 |
            | global application       | fund contracting                                                 | string       | App Step 4 |
            | product primary category | inversiones                                                      | string       | App Step 4 |
            | product subtype          | fondos inversion                                                 | string       | App Step 4 |
            | product name             | bbvacor                                                          | string       | App Step 4 |
            | product amount           | 2000                                                             | string       | App Step 4 |
            | product currency         | MXN                                                              | string       | App Step 4 |
            | internal campaign        |                                                                  | empty array  | App Step 4 |
            | optimization attributes  |                                                                  | empty array  | App Step 4 |

    @ANA_EVENT_ENFC006
    @analytics @MX @vbank @backend(test)
    @web @ios @android @tmpExclude @JIRA.GLOMOMX-254311
    Scenario: OC Fund Equity Contract - App Step 5
        Given a user with the following criteria
            | criteria                 |
            | equity new fund contract |
        And the user accesses to equity new fund contract
        And the analytics interceptor service is initiated
        When the user goes to the "summary" step
        Then the analytics events contains the following variables
            | item                     | value                                             | type         | event      |
            | analytics                | analytics/glomo_base                              | json schema  | App Step 5 |
            | version DL               | 20250414_5.0                                      | string       | App Step 5 |
            | page instance ID         | de                                                | string       | App Step 5 |
            | page area                | privada                                           | string       | App Step 5 |
            | level 1                  | fondos                                            | string       | App Step 5 |
            | level 2                  | nuevo fondo                                       | string       | App Step 5 |
            | level 3                  | 5 resumen                                         | string       | App Step 5 |
            | sysEnv                   | app                                               | string       | App Step 5 |
            | channel                  | online                                            | string       | App Step 5 |
            | language                 | ES                                                | string       | App Step 5 |
            | page name                | app:privada:personas:fondos:nuevo fondo:5 resumen | string       | App Step 5 |
            | page intent              | transaccion                                       | string       | App Step 5 |
            | page segment             | personas                                          | string       | App Step 5 |
            | project name             | Glomo                                             | string       | App Step 5 |
            | site app name            | App BBVA Mexico                                   | string       | App Step 5 |
            | business unit            | BBVA Mexico                                       | string       | App Step 5 |
            | device mobile            | si                                                | string       | App Step 5 |
            | user age                 | age                                               | regexp named | App Step 5 |
            | user gender              | gender                                            | regexp named | App Step 5 |
            | profile ID               | profileID                                         | regexp named | App Step 5 |
            | user userState           | logado                                            | string       | App Step 5 |
            | user segment global      | 003001                                            | string       | App Step 5 |
            | application step         | 5 resumen                                         | string       | App Step 5 |
            | application name         | nuevo fondo en contrato existente                 | string       | App Step 5 |
            | application type         | contratacion                                      | string       | App Step 5 |
            | fulfillment model        | online                                            | string       | App Step 5 |
            | global application       | fund contracting                                  | string       | App Step 5 |
            | product primary category | inversiones                                       | string       | App Step 5 |
            | product subtype          | fondos inversion                                  | string       | App Step 5 |
            | product name             | bbvacor                                           | string       | App Step 5 |
            | product amount           | 2000                                              | string       | App Step 5 |
            | product currency         | MXN                                               | string       | App Step 5 |
            | internal campaign        |                                                   | empty array  | App Step 5 |
            | optimization attributes  |                                                   | empty array  | App Step 5 |

    @ANA_EVENT_ENFC007
    @analytics @MX @vbank @backend(test)
    @web @ios @android @tmpExclude @JIRA.GLOMOMX-254311
    Scenario: OC Fund Equity Contract - App Step 6
        Given a user with the following criteria
            | criteria                 |
            | equity new fund contract |
        And the user accesses to equity new fund contract
        And the user goes to the "summary" step
        And the analytics interceptor service is initiated
        And the user confirms the new fund purchase
        When the user confirm otp
        Then the analytics events contains the following variables
            | item                     | value                                         | type         | event      |
            | analytics                | analytics/glomo_base                          | json schema  | App Step 6 |
            | version DL               | 20250414_5.0                                  | string       | App Step 6 |
            | page instance ID         | de                                            | string       | App Step 6 |
            | page area                | privada                                       | string       | App Step 6 |
            | level 1                  | fondos                                        | string       | App Step 6 |
            | level 2                  | nuevo fondo                                   | string       | App Step 6 |
            | level 3                  | 6 otp                                         | string       | App Step 6 |
            | sysEnv                   | app                                           | string       | App Step 6 |
            | channel                  | online                                        | string       | App Step 6 |
            | language                 | ES                                            | string       | App Step 6 |
            | page name                | app:privada:personas:fondos:nuevo fondo:6 otp | string       | App Step 6 |
            | page intent              | transaccion                                   | string       | App Step 6 |
            | page segment             | personas                                      | string       | App Step 6 |
            | project name             | Glomo                                         | string       | App Step 6 |
            | site app name            | App BBVA Mexico                               | string       | App Step 6 |
            | business unit            | BBVA Mexico                                   | string       | App Step 6 |
            | device mobile            | si                                            | string       | App Step 6 |
            | user age                 | age                                           | regexp named | App Step 6 |
            | user gender              | gender                                        | regexp named | App Step 6 |
            | profile ID               | profileID                                     | regexp named | App Step 6 |
            | user userState           | logado                                        | string       | App Step 6 |
            | user segment global      | 003001                                        | string       | App Step 6 |
            | application step         | 6 otp                                         | string       | App Step 6 |
            | application name         | nuevo fondo en contrato existente             | string       | App Step 6 |
            | application type         | contratacion                                  | string       | App Step 6 |
            | fulfillment model        | online                                        | string       | App Step 6 |
            | global application       | fund contracting                              | string       | App Step 6 |
            | custom fields            | firma:token                                   | string       | App Step 6 |
            | product primary category | inversiones                                   | string       | App Step 6 |
            | product subtype          | fondos inversion                              | string       | App Step 6 |
            | product name             | bbvacor                                       | string       | App Step 6 |
            | product amount           | 2000                                          | string       | App Step 6 |
            | product currency         | MXN                                           | string       | App Step 6 |
            | internal campaign        |                                               | empty array  | App Step 6 |
            | optimization attributes  |                                               | empty array  | App Step 6 |

    @ANA_EVENT_ENFC008
    @analytics @MX @vbank @backend(test)
    @web @ios @android @tmpExclude @JIRA.GLOMOMX-254311
    Scenario: OC Fund Equity Contract - App Completed hired
        Given a user with the following criteria
            | criteria                 |
            | equity new fund contract |
        And the user accesses to equity new fund contract
        And the user goes to the "summary" step
        And the user confirms the new fund purchase
        And the analytics interceptor service is initiated
        When the user confirm otp
        Then the analytics events contains the following variables
            | item                         | value                                                  | type         | event         |
            | analytics                    | analytics/glomo_base                                   | json schema  | App Completed |
            | version DL                   | 20250414_5.0                                           | string       | App Completed |
            | page instance ID             | de                                                     | string       | App Completed |
            | page area                    | privada                                                | string       | App Completed |
            | level 1                      | fondos                                                 | string       | App Completed |
            | level 2                      | nuevo fondo                                            | string       | App Completed |
            | level 3                      | pagina exitosa                                         | string       | App Completed |
            | sysEnv                       | app                                                    | string       | App Completed |
            | channel                      | online                                                 | string       | App Completed |
            | language                     | ES                                                     | string       | App Completed |
            | page name                    | app:privada:personas:fondos:nuevo fondo:pagina exitosa | string       | App Completed |
            | page intent                  | transaccion                                            | string       | App Completed |
            | page segment                 | personas                                               | string       | App Completed |
            | project name                 | Glomo                                                  | string       | App Completed |
            | site app name                | App BBVA Mexico                                        | string       | App Completed |
            | business unit                | BBVA Mexico                                            | string       | App Completed |
            | device mobile                | si                                                     | string       | App Completed |
            | user age                     | age                                                    | regexp named | App Completed |
            | user gender                  | gender                                                 | regexp named | App Completed |
            | profile ID                   | profileID                                              | regexp named | App Completed |
            | user userState               | logado                                                 | string       | App Completed |
            | user segment global          | 003001                                                 | string       | App Completed |
            | application step             | pagina exitosa                                         | string       | App Completed |
            | application state            | contratado                                             | string       | App Completed |
            | application name             | nuevo fondo en contrato existente                      | string       | App Completed |
            | application type             | contratacion                                           | string       | App Completed |
            | application operation number | 5955141                                                | string       | App Completed |
            | fulfillment model            | online                                                 | string       | App Completed |
            | global application           | fund contracting                                       | string       | App Completed |
            | custom fields                | firma:token                                            | string       | App Completed |
            | product primary category     | inversiones                                            | string       | App Completed |
            | product subtype              | fondos inversion                                       | string       | App Completed |
            | product name                 | bbvacor                                                | string       | App Completed |
            | product amount               | 2000                                                   | string       | App Completed |
            | product currency             | MXN                                                    | string       | App Completed |
            | product state                | contratado                                             | string       | App Completed |
            | internal campaign            |                                                        | empty array  | App Completed |
            | optimization attributes      |                                                        | empty array  | App Completed |

    @ANA_EVENT_ENFC009
    @analytics @MX @vbank @backend(test)
    @web @ios @android @tmpExclude @JIRA.GLOMOMX-254311
    Scenario: OC Fund Equity Contract - App Completed in process
        Given a user with the following criteria
            | criteria                 |
            | equity new fund contract |
        And the user accesses to equity new fund contract
        And the user goes to the "summary" step
        And the user confirms the new fund purchase
        And the analytics interceptor service is initiated
        When the user confirm otp
        Then the analytics events contains the following variables
            | item                         | value                                                  | type         | event         |
            | analytics                    | analytics/glomo_base                                   | json schema  | App Completed |
            | version DL                   | 20250414_5.0                                           | string       | App Completed |
            | page instance ID             | de                                                     | string       | App Completed |
            | page area                    | privada                                                | string       | App Completed |
            | level 1                      | fondos                                                 | string       | App Completed |
            | level 2                      | nuevo fondo                                            | string       | App Completed |
            | level 3                      | pagina exitosa                                         | string       | App Completed |
            | sysEnv                       | app                                                    | string       | App Completed |
            | channel                      | online                                                 | string       | App Completed |
            | language                     | ES                                                     | string       | App Completed |
            | page name                    | app:privada:personas:fondos:nuevo fondo:pagina exitosa | string       | App Completed |
            | page intent                  | transaccion                                            | string       | App Completed |
            | page segment                 | personas                                               | string       | App Completed |
            | project name                 | Glomo                                                  | string       | App Completed |
            | site app name                | App BBVA Mexico                                        | string       | App Completed |
            | business unit                | BBVA Mexico                                            | string       | App Completed |
            | device mobile                | si                                                     | string       | App Completed |
            | user age                     | age                                                    | regexp named | App Completed |
            | user gender                  | gender                                                 | regexp named | App Completed |
            | profile ID                   | profileID                                              | regexp named | App Completed |
            | user userState               | logado                                                 | string       | App Completed |
            | user segment global          | 003001                                                 | string       | App Completed |
            | application step             | pagina exitosa                                         | string       | App Completed |
            | application state            | en revision                                            | string       | App Completed |
            | application name             | nuevo fondo en contrato existente                      | string       | App Completed |
            | application type             | contratacion                                           | string       | App Completed |
            | application operation number | 5955141                                                | string       | App Completed |
            | fulfillment model            | online                                                 | string       | App Completed |
            | global application           | fund contracting                                       | string       | App Completed |
            | custom fields                | firma:token                                            | string       | App Completed |
            | product primary category     | inversiones                                            | string       | App Completed |
            | product subtype              | fondos inversion                                       | string       | App Completed |
            | product name                 | bbvacor                                                | string       | App Completed |
            | product amount               | 2000                                                   | string       | App Completed |
            | product currency             | MXN                                                    | string       | App Completed |
            | product state                | en revision                                            | string       | App Completed |
            | internal campaign            |                                                        | empty array  | App Completed |
            | optimization attributes      |                                                        | empty array  | App Completed |

    @ANA_EVENT_ENFC010
    @analytics @MX @vbank @backend(test)
    @web @ios @android @tmpExclude @JIRA.GLOMOMX-254311
    Scenario: OC Fund Equity Contract - Page View - profit modal
        Given a user with the following criteria
            | criteria                 |
            | equity new fund contract |
        And the user accesses to equity new fund contract
        And the user goes to the "fund list" step
        And the user selects the "debt" fund category
        And the analytics interceptor service is initiated
        When the user accesses to the fund performance and detail modal
        Then the analytics events contains the following variables
            | item                    | value                                                                                           | type             | event     |
            | analytics               | analytics/glomo_base                                                                            | json schema      | Page View |
            | version DL              | 20250414_5.0                                                                                    | string           | Page View |
            | page instance ID        | de                                                                                              | string           | Page View |
            | sysEnv                  | app                                                                                             | string           | Page View |
            | page segment            | personas                                                                                        | string           | Page View |
            | page intent             | transaccion                                                                                     | string           | Page View |
            | business unit           | BBVA Mexico                                                                                     | string           | Page View |
            | page area               | privada                                                                                         | string           | Page View |
            | language                | ES                                                                                              | string           | Page View |
            | channel                 | online                                                                                          | string           | Page View |
            | site app name           | App BBVA Mexico                                                                                 | string           | Page View |
            | project name            | Glomo                                                                                           | string           | Page View |
            | level 1                 | fondos                                                                                          | string           | Page View |
            | level 2                 | nuevo fondo                                                                                     | string           | Page View |
            | level 3                 | 1 construye tu estrategia                                                                       | string           | Page View |
            | level 4                 | todos los fondos                                                                                | string           | Page View |
            | level 5                 | rendimientos                                                                                    | string           | Page View |
            | page name               | app:privada:personas:fondos:nuevo fondo:1 construye tu estrategia:todos los fondos:rendimientos | string           | Page View |
            | user age                | age                                                                                             | regexp named     | Page View |
            | user gender             | gender                                                                                          | regexp named     | Page View |
            | device mobile           | si                                                                                              | string           | Page View |
            | user userState          | logado                                                                                          | string           | Page View |
            | user segment global     | 003001                                                                                          | string           | Page View |
            | profile ID              | profileID                                                                                       | regexp named     | Page View |
            | internal campaign       |                                                                                                 | empty array      | Page View |
            | optimization attributes |                                                                                                 | empty array      | Page View |
            | application             |                                                                                                 | empty str object | Page View |
            | products attributes     |                                                                                                 | empty array      | Page View |

    @ANA_EVENT_ENFC011
    @analytics @MX @vbank @backend(test)
    @web @ios @android @tmpExclude @JIRA.GLOMOMX-254311
    Scenario: OC Fund Equity Contract - Page View - Board
        Given a user with the following criteria
            | criteria                 |
            | equity new fund contract |
        And the user accesses to equity new fund contract
        And the user goes to the "fund list" step
        And the user selects the "debt" fund category
        And the analytics interceptor service is initiated
        When the user accesses to the fund description modal
        Then the analytics events contains the following variables
            | item                    | value                                                                                          | type             | event     |
            | analytics               | analytics/glomo_base                                                                           | json schema      | Page View |
            | version DL              | 20250414_5.0                                                                                   | string           | Page View |
            | page instance ID        | de                                                                                             | string           | Page View |
            | sysEnv                  | app                                                                                            | string           | Page View |
            | page segment            | personas                                                                                       | string           | Page View |
            | page intent             | transaccion                                                                                    | string           | Page View |
            | business unit           | BBVA Mexico                                                                                    | string           | Page View |
            | page area               | privada                                                                                        | string           | Page View |
            | language                | ES                                                                                             | string           | Page View |
            | channel                 | online                                                                                         | string           | Page View |
            | site app name           | App BBVA Mexico                                                                                | string           | Page View |
            | project name            | Glomo                                                                                          | string           | Page View |
            | level 1                 | fondos                                                                                         | string           | Page View |
            | level 2                 | nuevo fondo                                                                                    | string           | Page View |
            | level 3                 | 1 construye tu estrategia                                                                      | string           | Page View |
            | level 4                 | todos los fondos                                                                               | string           | Page View |
            | level 5                 | ayuda clave                                                                                    | string           | Page View |
            | page name               | app:privada:personas:fondos:nuevo fondo:1 construye tu estrategia:todos los fondos:ayuda clave | string           | Page View |
            | user age                | age                                                                                            | regexp named     | Page View |
            | user gender             | gender                                                                                         | regexp named     | Page View |
            | device mobile           | si                                                                                             | string           | Page View |
            | user userState          | logado                                                                                         | string           | Page View |
            | user segment global     | 003001                                                                                         | string           | Page View |
            | profile ID              | profileID                                                                                      | regexp named     | Page View |
            | internal campaign       |                                                                                                | empty array      | Page View |
            | optimization attributes |                                                                                                | empty array      | Page View |
            | application             |                                                                                                | empty str object | Page View |
            | products attributes     |                                                                                                | empty array      | Page View |

    @ANA_EVENT_ENFC012
    @analytics @MX @vbank @backend(test)
    @web @ios @android @tmpExclude @JIRA.GLOMOMX-254311
    Scenario: OC Fund Equity Contract - Page View - investment amount
        Given a user with the following criteria
            | criteria                 |
            | equity new fund contract |
        And the user accesses to equity new fund contract
        And the user goes to the "amount" step
        And the user confirms an amount to invest
        And the analytics interceptor service is initiated
        When the user accesses to the investment amount modal
        Then the analytics events contains the following variables
            | item                    | value                                                                                   | type             | event     |
            | analytics               | analytics/glomo_base                                                                    | json schema      | Page View |
            | version DL              | 20250414_5.0                                                                            | string           | Page View |
            | page instance ID        | de                                                                                      | string           | Page View |
            | sysEnv                  | app                                                                                     | string           | Page View |
            | page segment            | personas                                                                                | string           | Page View |
            | page intent             | transaccion                                                                             | string           | Page View |
            | business unit           | BBVA Mexico                                                                             | string           | Page View |
            | page area               | privada                                                                                 | string           | Page View |
            | language                | ES                                                                                      | string           | Page View |
            | channel                 | online                                                                                  | string           | Page View |
            | site app name           | App BBVA Mexico                                                                         | string           | Page View |
            | project name            | Glomo                                                                                   | string           | Page View |
            | level 1                 | fondos                                                                                  | string           | Page View |
            | level 2                 | nuevo fondo                                                                             | string           | Page View |
            | level 3                 | 2 importe de inversion                                                                  | string           | Page View |
            | level 4                 | ayuda monto de inversion                                                                | string           | Page View |
            | page name               | app:privada:personas:fondos:nuevo fondo:2 importe de inversion:ayuda monto de inversion | string           | Page View |
            | user age                | age                                                                                     | regexp named     | Page View |
            | user gender             | gender                                                                                  | regexp named     | Page View |
            | device mobile           | si                                                                                      | string           | Page View |
            | user userState          | logado                                                                                  | string           | Page View |
            | user segment global     | 003001                                                                                  | string           | Page View |
            | profile ID              | profileID                                                                               | regexp named     | Page View |
            | internal campaign       |                                                                                         | empty array      | Page View |
            | optimization attributes |                                                                                         | empty array      | Page View |
            | application             |                                                                                         | empty str object | Page View |
            | products attributes     |                                                                                         | empty array      | Page View |

    @ANA_EVENT_ENFC013
    @analytics @MX @vbank @backend(test)
    @web @ios @android @tmpExclude @JIRA.GLOMOMX-254311
    Scenario: OC Fund Equity Contract - Page View - PDF
        Given a user with the following criteria
            | criteria                 |
            | equity new fund contract |
        And the user accesses to equity new fund contract
        And the user goes to the "legals" step
        And the analytics interceptor service is initiated
        When the user opens the DICI document
        Then the analytics events contains the following variables
            | item                    | value                                                                           | type             | event     |
            | analytics               | analytics/glomo_base                                                            | json schema      | Page View |
            | version DL              | 20250414_5.0                                                                    | string           | Page View |
            | page instance ID        | de                                                                              | string           | Page View |
            | sysEnv                  | app                                                                             | string           | Page View |
            | page segment            | personas                                                                        | string           | Page View |
            | page intent             | transaccion                                                                     | string           | Page View |
            | business unit           | BBVA Mexico                                                                     | string           | Page View |
            | page area               | privada                                                                         | string           | Page View |
            | language                | ES                                                                              | string           | Page View |
            | channel                 | online                                                                          | string           | Page View |
            | site app name           | App BBVA Mexico                                                                 | string           | Page View |
            | project name            | Glomo                                                                           | string           | Page View |
            | level 1                 | fondos                                                                          | string           | Page View |
            | level 2                 | nuevo fondo                                                                     | string           | Page View |
            | level 3                 | 4 terminos y condiciones                                                        | string           | Page View |
            | level 4                 | documento dici                                                                  | string           | Page View |
            | page name               | app:privada:personas:fondos:nuevo fondo:4 terminos y condiciones:documento dici | string           | Page View |
            | user age                | age                                                                             | regexp named     | Page View |
            | user gender             | gender                                                                          | regexp named     | Page View |
            | device mobile           | si                                                                              | string           | Page View |
            | user userState          | logado                                                                          | string           | Page View |
            | user segment global     | 003001                                                                          | string           | Page View |
            | profile ID              | profileID                                                                       | regexp named     | Page View |
            | internal campaign       |                                                                                 | empty array      | Page View |
            | optimization attributes |                                                                                 | empty array      | Page View |
            | application             |                                                                                 | empty str object | Page View |
            | products attributes     |                                                                                 | empty array      | Page View |

    @ANA_EVENT_ENFC014
    @analytics @MX @vbank @backend(test)
    @web @ios @android @tmpExclude @JIRA.GLOMOMX-254311
    Scenario: OC Fund Equity Contract - Page View - PDF Notice of Privacy
        Given a user with the following criteria
            | criteria                 |
            | equity new fund contract |
        And the user accesses to equity new fund contract
        And the user goes to the "legals" step
        And the analytics interceptor service is initiated
        When the user accesses to the privacy notice modal
        Then the analytics events contains the following variables
            | item                    | value                                                                                | type             | event     |
            | analytics               | analytics/glomo_base                                                                 | json schema      | Page View |
            | version DL              | 20250414_5.0                                                                         | string           | Page View |
            | page instance ID        | de                                                                                   | string           | Page View |
            | sysEnv                  | app                                                                                  | string           | Page View |
            | page segment            | personas                                                                             | string           | Page View |
            | page intent             | transaccion                                                                          | string           | Page View |
            | business unit           | BBVA Mexico                                                                          | string           | Page View |
            | page area               | privada                                                                              | string           | Page View |
            | language                | ES                                                                                   | string           | Page View |
            | channel                 | online                                                                               | string           | Page View |
            | site app name           | App BBVA Mexico                                                                      | string           | Page View |
            | project name            | Glomo                                                                                | string           | Page View |
            | level 1                 | fondos                                                                               | string           | Page View |
            | level 2                 | nuevo fondo                                                                          | string           | Page View |
            | level 3                 | 4 terminos y condiciones                                                             | string           | Page View |
            | level 4                 | aviso de privacidad                                                                  | string           | Page View |
            | page name               | app:privada:personas:fondos:nuevo fondo:4 terminos y condiciones:aviso de privacidad | string           | Page View |
            | user age                | age                                                                                  | regexp named     | Page View |
            | user gender             | gender                                                                               | regexp named     | Page View |
            | device mobile           | si                                                                                   | string           | Page View |
            | user userState          | logado                                                                               | string           | Page View |
            | user segment global     | 003001                                                                               | string           | Page View |
            | profile ID              | profileID                                                                            | regexp named     | Page View |
            | internal campaign       |                                                                                      | empty array      | Page View |
            | optimization attributes |                                                                                      | empty array      | Page View |
            | application             |                                                                                      | empty str object | Page View |
            | products attributes     |                                                                                      | empty array      | Page View |

    @ANA_EVENT_ENFC015
    @analytics @MX @vbank @backend(test)
    @web @ios @android @tmpExclude @JIRA.GLOMOMX-254311
    Scenario: OC Fund Equity Contract - Page View - types of fund
        Given a user with the following criteria
            | criteria                 |
            | equity new fund contract |
        And the user accesses to equity new fund contract
        And the user goes to the "fund list" step
        And the analytics interceptor service is initiated
        And the user selects the "debt" fund category
        When the user selects the debt fund tab category
        Then the analytics events contains the following variables
            | item                    | value                                                                              | type             | event     |
            | analytics               | analytics/glomo_base                                                               | json schema      | Page View |
            | version DL              | 20250414_5.0                                                                       | string           | Page View |
            | page instance ID        | de                                                                                 | string           | Page View |
            | sysEnv                  | app                                                                                | string           | Page View |
            | page segment            | personas                                                                           | string           | Page View |
            | page intent             | transaccion                                                                        | string           | Page View |
            | business unit           | BBVA Mexico                                                                        | string           | Page View |
            | page area               | privada                                                                            | string           | Page View |
            | language                | ES                                                                                 | string           | Page View |
            | channel                 | online                                                                             | string           | Page View |
            | site app name           | App BBVA Mexico                                                                    | string           | Page View |
            | project name            | Glomo                                                                              | string           | Page View |
            | level 1                 | fondos                                                                             | string           | Page View |
            | level 2                 | nuevo fondo                                                                        | string           | Page View |
            | level 3                 | 1 construye tu estrategia                                                          | string           | Page View |
            | level 4                 | todos los fondos                                                                   | string           | Page View |
            | page name               | app:privada:personas:fondos:nuevo fondo:1 construye tu estrategia:todos los fondos | string           | Page View |
            | user age                | age                                                                                | regexp named     | Page View |
            | user gender             | gender                                                                             | regexp named     | Page View |
            | device mobile           | si                                                                                 | string           | Page View |
            | user userState          | logado                                                                             | string           | Page View |
            | user segment global     | 003001                                                                             | string           | Page View |
            | profile ID              | profileID                                                                          | regexp named     | Page View |
            | internal campaign       |                                                                                    | empty array      | Page View |
            | optimization attributes |                                                                                    | empty array      | Page View |
            | application             |                                                                                    | empty str object | Page View |
            | products attributes     |                                                                                    | empty array      | Page View |

    @ANA_EVENT_ENFC016
    @analytics @MX @vbank @backend(test)
    @web @ios @android @tmpExclude @JIRA.GLOMOMX-254311
    Scenario: OC Fund Equity Contract - Page View - fund not avaible
        Given a user with the following criteria
            | criteria                 |
            | equity new fund contract |
        And the user accesses to equity new fund contract
        And the user goes to the "fund list" step
        And the user selects the "debt" fund category
        And the analytics interceptor service is initiated
        When the user accesses to the fund performance and detail modal
        Then the analytics events contains the following variables
            | item                    | value                                                             | type             | event     |
            | analytics               | analytics/glomo_base                                              | json schema      | Page View |
            | version DL              | 20250414_5.0                                                      | string           | Page View |
            | page instance ID        | de                                                                | string           | Page View |
            | sysEnv                  | app                                                               | string           | Page View |
            | page segment            | personas                                                          | string           | Page View |
            | page intent             | transaccion                                                       | string           | Page View |
            | business unit           | BBVA Mexico                                                       | string           | Page View |
            | page area               | privada                                                           | string           | Page View |
            | language                | ES                                                                | string           | Page View |
            | channel                 | online                                                            | string           | Page View |
            | site app name           | App BBVA Mexico                                                   | string           | Page View |
            | project name            | Glomo                                                             | string           | Page View |
            | level 1                 | fondos                                                            | string           | Page View |
            | level 2                 | nuevo fondo                                                       | string           | Page View |
            | level 3                 | error fondo no disponible                                         | string           | Page View |
            | error page              | error fondo no disponible                                         | string           | Page View |
            | page name               | app:privada:personas:fondos:nuevo fondo:error fondo no disponible | string           | Page View |
            | user age                | age                                                               | regexp named     | Page View |
            | user gender             | gender                                                            | regexp named     | Page View |
            | device mobile           | si                                                                | string           | Page View |
            | user userState          | logado                                                            | string           | Page View |
            | user segment global     | 003001                                                            | string           | Page View |
            | profile ID              | profileID                                                         | regexp named     | Page View |
            | internal campaign       |                                                                   | empty array      | Page View |
            | optimization attributes |                                                                   | empty array      | Page View |
            | application             |                                                                   | empty str object | Page View |
            | products attributes     |                                                                   | empty array      | Page View |

    @ANA_EVENT_ENFC017
    @analytics @MX @vbank @backend(test)
    @web @ios @android @tmpExclude @JIRA.GLOMOMX-254311
    Scenario: OC Fund Equity Contract - Page View - service failed
        Given a user with the following criteria
            | criteria                 |
            | equity new fund contract |
        And the user accesses to equity new fund contract
        And the user goes to the "fund list" step
        And the analytics interceptor service is initiated
        When the user retries the fund operation modal
        Then the analytics events contains the following variables
            | item                    | value                                                                | type             | event     |
            | analytics               | analytics/glomo_base                                                 | json schema      | Page View |
            | version DL              | 20250414_5.0                                                         | string           | Page View |
            | page instance ID        | de                                                                   | string           | Page View |
            | sysEnv                  | app                                                                  | string           | Page View |
            | page segment            | personas                                                             | string           | Page View |
            | page intent             | transaccion                                                          | string           | Page View |
            | business unit           | BBVA Mexico                                                          | string           | Page View |
            | page area               | privada                                                              | string           | Page View |
            | language                | ES                                                                   | string           | Page View |
            | channel                 | online                                                               | string           | Page View |
            | site app name           | App BBVA Mexico                                                      | string           | Page View |
            | project name            | Glomo                                                                | string           | Page View |
            | level 1                 | fondos                                                               | string           | Page View |
            | level 2                 | nuevo fondo                                                          | string           | Page View |
            | level 3                 | error servicio no disponible                                         | string           | Page View |
            | error page              | error servicio no disponible                                         | string           | Page View |
            | page name               | app:privada:personas:fondos:nuevo fondo:error servicio no disponible | string           | Page View |
            | user age                | age                                                                  | regexp named     | Page View |
            | user gender             | gender                                                               | regexp named     | Page View |
            | device mobile           | si                                                                   | string           | Page View |
            | user userState          | logado                                                               | string           | Page View |
            | user segment global     | 003001                                                               | string           | Page View |
            | profile ID              | profileID                                                            | regexp named     | Page View |
            | internal campaign       |                                                                      | empty array      | Page View |
            | optimization attributes |                                                                      | empty array      | Page View |
            | application             |                                                                      | empty str object | Page View |
            | products attributes     |                                                                      | empty array      | Page View |

    @ANA_EVENT_ENFC018
    @analytics @MX @vbank @backend(test)
    @web @ios @android @tmpExclude @JIRA.GLOMOMX-254311
    Scenario: OC Fund Equity Contract - Page View - Investment in all funds
        Given a user with the following criteria
            | criteria                 |
            | equity new fund contract |
        And the user accesses to equity
        And the analytics interceptor service is initiated
        When the user accesses to equity new fund contract
        Then the analytics events contains the following variables
            | item                    | value                                                                     | type             | event     |
            | analytics               | analytics/glomo_base                                                      | json schema      | Page View |
            | version DL              | 20250414_5.0                                                              | string           | Page View |
            | page instance ID        | de                                                                        | string           | Page View |
            | sysEnv                  | app                                                                       | string           | Page View |
            | page segment            | personas                                                                  | string           | Page View |
            | page intent             | informacion                                                               | string           | Page View |
            | business unit           | BBVA Mexico                                                               | string           | Page View |
            | page area               | privada                                                                   | string           | Page View |
            | language                | ES                                                                        | string           | Page View |
            | channel                 | online                                                                    | string           | Page View |
            | site app name           | App BBVA Mexico                                                           | string           | Page View |
            | project name            | Glomo                                                                     | string           | Page View |
            | level 1                 | fondos                                                                    | string           | Page View |
            | level 2                 | nuevo fondo                                                               | string           | Page View |
            | level 3                 | ya invertiste en todos los fondos                                         | string           | Page View |
            | page name               | app:privada:personas:fondos:nuevo fondo:ya invertiste en todos los fondos | string           | Page View |
            | user age                | age                                                                       | regexp named     | Page View |
            | user gender             | gender                                                                    | regexp named     | Page View |
            | device mobile           | si                                                                        | string           | Page View |
            | user userState          | logado                                                                    | string           | Page View |
            | user segment global     | 003001                                                                    | string           | Page View |
            | profile ID              | profileID                                                                 | regexp named     | Page View |
            | internal campaign       |                                                                           | empty array      | Page View |
            | optimization attributes |                                                                           | empty array      | Page View |
            | application             |                                                                           | empty str object | Page View |
            | products attributes     |                                                                           | empty array      | Page View |

@fundAddNewContractAnalytics
Feature: Analytics - Fund add new contract

    @ANA_EVENT_FANC001
    @analytics
    @MX
    @web
    @vbank
    @backend(test)
    @web-done
    Scenario: Fund Add New Contract - App Page Visit
        Given a user with the following criteria
            | criteria         |
            | investment funds |
            | multiple funds   |
        And the user accesses to dashboard
        And the analytics interceptor service is initiated
        When the user accesses to the Funds add new contract screen
        Then the analytics events contains the following variables
            | item                     | value                                                     | type         | event          |
            | analytics                | analytics/glomo_base                                      | json schema  | App Page Visit |
            | version DL               | 20250414_5.0                                              | string       | App Page Visit |
            | page name                | app:privada:personas:fondos:fondos subsecuentes:1 detalle | string       | App Page Visit |
            | level 1                  | fondos                                                    | string       | App Page Visit |
            | level 2                  | fondos subsecuentes                                       | string       | App Page Visit |
            | level 3                  | 1 detalle                                                 | string       | App Page Visit |
            | language                 | ES                                                        | string       | App Page Visit |
            | page area                | privada                                                   | string       | App Page Visit |
            | page intent              | transaccion                                               | string       | App Page Visit |
            | channel                  | online                                                    | string       | App Page Visit |
            | page instance ID         | de                                                        | string       | App Page Visit |
            | page info version        | appVersion                                                | regexp named | App Page Visit |
            | page segment             | personas                                                  | string       | App Page Visit |
            | sysEnv                   | app                                                       | string       | App Page Visit |
            | business unit            | BBVA Mexico                                               | string       | App Page Visit |
            | site app name            | App BBVA Mexico                                           | string       | App Page Visit |
            | project name             | Glomo                                                     | string       | App Page Visit |
            | device mobile            | si                                                        | string       | App Page Visit |
            | user userState           | logado                                                    | string       | App Page Visit |
            | user segment global      | 003001                                                    | string       | App Page Visit |
            | profile ID               | profileID                                                 | regexp named | App Page Visit |
            | user age                 | age                                                       | regexp named | App Page Visit |
            | user gender              | gender                                                    | regexp named | App Page Visit |
            | global application       | subsecuent purchase                                       | string       | App Page Visit |
            | application name         | fondos subsecuentes                                       | string       | App Page Visit |
            | application type         | contratacion                                              | string       | App Page Visit |
            | application step         | 1 detalle                                                 | string       | App Page Visit |
            | fulfillment model        | online                                                    | string       | App Page Visit |
            | product primary category | inversiones                                               | string       | App Page Visit |
            | product subtype          | fondos inversion                                          | string       | App Page Visit |
            | internal campaign        |                                                           | empty array  | App Page Visit |
            | optimization attributes  |                                                           | empty array  | App Page Visit |

    @ANA_EVENT_FANC002
    @analytics
    @MX
    @web
    @vbank
    @backend(test)
    @web-done
    Scenario: Fund Add New Contract - App Step 2
        Given a user with the following criteria
            | criteria         |
            | investment funds |
            | multiple funds   |
        And the user accesses to the Funds add new contract screen
        And the analytics interceptor service is initiated
        When the user goes to the "account" step
        Then the analytics events contains the following variables
            | item                     | value                                                             | type         | event      |
            | analytics                | analytics/glomo_base                                              | json schema  | App Step 2 |
            | version DL               | 20250414_5.0                                                      | string       | App Step 2 |
            | page name                | app:privada:personas:fondos:fondos subsecuentes:2 cuenta asociada | string       | App Step 2 |
            | level 1                  | fondos                                                            | string       | App Step 2 |
            | level 2                  | fondos subsecuentes                                               | string       | App Step 2 |
            | level 3                  | 2 cuenta asociada                                                 | string       | App Step 2 |
            | language                 | ES                                                                | string       | App Step 2 |
            | page area                | privada                                                           | string       | App Step 2 |
            | page intent              | transaccion                                                       | string       | App Step 2 |
            | channel                  | online                                                            | string       | App Step 2 |
            | page instance ID         | de                                                                | string       | App Step 2 |
            | page info version        | appVersion                                                        | regexp named | App Step 2 |
            | page segment             | personas                                                          | string       | App Step 2 |
            | sysEnv                   | app                                                               | string       | App Step 2 |
            | business unit            | BBVA Mexico                                                       | string       | App Step 2 |
            | site app name            | App BBVA Mexico                                                   | string       | App Step 2 |
            | project name             | Glomo                                                             | string       | App Step 2 |
            | device mobile            | si                                                                | string       | App Step 2 |
            | user userState           | logado                                                            | string       | App Step 2 |
            | user segment global      | 003001                                                            | string       | App Step 2 |
            | profile ID               | profileID                                                         | regexp named | App Step 2 |
            | user age                 | age                                                               | regexp named | App Step 2 |
            | user gender              | gender                                                            | regexp named | App Step 2 |
            | global application       | subsecuent purchase                                               | string       | App Step 2 |
            | application name         | fondos subsecuentes                                               | string       | App Step 2 |
            | application type         | contratacion                                                      | string       | App Step 2 |
            | application step         | 2 cuenta asociada                                                 | string       | App Step 2 |
            | fulfillment model        | online                                                            | string       | App Step 2 |
            | product primary category | inversiones                                                       | string       | App Step 2 |
            | product subtype          | fondos inversion                                                  | string       | App Step 2 |
            | internal campaign        |                                                                   | empty array  | App Step 2 |
            | optimization attributes  |                                                                   | empty array  | App Step 2 |

    @ANA_EVENT_FANC003
    @analytics
    @MX
    @web
    @vbank
    @backend(test)
    @web-done
    Scenario: Fund Add New Contract - App Step 3
        Given a user with the following criteria
            | criteria         |
            | investment funds |
            | multiple funds   |
        And the user accesses to the Funds add new contract screen
        And the analytics interceptor service is initiated
        When the user goes to the "fund list" step
        Then the analytics events contains the following variables
            | item                     | value                                                             | type         | event      |
            | analytics                | analytics/glomo_base                                              | json schema  | App Step 3 |
            | version DL               | 20250414_5.0                                                      | string       | App Step 3 |
            | page name                | app:privada:personas:fondos:fondos subsecuentes:3 seleccion fondo | string       | App Step 3 |
            | level 1                  | fondos                                                            | string       | App Step 3 |
            | level 2                  | fondos subsecuentes                                               | string       | App Step 3 |
            | level 3                  | 3 seleccion fondo                                                 | string       | App Step 3 |
            | language                 | ES                                                                | string       | App Step 3 |
            | page area                | privada                                                           | string       | App Step 3 |
            | page intent              | transaccion                                                       | string       | App Step 3 |
            | channel                  | online                                                            | string       | App Step 3 |
            | page instance ID         | de                                                                | string       | App Step 3 |
            | page info version        | appVersion                                                        | regexp named | App Step 3 |
            | page segment             | personas                                                          | string       | App Step 3 |
            | sysEnv                   | app                                                               | string       | App Step 3 |
            | business unit            | BBVA Mexico                                                       | string       | App Step 3 |
            | site app name            | App BBVA Mexico                                                   | string       | App Step 3 |
            | project name             | Glomo                                                             | string       | App Step 3 |
            | device mobile            | si                                                                | string       | App Step 3 |
            | user userState           | logado                                                            | string       | App Step 3 |
            | user segment global      | 003001                                                            | string       | App Step 3 |
            | profile ID               | profileID                                                         | regexp named | App Step 3 |
            | user age                 | age                                                               | regexp named | App Step 3 |
            | user gender              | gender                                                            | regexp named | App Step 3 |
            | global application       | subsecuent purchase                                               | string       | App Step 3 |
            | application name         | fondos subsecuentes                                               | string       | App Step 3 |
            | application type         | contratacion                                                      | string       | App Step 3 |
            | application step         | 3 seleccion fondo                                                 | string       | App Step 3 |
            | fulfillment model        | online                                                            | string       | App Step 3 |
            | product primary category | inversiones                                                       | string       | App Step 3 |
            | product subtype          | fondos inversion                                                  | string       | App Step 3 |
            | internal campaign        |                                                                   | empty array  | App Step 3 |
            | optimization attributes  |                                                                   | empty array  | App Step 3 |

    @ANA_EVENT_FANC004
    @analytics
    @MX
    @web
    @vbank
    @backend(test)
    @web-done
    @manual @JIRA.GLOMOMX-245990
    Scenario: Fund Add New Contract - App Step 4
        Given a user with the following criteria
            | criteria         |
            | investment funds |
            | multiple funds   |
        And the user accesses to the Funds add new contract screen
        And the analytics interceptor service is initiated
        When the user goes to the "amount" step
        Then the analytics events contains the following variables
            | item                     | value                                                     | type         | event      |
            | analytics                | analytics/glomo_base                                      | json schema  | App Step 4 |
            | version DL               | 20250414_5.0                                              | string       | App Step 4 |
            | page name                | app:privada:personas:fondos:fondos subsecuentes:4 importe | string       | App Step 4 |
            | level 1                  | fondos                                                    | string       | App Step 4 |
            | level 2                  | fondos subsecuentes                                       | string       | App Step 4 |
            | level 3                  | 4 importe                                                 | string       | App Step 4 |
            | language                 | ES                                                        | string       | App Step 4 |
            | page area                | privada                                                   | string       | App Step 4 |
            | page intent              | transaccion                                               | string       | App Step 4 |
            | channel                  | online                                                    | string       | App Step 4 |
            | page instance ID         | de                                                        | string       | App Step 4 |
            | page info version        | appVersion                                                | regexp named | App Step 4 |
            | page segment             | personas                                                  | string       | App Step 4 |
            | sysEnv                   | app                                                       | string       | App Step 4 |
            | business unit            | BBVA Mexico                                               | string       | App Step 4 |
            | site app name            | App BBVA Mexico                                           | string       | App Step 4 |
            | project name             | Glomo                                                     | string       | App Step 4 |
            | device mobile            | si                                                        | string       | App Step 4 |
            | user userState           | logado                                                    | string       | App Step 4 |
            | user segment global      | 003001                                                    | string       | App Step 4 |
            | profile ID               | profileID                                                 | regexp named | App Step 4 |
            | user age                 | age                                                       | regexp named | App Step 4 |
            | user gender              | gender                                                    | regexp named | App Step 4 |
            | global application       | subsecuent purchase                                       | string       | App Step 4 |
            | application name         | fondos subsecuentes                                       | string       | App Step 4 |
            | application type         | contratacion                                              | string       | App Step 4 |
            | application step         | 4 importe                                                 | string       | App Step 4 |
            | fulfillment model        | online                                                    | string       | App Step 4 |
            | product primary category | inversiones                                               | string       | App Step 4 |
            | product subtype          | fondos inversion                                          | string       | App Step 4 |
            | product name             | b+rvus2                                                   | string       | App Step 4 |
            | internal campaign        |                                                           | empty array  | App Step 4 |
            | optimization attributes  |                                                           | empty array  | App Step 4 |

    @ANA_EVENT_FANC005
    @analytics
    @MX
    @web
    @vbank
    @backend(test)
    @web-done
    @manual @JIRA.GLOMOMX-245990
    Scenario: Fund Add New Contract - App Step 5
        Given a user with the following criteria
            | criteria         |
            | investment funds |
            | multiple funds   |
        And the user accesses to the Funds add new contract screen
        And the analytics interceptor service is initiated
        When the user goes to the "terms and conditions" step
        Then the analytics events contains the following variables
            | item                     | value                                                                    | type         | event      |
            | analytics                | analytics/glomo_base                                                     | json schema  | App Step 5 |
            | version DL               | 20250414_5.0                                                             | string       | App Step 5 |
            | page name                | app:privada:personas:fondos:fondos subsecuentes:5 terminos y condiciones | string       | App Step 5 |
            | level 1                  | fondos                                                                   | string       | App Step 5 |
            | level 2                  | fondos subsecuentes                                                      | string       | App Step 5 |
            | level 3                  | 5 terminos y condiciones                                                 | string       | App Step 5 |
            | language                 | ES                                                                       | string       | App Step 5 |
            | page area                | privada                                                                  | string       | App Step 5 |
            | page intent              | transaccion                                                              | string       | App Step 5 |
            | channel                  | online                                                                   | string       | App Step 5 |
            | page instance ID         | de                                                                       | string       | App Step 5 |
            | page info version        | appVersion                                                               | regexp named | App Step 5 |
            | page segment             | personas                                                                 | string       | App Step 5 |
            | sysEnv                   | app                                                                      | string       | App Step 5 |
            | business unit            | BBVA Mexico                                                              | string       | App Step 5 |
            | site app name            | App BBVA Mexico                                                          | string       | App Step 5 |
            | project name             | Glomo                                                                    | string       | App Step 5 |
            | device mobile            | si                                                                       | string       | App Step 5 |
            | user userState           | logado                                                                   | string       | App Step 5 |
            | user segment global      | 003001                                                                   | string       | App Step 5 |
            | profile ID               | profileID                                                                | regexp named | App Step 5 |
            | user age                 | age                                                                      | regexp named | App Step 5 |
            | user gender              | gender                                                                   | regexp named | App Step 5 |
            | global application       | subsecuent purchase                                                      | string       | App Step 5 |
            | application name         | fondos subsecuentes                                                      | string       | App Step 5 |
            | application type         | contratacion                                                             | string       | App Step 5 |
            | application step         | 5 terminos y condiciones                                                 | string       | App Step 5 |
            | fulfillment model        | online                                                                   | string       | App Step 5 |
            | product primary category | inversiones                                                              | string       | App Step 5 |
            | product subtype          | fondos inversion                                                         | string       | App Step 5 |
            | product name             | b+rvus2                                                                  | string       | App Step 5 |
            | product amount           | 500                                                                      | string       | App Step 5 |
            | product currency         | MXN                                                                      | string       | App Step 5 |
            | internal campaign        |                                                                          | empty array  | App Step 5 |
            | optimization attributes  |                                                                          | empty array  | App Step 5 |

    @ANA_EVENT_FANC006
    @analytics
    @MX
    @web
    @vbank
    @backend(test)
    @web-done
    @manual @JIRA.GLOMOMX-245990
    Scenario: Fund Add New Contract - App Step 6
        Given a user with the following criteria
            | criteria         |
            | investment funds |
            | multiple funds   |
        And the user accesses to the Funds add new contract screen
        And the analytics interceptor service is initiated
        When the user goes to the "summary" step
        Then the analytics events contains the following variables
            | item                     | value                                                          | type         | event      |
            | analytics                | analytics/glomo_base                                           | json schema  | App Step 6 |
            | version DL               | 20250414_5.0                                                   | string       | App Step 6 |
            | page name                | app:privada:personas:fondos:fondos subsecuentes:6 confirmacion | string       | App Step 6 |
            | level 1                  | fondos                                                         | string       | App Step 6 |
            | level 2                  | fondos subsecuentes                                            | string       | App Step 6 |
            | level 3                  | 6 confirmacion                                                 | string       | App Step 6 |
            | language                 | ES                                                             | string       | App Step 6 |
            | page area                | privada                                                        | string       | App Step 6 |
            | page intent              | transaccion                                                    | string       | App Step 6 |
            | channel                  | online                                                         | string       | App Step 6 |
            | page instance ID         | de                                                             | string       | App Step 6 |
            | page info version        | appVersion                                                     | regexp named | App Step 6 |
            | page segment             | personas                                                       | string       | App Step 6 |
            | sysEnv                   | app                                                            | string       | App Step 6 |
            | business unit            | BBVA Mexico                                                    | string       | App Step 6 |
            | site app name            | App BBVA Mexico                                                | string       | App Step 6 |
            | project name             | Glomo                                                          | string       | App Step 6 |
            | device mobile            | si                                                             | string       | App Step 6 |
            | user userState           | logado                                                         | string       | App Step 6 |
            | user segment global      | 003001                                                         | string       | App Step 6 |
            | profile ID               | profileID                                                      | regexp named | App Step 6 |
            | user age                 | age                                                            | regexp named | App Step 6 |
            | user gender              | gender                                                         | regexp named | App Step 6 |
            | global application       | subsecuent purchase                                            | string       | App Step 6 |
            | application name         | fondos subsecuentes                                            | string       | App Step 6 |
            | application type         | contratacion                                                   | string       | App Step 6 |
            | application step         | 6 confirmacion                                                 | string       | App Step 6 |
            | fulfillment model        | online                                                         | string       | App Step 6 |
            | product primary category | inversiones                                                    | string       | App Step 6 |
            | product subtype          | fondos inversion                                               | string       | App Step 6 |
            | product name             | b+rvus2                                                        | string       | App Step 6 |
            | product amount           | 500                                                            | string       | App Step 6 |
            | product currency         | MXN                                                            | string       | App Step 6 |
            | internal campaign        |                                                                | empty array  | App Step 6 |
            | optimization attributes  |                                                                | empty array  | App Step 6 |

    @ANA_EVENT_FANC007
    @analytics
    @MX
    @web
    @vbank
    @backend(test)
    @web-done
    @manual @JIRA.GLOMOMX-245990
    Scenario: Fund Add New Contract - App Step 7
        Given a user with the following criteria
            | criteria         |
            | investment funds |
            | multiple funds   |
        And the user accesses to the Funds add new contract screen
        And the analytics interceptor service is initiated
        When the user confirms to add a new fund contract
        Then the analytics events contains the following variables
            | item                     | value                                                 | type         | event      |
            | analytics                | analytics/glomo_base                                  | json schema  | App Step 7 |
            | version DL               | 20250414_5.0                                          | string       | App Step 7 |
            | page name                | app:privada:personas:fondos:fondos subsecuentes:7 otp | string       | App Step 7 |
            | level 1                  | fondos                                                | string       | App Step 7 |
            | level 2                  | fondos subsecuentes                                   | string       | App Step 7 |
            | level 3                  | 7 otp                                                 | string       | App Step 7 |
            | language                 | ES                                                    | string       | App Step 7 |
            | page area                | privada                                               | string       | App Step 7 |
            | page intent              | transaccion                                           | string       | App Step 7 |
            | channel                  | online                                                | string       | App Step 7 |
            | page instance ID         | de                                                    | string       | App Step 7 |
            | page info version        | appVersion                                            | regexp named | App Step 7 |
            | page segment             | personas                                              | string       | App Step 7 |
            | sysEnv                   | app                                                   | string       | App Step 7 |
            | business unit            | BBVA Mexico                                           | string       | App Step 7 |
            | site app name            | App BBVA Mexico                                       | string       | App Step 7 |
            | project name             | Glomo                                                 | string       | App Step 7 |
            | device mobile            | si                                                    | string       | App Step 7 |
            | user userState           | logado                                                | string       | App Step 7 |
            | user segment global      | 003001                                                | string       | App Step 7 |
            | profile ID               | profileID                                             | regexp named | App Step 7 |
            | user age                 | age                                                   | regexp named | App Step 7 |
            | user gender              | gender                                                | regexp named | App Step 7 |
            | global application       | subsecuent purchase                                   | string       | App Step 7 |
            | application name         | fondos subsecuentes                                   | string       | App Step 7 |
            | application type         | contratacion                                          | string       | App Step 7 |
            | application step         | 7 otp                                                 | string       | App Step 7 |
            | fulfillment model        | online                                                | string       | App Step 7 |
            | custom fields            |                                                       | string       | App Step 7 |
            | product primary category | inversiones                                           | string       | App Step 7 |
            | product subtype          | fondos inversion                                      | string       | App Step 7 |
            | product name             | b+rvus2                                               | string       | App Step 7 |
            | product amount           | 500                                                   | string       | App Step 7 |
            | product currency         | MXN                                                   | string       | App Step 7 |
            | internal campaign        |                                                       | empty array  | App Step 7 |
            | optimization attributes  |                                                       | empty array  | App Step 7 |

    @ANA_EVENT_FANC008
    @analytics
    @MX
    @web
    @vbank
    @backend(test)
    @web-done
    @manual @JIRA.GLOMOMX-245990
    Scenario: Fund Add New Contract - App Completed
        Given a user with the following criteria
            | criteria         |
            | investment funds |
            | multiple funds   |
        And the user accesses to dashboard
        And the analytics interceptor service is initiated
        When the user successfully add a new fund contract
        Then the analytics events contains the following variables
            | item                         | value                                                          | type         | event         |
            | analytics                    | analytics/glomo_base                                           | json schema  | App Completed |
            | version DL                   | 20250414_5.0                                                   | string       | App Completed |
            | page name                    | app:privada:personas:fondos:fondos subsecuentes:pagina exitosa | string       | App Completed |
            | level 1                      | fondos                                                         | string       | App Completed |
            | level 2                      | fondos subsecuentes                                            | string       | App Completed |
            | level 3                      | pagina exitosa                                                 | string       | App Completed |
            | language                     | ES                                                             | string       | App Completed |
            | page area                    | privada                                                        | string       | App Completed |
            | page intent                  | transaccion                                                    | string       | App Completed |
            | channel                      | online                                                         | string       | App Completed |
            | page instance ID             | de                                                             | string       | App Completed |
            | page info version            | appVersion                                                     | regexp named | App Completed |
            | page segment                 | personas                                                       | string       | App Completed |
            | sysEnv                       | app                                                            | string       | App Completed |
            | business unit                | BBVA Mexico                                                    | string       | App Completed |
            | site app name                | App BBVA Mexico                                                | string       | App Completed |
            | project name                 | Glomo                                                          | string       | App Completed |
            | device mobile                | si                                                             | string       | App Completed |
            | user userState               | logado                                                         | string       | App Completed |
            | user segment global          | 003001                                                         | string       | App Completed |
            | profile ID                   | profileID                                                      | regexp named | App Completed |
            | user age                     | age                                                            | regexp named | App Completed |
            | user gender                  | gender                                                         | regexp named | App Completed |
            | global application           | subsecuent purchase                                            | string       | App Completed |
            | application name             | fondos subsecuentes                                            | string       | App Completed |
            | application type             | contratacion                                                   | string       | App Completed |
            | application step             | pagina exitosa                                                 | string       | App Completed |
            | fulfillment model            | online                                                         | string       | App Completed |
            | custom fields                |                                                                | string       | App Completed |
            | application state            | contratado                                                     | string       | App Completed |
            | application operation number | 0070765976                                                     | string       | App Completed |
            | product primary category     | inversiones                                                    | string       | App Completed |
            | product subtype              | fondos inversion                                               | string       | App Completed |
            | product name                 | b+rvus2                                                        | string       | App Completed |
            | product amount               | 500                                                            | string       | App Completed |
            | product currency             | MXN                                                            | string       | App Completed |
            | product state                | contratado                                                     | string       | App Completed |
            | internal campaign            |                                                                | empty array  | App Completed |
            | optimization attributes      |                                                                | empty array  | App Completed |

    @ANA_EVENT_FANC009
    @analytics
    @MX
    @web
    @vbank
    @backend(test)
    @web-done
    @manual @JIRA.GLOMOMX-245990
    Scenario: Fund Add New Contract - Huella Simulation
        Given a user with the following criteria
            | criteria         |
            | investment funds |
            | multiple funds   |
        And the user accesses to the Funds add new contract screen
        And the analytics interceptor service is initiated
        When the user completes a simulation in the Funds add new contract screen
        Then the analytics events contains the following variables
            | item                    | value                                                                | type             | event     |
            | analytics               | analytics/glomo_base                                                 | json schema      | Page View |
            | version DL              | 20250414_5.0                                                         | string           | Page View |
            | page name               | app:privada:personas:fondos:fondos subsecuentes:5 calculo de titulos | string           | Page View |
            | level 1                 | fondos                                                               | string           | Page View |
            | level 2                 | fondos subsecuentes                                                  | string           | Page View |
            | level 3                 | 5 calculo de titulos                                                 | string           | Page View |
            | language                | ES                                                                   | string           | Page View |
            | page area               | privada                                                              | string           | Page View |
            | page intent             | transaccion                                                          | string           | Page View |
            | channel                 | online                                                               | string           | Page View |
            | page instance ID        | de                                                                   | string           | Page View |
            | page info version       | appVersion                                                           | regexp named     | Page View |
            | page segment            | personas                                                             | string           | Page View |
            | sysEnv                  | app                                                                  | string           | Page View |
            | business unit           | BBVA Mexico                                                          | string           | Page View |
            | site app name           | App BBVA Mexico                                                      | string           | Page View |
            | project name            | Glomo                                                                | string           | Page View |
            | device mobile           | si                                                                   | string           | Page View |
            | user userState          | logado                                                               | string           | Page View |
            | user segment global     | 003001                                                               | string           | Page View |
            | profile ID              | profileID                                                            | regexp named     | Page View |
            | user age                | age                                                                  | regexp named     | Page View |
            | user gender             | gender                                                               | regexp named     | Page View |
            | user country            | lettersAndSpaceOrEmpty                                               | regexp named     | Page View |
            | user state              | lettersAndSpaceOrEmpty                                               | regexp named     | Page View |
            | internal campaign       |                                                                      | empty array      | Page View |
            | optimization attributes |                                                                      | empty array      | Page View |
            | application             |                                                                      | empty str object | Page View |
            | products attributes     |                                                                      | empty array      | Page View |

    @ANA_EVENT_FANC010
    @analytics
    @MX
    @web
    @vbank
    @backend(test)
    @web-done
    Scenario: Fund Add New Contract - App On Click Start
        Given a user with the following criteria
            | criteria         |
            | investment funds |
            | multiple funds   |
        And the user accesses to fund product detail
        And the analytics interceptor service is initiated
        When the user accesses to the Funds add new contract screen
        Then the analytics events contains the following variables
            | item                     | value                               | type               | event              |
            | analytics                | analytics/glomo_base                | json schema        | App On Click Start |
            | version DL               | 20250414_5.0                        | string             | App On Click Start |
            | page name                | app:privada:personas:fondos:detalle | string             | App On Click Start |
            | level 1                  | fondos                              | string             | App On Click Start |
            | level 2                  | detalle                             | string             | App On Click Start |
            | language                 | ES                                  | string             | App On Click Start |
            | page area                | privada                             | string             | App On Click Start |
            | page intent              | informacion                         | string             | App On Click Start |
            | channel                  | online                              | string             | App On Click Start |
            | page instance ID         | de                                  | string             | App On Click Start |
            | page info version        | appVersion                          | regexp named       | App On Click Start |
            | page segment             | personas                            | string             | App On Click Start |
            | sysEnv                   | app                                 | string             | App On Click Start |
            | business unit            | BBVA Mexico                         | string             | App On Click Start |
            | site app name            | App BBVA Mexico                     | string             | App On Click Start |
            | project name             | Glomo                               | string             | App On Click Start |
            | device mobile            | si                                  | string             | App On Click Start |
            | user userState           | logado                              | string             | App On Click Start |
            | user segment global      | 003001                              | string             | App On Click Start |
            | profile ID               | profileID                           | regexp named       | App On Click Start |
            | user age                 | age                                 | regexp named       | App On Click Start |
            | user gender              | gender                              | regexp named       | App On Click Start |
            | global application       | subsecuent purchase                 | string             | App On Click Start |
            | application name         | fondos subsecuentes                 | string             | App On Click Start |
            | application type         | contratacion                        | string             | App On Click Start |
            | application step         | detalle de fondo                    | string             | App On Click Start |
            | fulfillment model        | online                              | string             | App On Click Start |
            | product primary category | inversiones                         | string             | App On Click Start |
            | product subtype          | fondos inversion                    | string             | App On Click Start |
            | internal campaign        |                                     | empty array        | App On Click Start |
            | optimization attributes  |                                     | empty array        | App On Click Start |

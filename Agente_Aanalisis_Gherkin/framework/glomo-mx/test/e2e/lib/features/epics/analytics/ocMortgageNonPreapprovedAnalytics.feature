@ocMortgageNonPreapprovedAnalytics
Feature: Oc mortgage Non Preapproved Analytics

    @ANA_EVENT_OMNA001
    @analytics
    @MX
    @vbank @backend(test)
    @web @ios @android
    @web-done
    Scenario: App On Click Start - opportunities
        Given a user with the following criteria
            | criteria        |
            | oc mortgage pre |
        And the user accesses to dashboard
        And the analytics interceptor service is initiated
        When the user access to the "oc mortgage" offer
        Then the analytics events contains the following variables:
            | item                     | value                              | type        | event              |
            | analytics                | analytics/glomo_base               | json schema | App On Click Start |
            | version DL               | 20250414_5.0                       | string      | App On Click Start |
            | page area                | privada                            | string      | App On Click Start |
            | level 1                  | oportunidades                      | string      | App On Click Start |
            | sysEnv                   | app                                | string      | App On Click Start |
            | channel                  | online                             | string      | App On Click Start |
            | language                 | ES                                 | string      | App On Click Start |
            | page name                | app:privada:personas:oportunidades | string      | App On Click Start |
            | page intent              | informacion                        | string      | App On Click Start |
            | page segment             | personas                           | string      | App On Click Start |
            | project name             | DIY E2E Sales                      | string      | App On Click Start |
            | site app name            | App BBVA Mexico                    | string      | App On Click Start |
            | business unit            | BBVA Mexico                        | string      | App On Click Start |
            | user userState           | logado                             | string      | App On Click Start |
            | device mobile            | si                                 | string      | App On Click Start |
            | application step         | me interesa oportunidades          | string      | App On Click Start |
            | application name         | simulador hipotecario clientes     | string      | App On Click Start |
            | application type         | simulador                          | string      | App On Click Start |
            | fulfillment model        | online                             | string      | App On Click Start |
            | global application       | customer mortgage loan simulator   | string      | App On Click Start |
            | product name             | credito hipotecario                | string      | App On Click Start |
            | product primary category | prestamos                          | string      | App On Click Start |

    @ANA_EVENT_OMNA002
    @analytics
    @MX
    @vbank @backend(test)
    @web @ios @android
    @web-done
    Scenario: App Page Visit - Step 1
        Given a user with the following criteria
            | criteria        |
            | oc mortgage pre |
        And the user accesses to dashboard
        And the analytics interceptor service is initiated
        And the user accesses contract product section
        When the user access to the "oc mortgage" offer
        Then the analytics events contains the following variables:
            | item                     | value                                                                   | type        | event          |
            | analytics                | analytics/glomo_base                                                    | json schema | App Page Visit |
            | version DL               | 20250414_5.0                                                            | string      | App Page Visit |
            | page area                | privada                                                                 | string      | App Page Visit |
            | level 1                  | simulador hipotecario clientes                                          | string      | App Page Visit |
            | level 2                  | 1 simula tu credito                                                     | string      | App Page Visit |
            | sysEnv                   | app                                                                     | string      | App Page Visit |
            | channel                  | online                                                                  | string      | App Page Visit |
            | language                 | ES                                                                      | string      | App Page Visit |
            | page name                | app:privada:personas:simulador hipotecario clientes:1 simula tu credito | string      | App Page Visit |
            | page intent              | informacion                                                             | string      | App Page Visit |
            | page segment             | personas                                                                | string      | App Page Visit |
            | project name             | DIY E2E Sales                                                           | string      | App Page Visit |
            | site app name            | App BBVA Mexico                                                         | string      | App Page Visit |
            | business unit            | BBVA Mexico                                                             | string      | App Page Visit |
            | user userState           | logado                                                                  | string      | App Page Visit |
            | device mobile            | si                                                                      | string      | App Page Visit |
            | application step         | 1 simula tu credito                                                     | string      | App Page Visit |
            | application state        | inicio                                                                  | string      | App Page Visit |
            | application name         | simulador hipotecario clientes                                          | string      | App Page Visit |
            | application type         | simulador                                                               | string      | App Page Visit |
            | fulfillment model        | online                                                                  | string      | App Page Visit |
            | global application       | customer mortgage loan simulator                                        | string      | App Page Visit |
            | product name             | credito hipotecario                                                     | string      | App Page Visit |
            | product primary category | prestamos                                                               | string      | App Page Visit |
            | job type                 |                                                                         | string      | App Page Visit |

    @ANA_EVENT_OMNA003
    @analytics
    @MX
    @vbank @backend(test)
    @web @ios @android
    @web-done
    Scenario: App Started
        Given a user with the following criteria
            | criteria        |
            | oc mortgage pre |
        And the user accesses to dashboard
        And the user access to the "oc mortgage" offer
        And the analytics interceptor service is initiated
        When the user accesses to the oc mortgage
        Then the analytics events contains the following variables:
            | item                     | value                                                                   | type        | event       |
            | analytics                | analytics/glomo_base                                                    | json schema | App Started |
            | version DL               | 20250414_5.0                                                            | string      | App Started |
            | page area                | privada                                                                 | string      | App Started |
            | level 1                  | simulador hipotecario clientes                                          | string      | App Started |
            | level 2                  | 1 simula tu credito                                                     | string      | App Started |
            | sysEnv                   | app                                                                     | string      | App Started |
            | channel                  | online                                                                  | string      | App Started |
            | language                 | ES                                                                      | string      | App Started |
            | page name                | app:privada:personas:simulador hipotecario clientes:1 simula tu credito | string      | App Started |
            | page intent              | informacion                                                             | string      | App Started |
            | page segment             | personas                                                                | string      | App Started |
            | project name             | DIY E2E Sales                                                           | string      | App Started |
            | site app name            | App BBVA Mexico                                                         | string      | App Started |
            | business unit            | BBVA Mexico                                                             | string      | App Started |
            | user userState           | logado                                                                  | string      | App Started |
            | device mobile            | si                                                                      | string      | App Started |
            | application step         | continuar                                                               | string      | App Started |
            | application name         | simulador hipotecario clientes                                          | string      | App Started |
            | application type         | simulador                                                               | string      | App Started |
            | fulfillment model        | online                                                                  | string      | App Started |
            | global application       | customer mortgage loan simulator                                        | string      | App Started |
            | product name             | credito hipotecario                                                     | string      | App Started |
            | product primary category | prestamos                                                               | string      | App Started |

    @ANA_EVENT_OMNA004
    @analytics
    @MX
    @vbank @backend(test)
    @web @ios @android
    @web-done
    Scenario: App Step 2
        Given a user with the following criteria
            | criteria        |
            | oc mortgage pre |
        And the user accesses to dashboard
        And the analytics interceptor service is initiated
        And the user access to the "oc mortgage" offer
        When the user accesses to the oc mortgage
        Then the analytics events contains the following variables:
            | item                     | value                                                                 | type        | event      |
            | analytics                | analytics/glomo_base                                                  | json schema | App Step 2 |
            | version DL               | 20250414_5.0                                                          | string      | App Step 2 |
            | page area                | privada                                                               | string      | App Step 2 |
            | level 1                  | simulador hipotecario clientes                                        | string      | App Step 2 |
            | level 2                  | 2 cotizar credito                                                     | string      | App Step 2 |
            | sysEnv                   | app                                                                   | string      | App Step 2 |
            | channel                  | online                                                                | string      | App Step 2 |
            | language                 | ES                                                                    | string      | App Step 2 |
            | page name                | app:privada:personas:simulador hipotecario clientes:2 cotizar credito | string      | App Step 2 |
            | page intent              | informacion                                                           | string      | App Step 2 |
            | page segment             | personas                                                              | string      | App Step 2 |
            | project name             | DIY E2E Sales                                                         | string      | App Step 2 |
            | site app name            | App BBVA Mexico                                                       | string      | App Step 2 |
            | business unit            | BBVA Mexico                                                           | string      | App Step 2 |
            | user userState           | logado                                                                | string      | App Step 2 |
            | device mobile            | si                                                                    | string      | App Step 2 |
            | application step         | 2 cotizar credito                                                     | string      | App Step 2 |
            | application name         | simulador hipotecario clientes                                        | string      | App Step 2 |
            | application type         | simulador                                                             | string      | App Step 2 |
            | fulfillment model        | online                                                                | string      | App Step 2 |
            | global application       | customer mortgage loan simulator                                      | string      | App Step 2 |
            | product name             | credito hipotecario                                                   | string      | App Step 2 |
            | product primary category | prestamos                                                             | string      | App Step 2 |

    @ANA_EVENT_OMNA005
    @analytics
    @MX
    @vbank @backend(test)
    @web @ios @android
    @web-done
    Scenario: App Step 3
        Given a user with the following criteria
            | criteria        |
            | oc mortgage pre |
        And the user access to the "oc mortgage" offer
        And the user accesses the type of "buy apartment" payment "buy property"
        And the analytics interceptor service is initiated
        And the user accesses the "300000" and "45000" and "10"
        When the user accesses the type occupation "other" business "private"
        Then the analytics events contains the following variables:
            | item                     | value                                                                          | type        | event      |
            | analytics                | analytics/glomo_base                                                           | json schema | App Step 3 |
            | version DL               | 20250414_5.0                                                                   | string      | App Step 3 |
            | page area                | privada                                                                        | string      | App Step 3 |
            | level 1                  | simulador hipotecario clientes                                                 | string      | App Step 3 |
            | level 2                  | 3 queremos conocerte mejor                                                     | string      | App Step 3 |
            | sysEnv                   | app                                                                            | string      | App Step 3 |
            | channel                  | online                                                                         | string      | App Step 3 |
            | language                 | ES                                                                             | string      | App Step 3 |
            | page name                | app:privada:personas:simulador hipotecario clientes:3 queremos conocerte mejor | string      | App Step 3 |
            | page intent              | informacion                                                                    | string      | App Step 3 |
            | page segment             | personas                                                                       | string      | App Step 3 |
            | project name             | DIY E2E Sales                                                                  | string      | App Step 3 |
            | site app name            | App BBVA Mexico                                                                | string      | App Step 3 |
            | business unit            | BBVA Mexico                                                                    | string      | App Step 3 |
            | user userState           | logado                                                                         | string      | App Step 3 |
            | device mobile            | si                                                                             | string      | App Step 3 |
            | application step         | 3 queremos conocerte mejor                                                     | string      | App Step 3 |
            | application name         | simulador hipotecario clientes                                                 | string      | App Step 3 |
            | application type         | simulador                                                                      | string      | App Step 3 |
            | fulfillment model        | online                                                                         | string      | App Step 3 |
            | global application       | customer mortgage loan simulator                                               | string      | App Step 3 |
            | product name             | credito hipotecario                                                            | string      | App Step 3 |
            | product primary category | prestamos                                                                      | string      | App Step 3 |

    @ANA_EVENT_OMNA006
    @analytics
    @MX
    @vbank @backend(test)
    @web @ios @android
    @web-done
    Scenario: App Step 4
        Given a user with the following criteria
            | criteria        |
            | oc mortgage pre |
        And the user access to the "oc mortgage" offer
        And the user accesses the type of "buy apartment" payment "buy property"
        And the user accesses the "300000" and "45000" and "10"
        And the user accesses the type occupation "employee" business "private"
        And the analytics interceptor service is initiated
        When the user accesses the information of work "9" and "own" and "yes" and "continue"
        Then the analytics events contains the following variables:
            | item                     | value                                                                        | type        | event      |
            | analytics                | analytics/glomo_base                                                         | json schema | App Step 4 |
            | version DL               | 20250414_5.0                                                                 | string      | App Step 4 |
            | page area                | privada                                                                      | string      | App Step 4 |
            | level 1                  | simulador hipotecario clientes                                               | string      | App Step 4 |
            | level 2                  | 4 terminos y condiciones                                                     | string      | App Step 4 |
            | sysEnv                   | app                                                                          | string      | App Step 4 |
            | channel                  | online                                                                       | string      | App Step 4 |
            | language                 | ES                                                                           | string      | App Step 4 |
            | page name                | app:privada:personas:simulador hipotecario clientes:4 terminos y condiciones | string      | App Step 4 |
            | page intent              | informacion                                                                  | string      | App Step 4 |
            | page segment             | personas                                                                     | string      | App Step 4 |
            | project name             | DIY E2E Sales                                                                | string      | App Step 4 |
            | site app name            | App BBVA Mexico                                                              | string      | App Step 4 |
            | business unit            | BBVA Mexico                                                                  | string      | App Step 4 |
            | user userState           | logado                                                                       | string      | App Step 4 |
            | device mobile            | si                                                                           | string      | App Step 4 |
            | application step         | 4 terminos y condiciones                                                     | string      | App Step 4 |
            | application name         | simulador hipotecario clientes                                               | string      | App Step 4 |
            | application type         | simulador                                                                    | string      | App Step 4 |
            | fulfillment model        | online                                                                       | string      | App Step 4 |
            | global application       | customer mortgage loan simulator                                             | string      | App Step 4 |
            | product name             | credito hipotecario                                                          | string      | App Step 4 |
            | product primary category | prestamos                                                                    | string      | App Step 4 |
            | job type                 | empleado privada                                                             | string      | App Step 4 |

    @ANA_EVENT_OMNA007
    @analytics
    @MX
    @vbank @backend(test)
    @web @ios @android
    @web-done
    Scenario: App Step 5
        Given a user with the following criteria
            | criteria        |
            | oc mortgage pre |
        And the user access to the "oc mortgage" offer
        And the user accesses the type of "buy apartment" payment "buy property"
        And the user accesses the "300000" and "45000" and "10"
        And the user accesses the type occupation "employee" business "private"
        And the user accesses the information of work "9" and "own" and "yes" and "continue"
        And the analytics interceptor service is initiated
        When the user accesses checks information
        Then the analytics events contains the following variables:
            | item                       | value                                                              | type        | event      |
            | analytics                  | analytics/glomo_base                                               | json schema | App Step 5 |
            | version DL                 | 20250414_5.0                                                       | string      | App Step 5 |
            | page area                  | privada                                                            | string      | App Step 5 |
            | level 1                    | simulador hipotecario clientes                                     | string      | App Step 5 |
            | level 2                    | 5 confirmacion                                                     | string      | App Step 5 |
            | sysEnv                     | app                                                                | string      | App Step 5 |
            | channel                    | online                                                             | string      | App Step 5 |
            | language                   | ES                                                                 | string      | App Step 5 |
            | page name                  | app:privada:personas:simulador hipotecario clientes:5 confirmacion | string      | App Step 5 |
            | page intent                | informacion                                                        | string      | App Step 5 |
            | page segment               | personas                                                           | string      | App Step 5 |
            | project name               | DIY E2E Sales                                                      | string      | App Step 5 |
            | site app name              | App BBVA Mexico                                                    | string      | App Step 5 |
            | business unit              | BBVA Mexico                                                        | string      | App Step 5 |
            | product currency           | MXN                                                                | string      | App Step 5 |
            | product payment type       | mensual                                                            | string      | App Step 5 |
            | product name               | credito hipotecario                                                | string      | App Step 5 |
            | product interest rate      | 11.2                                                               | number      | App Step 5 |
            | product payment amount     | 18746.99                                                           | number      | App Step 5 |
            | product service charge     | 1                                                                  | number      | App Step 5 |
            | products term              | 3650                                                               | number      | App Step 5 |
            | product number of payments | 120                                                                | number      | App Step 5 |
            | job type                   | empleado privada                                                   | string      | App Step 5 |

    @ANA_EVENT_OMNA008
    @analytics
    @MX
    @vbank @backend(test)
    @web @ios @android
    @web-done
    Scenario: App Step 6 (OTP)
        Given a user with the following criteria
            | criteria        |
            | oc mortgage pre |
        And the user access to the "oc mortgage" offer
        And the user accesses the type of "buy apartment" payment "buy property"
        And the user accesses the "300000" and "45000" and "10"
        And the user accesses the type occupation "employee" business "private"
        And the user accesses the information of work "9" and "own" and "yes" and "continue"
        And the user accesses checks information
        And the analytics interceptor service is initiated
        When the user accesses screen success oc mortgage
        Then the analytics events contains the following variables:
            | item                       | value                                                     | type        | event      |
            | analytics                  | analytics/glomo_base                                      | json schema | App Step 6 |
            | version DL                 | 20250414_5.0                                              | string      | App Step 6 |
            | page area                  | privada                                                   | string      | App Step 6 |
            | level 1                    | simulador hipotecario clientes                            | string      | App Step 6 |
            | level 2                    | 6 otp                                                     | string      | App Step 6 |
            | sysEnv                     | app                                                       | string      | App Step 6 |
            | channel                    | online                                                    | string      | App Step 6 |
            | language                   | ES                                                        | string      | App Step 6 |
            | page name                  | app:privada:personas:simulador hipotecario clientes:6 otp | string      | App Step 6 |
            | page intent                | informacion                                               | string      | App Step 6 |
            | page segment               | personas                                                  | string      | App Step 6 |
            | project name               | DIY E2E Sales                                             | string      | App Step 6 |
            | site app name              | App BBVA Mexico                                           | string      | App Step 6 |
            | business unit              | BBVA Mexico                                               | string      | App Step 6 |
            | user userState             | logado                                                    | string      | App Step 6 |
            | device mobile              | si                                                        | string      | App Step 6 |
            | application step           | 6 otp                                                     | string      | App Step 6 |
            | application name           | simulador hipotecario clientes                            | string      | App Step 6 |
            | application type           | simulador                                                 | string      | App Step 6 |
            | fulfillment model          | online                                                    | string      | App Step 6 |
            | global application         | customer mortgage loan simulator                          | string      | App Step 6 |
            | product amount             | 855000                                                    | number      | App Step 6 |
            | product currency           | MXN                                                       | string      | App Step 6 |
            | product payment type       | mensual                                                   | string      | App Step 6 |
            | product name               | credito hipotecario                                       | string      | App Step 6 |
            | product interest rate      | 11.2                                                      | number      | App Step 6 |
            | product payment amount     | 18746.99                                                  | number      | App Step 6 |
            | product service charge     | 1                                                         | number      | App Step 6 |
            | products term              | 3650                                                      | number      | App Step 6 |
            | product number of payments | 120                                                       | number      | App Step 6 |
            | job type                   | empleado privada                                          | string      | App Step 6 |

    @ANA_EVENT_OMNA009
    @analytics
    @MX
    @vbank @backend(test)
    @web @ios @android
    @web-done
    Scenario: App Completed (pagina exitosa)
        Given a user with the following criteria
            | criteria        |
            | oc mortgage pre |
        And the user access to the "oc mortgage" offer
        And the user accesses the type of "buy apartment" payment "buy property"
        And the user accesses the "300000" and "45000" and "10"
        And the user accesses the type occupation "employee" business "private"
        And the user accesses the information of work "9" and "own" and "yes" and "continue"
        And the user accesses checks information
        And the analytics interceptor service is initiated
        When the user accesses screen success oc mortgage
        Then the analytics events contains the following variables:
            | item                       | value                                                              | type        | event         |
            | analytics                  | analytics/glomo_base                                               | json schema | App Completed |
            | version DL                 | 20250414_5.0                                                       | string      | App Completed |
            | page area                  | privada                                                            | string      | App Completed |
            | level 1                    | simulador hipotecario clientes                                     | string      | App Completed |
            | level 2                    | pagina exitosa                                                     | string      | App Completed |
            | sysEnv                     | app                                                                | string      | App Completed |
            | channel                    | online                                                             | string      | App Completed |
            | language                   | ES                                                                 | string      | App Completed |
            | page name                  | app:privada:personas:simulador hipotecario clientes:pagina exitosa | string      | App Completed |
            | page intent                | informacion                                                        | string      | App Completed |
            | page segment               | personas                                                           | string      | App Completed |
            | project name               | DIY E2E Sales                                                      | string      | App Completed |
            | site app name              | App BBVA Mexico                                                    | string      | App Completed |
            | business unit              | BBVA Mexico                                                        | string      | App Completed |
            | user userState             | logado                                                             | string      | App Completed |
            | device mobile              | si                                                                 | string      | App Completed |
            | application step           | pagina exitosa                                                     | string      | App Completed |
            | application state          | finalizado                                                         | string      | App Completed |
            | application name           | simulador hipotecario clientes                                     | string      | App Completed |
            | application type           | simulador                                                          | string      | App Completed |
            | fulfillment model          | online                                                             | string      | App Completed |
            | global application         | customer mortgage loan simulator                                   | string      | App Completed |
            | product amount             | 855000                                                             | number      | App Completed |
            | product currency           | MXN                                                                | string      | App Completed |
            | product payment type       | mensual                                                            | string      | App Completed |
            | product name               | credito hipotecario                                                | string      | App Completed |
            | product interest rate      | 11.2                                                               | number      | App Completed |
            | product payment amount     | 18746.99                                                           | number      | App Completed |
            | product service charge     | 1                                                                  | number      | App Completed |
            | products term              | 3650                                                               | number      | App Completed |
            | product number of payments | 120                                                                | number      | App Completed |
            | job type                   | empleado privada                                                   | string      | App Completed |

    @ANA_EVENT_OMNA010
    @analytics
    @MX
    @vbank @backend(test)
    @web @ios @android
    @web-done
    Scenario: Page View in oc mortgage non preapproved - error operation not available
        Given a user with the following criteria
            | criteria        |
            | oc mortgage pre |
        And the user access to the "oc mortgage error" offer
        And the user accesses the type of "buy apartment" payment "buy property"
        And the user accesses the "300000" and "45000" and "10"
        And the user accesses the type occupation "employee" business "private"
        And the user accesses the information of work "9" and "own" and "yes" and "continue"
        And the user accesses checks information
        And the analytics interceptor service is initiated
        When the user accesses screen success oc mortgage
        Then the analytics events contains the following variables:
            | item                | value                                                                             | type         | event     |
            | analytics           | analytics/glomo_base                                                              | json schema  | Page View |
            | version DL          | 20250414_5.0                                                                      | string       | Page View |
            | page name           | app:privada:personas:simulador hipotecario clientes:error operacion no disponible | string       | Page View |
            | level 1             | simulador hipotecario clientes                                                    | string       | Page View |
            | level 2             | error operacion no disponible                                                     | string       | Page View |
            | language            | ES                                                                                | string       | Page View |
            | page area           | privada                                                                           | string       | Page View |
            | page intent         | informacion                                                                       | string       | Page View |
            | channel             | online                                                                            | string       | Page View |
            | page instance ID    | de                                                                                | string       | Page View |
            | page info version   | appVersion                                                                        | regexp named | Page View |
            | page segment        | personas                                                                          | string       | Page View |
            | sysEnv              | app                                                                               | string       | Page View |
            | business unit       | BBVA Mexico                                                                       | string       | Page View |
            | site app name       | App BBVA Mexico                                                                   | string       | Page View |
            | project name        | DIY E2E Sales                                                                     | string       | Page View |
            | user userState      | logado                                                                            | string       | Page View |
            | user segment global | 003001                                                                            | string       | Page View |
            | profile ID          | profileID                                                                         | regexp named | Page View |

    @ANA_EVENT_OMNA011
    @analytics
    @MX
    @vbank @backend(test)
    @web @ios @android
    @web-done
    Scenario: Page View in oc mortgage non preapproved - client error
        Given a user with the following criteria
            | criteria        |
            | oc mortgage pre |
        And the user access to the "oc mortgage error" offer
        And the user accesses the type of "buy apartment" payment "buy property"
        And the user accesses the "300000" and "45000" and "10"
        And the user accesses the type occupation "employee" business "private"
        And the user accesses the information of work "9" and "own" and "yes" and "continue"
        And the user accesses checks information
        And the analytics interceptor service is initiated
        When the user accesses screen success oc mortgage
        Then the analytics events contains the following variables:
            | item                | value                                                                                        | type         | event     |
            | analytics           | analytics/glomo_base                                                                         | json schema  | Page View |
            | version DL          | 20250414_5.0                                                                                 | string       | Page View |
            | page name           | app:privada:personas:simulador hipotecario clientes:cliente no elegible por salud financiera | string       | Page View |
            | level 1             | simulador hipotecario clientes                                                               | string       | Page View |
            | level 2             | cliente no elegible por salud financiera                                                     | string       | Page View |
            | language            | ES                                                                                           | string       | Page View |
            | page area           | privada                                                                                      | string       | Page View |
            | page intent         | informacion                                                                                  | string       | Page View |
            | channel             | online                                                                                       | string       | Page View |
            | page instance ID    | de                                                                                           | string       | Page View |
            | page info version   | appVersion                                                                                   | regexp named | Page View |
            | page segment        | personas                                                                                     | string       | Page View |
            | sysEnv              | app                                                                                          | string       | Page View |
            | business unit       | BBVA Mexico                                                                                  | string       | Page View |
            | site app name       | App BBVA Mexico                                                                              | string       | Page View |
            | project name        | DIY E2E Sales                                                                                | string       | Page View |
            | user userState      | logado                                                                                       | string       | Page View |
            | user segment global | 003001                                                                                       | string       | Page View |
            | profile ID          | profileID                                                                                    | regexp named | Page View |

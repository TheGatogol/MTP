@loansPaymentsPlansAnalytics @analyticsLoanPaymentPlanDecreaseLoan
Feature: Analytics - Loan Payment Plan Decrease Loan

    @ANA_EVENT_LPDL001
    @analytics
    @MX
    @web
    @vbank @android @ios
    @backend(test)
    @web-done
    Scenario: Access to offers with loan decrease loan - App On Click Start
        Given a user with the following criteria
            | criteria                  |
            | decrease loan plans offer |
        And the user accesses contract product section
        And the analytics interceptor service is initiated
        When the user selects payment plan offer "decrease loan"
        Then the analytics events contains the following variables
            | item                    | value                              | type         | event              |
            | analytics               | analytics/glomo_base               | json schema  | App On Click Start |
            | version DL              | 20250414_5.0                       | string       | App On Click Start |
            | page name               | app:privada:personas:oportunidades | string       | App On Click Start |
            | level 1                 | oportunidades                      | string       | App On Click Start |
            | language                | ES                                 | string       | App On Click Start |
            | page area               | privada                            | string       | App On Click Start |
            | page intent             | informacion                        | string       | App On Click Start |
            | channel                 | online                             | string       | App On Click Start |
            | page instance ID        | de                                 | string       | App On Click Start |
            | page info version       | appVersion                         | regexp named | App On Click Start |
            | page segment            | personas                           | string       | App On Click Start |
            | sysEnv                  | app                                | string       | App On Click Start |
            | business unit           | BBVA Mexico                        | string       | App On Click Start |
            | site app name           | App BBVA Mexico                    | string       | App On Click Start |
            | project name            | Glomo                              | string       | App On Click Start |
            | device mobile           | si                                 | string       | App On Click Start |
            | user userState          | logado                             | string       | App On Click Start |
            | user segment global     | 003001                             | string       | App On Click Start |
            | profile ID              | profileID                          | regexp named | App On Click Start |
            | user gender             | gender                             | regexp named | App On Click Start |
            | user age                | age                                | regexp named | App On Click Start |
            | global application      | restructure plan                   | string       | App On Click Start |
            | application name        | plan de reestructura               | string       | App On Click Start |
            | application type        | operativa                          | string       | App On Click Start |
            | application step        | oportunidades                      | string       | App On Click Start |
            | fulfillment model       | online                             | string       | App On Click Start |
            | internal campaign       |                                    | empty array  | App On Click Start |
            | optimization attributes |                                    | empty array  | App On Click Start |
            | products attributes     |                                    | empty array  | App On Click Start |

    @ANA_LPDL002
    @analytics
    @MX
    @web
    @vbank @android @ios
    @backend(test)
    @web-done
    Scenario: Access to offers with loan decrease loan  - App Page Visit
        Given a user with the following criteria
            | criteria                  |
            | decrease loan plans offer |
        When the user selects payment plan offer "decrease loan"
        Then the device contains the following variables
            | item                     | value                                               | type         |
            | analytics                | analytics/glomo_base                                | json schema  |
            | version DL               | 20250414_5.0                                        | string       |
            | page name                | app:privada:personas:plan de reestructura:1 detalle | string       |
            | level 1                  | plan de reestructura                                | string       |
            | level 2                  | 1 detalle                                           | string       |
            | language                 | ES                                                  | string       |
            | page area                | privada                                             | string       |
            | page intent              | informacion                                         | string       |
            | channel                  | online                                              | string       |
            | page instance ID         | de                                                  | string       |
            | page info version        | appVersion                                          | regexp named |
            | page segment             | personas                                            | string       |
            | sysEnv                   | app                                                 | string       |
            | business unit            | BBVA Mexico                                         | string       |
            | site app name            | App BBVA Mexico                                     | string       |
            | project name             | Glomo                                               | string       |
            | device mobile            | si                                                  | string       |
            | user userState           | logado                                              | string       |
            | profile ID               | profileID                                           | regexp named |
            | user segment global      | 003001                                              | string       |
            | user gender              | gender                                              | regexp named |
            | user age                 | age                                                 | regexp named |
            | global application       | restructure plan                                    | string       |
            | application name         | plan de reestructura                                | string       |
            | application type         | operativa                                           | string       |
            | application step         | 1 detalle                                           | string       |
            | fulfillment model        | online                                              | string       |
            | product primary category | prestamos                                           | string       |
            | product name             | disminucion consumo                                 | string       |
            | internal campaign        |                                                     | empty array  |
            | optimization attributes  |                                                     | empty array  |

    @ANA_EVENT_LPDL003
    @analytics
    @MX
    @web
    @vbank @android @ios
    @backend(test)
    @web-done
    Scenario: Access to offers with loan decrease loan - App Started
        Given a user with the following criteria
            | criteria                  |
            | decrease loan plans offer |
        And the user selects payment plan offer "decrease loan"
        And the analytics interceptor service is initiated
        When the user accesses payment plan terms and conditions
        Then the analytics events contains the following variables
            | item                     | value                                               | type         | event       |
            | analytics                | analytics/glomo_base                                | json schema  | App Started |
            | version DL               | 20250414_5.0                                        | string       | App Started |
            | page name                | app:privada:personas:plan de reestructura:1 detalle | string       | App Started |
            | level 1                  | plan de reestructura                                | string       | App Started |
            | level 2                  | 1 detalle                                           | string       | App Started |
            | language                 | ES                                                  | string       | App Started |
            | page area                | privada                                             | string       | App Started |
            | page intent              | informacion                                         | string       | App Started |
            | channel                  | online                                              | string       | App Started |
            | page instance ID         | de                                                  | string       | App Started |
            | page info version        | appVersion                                          | regexp named | App Started |
            | page segment             | personas                                            | string       | App Started |
            | sysEnv                   | app                                                 | string       | App Started |
            | business unit            | BBVA Mexico                                         | string       | App Started |
            | site app name            | App BBVA Mexico                                     | string       | App Started |
            | project name             | Glomo                                               | string       | App Started |
            | device mobile            | si                                                  | string       | App Started |
            | user userState           | logado                                              | string       | App Started |
            | profile ID               | profileID                                           | regexp named | App Started |
            | user segment global      | 003001                                              | string       | App Started |
            | user gender              | gender                                              | regexp named | App Started |
            | user age                 | age                                                 | regexp named | App Started |
            | global application       | restructure plan                                    | string       | App Started |
            | application name         | plan de reestructura                                | string       | App Started |
            | application type         | operativa                                           | string       | App Started |
            | application step         | me interesa                                         | string       | App Started |
            | fulfillment model        | online                                              | string       | App Started |
            | product primary category | prestamos                                           | string       | App Started |
            | product name             | disminucion consumo                                 | string       | App Started |
            | internal campaign        |                                                     | empty array  | App Started |
            | optimization attributes  |                                                     | empty array  | App Started |

    @ANA_EVENT_LPDL004
    @analytics
    @MX
    @web
    @vbank @android @ios
    @backend(test)
    @web-done
    Scenario: Access to offers with loan decrease loan  - App Step 2
        Given a user with the following criteria
            | criteria                  |
            | decrease loan plans offer |
        And the user selects payment plan offer "decrease loan"
        And the analytics interceptor service is initiated
        When the user select and confirm payment plan terms and conditions
        Then the analytics events contains the following variables
            | item                       | value                                                              | type         | event      |
            | analytics                  | analytics/glomo_base                                               | json schema  | App Step 2 |
            | version DL                 | 20250414_5.0                                                       | string       | App Step 2 |
            | page name                  | app:privada:personas:plan de reestructura:2 terminos y condiciones | string       | App Step 2 |
            | level 1                    | plan de reestructura                                               | string       | App Step 2 |
            | level 2                    | 2 terminos y condiciones                                           | string       | App Step 2 |
            | language                   | ES                                                                 | string       | App Step 2 |
            | page area                  | privada                                                            | string       | App Step 2 |
            | page intent                | informacion                                                        | string       | App Step 2 |
            | channel                    | online                                                             | string       | App Step 2 |
            | page instance ID           | de                                                                 | string       | App Step 2 |
            | page info version          | appVersion                                                         | regexp named | App Step 2 |
            | page segment               | personas                                                           | string       | App Step 2 |
            | sysEnv                     | app                                                                | string       | App Step 2 |
            | business unit              | BBVA Mexico                                                        | string       | App Step 2 |
            | site app name              | App BBVA Mexico                                                    | string       | App Step 2 |
            | project name               | Glomo                                                              | string       | App Step 2 |
            | device mobile              | si                                                                 | string       | App Step 2 |
            | user userState             | logado                                                             | string       | App Step 2 |
            | profile ID                 | profileID                                                          | regexp named | App Step 2 |
            | user segment global        | 003001                                                             | string       | App Step 2 |
            | user gender                | gender                                                             | regexp named | App Step 2 |
            | user age                   | age                                                                | regexp named | App Step 2 |
            | global application         | restructure plan                                                   | string       | App Step 2 |
            | application name           | plan de reestructura                                               | string       | App Step 2 |
            | application type           | operativa                                                          | string       | App Step 2 |
            | application step           | 2 terminos y condiciones                                           | string       | App Step 2 |
            | fulfillment model          | online                                                             | string       | App Step 2 |
            | product primary category   | prestamos                                                          | string       | App Step 2 |
            | product name               | disminucion consumo                                                | string       | App Step 2 |
            | product amount             | 175816.33                                                          | number       | App Step 2 |
            | product payment amount     | 2051.28                                                            | number       | App Step 2 |
            | product number of payments | 18                                                                 | number       | App Step 2 |
            | product interest rate      | 30                                                                 | number       | App Step 2 |
            | product currency           | MXN                                                                | string       | App Step 2 |
            | internal campaign          |                                                                    | empty array  | App Step 2 |
            | optimization attributes    |                                                                    | empty array  | App Step 2 |

    @ANA_EVENT_LPDL005
    @analytics
    @MX
    @web
    @vbank @android @ios
    @backend(test)
    @web-done
    Scenario: Access to offers with support for fixed card payments - App Step 3
        Given a user with the following criteria
            | criteria                  |
            | decrease loan plans offer |
        And the user selects payment plan offer "decrease loan"
        And the analytics interceptor service is initiated
        When the user authorize payment plan offer
        Then the analytics events contains the following variables
            | item                       | value                                                    | type         | event      |
            | analytics                  | analytics/glomo_base                                     | json schema  | App Step 3 |
            | version DL                 | 20250414_5.0                                             | string       | App Step 3 |
            | page name                  | app:privada:personas:plan de reestructura:3 confirmacion | string       | App Step 3 |
            | level 1                    | plan de reestructura                                     | string       | App Step 3 |
            | level 2                    | 3 confirmacion                                           | string       | App Step 3 |
            | language                   | ES                                                       | string       | App Step 3 |
            | page area                  | privada                                                  | string       | App Step 3 |
            | page intent                | informacion                                              | string       | App Step 3 |
            | channel                    | online                                                   | string       | App Step 3 |
            | page instance ID           | de                                                       | string       | App Step 3 |
            | page info version          | appVersion                                               | regexp named | App Step 3 |
            | page segment               | personas                                                 | string       | App Step 3 |
            | sysEnv                     | app                                                      | string       | App Step 3 |
            | business unit              | BBVA Mexico                                              | string       | App Step 3 |
            | site app name              | App BBVA Mexico                                          | string       | App Step 3 |
            | project name               | Glomo                                                    | string       | App Step 3 |
            | device mobile              | si                                                       | string       | App Step 3 |
            | user userState             | logado                                                   | string       | App Step 3 |
            | profile ID                 | profileID                                                | regexp named | App Step 3 |
            | user segment global        | 003001                                                   | string       | App Step 3 |
            | user gender                | gender                                                   | regexp named | App Step 3 |
            | user age                   | age                                                      | regexp named | App Step 3 |
            | global application         | restructure plan                                         | string       | App Step 3 |
            | application name           | plan de reestructura                                     | string       | App Step 3 |
            | application type           | operativa                                                | string       | App Step 3 |
            | application step           | 3 confirmacion                                           | string       | App Step 3 |
            | fulfillment model          | online                                                   | string       | App Step 3 |
            | product primary category   | prestamos                                                | string       | App Step 3 |
            | product name               | disminucion consumo                                      | string       | App Step 3 |
            | product amount             | 175816.33                                                | number       | App Step 3 |
            | product payment amount     | 2051.28                                                  | number       | App Step 3 |
            | product number of payments | 18                                                       | number       | App Step 3 |
            | product interest rate      | 30                                                       | number       | App Step 3 |
            | product currency           | MXN                                                      | string       | App Step 3 |
            | internal campaign          |                                                          | empty array  | App Step 3 |
            | optimization attributes    |                                                          | empty array  | App Step 3 |

    @ANA_EVENT_LPDL006
    @analytics
    @MX
    @web
    @vbank @android @ios
    @backend(test)
    @web-done
    Scenario: Access to offers with support for loan decrease offer - App Completed
        Given a user with the following criteria
            | criteria                  |
            | decrease loan plans offer |
        And the user selects payment plan offer "decrease loan"
        And the user authorize payment plan offer
        And the analytics interceptor service is initiated
        When the user completes the binding of the payment plan
        Then the analytics events contains the following variables
            | item                       | value                                                    | type         | event         |
            | analytics                  | analytics/glomo_base                                     | json schema  | App Completed |
            | version DL                 | 20250414_5.0                                             | string       | App Completed |
            | page name                  | app:privada:personas:plan de reestructura:pagina exitosa | string       | App Completed |
            | level 1                    | plan de reestructura                                     | string       | App Completed |
            | level 2                    | pagina exitosa                                           | string       | App Completed |
            | language                   | ES                                                       | string       | App Completed |
            | page area                  | privada                                                  | string       | App Completed |
            | page intent                | informacion                                              | string       | App Completed |
            | channel                    | online                                                   | string       | App Completed |
            | page instance ID           | de                                                       | string       | App Completed |
            | page info version          | appVersion                                               | regexp named | App Completed |
            | page segment               | personas                                                 | string       | App Completed |
            | sysEnv                     | app                                                      | string       | App Completed |
            | business unit              | BBVA Mexico                                              | string       | App Completed |
            | site app name              | App BBVA Mexico                                          | string       | App Completed |
            | project name               | Glomo                                                    | string       | App Completed |
            | device mobile              | si                                                       | string       | App Completed |
            | user userState             | logado                                                   | string       | App Completed |
            | profile ID                 | profileID                                                | regexp named | App Completed |
            | user segment global        | 003001                                                   | string       | App Completed |
            | user gender                | gender                                                   | regexp named | App Completed |
            | user age                   | age                                                      | regexp named | App Completed |
            | global application         | restructure plan                                         | string       | App Completed |
            | application name           | plan de reestructura                                     | string       | App Completed |
            | application type           | operativa                                                | string       | App Completed |
            | application typology       | disminucion consumo                                      | string       | App Completed |
            | application step           | pagina exitosa                                           | string       | App Completed |
            | fulfillment model          | online                                                   | string       | App Completed |
            | product primary category   | prestamos                                                | string       | App Completed |
            | product name               | disminucion consumo                                      | string       | App Completed |
            | product amount             | 175816.33                                                | number       | App Completed |
            | product payment amount     | 2051.28                                                  | number       | App Completed |
            | product number of payments | 18                                                       | number       | App Completed |
            | product interest rate      | 30                                                       | number       | App Completed |
            | product currency           | MXN                                                      | string       | App Completed |
            | product state              | finalizado                                               | string       | App Completed |
            | internal campaign          |                                                          | empty array  | App Completed |
            | optimization attributes    |                                                          | empty array  | App Completed |

    @ANA_LPDL007
    @analytics
    @MX
    @web
    @vbank @android @ios
    @backend(test)
    @web-done
    Scenario: Access to offers with support for loan decrease offer - Page View - Offer not available
        Given a user with the following criteria
            | criteria                  |
            | decrease loan plans offer |
        When the user selects payment plan offer "decrease loan not available"
        Then the device contains the following variables
            | item                    | value                                                          | type         |
            | analytics               | analytics/glomo_base                                           | json schema  |
            | version DL              | 20250414_5.0                                                   | string       |
            | page name               | app:privada:personas:plan de reestructura:oferta no disponible | string       |
            | level 1                 | plan de reestructura                                           | string       |
            | level 2                 | oferta no disponible                                           | string       |
            | language                | ES                                                             | string       |
            | page area               | privada                                                        | string       |
            | page intent             | informacion                                                    | string       |
            | channel                 | online                                                         | string       |
            | page instance ID        | de                                                             | string       |
            | page info version       | appVersion                                                     | regexp named |
            | page segment            | personas                                                       | string       |
            | sysEnv                  | app                                                            | string       |
            | business unit           | BBVA Mexico                                                    | string       |
            | site app name           | App BBVA Mexico                                                | string       |
            | project name            | Glomo                                                          | string       |
            | device mobile           | si                                                             | string       |
            | user userState          | logado                                                         | string       |
            | user segment global     | 003001                                                         | string       |
            | profile ID              | profileID                                                      | regexp named |
            | user age                | age                                                            | regexp named |
            | user gender             | gender                                                         | regexp named |
            | internal campaign       |                                                                | empty array  |
            | optimization attributes |                                                                | empty array  |

    @ANA_LPDL008
    @analytics
    @MX
    @web
    @vbank @android @ios
    @backend(test)
    @web-done
    Scenario: Access to offers with support for loan decrease offer - Page View - Offer out of schedule
        Given a user with the following criteria
            | criteria                  |
            | decrease loan plans offer |
        When the user selects payment plan offer "decrease loan not out of schedule"
        Then the device contains the following variables
            | item                    | value                                                      | type         |
            | analytics               | analytics/glomo_base                                       | json schema  |
            | version DL              | 20250414_5.0                                               | string       |
            | page name               | app:privada:personas:plan de reestructura                  | string       |
            | level 1                 | plan de reestructura                                       | string       |
            | level 2                 |                                                            | string       |
            | language                | ES                                                         | string       |
            | page area               | privada                                                    | string       |
            | page intent             | informacion                                                | string       |
            | channel                 | online                                                     | string       |
            | page instance ID        | de                                                         | string       |
            | page info version       | appVersion                                                 | regexp named |
            | page segment            | personas                                                   | string       |
            | sysEnv                  | app                                                        | string       |
            | business unit           | BBVA Mexico                                                | string       |
            | site app name           | App BBVA Mexico                                            | string       |
            | project name            | Glomo                                                      | string       |
            | device mobile           | si                                                         | string       |
            | user userState          | logado                                                     | string       |
            | user segment global     | 003001                                                     | string       |
            | profile ID              | profileID                                                  | regexp named |
            | user age                | age                                                        | regexp named |
            | user gender             | gender                                                     | regexp named |
            | internal campaign       |                                                            | empty array  |
            | optimization attributes |                                                            | empty array  |

    @ANA_LPDL009
    @analytics
    @MX
    @web
    @vbank @android @ios
    @backend(test)
    @web-done
    Scenario: Access to offers with support for fixed card payments - Page View - Error on service
        Given a user with the following criteria
            | criteria                  |
            | decrease loan plans offer |
        When the user selects payment plan offer "decrease loan not available error on offer"
        Then the device contains the following variables
            | item                    | value                                                       | type         |
            | analytics               | analytics/glomo_base                                        | json schema  |
            | version DL              | 20250414_5.0                                                | string       |
            | page name               | app:privada:personas:plan de reestructura:error de servicio | string       |
            | level 1                 | plan de reestructura                                        | string       |
            | level 2                 | error de servicio                                           | string       |
            | error page              | error de servicio                                           | string       |
            | language                | ES                                                          | string       |
            | page area               | privada                                                     | string       |
            | page intent             | informacion                                                 | string       |
            | channel                 | online                                                      | string       |
            | page instance ID        | de                                                          | string       |
            | page info version       | appVersion                                                  | regexp named |
            | page segment            | personas                                                    | string       |
            | sysEnv                  | app                                                         | string       |
            | business unit           | BBVA Mexico                                                 | string       |
            | site app name           | App BBVA Mexico                                             | string       |
            | project name            | Glomo                                                       | string       |
            | device mobile           | si                                                          | string       |
            | user userState          | logado                                                      | string       |
            | user segment global     | 003001                                                      | string       |
            | profile ID              | profileID                                                   | regexp named |
            | user age                | age                                                         | regexp named |
            | user gender             | gender                                                      | regexp named |
            | internal campaign       |                                                             | empty array  |
            | optimization attributes |                                                             | empty array  |

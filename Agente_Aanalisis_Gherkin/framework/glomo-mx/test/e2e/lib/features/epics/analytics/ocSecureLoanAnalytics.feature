@ocSecureLoanAnalytics
Feature: Analytics - Oc Secure Loan

    @ANA_LOM001
    @analytics
    @web @android @ios
    @MX @backend(test)
    @vbank
    @web-done
    Scenario: App On Click Start
        Given a user with the following criteria
            | criteria        |
            | oc secure loan  |
        And the user goes to the offers section
        And the analytics interceptor service is initiated
        When the user goes to the oc secure loan offer
        Then the analytics events contains the following variables
            | item                                         | value                                                                                                                              | type         | event              |
            | analytics                                    | analytics/glomo_base                                                                                                               | json schema  | App On Click Start |
            | version DL                                   | 20250414_5.0                                                                                                                       | string       | App On Click Start |
            | page name                                    | app:privada:personas:oportunidades                                                                                                 | string       | App On Click Start |
            | level 1                                      | oportunidades                                                                                                                      | string       | App On Click Start |
            | language                                     | ES                                                                                                                                 | string       | App On Click Start |
            | page area                                    | privada                                                                                                                            | string       | App On Click Start |
            | page intent                                  | informacion                                                                                                                        | string       | App On Click Start |
            | channel                                      | online                                                                                                                             | string       | App On Click Start |
            | page instance ID                             | de                                                                                                                                 | string       | App On Click Start |
            | page info version                            | appVersion                                                                                                                         | regexp named | App On Click Start |
            | page segment                                 | personas                                                                                                                           | string       | App On Click Start |
            | sysEnv                                       | app                                                                                                                                | string       | App On Click Start |
            | business unit                                | BBVA Mexico                                                                                                                        | string       | App On Click Start |
            | site app name                                | App BBVA Mexico                                                                                                                    | string       | App On Click Start |
            | project name                                 | Glomo                                                                                                                              | string       | App On Click Start |
            | device mobile                                | si                                                                                                                                 | string       | App On Click Start |
            | user userState                               | logado                                                                                                                             | string       | App On Click Start |
            | user segment global                          | 003001                                                                                                                             | string       | App On Click Start |
            | profile ID                                   | profileID                                                                                                                          | regexp named | App On Click Start |
            | user gender                                  | gender                                                                                                                             | regexp named | App On Click Start |
            | user age                                     | age                                                                                                                                | regexp named | App On Click Start |
            | global application                           | oc loan secure                                                                                                                     | string       | App On Click Start |
            | application name                             | prestamo personal con garantias                                                                                                    | string       | App On Click Start |
            | application type                             | simulador                                                                                                                          | string       | App On Click Start |
            | fulfillment model                            | online                                                                                                                             | string       | App On Click Start |
            | application step                             | oportunidades                                                                                                                      | string       | App On Click Start |
            | product primary category                     | prestamos                                                                                                                          | string       | App On Click Start |
            | product subtype                              | prestamo personal                                                                                                                  | string       | App On Click Start |
            | internal campaign attributes location        | contract product section--centro-12-13                                                                                             | string       | App On Click Start |
            | internal campaign attributes campaign format | list                                                                                                                               | string       | App On Click Start |
            | internal campaign attributes collective code | -                                                                                                                                  | string       | App On Click Start |
            | internal campaign attributes name            | -descubre cuanto podrias solicitar al dejar tus inversiones como garantia                                                          | string       | App On Click Start |
            | internal campaign attributes product         | prestamos                                                                                                                          | string       | App On Click Start |
            | internal campaign event name                 | IntCmpClick                                                                                                                        | string       | App On Click Start |
            | internal campaign site action name           | contract product section--centro-12-13:list::-descubre cuanto podrias solicitar al dejar tus inversiones como garantia:prestamos:: | string       | App On Click Start |
            | optimization attributes                      |                                                                                                                                    | empty array  | App On Click Start |

    @ANA_LOM002
    @analytics
    @web @android @ios
    @MX @backend(test)
    @vbank
    @web-done
    Scenario: App Page Visit
        Given a user with the following criteria
            | criteria        |
            | oc secure loan  |
        When the user goes to the oc secure loan offer
        Then the device contains the following variables
            | item                     | value                                                                | type         |
            | analytics                | analytics/glomo_base                                                 | json schema  |
            | version DL               | 20250414_5.0                                                         | string       |
            | page name                | app:privada:patrimonial:prestamo personal con garantias:1 beneficios | string       |
            | level 1                  | prestamo personal con garantias                                      | string       |
            | level 2                  | 1 beneficios                                                         | string       |
            | language                 | ES                                                                   | string       |
            | page area                | privada                                                              | string       |
            | page intent              | informacion                                                          | string       |
            | channel                  | online                                                               | string       |
            | page instance ID         | de                                                                   | string       |
            | page info version        | appVersion                                                           | regexp named |
            | page segment             | patrimonial                                                          | string       |
            | sysEnv                   | app                                                                  | string       |
            | business unit            | BBVA Mexico                                                          | string       |
            | site app name            | App BBVA Mexico                                                      | string       |
            | project name             | Glomo                                                                | string       |
            | device mobile            | si                                                                   | string       |
            | user userState           | logado                                                               | string       |
            | user segment global      | 003003                                                               | string       |
            | profile ID               | profileID                                                            | regexp named |
            | user gender              | gender                                                               | regexp named |
            | user age                 | age                                                                  | regexp named |
            | global application       | oc loan secure                                                       | string       |
            | application name         | prestamo personal con garantias                                      | string       |
            | application type         | simulador                                                            | string       |
            | fulfillment model        | online                                                               | string       |
            | application step         | 1 beneficios                                                         | string       |
            | product primary category | prestamos                                                            | string       |
            | product subtype          | prestamo personal                                                    | string       |
            | internal campaign        |                                                                      | empty array  |
            | optimization attributes  |                                                                      | empty array  |

    @ANA_LOM003
    @analytics
    @web @android @ios
    @MX @backend(test)
    @vbank
    @web-done
    Scenario: App Started
        Given a user with the following criteria
            | criteria        |
            | oc secure loan  |
        And the user goes to the oc secure loan offer
        And the analytics interceptor service is initiated
        When the user goes to the "offer" step
        Then the analytics event "App Started" contains the following variables
            | item                     | value                                                                | type         |
            | analytics                | analytics/glomo_base                                                 | json schema  |
            | version DL               | 20250414_5.0                                                         | string       |
            | page name                | app:privada:patrimonial:prestamo personal con garantias:1 beneficios | string       |
            | level 1                  | prestamo personal con garantias                                      | string       |
            | level 2                  | 1 beneficios                                                         | string       |
            | language                 | ES                                                                   | string       |
            | page area                | privada                                                              | string       |
            | page intent              | informacion                                                          | string       |
            | channel                  | online                                                               | string       |
            | page instance ID         | de                                                                   | string       |
            | page info version        | appVersion                                                           | regexp named |
            | page segment             | patrimonial                                                          | string       |
            | sysEnv                   | app                                                                  | string       |
            | business unit            | BBVA Mexico                                                          | string       |
            | site app name            | App BBVA Mexico                                                      | string       |
            | project name             | Glomo                                                                | string       |
            | device mobile            | si                                                                   | string       |
            | user userState           | logado                                                               | string       |
            | user segment global      | 003003                                                               | string       |
            | profile ID               | profileID                                                            | regexp named |
            | user gender              | gender                                                               | regexp named |
            | user age                 | age                                                                  | regexp named |
            | global application       | oc loan secure                                                       | string       |
            | application name         | prestamo personal con garantias                                      | string       |
            | application type         | simulador                                                            | string       |
            | fulfillment model        | online                                                               | string       |
            | application step         | continuar                                                            | string       |
            | product primary category | prestamos                                                            | string       |
            | product subtype          | prestamo personal                                                    | string       |
            | internal campaign        |                                                                      | empty array  |
            | optimization attributes  |                                                                      | empty array  |

    @ANA_LOM004
    @analytics
    @web @android @ios
    @MX @backend(test)
    @vbank
    @web-done
    Scenario: App Step 2
        Given a user with the following criteria
            | criteria        |
            | oc secure loan  |
        And the user goes to the oc secure loan offer
        And the analytics interceptor service is initiated
        When the user goes to the "offer" step
        Then the analytics event "App Step 2" contains the following variables
            | item                     | value                                                                | type         |
            | analytics                | analytics/glomo_base                                                 | json schema  |
            | version DL               | 20250414_5.0                                                         | string       |
            | page name                | app:privada:patrimonial:prestamo personal con garantias:2 simulacion | string       |
            | level 1                  | prestamo personal con garantias                                      | string       |
            | level 2                  | 2 simulacion                                                         | string       |
            | language                 | ES                                                                   | string       |
            | page area                | privada                                                              | string       |
            | page intent              | informacion                                                          | string       |
            | channel                  | online                                                               | string       |
            | page instance ID         | de                                                                   | string       |
            | page info version        | appVersion                                                           | regexp named |
            | page segment             | patrimonial                                                          | string       |
            | sysEnv                   | app                                                                  | string       |
            | business unit            | BBVA Mexico                                                          | string       |
            | site app name            | App BBVA Mexico                                                      | string       |
            | project name             | Glomo                                                                | string       |
            | device mobile            | si                                                                   | string       |
            | user userState           | logado                                                               | string       |
            | user segment global      | 003003                                                               | string       |
            | profile ID               | profileID                                                            | regexp named |
            | user gender              | gender                                                               | regexp named |
            | user age                 | age                                                                  | regexp named |
            | global application       | oc loan secure                                                       | string       |
            | application name         | prestamo personal con garantias                                      | string       |
            | application type         | simulador                                                            | string       |
            | fulfillment model        | online                                                               | string       |
            | application step         | 2 simulacion                                                         | string       |
            | product primary category | prestamos                                                            | string       |
            | product subtype          | prestamo personal                                                    | string       |
            | internal campaign        |                                                                      | empty array  |
            | optimization attributes  |                                                                      | empty array  |

    @ANA_LOM005
    @analytics
    @web @android @ios
    @MX @backend(test)
    @vbank
    @web-done
    Scenario: App Step 3
        Given a user with the following criteria
            | criteria        |
            | oc secure loan  |
        And the user goes to the oc secure loan offer
        And the analytics interceptor service is initiated
        When the user goes to the "simulation" step
        Then the analytics event "App Step 3" contains the following variables
            | item                       | value                                                                  | type         |
            | analytics                  | analytics/glomo_base                                                   | json schema  |
            | version DL                 | 20250414_5.0                                                           | string       |
            | page name                  | app:privada:patrimonial:prestamo personal con garantias:3 confirmacion | string       |
            | level 1                    | prestamo personal con garantias                                        | string       |
            | level 2                    | 3 confirmacion                                                         | string       |
            | language                   | ES                                                                     | string       |
            | page area                  | privada                                                                | string       |
            | page intent                | informacion                                                            | string       |
            | channel                    | online                                                                 | string       |
            | page instance ID           | de                                                                     | string       |
            | page info version          | appVersion                                                             | regexp named |
            | page segment               | patrimonial                                                            | string       |
            | sysEnv                     | app                                                                    | string       |
            | business unit              | BBVA Mexico                                                            | string       |
            | site app name              | App BBVA Mexico                                                        | string       |
            | project name               | Glomo                                                                  | string       |
            | device mobile              | si                                                                     | string       |
            | user userState             | logado                                                                 | string       |
            | user segment global        | 003003                                                                 | string       |
            | profile ID                 | profileID                                                              | regexp named |
            | user gender                | gender                                                                 | regexp named |
            | user age                   | age                                                                    | regexp named |
            | global application         | oc loan secure                                                         | string       |
            | application name           | prestamo personal con garantias                                        | string       |
            | application type           | simulador                                                              | string       |
            | fulfillment model          | online                                                                 | string       |
            | application step           | 3 confirmacion                                                         | string       |
            | product primary category   | prestamos                                                              | string       |
            | product subtype            | prestamo personal                                                      | string       |
            | product amount             | 77540000                                                               | number       |
            | product currency           | MXN                                                                    | string       |
            | product payment amount     | 749553.4                                                               | number       |
            | product interest rate      | 10                                                                     | number       |
            | product number of payments | 24                                                                     | string       |
            | product payment type       | a plazos                                                               | string       |
            | internal campaign          |                                                                        | empty array  |
            | optimization attributes    |                                                                        | empty array  |

    @ANA_LOM006
    @analytics
    @web @android @ios
    @MX @backend(test)
    @vbank
    @web-done
    Scenario: App Completed - Finalizado
        Given a user with the following criteria
            | criteria        |
            | oc secure loan  |
        And the user goes to the oc secure loan offer
        And the analytics interceptor service is initiated
        When the user goes to the "summary" step
        Then the analytics event "App Completed" contains the following variables
            | item                         | value                                                                  | type         |
            | analytics                    | analytics/glomo_base                                                   | json schema  |
            | version DL                   | 20250414_5.0                                                           | string       |
            | page name                    | app:privada:patrimonial:prestamo personal con garantias:pagina exitosa | string       |
            | level 1                      | prestamo personal con garantias                                        | string       |
            | level 2                      | pagina exitosa                                                         | string       |
            | language                     | ES                                                                     | string       |
            | page area                    | privada                                                                | string       |
            | page intent                  | informacion                                                            | string       |
            | channel                      | online                                                                 | string       |
            | page instance ID             | de                                                                     | string       |
            | page info version            | appVersion                                                             | regexp named |
            | page segment                 | patrimonial                                                            | string       |
            | sysEnv                       | app                                                                    | string       |
            | business unit                | BBVA Mexico                                                            | string       |
            | site app name                | App BBVA Mexico                                                        | string       |
            | project name                 | Glomo                                                                  | string       |
            | device mobile                | si                                                                     | string       |
            | user userState               | logado                                                                 | string       |
            | user segment global          | 003003                                                                 | string       |
            | profile ID                   | profileID                                                              | regexp named |
            | user gender                  | gender                                                                 | regexp named |
            | user age                     | age                                                                    | regexp named |
            | global application           | oc loan secure                                                         | string       |
            | application name             | prestamo personal con garantias                                        | string       |
            | application type             | simulador                                                              | string       |
            | fulfillment model            | online                                                                 | string       |
            | application state            | finalizado                                                             | string       |
            | application operation number | 0422V2MNRG                                                             | string       |
            | application step             | pagina exitosa                                                         | string       |
            | product primary category     | prestamos                                                              | string       |
            | product subtype              | prestamo personal                                                      | string       |
            | product amount               | 77540000                                                               | number       |
            | product currency             | MXN                                                                    | string       |
            | product payment amount       | 749553.4                                                               | number       |
            | product interest rate        | 10                                                                     | number       |
            | product number of payments   | 24                                                                     | string       |
            | product payment type         | a plazos                                                               | string       |
            | product state                | finalizado                                                             | string       |
            | internal campaign            |                                                                        | empty array  |
            | optimization attributes      |                                                                        | empty array  |

    @ANA_LOM007
    @analytics
    @web @android @ios
    @MX @backend(test)
    @vbank
    @web-done
    Scenario: Page View - Editar garantia
        Given a user with the following criteria
            | criteria        |
            | oc secure loan  |
        And the user goes to the oc secure loan offer
        When the user goes to the "guarantee" step
        Then the device contains the following variables
            | item                    | value                                                                   | type             |
            | analytics               | analytics/glomo_base                                                    | json schema      |
            | version DL              | 20250414_5.0                                                            | string           |
            | page name               | app:privada:patrimonial:prestamo personal con garantias:editar garantia | string           |
            | level 1                 | prestamo personal con garantias                                         | string           |
            | level 2                 | editar garantia                                                         | string           |
            | language                | ES                                                                      | string           |
            | page area               | privada                                                                 | string           |
            | page intent             | informacion                                                             | string           |
            | channel                 | online                                                                  | string           |
            | page instance ID        | de                                                                      | string           |
            | page info version       | appVersion                                                              | regexp named     |
            | page segment            | patrimonial                                                             | string           |
            | sysEnv                  | app                                                                     | string           |
            | business unit           | BBVA Mexico                                                             | string           |
            | site app name           | App BBVA Mexico                                                         | string           |
            | project name            | Glomo                                                                   | string           |
            | device mobile           | si                                                                      | string           |
            | user userState          | logado                                                                  | string           |
            | user segment global     | 003003                                                                  | string           |
            | profile ID              | profileID                                                               | regexp named     |
            | user gender             | gender                                                                  | regexp named     |
            | user age                | age                                                                     | regexp named     |
            | internal campaign       |                                                                         | empty array      |
            | optimization attributes |                                                                         | empty array      |
            | application             |                                                                         | empty str object |
            | products attributes     |                                                                         | empty array      |

    @ANA_LOM008
    @analytics
    @web @android @ios
    @MX @backend(test)
    @vbank
    @web-done
    Scenario: Page View - Editar porcentaje
        Given a user with the following criteria
            | criteria        |
            | oc secure loan  |
        And the user goes to the oc secure loan offer
        When the user goes to the "percentage" step
        Then the device contains the following variables
            | item                    | value                                                                                     | type             |
            | analytics               | analytics/glomo_base                                                                      | json schema      |
            | version DL              | 20250414_5.0                                                                              | string           |
            | page name               | app:privada:patrimonial:prestamo personal con garantias:editar garantia:editar porcentaje | string           |
            | level 1                 | prestamo personal con garantias                                                           | string           |
            | level 2                 | editar garantia                                                                           | string           |
            | level 3                 | editar porcentaje                                                                         | string           |
            | language                | ES                                                                                        | string           |
            | page area               | privada                                                                                   | string           |
            | page intent             | informacion                                                                               | string           |
            | channel                 | online                                                                                    | string           |
            | page instance ID        | de                                                                                        | string           |
            | page info version       | appVersion                                                                                | regexp named     |
            | page segment            | patrimonial                                                                               | string           |
            | sysEnv                  | app                                                                                       | string           |
            | business unit           | BBVA Mexico                                                                               | string           |
            | site app name           | App BBVA Mexico                                                                           | string           |
            | project name            | Glomo                                                                                     | string           |
            | device mobile           | si                                                                                        | string           |
            | user userState          | logado                                                                                    | string           |
            | user segment global     | 003003                                                                                    | string           |
            | profile ID              | profileID                                                                                 | regexp named     |
            | user gender             | gender                                                                                    | regexp named     |
            | user age                | age                                                                                       | regexp named     |
            | internal campaign       |                                                                                           | empty array      |
            | optimization attributes |                                                                                           | empty array      |
            | application             |                                                                                           | empty str object |
            | products attributes     |                                                                                           | empty array      |

    @ANA_LOM009
    @analytics
    @web @android @ios
    @MX @backend(test)
    @vbank
    @web-done
    Scenario: Page View - Error Page - Error Operacion No Disponible
        Given a user with the following criteria
            | criteria        |
            | oc secure loan  |
        And the user goes to the oc secure loan offer
        And the user goes to the "offer" step
        When the user retries "3" more times
        Then the device contains the following variables
            | item                    | value                                                                                 | type             |
            | analytics               | analytics/glomo_base                                                                  | json schema      |
            | version DL              | 20250414_5.0                                                                          | string           |
            | page name               | app:privada:patrimonial:prestamo personal con garantias:error operacion no disponible | string           |
            | level 1                 | prestamo personal con garantias                                                       | string           |
            | level 2                 | error operacion no disponible                                                         | string           |
            | language                | ES                                                                                    | string           |
            | page area               | privada                                                                               | string           |
            | page intent             | informacion                                                                           | string           |
            | channel                 | online                                                                                | string           |
            | page instance ID        | de                                                                                    | string           |
            | page info version       | appVersion                                                                            | regexp named     |
            | page segment            | patrimonial                                                                           | string           |
            | sysEnv                  | app                                                                                   | string           |
            | business unit           | BBVA Mexico                                                                           | string           |
            | site app name           | App BBVA Mexico                                                                       | string           |
            | project name            | Glomo                                                                                 | string           |
            | device mobile           | si                                                                                    | string           |
            | user userState          | logado                                                                                | string           |
            | user segment global     | 003003                                                                                | string           |
            | profile ID              | profileID                                                                             | regexp named     |
            | user gender             | gender                                                                                | regexp named     |
            | user age                | age                                                                                   | regexp named     |
            | error page              | error operacion no disponible                                                         | string           |
            | internal campaign       |                                                                                       | empty array      |
            | optimization attributes |                                                                                       | empty array      |
            | application             |                                                                                       | empty str object |
            | products attributes     |                                                                                       | empty array      |

    @ANA_LOM010
    @analytics
    @web @android @ios
    @MX @backend(test)
    @vbank
    @web-done
    Scenario: Page View - Error Page - Error Operacion No Realizada
        Given a user with the following criteria
            | criteria        |
            | oc secure loan  |
        And the user goes to the oc secure loan offer
        And the user goes to the "offer" step
        When the user retries "3" more times
        Then the device contains the following variables
            | item                    | value                                                                                 | type             |
            | analytics               | analytics/glomo_base                                                                  | json schema      |
            | version DL              | 20250414_5.0                                                                          | string           |
            | page name               | app:privada:patrimonial:prestamo personal con garantias:error operacion no realizada  | string           |
            | level 1                 | prestamo personal con garantias                                                       | string           |
            | level 2                 | error operacion no realizada                                                          | string           |
            | language                | ES                                                                                    | string           |
            | page area               | privada                                                                               | string           |
            | page intent             | informacion                                                                           | string           |
            | channel                 | online                                                                                | string           |
            | page instance ID        | de                                                                                    | string           |
            | page info version       | appVersion                                                                            | regexp named     |
            | page segment            | patrimonial                                                                           | string           |
            | sysEnv                  | app                                                                                   | string           |
            | business unit           | BBVA Mexico                                                                           | string           |
            | site app name           | App BBVA Mexico                                                                       | string           |
            | project name            | Glomo                                                                                 | string           |
            | device mobile           | si                                                                                    | string           |
            | user userState          | logado                                                                                | string           |
            | user segment global     | 003003                                                                                | string           |
            | profile ID              | profileID                                                                             | regexp named     |
            | user gender             | gender                                                                                | regexp named     |
            | user age                | age                                                                                   | regexp named     |
            | error page              | error operacion no realizada                                                          | string           |
            | internal campaign       |                                                                                       | empty array      |
            | optimization attributes |                                                                                       | empty array      |
            | application             |                                                                                       | empty str object |
            | products attributes     |                                                                                       | empty array      |

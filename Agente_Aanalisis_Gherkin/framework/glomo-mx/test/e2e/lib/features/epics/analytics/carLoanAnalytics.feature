@carLoanAnalytics
Feature: Analytics - Car Loan

    @ANA_EVENT_CLPA001
    @analytics
    @MX @web @vbank @backend(test) @web-done @android @ios
    Scenario: App onclick start - car loan
        Given a user with the following criteria
            | criteria           |
            | car loan           |
            | car loan with mail |
        When the user accesses contract product section
        And the analytics interceptor service is initiated
        And the user accesses to the car loan offer from "opportunities"
        Then the analytics events contains the following variables
            | item                                         | value                                                                                             | type         | event              |
            | analytics                                    | analytics/glomo_base                                                                              | json schema  | App On Click Start |
            | version DL                                   | 20250414_5.0                                                                                      | string       | App On Click Start |
            | page name                                    | app:privada:personas:oportunidades                                                                | string       | App On Click Start |
            | level 1                                      | oportunidades                                                                                     | string       | App On Click Start |
            | language                                     | ES                                                                                                | string       | App On Click Start |
            | page area                                    | privada                                                                                           | string       | App On Click Start |
            | page intent                                  | informacion                                                                                       | string       | App On Click Start |
            | channel                                      | online                                                                                            | string       | App On Click Start |
            | page instance ID                             | de                                                                                                | string       | App On Click Start |
            | page info version                            | appVersion                                                                                        | regexp named | App On Click Start |
            | page segment                                 | personas                                                                                          | string       | App On Click Start |
            | sysEnv                                       | app                                                                                               | string       | App On Click Start |
            | business unit                                | BBVA Mexico                                                                                       | string       | App On Click Start |
            | site app name                                | App BBVA Mexico                                                                                   | string       | App On Click Start |
            | project name                                 | DIY E2E Sales                                                                                     | string       | App On Click Start |
            | device mobile                                | si                                                                                                | string       | App On Click Start |
            | user userState                               | logado                                                                                            | string       | App On Click Start |
            | user segment global                          | 003001                                                                                            | string       | App On Click Start |
            | profile ID                                   | profileID                                                                                         | regexp named | App On Click Start |
            | user gender                                  | gender                                                                                            | regexp named | App On Click Start |
            | user age                                     | age                                                                                               | regexp named | App On Click Start |
            | global application                           | car loan                                                                                          | string       | App On Click Start |
            | application name                             | prestamo vehicular                                                                                | string       | App On Click Start |
            | application type                             | contratacion                                                                                      | string       | App On Click Start |
            | application step                             | me interesa                                                                                       | string       | App On Click Start |
            | fulfillment model                            | online                                                                                            | string       | App On Click Start |
            | product primary category                     | prestamos                                                                                         | string       | App On Click Start |
            | product subtype                              | prestamo vehicular                                                                                | string       | App On Click Start |
            | internal campaign attributes location        | contract product section--centro-6-9                                                              | string       | App On Click Start |
            | internal campaign attributes campaign format | list                                                                                              | string       | App On Click Start |
            | internal campaign attributes name            | -obten un credito de auto                                                                         | string       | App On Click Start |
            | internal campaign attributes product         | prestamo vehicular                                                                                | string       | App On Click Start |
            | internal campaign event name                 | IntCmpClick                                                                                       | string       | App On Click Start |
            | internal campaign site action name           | contract product section--centro-6-9:list::-obten un credito de auto:prestamo vehicular::562000   | string       | App On Click Start |
            | optimization attributes                      |                                                                                                   | empty array  | App On Click Start |

    @ANA_EVENT_CLPA002
    @analytics
    @MX @web @vbank @backend(test) @web-done @android @ios
    Scenario: App page visit - car loan
        Given a user with the following criteria
            | criteria           |
            | car loan           |
            | car loan with mail |
        When the user accesses contract product section
        And the analytics interceptor service is initiated
        And the user accesses to the car loan offer from "opportunities"
        Then the analytics events contains the following variables
            | item                     | value                                                               | type         | event          |
            | analytics                | analytics/glomo_base                                                | json schema  | App Page Visit |
            | version DL               | 20250414_5.0                                                        | string       | App Page Visit |
            | page name                | app:privada:personas:prestamos:prestamo vehicular:1 datos solicitud | string       | App Page Visit |
            | level 1                  | prestamos                                                           | string       | App Page Visit |
            | level 2                  | prestamo vehicular                                                  | string       | App Page Visit |
            | level 3                  | 1 datos solicitud                                                   | string       | App Page Visit |
            | language                 | ES                                                                  | string       | App Page Visit |
            | page area                | privada                                                             | string       | App Page Visit |
            | page intent              | transaccion                                                         | string       | App Page Visit |
            | channel                  | online                                                              | string       | App Page Visit |
            | page instance ID         | de                                                                  | string       | App Page Visit |
            | page info version        | appVersion                                                          | regexp named | App Page Visit |
            | page segment             | personas                                                            | string       | App Page Visit |
            | sysEnv                   | app                                                                 | string       | App Page Visit |
            | business unit            | BBVA Mexico                                                         | string       | App Page Visit |
            | site app name            | App BBVA Mexico                                                     | string       | App Page Visit |
            | project name             | DIY E2E Sales                                                       | string       | App Page Visit |
            | device mobile            | si                                                                  | string       | App Page Visit |
            | user userState           | logado                                                              | string       | App Page Visit |
            | user segment global      | 003001                                                              | string       | App Page Visit |
            | profile ID               | profileID                                                           | regexp named | App Page Visit |
            | user gender              | gender                                                              | regexp named | App Page Visit |
            | user age                 | age                                                                 | regexp named | App Page Visit |
            | global application       | car loan                                                            | string       | App Page Visit |
            | application name         | prestamo vehicular                                                  | string       | App Page Visit |
            | application type         | contratacion                                                        | string       | App Page Visit |
            | application step         | 1 datos solicitud                                                   | string       | App Page Visit |
            | fulfillment model        | online                                                              | string       | App Page Visit |
            | qualified visits         | true                                                                | string       | App Page Visit |
            | product primary category | prestamos                                                           | string       | App Page Visit |
            | product subtype          | prestamo vehicular                                                  | string       | App Page Visit |
            | internal campaign        |                                                                     | empty array  | App Page Visit |
            | optimization attributes  |                                                                     | empty array  | App Page Visit |

    @ANA_EVENT_CLPA003
    @analytics
    @MX @web @vbank @backend(test) @web-done @android @ios
    Scenario: App started - car loan
        Given a user with the following criteria
            | criteria           |
            | car loan           |
            | car loan with mail |
        When the user accesses to the car loan offer from "opportunities"
        And the analytics interceptor service is initiated
        And the user selects the "used" car option
        Then the analytics events contains the following variables
            | item                     | value                                                               | type         | event       |
            | analytics                | analytics/glomo_base                                                | json schema  | App Started |
            | version DL               | 20250414_5.0                                                        | string       | App Started |
            | page name                | app:privada:personas:prestamos:prestamo vehicular:1 datos solicitud | string       | App Started |
            | level 1                  | prestamos                                                           | string       | App Started |
            | level 2                  | prestamo vehicular                                                  | string       | App Started |
            | level 3                  | 1 datos solicitud                                                   | string       | App Started |
            | language                 | ES                                                                  | string       | App Started |
            | page area                | privada                                                             | string       | App Started |
            | page intent              | transaccion                                                         | string       | App Started |
            | channel                  | online                                                              | string       | App Started |
            | page instance ID         | de                                                                  | string       | App Started |
            | page info version        | appVersion                                                          | regexp named | App Started |
            | page segment             | personas                                                            | string       | App Started |
            | sysEnv                   | app                                                                 | string       | App Started |
            | business unit            | BBVA Mexico                                                         | string       | App Started |
            | site app name            | App BBVA Mexico                                                     | string       | App Started |
            | project name             | DIY E2E Sales                                                       | string       | App Started |
            | device mobile            | si                                                                  | string       | App Started |
            | user userState           | logado                                                              | string       | App Started |
            | user segment global      | 003001                                                              | string       | App Started |
            | profile ID               | profileID                                                           | regexp named | App Started |
            | user gender              | gender                                                              | regexp named | App Started |
            | user age                 | age                                                                 | regexp named | App Started |
            | global application       | car loan                                                            | string       | App Started |
            | application name         | prestamo vehicular                                                  | string       | App Started |
            | application type         | contratacion                                                        | string       | App Started |
            | application step         | seminuevo                                                           | string       | App Started |
            | fulfillment model        | online                                                              | string       | App Started |
            | product primary category | prestamos                                                           | string       | App Started |
            | product subtype          | prestamo vehicular                                                  | string       | App Started |
            | internal campaign        |                                                                     | empty array  | App Started |
            | optimization attributes  |                                                                     | empty array  | App Started |

    @ANA_EVENT_CLPA004
    @analytics
    @MX @web @vbank @backend(test) @web-done @android @ios
    Scenario: App step 2 -  car loan
        Given a user with the following criteria
            | criteria           |
            | car loan           |
            | car loan with mail |
        When the user accesses to the car loan offer from "opportunities"
        And the analytics interceptor service is initiated
        And the user continues to the "terms and conditions" step
        Then the analytics events contains the following variables
            | item                       | value                                                                      | type         | event      |
            | analytics                  | analytics/glomo_base                                                       | json schema  | App Step 2 |
            | version DL                 | 20250414_5.0                                                               | string       | App Step 2 |
            | page name                  | app:privada:personas:prestamos:prestamo vehicular:2 terminos y condiciones | string       | App Step 2 |
            | level 1                    | prestamos                                                                  | string       | App Step 2 |
            | level 2                    | prestamo vehicular                                                         | string       | App Step 2 |
            | level 3                    | 2 terminos y condiciones                                                   | string       | App Step 2 |
            | language                   | ES                                                                         | string       | App Step 2 |
            | page area                  | privada                                                                    | string       | App Step 2 |
            | page intent                | transaccion                                                                | string       | App Step 2 |
            | channel                    | online                                                                     | string       | App Step 2 |
            | page instance ID           | de                                                                         | string       | App Step 2 |
            | page info version          | appVersion                                                                 | regexp named | App Step 2 |
            | page segment               | personas                                                                   | string       | App Step 2 |
            | sysEnv                     | app                                                                        | string       | App Step 2 |
            | business unit              | BBVA Mexico                                                                | string       | App Step 2 |
            | site app name              | App BBVA Mexico                                                            | string       | App Step 2 |
            | project name               | DIY E2E Sales                                                              | string       | App Step 2 |
            | device mobile              | si                                                                         | string       | App Step 2 |
            | user userState             | logado                                                                     | string       | App Step 2 |
            | user segment global        | 003001                                                                     | string       | App Step 2 |
            | profile ID                 | profileID                                                                  | regexp named | App Step 2 |
            | user gender                | gender                                                                     | regexp named | App Step 2 |
            | user age                   | age                                                                        | regexp named | App Step 2 |
            | application typology       | nuevo                                                                      | string       | App Step 2 |
            | global application         | car loan                                                                   | string       | App Step 2 |
            | application name           | prestamo vehicular                                                         | string       | App Step 2 |
            | application type           | contratacion                                                               | string       | App Step 2 |
            | application step           | 2 terminos y condiciones                                                   | string       | App Step 2 |
            | fulfillment model          | online                                                                     | string       | App Step 2 |
            | product primary category   | prestamos                                                                  | string       | App Step 2 |
            | product subtype            | prestamo vehicular                                                         | string       | App Step 2 |
            | product amount             | 562000                                                                     | number       | App Step 2 |
            | product payment amount     | 12784                                                                      | number       | App Step 2 |
            | product number of payments | 60                                                                         | number       | App Step 2 |
            | product interest rate      | 14.3                                                                       | string       | App Step 2 |
            | product currency           | MXN                                                                        | string       | App Step 2 |
            | internal campaign          |                                                                            | empty array  | App Step 2 |
            | optimization attributes    |                                                                            | empty array  | App Step 2 |

    @ANA_EVENT_CLPA005
    @analytics
    @MX @web @vbank @backend(test) @web-done @android @ios
    Scenario: App step 3 - car loan
        Given a user with the following criteria
            | criteria           |
            | car loan           |
            | car loan with mail |
        When the user accesses to the car loan offer from "opportunities"
        And the analytics interceptor service is initiated
        And the user continues to the "summary" step
        Then the analytics events contains the following variables
            | item                       | value                                                            | type         | event      |
            | analytics                  | analytics/glomo_base                                             | json schema  | App Step 3 |
            | version DL                 | 20250414_5.0                                                     | string       | App Step 3 |
            | page name                  | app:privada:personas:prestamos:prestamo vehicular:3 confirmacion | string       | App Step 3 |
            | level 1                    | prestamos                                                        | string       | App Step 3 |
            | level 2                    | prestamo vehicular                                               | string       | App Step 3 |
            | level 3                    | 3 confirmacion                                                   | string       | App Step 3 |
            | language                   | ES                                                               | string       | App Step 3 |
            | page area                  | privada                                                          | string       | App Step 3 |
            | page intent                | transaccion                                                      | string       | App Step 3 |
            | channel                    | online                                                           | string       | App Step 3 |
            | page instance ID           | de                                                               | string       | App Step 3 |
            | page info version          | appVersion                                                       | regexp named | App Step 3 |
            | page segment               | personas                                                         | string       | App Step 3 |
            | sysEnv                     | app                                                              | string       | App Step 3 |
            | business unit              | BBVA Mexico                                                      | string       | App Step 3 |
            | site app name              | App BBVA Mexico                                                  | string       | App Step 3 |
            | project name               | DIY E2E Sales                                                    | string       | App Step 3 |
            | device mobile              | si                                                               | string       | App Step 3 |
            | user userState             | logado                                                           | string       | App Step 3 |
            | user segment global        | 003001                                                           | string       | App Step 3 |
            | profile ID                 | profileID                                                        | regexp named | App Step 3 |
            | user gender                | gender                                                           | regexp named | App Step 3 |
            | user age                   | age                                                              | regexp named | App Step 3 |
            | application typology       | nuevo                                                            | string       | App Step 3 |
            | global application         | car loan                                                         | string       | App Step 3 |
            | application name           | prestamo vehicular                                               | string       | App Step 3 |
            | application type           | contratacion                                                     | string       | App Step 3 |
            | application step           | 3 confirmacion                                                   | string       | App Step 3 |
            | fulfillment model          | online                                                           | string       | App Step 3 |
            | product primary category   | prestamos                                                        | string       | App Step 3 |
            | product subtype            | prestamo vehicular                                               | string       | App Step 3 |
            | product amount             | 562000                                                           | number       | App Step 3 |
            | product payment amount     | 12784                                                            | number       | App Step 3 |
            | product number of payments | 60                                                               | number       | App Step 3 |
            | product interest rate      | 14.3                                                             | string       | App Step 3 |
            | product currency           | MXN                                                              | string       | App Step 3 |
            | internal campaign          |                                                                  | empty array  | App Step 3 |
            | optimization attributes    |                                                                  | empty array  | App Step 3 |

    @ANA_EVENT_CLPA006
    @analytics
    @MX @web @vbank @backend(test) @web-done @android @ios
    Scenario: App step 4 - car loan
        Given a user with the following criteria
            | criteria           |
            | car loan           |
            | car loan with mail |
        And the user accesses to the car loan offer from "opportunities"
        And the user continues to the "summary" step
        And the analytics interceptor service is initiated
        When the user continues to the otp screen
        Then the analytics events contains the following variables
            | item                       | value                                                   | type         | event      |
            | analytics                  | analytics/glomo_base                                    | json schema  | App Step 4 |
            | version DL                 | 20250414_5.0                                            | string       | App Step 4 |
            | page name                  | app:privada:personas:prestamos:prestamo vehicular:4 otp | string       | App Step 4 |
            | level 1                    | prestamos                                               | string       | App Step 4 |
            | level 2                    | prestamo vehicular                                      | string       | App Step 4 |
            | level 3                    | 4 otp                                                   | string       | App Step 4 |
            | language                   | ES                                                      | string       | App Step 4 |
            | page area                  | privada                                                 | string       | App Step 4 |
            | page intent                | transaccion                                             | string       | App Step 4 |
            | channel                    | online                                                  | string       | App Step 4 |
            | page instance ID           | de                                                      | string       | App Step 4 |
            | page info version          | appVersion                                              | regexp named | App Step 4 |
            | page segment               | personas                                                | string       | App Step 4 |
            | sysEnv                     | app                                                     | string       | App Step 4 |
            | business unit              | BBVA Mexico                                             | string       | App Step 4 |
            | site app name              | App BBVA Mexico                                         | string       | App Step 4 |
            | project name               | DIY E2E Sales                                           | string       | App Step 4 |
            | device mobile              | si                                                      | string       | App Step 4 |
            | user userState             | logado                                                  | string       | App Step 4 |
            | user segment global        | 003001                                                  | string       | App Step 4 |
            | profile ID                 | profileID                                               | regexp named | App Step 4 |
            | user gender                | gender                                                  | regexp named | App Step 4 |
            | user age                   | age                                                     | regexp named | App Step 4 |
            | application typology       | nuevo                                                   | string       | App Step 4 |
            | global application         | car loan                                                | string       | App Step 4 |
            | application name           | prestamo vehicular                                      | string       | App Step 4 |
            | application type           | contratacion                                            | string       | App Step 4 |
            | application step           | 4 otp                                                   | string       | App Step 4 |
            | fulfillment model          | online                                                  | string       | App Step 4 |
            | product primary category   | prestamos                                               | string       | App Step 4 |
            | product subtype            | prestamo vehicular                                      | string       | App Step 4 |
            | product amount             | 562000                                                  | number       | App Step 4 |
            | product payment amount     | 12784                                                   | number       | App Step 4 |
            | product number of payments | 60                                                      | number       | App Step 4 |
            | product interest rate      | 14.3                                                    | string       | App Step 4 |
            | product currency           | MXN                                                     | string       | App Step 4 |
            | internal campaign          |                                                         | empty array  | App Step 4 |
            | optimization attributes    |                                                         | empty array  | App Step 4 |

    @ANA_EVENT_CLPA007
    @analytics
    @MX @web @vbank @backend(test) @web-done @android @ios
    Scenario: App completed (approved) - car loan
        Given a user with the following criteria
            | criteria           |
            | car loan           |
            | car loan with mail |
        When the user accesses to the car loan offer from "opportunities"
        And the user continues to the "summary" step
        And the analytics interceptor service is initiated
        And the user accepts the summary
        Then the analytics events contains the following variables
            | item                         | value                                                            | type         | event         |
            | analytics                    | analytics/glomo_base                                             | json schema  | App Completed |
            | version DL                   | 20250414_5.0                                                     | string       | App Completed |
            | page name                    | app:privada:personas:prestamos:prestamo vehicular:pagina exitosa | string       | App Completed |
            | level 1                      | prestamos                                                        | string       | App Completed |
            | level 2                      | prestamo vehicular                                               | string       | App Completed |
            | level 3                      | pagina exitosa                                                   | string       | App Completed |
            | language                     | ES                                                               | string       | App Completed |
            | page area                    | privada                                                          | string       | App Completed |
            | page intent                  | transaccion                                                      | string       | App Completed |
            | channel                      | online                                                           | string       | App Completed |
            | page instance ID             | de                                                               | string       | App Completed |
            | page info version            | appVersion                                                       | regexp named | App Completed |
            | page segment                 | personas                                                         | string       | App Completed |
            | sysEnv                       | app                                                              | string       | App Completed |
            | business unit                | BBVA Mexico                                                      | string       | App Completed |
            | site app name                | App BBVA Mexico                                                  | string       | App Completed |
            | project name                 | DIY E2E Sales                                                    | string       | App Completed |
            | device mobile                | si                                                               | string       | App Completed |
            | user userState               | logado                                                           | string       | App Completed |
            | user segment global          | 003001                                                           | string       | App Completed |
            | profile ID                   | profileID                                                        | regexp named | App Completed |
            | user gender                  | gender                                                           | regexp named | App Completed |
            | user age                     | age                                                              | regexp named | App Completed |
            | application typology         | nuevo                                                            | string       | App Completed |
            | global application           | car loan                                                         | string       | App Completed |
            | application name             | prestamo vehicular                                               | string       | App Completed |
            | application type             | contratacion                                                     | string       | App Completed |
            | application step             | pagina exitosa                                                   | string       | App Completed |
            | application state            | contratado                                                       | string       | App Completed |
            | application operation number | 5023675                                                          | string       | App Completed |
            | fulfillment model            | online                                                           | string       | App Completed |
            | product primary category     | prestamos                                                        | string       | App Completed |
            | product subtype              | prestamo vehicular                                               | string       | App Completed |
            | product amount               | 562000                                                           | number       | App Completed |
            | product payment amount       | 12784                                                            | number       | App Completed |
            | product number of payments   | 60                                                               | number       | App Completed |
            | product interest rate        | 14.3                                                             | string       | App Completed |
            | product currency             | MXN                                                              | string       | App Completed |
            | product state                | contratado                                                       | string       | App Completed |
            | internal campaign            |                                                                  | empty array  | App Completed |
            | optimization attributes      |                                                                  | empty array  | App Completed |

    @ANA_EVENT_CLPA008
    @analytics
    @MX @web @vbank @backend(test) @web-done @android @ios
    Scenario: App completed (rejected) - car loan
        Given a user with the following criteria
            | criteria              |
            | car loan              |
            | car loan with mail    |
        When the user accesses to the car loan offer from "opportunities"
        And the user continues to the "summary" step
        And the analytics interceptor service is initiated
        And the user applies for the loan
        Then the analytics events contains the following variables
            | item                         | value                                                            | type         | event         |
            | analytics                    | analytics/glomo_base                                             | json schema  | App Completed |
            | version DL                   | 20250414_5.0                                                     | string       | App Completed |
            | page name                    | app:privada:personas:prestamos:prestamo vehicular:pagina exitosa | string       | App Completed |
            | level 1                      | prestamos                                                        | string       | App Completed |
            | level 2                      | prestamo vehicular                                               | string       | App Completed |
            | level 3                      | pagina exitosa                                                   | string       | App Completed |
            | language                     | ES                                                               | string       | App Completed |
            | page area                    | privada                                                          | string       | App Completed |
            | page intent                  | transaccion                                                      | string       | App Completed |
            | channel                      | online                                                           | string       | App Completed |
            | page instance ID             | de                                                               | string       | App Completed |
            | page info version            | appVersion                                                       | regexp named | App Completed |
            | page segment                 | personas                                                         | string       | App Completed |
            | sysEnv                       | app                                                              | string       | App Completed |
            | business unit                | BBVA Mexico                                                      | string       | App Completed |
            | site app name                | App BBVA Mexico                                                  | string       | App Completed |
            | project name                 | DIY E2E Sales                                                    | string       | App Completed |
            | device mobile                | si                                                               | string       | App Completed |
            | user userState               | logado                                                           | string       | App Completed |
            | user segment global          | 003001                                                           | string       | App Completed |
            | profile ID                   | profileID                                                        | regexp named | App Completed |
            | user gender                  | gender                                                           | regexp named | App Completed |
            | user age                     | age                                                              | regexp named | App Completed |
            | user segment profile         | usuario no pasa buro                                             | string       | App Completed |
            | application typology         | nuevo                                                            | string       | App Completed |
            | global application           | car loan                                                         | string       | App Completed |
            | application name             | prestamo vehicular                                               | string       | App Completed |
            | application type             | contratacion                                                     | string       | App Completed |
            | application step             | pagina exitosa                                                   | string       | App Completed |
            | application state            | rechazado                                                        | string       | App Completed |
            | application operation number | 5027575                                                          | string       | App Completed |
            | fulfillment model            | online                                                           | string       | App Completed |
            | product primary category     | prestamos                                                        | string       | App Completed |
            | product subtype              | prestamo vehicular                                               | string       | App Completed |
            | product amount               | 562000                                                           | number       | App Completed |
            | product payment amount       | 12784                                                            | number       | App Completed |
            | product number of payments   | 60                                                               | number       | App Completed |
            | product interest rate        | 14.3                                                             | string       | App Completed |
            | product currency             | MXN                                                              | string       | App Completed |
            | product state                | rechazado                                                        | string       | App Completed |
            | internal campaign            |                                                                  | empty array  | App Completed |
            | optimization attributes      |                                                                  | empty array  | App Completed |

    @ANA_EVENT_CLPA009
    @analytics
    @MX @web @vbank @backend(test) @web-done @android @ios
    Scenario: App completed (rejected underage) - car loan
        Given a user with the following criteria
            | criteria                    |
            | car loan                    |
            | car loan rejected underage  |
        When the user accesses to the car loan offer from "opportunities"
        And the user continues to the "summary" step
        And the analytics interceptor service is initiated
        And the user applies for the loan
        Then the analytics events contains the following variables
            | item                         | value                                                            | type         | event         |
            | analytics                    | analytics/glomo_base                                             | json schema  | App Completed |
            | version DL                   | 20250414_5.0                                                     | string       | App Completed |
            | page name                    | app:privada:personas:prestamos:prestamo vehicular:pagina exitosa | string       | App Completed |
            | level 1                      | prestamos                                                        | string       | App Completed |
            | level 2                      | prestamo vehicular                                               | string       | App Completed |
            | level 3                      | pagina exitosa                                                   | string       | App Completed |
            | language                     | ES                                                               | string       | App Completed |
            | page area                    | privada                                                          | string       | App Completed |
            | page intent                  | transaccion                                                      | string       | App Completed |
            | channel                      | online                                                           | string       | App Completed |
            | page instance ID             | de                                                               | string       | App Completed |
            | page info version            | appVersion                                                       | regexp named | App Completed |
            | page segment                 | personas                                                         | string       | App Completed |
            | sysEnv                       | app                                                              | string       | App Completed |
            | business unit                | BBVA Mexico                                                      | string       | App Completed |
            | site app name                | App BBVA Mexico                                                  | string       | App Completed |
            | project name                 | DIY E2E Sales                                                    | string       | App Completed |
            | device mobile                | si                                                               | string       | App Completed |
            | user userState               | logado                                                           | string       | App Completed |
            | user segment global          | 003001                                                           | string       | App Completed |
            | profile ID                   | profileID                                                        | regexp named | App Completed |
            | user gender                  | gender                                                           | regexp named | App Completed |
            | user age                     | age                                                              | regexp named | App Completed |
            | user segment profile         | usuario menor de edad                                            | string       | App Completed |
            | application typology         | nuevo                                                            | string       | App Completed |
            | global application           | car loan                                                         | string       | App Completed |
            | application name             | prestamo vehicular                                               | string       | App Completed |
            | application type             | contratacion                                                     | string       | App Completed |
            | application step             | pagina exitosa                                                   | string       | App Completed |
            | application state            | rechazado                                                        | string       | App Completed |
            | application operation number | 5026300                                                          | string       | App Completed |
            | fulfillment model            | online                                                           | string       | App Completed |
            | product primary category     | prestamos                                                        | string       | App Completed |
            | product subtype              | prestamo vehicular                                               | string       | App Completed |
            | product amount               | 562000                                                           | number       | App Completed |
            | product payment amount       | 12784                                                            | number       | App Completed |
            | product number of payments   | 60                                                               | number       | App Completed |
            | product interest rate        | 14.3                                                             | string       | App Completed |
            | product currency             | MXN                                                              | string       | App Completed |
            | product state                | rechazado                                                        | string       | App Completed |
            | internal campaign            |                                                                  | empty array  | App Completed |
            | optimization attributes      |                                                                  | empty array  | App Completed |

    @ANA_EVENT_CLPA010
    @analytics
    @MX @web @vbank @backend(test) @web-done @android @ios
    Scenario: Huella - opening commission - car loan
        Given a user with the following criteria
            | criteria           |
            | car loan           |
            | car loan with mail |
        When the user accesses to the car loan offer from "opportunities"
        And the analytics interceptor service is initiated
        And the user enters the "commision for opperture" modal
        Then the analytics events contains the following variables
            | item                    | value                                                               | type             | event     |
            | analytics               | analytics/glomo_base                                                | json schema      | Page View |
            | version DL              | 20250414_5.0                                                        | string           | Page View |
            | page name               | app:privada:personas:prestamos:prestamo vehicular:costos de emision | string           | Page View |
            | level 1                 | prestamos                                                           | string           | Page View |
            | level 2                 | prestamo vehicular                                                  | string           | Page View |
            | level 3                 | costos de emision                                                   | string           | Page View |
            | language                | ES                                                                  | string           | Page View |
            | page area               | privada                                                             | string           | Page View |
            | page intent             | transaccion                                                         | string           | Page View |
            | channel                 | online                                                              | string           | Page View |
            | page instance ID        | de                                                                  | string           | Page View |
            | page info version       | appVersion                                                          | regexp named     | Page View |
            | page segment            | personas                                                            | string           | Page View |
            | sysEnv                  | app                                                                 | string           | Page View |
            | business unit           | BBVA Mexico                                                         | string           | Page View |
            | site app name           | App BBVA Mexico                                                     | string           | Page View |
            | project name            | DIY E2E Sales                                                       | string           | Page View |
            | device mobile           | si                                                                  | string           | Page View |
            | user userState          | logado                                                              | string           | Page View |
            | user segment global     | 003001                                                              | string           | Page View |
            | profile ID              | profileID                                                           | regexp named     | Page View |
            | user gender             | gender                                                              | regexp named     | Page View |
            | user age                | age                                                                 | regexp named     | Page View |
            | internal campaign       |                                                                     | empty array      | Page View |
            | optimization attributes |                                                                     | empty array      | Page View |
            | application             |                                                                     | empty str object | Page View |
            | products attributes     |                                                                     | empty array      | Page View |

    @ANA_EVENT_CLPA011
    @analytics
    @MX @web @vbank @backend(test) @web-done @android @ios
    Scenario: Huella - cat - car loan
        Given a user with the following criteria
            | criteria           |
            | car loan           |
            | car loan with mail |
        When the user accesses to the car loan offer from "opportunities"
        And the analytics interceptor service is initiated
        And the user enters the "cat" modal
        Then the analytics events contains the following variables
            | item                    | value                                                        | type             | event     |
            | analytics               | analytics/glomo_base                                         | json schema      | Page View |
            | version DL              | 20250414_5.0                                                 | string           | Page View |
            | page name               | app:privada:personas:prestamos:prestamo vehicular:costos cat | string           | Page View |
            | level 1                 | prestamos                                                    | string           | Page View |
            | level 2                 | prestamo vehicular                                           | string           | Page View |
            | level 3                 | costos cat                                                   | string           | Page View |
            | language                | ES                                                           | string           | Page View |
            | page area               | privada                                                      | string           | Page View |
            | page intent             | transaccion                                                  | string           | Page View |
            | channel                 | online                                                       | string           | Page View |
            | page instance ID        | de                                                           | string           | Page View |
            | page info version       | appVersion                                                   | regexp named     | Page View |
            | page segment            | personas                                                     | string           | Page View |
            | sysEnv                  | app                                                          | string           | Page View |
            | business unit           | BBVA Mexico                                                  | string           | Page View |
            | site app name           | App BBVA Mexico                                              | string           | Page View |
            | project name            | DIY E2E Sales                                                | string           | Page View |
            | device mobile           | si                                                           | string           | Page View |
            | user userState          | logado                                                       | string           | Page View |
            | user segment global     | 003001                                                       | string           | Page View |
            | profile ID              | profileID                                                    | regexp named     | Page View |
            | user gender             | gender                                                       | regexp named     | Page View |
            | user age                | age                                                          | regexp named     | Page View |
            | internal campaign       |                                                              | empty array      | Page View |
            | optimization attributes |                                                              | empty array      | Page View |
            | application             |                                                              | empty str object | Page View |
            | products attributes     |                                                              | empty array      | Page View |

    @ANA_EVENT_CLPA012
    @analytics
    @MX @web @vbank @backend(test) @web-done @android @ios
    Scenario: Huella - interest rate - car loan
        Given a user with the following criteria
            | criteria           |
            | car loan           |
            | car loan with mail |
        When the user accesses to the car loan offer from "opportunities"
        And the analytics interceptor service is initiated
        And the user enters the "mensual rate" modal
        Then the analytics events contains the following variables
            | item                    | value                                                                    | type             | event     |
            | analytics               | analytics/glomo_base                                                     | json schema      | Page View |
            | version DL              | 20250414_5.0                                                             | string           | Page View |
            | page name               | app:privada:personas:prestamos:prestamo vehicular:costos tasa de interes | string           | Page View |
            | level 1                 | prestamos                                                                | string           | Page View |
            | level 2                 | prestamo vehicular                                                       | string           | Page View |
            | level 3                 | costos tasa de interes                                                   | string           | Page View |
            | language                | ES                                                                       | string           | Page View |
            | page area               | privada                                                                  | string           | Page View |
            | page intent             | transaccion                                                              | string           | Page View |
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
            | user gender             | gender                                                                   | regexp named     | Page View |
            | user age                | age                                                                      | regexp named     | Page View |
            | internal campaign       |                                                                          | empty array      | Page View |
            | optimization attributes |                                                                          | empty array      | Page View |
            | application             |                                                                          | empty str object | Page View |
            | products attributes     |                                                                          | empty array      | Page View |

    @ANA_EVENT_CLPA013
    @analytics
    @MX @web @vbank @backend(test) @web-done @android @ios
    Scenario: Huella - terms and conditions - car loan
        Given a user with the following criteria
            | criteria           |
            | car loan           |
            | car loan with mail |
        When the user accesses to the car loan offer from "opportunities"
        And the user continues to the "terms and conditions" step
        And the analytics interceptor service is initiated
        And the user enters the "terms and conditions" modal
        Then the analytics events contains the following variables
            | item                    | value                                                                              | type             | event     |
            | analytics               | analytics/glomo_base                                                               | json schema      | Page View |
            | version DL              | 20250414_5.0                                                                       | string           | Page View |
            | page name               | app:privada:personas:prestamos:prestamo vehicular:2 terminos y condiciones:detalle | string           | Page View |
            | level 1                 | prestamos                                                                          | string           | Page View |
            | level 2                 | prestamo vehicular                                                                 | string           | Page View |
            | level 3                 | 2 terminos y condiciones                                                           | string           | Page View |
            | level 4                 | detalle                                                                            | string           | Page View |
            | language                | ES                                                                                 | string           | Page View |
            | page area               | privada                                                                            | string           | Page View |
            | page intent             | transaccion                                                                        | string           | Page View |
            | channel                 | online                                                                             | string           | Page View |
            | page instance ID        | de                                                                                 | string           | Page View |
            | page info version       | appVersion                                                                         | regexp named     | Page View |
            | page segment            | personas                                                                           | string           | Page View |
            | sysEnv                  | app                                                                                | string           | Page View |
            | business unit           | BBVA Mexico                                                                        | string           | Page View |
            | site app name           | App BBVA Mexico                                                                    | string           | Page View |
            | project name            | DIY E2E Sales                                                                      | string           | Page View |
            | device mobile           | si                                                                                 | string           | Page View |
            | user userState          | logado                                                                             | string           | Page View |
            | user segment global     | 003001                                                                             | string           | Page View |
            | profile ID              | profileID                                                                          | regexp named     | Page View |
            | user gender             | gender                                                                             | regexp named     | Page View |
            | user age                | age                                                                                | regexp named     | Page View |
            | internal campaign       |                                                                                    | empty array      | Page View |
            | optimization attributes |                                                                                    | empty array      | Page View |
            | application             |                                                                                    | empty str object | Page View |
            | products attributes     |                                                                                    | empty array      | Page View |

    @ANA_EVENT_CLPA014
    @analytics
    @MX @web @vbank @backend(test) @web-done @android @ios
    Scenario: Huella - credit history - car loan
        Given a user with the following criteria
            | criteria           |
            | car loan           |
            | car loan with mail |
        When the user accesses to the car loan offer from "opportunities"
        And the user continues to the "terms and conditions" step
        And the analytics interceptor service is initiated
        And the user enters the "authorization" modal
        Then the analytics events contains the following variables
            | item                    | value                                                                           | type             | event     |
            | analytics               | analytics/glomo_base                                                            | json schema      | Page View |
            | version DL              | 20250414_5.0                                                                    | string           | Page View |
            | page name               | app:privada:personas:prestamos:prestamo vehicular:consulta historial crediticio | string           | Page View |
            | level 1                 | prestamos                                                                       | string           | Page View |
            | level 2                 | prestamo vehicular                                                              | string           | Page View |
            | level 3                 | consulta historial crediticio                                                   | string           | Page View |
            | language                | ES                                                                              | string           | Page View |
            | page area               | privada                                                                         | string           | Page View |
            | page intent             | transaccion                                                                     | string           | Page View |
            | channel                 | online                                                                          | string           | Page View |
            | page instance ID        | de                                                                              | string           | Page View |
            | page info version       | appVersion                                                                      | regexp named     | Page View |
            | page segment            | personas                                                                        | string           | Page View |
            | sysEnv                  | app                                                                             | string           | Page View |
            | business unit           | BBVA Mexico                                                                     | string           | Page View |
            | site app name           | App BBVA Mexico                                                                 | string           | Page View |
            | project name            | DIY E2E Sales                                                                   | string           | Page View |
            | device mobile           | si                                                                              | string           | Page View |
            | user userState          | logado                                                                          | string           | Page View |
            | user segment global     | 003001                                                                          | string           | Page View |
            | profile ID              | profileID                                                                       | regexp named     | Page View |
            | user gender             | gender                                                                          | regexp named     | Page View |
            | user age                | age                                                                             | regexp named     | Page View |
            | internal campaign       |                                                                                 | empty array      | Page View |
            | optimization attributes |                                                                                 | empty array      | Page View |
            | application             |                                                                                 | empty str object | Page View |
            | products attributes     |                                                                                 | empty array      | Page View |

    @ANA_EVENT_CLPA015
    @analytics
    @MX @web @vbank @backend(test) @web-done @android @ios
    Scenario: Huella - confirmation detail - car loan
        Given a user with the following criteria
            | criteria           |
            | car loan           |
            | car loan with mail |
        When the user accesses to the car loan offer from "opportunities"
        And the user continues to the "summary" step
        And the analytics interceptor service is initiated
        And the user wants to change the car loan values
        Then the analytics events contains the following variables
            | item                    | value                                                            | type             | event         |
            | analytics               | analytics/glomo_base                                             | json schema      | Internal Link |
            | version DL              | 20250414_5.0                                                     | string           | Internal Link |
            | page name               | app:privada:personas:prestamos:prestamo vehicular:3 confirmacion | string           | Internal Link |
            | level 1                 | prestamos                                                        | string           | Internal Link |
            | level 2                 | prestamo vehicular                                               | string           | Internal Link |
            | level 3                 | 3 confirmacion                                                   | string           | Internal Link |
            | language                | ES                                                               | string           | Internal Link |
            | page area               | privada                                                          | string           | Internal Link |
            | page intent             | transaccion                                                      | string           | Internal Link |
            | channel                 | online                                                           | string           | Internal Link |
            | page instance ID        | de                                                               | string           | Internal Link |
            | page info version       | appVersion                                                       | regexp named     | Internal Link |
            | page segment            | personas                                                         | string           | Internal Link |
            | sysEnv                  | app                                                              | string           | Internal Link |
            | business unit           | BBVA Mexico                                                      | string           | Internal Link |
            | site app name           | App BBVA Mexico                                                  | string           | Internal Link |
            | project name            | DIY E2E Sales                                                    | string           | Internal Link |
            | link name               | modificar oferta                                                 | string           | Internal Link |
            | device mobile           | si                                                               | string           | Internal Link |
            | user userState          | logado                                                           | string           | Internal Link |
            | user segment global     | 003001                                                           | string           | Internal Link |
            | profile ID              | profileID                                                        | regexp named     | Internal Link |
            | user gender             | gender                                                           | regexp named     | Internal Link |
            | user age                | age                                                              | regexp named     | Internal Link |
            | internal campaign       |                                                                  | empty array      | Internal Link |
            | optimization attributes |                                                                  | empty array      | Internal Link |
            | application             |                                                                  | empty str object | Internal Link |
            | products attributes     |                                                                  | empty array      | Internal Link |

    @ANA_EVENT_CLPA016
    @analytics
    @MX @web @vbank @backend(test) @web-done @android @ios
    Scenario: Huella - signing error - car loan
        Given a user with the following criteria
            | criteria           |
            | car loan           |
            | car loan with mail |
        When the user accesses to the car loan offer from "opportunities"
        And the user continues to the "summary" step
        And the analytics interceptor service is initiated
        And the user applies for the loan with a bad otp
        Then the analytics events contains the following variables
            | item                    | value                                                                   | type             | event     |
            | analytics               | analytics/glomo_base                                                    | json schema      | Page View |
            | version DL              | 20250414_5.0                                                            | string           | Page View |
            | page name               | app:privada:personas:prestamos:prestamo vehicular:error carga de recibo | string           | Page View |
            | level 1                 | prestamos                                                               | string           | Page View |
            | level 2                 | prestamo vehicular                                                      | string           | Page View |
            | level 3                 | error carga de recibo                                                   | string           | Page View |
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
            | project name            | DIY E2E Sales                                                           | string           | Page View |
            | error page              | error carga de recibo                                                   | string           | Page View |
            | device mobile           | si                                                                      | string           | Page View |
            | user userState          | logado                                                                  | string           | Page View |
            | user segment global     | 003001                                                                  | string           | Page View |
            | profile ID              | profileID                                                               | regexp named     | Page View |
            | user gender             | gender                                                                  | regexp named     | Page View |
            | user age                | age                                                                     | regexp named     | Page View |
            | internal campaign       |                                                                         | empty array      | Page View |
            | optimization attributes |                                                                         | empty array      | Page View |
            | application             |                                                                         | empty str object | Page View |
            | products attributes     |                                                                         | empty array      | Page View |

    @ANA_EVENT_CLPA017
    @analytics
    @MX @web @vbank @backend(test) @web-done @android @ios
    Scenario: Huella - call me back - car loan
        Given a user with the following criteria
            | criteria            |
            | car loan            |
            | car loan with mail  |
        When the user accesses to the car loan offer from "opportunities"
        And the analytics interceptor service is initiated
        And the user accesses to call me back
        Then the analytics events contains the following variables
            | item                    | value                                                                   | type             | event         |
            | analytics               | analytics/glomo_base                                                    | json schema      | Internal Link |
            | version DL              | 20250414_5.0                                                            | string           | Internal Link |
            | page name               | app:privada:personas:prestamos:prestamo vehicular:1 datos solicitud     | string           | Internal Link |
            | level 1                 | prestamos                                                               | string           | Internal Link |
            | level 2                 | prestamo vehicular                                                      | string           | Internal Link |
            | level 3                 | 1 datos solicitud                                                       | string           | Internal Link |
            | language                | ES                                                                      | string           | Internal Link |
            | page area               | privada                                                                 | string           | Internal Link |
            | page intent             | transaccion                                                             | string           | Internal Link |
            | channel                 | online                                                                  | string           | Internal Link |
            | page instance ID        | de                                                                      | string           | Internal Link |
            | page info version       | appVersion                                                              | regexp named     | Internal Link |
            | page segment            | personas                                                                | string           | Internal Link |
            | sysEnv                  | app                                                                     | string           | Internal Link |
            | business unit           | BBVA Mexico                                                             | string           | Internal Link |
            | site app name           | App BBVA Mexico                                                         | string           | Internal Link |
            | project name            | DIY E2E Sales                                                           | string           | Internal Link |
            | link name               | icono telefono call me back                                             | string           | Internal Link |
            | device mobile           | si                                                                      | string           | Internal Link |
            | user userState          | logado                                                                  | string           | Internal Link |
            | user segment global     | 003001                                                                  | string           | Internal Link |
            | profile ID              | profileID                                                               | regexp named     | Internal Link |
            | user gender             | gender                                                                  | regexp named     | Internal Link |
            | user age                | age                                                                     | regexp named     | Internal Link |
            | internal campaign       |                                                                         | empty array      | Internal Link |
            | optimization attributes |                                                                         | empty array      | Internal Link |
            | application             |                                                                         | empty str object | Internal Link |
            | products attributes     |                                                                         | empty array      | Internal Link |

    @ANA_EVENT_CLPA018
    @analytics
    @MX @web @vbank @backend(test) @web-done @android @ios
    Scenario: Error - incomplete quotation  - car loan
        Given a user with the following criteria
            | criteria                      |
            | car loan                      |
            | car loan exceeds proposals    |
        When the user accesses to the car loan offer from "opportunities"
        And the user continues to the "summary" step
        And the analytics interceptor service is initiated
        And the user applies for the loan
        Then the analytics events contains the following variables
            | item                    | value                                                                                          | type             | event     |
            | analytics               | analytics/glomo_base                                                                           | json schema      | Page View |
            | version DL              | 20250414_5.0                                                                                   | string           | Page View |
            | page name               | app:privada:personas:prestamos:prestamo vehicular:error cotizacion incompleta recibir llamada  | string           | Page View |
            | level 1                 | prestamos                                                                                      | string           | Page View |
            | level 2                 | prestamo vehicular                                                                             | string           | Page View |
            | level 3                 | error cotizacion incompleta recibir llamada                                                    | string           | Page View |
            | language                | ES                                                                                             | string           | Page View |
            | page area               | privada                                                                                        | string           | Page View |
            | page intent             | transaccion                                                                                    | string           | Page View |
            | channel                 | online                                                                                         | string           | Page View |
            | page instance ID        | de                                                                                             | string           | Page View |
            | page info version       | appVersion                                                                                     | regexp named     | Page View |
            | page segment            | personas                                                                                       | string           | Page View |
            | sysEnv                  | app                                                                                            | string           | Page View |
            | business unit           | BBVA Mexico                                                                                    | string           | Page View |
            | site app name           | App BBVA Mexico                                                                                | string           | Page View |
            | project name            | DIY E2E Sales                                                                                  | string           | Page View |
            | error page              | error cotizacion incompleta recibir llamada                                                    | string           | Page View |
            | device mobile           | si                                                                                             | string           | Page View |
            | user userState          | logado                                                                                         | string           | Page View |
            | user segment global     | 003001                                                                                         | string           | Page View |
            | profile ID              | profileID                                                                                      | regexp named     | Page View |
            | user gender             | gender                                                                                         | regexp named     | Page View |
            | user age                | age                                                                                            | regexp named     | Page View |
            | internal campaign       |                                                                                                | empty array      | Page View |
            | optimization attributes |                                                                                                | empty array      | Page View |
            | application             |                                                                                                | empty str object | Page View |
            | products attributes     |                                                                                                | empty array      | Page View |

    @ANA_EVENT_CLPA019
    @analytics
    @MX @web @vbank @backend(test) @web-done @android @ios
    Scenario: Huella - share - car loan
        Given a user with the following criteria
            | criteria           |
            | car loan           |
            | car loan with mail |
        When the user accesses to the car loan offer from "opportunities"
        And the user continues to the "summary" step
        And the analytics interceptor service is initiated
        And the user accepts the summary
        And the user share receipt
        Then the analytics events contains the following variables
            | item                    | value                                                                   | type             | event         |
            | analytics               | analytics/glomo_base                                                    | json schema      | External Link |
            | version DL              | 20250414_5.0                                                            | string           | External Link |
            | page name               | app:privada:personas:prestamos:prestamo vehicular:pagina exitosa        | string           | External Link |
            | level 1                 | prestamos                                                               | string           | External Link |
            | level 2                 | prestamo vehicular                                                      | string           | External Link |
            | level 3                 | pagina exitosa                                                          | string           | External Link |
            | language                | ES                                                                      | string           | External Link |
            | page area               | privada                                                                 | string           | External Link |
            | page intent             | transaccion                                                             | string           | External Link |
            | channel                 | online                                                                  | string           | External Link |
            | page instance ID        | de                                                                      | string           | External Link |
            | page info version       | appVersion                                                              | regexp named     | External Link |
            | page segment            | personas                                                                | string           | External Link |
            | sysEnv                  | app                                                                     | string           | External Link |
            | business unit           | BBVA Mexico                                                             | string           | External Link |
            | site app name           | App BBVA Mexico                                                         | string           | External Link |
            | project name            | DIY E2E Sales                                                           | string           | External Link |
            | device mobile           | si                                                                      | string           | External Link |
            | user userState          | logado                                                                  | string           | External Link |
            | user segment global     | 003001                                                                  | string           | External Link |
            | profile ID              | profileID                                                               | regexp named     | External Link |
            | user gender             | gender                                                                  | regexp named     | External Link |
            | user age                | age                                                                     | regexp named     | External Link |
            | internal campaign       |                                                                         | empty array      | External Link |
            | optimization attributes |                                                                         | empty array      | External Link |
            | application             |                                                                         | empty str object | External Link |
            | products attributes     |                                                                         | empty array      | External Link |
            | link url                | share_5023921                                                           | string           | External Link |
            | link name               | compartir                                                               | string           | External Link |

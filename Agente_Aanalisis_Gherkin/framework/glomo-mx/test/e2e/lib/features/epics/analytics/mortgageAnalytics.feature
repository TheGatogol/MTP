@analyticsMortgage
Feature: Analytics - Mortgage

    @ANA_EVENT_LM001
    @analytics
    @vbank
    @MX @android @ios
    @web
    @backend(test)
    @web-done
    Scenario: Mortgage - analytics event App On Click Start
        Given a user with the following criteria
            | criteria      |
            | lead mortgage |
        And the user accesses to dashboard
        And the analytics interceptor service is initiated
        When the user accesses the lead mortgage offer
        Then the analytics events contains the following variables
            | item                                         | value                                                                                                         | type         | event              |
            | analytics                                    | analytics/glomo_base                                                                                          | json schema  | App On Click Start |
            | page name                                    | app:privada:personas:oportunidades                                                                            | string       | App On Click Start |
            | level 1                                      | oportunidades                                                                                                 | string       | App On Click Start |
            | language                                     | ES                                                                                                            | string       | App On Click Start |
            | page area                                    | privada                                                                                                       | string       | App On Click Start |
            | page intent                                  | informacion                                                                                                   | string       | App On Click Start |
            | channel                                      | online                                                                                                        | string       | App On Click Start |
            | page instance ID                             | de                                                                                                            | string       | App On Click Start |
            | page info version                            | appVersion                                                                                                    | regexp named | App On Click Start |
            | page segment                                 | personas                                                                                                      | string       | App On Click Start |
            | sysEnv                                       | app                                                                                                           | string       | App On Click Start |
            | business unit                                | BBVA Mexico                                                                                                   | string       | App On Click Start |
            | site app name                                | App BBVA Mexico                                                                                               | string       | App On Click Start |
            | project name                                 | DIY E2E Sales                                                                                                 | string       | App On Click Start |
            | device mobile                                | si                                                                                                            | string       | App On Click Start |
            | user userState                               | logado                                                                                                        | string       | App On Click Start |
            | profile ID                                   | profileID                                                                                                     | regexp named | App On Click Start |
            | user segment global                          | 003001                                                                                                        | string       | App On Click Start |
            | global application                           | mortgage loan                                                                                                 | string       | App On Click Start |
            | application name                             | credito hipotecario one click                                                                                 | string       | App On Click Start |
            | application type                             | contratacion                                                                                                  | string       | App On Click Start |
            | application step                             | oportunidades                                                                                                 | string       | App On Click Start |
            | fulfillment model                            | offline                                                                                                       | string       | App On Click Start |
            | product primary category                     | prestamos                                                                                                     | string       | App On Click Start |
            | product name                                 | credito hipotecario                                                                                           | string       | App On Click Start |
            | internal campaign attributes location        | contract product section--superior-1-8                                                                        | string       | App On Click Start |
            | internal campaign attributes campaign format | list                                                                                                          | string       | App On Click Start |
            | internal campaign attributes collective code |                                                                                                               | string       | App On Click Start |
            | internal campaign attributes campaign name   | -obten un credito hipotecario                                                                                 | string       | App On Click Start |
            | internal campaign attributes product         | prestamo hipotecario                                                                                          | string       | App On Click Start |
            | internal campaign attributes product code    |                                                                                                               | string       | App On Click Start |
            | internal campaign attributes quantity        | 3815469.98                                                                                                    | string       | App On Click Start |
            | internal campaign event name                 | IntCmpClick                                                                                                   | string       | App On Click Start |
            | internal campaign site action name           | contract product section--superior-1-8:list::-obten un credito hipotecario:prestamo hipotecario::3815469.98   | string       | App On Click Start |
            | optimization attributes                      |                                                                                                               | empty array  | App On Click Start |

    @ANA_EVENT_LM002
    @analytics
    @vbank
    @MX @android @ios
    @web
    @backend(test)
    @web-done
    Scenario: Mortgage - analytics event App Page Visit
        Given a user with the following criteria
            | criteria      |
            | lead mortgage |
        And the user accesses to dashboard
        And the analytics interceptor service is initiated
        When the user accesses the lead mortgage offer
        Then the analytics events contains the following variables
            | item                     | value                                                                           | type         | event          |
            | analytics                | analytics/glomo_base                                                            | json schema  | App Page Visit |
            | page name                | app:privada:personas:prestamos:credito hipotecario one click:1 introducir datos | string       | App Page Visit |
            | level 1                  | prestamos                                                                       | string       | App Page Visit |
            | level 2                  | credito hipotecario one click                                                   | string       | App Page Visit |
            | level 3                  | 1 introducir datos                                                              | string       | App Page Visit |
            | language                 | ES                                                                              | string       | App Page Visit |
            | page area                | privada                                                                         | string       | App Page Visit |
            | page intent              | transaccion                                                                     | string       | App Page Visit |
            | channel                  | online                                                                          | string       | App Page Visit |
            | page instance ID         | de                                                                              | string       | App Page Visit |
            | page info version        | appVersion                                                                      | regexp named | App Page Visit |
            | page segment             | personas                                                                        | string       | App Page Visit |
            | sysEnv                   | app                                                                             | string       | App Page Visit |
            | business unit            | BBVA Mexico                                                                     | string       | App Page Visit |
            | site app name            | App BBVA Mexico                                                                 | string       | App Page Visit |
            | project name             | DIY E2E Sales                                                                   | string       | App Page Visit |
            | device mobile            | si                                                                              | string       | App Page Visit |
            | user userState           | logado                                                                          | string       | App Page Visit |
            | profile ID               | profileID                                                                       | regexp named | App Page Visit |
            | user segment global      | 003001                                                                          | string       | App Page Visit |
            | global application       | mortgage loan                                                                   | string       | App Page Visit |
            | application name         | credito hipotecario one click                                                   | string       | App Page Visit |
            | application type         | contratacion                                                                    | string       | App Page Visit |
            | application step         | 1 introducir datos                                                              | string       | App Page Visit |
            | fulfillment model        | offline                                                                         | string       | App Page Visit |
            | qualified visits         | true                                                                            | string       | App Page Visit |
            | product primary category | prestamos                                                                       | string       | App Page Visit |
            | product name             | credito hipotecario                                                             | string       | App Page Visit |
            | product amount           | 3815469                                                                         | number       | App Page Visit |
            | product currency         | MXN                                                                             | string       | App Page Visit |
            | internal campaign        |                                                                                 | empty array  | App Page Visit |
            | optimization attributes  |                                                                                 | empty array  | App Page Visit |

    @ANA_EVENT_LM003
    @analytics
    @vbank
    @MX @android @ios
    @web
    @backend(test)
    @web-done
    Scenario: Mortgage - analytics event App Started
        Given a user with the following criteria
            | criteria      |
            | lead mortgage |
        When the user accesses the lead mortgage offer
        And the analytics interceptor service is initiated
        And the user modifys the lead mortgage term
        Then the analytics events contains the following variables
            | item                     | value                                                                           | type         | event       |
            | analytics                | analytics/glomo_base                                                            | json schema  | App Started |
            | page name                | app:privada:personas:prestamos:credito hipotecario one click:1 introducir datos | string       | App Started |
            | level 1                  | prestamos                                                                       | string       | App Started |
            | level 2                  | credito hipotecario one click                                                   | string       | App Started |
            | level 3                  | 1 introducir datos                                                              | string       | App Started |
            | language                 | ES                                                                              | string       | App Started |
            | page area                | privada                                                                         | string       | App Started |
            | page intent              | transaccion                                                                     | string       | App Started |
            | channel                  | online                                                                          | string       | App Started |
            | page instance ID         | de                                                                              | string       | App Started |
            | page info version        | appVersion                                                                      | regexp named | App Started |
            | page segment             | personas                                                                        | string       | App Started |
            | sysEnv                   | app                                                                             | string       | App Started |
            | business unit            | BBVA Mexico                                                                     | string       | App Started |
            | site app name            | App BBVA Mexico                                                                 | string       | App Started |
            | project name             | DIY E2E Sales                                                                   | string       | App Started |
            | device mobile            | si                                                                              | string       | App Started |
            | user userState           | logado                                                                          | string       | App Started |
            | profile ID               | profileID                                                                       | regexp named | App Started |
            | user segment global      | 003001                                                                          | string       | App Started |
            | global application       | mortgage loan                                                                   | string       | App Started |
            | application name         | credito hipotecario one click                                                   | string       | App Started |
            | application type         | contratacion                                                                    | string       | App Started |
            | application step         | plazo                                                                           | string       | App Started |
            | fulfillment model        | offline                                                                         | string       | App Started |
            | product primary category | prestamos                                                                       | string       | App Started |
            | product name             | credito hipotecario                                                             | string       | App Started |
            | product amount           | 3815469                                                                         | number       | App Started |
            | product currency         | MXN                                                                             | string       | App Started |
            | internal campaign        |                                                                                 | empty array  | App Started |
            | optimization attributes  |                                                                                 | empty array  | App Started |

    @ANA_EVENT_LM004
    @analytics
    @vbank
    @MX @android @ios
    @web
    @backend(test)
    @web-done
    Scenario: Mortgage - analytics event App Step 2
        Given a user with the following criteria
            | criteria      |
            | lead mortgage |
        When the user accesses the lead mortgage offer
        And the analytics interceptor service is initiated
        And the user continues to the terms and conditions section
        Then the analytics events contains the following variables
            | item                       | value                                                                                 | type         | event      |
            | analytics                  | analytics/glomo_base                                                                  | json schema  | App Step 2 |
            | page name                  | app:privada:personas:prestamos:credito hipotecario one click:2 terminos y condiciones | string       | App Step 2 |
            | level 1                    | prestamos                                                                             | string       | App Step 2 |
            | level 2                    | credito hipotecario one click                                                         | string       | App Step 2 |
            | level 3                    | 2 terminos y condiciones                                                              | string       | App Step 2 |
            | language                   | ES                                                                                    | string       | App Step 2 |
            | page area                  | privada                                                                               | string       | App Step 2 |
            | page intent                | transaccion                                                                           | string       | App Step 2 |
            | channel                    | online                                                                                | string       | App Step 2 |
            | page instance ID           | de                                                                                    | string       | App Step 2 |
            | page info version          | appVersion                                                                            | regexp named | App Step 2 |
            | page segment               | personas                                                                              | string       | App Step 2 |
            | sysEnv                     | app                                                                                   | string       | App Step 2 |
            | business unit              | BBVA Mexico                                                                           | string       | App Step 2 |
            | site app name              | App BBVA Mexico                                                                       | string       | App Step 2 |
            | project name               | DIY E2E Sales                                                                         | string       | App Step 2 |
            | device mobile              | si                                                                                    | string       | App Step 2 |
            | user userState             | logado                                                                                | string       | App Step 2 |
            | profile ID                 | profileID                                                                             | regexp named | App Step 2 |
            | user segment global        | 003001                                                                                | string       | App Step 2 |
            | global application         | mortgage loan                                                                         | string       | App Step 2 |
            | application name           | credito hipotecario one click                                                         | string       | App Step 2 |
            | application type           | contratacion                                                                          | string       | App Step 2 |
            | application step           | 2 terminos y condiciones                                                              | string       | App Step 2 |
            | fulfillment model          | offline                                                                               | string       | App Step 2 |
            | application typology       | adquisicion                                                                           | string       | App Step 2 |
            | product primary category   | prestamos                                                                             | string       | App Step 2 |
            | product name               | credito hipotecario                                                                   | string       | App Step 2 |
            | product amount             | 3815469                                                                               | number       | App Step 2 |
            | product currency           | MXN                                                                                   | string       | App Step 2 |
            | product payment amount     | 43783.35                                                                              | number       | App Step 2 |
            | product payment type       | mensual                                                                               | string       | App Step 2 |
            | product interest rate      | 13.8                                                                                  | number       | App Step 2 |
            | product number of payments | 240                                                                                   | number       | App Step 2 |
            | internal campaign          |                                                                                       | empty array  | App Step 2 |
            | optimization attributes    |                                                                                       | empty array  | App Step 2 |

    @ANA_EVENT_LM005
    @analytics
    @vbank
    @MX @android @ios
    @web
    @backend(test)
    @web-done
    Scenario: Mortgage - analytics event App Step 3
        Given a user with the following criteria
            | criteria      |
            | lead mortgage |
        When the user accesses the lead mortgage offer
        And the analytics interceptor service is initiated
        And the user completes the simulation and accepts the terms and conditions
        Then the analytics events contains the following variables
            | item                       | value                                                                       | type         | event      |
            | analytics                  | analytics/glomo_base                                                        | json schema  | App Step 3 |
            | page name                  | app:privada:personas:prestamos:credito hipotecario one click:3 confirmacion | string       | App Step 3 |
            | level 1                    | prestamos                                                                   | string       | App Step 3 |
            | level 2                    | credito hipotecario one click                                               | string       | App Step 3 |
            | level 3                    | 3 confirmacion                                                              | string       | App Step 3 |
            | language                   | ES                                                                          | string       | App Step 3 |
            | page area                  | privada                                                                     | string       | App Step 3 |
            | page intent                | transaccion                                                                 | string       | App Step 3 |
            | channel                    | online                                                                      | string       | App Step 3 |
            | page instance ID           | de                                                                          | string       | App Step 3 |
            | page info version          | appVersion                                                                  | regexp named | App Step 3 |
            | page segment               | personas                                                                    | string       | App Step 3 |
            | sysEnv                     | app                                                                         | string       | App Step 3 |
            | business unit              | BBVA Mexico                                                                 | string       | App Step 3 |
            | site app name              | App BBVA Mexico                                                             | string       | App Step 3 |
            | project name               | DIY E2E Sales                                                               | string       | App Step 3 |
            | device mobile              | si                                                                          | string       | App Step 3 |
            | user userState             | logado                                                                      | string       | App Step 3 |
            | profile ID                 | profileID                                                                   | regexp named | App Step 3 |
            | user segment global        | 003001                                                                      | string       | App Step 3 |
            | global application         | mortgage loan                                                               | string       | App Step 3 |
            | application name           | credito hipotecario one click                                               | string       | App Step 3 |
            | application type           | contratacion                                                                | string       | App Step 3 |
            | application step           | 3 confirmacion                                                              | string       | App Step 3 |
            | fulfillment model          | offline                                                                     | string       | App Step 3 |
            | application typology       | adquisicion                                                                 | string       | App Step 3 |
            | product primary category   | prestamos                                                                   | string       | App Step 3 |
            | product name               | credito hipotecario                                                         | string       | App Step 3 |
            | product amount             | 3815469                                                                     | number       | App Step 3 |
            | product currency           | MXN                                                                         | string       | App Step 3 |
            | product payment amount     | 43783.35                                                                    | number       | App Step 3 |
            | product payment type       | mensual                                                                     | string       | App Step 3 |
            | product interest rate      | 13.8                                                                        | number       | App Step 3 |
            | product number of payments | 240                                                                         | number       | App Step 3 |
            | internal campaign          |                                                                             | empty array  | App Step 3 |
            | optimization attributes    |                                                                             | empty array  | App Step 3 |

    @ANA_EVENT_LM006
    @analytics
    @vbank
    @MX @android @ios
    @web
    @backend(test)
    @web-done
    Scenario: Mortgage - analytics event App Step 4
        Given a user with the following criteria
            | criteria      |
            | lead mortgage |
        When the user accesses the lead mortgage offer
        And the analytics interceptor service is initiated
        And the user accesses to lead mortgage review
        Then the analytics events contains the following variables
            | item                       | value                                                              | type         | event      |
            | analytics                  | analytics/glomo_base                                               | json schema  | App Step 4 |
            | page name                  | app:privada:personas:prestamos:credito hipotecario one click:4 otp | string       | App Step 4 |
            | level 1                    | prestamos                                                          | string       | App Step 4 |
            | level 2                    | credito hipotecario one click                                      | string       | App Step 4 |
            | level 3                    | 4 otp                                                              | string       | App Step 4 |
            | language                   | ES                                                                 | string       | App Step 4 |
            | page area                  | privada                                                            | string       | App Step 4 |
            | page intent                | transaccion                                                        | string       | App Step 4 |
            | channel                    | online                                                             | string       | App Step 4 |
            | page instance ID           | de                                                                 | string       | App Step 4 |
            | page info version          | appVersion                                                         | regexp named | App Step 4 |
            | page segment               | personas                                                           | string       | App Step 4 |
            | sysEnv                     | app                                                                | string       | App Step 4 |
            | business unit              | BBVA Mexico                                                        | string       | App Step 4 |
            | site app name              | App BBVA Mexico                                                    | string       | App Step 4 |
            | project name               | DIY E2E Sales                                                      | string       | App Step 4 |
            | device mobile              | si                                                                 | string       | App Step 4 |
            | user userState             | logado                                                             | string       | App Step 4 |
            | profile ID                 | profileID                                                          | regexp named | App Step 4 |
            | user segment global        | 003001                                                             | string       | App Step 4 |
            | global application         | mortgage loan                                                      | string       | App Step 4 |
            | application name           | credito hipotecario one click                                      | string       | App Step 4 |
            | application type           | contratacion                                                       | string       | App Step 4 |
            | application step           | 4 otp                                                              | string       | App Step 4 |
            | fulfillment model          | offline                                                            | string       | App Step 4 |
            | application typology       | adquisicion                                                        | string       | App Step 4 |
            | product primary category   | prestamos                                                          | string       | App Step 4 |
            | product name               | credito hipotecario                                                | string       | App Step 4 |
            | product amount             | 3815469                                                            | number       | App Step 4 |
            | product currency           | MXN                                                                | string       | App Step 4 |
            | product payment amount     | 43783.35                                                           | number       | App Step 4 |
            | product payment type       | mensual                                                            | string       | App Step 4 |
            | product interest rate      | 13.8                                                               | number       | App Step 4 |
            | product number of payments | 240                                                                | number       | App Step 4 |
            | internal campaign          |                                                                    | empty array  | App Step 4 |
            | optimization attributes    |                                                                    | empty array  | App Step 4 |

    @ANA_EVENT_LM007
    @analytics
    @vbank
    @MX @android @ios
    @web
    @backend(test)
    @web-done
    Scenario: Mortgage - analytics event App Completed
        Given a user with the following criteria
            | criteria      |
            | lead mortgage |
        When the user accesses the lead mortgage offer
        And the analytics interceptor service is initiated
        And the user accesses to lead mortgage review
        Then the analytics events contains the following variables
            | item                         | value                                                                       | type         | event         |
            | analytics                    | analytics/glomo_base                                                        | json schema  | App Completed |
            | page name                    | app:privada:personas:prestamos:credito hipotecario one click:pagina exitosa | string       | App Completed |
            | level 1                      | prestamos                                                                   | string       | App Completed |
            | level 2                      | credito hipotecario one click                                               | string       | App Completed |
            | level 3                      | pagina exitosa                                                              | string       | App Completed |
            | language                     | ES                                                                          | string       | App Completed |
            | page area                    | privada                                                                     | string       | App Completed |
            | page intent                  | transaccion                                                                 | string       | App Completed |
            | channel                      | online                                                                      | string       | App Completed |
            | page instance ID             | de                                                                          | string       | App Completed |
            | page info version            | appVersion                                                                  | regexp named | App Completed |
            | page segment                 | personas                                                                    | string       | App Completed |
            | sysEnv                       | app                                                                         | string       | App Completed |
            | business unit                | BBVA Mexico                                                                 | string       | App Completed |
            | site app name                | App BBVA Mexico                                                             | string       | App Completed |
            | project name                 | DIY E2E Sales                                                               | string       | App Completed |
            | device mobile                | si                                                                          | string       | App Completed |
            | user userState               | logado                                                                      | string       | App Completed |
            | profile ID                   | profileID                                                                   | regexp named | App Completed |
            | user segment global          | 003001                                                                      | string       | App Completed |
            | global application           | mortgage loan                                                               | string       | App Completed |
            | application name             | credito hipotecario one click                                               | string       | App Completed |
            | application type             | contratacion                                                                | string       | App Completed |
            | application step             | pagina exitosa                                                              | string       | App Completed |
            | fulfillment model            | offline                                                                     | string       | App Completed |
            | application typology         | adquisicion                                                                 | string       | App Completed |
            | application state            | contratado                                                                  | string       | App Completed |
            | application operation number | 5184438787F9675C4AAE                                                        | string       | App Completed |
            | product primary category     | prestamos                                                                   | string       | App Completed |
            | product name                 | credito hipotecario                                                         | string       | App Completed |
            | product amount               | 3815469                                                                     | number       | App Completed |
            | product currency             | MXN                                                                         | string       | App Completed |
            | product payment amount       | 43783.35                                                                    | number       | App Completed |
            | product payment type         | mensual                                                                     | string       | App Completed |
            | product interest rate        | 13.8                                                                        | number       | App Completed |
            | product number of payments   | 240                                                                         | number       | App Completed |
            | product state                | contratado                                                                  | string       | App Completed |
            | internal campaign            |                                                                             | empty array  | App Completed |
            | optimization attributes      |                                                                             | empty array  | App Completed |

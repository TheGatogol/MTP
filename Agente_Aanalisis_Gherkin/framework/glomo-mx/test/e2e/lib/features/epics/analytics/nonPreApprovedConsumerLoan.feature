@npaConsumerLoanAnalitycs
Feature: Analytics - non pre apporved credit bureau

    @ANA_NPACL001
    @analytics
    @web
    @web-done
    @backend(test)
    @MX @vbank
    @ios @android
    Scenario: The user access to non pre approved bureaus
        Given a user with the following criteria
            | criteria          |
            | npa consumer loan |
        And the user goes to the npa offer loan screen
        When the user accept credit bureau application
        Then the device contains the following variables
            | item                | value                                                          | type         |
            | analytics           | analytics/glomo_base                                           | json schema  |
            | version DL          | 20250414_5.0                                                   | string       |
            | page name           | app:privada:personas:prestamo no preaprobado:autorizacion buro | string       |
            | level 1             | prestamo no preaprobado                                        | string       |
            | level 2             | autorizacion buro                                              | string       |
            | language            | ES                                                             | string       |
            | page area           | privada                                                        | string       |
            | page intent         | informacion                                                    | string       |
            | channel             | online                                                         | string       |
            | page instance ID    | de                                                             | string       |
            | page info version   | appVersion                                                     | regexp named |
            | page segment        | personas                                                       | string       |
            | sysEnv              | app                                                            | string       |
            | business unit       | BBVA Mexico                                                    | string       |
            | site app name       | App BBVA Mexico                                                | string       |
            | project name        | Glomo                                                          | string       |
            | device mobile       | si                                                             | string       |
            | user userState      | logado                                                         | string       |
            | user segment global | 003001                                                         | string       |
            | profile ID          | profileID                                                      | regexp named |
            | user gender         | gender                                                         | regexp named |
            | user age            | age                                                            | regexp named |

    @ANA_NPACL002
    @analytics
    @web
    @web-done
    @backend(test)
    @MX @vbank
    @ios @android
    Scenario: The user access to the banner button
        Given a user with the following criteria
            | criteria          |
            | npa consumer loan |
        And the user accesses to dashboard
        And the analytics interceptor service is initiated
        And the user goes to the npa offer loan screen
        When the user accept credit bureau application
        Then the analytics events contains the following variables
            | item                | value                              | type         | event              |
            | analytics           | analytics/glomo_base               | json schema  | App On Click Start |
            | version DL          | 20250414_5.0                       | string       | App On Click Start |
            | page name           | app:privada:personas:oportunidades | string       | App On Click Start |
            | level 1             | oportunidades                      | string       | App On Click Start |
            | language            | ES                                 | string       | App On Click Start |
            | page area           | privada                            | string       | App On Click Start |
            | page intent         | informacion                        | string       | App On Click Start |
            | channel             | online                             | string       | App On Click Start |
            | page instance ID    | de                                 | string       | App On Click Start |
            | page info version   | appVersion                         | regexp named | App On Click Start |
            | page segment        | personas                           | string       | App On Click Start |
            | sysEnv              | app                                | string       | App On Click Start |
            | business unit       | BBVA Mexico                        | string       | App On Click Start |
            | site app name       | App BBVA Mexico                    | string       | App On Click Start |
            | project name        | Glomo                              | string       | App On Click Start |
            | device mobile       | si                                 | string       | App On Click Start |
            | user userState      | logado                             | string       | App On Click Start |
            | user segment global | 003001                             | string       | App On Click Start |
            | profile ID          | profileID                          | regexp named | App On Click Start |
            | user gender         | gender                             | regexp named | App On Click Start |
            | user age            | age                                | regexp named | App On Click Start |

    @ANA_NPACL003
    @analytics
    @web
    @web-done
    @backend(test)
    @MX @vbank
    @ios @android
    Scenario: The user watch otp screen
        Given a user with the following criteria
            | criteria          |
            | npa consumer loan |
        And the user goes to the npa offer loan screen
        And the user accept credit bureau application
        When the user moves forward to npa consumer loan offer page
        Then the device contains the following variables
            | item                | value                                            | type         |
            | analytics           | analytics/glomo_base                             | json schema  |
            | version DL          | 20250414_5.0                                     | string       |
            | page name           | app:privada:personas:prestamo no preaprobado:otp | string       |
            | level 1             | prestamo no preaprobado                          | string       |
            | level 2             | otp                                              | string       |
            | language            | ES                                               | string       |
            | page area           | privada                                          | string       |
            | page intent         | transaccion                                      | string       |
            | channel             | online                                           | string       |
            | page instance ID    | de                                               | string       |
            | page info version   | appVersion                                       | regexp named |
            | page segment        | personas                                         | string       |
            | sysEnv              | app                                              | string       |
            | business unit       | BBVA Mexico                                      | string       |
            | site app name       | App BBVA Mexico                                  | string       |
            | project name        | Glomo                                            | string       |
            | device mobile       | si                                               | string       |
            | user userState      | logado                                           | string       |
            | user segment global | 003001                                           | string       |
            | profile ID          | profileID                                        | regexp named |
            | user gender         | gender                                           | regexp named |
            | user age            | age                                              | regexp named |

    @ANA_NPACL004
    @analytics
    @web
    @web-done
    @backend(test)
    @MX @vbank
    @ios @android
    Scenario: Non Pre Approve Consumer Loan - APP PAGE VISIT
        Given a user with the following criteria
            | criteria          |
            | npa consumer loan |
        And the user goes to the npa offer loan screen
        And the user accept credit bureau application
        When the loan offer screen is showed
        Then the device contains the following variables
            | item                       | value                                                         | type         |
            | analytics                  | analytics/glomo_base                                          | json schema  |
            | version DL                 | 20250414_5.0                                                  | string       |
            | page name                  | app:privada:personas:prestamo personal one click:1 simulacion | string       |
            | level 1                    | prestamo personal one click                                   | string       |
            | level 2                    | 1 simulacion                                                  | string       |
            | language                   | ES                                                            | string       |
            | page area                  | privada                                                       | string       |
            | page intent                | transaccion                                                   | string       |
            | channel                    | online                                                        | string       |
            | page instance ID           | de                                                            | string       |
            | page info version          | appVersion                                                    | regexp named |
            | page segment               | personas                                                      | string       |
            | sysEnv                     | app                                                           | string       |
            | business unit              | BBVA Mexico                                                   | string       |
            | site app name              | App BBVA Mexico                                               | string       |
            | project name               | DIY E2E Sales                                                 | string       |
            | device mobile              | si                                                            | string       |
            | user userState             | logado                                                        | string       |
            | user segment global        | 003001                                                        | string       |
            | profile ID                 | profileID                                                     | regexp named |
            | user gender                | gender                                                        | regexp named |
            | user age                   | age                                                           | regexp named |
            | global application         | preapproved loan                                              | string       |
            | application name           | prestamo personal one click                                   | string       |
            | application type           | contratacion                                                  | string       |
            | application typology       | no preaprobado                                                | string       |
            | application step           | 1 simulacion                                                  | string       |
            | fulfillment model          | online                                                        | string       |
            | product primary category   | prestamos                                                     | string       |
            | product name               | prestamo personal inmediato                                   | string       |
            | product amount             | 80000                                                         | number       |
            | product payment amount     | 1918.04                                                       | number       |
            | product number of payments | 144                                                           | number       |
            | internal campaign          |                                                               | empty array  |
            | optimization attributes    |                                                               | empty array  |

    @ANA_NPACL005
    @analytics
    @web
    @web-done
    @backend(test)
    @MX @vbank
    @ios @android
    Scenario: Non Pre Approve Consumer Loan - APP STARTED
        Given a user with the following criteria
            | criteria          |
            | npa consumer loan |
        And the user goes to the npa offer loan screen
        And the user accept credit bureau application
        And the loan offer screen is showed
        When the user select the input amount
        Then the device contains the following variables
            | item                       | value                                                                  | type         |
            | analytics                  | analytics/glomo_base                                                   | json schema  |
            | version DL                 | 20250414_5.0                                                           | string       |
            | page name                  | app:privada:personas:tarjetas:prestamo personal one click:1 simulacion | string       |
            | level 1                    | tarjetas                                                               | string       |
            | level 2                    | prestamo personal one click                                            | string       |
            | level 3                    | 1 simulacion                                                           | string       |
            | language                   | ES                                                                     | string       |
            | page area                  | privada                                                                | string       |
            | page intent                | transaccion                                                            | string       |
            | channel                    | online                                                                 | string       |
            | page instance ID           | de                                                                     | string       |
            | page info version          | appVersion                                                             | regexp named |
            | page segment               | personas                                                               | string       |
            | sysEnv                     | app                                                                    | string       |
            | business unit              | BBVA Mexico                                                            | string       |
            | site app name              | App BBVA Mexico                                                        | string       |
            | project name               | DIY E2E Sales                                                          | string       |
            | device mobile              | si                                                                     | string       |
            | user userState             | logado                                                                 | string       |
            | user segment global        | 003001                                                                 | string       |
            | profile ID                 | profileID                                                              | regexp named |
            | user gender                | gender                                                                 | regexp named |
            | user age                   | age                                                                    | regexp named |
            | global application         | preapproved loan                                                       | string       |
            | application name           | prestamo personal one click                                            | string       |
            | application type           | contratacion                                                           | string       |
            | application typology       | no preaprobado                                                         | string       |
            | application step           | importe a solicitar                                                    | string       |
            | fulfillment model          | online                                                                 | string       |
            | product primary category   | prestamos                                                              | string       |
            | product name               | prestamo personal inmediato                                            | string       |
            | product amount             | 80000                                                                  | number       |
            | product payment amount     | 1918.04                                                                | number       |
            | product number of payments | 144                                                                    | number       |
            | internal campaign          |                                                                        | empty array  |
            | optimization attributes    |                                                                        | empty array  |

    @ANA_NPACL006
    @analytics
    @web
    @web-done
    @backend(test)
    @MX @vbank
    @ios @android
    Scenario: Non Pre Approve Consumer Loan - APP COMPLETED - REJECTED
        Given a user with the following criteria
            | criteria          |
            | npa consumer loan |
        And the user goes to the npa offer loan screen
        And the user accept credit bureau application
        And the loan offer screen is showed
        When the user hire the offer
        Then the device contains the following variables
            | item                     | value                                                                     | type         |
            | analytics                | analytics/glomo_base                                                      | json schema  |
            | version DL               | 20250414_5.0                                                              | string       |
            | page name                | app:privada:personas:prestamos:prestamo personal one click:pagina exitosa | string       |
            | level 1                  | prestamos                                                                 | string       |
            | level 2                  | prestamo personal one click                                               | string       |
            | level 3                  | pagina exitosa                                                            | string       |
            | language                 | ES                                                                        | string       |
            | page area                | privada                                                                   | string       |
            | page intent              | transaccion                                                               | string       |
            | channel                  | online                                                                    | string       |
            | page instance ID         | de                                                                        | string       |
            | page info version        | appVersion                                                                | regexp named |
            | page segment             | personas                                                                  | string       |
            | sysEnv                   | app                                                                       | string       |
            | business unit            | BBVA Mexico                                                               | string       |
            | site app name            | App BBVA Mexico                                                           | string       |
            | project name             | DIY E2E Sales                                                             | string       |
            | device mobile            | si                                                                        | string       |
            | user userState           | logado                                                                    | string       |
            | user segment global      | 003001                                                                    | string       |
            | profile ID               | profileID                                                                 | regexp named |
            | user gender              | gender                                                                    | regexp named |
            | user age                 | age                                                                       | regexp named |
            | user segment profile     | rechazo por falta de pago                                                 | string       |
            | global application       | preapproved loan                                                          | string       |
            | application name         | prestamo personal one click                                               | string       |
            | application type         | contratacion                                                              | string       |
            | application typology     | no preaprobado                                                            | string       |
            | application step         | pagina exitosa                                                            | string       |
            | application state        | rechazado                                                                 | string       |
            | fulfillment model        | online                                                                    | string       |
            | product primary category | prestamos                                                                 | string       |
            | product state            | rechazado                                                                 | string       |
            | internal campaign        |                                                                           | empty array  |
            | optimization attributes  |                                                                           | empty array  |

    @ANA_NPACL007
    @analytics
    @web
    @web-done
    @backend(test)
    @MX @vbank
    @ios @android
    Scenario: Non Pre Approve Consumer Loan - APP COMPLETED - FINALIZED
        Given a user with the following criteria
            | criteria          |
            | npa consumer loan |
        And the user goes to the npa offer loan screen
        And the user accept credit bureau application
        And the loan offer screen is showed
        When the user hire the offer
        Then the device contains the following variables
            | item                     | value                                                                     | type         |
            | analytics                | analytics/glomo_base                                                      | json schema  |
            | version DL               | 20250414_5.0                                                              | string       |
            | page name                | app:privada:personas:prestamos:prestamo personal one click:pagina exitosa | string       |
            | level 1                  | prestamos                                                                 | string       |
            | level 2                  | prestamo personal one click                                               | string       |
            | level 3                  | pagina exitosa                                                            | string       |
            | language                 | ES                                                                        | string       |
            | page area                | privada                                                                   | string       |
            | page intent              | transaccion                                                               | string       |
            | channel                  | online                                                                    | string       |
            | page instance ID         | de                                                                        | string       |
            | page info version        | appVersion                                                                | regexp named |
            | page segment             | personas                                                                  | string       |
            | sysEnv                   | app                                                                       | string       |
            | business unit            | BBVA Mexico                                                               | string       |
            | site app name            | App BBVA Mexico                                                           | string       |
            | project name             | DIY E2E Sales                                                             | string       |
            | device mobile            | si                                                                        | string       |
            | user userState           | logado                                                                    | string       |
            | user segment global      | 003001                                                                    | string       |
            | profile ID               | profileID                                                                 | regexp named |
            | user gender              | gender                                                                    | regexp named |
            | user age                 | age                                                                       | regexp named |
            | global application       | preapproved loan                                                          | string       |
            | application name         | prestamo personal one click                                               | string       |
            | application type         | contratacion                                                              | string       |
            | application typology     | no preaprobado                                                            | string       |
            | application step         | pagina exitosa                                                            | string       |
            | application state        | finalizado                                                                | string       |
            | fulfillment model        | online                                                                    | string       |
            | product primary category | prestamos                                                                 | string       |
            | product state            | finalizado                                                                | string       |
            | internal campaign        |                                                                           | empty array  |
            | optimization attributes  |                                                                           | empty array  |

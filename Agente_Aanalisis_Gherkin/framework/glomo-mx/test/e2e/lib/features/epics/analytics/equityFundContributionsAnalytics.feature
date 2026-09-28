@equityFundContributionsAnalytics
Feature: Analytics - Equity Fund Contributions

    @ANA_EFC001
    @analytics
    @MX
    @backend(test)
    @vbank @web-done
    @web @android @ios
    Scenario: Equity fund contribution - Error page view - Contract is blocked
        Given a user with the following criteria
            | criteria                |
            | equity contract blocked |
        And the user accesses to equity fund detail
        And the user accesses equity funds contributions
        And the analytics interceptor service is initiated
        When the user accesses in the "simulation step" section of equity fund contributions
        Then the analytics events contains the following variables
            | item                    | value                                                                    | type         | event     |
            | analytics               | analytics/glomo_base                                                     | json schema  | Page View |
            | version DL              | 20250414_5.0                                                             | string       | Page View |
            | page name               | app:privada:patrimonial:inversiones:incrementar fondo:contrato bloqueado | string       | Page View |
            | level 1                 | inversiones                                                              | string       | Page View |
            | level 2                 | incrementar fondo                                                        | string       | Page View |
            | level 3                 | contrato bloqueado                                                       | string       | Page View |
            | error page              | contrato bloqueado                                                       | string       | Page View |
            | language                | ES                                                                       | string       | Page View |
            | page area               | privada                                                                  | string       | Page View |
            | page intent             | informacion                                                              | string       | Page View |
            | channel                 | online                                                                   | string       | Page View |
            | page instance ID        | de                                                                       | string       | Page View |
            | page info version       | appVersion                                                               | regexp named | Page View |
            | page segment            | patrimonial                                                              | string       | Page View |
            | sysEnv                  | app                                                                      | string       | Page View |
            | business unit           | BBVA Mexico                                                              | string       | Page View |
            | site app name           | App BBVA Mexico                                                          | string       | Page View |
            | project name            | DIY E2E Sales                                                            | string       | Page View |
            | device mobile           | si                                                                       | string       | Page View |
            | user userState          | logado                                                                   | string       | Page View |
            | user segment global     | 003003                                                                   | string       | Page View |
            | profile ID              | profileID                                                                | regexp named | Page View |
            | user gender             | gender                                                                   | regexp named | Page View |
            | user age                | age                                                                      | regexp named | Page View |
            | internal campaign       |                                                                          | empty array  | Page View |
            | optimization attributes |                                                                          | empty array  | Page View |
            | products attributes     |                                                                          | empty array  | Page View |

    @ANA_EFC002
    @analytics
    @MX
    @backend(test)
    @vbank @web-done
    @web @android @ios
    Scenario: Equity fund contribution - Page view - Simulation
        Given a user with the following criteria
            | criteria               |
            | equity fund operations |
        And the user accesses to equity fund detail
        And the user accesses equity funds contributions
        When the user accesses in the "simulation step" section of equity fund contributions
        Then the device contains the following variables
            | item                    | value                                                            | type             |
            | analytics               | analytics/glomo_base                                             | json schema      |
            | version DL              | 20250414_5.0                                                     | string           |
            | page name               | app:privada:patrimonial:inversiones:incrementar fondo:simulacion | string           |
            | level 1                 | inversiones                                                      | string           |
            | level 2                 | incrementar fondo                                                | string           |
            | level 3                 | simulacion                                                       | string           |
            | language                | ES                                                               | string           |
            | page area               | privada                                                          | string           |
            | page intent             | informacion                                                      | string           |
            | channel                 | online                                                           | string           |
            | page instance ID        | de                                                               | string           |
            | page info version       | appVersion                                                       | regexp named     |
            | page segment            | patrimonial                                                      | string           |
            | sysEnv                  | app                                                              | string           |
            | business unit           | BBVA Mexico                                                      | string           |
            | site app name           | App BBVA Mexico                                                  | string           |
            | project name            | DIY E2E Sales                                                    | string           |
            | device mobile           | si                                                               | string           |
            | user userState          | logado                                                           | string           |
            | user segment global     | 003003                                                           | string           |
            | profile ID              | profileID                                                        | regexp named     |
            | internal campaign       |                                                                  | empty array      |
            | optimization attributes |                                                                  | empty array      |
            | products attributes     |                                                                  | empty array      |

    @ANA_EVENT_EFC003
    @analytics
    @MX
    @backend(test)
    @vbank @web-done
    @web @android @ios
    Scenario: Equity fund contribution - App on click start - Detail
        Given a user with the following criteria
            | criteria               |
            | equity fund operations |
        And the user accesses to equity fund detail
        And the analytics interceptor service is initiated
        When the user accesses equity funds contributions
        Then the analytics events contains the following variables
            | item                     | value                                              | type         | event              |
            | analytics                | analytics/glomo_base                               | json schema  | App On Click Start |
            | version DL               | 20250414_5.0                                       | string       | App On Click Start |
            | page name                | app:privada:patrimonial:inversiones:fondos:detalle | string       | App On Click Start |
            | level 1                  | inversiones                                        | string       | App On Click Start |
            | level 2                  | fondos                                             | string       | App On Click Start |
            | level 3                  | detalle                                            | string       | App On Click Start |
            | language                 | ES                                                 | string       | App On Click Start |
            | page area                | privada                                            | string       | App On Click Start |
            | page intent              | informacion                                        | string       | App On Click Start |
            | channel                  | online                                             | string       | App On Click Start |
            | page instance ID         | de                                                 | string       | App On Click Start |
            | page info version        | appVersion                                         | regexp named | App On Click Start |
            | page segment             | patrimonial                                        | string       | App On Click Start |
            | sysEnv                   | app                                                | string       | App On Click Start |
            | business unit            | BBVA Mexico                                        | string       | App On Click Start |
            | site app name            | App BBVA Mexico                                    | string       | App On Click Start |
            | project name             | Glomo                                              | string       | App On Click Start |
            | device mobile            | si                                                 | string       | App On Click Start |
            | user userState           | logado                                             | string       | App On Click Start |
            | user segment global      | 003003                                             | string       | App On Click Start |
            | profile ID               | profileID                                          | regexp named | App On Click Start |
            | user age                 | age                                                | regexp named | App On Click Start |
            | user gender              | gender                                             | regexp named | App On Click Start |
            | global application       | funds contribution                                 | string       | App On Click Start |
            | application name         | incrementar fondo                                  | string       | App On Click Start |
            | application type         | contratacion                                       | string       | App On Click Start |
            | application step         | incrementar                                        | string       | App On Click Start |
            | application typology     | largo plazo                                        | string       | App On Click Start |
            | fulfillment model        | online                                             | string       | App On Click Start |
            | product primary category | inversiones                                        | string       | App On Click Start |
            | product subtype          | fondos inversion                                   | string       | App On Click Start |
            | product name             | bbvadol                                            | string       | App On Click Start |
            | internal campaign        |                                                    | empty array  | App On Click Start |
            | optimization attributes  |                                                    | empty array  | App On Click Start |

    @ANA_EVENT_EFC004
    @analytics
    @MX
    @backend(test)
    @vbank @web-done
    @web @android @ios
    Scenario: Equity Fund Contributions - App Page Visit
        Given a user with the following criteria
            | criteria               |
            | equity fund operations |
        And the user accesses to equity fund detail
        And the analytics interceptor service is initiated
        When the user accesses equity funds contributions
        Then the analytics events contains the following variables
            | item                     | value                                                           | type         | event          |
            | analytics                | analytics/glomo_base                                            | json schema  | App Page Visit |
            | page name                | app:privada:patrimonial:inversiones:incrementar fondo:1 importe | string       | App Page Visit |
            | level 1                  | inversiones                                                     | string       | App Page Visit |
            | level 2                  | incrementar fondo                                               | string       | App Page Visit |
            | level 3                  | 1 importe                                                       | string       | App Page Visit |
            | language                 | ES                                                              | string       | App Page Visit |
            | page area                | privada                                                         | string       | App Page Visit |
            | page intent              | transaccion                                                     | string       | App Page Visit |
            | channel                  | online                                                          | string       | App Page Visit |
            | page instance ID         | de                                                              | string       | App Page Visit |
            | page info version        | appVersion                                                      | regexp named | App Page Visit |
            | page segment             | patrimonial                                                     | string       | App Page Visit |
            | sysEnv                   | app                                                             | string       | App Page Visit |
            | business unit            | BBVA Mexico                                                     | string       | App Page Visit |
            | site app name            | App BBVA Mexico                                                 | string       | App Page Visit |
            | project name             | DIY E2E Sales                                                   | string       | App Page Visit |
            | device mobile            | si                                                              | string       | App Page Visit |
            | user userState           | logado                                                          | string       | App Page Visit |
            | profile ID               | profileID                                                       | regexp named | App Page Visit |
            | user segment global      | 003003                                                          | string       | App Page Visit |
            | user gender              | gender                                                          | regexp named | App Page Visit |
            | user age                 | age                                                             | regexp named | App Page Visit |
            | user country             | lettersAndSpaceOrEmpty                                          | regexp named | App Page Visit |
            | global application       | funds contribution                                              | string       | App Page Visit |
            | application name         | incrementar fondo                                               | string       | App Page Visit |
            | application type         | contratacion                                                    | string       | App Page Visit |
            | application typology     | largo plazo                                                     | string       | App Page Visit |
            | application step         | 1 importe                                                       | string       | App Page Visit |
            | application process      | dentro de horario                                               | string       | App Page Visit |
            | fulfillment model        | online                                                          | string       | App Page Visit |
            | qualified visits         | true                                                            | string       | App Page Visit |
            | product primary category | inversiones                                                     | string       | App Page Visit |
            | product subtype          | fondos inversion                                                | string       | App Page Visit |
            | product name             | bbvadol                                                         | string       | App Page Visit |
            | internal campaign        |                                                                 | empty array  | App Page Visit |
            | optimization attributes  |                                                                 | empty array  | App Page Visit |

    @ANA_EVENT_EFC005
    @analytics
    @MX
    @backend(test)
    @vbank @web-done
    @web @android @ios
    Scenario: Equity Fund Contributions - App Started
        Given a user with the following criteria
            | criteria               |
            | equity fund operations |
        And the user accesses to equity fund detail
        And the user accesses equity funds contributions
        And the analytics interceptor service is initiated
        When the user accesses in the "simulation step" section of equity fund contributions
        Then the analytics events contains the following variables
            | item                     | value                                                           | type         | event       |
            | analytics                | analytics/glomo_base                                            | json schema  | App Started |
            | page name                | app:privada:patrimonial:inversiones:incrementar fondo:1 importe | string       | App Started |
            | level 1                  | inversiones                                                     | string       | App Started |
            | level 2                  | incrementar fondo                                               | string       | App Started |
            | level 3                  | 1 importe                                                       | string       | App Started |
            | language                 | ES                                                              | string       | App Started |
            | page area                | privada                                                         | string       | App Started |
            | page intent              | transaccion                                                     | string       | App Started |
            | channel                  | online                                                          | string       | App Started |
            | page instance ID         | de                                                              | string       | App Started |
            | page info version        | appVersion                                                      | regexp named | App Started |
            | page segment             | patrimonial                                                     | string       | App Started |
            | sysEnv                   | app                                                             | string       | App Started |
            | business unit            | BBVA Mexico                                                     | string       | App Started |
            | site app name            | App BBVA Mexico                                                 | string       | App Started |
            | project name             | DIY E2E Sales                                                   | string       | App Started |
            | device mobile            | si                                                              | string       | App Started |
            | user userState           | logado                                                          | string       | App Started |
            | profile ID               | profileID                                                       | regexp named | App Started |
            | user segment global      | 003003                                                          | string       | App Started |
            | user gender              | gender                                                          | regexp named | App Started |
            | user age                 | age                                                             | regexp named | App Started |
            | user country             | lettersAndSpaceOrEmpty                                          | regexp named | App Started |
            | global application       | funds contribution                                              | string       | App Started |
            | application name         | incrementar fondo                                               | string       | App Started |
            | application type         | contratacion                                                    | string       | App Started |
            | application typology     | largo plazo                                                     | string       | App Started |
            | application step         | importe                                                         | string       | App Started |
            | application process      | dentro de horario                                               | string       | App Started |
            | fulfillment model        | online                                                          | string       | App Started |
            | product primary category | inversiones                                                     | string       | App Started |
            | product subtype          | fondos inversion                                                | string       | App Started |
            | product name             | bbvadol                                                         | string       | App Started |
            | internal campaign        |                                                                 | empty array  | App Started |
            | optimization attributes  |                                                                 | empty array  | App Started |

    @ANA_EFC006
    @analytics
    @MX
    @backend(test)
    @vbank @web-done
    @web @android @ios
    Scenario: Equity Fund Contributions - App Step 2
        Given a user with the following criteria
            | criteria               |
            | equity fund operations |
        And the user accesses to equity fund detail
        And the user accesses equity funds contributions
        When the user accesses in the "confirm step" section of equity fund contributions
        Then the device contains the following variables
            | item                     | value                                                             | type         |
            | analytics                | analytics/glomo_base                                              | json schema  |
            | page name                | app:privada:patrimonial:inversiones:incrementar fondo:2 confirmar | string       |
            | level 1                  | inversiones                                                       | string       |
            | level 2                  | incrementar fondo                                                 | string       |
            | level 3                  | 2 confirmar                                                       | string       |
            | language                 | ES                                                                | string       |
            | page area                | privada                                                           | string       |
            | page intent              | transaccion                                                       | string       |
            | channel                  | online                                                            | string       |
            | page instance ID         | de                                                                | string       |
            | page info version        | appVersion                                                        | regexp named |
            | page segment             | patrimonial                                                       | string       |
            | sysEnv                   | app                                                               | string       |
            | business unit            | BBVA Mexico                                                       | string       |
            | site app name            | App BBVA Mexico                                                   | string       |
            | project name             | DIY E2E Sales                                                     | string       |
            | device mobile            | si                                                                | string       |
            | user userState           | logado                                                            | string       |
            | profile ID               | profileID                                                         | regexp named |
            | user segment global      | 003003                                                            | string       |
            | user gender              | gender                                                            | regexp named |
            | user age                 | age                                                               | regexp named |
            | user country             | lettersAndSpaceOrEmpty                                            | regexp named |
            | global application       | funds contribution                                                | string       |
            | application name         | incrementar fondo                                                 | string       |
            | application type         | contratacion                                                      | string       |
            | application typology     | largo plazo                                                       | string       |
            | application step         | 2 confirmar                                                       | string       |
            | application process      | dentro de horario                                                 | string       |
            | fulfillment model        | online                                                            | string       |
            | product primary category | inversiones                                                       | string       |
            | product subtype          | fondos inversion                                                  | string       |
            | product name             | bbvadol                                                           | string       |
            | product amount           | 200                                                               | string       |
            | product currency         | MXN                                                               | string       |
            | internal campaign        |                                                                   | empty array  |
            | optimization attributes  |                                                                   | empty array  |

    @ANA_EVENT_EFC007
    @analytics
    @MX
    @backend(test)
    @vbank @web-done
    @web @android @ios
    Scenario: Equity Fund Contributions - App Completed
        Given a user with the following criteria
            | criteria               |
            | equity fund operations |
        And the user accesses to equity fund detail
        And the user accesses equity funds contributions
        And the analytics interceptor service is initiated
        When the user accesses in the "confirm step" section of equity fund contributions
        And the user completes the equity fund contributions process with "63513516" otp code
        Then the analytics events contains the following variables
            | item                         | value                                                                | type         | event         |
            | analytics                    | analytics/glomo_base                                                 | json schema  | App Completed |
            | page name                    | app:privada:patrimonial:inversiones:incrementar fondo:pagina exitosa | string       | App Completed |
            | level 1                      | inversiones                                                          | string       | App Completed |
            | level 2                      | incrementar fondo                                                    | string       | App Completed |
            | level 3                      | pagina exitosa                                                       | string       | App Completed |
            | language                     | ES                                                                   | string       | App Completed |
            | page area                    | privada                                                              | string       | App Completed |
            | page intent                  | transaccion                                                          | string       | App Completed |
            | channel                      | online                                                               | string       | App Completed |
            | page instance ID             | de                                                                   | string       | App Completed |
            | page info version            | appVersion                                                           | regexp named | App Completed |
            | page segment                 | patrimonial                                                          | string       | App Completed |
            | sysEnv                       | app                                                                  | string       | App Completed |
            | business unit                | BBVA Mexico                                                          | string       | App Completed |
            | site app name                | App BBVA Mexico                                                      | string       | App Completed |
            | project name                 | DIY E2E Sales                                                        | string       | App Completed |
            | device mobile                | si                                                                   | string       | App Completed |
            | user userState               | logado                                                               | string       | App Completed |
            | profile ID                   | profileID                                                            | regexp named | App Completed |
            | user segment global          | 003003                                                               | string       | App Completed |
            | user gender                  | gender                                                               | regexp named | App Completed |
            | user age                     | age                                                                  | regexp named | App Completed |
            | user country                 | lettersAndSpaceOrEmpty                                               | regexp named | App Completed |
            | global application           | funds contribution                                                   | string       | App Completed |
            | application name             | incrementar fondo                                                    | string       | App Completed |
            | application type             | contratacion                                                         | string       | App Completed |
            | application typology         | mediano plazo                                                        | string       | App Completed |
            | application step             | pagina exitosa                                                       | string       | App Completed |
            | application process          | dentro de horario                                                    | string       | App Completed |
            | application state            | contratado                                                           | string       | App Completed |
            | application operation number | alphaNumericLowerCaseSpace                                           | regexp named | App Completed |
            | fulfillment model            | online                                                               | string       | App Completed |
            | product primary category     | inversiones                                                          | string       | App Completed |
            | product subtype              | fondos inversion                                                     | string       | App Completed |
            | product name                 | b+educa                                                              | string       | App Completed |
            | product amount               | 199.83                                                               | string       | App Completed |
            | product currency             | MXN                                                                  | string       | App Completed |
            | product state                | contratado                                                           | string       | App Completed |
            | internal campaign            |                                                                      | empty array  | App Completed |
            | optimization attributes      |                                                                      | empty array  | App Completed |

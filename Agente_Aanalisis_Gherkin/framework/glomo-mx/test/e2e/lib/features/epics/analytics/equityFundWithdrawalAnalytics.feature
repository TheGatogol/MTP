@equityFundWithdrawalAnalytics
Feature: Analytics - Equity Fund Withdrawal

    @ANA_EVENT_EFW001
    @analytics
    @MX
    @backend(test)
    @vbank @web-done
    @web @android @ios
    Scenario: Equity Fund Withdrawal - App Onclick Start
        Given a user with the following criteria
            | criteria               |
            | equity fund operations |
        And the user accesses to equity fund detail
        And the analytics interceptor service is initiated
        When the user accesses equity funds withdrawal
        Then the analytics events contains the following variables
            | item                     | value                                              | type         | event              |
            | analytics                | analytics/glomo_base                               | json schema  | App On Click Start |
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
            | profile ID               | profileID                                          | regexp named | App On Click Start |
            | user segment global      | 003003                                             | string       | App On Click Start |
            | user gender              | gender                                             | regexp named | App On Click Start |
            | user age                 | age                                                | regexp named | App On Click Start |
            | user country             | lettersAndSpaceOrEmpty                             | regexp named | App On Click Start |
            | global application       | funds withdrawal                                   | string       | App On Click Start |
            | application name         | venta fondo                                        | string       | App On Click Start |
            | application type         | operativa                                          | string       | App On Click Start |
            | application typology     | largo plazo                                        | string       | App On Click Start |
            | application step         | retirar                                            | string       | App On Click Start |
            | fulfillment model        | online                                             | string       | App On Click Start |
            | product primary category | inversiones                                        | string       | App On Click Start |
            | product subtype          | fondos inversion                                   | string       | App On Click Start |
            | product name             | bbvadol                                            | string       | App On Click Start |
            | internal campaign        |                                                    | empty array  | App On Click Start |
            | optimization attributes  |                                                    | empty array  | App On Click Start |

    @ANA_EVENT_EFW002
    @analytics
    @MX
    @backend(test)
    @vbank @web-done
    @web @android @ios
    Scenario: Equity Fund Withdrawal - App Page Visit
        Given a user with the following criteria
            | criteria               |
            | equity fund operations |
        And the user accesses to equity fund detail
        And the analytics interceptor service is initiated
        When the user accesses equity funds withdrawal
        Then the analytics events contains the following variables
            | item                     | value                                                           | type         | event          |
            | analytics                | analytics/glomo_base                                            | json schema  | App Page Visit |
            | page name                | app:privada:patrimonial:inversiones:venta fondo:1 tipo de venta | string       | App Page Visit |
            | level 1                  | inversiones                                                     | string       | App Page Visit |
            | level 2                  | venta fondo                                                     | string       | App Page Visit |
            | level 3                  | 1 tipo de venta                                                 | string       | App Page Visit |
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
            | project name             | Glomo                                                           | string       | App Page Visit |
            | device mobile            | si                                                              | string       | App Page Visit |
            | user userState           | logado                                                          | string       | App Page Visit |
            | profile ID               | profileID                                                       | regexp named | App Page Visit |
            | user segment global      | 003003                                                          | string       | App Page Visit |
            | user gender              | gender                                                          | regexp named | App Page Visit |
            | user age                 | age                                                             | regexp named | App Page Visit |
            | user country             | lettersAndSpaceOrEmpty                                          | regexp named | App Page Visit |
            | global application       | funds withdrawal                                                | string       | App Page Visit |
            | application name         | venta fondo                                                     | string       | App Page Visit |
            | application type         | operativa                                                       | string       | App Page Visit |
            | application typology     | largo plazo                                                     | string       | App Page Visit |
            | application step         | 1 tipo de venta                                                 | string       | App Page Visit |
            | application process      | dentro de horario                                               | string       | App Page Visit |
            | fulfillment model        | online                                                          | string       | App Page Visit |
            | qualified visits         | true                                                            | string       | App Page Visit |
            | product primary category | inversiones                                                     | string       | App Page Visit |
            | product subtype          | fondos inversion                                                | string       | App Page Visit |
            | product name             | bbvadol                                                         | string       | App Page Visit |
            | internal campaign        |                                                                 | empty array  | App Page Visit |
            | optimization attributes  |                                                                 | empty array  | App Page Visit |

    @ANA_EVENT_EFW003
    @analytics
    @MX
    @backend(test)
    @vbank @web-done @tmpExclude @JIRA.GLOMOMX-173744
    @web @android @ios
    Scenario: Equity Fund Withdrawal - App Started
        Given a user with the following criteria
            | criteria               |
            | equity fund operations |
        And the user accesses to equity fund detail
        And the user accesses equity funds withdrawal
        And the analytics interceptor service is initiated
        When the user accesses in the "simulation step" section of equity fund withdrawal
        Then the analytics events contains the following variables
            | item                     | value                                                           | type         | event       |
            | analytics                | analytics/glomo_base                                            | json schema  | App Started |
            | page name                | app:privada:patrimonial:inversiones:venta fondo:1 tipo de venta | string       | App Started |
            | level 1                  | inversiones                                                     | string       | App Started |
            | level 2                  | venta fondo                                                     | string       | App Started |
            | level 3                  | 1 tipo de venta                                                 | string       | App Started |
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
            | project name             | Glomo                                                           | string       | App Started |
            | device mobile            | si                                                              | string       | App Started |
            | user userState           | logado                                                          | string       | App Started |
            | profile ID               | profileID                                                       | regexp named | App Started |
            | user segment global      | 003003                                                          | string       | App Started |
            | user gender              | gender                                                          | regexp named | App Started |
            | user age                 | age                                                             | regexp named | App Started |
            | user country             | lettersAndSpaceOrEmpty                                          | regexp named | App Started |
            | global application       | funds withdrawal                                                | string       | App Started |
            | application name         | venta fondo                                                     | string       | App Started |
            | application type         | operativa                                                       | string       | App Started |
            | application typology     | largo plazo                                                     | string       | App Started |
            | application step         | venta parcial                                                   | string       | App Started |
            | application process      | dentro de horario                                               | string       | App Started |
            | fulfillment model        | online                                                          | string       | App Started |
            | product primary category | inversiones                                                     | string       | App Started |
            | product subtype          | fondos inversion                                                | string       | App Started |
            | product name             | bbvadol                                                         | string       | App Started |
            | internal campaign        |                                                                 | empty array  | App Started |
            | optimization attributes  |                                                                 | empty array  | App Started |

    @ANA_EVENT_EFW004
    @analytics
    @MX
    @backend(test)
    @vbank @web-done
    @web @android @ios
    Scenario: Equity Fund Withdrawal - App Step 2
        Given a user with the following criteria
            | criteria               |
            | equity fund operations |
        And the user accesses to equity fund detail
        And the user accesses equity funds withdrawal
        And the analytics interceptor service is initiated
        When the user accesses in the "confirm step" section of equity fund withdrawal
        Then the analytics events contains the following variables
            | item                     | value                                                       | type         | event      |
            | analytics                | analytics/glomo_base                                        | json schema  | App Step 2 |
            | page name                | app:privada:patrimonial:inversiones:venta fondo:2 confirmar | string       | App Step 2 |
            | level 1                  | inversiones                                                 | string       | App Step 2 |
            | level 2                  | venta fondo                                                 | string       | App Step 2 |
            | level 3                  | 2 confirmar                                                 | string       | App Step 2 |
            | language                 | ES                                                          | string       | App Step 2 |
            | page area                | privada                                                     | string       | App Step 2 |
            | page intent              | transaccion                                                 | string       | App Step 2 |
            | channel                  | online                                                      | string       | App Step 2 |
            | page instance ID         | de                                                          | string       | App Step 2 |
            | page info version        | appVersion                                                  | regexp named | App Step 2 |
            | page segment             | patrimonial                                                 | string       | App Step 2 |
            | sysEnv                   | app                                                         | string       | App Step 2 |
            | business unit            | BBVA Mexico                                                 | string       | App Step 2 |
            | site app name            | App BBVA Mexico                                             | string       | App Step 2 |
            | project name             | Glomo                                                       | string       | App Step 2 |
            | device mobile            | si                                                          | string       | App Step 2 |
            | user userState           | logado                                                      | string       | App Step 2 |
            | profile ID               | profileID                                                   | regexp named | App Step 2 |
            | user segment global      | 003003                                                      | string       | App Step 2 |
            | user gender              | gender                                                      | regexp named | App Step 2 |
            | user age                 | age                                                         | regexp named | App Step 2 |
            | user country             | lettersAndSpaceOrEmpty                                      | regexp named | App Step 2 |
            | global application       | funds withdrawal                                            | string       | App Step 2 |
            | application name         | venta fondo                                                 | string       | App Step 2 |
            | application type         | operativa                                                   | string       | App Step 2 |
            | application typology     | largo plazo                                                 | string       | App Step 2 |
            | application step         | 2 confirmar                                                 | string       | App Step 2 |
            | application process      | dentro de horario                                           | string       | App Step 2 |
            | application offer        | venta parcial                                               | string       | App Step 2 |
            | fulfillment model        | online                                                      | string       | App Step 2 |
            | product primary category | inversiones                                                 | string       | App Step 2 |
            | product subtype          | fondos inversion                                            | string       | App Step 2 |
            | product name             | bbvadol                                                     | string       | App Step 2 |
            | internal campaign        |                                                             | empty array  | App Step 2 |
            | optimization attributes  |                                                             | empty array  | App Step 2 |

    @ANA_EVENT_EFW005
    @analytics
    @MX
    @backend(test)
    @vbank @web-done
    @web @android @ios
    Scenario: Equity Fund Withdrawal - App Completed
        Given a user with the following criteria
            | criteria               |
            | equity fund operations |
        And the user accesses to equity fund detail
        And the user accesses equity funds withdrawal
        And the analytics interceptor service is initiated
        When the user accesses in the "confirm step" section of equity fund withdrawal
        And the user completes the equity fund withdrawal process with "66335318" otp code
        Then the analytics events contains the following variables
            | item                         | value                                                          | type         | event         |
            | analytics                    | analytics/glomo_base                                           | json schema  | App Completed |
            | page name                    | app:privada:patrimonial:inversiones:venta fondo:pagina exitosa | string       | App Completed |
            | level 1                      | inversiones                                                    | string       | App Completed |
            | level 2                      | venta fondo                                                    | string       | App Completed |
            | level 3                      | pagina exitosa                                                 | string       | App Completed |
            | language                     | ES                                                             | string       | App Completed |
            | page area                    | privada                                                        | string       | App Completed |
            | page intent                  | transaccion                                                    | string       | App Completed |
            | channel                      | online                                                         | string       | App Completed |
            | page instance ID             | de                                                             | string       | App Completed |
            | page info version            | appVersion                                                     | regexp named | App Completed |
            | page segment                 | patrimonial                                                    | string       | App Completed |
            | sysEnv                       | app                                                            | string       | App Completed |
            | business unit                | BBVA Mexico                                                    | string       | App Completed |
            | site app name                | App BBVA Mexico                                                | string       | App Completed |
            | project name                 | Glomo                                                          | string       | App Completed |
            | device mobile                | si                                                             | string       | App Completed |
            | user userState               | logado                                                         | string       | App Completed |
            | profile ID                   | profileID                                                      | regexp named | App Completed |
            | user segment global          | 003003                                                         | string       | App Completed |
            | user gender                  | gender                                                         | regexp named | App Completed |
            | user age                     | age                                                            | regexp named | App Completed |
            | user country                 | lettersAndSpaceOrEmpty                                         | regexp named | App Completed |
            | global application           | funds withdrawal                                               | string       | App Completed |
            | application name             | venta fondo                                                    | string       | App Completed |
            | application type             | operativa                                                      | string       | App Completed |
            | application typology         | largo plazo                                                    | string       | App Completed |
            | application step             | pagina exitosa                                                 | string       | App Completed |
            | application process          | dentro de horario                                              | string       | App Completed |
            | application offer            | venta parcial                                                  | string       | App Completed |
            | application state            | finalizado                                                     | string       | App Completed |
            | application operation number | alphaNumericLowerCaseSpace                                     | regexp named | App Completed |
            | fulfillment model            | online                                                         | string       | App Completed |
            | product primary category     | inversiones                                                    | string       | App Completed |
            | product subtype              | fondos inversion                                               | string       | App Completed |
            | product name                 | bbvadol                                                        | string       | App Completed |
            | product amount               | 100.54                                                         | string       | App Completed |
            | product currency             | MXN                                                            | string       | App Completed |
            | product state                | finalizado                                                     | string       | App Completed |
            | internal campaign            |                                                                | empty array  | App Completed |
            | optimization attributes      |                                                                | empty array  | App Completed |

    @ANA_EFW006
    @analytics
    @MX
    @backend(test)
    @vbank @web-done
    @web @android @ios
    Scenario: Equity Fund Withdrawal - Simulation Page View
        Given a user with the following criteria
            | criteria               |
            | equity fund operations |
        And the user accesses to equity fund detail
        And the user accesses equity funds withdrawal
        And the user accesses in the "simulation step" section of equity fund withdrawal
        And the analytics interceptor service is initiated
        When the user accesses in the "fill simulation step" section of equity fund withdrawal
        Then the analytics events contains the following variables
            | item                    | value                                                      | type         | event     |
            | analytics               | analytics/glomo_base                                       | json schema  | Page View |
            | version DL              | 20250414_5.0                                               | string       | Page View |
            | page name               | app:privada:patrimonial:inversiones:venta fondo:simulacion | string       | Page View |
            | level 1                 | inversiones                                                | string       | Page View |
            | level 2                 | venta fondo                                                | string       | Page View |
            | level 3                 | simulacion                                                 | string       | Page View |
            | language                | ES                                                         | string       | Page View |
            | page area               | privada                                                    | string       | Page View |
            | page intent             | informacion                                                | string       | Page View |
            | channel                 | online                                                     | string       | Page View |
            | page instance ID        | de                                                         | string       | Page View |
            | page info version       | appVersion                                                 | regexp named | Page View |
            | page segment            | patrimonial                                                | string       | Page View |
            | sysEnv                  | app                                                        | string       | Page View |
            | business unit           | BBVA Mexico                                                | string       | Page View |
            | site app name           | App BBVA Mexico                                            | string       | Page View |
            | project name            | Glomo                                                      | string       | Page View |
            | device mobile           | si                                                         | string       | Page View |
            | user userState          | logado                                                     | string       | Page View |
            | user segment global     | 003003                                                     | string       | Page View |
            | profile ID              | profileID                                                  | regexp named | Page View |
            | internal campaign       |                                                            | empty array  | Page View |
            | optimization attributes |                                                            | empty array  | Page View |
            | products attributes     |                                                            | empty array  | Page View |

    @ANA_EFW007
    @analytics
    @MX
    @backend(test)
    @vbank @web-done
    @web @android @ios
    Scenario: Equity Fund Withdrawal - Contract is blocked - Page View
        Given a user with the following criteria
            | criteria                |
            | equity contract blocked |
        And the user accesses to equity fund detail
        And the user accesses equity funds withdrawal
        And the user accesses in the "simulation step" section of equity fund withdrawal
        And the analytics interceptor service is initiated
        And the user accesses in the "fill simulation step" section of equity fund withdrawal
        When fund withdrawal simulation is finished
        Then the analytics events contains the following variables
            | item                    | value                                                              | type         | event     |
            | analytics               | analytics/glomo_base                                               | json schema  | Page View |
            | version DL              | 20250414_5.0                                                       | string       | Page View |
            | page name               | app:privada:patrimonial:inversiones:venta fondo:contrato bloqueado | string       | Page View |
            | level 1                 | inversiones                                                        | string       | Page View |
            | level 2                 | venta fondo                                                        | string       | Page View |
            | level 3                 | contrato bloqueado                                                 | string       | Page View |
            | error page              | contrato bloqueado                                                 | string       | Page View |
            | language                | ES                                                                 | string       | Page View |
            | page area               | privada                                                            | string       | Page View |
            | page intent             | informacion                                                        | string       | Page View |
            | channel                 | online                                                             | string       | Page View |
            | page instance ID        | de                                                                 | string       | Page View |
            | page info version       | appVersion                                                         | regexp named | Page View |
            | page segment            | patrimonial                                                        | string       | Page View |
            | sysEnv                  | app                                                                | string       | Page View |
            | business unit           | BBVA Mexico                                                        | string       | Page View |
            | site app name           | App BBVA Mexico                                                    | string       | Page View |
            | project name            | Glomo                                                              | string       | Page View |
            | device mobile           | si                                                                 | string       | Page View |
            | user userState          | logado                                                             | string       | Page View |
            | user segment global     | 003003                                                             | string       | Page View |
            | profile ID              | profileID                                                          | regexp named | Page View |
            | internal campaign       |                                                                    | empty array  | Page View |
            | optimization attributes |                                                                    | empty array  | Page View |
            | products attributes     |                                                                    | empty array  | Page View |

    @ANA_EFW008
    @analytics
    @MX
    @backend(test)
    @vbank @web-done
    @web @android @ios
    Scenario: Equity Fund Withdrawal - Add Import - Page View
        Given a user with the following criteria
            | criteria               |
            | equity fund operations |
        And the user accesses to equity fund detail
        And the user accesses equity funds withdrawal
        When the user accesses in the "simulation step" section of equity fund withdrawal
        Then the device contains the following variables
            | item                    | value                                                   | type             |
            | analytics               | analytics/glomo_base                                    | json schema      |
            | version DL              | 20250414_5.0                                            | string           |
            | page name               | app:privada:patrimonial:inversiones:venta fondo:importe | string           |
            | level 1                 | inversiones                                             | string           |
            | level 2                 | venta fondo                                             | string           |
            | level 3                 | importe                                                 | string           |
            | language                | ES                                                      | string           |
            | page area               | privada                                                 | string           |
            | page intent             | informacion                                             | string           |
            | channel                 | online                                                  | string           |
            | page instance ID        | de                                                      | string           |
            | page info version       | appVersion                                              | regexp named     |
            | page segment            | patrimonial                                             | string           |
            | sysEnv                  | app                                                     | string           |
            | business unit           | BBVA Mexico                                             | string           |
            | site app name           | App BBVA Mexico                                         | string           |
            | project name            | Glomo                                                   | string           |
            | device mobile           | si                                                      | string           |
            | user userState          | logado                                                  | string           |
            | user segment global     | 003003                                                  | string           |
            | profile ID              | profileID                                               | regexp named     |
            | internal campaign       |                                                         | empty array      |
            | optimization attributes |                                                         | empty array      |
            | products attributes     |                                                         | empty array      |

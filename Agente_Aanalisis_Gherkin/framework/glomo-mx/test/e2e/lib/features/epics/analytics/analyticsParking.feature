@parkingAnalytics
Feature: Analytics Parking Meters

    @ANA_EVENT_PM001
    @vbank
    @MX @android @ios
    @web
    @backend(test)
    @web-done
    @analytics
    Scenario: The user selects a parking meter account to recharge - App On Click Start
        Given a user with the following criteria
            | criteria           |
            | multiple accounts  |
            | account in pesos   |
            | parking accounts   |
        And the user accesses to "parking meters" operative from top up operationals
        And the analytics interceptor service is initiated
        When the user goes to recharge his parking meter account
        Then the analytics events contains the following variables
            | item	                   | value	                                                   | type         | event              |
            | analytics                | analytics/glomo_base                                      | json schema  | App On Click Start |
            | version DL               | 20250414_5.0                                              | string       | App On Click Start |
            | page name                | app:privada:personas:parquimetros:cuentas registradas     | string       | App On Click Start |
            | level 1                  | parquimetros                                              | string       | App On Click Start |
            | level 2                  | cuentas registradas                                       | string       | App On Click Start |
            | language                 | ES                                                        | string       | App On Click Start |
            | page area                | privada                                                   | string       | App On Click Start |
            | page intent              | informacion                                               | string       | App On Click Start |
            | channel                  | online                                                    | string       | App On Click Start |
            | page instance ID         | de                                                        | string       | App On Click Start |
            | page info version        | appVersion                                                | regexp named | App On Click Start |
            | page segment             | personas                                                  | string       | App On Click Start |
            | sysEnv                   | app                                                       | string       | App On Click Start |
            | business unit            | BBVA Mexico                                               | string       | App On Click Start |
            | site app name            | App BBVA Mexico                                           | string       | App On Click Start |
            | project name             | Glomo                                                     | string       | App On Click Start |
            | device mobile            | si                                                        | string       | App On Click Start |
            | user userState           | logado                                                    | string       | App On Click Start |
            | user segment global      | 003001                                                    | string       | App On Click Start |
            | profile ID               | profileID                                                 | regexp named | App On Click Start |
            | user gender              | gender                                                    | regexp named | App On Click Start |
            | user age                 | age                                                       | regexp named | App On Click Start |
            | global application       | parking recharge                                          | string       | App On Click Start |
            | application name         | recarga parquimetro                                       | string       | App On Click Start |
            | application type         | operativa                                                 | string       | App On Click Start |
            | application step         | recargar                                                  | string       | App On Click Start |
            | fulfillment model        | online                                                    | string       | App On Click Start |
            | internal campaign        |                                                           | empty array  | App On Click Start |
            | optimization attributes  |                                                           | empty array  | App On Click Start |
            | products attributes      |                                                           | empty array  | App On Click Start |

    @ANA_EVENT_PM002
    @vbank
    @MX @android @ios
    @web
    @backend(test)
    @web-done
    @analytics
    Scenario: The user will recharge his parking meter account - App Page Visit
        Given a user with the following criteria
            | criteria            |
            | multiple accounts   |
            | account in pesos    |
            | parking accounts    |
        And the user accesses to "parking meters" operative from top up operationals
        And the analytics interceptor service is initiated
        When the user goes to recharge his parking meter account
        Then the analytics events contains the following variables
            | item	                   | value	                                              | type         |  event          |
            | analytics                | analytics/glomo_base                                 | json schema  |  App Page Visit |
            | version DL               | 20250414_5.0                                         | string       |  App Page Visit |
            | page name                | app:privada:personas:parquimetros:recargar:1 importe | string       |  App Page Visit |
            | level 1                  | parquimetros                                         | string       |  App Page Visit |
            | level 2                  | recargar                                             | string       |  App Page Visit |
            | level 3                  | 1 importe                                            | string       |  App Page Visit |
            | language                 | ES                                                   | string       |  App Page Visit |
            | page area                | privada                                              | string       |  App Page Visit |
            | page intent              | informacion                                          | string       |  App Page Visit |
            | channel                  | online                                               | string       |  App Page Visit |
            | page instance ID         | de                                                   | string       |  App Page Visit |
            | page info version        | appVersion                                           | regexp named |  App Page Visit |
            | page segment             | personas                                             | string       |  App Page Visit |
            | sysEnv                   | app                                                  | string       |  App Page Visit |
            | business unit            | BBVA Mexico                                          | string       |  App Page Visit |
            | site app name            | App BBVA Mexico                                      | string       |  App Page Visit |
            | project name             | Glomo                                                | string       |  App Page Visit |
            | device mobile            | si                                                   | string       |  App Page Visit |
            | user userState           | logado                                               | string       |  App Page Visit |
            | user segment global      | 003001                                               | string       |  App Page Visit |
            | profile ID               | profileID                                            | regexp named |  App Page Visit |
            | user gender              | gender                                               | regexp named |  App Page Visit |
            | user age                 | age                                                  | regexp named |  App Page Visit |
            | global application       | parking recharge                                     | string       |  App Page Visit |
            | application name         | recarga parquimetro                                  | string       |  App Page Visit |
            | application type         | operativa                                            | string       |  App Page Visit |
            | application step         | 1 importe                                            | string       |  App Page Visit |
            | fulfillment model        | online                                               | string       |  App Page Visit |
            | product primary category | cuentas                                              | string       |  App Page Visit |
            | internal campaign        |                                                      | empty array  |  App Page Visit |
            | optimization attributes  |                                                      | empty array  |  App Page Visit |

    @ANA_EVENT_PM003
    @vbank
    @MX @android @ios
    @web
    @backend(test)
    @web-done
    @analytics
    Scenario: The user interacts with the parking meter account recharge - App Started
        Given a user with the following criteria
            | criteria            |
            | multiple accounts   |
            | account in pesos    |
            | parking accounts    |
        And the user accesses to "parking meters" operative from top up operationals
        And the analytics interceptor service is initiated
        And the user goes to recharge his parking meter account
        When the user continues to the "payment method" step of the parking recharge
        Then the analytics events contains the following variables
            | item	                   | value	                                              | type         |  event       |
            | analytics                | analytics/glomo_base                                 | json schema  |  App Started |
            | version DL               | 20250414_5.0                                         | string       |  App Started |
            | page name                | app:privada:personas:parquimetros:recargar:1 importe | string       |  App Started |
            | level 1                  | parquimetros                                         | string       |  App Started |
            | level 2                  | recargar                                             | string       |  App Started |
            | level 3                  | 1 importe                                            | string       |  App Started |
            | language                 | ES                                                   | string       |  App Started |
            | page area                | privada                                              | string       |  App Started |
            | page intent              | informacion                                          | string       |  App Started |
            | channel                  | online                                               | string       |  App Started |
            | page instance ID         | de                                                   | string       |  App Started |
            | page info version        | appVersion                                           | regexp named |  App Started |
            | page segment             | personas                                             | string       |  App Started |
            | sysEnv                   | app                                                  | string       |  App Started |
            | business unit            | BBVA Mexico                                          | string       |  App Started |
            | site app name            | App BBVA Mexico                                      | string       |  App Started |
            | project name             | Glomo                                                | string       |  App Started |
            | device mobile            | si                                                   | string       |  App Started |
            | user userState           | logado                                               | string       |  App Started |
            | user segment global      | 003001                                               | string       |  App Started |
            | profile ID               | profileID                                            | regexp named |  App Started |
            | user gender              | gender                                               | regexp named |  App Started |
            | user age                 | age                                                  | regexp named |  App Started |
            | global application       | parking recharge                                     | string       |  App Started |
            | application name         | recarga parquimetro                                  | string       |  App Started |
            | application type         | operativa                                            | string       |  App Started |
            | application step         | importe                                              | string       |  App Started |
            | fulfillment model        | online                                               | string       |  App Started |
            | product primary category | cuentas                                              | string       |  App Started |
            | internal campaign        |                                                      | empty array  |  App Started |
            | optimization attributes  |                                                      | empty array  |  App Started |

    @ANA_EVENT_PM004
    @vbank
    @MX @android @ios
    @web
    @backend(test)
    @web-done
    @analytics
    Scenario: The user selects an account to parking meter recharge - App Step 2
        Given a user with the following criteria
            | criteria            |
            | multiple accounts   |
            | account in pesos    |
            | parking accounts    |
        And the user accesses to "parking meters" operative from top up operationals
        And the analytics interceptor service is initiated
        And the user goes to recharge his parking meter account
        When the user continues to the "payment method" step of the parking recharge
        Then the analytics events contains the following variables
            | item	                                                 | value	                                                  | type         |  event      |
            | analytics                                              | analytics/glomo_base                                       |json schema   |  App Step 2 |
            | version DL                                             | 20250414_5.0                                               |string        |  App Step 2 |
            | page name                                              | app:privada:personas:parquimetros:recargar:2 forma de pago |string        |  App Step 2 |
            | level 1                                                | parquimetros                                               |string        |  App Step 2 |
            | level 2                                                | recargar                                                   |string        |  App Step 2 |
            | level 3                                                | 2 forma de pago                                            |string        |  App Step 2 |
            | language                                               | ES                                                         |string        |  App Step 2 |
            | page area                                              | privada                                                    |string        |  App Step 2 |
            | page intent                                            | informacion                                                |string        |  App Step 2 |
            | channel                                                | online                                                     |string        |  App Step 2 |
            | page instance ID                                       | de                                                         |string        |  App Step 2 |
            | page info version                                      | appVersion                                                 |regexp named  |  App Step 2 |
            | page segment                                           | personas                                                   |string        |  App Step 2 |
            | sysEnv                                                 | app                                                        |string        |  App Step 2 |
            | business unit                                          | BBVA Mexico                                                |string        |  App Step 2 |
            | site app name                                          | App BBVA Mexico                                            |string        |  App Step 2 |
            | project name                                           | Glomo                                                      |string        |  App Step 2 |
            | device mobile                                          | si                                                         |string        |  App Step 2 |
            | user userState                                         | logado                                                     |string        |  App Step 2 |
            | user segment global                                    | 003001                                                     |string        |  App Step 2 |
            | profile ID                                             | profileID                                                  |regexp named  |  App Step 2 |
            | user gender                                            | gender                                                     |regexp named  |  App Step 2 |
            | user age                                               | age                                                        |regexp named  |  App Step 2 |
            | global application                                     | parking recharge                                           |string        |  App Step 2 |
            | application name                                       | recarga parquimetro                                        |string        |  App Step 2 |
            | application type                                       | operativa                                                  |string        |  App Step 2 |
            | application step                                       | 2 forma de pago                                            |string        |  App Step 2 |
            | fulfillment model                                      | online                                                     |string        |  App Step 2 |
            | product primary category                               | cuentas                                                    |string        |  App Step 2 |
            | product amount                                         | 100                                                        |string        |  App Step 2 |
            | product currency                                       | MXN                                                        |string        |  App Step 2 |
            | product service charge                                 | 12                                                         |string        |  App Step 2 |
            | internal campaign                                      |                                                            |empty array   |  App Step 2 |
            | optimization attributes                                |                                                            |empty array   |  App Step 2 |

    @ANA_EVENT_PM005
    @vbank
    @MX @android @ios
    @web
    @backend(test)
    @web-done
    @analytics
    Scenario: The user sees the parking meter refill summary - App Step 3
        Given a user with the following criteria
            | criteria            |
            | multiple accounts   |
            | account in pesos    |
            | parking accounts    |
        And the user accesses to "parking meters" operative from top up operationals
        And the analytics interceptor service is initiated
        And the user goes to recharge his parking meter account
        When the user continues to the "summary" step of the parking recharge
        Then the analytics events contains the following variables
            | item	                                                 | value	                                                  | type         |  event      |
            | analytics                                              | analytics/glomo_base                                       |json schema   |  App Step 3 |
            | version DL                                             | 20250414_5.0                                               |string        |  App Step 3 |
            | page name                                              | app:privada:personas:parquimetros:recargar:3 confirmacion  |string        |  App Step 3 |
            | level 1                                                | parquimetros                                               |string        |  App Step 3 |
            | level 2                                                | recargar                                                   |string        |  App Step 3 |
            | level 3                                                | 3 confirmacion                                             |string        |  App Step 3 |
            | language                                               | ES                                                         |string        |  App Step 3 |
            | page area                                              | privada                                                    |string        |  App Step 3 |
            | page intent                                            | informacion                                                |string        |  App Step 3 |
            | channel                                                | online                                                     |string        |  App Step 3 |
            | page instance ID                                       | de                                                         |string        |  App Step 3 |
            | page info version                                      | appVersion                                                 |regexp named  |  App Step 3 |
            | page segment                                           | personas                                                   |string        |  App Step 3 |
            | sysEnv                                                 | app                                                        |string        |  App Step 3 |
            | business unit                                          | BBVA Mexico                                                |string        |  App Step 3 |
            | site app name                                          | App BBVA Mexico                                            |string        |  App Step 3 |
            | project name                                           | Glomo                                                      |string        |  App Step 3 |
            | device mobile                                          | si                                                         |string        |  App Step 3 |
            | user userState                                         | logado                                                     |string        |  App Step 3 |
            | user segment global                                    | 003001                                                     |string        |  App Step 3 |
            | profile ID                                             | profileID                                                  |regexp named  |  App Step 3 |
            | user gender                                            | gender                                                     |regexp named  |  App Step 3 |
            | user age                                               | age                                                        |regexp named  |  App Step 3 |
            | global application                                     | parking recharge                                           |string        |  App Step 3 |
            | application name                                       | recarga parquimetro                                        |string        |  App Step 3 |
            | application type                                       | operativa                                                  |string        |  App Step 3 |
            | application step                                       | 3 confirmacion                                             |string        |  App Step 3 |
            | fulfillment model                                      | online                                                     |string        |  App Step 3 |
            | product primary category                               | cuentas                                                    |string        |  App Step 3 |
            | product amount                                         | 100                                                        |string        |  App Step 3 |
            | product currency                                       | MXN                                                        |string        |  App Step 3 |
            | product service charge                                 | 12                                                         |string        |  App Step 3 |
            | internal campaign                                      |                                                            |empty array   |  App Step 3 |
            | optimization attributes                                |                                                            |empty array   |  App Step 3 |

    @ANA_EVENT_PM006
    @vbank
    @MX @android @ios
    @web
    @backend(test)
    @web-done
    @analytics
    Scenario: Parking recharge otp - App Step 4
        Given a user with the following criteria
            | criteria            |
            | multiple accounts   |
            | account in pesos    |
            | parking accounts    |
        And the user accesses to "parking meters" operative from top up operationals
        And the analytics interceptor service is initiated
        And the user goes to recharge his parking meter account
        And the user continues to the "summary" step of the parking recharge
        When the user completes the parking "recharge"
        Then the analytics events contains the following variables
            | item	                                                 | value	                                                  | type         |  event      |
            | analytics                                              | analytics/glomo_base                                       |json schema   |  App Step 4 |
            | version DL                                             | 20250414_5.0                                               |string        |  App Step 4 |
            | page name                                              | app:privada:personas:parquimetros:recargar:4 otp           |string        |  App Step 4 |
            | level 1                                                | parquimetros                                               |string        |  App Step 4 |
            | level 2                                                | recargar                                                   |string        |  App Step 4 |
            | level 3                                                | 4 otp                                                      |string        |  App Step 4 |
            | language                                               | ES                                                         |string        |  App Step 4 |
            | page area                                              | privada                                                    |string        |  App Step 4 |
            | page intent                                            | informacion                                                |string        |  App Step 4 |
            | channel                                                | online                                                     |string        |  App Step 4 |
            | page instance ID                                       | de                                                         |string        |  App Step 4 |
            | page info version                                      | appVersion                                                 |regexp named  |  App Step 4 |
            | page segment                                           | personas                                                   |string        |  App Step 4 |
            | sysEnv                                                 | app                                                        |string        |  App Step 4 |
            | business unit                                          | BBVA Mexico                                                |string        |  App Step 4 |
            | site app name                                          | App BBVA Mexico                                            |string        |  App Step 4 |
            | project name                                           | Glomo                                                      |string        |  App Step 4 |
            | device mobile                                          | si                                                         |string        |  App Step 4 |
            | user userState                                         | logado                                                     |string        |  App Step 4 |
            | user segment global                                    | 003001                                                     |string        |  App Step 4 |
            | profile ID                                             | profileID                                                  |regexp named  |  App Step 4 |
            | user gender                                            | gender                                                     |regexp named  |  App Step 4 |
            | user age                                               | age                                                        |regexp named  |  App Step 4 |
            | global application                                     | parking recharge                                           |string        |  App Step 4 |
            | application name                                       | recarga parquimetro                                        |string        |  App Step 4 |
            | application type                                       | operativa                                                  |string        |  App Step 4 |
            | application step                                       | 4 otp                                                      |string        |  App Step 4 |
            | fulfillment model                                      | online                                                     |string        |  App Step 4 |
            | product primary category                               | cuentas                                                    |string        |  App Step 4 |
            | product amount                                         | 100                                                        |string        |  App Step 4 |
            | product currency                                       | MXN                                                        |string        |  App Step 4 |
            | product service charge                                 | 12                                                         |string        |  App Step 4 |
            | internal campaign                                      |                                                            |empty array   |  App Step 4 |
            | optimization attributes                                |                                                            |empty array   |  App Step 4 |

    @ANA_EVENT_PM007
    @vbank
    @MX @android @ios
    @web
    @backend(test)
    @web-done
    @analytics
    Scenario: The user completes parking meter recharge - App Completed
        Given a user with the following criteria
            | criteria            |
            | multiple accounts   |
            | account in pesos    |
            | parking accounts    |
        And the user accesses to "parking meters" operative from top up operationals
        And the analytics interceptor service is initiated
        And the user goes to recharge his parking meter account
        And the user continues to the "summary" step of the parking recharge
        When the user completes the parking "recharge"
        Then the analytics events contains the following variables
            | item	                                                 | value	                                                 | type         |  event        |
            | analytics                                              | analytics/glomo_base                                      | json schema  | App Completed |
            | version DL                                             | 20250414_5.0                                              | string       | App Completed |
            | page name                                              | app:privada:personas:parquimetros:recargar:pagina exitosa | string       | App Completed |
            | level 1                                                | parquimetros                                              | string       | App Completed |
            | level 2                                                | recargar                                                  | string       | App Completed |
            | level 3                                                | pagina exitosa                                            | string       | App Completed |
            | language                                               | ES                                                        | string       | App Completed |
            | page area                                              | privada                                                   | string       | App Completed |
            | page intent                                            | informacion                                               | string       | App Completed |
            | channel                                                | online                                                    | string       | App Completed |
            | page instance ID                                       | de                                                        | string       | App Completed |
            | page info version                                      | appVersion                                                | regexp named | App Completed |
            | page segment                                           | personas                                                  | string       | App Completed |
            | sysEnv                                                 | app                                                       | string       | App Completed |
            | business unit                                          | BBVA Mexico                                               | string       | App Completed |
            | site app name                                          | App BBVA Mexico                                           | string       | App Completed |
            | project name                                           | Glomo                                                     | string       | App Completed |
            | device mobile                                          | si                                                        | string       | App Completed |
            | user userState                                         | logado                                                    | string       | App Completed |
            | user segment global                                    | 003001                                                    | string       | App Completed |
            | profile ID                                             | profileID                                                 | regexp named | App Completed |
            | user gender                                            | gender                                                    | regexp named | App Completed |
            | user age                                               | age                                                       | regexp named | App Completed |
            | global application                                     | parking recharge                                          | string       | App Completed |
            | application name                                       | recarga parquimetro                                       | string       | App Completed |
            | application type                                       | operativa                                                 | string       | App Completed |
            | application step                                       | pagina exitosa                                            | string       | App Completed |
            | fulfillment model                                      | online                                                    | string       | App Completed |
            | application state                                      | finalizado                                                | string       | App Completed |
            | application operation number                           | 0007730146                                                | string       | App Completed |
            | product primary category                               | cuentas                                                   | string       | App Completed |
            | product amount                                         | 100                                                       | string       | App Completed |
            | product currency                                       | MXN                                                       | string       | App Completed |
            | product service charge                                 |                                                           | string       | App Completed |
            | product name                                           | cuenta de ahorro                                          | string       | App Completed |
            | internal campaign                                      |                                                           | empty array  | App Completed |
            | optimization attributes                                |                                                           | empty array  | App Completed |

    @ANA_EVENT_PM008
    @vbank
    @MX @android @ios
    @web
    @backend(test)
    @web-done
    @analytics
    Scenario: Access parking meter registration - App On Click Start
        Given a user with the following criteria
            | criteria            |
            | multiple accounts   |
            | account in pesos    |
            | parking accounts    |
        And the user accesses to "parking meters" operative from top up operationals
        And the analytics interceptor service is initiated
        When the user goes to register a parking meter account
        Then the analytics events contains the following variables
            | item	                  | value	                                                           | type         |  event             |
            | version DL              | 20250414_5.0                                                       | string       | App On Click Start |
            | page name               | app:privada:personas:parquimetros:cuentas registradas              | string       | App On Click Start |
            | level 1                 | parquimetros                                                       | string       | App On Click Start |
            | level 2                 | cuentas registradas                                                | string       | App On Click Start |
            | language                | ES                                                                 | string       | App On Click Start |
            | page area               | privada                                                            | string       | App On Click Start |
            | page intent             | informacion                                                        | string       | App On Click Start |
            | channel                 | online                                                             | string       | App On Click Start |
            | page instance ID        | de                                                                 | string       | App On Click Start |
            | page info version       | appVersion                                                         | regexp named | App On Click Start |
            | page segment            | personas                                                           | string       | App On Click Start |
            | sysEnv                  | app                                                                | string       | App On Click Start |
            | business unit           | BBVA Mexico                                                        | string       | App On Click Start |
            | site app name           | App BBVA Mexico                                                    | string       | App On Click Start |
            | project name            | Glomo                                                              | string       | App On Click Start |
            | device mobile           | si                                                                 | string       | App On Click Start |
            | user userState          | logado                                                             | string       | App On Click Start |
            | user segment global     | 003001                                                             | string       | App On Click Start |
            | profile ID              | profileID                                                          | regexp named | App On Click Start |
            | user gender             | gender                                                             | regexp named | App On Click Start |
            | user age                | age                                                                | regexp named | App On Click Start |
            | global application      | parking activation                                                 | string       | App On Click Start |
            | application name        | registro parquimetros                                              | string       | App On Click Start |
            | application type        | operativa                                                          | string       | App On Click Start |
            | application step        | anadir                                                             | string       | App On Click Start |
            | fulfillment model       | online                                                             | string       | App On Click Start |
            | internal campaign       |                                                                    | empty array  | App On Click Start |
            | optimization attributes |                                                                    | empty array  | App On Click Start |
            | products attributes     |                                                                    | empty array  | App On Click Start |

    @ANA_EVENT_PM009
    @vbank
    @MX @android @ios
    @web
    @backend(test)
    @web-done
    @analytics
    Scenario: Onboarding visit parking enrollment - App Page Visit
        Given a user with the following criteria
            | criteria            |
            | multiple accounts   |
            | account in pesos    |
            | parking accounts    |
        And the user accesses to "parking meters" operative from top up operationals
        And the analytics interceptor service is initiated
        When the user goes to register a parking meter account
        Then the analytics events contains the following variables
            | item	                  | value	                                               | type         |  event         |
            | analytics               | analytics/glomo_base                                   | json schema  | App Page Visit |
            | version DL              | 20250414_5.0                                           | string       | App Page Visit |
            | page name               | app:privada:personas:parquimetros:registrar:1 detalles | string       | App Page Visit |
            | level 1                 | parquimetros                                           | string       | App Page Visit |
            | level 2                 | registrar                                              | string       | App Page Visit |
            | level 3                 | 1 detalles                                             | string       | App Page Visit |
            | language                | ES                                                     | string       | App Page Visit |
            | page area               | privada                                                | string       | App Page Visit |
            | page intent             | informacion                                            | string       | App Page Visit |
            | channel                 | online                                                 | string       | App Page Visit |
            | page instance ID        | de                                                     | string       | App Page Visit |
            | page info version       | appVersion                                             | regexp named | App Page Visit |
            | page segment            | personas                                               | string       | App Page Visit |
            | sysEnv                  | app                                                    | string       | App Page Visit |
            | business unit           | BBVA Mexico                                            | string       | App Page Visit |
            | site app name           | App BBVA Mexico                                        | string       | App Page Visit |
            | project name            | Glomo                                                  | string       | App Page Visit |
            | device mobile           | si                                                     | string       | App Page Visit |
            | user userState          | logado                                                 | string       | App Page Visit |
            | user segment global     | 003001                                                 | string       | App Page Visit |
            | profile ID              | profileID                                              | regexp named | App Page Visit |
            | user gender             | gender                                                 | regexp named | App Page Visit |
            | user age                | age                                                    | regexp named | App Page Visit |
            | global application      | parking activation                                     | string       | App Page Visit |
            | application name        | registro parquimetros                                  | string       | App Page Visit |
            | application type        | operativa                                              | string       | App Page Visit |
            | application step        | 1 detalles                                             | string       | App Page Visit |
            | fulfillment model       | online                                                 | string       | App Page Visit |
            | internal campaign       |                                                        | empty array  | App Page Visit |
            | optimization attributes |                                                        | empty array  | App Page Visit |
            | products attributes     |                                                        | empty array  | App Page Visit |

    @ANA_EVENT_PM010
    @vbank
    @MX @android @ios
    @web
    @backend(test)
    @web-done
    @analytics
    Scenario: The user interacts with the onboarding - App Started
        Given a user with the following criteria
            | criteria            |
            | multiple accounts   |
            | account in pesos    |
            | parking accounts    |
        And the user accesses to "parking meters" operative from top up operationals
        And the analytics interceptor service is initiated
        And the user goes to register a parking meter account
        When the user continues to the "account linking" step of the parking enrollment
        Then the analytics events contains the following variables
            | item	                  | value	                                               | type         |  event       |
            | analytics               | analytics/glomo_base                                   | json schema  |  App Started |
            | version DL              | 20250414_5.0                                           | string       |  App Started |
            | page name               | app:privada:personas:parquimetros:registrar:1 detalles | string       |  App Started |
            | level 1                 | parquimetros                                           | string       |  App Started |
            | level 2                 | registrar                                              | string       |  App Started |
            | level 3                 | 1 detalles                                             | string       |  App Started |
            | language                | ES                                                     | string       |  App Started |
            | page area               | privada                                                | string       |  App Started |
            | page intent             | informacion                                            | string       |  App Started |
            | channel                 | online                                                 | string       |  App Started |
            | page instance ID        | de                                                     | string       |  App Started |
            | page info version       | appVersion                                             | regexp named |  App Started |
            | page segment            | personas                                               | string       |  App Started |
            | sysEnv                  | app                                                    | string       |  App Started |
            | business unit           | BBVA Mexico                                            | string       |  App Started |
            | site app name           | App BBVA Mexico                                        | string       |  App Started |
            | project name            | Glomo                                                  | string       |  App Started |
            | device mobile           | si                                                     | string       |  App Started |
            | user userState          | logado                                                 | string       |  App Started |
            | user segment global     | 003001                                                 | string       |  App Started |
            | profile ID              | profileID                                              | regexp named |  App Started |
            | user gender             | gender                                                 | regexp named |  App Started |
            | user age                | age                                                    | regexp named |  App Started |
            | global application      | parking activation                                     | string       |  App Started |
            | application name        | registro parquimetros                                  | string       |  App Started |
            | application type        | operativa                                              | string       |  App Started |
            | application step        | continuar                                              | string       |  App Started |
            | fulfillment model       | online                                                 | string       |  App Started |
            | internal campaign       |                                                        | empty array  |  App Started |
            | optimization attributes |                                                        | empty array  |  App Started |
            | products attributes     |                                                        | empty array  |  App Started |

    @ANA_EVENT_PM011
    @vbank
    @MX @android @ios
    @web
    @backend(test)
    @web-done
    @analytics
    Scenario: The user links his parking meter account - App Step 2
        Given a user with the following criteria
            | criteria            |
            | multiple accounts   |
            | account in pesos    |
            | parking accounts    |
        And the user accesses to "parking meters" operative from top up operationals
        And the analytics interceptor service is initiated
        And the user goes to register a parking meter account
        When the user continues to the "account linking" step of the parking enrollment
        Then the analytics events contains the following variables
            | item	                  | value	                                                      | type         |  event     |
            | analytics               | analytics/glomo_base                                          | json schema  | App Step 2 |
            | version DL              | 20250414_5.0                                                  | string       | App Step 2 |
            | page name               | app:privada:personas:parquimetros:registrar:2 vincular cuenta | string       | App Step 2 |
            | level 1                 | parquimetros                                                  | string       | App Step 2 |
            | level 2                 | registrar                                                     | string       | App Step 2 |
            | level 3                 | 2 vincular cuenta                                             | string       | App Step 2 |
            | language                | ES                                                            | string       | App Step 2 |
            | page area               | privada                                                       | string       | App Step 2 |
            | page intent             | informacion                                                   | string       | App Step 2 |
            | channel                 | online                                                        | string       | App Step 2 |
            | page instance ID        | de                                                            | string       | App Step 2 |
            | page info version       | appVersion                                                    | regexp named | App Step 2 |
            | page segment            | personas                                                      | string       | App Step 2 |
            | sysEnv                  | app                                                           | string       | App Step 2 |
            | business unit           | BBVA Mexico                                                   | string       | App Step 2 |
            | site app name           | App BBVA Mexico                                               | string       | App Step 2 |
            | project name            | Glomo                                                         | string       | App Step 2 |
            | device mobile           | si                                                            | string       | App Step 2 |
            | user userState          | logado                                                        | string       | App Step 2 |
            | user segment global     | 003001                                                        | string       | App Step 2 |
            | profile ID              | profileID                                                     | regexp named | App Step 2 |
            | user gender             | gender                                                        | regexp named | App Step 2 |
            | user age                | age                                                           | regexp named | App Step 2 |
            | global application      | parking activation                                            | string       | App Step 2 |
            | application name        | registro parquimetros                                         | string       | App Step 2 |
            | application type        | operativa                                                     | string       | App Step 2 |
            | application step        | 2 vincular cuenta                                             | string       | App Step 2 |
            | fulfillment model       | online                                                        | string       | App Step 2 |
            | internal campaign       |                                                               | empty array  | App Step 2 |
            | optimization attributes |                                                               | empty array  | App Step 2 |
            | products attributes     |                                                               | empty array  | App Step 2 |

    @ANA_EVENT_PM012
    @vbank
    @MX @android @ios
    @web
    @backend(test)
    @web-done
    @analytics
    Scenario: The user is in the terms step of parking meters - App Step 3
        Given a user with the following criteria
            | criteria            |
            | multiple accounts   |
            | account in pesos    |
            | parking accounts    |
        And the user accesses to "parking meters" operative from top up operationals
        And the analytics interceptor service is initiated
        And the user goes to register a parking meter account
        When the user continues to the "terms" step of the parking enrollment
        Then the analytics events contains the following variables
            | item	                  | value	                                                             | type         |  event     |
            | analytics               | analytics/glomo_base                                                 | json schema  | App Step 3 |
            | version DL              | 20250414_5.0                                                         | string       | App Step 3 |
            | page name               | app:privada:personas:parquimetros:registrar:3 terminos y condiciones | string       | App Step 3 |
            | level 1                 | parquimetros                                                         | string       | App Step 3 |
            | level 2                 | registrar                                                            | string       | App Step 3 |
            | level 3                 | 3 terminos y condiciones                                             | string       | App Step 3 |
            | language                | ES                                                                   | string       | App Step 3 |
            | page area               | privada                                                              | string       | App Step 3 |
            | page intent             | informacion                                                          | string       | App Step 3 |
            | channel                 | online                                                               | string       | App Step 3 |
            | page instance ID        | de                                                                   | string       | App Step 3 |
            | page info version       | appVersion                                                           | regexp named | App Step 3 |
            | page segment            | personas                                                             | string       | App Step 3 |
            | sysEnv                  | app                                                                  | string       | App Step 3 |
            | business unit           | BBVA Mexico                                                          | string       | App Step 3 |
            | site app name           | App BBVA Mexico                                                      | string       | App Step 3 |
            | project name            | Glomo                                                                | string       | App Step 3 |
            | device mobile           | si                                                                   | string       | App Step 3 |
            | user userState          | logado                                                               | string       | App Step 3 |
            | user segment global     | 003001                                                               | string       | App Step 3 |
            | profile ID              | profileID                                                            | regexp named | App Step 3 |
            | user gender             | gender                                                               | regexp named | App Step 3 |
            | user age                | age                                                                  | regexp named | App Step 3 |
            | global application      | parking activation                                                   | string       | App Step 3 |
            | application name        | registro parquimetros                                                | string       | App Step 3 |
            | application type        | operativa                                                            | string       | App Step 3 |
            | application step        | 3 terminos y condiciones                                             | string       | App Step 3 |
            | fulfillment model       | online                                                               | string       | App Step 3 |
            | internal campaign       |                                                                      | empty array  | App Step 3 |
            | optimization attributes |                                                                      | empty array  | App Step 3 |
            | products attributes     |                                                                      | empty array  | App Step 3 |

    @ANA_EVENT_PM013
    @vbank
    @MX @android @ios
    @web
    @backend(test)
    @web-done
    @analytics
    Scenario: Parking meter log summary - App Step 4
        Given a user with the following criteria
            | criteria            |
            | multiple accounts   |
            | account in pesos    |
            | parking accounts    |
        And the user accesses to "parking meters" operative from top up operationals
        And the analytics interceptor service is initiated
        And the user goes to register a parking meter account
        When the user continues to the "summary" step of the parking enrollment
        Then the analytics events contains the following variables
            | item	                  | value	                                                             | type         |  event     |
            | analytics               | analytics/glomo_base                                                 | json schema  | App Step 4 |
            | version DL              | 20250414_5.0                                                         | string       | App Step 4 |
            | page name               | app:privada:personas:parquimetros:registrar:4 confirmacion           | string       | App Step 4 |
            | level 1                 | parquimetros                                                         | string       | App Step 4 |
            | level 2                 | registrar                                                            | string       | App Step 4 |
            | level 3                 | 4 confirmacion                                                       | string       | App Step 4 |
            | language                | ES                                                                   | string       | App Step 4 |
            | page area               | privada                                                              | string       | App Step 4 |
            | page intent             | informacion                                                          | string       | App Step 4 |
            | channel                 | online                                                               | string       | App Step 4 |
            | page instance ID        | de                                                                   | string       | App Step 4 |
            | page info version       | appVersion                                                           | regexp named | App Step 4 |
            | page segment            | personas                                                             | string       | App Step 4 |
            | sysEnv                  | app                                                                  | string       | App Step 4 |
            | business unit           | BBVA Mexico                                                          | string       | App Step 4 |
            | site app name           | App BBVA Mexico                                                      | string       | App Step 4 |
            | project name            | Glomo                                                                | string       | App Step 4 |
            | device mobile           | si                                                                   | string       | App Step 4 |
            | user userState          | logado                                                               | string       | App Step 4 |
            | user segment global     | 003001                                                               | string       | App Step 4 |
            | profile ID              | profileID                                                            | regexp named | App Step 4 |
            | user gender             | gender                                                               | regexp named | App Step 4 |
            | user age                | age                                                                  | regexp named | App Step 4 |
            | global application      | parking activation                                                   | string       | App Step 4 |
            | application name        | registro parquimetros                                                | string       | App Step 4 |
            | application type        | operativa                                                            | string       | App Step 4 |
            | application step        | 4 confirmacion                                                       | string       | App Step 4 |
            | fulfillment model       | online                                                               | string       | App Step 4 |
            | internal campaign       |                                                                      | empty array  | App Step 4 |
            | optimization attributes |                                                                      | empty array  | App Step 4 |
            | products attributes     |                                                                      | empty array  | App Step 4 |

    @ANA_EVENT_PM014
    @vbank
    @MX @android @ios
    @web
    @backend(test)
    @web-done
    @analytics
    Scenario: Parking meter registration otp - App Step 5
        Given a user with the following criteria
            | criteria            |
            | multiple accounts   |
            | account in pesos    |
            | parking accounts    |
        And the user accesses to "parking meters" operative from top up operationals
        And the analytics interceptor service is initiated
        And the user goes to register a parking meter account
        And the user continues to the "summary" step of the parking enrollment
        When the user completes the parking "enrollment"
        Then the analytics events contains the following variables
            | item	                  | value	                                                             | type         |  event     |
            | analytics               | analytics/glomo_base                                                 | json schema  | App Step 5 |
            | version DL              | 20250414_5.0                                                         | string       | App Step 5 |
            | page name               | app:privada:personas:parquimetros:registrar:5 otp                    | string       | App Step 5 |
            | level 1                 | parquimetros                                                         | string       | App Step 5 |
            | level 2                 | registrar                                                            | string       | App Step 5 |
            | level 3                 | 5 otp                                                                | string       | App Step 5 |
            | language                | ES                                                                   | string       | App Step 5 |
            | page area               | privada                                                              | string       | App Step 5 |
            | page intent             | informacion                                                          | string       | App Step 5 |
            | channel                 | online                                                               | string       | App Step 5 |
            | page instance ID        | de                                                                   | string       | App Step 5 |
            | page info version       | appVersion                                                           | regexp named | App Step 5 |
            | page segment            | personas                                                             | string       | App Step 5 |
            | sysEnv                  | app                                                                  | string       | App Step 5 |
            | business unit           | BBVA Mexico                                                          | string       | App Step 5 |
            | site app name           | App BBVA Mexico                                                      | string       | App Step 5 |
            | project name            | Glomo                                                                | string       | App Step 5 |
            | device mobile           | si                                                                   | string       | App Step 5 |
            | user userState          | logado                                                               | string       | App Step 5 |
            | user segment global     | 003001                                                               | string       | App Step 5 |
            | profile ID              | profileID                                                            | regexp named | App Step 5 |
            | user gender             | gender                                                               | regexp named | App Step 5 |
            | user age                | age                                                                  | regexp named | App Step 5 |
            | global application      | parking activation                                                   | string       | App Step 5 |
            | application name        | registro parquimetros                                                | string       | App Step 5 |
            | application type        | operativa                                                            | string       | App Step 5 |
            | application step        | 5 otp                                                                | string       | App Step 5 |
            | fulfillment model       | online                                                               | string       | App Step 5 |
            | internal campaign       |                                                                      | empty array  | App Step 5 |
            | optimization attributes |                                                                      | empty array  | App Step 5 |
            | products attributes     |                                                                      | empty array  | App Step 5 |

    @ANA_EVENT_PM015
    @vbank
    @MX @android @ios
    @web
    @backend(test)
    @web-done
    @analytics
    Scenario: The user completes parking meter account registration - App Completed
        Given a user with the following criteria
            | criteria            |
            | multiple accounts   |
            | account in pesos    |
            | parking accounts    |
        And the user accesses to "parking meters" operative from top up operationals
        And the analytics interceptor service is initiated
        And the user goes to register a parking meter account
        And the user continues to the "summary" step of the parking enrollment
        When the user completes the parking "enrollment"
        Then the analytics events contains the following variables
            | item	                       | value	                                                    | type         |  event        |
            | analytics                    | analytics/glomo_base                                       | json schema  | App Completed |
            | version DL                   | 20250414_5.0                                               | string       | App Completed |
            | page name                    | app:privada:personas:parquimetros:registrar:pagina exitosa | string       | App Completed |
            | level 1                      | parquimetros                                               | string       | App Completed |
            | level 2                      | registrar                                                  | string       | App Completed |
            | level 3                      | pagina exitosa                                             | string       | App Completed |
            | language                     | ES                                                         | string       | App Completed |
            | page area                    | privada                                                    | string       | App Completed |
            | page intent                  | informacion                                                | string       | App Completed |
            | channel                      | online                                                     | string       | App Completed |
            | page instance ID             | de                                                         | string       | App Completed |
            | page info version            | appVersion                                                 | regexp named | App Completed |
            | page segment                 | personas                                                   | string       | App Completed |
            | sysEnv                       | app                                                        | string       | App Completed |
            | business unit                | BBVA Mexico                                                | string       | App Completed |
            | site app name                | App BBVA Mexico                                            | string       | App Completed |
            | project name                 | Glomo                                                      | string       | App Completed |
            | device mobile                | si                                                         | string       | App Completed |
            | user userState               | logado                                                     | string       | App Completed |
            | user segment global          | 003001                                                     | string       | App Completed |
            | profile ID                   | profileID                                                  | regexp named | App Completed |
            | user gender                  | gender                                                     | regexp named | App Completed |
            | user age                     | age                                                        | regexp named | App Completed |
            | global application           | parking activation                                         | string       | App Completed |
            | application name             | registro parquimetros                                      | string       | App Completed |
            | application type             | operativa                                                  | string       | App Completed |
            | application step             | pagina exitosa                                             | string       | App Completed |
            | fulfillment model            | online                                                     | string       | App Completed |
            | application state            | finalizado                                                 | string       | App Completed |
            | internal campaign            |                                                            | empty array  | App Completed |
            | optimization attributes      |                                                            | empty array  | App Completed |
            | products attributes          |                                                            | empty array  | App Completed |

    @ANA_PM016
    @vbank
    @MX @android @ios
    @web
    @backend(test)
    @web-done
    @analytics
    Scenario: Parking List - Page view
        Given a user with the following criteria
            | criteria            |
            | multiple accounts   |
            | account in pesos    |
            | parking accounts    |
        When the user accesses to "parking meters" operative from top up operationals
        Then the device contains the following variables
            | item	                  | value	                                              | type             |
            | analytics               | analytics/glomo_base                                  | json schema      |
            | version DL              | 20250414_5.0                                          | string           |
            | page name               | app:privada:personas:parquimetros:cuentas registradas | string           |
            | level 1                 | parquimetros                                          | string           |
            | level 2                 | cuentas registradas                                   | string           |
            | language                | ES                                                    | string           |
            | page area               | privada                                               | string           |
            | page intent             | informacion                                           | string           |
            | channel                 | online                                                | string           |
            | page instance ID        | de                                                    | string           |
            | page info version       | appVersion                                            | regexp named     |
            | page segment            | personas                                              | string           |
            | sysEnv                  | app                                                   | string           |
            | business unit           | BBVA Mexico                                           | string           |
            | site app name           | App BBVA Mexico                                       | string           |
            | project name            | Glomo                                                 | string           |
            | device mobile           | si                                                    | string           |
            | user userState          | logado                                                | string           |
            | user segment global     | 003001                                                | string           |
            | profile ID              | profileID                                             | regexp named     |
            | user gender             | gender                                                | regexp named     |
            | user age                | age                                                   | regexp named     |
            | internal campaign       |                                                       | empty array      |
            | optimization attributes |                                                       | empty array      |
            | application             |                                                       | empty str object |
            | products attributes     |                                                       | empty array      |

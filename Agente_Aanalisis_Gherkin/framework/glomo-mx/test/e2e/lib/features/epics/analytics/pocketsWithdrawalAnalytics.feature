@pocketsWithdrawalAnalytics @savings
Feature: Analytics - Savings Withdrawal

    @ANA_EVENT_POW001
    @analytics
    @MX @vbank @web-done @test
    @web @ios @android
    Scenario: User wants to withdraw money from a pocket
        Given a user with the following criteria
            | criteria             |
            | account with payroll |
        And the user accesses to pockets screen
        And the user accesses to "new pocket" pocket
        And the analytics interceptor service is initiated
        When the user access the pocket "withdrawal" operative
        Then the analytics events contains the following variables
            | item                     | value                                          | type         | event              |
            | analytics                | analytics/glomo_base                           | json schema  | App On Click Start |
            | version DL               | 20250414_5.0                                   | string       | App On Click Start |
            | page name                | app:privada:personas:cuentas:detalle:apartados | string       | App On Click Start |
            | level 1                  | cuentas                                        | string       | App On Click Start |
            | level 2                  | detalle                                        | string       | App On Click Start |
            | level 3                  | apartados                                      | string       | App On Click Start |
            | language                 | ES                                             | string       | App On Click Start |
            | page area                | privada                                        | string       | App On Click Start |
            | page intent              | informacion                                    | string       | App On Click Start |
            | channel                  | online                                         | string       | App On Click Start |
            | page instance ID         | de                                             | string       | App On Click Start |
            | page info version        | appVersion                                     | regexp named | App On Click Start |
            | page segment             | personas                                       | string       | App On Click Start |
            | sysEnv                   | app                                            | string       | App On Click Start |
            | business unit            | BBVA Mexico                                    | string       | App On Click Start |
            | site app name            | App BBVA Mexico                                | string       | App On Click Start |
            | project name             | Glomo                                          | string       | App On Click Start |
            | device mobile            | si                                             | string       | App On Click Start |
            | user userState           | logado                                         | string       | App On Click Start |
            | user segment global      | 003001                                         | string       | App On Click Start |
            | profile ID               | profileID                                      | regexp named | App On Click Start |
            | user gender              | gender                                         | regexp named | App On Click Start |
            | user age                 | age                                            | regexp named | App On Click Start |
            | global application       | pockets withdrawal                             | string       | App On Click Start |
            | application name         | retirar apartado                               | string       | App On Click Start |
            | application type         | operativa                                      | string       | App On Click Start |
            | application step         | retirar dinero                                 | string       | App On Click Start |
            | fulfillment model        | online                                         | string       | App On Click Start |
            | product primary category | cuentas                                        | string       | App On Click Start |
            | internal campaign        |                                                | empty array  | App On Click Start |
            | optimization attributes  |                                                | empty array  | App On Click Start |

    @ANA_EVENT_POW002
    @analytics
    @MX @vbank @web-done @test
    @web @ios @android
    Scenario: User enters the process to withdraw money from pocket
        Given a user with the following criteria
            | criteria             |
            | account with payroll |
        And the user accesses to pockets screen
        And the user accesses to "new pocket" pocket
        And the analytics interceptor service is initiated
        When the user access the pocket "withdrawal" operative
        Then the analytics events contains the following variables
            | item                     | value                                                         | type         | event          |
            | analytics                | analytics/glomo_base                                          | json schema  | App Page Visit |
            | version DL               | 20250414_5.0                                                  | string       | App Page Visit |
            | page name                | app:privada:personas:cuentas:retirar apartado:1 monto         | string       | App Page Visit |
            | level 1                  | cuentas                                                       | string       | App Page Visit |
            | level 2                  | retirar apartado                                              | string       | App Page Visit |
            | level 3                  | 1 monto                                                       | string       | App Page Visit |
            | language                 | ES                                                            | string       | App Page Visit |
            | page area                | privada                                                       | string       | App Page Visit |
            | page intent              | informacion                                                   | string       | App Page Visit |
            | channel                  | online                                                        | string       | App Page Visit |
            | page instance ID         | de                                                            | string       | App Page Visit |
            | page info version        | appVersion                                                    | regexp named | App Page Visit |
            | page segment             | personas                                                      | string       | App Page Visit |
            | sysEnv                   | app                                                           | string       | App Page Visit |
            | business unit            | BBVA Mexico                                                   | string       | App Page Visit |
            | site app name            | App BBVA Mexico                                               | string       | App Page Visit |
            | project name             | Glomo                                                         | string       | App Page Visit |
            | device mobile            | si                                                            | string       | App Page Visit |
            | user userState           | logado                                                        | string       | App Page Visit |
            | user segment global      | 003001                                                        | string       | App Page Visit |
            | profile ID               | profileID                                                     | regexp named | App Page Visit |
            | user gender              | gender                                                        | regexp named | App Page Visit |
            | user age                 | age                                                           | regexp named | App Page Visit |
            | global application       | pockets withdrawal                                            | string       | App Page Visit |
            | application name         | retirar apartado                                              | string       | App Page Visit |
            | application type         | operativa                                                     | string       | App Page Visit |
            | application step         | 1 monto                                                       | string       | App Page Visit |
            | fulfillment model        | online                                                        | string       | App Page Visit |
            | product primary category | cuentas                                                       | string       | App Page Visit |
            | internal campaign        |                                                               | empty array  | App Page Visit |
            | optimization attributes  |                                                               | empty array  | App Page Visit |

    @ANA_EVENT_POW003
    @analytics
    @MX @vbank @web-done @test
    @web @ios @android
    Scenario: User enters amount for pocket withdrawal
        Given a user with the following criteria
            | criteria             |
            | account with payroll |
        And the user accesses to pockets screen
        And the user accesses to "new pocket" pocket
        And the user access the pocket "withdrawal" operative
        And the analytics interceptor service is initiated
        When the user enters "2000" to withdraw from pocket
        Then the analytics events contains the following variables
            | item                     | value                                                         | type         | event       |
            | analytics                | analytics/glomo_base                                          | json schema  | App Started |
            | version DL               | 20250414_5.0                                                  | string       | App Started |
            | page name                | app:privada:personas:cuentas:retirar apartado:1 monto         | string       | App Started |
            | level 1                  | cuentas                                                       | string       | App Started |
            | level 2                  | retirar apartado                                              | string       | App Started |
            | level 3                  | 1 monto                                                       | string       | App Started |
            | language                 | ES                                                            | string       | App Started |
            | page area                | privada                                                       | string       | App Started |
            | page intent              | informacion                                                   | string       | App Started |
            | channel                  | online                                                        | string       | App Started |
            | page instance ID         | de                                                            | string       | App Started |
            | page info version        | appVersion                                                    | regexp named | App Started |
            | page segment             | personas                                                      | string       | App Started |
            | sysEnv                   | app                                                           | string       | App Started |
            | business unit            | BBVA Mexico                                                   | string       | App Started |
            | site app name            | App BBVA Mexico                                               | string       | App Started |
            | project name             | Glomo                                                         | string       | App Started |
            | device mobile            | si                                                            | string       | App Started |
            | user userState           | logado                                                        | string       | App Started |
            | user segment global      | 003001                                                        | string       | App Started |
            | profile ID               | profileID                                                     | regexp named | App Started |
            | user gender              | gender                                                        | regexp named | App Started |
            | user age                 | age                                                           | regexp named | App Started |
            | global application       | pockets withdrawal                                            | string       | App Started |
            | application name         | retirar apartado                                              | string       | App Started |
            | application type         | operativa                                                     | string       | App Started |
            | application step         | importe                                                       | string       | App Started |
            | fulfillment model        | online                                                        | string       | App Started |
            | product primary category | cuentas                                                       | string       | App Started |
            | internal campaign        |                                                               | empty array  | App Started |
            | optimization attributes  |                                                               | empty array  | App Started |

    @ANA_EVENT_POW004
    @analytics
    @MX @vbank @web-done @test
    @web @ios @android
    Scenario: User see the summary of the operation
        Given a user with the following criteria
            | criteria             |
            | account with payroll |
        And the user accesses to pockets screen
        And the user accesses to "new pocket" pocket
        And the user access the pocket "withdrawal" operative
        And the user enters "2000" to withdraw from pocket
        And the analytics interceptor service is initiated
        When the user continues after enter withdraw amount
        Then the analytics events contains the following variables
            | item                     | value                                                                | type         | event      |
            | analytics                | analytics/glomo_base                                                 | json schema  | App Step 2 |
            | version DL               | 20250414_5.0                                                         | string       | App Step 2 |
            | page name                | app:privada:personas:cuentas:retirar apartado:2 confirmacion         | string       | App Step 2 |
            | level 1                  | cuentas                                                              | string       | App Step 2 |
            | level 2                  | retirar apartado                                                     | string       | App Step 2 |
            | level 3                  | 2 confirmacion                                                       | string       | App Step 2 |
            | language                 | ES                                                                   | string       | App Step 2 |
            | page area                | privada                                                              | string       | App Step 2 |
            | page intent              | informacion                                                          | string       | App Step 2 |
            | channel                  | online                                                               | string       | App Step 2 |
            | page instance ID         | de                                                                   | string       | App Step 2 |
            | page info version        | appVersion                                                           | regexp named | App Step 2 |
            | page segment             | personas                                                             | string       | App Step 2 |
            | sysEnv                   | app                                                                  | string       | App Step 2 |
            | business unit            | BBVA Mexico                                                          | string       | App Step 2 |
            | site app name            | App BBVA Mexico                                                      | string       | App Step 2 |
            | project name             | Glomo                                                                | string       | App Step 2 |
            | device mobile            | si                                                                   | string       | App Step 2 |
            | user userState           | logado                                                               | string       | App Step 2 |
            | user segment global      | 003001                                                               | string       | App Step 2 |
            | profile ID               | profileID                                                            | regexp named | App Step 2 |
            | user gender              | gender                                                               | regexp named | App Step 2 |
            | user age                 | age                                                                  | regexp named | App Step 2 |
            | global application       | pockets withdrawal                                                   | string       | App Step 2 |
            | application name         | retirar apartado                                                     | string       | App Step 2 |
            | application type         | operativa                                                            | string       | App Step 2 |
            | application step         | 2 confirmacion                                                       | string       | App Step 2 |
            | fulfillment model        | online                                                               | string       | App Step 2 |
            | product primary category | cuentas                                                              | string       | App Step 2 |
            | product amount           | 2000                                                                 | number       | App Step 2 |
            | internal campaign        |                                                                      | empty array  | App Step 2 |
            | optimization attributes  |                                                                      | empty array  | App Step 2 |

    @ANA_EVENT_POW005
    @analytics
    @MX @vbank @web-done @test
    @web @ios @android
    Scenario: User finishes process of pocket withdrawal
        Given a user with the following criteria
            | criteria             |
            | account with payroll |
        And the user accesses to pockets screen
        And the user accesses to "new pocket" pocket
        And the user access the pocket "withdrawal" operative
        And the user enters "2000" to withdraw from pocket
        And the user continues after enter withdraw amount
        And the analytics interceptor service is initiated
        When the user confirm the process
        Then the analytics events contains the following variables
            | item                     | value                                                                | type         | event         |
            | analytics                | analytics/glomo_base                                                 | json schema  | App Completed |
            | version DL               | 20250414_5.0                                                         | string       | App Completed |
            | page name                | app:privada:personas:cuentas:retirar apartado:pagina exitosa         | string       | App Completed |
            | level 1                  | cuentas                                                              | string       | App Completed |
            | level 2                  | retirar apartado                                                     | string       | App Completed |
            | level 3                  | pagina exitosa                                                       | string       | App Completed |
            | language                 | ES                                                                   | string       | App Completed |
            | page area                | privada                                                              | string       | App Completed |
            | page intent              | informacion                                                          | string       | App Completed |
            | channel                  | online                                                               | string       | App Completed |
            | page instance ID         | de                                                                   | string       | App Completed |
            | page info version        | appVersion                                                           | regexp named | App Completed |
            | page segment             | personas                                                             | string       | App Completed |
            | sysEnv                   | app                                                                  | string       | App Completed |
            | business unit            | BBVA Mexico                                                          | string       | App Completed |
            | site app name            | App BBVA Mexico                                                      | string       | App Completed |
            | project name             | Glomo                                                                | string       | App Completed |
            | device mobile            | si                                                                   | string       | App Completed |
            | user userState           | logado                                                               | string       | App Completed |
            | user segment global      | 003001                                                               | string       | App Completed |
            | profile ID               | profileID                                                            | regexp named | App Completed |
            | user gender              | gender                                                               | regexp named | App Completed |
            | user age                 | age                                                                  | regexp named | App Completed |
            | global application       | pockets withdrawal                                                   | string       | App Completed |
            | application name         | retirar apartado                                                     | string       | App Completed |
            | application type         | operativa                                                            | string       | App Completed |
            | application step         | pagina exitosa                                                       | string       | App Completed |
            | application state        | finalizado                                                           | string       | App Completed |
            | fulfillment model        | online                                                               | string       | App Completed |
            | product primary category | cuentas                                                              | string       | App Completed |
            | product amount           | 2000                                                                 | number       | App Completed |
            | internal campaign        |                                                                      | empty array  | App Completed |
            | optimization attributes  |                                                                      | empty array  | App Completed |

    @ANA_EVENT_POW006
    @analytics
    @MX @vbank @web-done @test
    @web @ios @android
    @vbank-modified
    # Modified service /pockets/v1/pockets/{pocket-id}/withdrawals response with status 500
    Scenario: User finishes process of pocket withdrawal but encounter a service error
        Given a user with the following criteria
            | criteria             |
            | account with payroll |
        And the user accesses to pockets screen
        And the user accesses to "new pocket" pocket
        And the user access the pocket "withdrawal" operative
        And the user enters "2000" to withdraw from pocket
        And the user continues after enter withdraw amount
        And the analytics interceptor service is initiated
        When the user confirms the pocket withdrawal
        Then the analytics events contains the following variables
            | item                    | value                                                              | type             | event     |
            | analytics               | analytics/glomo_base                                               | json schema      | Page View |
            | page name               | app:privada:personas:cuentas:retirar apartado:error de servicio    | string           | Page View |
            | level 1                 | cuentas                                                            | string           | Page View |
            | level 2                 | retirar apartado                                                   | string           | Page View |
            | level 3                 | error de servicio                                                  | string           | Page View |
            | error page              | error de servicio                                                  | string           | Page View |
            | language                | ES                                                                 | string           | Page View |
            | page area               | privada                                                            | string           | Page View |
            | page intent             | transaccion                                                        | string           | Page View |
            | channel                 | online                                                             | string           | Page View |
            | page instance ID        | de                                                                 | string           | Page View |
            | version DL              | 20250414_5.0                                                       | string           | Page View |
            | page info version       | appVersion                                                         | regexp named     | Page View |
            | page segment            | personas                                                           | string           | Page View |
            | sysEnv                  | app                                                                | string           | Page View |
            | business unit           | BBVA Mexico                                                        | string           | Page View |
            | site app name           | App BBVA Mexico                                                    | string           | Page View |
            | project name            | Glomo                                                              | string           | Page View |
            | device mobile           | si                                                                 | string           | Page View |
            | user userState          | logado                                                             | string           | Page View |
            | profile ID              | profileID                                                          | regexp named     | Page View |
            | user segment global     | 003001                                                             | string           | Page View |
            | internal campaign       |                                                                    | empty array      | Page View |
            | optimization attributes |                                                                    | empty array      | Page View |
            | application             |                                                                    | empty str object | Page View |
            | products attributes     |                                                                    | empty array      | Page View |

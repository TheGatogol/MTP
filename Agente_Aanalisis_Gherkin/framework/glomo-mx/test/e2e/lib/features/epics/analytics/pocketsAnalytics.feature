@pocketsAnalytics @savings
Feature: Analytics - Savings

    @ANA_EVENT_POC001
    @analytics
    @MX @vbank @web-done @test
    @web @ios @android
    Scenario: User wants to see the full list of pockets
        Given a user with the following criteria
            | criteria             |
            | account with payroll |
        And the user accesses to product detail
        And the analytics interceptor service is initiated
        When the user accesses to pockets list
        Then the analytics events contains the following variables
            | item                    | value                                          | type             | event     |
            | analytics               | analytics/glomo_base                           | json schema      | Page View |
            | version DL              | 20250414_5.0                                   | string           | Page View |
            | page name               | app:privada:personas:cuentas:detalle:apartados | string           | Page View |
            | level 1                 | cuentas                                        | string           | Page View |
            | level 2                 | detalle                                        | string           | Page View |
            | level 3                 | apartados                                      | string           | Page View |
            | language                | ES                                             | string           | Page View |
            | page area               | privada                                        | string           | Page View |
            | page intent             | informacion                                    | string           | Page View |
            | channel                 | online                                         | string           | Page View |
            | page instance ID        | de                                             | string           | Page View |
            | page info version       | appVersion                                     | regexp named     | Page View |
            | page segment            | personas                                       | string           | Page View |
            | sysEnv                  | app                                            | string           | Page View |
            | business unit           | BBVA Mexico                                    | string           | Page View |
            | site app name           | App BBVA Mexico                                | string           | Page View |
            | project name            | Glomo                                          | string           | Page View |
            | device mobile           | si                                             | string           | Page View |
            | user userState          | logado                                         | string           | Page View |
            | user segment global     | 003001                                         | string           | Page View |
            | profile ID              | profileID                                      | regexp named     | Page View |
            | internal campaign       |                                                | empty array      | Page View |
            | optimization attributes |                                                | empty array      | Page View |
            | application             |                                                | empty str object | Page View |
            | products attributes     |                                                | empty array      | Page View |

    @ANA_EVENT_POC002
    @analytics
    @MX @vbank @web-done @test
    @web @ios @android
    Scenario: User with no pockets see the welcome modal for pockets
        Given a user with the following criteria
            | criteria                |
            | account without pockets |
        And the user accesses to product detail
        And the analytics interceptor service is initiated
        When the user accesses to pockets list
        Then the analytics events contains the following variables
            | item                    | value                                                           | type             | event     | event number |
            | analytics               | analytics/glomo_base                                            | json schema      | Page View | 1            |
            | version DL              | 20250414_5.0                                                    | string           | Page View | 1            |
            | page name               | app:privada:personas:cuentas:detalle:crear apartado:informacion | string           | Page View | 1            |
            | level 1                 | cuentas                                                         | string           | Page View | 1            |
            | level 2                 | detalle                                                         | string           | Page View | 1            |
            | level 3                 | crear apartado                                                  | string           | Page View | 1            |
            | level 4                 | informacion                                                     | string           | Page View | 1            |
            | language                | ES                                                              | string           | Page View | 1            |
            | page area               | privada                                                         | string           | Page View | 1            |
            | page intent             | informacion                                                     | string           | Page View | 1            |
            | channel                 | online                                                          | string           | Page View | 1            |
            | page instance ID        | de                                                              | string           | Page View | 1            |
            | page info version       | appVersion                                                      | regexp named     | Page View | 1            |
            | page segment            | personas                                                        | string           | Page View | 1            |
            | sysEnv                  | app                                                             | string           | Page View | 1            |
            | business unit           | BBVA Mexico                                                     | string           | Page View | 1            |
            | site app name           | App BBVA Mexico                                                 | string           | Page View | 1            |
            | project name            | Glomo                                                           | string           | Page View | 1            |
            | device mobile           | si                                                              | string           | Page View | 1            |
            | user userState          | logado                                                          | string           | Page View | 1            |
            | user segment global     | 003001                                                          | string           | Page View | 1            |
            | profile ID              | profileID                                                       | regexp named     | Page View | 1            |
            | internal campaign       |                                                                 | empty array      | Page View | 1            |
            | optimization attributes |                                                                 | empty array      | Page View | 1            |
            | application             |                                                                 | empty str object | Page View | 1            |
            | products attributes     |                                                                 | empty array      | Page View | 1            |

    @ANA_EVENT_POC003
    @analytics
    @MX @vbank @web-done @test
    @web @ios @android
    Scenario: The users wants to see the scheduled amount help modal
        Given a user with the following criteria
            | criteria             |
            | account with payroll |
        And the user accesses to product detail
        And the user accesses to pockets list
        And the user accesses to create pocket
        And the user type the pocket name
        And the analytics interceptor service is initiated
        When the user wants to know info about scheduled pocket amount
        Then the analytics events contains the following variables
            | item                    | value                                                                             | type             | event     |
            | analytics               | analytics/glomo_base                                                              | json schema      | Page View |
            | version DL              | 20250414_5.0                                                                      | string           | Page View |
            | page name               | app:privada:personas:cuentas:detalle:crear apartado:1 detalle:apartado programado | string           | Page View |
            | level 1                 | cuentas                                                                           | string           | Page View |
            | level 2                 | detalle                                                                           | string           | Page View |
            | level 3                 | crear apartado                                                                    | string           | Page View |
            | level 4                 | 1 detalle                                                                         | string           | Page View |
            | level 5                 | apartado programado                                                               | string           | Page View |
            | language                | ES                                                                                | string           | Page View |
            | page area               | privada                                                                           | string           | Page View |
            | page intent             | informacion                                                                       | string           | Page View |
            | channel                 | online                                                                            | string           | Page View |
            | page instance ID        | de                                                                                | string           | Page View |
            | page info version       | appVersion                                                                        | regexp named     | Page View |
            | page segment            | personas                                                                          | string           | Page View |
            | sysEnv                  | app                                                                               | string           | Page View |
            | business unit           | BBVA Mexico                                                                       | string           | Page View |
            | site app name           | App BBVA Mexico                                                                   | string           | Page View |
            | project name            | Glomo                                                                             | string           | Page View |
            | device mobile           | si                                                                                | string           | Page View |
            | user userState          | logado                                                                            | string           | Page View |
            | user segment global     | 003001                                                                            | string           | Page View |
            | profile ID              | profileID                                                                         | regexp named     | Page View |
            | internal campaign       |                                                                                   | empty array      | Page View |
            | optimization attributes |                                                                                   | empty array      | Page View |
            | application             |                                                                                   | empty str object | Page View |
            | products attributes     |                                                                                   | empty array      | Page View |

    @ANA_EVENT_POC004
    @analytics
    @MX @vbank @web-done @test
    @web @ios @android
    Scenario: A user with existing pockets wants create a new pocket
        Given a user with the following criteria
            | criteria             |
            | account with payroll |
        And the user accesses to product detail
        And the user accesses to pockets list
        And the analytics interceptor service is initiated
        When the user accesses to create pocket
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
            | global application       | pockets                                        | string       | App On Click Start |
            | application name         | crear apartado                                 | string       | App On Click Start |
            | application type         | operativa                                      | string       | App On Click Start |
            | application step         | nuevo apartado                                 | string       | App On Click Start |
            | fulfillment model        | online                                         | string       | App On Click Start |
            | product primary category | cuentas                                        | string       | App On Click Start |
            | internal campaign        |                                                | empty array  | App On Click Start |
            | optimization attributes  |                                                | empty array  | App On Click Start |

    @ANA_EVENT_POC005
    @analytics
    @MX @vbank @web-done @test
    @web @ios @android
    Scenario: A user without pockets wants create a new pocket
        Given a user with the following criteria
            | criteria                |
            | account without pockets |
        And the user accesses to product detail
        And the analytics interceptor service is initiated
        When the user accesses to pockets list
        Then the analytics events contains the following variables
            | item                     | value                                          | type         | event              |
            | analytics                | analytics/glomo_base                           | json schema  | App On Click Start |
            | version DL               | 20250414_5.0                                   | string       | App On Click Start |
            | page name                | app:privada:personas:cuentas:detalle           | string       | App On Click Start |
            | level 1                  | cuentas                                        | string       | App On Click Start |
            | level 2                  | detalle                                        | string       | App On Click Start |
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
            | global application       | pockets                                        | string       | App On Click Start |
            | application name         | crear apartado                                 | string       | App On Click Start |
            | application type         | operativa                                      | string       | App On Click Start |
            | application step         | crear apartado                                 | string       | App On Click Start |
            | fulfillment model        | online                                         | string       | App On Click Start |
            | product primary category | cuentas                                        | string       | App On Click Start |
            | internal campaign        |                                                | empty array  | App On Click Start |
            | optimization attributes  |                                                | empty array  | App On Click Start |

    @ANA_EVENT_POC006
    @analytics
    @MX @vbank @web-done @test
    @web @ios @android
    Scenario: A user with existing pockets starts to create a new pocket
        Given a user with the following criteria
            | criteria             |
            | account with payroll |
        And the user accesses to product detail
        And the user accesses to pockets list
        And the analytics interceptor service is initiated
        When the user accesses to create pocket
        Then the analytics events contains the following variables
            | item                                                  | value                                                         | type         | event          |
            | analytics                                             | analytics/glomo_base                                          | json schema  | App Page Visit |
            | version DL                                            | 20250414_5.0                                                  | string       | App Page Visit |
            | page name                                             | app:privada:personas:cuentas:detalle:crear apartado:1 detalle | string       | App Page Visit |
            | level 1                                               | cuentas                                                       | string       | App Page Visit |
            | level 2                                               | detalle                                                       | string       | App Page Visit |
            | level 3                                               | crear apartado                                                | string       | App Page Visit |
            | level 4                                               | 1 detalle                                                     | string       | App Page Visit |
            | language                                              | ES                                                            | string       | App Page Visit |
            | page area                                             | privada                                                       | string       | App Page Visit |
            | page intent                                           | informacion                                                   | string       | App Page Visit |
            | channel                                               | online                                                        | string       | App Page Visit |
            | page instance ID                                      | de                                                            | string       | App Page Visit |
            | page info version                                     | appVersion                                                    | regexp named | App Page Visit |
            | page segment                                          | personas                                                      | string       | App Page Visit |
            | sysEnv                                                | app                                                           | string       | App Page Visit |
            | business unit                                         | BBVA Mexico                                                   | string       | App Page Visit |
            | site app name                                         | App BBVA Mexico                                               | string       | App Page Visit |
            | project name                                          | Glomo                                                         | string       | App Page Visit |
            | device mobile                                         | si                                                            | string       | App Page Visit |
            | user userState                                        | logado                                                        | string       | App Page Visit |
            | user segment global                                   | 003001                                                        | string       | App Page Visit |
            | profile ID                                            | profileID                                                     | regexp named | App Page Visit |
            | user gender                                           | gender                                                        | regexp named | App Page Visit |
            | user age                                              | age                                                           | regexp named | App Page Visit |
            | global application                                    | pockets                                                       | string       | App Page Visit |
            | application name                                      | crear apartado                                                | string       | App Page Visit |
            | application type                                      | operativa                                                     | string       | App Page Visit |
            | application step                                      | 1 detalle                                                     | string       | App Page Visit |
            | fulfillment model                                     | online                                                        | string       | App Page Visit |
            | product primary category                              | cuentas                                                       | string       | App Page Visit |
            | product primary name                                  | tarjeta nomina basic                                          | string       | App Page Visit |
            | internal campaign                                     |                                                               | empty array  | App Page Visit |
            | optimization attributes                               |                                                               | empty array  | App Page Visit |

    @ANA_EVENT_POC007
    @analytics
    @MX @vbank @web-done @test
    @web @ios @android
    Scenario: A user starts the process to create a pocket
        Given a user with the following criteria
            | criteria             |
            | account with payroll |
        And the user accesses to product detail
        And the user accesses to pockets list
        And the user accesses to create pocket
        And the analytics interceptor service is initiated
        When the user type the pocket name
        Then the analytics events contains the following variables
            | item                                                  | value                                                         | type         | event       |
            | analytics                                             | analytics/glomo_base                                          | json schema  | App Started |
            | version DL                                            | 20250414_5.0                                                  | string       | App Started |
            | page name                                             | app:privada:personas:cuentas:detalle:crear apartado:1 detalle | string       | App Started |
            | level 1                                               | cuentas                                                       | string       | App Started |
            | level 2                                               | detalle                                                       | string       | App Started |
            | level 3                                               | crear apartado                                                | string       | App Started |
            | level 4                                               | 1 detalle                                                     | string       | App Started |
            | language                                              | ES                                                            | string       | App Started |
            | page area                                             | privada                                                       | string       | App Started |
            | page intent                                           | informacion                                                   | string       | App Started |
            | channel                                               | online                                                        | string       | App Started |
            | page instance ID                                      | de                                                            | string       | App Started |
            | page info version                                     | appVersion                                                    | regexp named | App Started |
            | page segment                                          | personas                                                      | string       | App Started |
            | sysEnv                                                | app                                                           | string       | App Started |
            | business unit                                         | BBVA Mexico                                                   | string       | App Started |
            | site app name                                         | App BBVA Mexico                                               | string       | App Started |
            | project name                                          | Glomo                                                         | string       | App Started |
            | device mobile                                         | si                                                            | string       | App Started |
            | user userState                                        | logado                                                        | string       | App Started |
            | user segment global                                   | 003001                                                        | string       | App Started |
            | profile ID                                            | profileID                                                     | regexp named | App Started |
            | user gender                                           | gender                                                        | regexp named | App Started |
            | user age                                              | age                                                           | regexp named | App Started |
            | global application                                    | pockets                                                       | string       | App Started |
            | application name                                      | crear apartado                                                | string       | App Started |
            | application type                                      | operativa                                                     | string       | App Started |
            | application step                                      | nombre apartado                                               | string       | App Started |
            | fulfillment model                                     | online                                                        | string       | App Started |
            | product primary category                              | cuentas                                                       | string       | App Started |
            | product primary name                                  | tarjeta nomina basic                                          | string       | App Started |
            | internal campaign                                     |                                                               | empty array  | App Started |
            | optimization attributes                               |                                                               | empty array  | App Started |

    @ANA_EVENT_POC008
    @analytics
    @MX @vbank @web-done @test
    @web @ios @android
    Scenario: A user set the pocket amount and scheduled pocket amount
        Given a user with the following criteria
            | criteria             |
            | account with payroll |
        And the user accesses to product detail
        And the user accesses to pockets list
        And the user accesses to create pocket
        And the analytics interceptor service is initiated
        And the user type the pocket name
        And the user writes "2000" in the pocket amount
        And the user choose check pocket
        When the user writes "2800" in the scheduled pocket amount
        Then the analytics events contains the following variables
            | item                     | value                                                         | type         | event      | event number |
            | analytics                | analytics/glomo_base                                          | json schema  | App Step 2 | 1            |
            | version DL               | 20250414_5.0                                                  | string       | App Step 2 | 1            |
            | page name                | app:privada:personas:cuentas:detalle:crear apartado:2 importe | string       | App Step 2 | 1            |
            | level 1                  | cuentas                                                       | string       | App Step 2 | 1            |
            | level 2                  | detalle                                                       | string       | App Step 2 | 1            |
            | level 3                  | crear apartado                                                | string       | App Step 2 | 1            |
            | level 4                  | 2 importe                                                     | string       | App Step 2 | 1            |
            | language                 | ES                                                            | string       | App Step 2 | 1            |
            | page area                | privada                                                       | string       | App Step 2 | 1            |
            | page intent              | informacion                                                   | string       | App Step 2 | 1            |
            | channel                  | online                                                        | string       | App Step 2 | 1            |
            | page instance ID         | de                                                            | string       | App Step 2 | 1            |
            | page info version        | appVersion                                                    | regexp named | App Step 2 | 1            |
            | page segment             | personas                                                      | string       | App Step 2 | 1            |
            | sysEnv                   | app                                                           | string       | App Step 2 | 1            |
            | business unit            | BBVA Mexico                                                   | string       | App Step 2 | 1            |
            | site app name            | App BBVA Mexico                                               | string       | App Step 2 | 1            |
            | project name             | Glomo                                                         | string       | App Step 2 | 1            |
            | device mobile            | si                                                            | string       | App Step 2 | 1            |
            | user userState           | logado                                                        | string       | App Step 2 | 1            |
            | user segment global      | 003001                                                        | string       | App Step 2 | 1            |
            | profile ID               | profileID                                                     | regexp named | App Step 2 | 1            |
            | user gender              | gender                                                        | regexp named | App Step 2 | 1            |
            | user age                 | age                                                           | regexp named | App Step 2 | 1            |
            | global application       | pockets                                                       | string       | App Step 2 | 1            |
            | application name         | crear apartado                                                | string       | App Step 2 | 1            |
            | application type         | operativa                                                     | string       | App Step 2 | 1            |
            | application step         | 2 importe                                                     | string       | App Step 2 | 1            |
            | fulfillment model        | online                                                        | string       | App Step 2 | 1            |
            | product primary category | cuentas                                                       | string       | App Step 2 | 1            |
            | product primary name     | tarjeta nomina basic                                          | string       | App Step 2 | 1            |
            | internal campaign        |                                                               | empty array  | App Step 2 | 1            |
            | optimization attributes  |                                                               | empty array  | App Step 2 | 1            |

    @ANA_EVENT_POC009
    @analytics
    @MX @vbank @web-done @test
    @web @ios @android
    @manual @JIRA.GLOMOMX-254718
    Scenario: A user see the summary of the pocket
        Given a user with the following criteria
            | criteria             |
            | account with payroll |
        And the user accesses to product detail
        And the user accesses to pockets list
        And the user accesses to create pocket
        And the user type the pocket name
        And the user writes "2000" in the pocket amount
        And the user choose check pocket
        And the user writes "2800" in the scheduled pocket amount
        And the analytics interceptor service is initiated
        When the user continues the process pocket
        Then the analytics events contains the following variables
            | item                                                  | value                                                              | type         | event      |
            | analytics                                             | analytics/glomo_base                                               | json schema  | App Step 3 |
            | version DL                                            | 20250414_5.0                                                       | string       | App Step 3 |
            | page name                                             | app:privada:personas:cuentas:detalle:crear apartado:3 confirmacion | string       | App Step 3 |
            | level 1                                               | cuentas                                                            | string       | App Step 3 |
            | level 2                                               | detalle                                                            | string       | App Step 3 |
            | level 3                                               | crear apartado                                                     | string       | App Step 3 |
            | level 4                                               | 3 confirmacion                                                     | string       | App Step 3 |
            | language                                              | ES                                                                 | string       | App Step 3 |
            | page area                                             | privada                                                            | string       | App Step 3 |
            | page intent                                           | informacion                                                        | string       | App Step 3 |
            | channel                                               | online                                                             | string       | App Step 3 |
            | page instance ID                                      | de                                                                 | string       | App Step 3 |
            | page info version                                     | appVersion                                                         | regexp named | App Step 3 |
            | page segment                                          | personas                                                           | string       | App Step 3 |
            | sysEnv                                                | app                                                                | string       | App Step 3 |
            | business unit                                         | BBVA Mexico                                                        | string       | App Step 3 |
            | site app name                                         | App BBVA Mexico                                                    | string       | App Step 3 |
            | project name                                          | Glomo                                                              | string       | App Step 3 |
            | device mobile                                         | si                                                                 | string       | App Step 3 |
            | user userState                                        | logado                                                             | string       | App Step 3 |
            | user segment global                                   | 003001                                                             | string       | App Step 3 |
            | profile ID                                            | profileID                                                          | regexp named | App Step 3 |
            | user gender                                           | gender                                                             | regexp named | App Step 3 |
            | user age                                              | age                                                                | regexp named | App Step 3 |
            | global application                                    | pockets                                                            | string       | App Step 3 |
            | application name                                      | crear apartado                                                     | string       | App Step 3 |
            | application type                                      | operativa                                                          | string       | App Step 3 |
            | application step                                      | 3 confirmacion                                                     | string       | App Step 3 |
            | fulfillment model                                     | online                                                             | string       | App Step 3 |
            | product primary category                              | cuentas                                                            | string       | App Step 3 |
            | product primary name                                  | tarjeta nomina basic                                               | string       | App Step 3 |
            | product amount                                        | 2000                                                               | number       | App Step 3 |
            | product currency                                      | MXN                                                                | string       | App Step 3 |
            | product payment type                                  | instantaneo                                                        | string       | App Step 3 |
            | product primary category 1                            | cuentas                                                            | string       | App Step 3 |
            | product primary name 1                                | tarjeta nomina basic                                               | string       | App Step 3 |
            | product amount 1                                      | 2800                                                               | number       | App Step 3 |
            | product currency 1                                    | MXN                                                                | string       | App Step 3 |
            | product payment type 1                                | programado                                                         | string       | App Step 3 |
            | internal campaign                                     |                                                                    | empty array  | App Step 3 |
            | optimization attributes                               |                                                                    | empty array  | App Step 3 |

    @ANA_EVENT_POC010
    @analytics
    @MX @vbank @web-done @test
    @web @ios @android
    @manual @JIRA.GLOMOMX-254718
    Scenario: A user completes the process of creating a new pocket
        Given a user with the following criteria
            | criteria             |
            | account with payroll |
        And the user accesses to product detail
        And the user accesses to pockets list
        And the user accesses to create pocket
        And the user type the pocket name
        And the user writes "2000" in the pocket amount
        And the user choose check pocket
        And the user writes "2800" in the scheduled pocket amount
        And the analytics interceptor service is initiated
        When the user accept pockets
        Then the analytics events contains the following variables
            | item                                                  | value                                                              | type         | event         |
            | analytics                                             | analytics/glomo_base                                               | json schema  | App Completed |
            | version DL                                            | 20250414_5.0                                                       | string       | App Completed |
            | page name                                             | app:privada:personas:cuentas:detalle:crear apartado:pagina exitosa | string       | App Completed |
            | level 1                                               | cuentas                                                            | string       | App Completed |
            | level 2                                               | detalle                                                            | string       | App Completed |
            | level 3                                               | crear apartado                                                     | string       | App Completed |
            | level 4                                               | pagina exitosa                                                     | string       | App Completed |
            | language                                              | ES                                                                 | string       | App Completed |
            | page area                                             | privada                                                            | string       | App Completed |
            | page intent                                           | informacion                                                        | string       | App Completed |
            | channel                                               | online                                                             | string       | App Completed |
            | page instance ID                                      | de                                                                 | string       | App Completed |
            | page info version                                     | appVersion                                                         | regexp named | App Completed |
            | page segment                                          | personas                                                           | string       | App Completed |
            | sysEnv                                                | app                                                                | string       | App Completed |
            | business unit                                         | BBVA Mexico                                                        | string       | App Completed |
            | site app name                                         | App BBVA Mexico                                                    | string       | App Completed |
            | project name                                          | Glomo                                                              | string       | App Completed |
            | device mobile                                         | si                                                                 | string       | App Completed |
            | user userState                                        | logado                                                             | string       | App Completed |
            | user segment global                                   | 003001                                                             | string       | App Completed |
            | profile ID                                            | profileID                                                          | regexp named | App Completed |
            | user gender                                           | gender                                                             | regexp named | App Completed |
            | user age                                              | age                                                                | regexp named | App Completed |
            | global application                                    | pockets                                                            | string       | App Completed |
            | application name                                      | crear apartado                                                     | string       | App Completed |
            | application type                                      | operativa                                                          | string       | App Completed |
            | application step                                      | pagina exitosa                                                     | string       | App Completed |
            | application state                                     | finalizado                                                         | string       | App Completed |
            | fulfillment model                                     | online                                                             | string       | App Completed |
            | product primary category                              | cuentas                                                            | string       | App Completed |
            | product primary name                                  | tarjeta nomina basic                                               | string       | App Completed |
            | product amount                                        | 2000                                                               | number       | App Completed |
            | product currency                                      | MXN                                                                | string       | App Completed |
            | product payment type                                  | instantaneo                                                        | string       | App Completed |
            | product state                                         | finalizado                                                         | string       | App Completed |
            | product primary category 1                            | cuentas                                                            | string       | App Completed |
            | product primary name 1                                | tarjeta nomina basic                                               | string       | App Completed |
            | product amount 1                                      | 2800                                                               | number       | App Completed |
            | product currency 1                                    | MXN                                                                | string       | App Completed |
            | product payment type 1                                | programado                                                         | string       | App Completed |
            | product state 1                                       | finalizado                                                         | string       | App Completed |
            | internal campaign                                     |                                                                    | empty array  | App Completed |
            | optimization attributes                               |                                                                    | empty array  | App Completed |

@codiQrRequestAnalytics
Feature: Analytics - CoDi operative - codiQrRequest

    @ANA_CODIQR001
    @analytics @MX @backend(test) @vbank
    @web @ios @android @manual @JIRA.GLOMOMX-159689
    Scenario: The user accesses the screen to request money QR Codi - Analytics fingerprint - Page View
        Given a user with the following criteria
            | criteria    |
            | enroll codi |
        And the user accesses to dashboard
        When the user goes to "screen CoDi QR request" using deeplink navigation
        Then the device contains the following variables
            | item                    | value                                       | type             |
            | analytics               | analytics/glomo_base                        | json schema      |
            | version DL              | 20250414_5.0                                | string           |
            | page name               | app:publica:general:crear qr:informacion qr | string           |
            | level 1                 | crear qr                                    | string           |
            | level 2                 | informacion qr                              | string           |
            | language                | ES                                          | string           |
            | page area               | publica                                     | string           |
            | page intent             | transaccion                                 | string           |
            | channel                 | online                                      | string           |
            | page instance ID        | de                                          | string           |
            | page info version       | appVersion                                  | regexp named     |
            | page segment            | general                                     | string           |
            | sysEnv                  | app                                         | string           |
            | business unit           | BBVA Mexico                                 | string           |
            | site app name           | App BBVA Mexico                             | string           |
            | project name            | Glomo                                       | string           |
            | device mobile           | si                                          | string           |
            | user userState          | no logado                                   | string           |
            | profile ID              | profileID                                   | regexp named     |
            | user segment global     | 003001                                      | string           |
            | user gender             | gender                                      | regexp named     |
            | user age                | age                                         | regexp named     |
            | internal campaign       |                                             | empty array      |
            | optimization attributes |                                             | empty array      |
            | application             |                                             | empty str object |
            | products attributes     |                                             | empty array      |

    @ANA_CODIQR002
    @analytics @MX @backend(test) @vbank
    @web @ios @android @manual @JIRA.GLOMOMX-159689
    Scenario: The user accesses the screen to request money QR Codi and continues the process - Analytics fingerprint - Internal Link
        Given a user with the following criteria
            | criteria    |
            | enroll codi |
        When the user accesses to dashboard
        And the user goes to "screen CoDi QR request" using deeplink navigation
        Then the device contains the following variables
            | item                    | value                                        | type             |
            | analytics               | analytics/glomo_base                         | json schema      |
            | version DL              | 20250414_5.0                                 | string           |
            | page name               | app:privada:personas:crear qr:informacion qr | string           |
            | level 1                 | crear qr                                     | string           |
            | level 2                 | informacion qr                               | string           |
            | language                | ES                                           | string           |
            | page area               | privada                                      | string           |
            | page intent             | transaccion                                  | string           |
            | channel                 | online                                       | string           |
            | page instance ID        | de                                           | string           |
            | page info version       | appVersion                                   | regexp named     |
            | page segment            | general                                      | string           |
            | sysEnv                  | app                                          | string           |
            | business unit           | BBVA Mexico                                  | string           |
            | site app name           | App BBVA Mexico                              | string           |
            | project name            | Glomo                                        | string           |
            | link name               | crear qr                                     | string           |
            | device mobile           | si                                           | string           |
            | user userState          | logado                                       | string           |
            | profile ID              | profileID                                    | regexp named     |
            | user segment global     | 003001                                       | string           |
            | user gender             | gender                                       | regexp named     |
            | user age                | age                                          | regexp named     |
            | internal campaign       |                                              | empty array      |
            | optimization attributes |                                              | empty array      |
            | application             |                                              | empty str object |
            | products attributes     |                                              | empty array      |

    @ANA_CODIQR003
    @analytics @MX @backend(test) @vbank
    @web @ios @android @manual @JIRA.GLOMOMX-159689
    Scenario: The user accesses the screen to request money QR Code displays the information and continues the process - Analytics App Page Visit
        Given a user with the following criteria
            | criteria    |
            | enroll codi |
        And the user accesses to dashboard
        And the user goes to "screen CoDi QR request" using deeplink navigation
        When the user displays information
        Then the device contains the following variables
            | item                     | value                                                | type         |
            | analytics                | analytics/glomo_base                                 | json schema  |
            | version DL               | 20250414_5.0                                         | string       |
            | page name                | app:privada:personas:crear qr:1 cuenta para deposito | string       |
            | level 1                  | crear qr                                             | string       |
            | level 2                  | 1 cuenta para deposito                               | string       |
            | language                 | ES                                                   | string       |
            | page area                | privada                                              | string       |
            | page intent              | transaccion                                          | string       |
            | channel                  | online                                               | string       |
            | page instance ID         | de                                                   | string       |
            | page info version        | appVersion                                           | regexp named |
            | page segment             | personas                                             | string       |
            | sysEnv                   | app                                                  | string       |
            | business unit            | BBVA Mexico                                          | string       |
            | site app name            | App BBVA Mexico                                      | string       |
            | project name             | Glomo                                                | string       |
            | device mobile            | si                                                   | string       |
            | user userState           | logado                                               | string       |
            | profile ID               | profileID                                            | regexp named |
            | user segment global      | 003001                                               | string       |
            | user gender              | gender                                               | regexp named |
            | user age                 | age                                                  | regexp named |
            | global application       | p2p request                                          | string       |
            | application name         | solicitar qr                                         | string       |
            | application type         | operativa                                            | string       |
            | application step         | 1 cuenta para deposito                               | string       |
            | fulfillment model        | online                                               | string       |
            | product primary category | cuentas                                              | string       |
            | internal campaign        |                                                      | empty array  |
            | optimization attributes  |                                                      | empty array  |
            | products attributes      |                                                      | empty array  |

    @ANA_CODIQR004
    @analytics @MX @backend(test) @vbank
    @web @ios @android @manual @JIRA.GLOMOMX-159689
    Scenario: The user accesses the screen to request money QR Code displays the information and continues the process - Analytics App Started
        Given a user with the following criteria
            | criteria    |
            | enroll codi |
        And the user accesses to dashboard
        And the user goes to "screen CoDi QR request" using deeplink navigation
        And the user displays information
        When the user selects the account to deposit
        Then the device contains the following variables
            | item                     | value                                                | type         |
            | analytics                | analytics/glomo_base                                 | json schema  |
            | version DL               | 20250414_5.0                                         | string       |
            | page name                | app:privada:personas:crear qr:1 cuenta para deposito | string       |
            | level 1                  | crear qr                                             | string       |
            | level 2                  | 1 cuenta para deposito                               | string       |
            | language                 | ES                                                   | string       |
            | page area                | privada                                              | string       |
            | page intent              | transaccion                                          | string       |
            | channel                  | online                                               | string       |
            | page instance ID         | de                                                   | string       |
            | page info version        | appVersion                                           | regexp named |
            | page segment             | personas                                             | string       |
            | sysEnv                   | app                                                  | string       |
            | business unit            | BBVA Mexico                                          | string       |
            | site app name            | App BBVA Mexico                                      | string       |
            | project name             | Glomo                                                | string       |
            | device mobile            | si                                                   | string       |
            | user userState           | logado                                               | string       |
            | profile ID               | profileID                                            | regexp named |
            | user segment global      | 003001                                               | string       |
            | user gender              | gender                                               | regexp named |
            | user age                 | age                                                  | regexp named |
            | global application       | p2p request                                          | string       |
            | application name         | solicitar qr                                         | string       |
            | application type         | operativa                                            | string       |
            | application step         | seleccion cuenta                                     | string       |
            | fulfillment model        | online                                               | string       |
            | product primary category | cuentas                                              | string       |
            | internal campaign        |                                                      | empty array  |
            | optimization attributes  |                                                      | empty array  |
            | products attributes      |                                                      | empty array  |

    @ANA_CODIQR005
    @analytics @MX @backend(test) @vbank
    @web @ios @android @manual @JIRA.GLOMOMX-159689
    Scenario: The user accesses the screen to request money QR Codi indicating amount to continue the process - Analytics App Step 2
        Given a user with the following criteria
            | criteria    |
            | enroll codi |
        And the user accesses to dashboard
        And the user goes to "screen CoDi QR request" using deeplink navigation
        When the user selects and enters account and amount to request
        Then the device contains the following variables
            | item                     | value                                 | type         |
            | analytics                | analytics/glomo_base                  | json schema  |
            | version DL               | 20250414_5.0                          | string       |
            | page name                | app:privada:personas:crear qr:2 monto | string       |
            | level 1                  | crear qr                              | string       |
            | level 2                  | 2 monto                               | string       |
            | language                 | ES                                    | string       |
            | page area                | privada                               | string       |
            | page intent              | transaccion                           | string       |
            | channel                  | online                                | string       |
            | page instance ID         | de                                    | string       |
            | page info version        | appVersion                            | regexp named |
            | page segment             | personas                              | string       |
            | sysEnv                   | app                                   | string       |
            | business unit            | BBVA Mexico                           | string       |
            | site app name            | App BBVA Mexico                       | string       |
            | project name             | Glomo                                 | string       |
            | device mobile            | si                                    | string       |
            | user userState           | logado                                | string       |
            | profile ID               | profileID                             | regexp named |
            | user segment global      | 003001                                | string       |
            | user gender              | gender                                | regexp named |
            | user age                 | age                                   | regexp named |
            | global application       | p2p request                           | string       |
            | application name         | solicitar qr                          | string       |
            | application type         | operativa                             | string       |
            | application step         | 2 monto                               | string       |
            | fulfillment model        | online                                | string       |
            | product primary category | cuentas                               | string       |
            | internal campaign        |                                       | empty array  |
            | optimization attributes  |                                       | empty array  |
            | products attributes      |                                       | empty array  |

    @ANA_CODIQR006
    @analytics @MX @backend(test) @vbank
    @web @ios @android @manual @JIRA.GLOMOMX-159689
    Scenario: The user accesses the screen to request money QR Codi indicating concept to continue the process - Analytics App Step 3
        Given a user with the following criteria
            | criteria    |
            | enroll codi |
        And the user accesses to dashboard
        And the user goes to "screen CoDi QR request" using deeplink navigation
        And the user selects and enters account and amount to request
        When the user enters concept
        Then the device contains the following variables
            | item                     | value                                    | type         |
            | analytics                | analytics/glomo_base                     | json schema  |
            | version DL               | 20250414_5.0                             | string       |
            | page name                | app:privada:personas:crear qr:3 concepto | string       |
            | level 1                  | crear qr                                 | string       |
            | level 2                  | 3 concepto                               | string       |
            | language                 | ES                                       | string       |
            | page area                | privada                                  | string       |
            | page intent              | transaccion                              | string       |
            | channel                  | online                                   | string       |
            | page instance ID         | de                                       | string       |
            | page info version        | appVersion                               | regexp named |
            | page segment             | personas                                 | string       |
            | sysEnv                   | app                                      | string       |
            | business unit            | BBVA Mexico                              | string       |
            | site app name            | App BBVA Mexico                          | string       |
            | project name             | Glomo                                    | string       |
            | device mobile            | si                                       | string       |
            | user userState           | logado                                   | string       |
            | profile ID               | profileID                                | regexp named |
            | user segment global      | 003001                                   | string       |
            | user gender              | gender                                   | regexp named |
            | user age                 | age                                      | regexp named |
            | global application       | p2p request                              | string       |
            | application name         | solicitar qr                             | string       |
            | application type         | operativa                                | string       |
            | application step         | 3 concepto                               | string       |
            | fulfillment model        | online                                   | string       |
            | product primary category | cuentas                                  | string       |
            | product amount           | 400                                      | string       |
            | product currency         | MXN                                      | string       |
            | internal campaign        |                                          | empty array  |
            | optimization attributes  |                                          | empty array  |
            | products attributes      |                                          | empty array  |

    @ANA_CODIQR007
    @analytics @MX @backend(test) @vbank
    @web @ios @android @manual @JIRA.GLOMOMX-159689
    Scenario: The user accesses the screen request money and created QR to continue the process - Analytics App Step 4
        Given a user with the following criteria
            | criteria    |
            | enroll codi |
        And the user accesses to dashboard
        And the user goes to "screen CoDi QR request" using deeplink navigation
        And the user selects and enters account and amount to request
        And the user enters concept
        When the user creates QR
        Then the device contains the following variables
            | item                     | value                                        | type         |
            | analytics                | analytics/glomo_base                         | json schema  |
            | version DL               | 20250414_5.0                                 | string       |
            | page name                | app:privada:personas:crear qr:4 confirmacion | string       |
            | level 1                  | crear qr                                     | string       |
            | level 2                  | 4 confirmacion                               | string       |
            | language                 | ES                                           | string       |
            | page area                | privada                                      | string       |
            | page intent              | transaccion                                  | string       |
            | channel                  | online                                       | string       |
            | page instance ID         | de                                           | string       |
            | page info version        | appVersion                                   | regexp named |
            | page segment             | personas                                     | string       |
            | sysEnv                   | app                                          | string       |
            | business unit            | BBVA Mexico                                  | string       |
            | site app name            | App BBVA Mexico                              | string       |
            | project name             | Glomo                                        | string       |
            | device mobile            | si                                           | string       |
            | user userState           | logado                                       | string       |
            | profile ID               | profileID                                    | regexp named |
            | user segment global      | 003001                                       | string       |
            | user gender              | gender                                       | regexp named |
            | user age                 | age                                          | regexp named |
            | global application       | p2p request                                  | string       |
            | application name         | solicitar qr                                 | string       |
            | application type         | operativa                                    | string       |
            | application step         | 4 confirmacion                               | string       |
            | fulfillment model        | online                                       | string       |
            | product primary category | cuentas                                      | string       |
            | product amount           | 400                                          | string       |
            | product currency         | MXN                                          | string       |
            | internal campaign        |                                              | empty array  |
            | optimization attributes  |                                              | empty array  |
            | products attributes      |                                              | empty array  |

    @ANA_CODIQR008
    @analytics @MX @backend(test) @vbank
    @web @ios @android @manual @JIRA.GLOMOMX-159689
    Scenario: Tthe user accesses the screen CoDi QR request and views the process completed with success - Analytics App Completed
        Given a user with the following criteria
            | criteria    |
            | enroll codi |
        And the user accesses to dashboard
        And the user goes to "screen CoDi QR request" using deeplink navigation
        And the user selects and enters the account, amount and concept to request
        And the user creates QR
        When the user completed the process and exits the screen
        Then the device contains the following variables
            | item                         | value                                        | type         |
            | analytics                    | analytics/glomo_base                         | json schema  |
            | version DL                   | 20250414_5.0                                 | string       |
            | page name                    | app:privada:personas:crear qr:pagina exitosa | string       |
            | level 1                      | crear qr                                     | string       |
            | level 2                      | pagina exitosa                               | string       |
            | language                     | ES                                           | string       |
            | page area                    | privada                                      | string       |
            | page intent                  | transaccion                                  | string       |
            | channel                      | online                                       | string       |
            | page instance ID             | de                                           | string       |
            | page info version            | appVersion                                   | regexp named |
            | page segment                 | personas                                     | string       |
            | sysEnv                       | app                                          | string       |
            | business unit                | BBVA Mexico                                  | string       |
            | site app name                | App BBVA Mexico                              | string       |
            | project name                 | Glomo                                        | string       |
            | device mobile                | si                                           | string       |
            | user userState               | logado                                       | string       |
            | profile ID                   | profileID                                    | regexp named |
            | user segment global          | 003001                                       | string       |
            | user gender                  | gender                                       | regexp named |
            | user age                     | age                                          | regexp named |
            | global application           | p2p request                                  | string       |
            | application name             | solicitar qr                                 | string       |
            | application type             | operativa                                    | string       |
            | application step             | pagina exitosa                               | string       |
            | application state            | finalizado                                   | string       |
            | application typology         | qr con importe y con concepto                | string       |
            | product primary category     | cuentas                                      | string       |
            | product amount               | 400                                          | string       |
            | product currency             | MXN                                          | string       |
            | application operation number | 12121323                                     | string       |
            | product state                | finalizado                                   | string       |
            | internal campaign            |                                              | empty array  |
            | optimization attributes      |                                              | empty array  |
            | products attributes          |                                              | empty array  |

    @ANA_CODIQR009
    @analytics @MX @backend(test) @vbank
    @web @ios @android @manual @JIRA.GLOMOMX-159689
    Scenario: The user cannot access the QR Codi money request screen - Analytics Error - Account not verified
        Given a user with the following criteria
            | criteria    |
            | enroll codi |
        And the user accesses to dashboard
        And the user goes to "screen CoDi QR request" using deeplink navigation
        When the user cannot log in due to their unverified account
        Then the device contains the following variables
            | item                    | value                                              | type             |
            | analytics               | analytics/glomo_base                               | json schema      |
            | version DL              | 20250414_5.0                                       | string           |
            | page name               | app:privada:personas:crear qr:cuenta no verificada | string           |
            | level 1                 | crear qr                                           | string           |
            | level 2                 | cuenta no verificada                               | string           |
            | error page              | cuenta no verificada                               | string           |
            | language                | ES                                                 | string           |
            | page area               | privada                                            | string           |
            | page intent             | transaccion                                        | string           |
            | channel                 | online                                             | string           |
            | page instance ID        | de                                                 | string           |
            | page info version       | appVersion                                         | regexp named     |
            | page segment            | personas                                           | string           |
            | sysEnv                  | app                                                | string           |
            | business unit           | BBVA Mexico                                        | string           |
            | site app name           | App BBVA Mexico                                    | string           |
            | project name            | Glomo                                              | string           |
            | device mobile           | si                                                 | string           |
            | user userState          | logado                                             | string           |
            | profile ID              | profileID                                          | regexp named     |
            | user segment global     | 003001                                             | string           |
            | user gender             | gender                                             | regexp named     |
            | user age                | age                                                | regexp named     |
            | internal campaign       |                                                    | empty array      |
            | optimization attributes |                                                    | empty array      |
            | application             |                                                    | empty str object |
            | products attributes     |                                                    | empty array      |

    @ANA_CODIQR010
    @analytics @MX @backend(test) @vbank
    @web @ios @android @manual @JIRA.GLOMOMX-159689
    Scenario: The user accesses the QR Codi money request screen and a connection error is generated - Analytics Error - Generic connection error
        Given a user with the following criteria
            | criteria    |
            | enroll codi |
        And the user accesses to dashboard
        And the user goes to "screen CoDi QR request" using deeplink navigation
        When the user is denied a session due to a generic connection error
        Then the device contains the following variables
            | item                    | value                                           | type             |
            | analytics               | analytics/glomo_base                            | json schema      |
            | version DL              | 20250414_5.0                                    | string           |
            | page name               | app:privada:personas:crear qr:error de conexion | string           |
            | level 1                 | crear qr                                        | string           |
            | level 2                 | error de conexion                               | string           |
            | error page              | error de conexion                               | string           |
            | language                | ES                                              | string           |
            | page area               | privada                                         | string           |
            | page intent             | transaccion                                     | string           |
            | channel                 | online                                          | string           |
            | page instance ID        | de                                              | string           |
            | page info version       | appVersion                                      | regexp named     |
            | page segment            | personas                                        | string           |
            | sysEnv                  | app                                             | string           |
            | business unit           | BBVA Mexico                                     | string           |
            | site app name           | App BBVA Mexico                                 | string           |
            | project name            | Glomo                                           | string           |
            | device mobile           | si                                              | string           |
            | user userState          | logado                                          | string           |
            | profile ID              | profileID                                       | regexp named     |
            | user segment global     | 003001                                          | string           |
            | user gender             | gender                                          | regexp named     |
            | user age                | age                                             | regexp named     |
            | internal campaign       |                                                 | empty array      |
            | optimization attributes |                                                 | empty array      |
            | application             |                                                 | empty str object |
            | products attributes     |                                                 | empty array      |

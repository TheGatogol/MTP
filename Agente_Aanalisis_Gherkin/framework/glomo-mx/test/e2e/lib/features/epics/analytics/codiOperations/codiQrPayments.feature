@codiQrPaymentsAnalytics
Feature: Analytics - CoDi operative - codiQrPayments

    @ANA_CODIQP001
    @analytics @MX @backend(test) @vbank
    @web @ios @android @manual @JIRA.GLOMOMX-159689
    Scenario: The user accesses the valid QR code screen - Analytics App Page Visit
        Given a user with the following criteria
            | criteria    |
            | enroll codi |
        And the user accesses to dashboard
        When the user goes to "screen CoDi QR payment" using deeplink navigation
        Then the device contains the following variables
            | item                    | value                                                | type         |
            | analytics               | analytics/glomo_base                                 | json schema  |
            | version DL              | 20250414_5.0                                         | string       |
            | page name               | app:privada:personas:pagar con qr:1 codigo qr valido | string       |
            | level 1                 | pagar con qr                                         | string       |
            | level 2                 | 1 codigo qr valido                                   | string       |
            | language                | ES                                                   | string       |
            | page area               | privada                                              | string       |
            | page intent             | transaccion                                          | string       |
            | channel                 | online                                               | string       |
            | page instance ID        | de                                                   | string       |
            | page info version       | appVersion                                           | regexp named |
            | page segment            | personas                                             | string       |
            | sysEnv                  | app                                                  | string       |
            | business unit           | BBVA Mexico                                          | string       |
            | site app name           | App BBVA Mexico                                      | string       |
            | project name            | Glomo                                                | string       |
            | device mobile           | si                                                   | string       |
            | user userState          | logado                                               | string       |
            | profile ID              | profileID                                            | regexp named |
            | user segment global     | 003001                                               | string       |
            | user gender             | gender                                               | regexp named |
            | user age                | age                                                  | regexp named |
            | global application      | qr payments                                          | string       |
            | application name        | pagar con qr                                         | string       |
            | application type        | operativa                                            | string       |
            | application step        | 1 codigo qr valido                                   | string       |
            | fulfillment model       | online                                               | string       |
            | internal campaign       |                                                      | empty array  |
            | optimization attributes |                                                      | empty array  |
            | products attributes     |                                                      | empty array  |

    @ANA_CODIQP002
    @analytics @MX @backend(test) @vbank
    @web @ios @android @manual @JIRA.GLOMOMX-159689
    Scenario: The user accesses the valid QR code screen and continues the process - Analytics App Started
        Given a user with the following criteria
            | criteria    |
            | enroll codi |
        When the user accesses to dashboard
        And the user goes to "screen CoDi QR payment" using deeplink navigation
        Then the device contains the following variables
            | item                    | value                                                | type         |
            | analytics               | analytics/glomo_base                                 | json schema  |
            | version DL              | 20250414_5.0                                         | string       |
            | page name               | app:privada:personas:pagar con qr:1 codigo qr valido | string       |
            | level 1                 | pagar con qr                                         | string       |
            | level 2                 | 1 codigo qr valido                                   | string       |
            | language                | ES                                                   | string       |
            | page area               | privada                                              | string       |
            | page intent             | transaccion                                          | string       |
            | channel                 | online                                               | string       |
            | page instance ID        | de                                                   | string       |
            | page info version       | appVersion                                           | regexp named |
            | page segment            | personas                                             | string       |
            | sysEnv                  | app                                                  | string       |
            | business unit           | BBVA Mexico                                          | string       |
            | site app name           | App BBVA Mexico                                      | string       |
            | project name            | Glomo                                                | string       |
            | device mobile           | si                                                   | string       |
            | user userState          | logado                                               | string       |
            | profile ID              | profileID                                            | regexp named |
            | user segment global     | 003001                                               | string       |
            | user gender             | gender                                               | regexp named |
            | user age                | age                                                  | regexp named |
            | global application      | qr payments                                          | string       |
            | application name        | pagar con qr                                         | string       |
            | application type        | operativa                                            | string       |
            | application step        | continuar                                            | string       |
            | fulfillment model       | online                                               | string       |
            | internal campaign       |                                                      | empty array  |
            | optimization attributes |                                                      | empty array  |
            | products attributes     |                                                      | empty array  |

    @ANA_CODIQP003
    @analytics @MX @backend(test) @vbank
    @web @ios @android @manual @JIRA.GLOMOMX-159689
    Scenario: The user accesses the screen to view QR payment information and continues the process - Analytics App Step 2
        Given a user with the following criteria
            | criteria    |
            | enroll codi |
        And the user accesses to dashboard
        And the user goes to "screen CoDi QR payment" using deeplink navigation
        When the user select acount
        Then the device contains the following variables
            | item                     | value                                                  | type         |
            | analytics                | analytics/glomo_base                                   | json schema  |
            | version DL               | 20250414_5.0                                           | string       |
            | page name                | app:privada:personas:pagar con qr:2 seleccionar cuenta | string       |
            | level 1                  | pagar con qr                                           | string       |
            | level 2                  | 2 seleccionar cuenta                                   | string       |
            | language                 | ES                                                     | string       |
            | page area                | privada                                                | string       |
            | page intent              | transaccion                                            | string       |
            | channel                  | online                                                 | string       |
            | page instance ID         | de                                                     | string       |
            | page info version        | appVersion                                             | regexp named |
            | page segment             | personas                                               | string       |
            | sysEnv                   | app                                                    | string       |
            | business unit            | BBVA Mexico                                            | string       |
            | site app name            | App BBVA Mexico                                        | string       |
            | project name             | Glomo                                                  | string       |
            | device mobile            | si                                                     | string       |
            | user userState           | logado                                                 | string       |
            | profile ID               | profileID                                              | regexp named |
            | user segment global      | 003001                                                 | string       |
            | user gender              | gender                                                 | regexp named |
            | user age                 | age                                                    | regexp named |
            | global application       | qr payments                                            | string       |
            | application name         | pagar con qr                                           | string       |
            | application type         | operativa                                              | string       |
            | application step         | 2 seleccionar cuenta                                   | string       |
            | fulfillment model        | online                                                 | string       |
            | application typology     | qr con importe y con concepto                          | string       |
            | product primary category | cuentas                                                | string       |
            | product amount           | 500                                                    | Number       |
            | product currency         | MXN                                                    | string       |
            | internal campaign        |                                                        | empty array  |
            | optimization attributes  |                                                        | empty array  |
            | products attributes      |                                                        | empty array  |

    @ANA_CODIQP004
    @analytics @MX @backend(test) @vbank
    @web @ios @android @manual @JIRA.GLOMOMX-159689
    Scenario: The user accesses the pay QR screen and immediately views the amount to pay and continues the process - Analytics App Step 3
        Given a user with the following criteria
            | criteria    |
            | enroll codi |
        And the user accesses to dashboard
        And the user goes to "screen CoDi QR payment" using deeplink navigation
        And the user select account
        When the user confirm payments
        Then the device contains the following variables
            | item                     | value                                            | type         |
            | analytics                | analytics/glomo_base                             | json schema  |
            | version DL               | 20250414_5.0                                     | string       |
            | page name                | app:privada:personas:pagar con qr:3 confirmacion | string       |
            | level 1                  | pagar con qr                                     | string       |
            | level 2                  | 3 confirmacion                                   | string       |
            | language                 | ES                                               | string       |
            | page area                | privada                                          | string       |
            | page intent              | transaccion                                      | string       |
            | channel                  | online                                           | string       |
            | page instance ID         | de                                               | string       |
            | page info version        | appVersion                                       | regexp named |
            | page segment             | personas                                         | string       |
            | sysEnv                   | app                                              | string       |
            | business unit            | BBVA Mexico                                      | string       |
            | site app name            | App BBVA Mexico                                  | string       |
            | project name             | Glomo                                            | string       |
            | device mobile            | si                                               | string       |
            | user userState           | logado                                           | string       |
            | profile ID               | profileID                                        | regexp named |
            | user segment global      | 003001                                           | string       |
            | user gender              | gender                                           | regexp named |
            | user age                 | age                                              | regexp named |
            | global application       | qr payments                                      | string       |
            | application name         | pagar con qr                                     | string       |
            | application type         | operativa                                        | string       |
            | application step         | 3 confirmacion                                   | string       |
            | fulfillment model        | online                                           | string       |
            | application typology     | qr con importe y con concepto                    | string       |
            | product primary category | cuentas                                          | string       |
            | product amount           | 500                                              | Number       |
            | product currency         | MXN                                              | string       |
            | internal campaign        |                                                  | empty array  |
            | optimization attributes  |                                                  | empty array  |
            | products attributes      |                                                  | empty array  |

    @ANA_CODIQP005
    @analytics @MX @backend(test) @vbank
    @web @ios @android @manual @JIRA.GLOMOMX-159689
    Scenario: The user accesses the OTP screen to sign the authorization and continues the process - Analytics OTP
        Given a user with the following criteria
            | criteria    |
            | enroll codi |
        And the user accesses to dashboard
        And the user goes to "screen CoDi QR payment" using deeplink navigation
        When the user completes and confirms the payment
        Then the device contains the following variables
            | item                     | value                                   | type         |
            | analytics                | analytics/glomo_base                    | json schema  |
            | version DL               | 20250414_5.0                            | string       |
            | page name                | app:privada:personas:pagar con qr:4 otp | string       |
            | level 1                  | pagar con qr                            | string       |
            | level 2                  | 4 otp                                   | string       |
            | language                 | ES                                      | string       |
            | page area                | privada                                 | string       |
            | page intent              | transaccion                             | string       |
            | channel                  | online                                  | string       |
            | page instance ID         | de                                      | string       |
            | page info version        | appVersion                              | regexp named |
            | page segment             | personas                                | string       |
            | sysEnv                   | app                                     | string       |
            | business unit            | BBVA Mexico                             | string       |
            | site app name            | App BBVA Mexico                         | string       |
            | project name             | Glomo                                   | string       |
            | device mobile            | si                                      | string       |
            | user userState           | logado                                  | string       |
            | profile ID               | profileID                               | regexp named |
            | user segment global      | 003001                                  | string       |
            | user gender              | gender                                  | regexp named |
            | user age                 | age                                     | regexp named |
            | global application       | qr payments                             | string       |
            | application name         | pagar con qr                            | string       |
            | application type         | operativa                               | string       |
            | application step         | 4 otp                                   | string       |
            | fulfillment model        | online                                  | string       |
            | custom fields            | firma:token                             | string       |
            | application typology     | qr con importe y con concepto           | string       |
            | product primary category | cuentas                                 | string       |
            | product amount           | 500                                     | Number       |
            | product currency         | MXN                                     | string       |
            | internal campaign        |                                         | empty array  |
            | optimization attributes  |                                         | empty array  |
            | products attributes      |                                         | empty array  |

    @ANA_CODIQP006
    @analytics @MX @backend(test) @vbank
    @web @ios @android @manual @JIRA.GLOMOMX-159689
    Scenario: The user accesses the successful operation screen and finishes the process - Analytics App Completed
        Given a user with the following criteria
            | criteria    |
            | enroll codi |
        And the user accesses to dashboard
        And the user goes to "screen CoDi QR payment" using deeplink navigation
        And the user completes and confirms the payment
        When the user finishes the process and exits the screen
        Then the device contains the following variables
            | item                                             | value                                            | type         |
            | analytics                                        | analytics/glomo_base                             | json schema  |
            | version DL                                       | 20250414_5.0                                     | string       |
            | page name                                        | app:privada:personas:pagar con qr:pagina exitosa | string       |
            | level 1                                          | pagar con qr                                     | string       |
            | level 2                                          | pagina exitosa                                   | string       |
            | language                                         | ES                                               | string       |
            | page area                                        | privada                                          | string       |
            | page intent                                      | transaccion                                      | string       |
            | channel                                          | online                                           | string       |
            | page instance ID                                 | de                                               | string       |
            | page info version                                | appVersion                                       | regexp named |
            | page segment                                     | personas                                         | string       |
            | sysEnv                                           | app                                              | string       |
            | business unit                                    | BBVA Mexico                                      | string       |
            | site app name                                    | App BBVA Mexico                                  | string       |
            | project name                                     | Glomo                                            | string       |
            | device mobile                                    | si                                               | string       |
            | user userState                                   | logado                                           | string       |
            | profile ID                                       | profileID                                        | regexp named |
            | user segment global                              | 003001                                           | string       |
            | user gender                                      | gender                                           | regexp named |
            | user age                                         | age                                              | regexp named |
            | global application                               | qr payments                                      | string       |
            | application name                                 | pagar con qr                                     | string       |
            | application type                                 | operativa                                        | string       |
            | application step                                 | pagina exitosa                                   | string       |
            | fulfillment model                                | online                                           | string       |
            | custom fields                                    | firma:token                                      | string       |
            | application state                                | finalizado                                       | string       |
            | application typology                             | qr con importe y con concepto                    | string       |
            | product primary category                         | cuentas                                          | string       |
            | product amount                                   | 500                                              | Number       |
            | product currency                                 | MXN                                              | string       |
            | application operation number                     | 12121323                                         | string       |
            | window.digitalData.products.attributes.[0].state | finalizado                                       | string       |
            | internal campaign                                |                                                  | empty array  |
            | optimization attributes                          |                                                  | empty array  |
            | products attributes                              |                                                  | empty array  |

    @ANA_CODIQP007
    @analytics @MX @backend(test) @vbank
    @web @ios @android @manual @JIRA.GLOMOMX-159689
    Scenario: The user accesses the invalid QR code screen - Analytics Error Page View
        Given a user with the following criteria
            | criteria    |
            | enroll codi |
        And the user accesses to dashboard
        And the user goes to "screen CoDi QR payment" using deeplink navigation
        When the user logs in with an invalid QR payment
        Then the device contains the following variables
            | item                    | value                                                  | type             |
            | analytics               | analytics/glomo_base                                   | json schema      |
            | version DL              | 20250414_5.0                                           | string           |
            | page name               | app:privada:personas:pagar con qr:este qr no es valido | string           |
            | level 1                 | pagar con qr                                           | string           |
            | level 2                 | este qr no es valido                                   | string           |
            | error page              | este qr no es valido                                   | string           |
            | language                | ES                                                     | string           |
            | page area               | privada                                                | string           |
            | page intent             | transaccion                                            | string           |
            | channel                 | online                                                 | string           |
            | page instance ID        | de                                                     | string           |
            | page info version       | appVersion                                             | regexp named     |
            | page segment            | personas                                               | string           |
            | sysEnv                  | app                                                    | string           |
            | business unit           | BBVA Mexico                                            | string           |
            | site app name           | App BBVA Mexico                                        | string           |
            | project name            | Glomo                                                  | string           |
            | device mobile           | si                                                     | string           |
            | user userState          | logado                                                 | string           |
            | profile ID              | profileID                                              | regexp named     |
            | user segment global     | 003001                                                 | string           |
            | user gender             | gender                                                 | regexp named     |
            | user age                | age                                                    | regexp named     |
            | internal campaign       |                                                        | empty array      |
            | optimization attributes |                                                        | empty array      |
            | application             |                                                        | empty str object |
            | products attributes     |                                                        | empty array      |

    @ANA_CODIQP008
    @analytics @MX @backend(test) @vbank
    @web @ios @android @manual @JIRA.GLOMOMX-159689
    Scenario: The user accesses the valid QR code screen and a connection error is generated - Analytics Error Page View
        Given a user with the following criteria
            | criteria    |
            | enroll codi |
        And the user accesses to dashboard
        And the user goes to "screen CoDi QR payment" using deeplink navigation
        When the user is denied a session due to a generic connection error
        Then the device contains the following variables
            | item                    | value                                               | type             |
            | analytics               | analytics/glomo_base                                | json schema      |
            | version DL              | 20250414_5.0                                        | string           |
            | page name               | app:privada:personas:pagar con qr:error de conexion | string           |
            | level 1                 | pagar con qr                                        | string           |
            | level 2                 | error de conexion                                   | string           |
            | error page              | error de conexion                                   | string           |
            | language                | ES                                                  | string           |
            | page area               | privada                                             | string           |
            | page intent             | transaccion                                         | string           |
            | channel                 | online                                              | string           |
            | page instance ID        | de                                                  | string           |
            | page info version       | appVersion                                          | regexp named     |
            | page segment            | personas                                            | string           |
            | sysEnv                  | app                                                 | string           |
            | business unit           | BBVA Mexico                                         | string           |
            | site app name           | App BBVA Mexico                                     | string           |
            | project name            | Glomo                                               | string           |
            | device mobile           | si                                                  | string           |
            | user userState          | logado                                              | string           |
            | profile ID              | profileID                                           | regexp named     |
            | user segment global     | 003001                                              | string           |
            | user gender             | gender                                              | regexp named     |
            | user age                | age                                                 | regexp named     |
            | internal campaign       |                                                     | empty array      |
            | optimization attributes |                                                     | empty array      |
            | application             |                                                     | empty str object |
            | products attributes     |                                                     | empty array      |

    @ANA_CODIQP009
    @MX
    @analytics
    @vbank @backend(test)
    @ios @android @web
    @manual @JIRA.GLOMOMX-249374
    Scenario: Unrealized Operation Error - Page View
        Given a user with the following criteria
            | criteria         |
            | aric fraud error |
        And the user accesses to dashboard
        And the user goes to "screen CoDi QR payment" using deeplink navigation
        And the analytics interceptor service is initiated
        When the user is denied a session due to a generic connection error
        Then the analytics events contains the following variables:
            | item                    | value                                                          | type         | event     |
            | analytics               | analytics/glomo_base                                           | json schema  | Page View |
            | version DL              | 20250414_5.0                                                   | string       | Page View |
            | page name               | app:privada:personas:pagar con qr:error operacion no realizada | string       | Page View |
            | level 1                 | pagar con qr                                                   | string       | Page View |
            | level 2                 | error operacion no realizada                                   | string       | Page View |
            | error page              | error operacion no realizada                                   | string       | Page View |
            | language                | ES                                                             | string       | Page View |
            | page area               | privada                                                        | string       | Page View |
            | page intent             | transaccion                                                    | string       | Page View |
            | channel                 | online                                                         | string       | Page View |
            | page instance ID        | de                                                             | string       | Page View |
            | page info version       | appVersion                                                     | regexp named | Page View |
            | page segment            | personas                                                       | string       | Page View |
            | sysEnv                  | app                                                            | string       | Page View |
            | business unit           | BBVA Mexico                                                    | string       | Page View |
            | site app name           | App BBVA Mexico                                                | string       | Page View |
            | project name            | Glomo                                                          | string       | Page View |
            | device mobile           | si                                                             | string       | Page View |
            | user userState          | logado                                                         | string       | Page View |
            | user segment global     | 003001                                                         | string       | Page View |
            | profile ID              | profileID                                                      | regexp named | Page View |
            | user gender             | gender                                                         | regexp named | Page View |
            | user age                | age                                                            | regexp named | Page View |
            | internal campaign       |                                                                | empty array  | Page View |
            | optimization attributes |                                                                | empty array  | Page View |

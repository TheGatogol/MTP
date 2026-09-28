@codiPhonePaymentsAnalytics
Feature: Analytics - CoDi operative - codiPhonePayments

    @ANA_CODICP001
    @analytics @MX @backend(test) @vbank
    @web @ios @android @manual @JIRA.GLOMOMX-159689
    Scenario: The user accesses the screen pay money - Analytics App On Click Start code movements
        Given a user with the following criteria
            | criteria    |
            | enroll codi |
        And the user accesses to dashboard
        And the user goes to "screen CoDi phone payment" using deeplink navigation
        And the user accesses code movements
        When the user selects a movement to pay
        Then the device contains the following variables
            | item                     | value                                         | type         |
            | analytics                | analytics/glomo_base                          | json schema  |
            | version DL               | 20250414_5.0                                  | string       |
            | page name                | app:privada:personas:cuentas:movimientos codi | string       |
            | level 1                  | cuentas                                       | string       |
            | level 2                  | movimientos codi                              | string       |
            | language                 | ES                                            | string       |
            | page area                | privada                                       | string       |
            | page intent              | informacion                                   | string       |
            | channel                  | online                                        | string       |
            | page instance ID         | de                                            | string       |
            | page info version        | appVersion                                    | regexp named |
            | page segment             | personas                                      | string       |
            | sysEnv                   | app                                           | string       |
            | business unit            | BBVA Mexico                                   | string       |
            | site app name            | App BBVA Mexico                               | string       |
            | project name             | Glomo                                         | string       |
            | device mobile            | si                                            | string       |
            | user userState           | logado                                        | string       |
            | profile ID               | profileID                                     | regexp named |
            | user segment global      | 003001                                        | string       |
            | user gender              | gender                                        | regexp named |
            | user age                 | age                                           | regexp named |
            | global application       | send money                                    | string       |
            | application name         | enviar dinero                                 | string       |
            | application type         | operativa                                     | string       |
            | application step         | pagar ahora                                   | string       |
            | fulfillment model        | online                                        | string       |
            | product primary category | cuentas                                       | string       |
            | internal campaign        |                                               | empty array  |
            | optimization attributes  |                                               | empty array  |

    @ANA_CODICP002
    @analytics @MX @backend(test) @vbank
    @web @ios @android @manual @JIRA.GLOMOMX-159689
    Scenario: The user accesses the screen detail movement and continues the process - Analytics App on click start codi movements detail
        Given a user with the following criteria
            | criteria    |
            | enroll codi |
        And the user accesses to dashboard
        And the user goes to "screen CoDi phone payment" using deeplink navigation
        When the user select pay now
        Then the device contains the following variables
            | item                     | value                                                 | type         |
            | analytics                | analytics/glomo_base                                  | json schema  |
            | version DL               | 20250414_5.0                                          | string       |
            | page name                | app:privada:personas:cuentas:movimientos codi:detalle | string       |
            | level 1                  | cuentas                                               | string       |
            | level 2                  | movimientos codi                                      | string       |
            | level 3                  | detalle                                               | string       |
            | language                 | ES                                                    | string       |
            | page area                | privada                                               | string       |
            | page intent              | informacion                                           | string       |
            | channel                  | online                                                | string       |
            | page instance ID         | de                                                    | string       |
            | page info version        | appVersion                                            | regexp named |
            | page segment             | personas                                              | string       |
            | sysEnv                   | app                                                   | string       |
            | business unit            | BBVA Mexico                                           | string       |
            | site app name            | App BBVA Mexico                                       | string       |
            | project name             | Glomo                                                 | string       |
            | device mobile            | si                                                    | string       |
            | user userState           | logado                                                | string       |
            | profile ID               | profileID                                             | regexp named |
            | user segment global      | 003001                                                | string       |
            | user gender              | gender                                                | regexp named |
            | user age                 | age                                                   | regexp named |
            | global application       | send money                                            | string       |
            | application name         | enviar dinero                                         | string       |
            | application type         | operativa                                             | string       |
            | application step         | pagar ahora                                           | string       |
            | fulfillment model        | online                                                | string       |
            | product primary category | cuentas                                               | string       |
            | internal campaign        |                                                       | empty array  |
            | optimization attributes  |                                                       | empty array  |

    @ANA_CODICP003
    @analytics @MX @backend(test) @vbank
    @web @ios @android @manual @JIRA.GLOMOMX-159689
    Scenario: The user accesses screen pay money and postpones the shipment - Analytics Footprint - Page view you postponed the shipment
        Given a user with the following criteria
            | criteria    |
            | enroll codi |
        And the user accesses to dashboard
        And the user goes to "screen CoDi phone payment" using deeplink navigation
        When the user selects postpones the shipment
        Then the device contains the following variables
            | item                    | value                                                                     | type             |
            | analytics               | analytics/glomo_base                                                      | json schema      |
            | version DL              | 20250414_5.0                                                              | string           |
            | page name               | app:privada:personas:cuentas:enviar dinero solicitado:pospusiste el envio | string           |
            | level 1                 | cuentas                                                                   | string           |
            | level 2                 | enviar dinero solicitado                                                  | string           |
            | level 3                 | pospusiste el envio                                                       | string           |
            | language                | ES                                                                        | string           |
            | page area               | privada                                                                   | string           |
            | page intent             | transaccion                                                               | string           |
            | channel                 | online                                                                    | string           |
            | page instance ID        | de                                                                        | string           |
            | page info version       | appVersion                                                                | regexp named     |
            | page segment            | personas                                                                  | string           |
            | sysEnv                  | app                                                                       | string           |
            | business unit           | BBVA Mexico                                                               | string           |
            | site app name           | App BBVA Mexico                                                           | string           |
            | project name            | Glomo                                                                     | string           |
            | device mobile           | si                                                                        | string           |
            | user userState          | logado                                                                    | string           |
            | profile ID              | profileID                                                                 | regexp named     |
            | user segment global     | 003001                                                                    | string           |
            | user gender             | gender                                                                    | regexp named     |
            | user age                | age                                                                       | regexp named     |
            | internal campaign       |                                                                           | empty array      |
            | optimization attributes |                                                                           | empty array      |
            | application             |                                                                           | empty str object |
            | products attributes     |                                                                           | empty array      |

    @ANA_CODICP004
    @analytics @MX @backend(test) @vbank
    @web @ios @android @manual @JIRA.GLOMOMX-159689
    Scenario: The user accesses screen pay money views information and continue with the process - Analytic app page visit
        Given a user with the following criteria
            | criteria    |
            | enroll codi |
        And the user accesses to dashboard
        And the user goes to "screen CoDi phone payment" using deeplink navigation
        When the user select pay now
        Then the device contains the following variables
            | item                     | value                                                                    | type         |
            | analytics                | analytics/glomo_base                                                     | json schema  |
            | version DL               | 20250414_5.0                                                             | string       |
            | page name                | app:privada:personas:cuentas:enviar dinero solicitado:1 cuenta de origen | string       |
            | level 1                  | cuentas                                                                  | string       |
            | level 2                  | enviar dinero solicitado                                                 | string       |
            | level 3                  | 1 cuenta de origen                                                       | string       |
            | language                 | ES                                                                       | string       |
            | page area                | privada                                                                  | string       |
            | page intent              | transaccion                                                              | string       |
            | channel                  | online                                                                   | string       |
            | page instance ID         | de                                                                       | string       |
            | page info version        | appVersion                                                               | regexp named |
            | page segment             | personas                                                                 | string       |
            | sysEnv                   | app                                                                      | string       |
            | business unit            | BBVA Mexico                                                              | string       |
            | site app name            | App BBVA Mexico                                                          | string       |
            | project name             | Glomo                                                                    | string       |
            | device mobile            | si                                                                       | string       |
            | user userState           | logado                                                                   | string       |
            | profile ID               | profileID                                                                | regexp named |
            | user segment global      | 003001                                                                   | string       |
            | user gender              | gender                                                                   | regexp named |
            | user age                 | age                                                                      | regexp named |
            | global application       | send money                                                               | string       |
            | application name         | enviar dinero solicitado                                                 | string       |
            | application type         | operativa                                                                | string       |
            | application step         | 1 cuenta de origen                                                       | string       |
            | fulfillment model        | online                                                                   | string       |
            | product primary category | cuentas                                                                  | string       |
            | internal campaign        |                                                                          | empty array  |
            | optimization attributes  |                                                                          | empty array  |

    @ANA_CODICP005
    @analytics @MX @backend(test) @vbank
    @web @ios @android @manual @JIRA.GLOMOMX-159689
    Scenario: The user accesses screen pay money select account and continue with the process - Analytic App started
        Given a user with the following criteria
            | criteria    |
            | enroll codi |
        And the user accesses to dashboard
        And the user goes to "screen CoDi phone payment" using deeplink navigation
        When the user continues with the process and selects the account
        Then the device contains the following variables
            | item                     | value                                                                    | type         |
            | analytics                | analytics/glomo_base                                                     | json schema  |
            | version DL               | 20250414_5.0                                                             | string       |
            | page name                | app:privada:personas:cuentas:enviar dinero solicitado:1 cuenta de origen | string       |
            | level 1                  | cuentas                                                                  | string       |
            | level 2                  | enviar dinero solicitado                                                 | string       |
            | level 3                  | 1 cuenta de origen                                                       | string       |
            | language                 | ES                                                                       | string       |
            | page area                | privada                                                                  | string       |
            | page intent              | transaccion                                                              | string       |
            | channel                  | online                                                                   | string       |
            | page instance ID         | de                                                                       | string       |
            | page info version        | appVersion                                                               | regexp named |
            | page segment             | personas                                                                 | string       |
            | sysEnv                   | app                                                                      | string       |
            | business unit            | BBVA Mexico                                                              | string       |
            | site app name            | App BBVA Mexico                                                          | string       |
            | project name             | Glomo                                                                    | string       |
            | device mobile            | si                                                                       | string       |
            | user userState           | logado                                                                   | string       |
            | profile ID               | profileID                                                                | regexp named |
            | user segment global      | 003001                                                                   | string       |
            | user gender              | gender                                                                   | regexp named |
            | user age                 | age                                                                      | regexp named |
            | global application       | send money                                                               | string       |
            | application name         | enviar dinero solicitado                                                 | string       |
            | application type         | operativa                                                                | string       |
            | application step         | cuenta corriente                                                         | string       |
            | fulfillment model        | online                                                                   | string       |
            | product primary category | cuentas                                                                  | string       |
            | internal campaign        |                                                                          | empty array  |
            | optimization attributes  |                                                                          | empty array  |

    @ANA_CODICP006
    @analytics @MX @backend(test) @vbank
    @web @ios @android @manual @JIRA.GLOMOMX-159689
    Scenario: The user accesses screen account and continue with the process - Analytic Footprint - Page view accounts
        Given a user with the following criteria
            | criteria    |
            | enroll codi |
        When the user accesses to dashboard
        And the user goes to "screen CoDi phone payment" using deeplink navigation
        And the user select pay now
        Then the user selects to see all accounts
        And the device contains the following variables
            | item                    | value                                                         | type             |
            | analytics               | analytics/glomo_base                                          | json schema      |
            | version DL              | 20250414_5.0                                                  | string           |
            | page name               | app:privada:personas:cuentas:enviar dinero solicitado:cuentas | string           |
            | level 1                 | cuentas                                                       | string           |
            | level 2                 | enviar dinero solicitado                                      | string           |
            | level 3                 | cuentas                                                       | string           |
            | language                | ES                                                            | string           |
            | page area               | privada                                                       | string           |
            | page intent             | transaccion                                                   | string           |
            | channel                 | online                                                        | string           |
            | page instance ID        | de                                                            | string           |
            | page info version       | appVersion                                                    | regexp named     |
            | page segment            | personas                                                      | string           |
            | sysEnv                  | app                                                           | string           |
            | business unit           | BBVA Mexico                                                   | string           |
            | site app name           | App BBVA Mexico                                               | string           |
            | project name            | Glomo                                                         | string           |
            | device mobile           | si                                                            | string           |
            | user userState          | logado                                                        | string           |
            | profile ID              | profileID                                                     | regexp named     |
            | user segment global     | 003001                                                        | string           |
            | user gender             | gender                                                        | regexp named     |
            | user age                | age                                                           | regexp named     |
            | internal campaign       |                                                               | empty array      |
            | optimization attributes |                                                               | empty array      |
            | application             |                                                               | empty str object |
            | products attributes     |                                                               | empty array      |

    @ANA_CODICP007
    @analytics @MX @backend(test) @vbank
    @web @ios @android @manual @JIRA.GLOMOMX-159689
    Scenario: The user enters the screen to pay money and makes the payment to continue with the process - Analytic App step 2
        Given a user with the following criteria
            | criteria    |
            | enroll codi |
        And the user accesses to dashboard
        And the user goes to "screen CoDi phone payment" using deeplink navigation
        When the user confirm the payment
        Then the device contains the following variables
            | item                     | value                                                                | type         |
            | analytics                | analytics/glomo_base                                                 | json schema  |
            | version DL               | 20250414_5.0                                                         | string       |
            | page name                | app:privada:personas:cuentas:enviar dinero solicitado:2 confirmacion | string       |
            | level 1                  | cuentas                                                              | string       |
            | level 2                  | enviar dinero solicitado                                             | string       |
            | level 3                  | 2 confirmacion                                                       | string       |
            | language                 | ES                                                                   | string       |
            | page area                | privada                                                              | string       |
            | page intent              | transaccion                                                          | string       |
            | channel                  | online                                                               | string       |
            | page instance ID         | de                                                                   | string       |
            | page info version        | appVersion                                                           | regexp named |
            | page segment             | personas                                                             | string       |
            | sysEnv                   | app                                                                  | string       |
            | business unit            | BBVA Mexico                                                          | string       |
            | site app name            | App BBVA Mexico                                                      | string       |
            | project name             | Glomo                                                                | string       |
            | device mobile            | si                                                                   | string       |
            | user userState           | logado                                                               | string       |
            | profile ID               | profileID                                                            | regexp named |
            | user segment global      | 003001                                                               | string       |
            | user gender              | gender                                                               | regexp named |
            | user age                 | age                                                                  | regexp named |
            | global application       | send money                                                           | string       |
            | application name         | enviar dinero solicitado                                             | string       |
            | application type         | operativa                                                            | string       |
            | application step         | 2 confirmacion                                                       | string       |
            | fulfillment model        | online                                                               | string       |
            | product primary category | cuentas                                                              | string       |
            | product subtype          |                                                                      | string       |
            | product name             | libreton basico                                                      | string       |
            | product amount           | 300                                                                  | string       |
            | product currency         | MXN                                                                  | string       |
            | internal campaign        |                                                                      | empty array  |
            | optimization attributes  |                                                                      | empty array  |

    @ANA_CODICP008
    @analytics @MX @backend(test) @vbank
    @web @ios @android @manual @JIRA.GLOMOMX-159689
    Scenario: The user accesses the OTP screen to sign the authorization and continues the process - Analytics App step 3
        Given a user with the following criteria
            | criteria    |
            | enroll codi |
        And the user accesses to dashboard
        And the user goes to "screen CoDi phone payment" using deeplink navigation
        And the user confirm the payment
        When the user accesses the OTP and confirms authorization
        Then the device contains the following variables
            | item                     | value                                                       | type         |
            | analytics                | analytics/glomo_base                                        | json schema  |
            | version DL               | 20250414_5.0                                                | string       |
            | page name                | app:privada:personas:cuentas:enviar dinero solicitado:3 otp | string       |
            | level 1                  | cuentas                                                     | string       |
            | level 2                  | enviar dinero solicitado                                    | string       |
            | level 3                  | 3 otp                                                       | string       |
            | language                 | ES                                                          | string       |
            | page area                | privada                                                     | string       |
            | page intent              | transaccion                                                 | string       |
            | channel                  | online                                                      | string       |
            | page instance ID         | de                                                          | string       |
            | page info version        | appVersion                                                  | regexp named |
            | page segment             | personas                                                    | string       |
            | sysEnv                   | app                                                         | string       |
            | business unit            | BBVA Mexico                                                 | string       |
            | site app name            | App BBVA Mexico                                             | string       |
            | project name             | Glomo                                                       | string       |
            | device mobile            | si                                                          | string       |
            | user userState           | logado                                                      | string       |
            | profile ID               | profileID                                                   | regexp named |
            | user segment global      | 003001                                                      | string       |
            | user gender              | gender                                                      | regexp named |
            | user age                 | age                                                         | regexp named |
            | global application       | send money                                                  | string       |
            | application name         | enviar dinero solicitado                                    | string       |
            | application type         | operativa                                                   | string       |
            | application step         | 3 otp                                                       | string       |
            | fulfillment model        | online                                                      | string       |
            | custom fields            | firma:token                                                 | string       |
            | product primary category | cuentas                                                     | string       |
            | product subtype          |                                                             | string       |
            | product name             | libreton basico                                             | string       |
            | product amount           | 300                                                         | string       |
            | product currency         | MXN                                                         | string       |
            | internal campaign        |                                                             | empty array  |
            | optimization attributes  |                                                             | empty array  |

    @ANA_CODICP009
    @analytics @MX @backend(test) @vbank
    @web @ios @android @manual @JIRA.GLOMOMX-159689
    Scenario: The user accesses the successful operation screen and finishes the process - Analytics App Completed - finishes
        Given a user with the following criteria
            | criteria    |
            | enroll codi |
        And the user accesses to dashboard
        And the user goes to "screen CoDi phone payment" using deeplink navigation
        And the user confirm the payment
        And the user accesses the OTP and confirms authorization
        When the user finishes the process and exits the screen
        Then the device contains the following variables
            | item                         | value                                                                | type         |
            | analytics                    | analytics/glomo_base                                                 | json schema  |
            | version DL                   | 20250414_5.0                                                         | string       |
            | page name                    | app:privada:personas:cuentas:enviar dinero solicitado:pagina exitosa | string       |
            | level 1                      | cuentas                                                              | string       |
            | level 2                      | enviar dinero solicitado                                             | string       |
            | level 3                      | pagina exitosa                                                       | string       |
            | language                     | ES                                                                   | string       |
            | page area                    | privada                                                              | string       |
            | page intent                  | transaccion                                                          | string       |
            | channel                      | online                                                               | string       |
            | page instance ID             | de                                                                   | string       |
            | page info version            | appVersion                                                           | regexp named |
            | page segment                 | personas                                                             | string       |
            | sysEnv                       | app                                                                  | string       |
            | business unit                | BBVA Mexico                                                          | string       |
            | site app name                | App BBVA Mexico                                                      | string       |
            | project name                 | Glomo                                                                | string       |
            | device mobile                | si                                                                   | string       |
            | user userState               | logado                                                               | string       |
            | profile ID                   | profileID                                                            | regexp named |
            | user segment global          | 003001                                                               | string       |
            | user gender                  | gender                                                               | regexp named |
            | user age                     | age                                                                  | regexp named |
            | global application           | send money                                                           | string       |
            | application name             | enviar dinero solicitado                                             | string       |
            | application type             | operativa                                                            | string       |
            | application step             | pagina exitosa                                                       | string       |
            | fulfillment model            | online                                                               | string       |
            | custom fields                | firma:token                                                          | string       |
            | application state            | finalizado                                                           | string       |
            | application operation number | 12121323                                                             | string       |
            | product primary category     | cuentas                                                              | string       |
            | product subtype              |                                                                      | string       |
            | product name                 | libreton basico                                                      | string       |
            | product amount               | 300                                                                  | string       |
            | product currency             | MXN                                                                  | string       |
            | product state                | finalizado                                                           | string       |
            | internal campaign            |                                                                      | empty array  |
            | optimization attributes      |                                                                      | empty array  |

    @ANA_CODICP010
    @analytics @MX @backend(test) @vbank
    @web @ios @android @manual @JIRA.GLOMOMX-159689
    Scenario: The user accesses the OTP screen to confirm the authorization but an operation not performed error is triggered - Analytics ERROR - operation not performed
        Given a user with the following criteria
            | criteria    |
            | enroll codi |
        And the user accesses to dashboard
        And the user goes to "screen CoDi phone payment" using deeplink navigation
        And the user confirm the payment
        And the user accesses the OTP and confirms authorization
        When the user views operation not performed error is triggered
        Then the device contains the following variables
            | item                    | value                                                                   | type             |
            | analytics               | analytics/glomo_base                                                    | json schema      |
            | version DL              | 20250414_5.0                                                            | string           |
            | page name               | app:privada:personas:cuentas:enviar dinero solicitado:error de servicio | string           |
            | level 1                 | cuentas                                                                 | string           |
            | level 2                 | enviar dinero solicitado                                                | string           |
            | level 3                 | error de servicio                                                       | string           |
            | error page              | error de servicio                                                       | string           |
            | language                | ES                                                                      | string           |
            | page area               | privada                                                                 | string           |
            | page intent             | transaccion                                                             | string           |
            | channel                 | online                                                                  | string           |
            | page instance ID        | de                                                                      | string           |
            | page info version       | appVersion                                                              | regexp named     |
            | page segment            | personas                                                                | string           |
            | sysEnv                  | app                                                                     | string           |
            | business unit           | BBVA Mexico                                                             | string           |
            | site app name           | App BBVA Mexico                                                         | string           |
            | project name            | Glomo                                                                   | string           |
            | device mobile           | si                                                                      | string           |
            | user userState          | logado                                                                  | string           |
            | profile ID              | profileID                                                               | regexp named     |
            | user segment global     | 003001                                                                  | string           |
            | user gender             | gender                                                                  | regexp named     |
            | user age                | age                                                                     | regexp named     |
            | internal campaign       |                                                                         | empty array      |
            | optimization attributes |                                                                         | empty array      |
            | application             |                                                                         | empty str object |
            | products attributes     |                                                                         | empty array      |

    @ANA_CODICP011
    @analytics @MX @backend(test) @vbank
    @web @ios @android @manual @JIRA.GLOMOMX-159689
    Scenario: The user accesses the OTP screen to confirm authorization but a service error is triggered - Analytics ERROR - service error
        Given a user with the following criteria
            | criteria    |
            | enroll codi |
        And the user accesses to dashboard
        And the user goes to "screen CoDi phone payment" using deeplink navigation
        And the user confirm the payment
        And the user accesses the OTP and confirms authorization
        When the user views service error
        Then the device contains the following variables
            | item                    | value                                                                        | type             |
            | analytics               | analytics/glomo_base                                                         | json schema      |
            | version DL              | 20250414_5.0                                                                 | string           |
            | page name               | app:privada:personas:cuentas:enviar dinero solicitado:operacion no realizada | string           |
            | level 1                 | cuentas                                                                      | string           |
            | level 2                 | enviar dinero solicitado                                                     | string           |
            | level 3                 | operacion no realizada                                                       | string           |
            | error page              | operacion no realizada                                                       | string           |
            | language                | ES                                                                           | string           |
            | page area               | privada                                                                      | string           |
            | page intent             | transaccion                                                                  | string           |
            | channel                 | online                                                                       | string           |
            | page instance ID        | de                                                                           | string           |
            | page info version       | appVersion                                                                   | regexp named     |
            | page segment            | personas                                                                     | string           |
            | sysEnv                  | app                                                                          | string           |
            | business unit           | BBVA Mexico                                                                  | string           |
            | site app name           | App BBVA Mexico                                                              | string           |
            | project name            | Glomo                                                                        | string           |
            | device mobile           | si                                                                           | string           |
            | user userState          | logado                                                                       | string           |
            | profile ID              | profileID                                                                    | regexp named     |
            | user segment global     | 003001                                                                       | string           |
            | user gender             | gender                                                                       | regexp named     |
            | user age                | age                                                                          | regexp named     |
            | internal campaign       |                                                                              | empty array      |
            | optimization attributes |                                                                              | empty array      |
            | application             |                                                                              | empty str object |
            | products attributes     |                                                                              | empty array      |

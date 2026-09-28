@codiPhoneRequestAnalytics
Feature: Analytics - CoDi operative - codiPhoneRequest

    @ANA_CODICR001
    @analytics @MX @backend(test) @vbank
    @web @ios @android @manual @JIRA.GLOMOMX-159689
    Scenario: The user accesses the screen to request money with cellphone - Analytics App Page Visit
        Given a user with the following criteria
            | criteria    |
            | enroll codi |
        And the user accesses to dashboard
        When the user goes to "screen CoDi phone request" using deeplink navigation
        Then the device contains the following variables
            | item                     | value                                                            | type         |
            | analytics                | analytics/glomo_base                                             | json schema  |
            | version DL               | 20250414_5.0                                                     | string       |
            | page name                | app:privada:personas:cuentas:pedir dinero:1 cuenta para deposito | string       |
            | level 1                  | cuentas                                                          | string       |
            | level 2                  | pedir dinero                                                     | string       |
            | level 3                  | 1 cuenta para deposito                                           | string       |
            | language                 | ES                                                               | string       |
            | page area                | privada                                                          | string       |
            | page intent              | transaccion                                                      | string       |
            | channel                  | online                                                           | string       |
            | page instance ID         | de                                                               | string       |
            | page info version        | appVersion                                                       | regexp named |
            | page segment             | personas                                                         | string       |
            | sysEnv                   | app                                                              | string       |
            | business unit            | BBVA Mexico                                                      | string       |
            | site app name            | App BBVA Mexico                                                  | string       |
            | project name             | Glomo                                                            | string       |
            | device mobile            | si                                                               | string       |
            | user userState           | logado                                                           | string       |
            | profile ID               | profileID                                                        | regexp named |
            | user segment global      | 003001                                                           | string       |
            | user gender              | gender                                                           | regexp named |
            | user age                 | age                                                              | regexp named |
            | global application       | send money                                                       | string       |
            | application name         | pedir dinero                                                     | string       |
            | application type         | autogestion                                                      | string       |
            | application step         | 1 cuenta para deposito                                           | string       |
            | fulfillment model        | online                                                           | string       |
            | product primary category | cuentas                                                          | string       |
            | internal campaign        |                                                                  | empty array  |
            | optimization attributes  |                                                                  | empty array  |

    @ANA_CODICR002
    @analytics @MX @backend(test) @vbank
    @web @ios @android @manual @JIRA.GLOMOMX-159689
    Scenario: The user accesses the screen to request money with cellphone and continues the process - Analytics App Started
        Given a user with the following criteria
            | criteria    |
            | enroll codi |
        And the user accesses to dashboard
        And the user goes to "screen CoDi phone request" using deeplink navigation
        When the user select account to deposit
        Then the device contains the following variables
            | item                     | value                                                            | type         |
            | analytics                | analytics/glomo_base                                             | json schema  |
            | version DL               | 20250414_5.0                                                     | string       |
            | page name                | app:privada:personas:cuentas:pedir dinero:1 cuenta para deposito | string       |
            | level 1                  | cuentas                                                          | string       |
            | level 2                  | pedir dinero                                                     | string       |
            | level 3                  | 1 cuenta para deposito                                           | string       |
            | language                 | ES                                                               | string       |
            | page area                | privada                                                          | string       |
            | page intent              | transaccion                                                      | string       |
            | channel                  | online                                                           | string       |
            | page instance ID         | de                                                               | string       |
            | page info version        | appVersion                                                       | regexp named |
            | page segment             | personas                                                         | string       |
            | sysEnv                   | app                                                              | string       |
            | business unit            | BBVA Mexico                                                      | string       |
            | site app name            | App BBVA Mexico                                                  | string       |
            | project name             | Glomo                                                            | string       |
            | device mobile            | si                                                               | string       |
            | user userState           | logado                                                           | string       |
            | profile ID               | profileID                                                        | regexp named |
            | user segment global      | 003001                                                           | string       |
            | user gender              | gender                                                           | regexp named |
            | user age                 | age                                                              | regexp named |
            | global application       | send money                                                       | string       |
            | application name         | pedir dinero                                                     | string       |
            | application type         | autogestion                                                      | string       |
            | application step         | cuenta corriente                                                 | string       |
            | fulfillment model        | online                                                           | string       |
            | product primary category | cuentas                                                          | string       |
            | internal campaign        |                                                                  | empty array  |
            | optimization attributes  |                                                                  | empty array  |

    @ANA_CODICR003
    @analytics @MX @backend(test) @vbank
    @web @ios @android @manual @JIRA.GLOMOMX-159689
    Scenario: The user accesses the screen invites a contact and continue with the process - Analytics Footprint - See page invite your contact
        Given a user with the following criteria
            | criteria    |
            | enroll codi |
        And the user accesses to dashboard
        And the user goes to "screen CoDi phone request" using deeplink navigation
        And the user select account to deposit
        When the user enters a contact not registered in Codi
        Then the device contains the following variables
            | item                    | value                                                           | type             |
            | analytics               | analytics/glomo_base                                            | json schema      |
            | version DL              | 20250414_5.0                                                    | string           |
            | page name               | app:privada:personas:cuentas:pedir dinero:invitar a tu contacto | string           |
            | level 1                 | cuentas                                                         | string           |
            | level 2                 | pedir dinero                                                    | string           |
            | level 3                 | invitar a tu contacto                                           | string           |
            | language                | ES                                                              | string           |
            | page area               | privada                                                         | string           |
            | page intent             | transaccion                                                     | string           |
            | channel                 | online                                                          | string           |
            | page instance ID        | de                                                              | string           |
            | page info version       | appVersion                                                      | regexp named     |
            | page segment            | personas                                                        | string           |
            | sysEnv                  | app                                                             | string           |
            | business unit           | BBVA Mexico                                                     | string           |
            | site app name           | App BBVA Mexico                                                 | string           |
            | project name            | Glomo                                                           | string           |
            | device mobile           | si                                                              | string           |
            | user userState          | logado                                                          | string           |
            | profile ID              | profileID                                                       | regexp named     |
            | user segment global     | 003001                                                          | string           |
            | user gender             | gender                                                          | regexp named     |
            | user age                | age                                                             | regexp named     |
            | internal campaign       |                                                                 | empty array      |
            | optimization attributes |                                                                 | empty array      |
            | application             |                                                                 | empty str object |
            | products attributes     |                                                                 | empty array      |

    @ANA_CODICR004
    @analytics @MX @backend(test) @vbank
    @web @ios @android @manual @JIRA.GLOMOMX-159689
    Scenario: The user accesses the invite contact screen and send internal link for register in Codi and continue with the process - Analytics Internal Link - Invite contact
        Given a user with the following criteria
            | criteria    |
            | enroll codi |
        And the user accesses to dashboard
        And the user goes to "screen CoDi phone request" using deeplink navigation
        When the user selects account and unregistered user to codi
        Then the device contains the following variables
            | item                    | value                                                           | type             |
            | analytics               | analytics/glomo_base                                            | json schema      |
            | version DL              | 20250414_5.0                                                    | string           |
            | page name               | app:privada:personas:cuentas:pedir dinero:invitar a tu contacto | string           |
            | level 1                 | cuentas                                                         | string           |
            | level 2                 | pedir dinero                                                    | string           |
            | level 3                 | invitar a tu contacto                                           | string           |
            | language                | ES                                                              | string           |
            | page area               | privada                                                         | string           |
            | page intent             | transaccion                                                     | string           |
            | channel                 | online                                                          | string           |
            | page instance ID        | de                                                              | string           |
            | page info version       | appVersion                                                      | regexp named     |
            | page segment            | personas                                                        | string           |
            | sysEnv                  | app                                                             | string           |
            | business unit           | BBVA Mexico                                                     | string           |
            | site app name           | App BBVA Mexico                                                 | string           |
            | project name            | Glomo                                                           | string           |
            | link name               | invitar contacto                                                | string           |
            | device mobile           | si                                                              | string           |
            | user userState          | logado                                                          | string           |
            | profile ID              | profileID                                                       | regexp named     |
            | user segment global     | 003001                                                          | string           |
            | user gender             | gender                                                          | regexp named     |
            | user age                | age                                                             | regexp named     |
            | internal campaign       |                                                                 | empty array      |
            | optimization attributes |                                                                 | empty array      |
            | application             |                                                                 | empty str object |
            | products attributes     |                                                                 | empty array      |

    @ANA_CODICR005
    @analytics @MX @backend(test) @vbank
    @web @ios @android @manual @JIRA.GLOMOMX-159689
    Scenario: The user accesses the screen to request money with cellphone and enters a contact to continue the process - Analytics App step 2
        Given a user with the following criteria
            | criteria    |
            | enroll codi |
        And the user accesses to dashboard
        And the user goes to "screen CoDi phone request" using deeplink navigation
        And the user select account to deposit
        When the user enters a contact
        Then the device contains the following variables
            | item                     | value                                                | type         |
            | analytics                | analytics/glomo_base                                 | json schema  |
            | version DL               | 20250414_5.0                                         | string       |
            | page name                | app:privada:personas:cuentas:pedir dinero:2 contacto | string       |
            | level 1                  | cuentas                                              | string       |
            | level 2                  | pedir dinero                                         | string       |
            | level 3                  | 2 contacto                                           | string       |
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
            | global application       | send money                                           | string       |
            | application name         | pedir dinero                                         | string       |
            | application type         | autogestion                                          | string       |
            | application step         | 2 contacto                                           | string       |
            | fulfillment model        | online                                               | string       |
            | product primary category | cuentas                                              | string       |
            | product subtype          |                                                      | string       |
            | product name             | libreton basico                                      | string       |
            | internal campaign        |                                                      | empty array  |
            | optimization attributes  |                                                      | empty array  |

    @ANA_CODICR006
    @analytics @MX @backend(test) @vbank
    @web @ios @android @manual @JIRA.GLOMOMX-159689
    Scenario: The user accesses the money request screen with cellphone to indicate an amount and continue with the process - Analytics App step 3
        Given a user with the following criteria
            | criteria    |
            | enroll codi |
        And the user accesses to dashboard
        And the user goes to "screen CoDi phone request" using deeplink navigation
        And the user selects account and registered user with codi
        When the user indicates how much they want to request
        Then the device contains the following variables
            | item                     | value                                               | type         |
            | analytics                | analytics/glomo_base                                | json schema  |
            | version DL               | 20250414_5.0                                        | string       |
            | page name                | app:privada:personas:cuentas:pedir dinero:3 importe | string       |
            | level 1                  | cuentas                                             | string       |
            | level 2                  | pedir dinero                                        | string       |
            | level 3                  | 3 importe                                           | string       |
            | language                 | ES                                                  | string       |
            | page area                | privada                                             | string       |
            | page intent              | transaccion                                         | string       |
            | channel                  | online                                              | string       |
            | page instance ID         | de                                                  | string       |
            | page info version        | appVersion                                          | regexp named |
            | page segment             | personas                                            | string       |
            | sysEnv                   | app                                                 | string       |
            | business unit            | BBVA Mexico                                         | string       |
            | site app name            | App BBVA Mexico                                     | string       |
            | project name             | Glomo                                               | string       |
            | device mobile            | si                                                  | string       |
            | user userState           | logado                                              | string       |
            | profile ID               | profileID                                           | regexp named |
            | user segment global      | 003001                                              | string       |
            | user gender              | gender                                              | regexp named |
            | user age                 | age                                                 | regexp named |
            | global application       | send money                                          | string       |
            | application name         | pedir dinero                                        | string       |
            | application type         | autogestion                                         | string       |
            | application step         | 3 importe                                           | string       |
            | fulfillment model        | online                                              | string       |
            | product primary category | cuentas                                             | string       |
            | product subtype          |                                                     | string       |
            | product name             | libreton basico                                     | string       |
            | internal campaign        |                                                     | empty array  |
            | optimization attributes  |                                                     | empty array  |

    @ANA_CODICR007
    @analytics @MX @backend(test) @vbank
    @web @ios @android @manual @JIRA.GLOMOMX-159689
    Scenario: The user accesses screen the money request with cellphone to indicate concept and continue with the process - Analytics App step 4
        Given a user with the following criteria
            | criteria    |
            | enroll codi |
        And the user accesses to dashboard
        And the user goes to "screen CoDi phone request" using deeplink navigation
        And the user selects account and registered user with codi
        And the user indicates how much they want to request
        When the user enters a concept to the payment request
        Then the device contains the following variables
            | item                     | value                                                | type         |
            | analytics                | analytics/glomo_base                                 | json schema  |
            | version DL               | 20250414_5.0                                         | string       |
            | page name                | app:privada:personas:cuentas:pedir dinero:4 concepto | string       |
            | level 1                  | cuentas                                              | string       |
            | level 2                  | pedir dinero                                         | string       |
            | level 3                  | 4 concepto                                           | string       |
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
            | global application       | send money                                           | string       |
            | application name         | pedir dinero                                         | string       |
            | application type         | autogestion                                          | string       |
            | application step         | 4 concepto                                           | string       |
            | fulfillment model        | online                                               | string       |
            | product primary category | cuentas                                              | string       |
            | product subtype          |                                                      | string       |
            | product name             | libreton basico                                      | string       |
            | product amount           | 300                                                  | string       |
            | product currency         | MXN                                                  | string       |
            | internal campaign        |                                                      | empty array  |
            | optimization attributes  |                                                      | empty array  |

    @ANA_CODICR008
    @analytics @MX @backend(test) @vbank
    @web @ios @android @manual @JIRA.GLOMOMX-159689
    Scenario: The user accesses screen of request money with cellphone to confirm and continue the process - Analytics App step 5
        Given a user with the following criteria
            | criteria    |
            | enroll codi |
        And the user accesses to dashboard
        And the user goes to "screen CoDi phone request" using deeplink navigation
        When the user fills out all the fields for payment requests
        Then the device contains the following variables
            | item                     | value                                                    | type         |
            | analytics                | analytics/glomo_base                                     | json schema  |
            | version DL               | 20250414_5.0                                             | string       |
            | page name                | app:privada:personas:cuentas:pedir dinero:5 confirmacion | string       |
            | level 1                  | cuentas                                                  | string       |
            | level 2                  | pedir dinero                                             | string       |
            | level 3                  | 5 confirmacion                                           | string       |
            | language                 | ES                                                       | string       |
            | page area                | privada                                                  | string       |
            | page intent              | transaccion                                              | string       |
            | channel                  | online                                                   | string       |
            | page instance ID         | de                                                       | string       |
            | page info version        | appVersion                                               | regexp named |
            | page segment             | personas                                                 | string       |
            | sysEnv                   | app                                                      | string       |
            | business unit            | BBVA Mexico                                              | string       |
            | site app name            | App BBVA Mexico                                          | string       |
            | project name             | Glomo                                                    | string       |
            | device mobile            | si                                                       | string       |
            | user userState           | logado                                                   | string       |
            | profile ID               | profileID                                                | regexp named |
            | user segment global      | 003001                                                   | string       |
            | user gender              | gender                                                   | regexp named |
            | user age                 | age                                                      | regexp named |
            | global application       | send money                                               | string       |
            | application name         | pedir dinero                                             | string       |
            | application type         | autogestion                                              | string       |
            | application step         | 5 confirmacion                                           | string       |
            | fulfillment model        | online                                                   | string       |
            | product primary category | cuentas                                                  | string       |
            | product subtype          |                                                          | string       |
            | product name             | libreton basico                                          | string       |
            | product amount           | 300                                                      | string       |
            | product currency         | MXN                                                      | string       |
            | internal campaign        |                                                          | empty array  |
            | optimization attributes  |                                                          | empty array  |

    @ANA_CODICR009
    @analytics @MX @backend(test) @vbank
    @web @ios @android @manual @JIRA.GLOMOMX-159689
    Scenario: The user accesses the screen to request money with cellphone to view the request sent successfully and finishes the process - Analytics App Completed - Finished
        Given a user with the following criteria
            | criteria    |
            | enroll codi |
        And the user accesses to dashboard
        And the user goes to "screen CoDi phone request" using deeplink navigation
        And the user fills out all the fields for payment request
        When the user finishes the process and exits the screen
        Then the device contains the following variables
            | item                         | value                                                    | type         |
            | analytics                    | analytics/glomo_base                                     | json schema  |
            | version DL                   | 20250414_5.0                                             | string       |
            | page name                    | app:privada:personas:cuentas:pedir dinero:pagina exitosa | string       |
            | level 1                      | cuentas                                                  | string       |
            | level 2                      | pedir dinero                                             | string       |
            | level 3                      | pagina exitosa                                           | string       |
            | language                     | ES                                                       | string       |
            | page area                    | privada                                                  | string       |
            | page intent                  | transaccion                                              | string       |
            | channel                      | online                                                   | string       |
            | page instance ID             | de                                                       | string       |
            | page info version            | appVersion                                               | regexp named |
            | page segment                 | personas                                                 | string       |
            | sysEnv                       | app                                                      | string       |
            | business unit                | BBVA Mexico                                              | string       |
            | site app name                | App BBVA Mexico                                          | string       |
            | project name                 | Glomo                                                    | string       |
            | device mobile                | si                                                       | string       |
            | user userState               | logado                                                   | string       |
            | profile ID                   | profileID                                                | regexp named |
            | user segment global          | 003001                                                   | string       |
            | user gender                  | gender                                                   | regexp named |
            | user age                     | age                                                      | regexp named |
            | global application           | send money                                               | string       |
            | application name             | pedir dinero                                             | string       |
            | application type             | autogestion                                              | string       |
            | application step             | pagina exitosa                                           | string       |
            | fulfillment model            | online                                                   | string       |
            | application state            | finalizado                                               | string       |
            | application operation number | 12121323                                                 | string       |
            | product primary category     | cuentas                                                  | string       |
            | product subtype              |                                                          | string       |
            | product name                 | libreton basico                                          | string       |
            | product amount               | 300                                                      | string       |
            | product currency             | MXN                                                      | string       |
            | product state                | finalizado                                               | string       |
            | internal campaign            |                                                          | empty array  |
            | optimization attributes      |                                                          | empty array  |

    @ANA_CODICR010
    @analytics @MX @backend(test) @vbank
    @web @ios @android @manual @JIRA.GLOMOMX-159689
    Scenario: The user accesses the screen request money with cellphone and views codi is not available - Analytics Footprint - Codi is not available
        Given a user with the following criteria
            | criteria    |
            | enroll codi |
        And the user accesses to dashboard
        And the user goes to "screen CoDi phone request" using deeplink navigation
        When the user views Codi is not available
        Then the device contains the following variables
            | item                    | value                                                             | type             |
            | analytics               | analytics/glomo_base                                              | json schema      |
            | version DL              | 20250414_5.0                                                      | string           |
            | page name               | app:privada:personas:cuentas:pedir dinero:codi no esta disponible | string           |
            | level 1                 | cuentas                                                           | string           |
            | level 2                 | pedir dinero                                                      | string           |
            | level 3                 | codi no esta disponible                                           | string           |
            | language                | ES                                                                | string           |
            | page area               | privada                                                           | string           |
            | page intent             | transaccion                                                       | string           |
            | channel                 | online                                                            | string           |
            | page instance ID        | de                                                                | string           |
            | page info version       | appVersion                                                        | regexp named     |
            | page segment            | personas                                                          | string           |
            | sysEnv                  | app                                                               | string           |
            | business unit           | BBVA Mexico                                                       | string           |
            | site app name           | App BBVA Mexico                                                   | string           |
            | project name            | Glomo                                                             | string           |
            | device mobile           | si                                                                | string           |
            | user userState          | logado                                                            | string           |
            | profile ID              | profileID                                                         | regexp named     |
            | user segment global     | 003001                                                            | string           |
            | user gender             | gender                                                            | regexp named     |
            | user age                | age                                                               | regexp named     |
            | internal campaign       |                                                                   | empty array      |
            | optimization attributes |                                                                   | empty array      |
            | application             |                                                                   | empty str object |
            | products attributes     |                                                                   | empty array      |

    @ANA_CODIQP011
    @analytics @MX @backend(test) @vbank
    @web @ios @android @manual @JIRA.GLOMOMX-159689
    Scenario: The user accesses screen resquest money with cellphone and a connection error is generated - Analytics Error - Generated connection error
        Given a user with the following criteria
            | criteria    |
            | enroll codi |
        And the user accesses to dashboard
        And the user goes to "screen CoDi phone request" using deeplink navigation
        When the user is denied a session due to a generic connection error
        Then the device contains the following variables
            | item                    | value                                                       | type             |
            | analytics               | analytics/glomo_base                                        | json schema      |
            | version DL              | 20250414_5.0                                                | string           |
            | page name               | app:privada:personas:cuentas:pedir dinero:error de conexion | string           |
            | level 1                 | cuentas                                                     | string           |
            | level 2                 | pedir dinero                                                | string           |
            | level 3                 | error de conexion                                           | string           |
            | error page              | error de conexion                                           | string           |
            | language                | ES                                                          | string           |
            | page area               | privada                                                     | string           |
            | page intent             | transaccion                                                 | string           |
            | channel                 | online                                                      | string           |
            | page instance ID        | de                                                          | string           |
            | page info version       | appVersion                                                  | regexp named     |
            | page segment            | personas                                                    | string           |
            | sysEnv                  | app                                                         | string           |
            | business unit           | BBVA Mexico                                                 | string           |
            | site app name           | App BBVA Mexico                                             | string           |
            | project name            | Glomo                                                       | string           |
            | device mobile           | si                                                          | string           |
            | user userState          | logado                                                      | string           |
            | profile ID              | profileID                                                   | regexp named     |
            | user segment global     | 003001                                                      | string           |
            | user gender             | gender                                                      | regexp named     |
            | user age                | age                                                         | regexp named     |
            | internal campaign       |                                                             | empty array      |
            | optimization attributes |                                                             | empty array      |
            | application             |                                                             | empty str object |
            | products attributes     |                                                             | empty array      |

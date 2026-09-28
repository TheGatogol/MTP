@frequentOperationsAnalytics
Feature: Analytics - Frequent Operations

    @ANA_EVENT_FEFO001
    @MX
    @analytics
    @vbank @backend(test)
    @web @ios @android
    @web-done
    Scenario: The user has a pending frequent operation of type interbank transfer - App On Click Start
        Given a user with the following criteria
            | criteria                    |
            | frequent operations pending |
        And the user accesses to dashboard
        And the analytics interceptor service is initiated
        When the user opens the notification card
        Then the analytics events contains the following variables
            | item                                         | value                                                                             | type         | event              |
            | analytics                                    | analytics/glomo_base                                                              | json schema  | App On Click Start |
            | version DL                                   | 20250414_5.0                                                                      | string       | App On Click Start |
            | page name                                    | app:privada:personas:posicion global                                              | string       | App On Click Start |
            | level 1                                      | posicion global                                                                   | string       | App On Click Start |
            | language                                     | ES                                                                                | string       | App On Click Start |
            | page area                                    | privada                                                                           | string       | App On Click Start |
            | page intent                                  | informacion                                                                       | string       | App On Click Start |
            | channel                                      | online                                                                            | string       | App On Click Start |
            | page instance ID                             | de                                                                                | string       | App On Click Start |
            | page info version                            | appVersion                                                                        | regexp named | App On Click Start |
            | page segment                                 | personas                                                                          | string       | App On Click Start |
            | sysEnv                                       | app                                                                               | string       | App On Click Start |
            | business unit                                | BBVA Mexico                                                                       | string       | App On Click Start |
            | site app name                                | App BBVA Mexico                                                                   | string       | App On Click Start |
            | project name                                 | Glomo                                                                             | string       | App On Click Start |
            | device mobile                                | si                                                                                | string       | App On Click Start |
            | user userState                               | logado                                                                            | string       | App On Click Start |
            | profile ID                                   | profileID                                                                         | regexp named | App On Click Start |
            | user segment global                          | 003001                                                                            | string       | App On Click Start |
            | user gender                                  | gender                                                                            | regexp named | App On Click Start |
            | user age                                     | age                                                                               | regexp named | App On Click Start |
            | global application                           | smart frequent operation                                                          | string       | App On Click Start |
            | application name                             | realizar operacion frecuente inteligente                                          | string       | App On Click Start |
            | application type                             | operativa                                                                         | string       | App On Click Start |
            | application step                             | transferir ahora                                                                  | string       | App On Click Start |
            | fulfillment model                            | online                                                                            | string       | App On Click Start |
            | application typology                         | journey operaciones frecuentes                                                    | string       | App On Click Start |
            | application process                          | transferencia otros bancos                                                        | string       | App On Click Start |
            | custom fields                                | id operacion frecuente:MHhiQkY0MGUtcHktNVVTRkxmWFlJdjJvTFQ4YktC                   | string       | App On Click Start |
            | internal campaign attributes location        | dashboard--superior-1-10                                                          | string       | App On Click Start |
            | internal campaign attributes campaign format | card                                                                              | string       | App On Click Start |
            | internal campaign attributes collective code | AD-                                                                               | string       | App On Click Start |
            | internal campaign attributes campaign name   | -en estos dias sueles transferir a tu cuenta                                      | string       | App On Click Start |
            | internal campaign attributes product         | cuentas                                                                           | string       | App On Click Start |
            | internal campaign attributes product code    |                                                                                   | string       | App On Click Start |
            | internal campaign attributes quantity        | 20000                                                                             | string       | App On Click Start |
            | internal campaign event name                 | IntCmpClick                                                                       | string       | App On Click Start |
            | internal campaign site action name           | dashboard--superior-1-10:card:AD-:-en estos dias sueles transferir a tu cuenta::: | string       | App On Click Start |
            | optimization attributes                      |                                                                                   | empty array  | App On Click Start |
            | products attributes                          |                                                                                   | empty array  | App On Click Start |

    @ANA_EVENT_FEFO002
    @MX
    @analytics
    @vbank @backend(test)
    @web @ios @android
    @web-done
    Scenario: The user tries to perform a frequent operation with enough balance - Page View
        Given a user with the following criteria
            | criteria                           |
            | frequent operations enough balance |
        And the user accesses to dashboard
        And the analytics interceptor service is initiated
        When the user opens the notification card
        Then the analytics events contains the following variables
            | item                    | value                                                                  | type             | event     |
            | analytics               | analytics/glomo_base                                                   | json schema      | Page View |
            | version DL              | 20250414_5.0                                                           | string           | Page View |
            | page name               | app:privada:personas:operaciones frecuentes:transferencias:saldo menor | string           | Page View |
            | level 1                 | operaciones frecuentes                                                 | string           | Page View |
            | level 2                 | transferencias                                                         | string           | Page View |
            | level 3                 | saldo menor                                                            | string           | Page View |
            | language                | ES                                                                     | string           | Page View |
            | page area               | privada                                                                | string           | Page View |
            | page intent             | informacion                                                            | string           | Page View |
            | channel                 | online                                                                 | string           | Page View |
            | page instance ID        | de                                                                     | string           | Page View |
            | page info version       | appVersion                                                             | regexp named     | Page View |
            | page segment            | personas                                                               | string           | Page View |
            | sysEnv                  | app                                                                    | string           | Page View |
            | business unit           | BBVA Mexico                                                            | string           | Page View |
            | site app name           | App BBVA Mexico                                                        | string           | Page View |
            | project name            | Glomo                                                                  | string           | Page View |
            | device mobile           | si                                                                     | string           | Page View |
            | user userState          | logado                                                                 | string           | Page View |
            | profile ID              | profileID                                                              | regexp named     | Page View |
            | user segment global     | 003001                                                                 | string           | Page View |
            | user gender             | gender                                                                 | regexp named     | Page View |
            | user age                | age                                                                    | regexp named     | Page View |
            | internal campaign       |                                                                        | empty array      | Page View |
            | optimization attributes |                                                                        | empty array      | Page View |
            | application             |                                                                        | empty str object | Page View |
            | products attributes     |                                                                        | empty array      | Page View |

    @ANA_EVENT_FEFO003
    @MX
    @analytics
    @vbank @backend(test)
    @web @ios @android
    @web-done
    Scenario: The user tries to perform a frequent operation with insufficient balance - Page View
        Given a user with the following criteria
            | criteria                                 |
            | frequent operations insufficient balance |
        And the user accesses to dashboard
        And the analytics interceptor service is initiated
        When the user opens the notification card
        Then the analytics events contains the following variables
            | item                    | value                                                                         | type             | event     |
            | analytics               | analytics/glomo_base                                                          | json schema      | Page View |
            | version DL              | 20250414_5.0                                                                  | string           | Page View |
            | page name               | app:privada:personas:operaciones frecuentes:transferencias:saldo insuficiente | string           | Page View |
            | level 1                 | operaciones frecuentes                                                        | string           | Page View |
            | level 2                 | transferencias                                                                | string           | Page View |
            | level 3                 | saldo insuficiente                                                            | string           | Page View |
            | language                | ES                                                                            | string           | Page View |
            | page area               | privada                                                                       | string           | Page View |
            | page intent             | informacion                                                                   | string           | Page View |
            | channel                 | online                                                                        | string           | Page View |
            | page instance ID        | de                                                                            | string           | Page View |
            | page info version       | appVersion                                                                    | regexp named     | Page View |
            | page segment            | personas                                                                      | string           | Page View |
            | sysEnv                  | app                                                                           | string           | Page View |
            | business unit           | BBVA Mexico                                                                   | string           | Page View |
            | site app name           | App BBVA Mexico                                                               | string           | Page View |
            | project name            | Glomo                                                                         | string           | Page View |
            | device mobile           | si                                                                            | string           | Page View |
            | user userState          | logado                                                                        | string           | Page View |
            | profile ID              | profileID                                                                     | regexp named     | Page View |
            | user segment global     | 003001                                                                        | string           | Page View |
            | user gender             | gender                                                                        | regexp named     | Page View |
            | user age                | age                                                                           | regexp named     | Page View |
            | internal campaign       |                                                                               | empty array      | Page View |
            | optimization attributes |                                                                               | empty array      | Page View |
            | application             |                                                                               | empty str object | Page View |
            | products attributes     |                                                                               | empty array      | Page View |

    @ANA_EVENT_FEFO004
    @MX
    @analytics
    @vbank @backend(test)
    @web @ios @android
    @web-done
    Scenario: The user tries to perform a frequent operation (previous amount) with insufficient balance  - Page View
        Given a user with the following criteria
            | criteria                                 |
            | frequent operations insufficient balance |
        And the user accesses to dashboard
        And the analytics interceptor service is initiated
        When the user opens the notification card
        Then the analytics events contains the following variables
            | item                    | value                                                                                          | type             | event     |
            | analytics               | analytics/glomo_base                                                                           | json schema      | Page View |
            | version DL              | 20250414_5.0                                                                                   | string           | Page View |
            | page name               | app:privada:personas:operaciones frecuentes:transferencias:saldo menor a la operacion anterior | string           | Page View |
            | level 1                 | operaciones frecuentes                                                                         | string           | Page View |
            | level 2                 | transferencias                                                                                 | string           | Page View |
            | level 3                 | saldo menor a la operacion anterior                                                            | string           | Page View |
            | language                | ES                                                                                             | string           | Page View |
            | page area               | privada                                                                                        | string           | Page View |
            | page intent             | informacion                                                                                    | string           | Page View |
            | channel                 | online                                                                                         | string           | Page View |
            | page instance ID        | de                                                                                             | string           | Page View |
            | page info version       | appVersion                                                                                     | regexp named     | Page View |
            | page segment            | personas                                                                                       | string           | Page View |
            | sysEnv                  | app                                                                                            | string           | Page View |
            | business unit           | BBVA Mexico                                                                                    | string           | Page View |
            | site app name           | App BBVA Mexico                                                                                | string           | Page View |
            | project name            | Glomo                                                                                          | string           | Page View |
            | device mobile           | si                                                                                             | string           | Page View |
            | user userState          | logado                                                                                         | string           | Page View |
            | profile ID              | profileID                                                                                      | regexp named     | Page View |
            | user segment global     | 003001                                                                                         | string           | Page View |
            | user gender             | gender                                                                                         | regexp named     | Page View |
            | user age                | age                                                                                            | regexp named     | Page View |
            | internal campaign       |                                                                                                | empty array      | Page View |
            | optimization attributes |                                                                                                | empty array      | Page View |
            | application             |                                                                                                | empty str object | Page View |
            | products attributes     |                                                                                                | empty array      | Page View |

    @ANA_EVENT_FEFO005
    @MX
    @analytics
    @vbank @backend(test)
    @web @ios @android
    @web-done
    Scenario: The user closes frequent operation card - Interaction Link
        Given a user with the following criteria
            | criteria                    |
            | frequent operations pending |
        And the user accesses to dashboard
        And the analytics interceptor service is initiated
        When the user closes the notification card
        Then the analytics events contains the following variables
            | item                    | value                                      | type             | event            |
            | analytics               | analytics/glomo_base                       | json schema      | Interaction Link |
            | version DL              | 20250414_5.0                               | string           | Interaction Link |
            | page name               | app:privada:personas:posicion global       | string           | Interaction Link |
            | level 1                 | posicion global                            | string           | Interaction Link |
            | language                | ES                                         | string           | Interaction Link |
            | page area               | privada                                    | string           | Interaction Link |
            | page intent             | informacion                                | string           | Interaction Link |
            | channel                 | online                                     | string           | Interaction Link |
            | page instance ID        | de                                         | string           | Interaction Link |
            | page info version       | appVersion                                 | regexp named     | Interaction Link |
            | page segment            | personas                                   | string           | Interaction Link |
            | sysEnv                  | app                                        | string           | Interaction Link |
            | business unit           | BBVA Mexico                                | string           | Interaction Link |
            | site app name           | App BBVA Mexico                            | string           | Interaction Link |
            | project name            | Glomo                                      | string           | Interaction Link |
            | device mobile           | si                                         | string           | Interaction Link |
            | user userState          | logado                                     | string           | Interaction Link |
            | profile ID              | profileID                                  | regexp named     | Interaction Link |
            | user segment global     | 003001                                     | string           | Interaction Link |
            | user gender             | gender                                     | regexp named     | Interaction Link |
            | user age                | age                                        | regexp named     | Interaction Link |
            | interaction level       | cerrar notificacion operaciones frecuentes | string           | Interaction Link |
            | internal campaign       |                                            | empty array      | Interaction Link |
            | optimization attributes |                                            | empty array      | Interaction Link |
            | application             |                                            | empty str object | Interaction Link |
            | products attributes     |                                            | empty array      | Interaction Link |

    @ANA_EVENT_FEFO006
    @MX
    @analytics
    @vbank @backend(test)
    @web @ios @android
    @web-done
    Scenario: The user closes frequent operation card - App Page Visit
        Given a user with the following criteria
            | criteria                      |
            | frequent operations transfers |
        And the user accesses to dashboard
        And the analytics interceptor service is initiated
        And the user select the card to enter to a frequent transfer
        When the user accesses to execute the operation success page for "own transfer"
        Then the analytics events contains the following variables
            | item                     | value                                                                     | type         | event          |
            | analytics                | analytics/glomo_base                                                      | json schema  | App Page Visit |
            | version DL               | 20250414_5.0                                                              | string       | App Page Visit |
            | page name                | app:privada:personas:operaciones frecuentes:transferencias:1 confirmacion | string       | App Page Visit |
            | level 1                  | operaciones frecuentes                                                    | string       | App Page Visit |
            | level 2                  | transferencias                                                            | string       | App Page Visit |
            | level 3                  | 1 confirmacion                                                            | string       | App Page Visit |
            | language                 | ES                                                                        | string       | App Page Visit |
            | page area                | privada                                                                   | string       | App Page Visit |
            | page intent              | informacion                                                               | string       | App Page Visit |
            | channel                  | online                                                                    | string       | App Page Visit |
            | page instance ID         | de                                                                        | string       | App Page Visit |
            | page info version        | appVersion                                                                | regexp named | App Page Visit |
            | page segment             | personas                                                                  | string       | App Page Visit |
            | sysEnv                   | app                                                                       | string       | App Page Visit |
            | business unit            | BBVA Mexico                                                               | string       | App Page Visit |
            | site app name            | App BBVA Mexico                                                           | string       | App Page Visit |
            | project name             | Glomo                                                                     | string       | App Page Visit |
            | device mobile            | si                                                                        | string       | App Page Visit |
            | user userState           | logado                                                                    | string       | App Page Visit |
            | profile ID               | profileID                                                                 | regexp named | App Page Visit |
            | user segment global      | 003001                                                                    | string       | App Page Visit |
            | user gender              | gender                                                                    | regexp named | App Page Visit |
            | user age                 | age                                                                       | regexp named | App Page Visit |
            | global application       | smart frequent operation                                                  | string       | App Page Visit |
            | application name         | realizar operacion frecuente inteligente                                  | string       | App Page Visit |
            | application type         | operativa                                                                 | string       | App Page Visit |
            | application step         | 1 confirmacion                                                            | string       | App Page Visit |
            | fulfillment model        | online                                                                    | string       | App Page Visit |
            | application typology     | journey transferir                                                        | string       | App Page Visit |
            | application process      | transferencia cuentas propias                                             | string       | App Page Visit |
            | custom fields            | id operacion frecuente: eTc5Nmd2OXctV3JILUhzU3ZMa0taZWl1RHF5NTB4dA==      | string       | App Page Visit |
            | product primary category | cuentas                                                                   | string       | App Page Visit |
            | product subtype          | cuentas ahorro                                                            | string       | App Page Visit |
            | product amount           | 4523                                                                      | number       | App Page Visit |
            | product currency         | MXN                                                                       | string       | App Page Visit |
            | internal campaign        |                                                                           | empty array  | App Page Visit |
            | optimization attributes  |                                                                           | empty array  | App Page Visit |

    @ANA_EVENT_FEFO007
    @MX
    @analytics
    @vbank @backend(test)
    @web @ios @android
    @web-done
    Scenario: The user change the concept of a frequent intelligent own transfer
        Given a user with the following criteria
            | criteria                      |
            | frequent operations transfers |
        And the user accesses to dashboard
        And the user select the card to enter to a frequent transfer
        And the analytics interceptor service is initiated
        When the user edit the transfer concept
        Then the analytics events contains the following variables
            | item                     | value                                                                     | type         | event       |
            | analytics                | analytics/glomo_base                                                      | json schema  | App Started |
            | version DL               | 20250414_5.0                                                              | string       | App Started |
            | page name                | app:privada:personas:operaciones frecuentes:transferencias:1 confirmacion | string       | App Started |
            | level 1                  | operaciones frecuentes                                                    | string       | App Started |
            | level 2                  | transferencias                                                            | string       | App Started |
            | level 3                  | 1 confirmacion                                                            | string       | App Started |
            | language                 | ES                                                                        | string       | App Started |
            | page area                | privada                                                                   | string       | App Started |
            | page intent              | transaccion                                                               | string       | App Started |
            | channel                  | online                                                                    | string       | App Started |
            | page instance ID         | de                                                                        | string       | App Started |
            | page info version        | appVersion                                                                | regexp named | App Started |
            | page segment             | personas                                                                  | string       | App Started |
            | sysEnv                   | app                                                                       | string       | App Started |
            | business unit            | BBVA Mexico                                                               | string       | App Started |
            | site app name            | App BBVA Mexico                                                           | string       | App Started |
            | project name             | Glomo                                                                     | string       | App Started |
            | device mobile            | si                                                                        | string       | App Started |
            | user userState           | logado                                                                    | string       | App Started |
            | profile ID               | profileID                                                                 | regexp named | App Started |
            | user segment global      | 003001                                                                    | string       | App Started |
            | user gender              | gender                                                                    | regexp named | App Started |
            | user age                 | age                                                                       | regexp named | App Started |
            | global application       | smart frequent operation                                                  | string       | App Started |
            | application name         | realizar operacion frecuente inteligente                                  | string       | App Started |
            | application type         | operativa                                                                 | string       | App Started |
            | application step         | cambiar concepto                                                          | string       | App Started |
            | fulfillment model        | online                                                                    | string       | App Started |
            | application typology     | journey transferir                                                        | string       | App Started |
            | application process      | transferencia cuentas propias                                             | string       | App Started |
            | custom fields            | id operacion frecuente: 4358340958GFT9853                                 | string       | App Started |
            | product primary category | cuentas                                                                   | string       | App Started |
            | product subtype          | cuentas ahorro                                                            | string       | App Started |
            | product amount           | 2                                                                         | number       | App Started |
            | product currency         | MXN                                                                       | string       | App Started |
            | internal campaign        |                                                                           | empty array  | App Started |
            | optimization attributes  |                                                                           | empty array  | App Started |

    @ANA_EVENT_FEFO008
    @MX
    @analytics
    @vbank @backend(test)
    @web @ios @android
    @web-done
    Scenario: Screen validation OTP token of internal transfer - App Step 2
        Given a user with the following criteria
            | criteria                         |
            | frequent operations own transfer |
        And the user accesses to dashboard
        And the user select the card to enter to a frequent transfer
        And the user edit the transfer concept
        And the analytics interceptor service is initiated
        When the user accesses to execute the operation success page for "internal transfer"
        Then the analytics events contains the following variables
            | item                     | value                                                                    | type         | event      |
            | analytics                | analytics/glomo_base                                                     | json schema  | App Step 2 |
            | version DL               | 20250414_5.0                                                             | string       | App Step 2 |
            | page name                | app:privada:personas:operaciones frecuentes:transferencias:2 otp         | string       | App Step 2 |
            | level 1                  | operaciones frecuentes                                                   | string       | App Step 2 |
            | level 2                  | transferencias                                                           | string       | App Step 2 |
            | level 3                  | 2 otp                                                                    | string       | App Step 2 |
            | language                 | ES                                                                       | string       | App Step 2 |
            | page area                | privada                                                                  | string       | App Step 2 |
            | page intent              | transaccion                                                              | string       | App Step 2 |
            | channel                  | online                                                                   | string       | App Step 2 |
            | page instance ID         | de                                                                       | string       | App Step 2 |
            | page info version        | appVersion                                                               | regexp named | App Step 2 |
            | page segment             | personas                                                                 | string       | App Step 2 |
            | sysEnv                   | app                                                                      | string       | App Step 2 |
            | business unit            | BBVA Mexico                                                              | string       | App Step 2 |
            | site app name            | App BBVA Mexico                                                          | string       | App Step 2 |
            | project name             | Glomo                                                                    | string       | App Step 2 |
            | device mobile            | si                                                                       | string       | App Step 2 |
            | user userState           | logado                                                                   | string       | App Step 2 |
            | profile ID               | profileID                                                                | regexp named | App Step 2 |
            | user segment global      | 003001                                                                   | string       | App Step 2 |
            | user gender              | gender                                                                   | regexp named | App Step 2 |
            | user age                 | age                                                                      | regexp named | App Step 2 |
            | global application       | smart frequent operation                                                 | string       | App Step 2 |
            | application name         | realizar operacion frecuente inteligente                                 | string       | App Step 2 |
            | application type         | operativa                                                                | string       | App Step 2 |
            | application step         | 2 otp                                                                    | string       | App Step 2 |
            | fulfillment model        | online                                                                   | string       | App Step 2 |
            | application typology     | journey transferir                                                       | string       | App Step 2 |
            | application process      | transferencia a terceros                                                 | string       | App Step 2 |
            | custom fields            | id operacion frecuente: aFE3TlBTw5FRLXVHdS1Dw5FmSVZqaXNzVmc1w7FJQXR3VQ== | string       | App Step 2 |
            | product primary category | cuentas                                                                  | string       | App Step 2 |
            | product subtype          | cuentas ahorro                                                           | string       | App Step 2 |
            | product amount           | 189.65                                                                   | number       | App Step 2 |
            | product currency         | MXN                                                                      | string       | App Step 2 |
            | internal campaign        |                                                                          | empty array  | App Step 2 |
            | optimization attributes  |                                                                          | empty array  | App Step 2 |

    @ANA_EVENT_FEFO009
    @MX
    @analytics
    @vbank @backend(test)
    @web @ios @android
    @web-done
    Scenario: The user finish the frequent operation flow - App Completed
        Given a user with the following criteria
            | criteria                      |
            | frequent operations transfers |
        And the user accesses to dashboard
        And the user select the card to enter to a frequent transfer
        And the analytics interceptor service is initiated
        When the user accesses to execute the operation success page for "own transfer"
        Then the analytics events contains the following variables
            | item                         | value                                                                     | type         | event         |
            | analytics                    | analytics/glomo_base                                                      | json schema  | App Completed |
            | version DL                   | 20250414_5.0                                                              | string       | App Completed |
            | page name                    | app:privada:personas:operaciones frecuentes:transferencias:pagina exitosa | string       | App Completed |
            | level 1                      | operaciones frecuentes                                                    | string       | App Completed |
            | level 2                      | transferencias                                                            | string       | App Completed |
            | level 3                      | pagina exitosa                                                            | string       | App Completed |
            | language                     | ES                                                                        | string       | App Completed |
            | page area                    | privada                                                                   | string       | App Completed |
            | page intent                  | informacion                                                               | string       | App Completed |
            | channel                      | online                                                                    | string       | App Completed |
            | page instance ID             | de                                                                        | string       | App Completed |
            | page info version            | appVersion                                                                | regexp named | App Completed |
            | page segment                 | personas                                                                  | string       | App Completed |
            | sysEnv                       | app                                                                       | string       | App Completed |
            | business unit                | BBVA Mexico                                                               | string       | App Completed |
            | site app name                | App BBVA Mexico                                                           | string       | App Completed |
            | project name                 | Glomo                                                                     | string       | App Completed |
            | device mobile                | si                                                                        | string       | App Completed |
            | user userState               | logado                                                                    | string       | App Completed |
            | profile ID                   | profileID                                                                 | regexp named | App Completed |
            | user segment global          | 003001                                                                    | string       | App Completed |
            | user gender                  | gender                                                                    | regexp named | App Completed |
            | user age                     | age                                                                       | regexp named | App Completed |
            | global application           | smart frequent operation                                                  | string       | App Completed |
            | application name             | realizar operacion frecuente inteligente                                  | string       | App Completed |
            | application type             | operativa                                                                 | string       | App Completed |
            | application step             | pagina exitosa                                                            | string       | App Completed |
            | fulfillment model            | online                                                                    | string       | App Completed |
            | application typology         | journey transferir                                                        | string       | App Completed |
            | application process          | transferencia cuentas propias                                             | string       | App Completed |
            | application state            | finalizado                                                                | string       | App Completed |
            | application operation number | 8913512382                                                                | string       | App Completed |
            | custom fields                | id operacion frecuente: eTc5Nmd2OXctV3JILUhzU3ZMa0rrFWl1RHF5NTD3dA==      | string       | App Completed |
            | product primary category     | cuentas                                                                   | string       | App Completed |
            | product subtype              | cuentas ahorro                                                            | string       | App Completed |
            | product amount               | 1200                                                                      | number       | App Completed |
            | product currency             | MXN                                                                       | string       | App Completed |
            | product state                | finalizado                                                                | string       | App Completed |
            | internal campaign            |                                                                           | empty array  | App Completed |
            | optimization attributes      |                                                                           | empty array  | App Completed |

    @ANA_EVENT_FEFO010
    @MX
    @analytics
    @vbank @backend(test)
    @web @ios @android
    @web-done
    Scenario: The user has frequent operation card - Campaign Footprint
        Given a user with the following criteria
            | criteria                    |
            | frequent operations pending |
        And device with notifications enabled
        And the analytics interceptor service is initiated
        When the user accesses to dashboard
        Then the analytics events contains the following variables
            | item                                         | value                                        | type             | event     | event number |
            | analytics                                    | analytics/glomo_base                         | json schema      | Page View | 3            |
            | version DL                                   | 20250414_5.0                                 | string           | Page View | 3            |
            | page name                                    | app:privada:personas:posicion global         | string           | Page View | 3            |
            | level 1                                      | posicion global                              | string           | Page View | 3            |
            | language                                     | ES                                           | string           | Page View | 3            |
            | page area                                    | privada                                      | string           | Page View | 3            |
            | page intent                                  | informacion                                  | string           | Page View | 3            |
            | channel                                      | online                                       | string           | Page View | 3            |
            | page instance ID                             | de                                           | string           | Page View | 3            |
            | page info version                            | appVersion                                   | regexp named     | Page View | 3            |
            | page segment                                 | personas                                     | string           | Page View | 3            |
            | sysEnv                                       | app                                          | string           | Page View | 3            |
            | business unit                                | BBVA Mexico                                  | string           | Page View | 3            |
            | site app name                                | App BBVA Mexico                              | string           | Page View | 3            |
            | project name                                 | Glomo                                        | string           | Page View | 3            |
            | device mobile                                | si                                           | string           | Page View | 3            |
            | user userState                               | logado                                       | string           | Page View | 3            |
            | profile ID                                   | profileID                                    | regexp named     | Page View | 3            |
            | user segment global                          | 003001                                       | string           | Page View | 3            |
            | user gender                                  | gender                                       | regexp named     | Page View | 3            |
            | user age                                     | age                                          | regexp named     | Page View | 3            |
            | internal campaign attributes location        | dashboard--superior-1-10                     | string           | Page View | 3            |
            | internal campaign attributes campaign format | card                                         | string           | Page View | 3            |
            | internal campaign attributes collective code | VD-                                          | string           | Page View | 3            |
            | internal campaign attributes campaign name   | -en estos dias sueles transferir a tu cuenta | string           | Page View | 3            |
            | internal campaign attributes product         | cuentas                                      | string           | Page View | 3            |
            | internal campaign attributes product code    |                                              | string           | Page View | 3            |
            | internal campaign attributes quantity        | 20000                                        | string           | Page View | 3            |
            | optimization attributes                      |                                              | empty array      | Page View | 3            |
            | application                                  |                                              | empty str object | Page View | 3            |
            | products attributes                          |                                              | empty array      | Page View | 3            |

    @ANA_EVENT_FEFO011
    @MX
    @analytics
    @vbank @backend(test)
    @web @ios @android
    @web-done
    Scenario: The user closes frequent operation card - Click Close
        Given a user with the following criteria
            | criteria                    |
            | frequent operations pending |
        And the user accesses to dashboard
        And the analytics interceptor service is initiated
        When the user closes the notification card
        Then the analytics events contains the following variables
            | item                                         | value                                                                             | type             | event       |
            | analytics                                    | analytics/glomo_base                                                              | json schema      | Click Close |
            | version DL                                   | 20250414_5.0                                                                      | string           | Click Close |
            | page name                                    | app:privada:personas:posicion global                                              | string           | Click Close |
            | level 1                                      | posicion global                                                                   | string           | Click Close |
            | language                                     | ES                                                                                | string           | Click Close |
            | page area                                    | privada                                                                           | string           | Click Close |
            | page intent                                  | informacion                                                                       | string           | Click Close |
            | channel                                      | online                                                                            | string           | Click Close |
            | page instance ID                             | de                                                                                | string           | Click Close |
            | page info version                            | appVersion                                                                        | regexp named     | Click Close |
            | page segment                                 | personas                                                                          | string           | Click Close |
            | sysEnv                                       | app                                                                               | string           | Click Close |
            | business unit                                | BBVA Mexico                                                                       | string           | Click Close |
            | site app name                                | App BBVA Mexico                                                                   | string           | Click Close |
            | project name                                 | Glomo                                                                             | string           | Click Close |
            | device mobile                                | si                                                                                | string           | Click Close |
            | user userState                               | logado                                                                            | string           | Click Close |
            | profile ID                                   | profileID                                                                         | regexp named     | Click Close |
            | user segment global                          | 003001                                                                            | string           | Click Close |
            | user gender                                  | gender                                                                            | regexp named     | Click Close |
            | user age                                     | age                                                                               | regexp named     | Click Close |
            | internal campaign attributes location        | dashboard--superior-1-10                                                          | string           | Click Close |
            | internal campaign attributes campaign format | card                                                                              | string           | Click Close |
            | internal campaign attributes collective code | VD-                                                                               | string           | Click Close |
            | internal campaign attributes campaign name   | -en estos dias sueles transferir a tu cuenta                                      | string           | Click Close |
            | internal campaign attributes product         | cuentas                                                                           | string           | Click Close |
            | internal campaign attributes product code    |                                                                                   | string           | Click Close |
            | internal campaign attributes quantity        | 20000                                                                             | string           | Click Close |
            | internal campaign event name                 | IntCmpClose                                                                       | string           | Click Close |
            | internal campaign site action name           | dashboard--superior-1-10:card:VD-:-en estos dias sueles transferir a tu cuenta::: | string           | Click Close |
            | optimization attributes                      |                                                                                   | empty array      | Click Close |
            | application                                  |                                                                                   | empty str object | Click Close |
            | products attributes                          |                                                                                   | empty array      | Click Close |

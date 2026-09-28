@sendMoneyCodicelAnalytics
Feature: Analytics - Send Money Codicel

    @ANA_EVENT_CSM001
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: Access the send money operative - contact analytics event App Page Visit
        Given a user with the following criteria
            | criteria       |
            | dimo user      |
        And the user goes to the product detail
        And the analytics interceptor service is initiated
        When the user access the send money operative
        Then the analytics events contains the following variables:
            | item                     | value                                                  | type         | event          |
            | analytics	               | analytics/glomo_base                                   | json schema  | App Page Visit |
            | version dl               | 20250414_5.0                                           | string       | App Page Visit |
            | page name                | app:privada:personas:cuentas:enviar dinero:1 contacto  | string       | App Page Visit |
            | level 1                  | cuentas                                                | string       | App Page Visit |
            | level 2                  | enviar dinero                                          | string       | App Page Visit |
            | level 3                  | 1 contacto                                             | string       | App Page Visit |
            | language                 | ES                                                     | string       | App Page Visit |
            | page area                | privada                                                | string       | App Page Visit |
            | page intent              | transaccion                                            | string       | App Page Visit |
            | channel                  | online                                                 | string       | App Page Visit |
            | page instance ID         | de                                                     | string       | App Page Visit |
            | page info version        | appVersion                                             | regexp named | App Page Visit |
            | page segment             | personas                                               | string       | App Page Visit |
            | sysEnv                   | app                                                    | string       | App Page Visit |
            | business unit            | BBVA Mexico                                            | string       | App Page Visit |
            | site app name            | App BBVA Mexico                                        | string       | App Page Visit |
            | project name             | Glomo                                                  | string       | App Page Visit |
            | device mobile            | si                                                     | string       | App Page Visit |
            | user userState           | logado                                                 | string       | App Page Visit |
            | profile ID               | profileID                                              | regexp named | App Page Visit |
            | user segment global      | 003001                                                 | string       | App Page Visit |
            | user gender              | gender                                                 | regexp named | App Page Visit |
            | user age                 | age                                                    | regexp named | App Page Visit |
            | global application       | send money                                             | string       | App Page Visit |
            | application name         | enviar dinero                                          | string       | App Page Visit |
            | application type         | operativa                                              | string       | App Page Visit |
            | application step         | 1 contacto                                             | string       | App Page Visit |
            | fulfillment model        | online                                                 | string       | App Page Visit |
            | product primary category | cuentas                                                | string       | App Page Visit |
            | product subtype          |                                                        | empty array  | App Page Visit |
            | product name             | 0001ah1667                                             | string       | App Page Visit |

    @ANA_CSM002
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: The user select an interbank receipt - Analytics App Step 2
        Given a user with the following criteria
            | criteria       |
            | dimo user      |
        And the user goes to the codicel send money operation
        And the user introduces "9064601500" as phone number
        When the user accepts the "destinatary"
        Then the device contains the following variables:
            | item                     | value                                                           | type             |
            | analytics                | analytics/glomo_base                                            | json schema      |
            | version DL               | 20250414_5.0                                                    | string           |
            | page name                | app:privada:personas:cuentas:enviar dinero:2 importe            | string           |
            | level 1                  | cuentas                                                         | string           |
            | level 2                  | enviar dinero                                                   | string           |
            | level 3                  | 2 importe                                                       | string           |
            | language                 | ES                                                              | string           |
            | page area                | privada                                                         | string           |
            | page intent              | transaccion                                                     | string           |
            | channel                  | online                                                          | string           |
            | page instance ID         | de                                                              | string           |
            | page info version        | appVersion                                                      | regexp named     |
            | page segment             | personas                                                        | string           |
            | sysEnv                   | app                                                             | string           |
            | business unit            | BBVA Mexico                                                     | string           |
            | site app name            | App BBVA Mexico                                                 | string           |
            | project name             | Glomo                                                           | string           |
            | device mobile            | si                                                              | string           |
            | user userState           | logado                                                          | string           |
            | profile ID               | profileID                                                       | regexp named     |
            | user segment global      | 003001                                                          | string           |
            | user gender              | gender                                                          | regexp named     |
            | user age                 | age                                                             | regexp named     |
            | global application       | send money                                                      | string           |
            | application name         | enviar dinero                                                   | string           |
            | application type         | operativa                                                       | string           |
            | application step         | 2 importe                                                       | string           |
            | fulfillment model        | online                                                          | string           |
            | application typology     | contactos interbancarios                                        | string           |
            | application process      | contacto afiliado                                               | string           |
            | product primary category | cuentas                                                         | string           |
            | product subtype          |                                                                 | empty array      |
            | product name             | 0001ah1667                                                      | string           |

    @ANA_CSM003
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: The user sees step ammount - Analytics App Step 3
        Given a user with the following criteria
            | criteria       |
            | dimo user      |
        And the user goes to the codicel send money operation
        And the user introduces "9064601500" as phone number
        And the user accepts the "destinatary"
        And the user introduces "20" as an ammount
        When the user accepts the "ammount"
        Then the device contains the following variables:
            | item                     | value                                                           | type             |
            | analytics                | analytics/glomo_base                                            | json schema      |
            | version DL               | 20250414_5.0                                                    | string           |
            | page name                | app:privada:personas:cuentas:enviar dinero:3 concepto           | string           |
            | level 1                  | cuentas                                                         | string           |
            | level 2                  | enviar dinero                                                   | string           |
            | level 3                  | 3 concepto                                                      | string           |
            | language                 | ES                                                              | string           |
            | page area                | privada                                                         | string           |
            | page intent              | transaccion                                                     | string           |
            | channel                  | online                                                          | string           |
            | page instance ID         | de                                                              | string           |
            | page info version        | appVersion                                                      | regexp named     |
            | page segment             | personas                                                        | string           |
            | sysEnv                   | app                                                             | string           |
            | business unit            | BBVA Mexico                                                     | string           |
            | site app name            | App BBVA Mexico                                                 | string           |
            | project name             | Glomo                                                           | string           |
            | device mobile            | si                                                              | string           |
            | user userState           | logado                                                          | string           |
            | profile ID               | profileID                                                       | regexp named     |
            | user segment global      | 003001                                                          | string           |
            | user gender              | gender                                                          | regexp named     |
            | user age                 | age                                                             | regexp named     |
            | global application       | send money                                                      | string           |
            | application name         | enviar dinero                                                   | string           |
            | application type         | operativa                                                       | string           |
            | application step         | 3 concepto                                                      | string           |
            | fulfillment model        | online                                                          | string           |
            | application typology     | contactos interbancarios                                        | string           |
            | application process      | contacto afiliado                                               | string           |
            | product primary category | cuentas                                                         | string           |
            | product subtype          |                                                                 | empty array      |
            | product name             | 0001ah1667                                                      | string           |
            | product amount           | 20                                                              | number           |
            | product currency         | MXN                                                             | string           |

    @ANA_CSM004
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: The user typing a concept - Analytics App Step 4
        Given a user with the following criteria
            | criteria       |
            | dimo user      |
        And the user goes to the codicel send money operation
        And the user introduces "9064601500" as phone number
        And the user accepts the "destinatary"
        And the user introduces "20" as an ammount
        And the user accepts the "ammount"
        And the user adds "1612240" as reference
        And the user adds "Reasons" as concept
        When the user accepts the "concept"
        Then the device contains the following variables:
            | item                     | value                                                           | type             |
            | analytics                | analytics/glomo_base                                            | json schema      |
            | version DL               | 20250414_5.0                                                    | string           |
            | page name                | app:privada:personas:cuentas:enviar dinero:4 confirmacion       | string           |
            | level 1                  | cuentas                                                         | string           |
            | level 2                  | enviar dinero                                                   | string           |
            | level 3                  | 4 confirmacion                                                  | string           |
            | language                 | ES                                                              | string           |
            | page area                | privada                                                         | string           |
            | page intent              | transaccion                                                     | string           |
            | channel                  | online                                                          | string           |
            | page instance ID         | de                                                              | string           |
            | page info version        | appVersion                                                      | regexp named     |
            | page segment             | personas                                                        | string           |
            | sysEnv                   | app                                                             | string           |
            | business unit            | BBVA Mexico                                                     | string           |
            | site app name            | App BBVA Mexico                                                 | string           |
            | project name             | Glomo                                                           | string           |
            | device mobile            | si                                                              | string           |
            | user userState           | logado                                                          | string           |
            | profile ID               | profileID                                                       | regexp named     |
            | user segment global      | 003001                                                          | string           |
            | user gender              | gender                                                          | regexp named     |
            | user age                 | age                                                             | regexp named     |
            | global application       | send money                                                      | string           |
            | application name         | enviar dinero                                                   | string           |
            | application type         | operativa                                                       | string           |
            | application step         | 4 confirmacion                                                  | string           |
            | fulfillment model        | online                                                          | string           |
            | application typology     | contactos interbancarios                                        | string           |
            | application process      | contacto afiliado                                               | string           |
            | product primary category | cuentas                                                         | string           |
            | product subtype          |                                                                 | empty array      |
            | product name             | 0001ah1667                                                      | string           |
            | product amount           | 20                                                              | number           |
            | product currency         | MXN                                                             | string           |

    @ANA_CSM005
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: The user sees otp modal - Analytics App Step 5
        Given a user with the following criteria
            | criteria       |
            | dimo user      |
        And the user goes to the codicel send money operation
        And the user introduces "9064601500" as phone number
        And the user accepts the "destinatary"
        And the user introduces "20" as an ammount
        And the user accepts the "ammount"
        And the user adds "1612240" as reference
        And the user adds "Reasons" as concept
        And the user accepts the "concept"
        When the user accepts summary transfers
        Then the device contains the following variables:
            | item                     | value                                                           | type             |
            | analytics                | analytics/glomo_base                                            | json schema      |
            | version DL               | 20250414_5.0                                                    | string           |
            | page name                | app:privada:personas:cuentas:enviar dinero:5 otp                | string           |
            | level 1                  | cuentas                                                         | string           |
            | level 2                  | enviar dinero                                                   | string           |
            | level 3                  | 5 otp                                                           | string           |
            | language                 | ES                                                              | string           |
            | page area                | privada                                                         | string           |
            | page intent              | transaccion                                                     | string           |
            | channel                  | online                                                          | string           |
            | page instance ID         | de                                                              | string           |
            | page info version        | appVersion                                                      | regexp named     |
            | page segment             | personas                                                        | string           |
            | sysEnv                   | app                                                             | string           |
            | business unit            | BBVA Mexico                                                     | string           |
            | site app name            | App BBVA Mexico                                                 | string           |
            | project name             | Glomo                                                           | string           |
            | device mobile            | si                                                              | string           |
            | user userState           | logado                                                          | string           |
            | profile ID               | profileID                                                       | regexp named     |
            | user segment global      | 003001                                                          | string           |
            | user gender              | gender                                                          | regexp named     |
            | user age                 | age                                                             | regexp named     |
            | global application       | send money                                                      | string           |
            | application name         | enviar dinero                                                   | string           |
            | application type         | operativa                                                       | string           |
            | application step         | 5 otp                                                           | string           |
            | fulfillment model        | online                                                          | string           |
            | application typology     | contactos interbancarios                                        | string           |
            | application process      | contacto afiliado                                               | string           |
            | custom fields            | token:touch id                                                  | string           |
            | product primary category | cuentas                                                         | string           |
            | product subtype          |                                                                 | empty array      |
            | product name             | 0001ah1667                                                      | string           |
            | product amount           | 20                                                              | number           |
            | product currency         | MXN                                                             | string           |

    @ANA_CSM006
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: The user successfully does an transaction - Analytics App Completed
        Given a user with the following criteria
            | criteria       |
            | dimo user      |
        And the user goes to the codicel send money operation
        And the user introduces "9064601500" as phone number
        And the user accepts the "destinatary"
        And the user introduces "20" as an ammount
        And the user accepts the "ammount"
        And the user adds "1612240" as reference
        And the user adds "Reasons" as concept
        And the user accepts the "concept"
        When the user accepts summary transfers
        Then the device contains the following variables:
            | item                     | value                                                           | type             |
            | analytics                | analytics/glomo_base                                            | json schema      |
            | version DL               | 20250414_5.0                                                    | string           |
            | page name                | app:privada:personas:cuentas:enviar dinero:pagina exitosa                | string           |
            | level 1                  | cuentas                                                         | string           |
            | level 2                  | enviar dinero                                                   | string           |
            | level 3                  | pagina exitosa                                                           | string           |
            | language                 | ES                                                              | string           |
            | page area                | privada                                                         | string           |
            | page intent              | transaccion                                                     | string           |
            | channel                  | online                                                          | string           |
            | page instance ID         | de                                                              | string           |
            | page info version        | appVersion                                                      | regexp named     |
            | page segment             | personas                                                        | string           |
            | sysEnv                   | app                                                             | string           |
            | business unit            | BBVA Mexico                                                     | string           |
            | site app name            | App BBVA Mexico                                                 | string           |
            | project name             | Glomo                                                           | string           |
            | device mobile            | si                                                              | string           |
            | user userState           | logado                                                          | string           |
            | profile ID               | profileID                                                       | regexp named     |
            | user segment global      | 003001                                                          | string           |
            | user gender              | gender                                                          | regexp named     |
            | user age                 | age                                                             | regexp named     |
            | global application       | send money                                                      | string           |
            | application name         | enviar dinero                                                   | string           |
            | application type         | operativa                                                       | string           |
            | application step         | pagina exitosa                                                           | string           |
            | fulfillment model        | online                                                          | string           |
            | application typology     | contactos interbancarios                                        | string           |
            | application process      | contacto afiliado                                               | string           |
            | custom fields            | token:touch id                                                  | string           |
            | application state        | finalizado                                                      | string           |
            | application operation number        | Reasons                                                      | string           |
            | product primary category | cuentas                                                         | string           |
            | product subtype          |                                                                 | empty array      |
            | product name             | 0001ah1667                                                      | string           |
            | product amount           | 20                                                              | number           |
            | product currency         | MXN                                                             | string           |
            | product state            | finalizado                                                      | string           |

    @ANA_CSM007
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: The user sees the invitation modal - Analytics Page View
        Given a user with the following criteria
            | criteria       |
            | dimo user      |
        And the user goes to the codicel send money operation
        And the user introduces "5566778899" as phone number
        And the user tap in step destinatary
        When the user accepts the "destinatary"
        Then the device contains the following variables:
            | item                     | value                                                           | type             |
            | analytics                | analytics/glomo_base                                            | json schema      |
            | version DL               | 20250414_5.0                                                    | string           |
            | page name                | app:privada:personas:cuentas:enviar dinero:invitar a tu contacto| string           |
            | level 1                  | cuentas                                                         | string           |
            | level 2                  | enviar dinero                                                   | string           |
            | level 3                  | invitar a tu contacto                                                       | string           |
            | language                 | ES                                                              | string           |
            | page area                | privada                                                         | string           |
            | page intent              | transaccion                                                     | string           |
            | channel                  | online                                                          | string           |
            | page instance ID         | de                                                              | string           |
            | page info version        | appVersion                                                      | regexp named     |
            | page segment             | personas                                                        | string           |
            | sysEnv                   | app                                                             | string           |
            | business unit            | BBVA Mexico                                                     | string           |
            | site app name            | App BBVA Mexico                                                 | string           |
            | project name             | Glomo                                                           | string           |
            | device mobile            | si                                                              | string           |
            | user userState           | logado                                                          | string           |
            | profile ID               | profileID                                                       | regexp named     |
            | user segment global      | 003001                                                          | string           |
            | user gender              | gender                                                          | regexp named     |
            | user age                 | age                                                             | regexp named     |

    @ANA_CSM008
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: The user accept invitation modal - Analytics Internal Link
        Given a user with the following criteria
            | criteria       |
            | dimo user      |
        And the user goes to the codicel send money operation
        And the user introduces "5566778899" as phone number
        And the user tap in step destinatary
        And the user accepts the "destinatary"
        When the user accepts the invitation modal
        Then the device contains the following variables:
            | item                     | value                                                           | type             |
            | analytics                | analytics/glomo_base                                            | json schema      |
            | version DL               | 20250414_5.0                                                    | string           |
            | page name                | app:privada:personas:cuentas:enviar dinero:invitar a tu contacto| string           |
            | level 1                  | cuentas                                                         | string           |
            | level 2                  | enviar dinero                                                   | string           |
            | level 3                  | invitar a tu contacto                                           | string           |
            | language                 | ES                                                              | string           |
            | page area                | privada                                                         | string           |
            | page intent              | transaccion                                                     | string           |
            | channel                  | online                                                          | string           |
            | page instance ID         | de                                                              | string           |
            | page info version        | appVersion                                                      | regexp named     |
            | page segment             | personas                                                        | string           |
            | sysEnv                   | app                                                             | string           |
            | business unit            | BBVA Mexico                                                     | string           |
            | site app name            | App BBVA Mexico                                                 | string           |
            | project name             | Glomo                                                           | string           |
            | link name                | invitar contacto                                                | string           |
            | device mobile            | si                                                              | string           |
            | user userState           | logado                                                          | string           |
            | profile ID               | profileID                                                       | regexp named     |
            | user segment global      | 003001                                                          | string           |
            | user gender              | gender                                                          | regexp named     |
            | user age                 | age                                                             | regexp named     |

    @ANA_CSM009
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: The user completely goes to modify the destinatary - Analytics Page View
        Given a user with the following criteria
            | criteria       |
            | dimo user      |
        And the user goes to the codicel send money operation
        And the user introduces "9064601500" as phone number
        And the user accepts the "destinatary"
        When the user selects to modify the "destinatary"
        Then the device contains the following variables:
            | item                     | value                                                           | type             |
            | analytics                | analytics/glomo_base                                            | json schema      |
            | version DL               | 20250414_5.0                                                    | string           |
            | page name                | app:privada:personas:cuentas:enviar dinero:cambiar contacto     | string           |
            | level 1                  | cuentas                                                         | string           |
            | level 2                  | enviar dinero                                                   | string           |
            | level 3                  | cambiar contacto                                                | string           |
            | language                 | ES                                                              | string           |
            | page area                | privada                                                         | string           |
            | page intent              | transaccion                                                     | string           |
            | channel                  | online                                                          | string           |
            | page instance ID         | de                                                              | string           |
            | page info version        | appVersion                                                      | regexp named     |
            | page segment             | personas                                                        | string           |
            | sysEnv                   | app                                                             | string           |
            | business unit            | BBVA Mexico                                                     | string           |
            | site app name            | App BBVA Mexico                                                 | string           |
            | project name             | Glomo                                                           | string           |
            | device mobile            | si                                                              | string           |
            | user userState           | logado                                                          | string           |
            | profile ID               | profileID                                                       | regexp named     |
            | user segment global      | 003001                                                          | string           |
            | user gender              | gender                                                          | regexp named     |
            | user age                 | age                                                             | regexp named     |

    @ANA_CSM010
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: The user enter its same phone - Analytics Page View
        Given a user with the following criteria
            | criteria       |
            | dimo user      |
        And the user goes to the codicel send money operation
        And the user introduces "5537200981" as phone number
        And the user tap in step destinatary
        When the user accepts the "destinatary"
        Then the device contains the following variables:
            | item                     | value                                                           | type             |
            | analytics                | analytics/glomo_base                                            | json schema      |
            | version DL               | 20250414_5.0                                                    | string           |
            | page name                | app:privada:personas:cuentas:enviar dinero:error de contacto    | string           |
            | level 1                  | cuentas                                                         | string           |
            | level 2                  | enviar dinero                                                   | string           |
            | level 3                  | error de contacto                                               | string           |
            | error page               | error de contacto                                               | string           |
            | language                 | ES                                                              | string           |
            | page area                | privada                                                         | string           |
            | page intent              | transaccion                                                     | string           |
            | channel                  | online                                                          | string           |
            | page instance ID         | de                                                              | string           |
            | page info version        | appVersion                                                      | regexp named     |
            | page segment             | personas                                                        | string           |
            | sysEnv                   | app                                                             | string           |
            | business unit            | BBVA Mexico                                                     | string           |
            | site app name            | App BBVA Mexico                                                 | string           |
            | project name             | Glomo                                                           | string           |
            | device mobile            | si                                                              | string           |
            | user userState           | logado                                                          | string           |
            | profile ID               | profileID                                                       | regexp named     |
            | user segment global      | 003001                                                          | string           |
            | user gender              | gender                                                          | regexp named     |
            | user age                 | age                                                             | regexp named     |

    @ANA_CSM011
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: The user sees the error modal at load info - Error Page View
        Given a user with the following criteria
            | criteria       |
            | dimo user      |
        And the user goes to the codicel send money operation
        And the user introduces "9064601500" as phone number
        And the user tap in step destinatary
        When the user accepts the "destinatary"
        Then the device contains the following variables:
            | item                     | value                                                             | type             |
            | analytics                | analytics/glomo_base                                              | json schema      |
            | version DL               | 20250414_5.0                                                      | string           |
            | page name                | app:privada:personas:cuentas:enviar dinero:operacion no realizada | string           |
            | level 1                  | cuentas                                                           | string           |
            | level 2                  | enviar dinero                                                     | string           |
            | level 3                  | operacion no realizada                                            | string           |
            | error page               | operacion no realizada                                            | string           |
            | language                 | ES                                                                | string           |
            | page area                | privada                                                           | string           |
            | page intent              | transaccion                                                       | string           |
            | channel                  | online                                                            | string           |
            | page instance ID         | de                                                                | string           |
            | page info version        | appVersion                                                        | regexp named     |
            | page segment             | personas                                                          | string           |
            | sysEnv                   | app                                                               | string           |
            | business unit            | BBVA Mexico                                                       | string           |
            | site app name            | App BBVA Mexico                                                   | string           |
            | project name             | Glomo                                                             | string           |
            | device mobile            | si                                                                | string           |
            | user userState           | logado                                                            | string           |
            | profile ID               | profileID                                                         | regexp named     |
            | user segment global      | 003001                                                            | string           |
            | user gender              | gender                                                            | regexp named     |
            | user age                 | age                                                               | regexp named     |

    @ANA_EVENT_CSM012
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: The user open contacts agenda - Analytics App Started
        Given a user with the following criteria
            | criteria       |
            | dimo user      |
        And the user goes to the codicel send money operation
        And the analytics interceptor service is initiated
        When the user open contacts modal
        Then the analytics events contains the following variables:
            | item                     | value                                                 | type         | event       |
            | analytics                | analytics/glomo_base                                  | json schema  | App Started |
            | version DL               | 20250414_5.0                                          | string       | App Started |
            | page name                | app:privada:personas:cuentas:enviar dinero:1 contacto | string       | App Started |
            | level 1                  | cuentas                                               | string       | App Started |
            | level 2                  | enviar dinero                                         | string       | App Started |
            | level 3                  | 1 contacto                                            | string       | App Started |
            | language                 | ES                                                    | string       | App Started |
            | page area                | privada                                               | string       | App Started |
            | page intent              | transaccion                                           | string       | App Started |
            | channel                  | online                                                | string       | App Started |
            | page instance ID         | de                                                    | string       | App Started |
            | page info version        | appVersion                                            | regexp named | App Started |
            | page segment             | personas                                              | string       | App Started |
            | sysEnv                   | app                                                   | string       | App Started |
            | business unit            | BBVA Mexico                                           | string       | App Started |
            | site app name            | App BBVA Mexico                                       | string       | App Started |
            | project name             | Glomo                                                 | string       | App Started |
            | device mobile            | si                                                    | string       | App Started |
            | user userState           | logado                                                | string       | App Started |
            | profile ID               | profileID                                             | regexp named | App Started |
            | user segment global      | 003001                                                | string       | App Started |
            | user gender              | gender                                                | regexp named | App Started |
            | user age                 | age                                                   | regexp named | App Started |
            | global application       | send money                                            | string       | App Started |
            | application name         | enviar dinero                                         | string       | App Started |
            | application type         | operativa                                             | string       | App Started |
            | application step         | agenda de contactos                                   | string       | App Started |
            | fulfillment model        | online                                                | string       | App Started |
            | product primary category | cuentas                                               | string       | App Started |
            | product subtype          |                                                       | empty array  | App Started |
            | product name             | 0001ah1667                                            | string       | App Started |

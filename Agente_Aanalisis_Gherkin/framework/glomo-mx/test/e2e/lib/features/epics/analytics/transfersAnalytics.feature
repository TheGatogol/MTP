@transferAnalytics
Feature: Analytics - Transfer

    @ANA_IBT001
    @analytics
    @ios @android
    @vbank @backend(test) @web
    @MX @web-done
    Scenario: Transfer - app onclick start - Transfer from product detail
        Given a user with the following criteria
            | criteria |
            | Account  |
        When the user accesses to transfer from dashboard and selects a origin "account"
        Then the device contains the following variables
            | item                     | value                                                        | type         |
            | version DL               | 20250414_5.0                                                 | string       |
            | page name                | app:privada:personas:cuentas:transferencias:1 cuenta destino | string       |
            | level 1                  | cuentas                                                      | string       |
            | level 2                  | transferencias                                               | string       |
            | language                 | ES                                                           | string       |
            | page area                | privada                                                      | string       |
            | page intent              | transaccion                                                  | string       |
            | channel                  | online                                                       | string       |
            | page instance ID         | de                                                           | string       |
            | page info version        | appVersion                                                   | regexp named |
            | page segment             | personas                                                     | string       |
            | sysEnv                   | app                                                          | string       |
            | business unit            | BBVA Mexico                                                  | string       |
            | site app name            | App BBVA Mexico                                              | string       |
            | device mobile            | si                                                           | string       |
            | user userState           | logado                                                       | string       |
            | profile ID               | profileID                                                    | regexp named |
            | user segment global      | 003001                                                       | string       |
            | user gender              | gender                                                       | regexp named |
            | user age                 | age                                                          | regexp named |
            | global application       | transfers                                                    | string       |
            | application name         | transferencias                                               | string       |
            | application type         | operativa                                                    | string       |
            | application step         | 1 cuenta destino                                             | string       |
            | fulfillment model        | online/offline                                               | string       |
            | product primary category | cuentas                                                      | string       |
            | internal campaign        |                                                              | empty array  |
            | optimization attributes  |                                                              | empty array  |

    @ANA_IBT002
    @analytics
    @ios @android
    @vbank @backend(test) @web
    @MX @web-done
    Scenario: Transfer - app page visit - destination account
        Given a user with the following criteria
            | criteria |
            | Account  |
        When the user accesses to transfer from dashboard and selects a origin "account"
        Then the device contains the following variables
            | item                     | value                                                        | type         |
            | version DL               | 20250414_5.0                                                 | string       |
            | page name                | app:privada:personas:cuentas:transferencias:1 cuenta destino | string       |
            | level 1                  | cuentas                                                      | string       |
            | level 2                  | transferencias                                               | string       |
            | level 3                  | 1 cuenta destino                                             | string       |
            | language                 | ES                                                           | string       |
            | page area                | privada                                                      | string       |
            | page intent              | transaccion                                                  | string       |
            | channel                  | online                                                       | string       |
            | page instance ID         | de                                                           | string       |
            | page info version        | appVersion                                                   | regexp named |
            | page segment             | personas                                                     | string       |
            | sysEnv                   | app                                                          | string       |
            | business unit            | BBVA Mexico                                                  | string       |
            | site app name            | App BBVA Mexico                                              | string       |
            | device mobile            | si                                                           | string       |
            | user userState           | logado                                                       | string       |
            | profile ID               | profileID                                                    | regexp named |
            | user segment global      | 003001                                                       | string       |
            | user gender              | gender                                                       | regexp named |
            | user age                 | age                                                          | regexp named |
            | global application       | transfers                                                    | string       |
            | application name         | transferencias                                               | string       |
            | application type         | operativa                                                    | string       |
            | application step         | 1 cuenta destino                                             | string       |
            | fulfillment model        | online/offline                                               | string       |
            | product primary category | cuentas                                                      | string       |
            | internal campaign        |                                                              | empty array  |
            | optimization attributes  |                                                              | empty array  |

    @ANA_IBT003
    @analytics
    @ios @android
    @vbank @backend(test) @web
    @MX @web-done
    Scenario: Transfer - app onclick start - link action
        Given a user with the following criteria
            | criteria |
            | Account  |
        And the user accesses to transfer from dashboard and selects a origin "account"
        And the analytics interceptor service is initiated
        When the user selects a destinatary from "new recipient"
        Then the analytics events contains the following variables
            | item                     | value                                                        | type         | event       |
            | version DL               | 20250414_5.0                                                 | string       | App Started |
            | page name                | app:privada:personas:cuentas:transferencias:1 cuenta destino | string       | App Started |
            | level 1                  | cuentas                                                      | string       | App Started |
            | level 2                  | transferencias                                               | string       | App Started |
            | level 3                  | 1 cuenta destino                                             | string       | App Started |
            | language                 | ES                                                           | string       | App Started |
            | page area                | privada                                                      | string       | App Started |
            | page intent              | transaccion                                                  | string       | App Started |
            | channel                  | online                                                       | string       | App Started |
            | page instance ID         | de                                                           | string       | App Started |
            | page info version        | appVersion                                                   | regexp named | App Started |
            | page segment             | personas                                                     | string       | App Started |
            | sysEnv                   | app                                                          | string       | App Started |
            | business unit            | BBVA Mexico                                                  | string       | App Started |
            | site app name            | App BBVA Mexico                                              | string       | App Started |
            | device mobile            | si                                                           | string       | App Started |
            | user userState           | logado                                                       | string       | App Started |
            | profile ID               | profileID                                                    | regexp named | App Started |
            | user segment global      | 003001                                                       | string       | App Started |
            | user gender              | gender                                                       | regexp named | App Started |
            | user age                 | age                                                          | regexp named | App Started |
            | global application       | transfers                                                    | string       | App Started |
            | application name         | transferencias                                               | string       | App Started |
            | application type         | operativa                                                    | string       | App Started |
            | application step         | nuevo                                                        | string       | App Started |
            | fulfillment model        | online/offline                                               | string       | App Started |
            | product primary category | cuentas                                                      | string       | App Started |
            | internal campaign        |                                                              | empty array  | App Started |
            | optimization attributes  |                                                              | empty array  | App Started |

    @ANA_OWN001
    @analytics
    @ios @android
    @vbank @backend(test) @web
    @MX @web-done
    Scenario: Transfer - app step 2 - view action
        Given a user with the following criteria
            | criteria |
            | Account  |
        And the user accesses to transfer from dashboard and selects a origin "account"
        When the user starts a transfer to a personal "account" account
        Then the device contains the following variables
            | item                     | value                                               | type         |
            | version DL               | 20250414_5.0                                        | string       |
            | page name                | app:privada:personas:cuentas:transferencias:2 monto | string       |
            | level 1                  | cuentas                                             | string       |
            | level 2                  | transferencias                                      | string       |
            | level 3                  | 2 monto                                             | string       |
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
            | device mobile            | si                                                  | string       |
            | user userState           | logado                                              | string       |
            | profile ID               | profileID                                           | regexp named |
            | user segment global      | 003001                                              | string       |
            | user gender              | gender                                              | regexp named |
            | user age                 | age                                                 | regexp named |
            | global application       | transfers                                           | string       |
            | application name         | transferencias                                      | string       |
            | application type         | operativa                                           | string       |
            | application step         | 2 monto                                             | string       |
            | fulfillment model        | online/offline                                      | string       |
            | application typology     | cuentas propias                                     | string       |
            | application process      | cuentas                                             | string       |
            | product primary category | cuentas                                             | string       |
            | internal campaign        |                                                     | empty array  |
            | optimization attributes  |                                                     | empty array  |

    @ANA_INT001
    @analytics
    @ios @android
    @vbank @backend(test) @web
    @MX @web-done
    Scenario: Transfer - app step 3 - confirmation loading event
        Given a user with the following criteria
            | criteria |
            | Account  |
        And the user accesses to transfer from dashboard and selects a origin "account"
        And the user selects a destinatary from "new recipient"
        When the user will transfer to an "internal identified" account by entering the destination number
        And the user enter amount "20" and concept "donativo"
        Then the device contains the following variables
            | item                     | value                                                      | type         |
            | version DL               | 20250414_5.0                                               | string       |
            | page name                | app:privada:personas:cuentas:transferencias:3 confirmacion | string       |
            | level 1                  | cuentas                                                    | string       |
            | level 2                  | transferencias                                             | string       |
            | level 3                  | 3 confirmacion                                             | string       |
            | language                 | ES                                                         | string       |
            | page area                | privada                                                    | string       |
            | page intent              | transaccion                                                | string       |
            | channel                  | online                                                     | string       |
            | page instance ID         | de                                                         | string       |
            | page info version        | appVersion                                                 | regexp named |
            | page segment             | personas                                                   | string       |
            | sysEnv                   | app                                                        | string       |
            | business unit            | BBVA Mexico                                                | string       |
            | site app name            | App BBVA Mexico                                            | string       |
            | device mobile            | si                                                         | string       |
            | user userState           | logado                                                     | string       |
            | profile ID               | profileID                                                  | regexp named |
            | user segment global      | 003001                                                     | string       |
            | user gender              | gender                                                     | regexp named |
            | user age                 | age                                                        | regexp named |
            | global application       | transfers                                                  | string       |
            | application name         | transferencias                                             | string       |
            | application type         | operativa                                                  | string       |
            | application step         | 3 confirmacion                                             | string       |
            | fulfillment model        | online/offline                                             | string       |
            | product primary category | cuentas                                                    | string       |
            | product amount           | 20                                                         | number       |
            | product currency         | MXN                                                        | string       |
            | internal campaign        |                                                            | empty array  |
            | optimization attributes  |                                                            | empty array  |

    @ANA_IBT004
    @analytics
    @ios @android
    @vbank @backend(test) @web
    @MX @web-done
    Scenario: Transfer - app completed - successful operation
        Given a user with the following criteria
            | criteria |
            | Account  |
        And the user accesses to transfer from dashboard and selects a origin "account"
        And the user starts a transfer to a personal "debit" account
        When the user enter amount "20" and concept "donativo"
        And the user completes the transfer process
        Then the device contains the following variables
            | item                         | value                                                      | type         |
            | version DL                   | 20250414_5.0                                               | string       |
            | page name                    | app:privada:personas:cuentas:transferencias:pagina exitosa | string       |
            | level 1                      | cuentas                                                    | string       |
            | level 2                      | transferencias                                             | string       |
            | level 3                      | pagina exitosa                                             | string       |
            | language                     | ES                                                         | string       |
            | page area                    | privada                                                    | string       |
            | page intent                  | transaccion                                                | string       |
            | channel                      | online                                                     | string       |
            | page instance ID             | de                                                         | string       |
            | page info version            | appVersion                                                 | regexp named |
            | page segment                 | personas                                                   | string       |
            | sysEnv                       | app                                                        | string       |
            | business unit                | BBVA Mexico                                                | string       |
            | site app name                | App BBVA Mexico                                            | string       |
            | device mobile                | si                                                         | string       |
            | user userState               | logado                                                     | string       |
            | profile ID                   | profileID                                                  | regexp named |
            | user segment global          | 003001                                                     | string       |
            | user gender                  | gender                                                     | regexp named |
            | user age                     | age                                                        | regexp named |
            | global application           | transfers                                                  | string       |
            | application name             | transferencias                                             | string       |
            | application type             | operativa                                                  | string       |
            | application step             | pagina exitosa                                             | string       |
            | fulfillment model            | online/offline                                             | string       |
            | application typology         | cuentas propias                                            | string       |
            | application process          | cuentas                                                    | string       |
            | application state            | finalizado                                                 | string       |
            | application operation number | 5723807613                                                 | string       |
            | product primary category     | cuentas                                                    | string       |
            | product subtype              | cuentas ahorro                                             | string       |
            | product amount               | 20                                                         | number       |
            | product currency             | MXN                                                        | string       |
            | product state                | finalizado                                                 | string       |
            | internal campaign            |                                                            | empty array  |
            | optimization attributes      |                                                            | empty array  |

    @ANA_OWN002
    @analytics
    @ios @android
    @vbank @backend(test) @web
    @MX @web-done
    Scenario: Transfer - HUELLA - Mis Cuentas BBVA
        Given a user with the following criteria
            | criteria |
            | Account  |
        And the user accesses to transfer from dashboard and selects a origin "account"
        When the user selects a destinatary from "my accounts"
        Then the device contains the following variables
            | item                    | value                                                        | type             |
            | version DL              | 20250414_5.0                                                 | string           |
            | page name               | app:privada:personas:cuentas:transferencias:mis cuentas bbva | string           |
            | level 1                 | cuentas                                                      | string           |
            | level 2                 | transferencias                                               | string           |
            | level 3                 | mis cuentas bbva                                             | string           |
            | language                | ES                                                           | string           |
            | page area               | privada                                                      | string           |
            | page intent             | informacion                                                  | string           |
            | channel                 | online                                                       | string           |
            | page instance ID        | de                                                           | string           |
            | page info version       | appVersion                                                   | regexp named     |
            | page segment            | personas                                                     | string           |
            | sysEnv                  | app                                                          | string           |
            | business unit           | BBVA Mexico                                                  | string           |
            | site app name           | App BBVA Mexico                                              | string           |
            | device mobile           | si                                                           | string           |
            | user userState          | logado                                                       | string           |
            | profile ID              | profileID                                                    | regexp named     |
            | user segment global     | 003001                                                       | string           |
            | user gender             | gender                                                       | regexp named     |
            | user age                | age                                                          | regexp named     |
            | internal campaign       |                                                              | empty array      |
            | optimization attributes |                                                              | empty array      |
            | application             |                                                              | empty str object |
            | products attributes     |                                                              | empty array      |

    @ANA_INT002
    @analytics
    @ios @android
    @vbank @backend(test) @web
    @MX @web-done
    Scenario: Transfer - HUELLA - Nueva Cuenta Confirmada
        Given a user with the following criteria
            | criteria |
            | Account  |
        And the user accesses to transfer from dashboard and selects a origin "account"
        And the user selects a destinatary from "new recipient"
        When the user will transfer to an "confirmed" account by entering the destination number
        Then the device contains the following variables
            | item                    | value                                                               | type             |
            | version DL              | 20250414_5.0                                                        | string           |
            | page name               | app:privada:personas:cuentas:transferencias:nueva cuenta confirmada | string           |
            | level 1                 | cuentas                                                             | string           |
            | level 2                 | transferencias                                                      | string           |
            | level 3                 | nueva cuenta confirmada                                             | string           |
            | language                | ES                                                                  | string           |
            | page area               | privada                                                             | string           |
            | page intent             | informacion                                                         | string           |
            | channel                 | online                                                              | string           |
            | page instance ID        | de                                                                  | string           |
            | page info version       | appVersion                                                          | regexp named     |
            | page segment            | personas                                                            | string           |
            | sysEnv                  | app                                                                 | string           |
            | business unit           | BBVA Mexico                                                         | string           |
            | site app name           | App BBVA Mexico                                                     | string           |
            | device mobile           | si                                                                  | string           |
            | user userState          | logado                                                              | string           |
            | profile ID              | profileID                                                           | regexp named     |
            | user segment global     | 003001                                                              | string           |
            | user gender             | gender                                                              | regexp named     |
            | user age                | age                                                                 | regexp named     |
            | internal campaign       |                                                                     | empty array      |
            | optimization attributes |                                                                     | empty array      |
            | application             |                                                                     | empty str object |
            | products attributes     |                                                                     | empty array      |

    @ANA_INT003
    @analytics
    @ios @android
    @vbank @backend(test) @web
    @MX @web-done
    Scenario: Transfer - HUELLA - Concepto
        Given a user with the following criteria
            | criteria |
            | Account  |
        And the user accesses to transfer from dashboard and selects a origin "account"
        And the user selects a destinatary from "new recipient"
        When the user will transfer to an "not saved internal" account by entering the destination number
        And the user completes amount "20" and concept "donativo"
        Then the device contains the following variables
            | item                    | value                                                | type             |
            | version DL              | 20250414_5.0                                         | string           |
            | page name               | app:privada:personas:cuentas:transferencias:concepto | string           |
            | level 1                 | cuentas                                              | string           |
            | level 2                 | transferencias                                       | string           |
            | level 3                 | concepto                                             | string           |
            | language                | ES                                                   | string           |
            | page area               | privada                                              | string           |
            | page intent             | informacion                                          | string           |
            | channel                 | online                                               | string           |
            | page instance ID        | de                                                   | string           |
            | page info version       | appVersion                                           | regexp named     |
            | page segment            | personas                                             | string           |
            | sysEnv                  | app                                                  | string           |
            | business unit           | BBVA Mexico                                          | string           |
            | site app name           | App BBVA Mexico                                      | string           |
            | device mobile           | si                                                   | string           |
            | user userState          | logado                                               | string           |
            | profile ID              | profileID                                            | regexp named     |
            | user segment global     | 003001                                               | string           |
            | user gender             | gender                                               | regexp named     |
            | user age                | age                                                  | regexp named     |
            | internal campaign       |                                                      | empty array      |
            | optimization attributes |                                                      | empty array      |
            | application             |                                                      | empty str object |
            | products attributes     |                                                      | empty array      |

    @ANA_IBT005
    @analytics
    @ios @android
    @vbank @backend(test) @web
    @MX @web-done
    Scenario: Transfer - HUELLA - OTP
        Given a user with the following criteria
            | criteria |
            | Account  |
        And the user accesses to transfer from dashboard and selects a origin "account"
        And the user selects a destinatary from "new recipient"
        When the user will transfer to an "internal identified" account by entering the destination number
        And the user introduces amount and concept in transfer process
        Then the device contains the following variables
            | item                    | value                                           | type             |
            | version DL              | 20250414_5.0                                    | string           |
            | page name               | app:privada:personas:cuentas:transferencias:otp | string           |
            | level 1                 | cuentas                                         | string           |
            | level 2                 | transferencias                                  | string           |
            | level 3                 | otp                                             | string           |
            | language                | ES                                              | string           |
            | page area               | privada                                         | string           |
            | page intent             | informacion                                     | string           |
            | channel                 | online                                          | string           |
            | page instance ID        | de                                              | string           |
            | page info version       | appVersion                                      | regexp named     |
            | page segment            | personas                                        | string           |
            | sysEnv                  | app                                             | string           |
            | business unit           | BBVA Mexico                                     | string           |
            | site app name           | App BBVA Mexico                                 | string           |
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

    @ANA_IBT006
    @analytics
    @vbank @backend(test) @web
    @MX @web-done
    Scenario: Transfer - app completed - successful operation - contextual sale
        Given a user with the following criteria
            | criteria |
            | Account  |
        And the user starts the application at date:
            | day   | 28   |
            | month | 9    |
            | year  | 2022 |
            | hour  | 14   |
        And the user accesses to transfer from "account detail"
        And the user selects a destinatary from "new recipient"
        And the user will transfer to an "not found interbank" account by entering the destination number
        And the user introduces amount and concept in transfer process
        When the user completes the transfer process with otp code
        Then the device contains the following variables
            | item                                         | value                                                                                       | type         |
            | version DL                                   | 20250414_5.0                                                                                | string       |
            | page name                                    | app:privada:personas:cuentas:transferencias:pagina exitosa                                  | string       |
            | level 1                                      | cuentas                                                                                     | string       |
            | level 2                                      | transferencias                                                                              | string       |
            | level 3                                      | pagina exitosa                                                                              | string       |
            | language                                     | ES                                                                                          | string       |
            | page area                                    | privada                                                                                     | string       |
            | page intent                                  | transaccion                                                                                 | string       |
            | channel                                      | online                                                                                      | string       |
            | page instance ID                             | de                                                                                          | string       |
            | page info version                            | appVersion                                                                                  | regexp named |
            | page segment                                 | personas                                                                                    | string       |
            | sysEnv                                       | app                                                                                         | string       |
            | business unit                                | BBVA Mexico                                                                                 | string       |
            | site app name                                | App BBVA Mexico                                                                             | string       |
            | device mobile                                | si                                                                                          | string       |
            | user userState                               | logado                                                                                      | string       |
            | profile ID                                   | profileID                                                                                   | regexp named |
            | user segment global                          | 003001                                                                                      | string       |
            | user gender                                  | gender                                                                                      | regexp named |
            | user age                                     | age                                                                                         | regexp named |
            | global application                           | transfers                                                                                   | string       |
            | application name                             | transferencias                                                                              | string       |
            | application type                             | operativa                                                                                   | string       |
            | application step                             | pagina exitosa                                                                              | string       |
            | fulfillment model                            | online/offline                                                                              | string       |
            | application typology                         | otros bancos                                                                                | string       |
            | application process                          | cuentas                                                                                     | string       |
            | application state                            | finalizado                                                                                  | string       |
            | application operation number                 | 1574796102                                                                                  | string       |
            | product primary category                     | cuentas                                                                                     | string       |
            | product subtype                              | cuentas ahorro                                                                              | string       |
            | product amount                               | 20                                                                                          | number       |
            | product currency                             | MXN                                                                                         | string       |
            | product state                                | finalizado                                                                                  | string       |
            | internal campaign attributes location        | thank you page-transfers-centro-1-1                                                         | string       |
            | internal campaign attributes campaign format | banner crm                                                                                  | string       |
            | internal campaign attributes collective code |                                                                                             | string       |
            | internal campaign attributes campaign name   | -obten una tarjeta bbva preaprobada para disfrutar de puntocompras seguras descuentos y mas | string       |
            | internal campaign attributes product         | tarjeta de credito                                                                          | string       |
            | internal campaign attributes product code    |                                                                                             | string       |
            | internal campaign attributes quantity        | 60000.00                                                                                    | string       |
            | optimization attributes                      |                                                                                             | empty array  |

    @ANA_IBT007
    @analytics
    @vbank @backend(test) @web
    @MX @web-done
    Scenario: Transfer - CLICK TDC CAMPAIGN CONTEXTUAL SALES
        Given a user with the following criteria
            | criteria |
            | Account  |
        And the user starts the application at date:
            | day   | 28   |
            | month | 9    |
            | year  | 2022 |
            | hour  | 14   |
        And the user accesses to transfer from "account detail"
        And the user selects a destinatary from "new recipient"
        And the user will transfer to an "not found interbank" account by entering the destination number
        And the user introduces amount and concept in transfer process
        And the user completes the transfer process with otp code
        When the user selects the offer link
        Then the device contains the following variables
            | item                                         | value                                                                                                                                                                    | type         |
            | version DL                                   | 20250414_5.0                                                                                                                                                             | string       |
            | page name                                    | app:privada:personas:cuentas:transferencias:pagina exitosa                                                                                                               | string       |
            | level 1                                      | cuentas                                                                                                                                                                  | string       |
            | level 2                                      | transferencias                                                                                                                                                           | string       |
            | level 3                                      | pagina exitosa                                                                                                                                                           | string       |
            | language                                     | ES                                                                                                                                                                       | string       |
            | page area                                    | privada                                                                                                                                                                  | string       |
            | page intent                                  | transaccion                                                                                                                                                              | string       |
            | channel                                      | online                                                                                                                                                                   | string       |
            | page instance ID                             | de                                                                                                                                                                       | string       |
            | page info version                            | appVersion                                                                                                                                                               | regexp named |
            | page segment                                 | personas                                                                                                                                                                 | string       |
            | sysEnv                                       | app                                                                                                                                                                      | string       |
            | business unit                                | BBVA Mexico                                                                                                                                                              | string       |
            | site app name                                | App BBVA Mexico                                                                                                                                                          | string       |
            | device mobile                                | si                                                                                                                                                                       | string       |
            | user userState                               | logado                                                                                                                                                                   | string       |
            | user segment global                          | 003001                                                                                                                                                                   | string       |
            | profile ID                                   | profileID                                                                                                                                                                | regexp named |
            | user age                                     | age                                                                                                                                                                      | regexp named |
            | user gender                                  | gender                                                                                                                                                                   | regexp named |
            | global application                           | credit card holder                                                                                                                                                       | string       |
            | application name                             | tarjeta de credito one click                                                                                                                                             | string       |
            | application type                             | contratacion                                                                                                                                                             | string       |
            | application step                             | me interesa ventas contextuales                                                                                                                                          | string       |
            | fulfillment model                            | online                                                                                                                                                                   | string       |
            | internal campaign attributes location        | thank you page-transfers-centro-1-1                                                                                                                                      | string       |
            | internal campaign attributes campaign format | banner crm                                                                                                                                                               | string       |
            | internal campaign attributes collective code |                                                                                                                                                                          | string       |
            | internal campaign attributes campaign name   | -obten una tarjeta bbva preaprobada para disfrutar de puntocompras seguras descuentos y mas                                                                              | string       |
            | internal campaign attributes product         | tarjeta de credito                                                                                                                                                       | string       |
            | internal campaign attributes product code    |                                                                                                                                                                          | string       |
            | internal campaign attributes quantity        | 60000.00                                                                                                                                                                 | string       |
            | internal campaign event name                 | IntCmpClick                                                                                                                                                              | string       |
            | internal campaign site action name           | thank you page-transfers-centro-1-1:banner crm::-obten una tarjeta bbva preaprobada para disfrutar de puntocompras seguras descuentos y mas:tarjeta de credito::60000.00 | string       |
            | optimization attributes                      |                                                                                                                                                                          | empty array  |
            | products attributes                          |                                                                                                                                                                          | empty array  |

    @ANA_EVENT_IBT008
    @analytics
    @MX @vbank
    @backend(test)
    @ios @android @web @web-done
    Scenario: Transfer - PAGE VIEW TDC VENTAS CONTEXTUALES
        Given a user with the following criteria
            | criteria |
            | Account  |
        And the user starts the application at date:
            | day   | 28   |
            | month | 9    |
            | year  | 2022 |
            | hour  | 14   |
        And the user accesses to transfer from "account detail"
        And the user selects a destinatary from "new recipient"
        And the user will transfer to an "not found interbank" account by entering the destination number
        And the user introduces amount and concept in transfer process
        And the user completes the transfer process with otp code
        And the analytics interceptor service is initiated
        When the user exits the screen successfully
        Then the analytics events contains the following variables
            | item                    | value                                                               | type             | event     |
            | version DL              | 20250414_5.0                                                        | string           | Page View |
            | page name               | app:privada:personas:cuentas:detalle:transferencias:oferta tarjetas | string           | Page View |
            | level 1                 | cuentas                                                             | string           | Page View |
            | level 2                 | detalle                                                             | string           | Page View |
            | level 3                 | transferencias                                                      | string           | Page View |
            | level 4                 | oferta tarjetas                                                     | string           | Page View |
            | language                | ES                                                                  | string           | Page View |
            | page area               | privada                                                             | string           | Page View |
            | page intent             | informacion                                                         | string           | Page View |
            | channel                 | online                                                              | string           | Page View |
            | page instance ID        | de                                                                  | string           | Page View |
            | page info version       | appVersion                                                          | regexp named     | Page View |
            | page segment            | personas                                                            | string           | Page View |
            | sysEnv                  | app                                                                 | string           | Page View |
            | business unit           | BBVA Mexico                                                         | string           | Page View |
            | site app name           | App BBVA Mexico                                                     | string           | Page View |
            | device mobile           | si                                                                  | string           | Page View |
            | user userState          | logado                                                              | string           | Page View |
            | user segment global     | 003001                                                              | string           | Page View |
            | profile ID              | profileID                                                           | regexp named     | Page View |
            | user age                | age                                                                 | regexp named     | Page View |
            | user gender             | gender                                                              | regexp named     | Page View |
            | internal campaign       |                                                                     | empty array      | Page View |
            | optimization attributes |                                                                     | empty array      | Page View |
            | application             |                                                                     | empty str object | Page View |
            | products attributes     |                                                                     | empty array      | Page View |

    @ANA_IBT009
    @analytics
    @MX @vbank
    @backend(test)
    @ios @android @web @web-done
    Scenario: Transfer - APP ONCLICK START TDC CONTEXTUAL SALES
        Given a user with the following criteria
            | criteria |
            | Account  |
        And the user starts the application at date:
            | day   | 28   |
            | month | 9    |
            | year  | 2022 |
            | hour  | 14   |
        And the user accesses to transfer from "account detail"
        And the user selects a destinatary from "new recipient"
        And the user will transfer to an "not found interbank" account by entering the destination number
        And the user introduces amount and concept in transfer process
        And the user completes the transfer process with otp code
        And the user exits the screen successfully
        When the user selects the primary button of the modal
        Then the device contains the following variables
            | item                    | value                                                               | type         |
            | version DL              | 20250414_5.0                                                        | string       |
            | page name               | app:privada:personas:cuentas:detalle:transferencias:oferta tarjetas | string       |
            | level 1                 | cuentas                                                             | string       |
            | level 2                 | detalle                                                             | string       |
            | level 3                 | transferencias                                                      | string       |
            | level 4                 | oferta tarjetas                                                     | string       |
            | language                | ES                                                                  | string       |
            | page area               | privada                                                             | string       |
            | page intent             | informacion                                                         | string       |
            | channel                 | online                                                              | string       |
            | page instance ID        | de                                                                  | string       |
            | page info version       | appVersion                                                          | regexp named |
            | page segment            | personas                                                            | string       |
            | sysEnv                  | app                                                                 | string       |
            | business unit           | BBVA Mexico                                                         | string       |
            | site app name           | App BBVA Mexico                                                     | string       |
            | device mobile           | si                                                                  | string       |
            | user userState          | logado                                                              | string       |
            | user segment global     | 003001                                                              | string       |
            | profile ID              | profileID                                                           | regexp named |
            | user age                | age                                                                 | regexp named |
            | user gender             | gender                                                              | regexp named |
            | global application      | credit card holder                                                  | string       |
            | application name        | tarjeta de credito one click                                        | string       |
            | application type        | contratacion                                                        | string       |
            | application step        | me interesa ventas contextuales                                     | string       |
            | fulfillment model       | online                                                              | string       |
            | internal campaign       |                                                                     | empty array  |
            | optimization attributes |                                                                     | empty array  |
            | products attributes     |                                                                     | empty array  |

    @ANA_EQT010
    @analytics
    @MX @vbank
    @backend(test)
    @ios @android @web
    @tmpExclude @JIRA.GLOMOMX-254311
    Scenario: Transfer - Equity transfer from dashboard, from a equity contract to principal account
        Given a user with the following criteria
            | criteria         |
            | transfers equity |
        And the user accesses to transfer from dashboard and selects a origin "contract"
        And the user starts a transfer to a personal "principal" account
        When the user enter amount "20" and concept "donativo"
        And the user completes the transfer process
        Then the device contains the following variables
            | item                     | value                                                         | type         |
            | version DL               | 20250414_5.0                                                  | string       |
            | page name                | app:privada:patrimonial:cuentas:transferencias:pagina exitosa | string       |
            | level 1                  | cuentas                                                       | string       |
            | level 2                  | transferencias                                                | string       |
            | level 3                  | pagina exitosa                                                | string       |
            | language                 | ES                                                            | string       |
            | page area                | privada                                                       | string       |
            | page intent              | transaccion                                                   | string       |
            | channel                  | online                                                        | string       |
            | page instance ID         | de                                                            | string       |
            | page info version        | appVersion                                                    | regexp named |
            | page segment             | patrimonial                                                   | string       |
            | sysEnv                   | app                                                           | string       |
            | business unit            | BBVA Mexico                                                   | string       |
            | site app name            | App BBVA Mexico                                               | string       |
            | project name             | Glomo                                                         | string       |
            | device mobile            | si                                                            | string       |
            | user userState           | logado                                                        | string       |
            | profile ID               | profileID                                                     | regexp named |
            | user segment global      | 003001                                                        | string       |
            | user gender              | gender                                                        | regexp named |
            | user age                 | age                                                           | regexp named |
            | global application       | transfers                                                     | string       |
            | application name         | transferencias                                                | string       |
            | application type         | operativa                                                     | string       |
            | application step         | pagina exitosa                                                | string       |
            | fulfillment model        | online/offline                                                | string       |
            | application state        | finalizado                                                    | string       |
            | product primary category | cuentas                                                       | string       |
            | product subtype          | cuentas ahorro                                                | string       |
            | product amount           | 20                                                            | number       |
            | product currency         | MXN                                                           | string       |
            | product state            | finalizado                                                    | string       |
            | internal campaign        |                                                               | empty array  |
            | optimization attributes  |                                                               | empty array  |

    @ANA_EQT011
    @analytics
    @MX @vbank
    @backend(test)
    @ios @android @web
    @tmpExclude @JIRA.GLOMOMX-254311
    Scenario:  Validate - Equity transfer from dashboard, from a principal account to equity contract
        Given a user with the following criteria
            | criteria         |
            | transfers equity |
        And the user accesses to transfer from dashboard and selects a origin "principal"
        And the user starts a transfer to a personal "contract" account
        When the user enter amount "20" and concept "donativo"
        And the user completes the transfer process
        Then the device contains the following variables
            | item                         | value           | type         |
            | version DL                   | 20250414_5.0    | string       |
            | level 1                      | cuentas         | string       |
            | level 2                      | transferencias  | string       |
            | level 3                      | pagina exitosa  | string       |
            | language                     | ES              | string       |
            | page area                    | privada         | string       |
            | page intent                  | transaccion     | string       |
            | channel                      | online          | string       |
            | page instance ID             | de              | string       |
            | page info version            | appVersion      | regexp named |
            | page segment                 | patrimonial     | string       |
            | sysEnv                       | app             | string       |
            | business unit                | BBVA Mexico     | string       |
            | site app name                | App BBVA Mexico | string       |
            | project name                 | Glomo           | string       |
            | device mobile                | si              | string       |
            | user userState               | logado          | string       |
            | profile ID                   | profileID       | regexp named |
            | user segment global          | 003001          | string       |
            | user gender                  | gender          | regexp named |
            | user age                     | age             | regexp named |
            | global application           | transfers       | string       |
            | application name             | transferencias  | string       |
            | application type             | operativa       | string       |
            | application step             | pagina exitosa  | string       |
            | fulfillment model            | online/offline  | string       |
            | application process          | contratos       | string       |
            | application state            | finalizado      | string       |
            | application operation number | 500033078       | number       |
            | product primary category     | cuentas         | string       |
            | product subtype              | cuentas ahorro  | string       |
            | product amount               | 20              | number       |
            | product currency             | MXN             | string       |
            | product state                | finalizado      | string       |
            | internal campaign            |                 | empty array  |
            | optimization attributes      |                 | empty array  |

    @ANA_EVENT_RET007
    @analytics
    @ios @android
    @vbank @backend(test) @web
    @MX
    @tmpExclude @JIRA.GLOMOMX-254311
    Scenario: Transfer - app onclick start - reuse operation list
        Given a user with the following criteria
            | criteria |
            | accounts |
        And the user accesses to transfer from dashboard and selects a origin "account"
        And the analytics interceptor service is initiated
        When the user selects a destinatary from "reuse operations"
        Then the analytics events contains the following variables
            | item                     | value                                                        | type         | event       |
            | analytics                | analytics/glomo_base                                         | json schema  | App Started |
            | version DL               | 20250414_5.0                                                 | string       | App Started |
            | page name                | app:privada:personas:cuentas:transferencias:1 cuenta destino | string       | App Started |
            | level 1                  | cuentas                                                      | string       | App Started |
            | level 2                  | transferencias                                               | string       | App Started |
            | level 3                  | 1 cuenta destino                                             | string       | App Started |
            | language                 | ES                                                           | string       | App Started |
            | page area                | privada                                                      | string       | App Started |
            | page intent              | transaccion                                                  | string       | App Started |
            | channel                  | online                                                       | string       | App Started |
            | page instance ID         | de                                                           | string       | App Started |
            | page info version        | appVersion                                                   | regexp named | App Started |
            | page segment             | personas                                                     | string       | App Started |
            | sysEnv                   | app                                                          | string       | App Started |
            | business unit            | BBVA Mexico                                                  | string       | App Started |
            | site app name            | App BBVA Mexico                                              | string       | App Started |
            | project name             | Glomo                                                        | string       | App Started |
            | device mobile            | si                                                           | string       | App Started |
            | user userState           | logado                                                       | string       | App Started |
            | profile ID               | profileID                                                    | regexp named | App Started |
            | user segment global      | 003001                                                       | string       | App Started |
            | user gender              | gender                                                       | regexp named | App Started |
            | user age                 | age                                                          | regexp named | App Started |
            | global application       | transfers                                                    | string       | App Started |
            | application name         | transferencias                                               | string       | App Started |
            | application type         | operativa                                                    | string       | App Started |
            | application step         | reutilizar transferencia                                     | string       | App Started |
            | fulfillment model        | online/offline                                               | string       | App Started |
            | product primary category | cuentas                                                      | string       | App Started |
            | internal campaign        |                                                              | empty array  | App Started |
            | optimization attributes  |                                                              | empty array  | App Started |

    @ANA_EQT012
    @analytics
    @MX @vbank
    @backend(test)
    @ios @android @web
    @tmpExclude @JIRA.GLOMOMX-254311
    Scenario:  Validate - Modal invite to dimo when the user has no dimo account
        Given a user with the following criteria
            | criteria      |
            | dimo transfer |
            | accounts      |
        And the user accesses to transfer from "account detail"
        And the user selects a destinatary from "new recipient"
        And the user will transfer to an "with phone number not found in dimo" account by entering the destination number
        When the user invite the contact to Dimo
        Then the device contains the following variables
            | item                    | value                                                      | type             |
            | version DL              | 20250414_5.0                                               | string           |
            | page name               | app:privada:personas:cuentas:transferencias:invitar a dimo | string           |
            | level 1                 | cuentas                                                    | string           |
            | level 2                 | transferencias                                             | string           |
            | level 3                 | invitar a dimo                                             | string           |
            | language                | ES                                                         | string           |
            | page area               | privada                                                    | string           |
            | page intent             | informacion                                                | string           |
            | channel                 | online                                                     | string           |
            | page instance ID        | de                                                         | string           |
            | page info version       | appVersion                                                 | regexp named     |
            | page segment            | personas                                                   | string           |
            | sysEnv                  | app                                                        | string           |
            | business unit           | BBVA Mexico                                                | string           |
            | site app name           | App BBVA Mexico                                            | string           |
            | project name            | Glomo                                                      | string           |
            | device mobile           | si                                                         | string           |
            | user userState          | logado                                                     | string           |
            | profile ID              | profileID                                                  | regexp named     |
            | user segment global     | 003001                                                     | string           |
            | user gender             | gender                                                     | regexp named     |
            | user age                | age                                                        | regexp named     |
            | internal campaign       |                                                            | empty array      |
            | optimization attributes |                                                            | empty array      |
            | application             |                                                            | empty str object |
            | products attributes     |                                                            | empty array      |

    @ANA_IBT010
    @MX
    @analytics
    @vbank @backend(test)
    @ios @android @web
    @web-done
    @spherica
    Scenario: Fraud Movement Error Interbank - App Completed
        Given a user with the following criteria
            | criteria                |
            | aric fraud error        |
        And the user accesses to transfer from dashboard and selects a origin "principal"
        And the user selects a contact saved with the destination account "other banks"
        And the user enters amount "20" and concept "donativo" in transfer process
        And the analytics interceptor service is initiated
        When the user completes the transfer with otp code
        Then the analytics events contains the following variables:
            | item                          | value                                                      | type         | event         |
            | analytics                     | analytics/glomo_base                                       | json schema  | App Completed |
            | version DL                    | 20250414_5.0                                               | string       | App Completed |
            | page name                     | app:privada:personas:cuentas:transferencias:pagina exitosa | string       | App Completed |
            | level 1                       | cuentas                                                    | string       | App Completed |
            | level 2                       | transferencias                                             | string       | App Completed |
            | level 3                       | pagina exitosa                                             | string       | App Completed |
            | language                      | ES                                                         | string       | App Completed |
            | page area                     | privada                                                    | string       | App Completed |
            | page intent                   | transaccion                                                | string       | App Completed |
            | channel                       | online                                                     | string       | App Completed |
            | page instance ID              | de                                                         | string       | App Completed |
            | page info version             | appVersion                                                 | regexp named | App Completed |
            | page segment                  | personas                                                   | string       | App Completed |
            | sysEnv                        | app                                                        | string       | App Completed |
            | business unit                 | BBVA Mexico                                                | string       | App Completed |
            | site app name                 | App BBVA Mexico                                            | string       | App Completed |
            | project name                  | Glomo                                                      | string       | App Completed |
            | device mobile                 | si                                                         | string       | App Completed |
            | user userState                | logado                                                     | string       | App Completed |
            | profile ID                    | profileID                                                  | regexp named | App Completed |
            | user segment global           | 003001                                                     | string       | App Completed |
            | user gender                   | gender                                                     | regexp named | App Completed |
            | user age                      | age                                                        | regexp named | App Completed |
            | user segment profile	        | rechazado por posible fraude del movimiento                | string	    | App Completed |
            | global application            | transfers                                                  | string       | App Completed |
            | application name              | transferencias                                             | string       | App Completed |
            | application type              | operativa                                                  | string       | App Completed |
            | application step              | pagina exitosa                                             | string       | App Completed |
            | application typology          | otros bancos                                               | string       | App Completed |
            | application process           | cuentas                                                    | string       | App Completed |
            | application state             | rechazado                                                  | string       | App Completed |
            | fulfillment model             | online/offline                                             | string       | App Completed |
            | custom fields                 | firma:token                                                | string       | App Completed |
            | product primary category      | cuentas                                                    | string       | App Completed |
            | product subtype               | cuentas ahorro                                             | string       | App Completed |
            | product amount                | 20                                                         | number       | App Completed |
            | product currency              | MXN                                                        | string       | App Completed |
            | product state                 | rechazado                                                  | string       | App Completed |
            | internal campaign             |                                                            | empty array  | App Completed |
            | optimization attributes       |                                                            | empty array  | App Completed |

    @ANA_OWN003
    @MX
    @analytics
    @vbank @backend(test)
    @ios @android @web
    @web-done
    @spherica
    Scenario: Fraud Movement Error Own - App Completed
        Given a user with the following criteria
            | criteria                |
            | aric fraud error        |
        And the user accesses to transfer from dashboard and selects a origin "principal"
        And the user starts a transfer to a personal "credit" account
        And the analytics interceptor service is initiated
        And the user enter amount "20" and concept "donativo"
        When the user completes the own transfer
        Then the analytics events contains the following variables:
            | item                          | value                                                      | type         | event         |
            | analytics                     | analytics/glomo_base                                       | json schema  | App Completed |
            | version DL                    | 20250414_5.0                                               | string       | App Completed |
            | page name                     | app:privada:personas:cuentas:transferencias:pagina exitosa | string       | App Completed |
            | level 1                       | cuentas                                                    | string       | App Completed |
            | level 2                       | transferencias                                             | string       | App Completed |
            | level 3                       | pagina exitosa                                             | string       | App Completed |
            | language                      | ES                                                         | string       | App Completed |
            | page area                     | privada                                                    | string       | App Completed |
            | page intent                   | transaccion                                                | string       | App Completed |
            | channel                       | online                                                     | string       | App Completed |
            | page instance ID              | de                                                         | string       | App Completed |
            | page info version             | appVersion                                                 | regexp named | App Completed |
            | page segment                  | personas                                                   | string       | App Completed |
            | sysEnv                        | app                                                        | string       | App Completed |
            | business unit                 | BBVA Mexico                                                | string       | App Completed |
            | site app name                 | App BBVA Mexico                                            | string       | App Completed |
            | project name                  | Glomo                                                      | string       | App Completed |
            | device mobile                 | si                                                         | string       | App Completed |
            | user userState                | logado                                                     | string       | App Completed |
            | profile ID                    | profileID                                                  | regexp named | App Completed |
            | user segment global           | 003001                                                     | string       | App Completed |
            | user gender                   | gender                                                     | regexp named | App Completed |
            | user age                      | age                                                        | regexp named | App Completed |
            | user segment profile	        | rechazado por posible fraude del movimiento                | string	    | App Completed |
            | global application            | transfers                                                  | string       | App Completed |
            | application name              | transferencias                                             | string       | App Completed |
            | application type              | operativa                                                  | string       | App Completed |
            | application step              | pagina exitosa                                             | string       | App Completed |
            | application typology          | cuentas propias                                            | string       | App Completed |
            | application process           | cuentas                                                    | string       | App Completed |
            | application state             | rechazado                                                  | string       | App Completed |
            | fulfillment model             | online/offline                                             | string       | App Completed |
            | custom fields                 | firma:token                                                | string       | App Completed |
            | product primary category      | cuentas                                                    | string       | App Completed |
            | product subtype               | cuentas ahorro                                             | string       | App Completed |
            | product amount                | 20                                                         | number       | App Completed |
            | product currency              | MXN                                                        | string       | App Completed |
            | product state                 | rechazado                                                  | string       | App Completed |
            | internal campaign             |                                                            | empty array  | App Completed |
            | optimization attributes       |                                                            | empty array  | App Completed |

    @ANA_INT004
    @MX
    @analytics
    @vbank @backend(test)
    @ios @android @web
    @web-done
    @spherica
    Scenario: Fraud Movement Error Internal- App Completed
        Given a user with the following criteria
            | criteria                |
            | aric fraud error        |
        And the user accesses to transfer from dashboard and selects a origin "principal"
        And the user selects a contact saved with the destination account "saving bbva"
        And the user enters amount "20" and concept "donativo" in transfer process
        And the analytics interceptor service is initiated
        When the user completes the transfer with otp code
        Then the analytics events contains the following variables:
            | item                          | value                                                      | type         | event         |
            | analytics                     | analytics/glomo_base                                       | json schema  | App Completed |
            | version DL                    | 20250414_5.0                                               | string       | App Completed |
            | page name                     | app:privada:personas:cuentas:transferencias:pagina exitosa | string       | App Completed |
            | level 1                       | cuentas                                                    | string       | App Completed |
            | level 2                       | transferencias                                             | string       | App Completed |
            | level 3                       | pagina exitosa                                             | string       | App Completed |
            | language                      | ES                                                         | string       | App Completed |
            | page area                     | privada                                                    | string       | App Completed |
            | page intent                   | transaccion                                                | string       | App Completed |
            | channel                       | online                                                     | string       | App Completed |
            | page instance ID              | de                                                         | string       | App Completed |
            | page info version             | appVersion                                                 | regexp named | App Completed |
            | page segment                  | personas                                                   | string       | App Completed |
            | sysEnv                        | app                                                        | string       | App Completed |
            | business unit                 | BBVA Mexico                                                | string       | App Completed |
            | site app name                 | App BBVA Mexico                                            | string       | App Completed |
            | project name                  | Glomo                                                      | string       | App Completed |
            | device mobile                 | si                                                         | string       | App Completed |
            | user userState                | logado                                                     | string       | App Completed |
            | profile ID                    | profileID                                                  | regexp named | App Completed |
            | user segment global           | 003001                                                     | string       | App Completed |
            | user gender                   | gender                                                     | regexp named | App Completed |
            | user age                      | age                                                        | regexp named | App Completed |
            | user segment profile	        | rechazado por posible fraude del movimiento                | string	    | App Completed |
            | global application            | transfers                                                  | string       | App Completed |
            | application name              | transferencias                                             | string       | App Completed |
            | application type              | operativa                                                  | string       | App Completed |
            | application step              | pagina exitosa                                             | string       | App Completed |
            | application typology          | a terceros                                                 | string       | App Completed |
            | application process           | cuentas                                                    | string       | App Completed |
            | application state             | rechazado                                                  | string       | App Completed |
            | fulfillment model             | online/offline                                             | string       | App Completed |
            | custom fields                 | firma:token                                                | string       | App Completed |
            | product primary category      | cuentas                                                    | string       | App Completed |
            | product subtype               | cuentas ahorro                                             | string       | App Completed |
            | product amount                | 20                                                         | number       | App Completed |
            | product currency              | MXN                                                        | string       | App Completed |
            | product state                 | rechazado                                                  | string       | App Completed |
            | internal campaign             |                                                            | empty array  | App Completed |
            | optimization attributes       |                                                            | empty array  | App Completed |

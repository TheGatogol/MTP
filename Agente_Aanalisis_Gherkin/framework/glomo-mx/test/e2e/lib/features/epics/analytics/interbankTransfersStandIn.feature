@interbankTransferAlwaysOnTagging
Feature: Interbank Transfers Always On Analytics

    @ANA_EVENT_ITBTAO001
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: Interbank transfers always on - APP ON CLICK START
        Given a user with the following criteria
            | criteria                     |
            | always on pending movements  |
        And the user accesses to the operative account product detail
        And the analytics interceptor service is initiated
        When the user selects "transfer operative"
        Then the analytics events contains the following variables:
            | item                     | value                                | type         | event              |
            | version DL               | 20250414_5.0                         | string       | App On Click Start |
            | page name                | app:privada:personas:cuentas:detalle | string       | App On Click Start |
            | level 1                  | cuentas                              | string       | App On Click Start |
            | level 2                  | detalle                              | string       | App On Click Start |
            | language                 | ES                                   | string       | App On Click Start |
            | page area                | privada                              | string       | App On Click Start |
            | page intent              | informacion                          | string       | App On Click Start |
            | channel                  | online                               | string       | App On Click Start |
            | page instance ID         | de                                   | string       | App On Click Start |
            | page info version        | appVersion                           | regexp named | App On Click Start |
            | page segment             | personas                             | string       | App On Click Start |
            | sysEnv                   | app                                  | string       | App On Click Start |
            | business unit            | BBVA Mexico                          | string       | App On Click Start |
            | site app name            | App BBVA Mexico                      | string       | App On Click Start |
            | project name             | Glomo Always ON                      | string       | App On Click Start |
            | device mobile            | si                                   | string       | App On Click Start |
            | user userState           | logado                               | string       | App On Click Start |
            | user segment global      | 003001                               | string       | App On Click Start |
            | global application       | transfers                            | string       | App On Click Start |
            | application name         | transferencias                       | string       | App On Click Start |
            | application type         | operativa                            | string       | App On Click Start |
            | application step         | detalle de cuenta                    | string       | App On Click Start |
            | fulfillment model        | online/offline                       | string       | App On Click Start |
            | product primary category | cuentas                              | string       | App On Click Start |
            | internal campaign        |                                      | empty array  | App On Click Start |
            | optimization attributes  |                                      | empty array  | App On Click Start |

    @ANA_EVENT_ITBTAO002
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: Interbank transfers always on - APP PAGE VISIT
        Given a user with the following criteria
            | criteria                     |
            | always on pending movements  |
        And the user accesses to the operative account product detail
        And the analytics interceptor service is initiated
        When the user selects "transfer operative"
        Then the analytics events contains the following variables:
            | item                     | value                                                        | type         | event          |
            | version DL               | 20250414_5.0                                                 | string       | App Page Visit |
            | page name                | app:privada:personas:cuentas:transferencias:1 cuenta destino | string       | App Page Visit |
            | level 1                  | cuentas                                                      | string       | App Page Visit |
            | level 2                  | transferencias                                               | string       | App Page Visit |
            | language                 | ES                                                           | string       | App Page Visit |
            | page area                | privada                                                      | string       | App Page Visit |
            | page intent              | transaccion                                                  | string       | App Page Visit |
            | channel                  | online                                                       | string       | App Page Visit |
            | page instance ID         | de                                                           | string       | App Page Visit |
            | page info version        | appVersion                                                   | regexp named | App Page Visit |
            | page segment             | personas                                                     | string       | App Page Visit |
            | sysEnv                   | app                                                          | string       | App Page Visit |
            | business unit            | BBVA Mexico                                                  | string       | App Page Visit |
            | site app name            | App BBVA Mexico                                              | string       | App Page Visit |
            | project name             | Glomo Always ON                                              | string       | App Page Visit |
            | device mobile            | si                                                           | string       | App Page Visit |
            | user userState           | logado                                                       | string       | App Page Visit |
            | user segment global      | 003001                                                       | string       | App Page Visit |
            | global application       | transfers                                                    | string       | App Page Visit |
            | application name         | transferencias                                               | string       | App Page Visit |
            | application type         | operativa                                                    | string       | App Page Visit |
            | application step         | 1 cuenta destino                                             | string       | App Page Visit |
            | fulfillment model        | online/offline                                               | string       | App Page Visit |
            | product primary category | cuentas                                                      | string       | App Page Visit |
            | internal campaign        |                                                              | empty array  | App Page Visit |
            | optimization attributes  |                                                              | empty array  | App Page Visit |

    @ANA_EVENT_ITBTAO003
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: Interbank transfers always on - APP STARTED
        Given a user with the following criteria
            | criteria                     |
            | always on transfers          |
        When the user accesses to transfer from "account detail"
        And the analytics interceptor service is initiated
        And the user selects a contact saved with the destination account "ana"
        Then the analytics events contains the following variables:
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
            | project name             | Glomo Always ON                                              | string       | App Started |
            | device mobile            | si                                                           | string       | App Started |
            | user userState           | logado                                                       | string       | App Started |
            | user segment global      | 003001                                                       | string       | App Started |
            | global application       | transfers                                                    | string       | App Started |
            | application name         | transferencias                                               | string       | App Started |
            | application type         | operativa                                                    | string       | App Started |
            | application step         | contactos guardados                                          | string       | App Started |
            | fulfillment model        | online/offline                                               | string       | App Started |
            | product primary category | cuentas                                                      | string       | App Started |
            | internal campaign        |                                                              | empty array  | App Started |
            | optimization attributes  |                                                              | empty array  | App Started |

    @ANA_EVENT_ITBTAO004
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: Interbank transfers always on - APP STEP 2
        Given a user with the following criteria
            | criteria                     |
            | always on transfers          |
        When the user accesses to transfer from "account detail"
        And the analytics interceptor service is initiated
        And the user selects a contact saved with the destination account "ana"
        Then the analytics events contains the following variables:
            | item                     | value                                               | type         | event      |
            | version DL               | 20250414_5.0                                        | string       | App Step 2 |
            | page name                | app:privada:personas:cuentas:transferencias:2 monto | string       | App Step 2 |
            | level 1                  | cuentas                                             | string       | App Step 2 |
            | level 2                  | transferencias                                      | string       | App Step 2 |
            | level 3                  | 2 monto                                             | string       | App Step 2 |
            | language                 | ES                                                  | string       | App Step 2 |
            | page area                | privada                                             | string       | App Step 2 |
            | page intent              | transaccion                                         | string       | App Step 2 |
            | channel                  | online                                              | string       | App Step 2 |
            | page instance ID         | de                                                  | string       | App Step 2 |
            | page info version        | appVersion                                          | regexp named | App Step 2 |
            | page segment             | personas                                            | string       | App Step 2 |
            | sysEnv                   | app                                                 | string       | App Step 2 |
            | business unit            | BBVA Mexico                                         | string       | App Step 2 |
            | site app name            | App BBVA Mexico                                     | string       | App Step 2 |
            | project name             | Glomo Always ON                                     | string       | App Step 2 |
            | device mobile            | si                                                  | string       | App Step 2 |
            | user userState           | logado                                              | string       | App Step 2 |
            | user segment global      | 003001                                              | string       | App Step 2 |
            | global application       | transfers                                           | string       | App Step 2 |
            | application name         | transferencias                                      | string       | App Step 2 |
            | application type         | operativa                                           | string       | App Step 2 |
            | application step         | 2 monto                                             | string       | App Step 2 |
            | fulfillment model        | online/offline                                      | string       | App Step 2 |
            | application typology     | otros bancos                                        | string       | App Step 2 |
            | application process      | cuentas                                             | string       | App Step 2 |
            | product primary category | cuentas                                             | string       | App Step 2 |
            | internal campaign        |                                                     | empty array  | App Step 2 |
            | optimization attributes  |                                                     | empty array  | App Step 2 |

    @ANA_EVENT_ITBTAO005
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: Interbank transfers always on - APP STEP 3
        Given a user with the following criteria
            | criteria                     |
            | always on transfers          |
        When the user accesses to transfer from "account detail"
        And the user selects a contact saved with the destination account "ana"
        And the user accepts the modal
        And the analytics interceptor service is initiated
        And the user enter amount "300" and concept "pending transfer"
        Then the analytics events contains the following variables:
            | item                     | value                                                      | type         | event      |
            | version DL               | 20250414_5.0                                               | string       | App Step 3 |
            | page name                | app:privada:personas:cuentas:transferencias:3 confirmacion | string       | App Step 3 |
            | level 1                  | cuentas                                                    | string       | App Step 3 |
            | level 2                  | transferencias                                             | string       | App Step 3 |
            | level 3                  | 3 confirmacion                                             | string       | App Step 3 |
            | language                 | ES                                                         | string       | App Step 3 |
            | page area                | privada                                                    | string       | App Step 3 |
            | page intent              | transaccion                                                | string       | App Step 3 |
            | channel                  | online                                                     | string       | App Step 3 |
            | page instance ID         | de                                                         | string       | App Step 3 |
            | page info version        | appVersion                                                 | regexp named | App Step 3 |
            | page segment             | personas                                                   | string       | App Step 3 |
            | sysEnv                   | app                                                        | string       | App Step 3 |
            | business unit            | BBVA Mexico                                                | string       | App Step 3 |
            | site app name            | App BBVA Mexico                                            | string       | App Step 3 |
            | project name             | Glomo Always ON                                            | string       | App Step 3 |
            | device mobile            | si                                                         | string       | App Step 3 |
            | user userState           | logado                                                     | string       | App Step 3 |
            | user segment global      | 003001                                                     | string       | App Step 3 |
            | global application       | transfers                                                  | string       | App Step 3 |
            | application name         | transferencias                                             | string       | App Step 3 |
            | application type         | operativa                                                  | string       | App Step 3 |
            | application step         | 3 confirmacion                                             | string       | App Step 3 |
            | fulfillment model        | online/offline                                             | string       | App Step 3 |
            | application typology     | otros bancos                                               | string       | App Step 3 |
            | application process      | cuentas                                                    | string       | App Step 3 |
            | product primary category | cuentas                                                    | string       | App Step 3 |
            | product amount           | 300                                                        | number       | App Step 3 |
            | product currency         | MXN                                                        | string       | App Step 3 |
            | internal campaign        |                                                            | empty array  | App Step 3 |
            | optimization attributes  |                                                            | empty array  | App Step 3 |

    @ANA_EVENT_ITBTAO006
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: Interbank transfers always on - Huella concepto
        Given a user with the following criteria
            | criteria                     |
            | always on transfers          |
        When the user accesses to transfer from "account detail"
        And the user selects a contact saved with the destination account "ana"
        And the user accepts the modal
        And the analytics interceptor service is initiated
        And the user enter amount "300" and concept "pending transfer"
        Then the analytics events contains the following variables:
            | item                    | value                                                | type             | event     |
            | version DL              | 20250414_5.0                                         | string           | Page View |
            | page name               | app:privada:personas:cuentas:transferencias:concepto | string           | Page View |
            | level 1                 | cuentas                                              | string           | Page View |
            | level 2                 | transferencias                                       | string           | Page View |
            | level 3                 | concepto                                             | string           | Page View |
            | language                | ES                                                   | string           | Page View |
            | page area               | privada                                              | string           | Page View |
            | page intent             | informacion                                          | string           | Page View |
            | channel                 | online                                               | string           | Page View |
            | page instance ID        | de                                                   | string           | Page View |
            | page info version       | appVersion                                           | regexp named     | Page View |
            | page segment            | personas                                             | string           | Page View |
            | sysEnv                  | app                                                  | string           | Page View |
            | business unit           | BBVA Mexico                                          | string           | Page View |
            | site app name           | App BBVA Mexico                                      | string           | Page View |
            | project name            | Glomo Always ON                                      | string           | Page View |
            | device mobile           | si                                                   | string           | Page View |
            | user userState          | logado                                               | string           | Page View |
            | user segment global     | 003001                                               | string           | Page View |
            | internal campaign       |                                                      | empty array      | Page View |
            | optimization attributes |                                                      | empty array      | Page View |
            | application             |                                                      | empty str object | Page View |
            | products attributes     |                                                      | empty array      | Page View |

    @ANA_EVENT_ITBTAO007
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: Interbank transfers always on - Mis cuentas
        Given a user with the following criteria
            | criteria                     |
            | always on transfers          |
        And the user accesses to transfer from "account detail"
        And the analytics interceptor service is initiated
        When the user selects a destinatary from "my accounts"
        Then the analytics events contains the following variables:
            | item                    | value                                                        | type             | event     |
            | version DL              | 20250414_5.0                                                 | string           | Page View |
            | page name               | app:privada:personas:cuentas:transferencias:mis cuentas bbva | string           | Page View |
            | level 1                 | cuentas                                                      | string           | Page View |
            | level 2                 | transferencias                                               | string           | Page View |
            | level 3                 | mis cuentas bbva                                             | string           | Page View |
            | language                | ES                                                           | string           | Page View |
            | page area               | privada                                                      | string           | Page View |
            | page intent             | informacion                                                  | string           | Page View |
            | channel                 | online                                                       | string           | Page View |
            | page instance ID        | de                                                           | string           | Page View |
            | page info version       | appVersion                                                   | regexp named     | Page View |
            | page segment            | personas                                                     | string           | Page View |
            | sysEnv                  | app                                                          | string           | Page View |
            | business unit           | BBVA Mexico                                                  | string           | Page View |
            | site app name           | App BBVA Mexico                                              | string           | Page View |
            | project name            | Glomo Always ON                                              | string           | Page View |
            | device mobile           | si                                                           | string           | Page View |
            | user userState          | logado                                                       | string           | Page View |
            | user segment global     | 003001                                                       | string           | Page View |
            | internal campaign       |                                                              | empty array      | Page View |
            | optimization attributes |                                                              | empty array      | Page View |
            | application             |                                                              | empty str object | Page View |
            | products attributes     |                                                              | empty array      | Page View |

    @ANA_EVENT_ITBTAO008
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: Interbank transfers always on - Informative modal Huella concepto
        Given a user with the following criteria
            | criteria                     |
            | always on transfers          |
        And the user accesses to dashboard in stand in mode
        And the user accesses to transfer
        And the analytics interceptor service is initiated
        When the user selects a contact saved with the destination account "ana"
        Then the analytics events contains the following variables:
            | item                    | value                                                                 | type             | event     | event number |
            | version DL              | 20250414_5.0                                                          | string           | Page View | 2            |
            | page name               | app:privada:personas:cuentas:transferencias:informacion modo esencial | string           | Page View | 2            |
            | level 1                 | cuentas                                                               | string           | Page View | 2            |
            | level 2                 | transferencias                                                        | string           | Page View | 2            |
            | level 3                 | informacion modo esencial                                             | string           | Page View | 2            |
            | language                | ES                                                                    | string           | Page View | 2            |
            | page area               | privada                                                               | string           | Page View | 2            |
            | page intent             | informacion                                                           | string           | Page View | 2            |
            | channel                 | online                                                                | string           | Page View | 2            |
            | page instance ID        | de                                                                    | string           | Page View | 2            |
            | page info version       | appVersion                                                            | regexp named     | Page View | 2            |
            | page segment            | personas                                                              | string           | Page View | 2            |
            | sysEnv                  | app                                                                   | string           | Page View | 2            |
            | business unit           | BBVA Mexico                                                           | string           | Page View | 2            |
            | site app name           | App BBVA Mexico                                                       | string           | Page View | 2            |
            | project name            | Glomo Always ON                                                       | string           | Page View | 2            |
            | device mobile           | si                                                                    | string           | Page View | 2            |
            | user userState          | logado                                                                | string           | Page View | 2            |
            | user segment global     | 003001                                                                | string           | Page View | 2            |
            | internal campaign       |                                                                       | empty array      | Page View | 2            |
            | optimization attributes |                                                                       | empty array      | Page View | 2            |
            | application             |                                                                       | empty str object | Page View | 2            |
            | products attributes     |                                                                       | empty array      | Page View | 2            |

    @ANA_EVENT_ITBTAO009
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: Interbank transfers always on - Huella OTP contactos guardados
        Given a user with the following criteria
            | criteria                     |
            | always on transfers          |
        And the user accesses to dashboard in stand in mode
        And the user accesses to transfer
        And the analytics interceptor service is initiated
        When the user selects a contact saved with the destination account "ana"
        Then the analytics events contains the following variables:
            | item                    | value                                                           | type             | event     |
            | version DL              | 20250414_5.0                                                    | string           | Page View |
            | page name               | app:privada:personas:cuentas:transferencias:contactos guardados | string           | Page View |
            | level 1                 | cuentas                                                         | string           | Page View |
            | level 2                 | transferencias                                                  | string           | Page View |
            | level 3                 | contactos guardados                                             | string           | Page View |
            | language                | ES                                                              | string           | Page View |
            | page area               | privada                                                         | string           | Page View |
            | page intent             | informacion                                                     | string           | Page View |
            | channel                 | online                                                          | string           | Page View |
            | page instance ID        | de                                                              | string           | Page View |
            | page info version       | appVersion                                                      | regexp named     | Page View |
            | page segment            | personas                                                        | string           | Page View |
            | sysEnv                  | app                                                             | string           | Page View |
            | business unit           | BBVA Mexico                                                     | string           | Page View |
            | site app name           | App BBVA Mexico                                                 | string           | Page View |
            | project name            | Glomo Always ON                                                 | string           | Page View |
            | device mobile           | si                                                              | string           | Page View |
            | user userState          | logado                                                          | string           | Page View |
            | user segment global     | 003001                                                          | string           | Page View |
            | internal campaign       |                                                                 | empty array      | Page View |
            | optimization attributes |                                                                 | empty array      | Page View |
            | application             |                                                                 | empty str object | Page View |
            | products attributes     |                                                                 | empty array      | Page View |

    @ANA_EVENT_ITBTAO010
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: Interbank transfers always on - Huella OTP Transfers
        Given a user with the following criteria
            | criteria                     |
            | always on transfers          |
        And the user accesses to transfer from "account detail"
        And the user selects a contact saved with the destination account "ana"
        And the user accepts the modal
        And the analytics interceptor service is initiated
        When the user enters amount "2600" and concept "pending transfer" in transfer process
        Then the analytics events contains the following variables:
            | item                    | value                                           | type             | event     | event number |
            | version DL              | 20250414_5.0                                    | string           | Page View | 2            |
            | page name               | app:privada:personas:cuentas:transferencias:otp | string           | Page View | 2            |
            | level 1                 | cuentas                                         | string           | Page View | 2            |
            | level 2                 | transferencias                                  | string           | Page View | 2            |
            | level 3                 | otp                                             | string           | Page View | 2            |
            | language                | ES                                              | string           | Page View | 2            |
            | page area               | privada                                         | string           | Page View | 2            |
            | page intent             | informacion                                     | string           | Page View | 2            |
            | channel                 | online                                          | string           | Page View | 2            |
            | page instance ID        | de                                              | string           | Page View | 2            |
            | page info version       | appVersion                                      | regexp named     | Page View | 2            |
            | page segment            | personas                                        | string           | Page View | 2            |
            | sysEnv                  | app                                             | string           | Page View | 2            |
            | business unit           | BBVA Mexico                                     | string           | Page View | 2            |
            | site app name           | App BBVA Mexico                                 | string           | Page View | 2            |
            | project name            | Glomo Always ON                                 | string           | Page View | 2            |
            | device mobile           | si                                              | string           | Page View | 2            |
            | user userState          | logado                                          | string           | Page View | 2            |
            | user segment global     | 003001                                          | string           | Page View | 2            |
            | internal campaign       |                                                 | empty array      | Page View | 2            |
            | optimization attributes |                                                 | empty array      | Page View | 2            |
            | application             |                                                 | empty str object | Page View | 2            |
            | products attributes     |                                                 | empty array      | Page View | 2            |

    @ANA_EVENT_ITBTAO011
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: Interbank transfers always on - APP COMPLETED
        Given a user with the following criteria
            | criteria              |
            | always on transfers   |
        And the user accesses to transfer from "account detail"
        And the user selects a contact saved with the destination account "ana"
        And the user accepts the modal
        And the user enters amount "300" and concept "pending transfer" in transfer process
        And the analytics interceptor service is initiated
        When the user completes the transfer process with otp code
        Then the analytics events contains the following variables:
            | item                         | value                                                      | type         | event         |
            | version DL                   | 20250414_5.0                                               | string       | App Completed |
            | page name                    | app:privada:personas:cuentas:transferencias:pagina exitosa | string       | App Completed |
            | level 1                      | cuentas                                                    | string       | App Completed |
            | level 2                      | transferencias                                             | string       | App Completed |
            | level 3                      | pagina exitosa                                             | string       | App Completed |
            | language                     | ES                                                         | string       | App Completed |
            | page area                    | privada                                                    | string       | App Completed |
            | page intent                  | transaccion                                                | string       | App Completed |
            | channel                      | online                                                     | string       | App Completed |
            | page instance ID             | de                                                         | string       | App Completed |
            | page info version            | appVersion                                                 | regexp named | App Completed |
            | page segment                 | personas                                                   | string       | App Completed |
            | sysEnv                       | app                                                        | string       | App Completed |
            | business unit                | BBVA Mexico                                                | string       | App Completed |
            | site app name                | App BBVA Mexico                                            | string       | App Completed |
            | project name                 | Glomo Always ON                                            | string       | App Completed |
            | device mobile                | si                                                         | string       | App Completed |
            | user userState               | logado                                                     | string       | App Completed |
            | user segment global          | 003001                                                     | string       | App Completed |
            | global application           | transfers                                                  | string       | App Completed |
            | application name             | transferencias                                             | string       | App Completed |
            | application type             | operativa                                                  | string       | App Completed |
            | application step             | pagina exitosa                                             | string       | App Completed |
            | fulfillment model            | online/offline                                             | string       | App Completed |
            | application typology         | otros bancos                                               | string       | App Completed |
            | application process          | cuentas                                                    | string       | App Completed |
            | application state            | en revision                                                | string       | App Completed |
            | application operation number | MBAN0012345678                                             | string       | App Completed |
            | product primary category     | cuentas                                                    | string       | App Completed |
            | product subtype              | cuentas ahorro                                             | string       | App Completed |
            | product amount               | 300                                                        | number       | App Completed |
            | product currency             | MXN                                                        | string       | App Completed |
            | application state            | en revision                                                | string       | App Completed |
            | internal campaign            |                                                            | empty array  | App Completed |
            | optimization attributes      |                                                            | empty array  | App Completed |

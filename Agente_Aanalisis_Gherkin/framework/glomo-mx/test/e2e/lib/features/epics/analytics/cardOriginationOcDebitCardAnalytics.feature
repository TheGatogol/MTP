@ocDebitCardAnalytics
Feature: Analytics -  Oc Debit Card

    @ANA_EVENT_DCP001
    @MX @analytics
    @web @android @ios @web-done
    @backend(test) @vbank
    Scenario: Access to oc debit card page - App On Click Start - App Page Visit.
        Given a user with the following criteria
            | criteria              |
            | oc debit card         |
            | physical card request |
        And the user accesses to the "operative" "debit" card product detail
        And the analytics interceptor service is initiated
        When the user accesses to the oc debit card
        Then the analytics events contains the following variables
            | item                     | value                                                              | type         | event                              |
            | analytics                | analytics/glomo_base                                               | json schema  | App On Click Start, App Page Visit |
            | version DL               | 20250414_5.0                                                       | string       | App On Click Start, App Page Visit |
            | page name                | app:privada:personas:cuentas:detalle                               | string       | App On Click Start                 |
            | page name                | app:privada:personas:cuentas:solicitar tarjeta fisica:1 beneficios | string       | App Page Visit                     |
            | level 1                  | cuentas                                                            | string       | App On Click Start, App Page Visit |
            | level 2                  | detalle                                                            | string       | App On Click Start                 |
            | level 2                  | solicitar tarjeta fisica                                           | string       | App Page Visit                     |
            | level 3                  | 1 beneficios                                                       | string       | App Page Visit                     |
            | language                 | ES                                                                 | string       | App On Click Start, App Page Visit |
            | page area                | privada                                                            | string       | App On Click Start, App Page Visit |
            | page intent              | informacion                                                        | string       | App On Click Start                 |
            | page intent              | transaccion                                                        | string       | App Page Visit                     |
            | channel                  | online                                                             | string       | App On Click Start, App Page Visit |
            | page instance ID         | de                                                                 | string       | App On Click Start, App Page Visit |
            | page info version        | appVersion                                                         | regexp named | App On Click Start, App Page Visit |
            | page segment             | personas                                                           | string       | App On Click Start, App Page Visit |
            | sysEnv                   | app                                                                | string       | App On Click Start, App Page Visit |
            | business unit            | BBVA Mexico                                                        | string       | App On Click Start, App Page Visit |
            | site app name            | App BBVA Mexico                                                    | string       | App On Click Start, App Page Visit |
            | project name             | Glomo                                                              | string       | App On Click Start, App Page Visit |
            | device mobile            | si                                                                 | string       | App On Click Start, App Page Visit |
            | user userState           | logado                                                             | string       | App On Click Start, App Page Visit |
            | user segment global      | 003001                                                             | string       | App On Click Start, App Page Visit |
            | profile ID               | profileID                                                          | regexp named | App On Click Start, App Page Visit |
            | user gender              | gender                                                             | regexp named | App On Click Start, App Page Visit |
            | user age                 | age                                                                | regexp named | App On Click Start, App Page Visit |
            | global application       | account card delivery                                              | string       | App On Click Start, App Page Visit |
            | application name         | solicitar tarjeta fisica                                           | string       | App On Click Start, App Page Visit |
            | application type         | operativa                                                          | string       | App On Click Start, App Page Visit |
            | application step         | me interesa                                                        | string       | App On Click Start                 |
            | application step         | 1 beneficios                                                       | string       | App Page Visit                     |
            | fulfillment model        | online                                                             | string       | App On Click Start, App Page Visit |
            | product primary category | cuentas                                                            | string       | App On Click Start, App Page Visit |
            | product name             | cuenta nomina                                                      | string       | App On Click Start, App Page Visit |
            | internal campaign        |                                                                    | empty array  | App On Click Start, App Page Visit |
            | optimization attributes  |                                                                    | empty array  | App On Click Start, App Page Visit |

    @ANA_EVENT_DCP002
    @MX @analytics
    @web @android @ios @web-done
    @backend(test) @vbank
    Scenario: Accept the landing page - App Started - App Step 2.
        Given a user with the following criteria
            | criteria              |
            | oc debit card         |
            | physical card request |
        And the user accesses to the "operative" "debit" card product detail
        And the analytics interceptor service is initiated
        When the user accepts the oc debit card
        Then the analytics events contains the following variables
            | item                     | value                                                                   | type         | event                    |
            | analytics                | analytics/glomo_base                                                    | json schema  | App Started, App Step 2  |
            | version DL               | 20250414_5.0                                                            | string       | App Started, App Step 2  |
            | page name                | app:privada:personas:cuentas:solicitar tarjeta fisica:1 beneficios      | string       | App Started              |
            | page name                | app:privada:personas:cuentas:solicitar tarjeta fisica:2 direccion envio | string       | App Step 2               |
            | level 1                  | cuentas                                                                 | string       | App Started , App Step 2 |
            | level 2                  | solicitar tarjeta fisica                                                | string       | App Started, App Step 2  |
            | level 3                  | 1 beneficios                                                            | string       | App Started              |
            | level 3                  | 2 direccion envio                                                       | string       | App Step 2               |
            | language                 | ES                                                                      | string       | App Started, App Step 2  |
            | page area                | privada                                                                 | string       | App Started, App Step 2  |
            | page intent              | transaccion                                                             | string       | App Started, App Step 2  |
            | channel                  | online                                                                  | string       | App Started, App Step 2  |
            | page instance ID         | de                                                                      | string       | App Started, App Step 2  |
            | page info version        | appVersion                                                              | regexp named | App Started, App Step 2  |
            | page segment             | personas                                                                | string       | App Started, App Step 2  |
            | sysEnv                   | app                                                                     | string       | App Started, App Step 2  |
            | business unit            | BBVA Mexico                                                             | string       | App Started, App Step 2  |
            | site app name            | App BBVA Mexico                                                         | string       | App Started, App Step 2  |
            | project name             | Glomo                                                                   | string       | App Started, App Step 2  |
            | device mobile            | si                                                                      | string       | App Started, App Step 2  |
            | user userState           | logado                                                                  | string       | App Started, App Step 2  |
            | user segment global      | 003001                                                                  | string       | App Started, App Step 2  |
            | profile ID               | profileID                                                               | regexp named | App Started, App Step 2  |
            | user gender              | gender                                                                  | regexp named | App Started, App Step 2  |
            | user age                 | age                                                                     | regexp named | App Started, App Step 2  |
            | global application       | account card delivery                                                   | string       | App Started, App Step 2  |
            | application name         | solicitar tarjeta fisica                                                | string       | App Started, App Step 2  |
            | application type         | operativa                                                               | string       | App Started, App Step 2  |
            | application step         | empezar                                                                 | string       | App Started              |
            | application step         | 2 direccion envio                                                       | string       | App Step 2               |
            | fulfillment model        | online                                                                  | string       | App Started, App Step 2  |
            | product primary category | cuentas                                                                 | string       | App Started, App Step 2  |
            | product name             | cuenta nomina                                                           | string       | App Started, App Step 2  |
            | internal campaign        |                                                                         | empty array  | App Started, App Step 2  |
            | optimization attributes  |                                                                         | empty array  | App Started, App Step 2  |

    @ANA_EVENT_DCP003
    @MX @analytics
    @web @android @ios @web-done
    @backend(test) @vbank
    Scenario: Select delivery date - App Step 3.
        Given a user with the following criteria
            | criteria              |
            | oc debit card         |
            | physical card request |
        And the user accesses to the "operative" "debit" card product detail
        And the analytics interceptor service is initiated
        And the user accepts the oc debit card
        When the user continues "my address" delivery
        Then the analytics events contains the following variables
            | item                     | value                                                                     | type         | event      |
            | analytics                | analytics/glomo_base                                                      | json schema  | App Step 3 |
            | version DL               | 20250414_5.0                                                              | string       | App Step 3 |
            | page name                | app:privada:personas:cuentas:solicitar tarjeta fisica:3 programar entrega | string       | App Step 3 |
            | level 1                  | cuentas                                                                   | string       | App Step 3 |
            | level 2                  | solicitar tarjeta fisica                                                  | string       | App Step 3 |
            | level 3                  | 3 programar entrega                                                       | string       | App Step 3 |
            | language                 | ES                                                                        | string       | App Step 3 |
            | page area                | privada                                                                   | string       | App Step 3 |
            | page intent              | transaccion                                                               | string       | App Step 3 |
            | channel                  | online                                                                    | string       | App Step 3 |
            | page instance ID         | de                                                                        | string       | App Step 3 |
            | page info version        | appVersion                                                                | regexp named | App Step 3 |
            | page segment             | personas                                                                  | string       | App Step 3 |
            | sysEnv                   | app                                                                       | string       | App Step 3 |
            | business unit            | BBVA Mexico                                                               | string       | App Step 3 |
            | site app name            | App BBVA Mexico                                                           | string       | App Step 3 |
            | project name             | Glomo                                                                     | string       | App Step 3 |
            | device mobile            | si                                                                        | string       | App Step 3 |
            | user userState           | logado                                                                    | string       | App Step 3 |
            | user segment global      | 003001                                                                    | string       | App Step 3 |
            | profile ID               | profileID                                                                 | regexp named | App Step 3 |
            | user gender              | gender                                                                    | regexp named | App Step 3 |
            | user age                 | age                                                                       | regexp named | App Step 3 |
            | global application       | account card delivery                                                     | string       | App Step 3 |
            | application name         | solicitar tarjeta fisica                                                  | string       | App Step 3 |
            | application type         | operativa                                                                 | string       | App Step 3 |
            | application step         | 3 programar entrega                                                       | string       | App Step 3 |
            | fulfillment model        | online                                                                    | string       | App Step 3 |
            | product primary category | cuentas                                                                   | string       | App Step 3 |
            | product name             | cuenta nomina                                                             | string       | App Step 3 |
            | product amount           | 156.60                                                                    | number       | App Step 3 |
            | product currency         | MXN                                                                       | string       | App Step 3 |
            | internal campaign        |                                                                           | empty array  | App Step 3 |
            | optimization attributes  |                                                                           | empty array  | App Step 3 |

    @ANA_EVENT_DCP004
    @MX @analytics
    @web @android @ios @web-done
    @backend(test) @vbank
    Scenario: See summary view - App Step 4.
        Given a user with the following criteria
            | criteria              |
            | oc debit card         |
            | physical card request |
        And the user accesses to the "operative" "debit" card product detail
        And the analytics interceptor service is initiated
        And the user accepts the oc debit card
        And the user continues "my address" delivery
        When the user chooses the delivery date
        Then the analytics events contains the following variables
            | item                     | value                                                                | type         | event      |
            | analytics                | analytics/glomo_base                                                 | json schema  | App Step 4 |
            | version DL               | 20250414_5.0                                                         | string       | App Step 4 |
            | page name                | app:privada:personas:cuentas:solicitar tarjeta fisica:4 confirmacion | string       | App Step 4 |
            | level 1                  | cuentas                                                              | string       | App Step 4 |
            | level 2                  | solicitar tarjeta fisica                                             | string       | App Step 4 |
            | level 3                  | 4 confirmacion                                                       | string       | App Step 4 |
            | language                 | ES                                                                   | string       | App Step 4 |
            | page area                | privada                                                              | string       | App Step 4 |
            | page intent              | transaccion                                                          | string       | App Step 4 |
            | channel                  | online                                                               | string       | App Step 4 |
            | page instance ID         | de                                                                   | string       | App Step 4 |
            | page info version        | appVersion                                                           | regexp named | App Step 4 |
            | page segment             | personas                                                             | string       | App Step 4 |
            | sysEnv                   | app                                                                  | string       | App Step 4 |
            | business unit            | BBVA Mexico                                                          | string       | App Step 4 |
            | site app name            | App BBVA Mexico                                                      | string       | App Step 4 |
            | project name             | Glomo                                                                | string       | App Step 4 |
            | device mobile            | si                                                                   | string       | App Step 4 |
            | user userState           | logado                                                               | string       | App Step 4 |
            | user segment global      | 003001                                                               | string       | App Step 4 |
            | profile ID               | profileID                                                            | regexp named | App Step 4 |
            | user gender              | gender                                                               | regexp named | App Step 4 |
            | user age                 | age                                                                  | regexp named | App Step 4 |
            | global application       | account card delivery                                                | string       | App Step 4 |
            | application name         | solicitar tarjeta fisica                                             | string       | App Step 4 |
            | application type         | operativa                                                            | string       | App Step 4 |
            | application step         | 4 confirmacion                                                       | string       | App Step 4 |
            | fulfillment model        | online                                                               | string       | App Step 4 |
            | product primary category | cuentas                                                              | string       | App Step 4 |
            | product name             | cuenta nomina                                                        | string       | App Step 4 |
            | product amount           | 156.60                                                               | number       | App Step 4 |
            | product currency         | MXN                                                                  | string       | App Step 4 |
            | internal campaign        |                                                                      | empty array  | App Step 4 |
            | optimization attributes  |                                                                      | empty array  | App Step 4 |

    @ANA_EVENT_DCP005
    @MX @analytics
    @web @android @ios @web-done
    @backend(test) @vbank
    Scenario: Completes the process - App Completed.
        Given a user with the following criteria
            | criteria              |
            | oc debit card         |
            | physical card request |
        And the user accesses to the "operative" "debit" card product detail
        And the analytics interceptor service is initiated
        And the user accepts the oc debit card
        When the user completes the oc debit card request
        Then the analytics events contains the following variables
            | item                         | value                                                                | type         | event         |
            | analytics                    | analytics/glomo_base                                                 | json schema  | App Completed |
            | version DL                   | 20250414_5.0                                                         | string       | App Completed |
            | page name                    | app:privada:personas:cuentas:solicitar tarjeta fisica:pagina exitosa | string       | App Completed |
            | level 1                      | cuentas                                                              | string       | App Completed |
            | level 2                      | solicitar tarjeta fisica                                             | string       | App Completed |
            | level 3                      | pagina exitosa                                                       | string       | App Completed |
            | language                     | ES                                                                   | string       | App Completed |
            | page area                    | privada                                                              | string       | App Completed |
            | page intent                  | transaccion                                                          | string       | App Completed |
            | channel                      | online                                                               | string       | App Completed |
            | page instance ID             | de                                                                   | string       | App Completed |
            | page info version            | appVersion                                                           | regexp named | App Completed |
            | page segment                 | personas                                                             | string       | App Completed |
            | sysEnv                       | app                                                                  | string       | App Completed |
            | business unit                | BBVA Mexico                                                          | string       | App Completed |
            | site app name                | App BBVA Mexico                                                      | string       | App Completed |
            | project name                 | Glomo                                                                | string       | App Completed |
            | device mobile                | si                                                                   | string       | App Completed |
            | user userState               | logado                                                               | string       | App Completed |
            | user segment global          | 003001                                                               | string       | App Completed |
            | profile ID                   | profileID                                                            | regexp named | App Completed |
            | user gender                  | gender                                                               | regexp named | App Completed |
            | user age                     | age                                                                  | regexp named | App Completed |
            | global application           | account card delivery                                                | string       | App Completed |
            | application name             | solicitar tarjeta fisica                                             | string       | App Completed |
            | application type             | operativa                                                            | string       | App Completed |
            | application step             | pagina exitosa                                                       | string       | App Completed |
            | fulfillment model            | online                                                               | string       | App Completed |
            | application state            | finalizado                                                           | string       | App Completed |
            | application operation number | 1046                                                                 | string       | App Completed |
            | product primary category     | cuentas                                                              | string       | App Completed |
            | product name                 | cuenta nomina                                                        | string       | App Completed |
            | product amount               | 156.60                                                               | number       | App Completed |
            | product currency             | MXN                                                                  | string       | App Completed |
            | product state                | finalizado                                                           | string       | App Completed |
            | internal campaign            |                                                                      | empty array  | App Completed |
            | optimization attributes      |                                                                      | empty array  | App Completed |

    @ANA_EVENT_DCP006
    @MX @analytics
    @web @android @ios @web-done
    @backend(test) @vbank
    Scenario: Card delivery information modal - Page View.
        Given a user with the following criteria
            | criteria              |
            | oc debit card         |
            | physical card request |
        And the user accesses to the "operative" "debit" card product detail
        And the analytics interceptor service is initiated
        And the user accepts the oc debit card
        When the user deploys the delivery information modal
        Then the analytics events contains the following variables
            | item                    | value                                                                                      | type             | event     |
            | analytics               | analytics/glomo_base                                                                       | json schema      | Page View |
            | version DL              | 20250414_5.0                                                                               | string           | Page View |
            | page name               | app:privada:personas:cuentas:solicitar tarjeta fisica:2 direccion envio:entrega de tarjeta | string           | Page View |
            | level 1                 | cuentas                                                                                    | string           | Page View |
            | level 2                 | solicitar tarjeta fisica                                                                   | string           | Page View |
            | level 3                 | 2 direccion envio                                                                          | string           | Page View |
            | level 4                 | entrega de tarjeta                                                                         | string           | Page View |
            | language                | ES                                                                                         | string           | Page View |
            | page area               | privada                                                                                    | string           | Page View |
            | page intent             | transaccion                                                                                | string           | Page View |
            | channel                 | online                                                                                     | string           | Page View |
            | page instance ID        | de                                                                                         | string           | Page View |
            | page info version       | appVersion                                                                                 | regexp named     | Page View |
            | page segment            | personas                                                                                   | string           | Page View |
            | sysEnv                  | app                                                                                        | string           | Page View |
            | business unit           | BBVA Mexico                                                                                | string           | Page View |
            | site app name           | App BBVA Mexico                                                                            | string           | Page View |
            | project name            | Glomo                                                                                      | string           | Page View |
            | device mobile           | si                                                                                         | string           | Page View |
            | user userState          | logado                                                                                     | string           | Page View |
            | user segment global     | 003001                                                                                     | string           | Page View |
            | profile ID              | profileID                                                                                  | regexp named     | Page View |
            | user gender             | gender                                                                                     | regexp named     | Page View |
            | user age                | age                                                                                        | regexp named     | Page View |
            | internal campaign       |                                                                                            | empty array      | Page View |
            | optimization attributes |                                                                                            | empty array      | Page View |
            | application             |                                                                                            | empty str object | Page View |
            | products attributes     |                                                                                            | empty array      | Page View |

    @ANA_EVENT_DCP007
    @MX @analytics
    @web @android @ios @web-done
    @backend(test) @vbank
    Scenario: Other address service error - Page View.
        Given a user with the following criteria
            | criteria              |
            | oc debit card         |
            | physical card request |
        And the user accesses to the "operative" "debit" card product detail
        And the analytics interceptor service is initiated
        And the user accepts the oc debit card
        And the user fills the other address form with "97060" postal code
        When the user retries "3" times
        Then the analytics events contains the following variables
            | item                    | value                                                                   | type             | event     |
            | analytics               | analytics/glomo_base                                                    | json schema      | Page View |
            | version DL              | 20250414_5.0                                                            | string           | Page View |
            | page name               | app:privada:personas:cuentas:solicitar tarjeta fisica:error de servicio | string           | Page View |
            | level 1                 | cuentas                                                                 | string           | Page View |
            | level 2                 | solicitar tarjeta fisica                                                | string           | Page View |
            | level 3                 | error de servicio                                                       | string           | Page View |
            | language                | ES                                                                      | string           | Page View |
            | page area               | privada                                                                 | string           | Page View |
            | page intent             | transaccion                                                             | string           | Page View |
            | channel                 | online                                                                  | string           | Page View |
            | page instance ID        | de                                                                      | string           | Page View |
            | page info version       | appVersion                                                              | regexp named     | Page View |
            | page segment            | personas                                                                | string           | Page View |
            | sysEnv                  | app                                                                     | string           | Page View |
            | business unit           | BBVA Mexico                                                             | string           | Page View |
            | site app name           | App BBVA Mexico                                                         | string           | Page View |
            | project name            | Glomo                                                                   | string           | Page View |
            | device mobile           | si                                                                      | string           | Page View |
            | user userState          | logado                                                                  | string           | Page View |
            | user segment global     | 003001                                                                  | string           | Page View |
            | profile ID              | profileID                                                               | regexp named     | Page View |
            | user gender             | gender                                                                  | regexp named     | Page View |
            | user age                | age                                                                     | regexp named     | Page View |
            | error page              | error de servicio                                                       | string           | Page View |
            | internal campaign       |                                                                         | empty array      | Page View |
            | optimization attributes |                                                                         | empty array      | Page View |
            | application             |                                                                         | empty str object | Page View |
            | products attributes     |                                                                         | empty array      | Page View |

    @ANA_EVENT_DCP008
    @MX @analytics
    @web @android @ios @web-done
    @backend(test) @vbank
    Scenario: Show my address unmask - Page View.
        Given a user with the following criteria
            | criteria              |
            | oc debit card         |
            | physical card request |
        And the user accesses to the "operative" "debit" card product detail
        And the analytics interceptor service is initiated
        And the user accepts the oc debit card
        When the user "shows" the shipping address
        Then the analytics events contains the following variables
            | item                    | value                                                     | type             | event     |
            | analytics               | analytics/glomo_base                                      | json schema      | Page View |
            | version DL              | 20250414_5.0                                              | string           | Page View |
            | page name               | app:privada:personas:cuentas:solicitar tarjeta fisica:otp | string           | Page View |
            | level 1                 | cuentas                                                   | string           | Page View |
            | level 2                 | solicitar tarjeta fisica                                  | string           | Page View |
            | level 3                 | otp                                                       | string           | Page View |
            | language                | ES                                                        | string           | Page View |
            | page area               | privada                                                   | string           | Page View |
            | page intent             | transaccion                                               | string           | Page View |
            | channel                 | online                                                    | string           | Page View |
            | page instance ID        | de                                                        | string           | Page View |
            | page info version       | appVersion                                                | regexp named     | Page View |
            | page segment            | personas                                                  | string           | Page View |
            | sysEnv                  | app                                                       | string           | Page View |
            | business unit           | BBVA Mexico                                               | string           | Page View |
            | site app name           | App BBVA Mexico                                           | string           | Page View |
            | project name            | Glomo                                                     | string           | Page View |
            | device mobile           | si                                                        | string           | Page View |
            | user userState          | logado                                                    | string           | Page View |
            | user segment global     | 003001                                                    | string           | Page View |
            | profile ID              | profileID                                                 | regexp named     | Page View |
            | user gender             | gender                                                    | regexp named     | Page View |
            | user age                | age                                                       | regexp named     | Page View |
            | custom fields           | firma:token                                               | string           | Page View |
            | internal campaign       |                                                           | empty array      | Page View |
            | optimization attributes |                                                           | empty array      | Page View |
            | application             |                                                           | empty str object | Page View |
            | products attributes     |                                                           | empty array      | Page View |

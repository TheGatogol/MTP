@changeCreditLimitsAdditionalCardsAnalytics
Feature: Analytics - Change Credit Limits Additional Cards

    @ANA_EVENT_CLAC001
    @analytics
    @web @android @ios
    @MX @backend(artichoke) @vbank
    @web-done
    Scenario: Funnel - Change Credit Limits Additional Cards - Events App On Click Start, App Page Visit
        Given a user with the following criteria
            | criteria             |
            | additional cards     |
            | operative additional |
        And the user accesses the detail of the additional "operative" "current" card from the associated "operative credit card"
        And the analytics interceptor service is initiated
        When the user accesses to change limits
        Then the analytics events contains the following variables
            | item                     | value                                                                       | type         | event                              |
            | analytics                | analytics/glomo_base                                                        | json schema  | App On Click Start, App Page Visit |
            | version DL               | 20250414_5.0                                                                | string       | App On Click Start, App Page Visit |
            | page name                | app:privada:personas:tarjetas credito:tarjeta adicional:detalle             | string       | App On Click Start                 |
            | page name                | app:privada:personas:tarjetas credito:tarjeta adicional:1 modificar limites | string       | App Page Visit                     |
            | level 1                  | tarjetas credito                                                            | string       | App On Click Start, App Page Visit |
            | level 2                  | tarjeta adicional                                                           | string       | App On Click Start, App Page Visit |
            | level 3                  | detalle                                                                     | string       | App On Click Start                 |
            | level 3                  | 1 modificar limites                                                         | string       | App Page Visit                     |
            | language                 | ES                                                                          | string       | App On Click Start, App Page Visit |
            | page area                | privada                                                                     | string       | App On Click Start, App Page Visit |
            | page intent              | informacion                                                                 | string       | App On Click Start                 |
            | page intent              | transaccion                                                                 | string       | App Page Visit                     |
            | channel                  | online                                                                      | string       | App On Click Start, App Page Visit |
            | page instance ID         | de                                                                          | string       | App On Click Start, App Page Visit |
            | page info version        | appVersion                                                                  | regexp named | App On Click Start, App Page Visit |
            | page segment             | personas                                                                    | string       | App On Click Start, App Page Visit |
            | sysEnv                   | app                                                                         | string       | App On Click Start, App Page Visit |
            | business unit            | BBVA Mexico                                                                 | string       | App On Click Start, App Page Visit |
            | site app name            | App BBVA Mexico                                                             | string       | App On Click Start, App Page Visit |
            | project name             | DIY Payments                                                                | string       | App On Click Start, App Page Visit |
            | device mobile            | si                                                                          | string       | App On Click Start, App Page Visit |
            | user userState           | logado                                                                      | string       | App On Click Start, App Page Visit |
            | user segment global      | 003001                                                                      | string       | App On Click Start, App Page Visit |
            | profile ID               | profileID                                                                   | regexp named | App On Click Start, App Page Visit |
            | user age                 | age                                                                         | regexp named | App On Click Start, App Page Visit |
            | user gender              | gender                                                                      | regexp named | App On Click Start, App Page Visit |
            | global application       | card balance limits update                                                  | string       | App On Click Start, App Page Visit |
            | application name         | limite tarjeta adicional                                                    | string       | App On Click Start, App Page Visit |
            | application type         | operativa                                                                   | string       | App On Click Start, App Page Visit |
            | application step         | cambiar limite                                                              | string       | App On Click Start                 |
            | application step         | 1 modificar limites                                                         | string       | App Page Visit                     |
            | fulfillment model        | online                                                                      | string       | App On Click Start, App Page Visit |
            | product primary category | tarjetas                                                                    | string       | App On Click Start, App Page Visit |
            | product subtype          | tarjetas credito                                                            | string       | App On Click Start, App Page Visit |
            | product name             | simulations 500                                                             | string       | App On Click Start, App Page Visit |
            | internal campaign        |                                                                             | empty array  | App On Click Start, App Page Visit |
            | optimization attributes  |                                                                             | empty array  | App On Click Start, App Page Visit |

    @ANA_CLAC002
    @analytics
    @web @android @ios @web-done
    @MX @backend(artichoke) @vbank
    Scenario: Funnel - Change Credit Limits Additional Cards - App Started
        Given a user with the following criteria
            | criteria             |
            | additional cards     |
            | operative additional |
        And the user accesses the detail of the additional "operative" "current" card from the associated "operative credit card"
        And the user accesses to change limits
        When the user introduces "1000" as new limit amount
        Then the device contains the following variables
            | item                     | value                                                                       | type         |
            | analytics                | analytics/glomo_base                                                        | json schema  |
            | version DL               | 20250414_5.0                                                                | string       |
            | page name                | app:privada:personas:tarjetas credito:tarjeta adicional:1 modificar limites | string       |
            | level 1                  | tarjetas credito                                                            | string       |
            | level 2                  | tarjeta adicional                                                           | string       |
            | level 3                  | 1 modificar limites                                                         | string       |
            | language                 | ES                                                                          | string       |
            | page area                | privada                                                                     | string       |
            | page intent              | transaccion                                                                 | string       |
            | channel                  | online                                                                      | string       |
            | page instance ID         | de                                                                          | string       |
            | page info version        | appVersion                                                                  | regexp named |
            | page segment             | personas                                                                    | string       |
            | sysEnv                   | app                                                                         | string       |
            | business unit            | BBVA Mexico                                                                 | string       |
            | site app name            | App BBVA Mexico                                                             | string       |
            | project name             | DIY Payments                                                                | string       |
            | device mobile            | si                                                                          | string       |
            | user userState           | logado                                                                      | string       |
            | user segment global      | 003001                                                                      | string       |
            | profile ID               | profileID                                                                   | regexp named |
            | user age                 | age                                                                         | regexp named |
            | user gender              | gender                                                                      | regexp named |
            | global application       | card balance limits update                                                  | string       |
            | application name         | limite tarjeta adicional                                                    | string       |
            | application type         | operativa                                                                   | string       |
            | application step         | nuevo limite de credito                                                     | string       |
            | fulfillment model        | online                                                                      | string       |
            | product primary category | tarjetas                                                                    | string       |
            | product subtype          | tarjetas credito                                                            | string       |
            | product name             | simulations 500                                                             | string       |
            | internal campaign        |                                                                             | empty array  |
            | optimization attributes  |                                                                             | empty array  |

    @ANA_CLAC003
    @analytics
    @web @android @ios @web-done
    @MX @backend(artichoke) @vbank
    Scenario: Funnel - Change Credit Limits Additional Cards - App Completed
        Given a user with the following criteria
            | criteria             |
            | additional cards     |
            | operative additional |
        And the user accesses the detail of the additional "operative" "current" card from the associated "operative credit card"
        When the user changes limits of a additional card
        Then the device contains the following variables
            | item                     | value                                                                  | type         |
            | analytics                | analytics/glomo_base                                                   | json schema  |
            | version DL               | 20250414_5.0                                                           | string       |
            | page name                | app:privada:personas:tarjetas credito:tarjeta adicional:pagina exitosa | string       |
            | level 1                  | tarjetas credito                                                       | string       |
            | level 2                  | tarjeta adicional                                                      | string       |
            | level 3                  | pagina exitosa                                                         | string       |
            | language                 | ES                                                                     | string       |
            | page area                | privada                                                                | string       |
            | page intent              | transaccion                                                            | string       |
            | channel                  | online                                                                 | string       |
            | page instance ID         | de                                                                     | string       |
            | page info version        | appVersion                                                             | regexp named |
            | page segment             | personas                                                               | string       |
            | sysEnv                   | app                                                                    | string       |
            | business unit            | BBVA Mexico                                                            | string       |
            | site app name            | App BBVA Mexico                                                        | string       |
            | project name             | DIY Payments                                                           | string       |
            | device mobile            | si                                                                     | string       |
            | user userState           | logado                                                                 | string       |
            | user segment global      | 003001                                                                 | string       |
            | profile ID               | profileID                                                              | regexp named |
            | user age                 | age                                                                    | regexp named |
            | user gender              | gender                                                                 | regexp named |
            | global application       | card balance limits update                                             | string       |
            | application name         | limite tarjeta adicional                                               | string       |
            | application type         | operativa                                                              | string       |
            | application step         | pagina exitosa                                                         | string       |
            | fulfillment model        | online                                                                 | string       |
            | application state        | finalizado                                                             | string       |
            | product primary category | tarjetas                                                               | string       |
            | product subtype          | tarjetas credito                                                       | string       |
            | product name             | simulations 500                                                        | string       |
            | product amount           | 1000                                                                   | string       |
            | product currency         | MXN                                                                    | string       |
            | internal campaign        |                                                                        | empty array  |

    @ANA_CLAC004
    @analytics
    @web @android @ios @web-done
    @MX @backend(artichoke) @vbank
    Scenario: Advanced footprint - Change Credit Limits Additional Cards - Unavailable Information Error
        Given a user with the following criteria
            | criteria             |
            | additional cards     |
            | operative additional |
        And the user accesses the detail of the additional "operative" "always error get limits" card from the associated "operative credit card"
        When the user accesses to change limits
        Then the user sees a "big" modal
        And the device contains the following variables
            | item                    | value                                                                                           | type             |
            | analytics               | analytics/glomo_base                                                                            | json schema      |
            | page name               | app:privada:personas:tarjetas credito:tarjeta adicional:detalle:error informacion no disponible | string           |
            | level 1                 | tarjetas credito                                                                                | string           |
            | level 2                 | tarjeta adicional                                                                               | string           |
            | level 3                 | detalle                                                                                         | string           |
            | level 4                 | error informacion no disponible                                                                 | string           |
            | error page              | error informacion no disponible                                                                 | string           |
            | language                | ES                                                                                              | string           |
            | page area               | privada                                                                                         | string           |
            | page intent             | transaccion                                                                                     | string           |
            | channel                 | online                                                                                          | string           |
            | page instance ID        | de                                                                                              | string           |
            | version DL              | 20250414_5.0                                                                                    | string           |
            | page info version       | appVersion                                                                                      | regexp named     |
            | page segment            | personas                                                                                        | string           |
            | sysEnv                  | app                                                                                             | string           |
            | business unit           | BBVA Mexico                                                                                     | string           |
            | site app name           | App BBVA Mexico                                                                                 | string           |
            | project name            | DIY Payments                                                                                    | string           |
            | device mobile           | si                                                                                              | string           |
            | user userState          | logado                                                                                          | string           |
            | user segment global     | 003001                                                                                          | string           |
            | profile ID              | profileID                                                                                       | regexp named     |
            | user age                | age                                                                                             | regexp named     |
            | user gender             | gender                                                                                          | regexp named     |
            | internal campaign       |                                                                                                 | empty array      |
            | optimization attributes |                                                                                                 | empty array      |
            | application             |                                                                                                 | empty str object |
            | products attributes     |                                                                                                 | empty array      |

    @ANA_CLAC005
    @analytics
    @web @android @ios @web-done
    @MX @backend(artichoke) @vbank
    Scenario: Advanced footprint - Change Limits Additional Cards - Operation Not Performed Error
        Given a user with the following criteria
            | criteria             |
            | additional cards     |
            | operative additional |
        And the user accesses the detail of the additional "operative" "always error put limits" card from the associated "operative credit card"
        And the user accesses to change limits
        And the user introduces "1000" as new limit amount
        When the user retries "3" times to finish operative
        Then the device contains the following variables
            | item                    | value                                                                                   | type             |
            | analytics               | analytics/glomo_base                                                                    | json schema      |
            | page name               | app:privada:personas:tarjetas credito:tarjeta adicional:error informacion no disponible | string           |
            | level 1                 | tarjetas credito                                                                        | string           |
            | level 2                 | tarjeta adicional                                                                       | string           |
            | level 3                 | error informacion no disponible                                                         | string           |
            | error page              | error informacion no disponible                                                         | string           |
            | language                | ES                                                                                      | string           |
            | page area               | privada                                                                                 | string           |
            | page intent             | transaccion                                                                             | string           |
            | channel                 | online                                                                                  | string           |
            | page instance ID        | de                                                                                      | string           |
            | version DL              | 20250414_5.0                                                                            | string           |
            | page info version       | appVersion                                                                              | regexp named     |
            | page segment            | personas                                                                                | string           |
            | sysEnv                  | app                                                                                     | string           |
            | business unit           | BBVA Mexico                                                                             | string           |
            | site app name           | App BBVA Mexico                                                                         | string           |
            | project name            | DIY Payments                                                                            | string           |
            | device mobile           | si                                                                                      | string           |
            | user userState          | logado                                                                                  | string           |
            | user segment global     | 003001                                                                                  | string           |
            | profile ID              | profileID                                                                               | regexp named     |
            | user age                | age                                                                                     | regexp named     |
            | user gender             | gender                                                                                  | regexp named     |
            | internal campaign       |                                                                                         | empty array      |
            | optimization attributes |                                                                                         | empty array      |
            | application             |                                                                                         | empty str object |
            | products attributes     |                                                                                         | empty array      |

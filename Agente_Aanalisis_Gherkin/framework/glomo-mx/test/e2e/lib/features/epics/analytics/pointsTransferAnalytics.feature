@pointsTransferAnalytics
Feature: Analytics - Points Transfer

    @ANA_EVENT_PTS001
    @analytics
    @ios @android @web @web-done
    @MX @backend(test)
    @vbank
    Scenario: Points transfer event - App On Click Start, App Page Visit funnel
        Given a user with the following criteria
            | criteria       |
            | reward landing |
        And the user accesses to Rewards Landing
        And the user uses use my points
        And the analytics interceptor service is initiated
        When the user accesses to "transfer" points
        Then the analytics events contains the following variables
            | item                     | value                                                  | type         | event                              |
            | analytics                | analytics/glomo_base                                   | json schema  | App On Click Start, App Page Visit |
            | version DL               | 20250414_5.0                                           | string       | App On Click Start, App Page Visit |
            | page name                | app:privada:personas:puntos:detalle                    | string       | App On Click Start                 |
            | page name                | app:privada:personas:puntos:traspasar puntos:1 destino | string       | App Page Visit                     |
            | level 1                  | puntos                                                 | string       | App On Click Start, App Page Visit |
            | level 2                  | detalle                                                | string       | App On Click Start                 |
            | level 2                  | traspasar puntos                                       | string       | App Page Visit                     |
            | language                 | ES                                                     | string       | App On Click Start, App Page Visit |
            | page area                | privada                                                | string       | App On Click Start, App Page Visit |
            | page intent              | informacion                                            | string       | App On Click Start                 |
            | page intent              | transaccion                                            | string       | App Page Visit                     |
            | channel                  | online                                                 | string       | App On Click Start, App Page Visit |
            | page instance ID         | de                                                     | string       | App On Click Start, App Page Visit |
            | page info version        | appVersion                                             | regexp named | App On Click Start, App Page Visit |
            | page segment             | personas                                               | string       | App On Click Start, App Page Visit |
            | sysEnv                   | app                                                    | string       | App On Click Start, App Page Visit |
            | business unit            | BBVA Mexico                                            | string       | App On Click Start, App Page Visit |
            | site app name            | App BBVA Mexico                                        | string       | App On Click Start, App Page Visit |
            | project name             | Rewards                                                | string       | App On Click Start, App Page Visit |
            | device mobile            | si                                                     | string       | App On Click Start, App Page Visit |
            | user userState           | logado                                                 | string       | App On Click Start, App Page Visit |
            | user segment global      | 003001                                                 | string       | App On Click Start, App Page Visit |
            | profile ID               | profileID                                              | regex named  | App On Click Start, App Page Visit |
            | global application       | transfer points                                        | string       | App On Click Start, App Page Visit |
            | application name         | traspasar puntos                                       | string       | App On Click Start, App Page Visit |
            | application type         | operativa                                              | string       | App On Click Start, App Page Visit |
            | application step         | detalle de puntos                                      | string       | App On Click Start                 |
            | application step         | 1 destino                                              | string       | App Page Visit                     |
            | fulfillment model        | online                                                 | string       | App On Click Start, App Page Visit |
            | product primary category | tarjetas                                               | string       | App On Click Start, App Page Visit |
            | product subtype          | tarjetas credito                                       | string       | App On Click Start, App Page Visit |
            | product name             | oro bbva                                               | string       | App On Click Start, App Page Visit |
            | internal campaign        |                                                        | empty array  | App On Click Start, App Page Visit |
            | optimization attributes  |                                                        | empty array  | App On Click Start, App Page Visit |

    @ANA_EVENT_PTS002
    @analytics
    @ios @android @web @web-done
    @MX @backend(artichoke)
    @vbank
    Scenario: Points transfer event - app started, page view - listado de tarjetas
        Given a user with the following criteria
            | criteria                                                |
            | four or more possible target cards to points transfer   |
            | card with points and cut-off and expire points reported |
        And the user accesses to Rewards Landing
        And the user uses use my points
        And the user accesses to "transfer" points
        And the analytics interceptor service is initiated
        When the user accesses all cards
        Then the analytics events contains the following variables
            | item                     | value                                                            | type             | event                  |
            | analytics                | analytics/glomo_base                                             | json schema      | App Started, Page View |
            | version DL               | 20250414_5.0                                                     | string           | App Started, Page View |
            | page name                | app:privada:personas:puntos:traspasar puntos:1 destino           | string           | App Started            |
            | page name                | app:privada:personas:puntos:traspasar puntos:listado de tarjetas | string           | Page View              |
            | level 1                  | puntos                                                           | string           | App Started, Page View |
            | level 2                  | traspasar puntos                                                 | string           | App Started            |
            | level 2                  | traspasar puntos                                                 | string           | Page View              |
            | level 3                  | 1 destino                                                        | string           | App Started            |
            | level 3                  | listado de tarjetas                                              | string           | Page View              |
            | language                 | ES                                                               | string           | App Started, Page View |
            | page area                | privada                                                          | string           | App Started, Page View |
            | page intent              | transaccion                                                      | string           | App Started            |
            | page intent              | transaccion                                                      | string           | Page View              |
            | channel                  | online                                                           | string           | App Started, Page View |
            | page instance ID         | de                                                               | string           | App Started, Page View |
            | page info version        | appVersion                                                       | regexp named     | App Started, Page View |
            | page segment             | personas                                                         | string           | App Started, Page View |
            | sysEnv                   | app                                                              | string           | App Started, Page View |
            | business unit            | BBVA Mexico                                                      | string           | App Started, Page View |
            | site app name            | App BBVA Mexico                                                  | string           | App Started, Page View |
            | project name             | Rewards                                                          | string           | App Started, Page View |
            | device mobile            | si                                                               | string           | App Started, Page View |
            | user userState           | logado                                                           | string           | App Started, Page View |
            | user segment global      | 003001                                                           | string           | App Started, Page View |
            | profile ID               | profileID                                                        | regexp named     | App Started, Page View |
            | global application       | transfer points                                                  | string           | App Started            |
            | application name         | traspasar puntos                                                 | string           | App Started            |
            | application type         | operativa                                                        | string           | App Started            |
            | application step         | ver todas                                                        | string           | App Started            |
            | fulfillment model        | online                                                           | string           | App Started            |
            | product primary category | tarjetas                                                         | string           | App Started            |
            | product subtype          | tarjetas credito                                                 | string           | App Started            |
            | product name             | oro bbva                                                         | string           | App Started            |
            | internal campaign        |                                                                  | empty array      | App Started, Page View |
            | optimization attributes  |                                                                  | empty array      | App Started, Page View |
            | application              |                                                                  | empty str object | Page View              |
            | products attributes      |                                                                  | empty array      | Page View              |

    @ANA_EVENT_PTS003
    @analytics
    @ios @android @web @web-done
    @MX @backend(test)
    @vbank
    Scenario: Points transfer event - app started, app step 2
        Given a user with the following criteria
            | criteria       |
            | reward landing |
        And the user accesses to Rewards Landing
        And the user uses use my points
        And the user accesses to "transfer" points
        And the analytics interceptor service is initiated
        When the user selects the target card to points transfer
        Then the analytics events contains the following variables
            | item                       | value                                                   | type         | event                   |
            | analytics                  | analytics/glomo_base                                    | json schema  | App Started, App Step 2 |
            | version DL                 | 20250414_5.0                                            | string       | App Started, App Step 2 |
            | page name                  | app:privada:personas:puntos:traspasar puntos:1 destino  | string       | App Started             |
            | page name                  | app:privada:personas:puntos:traspasar puntos:2 cantidad | string       | App Step 2              |
            | level 1                    | puntos                                                  | string       | App Started, App Step 2 |
            | level 2                    | traspasar puntos                                        | string       | App Started, App Step 2 |
            | level 3                    | 1 destino                                               | string       | App Started             |
            | level 3                    | 2 cantidad                                              | string       | App Step 2              |
            | language                   | ES                                                      | string       | App Started, App Step 2 |
            | page area                  | privada                                                 | string       | App Started, App Step 2 |
            | page intent                | transaccion                                             | string       | App Started, App Step 2 |
            | channel                    | online                                                  | string       | App Started, App Step 2 |
            | page instance ID           | de                                                      | string       | App Started, App Step 2 |
            | page info version          | appVersion                                              | regexp named | App Started, App Step 2 |
            | page segment               | personas                                                | string       | App Started, App Step 2 |
            | sysEnv                     | app                                                     | string       | App Started, App Step 2 |
            | business unit              | BBVA Mexico                                             | string       | App Started, App Step 2 |
            | site app name              | App BBVA Mexico                                         | string       | App Started, App Step 2 |
            | project name               | Rewards                                                 | string       | App Started, App Step 2 |
            | device mobile              | si                                                      | string       | App Started, App Step 2 |
            | user userState             | logado                                                  | string       | App Started, App Step 2 |
            | user segment global        | 003001                                                  | string       | App Started, App Step 2 |
            | profile ID                 | profileID                                               | regexp named | App Started, App Step 2 |
            | global application         | transfer points                                         | string       | App Started, App Step 2 |
            | application name           | traspasar puntos                                        | string       | App Started, App Step 2 |
            | application type           | operativa                                               | string       | App Started, App Step 2 |
            | application step           | elegir tarjeta                                          | string       | App Started             |
            | application step           | 2 cantidad                                              | string       | App Step 2              |
            | fulfillment model          | online                                                  | string       | App Started, App Step 2 |
            | product primary category   | tarjetas                                                | string       | App Started, App Step 2 |
            | product subtype            | tarjetas credito                                        | string       | App Started, App Step 2 |
            | product name               | oro bbva                                                | string       | App Started, App Step 2 |
            | product primary category 1 | tarjetas                                                | string       | App Step 2              |
            | product subtype 1          | tarjetas credito                                        | string       | App Step 2              |
            | product name 1             | azul bbva                                               | string       | App Step 2              |
            | internal campaign          |                                                         | empty array  | App Started, App Step 2 |
            | optimization attributes    |                                                         | empty array  | App Started, App Step 2 |

    @ANA_PTS004
    @analytics
    @ios @android @web @web-done
    @MX @backend(test)
    @vbank
    Scenario: Points transfer - app step 3
        Given a user with the following criteria
            | criteria       |
            | reward landing |
        And the user accesses to Rewards Landing
        And the user uses use my points
        And the user accesses to "transfer" points
        When the user transfer "234" points to target card
        Then the device contains the following variables
            | item                       | value                                                       | type         |
            | analytics                  | analytics/glomo_base                                        | json schema  |
            | version DL                 | 20250414_5.0                                                | string       |
            | page name                  | app:privada:personas:puntos:traspasar puntos:3 confirmacion | string       |
            | level 1                    | puntos                                                      | string       |
            | level 2                    | traspasar puntos                                            | string       |
            | level 3                    | 3 confirmacion                                              | string       |
            | language                   | ES                                                          | string       |
            | page area                  | privada                                                     | string       |
            | page intent                | transaccion                                                 | string       |
            | channel                    | online                                                      | string       |
            | page instance ID           | de                                                          | string       |
            | page info version          | appVersion                                                  | regexp named |
            | page segment               | personas                                                    | string       |
            | sysEnv                     | app                                                         | string       |
            | business unit              | BBVA Mexico                                                 | string       |
            | site app name              | App BBVA Mexico                                             | string       |
            | project name               | Rewards                                                     | string       |
            | device mobile              | si                                                          | string       |
            | user userState             | logado                                                      | string       |
            | user segment global        | 003001                                                      | string       |
            | profile ID                 | profileID                                                   | regexp named |
            | global application         | transfer points                                             | string       |
            | application name           | traspasar puntos                                            | string       |
            | application type           | operativa                                                   | string       |
            | application step           | 3 confirmacion                                              | string       |
            | fulfillment model          | online                                                      | string       |
            | application typology       | otra cantidad                                               | string       |
            | product primary category   | tarjetas                                                    | string       |
            | product subtype            | tarjetas credito                                            | string       |
            | product name               | oro bbva                                                    | string       |
            | product amount             | 234                                                         | string       |
            | product primary category 1 | tarjetas                                                    | string       |
            | product subtype 1          | tarjetas credito                                            | string       |
            | product name 1             | azul bbva                                                   | string       |
            | internal campaign          |                                                             | empty array  |
            | optimization attributes    |                                                             | empty array  |

    @ANA_PTS005
    @analytics
    @ios @android @web @web-done
    @MX @backend(test)
    @vbank
    Scenario: Points transfer - app completed
        Given a user with the following criteria
            | criteria         |
            | reward landing   |
        And the user accesses to Rewards Landing
        And the user uses use my points
        And the user accesses to "transfer" points
        And the user transfer "234" points to target card
        When the user finishes the points transfer process
        Then the device contains the following variables
            | item                         | value                                                       | type         |
            | analytics                    | analytics/glomo_base                                        | json schema  |
            | version DL                   | 20250414_5.0                                                | string       |
            | page name                    | app:privada:personas:puntos:traspasar puntos:pagina exitosa | string       |
            | level 1                      | puntos                                                      | string       |
            | level 2                      | traspasar puntos                                            | string       |
            | level 3                      | pagina exitosa                                              | string       |
            | language                     | ES                                                          | string       |
            | page area                    | privada                                                     | string       |
            | page intent                  | transaccion                                                 | string       |
            | channel                      | online                                                      | string       |
            | page instance ID             | de                                                          | string       |
            | page info version            | appVersion                                                  | regexp named |
            | page segment                 | personas                                                    | string       |
            | sysEnv                       | app                                                         | string       |
            | business unit                | BBVA Mexico                                                 | string       |
            | site app name                | App BBVA Mexico                                             | string       |
            | project name                 | Rewards                                                     | string       |
            | device mobile                | si                                                          | string       |
            | user userState               | logado                                                      | string       |
            | user segment global          | 003001                                                      | string       |
            | profile ID                   | profileID                                                   | regexp named |
            | global application           | transfer points                                             | string       |
            | application name             | traspasar puntos                                            | string       |
            | application type             | operativa                                                   | string       |
            | application step             | pagina exitosa                                              | string       |
            | fulfillment model            | online                                                      | string       |
            | application typology         | otra cantidad                                               | string       |
            | application state            | finalizado                                                  | string       |
            | application operation number | 230504185757                                                | string       |
            | product primary category     | tarjetas                                                    | string       |
            | product subtype              | tarjetas credito                                            | string       |
            | product name                 | oro bbva                                                    | string       |
            | product amount               | 234                                                         | string       |
            | product primary category 1   | tarjetas                                                    | string       |
            | product subtype 1            | tarjetas credito                                            | string       |
            | product name 1               | azul bbva                                                   | string       |
            | internal campaign            |                                                             | empty array  |
            | optimization attributes      |                                                             | empty array  |

    @ANA_PTS006
    @analytics
    @ios @android @web @web-done
    @MX @backend(test)
    @vbank
    Scenario: Points transfer - page view - service error
        Given a user with the following criteria
            | criteria         |
            | reward landing   |
        When the user accesses to Rewards Landing
        And the user uses use my points
        And the user accesses to "transfer" points
        And the user transfer "1" points to target card
        And the user attempts finish the points transfer process
        Then the user sees a "small" type error modal
        And the device contains the following variables
            | item                    | value                                                               | type             |
            | analytics               | analytics/glomo_base                                                | json schema      |
            | version DL              | 20250414_5.0                                                        | string           |
            | page name               | app:privada:personas:puntos:traspasar puntos:operacion no realizada | string           |
            | level 1                 | puntos                                                              | string           |
            | level 2                 | traspasar puntos                                                    | string           |
            | level 3                 | operacion no realizada                                              | string           |
            | error page              | operacion no realizada                                              | string           |
            | language                | ES                                                                  | string           |
            | page area               | privada                                                             | string           |
            | page intent             | transaccion                                                         | string           |
            | channel                 | online                                                              | string           |
            | page instance ID        | de                                                                  | string           |
            | page info version       | appVersion                                                          | regexp named     |
            | page segment            | personas                                                            | string           |
            | sysEnv                  | app                                                                 | string           |
            | business unit           | BBVA Mexico                                                         | string           |
            | site app name           | App BBVA Mexico                                                     | string           |
            | project name            | Rewards                                                             | string           |
            | device mobile           | si                                                                  | string           |
            | user userState          | logado                                                              | string           |
            | user segment global     | 003001                                                              | string           |
            | profile ID              | profileID                                                           | regexp named     |
            | internal campaign       |                                                                     | empty array      |
            | optimization attributes |                                                                     | empty array      |
            | application             |                                                                     | empty str object |
            | products attributes     |                                                                     | empty array      |

    @ANA_PTS007
    @analytics
    @ios @android @web @web-done
    @MX @backend(artichoke) @vbank
    Scenario Outline: Points transfer - page view - <description>
        Given a user with the following criteria
            | criteria |
            | <card>   |
        And the user accesses to Rewards Landing
        And the user uses use my points
        And the user accesses to "origin card from transfer" points
        When the user selects a origin card
        Then the device contains the following variables
            | item                    | value                                                | type             |
            | analytics               | analytics/glomo_base                                 | json schema      |
            | version DL              | 20250414_5.0                                         | string           |
            | page name               | app:privada:personas:puntos:traspasar puntos:<value> | string           |
            | level 1                 | puntos                                               | string           |
            | level 2                 | traspasar puntos                                     | string           |
            | level 3                 | <value>                                              | string           |
            | error page              | <value>                                              | string           |
            | language                | ES                                                   | string           |
            | page area               | privada                                              | string           |
            | page intent             | transaccion                                          | string           |
            | channel                 | online                                               | string           |
            | page instance ID        | de                                                   | string           |
            | page info version       | appVersion                                           | regexp named     |
            | page segment            | personas                                             | string           |
            | sysEnv                  | app                                                  | string           |
            | business unit           | BBVA Mexico                                          | string           |
            | site app name           | App BBVA Mexico                                      | string           |
            | project name            | Rewards                                              | string           |
            | device mobile           | si                                                   | string           |
            | user userState          | logado                                               | string           |
            | user segment global     | 003001                                               | string           |
            | profile ID              | profileID                                            | regexp named     |
            | internal campaign       |                                                      | empty array      |
            | optimization attributes |                                                      | empty array      |
            | application             |                                                      | empty str object |
            | products attributes     |                                                      | empty array      |

        Examples:
            | description      | card                                                        | value                      |
            | inoperative card | card inoperative with points and without overdraft          | tarjeta de origen inactiva |
            | off card         | card off with points and cut-off and expire points reported | tarjeta de origen apagada  |

    @ANA_EVENT_PTS008
    @analytics
    @ios @android @web @web-done
    @MX @backend(artichoke) @vbank
    Scenario: Points transfer event - site error - warning
        Given a user with the following criteria
            | criteria                                           |
            | card inoperative with points and without overdraft |
        And the user accesses to Rewards Landing
        And the analytics interceptor service is initiated
        And the user uses use my points
        When the user accesses to "transfer" points
        Then the analytics events contains the following variables
            | item                    | value                                                     | type         | event      |
            | analytics               | analytics/glomo_base                                      | json schema  | Site Error |
            | version DL              | 20250414_5.0                                              | string       | Site Error |
            | page name               | app:privada:personas:puntos:traspasar puntos:1 destino    | string       | Site Error |
            | level 1                 | puntos                                                    | string       | Site Error |
            | level 2                 | traspasar puntos                                          | string       | Site Error |
            | level 3                 | 1 destino                                                 | string       | Site Error |
            | site error              | una o mas tarjetas no permiten la transferencia de puntos | string       | Site Error |
            | language                | ES                                                        | string       | Site Error |
            | page area               | privada                                                   | string       | Site Error |
            | page intent             | transaccion                                               | string       | Site Error |
            | channel                 | online                                                    | string       | Site Error |
            | page instance ID        | de                                                        | string       | Site Error |
            | page info version       | appVersion                                                | regexp named | Site Error |
            | page segment            | personas                                                  | string       | Site Error |
            | sysEnv                  | app                                                       | string       | Site Error |
            | business unit           | BBVA Mexico                                               | string       | Site Error |
            | site app name           | App BBVA Mexico                                           | string       | Site Error |
            | project name            | Rewards                                                   | string       | Site Error |
            | device mobile           | si                                                        | string       | Site Error |
            | user userState          | logado                                                    | string       | Site Error |
            | user segment global     | 003001                                                    | string       | Site Error |
            | profile ID              | profileID                                                 | regexp named | Site Error |
            | internal campaign       |                                                           | empty array  | Site Error |
            | optimization attributes |                                                           | empty array  | Site Error |

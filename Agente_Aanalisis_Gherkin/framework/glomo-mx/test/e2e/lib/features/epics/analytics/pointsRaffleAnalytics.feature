@pointsRaffle
Feature: Analytics - Points raffle

    @ANA_PRS001
    @analytics
    @ios @android @web @web-done
    @MX @backend(artichoke) @vbank
    Scenario: Funnel - app on click start, app page visit
        Given a user with the following criteria
            | criteria          |
            | card with points  |
            | single product    |
        And the user accesses to Rewards Landing
        And the analytics interceptor service is initiated
        And the user uses use my points
        When the user accesses to "one card raffle" points
        Then the analytics events contains the following variables
            | item                     | value                                                | type         | event                              |
            | analytics                | analytics/glomo_base                                 | json schema  | App On Click Start, App Page Visit |
            | version DL               | 20250414_5.0                                         | string       | App On Click Start, App Page Visit |
            | page name                | app:privada:personas:tarjetas:credito:puntos:detalle | string       | App On Click Start                 |
            | page name                | app:privada:personas:puntos:sorteo puntos:1 detalle  | string       | App Page Visit                     |
            | level 1                  | tarjetas                                             | string       | App On Click Start                 |
            | level 1                  | puntos                                               | string       | App Page Visit                     |
            | level 2                  | credito                                              | string       | App On Click Start                 |
            | level 2                  | sorteo puntos                                        | string       | App Page Visit                     |
            | level 3                  | puntos                                               | string       | App On Click Start                 |
            | level 3                  | 1 detalle                                            | string       | App Page Visit                     |
            | level 4                  | detalle                                              | string       | App On Click Start                 |
            | language                 | ES                                                   | string       | App On Click Start, App Page Visit |
            | page area                | privada                                              | string       | App On Click Start, App Page Visit |
            | page intent              | informacion                                          | string       | App On Click Start                 |
            | page intent              | transaccion                                          | string       | App Page Visit                     |
            | channel                  | online                                               | string       | App On Click Start, App Page Visit |
            | page instance ID         | de                                                   | string       | App On Click Start, App Page Visit |
            | page info version        | appVersion                                           | regexp named | App On Click Start, App Page Visit |
            | page segment             | personas                                             | string       | App On Click Start, App Page Visit |
            | sysEnv                   | app                                                  | string       | App On Click Start, App Page Visit |
            | business unit            | BBVA Mexico                                          | string       | App On Click Start, App Page Visit |
            | site app name            | App BBVA Mexico                                      | string       | App On Click Start, App Page Visit |
            | project name             | Rewards                                              | string       | App On Click Start, App Page Visit |
            | device mobile            | si                                                   | string       | App On Click Start, App Page Visit |
            | user userState           | logado                                               | string       | App On Click Start, App Page Visit |
            | user segment global      | 003001                                               | string       | App On Click Start, App Page Visit |
            | profile ID               | profileID                                            | regexp named | App On Click Start, App Page Visit |
            | user gender              | gender                                               | regexp named | App On Click Start, App Page Visit |
            | user age                 | age                                                  | regexp named | App On Click Start, App Page Visit |
            | global application       | points raffle                                        | string       | App On Click Start, App Page Visit |
            | application name         | sorteo puntos                                        | string       | App On Click Start, App Page Visit |
            | application type         | operativa                                            | string       | App On Click Start, App Page Visit |
            | application step         | sorteos bbva                                         | string       | App On Click Start                 |
            | application step         | 1 detalle                                            | string       | App Page Visit                     |
            | fulfillment model        | online                                               | string       | App On Click Start, App Page Visit |
            | product primary category | tarjetas                                             | string       | App On Click Start, App Page Visit |
            | product subtype          | tarjetas credito                                     | string       | App On Click Start, App Page Visit |
            | product name             | oro bbva                                             | string       | App On Click Start, App Page Visit |
            | internal campaign        |                                                      | empty array  | App On Click Start, App Page Visit |
            | optimization attributes  |                                                      | empty array  | App On Click Start, App Page Visit |

    @ANA_PRS002
    @analytics
    @ios @android @web @web-done
    @MX @backend(artichoke) @vbank
    Scenario: Funnel - app started
        Given a user with the following criteria
            | criteria          |
            | card with points  |
            | single product    |
        And the user accesses to Rewards Landing
        And the analytics interceptor service is initiated
        And the user uses use my points
        And the user accesses to "one card raffle" points
        When the user participates in the raffle
        Then the analytics events contains the following variables
            | item                     | value                                               | type         | event       |
            | analytics                | analytics/glomo_base                                | json schema  | App Started |
            | version DL               | 20250414_5.0                                        | string       | App Started |
            | page name                | app:privada:personas:puntos:sorteo puntos:1 detalle | string       | App Started |
            | level 1                  | puntos                                              | string       | App Started |
            | level 2                  | sorteo puntos                                       | string       | App Started |
            | level 3                  | 1 detalle                                           | string       | App Started |
            | language                 | ES                                                  | string       | App Started |
            | page area                | privada                                             | string       | App Started |
            | page intent              | transaccion                                         | string       | App Started |
            | channel                  | online                                              | string       | App Started |
            | page instance ID         | de                                                  | string       | App Started |
            | page info version        | appVersion                                          | regexp named | App Started |
            | page segment             | personas                                            | string       | App Started |
            | sysEnv                   | app                                                 | string       | App Started |
            | business unit            | BBVA Mexico                                         | string       | App Started |
            | site app name            | App BBVA Mexico                                     | string       | App Started |
            | project name             | Rewards                                             | string       | App Started |
            | device mobile            | si                                                  | string       | App Started |
            | user userState           | logado                                              | string       | App Started |
            | user segment global      | 003001                                              | string       | App Started |
            | profile ID               | profileID                                           | regexp named | App Started |
            | user gender              | gender                                              | regexp named | App Started |
            | user age                 | age                                                 | regexp named | App Started |
            | global application       | points raffle                                       | string       | App Started |
            | application name         | sorteo puntos                                       | string       | App Started |
            | application type         | operativa                                           | string       | App Started |
            | application step         | quiero participar                                   | string       | App Started |
            | fulfillment model        | online                                              | string       | App Started |
            | product primary category | tarjetas                                            | string       | App Started |
            | product subtype          | tarjetas credito                                    | string       | App Started |
            | product name             | oro bbva                                            | string       | App Started |
            | internal campaign        |                                                     | empty array  | App Started |
            | optimization attributes  |                                                     | empty array  | App Started |

    @ANA_PRS003
    @analytics
    @ios @android @web @web-done
    @MX @backend(artichoke) @vbank
    Scenario: Funnel - app step 2
        Given a user with the following criteria
            | criteria          |
            | card with points  |
            | single product    |
        And the user accesses to Rewards Landing
        And the analytics interceptor service is initiated
        And the user uses use my points
        And the user accesses to "one card raffle" points
        When the user participates in the raffle
        Then the analytics events contains the following variables
            | item                     | value                                                               | type         | event      |
            | analytics                | analytics/glomo_base                                                | json schema  | App Step 2 |
            | version DL               | 20250414_5.0                                                        | string       | App Step 2 |
            | page name                | app:privada:personas:puntos:sorteo puntos:2 obtener participaciones | string       | App Step 2 |
            | level 1                  | puntos                                                              | string       | App Step 2 |
            | level 2                  | sorteo puntos                                                       | string       | App Step 2 |
            | level 3                  | 2 obtener participaciones                                           | string       | App Step 2 |
            | language                 | ES                                                                  | string       | App Step 2 |
            | page area                | privada                                                             | string       | App Step 2 |
            | page intent              | transaccion                                                         | string       | App Step 2 |
            | channel                  | online                                                              | string       | App Step 2 |
            | page instance ID         | de                                                                  | string       | App Step 2 |
            | page info version        | appVersion                                                          | regexp named | App Step 2 |
            | page segment             | personas                                                            | string       | App Step 2 |
            | sysEnv                   | app                                                                 | string       | App Step 2 |
            | business unit            | BBVA Mexico                                                         | string       | App Step 2 |
            | site app name            | App BBVA Mexico                                                     | string       | App Step 2 |
            | project name             | Rewards                                                             | string       | App Step 2 |
            | device mobile            | si                                                                  | string       | App Step 2 |
            | user userState           | logado                                                              | string       | App Step 2 |
            | user segment global      | 003001                                                              | string       | App Step 2 |
            | profile ID               | profileID                                                           | regexp named | App Step 2 |
            | user gender              | gender                                                              | regexp named | App Step 2 |
            | user age                 | age                                                                 | regexp named | App Step 2 |
            | global application       | points raffle                                                       | string       | App Step 2 |
            | application name         | sorteo puntos                                                       | string       | App Step 2 |
            | application type         | operativa                                                           | string       | App Step 2 |
            | application step         | 2 obtener participaciones                                           | string       | App Step 2 |
            | fulfillment model        | online                                                              | string       | App Step 2 |
            | product primary category | tarjetas                                                            | string       | App Step 2 |
            | product subtype          | tarjetas credito                                                    | string       | App Step 2 |
            | product name             | oro bbva                                                            | string       | App Step 2 |
            | internal campaign        |                                                                     | empty array  | App Step 2 |
            | optimization attributes  |                                                                     | empty array  | App Step 2 |

    @ANA_PRS004
    @analytics
    @ios @android @web @web-done
    @MX @backend(artichoke) @vbank
    Scenario: Funnel - app step 3
        Given a user with the following criteria
            | criteria          |
            | card with points  |
            | single product    |
        And the user accesses to Rewards Landing
        And the analytics interceptor service is initiated
        And the user uses use my points
        And the user accesses to "one card raffle" points
        When the user participates with of "total tickets" purchase
        Then the analytics events contains the following variables
            | item                     | value                                                              | type         | event      |
            | analytics                | analytics/glomo_base                                               | json schema  | App Step 3 |
            | version DL               | 20250414_5.0                                                       | string       | App Step 3 |
            | page name                | app:privada:personas:puntos:sorteo puntos:3 terminos y condiciones | string       | App Step 3 |
            | level 1                  | puntos                                                             | string       | App Step 3 |
            | level 2                  | sorteo puntos                                                      | string       | App Step 3 |
            | level 3                  | 3 terminos y condiciones                                           | string       | App Step 3 |
            | language                 | ES                                                                 | string       | App Step 3 |
            | page area                | privada                                                            | string       | App Step 3 |
            | page intent              | transaccion                                                        | string       | App Step 3 |
            | channel                  | online                                                             | string       | App Step 3 |
            | page instance ID         | de                                                                 | string       | App Step 3 |
            | page info version        | appVersion                                                         | regexp named | App Step 3 |
            | page segment             | personas                                                           | string       | App Step 3 |
            | sysEnv                   | app                                                                | string       | App Step 3 |
            | business unit            | BBVA Mexico                                                        | string       | App Step 3 |
            | site app name            | App BBVA Mexico                                                    | string       | App Step 3 |
            | project name             | Rewards                                                            | string       | App Step 3 |
            | device mobile            | si                                                                 | string       | App Step 3 |
            | user userState           | logado                                                             | string       | App Step 3 |
            | user segment global      | 003001                                                             | string       | App Step 3 |
            | profile ID               | profileID                                                          | regexp named | App Step 3 |
            | user gender              | gender                                                             | regexp named | App Step 3 |
            | user age                 | age                                                                | regexp named | App Step 3 |
            | global application       | points raffle                                                      | string       | App Step 3 |
            | application name         | sorteo puntos                                                      | string       | App Step 3 |
            | application type         | operativa                                                          | string       | App Step 3 |
            | application typology     | 8                                                                  | string       | App Step 3 |
            | application offer        | participaciones totales                                            | string       | App Step 3 |
            | application step         | 3 terminos y condiciones                                           | string       | App Step 3 |
            | fulfillment model        | online                                                             | string       | App Step 3 |
            | product primary category | tarjetas                                                           | string       | App Step 3 |
            | product subtype          | tarjetas credito                                                   | string       | App Step 3 |
            | product name             | oro bbva                                                           | string       | App Step 3 |
            | internal campaign        |                                                                    | empty array  | App Step 3 |
            | optimization attributes  |                                                                    | empty array  | App Step 3 |

    @ANA_PRS005
    @analytics
    @ios @android @web @web-done
    @MX @backend(artichoke) @vbank
    Scenario: Funnel - app step 4
        Given a user with the following criteria
            | criteria          |
            | card with points  |
            | single product    |
        And the user accesses to Rewards Landing
        And the analytics interceptor service is initiated
        And the user uses use my points
        And the user accesses to "one card raffle" points
        And the user participates with of "total tickets" purchase
        When the user accepts the terms and conditions of the raffle
        Then the analytics events contains the following variables
            | item                     | value                                                 | type         | event      |
            | analytics                | analytics/glomo_base                                  | json schema  | App Step 4 |
            | version DL               | 20250414_5.0                                          | string       | App Step 4 |
            | page name                | app:privada:personas:puntos:sorteo puntos:4 confirmar | string       | App Step 4 |
            | level 1                  | puntos                                                | string       | App Step 4 |
            | level 2                  | sorteo puntos                                         | string       | App Step 4 |
            | level 3                  | 4 confirmar                                           | string       | App Step 4 |
            | language                 | ES                                                    | string       | App Step 4 |
            | page area                | privada                                               | string       | App Step 4 |
            | page intent              | transaccion                                           | string       | App Step 4 |
            | channel                  | online                                                | string       | App Step 4 |
            | page instance ID         | de                                                    | string       | App Step 4 |
            | page info version        | appVersion                                            | regexp named | App Step 4 |
            | page segment             | personas                                              | string       | App Step 4 |
            | sysEnv                   | app                                                   | string       | App Step 4 |
            | business unit            | BBVA Mexico                                           | string       | App Step 4 |
            | site app name            | App BBVA Mexico                                       | string       | App Step 4 |
            | project name             | Rewards                                               | string       | App Step 4 |
            | device mobile            | si                                                    | string       | App Step 4 |
            | user userState           | logado                                                | string       | App Step 4 |
            | user segment global      | 003001                                                | string       | App Step 4 |
            | profile ID               | profileID                                             | regexp named | App Step 4 |
            | user gender              | gender                                                | regexp named | App Step 4 |
            | user age                 | age                                                   | regexp named | App Step 4 |
            | global application       | points raffle                                         | string       | App Step 4 |
            | application name         | sorteo puntos                                         | string       | App Step 4 |
            | application type         | operativa                                             | string       | App Step 4 |
            | application typology     | 8                                                     | string       | App Step 4 |
            | application offer        | participaciones totales                               | string       | App Step 4 |
            | application step         | 4 confirmar                                           | string       | App Step 4 |
            | fulfillment model        | online                                                | string       | App Step 4 |
            | product primary category | tarjetas                                              | string       | App Step 4 |
            | product subtype          | tarjetas credito                                      | string       | App Step 4 |
            | product name             | oro bbva                                              | string       | App Step 4 |
            | internal campaign        |                                                       | empty array  | App Step 4 |
            | optimization attributes  |                                                       | empty array  | App Step 4 |

    @ANA_PRS006
    @analytics
    @ios @android @web @web-done
    @MX @backend(artichoke) @vbank
    Scenario: Funnel - app completed
        Given a user with the following criteria
            | criteria          |
            | card with points  |
            | single product    |
        And the user accesses to Rewards Landing
        And the analytics interceptor service is initiated
        And the user uses use my points
        And the user accesses to "one card raffle" points
        When the user accesses to the summary of the "total tickets" purchase
        Then the analytics events contains the following variables
            | item                         | value                                                    | type         | event         |
            | analytics                    | analytics/glomo_base                                     | json schema  | App Completed |
            | version DL                   | 20250414_5.0                                             | string       | App Completed |
            | page name                    | app:privada:personas:puntos:sorteo puntos:pagina exitosa | string       | App Completed |
            | level 1                      | puntos                                                   | string       | App Completed |
            | level 2                      | sorteo puntos                                            | string       | App Completed |
            | level 3                      | pagina exitosa                                           | string       | App Completed |
            | language                     | ES                                                       | string       | App Completed |
            | page area                    | privada                                                  | string       | App Completed |
            | page intent                  | transaccion                                              | string       | App Completed |
            | channel                      | online                                                   | string       | App Completed |
            | page instance ID             | de                                                       | string       | App Completed |
            | page info version            | appVersion                                               | regexp named | App Completed |
            | page segment                 | personas                                                 | string       | App Completed |
            | sysEnv                       | app                                                      | string       | App Completed |
            | business unit                | BBVA Mexico                                              | string       | App Completed |
            | site app name                | App BBVA Mexico                                          | string       | App Completed |
            | project name                 | Rewards                                                  | string       | App Completed |
            | device mobile                | si                                                       | string       | App Completed |
            | user userState               | logado                                                   | string       | App Completed |
            | user segment global          | 003001                                                   | string       | App Completed |
            | profile ID                   | profileID                                                | regexp named | App Completed |
            | user gender                  | gender                                                   | regexp named | App Completed |
            | user age                     | age                                                      | regexp named | App Completed |
            | global application           | points raffle                                            | string       | App Completed |
            | application name             | sorteo puntos                                            | string       | App Completed |
            | application type             | operativa                                                | string       | App Completed |
            | application typology         | 8                                                        | string       | App Completed |
            | application offer            | participaciones totales                                  | string       | App Completed |
            | application step             | pagina exitosa                                           | string       | App Completed |
            | fulfillment model            | online                                                   | string       | App Completed |
            | application state            | finalizado                                               | string       | App Completed |
            | application operation number | 20D17P695080                                             | string       | App Completed |
            | product primary category     | tarjetas                                                 | string       | App Completed |
            | product subtype              | tarjetas credito                                         | string       | App Completed |
            | product name                 | oro bbva                                                 | string       | App Completed |
            | product state                | finalizado                                               | string       | App Completed |
            | internal campaign            |                                                          | empty array  | App Completed |
            | optimization attributes      |                                                          | empty array  | App Completed |

    @ANA_PRS007
    @analytics
    @ios @android @web @web-done
    @MX @backend(artichoke) @vbank
    Scenario: Footprint - faqs
        Given a user with the following criteria
            | criteria          |
            | card with points  |
            | single product    |
        And the user accesses to Rewards Landing
        And the user uses use my points
        And the user accesses to "one card raffle" points
        When the user selects FAQs icon on the header while in multistep
        Then the device contains the following variables
            | item                    | value                                                    | type             |
            | analytics               | analytics/glomo_base                                     | json schema      |
            | version DL              | 20250414_5.0                                             | string           |
            | page name               | app:privada:personas:puntos:sorteo puntos:1 detalle:faqs | string           |
            | level 1                 | puntos                                                   | string           |
            | level 2                 | sorteo puntos                                            | string           |
            | level 3                 | 1 detalle                                                | string           |
            | level 4                 | faqs                                                     | string           |
            | language                | ES                                                       | string           |
            | page area               | privada                                                  | string           |
            | page intent             | informacion                                              | string           |
            | channel                 | online                                                   | string           |
            | page instance ID        | de                                                       | string           |
            | page info version       | appVersion                                               | regexp named     |
            | page segment            | personas                                                 | string           |
            | sysEnv                  | app                                                      | string           |
            | business unit           | BBVA Mexico                                              | string           |
            | site app name           | App BBVA Mexico                                          | string           |
            | project name            | Rewards                                                  | string           |
            | device mobile           | si                                                       | string           |
            | user userState          | logado                                                   | string           |
            | user segment global     | 003001                                                   | string           |
            | profile ID              | profileID                                                | regexp named     |
            | user gender             | gender                                                   | regexp named     |
            | user age                | age                                                      | regexp named     |
            | internal campaign       |                                                          | empty array      |
            | optimization attributes |                                                          | empty array      |
            | application             |                                                          | empty str object |
            | products attributes     |                                                          | empty array      |

    @ANA_PRS008
    @analytics
    @ios @android @web @web-done
    @MX @backend(artichoke) @vbank
    Scenario: Footprint - answer to a faq
        Given a user with the following criteria
            | criteria          |
            | card with points  |
            | single product    |
        And the user accesses to Rewards Landing
        And the user uses use my points
        And the user accesses to "one card raffle" points
        And the user selects FAQs icon on the header while in multistep
        When the user accesses to some question
        Then the device contains the following variables
            | item                    | value                                                                                          | type             |
            | analytics               | analytics/glomo_base                                                                           | json schema      |
            | version DL              | 20250414_5.0                                                                                   | string           |
            | page name               | app:privada:personas:puntos:sorteo puntos:1 detalle:faqs:en que consiste el sorteo puntos bbva | string           |
            | level 1                 | puntos                                                                                         | string           |
            | level 2                 | sorteo puntos                                                                                  | string           |
            | level 3                 | 1 detalle                                                                                      | string           |
            | level 4                 | faqs                                                                                           | string           |
            | level 5                 | en que consiste el sorteo puntos bbva                                                          | string           |
            | language                | ES                                                                                             | string           |
            | page area               | privada                                                                                        | string           |
            | page intent             | informacion                                                                                    | string           |
            | channel                 | online                                                                                         | string           |
            | page instance ID        | de                                                                                             | string           |
            | page info version       | appVersion                                                                                     | regexp named     |
            | page segment            | personas                                                                                       | string           |
            | sysEnv                  | app                                                                                            | string           |
            | business unit           | BBVA Mexico                                                                                    | string           |
            | site app name           | App BBVA Mexico                                                                                | string           |
            | project name            | Rewards                                                                                        | string           |
            | device mobile           | si                                                                                             | string           |
            | user userState          | logado                                                                                         | string           |
            | user segment global     | 003001                                                                                         | string           |
            | profile ID              | profileID                                                                                      | regexp named     |
            | user gender             | gender                                                                                         | regexp named     |
            | user age                | age                                                                                            | regexp named     |
            | internal campaign       |                                                                                                | empty array      |
            | optimization attributes |                                                                                                | empty array      |
            | application             |                                                                                                | empty str object |
            | products attributes     |                                                                                                | empty array      |

    @ANA_PRS009
    @analytics
    @ios @android @web @web-done
    @MX @backend(artichoke) @vbank
    Scenario: Footprint - prizes and rules
        Given a user with the following criteria
            | criteria          |
            | card with points  |
            | single product    |
        And the user accesses to Rewards Landing
        And the user uses use my points
        And the user accesses to "one card raffle" points
        And the analytics interceptor service is initiated
        When the user consults the prizes and rules of the draw
        Then the analytics events contains the following variables
            | item                    | value                                                               | type             | event     |
            | analytics               | analytics/glomo_base                                                | json schema      | Page View |
            | version DL              | 20250414_5.0                                                        | string           | Page View |
            | page name               | app:privada:personas:puntos:sorteo puntos:1 detalle:premios y bases | string           | Page View |
            | level 1                 | puntos                                                              | string           | Page View |
            | level 2                 | sorteo puntos                                                       | string           | Page View |
            | level 3                 | 1 detalle                                                           | string           | Page View |
            | level 4                 | premios y bases                                                     | string           | Page View |
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
            | project name            | Rewards                                                             | string           | Page View |
            | device mobile           | si                                                                  | string           | Page View |
            | user userState          | logado                                                              | string           | Page View |
            | user segment global     | 003001                                                              | string           | Page View |
            | profile ID              | profileID                                                           | regexp named     | Page View |
            | user gender             | gender                                                              | regexp named     | Page View |
            | user age                | age                                                                 | regexp named     | Page View |
            | internal campaign       |                                                                     | empty array      | Page View |
            | optimization attributes |                                                                     | empty array      | Page View |
            | application             |                                                                     | empty str object | Page View |
            | products attributes     |                                                                     | empty array      | Page View |

    @ANA_PRS010
    @analytics
    @ios @android @web @web-done
    @MX @backend(artichoke) @vbank
    Scenario: Footprint - terms and conditions
        Given a user with the following criteria
            | criteria          |
            | card with points  |
            | single product    |
        And the user accesses to Rewards Landing
        And the user uses use my points
        And the user accesses to "one card raffle" points
        And the user participates with of "total tickets" purchase
        And the analytics interceptor service is initiated
        When the user consults the terms and conditions of raffle
        Then the analytics events contains the following variables
            | item                    | value                                                                                     | type             | event     |
            | analytics               | analytics/glomo_base                                                                      | json schema      | Page View |
            | version DL              | 20250414_5.0                                                                              | string           | Page View |
            | page name               | app:privada:personas:puntos:sorteo puntos:3 terminos y condiciones:terminos y condiciones | string           | Page View |
            | level 1                 | puntos                                                                                    | string           | Page View |
            | level 2                 | sorteo puntos                                                                             | string           | Page View |
            | level 3                 | 3 terminos y condiciones                                                                  | string           | Page View |
            | level 4                 | terminos y condiciones                                                                    | string           | Page View |
            | language                | ES                                                                                        | string           | Page View |
            | page area               | privada                                                                                   | string           | Page View |
            | page intent             | informacion                                                                               | string           | Page View |
            | channel                 | online                                                                                    | string           | Page View |
            | page instance ID        | de                                                                                        | string           | Page View |
            | page info version       | appVersion                                                                                | regexp named     | Page View |
            | page segment            | personas                                                                                  | string           | Page View |
            | sysEnv                  | app                                                                                       | string           | Page View |
            | business unit           | BBVA Mexico                                                                               | string           | Page View |
            | site app name           | App BBVA Mexico                                                                           | string           | Page View |
            | project name            | Rewards                                                                                   | string           | Page View |
            | device mobile           | si                                                                                        | string           | Page View |
            | user userState          | logado                                                                                    | string           | Page View |
            | user segment global     | 003001                                                                                    | string           | Page View |
            | profile ID              | profileID                                                                                 | regexp named     | Page View |
            | user gender             | gender                                                                                    | regexp named     | Page View |
            | user age                | age                                                                                       | regexp named     | Page View |
            | internal campaign       |                                                                                           | empty array      | Page View |
            | optimization attributes |                                                                                           | empty array      | Page View |
            | application             |                                                                                           | empty str object | Page View |
            | products attributes     |                                                                                           | empty array      | Page View |

    @ANA_PRS011
    @analytics
    @ios @android @web @web-done
    @MX @backend(test) @vbank
    Scenario: Footprint - service error
        Given a user with the following criteria
            | criteria                                  |
            | reward landing with points simulate error |
        And the user accesses to Rewards Landing
        And the user uses use my points
        And the analytics interceptor service is initiated
        When the user selects raffle points
        Then the analytics events contains the following variables
            | item                    | value                                                                        | type             | event     |
            | analytics               | analytics/glomo_base                                                         | json schema      | Page View |
            | version DL              | 20250414_5.0                                                                 | string           | Page View |
            | page name               | app:privada:personas:tarjetas:credito:puntos:detalle:error carga de servicio | string           | Page View |
            | level 1                 | tarjetas                                                                     | string           | Page View |
            | level 2                 | credito                                                                      | string           | Page View |
            | level 3                 | puntos                                                                       | string           | Page View |
            | level 4                 | detalle                                                                      | string           | Page View |
            | level 5                 | error carga de servicio                                                      | string           | Page View |
            | error page              | error carga de servicio                                                      | string           | Page View |
            | language                | ES                                                                           | string           | Page View |
            | page area               | privada                                                                      | string           | Page View |
            | page intent             | informacion                                                                  | string           | Page View |
            | channel                 | online                                                                       | string           | Page View |
            | page instance ID        | de                                                                           | string           | Page View |
            | page info version       | appVersion                                                                   | regexp named     | Page View |
            | page segment            | personas                                                                     | string           | Page View |
            | sysEnv                  | app                                                                          | string           | Page View |
            | business unit           | BBVA Mexico                                                                  | string           | Page View |
            | site app name           | App BBVA Mexico                                                              | string           | Page View |
            | project name            | Rewards                                                                      | string           | Page View |
            | device mobile           | si                                                                           | string           | Page View |
            | user userState          | logado                                                                       | string           | Page View |
            | user segment global     | 003001                                                                       | string           | Page View |
            | profile ID              | profileID                                                                    | regexp named     | Page View |
            | user gender             | gender                                                                       | regexp named     | Page View |
            | user age                | age                                                                          | regexp named     | Page View |
            | internal campaign       |                                                                              | empty array      | Page View |
            | optimization attributes |                                                                              | empty array      | Page View |
            | application             |                                                                              | empty str object | Page View |
            | products attributes     |                                                                              | empty array      | Page View |

    @ANA_PRS012
    @analytics
    @ios @android @web @web-done
    @MX @backend(artichoke) @vbank
    Scenario: Footprint - modal of don't have enough points
        Given a user with the following criteria
            | criteria                                  |
            | card without enough points to buy tickets |
        And the user accesses to Rewards Landing
        And the user uses use my points
        And the analytics interceptor service is initiated
        When the user selects raffle points
        Then the analytics events contains the following variables
            | item                    | value                                                                           | type             | event     |
            | analytics               | analytics/glomo_base                                                            | json schema      | Page View |
            | version DL              | 20250414_5.0                                                                    | string           | Page View |
            | page name               | app:privada:personas:tarjetas:credito:puntos:detalle:error puntos insuficientes | string           | Page View |
            | level 1                 | tarjetas                                                                        | string           | Page View |
            | level 2                 | credito                                                                         | string           | Page View |
            | level 3                 | puntos                                                                          | string           | Page View |
            | level 4                 | detalle                                                                         | string           | Page View |
            | level 5                 | error puntos insuficientes                                                      | string           | Page View |
            | error page              | error puntos insuficientes                                                      | string           | Page View |
            | language                | ES                                                                              | string           | Page View |
            | page area               | privada                                                                         | string           | Page View |
            | page intent             | informacion                                                                     | string           | Page View |
            | channel                 | online                                                                          | string           | Page View |
            | page instance ID        | de                                                                              | string           | Page View |
            | page info version       | appVersion                                                                      | regexp named     | Page View |
            | page segment            | personas                                                                        | string           | Page View |
            | sysEnv                  | app                                                                             | string           | Page View |
            | business unit           | BBVA Mexico                                                                     | string           | Page View |
            | site app name           | App BBVA Mexico                                                                 | string           | Page View |
            | project name            | Rewards                                                                         | string           | Page View |
            | device mobile           | si                                                                              | string           | Page View |
            | user userState          | logado                                                                          | string           | Page View |
            | user segment global     | 003001                                                                          | string           | Page View |
            | profile ID              | profileID                                                                       | regexp named     | Page View |
            | user gender             | gender                                                                          | regexp named     | Page View |
            | user age                | age                                                                             | regexp named     | Page View |
            | internal campaign       |                                                                                 | empty array      | Page View |
            | optimization attributes |                                                                                 | empty array      | Page View |
            | application             |                                                                                 | empty str object | Page View |
            | products attributes     |                                                                                 | empty array      | Page View |

    @ANA_PRS013
    @analytics
    @ios @android @web @web-done
    @MX @backend(test) @vbank
    Scenario: Footprint - modal of don't have points
        Given a user with the following criteria
            | criteria                                  |
            | reward landing with points simulate error |
        And the user accesses to Rewards Landing
        And the user uses use my points
        And the analytics interceptor service is initiated
        When the user selects raffle points
        Then the analytics events contains the following variables
            | item                    | value                                                                       | type             | event     |
            | analytics               | analytics/glomo_base                                                        | json schema      | Page View |
            | version DL              | 20250414_5.0                                                                | string           | Page View |
            | page name               | app:privada:personas:tarjetas:credito:puntos:detalle:error no tienes puntos | string           | Page View |
            | level 1                 | tarjetas                                                                    | string           | Page View |
            | level 2                 | credito                                                                     | string           | Page View |
            | level 3                 | puntos                                                                      | string           | Page View |
            | level 4                 | detalle                                                                     | string           | Page View |
            | level 5                 | error no tienes puntos                                                      | string           | Page View |
            | error page              | error no tienes puntos                                                      | string           | Page View |
            | language                | ES                                                                          | string           | Page View |
            | page area               | privada                                                                     | string           | Page View |
            | page intent             | informacion                                                                 | string           | Page View |
            | channel                 | online                                                                      | string           | Page View |
            | page instance ID        | de                                                                          | string           | Page View |
            | page info version       | appVersion                                                                  | regexp named     | Page View |
            | page segment            | personas                                                                    | string           | Page View |
            | sysEnv                  | app                                                                         | string           | Page View |
            | business unit           | BBVA Mexico                                                                 | string           | Page View |
            | site app name           | App BBVA Mexico                                                             | string           | Page View |
            | project name            | Rewards                                                                     | string           | Page View |
            | device mobile           | si                                                                          | string           | Page View |
            | user userState          | logado                                                                      | string           | Page View |
            | user segment global     | 003001                                                                      | string           | Page View |
            | profile ID              | profileID                                                                   | regexp named     | Page View |
            | user gender             | gender                                                                      | regexp named     | Page View |
            | user age                | age                                                                         | regexp named     | Page View |
            | internal campaign       |                                                                             | empty array      | Page View |
            | optimization attributes |                                                                             | empty array      | Page View |
            | application             |                                                                             | empty str object | Page View |
            | products attributes     |                                                                             | empty array      | Page View |

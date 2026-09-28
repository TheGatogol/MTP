@rewardsPromotionInvitationEnrollmentAnalytics @promotionsInvitationEnrollment
Feature: Analytics - Rewards Promotion Invitation Enrollment

    @ANA_EVENT_PIE001
    @MX @backend(artichoke)
    @web @ios @android @analytics
    @web-done @vbank @spherica
    Scenario: App On Click Start - App Page Visit - Rewards Promotion Invitation Enrollment - Promotion Detail
        Given a user with the following criteria:
            | criteria                           |
            | enrollment promotion invitation    |
            | after promotion period enrollment  |
            | single participant card            |
        And the user accesses to Landing Promotions from dashboard
        And the analytics interceptor service is initiated
        When the user enrolls in the promotion from promotion detail
        Then the analytics events contains the following variables:
            | item                     | value                                                                    | type         | event                              |
            | analytics                | analytics/glomo_base                                                     | json schema  | App On Click Start, App Page Visit |
            | version DL               | 20250414_5.0                                                             | string       | App On Click Start, App Page Visit |
            | page name                | app:privada:personas:promociones:detalle de promocion                    | string       | App On Click Start                 |
            | page name                | app:privada:personas:promociones:aplicar promocion:1 seleccionar tarjeta | string       | App Page Visit                     |
            | level 1                  | promociones                                                              | string       | App On Click Start, App Page Visit |
            | level 2                  | detalle de promocion                                                     | string       | App On Click Start                 |
            | level 2                  | aplicar promocion                                                        | string       | App Page Visit                     |
            | level 3                  | 1 seleccionar tarjeta                                                    | string       | App Page Visit                     |
            | language                 | ES                                                                       | string       | App On Click Start, App Page Visit |
            | page area                | privada                                                                  | string       | App On Click Start, App Page Visit |
            | page intent              | informacion                                                              | string       | App On Click Start                 |
            | page intent              | transaccion                                                              | string       | App Page Visit                     |
            | channel                  | online                                                                   | string       | App On Click Start, App Page Visit |
            | page instance ID         | de                                                                       | string       | App On Click Start, App Page Visit |
            | page info version        | appVersion                                                               | regexp named | App On Click Start, App Page Visit |
            | page segment             | personas                                                                 | string       | App On Click Start, App Page Visit |
            | sysEnv                   | app                                                                      | string       | App On Click Start, App Page Visit |
            | business unit            | BBVA Mexico                                                              | string       | App On Click Start, App Page Visit |
            | site app name            | App BBVA Mexico                                                          | string       | App On Click Start, App Page Visit |
            | project name             | Rewards                                                                  | string       | App On Click Start, App Page Visit |
            | device mobile            | si                                                                       | string       | App On Click Start, App Page Visit |
            | user userState           | logado                                                                   | string       | App On Click Start, App Page Visit |
            | user segment global      | 003001                                                                   | string       | App On Click Start, App Page Visit |
            | profile ID               | profileID                                                                | regexp named | App On Click Start, App Page Visit |
            | user gender              | gender                                                                   | regexp named | App On Click Start, App Page Visit |
            | user age                 | age                                                                      | regexp named | App On Click Start, App Page Visit |
            | global application       | apply promotion                                                          | string       | App On Click Start, App Page Visit |
            | application name         | aplicar promocion                                                        | string       | App On Click Start, App Page Visit |
            | application type         | operativa                                                                | string       | App On Click Start, App Page Visit |
            | application step         | activar promocion desde detalle de promocion                             | string       | App On Click Start                 |
            | application step         | 1 seleccionar tarjeta                                                    | string       | App Page Visit                     |
            | fulfillment model        | online                                                                   | string       | App On Click Start, App Page Visit |
            | product primary category | tarjetas                                                                 | string       | App Page Visit                     |
            | internal campaign        |                                                                          | empty array  | App On Click Start, App Page Visit |
            | optimization attributes  |                                                                          | empty array  | App On Click Start, App Page Visit |

    @ANA_EVENT_PIE002
    @MX @backend(artichoke)
    @web @ios @android @analytics
    @web-done @vbank @spherica
    Scenario: App Started, App Step 2 - Rewards Promotion Invitation Enrollment - Enrollment from Promotion Detail
        Given a user with the following criteria:
            | criteria                          |
            | enrollment promotion invitation   |
            | after promotion period enrollment |
            | single participant card           |
        And the user accesses to Landing Promotions from dashboard
        And the analytics interceptor service is initiated
        When the user "tries to enroll in the promotion" from promotion detail with "single" participant card
        Then the analytics events contains the following variables:
            | item                     | value                                                                      | type         | event                   |
            | analytics                | analytics/glomo_base                                                       | json schema  | App Started, App Step 2 |
            | version DL               | 20250414_5.0                                                               | string       | App Started, App Step 2 |
            | page name                | app:privada:personas:promociones:aplicar promocion:1 seleccionar tarjeta   | string       | App Started             |
            | page name                | app:privada:personas:promociones:aplicar promocion:2 compras participantes | string       | App Step 2              |
            | level 1                  | promociones                                                                | string       | App Started, App Step 2 |
            | level 2                  | aplicar promocion                                                          | string       | App Started, App Step 2 |
            | level 3                  | 1 seleccionar tarjeta                                                      | string       | App Started             |
            | level 3                  | 2 compras participantes                                                    | string       | App Step 2              |
            | language                 | ES                                                                         | string       | App Started, App Step 2 |
            | page area                | privada                                                                    | string       | App Started, App Step 2 |
            | page intent              | transaccion                                                                | string       | App Started, App Step 2 |
            | channel                  | online                                                                     | string       | App Started, App Step 2 |
            | page instance ID         | de                                                                         | string       | App Started, App Step 2 |
            | page info version        | appVersion                                                                 | regexp named | App Started, App Step 2 |
            | page segment             | personas                                                                   | string       | App Started, App Step 2 |
            | sysEnv                   | app                                                                        | string       | App Started, App Step 2 |
            | business unit            | BBVA Mexico                                                                | string       | App Started, App Step 2 |
            | site app name            | App BBVA Mexico                                                            | string       | App Started, App Step 2 |
            | project name             | Rewards                                                                    | string       | App Started, App Step 2 |
            | device mobile            | si                                                                         | string       | App Started, App Step 2 |
            | user userState           | logado                                                                     | string       | App Started, App Step 2 |
            | user segment global      | 003001                                                                     | string       | App Started, App Step 2 |
            | profile ID               | profileID                                                                  | regexp named | App Started, App Step 2 |
            | user gender              | gender                                                                     | regexp named | App Started, App Step 2 |
            | user age                 | age                                                                        | regexp named | App Started, App Step 2 |
            | global application       | apply promotion                                                            | string       | App Started, App Step 2 |
            | application name         | aplicar promocion                                                          | string       | App Started, App Step 2 |
            | application type         | operativa                                                                  | string       | App Started, App Step 2 |
            | application step         | continuar                                                                  | string       | App Started             |
            | application step         | 2 compras participantes                                                    | string       | App Step 2              |
            | fulfillment model        | online                                                                     | string       | App Started, App Step 2 |
            | product primary category | tarjetas                                                                   | string       | App Started, App Step 2 |
            | product subtype          | tarjetas credito                                                           | string       | App Step 2              |
            | product name             | tarjeta de credito                                                         | string       | App Step 2              |
            | internal campaign        |                                                                            | empty array  | App Started, App Step 2 |
            | optimization attributes  |                                                                            | empty array  | App Started, App Step 2 |

    @ANA_EVENT_PIE003
    @MX @backend(artichoke)
    @web @ios @android @analytics
    @web-done @vbank @spherica
    Scenario: App Step 3 - Rewards Promotion Invitation Enrollment - Participants Purchases Selection
        Given a user with the following criteria:
            | criteria                          |
            | enrollment promotion invitation   |
            | after promotion period enrollment |
            | single participant card           |
        And the user accesses to Landing Promotions from dashboard
        And the user "tries to enroll in the promotion" from promotion detail with "single" participant card
        And the analytics interceptor service is initiated
        When the user tries to select purchases
        Then the analytics events contains the following variables:
            | item                     | value                                                                    | type         | event      |
            | analytics                | analytics/glomo_base                                                     | json schema  | App Step 3 |
            | version DL               | 20250414_5.0                                                             | string       | App Step 3 |
            | page name                | app:privada:personas:promociones:aplicar promocion:3 seleccionar compras | string       | App Step 3 |
            | level 1                  | promociones                                                              | string       | App Step 3 |
            | level 2                  | aplicar promocion                                                        | string       | App Step 3 |
            | level 3                  | 3 seleccionar compras                                                    | string       | App Step 3 |
            | language                 | ES                                                                       | string       | App Step 3 |
            | page area                | privada                                                                  | string       | App Step 3 |
            | page intent              | transaccion                                                              | string       | App Step 3 |
            | channel                  | online                                                                   | string       | App Step 3 |
            | page instance ID         | de                                                                       | string       | App Step 3 |
            | page info version        | appVersion                                                               | regexp named | App Step 3 |
            | page segment             | personas                                                                 | string       | App Step 3 |
            | sysEnv                   | app                                                                      | string       | App Step 3 |
            | business unit            | BBVA Mexico                                                              | string       | App Step 3 |
            | site app name            | App BBVA Mexico                                                          | string       | App Step 3 |
            | project name             | Rewards                                                                  | string       | App Step 3 |
            | device mobile            | si                                                                       | string       | App Step 3 |
            | user userState           | logado                                                                   | string       | App Step 3 |
            | user segment global      | 003001                                                                   | string       | App Step 3 |
            | profile ID               | profileID                                                                | regexp named | App Step 3 |
            | user gender              | gender                                                                   | regexp named | App Step 3 |
            | user age                 | age                                                                      | regexp named | App Step 3 |
            | global application       | apply promotion                                                          | string       | App Step 3 |
            | application name         | aplicar promocion                                                        | string       | App Step 3 |
            | application type         | operativa                                                                | string       | App Step 3 |
            | application step         | 3 seleccionar compras                                                    | string       | App Step 3 |
            | fulfillment model        | online                                                                   | string       | App Step 3 |
            | product primary category | tarjetas                                                                 | string       | App Step 3 |
            | product subtype          | tarjetas credito                                                         | string       | App Step 3 |
            | product name             | tarjeta de credito                                                       | string       | App Step 3 |
            | internal campaign        |                                                                          | empty array  | App Step 3 |
            | optimization attributes  |                                                                          | empty array  | App Step 3 |

    @ANA_EVENT_PIE004
    @MX @backend(artichoke)
    @web @ios @android @analytics
    @web-done @vbank @spherica
    Scenario: App Step 4 - Rewards Promotion Invitation Enrollment - Resume
        Given a user with the following criteria:
            | criteria                          |
            | enrollment promotion invitation   |
            | after promotion period enrollment |
            | single participant card           |
        And the user accesses to Landing Promotions from dashboard
        And the user "tries to enroll in the promotion" from promotion detail with "single" participant card
        And the analytics interceptor service is initiated
        When the user completes purchases selection
        Then the analytics events contains the following variables:
            | item                     | value                                                        | type         | event      |
            | analytics                | analytics/glomo_base                                         | json schema  | App Step 4 |
            | version DL               | 20250414_5.0                                                 | string       | App Step 4 |
            | page name                | app:privada:personas:promociones:aplicar promocion:4 resumen | string       | App Step 4 |
            | level 1                  | promociones                                                  | string       | App Step 4 |
            | level 2                  | aplicar promocion                                            | string       | App Step 4 |
            | level 3                  | 4 resumen                                                    | string       | App Step 4 |
            | language                 | ES                                                           | string       | App Step 4 |
            | page area                | privada                                                      | string       | App Step 4 |
            | page intent              | transaccion                                                  | string       | App Step 4 |
            | channel                  | online                                                       | string       | App Step 4 |
            | page instance ID         | de                                                           | string       | App Step 4 |
            | page info version        | appVersion                                                   | regexp named | App Step 4 |
            | page segment             | personas                                                     | string       | App Step 4 |
            | sysEnv                   | app                                                          | string       | App Step 4 |
            | business unit            | BBVA Mexico                                                  | string       | App Step 4 |
            | site app name            | App BBVA Mexico                                              | string       | App Step 4 |
            | project name             | Rewards                                                      | string       | App Step 4 |
            | device mobile            | si                                                           | string       | App Step 4 |
            | user userState           | logado                                                       | string       | App Step 4 |
            | user segment global      | 003001                                                       | string       | App Step 4 |
            | profile ID               | profileID                                                    | regexp named | App Step 4 |
            | user gender              | gender                                                       | regexp named | App Step 4 |
            | user age                 | age                                                          | regexp named | App Step 4 |
            | global application       | apply promotion                                              | string       | App Step 4 |
            | application name         | aplicar promocion                                            | string       | App Step 4 |
            | application type         | operativa                                                    | string       | App Step 4 |
            | application step         | 4 resumen                                                    | string       | App Step 4 |
            | fulfillment model        | online                                                       | string       | App Step 4 |
            | application typology     | 1                                                            | string       | App Step 4 |
            | product primary category | tarjetas                                                     | string       | App Step 4 |
            | product subtype          | tarjetas credito                                             | string       | App Step 4 |
            | product name             | tarjeta de credito                                           | string       | App Step 4 |
            | product amount           | 1000                                                         | string       | App Step 4 |
            | product currency         | MXN                                                          | string       | App Step 4 |
            | internal campaign        |                                                              | empty array  | App Step 4 |
            | optimization attributes  |                                                              | empty array  | App Step 4 |

    @ANA_EVENT_PIE005
    @MX @backend(artichoke)
    @web @ios @android @analytics
    @web-done @vbank @spherica
    Scenario: App Completed - Rewards Promotion Invitation Enrollment - Completed Enrollment
        Given a user with the following criteria:
            | criteria                          |
            | enrollment promotion invitation   |
            | after promotion period enrollment |
            | single participant card           |
        And the user accesses to Landing Promotions from dashboard
        And the analytics interceptor service is initiated
        When the user "completes enrollment in promotion" from promotion detail with "single" participant card
        Then the analytics events contains the following variables:
            | item                     | value                                                             | type         | event         |
            | analytics                | analytics/glomo_base                                              | json schema  | App Completed |
            | version DL               | 20250414_5.0                                                      | string       | App Completed |
            | page name                | app:privada:personas:promociones:aplicar promocion:pagina exitosa | string       | App Completed |
            | level 1                  | promociones                                                       | string       | App Completed |
            | level 2                  | aplicar promocion                                                 | string       | App Completed |
            | level 3                  | pagina exitosa                                                    | string       | App Completed |
            | language                 | ES                                                                | string       | App Completed |
            | page area                | privada                                                           | string       | App Completed |
            | page intent              | transaccion                                                       | string       | App Completed |
            | channel                  | online                                                            | string       | App Completed |
            | page instance ID         | de                                                                | string       | App Completed |
            | page info version        | appVersion                                                        | regexp named | App Completed |
            | page segment             | personas                                                          | string       | App Completed |
            | sysEnv                   | app                                                               | string       | App Completed |
            | business unit            | BBVA Mexico                                                       | string       | App Completed |
            | site app name            | App BBVA Mexico                                                   | string       | App Completed |
            | project name             | Rewards                                                           | string       | App Completed |
            | device mobile            | si                                                                | string       | App Completed |
            | user userState           | logado                                                            | string       | App Completed |
            | user segment global      | 003001                                                            | string       | App Completed |
            | profile ID               | profileID                                                         | regexp named | App Completed |
            | user gender              | gender                                                            | regexp named | App Completed |
            | user age                 | age                                                               | regexp named | App Completed |
            | global application       | apply promotion                                                   | string       | App Completed |
            | application name         | aplicar promocion                                                 | string       | App Completed |
            | application type         | operativa                                                         | string       | App Completed |
            | application step         | pagina exitosa                                                    | string       | App Completed |
            | fulfillment model        | online                                                            | string       | App Completed |
            | application typology     | 1                                                                 | string       | App Completed |
            | application state        | finalizado                                                        | string       | App Completed |
            | product primary category | tarjetas                                                          | string       | App Completed |
            | product subtype          | tarjetas credito                                                  | string       | App Completed |
            | product name             | tarjeta de credito                                                | string       | App Completed |
            | product amount           | 1000                                                              | string       | App Completed |
            | product currency         | MXN                                                               | string       | App Completed |
            | internal campaign        |                                                                   | empty array  | App Completed |
            | optimization attributes  |                                                                   | empty array  | App Completed |

    @ANA_EVENT_PIE006
    @MX @backend(artichoke)
    @web @ios @android @analytics
    @web-done @vbank @spherica
    Scenario: Page View - Access to active promotion by invitation from promotion detail
        Given a user with the following criteria:
            | criteria                               |
            | active enrollment promotion invitation |
        And the user accesses to Landing Promotions from dashboard
        And the analytics interceptor service is initiated
        When the user tries to enroll in the promotion from promotion detail
        Then the analytics events contains the following variables:
            | item                    | value                                                                                | type             | event     | event number |
            | analytics               | analytics/glomo_base                                                                 | json schema      | Page View | 2            |
            | version DL              | 20250414_5.0                                                                         | string           | Page View | 2            |
            | page name               | app:privada:personas:promociones:activar promocion:error ya activaste esta promocion | string           | Page View | 2            |
            | level 1                 | promociones                                                                          | string           | Page View | 2            |
            | level 2                 | activar promocion                                                                    | string           | Page View | 2            |
            | level 3                 | error ya activaste esta promocion                                                    | string           | Page View | 2            |
            | error page              | error ya activaste esta promocion                                                    | string           | Page View | 2            |
            | language                | ES                                                                                   | string           | Page View | 2            |
            | page area               | privada                                                                              | string           | Page View | 2            |
            | page intent             | transaccion                                                                          | string           | Page View | 2            |
            | channel                 | online                                                                               | string           | Page View | 2            |
            | page instance ID        | de                                                                                   | string           | Page View | 2            |
            | page info version       | appVersion                                                                           | regexp named     | Page View | 2            |
            | page segment            | personas                                                                             | string           | Page View | 2            |
            | sysEnv                  | app                                                                                  | string           | Page View | 2            |
            | business unit           | BBVA Mexico                                                                          | string           | Page View | 2            |
            | site app name           | App BBVA Mexico                                                                      | string           | Page View | 2            |
            | project name            | Rewards                                                                              | string           | Page View | 2            |
            | device mobile           | si                                                                                   | string           | Page View | 2            |
            | user userState          | logado                                                                               | string           | Page View | 2            |
            | user segment global     | 003001                                                                               | string           | Page View | 2            |
            | profile ID              | profileID                                                                            | regexp named     | Page View | 2            |
            | user gender             | gender                                                                               | regexp named     | Page View | 2            |
            | user age                | age                                                                                  | regexp named     | Page View | 2            |
            | internal campaign       |                                                                                      | empty array      | Page View | 2            |
            | optimization attributes |                                                                                      | empty array      | Page View | 2            |
            | application             |                                                                                      | empty str object | Page View | 2            |
            | products attributes     |                                                                                      | empty array      | Page View | 2            |

    @ANA_EVENT_PIE007
    @MX @backend(artichoke)
    @web @ios @android @analytics
    @web-done @spherica @vbank
    Scenario: Page View - No participants purchases
        Given a user with the following criteria:
            | criteria                          |
            | no participants purchases error   |
            | after promotion period enrollment |
        And the user accesses to Landing Promotions from dashboard
        And the user "tries to enroll in the promotion" from promotion detail with "single" participant card
        And the analytics interceptor service is initiated
        When the user tries to select purchases
        Then the analytics events contains the following variables:
            | item                    | value                                                                              | type             | event     |
            | analytics               | analytics/glomo_base                                                               | json schema      | Page View |
            | version DL              | 20250414_5.0                                                                       | string           | Page View |
            | page name               | app:privada:personas:promociones:aplicar promocion:error sin compras participantes | string           | Page View |
            | level 1                 | promociones                                                                        | string           | Page View |
            | level 2                 | aplicar promocion                                                                  | string           | Page View |
            | level 3                 | error sin compras participantes                                                    | string           | Page View |
            | error page              | error sin compras participantes                                                    | string           | Page View |
            | language                | ES                                                                                 | string           | Page View |
            | page area               | privada                                                                            | string           | Page View |
            | page intent             | transaccion                                                                        | string           | Page View |
            | channel                 | online                                                                             | string           | Page View |
            | page instance ID        | de                                                                                 | string           | Page View |
            | page info version       | appVersion                                                                         | regexp named     | Page View |
            | page segment            | personas                                                                           | string           | Page View |
            | sysEnv                  | app                                                                                | string           | Page View |
            | business unit           | BBVA Mexico                                                                        | string           | Page View |
            | site app name           | App BBVA Mexico                                                                    | string           | Page View |
            | project name            | Rewards                                                                            | string           | Page View |
            | device mobile           | si                                                                                 | string           | Page View |
            | user userState          | logado                                                                             | string           | Page View |
            | user segment global     | 003001                                                                             | string           | Page View |
            | profile ID              | profileID                                                                          | regexp named     | Page View |
            | user gender             | gender                                                                             | regexp named     | Page View |
            | user age                | age                                                                                | regexp named     | Page View |
            | internal campaign       |                                                                                    | empty array      | Page View |
            | optimization attributes |                                                                                    | empty array      | Page View |
            | application             |                                                                                    | empty str object | Page View |
            | products attributes     |                                                                                    | empty array      | Page View |

    @ANA_EVENT_PIE008
    @MX @backend(artichoke)
    @web @ios @android @analytics
    @web-done @spherica @vbank
    Scenario: No participants cards - Page View
        Given a user with the following criteria:
            | criteria                          |
            | no participants cards error       |
            | after promotion period enrollment |
        And the user accesses to Landing Promotions from dashboard
        And the analytics interceptor service is initiated
        When the user tries to enroll in the promotion from promotion detail
        Then the analytics events contains the following variables:
            | item                    | value                                                                               | type             | event     | event number |
            | analytics               | analytics/glomo_base                                                                | json schema      | Page View | 2            |
            | version DL              | 20250414_5.0                                                                        | string           | Page View | 2            |
            | page name               | app:privada:personas:promociones:aplicar promocion:error sin tarjetas participantes | string           | Page View | 2            |
            | level 1                 | promociones                                                                         | string           | Page View | 2            |
            | level 2                 | aplicar promocion                                                                   | string           | Page View | 2            |
            | level 3                 | error sin tarjetas participantes                                                    | string           | Page View | 2            |
            | error page              | error sin tarjetas participantes                                                    | string           | Page View | 2            |
            | language                | ES                                                                                  | string           | Page View | 2            |
            | page area               | privada                                                                             | string           | Page View | 2            |
            | page intent             | transaccion                                                                         | string           | Page View | 2            |
            | channel                 | online                                                                              | string           | Page View | 2            |
            | page instance ID        | de                                                                                  | string           | Page View | 2            |
            | page info version       | appVersion                                                                          | regexp named     | Page View | 2            |
            | page segment            | personas                                                                            | string           | Page View | 2            |
            | sysEnv                  | app                                                                                 | string           | Page View | 2            |
            | business unit           | BBVA Mexico                                                                         | string           | Page View | 2            |
            | site app name           | App BBVA Mexico                                                                     | string           | Page View | 2            |
            | project name            | Rewards                                                                             | string           | Page View | 2            |
            | device mobile           | si                                                                                  | string           | Page View | 2            |
            | user userState          | logado                                                                              | string           | Page View | 2            |
            | user segment global     | 003001                                                                              | string           | Page View | 2            |
            | profile ID              | profileID                                                                           | regexp named     | Page View | 2            |
            | user gender             | gender                                                                              | regexp named     | Page View | 2            |
            | user age                | age                                                                                 | regexp named     | Page View | 2            |
            | internal campaign       |                                                                                     | empty array      | Page View | 2            |
            | optimization attributes |                                                                                     | empty array      | Page View | 2            |
            | application             |                                                                                     | empty str object | Page View | 2            |
            | products attributes     |                                                                                     | empty array      | Page View | 2            |

    @ANA_EVENT_PIE009
    @MX @backend(artichoke)
    @web @ios @android @analytics
    @web-done @spherica @vbank
    Scenario: Limit Exceed Available Amount - Page View
        Given a user with the following criteria:
            | criteria                                |
            | enrollment promotion limit exceed error |
        And the user accesses to Landing Promotions from dashboard
        And the user "tries to enroll in the promotion" from promotion detail with "single" participant card
        And the analytics interceptor service is initiated
        When the user selects more participants purchases than credit card amount available
        Then the analytics events contains the following variables:
            | item                    | value                                                                    | type             | event     |
            | analytics               | analytics/glomo_base                                                     | json schema      | Page View |
            | version DL              | 20250414_5.0                                                             | string           | Page View |
            | page name               | app:privada:personas:promociones:aplicar promocion:error monto excedido  | string           | Page View |
            | level 1                 | promociones                                                              | string           | Page View |
            | level 2                 | aplicar promocion                                                        | string           | Page View |
            | level 3                 | error monto excedido                                                     | string           | Page View |
            | error page              | error monto excedido                                                     | string           | Page View |
            | language                | ES                                                                       | string           | Page View |
            | page area               | privada                                                                  | string           | Page View |
            | page intent             | transaccion                                                              | string           | Page View |
            | channel                 | online                                                                   | string           | Page View |
            | page instance ID        | de                                                                       | string           | Page View |
            | page info version       | appVersion                                                               | regexp named     | Page View |
            | page segment            | personas                                                                 | string           | Page View |
            | sysEnv                  | app                                                                      | string           | Page View |
            | business unit           | BBVA Mexico                                                              | string           | Page View |
            | site app name           | App BBVA Mexico                                                          | string           | Page View |
            | project name            | Rewards                                                                  | string           | Page View |
            | device mobile           | si                                                                       | string           | Page View |
            | user userState          | logado                                                                   | string           | Page View |
            | user segment global     | 003001                                                                   | string           | Page View |
            | profile ID              | profileID                                                                | regexp named     | Page View |
            | user gender             | gender                                                                   | regexp named     | Page View |
            | user age                | age                                                                      | regexp named     | Page View |
            | internal campaign       |                                                                          | empty array      | Page View |
            | optimization attributes |                                                                          | empty array      | Page View |
            | application             |                                                                          | empty str object | Page View |
            | products attributes     |                                                                          | empty array      | Page View |

    @ANA_EVENT_PIE010
    @MX @backend(artichoke)
    @web @ios @android @analytics
    @web-done @spherica @vbank @vbank-modified
    #Edit vbank record to reduce the amount of purchases and allow selecting more than 25 purchases.
    Scenario: Limit Exceed Purchases quantity - Page View
        Given a user with the following criteria:
            | criteria                          |
            | enrollment promotion invitation   |
            | after promotion period enrollment |
            | single participant card           |
        And the user accesses to Landing Promotions from dashboard
        And the user "tries to enroll in the promotion" from promotion detail with "single" participant card
        And the analytics interceptor service is initiated
        When the user selects more participants purchases than maximum purchases allowed
        Then the analytics events contains the following variables:
            | item                    | value                                                                      | type             | event     |
            | analytics               | analytics/glomo_base                                                       | json schema      | Page View |
            | version DL              | 20250414_5.0                                                               | string           | Page View |
            | page name               | app:privada:personas:promociones:aplicar promocion:error cantidad excedida | string           | Page View |
            | level 1                 | promociones                                                                | string           | Page View |
            | level 2                 | aplicar promocion                                                          | string           | Page View |
            | level 3                 | error cantidad excedida                                                    | string           | Page View |
            | error page              | error cantidad excedida                                                    | string           | Page View |
            | page area               | privada                                                                    | string           | Page View |
            | page intent             | transaccion                                                                | string           | Page View |
            | channel                 | online                                                                     | string           | Page View |
            | page instance ID        | de                                                                         | string           | Page View |
            | page info version       | appVersion                                                                 | regexp named     | Page View |
            | page segment            | personas                                                                   | string           | Page View |
            | sysEnv                  | app                                                                        | string           | Page View |
            | business unit           | BBVA Mexico                                                                | string           | Page View |
            | site app name           | App BBVA Mexico                                                            | string           | Page View |
            | project name            | Rewards                                                                    | string           | Page View |
            | device mobile           | si                                                                         | string           | Page View |
            | user userState          | logado                                                                     | string           | Page View |
            | user segment global     | 003001                                                                     | string           | Page View |
            | profile ID              | profileID                                                                  | regexp named     | Page View |
            | user gender             | gender                                                                     | regexp named     | Page View |
            | user age                | age                                                                        | regexp named     | Page View |
            | internal campaign       |                                                                            | empty array      | Page View |
            | optimization attributes |                                                                            | empty array      | Page View |
            | application             |                                                                            | empty str object | Page View |
            | products attributes     |                                                                            | empty array      | Page View |

    @ANA_EVENT_PIE011
    @MX @backend(artichoke)
    @web @ios @android @analytics
    @web-done @spherica @vbank
    Scenario: Information error when tries to access to enrollment promotion by invitation - Retry access
        Given a user with the following criteria:
            | criteria                                      |
            | enrollment promotion invitation service error |
            | after promotion period enrollment             |
        And the user accesses to Landing Promotions from dashboard
        And the user tries to enroll in the promotion from promotion detail
        And the analytics interceptor service is initiated
        When the user retries "3" more times
        Then the analytics events contains the following variables:
            | item                    | value                                                                              | type             | event     |
            | analytics               | analytics/glomo_base                                                               | json schema      | Page View |
            | version DL              | 20250414_5.0                                                                       | string           | Page View |
            | page name               | app:privada:personas:promociones:aplicar promocion:error informacion no disponible | string           | Page View |
            | level 1                 | promociones                                                                        | string           | Page View |
            | level 2                 | aplicar promocion                                                                  | string           | Page View |
            | level 3                 | error informacion no disponible                                                    | string           | Page View |
            | error page              | error informacion no disponible                                                    | string           | Page View |
            | language                | ES                                                                                 | string           | Page View |
            | page area               | privada                                                                            | string           | Page View |
            | page intent             | transaccion                                                                        | string           | Page View |
            | channel                 | online                                                                             | string           | Page View |
            | page instance ID        | de                                                                                 | string           | Page View |
            | page info version       | appVersion                                                                         | regexp named     | Page View |
            | page segment            | personas                                                                           | string           | Page View |
            | sysEnv                  | app                                                                                | string           | Page View |
            | business unit           | BBVA Mexico                                                                        | string           | Page View |
            | site app name           | App BBVA Mexico                                                                    | string           | Page View |
            | project name            | Rewards                                                                            | string           | Page View |
            | device mobile           | si                                                                                 | string           | Page View |
            | user userState          | logado                                                                             | string           | Page View |
            | profile ID              | profileID                                                                          | regexp named     | Page View |
            | user segment global     | 003001                                                                             | string           | Page View |
            | user gender             | gender                                                                             | regexp named     | Page View |
            | user age                | age                                                                                | regexp named     | Page View |
            | internal campaign       |                                                                                    | empty array      | Page View |
            | optimization attributes |                                                                                    | empty array      | Page View |
            | application             |                                                                                    | empty str object | Page View |
            | products attributes     |                                                                                    | empty array      | Page View |

    @ANA_EVENT_PIE012
    @MX @backend(artichoke)
    @web @ios @android @analytics
    @web-done @spherica @vbank
    Scenario: Service error when tries to access to enrollment promotion by invitation - Retry access
        Given a user with the following criteria:
            | criteria                                      |
            | enrollment promotion enrollment receipt error |
        And the user accesses to Landing Promotions from dashboard
        And the user "completes enrollment in promotion" from promotion detail with "single" participant card
        And the analytics interceptor service is initiated
        When the user retries "3" more times
        Then the analytics events contains the following variables:
            | item                    | value                                                                            | type             | event     |
            | analytics               | analytics/glomo_base                                                             | json schema      | Page View |
            | version DL              | 20250414_5.0                                                                     | string           | Page View |
            | page name               | app:privada:personas:promociones:aplicar promocion:error operacion no disponible | string           | Page View |
            | level 1                 | promociones                                                                      | string           | Page View |
            | level 2                 | aplicar promocion                                                                | string           | Page View |
            | level 3                 | error operacion no disponible                                                    | string           | Page View |
            | error page              | error operacion no disponible                                                    | string           | Page View |
            | language                | ES                                                                               | string           | Page View |
            | page area               | privada                                                                          | string           | Page View |
            | page intent             | transaccion                                                                      | string           | Page View |
            | channel                 | online                                                                           | string           | Page View |
            | page instance ID        | de                                                                               | string           | Page View |
            | page info version       | appVersion                                                                       | regexp named     | Page View |
            | page segment            | personas                                                                         | string           | Page View |
            | sysEnv                  | app                                                                              | string           | Page View |
            | business unit           | BBVA Mexico                                                                      | string           | Page View |
            | site app name           | App BBVA Mexico                                                                  | string           | Page View |
            | project name            | Rewards                                                                          | string           | Page View |
            | device mobile           | si                                                                               | string           | Page View |
            | user userState          | logado                                                                           | string           | Page View |
            | profile ID              | profileID                                                                        | regexp named     | Page View |
            | user segment global     | 003001                                                                           | string           | Page View |
            | user gender             | gender                                                                           | regexp named     | Page View |
            | user age                | age                                                                              | regexp named     | Page View |
            | internal campaign       |                                                                                  | empty array      | Page View |
            | optimization attributes |                                                                                  | empty array      | Page View |
            | application             |                                                                                  | empty str object | Page View |
            | products attributes     |                                                                                  | empty array      | Page View |

    @ANA_EVENT_PIE013
    @MX @backend(artichoke)
    @web @ios @android @analytics
    @web-done @vbank @spherica
    Scenario: Enroll in a promotion by invitation from promotion detail in previous days - Page View
        Given a user with the following criteria:
            | criteria                        |
            | enrollment promotion invitation |
            | previous days                   |
        And the user accesses to Landing Promotions from dashboard
        And the analytics interceptor service is initiated
        When the user enrolls in the promotion from promotion detail
        Then the analytics events contains the following variables:
            | item                    | value                                                             | type             | event     | event number |
            | analytics               | analytics/glomo_base                                              | json schema      | Page View | 2            |
            | version DL              | 20250414_5.0                                                      | string           | Page View | 2            |
            | page name               | app:privada:personas:promociones:activar promocion:pagina exitosa | string           | Page View | 2            |
            | level 1                 | promociones                                                       | string           | Page View | 2            |
            | level 2                 | activar promocion                                                 | string           | Page View | 2            |
            | level 3                 | pagina exitosa                                                    | string           | Page View | 2            |
            | language                | ES                                                                | string           | Page View | 2            |
            | page area               | privada                                                           | string           | Page View | 2            |
            | page intent             | transaccion                                                       | string           | Page View | 2            |
            | channel                 | online                                                            | string           | Page View | 2            |
            | page instance ID        | de                                                                | string           | Page View | 2            |
            | page info version       | appVersion                                                        | regexp named     | Page View | 2            |
            | page segment            | personas                                                          | string           | Page View | 2            |
            | sysEnv                  | app                                                               | string           | Page View | 2            |
            | business unit           | BBVA Mexico                                                       | string           | Page View | 2            |
            | site app name           | App BBVA Mexico                                                   | string           | Page View | 2            |
            | project name            | Rewards                                                           | string           | Page View | 2            |
            | device mobile           | si                                                                | string           | Page View | 2            |
            | user userState          | logado                                                            | string           | Page View | 2            |
            | profile ID              | profileID                                                         | regexp named     | Page View | 2            |
            | user segment global     | 003001                                                            | string           | Page View | 2            |
            | user gender             | gender                                                            | regexp named     | Page View | 2            |
            | user age                | age                                                               | regexp named     | Page View | 2            |
            | internal campaign       |                                                                   | empty array      | Page View | 2            |
            | optimization attributes |                                                                   | empty array      | Page View | 2            |
            | application             |                                                                   | empty str object | Page View | 2            |
            | products attributes     |                                                                   | empty array      | Page View | 2            |

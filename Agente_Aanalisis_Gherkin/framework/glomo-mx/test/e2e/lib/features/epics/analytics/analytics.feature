@analytics
Feature: Analytics

    @ANA_DB001 @dashboard
    @ios @android @web
    @MX @backend(artichoke)
    @vbank
    @web-done @EXAMPLE
    Scenario: Analytics values
    NOTE: This scenario is an example, and will be removed soon
        Given a user with the following criteria
            | criteria |
            | enabled  |
        When the user accesses to dashboard
        Then the device contains the following variables
            | item            | value                    | type         |
            | Analytics       | analytics/dashboard_base | json schema  |
            | user gender     | gender                   | regexp named |
            | user userState  | logado                   | string       |
            | profile ID      | ^[a-zA-Z0-9]{8,}$        | regex        |

    @ANA_EVENT_PP001 @purchasePointsAnalytics
    @ios @android @web
    @MX @backend(artichoke)
    @vbank
    @web-done @EXAMPLE
    Scenario: Funnel - pay with points - analytics events App On Click Start, App Page Visit
        Given a user with the following criteria
            | criteria            |
            | Pay with points     |
            | Card without errors |
        And the user accesses to movement detail from a "card with points" within Product detail
        And the analytics interceptor service is initiated
        When the user goes to Pay with Points
        Then the analytics events contains the following variables
            | item                     | value                                                                    | type         | event                              |
            | analytics                | analytics/glomo_base                                                     | json schema  | App On Click Start, App Page Visit |
            | version dl               | 20250414_5.0                                                             | string       | App On Click Start, App Page Visit |
            | page name                | app:privada:personas:tarjetas:credito:detalle:movimientos:consulta       | string       | App On Click Start                 |
            | page name                | app:privada:personas:tarjetas:credito:pagar con puntos:1 consideraciones | string       | App Page Visit                     |
            | level 1                  | tarjetas                                                                 | string       | App On Click Start, App Page Visit |
            | level 2                  | credito                                                                  | string       | App On Click Start, App Page Visit |
            | level 3                  | detalle                                                                  | string       | App On Click Start                 |
            | level 3                  | pagar con puntos                                                         | string       | App Page Visit                     |
            | level 4                  | movimientos                                                              | string       | App On Click Start                 |
            | level 4                  | 1 consideraciones                                                        | string       | App Page Visit                     |
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
            | global application       | points redeem                                                            | string       | App On Click Start, App Page Visit |
            | application name         | pagar con puntos                                                         | string       | App On Click Start, App Page Visit |
            | application type         | operativa                                                                | string       | App On Click Start, App Page Visit |
            | application step         | detalle del movimiento                                                   | string       | App On Click Start                 |
            | application step         | 1 consideraciones                                                        | string       | App Page Visit                     |
            | fulfillment model        | online                                                                   | string       | App On Click Start, App Page Visit |
            | application typology     |                                                                          | string       | App On Click Start, App Page Visit |
            | custom fields            |                                                                          | string       | App On Click Start                 |
            | custom fields            | 34002                                                                    | string       | App Page Visit                     |
            | product primary category | tarjetas                                                                 | string       | App On Click Start, App Page Visit |
            | product subtype          | tarjetas credito                                                         | string       | App On Click Start, App Page Visit |
            | product name             | oro bbva                                                                 | string       | App On Click Start, App Page Visit |
            | product currency         |                                                                          | string       | App On Click Start                 |
            | product currency         | MXN                                                                      | string       | App Page Visit                     |
            | product amount           |                                                                          | string       | App On Click Start                 |
            | product amount           | 3400.26                                                                  | string       | App Page Visit                     |
            | product quantity         |                                                                          | string       | App On Click Start                 |
            | product quantity         | 80                                                                       | string       | App Page Visit                     |
            | internal campaign        |                                                                          | empty array  | App On Click Start, App Page Visit |
            | optimization attributes  |                                                                          | empty array  | App On Click Start, App Page Visit |

@offerTdcModalAnalytics
Feature:  Analytics - offer tdc + tdd

    @ANA_OTMP001
    @analytics
    @MX
    @vbank
    @backend(test)
    @web
    @web-done
    Scenario: OTMP - Modal Page View
        Given a user with the following criteria
            | criteria                 |
            | offer preapproved tdc    |
        When the user accesses to dashboard
        And the user goes to "screen offer tdc modal" using deeplink navigation
        Then the device contains the following variables
            | item                     | value                                                                                       | type             |
            | analytics                | analytics/glomo_base                                                                        | json schema      |
            | version DL               | 20250414_5.0                                                                                | string           |
            | page name                | app:privada:personas:notificaciones:aprovecha los beneficios:oferta tarjetas                | string           |
            | level 1                  | notificaciones                                                                              | string           |
            | level 2                  | aprovecha los beneficios                                                                    | string           |
            | level 3                  | oferta tarjetas                                                                             | string           |
            | language                 | ES                                                                                          | string           |
            | page area                | privada                                                                                     | string           |
            | page intent              | informacion                                                                                 | string           |
            | channel                  | online                                                                                      | string           |
            | page instance ID         | de                                                                                          | string           |
            | page info version        | appVersion                                                                                  | regexp named     |
            | page segment             | personas                                                                                    | string           |
            | sysEnv                   | app                                                                                         | string           |
            | business unit            | BBVA Mexico                                                                                 | string           |
            | site app name            | App BBVA Mexico                                                                             | string           |
            | project name             | Glomo                                                                                       | string           |
            | device mobile            | si                                                                                          | string           |
            | user userState           | logado                                                                                      | string           |
            | profile ID               | profileID                                                                                   | regexp named     |
            | user segment global      | 003001                                                                                      | string           |
            | user gender              | gender                                                                                      | regexp named     |
            | user age                 | age                                                                                         | regexp named     |
            | internal campaign        |                                                                                             | empty array      |
            | optimization attributes  |                                                                                             | empty array      |
            | application              |                                                                                             | empty str object |
            | products attributes      |                                                                                             | empty array      |

    @ANA_OTMP002
    @analytics
    @MX
    @vbank
    @backend(test)
    @web
    @web-done
    Scenario: OTMP - Modal App on Click start
        Given a user with the following criteria
            | criteria                 |
            | offer preapproved tdc    |
        And the user accesses to dashboard
        And the user goes to "screen offer tdc modal" using deeplink navigation
        When the user accesses the contract
        Then the device contains the following variables
            | item                     | value                                                                                       | type         |
            | analytics                | analytics/glomo_base                                                                        | json schema      |
            | version DL               | 20250414_5.0                                                                                | string           |
            | page name                | app:privada:personas:notificaciones:aprovecha los beneficios:oferta tarjetas                | string       |
            | level 1                  | notificaciones                                                                              | string       |
            | level 2                  | aprovecha los beneficios                                                                    | string       |
            | level 3                  | oferta tarjetas                                                                             | string       |
            | language                 | ES                                                                                          | string       |
            | page area                | privada                                                                                     | string       |
            | page intent              | informacion                                                                                 | string       |
            | channel                  | online                                                                                      | string       |
            | page instance ID         | de                                                                                          | string       |
            | page info version        | appVersion                                                                                  | regexp named |
            | page segment             | personas                                                                                    | string       |
            | sysEnv                   | app                                                                                         | string       |
            | business unit            | BBVA Mexico                                                                                 | string       |
            | site app name            | App BBVA Mexico                                                                             | string       |
            | project name             | Glomo                                                                                       | string       |
            | device mobile            | si                                                                                          | string       |
            | user userState           | logado                                                                                      | string       |
            | profile ID               | profileID                                                                                   | regexp named |
            | user segment global      | 003001                                                                                      | string       |
            | global application       | credit card holder                                                                          | string       |
            | application name         | tarjeta de credito one click                                                                | string       |
            | application type         | contratacion                                                                                | string       |
            | application step         | modal tdc aprovecha los beneficios                                                          | string       |
            | fulfillment model        | online/offline                                                                              | string       |
            | product primary category | tarjetas                                                                                    | string       |
            | product subtype          | tarjetas credito                                                                            | string       |

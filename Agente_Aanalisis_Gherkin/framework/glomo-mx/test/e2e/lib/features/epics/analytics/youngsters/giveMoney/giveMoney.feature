@InternalTransfersYoungsterAnalytics
Feature: Analytics - Internal Transfers Youngster

    @ANA_EVENT_ITYA001
    @analytics
    @MX @web @ios @android @web-done
    @backend(test) @vbank
    Scenario: The user accesses to give money - Analytics App On Click
        Given a user with the following criteria
            | criteria        |
            | user give money |
        And the user accesses to the first account product detail
        And the analytics interceptor service is initiated
        When the user accesses to give money
        Then the analytics events contains the following variables:
            | item                     | value                                | type         | event              |
            | analytics                | analytics/glomo_base                 | json schema  | App On Click Start |
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
            | project name             | Glomo                                | string       | App On Click Start |
            | device mobile            | si                                   | string       | App On Click Start |
            | user userState           | logado                               | string       | App On Click Start |
            | profile ID               | profileID                            | regexp named | App On Click Start |
            | user segment global      | 003001                               | string       | App On Click Start |
            | user gender              | gender                               | regexp named | App On Click Start |
            | user age                 | age                                  | regexp named | App On Click Start |
            | global application       | transfers                            | string       | App On Click Start |
            | application name         | transferencias                       | string       | App On Click Start |
            | application type         | operativa                            | string       | App On Click Start |
            | application step         | dar dinero                           | string       | App On Click Start |
            | fulfillment model        | online                               | string       | App On Click Start |
            | product primary category | cuentas                              | string       | App On Click Start |
            | internal campaign        |                                      | empty array  | App On Click Start |
            | optimization attributes  |                                      | empty array  | App On Click Start |

    @ANA_EVENT_ITYA002
    @analytics
    @MX @web @ios @android @web-done
    @backend(test) @vbank
    Scenario: The user accesses to give money - Page View
        Given a user with the following criteria
            | criteria        |
            | user give money |
        And the user accesses to the first account product detail
        And the analytics interceptor service is initiated
        When the user accesses to give money
        Then the analytics events contains the following variables:
            | item                    | value                                                                      | type             | event     |
            | analytics               | analytics/glomo_base                                                       | json schema      | Page View |
            | version DL              | 20250414_5.0                                                               | string           | Page View |
            | page name               | app:privada:personas:cuentas:detalle:transferencias:dar dinero:informacion | string           | Page View |
            | level 1                 | cuentas                                                                    | string           | Page View |
            | level 2                 | detalle                                                                    | string           | Page View |
            | level 3                 | transferencias                                                             | string           | Page View |
            | level 4                 | dar dinero                                                                 | string           | Page View |
            | level 5                 | informacion                                                                | string           | Page View |
            | language                | ES                                                                         | string           | Page View |
            | page area               | privada                                                                    | string           | Page View |
            | page intent             | informacion                                                                | string           | Page View |
            | channel                 | online                                                                     | string           | Page View |
            | page instance ID        | de                                                                         | string           | Page View |
            | page info version       | appVersion                                                                 | regexp named     | Page View |
            | page segment            | personas                                                                   | string           | Page View |
            | sysEnv                  | app                                                                        | string           | Page View |
            | business unit           | BBVA Mexico                                                                | string           | Page View |
            | site app name           | App BBVA Mexico                                                            | string           | Page View |
            | project name            | Glomo                                                                      | string           | Page View |
            | device mobile           | si                                                                         | string           | Page View |
            | user userState          | logado                                                                     | string           | Page View |
            | user segment global     | 003001                                                                     | string           | Page View |
            | profile ID              | profileID                                                                  | regexp named     | Page View |
            | user age                | age                                                                        | regexp named     | Page View |
            | user gender             | gender                                                                     | regexp named     | Page View |
            | internal campaign       |                                                                            | empty array      | Page View |
            | optimization attributes |                                                                            | empty array      | Page View |
            | application             |                                                                            | empty str object | Page View |
            | products attributes     |                                                                            | empty array      | Page View |

    @ANA_EVENT_ITYA003
    @analytics
    @MX @web @ios @android @web-done
    @backend(test) @vbank
    Scenario: The user accesses to give money advice - Page View
        Given a user with the following criteria
            | criteria        |
            | user give money |
        And the user accesses to the first account product detail
        And the user accesses to give money
        And the analytics interceptor service is initiated
        When the user accesses to give money advice
        Then the analytics events contains the following variables:
            | item                    | value                                                                                | type             | event     |
            | analytics               | analytics/glomo_base                                                                 | json schema      | Page View |
            | version DL              | 20250414_5.0                                                                         | string           | Page View |
            | page name               | app:privada:personas:cuentas:detalle:transferencias:dar dinero:consejos para empezar | string           | Page View |
            | level 1                 | cuentas                                                                              | string           | Page View |
            | level 2                 | detalle                                                                              | string           | Page View |
            | level 3                 | transferencias                                                                       | string           | Page View |
            | level 4                 | dar dinero                                                                           | string           | Page View |
            | level 5                 | consejos para empezar                                                                | string           | Page View |
            | language                | ES                                                                                   | string           | Page View |
            | page area               | privada                                                                              | string           | Page View |
            | page intent             | informacion                                                                          | string           | Page View |
            | channel                 | online                                                                               | string           | Page View |
            | page instance ID        | de                                                                                   | string           | Page View |
            | page info version       | appVersion                                                                           | regexp named     | Page View |
            | page segment            | personas                                                                             | string           | Page View |
            | sysEnv                  | app                                                                                  | string           | Page View |
            | business unit           | BBVA Mexico                                                                          | string           | Page View |
            | site app name           | App BBVA Mexico                                                                      | string           | Page View |
            | project name            | Glomo                                                                                | string           | Page View |
            | device mobile           | si                                                                                   | string           | Page View |
            | user userState          | logado                                                                               | string           | Page View |
            | user segment global     | 003001                                                                               | string           | Page View |
            | profile ID              | profileID                                                                            | regexp named     | Page View |
            | user age                | age                                                                                  | regexp named     | Page View |
            | user gender             | gender                                                                               | regexp named     | Page View |
            | internal campaign       |                                                                                      | empty array      | Page View |
            | optimization attributes |                                                                                      | empty array      | Page View |
            | application             |                                                                                      | empty str object | Page View |
            | products attributes     |                                                                                      | empty array      | Page View |

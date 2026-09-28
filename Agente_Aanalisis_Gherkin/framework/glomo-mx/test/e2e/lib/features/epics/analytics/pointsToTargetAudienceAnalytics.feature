@pointsToTargetAudienceAnalytics
Feature: Analytics - Points to target audience

    @ANA_PFTA001
    @analytics
    @web @ios @android @vbank
    @backend(test) @MX @web-done
    Scenario: Footprint - Page View - Pay with points pob modal
        Given a user with the following criteria
            | criteria                  |
            | card with transactions    |
            | target audience purchases |
        And the user accesses to movement detail from a "card with points" within Product detail
        And the analytics interceptor service is initiated
        When the user goes to Pay with Points
        Then the analytics events contains the following variables
            | item                    | value                                                  | type             | event     |
            | analytics               | analytics/glomo_base                                   | json schema      | Page View |
            | version DL              | 20250414_5.0                                           | string           | Page View |
            | page name               | app:privada:personas:tarjetas:credito:pagar con puntos | string           | Page View |
            | level 1                 | tarjetas                                               | string           | Page View |
            | level 2                 | credito                                                | string           | Page View |
            | level 3                 | pagar con puntos                                       | string           | Page View |
            | language                | ES                                                     | string           | Page View |
            | page area               | privada                                                | string           | Page View |
            | page intent             | transaccion                                            | string           | Page View |
            | channel                 | online                                                 | string           | Page View |
            | page instance ID        | de                                                     | string           | Page View |
            | page info version       | appVersion                                             | regexp named     | Page View |
            | page segment            | personas                                               | string           | Page View |
            | sysEnv                  | app                                                    | string           | Page View |
            | business unit           | BBVA Mexico                                            | string           | Page View |
            | site app name           | App BBVA Mexico                                        | string           | Page View |
            | project name            | Rewards                                                | string           | Page View |
            | device mobile           | si                                                     | string           | Page View |
            | user userState          | logado                                                 | string           | Page View |
            | user segment global     | 003001                                                 | string           | Page View |
            | profile ID              | profileID                                              | regexp named     | Page View |
            | internal campaign       |                                                        | empty array      | Page View |
            | optimization attributes |                                                        | empty array      | Page View |
            | application             |                                                        | empty str object | Page View |
            | products attributes     |                                                        | empty array      | Page View |

    @ANA_PFTA002
    @analytics
    @web @ios @android @vbank
    @backend(test) @MX @web-done
    Scenario: Footprint - Page View - FAQs list
        Given a user with the following criteria
            | criteria                  |
            | card with transactions    |
            | target audience purchases |
        And the user accesses to movement detail from a "card with points" within Product detail
        And the analytics interceptor service is initiated
        And the user goes to Pay with Points
        When the user accesses to faq questions page
        Then the analytics events contains the following variables
            | item                    | value                                                      | type             | event     | event number |
            | analytics               | analytics/glomo_base                                       | json schema      | Page View | 2            |
            | version DL              | 20250414_5.0                                               | string           | Page View | 2            |
            | page name               | app:privada:personas:tarjetas:credito:pagar con puntos:faq | string           | Page View | 2            |
            | level 1                 | tarjetas                                                   | string           | Page View | 2            |
            | level 2                 | credito                                                    | string           | Page View | 2            |
            | level 3                 | pagar con puntos                                           | string           | Page View | 2            |
            | level 4                 | faq                                                        | string           | Page View | 2            |
            | language                | ES                                                         | string           | Page View | 2            |
            | page area               | privada                                                    | string           | Page View | 2            |
            | page intent             | transaccion                                                | string           | Page View | 2            |
            | channel                 | online                                                     | string           | Page View | 2            |
            | page instance ID        | de                                                         | string           | Page View | 2            |
            | page info version       | appVersion                                                 | regexp named     | Page View | 2            |
            | page segment            | personas                                                   | string           | Page View | 2            |
            | sysEnv                  | app                                                        | string           | Page View | 2            |
            | business unit           | BBVA Mexico                                                | string           | Page View | 2            |
            | site app name           | App BBVA Mexico                                            | string           | Page View | 2            |
            | project name            | Rewards                                                    | string           | Page View | 2            |
            | device mobile           | si                                                         | string           | Page View | 2            |
            | user userState          | logado                                                     | string           | Page View | 2            |
            | user segment global     | 003001                                                     | string           | Page View | 2            |
            | profile ID              | profileID                                                  | regexp named     | Page View | 2            |
            | internal campaign       |                                                            | empty array      | Page View | 2            |
            | optimization attributes |                                                            | empty array      | Page View | 2            |
            | application             |                                                            | empty str object | Page View | 2            |
            | products attributes     |                                                            | empty array      | Page View | 2            |

    @ANA_PFTA003
    @analytics
    @web @ios @android @vbank
    @backend(test) @MX @web-done
    Scenario: Footprint - Page View - faqs - que significa pagar mis compras con puntos
        Given a user with the following criteria
            | criteria                  |
            | card with transactions    |
            | target audience purchases |
        And the user accesses to movement detail from a "card with points" within Product detail
        And the analytics interceptor service is initiated
        And the user goes to Pay with Points
        And the user accesses to faq questions page
        When the user accesses to some question
        Then the analytics events contains the following variables
            | item                    | value                                                                                                 | type             | event     | event number |
            | analytics               | analytics/glomo_base                                                                                  | json schema      | Page View | 3            |
            | version DL              | 20250414_5.0                                                                                          | string           | Page View | 3            |
            | page name               | app:privada:personas:tarjetas:credito:pagar con puntos:faq:que significa pagar mis compras con puntos | string           | Page View | 3            |
            | level 1                 | tarjetas                                                                                              | string           | Page View | 3            |
            | level 2                 | credito                                                                                               | string           | Page View | 3            |
            | level 3                 | pagar con puntos                                                                                      | string           | Page View | 3            |
            | level 4                 | faq                                                                                                   | string           | Page View | 3            |
            | level 5                 | que significa pagar mis compras con puntos                                                            | string           | Page View | 3            |
            | language                | ES                                                                                                    | string           | Page View | 3            |
            | page area               | privada                                                                                               | string           | Page View | 3            |
            | page intent             | transaccion                                                                                           | string           | Page View | 3            |
            | channel                 | online                                                                                                | string           | Page View | 3            |
            | page instance ID        | de                                                                                                    | string           | Page View | 3            |
            | page info version       | appVersion                                                                                            | regexp named     | Page View | 3            |
            | page segment            | personas                                                                                              | string           | Page View | 3            |
            | sysEnv                  | app                                                                                                   | string           | Page View | 3            |
            | business unit           | BBVA Mexico                                                                                           | string           | Page View | 3            |
            | site app name           | App BBVA Mexico                                                                                       | string           | Page View | 3            |
            | project name            | Rewards                                                                                               | string           | Page View | 3            |
            | device mobile           | si                                                                                                    | string           | Page View | 3            |
            | user userState          | logado                                                                                                | string           | Page View | 3            |
            | user segment global     | 003001                                                                                                | string           | Page View | 3            |
            | profile ID              | profileID                                                                                             | regexp named     | Page View | 3            |
            | internal campaign       |                                                                                                       | empty array      | Page View | 3            |
            | optimization attributes |                                                                                                       | empty array      | Page View | 3            |
            | application             |                                                                                                       | empty str object | Page View | 3            |
            | products attributes     |                                                                                                       | empty array      | Page View | 3            |

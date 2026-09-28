@trackingTdcAnalytics
Feature: Analytics - Tracking TDC

    @ANA_EVENT_TRT001 @vbank
    @analytics
    @MX
    @backend(test)
    @web-done
    @web @android @ios
    Scenario: the user access Track my card with <user>
        Given a user with the following criteria
            | criteria               |
            | credit card in transit |
            | delivered              |
        And the user accesses to the "operative" "credit" card product detail
        And the analytics interceptor service is initiated
        When the user access Track my card
        Then the analytics events contains the following variables:
            | item                    | value                                                                        | type             | event     |
            | analytics               | analytics/glomo_base                                                         | json schema      | Page View |
            | page name               | app:privada:personas:tarjetas:tracking tdc                                   | string           | Page View |
            | level 1                 | tarjetas                                                                     | string           | Page View |
            | level 2                 | tracking tdc                                                                 | string           | Page View |
            | language                | ES                                                                           | string           | Page View |
            | page area               | privada                                                                      | string           | Page View |
            | page intent             | informacion                                                                  | string           | Page View |
            | channel                 | online                                                                       | string           | Page View |
            | page instance ID        | de                                                                           | string           | Page View |
            | version DL              | 20250414_5.0                                                                 | string           | Page View |
            | page segment            | personas                                                                     | string           | Page View |
            | sysEnv                  | app                                                                          | string           | Page View |
            | business unit           | BBVA Mexico                                                                  | string           | Page View |
            | site app name           | App BBVA Mexico                                                              | string           | Page View |
            | project name            | Glomo                                                                        | string           | Page View |
            | device mobile           | si                                                                           | string           | Page View |
            | user userState          | logado                                                                       | string           | Page View |
            | profile ID              | profileID                                                                    | regexp named     | Page View |
            | user segment global     | 003001                                                                       | string           | Page View |

    @ANA_EVENT_TRT002 @vbank
    @analytics
    @MX
    @backend(test)
    @web-done
    @web @android @ios
    Scenario: the user access Track my late delivery card with <user>
        Given a user with the following criteria
            | criteria               |
            | credit card in transit |
            | error sent credit card |
        And the user accesses to the "operative" "credit" card product detail
        And the analytics interceptor service is initiated
        When the user access Track my card
        Then the analytics events contains the following variables:
            | item                    | value                                                                        | type             | event     |
            | analytics               | analytics/glomo_base                                                         | json schema      | Page View |
            | page name               | app:privada:personas:tarjetas:tracking tdc:error tracking                    | string           | Page View |
            | level 1                 | tarjetas                                                                     | string           | Page View |
            | level 2                 | tracking tdc                                                                 | string           | Page View |
            | level 3                 | error tracking                                                               | string           | Page View |
            | error page              | error tracking                                                               | string           | Page View |
            | language                | ES                                                                           | string           | Page View |
            | page area               | privada                                                                      | string           | Page View |
            | page intent             | informacion                                                                  | string           | Page View |
            | channel                 | online                                                                       | string           | Page View |
            | page instance ID        | de                                                                           | string           | Page View |
            | version DL              | 20250414_5.0                                                                 | string           | Page View |
            | page segment            | personas                                                                     | string           | Page View |
            | sysEnv                  | app                                                                          | string           | Page View |
            | business unit           | BBVA Mexico                                                                  | string           | Page View |
            | site app name           | App BBVA Mexico                                                              | string           | Page View |
            | project name            | Glomo                                                                        | string           | Page View |
            | device mobile           | si                                                                           | string           | Page View |
            | user userState          | logado                                                                       | string           | Page View |
            | profile ID              | profileID                                                                    | regexp named     | Page View |
            | user segment global     | 003001                                                                       | string           | Page View |

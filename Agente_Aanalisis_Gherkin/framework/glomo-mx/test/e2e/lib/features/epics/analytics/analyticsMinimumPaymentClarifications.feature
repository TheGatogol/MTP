@analyticsMinimumPaymentClarifications
Feature: Analytics - Minimum Payment Clarifications

    @ANA_EVENT_MPC001
    @analytics
    @web @android @ios
    @MX
    @vbank
    @web-done
    @backend(test)
    Scenario: Access <user> dashboard - Internal Link
        Given a user with the following criteria
            | criteria                   |
            | credit card with interests |
        When the user accesses to the "operative" "credit" card product detail
        And the analytics interceptor service is initiated
        And the user accesses the minimum payment clarifications
        Then the analytics events contains the following variables
            | item                | value                                         | type         | event         | event number |
            | analytics           | analytics/glomo_base                          | json schema  | Internal Link | 1            |
            | version dl          | 20250414_5.0                                  | string       | Internal Link | 1            |
            | page name           | app:privada:personas:tarjetas:credito:detalle | string       | Internal Link | 1            |
            | level 1             | tarjetas                                      | string       | Internal Link | 1            |
            | level 2             | credito                                       | string       | Internal Link | 1            |
            | level 3             | detalle                                       | string       | Internal Link | 1            |
            | language            | ES                                            | string       | Internal Link | 1            |
            | page area           | privada                                       | string       | Internal Link | 1            |
            | page intent         | informacion                                   | string       | Internal Link | 1            |
            | channel             | online                                        | string       | Internal Link | 1            |
            | page instance ID    | de                                            | string       | Internal Link | 1            |
            | page info version   | appVersion                                    | regexp named | Internal Link | 1            |
            | page segment        | personas                                      | string       | Internal Link | 1            |
            | sysEnv              | app                                           | string       | Internal Link | 1            |
            | business unit       | BBVA Mexico                                   | string       | Internal Link | 1            |
            | site app name       | App BBVA Mexico                               | string       | Internal Link | 1            |
            | project name        | Glomo                                         | string       | Internal Link | 1            |
            | device mobile       | si                                            | string       | Internal Link | 1            |
            | user userState      | logado                                        | string       | Internal Link | 1            |
            | user segment global | 003001                                        | string       | Internal Link | 1            |
            | profile ID          | profileID                                     | regexp named | Internal Link | 1            |
            | user gender         | gender                                        | regexp named | Internal Link | 1            |
            | user age            | age                                           | regexp named | Internal Link | 1            |
            | link name           | detalle de este pago al corte                 | string       | Internal Link | 1            |

    @ANA_EVENT_MPC002
    @analytics
    @web @android @ios
    @MX
    @vbank
    @web-done
    @backend(test)
    Scenario: Show "Dashboard" - Page View
        Given a user with the following criteria
            | criteria                   |
            | credit card with interests |
        When the user accesses to the "operative" "credit" card product detail
        And the analytics interceptor service is initiated
        And the user accesses the minimum payment clarifications
        Then the analytics events contains the following variables
            | item                | value                                                           | type         | event     |
            | analytics           | analytics/glomo_base                                            | json schema  | Page View |
            | version dl          | 20250414_5.0                                                    | string       | Page View |
            | page name           | app:privada:personas:tarjetas:credito:detalle pagos con tarjeta | string       | Page View |
            | level 1             | tarjetas                                                        | string       | Page View |
            | level 2             | credito                                                         | string       | Page View |
            | level 3             | detalle pagos con tarjeta                                       | string       | Page View |
            | language            | ES                                                              | string       | Page View |
            | page area           | privada                                                         | string       | Page View |
            | page intent         | informacion                                                     | string       | Page View |
            | channel             | online                                                          | string       | Page View |
            | page instance ID    | de                                                              | string       | Page View |
            | page info version   | appVersion                                                      | regexp named | Page View |
            | page segment        | personas                                                        | string       | Page View |
            | sysEnv              | app                                                             | string       | Page View |
            | business unit       | BBVA Mexico                                                     | string       | Page View |
            | site app name       | App BBVA Mexico                                                 | string       | Page View |
            | project name        | Glomo                                                           | string       | Page View |
            | device mobile       | si                                                              | string       | Page View |
            | user userState      | logado                                                          | string       | Page View |
            | user segment global | 003001                                                          | string       | Page View |
            | profile ID          | profileID                                                       | regexp named | Page View |
            | user gender         | gender                                                          | regexp named | Page View |
            | user age            | age                                                             | regexp named | Page View |

@analyticsEnrichedMovementsDetail
Feature: Analytics - Enriched Movements Detail

    @ANA_EVENT_MED001
    @analytics
    @MX
    @web @ios @android
    @backend(test) @vbank
    @web-done
    Scenario: View details of credit card transactions - Page View
        Given a user with the following criteria
            | criteria                               |
            | credit card with enrichments movements |
        And the user accesses to the "operative" "credit" card product detail
        And the analytics interceptor service is initiated
        When the user selects a "purchase transaction" movement in "credit" transaction
        Then the analytics events contains the following variables:
            | item                 | value                                                               | type         | event     |
            | analytics            | analytics/glomo_base                                                | json schema  | Page View |
            | version DL           | 20250414_5.0                                                        | string       | Page View |
            | page name            | app:privada:personas:tarjetas:credito:detalle:detalle de movimiento | string       | Page View |
            | level 1              | tarjetas                                                            | string       | Page View |
            | level 2              | credito                                                             | string       | Page View |
            | level 3              | detalle                                                             | string       | Page View |
            | level 4              | detalle de movimiento                                               | string       | Page View |
            | language             | ES                                                                  | string       | Page View |
            | page area            | privada                                                             | string       | Page View |
            | page intent          | informacion                                                         | string       | Page View |
            | channel              | online                                                              | string       | Page View |
            | page info version    | appVersion                                                          | regexp named | Page View |
            | page segment         | personas                                                            | string       | Page View |
            | sysEnv               | app                                                                 | string       | Page View |
            | business unit        | BBVA Mexico                                                         | string       | Page View |
            | site app name        | App BBVA Mexico                                                     | string       | Page View |
            | project name         | Glomo                                                               | string       | Page View |
            | device mobile        | si                                                                  | string       | Page View |
            | user userState       | logado                                                              | string       | Page View |
            | profile ID           | profileID                                                           | regexp named | Page View |
            | user segment global  | 003001                                                              | string       | Page View |
            | user gender          | gender                                                              | regexp named | Page View |
            | user age             | age                                                                 | regexp named | Page View |
            | user segment profile | compra                                                              | string       | Page View |

    @ANA_EVENT_MED002
    @analytics
    @MX
    @web @ios @android
    @backend(test) @vbank
    @web-done
    Scenario: Access to pay with points from the transaction details - Internal Link
        Given a user with the following criteria
            | criteria                               |
            | credit card with enrichments movements |
        And the user accesses to the "operative" "credit" card product detail
        And the user selects a "purchase transaction" movement in "credit" transaction
        And the analytics interceptor service is initiated
        When the user goes to Pay with Points
        Then the analytics events contains the following variables:
            | item                | value                                                               | type         | event         |
            | analytics           | analytics/glomo_base                                                | json schema  | Internal Link |
            | version DL          | 20250414_5.0                                                        | string       | Internal Link |
            | page name           | app:privada:personas:tarjetas:credito:detalle:detalle de movimiento | string       | Internal Link |
            | level 1             | tarjetas                                                            | string       | Internal Link |
            | level 2             | credito                                                             | string       | Internal Link |
            | level 3             | detalle                                                             | string       | Internal Link |
            | level 4             | detalle de movimiento                                               | string       | Internal Link |
            | language            | ES                                                                  | string       | Internal Link |
            | page area           | privada                                                             | string       | Internal Link |
            | page intent         | informacion                                                         | string       | Internal Link |
            | channel             | online                                                              | string       | Internal Link |
            | page info version   | appVersion                                                          | regexp named | Internal Link |
            | page segment        | personas                                                            | string       | Internal Link |
            | sysEnv              | app                                                                 | string       | Internal Link |
            | business unit       | BBVA Mexico                                                         | string       | Internal Link |
            | site app name       | App BBVA Mexico                                                     | string       | Internal Link |
            | project name        | Glomo                                                               | string       | Internal Link |
            | device mobile       | si                                                                  | string       | Internal Link |
            | user userState      | logado                                                              | string       | Internal Link |
            | profile ID          | profileID                                                           | regexp named | Internal Link |
            | user segment global | 003001                                                              | string       | Internal Link |

    @ANA_EVENT_MED003
    @analytics
    @MX
    @web @ios @android
    @backend(test) @vbank
    @web-done
    Scenario: Access to report movement from the transaction details - Internal Link
        Given a user with the following criteria
            | criteria                               |
            | credit card with enrichments movements |
        And the user accesses to the "operative" "credit" card product detail
        And the user selects a "purchase transaction" movement in "credit" transaction
        And the analytics interceptor service is initiated
        When the user goes to clarification care
        Then the analytics events contains the following variables:
            | item                | value                                                               | type         | event         |
            | version DL          | 20250414_5.0                                                        | string       | Internal Link |
            | page name           | app:privada:personas:tarjetas:credito:detalle:detalle de movimiento | string       | Internal Link |
            | level 1             | tarjetas                                                            | string       | Internal Link |
            | level 2             | credito                                                             | string       | Internal Link |
            | level 3             | detalle                                                             | string       | Internal Link |
            | level 4             | detalle de movimiento                                               | string       | Internal Link |
            | language            | ES                                                                  | string       | Internal Link |
            | page area           | privada                                                             | string       | Internal Link |
            | page intent         | informacion                                                         | string       | Internal Link |
            | channel             | online                                                              | string       | Internal Link |
            | page info version   | appVersion                                                          | regexp named | Internal Link |
            | page segment        | personas                                                            | string       | Internal Link |
            | sysEnv              | app                                                                 | string       | Internal Link |
            | business unit       | BBVA Mexico                                                         | string       | Internal Link |
            | site app name       | App BBVA Mexico                                                     | string       | Internal Link |
            | project name        | Glomo                                                               | string       | Internal Link |
            | device mobile       | si                                                                  | string       | Internal Link |
            | user userState      | logado                                                              | string       | Internal Link |
            | profile ID          | profileID                                                           | regexp named | Internal Link |
            | user segment global | 003001                                                              | string       | Internal Link |

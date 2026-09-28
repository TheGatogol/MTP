@analyticsEnrichedMovementsList
Feature: Analytics - Enriched Movements List

    @ANA_EVENT_MEL001
    @analytics
    @MX
    @web @ios @android
    @backend(test) @vbank
    @web-done
    Scenario: The user accesses the complete list of transactions - Page View
        Given a user with the following criteria
            | criteria                               |
            | credit card with enrichments movements |
        And the user accesses to the "operative" "credit" card product detail
        And the analytics interceptor service is initiated
        When the user accesses to all movements
        Then the analytics events contains the following variables:
            | item                | value                                                     | type         | event     |
            | analytics           | analytics/glomo_base                                      | json schema  | Page View |
            | version DL          | 20250414_5.0                                              | string       | Page View |
            | page name           | app:privada:personas:tarjetas:credito:detalle:movimientos | string       | Page View |
            | level 1             | tarjetas                                                  | string       | Page View |
            | level 2             | credito                                                   | string       | Page View |
            | level 3             | detalle                                                   | string       | Page View |
            | level 4             | movimientos                                               | string       | Page View |
            | language            | ES                                                        | string       | Page View |
            | page area           | privada                                                   | string       | Page View |
            | page intent         | informacion                                               | string       | Page View |
            | channel             | online                                                    | string       | Page View |
            | page info version   | appVersion                                                | regexp named | Page View |
            | page segment        | personas                                                  | string       | Page View |
            | sysEnv              | app                                                       | string       | Page View |
            | business unit       | BBVA Mexico                                               | string       | Page View |
            | site app name       | App BBVA Mexico                                           | string       | Page View |
            | project name        | Glomo                                                     | string       | Page View |
            | device mobile       | si                                                        | string       | Page View |
            | user userState      | logado                                                    | string       | Page View |
            | profile ID          | profileID                                                 | regexp named | Page View |
            | user segment global | 003001                                                    | string       | Page View |

    @ANA_EVENT_MEL002
    @analytics
    @MX
    @web @ios @android
    @backend(test) @vbank
    @web-done
    Scenario: The user accesses the preview list with transactions - Page View
        Given a user with the following criteria
            | criteria                               |
            | credit card with enrichments movements |
        And the user accesses to dashboard
        And the analytics interceptor service is initiated
        When the user accesses to the "operative" "credit" card product detail
        Then the analytics events contains the following variables:
            | item                 | value                                         | type         | event     | event number |
            | analytics            | analytics/glomo_base                          | json schema  | Page View | 3            |
            | version DL           | 20250414_5.0                                  | string       | Page View | 3            |
            | page area            | privada                                       | string       | Page View | 3            |
            | business unit        | BBVA Mexico                                   | string       | Page View | 3            |
            | channel              | online                                        | string       | Page View | 3            |
            | language             | ES                                            | string       | Page View | 3            |
            | level 1              | tarjetas                                      | string       | Page View | 3            |
            | level 2              | credito                                       | string       | Page View | 3            |
            | level 3              | detalle                                       | string       | Page View | 3            |
            | page intent          | informacion                                   | string       | Page View | 3            |
            | page name            | app:privada:personas:tarjetas:credito:detalle | string       | Page View | 3            |
            | page segment         | personas                                      | string       | Page View | 3            |
            | project name         | Glomo                                         | string       | Page View | 3            |
            | site app name        | App BBVA Mexico                               | string       | Page View | 3            |
            | sysEnv               | app                                           | string       | Page View | 3            |
            | user age             | age                                           | regexp named | Page View | 3            |
            | device mobile        | si                                            | string       | Page View | 3            |
            | user gender          | gender                                        | regexp named | Page View | 3            |
            | profile ID           | profileID                                     | regexp named | Page View | 3            |
            | user segment global  | 003001                                        | string       | Page View | 3            |
            | user userState       | logado                                        | string       | Page View | 3            |
            | user segment profile | con movimientos                               | string       | Page View | 3            |

    @ANA_EVENT_MEL003
    @analytics
    @MX
    @web @ios @android
    @backend(test) @vbank
    @web-done
    Scenario: The user accesses the preview list without transactions - Page View
        Given a user with the following criteria
            | criteria                                  |
            | credit card without enrichments movements |
        And the user accesses to dashboard
        And the analytics interceptor service is initiated
        When the user accesses to the "operative" "credit" card product detail
        Then the analytics events contains the following variables:
            | item                 | value                                         | type         | event     | event number |
            | analytics            | analytics/glomo_base                          | json schema  | Page View | 3            |
            | version DL           | 20250414_5.0                                  | string       | Page View | 3            |
            | page area            | privada                                       | string       | Page View | 3            |
            | business unit        | BBVA Mexico                                   | string       | Page View | 3            |
            | channel              | online                                        | string       | Page View | 3            |
            | language             | ES                                            | string       | Page View | 3            |
            | level 1              | tarjetas                                      | string       | Page View | 3            |
            | level 2              | credito                                       | string       | Page View | 3            |
            | level 3              | detalle                                       | string       | Page View | 3            |
            | page intent          | informacion                                   | string       | Page View | 3            |
            | page name            | app:privada:personas:tarjetas:credito:detalle | string       | Page View | 3            |
            | page segment         | personas                                      | string       | Page View | 3            |
            | project name         | Glomo                                         | string       | Page View | 3            |
            | site app name        | App BBVA Mexico                               | string       | Page View | 3            |
            | sysEnv               | app                                           | string       | Page View | 3            |
            | user age             | age                                           | regexp named | Page View | 3            |
            | device mobile        | si                                            | string       | Page View | 3            |
            | user gender          | gender                                        | regexp named | Page View | 3            |
            | profile ID           | profileID                                     | regexp named | Page View | 3            |
            | user segment global  | 003001                                        | string       | Page View | 3            |
            | user userState       | logado                                        | string       | Page View | 3            |
            | user segment profile | sin movimientos                               | string       | Page View | 3            |

    @ANA_EVENT_MEL004
    @analytics
    @MX
    @web @ios @android
    @backend(test) @vbank
    @web-done
    Scenario: The user accesses the preview list with an error - Page View
        Given a user with the following criteria
            | criteria                               |
            | credit card with enrichments movements |
        And the user accesses to dashboard
        And the analytics interceptor service is initiated
        When the user accesses to the "operative" "credit" card product detail
        Then the analytics events contains the following variables:
            | item                | value                                         | type         | event     | event number |
            | analytics           | analytics/glomo_base                          | json schema  | Page View | 3            |
            | version DL          | 20250414_5.0                                  | string       | Page View | 3            |
            | page area           | privada                                       | string       | Page View | 3            |
            | business unit       | BBVA Mexico                                   | string       | Page View | 3            |
            | channel             | online                                        | string       | Page View | 3            |
            | language            | ES                                            | string       | Page View | 3            |
            | level 1             | tarjetas                                      | string       | Page View | 3            |
            | level 2             | credito                                       | string       | Page View | 3            |
            | level 3             | detalle                                       | string       | Page View | 3            |
            | page intent         | informacion                                   | string       | Page View | 3            |
            | page name           | app:privada:personas:tarjetas:credito:detalle | string       | Page View | 3            |
            | page segment        | personas                                      | string       | Page View | 3            |
            | project name        | Glomo                                         | string       | Page View | 3            |
            | site app name       | App BBVA Mexico                               | string       | Page View | 3            |
            | sysEnv              | app                                           | string       | Page View | 3            |
            | user age            | age                                           | regexp named | Page View | 3            |
            | device mobile       | si                                            | string       | Page View | 3            |
            | user gender         | gender                                        | regexp named | Page View | 3            |
            | profile ID          | profileID                                     | regexp named | Page View | 3            |
            | user segment global | 003001                                        | string       | Page View | 3            |
            | user userState      | logado                                        | string       | Page View | 3            |

    @ANA_EVENT_MEL005
    @analytics
    @MX
    @web @ios @android
    @backend(test) @vbank
    @web-done
    Scenario: The user filters the transactions by date - Interaction link
        Given a user with the following criteria
            | criteria                               |
            | credit card with enrichments movements |
        And the user accesses to the "operative" "credit" card product detail
        And the user selects the categories
        And the analytics interceptor service is initiated
        When the user selects the date filter
        Then the analytics events contains the following variables:
            | item                | value                                         | type         | event            |
            | analytics           | analytics/glomo_base                          | json schema  | Interaction Link |
            | version DL          | 20250414_5.0                                  | string       | Interaction Link |
            | page name           | app:privada:personas:tarjetas:credito:detalle | string       | Interaction Link |
            | level 1             | tarjetas                                      | string       | Interaction Link |
            | level 2             | credito                                       | string       | Interaction Link |
            | level 3             | detalle                                       | string       | Interaction Link |
            | language            | ES                                            | string       | Interaction Link |
            | page area           | privada                                       | string       | Interaction Link |
            | page intent         | informacion                                   | string       | Interaction Link |
            | channel             | online                                        | string       | Interaction Link |
            | page segment        | personas                                      | string       | Interaction Link |
            | sysEnv              | app                                           | string       | Interaction Link |
            | business unit       | BBVA Mexico                                   | string       | Interaction Link |
            | site app name       | App BBVA Mexico                               | string       | Interaction Link |
            | project name        | Glomo                                         | string       | Interaction Link |
            | device mobile       | si                                            | string       | Interaction Link |
            | user userState      | logado                                        | string       | Interaction Link |
            | profile ID          | profileID                                     | regexp named | Interaction Link |
            | user segment global | 003001                                        | string       | Interaction Link |

    @ANA_EVENT_MEL006
    @analytics
    @MX
    @web @ios @android
    @backend(test) @vbank
    @web-done
    Scenario: The user filters the transactions by category - Interaction link
        Given a user with the following criteria
            | criteria                               |
            | credit card with enrichments movements |
        And the user accesses to dashboard
        And the user accesses to the "operative" "credit" card product detail
        And the analytics interceptor service is initiated
        When the user selects the categories
        Then the analytics events contains the following variables:
            | item                | value                                         | type         | event            |
            | analytics           | analytics/glomo_base                          | json schema  | Interaction Link |
            | version DL          | 20250414_5.0                                  | string       | Interaction Link |
            | page name           | app:privada:personas:tarjetas:credito:detalle | string       | Interaction Link |
            | level 1             | tarjetas                                      | string       | Interaction Link |
            | level 2             | credito                                       | string       | Interaction Link |
            | level 3             | detalle                                       | string       | Interaction Link |
            | language            | ES                                            | string       | Interaction Link |
            | page area           | privada                                       | string       | Interaction Link |
            | page intent         | informacion                                   | string       | Interaction Link |
            | channel             | online                                        | string       | Interaction Link |
            | page segment        | personas                                      | string       | Interaction Link |
            | sysEnv              | app                                           | string       | Interaction Link |
            | business unit       | BBVA Mexico                                   | string       | Interaction Link |
            | site app name       | App BBVA Mexico                               | string       | Interaction Link |
            | project name        | Glomo                                         | string       | Interaction Link |
            | device mobile       | si                                            | string       | Interaction Link |
            | user userState      | logado                                        | string       | Interaction Link |
            | profile ID          | profileID                                     | regexp named | Interaction Link |
            | user segment global | 003001                                        | string       | Interaction Link |

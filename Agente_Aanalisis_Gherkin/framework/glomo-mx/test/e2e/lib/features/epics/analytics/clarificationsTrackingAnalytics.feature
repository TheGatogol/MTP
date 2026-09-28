@clarificationTrackingCareAnalytics
Feature: Analytics - Clarifications Tracking

    @ANA_CT001
    @analytics
    @web @android @ios
    @vbank @backend(test)
    @MX
    @web-done
    Scenario: Clarifications List In Process - Page View
        Given a user with the following criteria
            | criteria                               |
            | clarifications management list care    |
            | clarifications management tracking     |
        And the user accesses to dashboard
        When the user accesses to "clarifications" item located in the sidebar
        Then the device contains the following variables
            | item                     | value                                         | type         |
            | analytics                | analytics/glomo_base                          | json schema  |
            | version DL               | 20250414_5.0                                  | string       |
            | page name                | app:privada:personas:aclaraciones:en proceso  | string       |
            | level 1                  | aclaraciones                                  | string       |
            | level 2                  | en proceso                                    | string       |
            | language                 | ES                                            | string       |
            | page area                | privada                                       | string       |
            | page intent              | informacion                                   | string       |
            | channel                  | online                                        | string       |
            | page instance ID         | de                                            | string       |
            | page info version        | appVersion                                    | regexp named |
            | page segment             | personas                                      | string       |
            | sysEnv                   | app                                           | string       |
            | business unit            | BBVA Mexico                                   | string       |
            | site app name            | App BBVA Mexico                               | string       |
            | project name             | Glomo                                         | string       |
            | device mobile            | si                                            | string       |
            | user userState           | logado                                        | string       |
            | user segment global      | 003001                                        | string       |

    @ANA_CT002
    @analytics
    @web @android @ios
    @vbank @backend(test)
    @MX
    @web-done
    Scenario: Clarifications List Closed - Page View
        Given a user with the following criteria
            | criteria                               |
            | clarifications management list care    |
            | clarifications management tracking     |
        And the user accesses to dashboard
        And the user accesses to clarifications list
        When the user select clarification closed
        Then the device contains the following variables
            | item                     | value                                         | type         |
            | analytics                | analytics/glomo_base                          | json schema  |
            | version DL               | 20250414_5.0                                  | string       |
            | page name                | app:privada:personas:aclaraciones:terminadas  | string       |
            | level 1                  | aclaraciones                                  | string       |
            | level 2                  | terminadas                                    | string       |
            | language                 | ES                                            | string       |
            | page area                | privada                                       | string       |
            | page intent              | informacion                                   | string       |
            | channel                  | online                                        | string       |
            | page instance ID         | de                                            | string       |
            | page info version        | appVersion                                    | regexp named |
            | page segment             | personas                                      | string       |
            | sysEnv                   | app                                           | string       |
            | business unit            | BBVA Mexico                                   | string       |
            | site app name            | App BBVA Mexico                               | string       |
            | project name             | Glomo                                         | string       |
            | device mobile            | si                                            | string       |
            | user userState           | logado                                        | string       |
            | user segment global      | 003001                                        | string       |

    @ANA_CT003
    @analytics
    @web @android @ios
    @vbank @backend(test)
    @MX
    @web-done
    Scenario: Clarifications Tracking In Process Case - Page View
        Given a user with the following criteria
            | criteria                               |
            | clarifications management list care    |
            | clarifications management tracking     |
        And the user accesses to dashboard
        And the user accesses to clarifications list
        When the user select to one "en proceso" clarifications
        Then the device contains the following variables
            | item                     | value                                         | type         |
            | analytics                | analytics/glomo_base                          | json schema  |
            | version DL               | 20250414_5.0                                  | string       |
            | page name                | app:privada:personas:aclaraciones:detalle     | string       |
            | level 1                  | aclaraciones                                  | string       |
            | level 2                  | detalle                                       | string       |
            | language                 | ES                                            | string       |
            | page area                | privada                                       | string       |
            | page intent              | informacion                                   | string       |
            | channel                  | online                                        | string       |
            | page instance ID         | de                                            | string       |
            | page info version        | appVersion                                    | regexp named |
            | page segment             | personas                                      | string       |
            | sysEnv                   | app                                           | string       |
            | business unit            | BBVA Mexico                                   | string       |
            | site app name            | App BBVA Mexico                               | string       |
            | project name             | Glomo                                         | string       |
            | device mobile            | si                                            | string       |
            | user userState           | logado                                        | string       |
            | user segment global      | 003001                                        | string       |

    @ANA_CT004
    @analytics
    @web @android @ios
    @vbank @backend(test)
    @MX
    @web-done
    Scenario: Clarifications Tracking Closed - Page View
        Given a user with the following criteria
            | criteria                               |
            | clarifications management list care    |
            | clarifications management tracking     |
        And the user accesses to dashboard
        And the user accesses to clarifications list
        When the user select to one "terminadas" clarifications
        Then the device contains the following variables
            | item                     | value                                         | type         |
            | analytics                | analytics/glomo_base                          | json schema  |
            | version DL               | 20250414_5.0                                  | string       |
            | page name                | app:privada:personas:aclaraciones:detalle     | string       |
            | level 1                  | aclaraciones                                  | string       |
            | level 2                  | detalle                                       | string       |
            | language                 | ES                                            | string       |
            | page area                | privada                                       | string       |
            | page intent              | informacion                                   | string       |
            | channel                  | online                                        | string       |
            | page instance ID         | de                                            | string       |
            | page info version        | appVersion                                    | regexp named |
            | page segment             | personas                                      | string       |
            | sysEnv                   | app                                           | string       |
            | business unit            | BBVA Mexico                                   | string       |
            | site app name            | App BBVA Mexico                               | string       |
            | project name             | Glomo                                         | string       |
            | device mobile            | si                                            | string       |
            | user userState           | logado                                        | string       |
            | user segment global      | 003001                                        | string       |

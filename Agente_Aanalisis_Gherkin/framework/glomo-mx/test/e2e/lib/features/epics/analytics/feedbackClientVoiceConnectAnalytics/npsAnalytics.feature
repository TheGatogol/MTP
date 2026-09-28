@feedbackClientVoiceConnectAnalytics @analyticsNPS
Feature: Analytics - client voice connect - NPS

    @ANA_EVENT_NPS001
    @analytics
    @vbank @backend(test) @MX
    @ios @android @web
    @web-done
    Scenario: NPS ANALYTICS PAGE VIEW - Successful showing nps from dashboard
        Given a user with the following criteria
            | criteria        |
            | active          |
        When the user open the nps data form
        Then the device contains the following variables
            | item                    | value                                                     | type             |
            | analytics               | analytics/glomo_base                                      | json schema      |
            | version DL              | 20250414_5.0                                              | string           |
            | page name               | app:privada:personas:nps login:0 npsform:helpmodalpreform | string           |
            | level 1                 | nps login                                                 | string           |
            | level 2                 | 0 npsform                                                 | string           |
            | level 3                 | helpmodalpreform                                          | string           |
            | language                | ES                                                        | string           |
            | page area               | privada                                                   | string           |
            | page intent             | informacion                                               | string           |
            | channel                 | online                                                    | string           |
            | page instance ID        | de                                                        | string           |
            | page info version       | appVersion                                                | regexp named     |
            | page segment            | personas                                                  | string           |
            | sysEnv                  | app                                                       | string           |
            | business unit           | BBVA Mexico                                               | string           |
            | site app name           | App BBVA Mexico                                           | string           |
            | project name            | Glomo                                                     | string           |
            | device mobile           | si                                                        | string           |
            | user userState          | logado                                                    | string           |
            | user segment global     | 003001                                                    | string           |
            | profile ID              | profileID                                                 | regexp named     |
            | user gender             | gender                                                    | regexp named     |
            | user age                | age                                                       | regexp named     |
            | internal campaign       |                                                           | empty array      |
            | optimization attributes |                                                           | empty array      |
            | application             |                                                           | empty str object |
            | products attributes     |                                                           | empty array      |

    @ANA_EVENT_NPS002
    @analytics
    @vbank @backend(test) @MX
    @ios @android @web
    @web-done
    Scenario: NPS ANALYTICS PAGE VIEW - page 2 navigation
        Given a user with the following criteria
            | criteria        |
            | active          |
        When the user open the nps data form
        And the user rate app
        Then the device contains the following variables
            | item                    | value                                                      | type             |
            | analytics               | analytics/glomo_base                                       | json schema      |
            | version DL              | 20250414_5.0                                               | string           |
            | page name               | app:privada:personas:nps login:0 npsform:helpmodalmainform | string           |
            | level 1                 | nps login                                                  | string           |
            | level 2                 | 0 npsform                                                  | string           |
            | level 3                 | helpmodalmainform                                          | string           |
            | language                | ES                                                         | string           |
            | page area               | privada                                                    | string           |
            | page intent             | informacion                                                | string           |
            | channel                 | online                                                     | string           |
            | page instance ID        | de                                                         | string           |
            | page info version       | appVersion                                                 | regexp named     |
            | page segment            | personas                                                   | string           |
            | sysEnv                  | app                                                        | string           |
            | business unit           | BBVA Mexico                                                | string           |
            | site app name           | App BBVA Mexico                                            | string           |
            | project name            | Glomo                                                      | string           |
            | device mobile           | si                                                         | string           |
            | user userState          | logado                                                     | string           |
            | user segment global     | 003001                                                     | string           |
            | profile ID              | profileID                                                  | regexp named     |
            | user gender             | gender                                                     | regexp named     |
            | user age                | age                                                        | regexp named     |
            | internal campaign       |                                                            | empty array      |
            | optimization attributes |                                                            | empty array      |
            | application             |                                                            | empty str object |
            | products attributes     |                                                            | empty array      |

    @ANA_EVENT_NPS003
    @analytics
    @vbank @backend(test) @MX
    @ios @android @web
    @web-done
    Scenario: NPS ANALYTICS PAGE VIEW - form success
        Given a user with the following criteria
            | criteria        |
            | active          |
        When the user open the nps data form
        And the user rate app
        And the user comment form
        Then the device contains the following variables
            | item                    | value                                         | type             |
            | analytics               | analytics/glomo_base                          | json schema      |
            | version DL              | 20250414_5.0                                  | string           |
            | page name               | app:privada:personas:nps login:pagina exitosa | string           |
            | level 1                 | nps login                                     | string           |
            | level 2                 | pagina exitosa                                | string           |
            | language                | ES                                            | string           |
            | page area               | privada                                       | string           |
            | page intent             | informacion                                   | string           |
            | channel                 | online                                        | string           |
            | page instance ID        | de                                            | string           |
            | page info version       | appVersion                                    | regexp named     |
            | page segment            | personas                                      | string           |
            | sysEnv                  | app                                           | string           |
            | business unit           | BBVA Mexico                                   | string           |
            | site app name           | App BBVA Mexico                               | string           |
            | project name            | Glomo                                         | string           |
            | device mobile           | si                                            | string           |
            | user userState          | logado                                        | string           |
            | user segment global     | 003001                                        | string           |
            | profile ID              | profileID                                     | regexp named     |
            | user gender             | gender                                        | regexp named     |
            | user age                | age                                           | regexp named     |
            | internal campaign       |                                               | empty array      |
            | optimization attributes |                                               | empty array      |
            | application             |                                               | empty str object |
            | products attributes     |                                               | empty array      |

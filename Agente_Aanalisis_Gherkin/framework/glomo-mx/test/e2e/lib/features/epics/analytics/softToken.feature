@softTokenAnalytics
Feature: Analytics - softToken

    @ANA_STK001
    @analytics
    @backend(test) @vbank @MX
    @ios @android @web
    @manual @JIRA.GLOMOMX-261640
    Scenario: The user accesses the mobile token screen
        Given a user with the following criteria
            | criteria    |
            | ether token |
        When the user accesses the mobile token activation screen for the first time
        Then the device contains the following variables:
            | item                    | value                                      | type             |
            | version DL              | 20250414_5.0                               | string           |
            | page name               | app:publica:general:token movil:activacion | string           |
            | level 1                 | token movil                                | string           |
            | level 2                 | activacion                                 | string           |
            | language                | ES                                         | string           |
            | page area               | publica                                    | string           |
            | page intent             | informacion                                | string           |
            | channel                 | online                                     | string           |
            | page instance ID        | de                                         | string           |
            | page info version       | appVersion                                 | regexp named     |
            | page segment            | general                                    | string           |
            | sysEnv                  | app                                        | string           |
            | business unit           | BBVA Mexico                                | string           |
            | site app name           | App BBVA Mexico                            | string           |
            | project name            | Glomo                                      | string           |
            | device mobile           | si                                         | string           |
            | user userState          | no logado                                  | string           |
            | internal campaign       |                                            | empty array      |
            | optimization attributes |                                            | empty array      |
            | application             |                                            | empty str object |
            | products attributes     |                                            | empty array      |

    @ANA_STK002
    @analytics
    @backend(test) @vbank @MX
    @ios @android @web
    @manual @JIRA.GLOMOMX-261640
    Scenario: The user accesses the mobile token error screen
        Given a user with the following criteria
            | criteria          |
            | ether token error |
        And the user accesses the mobile token activation screen
        When the user activates their mobile token with an error
        Then the device contains the following variables:
            | item                    | value                                                   | type             |
            | version DL              | 20250414_5.0                                            | string           |
            | page name               | app:publica:general:token movil:activacion no realizada | string           |
            | level 1                 | token movil                                             | string           |
            | level 2                 | activacion no realizada                                 | string           |
            | language                | ES                                                      | string           |
            | page area               | publica                                                 | string           |
            | page intent             | informacion                                             | string           |
            | channel                 | online                                                  | string           |
            | page instance ID        | de                                                      | string           |
            | page info version       | appVersion                                              | regexp named     |
            | page segment            | general                                                 | string           |
            | sysEnv                  | app                                                     | string           |
            | business unit           | BBVA Mexico                                             | string           |
            | site app name           | App BBVA Mexico                                         | string           |
            | project name            | Glomo                                                   | string           |
            | device mobile           | si                                                      | string           |
            | user userState          | no logado                                               | string           |
            | internal campaign       |                                                         | empty array      |
            | optimization attributes |                                                         | empty array      |
            | application             |                                                         | empty str object |
            | products attributes     |                                                         | empty array      |

    @ANA_STK003
    @analytics
    @backend(test) @vbank @MX
    @ios @android @web
    @manual @JIRA.GLOMOMX-261640
    Scenario: The user accesses the mobile token success screen
        Given a user with the following criteria
            | criteria    |
            | ether token |
        And the user accesses the mobile token activation screen
        When the user activates their mobile token
        Then the device contains the following variables:
            | item                    | value                                                | type             |
            | version DL              | 20250414_5.0                                         | string           |
            | page name               | app:publica:general:token movil:activacion realizada | string           |
            | level 1                 | token movil                                          | string           |
            | level 2                 | activacion realizada                                 | string           |
            | language                | ES                                                   | string           |
            | page area               | publica                                              | string           |
            | page intent             | informacion                                          | string           |
            | channel                 | online                                               | string           |
            | page instance ID        | de                                                   | string           |
            | page info version       | appVersion                                           | regexp named     |
            | page segment            | general                                              | string           |
            | sysEnv                  | app                                                  | string           |
            | business unit           | BBVA Mexico                                          | string           |
            | site app name           | App BBVA Mexico                                      | string           |
            | project name            | Glomo                                                | string           |
            | device mobile           | si                                                   | string           |
            | user userState          | no logado                                            | string           |
            | internal campaign       |                                                      | empty array      |
            | optimization attributes |                                                      | empty array      |
            | application             |                                                      | empty str object |
            | products attributes     |                                                      | empty array      |

    @ANA_STK004
    @analytics
    @backend(test) @vbank @MX
    @ios @android @web
    @manual @JIRA.GLOMOMX-261640
    Scenario: The user accesses the mobile token error activation screen
        Given a user with the following criteria
            | criteria            |
            | ether token failure |
        And the user accesses the mobile token activation screen
        When the user activates their mobile token with an error
        Then the device contains the following variables:
            | item                    | value                                                         | type             |
            | version DL              | 20250414_5.0                                                  | string           |
            | page name               | app:publica:general:token movil:error activacion no realizada | string           |
            | level 1                 | token movil                                                   | string           |
            | level 2                 | error activacion no realizada                                 | string           |
            | language                | ES                                                            | string           |
            | page area               | publica                                                       | string           |
            | page intent             | informacion                                                   | string           |
            | channel                 | online                                                        | string           |
            | page instance ID        | de                                                            | string           |
            | page info version       | appVersion                                                    | regexp named     |
            | page segment            | general                                                       | string           |
            | sysEnv                  | app                                                           | string           |
            | business unit           | BBVA Mexico                                                   | string           |
            | site app name           | App BBVA Mexico                                               | string           |
            | project name            | Glomo                                                         | string           |
            | device mobile           | si                                                            | string           |
            | user userState          | no logado                                                     | string           |
            | internal campaign       |                                                               | empty array      |
            | optimization attributes |                                                               | empty array      |
            | application             |                                                               | empty str object |
            | products attributes     |                                                               | empty array      |
            | error page              | error activacion no realizada                                 | string           |

    @ANA_STK005
    @analytics
    @backend(test) @vbank @MX
    @ios @android @web
    @manual @JIRA.GLOMOMX-261640
    Scenario: The user accesses the mobile token with substitution failure screen
        Given a user with the following criteria
            | criteria           |
            | substitution token |
        And the user accesses the mobile token activation screen
        When the user activates their mobile token
        Then the device contains the following variables:
            | item                    | value                                                          | type             |
            | version DL              | 20250414_5.0                                                   | string           |
            | page name               | app:publica:general:token movil:error sustitucion no realizada | string           |
            | level 1                 | token movil                                                    | string           |
            | level 2                 | error sustitucion no realizada                                 | string           |
            | language                | ES                                                             | string           |
            | page area               | publica                                                        | string           |
            | page intent             | informacion                                                    | string           |
            | channel                 | online                                                         | string           |
            | page instance ID        | de                                                             | string           |
            | page info version       | appVersion                                                     | regexp named     |
            | page segment            | general                                                        | string           |
            | sysEnv                  | app                                                            | string           |
            | business unit           | BBVA Mexico                                                    | string           |
            | site app name           | App BBVA Mexico                                                | string           |
            | project name            | Glomo                                                          | string           |
            | device mobile           | si                                                             | string           |
            | user userState          | no logado                                                      | string           |
            | internal campaign       |                                                                | empty array      |
            | optimization attributes |                                                                | empty array      |
            | application             |                                                                | empty str object |
            | products attributes     |                                                                | empty array      |
            | error page              | error sustitucion no realizada                                 | string           |

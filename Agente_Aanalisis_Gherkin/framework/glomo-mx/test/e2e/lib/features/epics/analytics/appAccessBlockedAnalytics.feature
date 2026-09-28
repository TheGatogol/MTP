@appAccessBlockedAnalytics
Feature: Analytics App Access blocked

    @ANA_AAB001
    @analytics
    @native @android @ios
    @android-done @ios-done
    @backend(test) @MX @vbank
    @vbank-modified
    @tmpExclude @JIRA.GLOMOMX-180582
    # REQUIRED: Second GET app settings request should be modified with a copy of the first one and setting isAppAvailable to false.
    Scenario: Open app with blocked access when user is cached
        Given a user with the following criteria
            | criteria  |
            | active    |
        When the user logs in and reset app
        Then the device contains the following variables
            | item                    | value                                                          | type             |
            | analytics               | analytics/glomo_base                                           | json schema      |
            | page name               | app:publica:general:landing:usuario recordado:acceso bloqueado | string           |
            | level 1                 | landing                                                        | string           |
            | level 2                 | usuario recordado                                              | string           |
            | level 3                 | acceso bloqueado                                               | string           |
            | language                | ES                                                             | string           |
            | page area               | publica                                                        | string           |
            | page intent             | informacion                                                    | string           |
            | channel                 | online                                                         | string           |
            | page instance ID        | de                                                             | string           |
            | version DL              | 20250414_5.0                                                   | string           |
            | page info version       | appVersion                                                     | regexp named     |
            | page segment            | general                                                        | string           |
            | sysEnv                  | app                                                            | string           |
            | project name            | Glomo                                                          | string           |
            | business unit           | BBVA Mexico                                                    | string           |
            | site app name           | App BBVA Mexico                                                | string           |
            | device mobile           | si                                                             | string           |
            | user userState          | no logado                                                      | string           |
            | internal campaign       |                                                                | empty array      |
            | optimization attributes |                                                                | empty array      |
            | application             |                                                                | empty str object |
            | products attributes     |                                                                | empty array      |

    @ANA_AAB002
    @analytics
    @native @android @ios @android-done @ios-manual @JIRA.GLOMOMX-180582
    @backend(test) @MX @vbank @vbank-modified @no-data-manager
    # REQUIRED: GET app settings request should be modified to set isAppAvailable to false.
    Scenario: Open app with blocked access when user is not cached
        Given a user accesses the application for the first time
        When the user accesses to public Landing Screen
        Then the device contains the following variables
            | item                    | value                                                              | type             |
            | analytics               | analytics/glomo_base                                               | json schema      |
            | page name               | app:publica:general:landing:usuario no recordado:acceso bloqueado  | string           |
            | level 1                 | landing                                                            | string           |
            | level 2                 | usuario no recordado                                               | string           |
            | level 3                 | acceso bloqueado                                                   | string           |
            | language                | ES                                                                 | string           |
            | page area               | publica                                                            | string           |
            | page intent             | informacion                                                        | string           |
            | channel                 | online                                                             | string           |
            | page instance ID        | de                                                                 | string           |
            | version DL              | 20250414_5.0                                                       | string           |
            | page info version       | appVersion                                                         | regexp named     |
            | page segment            | general                                                            | string           |
            | sysEnv                  | app                                                                | string           |
            | project name            | Glomo                                                              | string           |
            | business unit           | BBVA Mexico                                                        | string           |
            | site app name           | App BBVA Mexico                                                    | string           |
            | device mobile           | si                                                                 | string           |
            | user userState          | no logado                                                          | string           |
            | internal campaign       |                                                                    | empty array      |
            | optimization attributes |                                                                    | empty array      |
            | application             |                                                                    | empty str object |
            | products attributes     |                                                                    | empty array      |

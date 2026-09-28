@appUpgradeAnalytics
Feature: Analytics App upgrade

    @ANA_AUG001
    @analytics
    @MX @backend(test)
    @native @android @ios
    @vbank @vbank-modified
    @android-done @ios-done
    @tmpExclude @JIRA.GLOMOMX-180582
    # REQUIRED: Second GET app settings request should be modified with a copy of the first one and replacing the minVersion in order to force mandatory updates.
    # Scenario Releases - The call to AEM is modified, changing minVersionIOS and minVersionAndroid to 1.0.0 so that they work in the releases
    Scenario: Open app with mandatory upgrade with cached user
        Given a user with the following criteria
            | criteria  |
            | enabled   |
        When the user logs in and reset app
        Then the device contains the following variables
            | item                    | value                                                               | type             |
            | analytics               | analytics/glomo_base                                                | json schema      |
            | page name               | app:publica:general:landing:usuario recordado:actualizacion forzosa | string           |
            | level 1                 | landing                                                             | string           |
            | level 2                 | usuario recordado                                                   | string           |
            | level 3                 | actualizacion forzosa                                               | string           |
            | language                | ES                                                                  | string           |
            | page area               | publica                                                             | string           |
            | page intent             | informacion                                                         | string           |
            | channel                 | online                                                              | string           |
            | page instance ID        | de                                                                  | string           |
            | version DL              | 20250414_5.0                                                        | string           |
            | page info version       | appVersion                                                          | regexp named     |
            | page segment            | general                                                             | string           |
            | sysEnv                  | app                                                                 | string           |
            | project name            | Glomo                                                               | string           |
            | business unit           | BBVA Mexico                                                         | string           |
            | site app name           | App BBVA Mexico                                                     | string           |
            | device mobile           | si                                                                  | string           |
            | user userState          | no logado                                                           | string           |
            | internal campaign       |                                                                     | empty array      |
            | optimization attributes |                                                                     | empty array      |
            | application             |                                                                     | empty str object |
            | products attributes     |                                                                     | empty array      |

    @ANA_AUG002
    @analytics
    @MX @backend(test)
    @native @android @ios @manual-ios @JIRA.GLOMOMX-196919
    @vbank @vbank-modified
    @android-done @ios-done
    @no-data-manager
    # REQUIRED: GET app settings request should be modified to replace the minVersion in order to force mandatory updates.
    Scenario: Open app with mandatory upgrade when user is not cached
        Given a user accesses the application for the first time
        When the user accesses to public Landing Screen
        Then the device contains the following variables
            | item                    | value                                                                   | type             |
            | analytics               | analytics/glomo_base                                                    | json schema      |
            | page name               | app:publica:general:landing:usuario no recordado:actualizacion forzosa  | string           |
            | level 1                 | landing                                                                 | string           |
            | level 2                 | usuario no recordado                                                    | string           |
            | level 3                 | actualizacion forzosa                                                   | string           |
            | language                | ES                                                                      | string           |
            | page area               | publica                                                                 | string           |
            | page intent             | informacion                                                             | string           |
            | channel                 | online                                                                  | string           |
            | page instance ID        | de                                                                      | string           |
            | version DL              | 20250414_5.0                                                            | string           |
            | page info version       | appVersion                                                              | regexp named     |
            | page segment            | general                                                                 | string           |
            | sysEnv                  | app                                                                     | string           |
            | project name            | Glomo                                                                   | string           |
            | business unit           | BBVA Mexico                                                             | string           |
            | site app name           | App BBVA Mexico                                                         | string           |
            | device mobile           | si                                                                      | string           |
            | user userState          | no logado                                                               | string           |
            | internal campaign       |                                                                         | empty array      |
            | optimization attributes |                                                                         | empty array      |
            | application             |                                                                         | empty str object |
            | products attributes     |                                                                         | empty array      |

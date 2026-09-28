@landingPublicAnalytics
Feature: Analytics Landing Public

    @ANA_LAP001
    @analytics
    @android @ios @native
    @android-done @manual-ios @JIRA.GLOMOMX-196919
    @backend(test) @MX @vbank
    @no-data-manager
    Scenario: See public landing page in the first access
        Given a user accesses the application for the first time
        When the user accesses to public Landing Screen
        Then the device contains the following variables
            | item                    | value                                            | type             |
            | analytics               | analytics/glomo_base                             | json schema      |
            | page name               | app:publica:general:landing:usuario no recordado | string           |
            | level 1                 | landing                                          | string           |
            | level 2                 | usuario no recordado                             | string           |
            | language                | ES                                               | string           |
            | page area               | publica                                          | string           |
            | page intent             | informacion                                      | string           |
            | channel                 | online                                           | string           |
            | page instance ID        | de                                               | string           |
            | version DL              | 20250414_5.0                                     | string           |
            | page info version       | appVersion                                       | regexp named     |
            | page segment            | general                                          | string           |
            | sysEnv                  | app                                              | string           |
            | project name            | Glomo                                            | string           |
            | business unit           | BBVA Mexico                                      | string           |
            | site app name           | App BBVA Mexico                                  | string           |
            | device mobile           | si                                               | string           |
            | user userState          | no logado                                        | string           |
            | internal campaign       |                                                  | empty array      |
            | optimization attributes |                                                  | empty array      |
            | application             |                                                  | empty str object |
            | products attributes     |                                                  | empty array      |

    @ANA_EVENT_LAP002
    @analytics
    @native @ios @android
    @android-done @manual-ios @JIRA.GLOMOGL-20707
    @backend(test) @MX @vbank
    @no-data-manager
    Scenario: Open external web to become a new client from shortcut
        Given a user accesses the application for the first time
        And the user accesses to public Landing Screen
        And the analytics interceptor service is initiated
        When the user accesses to "become a client" screen from shortcuts
        Then the analytics events contains the following variables
            | item                    | value                                            | type             | event            |
            | analytics               | analytics/glomo_base                             | json schema      | External Link |
            | page name               | app:publica:general:landing:usuario no recordado | string           | External Link |
            | level 1                 | landing                                          | string           | External Link |
            | level 2                 | usuario no recordado                             | string           | External Link |
            | language                | ES                                               | string           | External Link |
            | page area               | publica                                          | string           | External Link |
            | page intent             | informacion                                      | string           | External Link |
            | channel                 | online                                           | string           | External Link |
            | page instance ID        | de                                               | string           | External Link |
            | version DL              | 20250414_5.0                                     | string           | External Link |
            | page info version       | appVersion                                       | regexp named     | External Link |
            | page segment            | general                                          | string           | External Link |
            | sysEnv                  | app                                              | string           | External Link |
            | project name            | Glomo                                            | string           | External Link |
            | business unit           | BBVA Mexico                                      | string           | External Link |
            | site app name           | App BBVA Mexico                                  | string           | External Link |
            | device mobile           | si                                               | string           | External Link |
            | user userState          | no logado                                        | string           | External Link |
            | link url                | landing hazte cliente                            | string           | External Link |
            | internal campaign       |                                                  | empty array      | External Link |
            | optimization attributes |                                                  | empty array      | External Link |
            | application             |                                                  | empty str object | External Link |
            | products attributes     |                                                  | empty array      | External Link |

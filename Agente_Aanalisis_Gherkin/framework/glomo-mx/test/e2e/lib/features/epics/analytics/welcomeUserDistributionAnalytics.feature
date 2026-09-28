@WelcomeUserDistributionAnalytics
Feature: Welcome User Distribution Analytics

    @WUDAN001
    @analytics
    @ios @android @native
    @android-done @ios-done @manual-ios @JIRA.GLOMOMX-196919
    @backend(test) @vbank @MX
    @no-data-manager
    Scenario: User accesses app after fresh install - Analytics: page view
        Given a user accesses the application for the first time
        When the user is in the Welcome User Distribution
        Then the device contains the following variables
            | item                    | value                                                    | type             |
            | analytics               | analytics/glomo_base                                     | json schema      |
            | page name               | app:publica:general:bienvenida:seas o no cliente de bbva | string           |
            | level 1                 | bienvenida                                               | string           |
            | level 2                 | seas o no cliente de bbva                                | string           |
            | language                | ES                                                       | string           |
            | page area               | publica                                                  | string           |
            | page intent             | informacion                                              | string           |
            | channel                 | online                                                   | string           |
            | page instance ID        | de                                                       | string           |
            | version DL              | 20250414_5.0                                             | string           |
            | page info version       | appVersion                                               | regexp named     |
            | page segment            | general                                                  | string           |
            | sysEnv                  | app                                                      | string           |
            | project name            | Glomo                                                    | string           |
            | business unit           | BBVA Mexico                                              | string           |
            | site app name           | App BBVA Mexico                                          | string           |
            | device mobile           | si                                                       | string           |
            | user userState          | no logado                                                | string           |
            | internal campaign       |                                                          | empty array      |
            | optimization attributes |                                                          | empty array      |
            | application             |                                                          | empty str object |
            | products attributes     |                                                          | empty array      |

    @WUDAN002
    @analytics
    @ios @android @native
    @android-done @ios-done @manual-ios @JIRA.GLOMOMX-196919
    @backend(test) @vbank @MX
    @no-data-manager
    Scenario: Remembered user clicks access button - Analytics: internal link
        Given a user accesses the application for the first time
        When the user is in the Welcome User Distribution
        And the analytics interceptor service is initiated
        And the user selects the "Entrar" option
        Then the analytics events contains the following variables
            | item                    | value                                                    | type             | event         |
            | analytics               | analytics/glomo_base                                     | json schema      | Internal Link |
            | page name               | app:publica:general:bienvenida:seas o no cliente de bbva | string           | Internal Link |
            | level 1                 | bienvenida                                               | string           | Internal Link |
            | level 2                 | seas o no cliente de bbva                                | string           | Internal Link |
            | language                | ES                                                       | string           | Internal Link |
            | page area               | publica                                                  | string           | Internal Link |
            | page intent             | informacion                                              | string           | Internal Link |
            | channel                 | online                                                   | string           | Internal Link |
            | page instance ID        | de                                                       | string           | Internal Link |
            | version DL              | 20250414_5.0                                             | string           | Internal Link |
            | page info version       | appVersion                                               | regexp named     | Internal Link |
            | page segment            | general                                                  | string           | Internal Link |
            | sysEnv                  | app                                                      | string           | Internal Link |
            | project name            | Glomo                                                    | string           | Internal Link |
            | business unit           | BBVA Mexico                                              | string           | Internal Link |
            | site app name           | App BBVA Mexico                                          | string           | Internal Link |
            | device mobile           | si                                                       | string           | Internal Link |
            | user userState          | no logado                                                | string           | Internal Link |
            | link name               | acceder                                                  | string           | Internal Link |
            | internal campaign       |                                                          | empty array      | Internal Link |
            | optimization attributes |                                                          | empty array      | Internal Link |
            | application             |                                                          | empty str object | Internal Link |
            | products attributes     |                                                          | empty array      | Internal Link |

    @WUDAN003
    @analytics
    @ios @android
    @MX @native
    @vbank @data-manager @manual @JIRA.GLOMOGL-26754
    Scenario: Remembered user updates the app and accesses - Analytics: page view
        Given a user with the following criteria
            | criteria |
            | active   |
        When the user access the "dashboard" screen
        And the user closes the app
        And the user updates the application and accesses
        And the user is in the Welcome User Distribution
        Then the device contains the following variables
            | item                    | value                                            | type             |
            | analytics               | analytics/glomo_base                             | json schema      |
            | page name               | app:publica:general:bienvenida:usuario con cache | string           |
            | level 1                 | bienvenida                                       | string           |
            | level 2                 | usuario con cache                                | string           |
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

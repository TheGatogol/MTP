@forceTouchAnalytics
Feature: Analytics Force Touch

    @ANA_FT001
    @analytics
    @android @ios @native
    @android-done @ios-done
    @backend(test) @MX @vbank
    @no-data-manager
    @manual @JIRA.GLOMOGL-17193
    Scenario: User long-press the BBVA APP on the smarthphone to show the frequent short cut operatives and selects transfers
        Given a user presses and holds the BBVA APP on the smartphone
        When the user select the operative transfer
        And the mobile app navigates to login
        Then the device contains the following variables
            | item                    | value                         | type             | event         |
            | analytics               | analytics/glomo_base          | json schema      | Internal Link |
            | page name               | app:publica:general:shortcuts | string           | Internal Link |
            | level 1                 | shortcuts                     | string           | Internal Link |
            | language                | ES                            | string           | Internal Link |
            | page area               | publica                       | string           | Internal Link |
            | page intent             | informacion                   | string           | Internal Link |
            | channel                 | online                        | string           | Internal Link |
            | page instance ID        | de                            | string           | Internal Link |
            | page info version       | appVersion                    | regexp named     | Internal Link |
            | page segment            | personas                      | string           | Internal Link |
            | sysEnv                  | app                           | string           | Internal Link |
            | business unit           | BBVA Mexico                   | string           | Internal Link |
            | site app name           | App BBVA Mexico               | string           | Internal Link |
            | project name            | Glomo                         | string           | Internal Link |
            | link name               | transferir                    | string           | Internal Link |
            | device mobile           | si                            | string           | Internal Link |
            | user userState          | no logado                     | string           | Internal Link |
            | user segment global     | 003001                        | string           | Internal Link |
            | profile ID              | profileID                     | regexp named     | Internal Link |
            | internal campaign       |                               | empty array      | Internal Link |
            | optimization attributes |                               | empty array      | Internal Link |
            | application             |                               | empty str object | Internal Link |
            | products attributes     |                               | empty array      | Internal Link |

    @ANA_FT002
    @analytics
    @android @ios @native
    @android-done @ios-done
    @backend(test) @MX @vbank
    @no-data-manager
    @manual @JIRA.GLOMOGL-17193
    Scenario: User long-press the BBVA APP on the smarthphone to show the frequent short cut operatives and selects reject card
        Given a user presses and holds the BBVA APP on the smartphone
        When the user select the operative reject card
        And the mobile app navigates to login
        Then the device contains the following variables
            | item                    | value                         | type             | event         |
            | analytics               | analytics/glomo_base          | json schema      | Internal Link |
            | page name               | app:publica:general:shortcuts | string           | Internal Link |
            | level 1                 | shortcuts                     | string           | Internal Link |
            | language                | ES                            | string           | Internal Link |
            | page area               | publica                       | string           | Internal Link |
            | page intent             | informacion                   | string           | Internal Link |
            | channel                 | online                        | string           | Internal Link |
            | page instance ID        | de                            | string           | Internal Link |
            | page info version       | appVersion                    | regexp named     | Internal Link |
            | page segment            | personas                      | string           | Internal Link |
            | sysEnv                  | app                           | string           | Internal Link |
            | business unit           | BBVA Mexico                   | string           | Internal Link |
            | site app name           | App BBVA Mexico               | string           | Internal Link |
            | project name            | Glomo                         | string           | Internal Link |
            | link name               | tarjeta rechazada             | string           | Internal Link |
            | device mobile           | si                            | string           | Internal Link |
            | user userState          | no logado                     | string           | Internal Link |
            | user segment global     | 003001                        | string           | Internal Link |
            | profile ID              | profileID                     | regexp named     | Internal Link |
            | internal campaign       |                               | empty array      | Internal Link |
            | optimization attributes |                               | empty array      | Internal Link |
            | application             |                               | empty str object | Internal Link |
            | products attributes     |                               | empty array      | Internal Link |

    @ANA_FT003
    @analytics
    @android @ios @native
    @android-done @ios-done
    @backend(test) @MX @vbank
    @no-data-manager
    @manual @JIRA.GLOMOGL-17193
    Scenario: User long-press the BBVA APP on the smarthphone to show the frequent short cut operatives and selects pay services
        Given a user presses and holds the BBVA APP on the smartphone
        When the user select the operative pay services
        And the mobile app navigates to login
        Then the device contains the following variables
            | item                    | value                         | type             | event         |
            | analytics               | analytics/glomo_base          | json schema      | Internal Link |
            | page name               | app:publica:general:shortcuts | string           | Internal Link |
            | level 1                 | shortcuts                     | string           | Internal Link |
            | language                | ES                            | string           | Internal Link |
            | page area               | publica                       | string           | Internal Link |
            | page intent             | informacion                   | string           | Internal Link |
            | channel                 | online                        | string           | Internal Link |
            | page instance ID        | de                            | string           | Internal Link |
            | page info version       | appVersion                    | regexp named     | Internal Link |
            | page segment            | personas                      | string           | Internal Link |
            | sysEnv                  | app                           | string           | Internal Link |
            | business unit           | BBVA Mexico                   | string           | Internal Link |
            | site app name           | App BBVA Mexico               | string           | Internal Link |
            | project name            | Glomo                         | string           | Internal Link |
            | link name               | pagar servicio                | string           | Internal Link |
            | device mobile           | si                            | string           | Internal Link |
            | user userState          | no logado                     | string           | Internal Link |
            | user segment global     | 003001                        | string           | Internal Link |
            | profile ID              | profileID                     | regexp named     | Internal Link |
            | internal campaign       |                               | empty array      | Internal Link |
            | optimization attributes |                               | empty array      | Internal Link |
            | application             |                               | empty str object | Internal Link |
            | products attributes     |                               | empty array      | Internal Link |

    @ANA_FT004
    @analytics
    @android @ios @native
    @android-done @ios-done
    @backend(test) @MX @vbank
    @no-data-manager
    @manual @JIRA.GLOMOGL-17193
    Scenario: User long-press the BBVA APP on the smarthphone to show the frequent short cut operatives and selects withdrawal without card
        Given a user presses and holds the BBVA APP on the smartphone
        When the user select the operative withdrawal without card
        And the mobile app navigates to login
        Then the device contains the following variables
            | item                    | value                         | type             | event         |
            | analytics               | analytics/glomo_base          | json schema      | Internal Link |
            | page name               | app:publica:general:shortcuts | string           | Internal Link |
            | level 1                 | shortcuts                     | string           | Internal Link |
            | language                | ES                            | string           | Internal Link |
            | page area               | publica                       | string           | Internal Link |
            | page intent             | informacion                   | string           | Internal Link |
            | channel                 | online                        | string           | Internal Link |
            | page instance ID        | de                            | string           | Internal Link |
            | page info version       | appVersion                    | regexp named     | Internal Link |
            | page segment            | personas                      | string           | Internal Link |
            | sysEnv                  | app                           | string           | Internal Link |
            | business unit           | BBVA Mexico                   | string           | Internal Link |
            | site app name           | App BBVA Mexico               | string           | Internal Link |
            | project name            | Glomo                         | string           | Internal Link |
            | link name               | retiro sin tarjeta            | string           | Internal Link |
            | device mobile           | si                            | string           | Internal Link |
            | user userState          | no logado                     | string           | Internal Link |
            | user segment global     | 003001                        | string           | Internal Link |
            | profile ID              | profileID                     | regexp named     | Internal Link |
            | internal campaign       |                               | empty array      | Internal Link |
            | optimization attributes |                               | empty array      | Internal Link |
            | application             |                               | empty str object | Internal Link |
            | products attributes     |                               | empty array      | Internal Link |

    @ANA_FT005
    @analytics
    @android @ios @native
    @android-done @ios-done
    @backend(test) @MX @vbank
    @no-data-manager
    @manual @JIRA.GLOMOGL-17193
    Scenario: User long-press the BBVA APP on the smarthphone to show the frequent short cut operatives and selects top up
        Given a user presses and holds the BBVA APP on the smartphone
        When the user select the operative top up
        And the mobile app navigates to login
        Then the device contains the following variables
            | item                    | value                         | type             | event         |
            | analytics               | analytics/glomo_base          | json schema      | Internal Link |
            | page name               | app:publica:general:shortcuts | string           | Internal Link |
            | level 1                 | shortcuts                     | string           | Internal Link |
            | language                | ES                            | string           | Internal Link |
            | page area               | publica                       | string           | Internal Link |
            | page intent             | informacion                   | string           | Internal Link |
            | channel                 | online                        | string           | Internal Link |
            | page instance ID        | de                            | string           | Internal Link |
            | page info version       | appVersion                    | regexp named     | Internal Link |
            | page segment            | personas                      | string           | Internal Link |
            | sysEnv                  | app                           | string           | Internal Link |
            | business unit           | BBVA Mexico                   | string           | Internal Link |
            | site app name           | App BBVA Mexico               | string           | Internal Link |
            | project name            | Glomo                         | string           | Internal Link |
            | link name               | recargas y mas                | string           | Internal Link |
            | device mobile           | si                            | string           | Internal Link |
            | user userState          | no logado                     | string           | Internal Link |
            | user segment global     | 003001                        | string           | Internal Link |
            | profile ID              | profileID                     | regexp named     | Internal Link |
            | internal campaign       |                               | empty array      | Internal Link |
            | optimization attributes |                               | empty array      | Internal Link |
            | application             |                               | empty str object | Internal Link |
            | products attributes     |                               | empty array      | Internal Link |

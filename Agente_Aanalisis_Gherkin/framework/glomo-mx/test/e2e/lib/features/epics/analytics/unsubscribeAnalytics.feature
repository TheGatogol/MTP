@unsubscribeAnalytics
Feature: Analytics - Unsubscribe

    @ANA_UN001
    @analytics
    @vbank
    @ios @android
    @web-done @web
    @backend(test) @MX
    Scenario: Page view - profile with unsubscribe item
        Given a user with the following criteria
            | criteria |
            | profile  |
        When the user accesses to profile screen
        Then the device contains the following variables
            | item                    | value                              | type             |
            | analytics               | analytics/glomo_base               | json schema      |
            | version DL              | 20250414_5.0                       | string           |
            | page name               | app:privada:personas:area personal | string           |
            | level 1                 | area personal                      | string           |
            | language                | ES                                 | string           |
            | page area               | privada                            | string           |
            | page intent             | informacion                        | string           |
            | channel                 | online                             | string           |
            | page instance ID        | de                                 | string           |
            | page info version       | appVersion                         | regexp named     |
            | page segment            | personas                           | string           |
            | sysEnv                  | app                                | string           |
            | business unit           | BBVA Mexico                        | string           |
            | site app name           | App BBVA Mexico                    | string           |
            | project name            | Glomo                              | string           |
            | device mobile           | si                                 | string           |
            | user userState          | logado                             | string           |
            | user segment global     | 003001                             | string           |
            | profile ID              | profileID                          | regexp named     |
            | user gender             | gender                             | regexp named     |
            | user country            | lettersAndSpaceOrEmpty             | regexp named     |
            | user state              | lettersAndSpaceOrEmpty             | regexp named     |
            | internal campaign       |                                    | empty array      |
            | optimization attributes |                                    | empty array      |
            | application             |                                    | empty str object |
            | products attributes     |                                    | empty array      |

    @ANA_UN002
    @analytics @manual @JIRA.GLOMOMX-254597
    @web @ios @android
    @MX @vbank @backend(test) @web-done
    Scenario: Internal link - Unsubscribe
        Given a user with the following criteria
            | criteria |
            | profile  |
        And the user accesses to profile screen
        And the analytics interceptor service is initiated
        When the user accesses to unsubscribe
        Then the analytics events contains the following variables
            | item                    | value                              | type             | event         |
            | analytics               | analytics/glomo_base               | json schema      | Internal Link |
            | version DL              | 20250414_5.0                       | string           | Internal Link |
            | page name               | app:privada:personas:area personal | string           | Internal Link |
            | level 1                 | area personal                      | string           | Internal Link |
            | language                | ES                                 | string           | Internal Link |
            | page area               | privada                            | string           | Internal Link |
            | page intent             | informacion                        | string           | Internal Link |
            | channel                 | online                             | string           | Internal Link |
            | page instance ID        | de                                 | string           | Internal Link |
            | page info version       | appVersion                         | regexp named     | Internal Link |
            | page segment            | personas                           | string           | Internal Link |
            | sysEnv                  | app                                | string           | Internal Link |
            | business unit           | BBVA Mexico                        | string           | Internal Link |
            | site app name           | App BBVA Mexico                    | string           | Internal Link |
            | project name            | Glomo                              | string           | Internal Link |
            | link name	              | darse de baja	                   | string           | Internal Link |
            | device mobile           | si                                 | string           | Internal Link |
            | user userState          | logado                             | string           | Internal Link |
            | user segment global     | 003001                             | string           | Internal Link |
            | profile ID              | profileID                          | regexp named     | Internal Link |
            | user gender             | gender                             | regexp named     | Internal Link |
            | user country            | lettersAndSpaceOrEmpty             | regexp named     | Internal Link |
            | user state              | lettersAndSpaceOrEmpty             | regexp named     | Internal Link |
            | internal campaign       |                                    | empty array      | Internal Link |
            | optimization attributes |                                    | empty array      | Internal Link |
            | application             |                                    | empty str object | Internal Link |
            | products attributes     |                                    | empty array      | Internal Link |

    @ANA_UN003
    @analytics @manual @JIRA.GLOMOMX-254597
    @web @ios @android
    @MX @vbank @backend(test) @web-done
    Scenario: Page view - Unsubscribe
        Given a user with the following criteria
            | criteria |
            | profile  |
        And the user accesses to profile screen
        When the user accesses to unsubscribe
        Then the device contains the following variables
            | item                    | value                                            | type             |
            | analytics               | analytics/glomo_base                             | json schema      |
            | version DL              | 20250414_5.0                                     | string           |
            | page name               | app:privada:personas:area personal:darse de baja | string           |
            | level 1                 | area personal                                    | string           |
            | level 2                 | darse de baja                                    | string           |
            | language                | ES                                               | string           |
            | page area               | privada                                          | string           |
            | page intent             | informacion                                      | string           |
            | channel                 | online                                           | string           |
            | page instance ID        | de                                               | string           |
            | page info version       | appVersion                                       | regexp named     |
            | page segment            | personas                                         | string           |
            | sysEnv                  | app                                              | string           |
            | business unit           | BBVA Mexico                                      | string           |
            | site app name           | App BBVA Mexico                                  | string           |
            | project name            | Glomo                                            | string           |
            | device mobile           | si                                               | string           |
            | user userState          | logado                                           | string           |
            | user segment global     | 003001                                           | string           |
            | profile ID              | profileID                                        | regexp named     |
            | user gender             | gender                                           | regexp named     |
            | user country            | lettersAndSpaceOrEmpty                           | regexp named     |
            | user state              | lettersAndSpaceOrEmpty                           | regexp named     |
            | internal campaign       |                                                  | empty array      |
            | optimization attributes |                                                  | empty array      |
            | application             |                                                  | empty str object |
            | products attributes     |                                                  | empty array      |

    @ANA_UN004
    @analytics @manual @JIRA.GLOMOMX-254597
    @web @ios @android
    @MX @vbank @backend(test) @web-done
    Scenario: Internal link - sucursales
        Given a user with the following criteria
            | criteria |
            | profile  |
        And the user accesses to profile screen
        And the user accesses to unsubscribe
        When the user uses "sucursales" option
        Then the device contains the following variables
            | item                    | value                                            | type             |
            | analytics               | analytics/glomo_base                             | json schema      |
            | version DL              | 20250414_5.0                                     | string           |
            | page name               | app:privada:personas:area personal:darse de baja | string           |
            | level 1                 | area personal                                    | string           |
            | level 2                 | darse de baja                                    | string           |
            | language                | ES                                               | string           |
            | page area               | privada                                          | string           |
            | page intent             | informacion                                      | string           |
            | channel                 | online                                           | string           |
            | page instance ID        | de                                               | string           |
            | page info version       | appVersion                                       | regexp named     |
            | page segment            | personas                                         | string           |
            | sysEnv                  | app                                              | string           |
            | business unit           | BBVA Mexico                                      | string           |
            | site app name           | App BBVA Mexico                                  | string           |
            | project name            | Glomo                                            | string           |
            | link name	              | puntos de atencion	                             | string           |
            | device mobile           | si                                               | string           |
            | user userState          | logado                                           | string           |
            | user segment global     | 003001                                           | string           |
            | profile ID              | profileID                                        | regexp named     |
            | user gender             | gender                                           | regexp named     |
            | user country            | lettersAndSpaceOrEmpty                           | regexp named     |
            | user state              | lettersAndSpaceOrEmpty                           | regexp named     |
            | internal campaign       |                                                  | empty array      |
            | optimization attributes |                                                  | empty array      |
            | application             |                                                  | empty str object |
            | products attributes     |                                                  | empty array      |

    @ANA_UN005
    @analytics @manual @JIRA.GLOMOMX-254597
    @web @ios @android
    @MX @vbank @backend(test) @web-done
    Scenario: Interaction link - Contact us
        Given a user with the following criteria
            | criteria |
            | profile  |
        And the user accesses to profile screen
        And the user accesses to unsubscribe
        When the user uses "contact us" option
        Then the device contains the following variables
            | item                    | value                                            | type             |
            | analytics               | analytics/glomo_base                             | json schema      |
            | version DL              | 20250414_5.0                                     | string           |
            | page name               | app:privada:personas:area personal:darse de baja | string           |
            | level 1                 | area personal                                    | string           |
            | level 2                 | darse de baja                                    | string           |
            | language                | ES                                               | string           |
            | page area               | privada                                          | string           |
            | page intent             | informacion                                      | string           |
            | channel                 | online                                           | string           |
            | page instance ID        | de                                               | string           |
            | page info version       | appVersion                                       | regexp named     |
            | page segment            | personas                                         | string           |
            | sysEnv                  | app                                              | string           |
            | business unit           | BBVA Mexico                                      | string           |
            | site app name           | App BBVA Mexico                                  | string           |
            | project name            | Glomo                                            | string           |
            | interaction level       | contactanos      	                             | string           |
            | device mobile           | si                                               | string           |
            | user userState          | logado                                           | string           |
            | user segment global     | 003001                                           | string           |
            | profile ID              | profileID                                        | regexp named     |
            | user gender             | gender                                           | regexp named     |
            | user country            | lettersAndSpaceOrEmpty                           | regexp named     |
            | user state              | lettersAndSpaceOrEmpty                           | regexp named     |
            | internal campaign       |                                                  | empty array      |
            | optimization attributes |                                                  | empty array      |
            | products attributes     |                                                  | empty array      |

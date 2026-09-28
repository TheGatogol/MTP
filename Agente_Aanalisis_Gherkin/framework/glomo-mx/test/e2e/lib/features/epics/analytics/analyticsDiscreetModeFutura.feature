@discreetModeFuturaAnalytics
Feature: Analytics - Discreet Mode Futura

    @ANA_EVENT_MDF001
    @analytics @MX
    @web @ios @android
    @vbank @backend(test)
    @web-done
    Scenario: Internal link - Hide Amounts
        Given a user with the following criteria
            | criteria                   |
            | basic accounts             |
            | account sufficient balance |
            | smart shortcuts            |
            | debit card                 |
            | credit card                |
            | loans                      |
            | user with investments      |
        And a user accesses the application
        And the analytics interceptor service is initiated
        When the user activates discreet mode
        Then the analytics events contains the following variables
            | item                    | value                                          | type             | event         |
            | analytics               | analytics/glomo_base                           | json schema      | Internal Link |
            | version DL              | 20250414_5.0                                   | string           | Internal Link |
            | page instance ID        | de                                             | string           | Internal Link |
            | sysEnv                  | app                                            | string           | Internal Link |
            | page segment            | personas                                       | string           | Internal Link |
            | page intent             | informacion                                    | string           | Internal Link |
            | business unit           | BBVA Mexico                                    | string           | Internal Link |
            | page area               | privada                                        | string           | Internal Link |
            | language                | ES                                             | string           | Internal Link |
            | channel                 | online                                         | string           | Internal Link |
            | site app name           | App BBVA Mexico                                | string           | Internal Link |
            | project name            | Futura                                         | string           | Internal Link |
            | level 1                 | posicion global                                | string           | Internal Link |
            | level 2                 | destacado                                      | string           | Internal Link |
            | page name               | app:privada:personas:posicion global:destacado | string           | Internal Link |
            | link name               | ojo modo discreto                              | string           | Internal Link |
            | device mobile           | si                                             | string           | Internal Link |
            | user segment global     | 003001                                         | string           | Internal Link |
            | user userState          | logado                                         | string           | Internal Link |
            | user gender             | gender                                         | regexp named     | Internal Link |
            | user age                | age                                            | regexp named     | Internal Link |
            | internal campaign       |                                                | empty array      | Internal Link |
            | optimization attributes |                                                | empty array      | Internal Link |
            | application             |                                                | empty str object | Internal Link |
            | products attributes     |                                                | empty array      | Internal Link |

    @ANA_EVENT_MDF002
    @analytics @MX
    @web @ios @android
    @vbank @backend(test)
    @web-done
    Scenario: Page View - Configure discreet mode as hidden from sidebar settings
        Given a user with the following criteria
            | criteria                   |
            | basic accounts             |
            | account sufficient balance |
            | smart shortcuts            |
        When the user accesses the discreet mode settings
        Then the device contains the following variables
            | item                    | value                                      | type             |
            | analytics               | analytics/glomo_base                       | json schema      |
            | version DL              | 20250414_5.0                               | string           |
            | page name               | app:privada:personas:modo discreto:detalle | string           |
            | level 1                 | modo discreto                              | string           |
            | level 2                 | detalle                                    | string           |
            | language                | ES                                         | string           |
            | page area               | privada                                    | string           |
            | page intent             | informacion                                | string           |
            | channel                 | online                                     | string           |
            | page instance ID        | de                                         | string           |
            | page info version       | appVersion                                 | regexp named     |
            | page segment            | personas                                   | string           |
            | sysEnv                  | app                                        | string           |
            | business unit           | BBVA Mexico                                | string           |
            | site app name           | App BBVA Mexico                            | string           |
            | project name            | Glomo                                      | string           |
            | device mobile           | si                                         | string           |
            | user userState          | logado                                     | string           |
            | user segment global     | 003001                                     | string           |
            | profile ID              | profileID                                  | regexp named     |
            | user gender             | gender                                     | regexp named     |
            | user age                | age                                        | regexp named     |
            | internal campaign       |                                            | empty array      |
            | optimization attributes |                                            | empty array      |
            | application             |                                            | empty str object |
            | products attributes     |                                            | empty array      |

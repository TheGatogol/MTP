@analyticsRcpProactiveMessage
Feature: Analytics - RCP Proactive Message

    @ANA_EVENT_PDAPU001
    @analytics
    @web @android @ios
    @MX @backend(test) @vbank
    @web-done
    Scenario:  Internal Link - RCP Proactive Message Remove Limit - Account Detail
        Given a user with the following criteria
            | criteria                         |
            | rcp proactive message high       |
        And the user accesses to the first account product detail
        And the analytics interceptor service is initiated
        When the user accesses to upgrade customer from rcp message with "high" level
        Then the analytics events contains the following variables
            | item                    | value                                   | type             | event         |
            | analytics               | analytics/glomo_base                    | json schema      | Internal Link |
            | version DL              | 20250414_5.0                            | string           | Internal Link |
            | page instance ID        | de                                      | string           | Internal Link |
            | sysEnv                  | app                                     | string           | Internal Link |
            | page segment            | personas                                | string           | Internal Link |
            | page intent             | informacion                             | string           | Internal Link |
            | business unit           | BBVA Mexico                             | string           | Internal Link |
            | page area               | privada                                 | string           | Internal Link |
            | language                | ES                                      | string           | Internal Link |
            | channel                 | online                                  | string           | Internal Link |
            | site app name           | App BBVA Mexico                         | string           | Internal Link |
            | project name            | Glomo                                   | string           | Internal Link |
            | level 1                 | cuentas                                 | string           | Internal Link |
            | level 2                 | detalle                                 | string           | Internal Link |
            | page name               | app:privada:personas:cuentas:detalle    | string           | Internal Link |
            | link name               | quitar limite                           | string           | Internal Link |
            | device mobile           | si                                      | string           | Internal Link |
            | user segment global     | 003001                                  | string           | Internal Link |
            | user userState          | logado                                  | string           | Internal Link |
            | profile ID              | profileID                               | regexp named     | Internal Link |
            | user gender             | gender                                  | regexp named     | Internal Link |
            | user age                | age                                     | regexp named     | Internal Link |

    @ANA_EVENT_PDAPU002
    @analytics
    @web @android @ios
    @MX @backend(test) @vbank
    @web-done
    Scenario:  Internal Link - RCP Proactive Message Remove Limit - More Detail
        Given a user with the following criteria
            | criteria                         |
            | rcp proactive message high       |
        And the user accesses to the first account product detail
        And the analytics interceptor service is initiated
        When the user accesses to upgrade customer from "rcp account detail"
        Then the analytics events contains the following variables
            | item                    | value                                                | type             | event         |
            | analytics               | analytics/glomo_base                                 | json schema      | Internal Link |
            | version DL              | 20250414_5.0                                         | string           | Internal Link |
            | page instance ID        | de                                                   | string           | Internal Link |
            | sysEnv                  | app                                                  | string           | Internal Link |
            | page segment            | personas                                             | string           | Internal Link |
            | page intent             | informacion                                          | string           | Internal Link |
            | business unit           | BBVA Mexico                                          | string           | Internal Link |
            | page area               | privada                                              | string           | Internal Link |
            | language                | ES                                                   | string           | Internal Link |
            | channel                 | online                                               | string           | Internal Link |
            | site app name           | App BBVA Mexico                                      | string           | Internal Link |
            | project name            | Glomo                                                | string           | Internal Link |
            | level 1                 | cuentas                                              | string           | Internal Link |
            | level 2                 | detalle                                              | string           | Internal Link |
            | level 3                 | datos de cuenta                                      | string           | Internal Link |
            | page name               | app:privada:personas:cuentas:detalle:datos de cuenta | string           | Internal Link |
            | link name               | quitar limite                                        | string           | Internal Link |
            | device mobile           | si                                                   | string           | Internal Link |
            | user segment global     | 003001                                               | string           | Internal Link |
            | user userState          | logado                                               | string           | Internal Link |
            | profile ID              | profileID                                            | regexp named     | Internal Link |
            | user gender             | gender                                               | regexp named     | Internal Link |
            | user age                | age                                                  | regexp named     | Internal Link |

    @ANA_EVENT_PDAPU003
    @analytics
    @web @android @ios
    @MX @backend(test) @vbank
    @web-done
    Scenario: Page View - RCP Proactive Message Remove Limit - More Info
        Given a user with the following criteria
            | criteria                         |
            | rcp proactive message high       |
        And the user accesses to the first account product detail
        And the analytics interceptor service is initiated
        When the user open rcp more info modal with "high" level
        Then the analytics events contains the following variables
            | item                    | value                                                               | type             | event         |
            | analytics               | analytics/glomo_base                                                | json schema      | Page View     |
            | version DL              | 20250414_5.0                                                        | string           | Page View     |
            | page instance ID        | de                                                                  | string           | Page View     |
            | sysEnv                  | app                                                                 | string           | Page View     |
            | page segment            | personas                                                            | string           | Page View     |
            | page intent             | informacion                                                         | string           | Page View     |
            | business unit           | BBVA Mexico                                                         | string           | Page View     |
            | page area               | privada                                                             | string           | Page View     |
            | language                | ES                                                                  | string           | Page View     |
            | channel                 | online                                                              | string           | Page View     |
            | site app name           | App BBVA Mexico                                                     | string           | Page View     |
            | project name            | Glomo                                                               | string           | Page View     |
            | level 1                 | cuentas                                                             | string           | Page View     |
            | level 2                 | por que debo actualizar mi informacion                              | string           | Page View     |
            | page name               | app:privada:personas:cuentas:por que debo actualizar mi informacion | string           | Page View     |
            | device mobile           | si                                                                  | string           | Page View     |
            | user segment global     | 003001                                                              | string           | Page View     |
            | user userState          | logado                                                              | string           | Page View     |
            | profile ID              | profileID                                                           | regexp named     | Page View     |
            | user gender             | gender                                                              | regexp named     | Page View     |
            | user age                | age                                                                 | regexp named     | Page View     |

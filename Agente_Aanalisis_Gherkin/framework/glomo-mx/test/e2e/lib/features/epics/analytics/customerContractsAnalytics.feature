@customerContractsAnalytics
Feature: Analytics - Customer Contracts

    @ANA_EVENT_CUCO001
    @web @ios @android
    @analytics
    @MX @vbank @backend(test) @web-done
    Scenario: Customer contracts list - analytics
        Given a user with the following criteria
                | criteria           |
                | customer contracts |
        And the user accesses to profile screen
        And the analytics interceptor service is initiated
        When the user accesses to profile contracts list
        Then the analytics events contains the following variables
        | item                    | value                                                | type              | event         |
        | analytics               | analytics/glomo_base                                 | json schema       | Page View     |
        | version DL              | 20250414_5.0                                         | string            | Page View     |
        | page name               | app:privada:personas:mis contratos                   | string            | Page View     |
        | level 1                 | mis contratos                                        | string            | Page View     |
        | language                | ES                                                   | string            | Page View     |
        | page area               | privada                                              | string            | Page View     |
        | page intent             | informacion                                          | string            | Page View     |
        | channel                 | online                                               | string            | Page View     |
        | page instance ID        | de                                                   | string            | Page View     |
        | page info version       | appVersion                                           | regexp named      | Page View     |
        | page segment            | personas                                             | string            | Page View     |
        | sysEnv                  | app                                                  | string            | Page View     |
        | business unit           | BBVA Mexico                                          | string            | Page View     |
        | site app name           | App BBVA Mexico                                      | string            | Page View     |
        | project name            | Glomo                                                | string            | Page View     |
        | device mobile           | si                                                   | string            | Page View     |
        | user userState          | logado                                               | string            | Page View     |
        | user segment global     | 003001                                               | string            | Page View     |
        | profile ID              | profileID                                            | regexp named      | Page View     |
        | user gender             | gender                                               | regexp named      | Page View     |
        | user age                | age                                                  | regexp named      | Page View     |
        | internal campaign       |                                                      | empty array       | Page View     |
        | optimization attributes |                                                      | empty array       | Page View     |
        | application             |                                                      | empty str object  | Page View     |
        | products attributes     |                                                      | empty array       | Page View     |

    @ANA_EVENT_CUCO002
    @web @ios @android
    @analytics
    @MX @vbank @backend(test) @web-done
    Scenario: Error customer contracts list - analytics
        Given a user with the following criteria
                | criteria           |
                | customer contracts |
        And the user accesses to profile screen
        And the analytics interceptor service is initiated
        When the user accesses to profile contracts list
        Then the analytics events contains the following variables
        | item                    | value                                                       | type              | event         |
        | analytics               | analytics/glomo_base                                        | json schema       | Page View     |
        | version DL              | 20250414_5.0                                                | string            | Page View     |
        | page name               | app:privada:personas:mis contratos:error carga de contratos | string            | Page View     |
        | level 1                 | mis contratos                                               | string            | Page View     |
        | level 2                 | error carga de contratos                                    | string            | Page View     |
        | error page              | error carga de contratos                                    | string            | Page View     |
        | language                | ES                                                          | string            | Page View     |
        | page area               | privada                                                     | string            | Page View     |
        | page intent             | informacion                                                 | string            | Page View     |
        | channel                 | online                                                      | string            | Page View     |
        | page instance ID        | de                                                          | string            | Page View     |
        | page info version       | appVersion                                                  | regexp named      | Page View     |
        | page segment            | personas                                                    | string            | Page View     |
        | sysEnv                  | app                                                         | string            | Page View     |
        | business unit           | BBVA Mexico                                                 | string            | Page View     |
        | site app name           | App BBVA Mexico                                             | string            | Page View     |
        | project name            | Glomo                                                       | string            | Page View     |
        | device mobile           | si                                                          | string            | Page View     |
        | user userState          | logado                                                      | string            | Page View     |
        | user segment global     | 003001                                                      | string            | Page View     |
        | profile ID              | profileID                                                   | regexp named      | Page View     |
        | user gender             | gender                                                      | regexp named      | Page View     |
        | user age                | age                                                         | regexp named      | Page View     |
        | internal campaign       |                                                             | empty array       | Page View     |
        | optimization attributes |                                                             | empty array       | Page View     |
        | application             |                                                             | empty str object  | Page View     |
        | products attributes     |                                                             | empty array       | Page View     |

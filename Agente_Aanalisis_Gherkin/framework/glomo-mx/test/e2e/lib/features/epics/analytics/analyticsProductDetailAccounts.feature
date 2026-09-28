@accountProductDetailAnalytics
Feature: Analytics - Product Detail Accounts

    @ANA_EVENT_PDA001
    @analytics
    @MX
    @web
    @vbank @android @ios
    @backend(test)
    @web-done
    Scenario: App Page View - When the user see account details
        Given a user with the following criteria
            | criteria                |
            | account upgrade alerted |
        And the user accesses to dashboard
        And the analytics interceptor service is initiated
        When the user accesses to the first account product detail
        Then the analytics events contains the following variables
            | item                | value                                | type         | event     |event number|
            | analytics           | analytics/glomo_base                 | json schema  | Page View |1           |
            | version DL          | 20250414_5.0                         | string       | Page View |1           |
            | page name           | app:privada:personas:cuentas         | string       | Page View |1           |
            | level 1             | cuentas                              | string       | Page View |1           |
            | language            | ES                                   | string       | Page View |1           |
            | page area           | privada                              | string       | Page View |1           |
            | page intent         | informacion                          | string       | Page View |1           |
            | channel             | online                               | string       | Page View |1           |
            | page instance ID    | de                                   | string       | Page View |1           |
            | page info version   | appVersion                           | regexp named | Page View |1           |
            | page segment        | personas                             | string       | Page View |1           |
            | sysEnv              | app                                  | string       | Page View |1           |
            | business unit       | BBVA Mexico                          | string       | Page View |1           |
            | site app name       | App BBVA Mexico                      | string       | Page View |1           |
            | project name        | Glomo                                | string       | Page View |1           |
            | device mobile       | si                                   | string       | Page View |1           |
            | user userState      | logado                               | string       | Page View |1           |
            | user segment global | 003001                               | string       | Page View |1           |
            | profile ID          | profileID                            | regexp named | Page View |1           |
            | user gender         | gender                               | regexp named | Page View |1           |
            | user age            | age                                  | regexp named | Page View |1           |

    @ANA_EVENT_PDA002
    @analytics
    @MX
    @web
    @vbank @android @ios
    @backend(test)
    @web-done
    Scenario: Internal Link - when the user see expanded account details day 60
        Given a user with the following criteria
            | criteria                |
            | account upgrade alerted |
        And the user accesses to the operative account product detail
        And the analytics interceptor service is initiated
        When the user accesses to upgrade customer from "product detail"
        Then the analytics events contains the following variables
            | item                | value                                           | type         | event         |event number|
            | analytics           | analytics/glomo_base                            | json schema  | Internal Link |2           |
            | version DL          | 20250414_5.0                                    | string       | Internal Link |2           |
            | page name           | app:privada:personas:cuentas:detalle            | string       | Internal Link |2           |
            | level 1             | cuentas                                         | string       | Internal Link |2           |
            | language            | ES                                              | string       | Internal Link |2           |
            | page area           | privada                                         | string       | Internal Link |2           |
            | page intent         | informacion                                     | string       | Internal Link |2           |
            | channel             | online                                          | string       | Internal Link |2           |
            | page instance ID    | de                                              | string       | Internal Link |2           |
            | page info version   | appVersion                                      | regexp named | Internal Link |2           |
            | page segment        | personas                                        | string       | Internal Link |2           |
            | sysEnv              | app                                             | string       | Internal Link |2           |
            | business unit       | BBVA Mexico                                     | string       | Internal Link |2           |
            | site app name       | App BBVA Mexico                                 | string       | Internal Link |2           |
            | project name        | Glomo                                           | string       | Internal Link |2           |
            | device mobile       | si                                              | string       | Internal Link |2           |
            | user userState      | logado                                          | string       | Internal Link |2           |
            | user segment global | 003001                                          | string       | Internal Link |2           |
            | profile ID          | profileID                                       | regexp named | Internal Link |2           |
            | user gender         | gender                                          | regexp named | Internal Link |2           |
            | user age            | age                                             | regexp named | Internal Link |2           |
            | custom fields       | motivo de actualizacion: restringimos tu cuenta | string       | Internal Link |2           |
            | link name           | actualizar ahora                                | string       | Internal Link |2           |

    @ANA_PDA003
    @analytics
    @MX
    @web
    @vbank @android @ios
    @backend(test)
    @web-done
    Scenario: App Page View - When the user see account details with restrictions
        Given a user with the following criteria
            | criteria                |
            | account upgrade alerted |
        And the user accesses to the operative account product detail
        When the user accesses to why should i upgrade modal
        Then the device contains the following variables
            | item                    | value                                                               | type             |
            | analytics               | analytics/glomo_base                                                | json schema      |
            | version DL              | 20250414_5.0                                                        | string           |
            | page name               | app:privada:personas:cuentas:por que debo actualizar mi informacion | string           |
            | level 1                 | cuentas                                                             | string           |
            | level 2                 | por que debo actualizar mi informacion                              | string           |
            | language                | ES                                                                  | string           |
            | page area               | privada                                                             | string           |
            | page intent             | informacion                                                         | string           |
            | channel                 | online                                                              | string           |
            | page instance ID        | de                                                                  | string           |
            | page info version       | appVersion                                                          | regexp named     |
            | page segment            | personas                                                            | string           |
            | sysEnv                  | app                                                                 | string           |
            | business unit           | BBVA Mexico                                                         | string           |
            | site app name           | App BBVA Mexico                                                     | string           |
            | project name            | Glomo                                                               | string           |
            | device mobile           | si                                                                  | string           |
            | user userState          | logado                                                              | string           |
            | user segment global     | 003001                                                              | string           |
            | profile ID              | profileID                                                           | regexp named     |
            | user gender             | gender                                                              | regexp named     |
            | user age                | age                                                                 | regexp named     |
            | internal campaign       |                                                                     | empty array      |
            | optimization attributes |                                                                     | empty array      |
            | application             |                                                                     | empty str object |
            | products attributes     |                                                                     | empty array      |

    @ANA_PDA004
    @analytics
    @MX
    @web
    @vbank @android @ios
    @backend(test)
    @web-done
    Scenario: App Page View - When the user see detail of a foreign account
        Given a user with the following criteria
            | criteria                |
            | account upgrade alerted |
        And the user accesses to the operative account product detail
        When the user accesses view the data for the second account
        Then the device contains the following variables
            | item                    | value                                | type             |
            | analytics               | analytics/glomo_base                 | json schema      |
            | version DL              | 20250414_5.0                         | string           |
            | page name               | app:privada:personas:cuentas:detalle | string           |
            | level 1                 | cuentas                              | string           |
            | level 2                 | detalle                              | string           |
            | language                | ES                                   | string           |
            | page area               | privada                              | string           |
            | page intent             | informacion                          | string           |
            | channel                 | online                               | string           |
            | page instance ID        | de                                   | string           |
            | page info version       | appVersion                           | regexp named     |
            | page segment            | personas                             | string           |
            | sysEnv                  | app                                  | string           |
            | business unit           | BBVA Mexico                          | string           |
            | site app name           | App BBVA Mexico                      | string           |
            | project name            | Glomo                                | string           |
            | device mobile           | si                                   | string           |
            | user userState          | logado                               | string           |
            | user segment global     | 003001                               | string           |
            | profile ID              | profileID                            | regexp named     |
            | user gender             | gender                               | regexp named     |
            | user age                | age                                  | regexp named     |
            | internal campaign       |                                      | empty array      |
            | optimization attributes |                                      | empty array      |
            | application             |                                      | empty str object |
            | products attributes     |                                      | empty array      |

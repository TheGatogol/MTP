@emergencyTrackingReportsAnalytics
Feature: Analytics - Emergency Tracking Reports

    @ANA_EVENT_AT001
    @analytics
    @MX
    @web
    @vbank @android @ios
    @backend(test)
    @web-done
    Scenario: Tracking Reports - Huella - Detail
        Given a user with the following criteria
            | criteria                  |
            | emergency vehicle reports |
        And the user accesses to dashboard
        And the user goes to "emergency reports with an active report" using deeplink navigation
        And the analytics interceptor service is initiated
        When the user go to tracking report
        Then the analytics events contains the following variables
            | item                    | value                                                    | type             | event     |
            | analytics               | analytics/glomo_base                                     | json schema      | Page View |
            | version DL              | 20250414_5.0                                             | string           | Page View |
            | page name               | app:privada:personas:emergencias:vehiculo:choque:detalle | string           | Page View |
            | level 1                 | emergencias                                              | string           | Page View |
            | level 2                 | vehiculo                                                 | string           | Page View |
            | level 3                 | choque                                                   | string           | Page View |
            | level 4                 | detalle                                                  | string           | Page View |
            | language                | ES                                                       | string           | Page View |
            | page area               | privada                                                  | string           | Page View |
            | page intent             | informacion                                              | string           | Page View |
            | channel                 | online                                                   | string           | Page View |
            | page instance ID        | de                                                       | string           | Page View |
            | page info version       | appVersion                                               | regexp named     | Page View |
            | page segment            | personas                                                 | string           | Page View |
            | sysEnv                  | app                                                      | string           | Page View |
            | business unit           | BBVA Mexico                                              | string           | Page View |
            | site app name           | App BBVA Mexico                                          | string           | Page View |
            | project name            | Glomo                                                    | string           | Page View |
            | device mobile           | si                                                       | string           | Page View |
            | user userState          | logado                                                   | string           | Page View |
            | user segment global     | 003001                                                   | string           | Page View |
            | profile ID              | profileID                                                | regexp named     | Page View |
            | user gender             | gender                                                   | regexp named     | Page View |
            | user age                | age                                                      | regexp named     | Page View |
            | internal campaign       |                                                          | empty array      | Page View |
            | optimization attributes |                                                          | empty array      | Page View |
            | application             |                                                          | empty str object | Page View |
            | products attributes     |                                                          | empty array      | Page View |

    @ANA_EVENT_AT002
    @analytics
    @MX
    @web
    @vbank @android @ios
    @backend(test)
    @web-done
    Scenario: Tracking Reports - External Link - Call The Executive
        Given a user with the following criteria
            | criteria                  |
            | emergency vehicle reports |
        And the user accesses to dashboard
        And the user goes to "emergency reports with an active report" using deeplink navigation
        And the analytics interceptor service is initiated
        And the user go to tracking report
        When the user tab on "call executive"
        Then the analytics events contains the following variables
            | item                    | value                                                    | type             | event         |
            | analytics               | analytics/glomo_base                                     | json schema      | External Link |
            | version DL              | 20250414_5.0                                             | string           | External Link |
            | page name               | app:privada:personas:emergencias:vehiculo:choque:detalle | string           | External Link |
            | level 1                 | emergencias                                              | string           | External Link |
            | level 2                 | vehiculo                                                 | string           | External Link |
            | level 3                 | choque                                                   | string           | External Link |
            | level 4                 | detalle                                                  | string           | External Link |
            | link url                | llamar al ejecutivo                                      | string           | External Link |
            | language                | ES                                                       | string           | External Link |
            | page area               | privada                                                  | string           | External Link |
            | page intent             | informacion                                              | string           | External Link |
            | channel                 | online                                                   | string           | External Link |
            | page instance ID        | de                                                       | string           | External Link |
            | page info version       | appVersion                                               | regexp named     | External Link |
            | page segment            | personas                                                 | string           | External Link |
            | sysEnv                  | app                                                      | string           | External Link |
            | business unit           | BBVA Mexico                                              | string           | External Link |
            | site app name           | App BBVA Mexico                                          | string           | External Link |
            | project name            | Glomo                                                    | string           | External Link |
            | device mobile           | si                                                       | string           | External Link |
            | user userState          | logado                                                   | string           | External Link |
            | user segment global     | 003001                                                   | string           | External Link |
            | profile ID              | profileID                                                | regexp named     | External Link |
            | user gender             | gender                                                   | regexp named     | External Link |
            | user age                | age                                                      | regexp named     | External Link |
            | internal campaign       |                                                          | empty array      | External Link |
            | optimization attributes |                                                          | empty array      | External Link |
            | application             |                                                          | empty str object | External Link |
            | products attributes     |                                                          | empty array      | External Link |

    @ANA_EVENT_AT003
    @analytics
    @MX
    @web
    @vbank @android @ios
    @backend(test)
    @web-done
    Scenario: Tracking Reports - Huella - Cancel Report
        Given a user with the following criteria
            | criteria                  |
            | emergency vehicle reports |
        And the user accesses to dashboard
        And the user goes to "emergency reports with an active report" using deeplink navigation
        And the user go to tracking report
        And the analytics interceptor service is initiated
        When the user tab on "cancel operation"
        Then the analytics events contains the following variables
            | item                    | value                                                             | type             | event     |
            | analytics               | analytics/glomo_base                                              | json schema      | Page View |
            | version DL              | 20250414_5.0                                                      | string           | Page View |
            | page name               | app:privada:personas:emergencias:vehiculo:choque:cancelar reporte | string           | Page View |
            | level 1                 | emergencias                                                       | string           | Page View |
            | level 2                 | vehiculo                                                          | string           | Page View |
            | level 3                 | choque                                                            | string           | Page View |
            | level 4                 | cancelar reporte                                                  | string           | Page View |
            | language                | ES                                                                | string           | Page View |
            | page area               | privada                                                           | string           | Page View |
            | page intent             | informacion                                                       | string           | Page View |
            | channel                 | online                                                            | string           | Page View |
            | page instance ID        | de                                                                | string           | Page View |
            | page info version       | appVersion                                                        | regexp named     | Page View |
            | page segment            | personas                                                          | string           | Page View |
            | sysEnv                  | app                                                               | string           | Page View |
            | business unit           | BBVA Mexico                                                       | string           | Page View |
            | site app name           | App BBVA Mexico                                                   | string           | Page View |
            | project name            | Glomo                                                             | string           | Page View |
            | device mobile           | si                                                                | string           | Page View |
            | user userState          | logado                                                            | string           | Page View |
            | user segment global     | 003001                                                            | string           | Page View |
            | profile ID              | profileID                                                         | regexp named     | Page View |
            | user gender             | gender                                                            | regexp named     | Page View |
            | user age                | age                                                               | regexp named     | Page View |
            | internal campaign       |                                                                   | empty array      | Page View |
            | optimization attributes |                                                                   | empty array      | Page View |
            | application             |                                                                   | empty str object | Page View |
            | products attributes     |                                                                   | empty array      | Page View |

    @ANA_EVENT_AT004
    @analytics
    @MX
    @web
    @vbank @android @ios
    @backend(test)
    @web-done
    Scenario: Tracking Reports - Huella - Cancel Report In Progress
        Given a user with the following criteria
            | criteria                  |
            | emergency vehicle reports |
        And the user accesses to dashboard
        And the user goes to "emergency reports with an active report" using deeplink navigation
        And the user decides to cancel the report
        And the analytics interceptor service is initiated
        When the user tab on "cancel report"
        Then the analytics events contains the following variables
            | item                    | value                                                                           | type             | event     |
            | analytics               | analytics/glomo_base                                                            | json schema      | Page View |
            | version DL              | 20250414_5.0                                                                    | string           | Page View |
            | page name               | app:privada:personas:emergencias:vehiculo:choque:cancelacion reporte en proceso | string           | Page View |
            | level 1                 | emergencias                                                                     | string           | Page View |
            | level 2                 | vehiculo                                                                        | string           | Page View |
            | level 3                 | choque                                                                          | string           | Page View |
            | level 4                 | cancelacion reporte en proceso                                                  | string           | Page View |
            | language                | ES                                                                              | string           | Page View |
            | page area               | privada                                                                         | string           | Page View |
            | page intent             | informacion                                                                     | string           | Page View |
            | channel                 | online                                                                          | string           | Page View |
            | page instance ID        | de                                                                              | string           | Page View |
            | page info version       | appVersion                                                                      | regexp named     | Page View |
            | page segment            | personas                                                                        | string           | Page View |
            | sysEnv                  | app                                                                             | string           | Page View |
            | business unit           | BBVA Mexico                                                                     | string           | Page View |
            | site app name           | App BBVA Mexico                                                                 | string           | Page View |
            | project name            | Glomo                                                                           | string           | Page View |
            | device mobile           | si                                                                              | string           | Page View |
            | user userState          | logado                                                                          | string           | Page View |
            | user segment global     | 003001                                                                          | string           | Page View |
            | profile ID              | profileID                                                                       | regexp named     | Page View |
            | user gender             | gender                                                                          | regexp named     | Page View |
            | user age                | age                                                                             | regexp named     | Page View |
            | internal campaign       |                                                                                 | empty array      | Page View |
            | optimization attributes |                                                                                 | empty array      | Page View |
            | application             |                                                                                 | empty str object | Page View |
            | products attributes     |                                                                                 | empty array      | Page View |

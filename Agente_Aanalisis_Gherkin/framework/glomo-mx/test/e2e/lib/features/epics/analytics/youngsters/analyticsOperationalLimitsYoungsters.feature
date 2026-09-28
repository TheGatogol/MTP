@operationalLimitsYoungstersAnalytics
Feature: Analytics - Operational Limits Youngsters

    @ANA_OLY001
    @analytics
    @MX @web @ios @android @web-done
    @backend(test) @vbank
    Scenario: Access to Parental Control Account Limits - Analytics Page View
        Given a user with the following criteria
            | criteria                   |
            | alternative parent control |
        And the user accesses to parental control account limits
        When the user accepts the "initial information" modal
        Then the device contains the following variables
            | item                    | value                                                                  | type             |
            | analytics               | analytics/glomo_base                                                   | json schema      |
            | version DL              | 20250414_5.0                                                           | string           |
            | page name               | app:privada:personas:control parental:limites de operacion:informacion | string           |
            | level 1                 | control parental                                                       | string           |
            | level 2                 | limites de operacion                                                   | string           |
            | level 3                 | informacion                                                            | string           |
            | language                | ES                                                                     | string           |
            | page area               | privada                                                                | string           |
            | page intent             | informacion                                                            | string           |
            | channel                 | online                                                                 | string           |
            | page instance ID        | de                                                                     | string           |
            | page info version       | appVersion                                                             | regexp named     |
            | page segment            | personas                                                               | string           |
            | sysEnv                  | app                                                                    | string           |
            | business unit           | BBVA Mexico                                                            | string           |
            | site app name           | App BBVA Mexico                                                        | string           |
            | project name            | Glomo                                                                  | string           |
            | device mobile           | si                                                                     | string           |
            | user userState          | logado                                                                 | string           |
            | profile ID              | profileID                                                              | regexp named     |
            | user gender             | gender                                                                 | regexp named     |
            | user age                | age                                                                    | regexp named     |
            | internal campaign       |                                                                        | empty array      |
            | optimization attributes |                                                                        | empty array      |
            | application             |                                                                        | empty str object |
            | products attributes     |                                                                        | empty array      |

    @ANA_OLY002
    @analytics
    @MX @web @ios @android @web-done
    @backend(test) @vbank
    Scenario: The parent user accesses the help modal - Analytics Page View
        Given a user with the following criteria
            | criteria                   |
            | alternative parent control |
        And the user accesses to parental control account limits
        And the user accepts the "initial information" modal
        When the user accesses to "edit monthly limits" help modal
        Then the device contains the following variables
            | item                    | value                                                              | type             |
            | analytics               | analytics/glomo_base                                               | json schema      |
            | version DL              | 20250414_5.0                                                       | string           |
            | page name               | app:privada:personas:control parental:limites de operacion:detalle | string           |
            | level 1                 | control parental                                                   | string           |
            | level 2                 | limites de operacion                                               | string           |
            | level 3                 | detalle                                                            | string           |
            | language                | ES                                                                 | string           |
            | page area               | privada                                                            | string           |
            | page intent             | informacion                                                        | string           |
            | channel                 | online                                                             | string           |
            | page instance ID        | de                                                                 | string           |
            | page info version       | appVersion                                                         | regexp named     |
            | page segment            | personas                                                           | string           |
            | sysEnv                  | app                                                                | string           |
            | business unit           | BBVA Mexico                                                        | string           |
            | site app name           | App BBVA Mexico                                                    | string           |
            | project name            | Glomo                                                              | string           |
            | device mobile           | si                                                                 | string           |
            | user userState          | logado                                                             | string           |
            | profile ID              | profileID                                                          | regexp named     |
            | user gender             | gender                                                             | regexp named     |
            | user age                | age                                                                | regexp named     |
            | internal campaign       |                                                                    | empty array      |
            | optimization attributes |                                                                    | empty array      |
            | application             |                                                                    | empty str object |
            | products attributes     |                                                                    | empty array      |

    @ANA_EVENT_OLY0003
    @analytics
    @MX @web @ios @android @web-done
    @backend(test) @vbank
    Scenario: The parent user accesses the montly modal - Analytics Page View
        Given a user with the following criteria
            | criteria                   |
            | alternative parent control |
        And the user accesses to parental control account limits
        And the user accepts the "initial information" modal
        And the analytics interceptor service is initiated
        When the user accesses to "edit monthly limits" help modal
        Then the analytics events contains the following variables
            | item                    | value                                                                               | type             | event     |
            | analytics               | analytics/glomo_base                                                                | json schema      | Page View |
            | version DL              | 20250414_5.0                                                                        | string           | Page View |
            | page name               | app:privada:personas:control parental:limites de operacion:modificar limite mensual | string           | Page View |
            | level 1                 | control parental                                                                    | string           | Page View |
            | level 2                 | limites de operacion                                                                | string           | Page View |
            | level 3                 | modificar limite mensual                                                            | string           | Page View |
            | language                | ES                                                                                  | string           | Page View |
            | page area               | privada                                                                             | string           | Page View |
            | page intent             | informacion                                                                         | string           | Page View |
            | channel                 | online                                                                              | string           | Page View |
            | page instance ID        | de                                                                                  | string           | Page View |
            | page info version       | appVersion                                                                          | regexp named     | Page View |
            | page segment            | personas                                                                            | string           | Page View |
            | sysEnv                  | app                                                                                 | string           | Page View |
            | business unit           | BBVA Mexico                                                                         | string           | Page View |
            | site app name           | App BBVA Mexico                                                                     | string           | Page View |
            | project name            | Glomo                                                                               | string           | Page View |
            | device mobile           | si                                                                                  | string           | Page View |
            | user userState          | logado                                                                              | string           | Page View |
            | profile ID              | profileID                                                                           | regexp named     | Page View |
            | user gender             | gender                                                                              | regexp named     | Page View |
            | user age                | age                                                                                 | regexp named     | Page View |
            | internal campaign       |                                                                                     | empty array      | Page View |
            | optimization attributes |                                                                                     | empty array      | Page View |
            | application             |                                                                                     | empty str object | Page View |
            | products attributes     |                                                                                     | empty array      | Page View |

    @ANA_EVENT_OLY0004
    @analytics
    @MX @web @ios @android @web-done
    @backend(test) @vbank
    Scenario: The parent user accesses the daily modal - Analytics Page View
        Given a user with the following criteria
            | criteria                   |
            | alternative parent control |
        And the user accesses to parental control account limits
        And the user accepts the "initial information" modal
        And the analytics interceptor service is initiated
        When the user accesses to "edit daily limits" help modal
        Then the analytics events contains the following variables
            | item                    | value                                                                              | type             | event     |
            | analytics               | analytics/glomo_base                                                               | json schema      | Page View |
            | version DL              | 20250414_5.0                                                                       | string           | Page View |
            | page name               | app:privada:personas:control parental:limites de operacion:modificar limite diario | string           | Page View |
            | level 1                 | control parental                                                                   | string           | Page View |
            | level 2                 | limites de operacion                                                               | string           | Page View |
            | level 3                 | modificar limite diario                                                            | string           | Page View |
            | language                | ES                                                                                 | string           | Page View |
            | page area               | privada                                                                            | string           | Page View |
            | page intent             | informacion                                                                        | string           | Page View |
            | channel                 | online                                                                             | string           | Page View |
            | page instance ID        | de                                                                                 | string           | Page View |
            | page info version       | appVersion                                                                         | regexp named     | Page View |
            | page segment            | personas                                                                           | string           | Page View |
            | sysEnv                  | app                                                                                | string           | Page View |
            | business unit           | BBVA Mexico                                                                        | string           | Page View |
            | site app name           | App BBVA Mexico                                                                    | string           | Page View |
            | project name            | Glomo                                                                              | string           | Page View |
            | device mobile           | si                                                                                 | string           | Page View |
            | user userState          | logado                                                                             | string           | Page View |
            | profile ID              | profileID                                                                          | regexp named     | Page View |
            | user gender             | gender                                                                             | regexp named     | Page View |
            | user age                | age                                                                                | regexp named     | Page View |
            | internal campaign       |                                                                                    | empty array      | Page View |
            | optimization attributes |                                                                                    | empty array      | Page View |
            | application             |                                                                                    | empty str object | Page View |
            | products attributes     |                                                                                    | empty array      | Page View |

    @ANA_EVENT_OLY0005
    @analytics
    @MX @web @ios @android @web-done
    @backend(test) @vbank
    Scenario: The parent user accesses the operation modal - Analytics Page View
        Given a user with the following criteria
            | criteria                   |
            | alternative parent control |
        And the user accesses to parental control account limits
        And the user accepts the "initial information" modal
        And the analytics interceptor service is initiated
        When the user accesses to "edit operation limits" help modal
        Then the analytics events contains the following variables
            | item                    | value                                                                                     | type             | event     |
            | analytics               | analytics/glomo_base                                                                      | json schema      | Page View |
            | version DL              | 20250414_5.0                                                                              | string           | Page View |
            | page name               | app:privada:personas:control parental:limites de operacion:modificar limite por operacion | string           | Page View |
            | level 1                 | control parental                                                                          | string           | Page View |
            | level 2                 | limites de operacion                                                                      | string           | Page View |
            | level 3                 | modificar limite por operacion                                                            | string           | Page View |
            | language                | ES                                                                                        | string           | Page View |
            | page area               | privada                                                                                   | string           | Page View |
            | page intent             | informacion                                                                               | string           | Page View |
            | channel                 | online                                                                                    | string           | Page View |
            | page instance ID        | de                                                                                        | string           | Page View |
            | page info version       | appVersion                                                                                | regexp named     | Page View |
            | page segment            | personas                                                                                  | string           | Page View |
            | sysEnv                  | app                                                                                       | string           | Page View |
            | business unit           | BBVA Mexico                                                                               | string           | Page View |
            | site app name           | App BBVA Mexico                                                                           | string           | Page View |
            | project name            | Glomo                                                                                     | string           | Page View |
            | device mobile           | si                                                                                        | string           | Page View |
            | user userState          | logado                                                                                    | string           | Page View |
            | profile ID              | profileID                                                                                 | regexp named     | Page View |
            | user gender             | gender                                                                                    | regexp named     | Page View |
            | user age                | age                                                                                       | regexp named     | Page View |
            | internal campaign       |                                                                                           | empty array      | Page View |
            | optimization attributes |                                                                                           | empty array      | Page View |
            | application             |                                                                                           | empty str object | Page View |
            | products attributes     |                                                                                           | empty array      | Page View |

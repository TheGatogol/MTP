@analyticsChecksManagementDetailAndList
Feature: Analytics Checks Management Detail And List

    @ANA_CML001
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: List & Searching screen appears
        Given a user with the following criteria
            | criteria                                    |
            | pesos account with checks management active |
            | has accepted the management service terms   |
        And the user accesses to checks operatives with checks management active
        And the analytics interceptor service is initiated
        When the user selects the checks management option with "activated" service terms
        Then the analytics events contains the following variables:
            | item                    | value                        | type             | event     |
            | analytics               | analytics/glomo_base         | json schema      | Page View |
            | version DL              | 20250414_5.0                 | string           | Page View |
            | page name               | app:privada:personas:cheques | string           | Page View |
            | level 1                 | cheques                      | string           | Page View |
            | language                | ES                           | string           | Page View |
            | page area               | privada                      | string           | Page View |
            | page intent             | informacion                  | string           | Page View |
            | channel                 | online                       | string           | Page View |
            | page instance ID        | de                           | string           | Page View |
            | page info version       | appVersion                   | regexp named     | Page View |
            | page segment            | personas                     | string           | Page View |
            | sysEnv                  | app                          | string           | Page View |
            | business unit           | BBVA Mexico                  | string           | Page View |
            | site app name           | App BBVA Mexico              | string           | Page View |
            | project name            | Glomo                        | string           | Page View |
            | device mobile           | si                           | string           | Page View |
            | user userState          | logado                       | string           | Page View |
            | user segment global     | 003001                       | string           | Page View |
            | profile ID              | profileID                    | regexp named     | Page View |
            | user age                | age                          | regexp named     | Page View |
            | user gender             | gender                       | regexp named     | Page View |
            | internal campaign       |                              | empty array      | Page View |
            | optimization attributes |                              | empty array      | Page View |
            | application             |                              | empty str object | Page View |
            | products attributes     |                              | empty array      | Page View |

    @ANA_CML002
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: List & Searching view all
        Given a user with the following criteria
            | criteria                                    |
            | pesos account with checks management active |
            | has accepted the management service terms   |
        And the user accesses to checks management list
        And the analytics interceptor service is initiated
        When the user accesses view all checks from the list
        Then the analytics events contains the following variables:
            | item                    | value                              | type             | event     |
            | analytics               | analytics/glomo_base               | json schema      | Page View |
            | version DL              | 20250414_5.0                       | string           | Page View |
            | page name               | app:privada:personas:cheques:lista | string           | Page View |
            | level 1                 | cheques                            | string           | Page View |
            | level 2                 | lista                              | string           | Page View |
            | language                | ES                                 | string           | Page View |
            | page area               | privada                            | string           | Page View |
            | page intent             | informacion                        | string           | Page View |
            | channel                 | online                             | string           | Page View |
            | page instance ID        | de                                 | string           | Page View |
            | page info version       | appVersion                         | regexp named     | Page View |
            | page segment            | personas                           | string           | Page View |
            | sysEnv                  | app                                | string           | Page View |
            | business unit           | BBVA Mexico                        | string           | Page View |
            | site app name           | App BBVA Mexico                    | string           | Page View |
            | project name            | Glomo                              | string           | Page View |
            | device mobile           | si                                 | string           | Page View |
            | user userState          | logado                             | string           | Page View |
            | user segment global     | 003001                             | string           | Page View |
            | profile ID              | profileID                          | regexp named     | Page View |
            | user age                | age                                | regexp named     | Page View |
            | user gender             | gender                             | regexp named     | Page View |
            | internal campaign       |                                    | empty array      | Page View |
            | optimization attributes |                                    | empty array      | Page View |
            | application             |                                    | empty str object | Page View |
            | products attributes     |                                    | empty array      | Page View |

    @ANA_CML003
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario Outline:  Detail screen appears charged
        Given a user with the following criteria
            | criteria                                    |
            | pesos account with checks management active |
            | has accepted the management service terms   |
        And the user accesses to options management screen
        And the analytics interceptor service is initiated
        When the user accesses a "<check_status>" option Management screen
        Then the analytics events contains the following variables:
            | item                    | value                                | type             | event     |
            | analytics               | analytics/glomo_base                 | json schema      | Page View |
            | version DL              | 20250414_5.0                         | string           | Page View |
            | page name               | app:privada:personas:cheques:detalle | string           | Page View |
            | level 1                 | cheques                              | string           | Page View |
            | level 2                 | detalle                              | string           | Page View |
            | language                | ES                                   | string           | Page View |
            | page area               | privada                              | string           | Page View |
            | page intent             | informacion                          | string           | Page View |
            | channel                 | online                               | string           | Page View |
            | page instance ID        | de                                   | string           | Page View |
            | page info version       | appVersion                           | regexp named     | Page View |
            | page segment            | personas                             | string           | Page View |
            | sysEnv                  | app                                  | string           | Page View |
            | business unit           | BBVA Mexico                          | string           | Page View |
            | site app name           | App BBVA Mexico                      | string           | Page View |
            | project name            | Glomo                                | string           | Page View |
            | device mobile           | si                                   | string           | Page View |
            | user userState          | logado                               | string           | Page View |
            | user segment global     | 003001                               | string           | Page View |
            | profile ID              | profileID                            | regexp named     | Page View |
            | user age                | age                                  | regexp named     | Page View |
            | user gender             | gender                               | regexp named     | Page View |
            | internal campaign       |                                      | empty array      | Page View |
            | optimization attributes |                                      | empty array      | Page View |
            | application             |                                      | empty str object | Page View |
            | products attributes     |                                      | empty array      | Page View |

        Examples:
            | check_status |
            | charged      |

    @ANA_CML004
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: List & Searching screen appears no checks
        Given a user with the following criteria
            | criteria                                  |
            | no checks                                 |
            | has accepted the management service terms |
        And the user accesses to checks operatives with checks management active
        And the analytics interceptor service is initiated
        When the user selects the checks management option with "activated" service terms
        Then the analytics events contains the following variables:
            | item                    | value                              | type             | event      |
            | analytics               | analytics/glomo_base               | json schema      | Site Error |
            | version DL              | 20250414_5.0                       | string           | Site Error |
            | page name               | app:privada:personas:cheques:lista | string           | Site Error |
            | level 1                 | cheques                            | string           | Site Error |
            | level 2                 | lista                              | string           | Site Error |
            | language                | ES                                 | string           | Site Error |
            | page area               | privada                            | string           | Site Error |
            | page intent             | informacion                        | string           | Site Error |
            | channel                 | online                             | string           | Site Error |
            | page instance ID        | de                                 | string           | Site Error |
            | page info version       | appVersion                         | regexp named     | Site Error |
            | page segment            | personas                           | string           | Site Error |
            | sysEnv                  | app                                | string           | Site Error |
            | business unit           | BBVA Mexico                        | string           | Site Error |
            | site app name           | App BBVA Mexico                    | string           | Site Error |
            | project name            | Glomo                              | string           | Site Error |
            | device mobile           | si                                 | string           | Site Error |
            | user userState          | logado                             | string           | Site Error |
            | user segment global     | 003001                             | string           | Site Error |
            | profile ID              | profileID                          | regexp named     | Site Error |
            | user age                | age                                | regexp named     | Site Error |
            | user gender             | gender                             | regexp named     | Site Error |
            | site error              | error no hay cheques liberados     | string           | Site Error |
            | internal campaign       |                                    | empty array      | Site Error |
            | optimization attributes |                                    | empty array      | Site Error |
            | application             |                                    | empty str object | Site Error |
            | products attributes     |                                    | empty array      | Site Error |

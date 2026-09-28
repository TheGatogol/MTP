@disabilityVideocallHearingTacticalAnalytics
Feature: Analytics - Disability Videocall Hearing Tactical

    @ANA_DVHT001
    @analytics
    @MX @web @android @ios
    @backend(test) @vbank
    @web-done
    Scenario: Disability Videocall - Help Videocall LSM
        Given a user with the following criteria
            | criteria             |
            | disability videocall |
        And the user starts the application at date:
            | day   | 26   |
            | month | 01   |
            | year  | 2024 |
            | hour  | 12   |
        When the user accesses to disability videocall
        Then the device contains the following variables
            | item                    | value                                       | type             |
            | analytics               | analytics/glomo_base                        | json schema      |
            | version DL              | 20250414_5.0                                | string           |
            | page name               | app:privada:personas:ayuda:videollamada lsm | string           |
            | level 1                 | ayuda                                       | string           |
            | level 2                 | videollamada lsm                            | string           |
            | language                | ES                                          | string           |
            | page area               | privada                                     | string           |
            | page intent             | informacion                                 | string           |
            | channel                 | online                                      | string           |
            | page instance ID        | de                                          | string           |
            | page info version       | appVersion                                  | regexp named     |
            | page segment            | personas                                    | string           |
            | sysEnv                  | app                                         | string           |
            | business unit           | BBVA Mexico                                 | string           |
            | site app name           | App BBVA Mexico                             | string           |
            | project name            | Glomo                                       | string           |
            | device mobile           | si                                          | string           |
            | user userState          | logado                                      | string           |
            | user segment global     | 003001                                      | string           |
            | profile ID              | profileID                                   | regexp named     |
            | user gender             | gender                                      | regexp named     |
            | user age                | age                                         | regexp named     |
            | internal campaign       |                                             | empty array      |
            | optimization attributes |                                             | empty array      |
            | application             |                                             | empty str object |
            | products attributes     |                                             | empty array      |

    @ANA_DVHT002
    @analytics
    @MX @web @android @ios
    @backend(test) @vbank
    @web-done
    Scenario: Disability Videocall - Put Attention
        Given a user with the following criteria
            | criteria             |
            | disability videocall |
        And the user starts the application at date:
            | day   | 26   |
            | month | 01   |
            | year  | 2024 |
            | hour  | 12   |
        And the user accesses to disability videocall
        When the user accesses to disability videocall put attention with "success network" status
        Then the device contains the following variables
            | item                    | value                                                    | type             |
            | analytics               | analytics/glomo_base                                     | json schema      |
            | version DL              | 20250414_5.0                                             | string           |
            | page name               | app:privada:personas:ayuda:videollamada lsm:pon atencion | string           |
            | level 1                 | ayuda                                                    | string           |
            | level 2                 | videollamada lsm                                         | string           |
            | level 3                 | pon atencion                                             | string           |
            | language                | ES                                                       | string           |
            | page area               | privada                                                  | string           |
            | page intent             | informacion                                              | string           |
            | channel                 | online                                                   | string           |
            | page instance ID        | de                                                       | string           |
            | page info version       | appVersion                                               | regexp named     |
            | page segment            | personas                                                 | string           |
            | sysEnv                  | app                                                      | string           |
            | business unit           | BBVA Mexico                                              | string           |
            | site app name           | App BBVA Mexico                                          | string           |
            | project name            | Glomo                                                    | string           |
            | device mobile           | si                                                       | string           |
            | user userState          | logado                                                   | string           |
            | user segment global     | 003001                                                   | string           |
            | profile ID              | profileID                                                | regexp named     |
            | user gender             | gender                                                   | regexp named     |
            | user age                | age                                                      | regexp named     |
            | internal campaign       |                                                          | empty array      |
            | optimization attributes |                                                          | empty array      |
            | application             |                                                          | empty str object |
            | products attributes     |                                                          | empty array      |

    @ANA_DVHT003
    @analytics
    @MX @web @android @ios
    @backend(test) @vbank
    @web-done
    Scenario: Disability Videocall - Calling
        Given a user with the following criteria
            | criteria             |
            | disability videocall |
        And the user starts the application at date:
            | day   | 01   |
            | month | 02   |
            | year  | 2024 |
            | hour  | 12   |
        And the user accesses to disability videocall
        When the user accesses to disability videocall put attention with "success network" status
        And the user accesses the lobby with a timeout of "300000" milliseconds
        Then the device contains the following variables
            | item                    | value                                                | type             |
            | analytics               | analytics/glomo_base                                 | json schema      |
            | version DL              | 20250414_5.0                                         | string           |
            | page name               | app:privada:personas:ayuda:videollamada lsm:llamando | string           |
            | level 1                 | ayuda                                                | string           |
            | level 2                 | videollamada lsm                                     | string           |
            | level 3                 | llamando                                             | string           |
            | language                | ES                                                   | string           |
            | page area               | privada                                              | string           |
            | page intent             | informacion                                          | string           |
            | channel                 | online                                               | string           |
            | page instance ID        | de                                                   | string           |
            | page info version       | appVersion                                           | regexp named     |
            | page segment            | personas                                             | string           |
            | sysEnv                  | app                                                  | string           |
            | business unit           | BBVA Mexico                                          | string           |
            | site app name           | App BBVA Mexico                                      | string           |
            | project name            | Glomo                                                | string           |
            | device mobile           | si                                                   | string           |
            | user userState          | logado                                               | string           |
            | user segment global     | 003001                                               | string           |
            | profile ID              | profileID                                            | regexp named     |
            | user gender             | gender                                               | regexp named     |
            | user age                | age                                                  | regexp named     |
            | internal campaign       |                                                      | empty array      |
            | optimization attributes |                                                      | empty array      |
            | application             |                                                      | empty str object |
            | products attributes     |                                                      | empty array      |

    @ANA_DVHT004
    @analytics
    @MX @web @android @ios
    @manual @JIRA.GLOMOMX-218241
    Scenario: Disability Videocall - Waiting Time is Over
        Given a user with the following criteria
            | criteria             |
            | disability videocall |
        And the user starts the application at date:
            | day   | 01   |
            | month | 02   |
            | year  | 2024 |
            | hour  | 12   |
        And the user accesses to disability videocall
        When the user accesses to disability videocall put attention with "success network" status
        And the user accesses the lobby the waiting time is over only for analytics
        Then the device contains the following variables
            | item                    | value                                                                    | type             |
            | analytics               | analytics/glomo_base                                                     | json schema      |
            | version DL              | 20250414_5.0                                                             | string           |
            | page name               | app:privada:personas:ayuda:videollamada lsm:el tiempo de espera se acabo | string           |
            | level 1                 | ayuda                                                                    | string           |
            | level 2                 | videollamada lsm                                                         | string           |
            | level 3                 | el tiempo de espera se acabo                                             | string           |
            | language                | ES                                                                       | string           |
            | page area               | privada                                                                  | string           |
            | page intent             | informacion                                                              | string           |
            | channel                 | online                                                                   | string           |
            | page instance ID        | de                                                                       | string           |
            | page info version       | appVersion                                                               | regexp named     |
            | page segment            | personas                                                                 | string           |
            | sysEnv                  | app                                                                      | string           |
            | business unit           | BBVA Mexico                                                              | string           |
            | site app name           | App BBVA Mexico                                                          | string           |
            | project name            | Glomo                                                                    | string           |
            | device mobile           | si                                                                       | string           |
            | user userState          | logado                                                                   | string           |
            | user segment global     | 003001                                                                   | string           |
            | profile ID              | profileID                                                                | regexp named     |
            | user gender             | gender                                                                   | regexp named     |
            | user age                | age                                                                      | regexp named     |
            | internal campaign       |                                                                          | empty array      |
            | optimization attributes |                                                                          | empty array      |
            | application             |                                                                          | empty str object |
            | products attributes     |                                                                          | empty array      |

    @ANA_DVHT005
    @analytics
    @MX @web @android @ios
    @backend(test) @vbank
    @web-done
    Scenario: Disability Videocall - After Hours
        Given a user with the following criteria
            | criteria             |
            | disability videocall |
        And the user starts the application at date:
            | day   | 01   |
            | month | 02   |
            | year  | 2024 |
            | hour  | 20   |
        When the user accesses to disability videocall
        Then the device contains the following variables
            | item                    | value                                                         | type             |
            | analytics               | analytics/glomo_base                                          | json schema      |
            | version DL              | 20250414_5.0                                                  | string           |
            | page name               | app:privada:personas:ayuda:videollamada lsm:fuera del horario | string           |
            | level 1                 | ayuda                                                         | string           |
            | level 2                 | videollamada lsm                                              | string           |
            | level 3                 | fuera del horario                                             | string           |
            | language                | ES                                                            | string           |
            | page area               | privada                                                       | string           |
            | page intent             | informacion                                                   | string           |
            | channel                 | online                                                        | string           |
            | page instance ID        | de                                                            | string           |
            | page info version       | appVersion                                                    | regexp named     |
            | page segment            | personas                                                      | string           |
            | sysEnv                  | app                                                           | string           |
            | business unit           | BBVA Mexico                                                   | string           |
            | site app name           | App BBVA Mexico                                               | string           |
            | project name            | Glomo                                                         | string           |
            | device mobile           | si                                                            | string           |
            | user userState          | logado                                                        | string           |
            | user segment global     | 003001                                                        | string           |
            | profile ID              | profileID                                                     | regexp named     |
            | user gender             | gender                                                        | regexp named     |
            | user age                | age                                                           | regexp named     |
            | internal campaign       |                                                               | empty array      |
            | optimization attributes |                                                               | empty array      |
            | application             |                                                               | empty str object |
            | products attributes     |                                                               | empty array      |

    @ANA_DVHT006
    @analytics
    @MX @web @android @ios
    @backend(test) @vbank
    @web-done
    Scenario: Disability Videocall - Error Network Status
        Given a user with the following criteria
            | criteria             |
            | disability videocall |
        And the user starts the application at date:
            | day   | 01   |
            | month | 02   |
            | year  | 2024 |
            | hour  | 12   |
        And the user accesses to disability videocall
        When the user accesses to disability videocall put attention with "error network" status
        Then the device contains the following variables
            | item                    | value                                                                      | type             |
            | analytics               | analytics/glomo_base                                                       | json schema      |
            | version DL              | 20250414_5.0                                                               | string           |
            | page name               | app:privada:personas:ayuda:videollamada lsm:error conexion a internet bajo | string           |
            | level 1                 | ayuda                                                                      | string           |
            | level 2                 | videollamada lsm                                                           | string           |
            | level 3                 | error conexion a internet bajo                                             | string           |
            | error page              | error conexion a internet bajo                                             | string           |
            | language                | ES                                                                         | string           |
            | page area               | privada                                                                    | string           |
            | page intent             | informacion                                                                | string           |
            | channel                 | online                                                                     | string           |
            | page instance ID        | de                                                                         | string           |
            | page info version       | appVersion                                                                 | regexp named     |
            | page segment            | personas                                                                   | string           |
            | sysEnv                  | app                                                                        | string           |
            | business unit           | BBVA Mexico                                                                | string           |
            | site app name           | App BBVA Mexico                                                            | string           |
            | project name            | Glomo                                                                      | string           |
            | device mobile           | si                                                                         | string           |
            | user userState          | logado                                                                     | string           |
            | user segment global     | 003001                                                                     | string           |
            | profile ID              | profileID                                                                  | regexp named     |
            | user gender             | gender                                                                     | regexp named     |
            | user age                | age                                                                        | regexp named     |
            | internal campaign       |                                                                            | empty array      |
            | optimization attributes |                                                                            | empty array      |
            | application             |                                                                            | empty str object |
            | products attributes     |                                                                            | empty array      |

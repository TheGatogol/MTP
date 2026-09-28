@assistanceSectionAnalytics
Feature: Analytics Assistance Section

    @ANA_AS001
    @analytics
    @MX
    @web-done
    @web
    @ios @android
    @vbank
    @backend(test)
    Scenario: Assistance section - analytics event page view with advisor
        Given a user with the following criteria
            | criteria     |
            | operationals |
            | advisor      |
        When the user accesses assistance section
        Then the device contains the following variables
            | item                    | value                      | type             |
            | analytics               | analytics/glomo_base       | json schema      |
            | version DL              | 20241031_4.3               | string           |
            | page name               | app:privada:personas:ayuda | string           |
            | level 1                 | ayuda                      | string           |
            | language                | ES                         | string           |
            | page area               | privada                    | string           |
            | page intent             | informacion                | string           |
            | channel                 | online                     | string           |
            | page instance ID        | de                         | string           |
            | page info version       | appVersion                 | regexp named     |
            | page segment            | personas                   | string           |
            | sysEnv                  | app                        | string           |
            | business unit           | BBVA Mexico                | string           |
            | site app name           | App BBVA Mexico            | string           |
            | project name            | Glomo                      | string           |
            | device mobile           | si                         | string           |
            | user userState          | logado                     | string           |
            | user segment global     | 003001                     | string           |
            | profile ID              | profileID                  | regexp named     |
            | user gender             | gender                     | regexp named     |
            | user age                | age                        | regexp named     |
            | internal campaign       |                            | empty array      |
            | optimization attributes |                            | empty array      |
            | application             |                            | empty str object |
            | products attributes     |                            | empty array      |

    @ANA_AS002
    @analytics
    @MX
    @web-done
    @web
    @ios @android
    @vbank
    @backend(test)
    Scenario Outline: Assistance section - analytics event external link  <case>
        Given a user with the following criteria
            | criteria     |
            | operationals |
            | <user>       |
        When the user accesses assistance section
        And the user access "<case>" in assistance
        Then the device contains the following variables
            | item                    | value                      | type             |
            | analytics               | analytics/glomo_base       | json schema      |
            | version DL              | 20241031_4.3               | string           |
            | page name               | app:privada:personas:ayuda | string           |
            | level 1                 | ayuda                      | string           |
            | language                | ES                         | string           |
            | page area               | privada                    | string           |
            | page intent             | informacion                | string           |
            | channel                 | online                     | string           |
            | page instance ID        | de                         | string           |
            | page info version       | appVersion                 | regexp named     |
            | page segment            | personas                   | string           |
            | sysEnv                  | app                        | string           |
            | business unit           | BBVA Mexico                | string           |
            | site app name           | App BBVA Mexico            | string           |
            | project name            | Glomo                      | string           |
            | link url                | <button_click>             | string           |
            | device mobile           | si                         | string           |
            | user userState          | logado                     | string           |
            | user segment global     | 003001                     | string           |
            | profile ID              | profileID                  | regexp named     |
            | user gender             | gender                     | regexp named     |
            | user age                | age                        | regexp named     |
            | internal campaign       |                            | empty array      |
            | optimization attributes |                            | empty array      |
            | application             |                            | empty str object |
            | products attributes     |                            | empty array      |
        Examples:
            | user    | button_click             | case          |
            | advisor | llamar asesor personal   | advisor BBVA  |
            | account | llamar a linea bbva      | line BBVA     |

    @ANA_EVENT_AS003
    @analytics
    @MX
    @web-done
    @web
    @ios @android
    @vbank
    @backend(test)
    Scenario: Assistance section line bbva out hours - analytics event page view
        Given a user with the following criteria
            | criteria     |
            | operationals |
            | account      |
        When the user starts the application at date:
            | hour  | 2    |
            | day   | 6    |
            | month | 9    |
            | year  | 2023 |
        And the user accesses assistance section
        And the analytics interceptor service is initiated
        And the user access "line BBVA" in assistance
        Then the analytics events contains the following variables
            | item                    | value                                                            | type             | event     |
            | analytics               | analytics/glomo_base                                             | json schema      | Page View |
            | version DL              | 20241031_4.3                                                     | string           | Page View |
            | page name               | app:privada:personas:asesor personal:linea bbva fuera de horario | string           | Page View |
            | level 1                 | asesor personal                                                  | string           | Page View |
            | level 2                 | linea bbva fuera de horario                                      | string           | Page View |
            | language                | ES                                                               | string           | Page View |
            | page area               | privada                                                          | string           | Page View |
            | page intent             | informacion                                                      | string           | Page View |
            | channel                 | online                                                           | string           | Page View |
            | page instance ID        | de                                                               | string           | Page View |
            | page info version       | appVersion                                                       | regexp named     | Page View |
            | page segment            | personas                                                         | string           | Page View |
            | sysEnv                  | app                                                              | string           | Page View |
            | business unit           | BBVA Mexico                                                      | string           | Page View |
            | site app name           | App BBVA Mexico                                                  | string           | Page View |
            | project name            | Glomo                                                            | string           | Page View |
            | device mobile           | si                                                               | string           | Page View |
            | user userState          | logado                                                           | string           | Page View |
            | user segment global     | 003001                                                           | string           | Page View |
            | profile ID              | profileID                                                        | regexp named     | Page View |
            | user gender             | gender                                                           | regexp named     | Page View |
            | user age                | age                                                              | regexp named     | Page View |
            | internal campaign       |                                                                  | empty array      | Page View |
            | optimization attributes |                                                                  | empty array      | Page View |
            | application             |                                                                  | empty str object | Page View |
            | products attributes     |                                                                  | empty array      | Page View |

    @ANA_EVENT_AS004
    @analytics
    @MX
    @web-done
    @web
    @ios @android
    @vbank
    @backend(test)
    @manual @JIRA.GLOMOMX-131811
    Scenario: Assistance section line BBVA available - analytics event page view
        Given a user with the following criteria
            | criteria     |
            | operationals |
            | advisor      |
        When the user starts the application at date:
            | hour  | 22   |
            | day   | 6    |
            | month | 9    |
            | year  | 2023 |
        And the user accesses assistance section
        And the analytics interceptor service is initiated
        And the user access "advisor BBVA" in assistance
        Then the analytics events contains the following variables
            | item                    | value                                                  | type             | event     |
            | analytics               | analytics/glomo_base                                   | json schema      | Page View |
            | version DL              | 20241031_4.3                                           | string           | Page View |
            | page name               | app:privada:personas:ayuda:fuera de horario linea bbva | string           | Page View |
            | level 1                 | ayuda                                                  | string           | Page View |
            | level 2                 | fuera de horario linea bbva                            | string           | Page View |
            | language                | ES                                                     | string           | Page View |
            | page area               | privada                                                | string           | Page View |
            | page intent             | informacion                                            | string           | Page View |
            | channel                 | online                                                 | string           | Page View |
            | page instance ID        | de                                                     | string           | Page View |
            | page info version       | appVersion                                             | regexp named     | Page View |
            | page segment            | personas                                               | string           | Page View |
            | sysEnv                  | app                                                    | string           | Page View |
            | business unit           | BBVA Mexico                                            | string           | Page View |
            | site app name           | App BBVA Mexico                                        | string           | Page View |
            | project name            | Glomo                                                  | string           | Page View |
            | device mobile           | si                                                     | string           | Page View |
            | user userState          | logado                                                 | string           | Page View |
            | user segment global     | 003001                                                 | string           | Page View |
            | profile ID              | profileID                                              | regexp named     | Page View |
            | user gender             | gender                                                 | regexp named     | Page View |
            | user age                | age                                                    | regexp named     | Page View |
            | internal campaign       |                                                        | empty array      | Page View |
            | optimization attributes |                                                        | empty array      | Page View |
            | application             |                                                        | empty str object | Page View |
            | products attributes     |                                                        | empty array      | Page View |

    @ANA_EVENT_AS005
    @analytics
    @MX
    @web-done
    @web
    @ios @android
    @vbank
    @backend(test)
    @manual @JIRA.GLOMOMX-131811
    Scenario: Assistance section out of time - analytics event page view
        Given a user with the following criteria
            | criteria     |
            | operationals |
            | advisor      |
        When the user starts the application at date:
            | hour  | 2    |
            | day   | 10   |
            | month | 9    |
            | year  | 2023 |
        And the user accesses assistance section
        And the analytics interceptor service is initiated
        And the user access "advisor BBVA" in assistance
        Then the analytics events contains the following variables
            | item                    | value                                       | type             | event     |
            | analytics               | analytics/glomo_base                        | json schema      | Page View |
            | version DL              | 20241031_4.3                                | string           | Page View |
            | page name               | app:privada:personas:ayuda:fuera de horario | string           | Page View |
            | level 1                 | ayuda                                       | string           | Page View |
            | level 2                 | fuera de horario                            | string           | Page View |
            | language                | ES                                          | string           | Page View |
            | page area               | privada                                     | string           | Page View |
            | page intent             | informacion                                 | string           | Page View |
            | channel                 | online                                      | string           | Page View |
            | page instance ID        | de                                          | string           | Page View |
            | page info version       | appVersion                                  | regexp named     | Page View |
            | page segment            | personas                                    | string           | Page View |
            | sysEnv                  | app                                         | string           | Page View |
            | business unit           | BBVA Mexico                                 | string           | Page View |
            | site app name           | App BBVA Mexico                             | string           | Page View |
            | project name            | Glomo                                       | string           | Page View |
            | device mobile           | si                                          | string           | Page View |
            | user userState          | logado                                      | string           | Page View |
            | user segment global     | 003001                                      | string           | Page View |
            | profile ID              | profileID                                   | regexp named     | Page View |
            | user gender             | gender                                      | regexp named     | Page View |
            | user age                | age                                         | regexp named     | Page View |
            | internal campaign       |                                             | empty array      | Page View |
            | optimization attributes |                                             | empty array      | Page View |
            | application             |                                             | empty str object | Page View |
            | products attributes     |                                             | empty array      | Page View |

    @ANA_EVENT_AS006
    @analytics
    @MX
    @web-done
    @web
    @ios @android
    @vbank
    @backend(test)
    @manual @JIRA.GLOMOMX-131811
    Scenario: Assistance section advisor out hours and line bbva available - analytics event external link
        Given a user with the following criteria
            | criteria     |
            | operationals |
            | advisor      |
        When the user starts the application at date:
            | hour  | 22   |
            | day   | 6    |
            | month | 9    |
            | year  | 2023 |
        And the user accesses assistance section
        And the user access "advisor BBVA" in assistance
        And the analytics interceptor service is initiated
        And the user access "call line BBVA" in assistance
        Then the analytics events contains the following variables
            | item                    | value                                                  | type             | event         |
            | analytics               | analytics/glomo_base                                   | json schema      | External Link |
            | version DL              | 20241031_4.3                                           | string           | External Link |
            | page name               | app:privada:personas:ayuda:fuera de horario linea bbva | string           | External Link |
            | level 1                 | ayuda                                                  | string           | External Link |
            | level 2                 | fuera de horario linea bbva                            | string           | External Link |
            | language                | ES                                                     | string           | External Link |
            | page area               | privada                                                | string           | External Link |
            | page intent             | informacion                                            | string           | External Link |
            | channel                 | online                                                 | string           | External Link |
            | page instance ID        | de                                                     | string           | External Link |
            | page info version       | appVersion                                             | regexp named     | External Link |
            | page segment            | personas                                               | string           | External Link |
            | sysEnv                  | app                                                    | string           | External Link |
            | business unit           | BBVA Mexico                                            | string           | External Link |
            | site app name           | App BBVA Mexico                                        | string           | External Link |
            | project name            | Glomo                                                  | string           | External Link |
            | link url                | llamar linea bbva                                      | string           | External Link |
            | device mobile           | si                                                     | string           | External Link |
            | user userState          | logado                                                 | string           | External Link |
            | user segment global     | 003001                                                 | string           | External Link |
            | profile ID              | profileID                                              | regexp named     | External Link |
            | user gender             | gender                                                 | regexp named     | External Link |
            | user age                | age                                                    | regexp named     | External Link |
            | internal campaign       |                                                        | empty array      | External Link |
            | optimization attributes |                                                        | empty array      | External Link |
            | application             |                                                        | empty str object | External Link |
            | products attributes     |                                                        | empty array      | External Link |

    @ANA_EVENT_AS007
    @analytics
    @MX
    @backend(test)
    @vbank
    @web-done
    @web @android @ios
    Scenario: Assistance section call segment pat
        Given a user with the following criteria
            | criteria                      |
            | user pat for assitance center |
        And the user accesses assistance section
        And the analytics interceptor service is initiated
        When the user access "line pat" in assistance
        Then the analytics events contains the following variables
            | item                    | value                                                  | type             | event         |
            | analytics               | analytics/glomo_base                                   | json schema      | External Link |
            | version DL              | 20250414_5.0                                           | string           | External Link |
            | page name               | app:privada:personas:ayuda                             | string           | External Link |
            | level 1                 | ayuda                                                  | string           | External Link |
            | level 2                 |                                                        | string           | External Link |
            | language                | ES                                                     | string           | External Link |
            | page area               | privada                                                | string           | External Link |
            | page intent             | informacion                                            | string           | External Link |
            | channel                 | online                                                 | string           | External Link |
            | page instance ID        | de                                                     | string           | External Link |
            | page info version       | appVersion                                             | regexp named     | External Link |
            | page segment            | personas                                               | string           | External Link |
            | sysEnv                  | app                                                    | string           | External Link |
            | business unit           | BBVA Mexico                                            | string           | External Link |
            | site app name           | App BBVA Mexico                                        | string           | External Link |
            | project name            | Glomo                                                  | string           | External Link |
            | link url                | llamar a linea bbva patrimonial                        | string           | External Link |
            | device mobile           | si                                                     | string           | External Link |
            | user userState          | logado                                                 | string           | External Link |
            | user segment global     | 003001                                                 | string           | External Link |
            | profile ID              | profileID                                              | regexp named     | External Link |
            | user gender             | gender                                                 | regexp named     | External Link |
            | user age                | age                                                    | regexp named     | External Link |
            | internal campaign       |                                                        | empty array      | External Link |
            | optimization attributes |                                                        | empty array      | External Link |
            | application             |                                                        | empty str object | External Link |
            | products attributes     |                                                        | empty array      | External Link |

    @ANA_EVENT_AS008
    @analytics
    @MX
    @backend(test)
    @vbank
    @web-done
    @web @android @ios
    Scenario: Assistance section blue card - analytics event internal link
        Given a user with the following criteria
            | criteria                |
            | user with some products |
        And the user accesses assistance section
        And the analytics interceptor service is initiated
        When the user access "blue BBVA" in assistance
        Then the analytics events contains the following variables
            | item                    | value                      | type             | event         |
            | analytics               | analytics/glomo_base       | json schema      | Internal Link |
            | version DL              | 20241031_4.3               | string           | Internal Link |
            | page name               | app:privada:personas:ayuda | string           | Internal Link |
            | level 1                 | ayuda                      | string           | Internal Link |
            | level 2                 |                            | string           | Internal Link |
            | language                | ES                         | string           | Internal Link |
            | page area               | privada                    | string           | Internal Link |
            | page intent             | informacion                | string           | Internal Link |
            | channel                 | online                     | string           | Internal Link |
            | page instance ID        | de                         | string           | Internal Link |
            | page info version       | appVersion                 | regexp named     | Internal Link |
            | page segment            | personas                   | string           | Internal Link |
            | sysEnv                  | app                        | string           | Internal Link |
            | business unit           | BBVA Mexico                | string           | Internal Link |
            | site app name           | App BBVA Mexico            | string           | Internal Link |
            | project name            | Glomo                      | string           | Internal Link |
            | link name               | hablar con blue            | string           | Internal Link |
            | device mobile           | si                         | string           | Internal Link |
            | user userState          | logado                     | string           | Internal Link |
            | user segment global     | 003001                     | string           | Internal Link |
            | profile ID              | profileID                  | regexp named     | Internal Link |
            | user gender             | gender                     | regexp named     | Internal Link |
            | user age                | age                        | regexp named     | Internal Link |
            | internal campaign       |                            | empty array      | Internal Link |
            | optimization attributes |                            | empty array      | Internal Link |
            | application             |                            | empty str object | Internal Link |
            | products attributes     |                            | empty array      | Internal Link |

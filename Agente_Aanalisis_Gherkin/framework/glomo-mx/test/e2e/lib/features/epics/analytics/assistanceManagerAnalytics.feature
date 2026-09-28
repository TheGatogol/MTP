@assistanceManagerAnalytics
Feature: Analytics Assistance Manager
    @ANA_AM001
    @analytics
    @MX
    @web-done
    @web
    @android @ios
    @vbank
    @backend(test)
    Scenario: Assistance manager - analytics event page view
        Given a user with the following criteria
            | criteria           |
            | assistance manager |
            | user manager       |
        When the user accesses to dashboard
        And the user accesses a personal advisor
        Then the device contains the following variables
            | item                    | value                                | type             |
            | analytics               | analytics/glomo_base                 | json schema      |
            | version DL              | 20250414_5.0                         | string           |
            | page name               | app:privada:personas:asesor personal | string           |
            | level 1                 | asesor personal                      | string           |
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

    @ANA_AM002
    @analytics
    @MX
    @web-done
    @web
    @android @ios
    @vbank
    @backend(test)
    Scenario: Assistance manager benefits - analytics event page view
        Given a user with the following criteria
            | criteria           |
            | assistance manager |
            | user manager       |
        When the user accesses to dashboard
        And the user accesses benefits
        Then the device contains the following variables
            | item                    | value                                                | type             |
            | analytics               | analytics/glomo_base                                 | json schema      |
            | version DL              | 20250414_5.0                                         | string           |
            | page name               | app:privada:personas:asesor personal:mas informacion | string           |
            | level 1                 | asesor personal                                      | string           |
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

    @ANA_EVENT_AM003
    @analytics
    @MX
    @web-done
    @web
    @android @ios
    @vbank
    @backend(test)
    Scenario: Assistance manager email - analytics event page view
        Given a user with the following criteria
            | criteria           |
            | assistance manager |
            | user manager       |
        When the user accesses to dashboard
        And the user accesses a personal advisor
        And the analytics interceptor service is initiated
        And the user accesses email
        Then the analytics events contains the following variables
            | item                    | value                                    | type             | event     |
            | analytics               | analytics/glomo_base                     | json schema      | Page View |
            | version DL              | 20250414_5.0                             | string           | Page View |
            | page name               | app:privada:personas:ayuda:enviar correo | string           | Page View |
            | level 1                 | ayuda                                    | string           | Page View |
            | level 2                 | enviar correo                            | string           | Page View |
            | language                | ES                                       | string           | Page View |
            | page area               | privada                                  | string           | Page View |
            | page intent             | informacion                              | string           | Page View |
            | channel                 | online                                   | string           | Page View |
            | page instance ID        | de                                       | string           | Page View |
            | page info version       | appVersion                               | regexp named     | Page View |
            | page segment            | personas                                 | string           | Page View |
            | sysEnv                  | app                                      | string           | Page View |
            | business unit           | BBVA Mexico                              | string           | Page View |
            | site app name           | App BBVA Mexico                          | string           | Page View |
            | project name            | Glomo                                    | string           | Page View |
            | device mobile           | si                                       | string           | Page View |
            | user userState          | logado                                   | string           | Page View |
            | user segment global     | 003001                                   | string           | Page View |
            | profile ID              | profileID                                | regexp named     | Page View |
            | user gender             | gender                                   | regexp named     | Page View |
            | user age                | age                                      | regexp named     | Page View |
            | internal campaign       |                                          | empty array      | Page View |
            | optimization attributes |                                          | empty array      | Page View |
            | application             |                                          | empty str object | Page View |
            | products attributes     |                                          | empty array      | Page View |

    @ANA_EVENT_AM004
    @analytics
    @MX
    @web-done
    @web
    @android @ios
    @vbank
    @backend(test)
    Scenario: Assistance manager sended email succces - analytics event page view
        Given a user with the following criteria
            | criteria           |
            | assistance manager |
            | user manager       |
        When the user accesses to dashboard
        And the user accesses a personal advisor
        And the user accesses email
        And the user enters message
        And the analytics interceptor service is initiated
        And the user sends message
        Then the analytics events contains the following variables
            | item                    | value                                     | type             | event     |
            | analytics               | analytics/glomo_base                      | json schema      | Page View |
            | version DL              | 20250414_5.0                              | string           | Page View |
            | page name               | app:privada:personas:ayuda:correo enviado | string           | Page View |
            | level 1                 | ayuda                                     | string           | Page View |
            | level 2                 | correo enviado                            | string           | Page View |
            | language                | ES                                        | string           | Page View |
            | page area               | privada                                   | string           | Page View |
            | page intent             | informacion                               | string           | Page View |
            | channel                 | online                                    | string           | Page View |
            | page instance ID        | de                                        | string           | Page View |
            | page info version       | appVersion                                | regexp named     | Page View |
            | page segment            | personas                                  | string           | Page View |
            | sysEnv                  | app                                       | string           | Page View |
            | business unit           | BBVA Mexico                               | string           | Page View |
            | site app name           | App BBVA Mexico                           | string           | Page View |
            | project name            | Glomo                                     | string           | Page View |
            | device mobile           | si                                        | string           | Page View |
            | user userState          | logado                                    | string           | Page View |
            | user segment global     | 003001                                    | string           | Page View |
            | profile ID              | profileID                                 | regexp named     | Page View |
            | user gender             | gender                                    | regexp named     | Page View |
            | user age                | age                                       | regexp named     | Page View |
            | internal campaign       |                                           | empty array      | Page View |
            | optimization attributes |                                           | empty array      | Page View |
            | application             |                                           | empty str object | Page View |
            | products attributes     |                                           | empty array      | Page View |

    @ANA_EVENT_AM005
    @analytics
    @MX
    @web-done
    @web
    @android @ios
    @vbank
    @backend(test)
    Scenario: Assistance manager call advisor out ours - analytics event page view
        Given a user with the following criteria
            | criteria           |
            | assistance manager |
            | user manager       |
        When the user starts the application at date:
            | hour  | 2    |
            | day   | 6    |
            | month | 9    |
            | year  | 2023 |
        And the user accesses to dashboard
        And the user accesses a personal advisor
        And the analytics interceptor service is initiated
        And the user enters call advisor
        Then the analytics events contains the following variables
            | item                    | value                                                            | type             | event     |
            | analytics               | analytics/glomo_base                                             | json schema      | Page View |
            | version DL              | 20250414_5.0                                                     | string           | Page View |
            | page name               | app:privada:personas:asesor personal:fuera de horario linea bbva | string           | Page View |
            | level 1                 | asesor personal                                                  | string           | Page View |
            | level 2                 | fuera de horario linea bbva                                      | string           | Page View |
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

    @ANA_EVENT_AM006
    @analytics
    @MX
    @web-done
    @web
    @android @ios
    @vbank
    @backend(test)
    Scenario: Assistance manager call advisor - analytics event external link
        Given a user with the following criteria
            | criteria           |
            | assistance manager |
            | user manager       |
        When the user accesses to dashboard
        And the user accesses a personal advisor
        And the analytics interceptor service is initiated
        And the user enters call advisor
        Then the analytics events contains the following variables
            | item                    | value                                | type             | event         |
            | analytics               | analytics/glomo_base                 | json schema      | External Link |
            | page name               | app:privada:personas:asesor personal | string           | External Link |
            | version DL              | 20250414_5.0                         | string           | External Link |
            | level 1                 | asesor personal                      | string           | External Link |
            | language                | ES                                   | string           | External Link |
            | page area               | privada                              | string           | External Link |
            | page intent             | informacion                          | string           | External Link |
            | channel                 | online                               | string           | External Link |
            | page instance ID        | de                                   | string           | External Link |
            | page info version       | appVersion                           | regexp named     | External Link |
            | page segment            | personas                             | string           | External Link |
            | sysEnv                  | app                                  | string           | External Link |
            | business unit           | BBVA Mexico                          | string           | External Link |
            | site app name           | App BBVA Mexico                      | string           | External Link |
            | project name            | Glomo                                | string           | External Link |
            | device mobile           | si                                   | string           | External Link |
            | user userState          | logado                               | string           | External Link |
            | user segment global     | 003001                               | string           | External Link |
            | profile ID              | profileID                            | regexp named     | External Link |
            | user gender             | gender                               | regexp named     | External Link |
            | user age                | age                                  | regexp named     | External Link |
            | internal campaign       |                                      | empty array      | External Link |
            | optimization attributes |                                      | empty array      | External Link |
            | application             |                                      | empty str object | External Link |
            | products attributes     |                                      | empty array      | External Link |

    @ANA_EVENT_AM007
    @analytics
    @MX
    @web-done
    @web
    @android @ios
    @vbank
    @backend(test)
    Scenario: Assistance manager call line bbva - analytics event external link
        Given a user with the following criteria
            | criteria           |
            | assistance manager |
            | user manager       |
        When the user starts the application at date:
            | hour | 24 |
        And the user accesses to dashboard
        And the user accesses a personal advisor
        And the user enters call advisor
        And the analytics interceptor service is initiated
        And the user enters call line bbva
        Then the analytics events contains the following variables
            | item                    | value                                                            | type             | event         |
            | analytics               | analytics/glomo_base                                             | json schema      | External Link |
            | page name               | app:privada:personas:asesor personal:fuera de horario linea bbva | string           | External Link |
            | version DL              | 20250414_5.0                                                     | string           | External Link |
            | level 1                 | asesor personal                                                  | string           | External Link |
            | level 2                 | fuera de horario linea bbva                                      | string           | External Link |
            | language                | ES                                                               | string           | External Link |
            | page area               | privada                                                          | string           | External Link |
            | page intent             | informacion                                                      | string           | External Link |
            | channel                 | online                                                           | string           | External Link |
            | page instance ID        | de                                                               | string           | External Link |
            | page info version       | appVersion                                                       | regexp named     | External Link |
            | page segment            | personas                                                         | string           | External Link |
            | sysEnv                  | app                                                              | string           | External Link |
            | business unit           | BBVA Mexico                                                      | string           | External Link |
            | site app name           | App BBVA Mexico                                                  | string           | External Link |
            | project name            | Glomo                                                            | string           | External Link |
            | device mobile           | si                                                               | string           | External Link |
            | user userState          | logado                                                           | string           | External Link |
            | user segment global     | 003001                                                           | string           | External Link |
            | profile ID              | profileID                                                        | regexp named     | External Link |
            | user gender             | gender                                                           | regexp named     | External Link |
            | user age                | age                                                              | regexp named     | External Link |
            | internal campaign       |                                                                  | empty array      | External Link |
            | optimization attributes |                                                                  | empty array      | External Link |
            | application             |                                                                  | empty str object | External Link |
            | products attributes     |                                                                  | empty array      | External Link |

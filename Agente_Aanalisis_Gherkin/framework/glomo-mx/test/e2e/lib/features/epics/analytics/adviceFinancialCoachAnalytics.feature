@adviceFinancialCoachAnalytics
Feature: Analytics - Advice Financial Coach Analytics

    @ANA_EVENT_AFC001
    @analytics
    @ios @android @web
    @ios-done @android-done @web-done
    @MX
    @backend(test) @vbank
    Scenario: View your financial situation page
        Given a user with the following criteria
            | criteria               |
            | advice financial coach |
        And the user accesses the financial coach section
        And the analytics interceptor service is initiated
        When the user accesses to your financial situation coach page
        Then the analytics events contains the following variables
            | item                    | value                                                           | type             | event     |
            | analytics               | analytics/glomo_base                                            | json schema      | Page View |
            | version DL              | 20250414_5.0                                                    | string           | Page View |
            | page instance ID        | de                                                              | string           | Page View |
            | sysEnv                  | app                                                             | string           | Page View |
            | page segment            | personas                                                        | string           | Page View |
            | page intent             | informacion                                                     | string           | Page View |
            | business unit           | BBVA Mexico                                                     | string           | Page View |
            | page area               | privada                                                         | string           | Page View |
            | language                | ES                                                              | string           | Page View |
            | channel                 | online                                                          | string           | Page View |
            | site app name           | App BBVA Mexico                                                 | string           | Page View |
            | project name            | Glomo                                                           | string           | Page View |
            | level 1                 | entrenador financiero                                           | string           | Page View |
            | level 2                 | situacion financiera                                            | string           | Page View |
            | page name               | app:privada:personas:entrenador financiero:situacion financiera | string           | Page View |
            | device mobile           | si                                                              | string           | Page View |
            | user segment global     | 003001                                                          | string           | Page View |
            | user userState          | logado                                                          | string           | Page View |
            | user gender             | gender                                                          | regexp named     | Page View |
            | user age                | age                                                             | regexp named     | Page View |
            | internal campaign       |                                                                 | empty array      | Page View |
            | optimization attributes |                                                                 | empty array      | Page View |
            | application             |                                                                 | empty str object | Page View |
            | products attributes     |                                                                 | empty array      | Page View |

    @ANA_EVENT_AFC002
    @analytics
    @ios @android @web
    @ios-done @android-done @web-done
    @MX
    @backend(test) @vbank
    Scenario: View the income and expenses modal in your financial situation page
        Given a user with the following criteria
            | criteria               |
            | advice financial coach |
        And the user accesses the financial coach section
        And the analytics interceptor service is initiated
        And the user accesses to your financial situation coach page
        When the user selects "Ingresos y gastos" info button in a coach modal
        Then the analytics events contains the following variables
            | item                    | value                                                                             | type             | event     | event number |
            | analytics               | analytics/glomo_base                                                              | json schema      | Page View | 2            |
            | version DL              | 20250414_5.0                                                                      | string           | Page View | 2            |
            | page instance ID        | de                                                                                | string           | Page View | 2            |
            | sysEnv                  | app                                                                               | string           | Page View | 2            |
            | page segment            | personas                                                                          | string           | Page View | 2            |
            | page intent             | informacion                                                                       | string           | Page View | 2            |
            | business unit           | BBVA Mexico                                                                       | string           | Page View | 2            |
            | page area               | privada                                                                           | string           | Page View | 2            |
            | language                | ES                                                                                | string           | Page View | 2            |
            | channel                 | online                                                                            | string           | Page View | 2            |
            | site app name           | App BBVA Mexico                                                                   | string           | Page View | 2            |
            | project name            | Glomo                                                                             | string           | Page View | 2            |
            | level 1                 | entrenador financiero                                                             | string           | Page View | 2            |
            | level 2                 | situacion financiera                                                              | string           | Page View | 2            |
            | level 3                 | ingresos y gastos                                                                 | string           | Page View | 2            |
            | page name               | app:privada:personas:entrenador financiero:situacion financiera:ingresos y gastos | string           | Page View | 2            |
            | device mobile           | si                                                                                | string           | Page View | 2            |
            | user segment global     | 003001                                                                            | string           | Page View | 2            |
            | user userState          | logado                                                                            | string           | Page View | 2            |
            | user gender             | gender                                                                            | regexp named     | Page View | 2            |
            | user age                | age                                                                               | regexp named     | Page View | 2            |
            | internal campaign       |                                                                                   | empty array      | Page View | 2            |
            | optimization attributes |                                                                                   | empty array      | Page View | 2            |
            | application             |                                                                                   | empty str object | Page View | 2            |
            | products attributes     |                                                                                   | empty array      | Page View | 2            |

    @ANA_EVENT_AFC003
    @analytics
    @ios @android @web
    @ios-done @android-done @web-done
    @MX
    @backend(test) @vbank
    Scenario: View the financial cushion modal in your financial situation page
        Given a user with the following criteria
            | criteria               |
            | advice financial coach |
        And the user accesses the financial coach section
        And the analytics interceptor service is initiated
        And the user accesses to your financial situation coach page
        When the user selects "Colchón financiero" info button in a coach modal
        Then the analytics events contains the following variables
            | item                    | value                                                                              | type             | event     | event number |
            | analytics               | analytics/glomo_base                                                               | json schema      | Page View | 2            |
            | version DL              | 20250414_5.0                                                                       | string           | Page View | 2            |
            | page instance ID        | de                                                                                 | string           | Page View | 2            |
            | sysEnv                  | app                                                                                | string           | Page View | 2            |
            | page segment            | personas                                                                           | string           | Page View | 2            |
            | page intent             | informacion                                                                        | string           | Page View | 2            |
            | business unit           | BBVA Mexico                                                                        | string           | Page View | 2            |
            | page area               | privada                                                                            | string           | Page View | 2            |
            | language                | ES                                                                                 | string           | Page View | 2            |
            | channel                 | online                                                                             | string           | Page View | 2            |
            | site app name           | App BBVA Mexico                                                                    | string           | Page View | 2            |
            | project name            | Glomo                                                                              | string           | Page View | 2            |
            | level 1                 | entrenador financiero                                                              | string           | Page View | 2            |
            | level 2                 | situacion financiera                                                               | string           | Page View | 2            |
            | level 3                 | colchon financiero                                                                 | string           | Page View | 2            |
            | page name               | app:privada:personas:entrenador financiero:situacion financiera:colchon financiero | string           | Page View | 2            |
            | device mobile           | si                                                                                 | string           | Page View | 2            |
            | user segment global     | 003001                                                                             | string           | Page View | 2            |
            | user userState          | logado                                                                             | string           | Page View | 2            |
            | user gender             | gender                                                                             | regexp named     | Page View | 2            |
            | user age                | age                                                                                | regexp named     | Page View | 2            |
            | internal campaign       |                                                                                    | empty array      | Page View | 2            |
            | optimization attributes |                                                                                    | empty array      | Page View | 2            |
            | application             |                                                                                    | empty str object | Page View | 2            |
            | products attributes     |                                                                                    | empty array      | Page View | 2            |

    @ANA_EVENT_AFC004
    @analytics
    @ios @android @web
    @ios-done @android-done @web-done
    @MX
    @backend(test) @vbank
    Scenario: View configure target modal
        Given a user with the following criteria
            | criteria               |
            | advice financial coach |
        And the user accesses the financial coach section
        And the analytics interceptor service is initiated
        When the user open the coach targets modal
        Then the analytics events contains the following variables
            | item                    | value                                                                           | type             | event     |
            | analytics               | analytics/glomo_base                                                            | json schema      | Page View |
            | version DL              | 20250414_5.0                                                                    | string           | Page View |
            | page instance ID        | de                                                                              | string           | Page View |
            | sysEnv                  | app                                                                             | string           | Page View |
            | page segment            | personas                                                                        | string           | Page View |
            | page intent             | informacion                                                                     | string           | Page View |
            | business unit           | BBVA Mexico                                                                     | string           | Page View |
            | page area               | privada                                                                         | string           | Page View |
            | language                | ES                                                                              | string           | Page View |
            | channel                 | online                                                                          | string           | Page View |
            | site app name           | App BBVA Mexico                                                                 | string           | Page View |
            | project name            | Glomo                                                                           | string           | Page View |
            | level 1                 | entrenador financiero                                                           | string           | Page View |
            | level 2                 | configurar objetivo                                                             | string           | Page View |
            | level 3                 | edicion objetivo                                                                | string           | Page View |
            | page name               | app:privada:personas:entrenador financiero:configurar objetivo:edicion objetivo | string           | Page View |
            | device mobile           | si                                                                              | string           | Page View |
            | user segment global     | 003001                                                                          | string           | Page View |
            | user userState          | logado                                                                          | string           | Page View |
            | user gender             | gender                                                                          | regexp named     | Page View |
            | user age                | age                                                                             | regexp named     | Page View |
            | internal campaign       |                                                                                 | empty array      | Page View |
            | optimization attributes |                                                                                 | empty array      | Page View |
            | application             |                                                                                 | empty str object | Page View |
            | products attributes     |                                                                                 | empty array      | Page View |

    @ANA_EVENT_AFC005
    @analytics
    @ios @android @web
    @ios-done @android-done @web-done
    @MX
    @backend(test) @vbank
    Scenario: View financial coach dashboard
        Given a user with the following criteria
            | criteria               |
            | advice financial coach |
        And the user accesses to dashboard
        And the analytics interceptor service is initiated
        When the user accesses the financial coach section
        Then the analytics events contains the following variables
            | item                    | value                                                | type             | event     |
            | analytics               | analytics/glomo_base                                 | json schema      | Page View |
            | version DL              | 20250414_5.0                                         | string           | Page View |
            | page instance ID        | de                                                   | string           | Page View |
            | sysEnv                  | app                                                  | string           | Page View |
            | page segment            | personas                                             | string           | Page View |
            | page intent             | informacion                                          | string           | Page View |
            | business unit           | BBVA Mexico                                          | string           | Page View |
            | page area               | privada                                              | string           | Page View |
            | language                | ES                                                   | string           | Page View |
            | channel                 | online                                               | string           | Page View |
            | site app name           | App BBVA Mexico                                      | string           | Page View |
            | project name            | Glomo                                                | string           | Page View |
            | level 1                 | entrenador financiero                                | string           | Page View |
            | level 2                 | dashboard                                            | string           | Page View |
            | page name               | app:privada:personas:entrenador financiero:dashboard | string           | Page View |
            | device mobile           | si                                                   | string           | Page View |
            | user segment global     | 003001                                               | string           | Page View |
            | user userState          | logado                                               | string           | Page View |
            | user gender             | gender                                               | regexp named     | Page View |
            | user age                | age                                                  | regexp named     | Page View |
            | internal campaign       |                                                      | empty array      | Page View |
            | optimization attributes |                                                      | empty array      | Page View |
            | application             |                                                      | empty str object | Page View |
            | products attributes     |                                                      | empty array      | Page View |

    @ANA_EVENT_AFC006
    @analytics
    @ios @android @web
    @ios-done @android-done @web-done
    @MX
    @backend(test) @vbank
    Scenario: View proposals dashboard
        Given a user with the following criteria
            | criteria               |
            | advice financial coach |
        And the user accesses the financial coach section
        And the analytics interceptor service is initiated
        When the user navigates to the coach proposals dashboard
        Then the analytics events contains the following variables
            | item                    | value                                                                       | type             | event     |
            | analytics               | analytics/glomo_base                                                        | json schema      | Page View |
            | version DL              | 20250414_5.0                                                                | string           | Page View |
            | page instance ID        | de                                                                          | string           | Page View |
            | sysEnv                  | app                                                                         | string           | Page View |
            | page segment            | personas                                                                    | string           | Page View |
            | page intent             | informacion                                                                 | string           | Page View |
            | business unit           | BBVA Mexico                                                                 | string           | Page View |
            | page area               | privada                                                                     | string           | Page View |
            | language                | ES                                                                          | string           | Page View |
            | channel                 | online                                                                      | string           | Page View |
            | site app name           | App BBVA Mexico                                                             | string           | Page View |
            | project name            | Glomo                                                                       | string           | Page View |
            | level 1                 | entrenador financiero                                                       | string           | Page View |
            | level 2                 | propuestas para mejorar economia                                            | string           | Page View |
            | page name               | app:privada:personas:entrenador financiero:propuestas para mejorar economia | string           | Page View |
            | device mobile           | si                                                                          | string           | Page View |
            | user segment global     | 003001                                                                      | string           | Page View |
            | user userState          | logado                                                                      | string           | Page View |
            | user gender             | gender                                                                      | regexp named     | Page View |
            | user age                | age                                                                         | regexp named     | Page View |
            | internal campaign       |                                                                             | empty array      | Page View |
            | optimization attributes |                                                                             | empty array      | Page View |
            | application             |                                                                             | empty str object | Page View |
            | products attributes     |                                                                             | empty array      | Page View |

    @ANA_EVENT_AFC007
    @analytics
    @ios @android @web
    @ios-done @android-done @web-done
    @MX
    @backend(test) @vbank
    Scenario: View proposal detail modal
        Given a user with the following criteria
            | criteria               |
            | advice financial coach |
        And the user accesses the financial coach section
        And the analytics interceptor service is initiated
        When the user selects "inactive" coach proposal to view the details
        Then the analytics events contains the following variables
            | item                    | value                                                                               | type             | event     |
            | analytics               | analytics/glomo_base                                                                | json schema      | Page View |
            | version DL              | 20250414_5.0                                                                        | string           | Page View |
            | page instance ID        | de                                                                                  | string           | Page View |
            | sysEnv                  | app                                                                                 | string           | Page View |
            | page segment            | personas                                                                            | string           | Page View |
            | page intent             | informacion                                                                         | string           | Page View |
            | business unit           | BBVA Mexico                                                                         | string           | Page View |
            | page area               | privada                                                                             | string           | Page View |
            | language                | ES                                                                                  | string           | Page View |
            | channel                 | online                                                                              | string           | Page View |
            | site app name           | App BBVA Mexico                                                                     | string           | Page View |
            | project name            | Glomo                                                                               | string           | Page View |
            | level 1                 | entrenador financiero                                                               | string           | Page View |
            | level 2                 | propuestas para mejorar economia                                                    | string           | Page View |
            | level 3                 | detalle                                                                             | string           | Page View |
            | page name               | app:privada:personas:entrenador financiero:propuestas para mejorar economia:detalle | string           | Page View |
            | device mobile           | si                                                                                  | string           | Page View |
            | user segment global     | 003001                                                                              | string           | Page View |
            | user userState          | logado                                                                              | string           | Page View |
            | user gender             | gender                                                                              | regexp named     | Page View |
            | user age                | age                                                                                 | regexp named     | Page View |
            | internal campaign       |                                                                                     | empty array      | Page View |
            | optimization attributes |                                                                                     | empty array      | Page View |
            | application             |                                                                                     | empty str object | Page View |
            | products attributes     |                                                                                     | empty array      | Page View |
            | custom fields           | propuesta:una meta en mente, un plan en tu app                                      | string           | Page View |

    @ANA_EVENT_AFC008
    @analytics
    @ios @android @web
    @ios-done @android-done @web-done
    @MX
    @backend(test) @vbank
    Scenario: View badges dashboard
        Given a user with the following criteria
            | criteria               |
            | advice financial coach |
        And the user accesses the financial coach section
        And the analytics interceptor service is initiated
        When the user navigates to the coach badges dashboard
        Then the analytics events contains the following variables
            | item                    | value                                                | type             | event     |
            | analytics               | analytics/glomo_base                                 | json schema      | Page View |
            | version DL              | 20250414_5.0                                         | string           | Page View |
            | page instance ID        | de                                                   | string           | Page View |
            | sysEnv                  | app                                                  | string           | Page View |
            | page segment            | personas                                             | string           | Page View |
            | page intent             | informacion                                          | string           | Page View |
            | business unit           | BBVA Mexico                                          | string           | Page View |
            | page area               | privada                                              | string           | Page View |
            | language                | ES                                                   | string           | Page View |
            | channel                 | online                                               | string           | Page View |
            | site app name           | App BBVA Mexico                                      | string           | Page View |
            | project name            | Glomo                                                | string           | Page View |
            | level 1                 | entrenador financiero                                | string           | Page View |
            | level 2                 | insignias                                            | string           | Page View |
            | page name               | app:privada:personas:entrenador financiero:insignias | string           | Page View |
            | device mobile           | si                                                   | string           | Page View |
            | user segment global     | 003001                                               | string           | Page View |
            | user userState          | logado                                               | string           | Page View |
            | user gender             | gender                                               | regexp named     | Page View |
            | user age                | age                                                  | regexp named     | Page View |
            | internal campaign       |                                                      | empty array      | Page View |
            | optimization attributes |                                                      | empty array      | Page View |
            | application             |                                                      | empty str object | Page View |
            | products attributes     |                                                      | empty array      | Page View |

    @ANA_EVENT_AFC009
    @analytics
    @ios @android @web
    @ios-done @android-done @web-done
    @MX
    @backend(test) @vbank
    Scenario: View badges detail modal
        Given a user with the following criteria
            | criteria               |
            | advice financial coach |
        And the user accesses the financial coach section
        And the analytics interceptor service is initiated
        When the user selects "available" coach badge to view the details
        Then the analytics events contains the following variables
            | item                    | value                                                        | type             | event     |
            | analytics               | analytics/glomo_base                                         | json schema      | Page View |
            | version DL              | 20250414_5.0                                                 | string           | Page View |
            | page instance ID        | de                                                           | string           | Page View |
            | sysEnv                  | app                                                          | string           | Page View |
            | page segment            | personas                                                     | string           | Page View |
            | page intent             | informacion                                                  | string           | Page View |
            | business unit           | BBVA Mexico                                                  | string           | Page View |
            | page area               | privada                                                      | string           | Page View |
            | language                | ES                                                           | string           | Page View |
            | channel                 | online                                                       | string           | Page View |
            | site app name           | App BBVA Mexico                                              | string           | Page View |
            | project name            | Glomo                                                        | string           | Page View |
            | level 1                 | entrenador financiero                                        | string           | Page View |
            | level 2                 | insignias                                                    | string           | Page View |
            | level 3                 | detalle                                                      | string           | Page View |
            | page name               | app:privada:personas:entrenador financiero:insignias:detalle | string           | Page View |
            | device mobile           | si                                                           | string           | Page View |
            | user segment global     | 003001                                                       | string           | Page View |
            | user userState          | logado                                                       | string           | Page View |
            | user gender             | gender                                                       | regexp named     | Page View |
            | user age                | age                                                          | regexp named     | Page View |
            | internal campaign       |                                                              | empty array      | Page View |
            | optimization attributes |                                                              | empty array      | Page View |
            | application             |                                                              | empty str object | Page View |
            | products attributes     |                                                              | empty array      | Page View |
            | custom fields           | insignia:apartar es avanzar                                  | string           | Page View |

    @ANA_EVENT_AFC010
    @analytics
    @ios @android @web
    @ios-done @android-done @web-done
    @MX
    @backend(test) @vbank
    Scenario: View badge obtained modal
        Given a user with the following criteria
            | criteria               |
            | advice financial coach |
        And the user accesses the financial coach section
        And the analytics interceptor service is initiated
        When the user selects "obtained" coach badge to view the details
        Then the analytics events contains the following variables
            | item                    | value                                                           | type             | event     |
            | analytics               | analytics/glomo_base                                            | json schema      | Page View |
            | version DL              | 20250414_5.0                                                    | string           | Page View |
            | page instance ID        | de                                                              | string           | Page View |
            | sysEnv                  | app                                                             | string           | Page View |
            | page segment            | personas                                                        | string           | Page View |
            | page intent             | informacion                                                     | string           | Page View |
            | business unit           | BBVA Mexico                                                     | string           | Page View |
            | page area               | privada                                                         | string           | Page View |
            | language                | ES                                                              | string           | Page View |
            | channel                 | online                                                          | string           | Page View |
            | site app name           | App BBVA Mexico                                                 | string           | Page View |
            | project name            | Glomo                                                           | string           | Page View |
            | level 1                 | entrenador financiero                                           | string           | Page View |
            | level 2                 | insignias                                                       | string           | Page View |
            | level 3                 | conseguida                                                      | string           | Page View |
            | page name               | app:privada:personas:entrenador financiero:insignias:conseguida | string           | Page View |
            | device mobile           | si                                                              | string           | Page View |
            | user segment global     | 003001                                                          | string           | Page View |
            | user userState          | logado                                                          | string           | Page View |
            | user gender             | gender                                                          | regexp named     | Page View |
            | user age                | age                                                             | regexp named     | Page View |
            | internal campaign       |                                                                 | empty array      | Page View |
            | optimization attributes |                                                                 | empty array      | Page View |
            | application             |                                                                 | empty str object | Page View |
            | products attributes     |                                                                 | empty array      | Page View |
            | custom fields           | insignia:mi colchon                                             | string           | Page View |

    @ANA_EVENT_AFC011
    @analytics
    @ios @android @web
    @ios-done @android-done @web-done
    @MX
    @backend(test) @vbank
    Scenario: View financial coach dashboard error page
        Given a user with the following criteria
            | criteria               |
            | advice financial coach |
        And the user accesses to dashboard
        And the analytics interceptor service is initiated
        When the user accesses the financial coach section
        Then the analytics events contains the following variables
            | item                    | value                                                                      | type             | event     |
            | analytics               | analytics/glomo_base                                                       | json schema      | Page View |
            | version DL              | 20250414_5.0                                                               | string           | Page View |
            | page instance ID        | de                                                                         | string           | Page View |
            | sysEnv                  | app                                                                        | string           | Page View |
            | page segment            | personas                                                                   | string           | Page View |
            | page intent             | informacion                                                                | string           | Page View |
            | business unit           | BBVA Mexico                                                                | string           | Page View |
            | page area               | privada                                                                    | string           | Page View |
            | language                | ES                                                                         | string           | Page View |
            | channel                 | online                                                                     | string           | Page View |
            | site app name           | App BBVA Mexico                                                            | string           | Page View |
            | project name            | Glomo                                                                      | string           | Page View |
            | level 1                 | entrenador financiero                                                      | string           | Page View |
            | level 2                 | error informacion no disponible                                            | string           | Page View |
            | page name               | app:privada:personas:entrenador financiero:error informacion no disponible | string           | Page View |
            | error page              | error informacion no disponible                                            | string           | Page View |
            | device mobile           | si                                                                         | string           | Page View |
            | user segment global     | 003001                                                                     | string           | Page View |
            | user userState          | logado                                                                     | string           | Page View |
            | user gender             | gender                                                                     | regexp named     | Page View |
            | user age                | age                                                                        | regexp named     | Page View |
            | internal campaign       |                                                                            | empty array      | Page View |
            | optimization attributes |                                                                            | empty array      | Page View |
            | application             |                                                                            | empty str object | Page View |
            | products attributes     |                                                                            | empty array      | Page View |

    @ANA_EVENT_AFC012
    @analytics
    @ios @android @web
    @ios-done @android-done @web-done
    @MX
    @backend(test) @vbank
    Scenario: View step 2 configure target modal
        Given a user with the following criteria
            | criteria               |
            | advice financial coach |
        And the user accesses the financial coach section
        And the analytics interceptor service is initiated
        And the user open the coach targets modal
        When the user open step 2 of the coach targets modal
        Then the analytics events contains the following variables
            | item                    | value                                                                                   | type             | event     | event number |
            | analytics               | analytics/glomo_base                                                                    | json schema      | Page View | 2            |
            | version DL              | 20250414_5.0                                                                            | string           | Page View | 2            |
            | page instance ID        | de                                                                                      | string           | Page View | 2            |
            | sysEnv                  | app                                                                                     | string           | Page View | 2            |
            | page segment            | personas                                                                                | string           | Page View | 2            |
            | page intent             | informacion                                                                             | string           | Page View | 2            |
            | business unit           | BBVA Mexico                                                                             | string           | Page View | 2            |
            | page area               | privada                                                                                 | string           | Page View | 2            |
            | language                | ES                                                                                      | string           | Page View | 2            |
            | channel                 | online                                                                                  | string           | Page View | 2            |
            | site app name           | App BBVA Mexico                                                                         | string           | Page View | 2            |
            | project name            | Glomo                                                                                   | string           | Page View | 2            |
            | level 1                 | entrenador financiero                                                                   | string           | Page View | 2            |
            | level 2                 | configurar objetivo                                                                     | string           | Page View | 2            |
            | level 3                 | edicion objetivo                                                                        | string           | Page View | 2            |
            | level 4                 | importe                                                                                 | string           | Page View | 2            |
            | page name               | app:privada:personas:entrenador financiero:configurar objetivo:edicion objetivo:importe | string           | Page View | 2            |
            | device mobile           | si                                                                                      | string           | Page View | 2            |
            | user segment global     | 003001                                                                                  | string           | Page View | 2            |
            | user userState          | logado                                                                                  | string           | Page View | 2            |
            | user gender             | gender                                                                                  | regexp named     | Page View | 2            |
            | user age                | age                                                                                     | regexp named     | Page View | 2            |
            | internal campaign       |                                                                                         | empty array      | Page View | 2            |
            | optimization attributes |                                                                                         | empty array      | Page View | 2            |
            | application             |                                                                                         | empty str object | Page View | 2            |
            | products attributes     |                                                                                         | empty array      | Page View | 2            |
            | custom fields           | objetivo:reducir tus gastos                                                             | string           | Page View | 2            |

    @ANA_EVENT_AFC013
    @analytics
    @ios @android @web
    @ios-done @android-done @web-done
    @MX
    @backend(test) @vbank
    Scenario: Internal link proposal detail modal
        Given a user with the following criteria
            | criteria               |
            | advice financial coach |
        And the user accesses the financial coach section
        And the analytics interceptor service is initiated
        And the user selects "inactive" coach proposal to view the details
        When the user accesses to coach proposal internal link
        Then the analytics events contains the following variables
            | item                    | value                                                                               | type             | event         |
            | analytics               | analytics/glomo_base                                                                | json schema      | Internal Link |
            | version DL              | 20250414_5.0                                                                        | string           | Internal Link |
            | page instance ID        | de                                                                                  | string           | Internal Link |
            | sysEnv                  | app                                                                                 | string           | Internal Link |
            | page segment            | personas                                                                            | string           | Internal Link |
            | page intent             | informacion                                                                         | string           | Internal Link |
            | business unit           | BBVA Mexico                                                                         | string           | Internal Link |
            | page area               | privada                                                                             | string           | Internal Link |
            | language                | ES                                                                                  | string           | Internal Link |
            | channel                 | online                                                                              | string           | Internal Link |
            | site app name           | App BBVA Mexico                                                                     | string           | Internal Link |
            | project name            | Glomo                                                                               | string           | Internal Link |
            | level 1                 | entrenador financiero                                                               | string           | Internal Link |
            | level 2                 | propuestas para mejorar economia                                                    | string           | Internal Link |
            | level 3                 | detalle                                                                             | string           | Internal Link |
            | page name               | app:privada:personas:entrenador financiero:propuestas para mejorar economia:detalle | string           | Internal Link |
            | link name               | crear apartado                                                                      | string           | Internal Link |
            | device mobile           | si                                                                                  | string           | Internal Link |
            | user segment global     | 003001                                                                              | string           | Internal Link |
            | user userState          | logado                                                                              | string           | Internal Link |
            | user gender             | gender                                                                              | regexp named     | Internal Link |
            | user age                | age                                                                                 | regexp named     | Internal Link |
            | internal campaign       |                                                                                     | empty array      | Internal Link |
            | optimization attributes |                                                                                     | empty array      | Internal Link |
            | application             |                                                                                     | empty str object | Internal Link |
            | products attributes     |                                                                                     | empty array      | Internal Link |
            | custom fields           | propuesta:si no lo ves, no lo gastas                                                | string           | Internal Link |

    @ANA_EVENT_AFC014
    @analytics
    @ios @android @web
    @ios-done @android-done @web-done
    @MX
    @backend(test) @vbank
    Scenario: View coach onboarding first slide
        Given a user with the following criteria
            | criteria               |
            | advice financial coach |
        And the user accesses to dashboard
        And the analytics interceptor service is initiated
        When the user accesses the financial coach section
        Then the analytics events contains the following variables
            | item                    | value                                                  | type             | event     |
            | analytics               | analytics/glomo_base                                   | json schema      | Page View |
            | version DL              | 20250414_5.0                                           | string           | Page View |
            | page instance ID        | de                                                     | string           | Page View |
            | sysEnv                  | app                                                    | string           | Page View |
            | page segment            | personas                                               | string           | Page View |
            | page intent             | informacion                                            | string           | Page View |
            | business unit           | BBVA Mexico                                            | string           | Page View |
            | page area               | privada                                                | string           | Page View |
            | language                | ES                                                     | string           | Page View |
            | channel                 | online                                                 | string           | Page View |
            | site app name           | App BBVA Mexico                                        | string           | Page View |
            | project name            | Glomo                                                  | string           | Page View |
            | level 1                 | entrenador financiero                                  | string           | Page View |
            | level 2                 | onboarding                                             | string           | Page View |
            | page name               | app:privada:personas:entrenador financiero:onboarding  | string           | Page View |
            | device mobile           | si                                                     | string           | Page View |
            | user segment global     | 003001                                                 | string           | Page View |
            | user userState          | logado                                                 | string           | Page View |
            | user gender             | gender                                                 | regexp named     | Page View |
            | user age                | age                                                    | regexp named     | Page View |
            | internal campaign       |                                                        | empty array      | Page View |
            | optimization attributes |                                                        | empty array      | Page View |
            | application             |                                                        | empty str object | Page View |
            | products attributes     |                                                        | empty array      | Page View |

    @ANA_EVENT_AFC015
    @analytics
    @ios @android @web
    @ios-done @android-done @web-done
    @MX
    @backend(test) @vbank
    Scenario: View modify target
        Given a user with the following criteria
            | criteria               |
            | advice financial coach |
        And the user accesses the financial coach section
        And the analytics interceptor service is initiated
        When the user open the coach targets modal
        Then the analytics events contains the following variables
            | item                    | value                                                                            | type             | event     |
            | analytics               | analytics/glomo_base                                                             | json schema      | Page View |
            | version DL              | 20250414_5.0                                                                     | string           | Page View |
            | page instance ID        | de                                                                               | string           | Page View |
            | sysEnv                  | app                                                                              | string           | Page View |
            | page segment            | personas                                                                         | string           | Page View |
            | page intent             | informacion                                                                      | string           | Page View |
            | business unit           | BBVA Mexico                                                                      | string           | Page View |
            | page area               | privada                                                                          | string           | Page View |
            | language                | ES                                                                               | string           | Page View |
            | channel                 | online                                                                           | string           | Page View |
            | site app name           | App BBVA Mexico                                                                  | string           | Page View |
            | project name            | Glomo                                                                            | string           | Page View |
            | level 1                 | entrenador financiero                                                            | string           | Page View |
            | level 2                 | configurar objetivo                                                              | string           | Page View |
            | level 3                 | edicion objetivo                                                                 | string           | Page View |
            | page name               | app:privada:personas:entrenador financiero:configurar objetivo:edicion objetivo  | string           | Page View |
            | device mobile           | si                                                                               | string           | Page View |
            | user segment global     | 003001                                                                           | string           | Page View |
            | user userState          | logado                                                                           | string           | Page View |
            | user gender             | gender                                                                           | regexp named     | Page View |
            | user age                | age                                                                              | regexp named     | Page View |
            | internal campaign       |                                                                                  | empty array      | Page View |
            | optimization attributes |                                                                                  | empty array      | Page View |
            | application             |                                                                                  | empty str object | Page View |
            | products attributes     |                                                                                  | empty array      | Page View |

    @ANA_EVENT_AFC016
    @analytics
    @ios @android @web
    @ios-done @android-done @web-done
    @MX
    @backend(test) @vbank
    Scenario: View change target
        Given a user with the following criteria
            | criteria               |
            | advice financial coach |
        And the user accesses the financial coach section
        And the user open the coach targets modal
        And the user open step 1 of the coach targets modal
        And the analytics interceptor service is initiated
        When the user selects a target in coach operational
        Then the analytics events contains the following variables
            | item                    | value                                                                                             | type             | event     | event number |
            | analytics               | analytics/glomo_base                                                                              | json schema      | Page View | 3            |
            | version DL              | 20250414_5.0                                                                                      | string           | Page View | 3            |
            | page instance ID        | de                                                                                                | string           | Page View | 3            |
            | sysEnv                  | app                                                                                               | string           | Page View | 3            |
            | page segment            | personas                                                                                          | string           | Page View | 3            |
            | page intent             | informacion                                                                                       | string           | Page View | 3            |
            | business unit           | BBVA Mexico                                                                                       | string           | Page View | 3            |
            | page area               | privada                                                                                           | string           | Page View | 3            |
            | language                | ES                                                                                                | string           | Page View | 3            |
            | channel                 | online                                                                                            | string           | Page View | 3            |
            | site app name           | App BBVA Mexico                                                                                   | string           | Page View | 3            |
            | project name            | Glomo                                                                                             | string           | Page View | 3            |
            | level 1                 | entrenador financiero                                                                             | string           | Page View | 3            |
            | level 2                 | configurar objetivo                                                                               | string           | Page View | 3            |
            | level 3                 | edicion objetivo                                                                                  | string           | Page View | 3            |
            | level 4                 | cambiar objetivo                                                                                  | string           | Page View | 3            |
            | page name               | app:privada:personas:entrenador financiero:configurar objetivo:edicion objetivo:cambiar objetivo  | string           | Page View | 3            |
            | device mobile           | si                                                                                                | string           | Page View | 3            |
            | user segment global     | 003001                                                                                            | string           | Page View | 3            |
            | user userState          | logado                                                                                            | string           | Page View | 3            |
            | user gender             | gender                                                                                            | regexp named     | Page View | 3            |
            | user age                | age                                                                                               | regexp named     | Page View | 3            |
            | internal campaign       |                                                                                                   | empty array      | Page View | 3            |
            | optimization attributes |                                                                                                   | empty array      | Page View | 3            |
            | application             |                                                                                                   | empty str object | Page View | 3            |
            | products attributes     |                                                                                                   | empty array      | Page View | 3            |

    @ANA_EVENT_AFC017
    @analytics
    @ios @android @web
    @ios-done @android-done @web-done
    @MX
    @backend(test) @vbank
    Scenario: Internal link change target modal
        Given a user with the following criteria
            | criteria               |
            | advice financial coach |
        And the user accesses the financial coach section
        And the user open the coach targets modal
        And the analytics interceptor service is initiated
        And the user open step 1 of the coach targets modal
        And the user selects a target in coach operational
        When the user selects change target in the change target modal
        Then the analytics events contains the following variables
            | item                    | value                                                                                              | type             | event         |
            | analytics               | analytics/glomo_base                                                                               | json schema      | Internal Link |
            | version DL              | 20250414_5.0                                                                                       | string           | Internal Link |
            | page instance ID        | de                                                                                                 | string           | Internal Link |
            | sysEnv                  | app                                                                                                | string           | Internal Link |
            | page segment            | personas                                                                                           | string           | Internal Link |
            | page intent             | informacion                                                                                        | string           | Internal Link |
            | business unit           | BBVA Mexico                                                                                        | string           | Internal Link |
            | page area               | privada                                                                                            | string           | Internal Link |
            | language                | ES                                                                                                 | string           | Internal Link |
            | channel                 | online                                                                                             | string           | Internal Link |
            | site app name           | App BBVA Mexico                                                                                    | string           | Internal Link |
            | project name            | Glomo                                                                                              | string           | Internal Link |
            | level 1                 | entrenador financiero                                                                              | string           | Internal Link |
            | level 2                 | configurar objetivo                                                                                | string           | Internal Link |
            | level 3                 | edicion objetivo                                                                                   | string           | Internal Link |
            | level 4                 | cambiar objetivo                                                                                   | string           | Internal Link |
            | page name               | app:privada:personas:entrenador financiero:configurar objetivo:edicion objetivo:cambiar objetivo   | string           | Internal Link |
            | link name               | modificar objetivo                                                                                 | string           | Internal Link |
            | device mobile           | si                                                                                                 | string           | Internal Link |
            | user segment global     | 003001                                                                                             | string           | Internal Link |
            | user userState          | logado                                                                                             | string           | Internal Link |
            | user gender             | gender                                                                                             | regexp named     | Internal Link |
            | user age                | age                                                                                                | regexp named     | Internal Link |
            | internal campaign       |                                                                                                    | empty array      | Internal Link |
            | optimization attributes |                                                                                                    | empty array      | Internal Link |
            | application             |                                                                                                    | empty str object | Internal Link |
            | products attributes     |                                                                                                    | empty array      | Internal Link |

    @ANA_EVENT_AFC018
    @analytics
    @ios @android @web
    @ios-done @android-done @web-done
    @MX
    @backend(test) @vbank
    Scenario: View delete target modal
        Given a user with the following criteria
            | criteria               |
            | advice financial coach |
        And the user accesses the financial coach section
        And the user open the coach targets modal
        And the analytics interceptor service is initiated
        When the user delete a target in coach operational
        Then the analytics events contains the following variables
            | item                    | value                                                                                              | type             | event     |
            | analytics               | analytics/glomo_base                                                                               | json schema      | Page View |
            | version DL              | 20250414_5.0                                                                                       | string           | Page View |
            | page instance ID        | de                                                                                                 | string           | Page View |
            | sysEnv                  | app                                                                                                | string           | Page View |
            | page segment            | personas                                                                                           | string           | Page View |
            | page intent             | informacion                                                                                        | string           | Page View |
            | business unit           | BBVA Mexico                                                                                        | string           | Page View |
            | page area               | privada                                                                                            | string           | Page View |
            | language                | ES                                                                                                 | string           | Page View |
            | channel                 | online                                                                                             | string           | Page View |
            | site app name           | App BBVA Mexico                                                                                    | string           | Page View |
            | project name            | Glomo                                                                                              | string           | Page View |
            | level 1                 | entrenador financiero                                                                              | string           | Page View |
            | level 2                 | configurar objetivo                                                                                | string           | Page View |
            | level 3                 | edicion objetivo                                                                                   | string           | Page View |
            | level 4                 | eliminar objetivo                                                                                  | string           | Page View |
            | page name               | app:privada:personas:entrenador financiero:configurar objetivo:edicion objetivo:eliminar objetivo  | string           | Page View |
            | device mobile           | si                                                                                                 | string           | Page View |
            | user segment global     | 003001                                                                                             | string           | Page View |
            | user userState          | logado                                                                                             | string           | Page View |
            | user gender             | gender                                                                                             | regexp named     | Page View |
            | user age                | age                                                                                                | regexp named     | Page View |
            | internal campaign       |                                                                                                    | empty array      | Page View |
            | optimization attributes |                                                                                                    | empty array      | Page View |
            | application             |                                                                                                    | empty str object | Page View |
            | products attributes     |                                                                                                    | empty array      | Page View |

    @ANA_EVENT_AFC019
    @analytics
    @ios @android @web
    @ios-done @android-done @web-done
    @MX
    @backend(test) @vbank
    Scenario: Interaction link delete target modal
        Given a user with the following criteria
            | criteria               |
            | advice financial coach |
        And the user accesses the financial coach section
        And the user open the coach targets modal
        And the analytics interceptor service is initiated
        When the user confirms delete target
        Then the analytics events contains the following variables
            | item                    | value                                                                                              | type             | event            |
            | analytics               | analytics/glomo_base                                                                               | json schema      | Interaction Link |
            | version DL              | 20250414_5.0                                                                                       | string           | Interaction Link |
            | page instance ID        | de                                                                                                 | string           | Interaction Link |
            | sysEnv                  | app                                                                                                | string           | Interaction Link |
            | page segment            | personas                                                                                           | string           | Interaction Link |
            | page intent             | informacion                                                                                        | string           | Interaction Link |
            | business unit           | BBVA Mexico                                                                                        | string           | Interaction Link |
            | page area               | privada                                                                                            | string           | Interaction Link |
            | language                | ES                                                                                                 | string           | Interaction Link |
            | channel                 | online                                                                                             | string           | Interaction Link |
            | site app name           | App BBVA Mexico                                                                                    | string           | Interaction Link |
            | project name            | Glomo                                                                                              | string           | Interaction Link |
            | level 1                 | entrenador financiero                                                                              | string           | Interaction Link |
            | level 2                 | configurar objetivo                                                                                | string           | Interaction Link |
            | level 3                 | edicion objetivo                                                                                   | string           | Interaction Link |
            | level 4                 | eliminar objetivo                                                                                  | string           | Interaction Link |
            | page name               | app:privada:personas:entrenador financiero:configurar objetivo:edicion objetivo:eliminar objetivo  | string           | Interaction Link |
            | device mobile           | si                                                                                                 | string           | Interaction Link |
            | user segment global     | 003001                                                                                             | string           | Interaction Link |
            | user userState          | logado                                                                                             | string           | Interaction Link |
            | interaction level       | eliminar objetivo                                                                                  | string           | Interaction Link |
            | user gender             | gender                                                                                             | regexp named     | Interaction Link |
            | user age                | age                                                                                                | regexp named     | Interaction Link |
            | internal campaign       |                                                                                                    | empty array      | Interaction Link |
            | optimization attributes |                                                                                                    | empty array      | Interaction Link |
            | application             |                                                                                                    | empty str object | Interaction Link |
            | products attributes     |                                                                                                    | empty array      | Interaction Link |

    @ANA_EVENT_AFC020
    @analytics
    @ios @android @web
    @ios-done @android-done @web-done
    @MX
    @backend(test) @vbank
    Scenario: View continue without target modal
        Given a user with the following criteria
            | criteria               |
            | advice financial coach |
        And the user accesses the financial coach section
        And the user open the coach targets modal
        And the analytics interceptor service is initiated
        When the user closes the coach targets modal
        Then the analytics events contains the following variables
            | item                    | value                                                                                                   | type             | event     |
            | analytics               | analytics/glomo_base                                                                                    | json schema      | Page View |
            | version DL              | 20250414_5.0                                                                                            | string           | Page View |
            | page instance ID        | de                                                                                                      | string           | Page View |
            | sysEnv                  | app                                                                                                     | string           | Page View |
            | page segment            | personas                                                                                                | string           | Page View |
            | page intent             | informacion                                                                                             | string           | Page View |
            | business unit           | BBVA Mexico                                                                                             | string           | Page View |
            | page area               | privada                                                                                                 | string           | Page View |
            | language                | ES                                                                                                      | string           | Page View |
            | channel                 | online                                                                                                  | string           | Page View |
            | site app name           | App BBVA Mexico                                                                                         | string           | Page View |
            | project name            | Glomo                                                                                                   | string           | Page View |
            | level 1                 | entrenador financiero                                                                                   | string           | Page View |
            | level 2                 | configurar objetivo                                                                                     | string           | Page View |
            | level 3                 | edicion objetivo                                                                                        | string           | Page View |
            | level 4                 | continuar sin objetivo                                                                                  | string           | Page View |
            | page name               | app:privada:personas:entrenador financiero:configurar objetivo:edicion objetivo:continuar sin objetivo  | string           | Page View |
            | device mobile           | si                                                                                                      | string           | Page View |
            | user segment global     | 003001                                                                                                  | string           | Page View |
            | user userState          | logado                                                                                                  | string           | Page View |
            | user gender             | gender                                                                                                  | regexp named     | Page View |
            | user age                | age                                                                                                     | regexp named     | Page View |
            | internal campaign       |                                                                                                         | empty array      | Page View |
            | optimization attributes |                                                                                                         | empty array      | Page View |
            | application             |                                                                                                         | empty str object | Page View |
            | products attributes     |                                                                                                         | empty array      | Page View |

    @ANA_EVENT_AFC021
    @analytics
    @ios @android @web
    @ios-done @android-done @web-done
    @MX
    @backend(test) @vbank
    Scenario: Interaction link continue without target modal
        Given a user with the following criteria
            | criteria               |
            | advice financial coach |
        And the user accesses the financial coach section
        And the user open the coach targets modal
        And the user closes the coach targets modal
        And the analytics interceptor service is initiated
        When the user selects continue without target in the continue without target modal
        Then the analytics events contains the following variables
            | item                    | value                                                                                                   | type             | event         |
            | analytics               | analytics/glomo_base                                                                                    | json schema      | Internal Link |
            | version DL              | 20250414_5.0                                                                                            | string           | Internal Link |
            | page instance ID        | de                                                                                                      | string           | Internal Link |
            | sysEnv                  | app                                                                                                     | string           | Internal Link |
            | page segment            | personas                                                                                                | string           | Internal Link |
            | page intent             | informacion                                                                                             | string           | Internal Link |
            | business unit           | BBVA Mexico                                                                                             | string           | Internal Link |
            | page area               | privada                                                                                                 | string           | Internal Link |
            | language                | ES                                                                                                      | string           | Internal Link |
            | channel                 | online                                                                                                  | string           | Internal Link |
            | site app name           | App BBVA Mexico                                                                                         | string           | Internal Link |
            | project name            | Glomo                                                                                                   | string           | Internal Link |
            | level 1                 | entrenador financiero                                                                                   | string           | Internal Link |
            | level 2                 | configurar objetivo                                                                                     | string           | Internal Link |
            | level 3                 | edicion objetivo                                                                                        | string           | Internal Link |
            | level 4                 | continuar sin objetivo                                                                                  | string           | Internal Link |
            | page name               | app:privada:personas:entrenador financiero:configurar objetivo:edicion objetivo:continuar sin objetivo  | string           | Internal Link |
            | link name               | continuar sin objetivo                                                                                  | string           | Internal Link |
            | device mobile           | si                                                                                                      | string           | Internal Link |
            | user segment global     | 003001                                                                                                  | string           | Internal Link |
            | user userState          | logado                                                                                                  | string           | Internal Link |
            | user gender             | gender                                                                                                  | regexp named     | Internal Link |
            | user age                | age                                                                                                     | regexp named     | Internal Link |
            | internal campaign       |                                                                                                         | empty array      | Internal Link |
            | optimization attributes |                                                                                                         | empty array      | Internal Link |
            | application             |                                                                                                         | empty str object | Internal Link |
            | products attributes     |                                                                                                         | empty array      | Internal Link |

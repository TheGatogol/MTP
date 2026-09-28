@tipsFinanceProfilingAnalytics
Feature: Analytics - Tips Finance Profiling

    @ANA_EVENT_TFP001
    @analytics
    @MX
    @web @ios @android
    @vbank @backend(test)
    @web-done
    Scenario: Tips Finance Profiling Analytics Page View - onboarding one
        Given a user with the following criteria
            | criteria                  |
            | tips finance profiling    |
        And the user accesses to dashboard
        And the analytics interceptor service is initiated
        When the user accesses to edufin
        Then the analytics events contains the following variables:
            | item              | value                                                         | type             | event     |
            | analytics         | analytics/glomo_base                                          | json schema      | Page View |
            | version DL        | 20250414_5.0                                                  | string           | Page View |
            | page intent       | informacion                                                   | string           | Page View |
            | page segment      | personas                                                      | string           | Page View |
            | page name         | app:privada:personas:camino financiero jovenes:onboarding1    | string           | Page View |
            | sysEnv            | app                                                           | string           | Page View |
            | channel           | online                                                        | string           | Page View |
            | language          | ES                                                            | string           | Page View |
            | level 1           | camino financiero jovenes                                     | string           | Page View |
            | level 2           | onboarding1                                                   | string           | Page View |
            | business unit     | BBVA Mexico                                                   | string           | Page View |
            | site app name     | App BBVA Mexico                                               | string           | Page View |
            | project name      | Glomo                                                         | string           | Page View |
            | page area         | privada                                                       | string           | Page View |
            | device user agent | GLOMO_MX/99.99.99 (Android;14;Samsung)                        | string           | Page View |
            | device mobile     | si                                                            | string           | Page View |
            | device root       |                                                               | string           | Page View |
            | user userState    | logado                                                        | string           | Page View |
            | user segment global | 003001                                                      | string           | Page View |
            | user gender       | gender                                                        | regexp named     | Page View |
            | user age          | age                                                           | regexp named     | Page View |
            | application name  |                                                               | empty str object | Page View |

    @ANA_EVENT_TFP002
    @analytics
    @MX
    @web @ios @android
    @vbank @backend(test)
    @web-done
    Scenario: Tips Finance Profiling Analytics Page View - onboarding two
        Given a user with the following criteria
            | criteria                  |
            | tips finance profiling    |
        And the user accesses to dashboard
        And the analytics interceptor service is initiated
        When the user accesses to edufin
        Then the analytics events contains the following variables
            | item              | value                                                         | type             | event     | event number  |
            | analytics         | analytics/glomo_base                                          | json schema      | Page View | 2             |
            | version DL        | 20250414_5.0                                                  | string           | Page View | 2             |
            | page intent       | informacion                                                   | string           | Page View | 2             |
            | page segment      | personas                                                      | string           | Page View | 2             |
            | page name         | app:privada:personas:camino financiero jovenes:onboarding2    | string           | Page View | 2             |
            | sysEnv            | app                                                           | string           | Page View | 2             |
            | channel           | online                                                        | string           | Page View | 2             |
            | language          | ES                                                            | string           | Page View | 2             |
            | level 1           | camino financiero jovenes                                     | string           | Page View | 2             |
            | level 2           | onboarding2                                                   | string           | Page View | 2             |
            | business unit     | BBVA Mexico                                                   | string           | Page View | 2             |
            | site app name     | App BBVA Mexico                                               | string           | Page View | 2             |
            | project name      | Glomo                                                         | string           | Page View | 2             |
            | page area         | privada                                                       | string           | Page View | 2             |
            | device user agent | GLOMO_MX/99.99.99 (Android;14;Samsung)                        | string           | Page View | 2             |
            | device mobile     | si                                                            | string           | Page View | 2             |
            | device root       |                                                               | string           | Page View | 2             |
            | user userState    | logado                                                        | string           | Page View | 2             |
            | user segment global | 003001                                                      | string           | Page View | 2             |
            | user gender       | gender                                                        | regexp named     | Page View | 2             |
            | user age          | age                                                           | regexp named     | Page View | 2             |
            | application name  |                                                               | empty str object | Page View | 2             |

    @ANA_EVENT_TFP003
    @analytics
    @MX
    @web @ios @android
    @vbank @backend(test)
    @web-done
    Scenario: Tips Finance Profiling Analytics Internal Link - entry point dashboard empty badges
        Given a user with the following criteria
            | criteria                  |
            | tips finance profiling    |
        And the user accesses to dashboard
        And the analytics interceptor service is initiated
        When the user accesses to edufin
        Then the analytics events contains the following variables
            | item                | value                                               | type             | event         |
            | analytics           | analytics/glomo_base                                | json schema      | Internal Link |
            | version DL          | 20250414_5.0                                        | string           | Internal Link |
            | page intent         | informacion                                         | string           | Internal Link |
            | page segment        | personas                                            | string           | Internal Link |
            | page name           | app:privada:personas:posicion global:destacado      | string           | Internal Link |
            | sysEnv              | app                                                 | string           | Internal Link |
            | channel             | online                                              | string           | Internal Link |
            | language            | ES                                                  | string           | Internal Link |
            | level 1             | posicion global                                     | string           | Internal Link |
            | level 2             | destacado                                           | string           | Internal Link |
            | business unit       | BBVA Mexico                                         | string           | Internal Link |
            | site app name       | App BBVA Mexico                                     | string           | Internal Link |
            | project name        | Glomo                                               | string           | Internal Link |
            | page area           | privada                                             | string           | Internal Link |
            | link name           | colecciona todas la insignias mostrar insignias     | string           | Internal Link |
            | device user agent   | GLOMO_MX/99.99.99 (Android;14;Samsung)              | string           | Internal Link |
            | device mobile       | si                                                  | string           | Internal Link |
            | device root         |                                                     | string           | Internal Link |
            | user userState      | logado                                              | string           | Internal Link |
            | user segment global | 003001                                              | string           | Internal Link |
            | user gender         | gender                                              | regexp named     | Internal Link |
            | user age            | age                                                 | regexp named     | Internal Link |
            | application name    |                                                     | empty str object | Internal Link |

    @ANA_EVENT_TFP004
    @analytics
    @MX
    @web @ios @android
    @vbank @backend(test)
    @web-done
    Scenario: Tips Finance Profiling Analytics Page View - dashboard badges
        Given a user with the following criteria
            | criteria                  |
            | tips finance profiling    |
        And the user accesses to edufin
        And the analytics interceptor service is initiated
        When the user close tips finance profiling onboarding
        Then the analytics events contains the following variables
            | item                  | value                                                                         | type             | event     |
            | analytics             | analytics/glomo_base                                                          | json schema      | Page View |
            | version DL            | 20250414_5.0                                                                  | string           | Page View |
            | page intent           | informacion                                                                   | string           | Page View |
            | page segment          | personas                                                                      | string           | Page View |
            | page name             | app:privada:personas:camino financiero jovenes:insignias:dashboard            | string           | Page View |
            | sysEnv                | app                                                                           | string           | Page View |
            | channel               | online                                                                        | string           | Page View |
            | language              | ES                                                                            | string           | Page View |
            | level 1               | camino financiero jovenes                                                     | string           | Page View |
            | level 2               | insignias                                                                     | string           | Page View |
            | level 3               | dashboard                                                                     | string           | Page View |
            | business unit         | BBVA Mexico                                                                   | string           | Page View |
            | site app name         | App BBVA Mexico                                                               | string           | Page View |
            | project name          | Glomo                                                                         | string           | Page View |
            | page area             | privada                                                                       | string           | Page View |
            | device user agent     | GLOMO_MX/99.99.99 (Android;14;Samsung)                                        | string           | Page View |
            | device mobile         | si                                                                            | string           | Page View |
            | device root           |                                                                               | string           | Page View |
            | user userState        | logado                                                                        | string           | Page View |
            | user segment global   | 003001                                                                        | string           | Page View |
            | user segment profile  | 2 insignias                                                                   | string           | Page View |
            | user gender           | gender                                                                        | regexp named     | Page View |
            | user age              | age                                                                           | regexp named     | Page View |
            | custom fields         | insignia pendiente:tarjeta invisible, insignia pendiente:mundo dimo, insignia pendiente:conquista digital, insignia pendiente:primera exploración, insignia pendiente:dinero inteligente, insignia pendiente:hacks en acción, insignia pendiente:voluntad de hierro, insignia pendiente:cofre del tesoro, insignia pendiente:llave digital, insignia pendiente:pagos del futuro, insignia pendiente:punto de partida  | string | Page View |
            | application name      |                                                                               | empty str object | Page View |

    @ANA_EVENT_TFP005
    @analytics
    @MX
    @web @ios @android
    @vbank @backend(test)
    @web-done
    Scenario: Tips Finance Profiling Analytics Internal Link - profiler entry point
        Given a user with the following criteria
            | criteria                          |
            | tips finance profiling success    |
        And the user accesses to edufin
        And the user close tips finance profiling onboarding
        And the analytics interceptor service is initiated
        When the user accesses to profiling form
        Then the analytics events contains the following variables
            | item                | value                                                                           | type             | event         |
            | analytics           | analytics/glomo_base                                                            | json schema      | Internal Link |
            | version DL          | 20250414_5.0                                                                    | string           | Internal Link |
            | page intent         | informacion                                                                     | string           | Internal Link |
            | page segment        | personas                                                                        | string           | Internal Link |
            | page name           | app:privada:personas:camino financiero jovenes:insignias:dashboard              | string           | Internal Link |
            | sysEnv              | app                                                                             | string           | Internal Link |
            | channel             | online                                                                          | string           | Internal Link |
            | language            | ES                                                                              | string           | Internal Link |
            | level 1             | camino financiero jovenes                                                       | string           | Internal Link |
            | level 2             | insignias                                                                       | string           | Internal Link |
            | level 3             | dashboard                                                                       | string           | Internal Link |
            | business unit       | BBVA Mexico                                                                     | string           | Internal Link |
            | site app name       | App BBVA Mexico                                                                 | string           | Internal Link |
            | project name        | Glomo                                                                           | string           | Internal Link |
            | page area           | privada                                                                         | string           | Internal Link |
            | link name           | vive tu propia experiencia                                                      | string           | Internal Link |
            | device user agent   | GLOMO_MX/99.99.99 (Android;14;Samsung)                                          | string           | Internal Link |
            | device mobile       | si                                                                              | string           | Internal Link |
            | device root         |                                                                                 | string           | Internal Link |
            | user userState      | logado                                                                          | string           | Internal Link |
            | user segment global | 003001                                                                          | string           | Internal Link |
            | user segment profile| 0 insignias                                                                     | string           | Internal Link |
            | user gender         | gender                                                                          | regexp named     | Internal Link |
            | user age            | age                                                                             | regexp named     | Internal Link |
            | custom fields       | insignia pendiente:hacks en acción, insignia pendiente:mundo dimo, insignia pendiente:primera exploración, insignia pendiente:voluntad de hierro, insignia pendiente:conquista digital, insignia pendiente:punto de partida, insignia pendiente:tarjeta invisible, insignia pendiente:entrada triunfal, insignia pendiente:identidad activada, insignia pendiente:pagos del futuro, insignia pendiente:dinero inteligente, insignia pendiente:llave digital, insignia pendiente:cofre del tesoro | string           | Internal Link |
            | application name    |                                                                                 | empty str object | Internal Link |

    @ANA_EVENT_TFP006
    @analytics
    @MX
    @web @ios @android
    @vbank @backend(test)
    @web-done
    Scenario: Tips Finance Profiling Analytics Page View - badge detail
        Given a user with the following criteria
            | criteria                  |
            | tips finance profiling    |
        And the user accesses to edufin
        And the user close tips finance profiling onboarding
        And the analytics interceptor service is initiated
        When the user enters a "badge" to view pending content
        Then the analytics events contains the following variables
            | item                | value                                                                                                       | type             | event     |
            | analytics           | analytics/glomo_base                                                                                        | json schema      | Page View |
            | version DL          | 20250414_5.0                                                                                                | string           | Page View |
            | page intent         | informacion                                                                                                 | string           | Page View |
            | page segment        | personas                                                                                                    | string           | Page View |
            | page name           | app:privada:personas:camino financiero jovenes:insignias:detalle                                            | string           | Page View |
            | sysEnv              | app                                                                                                         | string           | Page View |
            | channel             | online                                                                                                      | string           | Page View |
            | language            | ES                                                                                                          | string           | Page View |
            | level 1             | camino financiero jovenes                                                                                   | string           | Page View |
            | level 2             | insignias                                                                                                   | string           | Page View |
            | level 3             | detalle                                                                                                     | string           | Page View |
            | business unit       | BBVA Mexico                                                                                                 | string           | Page View |
            | site app name       | App BBVA Mexico                                                                                             | string           | Page View |
            | project name        | Glomo                                                                                                       | string           | Page View |
            | page area           | privada                                                                                                     | string           | Page View |
            | device user agent   | GLOMO_MX/99.99.99 (Android;14;Samsung)                                                                      | string           | Page View |
            | device mobile       | si                                                                                                          | string           | Page View |
            | device root         |                                                                                                             | string           | Page View |
            | user userState      | logado                                                                                                      | string           | Page View |
            | user segment global | 003001                                                                                                      | string           | Page View |
            | user gender         | gender                                                                                                      | regexp named     | Page View |
            | user age            | age                                                                                                         | regexp named     | Page View |
            | custom fields       | insignia pendiente:cofre del tesoro, mision pendiente:crea un apartado, mision pendiente:guarda un dinerito | string           | Page View |
            | application name    |                                                                                                             | empty str object | Page View |

    @ANA_EVENT_TFP007
    @analytics
    @MX
    @web @ios @android
    @vbank @backend(test)
    @web-done
    Scenario: Tips Finance Profiling Analytics Page View - FAQ season
        Given a user with the following criteria
            | criteria                  |
            | tips finance profiling    |
        And the user accesses to edufin
        And the user close tips finance profiling onboarding
        And the analytics interceptor service is initiated
        When the user accesses the faq in season info
        Then the analytics events contains the following variables
            | item                | value                                                                                   | type             | event     |
            | analytics           | analytics/glomo_base                                                                    | json schema      | Page View |
            | version DL          | 20250414_5.0                                                                            | string           | Page View |
            | page intent         | informacion                                                                             | string           | Page View |
            | page segment        | personas                                                                                | string           | Page View |
            | page name           | app:privada:personas:camino financiero jovenes:insignias:que es avance de temporada     | string           | Page View |
            | sysEnv              | app                                                                                     | string           | Page View |
            | channel             | online                                                                                  | string           | Page View |
            | language            | ES                                                                                      | string           | Page View |
            | level 1             | camino financiero jovenes                                                               | string           | Page View |
            | level 2             | insignias                                                                               | string           | Page View |
            | level 3             | que es avance de temporada                                                              | string           | Page View |
            | business unit       | BBVA Mexico                                                                             | string           | Page View |
            | site app name       | App BBVA Mexico                                                                         | string           | Page View |
            | project name        | Glomo                                                                                   | string           | Page View |
            | page area           | privada                                                                                 | string           | Page View |
            | device user agent   | GLOMO_MX/99.99.99 (Android;14;Samsung)                                                  | string           | Page View |
            | device mobile       | si                                                                                      | string           | Page View |
            | device root         |                                                                                         | string           | Page View |
            | user userState      | logado                                                                                  | string           | Page View |
            | user segment global | 003001                                                                                  | string           | Page View |
            | user gender         | gender                                                                                  | regexp named     | Page View |
            | user age            | age                                                                                     | regexp named     | Page View |
            | application name    |                                                                                         | empty str object | Page View |

    @ANA_EVENT_TFP008
    @analytics
    @MX
    @web @ios @android
    @vbank @backend(test)
    @web-done
    Scenario: Tips Finance Profiling Analytics Page View - season detail
        Given a user with the following criteria
            | criteria                  |
            | tips finance profiling    |
        And the user accesses to edufin
        And the user close tips finance profiling onboarding
        And the analytics interceptor service is initiated
        When the user enters to view their season history
        Then the analytics events contains the following variables
            | item                | value                                                                                   | type             | event     |
            | analytics           | analytics/glomo_base                                                                    | json schema      | Page View |
            | version DL          | 20250414_5.0                                                                            | string           | Page View |
            | page intent         | informacion                                                                             | string           | Page View |
            | page segment        | personas                                                                                | string           | Page View |
            | page name           | app:privada:personas:camino financiero jovenes:insignias:detalle del avance             | string           | Page View |
            | sysEnv              | app                                                                                     | string           | Page View |
            | channel             | online                                                                                  | string           | Page View |
            | language            | ES                                                                                      | string           | Page View |
            | level 1             | camino financiero jovenes                                                               | string           | Page View |
            | level 2             | insignias                                                                               | string           | Page View |
            | level 3             | detalle del avance                                                                      | string           | Page View |
            | business unit       | BBVA Mexico                                                                             | string           | Page View |
            | site app name       | App BBVA Mexico                                                                         | string           | Page View |
            | project name        | Glomo                                                                                   | string           | Page View |
            | page area           | privada                                                                                 | string           | Page View |
            | device user agent   | GLOMO_MX/99.99.99 (Android;14;Samsung)                                                  | string           | Page View |
            | device mobile       | si                                                                                      | string           | Page View |
            | device root         |                                                                                         | string           | Page View |
            | user userState      | logado                                                                                  | string           | Page View |
            | user segment global | 003001                                                                                  | string           | Page View |
            | user gender         | gender                                                                                  | regexp named     | Page View |
            | user age            | age                                                                                     | regexp named     | Page View |
            | application name    |                                                                                         | empty str object | Page View |

    @ANA_EVENT_TFP009
    @analytics
    @MX
    @web @ios @android
    @vbank @backend(test)
    @web-done
    Scenario: Tips Finance Profiling Analytics Page View - profiler form
        Given a user with the following criteria
            | criteria                          |
            | tips finance profiling success    |
        And the user accesses to edufin
        And the user close tips finance profiling onboarding
        And the analytics interceptor service is initiated
        When the user accesses to profiling form
        Then the analytics events contains the following variables
            | item                | value                                                                                   | type             | event     |
            | analytics           | analytics/glomo_base                                                                    | json schema      | Page View |
            | version DL          | 20250414_5.0                                                                            | string           | Page View |
            | page intent         | informacion                                                                             | string           | Page View |
            | page segment        | personas                                                                                | string           | Page View |
            | page name           | app:privada:personas:camino financiero jovenes:insignias:descubrir perfil               | string           | Page View |
            | sysEnv              | app                                                                                     | string           | Page View |
            | channel             | online                                                                                  | string           | Page View |
            | language            | ES                                                                                      | string           | Page View |
            | level 1             | camino financiero jovenes                                                               | string           | Page View |
            | level 2             | insignias                                                                               | string           | Page View |
            | level 3             | descubrir perfil                                                                        | string           | Page View |
            | business unit       | BBVA Mexico                                                                             | string           | Page View |
            | site app name       | App BBVA Mexico                                                                         | string           | Page View |
            | project name        | Glomo                                                                                   | string           | Page View |
            | page area           | privada                                                                                 | string           | Page View |
            | device user agent   | GLOMO_MX/99.99.99 (Android;14;Samsung)                                                  | string           | Page View |
            | device mobile       | si                                                                                      | string           | Page View |
            | device root         |                                                                                         | string           | Page View |
            | user userState      | logado                                                                                  | string           | Page View |
            | user segment global | 003001                                                                                  | string           | Page View |
            | user gender         | gender                                                                                  | regexp named     | Page View |
            | user age            | age                                                                                     | regexp named     | Page View |
            | application name    |                                                                                         | empty str object | Page View |

    @ANA_EVENT_TFP010
    @analytics
    @MX
    @web @ios @android
    @vbank @backend(test)
    @web-done
    Scenario: Tips Finance Profiling Analytics Page View - profile result
        Given a user with the following criteria
            | criteria                          |
            | tips finance profiling success    |
        And the user accesses to edufin
        And the user close tips finance profiling onboarding
        And the user accesses to profiling form
        And the analytics interceptor service is initiated
        When the user discovers profile
        Then the analytics events contains the following variables
            | item                | value                                                                                   | type             | event     |
            | analytics           | analytics/glomo_base                                                                    | json schema      | Page View |
            | version DL          | 20250414_5.0                                                                            | string           | Page View |
            | page intent         | informacion                                                                             | string           | Page View |
            | page segment        | personas                                                                                | string           | Page View |
            | page name           | app:privada:personas:camino financiero jovenes:insignias:tu perfil                      | string           | Page View |
            | sysEnv              | app                                                                                     | string           | Page View |
            | channel             | online                                                                                  | string           | Page View |
            | language            | ES                                                                                      | string           | Page View |
            | level 1             | camino financiero jovenes                                                               | string           | Page View |
            | level 2             | insignias                                                                               | string           | Page View |
            | level 3             | tu perfil                                                                               | string           | Page View |
            | business unit       | BBVA Mexico                                                                             | string           | Page View |
            | site app name       | App BBVA Mexico                                                                         | string           | Page View |
            | project name        | Glomo                                                                                   | string           | Page View |
            | page area           | privada                                                                                 | string           | Page View |
            | device user agent   | GLOMO_MX/99.99.99 (Android;14;Samsung)                                                  | string           | Page View |
            | device mobile       | si                                                                                      | string           | Page View |
            | device root         |                                                                                         | string           | Page View |
            | user userState      | logado                                                                                  | string           | Page View |
            | user segment global | 003001                                                                                  | string           | Page View |
            | user gender         | gender                                                                                  | regexp named     | Page View |
            | user age            | age                                                                                     | regexp named     | Page View |
            | custom fields       | perfil:aprendiz del dinero                                                              | string           | Page View |
            | application name    |                                                                                         | empty str object | Page View |

    @ANA_EVENT_TFP011
    @analytics
    @MX
    @web @ios @android
    @vbank @backend(test)
    @web-done
    Scenario: Tips Finance Profiling Analytics Page View - error mission not available
        Given a user with the following criteria
            | criteria                  |
            | tips finance profiling    |
        And the user accesses to edufin
        And the user close tips finance profiling onboarding
        And the user enters a mission in a pending season badge two
        And the analytics interceptor service is initiated
        When the user retries error modal
        Then the analytics events contains the following variables
            | item                | value                                                                                   | type             | event     |
            | analytics           | analytics/glomo_base                                                                    | json schema      | Page View |
            | version DL          | 20250414_5.0                                                                            | string           | Page View |
            | page intent         | informacion                                                                             | string           | Page View |
            | page segment        | personas                                                                                | string           | Page View |
            | page name           | app:privada:personas:camino financiero jovenes:error mision no disponible               | string           | Page View |
            | sysEnv              | app                                                                                     | string           | Page View |
            | channel             | online                                                                                  | string           | Page View |
            | language            | ES                                                                                      | string           | Page View |
            | level 1             | camino financiero jovenes                                                               | string           | Page View |
            | level 2             | error mision no disponible                                                              | string           | Page View |
            | business unit       | BBVA Mexico                                                                             | string           | Page View |
            | site app name       | App BBVA Mexico                                                                         | string           | Page View |
            | project name        | Glomo                                                                                   | string           | Page View |
            | error page          | error mision no disponible                                                              | string           | Page View |
            | page area           | privada                                                                                 | string           | Page View |
            | device user agent   | GLOMO_MX/99.99.99 (Android;14;Samsung)                                                  | string           | Page View |
            | device mobile       | si                                                                                      | string           | Page View |
            | device root         |                                                                                         | string           | Page View |
            | user userState      | logado                                                                                  | string           | Page View |
            | user segment global | 003001                                                                                  | string           | Page View |
            | user gender         | gender                                                                                  | regexp named     | Page View |
            | user age            | age                                                                                     | regexp named     | Page View |
            | application name    |                                                                                         | empty str object | Page View |

    @ANA_EVENT_TFP012
    @analytics
    @MX
    @web @ios @android
    @vbank @backend(test)
    @web-done
    Scenario: Tips Finance Profiling Analytics Page View - error information not available
        Given a user with the following criteria
            | criteria                  |
            | tips finance profiling    |
        And the user accesses to edufin
        And the analytics interceptor service is initiated
        When the user retries error modal
        Then the analytics events contains the following variables
            | item                | value                                                                                   | type             | event     |
            | analytics           | analytics/glomo_base                                                                    | json schema      | Page View |
            | version DL          | 20250414_5.0                                                                            | string           | Page View |
            | page intent         | informacion                                                                             | string           | Page View |
            | page segment        | personas                                                                                | string           | Page View |
            | page name           | app:privada:personas:camino financiero jovenes:error informacion no disponible          | string           | Page View |
            | sysEnv              | app                                                                                     | string           | Page View |
            | channel             | online                                                                                  | string           | Page View |
            | language            | ES                                                                                      | string           | Page View |
            | level 1             | camino financiero jovenes                                                               | string           | Page View |
            | level 2             | error informacion no disponible                                                         | string           | Page View |
            | business unit       | BBVA Mexico                                                                             | string           | Page View |
            | site app name       | App BBVA Mexico                                                                         | string           | Page View |
            | project name        | Glomo                                                                                   | string           | Page View |
            | error page          | error informacion no disponible                                                         | string           | Page View |
            | page area           | privada                                                                                 | string           | Page View |
            | device user agent   | GLOMO_MX/99.99.99 (Android;14;Samsung)                                                  | string           | Page View |
            | device mobile       | si                                                                                      | string           | Page View |
            | device root         |                                                                                         | string           | Page View |
            | user userState      | logado                                                                                  | string           | Page View |
            | user segment global | 003001                                                                                  | string           | Page View |
            | user gender         | gender                                                                                  | regexp named     | Page View |
            | user age            | age                                                                                     | regexp named     | Page View |
            | application name    |                                                                                         | empty str object | Page View |

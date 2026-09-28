@desvinculationCodicelAnalytics
Feature: Analytics - Desvinculation Codicel

    @ANA_DC001
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: The user accesses to the desvinculation codicel - Analytics Page View
        Given a user with the following criteria
            | criteria            |
            | dimo desvinculation |
        When the user goes to the codicel desvinculation operation
        Then the device contains the following variables:
            | item                    | value                                                           | type             |
            | analytics               | analytics/glomo_base                                            | json schema      |
            | version DL              | 20250414_5.0                                                    | string           |
            | page name               | app:privada:personas:desvincular dimo:aceptacion                | string           |
            | level 1                 | desvincular dimo                                                | string           |
            | level 2                 | aceptacion                                                      | string           |
            | language                | ES                                                              | string           |
            | page area               | privada                                                         | string           |
            | page intent             | transaccion                                                     | string           |
            | channel                 | online                                                          | string           |
            | page instance ID        | de                                                              | string           |
            | page info version       | appVersion                                                      | regexp named     |
            | page segment            | personas                                                        | string           |
            | sysEnv                  | app                                                             | string           |
            | business unit           | BBVA Mexico                                                     | string           |
            | site app name           | App BBVA Mexico                                                 | string           |
            | project name            | Glomo                                                           | string           |
            | device mobile           | si                                                              | string           |
            | user userState          | logado                                                          | string           |
            | profile ID              | profileID                                                       | regexp named     |
            | user segment global     | 003001                                                          | string           |
            | user gender             | gender                                                          | regexp named     |
            | user age                | age                                                             | regexp named     |

    @ANA_DC002
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: Desvinculation - the user sees the confirmation modal - Analytics Page View
        Given a user with the following criteria
            | criteria            |
            | dimo desvinculation |
        And the user goes to the codicel desvinculation operation
        When the user accesses the help modal
        Then the device contains the following variables:
            | item                    | value                                                           | type             |
            | analytics               | analytics/glomo_base                                            | json schema      |
            | version DL              | 20250414_5.0                                                    | string           |
            | page name               | app:privada:personas:desvincular dimo:consulta de datos         | string           |
            | level 1                 | desvincular dimo                                                | string           |
            | level 2                 | consulta de datos                                               | string           |
            | language                | ES                                                              | string           |
            | page area               | privada                                                         | string           |
            | page intent             | transaccion                                                     | string           |
            | channel                 | online                                                          | string           |
            | page instance ID        | de                                                              | string           |
            | page info version       | appVersion                                                      | regexp named     |
            | page segment            | personas                                                        | string           |
            | sysEnv                  | app                                                             | string           |
            | business unit           | BBVA Mexico                                                     | string           |
            | site app name           | App BBVA Mexico                                                 | string           |
            | project name            | Glomo                                                           | string           |
            | device mobile           | si                                                              | string           |
            | user userState          | logado                                                          | string           |
            | profile ID              | profileID                                                       | regexp named     |
            | user segment global     | 003001                                                          | string           |
            | user gender             | gender                                                          | regexp named     |
            | user age                | age                                                             | regexp named     |

    @ANA_DC003
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: Desvinculation - the user accepts the confirmation modal - Analytics Interaction Link
        Given a user with the following criteria
            | criteria            |
            | dimo desvinculation |
        And the user goes to the codicel desvinculation operation
        And the user opens and accepts the help modal
        When the user checked desvinculation data usage
        Then the device contains the following variables:
            | item                    | value                                                           | type             |
            | analytics               | analytics/glomo_base                                            | json schema      |
            | version DL              | 20250414_5.0                                                    | string           |
            | page name               | app:privada:personas:desvincular dimo:aceptacion                | string           |
            | level 1                 | desvincular dimo                                                | string           |
            | level 2                 | aceptacion                                                      | string           |
            | language                | ES                                                              | string           |
            | page area               | privada                                                         | string           |
            | page intent             | transaccion                                                     | string           |
            | channel                 | online                                                          | string           |
            | page instance ID        | de                                                              | string           |
            | page info version       | appVersion                                                      | regexp named     |
            | page segment            | personas                                                        | string           |
            | sysEnv                  | app                                                             | string           |
            | business unit           | BBVA Mexico                                                     | string           |
            | site app name           | App BBVA Mexico                                                 | string           |
            | project name            | Glomo                                                           | string           |
            | interaction level       | acepto desvincular mis datos                                    | string           |
            | device mobile           | si                                                              | string           |
            | user userState          | logado                                                          | string           |
            | profile ID              | profileID                                                       | regexp named     |
            | user segment global     | 003001                                                          | string           |
            | user gender             | gender                                                          | regexp named     |
            | user age                | age                                                             | regexp named     |

    @ANA_DC004
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: Desvinculation - the user check desvinculate and sees the confirmation modal - Analytics Page View
        Given a user with the following criteria
            | criteria            |
            | dimo desvinculation |
        And the user goes to the codicel desvinculation operation
        And the user opens and accepts the help modal
        When the user check desvinculation and continue
        Then the device contains the following variables:
            | item                    | value                                                           | type             |
            | analytics               | analytics/glomo_base                                            | json schema      |
            | version DL              | 20250414_5.0                                                    | string           |
            | page name               | app:privada:personas:desvincular dimo:confirmar desvinculacion  | string           |
            | level 1                 | desvincular dimo                                                | string           |
            | level 2                 | confirmar desvinculacion                                        | string           |
            | language                | ES                                                              | string           |
            | page area               | privada                                                         | string           |
            | page intent             | transaccion                                                     | string           |
            | channel                 | online                                                          | string           |
            | page instance ID        | de                                                              | string           |
            | page info version       | appVersion                                                      | regexp named     |
            | page segment            | personas                                                        | string           |
            | sysEnv                  | app                                                             | string           |
            | business unit           | BBVA Mexico                                                     | string           |
            | site app name           | App BBVA Mexico                                                 | string           |
            | project name            | Glomo                                                           | string           |
            | device mobile           | si                                                              | string           |
            | user userState          | logado                                                          | string           |
            | profile ID              | profileID                                                       | regexp named     |
            | user segment global     | 003001                                                          | string           |
            | user gender             | gender                                                          | regexp named     |
            | user age                | age                                                             | regexp named     |

    @ANA_DC005
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: Desvinculation - the user sees otp modal - Analytics Page View
        Given a user with the following criteria
            | criteria            |
            | dimo desvinculation |
        And the user goes to the codicel desvinculation operation
        And the user opens and accepts the help modal
        When the user accept the desvinculation confirmation modal
        Then the device contains the following variables:
            | item                    | value                                                           | type             |
            | analytics               | analytics/glomo_base                                            | json schema      |
            | version DL              | 20250414_5.0                                                    | string           |
            | page name               | app:privada:personas:desvincular dimo:otp                       | string           |
            | level 1                 | desvincular dimo                                                | string           |
            | level 2                 | otp                                                             | string           |
            | language                | ES                                                              | string           |
            | page area               | privada                                                         | string           |
            | page intent             | transaccion                                                     | string           |
            | channel                 | online                                                          | string           |
            | page instance ID        | de                                                              | string           |
            | page info version       | appVersion                                                      | regexp named     |
            | page segment            | personas                                                        | string           |
            | sysEnv                  | app                                                             | string           |
            | business unit           | BBVA Mexico                                                     | string           |
            | site app name           | App BBVA Mexico                                                 | string           |
            | project name            | Glomo                                                           | string           |
            | device mobile           | si                                                              | string           |
            | user userState          | logado                                                          | string           |
            | profile ID              | profileID                                                       | regexp named     |
            | user segment global     | 003001                                                          | string           |
            | user gender             | gender                                                          | regexp named     |
            | user age                | age                                                             | regexp named     |

    @ANA_DC006
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: Desvinculation - the user desvinculated success - Analytics Page View
        Given a user with the following criteria
            | criteria            |
            | dimo desvinculation |
        And the user goes to the codicel desvinculation operation
        And the user opens and accepts the help modal
        When the user accept the desvinculation confirmation modal
        Then the device contains the following variables:
            | item                    | value                                                           | type             |
            | analytics               | analytics/glomo_base                                            | json schema      |
            | version DL              | 20250414_5.0                                                    | string           |
            | page name               | app:privada:personas:desvincular dimo:desvinculacion exitosa    | string           |
            | level 1                 | desvincular dimo                                                | string           |
            | level 2                 | desvinculacion exitosa                                          | string           |
            | language                | ES                                                              | string           |
            | page area               | privada                                                         | string           |
            | page intent             | transaccion                                                     | string           |
            | channel                 | online                                                          | string           |
            | page instance ID        | de                                                              | string           |
            | page info version       | appVersion                                                      | regexp named     |
            | page segment            | personas                                                        | string           |
            | sysEnv                  | app                                                             | string           |
            | business unit           | BBVA Mexico                                                     | string           |
            | site app name           | App BBVA Mexico                                                 | string           |
            | project name            | Glomo                                                           | string           |
            | device mobile           | si                                                              | string           |
            | user userState          | logado                                                          | string           |
            | profile ID              | profileID                                                       | regexp named     |
            | user segment global     | 003001                                                          | string           |
            | user gender             | gender                                                          | regexp named     |
            | user age                | age                                                             | regexp named     |

    @ANA_DC007
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: Desvinculation - the user desvinculated error - Analytics Error Page
        Given a user with the following criteria
            | criteria            |
            | dimo desvinculation |
        And the user goes to the codicel desvinculation operation
        And the user opens and accepts the help modal
        When the user accept the desvinculation confirmation modal
        Then the device contains the following variables:
            | item                    | value                                                           | type             |
            | analytics               | analytics/glomo_base                                            | json schema      |
            | version DL              | 20250414_5.0                                                    | string           |
            | page name               | app:privada:personas:desvincular dimo:error de servicio         | string           |
            | level 1                 | desvincular dimo                                                | string           |
            | level 2                 | error de servicio                                               | string           |
            | error page              | error de servicio                                               | string           |
            | language                | ES                                                              | string           |
            | page area               | privada                                                         | string           |
            | page intent             | transaccion                                                     | string           |
            | channel                 | online                                                          | string           |
            | page instance ID        | de                                                              | string           |
            | page info version       | appVersion                                                      | regexp named     |
            | page segment            | personas                                                        | string           |
            | sysEnv                  | app                                                             | string           |
            | business unit           | BBVA Mexico                                                     | string           |
            | site app name           | App BBVA Mexico                                                 | string           |
            | project name            | Glomo                                                           | string           |
            | device mobile           | si                                                              | string           |
            | user userState          | logado                                                          | string           |
            | profile ID              | profileID                                                       | regexp named     |
            | user segment global     | 003001                                                          | string           |
            | user gender             | gender                                                          | regexp named     |
            | user age                | age                                                             | regexp named     |

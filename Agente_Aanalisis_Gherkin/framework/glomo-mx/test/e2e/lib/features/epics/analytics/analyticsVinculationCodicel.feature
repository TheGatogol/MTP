@vinculationCodicelAnalytics
Feature: Analytics - Vinculation Codicel

    @ANA_VC001
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: The user accesses to the vinculation codicel - Analytics Page View
        Given a user with the following criteria
            | criteria          |
            | user vinculation  |
        When the user goes to the codicel vinculation operation
        Then the device contains the following variables:
            | item                    | value                                                           | type             |
            | analytics               | analytics/glomo_base                                            | json schema      |
            | version DL              | 20250414_5.0                                                    | string           |
            | page name               | app:privada:personas:vincular dimo:informacion                  | string           |
            | level 1                 | vincular dimo                                                   | string           |
            | level 2                 | informacion                                                     | string           |
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

    @ANA_VC002
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: The user visualices the summary info - Analytics Page View
        Given a user with the following criteria
            | criteria          |
            | user vinculation  |
        And the user goes to the codicel vinculation operation
        When the user accepts the vinculation confirmation modal
        Then the device contains the following variables
            | item                    | value                                                           | type             |
            | analytics               | analytics/glomo_base                                            | json schema      |
            | version DL              | 20250414_5.0                                                    | string           |
            | page name               | app:privada:personas:vincular dimo:aceptacion                   | string           |
            | level 1                 | vincular dimo                                                   | string           |
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

    @ANA_VC003
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: The user accesses the data usage modal - Analytics Page View
        Given a user with the following criteria
            | criteria          |
            | user vinculation  |
        And the user goes to the codicel vinculation operation
        And the user accepts the vinculation confirmation modal
        When the user accesses the help modal
        Then the device contains the following variables
            | item                    | value                                                           | type             |
            | analytics               | analytics/glomo_base                                            | json schema      |
            | version DL              | 20250414_5.0                                                    | string           |
            | page name               | app:privada:personas:vincular dimo:informacion uso de datos     | string           |
            | level 1                 | vincular dimo                                                   | string           |
            | level 2                 | informacion uso de datos                                        | string           |
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

    @ANA_VC004
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: The user check data usage conditions - Analytics Interaction Link
        Given a user with the following criteria
            | criteria          |
            | user vinculation  |
        And the user goes to the codicel vinculation operation
        And the user accepts the vinculation confirmation modal
        And the user opens and accepts the help modal
        When the user check data usage conditions
        Then the device contains the following variables
            | item                    | value                                                           | type             |
            | analytics               | analytics/glomo_base                                            | json schema      |
            | version DL              | 20250414_5.0                                                    | string           |
            | page name               | app:privada:personas:vincular dimo:aceptacion                   | string           |
            | level 1                 | vincular dimo                                                   | string           |
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
            | interaction level       | acepto proporcionar mis datos                                   | string           |
            | device mobile           | si                                                              | string           |
            | user userState          | logado                                                          | string           |
            | profile ID              | profileID                                                       | regexp named     |
            | user segment global     | 003001                                                          | string           |
            | user gender             | gender                                                          | regexp named     |
            | user age                | age                                                             | regexp named     |

    @ANA_VC005
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: The user sees OTP modal - Analytics Page View
        Given a user with the following criteria
            | criteria          |
            | user vinculation  |
        And the user goes to the codicel vinculation operation
        And the user accepts the vinculation confirmation modal
        And the user opens and accepts the help modal
        When the user completes vinculation operation
        Then the device contains the following variables
            | item                    | value                                                           | type             |
            | analytics               | analytics/glomo_base                                            | json schema      |
            | version DL              | 20250414_5.0                                                    | string           |
            | page name               | app:privada:personas:vincular dimo:otp                          | string           |
            | level 1                 | vincular dimo                                                   | string           |
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

    @ANA_VC006
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: Create vinculation successes - Analytics Page View
        Given a user with the following criteria
            | criteria            |
            | user vinculation    |
        And the user goes to the codicel vinculation operation
        And the user accepts the vinculation confirmation modal
        And the user opens and accepts the help modal
        When the user completes vinculation operation
        Then the device contains the following variables
            | item                    | value                                                           | type             |
            | analytics               | analytics/glomo_base                                            | json schema      |
            | version DL              | 20250414_5.0                                                    | string           |
            | page name               | app:privada:personas:vincular dimo:vinculacion exitosa          | string           |
            | level 1                 | vincular dimo                                                   | string           |
            | level 2                 | vinculacion exitosa                                             | string           |
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

    @ANA_VC007
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: Create vinculation error - Analytics Error Page View
        Given a user with the following criteria
            | criteria            |
            | user vinculation    |
        And the user goes to the codicel vinculation operation
        And the user accepts the vinculation confirmation modal
        And the user opens and accepts the help modal
        When the user completes vinculation operation
        Then the device contains the following variables
            | item                    | value                                                           | type             |
            | analytics               | analytics/glomo_base                                            | json schema      |
            | version DL              | 20250414_5.0                                                    | string           |
            | page name               | app:privada:personas:vincular dimo:error de servicio            | string           |
            | level 1                 | vincular dimo                                                   | string           |
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

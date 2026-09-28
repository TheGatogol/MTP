@interestSimulatorAnalytics
Feature: Analytics - Interest Simulator

    @ANA_IS001
    @analytics
    @MX @vbank @web-done
    @web @ios @android @backend(test)
    Scenario: Interest Simulator - Page View
        Given a user with the following criteria
            | criteria                       |
            | credit card user with simulate |
        When the user goes to the simulate interest
        Then the device contains the following variables
            | item                | value                                             | type         |
            | analytics           | analytics/glomo_base                              | json schema  |
            | version DL          | 20250414_5.0                                      | string       |
            | page name           | app:privada:personas:tarjetas:simulador intereses | string       |
            | level 1             | tarjetas                                          | string       |
            | level 2             | simulador intereses                               | string       |
            | language            | ES                                                | string       |
            | page area           | privada                                           | string       |
            | page intent         | informacion                                       | string       |
            | channel             | online                                            | string       |
            | page instance ID    | de                                                | string       |
            | page info version   | appVersion                                        | regexp named |
            | page segment        | personas                                          | string       |
            | sysEnv              | app                                               | string       |
            | business unit       | BBVA Mexico                                       | string       |
            | site app name       | App BBVA Mexico                                   | string       |
            | project name        | Glomo                                             | string       |
            | device mobile       | si                                                | string       |
            | user userState      | logado                                            | string       |
            | user segment global | 003001                                            | string       |
            | profile ID          | profileID                                         | regexp named |

    @ANA_IS002
    @analytics
    @MX @vbank @web-done
    @web @ios @android @backend(test)
    Scenario: Interest Simulator - Page View Onboarding
        Given a user with the following criteria
            | criteria                       |
            | credit card user with simulate |
        When the user goes to the simulate interest on boarding
        Then the device contains the following variables
            | item                | value                                                          | type         |
            | analytics           | analytics/glomo_base                                           | json schema  |
            | version DL          | 20250414_5.0                                                   | string       |
            | page name           | app:privada:personas:tarjetas:simulador intereses:onboarding 1 | string       |
            | level 1             | tarjetas                                                       | string       |
            | level 2             | simulador intereses                                            | string       |
            | level 3             | onboarding 1                                                   | string       |
            | language            | ES                                                             | string       |
            | page area           | privada                                                        | string       |
            | page intent         | informacion                                                    | string       |
            | channel             | online                                                         | string       |
            | page instance ID    | de                                                             | string       |
            | page info version   | appVersion                                                     | regexp named |
            | page segment        | personas                                                       | string       |
            | sysEnv              | app                                                            | string       |
            | business unit       | BBVA Mexico                                                    | string       |
            | site app name       | App BBVA Mexico                                                | string       |
            | project name        | Glomo                                                          | string       |
            | device mobile       | si                                                             | string       |
            | user userState      | logado                                                         | string       |
            | user segment global | 003001                                                         | string       |
            | profile ID          | profileID                                                      | regexp named |

    @ANA_IS003
    @analytics
    @MX @vbank @web-done
    @web @ios @android @backend(test)
    Scenario: Interest Simulator - Page View Onboarding 2
        Given a user with the following criteria
            | criteria                       |
            | credit card user with simulate |
        And the user goes to the simulate interest on boarding
        When the user goes to on boarding simulate interest slide step 2
        Then the device contains the following variables
            | item                | value                                                          | type         |
            | analytics           | analytics/glomo_base                                           | json schema  |
            | version DL          | 20250414_5.0                                                   | string       |
            | page name           | app:privada:personas:tarjetas:simulador intereses:onboarding 2 | string       |
            | level 1             | tarjetas                                                       | string       |
            | level 2             | simulador intereses                                            | string       |
            | level 3             | onboarding 2                                                   | string       |
            | language            | ES                                                             | string       |
            | page area           | privada                                                        | string       |
            | page intent         | informacion                                                    | string       |
            | channel             | online                                                         | string       |
            | page instance ID    | de                                                             | string       |
            | page info version   | appVersion                                                     | regexp named |
            | page segment        | personas                                                       | string       |
            | sysEnv              | app                                                            | string       |
            | business unit       | BBVA Mexico                                                    | string       |
            | site app name       | App BBVA Mexico                                                | string       |
            | project name        | Glomo                                                          | string       |
            | device mobile       | si                                                             | string       |
            | user userState      | logado                                                         | string       |
            | user segment global | 003001                                                         | string       |
            | profile ID          | profileID                                                      | regexp named |

    @ANA_IS004
    @analytics
    @MX @vbank @web-done
    @web @ios @android @backend(test)
    Scenario: Interest Simulator - Page View Onboarding 3
        Given a user with the following criteria
            | criteria                       |
            | credit card user with simulate |
        And the user goes to the simulate interest on boarding
        And the user goes to on boarding simulate interest slide step 2
        When the user goes to on boarding simulate interest slide step 3
        Then the device contains the following variables
            | item                | value                                                          | type         |
            | analytics           | analytics/glomo_base                                           | json schema  |
            | version DL          | 20250414_5.0                                                   | string       |
            | page name           | app:privada:personas:tarjetas:simulador intereses:onboarding 3 | string       |
            | level 1             | tarjetas                                                       | string       |
            | level 2             | simulador intereses                                            | string       |
            | level 3             | onboarding 3                                                   | string       |
            | language            | ES                                                             | string       |
            | page area           | privada                                                        | string       |
            | page intent         | informacion                                                    | string       |
            | channel             | online                                                         | string       |
            | page instance ID    | de                                                             | string       |
            | page info version   | appVersion                                                     | regexp named |
            | page segment        | personas                                                       | string       |
            | sysEnv              | app                                                            | string       |
            | business unit       | BBVA Mexico                                                    | string       |
            | site app name       | App BBVA Mexico                                                | string       |
            | project name        | Glomo                                                          | string       |
            | device mobile       | si                                                             | string       |
            | user userState      | logado                                                         | string       |
            | user segment global | 003001                                                         | string       |
            | profile ID          | profileID                                                      | regexp named |

    @ANA_IS005
    @analytics
    @MX @vbank @web-done
    @web @ios @android @backend(test)
    Scenario: Interest Simulator - Error Interest
        Given a user with the following criteria
            | criteria                       |
            | credit card user with simulate |
        When the user goes to the simulate interest with error
        Then the device contains the following variables
            | item                | value                                                           | type         |
            | analytics           | analytics/glomo_base                                            | json schema  |
            | version DL          | 20250414_5.0                                                    | string       |
            | page name           | app:privada:personas:tarjetas:simulador intereses:error interes | string       |
            | level 1             | tarjetas                                                        | string       |
            | level 2             | simulador intereses                                             | string       |
            | level 3             | error interes                                                   | string       |
            | language            | ES                                                              | string       |
            | page area           | privada                                                         | string       |
            | page intent         | informacion                                                     | string       |
            | channel             | online                                                          | string       |
            | page instance ID    | de                                                              | string       |
            | page info version   | appVersion                                                      | regexp named |
            | page segment        | personas                                                        | string       |
            | sysEnv              | app                                                             | string       |
            | business unit       | BBVA Mexico                                                     | string       |
            | site app name       | App BBVA Mexico                                                 | string       |
            | project name        | Glomo                                                           | string       |
            | device mobile       | si                                                              | string       |
            | user userState      | logado                                                          | string       |
            | user segment global | 003001                                                          | string       |
            | profile ID          | profileID                                                       | regexp named |

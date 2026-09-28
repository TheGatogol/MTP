@fundContractedDetail
Feature: Analytics - Fund Contracted Detail

    @ANA_EVENT_FID001
    @analytics
    @MX
    @web @ios @android
    @vbank
    @backend(test)
    @web-done
    Scenario: Fund Contracted Detail - App Page Visit
        Given a user with the following criteria
            | criteria                    |
            | simplified investment funds |
        And the user starts the application at date:
            | hour  | 11 |
        And the user accesses to fund product detail
        When the user accesses to the fund
        Then the device contains the following variables
            | item                    | value                                                  | type         |
            | analytics               | analytics/glomo_base                                   | json schema  |
            | page name               | app:privada:personas:fondos de inversion:detalle fondo | string       |
            | level 1                 | fondos de inversion                                    | string       |
            | level 2                 | detalle fondo                                          | string       |
            | language                | ES                                                     | string       |
            | page area               | privada                                                | string       |
            | page intent             | informacion                                            | string       |
            | channel                 | online                                                 | string       |
            | page instance ID        | de                                                     | string       |
            | page info version       | appVersion                                             | regexp named |
            | page segment            | personas                                               | string       |
            | sysEnv                  | app                                                    | string       |
            | business unit           | BBVA Mexico                                            | string       |
            | site app name           | App BBVA Mexico                                        | string       |
            | project name            | DIY E2E Sales                                          | string       |
            | device mobile           | si                                                     | string       |
            | user userState          | logado                                                 | string       |
            | user segment global     | 003001                                                 | string       |
            | profile ID              | profileID                                              | regexp named |
            | user age                | age                                                    | regexp named |
            | user gender             | gender                                                 | regexp named |

    @ANA_EVENT_FID002
    @analytics
    @MX
    @web @ios @android
    @vbank
    @backend(test)
    @web-done
    Scenario: Fund Contracted Detail - Internal Link - Bonds Price
        Given a user with the following criteria
            | criteria                    |
            | simplified investment funds |
        And the user starts the application at date:
            | hour  | 11 |
        And the user accesses to fund product detail
        And the user accesses to the fund
        And the analytics interceptor service is initiated
        When the user selects "bonds price" tooltip
        Then the analytics events contains the following variables
            | item                    | value                                                  | type         | event         |
            | analytics               | analytics/glomo_base                                   | json schema  | Internal Link |
            | page name               | app:privada:personas:fondos de inversion:detalle fondo | string       | Internal Link |
            | level 1                 | fondos de inversion                                    | string       | Internal Link |
            | level 2                 | detalle fondo                                          | string       | Internal Link |
            | language                | ES                                                     | string       | Internal Link |
            | page area               | privada                                                | string       | Internal Link |
            | page intent             | informacion                                            | string       | Internal Link |
            | channel                 | online                                                 | string       | Internal Link |
            | page instance ID        | de                                                     | string       | Internal Link |
            | page info version       | appVersion                                             | regexp named | Internal Link |
            | page segment            | personas                                               | string       | Internal Link |
            | sysEnv                  | app                                                    | string       | Internal Link |
            | business unit           | BBVA Mexico                                            | string       | Internal Link |
            | site app name           | App BBVA Mexico                                        | string       | Internal Link |
            | project name            | DIY E2E Sales                                          | string       | Internal Link |
            | device mobile           | si                                                     | string       | Internal Link |
            | user userState          | logado                                                 | string       | Internal Link |
            | user segment global     | 003001                                                 | string       | Internal Link |
            | profile ID              | profileID                                              | regexp named | Internal Link |
            | user age                | age                                                    | regexp named | Internal Link |
            | user gender             | gender                                                 | regexp named | Internal Link |
            | link name               | precio por titulo                                      | string       | Internal Link |

    @ANA_EVENT_FID003
    @analytics
    @MX
    @web @ios @android
    @vbank
    @backend(test)
    @web-done
    Scenario: Fund Contracted Detail - Internal Link - Operation Schedule
        Given a user with the following criteria
            | criteria                    |
            | simplified investment funds |
        And the user starts the application at date:
            | hour  | 11 |
        And the user accesses to fund product detail
        And the user accesses to the fund
        And the analytics interceptor service is initiated
        When the user selects "operation schedule" tooltip
        Then the analytics events contains the following variables
            | item                    | value                                                  | type         | event         |
            | analytics               | analytics/glomo_base                                   | json schema  | Internal Link |
            | page name               | app:privada:personas:fondos de inversion:detalle fondo | string       | Internal Link |
            | level 1                 | fondos de inversion                                    | string       | Internal Link |
            | level 2                 | detalle fondo                                          | string       | Internal Link |
            | language                | ES                                                     | string       | Internal Link |
            | page area               | privada                                                | string       | Internal Link |
            | page intent             | informacion                                            | string       | Internal Link |
            | channel                 | online                                                 | string       | Internal Link |
            | page instance ID        | de                                                     | string       | Internal Link |
            | page info version       | appVersion                                             | regexp named | Internal Link |
            | page segment            | personas                                               | string       | Internal Link |
            | sysEnv                  | app                                                    | string       | Internal Link |
            | business unit           | BBVA Mexico                                            | string       | Internal Link |
            | site app name           | App BBVA Mexico                                        | string       | Internal Link |
            | project name            | DIY E2E Sales                                          | string       | Internal Link |
            | device mobile           | si                                                     | string       | Internal Link |
            | user userState          | logado                                                 | string       | Internal Link |
            | user segment global     | 003001                                                 | string       | Internal Link |
            | profile ID              | profileID                                              | regexp named | Internal Link |
            | user age                | age                                                    | regexp named | Internal Link |
            | user gender             | gender                                                 | regexp named | Internal Link |
            | link name               | horario de operacion                                   | string       | Internal Link |

    @ANA_EVENT_FID004
    @analytics
    @MX
    @web @ios @android
    @vbank
    @backend(test)
    @web-done
    Scenario: Fund Contracted Detail - Internal Link - Liquidity Increase
        Given a user with the following criteria
            | criteria                    |
            | simplified investment funds |
        And the user starts the application at date:
            | hour  | 11 |
        And the user accesses to fund product detail
        And the user accesses to the fund
        And the analytics interceptor service is initiated
        When the user selects "liquidity increase" tooltip
        Then the analytics events contains the following variables
            | item                    | value                                                  | type         | event         |
            | analytics               | analytics/glomo_base                                   | json schema  | Internal Link |
            | page name               | app:privada:personas:fondos de inversion:detalle fondo | string       | Internal Link |
            | level 1                 | fondos de inversion                                    | string       | Internal Link |
            | level 2                 | detalle fondo                                          | string       | Internal Link |
            | language                | ES                                                     | string       | Internal Link |
            | page area               | privada                                                | string       | Internal Link |
            | page intent             | informacion                                            | string       | Internal Link |
            | channel                 | online                                                 | string       | Internal Link |
            | page instance ID        | de                                                     | string       | Internal Link |
            | page info version       | appVersion                                             | regexp named | Internal Link |
            | page segment            | personas                                               | string       | Internal Link |
            | sysEnv                  | app                                                    | string       | Internal Link |
            | business unit           | BBVA Mexico                                            | string       | Internal Link |
            | site app name           | App BBVA Mexico                                        | string       | Internal Link |
            | project name            | DIY E2E Sales                                          | string       | Internal Link |
            | device mobile           | si                                                     | string       | Internal Link |
            | user userState          | logado                                                 | string       | Internal Link |
            | user segment global     | 003001                                                 | string       | Internal Link |
            | profile ID              | profileID                                              | regexp named | Internal Link |
            | user age                | age                                                    | regexp named | Internal Link |
            | user gender             | gender                                                 | regexp named | Internal Link |
            | link name               | liquidez del fondo para comprar                        | string       | Internal Link |

    @ANA_EVENT_FID005
    @analytics
    @MX
    @web @ios @android
    @vbank
    @backend(test)
    @web-done
    Scenario: Fund Contracted Detail - Internal Link - Liquidity Withdrawal
        Given a user with the following criteria
            | criteria                    |
            | simplified investment funds |
        And the user starts the application at date:
            | hour  | 11 |
        And the user accesses to fund product detail
        And the user accesses to the fund
        And the analytics interceptor service is initiated
        When the user selects "liquidity withdrawal" tooltip
        Then the analytics events contains the following variables
            | item                    | value                                                  | type         | event         |
            | analytics               | analytics/glomo_base                                   | json schema  | Internal Link |
            | page name               | app:privada:personas:fondos de inversion:detalle fondo | string       | Internal Link |
            | level 1                 | fondos de inversion                                    | string       | Internal Link |
            | level 2                 | detalle fondo                                          | string       | Internal Link |
            | language                | ES                                                     | string       | Internal Link |
            | page area               | privada                                                | string       | Internal Link |
            | page intent             | informacion                                            | string       | Internal Link |
            | channel                 | online                                                 | string       | Internal Link |
            | page instance ID        | de                                                     | string       | Internal Link |
            | page info version       | appVersion                                             | regexp named | Internal Link |
            | page segment            | personas                                               | string       | Internal Link |
            | sysEnv                  | app                                                    | string       | Internal Link |
            | business unit           | BBVA Mexico                                            | string       | Internal Link |
            | site app name           | App BBVA Mexico                                        | string       | Internal Link |
            | project name            | DIY E2E Sales                                          | string       | Internal Link |
            | device mobile           | si                                                     | string       | Internal Link |
            | user userState          | logado                                                 | string       | Internal Link |
            | user segment global     | 003001                                                 | string       | Internal Link |
            | profile ID              | profileID                                              | regexp named | Internal Link |
            | user age                | age                                                    | regexp named | Internal Link |
            | user gender             | gender                                                 | regexp named | Internal Link |
            | link name               | liquidez del fondo para vender                         | string       | Internal Link |

    @ANA_EVENT_FID006
    @analytics
    @MX
    @web @ios @android
    @vbank
    @backend(test)
    @web-done
    Scenario: Fund Contracted Detail - Internal Link - Investment Account
        Given a user with the following criteria
            | criteria                    |
            | simplified investment funds |
        And the user starts the application at date:
            | hour  | 11 |
        And the user accesses to fund product detail
        And the user accesses to the fund
        And the analytics interceptor service is initiated
        When the user selects "investment account" tooltip
        Then the analytics events contains the following variables
            | item                    | value                                                  | type         | event         |
            | analytics               | analytics/glomo_base                                   | json schema  | Internal Link |
            | page name               | app:privada:personas:fondos de inversion:detalle fondo | string       | Internal Link |
            | level 1                 | fondos de inversion                                    | string       | Internal Link |
            | level 2                 | detalle fondo                                          | string       | Internal Link |
            | language                | ES                                                     | string       | Internal Link |
            | page area               | privada                                                | string       | Internal Link |
            | page intent             | informacion                                            | string       | Internal Link |
            | channel                 | online                                                 | string       | Internal Link |
            | page instance ID        | de                                                     | string       | Internal Link |
            | page info version       | appVersion                                             | regexp named | Internal Link |
            | page segment            | personas                                               | string       | Internal Link |
            | sysEnv                  | app                                                    | string       | Internal Link |
            | business unit           | BBVA Mexico                                            | string       | Internal Link |
            | site app name           | App BBVA Mexico                                        | string       | Internal Link |
            | project name            | DIY E2E Sales                                          | string       | Internal Link |
            | device mobile           | si                                                     | string       | Internal Link |
            | user userState          | logado                                                 | string       | Internal Link |
            | user segment global     | 003001                                                 | string       | Internal Link |
            | profile ID              | profileID                                              | regexp named | Internal Link |
            | user age                | age                                                    | regexp named | Internal Link |
            | user gender             | gender                                                 | regexp named | Internal Link |
            | link name               | cuenta de inversion y deposito                         | string       | Internal Link |

@fundsContributionAnalytics
Feature: Analytics - Funds Contribution

    @ANA_EVENT_FC001
    @analytics
    @MX
    @web @ios @android
    @vbank
    @backend(test)
    @web-done
    Scenario: Funds Contribution - App Page Visit
        Given a user with the following criteria
            | criteria                    |
            | simplified investment funds |
        And the user starts the application at date:
            | hour  | 23 |
        And the user accesses to fund product detail
        And the user accesses to the fund
        And the analytics interceptor service is initiated
        When the user accesses to buy option
        Then the analytics events contains the following variables
            | item                     | value                                                                      | type         | event          |
            | analytics                | analytics/glomo_base                                                       | json schema  | App Page Visit |
            | page name                | app:privada:personas:fondos de inversion:incrementar fondo:comprar titulos | string       | App Page Visit |
            | level 1                  | fondos de inversion                                                        | string       | App Page Visit |
            | level 2                  | incrementar fondo                                                          | string       | App Page Visit |
            | level 3                  | comprar titulos                                                            | string       | App Page Visit |
            | language                 | ES                                                                         | string       | App Page Visit |
            | page area                | privada                                                                    | string       | App Page Visit |
            | page intent              | transaccion                                                                | string       | App Page Visit |
            | page instance ID         | de                                                                         | string       | App Page Visit |
            | page info version        | appVersion                                                                 | regexp named | App Page Visit |
            | page segment             | personas                                                                   | string       | App Page Visit |
            | sysEnv                   | app                                                                        | string       | App Page Visit |
            | business unit            | BBVA Mexico                                                                | string       | App Page Visit |
            | site app name            | App BBVA Mexico                                                            | string       | App Page Visit |
            | project name             | DIY E2E Sales                                                              | string       | App Page Visit |
            | device mobile            | si                                                                         | string       | App Page Visit |
            | device root              | no root                                                                    | string       | App Page Visit |
            | user userState           | logado                                                                     | string       | App Page Visit |
            | profile ID               | profileID                                                                  | regexp named | App Page Visit |
            | user segment global      | 003001                                                                     | string       | App Page Visit |
            | user gender              | gender                                                                     | regexp named | App Page Visit |
            | user age                 | age                                                                        | regexp named | App Page Visit |
            | global application       | funds contribution                                                         | string       | App Page Visit |
            | application name         | incrementar fondo                                                          | string       | App Page Visit |
            | application type         | contratacion                                                               | string       | App Page Visit |
            | application step         | comprar titulos                                                            | string       | App Page Visit |
            | product primary category | inversiones                                                                | string       | App Page Visit |
            | product subtype          | fondos inversion                                                           | string       | App Page Visit |

    @ANA_EVENT_FC002
    @analytics
    @MX
    @web @ios @android
    @vbank
    @backend(test)
    @web-done
    Scenario: Funds Contribution - App Started
        Given a user with the following criteria
            | criteria                    |
            | simplified investment funds |
        And the user starts the application at date:
            | hour  | 11 |
        And the user accesses to fund product detail
        And the user accesses to the fund
        And the analytics interceptor service is initiated
        And the user accesses to buy option
        And the user enters "300" as the purchase amount
        When the user completes the buy
        Then the analytics events contains the following variables
            | item                     | value                                                                      | type         | event       |
            | analytics                | analytics/glomo_base                                                       | json schema  | App Started |
            | page name                | app:privada:personas:fondos de inversion:incrementar fondo:comprar titulos | string       | App Started |
            | level 1                  | fondos de inversion                                                        | string       | App Started |
            | level 2                  | incrementar fondo                                                          | string       | App Started |
            | level 3                  | comprar titulos                                                            | string       | App Started |
            | language                 | ES                                                                         | string       | App Started |
            | page area                | privada                                                                    | string       | App Started |
            | page intent              | transaccion                                                                | string       | App Started |
            | page instance ID         | de                                                                         | string       | App Started |
            | page info version        | appVersion                                                                 | regexp named | App Started |
            | page segment             | personas                                                                   | string       | App Started |
            | sysEnv                   | app                                                                        | string       | App Started |
            | business unit            | BBVA Mexico                                                                | string       | App Started |
            | site app name            | App BBVA Mexico                                                            | string       | App Started |
            | project name             | DIY E2E Sales                                                              | string       | App Started |
            | device mobile            | si                                                                         | string       | App Started |
            | device root              | no root                                                                    | string       | App Started |
            | user userState           | logado                                                                     | string       | App Started |
            | profile ID               | profileID                                                                  | regexp named | App Started |
            | user segment global      | 003001                                                                     | string       | App Started |
            | user gender              | gender                                                                     | regexp named | App Started |
            | user age                 | age                                                                        | regexp named | App Started |
            | global application       | funds contribution                                                         | string       | App Started |
            | application name         | incrementar fondo                                                          | string       | App Started |
            | application type         | contratacion                                                               | string       | App Started |
            | application step         | monto                                                                      | string       | App Started |
            | product primary category | inversiones                                                                | string       | App Started |
            | product subtype          | fondos inversion                                                           | string       | App Started |

    @ANA_EVENT_FC003
    @analytics
    @MX
    @web @ios @android
    @vbank
    @backend(test)
    @web-done
    Scenario: Funds Contribution - App Completed Successful
        Given a user with the following criteria
            | criteria                    |
            | simplified investment funds |
        And the user starts the application at date:
            | hour  | 23 |
        And the user accesses to fund product detail
        And the user accesses to the fund
        And the analytics interceptor service is initiated
        And the user accesses to buy option
        When the user "goes to" buy and complete the process
        Then the analytics events contains the following variables
            | item                     | value                                                                     | type         | event         |
            | analytics                | analytics/glomo_base                                                      | json schema  | App Completed |
            | page name                | app:privada:personas:fondos de inversion:incrementar fondo:pagina exitosa | string       | App Completed |
            | level 1                  | fondos de inversion                                                       | string       | App Completed |
            | level 2                  | incrementar fondo                                                         | string       | App Completed |
            | level 3                  | pagina exitosa                                                            | string       | App Completed |
            | language                 | ES                                                                        | string       | App Completed |
            | page area                | privada                                                                   | string       | App Completed |
            | page intent              | transaccion                                                               | string       | App Completed |
            | page instance ID         | de                                                                        | string       | App Completed |
            | page info version        | appVersion                                                                | regexp named | App Completed |
            | sysEnv                   | app                                                                       | string       | App Completed |
            | business unit            | BBVA Mexico                                                               | string       | App Completed |
            | site app name            | App BBVA Mexico                                                           | string       | App Completed |
            | project name             | DIY E2E Sales                                                             | string       | App Completed |
            | device mobile            | si                                                                        | string       | App Completed |
            | device root              | no root                                                                   | string       | App Completed |
            | user userState           | logado                                                                    | string       | App Completed |
            | profile ID               | profileID                                                                 | regexp named | App Completed |
            | user segment global      | 003001                                                                    | string       | App Completed |
            | user gender              | gender                                                                    | regexp named | App Completed |
            | user age                 | age                                                                       | regexp named | App Completed |
            | global application       | funds contribution                                                        | string       | App Completed |
            | application name         | incrementar fondo                                                         | string       | App Completed |
            | application type         | contratacion                                                              | string       | App Completed |
            | application step         | pagina exitosa                                                            | string       | App Completed |
            | application state        | aprobado                                                                  | string       | App Completed |
            | product primary category | inversiones                                                               | string       | App Completed |
            | product subtype          | fondos inversion                                                          | string       | App Completed |
            | product currency         | MXN                                                                       | string       | App Completed |
            | product amount           | 300                                                                       | number       | App Completed |

    @ANA_EVENT_FC004
    @analytics
    @MX
    @web @ios @android
    @vbank
    @backend(test)
    @web-done
    Scenario: Funds Contribution - App Completed Pending
        Given a user with the following criteria
            | criteria                    |
            | simplified investment funds |
        And the user starts the application at date:
            | hour  | 3 |
        And the user accesses to fund product detail
        And the user accesses to the fund
        And the analytics interceptor service is initiated
        And the user accesses to buy option
        When the user "goes to" buy and complete the process
        Then the analytics events contains the following variables
            | item                     | value                                                                     | type         | event         |
            | analytics                | analytics/glomo_base                                                      | json schema  | App Completed |
            | page name                | app:privada:personas:fondos de inversion:incrementar fondo:pagina exitosa | string       | App Completed |
            | level 1                  | fondos de inversion                                                       | string       | App Completed |
            | level 2                  | incrementar fondo                                                         | string       | App Completed |
            | level 3                  | pagina exitosa                                                            | string       | App Completed |
            | language                 | ES                                                                        | string       | App Completed |
            | page area                | privada                                                                   | string       | App Completed |
            | page intent              | transaccion                                                               | string       | App Completed |
            | page instance ID         | de                                                                        | string       | App Completed |
            | page info version        | appVersion                                                                | regexp named | App Completed |
            | sysEnv                   | app                                                                       | string       | App Completed |
            | business unit            | BBVA Mexico                                                               | string       | App Completed |
            | site app name            | App BBVA Mexico                                                           | string       | App Completed |
            | project name             | DIY E2E Sales                                                             | string       | App Completed |
            | device mobile            | si                                                                        | string       | App Completed |
            | device root              | no root                                                                   | string       | App Completed |
            | user userState           | logado                                                                    | string       | App Completed |
            | profile ID               | profileID                                                                 | regexp named | App Completed |
            | user segment global      | 003001                                                                    | string       | App Completed |
            | user gender              | gender                                                                    | regexp named | App Completed |
            | user age                 | age                                                                       | regexp named | App Completed |
            | global application       | funds contribution                                                        | string       | App Completed |
            | application name         | incrementar fondo                                                         | string       | App Completed |
            | application type         | contratacion                                                              | string       | App Completed |
            | application step         | pagina exitosa                                                            | string       | App Completed |
            | application state        | en revision                                                               | string       | App Completed |
            | product primary category | inversiones                                                               | string       | App Completed |
            | product subtype          | fondos inversion                                                          | string       | App Completed |
            | product currency         | MXN                                                                       | string       | App Completed |
            | product amount           | 300                                                                       | number       | App Completed |

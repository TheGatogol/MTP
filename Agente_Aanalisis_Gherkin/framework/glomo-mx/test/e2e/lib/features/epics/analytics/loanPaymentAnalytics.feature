@loanPaymentAnalytics
Feature: Loan Payment - Analyitics

    @ANA_EVENT_LOP001
    @analytics
    @web @ios @android
    @vbank @backend(test)
    @MX
    @web-done
    Scenario: Validate App On Click Start & App Page Visit
        Given a user with the following criteria
            | criteria                     |
            | loan payment analytics       |
        When the user accesses to loan
        And the analytics interceptor service is initiated
        And the user accesses to pay credit
        Then the analytics events contains the following variables
            | item                     | value                                                                    | type         | event                              |
            | analytics                | analytics/glomo_base                                                     | json schema  | App On Click Start, App Page Visit |
            | version dl               | 20250414_5.0                                                             | string       | App On Click Start, App Page Visit |
            | page name                | app:privada:personas:prestamos:detalle                                   | string       | App On Click Start                 |
            | page name                | app:privada:personas:prestamos:pagar prestamo:1 tipo de pago             | string       | App Page Visit                     |
            | level 1                  | prestamos                                                                | string       | App On Click Start, App Page Visit |
            | level 2                  | detalle                                                                  | string       | App On Click Start                 |
            | level 2                  | pagar prestamo                                                           | string       | App Page Visit                     |
            | level 3                  | 1 tipo de pago                                                           | string       | App Page Visit                     |
            | language                 | ES                                                                       | string       | App On Click Start, App Page Visit |
            | page area                | privada                                                                  | string       | App On Click Start, App Page Visit |
            | page intent              | informacion                                                              | string       | App On Click Start                 |
            | page intent              | transaccion                                                              | string       | App Page Visit                     |
            | channel                  | online                                                                   | string       | App On Click Start, App Page Visit |
            | page instance ID         | de                                                                       | string       | App On Click Start, App Page Visit |
            | page info version        | appVersion                                                               | regexp named | App On Click Start, App Page Visit |
            | page segment             | personas                                                                 | string       | App On Click Start, App Page Visit |
            | sysEnv                   | app                                                                      | string       | App On Click Start, App Page Visit |
            | business unit            | BBVA Mexico                                                              | string       | App On Click Start, App Page Visit |
            | site app name            | App BBVA Mexico                                                          | string       | App On Click Start, App Page Visit |
            | project name             | Glomo                                                                    | string       | App On Click Start, App Page Visit |
            | device mobile            | si                                                                       | string       | App On Click Start, App Page Visit |
            | user userState           | logado                                                                   | string       | App On Click Start, App Page Visit |
            | user segment global      | 003001                                                                   | string       | App On Click Start, App Page Visit |
            | profile ID               | profileID                                                                | regexp named | App On Click Start, App Page Visit |
            | global application       | loan payments                                                            | string       | App On Click Start, App Page Visit |
            | application name         | pagar prestamo                                                           | string       | App On Click Start, App Page Visit |
            | application typology     | credito personal                                                         | string       | App Page Visit                     |
            | application type         | operativa                                                                | string       | App On Click Start, App Page Visit |
            | application step         | pagar prestamo detalle                                                   | string       | App On Click Start                 |
            | application step         | 1 tipo de pago                                                           | string       | App Page Visit                     |
            | fulfillment model        | online                                                                   | string       | App On Click Start, App Page Visit |
            | product primary category | prestamos                                                                | string       | App On Click Start, App Page Visit |

    @ANA_EVENT_LOP002
    @analytics
    @web @ios @android
    @vbank @backend(test)
    @MX
    @web-done
    Scenario: Validate App Started & App Step 2
        Given a user with the following criteria
            | criteria                     |
            | loan payment analytics       |
        When the user accesses to pay credit
        And the analytics interceptor service is initiated
        And the user accesses to "other amount" pay
        Then the analytics events contains the following variables
        | item                     | value                                                                    | type         | event                              |
        | analytics                | analytics/glomo_base                                                     | json schema  | App Started,App Step 2             |
        | version dl               | 20250414_5.0                                                             | string       | App Started,App Step 2             |
        | page name                | app:privada:personas:prestamos:pagar prestamo:1 tipo de pago             | string       | App Started                        |
        | page name                | app:privada:personas:prestamos:pagar prestamo:2 detalle de pago          | string       | App Step 2                         |
        | level 1                  | prestamos                                                                | string       | App Started,App Step 2             |
        | level 2                  | pagar prestamo                                                           | string       | App Started,App Step 2             |
        | level 3                  | 1 tipo de pago                                                           | string       | App Started                        |
        | level 3                  | 2 detalle de pago                                                        | string       | App Step 2                         |
        | language                 | ES                                                                       | string       | App Started,App Step 2             |
        | page area                | privada                                                                  | string       | App Started,App Step 2             |
        | page intent              | transaccion                                                              | string       | App Started,App Step 2             |
        | channel                  | online                                                                   | string       | App Started,App Step 2             |
        | page instance ID         | de                                                                       | string       | App Started,App Step 2             |
        | page info version        | appVersion                                                               | regexp named | App Started,App Step 2             |
        | page segment             | personas                                                                 | string       | App Started,App Step 2             |
        | sysEnv                   | app                                                                      | string       | App Started,App Step 2             |
        | business unit            | BBVA Mexico                                                              | string       | App Started,App Step 2             |
        | site app name            | App BBVA Mexico                                                          | string       | App Started,App Step 2             |
        | project name             | Glomo                                                                    | string       | App Started,App Step 2             |
        | device mobile            | si                                                                       | string       | App Started,App Step 2             |
        | user userState           | logado                                                                   | string       | App Started,App Step 2             |
        | user segment global      | 003001                                                                   | string       | App Started,App Step 2             |
        | profile ID               | profileID                                                                | regexp named | App Started,App Step 2             |
        | global application       | loan payments                                                            | string       | App Started,App Step 2             |
        | application typology     | credito personal                                                         | string       | App Started,App Step 2             |
        | application name         | pagar prestamo                                                           | string       | App Started,App Step 2             |
        | application type         | operativa                                                                | string       | App Started,App Step 2             |
        | application step         | otra cantidad                                                            | string       | App Started                        |
        | application step         | 2 detalle de pago                                                        | string       | App Step 2                         |
        | fulfillment model        | online                                                                   | string       | App Started,App Step 2             |
        | product primary category | prestamos                                                                | string       | App Started,App Step 2             |
        | product amount           | 0                                                                        | Number       | App Step 2                         |
        | product currency         | MXN                                                                      | string       | App Step 2                         |

    @ANA_EVENT_LOP003
    @analytics
    @web @ios @android
    @vbank @backend(test)
    @MX
    @web-done
    Scenario: Validate App Step 3
        Given a user with the following criteria
            | criteria                     |
            | loan payment analytics       |
        When the user accesses to pay credit
        And the user accesses to "other amount" pay
        And the user ingrese amount of "1"
        And the user enter on the calculate payment button
        And the analytics interceptor service is initiated
        And the user enter on the continue button radio
        Then the analytics events contains the following variables
        | item                     | value                                                                    | type         | event                  |
        | analytics                | analytics/glomo_base                                                     | json schema  | App Step 3             |
        | version dl               | 20250414_5.0                                                             | string       | App Step 3             |
        | page name                | app:privada:personas:prestamos:pagar prestamo:3 cuenta de retiro         | string       | App Step 3             |
        | level 1                  | prestamos                                                                | string       | App Step 3             |
        | level 2                  | pagar prestamo                                                           | string       | App Step 3             |
        | level 3                  | 3 cuenta de retiro                                                       | string       | App Step 3             |
        | language                 | ES                                                                       | string       | App Step 3             |
        | page area                | privada                                                                  | string       | App Step 3             |
        | page intent              | transaccion                                                              | string       | App Step 3             |
        | channel                  | online                                                                   | string       | App Step 3             |
        | page instance ID         | de                                                                       | string       | App Step 3             |
        | page info version        | appVersion                                                               | regexp named | App Step 3             |
        | page segment             | personas                                                                 | string       | App Step 3             |
        | sysEnv                   | app                                                                      | string       | App Step 3             |
        | business unit            | BBVA Mexico                                                              | string       | App Step 3             |
        | site app name            | App BBVA Mexico                                                          | string       | App Step 3             |
        | project name             | Glomo                                                                    | string       | App Step 3             |
        | device mobile            | si                                                                       | string       | App Step 3             |
        | user userState           | logado                                                                   | string       | App Step 3             |
        | user segment global      | 003001                                                                   | string       | App Step 3             |
        | profile ID               | profileID                                                                | regexp named | App Step 3             |
        | global application       | loan payments                                                            | string       | App Step 3             |
        | application typology     | credito personal                                                         | string       | App Step 3             |
        | application name         | pagar prestamo                                                           | string       | App Step 3             |
        | application type         | operativa                                                                | string       | App Step 3             |
        | application step         | 3 cuenta de retiro                                                       | string       | App Step 3             |
        | fulfillment model        | online                                                                   | string       | App Step 3             |
        | product primary category | prestamos                                                                | string       | App Step 3             |
        | product amount           | 1                                                                        | number       | App Step 3             |
        | product currency         | MXN                                                                      | string       | App Step 3             |
        | application process      | pesos mexicanos                                                          | string       | App Step 3             |

    @ANA_EVENT_LOP004
    @analytics
    @web @ios @android
    @vbank @backend(test)
    @MX
    @web-done
    Scenario: Validate App Step 4
        Given a user with the following criteria
            | criteria                     |
            | loan payment analytics       |
        When the user accesses to pay credit
        And the user accesses to "other amount" pay
        And the user ingrese amount of "1"
        And the user enter on the calculate payment button
        And the user enter on the continue button radio
        And the analytics interceptor service is initiated
        And the user select account loan
        Then the analytics events contains the following variables
        | item                     | value                                                                    | type         | event                  |
        | analytics                | analytics/glomo_base                                                     | json schema  | App Step 4             |
        | version dl               | 20250414_5.0                                                             | string       | App Step 4             |
        | page name                | app:privada:personas:prestamos:pagar prestamo:4 confirmacion             | string       | App Step 4             |
        | level 1                  | prestamos                                                                | string       | App Step 4             |
        | level 2                  | pagar prestamo                                                           | string       | App Step 4             |
        | level 3                  | 4 confirmacion                                                           | string       | App Step 4             |
        | language                 | ES                                                                       | string       | App Step 4             |
        | page area                | privada                                                                  | string       | App Step 4             |
        | page intent              | transaccion                                                              | string       | App Step 4             |
        | channel                  | online                                                                   | string       | App Step 4             |
        | page instance ID         | de                                                                       | string       | App Step 4             |
        | page info version        | appVersion                                                               | regexp named | App Step 4             |
        | page segment             | personas                                                                 | string       | App Step 4             |
        | sysEnv                   | app                                                                      | string       | App Step 4             |
        | business unit            | BBVA Mexico                                                              | string       | App Step 4             |
        | site app name            | App BBVA Mexico                                                          | string       | App Step 4             |
        | project name             | Glomo                                                                    | string       | App Step 4             |
        | device mobile            | si                                                                       | string       | App Step 4             |
        | user userState           | logado                                                                   | string       | App Step 4             |
        | user segment global      | 003001                                                                   | string       | App Step 4             |
        | profile ID               | profileID                                                                | regexp named | App Step 4             |
        | global application       | loan payments                                                            | string       | App Step 4             |
        | application typology     | credito personal                                                         | string       | App Step 4             |
        | application name         | pagar prestamo                                                           | string       | App Step 4             |
        | application type         | operativa                                                                | string       | App Step 4             |
        | application step         | 4 confirmacion                                                           | string       | App Step 4             |
        | fulfillment model        | online                                                                   | string       | App Step 4             |
        | product primary category | prestamos                                                                | string       | App Step 4             |
        | product amount           | 1                                                                        | number       | App Step 4             |
        | product currency         | MXN                                                                      | string       | App Step 4             |
        | application process      | pesos mexicanos                                                          | string       | App Step 4             |

    @ANA_EVENT_LOP005
    @analytics
    @web @ios @android
    @vbank @backend(test)
    @MX
    @manual @JIRA.GLOMOMX-167706
    Scenario: Validate App Step 5 & App Completed
        Given a user with the following criteria
            | criteria                     |
            | loan payment analytics       |
        When the user accesses to pay credit
        And the user accesses to "other amount" pay
        And the user ingrese amount of "1"
        And the user enter on the calculate payment button
        And the user enter on the continue button radio
        And the analytics interceptor service is initiated
        And the user select account loan
        And the user select pay
        Then the analytics events contains the following variables
        | item                     | value                                                                    | type         | event                     |
        | analytics                | analytics/glomo_base                                                     | json schema  | App Step 5, App Completed |
        | version dl               | 20250414_5.0                                                             | string       | App Step 5, App Completed |
        | page name                | app:privada:personas:prestamos:pagar prestamo:5 otp                      | string       | App Step 5                |
        | page name                | app:privada:personas:prestamos:pagar prestamo:pagina exitosa             | string       | App Completed             |
        | level 1                  | prestamos                                                                | string       | App Step 5, App Completed |
        | level 2                  | pagar prestamo                                                           | string       | App Step 5, App Completed |
        | level 3                  | 5 otp                                                                    | string       | App Step 5                |
        | level 3                  | pagina exitosa                                                           | string       | App Completed             |
        | language                 | ES                                                                       | string       | App Step 5, App Completed |
        | page area                | privada                                                                  | string       | App Step 5, App Completed |
        | page intent              | transaccion                                                              | string       | App Step 5, App Completed |
        | channel                  | online                                                                   | string       | App Step 5, App Completed |
        | page instance ID         | de                                                                       | string       | App Step 5, App Completed |
        | page info version        | appVersion                                                               | regexp named | App Step 5, App Completed |
        | page segment             | personas                                                                 | string       | App Step 5, App Completed |
        | sysEnv                   | app                                                                      | string       | App Step 5, App Completed |
        | business unit            | BBVA Mexico                                                              | string       | App Step 5, App Completed |
        | site app name            | App BBVA Mexico                                                          | string       | App Step 5, App Completed |
        | project name             | Glomo                                                                    | string       | App Step 5, App Completed |
        | device mobile            | si                                                                       | string       | App Step 5, App Completed |
        | user userState           | logado                                                                   | string       | App Step 5, App Completed |
        | user segment global      | 003001                                                                   | string       | App Step 5, App Completed |
        | profile ID               | profileID                                                                | regexp named | App Step 5, App Completed |
        | global application       | loan payments                                                            | string       | App Step 5, App Completed |
        | application typology     | credito personal                                                         | string       | App Step 5, App Completed |
        | application name         | pagar prestamo                                                           | string       | App Step 5, App Completed |
        | application type         | operativa                                                                | string       | App Step 5, App Completed |
        | application step         | 5 otp                                                                    | string       | App Step 5                |
        | application step         | pagina exitosa                                                           | string       | App Completed             |
        | fulfillment model        | online                                                                   | string       | App Step 5, App Completed |
        | product primary category | prestamos                                                                | string       | App Step 5, App Completed |
        | product amount           | 1                                                                        | number       | App Step 5, App Completed |
        | product currency         | MXN                                                                      | string       | App Step 5, App Completed |
        | application process      | pesos mexicanos                                                          | string       | App Step 5, App Completed |
        | custom fields            | firma:token                                                              | string       | App Step 5                |
        | application state        | finalizado                                                               | string       | App Completed             |

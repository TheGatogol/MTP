@mposPurchaseAnalytics
Feature: Analytics Mpos Purchase

    @ANA_EVENT_MPPU001
    @analytics
    @MX @web @ios @android
    @vbank @backend(test)
    @web-done
    Scenario: The user selects a card to access Mpos Purchase - App On Click Start
        Given a user with the following criteria
            | criteria         |
            | mpos normal user |
        And the user accesses to dashboard MPOS
        And the analytics interceptor service is initiated
        When the user accesses to card MPOS
        Then the analytics events contains the following variables
            | item                    | value                                       | type             | event              |
            | analytics               | analytics/glomo_base                        | json schema      | App On Click Start |
            | version DL              | 20250414_5.0                                | string           | App On Click Start |
            | page instance ID        | de                                          | string           | App On Click Start |
            | sysEnv                  | app                                         | string           | App On Click Start |
            | page segment            | personas                                    | string           | App On Click Start |
            | page intent             | informacion                                 | string           | App On Click Start |
            | business unit           | BBVA Mexico                                 | string           | App On Click Start |
            | page area               | privada                                     | string           | App On Click Start |
            | language                | ES                                          | string           | App On Click Start |
            | channel                 | online                                      | string           | App On Click Start |
            | site app name           | App BBVA Mexico                             | string           | App On Click Start |
            | project name            | Mercurio                                    | string           | App On Click Start |
            | level 1                 | zona de cobro                               | string           | App On Click Start |
            | page name               | app:privada:personas:zona de cobro          | string           | App On Click Start |
            | device mobile           | si                                          | string           | App On Click Start |
            | device root             |                                             | string           | App On Click Start |
            | user segment global     | 003001                                      | string           | App On Click Start |
            | user userState          | logado                                      | string           | App On Click Start |
            | profile ID               | profileID                                    | regexp named     | App On Click Start |
            | user gender             | gender                                      | regexp named     | App On Click Start |
            | user age                | age                                         | regexp named     | App On Click Start |
            | application step        | lector de tarjetas                          | string           | App On Click Start |
            | application name        | compra lector                               | string           | App On Click Start |
            | application type        | operativa                                   | string           | App On Click Start |
            | global application      | onboarding mpos                             | string           | App On Click Start |

    @ANA_EVENT_MPPU002
    @analytics
    @MX @web @ios @android
    @vbank @backend(test)
    @web-done
    Scenario: The user sees an onboarding page - App Page Visit
        Given a user with the following criteria
            | criteria                |
            | mpos normal user        |
        And the user accesses to dashboard MPOS
        And the analytics interceptor service is initiated
        When the user accesses to card MPOS
        Then the analytics events contains the following variables
            | item                    | value                                                                                   | type             | event          |
            | analytics               | analytics/glomo_base                                                                    | json schema      | App Page Visit |
            | version DL              | 20250414_5.0                                                                            | string           | App Page Visit |
            | page instance ID        | de                                                                                      | string           | App Page Visit |
            | sysEnv                  | app                                                                                     | string           | App Page Visit |
            | page segment            | personas                                                                                | string           | App Page Visit |
            | page intent             | transaccion                                                                             | string           | App Page Visit |
            | business unit           | BBVA Mexico                                                                             | string           | App Page Visit |
            | page area               | privada                                                                                 | string           | App Page Visit |
            | language                | ES                                                                                      | string           | App Page Visit |
            | channel                 | online                                                                                  | string           | App Page Visit |
            | site app name           | App BBVA Mexico                                                                         | string           | App Page Visit |
            | project name            | Mercurio                                                                                | string           | App Page Visit |
            | level 1                 | zona de cobro                                                                           | string           | App Page Visit |
            | level 2                 | compra lector                                                                           | string           | App Page Visit |
            | level 3                 | 1 caracteristicas lector de tarjetas                                                    | string           | App Page Visit |
            | page name               | app:privada:personas:zona de cobro:compra lector:1 caracteristicas lector de tarjetas   | string           | App Page Visit |
            | device mobile           | si                                                                                      | string           | App Page Visit |
            | device root             |                                                                                         | string           | App Page Visit |
            | user segment global     | 003001                                                                                  | string           | App Page Visit |
            | user userState          | logado                                                                                  | string           | App Page Visit |
            | profile ID               | profileID                                                                                | regexp named     | App Page Visit |
            | user gender             | gender                                                                                  | regexp named     | App Page Visit |
            | user age                | age                                                                                     | regexp named     | App Page Visit |
            | application step        | 1 caracteristicas lector de tarjetas                                                    | string           | App Page Visit |
            | application state       |                                                                                         | string           | App Page Visit |
            | application name        | compra lector                                                                           | string           | App Page Visit |
            | application type        | operativa                                                                               | string           | App Page Visit |
            | global application      | onboarding mpos                                                                         | string           | App Page Visit |
            | internal campaign       |                                                                                         | empty array      | App Page Visit |
            | optimization attributes |                                                                                         | empty array      | App Page Visit |
            | products attributes     |                                                                                         | empty array      | App Page Visit |

    @ANA_EVENT_MPPU003
    @analytics
    @MX @web @ios @android
    @vbank @backend(test)
    @web-done
    Scenario: The user selects the conditions link in onboarding page - App Started - Know more details
        Given a user with the following criteria
            | criteria               |
            | mpos normal user       |
        And the user accesses to dashboard MPOS
        And the user accesses to card MPOS
        And the analytics interceptor service is initiated
        When the user accesses to more details section
        Then the analytics events contains the following variables
            | item                    | value                                                                                   | type             | event       |
            | analytics               | analytics/glomo_base                                                                    | json schema      | App Started |
            | version DL              | 20250414_5.0                                                                            | string           | App Started |
            | page instance ID        | de                                                                                      | string           | App Started |
            | sysEnv                  | app                                                                                     | string           | App Started |
            | page segment            | personas                                                                                | string           | App Started |
            | page intent             | transaccion                                                                             | string           | App Started |
            | business unit           | BBVA Mexico                                                                             | string           | App Started |
            | page area               | privada                                                                                 | string           | App Started |
            | language                | ES                                                                                      | string           | App Started |
            | channel                 | online                                                                                  | string           | App Started |
            | site app name           | App BBVA Mexico                                                                         | string           | App Started |
            | project name            | Mercurio                                                                                | string           | App Started |
            | level 1                 | zona de cobro                                                                           | string           | App Started |
            | level 2                 | compra lector                                                                           | string           | App Started |
            | level 3                 | 1 caracteristicas lector de tarjetas                                                    | string           | App Started |
            | page name               | app:privada:personas:zona de cobro:compra lector:1 caracteristicas lector de tarjetas   | string           | App Started |
            | device mobile           | si                                                                                      | string           | App Started |
            | device root             |                                                                                         | string           | App Started |
            | user segment global     | 003001                                                                                  | string           | App Started |
            | user userState          | logado                                                                                  | string           | App Started |
            | profile ID               | profileID                                                                                | regexp named     | App Started |
            | user gender             | gender                                                                                  | regexp named     | App Started |
            | user age                | age                                                                                     | regexp named     | App Started |
            | application step        | conocer mas detalles                                                                    | string           | App Started |
            | application name        | compra lector                                                                           | string           | App Started |
            | application type        | operativa                                                                               | string           | App Started |
            | global application      | onboarding mpos                                                                         | string           | App Started |
            | internal campaign       |                                                                                         | empty array      | App Started |
            | optimization attributes |                                                                                         | empty array      | App Started |
            | products attributes     |                                                                                         | empty array      | App Started |

    @ANA_EVENT_MPPU004
    @analytics
    @MX @web @ios @android
    @vbank @backend(test)
    @web-done
    Scenario: The user selects the commissions link in onboarding page - App Started - Know more commissions
        Given a user with the following criteria
            | criteria               |
            | mpos normal user       |
        And the user accesses to dashboard MPOS
        And the user accesses to card MPOS
        And the analytics interceptor service is initiated
        When the user accesses to other commissions section
        Then the analytics events contains the following variables
            | item                    | value                                                                                   | type             | event       |
            | analytics               | analytics/glomo_base                                                                    | json schema      | App Started |
            | version DL              | 20250414_5.0                                                                            | string           | App Started |
            | page instance ID        | de                                                                                      | string           | App Started |
            | sysEnv                  | app                                                                                     | string           | App Started |
            | page segment            | personas                                                                                | string           | App Started |
            | page intent             | transaccion                                                                             | string           | App Started |
            | business unit           | BBVA Mexico                                                                             | string           | App Started |
            | page area               | privada                                                                                 | string           | App Started |
            | language                | ES                                                                                      | string           | App Started |
            | channel                 | online                                                                                  | string           | App Started |
            | site app name           | App BBVA Mexico                                                                         | string           | App Started |
            | project name            | Mercurio                                                                                | string           | App Started |
            | level 1                 | zona de cobro                                                                           | string           | App Started |
            | level 2                 | compra lector                                                                           | string           | App Started |
            | level 3                 | 1 caracteristicas lector de tarjetas                                                    | string           | App Started |
            | page name               | app:privada:personas:zona de cobro:compra lector:1 caracteristicas lector de tarjetas   | string           | App Started |
            | device mobile           | si                                                                                      | string           | App Started |
            | device root             |                                                                                         | string           | App Started |
            | user segment global     | 003001                                                                                  | string           | App Started |
            | user userState          | logado                                                                                  | string           | App Started |
            | profile ID               | profileID                                                                                | regexp named     | App Started |
            | user gender             | gender                                                                                  | regexp named     | App Started |
            | user age                | age                                                                                     | regexp named     | App Started |
            | application step        | conocer otras comisiones                                                                | string           | App Started |
            | application name        | compra lector                                                                           | string           | App Started |
            | application type        | operativa                                                                               | string           | App Started |
            | global application      | onboarding mpos                                                                         | string           | App Started |
            | internal campaign       |                                                                                         | empty array      | App Started |
            | optimization attributes |                                                                                         | empty array      | App Started |
            | products attributes     |                                                                                         | empty array      | App Started |

    @ANA_EVENT_MPPU005
    @analytics
    @MX @web @ios @android
    @vbank @backend(test)
    @web-done
    Scenario: The user continues in the flow - App Started - Continue
        Given a user with the following criteria
            | criteria               |
            | mpos normal user       |
        And the user accesses to dashboard MPOS
        And the user accesses to card MPOS
        And the analytics interceptor service is initiated
        When the continues with the mpos process
        Then the analytics events contains the following variables
            | item                    | value                                                                                   | type             | event       |
            | analytics               | analytics/glomo_base                                                                    | json schema      | App Started |
            | version DL              | 20250414_5.0                                                                            | string           | App Started |
            | page instance ID        | de                                                                                      | string           | App Started |
            | sysEnv                  | app                                                                                     | string           | App Started |
            | page segment            | personas                                                                                | string           | App Started |
            | page intent             | transaccion                                                                             | string           | App Started |
            | business unit           | BBVA Mexico                                                                             | string           | App Started |
            | page area               | privada                                                                                 | string           | App Started |
            | language                | ES                                                                                      | string           | App Started |
            | channel                 | online                                                                                  | string           | App Started |
            | site app name           | App BBVA Mexico                                                                         | string           | App Started |
            | project name            | Mercurio                                                                                | string           | App Started |
            | level 1                 | zona de cobro                                                                           | string           | App Started |
            | level 2                 | compra lector                                                                           | string           | App Started |
            | level 3                 | 1 caracteristicas lector de tarjetas                                                    | string           | App Started |
            | page name               | app:privada:personas:zona de cobro:compra lector:1 caracteristicas lector de tarjetas   | string           | App Started |
            | device mobile           | si                                                                                      | string           | App Started |
            | device root             |                                                                                         | string           | App Started |
            | user segment global     | 003001                                                                                  | string           | App Started |
            | user userState          | logado                                                                                  | string           | App Started |
            | profile ID               | profileID                                                                                | regexp named     | App Started |
            | user gender             | gender                                                                                  | regexp named     | App Started |
            | user age                | age                                                                                     | regexp named     | App Started |
            | application step        | continuar                                                                               | string           | App Started |
            | application name        | compra lector                                                                           | string           | App Started |
            | application type        | operativa                                                                               | string           | App Started |
            | global application      | onboarding mpos                                                                         | string           | App Started |
            | internal campaign       |                                                                                         | empty array      | App Started |
            | optimization attributes |                                                                                         | empty array      | App Started |
            | products attributes     |                                                                                         | empty array      | App Started |

    @ANA_EVENT_MPPU006
    @analytics
    @MX @web @ios @android
    @vbank @backend(test)
    @web-done
    Scenario: The user exits in the onboarding page - App Started - In other moment
        Given a user with the following criteria
            | criteria               |
            | mpos normal user       |
        And the user accesses to dashboard MPOS
        And the user accesses to card MPOS
        And the analytics interceptor service is initiated
        When the user selects at another time
        Then the analytics events contains the following variables
            | item                    | value                                                                                   | type             | event       |
            | analytics               | analytics/glomo_base                                                                    | json schema      | App Started |
            | version DL              | 20250414_5.0                                                                            | string           | App Started |
            | page instance ID        | de                                                                                      | string           | App Started |
            | sysEnv                  | app                                                                                     | string           | App Started |
            | page segment            | personas                                                                                | string           | App Started |
            | page intent             | transaccion                                                                             | string           | App Started |
            | business unit           | BBVA Mexico                                                                             | string           | App Started |
            | page area               | privada                                                                                 | string           | App Started |
            | language                | ES                                                                                      | string           | App Started |
            | channel                 | online                                                                                  | string           | App Started |
            | site app name           | App BBVA Mexico                                                                         | string           | App Started |
            | project name            | Mercurio                                                                                | string           | App Started |
            | level 1                 | zona de cobro                                                                           | string           | App Started |
            | level 2                 | compra lector                                                                           | string           | App Started |
            | level 3                 | 1 caracteristicas lector de tarjetas                                                    | string           | App Started |
            | page name               | app:privada:personas:zona de cobro:compra lector:1 caracteristicas lector de tarjetas   | string           | App Started |
            | device mobile           | si                                                                                      | string           | App Started |
            | device root             |                                                                                         | string           | App Started |
            | user segment global     | 003001                                                                                  | string           | App Started |
            | user userState          | logado                                                                                  | string           | App Started |
            | profile ID               | profileID                                                                                | regexp named     | App Started |
            | user gender             | gender                                                                                  | regexp named     | App Started |
            | user age                | age                                                                                     | regexp named     | App Started |
            | application step        | en otro momento                                                                         | string           | App Started |
            | application name        | compra lector                                                                           | string           | App Started |
            | application type        | operativa                                                                               | string           | App Started |
            | global application      | onboarding mpos                                                                         | string           | App Started |
            | internal campaign       |                                                                                         | empty array      | App Started |
            | optimization attributes |                                                                                         | empty array      | App Started |
            | products attributes     |                                                                                         | empty array      | App Started |

    @ANA_EVENT_MPPU007
    @analytics
    @MX @web @ios @android
    @vbank @backend(test)
    @web-done
    Scenario: The user selects main address and continue - App Step 2
        Given a user with the following criteria
            | criteria               |
            | mpos normal user       |
        And the user accesses to dashboard MPOS
        And the user accesses to card MPOS
        And the analytics interceptor service is initiated
        When the user selects an account for the process
        Then the analytics events contains the following variables
            | item                    | value                                                                                   | type             | event      |
            | analytics               | analytics/glomo_base                                                                    | json schema      | App Step 2 |
            | version DL              | 20250414_5.0                                                                            | string           | App Step 2 |
            | page instance ID        | de                                                                                      | string           | App Step 2 |
            | sysEnv                  | app                                                                                     | string           | App Step 2 |
            | page segment            | personas                                                                                | string           | App Step 2 |
            | page intent             | transaccion                                                                             | string           | App Step 2 |
            | business unit           | BBVA Mexico                                                                             | string           | App Step 2 |
            | page area               | privada                                                                                 | string           | App Step 2 |
            | language                | ES                                                                                      | string           | App Step 2 |
            | channel                 | online                                                                                  | string           | App Step 2 |
            | site app name           | App BBVA Mexico                                                                         | string           | App Step 2 |
            | project name            | Mercurio                                                                                | string           | App Step 2 |
            | level 1                 | zona de cobro                                                                           | string           | App Step 2 |
            | level 2                 | compra lector                                                                           | string           | App Step 2 |
            | level 3                 | 2 direccion de envio                                                                    | string           | App Step 2 |
            | page name               | app:privada:personas:zona de cobro:compra lector:2 direccion de envio                   | string           | App Step 2 |
            | device mobile           | si                                                                                      | string           | App Step 2 |
            | device root             |                                                                                         | string           | App Step 2 |
            | user segment global     | 003001                                                                                  | string           | App Step 2 |
            | user userState          | logado                                                                                  | string           | App Step 2 |
            | profile ID               | profileID                                                                                | regexp named     | App Step 2 |
            | user gender             | gender                                                                                  | regexp named     | App Step 2 |
            | user age                | age                                                                                     | regexp named     | App Step 2 |
            | application step        | 2 direccion de envio                                                                    | string           | App Step 2 |
            | application name        | compra lector                                                                           | string           | App Step 2 |
            | application type        | operativa                                                                               | string           | App Step 2 |
            | global application      | onboarding mpos                                                                         | string           | App Step 2 |
            | internal campaign       |                                                                                         | empty array      | App Step 2 |
            | optimization attributes |                                                                                         | empty array      | App Step 2 |

    @ANA_EVENT_MPPU008
    @analytics
    @MX @web @ios @android
    @vbank @backend(test)
    @web-done
    Scenario: The user selects an account to pay the card reader - App Step 3
        Given a user with the following criteria
            | criteria               |
            | mpos normal user       |
        And the user accesses to dashboard MPOS
        And the user accesses to card MPOS
        And the analytics interceptor service is initiated
        When the user selects an account for the process
        Then the analytics events contains the following variables
            | item                    | value                                                                                   | type             | event      |
            | analytics               | analytics/glomo_base                                                                    | json schema      | App Step 3 |
            | version DL              | 20250414_5.0                                                                            | string           | App Step 3 |
            | page instance ID        | de                                                                                      | string           | App Step 3 |
            | sysEnv                  | app                                                                                     | string           | App Step 3 |
            | page segment            | personas                                                                                | string           | App Step 3 |
            | page intent             | transaccion                                                                             | string           | App Step 3 |
            | business unit           | BBVA Mexico                                                                             | string           | App Step 3 |
            | page area               | privada                                                                                 | string           | App Step 3 |
            | language                | ES                                                                                      | string           | App Step 3 |
            | channel                 | online                                                                                  | string           | App Step 3 |
            | site app name           | App BBVA Mexico                                                                         | string           | App Step 3 |
            | project name            | Mercurio                                                                                | string           | App Step 3 |
            | level 1                 | zona de cobro                                                                           | string           | App Step 3 |
            | level 2                 | compra lector                                                                           | string           | App Step 3 |
            | level 3                 | 3 datos de pago                                                                         | string           | App Step 3 |
            | page name               | app:privada:personas:zona de cobro:compra lector:3 datos de pago                        | string           | App Step 3 |
            | device mobile           | si                                                                                      | string           | App Step 3 |
            | device root             |                                                                                         | string           | App Step 3 |
            | user segment global     | 003001                                                                                  | string           | App Step 3 |
            | user userState          | logado                                                                                  | string           | App Step 3 |
            | profile ID               | profileID                                                                                | regexp named     | App Step 3 |
            | user gender             | gender                                                                                  | regexp named     | App Step 3 |
            | user age                | age                                                                                     | regexp named     | App Step 3 |
            | application step        | 3 datos de pago                                                                         | string           | App Step 3 |
            | application name        | compra lector                                                                           | string           | App Step 3 |
            | application type        | operativa                                                                               | string           | App Step 3 |
            | global application      | onboarding mpos                                                                         | string           | App Step 3 |
            | internal campaign       |                                                                                         | empty array      | App Step 3 |
            | optimization attributes |                                                                                         | empty array      | App Step 3 |

    @ANA_EVENT_MPPU009
    @analytics
    @MX @web @ios @android
    @vbank @backend(test)
    @web-done
    Scenario: The user sees the summary and the confirmation step - App Step 4
        Given a user with the following criteria
            | criteria              |
            | mpos normal user      |
        And the user accesses to dashboard MPOS
        And the user accesses to card MPOS
        And the analytics interceptor service is initiated
        When the user selects an account for the process
        Then the analytics events contains the following variables
            | item                    | value                                                                                   | type             | event      |
            | analytics               | analytics/glomo_base                                                                    | json schema      | App Step 4 |
            | version DL              | 20250414_5.0                                                                            | string           | App Step 4 |
            | page instance ID        | de                                                                                      | string           | App Step 4 |
            | sysEnv                  | app                                                                                     | string           | App Step 4 |
            | page segment            | personas                                                                                | string           | App Step 4 |
            | page intent             | transaccion                                                                             | string           | App Step 4 |
            | business unit           | BBVA Mexico                                                                             | string           | App Step 4 |
            | page area               | privada                                                                                 | string           | App Step 4 |
            | language                | ES                                                                                      | string           | App Step 4 |
            | channel                 | online                                                                                  | string           | App Step 4 |
            | site app name           | App BBVA Mexico                                                                         | string           | App Step 4 |
            | project name            | Mercurio                                                                                | string           | App Step 4 |
            | level 1                 | zona de cobro                                                                           | string           | App Step 4 |
            | level 2                 | compra lector                                                                           | string           | App Step 4 |
            | level 3                 | 4 confirmacion                                                                           | string           | App Step 4 |
            | page name               | app:privada:personas:zona de cobro:compra lector:4 confirmacion                          | string           | App Step 4 |
            | device mobile           | si                                                                                      | string           | App Step 4 |
            | device root             |                                                                                         | string           | App Step 4 |
            | user segment global     | 003001                                                                                  | string           | App Step 4 |
            | user userState          | logado                                                                                  | string           | App Step 4 |
            | profile ID               | profileID                                                                                | regexp named     | App Step 4 |
            | user gender             | gender                                                                                  | regexp named     | App Step 4 |
            | user age                | age                                                                                     | regexp named     | App Step 4 |
            | application step        | 4 confirmacion                                                                           | string           | App Step 4 |
            | application name        | compra lector                                                                           | string           | App Step 4 |
            | application type        | operativa                                                                               | string           | App Step 4 |
            | global application      | onboarding mpos                                                                         | string           | App Step 4 |
            | product amount          | 578.84                                                                                  | string           | App Step 4 |
            | product currency        | MXN                                                                                     | string           | App Step 4 |
            | product name            | tarjeta nomina basica bbva                                                              | string           | App Step 4 |

    @ANA_EVENT_MPPU010
    @analytics
    @MX @web @ios @android
    @vbank @backend(test)
    @web-done
    Scenario: The user sees the otp token page - App Step 5
        Given a user with the following criteria
            | criteria               |
            | mpos normal user       |
        And the user accesses to dashboard MPOS
        And the user accesses to card MPOS
        And the user selects an account for the process
        And the analytics interceptor service is initiated
        When the user completes the process
        Then the analytics events contains the following variables
            | item                     | value                                                                                   | type             | event      |
            | analytics                | analytics/glomo_base                                                                    | json schema      | App Step 5 |
            | version DL               | 20250414_5.0                                                                            | string           | App Step 5 |
            | page instance ID         | de                                                                                      | string           | App Step 5 |
            | sysEnv                   | app                                                                                     | string           | App Step 5 |
            | page segment             | personas                                                                                | string           | App Step 5 |
            | page intent              | transaccion                                                                             | string           | App Step 5 |
            | business unit            | BBVA Mexico                                                                             | string           | App Step 5 |
            | page area                | privada                                                                                 | string           | App Step 5 |
            | language                 | ES                                                                                      | string           | App Step 5 |
            | channel                  | online                                                                                  | string           | App Step 5 |
            | site app name            | App BBVA Mexico                                                                         | string           | App Step 5 |
            | project name             | Mercurio                                                                                | string           | App Step 5 |
            | level 1                  | zona de cobro                                                                           | string           | App Step 5 |
            | level 2                  | compra lector                                                                           | string           | App Step 5 |
            | level 3                  | 5 otp                                                                                   | string           | App Step 5 |
            | page name                | app:privada:personas:zona de cobro:compra lector:5 otp                                  | string           | App Step 5 |
            | device mobile            | si                                                                                      | string           | App Step 5 |
            | device root              |                                                                                         | string           | App Step 5 |
            | user segment global      | 003001                                                                                  | string           | App Step 5 |
            | user userState           | logado                                                                                  | string           | App Step 5 |
            | profile ID                | profileID                                                                                | regexp named     | App Step 5 |
            | user gender              | gender                                                                                  | regexp named     | App Step 5 |
            | user age                 | age                                                                                     | regexp named     | App Step 5 |
            | application step         | 5 otp                                                                                   | string           | App Step 5 |
            | application name         | compra lector                                                                           | string           | App Step 5 |
            | application type         | operativa                                                                               | string           | App Step 5 |
            | global application       | onboarding mpos                                                                         | string           | App Step 5 |
            | custom fields             | firma:token                                                                              | string           | App Step 5 |
            | product amount           | 578.84                                                                                  | string           | App Step 5 |
            | product currency         | MXN                                                                                     | string           | App Step 5 |
            | product name             | tarjeta nomina basica bbva                                                              | string           | App Step 5 |
            | product primary category | cuentas                                                                                 | string           | App Step 5 |
            | internal campaign        |                                                                                         | empty array      | App Step 5 |
            | optimization attributes  |                                                                                         | empty array      | App Step 5 |

    @ANA_EVENT_MPPU011
    @analytics
    @MX @web @ios @android
    @vbank @backend(test)
    @web-done
    Scenario: The user sees the success page - App Completed
        Given a user with the following criteria
            | criteria               |
            | mpos normal user       |
        And the user accesses to dashboard MPOS
        And the user accesses to card MPOS
        And the user selects an account for the process
        And the analytics interceptor service is initiated
        When the user completes the process
        Then the analytics events contains the following variables
            | item                         | value                                                                                   | type             | event         |
            | analytics                    | analytics/glomo_base                                                                    | json schema      | App Completed |
            | version DL                   | 20250414_5.0                                                                            | string           | App Completed |
            | page instance ID             | de                                                                                      | string           | App Completed |
            | sysEnv                       | app                                                                                     | string           | App Completed |
            | page segment                 | personas                                                                                | string           | App Completed |
            | page intent                  | transaccion                                                                             | string           | App Completed |
            | business unit                | BBVA Mexico                                                                             | string           | App Completed |
            | page area                    | privada                                                                                 | string           | App Completed |
            | language                     | ES                                                                                      | string           | App Completed |
            | channel                      | online                                                                                  | string           | App Completed |
            | site app name                | App BBVA Mexico                                                                         | string           | App Completed |
            | project name                 | Mercurio                                                                                | string           | App Completed |
            | level 1                      | zona de cobro                                                                           | string           | App Completed |
            | level 2                      | compra lector                                                                           | string           | App Completed |
            | level 3                      | pagina exitosa                                                                          | string           | App Completed |
            | page name                    | app:privada:personas:zona de cobro:compra lector:pagina exitosa                         | string           | App Completed |
            | device mobile                | si                                                                                      | string           | App Completed |
            | user segment global          | 003001                                                                                  | string           | App Completed |
            | user userState               | logado                                                                                  | string           | App Completed |
            | profile ID                    | profileID                                                                                | regexp named     | App Completed |
            | user gender                  | gender                                                                                  | regexp named     | App Completed |
            | user age                     | age                                                                                     | regexp named     | App Completed |
            | application step             | pagina exitosa                                                                          | string           | App Completed |
            | application state            | finalizado                                                                               | string           | App Completed |
            | application name             | compra lector                                                                           | string           | App Completed |
            | application type             | operativa                                                                               | string           | App Completed |
            | global application           | onboarding mpos                                                                         | string           | App Completed |
            | custom fields                 | firma:token                                                                              | string           | App Completed |
            | application operation number | 2771539                                                                                 | string           | App Completed |
            | product amount               | 578.84                                                                                  | string           | App Completed |
            | product currency             | MXN                                                                                     | string           | App Completed |
            | product name                 | tarjeta nomina basica bbva                                                              | string           | App Completed |
            | product primary category     | cuentas                                                                                 | string           | App Completed |
            | internal campaign            |                                                                                         | empty array      | App Completed |
            | optimization attributes      |                                                                                         | empty array      | App Completed |

    @ANA_EVENT_MPPU012
    @analytics
    @MX @web @ios @android
    @vbank @backend(test)
    @web-done
    Scenario: The user sees an error no readers available page - Page View
        Given a user with the following criteria
            | criteria               |
            | mpos normal user       |
        And the user accesses to dashboard MPOS
        And the analytics interceptor service is initiated
        When the user accesses to card MPOS
        Then the analytics events contains the following variables
            | item                                          | value                                                                                   | type             | event     |
            | analytics                                     | analytics/glomo_base                                                                    | json schema      | Page View |
            | version DL                                    | 20250414_5.0                                                                            | string           | Page View |
            | page instance ID                              | de                                                                                      | string           | Page View |
            | sysEnv                                        | app                                                                                     | string           | Page View |
            | page segment                                  | personas                                                                                | string           | Page View |
            | page intent                                   | informacion                                                                             | string           | Page View |
            | business unit                                 | BBVA Mexico                                                                             | string           | Page View |
            | page area                                     | privada                                                                                 | string           | Page View |
            | language                                      | ES                                                                                      | string           | Page View |
            | channel                                       | online                                                                                  | string           | Page View |
            | site app name                                 | App BBVA Mexico                                                                         | string           | Page View |
            | project name                                  | Mercurio                                                                                | string           | Page View |
            | level 1                                       | zona de cobro                                                                           | string           | Page View |
            | level 2                                       | compra lector                                                                           | string           | Page View |
            | level 3                                       | error sin lectores disponibles                                                          | string           | Page View |
            | page name                                     | app:privada:personas:zona de cobro:compra lector:error sin lectores disponibles         | string           | Page View |
            | error page                                    | error sin lectores disponibles                                                          | string           | Page View |
            | device mobile                                 | si                                                                                      | string           | Page View |
            | user segment global                           | 003001                                                                                  | string           | Page View |
            | user userState                                | logado                                                                                  | string           | Page View |
            | profile ID                                     | profileID                                                                                | regexp named     | Page View |
            | user gender                                   | gender                                                                                  | regexp named     | Page View |
            | user age                                      | age                                                                                     | regexp named     | Page View |
            | internal campaign                             |                                                                                         | empty array      | Page View |

    @ANA_EVENT_MPPU013
    @analytics
    @MX @web @ios @android
    @vbank @backend(test)
    @web-done
    Scenario: The user sees the reader details page - Page View
        Given a user with the following criteria
            | criteria               |
            | mpos normal user       |
        And the user accesses to dashboard MPOS
        And the user accesses to card MPOS
        And the analytics interceptor service is initiated
        When the user accesses to more details section
        Then the analytics events contains the following variables
            | item                                          | value                                                                   | type             | event     |
            | analytics                                     | analytics/glomo_base                                                    | json schema      | Page View |
            | version DL                                    | 20250414_5.0                                                            | string           | Page View |
            | page instance ID                              | de                                                                      | string           | Page View |
            | sysEnv                                        | app                                                                     | string           | Page View |
            | page segment                                  | personas                                                                | string           | Page View |
            | page intent                                   | informacion                                                             | string           | Page View |
            | business unit                                 | BBVA Mexico                                                             | string           | Page View |
            | page area                                     | privada                                                                 | string           | Page View |
            | language                                      | ES                                                                      | string           | Page View |
            | channel                                       | online                                                                  | string           | Page View |
            | site app name                                 | App BBVA Mexico                                                         | string           | Page View |
            | project name                                  | Mercurio                                                                | string           | Page View |
            | level 1                                       | zona de cobro                                                           | string           | Page View |
            | level 2                                       | compra lector                                                           | string           | Page View |
            | level 3                                       | detalle lector                                                          | string           | Page View |
            | page name                                     | app:privada:personas:zona de cobro:compra lector:detalle lector         | string           | Page View |
            | device mobile                                 | si                                                                      | string           | Page View |
            | user segment global                           | 003001                                                                  | string           | Page View |
            | user userState                                | logado                                                                  | string           | Page View |
            | profile ID                                     | profileID                                                                | regexp named     | Page View |
            | user gender                                   | gender                                                                  | regexp named     | Page View |
            | user age                                      | age                                                                     | regexp named     | Page View |
            | internal campaign                             |                                                                         | empty array      | Page View |

    @ANA_EVENT_MPPU014
    @analytics
    @MX @web @ios @android
    @vbank @backend(test)
    @web-done
    Scenario: The user sees an error operation not available page - Page View
        Given a user with the following criteria
            | criteria               |
            | mpos normal user       |
        And the user accesses to dashboard MPOS
        And the user accesses to card MPOS
        And the user selects an account for the process
        And the analytics interceptor service is initiated
        When the user completes the process
        Then the analytics events contains the following variables
            | item                                          | value                                                                                  | type             | event     |
            | analytics                                     | analytics/glomo_base                                                                   | json schema      | Page View |
            | version DL                                    | 20250414_5.0                                                                           | string           | Page View |
            | page instance ID                              | de                                                                                     | string           | Page View |
            | sysEnv                                        | app                                                                                    | string           | Page View |
            | page segment                                  | personas                                                                               | string           | Page View |
            | page intent                                   | informacion                                                                            | string           | Page View |
            | business unit                                 | BBVA Mexico                                                                            | string           | Page View |
            | page area                                     | privada                                                                                | string           | Page View |
            | language                                      | ES                                                                                     | string           | Page View |
            | channel                                       | online                                                                                 | string           | Page View |
            | site app name                                 | App BBVA Mexico                                                                        | string           | Page View |
            | project name                                  | Mercurio                                                                               | string           | Page View |
            | level 1                                       | zona de cobro                                                                          | string           | Page View |
            | level 2                                       | compra lector                                                                          | string           | Page View |
            | level 3                                       | error operacion no disponible                                                          | string           | Page View |
            | page name                                     | app:privada:personas:zona de cobro:compra lector:error operacion no disponible         | string           | Page View |
            | error page                                    | error operacion no disponible                                                          | string           | Page View |
            | device mobile                                 | si                                                                                     | string           | Page View |
            | user segment global                           | 003001                                                                                 | string           | Page View |
            | user userState                                | logado                                                                                 | string           | Page View |
            | profile ID                                     | profileID                                                                               | regexp named     | Page View |
            | user gender                                   | gender                                                                                 | regexp named     | Page View |
            | user age                                      | age                                                                                    | regexp named     | Page View |
            | internal campaign                             |                                                                                        | empty array      | Page View |

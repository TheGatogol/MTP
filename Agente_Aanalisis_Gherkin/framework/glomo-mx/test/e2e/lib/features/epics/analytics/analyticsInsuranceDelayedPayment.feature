@insurancesDelayedPaymentAnalytics
Feature: Analytics - Insurance Delayed Payment

    @ANA_EVENT_IDP001
    @analytics
    @MX @web @android @ios
    @backend(test) @vbank
    @web-done
    Scenario: The user sees the onBoarding page
        Given a user with the following criteria
            | criteria                  |
            | insurance delayed payment |
            | insurance no payment      |
        And the user accesses insurance delayed payment "main"
        And the analytics interceptor service is initiated
        When the user accepts delayed payment onboarding
        Then the analytics events contains the following variables:
            | item               | value                                    | type         | event              |
            | analytics          | analytics/glomo_base                     | json schema  | App On Click Start |
            | version DL         | 20250414_5.0                             | string       | App On Click Start |
            | page instance ID   | de                                       | string       | App On Click Start |
            | page area          | privada                                  | string       | App On Click Start |
            | sysEnv             | app                                      | string       | App On Click Start |
            | channel            | online                                   | string       | App On Click Start |
            | language           | ES                                       | string       | App On Click Start |
            | page name          | app:privada:personas:seguros:pago seguro | string       | App On Click Start |
            | page intent        | transaccion                              | string       | App On Click Start |
            | page segment       | personas                                 | string       | App On Click Start |
            | project name       | Glomo                                    | string       | App On Click Start |
            | site app name      | App BBVA Mexico                          | string       | App On Click Start |
            | business unit      | BBVA Mexico                              | string       | App On Click Start |
            | device mobile      | si                                       | string       | App On Click Start |
            | user gender        | gender                                   | regexp named | App On Click Start |
            | user age           | age                                      | regexp named | App On Click Start |
            | profile ID         | profileID                                | regexp named | App On Click Start |
            | user userState     | logado                                   | string       | App On Click Start |
            | application step   | continuar                                | string       | App On Click Start |
            | application name   | retraso pago seguro                      | string       | App On Click Start |
            | application type   | operativa                                | string       | App On Click Start |
            | fulfillment model  | online                                   | string       | App On Click Start |
            | global application | insurance delayed payment                | string       | App On Click Start |

    @ANA_EVENT_IDP002
    @analytics
    @MX @web @android @ios
    @backend(test) @vbank
    @web-done
    Scenario: The users enter the operative
        Given a user with the following criteria
            | criteria                  |
            | insurance delayed payment |
            | insurance no payment      |
        And the user accesses insurance delayed payment "main"
        And the analytics interceptor service is initiated
        When the user accepts delayed payment onboarding
        Then the analytics events contains the following variables:
            | item               | value                                                    | type         | event          |
            | analytics          | analytics/glomo_base                                     | json schema  | App Page Visit |
            | version DL         | 20250414_5.0                                             | string       | App Page Visit |
            | page instance ID   | de                                                       | string       | App Page Visit |
            | page area          | privada                                                  | string       | App Page Visit |
            | level 1            | seguros                                                  | string       | App Page Visit |
            | level 2            | pago seguro                                              | string       | App Page Visit |
            | level 3            | 1 forma de pago                                          | string       | App Page Visit |
            | sysEnv             | app                                                      | string       | App Page Visit |
            | channel            | online                                                   | string       | App Page Visit |
            | language           | ES                                                       | string       | App Page Visit |
            | page name          | app:privada:personas:seguros:pago seguro:1 forma de pago | string       | App Page Visit |
            | page intent        | transaccion                                              | string       | App Page Visit |
            | page segment       | personas                                                 | string       | App Page Visit |
            | project name       | Glomo                                                    | string       | App Page Visit |
            | site app name      | App BBVA Mexico                                          | string       | App Page Visit |
            | business unit      | BBVA Mexico                                              | string       | App Page Visit |
            | device mobile      | si                                                       | string       | App Page Visit |
            | user gender        | gender                                                   | regexp named | App Page Visit |
            | user age           | age                                                      | regexp named | App Page Visit |
            | profile ID         | profileID                                                | regexp named | App Page Visit |
            | user userState     | logado                                                   | string       | App Page Visit |
            | application step   | 1 forma de pago                                          | string       | App Page Visit |
            | application name   | retraso pago seguro                                      | string       | App Page Visit |
            | application type   | operativa                                                | string       | App Page Visit |
            | fulfillment model  | online                                                   | string       | App Page Visit |
            | global application | insurance delayed payment                                | string       | App Page Visit |

    @ANA_EVENT_IDP003
    @analytics
    @MX @web @android @ios
    @backend(test) @vbank
    @web-done
    Scenario: User select one option on payment accordion
        Given a user with the following criteria
            | criteria                  |
            | insurance delayed payment |
            | insurance no payment      |
        And the user accesses insurance delayed payment "main"
        And the user accepts delayed payment onboarding
        And the analytics interceptor service is initiated
        When the user selects "my cards" payment type
        Then the analytics events contains the following variables
            | item               | value                                                    | type         | event       |
            | analytics          | analytics/glomo_base                                     | json schema  | App Started |
            | version DL         | 20250414_5.0                                             | string       | App Started |
            | page instance ID   | de                                                       | string       | App Started |
            | page area          | privada                                                  | string       | App Started |
            | level 1            | seguros                                                  | string       | App Started |
            | level 2            | pago seguro                                              | string       | App Started |
            | level 3            | 1 forma de pago                                          | string       | App Started |
            | sysEnv             | app                                                      | string       | App Started |
            | channel            | online                                                   | string       | App Started |
            | language           | ES                                                       | string       | App Started |
            | page name          | app:privada:personas:seguros:pago seguro:1 forma de pago | string       | App Started |
            | page intent        | transaccion                                              | string       | App Started |
            | page segment       | personas                                                 | string       | App Started |
            | project name       | Glomo                                                    | string       | App Started |
            | site app name      | App BBVA Mexico                                          | string       | App Started |
            | business unit      | BBVA Mexico                                              | string       | App Started |
            | device mobile      | si                                                       | string       | App Started |
            | user gender        | gender                                                   | regexp named | App Started |
            | user age           | age                                                      | regexp named | App Started |
            | profile ID         | profileID                                                | regexp named | App Started |
            | user userState     | logado                                                   | string       | App Started |
            | application step   | mis tarjetas                                             | string       | App Started |
            | application name   | retraso pago seguro                                      | string       | App Started |
            | application type   | operativa                                                | string       | App Started |
            | fulfillment model  | online                                                   | string       | App Started |
            | global application | insurance delayed payment                                | string       | App Started |

    @ANA_EVENT_IDP004
    @analytics
    @MX @web @android @ios
    @backend(test) @vbank
    @web-done
    Scenario: User sees the Product to Selected
        Given a user with the following criteria
            | criteria                  |
            | insurance delayed payment |
            | insurance no payment      |
        And the user accesses insurance delayed payment "main"
        And the user accepts delayed payment onboarding
        And the analytics interceptor service is initiated
        When the user selects "my cards" payment type
        Then the analytics events contains the following variables
            | item               | value                                                        | type         | event      |
            | analytics          | analytics/glomo_base                                         | json schema  | App Step 2 |
            | version DL         | 20250414_5.0                                                 | string       | App Step 2 |
            | page instance ID   | de                                                           | string       | App Step 2 |
            | page area          | privada                                                      | string       | App Step 2 |
            | level 1            | seguros                                                      | string       | App Step 2 |
            | level 2            | pago seguro                                                  | string       | App Step 2 |
            | level 3            | 2 modalidad de pago                                          | string       | App Step 2 |
            | sysEnv             | app                                                          | string       | App Step 2 |
            | channel            | online                                                       | string       | App Step 2 |
            | language           | ES                                                           | string       | App Step 2 |
            | page name          | app:privada:personas:seguros:pago seguro:2 modalidad de pago | string       | App Step 2 |
            | page intent        | transaccion                                                  | string       | App Step 2 |
            | page segment       | personas                                                     | string       | App Step 2 |
            | project name       | Glomo                                                        | string       | App Step 2 |
            | site app name      | App BBVA Mexico                                              | string       | App Step 2 |
            | business unit      | BBVA Mexico                                                  | string       | App Step 2 |
            | device mobile      | si                                                           | string       | App Step 2 |
            | user gender        | gender                                                       | regexp named | App Step 2 |
            | user age           | age                                                          | regexp named | App Step 2 |
            | profile ID         | profileID                                                    | regexp named | App Step 2 |
            | user userState     | logado                                                       | string       | App Step 2 |
            | application step   | 2 modalidad de pago                                          | string       | App Step 2 |
            | application name   | retraso pago seguro                                          | string       | App Step 2 |
            | application type   | operativa                                                    | string       | App Step 2 |
            | fulfillment model  | online                                                       | string       | App Step 2 |
            | global application | insurance delayed payment                                    | string       | App Step 2 |

    @ANA_EVENT_IDP005
    @analytics
    @MX @web @android @ios
    @backend(test) @vbank
    @web-done
    Scenario: User sees confirm button
        Given a user with the following criteria
            | criteria                  |
            | insurance delayed payment |
            | insurance no payment      |
        And the user accesses insurance delayed payment "main"
        And the user accepts delayed payment onboarding
        And the user selects "my cards" payment type
        And the analytics interceptor service is initiated
        When the user selects "pending payment" payment method
        Then the analytics events contains the following variables
            | item                 | value                                                   | type         | event      |
            | analytics            | analytics/glomo_base                                    | json schema  | App Step 3 |
            | version DL           | 20250414_5.0                                            | string       | App Step 3 |
            | page instance ID     | de                                                      | string       | App Step 3 |
            | page area            | privada                                                 | string       | App Step 3 |
            | level 1              | seguros                                                 | string       | App Step 3 |
            | level 2              | pago seguro                                             | string       | App Step 3 |
            | level 3              | 3 confirmacion                                          | string       | App Step 3 |
            | sysEnv               | app                                                     | string       | App Step 3 |
            | channel              | online                                                  | string       | App Step 3 |
            | language             | ES                                                      | string       | App Step 3 |
            | page name            | app:privada:personas:seguros:pago seguro:3 confirmacion | string       | App Step 3 |
            | page intent          | transaccion                                             | string       | App Step 3 |
            | page segment         | personas                                                | string       | App Step 3 |
            | project name         | Glomo                                                   | string       | App Step 3 |
            | site app name        | App BBVA Mexico                                         | string       | App Step 3 |
            | business unit        | BBVA Mexico                                             | string       | App Step 3 |
            | device mobile        | si                                                      | string       | App Step 3 |
            | user gender          | gender                                                  | regexp named | App Step 3 |
            | user age             | age                                                     | regexp named | App Step 3 |
            | profile ID           | profileID                                               | regexp named | App Step 3 |
            | user userState       | logado                                                  | string       | App Step 3 |
            | application step     | 3 confirmacion                                          | string       | App Step 3 |
            | application name     | retraso pago seguro                                     | string       | App Step 3 |
            | application type     | operativa                                               | string       | App Step 3 |
            | fulfillment model    | online                                                  | string       | App Step 3 |
            | global application   | insurance delayed payment                               | string       | App Step 3 |
            | application typology | pago unico                                              | string       | App Step 3 |

    @ANA_EVENT_IDP006
    @analytics
    @MX @web @android @ios
    @backend(test) @vbank
    @web-done
    Scenario: User sees otp
        Given a user with the following criteria
            | criteria                  |
            | insurance delayed payment |
        And the user accesses insurance delayed payment "main"
        And the user accepts delayed payment onboarding
        And the user selects "my cards" payment type
        And the user selects "pending payment" payment method
        And the analytics interceptor service is initiated
        When the user "confirms" a insurance payment
        Then the analytics events contains the following variables
            | item                 | value                                          | type         | event      |
            | analytics            | analytics/glomo_base                           | json schema  | App Step 4 |
            | version DL           | 20250414_5.0                                   | string       | App Step 4 |
            | page instance ID     | de                                             | string       | App Step 4 |
            | page area            | privada                                        | string       | App Step 4 |
            | level 1              | seguros                                        | string       | App Step 4 |
            | level 2              | pago seguro                                    | string       | App Step 4 |
            | level 3              | 4 otp                                          | string       | App Step 4 |
            | sysEnv               | app                                            | string       | App Step 4 |
            | channel              | online                                         | string       | App Step 4 |
            | language             | ES                                             | string       | App Step 4 |
            | page name            | app:privada:personas:seguros:pago seguro:4 otp | string       | App Step 4 |
            | page intent          | transaccion                                    | string       | App Step 4 |
            | page segment         | personas                                       | string       | App Step 4 |
            | project name         | Glomo                                          | string       | App Step 4 |
            | site app name        | App BBVA Mexico                                | string       | App Step 4 |
            | business unit        | BBVA Mexico                                    | string       | App Step 4 |
            | device mobile        | si                                             | string       | App Step 4 |
            | user gender          | gender                                         | regexp named | App Step 4 |
            | user age             | age                                            | regexp named | App Step 4 |
            | profile ID           | profileID                                      | regexp named | App Step 4 |
            | user userState       | logado                                         | string       | App Step 4 |
            | application step     | 4 otp                                          | string       | App Step 4 |
            | application name     | retraso pago seguro                            | string       | App Step 4 |
            | application type     | operativa                                      | string       | App Step 4 |
            | fulfillment model    | online                                         | string       | App Step 4 |
            | global application   | insurance delayed payment                      | string       | App Step 4 |
            | custom fields        | firma:token                                    | string       | App Step 4 |
            | application typology | pago unico                                     | string       | App Step 4 |

    @ANA_EVENT_IDP007
    @analytics
    @MX @web @android @ios
    @backend(test) @vbank
    @web-done
    Scenario: User paid insurance delayed payment
        Given a user with the following criteria
            | criteria                  |
            | insurance delayed payment |
        And the user accesses insurance delayed payment "main"
        And the user accepts delayed payment onboarding
        And the user selects "my cards" payment type
        And the user selects "pending payment" payment method
        And the analytics interceptor service is initiated
        When the user "confirms" a insurance payment
        Then the analytics events contains the following variables
            | item                         | value                                                   | type         | event         |
            | analytics                    | analytics/glomo_base                                    | json schema  | App Completed |
            | version DL                   | 20250414_5.0                                            | string       | App Completed |
            | page instance ID             | de                                                      | string       | App Completed |
            | page area                    | privada                                                 | string       | App Completed |
            | level 1                      | seguros                                                 | string       | App Completed |
            | level 2                      | pago seguro                                             | string       | App Completed |
            | level 3                      | pagina exitosa                                          | string       | App Completed |
            | sysEnv                       | app                                                     | string       | App Completed |
            | channel                      | online                                                  | string       | App Completed |
            | language                     | ES                                                      | string       | App Completed |
            | page name                    | app:privada:personas:seguros:pago seguro:pagina exitosa | string       | App Completed |
            | page intent                  | transaccion                                             | string       | App Completed |
            | page segment                 | personas                                                | string       | App Completed |
            | project name                 | Glomo                                                   | string       | App Completed |
            | site app name                | App BBVA Mexico                                         | string       | App Completed |
            | business unit                | BBVA Mexico                                             | string       | App Completed |
            | device mobile                | si                                                      | string       | App Completed |
            | user gender                  | gender                                                  | regexp named | App Completed |
            | user age                     | age                                                     | regexp named | App Completed |
            | profile ID                   | profileID                                               | regexp named | App Completed |
            | user userState               | logado                                                  | string       | App Completed |
            | application step             | pagina exitosa                                          | string       | App Completed |
            | application state            | finalizado                                              | string       | App Completed |
            | application name             | retraso pago seguro                                     | string       | App Completed |
            | application type             | operativa                                               | string       | App Completed |
            | fulfillment model            | online                                                  | string       | App Completed |
            | global application           | insurance delayed payment                               | string       | App Completed |
            | custom fields                | firma:token                                             | string       | App Completed |
            | application operation number | 443900                                                  | string       | App Completed |
            | application typology         | pago unico                                              | string       | App Completed |
            | application process          | pago pendiente y alta de cargos recurrentes             | string       | App Completed |

    @ANA_EVENT_IDP008
    @analytics
    @MX @web @android @ios
    @backend(test) @vbank
    @web-done
    Scenario: User sees operation not available
        Given a user with the following criteria
            | criteria                  |
            | insurance delayed payment |
        And the user accesses to detail notification
        And the analytics interceptor service is initiated
        When the user accesses insurance delayed payment
        Then the analytics events contains the following variables
            | item             | value                                                                              | type         | event     | event number |
            | analytics        | analytics/glomo_base                                                               | json schema  | Page View | 2            |
            | version DL       | 20250414_5.0                                                                       | string       | Page View | 2            |
            | page instance ID | de                                                                                 | string       | Page View | 2            |
            | sysEnv           | app                                                                                | string       | Page View | 2            |
            | page segment     | personas                                                                           | string       | Page View | 2            |
            | page intent      | informacion                                                                        | string       | Page View | 2            |
            | business unit    | BBVA Mexico                                                                        | string       | Page View | 2            |
            | page area        | privada                                                                            | string       | Page View | 2            |
            | language         | ES                                                                                 | string       | Page View | 2            |
            | channel          | online                                                                             | string       | Page View | 2            |
            | site app name    | App BBVA Mexico                                                                    | string       | Page View | 2            |
            | project name     | Glomo                                                                              | string       | Page View | 2            |
            | level 1          | seguros                                                                            | string       | Page View | 2            |
            | level 2          | detalle de notificacion                                                            | string       | Page View | 2            |
            | level 3          | error operacion no disponible                                                      | string       | Page View | 2            |
            | page name        | app:privada:personas:seguros:detalle de notificacion:error operacion no disponible | string       | Page View | 2            |
            | error page       | error operacion no disponible                                                      | string       | Page View | 2            |
            | device mobile    | si                                                                                 | string       | Page View | 2            |
            | user userState   | logado                                                                             | string       | Page View | 2            |
            | profile ID       | profileID                                                                          | regexp named | Page View | 2            |
            | user gender      | gender                                                                             | regexp named | Page View | 2            |
            | user age         | age                                                                                | regexp named | Page View | 2            |

    @ANA_EVENT_IDP009
    @analytics
    @MX @web @android @ios
    @backend(test) @vbank
    @web-done
    Scenario: User sees communication interrupted
        Given a user with the following criteria
            | criteria                  |
            | insurance delayed payment |
            | communication interrupted |
        And the user accesses to detail notification
        And the analytics interceptor service is initiated
        When the user accesses insurance delayed payment
        Then the analytics events contains the following variables
            | item             | value                                                                    | type         | event     | event number |
            | analytics        | analytics/glomo_base                                                     | json schema  | Page View | 2            |
            | version DL       | 20250414_5.0                                                             | string       | Page View | 2            |
            | page instance ID | de                                                                       | string       | Page View | 2            |
            | sysEnv           | app                                                                      | string       | Page View | 2            |
            | page segment     | personas                                                                 | string       | Page View | 2            |
            | page intent      | informacion                                                              | string       | Page View | 2            |
            | business unit    | BBVA Mexico                                                              | string       | Page View | 2            |
            | page area        | privada                                                                  | string       | Page View | 2            |
            | language         | ES                                                                       | string       | Page View | 2            |
            | channel          | online                                                                   | string       | Page View | 2            |
            | site app name    | App BBVA Mexico                                                          | string       | Page View | 2            |
            | project name     | Glomo                                                                    | string       | Page View | 2            |
            | level 1          | seguros                                                                  | string       | Page View | 2            |
            | level 2          | pago seguro                                                              | string       | Page View | 2            |
            | level 3          | error comunicacion interrumpida                                          | string       | Page View | 2            |
            | page name        | app:privada:personas:seguros:pago seguro:error comunicacion interrumpida | string       | Page View | 2            |
            | error page       | error comunicacion interrumpida                                          | string       | Page View | 2            |
            | device mobile    | si                                                                       | string       | Page View | 2            |
            | user userState   | logado                                                                   | string       | Page View | 2            |
            | profile ID       | profileID                                                                | regexp named | Page View | 2            |
            | user gender      | gender                                                                   | regexp named | Page View | 2            |
            | user age         | age                                                                      | regexp named | Page View | 2            |

    @ANA_EVENT_IDP010
    @analytics
    @MX @web @android @ios
    @backend(test) @vbank
    @web-done
    Scenario: User exits insurance delayed payment process
        Given a user with the following criteria
            | criteria                  |
            | insurance delayed payment |
        And the user accesses insurance delayed payment "main"
        And the user accepts delayed payment onboarding
        And the analytics interceptor service is initiated
        When the user comes back to dashboard
        Then the analytics events contains the following variables
            | item             | value                                                    | type         | event     |
            | analytics        | analytics/glomo_base                                     | json schema  | Page View |
            | version DL       | 20250414_5.0                                             | string       | Page View |
            | page instance ID | de                                                       | string       | Page View |
            | sysEnv           | app                                                      | string       | Page View |
            | page segment     | personas                                                 | string       | Page View |
            | page intent      | transaccion                                              | string       | Page View |
            | business unit    | BBVA Mexico                                              | string       | Page View |
            | page area        | privada                                                  | string       | Page View |
            | language         | ES                                                       | string       | Page View |
            | channel          | online                                                   | string       | Page View |
            | site app name    | App BBVA Mexico                                          | string       | Page View |
            | project name     | Glomo                                                    | string       | Page View |
            | level 1          | seguros                                                  | string       | Page View |
            | level 2          | pago seguro                                              | string       | Page View |
            | level 3          | 1 forma de pago                                          | string       | Page View |
            | page name        | app:privada:personas:seguros:pago seguro:1 forma de pago | string       | Page View |
            | device mobile    | si                                                       | string       | Page View |
            | user userState   | logado                                                   | string       | Page View |
            | profile ID       | profileID                                                | regexp named | Page View |
            | user gender      | gender                                                   | regexp named | Page View |
            | user age         | age                                                      | regexp named | Page View |

    @ANA_EVENT_IDP011
    @analytics
    @MX @web @android @ios
    @backend(test) @vbank
    @web-done
    Scenario: User sees expired time
        Given a user with the following criteria
            | criteria                  |
            | insurance delayed payment |
            | insurance no payment      |
        And the user accesses to detail notification
        And the analytics interceptor service is initiated
        When the user accesses insurance delayed payment
        Then the analytics events contains the following variables
            | item             | value                                                                | type         | event     | event number |
            | analytics        | analytics/glomo_base                                                 | json schema  | Page View | 2            |
            | version DL       | 20250414_5.0                                                         | string       | Page View | 2            |
            | page instance ID | de                                                                   | string       | Page View | 2            |
            | sysEnv           | app                                                                  | string       | Page View | 2            |
            | page segment     | personas                                                             | string       | Page View | 2            |
            | page intent      | informacion                                                          | string       | Page View | 2            |
            | business unit    | BBVA Mexico                                                          | string       | Page View | 2            |
            | page area        | privada                                                              | string       | Page View | 2            |
            | language         | ES                                                                   | string       | Page View | 2            |
            | channel          | online                                                               | string       | Page View | 2            |
            | site app name    | App BBVA Mexico                                                      | string       | Page View | 2            |
            | project name     | Glomo                                                                | string       | Page View | 2            |
            | level 1          | seguros                                                              | string       | Page View | 2            |
            | level 2          | pago seguro                                                          | string       | Page View | 2            |
            | level 3          | error pago fuera del limite                                          | string       | Page View | 2            |
            | page name        | app:privada:personas:seguros:pago seguro:error pago fuera del limite | string       | Page View | 2            |
            | error page       | error pago fuera del limite                                          | string       | Page View | 2            |
            | device mobile    | si                                                                   | string       | Page View | 2            |
            | user userState   | logado                                                               | string       | Page View | 2            |
            | profile ID       | profileID                                                            | regexp named | Page View | 2            |
            | user gender      | gender                                                               | regexp named | Page View | 2            |
            | user age         | age                                                                  | regexp named | Page View | 2            |

    @ANA_EVENT_IDP012
    @analytics
    @MX @web @android @ios
    @backend(test) @vbank
    @web-done
    Scenario: The user sees the modal paid in another transaction
        Given a user with the following criteria
            | criteria                  |
            | insurance delayed payment |
        And the user accesses to detail notification
        And the analytics interceptor service is initiated
        When the user accesses insurance delayed payment
        Then the analytics events contains the following variables
            | item             | value                                                  | type         | event     | event number |
            | analytics        | analytics/glomo_base                                   | json schema  | Page View | 2            |
            | version DL       | 20250414_5.0                                           | string       | Page View | 2            |
            | page instance ID | de                                                     | string       | Page View | 2            |
            | sysEnv           | app                                                    | string       | Page View | 2            |
            | page segment     | personas                                               | string       | Page View | 2            |
            | page intent      | informacion                                            | string       | Page View | 2            |
            | business unit    | BBVA Mexico                                            | string       | Page View | 2            |
            | page area        | privada                                                | string       | Page View | 2            |
            | language         | ES                                                     | string       | Page View | 2            |
            | channel          | online                                                 | string       | Page View | 2            |
            | site app name    | App BBVA Mexico                                        | string       | Page View | 2            |
            | project name     | Glomo                                                  | string       | Page View | 2            |
            | level 1          | seguros                                                | string       | Page View | 2            |
            | level 2          | pago seguro                                            | string       | Page View | 2            |
            | level 3          | poliza pagada                                          | string       | Page View | 2            |
            | page name        | app:privada:personas:seguros:pago seguro:poliza pagada | string       | Page View | 2            |
            | error page       | poliza pagada                                          | string       | Page View | 2            |
            | device mobile    | si                                                     | string       | Page View | 2            |
            | user userState   | logado                                                 | string       | Page View | 2            |
            | profile ID       | profileID                                              | regexp named | Page View | 2            |
            | user gender      | gender                                                 | regexp named | Page View | 2            |
            | user age         | age                                                    | regexp named | Page View | 2            |

    @ANA_EVENT_IDP013
    @analytics
    @MX @web @android @ios
    @backend(test) @vbank
    @web-done
    Scenario: User sees terms and condition confirm button
        Given a user with the following criteria
            | criteria                  |
            | insurance delayed payment |
        And the user accesses insurance delayed payment "main"
        And the user accepts delayed payment onboarding
        And the user selects "my cards" payment type
        And the analytics interceptor service is initiated
        When the user selects "pending payment and direct debit" payment method
        Then the analytics events contains the following variables
            | item             | value                                                           | type         | event     |
            | analytics        | analytics/glomo_base                                            | json schema  | Page View |
            | version DL       | 20250414_5.0                                                    | string       | Page View |
            | page instance ID | de                                                              | string       | Page View |
            | sysEnv           | app                                                             | string       | Page View |
            | page segment     | personas                                                        | string       | Page View |
            | page intent      | informacion                                                     | string       | Page View |
            | business unit    | BBVA Mexico                                                     | string       | Page View |
            | page area        | privada                                                         | string       | Page View |
            | language         | ES                                                              | string       | Page View |
            | channel          | online                                                          | string       | Page View |
            | site app name    | App BBVA Mexico                                                 | string       | Page View |
            | project name     | Glomo                                                           | string       | Page View |
            | level 1          | seguros                                                         | string       | Page View |
            | level 2          | pago seguro                                                     | string       | Page View |
            | level 3          | terminos y condiciones                                          | string       | Page View |
            | page name        | app:privada:personas:seguros:pago seguro:terminos y condiciones | string       | Page View |
            | device mobile    | si                                                              | string       | Page View |
            | user userState   | logado                                                          | string       | Page View |
            | profile ID       | profileID                                                       | regexp named | Page View |
            | user gender      | gender                                                          | regexp named | Page View |
            | user age         | age                                                             | regexp named | Page View |

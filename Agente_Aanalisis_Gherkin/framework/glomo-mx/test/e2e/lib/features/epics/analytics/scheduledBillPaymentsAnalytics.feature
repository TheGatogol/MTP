@scheduledBillPaymentAnalytics
Feature: Analytics - Scheduled Bill Payments

    @ANA_EVENT_SBP001
    @analytics
    @ios @android @web @web-done
    @MX @backend(test) @vbank
    Scenario: Service detail - Page Visit
        Given a user with the following criteria
            | criteria       |
            | basic accounts |
        And the user accesses bill payments home from operations and "follows" the onboarding
        And the user accesses to the scheduled payment option
        And the analytics interceptor service is initiated
        When the user chooses a "new and not complete" service
        Then the analytics events contains the following variables
            | item                 | value                                                               | type         | event          |
            | analytics	           | analytics/glomo_base	                                             | json schema  | App Page Visit |
            | version DL	       | 20250414_5.0	                                                     | string       | App Page Visit |
            | page name	           | app:privada:personas:programar pago servicios:1 detalle de servicio | string       | App Page Visit |
            | level 1	           | programar pago servicios	                                         | string       | App Page Visit |
            | level 2	           | 1 detalle de servicio	                                             | string       | App Page Visit |
            | language	           | ES	                                                                 | string       | App Page Visit |
            | page area	           | privada	                                                         | string       | App Page Visit |
            | page intent	       | transaccion	                                                     | string       | App Page Visit |
            | channel	           | online	                                                             | string       | App Page Visit |
            | page instance ID	   | de	                                                                 | string       | App Page Visit |
            | page info version	   | appVersion	                                                         | regexp named | App Page Visit |
            | page segment	       | personas	                                                         | string       | App Page Visit |
            | sysEnv	           | app	                                                             | string       | App Page Visit |
            | business unit	       | BBVA Mexico	                                                     | string       | App Page Visit |
            | site app name	       | App BBVA Mexico	                                                 | string       | App Page Visit |
            | project name	       | Glomo	                                                             | string       | App Page Visit |
            | device mobile	       | si	                                                                 | string       | App Page Visit |
            | user userState	   | logado	                                                             | string       | App Page Visit |
            | user segment global  | 003001	                                                             | string       | App Page Visit |
            | profile ID	       | profileID	                                                         | regexp named | App Page Visit |
            | user gender	       | gender	                                                             | regexp named | App Page Visit |
            | user age	           | age	                                                             | regexp named | App Page Visit |
            | global application   | scheduled bill payments                                             | string       | App Page Visit |
            | application name     | programar pago servicios                                            | string       | App Page Visit |
            | application type     | operativa                                                           | string       | App Page Visit |
            | application step     | 1 detalle de servicio                                               | string       | App Page Visit |
            | fulfillment model    | online                                                              | string       | App Page Visit |
            | application typology | fundacion bbva bancomer ac                                          | string       | App Page Visit |

    @ANA_EVENT_SBP002
    @analytics
    @ios @android @web @web-done
    @MX @backend(test) @vbank
    Scenario: Scheduled service detail - App Started
        Given a user with the following criteria
            | criteria         |
            | service payments |
        And the user accesses bill payments home from operations and "follows" the onboarding
        And the user accesses to the scheduled payment option
        And the analytics interceptor service is initiated
        When the user selects a save service and goes to "owner name" help section
        Then the analytics events contains the following variables
            | item                 | value                                                               | type         | event        |
            | analytics	           | analytics/glomo_base	                                             | json schema  | App Started  |
            | version DL	       | 20250414_5.0	                                                     | string       | App Started  |
            | page name	           | app:privada:personas:programar pago servicios:1 detalle de servicio | string       | App Started  |
            | level 1	           | programar pago servicios	                                         | string       | App Started  |
            | level 2	           | 1 detalle de servicio	                                             | string       | App Started  |
            | language	           | ES	                                                                 | string       | App Started  |
            | page area	           | privada	                                                         | string       | App Started  |
            | page intent	       | transaccion	                                                     | string       | App Started  |
            | channel	           | online	                                                             | string       | App Started  |
            | page instance ID	   | de	                                                                 | string       | App Started  |
            | page info version	   | appVersion	                                                         | regexp named | App Started  |
            | page segment	       | personas	                                                         | string       | App Started  |
            | sysEnv	           | app	                                                             | string       | App Started  |
            | business unit	       | BBVA Mexico	                                                     | string       | App Started  |
            | site app name	       | App BBVA Mexico	                                                 | string       | App Started  |
            | project name	       | Glomo	                                                             | string       | App Started  |
            | device mobile	       | si	                                                                 | string       | App Started  |
            | user userState	   | logado	                                                             | string       | App Started  |
            | user segment global  | 003001	                                                             | string       | App Started  |
            | profile ID	       | profileID	                                                         | regexp named | App Started  |
            | user gender	       | gender	                                                             | regexp named | App Started  |
            | user age	           | age	                                                             | regexp named | App Started  |
            | global application   | scheduled bill payments                                             | string       | App Started  |
            | application name     | programar pago servicios                                            | string       | App Started  |
            | application type     | operativa                                                           | string       | App Started  |
            | application step     | titular servicio modal                                              | string       | App Started  |
            | fulfillment model    | online                                                              | string       | App Started  |
            | application typology | cfe prueba                                                          | string       | App Started  |

    @ANA_EVENT_SBP003
    @analytics
    @ios @android @web @web-done
    @MX @backend(test) @vbank
    Scenario: Origin method - App Step 2
        Given a user with the following criteria
            | criteria         |
            | service payments |
        And the user accesses bill payments home from operations and "follows" the onboarding
        And the user accesses to the scheduled payment option
        And the analytics interceptor service is initiated
        When the user selects saved service option
        Then the analytics events contains the following variables
            | item                 | value                                                  | type         | event      |
            | analytics	           | analytics/glomo_base	                                | json schema  | App Step 2 |
            | version DL	       | 20250414_5.0	                                        | string       | App Step 2 |
            | page name	           | app:privada:personas:programar pago servicios:2 origen | string       | App Step 2 |
            | level 1	           | programar pago servicios	                            | string       | App Step 2 |
            | level 2	           | 2 origen            	                                | string       | App Step 2 |
            | language	           | ES	                                                    | string       | App Step 2 |
            | page area	           | privada	                                            | string       | App Step 2 |
            | page intent	       | transaccion	                                        | string       | App Step 2 |
            | channel	           | online	                                                | string       | App Step 2 |
            | page instance ID     | de	                                                    | string       | App Step 2 |
            | page info version    | appVersion	                                            | regexp named | App Step 2 |
            | page segment	       | personas	                                            | string       | App Step 2 |
            | sysEnv	           | app	                                                | string       | App Step 2 |
            | business unit	       | BBVA Mexico	                                        | string       | App Step 2 |
            | site app name	       | App BBVA Mexico	                                    | string       | App Step 2 |
            | project name	       | Glomo	                                                | string       | App Step 2 |
            | device mobile	       | si	                                                    | string       | App Step 2 |
            | user userState       | logado	                                                | string       | App Step 2 |
            | user segment global  | 003001	                                                | string       | App Step 2 |
            | profile ID	       | profileID	                                            | regexp named | App Step 2 |
            | user gender	       | gender	                                                | regexp named | App Step 2 |
            | user age	           | age	                                                | regexp named | App Step 2 |
            | global application   | scheduled bill payments                                | string       | App Step 2 |
            | application name     | programar pago servicios                               | string       | App Step 2 |
            | application type     | operativa                                              | string       | App Step 2 |
            | application step     | 2 origen                                               | string       | App Step 2 |
            | fulfillment model    | online                                                 | string       | App Step 2 |
            | application typology | cfe prueba                                             | string       | App Step 2 |

    @ANA_EVENT_SBP004
    @analytics
    @ios @android @web @web-done
    @MX @backend(test) @vbank
    Scenario: Maximum Amount - App Step 3
        Given a user with the following criteria
            | criteria         |
            | service payments |
        And the user accesses bill payments home from operations and "follows" the onboarding
        And the user accesses to the scheduled payment option
        And the user selects saved service option
        And the analytics interceptor service is initiated
        When the user selects an origin "account"
        Then the analytics events contains the following variables
            | item                     | value                                                          | type         | event      |
            | analytics                | analytics/glomo_base                                           | json schema  | App Step 3 |
            | version DL               | 20250414_5.0                                                   | string       | App Step 3 |
            | page name                | app:privada:personas:programar pago servicios:3 importe maximo | string       | App Step 3 |
            | level 1                  | programar pago servicios                                       | string       | App Step 3 |
            | level 2                  | 3 importe maximo                                               | string       | App Step 3 |
            | language                 | ES                                                             | string       | App Step 3 |
            | page area                | privada                                                        | string       | App Step 3 |
            | page intent              | transaccion                                                    | string       | App Step 3 |
            | channel                  | online                                                         | string       | App Step 3 |
            | page instance ID         | de                                                             | string       | App Step 3 |
            | page info version        | appVersion                                                     | regexp named | App Step 3 |
            | page segment             | personas                                                       | string       | App Step 3 |
            | sysEnv                   | app                                                            | string       | App Step 3 |
            | business unit            | BBVA Mexico                                                    | string       | App Step 3 |
            | site app name            | App BBVA Mexico                                                | string       | App Step 3 |
            | project name             | Glomo                                                          | string       | App Step 3 |
            | device mobile            | si                                                             | string       | App Step 3 |
            | user userState           | logado                                                         | string       | App Step 3 |
            | user segment global      | 003001                                                         | string       | App Step 3 |
            | profile ID               | profileID                                                      | regexp named | App Step 3 |
            | user gender              | gender                                                         | regexp named | App Step 3 |
            | user age                 | age                                                            | regexp named | App Step 3 |
            | global application       | scheduled bill payments                                        | string       | App Step 3 |
            | application name         | programar pago servicios                                       | string       | App Step 3 |
            | application type         | operativa                                                      | string       | App Step 3 |
            | application step         | 3 importe maximo                                               | string       | App Step 3 |
            | fulfillment model        | online                                                         | string       | App Step 3 |
            | application typology     | cfe prueba                                                     | string       | App Step 3 |
            | product primary category | cuentas                                                        | string       | App Step 3 |
            | product subtype          |                                                                | string       | App Step 3 |
            | product name             | membresia bp                                                   | string       | App Step 3 |

    @ANA_EVENT_SBP005
    @analytics
    @ios @android @web @web-done
    @MX @backend(test) @vbank
    Scenario: Periodicity - App Step 4
        Given a user with the following criteria
            | criteria         |
            | service payments |
        And the user accesses bill payments home from operations and "follows" the onboarding
        And the user accesses to the scheduled payment option
        And the user selects saved service option
        And the analytics interceptor service is initiated
        When the user selects maximum amount section and goes to periodicity section
        Then the analytics events contains the following variables
            | item                     | value                                                        | type         | event      |
            | analytics                | analytics/glomo_base                                         | json schema  | App Step 4 |
            | version DL               | 20250414_5.0                                                 | string       | App Step 4 |
            | page name                | app:privada:personas:programar pago servicios:4 periodicidad | string       | App Step 4 |
            | level 1                  | programar pago servicios                                     | string       | App Step 4 |
            | level 2                  | 4 periodicidad                                               | string       | App Step 4 |
            | language                 | ES                                                           | string       | App Step 4 |
            | page area                | privada                                                      | string       | App Step 4 |
            | page intent              | transaccion                                                  | string       | App Step 4 |
            | channel                  | online                                                       | string       | App Step 4 |
            | page instance ID         | de                                                           | string       | App Step 4 |
            | page info version        | appVersion                                                   | regexp named | App Step 4 |
            | page segment             | personas                                                     | string       | App Step 4 |
            | sysEnv                   | app                                                          | string       | App Step 4 |
            | business unit            | BBVA Mexico                                                  | string       | App Step 4 |
            | site app name            | App BBVA Mexico                                              | string       | App Step 4 |
            | project name             | Glomo                                                        | string       | App Step 4 |
            | device mobile            | si                                                           | string       | App Step 4 |
            | user userState           | logado                                                       | string       | App Step 4 |
            | user segment global      | 003001                                                       | string       | App Step 4 |
            | profile ID               | profileID                                                    | regexp named | App Step 4 |
            | user gender              | gender                                                       | regexp named | App Step 4 |
            | user age                 | age                                                          | regexp named | App Step 4 |
            | global application       | scheduled bill payments                                      | string       | App Step 4 |
            | application name         | programar pago servicios                                     | string       | App Step 4 |
            | application type         | operativa                                                    | string       | App Step 4 |
            | application step         | 4 periodicidad                                               | string       | App Step 4 |
            | fulfillment model        | online                                                       | string       | App Step 4 |
            | application typology     | cfe prueba                                                   | string       | App Step 4 |
            | product primary category | cuentas                                                      | string       | App Step 4 |
            | product subtype          |                                                              | string       | App Step 4 |
            | product name             | membresia bp                                                 | string       | App Step 4 |

    @ANA_EVENT_SBP006
    @analytics
    @ios @android @web @web-done
    @MX @backend(test) @vbank
    Scenario: Terms and Conditions - App Step 5
        Given a user with the following criteria
            | criteria         |
            | service payments |
        And the user accesses bill payments home from operations and "follows" the onboarding
        And the user accesses to the scheduled payment option
        And the user selects saved service option and proceeds to terms and conditions
        And the analytics interceptor service is initiated
        When the user selects terms and conditions section
        Then the analytics events contains the following variables
            | item                     | value                                                                  | type         | event      |
            | analytics                | analytics/glomo_base                                                   | json schema  | App Step 5 |
            | version DL               | 20250414_5.0                                                           | string       | App Step 5 |
            | page name                | app:privada:personas:programar pago servicios:5 terminos y condiciones | string       | App Step 5 |
            | level 1                  | programar pago servicios                                               | string       | App Step 5 |
            | level 2                  | 5 terminos y condiciones                                               | string       | App Step 5 |
            | language                 | ES                                                                     | string       | App Step 5 |
            | page area                | privada                                                                | string       | App Step 5 |
            | page intent              | transaccion                                                            | string       | App Step 5 |
            | channel                  | online                                                                 | string       | App Step 5 |
            | page instance ID         | de                                                                     | string       | App Step 5 |
            | page info version        | appVersion                                                             | regexp named | App Step 5 |
            | page segment             | personas                                                               | string       | App Step 5 |
            | sysEnv                   | app                                                                    | string       | App Step 5 |
            | business unit            | BBVA Mexico                                                            | string       | App Step 5 |
            | site app name            | App BBVA Mexico                                                        | string       | App Step 5 |
            | project name             | Glomo                                                                  | string       | App Step 5 |
            | device mobile            | si                                                                     | string       | App Step 5 |
            | user userState           | logado                                                                 | string       | App Step 5 |
            | user segment global      | 003001                                                                 | string       | App Step 5 |
            | profile ID               | profileID                                                              | regexp named | App Step 5 |
            | user gender              | gender                                                                 | regexp named | App Step 5 |
            | user age                 | age                                                                    | regexp named | App Step 5 |
            | global application       | scheduled bill payments                                                | string       | App Step 5 |
            | application name         | programar pago servicios                                               | string       | App Step 5 |
            | application type         | operativa                                                              | string       | App Step 5 |
            | application step         | 5 terminos y condiciones                                               | string       | App Step 5 |
            | fulfillment model        | online                                                                 | string       | App Step 5 |
            | application typology     | cfe prueba                                                             | string       | App Step 5 |
            | product primary category | cuentas                                                                | string       | App Step 5 |
            | product subtype          |                                                                        | string       | App Step 5 |
            | product name             | membresia bp                                                           | string       | App Step 5 |

    @ANA_EVENT_SBP007
    @analytics
    @ios @android @web @web-done
    @MX @backend(test) @vbank
    Scenario: Summary Screen - App Step 6
        Given a user with the following criteria
            | criteria         |
            | service payments |
        And the user accesses bill payments home from operations and "follows" the onboarding
        And the user accesses to the scheduled payment option
        And the user selects saved service option
        And the analytics interceptor service is initiated
        When the user accepts the recurring charge format
        Then the analytics events contains the following variables
            | item                     | value                                                        | type         | event      |
            | analytics                | analytics/glomo_base                                         | json schema  | App Step 6 |
            | version DL               | 20250414_5.0                                                 | string       | App Step 6 |
            | page name                | app:privada:personas:programar pago servicios:6 confirmacion | string       | App Step 6 |
            | level 1                  | programar pago servicios                                     | string       | App Step 6 |
            | level 2                  | 6 confirmacion                                               | string       | App Step 6 |
            | language                 | ES                                                           | string       | App Step 6 |
            | page area                | privada                                                      | string       | App Step 6 |
            | page intent              | transaccion                                                  | string       | App Step 6 |
            | channel                  | online                                                       | string       | App Step 6 |
            | page instance ID         | de                                                           | string       | App Step 6 |
            | page info version        | appVersion                                                   | regexp named | App Step 6 |
            | page segment             | personas                                                     | string       | App Step 6 |
            | sysEnv                   | app                                                          | string       | App Step 6 |
            | business unit            | BBVA Mexico                                                  | string       | App Step 6 |
            | site app name            | App BBVA Mexico                                              | string       | App Step 6 |
            | project name             | Glomo                                                        | string       | App Step 6 |
            | device mobile            | si                                                           | string       | App Step 6 |
            | user userState           | logado                                                       | string       | App Step 6 |
            | user segment global      | 003001                                                       | string       | App Step 6 |
            | profile ID               | profileID                                                    | regexp named | App Step 6 |
            | user gender              | gender                                                       | regexp named | App Step 6 |
            | user age                 | age                                                          | regexp named | App Step 6 |
            | global application       | scheduled bill payments                                      | string       | App Step 6 |
            | application name         | programar pago servicios                                     | string       | App Step 6 |
            | application type         | operativa                                                    | string       | App Step 6 |
            | application step         | 6 confirmacion                                               | string       | App Step 6 |
            | application typology     | cfe prueba                                                   | string       | App Step 6 |
            | fulfillment model        | online                                                       | string       | App Step 6 |
            | product primary category | cuentas                                                      | string       | App Step 6 |
            | product subtype          |                                                              | string       | App Step 6 |
            | product name             | membresia bp                                                 | string       | App Step 6 |

    @ANA_EVENT_SBP008
    @analytics
    @ios @android @web @web-done
    @MX @backend(test) @vbank
    Scenario: OTP Screen - App Step 7
        Given a user with the following criteria
            | criteria         |
            | service payments |
        And the user accesses bill payments home from operations and "follows" the onboarding
        And the user accesses to the scheduled payment option
        And the user selects saved service option with recurring charge
        And the analytics interceptor service is initiated
        When the user completes the operation
        Then the analytics events contains the following variables
            | item                     | value                                               | type         | event      |
            | analytics                | analytics/glomo_base                                | json schema  | App Step 7 |
            | version DL               | 20250414_5.0                                        | string       | App Step 7 |
            | page name                | app:privada:personas:programar pago servicios:7 otp | string       | App Step 7 |
            | level 1                  | programar pago servicios                            | string       | App Step 7 |
            | level 2                  | 7 otp                                               | string       | App Step 7 |
            | language                 | ES                                                  | string       | App Step 7 |
            | page area                | privada                                             | string       | App Step 7 |
            | page intent              | transaccion                                         | string       | App Step 7 |
            | channel                  | online                                              | string       | App Step 7 |
            | page instance ID         | de                                                  | string       | App Step 7 |
            | page info version        | appVersion                                          | regexp named | App Step 7 |
            | page segment             | personas                                            | string       | App Step 7 |
            | sysEnv                   | app                                                 | string       | App Step 7 |
            | business unit            | BBVA Mexico                                         | string       | App Step 7 |
            | site app name            | App BBVA Mexico                                     | string       | App Step 7 |
            | project name             | Glomo                                               | string       | App Step 7 |
            | device mobile            | si                                                  | string       | App Step 7 |
            | user userState           | logado                                              | string       | App Step 7 |
            | user segment global      | 003001                                              | string       | App Step 7 |
            | profile ID               | profileID                                           | regexp named | App Step 7 |
            | user gender              | gender                                              | regexp named | App Step 7 |
            | user age                 | age                                                 | regexp named | App Step 7 |
            | global application       | scheduled bill payments                             | string       | App Step 7 |
            | application name         | programar pago servicios                            | string       | App Step 7 |
            | application type         | operativa                                           | string       | App Step 7 |
            | application step         | 7 otp                                               | string       | App Step 7 |
            | fulfillment model        | online                                              | string       | App Step 7 |
            | application typology     | cfe prueba                                          | string       | App Step 7 |
            | product primary category | cuentas                                             | string       | App Step 7 |
            | product subtype          |                                                     | string       | App Step 7 |
            | product name             | membresia bp                                        | string       | App Step 7 |

    @ANA_EVENT_SBP009
    @analytics
    @ios @android @web @web-done
    @MX @backend(test) @vbank
    Scenario: Success Scheduled Payment - App Completed
        Given a user with the following criteria
            | criteria         |
            | service payments |
        And the user accesses bill payments home from operations and "follows" the onboarding
        And the user accesses to the scheduled payment option
        And the user selects saved service option with recurring charge
        And the analytics interceptor service is initiated
        When the user completes the operation with OTP
        Then the analytics events contains the following variables
            | item                         | value                                                        | type         | event         |
            | analytics                    | analytics/glomo_base                                         | json schema  | App Completed |
            | version DL                   | 20250414_5.0                                                 | string       | App Completed |
            | page name                    | app:privada:personas:programar pago servicios:pagina exitosa | string       | App Completed |
            | level 1                      | programar pago servicios                                     | string       | App Completed |
            | level 2                      | pagina exitosa                                               | string       | App Completed |
            | language                     | ES                                                           | string       | App Completed |
            | page area                    | privada                                                      | string       | App Completed |
            | page intent                  | transaccion                                                  | string       | App Completed |
            | channel                      | online                                                       | string       | App Completed |
            | page instance ID             | de                                                           | string       | App Completed |
            | page info version            | appVersion                                                   | regexp named | App Completed |
            | page segment                 | personas                                                     | string       | App Completed |
            | sysEnv                       | app                                                          | string       | App Completed |
            | business unit                | BBVA Mexico                                                  | string       | App Completed |
            | site app name                | App BBVA Mexico                                              | string       | App Completed |
            | project name                 | Glomo                                                        | string       | App Completed |
            | device mobile                | si                                                           | string       | App Completed |
            | user userState               | logado                                                       | string       | App Completed |
            | user segment global          | 003001                                                       | string       | App Completed |
            | profile ID                   | profileID                                                    | regexp named | App Completed |
            | user gender                  | gender                                                       | regexp named | App Completed |
            | user age                     | age                                                          | regexp named | App Completed |
            | global application           | scheduled bill payments                                      | string       | App Completed |
            | application name             | programar pago servicios                                     | string       | App Completed |
            | application type             | operativa                                                    | string       | App Completed |
            | application step             | pagina exitosa                                               | string       | App Completed |
            | fulfillment model            | online                                                       | string       | App Completed |
            | application operation number | alphaNumericCaseSpace                                        | regexp named | App Completed |
            | application typology         | cfe prueba                                                   | string       | App Completed |
            | product primary category     | cuentas                                                      | string       | App Completed |
            | product subtype              |                                                              | string       | App Completed |
            | product name                 | maestra particulares                                         | string       | App Completed |

    @ANA_EVENT_SBP010
    @analytics
    @ios @android @web @web-done
    @MX @backend(test) @vbank
    Scenario: Schedule payment for services - Page View
        Given a user with the following criteria
            | criteria       |
            | basic accounts |
        And the user accesses bill payments home from operations and "follows" the onboarding
        And the analytics interceptor service is initiated
        When the user accesses to the scheduled payment option
        Then the analytics events contains the following variables
            | item                | value                                                  | type         | event     |
            | analytics           | analytics/glomo_base                                   | json schema  | Page View |
            | version DL          | 20250414_5.0                                           | string       | Page View |
            | page name           | app:privada:personas:programar pago servicios:servicio | string       | Page View |
            | level 1             | programar pago servicios                               | string       | Page View |
            | level 2             | servicio                                               | string       | Page View |
            | language            | ES                                                     | string       | Page View |
            | page area           | privada                                                | string       | Page View |
            | page intent         | transaccion                                            | string       | Page View |
            | channel             | online                                                 | string       | Page View |
            | page instance ID    | de                                                     | string       | Page View |
            | page info version   | appVersion                                             | regexp named | Page View |
            | page segment        | personas                                               | string       | Page View |
            | sysEnv              | app                                                    | string       | Page View |
            | business unit       | BBVA Mexico                                            | string       | Page View |
            | site app name       | App BBVA Mexico                                        | string       | Page View |
            | project name        | Glomo                                                  | string       | Page View |
            | device mobile       | si                                                     | string       | Page View |
            | user userState      | logado                                                 | string       | Page View |
            | user segment global | 003001                                                 | string       | Page View |
            | profile ID          | profileID                                              | regexp named | Page View |
            | user gender         | gender                                                 | regexp named | Page View |
            | user age            | age                                                    | regexp named | Page View |

    @ANA_EVENT_SBP011
    @analytics
    @ios @android @web @web-done
    @MX @backend(test) @vbank
    Scenario: Schedule payment from the command center - Internal Link
        Given a user with the following criteria
            | criteria       |
            | basic accounts |
        And the user accesses bill payments home from operations and "follows" the onboarding
        And the user accesses to the scheduled payment option
        And the analytics interceptor service is initiated
        When the user chooses a "new and not complete" service
        Then the analytics events contains the following variables
            | item                | value                                                  | type         | event         |
            | analytics           | analytics/glomo_base                                   | json schema  | Internal Link |
            | version DL          | 20250414_5.0                                           | string       | Internal Link |
            | page name           | app:privada:personas:programar pago servicios:servicio | string       | Internal Link |
            | level 1             | programar pago servicios                               | string       | Internal Link |
            | level 2             | servicio                                               | string       | Internal Link |
            | language            | ES                                                     | string       | Internal Link |
            | page area           | privada                                                | string       | Internal Link |
            | page intent         | transaccion                                            | string       | Internal Link |
            | channel             | online                                                 | string       | Internal Link |
            | page instance ID    | de                                                     | string       | Internal Link |
            | page info version   | appVersion                                             | regexp named | Internal Link |
            | page segment        | personas                                               | string       | Internal Link |
            | sysEnv              | app                                                    | string       | Internal Link |
            | business unit       | BBVA Mexico                                            | string       | Internal Link |
            | site app name       | App BBVA Mexico                                        | string       | Internal Link |
            | project name        | Glomo                                                  | string       | Internal Link |
            | device mobile       | si                                                     | string       | Internal Link |
            | user userState      | logado                                                 | string       | Internal Link |
            | user segment global | 003001                                                 | string       | Internal Link |
            | profile ID          | profileID                                              | regexp named | Internal Link |
            | user gender         | gender                                                 | regexp named | Internal Link |
            | user age            | age                                                    | regexp named | Internal Link |

    @ANA_EVENT_SBP012
    @analytics
    @ios @android @web @web-done
    @MX @backend(test) @vbank
    Scenario: Scheduled Payment Payment Method Modal - Page View Payment Method
        Given a user with the following criteria
            | criteria       |
            | basic accounts |
        And the user accesses bill payments home from operations and "follows" the onboarding
        And the user accesses to the scheduled payment option
        And the analytics interceptor service is initiated
        When the user selects a save service and goes to help section payment method
        Then the analytics events contains the following variables
            | item                | value                                                                   | type         | event     |
            | analytics           | analytics/glomo_base                                                    | json schema  | Page View |
            | version DL          | 20250414_5.0                                                            | string       | Page View |
            | page name           | app:privada:personas:programar pago servicios:informacion medio de pago | string       | Page View |
            | level 1             | programar pago servicios                                                | string       | Page View |
            | level 2             | informacion medio de pago                                               | string       | Page View |
            | language            | ES                                                                      | string       | Page View |
            | page area           | privada                                                                 | string       | Page View |
            | page intent         | transaccion                                                             | string       | Page View |
            | channel             | online                                                                  | string       | Page View |
            | page instance ID    | de                                                                      | string       | Page View |
            | page info version   | appVersion                                                              | regexp named | Page View |
            | page segment        | personas                                                                | string       | Page View |
            | sysEnv              | app                                                                     | string       | Page View |
            | business unit       | BBVA Mexico                                                             | string       | Page View |
            | site app name       | App BBVA Mexico                                                         | string       | Page View |
            | project name        | Glomo                                                                   | string       | Page View |
            | device mobile       | si                                                                      | string       | Page View |
            | user userState      | logado                                                                  | string       | Page View |
            | user segment global | 003001                                                                  | string       | Page View |
            | profile ID          | profileID                                                               | regexp named | Page View |
            | user gender         | gender                                                                  | regexp named | Page View |
            | user age            | age                                                                     | regexp named | Page View |

    @ANA_EVENT_SBP013
    @analytics
    @ios @android @web @web-done
    @MX @backend(test) @vbank
    Scenario: Reference information - Page View
        Given a user with the following criteria
            | criteria       |
            | basic accounts |
        And the user accesses bill payments home from operations and "follows" the onboarding
        And the user accesses to the scheduled payment option
        And the analytics interceptor service is initiated
        When the user selects a save service and goes to "barcode" help section
        Then the analytics events contains the following variables
            | item                | value                                                                | type         | event     |
            | analytics           | analytics/glomo_base                                                 | json schema  | Page View |
            | version DL          | 20250414_5.0                                                         | string       | Page View |
            | page name           | app:privada:personas:programar pago servicios:informacion referencia | string       | Page View |
            | level 1             | programar pago servicios                                             | string       | Page View |
            | level 2             | informacion referencia                                               | string       | Page View |
            | language            | ES                                                                   | string       | Page View |
            | page area           | privada                                                              | string       | Page View |
            | page intent         | transaccion                                                          | string       | Page View |
            | channel             | online                                                               | string       | Page View |
            | page instance ID    | de                                                                   | string       | Page View |
            | page info version   | appVersion                                                           | regexp named | Page View |
            | page segment        | personas                                                             | string       | Page View |
            | sysEnv              | app                                                                  | string       | Page View |
            | business unit       | BBVA Mexico                                                          | string       | Page View |
            | site app name       | App BBVA Mexico                                                      | string       | Page View |
            | project name        | Glomo                                                                | string       | Page View |
            | device mobile       | si                                                                   | string       | Page View |
            | user userState      | logado                                                               | string       | Page View |
            | user segment global | 003001                                                               | string       | Page View |
            | profile ID          | profileID                                                            | regexp named | Page View |
            | user gender         | gender                                                               | regexp named | Page View |
            | user age            | age                                                                  | regexp named | Page View |

    @ANA_EVENT_SBP014
    @analytics
    @ios @android @web @web-done
    @MX @backend(test) @vbank
    Scenario: Holder name information - Page View
        Given a user with the following criteria
            | criteria        |
            | basic accounts  |
        And the user accesses bill payments home from operations and "follows" the onboarding
        And the user accesses to the scheduled payment option
        And the analytics interceptor service is initiated
        When the user selects a save service and goes to "owner name" help section
        Then the analytics events contains the following variables
            | item                | value                                                                        | type         | event     |
            | analytics           | analytics/glomo_base                                                         | json schema  | Page View |
            | version DL          | 20250414_5.0                                                                 | string       | Page View |
            | page name           | app:privada:personas:programar pago servicios:informacion nombre del titular | string       | Page View |
            | level 1             | programar pago servicios                                                     | string       | Page View |
            | level 2             | informacion nombre del titular                                               | string       | Page View |
            | language            | ES                                                                           | string       | Page View |
            | page area           | privada                                                                      | string       | Page View |
            | page intent         | transaccion                                                                  | string       | Page View |
            | channel             | online                                                                       | string       | Page View |
            | page instance ID    | de                                                                           | string       | Page View |
            | page info version   | appVersion                                                                   | regexp named | Page View |
            | page segment        | personas                                                                     | string       | Page View |
            | sysEnv              | app                                                                          | string       | Page View |
            | business unit       | BBVA Mexico                                                                  | string       | Page View |
            | site app name       | App BBVA Mexico                                                              | string       | Page View |
            | project name        | Glomo                                                                        | string       | Page View |
            | device mobile       | si                                                                           | string       | Page View |
            | user userState      | logado                                                                       | string       | Page View |
            | user segment global | 003001                                                                       | string       | Page View |
            | profile ID          | profileID                                                                    | regexp named | Page View |
            | user gender         | gender                                                                       | regexp named | Page View |
            | user age            | age                                                                          | regexp named | Page View |

    @ANA_EVENT_SBP015
    @analytics
    @ios @android @web @web-done
    @MX @backend(test) @vbank
    Scenario: Modal Error - Error Information Not Available
        Given a user with the following criteria
            | criteria           |
            | programmed payment |
        And the user accesses bill payments home from operations and "follows" the onboarding
        And the user accesses to scheduled bill payments and goes to summary section
        And the analytics interceptor service is initiated
        When the user completes the operation with OTP
        Then the analytics events contains the following variables:
            | item                    | value                                                                         | type             | event     |
            | analytics               | analytics/glomo_base                                                          | json schema      | Page View |
            | version DL              | 20250414_5.0                                                                  | string           | Page View |
            | page name               | app:privada:personas:programar pago servicios:error informacion no disponible | string           | Page View |
            | level 1                 | programar pago servicios                                                      | string           | Page View |
            | level 2                 | error informacion no disponible                                               | string           | Page View |
            | error page              | error informacion no disponible                                               | string           | Page View |
            | language                | ES                                                                            | string           | Page View |
            | page area               | privada                                                                       | string           | Page View |
            | page intent             | transaccion                                                                   | string           | Page View |
            | channel                 | online                                                                        | string           | Page View |
            | page instance ID        | de                                                                            | string           | Page View |
            | page info version       | appVersion                                                                    | regexp named     | Page View |
            | page segment            | personas                                                                      | string           | Page View |
            | sysEnv                  | app                                                                           | string           | Page View |
            | business unit           | BBVA Mexico                                                                   | string           | Page View |
            | site app name           | App BBVA Mexico                                                               | string           | Page View |
            | project name            | Glomo                                                                         | string           | Page View |
            | device mobile           | si                                                                            | string           | Page View |
            | user userState          | logado                                                                        | string           | Page View |
            | user segment global     | 003001                                                                        | string           | Page View |
            | profile ID              | profileID                                                                     | regexp named     | Page View |
            | user age                | age                                                                           | regexp named     | Page View |
            | user gender             | gender                                                                        | regexp named     | Page View |
            | internal campaign       |                                                                               | empty array      | Page View |
            | optimization attributes |                                                                               | empty array      | Page View |
            | application             |                                                                               | empty str object | Page View |
            | products attributes     |                                                                               | empty array      | Page View |

    @ANA_EVENT_SBP016
    @analytics
    @web
    @MX @!vbank
    @manual @JIRA.DCST-477
    Scenario: Barcode Error  - Error Invalid barcode
        Given a user with the following criteria
            | criteria           |
            | programmed payment |
        And the user accesses bill payments home from operations and "follows" the onboarding
        And the user accesses to scheduled bill payments and goes to summary section
        And the analytics interceptor service is initiated
        When the user completes the operation with OTP
        Then the analytics events contains the following variables:
            | item                    | value                                                                         | type             | event         |
            | analytics               | analytics/glomo_base                                                          | json schema      | Internal Link |
            | version DL              | 20250414_5.0                                                                  | string           | Internal Link |
            | page name               | app:privada:personas:programar pago servicios:error codigo de barras invalido | string           | Internal Link |
            | level 1                 | programar pago servicios                                                      | string           | Internal Link |
            | level 2                 | error codigo de barras invalido                                               | string           | Internal Link |
            | error page              | error codigo de barras invalido                                               | string           | Internal Link |
            | language                | ES                                                                            | string           | Internal Link |
            | page area               | privada                                                                       | string           | Internal Link |
            | page intent             | transaccion                                                                   | string           | Internal Link |
            | channel                 | online                                                                        | string           | Internal Link |
            | page instance ID        | de                                                                            | string           | Internal Link |
            | page info version       | appVersion                                                                    | regexp named     | Internal Link |
            | page segment            | personas                                                                      | string           | Internal Link |
            | sysEnv                  | app                                                                           | string           | Internal Link |
            | business unit           | BBVA Mexico                                                                   | string           | Internal Link |
            | site app name           | App BBVA Mexico                                                               | string           | Internal Link |
            | project name            | Glomo                                                                         | string           | Internal Link |
            | device mobile           | si                                                                            | string           | Internal Link |
            | user userState          | logado                                                                        | string           | Internal Link |
            | user segment global     | 003001                                                                        | string           | Internal Link |
            | profile ID              | profileID                                                                     | regexp named     | Internal Link |
            | user age                | age                                                                           | regexp named     | Internal Link |
            | user gender             | gender                                                                        | regexp named     | Internal Link |
            | internal campaign       |                                                                               | empty array      | Internal Link |
            | optimization attributes |                                                                               | empty array      | Internal Link |
            | application             |                                                                               | empty str object | Internal Link |
            | products attributes     |                                                                               | empty array      | Internal Link |

    @ANA_EVENT_SBP017
    @analytics
    @ios @android @web @web-done
    @MX @backend(test) @vbank
    Scenario: Wrong Reference - Error Invalid Reference
        Given a user with the following criteria
            | criteria           |
            | programmed payment |
        And the user accesses bill payments home from operations and "follows" the onboarding
        And the user accesses to scheduled bill payments and goes to summary section
        And the analytics interceptor service is initiated
        When the user completes the operation with OTP
        Then the analytics events contains the following variables:
            | item                    | value                                                                       | type             | event     |
            | analytics               | analytics/glomo_base                                                        | json schema      | Page View |
            | version DL              | 20250414_5.0                                                                | string           | Page View |
            | page name               | app:privada:personas:programar pago servicios:error referencia no es valida | string           | Page View |
            | level 1                 | programar pago servicios                                                    | string           | Page View |
            | level 2                 | error referencia no es valida                                               | string           | Page View |
            | error page              | error referencia no es valida                                               | string           | Page View |
            | language                | ES                                                                          | string           | Page View |
            | page area               | privada                                                                     | string           | Page View |
            | page intent             | transaccion                                                                 | string           | Page View |
            | channel                 | online                                                                      | string           | Page View |
            | page instance ID        | de                                                                          | string           | Page View |
            | page info version       | appVersion                                                                  | regexp named     | Page View |
            | page segment            | personas                                                                    | string           | Page View |
            | sysEnv                  | app                                                                         | string           | Page View |
            | business unit           | BBVA Mexico                                                                 | string           | Page View |
            | site app name           | App BBVA Mexico                                                             | string           | Page View |
            | project name            | Glomo                                                                       | string           | Page View |
            | device mobile           | si                                                                          | string           | Page View |
            | user userState          | logado                                                                      | string           | Page View |
            | user segment global     | 003001                                                                      | string           | Page View |
            | profile ID              | profileID                                                                   | regexp named     | Page View |
            | user age                | age                                                                         | regexp named     | Page View |
            | user gender             | gender                                                                      | regexp named     | Page View |
            | internal campaign       |                                                                             | empty array      | Page View |
            | optimization attributes |                                                                             | empty array      | Page View |
            | application             |                                                                             | empty str object | Page View |
            | products attributes     |                                                                             | empty array      | Page View |

    @ANA_EVENT_SBP018
    @analytics
    @ios @android @web @web-done
    @MX @backend(test) @vbank
    Scenario: Service Already Scheduled - Scheduled Already Registered
        Given a user with the following criteria
            | criteria           |
            | programmed payment |
        And the user accesses bill payments home from operations and "follows" the onboarding
        And the user accesses to scheduled bill payments and goes to summary section
        And the analytics interceptor service is initiated
        When the user completes the operation with OTP
        Then the analytics events contains the following variables:
            | item                    | value                                                                          | type             | event     |
            | analytics               | analytics/glomo_base                                                           | json schema      | Page View |
            | version DL              | 20250414_5.0                                                                   | string           | Page View |
            | page name               | app:privada:personas:programar pago servicios:error programacion ya registrada | string           | Page View |
            | level 1                 | programar pago servicios                                                       | string           | Page View |
            | level 2                 | error programacion ya registrada                                               | string           | Page View |
            | error page              | error programacion ya registrada                                               | string           | Page View |
            | language                | ES                                                                             | string           | Page View |
            | page area               | privada                                                                        | string           | Page View |
            | page intent             | transaccion                                                                    | string           | Page View |
            | channel                 | online                                                                         | string           | Page View |
            | page instance ID        | de                                                                             | string           | Page View |
            | page info version       | appVersion                                                                     | regexp named     | Page View |
            | page segment            | personas                                                                       | string           | Page View |
            | sysEnv                  | app                                                                            | string           | Page View |
            | business unit           | BBVA Mexico                                                                    | string           | Page View |
            | site app name           | App BBVA Mexico                                                                | string           | Page View |
            | project name            | Glomo                                                                          | string           | Page View |
            | device mobile           | si                                                                             | string           | Page View |
            | user userState          | logado                                                                         | string           | Page View |
            | user segment global     | 003001                                                                         | string           | Page View |
            | profile ID              | profileID                                                                      | regexp named     | Page View |
            | user age                | age                                                                            | regexp named     | Page View |
            | user gender             | gender                                                                         | regexp named     | Page View |
            | internal campaign       |                                                                                | empty array      | Page View |
            | optimization attributes |                                                                                | empty array      | Page View |
            | application             |                                                                                | empty str object | Page View |
            | products attributes     |                                                                                | empty array      | Page View |

    @ANA_EVENT_SBP019
    @analytics
    @ios @android @web @web-done
    @MX @backend(test) @vbank
    Scenario: Scheduled Bill Payments from bill payments success - App On Click Start
        Given a user with the following criteria
            | criteria           |
            | programmed payment |
        And the user attempts to access bill payments home
        And the user accepts the onboarding bill payments dashboard
        And the user select the summary service "cfe" reference "23674523672345672389" concept "7834237845"
        And the analytics interceptor service is initiated
        When the user selects the schedule option
        Then the analytics events contains the following variables:
            | item                    | value                                                      | type         | event              |
            | analytics               | analytics/glomo_base                                       | json schema  | App On Click Start |
            | version DL              | 20250414_5.0                                               | string       | App On Click Start |
            | page name               | app:privada:personas:cuentas:pagar servicio:pagina exitosa | string       | App On Click Start |
            | level 1                 | cuentas                                                    | string       | App On Click Start |
            | level 2                 | pagar servicio                                             | string       | App On Click Start |
            | level 3                 | pagina exitosa                                             | string       | App On Click Start |
            | language                | ES                                                         | string       | App On Click Start |
            | page area               | privada                                                    | string       | App On Click Start |
            | page intent             | transaccion                                                | string       | App On Click Start |
            | channel                 | online                                                     | string       | App On Click Start |
            | page instance ID        | de                                                         | string       | App On Click Start |
            | page info version       | appVersion                                                 | regexp named | App On Click Start |
            | page segment            | personas                                                   | string       | App On Click Start |
            | sysEnv                  | app                                                        | string       | App On Click Start |
            | business unit           | BBVA Mexico                                                | string       | App On Click Start |
            | site app name           | App BBVA Mexico                                            | string       | App On Click Start |
            | project name            | Glomo                                                      | string       | App On Click Start |
            | device mobile           | si                                                         | string       | App On Click Start |
            | user userState          | logado                                                     | string       | App On Click Start |
            | user segment global     | 003001                                                     | string       | App On Click Start |
            | profile ID              | profileID                                                  | regexp named | App On Click Start |
            | user age                | age                                                        | regexp named | App On Click Start |
            | user gender             | gender                                                     | regexp named | App On Click Start |
            | global application      | scheduled bill payments                                    | string       | App On Click Start |
            | application name        | programar pago servicios                                   | string       | App On Click Start |
            | application type        | operativa                                                  | string       | App On Click Start |
            | application step        | programar pago                                             | string       | App On Click Start |
            | fulfillment model       | online                                                     | string       | App On Click Start |
            | internal campaign       |                                                            | empty array  | App On Click Start |
            | optimization attributes |                                                            | empty array  | App On Click Start |
            | products attributes     |                                                            | empty array  | App On Click Start |

    @ANA_EVENT_SBP020
    @analytics
    @ios @android @web @web-done
    @MX @backend(test) @vbank
    Scenario: Scheduled bill payments from bill payments home - App On Click Start
        Given a user with the following criteria
            | criteria       |
            | basic accounts |
        And the user accesses bill payments home from operations and "follows" the onboarding
        And the analytics interceptor service is initiated
        When the user accesses to the scheduled payment option
        Then the analytics events contains the following variables:
            | item                    | value                                          | type         | event              | event number |
            | analytics               | analytics/glomo_base                           | json schema  | App On Click Start | 1            |
            | version DL              | 20250414_5.0                                   | string       | App On Click Start | 1            |
            | page name               | app:privada:personas:pagar servicio o impuesto | string       | App On Click Start | 1            |
            | level 1                 | pagar servicio o impuesto                      | string       | App On Click Start | 1            |
            | language                | ES                                             | string       | App On Click Start | 1            |
            | page area               | privada                                        | string       | App On Click Start | 1            |
            | page intent             | transaccion                                    | string       | App On Click Start | 1            |
            | channel                 | online                                         | string       | App On Click Start | 1            |
            | page instance ID        | de                                             | string       | App On Click Start | 1            |
            | page info version       | appVersion                                     | regexp named | App On Click Start | 1            |
            | page segment            | personas                                       | string       | App On Click Start | 1            |
            | sysEnv                  | app                                            | string       | App On Click Start | 1            |
            | business unit           | BBVA Mexico                                    | string       | App On Click Start | 1            |
            | site app name           | App BBVA Mexico                                | string       | App On Click Start | 1            |
            | project name            | Glomo                                          | string       | App On Click Start | 1            |
            | device mobile           | si                                             | string       | App On Click Start | 1            |
            | user userState          | logado                                         | string       | App On Click Start | 1            |
            | user segment global     | 003001                                         | string       | App On Click Start | 1            |
            | profile ID              | profileID                                      | regexp named | App On Click Start | 1            |
            | user age                | age                                            | regexp named | App On Click Start | 1            |
            | user gender             | gender                                         | regexp named | App On Click Start | 1            |
            | global application      | scheduled bill payments                        | string       | App On Click Start | 1            |
            | application name        | programar pago servicios                       | string       | App On Click Start | 1            |
            | application type        | operativa                                      | string       | App On Click Start | 1            |
            | application step        | programar pago                                 | string       | App On Click Start | 1            |
            | fulfillment model       | online                                         | string       | App On Click Start | 1            |
            | internal campaign       |                                                | empty array  | App On Click Start | 1            |
            | optimization attributes |                                                | empty array  | App On Click Start | 1            |

    @ANA_EVENT_SBP021
    @analytics
    @ios @android @web @web-done
    @MX @backend(test) @vbank
    Scenario: Scheduled Bill Payments from bill payments home detail - App On Click Start
        Given a user with the following criteria
            | criteria       |
            | basic accounts |
        And the user accesses bill payments home from operations and "follows" the onboarding
        And the user selects the manual payment detail option for a service "programmable"
        And the analytics interceptor service is initiated
        When the user selects the schedule service option
        Then the analytics events contains the following variables:
            | item                    | value                                                           | type         | event              |
            | analytics               | analytics/glomo_base                                            | json schema  | App On Click Start |
            | version DL              | 20250414_5.0                                                    | string       | App On Click Start |
            | page name               | app:privada:personas:pagar servicio o impuesto:detalle servicio | string       | App On Click Start |
            | level 1                 | pagar servicio o impuesto                                       | string       | App On Click Start |
            | level 2                 | detalle servicio                                                | string       | App On Click Start |
            | language                | ES                                                              | string       | App On Click Start |
            | page area               | privada                                                         | string       | App On Click Start |
            | page intent             | transaccion                                                     | string       | App On Click Start |
            | channel                 | online                                                          | string       | App On Click Start |
            | page instance ID        | de                                                              | string       | App On Click Start |
            | page info version       | appVersion                                                      | regexp named | App On Click Start |
            | page segment            | personas                                                        | string       | App On Click Start |
            | sysEnv                  | app                                                             | string       | App On Click Start |
            | business unit           | BBVA Mexico                                                     | string       | App On Click Start |
            | site app name           | App BBVA Mexico                                                 | string       | App On Click Start |
            | project name            | Glomo                                                           | string       | App On Click Start |
            | device mobile           | si                                                              | string       | App On Click Start |
            | user userState          | logado                                                          | string       | App On Click Start |
            | user segment global     | 003001                                                          | string       | App On Click Start |
            | profile ID              | profileID                                                       | regexp named | App On Click Start |
            | user age                | age                                                             | regexp named | App On Click Start |
            | user gender             | gender                                                          | regexp named | App On Click Start |
            | global application      | scheduled bill payments                                         | string       | App On Click Start |
            | application name        | programar pago servicios                                        | string       | App On Click Start |
            | application type        | operativa                                                       | string       | App On Click Start |
            | application step        | programar pago                                                  | string       | App On Click Start |
            | fulfillment model       | online                                                          | string       | App On Click Start |
            | internal campaign       |                                                                 | empty array  | App On Click Start |
            | optimization attributes |                                                                 | empty array  | App On Click Start |

    @ANA_EVENT_SBP022
    @analytics
    @ios @android @web @web-done
    @MX @backend(test) @vbank
    Scenario: Edit Scheduled Bill Payments from Bill Payments Home - Page View Edit Service
        Given a user with the following criteria
            | criteria                   |
            | several scheduled payments |
        And the user accesses bill payments home from operations and "follows" the onboarding
        And the user selects the scheduled payment "detail" option
        And the user selects the programming detail option
        And the analytics interceptor service is initiated
        When the user selects edit programmed service option
        Then the analytics events contains the following variables
            | item                | value                                                             | type         | event     |
            | analytics           | analytics/glomo_base                                              | json schema  | Page View |
            | version DL          | 20250414_5.0                                                      | string       | Page View |
            | page name           | app:privada:personas:programar pago servicios:editar programacion | string       | Page View |
            | level 1             | programar pago servicios                                          | string       | Page View |
            | level 2             | editar programacion                                               | string       | Page View |
            | language            | ES                                                                | string       | Page View |
            | page area           | privada                                                           | string       | Page View |
            | page intent         | transaccion                                                       | string       | Page View |
            | channel             | online                                                            | string       | Page View |
            | page instance ID    | de                                                                | string       | Page View |
            | page info version   | appVersion                                                        | regexp named | Page View |
            | page segment        | personas                                                          | string       | Page View |
            | sysEnv              | app                                                               | string       | Page View |
            | business unit       | BBVA Mexico                                                       | string       | Page View |
            | site app name       | App BBVA Mexico                                                   | string       | Page View |
            | project name        | Glomo                                                             | string       | Page View |
            | device mobile       | si                                                                | string       | Page View |
            | user userState      | logado                                                            | string       | Page View |
            | user segment global | 003001                                                            | string       | Page View |
            | profile ID          | profileID                                                         | regexp named | Page View |
            | user gender         | gender                                                            | regexp named | Page View |
            | user age            | age                                                               | regexp named | Page View |

    @ANA_EVENT_SBP023
    @analytics
    @ios @android @web @web-done
    @MX @backend(test) @vbank
    Scenario: Edit Service Payment Method - Internal Link
        Given a user with the following criteria
            | criteria                   |
            | several scheduled payments |
        And the user accesses bill payments home from operations and "follows" the onboarding
        And the user selects the scheduled payment "detail" option
        And the user selects the programming detail option
        And the user selects edit programmed service option
        And the analytics interceptor service is initiated
        When the user edits periodicity from the summary
        Then the analytics events contains the following variables
            | item                | value                                                             | type         | event         |
            | analytics           | analytics/glomo_base                                              | json schema  | Internal Link |
            | version DL          | 20250414_5.0                                                      | string       | Internal Link |
            | page name           | app:privada:personas:programar pago servicios:editar programacion | string       | Internal Link |
            | level 1             | programar pago servicios                                          | string       | Internal Link |
            | level 2             | editar programacion                                               | string       | Internal Link |
            | language            | ES                                                                | string       | Internal Link |
            | page area           | privada                                                           | string       | Internal Link |
            | page intent         | transaccion                                                       | string       | Internal Link |
            | channel             | online                                                            | string       | Internal Link |
            | page instance ID    | de                                                                | string       | Internal Link |
            | page info version   | appVersion                                                        | regexp named | Internal Link |
            | page segment        | personas                                                          | string       | Internal Link |
            | sysEnv              | app                                                               | string       | Internal Link |
            | business unit       | BBVA Mexico                                                       | string       | Internal Link |
            | site app name       | App BBVA Mexico                                                   | string       | Internal Link |
            | project name        | Glomo                                                             | string       | Internal Link |
            | device mobile       | si                                                                | string       | Internal Link |
            | user userState      | logado                                                            | string       | Internal Link |
            | user segment global | 003001                                                            | string       | Internal Link |
            | profile ID          | profileID                                                         | regexp named | Internal Link |
            | user gender         | gender                                                            | regexp named | Internal Link |
            | user age            | age                                                               | regexp named | Internal Link |

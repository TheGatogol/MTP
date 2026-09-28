@carInsuranceAnalytics
Feature: Analytics Remote banker car insurance

    @ANA_EVENT_CIB001
    @analytics
    @MX @vbank
    @web @ios @android
    @backend(test)
    @web-done
    Scenario: Car insurance - analytics event App On Click Start
        Given a user with the following criteria
            | criteria            |
            | remote banking user |
        And the user accesses to dashboard
        And the analytics interceptor service is initiated
        When the user accesses to "car insurance" from notifications
        Then the analytics events contains the following variables
            | item                     | value                                       | type         | event              |
            | analytics                | analytics/glomo_base                        | json schema  | App On Click Start |
            | page name                | app:privada:personas:notificaciones:detalle | string       | App On Click Start |
            | level 1                  | notificaciones                              | string       | App On Click Start |
            | level 2                  | detalle                                     | string       | App On Click Start |
            | language                 | ES                                          | string       | App On Click Start |
            | page area                | privada                                     | string       | App On Click Start |
            | page intent              | informacion                                 | string       | App On Click Start |
            | channel                  | online                                      | string       | App On Click Start |
            | page instance ID         | de                                          | string       | App On Click Start |
            | page info version        | appVersion                                  | regexp named | App On Click Start |
            | page segment             | personas                                    | string       | App On Click Start |
            | sysEnv                   | app                                         | string       | App On Click Start |
            | business unit            | BBVA Mexico                                 | string       | App On Click Start |
            | site app name            | App BBVA Mexico                             | string       | App On Click Start |
            | project name             | DIY E2E Sales                               | string       | App On Click Start |
            | device mobile            | si                                          | string       | App On Click Start |
            | user userState           | logado                                      | string       | App On Click Start |
            | profile ID               | profileID                                   | regexp named | App On Click Start |
            | user segment global      | 003001                                      | string       | App On Click Start |
            | global application       | car insurance                               | string       | App On Click Start |
            | application name         | seguro de auto last mile                    | string       | App On Click Start |
            | application type         | contratacion                                | string       | App On Click Start |
            | application step         | detalle notificacion                        | string       | App On Click Start |
            | fulfillment model        | online                                      | string       | App On Click Start |
            | product primary category | seguros                                     | string       | App On Click Start |
            | product subtype          | seguro auto                                 | string       | App On Click Start |

    @ANA_EVENT_CIB002
    @analytics
    @MX @vbank
    @web @ios @android
    @backend(test)
    @web-done
    Scenario: Car insurance - analytics event App Page Visit
        Given a user with the following criteria
            | criteria            |
            | remote banking user |
        And the user accesses to dashboard
        And the analytics interceptor service is initiated
        When the user accesses to "car insurance" from notifications
        Then the analytics events contains the following variables
            | item                     | value                                         | type         | event          |
            | analytics                | analytics/glomo_base                          | json schema  | App Page Visit |
            | page name                | app:privada:personas:seguro de auto:1 detalle | string       | App Page Visit |
            | level 1                  | seguro de auto                                | string       | App Page Visit |
            | level 2                  | 1 detalle                                     | string       | App Page Visit |
            | language                 | ES                                            | string       | App Page Visit |
            | page area                | privada                                       | string       | App Page Visit |
            | page intent              | transaccion                                   | string       | App Page Visit |
            | channel                  | online                                        | string       | App Page Visit |
            | page instance ID         | de                                            | string       | App Page Visit |
            | page info version        | appVersion                                    | regexp named | App Page Visit |
            | page segment             | personas                                      | string       | App Page Visit |
            | sysEnv                   | app                                           | string       | App Page Visit |
            | business unit            | BBVA Mexico                                   | string       | App Page Visit |
            | site app name            | App BBVA Mexico                               | string       | App Page Visit |
            | project name             | DIY E2E Sales                                 | string       | App Page Visit |
            | device mobile            | si                                            | string       | App Page Visit |
            | user userState           | logado                                        | string       | App Page Visit |
            | profile ID               | profileID                                     | regexp named | App Page Visit |
            | user segment global      | 003001                                        | string       | App Page Visit |
            | global application       | car insurance                                 | string       | App Page Visit |
            | application name         | seguro de auto last mile                      | string       | App Page Visit |
            | application type         | contratacion                                  | string       | App Page Visit |
            | application step         | 1 detalle                                     | string       | App Page Visit |
            | fulfillment model        | online                                        | string       | App Page Visit |
            | qualified visits         | true                                          | string       | App Page Visit |
            | product primary category | seguros                                       | string       | App Page Visit |
            | product name             | seguroesencial                                | string       | App Page Visit |

    @ANA_EVENT_CIB003
    @analytics
    @MX @vbank
    @web @ios @android
    @backend(test)
    @web-done
    Scenario: Car insurance - analytics event App Started
        Given a user with the following criteria
            | criteria            |
            | remote banking user |
        And the user accesses to "car insurance" from notifications
        And the analytics interceptor service is initiated
        When the user "open coverage list" of the insurance contract
        Then the analytics events contains the following variables
            | item                     | value                                         | type         | event       |
            | analytics                | analytics/glomo_base                          | json schema  | App Started |
            | page name                | app:privada:personas:seguro de auto:1 detalle | string       | App Started |
            | level 1                  | seguro de auto                                | string       | App Started |
            | level 2                  | 1 detalle                                     | string       | App Started |
            | language                 | ES                                            | string       | App Started |
            | page area                | privada                                       | string       | App Started |
            | page intent              | transaccion                                   | string       | App Started |
            | channel                  | online                                        | string       | App Started |
            | page instance ID         | de                                            | string       | App Started |
            | page info version        | appVersion                                    | regexp named | App Started |
            | page segment             | personas                                      | string       | App Started |
            | sysEnv                   | app                                           | string       | App Started |
            | business unit            | BBVA Mexico                                   | string       | App Started |
            | site app name            | App BBVA Mexico                               | string       | App Started |
            | project name             | DIY E2E Sales                                 | string       | App Started |
            | device mobile            | si                                            | string       | App Started |
            | user userState           | logado                                        | string       | App Started |
            | profile ID               | profileID                                     | regexp named | App Started |
            | user segment global      | 003001                                        | string       | App Started |
            | global application       | car insurance                                 | string       | App Started |
            | application name         | seguro de auto last mile                      | string       | App Started |
            | application type         | contratacion                                  | string       | App Started |
            | application step         | coberturas                                    | string       | App Started |
            | fulfillment model        | online                                        | string       | App Started |
            | product primary category | seguros                                       | string       | App Started |
            | product subtype          | seguro auto                                   | string       | App Started |
            | product name             | seguroesencial                                | string       | App Started |

    @ANA_EVENT_CIB004
    @analytics
    @MX @vbank
    @web @ios @android
    @backend(test)
    @web-done
    Scenario: Car insurance - analytics event App Started - Continue
        Given a user with the following criteria
            | criteria            |
            | remote banking user |
        And the user accesses to "car insurance" from notifications
        And the analytics interceptor service is initiated
        When the user accesses to the "payments methods" section of the insurance contract
        Then the analytics events contains the following variables
            | item                     | value                                         | type         | event       |
            | analytics                | analytics/glomo_base                          | json schema  | App Started |
            | page name                | app:privada:personas:seguro de auto:1 detalle | string       | App Started |
            | level 1                  | seguro de auto                                | string       | App Started |
            | level 2                  | 1 detalle                                     | string       | App Started |
            | language                 | ES                                            | string       | App Started |
            | page area                | privada                                       | string       | App Started |
            | page intent              | transaccion                                   | string       | App Started |
            | channel                  | online                                        | string       | App Started |
            | page instance ID         | de                                            | string       | App Started |
            | page info version        | appVersion                                    | regexp named | App Started |
            | page segment             | personas                                      | string       | App Started |
            | sysEnv                   | app                                           | string       | App Started |
            | business unit            | BBVA Mexico                                   | string       | App Started |
            | site app name            | App BBVA Mexico                               | string       | App Started |
            | project name             | DIY E2E Sales                                 | string       | App Started |
            | device mobile            | si                                            | string       | App Started |
            | user userState           | logado                                        | string       | App Started |
            | profile ID               | profileID                                     | regexp named | App Started |
            | user segment global      | 003001                                        | string       | App Started |
            | global application       | car insurance                                 | string       | App Started |
            | application name         | seguro de auto last mile                      | string       | App Started |
            | application type         | contratacion                                  | string       | App Started |
            | application step         | continuar                                     | string       | App Started |
            | fulfillment model        | online                                        | string       | App Started |
            | product primary category | seguros                                       | string       | App Started |
            | product subtype          | seguro auto                                   | string       | App Started |
            | product name             | seguroesencial                                | string       | App Started |

    @ANA_EVENT_CIB005
    @analytics
    @MX @vbank
    @web @ios @android
    @backend(test)
    @web-done
    Scenario: Car insurance - analytics event App Step 2
        Given a user with the following criteria
            | criteria            |
            | remote banking user |
        And the user accesses to "car insurance" from notifications
        And the analytics interceptor service is initiated
        When the user accesses to the "payments methods" section of the insurance contract
        Then the analytics events contains the following variables
            | item                     | value                                               | type         | event      |
            | analytics                | analytics/glomo_base                                | json schema  | App Step 2 |
            | page name                | app:privada:personas:seguro de auto:2 forma de pago | string       | App Step 2 |
            | level 1                  | seguro de auto                                      | string       | App Step 2 |
            | level 2                  | 2 forma de pago                                     | string       | App Step 2 |
            | language                 | ES                                                  | string       | App Step 2 |
            | page area                | privada                                             | string       | App Step 2 |
            | page intent              | transaccion                                         | string       | App Step 2 |
            | channel                  | online                                              | string       | App Step 2 |
            | page instance ID         | de                                                  | string       | App Step 2 |
            | page info version        | appVersion                                          | regexp named | App Step 2 |
            | page segment             | personas                                            | string       | App Step 2 |
            | sysEnv                   | app                                                 | string       | App Step 2 |
            | business unit            | BBVA Mexico                                         | string       | App Step 2 |
            | site app name            | App BBVA Mexico                                     | string       | App Step 2 |
            | project name             | DIY E2E Sales                                       | string       | App Step 2 |
            | device mobile            | si                                                  | string       | App Step 2 |
            | user userState           | logado                                              | string       | App Step 2 |
            | profile ID               | profileID                                           | regexp named | App Step 2 |
            | user segment global      | 003001                                              | string       | App Step 2 |
            | global application       | car insurance                                       | string       | App Step 2 |
            | application offer        | cupon 0 porciento                                   | string       | App Step 2 |
            | application name         | seguro de auto last mile                            | string       | App Step 2 |
            | application type         | contratacion                                        | string       | App Step 2 |
            | application step         | 2 forma de pago                                     | string       | App Step 2 |
            | fulfillment model        | online                                              | string       | App Step 2 |
            | product primary category | seguros                                             | string       | App Step 2 |
            | product name             | seguroesencial                                      | string       | App Step 2 |
            | product amount           | 18928.57                                            | number       | App Step 2 |
            | product currency         | MXN                                                 | string       | App Step 2 |
            | product payment amount   | 1502.71                                             | number       | App Step 2 |
            | product payment type     | mensual                                             | string       | App Step 2 |

    @ANA_EVENT_CIB006
    @analytics
    @MX @vbank
    @web @ios @android
    @backend(test)
    @web-done
    Scenario: Car insurance - analytics event App Step 3
        Given a user with the following criteria
            | criteria            |
            | remote banking user |
        And the user accesses to "car insurance" from notifications
        And the analytics interceptor service is initiated
        And the user accesses to the "payments methods" section of the insurance contract
        When the user accesses to the "terms and conditions" section of the insurance contract
        Then the analytics events contains the following variables
            | item                     | value                                                        | type         | event      |
            | analytics                | analytics/glomo_base                                         | json schema  | App Step 3 |
            | page name                | app:privada:personas:seguro de auto:3 terminos y condiciones | string       | App Step 3 |
            | level 1                  | seguro de auto                                               | string       | App Step 3 |
            | level 2                  | 3 terminos y condiciones                                     | string       | App Step 3 |
            | language                 | ES                                                           | string       | App Step 3 |
            | page area                | privada                                                      | string       | App Step 3 |
            | page intent              | transaccion                                                  | string       | App Step 3 |
            | channel                  | online                                                       | string       | App Step 3 |
            | page instance ID         | de                                                           | string       | App Step 3 |
            | page info version        | appVersion                                                   | regexp named | App Step 3 |
            | page segment             | personas                                                     | string       | App Step 3 |
            | sysEnv                   | app                                                          | string       | App Step 3 |
            | business unit            | BBVA Mexico                                                  | string       | App Step 3 |
            | site app name            | App BBVA Mexico                                              | string       | App Step 3 |
            | project name             | DIY E2E Sales                                                | string       | App Step 3 |
            | device mobile            | si                                                           | string       | App Step 3 |
            | user userState           | logado                                                       | string       | App Step 3 |
            | profile ID               | profileID                                                    | regexp named | App Step 3 |
            | user segment global      | 003001                                                       | string       | App Step 3 |
            | global application       | car insurance                                                | string       | App Step 3 |
            | application offer        | cupon 0 porciento                                            | string       | App Step 3 |
            | application name         | seguro de auto last mile                                     | string       | App Step 3 |
            | application type         | contratacion                                                 | string       | App Step 3 |
            | application step         | 3 terminos y condiciones                                     | string       | App Step 3 |
            | fulfillment model        | online                                                       | string       | App Step 3 |
            | product primary category | seguros                                                      | string       | App Step 3 |
            | product name             | seguroesencial                                               | string       | App Step 3 |
            | product amount           | 18928.57                                                     | number       | App Step 3 |
            | product currency         | MXN                                                          | string       | App Step 3 |
            | product payment amount   | 1502.71                                                      | number       | App Step 3 |
            | product payment type     | mensual                                                      | string       | App Step 3 |

    @ANA_EVENT_CIB007
    @analytics
    @MX @vbank
    @web @ios @android
    @backend(test)
    @web-done
    Scenario: Car insurance - analytics event App Step 4
        Given a user with the following criteria
            | criteria            |
            | remote banking user |
        And the user accesses to "car insurance" from notifications
        And the analytics interceptor service is initiated
        And the user accesses to the "payments methods" section of the insurance contract
        And the user accesses to the "terms and conditions" section of the insurance contract
        When the user "accept all terms and conditions" of the insurance contract
        Then the analytics events contains the following variables
            | item                     | value                                              | type         | event      |
            | analytics                | analytics/glomo_base                               | json schema  | App Step 4 |
            | page name                | app:privada:personas:seguro de auto:4 confirmacion | string       | App Step 4 |
            | level 1                  | seguro de auto                                     | string       | App Step 4 |
            | level 2                  | 4 confirmacion                                     | string       | App Step 4 |
            | language                 | ES                                                 | string       | App Step 4 |
            | page area                | privada                                            | string       | App Step 4 |
            | page intent              | transaccion                                        | string       | App Step 4 |
            | channel                  | online                                             | string       | App Step 4 |
            | page instance ID         | de                                                 | string       | App Step 4 |
            | page info version        | appVersion                                         | regexp named | App Step 4 |
            | page segment             | personas                                           | string       | App Step 4 |
            | sysEnv                   | app                                                | string       | App Step 4 |
            | business unit            | BBVA Mexico                                        | string       | App Step 4 |
            | site app name            | App BBVA Mexico                                    | string       | App Step 4 |
            | project name             | DIY E2E Sales                                      | string       | App Step 4 |
            | device mobile            | si                                                 | string       | App Step 4 |
            | user userState           | logado                                             | string       | App Step 4 |
            | profile ID               | profileID                                          | regexp named | App Step 4 |
            | user segment global      | 003001                                             | string       | App Step 4 |
            | global application       | car insurance                                      | string       | App Step 4 |
            | application offer        | cupon 0 porciento                                  | string       | App Step 4 |
            | application name         | seguro de auto last mile                           | string       | App Step 4 |
            | application type         | contratacion                                       | string       | App Step 4 |
            | application step         | 4 confirmacion                                     | string       | App Step 4 |
            | fulfillment model        | online                                             | string       | App Step 4 |
            | product primary category | seguros                                            | string       | App Step 4 |
            | product name             | seguroesencial                                     | string       | App Step 4 |
            | product amount           | 18928.57                                           | number       | App Step 4 |
            | product currency         | MXN                                                | string       | App Step 4 |
            | product payment amount   | 1502.71                                            | number       | App Step 4 |
            | product payment type     | mensual                                            | string       | App Step 4 |

    @ANA_EVENT_CIB008
    @analytics
    @MX @vbank
    @web @ios @android
    @backend(test)
    @web-done
    Scenario: Car insurance - analytics event App Step 5
        Given a user with the following criteria
            | criteria            |
            | remote banking user |
        And the user accesses to "car insurance" from notifications
        And the user accesses to the "payments methods" section of the insurance contract
        And the user accesses to the "terms and conditions" section of the insurance contract
        And the user "accept all terms and conditions" of the insurance contract
        And the analytics interceptor service is initiated
        When the user "completed" of the insurance contract
        Then the analytics events contains the following variables
            | item                     | value                                     | type         | event      |
            | analytics                | analytics/glomo_base                      | json schema  | App Step 5 |
            | page name                | app:privada:personas:seguro de auto:5 otp | string       | App Step 5 |
            | level 1                  | seguro de auto                            | string       | App Step 5 |
            | level 2                  | 5 otp                                     | string       | App Step 5 |
            | language                 | ES                                        | string       | App Step 5 |
            | page area                | privada                                   | string       | App Step 5 |
            | page intent              | transaccion                               | string       | App Step 5 |
            | channel                  | online                                    | string       | App Step 5 |
            | page instance ID         | de                                        | string       | App Step 5 |
            | page info version        | appVersion                                | regexp named | App Step 5 |
            | page segment             | personas                                  | string       | App Step 5 |
            | sysEnv                   | app                                       | string       | App Step 5 |
            | business unit            | BBVA Mexico                               | string       | App Step 5 |
            | site app name            | App BBVA Mexico                           | string       | App Step 5 |
            | project name             | DIY E2E Sales                             | string       | App Step 5 |
            | device mobile            | si                                        | string       | App Step 5 |
            | user userState           | logado                                    | string       | App Step 5 |
            | profile ID               | profileID                                 | regexp named | App Step 5 |
            | user segment global      | 003001                                    | string       | App Step 5 |
            | global application       | car insurance                             | string       | App Step 5 |
            | application offer        | cupon 0 porciento                         | string       | App Step 5 |
            | application name         | seguro de auto last mile                  | string       | App Step 5 |
            | application type         | contratacion                              | string       | App Step 5 |
            | application step         | 5 otp                                     | string       | App Step 5 |
            | fulfillment model        | online                                    | string       | App Step 5 |
            | custom fields            | firma:token                               | string       | App Step 5 |
            | product primary category | seguros                                   | string       | App Step 5 |
            | product name             | seguroesencial                            | string       | App Step 5 |
            | product amount           | 18928.57                                  | number       | App Step 5 |
            | product currency         | MXN                                       | string       | App Step 5 |
            | product payment amount   | 1502.71                                   | number       | App Step 5 |
            | product payment type     | mensual                                   | string       | App Step 5 |

    @ANA_EVENT_CIB009
    @analytics
    @MX @vbank
    @web @ios @android
    @backend(test)
    @web-done
    Scenario: Car insurance - analytics event App Completed
        Given a user with the following criteria
            | criteria            |
            | remote banking user |
        And the user accesses to "car insurance" from notifications
        And the user accesses to the "payments methods" section of the insurance contract
        And the user accesses to the "terms and conditions" section of the insurance contract
        And the user "accept all terms and conditions" of the insurance contract
        And the analytics interceptor service is initiated
        When the user "completed" of the insurance contract
        Then the analytics events contains the following variables
            | item                         | value                                              | type         | event         |
            | analytics                    | analytics/glomo_base                               | json schema  | App Completed |
            | page name                    | app:privada:personas:seguro de auto:pagina exitosa | string       | App Completed |
            | level 1                      | seguro de auto                                     | string       | App Completed |
            | level 2                      | pagina exitosa                                     | string       | App Completed |
            | language                     | ES                                                 | string       | App Completed |
            | page area                    | privada                                            | string       | App Completed |
            | page intent                  | transaccion                                        | string       | App Completed |
            | channel                      | online                                             | string       | App Completed |
            | page instance ID             | de                                                 | string       | App Completed |
            | page info version            | appVersion                                         | regexp named | App Completed |
            | page segment                 | personas                                           | string       | App Completed |
            | sysEnv                       | app                                                | string       | App Completed |
            | business unit                | BBVA Mexico                                        | string       | App Completed |
            | site app name                | App BBVA Mexico                                    | string       | App Completed |
            | project name                 | DIY E2E Sales                                      | string       | App Completed |
            | device mobile                | si                                                 | string       | App Completed |
            | user userState               | logado                                             | string       | App Completed |
            | profile ID                   | profileID                                          | regexp named | App Completed |
            | user segment global          | 003001                                             | string       | App Completed |
            | global application           | car insurance                                      | string       | App Completed |
            | application offer            | cupon 0 porciento                                  | string       | App Completed |
            | application name             | seguro de auto last mile                           | string       | App Completed |
            | application type             | contratacion                                       | string       | App Completed |
            | application step             | pagina exitosa                                     | string       | App Completed |
            | application state            | contratado                                         | string       | App Completed |
            | application operation number | 000000057                                          | string       | App Completed |
            | fulfillment model            | online                                             | string       | App Completed |
            | custom fields                | firma:token                                        | string       | App Completed |
            | product primary category     | seguros                                            | string       | App Completed |
            | product name                 | seguroesencial                                     | string       | App Completed |
            | product amount               | 18928.57                                           | number       | App Completed |
            | product currency             | MXN                                                | string       | App Completed |
            | product payment amount       | 1502.71                                            | number       | App Completed |
            | product payment type         | mensual                                            | string       | App Completed |
            | product state                | contratado                                         | string       | App Completed |

    @ANA_CIB010
    @analytics
    @MX @vbank
    @web @ios @android
    @backend(test)
    @web-done
    Scenario: Error Insurance Contracted - analytics event Page View
        Given a user with the following criteria
            | criteria            |
            | remote banking user |
        When the user accesses to "car insurance" from notifications
        Then the device contains the following variables
            | item                | value                                                       | type         |
            | analytics           | analytics/glomo_base                                        | json schema  |
            | version DL          | 20250414_5.0                                                | string       |
            | page name           | app:privada:personas:seguro de auto:error seguro contratado | string       |
            | level 1             | seguro de auto                                              | string       |
            | level 2             | error seguro contratado                                     | string       |
            | error page          | error seguro contratado                                     | string       |
            | language            | ES                                                          | string       |
            | page area           | privada                                                     | string       |
            | page intent         | transaccion                                                 | string       |
            | channel             | online                                                      | string       |
            | page instance ID    | de                                                          | string       |
            | page info version   | appVersion                                                  | regexp named |
            | page segment        | personas                                                    | string       |
            | sysEnv              | app                                                         | string       |
            | business unit       | BBVA Mexico                                                 | string       |
            | site app name       | App BBVA Mexico                                             | string       |
            | project name        | DIY E2E Sales                                               | string       |
            | device mobile       | si                                                          | string       |
            | user userState      | logado                                                      | string       |
            | user segment global | 003001                                                      | string       |
            | profile ID          | profileID                                                   | regexp named |
            | user age            | age                                                         | regexp named |
            | user gender         | gender                                                      | regexp named |

    @ANA_CIB011
    @analytics
    @MX @vbank
    @web @ios @android
    @backend(test)
    @web-done
    Scenario: Error Quote Expired - analytics event Page View
        Given a user with the following criteria
            | criteria            |
            | remote banking user |
        When the user accesses to "car insurance" from notifications
        Then the device contains the following variables
            | item                | value                                                         | type         |
            | analytics           | analytics/glomo_base                                          | json schema  |
            | version DL          | 20250414_5.0                                                  | string       |
            | page name           | app:privada:personas:seguro de auto:error cotizacion expirada | string       |
            | level 1             | seguro de auto                                                | string       |
            | level 2             | error cotizacion expirada                                     | string       |
            | error page          | error cotizacion expirada                                     | string       |
            | language            | ES                                                            | string       |
            | page area           | privada                                                       | string       |
            | page intent         | transaccion                                                   | string       |
            | channel             | online                                                        | string       |
            | page instance ID    | de                                                            | string       |
            | page info version   | appVersion                                                    | regexp named |
            | page segment        | personas                                                      | string       |
            | sysEnv              | app                                                           | string       |
            | business unit       | BBVA Mexico                                                   | string       |
            | site app name       | App BBVA Mexico                                               | string       |
            | project name        | DIY E2E Sales                                                 | string       |
            | device mobile       | si                                                            | string       |
            | user userState      | logado                                                        | string       |
            | user segment global | 003001                                                        | string       |
            | profile ID          | profileID                                                     | regexp named |
            | user age            | age                                                           | regexp named |
            | user gender         | gender                                                        | regexp named |

    @ANA_EVENT_CIB012
    @analytics
    @MX @vbank
    @web @ios @android
    @backend(test)
    @web-done
    Scenario: Insufficient Funds Error - analytics event Site Error
        Given a user with the following criteria
            | criteria            |
            | remote banking user |
        And the user accesses to "car insurance" from notifications
        And the analytics interceptor service is initiated
        When the user exit from error modal
        Then the analytics events contains the following variables:
            | item                | value                                               | type         | event      |
            | analytics           | analytics/glomo_base                                | json schema  | Site Error |
            | version DL          | 20250414_5.0                                        | string       | Site Error |
            | page name           | app:privada:personas:seguro de auto:2 forma de pago | string       | Site Error |
            | level 1             | seguro de auto                                      | string       | Site Error |
            | level 2             | 2 forma de pago                                     | string       | Site Error |
            | site error          | error fondos insuficientes                          | string       | Site Error |
            | language            | ES                                                  | string       | Site Error |
            | page area           | privada                                             | string       | Site Error |
            | page intent         | transaccion                                         | string       | Site Error |
            | channel             | online                                              | string       | Site Error |
            | page instance ID    | de                                                  | string       | Site Error |
            | page info version   | appVersion                                          | regexp named | Site Error |
            | page segment        | personas                                            | string       | Site Error |
            | sysEnv              | app                                                 | string       | Site Error |
            | business unit       | BBVA Mexico                                         | string       | Site Error |
            | site app name       | App BBVA Mexico                                     | string       | Site Error |
            | project name        | DIY E2E Sales                                       | string       | Site Error |
            | device mobile       | si                                                  | string       | Site Error |
            | user userState      | logado                                              | string       | Site Error |
            | user segment global | 003001                                              | string       | Site Error |
            | profile ID          | profileID                                           | regexp named | Site Error |
            | user age            | age                                                 | regexp named | Site Error |
            | user gender         | gender                                              | regexp named | Site Error |

    @ANA_CIB013
    @analytics
    @MX @vbank
    @web @ios @android
    @backend(test)
    @web-done
    Scenario: Service Error - analytics event Page View
        Given a user with the following criteria
            | criteria            |
            | remote banking user |
        And the user accesses to "car insurance" from notifications
        And the user accesses to the "payments methods" section of the insurance contract
        And the user accesses to the "terms and conditions" section of the insurance contract
        And the user "accept all terms and conditions" of the insurance contract
        When the user completed of summary section
        Then the device contains the following variables
            | item                | value                                              | type         |
            | analytics           | analytics/glomo_base                               | json schema  |
            | version DL          | 20250414_5.0                                       | string       |
            | page name           | app:privada:personas:seguro de auto:error servicio | string       |
            | level 1             | seguro de auto                                     | string       |
            | level 2             | error servicio                                     | string       |
            | error page          | error servicio                                     | string       |
            | language            | ES                                                 | string       |
            | page area           | privada                                            | string       |
            | page intent         | transaccion                                        | string       |
            | channel             | online                                             | string       |
            | page instance ID    | de                                                 | string       |
            | page info version   | appVersion                                         | regexp named |
            | page segment        | personas                                           | string       |
            | sysEnv              | app                                                | string       |
            | business unit       | BBVA Mexico                                        | string       |
            | site app name       | App BBVA Mexico                                    | string       |
            | project name        | DIY E2E Sales                                      | string       |
            | device mobile       | si                                                 | string       |
            | user userState      | logado                                             | string       |
            | user segment global | 003001                                             | string       |
            | profile ID          | profileID                                          | regexp named |
            | user age            | age                                                | regexp named |
            | user gender         | gender                                             | regexp named |

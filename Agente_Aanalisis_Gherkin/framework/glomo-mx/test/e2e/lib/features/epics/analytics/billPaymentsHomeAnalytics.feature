@billPaymentsHomeAnalytics
Feature: Analytics - Bill Payments Home

    @ANA_EVENT_BPH001
    @MX
    @vbank
    @analytics
    @backend(test)
    @ios @android @web
    @web-done @no-spherica
    Scenario: Pay Service or Tax - App Page Visit
        Given a user with the following criteria
            | criteria           |
            | bill payments home |
        And the user accesses bill payments home from operations and "accepts" the onboarding
        And the analytics interceptor service is initiated
        And the user follows the onboarding
        When the user follows the tooltip
        Then the analytics events contains the following variables:
            | item                    | value                                          | type             | event     |
            | analytics               | analytics/glomo_base                           | json schema      | Page View |
            | version DL              | 20250414_5.0                                   | string           | Page View |
            | page name               | app:privada:personas:pagar servicio o impuesto | string           | Page View |
            | level 1                 | pagar servicio o impuesto                      | string           | Page View |
            | language                | ES                                             | string           | Page View |
            | page area               | privada                                        | string           | Page View |
            | page intent             | transaccion                                    | string           | Page View |
            | channel                 | online                                         | string           | Page View |
            | page instance ID        | de                                             | string           | Page View |
            | page info version       | appVersion                                     | regexp named     | Page View |
            | page segment            | personas                                       | string           | Page View |
            | sysEnv                  | app                                            | string           | Page View |
            | business unit           | BBVA Mexico                                    | string           | Page View |
            | site app name           | App BBVA Mexico                                | string           | Page View |
            | project name            | Glomo                                          | string           | Page View |
            | device mobile           | si                                             | string           | Page View |
            | user userState          | logado                                         | string           | Page View |
            | user segment global     | 003001                                         | string           | Page View |
            | profile ID              | profileID                                      | regexp named     | Page View |
            | user age                | age                                            | regexp named     | Page View |
            | user gender             | gender                                         | regexp named     | Page View |
            | internal campaign       |                                                | empty array      | Page View |
            | optimization attributes |                                                | empty array      | Page View |
            | application             |                                                | empty str object | Page View |
            | products attributes     |                                                | empty array      | Page View |

    @ANA_EVENT_BPH002
    @MX
    @vbank
    @analytics
    @backend(test)
    @ios @android @web
    @web-done @no-spherica
    Scenario: Manual Payment - App Page Visit
        Given a user with the following criteria
            | criteria           |
            | bill payments home |
        And the user accesses bill payments home from operations and "follows" the onboarding
        And the analytics interceptor service is initiated
        When the user selects the manual payment option
        Then the analytics events contains the following variables:
            | item                    | value                                                      | type             | event     |
            | analytics               | analytics/glomo_base                                       | json schema      | Page View |
            | version DL              | 20250414_5.0                                               | string           | Page View |
            | page name               | app:privada:personas:pagar servicio o impuesto:pago manual | string           | Page View |
            | level 1                 | pagar servicio o impuesto                                  | string           | Page View |
            | level 2                 | pago manual                                                | string           | Page View |
            | language                | ES                                                         | string           | Page View |
            | page area               | privada                                                    | string           | Page View |
            | page intent             | transaccion                                                | string           | Page View |
            | channel                 | online                                                     | string           | Page View |
            | page instance ID        | de                                                         | string           | Page View |
            | page info version       | appVersion                                                 | regexp named     | Page View |
            | page segment            | personas                                                   | string           | Page View |
            | sysEnv                  | app                                                        | string           | Page View |
            | business unit           | BBVA Mexico                                                | string           | Page View |
            | site app name           | App BBVA Mexico                                            | string           | Page View |
            | project name            | Glomo                                                      | string           | Page View |
            | device mobile           | si                                                         | string           | Page View |
            | user userState          | logado                                                     | string           | Page View |
            | user segment global     | 003001                                                     | string           | Page View |
            | profile ID              | profileID                                                  | regexp named     | Page View |
            | user age                | age                                                        | regexp named     | Page View |
            | user gender             | gender                                                     | regexp named     | Page View |
            | internal campaign       |                                                            | empty array      | Page View |
            | optimization attributes |                                                            | empty array      | Page View |
            | application             |                                                            | empty str object | Page View |
            | products attributes     |                                                            | empty array      | Page View |

    @ANA_EVENT_BPH003
    @MX
    @vbank
    @analytics
    @backend(test)
    @ios @android @web
    @web-done @no-spherica
    Scenario: Service Detail - App Page Visit
        Given a user with the following criteria
            | criteria           |
            | bill payments home |
        And the user accesses bill payments home from operations and "follows" the onboarding
        And the user selects the manual payment option
        And the analytics interceptor service is initiated
        When the user selects the service detail option
        Then the analytics events contains the following variables:
            | item                    | value                                                           | type             | event     |
            | analytics               | analytics/glomo_base                                            | json schema      | Page View |
            | version DL              | 20250414_5.0                                                    | string           | Page View |
            | page name               | app:privada:personas:pagar servicio o impuesto:detalle servicio | string           | Page View |
            | level 1                 | pagar servicio o impuesto                                       | string           | Page View |
            | level 2                 | detalle servicio                                                | string           | Page View |
            | language                | ES                                                              | string           | Page View |
            | page area               | privada                                                         | string           | Page View |
            | page intent             | transaccion                                                     | string           | Page View |
            | channel                 | online                                                          | string           | Page View |
            | page instance ID        | de                                                              | string           | Page View |
            | page info version       | appVersion                                                      | regexp named     | Page View |
            | page segment            | personas                                                        | string           | Page View |
            | sysEnv                  | app                                                             | string           | Page View |
            | business unit           | BBVA Mexico                                                     | string           | Page View |
            | site app name           | App BBVA Mexico                                                 | string           | Page View |
            | project name            | Glomo                                                           | string           | Page View |
            | device mobile           | si                                                              | string           | Page View |
            | user userState          | logado                                                          | string           | Page View |
            | user segment global     | 003001                                                          | string           | Page View |
            | profile ID              | profileID                                                       | regexp named     | Page View |
            | user age                | age                                                             | regexp named     | Page View |
            | user gender             | gender                                                          | regexp named     | Page View |
            | internal campaign       |                                                                 | empty array      | Page View |
            | optimization attributes |                                                                 | empty array      | Page View |
            | application             |                                                                 | empty str object | Page View |
            | products attributes     |                                                                 | empty array      | Page View |

    @ANA_EVENT_BPH004
    @MX
    @vbank
    @analytics
    @backend(test)
    @ios @android @web
    @web-done @no-spherica
    Scenario: Scheduled Payment - App Page Visit
        Given a user with the following criteria
            | criteria           |
            | bill payments home |
        And the user accesses bill payments home from operations and "follows" the onboarding
        And the analytics interceptor service is initiated
        When the user selects the scheduled payment "summary" option
        Then the analytics events contains the following variables:
            | item                    | value                                                          | type             | event     |
            | analytics               | analytics/glomo_base                                           | json schema      | Page View |
            | version DL              | 20250414_5.0                                                   | string           | Page View |
            | page name               | app:privada:personas:pagar servicio o impuesto:pago programado | string           | Page View |
            | level 1                 | pagar servicio o impuesto                                      | string           | Page View |
            | level 2                 | pago programado                                                | string           | Page View |
            | language                | ES                                                             | string           | Page View |
            | page area               | privada                                                        | string           | Page View |
            | page intent             | transaccion                                                    | string           | Page View |
            | channel                 | online                                                         | string           | Page View |
            | page instance ID        | de                                                             | string           | Page View |
            | page info version       | appVersion                                                     | regexp named     | Page View |
            | page segment            | personas                                                       | string           | Page View |
            | sysEnv                  | app                                                            | string           | Page View |
            | business unit           | BBVA Mexico                                                    | string           | Page View |
            | site app name           | App BBVA Mexico                                                | string           | Page View |
            | project name            | Glomo                                                          | string           | Page View |
            | device mobile           | si                                                             | string           | Page View |
            | user userState          | logado                                                         | string           | Page View |
            | user segment global     | 003001                                                         | string           | Page View |
            | profile ID              | profileID                                                      | regexp named     | Page View |
            | user age                | age                                                            | regexp named     | Page View |
            | user gender             | gender                                                         | regexp named     | Page View |
            | internal campaign       |                                                                | empty array      | Page View |
            | optimization attributes |                                                                | empty array      | Page View |
            | application             |                                                                | empty str object | Page View |
            | products attributes     |                                                                | empty array      | Page View |

    @ANA_EVENT_BPH005
    @MX
    @vbank
    @analytics
    @backend(test)
    @ios @android @web
    @web-done @no-spherica
    Scenario: Scheduled Payment Detail - App Page Visit
        Given a user with the following criteria
            | criteria           |
            | bill payments home |
        And the user accesses bill payments home from operations and "follows" the onboarding
        And the user selects the scheduled payment "detail" option
        And the analytics interceptor service is initiated
        When the user selects the programming detail option
        Then the analytics events contains the following variables:
            | item                    | value                                                                  | type             | event     |
            | analytics               | analytics/glomo_base                                                   | json schema      | Page View |
            | version DL              | 20250414_5.0                                                           | string           | Page View |
            | page name               | app:privada:personas:pagar servicio o impuesto:detalle pago programado | string           | Page View |
            | level 1                 | pagar servicio o impuesto                                              | string           | Page View |
            | level 2                 | detalle pago programado                                                | string           | Page View |
            | language                | ES                                                                     | string           | Page View |
            | page area               | privada                                                                | string           | Page View |
            | page intent             | transaccion                                                            | string           | Page View |
            | channel                 | online                                                                 | string           | Page View |
            | page instance ID        | de                                                                     | string           | Page View |
            | page info version       | appVersion                                                             | regexp named     | Page View |
            | page segment            | personas                                                               | string           | Page View |
            | sysEnv                  | app                                                                    | string           | Page View |
            | business unit           | BBVA Mexico                                                            | string           | Page View |
            | site app name           | App BBVA Mexico                                                        | string           | Page View |
            | project name            | Glomo                                                                  | string           | Page View |
            | device mobile           | si                                                                     | string           | Page View |
            | user userState          | logado                                                                 | string           | Page View |
            | user segment global     | 003001                                                                 | string           | Page View |
            | profile ID              | profileID                                                              | regexp named     | Page View |
            | user age                | age                                                                    | regexp named     | Page View |
            | user gender             | gender                                                                 | regexp named     | Page View |
            | internal campaign       |                                                                        | empty array      | Page View |
            | optimization attributes |                                                                        | empty array      | Page View |
            | application             |                                                                        | empty str object | Page View |
            | products attributes     |                                                                        | empty array      | Page View |

    @ANA_EVENT_BPH006
    @MX
    @vbank
    @analytics
    @backend(test)
    @ios @android @web
    @web-done @no-spherica
    Scenario: Delete Service - App Page Visit
        Given a user with the following criteria
            | criteria           |
            | bill payments home |
        And the user accesses bill payments home from operations and "follows" the onboarding
        And the user selects the manual payment detail option for a service "manual"
        And the analytics interceptor service is initiated
        When the user selects the delete service option
        Then the analytics events contains the following variables:
            | item                    | value                                                            | type             | event     |
            | analytics               | analytics/glomo_base                                             | json schema      | Page View |
            | version DL              | 20250414_5.0                                                     | string           | Page View |
            | page name               | app:privada:personas:pagar servicio o impuesto:eliminar servicio | string           | Page View |
            | level 1                 | pagar servicio o impuesto                                        | string           | Page View |
            | level 2                 | eliminar servicio                                                | string           | Page View |
            | language                | ES                                                               | string           | Page View |
            | page area               | privada                                                          | string           | Page View |
            | page intent             | transaccion                                                      | string           | Page View |
            | channel                 | online                                                           | string           | Page View |
            | page instance ID        | de                                                               | string           | Page View |
            | page info version       | appVersion                                                       | regexp named     | Page View |
            | page segment            | personas                                                         | string           | Page View |
            | sysEnv                  | app                                                              | string           | Page View |
            | business unit           | BBVA Mexico                                                      | string           | Page View |
            | site app name           | App BBVA Mexico                                                  | string           | Page View |
            | project name            | Glomo                                                            | string           | Page View |
            | device mobile           | si                                                               | string           | Page View |
            | user userState          | logado                                                           | string           | Page View |
            | user segment global     | 003001                                                           | string           | Page View |
            | profile ID              | profileID                                                        | regexp named     | Page View |
            | user age                | age                                                              | regexp named     | Page View |
            | user gender             | gender                                                           | regexp named     | Page View |
            | internal campaign       |                                                                  | empty array      | Page View |
            | optimization attributes |                                                                  | empty array      | Page View |
            | application             |                                                                  | empty str object | Page View |
            | products attributes     |                                                                  | empty array      | Page View |

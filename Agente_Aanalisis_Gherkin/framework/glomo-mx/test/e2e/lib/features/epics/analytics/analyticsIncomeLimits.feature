@incomeLimitsAnalytics
Feature: Analytics - Income Limits

    @ANA_INL001
    @analytics
    @ios @android @web @web-done
    @MX @backend(test) @vbank
    Scenario: Cash Deposit - Page View
        Given a user with the following criteria
            | criteria                    |
            | with documents and activity |
        And the user accesses to dashboard
        And the user accesses to "configuration" item located in the sidebar
        When the user accesses to income limits option in configure products
        Then the device contains the following variables
            | item                    | value                                      | type             |
            | analytics               | analytics/glomo_base                       | json schema      |
            | page name               | app:privada:personas:depositos en efectivo | string           |
            | level 1                 | depositos en efectivo                      | string           |
            | language                | ES                                         | string           |
            | page area               | privada                                    | string           |
            | page intent             | informacion                                | string           |
            | channel                 | online                                     | string           |
            | page instance ID        | de                                         | string           |
            | page info version       | appVersion                                 | regexp named     |
            | page segment            | personas                                   | string           |
            | sysEnv                  | app                                        | string           |
            | business unit           | BBVA Mexico                                | string           |
            | site app name           | App BBVA Mexico                            | string           |
            | project name            | Glomo                                      | string           |
            | device mobile           | si                                         | string           |
            | user userState          | logado                                     | string           |
            | user segment global     | 003001                                     | string           |
            | profile ID              | profileID                                  | regexp named     |
            | user age                | age                                        | regexp named     |
            | user gender             | gender                                     | regexp named     |

    @ANA_INL002
    @analytics
    @ios @android @web @web-done
    @MX @backend(test) @vbank
    Scenario: Cash deposit information - Page View
        Given a user with the following criteria
            | criteria                       |
            | with documents and activity    |
        And the user accesses to dashboard
        And the user accesses to "configuration" item located in the sidebar
        And the user accesses to income limits option in configure products
        When the user accesses the information screen
        Then the device contains the following variables
            | item                    | value                                                                        | type             |
            | analytics               | analytics/glomo_base                                                         | json schema      |
            | page name               | app:privada:personas:depositos en efectivo:informacion depositos en efectivo | string           |
            | level 1                 | depositos en efectivo                                                        | string           |
            | level 2                 | informacion depositos en efectivo                                            | string           |
            | language                | ES                                                                           | string           |
            | page area               | privada                                                                      | string           |
            | page intent             | informacion                                                                  | string           |
            | channel                 | online                                                                       | string           |
            | page instance ID        | de                                                                           | string           |
            | page info version       | appVersion                                                                   | regexp named     |
            | page segment            | personas                                                                     | string           |
            | sysEnv                  | app                                                                          | string           |
            | business unit           | BBVA Mexico                                                                  | string           |
            | site app name           | App BBVA Mexico                                                              | string           |
            | project name            | Glomo                                                                        | string           |
            | device mobile           | si                                                                           | string           |
            | user userState          | logado                                                                       | string           |
            | user segment global     | 003001                                                                       | string           |
            | profile ID              | profileID                                                                    | regexp named     |
            | user age                | age                                                                          | regexp named     |
            | user gender             | gender                                                                       | regexp named     |

    @ANA_INL003
    @analytics
    @ios @android @web @web-done
    @MX @backend(test) @vbank
    Scenario: Cash deposit information - Page View 2
        Given a user with the following criteria
            | criteria                    |
            | with documents and activity |
        And the user accesses to dashboard
        And the user accesses to "configuration" item located in the sidebar
        And the user accesses to income limits option in configure products
        When the user accesses the share economic activity step
        Then the device contains the following variables
            | item                    | value                                                          | type             |
            | analytics               | analytics/glomo_base                                           | json schema      |
            | page name               | app:privada:personas:depositos en efectivo:actividad economica | string           |
            | level 1                 | depositos en efectivo                                          | string           |
            | level 2                 | actividad economica                                            | string           |
            | language                | ES                                                             | string           |
            | page area               | privada                                                        | string           |
            | page intent             | informacion                                                    | string           |
            | channel                 | online                                                         | string           |
            | page instance ID        | de                                                             | string           |
            | page info version       | appVersion                                                     | regexp named     |
            | page segment            | personas                                                       | string           |
            | sysEnv                  | app                                                            | string           |
            | business unit           | BBVA Mexico                                                    | string           |
            | site app name           | App BBVA Mexico                                                | string           |
            | project name            | Glomo                                                          | string           |
            | device mobile           | si                                                             | string           |
            | user userState          | logado                                                         | string           |
            | user segment global     | 003001                                                         | string           |
            | profile ID              | profileID                                                      | regexp named     |
            | user age                | age                                                            | regexp named     |
            | user gender             | gender                                                         | regexp named     |

    @ANA_INL004
    @analytics
    @ios @android @web @web-done
    @MX @backend(test) @vbank
    Scenario: Proof of income - Page View
        Given a user with the following criteria
            | criteria                    |
            | with documents and activity |
        And the user accesses to dashboard
        And the user accesses to "configuration" item located in the sidebar
        And the user accesses to income limits option in configure products
        When the user accesses to proof of income step
        Then the device contains the following variables
            | item                    | value                                                                    | type             |
            | analytics               | analytics/glomo_base                                                     | json schema      |
            | page name               | app:privada:personas:depositos en efectivo:comprobante de ingresos pfae  | string           |
            | level 1                 | depositos en efectivo                                                    | string           |
            | level 2                 | comprobante de ingresos pfae                                             | string           |
            | language                | ES                                                                       | string           |
            | page area               | privada                                                                  | string           |
            | page intent             | informacion                                                              | string           |
            | channel                 | online                                                                   | string           |
            | page instance ID        | de                                                                       | string           |
            | page info version       | appVersion                                                               | regexp named     |
            | page segment            | personas                                                                 | string           |
            | sysEnv                  | app                                                                      | string           |
            | business unit           | BBVA Mexico                                                              | string           |
            | site app name           | App BBVA Mexico                                                          | string           |
            | project name            | Glomo                                                                    | string           |
            | device mobile           | si                                                                       | string           |
            | user userState          | logado                                                                   | string           |
            | user segment global     | 003001                                                                   | string           |
            | profile ID              | profileID                                                                | regexp named     |
            | user age                | age                                                                      | regexp named     |
            | user gender             | gender                                                                   | regexp named     |

    @ANA_INL005
    @analytics
    @ios @android @web @web-done
    @MX @backend(test) @vbank
    Scenario Outline: Selected voucher information - Page View - <level>
        Given a user with the following criteria
            | criteria                    |
            | with documents and activity |
        And the user accesses to dashboard
        And the user accesses to "configuration" item located in the sidebar
        And the user accesses to income limits option in configure products
        When the user enters an "<document>" as proof of income step
        Then the device contains the following variables
            | item                    | value                                              | type             |
            | analytics               | analytics/glomo_base                               | json schema      |
            | page name               | app:privada:personas:depositos en efectivo:<level> | string           |
            | level 1                 | depositos en efectivo                              | string           |
            | level 2                 | <level>                                            | string           |
            | language                | ES                                                 | string           |
            | page area               | privada                                            | string           |
            | page intent             | informacion                                        | string           |
            | channel                 | online                                             | string           |
            | page instance ID        | de                                                 | string           |
            | page info version       | appVersion                                         | regexp named     |
            | page segment            | personas                                           | string           |
            | sysEnv                  | app                                                | string           |
            | business unit           | BBVA Mexico                                        | string           |
            | site app name           | App BBVA Mexico                                    | string           |
            | project name            | Glomo                                              | string           |
            | device mobile           | si                                                 | string           |
            | user userState          | logado                                             | string           |
            | user segment global     | 003001                                             | string           |
            | profile ID              | profileID                                          | regexp named     |
            | user age                | age                                                | regexp named     |
            | user gender             | gender                                             | regexp named     |
        Examples:
            | level                           | document               |
            | comprobante declaracion mensual | modal monthly statement|
            | comprobante declaracion anual   | modal annual statement |
            | comprobante contrato            | modal contract         |
            | comprobante convenio            | modal agreement        |
            | comprobante facturas            | modal invoice          |

    @ANA_INL006
    @analytics
    @ios @android @web @web-done
    @MX @backend(test) @vbank
    Scenario: confirm your information - Page View
        Given a user with the following criteria
            | criteria                    |
            | with documents and activity |
        And the user accesses to dashboard
        And the user accesses to "configuration" item located in the sidebar
        And the user accesses to income limits option in configure products
        When the user accesses to agreement step
        Then the device contains the following variables
            | item                    | value                                                   | type             |
            | analytics               | analytics/glomo_base                                    | json schema      |
            | page name               | app:privada:personas:depositos en efectivo:declaracion  | string           |
            | level 1                 | depositos en efectivo                                   | string           |
            | level 2                 | declaracion                                             | string           |
            | language                | ES                                                      | string           |
            | page area               | privada                                                 | string           |
            | page intent             | informacion                                             | string           |
            | channel                 | online                                                  | string           |
            | page instance ID        | de                                                      | string           |
            | page info version       | appVersion                                              | regexp named     |
            | page segment            | personas                                                | string           |
            | sysEnv                  | app                                                     | string           |
            | business unit           | BBVA Mexico                                             | string           |
            | site app name           | App BBVA Mexico                                         | string           |
            | project name            | Glomo                                                   | string           |
            | device mobile           | si                                                      | string           |
            | user userState          | logado                                                  | string           |
            | user segment global     | 003001                                                  | string           |
            | profile ID              | profileID                                               | regexp named     |
            | user age                | age                                                     | regexp named     |
            | user gender             | gender                                                  | regexp named     |

    @ANA_INL007
    @analytics
    @ios @android @web @web-done
    @MX @backend(test) @vbank
    Scenario: summary - Page View
        Given a user with the following criteria
            | criteria                    |
            | with documents and activity |
        And the user accesses to dashboard
        And the user accesses to "configuration" item located in the sidebar
        And the user accesses to income limits option in configure products
        When the user gets to the confirm summary screen with all steps filled
        Then the device contains the following variables
            | item                    | value                                               | type             |
            | analytics               | analytics/glomo_base                                | json schema      |
            | page name               | app:privada:personas:depositos en efectivo:resumen  | string           |
            | level 1                 | depositos en efectivo                               | string           |
            | level 2                 | resumen                                             | string           |
            | language                | ES                                                  | string           |
            | page area               | privada                                             | string           |
            | page intent             | informacion                                         | string           |
            | channel                 | online                                              | string           |
            | page instance ID        | de                                                  | string           |
            | page info version       | appVersion                                          | regexp named     |
            | page segment            | personas                                            | string           |
            | sysEnv                  | app                                                 | string           |
            | business unit           | BBVA Mexico                                         | string           |
            | site app name           | App BBVA Mexico                                     | string           |
            | project name            | Glomo                                               | string           |
            | device mobile           | si                                                  | string           |
            | user userState          | logado                                              | string           |
            | user segment global     | 003001                                              | string           |
            | profile ID              | profileID                                           | regexp named     |
            | user age                | age                                                 | regexp named     |
            | user gender             | gender                                              | regexp named     |

    @ANA_INL008
    @analytics
    @ios @android @web @web-done
    @MX @backend(test) @vbank
    Scenario: OTP - Page View
        Given a user with the following criteria
            | criteria                    |
            | with documents and activity |
        And the user accesses to dashboard
        And the user accesses to "configuration" item located in the sidebar
        And the user accesses to income limits option in configure products
        When the user confirms the information and gets to the success screen
        Then the device contains the following variables
            | item                    | value                                           | type             |
            | analytics               | analytics/glomo_base                            | json schema      |
            | page name               | app:privada:personas:depositos en efectivo:otp  | string           |
            | level 1                 | depositos en efectivo                           | string           |
            | level 2                 | otp                                             | string           |
            | language                | ES                                              | string           |
            | page area               | privada                                         | string           |
            | page intent             | informacion                                     | string           |
            | channel                 | online                                          | string           |
            | page instance ID        | de                                              | string           |
            | page info version       | appVersion                                      | regexp named     |
            | page segment            | personas                                        | string           |
            | sysEnv                  | app                                             | string           |
            | business unit           | BBVA Mexico                                     | string           |
            | site app name           | App BBVA Mexico                                 | string           |
            | project name            | Glomo                                           | string           |
            | device mobile           | si                                              | string           |
            | user userState          | logado                                          | string           |
            | user segment global     | 003001                                          | string           |
            | profile ID              | profileID                                       | regexp named     |
            | user age                | age                                             | regexp named     |
            | user gender             | gender                                          | regexp named     |
            | custom fields           | firma:token                                     | string           |

    @ANA_INL009
    @analytics
    @ios @android @web @web-done
    @MX @backend(test) @vbank
    Scenario: Screen of sent information - Page View
        Given a user with the following criteria
            | criteria               |
            | with economic activity |
        And the user accesses to dashboard
        And the user accesses to "configuration" item located in the sidebar
        And the user accesses to income limits option in configure products
        When the user confirms the information and gets to the success screen
        Then the device contains the following variables
            | item                    | value                                                           | type             |
            | analytics               | analytics/glomo_base                                            | json schema      |
            | page name               | app:privada:personas:depositos en efectivo:informacion enviada  | string           |
            | level 1                 | depositos en efectivo                                           | string           |
            | level 2                 | informacion enviada                                             | string           |
            | language                | ES                                                              | string           |
            | page area               | privada                                                         | string           |
            | page intent             | informacion                                                     | string           |
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
            | user segment global     | 003001                                                          | string           |
            | profile ID              | profileID                                                       | regexp named     |
            | user age                | age                                                             | regexp named     |
            | user gender             | gender                                                          | regexp named     |

    @ANA_INL010
    @analytics
    @ios @android @web @web-done
    @MX @backend(test) @vbank
    Scenario Outline: Status errors - cash deposits - Site error - <user>
        Given a user with the following criteria
            | criteria         |
            | <user>           |
        And the user accesses to dashboard
        And the user accesses to "configuration" item located in the sidebar
        When the user accesses to income limits option in configure products
        Then the device contains the following variables
            | item                    | value                                       | type             |
            | analytics               | analytics/glomo_base                        | json schema      |
            | page name               | app:privada:personas:depositos en efectivo  | string           |
            | level 1                 | depositos en efectivo                       | string           |
            | language                | ES                                          | string           |
            | page area               | privada                                     | string           |
            | page intent             | informacion                                 | string           |
            | channel                 | online                                      | string           |
            | page instance ID        | de                                          | string           |
            | page info version       | appVersion                                  | regexp named     |
            | page segment            | personas                                    | string           |
            | sysEnv                  | app                                         | string           |
            | business unit           | BBVA Mexico                                 | string           |
            | site app name           | App BBVA Mexico                             | string           |
            | project name            | Glomo                                       | string           |
            | device mobile           | si                                          | string           |
            | user userState          | logado                                      | string           |
            | user segment global     | 003001                                      | string           |
            | profile ID              | profileID                                   | regexp named     |
            | user age                | age                                         | regexp named     |
            | user gender             | gender                                      | regexp named     |
            | site error              | <error>                                     | string           |
        Examples:
            | user                               | error                                                     |
            | should update documents            | error necesitas actualizar tu documentacion               |
            | should update information          | error necesitas actualizar tu informacion                 |
            | should update docs and information | error necesitas actualizar tu informacion y documentacion |
            | with new request                   | error estamos validando tu informacion                    |
            | with rejected request              | error compartir informacion todavia no esta disponible    |
            | with no confirmation               | error no esta disponible compartir informacion            |

    @ANA_INL011
    @analytics
    @ios @android @web @web-done
    @MX @backend(test) @vbank
    Scenario: service not available error - Error Page
        Given a user with the following criteria
            | criteria                    |
            | with documents and activity |
        And the user accesses to dashboard
        And the user accesses to "configuration" item located in the sidebar
        And the user accesses to income limits option in configure products
        When the user enter the information in economic activity step and displays error "service not available"
        Then the device contains the following variables
            | item                    | value                                                                    | type             |
            | analytics               | analytics/glomo_base                                                     | json schema      |
            | page name               | app:privada:personas:depositos en efectivo:error servicio no disponible  | string           |
            | level 1                 | depositos en efectivo                                                    | string           |
            | level 2                 | error servicio no disponible                                             | string           |
            | error page              | error servicio no disponible                                             | string           |
            | language                | ES                                                                       | string           |
            | page area               | privada                                                                  | string           |
            | page intent             | informacion                                                              | string           |
            | channel                 | online                                                                   | string           |
            | page instance ID        | de                                                                       | string           |
            | page info version       | appVersion                                                               | regexp named     |
            | page segment            | personas                                                                 | string           |
            | sysEnv                  | app                                                                      | string           |
            | business unit           | BBVA Mexico                                                              | string           |
            | site app name           | App BBVA Mexico                                                          | string           |
            | project name            | Glomo                                                                    | string           |
            | device mobile           | si                                                                       | string           |
            | user userState          | logado                                                                   | string           |
            | user segment global     | 003001                                                                   | string           |
            | profile ID              | profileID                                                                | regexp named     |
            | user age                | age                                                                      | regexp named     |
            | user gender             | gender                                                                   | regexp named     |

    @ANA_INL012
    @analytics
    @ios @android @web @web-done
    @MX @backend(test) @vbank
    Scenario: service not available error - Error Page 2
        Given a user with the following criteria
            | criteria                    |
            | with documents and activity |
        And the user accesses to dashboard
        And the user accesses to "configuration" item located in the sidebar
        And the user accesses to income limits option in configure products
        When the user enter the information in economic activity step and displays error "service not available softtoken"
        Then the device contains the following variables
            | item                    | value                                                                            | type             |
            | analytics               | analytics/glomo_base                                                             | json schema      |
            | page name               | app:privada:personas:depositos en efectivo:error servicio no disponible softoken | string           |
            | level 1                 | depositos en efectivo                                                            | string           |
            | level 2                 | error servicio no disponible softoken                                            | string           |
            | error page              | error servicio no disponible softoken                                            | string           |
            | language                | ES                                                                               | string           |
            | page area               | privada                                                                          | string           |
            | page intent             | informacion                                                                      | string           |
            | channel                 | online                                                                           | string           |
            | page instance ID        | de                                                                               | string           |
            | page info version       | appVersion                                                                       | regexp named     |
            | page segment            | personas                                                                         | string           |
            | sysEnv                  | app                                                                              | string           |
            | business unit           | BBVA Mexico                                                                      | string           |
            | site app name           | App BBVA Mexico                                                                  | string           |
            | project name            | Glomo                                                                            | string           |
            | device mobile           | si                                                                               | string           |
            | user userState          | logado                                                                           | string           |
            | user segment global     | 003001                                                                           | string           |
            | profile ID              | profileID                                                                        | regexp named     |
            | user age                | age                                                                              | regexp named     |
            | user gender             | gender                                                                           | regexp named     |

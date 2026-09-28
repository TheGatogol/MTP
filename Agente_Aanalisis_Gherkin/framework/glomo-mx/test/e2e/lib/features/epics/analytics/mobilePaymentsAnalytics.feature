@mobilePaymentAnalytics
Feature: Analytics - Mobile Payment

    @ANA_MPA001
    @analytics
    @android @native @!vbank
    @MX @manual @JIRA.GLOMOGL-27158
    Scenario: Internal link - Click on Mobile Payment from Configuration
        Given a user with the following criteria
            | criteria              |
            | operative credit card |
            | credit card on        |
        And the user accesses to dashboard without blocked products and not affiliate the device
        And the user accesses to "settings" item located in the sidebar
        When the user accesses to "mobile payment"
        Then the device contains the following variables
            | item                    | value                              | type             |
            | analytics               | analytics/glomo_base               | json schema      |
            | version DL              | 20250414_5.0                       | string           |
            | page name               | app:privada:personas:configuracion | string           |
            | level 1                 | configuracion                      | string           |
            | link name               | pagar con celular configuracion    | string           |
            | language                | ES                                 | string           |
            | page area               | privada                            | string           |
            | page intent             | informacion                        | string           |
            | channel                 | online                             | string           |
            | page instance ID        | de                                 | string           |
            | page info version       | appVersion                         | regexp named     |
            | page segment            | personas                           | string           |
            | sysEnv                  | app                                | string           |
            | business unit           | BBVA Mexico                        | string           |
            | site app name           | App BBVA Mexico                    | string           |
            | project name            | Glomo                              | string           |
            | device mobile           | si                                 | string           |
            | user userState          | logado                             | string           |
            | user segment global     | 003001                             | string           |
            | profile ID              | profileID                          | regexp named     |
            | user gender             | gender                             | regexp named     |
            | user age                | age                                | regexp named     |
            | internal campaign       |                                    | empty array      |
            | optimization attributes |                                    | empty array      |
            | application             |                                    | empty str object |
            | products attributes     |                                    | empty array      |

    @ANA_MPA002
    @analytics
    @android @native @!vbank
    @MX @manual @JIRA.GLOMOGL-27158
    Scenario: Internal link - Click on Mobile Payment Credit
        Given a user with the following criteria
            | criteria              |
            | operative credit card |
            | credit card on        |
        And the user accesses to dashboard without blocked products and not affiliate the device
        And the user accesses to the card product detail with following criteria
            | type   | credit    |
            | status | OPERATIVE |
            | on off | yes       |
        When the user accesses to "mobile payment"
        Then the device contains the following variables
            | item                    | value                                         | type             |
            | analytics               | analytics/glomo_base                          | json schema      |
            | version DL              | 20250414_5.0                                  | string           |
            | page name               | app:privada:personas:tarjetas:credito:detalle | string           |
            | level 1                 | tarjetas                                      | string           |
            | level 2                 | credito                                       | string           |
            | level 3                 | detalle                                       | string           |
            | link name               | pagar con celular detalle tarjetas credito    | string           |
            | language                | ES                                            | string           |
            | page area               | privada                                       | string           |
            | page intent             | informacion                                   | string           |
            | channel                 | online                                        | string           |
            | page instance ID        | de                                            | string           |
            | page info version       | appVersion                                    | regexp named     |
            | page segment            | personas                                      | string           |
            | sysEnv                  | app                                           | string           |
            | business unit           | BBVA Mexico                                   | string           |
            | site app name           | App BBVA Mexico                               | string           |
            | project name            | Glomo                                         | string           |
            | device mobile           | si                                            | string           |
            | user userState          | logado                                        | string           |
            | user segment global     | 003001                                        | string           |
            | profile ID              | profileID                                     | regexp named     |
            | user gender             | gender                                        | regexp named     |
            | user age                | age                                           | regexp named     |
            | internal campaign       |                                               | empty array      |
            | optimization attributes |                                               | empty array      |
            | application             |                                               | empty str object |
            | products attributes     |                                               | empty array      |

    @ANA_MPA003
    @analytics
    @android @native @!vbank
    @MX @manual @JIRA.GLOMOGL-27158
    Scenario: Internal link - Click on Mobile Payment Debit
        Given a user with the following criteria
            | criteria              |
            | operative debit card  |
            | debit card on         |
        And the user accesses to dashboard without blocked products and not affiliate the device
        And the user accesses to the card product detail with following criteria
            | type   | debit     |
            | status | OPERATIVE |
            | on off | yes       |
        When the user accesses to "mobile payment"
        Then the device contains the following variables
            | item                    | value                                         | type             |
            | analytics               | analytics/glomo_base                          | json schema      |
            | version DL              | 20250414_5.0                                  | string           |
            | page name               | app:privada:personas:tarjetas:debito:detalle  | string           |
            | level 1                 | tarjetas                                      | string           |
            | level 2                 | debito                                        | string           |
            | level 3                 | detalle                                       | string           |
            | link name               | pagar con celular detalle tarjetas debito     | string           |
            | language                | ES                                            | string           |
            | page area               | privada                                       | string           |
            | page intent             | informacion                                   | string           |
            | channel                 | online                                        | string           |
            | page instance ID        | de                                            | string           |
            | page info version       | appVersion                                    | regexp named     |
            | page segment            | personas                                      | string           |
            | sysEnv                  | app                                           | string           |
            | business unit           | BBVA Mexico                                   | string           |
            | site app name           | App BBVA Mexico                               | string           |
            | project name            | Glomo                                         | string           |
            | device mobile           | si                                            | string           |
            | user userState          | logado                                        | string           |
            | user segment global     | 003001                                        | string           |
            | profile ID              | profileID                                     | regexp named     |
            | user gender             | gender                                        | regexp named     |
            | user age                | age                                           | regexp named     |
            | internal campaign       |                                               | empty array      |
            | optimization attributes |                                               | empty array      |
            | application             |                                               | empty str object |
            | products attributes     |                                               | empty array      |

    @ANA_MPA004
    @analytics
    @android @native @!vbank
    @MX @manual @JIRA.GLOMOGL-27158
    Scenario: Advanced Footprint - Showing service information as onboarding modal
        Given a user with the following criteria
            | criteria                        |
            | operative credit card           |
            | card on                         |
            | unregistered for mobile payment |
        And the user accesses to dashboard without blocked products and not affiliate the device
        And the user accesses to the card product detail with following criteria
            | type   | credit    |
            | status | OPERATIVE |
            | on off | yes       |
        When the user accesses to "mobile payment"
        Then the device contains the following variables
            | item                    | value                                                       | type             |
            | analytics               | analytics/glomo_base                                        | json schema      |
            | version DL              | 20250414_5.0                                                | string           |
            | page name               | app:privada:personas:pagar con celular:informacion servicio | string           |
            | level 1                 | pagar con celular                                           | string           |
            | level 2                 | informacion servicio                                        | string           |
            | language                | ES                                                          | string           |
            | page area               | privada                                                     | string           |
            | page intent             | informacion                                                 | string           |
            | channel                 | online                                                      | string           |
            | page instance ID        | de                                                          | string           |
            | page info version       | appVersion                                                  | regexp named     |
            | page segment            | personas                                                    | string           |
            | sysEnv                  | app                                                         | string           |
            | business unit           | BBVA Mexico                                                 | string           |
            | site app name           | App BBVA Mexico                                             | string           |
            | project name            | Glomo                                                       | string           |
            | device mobile           | si                                                          | string           |
            | user userState          | logado                                                      | string           |
            | user segment global     | 003001                                                      | string           |
            | profile ID              | profileID                                                   | regexp named     |
            | user gender             | gender                                                      | regexp named     |
            | user age                | age                                                         | regexp named     |
            | internal campaign       |                                                             | empty array      |
            | optimization attributes |                                                             | empty array      |
            | application             |                                                             | empty str object |
            | products attributes     |                                                             | empty array      |

    @ANA_MPA005
    @analytics
    @android @native @!vbank
    @MX @manual @JIRA.GLOMOGL-27158
    Scenario Outline: Advanced Footprint - Activate <card type> card the first time
        Given a user with the following criteria
            | criteria                        |
            | operative <card type> card      |
            | card on                         |
            | unregistered for mobile payment |
        And the user accesses to dashboard without blocked products and not affiliate the device
        And the user accesses to the card product detail with following criteria
            | type   | <card type> |
            | status | OPERATIVE   |
            | on off | yes         |
        And the user accesses to "mobile payment"
        When the user watches the mobile payment onboarding last screen
        Then the device contains the following variables
            | item                    | value                                          | type             |
            | analytics               | analytics/glomo_base                           | json schema      |
            | version DL              | 20250414_5.0                                   | string           |
            | page name               | app:privada:personas:pagar con celular:activar | string           |
            | level 1                 | pagar con celular                              | string           |
            | level 2                 | activar                                        | string           |
            | language                | ES                                             | string           |
            | page area               | privada                                        | string           |
            | page intent             | informacion                                    | string           |
            | channel                 | online                                         | string           |
            | page instance ID        | de                                             | string           |
            | page info version       | appVersion                                     | regexp named     |
            | page segment            | personas                                       | string           |
            | sysEnv                  | app                                            | string           |
            | business unit           | BBVA Mexico                                    | string           |
            | site app name           | App BBVA Mexico                                | string           |
            | project name            | Glomo                                          | string           |
            | device mobile           | si                                             | string           |
            | user userState          | logado                                         | string           |
            | user segment global     | 003001                                         | string           |
            | profile ID              | profileID                                      | regexp named     |
            | user gender             | gender                                         | regexp named     |
            | user age                | age                                            | regexp named     |
            | internal campaign       |                                                | empty array      |
            | optimization attributes |                                                | empty array      |
            | application             |                                                | empty str object |
            | products attributes     |                                                | empty array      |

        Examples:
            | card type |
            | debit     |
            | credit    |

    @ANA_MPA006
    @analytics
    @android @native @!vbank
    @MX @manual @JIRA.GLOMOGL-27158
    Scenario: Advance Footprint - Show OTP
        Given a user with the following criteria
            | criteria                              |
            | operative credit card                 |
            | card on                               |
            | card not registered to mobile payment |
            | mobile payment activated              |
        And the user accesses to the card product detail with following criteria
            | type   | credit    |
            | status | OPERATIVE |
            | on off | on        |
        And the user accesses to "mobile payment"
        When the user attempts to understand the mobile payment onboarding
        Then the device contains the following variables
            | item                    | value                                              | type             |
            | analytics               | analytics/glomo_base                               | json schema      |
            | version DL              | 20250414_5.0                                       | string           |
            | page name               | app:privada:personas:pagar con celular:activar:otp | string           |
            | level 1                 | pagar con celular                                  | string           |
            | level 2                 | activar                                            | string           |
            | level 3                 | otp                                                | string           |
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
            | user gender             | gender                                             | regexp named     |
            | user age                | age                                                | regexp named     |
            | internal campaign       |                                                    | empty array      |
            | optimization attributes |                                                    | empty array      |
            | application             |                                                    | empty str object |
            | products attributes     |                                                    | empty array      |

    @ANA_MPA007
    @analytics
    @android @native @!vbank
    @MX @manual @JIRA.GLOMOGL-27158
    Scenario Outline: Advanced Footprint - Show pending activation modal on <card type> card
        Given a user with the following criteria
            | criteria                             |
            | operative <card type> card           |
            | card on                              |
            | card unregistered for mobile payment |
        And the user accesses to dashboard without blocked products and not affiliate the device
        And the user accesses to the card product detail with following criteria
            | type   | <card type> |
            | status | OPERATIVE   |
            | on off | yes         |
        And the user accesses to "mobile payment"
        When the user understands the mobile payment onboarding and completes the OTP
        Then the device contains the following variables
            | item                    | value                                                         | type             |
            | analytics               | analytics/glomo_base                                          | json schema      |
            | version DL              | 20250414_5.0                                                  | string           |
            | page name               | app:privada:personas:pagar con celular:activar:pagina exitosa | string           |
            | level 1                 | pagar con celular                                             | string           |
            | level 2                 | activar                                                       | string           |
            | level 3                 | pagina exitosa                                                | string           |
            | language                | ES                                                            | string           |
            | page area               | privada                                                       | string           |
            | page intent             | informacion                                                   | string           |
            | channel                 | online                                                        | string           |
            | page instance ID        | de                                                            | string           |
            | page info version       | appVersion                                                    | regexp named     |
            | page segment            | personas                                                      | string           |
            | sysEnv                  | app                                                           | string           |
            | business unit           | BBVA Mexico                                                   | string           |
            | site app name           | App BBVA Mexico                                               | string           |
            | project name            | Glomo                                                         | string           |
            | device mobile           | si                                                            | string           |
            | user userState          | logado                                                        | string           |
            | user segment global     | 003001                                                        | string           |
            | profile ID              | profileID                                                     | regexp named     |
            | user gender             | gender                                                        | regexp named     |
            | user age                | age                                                           | regexp named     |
            | internal campaign       |                                                               | empty array      |
            | optimization attributes |                                                               | empty array      |
            | application             |                                                               | empty str object |
            | products attributes     |                                                               | empty array      |

        Examples:
            | card type |
            | debit     |
            | credit    |

    @ANA_MPA008
    @analytics
    @android @native @!vbank
    @MX @manual @JIRA.GLOMOGL-27158
    Scenario Outline: Advanced Footprint - Show pending adding card on <card type> card
        Given a user with the following criteria
            | criteria                              |
            | operative <card type> card            |
            | card on                               |
            | card unregistered for mobile payment  |
            | user yet accessed mobile payment once |
        And the user accesses to dashboard without blocked products and not affiliate the device
        And the user accesses to the card product detail with following criteria
            | type   | <card type> |
            | status | OPERATIVE   |
            | on off | yes         |
        And the user accesses to "mobile payment"
        When the user add the cards to mobile payment and completes OTP
        Then the device contains the following variables
            | item                    | value                                                                 | type             |
            | analytics               | analytics/glomo_base                                                  | json schema      |
            | version DL              | 20250414_5.0                                                          | string           |
            | page name               | app:privada:personas:pagar con celular:agregar tarjeta:pagina exitosa | string           |
            | level 1                 | pagar con celular                                                     | string           |
            | level 2                 | agregar tarjeta                                                       | string           |
            | level 3                 | pagina exitosa                                                        | string           |
            | language                | ES                                                                    | string           |
            | page area               | privada                                                               | string           |
            | page intent             | informacion                                                           | string           |
            | channel                 | online                                                                | string           |
            | page instance ID        | de                                                                    | string           |
            | page info version       | appVersion                                                            | regexp named     |
            | page segment            | personas                                                              | string           |
            | sysEnv                  | app                                                                   | string           |
            | business unit           | BBVA Mexico                                                           | string           |
            | site app name           | App BBVA Mexico                                                       | string           |
            | project name            | Glomo                                                                 | string           |
            | device mobile           | si                                                                    | string           |
            | user userState          | logado                                                                | string           |
            | user segment global     | 003001                                                                | string           |
            | profile ID              | profileID                                                             | regexp named     |
            | user gender             | gender                                                                | regexp named     |
            | user age                | age                                                                   | regexp named     |
            | internal campaign       |                                                                       | empty array      |
            | optimization attributes |                                                                       | empty array      |
            | application             |                                                                       | empty str object |
            | products attributes     |                                                                       | empty array      |

        Examples:
            | card type |
            | debit     |
            | credit    |

    @ANA_MPA009
    @analytics
    @android @native @!vbank
    @MX @manual @JIRA.GLOMOGL-27158
    Scenario: Advanced footprint - Show renewal screen
        Given a user with the following criteria
            | criteria                           |
            | mobile payment keys expired        |
            | Nfc on                             |
            | mobile payment activated           |
            | BBVA selected as predetermined app |
        When the user accesses the mobile payment renewal screen
        Then the device contains the following variables
            | item                    | value                                                       | type             |
            | analytics               | analytics/glomo_base                                        | json schema      |
            | version DL              | 20250414_5.0                                                | string           |
            | page name               | app:privada:personas:pagar con celular:largo tiempo sin uso | string           |
            | level 1                 | pagar con celular                                           | string           |
            | level 2                 | largo tiempo sin uso                                        | string           |
            | language                | ES                                                          | string           |
            | page area               | privada                                                     | string           |
            | page intent             | informacion                                                 | string           |
            | channel                 | online                                                      | string           |
            | page instance ID        | de                                                          | string           |
            | page info version       | appVersion                                                  | regexp named     |
            | page segment            | personas                                                    | string           |
            | sysEnv                  | app                                                         | string           |
            | business unit           | BBVA Mexico                                                 | string           |
            | site app name           | App BBVA Mexico                                             | string           |
            | project name            | Glomo                                                       | string           |
            | device mobile           | si                                                          | string           |
            | user userState          | logado                                                      | string           |
            | user segment global     | 003001                                                      | string           |
            | profile ID              | profileID                                                   | regexp named     |
            | user gender             | gender                                                      | regexp named     |
            | user age                | age                                                         | regexp named     |
            | internal campaign       |                                                             | empty array      |
            | optimization attributes |                                                             | empty array      |
            | application             |                                                             | empty str object |
            | products attributes     |                                                             | empty array      |

    @ANA_MPA010
    @analytics
    @android @native @!vbank
    @MX @manual @JIRA.GLOMOGL-27158
    Scenario: Internal link - Show renewal screen
        Given a user with the following criteria
            | criteria                           |
            | mobile payment keys expired        |
            | Nfc on                             |
            | mobile payment activated           |
            | BBVA selected as predetermined app |
        And the user accesses the mobile payment renewal screen
        When the user renews the mobile payment
        Then the device contains the following variables
            | item                    | value                                                       | type             |
            | analytics               | analytics/glomo_base                                        | json schema      |
            | version DL              | 20250414_5.0                                                | string           |
            | page name               | app:privada:personas:pagar con celular:largo tiempo sin uso | string           |
            | level 1                 | pagar con celular                                           | string           |
            | level 2                 | largo tiempo sin uso                                        | string           |
            | link name               | confirmar renovacion                                        | string           |
            | language                | ES                                                          | string           |
            | page area               | privada                                                     | string           |
            | page intent             | informacion                                                 | string           |
            | channel                 | online                                                      | string           |
            | page instance ID        | de                                                          | string           |
            | page info version       | appVersion                                                  | regexp named     |
            | page segment            | personas                                                    | string           |
            | sysEnv                  | app                                                         | string           |
            | business unit           | BBVA Mexico                                                 | string           |
            | site app name           | App BBVA Mexico                                             | string           |
            | project name            | Glomo                                                       | string           |
            | device mobile           | si                                                          | string           |
            | user userState          | logado                                                      | string           |
            | user segment global     | 003001                                                      | string           |
            | profile ID              | profileID                                                   | regexp named     |
            | user gender             | gender                                                      | regexp named     |
            | user age                | age                                                         | regexp named     |
            | internal campaign       |                                                             | empty array      |
            | optimization attributes |                                                             | empty array      |
            | application             |                                                             | empty str object |
            | products attributes     |                                                             | empty array      |

    @ANA_MPA011
    @analytics
    @android @native @!vbank
    @MX @manual @JIRA.GLOMOGL-27158
    Scenario: Advanced footprint - Show settings page
        Given a user with the following criteria
            | criteria                   |
            | android device support NFC |
            | mobile payment activated   |
        And the user accesses to "settings" item located in the sidebar
        When the user accesses to "mobile payment"
        Then the device contains the following variables
            | item                    | value                                                             | type             |
            | analytics               | analytics/glomo_base                                              | json schema      |
            | version DL              | 20250414_5.0                                                      | string           |
            | page name               | app:privada:personas:pagar con celular:solicitud de desactivacion | string           |
            | level 1                 | pagar con celular                                                 | string           |
            | level 2                 | solicitud de desactivacion                                        | string           |
            | language                | ES                                                                | string           |
            | page area               | privada                                                           | string           |
            | page intent             | informacion                                                       | string           |
            | channel                 | online                                                            | string           |
            | page instance ID        | de                                                                | string           |
            | page info version       | appVersion                                                        | regexp named     |
            | page segment            | personas                                                          | string           |
            | sysEnv                  | app                                                               | string           |
            | business unit           | BBVA Mexico                                                       | string           |
            | site app name           | App BBVA Mexico                                                   | string           |
            | project name            | Glomo                                                             | string           |
            | device mobile           | si                                                                | string           |
            | user userState          | logado                                                            | string           |
            | user segment global     | 003001                                                            | string           |
            | profile ID              | profileID                                                         | regexp named     |
            | user gender             | gender                                                            | regexp named     |
            | user age                | age                                                               | regexp named     |
            | internal campaign       |                                                                   | empty array      |
            | optimization attributes |                                                                   | empty array      |
            | application             |                                                                   | empty str object |
            | products attributes     |                                                                   | empty array      |

    @ANA_MPA012
    @analytics
    @android @native @!vbank
    @MX @manual @JIRA.GLOMOGL-27158
    Scenario: Internal link - Deactivate mobile payment
        Given a user with the following criteria
            | criteria                   |
            | android device support NFC |
            | mobile payment activated   |
        And the user accesses to "settings" item located in the sidebar
        And the user accesses to "mobile payment"
        When the user confirms to deactivate mobile payment
        Then the device contains the following variables
            | item                    | value                                                             | type             |
            | analytics               | analytics/glomo_base                                              | json schema      |
            | version DL              | 20250414_5.0                                                      | string           |
            | page name               | app:privada:personas:pagar con celular:solicitud de desactivacion | string           |
            | level 1                 | pagar con celular                                                 | string           |
            | level 2                 | solicitud de desactivacion                                        | string           |
            | link name               | desactivar pago celular                                           | string           |
            | language                | ES                                                                | string           |
            | page area               | privada                                                           | string           |
            | page intent             | informacion                                                       | string           |
            | channel                 | online                                                            | string           |
            | page instance ID        | de                                                                | string           |
            | page info version       | appVersion                                                        | regexp named     |
            | page segment            | personas                                                          | string           |
            | sysEnv                  | app                                                               | string           |
            | business unit           | BBVA Mexico                                                       | string           |
            | site app name           | App BBVA Mexico                                                   | string           |
            | project name            | Glomo                                                             | string           |
            | device mobile           | si                                                                | string           |
            | user userState          | logado                                                            | string           |
            | user segment global     | 003001                                                            | string           |
            | profile ID              | profileID                                                         | regexp named     |
            | user gender             | gender                                                            | regexp named     |
            | user age                | age                                                               | regexp named     |
            | internal campaign       |                                                                   | empty array      |
            | optimization attributes |                                                                   | empty array      |
            | application             |                                                                   | empty str object |
            | products attributes     |                                                                   | empty array      |

    @ANA_MPA013
    @analytics
    @android @native @!vbank
    @MX @manual @JIRA.GLOMOGL-27158
    Scenario: Advanced footprint - Error: Card not eligible
        Given a user with the following criteria
            | criteria                              |
            | operative credit card                 |
            | card on                               |
            | card not registered to mobile payment |
            | card not eligible for mobile payment  |
        And the user accesses to the card product detail with following criteria
            | type   | credit    |
            | status | OPERATIVE |
            | on off | on        |
        And the user accesses to "mobile payment"
        When the user attempts to understand the mobile payment onboarding and completes the OTP
        Then the device contains the following variables
            | item                    | value                                                             | type             |
            | analytics               | analytics/glomo_base                                              | json schema      |
            | version DL              | 20250414_5.0                                                      | string           |
            | page name               | app:privada:personas:pagar con celular:error tarjeta no permitida | string           |
            | level 1                 | pagar con celular                                                 | string           |
            | level 2                 | error tarjeta no permitida                                        | string           |
            | error page              | error tarjeta no permitida                                        | string           |
            | language                | ES                                                                | string           |
            | page area               | privada                                                           | string           |
            | page intent             | informacion                                                       | string           |
            | channel                 | online                                                            | string           |
            | page instance ID        | de                                                                | string           |
            | page info version       | appVersion                                                        | regexp named     |
            | page segment            | personas                                                          | string           |
            | sysEnv                  | app                                                               | string           |
            | business unit           | BBVA Mexico                                                       | string           |
            | site app name           | App BBVA Mexico                                                   | string           |
            | project name            | Glomo                                                             | string           |
            | device mobile           | si                                                                | string           |
            | user userState          | logado                                                            | string           |
            | user segment global     | 003001                                                            | string           |
            | profile ID              | profileID                                                         | regexp named     |
            | user gender             | gender                                                            | regexp named     |
            | user age                | age                                                               | regexp named     |
            | internal campaign       |                                                                   | empty array      |
            | optimization attributes |                                                                   | empty array      |
            | application             |                                                                   | empty str object |
            | products attributes     |                                                                   | empty array      |

    @ANA_MPA014
    @analytics
    @android @native @!vbank
    @MX @manual @JIRA.GLOMOGL-27158
    Scenario: Advanced footprint - Error: Operation error
        Given a user with the following criteria
            | criteria                                         |
            | operative credit card                            |
            | card on                                          |
            | card not registered to mobile payment            |
            | mobile payment activated                         |
            | Error in the mobile payment registration service |
        And the user accesses to the card product detail with following criteria
            | type   | credit    |
            | status | OPERATIVE |
            | on off | on        |
        And the user accesses to "mobile payment"
        And the user attempts to understand the mobile payment onboarding and completes the OTP
        When the user retries access "3" times
        Then the device contains the following variables
            | item                    | value                                                               | type             |
            | analytics               | analytics/glomo_base                                                | json schema      |
            | version DL              | 20250414_5.0                                                        | string           |
            | page name               | app:privada:personas:pagar con celular:error operacion no realizada | string           |
            | level 1                 | pagar con celular                                                   | string           |
            | level 2                 | error operacion no realizada                                        | string           |
            | error page              | error operacion no realizada                                        | string           |
            | language                | ES                                                                  | string           |
            | page area               | privada                                                             | string           |
            | page intent             | informacion                                                         | string           |
            | channel                 | online                                                              | string           |
            | page instance ID        | de                                                                  | string           |
            | page info version       | appVersion                                                          | regexp named     |
            | page segment            | personas                                                            | string           |
            | sysEnv                  | app                                                                 | string           |
            | business unit           | BBVA Mexico                                                         | string           |
            | site app name           | App BBVA Mexico                                                     | string           |
            | project name            | Glomo                                                               | string           |
            | device mobile           | si                                                                  | string           |
            | user userState          | logado                                                              | string           |
            | user segment global     | 003001                                                              | string           |
            | profile ID              | profileID                                                           | regexp named     |
            | user gender             | gender                                                              | regexp named     |
            | user age                | age                                                                 | regexp named     |
            | internal campaign       |                                                                     | empty array      |
            | optimization attributes |                                                                     | empty array      |
            | application             |                                                                     | empty str object |
            | products attributes     |                                                                     | empty array      |

    @ANA_MPA015
    @analytics
    @android @native @!vbank
    @MX @manual @JIRA.GLOMOGL-27158
    Scenario: Interaction link - Activate security check
        Given a user with the following criteria
            | criteria                   |
            | android device support NFC |
            | mobile payment activated   |
            | security deactivated       |
        And the user accesses to "settings" item located in the sidebar
        And the user accesses to "mobile payment"
        When the user confirms to activate security check
        Then the device contains the following variables
            | item                    | value                                                             | type             |
            | analytics               | analytics/glomo_base                                              | json schema      |
            | version DL              | 20250414_5.0                                                      | string           |
            | page name               | app:privada:personas:pagar con celular:solicitud de desactivacion | string           |
            | level 1                 | pagar con celular                                                 | string           |
            | level 2                 | solicitud de desactivacion                                        | string           |
            | interaction level       | activar pedir desbloqueo                                          | string           |
            | language                | ES                                                                | string           |
            | page area               | privada                                                           | string           |
            | page intent             | informacion                                                       | string           |
            | channel                 | online                                                            | string           |
            | page instance ID        | de                                                                | string           |
            | page info version       | appVersion                                                        | regexp named     |
            | page segment            | personas                                                          | string           |
            | sysEnv                  | app                                                               | string           |
            | business unit           | BBVA Mexico                                                       | string           |
            | site app name           | App BBVA Mexico                                                   | string           |
            | project name            | Glomo                                                             | string           |
            | device mobile           | si                                                                | string           |
            | user userState          | logado                                                            | string           |
            | user segment global     | 003001                                                            | string           |
            | profile ID              | profileID                                                         | regexp named     |
            | user gender             | gender                                                            | regexp named     |
            | user age                | age                                                               | regexp named     |
            | internal campaign       |                                                                   | empty array      |
            | optimization attributes |                                                                   | empty array      |
            | application             |                                                                   | empty str object |
            | products attributes     |                                                                   | empty array      |

    @ANA_MPA016
    @analytics
    @android @native @!vbank
    @MX @manual @JIRA.GLOMOGL-27158
    Scenario: Interaction link - Deactivate security check
        Given a user with the following criteria
            | criteria                   |
            | android device support NFC |
            | mobile payment activated   |
            | security activated         |
        And the user accesses to "settings" item located in the sidebar
        And the user accesses to "mobile payment"
        When the user confirms to deactivate security check
        Then the device contains the following variables
            | item                    | value                                                             | type             |
            | analytics               | analytics/glomo_base                                              | json schema      |
            | version DL              | 20250414_5.0                                                      | string           |
            | page name               | app:privada:personas:pagar con celular:solicitud de desactivacion | string           |
            | level 1                 | pagar con celular                                                 | string           |
            | level 2                 | solicitud de desactivacion                                        | string           |
            | interaction level       | desactivar pedir desbloqueo                                       | string           |
            | language                | ES                                                                | string           |
            | page area               | privada                                                           | string           |
            | page intent             | informacion                                                       | string           |
            | channel                 | online                                                            | string           |
            | page instance ID        | de                                                                | string           |
            | page info version       | appVersion                                                        | regexp named     |
            | page segment            | personas                                                          | string           |
            | sysEnv                  | app                                                               | string           |
            | business unit           | BBVA Mexico                                                       | string           |
            | site app name           | App BBVA Mexico                                                   | string           |
            | project name            | Glomo                                                             | string           |
            | device mobile           | si                                                                | string           |
            | user userState          | logado                                                            | string           |
            | user segment global     | 003001                                                            | string           |
            | profile ID              | profileID                                                         | regexp named     |
            | user gender             | gender                                                            | regexp named     |
            | user age                | age                                                               | regexp named     |
            | internal campaign       |                                                                   | empty array      |
            | optimization attributes |                                                                   | empty array      |
            | application             |                                                                   | empty str object |
            | products attributes     |                                                                   | empty array      |

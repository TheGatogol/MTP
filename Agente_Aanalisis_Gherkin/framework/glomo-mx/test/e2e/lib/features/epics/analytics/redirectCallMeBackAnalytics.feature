@redirectCallMeBackAnalytics
Feature: Analytics -  Redirect Call Me Back

    @ANA_CMB001
    @analytics
    @web @ios @android
    @backend(test) @vbank
    @MX @manual @JIRA.GLOMOMX-215003
    @web-done
    Scenario: Call Me Back - Page View - Schedule Call
        Given a user with the following criteria
            | criteria     |
            | call me back |
        And the user starts the application at date:
            | hour  | 20   |
            | day   | 28   |
            | month | 10   |
            | year  | 2023 |
        When the user goes to the combo offer
        And the user accesses to I want to call a personal advisor "header"
        Then the device contains the following variables
            | item                    | value                                             | type             |
            | analytics               | analytics/glomo_base                              | json schema      |
            | version DL              | 20250414_5.0                                      | string           |
            | page name               | app:privada:personas:call me back:agendar llamada | string           |
            | level 1                 | call me back                                      | string           |
            | level 2                 | agendar llamada                                   | string           |
            | language                | ES                                                | string           |
            | page area               | privada                                           | string           |
            | page intent             | informacion                                       | string           |
            | channel                 | online                                            | string           |
            | page instance ID        | de                                                | string           |
            | page info version       | appVersion                                        | regexp named     |
            | page segment            | personas                                          | string           |
            | sysEnv                  | app                                               | string           |
            | business unit           | BBVA Mexico                                       | string           |
            | site app name           | App BBVA Mexico                                   | string           |
            | project name            | Glomo                                             | string           |
            | device mobile           | si                                                | string           |
            | user userState          | logado                                            | string           |
            | user segment global     | 003001                                            | string           |
            | user age                | age                                               | regexp named     |
            | profile ID              | profileID                                         | regexp named     |
            | internal campaign       |                                                   | empty array      |
            | optimization attributes |                                                   | empty array      |
            | application             |                                                   | empty str object |
            | products attributes     |                                                   | empty array      |

    @ANA_CMB002
    @analytics
    @web @ios @android
    @backend(test) @vbank
    @MX @manual @JIRA.GLOMOMX-169732
    Scenario: Call Me Back - Page View - Request Received
        Given a user with the following criteria
            | criteria     |
            | call me back |
        And the user starts the application at date:
            | hour  | 16      |
            | day   | 04      |
            | month | january |
            | year  | 2023    |
        When the user goes to the combo offer
        And the user accesses to I want to call a personal advisor "header"
        Then the device contains the following variables
            | item                    | value                                                | type             |
            | analytics               | analytics/glomo_base                                 | json schema      |
            | version DL              | 20250414_5.0                                         | string           |
            | page name               | app:privada:personas:call me back:solicitud recibida | string           |
            | level 1                 | call me back                                         | string           |
            | level 2                 | solicitud recibida                                   | string           |
            | language                | ES                                                   | string           |
            | page area               | privada                                              | string           |
            | page intent             | informacion                                          | string           |
            | channel                 | online                                               | string           |
            | page instance ID        | de                                                   | string           |
            | page info version       | appVersion                                           | regexp named     |
            | page segment            | personas                                             | string           |
            | sysEnv                  | app                                                  | string           |
            | business unit           | BBVA Mexico                                          | string           |
            | site app name           | App BBVA Mexico                                      | string           |
            | project name            | Glomo                                                | string           |
            | device mobile           | si                                                   | string           |
            | user userState          | logado                                               | string           |
            | user segment global     | 003001                                               | string           |
            | user age                | age                                                  | regexp named     |
            | profile ID              | profileID                                            | regexp named     |
            | internal campaign       |                                                      | empty array      |
            | optimization attributes |                                                      | empty array      |
            | application             |                                                      | empty str object |
            | products attributes     |                                                      | empty array      |

    @ANA_CMB003
    @analytics
    @web @ios @android
    @backend(test) @vbank
    @MX
    @web-done
    Scenario: Call Me Back - Internal Link - Phone Icon
        Given a user with the following criteria
            | criteria     |
            | call me back |
        And the user starts the application at date:
            | hour  | <hour> |
            | day   | 27     |
            | month | 10     |
            | year  | 2023   |
        When the user goes to the combo offer
        And the user accesses to I want to call a personal advisor "header"
        Then the device contains the following variables
            | item                    | value                                                        | type             |
            | analytics               | analytics/glomo_base                                         | json schema      |
            | version DL              | 20250414_5.0                                                 | string           |
            | page name               | app:privada:personas:combo prestamo tarjeta:1 caracteristica | string           |
            | level 1                 | combo prestamo tarjeta                                       | string           |
            | level 2                 | 1 caracteristica                                             | string           |
            | language                | ES                                                           | string           |
            | page area               | privada                                                      | string           |
            | page intent             | transaccion                                                  | string           |
            | channel                 | online                                                       | string           |
            | page instance ID        | de                                                           | string           |
            | page info version       | appVersion                                                   | regexp named     |
            | page segment            | personas                                                     | string           |
            | sysEnv                  | app                                                          | string           |
            | business unit           | BBVA Mexico                                                  | string           |
            | site app name           | App BBVA Mexico                                              | string           |
            | project name            | Glomo                                                        | string           |
            | device mobile           | si                                                           | string           |
            | user userState          | logado                                                       | string           |
            | user segment global     | 003001                                                       | string           |
            | user age                | age                                                          | regexp named     |
            | profile ID              | profileID                                                    | regexp named     |
            | internal campaign       |                                                              | empty array      |
            | optimization attributes |                                                              | empty array      |
            | application             |                                                              | empty str object |
            | products attributes     |                                                              | empty array      |

    @ANA_CMB004
    @analytics
    @web @ios @android
    @backend(test) @vbank
    @MX
    @web-done
    Scenario: Call Me Back - Internal Link - Sticky
        Given a user with the following criteria
            | criteria     |
            | call me back |
        And the user starts the application at date:
            | hour  | <hour> |
            | day   | 27     |
            | month | 10     |
            | year  | 2023   |
        When the user goes to the combo offer
        And the user accesses to I want to call a personal advisor "link"
        Then the device contains the following variables
            | item                    | value                                                        | type             |
            | analytics               | analytics/glomo_base                                         | json schema      |
            | version DL              | 20250414_5.0                                                 | string           |
            | page name               | app:privada:personas:combo prestamo tarjeta:1 caracteristica | string           |
            | level 1                 | combo prestamo tarjeta                                       | string           |
            | level 2                 | 1 caracteristica                                             | string           |
            | language                | ES                                                           | string           |
            | page area               | privada                                                      | string           |
            | page intent             | transaccion                                                  | string           |
            | channel                 | online                                                       | string           |
            | page instance ID        | de                                                           | string           |
            | page info version       | appVersion                                                   | regexp named     |
            | page segment            | personas                                                     | string           |
            | sysEnv                  | app                                                          | string           |
            | business unit           | BBVA Mexico                                                  | string           |
            | site app name           | App BBVA Mexico                                              | string           |
            | project name            | Glomo                                                        | string           |
            | device mobile           | si                                                           | string           |
            | user userState          | logado                                                       | string           |
            | user segment global     | 003001                                                       | string           |
            | user age                | age                                                          | regexp named     |
            | profile ID              | profileID                                                    | regexp named     |
            | internal campaign       |                                                              | empty array      |
            | optimization attributes |                                                              | empty array      |
            | application             |                                                              | empty str object |
            | products attributes     |                                                              | empty array      |

    @ANA_CMB005
    @analytics
    @web @ios @android
    @backend(test) @vbank
    @MX @web-done
    Scenario: When Payroll Portability is accessed Click to Call - Internal Link - Sticky
        Given a user with the following criteria
            | criteria            |
            | remote banking user |
        And the user starts the application at date:
            | hour  | <hour> |
            | day   | 27     |
            | month | 10     |
            | year  | 2023   |
        When the user accesses the "account payroll portability" screen
        Then the device contains the following variables
            | item                    | value                                                         | type         |
            | analytics               | analytics/glomo_base                                          | json schema  |
            | version DL              | 20250414_5.0                                                  | string       |
            | page name               | app:privada:personas:cuentas:portabilidad nomina:1 beneficios | string       |
            | level 1                 | cuentas                                                       | string       |
            | level 2                 | portabilidad nomina                                           | string       |
            | level 3                 | 1 beneficios                                                  | string       |
            | link name               |                                                               | string       |
            | language                | ES                                                            | string       |
            | page area               | privada                                                       | string       |
            | page intent             | transaccion                                                   | string       |
            | channel                 | online                                                        | string       |
            | page instance ID        | de                                                            | string       |
            | page info version       | appVersion                                                    | regexp named |
            | page segment            | personas                                                      | string       |
            | sysEnv                  | app                                                           | string       |
            | business unit           | BBVA Mexico                                                   | string       |
            | site app name           | App BBVA Mexico                                               | string       |
            | project name            | Glomo                                                         | string       |
            | device mobile           | si                                                            | string       |
            | user userState          | logado                                                        | string       |
            | user segment global     | 003001                                                        | string       |
            | user age                | age                                                           | regexp named |
            | profile ID              | profileID                                                     | regexp named |
            | internal campaign       |                                                               | empty array  |
            | optimization attributes |                                                               | empty array  |

    @ANA_CMB006
    @analytics
    @web @ios @android
    @backend(test) @vbank
    @MX @web-done
    Scenario: When Payroll Portability is accessed Click to Call - Internal Link - Phone Icon
        Given a user with the following criteria
            | criteria            |
            | remote banking user |
        And the user starts the application at date:
            | hour  | <hour> |
            | day   | 27     |
            | month | 10     |
            | year  | 2023   |
        When the user accesses the "account payroll portability" screen
        Then the device contains the following variables
            | item                | value                                                          | type         |
            | analytics           | analytics/glomo_base                                           | json schema  |
            | version DL          | 20250414_5.0                                                   | string       |
            | page name           | app:privada:personas:cuentas:portabilidad nomina:1 beneficios  | string       |
            | level 1             | cuentas                                                        | string       |
            | level 2             | portabilidad nomina                                            | string       |
            | level 3             | 1 beneficios                                                   | string       |
            | link name           |                                                                | string       |
            | language            | ES                                                             | string       |
            | page area           | privada                                                        | string       |
            | page intent         | transaccion                                                    | string       |
            | channel             | online                                                         | string       |
            | page instance ID    | de                                                             | string       |
            | page info version   | appVersion                                                     | regexp named |
            | page segment        | personas                                                       | string       |
            | sysEnv              | app                                                            | string       |
            | business unit       | BBVA Mexico                                                    | string       |
            | site app name       | App BBVA Mexico                                                | string       |
            | project name        | Glomo                                                          | string       |
            | device mobile       | si                                                             | string       |
            | user userState      | logado                                                         | string       |
            | user segment global | 003001                                                         | string       |
            | user age            | age                                                            | regexp named |
            | profile ID          | profileID                                                      | regexp named |

    @ANA_CMB007
    @analytics
    @web @ios @android
    @backend(test) @vbank
    @tmpExclude @JIRA.GLOMOGL-34070
    @MX
    @web-done
    Scenario: When deposit hiring operation is accessed Click to Call - Internal Link - Sticky
        Given a user with the following criteria
            | criteria             |
            | offer deposit hiring |
        And the user starts the application at date:
            | hour  | <hour> |
            | day   | 27     |
            | month | 10     |
            | year  | 2023   |
        When the user goes to the contract page
        And the user close tooltip
        And the user accesses to I want to call a personal advisor "link"
        Then the device contains the following variables
            | item                    | value                                                            | type             |
            | analytics               | analytics/glomo_base                                             | json schema      |
            | version DL              | 20250414_5.0                                                     | string           |
            | page name               | app:privada:personas:inversiones:inversion a plazos:1 simulacion | string           |
            | level 1                 | inversiones                                                      | string           |
            | level 2                 | inversion a plazos                                               | string           |
            | level 3                 | 1 simulacion                                                     | string           |
            | link name               | sticky call me back                                              | string           |
            | language                | ES                                                               | string           |
            | page area               | privada                                                          | string           |
            | page intent             | transaccion                                                      | string           |
            | channel                 | online                                                           | string           |
            | page instance ID        | de                                                               | string           |
            | page info version       | appVersion                                                       | regexp named     |
            | page segment            | personas                                                         | string           |
            | sysEnv                  | app                                                              | string           |
            | business unit           | BBVA Mexico                                                      | string           |
            | site app name           | App BBVA Mexico                                                  | string           |
            | project name            | Glomo                                                            | string           |
            | device mobile           | si                                                               | string           |
            | user userState          | logado                                                           | string           |
            | user segment global     | 003001                                                           | string           |
            | user age                | age                                                              | regexp named     |
            | profile ID              | profileID                                                        | regexp named     |
            | internal campaign       |                                                                  | empty array      |
            | optimization attributes |                                                                  | empty array      |
            | application             |                                                                  | empty str object |
            | products attributes     |                                                                  | empty array      |

    @ANA_CMB008
    @analytics
    @web @ios @android
    @backend(test) @vbank
    @tmpExclude @JIRA.GLOMOGL-34070
    @MX
    @web-done
    Scenario: When deposit hiring operationy is accessed Click to Call - Internal Link - Phone Icon
        Given a user with the following criteria
            | criteria             |
            | offer deposit hiring |
        And the user starts the application at date:
            | hour  | <hour> |
            | day   | 27     |
            | month | 10     |
            | year  | 2023   |
        When the user goes to the contract page
        And the user close tooltip
        And the user accesses to I want to call a personal advisor "header"
        Then the device contains the following variables
            | item                    | value                                                            | type             |
            | analytics               | analytics/glomo_base                                             | json schema      |
            | version DL              | 20250414_5.0                                                     | string           |
            | page name               | app:privada:personas:inversiones:inversion a plazos:1 simulacion | string           |
            | level 1                 | inversiones                                                      | string           |
            | level 2                 | inversion a plazos                                               | string           |
            | level 3                 | 1 simulacion                                                     | string           |
            | link name               | icono telefono call me back                                      | string           |
            | language                | ES                                                               | string           |
            | page area               | privada                                                          | string           |
            | page intent             | transaccion                                                      | string           |
            | channel                 | online                                                           | string           |
            | page instance ID        | de                                                               | string           |
            | page info version       | appVersion                                                       | regexp named     |
            | page segment            | personas                                                         | string           |
            | sysEnv                  | app                                                              | string           |
            | business unit           | BBVA Mexico                                                      | string           |
            | site app name           | App BBVA Mexico                                                  | string           |
            | project name            | Glomo                                                            | string           |
            | device mobile           | si                                                               | string           |
            | user userState          | logado                                                           | string           |
            | user segment global     | 003001                                                           | string           |
            | user age                | age                                                              | regexp named     |
            | profile ID              | profileID                                                        | regexp named     |
            | internal campaign       |                                                                  | empty array      |
            | optimization attributes |                                                                  | empty array      |
            | application             |                                                                  | empty str object |
            | products attributes     |                                                                  | empty array      |

    @ANA_CMB009
    @analytics
    @web @ios @android
    @backend(test) @vbank
    @MX
    @web-done
    Scenario: When Mortgage is accessed Call Me Back - Internal Link - Sticky
        Given a user with the following criteria
            | criteria                   |
            | remote assistance mortgage |
        And the user starts the application at date:
            | hour  | <hour> |
            | day   | 27     |
            | month | 10     |
            | year  | 2023   |
        When the user accesses the lead mortgage offer
        And the user accesses to I want to call a personal advisor "link"
        Then the device contains the following variables
            | item                    | value                                                                           | type             |
            | analytics               | analytics/glomo_base                                                            | json schema      |
            | version DL              | 20250414_5.0                                                                    | string           |
            | page name               | app:privada:personas:prestamos:credito hipotecario one click:1 introducir datos | string           |
            | level 1                 | prestamos                                                                       | string           |
            | level 2                 | credito hipotecario one click                                                   | string           |
            | level 3                 | 1 introducir datos                                                              | string           |
            | link name               | sticky call me back                                                             | string           |
            | language                | ES                                                                              | string           |
            | page area               | privada                                                                         | string           |
            | page intent             | transaccion                                                                     | string           |
            | channel                 | online                                                                          | string           |
            | page instance ID        | de                                                                              | string           |
            | page info version       | appVersion                                                                      | regexp named     |
            | page segment            | personas                                                                        | string           |
            | sysEnv                  | app                                                                             | string           |
            | business unit           | BBVA Mexico                                                                     | string           |
            | site app name           | App BBVA Mexico                                                                 | string           |
            | project name            | Glomo                                                                           | string           |
            | device mobile           | si                                                                              | string           |
            | user userState          | logado                                                                          | string           |
            | user segment global     | 003001                                                                          | string           |
            | user age                | age                                                                             | regexp named     |
            | profile ID              | profileID                                                                       | regexp named     |
            | internal campaign       |                                                                                 | empty array      |
            | optimization attributes |                                                                                 | empty array      |
            | application             |                                                                                 | empty str object |
            | products attributes     |                                                                                 | empty array      |

    @ANA_CMB010
    @analytics
    @web @ios @android
    @backend(test) @vbank
    @MX
    @web-done
    Scenario: When Mortgage is accessed Call Me Back - Internal Link - Phone Icon
        Given a user with the following criteria
            | criteria                   |
            | remote assistance mortgage |
        And the user starts the application at date:
            | hour  | <hour> |
            | day   | 27     |
            | month | 10     |
            | year  | 2023   |
        When the user accesses the lead mortgage offer
        And the user accesses to I want to call a personal advisor "header"
        Then the device contains the following variables
            | item                    | value                                                                           | type             |
            | analytics               | analytics/glomo_base                                                            | json schema      |
            | version DL              | 20250414_5.0                                                                    | string           |
            | page name               | app:privada:personas:prestamos:credito hipotecario one click:1 introducir datos | string           |
            | level 1                 | prestamos                                                                       | string           |
            | level 2                 | credito hipotecario one click                                                   | string           |
            | level 3                 | 1 introducir datos                                                              | string           |
            | link name               | icono telefono call me back                                                     | string           |
            | language                | ES                                                                              | string           |
            | page area               | privada                                                                         | string           |
            | page intent             | transaccion                                                                     | string           |
            | channel                 | online                                                                          | string           |
            | page instance ID        | de                                                                              | string           |
            | page info version       | appVersion                                                                      | regexp named     |
            | page segment            | personas                                                                        | string           |
            | sysEnv                  | app                                                                             | string           |
            | business unit           | BBVA Mexico                                                                     | string           |
            | site app name           | App BBVA Mexico                                                                 | string           |
            | project name            | Glomo                                                                           | string           |
            | device mobile           | si                                                                              | string           |
            | user userState          | logado                                                                          | string           |
            | user segment global     | 003001                                                                          | string           |
            | user age                | age                                                                             | regexp named     |
            | profile ID              | profileID                                                                       | regexp named     |
            | internal campaign       |                                                                                 | empty array      |
            | optimization attributes |                                                                                 | empty array      |
            | application             |                                                                                 | empty str object |
            | products attributes     |                                                                                 | empty array      |

    @ANA_CMB011
    @analytics
    @web @ios @android
    @backend(test) @vbank
    @MX @manual @JIRA.GLOMOMX-222733
    @web-done
    Scenario: When Funds Hiring is accessed Call Me Back - Internal Link - Sticky
        Given a user with the following criteria
            | criteria                       |
            | remote assistance funds hiring |
        And the user starts the application at date:
            | hour  | <hour> |
            | day   | 27     |
            | month | 10     |
            | year  | 2023   |
        And the user goes to the funds hiring operation
        When the user accesses to I want to call a personal advisor "link"
        Then the device contains the following variables
            | item                    | value                                                     | type             |
            | analytics               | analytics/glomo_base                                      | json schema      |
            | version DL              | 20250414_5.0                                              | string           |
            | page name               | app:privada:personas:fondos flujo unificado:1 informacion | string           |
            | level 1                 | fondos flujo unificado                                    | string           |
            | level 2                 | 1 informacion                                             | string           |
            | link name               | sticky call me back                                       | string           |
            | language                | ES                                                        | string           |
            | page area               | privada                                                   | string           |
            | page intent             | transaccion                                               | string           |
            | channel                 | online                                                    | string           |
            | page instance ID        | de                                                        | string           |
            | page info version       | appVersion                                                | regexp named     |
            | page segment            | personas                                                  | string           |
            | sysEnv                  | app                                                       | string           |
            | business unit           | BBVA Mexico                                               | string           |
            | site app name           | App BBVA Mexico                                           | string           |
            | project name            | Glomo                                                     | string           |
            | device mobile           | si                                                        | string           |
            | user userState          | logado                                                    | string           |
            | user segment global     | 003001                                                    | string           |
            | user age                | age                                                       | regexp named     |
            | profile ID              | profileID                                                 | regexp named     |
            | internal campaign       |                                                           | empty array      |
            | optimization attributes |                                                           | empty array      |
            | application             |                                                           | empty str object |
            | products attributes     |                                                           | empty array      |

    @ANA_CMB012
    @analytics
    @web @ios @android
    @backend(test) @vbank
    @MX @manual @JIRA.GLOMOMX-222733
    @web-done
    Scenario: WWhen Funds Hirings is accessed Call Me Back - Internal Link - Phone Icon
        Given a user with the following criteria
            | criteria                       |
            | remote assistance funds hiring |
        And the user starts the application at date:
            | hour  | <hour> |
            | day   | 27     |
            | month | 10     |
            | year  | 2023   |
        When the user goes to the funds hiring operation
        And the user accesses to I want to call a personal advisor "header"
        Then the device contains the following variables
            | item                    | value                                                     | type             |
            | analytics               | analytics/glomo_base                                      | json schema      |
            | version DL              | 20250414_5.0                                              | string           |
            | page name               | app:privada:personas:fondos flujo unificado:1 informacion | string           |
            | level 1                 | fondos flujo unificado                                    | string           |
            | level 2                 | 1 informacion                                             | string           |
            | link name               | icono telefono call me back                               | string           |
            | language                | ES                                                        | string           |
            | page area               | privada                                                   | string           |
            | page intent             | transaccion                                               | string           |
            | channel                 | online                                                    | string           |
            | page instance ID        | de                                                        | string           |
            | page info version       | appVersion                                                | regexp named     |
            | page segment            | personas                                                  | string           |
            | sysEnv                  | app                                                       | string           |
            | business unit           | BBVA Mexico                                               | string           |
            | site app name           | App BBVA Mexico                                           | string           |
            | project name            | Glomo                                                     | string           |
            | device mobile           | si                                                        | string           |
            | user userState          | logado                                                    | string           |
            | user segment global     | 003001                                                    | string           |
            | user age                | age                                                       | regexp named     |
            | profile ID              | profileID                                                 | regexp named     |
            | internal campaign       |                                                           | empty array      |
            | optimization attributes |                                                           | empty array      |
            | application             |                                                           | empty str object |
            | products attributes     |                                                           | empty array      |

    @ANA_CMB013
    @analytics
    @web @ios @android
    @backend(test) @vbank
    @MX
    @web-done
    Scenario: When Life Insurance is accessed Call Me Back - Internal Link - Sticky
        Given a user with the following criteria
            | criteria                           |
            | remote banking user life insurance |
        And the user starts the application at date:
            | hour  | <hour> |
            | day   | 27     |
            | month | 10     |
            | year  | 2023   |
        And the user accesses to dynamic life insurance offer
        When the user accesses to I want to call a personal advisor "link"
        Then the device contains the following variables
            | item                    | value                                                                              | type             |
            | analytics               | analytics/glomo_base                                                               | json schema      |
            | version DL              | 20250414_5.0                                                                       | string           |
            | page name               | app:privada:personas:seguro vida dinamico:seguro vida dinamico one click:1 detalle | string           |
            | level 1                 | seguro vida dinamico                                                               | string           |
            | level 2                 | seguro vida dinamico one click                                                     | string           |
            | level 3                 | 1 detalle                                                                          | string           |
            | link name               | sticky call me back                                                                | string           |
            | language                | ES                                                                                 | string           |
            | page area               | privada                                                                            | string           |
            | page intent             | transaccion                                                                        | string           |
            | channel                 | online                                                                             | string           |
            | page instance ID        | de                                                                                 | string           |
            | page info version       | appVersion                                                                         | regexp named     |
            | page segment            | personas                                                                           | string           |
            | sysEnv                  | app                                                                                | string           |
            | business unit           | BBVA Mexico                                                                        | string           |
            | site app name           | App BBVA Mexico                                                                    | string           |
            | project name            | Glomo                                                                              | string           |
            | device mobile           | si                                                                                 | string           |
            | user userState          | logado                                                                             | string           |
            | user segment global     | 003001                                                                             | string           |
            | user age                | age                                                                                | regexp named     |
            | profile ID              | profileID                                                                          | regexp named     |
            | internal campaign       |                                                                                    | empty array      |
            | optimization attributes |                                                                                    | empty array      |
            | application             |                                                                                    | empty str object |
            | products attributes     |                                                                                    | empty array      |

    @ANA_CMB014
    @analytics
    @web @ios @android
    @backend(test) @vbank
    @MX
    @web-done
    Scenario: When Life Insurance is accessed Call Me Back - Internal Link - Phone Icon
        Given a user with the following criteria
            | criteria                           |
            | remote banking user life insurance |
        And the user starts the application at date:
            | hour  | <hour> |
            | day   | 27     |
            | month | 10     |
            | year  | 2023   |
        And the user accesses to dynamic life insurance offer
        When the user accesses to I want to call a personal advisor "header"
        Then the device contains the following variables
            | item                    | value                                                                              | type             |
            | analytics               | analytics/glomo_base                                                               | json schema      |
            | version DL              | 20250414_5.0                                                                       | string           |
            | page name               | app:privada:personas:seguro vida dinamico:seguro vida dinamico one click:1 detalle | string           |
            | level 1                 | seguro vida dinamico                                                               | string           |
            | level 2                 | seguro vida dinamico one click                                                     | string           |
            | level 3                 | 1 detalle                                                                          | string           |
            | link name               | icono telefono call me back                                                        | string           |
            | language                | ES                                                                                 | string           |
            | page area               | privada                                                                            | string           |
            | page intent             | transaccion                                                                        | string           |
            | channel                 | online                                                                             | string           |
            | page instance ID        | de                                                                                 | string           |
            | page info version       | appVersion                                                                         | regexp named     |
            | page segment            | personas                                                                           | string           |
            | sysEnv                  | app                                                                                | string           |
            | business unit           | BBVA Mexico                                                                        | string           |
            | site app name           | App BBVA Mexico                                                                    | string           |
            | project name            | Glomo                                                                              | string           |
            | device mobile           | si                                                                                 | string           |
            | user userState          | logado                                                                             | string           |
            | user segment global     | 003001                                                                             | string           |
            | user age                | age                                                                                | regexp named     |
            | profile ID              | profileID                                                                          | regexp named     |
            | internal campaign       |                                                                                    | empty array      |
            | optimization attributes |                                                                                    | empty array      |
            | application             |                                                                                    | empty str object |
            | products attributes     |                                                                                    | empty array      |

    @ANA_CMB015
    @analytics
    @web @ios @android
    @backend(test) @vbank
    @MX
    @web-done
    Scenario: When Travel Insurance is accessed Call Me Back - Internal Link - Sticky
        Given a user with the following criteria
            | criteria              |
            | travel insurance user |
        And the user starts the application at date:
            | hour  | <hour> |
            | day   | 27     |
            | month | 10     |
            | year  | 2023   |
        And the user goes to the travel insurance operation
        When the user accesses to I want to call a personal advisor "link"
        Then the device contains the following variables
            | item                    | value                                       | type             |
            | analytics               | analytics/glomo_base                        | json schema      |
            | version DL              | 20250414_5.0                                | string           |
            | page name               | app:privada:personas:seguro viaje:1 detalle | string           |
            | level 1                 | seguro viaje                                | string           |
            | level 2                 | 1 detalle                                   | string           |
            | link name               | sticky call me back                         | string           |
            | language                | ES                                          | string           |
            | page area               | privada                                     | string           |
            | page intent             | transaccion                                 | string           |
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
            | user age                | age                                         | regexp named     |
            | profile ID              | profileID                                   | regexp named     |
            | internal campaign       |                                             | empty array      |
            | optimization attributes |                                             | empty array      |
            | application             |                                             | empty str object |
            | products attributes     |                                             | empty array      |

    @ANA_CMB016
    @analytics
    @web @ios @android
    @backend(test) @vbank
    @MX
    @web-done
    Scenario: When Travel Insurance is accessed Call Me Back - Internal Link - Phone Icon
        Given a user with the following criteria
            | criteria              |
            | travel insurance user |
        And the user starts the application at date:
            | hour  | <hour> |
            | day   | 27     |
            | month | 10     |
            | year  | 2023   |
        And the user goes to the travel insurance operation
        When the user accesses to I want to call a personal advisor "header"
        Then the device contains the following variables
            | item                    | value                                       | type             |
            | analytics               | analytics/glomo_base                        | json schema      |
            | version DL              | 20250414_5.0                                | string           |
            | page name               | app:privada:personas:seguro viaje:1 detalle | string           |
            | level 1                 | seguro viaje                                | string           |
            | level 2                 | 1 detalle                                   | string           |
            | link name               | icono telefono call me back                 | string           |
            | language                | ES                                          | string           |
            | page area               | privada                                     | string           |
            | page intent             | transaccion                                 | string           |
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
            | user age                | age                                         | regexp named     |
            | profile ID              | profileID                                   | regexp named     |
            | internal campaign       |                                             | empty array      |
            | optimization attributes |                                             | empty array      |
            | application             |                                             | empty str object |
            | products attributes     |                                             | empty array      |

    @ANA_CMB017
    @analytics
    @web @ios @android
    @backend(test) @vbank
    @MX
    @web-done
    Scenario: When ocMetasegura is accessed Call Me Back - Internal Link - Sticky
        Given a user with the following criteria
            | criteria                       |
            | remote banking metasegura user |
        And the user starts the application at date:
            | hour  | <hour> |
            | day   | 27     |
            | month | 10     |
            | year  | 2023   |
        And the user accesses to the metasegura offer detail
        And the user close call me back tooltip
        When the user accesses to I want to call a personal advisor "link"
        Then the device contains the following variables
            | item                    | value                                              | type             |
            | analytics               | analytics/glomo_base                               | json schema      |
            | version DL              | 20250414_5.0                                       | string           |
            | page name               | app:privada:personas:meta segura:1 caracteristicas | string           |
            | level 1                 | meta segura                                        | string           |
            | level 2                 | 1 caracteristicas                                  | string           |
            | link name               | sticky call me back                                | string           |
            | language                | ES                                                 | string           |
            | page area               | privada                                            | string           |
            | page intent             | transaccion                                        | string           |
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
            | user age                | age                                                | regexp named     |
            | profile ID              | profileID                                          | regexp named     |
            | internal campaign       |                                                    | empty array      |
            | optimization attributes |                                                    | empty array      |
            | application             |                                                    | empty str object |
            | products attributes     |                                                    | empty array      |

    @ANA_CMB018
    @analytics
    @web @ios @android
    @backend(test) @vbank
    @MX
    @web-done
    Scenario: When ocMetasegura is accessed Call Me Back - Internal Link - Phone Icon
        Given a user with the following criteria
            | criteria                       |
            | remote banking metasegura user |
        And the user starts the application at date:
            | hour  | <hour> |
            | day   | 27     |
            | month | 10     |
            | year  | 2023   |
        And the user accesses to the metasegura offer detail
        When the user accesses to I want to call a personal advisor "header"
        Then the device contains the following variables
            | item                    | value                                              | type             |
            | analytics               | analytics/glomo_base                               | json schema      |
            | version DL              | 20250414_5.0                                       | string           |
            | page name               | app:privada:personas:meta segura:1 caracteristicas | string           |
            | level 1                 | meta segura                                        | string           |
            | level 2                 | 1 caracteristicas                                  | string           |
            | link name               | icono telefono call me back                        | string           |
            | language                | ES                                                 | string           |
            | page area               | privada                                            | string           |
            | page intent             | transaccion                                        | string           |
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
            | user age                | age                                                | regexp named     |
            | profile ID              | profileID                                          | regexp named     |
            | internal campaign       |                                                    | empty array      |
            | optimization attributes |                                                    | empty array      |
            | application             |                                                    | empty str object |
            | products attributes     |                                                    | empty array      |

    @ANA_EVENT_CMB019
    @analytics
    @web @ios @android
    @backend(test) @vbank
    @MX
    @web-done
    @timemachine
    Scenario: When nonPreApprovedCarCertificate is accessed Call Me Back - Internal Link - Sticky
        Given a user with the following criteria
            | criteria                         |
            | non pre approved car certificate |
            | car loan                         |
        And the user starts the application at date:
            | hour  | 10   |
            | day   | 27   |
            | month | 10   |
            | year  | 2023 |
        And the user accesses to non pre approved car certificate "main" screen
        And the analytics interceptor service is initiated
        When the user accesses to I want to call a personal advisor "link" in step "1"
        Then the analytics events contains the following variables
            | item                    | value                                                                 | type             | event         |
            | analytics               | analytics/glomo_base                                                  | json schema      | Internal Link |
            | version DL              | 20250414_5.0                                                          | string           | Internal Link |
            | page name               | app:privada:personas:prestamos:contratacion credito auto:1 cotizacion | string           | Internal Link |
            | level 1                 | prestamos                                                             | string           | Internal Link |
            | level 2                 | contratacion credito auto                                             | string           | Internal Link |
            | level 3                 | 1 cotizacion                                                          | string           | Internal Link |
            | link name               | sticky call me back                                                   | string           | Internal Link |
            | language                | ES                                                                    | string           | Internal Link |
            | page area               | privada                                                               | string           | Internal Link |
            | page intent             | transaccion                                                           | string           | Internal Link |
            | channel                 | online                                                                | string           | Internal Link |
            | page instance ID        | de                                                                    | string           | Internal Link |
            | page info version       | appVersion                                                            | regexp named     | Internal Link |
            | page segment            | personas                                                              | string           | Internal Link |
            | sysEnv                  | app                                                                   | string           | Internal Link |
            | business unit           | BBVA Mexico                                                           | string           | Internal Link |
            | site app name           | App BBVA Mexico                                                       | string           | Internal Link |
            | project name            | Glomo                                                                 | string           | Internal Link |
            | device mobile           | si                                                                    | string           | Internal Link |
            | user userState          | logado                                                                | string           | Internal Link |
            | user segment global     | 003001                                                                | string           | Internal Link |
            | user age                | age                                                                   | regexp named     | Internal Link |
            | profile ID              | profileID                                                             | regexp named     | Internal Link |
            | internal campaign       |                                                                       | empty array      | Internal Link |
            | optimization attributes |                                                                       | empty array      | Internal Link |
            | application             |                                                                       | empty str object | Internal Link |
            | products attributes     |                                                                       | empty array      | Internal Link |

    @ANA_EVENT_CMB020
    @analytics
    @web @ios @android
    @backend(test) @vbank
    @MX
    @web-done
    @timemachine
    Scenario: When nonPreApprovedCarCertificate is accessed Call Me Back - Internal Link - Phone Icon
        Given a user with the following criteria
            | criteria                         |
            | non pre approved car certificate |
            | car loan                         |
        And the user starts the application at date:
            | hour  | 10   |
            | day   | 27   |
            | month | 10   |
            | year  | 2023 |
        And the user accesses to non pre approved car certificate "main" screen
        And the analytics interceptor service is initiated
        When the user accesses to I want to call a personal advisor "header"
        Then the analytics events contains the following variables
            | item                    | value                                                                 | type             | event         |
            | analytics               | analytics/glomo_base                                                  | json schema      | Internal Link |
            | version DL              | 20250414_5.0                                                          | string           | Internal Link |
            | page name               | app:privada:personas:prestamos:contratacion credito auto:1 cotizacion | string           | Internal Link |
            | level 1                 | prestamos                                                             | string           | Internal Link |
            | level 2                 | contratacion credito auto                                             | string           | Internal Link |
            | level 3                 | 1 cotizacion                                                          | string           | Internal Link |
            | link name               | icono telefono call me back                                           | string           | Internal Link |
            | language                | ES                                                                    | string           | Internal Link |
            | page area               | privada                                                               | string           | Internal Link |
            | page intent             | transaccion                                                           | string           | Internal Link |
            | channel                 | online                                                                | string           | Internal Link |
            | page instance ID        | de                                                                    | string           | Internal Link |
            | page info version       | appVersion                                                            | regexp named     | Internal Link |
            | page segment            | personas                                                              | string           | Internal Link |
            | sysEnv                  | app                                                                   | string           | Internal Link |
            | business unit           | BBVA Mexico                                                           | string           | Internal Link |
            | site app name           | App BBVA Mexico                                                       | string           | Internal Link |
            | project name            | Glomo                                                                 | string           | Internal Link |
            | device mobile           | si                                                                    | string           | Internal Link |
            | user userState          | logado                                                                | string           | Internal Link |
            | user segment global     | 003001                                                                | string           | Internal Link |
            | user age                | age                                                                   | regexp named     | Internal Link |
            | profile ID              | profileID                                                             | regexp named     | Internal Link |
            | internal campaign       |                                                                       | empty array      | Internal Link |
            | optimization attributes |                                                                       | empty array      | Internal Link |
            | application             |                                                                       | empty str object | Internal Link |
            | products attributes     |                                                                       | empty array      | Internal Link |

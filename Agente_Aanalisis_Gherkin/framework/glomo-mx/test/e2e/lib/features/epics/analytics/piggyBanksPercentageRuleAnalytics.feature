@piggyBanksPercentageRuleAnalytics
Feature: Analytics - Piggy Banks Percentage Rule

    @ANA_EVENT_PGP001
    @MX
    @analytics
    @vbank @backend(test)
    @web @ios @android
    @web-done
    Scenario: Create piggy bank percentage rule - App On Click Start
        Given a user with the following criteria
            | criteria                    |
            | piggy banks percentage rule |
        And the user accesses to dashboard
        And the user goes to "piggy bank percentage rule" using deeplink navigation
        And the analytics interceptor service is initiated
        When the user closes piggy bank percentage rule onboarding
        Then the analytics events contains the following variables
            | item                | value                                            | type         | event              |
            | analytics           | analytics/glomo_base                             | json schema  | App On Click Start |
            | version DL          | 20250414_5.0                                     | string       | App On Click Start |
            | page intent         | informacion                                      | string       | App On Click Start |
            | page segment        | personas                                         | string       | App On Click Start |
            | page name           | app:privada:personas:cuentas:apartado:onboarding | string       | App On Click Start |
            | sysEnv              | app                                              | string       | App On Click Start |
            | channel             | online                                           | string       | App On Click Start |
            | language            | ES                                               | string       | App On Click Start |
            | level 1             | cuentas                                          | string       | App On Click Start |
            | level 2             | apartado                                         | string       | App On Click Start |
            | level 3             | onboarding                                       | string       | App On Click Start |
            | business unit       | BBVA Mexico                                      | string       | App On Click Start |
            | site app name       | App BBVA Mexico                                  | string       | App On Click Start |
            | project name        | Glomo                                            | string       | App On Click Start |
            | page area           | privada                                          | string       | App On Click Start |
            | device user agent   | GLOMO_MX/99.99.99 (Android;14;Samsung)           | string       | App On Click Start |
            | device mobile       | si                                               | string       | App On Click Start |
            | device root         |                                                  | string       | App On Click Start |
            | user userState      | logado                                           | string       | App On Click Start |
            | user segment global | 003001                                           | string       | App On Click Start |
            | user gender         | gender                                           | regexp named | App On Click Start |
            | user age            | age                                              | regexp named | App On Click Start |
            | fulfillment model   | online                                           | string       | App On Click Start |
            | application type    | operativa                                        | string       | App On Click Start |
            | application name    | apartado aportacion automatica                   | string       | App On Click Start |
            | application step    | crear apartado                                   | string       | App On Click Start |
            | global application  | pockets                                          | string       | App On Click Start |

    @ANA_EVENT_PGP002
    @MX
    @analytics
    @vbank @backend(test)
    @web @ios @android
    @web-done
    Scenario: Create piggy bank percentage rule - App Page Visit
        Given a user with the following criteria
            | criteria                    |
            | piggy banks percentage rule |
        And the user accesses to dashboard
        And the user goes to "piggy bank percentage rule" using deeplink navigation
        And the analytics interceptor service is initiated
        When the user closes piggy bank percentage rule onboarding
        Then the analytics events contains the following variables
            | item                     | value                                                                            | type         | event          |
            | analytics                | analytics/glomo_base                                                             | json schema  | App Page Visit |
            | version DL               | 20250414_5.0                                                                     | string       | App Page Visit |
            | page intent              | transaccion                                                                      | string       | App Page Visit |
            | page segment             | personas                                                                         | string       | App Page Visit |
            | page name                | app:privada:personas:cuentas:apartado aportacion automatica:1 datos del apartado | string       | App Page Visit |
            | sysEnv                   | app                                                                              | string       | App Page Visit |
            | channel                  | online                                                                           | string       | App Page Visit |
            | language                 | ES                                                                               | string       | App Page Visit |
            | level 1                  | cuentas                                                                          | string       | App Page Visit |
            | level 2                  | apartado aportacion automatica                                                   | string       | App Page Visit |
            | level 3                  | 1 datos del apartado                                                             | string       | App Page Visit |
            | business unit            | BBVA Mexico                                                                      | string       | App Page Visit |
            | site app name            | App BBVA Mexico                                                                  | string       | App Page Visit |
            | project name             | Glomo                                                                            | string       | App Page Visit |
            | page area                | privada                                                                          | string       | App Page Visit |
            | device user agent        | GLOMO_MX/99.99.99 (Android;14;Samsung)                                           | string       | App Page Visit |
            | device mobile            | si                                                                               | string       | App Page Visit |
            | device root              |                                                                                  | string       | App Page Visit |
            | user userState           | logado                                                                           | string       | App Page Visit |
            | user segment global      | 003001                                                                           | string       | App Page Visit |
            | user gender              | gender                                                                           | regexp named | App Page Visit |
            | user age                 | age                                                                              | regexp named | App Page Visit |
            | product primary category | cuentas                                                                          | string       | App Page Visit |
            | product name             |                                                                                  | string       | App Page Visit |
            | fulfillment model        | online                                                                           | string       | App Page Visit |
            | application type         | operativa                                                                        | string       | App Page Visit |
            | application name         | apartado aportacion automatica                                                   | string       | App Page Visit |
            | application step         | 1 datos del apartado                                                             | string       | App Page Visit |
            | global application       | pockets                                                                          | string       | App Page Visit |

    @ANA_EVENT_PGP003
    @MX
    @analytics
    @vbank @backend(test)
    @web @ios @android
    @web-done
    Scenario: Select TDC - App Started
        Given a user with the following criteria
            | criteria                    |
            | piggy banks percentage rule |
        And the user accesses to dashboard
        And the user goes to "piggy bank percentage rule" using deeplink navigation
        And the user closes piggy bank percentage rule onboarding
        And the analytics interceptor service is initiated
        When the user select its TDC
        Then the analytics events contains the following variables
            | item                     | value                                                                            | type         | event       |
            | analytics                | analytics/glomo_base                                                             | json schema  | App Started |
            | version DL               | 20250414_5.0                                                                     | string       | App Started |
            | page intent              | transaccion                                                                      | string       | App Started |
            | page segment             | personas                                                                         | string       | App Started |
            | page name                | app:privada:personas:cuentas:apartado aportacion automatica:1 datos del apartado | string       | App Started |
            | sysEnv                   | app                                                                              | string       | App Started |
            | channel                  | online                                                                           | string       | App Started |
            | language                 | ES                                                                               | string       | App Started |
            | level 1                  | cuentas                                                                          | string       | App Started |
            | level 2                  | apartado aportacion automatica                                                   | string       | App Started |
            | level 3                  | 1 datos del apartado                                                             | string       | App Started |
            | business unit            | BBVA Mexico                                                                      | string       | App Started |
            | site app name            | App BBVA Mexico                                                                  | string       | App Started |
            | project name             | Glomo                                                                            | string       | App Started |
            | page area                | privada                                                                          | string       | App Started |
            | device user agent        | GLOMO_MX/99.99.99 (Android;14;Samsung)                                           | string       | App Started |
            | device mobile            | si                                                                               | string       | App Started |
            | device root              |                                                                                  | string       | App Started |
            | user userState           | logado                                                                           | string       | App Started |
            | user segment global      | 003001                                                                           | string       | App Started |
            | user gender              | gender                                                                           | regexp named | App Started |
            | user age                 | age                                                                              | regexp named | App Started |
            | product primary category | cuentas                                                                          | string       | App Started |
            | product name             | tarjeta nomina basica bbva                                                       | string       | App Started |
            | fulfillment model        | online                                                                           | string       | App Started |
            | application type         | operativa                                                                        | string       | App Started |
            | application name         | apartado aportacion automatica                                                   | string       | App Started |
            | application step         | seleccion tarjeta                                                                | string       | App Started |
            | global application       | pockets                                                                          | string       | App Started |

    @ANA_EVENT_PGP004
    @MX
    @analytics
    @vbank @backend(test)
    @web @ios @android
    @web-done
    Scenario: Piggy Bank Percentage Rule Confirmation - App Step 2
        Given a user with the following criteria
            | criteria                    |
            | piggy banks percentage rule |
        And the user accesses to dashboard
        And the user goes to "piggy bank percentage rule" using deeplink navigation
        And the user completes piggy bank steps
        And the analytics interceptor service is initiated
        When the user "goes" piggy bank summary
        Then the analytics events contains the following variables
            | item                       | value                                                                      | type         | event      |
            | analytics                  | analytics/glomo_base                                                       | json schema  | App Step 2 |
            | version DL                 | 20250414_5.0                                                               | string       | App Step 2 |
            | page intent                | transaccion                                                                | string       | App Step 2 |
            | page segment               | personas                                                                   | string       | App Step 2 |
            | page name                  | app:privada:personas:cuentas:apartado aportacion automatica:2 confirmacion | string       | App Step 2 |
            | sysEnv                     | app                                                                        | string       | App Step 2 |
            | channel                    | online                                                                     | string       | App Step 2 |
            | language                   | ES                                                                         | string       | App Step 2 |
            | level 1                    | cuentas                                                                    | string       | App Step 2 |
            | level 2                    | apartado aportacion automatica                                             | string       | App Step 2 |
            | level 3                    | 2 confirmacion                                                             | string       | App Step 2 |
            | business unit              | BBVA Mexico                                                                | string       | App Step 2 |
            | site app name              | App BBVA Mexico                                                            | string       | App Step 2 |
            | project name               | Glomo                                                                      | string       | App Step 2 |
            | page area                  | privada                                                                    | string       | App Step 2 |
            | device user agent          | GLOMO_MX/99.99.99 (Android;14;Samsung)                                     | string       | App Step 2 |
            | device mobile              | si                                                                         | string       | App Step 2 |
            | device root                |                                                                            | string       | App Step 2 |
            | user userState             | logado                                                                     | string       | App Step 2 |
            | user segment global        | 003001                                                                     | string       | App Step 2 |
            | user gender                | gender                                                                     | regexp named | App Step 2 |
            | user age                   | age                                                                        | regexp named | App Step 2 |
            | product primary category   | cuentas                                                                    | string       | App Step 2 |
            | product primary category 1 | tarjetas                                                                   | string       | App Step 2 |
            | product name               | tarjeta nomina basica bbva                                                 | string       | App Step 2 |
            | product name 1             | tarjeta politecnico                                                        | string       | App Step 2 |
            | fulfillment model          | online                                                                     | string       | App Step 2 |
            | application type           | operativa                                                                  | string       | App Step 2 |
            | application name           | apartado aportacion automatica                                             | string       | App Step 2 |
            | application step           | 2 confirmacion                                                             | string       | App Step 2 |
            | global application         | pockets                                                                    | string       | App Step 2 |

    @ANA_EVENT_PGP005
    @MX
    @analytics
    @vbank @backend(test)
    @web @ios @android
    @web-done
    Scenario: Create piggy bank percentage rule successfully - App Completed
        Given a user with the following criteria
            | criteria                    |
            | piggy banks percentage rule |
        And the user accesses to dashboard
        And the user goes to "piggy bank percentage rule" using deeplink navigation
        And the user "reviews" piggy bank summary
        And the analytics interceptor service is initiated
        When the user confirms piggy bank percentage rule creation
        Then the analytics events contains the following variables
            | item                       | value                                                                      | type         | event         |
            | analytics                  | analytics/glomo_base                                                       | json schema  | App Completed |
            | version DL                 | 20250414_5.0                                                               | string       | App Completed |
            | page intent                | transaccion                                                                | string       | App Completed |
            | page segment               | personas                                                                   | string       | App Completed |
            | page name                  | app:privada:personas:cuentas:apartado aportacion automatica:pagina exitosa | string       | App Completed |
            | sysEnv                     | app                                                                        | string       | App Completed |
            | channel                    | online                                                                     | string       | App Completed |
            | language                   | ES                                                                         | string       | App Completed |
            | level 1                    | cuentas                                                                    | string       | App Completed |
            | level 2                    | apartado aportacion automatica                                             | string       | App Completed |
            | level 3                    | pagina exitosa                                                             | string       | App Completed |
            | business unit              | BBVA Mexico                                                                | string       | App Completed |
            | site app name              | App BBVA Mexico                                                            | string       | App Completed |
            | project name               | Glomo                                                                      | string       | App Completed |
            | page area                  | privada                                                                    | string       | App Completed |
            | device user agent          | GLOMO_MX/99.99.99 (Android;14;Samsung)                                     | string       | App Completed |
            | device mobile              | si                                                                         | string       | App Completed |
            | device root                |                                                                            | string       | App Completed |
            | user userState             | logado                                                                     | string       | App Completed |
            | user segment global        | 003001                                                                     | string       | App Completed |
            | user gender                | gender                                                                     | regexp named | App Completed |
            | user age                   | age                                                                        | regexp named | App Completed |
            | product primary category   | cuentas                                                                    | string       | App Completed |
            | product primary category 1 | tarjetas                                                                   | string       | App Completed |
            | product name               | tarjeta nomina basica bbva                                                 | string       | App Completed |
            | product name 1             | tarjeta oro                                                                | string       | App Completed |
            | product state              | aprobado                                                                   | string       | App Completed |
            | product state 1            | aprobado                                                                   | string       | App Completed |
            | fulfillment model          | online                                                                     | string       | App Completed |
            | application type           | operativa                                                                  | string       | App Completed |
            | application name           | apartado aportacion automatica                                             | string       | App Completed |
            | application step           | pagina exitosa                                                             | string       | App Completed |
            | application state          | aprobado                                                                   | string       | App Completed |
            | global application         | pockets                                                                    | string       | App Completed |

    @ANA_EVENT_PGP006
    @MX
    @analytics
    @vbank @backend(test)
    @web @ios @android
    @web-done
    Scenario: Create piggy bank percentage rule Error - App Completed
        Given a user with the following criteria
            | criteria                    |
            | piggy banks percentage rule |
        And the user accesses to dashboard
        And the user goes to "piggy bank percentage rule" using deeplink navigation
        And the user "reviews" piggy bank summary
        And the analytics interceptor service is initiated
        When the user confirms piggy bank percentage rule creation
        Then the analytics events contains the following variables
            | item                       | value                                                                      | type         | event         |
            | analytics                  | analytics/glomo_base                                                       | json schema  | App Completed |
            | version DL                 | 20250414_5.0                                                               | string       | App Completed |
            | page intent                | transaccion                                                                | string       | App Completed |
            | page segment               | personas                                                                   | string       | App Completed |
            | page name                  | app:privada:personas:cuentas:apartado aportacion automatica:pagina exitosa | string       | App Completed |
            | sysEnv                     | app                                                                        | string       | App Completed |
            | channel                    | online                                                                     | string       | App Completed |
            | language                   | ES                                                                         | string       | App Completed |
            | level 1                    | cuentas                                                                    | string       | App Completed |
            | level 2                    | apartado aportacion automatica                                             | string       | App Completed |
            | level 3                    | pagina exitosa                                                             | string       | App Completed |
            | business unit              | BBVA Mexico                                                                | string       | App Completed |
            | site app name              | App BBVA Mexico                                                            | string       | App Completed |
            | project name               | Glomo                                                                      | string       | App Completed |
            | page area                  | privada                                                                    | string       | App Completed |
            | device user agent          | GLOMO_MX/99.99.99 (Android;14;Samsung)                                     | string       | App Completed |
            | device mobile              | si                                                                         | string       | App Completed |
            | device root                |                                                                            | string       | App Completed |
            | user userState             | logado                                                                     | string       | App Completed |
            | user segment global        | 003001                                                                     | string       | App Completed |
            | user gender                | gender                                                                     | regexp named | App Completed |
            | user age                   | age                                                                        | regexp named | App Completed |
            | product primary category   | cuentas                                                                    | string       | App Completed |
            | product primary category 1 | tarjetas                                                                   | string       | App Completed |
            | product name               | tarjeta nomina basica bbva                                                 | string       | App Completed |
            | product name 1             | tarjeta politecnico                                                        | string       | App Completed |
            | product state              | rechazado                                                                  | string       | App Completed |
            | product state 1            | rechazado                                                                  | string       | App Completed |
            | fulfillment model          | online                                                                     | string       | App Completed |
            | application type           | operativa                                                                  | string       | App Completed |
            | application name           | apartado aportacion automatica                                             | string       | App Completed |
            | application step           | pagina exitosa                                                             | string       | App Completed |
            | application state          | rechazado                                                                  | string       | App Completed |
            | global application         | pockets                                                                    | string       | App Completed |

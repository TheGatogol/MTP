@piggyBanksAnalytics
Feature: Analytics - Piggy Banks

    @ANA_EVENT_PGB001
    @analytics
    @vbank @MX @backend(test)
    @ios @android
    @web @web-done
    Scenario: Create Piggy Bank - App On Click Start
        Given a user with the following criteria
            | criteria                   |
            | piggy banks single account |
        And the user accesses to piggy banks
        And the analytics interceptor service is initiated
        When the user closes piggy banks onboarding
        Then the analytics events contains the following variables
            | item                     | value                                       | type         | event              |
            | analytics                | analytics/glomo_base                        | json schema  | App On Click Start |
            | version DL               | 20250414_5.0                                | string       | App On Click Start |
            | page intent              | transaccion                                 | string       | App On Click Start |
            | page segment             | personas                                    | string       | App On Click Start |
            | page name                | app:privada:personas:cuentas:crear apartado | string       | App On Click Start |
            | sysEnv                   | app                                         | string       | App On Click Start |
            | channel                  | online                                      | string       | App On Click Start |
            | language                 | ES                                          | string       | App On Click Start |
            | level 1                  | cuentas                                     | string       | App On Click Start |
            | level 2                  | crear apartado                              | string       | App On Click Start |
            | business unit            | BBVA Mexico                                 | string       | App On Click Start |
            | site app name            | App BBVA Mexico                             | string       | App On Click Start |
            | project name             | Glomo                                       | string       | App On Click Start |
            | page area                | privada                                     | string       | App On Click Start |
            | device mobile            | si                                          | string       | App On Click Start |
            | device root              |                                             | string       | App On Click Start |
            | user userState           | logado                                      | string       | App On Click Start |
            | user segment global      | 003001                                      | string       | App On Click Start |
            | user gender              | gender                                      | regexp named | App On Click Start |
            | user age                 | age                                         | regexp named | App On Click Start |
            | product primary category | cuentas                                     | string       | App On Click Start |
            | fulfillment model        | online                                      | string       | App On Click Start |
            | application type         | operativa                                   | string       | App On Click Start |
            | application name         | crear apartado                              | string       | App On Click Start |
            | application step         | crear apartado                              | string       | App On Click Start |
            | global application       | pockets                                     | string       | App On Click Start |

    @ANA_EVENT_PGB002
    @analytics
    @vbank @MX @backend(test)
    @ios @android
    @web @web-done
    Scenario: Create Piggy Bank - App Page Visit
        Given a user with the following criteria
            | criteria                   |
            | piggy banks single account |
        And the user accesses to piggy banks
        And the analytics interceptor service is initiated
        When the user closes piggy banks onboarding
        Then the analytics events contains the following variables
            | item                     | value                                                            | type         | event          |
            | analytics                | analytics/glomo_base                                             | json schema  | App Page Visit |
            | version DL               | 20250414_5.0                                                     | string       | App Page Visit |
            | page intent              | transaccion                                                      | string       | App Page Visit |
            | page segment             | personas                                                         | string       | App Page Visit |
            | page name                | app:privada:personas:cuentas:crear apartado:1 datos del apartado | string       | App Page Visit |
            | sysEnv                   | app                                                              | string       | App Page Visit |
            | channel                  | online                                                           | string       | App Page Visit |
            | language                 | ES                                                               | string       | App Page Visit |
            | level 1                  | cuentas                                                          | string       | App Page Visit |
            | level 2                  | crear apartado                                                   | string       | App Page Visit |
            | level 3                  | 1 datos del apartado                                             | string       | App Page Visit |
            | business unit            | BBVA Mexico                                                      | string       | App Page Visit |
            | site app name            | App BBVA Mexico                                                  | string       | App Page Visit |
            | project name             | Glomo                                                            | string       | App Page Visit |
            | page area                | privada                                                          | string       | App Page Visit |
            | device mobile            | si                                                               | string       | App Page Visit |
            | device root              |                                                                  | string       | App Page Visit |
            | user userState           | logado                                                           | string       | App Page Visit |
            | user segment global      | 003001                                                           | string       | App Page Visit |
            | user gender              | gender                                                           | regexp named | App Page Visit |
            | user age                 | age                                                              | regexp named | App Page Visit |
            | product primary category | cuentas                                                          | string       | App Page Visit |
            | product subtype          | cuentas con chequera                                             | string       | App Page Visit |
            | fulfillment model        | online                                                           | string       | App Page Visit |
            | application type         | operativa                                                        | string       | App Page Visit |
            | application name         | crear apartado                                                   | string       | App Page Visit |
            | application step         | 1 datos del apartado                                             | string       | App Page Visit |
            | global application       | pockets                                                          | string       | App Page Visit |

    @ANA_EVENT_PGB003
    @analytics
    @vbank @MX @backend(test)
    @ios @android
    @web @web-done
    Scenario: Piggy Bank Name - App Started
        Given a user with the following criteria
            | criteria                   |
            | piggy banks single account |
        And the user accesses to piggy banks
        And the user closes piggy banks onboarding
        And the analytics interceptor service is initiated
        When the user names its piggy bank
        Then the analytics events contains the following variables
            | item                     | value                                                            | type         | event       |
            | analytics                | analytics/glomo_base                                             | json schema  | App Started |
            | version DL               | 20250414_5.0                                                     | string       | App Started |
            | page intent              | transaccion                                                      | string       | App Started |
            | page segment             | personas                                                         | string       | App Started |
            | page name                | app:privada:personas:cuentas:crear apartado:1 datos del apartado | string       | App Started |
            | sysEnv                   | app                                                              | string       | App Started |
            | channel                  | online                                                           | string       | App Started |
            | language                 | ES                                                               | string       | App Started |
            | level 1                  | cuentas                                                          | string       | App Started |
            | level 2                  | crear apartado                                                   | string       | App Started |
            | level 3                  | 1 datos del apartado                                             | string       | App Started |
            | business unit            | BBVA Mexico                                                      | string       | App Started |
            | site app name            | App BBVA Mexico                                                  | string       | App Started |
            | project name             | Glomo                                                            | string       | App Started |
            | page area                | privada                                                          | string       | App Started |
            | device mobile            | si                                                               | string       | App Started |
            | device root              |                                                                  | string       | App Started |
            | user userState           | logado                                                           | string       | App Started |
            | user segment global      | 003001                                                           | string       | App Started |
            | user gender              | gender                                                           | regexp named | App Started |
            | user age                 | age                                                              | regexp named | App Started |
            | product primary category | cuentas                                                          | string       | App Started |
            | product subtype          | cuentas con chequera                                             | string       | App Started |
            | fulfillment model        | online                                                           | string       | App Started |
            | application type         | operativa                                                        | string       | App Started |
            | application name         | crear apartado                                                   | string       | App Started |
            | application step         | nombre del apartado                                              | string       | App Started |
            | global application       | pockets                                                          | string       | App Started |

    @ANA_EVENT_PGB004
    @analytics
    @vbank @MX @backend(test)
    @ios @android
    @web @web-done
    Scenario: Piggy Bank Amount - App Started
        Given a user with the following criteria
            | criteria                   |
            | piggy banks single account |
        And the user accesses to piggy banks
        And the user closes piggy banks onboarding
        And the analytics interceptor service is initiated
        When the user sets amount to save
        Then the analytics events contains the following variables
            | item                     | value                                                            | type         | event       |
            | analytics                | analytics/glomo_base                                             | json schema  | App Started |
            | version DL               | 20250414_5.0                                                     | string       | App Started |
            | page intent              | transaccion                                                      | string       | App Started |
            | page segment             | personas                                                         | string       | App Started |
            | page name                | app:privada:personas:cuentas:crear apartado:1 datos del apartado | string       | App Started |
            | sysEnv                   | app                                                              | string       | App Started |
            | channel                  | online                                                           | string       | App Started |
            | language                 | ES                                                               | string       | App Started |
            | level 1                  | cuentas                                                          | string       | App Started |
            | level 2                  | crear apartado                                                   | string       | App Started |
            | level 3                  | 1 datos del apartado                                             | string       | App Started |
            | business unit            | BBVA Mexico                                                      | string       | App Started |
            | site app name            | App BBVA Mexico                                                  | string       | App Started |
            | project name             | Glomo                                                            | string       | App Started |
            | page area                | privada                                                          | string       | App Started |
            | device mobile            | si                                                               | string       | App Started |
            | device root              |                                                                  | string       | App Started |
            | user userState           | logado                                                           | string       | App Started |
            | user segment global      | 003001                                                           | string       | App Started |
            | user gender              | gender                                                           | regexp named | App Started |
            | user age                 | age                                                              | regexp named | App Started |
            | product primary category | cuentas                                                          | string       | App Started |
            | product subtype          | cuentas con chequera                                             | string       | App Started |
            | fulfillment model        | online                                                           | string       | App Started |
            | application type         | operativa                                                        | string       | App Started |
            | application name         | crear apartado                                                   | string       | App Started |
            | application step         | monto                                                            | string       | App Started |
            | global application       | pockets                                                          | string       | App Started |

    @ANA_EVENT_PGB005
    @analytics
    @vbank @MX @backend(test)
    @ios @android
    @web @web-done
    Scenario: Automatic Contributions - App Started
        Given a user with the following criteria
            | criteria                   |
            | piggy banks single account |
        And the user accesses to piggy banks
        And the user closes piggy banks onboarding
        And the analytics interceptor service is initiated
        When the user enables automatic contributions
        Then the analytics events contains the following variables
            | item                     | value                                                            | type         | event       |
            | analytics                | analytics/glomo_base                                             | json schema  | App Started |
            | version DL               | 20250414_5.0                                                     | string       | App Started |
            | page intent              | transaccion                                                      | string       | App Started |
            | page segment             | personas                                                         | string       | App Started |
            | page name                | app:privada:personas:cuentas:crear apartado:1 datos del apartado | string       | App Started |
            | sysEnv                   | app                                                              | string       | App Started |
            | channel                  | online                                                           | string       | App Started |
            | language                 | ES                                                               | string       | App Started |
            | level 1                  | cuentas                                                          | string       | App Started |
            | level 2                  | crear apartado                                                   | string       | App Started |
            | level 3                  | 1 datos del apartado                                             | string       | App Started |
            | business unit            | BBVA Mexico                                                      | string       | App Started |
            | site app name            | App BBVA Mexico                                                  | string       | App Started |
            | project name             | Glomo                                                            | string       | App Started |
            | page area                | privada                                                          | string       | App Started |
            | device mobile            | si                                                               | string       | App Started |
            | device root              |                                                                  | string       | App Started |
            | user userState           | logado                                                           | string       | App Started |
            | user segment global      | 003001                                                           | string       | App Started |
            | user gender              | gender                                                           | regexp named | App Started |
            | user age                 | age                                                              | regexp named | App Started |
            | product primary category | cuentas                                                          | string       | App Started |
            | product subtype          | cuentas con chequera                                             | string       | App Started |
            | fulfillment model        | online                                                           | string       | App Started |
            | application type         | operativa                                                        | string       | App Started |
            | application name         | crear apartado                                                   | string       | App Started |
            | application step         | aportaciones automaticas                                         | string       | App Started |
            | global application       | pockets                                                          | string       | App Started |

    @ANA_EVENT_PGB006
    @analytics
    @vbank @MX @backend(test)
    @ios @android
    @web @web-done
    Scenario: Scheduled Contributions - Page View
        Given a user with the following criteria
            | criteria                   |
            | piggy banks single account |
        And the user accesses to piggy banks
        And the user closes piggy banks onboarding
        And the analytics interceptor service is initiated
        When the user tries to create an automatic contribution
        Then the analytics events contains the following variables
            | item                | value                                                                                 | type             | event     |
            | analytics           | analytics/glomo_base                                                                  | json schema      | Page View |
            | version DL          | 20250414_5.0                                                                          | string           | Page View |
            | page intent         | transaccion                                                                           | string           | Page View |
            | page segment        | personas                                                                              | string           | Page View |
            | page name           | app:privada:personas:cuentas:crear apartado:1 datos del apartado:aportacion periodica | string           | Page View |
            | sysEnv              | app                                                                                   | string           | Page View |
            | channel             | online                                                                                | string           | Page View |
            | language            | ES                                                                                    | string           | Page View |
            | level 1             | cuentas                                                                               | string           | Page View |
            | level 2             | crear apartado                                                                        | string           | Page View |
            | level 3             | 1 datos del apartado                                                                  | string           | Page View |
            | level 4             | aportacion periodica                                                                  | string           | Page View |
            | business unit       | BBVA Mexico                                                                           | string           | Page View |
            | site app name       | App BBVA Mexico                                                                       | string           | Page View |
            | project name        | Glomo                                                                                 | string           | Page View |
            | page area           | privada                                                                               | string           | Page View |
            | device mobile       | si                                                                                    | string           | Page View |
            | device root         |                                                                                       | string           | Page View |
            | user userState      | logado                                                                                | string           | Page View |
            | user segment global | 003001                                                                                | string           | Page View |
            | user gender         | gender                                                                                | regexp named     | Page View |
            | user age            | age                                                                                   | regexp named     | Page View |
            | application name    |                                                                                       | empty str object | Page View |

    @ANA_EVENT_PGB007
    @analytics
    @vbank @MX @backend(test)
    @ios @android
    @web @web-done
    Scenario: Piggy Bank Confirmation - App Step 2
        Given a user with the following criteria
            | criteria                   |
            | piggy banks single account |
        And the user accesses to piggy banks
        And the analytics interceptor service is initiated
        When the user creates a piggy bank with "initial amount" rule
        Then the analytics events contains the following variables
            | item                     | value                                                      | type         | event      |
            | analytics                | analytics/glomo_base                                       | json schema  | App Step 2 |
            | version DL               | 20250414_5.0                                               | string       | App Step 2 |
            | page intent              | transaccion                                                | string       | App Step 2 |
            | page segment             | personas                                                   | string       | App Step 2 |
            | page name                | app:privada:personas:cuentas:crear apartado:2 confirmacion | string       | App Step 2 |
            | sysEnv                   | app                                                        | string       | App Step 2 |
            | channel                  | online                                                     | string       | App Step 2 |
            | language                 | ES                                                         | string       | App Step 2 |
            | level 1                  | cuentas                                                    | string       | App Step 2 |
            | level 2                  | crear apartado                                             | string       | App Step 2 |
            | level 3                  | 2 confirmacion                                             | string       | App Step 2 |
            | business unit            | BBVA Mexico                                                | string       | App Step 2 |
            | site app name            | App BBVA Mexico                                            | string       | App Step 2 |
            | project name             | Glomo                                                      | string       | App Step 2 |
            | page area                | privada                                                    | string       | App Step 2 |
            | device mobile            | si                                                         | string       | App Step 2 |
            | device root              |                                                            | string       | App Step 2 |
            | user userState           | logado                                                     | string       | App Step 2 |
            | user segment global      | 003001                                                     | string       | App Step 2 |
            | user gender              | gender                                                     | regexp named | App Step 2 |
            | user age                 | age                                                        | regexp named | App Step 2 |
            | product primary category | cuentas                                                    | string       | App Step 2 |
            | product subtype          | cuentas con chequera                                       | string       | App Step 2 |
            | fulfillment model        | online                                                     | string       | App Step 2 |
            | application type         | operativa                                                  | string       | App Step 2 |
            | application name         | crear apartado                                             | string       | App Step 2 |
            | application step         | 2 confirmacion                                             | string       | App Step 2 |
            | global application       | pockets                                                    | string       | App Step 2 |

    @ANA_EVENT_PGB008
    @analytics
    @vbank @MX @backend(test)
    @ios @android
    @web @web-done
    Scenario: Create Piggy Bank - App Completed
        Given a user with the following criteria
            | criteria                   |
            | piggy banks single account |
        And the user accesses to piggy banks
        And the user creates a piggy bank with "initial amount" rule
        And the analytics interceptor service is initiated
        When the user confirms piggy bank creation
        Then the analytics events contains the following variables
            | item                     | value                                                      | type         | event         |
            | analytics                | analytics/glomo_base                                       | json schema  | App Completed |
            | version DL               | 20250414_5.0                                               | string       | App Completed |
            | page intent              | transaccion                                                | string       | App Completed |
            | page segment             | personas                                                   | string       | App Completed |
            | page name                | app:privada:personas:cuentas:crear apartado:pagina exitosa | string       | App Completed |
            | sysEnv                   | app                                                        | string       | App Completed |
            | channel                  | online                                                     | string       | App Completed |
            | language                 | ES                                                         | string       | App Completed |
            | level 1                  | cuentas                                                    | string       | App Completed |
            | level 2                  | crear apartado                                             | string       | App Completed |
            | level 3                  | pagina exitosa                                             | string       | App Completed |
            | business unit            | BBVA Mexico                                                | string       | App Completed |
            | site app name            | App BBVA Mexico                                            | string       | App Completed |
            | project name             | Glomo                                                      | string       | App Completed |
            | page area                | privada                                                    | string       | App Completed |
            | device mobile            | si                                                         | string       | App Completed |
            | device root              |                                                            | string       | App Completed |
            | user userState           | logado                                                     | string       | App Completed |
            | user segment global      | 003001                                                     | string       | App Completed |
            | user gender              | gender                                                     | regexp named | App Completed |
            | user age                 | age                                                        | regexp named | App Completed |
            | product primary category | cuentas                                                    | string       | App Completed |
            | product subtype          | cuentas con chequera                                       | string       | App Completed |
            | product state            | aprobado                                                   | string       | App Completed |
            | product amount           | 300                                                        | string       | App Completed |
            | product currency         | MXN                                                        | string       | App Completed |
            | fulfillment model        | online                                                     | string       | App Completed |
            | application type         | operativa                                                  | string       | App Completed |
            | application name         | crear apartado                                             | string       | App Completed |
            | application step         | pagina exitosa                                             | string       | App Completed |
            | application state        | aprobado                                                   | string       | App Completed |
            | global application       | pockets                                                    | string       | App Completed |

    @ANA_EVENT_PGB009
    @analytics
    @vbank @MX @backend(test)
    @ios @android
    @web @web-done
    Scenario: Create Piggy Bank Error - Page View
        Given a user with the following criteria
            | criteria                   |
            | piggy banks single account |
        And the user accesses to piggy banks
        And the user creates a piggy bank with "initial amount" rule
        And the analytics interceptor service is initiated
        When the user confirms piggy bank creation
        Then the analytics events contains the following variables
            | item                | value                                                                    | type             | event     |
            | analytics           | analytics/glomo_base                                                     | json schema      | Page View |
            | version DL          | 20250414_5.0                                                             | string           | Page View |
            | page intent         | informacion                                                              | string           | Page View |
            | page segment        | personas                                                                 | string           | Page View |
            | page name           | app:privada:personas:cuentas:crear apartado:error operacion no realizada | string           | Page View |
            | sysEnv              | app                                                                      | string           | Page View |
            | channel             | online                                                                   | string           | Page View |
            | language            | ES                                                                       | string           | Page View |
            | level 1             | cuentas                                                                  | string           | Page View |
            | level 2             | crear apartado                                                           | string           | Page View |
            | level 3             | error operacion no realizada                                             | string           | Page View |
            | business unit       | BBVA Mexico                                                              | string           | Page View |
            | site app name       | App BBVA Mexico                                                          | string           | Page View |
            | project name        | Glomo                                                                    | string           | Page View |
            | error page          | error operacion no realizada                                             | string           | Page View |
            | page area           | privada                                                                  | string           | Page View |
            | device mobile       | si                                                                       | string           | Page View |
            | device root         |                                                                          | string           | Page View |
            | user userState      | logado                                                                   | string           | Page View |
            | user segment global | 003001                                                                   | string           | Page View |
            | user gender         | gender                                                                   | regexp named     | Page View |
            | user age            | age                                                                      | regexp named     | Page View |
            | application name    |                                                                          | empty str object | Page View |

    @ANA_EVENT_PGB010
    @analytics
    @vbank @MX @backend(test)
    @ios @android
    @web @web-done
    Scenario: Pay money into piggy bank - App On Click Start
        Given a user with the following criteria
            | criteria                   |
            | piggy banks single account |
        And the user accesses to piggy banks
        And the analytics interceptor service is initiated
        When the user "saves" money to its piggy bank
        Then the analytics events contains the following variables
            | item                     | value                                 | type         | event              |
            | analytics                | analytics/glomo_base                  | json schema  | App On Click Start |
            | version DL               | 20250414_5.0                          | string       | App On Click Start |
            | page intent              | transaccion                           | string       | App On Click Start |
            | page segment             | personas                              | string       | App On Click Start |
            | page name                | app:privada:personas:cuentas:apartado | string       | App On Click Start |
            | sysEnv                   | app                                   | string       | App On Click Start |
            | channel                  | online                                | string       | App On Click Start |
            | language                 | ES                                    | string       | App On Click Start |
            | level 1                  | cuentas                               | string       | App On Click Start |
            | level 2                  | apartado                              | string       | App On Click Start |
            | business unit            | BBVA Mexico                           | string       | App On Click Start |
            | site app name            | App BBVA Mexico                       | string       | App On Click Start |
            | project name             | Glomo                                 | string       | App On Click Start |
            | page area                | privada                               | string       | App On Click Start |
            | device mobile            | si                                    | string       | App On Click Start |
            | device root              |                                       | string       | App On Click Start |
            | user userState           | logado                                | string       | App On Click Start |
            | user segment global      | 003001                                | string       | App On Click Start |
            | user gender              | gender                                | regexp named | App On Click Start |
            | user age                 | age                                   | regexp named | App On Click Start |
            | product primary category | cuentas                               | string       | App On Click Start |
            | fulfillment model        | online                                | string       | App On Click Start |
            | application type         | operativa                             | string       | App On Click Start |
            | application name         | abonar apartado                       | string       | App On Click Start |
            | application step         | anadir dinero                         | string       | App On Click Start |
            | global application       | pockets contribution                  | string       | App On Click Start |

    @ANA_EVENT_PGB011
    @analytics
    @vbank @MX @backend(test)
    @ios @android
    @web @web-done
    Scenario: Piggy bank details - Internal Link
        Given a user with the following criteria
            | criteria                   |
            | piggy banks single account |
        And the user accesses to piggy banks
        And the analytics interceptor service is initiated
        When the user accesses to its piggy bank general details
        Then the analytics events contains the following variables
            | item                | value                                 | type             | event         |
            | analytics           | analytics/glomo_base                  | json schema      | Internal Link |
            | version DL          | 20250414_5.0                          | string           | Internal Link |
            | page intent         | transaccion                           | string           | Internal Link |
            | page segment        | personas                              | string           | Internal Link |
            | page name           | app:privada:personas:cuentas:apartado | string           | Internal Link |
            | sysEnv              | app                                   | string           | Internal Link |
            | channel             | online                                | string           | Internal Link |
            | language            | ES                                    | string           | Internal Link |
            | level 1             | cuentas                               | string           | Internal Link |
            | level 2             | apartado                              | string           | Internal Link |
            | business unit       | BBVA Mexico                           | string           | Internal Link |
            | site app name       | App BBVA Mexico                       | string           | Internal Link |
            | project name        | Glomo                                 | string           | Internal Link |
            | page area           | privada                               | string           | Internal Link |
            | link name           | detalle del apartado                  | string           | Internal Link |
            | device mobile       | si                                    | string           | Internal Link |
            | device root         |                                       | string           | Internal Link |
            | user userState      | logado                                | string           | Internal Link |
            | user segment global | 003001                                | string           | Internal Link |
            | user gender         | gender                                | regexp named     | Internal Link |
            | user age            | age                                   | regexp named     | Internal Link |
            | application name    |                                       | empty str object | Internal Link |

    @ANA_EVENT_PGB012
    @analytics
    @vbank @MX @backend(test)
    @ios @android
    @web @web-done
    Scenario: Pay money into piggy bank - App Page Visit
        Given a user with the following criteria
            | criteria                   |
            | piggy banks single account |
        And the user accesses to piggy banks
        And the analytics interceptor service is initiated
        When the user "saves" money to its piggy bank
        Then the analytics events contains the following variables
            | item                     | value                                                  | type         | event          |
            | analytics                | analytics/glomo_base                                   | json schema  | App Page Visit |
            | version DL               | 20250414_5.0                                           | string       | App Page Visit |
            | page intent              | transaccion                                            | string       | App Page Visit |
            | page segment             | personas                                               | string       | App Page Visit |
            | page name                | app:privada:personas:cuentas:abonar apartado:1 importe | string       | App Page Visit |
            | sysEnv                   | app                                                    | string       | App Page Visit |
            | channel                  | online                                                 | string       | App Page Visit |
            | language                 | ES                                                     | string       | App Page Visit |
            | level 1                  | cuentas                                                | string       | App Page Visit |
            | level 2                  | abonar apartado                                        | string       | App Page Visit |
            | level 3                  | 1 importe                                              | string       | App Page Visit |
            | business unit            | BBVA Mexico                                            | string       | App Page Visit |
            | site app name            | App BBVA Mexico                                        | string       | App Page Visit |
            | project name             | Glomo                                                  | string       | App Page Visit |
            | page area                | privada                                                | string       | App Page Visit |
            | device mobile            | si                                                     | string       | App Page Visit |
            | device root              |                                                        | string       | App Page Visit |
            | user userState           | logado                                                 | string       | App Page Visit |
            | user segment global      | 003001                                                 | string       | App Page Visit |
            | user gender              | gender                                                 | regexp named | App Page Visit |
            | user age                 | age                                                    | regexp named | App Page Visit |
            | product primary category | cuentas                                                | string       | App Page Visit |
            | fulfillment model        | online                                                 | string       | App Page Visit |
            | application type         | operativa                                              | string       | App Page Visit |
            | application name         | abonar apartado                                        | string       | App Page Visit |
            | application step         | 1 importe                                              | string       | App Page Visit |
            | global application       | pockets contribution                                   | string       | App Page Visit |

    @ANA_EVENT_PGB013
    @analytics
    @vbank @MX @backend(test)
    @ios @android
    @web @web-done
    Scenario: Amount to save - App Started
        Given a user with the following criteria
            | criteria                   |
            | piggy banks single account |
        And the user accesses to piggy banks
        And the analytics interceptor service is initiated
        When the user "saves" money to its piggy bank
        Then the analytics events contains the following variables
            | item                     | value                                                  | type         | event       |
            | analytics                | analytics/glomo_base                                   | json schema  | App Started |
            | version DL               | 20250414_5.0                                           | string       | App Started |
            | page intent              | transaccion                                            | string       | App Started |
            | page segment             | personas                                               | string       | App Started |
            | page name                | app:privada:personas:cuentas:abonar apartado:1 importe | string       | App Started |
            | sysEnv                   | app                                                    | string       | App Started |
            | channel                  | online                                                 | string       | App Started |
            | language                 | ES                                                     | string       | App Started |
            | level 1                  | cuentas                                                | string       | App Started |
            | level 2                  | abonar apartado                                        | string       | App Started |
            | level 3                  | 1 importe                                              | string       | App Started |
            | business unit            | BBVA Mexico                                            | string       | App Started |
            | site app name            | App BBVA Mexico                                        | string       | App Started |
            | project name             | Glomo                                                  | string       | App Started |
            | page area                | privada                                                | string       | App Started |
            | device mobile            | si                                                     | string       | App Started |
            | device root              |                                                        | string       | App Started |
            | user userState           | logado                                                 | string       | App Started |
            | user segment global      | 003001                                                 | string       | App Started |
            | user gender              | gender                                                 | regexp named | App Started |
            | user age                 | age                                                    | regexp named | App Started |
            | product primary category | cuentas                                                | string       | App Started |
            | fulfillment model        | online                                                 | string       | App Started |
            | application type         | operativa                                              | string       | App Started |
            | application name         | abonar apartado                                        | string       | App Started |
            | application step         | importe                                                | string       | App Started |
            | global application       | pockets contribution                                   | string       | App Started |

    @ANA_EVENT_PGB014
    @analytics
    @vbank @MX @backend(test)
    @ios @android
    @web @web-done
    Scenario: Pay money into piggy bank successfully - App Completed
        Given a user with the following criteria
            | criteria                   |
            | piggy banks single account |
        And the user accesses to piggy banks
        And the analytics interceptor service is initiated
        When the user "saves" money to its piggy bank
        Then the analytics events contains the following variables
            | item                     | value                                                       | type         | event         |
            | analytics                | analytics/glomo_base                                        | json schema  | App Completed |
            | version DL               | 20250414_5.0                                                | string       | App Completed |
            | page intent              | transaccion                                                 | string       | App Completed |
            | page segment             | personas                                                    | string       | App Completed |
            | page name                | app:privada:personas:cuentas:abonar apartado:pagina exitosa | string       | App Completed |
            | sysEnv                   | app                                                         | string       | App Completed |
            | channel                  | online                                                      | string       | App Completed |
            | language                 | ES                                                          | string       | App Completed |
            | level 1                  | cuentas                                                     | string       | App Completed |
            | level 2                  | abonar apartado                                             | string       | App Completed |
            | level 3                  | pagina exitosa                                              | string       | App Completed |
            | business unit            | BBVA Mexico                                                 | string       | App Completed |
            | site app name            | App BBVA Mexico                                             | string       | App Completed |
            | project name             | Glomo                                                       | string       | App Completed |
            | page area                | privada                                                     | string       | App Completed |
            | device mobile            | si                                                          | string       | App Completed |
            | device root              |                                                             | string       | App Completed |
            | user userState           | logado                                                      | string       | App Completed |
            | user segment global      | 003001                                                      | string       | App Completed |
            | user gender              | gender                                                      | regexp named | App Completed |
            | user age                 | age                                                         | regexp named | App Completed |
            | product primary category | cuentas                                                     | string       | App Completed |
            | product state            | aprobado                                                    | string       | App Completed |
            | product amount           | 100                                                        | string       | App Completed |
            | product currency         | MXN                                                         | string       | App Completed |
            | fulfillment model        | online                                                      | string       | App Completed |
            | application type         | operativa                                                   | string       | App Completed |
            | application name         | abonar apartado                                             | string       | App Completed |
            | application step         | pagina exitosa                                              | string       | App Completed |
            | application state        | aprobado                                                    | string       | App Completed |
            | global application       | pockets contribution                                        | string       | App Completed |

    @ANA_EVENT_PGB015
    @analytics
    @vbank @MX @backend(test)
    @ios @android
    @web @web-done
    Scenario: Withdraw from piggy bank - App On Click Start
        Given a user with the following criteria
            | criteria                   |
            | piggy banks single account |
        And the user accesses to piggy banks
        And the analytics interceptor service is initiated
        When the user "refunds" money to its piggy bank
        Then the analytics events contains the following variables
            | item                     | value                                 | type         | event              |
            | analytics                | analytics/glomo_base                  | json schema  | App On Click Start |
            | version DL               | 20250414_5.0                          | string       | App On Click Start |
            | page intent              | transaccion                           | string       | App On Click Start |
            | page segment             | personas                              | string       | App On Click Start |
            | page name                | app:privada:personas:cuentas:apartado | string       | App On Click Start |
            | sysEnv                   | app                                   | string       | App On Click Start |
            | channel                  | online                                | string       | App On Click Start |
            | language                 | ES                                    | string       | App On Click Start |
            | level 1                  | cuentas                               | string       | App On Click Start |
            | level 2                  | apartado                              | string       | App On Click Start |
            | business unit            | BBVA Mexico                           | string       | App On Click Start |
            | site app name            | App BBVA Mexico                       | string       | App On Click Start |
            | project name             | Glomo                                 | string       | App On Click Start |
            | page area                | privada                               | string       | App On Click Start |
            | device mobile            | si                                    | string       | App On Click Start |
            | device root              |                                       | string       | App On Click Start |
            | user userState           | logado                                | string       | App On Click Start |
            | user segment global      | 003001                                | string       | App On Click Start |
            | user gender              | gender                                | regexp named | App On Click Start |
            | user age                 | age                                   | regexp named | App On Click Start |
            | product primary category | cuentas                               | string       | App On Click Start |
            | fulfillment model        | online                                | string       | App On Click Start |
            | application type         | operativa                             | string       | App On Click Start |
            | application name         | retirar apartado                      | string       | App On Click Start |
            | application step         | retirar dinero                        | string       | App On Click Start |
            | global application       | pockets withdrawal                    | string       | App On Click Start |

    @ANA_EVENT_PGB016
    @analytics
    @vbank @MX @backend(test)
    @ios @android
    @web @web-done
    Scenario: Piggy bank details withdraw - Internal Link
        Given a user with the following criteria
            | criteria                   |
            | piggy banks single account |
        And the user accesses to piggy banks
        And the analytics interceptor service is initiated
        When the user accesses to its piggy bank general details
        Then the analytics events contains the following variables
            | item                | value                                 | type             | event         |
            | analytics           | analytics/glomo_base                  | json schema      | Internal Link |
            | version DL          | 20250414_5.0                          | string           | Internal Link |
            | page intent         | transaccion                           | string           | Internal Link |
            | page segment        | personas                              | string           | Internal Link |
            | page name           | app:privada:personas:cuentas:apartado | string           | Internal Link |
            | sysEnv              | app                                   | string           | Internal Link |
            | channel             | online                                | string           | Internal Link |
            | language            | ES                                    | string           | Internal Link |
            | level 1             | cuentas                               | string           | Internal Link |
            | level 2             | apartado                              | string           | Internal Link |
            | business unit       | BBVA Mexico                           | string           | Internal Link |
            | site app name       | App BBVA Mexico                       | string           | Internal Link |
            | project name        | Glomo                                 | string           | Internal Link |
            | page area           | privada                               | string           | Internal Link |
            | link name           | detalle del apartado                  | string           | Internal Link |
            | device mobile       | si                                    | string           | Internal Link |
            | device root         |                                       | string           | Internal Link |
            | user userState      | logado                                | string           | Internal Link |
            | user segment global | 003001                                | string           | Internal Link |
            | user gender         | gender                                | regexp named     | Internal Link |
            | user age            | age                                   | regexp named     | Internal Link |
            | application name    |                                       | empty str object | Internal Link |

    @ANA_EVENT_PGB017
    @analytics
    @vbank @MX @backend(test)
    @ios @android
    @web @web-done
    Scenario: Withdraw from piggy bank - App Page Visit
        Given a user with the following criteria
            | criteria                   |
            | piggy banks single account |
        And the user accesses to piggy banks
        And the analytics interceptor service is initiated
        When the user "refunds" money to its piggy bank
        Then the analytics events contains the following variables
            | item                     | value                                                   | type         | event          |
            | analytics                | analytics/glomo_base                                    | json schema  | App Page Visit |
            | version DL               | 20250414_5.0                                            | string       | App Page Visit |
            | page intent              | transaccion                                             | string       | App Page Visit |
            | page segment             | personas                                                | string       | App Page Visit |
            | page name                | app:privada:personas:cuentas:retirar apartado:1 importe | string       | App Page Visit |
            | sysEnv                   | app                                                     | string       | App Page Visit |
            | channel                  | online                                                  | string       | App Page Visit |
            | language                 | ES                                                      | string       | App Page Visit |
            | level 1                  | cuentas                                                 | string       | App Page Visit |
            | level 2                  | retirar apartado                                        | string       | App Page Visit |
            | level 3                  | 1 importe                                               | string       | App Page Visit |
            | business unit            | BBVA Mexico                                             | string       | App Page Visit |
            | site app name            | App BBVA Mexico                                         | string       | App Page Visit |
            | project name             | Glomo                                                   | string       | App Page Visit |
            | page area                | privada                                                 | string       | App Page Visit |
            | device mobile            | si                                                      | string       | App Page Visit |
            | device root              |                                                         | string       | App Page Visit |
            | user userState           | logado                                                  | string       | App Page Visit |
            | user segment global      | 003001                                                  | string       | App Page Visit |
            | user gender              | gender                                                  | regexp named | App Page Visit |
            | user age                 | age                                                     | regexp named | App Page Visit |
            | product primary category | cuentas                                                 | string       | App Page Visit |
            | fulfillment model        | online                                                  | string       | App Page Visit |
            | application type         | operativa                                               | string       | App Page Visit |
            | application name         | retirar apartado                                        | string       | App Page Visit |
            | application step         | 1 importe                                               | string       | App Page Visit |
            | global application       | pockets withdrawal                                      | string       | App Page Visit |

    @ANA_EVENT_PGB018
    @analytics
    @vbank @MX @backend(test)
    @ios @android
    @web @web-done
    Scenario: Amount to withdraw - App Started
        Given a user with the following criteria
            | criteria                   |
            | piggy banks single account |
        And the user accesses to piggy banks
        And the analytics interceptor service is initiated
        When the user "refunds" money to its piggy bank
        Then the analytics events contains the following variables
            | item                     | value                                                   | type         | event       |
            | analytics                | analytics/glomo_base                                    | json schema  | App Started |
            | version DL               | 20250414_5.0                                            | string       | App Started |
            | page intent              | transaccion                                             | string       | App Started |
            | page segment             | personas                                                | string       | App Started |
            | page name                | app:privada:personas:cuentas:retirar apartado:1 importe | string       | App Started |
            | sysEnv                   | app                                                     | string       | App Started |
            | channel                  | online                                                  | string       | App Started |
            | language                 | ES                                                      | string       | App Started |
            | level 1                  | cuentas                                                 | string       | App Started |
            | level 2                  | retirar apartado                                        | string       | App Started |
            | level 3                  | 1 importe                                               | string       | App Started |
            | business unit            | BBVA Mexico                                             | string       | App Started |
            | site app name            | App BBVA Mexico                                         | string       | App Started |
            | project name             | Glomo                                                   | string       | App Started |
            | page area                | privada                                                 | string       | App Started |
            | device mobile            | si                                                      | string       | App Started |
            | device root              |                                                         | string       | App Started |
            | user userState           | logado                                                  | string       | App Started |
            | user segment global      | 003001                                                  | string       | App Started |
            | user gender              | gender                                                  | regexp named | App Started |
            | user age                 | age                                                     | regexp named | App Started |
            | product primary category | cuentas                                                 | string       | App Started |
            | fulfillment model        | online                                                  | string       | App Started |
            | application type         | operativa                                               | string       | App Started |
            | application name         | retirar apartado                                        | string       | App Started |
            | application step         | monto a retirar                                         | string       | App Started |
            | global application       | pockets withdrawal                                      | string       | App Started |

    @ANA_EVENT_PGB019
    @analytics
    @vbank @MX @backend(test)
    @ios @android
    @web @web-done
    Scenario:  Withdraw from piggy bank successfully - App Completed
        Given a user with the following criteria
            | criteria                   |
            | piggy banks single account |
        And the user accesses to piggy banks
        And the analytics interceptor service is initiated
        When the user "refunds" money to its piggy bank
        Then the analytics events contains the following variables
            | item                     | value                                                        | type         | event         |
            | analytics                | analytics/glomo_base                                         | json schema  | App Completed |
            | version DL               | 20250414_5.0                                                 | string       | App Completed |
            | page intent              | transaccion                                                  | string       | App Completed |
            | page segment             | personas                                                     | string       | App Completed |
            | page name                | app:privada:personas:cuentas:retirar apartado:pagina exitosa | string       | App Completed |
            | sysEnv                   | app                                                          | string       | App Completed |
            | channel                  | online                                                       | string       | App Completed |
            | language                 | ES                                                           | string       | App Completed |
            | level 1                  | cuentas                                                      | string       | App Completed |
            | level 2                  | retirar apartado                                             | string       | App Completed |
            | level 3                  | pagina exitosa                                               | string       | App Completed |
            | business unit            | BBVA Mexico                                                  | string       | App Completed |
            | site app name            | App BBVA Mexico                                              | string       | App Completed |
            | project name             | Glomo                                                        | string       | App Completed |
            | page area                | privada                                                      | string       | App Completed |
            | device mobile            | si                                                           | string       | App Completed |
            | device root              |                                                              | string       | App Completed |
            | user userState           | logado                                                       | string       | App Completed |
            | user segment global      | 003001                                                       | string       | App Completed |
            | user gender              | gender                                                       | regexp named | App Completed |
            | user age                 | age                                                          | regexp named | App Completed |
            | product primary category | cuentas                                                      | string       | App Completed |
            | product state            | aprobado                                                     | string       | App Completed |
            | product amount           | 100                                                          | string       | App Completed |
            | product currency         | MXN                                                          | string       | App Completed |
            | fulfillment model        | online                                                       | string       | App Completed |
            | application type         | operativa                                                    | string       | App Completed |
            | application name         | retirar apartado                                             | string       | App Completed |
            | application step         | pagina exitosa                                               | string       | App Completed |
            | application state        | aprobado                                                     | string       | App Completed |
            | global application       | pockets withdrawal                                           | string       | App Completed |

    @ANA_EVENT_PGB020
    @MX
    @analytics
    @vbank @backend(test)
    @web @ios @android @native
    @android-done @ios-done @web-done
    Scenario: Piggy Banks automatic contributions list - Page View
        Given a user with the following criteria
            | criteria                   |
            | piggy banks single account |
        And the user accesses to piggy banks
        And the analytics interceptor service is initiated
        When the user "Go to" automatic contributions
        Then the analytics events contains the following variables
            | item                | value                                         | type             | event     | event number |
            | analytics           | analytics/glomo_base                          | json schema      | Page View | 2            |
            | version DL          | 20250414_5.0                                  | string           | Page View | 2            |
            | page intent         | informacion                                   | string           | Page View | 2            |
            | page segment        | personas                                      | string           | Page View | 2            |
            | page name           | app:privada:personas:cuentas:apartado:listado | string           | Page View | 2            |
            | sysEnv              | app                                           | string           | Page View | 2            |
            | channel             | online                                        | string           | Page View | 2            |
            | language            | ES                                            | string           | Page View | 2            |
            | level 1             | cuentas                                       | string           | Page View | 2            |
            | level 2             | apartado                                      | string           | Page View | 2            |
            | level 3             | listado                                       | string           | Page View | 2            |
            | business unit       | BBVA Mexico                                   | string           | Page View | 2            |
            | site app name       | App BBVA Mexico                               | string           | Page View | 2            |
            | project name        | Glomo                                         | string           | Page View | 2            |
            | page area           | privada                                       | string           | Page View | 2            |
            | device user agent   | GLOMO_MX/99.99.99 (Android;14;Samsung)        | string           | Page View | 2            |
            | device mobile       | si                                            | string           | Page View | 2            |
            | device root         |                                               | string           | Page View | 2            |
            | user userState      | logado                                        | string           | Page View | 2            |
            | user segment global | 003001                                        | string           | Page View | 2            |
            | application name    |                                               | empty str object | Page View | 2            |

    @ANA_EVENT_PGB021
    @analytics
    @vbank @MX @backend(test)
    @ios @android
    @web @web-done
    Scenario: Piggy Banks Dashboard - Page View
        Given a user with the following criteria
            | criteria                   |
            | piggy banks single account |
        And the user accesses to piggy banks
        And the analytics interceptor service is initiated
        When the user reviews its piggy bank
        Then the analytics events contains the following variables
            | item                | value                                           | type             | event     |
            | analytics           | analytics/glomo_base                            | json schema      | Page View |
            | version DL          | 20250414_5.0                                    | string           | Page View |
            | page intent         | informacion                                     | string           | Page View |
            | page segment        | personas                                        | string           | Page View |
            | page name           | app:privada:personas:cuentas:apartado:dashboard | string           | Page View |
            | sysEnv              | app                                             | string           | Page View |
            | channel             | online                                          | string           | Page View |
            | language            | ES                                              | string           | Page View |
            | level 1             | cuentas                                         | string           | Page View |
            | level 2             | apartado                                        | string           | Page View |
            | level 3             | dashboard                                       | string           | Page View |
            | business unit       | BBVA Mexico                                     | string           | Page View |
            | site app name       | App BBVA Mexico                                 | string           | Page View |
            | project name        | Glomo                                           | string           | Page View |
            | page area           | privada                                         | string           | Page View |
            | device user agent   | GLOMO_MX/99.99.99 (Android;14;Samsung)          | string           | Page View |
            | device mobile       | si                                              | string           | Page View |
            | device root         |                                                 | string           | Page View |
            | user userState      | logado                                          | string           | Page View |
            | user segment global | 003001                                          | string           | Page View |
            | user gender         | gender                                          | regexp named     | Page View |
            | user age            | age                                             | regexp named     | Page View |
            | application name    |                                                 | empty str object | Page View |

    @ANA_EVENT_PGB022
    @analytics
    @vbank @MX @backend(test)
    @ios @android
    @web @web-done
    Scenario: Piggy Banks general details - Page View
        Given a user with the following criteria
            | criteria                   |
            | piggy banks single account |
        And the user accesses to piggy banks
        And the analytics interceptor service is initiated
        When the user accesses to its piggy bank general details
        Then the analytics events contains the following variables
            | item                | value                                         | type             | event     | event number |
            | analytics           | analytics/glomo_base                          | json schema      | Page View | 2            |
            | version DL          | 20250414_5.0                                  | string           | Page View | 2            |
            | page intent         | informacion                                   | string           | Page View | 2            |
            | page segment        | personas                                      | string           | Page View | 2            |
            | page name           | app:privada:personas:cuentas:apartado:detalle | string           | Page View | 2            |
            | sysEnv              | app                                           | string           | Page View | 2            |
            | channel             | online                                        | string           | Page View | 2            |
            | language            | ES                                            | string           | Page View | 2            |
            | level 1             | cuentas                                       | string           | Page View | 2            |
            | level 2             | apartado                                      | string           | Page View | 2            |
            | level 3             | detalle                                       | string           | Page View | 2            |
            | business unit       | BBVA Mexico                                   | string           | Page View | 2            |
            | site app name       | App BBVA Mexico                               | string           | Page View | 2            |
            | project name        | Glomo                                         | string           | Page View | 2            |
            | page area           | privada                                       | string           | Page View | 2            |
            | device user agent   | GLOMO_MX/99.99.99 (Android;14;Samsung)        | string           | Page View | 2            |
            | device mobile       | si                                            | string           | Page View | 2            |
            | device root         |                                               | string           | Page View | 2            |
            | user userState      | logado                                        | string           | Page View | 2            |
            | user segment global | 003001                                        | string           | Page View | 2            |
            | user gender         | gender                                        | regexp named     | Page View | 2            |
            | user age            | age                                           | regexp named     | Page View | 2            |
            | application name    |                                               | empty str object | Page View | 2            |

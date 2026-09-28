@operationalLimitsConfigurationAnalytics
Feature: Analytics - Operational Limits Configuration

    @ANA_OLC001
    @analytics
    @web @android @ios
    @MX @backend(test) @vbank
    @web-done
    Scenario: Analytics - Operational Limits Configuration - APP ONCLICK START
        Given a user with the following criteria
            | criteria           |
            | operational limits |
            | debit card         |
        And the user accesses to the "operative" "debit" card product detail
        And the user accesses to expense control
        And the analytics interceptor service is initiated
        When the user selects the "pos daily" limit configuration
        Then the analytics events contains the following variables
            | item                     | value                                                  | type         | event              |
            | analytics                | analytics/glomo_base                                   | json schema  | App On Click Start |
            | version DL               | 20250414_5.0                                           | string       | App On Click Start |
            | page name                | app:privada:personas:tarjetas:debito:control de gastos | string       | App On Click Start |
            | level 1                  | tarjetas                                               | string       | App On Click Start |
            | level 2                  | debito                                                 | string       | App On Click Start |
            | level 3                  | control de gastos                                      | string       | App On Click Start |
            | language                 | ES                                                     | string       | App On Click Start |
            | page area                | privada                                                | string       | App On Click Start |
            | page intent              | informacion                                            | string       | App On Click Start |
            | channel                  | online                                                 | string       | App On Click Start |
            | page instance ID         | de                                                     | string       | App On Click Start |
            | page info version        | appVersion                                             | regexp named | App On Click Start |
            | page segment             | personas                                               | string       | App On Click Start |
            | sysEnv                   | app                                                    | string       | App On Click Start |
            | business unit            | BBVA Mexico                                            | string       | App On Click Start |
            | site app name            | App BBVA Mexico                                        | string       | App On Click Start |
            | project name             | Glomo                                                  | string       | App On Click Start |
            | device mobile            | si                                                     | string       | App On Click Start |
            | user userState           | logado                                                 | string       | App On Click Start |
            | profile ID               | profileID                                              | regexp named | App On Click Start |
            | user segment global      | 003001                                                 | string       | App On Click Start |
            | user gender              | gender                                                 | regexp named | App On Click Start |
            | user age                 | age                                                    | regexp named | App On Click Start |
            | global application       | debit card limits update                               | string       | App On Click Start |
            | application name         | modificar limites tarjeta debito                       | string       | App On Click Start |
            | application type         | operativa                                              | string       | App On Click Start |
            | application step         | control de gastos debito                               | string       | App On Click Start |
            | fulfillment model        | online                                                 | string       | App On Click Start |
            | product primary category | tarjetas                                               | string       | App On Click Start |
            | product subtype          | tarjetas debito                                        | string       | App On Click Start |
            | product name             | debito digital                                         | string       | App On Click Start |
            | product amount           | 1000                                                   | string       | App On Click Start |
            | product currency         | MXN                                                    | string       | App On Click Start |
            | internal campaign        |                                                        | empty array  | App On Click Start |
            | optimization attributes  |                                                        | empty array  | App On Click Start |

    @ANA_OLC002
    @analytics
    @web @android @ios
    @MX @backend(test) @vbank
    @web-done
    Scenario: Analytics - Access to limits list - APP PAGE VISIT
        Given a user with the following criteria
            | criteria           |
            | operational limits |
            | debit card         |
        And the user accesses to the "operative" "debit" card product detail
        And the user accesses to expense control
        And the analytics interceptor service is initiated
        When the user accesses the "pos daily" limit configuration
        Then the analytics events contains the following variables:
            | item                     | value                                                                                 | type         | event          |
            | analytics                | analytics/glomo_base                                                                  | json schema  | App Page Visit |
            | version DL               | 20250414_5.0                                                                          | string       | App Page Visit |
            | page name                | app:privada:personas:tarjetas:debito:modificar limites tarjeta:1 ingresa nuevo limite | string       | App Page Visit |
            | level 1                  | tarjetas                                                                              | string       | App Page Visit |
            | level 2                  | debito                                                                                | string       | App Page Visit |
            | level 3                  | modificar limites tarjeta                                                             | string       | App Page Visit |
            | level 4                  | 1 ingresa nuevo limite                                                                | string       | App Page Visit |
            | language                 | ES                                                                                    | string       | App Page Visit |
            | page area                | privada                                                                               | string       | App Page Visit |
            | page intent              | informacion                                                                           | string       | App Page Visit |
            | channel                  | online                                                                                | string       | App Page Visit |
            | page instance ID         | de                                                                                    | string       | App Page Visit |
            | page info version        | appVersion                                                                            | regexp named | App Page Visit |
            | page segment             | personas                                                                              | string       | App Page Visit |
            | sysEnv                   | app                                                                                   | string       | App Page Visit |
            | business unit            | BBVA Mexico                                                                           | string       | App Page Visit |
            | site app name            | App BBVA Mexico                                                                       | string       | App Page Visit |
            | project name             | Glomo                                                                                 | string       | App Page Visit |
            | device mobile            | si                                                                                    | string       | App Page Visit |
            | user userState           | logado                                                                                | string       | App Page Visit |
            | profile ID               | profileID                                                                             | regexp named | App Page Visit |
            | user segment global      | 003001                                                                                | string       | App Page Visit |
            | user gender              | gender                                                                                | regexp named | App Page Visit |
            | user age                 | age                                                                                   | regexp named | App Page Visit |
            | global application       | debit card limits update                                                              | string       | App Page Visit |
            | application name         | modificar limites tarjeta debito                                                      | string       | App Page Visit |
            | application type         | operativa                                                                             | string       | App Page Visit |
            | application step         | 1 ingresa nuevo limite                                                                | string       | App Page Visit |
            | fulfillment model        | online                                                                                | string       | App Page Visit |
            | product primary category | tarjetas                                                                              | string       | App Page Visit |
            | product subtype          | tarjetas debito                                                                       | string       | App Page Visit |
            | product name             | debito digital                                                                        | string       | App Page Visit |
            | product amount           | 1000                                                                                  | string       | App Page Visit |
            | product currency         | MXN                                                                                   | string       | App Page Visit |
            | internal campaign        |                                                                                       | empty array  | App Page Visit |
            | optimization attributes  |                                                                                       | empty array  | App Page Visit |

    @ANA_OLC003
    @analytics
    @web @android @ios
    @MX @backend(test) @vbank
    @web-done
    Scenario: Analytics - Access to edit limits configuration - APP STARTED
        Given a user with the following criteria
            | criteria           |
            | operational limits |
            | debit card         |
        And the user accesses to the "operative" "debit" card product detail
        And the user accesses to expense control
        And the user accesses the "pos daily" limit configuration
        And the analytics interceptor service is initiated
        When the user defines the new limit for an amount of "80500"
        Then the analytics events contains the following variables:
            | item                     | value                                                                                 | type         | event       |
            | analytics                | analytics/glomo_base                                                                  | json schema  | App Started |
            | version DL               | 20250414_5.0                                                                          | string       | App Started |
            | page name                | app:privada:personas:tarjetas:debito:modificar limites tarjeta:1 ingresa nuevo limite | string       | App Started |
            | level 1                  | tarjetas                                                                              | string       | App Started |
            | level 2                  | debito                                                                                | string       | App Started |
            | level 3                  | modificar limites tarjeta                                                             | string       | App Started |
            | level 4                  | 1 ingresa nuevo limite                                                                | string       | App Started |
            | language                 | ES                                                                                    | string       | App Started |
            | page area                | privada                                                                               | string       | App Started |
            | page intent              | informacion                                                                           | string       | App Started |
            | channel                  | online                                                                                | string       | App Started |
            | page instance ID         | de                                                                                    | string       | App Started |
            | page info version        | appVersion                                                                            | regexp named | App Started |
            | page segment             | personas                                                                              | string       | App Started |
            | sysEnv                   | app                                                                                   | string       | App Started |
            | business unit            | BBVA Mexico                                                                           | string       | App Started |
            | site app name            | App BBVA Mexico                                                                       | string       | App Started |
            | project name             | Glomo                                                                                 | string       | App Started |
            | device mobile            | si                                                                                    | string       | App Started |
            | user userState           | logado                                                                                | string       | App Started |
            | profile ID               | profileID                                                                             | regexp named | App Started |
            | user segment global      | 003001                                                                                | string       | App Started |
            | user gender              | gender                                                                                | regexp named | App Started |
            | user age                 | age                                                                                   | regexp named | App Started |
            | global application       | debit card limits update                                                              | string       | App Started |
            | application name         | modificar limites tarjeta debito                                                      | string       | App Started |
            | application type         | operativa                                                                             | string       | App Started |
            | application step         | limite diario                                                                         | string       | App Started |
            | fulfillment model        | online                                                                                | string       | App Started |
            | product primary category | tarjetas                                                                              | string       | App Started |
            | product subtype          | tarjetas debito                                                                       | string       | App Started |
            | product name             | debito digital                                                                        | string       | App Started |
            | product amount           | 1000                                                                                  | string       | App Started |
            | product currency         | MXN                                                                                   | string       | App Started |
            | internal campaign        |                                                                                       | empty array  | App Started |
            | optimization attributes  |                                                                                       | empty array  | App Started |

    @ANA_OLC004
    @analytics
    @web-done @web @android @ios
    @MX @backend(test) @vbank
    Scenario: Analytics - The user change any limit successful - APP COMPLETED
        Given a user with the following criteria
            | criteria           |
            | operational limits |
            | debit card         |
        And the user accesses to the "operative" "debit" card product detail
        And the user accesses to expense control
        And the user accesses the "pos daily" limit configuration
        And the analytics interceptor service is initiated
        When the user confirms the new limit for an amount of "1000"
        Then the analytics events contains the following variables:
            | item                     | value                                                                         | type         | event         |
            | analytics                | analytics/glomo_base                                                          | json schema  | App Completed |
            | version DL               | 20250414_5.0                                                                  | string       | App Completed |
            | page name                | app:privada:personas:tarjetas:debito:modificar limites tarjeta:pagina exitosa | string       | App Completed |
            | level 1                  | tarjetas                                                                      | string       | App Completed |
            | level 2                  | debito                                                                        | string       | App Completed |
            | level 3                  | modificar limites tarjeta                                                     | string       | App Completed |
            | level 4                  | pagina exitosa                                                                | string       | App Completed |
            | language                 | ES                                                                            | string       | App Completed |
            | page area                | privada                                                                       | string       | App Completed |
            | page intent              | informacion                                                                   | string       | App Completed |
            | channel                  | online                                                                        | string       | App Completed |
            | page instance ID         | de                                                                            | string       | App Completed |
            | page info version        | appVersion                                                                    | regexp named | App Completed |
            | page segment             | personas                                                                      | string       | App Completed |
            | sysEnv                   | app                                                                           | string       | App Completed |
            | business unit            | BBVA Mexico                                                                   | string       | App Completed |
            | site app name            | App BBVA Mexico                                                               | string       | App Completed |
            | project name             | Glomo                                                                         | string       | App Completed |
            | device mobile            | si                                                                            | string       | App Completed |
            | user userState           | logado                                                                        | string       | App Completed |
            | profile ID               | profileID                                                                     | regexp named | App Completed |
            | user segment global      | 003001                                                                        | string       | App Completed |
            | user gender              | gender                                                                        | regexp named | App Completed |
            | user age                 | age                                                                           | regexp named | App Completed |
            | global application       | debit card limits update                                                      | string       | App Completed |
            | application name         | modificar limites tarjeta debito                                              | string       | App Completed |
            | application type         | operativa                                                                     | string       | App Completed |
            | application step         | pagina exitosa                                                                | string       | App Completed |
            | fulfillment model        | online                                                                        | string       | App Completed |
            | application state        | finalizado                                                                    | string       | App Completed |
            | product primary category | tarjetas                                                                      | string       | App Completed |
            | product subtype          | tarjetas debito                                                               | string       | App Completed |
            | product name             | debito digital                                                                | string       | App Completed |
            | product amount           | 1000                                                                          | string       | App Completed |
            | product currency         | MXN                                                                           | string       | App Completed |
            | internal campaign        |                                                                               | empty array  | App Completed |
            | optimization attributes  |                                                                               | empty array  | App Completed |

    @ANA_OLC005
    @analytics
    @web-done @web @android @ios
    @vbank
    @MX @backend(artichoke)
    Scenario: ERROR - PAGE VIEW    - error when modifying the limit pos daily
        Given a user with the following criteria
            | criteria                 |
            | error operational limits |
            | debit card               |
        And the user accesses to the "operative" "debit" card product detail
        And the user accesses to expense control
        And the user accesses the "pos daily" limit configuration
        When the user confirms the new limit for an amount of "20000"
        Then the device contains the following variables:
            | item                    | value                                                                              | type             |
            | analytics               | analytics/glomo_base                                                               | json schema      |
            | version DL              | 20250414_5.0                                                                       | string           |
            | page name               | app:privada:personas:tarjetas:debito:modificar limites tarjeta:error exceso limite | string           |
            | level 1                 | tarjetas                                                                           | string           |
            | level 2                 | debito                                                                             | string           |
            | level 3                 | modificar limites tarjeta                                                          | string           |
            | level 4                 | error exceso limite                                                                | string           |
            | error page              | error exceso limite                                                                | string           |
            | language                | ES                                                                                 | string           |
            | page area               | privada                                                                            | string           |
            | page intent             | informacion                                                                        | string           |
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
            | profile ID              | ^[a-zA-Z0-9]{5,}$                                                                  | regexp           |
            | internal campaign       |                                                                                    | empty array      |
            | optimization attributes |                                                                                    | empty array      |
            | application             |                                                                                    | empty str object |
            | products attributes     |                                                                                    | empty array      |

    @ANA_OLC006
    @analytics
    @web @android @ios
    @MX @backend(test) @vbank
    @web-done
    Scenario: Operational Limits Configuration - PAGE VIEW
        Given a user with the following criteria
            | criteria           |
            | operational limits |
            | debit card         |
        And the user accesses to the "operative" "debit" card product detail
        When the user accesses to expense control
        Then the device contains the following variables:
            | item                    | value                                                  | type             |
            | analytics               | analytics/glomo_base                                   | json schema      |
            | version DL              | 20250414_5.0                                           | string           |
            | page name               | app:privada:personas:tarjetas:debito:control de gastos | string           |
            | level 1                 | tarjetas                                               | string           |
            | level 2                 | debito                                                 | string           |
            | level 3                 | control de gastos                                      | string           |
            | language                | ES                                                     | string           |
            | page area               | privada                                                | string           |
            | page intent             | informacion                                            | string           |
            | channel                 | online                                                 | string           |
            | page instance ID        | de                                                     | string           |
            | page info version       | appVersion                                             | regexp named     |
            | page segment            | personas                                               | string           |
            | sysEnv                  | app                                                    | string           |
            | business unit           | BBVA Mexico                                            | string           |
            | site app name           | App BBVA Mexico                                        | string           |
            | project name            | Glomo                                                  | string           |
            | device mobile           | si                                                     | string           |
            | user userState          | logado                                                 | string           |
            | profile ID              | profileID                                              | regexp named     |
            | user segment global     | 003001                                                 | string           |
            | user gender             | gender                                                 | regexp named     |
            | user age                | age                                                    | regexp named     |
            | internal campaign       |                                                        | empty array      |
            | optimization attributes |                                                        | empty array      |
            | application             |                                                        | empty str object |
            | products attributes     |                                                        | empty array      |

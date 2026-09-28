@analyticsCardOperativeLimitsTdc
Feature: Analytics - Card Operative Limits Tdc

    @ANA_AAT001
    @analytics
    @web @android @ios
    @MX @backend(test) @vbank
    @web-done
    Scenario: Operational Limits Configuration - PAGE VIEW
        Given a user with the following criteria
            | criteria                                      |
            | credit card                                   |
            | card operative limits tdc                     |
        When the user accesses the limits of his credit card
        Then the device contains the following variables:
            | item                    | value                                                   | type             |
            | analytics               | analytics/glomo_base                                    | json schema      |
            | version DL              | 20250414_5.0                                            | string           |
            | page name               | app:privada:personas:tarjetas:credito:control de gastos | string           |
            | level 1                 | tarjetas                                                | string           |
            | level 2                 | credito                                                 | string           |
            | level 3                 | control de gastos                                       | string           |
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
            | profile ID              | profileID                                               | regexp named     |
            | user segment global     | 003001                                                  | string           |
            | user gender             | gender                                                  | regexp named     |
            | user age                | age                                                     | regexp named     |
            | internal campaign       |                                                         | empty array      |
            | optimization attributes |                                                         | empty array      |
            | application             |                                                         | empty str object |
            | products attributes     |                                                         | empty array      |

    @ANA_EVENT_AAT002
    @analytics
    @web @android @ios
    @MX @backend(test) @vbank
    @web-done
    Scenario: Analytics - Operational Limits Configuration for digital card - APP ONCLICK START
        Given a user with the following criteria
            | criteria                                      |
            | credit card                                   |
            | card operative limits tdc                     |
        And the user accesses to expense control of his credit card
        And the analytics interceptor service is initiated
        When the user selects the "digital" limit configuration
        Then the analytics events contains the following variables
            | item                     | value                                                      | type         | event              |
            | analytics                | analytics/glomo_base                                       | json schema  | App On Click Start |
            | version DL               | 20250414_5.0                                               | string       | App On Click Start |
            | page name                | app:privada:personas:tarjetas:credito:control de gastos    | string       | App On Click Start |
            | level 1                  | tarjetas                                                   | string       | App On Click Start |
            | level 2                  | credito                                                    | string       | App On Click Start |
            | level 3                  | control de gastos                                          | string       | App On Click Start |
            | language                 | ES                                                         | string       | App On Click Start |
            | page area                | privada                                                    | string       | App On Click Start |
            | page intent              | informacion                                                | string       | App On Click Start |
            | channel                  | online                                                     | string       | App On Click Start |
            | page instance ID         | de                                                         | string       | App On Click Start |
            | page info version        | appVersion                                                 | regexp named | App On Click Start |
            | page segment             | personas                                                   | string       | App On Click Start |
            | sysEnv                   | app                                                        | string       | App On Click Start |
            | business unit            | BBVA Mexico                                                | string       | App On Click Start |
            | site app name            | App BBVA Mexico                                            | string       | App On Click Start |
            | project name             | Glomo                                                      | string       | App On Click Start |
            | device mobile            | si                                                         | string       | App On Click Start |
            | user userState           | logado                                                     | string       | App On Click Start |
            | profile ID               | profileID                                                  | regexp named | App On Click Start |
            | user segment global      | 003001                                                     | string       | App On Click Start |
            | user gender              | gender                                                     | regexp named | App On Click Start |
            | user age                 | age                                                        | regexp named | App On Click Start |
            | global application       | card limits update                                         | string       | App On Click Start |
            | application name         | modificar limites tarjeta                                  | string       | App On Click Start |
            | application type         | operativa                                                  | string       | App On Click Start |
            | application step         | control de gastos credito                                  | string       | App On Click Start |
            | fulfillment model        | online                                                     | string       | App On Click Start |
            | product primary category | tarjetas                                                   | string       | App On Click Start |
            | product subtype          | tarjetas credito                                           | string       | App On Click Start |
            | product name             | platinum bbva                                              | string       | App On Click Start |
            | product amount           | 1000                                                       | string       | App On Click Start |
            | product currency         | MXN                                                        | string       | App On Click Start |
            | internal campaign        |                                                            | empty array  | App On Click Start |
            | optimization attributes  |                                                            | empty array  | App On Click Start |

    @ANA_EVENT_AAT003
    @analytics
    @web @android @ios
    @MX @backend(test) @vbank
    @web-done
    Scenario: Analytics - Operational Limits Configuration for physical card- APP ONCLICK START
        Given a user with the following criteria
            | criteria                                      |
            | credit card                                   |
            | card operative limits tdc                     |
        And the user accesses to expense control of his credit card
        And the analytics interceptor service is initiated
        When the user selects the "physical" limit configuration
        Then the analytics events contains the following variables
            | item                     | value                                                      | type         | event              |
            | analytics                | analytics/glomo_base                                       | json schema  | App On Click Start |
            | version DL               | 20250414_5.0                                               | string       | App On Click Start |
            | page name                | app:privada:personas:tarjetas:credito:control de gastos    | string       | App On Click Start |
            | level 1                  | tarjetas                                                   | string       | App On Click Start |
            | level 2                  | credito                                                    | string       | App On Click Start |
            | level 3                  | control de gastos                                          | string       | App On Click Start |
            | language                 | ES                                                         | string       | App On Click Start |
            | page area                | privada                                                    | string       | App On Click Start |
            | page intent              | informacion                                                | string       | App On Click Start |
            | channel                  | online                                                     | string       | App On Click Start |
            | page instance ID         | de                                                         | string       | App On Click Start |
            | page info version        | appVersion                                                 | regexp named | App On Click Start |
            | page segment             | personas                                                   | string       | App On Click Start |
            | sysEnv                   | app                                                        | string       | App On Click Start |
            | business unit            | BBVA Mexico                                                | string       | App On Click Start |
            | site app name            | App BBVA Mexico                                            | string       | App On Click Start |
            | project name             | Glomo                                                      | string       | App On Click Start |
            | device mobile            | si                                                         | string       | App On Click Start |
            | user userState           | logado                                                     | string       | App On Click Start |
            | profile ID               | profileID                                                  | regexp named | App On Click Start |
            | user segment global      | 003001                                                     | string       | App On Click Start |
            | user gender              | gender                                                     | regexp named | App On Click Start |
            | user age                 | age                                                        | regexp named | App On Click Start |
            | global application       | card limits update                                         | string       | App On Click Start |
            | application name         | modificar limites tarjeta                                  | string       | App On Click Start |
            | application type         | operativa                                                  | string       | App On Click Start |
            | application step         | control de gastos credito                                  | string       | App On Click Start |
            | fulfillment model        | online                                                     | string       | App On Click Start |
            | product primary category | tarjetas                                                   | string       | App On Click Start |
            | product subtype          | tarjetas credito                                           | string       | App On Click Start |
            | product name             | platinum bbva                                              | string       | App On Click Start |
            | product amount           | 1000                                                       | string       | App On Click Start |
            | product currency         | MXN                                                        | string       | App On Click Start |
            | internal campaign        |                                                            | empty array  | App On Click Start |
            | optimization attributes  |                                                            | empty array  | App On Click Start |

    @ANA_EVENT_AAT004
    @analytics
    @web @android @ios
    @MX @backend(test) @vbank
    @web-done
    Scenario: Analytics - Access to limits list for digital card - APP PAGE VISIT
        Given a user with the following criteria
            | criteria                                      |
            | credit card                                   |
            | card operative limits tdc                     |
        And the user accesses to expense control of his credit card
        And the analytics interceptor service is initiated
        When the user selects the "digital" limit configuration
        Then the analytics events contains the following variables:
            | item                     | value                                                                                  | type         | event          |
            | analytics                | analytics/glomo_base                                                                   | json schema  | App Page Visit |
            | version DL               | 20250414_5.0                                                                           | string       | App Page Visit |
            | page name                | app:privada:personas:tarjetas:credito:modificar limites tarjeta:1 ingresa nuevo limite | string       | App Page Visit |
            | level 1                  | tarjetas                                                                               | string       | App Page Visit |
            | level 2                  | credito                                                                                | string       | App Page Visit |
            | level 3                  | modificar limites tarjeta                                                              | string       | App Page Visit |
            | level 4                  | 1 ingresa nuevo limite                                                                 | string       | App Page Visit |
            | language                 | ES                                                                                     | string       | App Page Visit |
            | page area                | privada                                                                                | string       | App Page Visit |
            | page intent              | informacion                                                                            | string       | App Page Visit |
            | channel                  | online                                                                                 | string       | App Page Visit |
            | page instance ID         | de                                                                                     | string       | App Page Visit |
            | page info version        | appVersion                                                                             | regexp named | App Page Visit |
            | page segment             | personas                                                                               | string       | App Page Visit |
            | sysEnv                   | app                                                                                    | string       | App Page Visit |
            | business unit            | BBVA Mexico                                                                            | string       | App Page Visit |
            | site app name            | App BBVA Mexico                                                                        | string       | App Page Visit |
            | project name             | Glomo                                                                                  | string       | App Page Visit |
            | device mobile            | si                                                                                     | string       | App Page Visit |
            | user userState           | logado                                                                                 | string       | App Page Visit |
            | profile ID               | profileID                                                                              | regexp named | App Page Visit |
            | user segment global      | 003001                                                                                 | string       | App Page Visit |
            | user gender              | gender                                                                                 | regexp named | App Page Visit |
            | user age                 | age                                                                                    | regexp named | App Page Visit |
            | global application       | card limits update                                                                     | string       | App Page Visit |
            | application name         | modificar limites tarjeta                                                              | string       | App Page Visit |
            | application type         | operativa                                                                              | string       | App Page Visit |
            | application step         | 1 ingresa nuevo limite                                                                 | string       | App Page Visit |
            | fulfillment model        | online                                                                                 | string       | App Page Visit |
            | application typology     | tarjeta digital                                                                        | string       | App Page Visit |
            | product primary category | tarjetas                                                                               | string       | App Page Visit |
            | product subtype          | tarjetas credito                                                                       | string       | App Page Visit |
            | product name             | digital bbva                                                                           | string       | App Page Visit |
            | product amount           | 1000                                                                                   | string       | App Page Visit |
            | product currency         | MXN                                                                                    | string       | App Page Visit |
            | internal campaign        |                                                                                        | empty array  | App Page Visit |
            | optimization attributes  |                                                                                        | empty array  | App Page Visit |

    @ANA_EVENT_AAT005
    @analytics
    @web @android @ios
    @MX @backend(test) @vbank
    @web-done
    Scenario: Analytics - Access to limits list for physical card - APP PAGE VISIT
        Given a user with the following criteria
            | criteria                                      |
            | credit card                                   |
            | card operative limits tdc                     |
        And the user accesses to expense control of his credit card
        And the analytics interceptor service is initiated
        When the user selects the "physical" limit configuration
        Then the analytics events contains the following variables:
            | item                     | value                                                                                  | type         | event          |
            | analytics                | analytics/glomo_base                                                                   | json schema  | App Page Visit |
            | version DL               | 20250414_5.0                                                                           | string       | App Page Visit |
            | page name                | app:privada:personas:tarjetas:credito:modificar limites tarjeta:1 ingresa nuevo limite | string       | App Page Visit |
            | level 1                  | tarjetas                                                                               | string       | App Page Visit |
            | level 2                  | credito                                                                                | string       | App Page Visit |
            | level 3                  | modificar limites tarjeta                                                              | string       | App Page Visit |
            | level 4                  | 1 ingresa nuevo limite                                                                 | string       | App Page Visit |
            | language                 | ES                                                                                     | string       | App Page Visit |
            | page area                | privada                                                                                | string       | App Page Visit |
            | page intent              | informacion                                                                            | string       | App Page Visit |
            | channel                  | online                                                                                 | string       | App Page Visit |
            | page instance ID         | de                                                                                     | string       | App Page Visit |
            | page info version        | appVersion                                                                             | regexp named | App Page Visit |
            | page segment             | personas                                                                               | string       | App Page Visit |
            | sysEnv                   | app                                                                                    | string       | App Page Visit |
            | business unit            | BBVA Mexico                                                                            | string       | App Page Visit |
            | site app name            | App BBVA Mexico                                                                        | string       | App Page Visit |
            | project name             | Glomo                                                                                  | string       | App Page Visit |
            | device mobile            | si                                                                                     | string       | App Page Visit |
            | user userState           | logado                                                                                 | string       | App Page Visit |
            | profile ID               | profileID                                                                              | regexp named | App Page Visit |
            | user segment global      | 003001                                                                                 | string       | App Page Visit |
            | user gender              | gender                                                                                 | regexp named | App Page Visit |
            | user age                 | age                                                                                    | regexp named | App Page Visit |
            | global application       | card limits update                                                                     | string       | App Page Visit |
            | application name         | modificar limites tarjeta                                                              | string       | App Page Visit |
            | application type         | operativa                                                                              | string       | App Page Visit |
            | application step         | 1 ingresa nuevo limite                                                                 | string       | App Page Visit |
            | fulfillment model        | online                                                                                 | string       | App Page Visit |
            | application typology     | tarjeta fisica                                                                         | string       | App Page Visit |
            | product primary category | tarjetas                                                                               | string       | App Page Visit |
            | product subtype          | tarjetas credito                                                                       | string       | App Page Visit |
            | product name             | platinum bbva                                                                          | string       | App Page Visit |
            | product amount           | 1000                                                                                   | string       | App Page Visit |
            | product currency         | MXN                                                                                    | string       | App Page Visit |
            | internal campaign        |                                                                                        | empty array  | App Page Visit |
            | optimization attributes  |                                                                                        | empty array  | App Page Visit |

    @ANA_EVENT_AAT006
    @analytics
    @web @android @ios
    @MX @backend(test) @vbank
    @web-done
    Scenario: Analytics - Access to edit limits configuration for digital card - APP STARTED
        Given a user with the following criteria
            | criteria                                      |
            | credit card                                   |
            | card operative limits tdc                     |
        And the user accesses the "digital" limit configuration of his credit card
        And the analytics interceptor service is initiated
        When the user defines the new limit for an amount of "12000"
        Then the analytics events contains the following variables:
            | item                     | value                                                                                  | type         | event       |
            | analytics                | analytics/glomo_base                                                                   | json schema  | App Started |
            | version DL               | 20250414_5.0                                                                           | string       | App Started |
            | page name                | app:privada:personas:tarjetas:credito:modificar limites tarjeta:1 ingresa nuevo limite | string       | App Started |
            | level 1                  | tarjetas                                                                               | string       | App Started |
            | level 2                  | credito                                                                                | string       | App Started |
            | level 3                  | modificar limites tarjeta                                                              | string       | App Started |
            | level 4                  | 1 ingresa nuevo limite                                                                 | string       | App Started |
            | language                 | ES                                                                                     | string       | App Started |
            | page area                | privada                                                                                | string       | App Started |
            | page intent              | informacion                                                                            | string       | App Started |
            | channel                  | online                                                                                 | string       | App Started |
            | page instance ID         | de                                                                                     | string       | App Started |
            | page info version        | appVersion                                                                             | regexp named | App Started |
            | page segment             | personas                                                                               | string       | App Started |
            | sysEnv                   | app                                                                                    | string       | App Started |
            | business unit            | BBVA Mexico                                                                            | string       | App Started |
            | site app name            | App BBVA Mexico                                                                        | string       | App Started |
            | project name             | Glomo                                                                                  | string       | App Started |
            | device mobile            | si                                                                                     | string       | App Started |
            | user userState           | logado                                                                                 | string       | App Started |
            | profile ID               | profileID                                                                              | regexp named | App Started |
            | user segment global      | 003001                                                                                 | string       | App Started |
            | user gender              | gender                                                                                 | regexp named | App Started |
            | user age                 | age                                                                                    | regexp named | App Started |
            | global application       | card limits update                                                                     | string       | App Started |
            | application name         | modificar limites tarjeta                                                              | string       | App Started |
            | application type         | operativa                                                                              | string       | App Started |
            | application step         | limite diario                                                                          | string       | App Started |
            | fulfillment model        | online                                                                                 | string       | App Started |
            | application typology     | tarjeta digital                                                                        | string       | App Started |
            | product primary category | tarjetas                                                                               | string       | App Started |
            | product subtype          | tarjetas credito                                                                       | string       | App Started |
            | product name             | digital bbva                                                                           | string       | App Started |
            | product amount           | 1000                                                                                   | string       | App Started |
            | product currency         | MXN                                                                                    | string       | App Started |
            | internal campaign        |                                                                                        | empty array  | App Started |
            | optimization attributes  |                                                                                        | empty array  | App Started |

    @ANA_EVENT_AAT007
    @analytics
    @web @android @ios
    @MX @backend(test) @vbank
    @web-done
    Scenario: Analytics - Access to edit limits configuration for physical card- APP STARTED
        Given a user with the following criteria
            | criteria                                      |
            | credit card                                   |
            | card operative limits tdc                     |
        And the user accesses the "physical" limit configuration of his credit card
        And the analytics interceptor service is initiated
        When the user defines the new limit for an amount of "12000"
        Then the analytics events contains the following variables:
            | item                     | value                                                                                  | type         | event       |
            | analytics                | analytics/glomo_base                                                                   | json schema  | App Started |
            | version DL               | 20250414_5.0                                                                           | string       | App Started |
            | page name                | app:privada:personas:tarjetas:credito:modificar limites tarjeta:1 ingresa nuevo limite | string       | App Started |
            | level 1                  | tarjetas                                                                               | string       | App Started |
            | level 2                  | credito                                                                                | string       | App Started |
            | level 3                  | modificar limites tarjeta                                                              | string       | App Started |
            | level 4                  | 1 ingresa nuevo limite                                                                 | string       | App Started |
            | language                 | ES                                                                                     | string       | App Started |
            | page area                | privada                                                                                | string       | App Started |
            | page intent              | informacion                                                                            | string       | App Started |
            | channel                  | online                                                                                 | string       | App Started |
            | page instance ID         | de                                                                                     | string       | App Started |
            | page info version        | appVersion                                                                             | regexp named | App Started |
            | page segment             | personas                                                                               | string       | App Started |
            | sysEnv                   | app                                                                                    | string       | App Started |
            | business unit            | BBVA Mexico                                                                            | string       | App Started |
            | site app name            | App BBVA Mexico                                                                        | string       | App Started |
            | project name             | Glomo                                                                                  | string       | App Started |
            | device mobile            | si                                                                                     | string       | App Started |
            | user userState           | logado                                                                                 | string       | App Started |
            | profile ID               | profileID                                                                              | regexp named | App Started |
            | user segment global      | 003001                                                                                 | string       | App Started |
            | user gender              | gender                                                                                 | regexp named | App Started |
            | user age                 | age                                                                                    | regexp named | App Started |
            | global application       | card limits update                                                                     | string       | App Started |
            | application name         | modificar limites tarjeta                                                              | string       | App Started |
            | application type         | operativa                                                                              | string       | App Started |
            | application step         | limite diario                                                                          | string       | App Started |
            | fulfillment model        | online                                                                                 | string       | App Started |
            | application typology     | tarjeta fisica                                                                         | string       | App Started |
            | product primary category | tarjetas                                                                               | string       | App Started |
            | product subtype          | tarjetas credito                                                                       | string       | App Started |
            | product name             | platinum bbva                                                                          | string       | App Started |
            | product amount           | 1000                                                                                   | string       | App Started |
            | product currency         | MXN                                                                                    | string       | App Started |
            | internal campaign        |                                                                                        | empty array  | App Started |
            | optimization attributes  |                                                                                        | empty array  | App Started |

    @ANA_EVENT_AAT008
    @analytics
    @web-done @web @android @ios
    @MX @backend(test) @vbank
    Scenario: Analytics - The user change any limit successful for digital card - APP COMPLETED
        Given a user with the following criteria
            | criteria                                      |
            | credit card                                   |
            | card operative limits tdc                     |
        And the user accesses the "digital" limit configuration of his credit card
        And the analytics interceptor service is initiated
        When the user confirms the new limit for an amount of "1000"
        Then the analytics events contains the following variables:
            | item                     | value                                                                          | type         | event         |
            | analytics                | analytics/glomo_base                                                           | json schema  | App Completed |
            | version DL               | 20250414_5.0                                                                   | string       | App Completed |
            | page name                | app:privada:personas:tarjetas:credito:modificar limites tarjeta:pagina exitosa | string       | App Completed |
            | level 1                  | tarjetas                                                                       | string       | App Completed |
            | level 2                  | credito                                                                        | string       | App Completed |
            | level 3                  | modificar limites tarjeta                                                      | string       | App Completed |
            | level 4                  | pagina exitosa                                                                 | string       | App Completed |
            | language                 | ES                                                                             | string       | App Completed |
            | page area                | privada                                                                        | string       | App Completed |
            | page intent              | informacion                                                                    | string       | App Completed |
            | channel                  | online                                                                         | string       | App Completed |
            | page instance ID         | de                                                                             | string       | App Completed |
            | page info version        | appVersion                                                                     | regexp named | App Completed |
            | page segment             | personas                                                                       | string       | App Completed |
            | sysEnv                   | app                                                                            | string       | App Completed |
            | business unit            | BBVA Mexico                                                                    | string       | App Completed |
            | site app name            | App BBVA Mexico                                                                | string       | App Completed |
            | project name             | Glomo                                                                          | string       | App Completed |
            | device mobile            | si                                                                             | string       | App Completed |
            | user userState           | logado                                                                         | string       | App Completed |
            | profile ID               | profileID                                                                      | regexp named | App Completed |
            | user segment global      | 003001                                                                         | string       | App Completed |
            | user gender              | gender                                                                         | regexp named | App Completed |
            | user age                 | age                                                                            | regexp named | App Completed |
            | global application       | card limits update                                                             | string       | App Completed |
            | application name         | modificar limites tarjeta                                                      | string       | App Completed |
            | application type         | operativa                                                                      | string       | App Completed |
            | application step         | pagina exitosa                                                                 | string       | App Completed |
            | fulfillment model        | online                                                                         | string       | App Completed |
            | application typology     | tarjeta digital                                                                | string       | App Completed |
            | application state        | finalizado                                                                     | string       | App Completed |
            | product primary category | tarjetas                                                                       | string       | App Completed |
            | product subtype          | tarjetas credito                                                               | string       | App Completed |
            | product name             | digital bbva                                                                   | string       | App Completed |
            | product amount           | 1000                                                                           | string       | App Completed |
            | product currency         | MXN                                                                            | string       | App Completed |
            | internal campaign        |                                                                                | empty array  | App Completed |
            | optimization attributes  |                                                                                | empty array  | App Completed |

    @ANA_EVENT_AAT009
    @analytics
    @web-done @web @android @ios
    @MX @backend(test) @vbank
    Scenario: Analytics - The user change any limit successful for physical card - APP COMPLETED
        Given a user with the following criteria
            | criteria                                      |
            | credit card                                   |
            | card operative limits tdc                     |
        And the user accesses the "physical" limit configuration of his credit card
        And the analytics interceptor service is initiated
        When the user confirms the new limit for an amount of "1000"
        Then the analytics events contains the following variables:
            | item                     | value                                                                          | type         | event         |
            | analytics                | analytics/glomo_base                                                           | json schema  | App Completed |
            | version DL               | 20250414_5.0                                                                   | string       | App Completed |
            | page name                | app:privada:personas:tarjetas:credito:modificar limites tarjeta:pagina exitosa | string       | App Completed |
            | level 1                  | tarjetas                                                                       | string       | App Completed |
            | level 2                  | credito                                                                        | string       | App Completed |
            | level 3                  | modificar limites tarjeta                                                      | string       | App Completed |
            | level 4                  | pagina exitosa                                                                 | string       | App Completed |
            | language                 | ES                                                                             | string       | App Completed |
            | page area                | privada                                                                        | string       | App Completed |
            | page intent              | informacion                                                                    | string       | App Completed |
            | channel                  | online                                                                         | string       | App Completed |
            | page instance ID         | de                                                                             | string       | App Completed |
            | page info version        | appVersion                                                                     | regexp named | App Completed |
            | page segment             | personas                                                                       | string       | App Completed |
            | sysEnv                   | app                                                                            | string       | App Completed |
            | business unit            | BBVA Mexico                                                                    | string       | App Completed |
            | site app name            | App BBVA Mexico                                                                | string       | App Completed |
            | project name             | Glomo                                                                          | string       | App Completed |
            | device mobile            | si                                                                             | string       | App Completed |
            | user userState           | logado                                                                         | string       | App Completed |
            | profile ID               | profileID                                                                      | regexp named | App Completed |
            | user segment global      | 003001                                                                         | string       | App Completed |
            | user gender              | gender                                                                         | regexp named | App Completed |
            | user age                 | age                                                                            | regexp named | App Completed |
            | global application       | card limits update                                                             | string       | App Completed |
            | application name         | modificar limites tarjeta                                                      | string       | App Completed |
            | application type         | operativa                                                                      | string       | App Completed |
            | application step         | pagina exitosa                                                                 | string       | App Completed |
            | fulfillment model        | online                                                                         | string       | App Completed |
            | application typology     | tarjeta fisica                                                                 | string       | App Completed |
            | application state        | finalizado                                                                     | string       | App Completed |
            | product primary category | tarjetas                                                                       | string       | App Completed |
            | product subtype          | tarjetas credito                                                               | string       | App Completed |
            | product name             | platinum bbva                                                                  | string       | App Completed |
            | product amount           | 1000                                                                           | string       | App Completed |
            | product currency         | MXN                                                                            | string       | App Completed |
            | internal campaign        |                                                                                | empty array  | App Completed |
            | optimization attributes  |                                                                                | empty array  | App Completed |

    @ANA_AAT010
    @analytics
    @web @android @ios
    @MX @backend(test) @vbank
    @web-done
    Scenario: Limits icon help modal - PAGE VIEW
        Given a user with the following criteria
            | criteria                                      |
            | credit card                                   |
            | card operative limits tdc                     |
        When the user accesses the limits of his credit card
        And the user taps on help icon of daily limits
        Then the device contains the following variables:
            | item                    | value                                                               | type             |
            | analytics               | analytics/glomo_base                                                | json schema      |
            | version DL              | 20250414_5.0                                                        | string           |
            | page name               | app:privada:personas:tarjetas:credito:informacion limites diarios   | string           |
            | level 1                 | tarjetas                                                            | string           |
            | level 2                 | credito                                                             | string           |
            | level 3                 | informacion limites diarios                                         | string           |
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
            | profile ID              | profileID                                                           | regexp named     |
            | user segment global     | 003001                                                              | string           |
            | user gender             | gender                                                              | regexp named     |
            | user age                | age                                                                 | regexp named     |
            | internal campaign       |                                                                     | empty array      |
            | optimization attributes |                                                                     | empty array      |
            | application             |                                                                     | empty str object |
            | products attributes     |                                                                     | empty array      |

    @ANA_AAT011
    @analytics
    @web @android @ios
    @MX @backend(test) @vbank
    @web-done
    Scenario: Limits Header help modal - PAGE VIEW
        Given a user with the following criteria
            | criteria                                      |
            | credit card                                   |
            | card operative limits tdc                     |
        When the user accesses the limits of his credit card
        And the user taps on help header icon of daily limits
        Then the device contains the following variables:
            | item                    | value                                                               | type             |
            | analytics               | analytics/glomo_base                                                | json schema      |
            | version DL              | 20250414_5.0                                                        | string           |
            | page name               | app:privada:personas:tarjetas:credito:informacion control de gastos | string           |
            | level 1                 | tarjetas                                                            | string           |
            | level 2                 | credito                                                             | string           |
            | level 3                 | informacion control de gastos                                       | string           |
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
            | profile ID              | profileID                                                           | regexp named     |
            | user segment global     | 003001                                                              | string           |
            | user gender             | gender                                                              | regexp named     |
            | user age                | age                                                                 | regexp named     |
            | internal campaign       |                                                                     | empty array      |
            | optimization attributes |                                                                     | empty array      |
            | application             |                                                                     | empty str object |
            | products attributes     |                                                                     | empty array      |

    @ANA_AAT012
    @analytics
    @web-done @web @android @ios
    @MX @backend(test) @vbank
    Scenario: Analytics - Show help information of limit for digital card - APP COMPLETED
        Given a user with the following criteria
            | criteria                                      |
            | credit card                                   |
            | card operative limits tdc                     |
        And the user accesses the "digital" limit configuration of his credit card
        When the user taps on selected limit info icon
        Then the device contains the following variables:
            | item                    | value                                                               | type             |
            | analytics               | analytics/glomo_base                                                | json schema      |
            | version DL              | 20250414_5.0                                                        | string           |
            | page name               | app:privada:personas:tarjetas:credito:informacion limite de compras | string           |
            | level 1                 | tarjetas                                                            | string           |
            | level 2                 | credito                                                             | string           |
            | level 3                 | informacion limite de compras                                       | string           |
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
            | profile ID              | profileID                                                           | regexp named     |
            | user segment global     | 003001                                                              | string           |
            | user gender             | gender                                                              | regexp named     |
            | user age                | age                                                                 | regexp named     |
            | internal campaign       |                                                                     | empty array      |
            | optimization attributes |                                                                     | empty array      |
            | application             |                                                                     | empty str object |
            | products attributes     |                                                                     | empty array      |

    @ANA_AAT013
    @analytics
    @web-done @web @android @ios
    @MX @backend(test) @vbank
    Scenario: Analytics - Show help information of limit for physical card - APP COMPLETED
        Given a user with the following criteria
            | criteria                                      |
            | credit card                                   |
            | card operative limits tdc                     |
        And the user accesses the "physical" limit configuration of his credit card
        When the user taps on selected limit info icon
        Then the device contains the following variables:
            | item                    | value                                                               | type             |
            | analytics               | analytics/glomo_base                                                | json schema      |
            | version DL              | 20250414_5.0                                                        | string           |
            | page name               | app:privada:personas:tarjetas:credito:informacion limite de compras | string           |
            | level 1                 | tarjetas                                                            | string           |
            | level 2                 | credito                                                             | string           |
            | level 3                 | informacion limite de compras                                       | string           |
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
            | profile ID              | profileID                                                           | regexp named     |
            | user segment global     | 003001                                                              | string           |
            | user gender             | gender                                                              | regexp named     |
            | user age                | age                                                                 | regexp named     |
            | internal campaign       |                                                                     | empty array      |
            | optimization attributes |                                                                     | empty array      |
            | application             |                                                                     | empty str object |
            | products attributes     |                                                                     | empty array      |

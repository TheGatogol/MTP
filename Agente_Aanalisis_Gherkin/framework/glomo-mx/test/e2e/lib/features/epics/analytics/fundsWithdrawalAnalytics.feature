@fundsWithdrawalAnalytics
Feature: Analytics - Funds Withdrawal

    @ANA_FW001
    @analytics
    @MX
    @web
    @vbank
    @backend(test)
    @web-done
    Scenario: Funds Withdrawal - App Page Visit
        Given a user with the following criteria
            | criteria         |
            | investment funds |
            | multiple funds   |
        When the user accesses to the funds withdrawal screen
        Then the device contains the following variables
            | item                     | value                                                          | type         |
            | analytics                | analytics/glomo_base                                           | json schema  |
            | page name                | app:privada:personas:inversiones:venta fondo:1 cuenta asociada | string       |
            | level 1                  | inversiones                                                    | string       |
            | level 2                  | venta fondo                                                    | string       |
            | level 3                  | 1 cuenta asociada                                              | string       |
            | language                 | ES                                                             | string       |
            | page area                | privada                                                        | string       |
            | page intent              | transaccion                                                    | string       |
            | channel                  | online                                                         | string       |
            | page instance ID         | de                                                             | string       |
            | page info version        | appVersion                                                     | regexp named |
            | page segment             | personas                                                       | string       |
            | sysEnv                   | app                                                            | string       |
            | business unit            | BBVA Mexico                                                    | string       |
            | site app name            | App BBVA Mexico                                                | string       |
            | project name             | DIY E2E Sales                                                  | string       |
            | device mobile            | si                                                             | string       |
            | user userState           | logado                                                         | string       |
            | profile ID               | profileID                                                      | regexp named |
            | user segment global      | 003001                                                         | string       |
            | user gender              | gender                                                         | regexp named |
            | user age                 | age                                                            | regexp named |
            | user country             | lettersAndSpaceOrEmpty                                         | regexp named |
            | global application       | funds withdrawal                                               | string       |
            | application name         | venta fondo                                                    | string       |
            | application type         | operativa                                                      | string       |
            | application typology     | corto plazo                                                    | string       |
            | application step         | 1 cuenta asociada                                              | string       |
            | fulfillment model        | online                                                         | string       |
            | product primary category | inversiones                                                    | string       |
            | product subtype          | fondos inversion                                               | string       |
            | internal campaign        |                                                                | empty array  |
            | optimization attributes  |                                                                | empty array  |

    @ANA_FW002
    @analytics
    @MX
    @web
    @vbank
    @backend(test)
    @web-done
    Scenario: Funds Withdrawal - App Step 2
        Given a user with the following criteria
            | criteria         |
            | investment funds |
            | multiple funds   |
        When the user accesses to the "step 2" section of the funds withdrawal screen
        Then the device contains the following variables
            | item                     | value                                                        | type         |
            | analytics                | analytics/glomo_base                                         | json schema  |
            | page name                | app:privada:personas:inversiones:venta fondo:2 tipo de venta | string       |
            | level 1                  | inversiones                                                  | string       |
            | level 2                  | venta fondo                                                  | string       |
            | level 3                  | 2 tipo de venta                                              | string       |
            | language                 | ES                                                           | string       |
            | page area                | privada                                                      | string       |
            | page intent              | transaccion                                                  | string       |
            | channel                  | online                                                       | string       |
            | page instance ID         | de                                                           | string       |
            | page info version        | appVersion                                                   | regexp named |
            | page segment             | personas                                                     | string       |
            | sysEnv                   | app                                                          | string       |
            | business unit            | BBVA Mexico                                                  | string       |
            | site app name            | App BBVA Mexico                                              | string       |
            | project name             | DIY E2E Sales                                                | string       |
            | device mobile            | si                                                           | string       |
            | user userState           | logado                                                       | string       |
            | profile ID               | profileID                                                    | regexp named |
            | user segment global      | 003001                                                       | string       |
            | user gender              | gender                                                       | regexp named |
            | user age                 | age                                                          | regexp named |
            | user country             | lettersAndSpaceOrEmpty                                       | regexp named |
            | global application       | funds withdrawal                                             | string       |
            | application name         | venta fondo                                                  | string       |
            | application type         | operativa                                                    | string       |
            | application typology     | corto plazo                                                  | string       |
            | application step         | 2 tipo de venta                                              | string       |
            | fulfillment model        | online                                                       | string       |
            | product primary category | inversiones                                                  | string       |
            | product subtype          | fondos inversion                                             | string       |
            | internal campaign        |                                                              | empty array  |
            | optimization attributes  |                                                              | empty array  |

    @ANA_FW003
    @analytics
    @MX
    @web
    @vbank
    @backend(test)
    @web-done
    Scenario: Funds Withdrawal - App Page View
        Given a user with the following criteria
            | criteria         |
            | investment funds |
            | multiple funds   |
        When the user accesses to the "step 3" section of the funds withdrawal screen
        Then the device contains the following variables
            | item                | value                                                    | type         |
            | analytics           | analytics/glomo_base                                     | json schema  |
            | page name           | app:privada:personas:inversiones:venta fondo:3 confirmar | string       |
            | level 1             | inversiones                                              | string       |
            | level 2             | venta fondo                                              | string       |
            | level 3             | 3 confirmar                                              | string       |
            | language            | ES                                                       | string       |
            | page area           | privada                                                  | string       |
            | page intent         | transaccion                                              | string       |
            | channel             | online                                                   | string       |
            | page instance ID    | de                                                       | string       |
            | page info version   | appVersion                                               | regexp named |
            | page segment        | personas                                                 | string       |
            | sysEnv              | app                                                      | string       |
            | business unit       | BBVA Mexico                                              | string       |
            | site app name       | App BBVA Mexico                                          | string       |
            | project name        | DIY E2E Sales                                            | string       |
            | device mobile       | si                                                       | string       |
            | user userState      | logado                                                   | string       |
            | profile ID          | profileID                                                | regexp named |
            | user segment global | 003001                                                   | string       |
            | user gender         | gender                                                   | regexp named |
            | user age            | age                                                      | regexp named |
            | user country        | lettersAndSpaceOrEmpty                                   | regexp named |

    @ANA_FW004
    @analytics
    @MX
    @web
    @vbank
    @backend(test)
    @web-done
    Scenario: Funds Withdrawal - App Step 3
        Given a user with the following criteria
            | criteria         |
            | investment funds |
            | multiple funds   |
        When the user accesses to the "step 4" section of the funds withdrawal screen
        Then the device contains the following variables
            | item                     | value                                                    | type         |
            | analytics                | analytics/glomo_base                                     | json schema  |
            | page name                | app:privada:personas:inversiones:venta fondo:3 confirmar | string       |
            | level 1                  | inversiones                                              | string       |
            | level 2                  | venta fondo                                              | string       |
            | level 3                  | 3 confirmar                                              | string       |
            | language                 | ES                                                       | string       |
            | page area                | privada                                                  | string       |
            | page intent              | transaccion                                              | string       |
            | channel                  | online                                                   | string       |
            | page instance ID         | de                                                       | string       |
            | page info version        | appVersion                                               | regexp named |
            | page segment             | personas                                                 | string       |
            | sysEnv                   | app                                                      | string       |
            | business unit            | BBVA Mexico                                              | string       |
            | site app name            | App BBVA Mexico                                          | string       |
            | project name             | DIY E2E Sales                                            | string       |
            | device mobile            | si                                                       | string       |
            | user userState           | logado                                                   | string       |
            | profile ID               | profileID                                                | regexp named |
            | user segment global      | 003001                                                   | string       |
            | user gender              | gender                                                   | regexp named |
            | user age                 | age                                                      | regexp named |
            | user country             | lettersAndSpaceOrEmpty                                   | regexp named |
            | global application       | funds withdrawal                                         | string       |
            | application name         | venta fondo                                              | string       |
            | application type         | operativa                                                | string       |
            | application typology     | corto plazo                                              | string       |
            | application step         | continuar                                                | string       |
            | fulfillment model        | online                                                   | string       |
            | product primary category | inversiones                                              | string       |
            | product subtype          | fondos inversion                                         | string       |
            | product name             | bbvadol                                                  | string       |
            | product currency         | MXN                                                      | string       |
            | product amount           |                                                          | string       |
            | internal campaign        |                                                          | empty array  |
            | optimization attributes  |                                                          | empty array  |

    @ANA_FW005
    @analytics
    @MX
    @web
    @vbank
    @backend(test)
    @web-done
    Scenario: Funds Withdrawal - App Step 5
        Given a user with the following criteria
            | criteria         |
            | investment funds |
            | multiple funds   |
        When the user accesses to the "step 5" section of the funds withdrawal screen
        Then the device contains the following variables
            | item                     | value                                              | type         |
            | analytics                | analytics/glomo_base                               | json schema  |
            | page name                | app:privada:personas:inversiones:venta fondo:4 otp | string       |
            | level 1                  | inversiones                                        | string       |
            | level 2                  | venta fondo                                        | string       |
            | level 3                  | 4 otp                                              | string       |
            | language                 | ES                                                 | string       |
            | page area                | privada                                            | string       |
            | page intent              | transaccion                                        | string       |
            | channel                  | online                                             | string       |
            | page instance ID         | de                                                 | string       |
            | page info version        | appVersion                                         | regexp named |
            | page segment             | personas                                           | string       |
            | sysEnv                   | app                                                | string       |
            | business unit            | BBVA Mexico                                        | string       |
            | site app name            | App BBVA Mexico                                    | string       |
            | project name             | DIY E2E Sales                                      | string       |
            | device mobile            | si                                                 | string       |
            | user userState           | logado                                             | string       |
            | profile ID               | profileID                                          | regexp named |
            | user segment global      | 003001                                             | string       |
            | user gender              | gender                                             | regexp named |
            | user age                 | age                                                | regexp named |
            | user country             | lettersAndSpaceOrEmpty                             | regexp named |
            | global application       | funds withdrawal                                   | string       |
            | application name         | venta fondo                                        | string       |
            | application type         | operativa                                          | string       |
            | application step         | 4 otp                                              | string       |
            | fulfillment model        | online                                             | string       |
            | product primary category | inversiones                                        | string       |
            | product subtype          | fondos inversion                                   | string       |
            | internal campaign        |                                                    | empty array  |
            | optimization attributes  |                                                    | empty array  |

    @ANA_FW006
    @analytics
    @MX
    @web
    @vbank
    @backend(test)
    @web-done
    Scenario: Funds Withdrawal - App Completed
        Given a user with the following criteria
            | criteria         |
            | investment funds |
            | multiple funds   |
        When the user accesses to the "review" section of the funds withdrawal screen
        Then the device contains the following variables
            | item                     | value                                                       | type         |
            | analytics                | analytics/glomo_base                                        | json schema  |
            | page name                | app:privada:personas:inversiones:venta fondo:pagina exitosa | string       |
            | level 1                  | inversiones                                                 | string       |
            | level 2                  | venta fondo                                                 | string       |
            | level 3                  | pagina exitosa                                              | string       |
            | language                 | ES                                                          | string       |
            | page area                | privada                                                     | string       |
            | page intent              | transaccion                                                 | string       |
            | channel                  | online                                                      | string       |
            | page instance ID         | de                                                          | string       |
            | page info version        | appVersion                                                  | regexp named |
            | page segment             | personas                                                    | string       |
            | sysEnv                   | app                                                         | string       |
            | business unit            | BBVA Mexico                                                 | string       |
            | site app name            | App BBVA Mexico                                             | string       |
            | project name             | DIY E2E Sales                                               | string       |
            | device mobile            | si                                                          | string       |
            | user userState           | logado                                                      | string       |
            | profile ID               | profileID                                                   | regexp named |
            | user segment global      | 003001                                                      | string       |
            | user gender              | gender                                                      | regexp named |
            | user age                 | age                                                         | regexp named |
            | user country             | lettersAndSpaceOrEmpty                                      | regexp named |
            | global application       | funds withdrawal                                            | string       |
            | application name         | venta fondo                                                 | string       |
            | application type         | operativa                                                   | string       |
            | application typology     | corto plazo                                                 | string       |
            | application step         | pagina exitosa                                              | string       |
            | fulfillment model        | online                                                      | string       |
            | product primary category | inversiones                                                 | string       |
            | product subtype          | fondos inversion                                            | string       |
            | product name             | bbvadol                                                     | string       |
            | product currency         | MXN                                                         | string       |
            | product amount           |                                                             | string       |
            | internal campaign        |                                                             | empty array  |
            | optimization attributes  |                                                             | empty array  |

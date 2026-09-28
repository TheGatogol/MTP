@fundsHiringAnalytics
Feature: Analytics - Funds Hiring

    @ANA_FH001
    @analytics
    @MX @backend(test)
    @web
    @vbank
    @web-done
    Scenario: Funds Hiring - App Page Visit
        Given a user with the following criteria
            | criteria     |
            | funds hiring |
            | offers       |
        When the user goes to the funds hiring operation
        Then the device contains the following variables
            | item                     | value                                                     | type         |
            | analytics                | analytics/glomo_base                                      | json schema  |
            | page name                | app:privada:personas:fondos flujo unificado:1 informacion | string       |
            | level 1                  | fondos flujo unificado                                    | string       |
            | level 2                  | 1 informacion                                             | string       |
            | language                 | ES                                                        | string       |
            | page area                | privada                                                   | string       |
            | page intent              | transaccion                                               | string       |
            | channel                  | online                                                    | string       |
            | page instance ID         | de                                                        | string       |
            | page info version        | appVersion                                                | regexp named |
            | page segment             | personas                                                  | string       |
            | sysEnv                   | app                                                       | string       |
            | business unit            | BBVA Mexico                                               | string       |
            | site app name            | App BBVA Mexico                                           | string       |
            | project name             | DIY E2E Sales                                             | string       |
            | device mobile            | si                                                        | string       |
            | user userState           | logado                                                    | string       |
            | profile ID               | profileID                                                 | regexp named |
            | user segment global      | 003001                                                    | string       |
            | user gender              | gender                                                    | regexp named |
            | user age                 | age                                                       | regexp named |
            | user country             | lettersAndSpaceOrEmpty                                    | regexp named |
            | global application       | funds                                                     | string       |
            | application name         | fondos flujo unificado                                    | string       |
            | application type         | contratacion                                              | string       |
            | application step         | 1 informacion                                             | string       |
            | fulfillment model        | online                                                    | string       |
            | product primary category | inversiones                                               | string       |
            | product subtype          | fondos inversion                                          | string       |
            | internal campaign        |                                                           | empty array  |
            | optimization attributes  |                                                           | empty array  |

    @ANA_FH002
    @analytics
    @MX @backend(test)
    @web
    @vbank
    @tmpExclude @JIRA.GLOMOMX-254311
    Scenario: Funds Hiring - App Step 2
        Given the user "5514160078" and "147258369"
        When the user goes to the funds hiring operation
        And the user is in the "select account" step of funds hiring operation
        Then the device contains the following variables
            | item                     | value                                                         | type         |
            | analytics                | analytics/glomo_base                                          | json schema  |
            | page name                | app:privada:personas:fondos flujo unificado:2 cuenta asociada | string       |
            | level 1                  | fondos flujo unificado                                        | string       |
            | level 2                  | 2 cuenta asociada                                             | string       |
            | language                 | ES                                                            | string       |
            | page area                | privada                                                       | string       |
            | page intent              | transaccion                                                   | string       |
            | channel                  | online                                                        | string       |
            | page instance ID         | de                                                            | string       |
            | page info version        | appVersion                                                    | regexp named |
            | page segment             | personas                                                      | string       |
            | sysEnv                   | app                                                           | string       |
            | business unit            | BBVA Mexico                                                   | string       |
            | site app name            | App BBVA Mexico                                               | string       |
            | project name             | DIY E2E Sales                                                 | string       |
            | device mobile            | si                                                            | string       |
            | user userState           | logado                                                        | string       |
            | profile ID               | profileID                                                     | regexp named |
            | user segment global      | 003001                                                        | string       |
            | user gender              | gender                                                        | regexp named |
            | user age                 | age                                                           | regexp named |
            | user country             | lettersAndSpaceOrEmpty                                        | regexp named |
            | global application       | funds                                                         | string       |
            | application name         | fondos flujo unificado                                        | string       |
            | application type         | contratacion                                                  | string       |
            | application step         | 2 cuenta asociada                                             | string       |
            | fulfillment model        | online                                                        | string       |
            | product primary category | inversiones                                                   | string       |
            | product subtype          | fondos inversion                                              | string       |
            | internal campaign        |                                                               | empty array  |
            | optimization attributes  |                                                               | empty array  |

    @ANA_FH003
    @analytics
    @MX @backend(test)
    @web
    @vbank
    @tmpExclude @JIRA.GLOMOMX-254311
    Scenario: Funds Hiring - App Step 3
        Given the user "5514160078" and "147258369"
        When the user goes to the funds hiring operation
        And the user is in the "select investment type" step of funds hiring operation
        Then the device contains the following variables
            | item                     | value                                                               | type         |
            | analytics                | analytics/glomo_base                                                | json schema  |
            | page name                | app:privada:personas:fondos flujo unificado:3 servicio de inversion | string       |
            | level 1                  | fondos flujo unificado                                              | string       |
            | level 2                  | 3 servicio de inversion                                             | string       |
            | language                 | ES                                                                  | string       |
            | page area                | privada                                                             | string       |
            | page intent              | transaccion                                                         | string       |
            | channel                  | online                                                              | string       |
            | page instance ID         | de                                                                  | string       |
            | page info version        | appVersion                                                          | regexp named |
            | page segment             | personas                                                            | string       |
            | sysEnv                   | app                                                                 | string       |
            | business unit            | BBVA Mexico                                                         | string       |
            | site app name            | App BBVA Mexico                                                     | string       |
            | project name             | DIY E2E Sales                                                       | string       |
            | device mobile            | si                                                                  | string       |
            | user userState           | logado                                                              | string       |
            | profile ID               | profileID                                                           | regexp named |
            | user segment global      | 003001                                                              | string       |
            | user gender              | gender                                                              | regexp named |
            | user age                 | age                                                                 | regexp named |
            | user country             | lettersAndSpaceOrEmpty                                              | regexp named |
            | global application       | funds                                                               | string       |
            | application name         | fondos flujo unificado                                              | string       |
            | application type         | contratacion                                                        | string       |
            | application step         | 3 servicio de inversion                                             | string       |
            | fulfillment model        | online                                                              | string       |
            | product primary category | inversiones                                                         | string       |
            | product subtype          | fondos inversion                                                    | string       |
            | internal campaign        |                                                                     | empty array  |
            | optimization attributes  |                                                                     | empty array  |

    @ANA_FH004
    @analytics
    @MX @backend(test)
    @web
    @vbank
    @web-done
    @manual @JIRA.GLOMOMX-245990
    Scenario: Funds Hiring - App Step 4
        Given the user "5514160078" and "147258369"
        When the user goes to the funds hiring operation
        And the user is in the "select fund" step of funds hiring operation
        Then the device contains the following variables
            | item                     | value                                                                        | type         |
            | analytics                | analytics/glomo_base                                                         | json schema  |
            | page name                | app:privada:personas:fondos flujo unificado:4 seleccionar fondo de inversion | string       |
            | level 1                  | fondos flujo unificado                                                       | string       |
            | level 2                  | 4 seleccionar fondo de inversion                                             | string       |
            | language                 | ES                                                                           | string       |
            | page area                | privada                                                                      | string       |
            | page intent              | transaccion                                                                  | string       |
            | channel                  | online                                                                       | string       |
            | page instance ID         | de                                                                           | string       |
            | page info version        | appVersion                                                                   | regexp named |
            | page segment             | personas                                                                     | string       |
            | sysEnv                   | app                                                                          | string       |
            | business unit            | BBVA Mexico                                                                  | string       |
            | site app name            | App BBVA Mexico                                                              | string       |
            | project name             | DIY E2E Sales                                                                | string       |
            | device mobile            | si                                                                           | string       |
            | user userState           | logado                                                                       | string       |
            | profile ID               | profileID                                                                    | regexp named |
            | user segment global      | 003001                                                                       | string       |
            | user gender              | gender                                                                       | regexp named |
            | user age                 | age                                                                          | regexp named |
            | user country             | lettersAndSpaceOrEmpty                                                       | regexp named |
            | global application       | funds                                                                        | string       |
            | application name         | fondos flujo unificado                                                       | string       |
            | application type         | contratacion                                                                 | string       |
            | application step         | 4 seleccionar fondo de inversion                                             | string       |
            | fulfillment model        | online                                                                       | string       |
            | application typology     | tengo poca experiencia                                                       | string       |
            | product primary category | inversiones                                                                  | string       |
            | product subtype          | fondos inversion                                                             | string       |
            | internal campaign        |                                                                              | empty array  |
            | optimization attributes  |                                                                              | empty array  |

    @ANA_FH005
    @analytics
    @MX @backend(test)
    @web
    @vbank
    @manual @JIRA.GLOMOMX-245990
    Scenario: Funds Hiring - App Step 5
        Given the user "5514160078" and "147258369"
        When the user goes to the funds hiring operation
        And the user is in the "input amount" step of funds hiring operation
        Then the device contains the following variables
            | item                           | value                                                          | type         |
            | analytics                      | analytics/glomo_base                                           | json schema  |
            | page name                      | app:privada:personas:fondos flujo unificado:5 insertar importe | string       |
            | level 1                        | fondos flujo unificado                                         | string       |
            | level 2                        | 5 insertar importe                                             | string       |
            | language                       | ES                                                             | string       |
            | page area                      | privada                                                        | string       |
            | page intent                    | transaccion                                                    | string       |
            | channel                        | online                                                         | string       |
            | page instance ID               | de                                                             | string       |
            | page info version              | appVersion                                                     | regexp named |
            | page segment                   | personas                                                       | string       |
            | sysEnv                         | app                                                            | string       |
            | business unit                  | BBVA Mexico                                                    | string       |
            | site app name                  | App BBVA Mexico                                                | string       |
            | project name                   | DIY E2E Sales                                                  | string       |
            | device mobile                  | si                                                             | string       |
            | user userState                 | logado                                                         | string       |
            | profile ID                     | profileID                                                      | regexp named |
            | user segment global            | 003001                                                         | string       |
            | user gender                    | gender                                                         | regexp named |
            | user age                       | age                                                            | regexp named |
            | user country                   | lettersAndSpaceOrEmpty                                         | regexp named |
            | global application             | funds                                                          | string       |
            | application name               | fondos flujo unificado                                         | string       |
            | application type               | contratacion                                                   | string       |
            | application step               | 5 insertar importe                                             | string       |
            | fulfillment model              | online                                                         | string       |
            | application typology           | tengo poca experiencia                                         | string       |
            | application program type hired | fondos deuda                                                   | string       |
            | application offer              | mismo dia                                                      | string       |
            | product primary category       | inversiones                                                    | string       |
            | product subtype                | fondos inversion                                               | string       |
            | product name                   | bbvaliq                                                        | string       |
            | internal campaign              |                                                                | empty array  |
            | optimization attributes        |                                                                | empty array  |

    @ANA_FH006
    @analytics
    @MX @backend(test)
    @web
    @vbank
    @web-done
    @manual @JIRA.GLOMOMX-245990
    Scenario: Funds Hiring - App Step 6
        Given the user "5514160078" and "147258369"
        When the user goes to the funds hiring operation
        And the user is in the "submit account state" step of funds hiring operation
        Then the device contains the following variables
            | item                           | value                                                                   | type         |
            | analytics                      | analytics/glomo_base                                                    | json schema  |
            | page name                      | app:privada:personas:fondos flujo unificado:6 envio de estado de cuenta | string       |
            | level 1                        | fondos flujo unificado                                                  | string       |
            | level 2                        | 6 envio de estado de cuenta                                             | string       |
            | language                       | ES                                                                      | string       |
            | page area                      | privada                                                                 | string       |
            | page intent                    | transaccion                                                             | string       |
            | channel                        | online                                                                  | string       |
            | page instance ID               | de                                                                      | string       |
            | page info version              | appVersion                                                              | regexp named |
            | page segment                   | personas                                                                | string       |
            | sysEnv                         | app                                                                     | string       |
            | business unit                  | BBVA Mexico                                                             | string       |
            | site app name                  | App BBVA Mexico                                                         | string       |
            | project name                   | DIY E2E Sales                                                           | string       |
            | device mobile                  | si                                                                      | string       |
            | user userState                 | logado                                                                  | string       |
            | profile ID                     | profileID                                                               | regexp named |
            | user segment global            | 003001                                                                  | string       |
            | user gender                    | gender                                                                  | regexp named |
            | user age                       | age                                                                     | regexp named |
            | user country                   | lettersAndSpaceOrEmpty                                                  | regexp named |
            | global application             | funds                                                                   | string       |
            | application name               | fondos flujo unificado                                                  | string       |
            | application type               | contratacion                                                            | string       |
            | application step               | 6 envio de estado de cuenta                                             | string       |
            | fulfillment model              | online                                                                  | string       |
            | application typology           | tengo poca experiencia                                                  | string       |
            | application process            | dentro de horario                                                       | string       |
            | application program type hired | fondos deuda                                                            | string       |
            | application offer              | mismo dia                                                               | string       |
            | product primary category       | inversiones                                                             | string       |
            | product subtype                | fondos inversion                                                        | string       |
            | product name                   | bbvaliq                                                                 | string       |
            | product currency               | MXN                                                                     | string       |
            | product amount                 | 45.93                                                                   | string       |
            | internal campaign              |                                                                         | empty array  |
            | optimization attributes        |                                                                         | empty array  |

    @ANA_FH007
    @analytics
    @MX @backend(test)
    @web
    @vbank
    @web-done
    @manual @JIRA.GLOMOMX-245990
    Scenario: Funds Hiring - App Step 7
        Given the user "5514160078" and "147258369"
        When the user goes to the funds hiring operation
        And the user is in the "terms and conditions" step of funds hiring operation
        Then the device contains the following variables
            | item                           | value                                                                | type         |
            | analytics                      | analytics/glomo_base                                                 | json schema  |
            | page name                      | app:privada:personas:fondos flujo unificado:7 terminos y condiciones | string       |
            | level 1                        | fondos flujo unificado                                               | string       |
            | level 2                        | 7 terminos y condiciones                                             | string       |
            | language                       | ES                                                                   | string       |
            | page area                      | privada                                                              | string       |
            | page intent                    | transaccion                                                          | string       |
            | channel                        | online                                                               | string       |
            | page instance ID               | de                                                                   | string       |
            | page info version              | appVersion                                                           | regexp named |
            | page segment                   | personas                                                             | string       |
            | sysEnv                         | app                                                                  | string       |
            | business unit                  | BBVA Mexico                                                          | string       |
            | site app name                  | App BBVA Mexico                                                      | string       |
            | project name                   | DIY E2E Sales                                                        | string       |
            | device mobile                  | si                                                                   | string       |
            | user userState                 | logado                                                               | string       |
            | profile ID                     | profileID                                                            | regexp named |
            | user segment global            | 003001                                                               | string       |
            | user gender                    | gender                                                               | regexp named |
            | user age                       | age                                                                  | regexp named |
            | user country                   | lettersAndSpaceOrEmpty                                               | regexp named |
            | global application             | funds                                                                | string       |
            | application name               | fondos flujo unificado                                               | string       |
            | application type               | contratacion                                                         | string       |
            | application step               | 7 terminos y condiciones                                             | string       |
            | fulfillment model              | online                                                               | string       |
            | application typology           | tengo poca experiencia                                               | string       |
            | application process            | dentro de horario                                                    | string       |
            | application program type hired | fondos deuda                                                         | string       |
            | application offer              | mismo dia                                                            | string       |
            | product primary category       | inversiones                                                          | string       |
            | product subtype                | fondos inversion                                                     | string       |
            | product name                   | bbvaliq                                                              | string       |
            | product currency               | MXN                                                                  | string       |
            | product amount                 | 45.93                                                                | string       |
            | internal campaign              |                                                                      | empty array  |
            | optimization attributes        |                                                                      | empty array  |

    @ANA_FH008
    @analytics
    @MX @backend(test)
    @web
    @vbank
    @web-done
    @manual @JIRA.GLOMOMX-245990
    Scenario: Funds Hiring - App Step 8
        Given the user "5514160078" and "147258369"
        When the user goes to the funds hiring operation
        And the user is in the "summary" step of funds hiring operation
        Then the device contains the following variables
            | item                           | value                                                      | type         |
            | analytics                      | analytics/glomo_base                                       | json schema  |
            | page name                      | app:privada:personas:fondos flujo unificado:8 confirmacion | string       |
            | level 1                        | fondos flujo unificado                                     | string       |
            | level 2                        | 8 confirmacion                                             | string       |
            | language                       | ES                                                         | string       |
            | page area                      | privada                                                    | string       |
            | page intent                    | transaccion                                                | string       |
            | channel                        | online                                                     | string       |
            | page instance ID               | de                                                         | string       |
            | page info version              | appVersion                                                 | regexp named |
            | page segment                   | personas                                                   | string       |
            | sysEnv                         | app                                                        | string       |
            | business unit                  | BBVA Mexico                                                | string       |
            | site app name                  | App BBVA Mexico                                            | string       |
            | project name                   | DIY E2E Sales                                              | string       |
            | device mobile                  | si                                                         | string       |
            | user userState                 | logado                                                     | string       |
            | profile ID                     | profileID                                                  | regexp named |
            | user segment global            | 003001                                                     | string       |
            | user gender                    | gender                                                     | regexp named |
            | user age                       | age                                                        | regexp named |
            | user country                   | lettersAndSpaceOrEmpty                                     | regexp named |
            | global application             | funds                                                      | string       |
            | application name               | fondos flujo unificado                                     | string       |
            | application type               | contratacion                                               | string       |
            | application step               | 8 confirmacion                                             | string       |
            | fulfillment model              | online                                                     | string       |
            | application typology           | tengo poca experiencia                                     | string       |
            | application process            | dentro de horario                                          | string       |
            | application program type hired | fondos deuda                                               | string       |
            | application offer              | mismo dia                                                  | string       |
            | product primary category       | inversiones                                                | string       |
            | product subtype                | fondos inversion                                           | string       |
            | product name                   | bbvaliq                                                    | string       |
            | product currency               | MXN                                                        | string       |
            | product amount                 | 45.93                                                      | string       |
            | internal campaign              |                                                            | empty array  |
            | optimization attributes        |                                                            | empty array  |

    @ANA_FH009
    @analytics
    @MX @backend(test)
    @web
    @vbank
    @web-done
    @manual @JIRA.GLOMOMX-245990
    Scenario: Funds Hiring - App Step 9
        Given the user "5514160078" and "147258369"
        When the user goes to the funds hiring operation
        And the user is in the "otp modal" step of funds hiring operation
        Then the device contains the following variables
            | item                           | value                                             | type         |
            | analytics                      | analytics/glomo_base                              | json schema  |
            | page name                      | app:privada:personas:fondos flujo unificado:9 otp | string       |
            | level 1                        | fondos flujo unificado                            | string       |
            | level 2                        | 9 otp                                             | string       |
            | language                       | ES                                                | string       |
            | page area                      | privada                                           | string       |
            | page intent                    | transaccion                                       | string       |
            | channel                        | online                                            | string       |
            | page instance ID               | de                                                | string       |
            | page info version              | appVersion                                        | regexp named |
            | page segment                   | personas                                          | string       |
            | sysEnv                         | app                                               | string       |
            | business unit                  | BBVA Mexico                                       | string       |
            | site app name                  | App BBVA Mexico                                   | string       |
            | project name                   | DIY E2E Sales                                     | string       |
            | device mobile                  | si                                                | string       |
            | user userState                 | logado                                            | string       |
            | profile ID                     | profileID                                         | regexp named |
            | user segment global            | 003001                                            | string       |
            | user gender                    | gender                                            | regexp named |
            | user age                       | age                                               | regexp named |
            | user country                   | lettersAndSpaceOrEmpty                            | regexp named |
            | global application             | funds                                             | string       |
            | application name               | fondos flujo unificado                            | string       |
            | application type               | contratacion                                      | string       |
            | application step               | 9 otp                                             | string       |
            | fulfillment model              | online                                            | string       |
            | application typology           | tengo poca experiencia                            | string       |
            | application process            | dentro de horario                                 | string       |
            | application program type hired | fondos deuda                                      | string       |
            | application offer              | mismo dia                                         | string       |
            | product primary category       | inversiones                                       | string       |
            | product subtype                | fondos inversion                                  | string       |
            | product name                   | bbvaliq                                           | string       |
            | product currency               | MXN                                               | string       |
            | product amount                 | 45.93                                             | string       |
            | internal campaign              |                                                   | empty array  |
            | optimization attributes        |                                                   | empty array  |

    @ANA_FH010
    @analytics
    @MX @backend(test)
    @web
    @vbank
    @web-done
    @manual @JIRA.GLOMOMX-245990
    Scenario: Funds Hiring - App Complete - Success
        Given the user "5514160078" and "147258369"
        When the user finish the funds hiring operation
        Then the device contains the following variables
            | item                           | value                                                      | type         |
            | analytics                      | analytics/glomo_base                                       | json schema  |
            | page name                      | app:privada:personas:fondos flujo unificado:pagina exitosa | string       |
            | level 1                        | fondos flujo unificado                                     | string       |
            | level 2                        | pagina exitosa                                             | string       |
            | language                       | ES                                                         | string       |
            | page area                      | privada                                                    | string       |
            | page intent                    | transaccion                                                | string       |
            | channel                        | online                                                     | string       |
            | page instance ID               | de                                                         | string       |
            | page info version              | appVersion                                                 | regexp named |
            | page segment                   | personas                                                   | string       |
            | sysEnv                         | app                                                        | string       |
            | business unit                  | BBVA Mexico                                                | string       |
            | site app name                  | App BBVA Mexico                                            | string       |
            | project name                   | DIY E2E Sales                                              | string       |
            | device mobile                  | si                                                         | string       |
            | user userState                 | logado                                                     | string       |
            | profile ID                     | profileID                                                  | regexp named |
            | user segment global            | 003001                                                     | string       |
            | user gender                    | gender                                                     | regexp named |
            | user age                       | age                                                        | regexp named |
            | user country                   | lettersAndSpaceOrEmpty                                     | regexp named |
            | global application             | funds                                                      | string       |
            | application name               | fondos flujo unificado                                     | string       |
            | application type               | contratacion                                               | string       |
            | application step               | pagina exitosa                                             | string       |
            | fulfillment model              | online                                                     | string       |
            | application typology           | tengo poca experiencia                                     | string       |
            | application process            | dentro de horario                                          | string       |
            | application program type hired | fondos deuda                                               | string       |
            | application offer              | mismo dia                                                  | string       |
            | application state              | contratado                                                 | string       |
            | application operation number   | 9653274299                                                 | string       |
            | product primary category       | inversiones                                                | string       |
            | product subtype                | fondos inversion                                           | string       |
            | product name                   | bbvaliq                                                    | string       |
            | product state                  | contratado                                                 | string       |
            | product currency               | MXN                                                        | string       |
            | product amount                 | 45.93                                                      | string       |
            | internal campaign              |                                                            | empty array  |
            | optimization attributes        |                                                            | empty array  |

    @ANA_FH011
    @analytics
    @MX @backend(test)
    @web
    @vbank
    @tmpExclude @JIRA.GLOMOMX-254311
    Scenario: Funds Hiring - Huella Investment service
        Given the user "5514160078" and "147258369"
        When the user goes to the funds hiring operation
        And the user is in the "investment service modal" step of funds hiring operation
        Then the device contains the following variables
            | item                    | value                                                                                             | type             |
            | analytics               | analytics/glomo_base                                                                              | json schema      |
            | page name               | app:privada:personas:fondos flujo unificado:3 servicio de inversion:servicios de comercializacion | string           |
            | level 1                 | fondos flujo unificado                                                                            | string           |
            | level 2                 | 3 servicio de inversion                                                                           | string           |
            | level 3                 | servicios de comercializacion                                                                     | string           |
            | language                | ES                                                                                                | string           |
            | page area               | privada                                                                                           | string           |
            | page intent             | informacion                                                                                       | string           |
            | channel                 | online                                                                                            | string           |
            | page instance ID        | de                                                                                                | string           |
            | page info version       | appVersion                                                                                        | regexp named     |
            | page segment            | personas                                                                                          | string           |
            | sysEnv                  | app                                                                                               | string           |
            | business unit           | BBVA Mexico                                                                                       | string           |
            | site app name           | App BBVA Mexico                                                                                   | string           |
            | project name            | DIY E2E Sales                                                                                     | string           |
            | device mobile           | si                                                                                                | string           |
            | user userState          | logado                                                                                            | string           |
            | profile ID              | profileID                                                                                         | regexp named     |
            | user segment global     | 003001                                                                                            | string           |
            | user gender             | gender                                                                                            | regexp named     |
            | user age                | age                                                                                               | regexp named     |
            | user country            | lettersAndSpaceOrEmpty                                                                            | regexp named     |
            | internal campaign       |                                                                                                   | empty array      |
            | optimization attributes |                                                                                                   | empty array      |
            | application             |                                                                                                   | empty str object |
            | products attributes     |                                                                                                   | empty array      |

    @ANA_FH012
    @analytics
    @MX @backend(test)
    @web
    @vbank
    @tmpExclude @JIRA.GLOMOMX-254311
    Scenario: Funds Hiring - Huella Execution service
        Given the user "5514160078" and "147258369"
        When the user goes to the funds hiring operation
        And the user is in the "Execution service modal" step of funds hiring operation
        Then the device contains the following variables
            | item                    | value                                                                                      | type             |
            | analytics               | analytics/glomo_base                                                                       | json schema      |
            | page name               | app:privada:personas:fondos flujo unificado:3 servicio de inversion:servicios de ejecucion | string           |
            | level 1                 | fondos flujo unificado                                                                     | string           |
            | level 2                 | 3 servicio de inversion                                                                    | string           |
            | level 3                 | servicios de ejecucion                                                                     | string           |
            | language                | ES                                                                                         | string           |
            | page area               | privada                                                                                    | string           |
            | page intent             | informacion                                                                                | string           |
            | channel                 | online                                                                                     | string           |
            | page instance ID        | de                                                                                         | string           |
            | page info version       | appVersion                                                                                 | regexp named     |
            | page segment            | personas                                                                                   | string           |
            | sysEnv                  | app                                                                                        | string           |
            | business unit           | BBVA Mexico                                                                                | string           |
            | site app name           | App BBVA Mexico                                                                            | string           |
            | project name            | DIY E2E Sales                                                                              | string           |
            | device mobile           | si                                                                                         | string           |
            | user userState          | logado                                                                                     | string           |
            | profile ID              | profileID                                                                                  | regexp named     |
            | user segment global     | 003001                                                                                     | string           |
            | user gender             | gender                                                                                     | regexp named     |
            | user age                | age                                                                                        | regexp named     |
            | user country            | lettersAndSpaceOrEmpty                                                                     | regexp named     |
            | internal campaign       |                                                                                            | empty array      |
            | optimization attributes |                                                                                            | empty array      |
            | application             |                                                                                            | empty str object |
            | products attributes     |                                                                                            | empty array      |

    @ANA_FH013
    @analytics
    @MX @backend(test)
    @web
    @vbank
    @web-done
    @manual @JIRA.GLOMOMX-245990
    Scenario: Funds Hiring - Huella Fund filter
        Given the user "5514160078" and "147258369"
        When the user goes to the funds hiring operation
        And the user is in the "fund filter modal" step of funds hiring operation
        Then the device contains the following variables
            | item                    | value                                                                                       | type             |
            | analytics               | analytics/glomo_base                                                                        | json schema      |
            | page name               | app:privada:personas:fondos flujo unificado:4 seleccionar fondo de inversion:filtrar fondos | string           |
            | level 1                 | fondos flujo unificado                                                                      | string           |
            | level 2                 | 4 seleccionar fondo de inversion                                                            | string           |
            | level 3                 | filtrar fondos                                                                              | string           |
            | language                | ES                                                                                          | string           |
            | page area               | privada                                                                                     | string           |
            | page intent             | informacion                                                                                 | string           |
            | channel                 | online                                                                                      | string           |
            | page instance ID        | de                                                                                          | string           |
            | page info version       | appVersion                                                                                  | regexp named     |
            | page segment            | personas                                                                                    | string           |
            | sysEnv                  | app                                                                                         | string           |
            | business unit           | BBVA Mexico                                                                                 | string           |
            | site app name           | App BBVA Mexico                                                                             | string           |
            | project name            | DIY E2E Sales                                                                               | string           |
            | device mobile           | si                                                                                          | string           |
            | user userState          | logado                                                                                      | string           |
            | profile ID              | profileID                                                                                   | regexp named     |
            | user segment global     | 003001                                                                                      | string           |
            | user gender             | gender                                                                                      | regexp named     |
            | user age                | age                                                                                         | regexp named     |
            | user country            | lettersAndSpaceOrEmpty                                                                      | regexp named     |
            | internal campaign       |                                                                                             | empty array      |
            | optimization attributes |                                                                                             | empty array      |
            | application             |                                                                                             | empty str object |
            | products attributes     |                                                                                             | empty array      |

    @ANA_FH014
    @analytics
    @MX @backend(test)
    @web
    @vbank
    @web-done
    @manual @JIRA.GLOMOMX-245990
    Scenario: Funds Hiring - Huella Fund debt
        Given the user "5514160078" and "147258369"
        When the user goes to the funds hiring operation
        And the user is in the "fund debt modal" step of funds hiring operation
        Then the device contains the following variables
            | item                    | value                                                                                        | type             |
            | analytics               | analytics/glomo_base                                                                         | json schema      |
            | page name               | app:privada:personas:fondos flujo unificado:4 seleccionar fondo de inversion:fondos de deuda | string           |
            | level 1                 | fondos flujo unificado                                                                       | string           |
            | level 2                 | 4 seleccionar fondo de inversion                                                             | string           |
            | level 3                 | fondos de deuda                                                                              | string           |
            | language                | ES                                                                                           | string           |
            | page area               | privada                                                                                      | string           |
            | page intent             | informacion                                                                                  | string           |
            | channel                 | online                                                                                       | string           |
            | page instance ID        | de                                                                                           | string           |
            | page info version       | appVersion                                                                                   | regexp named     |
            | page segment            | personas                                                                                     | string           |
            | sysEnv                  | app                                                                                          | string           |
            | business unit           | BBVA Mexico                                                                                  | string           |
            | site app name           | App BBVA Mexico                                                                              | string           |
            | project name            | DIY E2E Sales                                                                                | string           |
            | device mobile           | si                                                                                           | string           |
            | user userState          | logado                                                                                       | string           |
            | profile ID              | profileID                                                                                    | regexp named     |
            | user segment global     | 003001                                                                                       | string           |
            | user gender             | gender                                                                                       | regexp named     |
            | user age                | age                                                                                          | regexp named     |
            | user country            | lettersAndSpaceOrEmpty                                                                       | regexp named     |
            | internal campaign       |                                                                                              | empty array      |
            | optimization attributes |                                                                                              | empty array      |
            | application             |                                                                                              | empty str object |
            | products attributes     |                                                                                              | empty array      |

    @ANA_FH015
    @analytics
    @MX @backend(test)
    @web
    @vbank
    @web-done
    @manual @JIRA.GLOMOMX-245990
    Scenario: Funds Hiring - Huella Fund rent
        Given the user "5514160078" and "147258369"
        When the user goes to the funds hiring operation
        And the user is in the "fund rent modal" step of funds hiring operation
        Then the device contains the following variables
            | item                    | value                                                                                                 | type             |
            | analytics               | analytics/glomo_base                                                                                  | json schema      |
            | page name               | app:privada:personas:fondos flujo unificado:4 seleccionar fondo de inversion:fondos de renta variable | string           |
            | level 1                 | fondos flujo unificado                                                                                | string           |
            | level 2                 | 4 seleccionar fondo de inversion                                                                      | string           |
            | level 3                 | fondos de renta variable                                                                              | string           |
            | language                | ES                                                                                                    | string           |
            | page area               | privada                                                                                               | string           |
            | page intent             | informacion                                                                                           | string           |
            | channel                 | online                                                                                                | string           |
            | page instance ID        | de                                                                                                    | string           |
            | page info version       | appVersion                                                                                            | regexp named     |
            | page segment            | personas                                                                                              | string           |
            | sysEnv                  | app                                                                                                   | string           |
            | business unit           | BBVA Mexico                                                                                           | string           |
            | site app name           | App BBVA Mexico                                                                                       | string           |
            | project name            | DIY E2E Sales                                                                                         | string           |
            | device mobile           | si                                                                                                    | string           |
            | user userState          | logado                                                                                                | string           |
            | profile ID              | profileID                                                                                             | regexp named     |
            | user segment global     | 003001                                                                                                | string           |
            | user gender             | gender                                                                                                | regexp named     |
            | user age                | age                                                                                                   | regexp named     |
            | user country            | lettersAndSpaceOrEmpty                                                                                | regexp named     |
            | internal campaign       |                                                                                                       | empty array      |
            | optimization attributes |                                                                                                       | empty array      |
            | application             |                                                                                                       | empty str object |
            | products attributes     |                                                                                                       | empty array      |

    @ANA_FH016
    @analytics
    @MX @backend(test)
    @web
    @vbank
    @web-done
    @manual @JIRA.GLOMOMX-245990
    Scenario: Funds Hiring - Huella Fund multi-strategy
        Given the user "5514160078" and "147258369"
        When the user goes to the funds hiring operation
        And the user is in the "fund multi-strategy modal" step of funds hiring operation
        Then the device contains the following variables
            | item                    | value                                                                                               | type             |
            | analytics               | analytics/glomo_base                                                                                | json schema      |
            | page name               | app:privada:personas:fondos flujo unificado:4 seleccionar fondo de inversion:fondos multiestrategia | string           |
            | level 1                 | fondos flujo unificado                                                                              | string           |
            | level 2                 | 4 seleccionar fondo de inversion                                                                    | string           |
            | level 3                 | fondos multiestrategia                                                                              | string           |
            | language                | ES                                                                                                  | string           |
            | page area               | privada                                                                                             | string           |
            | page intent             | informacion                                                                                         | string           |
            | channel                 | online                                                                                              | string           |
            | page instance ID        | de                                                                                                  | string           |
            | page info version       | appVersion                                                                                          | regexp named     |
            | page segment            | personas                                                                                            | string           |
            | sysEnv                  | app                                                                                                 | string           |
            | business unit           | BBVA Mexico                                                                                         | string           |
            | site app name           | App BBVA Mexico                                                                                     | string           |
            | project name            | DIY E2E Sales                                                                                       | string           |
            | device mobile           | si                                                                                                  | string           |
            | user userState          | logado                                                                                              | string           |
            | profile ID              | profileID                                                                                           | regexp named     |
            | user segment global     | 003001                                                                                              | string           |
            | user gender             | gender                                                                                              | regexp named     |
            | user age                | age                                                                                                 | regexp named     |
            | user country            | lettersAndSpaceOrEmpty                                                                              | regexp named     |
            | internal campaign       |                                                                                                     | empty array      |
            | optimization attributes |                                                                                                     | empty array      |
            | application             |                                                                                                     | empty str object |
            | products attributes     |                                                                                                     | empty array      |

    @ANA_FH017
    @analytics
    @MX @backend(test)
    @web
    @vbank
    @web-done
    @manual @JIRA.GLOMOMX-245990
    Scenario: Funds Hiring - Huella Fund confirmed account
        Given the user "5514160078" and "147258369"
        When the user goes to the funds hiring operation
        And the user is in the "simulation" step of funds hiring operation
        Then the device contains the following variables
            | item                    | value                                                                             | type             |
            | analytics               | analytics/glomo_base                                                              | json schema      |
            | page name               | app:privada:personas:fondos flujo unificado:5 insertar importe:importe confirmado | string           |
            | level 1                 | fondos flujo unificado                                                            | string           |
            | level 2                 | 5 insertar importe                                                                | string           |
            | level 3                 | importe confirmado                                                                | string           |
            | language                | ES                                                                                | string           |
            | page area               | privada                                                                           | string           |
            | page intent             | informacion                                                                       | string           |
            | channel                 | online                                                                            | string           |
            | page instance ID        | de                                                                                | string           |
            | page info version       | appVersion                                                                        | regexp named     |
            | page segment            | personas                                                                          | string           |
            | sysEnv                  | app                                                                               | string           |
            | business unit           | BBVA Mexico                                                                       | string           |
            | site app name           | App BBVA Mexico                                                                   | string           |
            | project name            | DIY E2E Sales                                                                     | string           |
            | device mobile           | si                                                                                | string           |
            | user userState          | logado                                                                            | string           |
            | profile ID              | profileID                                                                         | regexp named     |
            | user segment global     | 003001                                                                            | string           |
            | user gender             | gender                                                                            | regexp named     |
            | user age                | age                                                                               | regexp named     |
            | user country            | lettersAndSpaceOrEmpty                                                            | regexp named     |
            | internal campaign       |                                                                                   | empty array      |
            | optimization attributes |                                                                                   | empty array      |
            | application             |                                                                                   | empty str object |
            | products attributes     |                                                                                   | empty array      |

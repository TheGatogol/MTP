@analyticsOnboardingBbvaTrader @analyticsOnboardingBbvaTraderFeature
Feature: Analytics - Onboarding Digital BBVA Trader

    @ANA_EVENT_BBT001
    @analytics
    @web @android @ios
    @MX @backend(test)
    @vbank
    @web-done
    Scenario: App On Click Start - NBO section
        Given a user with the following criteria
            | criteria                      |
            | onboarding btrader commercial |
        And the user accesses to dashboard
        And the analytics interceptor service is initiated
        When the user goes to the onboarding bbva trader offer
        Then the analytics events contains the following variables
            | item                                         | value                                                                                                                                                          | type         | event              |
            | version DL                                   | 20250414_5.0                                                                                                                                                   | string       | App On Click Start |
            | page name                                    | app:privada:personas:posicion global:destacado                                                                                                                 | string       | App On Click Start |
            | level 1                                      | posicion global                                                                                                                                                | string       | App On Click Start |
            | level 2                                      | destacado                                                                                                                                                      | string       | App On Click Start |
            | language                                     | ES                                                                                                                                                             | string       | App On Click Start |
            | page area                                    | privada                                                                                                                                                        | string       | App On Click Start |
            | page intent                                  | informacion                                                                                                                                                    | string       | App On Click Start |
            | channel                                      | online                                                                                                                                                         | string       | App On Click Start |
            | page instance ID                             | de                                                                                                                                                             | string       | App On Click Start |
            | page info version                            | appVersion                                                                                                                                                     | regexp named | App On Click Start |
            | page segment                                 | personas                                                                                                                                                       | string       | App On Click Start |
            | sysEnv                                       | app                                                                                                                                                            | string       | App On Click Start |
            | business unit                                | BBVA Mexico                                                                                                                                                    | string       | App On Click Start |
            | site app name                                | App BBVA Mexico                                                                                                                                                | string       | App On Click Start |
            | project name                                 | Futura                                                                                                                                                         | string       | App On Click Start |
            | device mobile                                | si                                                                                                                                                             | string       | App On Click Start |
            | device root                                  |                                                                                                                                                                | string       | App On Click Start |
            | user userState                               | logado                                                                                                                                                         | string       | App On Click Start |
            | user segment global                          | 003001                                                                                                                                                         | string       | App On Click Start |
            | profile ID                                   | profileID                                                                                                                                                      | regexp named | App On Click Start |
            | user gender                                  | gender                                                                                                                                                         | regexp named | App On Click Start |
            | user age                                     | age                                                                                                                                                            | regexp named | App On Click Start |
            | global application                           | hire investment                                                                                                                                                | string       | App On Click Start |
            | application name                             | contratar inversiones                                                                                                                                          | string       | App On Click Start |
            | application type                             | contratacion                                                                                                                                                   | string       | App On Click Start |
            | fulfillment model                            | online                                                                                                                                                         | string       | App On Click Start |
            | application step                             | me interesa posicion global nbo                                                                                                                                | string       | App On Click Start |
            | internal campaign attributes location        | dashboard destacado-te puede interesar-centro-1-2-3                                                                                                            | string       | App On Click Start |
            | internal campaign attributes campaign format | carrusel                                                                                                                                                       | string       | App On Click Start |
            | internal campaign attributes collective code | vd-                                                                                                                                                            | string       | App On Click Start |
            | internal campaign attributes name            | -acciones etf y fibra de empresas globales y locales arma tu portafolio                                                                                        | string       | App On Click Start |
            | internal campaign attributes product         | inversiones                                                                                                                                                    | string       | App On Click Start |
            | internal campaign event name                 | IntCmpClick                                                                                                                                                    | string       | App On Click Start |
            | internal campaign site action name           | dashboard destacado-te puede interesar-centro-1-2-3:carrusel:vd-:-acciones etf y fibra de empresas globales y locales arma tu portafolio:inversiones:0839:0::: | string       | App On Click Start |

    @ANA_EVENT_BBT002
    @analytics
    @web @android @ios
    @MX @backend(test)
    @vbank
    @web-done
    Scenario: App On Click Start  - Contract product section
        Given a user with the following criteria
            | criteria                      |
            | onboarding btrader commercial |
        And the user accesses contract product section
        And the analytics interceptor service is initiated
        When the user goes to the onboarding bbva trader offer
        Then the analytics events contains the following variables
            | item                                         | value                                                                                                                               | type         | event              |
            | version DL                                   | 20250414_5.0                                                                                                                        | string       | App On Click Start |
            | page name                                    | app:privada:personas:oportunidades                                                                                                  | string       | App On Click Start |
            | level 1                                      | oportunidades                                                                                                                       | string       | App On Click Start |
            | language                                     | ES                                                                                                                                  | string       | App On Click Start |
            | page area                                    | privada                                                                                                                             | string       | App On Click Start |
            | page intent                                  | informacion                                                                                                                         | string       | App On Click Start |
            | channel                                      | online                                                                                                                              | string       | App On Click Start |
            | page instance ID                             | de                                                                                                                                  | string       | App On Click Start |
            | page info version                            | appVersion                                                                                                                          | regexp named | App On Click Start |
            | page segment                                 | personas                                                                                                                            | string       | App On Click Start |
            | sysEnv                                       | app                                                                                                                                 | string       | App On Click Start |
            | business unit                                | BBVA Mexico                                                                                                                         | string       | App On Click Start |
            | site app name                                | App BBVA Mexico                                                                                                                     | string       | App On Click Start |
            | project name                                 | DIY E2E Sales                                                                                                                       | string       | App On Click Start |
            | device mobile                                | si                                                                                                                                  | string       | App On Click Start |
            | device root                                  | no root                                                                                                                             | string       | App On Click Start |
            | user userState                               | logado                                                                                                                              | string       | App On Click Start |
            | user segment global                          | 003001                                                                                                                              | string       | App On Click Start |
            | user gender                                  | gender                                                                                                                              | regexp named | App On Click Start |
            | user age                                     | age                                                                                                                                 | regexp named | App On Click Start |
            | global application                           | hire investment                                                                                                                     | string       | App On Click Start |
            | application name                             | contratar inversiones                                                                                                               | string       | App On Click Start |
            | application type                             | contratacion                                                                                                                        | string       | App On Click Start |
            | fulfillment model                            | online                                                                                                                              | string       | App On Click Start |
            | application step                             | me interesa oportunidades                                                                                                           | string       | App On Click Start |
            | internal campaign attributes location        | contract product section--centro-11-15                                                                                             | string       | App On Click Start |
            | internal campaign attributes campaign format | list                                                                                                                                | string       | App On Click Start |
            | internal campaign attributes name            | -acciones etf y fibra de empresas globales y locales arma tu portafolio                                                             | string       | App On Click Start |
            | internal campaign attributes product         | inversiones                                                                                                                         | string       | App On Click Start |
            | internal campaign event name                 | IntCmpClick                                                                                                                         | string       | App On Click Start |
            | internal campaign site action name           | contract product section--centro-11-15:list::-acciones etf y fibra de empresas globales y locales arma tu portafolio:inversiones:: | string       | App On Click Start |

    @ANA_EVENT_BBT003
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: HUELLA - 1 Offer Page Visit
        Given a user with the following criteria
            | criteria                      |
            | onboarding btrader commercial |
        And the user accesses contract product section
        And the analytics interceptor service is initiated
        When the user goes to the onboarding bbva trader offer
        Then the analytics events contains the following variables
            | item                     | value                                                   | type         | event          |
            | version DL               | 20250414_5.0                                            | string       | App Page Visit |
            | page name                | app:privada:personas:contratar inversiones:1 beneficios | string       | App Page Visit |
            | level 1                  | contratar inversiones                                   | string       | App Page Visit |
            | level 2                  | 1 beneficios                                            | string       | App Page Visit |
            | language                 | ES                                                      | string       | App Page Visit |
            | page area                | privada                                                 | string       | App Page Visit |
            | page intent              | transaccion                                             | string       | App Page Visit |
            | channel                  | online                                                  | string       | App Page Visit |
            | page segment             | personas                                                | string       | App Page Visit |
            | sysEnv                   | app                                                     | string       | App Page Visit |
            | business unit            | BBVA Mexico                                             | string       | App Page Visit |
            | site app name            | App BBVA Mexico                                         | string       | App Page Visit |
            | project name             | DIY E2E Sales                                           | string       | App Page Visit |
            | device mobile            | si                                                      | string       | App Page Visit |
            | device root              | no root                                                 | string       | App Page Visit |
            | user userState           | logado                                                  | string       | App Page Visit |
            | user segment global      | 003001                                                  | string       | App Page Visit |
            | user gender              | gender                                                  | regexp named | App Page Visit |
            | user age                 | age                                                     | regexp named | App Page Visit |
            | global application       | hire investment                                         | string       | App Page Visit |
            | application name         | contratar inversiones                                   | string       | App Page Visit |
            | application type         | contratacion                                            | string       | App Page Visit |
            | fulfillment model        | online                                                  | string       | App Page Visit |
            | application step         | 1 beneficios                                            | string       | App Page Visit |
            | product primary category | inversiones                                             | string       | App Page Visit |
            | qualified visits         | true                                                    | string       | App Page Visit |

    @ANA_EVENT_BBT004
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: HUELLA - 1 Offer App Started
        Given a user with the following criteria
            | criteria                      |
            | onboarding btrader commercial |
        And the user goes to the onboarding bbva trader offer
        And the analytics interceptor service is initiated
        When the user accepts the onboarding offer
        Then the analytics events contains the following variables
            | item                     | value                                                   | type         | event       |
            | version DL               | 20250414_5.0                                            | string       | App Started |
            | page name                | app:privada:personas:contratar inversiones:1 beneficios | string       | App Started |
            | level 1                  | contratar inversiones                                   | string       | App Started |
            | level 2                  | 1 beneficios                                            | string       | App Started |
            | language                 | ES                                                      | string       | App Started |
            | page area                | privada                                                 | string       | App Started |
            | page intent              | transaccion                                             | string       | App Started |
            | channel                  | online                                                  | string       | App Started |
            | page segment             | personas                                                | string       | App Started |
            | sysEnv                   | app                                                     | string       | App Started |
            | business unit            | BBVA Mexico                                             | string       | App Started |
            | site app name            | App BBVA Mexico                                         | string       | App Started |
            | project name             | DIY E2E Sales                                           | string       | App Started |
            | device mobile            | si                                                      | string       | App Started |
            | device root              | no root                                                 | string       | App Started |
            | user userState           | logado                                                  | string       | App Started |
            | user segment global      | 003001                                                  | string       | App Started |
            | user gender              | gender                                                  | regexp named | App Started |
            | user age                 | age                                                     | regexp named | App Started |
            | global application       | hire investment                                         | string       | App Started |
            | application name         | contratar inversiones                                   | string       | App Started |
            | application type         | contratacion                                            | string       | App Started |
            | fulfillment model        | online                                                  | string       | App Started |
            | application step         | continuar                                               | string       | App Started |
            | product primary category | inversiones                                             | string       | App Started |

    @ANA_EVENT_BBT005
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: HUELLA - 2 Beneficiaries
        Given a user with the following criteria
            | criteria                      |
            | onboarding btrader commercial |
        And the user goes to the onboarding bbva trader offer
        And the analytics interceptor service is initiated
        When the user accepts the onboarding offer
        Then the analytics events contains the following variables
            | item                     | value                                                      | type         | event      |
            | version DL               | 20250414_5.0                                               | string       | App Step 2 |
            | page name                | app:privada:personas:contratar inversiones:2 beneficiarios | string       | App Step 2 |
            | level 1                  | contratar inversiones                                      | string       | App Step 2 |
            | level 2                  | 2 beneficiarios                                            | string       | App Step 2 |
            | language                 | ES                                                         | string       | App Step 2 |
            | page area                | privada                                                    | string       | App Step 2 |
            | page intent              | transaccion                                                | string       | App Step 2 |
            | channel                  | online                                                     | string       | App Step 2 |
            | page segment             | personas                                                   | string       | App Step 2 |
            | sysEnv                   | app                                                        | string       | App Step 2 |
            | business unit            | BBVA Mexico                                                | string       | App Step 2 |
            | site app name            | App BBVA Mexico                                            | string       | App Step 2 |
            | project name             | DIY E2E Sales                                              | string       | App Step 2 |
            | device mobile            | si                                                         | string       | App Step 2 |
            | device root              | no root                                                    | string       | App Step 2 |
            | user userState           | logado                                                     | string       | App Step 2 |
            | user segment global      | 003001                                                     | string       | App Step 2 |
            | user gender              | gender                                                     | regexp named | App Step 2 |
            | user age                 | age                                                        | regexp named | App Step 2 |
            | global application       | hire investment                                            | string       | App Step 2 |
            | application name         | contratar inversiones                                      | string       | App Step 2 |
            | application type         | contratacion                                               | string       | App Step 2 |
            | fulfillment model        | online                                                     | string       | App Step 2 |
            | application step         | 2 beneficiarios                                            | string       | App Step 2 |
            | product primary category | inversiones                                                | string       | App Step 2 |

    @ANA_EVENT_BBT006
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: HUELLA - 2 Add Beneficiary
        Given a user with the following criteria
            | criteria                      |
            | onboarding btrader commercial |
        And the user goes to the onboarding bbva trader offer
        And the user accepts the onboarding offer
        And the analytics interceptor service is initiated
        When the user opens the "add" beneficiary form
        Then the analytics events contains the following variables
            | item                | value                                                              | type             | event     |
            | version DL          | 20250414_5.0                                                       | string           | Page View |
            | page name           | app:privada:personas:contratar inversiones:2 beneficiarios:agregar | string           | Page View |
            | level 1             | contratar inversiones                                              | string           | Page View |
            | level 2             | 2 beneficiarios                                                    | string           | Page View |
            | level 3             | agregar                                                            | string           | Page View |
            | language            | ES                                                                 | string           | Page View |
            | page area           | privada                                                            | string           | Page View |
            | page intent         | informacion                                                        | string           | Page View |
            | channel             | online                                                             | string           | Page View |
            | page segment        | personas                                                           | string           | Page View |
            | sysEnv              | app                                                                | string           | Page View |
            | business unit       | BBVA Mexico                                                        | string           | Page View |
            | site app name       | App BBVA Mexico                                                    | string           | Page View |
            | project name        | DIY E2E Sales                                                      | string           | Page View |
            | device mobile       | si                                                                 | string           | Page View |
            | device root         | no root                                                            | string           | Page View |
            | user userState      | logado                                                             | string           | Page View |
            | user segment global | 003001                                                             | string           | Page View |
            | user gender         | gender                                                             | regexp named     | Page View |
            | user age            | age                                                                | regexp named     | Page View |
            | application name    |                                                                    | empty str object | Page View |

    @ANA_EVENT_BBT007
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    @manual @JIRA.GLOMOMX-294871
    Scenario: HUELLA - 2 Edit Beneficiary
        Given a user with the following criteria
            | criteria                      |
            | onboarding btrader main offer |
        And the user goes to the onboarding bbva trader offer
        And the user accepts the onboarding offer
        And the user selects the account in the onboarding offer
        And the analytics interceptor service is initiated
        When the user opens the "edit" beneficiary form
        Then the analytics events contains the following variables
            | item                | value                                                                | type             | event     |
            | version DL          | 20250414_5.0                                                         | string           | Page View |
            | page name           | app:privada:personas:contratar inversiones:2 beneficiarios:modificar | string           | Page View |
            | level 1             | contratar inversiones                                                | string           | Page View |
            | level 2             | 2 beneficiarios                                                      | string           | Page View |
            | level 3             | modificar                                                            | string           | Page View |
            | language            | ES                                                                   | string           | Page View |
            | page area           | privada                                                              | string           | Page View |
            | page intent         | informacion                                                          | string           | Page View |
            | channel             | online                                                               | string           | Page View |
            | page segment        | personas                                                             | string           | Page View |
            | sysEnv              | app                                                                  | string           | Page View |
            | business unit       | BBVA Mexico                                                          | string           | Page View |
            | site app name       | App BBVA Mexico                                                      | string           | Page View |
            | project name        | DIY E2E Sales                                                        | string           | Page View |
            | device mobile       | si                                                                   | string           | Page View |
            | device root         | no root                                                              | string           | Page View |
            | user userState      | logado                                                               | string           | Page View |
            | user segment global | 003001                                                               | string           | Page View |
            | user gender         | gender                                                               | regexp named     | Page View |
            | user age            | age                                                                  | regexp named     | Page View |
            | application name    |                                                                      | empty str object | Page View |

    @ANA_EVENT_BBT008
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    @manual @JIRA.GLOMOMX-294871
    Scenario: HUELLA - 2 Delete Beneficiary
        Given a user with the following criteria
            | criteria                      |
            | onboarding btrader main offer |
        And the user goes to the onboarding bbva trader offer
        And the user accepts the onboarding offer
        And the user selects the account in the onboarding offer
        And the analytics interceptor service is initiated
        When the user opens the "delete" beneficiary modal
        Then the analytics events contains the following variables
            | item                | value                                                               | type             | event     |
            | analytics           | analytics/glomo_base                                                | json schema      | Page View |
            | version DL          | 20250414_5.0                                                        | string           | Page View |
            | page name           | app:privada:personas:contratar inversiones:2 beneficiarios:eliminar | string           | Page View |
            | level 1             | contratar inversiones                                               | string           | Page View |
            | level 2             | 2 beneficiarios                                                     | string           | Page View |
            | level 3             | eliminar                                                            | string           | Page View |
            | language            | ES                                                                  | string           | Page View |
            | page area           | privada                                                             | string           | Page View |
            | page intent         | informacion                                                         | string           | Page View |
            | channel             | online                                                              | string           | Page View |
            | page segment        | personas                                                            | string           | Page View |
            | sysEnv              | app                                                                 | string           | Page View |
            | business unit       | BBVA Mexico                                                         | string           | Page View |
            | site app name       | App BBVA Mexico                                                     | string           | Page View |
            | project name        | DIY E2E Sales                                                       | string           | Page View |
            | device mobile       | si                                                                  | string           | Page View |
            | device root         | no root                                                             | string           | Page View |
            | user userState      | logado                                                              | string           | Page View |
            | user segment global | 003001                                                              | string           | Page View |
            | user gender         | gender                                                              | regexp named     | Page View |
            | user age            | age                                                                 | regexp named     | Page View |
            | application name    |                                                                     | empty str object | Page View |

    @ANA_EVENT_BBT009
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    @manual @JIRA.GLOMOMX-294871
    Scenario: HUELLA - 3 Terms and Conditions
        Given a user with the following criteria
            | criteria                      |
            | onboarding btrader main offer |
        And the user goes to the onboarding bbva trader offer
        And the user accepts the onboarding offer
        And the user selects the account in the onboarding offer
        And the analytics interceptor service is initiated
        When the user continue without changes in the beneficiaries section
        Then the analytics events contains the following variables
            | item                     | value                                                               | type         | event      |
            | version DL               | 20250414_5.0                                                        | string       | App Step 3 |
            | page name                | app:privada:personas:contratar inversiones:3 terminos y condiciones | string       | App Step 3 |
            | level 1                  | contratar inversiones                                               | string       | App Step 3 |
            | level 2                  | 3 terminos y condiciones                                            | string       | App Step 3 |
            | language                 | ES                                                                  | string       | App Step 3 |
            | page area                | privada                                                             | string       | App Step 3 |
            | page intent              | transaccion                                                         | string       | App Step 3 |
            | channel                  | online                                                              | string       | App Step 3 |
            | page segment             | personas                                                            | string       | App Step 3 |
            | sysEnv                   | app                                                                 | string       | App Step 3 |
            | business unit            | BBVA Mexico                                                         | string       | App Step 3 |
            | site app name            | App BBVA Mexico                                                     | string       | App Step 3 |
            | project name             | DIY E2E Sales                                                       | string       | App Step 3 |
            | device mobile            | si                                                                  | string       | App Step 3 |
            | device root              | no root                                                             | string       | App Step 3 |
            | user userState           | logado                                                              | string       | App Step 3 |
            | user segment global      | 003001                                                              | string       | App Step 3 |
            | user gender              | gender                                                              | regexp named | App Step 3 |
            | user age                 | age                                                                 | regexp named | App Step 3 |
            | product primary category | inversiones                                                         | string       | App Step 3 |
            | fulfillment model        | online                                                              | string       | App Step 3 |
            | application type         | contratacion                                                        | string       | App Step 3 |
            | application name         | contratar inversiones                                               | string       | App Step 3 |
            | application step         | 3 terminos y condiciones                                            | string       | App Step 3 |
            | global application       | hire investment                                                     | string       | App Step 3 |

    @ANA_EVENT_BBT010
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    @manual @JIRA.GLOMOMX-294871
    Scenario: CUSTOM TAG - Download Links Terms and Conditions
        Given a user with the following criteria
            | criteria                      |
            | onboarding btrader main offer |
        And the user goes to the onboarding bbva trader offer
        And the user accepts the onboarding offer
        And the user selects the account in the onboarding offer
        And the user continue without changes in the beneficiaries section
        And the analytics interceptor service is initiated
        When the user opens the first document in the terms and conditions section
        Then the analytics events contains the following variables
            | item                | value                                                               | type             | event         |
            | version DL          | 20250414_5.0                                                        | string           | Download Link |
            | page name           | app:privada:personas:contratar inversiones:3 terminos y condiciones | string           | Download Link |
            | level 1             | contratar inversiones                                               | string           | Download Link |
            | level 2             | 3 terminos y condiciones                                            | string           | Download Link |
            | language            | ES                                                                  | string           | Download Link |
            | page area           | privada                                                             | string           | Download Link |
            | page intent         | transaccion                                                         | string           | Download Link |
            | channel             | online                                                              | string           | Download Link |
            | page segment        | personas                                                            | string           | Download Link |
            | sysEnv              | app                                                                 | string           | Download Link |
            | business unit       | BBVA Mexico                                                         | string           | Download Link |
            | site app name       | App BBVA Mexico                                                     | string           | Download Link |
            | project name        | DIY E2E Sales                                                       | string           | Download Link |
            | link url            | pdf_Contrato de servicios de ejecución de operaciones               | string           | Download Link |
            | device mobile       | si                                                                  | string           | Download Link |
            | device root         | no root                                                             | string           | Download Link |
            | user userState      | logado                                                              | string           | Download Link |
            | user segment global | 003001                                                              | string           | Download Link |
            | user gender         | gender                                                              | regexp named     | Download Link |
            | user age            | age                                                                 | regexp named     | Download Link |
            | application name    |                                                                     | empty str object | Download Link |

    @ANA_EVENT_BBT011
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    @manual @JIRA.GLOMOMX-294871
    Scenario: HUELLA - 4 Confirmation
        Given a user with the following criteria
            | criteria                      |
            | onboarding btrader main offer |
        And the user goes to the onboarding bbva trader offer
        And the user accepts the onboarding offer
        And the user selects the account in the onboarding offer
        And the user continue without changes in the beneficiaries section
        And the analytics interceptor service is initiated
        When the user accepts the bbva trader terms and conditions
        Then the analytics events contains the following variables
            | item                     | value                                                     | type         | event      |
            | version DL               | 20250414_5.0                                              | string       | App Step 4 |
            | page name                | app:privada:personas:contratar inversiones:4 confirmacion | string       | App Step 4 |
            | level 1                  | contratar inversiones                                     | string       | App Step 4 |
            | level 2                  | 4 confirmacion                                            | string       | App Step 4 |
            | language                 | ES                                                        | string       | App Step 4 |
            | page area                | privada                                                   | string       | App Step 4 |
            | page intent              | transaccion                                               | string       | App Step 4 |
            | channel                  | online                                                    | string       | App Step 4 |
            | page segment             | personas                                                  | string       | App Step 4 |
            | sysEnv                   | app                                                       | string       | App Step 4 |
            | business unit            | BBVA Mexico                                               | string       | App Step 4 |
            | site app name            | App BBVA Mexico                                           | string       | App Step 4 |
            | project name             | DIY E2E Sales                                             | string       | App Step 4 |
            | device mobile            | si                                                        | string       | App Step 4 |
            | device root              | no root                                                   | string       | App Step 4 |
            | user userState           | logado                                                    | string       | App Step 4 |
            | user segment global      | 003001                                                    | string       | App Step 4 |
            | user gender              | gender                                                    | regexp named | App Step 4 |
            | user age                 | age                                                       | regexp named | App Step 4 |
            | product primary category | inversiones                                               | string       | App Step 4 |
            | fulfillment model        | online                                                    | string       | App Step 4 |
            | application type         | contratacion                                              | string       | App Step 4 |
            | application name         | contratar inversiones                                     | string       | App Step 4 |
            | application step         | 4 confirmacion                                            | string       | App Step 4 |
            | global application       | hire investment                                           | string       | App Step 4 |

    @ANA_EVENT_BBT012
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    @manual @JIRA.GLOMOMX-294871
    Scenario: Huella - 5 Otp
        Given a user with the following criteria
            | criteria                      |
            | onboarding btrader main offer |
        And the user goes to the onboarding bbva trader offer
        And the user accepts the onboarding offer
        And the user completes the onboarding flow "by selecting an account"
        And the analytics interceptor service is initiated
        When the user confirms the onboarding process summary
        Then the analytics events contains the following variables
            | item                     | value                                            | type         | event      |
            | version DL               | 20250414_5.0                                     | string       | App Step 5 |
            | page intent              | transaccion                                      | string       | App Step 5 |
            | page segment             | personas                                         | string       | App Step 5 |
            | page name                | app:privada:personas:contratar inversiones:5 otp | string       | App Step 5 |
            | sysEnv                   | app                                              | string       | App Step 5 |
            | channel                  | online                                           | string       | App Step 5 |
            | language                 | ES                                               | string       | App Step 5 |
            | level 1                  | contratar inversiones                            | string       | App Step 5 |
            | level 2                  | 5 otp                                            | string       | App Step 5 |
            | business unit            | BBVA Mexico                                      | string       | App Step 5 |
            | site app name            | App BBVA Mexico                                  | string       | App Step 5 |
            | project name             | DIY E2E Sales                                    | string       | App Step 5 |
            | page area                | privada                                          | string       | App Step 5 |
            | device mobile            | si                                               | string       | App Step 5 |
            | device root              | no root                                          | string       | App Step 5 |
            | user userState           | logado                                           | string       | App Step 5 |
            | user segment global      | 003001                                           | string       | App Step 5 |
            | user gender              | gender                                           | regexp named | App Step 5 |
            | user age                 | age                                              | regexp named | App Step 5 |
            | product primary category | inversiones                                      | string       | App Step 5 |
            | fulfillment model        | online                                           | string       | App Step 5 |
            | application type         | contratacion                                     | string       | App Step 5 |
            | application name         | contratar inversiones                            | string       | App Step 5 |
            | application step         | 5 otp                                            | string       | App Step 5 |
            | global application       | hire investment                                  | string       | App Step 5 |
            | custom fields            | firma:token                                      | string       | App Step 5 |

    @ANA_EVENT_BBT013
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    @manual @JIRA.GLOMOMX-294871
    Scenario: HUELLA - Pagina Exitosa
        Given a user with the following criteria
            | criteria                      |
            | onboarding btrader main offer |
        And the user goes to the onboarding bbva trader offer
        And the user accepts the onboarding offer
        And the user completes the onboarding flow "by selecting an account"
        And the analytics interceptor service is initiated
        When the user confirms the operation onboarding
        Then the analytics events contains the following variables
            | item                         | value                                                     | type         | event         |
            | version DL                   | 20250414_5.0                                              | string       | App Completed |
            | page name                    | app:privada:personas:contratar inversiones:pagina exitosa | string       | App Completed |
            | level 1                      | contratar inversiones                                     | string       | App Completed |
            | level 2                      | pagina exitosa                                            | string       | App Completed |
            | language                     | ES                                                        | string       | App Completed |
            | page area                    | privada                                                   | string       | App Completed |
            | page intent                  | transaccion                                               | string       | App Completed |
            | channel                      | online                                                    | string       | App Completed |
            | page segment                 | personas                                                  | string       | App Completed |
            | sysEnv                       | app                                                       | string       | App Completed |
            | business unit                | BBVA Mexico                                               | string       | App Completed |
            | site app name                | App BBVA Mexico                                           | string       | App Completed |
            | project name                 | DIY E2E Sales                                             | string       | App Completed |
            | device mobile                | si                                                        | string       | App Completed |
            | device root                  | no root                                                   | string       | App Completed |
            | user userState               | logado                                                    | string       | App Completed |
            | user segment global          | 003001                                                    | string       | App Completed |
            | user gender                  | gender                                                    | regexp named | App Completed |
            | user age                     | age                                                       | regexp named | App Completed |
            | product primary category     | inversiones                                               | string       | App Completed |
            | product state                | finalizado                                                | string       | App Completed |
            | fulfillment model            | online                                                    | string       | App Completed |
            | application operation number | 7553389420                                                | string       | App Completed |
            | application type             | contratacion                                              | string       | App Completed |
            | application name             | contratar inversiones                                     | string       | App Completed |
            | application step             | pagina exitosa                                            | string       | App Completed |
            | application state            | finalizado                                                | string       | App Completed |

    @ANA_EVENT_BBT014
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: HUELLA - Select Account
        Given a user with the following criteria
            | criteria                      |
            | onboarding btrader main offer |
        And the user goes to the onboarding bbva trader offer
        And the analytics interceptor service is initiated
        When the user accepts the onboarding offer
        Then the analytics events contains the following variables
            | item                | value                                                      | type             | event     |
            | version DL          | 20250414_5.0                                               | string           | Page View |
            | page name           | app:privada:personas:contratar inversiones:vincular cuenta | string           | Page View |
            | level 1             | contratar inversiones                                      | string           | Page View |
            | level 2             | vincular cuenta                                            | string           | Page View |
            | language            | ES                                                         | string           | Page View |
            | page area           | privada                                                    | string           | Page View |
            | page intent         | informacion                                                | string           | Page View |
            | channel             | online                                                     | string           | Page View |
            | page segment        | personas                                                   | string           | Page View |
            | sysEnv              | app                                                        | string           | Page View |
            | business unit       | BBVA Mexico                                                | string           | Page View |
            | site app name       | App BBVA Mexico                                            | string           | Page View |
            | project name        | DIY E2E Sales                                              | string           | Page View |
            | page area           | privada                                                    | string           | Page View |
            | device mobile       | si                                                         | string           | Page View |
            | device root         | no root                                                    | string           | Page View |
            | user userState      | logado                                                     | string           | Page View |
            | user segment global | 003001                                                     | string           | Page View |
            | user gender         | gender                                                     | regexp named     | Page View |
            | user age            | age                                                        | regexp named     | Page View |
            | application name    |                                                            | empty str object | Page View |

    @ANA_EVENT_BBT015
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: HUELLA - Operation Not Completed Error
        Given a user with the following criteria
            | criteria                      |
            | onboarding btrader commercial |
        And the user goes to the onboarding bbva trader offer
        And the user accepts the onboarding offer
        And the user completes the onboarding flow "adding beneficiaries"
        And the analytics interceptor service is initiated
        When the user confirms the onboarding bbva trader contracting
        Then the analytics events contains the following variables
            | item                | value                                                                   | type             | event     |
            | version DL          | 20250414_5.0                                                            | string           | Page View |
            | page intent         | informacion                                                             | string           | Page View |
            | page segment        | personas                                                                | string           | Page View |
            | page name           | app:privada:personas:contratar inversiones:error operacion no realizada | string           | Page View |
            | sysEnv              | app                                                                     | string           | Page View |
            | channel             | online                                                                  | string           | Page View |
            | language            | ES                                                                      | string           | Page View |
            | level 1             | contratar inversiones                                                   | string           | Page View |
            | level 2             | error operacion no realizada                                            | string           | Page View |
            | business unit       | BBVA Mexico                                                             | string           | Page View |
            | site app name       | App BBVA Mexico                                                         | string           | Page View |
            | project name        | DIY E2E Sales                                                           | string           | Page View |
            | error page          | error operacion no realizada                                            | string           | Page View |
            | page area           | privada                                                                 | string           | Page View |
            | device mobile       | si                                                                      | string           | Page View |
            | device root         | no root                                                                 | string           | Page View |
            | user userState      | logado                                                                  | string           | Page View |
            | user segment global | 003001                                                                  | string           | Page View |
            | user gender         | gender                                                                  | regexp named     | Page View |
            | user age            | age                                                                     | regexp named     | Page View |
            | application name    |                                                                         | empty str object | Page View |

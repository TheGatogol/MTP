@dynamicLifeInsurace
Feature: Analytics - Dynamic Life Insurance

    @ANA_EVENT_DLI001
    @analytics
    @MX @vbank @backend(test)
    @web @web-done
    Scenario: Dynamic Life Insurance - App On Click Start, App Page Visit
        Given a user with the following criteria
            | criteria          |
            | dynamic insurance |
        And the user accesses contract product section
        And the analytics interceptor service is initiated
        When the user accesses to dynamic life insurance offer
        Then the analytics events contains the following variables
            | item                                         | value                                                                 | type         | event                              |
            | analytics                                    | analytics/glomo_base                                                  | json schema  | App On Click Start, App Page Visit |
            | version DL                                   | 20250414_5.0                                                          | string       | App On Click Start, App Page Visit |
            | page name                                    | app:privada:personas:oportunidades                                     | string       | App On Click Start                 |
            | page name                                    | app:privada:personas:seguro vida dinamico:1 detalle                   | string       | App Page Visit                     |
            | level 1                                      | oportunidades                                                          | string       | App On Click Start                 |
            | level 1                                      | seguro vida dinamico                                                  | string       | App Page Visit                     |
            | level 2                                      | 1 detalle                                                             | string       | App Page Visit                     |
            | language                                     | ES                                                                    | string       | App On Click Start, App Page Visit |
            | page area                                    | privada                                                               | string       | App On Click Start, App Page Visit |
            | page intent                                  | informacion                                                           | string       | App On Click Start                 |
            | page intent                                  | transaccion                                                           | string       | App Page Visit                     |
            | channel                                      | online                                                                | string       | App On Click Start, App Page Visit |
            | page instance ID                             | de                                                                    | string       | App On Click Start, App Page Visit |
            | page info version                            | appVersion                                                            | regexp named | App On Click Start, App Page Visit |
            | page segment                                 | personas                                                              | string       | App On Click Start, App Page Visit |
            | sysEnv                                       | app                                                                   | string       | App On Click Start, App Page Visit |
            | business unit                                | BBVA Mexico                                                           | string       | App On Click Start, App Page Visit |
            | site app name                                | App BBVA Mexico                                                       | string       | App On Click Start, App Page Visit |
            | project name                                 | Glomo                                                                 | string       | App On Click Start, App Page Visit |
            | device mobile                                | si                                                                    | string       | App On Click Start, App Page Visit |
            | user userState                               | logado                                                                | string       | App On Click Start, App Page Visit |
            | user segment global                          | 003001                                                                | string       | App On Click Start, App Page Visit |
            | profile ID                                   | profileID                                                             | regexp named | App On Click Start, App Page Visit |
            | user gender                                  | gender                                                                | regexp named | App On Click Start, App Page Visit |
            | user age                                     | age                                                                   | regexp named | App On Click Start, App Page Visit |
            | global application                           | life insurance                                                        | string       | App On Click Start, App Page Visit |
            | application name                             | seguro vida dinamico                                                  | string       | App On Click Start, App Page Visit |
            | application type                             | contratacion                                                          | string       | App On Click Start, App Page Visit |
            | application step                             | para mi                                                               | string       | App On Click Start                 |
            | application step                             | 1 detalle                                                             | string       | App Page Visit                     |
            | fulfillment model                            | online                                                                | string       | App On Click Start, App Page Visit |
            | qualified visits                             | true                                                                  | string       | App Page Visit                     |
            | product primary category                     | seguros                                                               | string       | App On Click Start, App Page Visit |
            | product name                                 | seguro vida                                                           | string       | App On Click Start, App Page Visit |
            | internal campaign                            |                                                                       | empty array  | App Page Visit                     |
            | internal campaign attributes location        | centro                                                                | string       | App On Click Start                 |
            | internal campaign attributes campaign format | zona one click                                                        | string       | App On Click Start                 |
            | internal campaign attributes name            | personaliza seguro vida                                               | string       | App On Click Start                 |
            | internal campaign attributes product         | seguro vida dinamico                                                  | string       | App On Click Start                 |
            | internal campaign event name                 | IntCmpClick                                                           | string       | App On Click Start                 |
            | internal campaign site action name           | centro:zona one click::personaliza seguro vida:seguro vida dinamico:: | string       | App On Click Start                 |
            | optimization attributes                      |                                                                       | empty array  | App On Click Start, App Page Visit |

    @ANA_EVENT_DLI002
    @analytics
    @MX @web @vbank
    @backend(test) @web-done
    Scenario: Dynamic Life Insurance - APP STARTED, APP STEP 2
        Given a user with the following criteria
            | criteria          |
            | dynamic insurance |
        And the user accesses to dynamic life insurance offer
        And the analytics interceptor service is initiated
        When the user accesses to the step "health questionnaire" from the dynamic life insurance operative
        Then the analytics events contains the following variables
            | item                     | value                                                    | type         | event                   |
            | analytics                | analytics/glomo_base                                     | json schema  | App Started, App Step 2 |
            | version DL               | 20250414_5.0                                             | string       | App Started, App Step 2 |
            | page name                | app:privada:personas:seguro vida dinamico:1 detalle      | string       | App Started             |
            | page name                | app:privada:personas:seguro vida dinamico:2 cuestionario | string       | App Step 2              |
            | level 1                  | seguro vida dinamico                                     | string       | App Started, App Step 2 |
            | level 2                  | 1 detalle                                                | string       | App Started             |
            | level 2                  | 2 cuestionario                                           | string       | App Step 2              |
            | language                 | ES                                                       | string       | App Started, App Step 2 |
            | page area                | privada                                                  | string       | App Started, App Step 2 |
            | page intent              | transaccion                                              | string       | App Started, App Step 2 |
            | channel                  | online                                                   | string       | App Started, App Step 2 |
            | page instance ID         | de                                                       | string       | App Started, App Step 2 |
            | page info version        | appVersion                                               | regexp named | App Started, App Step 2 |
            | page segment             | personas                                                 | string       | App Started, App Step 2 |
            | sysEnv                   | app                                                      | string       | App Started, App Step 2 |
            | business unit            | BBVA Mexico                                              | string       | App Started, App Step 2 |
            | site app name            | App BBVA Mexico                                          | string       | App Started, App Step 2 |
            | project name             | Glomo                                                    | string       | App Started, App Step 2 |
            | device mobile            | si                                                       | string       | App Started, App Step 2 |
            | user userState           | logado                                                   | string       | App Started, App Step 2 |
            | user segment global      | 003001                                                   | string       | App Started, App Step 2 |
            | profile ID               | profileID                                                | regexp named | App Started, App Step 2 |
            | user gender              | gender                                                   | regexp named | App Started, App Step 2 |
            | user age                 | age                                                      | regexp named | App Started, App Step 2 |
            | global application       | life insurance                                           | string       | App Started, App Step 2 |
            | application name         | seguro vida dinamico                                     | string       | App Started, App Step 2 |
            | application type         | contratacion                                             | string       | App Started, App Step 2 |
            | application step         | personalizar seguro                                      | string       | App Started             |
            | application step         | 2 cuestionario                                           | string       | App Step 2              |
            | fulfillment model        | online                                                   | string       | App Started, App Step 2 |
            | product primary category | seguros                                                  | string       | App Started, App Step 2 |
            | product name             | seguro vida                                              | string       | App Started, App Step 2 |
            | internal campaign        |                                                          | empty array  | App Started, App Step 2 |
            | optimization attributes  |                                                          | empty array  | App Started, App Step 2 |

    @ANA_EVENT_DLI003
    @analytics
    @MX @web @vbank
    @backend(test) @web-done
    Scenario: Dynamic Life Insurance - APP STEP 3 - amount
        Given a user with the following criteria
            | criteria          |
            | dynamic insurance |
        And the user accesses to dynamic life insurance offer
        And the analytics interceptor service is initiated
        When the user accesses to the step "insured amount" from the dynamic life insurance operative
        Then the analytics events contains the following variables
            | item                     | value                                             | type         | event      |
            | analytics                | analytics/glomo_base                              | json schema  | App Step 3 |
            | version DL               | 20250414_5.0                                      | string       | App Step 3 |
            | page name                | app:privada:personas:seguro vida dinamico:3 monto | string       | App Step 3 |
            | level 1                  | seguro vida dinamico                              | string       | App Step 3 |
            | level 2                  | 3 monto                                           | string       | App Step 3 |
            | language                 | ES                                                | string       | App Step 3 |
            | page area                | privada                                           | string       | App Step 3 |
            | page intent              | transaccion                                       | string       | App Step 3 |
            | channel                  | online                                            | string       | App Step 3 |
            | page instance ID         | de                                                | string       | App Step 3 |
            | page info version        | appVersion                                        | regexp named | App Step 3 |
            | page segment             | personas                                          | string       | App Step 3 |
            | sysEnv                   | app                                               | string       | App Step 3 |
            | business unit            | BBVA Mexico                                       | string       | App Step 3 |
            | site app name            | App BBVA Mexico                                   | string       | App Step 3 |
            | project name             | Glomo                                             | string       | App Step 3 |
            | device mobile            | si                                                | string       | App Step 3 |
            | user userState           | logado                                            | string       | App Step 3 |
            | user segment global      | 003001                                            | string       | App Step 3 |
            | user gender              | gender                                            | regexp named | App Step 3 |
            | user age                 | age                                               | regexp named | App Step 3 |
            | global application       | life insurance                                    | string       | App Step 3 |
            | application name         | seguro vida dinamico                              | string       | App Step 3 |
            | application type         | contratacion                                      | string       | App Step 3 |
            | application step         | 3 monto                                           | string       | App Step 3 |
            | fulfillment model        | online                                            | string       | App Step 3 |
            | product primary category | seguros                                           | string       | App Step 3 |
            | product name             | seguro vida                                       | string       | App Step 3 |
            | product amount           | 11317.68                                          | number       | App Step 3 |
            | product payment amount   | 11317.68                                          | number       | App Step 3 |
            | product currency         | MXN                                               | string       | App Step 3 |
            | internal campaign        |                                                   | empty array  | App Step 3 |
            | optimization attributes  |                                                   | empty array  | App Step 3 |

    @ANA_EVENT_DLI004
    @analytics
    @MX @web @vbank
    @backend(test) @web-done
    Scenario: Dynamic Life Insurance - APP STEP 4 - coverages
        Given a user with the following criteria
            | criteria          |
            | dynamic insurance |
        And the user accesses to dynamic life insurance offer
        And the analytics interceptor service is initiated
        When the user accesses to the step "additional coverages" from the dynamic life insurance operative
        Then the analytics events contains the following variables
            | item                     | value                                                              | type         | event      |
            | analytics                | analytics/glomo_base                                               | json schema  | App Step 4 |
            | version DL               | 20250414_5.0                                                       | string       | App Step 4 |
            | page name                | app:privada:personas:seguro vida dinamico:4 coberturas adicionales | string       | App Step 4 |
            | level 1                  | seguro vida dinamico                                               | string       | App Step 4 |
            | level 2                  | 4 coberturas adicionales                                           | string       | App Step 4 |
            | language                 | ES                                                                 | string       | App Step 4 |
            | page area                | privada                                                            | string       | App Step 4 |
            | page intent              | transaccion                                                        | string       | App Step 4 |
            | channel                  | online                                                             | string       | App Step 4 |
            | page instance ID         | de                                                                 | string       | App Step 4 |
            | page info version        | appVersion                                                         | regexp named | App Step 4 |
            | page segment             | personas                                                           | string       | App Step 4 |
            | sysEnv                   | app                                                                | string       | App Step 4 |
            | business unit            | BBVA Mexico                                                        | string       | App Step 4 |
            | site app name            | App BBVA Mexico                                                    | string       | App Step 4 |
            | project name             | Glomo                                                              | string       | App Step 4 |
            | device mobile            | si                                                                 | string       | App Step 4 |
            | user userState           | logado                                                             | string       | App Step 4 |
            | user segment global      | 003001                                                             | string       | App Step 4 |
            | profile ID               | profileID                                                          | regexp named | App Step 4 |
            | user gender              | gender                                                             | regexp named | App Step 4 |
            | user age                 | age                                                                | regexp named | App Step 4 |
            | global application       | life insurance                                                     | string       | App Step 4 |
            | application name         | seguro vida dinamico                                               | string       | App Step 4 |
            | application type         | contratacion                                                       | string       | App Step 4 |
            | application step         | 4 coberturas adicionales                                           | string       | App Step 4 |
            | fulfillment model        | online                                                             | string       | App Step 4 |
            | product primary category | seguros                                                            | string       | App Step 4 |
            | product name             | seguro vida                                                        | string       | App Step 4 |
            | product amount           | 11317.68                                                           | number       | App Step 4 |
            | product payment amount   | 11317.68                                                           | number       | App Step 4 |
            | product currency         | MXN                                                                | string       | App Step 4 |
            | internal campaign        |                                                                    | empty array  | App Step 4 |
            | optimization attributes  |                                                                    | empty array  | App Step 4 |
    @ANA_EVENT_DLI005
    @analytics
    @MX @web @vbank
    @backend(test) @web-done
    Scenario: Dynamic Life Insurance - APP STEP 5 - offer insurance
        Given a user with the following criteria
            | criteria          |
            | dynamic insurance |
        And the user accesses to dynamic life insurance offer
        And the analytics interceptor service is initiated
        When the user accesses to the step "offer insurance" from the dynamic life insurance operative
        Then the analytics events contains the following variables
            | item                     | value                                                            | type         | event      |
            | analytics                | analytics/glomo_base                                             | json schema  | App Step 5 |
            | version DL               | 20250414_5.0                                                     | string       | App Step 5 |
            | page name                | app:privada:personas:seguro vida dinamico:5 seguro personalizado | string       | App Step 5 |
            | level 1                  | seguro vida dinamico                                             | string       | App Step 5 |
            | level 2                  | 5 seguro personalizado                                           | string       | App Step 5 |
            | language                 | ES                                                               | string       | App Step 5 |
            | page area                | privada                                                          | string       | App Step 5 |
            | page intent              | transaccion                                                      | string       | App Step 5 |
            | channel                  | online                                                           | string       | App Step 5 |
            | page instance ID         | de                                                               | string       | App Step 5 |
            | page info version        | appVersion                                                       | regexp named | App Step 5 |
            | page segment             | personas                                                         | string       | App Step 5 |
            | sysEnv                   | app                                                              | string       | App Step 5 |
            | business unit            | BBVA Mexico                                                      | string       | App Step 5 |
            | site app name            | App BBVA Mexico                                                  | string       | App Step 5 |
            | project name             | Glomo                                                            | string       | App Step 5 |
            | device mobile            | si                                                               | string       | App Step 5 |
            | user userState           | logado                                                           | string       | App Step 5 |
            | user segment global      | 003001                                                           | string       | App Step 5 |
            | profile ID               | profileID                                                        | regexp named | App Step 5 |
            | user gender              | gender                                                           | regexp named | App Step 5 |
            | user age                 | age                                                              | regexp named | App Step 5 |
            | global application       | life insurance                                                   | string       | App Step 5 |
            | application name         | seguro vida dinamico                                             | string       | App Step 5 |
            | application type         | contratacion                                                     | string       | App Step 5 |
            | application step         | 5 seguro personalizado                                           | string       | App Step 5 |
            | fulfillment model        | online                                                           | string       | App Step 5 |
            | product primary category | seguros                                                          | string       | App Step 5 |
            | product name             | seguro vida                                                      | string       | App Step 5 |
            | product amount           | 11317.68                                                         | number       | App Step 5 |
            | product payment amount   | 11317.68                                                         | number       | App Step 5 |
            | product currency         | MXN                                                              | string       | App Step 5 |
            | internal campaign        |                                                                  | empty array  | App Step 5 |
            | optimization attributes  |                                                                  | empty array  | App Step 5 |

    @ANA_EVENT_DLI006
    @analytics
    @MX @web @vbank
    @backend(test) @web-done
    Scenario: Dynamic Life Insurance - APP STEP 6 - beneficiarios
        Given a user with the following criteria
            | criteria          |
            | dynamic insurance |
        And the user accesses to dynamic life insurance offer
        And the analytics interceptor service is initiated
        When the user accesses to the step "beneficiarios" from the dynamic life insurance operative
        Then the analytics events contains the following variables
            | item                           | value                                                     | type         | event      |
            | analytics                      | analytics/glomo_base                                      | json schema  | App Step 6 |
            | version DL                     | 20250414_5.0                                              | string       | App Step 6 |
            | page name                      | app:privada:personas:seguro vida dinamico:6 beneficiarios | string       | App Step 6 |
            | level 1                        | seguro vida dinamico                                      | string       | App Step 6 |
            | level 2                        | 6 beneficiarios                                           | string       | App Step 6 |
            | language                       | ES                                                        | string       | App Step 6 |
            | page area                      | privada                                                   | string       | App Step 6 |
            | page intent                    | transaccion                                               | string       | App Step 6 |
            | channel                        | online                                                    | string       | App Step 6 |
            | page instance ID               | de                                                        | string       | App Step 6 |
            | page info version              | appVersion                                                | regexp named | App Step 6 |
            | page segment                   | personas                                                  | string       | App Step 6 |
            | sysEnv                         | app                                                       | string       | App Step 6 |
            | business unit                  | BBVA Mexico                                               | string       | App Step 6 |
            | site app name                  | App BBVA Mexico                                           | string       | App Step 6 |
            | project name                   | Glomo                                                     | string       | App Step 6 |
            | device mobile                  | si                                                        | string       | App Step 6 |
            | user userState                 | logado                                                    | string       | App Step 6 |
            | user segment global            | 003001                                                    | string       | App Step 6 |
            | profile ID                     | profileID                                                 | regexp named | App Step 6 |
            | user gender                    | gender                                                    | regexp named | App Step 6 |
            | user age                       | age                                                       | regexp named | App Step 6 |
            | application typology           | apoyo diario por hospitalizacion                          | string       | App Step 6 |
            | application offer              | plan creciente anual                                      | string       | App Step 6 |
            | application program type hired |                                                           | empty array  | App Step 6 |
            | global application             | life insurance                                            | string       | App Step 6 |
            | application name               | seguro vida dinamico                                      | string       | App Step 6 |
            | application type               | contratacion                                              | string       | App Step 6 |
            | application step               | 6 beneficiarios                                           | string       | App Step 6 |
            | fulfillment model              | online                                                    | string       | App Step 6 |
            | product primary category       | seguros                                                   | string       | App Step 6 |
            | product name                   | seguro vida                                               | string       | App Step 6 |
            | product amount                 | 6994.13                                                   | number       | App Step 6 |
            | product payment amount         | 6994.13                                                   | number       | App Step 6 |
            | product payment type           | anual                                                     | string       | App Step 6 |
            | product currency               | MXN                                                       | string       | App Step 6 |
            | internal campaign              |                                                           | empty array  | App Step 6 |
            | optimization attributes        |                                                           | empty array  | App Step 6 |

    @ANA_EVENT_DLI007
    @analytics
    @MX @web @vbank
    @backend(test) @web-done
    Scenario: Dynamic Life Insurance - APP STEP 7 - payment insurance
        Given a user with the following criteria
            | criteria          |
            | dynamic insurance |
        And the user accesses to the step "payment insurance" from the dynamic life insurance operative
        And the analytics interceptor service is initiated
        When the user selects an account or TOC
        Then the analytics events contains the following variables
            | item                           | value                                                     | type         | event      |
            | analytics                      | analytics/glomo_base                                      | json schema  | App Step 7 |
            | version DL                     | 20250414_5.0                                              | string       | App Step 7 |
            | page name                      | app:privada:personas:seguro vida dinamico:7 forma de pago | string       | App Step 7 |
            | level 1                        | seguro vida dinamico                                      | string       | App Step 7 |
            | level 2                        | 7 forma de pago                                           | string       | App Step 7 |
            | language                       | ES                                                        | string       | App Step 7 |
            | page area                      | privada                                                   | string       | App Step 7 |
            | page intent                    | transaccion                                               | string       | App Step 7 |
            | channel                        | online                                                    | string       | App Step 7 |
            | page instance ID               | de                                                        | string       | App Step 7 |
            | page info version              | appVersion                                                | regexp named | App Step 7 |
            | page segment                   | personas                                                  | string       | App Step 7 |
            | sysEnv                         | app                                                       | string       | App Step 7 |
            | business unit                  | BBVA Mexico                                               | string       | App Step 7 |
            | site app name                  | App BBVA Mexico                                           | string       | App Step 7 |
            | project name                   | Glomo                                                     | string       | App Step 7 |
            | device mobile                  | si                                                        | string       | App Step 7 |
            | user userState                 | logado                                                    | string       | App Step 7 |
            | user segment global            | 003001                                                    | string       | App Step 7 |
            | profile ID                     | profileID                                                 | regexp named | App Step 7 |
            | user gender                    | gender                                                    | regexp named | App Step 7 |
            | user age                       | age                                                       | regexp named | App Step 7 |
            | application typology           | apoyo diario por hospitalizacion                          | string       | App Step 7 |
            | application offer              | plan creciente anual                                      | string       | App Step 7 |
            | application program type hired |                                                           | empty array  | App Step 7 |
            | global application             | life insurance                                            | string       | App Step 7 |
            | application name               | seguro vida dinamico                                      | string       | App Step 7 |
            | application type               | contratacion                                              | string       | App Step 7 |
            | application step               | 7 forma de pago                                           | string       | App Step 7 |
            | fulfillment model              | online                                                    | string       | App Step 7 |
            | product primary category       | seguros                                                   | string       | App Step 7 |
            | product name                   | seguro vida                                               | string       | App Step 7 |
            | product amount                 | 6994.13                                                   | number       | App Step 7 |
            | product payment amount         | 6994.13                                                   | number       | App Step 7 |
            | product payment type           | anual                                                     | string       | App Step 7 |
            | product currency               | MXN                                                       | string       | App Step 7 |
            | internal campaign              |                                                           | empty array  | App Step 7 |
            | optimization attributes        |                                                           | empty array  | App Step 7 |

    @ANA_EVENT_DLI008
    @analytics
    @MX @web @vbank
    @backend(test) @web-done
    Scenario: Dynamic Life Insurance - APP STEP 8 - terms and conditions
        Given a user with the following criteria
            | criteria          |
            | dynamic insurance |
        And the user accesses to dynamic life insurance offer
        And the analytics interceptor service is initiated
        When the user accesses to the step "terms and conditions" from the dynamic life insurance operative
        Then the analytics events contains the following variables
            | item                           | value                                                              | type         | event      |
            | analytics                      | analytics/glomo_base                                               | json schema  | App Step 8 |
            | version DL                     | 20250414_5.0                                                       | string       | App Step 8 |
            | page name                      | app:privada:personas:seguro vida dinamico:8 terminos y condiciones | string       | App Step 8 |
            | level 1                        | seguro vida dinamico                                               | string       | App Step 8 |
            | level 2                        | 8 terminos y condiciones                                           | string       | App Step 8 |
            | language                       | ES                                                                 | string       | App Step 8 |
            | page area                      | privada                                                            | string       | App Step 8 |
            | page intent                    | transaccion                                                        | string       | App Step 8 |
            | channel                        | online                                                             | string       | App Step 8 |
            | page instance ID               | de                                                                 | string       | App Step 8 |
            | page info version              | appVersion                                                         | regexp named | App Step 8 |
            | page segment                   | personas                                                           | string       | App Step 8 |
            | sysEnv                         | app                                                                | string       | App Step 8 |
            | business unit                  | BBVA Mexico                                                        | string       | App Step 8 |
            | site app name                  | App BBVA Mexico                                                    | string       | App Step 8 |
            | project name                   | Glomo                                                              | string       | App Step 8 |
            | device mobile                  | si                                                                 | string       | App Step 8 |
            | user userState                 | logado                                                             | string       | App Step 8 |
            | user segment global            | 003001                                                             | string       | App Step 8 |
            | profile ID                     | profileID                                                          | regexp named | App Step 8 |
            | user gender                    | gender                                                             | regexp named | App Step 8 |
            | user age                       | age                                                                | regexp named | App Step 8 |
            | application typology           | apoyo diario por hospitalizacion                                   | string       | App Step 8 |
            | application offer              | plan creciente anual                                               | string       | App Step 8 |
            | application program type hired |                                                                    | empty array  | App Step 8 |
            | global application             | life insurance                                                     | string       | App Step 8 |
            | application name               | seguro vida dinamico                                               | string       | App Step 8 |
            | application type               | contratacion                                                       | string       | App Step 8 |
            | application step               | 8 terminos y condiciones                                           | string       | App Step 8 |
            | fulfillment model              | online                                                             | string       | App Step 8 |
            | product primary category       | seguros                                                            | string       | App Step 8 |
            | product name                   | seguro vida                                                        | string       | App Step 8 |
            | product amount                 | 6994.13                                                            | number       | App Step 8 |
            | product payment amount         | 6994.13                                                            | number       | App Step 8 |
            | product payment type           | anual                                                              | string       | App Step 8 |
            | product currency               | MXN                                                                | string       | App Step 8 |
            | internal campaign              |                                                                    | empty array  | App Step 8 |
            | optimization attributes        |                                                                    | empty array  | App Step 8 |

    @ANA_EVENT_DLI009
    @analytics
    @MX @web @vbank
    @backend(test) @web-done
    Scenario: Dynamic Life Insurance - APP STEP 9 - confirmation
        Given a user with the following criteria
            | criteria          |
            | dynamic insurance |
        And the user accesses to dynamic life insurance offer
        And the analytics interceptor service is initiated
        When the user accesses to the step "confirmation" from the dynamic life insurance operative
        Then the analytics events contains the following variables
            | item                           | value                                                    | type         | event      |
            | analytics                      | analytics/glomo_base                                     | json schema  | App Step 9 |
            | version DL                     | 20250414_5.0                                             | string       | App Step 9 |
            | page name                      | app:privada:personas:seguro vida dinamico:9 confirmacion | string       | App Step 9 |
            | level 1                        | seguro vida dinamico                                     | string       | App Step 9 |
            | level 2                        | 9 confirmacion                                           | string       | App Step 9 |
            | language                       | ES                                                       | string       | App Step 9 |
            | page area                      | privada                                                  | string       | App Step 9 |
            | page intent                    | transaccion                                              | string       | App Step 9 |
            | channel                        | online                                                   | string       | App Step 9 |
            | page instance ID               | de                                                       | string       | App Step 9 |
            | page info version              | appVersion                                               | regexp named | App Step 9 |
            | page segment                   | personas                                                 | string       | App Step 9 |
            | sysEnv                         | app                                                      | string       | App Step 9 |
            | business unit                  | BBVA Mexico                                              | string       | App Step 9 |
            | site app name                  | App BBVA Mexico                                          | string       | App Step 9 |
            | project name                   | Glomo                                                    | string       | App Step 9 |
            | device mobile                  | si                                                       | string       | App Step 9 |
            | user userState                 | logado                                                   | string       | App Step 9 |
            | user segment global            | 003001                                                   | string       | App Step 9 |
            | profile ID                     | profileID                                                | regexp named | App Step 9 |
            | user gender                    | gender                                                   | regexp named | App Step 9 |
            | user age                       | age                                                      | regexp named | App Step 9 |
            | application typology           | apoyo diario por hospitalizacion                         | string       | App Step 9 |
            | application offer              | plan creciente anual                                     | string       | App Step 9 |
            | application program type hired |                                                          | empty array  | App Step 9 |
            | global application             | life insurance                                           | string       | App Step 9 |
            | application name               | seguro vida dinamico                                     | string       | App Step 9 |
            | application type               | contratacion                                             | string       | App Step 9 |
            | application step               | 9 confirmacion                                           | string       | App Step 9 |
            | fulfillment model              | online                                                   | string       | App Step 9 |
            | product primary category       | seguros                                                  | string       | App Step 9 |
            | product name                   | seguro vida                                              | string       | App Step 9 |
            | product amount                 | 6994.13                                                  | number       | App Step 9 |
            | product payment amount         | 6994.13                                                  | number       | App Step 9 |
            | product payment type           | anual                                                    | string       | App Step 9 |
            | product currency               | MXN                                                      | string       | App Step 9 |
            | internal campaign              |                                                          | empty array  | App Step 9 |
            | optimization attributes        |                                                          | empty array  | App Step 9 |

    @ANA_EVENT_DLI010
    @analytics
    @MX @web @vbank
    @backend(test) @web-done
    Scenario: Dynamic Life Insurance - APP STEP 10 - otp
        Given a user with the following criteria
            | criteria          |
            | dynamic insurance |
        And the user accesses to the step "confirmation" from the dynamic life insurance operative
        And the analytics interceptor service is initiated
        When the user takes out insurance
        Then the analytics events contains the following variables
            | item                           | value                                            | type         | event       |
            | analytics                      | analytics/glomo_base                             | json schema  | App Step 10 |
            | version DL                     | 20250414_5.0                                     | string       | App Step 10 |
            | page name                      | app:privada:personas:seguro vida dinamico:10 otp | string       | App Step 10 |
            | level 1                        | seguro vida dinamico                             | string       | App Step 10 |
            | level 2                        | 10 otp                                           | string       | App Step 10 |
            | language                       | ES                                               | string       | App Step 10 |
            | page area                      | privada                                          | string       | App Step 10 |
            | page intent                    | transaccion                                      | string       | App Step 10 |
            | channel                        | online                                           | string       | App Step 10 |
            | page instance ID               | de                                               | string       | App Step 10 |
            | page info version              | appVersion                                       | regexp named | App Step 10 |
            | page segment                   | personas                                         | string       | App Step 10 |
            | sysEnv                         | app                                              | string       | App Step 10 |
            | business unit                  | BBVA Mexico                                      | string       | App Step 10 |
            | site app name                  | App BBVA Mexico                                  | string       | App Step 10 |
            | project name                   | Glomo                                            | string       | App Step 10 |
            | device mobile                  | si                                               | string       | App Step 10 |
            | user userState                 | logado                                           | string       | App Step 10 |
            | user segment global            | 003001                                           | string       | App Step 10 |
            | profile ID                     | profileID                                        | regexp named | App Step 10 |
            | user gender                    | gender                                           | regexp named | App Step 10 |
            | user age                       | age                                              | regexp named | App Step 10 |
            | application typology           | apoyo diario por hospitalizacion                 | string       | App Step 10 |
            | application offer              | plan creciente anual                             | string       | App Step 10 |
            | application program type hired |                                                  | empty array  | App Step 10 |
            | global application             | life insurance                                   | string       | App Step 10 |
            | application name               | seguro vida dinamico                             | string       | App Step 10 |
            | application type               | contratacion                                     | string       | App Step 10 |
            | application step               | 10 otp                                           | string       | App Step 10 |
            | fulfillment model              | online                                           | string       | App Step 10 |
            | product primary category       | seguros                                          | string       | App Step 10 |
            | product name                   | seguro vida                                      | string       | App Step 10 |
            | product amount                 | 6994.13                                          | number       | App Step 10 |
            | product payment amount         | 6994.13                                          | number       | App Step 10 |
            | product payment type           | anual                                            | string       | App Step 10 |
            | product currency               | MXN                                              | string       | App Step 10 |
            | internal campaign              |                                                  | empty array  | App Step 10 |
            | optimization attributes        |                                                  | empty array  | App Step 10 |

@ocMetaseguraAnalytics

Feature: Analytics - OC Meta Segura

    @ANA_MSD001
    @analytics
    @web @ios @android
    @MX @backend(test) @vbank @web-done
    Scenario: OC Metasegura - App Page Visit
        Given a user with the following criteria
            | criteria    |
            | MSD General |
        And the user accesses contract product section
        And the analytics interceptor service is initiated
        When the user accesses to the metasegura offer detail
        Then the analytics events contains the following variables
            | item                     | value                                              | type         | event          |
            | analytics                | analytics/glomo_base                               | json schema  | App Page Visit |
            | version DL               | 20250414_5.0                                       | string       | App Page Visit |
            | page name                | app:privada:personas:meta segura:1 caracteristicas | string       | App Page Visit |
            | level 1                  | meta segura                                        | string       | App Page Visit |
            | level 2                  | 1 caracteristicas                                  | string       | App Page Visit |
            | language                 | ES                                                 | string       | App Page Visit |
            | page area                | privada                                            | string       | App Page Visit |
            | page intent              | transaccion                                        | string       | App Page Visit |
            | channel                  | online                                             | string       | App Page Visit |
            | page instance ID         | de                                                 | string       | App Page Visit |
            | page info version        | appVersion                                         | regexp named | App Page Visit |
            | page segment             | personas                                           | string       | App Page Visit |
            | sysEnv                   | app                                                | string       | App Page Visit |
            | business unit            | BBVA Mexico                                        | string       | App Page Visit |
            | site app name            | App BBVA Mexico                                    | string       | App Page Visit |
            | project name             | DIY E2E Sales                                      | string       | App Page Visit |
            | device mobile            | si                                                 | string       | App Page Visit |
            | user userState           | logado                                             | string       | App Page Visit |
            | profile ID               | profileID                                          | regexp named | App Page Visit |
            | user segment global      | 003001                                             | string       | App Page Visit |
            | user gender              | gender                                             | regexp named | App Page Visit |
            | user age                 | age                                                | regexp named | App Page Visit |
            | global application       | goal insurance                                     | string       | App Page Visit |
            | application name         | meta segura digital                                | string       | App Page Visit |
            | application type         | contratacion                                       | string       | App Page Visit |
            | application step         | 1 caracteristicas                                  | string       | App Page Visit |
            | fulfillment model        | online                                             | string       | App Page Visit |
            | product primary category | seguros                                            | string       | App Page Visit |
            | product name             | meta segura                                        | string       | App Page Visit |
            | internal campaign        |                                                    | empty array  | App Page Visit |
            | optimization attributes  |                                                    | empty array  | App Page Visit |

    @ANA_MSD002
    @analytics
    @web @ios @android
    @MX @backend(test) @vbank @web-done
    Scenario: OC Metasegura - App Started
        Given a user with the following criteria
            | criteria    |
            | MSD General |
        And the user accesses to the metasegura offer detail
        And the analytics interceptor service is initiated
        When the user accesses to the "questionnaire" step of the metasegura offer
        Then the analytics events contains the following variables
            | item                     | value                                              | type         | event       |
            | analytics                | analytics/glomo_base                               | json schema  | App Started |
            | version DL               | 20250414_5.0                                       | string       | App Started |
            | page name                | app:privada:personas:meta segura:1 caracteristicas | string       | App Started |
            | level 1                  | meta segura                                        | string       | App Started |
            | level 2                  | 1 caracteristicas                                  | string       | App Started |
            | language                 | ES                                                 | string       | App Started |
            | page area                | privada                                            | string       | App Started |
            | page intent              | transaccion                                        | string       | App Started |
            | channel                  | online                                             | string       | App Started |
            | page instance ID         | de                                                 | string       | App Started |
            | page info version        | appVersion                                         | regexp named | App Started |
            | page segment             | personas                                           | string       | App Started |
            | sysEnv                   | app                                                | string       | App Started |
            | business unit            | BBVA Mexico                                        | string       | App Started |
            | site app name            | App BBVA Mexico                                    | string       | App Started |
            | project name             | DIY E2E Sales                                      | string       | App Started |
            | device mobile            | si                                                 | string       | App Started |
            | user userState           | logado                                             | string       | App Started |
            | profile ID               | profileID                                          | regexp named | App Started |
            | user segment global      | 003001                                             | string       | App Started |
            | user gender              | gender                                             | regexp named | App Started |
            | user age                 | age                                                | regexp named | App Started |
            | global application       | goal insurance                                     | string       | App Started |
            | application name         | meta segura digital                                | string       | App Started |
            | application type         | contratacion                                       | string       | App Started |
            | application step         | personalizar ahorro                                | string       | App Started |
            | fulfillment model        | online                                             | string       | App Started |
            | product primary category | seguros                                            | string       | App Started |
            | product name             | meta segura                                        | string       | App Started |
            | internal campaign        |                                                    | empty array  | App Started |
            | optimization attributes  |                                                    | empty array  | App Started |

    @ANA_MSD003
    @analytics
    @web @ios @android
    @MX @backend(test) @vbank @web-done
    Scenario: OC Metasegura - App Step 2
        Given a user with the following criteria
            | criteria    |
            | MSD General |
        And the user accesses to the metasegura offer detail
        And the analytics interceptor service is initiated
        When the user accesses to the "questionnaire" step of the metasegura offer
        Then the analytics events contains the following variables
            | item                     | value                                           | type         | event      |
            | analytics                | analytics/glomo_base                            | json schema  | App Step 2 |
            | version DL               | 20250414_5.0                                    | string       | App Step 2 |
            | page name                | app:privada:personas:meta segura:2 cuestionario | string       | App Step 2 |
            | level 1                  | meta segura                                     | string       | App Step 2 |
            | level 2                  | 2 cuestionario                                  | string       | App Step 2 |
            | language                 | ES                                              | string       | App Step 2 |
            | page area                | privada                                         | string       | App Step 2 |
            | page intent              | transaccion                                     | string       | App Step 2 |
            | channel                  | online                                          | string       | App Step 2 |
            | page instance ID         | de                                              | string       | App Step 2 |
            | page info version        | appVersion                                      | regexp named | App Step 2 |
            | page segment             | personas                                        | string       | App Step 2 |
            | sysEnv                   | app                                             | string       | App Step 2 |
            | business unit            | BBVA Mexico                                     | string       | App Step 2 |
            | site app name            | App BBVA Mexico                                 | string       | App Step 2 |
            | project name             | DIY E2E Sales                                   | string       | App Step 2 |
            | device mobile            | si                                              | string       | App Step 2 |
            | user userState           | logado                                          | string       | App Step 2 |
            | profile ID               | profileID                                       | regexp named | App Step 2 |
            | user segment global      | 003001                                          | string       | App Step 2 |
            | user gender              | gender                                          | regexp named | App Step 2 |
            | user age                 | age                                             | regexp named | App Step 2 |
            | global application       | goal insurance                                  | string       | App Step 2 |
            | application name         | meta segura digital                             | string       | App Step 2 |
            | application type         | contratacion                                    | string       | App Step 2 |
            | application step         | 2 cuestionario                                  | string       | App Step 2 |
            | fulfillment model        | online                                          | string       | App Step 2 |
            | product primary category | seguros                                         | string       | App Step 2 |
            | product name             | meta segura                                     | string       | App Step 2 |
            | internal campaign        |                                                 | empty array  | App Step 2 |
            | optimization attributes  |                                                 | empty array  | App Step 2 |

    @ANA_MSD004
    @analytics
    @web @ios @android
    @MX @backend(test) @vbank @web-done
    Scenario: OC Metasegura - App Step 3
        Given a user with the following criteria
            | criteria    |
            | MSD General |
        And the user accesses to the metasegura offer detail
        And the analytics interceptor service is initiated
        When the user accesses to the "quotation" step of the metasegura offer
        Then the analytics events contains the following variables
            | item                     | value                                      | type         | event      |
            | analytics                | analytics/glomo_base                       | json schema  | App Step 3 |
            | version DL               | 20250414_5.0                               | string       | App Step 3 |
            | page name                | app:privada:personas:meta segura:3 tu meta | string       | App Step 3 |
            | level 1                  | meta segura                                | string       | App Step 3 |
            | level 2                  | 3 tu meta                                  | string       | App Step 3 |
            | language                 | ES                                         | string       | App Step 3 |
            | page area                | privada                                    | string       | App Step 3 |
            | page intent              | transaccion                                | string       | App Step 3 |
            | channel                  | online                                     | string       | App Step 3 |
            | page instance ID         | de                                         | string       | App Step 3 |
            | page info version        | appVersion                                 | regexp named | App Step 3 |
            | page segment             | personas                                   | string       | App Step 3 |
            | sysEnv                   | app                                        | string       | App Step 3 |
            | business unit            | BBVA Mexico                                | string       | App Step 3 |
            | site app name            | App BBVA Mexico                            | string       | App Step 3 |
            | project name             | DIY E2E Sales                              | string       | App Step 3 |
            | device mobile            | si                                         | string       | App Step 3 |
            | user userState           | logado                                     | string       | App Step 3 |
            | profile ID               | profileID                                  | regexp named | App Step 3 |
            | user segment global      | 003001                                     | string       | App Step 3 |
            | user gender              | gender                                     | regexp named | App Step 3 |
            | user age                 | age                                        | regexp named | App Step 3 |
            | global application       | goal insurance                             | string       | App Step 3 |
            | application name         | meta segura digital                        | string       | App Step 3 |
            | application type         | contratacion                               | string       | App Step 3 |
            | application step         | 3 tu meta                                  | string       | App Step 3 |
            | fulfillment model        | online                                     | string       | App Step 3 |
            | product primary category | seguros                                    | string       | App Step 3 |
            | product name             | meta segura                                | string       | App Step 3 |
            | internal campaign        |                                            | empty array  | App Step 3 |
            | optimization attributes  |                                            | empty array  | App Step 3 |

    @ANA_MSD005
    @analytics
    @web @ios @android
    @MX @backend(test) @vbank @web-done
    Scenario: OC Metasegura - App Step 4
        Given a user with the following criteria
            | criteria    |
            | MSD General |
        And the user accesses to the metasegura offer detail
        And the analytics interceptor service is initiated
        And the user accesses to the "quotation" step of the metasegura offer
        And the user inputs "9000" as the goal
        When the user accesses to the "personal savings" step of the metasegura offer
        Then the analytics events contains the following variables
            | item                     | value                                                 | type         | event      |
            | analytics                | analytics/glomo_base                                  | json schema  | App Step 4 |
            | version DL               | 20250414_5.0                                          | string       | App Step 4 |
            | page name                | app:privada:personas:meta segura:4 meta personalizada | string       | App Step 4 |
            | level 1                  | meta segura                                           | string       | App Step 4 |
            | level 2                  | 4 meta personalizada                                  | string       | App Step 4 |
            | language                 | ES                                                    | string       | App Step 4 |
            | page area                | privada                                               | string       | App Step 4 |
            | page intent              | transaccion                                           | string       | App Step 4 |
            | channel                  | online                                                | string       | App Step 4 |
            | page instance ID         | de                                                    | string       | App Step 4 |
            | page info version        | appVersion                                            | regexp named | App Step 4 |
            | page segment             | personas                                              | string       | App Step 4 |
            | sysEnv                   | app                                                   | string       | App Step 4 |
            | business unit            | BBVA Mexico                                           | string       | App Step 4 |
            | site app name            | App BBVA Mexico                                       | string       | App Step 4 |
            | project name             | DIY E2E Sales                                         | string       | App Step 4 |
            | device mobile            | si                                                    | string       | App Step 4 |
            | user userState           | logado                                                | string       | App Step 4 |
            | profile ID               | profileID                                             | regexp named | App Step 4 |
            | user segment global      | 003001                                                | string       | App Step 4 |
            | user gender              | gender                                                | regexp named | App Step 4 |
            | user age                 | age                                                   | regexp named | App Step 4 |
            | global application       | goal insurance                                        | string       | App Step 4 |
            | application name         | meta segura digital                                   | string       | App Step 4 |
            | application type         | contratacion                                          | string       | App Step 4 |
            | application step         | 4 meta personalizada                                  | string       | App Step 4 |
            | fulfillment model        | online                                                | string       | App Step 4 |
            | product primary category | seguros                                               | string       | App Step 4 |
            | product name             | meta segura                                           | string       | App Step 4 |
            | product amount           | 9000                                                  | string       | App Step 4 |
            | product currency         | USD                                                   | string       | App Step 4 |
            | internal campaign        |                                                       | empty array  | App Step 4 |
            | optimization attributes  |                                                       | empty array  | App Step 4 |

    @ANA_MSD006
    @analytics
    @web @ios @android
    @MX @backend(test) @vbank @web-done
    Scenario: OC Metasegura - App Step 5
        Given a user with the following criteria
            | criteria    |
            | MSD General |
        And the user accesses to the metasegura offer detail
        And the analytics interceptor service is initiated
        And the user accesses to the "quotation" step of the metasegura offer
        And the user inputs "9000" as the goal
        When the user accesses to the "beneficiaries" step of the metasegura offer
        Then the analytics events contains the following variables
            | item                     | value                                            | type         | event      |
            | analytics                | analytics/glomo_base                             | json schema  | App Step 5 |
            | version DL               | 20250414_5.0                                     | string       | App Step 5 |
            | page name                | app:privada:personas:meta segura:5 beneficiarios | string       | App Step 5 |
            | level 1                  | meta segura                                      | string       | App Step 5 |
            | level 2                  | 5 beneficiarios                                  | string       | App Step 5 |
            | language                 | ES                                               | string       | App Step 5 |
            | page area                | privada                                          | string       | App Step 5 |
            | page intent              | transaccion                                      | string       | App Step 5 |
            | channel                  | online                                           | string       | App Step 5 |
            | page instance ID         | de                                               | string       | App Step 5 |
            | page info version        | appVersion                                       | regexp named | App Step 5 |
            | page segment             | personas                                         | string       | App Step 5 |
            | sysEnv                   | app                                              | string       | App Step 5 |
            | business unit            | BBVA Mexico                                      | string       | App Step 5 |
            | site app name            | App BBVA Mexico                                  | string       | App Step 5 |
            | project name             | DIY E2E Sales                                    | string       | App Step 5 |
            | device mobile            | si                                               | string       | App Step 5 |
            | user userState           | logado                                           | string       | App Step 5 |
            | profile ID               | profileID                                        | regexp named | App Step 5 |
            | user segment global      | 003001                                           | string       | App Step 5 |
            | user gender              | gender                                           | regexp named | App Step 5 |
            | user age                 | age                                              | regexp named | App Step 5 |
            | global application       | goal insurance                                   | string       | App Step 5 |
            | application name         | meta segura digital                              | string       | App Step 5 |
            | application type         | contratacion                                     | string       | App Step 5 |
            | application step         | 5 beneficiarios                                  | string       | App Step 5 |
            | fulfillment model        | online                                           | string       | App Step 5 |
            | application typology     | no asesor ejecutivo                              | string       | App Step 5 |
            | product primary category | seguros                                          | string       | App Step 5 |
            | product name             | meta segura                                      | string       | App Step 5 |
            | product amount           | 9000                                             | string       | App Step 5 |
            | product currency         | USD                                              | string       | App Step 5 |
            | product payment amount   | 126                                              | string       | App Step 5 |
            | product payment type     | mensual                                          | string       | App Step 5 |
            | internal campaign        |                                                  | empty array  | App Step 5 |
            | optimization attributes  |                                                  | empty array  | App Step 5 |

    @ANA_MSD007
    @analytics
    @web @ios @android
    @MX @backend(test) @vbank @web-done
    Scenario: OC Metasegura - App Step 6
        Given a user with the following criteria
            | criteria    |
            | MSD General |
        And the user accesses to the metasegura offer detail
        And the analytics interceptor service is initiated
        And the user accesses to the "quotation" step of the metasegura offer
        And the user inputs "9000" as the goal
        And the user accesses to the "beneficiaries" step of the metasegura offer
        When the user accesses to the "beneficiary" modal
        Then the analytics events contains the following variables
            | item                     | value                                                 | type         | event      |
            | analytics                | analytics/glomo_base                                  | json schema  | App Step 6 |
            | version DL               | 20250414_5.0                                          | string       | App Step 6 |
            | page name                | app:privada:personas:meta segura:6 datos beneficiario | string       | App Step 6 |
            | level 1                  | meta segura                                           | string       | App Step 6 |
            | level 2                  | 6 datos beneficiario                                  | string       | App Step 6 |
            | language                 | ES                                                    | string       | App Step 6 |
            | page area                | privada                                               | string       | App Step 6 |
            | page intent              | transaccion                                           | string       | App Step 6 |
            | channel                  | online                                                | string       | App Step 6 |
            | page instance ID         | de                                                    | string       | App Step 6 |
            | page info version        | appVersion                                            | regexp named | App Step 6 |
            | page segment             | personas                                              | string       | App Step 6 |
            | sysEnv                   | app                                                   | string       | App Step 6 |
            | business unit            | BBVA Mexico                                           | string       | App Step 6 |
            | site app name            | App BBVA Mexico                                       | string       | App Step 6 |
            | project name             | DIY E2E Sales                                         | string       | App Step 6 |
            | device mobile            | si                                                    | string       | App Step 6 |
            | user userState           | logado                                                | string       | App Step 6 |
            | profile ID               | profileID                                             | regexp named | App Step 6 |
            | user segment global      | 003001                                                | string       | App Step 6 |
            | user gender              | gender                                                | regexp named | App Step 6 |
            | user age                 | age                                                   | regexp named | App Step 6 |
            | global application       | goal insurance                                        | string       | App Step 6 |
            | application name         | meta segura digital                                   | string       | App Step 6 |
            | application type         | contratacion                                          | string       | App Step 6 |
            | application step         | 6 datos beneficiario                                  | string       | App Step 6 |
            | fulfillment model        | online                                                | string       | App Step 6 |
            | application typology     | no asesor ejecutivo                                   | string       | App Step 6 |
            | product primary category | seguros                                               | string       | App Step 6 |
            | product name             | meta segura                                           | string       | App Step 6 |
            | product amount           | 9000                                                  | string       | App Step 6 |
            | product currency         | USD                                                   | string       | App Step 6 |
            | product payment amount   | 126                                                   | string       | App Step 6 |
            | product payment type     | mensual                                               | string       | App Step 6 |
            | internal campaign        |                                                       | empty array  | App Step 6 |
            | optimization attributes  |                                                       | empty array  | App Step 6 |

    @ANA_MSD008
    @analytics
    @web @ios @android
    @MX @backend(test) @vbank @web-done
    Scenario: OC Metasegura - App Step 7
        Given a user with the following criteria
            | criteria    |
            | MSD General |
        And the user accesses to the metasegura offer detail
        And the analytics interceptor service is initiated
        And the user accesses to the "quotation" step of the metasegura offer
        And the user inputs "9000" as the goal
        When the user accesses to the "payment method" step of the metasegura offer
        Then the analytics events contains the following variables
            | item                      | value                                            | type         | event      |
            | analytics                 | analytics/glomo_base                             | json schema  | App Step 7 |
            | version DL                | 20250414_5.0                                     | string       | App Step 7 |
            | page name                 | app:privada:personas:meta segura:7 forma de pago | string       | App Step 7 |
            | level 1                   | meta segura                                      | string       | App Step 7 |
            | level 2                   | 7 forma de pago                                  | string       | App Step 7 |
            | language                  | ES                                               | string       | App Step 7 |
            | page area                 | privada                                          | string       | App Step 7 |
            | page intent               | transaccion                                      | string       | App Step 7 |
            | channel                   | online                                           | string       | App Step 7 |
            | page instance ID          | de                                               | string       | App Step 7 |
            | page info version         | appVersion                                       | regexp named | App Step 7 |
            | page segment              | personas                                         | string       | App Step 7 |
            | sysEnv                    | app                                              | string       | App Step 7 |
            | business unit             | BBVA Mexico                                      | string       | App Step 7 |
            | site app name             | App BBVA Mexico                                  | string       | App Step 7 |
            | project name              | DIY E2E Sales                                    | string       | App Step 7 |
            | device mobile             | si                                               | string       | App Step 7 |
            | user userState            | logado                                           | string       | App Step 7 |
            | profile ID                | profileID                                        | regexp named | App Step 7 |
            | user segment global       | 003001                                           | string       | App Step 7 |
            | user gender               | gender                                           | regexp named | App Step 7 |
            | user age                  | age                                              | regexp named | App Step 7 |
            | global application        | goal insurance                                   | string       | App Step 7 |
            | application name          | meta segura digital                              | string       | App Step 7 |
            | application type          | contratacion                                     | string       | App Step 7 |
            | application step          | 7 forma de pago                                  | string       | App Step 7 |
            | fulfillment model         | online                                           | string       | App Step 7 |
            | application typology      | no asesor ejecutivo                              | string       | App Step 7 |
            | product primary category  | seguros                                          | string       | App Step 7 |
            | product name              | meta segura                                      | string       | App Step 7 |
            | product amount            | 9000                                             | string       | App Step 7 |
            | product currency          | USD                                              | string       | App Step 7 |
            | product payment amount    | 126                                              | string       | App Step 7 |
            | product payment type      | mensual                                          | string       | App Step 7 |
            | product number of holders | 1                                                | string       | App Step 7 |
            | internal campaign         |                                                  | empty array  | App Step 7 |
            | optimization attributes   |                                                  | empty array  | App Step 7 |

    @ANA_MSD009
    @analytics
    @web @ios @android
    @MX @backend(test) @vbank @web-done
    Scenario: OC Metasegura - App Step 8
        Given a user with the following criteria
            | criteria    |
            | MSD General |
        And the user accesses to the metasegura offer detail
        And the analytics interceptor service is initiated
        And the user accesses to the "quotation" step of the metasegura offer
        And the user inputs "9000" as the goal
        When the user accesses to the "terms and conditions" step of the metasegura offer
        Then the analytics events contains the following variables
            | item                      | value                                                     | type         | event      |
            | analytics                 | analytics/glomo_base                                      | json schema  | App Step 8 |
            | version DL                | 20250414_5.0                                              | string       | App Step 8 |
            | page name                 | app:privada:personas:meta segura:8 terminos y condiciones | string       | App Step 8 |
            | level 1                   | meta segura                                               | string       | App Step 8 |
            | level 2                   | 8 terminos y condiciones                                  | string       | App Step 8 |
            | language                  | ES                                                        | string       | App Step 8 |
            | page area                 | privada                                                   | string       | App Step 8 |
            | page intent               | transaccion                                               | string       | App Step 8 |
            | channel                   | online                                                    | string       | App Step 8 |
            | page instance ID          | de                                                        | string       | App Step 8 |
            | page info version         | appVersion                                                | regexp named | App Step 8 |
            | page segment              | personas                                                  | string       | App Step 8 |
            | sysEnv                    | app                                                       | string       | App Step 8 |
            | business unit             | BBVA Mexico                                               | string       | App Step 8 |
            | site app name             | App BBVA Mexico                                           | string       | App Step 8 |
            | project name              | DIY E2E Sales                                             | string       | App Step 8 |
            | device mobile             | si                                                        | string       | App Step 8 |
            | user userState            | logado                                                    | string       | App Step 8 |
            | profile ID                | profileID                                                 | regexp named | App Step 8 |
            | user segment global       | 003001                                                    | string       | App Step 8 |
            | user gender               | gender                                                    | regexp named | App Step 8 |
            | user age                  | age                                                       | regexp named | App Step 8 |
            | global application        | goal insurance                                            | string       | App Step 8 |
            | application name          | meta segura digital                                       | string       | App Step 8 |
            | application type          | contratacion                                              | string       | App Step 8 |
            | application step          | 8 terminos y condiciones                                  | string       | App Step 8 |
            | fulfillment model         | online                                                    | string       | App Step 8 |
            | application typology      | no asesor ejecutivo                                       | string       | App Step 8 |
            | product primary category  | seguros                                                   | string       | App Step 8 |
            | product name              | meta segura                                               | string       | App Step 8 |
            | product amount            | 9000                                                      | string       | App Step 8 |
            | product currency          | USD                                                       | string       | App Step 8 |
            | product payment amount    | 126                                                       | string       | App Step 8 |
            | product payment type      | mensual                                                   | string       | App Step 8 |
            | product number of holders | 1                                                         | string       | App Step 8 |
            | internal campaign         |                                                           | empty array  | App Step 8 |
            | optimization attributes   |                                                           | empty array  | App Step 8 |

    @ANA_MSD010
    @analytics
    @web @ios @android
    @MX @backend(test) @vbank @web-done
    Scenario: OC Metasegura - App Step 9
        Given a user with the following criteria
            | criteria    |
            | MSD General |
        And the user accesses to the metasegura offer detail
        And the analytics interceptor service is initiated
        And the user accesses to the "quotation" step of the metasegura offer
        And the user inputs "9000" as the goal
        When the user accesses to the "summary" step of the metasegura offer
        Then the analytics events contains the following variables
            | item                      | value                                           | type         | event      |
            | analytics                 | analytics/glomo_base                            | json schema  | App Step 9 |
            | version DL                | 20250414_5.0                                    | string       | App Step 9 |
            | page name                 | app:privada:personas:meta segura:9 confirmacion | string       | App Step 9 |
            | level 1                   | meta segura                                     | string       | App Step 9 |
            | level 2                   | 9 confirmacion                                  | string       | App Step 9 |
            | language                  | ES                                              | string       | App Step 9 |
            | page area                 | privada                                         | string       | App Step 9 |
            | page intent               | transaccion                                     | string       | App Step 9 |
            | channel                   | online                                          | string       | App Step 9 |
            | page instance ID          | de                                              | string       | App Step 9 |
            | page info version         | appVersion                                      | regexp named | App Step 9 |
            | page segment              | personas                                        | string       | App Step 9 |
            | sysEnv                    | app                                             | string       | App Step 9 |
            | business unit             | BBVA Mexico                                     | string       | App Step 9 |
            | site app name             | App BBVA Mexico                                 | string       | App Step 9 |
            | project name              | DIY E2E Sales                                   | string       | App Step 9 |
            | device mobile             | si                                              | string       | App Step 9 |
            | user userState            | logado                                          | string       | App Step 9 |
            | profile ID                | profileID                                       | regexp named | App Step 9 |
            | user segment global       | 003001                                          | string       | App Step 9 |
            | user gender               | gender                                          | regexp named | App Step 9 |
            | user age                  | age                                             | regexp named | App Step 9 |
            | global application        | goal insurance                                  | string       | App Step 9 |
            | application name          | meta segura digital                             | string       | App Step 9 |
            | application type          | contratacion                                    | string       | App Step 9 |
            | application step          | 9 confirmacion                                  | string       | App Step 9 |
            | fulfillment model         | online                                          | string       | App Step 9 |
            | application typology      | no asesor ejecutivo                             | string       | App Step 9 |
            | product primary category  | seguros                                         | string       | App Step 9 |
            | product name              | meta segura                                     | string       | App Step 9 |
            | product amount            | 9000                                            | string       | App Step 9 |
            | product currency          | USD                                             | string       | App Step 9 |
            | product payment amount    | 126                                             | string       | App Step 9 |
            | product payment type      | mensual                                         | string       | App Step 9 |
            | product number of holders | 1                                               | string       | App Step 9 |
            | internal campaign         |                                                 | empty array  | App Step 9 |
            | optimization attributes   |                                                 | empty array  | App Step 9 |

    @ANA_MSD011
    @analytics
    @web @ios @android
    @MX @backend(test) @vbank @web-done
    Scenario: OC Metasegura - App Step 10
        Given a user with the following criteria
            | criteria    |
            | MSD General |
        And the user accesses to the metasegura offer detail
        And the analytics interceptor service is initiated
        And the user accesses to the "quotation" step of the metasegura offer
        And the user inputs "9000" as the goal
        And the user accesses to the "summary" step of the metasegura offer
        When the user accesses to the token page before the success page
        Then the analytics events contains the following variables
            | item                      | value                                   | type         | event       |
            | analytics                 | analytics/glomo_base                    | json schema  | App Step 10 |
            | version DL                | 20250414_5.0                            | string       | App Step 10 |
            | page name                 | app:privada:personas:meta segura:10 otp | string       | App Step 10 |
            | level 1                   | meta segura                             | string       | App Step 10 |
            | level 2                   | 10 otp                                  | string       | App Step 10 |
            | language                  | ES                                      | string       | App Step 10 |
            | page area                 | privada                                 | string       | App Step 10 |
            | page intent               | transaccion                             | string       | App Step 10 |
            | channel                   | online                                  | string       | App Step 10 |
            | page instance ID          | de                                      | string       | App Step 10 |
            | page info version         | appVersion                              | regexp named | App Step 10 |
            | page segment              | personas                                | string       | App Step 10 |
            | sysEnv                    | app                                     | string       | App Step 10 |
            | business unit             | BBVA Mexico                             | string       | App Step 10 |
            | site app name             | App BBVA Mexico                         | string       | App Step 10 |
            | project name              | DIY E2E Sales                           | string       | App Step 10 |
            | device mobile             | si                                      | string       | App Step 10 |
            | user userState            | logado                                  | string       | App Step 10 |
            | profile ID                | profileID                               | regexp named | App Step 10 |
            | user segment global       | 003001                                  | string       | App Step 10 |
            | user gender               | gender                                  | regexp named | App Step 10 |
            | user age                  | age                                     | regexp named | App Step 10 |
            | global application        | goal insurance                          | string       | App Step 10 |
            | application name          | meta segura digital                     | string       | App Step 10 |
            | application type          | contratacion                            | string       | App Step 10 |
            | application step          | 10 otp                                  | string       | App Step 10 |
            | fulfillment model         | online                                  | string       | App Step 10 |
            | custom fields             | firma:token                             | string       | App Step 10 |
            | application typology      | no asesor ejecutivo                     | string       | App Step 10 |
            | product primary category  | seguros                                 | string       | App Step 10 |
            | product name              | meta segura                             | string       | App Step 10 |
            | product amount            | 9000                                    | string       | App Step 10 |
            | product currency          | USD                                     | string       | App Step 10 |
            | product payment amount    | 126                                     | string       | App Step 10 |
            | product payment type      | mensual                                 | string       | App Step 10 |
            | product number of holders | 1                                       | string       | App Step 10 |
            | internal campaign         |                                         | empty array  | App Step 10 |
            | optimization attributes   |                                         | empty array  | App Step 10 |

    @ANA_MSD012
    @analytics
    @web @ios @android
    @MX @backend(test) @vbank @web-done
    Scenario: OC Metasegura - App Completed - Contratado
        Given a user with the following criteria
            | criteria                  |
            | MSD Contracting Analytics |
        And the user accesses to the metasegura offer detail
        And the analytics interceptor service is initiated
        And the user accesses to the "quotation" step of the metasegura offer
        And the user inputs "9000" as the goal
        When the user accesses to the meta segura success page
        Then the analytics events contains the following variables
            | item                         | value                                           | type         | event         |
            | analytics                    | analytics/glomo_base                            | json schema  | App Completed |
            | version DL                   | 20250414_5.0                                    | string       | App Completed |
            | page name                    | app:privada:personas:meta segura:pagina exitosa | string       | App Completed |
            | level 1                      | meta segura                                     | string       | App Completed |
            | level 2                      | pagina exitosa                                  | string       | App Completed |
            | language                     | ES                                              | string       | App Completed |
            | page area                    | privada                                         | string       | App Completed |
            | page intent                  | transaccion                                     | string       | App Completed |
            | channel                      | online                                          | string       | App Completed |
            | page instance ID             | de                                              | string       | App Completed |
            | page info version            | appVersion                                      | regexp named | App Completed |
            | page segment                 | personas                                        | string       | App Completed |
            | sysEnv                       | app                                             | string       | App Completed |
            | business unit                | BBVA Mexico                                     | string       | App Completed |
            | site app name                | App BBVA Mexico                                 | string       | App Completed |
            | project name                 | DIY E2E Sales                                   | string       | App Completed |
            | device mobile                | si                                              | string       | App Completed |
            | user userState               | logado                                          | string       | App Completed |
            | profile ID                   | profileID                                       | regexp named | App Completed |
            | user segment global          | 003001                                          | string       | App Completed |
            | user gender                  | gender                                          | regexp named | App Completed |
            | user age                     | age                                             | regexp named | App Completed |
            | global application           | goal insurance                                  | string       | App Completed |
            | application name             | meta segura digital                             | string       | App Completed |
            | application type             | contratacion                                    | string       | App Completed |
            | application step             | pagina exitosa                                  | string       | App Completed |
            | fulfillment model            | online                                          | string       | App Completed |
            | application state            | contratado                                      | string       | App Completed |
            | custom fields                | firma:token                                     | string       | App Completed |
            | application operation number | 283548353                                       | string       | App Completed |
            | application typology         | no asesor ejecutivo                             | string       | App Completed |
            | product primary category     | seguros                                         | string       | App Completed |
            | product name                 | meta segura                                     | string       | App Completed |
            | product amount               | 9000                                            | string       | App Completed |
            | product currency             | USD                                             | string       | App Completed |
            | product payment amount       | 127.85                                          | string       | App Completed |
            | product payment type         | mensual                                         | string       | App Completed |
            | product number of holders    | 1                                               | string       | App Completed |
            | product state                | contratado                                      | string       | App Completed |
            | internal campaign            |                                                 | empty array  | App Completed |
            | optimization attributes      |                                                 | empty array  | App Completed |

    @ANA_MSD013
    @analytics
    @web @ios @android
    @MX @backend(test) @vbank @web-done
    Scenario: OC Metasegura - App Completed - Rechazado - Health requirements
        Given a user with the following criteria
            | criteria              |
            | MSD Health Rejections |
        And the user accesses to the metasegura offer detail
        And the analytics interceptor service is initiated
        And the user accesses to the "questionnaire" step of the metasegura offer
        When the user selects "cancer" as health condition and continues
        Then the analytics events contains the following variables
            | item                    | value                                           | type         | event         |
            | analytics               | analytics/glomo_base                            | json schema  | App Completed |
            | version DL              | 20250414_5.0                                    | string       | App Completed |
            | page name               | app:privada:personas:meta segura:pagina exitosa | string       | App Completed |
            | level 1                 | meta segura                                     | string       | App Completed |
            | level 2                 | pagina exitosa                                  | string       | App Completed |
            | language                | ES                                              | string       | App Completed |
            | page area               | privada                                         | string       | App Completed |
            | page intent             | transaccion                                     | string       | App Completed |
            | channel                 | online                                          | string       | App Completed |
            | page instance ID        | de                                              | string       | App Completed |
            | page info version       | appVersion                                      | regexp named | App Completed |
            | page segment            | personas                                        | string       | App Completed |
            | sysEnv                  | app                                             | string       | App Completed |
            | business unit           | BBVA Mexico                                     | string       | App Completed |
            | site app name           | App BBVA Mexico                                 | string       | App Completed |
            | project name            | DIY E2E Sales                                   | string       | App Completed |
            | device mobile           | si                                              | string       | App Completed |
            | user userState          | logado                                          | string       | App Completed |
            | profile ID              | profileID                                       | regexp named | App Completed |
            | user segment global     | 003001                                          | string       | App Completed |
            | user gender             | gender                                          | regexp named | App Completed |
            | user age                | age                                             | regexp named | App Completed |
            | user segment profile    | temas de salud                                  | string       | App Completed |
            | global application      | goal insurance                                  | string       | App Completed |
            | application name        | meta segura digital                             | string       | App Completed |
            | application type        | contratacion                                    | string       | App Completed |
            | application step        | pagina exitosa                                  | string       | App Completed |
            | fulfillment model       | online                                          | string       | App Completed |
            | application state       | rechazado                                       | string       | App Completed |
            | internal campaign       |                                                 | empty array  | App Completed |
            | optimization attributes |                                                 | empty array  | App Completed |
            | products attributes     |                                                 | empty array  | App Completed |

    @ANA_MSD014
    @analytics
    @web @ios @android
    @MX @backend(test) @vbank @web-done
    Scenario: OC Metasegura - App Completed - Rechazado - Cumulus
        Given a user with the following criteria
            | criteria    |
            | MSD Cumulus |
        And the user accesses to the metasegura offer detail
        And the analytics interceptor service is initiated
        And the user accesses to the "questionnaire" step of the metasegura offer
        When the user selects "healty" as health condition and continues
        Then the analytics events contains the following variables
            | item                    | value                                           | type         | event         |
            | analytics               | analytics/glomo_base                            | json schema  | App Completed |
            | version DL              | 20250414_5.0                                    | string       | App Completed |
            | page name               | app:privada:personas:meta segura:pagina exitosa | string       | App Completed |
            | level 1                 | meta segura                                     | string       | App Completed |
            | level 2                 | pagina exitosa                                  | string       | App Completed |
            | language                | ES                                              | string       | App Completed |
            | page area               | privada                                         | string       | App Completed |
            | page intent             | transaccion                                     | string       | App Completed |
            | channel                 | online                                          | string       | App Completed |
            | page instance ID        | de                                              | string       | App Completed |
            | page info version       | appVersion                                      | regexp named | App Completed |
            | page segment            | personas                                        | string       | App Completed |
            | sysEnv                  | app                                             | string       | App Completed |
            | business unit           | BBVA Mexico                                     | string       | App Completed |
            | site app name           | App BBVA Mexico                                 | string       | App Completed |
            | project name            | DIY E2E Sales                                   | string       | App Completed |
            | device mobile           | si                                              | string       | App Completed |
            | user userState          | logado                                          | string       | App Completed |
            | profile ID              | profileID                                       | regexp named | App Completed |
            | user segment global     | 003001                                          | string       | App Completed |
            | user gender             | gender                                          | regexp named | App Completed |
            | user age                | age                                             | regexp named | App Completed |
            | user segment profile    | tope cumulos                                    | string       | App Completed |
            | global application      | goal insurance                                  | string       | App Completed |
            | application name        | meta segura digital                             | string       | App Completed |
            | application type        | contratacion                                    | string       | App Completed |
            | application step        | pagina exitosa                                  | string       | App Completed |
            | fulfillment model       | online                                          | string       | App Completed |
            | application state       | rechazado                                       | string       | App Completed |
            | internal campaign       |                                                 | empty array  | App Completed |
            | optimization attributes |                                                 | empty array  | App Completed |
            | products attributes     |                                                 | empty array  | App Completed |

    @ANA_MSD015
    @analytics
    @web @ios @android
    @MX @backend(test) @vbank @web-done
    Scenario: OC Metasegura - App Completed - Rechazado - Account Level
        Given a user with the following criteria
            | criteria         |
            | Level N3 Account |
        And the user accesses to the metasegura offer detail
        And the analytics interceptor service is initiated
        And the user accesses to the "questionnaire" step of the metasegura offer
        When the user selects "healty" as health condition and continues
        Then the analytics events contains the following variables
            | item                    | value                                           | type         | event         |
            | analytics               | analytics/glomo_base                            | json schema  | App Completed |
            | version DL              | 20250414_5.0                                    | string       | App Completed |
            | page name               | app:privada:personas:meta segura:pagina exitosa | string       | App Completed |
            | level 1                 | meta segura                                     | string       | App Completed |
            | level 2                 | pagina exitosa                                  | string       | App Completed |
            | language                | ES                                              | string       | App Completed |
            | page area               | privada                                         | string       | App Completed |
            | page intent             | transaccion                                     | string       | App Completed |
            | channel                 | online                                          | string       | App Completed |
            | page instance ID        | de                                              | string       | App Completed |
            | page info version       | appVersion                                      | regexp named | App Completed |
            | page segment            | personas                                        | string       | App Completed |
            | sysEnv                  | app                                             | string       | App Completed |
            | business unit           | BBVA Mexico                                     | string       | App Completed |
            | site app name           | App BBVA Mexico                                 | string       | App Completed |
            | project name            | DIY E2E Sales                                   | string       | App Completed |
            | device mobile           | si                                              | string       | App Completed |
            | user userState          | logado                                          | string       | App Completed |
            | profile ID              | profileID                                       | regexp named | App Completed |
            | user segment global     | 003001                                          | string       | App Completed |
            | user gender             | gender                                          | regexp named | App Completed |
            | user age                | age                                             | regexp named | App Completed |
            | user segment profile    | no es posible por nivel de cuenta               | string       | App Completed |
            | global application      | goal insurance                                  | string       | App Completed |
            | application name        | meta segura digital                             | string       | App Completed |
            | application type        | contratacion                                    | string       | App Completed |
            | application step        | pagina exitosa                                  | string       | App Completed |
            | fulfillment model       | online                                          | string       | App Completed |
            | application state       | rechazado                                       | string       | App Completed |
            | internal campaign       |                                                 | empty array  | App Completed |
            | optimization attributes |                                                 | empty array  | App Completed |
            | products attributes     |                                                 | empty array  | App Completed |

    @ANA_MSD016
    @analytics
    @web @ios @android
    @MX @backend(test) @vbank @web-done
    Scenario: OC Metasegura - Faqs - Page View
        Given a user with the following criteria
            | criteria    |
            | MSD General |
        And the user accesses to the metasegura offer detail
        And the analytics interceptor service is initiated
        When the user accesses to the "what you should know" modal
        Then the analytics events contains the following variables
            | item                    | value                                 | type             | event     |
            | analytics               | analytics/glomo_base                  | json schema      | Page View |
            | version DL              | 20250414_5.0                          | string           | Page View |
            | page name               | app:privada:personas:meta segura:faqs | string           | Page View |
            | level 1                 | meta segura                           | string           | Page View |
            | level 2                 | faqs                                  | string           | Page View |
            | language                | ES                                    | string           | Page View |
            | page area               | privada                               | string           | Page View |
            | page intent             | transaccion                           | string           | Page View |
            | channel                 | online                                | string           | Page View |
            | page instance ID        | de                                    | string           | Page View |
            | page info version       | appVersion                            | regexp named     | Page View |
            | page segment            | personas                              | string           | Page View |
            | sysEnv                  | app                                   | string           | Page View |
            | business unit           | BBVA Mexico                           | string           | Page View |
            | site app name           | App BBVA Mexico                       | string           | Page View |
            | project name            | DIY E2E Sales                         | string           | Page View |
            | device mobile           | si                                    | string           | Page View |
            | user userState          | logado                                | string           | Page View |
            | profile ID              | profileID                             | regexp named     | Page View |
            | user segment global     | 003001                                | string           | Page View |
            | user gender             | gender                                | regexp named     | Page View |
            | user age                | age                                   | regexp named     | Page View |
            | internal campaign       |                                       | empty array      | Page View |
            | optimization attributes |                                       | empty array      | Page View |
            | application             |                                       | empty str object | Page View |
            | products attributes     |                                       | empty array      | Page View |

    @ANA_MSD017
    @analytics
    @web @ios @android
    @MX @backend(test) @vbank @web-done
    Scenario: OC Metasegura - Privacy Notice - Page View
        Given a user with the following criteria
            | criteria    |
            | MSD General |
        And the user accesses to the metasegura offer detail
        And the analytics interceptor service is initiated
        And the user accesses to the "questionnaire" step of the metasegura offer
        When the user accesses to the "privacy notice" modal
        Then the analytics events contains the following variables
            | item                    | value                                                | type             | event     |
            | analytics               | analytics/glomo_base                                 | json schema      | Page View |
            | version DL              | 20250414_5.0                                         | string           | Page View |
            | page name               | app:privada:personas:meta segura:aviso de privacidad | string           | Page View |
            | level 1                 | meta segura                                          | string           | Page View |
            | level 2                 | aviso de privacidad                                  | string           | Page View |
            | language                | ES                                                   | string           | Page View |
            | page area               | privada                                              | string           | Page View |
            | page intent             | transaccion                                          | string           | Page View |
            | channel                 | online                                               | string           | Page View |
            | page instance ID        | de                                                   | string           | Page View |
            | page info version       | appVersion                                           | regexp named     | Page View |
            | page segment            | personas                                             | string           | Page View |
            | sysEnv                  | app                                                  | string           | Page View |
            | business unit           | BBVA Mexico                                          | string           | Page View |
            | site app name           | App BBVA Mexico                                      | string           | Page View |
            | project name            | DIY E2E Sales                                        | string           | Page View |
            | device mobile           | si                                                   | string           | Page View |
            | user userState          | logado                                               | string           | Page View |
            | profile ID              | profileID                                            | regexp named     | Page View |
            | user segment global     | 003001                                               | string           | Page View |
            | user gender             | gender                                               | regexp named     | Page View |
            | user age                | age                                                  | regexp named     | Page View |
            | internal campaign       |                                                      | empty array      | Page View |
            | optimization attributes |                                                      | empty array      | Page View |
            | application             |                                                      | empty str object | Page View |
            | products attributes     |                                                      | empty array      | Page View |

    @ANA_MSD018
    @analytics
    @web @ios @android
    @MX @backend(test) @vbank @web-done
    Scenario: OC Metasegura - Executive Code - Page View
        Given a user with the following criteria
            | criteria    |
            | MSD General |
        And the user accesses to the metasegura offer detail
        And the analytics interceptor service is initiated
        And the user accesses to the "personal savings" step of the metasegura offer
        When the user accesses to the "executive code" modal
        Then the analytics events contains the following variables
            | item                    | value                                                | type             | event     |
            | analytics               | analytics/glomo_base                                 | json schema      | Page View |
            | version DL              | 20250414_5.0                                         | string           | Page View |
            | page name               | app:privada:personas:meta segura:codigo de ejecutivo | string           | Page View |
            | level 1                 | meta segura                                          | string           | Page View |
            | level 2                 | codigo de ejecutivo                                  | string           | Page View |
            | language                | ES                                                   | string           | Page View |
            | page area               | privada                                              | string           | Page View |
            | page intent             | transaccion                                          | string           | Page View |
            | channel                 | online                                               | string           | Page View |
            | page instance ID        | de                                                   | string           | Page View |
            | page info version       | appVersion                                           | regexp named     | Page View |
            | page segment            | personas                                             | string           | Page View |
            | sysEnv                  | app                                                  | string           | Page View |
            | business unit           | BBVA Mexico                                          | string           | Page View |
            | site app name           | App BBVA Mexico                                      | string           | Page View |
            | project name            | DIY E2E Sales                                        | string           | Page View |
            | device mobile           | si                                                   | string           | Page View |
            | user userState          | logado                                               | string           | Page View |
            | profile ID              | profileID                                            | regexp named     | Page View |
            | user segment global     | 003001                                               | string           | Page View |
            | user gender             | gender                                               | regexp named     | Page View |
            | user age                | age                                                  | regexp named     | Page View |
            | internal campaign       |                                                      | empty array      | Page View |
            | optimization attributes |                                                      | empty array      | Page View |
            | application             |                                                      | empty str object | Page View |
            | products attributes     |                                                      | empty array      | Page View |

    @ANA_MSD019
    @analytics
    @web @ios @android
    @MX @backend(test) @vbank @web-done
    Scenario: OC Metasegura - Know more beneficiary - Page View
        Given a user with the following criteria
            | criteria    |
            | MSD General |
        And the user accesses to the metasegura offer detail
        And the analytics interceptor service is initiated
        And the user accesses to the "beneficiaries" step of the metasegura offer
        When the user accesses to the "know more" modal
        Then the analytics events contains the following variables
            | item                    | value                                                      | type             | event     |
            | analytics               | analytics/glomo_base                                       | json schema      | Page View |
            | version DL              | 20250414_5.0                                               | string           | Page View |
            | page name               | app:privada:personas:meta segura:informacion beneficiarios | string           | Page View |
            | level 1                 | meta segura                                                | string           | Page View |
            | level 2                 | informacion beneficiarios                                  | string           | Page View |
            | language                | ES                                                         | string           | Page View |
            | page area               | privada                                                    | string           | Page View |
            | page intent             | transaccion                                                | string           | Page View |
            | channel                 | online                                                     | string           | Page View |
            | page instance ID        | de                                                         | string           | Page View |
            | page info version       | appVersion                                                 | regexp named     | Page View |
            | page segment            | personas                                                   | string           | Page View |
            | sysEnv                  | app                                                        | string           | Page View |
            | business unit           | BBVA Mexico                                                | string           | Page View |
            | site app name           | App BBVA Mexico                                            | string           | Page View |
            | project name            | DIY E2E Sales                                              | string           | Page View |
            | device mobile           | si                                                         | string           | Page View |
            | user userState          | logado                                                     | string           | Page View |
            | profile ID              | profileID                                                  | regexp named     | Page View |
            | user segment global     | 003001                                                     | string           | Page View |
            | user gender             | gender                                                     | regexp named     | Page View |
            | user age                | age                                                        | regexp named     | Page View |
            | internal campaign       |                                                            | empty array      | Page View |
            | optimization attributes |                                                            | empty array      | Page View |
            | application             |                                                            | empty str object | Page View |
            | products attributes     |                                                            | empty array      | Page View |

    @ANA_MSD020
    @analytics
    @web @ios @android
    @MX @backend(test) @vbank @web-done
    Scenario: OC Metasegura - Edit percentages - Page View
        Given a user with the following criteria
            | criteria    |
            | MSD General |
        And the user accesses to the metasegura offer detail
        And the analytics interceptor service is initiated
        And the user accesses to the "beneficiaries" step of the metasegura offer
        And the user adds "4" beneficiaries
        When the user accesses to the "edit percentages" modal
        Then the analytics events contains the following variables
            | item                    | value                                               | type             | event     |
            | analytics               | analytics/glomo_base                                | json schema      | Page View |
            | version DL              | 20250414_5.0                                        | string           | Page View |
            | page name               | app:privada:personas:meta segura:editar porcentajes | string           | Page View |
            | level 1                 | meta segura                                         | string           | Page View |
            | level 2                 | editar porcentajes                                  | string           | Page View |
            | language                | ES                                                  | string           | Page View |
            | page area               | privada                                             | string           | Page View |
            | page intent             | transaccion                                         | string           | Page View |
            | channel                 | online                                              | string           | Page View |
            | page instance ID        | de                                                  | string           | Page View |
            | page info version       | appVersion                                          | regexp named     | Page View |
            | page segment            | personas                                            | string           | Page View |
            | sysEnv                  | app                                                 | string           | Page View |
            | business unit           | BBVA Mexico                                         | string           | Page View |
            | site app name           | App BBVA Mexico                                     | string           | Page View |
            | project name            | DIY E2E Sales                                       | string           | Page View |
            | device mobile           | si                                                  | string           | Page View |
            | user userState          | logado                                              | string           | Page View |
            | profile ID              | profileID                                           | regexp named     | Page View |
            | user segment global     | 003001                                              | string           | Page View |
            | user gender             | gender                                              | regexp named     | Page View |
            | user age                | age                                                 | regexp named     | Page View |
            | internal campaign       |                                                     | empty array      | Page View |
            | optimization attributes |                                                     | empty array      | Page View |
            | application             |                                                     | empty str object | Page View |
            | products attributes     |                                                     | empty array      | Page View |

    @ANA_MSD021
    @analytics
    @web @ios @android
    @MX @backend(test) @vbank @web-done
    Scenario: OC Metasegura - Error - Page View
        Given a user with the following criteria
            | criteria    |
            | MSD General |
        And the user attempts to access to the meta segura success page
        And the analytics interceptor service is initiated
        When the user retries the operation "2" times
        Then the analytics events contains the following variables
            | item                    | value                                                         | type             | event     |
            | analytics               | analytics/glomo_base                                          | json schema      | Page View |
            | version DL              | 20250414_5.0                                                  | string           | Page View |
            | page name               | app:privada:personas:meta segura:error operacion no realizada | string           | Page View |
            | level 1                 | meta segura                                                   | string           | Page View |
            | level 2                 | error operacion no realizada                                  | string           | Page View |
            | error page              | error operacion no realizada                                  | string           | Page View |
            | language                | ES                                                            | string           | Page View |
            | page area               | privada                                                       | string           | Page View |
            | page intent             | transaccion                                                   | string           | Page View |
            | channel                 | online                                                        | string           | Page View |
            | page instance ID        | de                                                            | string           | Page View |
            | page info version       | appVersion                                                    | regexp named     | Page View |
            | page segment            | personas                                                      | string           | Page View |
            | sysEnv                  | app                                                           | string           | Page View |
            | business unit           | BBVA Mexico                                                   | string           | Page View |
            | site app name           | App BBVA Mexico                                               | string           | Page View |
            | project name            | DIY E2E Sales                                                 | string           | Page View |
            | device mobile           | si                                                            | string           | Page View |
            | user userState          | logado                                                        | string           | Page View |
            | profile ID              | profileID                                                     | regexp named     | Page View |
            | user segment global     | 003001                                                        | string           | Page View |
            | user gender             | gender                                                        | regexp named     | Page View |
            | user age                | age                                                           | regexp named     | Page View |
            | internal campaign       |                                                               | empty array      | Page View |
            | optimization attributes |                                                               | empty array      | Page View |
            | application             |                                                               | empty str object | Page View |
            | products attributes     |                                                               | empty array      | Page View |

    @ANA_MSD022
    @analytics
    @web @ios @android
    @MX @backend(test) @vbank @web-done
    Scenario: OC Metasegura - App On Click Start
        Given a user with the following criteria
            | criteria    |
            | MSD General |
        And the user accesses contract product section
        And the analytics interceptor service is initiated
        When the user accesses to the metasegura offer detail
        Then the analytics events contains the following variables
            | item                                         | value                                                                                                  | type         | event              |
            | analytics                                    | analytics/glomo_base                                                                                   | json schema  | App On Click Start |
            | version DL                                   | 20250414_5.0                                                                                           | string       | App On Click Start |
            | page name                                    | app:privada:personas:oportunidades                                                                     | string       | App On Click Start |
            | level 1                                      | oportunidades                                                                                          | string       | App On Click Start |
            | language                                     | ES                                                                                                     | string       | App On Click Start |
            | page area                                    | privada                                                                                                | string       | App On Click Start |
            | page intent                                  | informacion                                                                                            | string       | App On Click Start |
            | channel                                      | online                                                                                                 | string       | App On Click Start |
            | page instance ID                             | de                                                                                                     | string       | App On Click Start |
            | page info version                            | appVersion                                                                                             | regexp named | App On Click Start |
            | page segment                                 | personas                                                                                               | string       | App On Click Start |
            | sysEnv                                       | app                                                                                                    | string       | App On Click Start |
            | business unit                                | BBVA Mexico                                                                                            | string       | App On Click Start |
            | site app name                                | App BBVA Mexico                                                                                        | string       | App On Click Start |
            | project name                                 | Glomo                                                                                                  | string       | App On Click Start |
            | device mobile                                | si                                                                                                     | string       | App On Click Start |
            | user userState                               | logado                                                                                                 | string       | App On Click Start |
            | profile ID                                   | profileID                                                                                              | regexp named | App On Click Start |
            | user segment global                          | 003001                                                                                                 | string       | App On Click Start |
            | user gender                                  | gender                                                                                                 | regexp named | App On Click Start |
            | user age                                     | age                                                                                                    | regexp named | App On Click Start |
            | global application                           | goal insurance                                                                                         | string       | App On Click Start |
            | application name                             | meta segura digital                                                                                    | string       | App On Click Start |
            | application type                             | contratacion                                                                                           | string       | App On Click Start |
            | application step                             | desde oportunidades                                                                                    | string       | App On Click Start |
            | fulfillment model                            | online                                                                                                 | string       | App On Click Start |
            | product primary category                     | seguros                                                                                                | string       | App On Click Start |
            | product name                                 | meta segura                                                                                            | string       | App On Click Start |
            | internal campaign attributes location        | contract product section--centro-5-12                                                                  | string       | App On Click Start |
            | internal campaign attributes campaign format | list                                                                                                   | string       | App On Click Start |
            | internal campaign attributes collective code |                                                                                                        | string       | App On Click Start |
            | internal campaign attributes name            | -ademas de ahorrar proteges a tus seres queridos                                                       | string       | App On Click Start |
            | internal campaign attributes product         | seguros                                                                                                | string       | App On Click Start |
            | internal campaign attributes product code    |                                                                                                        | string       | App On Click Start |
            | internal campaign attributes quantity        |                                                                                                        | string       | App On Click Start |
            | internal campaign event name                 | IntCmpClick                                                                                            | string       | App On Click Start |
            | internal campaign site action name           | contract product section--centro-5-12:list::-ademas de ahorrar proteges a tus seres queridos:seguros:: | string       | App On Click Start |
            | optimization attributes                      |                                                                                                        | empty array  | App On Click Start |

    @ANA_MSD023
    @analytics
    @web @ios @android
    @MX @backend(test) @vbank @web-done
    Scenario: OC Metasegura - Campaign Print
        Given a user with the following criteria
            | criteria    |
            | MSD General |
        And the user access the "dashboard" screen
        And the analytics interceptor service is initiated
        When the user accesses contract product section
        Then the analytics events contains the following variables
            | item                                           | value                                    | type             | event     |
            | analytics                                      | analytics/glomo_base                     | json schema      | Page View |
            | version DL                                     | 20250414_5.0                             | string           | Page View |
            | page name                                      | app:privada:personas:oportunidades       | string           | Page View |
            | level 1                                        | oportunidades                            | string           | Page View |
            | language                                       | ES                                       | string           | Page View |
            | page area                                      | privada                                  | string           | Page View |
            | page intent                                    | informacion                              | string           | Page View |
            | channel                                        | online                                   | string           | Page View |
            | page instance ID                               | de                                       | string           | Page View |
            | page info version                              | appVersion                               | regexp named     | Page View |
            | page segment                                   | personas                                 | string           | Page View |
            | sysEnv                                         | app                                      | string           | Page View |
            | business unit                                  | BBVA Mexico                              | string           | Page View |
            | site app name                                  | App BBVA Mexico                          | string           | Page View |
            | project name                                   | Glomo                                    | string           | Page View |
            | device mobile                                  | si                                       | string           | Page View |
            | user userState                                 | logado                                   | string           | Page View |
            | profile ID                                     | profileID                                | regexp named     | Page View |
            | user segment global                            | 003001                                   | string           | Page View |
            | user gender                                    | gender                                   | regexp named     | Page View |
            | user age                                       | age                                      | regexp named     | Page View |
            | internal campaign attributes location          | contract product section--superior-1-12  | string           | Page View |
            | internal campaign attributes campaign format   | list                                     | string           | Page View |
            | internal campaign attributes collective code   |                                          | string           | Page View |
            | internal campaign attributes name              | -seguro de dispositivos                  | string           | Page View |
            | internal campaign attributes product           | insurance                                | string           | Page View |
            | internal campaign attributes product code      |                                          | string           | Page View |
            | internal campaign attributes quantity          |                                          | string           | Page View |
            | optimization attributes                        |                                          | empty array      | Page View |
            | application                                    |                                          | empty str object | Page View |
            | products attributes                            |                                          | empty array      | Page View |

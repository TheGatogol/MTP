@mGmPayrollPortabilityAnalytics
Feature: Analytics - Member get Member Payroll Portability

    @ANA_EVENT_MPW001
    @analytics
    @web @android @ios
    @web-done
    @backend(test)
    @MX @vbank
    Scenario: Funnel - invite a friend - APP ONCLICK START
        Given a user with the following criteria
            | criteria               |
            | has offers and rewards |
        And the user accesses to invite your friend in the sidebar
        And the analytics interceptor service is initiated
        When the user accesses to member get member "offer button link"
        Then the analytics events contains the following variables
            | item                     | value                                   | type         | event              |
            | analytics                | analytics/glomo_base                    | json schema  | App On Click Start |
            | version DL               | 20250414_5.0                            | string       | App On Click Start |
            | page name                | app:privada:personas:invitar a un amigo | string       | App On Click Start |
            | level 1                  | invitar a un amigo                      | string       | App On Click Start |
            | language                 | ES                                      | string       | App On Click Start |
            | page area                | privada                                 | string       | App On Click Start |
            | page intent              | informacion                             | string       | App On Click Start |
            | channel                  | online                                  | string       | App On Click Start |
            | page instance ID         | de                                      | string       | App On Click Start |
            | page info version        | appVersion                              | regexp named | App On Click Start |
            | page segment             | personas                                | string       | App On Click Start |
            | sysEnv                   | app                                     | string       | App On Click Start |
            | business unit            | BBVA Mexico                             | string       | App On Click Start |
            | site app name            | App BBVA Mexico                         | string       | App On Click Start |
            | project name             | Glomo                                   | string       | App On Click Start |
            | device mobile            | si                                      | string       | App On Click Start |
            | user userState           | logado                                  | string       | App On Click Start |
            | user segment global      | 003001                                  | string       | App On Click Start |
            | profile ID               | profileID                               | regexp named | App On Click Start |
            | user gender              | gender                                  | regexp named | App On Click Start |
            | user age                 | age                                     | regexp named | App On Click Start |
            | global application       | member get member portability           | string       | App On Click Start |
            | application name         | invitar amigo portabilidad nomina       | string       | App On Click Start |
            | application type         | operativa                               | string       | App On Click Start |
            | fulfillment model        | online                                  | string       | App On Click Start |
            | application step         | me interesa                             | string       | App On Click Start |
            | product primary category | cuentas                                 | string       | App On Click Start |
            | internal campaign        |                                         | empty array  | App On Click Start |
            | optimization attributes  |                                         | empty array  | App On Click Start |

    @ANA_EVENT_MPW002
    @analytics
    @web @android @ios
    @web-done
    @backend(test)
    @MX @vbank
    Scenario: Funnel - invite a friend nomina - APP ONCLICK START
        Given a user with the following criteria
            | criteria               |
            | has offers and rewards |
        And the user accesses to invite your friend in the sidebar
        And the user accesses to member get member "payroll portability registration form"
        And the user "registers" the referrals personal information portabilidad
        And the analytics interceptor service is initiated
        When the user invites someone else
        Then the analytics events contains the following variables
            | item                     | value                                                         | type         | event              |
            | analytics                | analytics/glomo_base                                          | json schema  | App On Click Start |
            | version DL               | 20250414_5.0                                                  | string       | App On Click Start |
            | page name                | app:privada:personas:invitar a un amigo nomina:pagina exitosa | string       | App On Click Start |
            | level 1                  | invitar a un amigo nomina                                     | string       | App On Click Start |
            | level 2                  | pagina exitosa                                                | string       | App On Click Start |
            | language                 | ES                                                            | string       | App On Click Start |
            | page area                | privada                                                       | string       | App On Click Start |
            | page intent              | informacion                                                   | string       | App On Click Start |
            | channel                  | online                                                        | string       | App On Click Start |
            | page instance ID         | de                                                            | string       | App On Click Start |
            | page info version        | appVersion                                                    | regexp named | App On Click Start |
            | page segment             | personas                                                      | string       | App On Click Start |
            | sysEnv                   | app                                                           | string       | App On Click Start |
            | business unit            | BBVA Mexico                                                   | string       | App On Click Start |
            | site app name            | App BBVA Mexico                                               | string       | App On Click Start |
            | project name             | Glomo                                                         | string       | App On Click Start |
            | device mobile            | si                                                            | string       | App On Click Start |
            | user userState           | logado                                                        | string       | App On Click Start |
            | user segment global      | 003001                                                        | string       | App On Click Start |
            | profile ID               | profileID                                                     | regexp named | App On Click Start |
            | user gender              | gender                                                        | regexp named | App On Click Start |
            | user age                 | age                                                           | regexp named | App On Click Start |
            | custom fields            | usuario agregado:1                                            | string       | App On Click Start |
            | global application       | member get member portability                                 | string       | App On Click Start |
            | application name         | invitar amigo portabilidad nomina                             | string       | App On Click Start |
            | application type         | operativa                                                     | string       | App On Click Start |
            | fulfillment model        | online                                                        | string       | App On Click Start |
            | application step         | invitar a alguien mas                                         | string       | App On Click Start |
            | product primary category | cuentas                                                       | string       | App On Click Start |
            | internal campaign        |                                                               | empty array  | App On Click Start |
            | optimization attributes  |                                                               | empty array  | App On Click Start |

    @ANA_EVENT_MPW003
    @analytics
    @web @android @ios
    @web-done
    @backend(test)
    @MX @vbank
    Scenario: Funnel - invite a friend portability - APP PAGE VISIT
        Given a user with the following criteria
            | criteria               |
            | has offers and rewards |
        And the user accesses to invite your friend in the sidebar
        And the analytics interceptor service is initiated
        When the user accesses to member get member "offer button link"
        Then the analytics events contains the following variables
            | item                     | value                                                                         | type         | event          |
            | analytics                | analytics/glomo_base                                                          | json schema  | App Page Visit |
            | version DL               | 20250414_5.0                                                                  | string       | App Page Visit |
            | page name                | app:privada:personas:invitar a un amigo portabilidad:1 invitados portabilidad | string       | App Page Visit |
            | level 1                  | invitar a un amigo portabilidad                                               | string       | App Page Visit |
            | level 2                  | 1 invitados portabilidad                                                      | string       | App Page Visit |
            | language                 | ES                                                                            | string       | App Page Visit |
            | page area                | privada                                                                       | string       | App Page Visit |
            | page intent              | informacion                                                                   | string       | App Page Visit |
            | channel                  | online                                                                        | string       | App Page Visit |
            | page instance ID         | de                                                                            | string       | App Page Visit |
            | page info version        | appVersion                                                                    | regexp named | App Page Visit |
            | page segment             | personas                                                                      | string       | App Page Visit |
            | sysEnv                   | app                                                                           | string       | App Page Visit |
            | business unit            | BBVA Mexico                                                                   | string       | App Page Visit |
            | site app name            | App BBVA Mexico                                                               | string       | App Page Visit |
            | project name             | Glomo                                                                         | string       | App Page Visit |
            | device mobile            | si                                                                            | string       | App Page Visit |
            | user userState           | logado                                                                        | string       | App Page Visit |
            | user segment global      | 003001                                                                        | string       | App Page Visit |
            | profile ID               | profileID                                                                     | regexp named | App Page Visit |
            | user gender              | gender                                                                        | regexp named | App Page Visit |
            | user age                 | age                                                                           | regexp named | App Page Visit |
            | global application       | member get member portability                                                 | string       | App Page Visit |
            | application name         | invitar amigo portabilidad nomina                                             | string       | App Page Visit |
            | application type         | operativa                                                                     | string       | App Page Visit |
            | fulfillment model        | online                                                                        | string       | App Page Visit |
            | application step         | 1 invitados tarjeta                                                           | string       | App Page Visit |
            | product primary category | cuentas                                                                       | string       | App Page Visit |
            | internal campaign        |                                                                               | empty array  | App Page Visit |
            | optimization attributes  |                                                                               | empty array  | App Page Visit |

    @ANA_EVENT_MPW004
    @analytics
    @web @android @ios
    @web-done
    @backend(test)
    @MX @vbank
    Scenario: Funnel - invite a friend portability - APP STARTED
        Given a user with the following criteria
            | criteria               |
            | has offers and rewards |
        And the user accesses to invite your friend in the sidebar
        And the analytics interceptor service is initiated
        When the user accesses to member get member "payroll portability registration form"
        Then the analytics events contains the following variables
            | item                     | value                                                                         | type         | event       |
            | analytics                | analytics/glomo_base                                                          | json schema  | App Started |
            | version DL               | 20250414_5.0                                                                  | string       | App Started |
            | page name                | app:privada:personas:invitar a un amigo portabilidad:1 invitados portabilidad | string       | App Started |
            | level 1                  | invitar a un amigo portabilidad                                               | string       | App Started |
            | level 2                  | 1 invitados portabilidad                                                      | string       | App Started |
            | language                 | ES                                                                            | string       | App Started |
            | page area                | privada                                                                       | string       | App Started |
            | page intent              | informacion                                                                   | string       | App Started |
            | channel                  | online                                                                        | string       | App Started |
            | page instance ID         | de                                                                            | string       | App Started |
            | page info version        | appVersion                                                                    | regexp named | App Started |
            | page segment             | personas                                                                      | string       | App Started |
            | sysEnv                   | app                                                                           | string       | App Started |
            | business unit            | BBVA Mexico                                                                   | string       | App Started |
            | site app name            | App BBVA Mexico                                                               | string       | App Started |
            | project name             | Glomo                                                                         | string       | App Started |
            | device mobile            | si                                                                            | string       | App Started |
            | user userState           | logado                                                                        | string       | App Started |
            | user segment global      | 003001                                                                        | string       | App Started |
            | profile ID               | profileID                                                                     | regexp named | App Started |
            | user gender              | gender                                                                        | regexp named | App Started |
            | user age                 | age                                                                           | regexp named | App Started |
            | global application       | member get member portability                                                 | string       | App Started |
            | application name         | invitar amigo portabilidad nomina                                             | string       | App Started |
            | application type         | operativa                                                                     | string       | App Started |
            | fulfillment model        | online                                                                        | string       | App Started |
            | application step         | registrar invitado                                                            | string       | App Started |
            | product primary category | cuentas                                                                       | string       | App Started |
            | internal campaign        |                                                                               | empty array  | App Started |
            | optimization attributes  |                                                                               | empty array  | App Started |

    @ANA_EVENT_MPW005
    @analytics
    @web @android @ios
    @web-done
    @backend(test)
    @MX @vbank
    Scenario: Funnel - invite a friend portability - APP STEP 2
        Given a user with the following criteria
            | criteria               |
            | has offers and rewards |
        And the user accesses to invite your friend in the sidebar
        And the analytics interceptor service is initiated
        When the user accesses to member get member "payroll portability registration form"
        Then the analytics events contains the following variables
            | item                     | value                                                                 | type         | event      |
            | analytics                | analytics/glomo_base                                                  | json schema  | App Step 2 |
            | version DL               | 20250414_5.0                                                          | string       | App Step 2 |
            | page name                | app:privada:personas:invitar a un amigo portabilidad:2 datos invitado | string       | App Step 2 |
            | level 1                  | invitar a un amigo portabilidad                                       | string       | App Step 2 |
            | level 2                  | 2 datos invitado                                                      | string       | App Step 2 |
            | language                 | ES                                                                    | string       | App Step 2 |
            | page area                | privada                                                               | string       | App Step 2 |
            | page intent              | informacion                                                           | string       | App Step 2 |
            | channel                  | online                                                                | string       | App Step 2 |
            | page instance ID         | de                                                                    | string       | App Step 2 |
            | page info version        | appVersion                                                            | regexp named | App Step 2 |
            | page segment             | personas                                                              | string       | App Step 2 |
            | sysEnv                   | app                                                                   | string       | App Step 2 |
            | business unit            | BBVA Mexico                                                           | string       | App Step 2 |
            | site app name            | App BBVA Mexico                                                       | string       | App Step 2 |
            | project name             | Glomo                                                                 | string       | App Step 2 |
            | device mobile            | si                                                                    | string       | App Step 2 |
            | user userState           | logado                                                                | string       | App Step 2 |
            | user segment global      | 003001                                                                | string       | App Step 2 |
            | profile ID               | profileID                                                             | regexp named | App Step 2 |
            | user gender              | gender                                                                | regexp named | App Step 2 |
            | user age                 | age                                                                   | regexp named | App Step 2 |
            | global application       | member get member portability                                         | string       | App Step 2 |
            | application name         | invitar amigo portabilidad nomina                                     | string       | App Step 2 |
            | application type         | operativa                                                             | string       | App Step 2 |
            | fulfillment model        | online                                                                | string       | App Step 2 |
            | application step         | 2 datos invitado                                                      | string       | App Step 2 |
            | product primary category | cuentas                                                               | string       | App Step 2 |
            | custom fields            | usuario agregado:1                                                    | string       | App Step 2 |
            | internal campaign        |                                                                       | empty array  | App Step 2 |
            | optimization attributes  |                                                                       | empty array  | App Step 2 |

    @ANA_EVENT_MPW006
    @analytics
    @web @android @ios
    @web-done
    @backend(test)
    @MX @vbank
    Scenario: Funnel - invite a friend portability - APP COMPLETED - FINALIZADO
        Given a user with the following criteria
            | criteria               |
            | has offers and rewards |
        And the user accesses to invite your friend in the sidebar
        And the user accesses to member get member "payroll portability registration form"
        And the analytics interceptor service is initiated
        When the user "registers" the referrals personal information portabilidad
        Then the analytics events contains the following variables
            | item                     | value                                                               | type         | event         |
            | analytics                | analytics/glomo_base                                                | json schema  | App Completed |
            | version DL               | 20250414_5.0                                                        | string       | App Completed |
            | page name                | app:privada:personas:invitar a un amigo portabilidad:pagina exitosa | string       | App Completed |
            | level 1                  | invitar a un amigo portabilidad                                     | string       | App Completed |
            | level 2                  | pagina exitosa                                                      | string       | App Completed |
            | language                 | ES                                                                  | string       | App Completed |
            | page area                | privada                                                             | string       | App Completed |
            | page intent              | informacion                                                         | string       | App Completed |
            | channel                  | online                                                              | string       | App Completed |
            | page instance ID         | de                                                                  | string       | App Completed |
            | page info version        | appVersion                                                          | regexp named | App Completed |
            | page segment             | personas                                                            | string       | App Completed |
            | sysEnv                   | app                                                                 | string       | App Completed |
            | business unit            | BBVA Mexico                                                         | string       | App Completed |
            | site app name            | App BBVA Mexico                                                     | string       | App Completed |
            | project name             | Glomo                                                               | string       | App Completed |
            | device mobile            | si                                                                  | string       | App Completed |
            | user userState           | logado                                                              | string       | App Completed |
            | user segment global      | 003001                                                              | string       | App Completed |
            | profile ID               | profileID                                                           | regexp named | App Completed |
            | user gender              | gender                                                              | regexp named | App Completed |
            | user age                 | age                                                                 | regexp named | App Completed |
            | global application       | member get member portability                                       | string       | App Completed |
            | application name         | invitar amigo portabilidad nomina                                   | string       | App Completed |
            | application type         | operativa                                                           | string       | App Completed |
            | fulfillment model        | online                                                              | string       | App Completed |
            | application state        | finalizado                                                          | string       | App Completed |
            | application step         | pagina exitosa                                                      | string       | App Completed |
            | product primary category | cuentas                                                             | string       | App Completed |
            | custom fields            | usuario agregado:1                                                  | string       | App Completed |
            | internal campaign        |                                                                     | empty array  | App Completed |
            | optimization attributes  |                                                                     | empty array  | App Completed |

    @ANA_EVENT_MPW007
    @analytics
    @web @android @ios
    @web-done
    @backend(test)
    @MX @vbank
    Scenario: HUELLA - Bonus Detail
        Given a user with the following criteria
            | criteria               |
            | has offers and rewards |
        And the user accesses to invite your friend in the sidebar
        And the user taps on the "rewards option"
        When the user taps on the "bonification item"
        Then the device contains the following variables
            | item                    | value                                                           | type             |
            | analytics               | analytics/glomo_base                                            | json schema      |
            | version DL              | 20250414_5.0                                                    | string           |
            | page name               | app:privada:personas:invitar a un amigo:detalle de bonificacion | string           |
            | level 1                 | invitar a un amigo                                              | string           |
            | level 2                 | detalle de bonificacion                                         | string           |
            | language                | ES                                                              | string           |
            | page area               | privada                                                         | string           |
            | page intent             | informacion                                                     | string           |
            | channel                 | online                                                          | string           |
            | page instance ID        | de                                                              | string           |
            | page info version       | appVersion                                                      | regexp named     |
            | page segment            | personas                                                        | string           |
            | sysEnv                  | app                                                             | string           |
            | business unit           | BBVA Mexico                                                     | string           |
            | site app name           | App BBVA Mexico                                                 | string           |
            | project name            | Glomo                                                           | string           |
            | device mobile           | si                                                              | string           |
            | user userState          | logado                                                          | string           |
            | user segment global     | 003001                                                          | string           |
            | profile ID              | profileID                                                       | regexp named     |
            | user gender             | gender                                                          | regexp named     |
            | user age                | age                                                             | regexp named     |
            | internal campaign       |                                                                 | empty array      |
            | optimization attributes |                                                                 | empty array      |
            | application             |                                                                 | empty str object |
            | products attributes     |                                                                 | empty array      |

    @ANA_EVENT_MPW008
    @analytics
    @web @android @ios
    @web-done
    @backend(test)
    @MX @vbank
    Scenario: HUELLA - Rewards Detail
        Given a user with the following criteria
            | criteria               |
            | has offers and rewards |
        And the user accesses to invite your friend in the sidebar
        And the user taps on the "rewards option"
        When the user taps on the "reward item"
        Then the device contains the following variables
            | item                    | value                                                      | type             |
            | analytics               | analytics/glomo_base                                       | json schema      |
            | version DL              | 20250414_5.0                                               | string           |
            | page name               | app:privada:personas:invitar a un amigo:detalle de premios | string           |
            | level 1                 | invitar a un amigo                                         | string           |
            | level 2                 | detalle de premios                                         | string           |
            | language                | ES                                                         | string           |
            | page area               | privada                                                    | string           |
            | page intent             | informacion                                                | string           |
            | channel                 | online                                                     | string           |
            | page instance ID        | de                                                         | string           |
            | page info version       | appVersion                                                 | regexp named     |
            | page segment            | personas                                                   | string           |
            | sysEnv                  | app                                                        | string           |
            | business unit           | BBVA Mexico                                                | string           |
            | site app name           | App BBVA Mexico                                            | string           |
            | project name            | Glomo                                                      | string           |
            | device mobile           | si                                                         | string           |
            | user userState          | logado                                                     | string           |
            | user segment global     | 003001                                                     | string           |
            | profile ID              | profileID                                                  | regexp named     |
            | user gender             | gender                                                     | regexp named     |
            | user age                | age                                                        | regexp named     |
            | internal campaign       |                                                            | empty array      |
            | optimization attributes |                                                            | empty array      |
            | application             |                                                            | empty str object |
            | products attributes     |                                                            | empty array      |

    @ANA_EVENT_MPW009
    @analytics
    @web @android @ios
    @web-done
    @backend(test)
    @MX @vbank
    Scenario: HUELLA - Awards History
        Given a user with the following criteria
            | criteria               |
            | has offers and rewards |
        And the user accesses to invite your friend in the sidebar
        And the user taps on the "rewards option"
        When the user taps on the "reward detail history link"
        Then the device contains the following variables
            | item                    | value                                                        | type             |
            | analytics               | analytics/glomo_base                                         | json schema      |
            | version DL              | 20250414_5.0                                                 | string           |
            | page name               | app:privada:personas:invitar a un amigo:historial de premios | string           |
            | level 1                 | invitar a un amigo                                           | string           |
            | level 2                 | historial de premios                                         | string           |
            | language                | ES                                                           | string           |
            | page area               | privada                                                      | string           |
            | page intent             | informacion                                                  | string           |
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
            | profile ID              | profileID                                                    | regexp named     |
            | user gender             | gender                                                       | regexp named     |
            | user age                | age                                                          | regexp named     |
            | internal campaign       |                                                              | empty array      |
            | optimization attributes |                                                              | empty array      |
            | application             |                                                              | empty str object |
            | products attributes     |                                                              | empty array      |

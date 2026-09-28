@goalsMinorHiringAnalytics
Feature: Goals Hiring Minor - Analytics

    @ANA_EVENT_MPM001
    @MX
    @analytics
    @vbank @backend(test)
    @web @ios @android
    @web-done
    Scenario: The user accesses to goals miniors hiring home from detail account - App On Click Start
        Given a user with the following criteria
            | criteria      |
            | with children |
        And the user accesses to the operative account product detail
        And the analytics interceptor service is initiated
        When the user selects goals hiring card
        Then the analytics events contains the following variables
            | item                         | value                        | type         | event              |
            | version DL                   | 20250414_5.0                 | string       | App On Click Start |
            | sysEnv                       | app                          | string       | App On Click Start |
            | page segment                 | personas                     | string       | App On Click Start |
            | business unit                | BBVA Mexico                  | string       | App On Click Start |
            | page area                    | privada                      | string       | App On Click Start |
            | language                     | ES                           | string       | App On Click Start |
            | channel                      | online                       | string       | App On Click Start |
            | site app name                | App BBVA Mexico              | string       | App On Click Start |
            | project name                 | Glomo                        | string       | App On Click Start |
            | page name                    | app:privada:personas:cuentas | string       | App On Click Start |
            | level 1                      | cuentas                      | string       | App On Click Start |
            | device mobile                | si                           | string       | App On Click Start |
            | user segment global          | 003001                       | string       | App On Click Start |
            | user userState               | logado                       | string       | App On Click Start |
            | profile ID                   | profileID                    | regexp named | App On Click Start |
            | fulfillment model            | online                       | string       | App On Click Start |
            | application step             | saber mas                    | string       | App On Click Start |
            | application name             | crear meta jovenes           | string       | App On Click Start |
            | application type             | contratacion                 | string       | App On Click Start |
            | global application           | create a goal youngsters     | string       | App On Click Start |
            | product primary category     | cuentas                      | string       | App On Click Start |
            | internal campaign event name | IntCmpClick                  | string       | App On Click Start |

    @ANA_EVENT_MPM002
    @MX
    @analytics
    @vbank @backend(test)
    @web @ios @android
    @web-done
    Scenario: The user accesses to opportunities from dashboard - App On Click Start
        Given a user with the following criteria
            | criteria          |
            | with two children |
        And the user accesses contract product section
        And the analytics interceptor service is initiated
        When the user selects minior hiring card
        Then the analytics events contains the following variables
            | item                         | value                              | type         | event              |
            | version DL                   | 20250414_5.0                       | string       | App On Click Start |
            | sysEnv                       | app                                | string       | App On Click Start |
            | page segment                 | personas                           | string       | App On Click Start |
            | business unit                | BBVA Mexico                        | string       | App On Click Start |
            | page area                    | privada                            | string       | App On Click Start |
            | language                     | ES                                 | string       | App On Click Start |
            | channel                      | online                             | string       | App On Click Start |
            | site app name                | App BBVA Mexico                    | string       | App On Click Start |
            | project name                 | Glomo                              | string       | App On Click Start |
            | page name                    | app:privada:personas:oportunidades | string       | App On Click Start |
            | level 1                      | oportunidades                      | string       | App On Click Start |
            | device mobile                | si                                 | string       | App On Click Start |
            | user segment global          | 003001                             | string       | App On Click Start |
            | user userState               | logado                             | string       | App On Click Start |
            | profile ID                   | profileID                          | regexp named | App On Click Start |
            | fulfillment model            | online                             | string       | App On Click Start |
            | application step             | saber mas                          | string       | App On Click Start |
            | application name             | crear meta jovenes                 | string       | App On Click Start |
            | application type             | contratacion                       | string       | App On Click Start |
            | global application           | create a goal youngsters           | string       | App On Click Start |
            | product primary category     | cuentas                            | string       | App On Click Start |
            | internal campaign event name | IntCmpClick                        | string       | App On Click Start |

    @ANA_EVENT_MPM003
    @MX
    @analytics
    @vbank @backend(test)
    @web @ios @android
    @web-done
    Scenario: The user accesses to goals miniors - App Page Visit
        Given a user with the following criteria
            | criteria      |
            | with children |
        And the user accesses contract product section
        And the analytics interceptor service is initiated
        When the user selects minior hiring card
        Then the analytics events contains the following variables
            | item                     | value                                                                      | type         | event          |
            | version DL               | 20250414_5.0                                                               | string       | App Page Visit |
            | sysEnv                   | app                                                                        | string       | App Page Visit |
            | page segment             | personas                                                                   | string       | App Page Visit |
            | page intent              | transaccion                                                                | string       | App Page Visit |
            | business unit            | BBVA Mexico                                                                | string       | App Page Visit |
            | page area                | privada                                                                    | string       | App Page Visit |
            | language                 | ES                                                                         | string       | App Page Visit |
            | channel                  | online                                                                     | string       | App Page Visit |
            | site app name            | App BBVA Mexico                                                            | string       | App Page Visit |
            | project name             | Glomo                                                                      | string       | App Page Visit |
            | page name                | app:privada:personas:cuenta plan:crear meta jovenes:1 detalle cumplir meta | string       | App Page Visit |
            | level 1                  | cuenta plan                                                                | string       | App Page Visit |
            | level 2                  | crear meta jovenes                                                         | string       | App Page Visit |
            | level 3                  | 1 detalle cumplir meta                                                     | string       | App Page Visit |
            | device mobile            | si                                                                         | string       | App Page Visit |
            | user segment global      | 003001                                                                     | string       | App Page Visit |
            | user userState           | logado                                                                     | string       | App Page Visit |
            | profile ID               | profileID                                                                  | regexp named | App Page Visit |
            | fulfillment model        | online                                                                     | string       | App Page Visit |
            | application step         | 1 detalle cumplir meta                                                     | string       | App Page Visit |
            | qualified visits         | true                                                                       | string       | App Page Visit |
            | application name         | crear meta jovenes                                                         | string       | App Page Visit |
            | application type         | contratacion                                                               | string       | App Page Visit |
            | global application       | create a goal youngsters                                                   | string       | App Page Visit |
            | application typology     | un hijo                                                                    | string       | App Page Visit |
            | product primary category | cuentas                                                                    | string       | App Page Visit |

    @ANA_EVENT_MPM004
    @MX
    @analytics
    @vbank @backend(test)
    @web @ios @android
    @web-done
    Scenario: The user accesses to know more modal - App Started
        Given a user with the following criteria
            | criteria      |
            | with children |
        And the user selects minior hiring card
        And the analytics interceptor service is initiated
        When the user shows "know more modal"
        Then the analytics events contains the following variables
            | item                     | value                                                                      | type         | event       |
            | analytics                | analytics/glomo_base                                                       | json schema  | App Started |
            | version DL               | 20250414_5.0                                                               | string       | App Started |
            | sysEnv                   | app                                                                        | string       | App Started |
            | page segment             | personas                                                                   | string       | App Started |
            | page intent              | transaccion                                                                | string       | App Started |
            | business unit            | BBVA Mexico                                                                | string       | App Started |
            | page area                | privada                                                                    | string       | App Started |
            | language                 | ES                                                                         | string       | App Started |
            | channel                  | online                                                                     | string       | App Started |
            | site app name            | App BBVA Mexico                                                            | string       | App Started |
            | project name             | Glomo                                                                      | string       | App Started |
            | page name                | app:privada:personas:cuenta plan:crear meta jovenes:1 detalle cumplir meta | string       | App Started |
            | level 1                  | cuenta plan                                                                | string       | App Started |
            | level 2                  | crear meta jovenes                                                         | string       | App Started |
            | level 3                  | 1 detalle cumplir meta                                                     | string       | App Started |
            | device mobile            | si                                                                         | string       | App Started |
            | user segment global      | 003001                                                                     | string       | App Started |
            | user userState           | logado                                                                     | string       | App Started |
            | profile ID               | profileID                                                                  | regexp named | App Started |
            | fulfillment model        | online                                                                     | string       | App Started |
            | application step         | saber mas sobre plan                                                       | string       | App Started |
            | application name         | crear meta jovenes                                                         | string       | App Started |
            | application type         | contratacion                                                               | string       | App Started |
            | global application       | create a goal youngsters                                                   | string       | App Started |
            | application typology     | un hijo                                                                    | string       | App Started |
            | product primary category | cuentas                                                                    | string       | App Started |

    @ANA_EVENT_MPM005
    @MX
    @analytics
    @vbank @backend(test)
    @web @ios @android
    @web-done
    Scenario: The user accesses to terms and conditions in home - App Started
        Given a user with the following criteria
            | criteria      |
            | with children |
        And the user selects minior hiring card
        And the analytics interceptor service is initiated
        When the user shows "terms and conditions in home"
        Then the analytics events contains the following variables
            | item                     | value                                                                      | type         | event       |
            | analytics                | analytics/glomo_base                                                       | json schema  | App Started |
            | version DL               | 20250414_5.0                                                               | string       | App Started |
            | sysEnv                   | app                                                                        | string       | App Started |
            | page segment             | personas                                                                   | string       | App Started |
            | page intent              | transaccion                                                                | string       | App Started |
            | business unit            | BBVA Mexico                                                                | string       | App Started |
            | page area                | privada                                                                    | string       | App Started |
            | language                 | ES                                                                         | string       | App Started |
            | channel                  | online                                                                     | string       | App Started |
            | site app name            | App BBVA Mexico                                                            | string       | App Started |
            | project name             | Glomo                                                                      | string       | App Started |
            | page name                | app:privada:personas:cuenta plan:crear meta jovenes:1 detalle cumplir meta | string       | App Started |
            | level 1                  | cuenta plan                                                                | string       | App Started |
            | level 2                  | crear meta jovenes                                                         | string       | App Started |
            | level 3                  | 1 detalle cumplir meta                                                     | string       | App Started |
            | device mobile            | si                                                                         | string       | App Started |
            | user segment global      | 003001                                                                     | string       | App Started |
            | user userState           | logado                                                                     | string       | App Started |
            | profile ID               | profileID                                                                  | regexp named | App Started |
            | fulfillment model        | online                                                                     | string       | App Started |
            | application step         | consultar terminos y condiciones                                           | string       | App Started |
            | application name         | crear meta jovenes                                                         | string       | App Started |
            | application type         | contratacion                                                               | string       | App Started |
            | global application       | create a goal youngsters                                                   | string       | App Started |
            | application typology     | un hijo                                                                    | string       | App Started |
            | product primary category | cuentas                                                                    | string       | App Started |

    @ANA_EVENT_MPM006
    @MX
    @analytics
    @vbank @backend(test)
    @web @ios @android
    @web-done
    Scenario: The user accesses to terms and conditions in home - Continue - App Started
        Given a user with the following criteria
            | criteria      |
            | with children |
        And the user selects goals hiring card
        And the analytics interceptor service is initiated
        When the user starts goals minor hiring
        Then the analytics events contains the following variables
            | item                     | value                                                                      | type         | event       |
            | analytics                | analytics/glomo_base                                                       | json schema  | App Started |
            | version DL               | 20250414_5.0                                                               | string       | App Started |
            | sysEnv                   | app                                                                        | string       | App Started |
            | page segment             | personas                                                                   | string       | App Started |
            | page intent              | transaccion                                                                | string       | App Started |
            | business unit            | BBVA Mexico                                                                | string       | App Started |
            | page area                | privada                                                                    | string       | App Started |
            | language                 | ES                                                                         | string       | App Started |
            | channel                  | online                                                                     | string       | App Started |
            | site app name            | App BBVA Mexico                                                            | string       | App Started |
            | project name             | Glomo                                                                      | string       | App Started |
            | page name                | app:privada:personas:cuenta plan:crear meta jovenes:1 detalle cumplir meta | string       | App Started |
            | level 1                  | cuenta plan                                                                | string       | App Started |
            | level 2                  | crear meta jovenes                                                         | string       | App Started |
            | level 3                  | 1 detalle cumplir meta                                                     | string       | App Started |
            | device mobile            | si                                                                         | string       | App Started |
            | user segment global      | 003001                                                                     | string       | App Started |
            | user userState           | logado                                                                     | string       | App Started |
            | profile ID               | profileID                                                                  | regexp named | App Started |
            | fulfillment model        | online                                                                     | string       | App Started |
            | application step         | continuar                                                                  | string       | App Started |
            | application name         | crear meta jovenes                                                         | string       | App Started |
            | application type         | contratacion                                                               | string       | App Started |
            | global application       | create a goal youngsters                                                   | string       | App Started |
            | application typology     | un hijo                                                                    | string       | App Started |
            | product primary category | cuentas                                                                    | string       | App Started |

    @ANA_EVENT_MPM007
    @MX
    @analytics
    @vbank @backend(test)
    @web @ios @android
    @web-done
    Scenario: The user accesses to termns and conditions in page - App Step 2
        Given a user with the following criteria
            | criteria      |
            | with children |
        And the user selects goals hiring card
        And the analytics interceptor service is initiated
        When the user starts goals minor hiring
        Then the analytics events contains the following variables
            | item                     | value                                                                        | type         | event      |
            | analytics                | analytics/glomo_base                                                         | json schema  | App Step 2 |
            | version DL               | 20250414_5.0                                                                 | string       | App Step 2 |
            | sysEnv                   | app                                                                          | string       | App Step 2 |
            | page segment             | personas                                                                     | string       | App Step 2 |
            | page intent              | transaccion                                                                  | string       | App Step 2 |
            | business unit            | BBVA Mexico                                                                  | string       | App Step 2 |
            | page area                | privada                                                                      | string       | App Step 2 |
            | language                 | ES                                                                           | string       | App Step 2 |
            | channel                  | online                                                                       | string       | App Step 2 |
            | site app name            | App BBVA Mexico                                                              | string       | App Step 2 |
            | project name             | Glomo                                                                        | string       | App Step 2 |
            | page name                | app:privada:personas:cuenta plan:crear meta jovenes:2 terminos y condiciones | string       | App Step 2 |
            | level 1                  | cuenta plan                                                                  | string       | App Step 2 |
            | level 2                  | crear meta jovenes                                                           | string       | App Step 2 |
            | level 3                  | 2 terminos y condiciones                                                     | string       | App Step 2 |
            | device mobile            | si                                                                           | string       | App Step 2 |
            | user segment global      | 003001                                                                       | string       | App Step 2 |
            | user userState           | logado                                                                       | string       | App Step 2 |
            | profile ID               | profileID                                                                    | regexp named | App Step 2 |
            | fulfillment model        | online                                                                       | string       | App Step 2 |
            | application step         | 2 terminos y condiciones                                                     | string       | App Step 2 |
            | application name         | crear meta jovenes                                                           | string       | App Step 2 |
            | application type         | contratacion                                                                 | string       | App Step 2 |
            | global application       | create a goal youngsters                                                     | string       | App Step 2 |
            | application typology     | un hijo                                                                      | string       | App Step 2 |
            | product primary category | cuentas                                                                      | string       | App Step 2 |
            | product name             | cuenta link card                                                             | string       | App Step 2 |

    @ANA_EVENT_MPM008
    @MX
    @analytics
    @vbank @backend(test)
    @web @ios @android
    @web-done
    Scenario: The user accesses to multistep- Page View
        Given a user with the following criteria
            | criteria          |
            | with two children |
        And the user selects minior hiring card
        And the analytics interceptor service is initiated
        When the user accesses to multistep
        Then the analytics events contains the following variables
            | item                | value                                                            | type         | event     | event number |
            | analytics           | analytics/glomo_base                                             | json schema  | Page View | 2            |
            | version DL          | 20250414_5.0                                                     | string       | Page View | 2            |
            | page instance ID    | de                                                               | string       | Page View | 2            |
            | page segment        | personas                                                         | string       | Page View | 2            |
            | page intent         | informacion                                                      | string       | Page View | 2            |
            | business unit       | BBVA Mexico                                                      | string       | Page View | 2            |
            | page area           | privada                                                          | string       | Page View | 2            |
            | channel             | online                                                           | string       | Page View | 2            |
            | site app name       | App BBVA Mexico                                                  | string       | Page View | 2            |
            | project name        | Glomo                                                            | string       | Page View | 2            |
            | level 1             | cuenta plan                                                      | string       | Page View | 2            |
            | level 2             | crear meta jovenes                                               | string       | Page View | 2            |
            | level 3             | confirmacion                                                     | string       | Page View | 2            |
            | page name           | app:privada:personas:cuenta plan:crear meta jovenes:confirmacion | string       | Page View | 2            |
            | device mobile       | si                                                               | string       | Page View | 2            |
            | user segment global | 003001                                                           | string       | Page View | 2            |
            | user userState      | logado                                                           | string       | Page View | 2            |
            | profile ID          | profileID                                                        | regexp named | Page View | 2            |

    @ANA_EVENT_MPM009
    @MX
    @analytics
    @vbank @backend(test)
    @web @ios @android
    @web-done
    Scenario: The user sees duplicated hiring modal - Page View
        Given a user with the following criteria
            | criteria          |
            | with two children |
        And the user selects minior hiring card
        And the user accesses to multistep
        And the analytics interceptor service is initiated
        When the user accesses to goals minors hiring confirm page
        Then the analytics events contains the following variables
            | item                | value                                                                        | type         | event     |
            | analytics           | analytics/glomo_base                                                         | json schema  | Page View |
            | version DL          | 20250414_5.0                                                                 | string       | Page View |
            | page instance ID    | de                                                                           | string       | Page View |
            | page segment        | personas                                                                     | string       | Page View |
            | page intent         | informacion                                                                  | string       | Page View |
            | business unit       | BBVA Mexico                                                                  | string       | Page View |
            | page area           | privada                                                                      | string       | Page View |
            | channel             | online                                                                       | string       | Page View |
            | site app name       | App BBVA Mexico                                                              | string       | Page View |
            | project name        | Glomo                                                                        | string       | Page View |
            | level 1             | cuenta plan                                                                  | string       | Page View |
            | level 2             | crear meta jovenes                                                           | string       | Page View |
            | level 3             | error plan ya contratado                                                     | string       | Page View |
            | error page          | error plan ya contratado                                                     | string       | Page View |
            | page name           | app:privada:personas:cuenta plan:crear meta jovenes:error plan ya contratado | string       | Page View |
            | device mobile       | si                                                                           | string       | Page View |
            | user segment global | 003001                                                                       | string       | Page View |
            | user userState      | logado                                                                       | string       | Page View |
            | profile ID          | profileID                                                                    | regexp named | Page View |

    @ANA_EVENT_MPM0010
    @MX
    @analytics
    @vbank @backend(test)
    @web @ios @android
    @web-done
    Scenario: The user shows token modal - App Step 3
        Given a user with the following criteria
            | criteria          |
            | with two children |
        And the user selects minior hiring card
        And the user accesses to multistep
        And the analytics interceptor service is initiated
        When the user accesses to goals minors hiring confirm page
        Then the analytics events contains the following variables
            | item                     | value                                                     | type         | event      |
            | analytics                | analytics/glomo_base                                      | json schema  | App Step 3 |
            | version DL               | 20250414_5.0                                              | string       | App Step 3 |
            | sysEnv                   | app                                                       | string       | App Step 3 |
            | page segment             | personas                                                  | string       | App Step 3 |
            | page intent              | transaccion                                               | string       | App Step 3 |
            | business unit            | BBVA Mexico                                               | string       | App Step 3 |
            | page area                | privada                                                   | string       | App Step 3 |
            | language                 | ES                                                        | string       | App Step 3 |
            | channel                  | online                                                    | string       | App Step 3 |
            | site app name            | App BBVA Mexico                                           | string       | App Step 3 |
            | project name             | Glomo                                                     | string       | App Step 3 |
            | page name                | app:privada:personas:cuenta plan:crear meta jovenes:3 otp | string       | App Step 3 |
            | level 1                  | cuenta plan                                               | string       | App Step 3 |
            | level 2                  | crear meta jovenes                                        | string       | App Step 3 |
            | level 3                  | 3 otp                                                     | string       | App Step 3 |
            | device mobile            | si                                                        | string       | App Step 3 |
            | user segment global      | 003001                                                    | string       | App Step 3 |
            | user userState           | logado                                                    | string       | App Step 3 |
            | profile ID               | profileID                                                 | regexp named | App Step 3 |
            | fulfillment model        | online                                                    | string       | App Step 3 |
            | application step         | 3 otp                                                     | string       | App Step 3 |
            | application name         | crear meta jovenes                                        | string       | App Step 3 |
            | application type         | contratacion                                              | string       | App Step 3 |
            | global application       | create a goal youngsters                                  | string       | App Step 3 |
            | application typology     | mas de un hijo                                            | string       | App Step 3 |
            | product primary category | cuentas                                                   | string       | App Step 3 |
            | product name             | cuenta link card                                          | string       | App Step 3 |
            | custom fields            | firma:token                                               | string       | App Step 3 |

    @ANA_EVENT_MPM0011
    @MX
    @analytics
    @vbank @backend(test)
    @web @ios @android
    @web-done
    Scenario: The user shows success page - App Completed
        Given a user with the following criteria
            | criteria          |
            | with two children |
        And the user selects minior hiring card
        And the user accesses to multistep
        And the analytics interceptor service is initiated
        When the user accesses to goals minors hiring confirm page
        Then the analytics events contains the following variables
            | item                         | value                                                              | type         | event         |
            | analytics                    | analytics/glomo_base                                               | json schema  | App Completed |
            | version DL                   | 20250414_5.0                                                       | string       | App Completed |
            | sysEnv                       | app                                                                | string       | App Completed |
            | page segment                 | personas                                                           | string       | App Completed |
            | page intent                  | transaccion                                                        | string       | App Completed |
            | business unit                | BBVA Mexico                                                        | string       | App Completed |
            | page area                    | privada                                                            | string       | App Completed |
            | language                     | ES                                                                 | string       | App Completed |
            | channel                      | online                                                             | string       | App Completed |
            | site app name                | App BBVA Mexico                                                    | string       | App Completed |
            | project name                 | Glomo                                                              | string       | App Completed |
            | page name                    | app:privada:personas:cuenta plan:crear meta jovenes:pagina exitosa | string       | App Completed |
            | level 1                      | cuenta plan                                                        | string       | App Completed |
            | level 2                      | crear meta jovenes                                                 | string       | App Completed |
            | level 3                      | pagina exitosa                                                     | string       | App Completed |
            | device mobile                | si                                                                 | string       | App Completed |
            | user segment global          | 003001                                                             | string       | App Completed |
            | user userState               | logado                                                             | string       | App Completed |
            | profile ID                   | profileID                                                          | regexp named | App Completed |
            | fulfillment model            | online                                                             | string       | App Completed |
            | application step             | pagina exitosa                                                     | string       | App Completed |
            | application state            | finalizado                                                         | string       | App Completed |
            | application name             | crear meta jovenes                                                 | string       | App Completed |
            | application type             | contratacion                                                       | string       | App Completed |
            | application operation number | 0066619607                                                         | string       | App Completed |
            | global application           | create a goal youngsters                                           | string       | App Completed |
            | application typology         | mas de un hijo                                                     | string       | App Completed |
            | product primary category     | cuentas                                                            | string       | App Completed |
            | product state                | finalizado                                                         | string       | App Completed |
            | product name                 | cuenta link card                                                   | string       | App Completed |
            | custom fields                | firma:token                                                        | string       | App Completed |

    @ANA_EVENT_MPM0012
    @MX
    @analytics
    @vbank @backend(test)
    @web @ios @android
    @web-done
    Scenario: The user sees multiple accounts link card - Page View
        Given a user with the following criteria
            | criteria          |
            | with two children |
        And the user accesses to dashboard
        And the analytics interceptor service is initiated
        And the user accesses contract product section
        And the user selects minior hiring card
        When the user shows "link cards accounts"
        Then the analytics events contains the following variables
            | item                | value                                                               | type         | event     | event number |
            | analytics           | analytics/glomo_base                                                | json schema  | Page View | 2            |
            | version DL          | 20250414_5.0                                                        | string       | Page View | 2            |
            | page instance ID    | de                                                                  | string       | Page View | 2            |
            | page segment        | personas                                                            | string       | Page View | 2            |
            | page intent         | informacion                                                         | string       | Page View | 2            |
            | business unit       | BBVA Mexico                                                         | string       | Page View | 2            |
            | page area           | privada                                                             | string       | Page View | 2            |
            | channel             | online                                                              | string       | Page View | 2            |
            | site app name       | App BBVA Mexico                                                     | string       | Page View | 2            |
            | project name        | Glomo                                                               | string       | Page View | 2            |
            | level 1             | cuenta plan                                                         | string       | Page View | 2            |
            | level 2             | crear meta jovenes                                                  | string       | Page View | 2            |
            | level 3             | cuenta asociada                                                     | string       | Page View | 2            |
            | page name           | app:privada:personas:cuenta plan:crear meta jovenes:cuenta asociada | string       | Page View | 2            |
            | device mobile       | si                                                                  | string       | Page View | 2            |
            | user segment global | 003001                                                              | string       | Page View | 2            |
            | user userState      | logado                                                              | string       | Page View | 2            |
            | profile ID          | profileID                                                           | regexp named | Page View | 2            |

    @ANA_EVENT_MPM0013
    @MX
    @analytics
    @vbank @backend(test)
    @web @ios @android
    @web-done
    Scenario: The user accesses to know more modal - Page View
        Given a user with the following criteria
            | criteria      |
            | with children |
        And the user selects goals hiring card
        And the analytics interceptor service is initiated
        When the user shows "know more modal"
        Then the analytics events contains the following variables
            | item                | value                                                                    | type         | event     |
            | analytics           | analytics/glomo_base                                                     | json schema  | Page View |
            | version DL          | 20250414_5.0                                                             | string       | Page View |
            | page instance ID    | de                                                                       | string       | Page View |
            | page segment        | personas                                                                 | string       | Page View |
            | page intent         | informacion                                                              | string       | Page View |
            | business unit       | BBVA Mexico                                                              | string       | Page View |
            | page area           | privada                                                                  | string       | Page View |
            | channel             | online                                                                   | string       | Page View |
            | site app name       | App BBVA Mexico                                                          | string       | Page View |
            | project name        | Glomo                                                                    | string       | Page View |
            | level 1             | cuenta plan                                                              | string       | Page View |
            | level 2             | crear meta jovenes                                                       | string       | Page View |
            | level 3             | saber mas sobre plan                                                     | string       | Page View |
            | page name           | app:privada:personas:cuenta plan:crear meta jovenes:saber mas sobre plan | string       | Page View |
            | device mobile       | si                                                                       | string       | Page View |
            | user segment global | 003001                                                                   | string       | Page View |
            | user userState      | logado                                                                   | string       | Page View |
            | profile ID          | profileID                                                                | regexp named | Page View |

    @ANA_EVENT_MPM0014
    @MX
    @analytics
    @vbank @backend(test)
    @web @ios @android
    @web-done
    Scenario: The user sees terms and conditions error modal - Page View
        Given a user with the following criteria
            | criteria      |
            | with children |
        And the user selects minior hiring card
        And the analytics interceptor service is initiated
        When the user shows "terms and conditions in home with error"
        Then the analytics events contains the following variables
            | item                | value                                                                             | type         | event     |
            | analytics           | analytics/glomo_base                                                              | json schema  | Page View |
            | version DL          | 20250414_5.0                                                                      | string       | Page View |
            | page instance ID    | de                                                                                | string       | Page View |
            | page segment        | personas                                                                          | string       | Page View |
            | page intent         | informacion                                                                       | string       | Page View |
            | business unit       | BBVA Mexico                                                                       | string       | Page View |
            | page area           | privada                                                                           | string       | Page View |
            | channel             | online                                                                            | string       | Page View |
            | site app name       | App BBVA Mexico                                                                   | string       | Page View |
            | project name        | Glomo                                                                             | string       | Page View |
            | level 1             | cuenta plan                                                                       | string       | Page View |
            | level 2             | crear meta jovenes                                                                | string       | Page View |
            | level 3             | error operacion no disponible                                                     | string       | Page View |
            | error page          | error operacion no disponible                                                     | string       | Page View |
            | page name           | app:privada:personas:cuenta plan:crear meta jovenes:error operacion no disponible | string       | Page View |
            | device mobile       | si                                                                                | string       | Page View |
            | user segment global | 003001                                                                            | string       | Page View |
            | user userState      | logado                                                                            | string       | Page View |
            | profile ID          | profileID                                                                         | regexp named | Page View |

    @ANA_EVENT_MPM0015
    @MX
    @analytics
    @vbank @backend(test)
    @web @ios @android
    @web-done
    Scenario: The user sees no link card accounts modal - Page View
        Given a user with the following criteria
            | criteria      |
            | with children |
        And the user accesses contract product section
        And the analytics interceptor service is initiated
        When the user selects minior hiring card
        Then the analytics events contains the following variables
            | item                | value                                                                               | type         | event     |
            | analytics           | analytics/glomo_base                                                                | json schema  | Page View |
            | version DL          | 20250414_5.0                                                                        | string       | Page View |
            | page instance ID    | de                                                                                  | string       | Page View |
            | page segment        | personas                                                                            | string       | Page View |
            | page intent         | informacion                                                                         | string       | Page View |
            | business unit       | BBVA Mexico                                                                         | string       | Page View |
            | page area           | privada                                                                             | string       | Page View |
            | channel             | online                                                                              | string       | Page View |
            | site app name       | App BBVA Mexico                                                                     | string       | Page View |
            | project name        | Glomo                                                                               | string       | Page View |
            | level 1             | cuenta plan                                                                         | string       | Page View |
            | level 2             | crear meta jovenes                                                                  | string       | Page View |
            | level 3             | error informacion no disponible                                                     | string       | Page View |
            | error page          | error informacion no disponible                                                     | string       | Page View |
            | page name           | app:privada:personas:cuenta plan:crear meta jovenes:error informacion no disponible | string       | Page View |
            | device mobile       | si                                                                                  | string       | Page View |
            | user segment global | 003001                                                                              | string       | Page View |
            | user userState      | logado                                                                              | string       | Page View |
            | profile ID          | profileID                                                                           | regexp named | Page View |

    @ANA_EVENT_MPM0016
    @MX
    @analytics
    @vbank @backend(test)
    @web @ios @android
    @web-done
    Scenario: The user sees no hiring goal minor modal - Page View
        Given a user with the following criteria
            | criteria          |
            | with two children |
        And the user selects minior hiring card
        And the user accesses to multistep
        And the analytics interceptor service is initiated
        When user has encountered an error for the third time
        Then the analytics events contains the following variables
            | item                | value                                                                            | type         | event     |
            | analytics           | analytics/glomo_base                                                             | json schema  | Page View |
            | version DL          | 20250414_5.0                                                                     | string       | Page View |
            | page instance ID    | de                                                                               | string       | Page View |
            | page segment        | personas                                                                         | string       | Page View |
            | page intent         | informacion                                                                      | string       | Page View |
            | business unit       | BBVA Mexico                                                                      | string       | Page View |
            | page area           | privada                                                                          | string       | Page View |
            | channel             | online                                                                           | string       | Page View |
            | site app name       | App BBVA Mexico                                                                  | string       | Page View |
            | project name        | Glomo                                                                            | string       | Page View |
            | level 1             | cuenta plan                                                                      | string       | Page View |
            | level 2             | crear meta jovenes                                                               | string       | Page View |
            | level 3             | error operacion no realizada                                                     | string       | Page View |
            | error page          | error operacion no realizada                                                     | string       | Page View |
            | page name           | app:privada:personas:cuenta plan:crear meta jovenes:error operacion no realizada | string       | Page View |
            | device mobile       | si                                                                               | string       | Page View |
            | user segment global | 003001                                                                           | string       | Page View |
            | user userState      | logado                                                                           | string       | Page View |
            | profile ID          | profileID                                                                        | regexp named | Page View |

    @ANA_EVENT_MPM0017
    @MX
    @analytics
    @vbank @backend(test)
    @web @ios @android
    @web-done
    Scenario: The user sees terms and conditions - Internal Link
        Given a user with the following criteria
            | criteria      |
            | with children |
        And the user selects goals hiring card
        And the analytics interceptor service is initiated
        When the user shows "terms and conditions main page"
        Then the analytics events contains the following variables
            | item                | value                                                                        | type         | event         |
            | analytics           | analytics/glomo_base                                                         | json schema  | Internal Link |
            | version DL          | 20250414_5.0                                                                 | string       | Internal Link |
            | page instance ID    | de                                                                           | string       | Internal Link |
            | page segment        | personas                                                                     | string       | Internal Link |
            | page intent         | transaccion                                                                  | string       | Internal Link |
            | business unit       | BBVA Mexico                                                                  | string       | Internal Link |
            | page area           | privada                                                                      | string       | Internal Link |
            | channel             | online                                                                       | string       | Internal Link |
            | site app name       | App BBVA Mexico                                                              | string       | Internal Link |
            | project name        | Glomo                                                                        | string       | Internal Link |
            | level 1             | cuenta plan                                                                  | string       | Internal Link |
            | level 2             | crear meta jovenes                                                           | string       | Internal Link |
            | level 3             | 2 terminos y condiciones                                                     | string       | Internal Link |
            | page name           | app:privada:personas:cuenta plan:crear meta jovenes:2 terminos y condiciones | string       | Internal Link |
            | device mobile       | si                                                                           | string       | Internal Link |
            | user segment global | 003001                                                                       | string       | Internal Link |
            | user userState      | logado                                                                       | string       | Internal Link |
            | profile ID          | profileID                                                                    | regexp named | Internal Link |

    @ANA_EVENT_MPM0018
    @MX
    @analytics
    @vbank @backend(test)
    @web @ios @android
    @web-done
    Scenario: The clicks checkbox in terms and conditions - Interaction Link
        Given a user with the following criteria
            | criteria      |
            | with children |
        And the user selects minior hiring card
        And the analytics interceptor service is initiated
        When the user shows "checkbox checked"
        Then the analytics events contains the following variables
            | item                | value                                                                        | type         | event            |
            | analytics           | analytics/glomo_base                                                         | json schema  | Interaction Link |
            | version DL          | 20250414_5.0                                                                 | string       | Interaction Link |
            | page instance ID    | de                                                                           | string       | Interaction Link |
            | page segment        | personas                                                                     | string       | Interaction Link |
            | page intent         | transaccion                                                                  | string       | Interaction Link |
            | business unit       | BBVA Mexico                                                                  | string       | Interaction Link |
            | page area           | privada                                                                      | string       | Interaction Link |
            | channel             | online                                                                       | string       | Interaction Link |
            | site app name       | App BBVA Mexico                                                              | string       | Interaction Link |
            | project name        | Glomo                                                                        | string       | Interaction Link |
            | level 1             | cuenta plan                                                                  | string       | Interaction Link |
            | level 2             | crear meta jovenes                                                           | string       | Interaction Link |
            | level 3             | 2 terminos y condiciones                                                     | string       | Interaction Link |
            | page name           | app:privada:personas:cuenta plan:crear meta jovenes:2 terminos y condiciones | string       | Interaction Link |
            | device mobile       | si                                                                           | string       | Interaction Link |
            | user segment global | 003001                                                                       | string       | Interaction Link |
            | user userState      | logado                                                                       | string       | Interaction Link |
            | profile ID          | profileID                                                                    | regexp named | Interaction Link |
            | interaction level   | acepto terminos y condiciones                                                | string       | Interaction Link |

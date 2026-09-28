@goalsAnalytics
Feature: Analytics - Metas Saving Goals

    @ANA_EVENT_MSG001
    @MX
    @analytics
    @vbank @backend(test)
    @web @ios @android
    @web-done
    Scenario: The user creates a goal without Plan account - App On Click Start
        Given a user with the following criteria
            | criteria     |
            | without plan |
        And the user accesses to goals dashboard
        And the analytics interceptor service is initiated
        When the user starts goal creation from "welcome page"
        Then the analytics events contains the following variables
            | item                    | value                                     | type         | event              |
            | analytics               | analytics/glomo_base                      | json schema  | App On Click Start |
            | version DL              | 20250414_5.0                              | string       | App On Click Start |
            | page name               | app:privada:personas:mis metas:crear meta | string       | App On Click Start |
            | level 1                 | mis metas                                 | string       | App On Click Start |
            | level 2                 | crear meta                                | string       | App On Click Start |
            | language                | ES                                        | string       | App On Click Start |
            | page area               | privada                                   | string       | App On Click Start |
            | page intent             | informacion                               | string       | App On Click Start |
            | channel                 | online                                    | string       | App On Click Start |
            | page instance ID        | de                                        | string       | App On Click Start |
            | page info version       | appVersion                                | regexp named | App On Click Start |
            | page segment            | personas                                  | string       | App On Click Start |
            | sysEnv                  | app                                       | string       | App On Click Start |
            | business unit           | BBVA Mexico                               | string       | App On Click Start |
            | site app name           | App BBVA Mexico                           | string       | App On Click Start |
            | project name            | PFM                                       | string       | App On Click Start |
            | device mobile           | si                                        | string       | App On Click Start |
            | user userState          | logado                                    | string       | App On Click Start |
            | profile ID              | profileID                                 | regexp named | App On Click Start |
            | user segment global     | 003001                                    | string       | App On Click Start |
            | user gender             | gender                                    | regexp named | App On Click Start |
            | user age                | age                                       | regexp named | App On Click Start |
            | global application      | create a goal                             | string       | App On Click Start |
            | application name        | crear mi meta                             | string       | App On Click Start |
            | application type        | autogestion                               | string       | App On Click Start |
            | application step        | comenzar                                  | string       | App On Click Start |
            | application typology    | plan no contratado                        | string       | App On Click Start |
            | fulfillment model       | online                                    | string       | App On Click Start |
            | internal campaign       |                                           | empty array  | App On Click Start |
            | optimization attributes |                                           | empty array  | App On Click Start |
            | products attributes     |                                           | empty array  | App On Click Start |

    @ANA_EVENT_MSG002
    @MX
    @analytics
    @vbank @backend(test)
    @web @ios @android
    @web-done
    Scenario: The user creates another goal - App On Click Start
        Given a user with the following criteria
            | criteria   |
            | with goals |
        And the user accesses to goals dashboard
        And the analytics interceptor service is initiated
        When the user starts goal creation from "list goals"
        Then the analytics events contains the following variables
            | item                    | value                                           | type         | event              |
            | analytics               | analytics/glomo_base                            | json schema  | App On Click Start |
            | version DL              | 20250414_5.0                                    | string       | App On Click Start |
            | page name               | app:privada:personas:mis metas:listado de metas | string       | App On Click Start |
            | level 1                 | mis metas                                       | string       | App On Click Start |
            | level 2                 | listado de metas                                | string       | App On Click Start |
            | language                | ES                                              | string       | App On Click Start |
            | page area               | privada                                         | string       | App On Click Start |
            | page intent             | informacion                                     | string       | App On Click Start |
            | channel                 | online                                          | string       | App On Click Start |
            | page instance ID        | de                                              | string       | App On Click Start |
            | page info version       | appVersion                                      | regexp named | App On Click Start |
            | page segment            | personas                                        | string       | App On Click Start |
            | sysEnv                  | app                                             | string       | App On Click Start |
            | business unit           | BBVA Mexico                                     | string       | App On Click Start |
            | site app name           | App BBVA Mexico                                 | string       | App On Click Start |
            | project name            | PFM                                             | string       | App On Click Start |
            | device mobile           | si                                              | string       | App On Click Start |
            | user userState          | logado                                          | string       | App On Click Start |
            | profile ID              | profileID                                       | regexp named | App On Click Start |
            | user segment global     | 003001                                          | string       | App On Click Start |
            | user gender             | gender                                          | regexp named | App On Click Start |
            | user age                | age                                             | regexp named | App On Click Start |
            | global application      | create a goal                                   | string       | App On Click Start |
            | application name        | crear mi meta                                   | string       | App On Click Start |
            | application type        | autogestion                                     | string       | App On Click Start |
            | application step        | crear nueva meta                                | string       | App On Click Start |
            | application typology    | plan ya contratado                              | string       | App On Click Start |
            | fulfillment model       | online                                          | string       | App On Click Start |
            | internal campaign       |                                                 | empty array  | App On Click Start |
            | optimization attributes |                                                 | empty array  | App On Click Start |
            | products attributes     |                                                 | empty array  | App On Click Start |

    @ANA_EVENT_MSG003
    @MX
    @analytics
    @vbank @backend(test)
    @web @ios @android
    @web-done
    Scenario: The user creates a new goal - App On Click Start
        Given a user with the following criteria
            | criteria      |
            | without goals |
        And the user accesses to goals dashboard
        And the analytics interceptor service is initiated
        When the user starts goal creation from "empty goals list"
        Then the analytics events contains the following variables
            | item                    | value                                          | type         | event              |
            | analytics               | analytics/glomo_base                           | json schema  | App On Click Start |
            | version DL              | 20250414_5.0                                   | string       | App On Click Start |
            | page name               | app:privada:personas:mis metas:no tienes metas | string       | App On Click Start |
            | level 1                 | mis metas                                      | string       | App On Click Start |
            | level 2                 | no tienes metas                                | string       | App On Click Start |
            | language                | ES                                             | string       | App On Click Start |
            | page area               | privada                                        | string       | App On Click Start |
            | page intent             | informacion                                    | string       | App On Click Start |
            | channel                 | online                                         | string       | App On Click Start |
            | page instance ID        | de                                             | string       | App On Click Start |
            | page info version       | appVersion                                     | regexp named | App On Click Start |
            | page segment            | personas                                       | string       | App On Click Start |
            | sysEnv                  | app                                            | string       | App On Click Start |
            | business unit           | BBVA Mexico                                    | string       | App On Click Start |
            | site app name           | App BBVA Mexico                                | string       | App On Click Start |
            | project name            | PFM                                            | string       | App On Click Start |
            | device mobile           | si                                             | string       | App On Click Start |
            | user userState          | logado                                         | string       | App On Click Start |
            | profile ID              | profileID                                      | regexp named | App On Click Start |
            | user segment global     | 003001                                         | string       | App On Click Start |
            | user gender             | gender                                         | regexp named | App On Click Start |
            | user age                | age                                            | regexp named | App On Click Start |
            | global application      | create a goal                                  | string       | App On Click Start |
            | application name        | crear mi meta                                  | string       | App On Click Start |
            | application type        | autogestion                                    | string       | App On Click Start |
            | application step        | crear una meta                                 | string       | App On Click Start |
            | application typology    | plan ya contratado                             | string       | App On Click Start |
            | fulfillment model       | online                                         | string       | App On Click Start |
            | internal campaign       |                                                | empty array  | App On Click Start |
            | optimization attributes |                                                | empty array  | App On Click Start |
            | products attributes     |                                                | empty array  | App On Click Start |

    @ANA_EVENT_MSG004
    @MX
    @analytics
    @vbank @backend(test)
    @web @ios @android
    @web-done
    Scenario: The user is thinking about its goal purpose - App Page Visit
        Given a user with the following criteria
            | criteria     |
            | without plan |
        And the user accesses to goals dashboard
        And the analytics interceptor service is initiated
        When the user starts goal creation from "welcome page"
        Then the analytics events contains the following variables
            | item                    | value                                              | type         | event          |
            | analytics               | analytics/glomo_base                               | json schema  | App Page Visit |
            | version DL              | 20250414_5.0                                       | string       | App Page Visit |
            | page name               | app:privada:personas:mis metas:1 motivo de tu meta | string       | App Page Visit |
            | level 1                 | mis metas                                          | string       | App Page Visit |
            | level 2                 | 1 motivo de tu meta                                | string       | App Page Visit |
            | language                | ES                                                 | string       | App Page Visit |
            | page area               | privada                                            | string       | App Page Visit |
            | page intent             | informacion                                        | string       | App Page Visit |
            | channel                 | online                                             | string       | App Page Visit |
            | page instance ID        | de                                                 | string       | App Page Visit |
            | page info version       | appVersion                                         | regexp named | App Page Visit |
            | page segment            | personas                                           | string       | App Page Visit |
            | sysEnv                  | app                                                | string       | App Page Visit |
            | business unit           | BBVA Mexico                                        | string       | App Page Visit |
            | site app name           | App BBVA Mexico                                    | string       | App Page Visit |
            | project name            | PFM                                                | string       | App Page Visit |
            | device mobile           | si                                                 | string       | App Page Visit |
            | user userState          | logado                                             | string       | App Page Visit |
            | profile ID              | profileID                                          | regexp named | App Page Visit |
            | user segment global     | 003001                                             | string       | App Page Visit |
            | user gender             | gender                                             | regexp named | App Page Visit |
            | user age                | age                                                | regexp named | App Page Visit |
            | global application      | create a goal                                      | string       | App Page Visit |
            | application name        | crear mi meta                                      | string       | App Page Visit |
            | application type        | autogestion                                        | string       | App Page Visit |
            | application step        | 1 motivo de tu meta                                | string       | App Page Visit |
            | application typology    | plan no contratado                                 | string       | App Page Visit |
            | fulfillment model       | online                                             | string       | App Page Visit |
            | internal campaign       |                                                    | empty array  | App Page Visit |
            | optimization attributes |                                                    | empty array  | App Page Visit |
            | products attributes     |                                                    | empty array  | App Page Visit |

    @ANA_EVENT_MSG005
    @MX
    @analytics
    @vbank @backend(test)
    @web @ios @android
    @web-done
    Scenario: The user chooses its goal purpose - App Started
        Given a user with the following criteria
            | criteria     |
            | without plan |
        And the user accesses to goals dashboard
        And the user navigates until "goal reason"
        And the analytics interceptor service is initiated
        When the user chooses its goal purpose
        Then the analytics events contains the following variables
            | item                    | value                                              | type         | event       |
            | analytics               | analytics/glomo_base                               | json schema  | App Started |
            | version DL              | 20250414_5.0                                       | string       | App Started |
            | page name               | app:privada:personas:mis metas:1 motivo de tu meta | string       | App Started |
            | level 1                 | mis metas                                          | string       | App Started |
            | level 2                 | 1 motivo de tu meta                                | string       | App Started |
            | language                | ES                                                 | string       | App Started |
            | page area               | privada                                            | string       | App Started |
            | page intent             | informacion                                        | string       | App Started |
            | channel                 | online                                             | string       | App Started |
            | page instance ID        | de                                                 | string       | App Started |
            | page info version       | appVersion                                         | regexp named | App Started |
            | page segment            | personas                                           | string       | App Started |
            | sysEnv                  | app                                                | string       | App Started |
            | business unit           | BBVA Mexico                                        | string       | App Started |
            | site app name           | App BBVA Mexico                                    | string       | App Started |
            | project name            | PFM                                                | string       | App Started |
            | device mobile           | si                                                 | string       | App Started |
            | user userState          | logado                                             | string       | App Started |
            | profile ID              | profileID                                          | regexp named | App Started |
            | user segment global     | 003001                                             | string       | App Started |
            | user gender             | gender                                             | regexp named | App Started |
            | user age                | age                                                | regexp named | App Started |
            | global application      | create a goal                                      | string       | App Started |
            | application name        | crear mi meta                                      | string       | App Started |
            | application type        | autogestion                                        | string       | App Started |
            | application step        | hacer un viaje                                     | string       | App Started |
            | application typology    | plan no contratado                                 | string       | App Started |
            | fulfillment model       | online                                             | string       | App Started |
            | internal campaign       |                                                    | empty array  | App Started |
            | optimization attributes |                                                    | empty array  | App Started |
            | products attributes     |                                                    | empty array  | App Started |

    @ANA_EVENT_MSG006
    @MX
    @analytics
    @vbank @backend(test)
    @web @ios @android
    @web-done
    Scenario: The user goes to goal information form - App Step 2
        Given a user with the following criteria
            | criteria     |
            | without plan |
        And the user accesses to goals dashboard
        And the user navigates until "goal reason"
        And the analytics interceptor service is initiated
        When the user chooses its goal purpose
        Then the analytics events contains the following variables
            | item                    | value                                             | type         | event      |
            | analytics               | analytics/glomo_base                              | json schema  | App Step 2 |
            | version DL              | 20250414_5.0                                      | string       | App Step 2 |
            | page name               | app:privada:personas:mis metas:2 datos de tu meta | string       | App Step 2 |
            | level 1                 | mis metas                                         | string       | App Step 2 |
            | level 2                 | 2 datos de tu meta                                | string       | App Step 2 |
            | language                | ES                                                | string       | App Step 2 |
            | page area               | privada                                           | string       | App Step 2 |
            | page intent             | informacion                                       | string       | App Step 2 |
            | channel                 | online                                            | string       | App Step 2 |
            | page instance ID        | de                                                | string       | App Step 2 |
            | page info version       | appVersion                                        | regexp named | App Step 2 |
            | page segment            | personas                                          | string       | App Step 2 |
            | sysEnv                  | app                                               | string       | App Step 2 |
            | business unit           | BBVA Mexico                                       | string       | App Step 2 |
            | site app name           | App BBVA Mexico                                   | string       | App Step 2 |
            | project name            | PFM                                               | string       | App Step 2 |
            | device mobile           | si                                                | string       | App Step 2 |
            | user userState          | logado                                            | string       | App Step 2 |
            | profile ID              | profileID                                         | regexp named | App Step 2 |
            | user segment global     | 003001                                            | string       | App Step 2 |
            | user gender             | gender                                            | regexp named | App Step 2 |
            | user age                | age                                               | regexp named | App Step 2 |
            | global application      | create a goal                                     | string       | App Step 2 |
            | application name        | crear mi meta                                     | string       | App Step 2 |
            | application type        | autogestion                                       | string       | App Step 2 |
            | application step        | 2 datos de tu meta                                | string       | App Step 2 |
            | application typology    | plan no contratado                                | string       | App Step 2 |
            | fulfillment model       | online                                            | string       | App Step 2 |
            | application process     | hacer un viaje                                    | string       | App Step 2 |
            | internal campaign       |                                                   | empty array  | App Step 2 |
            | optimization attributes |                                                   | empty array  | App Step 2 |
            | products attributes     |                                                   | empty array  | App Step 2 |

    @ANA_EVENT_MSG007
    @MX
    @analytics
    @vbank @backend(test)
    @web @ios @android
    @web-done
    Scenario: The user goes completes goal form - App Step 3
        Given a user with the following criteria
            | criteria             |
            | with plan simulation |
        And the user accesses to goals dashboard
        And the user navigates until "goal form"
        And the analytics interceptor service is initiated
        When the user completes goal form
        Then the analytics events contains the following variables
            | item                    | value                                               | type         | event      |
            | analytics               | analytics/glomo_base                                | json schema  | App Step 3 |
            | version DL              | 20250414_5.0                                        | string       | App Step 3 |
            | page name               | app:privada:personas:mis metas:3 plan de aportacion | string       | App Step 3 |
            | level 1                 | mis metas                                           | string       | App Step 3 |
            | level 2                 | 3 plan de aportacion                                | string       | App Step 3 |
            | language                | ES                                                  | string       | App Step 3 |
            | page area               | privada                                             | string       | App Step 3 |
            | page intent             | informacion                                         | string       | App Step 3 |
            | channel                 | online                                              | string       | App Step 3 |
            | page instance ID        | de                                                  | string       | App Step 3 |
            | page info version       | appVersion                                          | regexp named | App Step 3 |
            | page segment            | personas                                            | string       | App Step 3 |
            | sysEnv                  | app                                                 | string       | App Step 3 |
            | business unit           | BBVA Mexico                                         | string       | App Step 3 |
            | site app name           | App BBVA Mexico                                     | string       | App Step 3 |
            | project name            | PFM                                                 | string       | App Step 3 |
            | device mobile           | si                                                  | string       | App Step 3 |
            | user userState          | logado                                              | string       | App Step 3 |
            | profile ID              | profileID                                           | regexp named | App Step 3 |
            | user segment global     | 003001                                              | string       | App Step 3 |
            | user gender             | gender                                              | regexp named | App Step 3 |
            | user age                | age                                                 | regexp named | App Step 3 |
            | global application      | create a goal                                       | string       | App Step 3 |
            | application name        | crear mi meta                                       | string       | App Step 3 |
            | application type        | autogestion                                         | string       | App Step 3 |
            | application step        | 3 plan de aportacion                                | string       | App Step 3 |
            | application typology    | plan ya contratado                                  | string       | App Step 3 |
            | application process     | hacer un viaje                                      | string       | App Step 3 |
            | application offer       | 999999                                              | string       | App Step 3 |
            | fulfillment model       | online                                              | string       | App Step 3 |
            | internal campaign       |                                                     | empty array  | App Step 3 |
            | optimization attributes |                                                     | empty array  | App Step 3 |
            | products attributes     |                                                     | empty array  | App Step 3 |

    @ANA_EVENT_MSG008
    @MX
    @analytics
    @vbank @backend(test)
    @web @ios @android
    @web-done
    Scenario: The user sees summary of its goal - App Step 4
        Given a user with the following criteria
            | criteria             |
            | with plan simulation |
        And the user accesses to goals dashboard
        And the user navigates until "plan simulator"
        And the analytics interceptor service is initiated
        When the user completes all form steps
        Then the analytics events contains the following variables
            | item                     | value                                         | type         | event      |
            | analytics                | analytics/glomo_base                          | json schema  | App Step 4 |
            | version DL               | 20250414_5.0                                  | string       | App Step 4 |
            | page name                | app:privada:personas:mis metas:4 confirmacion | string       | App Step 4 |
            | level 1                  | mis metas                                     | string       | App Step 4 |
            | level 2                  | 4 confirmacion                                | string       | App Step 4 |
            | language                 | ES                                            | string       | App Step 4 |
            | page area                | privada                                       | string       | App Step 4 |
            | page intent              | informacion                                   | string       | App Step 4 |
            | channel                  | online                                        | string       | App Step 4 |
            | page instance ID         | de                                            | string       | App Step 4 |
            | page info version        | appVersion                                    | regexp named | App Step 4 |
            | page segment             | personas                                      | string       | App Step 4 |
            | sysEnv                   | app                                           | string       | App Step 4 |
            | business unit            | BBVA Mexico                                   | string       | App Step 4 |
            | site app name            | App BBVA Mexico                               | string       | App Step 4 |
            | project name             | PFM                                           | string       | App Step 4 |
            | device mobile            | si                                            | string       | App Step 4 |
            | user userState           | logado                                        | string       | App Step 4 |
            | profile ID               | profileID                                     | regexp named | App Step 4 |
            | user segment global      | 003001                                        | string       | App Step 4 |
            | user gender              | gender                                        | regexp named | App Step 4 |
            | user age                 | age                                           | regexp named | App Step 4 |
            | global application       | create a goal                                 | string       | App Step 4 |
            | application name         | crear mi meta                                 | string       | App Step 4 |
            | application type         | autogestion                                   | string       | App Step 4 |
            | application step         | 4 confirmacion                                | string       | App Step 4 |
            | application typology     | plan ya contratado                            | string       | App Step 4 |
            | application process      | hacer un viaje                                | string       | App Step 4 |
            | application offer        | 999999                                        | string       | App Step 4 |
            | fulfillment model        | online                                        | string       | App Step 4 |
            | product primary category | cuentas                                       | string       | App Step 4 |
            | product subtype          | cuentas ahorro                                | string       | App Step 4 |
            | product amount           | 4500                                          | string       | App Step 4 |
            | product payment amount   |                                               | string       | App Step 4 |
            | product payment type     |                                               | string       | App Step 4 |
            | product currency         | MXN                                           | string       | App Step 4 |
            | internal campaign        |                                               | empty array  | App Step 4 |
            | optimization attributes  |                                               | empty array  | App Step 4 |

    @ANA_EVENT_MSG009
    @MX
    @analytics
    @vbank @backend(test)
    @web @ios @android
    @tmpExclude @JIRA.GLOMOMX-254311
    Scenario: The user completes goal creation process - App Completed
        Given a user with the following criteria
            | criteria             |
            | with plan simulation |
        And the user accesses to goals dashboard
        And the user navigates until "summary"
        And the analytics interceptor service is initiated
        When the user completes goal creation process
        Then the analytics events contains the following variables
            | item                     | value                                         | type         | event         |
            | analytics                | analytics/glomo_base                          | json schema  | App Completed |
            | version DL               | 20250414_5.0                                  | string       | App Completed |
            | page name                | app:privada:personas:mis metas:pagina exitosa | string       | App Completed |
            | level 1                  | mis metas                                     | string       | App Completed |
            | level 2                  | pagina exitosa                                | string       | App Completed |
            | language                 | ES                                            | string       | App Completed |
            | page area                | privada                                       | string       | App Completed |
            | page intent              | informacion                                   | string       | App Completed |
            | channel                  | online                                        | string       | App Completed |
            | page instance ID         | de                                            | string       | App Completed |
            | page info version        | appVersion                                    | regexp named | App Completed |
            | page segment             | personas                                      | string       | App Completed |
            | sysEnv                   | app                                           | string       | App Completed |
            | business unit            | BBVA Mexico                                   | string       | App Completed |
            | site app name            | App BBVA Mexico                               | string       | App Completed |
            | project name             | PFM                                           | string       | App Completed |
            | device mobile            | si                                            | string       | App Completed |
            | user userState           | logado                                        | string       | App Completed |
            | profile ID               | profileID                                     | regexp named | App Completed |
            | user segment global      | 003001                                        | string       | App Completed |
            | user gender              | gender                                        | regexp named | App Completed |
            | user age                 | age                                           | regexp named | App Completed |
            | global application       | create a goal                                 | string       | App Completed |
            | application name         | crear mi meta                                 | string       | App Completed |
            | application type         | autogestion                                   | string       | App Completed |
            | application step         | pagina exitosa                                | string       | App Completed |
            | application typology     | plan ya contratado                            | string       | App Completed |
            | application process      | hacer un viaje                                | string       | App Completed |
            | application offer        | 999999                                        | string       | App Completed |
            | fulfillment model        | online                                        | string       | App Completed |
            | application state        | finalizado                                    | string       | App Completed |
            | product primary category | cuentas                                       | string       | App Completed |
            | product subtype          | cuentas ahorro                                | string       | App Completed |
            | product amount           | 4500                                          | string       | App Completed |
            | product payment amount   |                                               | string       | App Completed |
            | product payment type     |                                               | string       | App Completed |
            | product currency         | MXN                                           | string       | App Completed |
            | product state            | finalizado                                    | string       | App Completed |
            | internal campaign        |                                               | empty array  | App Completed |
            | optimization attributes  |                                               | empty array  | App Completed |

    @ANA_EVENT_MSG010
    @MX
    @analytics
    @vbank @backend(test)
    @web @ios @android
    @web-done
    Scenario: The user goes to list goals page for first time - Page View
        Given a user with the following criteria
            | criteria     |
            | without plan |
        And the user accesses dashboard detail PFM "footer"
        And the analytics interceptor service is initiated
        When the user accesses to goals dashboard
        Then the analytics events contains the following variables
            | item                    | value                                     | type             | event     |
            | analytics               | analytics/glomo_base                      | json schema      | Page View |
            | version DL              | 20250414_5.0                              | string           | Page View |
            | page name               | app:privada:personas:mis metas:crear meta | string           | Page View |
            | level 1                 | mis metas                                 | string           | Page View |
            | level 2                 | crear meta                                | string           | Page View |
            | language                | ES                                        | string           | Page View |
            | page area               | privada                                   | string           | Page View |
            | page intent             | informacion                               | string           | Page View |
            | channel                 | online                                    | string           | Page View |
            | page instance ID        | de                                        | string           | Page View |
            | page info version       | appVersion                                | regexp named     | Page View |
            | page segment            | personas                                  | string           | Page View |
            | sysEnv                  | app                                       | string           | Page View |
            | business unit           | BBVA Mexico                               | string           | Page View |
            | site app name           | App BBVA Mexico                           | string           | Page View |
            | project name            | PFM                                       | string           | Page View |
            | device mobile           | si                                        | string           | Page View |
            | user userState          | logado                                    | string           | Page View |
            | profile ID              | profileID                                 | regexp named     | Page View |
            | user segment global     | 003001                                    | string           | Page View |
            | user gender             | gender                                    | regexp named     | Page View |
            | user age                | age                                       | regexp named     | Page View |
            | internal campaign       |                                           | empty array      | Page View |
            | optimization attributes |                                           | empty array      | Page View |
            | application             |                                           | empty str object | Page View |
            | products attributes     |                                           | empty array      | Page View |

    @ANA_EVENT_MSG011
    @MX
    @analytics
    @vbank @backend(test)
    @web @ios @android
    @web-done
    Scenario: The user doesn't have Plan account  - Page View
        Given a user with the following criteria
            | criteria     |
            | without plan |
        And the user accesses to goals dashboard
        And the user navigates until "plan simulator without plan"
        And the analytics interceptor service is initiated
        When the user completes all form steps
        Then the analytics events contains the following variables
            | item                    | value                                         | type             | event     |
            | analytics               | analytics/glomo_base                          | json schema      | Page View |
            | version DL              | 20250414_5.0                                  | string           | Page View |
            | page name               | app:privada:personas:mis metas:contratar plan | string           | Page View |
            | level 1                 | mis metas                                     | string           | Page View |
            | level 2                 | contratar plan                                | string           | Page View |
            | language                | ES                                            | string           | Page View |
            | page area               | privada                                       | string           | Page View |
            | page intent             | informacion                                   | string           | Page View |
            | channel                 | online                                        | string           | Page View |
            | page instance ID        | de                                            | string           | Page View |
            | page info version       | appVersion                                    | regexp named     | Page View |
            | page segment            | personas                                      | string           | Page View |
            | sysEnv                  | app                                           | string           | Page View |
            | business unit           | BBVA Mexico                                   | string           | Page View |
            | site app name           | App BBVA Mexico                               | string           | Page View |
            | project name            | PFM                                           | string           | Page View |
            | device mobile           | si                                            | string           | Page View |
            | user userState          | logado                                        | string           | Page View |
            | profile ID              | profileID                                     | regexp named     | Page View |
            | user segment global     | 003001                                        | string           | Page View |
            | user gender             | gender                                        | regexp named     | Page View |
            | user age                | age                                           | regexp named     | Page View |
            | internal campaign       |                                               | empty array      | Page View |
            | optimization attributes |                                               | empty array      | Page View |
            | application             |                                               | empty str object | Page View |
            | products attributes     |                                               | empty array      | Page View |

    @ANA_EVENT_MSG012
    @MX
    @analytics
    @vbank @backend(test)
    @web @ios @android
    @web-done
    Scenario: The user goes to list goals page - Page View
        Given a user with the following criteria
            | criteria   |
            | with goals |
        And the user accesses dashboard detail PFM "footer"
        And the analytics interceptor service is initiated
        When the user accesses to goals dashboard
        Then the analytics events contains the following variables
            | item                    | value                                  | type             | event     |
            | analytics               | analytics/glomo_base                   | json schema      | Page View |
            | version DL              | 20250414_5.0                           | string           | Page View |
            | page name               | app:privada:personas:mis metas:listado | string           | Page View |
            | level 1                 | mis metas                              | string           | Page View |
            | level 2                 | listado                                | string           | Page View |
            | language                | ES                                     | string           | Page View |
            | page area               | privada                                | string           | Page View |
            | page intent             | informacion                            | string           | Page View |
            | channel                 | online                                 | string           | Page View |
            | page instance ID        | de                                     | string           | Page View |
            | page info version       | appVersion                             | regexp named     | Page View |
            | page segment            | personas                               | string           | Page View |
            | sysEnv                  | app                                    | string           | Page View |
            | business unit           | BBVA Mexico                            | string           | Page View |
            | site app name           | App BBVA Mexico                        | string           | Page View |
            | project name            | PFM                                    | string           | Page View |
            | device mobile           | si                                     | string           | Page View |
            | user userState          | logado                                 | string           | Page View |
            | profile ID              | profileID                              | regexp named     | Page View |
            | user segment global     | 003001                                 | string           | Page View |
            | user gender             | gender                                 | regexp named     | Page View |
            | user age                | age                                    | regexp named     | Page View |
            | internal campaign       |                                        | empty array      | Page View |
            | optimization attributes |                                        | empty array      | Page View |
            | application             |                                        | empty str object | Page View |
            | products attributes     |                                        | empty array      | Page View |

    @ANA_EVENT_MSG013
    @MX
    @analytics
    @vbank @backend(test)
    @web @ios @android
    @web-done
    Scenario: The user will sign its operation  - Page View
        Given a user with the following criteria
            | criteria     |
            | without plan |
        And the user accesses to goals dashboard
        And the user navigates until "account creation"
        And the analytics interceptor service is initiated
        When the user completes account contracting
        Then the analytics events contains the following variables
            | item                    | value                              | type             | event     |
            | analytics               | analytics/glomo_base               | json schema      | Page View |
            | version DL              | 20250414_5.0                       | string           | Page View |
            | page name               | app:privada:personas:mis metas:otp | string           | Page View |
            | level 1                 | mis metas                          | string           | Page View |
            | level 2                 | otp                                | string           | Page View |
            | language                | ES                                 | string           | Page View |
            | page area               | privada                            | string           | Page View |
            | page intent             | informacion                        | string           | Page View |
            | channel                 | online                             | string           | Page View |
            | page instance ID        | de                                 | string           | Page View |
            | page info version       | appVersion                         | regexp named     | Page View |
            | page segment            | personas                           | string           | Page View |
            | sysEnv                  | app                                | string           | Page View |
            | business unit           | BBVA Mexico                        | string           | Page View |
            | site app name           | App BBVA Mexico                    | string           | Page View |
            | project name            | PFM                                | string           | Page View |
            | device mobile           | si                                 | string           | Page View |
            | user userState          | logado                             | string           | Page View |
            | profile ID              | profileID                          | regexp named     | Page View |
            | user segment global     | 003001                             | string           | Page View |
            | user gender             | gender                             | regexp named     | Page View |
            | user age                | age                                | regexp named     | Page View |
            | internal campaign       |                                    | empty array      | Page View |
            | optimization attributes |                                    | empty array      | Page View |
            | application             |                                    | empty str object | Page View |
            | products attributes     |                                    | empty array      | Page View |

    @ANA_EVENT_MSG014
    @MX
    @analytics
    @vbank @backend(test)
    @web @ios @android
    @web-done
    Scenario: The user visits more information about Plan page - Page View
        Given a user with the following criteria
            | criteria   |
            | with goals |
        And the user accesses to goals dashboard
        And the user navigates until "contribution plan"
        And the analytics interceptor service is initiated
        When the user reads more information about plan
        Then the analytics events contains the following variables
            | item                    | value                                                         | type             | event     |
            | analytics               | analytics/glomo_base                                          | json schema      | Page View |
            | version DL              | 20250414_5.0                                                  | string           | Page View |
            | page name               | app:privada:personas:mis metas:informacion plan de aportacion | string           | Page View |
            | level 1                 | mis metas                                                     | string           | Page View |
            | level 2                 | informacion plan de aportacion                                | string           | Page View |
            | language                | ES                                                            | string           | Page View |
            | page area               | privada                                                       | string           | Page View |
            | page intent             | informacion                                                   | string           | Page View |
            | channel                 | online                                                        | string           | Page View |
            | page instance ID        | de                                                            | string           | Page View |
            | page info version       | appVersion                                                    | regexp named     | Page View |
            | page segment            | personas                                                      | string           | Page View |
            | sysEnv                  | app                                                           | string           | Page View |
            | business unit           | BBVA Mexico                                                   | string           | Page View |
            | site app name           | App BBVA Mexico                                               | string           | Page View |
            | project name            | PFM                                                           | string           | Page View |
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

    @ANA_EVENT_MSG015
    @MX
    @analytics
    @vbank @backend(test)
    @web @ios @android
    @web-done
    Scenario: The user turns on/off contribution - Interaction Link
        Given a user with the following criteria
            | criteria             |
            | with plan simulation |
        And the user accesses to goals dashboard
        And the user navigates until "plan simulator"
        And the analytics interceptor service is initiated
        When the user turns on/off contribution
        Then the analytics events contains the following variables
            | item                    | value                                               | type             | event            |
            | analytics               | analytics/glomo_base                                | json schema      | Interaction Link |
            | version DL              | 20250414_5.0                                        | string           | Interaction Link |
            | page name               | app:privada:personas:mis metas:3 plan de aportacion | string           | Interaction Link |
            | level 1                 | mis metas                                           | string           | Interaction Link |
            | level 2                 | 3 plan de aportacion                                | string           | Interaction Link |
            | language                | ES                                                  | string           | Interaction Link |
            | page area               | privada                                             | string           | Interaction Link |
            | page intent             | informacion                                         | string           | Interaction Link |
            | channel                 | online                                              | string           | Interaction Link |
            | page instance ID        | de                                                  | string           | Interaction Link |
            | page info version       | appVersion                                          | regexp named     | Interaction Link |
            | page segment            | personas                                            | string           | Interaction Link |
            | sysEnv                  | app                                                 | string           | Interaction Link |
            | business unit           | BBVA Mexico                                         | string           | Interaction Link |
            | site app name           | App BBVA Mexico                                     | string           | Interaction Link |
            | project name            | PFM                                                 | string           | Interaction Link |
            | device mobile           | si                                                  | string           | Interaction Link |
            | user userState          | logado                                              | string           | Interaction Link |
            | profile ID              | profileID                                           | regexp named     | Interaction Link |
            | user segment global     | 003001                                              | string           | Interaction Link |
            | user gender             | gender                                              | regexp named     | Interaction Link |
            | user age                | age                                                 | regexp named     | Interaction Link |
            | interaction level       | desactivar aportacion por compras                   | string           | Interaction Link |
            | internal campaign       |                                                     | empty array      | Interaction Link |
            | optimization attributes |                                                     | empty array      | Interaction Link |
            | application             |                                                     | empty str object | Interaction Link |
            | products attributes     |                                                     | empty array      | Interaction Link |

    @ANA_EVENT_MSG016
    @MX
    @analytics
    @vbank @backend(test)
    @web @ios @android
    @web-done
    Scenario: The user goes to goal detail - Page View
        Given a user with the following criteria
            | criteria   |
            | with goals |
        And the user accesses to goals dashboard
        And the analytics interceptor service is initiated
        When the user navigates until "goal detail"
        Then the analytics events contains the following variables
            | item                    | value                                  | type             | event     |
            | analytics               | analytics/glomo_base                   | json schema      | Page View |
            | version DL              | 20250414_5.0                           | string           | Page View |
            | page name               | app:privada:personas:mis metas:detalle | string           | Page View |
            | level 1                 | mis metas                              | string           | Page View |
            | level 2                 | detalle                                | string           | Page View |
            | language                | ES                                     | string           | Page View |
            | page area               | privada                                | string           | Page View |
            | page intent             | informacion                            | string           | Page View |
            | channel                 | online                                 | string           | Page View |
            | page instance ID        | de                                     | string           | Page View |
            | page info version       | appVersion                             | regexp named     | Page View |
            | page segment            | personas                               | string           | Page View |
            | sysEnv                  | app                                    | string           | Page View |
            | business unit           | BBVA Mexico                            | string           | Page View |
            | site app name           | App BBVA Mexico                        | string           | Page View |
            | project name            | PFM                                    | string           | Page View |
            | device mobile           | si                                     | string           | Page View |
            | user userState          | logado                                 | string           | Page View |
            | profile ID              | profileID                              | regexp named     | Page View |
            | user segment global     | 003001                                 | string           | Page View |
            | user gender             | gender                                 | regexp named     | Page View |
            | user age                | age                                    | regexp named     | Page View |
            | internal campaign       |                                        | empty array      | Page View |
            | optimization attributes |                                        | empty array      | Page View |
            | application             |                                        | empty str object | Page View |
            | products attributes     |                                        | empty array      | Page View |

    @ANA_EVENT_MSG017
    @MX
    @analytics
    @vbank @backend(test)
    @web @ios @android
    @web-done
    Scenario: The user edit its goal - Page View
        Given a user with the following criteria
            | criteria   |
            | with goals |
        And the user accesses to goals dashboard
        And the user navigates until "goal detail"
        And the analytics interceptor service is initiated
        When the user "edits" to its goal
        Then the analytics events contains the following variables
            | item                    | value                                      | type             | event     |
            | analytics               | analytics/glomo_base                       | json schema      | Page View |
            | version DL              | 20250414_5.0                               | string           | Page View |
            | page name               | app:privada:personas:mis metas:editar meta | string           | Page View |
            | level 1                 | mis metas                                  | string           | Page View |
            | level 2                 | editar meta                                | string           | Page View |
            | language                | ES                                         | string           | Page View |
            | page area               | privada                                    | string           | Page View |
            | page intent             | informacion                                | string           | Page View |
            | channel                 | online                                     | string           | Page View |
            | page instance ID        | de                                         | string           | Page View |
            | page info version       | appVersion                                 | regexp named     | Page View |
            | page segment            | personas                                   | string           | Page View |
            | sysEnv                  | app                                        | string           | Page View |
            | business unit           | BBVA Mexico                                | string           | Page View |
            | site app name           | App BBVA Mexico                            | string           | Page View |
            | project name            | PFM                                        | string           | Page View |
            | device mobile           | si                                         | string           | Page View |
            | user userState          | logado                                     | string           | Page View |
            | profile ID              | profileID                                  | regexp named     | Page View |
            | user segment global     | 003001                                     | string           | Page View |
            | user gender             | gender                                     | regexp named     | Page View |
            | user age                | age                                        | regexp named     | Page View |
            | internal campaign       |                                            | empty array      | Page View |
            | optimization attributes |                                            | empty array      | Page View |
            | application             |                                            | empty str object | Page View |
            | products attributes     |                                            | empty array      | Page View |

    @ANA_EVENT_MSG018
    @MX
    @analytics
    @vbank @backend(test)
    @web @ios @android
    @web-done
    Scenario: The user goes to automatic contributions - Page View
        Given a user with the following criteria
            | criteria   |
            | with goals |
        And the user accesses to goals dashboard
        And the user navigates until "contribution plan"
        And the analytics interceptor service is initiated
        When the user add a new contribution formula
        Then the analytics events contains the following variables
            | item                    | value                                                   | type             | event     |
            | analytics               | analytics/glomo_base                                    | json schema      | Page View |
            | version DL              | 20250414_5.0                                            | string           | Page View |
            | page name               | app:privada:personas:mis metas:aportaciones automaticas | string           | Page View |
            | level 1                 | mis metas                                               | string           | Page View |
            | level 2                 | aportaciones automaticas                                | string           | Page View |
            | language                | ES                                                      | string           | Page View |
            | page area               | privada                                                 | string           | Page View |
            | page intent             | informacion                                             | string           | Page View |
            | channel                 | online                                                  | string           | Page View |
            | page instance ID        | de                                                      | string           | Page View |
            | page info version       | appVersion                                              | regexp named     | Page View |
            | page segment            | personas                                                | string           | Page View |
            | sysEnv                  | app                                                     | string           | Page View |
            | business unit           | BBVA Mexico                                             | string           | Page View |
            | site app name           | App BBVA Mexico                                         | string           | Page View |
            | project name            | PFM                                                     | string           | Page View |
            | device mobile           | si                                                      | string           | Page View |
            | user userState          | logado                                                  | string           | Page View |
            | profile ID              | profileID                                               | regexp named     | Page View |
            | user segment global     | 003001                                                  | string           | Page View |
            | user gender             | gender                                                  | regexp named     | Page View |
            | user age                | age                                                     | regexp named     | Page View |
            | internal campaign       |                                                         | empty array      | Page View |
            | optimization attributes |                                                         | empty array      | Page View |
            | application             |                                                         | empty str object | Page View |
            | products attributes     |                                                         | empty array      | Page View |

    @ANA_EVENT_MSG019
    @MX
    @analytics
    @vbank @backend(test)
    @web @ios @android
    @web-done
    Scenario: The user goes to self driven round up page - Page View
        Given a user with the following criteria
            | criteria   |
            | with goals |
        And the user accesses to goals dashboard
        And the user navigates until "automatic contributions"
        And the analytics interceptor service is initiated
        When the user accesses to self driven round up from "automatic contributions"
        Then the analytics events contains the following variables
            | item                    | value                                                         | type             | event     |
            | analytics               | analytics/glomo_base                                          | json schema      | Page View |
            | version DL              | 20250414_5.0                                                  | string           | Page View |
            | page name               | app:privada:personas:mis metas:aportacion por compras:activar | string           | Page View |
            | level 1                 | mis metas                                                     | string           | Page View |
            | level 2                 | aportacion por compras                                        | string           | Page View |
            | level 3                 | activar                                                       | string           | Page View |
            | language                | ES                                                            | string           | Page View |
            | page area               | privada                                                       | string           | Page View |
            | page intent             | informacion                                                   | string           | Page View |
            | channel                 | online                                                        | string           | Page View |
            | page instance ID        | de                                                            | string           | Page View |
            | page info version       | appVersion                                                    | regexp named     | Page View |
            | page segment            | personas                                                      | string           | Page View |
            | sysEnv                  | app                                                           | string           | Page View |
            | business unit           | BBVA Mexico                                                   | string           | Page View |
            | site app name           | App BBVA Mexico                                               | string           | Page View |
            | project name            | PFM                                                           | string           | Page View |
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

    @ANA_EVENT_MSG020
    @MX
    @analytics
    @vbank @backend(test)
    @web @ios @android
    @web-done
    Scenario: The user activates a successful rounding rule - Page View
        Given a user with the following criteria
            | criteria   |
            | with goals |
        And the user accesses to self driven round up from "list goals"
        And the analytics interceptor service is initiated
        When the user creates a successful rounding rule
        Then the analytics events contains the following variables
            | item                    | value                                                                        | type             | event     |
            | analytics               | analytics/glomo_base                                                         | json schema      | Page View |
            | version DL              | 20250414_5.0                                                                 | string           | Page View |
            | page name               | app:privada:personas:mis metas:aportacion por compras:activar:pagina exitosa | string           | Page View |
            | level 1                 | mis metas                                                                    | string           | Page View |
            | level 2                 | aportacion por compras                                                       | string           | Page View |
            | level 3                 | activar                                                                      | string           | Page View |
            | level 4                 | pagina exitosa                                                               | string           | Page View |
            | language                | ES                                                                           | string           | Page View |
            | page area               | privada                                                                      | string           | Page View |
            | page intent             | informacion                                                                  | string           | Page View |
            | channel                 | online                                                                       | string           | Page View |
            | page instance ID        | de                                                                           | string           | Page View |
            | page info version       | appVersion                                                                   | regexp named     | Page View |
            | page segment            | personas                                                                     | string           | Page View |
            | sysEnv                  | app                                                                          | string           | Page View |
            | business unit           | BBVA Mexico                                                                  | string           | Page View |
            | site app name           | App BBVA Mexico                                                              | string           | Page View |
            | project name            | PFM                                                                          | string           | Page View |
            | device mobile           | si                                                                           | string           | Page View |
            | user userState          | logado                                                                       | string           | Page View |
            | profile ID              | profileID                                                                    | regexp named     | Page View |
            | user segment global     | 003001                                                                       | string           | Page View |
            | user gender             | gender                                                                       | regexp named     | Page View |
            | user age                | age                                                                          | regexp named     | Page View |
            | custom fields           | modalidad:redondeo                                                           | string           | Page View |
            | internal campaign       |                                                                              | empty array      | Page View |
            | optimization attributes |                                                                              | empty array      | Page View |
            | application             |                                                                              | empty str object | Page View |
            | products attributes     |                                                                              | empty array      | Page View |

    @ANA_EVENT_MSG021
    @MX
    @analytics
    @vbank @backend(test)
    @web @ios @android
    @web-done
    Scenario: The user goes to periodic contribution form - Page View
        Given a user with the following criteria
            | criteria   |
            | with goals |
        And the user accesses to goals dashboard
        And the user navigates until "automatic contributions"
        And the analytics interceptor service is initiated
        When the user visits "periodic" contribution form
        Then the analytics events contains the following variables
            | item                    | value                                                        | type             | event     |
            | analytics               | analytics/glomo_base                                         | json schema      | Page View |
            | version DL              | 20250414_5.0                                                 | string           | Page View |
            | page name               | app:privada:personas:mis metas:aportacion programada:activar | string           | Page View |
            | level 1                 | mis metas                                                    | string           | Page View |
            | level 2                 | aportacion programada                                        | string           | Page View |
            | level 3                 | activar                                                      | string           | Page View |
            | language                | ES                                                           | string           | Page View |
            | page area               | privada                                                      | string           | Page View |
            | page intent             | informacion                                                  | string           | Page View |
            | channel                 | online                                                       | string           | Page View |
            | page instance ID        | de                                                           | string           | Page View |
            | page info version       | appVersion                                                   | regexp named     | Page View |
            | page segment            | personas                                                     | string           | Page View |
            | sysEnv                  | app                                                          | string           | Page View |
            | business unit           | BBVA Mexico                                                  | string           | Page View |
            | site app name           | App BBVA Mexico                                              | string           | Page View |
            | project name            | PFM                                                          | string           | Page View |
            | device mobile           | si                                                           | string           | Page View |
            | user userState          | logado                                                       | string           | Page View |
            | profile ID              | profileID                                                    | regexp named     | Page View |
            | user segment global     | 003001                                                       | string           | Page View |
            | user gender             | gender                                                       | regexp named     | Page View |
            | user age                | age                                                          | regexp named     | Page View |
            | internal campaign       |                                                              | empty array      | Page View |
            | optimization attributes |                                                              | empty array      | Page View |
            | application             |                                                              | empty str object | Page View |
            | products attributes     |                                                              | empty array      | Page View |

    @ANA_EVENT_MSG022
    @MX
    @analytics
    @vbank @backend(test)
    @web @ios @android
    @web-done
    Scenario: The user activates a successful periodic contribution - Page View
        Given a user with the following criteria
            | criteria   |
            | with goals |
        And the user accesses to goals dashboard
        And the user navigates until "periodic contribution"
        And the analytics interceptor service is initiated
        When the user activates a successful periodic contribution from formulas
        Then the analytics events contains the following variables
            | item                    | value                                                                       | type             | event     |
            | analytics               | analytics/glomo_base                                                        | json schema      | Page View |
            | version DL              | 20250414_5.0                                                                | string           | Page View |
            | page name               | app:privada:personas:mis metas:aportacion programada:activar:pagina exitosa | string           | Page View |
            | level 1                 | mis metas                                                                   | string           | Page View |
            | level 2                 | aportacion programada                                                       | string           | Page View |
            | level 3                 | activar                                                                     | string           | Page View |
            | level 4                 | pagina exitosa                                                              | string           | Page View |
            | language                | ES                                                                          | string           | Page View |
            | page area               | privada                                                                     | string           | Page View |
            | page intent             | informacion                                                                 | string           | Page View |
            | channel                 | online                                                                      | string           | Page View |
            | page instance ID        | de                                                                          | string           | Page View |
            | page info version       | appVersion                                                                  | regexp named     | Page View |
            | page segment            | personas                                                                    | string           | Page View |
            | sysEnv                  | app                                                                         | string           | Page View |
            | business unit           | BBVA Mexico                                                                 | string           | Page View |
            | site app name           | App BBVA Mexico                                                             | string           | Page View |
            | project name            | PFM                                                                         | string           | Page View |
            | device mobile           | si                                                                          | string           | Page View |
            | user userState          | logado                                                                      | string           | Page View |
            | profile ID              | profileID                                                                   | regexp named     | Page View |
            | user segment global     | 003001                                                                      | string           | Page View |
            | user gender             | gender                                                                      | regexp named     | Page View |
            | user age                | age                                                                         | regexp named     | Page View |
            | custom fields           | modalidad:manual                                                            | string           | Page View |
            | internal campaign       |                                                                             | empty array      | Page View |
            | optimization attributes |                                                                             | empty array      | Page View |
            | application             |                                                                             | empty str object | Page View |
            | products attributes     |                                                                             | empty array      | Page View |

    @ANA_EVENT_MSG023
    @MX
    @analytics
    @vbank @backend(test)
    @web @ios @android
    @web-done
    Scenario: The user contributes to its goal - Page View
        Given a user with the following criteria
            | criteria   |
            | with goals |
        And the user accesses to goals dashboard
        And the user navigates until "goal detail"
        And the analytics interceptor service is initiated
        When the user "contributes" to its goal
        Then the analytics events contains the following variables
            | item                    | value                                         | type             | event     |
            | analytics               | analytics/glomo_base                          | json schema      | Page View |
            | version DL              | 20250414_5.0                                  | string           | Page View |
            | page name               | app:privada:personas:mis metas:aportar a meta | string           | Page View |
            | level 1                 | mis metas                                     | string           | Page View |
            | level 2                 | aportar a meta                                | string           | Page View |
            | language                | ES                                            | string           | Page View |
            | page area               | privada                                       | string           | Page View |
            | page intent             | informacion                                   | string           | Page View |
            | channel                 | online                                        | string           | Page View |
            | page instance ID        | de                                            | string           | Page View |
            | page info version       | appVersion                                    | regexp named     | Page View |
            | page segment            | personas                                      | string           | Page View |
            | sysEnv                  | app                                           | string           | Page View |
            | business unit           | BBVA Mexico                                   | string           | Page View |
            | site app name           | App BBVA Mexico                               | string           | Page View |
            | project name            | PFM                                           | string           | Page View |
            | device mobile           | si                                            | string           | Page View |
            | user userState          | logado                                        | string           | Page View |
            | profile ID              | profileID                                     | regexp named     | Page View |
            | user segment global     | 003001                                        | string           | Page View |
            | user gender             | gender                                        | regexp named     | Page View |
            | user age                | age                                           | regexp named     | Page View |
            | internal campaign       |                                               | empty array      | Page View |
            | optimization attributes |                                               | empty array      | Page View |
            | application             |                                               | empty str object | Page View |
            | products attributes     |                                               | empty array      | Page View |

    @ANA_EVENT_MSG024
    @MX
    @analytics
    @vbank @backend(test)
    @web @ios @android
    @web-done
    Scenario: The user makes a successful contribution - Page View
        Given a user with the following criteria
            | criteria   |
            | with goals |
        And the user accesses to goals dashboard
        And the user navigates until "goal contribution form"
        And the analytics interceptor service is initiated
        When the user makes a "contribution"
        Then the analytics events contains the following variables
            | item                    | value                                                        | type             | event     |
            | analytics               | analytics/glomo_base                                         | json schema      | Page View |
            | version DL              | 20250414_5.0                                                 | string           | Page View |
            | page name               | app:privada:personas:mis metas:aportar a meta:pagina exitosa | string           | Page View |
            | level 1                 | mis metas                                                    | string           | Page View |
            | level 2                 | aportar a meta                                               | string           | Page View |
            | level 3                 | pagina exitosa                                               | string           | Page View |
            | language                | ES                                                           | string           | Page View |
            | page area               | privada                                                      | string           | Page View |
            | page intent             | informacion                                                  | string           | Page View |
            | channel                 | online                                                       | string           | Page View |
            | page instance ID        | de                                                           | string           | Page View |
            | page info version       | appVersion                                                   | regexp named     | Page View |
            | page segment            | personas                                                     | string           | Page View |
            | sysEnv                  | app                                                          | string           | Page View |
            | business unit           | BBVA Mexico                                                  | string           | Page View |
            | site app name           | App BBVA Mexico                                              | string           | Page View |
            | project name            | PFM                                                          | string           | Page View |
            | device mobile           | si                                                           | string           | Page View |
            | user userState          | logado                                                       | string           | Page View |
            | profile ID              | profileID                                                    | regexp named     | Page View |
            | user segment global     | 003001                                                       | string           | Page View |
            | user gender             | gender                                                       | regexp named     | Page View |
            | user age                | age                                                          | regexp named     | Page View |
            | internal campaign       |                                                              | empty array      | Page View |
            | optimization attributes |                                                              | empty array      | Page View |
            | application             |                                                              | empty str object | Page View |
            | products attributes     |                                                              | empty array      | Page View |

    @ANA_EVENT_MSG025
    @MX
    @analytics
    @vbank @backend(test)
    @web @ios @android
    @web-done
    Scenario: The user makes a withdrawal - Page View
        Given a user with the following criteria
            | criteria   |
            | with goals |
        And the user accesses to goals dashboard
        And the user navigates until "goal detail"
        And the analytics interceptor service is initiated
        When the user "withdraws" to its goal
        Then the analytics events contains the following variables
            | item                    | value                                         | type             | event     |
            | analytics               | analytics/glomo_base                          | json schema      | Page View |
            | version DL              | 20250414_5.0                                  | string           | Page View |
            | page name               | app:privada:personas:mis metas:reintegro meta | string           | Page View |
            | level 1                 | mis metas                                     | string           | Page View |
            | level 2                 | reintegro meta                                | string           | Page View |
            | language                | ES                                            | string           | Page View |
            | page area               | privada                                       | string           | Page View |
            | page intent             | informacion                                   | string           | Page View |
            | channel                 | online                                        | string           | Page View |
            | page instance ID        | de                                            | string           | Page View |
            | page info version       | appVersion                                    | regexp named     | Page View |
            | page segment            | personas                                      | string           | Page View |
            | sysEnv                  | app                                           | string           | Page View |
            | business unit           | BBVA Mexico                                   | string           | Page View |
            | site app name           | App BBVA Mexico                               | string           | Page View |
            | project name            | PFM                                           | string           | Page View |
            | device mobile           | si                                            | string           | Page View |
            | user userState          | logado                                        | string           | Page View |
            | profile ID              | profileID                                     | regexp named     | Page View |
            | user segment global     | 003001                                        | string           | Page View |
            | user gender             | gender                                        | regexp named     | Page View |
            | user age                | age                                           | regexp named     | Page View |
            | internal campaign       |                                               | empty array      | Page View |
            | optimization attributes |                                               | empty array      | Page View |
            | application             |                                               | empty str object | Page View |
            | products attributes     |                                               | empty array      | Page View |

    @ANA_EVENT_MSG026
    @MX
    @analytics
    @vbank @backend(test)
    @web @ios @android
    @web-done
    Scenario: The user makes a successful withdrawal - Page View
        Given a user with the following criteria
            | criteria   |
            | with goals |
        And the user accesses to goals dashboard
        And the user navigates until "goal withdrawal form"
        And the analytics interceptor service is initiated
        When the user makes a "withdrawal"
        Then the analytics events contains the following variables
            | item                    | value                                                        | type             | event     |
            | analytics               | analytics/glomo_base                                         | json schema      | Page View |
            | version DL              | 20250414_5.0                                                 | string           | Page View |
            | page name               | app:privada:personas:mis metas:reintegro meta:pagina exitosa | string           | Page View |
            | level 1                 | mis metas                                                    | string           | Page View |
            | level 2                 | reintegro meta                                               | string           | Page View |
            | level 3                 | pagina exitosa                                               | string           | Page View |
            | language                | ES                                                           | string           | Page View |
            | page area               | privada                                                      | string           | Page View |
            | page intent             | informacion                                                  | string           | Page View |
            | channel                 | online                                                       | string           | Page View |
            | page instance ID        | de                                                           | string           | Page View |
            | page info version       | appVersion                                                   | regexp named     | Page View |
            | page segment            | personas                                                     | string           | Page View |
            | sysEnv                  | app                                                          | string           | Page View |
            | business unit           | BBVA Mexico                                                  | string           | Page View |
            | site app name           | App BBVA Mexico                                              | string           | Page View |
            | project name            | PFM                                                          | string           | Page View |
            | device mobile           | si                                                           | string           | Page View |
            | user userState          | logado                                                       | string           | Page View |
            | profile ID              | profileID                                                    | regexp named     | Page View |
            | user segment global     | 003001                                                       | string           | Page View |
            | user gender             | gender                                                       | regexp named     | Page View |
            | user age                | age                                                          | regexp named     | Page View |
            | internal campaign       |                                                              | empty array      | Page View |
            | optimization attributes |                                                              | empty array      | Page View |
            | application             |                                                              | empty str object | Page View |
            | products attributes     |                                                              | empty array      | Page View |

    @ANA_EVENT_MSG027
    @MX
    @analytics
    @vbank @backend(test)
    @web @ios @android
    @web-done
    Scenario: The user reaches a goal - Page View
        Given a user with the following criteria
            | criteria   |
            | with goals |
        And the user accesses to goals dashboard
        And the analytics interceptor service is initiated
        When the user navigates until "goal detail"
        Then the analytics events contains the following variables
            | item                    | value                                         | type             | event     | event number |
            | analytics               | analytics/glomo_base                          | json schema      | Page View | 2            |
            | version DL              | 20250414_5.0                                  | string           | Page View | 2            |
            | page name               | app:privada:personas:mis metas:meta alcanzada | string           | Page View | 2            |
            | level 1                 | mis metas                                     | string           | Page View | 2            |
            | level 2                 | meta alcanzada                                | string           | Page View | 2            |
            | language                | ES                                            | string           | Page View | 2            |
            | page area               | privada                                       | string           | Page View | 2            |
            | page intent             | informacion                                   | string           | Page View | 2            |
            | channel                 | online                                        | string           | Page View | 2            |
            | page instance ID        | de                                            | string           | Page View | 2            |
            | page info version       | appVersion                                    | regexp named     | Page View | 2            |
            | page segment            | personas                                      | string           | Page View | 2            |
            | sysEnv                  | app                                           | string           | Page View | 2            |
            | business unit           | BBVA Mexico                                   | string           | Page View | 2            |
            | site app name           | App BBVA Mexico                               | string           | Page View | 2            |
            | project name            | PFM                                           | string           | Page View | 2            |
            | device mobile           | si                                            | string           | Page View | 2            |
            | user userState          | logado                                        | string           | Page View | 2            |
            | profile ID              | profileID                                     | regexp named     | Page View | 2            |
            | user segment global     | 003001                                        | string           | Page View | 2            |
            | user gender             | gender                                        | regexp named     | Page View | 2            |
            | user age                | age                                           | regexp named     | Page View | 2            |
            | internal campaign       |                                               | empty array      | Page View | 2            |
            | optimization attributes |                                               | empty array      | Page View | 2            |
            | application             |                                               | empty str object | Page View | 2            |
            | products attributes     |                                               | empty array      | Page View | 2            |

    @ANA_EVENT_MSG028
    @MX
    @analytics
    @vbank @backend(test)
    @web @ios @android
    @web-done
    Scenario Outline: The user sees algorithm advice modal <advice> - Page View
        Given a user with the following criteria
            | criteria             |
            | with plan simulation |
        And the user accesses to goals dashboard
        And the user navigates until "plan simulator"
        And the analytics interceptor service is initiated
        When the user review algorithm advice
        Then the analytics events contains the following variables
            | item                    | value                                   | type             | event     |
            | analytics               | analytics/glomo_base                    | json schema      | Page View |
            | version DL              | 20250414_5.0                            | string           | Page View |
            | page name               | app:privada:personas:mis metas:<level2> | string           | Page View |
            | level 1                 | mis metas                               | string           | Page View |
            | level 2                 | <level2>                                | string           | Page View |
            | language                | ES                                      | string           | Page View |
            | page area               | privada                                 | string           | Page View |
            | page intent             | informacion                             | string           | Page View |
            | channel                 | online                                  | string           | Page View |
            | page instance ID        | de                                      | string           | Page View |
            | page info version       | appVersion                              | regexp named     | Page View |
            | page segment            | personas                                | string           | Page View |
            | sysEnv                  | app                                     | string           | Page View |
            | business unit           | BBVA Mexico                             | string           | Page View |
            | site app name           | App BBVA Mexico                         | string           | Page View |
            | project name            | PFM                                     | string           | Page View |
            | device mobile           | si                                      | string           | Page View |
            | user userState          | logado                                  | string           | Page View |
            | profile ID              | profileID                               | regexp named     | Page View |
            | user segment global     | 003001                                  | string           | Page View |
            | user gender             | gender                                  | regexp named     | Page View |
            | user age                | age                                     | regexp named     | Page View |
            | internal campaign       |                                         | empty array      | Page View |
            | optimization attributes |                                         | empty array      | Page View |
            | application             |                                         | empty str object | Page View |
            | products attributes     |                                         | empty array      | Page View |
        Examples:
            | advice         | level2                   |
            | short-deadline | como llegar al 100       |
            | insufficient   | como acercarte a tu meta |
            | nothing        | aporta a tu ritmo        |

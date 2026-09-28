@analyticsExpensesGroup
Feature: Analytics - Expenses Group

    @ANA_EVENT_EG001
    @analytics
    @MX @web @ios @android @web-done
    @backend(test) @vbank
    Scenario: Expenses Group - EVENT ONCLICK - GROUP LIST
        Given a user with the following criteria
            | criteria            |
            | with expense groups |
            | accounts            |
        When the user accesses the expenses group "list"
        And the analytics interceptor service is initiated
        And the user creates group and add new participant
        Then the analytics events contains the following variables
            | item                    | value                                               | type         | event              |
            | analytics               | analytics/glomo_base                                | json schema  | App On Click Start |
            | version DL              | 20250414_5.0                                        | string       | App On Click Start |
            | page name               | app:privada:personas:grupo de gastos:listado grupos | string       | App On Click Start |
            | level 1                 | grupo de gastos                                     | string       | App On Click Start |
            | level 2                 | listado grupos                                      | string       | App On Click Start |
            | language                | ES                                                  | string       | App On Click Start |
            | page area               | privada                                             | string       | App On Click Start |
            | page intent             | informacion                                         | string       | App On Click Start |
            | channel                 | online                                              | string       | App On Click Start |
            | page instance ID        | de                                                  | string       | App On Click Start |
            | page info version       | appVersion                                          | regexp named | App On Click Start |
            | page segment            | personas                                            | string       | App On Click Start |
            | sysEnv                  | app                                                 | string       | App On Click Start |
            | business unit           | BBVA Mexico                                         | string       | App On Click Start |
            | project name            | Glomo                                               | string       | App On Click Start |
            | site app name           | App BBVA Mexico                                     | string       | App On Click Start |
            | device mobile           | si                                                  | string       | App On Click Start |
            | user userState          | logado                                              | string       | App On Click Start |
            | user segment global     | 003001                                              | string       | App On Click Start |
            | profile ID              | profileID                                           | regexp named | App On Click Start |
            | user gender             | gender                                              | regexp named | App On Click Start |
            | user age                | age                                                 | regexp named | App On Click Start |
            | global application      | expenses group                                      | string       | App On Click Start |
            | application name        | grupo de gastos                                     | string       | App On Click Start |
            | application type        | autogestion                                         | string       | App On Click Start |
            | fulfillment model       | online                                              | string       | App On Click Start |
            | application step        | listado grupos                                      | string       | App On Click Start |
            | internal campaign       |                                                     | empty array  | App On Click Start |
            | optimization attributes |                                                     | empty array  | App On Click Start |
            | products attributes     |                                                     | empty array  | App On Click Start |

    @ANA_EVENT_EG002
    @analytics
    @MX @web @ios @android @web-done
    @backend(test) @vbank
    Scenario: Expenses Group - LOADING EVENT - ONE GROUP NAME
        Given a user with the following criteria
            | criteria            |
            | with expense groups |
            | accounts            |
        When the user accesses the expenses group "list"
        And the analytics interceptor service is initiated
        And the user creates group and add new participant
        Then the analytics events contains the following variables
            | item                    | value                                                  | type         | event          |
            | analytics               | analytics/glomo_base                                   | json schema  | App Page Visit |
            | version DL              | 20250414_5.0                                           | string       | App Page Visit |
            | page name               | app:privada:personas:grupo de gastos:1 nombre de grupo | string       | App Page Visit |
            | level 1                 | grupo de gastos                                        | string       | App Page Visit |
            | level 2                 | 1 nombre de grupo                                      | string       | App Page Visit |
            | language                | ES                                                     | string       | App Page Visit |
            | page area               | privada                                                | string       | App Page Visit |
            | page intent             | informacion                                            | string       | App Page Visit |
            | channel                 | online                                                 | string       | App Page Visit |
            | page instance ID        | de                                                     | string       | App Page Visit |
            | page info version       | appVersion                                             | regexp named | App Page Visit |
            | page segment            | personas                                               | string       | App Page Visit |
            | sysEnv                  | app                                                    | string       | App Page Visit |
            | business unit           | BBVA Mexico                                            | string       | App Page Visit |
            | site app name           | App BBVA Mexico                                        | string       | App Page Visit |
            | project name            | Glomo                                                  | string       | App Page Visit |
            | device mobile           | si                                                     | string       | App Page Visit |
            | user userState          | logado                                                 | string       | App Page Visit |
            | user segment global     | 003001                                                 | string       | App Page Visit |
            | profile ID              | profileID                                              | regexp named | App Page Visit |
            | user gender             | gender                                                 | regexp named | App Page Visit |
            | user age                | age                                                    | regexp named | App Page Visit |
            | global application      | expenses group                                         | string       | App Page Visit |
            | application name        | grupo de gastos                                        | string       | App Page Visit |
            | application type        | autogestion                                            | string       | App Page Visit |
            | fulfillment model       | online                                                 | string       | App Page Visit |
            | application step        | 1 nombre de grupo                                      | string       | App Page Visit |
            | internal campaign       |                                                        | empty array  | App Page Visit |
            | optimization attributes |                                                        | empty array  | App Page Visit |
            | products attributes     |                                                        | empty array  | App Page Visit |

    @ANA_EVENT_EG003
    @analytics
    @MX @web @ios @android @web-done
    @backend(test) @vbank
    Scenario: Expenses Group - EVENT ONCLICK - INPUT GROUP NAME
        Given a user with the following criteria
            | criteria            |
            | with expense groups |
            | accounts            |
        When the user accesses the expenses group "list"
        And the analytics interceptor service is initiated
        And the user creates group and add new participant
        Then the analytics events contains the following variables
            | item                    | value                                                  | type         | event       |
            | analytics               | analytics/glomo_base                                   | json schema  | App Started |
            | version DL              | 20250414_5.0                                           | string       | App Started |
            | page name               | app:privada:personas:grupo de gastos:1 nombre de grupo | string       | App Started |
            | level 1                 | grupo de gastos                                        | string       | App Started |
            | level 2                 | 1 nombre de grupo                                      | string       | App Started |
            | language                | ES                                                     | string       | App Started |
            | page area               | privada                                                | string       | App Started |
            | page intent             | informacion                                            | string       | App Started |
            | channel                 | online                                                 | string       | App Started |
            | page instance ID        | de                                                     | string       | App Started |
            | page info version       | appVersion                                             | regexp named | App Started |
            | page segment            | personas                                               | string       | App Started |
            | sysEnv                  | app                                                    | string       | App Started |
            | business unit           | BBVA Mexico                                            | string       | App Started |
            | site app name           | App BBVA Mexico                                        | string       | App Started |
            | project name            | Glomo                                                  | string       | App Started |
            | device mobile           | si                                                     | string       | App Started |
            | user userState          | logado                                                 | string       | App Started |
            | user segment global     | 003001                                                 | string       | App Started |
            | profile ID              | profileID                                              | regexp named | App Started |
            | user gender             | gender                                                 | regexp named | App Started |
            | user age                | age                                                    | regexp named | App Started |
            | global application      | expenses group                                         | string       | App Started |
            | application name        | grupo de gastos                                        | string       | App Started |
            | application type        | autogestion                                            | string       | App Started |
            | fulfillment model       | online                                                 | string       | App Started |
            | application step        | ingresar nombre del grupo                              | string       | App Started |
            | internal campaign       |                                                        | empty array  | App Started |
            | optimization attributes |                                                        | empty array  | App Started |
            | products attributes     |                                                        | empty array  | App Started |

    @ANA_EVENT_EG004
    @analytics
    @MX @web @ios @android @web-done
    @backend(test) @vbank
    Scenario: Expenses Group - LOADING EVENT - 2 PARTICIPANTS
        Given a user with the following criteria
            | criteria            |
            | with expense groups |
            | accounts            |
        When the user accesses the expenses group "list"
        And the analytics interceptor service is initiated
        And the user creates group and add new participant
        Then the analytics events contains the following variables
            | item                    | value                                                | type         | event      |
            | analytics               | analytics/glomo_base                                 | json schema  | App Step 2 |
            | version DL              | 20250414_5.0                                         | string       | App Step 2 |
            | page name               | app:privada:personas:grupo de gastos:2 participantes | string       | App Step 2 |
            | level 1                 | grupo de gastos                                      | string       | App Step 2 |
            | level 2                 | 2 participantes                                      | string       | App Step 2 |
            | language                | ES                                                   | string       | App Step 2 |
            | page area               | privada                                              | string       | App Step 2 |
            | page intent             | informacion                                          | string       | App Step 2 |
            | channel                 | online                                               | string       | App Step 2 |
            | page instance ID        | de                                                   | string       | App Step 2 |
            | page info version       | appVersion                                           | regexp named | App Step 2 |
            | page segment            | personas                                             | string       | App Step 2 |
            | sysEnv                  | app                                                  | string       | App Step 2 |
            | business unit           | BBVA Mexico                                          | string       | App Step 2 |
            | site app name           | App BBVA Mexico                                      | string       | App Step 2 |
            | project name            | Glomo                                                | string       | App Step 2 |
            | device mobile           | si                                                   | string       | App Step 2 |
            | user userState          | logado                                               | string       | App Step 2 |
            | user segment global     | 003001                                               | string       | App Step 2 |
            | profile ID              | profileID                                            | regexp named | App Step 2 |
            | user gender             | gender                                               | regexp named | App Step 2 |
            | user age                | age                                                  | regexp named | App Step 2 |
            | global application      | expenses group                                       | string       | App Step 2 |
            | application name        | grupo de gastos                                      | string       | App Step 2 |
            | application type        | autogestion                                          | string       | App Step 2 |
            | fulfillment model       | online                                               | string       | App Step 2 |
            | application step        | 2 participantes                                      | string       | App Step 2 |
            | internal campaign       |                                                      | empty array  | App Step 2 |
            | optimization attributes |                                                      | empty array  | App Step 2 |
            | products attributes     |                                                      | empty array  | App Step 2 |

    @ANA_EVENT_EG005
    @analytics
    @MX @web @ios @android @web-done
    @backend(test) @vbank
    Scenario: Expenses Group - LOADING EVENT - 3 PARTICIPANTS
        Given a user with the following criteria
            | criteria            |
            | with expense groups |
            | accounts            |
        When the user accesses the expenses group "list"
        And the user creates group and add new participant
        And the analytics interceptor service is initiated
        And the user continues to display the group creation ticket
        Then the analytics events contains the following variables
            | item                    | value                                               | type         | event     |
            | analytics               | analytics/glomo_base                                | json schema  | App Step 3 |
            | version DL              | 20250414_5.0                                        | string       | App Step 3 |
            | page name               | app:privada:personas:grupo de gastos:3 confirmacion | string       | App Step 3 |
            | level 1                 | grupo de gastos                                     | string       | App Step 3 |
            | level 2                 | 3 confirmacion                                      | string       | App Step 3 |
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
            | project name            | Glomo                                               | string       | App Step 3 |
            | device mobile           | si                                                  | string       | App Step 3 |
            | user userState          | logado                                              | string       | App Step 3 |
            | user segment global     | 003001                                              | string       | App Step 3 |
            | profile ID              | profileID                                           | regexp named | App Step 3 |
            | user gender             | gender                                              | regexp named | App Step 3 |
            | user age                | age                                                 | regexp named | App Step 3 |
            | global application      | expenses group                                      | string       | App Step 3 |
            | application name        | grupo de gastos                                     | string       | App Step 3 |
            | application type        | autogestion                                         | string       | App Step 3 |
            | fulfillment model       | online                                              | string       | App Step 3 |
            | application step        | 3 confirmacion                                      | string       | App Step 3 |
            | internal campaign       |                                                     | empty array  | App Step 3 |
            | optimization attributes |                                                     | empty array  | App Step 3 |
            | products attributes     |                                                     | empty array  | App Step 3 |

    @ANA_EVENT_EG006
    @analytics
    @MX @web @ios @android @web-done
    @backend(test) @vbank
    Scenario: Expenses Group - LOADING EVENT - SUCCESSFUL PAGE
        Given a user with the following criteria
            | criteria            |
            | with expense groups |
            | accounts            |
        When the user accesses the expenses group "list"
        And the user creates group and add new participant
        And the analytics interceptor service is initiated
        And the user continues to display the group creation ticket
        Then the analytics events contains the following variables
            | item                    | value                                               | type         | event         |
            | analytics               | analytics/glomo_base                                | json schema  | App Completed |
            | version DL              | 20250414_5.0                                        | string       | App Completed |
            | page name               | app:privada:personas:grupo de gastos:pagina exitosa | string       | App Completed |
            | level 1                 | grupo de gastos                                     | string       | App Completed |
            | level 2                 | pagina exitosa                                      | string       | App Completed |
            | language                | ES                                                  | string       | App Completed |
            | page area               | privada                                             | string       | App Completed |
            | page intent             | informacion                                         | string       | App Completed |
            | channel                 | online                                              | string       | App Completed |
            | page instance ID        | de                                                  | string       | App Completed |
            | page info version       | appVersion                                          | regexp named | App Completed |
            | page segment            | personas                                            | string       | App Completed |
            | sysEnv                  | app                                                 | string       | App Completed |
            | business unit           | BBVA Mexico                                         | string       | App Completed |
            | site app name           | App BBVA Mexico                                     | string       | App Completed |
            | project name            | Glomo                                               | string       | App Completed |
            | device mobile           | si                                                  | string       | App Completed |
            | user userState          | logado                                              | string       | App Completed |
            | user segment global     | 003001                                                | string       | App Completed |
            | profile ID              | profileID                                           | regexp named | App Completed |
            | user gender             | gender                                              | regexp named | App Completed |
            | user age                | age                                                 | regexp named | App Completed |
            | global application      | expenses group                                      | string       | App Completed |
            | application name        | grupo de gastos                                     | string       | App Completed |
            | application type        | autogestion                                         | string       | App Completed |
            | fulfillment model       | online                                              | string       | App Completed |
            | application state       | finalizado                                          | string       | App Completed |
            | application step        | pagina exitosa                                      | string       | App Completed |

    @ANA_EVENT_EG007
    @analytics
    @MX @web @ios @android @web-done
    @backend(test) @vbank
    Scenario: Expenses Group - LOADING EVENT - LIST OF GROUPS
        Given a user with the following criteria
            | criteria            |
            | with expense groups |
            | accounts            |
        When the user accesses the expenses group "page"
        And the user realizes the process of term and conditions
        And the analytics interceptor service is initiated
        And the user accepts terms and conditions of expenses group
        Then the analytics events contains the following variables
            | item                    | value                                               | type         | event     |
            | analytics               | analytics/glomo_base                                | json schema  | Page View |
            | version DL              | 20250414_5.0                                        | string       | Page View |
            | page name               | app:privada:personas:grupo de gastos:listado grupos | string       | Page View |
            | level 1                 | grupo de gastos                                     | string       | Page View |
            | level 2                 | listado grupos                                      | string       | Page View |
            | language                | ES                                                  | string       | Page View |
            | page area               | privada                                             | string       | Page View |
            | page intent             | informacion                                         | string       | Page View |
            | channel                 | online                                              | string       | Page View |
            | page instance ID        | de                                                  | string       | Page View |
            | page info version       | appVersion                                          | regexp named | Page View |
            | page segment            | personas                                            | string       | Page View |
            | sysEnv                  | app                                                 | string       | Page View |
            | business unit           | BBVA Mexico                                         | string       | Page View |
            | site app name           | App BBVA Mexico                                     | string       | Page View |
            | project name            | Glomo                                               | string       | Page View |
            | device mobile           | si                                                  | string       | Page View |
            | user userState          | logado                                              | string       | Page View |
            | user segment global     | 003001                                              | string       | Page View |
            | profile ID              | profileID                                           | regexp named | Page View |
            | user gender             | gender                                              | regexp named | Page View |
            | user age                | age                                                 | regexp named | Page View |
            | custom fields           | grupos creados:36                                   | string       | Page View |
            | internal campaign       |                                                     | empty array  | Page View |
            | optimization attributes |                                                     | empty array  | Page View |
            | products attributes     |                                                     | empty array  | Page View |

    @ANA_EVENT_EG008
    @analytics
    @MX @web @ios @android @web-done
    @backend(test) @vbank
    Scenario: Expenses Group - LOADING EVENT - NEW CONTACT
        Given a user with the following criteria
            | criteria            |
            | with expense groups |
            | accounts            |
        When the user accesses the expenses group "list"
        And the user enters the "add participant" action from "participants" section of group "mark as paid only one"
        And the analytics interceptor service is initiated
        And the user adds new participant
        Then the analytics events contains the following variables
            | item                    | value                                                             | type         | event     |
            | analytics               | analytics/glomo_base                                              | json schema  | Page View |
            | version DL              | 20250414_5.0                                                      | string       | Page View |
            | page name               | app:privada:personas:grupo de gastos:participantes:nuevo contacto | string       | Page View |
            | level 1                 | grupo de gastos                                                   | string       | Page View |
            | level 2                 | participantes                                                     | string       | Page View |
            | level 3                 | nuevo contacto                                                    | string       | Page View |
            | language                | ES                                                                | string       | Page View |
            | page area               | privada                                                           | string       | Page View |
            | page intent             | informacion                                                       | string       | Page View |
            | channel                 | online                                                            | string       | Page View |
            | page instance ID        | de                                                                | string       | Page View |
            | page info version       | appVersion                                                        | regexp named | Page View |
            | page segment            | personas                                                          | string       | Page View |
            | sysEnv                  | app                                                               | string       | Page View |
            | business unit           | BBVA Mexico                                                       | string       | Page View |
            | site app name           | App BBVA Mexico                                                   | string       | Page View |
            | project name            | Glomo                                                             | string       | Page View |
            | device mobile           | si                                                                | string       | Page View |
            | user userState          | logado                                                            | string       | Page View |
            | user segment global     | 003001                                                            | string       | Page View |
            | profile ID              | profileID                                                         | regexp named | Page View |
            | user gender             | gender                                                            | regexp named | Page View |
            | user age                | age                                                               | regexp named | Page View |
            | custom fields           | grupos creados:36                                                 | string       | Page View |
            | internal campaign       |                                                                   | empty array  | Page View |
            | optimization attributes |                                                                   | empty array  | Page View |
            | products attributes     |                                                                   | empty array  | Page View |

    @ANA_EVENT_EG009
    @analytics
    @MX @web @ios @android @web-done
    @backend(test) @vbank
    Scenario: Expenses Group - LOADING EVENT - TERMS AND CONDITIONS
        Given a user with the following criteria
            | criteria            |
            | with expense groups |
            | accounts            |
        When the user accesses to dashboard
        And the analytics interceptor service is initiated
        And the user accesses the expenses group "list"
        Then the analytics events contains the following variables
            | item                    | value                                                       | type             | event     |
            | analytics               | analytics/glomo_base                                        | json schema      | Page View |
            | version DL              | 20250414_5.0                                                | string           | Page View |
            | page name               | app:privada:personas:grupo de gastos:terminos y condiciones | string           | Page View |
            | level 1                 | grupo de gastos                                             | string           | Page View |
            | level 2                 | terminos y condiciones                                      | string           | Page View |
            | language                | ES                                                          | string           | Page View |
            | page area               | privada                                                     | string           | Page View |
            | page intent             | informacion                                                 | string           | Page View |
            | channel                 | online                                                      | string           | Page View |
            | page instance ID        | de                                                          | string           | Page View |
            | page info version       | appVersion                                                  | regexp named     | Page View |
            | page segment            | personas                                                    | string           | Page View |
            | sysEnv                  | app                                                         | string           | Page View |
            | business unit           | BBVA Mexico                                                 | string           | Page View |
            | site app name           | App BBVA Mexico                                             | string           | Page View |
            | project name            | Glomo                                                       | string           | Page View |
            | device mobile           | si                                                          | string           | Page View |
            | user userState          | logado                                                      | string           | Page View |
            | user segment global     | 003001                                                      | string           | Page View |
            | profile ID              | profileID                                                   | regexp named     | Page View |
            | user gender             | gender                                                      | regexp named     | Page View |
            | user age                | age                                                         | regexp named     | Page View |
            | internal campaign       |                                                             | empty array      | Page View |
            | optimization attributes |                                                             | empty array      | Page View |
            | application             |                                                             | empty str object | Page View |
            | products attributes     |                                                             | empty array      | Page View |

    @ANA_EVENT_EG010
    @analytics
    @MX @web @ios @android @web-done
    @backend(test) @vbank
    Scenario: Expenses Group - LOADING EVENT - INVITATION TO A GROUP
        Given a user with the following criteria
            | criteria            |
            | with expense groups |
            | accounts            |
        When the user accesses the expenses group "list"
        And the analytics interceptor service is initiated
        And the user enters the "Grupo de prueba" group
        Then the analytics events contains the following variables
            | item                    | value                                                      | type         | event     |
            | analytics               | analytics/glomo_base                                       | json schema  | Page View |
            | version DL              | 20250414_5.0                                               | string       | Page View |
            | page name               | app:privada:personas:grupo de gastos:invitacion a un grupo | string       | Page View |
            | level 1                 | grupo de gastos                                            | string       | Page View |
            | level 2                 | invitacion a un grupo                                      | string       | Page View |
            | language                | ES                                                         | string       | Page View |
            | page area               | privada                                                    | string       | Page View |
            | page intent             | informacion                                                | string       | Page View |
            | channel                 | online                                                     | string       | Page View |
            | page instance ID        | de                                                         | string       | Page View |
            | page info version       | appVersion                                                 | regexp named | Page View |
            | page segment            | personas                                                   | string       | Page View |
            | sysEnv                  | app                                                        | string       | Page View |
            | business unit           | BBVA Mexico                                                | string       | Page View |
            | site app name           | App BBVA Mexico                                            | string       | Page View |
            | project name            | Glomo                                                      | string       | Page View |
            | device mobile           | si                                                         | string       | Page View |
            | user userState          | logado                                                     | string       | Page View |
            | user segment global     | 003001                                                     | string       | Page View |
            | profile ID              | profileID                                                  | regexp named | Page View |
            | user gender             | gender                                                     | regexp named | Page View |
            | user age                | age                                                        | regexp named | Page View |
            | custom fields           | grupos creados:36                                          | string       | Page View |
            | internal campaign       |                                                            | empty array  | Page View |
            | optimization attributes |                                                            | empty array  | Page View |
            | products attributes     |                                                            | empty array  | Page View |

    @ANA_EVENT_EG011
    @analytics
    @MX @web @ios @android @web-done
    @backend(test) @vbank
    Scenario: Expenses Group - LOADING EVENT - INVITATION TO A GROUP PARTICIPATE
        Given a user with the following criteria
            | criteria            |
            | with expense groups |
            | accounts            |
        When the user accesses the expenses group "list"
        And the user enters the "Viaje T" group
        And the analytics interceptor service is initiated
        And the user has a pending invitation
        Then the analytics events contains the following variables
            | item                    | value                                                      | type         | event         |
            | analytics               | analytics/glomo_base                                       | json schema  | Internal Link |
            | version DL              | 20250414_5.0                                               | string       | Internal Link |
            | page name               | app:privada:personas:grupo de gastos:invitacion a un grupo | string       | Internal Link |
            | level 1                 | grupo de gastos                                            | string       | Internal Link |
            | level 2                 | invitacion a un grupo                                      | string       | Internal Link |
            | language                | ES                                                         | string       | Internal Link |
            | page area               | privada                                                    | string       | Internal Link |
            | page intent             | informacion                                                | string       | Internal Link |
            | channel                 | online                                                     | string       | Internal Link |
            | page instance ID        | de                                                         | string       | Internal Link |
            | page info version       | appVersion                                                 | regexp named | Internal Link |
            | page segment            | personas                                                   | string       | Internal Link |
            | sysEnv                  | app                                                        | string       | Internal Link |
            | business unit           | BBVA Mexico                                                | string       | Internal Link |
            | site app name           | App BBVA Mexico                                            | string       | Internal Link |
            | project name            | Glomo                                                      | string       | Internal Link |
            | device mobile           | si                                                         | string       | Internal Link |
            | user userState          | logado                                                     | string       | Internal Link |
            | user segment global     | 003001                                                     | string       | Internal Link |
            | profile ID              | profileID                                                  | regexp named | Internal Link |
            | user gender             | gender                                                     | regexp named | Internal Link |
            | user age                | age                                                        | regexp named | Internal Link |
            | custom fields           | grupos creados:30                                          | string       | Internal Link |
            | link name               | ahora no                                                   | string       | Internal Link |
            | internal campaign       |                                                            | empty array  | Internal Link |
            | optimization attributes |                                                            | empty array  | Internal Link |
            | products attributes     |                                                            | empty array  | Internal Link |

    @ANA_EVENT_EG012
    @analytics
    @MX @web @ios @android @web-done
    @backend(test) @vbank
    Scenario: Expenses Group - LOADING EVENT - GROUP DETAIL
        Given a user with the following criteria
            | criteria            |
            | with expense groups |
            | accounts            |
        When the user accesses the expenses group "list"
        And the analytics interceptor service is initiated
        And the user enters the "Prueba" group
        Then the analytics events contains the following variables
            | item                    | value                                              | type             | event     |
            | analytics               | analytics/glomo_base                               | json schema      | Page View |
            | version DL              | 20250414_5.0                                       | string           | Page View |
            | page name               | app:privada:personas:grupo de gastos:detalle grupo | string           | Page View |
            | level 1                 | grupo de gastos                                    | string           | Page View |
            | level 2                 | detalle grupo                                      | string           | Page View |
            | language                | ES                                                 | string           | Page View |
            | page area               | privada                                            | string           | Page View |
            | page intent             | informacion                                        | string           | Page View |
            | channel                 | online                                             | string           | Page View |
            | page instance ID        | de                                                 | string           | Page View |
            | page info version       | appVersion                                         | regexp named     | Page View |
            | page segment            | personas                                           | string           | Page View |
            | sysEnv                  | app                                                | string           | Page View |
            | business unit           | BBVA Mexico                                        | string           | Page View |
            | site app name           | App BBVA Mexico                                    | string           | Page View |
            | project name            | Glomo                                              | string           | Page View |
            | device mobile           | si                                                 | string           | Page View |
            | user userState          | logado                                             | string           | Page View |
            | user segment global     | 003001                                             | string           | Page View |
            | profile ID              | profileID                                          | regexp named     | Page View |
            | user gender             | gender                                             | regexp named     | Page View |
            | user age                | age                                                | regexp named     | Page View |
            | internal campaign       |                                                    | empty array      | Page View |
            | optimization attributes |                                                    | empty array      | Page View |
            | application             |                                                    | empty str object | Page View |
            | products attributes     |                                                    | empty array      | Page View |

    @ANA_EVENT_EG013
    @analytics
    @MX @web @ios @android @web-done
    @backend(test) @vbank
    Scenario: Expenses Group - LOADING EVENT - GROUP DETAIL ASSOCIATE EXPENSE
        Given a user with the following criteria
            | criteria            |
            | with expense groups |
            | accounts            |
        When the user accesses the expenses group "list"
        And the user enters the "Prueba" group
        And the analytics interceptor service is initiated
        And the user enters the "associate payment" action from "expenses" section
        Then the analytics events contains the following variables
            | item                    | value                                                      | type         | event     |
            | analytics               | analytics/glomo_base                               | json schema      | Internal Link |
            | version DL              | 20250414_5.0                                       | string           | Internal Link |
            | page name               | app:privada:personas:grupo de gastos:detalle grupo | string           | Internal Link |
            | level 1                 | grupo de gastos                                    | string           | Internal Link |
            | level 2                 | detalle grupo                                      | string           | Internal Link |
            | language                | ES                                                 | string           | Internal Link |
            | page area               | privada                                            | string           | Internal Link |
            | page intent             | informacion                                        | string           | Internal Link |
            | channel                 | online                                             | string           | Internal Link |
            | page instance ID        | de                                                 | string           | Internal Link |
            | page info version       | appVersion                                         | regexp named     | Internal Link |
            | page segment            | personas                                           | string           | Internal Link |
            | sysEnv                  | app                                                | string           | Internal Link |
            | business unit           | BBVA Mexico                                        | string           | Internal Link |
            | site app name           | App BBVA Mexico                                    | string           | Internal Link |
            | project name            | Glomo                                              | string           | Internal Link |
            | device mobile           | si                                                 | string           | Internal Link |
            | user userState          | logado                                             | string           | Internal Link |
            | user segment global     | 003001                                             | string           | Internal Link |
            | profile ID              | profileID                                          | regexp named     | Internal Link |
            | user gender             | gender                                             | regexp named     | Internal Link |
            | user age                | age                                                | regexp named     | Internal Link |
            | link name               | agregar gasto                                      | string           | Internal Link |
            | internal campaign       |                                                    | empty array      | Internal Link |
            | optimization attributes |                                                    | empty array      | Internal Link |
            | application             |                                                    | empty str object | Internal Link |
            | products attributes     |                                                    | empty array      | Internal Link |

    @ANA_EVENT_EG014
    @analytics
    @MX @web @ios @android @web-done
    @backend(test) @vbank
    Scenario: Expenses Group - LOADING EVENT - OPERATIVES
        Given a user with the following criteria
            | criteria            |
            | with expense groups |
            | accounts            |
        When the user accesses the expenses group "list"
        And the analytics interceptor service is initiated
        And the user enters the "add cash spend" action from "expenses" section of group "Prueba"
        Then the analytics events contains the following variables
            | item                    | value                                                         | type             | event     |
            | analytics               | analytics/glomo_base                                          | json schema      | Page View |
            | version DL              | 20250414_5.0                                                  | string           | Page View |
            | page name               | app:privada:personas:grupo de gastos:detalle grupo            | string           | Page View |
            | level 1                 | grupo de gastos                                               | string           | Page View |
            | level 2                 | detalle grupo                                                 | string           | Page View |
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
            | project name            | Glomo                                                         | string           | Page View |
            | device mobile           | si                                                            | string           | Page View |
            | user userState          | logado                                                        | string           | Page View |
            | user segment global     | 003001                                                        | string           | Page View |
            | profile ID              | profileID                                                     | regexp named     | Page View |
            | user gender             | gender                                                        | regexp named     | Page View |
            | user age                | age                                                           | regexp named     | Page View |
            | internal campaign       |                                                               | empty array      | Page View |
            | optimization attributes |                                                               | empty array      | Page View |
            | application             |                                                               | empty str object | Page View |
            | products attributes     |                                                               | empty array      | Page View |

    @ANA_EVENT_EG015
    @analytics
    @MX @web @ios @android @web-done
    @backend(test) @vbank
    Scenario: Expenses Group - LOADING EVENT - OPERATIVES ASSOCIATE EXPENSE
        Given a user with the following criteria
            | criteria            |
            | with expense groups |
        When the user accesses the expenses group "list"
        And the user enters the "more" action from "expenses" section of group "mark as paid only one"
        And the analytics interceptor service is initiated
        And the user selects an action from the operatives
        Then the analytics events contains the following variables
            | item                    | value                                                         | type             | event         |
            | analytics               | analytics/glomo_base                                          | json schema      | Internal Link |
            | version DL              | 20250414_5.0                                                  | string           | Internal Link |
            | page name               | app:privada:personas:grupo de gastos:detalle grupo:operativas | string           | Internal Link |
            | level 1                 | grupo de gastos                                               | string           | Internal Link |
            | level 2                 | detalle grupo                                                 | string           | Internal Link |
            | level 3                 | operativas                                                    | string           | Internal Link |
            | language                | ES                                                            | string           | Internal Link |
            | page area               | privada                                                       | string           | Internal Link |
            | page intent             | informacion                                                   | string           | Internal Link |
            | channel                 | online                                                        | string           | Internal Link |
            | page instance ID        | de                                                            | string           | Internal Link |
            | page info version       | appVersion                                                    | regexp named     | Internal Link |
            | page segment            | personas                                                      | string           | Internal Link |
            | sysEnv                  | app                                                           | string           | Internal Link |
            | business unit           | BBVA Mexico                                                   | string           | Internal Link |
            | site app name           | App BBVA Mexico                                               | string           | Internal Link |
            | project name            | Glomo                                                         | string           | Internal Link |
            | device mobile           | si                                                            | string           | Internal Link |
            | user userState          | logado                                                        | string           | Internal Link |
            | user segment global     | 003001                                                        | string           | Internal Link |
            | profile ID              | profileID                                                     | regexp named     | Internal Link |
            | user gender             | gender                                                        | regexp named     | Internal Link |
            | user age                | age                                                           | regexp named     | Internal Link |
            | link name               | eliminar gastos o pagos                                       | string           | Internal Link |
            | internal campaign       |                                                               | empty array      | Internal Link |
            | optimization attributes |                                                               | empty array      | Internal Link |
            | application             |                                                               | empty str object | Internal Link |
            | products attributes     |                                                               | empty array      | Internal Link |

    @ANA_EVENT_EG016
    @analytics
    @MX @web @ios @android @web-done
    @backend(test) @vbank
    Scenario: Expenses Group - LOADING EVENT - PARTICIPANT DETAILS
        Given a user with the following criteria
            | criteria            |
            | with expense groups |
            | accounts            |
        When the user accesses the expenses group "list"
        And the user enters the "Grupo C" group
        And the analytics interceptor service is initiated
        And the user enters the "main creditor" action from "participants" section
        Then the analytics events contains the following variables
            | item                    | value                                                         | type             | event     |
            | analytics               | analytics/glomo_base                                          | json schema      | Page View |
            | version DL              | 20250414_5.0                                                  | string           | Page View |
            | page name               | app:privada:personas:grupo de gastos:detalle del participante | string           | Page View |
            | level 1                 | grupo de gastos                                               | string           | Page View |
            | level 2                 | detalle del participante                                      | string           | Page View |
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
            | project name            | Glomo                                                         | string           | Page View |
            | device mobile           | si                                                            | string           | Page View |
            | user userState          | logado                                                        | string           | Page View |
            | user segment global     | 003001                                                        | string           | Page View |
            | profile ID              | profileID                                                     | regexp named     | Page View |
            | user gender             | gender                                                        | regexp named     | Page View |
            | user age                | age                                                           | regexp named     | Page View |
            | internal campaign       |                                                               | empty array      | Page View |
            | optimization attributes |                                                               | empty array      | Page View |
            | application             |                                                               | empty str object | Page View |
            | products attributes     |                                                               | empty array      | Page View |

    @ANA_EVENT_EG017
    @analytics
    @MX @web @ios @android @web-done
    @backend(test) @vbank
    Scenario: Expenses Group - LOADING EVENT - PARTICIPANT INTERACTION DETAILS
        Given a user with the following criteria
            | criteria            |
            | with expense groups |
            | accounts            |
        When the user accesses the expenses group "list"
        And the user enters the "main creditor" action from "participants" section of group "Grupo C"
        And the analytics interceptor service is initiated
        And the user edits participant information
        Then the analytics events contains the following variables
            | item                    | value                                                         | type             | event         |
            | analytics               | analytics/glomo_base                                          | json schema      | Internal Link |
            | version DL              | 20250414_5.0                                                  | string           | Internal Link |
            | page name               | app:privada:personas:grupo de gastos:detalle del participante | string           | Internal Link |
            | level 1                 | grupo de gastos                                               | string           | Internal Link |
            | level 2                 | detalle del participante                                      | string           | Internal Link |
            | language                | ES                                                            | string           | Internal Link |
            | page area               | privada                                                       | string           | Internal Link |
            | page intent             | informacion                                                   | string           | Internal Link |
            | channel                 | online                                                        | string           | Internal Link |
            | page instance ID        | de                                                            | string           | Internal Link |
            | page info version       | appVersion                                                    | regexp named     | Internal Link |
            | page segment            | personas                                                      | string           | Internal Link |
            | sysEnv                  | app                                                           | string           | Internal Link |
            | business unit           | BBVA Mexico                                                   | string           | Internal Link |
            | site app name           | App BBVA Mexico                                               | string           | Internal Link |
            | project name            | Glomo                                                         | string           | Internal Link |
            | device mobile           | si                                                            | string           | Internal Link |
            | user userState          | logado                                                        | string           | Internal Link |
            | user segment global     | 003001                                                        | string           | Internal Link |
            | profile ID              | profileID                                                     | regexp named     | Internal Link |
            | user gender             | gender                                                        | regexp named     | Internal Link |
            | user age                | age                                                           | regexp named     | Internal Link |
            | link name               | marcar como pagado                                            | string           | Internal Link |
            | internal campaign       |                                                               | empty array      | Internal Link |
            | optimization attributes |                                                               | empty array      | Internal Link |
            | application             |                                                               | empty str object | Internal Link |
            | products attributes     |                                                               | empty array      | Internal Link |

    @ANA_EVENT_EG018
    @analytics
    @MX @web @ios @android @web-done
    @backend(test) @vbank
    Scenario: Expenses Group - LOADING EVENT - OPERATIVES PARTICIPANT DETAILS
        Given a user with the following criteria
            | criteria            |
            | with expense groups |
            | accounts            |
        When the user accesses the expenses group "list"
        And the user enters the "first debtor" action from "participants" section of group "mark as paid only one"
        And the analytics interceptor service is initiated
        And the user views more operations from members section
        Then the analytics events contains the following variables
            | item                    | value                                                                    | type             | event     |
            | analytics               | analytics/glomo_base                                                     | json schema      | Page View |
            | version DL              | 20250414_5.0                                                             | string           | Page View |
            | page name               | app:privada:personas:grupo de gastos:detalle del participante:operativas | string           | Page View |
            | level 1                 | grupo de gastos                                                          | string           | Page View |
            | level 2                 | detalle del participante                                                 | string           | Page View |
            | level 3                 | operativas                                                               | string           | Page View |
            | language                | ES                                                                       | string           | Page View |
            | page area               | privada                                                                  | string           | Page View |
            | page intent             | informacion                                                              | string           | Page View |
            | channel                 | online                                                                   | string           | Page View |
            | page instance ID        | de                                                                       | string           | Page View |
            | page info version       | appVersion                                                               | regexp named     | Page View |
            | page segment            | personas                                                                 | string           | Page View |
            | sysEnv                  | app                                                                      | string           | Page View |
            | business unit           | BBVA Mexico                                                              | string           | Page View |
            | site app name           | App BBVA Mexico                                                          | string           | Page View |
            | project name            | Glomo                                                                    | string           | Page View |
            | device mobile           | si                                                                       | string           | Page View |
            | user userState          | logado                                                                   | string           | Page View |
            | user segment global     | 003001                                                                   | string           | Page View |
            | profile ID              | profileID                                                                | regexp named     | Page View |
            | user gender             | gender                                                                   | regexp named     | Page View |
            | user age                | age                                                                      | regexp named     | Page View |
            | internal campaign       |                                                                          | empty array      | Page View |
            | optimization attributes |                                                                          | empty array      | Page View |
            | application             |                                                                          | empty str object | Page View |
            | products attributes     |                                                                          | empty array      | Page View |

    @ANA_EVENT_EG019
    @analytics
    @MX @web @ios @android @web-done
    @backend(test) @vbank
    Scenario: Expenses Group - LOADING EVENT - OPERATIVES REQUEST PAYMENT
        Given a user with the following criteria
            | criteria            |
            | with expense groups |
            | accounts            |
        When the user accesses the expenses group "list"
        And the user enters the "first debtor" action from "participants" section of group "mark as paid only one"
        And the user views more operations from members section
        And the analytics interceptor service is initiated
        And the user selects an action from the operatives
        Then the analytics events contains the following variables
            | item                    | value                                                                    | type             | event         |
            | analytics               | analytics/glomo_base                                                     | json schema      | Internal Link |
            | version DL              | 20250414_5.0                                                             | string           | Internal Link |
            | page name               | app:privada:personas:grupo de gastos:detalle del participante:operativas | string           | Internal Link |
            | level 1                 | grupo de gastos                                                          | string           | Internal Link |
            | level 2                 | detalle del participante                                                 | string           | Internal Link |
            | level 3                 | operativas                                                               | string           | Internal Link |
            | language                | ES                                                                       | string           | Internal Link |
            | page area               | privada                                                                  | string           | Internal Link |
            | page intent             | informacion                                                              | string           | Internal Link |
            | channel                 | online                                                                   | string           | Internal Link |
            | page instance ID        | de                                                                       | string           | Internal Link |
            | page info version       | appVersion                                                               | regexp named     | Internal Link |
            | page segment            | personas                                                                 | string           | Internal Link |
            | sysEnv                  | app                                                                      | string           | Internal Link |
            | business unit           | BBVA Mexico                                                              | string           | Internal Link |
            | site app name           | App BBVA Mexico                                                          | string           | Internal Link |
            | project name            | Glomo                                                                    | string           | Internal Link |
            | device mobile           | si                                                                       | string           | Internal Link |
            | user userState          | logado                                                                   | string           | Internal Link |
            | user segment global     | 003001                                                                   | string           | Internal Link |
            | profile ID              | profileID                                                                | regexp named     | Internal Link |
            | user gender             | gender                                                                   | regexp named     | Internal Link |
            | user age                | age                                                                      | regexp named     | Internal Link |
            | link name               | enviar recordatorio                                                      | string           | Internal Link |
            | internal campaign       |                                                                          | empty array      | Internal Link |
            | optimization attributes |                                                                          | empty array      | Internal Link |
            | application             |                                                                          | empty str object | Internal Link |
            | products attributes     |                                                                          | empty array      | Internal Link |

    @ANA_EVENT_EG020
    @analytics
    @MX @web @ios @android @web-done
    @backend(test) @vbank
    Scenario: Expenses Group - LOADING EVENT - ERROR PARTICIPANTS EXCEEDED
        Given a user with the following criteria
            | criteria            |
            | with expense groups |
        When the user accesses the expenses group "list"
        And the user enters the "add participants more button" action from "expenses" section of group "Fiesta Cumpeaños Estefanía"
        And the user adds information from the new participant
        And the analytics interceptor service is initiated
        And show modal from participant limit exceeded
        Then the analytics events contains the following variables
            | item                    | value                                                              | type         | event     |
            | analytics               | analytics/glomo_base                                               | json schema  | Page View |
            | version DL              | 20250414_5.0                                                       | string       | Page View |
            | page name               | app:privada:personas:grupo de gastos:error participantes excedidos | string       | Page View |
            | level 1                 | grupo de gastos                                                    | string       | Page View |
            | level 2                 | error participantes excedidos                                      | string       | Page View |
            | language                | ES                                                                 | string       | Page View |
            | page area               | privada                                                            | string       | Page View |
            | page intent             | informacion                                                        | string       | Page View |
            | channel                 | online                                                             | string       | Page View |
            | page instance ID        | de                                                                 | string       | Page View |
            | page info version       | appVersion                                                         | regexp named | Page View |
            | page segment            | personas                                                           | string       | Page View |
            | sysEnv                  | app                                                                | string       | Page View |
            | business unit           | BBVA Mexico                                                        | string       | Page View |
            | site app name           | App BBVA Mexico                                                    | string       | Page View |
            | project name            | Glomo                                                              | string       | Page View |
            | device mobile           | si                                                                 | string       | Page View |
            | user userState          | logado                                                             | string       | Page View |
            | user segment global     | 003001                                                             | string       | Page View |
            | profile ID              | profileID                                                          | regexp named | Page View |
            | user gender             | gender                                                             | regexp named | Page View |
            | user age                | age                                                                | regexp named | Page View |
            | custom fields           | grupos creados:40                                                  | string       | Page View |
            | error page              | error participantes excedidos                                      | string       | Page View |
            | internal campaign       |                                                                    | empty array  | Page View |
            | optimization attributes |                                                                    | empty array  | Page View |
            | products attributes     |                                                                    | empty array  | Page View |

    @ANA_EVENT_EG021
    @analytics
    @MX @web @ios @android @web-done
    @backend(test) @vbank
    Scenario: Expenses Group - LOADING EVENT - ERROR GROUP LIMIT REACHED
        Given a user with the following criteria
            | criteria            |
            | with expense groups |
        When the user accesses the expenses group "list"
        And the user creates a group but does not finish the process
        And the analytics interceptor service is initiated
        And show modal from group limit exceeded
        Then the analytics events contains the following variables
            | item                    | value                                                                 | type         | event     |
            | analytics               | analytics/glomo_base                                                  | json schema  | Page View |
            | version DL              | 20250414_5.0                                                          | string       | Page View |
            | page name               | app:privada:personas:grupo de gastos:error limite de grupos alcanzado | string       | Page View |
            | level 1                 | grupo de gastos                                                       | string       | Page View |
            | level 2                 | error limite de grupos alcanzado                                      | string       | Page View |
            | language                | ES                                                                    | string       | Page View |
            | page area               | privada                                                               | string       | Page View |
            | page intent             | informacion                                                           | string       | Page View |
            | channel                 | online                                                                | string       | Page View |
            | page instance ID        | de                                                                    | string       | Page View |
            | page info version       | appVersion                                                            | regexp named | Page View |
            | page segment            | personas                                                              | string       | Page View |
            | sysEnv                  | app                                                                   | string       | Page View |
            | business unit           | BBVA Mexico                                                           | string       | Page View |
            | site app name           | App BBVA Mexico                                                       | string       | Page View |
            | project name            | Glomo                                                                 | string       | Page View |
            | device mobile           | si                                                                    | string       | Page View |
            | user userState          | logado                                                                | string       | Page View |
            | user segment global     | 003001                                                                | string       | Page View |
            | profile ID              | profileID                                                             | regexp named | Page View |
            | user gender             | gender                                                                | regexp named | Page View |
            | user age                | age                                                                   | regexp named | Page View |
            | custom fields           | grupos creados:40                                                     | string       | Page View |
            | error page              | error limite de grupos alcanzado                                      | string       | Page View |
            | internal campaign       |                                                                       | empty array  | Page View |
            | optimization attributes |                                                                       | empty array  | Page View |
            | products attributes     |                                                                       | empty array  | Page View |

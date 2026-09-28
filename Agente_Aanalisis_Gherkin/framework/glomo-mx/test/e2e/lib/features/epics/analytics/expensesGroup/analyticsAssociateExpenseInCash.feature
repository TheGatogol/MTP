@analyticsAssociateExpenseInCash
Feature: Analytics - Associate Expense In Cash

    @ANA_EVENT_AEC001
    @analytics
    @MX @web @ios @android @web-done
    @backend(test) @vbank
    Scenario: Associate Expense In Cash - APP ON CLICK START GROUP DETAIL
        Given a user with the following criteria
            | criteria            |
            | associate expenses  |
            | accounts            |
        When the user accesses the expenses group "list"
        And the user enters the "Viaje B" group
        And the analytics interceptor service is initiated
        And the user enters the "add cash spend" action from "expenses" section
        Then the analytics events contains the following variables
            | item                    | value                                              | type         | event              |
            | analytics               | analytics/glomo_base                               | json schema  | App On Click Start |
            | version DL              | 20250414_5.0                                       | string       | App On Click Start |
            | page name               | app:privada:personas:grupo de gastos:detalle grupo | string       | App On Click Start |
            | level 1                 | grupo de gastos                                    | string       | App On Click Start |
            | level 2                 | detalle grupo                                      | string       | App On Click Start |
            | language                | ES                                                 | string       | App On Click Start |
            | page area               | privada                                            | string       | App On Click Start |
            | page intent             | informacion                                        | string       | App On Click Start |
            | channel                 | online                                             | string       | App On Click Start |
            | page instance ID        | de                                                 | string       | App On Click Start |
            | page info version       | appVersion                                         | regexp named | App On Click Start |
            | page segment            | personas                                           | string       | App On Click Start |
            | sysEnv                  | app                                                | string       | App On Click Start |
            | business unit           | BBVA Mexico                                        | string       | App On Click Start |
            | site app name           | App BBVA Mexico                                    | string       | App On Click Start |
            | project name            | Glomo                                              | string       | App On Click Start |
            | device mobile           | si                                                 | string       | App On Click Start |
            | user userState          | logado                                             | string       | App On Click Start |
            | user segment global     | 003001                                             | string       | App On Click Start |
            | profile ID              | profileID                                          | regexp named | App On Click Start |
            | user gender             | gender                                             | regexp named | App On Click Start |
            | user age                | age                                                | regexp named | App On Click Start |
            | global application      | expenses group add in cash                         | string       | App On Click Start |
            | application name        | grupo de gastos anadir gasto en efectivo           | string       | App On Click Start |
            | application type        | operativa                                          | string       | App On Click Start |
            | fulfillment model       | online                                             | string       | App On Click Start |
            | application step        | detalle grupo                                      | string       | App On Click Start |
            | internal campaign       |                                                    | empty array  | App On Click Start |
            | optimization attributes |                                                    | empty array  | App On Click Start |
            | products attributes     |                                                    | empty array  | App On Click Start |

    @ANA_EVENT_AEC002
    @analytics
    @MX @web @ios @android @web-done
    @backend(test) @vbank
    Scenario: Associate Expense In Cash - APP ON CLICK START OPERATIVES GROUP DETAIL
        Given a user with the following criteria
            | criteria            |
            | associate expenses  |
            | accounts            |
        When the user accesses the expenses group "list"
        And the user enters the "Grupo T" group
        And the analytics interceptor service is initiated
        And the user enters the "add cash spend more button" action from "expenses" section
        Then the analytics events contains the following variables
            | item                    | value                                                         | type         | event              |
            | analytics               | analytics/glomo_base                                          | json schema  | App On Click Start |
            | version DL              | 20250414_5.0                                                  | string       | App On Click Start |
            | page name               | app:privada:personas:grupo de gastos:detalle grupo            | string       | App On Click Start |
            | level 1                 | grupo de gastos                                               | string       | App On Click Start |
            | level 2                 | detalle grupo                                                 | string       | App On Click Start |
            | language                | ES                                                            | string       | App On Click Start |
            | page area               | privada                                                       | string       | App On Click Start |
            | page intent             | informacion                                                   | string       | App On Click Start |
            | channel                 | online                                                        | string       | App On Click Start |
            | page instance ID        | de                                                            | string       | App On Click Start |
            | page info version       | appVersion                                                    | regexp named | App On Click Start |
            | page segment            | personas                                                      | string       | App On Click Start |
            | sysEnv                  | app                                                           | string       | App On Click Start |
            | business unit           | BBVA Mexico                                                   | string       | App On Click Start |
            | site app name           | App BBVA Mexico                                               | string       | App On Click Start |
            | project name            | Glomo                                                         | string       | App On Click Start |
            | device mobile           | si                                                            | string       | App On Click Start |
            | user userState          | logado                                                        | string       | App On Click Start |
            | user segment global     | 003001                                                        | string       | App On Click Start |
            | profile ID              | profileID                                                     | regexp named | App On Click Start |
            | user gender             | gender                                                        | regexp named | App On Click Start |
            | user age                | age                                                           | regexp named | App On Click Start |
            | global application      | expenses group add in cash                                    | string       | App On Click Start |
            | application name        | grupo de gastos anadir gasto en efectivo                      | string       | App On Click Start |
            | application type        | operativa                                                     | string       | App On Click Start |
            | fulfillment model       | online                                                        | string       | App On Click Start |
            | application step        | detalle grupo                                                 | string       | App On Click Start |
            | internal campaign       |                                                               | empty array  | App On Click Start |
            | optimization attributes |                                                               | empty array  | App On Click Start |
            | products attributes     |                                                               | empty array  | App On Click Start |

    @ANA_EVENT_AEC003
    @analytics
    @MX @web @ios @android @web-done
    @backend(test) @vbank
    Scenario: Associate Expense In Cash - APP ON CLICK START OPERATIVES
        Given a user with the following criteria
            | criteria            |
            | associate expenses  |
            | accounts            |
        When the user accesses the expenses group "list"
        And the user enters the "associate payment" action from "expenses" section of group "Viaje B"
        And the analytics interceptor service is initiated
        And the user navigates to associate expense in cash from modal error
        Then the analytics events contains the following variables
            | item                    | value                                                                            | type         | event              |
            | analytics               | analytics/glomo_base                                                             | json schema  | App On Click Start |
            | version DL              | 20250414_5.0                                                                     | string       | App On Click Start |
            | page name               | app:privada:personas:grupo de gastos:asociar gasto:error operacion no disponible | string       | App On Click Start |
            | level 1                 | grupo de gastos                                                                  | string       | App On Click Start |
            | level 2                 | asociar gasto                                                                    | string       | App On Click Start |
            | level 3                 | error operacion no disponible                                                    | string       | App On Click Start |
            | language                | ES                                                                               | string       | App On Click Start |
            | page area               | privada                                                                          | string       | App On Click Start |
            | page intent             | informacion                                                                      | string       | App On Click Start |
            | channel                 | online                                                                           | string       | App On Click Start |
            | page instance ID        | de                                                                               | string       | App On Click Start |
            | page info version       | appVersion                                                                       | regexp named | App On Click Start |
            | page segment            | personas                                                                         | string       | App On Click Start |
            | sysEnv                  | app                                                                              | string       | App On Click Start |
            | business unit           | BBVA Mexico                                                                      | string       | App On Click Start |
            | site app name           | App BBVA Mexico                                                                  | string       | App On Click Start |
            | project name            | Glomo                                                                            | string       | App On Click Start |
            | device mobile           | si                                                                               | string       | App On Click Start |
            | user userState          | logado                                                                           | string       | App On Click Start |
            | user segment global     | 003001                                                                           | string       | App On Click Start |
            | profile ID              | profileID                                                                        | regexp named | App On Click Start |
            | user gender             | gender                                                                           | regexp named | App On Click Start |
            | user age                | age                                                                              | regexp named | App On Click Start |
            | global application      | expenses group add in cash                                                       | string       | App On Click Start |
            | application name        | grupo de gastos anadir gasto en efectivo                                         | string       | App On Click Start |
            | application type        | operativa                                                                        | string       | App On Click Start |
            | fulfillment model       | online                                                                           | string       | App On Click Start |
            | application step        | anadir gasto en efectivo                                                         | string       | App On Click Start |
            | internal campaign       |                                                                                  | empty array  | App On Click Start |
            | optimization attributes |                                                                                  | empty array  | App On Click Start |
            | products attributes     |                                                                                  | empty array  | App On Click Start |

    @ANA_EVENT_AEC004
    @analytics
    @MX @web @ios @android @web-done
    @backend(test) @vbank
    Scenario: Associate Expense In Cash - APP PAGE VISIT
        Given a user with the following criteria
            | criteria            |
            | associate expenses  |
            | accounts            |
        When the user accesses the expenses group "list"
        And the user enters the "Viaje B" group
        And the analytics interceptor service is initiated
        And the user enters the "add cash spend more button" action from "expenses" section
        Then the analytics events contains the following variables
            | item                    | value                                                                                 | type         | event          |
            | analytics               | analytics/glomo_base                                                                  | json schema  | App Page Visit |
            | version DL              | 20250414_5.0                                                                          | string       | App Page Visit |
            | page name               | app:privada:personas:grupo de gastos:anadir gasto en efectivo:1 informacion del gasto | string       | App Page Visit |
            | level 1                 | grupo de gastos                                                                       | string       | App Page Visit |
            | level 2                 | anadir gasto en efectivo                                                              | string       | App Page Visit |
            | level 3                 | 1 informacion del gasto                                                               | string       | App Page Visit |
            | language                | ES                                                                                    | string       | App Page Visit |
            | page area               | privada                                                                               | string       | App Page Visit |
            | page intent             | informacion                                                                           | string       | App Page Visit |
            | channel                 | online                                                                                | string       | App Page Visit |
            | page instance ID        | de                                                                                    | string       | App Page Visit |
            | page info version       | appVersion                                                                            | regexp named | App Page Visit |
            | page segment            | personas                                                                              | string       | App Page Visit |
            | sysEnv                  | app                                                                                   | string       | App Page Visit |
            | business unit           | BBVA Mexico                                                                           | string       | App Page Visit |
            | site app name           | App BBVA Mexico                                                                       | string       | App Page Visit |
            | project name            | Glomo                                                                                 | string       | App Page Visit |
            | device mobile           | si                                                                                    | string       | App Page Visit |
            | user userState          | logado                                                                                | string       | App Page Visit |
            | user segment global     | 003001                                                                                | string       | App Page Visit |
            | profile ID              | profileID                                                                             | regexp named | App Page Visit |
            | user gender             | gender                                                                                | regexp named | App Page Visit |
            | user age                | age                                                                                   | regexp named | App Page Visit |
            | global application      | expenses group add in cash                                                            | string       | App Page Visit |
            | application name        | grupo de gastos anadir gasto en efectivo                                              | string       | App Page Visit |
            | application type        | operativa                                                                             | string       | App Page Visit |
            | fulfillment model       | online                                                                                | string       | App Page Visit |
            | application step        | 1 informacion del gasto                                                               | string       | App Page Visit |
            | internal campaign       |                                                                                       | empty array  | App Page Visit |
            | optimization attributes |                                                                                       | empty array  | App Page Visit |
            | products attributes     |                                                                                       | empty array  | App Page Visit |

    @ANA_EVENT_AEC005
    @analytics
    @MX @web @ios @android @web-done
    @backend(test) @vbank
    Scenario: Associate Expense In Cash - APP STARTED
        Given a user with the following criteria
            | criteria            |
            | associate expenses  |
            | accounts            |
        When the user accesses the expenses group "list"
        And the user enters the "add cash spend" action from "expenses" section of group "Viaje B"
        And the analytics interceptor service is initiated
        And the user add amount and concept
        Then the analytics events contains the following variables
            | item                    | value                                                                                 | type         | event       |
            | analytics               | analytics/glomo_base                                                                  | json schema  | App Started |
            | version DL              | 20250414_5.0                                                                          | string       | App Started |
            | page name               | app:privada:personas:grupo de gastos:anadir gasto en efectivo:1 informacion del gasto | string       | App Started |
            | level 1                 | grupo de gastos                                                                       | string       | App Started |
            | level 2                 | anadir gasto en efectivo                                                              | string       | App Started |
            | level 3                 | 1 informacion del gasto                                                               | string       | App Started |
            | language                | ES                                                                                    | string       | App Started |
            | page area               | privada                                                                               | string       | App Started |
            | page intent             | informacion                                                                           | string       | App Started |
            | channel                 | online                                                                                | string       | App Started |
            | page instance ID        | de                                                                                    | string       | App Started |
            | page info version       | appVersion                                                                            | regexp named | App Started |
            | page segment            | personas                                                                              | string       | App Started |
            | sysEnv                  | app                                                                                   | string       | App Started |
            | business unit           | BBVA Mexico                                                                           | string       | App Started |
            | site app name           | App BBVA Mexico                                                                       | string       | App Started |
            | project name            | Glomo                                                                                 | string       | App Started |
            | device mobile           | si                                                                                    | string       | App Started |
            | user userState          | logado                                                                                | string       | App Started |
            | user segment global     | 003001                                                                                | string       | App Started |
            | profile ID              | profileID                                                                             | regexp named | App Started |
            | user gender             | gender                                                                                | regexp named | App Started |
            | user age                | age                                                                                   | regexp named | App Started |
            | global application      | expenses group add in cash                                                            | string       | App Started |
            | application name        | grupo de gastos anadir gasto en efectivo                                              | string       | App Started |
            | application type        | operativa                                                                             | string       | App Started |
            | fulfillment model       | online                                                                                | string       | App Started |
            | application step        | importe                                                                               | string       | App Started |
            | internal campaign       |                                                                                       | empty array  | App Started |
            | optimization attributes |                                                                                       | empty array  | App Started |
            | products attributes     |                                                                                       | empty array  | App Started |

    @ANA_EVENT_AEC006
    @analytics
    @MX @web @ios @android @web-done
    @backend(test) @vbank
    Scenario: Associate Expense In Cash - APP STEP 2
        Given a user with the following criteria
            | criteria            |
            | associate expenses  |
            | accounts            |
        When the user accesses the expenses group "list"
        And the user enters the "add cash spend" action from "expenses" section of group "Viaje B"
        And the user add amount and concept
        And the analytics interceptor service is initiated
        And the user continues from add in cash section
        Then the analytics events contains the following variables
            | item                    | value                                                                                   | type         | event      |
            | analytics               | analytics/glomo_base                                                                    | json schema  | App Step 2 |
            | version DL              | 20250414_5.0                                                                            | string       | App Step 2 |
            | page name               | app:privada:personas:grupo de gastos:anadir gasto en efectivo:2 configuracion del gasto | string       | App Step 2 |
            | level 1                 | grupo de gastos                                                                         | string       | App Step 2 |
            | level 2                 | anadir gasto en efectivo                                                                | string       | App Step 2 |
            | level 3                 | 2 configuracion del gasto                                                               | string       | App Step 2 |
            | language                | ES                                                                                      | string       | App Step 2 |
            | page area               | privada                                                                                 | string       | App Step 2 |
            | page intent             | informacion                                                                             | string       | App Step 2 |
            | channel                 | online                                                                                  | string       | App Step 2 |
            | page instance ID        | de                                                                                      | string       | App Step 2 |
            | page info version       | appVersion                                                                              | regexp named | App Step 2 |
            | page segment            | personas                                                                                | string       | App Step 2 |
            | sysEnv                  | app                                                                                     | string       | App Step 2 |
            | business unit           | BBVA Mexico                                                                             | string       | App Step 2 |
            | site app name           | App BBVA Mexico                                                                         | string       | App Step 2 |
            | project name            | Glomo                                                                                   | string       | App Step 2 |
            | device mobile           | si                                                                                      | string       | App Step 2 |
            | user userState          | logado                                                                                  | string       | App Step 2 |
            | user segment global     | 003001                                                                                  | string       | App Step 2 |
            | profile ID              | profileID                                                                               | regexp named | App Step 2 |
            | user gender             | gender                                                                                  | regexp named | App Step 2 |
            | user age                | age                                                                                     | regexp named | App Step 2 |
            | global application      | expenses group add in cash                                                              | string       | App Step 2 |
            | application name        | grupo de gastos anadir gasto en efectivo                                                | string       | App Step 2 |
            | application type        | operativa                                                                               | string       | App Step 2 |
            | fulfillment model       | online                                                                                  | string       | App Step 2 |
            | application step        | 2 configuracion del gasto                                                               | string       | App Step 2 |
            | internal campaign       |                                                                                         | empty array  | App Step 2 |
            | optimization attributes |                                                                                         | empty array  | App Step 2 |
            | products attributes     |                                                                                         | empty array  | App Step 2 |

    @ANA_EVENT_AEC007
    @analytics
    @MX @web @ios @android @web-done
    @backend(test) @vbank
    Scenario: Associate Expense In Cash - APP STEP 3
        Given a user with the following criteria
            | criteria            |
            | associate expenses  |
            | accounts            |
        When the user accesses the expenses group "list"
        And the user enters the "add cash spend" action from "expenses" section of group "Viaje B"
        And the analytics interceptor service is initiated
        And the user adds the cash expense
        Then the analytics events contains the following variables
            | item                    | value                                                                        | type         | event      |
            | analytics               | analytics/glomo_base                                                         | json schema  | App Step 3 |
            | version DL              | 20250414_5.0                                                                 | string       | App Step 3 |
            | page name               | app:privada:personas:grupo de gastos:anadir gasto en efectivo:3 confirmacion | string       | App Step 3 |
            | level 1                 | grupo de gastos                                                              | string       | App Step 3 |
            | level 2                 | anadir gasto en efectivo                                                     | string       | App Step 3 |
            | level 3                 | 3 confirmacion                                                               | string       | App Step 3 |
            | language                | ES                                                                           | string       | App Step 3 |
            | page area               | privada                                                                      | string       | App Step 3 |
            | page intent             | informacion                                                                  | string       | App Step 3 |
            | channel                 | online                                                                       | string       | App Step 3 |
            | page instance ID        | de                                                                           | string       | App Step 3 |
            | page info version       | appVersion                                                                   | regexp named | App Step 3 |
            | page segment            | personas                                                                     | string       | App Step 3 |
            | sysEnv                  | app                                                                          | string       | App Step 3 |
            | business unit           | BBVA Mexico                                                                  | string       | App Step 3 |
            | site app name           | App BBVA Mexico                                                              | string       | App Step 3 |
            | project name            | Glomo                                                                        | string       | App Step 3 |
            | device mobile           | si                                                                           | string       | App Step 3 |
            | user userState          | logado                                                                       | string       | App Step 3 |
            | user segment global     | 003001                                                                       | string       | App Step 3 |
            | profile ID              | profileID                                                                    | regexp named | App Step 3 |
            | user gender             | gender                                                                       | regexp named | App Step 3 |
            | user age                | age                                                                          | regexp named | App Step 3 |
            | global application      | expenses group add in cash                                                   | string       | App Step 3 |
            | application name        | grupo de gastos anadir gasto en efectivo                                     | string       | App Step 3 |
            | application type        | operativa                                                                    | string       | App Step 3 |
            | fulfillment model       | online                                                                       | string       | App Step 3 |
            | application step        | 3 confirmacion                                                               | string       | App Step 3 |
            | internal campaign       |                                                                              | empty array  | App Step 3 |
            | optimization attributes |                                                                              | empty array  | App Step 3 |
            | products attributes     |                                                                              | empty array  | App Step 3 |

    @ANA_EVENT_AEC008
    @analytics
    @MX @web @ios @android @web-done
    @backend(test) @vbank
    Scenario: Associate Expense In Cash - APP COMPLETED - FINALIZADO
        Given a user with the following criteria
            | criteria            |
            | associate expenses  |
            | accounts            |
        When the user accesses the expenses group "list"
        And the user enters the "add cash spend" action from "expenses" section of group "Viaje B"
        And the analytics interceptor service is initiated
        And the user adds the cash expense
        Then the analytics events contains the following variables
            | item                    | value                                                                        | type         | event         |
            | analytics               | analytics/glomo_base                                                         | json schema  | App Completed |
            | version DL              | 20250414_5.0                                                                 | string       | App Completed |
            | page name               | app:privada:personas:grupo de gastos:anadir gasto en efectivo:pagina exitosa | string       | App Completed |
            | level 1                 | grupo de gastos                                                              | string       | App Completed |
            | level 2                 | anadir gasto en efectivo                                                     | string       | App Completed |
            | level 3                 | pagina exitosa                                                               | string       | App Completed |
            | language                | ES                                                                           | string       | App Completed |
            | page area               | privada                                                                      | string       | App Completed |
            | page intent             | informacion                                                                  | string       | App Completed |
            | channel                 | online                                                                       | string       | App Completed |
            | page instance ID        | de                                                                           | string       | App Completed |
            | page info version       | appVersion                                                                   | regexp named | App Completed |
            | page segment            | personas                                                                     | string       | App Completed |
            | sysEnv                  | app                                                                          | string       | App Completed |
            | business unit           | BBVA Mexico                                                                  | string       | App Completed |
            | site app name           | App BBVA Mexico                                                              | string       | App Completed |
            | project name            | Glomo                                                                        | string       | App Completed |
            | device mobile           | si                                                                           | string       | App Completed |
            | user userState          | logado                                                                       | string       | App Completed |
            | user segment global     | 003001                                                                       | string       | App Completed |
            | profile ID              | profileID                                                                    | regexp named | App Completed |
            | user gender             | gender                                                                       | regexp named | App Completed |
            | user age                | age                                                                          | regexp named | App Completed |
            | global application      | expenses group add in cash                                                   | string       | App Completed |
            | application name        | grupo de gastos anadir gasto en efectivo                                     | string       | App Completed |
            | application type        | operativa                                                                    | string       | App Completed |
            | fulfillment model       | online                                                                       | string       | App Completed |
            | application state       | finalizado                                                                   | string       | App Completed |
            | application step        | pagina exitosa                                                               | string       | App Completed |
            | internal campaign       |                                                                              | empty array  | App Completed |
            | optimization attributes |                                                                              | empty array  | App Completed |
            | products attributes     |                                                                              | empty array  | App Completed |

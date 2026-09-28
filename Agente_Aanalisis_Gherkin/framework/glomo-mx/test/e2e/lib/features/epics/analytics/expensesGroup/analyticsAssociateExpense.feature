@analyticsAssociateExpense
Feature: Analytics - Associate Expense

    @ANA_EVENT_AE001
    @analytics
    @MX @web @ios @android @web-done
    @backend(test) @vbank
    Scenario: Associate Expense - APP ON CLICK START GROUP DETAIL
        Given a user with the following criteria
            | criteria            |
            | associate expenses  |
            | accounts            |
        When the user accesses the expenses group "list"
        And the user enters the "Viaje B" group
        And the analytics interceptor service is initiated
        And the user enters the "associate payment" action from "expenses" section
        Then the analytics events contains the following variables
            | item                    | value                                              | type         | event             |
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
            | global application      | expenses group associate expense                   | string       | App On Click Start |
            | application name        | grupo de gastos asociar gasto                      | string       | App On Click Start |
            | application type        | operativa                                          | string       | App On Click Start |
            | fulfillment model       | online                                             | string       | App On Click Start |
            | application step        | detalle grupo                                      | string       | App On Click Start |
            | internal campaign       |                                                    | empty array  | App On Click Start |
            | optimization attributes |                                                    | empty array  | App On Click Start |
            | products attributes     |                                                    | empty array  | App On Click Start |

    @ANA_EVENT_AE002
    @analytics
    @MX @web @ios @android @web-done
    @backend(test) @vbank
    Scenario: Associate Expense - APP ON CLICK START OPERATIVES
        Given a user with the following criteria
            | criteria            |
            | associate expenses  |
            | accounts            |
        When the user accesses the expenses group "list"
        And the user enters the "Viaje B" group
        And the analytics interceptor service is initiated
        And the user enters the "associate expense more button" action from "expenses" section
        Then the analytics events contains the following variables
            | item                    | value                                                         | type         | event             |
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
            | global application      | expenses group associate expense                              | string       | App On Click Start |
            | application name        | grupo de gastos asociar gasto                                 | string       | App On Click Start |
            | application type        | operativa                                                     | string       | App On Click Start |
            | fulfillment model       | online                                                        | string       | App On Click Start |
            | application step        | detalle grupo                                                 | string       | App On Click Start |
            | internal campaign       |                                                               | empty array  | App On Click Start |
            | optimization attributes |                                                               | empty array  | App On Click Start |
            | products attributes     |                                                               | empty array  | App On Click Start |

    @ANA_EVENT_AE003
    @analytics
    @MX @web @ios @android @web-done
    @backend(test) @vbank
    Scenario: Associate Expense - APP PAGE VISIT
        Given a user with the following criteria
            | criteria            |
            | associate expenses  |
            | accounts            |
        When the user accesses the expenses group "list"
        And the user enters the "Grupo T" group
        And the analytics interceptor service is initiated
        And the user enters the "associate payment" action from "expenses" section
        Then the analytics events contains the following variables
            | item                    | value                                                         | type         | event          |
            | analytics               | analytics/glomo_base                                          | json schema  | App Page Visit |
            | version DL              | 20250414_5.0                                                  | string       | App Page Visit |
            | page name               | app:privada:personas:grupo de gastos:asociar gasto:1 producto | string       | App Page Visit |
            | level 1                 | grupo de gastos                                               | string       | App Page Visit |
            | level 2                 | asociar gasto                                                 | string       | App Page Visit |
            | level 3                 | 1 producto                                                    | string       | App Page Visit |
            | language                | ES                                                            | string       | App Page Visit |
            | page area               | privada                                                       | string       | App Page Visit |
            | page intent             | informacion                                                   | string       | App Page Visit |
            | channel                 | online                                                        | string       | App Page Visit |
            | page instance ID        | de                                                            | string       | App Page Visit |
            | page info version       | appVersion                                                    | regexp named | App Page Visit |
            | page segment            | personas                                                      | string       | App Page Visit |
            | sysEnv                  | app                                                           | string       | App Page Visit |
            | business unit           | BBVA Mexico                                                   | string       | App Page Visit |
            | site app name           | App BBVA Mexico                                               | string       | App Page Visit |
            | project name            | Glomo                                                         | string       | App Page Visit |
            | device mobile           | si                                                            | string       | App Page Visit |
            | user userState          | logado                                                        | string       | App Page Visit |
            | user segment global     | 003001                                                        | string       | App Page Visit |
            | profile ID              | profileID                                                     | regexp named | App Page Visit |
            | user gender             | gender                                                        | regexp named | App Page Visit |
            | user age                | age                                                           | regexp named | App Page Visit |
            | global application      | expenses group associate expense                              | string       | App Page Visit |
            | application name        | grupo de gastos asociar gasto                                 | string       | App Page Visit |
            | application type        | operativa                                                     | string       | App Page Visit |
            | fulfillment model       | online                                                        | string       | App Page Visit |
            | application step        | 1 producto                                                    | string       | App Page Visit |
            | internal campaign       |                                                               | empty array  | App Page Visit |
            | optimization attributes |                                                               | empty array  | App Page Visit |
            | products attributes     |                                                               | empty array  | App Page Visit |

    @ANA_EVENT_AE004
    @analytics
    @MX @web @ios @android @web-done
    @backend(test) @vbank
    Scenario: Associate Expense - APP STARTED
        Given a user with the following criteria
            | criteria       |
            | expenses cards |
        When the user accesses the expenses group "list"
        And the user enters the "associate payment" action from "expenses" section of group "Grupo T"
        And the analytics interceptor service is initiated
        And the account has no movements
        Then the analytics events contains the following variables
            | item                    | value                                                         | type         | event       |
            | analytics               | analytics/glomo_base                                          | json schema  | App Started |
            | version DL              | 20250414_5.0                                                  | string       | App Started |
            | page name               | app:privada:personas:grupo de gastos:asociar gasto:1 producto | string       | App Started |
            | level 1                 | grupo de gastos                                               | string       | App Started |
            | level 2                 | asociar gasto                                                 | string       | App Started |
            | level 3                 | 1 producto                                                    | string       | App Started |
            | language                | ES                                                            | string       | App Started |
            | page area               | privada                                                       | string       | App Started |
            | page intent             | informacion                                                   | string       | App Started |
            | channel                 | online                                                        | string       | App Started |
            | page instance ID        | de                                                            | string       | App Started |
            | page info version       | appVersion                                                    | regexp named | App Started |
            | page segment            | personas                                                      | string       | App Started |
            | sysEnv                  | app                                                           | string       | App Started |
            | business unit           | BBVA Mexico                                                   | string       | App Started |
            | site app name           | App BBVA Mexico                                               | string       | App Started |
            | project name            | Glomo                                                         | string       | App Started |
            | device mobile           | si                                                            | string       | App Started |
            | user userState          | logado                                                        | string       | App Started |
            | user segment global     | 003001                                                        | string       | App Started |
            | profile ID              | profileID                                                     | regexp named | App Started |
            | user gender             | gender                                                        | regexp named | App Started |
            | user age                | age                                                           | regexp named | App Started |
            | global application      | expenses group associate expense                              | string       | App Started |
            | application name        | grupo de gastos asociar gasto                                 | string       | App Started |
            | application type        | operativa                                                     | string       | App Started |
            | fulfillment model       | online                                                        | string       | App Started |
            | application step        | cuentas                                                       | string       | App Started |
            | internal campaign       |                                                               | empty array  | App Started |
            | optimization attributes |                                                               | empty array  | App Started |
            | products attributes     |                                                               | empty array  | App Started |

    @ANA_EVENT_AE005
    @analytics
    @MX @web @ios @android @web-done
    @backend(test) @vbank
    Scenario: Associate Expense - APP STEP 2
        Given a user with the following criteria
            | criteria       |
            | expenses cards |
        When the user accesses the expenses group "list"
        And the user enters the "associate payment" action from "expenses" section of group "Viaje B"
        And the analytics interceptor service is initiated
        And the account has no movements
        Then the analytics events contains the following variables
            | item                                                       | value                                                           | type         | event      |
            | analytics                                                  | analytics/glomo_base                                            | json schema  | App Step 2 |
            | version DL                                                 | 20250414_5.0                                                    | string       | App Step 2 |
            | page name                                                  | app:privada:personas:grupo de gastos:asociar gasto:2 movimiento | string       | App Step 2 |
            | level 1                                                    | grupo de gastos                                                 | string       | App Step 2 |
            | level 2                                                    | asociar gasto                                                   | string       | App Step 2 |
            | level 3                                                    | 2 movimiento                                                    | string       | App Step 2 |
            | language                                                   | ES                                                              | string       | App Step 2 |
            | page area                                                  | privada                                                         | string       | App Step 2 |
            | page intent                                                | informacion                                                     | string       | App Step 2 |
            | channel                                                    | online                                                          | string       | App Step 2 |
            | page instance ID                                           | de                                                              | string       | App Step 2 |
            | page info version                                          | appVersion                                                      | regexp named | App Step 2 |
            | page segment                                               | personas                                                        | string       | App Step 2 |
            | sysEnv                                                     | app                                                             | string       | App Step 2 |
            | business unit                                              | BBVA Mexico                                                     | string       | App Step 2 |
            | site app name                                              | App BBVA Mexico                                                 | string       | App Step 2 |
            | project name                                               | Glomo                                                           | string       | App Step 2 |
            | device mobile                                              | si                                                              | string       | App Step 2 |
            | user userState                                             | logado                                                          | string       | App Step 2 |
            | user segment global                                        | 003001                                                          | string       | App Step 2 |
            | profile ID                                                 | profileID                                                       | regexp named | App Step 2 |
            | user gender                                                | gender                                                          | regexp named | App Step 2 |
            | user age                                                   | age                                                             | regexp named | App Step 2 |
            | global application                                         | expenses group associate expense                                | string       | App Step 2 |
            | application name                                           | grupo de gastos asociar gasto                                   | string       | App Step 2 |
            | application type                                           | operativa                                                       | string       | App Step 2 |
            | fulfillment model                                          | online                                                          | string       | App Step 2 |
            | application step                                           | 2 movimiento                                                    | string       | App Step 2 |
            | product primary category                                   | cuentas                                                         | string       | App Step 2 |
            | product subtype                                            |                                                                 | empty array  | App Step 2 |
            | product name                                               | tarjeta nomina basica bbva                                      | string       | App Step 2 |
            | internal campaign                                          |                                                                 | empty array  | App Step 2 |
            | optimization attributes                                    |                                                                 | empty array  | App Step 2 |

    @ANA_EVENT_AE006
    @analytics
    @MX @web @ios @android @web-done
    @backend(test) @vbank
    Scenario: Associate Expense - APP STEP 3
        Given a user with the following criteria
            | criteria                   |
            | associate expenses group   |
        When the user accesses the expenses group "list"
        And the user enters the "associate payment" action from "expenses" section of group "Prueba"
        And the analytics interceptor service is initiated
        And the user modifies the concept from associate expenses
        Then the analytics events contains the following variables
            | item                                                       | value                                                                      | type         | event      |
            | analytics                                                  | analytics/glomo_base                                                       | json schema  | App Step 3 |
            | version DL                                                 | 20250414_5.0                                                               | string       | App Step 3 |
            | page name                                                  | app:privada:personas:grupo de gastos:asociar gasto:3 informacion del gasto | string       | App Step 3 |
            | level 1                                                    | grupo de gastos                                                            | string       | App Step 3 |
            | level 2                                                    | asociar gasto                                                              | string       | App Step 3 |
            | level 3                                                    | 3 informacion del gasto                                                    | string       | App Step 3 |
            | language                                                   | ES                                                                         | string       | App Step 3 |
            | page area                                                  | privada                                                                    | string       | App Step 3 |
            | page intent                                                | informacion                                                                | string       | App Step 3 |
            | channel                                                    | online                                                                     | string       | App Step 3 |
            | page instance ID                                           | de                                                                         | string       | App Step 3 |
            | page info version                                          | appVersion                                                                 | regexp named | App Step 3 |
            | page segment                                               | personas                                                                   | string       | App Step 3 |
            | sysEnv                                                     | app                                                                        | string       | App Step 3 |
            | business unit                                              | BBVA Mexico                                                                | string       | App Step 3 |
            | site app name                                              | App BBVA Mexico                                                            | string       | App Step 3 |
            | project name                                               | Glomo                                                                      | string       | App Step 3 |
            | device mobile                                              | si                                                                         | string       | App Step 3 |
            | user userState                                             | logado                                                                     | string       | App Step 3 |
            | user segment global                                        | 003001                                                                     | string       | App Step 3 |
            | profile ID                                                 | profileID                                                                  | regexp named | App Step 3 |
            | user gender                                                | gender                                                                     | regexp named | App Step 3 |
            | user age                                                   | age                                                                        | regexp named | App Step 3 |
            | global application                                         | expenses group associate expense                                           | string       | App Step 3 |
            | application name                                           | grupo de gastos asociar gasto                                              | string       | App Step 3 |
            | application type                                           | operativa                                                                  | string       | App Step 3 |
            | fulfillment model                                          | online                                                                     | string       | App Step 3 |
            | application step                                           | 3 informacion del gasto                                                    | string       | App Step 3 |
            | product primary category                                   | tarjetas                                                                   | string       | App Step 3 |
            | product subtype                                            |                                                                            | empty array  | App Step 3 |
            | product name                                               | rayados bbva                                                               | string       | App Step 3 |
            | internal campaign                                          |                                                                            | empty array  | App Step 3 |
            | optimization attributes                                    |                                                                            | empty array  | App Step 3 |

    @ANA_EVENT_AE007
    @analytics
    @MX @web @ios @android @web-done
    @backend(test) @vbank
    Scenario: Associate Expense - APP STEP 4
        Given a user with the following criteria
            | criteria                   |
            | associate expenses group   |
        When the user accesses the expenses group "list"
        And the user enters the "associate payment" action from "expenses" section of group "Prueba"
        And the analytics interceptor service is initiated
        And the user modifies the concept from associate expenses
        Then the analytics events contains the following variables
            | item                                                       | value                                                                        | type         | event      |
            | analytics                                                  | analytics/glomo_base                                                         | json schema  | App Step 4 |
            | version DL                                                 | 20250414_5.0                                                                 | string       | App Step 4 |
            | page name                                                  | app:privada:personas:grupo de gastos:asociar gasto:4 configuracion del gasto | string       | App Step 4 |
            | level 1                                                    | grupo de gastos                                                              | string       | App Step 4 |
            | level 2                                                    | asociar gasto                                                                | string       | App Step 4 |
            | level 3                                                    | 4 configuracion del gasto                                                    | string       | App Step 4 |
            | language                                                   | ES                                                                           | string       | App Step 4 |
            | page area                                                  | privada                                                                      | string       | App Step 4 |
            | page intent                                                | informacion                                                                  | string       | App Step 4 |
            | channel                                                    | online                                                                       | string       | App Step 4 |
            | page instance ID                                           | de                                                                           | string       | App Step 4 |
            | page info version                                          | appVersion                                                                   | regexp named | App Step 4 |
            | page segment                                               | personas                                                                     | string       | App Step 4 |
            | sysEnv                                                     | app                                                                          | string       | App Step 4 |
            | business unit                                              | BBVA Mexico                                                                  | string       | App Step 4 |
            | site app name                                              | App BBVA Mexico                                                              | string       | App Step 4 |
            | project name                                               | Glomo                                                                        | string       | App Step 4 |
            | device mobile                                              | si                                                                           | string       | App Step 4 |
            | user userState                                             | logado                                                                       | string       | App Step 4 |
            | user segment global                                        | 003001                                                                       | string       | App Step 4 |
            | profile ID                                                 | profileID                                                                    | regexp named | App Step 4 |
            | user gender                                                | gender                                                                       | regexp named | App Step 4 |
            | user age                                                   | age                                                                          | regexp named | App Step 4 |
            | global application                                         | expenses group associate expense                                             | string       | App Step 4 |
            | application name                                           | grupo de gastos asociar gasto                                                | string       | App Step 4 |
            | application type                                           | operativa                                                                    | string       | App Step 4 |
            | fulfillment model                                          | online                                                                       | string       | App Step 4 |
            | application step                                           | 4 configuracion del gasto                                                    | string       | App Step 4 |
            | product primary category                                   | tarjetas                                                                     | string       | App Step 4 |
            | product subtype                                            |                                                                              | string       | App Step 4 |
            | product name                                               | rayados bbva                                                                 | string       | App Step 4 |
            | product amount                                             | 169                                                                          | string       | App Step 4 |
            | product currency                                           | MXN                                                                          | string       | App Step 4 |
            | internal campaign                                          |                                                                              | empty array  | App Step 4 |
            | optimization attributes                                    |                                                                              | empty array  | App Step 4 |

    @ANA_EVENT_AE008
    @analytics @MX
    @web @ios @android
    @backend(test) @vbank @web-done
    Scenario: Associate Expense - APP STEP 5
        Given a user with the following criteria
            | criteria                   |
            | associate expenses group   |
        When the user accesses the expenses group "list"
        And the user enters the "associate payment" action from "expenses" section of group "Prueba"
        And the analytics interceptor service is initiated
        And the user associates an expense
        Then the analytics events contains the following variables
            | item                                                       | value                                                             | type         | event      |
            | analytics                                                  | analytics/glomo_base                                              | json schema  | App Step 5 |
            | version DL                                                 | 20250414_5.0                                                      | string       | App Step 5 |
            | page name                                                  | app:privada:personas:grupo de gastos:asociar gasto:5 confirmacion | string       | App Step 5 |
            | level 1                                                    | grupo de gastos                                                   | string       | App Step 5 |
            | level 2                                                    | asociar gasto                                                     | string       | App Step 5 |
            | level 3                                                    | 5 confirmacion                                                    | string       | App Step 5 |
            | language                                                   | ES                                                                | string       | App Step 5 |
            | page area                                                  | privada                                                           | string       | App Step 5 |
            | page intent                                                | informacion                                                       | string       | App Step 5 |
            | channel                                                    | online                                                            | string       | App Step 5 |
            | page instance ID                                           | de                                                                | string       | App Step 5 |
            | page info version                                          | appVersion                                                        | regexp named | App Step 5 |
            | page segment                                               | personas                                                          | string       | App Step 5 |
            | sysEnv                                                     | app                                                               | string       | App Step 5 |
            | business unit                                              | BBVA Mexico                                                       | string       | App Step 5 |
            | site app name                                              | App BBVA Mexico                                                   | string       | App Step 5 |
            | project name                                               | Glomo                                                             | string       | App Step 5 |
            | device mobile                                              | si                                                                | string       | App Step 5 |
            | user userState                                             | logado                                                            | string       | App Step 5 |
            | user segment global                                        | 003001                                                            | string       | App Step 5 |
            | profile ID                                                 | profileID                                                         | regexp named | App Step 5 |
            | user gender                                                | gender                                                            | regexp named | App Step 5 |
            | user age                                                   | age                                                               | regexp named | App Step 5 |
            | global application                                         | expenses group associate expense                                  | string       | App Step 5 |
            | application name                                           | grupo de gastos asociar gasto                                     | string       | App Step 5 |
            | application type                                           | operativa                                                         | string       | App Step 5 |
            | fulfillment model                                          | online                                                            | string       | App Step 5 |
            | application step                                           | 5 confirmacion                                                    | string       | App Step 5 |
            | product primary category                                   | tarjetas                                                          | string       | App Step 5 |
            | product subtype                                            |                                                                   | empty array  | App Step 5 |
            | product name                                               | rayados bbva	                                                     | string       | App Step 5 |
            | product amount                                             | 169                                                               | string       | App Step 5 |
            | product currency                                           | MXN                                                               | string       | App Step 5 |
            | internal campaign                                          |                                                                   | empty array  | App Step 5 |
            | optimization attributes                                    |                                                                   | empty array  | App Step 5 |

    @ANA_EVENT_AE009
    @analytics
    @MX @web @ios @android @web-done
    @backend(test) @vbank
    Scenario: Associate Expense - APP COMPLETED - FINALIZADO
        Given a user with the following criteria
            | criteria                   |
            | associate expenses group   |
        When the user accesses the expenses group "list"
        And the user enters the "associate payment" action from "expenses" section of group "Prueba"
        And the analytics interceptor service is initiated
        And the user associates an expense
        Then the analytics events contains the following variables
            | item                                                       | value                                                             | type         | event         |
            | analytics                                                  | analytics/glomo_base                                              | json schema  | App Completed |
            | version DL                                                 | 20250414_5.0                                                      | string       | App Completed |
            | page name                                                  | app:privada:personas:grupo de gastos:asociar gasto:pagina exitosa | string       | App Completed |
            | level 1                                                    | grupo de gastos                                                   | string       | App Completed |
            | level 2                                                    | asociar gasto                                                     | string       | App Completed |
            | level 3                                                    | pagina exitosa                                                    | string       | App Completed |
            | language                                                   | ES                                                                | string       | App Completed |
            | page area                                                  | privada                                                           | string       | App Completed |
            | page intent                                                | informacion                                                       | string       | App Completed |
            | channel                                                    | online                                                            | string       | App Completed |
            | page instance ID                                           | de                                                                | string       | App Completed |
            | page info version                                          | appVersion                                                        | regexp named | App Completed |
            | page segment                                               | personas                                                          | string       | App Completed |
            | sysEnv                                                     | app                                                               | string       | App Completed |
            | business unit                                              | BBVA Mexico                                                       | string       | App Completed |
            | site app name                                              | App BBVA Mexico                                                   | string       | App Completed |
            | project name                                               | Glomo                                                             | string       | App Completed |
            | device mobile                                              | si                                                                | string       | App Completed |
            | user userState                                             | logado                                                            | string       | App Completed |
            | user segment global                                        | 003001                                                            | string       | App Completed |
            | profile ID                                                 | profileID                                                         | regexp named | App Completed |
            | user gender                                                | gender                                                            | regexp named | App Completed |
            | user age                                                   | age                                                               | regexp named | App Completed |
            | global application                                         | expenses group associate expense                                  | string       | App Completed |
            | application name                                           | grupo de gastos asociar gasto                                     | string       | App Completed |
            | application type                                           | operativa                                                         | string       | App Completed |
            | fulfillment model                                          | online                                                            | string       | App Completed |
            | application state                                          | finalizado                                                        | string       | App Completed |
            | application step                                           | pagina exitosa                                                    | string       | App Completed |
            | product primary category                                   | tarjetas                                                          | string       | App Completed |
            | product subtype                                            |                                                                   | string       | App Completed |
            | product name                                               | rayados bbva	                                                     | string       | App Completed |
            | product amount                                             | 169                                                               | string       | App Completed |
            | product currency                                           | MXN                                                               | string       | App Completed |
            | internal campaign                                          |                                                                   | empty array  | App Completed |
            | optimization attributes                                    |                                                                   | empty array  | App Completed |

    @ANA_EVENT_AE010
    @analytics
    @MX @web @ios @android @web-done
    @backend(test) @vbank
    Scenario: Associate Expense - HUELLA - EDIT PAYMENTS
        Given a user with the following criteria
            | criteria            |
            | associate expenses  |
            | accounts            |
        When the user accesses the expenses group "list"
        And the user enters the "associate payment" action from "expenses" section of group "Viaje B"
        And the analytics interceptor service is initiated
        And the user spends settings do not change
        Then the analytics events contains the following variables
            | item                    | value                                                           | type             | event     |
            | analytics               | analytics/glomo_base                                            | json schema      | Page View |
            | version DL              | 20250414_5.0                                                    | string           | Page View |
            | page name               | app:privada:personas:grupo de gastos:asociar gasto:editar pagos | string           | Page View |
            | level 1                 | grupo de gastos                                                 | string           | Page View |
            | level 2                 | asociar gasto                                                   | string           | Page View |
            | level 3                 | editar pagos                                                    | string           | Page View |
            | language                | ES                                                              | string           | Page View |
            | page area               | privada                                                         | string           | Page View |
            | page intent             | informacion                                                     | string           | Page View |
            | channel                 | online                                                          | string           | Page View |
            | page instance ID        | de                                                              | string           | Page View |
            | page info version       | appVersion                                                      | regexp named     | Page View |
            | page segment            | personas                                                        | string           | Page View |
            | sysEnv                  | app                                                             | string           | Page View |
            | business unit           | BBVA Mexico                                                     | string           | Page View |
            | site app name           | App BBVA Mexico                                                 | string           | Page View |
            | project name            | Glomo                                                           | string           | Page View |
            | device mobile           | si                                                              | string           | Page View |
            | user userState          | logado                                                          | string           | Page View |
            | user segment global     | 003001                                                          | string           | Page View |
            | profile ID              | profileID                                                       | regexp named     | Page View |
            | user gender             | gender                                                          | regexp named     | Page View |
            | user age                | age                                                             | regexp named     | Page View |
            | internal campaign       |                                                                 | empty array      | Page View |
            | optimization attributes |                                                                 | empty array      | Page View |
            | application             |                                                                 | empty str object | Page View |
            | products attributes     |                                                                 | empty array      | Page View |

    @ANA_EVENT_AE011
    @analytics
    @MX @web @ios @android @web-done
    @backend(test) @vbank
    Scenario: Associate Expense - HUELLA
        Given a user with the following criteria
            | criteria                  |
            | expenses group validation |
        When the user accesses the expenses group "list"
        And the user enters the "associate payment" action from "expenses" section of group "Viaje T"
        And the analytics interceptor service is initiated
        And the user divides the expense by modifying an amount to a user
        Then the analytics events contains the following variables
            | item                    | value                                                                 | type             | event     |
            | analytics               | analytics/glomo_base                                                  | json schema      | Page View |
            | version DL              | 20250414_5.0                                                          | string           | Page View |
            | page name               | app:privada:personas:grupo de gastos:asociar gasto:division del gasto | string           | Page View |
            | level 1                 | grupo de gastos                                                       | string           | Page View |
            | level 2                 | asociar gasto                                                         | string           | Page View |
            | level 3                 | division del gasto                                                    | string           | Page View |
            | language                | ES                                                                    | string           | Page View |
            | page area               | privada                                                               | string           | Page View |
            | page intent             | informacion                                                           | string           | Page View |
            | channel                 | online                                                                | string           | Page View |
            | page instance ID        | de                                                                    | string           | Page View |
            | page info version       | appVersion                                                            | regexp named     | Page View |
            | page segment            | personas                                                              | string           | Page View |
            | sysEnv                  | app                                                                   | string           | Page View |
            | business unit           | BBVA Mexico                                                           | string           | Page View |
            | site app name           | App BBVA Mexico                                                       | string           | Page View |
            | project name            | Glomo                                                                 | string           | Page View |
            | device mobile           | si                                                                    | string           | Page View |
            | user userState          | logado                                                                | string           | Page View |
            | user segment global     | 003001                                                                | string           | Page View |
            | profile ID              | profileID                                                             | regexp named     | Page View |
            | user gender             | gender                                                                | regexp named     | Page View |
            | user age                | age                                                                   | regexp named     | Page View |
            | internal campaign       |                                                                       | empty array      | Page View |
            | optimization attributes |                                                                       | empty array      | Page View |
            | application             |                                                                       | empty str object | Page View |
            | products attributes     |                                                                       | empty array      | Page View |

    @ANA_EVENT_AE012
    @analytics
    @MX @web @ios @android @web-done
    @backend(test) @vbank
    Scenario: Associate Expense - ERROR OPERATION UNAVAILABLE
        Given a user with the following criteria
            | criteria            |
            | associate expenses  |
            | accounts            |
        When the user accesses the expenses group "list"
        And the user enters the "Viaje B" group
        And the analytics interceptor service is initiated
        And the user enters the "associate payment" action from "expenses" section
        Then the analytics events contains the following variables
            | item                    | value                                                                            | type             | event     |
            | analytics               | analytics/glomo_base                                                             | json schema      | Page View |
            | version DL              | 20250414_5.0                                                                     | string           | Page View |
            | page name               | app:privada:personas:grupo de gastos:asociar gasto:error operacion no disponible | string           | Page View |
            | level 1                 | grupo de gastos                                                                  | string           | Page View |
            | level 2                 | asociar gasto                                                                    | string           | Page View |
            | level 3                 | error operacion no disponible                                                    | string           | Page View |
            | language                | ES                                                                               | string           | Page View |
            | page area               | privada                                                                          | string           | Page View |
            | page intent             | informacion                                                                      | string           | Page View |
            | channel                 | online                                                                           | string           | Page View |
            | page instance ID        | de                                                                               | string           | Page View |
            | page info version       | appVersion                                                                       | regexp named     | Page View |
            | page segment            | personas                                                                         | string           | Page View |
            | sysEnv                  | app                                                                              | string           | Page View |
            | business unit           | BBVA Mexico                                                                      | string           | Page View |
            | site app name           | App BBVA Mexico                                                                  | string           | Page View |
            | project name            | Glomo                                                                            | string           | Page View |
            | device mobile           | si                                                                               | string           | Page View |
            | user userState          | logado                                                                           | string           | Page View |
            | user segment global     | 003001                                                                           | string           | Page View |
            | profile ID              | profileID                                                                        | regexp named     | Page View |
            | user gender             | gender                                                                           | regexp named     | Page View |
            | user age                | age                                                                              | regexp named     | Page View |
            | error page              | error operacion no disponible                                                    | string           | Page View |
            | internal campaign       |                                                                                  | empty array      | Page View |
            | optimization attributes |                                                                                  | empty array      | Page View |
            | application             |                                                                                  | empty str object | Page View |
            | products attributes     |                                                                                  | empty array      | Page View |

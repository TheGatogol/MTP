@financePaymentDashboardAnalytics
Feature: Analytics - Finance Payment Dashboard

    @ANA_EVENT_FTMH001
    @analytics
    @ios @android @web @web-done
    @MX @backend(test) @vbank
    Scenario: Access selecting a purchase in the carousel - App On Click Start
        Given a user with the following criteria
            | criteria           |
            | financing line     |
            | offers detail card |
        And the user accesses to the "operative" "debit" card product detail
        And the analytics interceptor service is initiated
        When the user accesses to finance transaction multipurchase debit post hiring from "defer"
        Then the analytics events contains the following variables
            | item                     | value                                                          | type         | event              |
            | analytics                | analytics/glomo_base                                           | json schema  | App On Click Start |
            | version DL               | 20250414_5.0                                                   | string       | App On Click Start |
            | page name                | app:privada:personas:tarjetas:debito:compras diferidas:detalle | string       | App On Click Start |
            | level 1                  | tarjetas                                                       | string       | App On Click Start |
            | level 2                  | debito                                                         | string       | App On Click Start |
            | level 3                  | compras diferidas                                              | string       | App On Click Start |
            | level 4                  | detalle                                                        | string       | App On Click Start |
            | language                 | ES                                                             | string       | App On Click Start |
            | page area                | privada                                                        | string       | App On Click Start |
            | page intent              | informacion                                                    | string       | App On Click Start |
            | channel                  | online                                                         | string       | App On Click Start |
            | page instance ID         | de                                                             | string       | App On Click Start |
            | page info version        | appVersion                                                     | regexp named | App On Click Start |
            | page segment             | personas                                                       | string       | App On Click Start |
            | sysEnv                   | app                                                            | string       | App On Click Start |
            | business unit            | BBVA Mexico                                                    | string       | App On Click Start |
            | site app name            | App BBVA Mexico                                                | string       | App On Click Start |
            | project name             | DIY Payments                                                   | string       | App On Click Start |
            | device mobile            | si                                                             | string       | App On Click Start |
            | user userState           | logado                                                         | string       | App On Click Start |
            | profile ID               | profileID                                                      | regexp named | App On Click Start |
            | user segment global      | 003001                                                         | string       | App On Click Start |
            | user gender              | gender                                                         | regexp named | App On Click Start |
            | user age                 | age                                                            | regexp named | App On Click Start |
            | global application       | purchase financing deferral                                    | string       | App On Click Start |
            | application name         | compras diferidas                                              | string       | App On Click Start |
            | application type         | operativa                                                      | string       | App On Click Start |
            | application step         | diferir                                                        | string       | App On Click Start |
            | fulfillment model        | online                                                         | string       | App On Click Start |
            | product primary category | tarjetas                                                       | string       | App On Click Start |
            | product subtype          | tarjetas debito                                                | string       | App On Click Start |
            | internal campaign        |                                                                | empty array  | App On Click Start |
            | optimization attributes  |                                                                | empty array  | App On Click Start |

    @ANA_EVENT_FTMH002
    @analytics
    @ios @android @web @web-done
    @MX @backend(test) @vbank
    Scenario: Access from payment dashboard - App On Click Start
        Given a user with the following criteria
            | criteria           |
            | financing line     |
            | offers detail card |
        And the user accesses to the "operative" "debit" card product detail
        And the user accesses to Financing Dashboard
        And the analytics interceptor service is initiated
        When the user accesses to finance transaction multipurchase debit post hiring
        Then the analytics events contains the following variables
            | item                     | value                                                            | type         | event              |
            | analytics                | analytics/glomo_base                                             | json schema  | App On Click Start |
            | version DL               | 20250414_5.0                                                     | string       | App On Click Start |
            | page name                | app:privada:personas:tarjetas:debito:compras diferidas:operativa | string       | App On Click Start |
            | level 1                  | tarjetas                                                         | string       | App On Click Start |
            | level 2                  | debito                                                           | string       | App On Click Start |
            | level 3                  | compras diferidas                                                | string       | App On Click Start |
            | level 4                  | operativa                                                        | string       | App On Click Start |
            | language                 | ES                                                               | string       | App On Click Start |
            | page area                | privada                                                          | string       | App On Click Start |
            | page intent              | informacion                                                      | string       | App On Click Start |
            | channel                  | online                                                           | string       | App On Click Start |
            | page instance ID         | de                                                               | string       | App On Click Start |
            | page info version        | appVersion                                                       | regexp named | App On Click Start |
            | page segment             | personas                                                         | string       | App On Click Start |
            | sysEnv                   | app                                                              | string       | App On Click Start |
            | business unit            | BBVA Mexico                                                      | string       | App On Click Start |
            | site app name            | App BBVA Mexico                                                  | string       | App On Click Start |
            | project name             | DIY Payments                                                     | string       | App On Click Start |
            | device mobile            | si                                                               | string       | App On Click Start |
            | user userState           | logado                                                           | string       | App On Click Start |
            | profile ID               | profileID                                                        | regexp named | App On Click Start |
            | user segment global      | 003001                                                           | string       | App On Click Start |
            | user gender              | gender                                                           | regexp named | App On Click Start |
            | user age                 | age                                                              | regexp named | App On Click Start |
            | global application       | purchase financing deferral                                      | string       | App On Click Start |
            | application name         | compras diferidas                                                | string       | App On Click Start |
            | application type         | operativa                                                        | string       | App On Click Start |
            | application step         | diferir compras                                                  | string       | App On Click Start |
            | fulfillment model        | online                                                           | string       | App On Click Start |
            | product primary category | tarjetas                                                         | string       | App On Click Start |
            | product subtype          | tarjetas debito                                                  | string       | App On Click Start |
            | internal campaign        |                                                                  | empty array  | App On Click Start |
            | optimization attributes  |                                                                  | empty array  | App On Click Start |

    @ANA_EVENT_FTMH003
    @analytics
    @ios @android @web @web-done
    @MX @backend(test) @vbank
    Scenario: Selects a purchase from purchases list - App On Click Start - App Page Visit
        Given a user with the following criteria
            | criteria           |
            | financing line     |
            | offers detail card |
        And the user accesses to the "operative" "debit" card product detail
        And the user accesses to Financing Dashboard
        And the analytics interceptor service is initiated
        When the user selects a deferrable purchase
        Then the analytics events contains the following variables
            | item                     | value                                                                        | type         | event                              |
            | analytics                | analytics/glomo_base                                                         | json schema  | App On Click Start, App Page Visit |
            | version DL               | 20250414_5.0                                                                 | string       | App On Click Start, App Page Visit |
            | page name                | app:privada:personas:tarjetas:debito:compras diferidas:operativa             | string       | App On Click Start                 |
            | page name                | app:privada:personas:tarjetas:debito:compras diferidas:1 seleccion de compra | string       | App Page Visit                     |
            | level 1                  | tarjetas                                                                     | string       | App On Click Start, App Page Visit |
            | level 2                  | debito                                                                       | string       | App On Click Start, App Page Visit |
            | level 3                  | compras diferidas                                                            | string       | App On Click Start, App Page Visit |
            | level 4                  | operativa                                                                    | string       | App On Click Start                 |
            | level 4                  | 1 seleccion de compra                                                        | string       | App Page Visit                     |
            | language                 | ES                                                                           | string       | App On Click Start, App Page Visit |
            | page area                | privada                                                                      | string       | App On Click Start, App Page Visit |
            | page intent              | informacion                                                                  | string       | App On Click Start                 |
            | page intent              | transaccion                                                                  | string       | App Page Visit                     |
            | channel                  | online                                                                       | string       | App On Click Start, App Page Visit |
            | page instance ID         | de                                                                           | string       | App On Click Start, App Page Visit |
            | page info version        | appVersion                                                                   | regexp named | App On Click Start, App Page Visit |
            | page segment             | personas                                                                     | string       | App On Click Start, App Page Visit |
            | sysEnv                   | app                                                                          | string       | App On Click Start, App Page Visit |
            | business unit            | BBVA Mexico                                                                  | string       | App On Click Start, App Page Visit |
            | site app name            | App BBVA Mexico                                                              | string       | App On Click Start, App Page Visit |
            | project name             | DIY Payments                                                                 | string       | App On Click Start, App Page Visit |
            | device mobile            | si                                                                           | string       | App On Click Start, App Page Visit |
            | user userState           | logado                                                                       | string       | App On Click Start, App Page Visit |
            | profile ID               | profileID                                                                    | regexp named | App On Click Start, App Page Visit |
            | user segment global      | 003001                                                                       | string       | App On Click Start, App Page Visit |
            | user gender              | gender                                                                       | regexp named | App On Click Start, App Page Visit |
            | user age                 | age                                                                          | regexp named | App On Click Start, App Page Visit |
            | global application       | purchase financing deferral                                                  | string       | App On Click Start, App Page Visit |
            | application name         | compras diferidas                                                            | string       | App On Click Start, App Page Visit |
            | application type         | operativa                                                                    | string       | App On Click Start, App Page Visit |
            | application step         | diferir                                                                      | string       | App On Click Start                 |
            | application step         | 1 seleccion de compra                                                        | string       | App Page Visit                     |
            | fulfillment model        | online                                                                       | string       | App On Click Start, App Page Visit |
            | product primary category | tarjetas                                                                     | string       | App On Click Start, App Page Visit |
            | product subtype          | tarjetas debito                                                              | string       | App On Click Start, App Page Visit |
            | custom fields            | diferimiento:british columbia can                                            | string       | App Page Visit                     |
            | internal campaign        |                                                                              | empty array  | App On Click Start, App Page Visit |
            | optimization attributes  |                                                                              | empty array  | App On Click Start, App Page Visit |

    @ANA_EVENT_FTMH004
    @analytics
    @ios @android @web @web-done
    @MX @backend(test) @vbank
    Scenario Outline: Selects a <element> element from step - App Started
        Given a user with the following criteria
            | criteria           |
            | financing line     |
            | offers detail card |
        And the user accesses to the "operative" "debit" card product detail
        And the analytics interceptor service is initiated
        And the user accesses to finance transaction multipurchase debit post hiring from "defer"
        When the user selects "<element>" element on step
        Then the analytics events contains the following variables
            | item                     | value                                                                        | type         | event       |
            | analytics                | analytics/glomo_base                                                         | json schema  | App Started |
            | version DL               | 20250414_5.0                                                                 | string       | App Started |
            | page name                | app:privada:personas:tarjetas:debito:compras diferidas:1 seleccion de compra | string       | App Started |
            | level 1                  | tarjetas                                                                     | string       | App Started |
            | level 2                  | debito                                                                       | string       | App Started |
            | level 3                  | compras diferidas                                                            | string       | App Started |
            | level 4                  | 1 seleccion de compra                                                        | string       | App Started |
            | language                 | ES                                                                           | string       | App Started |
            | page area                | privada                                                                      | string       | App Started |
            | page intent              | transaccion                                                                  | string       | App Started |
            | channel                  | online                                                                       | string       | App Started |
            | page instance ID         | de                                                                           | string       | App Started |
            | page info version        | appVersion                                                                   | regexp named | App Started |
            | page segment             | personas                                                                     | string       | App Started |
            | sysEnv                   | app                                                                          | string       | App Started |
            | business unit            | BBVA Mexico                                                                  | string       | App Started |
            | site app name            | App BBVA Mexico                                                              | string       | App Started |
            | project name             | DIY Payments                                                                 | string       | App Started |
            | device mobile            | si                                                                           | string       | App Started |
            | user userState           | logado                                                                       | string       | App Started |
            | profile ID               | profileID                                                                    | regexp named | App Started |
            | user segment global      | 003001                                                                       | string       | App Started |
            | user gender              | gender                                                                       | regexp named | App Started |
            | user age                 | age                                                                          | regexp named | App Started |
            | global application       | purchase financing deferral                                                  | string       | App Started |
            | application name         | compras diferidas                                                            | string       | App Started |
            | application type         | operativa                                                                    | string       | App Started |
            | application step         | <step>                                                                       | string       | App Started |
            | fulfillment model        | online                                                                       | string       | App Started |
            | product primary category | tarjetas                                                                     | string       | App Started |
            | product subtype          | tarjetas debito                                                              | string       | App Started |
            | custom fields            | diferimiento:british columbia can                                            | string       | App Started |
            | internal campaign        |                                                                              | empty array  | App Started |
            | optimization attributes  |                                                                              | empty array  | App Started |

        Examples:
            | element             | step               |
            | view more purchases | mostrar mas        |
            | purchase checkbox   | seleccionar compra |
            | continue button     | continuar          |

    @ANA_EVENT_FTMH005
    @analytics
    @ios @android @web @web-done
    @MX @backend(test) @vbank
    Scenario: Selects a purchase and continue - App Step 2
        Given a user with the following criteria
            | criteria           |
            | financing line     |
            | offers detail card |
        And the user accesses to the "operative" "debit" card product detail
        And the user accesses to Financing Dashboard
        And the analytics interceptor service is initiated
        And the user accesses to finance transaction multipurchase debit post hiring
        When the user to enter to months to defer step with a purchase "917" and "874"
        Then the analytics events contains the following variables
            | item                     | value                                                                    | type         | event      |
            | analytics                | analytics/glomo_base                                                     | json schema  | App Step 2 |
            | version DL               | 20250414_5.0                                                             | string       | App Step 2 |
            | page name                | app:privada:personas:tarjetas:debito:compras diferidas:2 meses a diferir | string       | App Step 2 |
            | level 1                  | tarjetas                                                                 | string       | App Step 2 |
            | level 2                  | debito                                                                   | string       | App Step 2 |
            | level 3                  | compras diferidas                                                        | string       | App Step 2 |
            | level 4                  | 2 meses a diferir                                                        | string       | App Step 2 |
            | language                 | ES                                                                       | string       | App Step 2 |
            | page area                | privada                                                                  | string       | App Step 2 |
            | page intent              | transaccion                                                              | string       | App Step 2 |
            | channel                  | online                                                                   | string       | App Step 2 |
            | page instance ID         | de                                                                       | string       | App Step 2 |
            | page info version        | appVersion                                                               | regexp named | App Step 2 |
            | page segment             | personas                                                                 | string       | App Step 2 |
            | sysEnv                   | app                                                                      | string       | App Step 2 |
            | business unit            | BBVA Mexico                                                              | string       | App Step 2 |
            | site app name            | App BBVA Mexico                                                          | string       | App Step 2 |
            | project name             | DIY Payments                                                             | string       | App Step 2 |
            | device mobile            | si                                                                       | string       | App Step 2 |
            | user userState           | logado                                                                   | string       | App Step 2 |
            | profile ID               | profileID                                                                | regexp named | App Step 2 |
            | user segment global      | 003001                                                                   | string       | App Step 2 |
            | user gender              | gender                                                                   | regexp named | App Step 2 |
            | user age                 | age                                                                      | regexp named | App Step 2 |
            | global application       | purchase financing deferral                                              | string       | App Step 2 |
            | application name         | compras diferidas                                                        | string       | App Step 2 |
            | application type         | operativa                                                                | string       | App Step 2 |
            | application step         | 2 meses a diferir                                                        | string       | App Step 2 |
            | fulfillment model        | online                                                                   | string       | App Step 2 |
            | custom fields            | diferimiento:british columbia can,diferimiento:mas vision las haciend    | string       | App Step 2 |
            | product primary category | tarjetas                                                                 | string       | App Step 2 |
            | product subtype          | tarjetas debito                                                          | string       | App Step 2 |
            | internal campaign        |                                                                          | empty array  | App Step 2 |
            | optimization attributes  |                                                                          | empty array  | App Step 2 |

    @ANA_EVENT_FTMH006
    @analytics
    @ios @android @web @web-done
    @MX @backend(test) @vbank
    Scenario: Selects months to defer - App Step 3
        Given a user with the following criteria
            | criteria           |
            | financing line     |
            | offers detail card |
        And the user accesses to the "operative" "debit" card product detail
        And the user accesses to Financing Dashboard
        And the analytics interceptor service is initiated
        And the user accesses to finance transaction multipurchase debit post hiring
        And the user to enter to months to defer step with a purchase "917" and "874"
        When the user enters to terms and conditions with a period of "6" months
        Then the analytics events contains the following variables
            | item                       | value                                                                 | type         | event      |
            | analytics                  | analytics/glomo_base                                                  | json schema  | App Step 3 |
            | version DL                 | 20250414_5.0                                                          | string       | App Step 3 |
            | page name                  | app:privada:personas:tarjetas:debito:compras diferidas:3 confirmacion | string       | App Step 3 |
            | level 1                    | tarjetas                                                              | string       | App Step 3 |
            | level 2                    | debito                                                                | string       | App Step 3 |
            | level 3                    | compras diferidas                                                     | string       | App Step 3 |
            | level 4                    | 3 confirmacion                                                        | string       | App Step 3 |
            | language                   | ES                                                                    | string       | App Step 3 |
            | page area                  | privada                                                               | string       | App Step 3 |
            | page intent                | transaccion                                                           | string       | App Step 3 |
            | channel                    | online                                                                | string       | App Step 3 |
            | page instance ID           | de                                                                    | string       | App Step 3 |
            | page info version          | appVersion                                                            | regexp named | App Step 3 |
            | page segment               | personas                                                              | string       | App Step 3 |
            | sysEnv                     | app                                                                   | string       | App Step 3 |
            | business unit              | BBVA Mexico                                                           | string       | App Step 3 |
            | site app name              | App BBVA Mexico                                                       | string       | App Step 3 |
            | project name               | DIY Payments                                                          | string       | App Step 3 |
            | device mobile              | si                                                                    | string       | App Step 3 |
            | user userState             | logado                                                                | string       | App Step 3 |
            | profile ID                 | profileID                                                             | regexp named | App Step 3 |
            | user segment global        | 003001                                                                | string       | App Step 3 |
            | user gender                | gender                                                                | regexp named | App Step 3 |
            | user age                   | age                                                                   | regexp named | App Step 3 |
            | global application         | purchase financing deferral                                           | string       | App Step 3 |
            | application name           | compras diferidas                                                     | string       | App Step 3 |
            | application type           | operativa                                                             | string       | App Step 3 |
            | application step           | 3 confirmacion                                                        | string       | App Step 3 |
            | fulfillment model          | online                                                                | string       | App Step 3 |
            | custom fields              | diferimiento:british columbia can,diferimiento:mas vision las haciend | string       | App Step 3 |
            | product primary category   | tarjetas                                                              | string       | App Step 3 |
            | product subtype            | tarjetas debito                                                       | string       | App Step 3 |
            | product amount             | 2981.88                                                               | string       | App Step 3 |
            | product payment amount     | 496.98                                                                | string       | App Step 3 |
            | product number of payments | 6                                                                     | string       | App Step 3 |
            | product interest rate      | 0                                                                     | string       | App Step 3 |
            | product currency           | MXN                                                                   | string       | App Step 3 |
            | internal campaign          |                                                                       | empty array  | App Step 3 |
            | optimization attributes    |                                                                       | empty array  | App Step 3 |

    @ANA_EVENT_FTMH007
    @analytics
    @ios @android @web @web-done
    @MX @backend(test) @vbank
    Scenario: Confirms the summary - App Step 4
        Given a user with the following criteria
            | criteria           |
            | financing line     |
            | offers detail card |
        And the user accesses to the "operative" "debit" card product detail
        And the user accesses to Financing Dashboard
        And the analytics interceptor service is initiated
        And the user accesses to finance transaction multipurchase debit post hiring
        And the user to enter to months to defer step with a purchase "917" and "874"
        And the user enters to terms and conditions with a period of "6" months
        When the user confirms terms and conditions step
        Then the analytics events contains the following variables
            | item                       | value                                                                 | type         | event      |
            | analytics                  | analytics/glomo_base                                                  | json schema  | App Step 4 |
            | version DL                 | 20250414_5.0                                                          | string       | App Step 4 |
            | page name                  | app:privada:personas:tarjetas:debito:compras diferidas:4 otp          | string       | App Step 4 |
            | level 1                    | tarjetas                                                              | string       | App Step 4 |
            | level 2                    | debito                                                                | string       | App Step 4 |
            | level 3                    | compras diferidas                                                     | string       | App Step 4 |
            | level 4                    | 4 otp                                                                 | string       | App Step 4 |
            | language                   | ES                                                                    | string       | App Step 4 |
            | page area                  | privada                                                               | string       | App Step 4 |
            | page intent                | transaccion                                                           | string       | App Step 4 |
            | channel                    | online                                                                | string       | App Step 4 |
            | page instance ID           | de                                                                    | string       | App Step 4 |
            | page info version          | appVersion                                                            | regexp named | App Step 4 |
            | page segment               | personas                                                              | string       | App Step 4 |
            | sysEnv                     | app                                                                   | string       | App Step 4 |
            | business unit              | BBVA Mexico                                                           | string       | App Step 4 |
            | site app name              | App BBVA Mexico                                                       | string       | App Step 4 |
            | project name               | DIY Payments                                                          | string       | App Step 4 |
            | device mobile              | si                                                                    | string       | App Step 4 |
            | user userState             | logado                                                                | string       | App Step 4 |
            | profile ID                 | profileID                                                             | regexp named | App Step 4 |
            | user segment global        | 003001                                                                | string       | App Step 4 |
            | user gender                | gender                                                                | regexp named | App Step 4 |
            | user age                   | age                                                                   | regexp named | App Step 4 |
            | global application         | purchase financing deferral                                           | string       | App Step 4 |
            | application name           | compras diferidas                                                     | string       | App Step 4 |
            | application type           | operativa                                                             | string       | App Step 4 |
            | application step           | 4 otp                                                                 | string       | App Step 4 |
            | fulfillment model          | online                                                                | string       | App Step 4 |
            | custom fields              | diferimiento:british columbia can,diferimiento:mas vision las haciend | string       | App Step 4 |
            | product primary category   | tarjetas                                                              | string       | App Step 4 |
            | product subtype            | tarjetas debito                                                       | string       | App Step 4 |
            | product amount             | 2981.88                                                               | string       | App Step 4 |
            | product payment amount     | 496.98                                                                | string       | App Step 4 |
            | product number of payments | 6                                                                     | string       | App Step 4 |
            | product interest rate      | 0                                                                     | string       | App Step 4 |
            | product currency           | MXN                                                                   | string       | App Step 4 |
            | internal campaign          |                                                                       | empty array  | App Step 4 |
            | optimization attributes    |                                                                       | empty array  | App Step 4 |

    @ANA_EVENT_FTMH008
    @analytics
    @ios @android @web @web-done
    @MX @backend(test) @vbank
    Scenario: Access the successful screen - App Completed
        Given a user with the following criteria
            | criteria           |
            | financing line     |
            | offers detail card |
        And the user accesses to the "operative" "debit" card product detail
        And the analytics interceptor service is initiated
        And the user accesses to finance transaction multipurchase debit post hiring from "defer"
        And the user to enter to months to defer step with a purchase "2700"
        And the user enters to terms and conditions with a period of "6" months
        When the user completes the deferral of purchase
        Then the analytics events contains the following variables
            | item                         | value                                                                 | type         | event         |
            | analytics                    | analytics/glomo_base                                                  | json schema  | App Completed |
            | version DL                   | 20250414_5.0                                                          | string       | App Completed |
            | page name                    | app:privada:personas:tarjetas:debito:compras diferidas:pagina exitosa | string       | App Completed |
            | level 1                      | tarjetas                                                              | string       | App Completed |
            | level 2                      | debito                                                                | string       | App Completed |
            | level 3                      | compras diferidas                                                     | string       | App Completed |
            | level 4                      | pagina exitosa                                                        | string       | App Completed |
            | language                     | ES                                                                    | string       | App Completed |
            | page area                    | privada                                                               | string       | App Completed |
            | page intent                  | transaccion                                                           | string       | App Completed |
            | channel                      | online                                                                | string       | App Completed |
            | page instance ID             | de                                                                    | string       | App Completed |
            | page info version            | appVersion                                                            | regexp named | App Completed |
            | page segment                 | personas                                                              | string       | App Completed |
            | sysEnv                       | app                                                                   | string       | App Completed |
            | business unit                | BBVA Mexico                                                           | string       | App Completed |
            | site app name                | App BBVA Mexico                                                       | string       | App Completed |
            | project name                 | DIY Payments                                                          | string       | App Completed |
            | device mobile                | si                                                                    | string       | App Completed |
            | user userState               | logado                                                                | string       | App Completed |
            | profile ID                   | profileID                                                             | regexp named | App Completed |
            | user segment global          | 003001                                                                | string       | App Completed |
            | user gender                  | gender                                                                | regexp named | App Completed |
            | user age                     | age                                                                   | regexp named | App Completed |
            | global application           | purchase financing deferral                                           | string       | App Completed |
            | application name             | compras diferidas                                                     | string       | App Completed |
            | application type             | operativa                                                             | string       | App Completed |
            | application step             | pagina exitosa                                                        | string       | App Completed |
            | fulfillment model            | online                                                                | string       | App Completed |
            | custom fields                | diferimiento:british columbia can                                     | string       | App Completed |
            | application state            | finalizado                                                            | string       | App Completed |
            | application operation number | 010199992099491707                                                    | string       | App Completed |
            | product primary category     | tarjetas                                                              | string       | App Completed |
            | product subtype              | tarjetas debito                                                       | string       | App Completed |
            | product amount               | 2981.88                                                               | string       | App Completed |
            | product payment amount       | 496.98                                                                | string       | App Completed |
            | product number of payments   | 6                                                                     | string       | App Completed |
            | product interest rate        | 0                                                                     | string       | App Completed |
            | product currency             | MXN                                                                   | string       | App Completed |
            | internal campaign            |                                                                       | empty array  | App Completed |
            | optimization attributes      |                                                                       | empty array  | App Completed |

    @ANA_EVENT_FTMH009
    @analytics
    @ios @android @web @web-done
    @MX @backend(test) @vbank
    Scenario: Access to payment dashboard - Page View
        Given a user with the following criteria
            | criteria           |
            | financing line     |
            | offers detail card |
        And the user accesses to the "operative" "debit" card product detail
        And the analytics interceptor service is initiated
        When the user accesses to Financing Dashboard
        Then the analytics events contains the following variables
            | item                    | value                                                          | type             | event     |
            | analytics               | analytics/glomo_base                                           | json schema      | Page View |
            | version DL              | 20250414_5.0                                                   | string           | Page View |
            | page name               | app:privada:personas:tarjetas:debito:compras diferidas:detalle | string           | Page View |
            | level 1                 | tarjetas                                                       | string           | Page View |
            | level 2                 | debito                                                         | string           | Page View |
            | level 3                 | compras diferidas                                              | string           | Page View |
            | level 4                 | detalle                                                        | string           | Page View |
            | language                | ES                                                             | string           | Page View |
            | page area               | privada                                                        | string           | Page View |
            | page intent             | transaccion                                                    | string           | Page View |
            | channel                 | online                                                         | string           | Page View |
            | page instance ID        | de                                                             | string           | Page View |
            | version DL              | 20250414_5.0                                                   | string           | Page View |
            | page info version       | appVersion                                                     | regexp named     | Page View |
            | page segment            | personas                                                       | string           | Page View |
            | sysEnv                  | app                                                            | string           | Page View |
            | business unit           | BBVA Mexico                                                    | string           | Page View |
            | site app name           | App BBVA Mexico                                                | string           | Page View |
            | project name            | DIY Payments                                                   | string           | Page View |
            | device mobile           | si                                                             | string           | Page View |
            | user userState          | logado                                                         | string           | Page View |
            | profile ID              | profileID                                                      | regexp named     | Page View |
            | user segment global     | 003001                                                         | string           | Page View |
            | user gender             | gender                                                         | regexp named     | Page View |
            | user age                | age                                                            | regexp named     | Page View |
            | internal campaign       |                                                                | empty array      | Page View |
            | optimization attributes |                                                                | empty array      | Page View |
            | application             |                                                                | empty str object | Page View |
            | products attributes     |                                                                | empty array      | Page View |

    @ANA_EVENT_FTMH010
    @analytics
    @ios @android @web @web-done
    @MX @backend(test) @vbank
    Scenario: Deploy more operatives modal - Page View
        Given a user with the following criteria
            | criteria           |
            | financing line     |
            | offers detail card |
        And the user accesses to the "operative" "debit" card product detail
        And the user accesses to Financing Dashboard
        And the analytics interceptor service is initiated
        When the user accesses to more operatives
        Then the analytics events contains the following variables
            | item                    | value                                                          | type             | event     |
            | analytics               | analytics/glomo_base                                           | json schema      | Page View |
            | version DL              | 20250414_5.0                                                   | string           | Page View |
            | page name               | app:privada:personas:tarjetas:debito:compras diferidas:detalle | string           | Page View |
            | level 1                 | tarjetas                                                       | string           | Page View |
            | level 2                 | debito                                                         | string           | Page View |
            | level 3                 | compras diferidas                                              | string           | Page View |
            | level 4                 | detalle                                                        | string           | Page View |
            | language                | ES                                                             | string           | Page View |
            | page area               | privada                                                        | string           | Page View |
            | page intent             | transaccion                                                    | string           | Page View |
            | channel                 | online                                                         | string           | Page View |
            | page instance ID        | de                                                             | string           | Page View |
            | version DL              | 20250414_5.0                                                   | string           | Page View |
            | page info version       | appVersion                                                     | regexp named     | Page View |
            | page segment            | personas                                                       | string           | Page View |
            | sysEnv                  | app                                                            | string           | Page View |
            | business unit           | BBVA Mexico                                                    | string           | Page View |
            | site app name           | App BBVA Mexico                                                | string           | Page View |
            | project name            | DIY Payments                                                   | string           | Page View |
            | device mobile           | si                                                             | string           | Page View |
            | user userState          | logado                                                         | string           | Page View |
            | profile ID              | profileID                                                      | regexp named     | Page View |
            | user segment global     | 003001                                                         | string           | Page View |
            | user gender             | gender                                                         | regexp named     | Page View |
            | user age                | age                                                            | regexp named     | Page View |
            | internal campaign       |                                                                | empty array      | Page View |
            | optimization attributes |                                                                | empty array      | Page View |
            | application             |                                                                | empty str object | Page View |
            | products attributes     |                                                                | empty array      | Page View |

    @ANA_EVENT_FTMH011
    @analytics
    @ios @android @web @web-done
    @MX @backend(test) @vbank
    Scenario: Deploy cut off date modal - Page View
        Given a user with the following criteria
            | criteria           |
            | financing line     |
            | offers detail card |
        And the user accesses to the "operative" "debit" card product detail
        And the analytics interceptor service is initiated
        And the user accesses to Financing Dashboard
        When the user exits the due date and the next payment date
        Then the analytics events contains the following variables
            | item                    | value                                                                 | type             | event     | event number |
            | analytics               | analytics/glomo_base                                                  | json schema      | Page View | 2, 3         |
            | version DL              | 20250414_5.0                                                          | string           | Page View | 2, 3         |
            | page name               | app:privada:personas:tarjetas:debito:compras diferidas:fecha de corte | string           | Page View | 2            |
            | page name               | app:privada:personas:tarjetas:debito:compras diferidas:fecha de cobro | string           | Page View | 3            |
            | level 1                 | tarjetas                                                              | string           | Page View | 2, 3         |
            | level 2                 | debito                                                                | string           | Page View | 2, 3         |
            | level 3                 | compras diferidas                                                     | string           | Page View | 2, 3         |
            | level 4                 | fecha de corte                                                        | string           | Page View | 2            |
            | level 4                 | fecha de cobro                                                        | string           | Page View | 3            |
            | language                | ES                                                                    | string           | Page View | 2, 3         |
            | page area               | privada                                                               | string           | Page View | 2, 3         |
            | page intent             | transaccion                                                           | string           | Page View | 2, 3         |
            | channel                 | online                                                                | string           | Page View | 2, 3         |
            | page instance ID        | de                                                                    | string           | Page View | 2, 3         |
            | version DL              | 20250414_5.0                                                          | string           | Page View | 2, 3         |
            | page info version       | appVersion                                                            | regexp named     | Page View | 2, 3         |
            | page segment            | personas                                                              | string           | Page View | 2, 3         |
            | sysEnv                  | app                                                                   | string           | Page View | 2, 3         |
            | business unit           | BBVA Mexico                                                           | string           | Page View | 2, 3         |
            | site app name           | App BBVA Mexico                                                       | string           | Page View | 2, 3         |
            | project name            | DIY Payments                                                          | string           | Page View | 2, 3         |
            | device mobile           | si                                                                    | string           | Page View | 2, 3         |
            | user userState          | logado                                                                | string           | Page View | 2, 3         |
            | profile ID              | profileID                                                             | regexp named     | Page View | 2, 3         |
            | user segment global     | 003001                                                                | string           | Page View | 2, 3         |
            | user gender             | gender                                                                | regexp named     | Page View | 2, 3         |
            | user age                | age                                                                   | regexp named     | Page View | 2, 3         |
            | internal campaign       |                                                                       | empty array      | Page View | 2, 3         |
            | optimization attributes |                                                                       | empty array      | Page View | 2, 3         |
            | application             |                                                                       | empty str object | Page View | 2, 3         |
            | products attributes     |                                                                       | empty array      | Page View | 2, 3         |

    @ANA_EVENT_FTMH012
    @analytics
    @ios @android @web @web-done
    @MX @backend(test) @vbank
    Scenario: Access to deferred movement detail - Page View
        Given a user with the following criteria
            | criteria           |
            | financing line     |
            | offers detail card |
        And the user accesses to the "operative" "debit" card product detail
        And the analytics interceptor service is initiated
        And the user accesses to Financing Dashboard
        When the user agrees to a deferred purchase "deferred purchase"
        Then the analytics events contains the following variables
            | item                    | value                                                                       | type             | event     | event number |
            | analytics               | analytics/glomo_base                                                        | json schema      | Page View | 2            |
            | version DL              | 20250414_5.0                                                                | string           | Page View | 2            |
            | page name               | app:privada:personas:tarjetas:debito:compras diferidas:detalle diferimiento | string           | Page View | 2            |
            | level 1                 | tarjetas                                                                    | string           | Page View | 2            |
            | level 2                 | debito                                                                      | string           | Page View | 2            |
            | level 3                 | compras diferidas                                                           | string           | Page View | 2            |
            | level 4                 | detalle diferimiento                                                        | string           | Page View | 2            |
            | language                | ES                                                                          | string           | Page View | 2            |
            | page area               | privada                                                                     | string           | Page View | 2            |
            | page intent             | transaccion                                                                 | string           | Page View | 2            |
            | channel                 | online                                                                      | string           | Page View | 2            |
            | page instance ID        | de                                                                          | string           | Page View | 2            |
            | version DL              | 20250414_5.0                                                                | string           | Page View | 2            |
            | page info version       | appVersion                                                                  | regexp named     | Page View | 2            |
            | page segment            | personas                                                                    | string           | Page View | 2            |
            | sysEnv                  | app                                                                         | string           | Page View | 2            |
            | business unit           | BBVA Mexico                                                                 | string           | Page View | 2            |
            | site app name           | App BBVA Mexico                                                             | string           | Page View | 2            |
            | project name            | DIY Payments                                                                | string           | Page View | 2            |
            | device mobile           | si                                                                          | string           | Page View | 2            |
            | user userState          | logado                                                                      | string           | Page View | 2            |
            | profile ID              | profileID                                                                   | regexp named     | Page View | 2            |
            | user segment global     | 003001                                                                      | string           | Page View | 2            |
            | user gender             | gender                                                                      | regexp named     | Page View | 2            |
            | user age                | age                                                                         | regexp named     | Page View | 2            |
            | custom fields           | diferimiento:amazon,estado diferimiento:en curso                            | string           | Page View | 2            |
            | internal campaign       |                                                                             | empty array      | Page View | 2            |
            | optimization attributes |                                                                             | empty array      | Page View | 2            |
            | application             |                                                                             | empty str object | Page View | 2            |
            | products attributes     |                                                                             | empty array      | Page View | 2            |

    @ANA_EVENT_FTMH013
    @analytics
    @ios @android @web @web-done
    @MX @backend(test) @vbank
    Scenario: Access to line detail - Page View
        Given a user with the following criteria
            | criteria           |
            | financing line     |
            | offers detail card |
        And the user accesses to the "operative" "debit" card product detail
        And the analytics interceptor service is initiated
        And the user accesses to Financing Dashboard
        When the user accesses to line detail
        Then the analytics events contains the following variables
            | item                    | value                                                                   | type             | event     | event number |
            | analytics               | analytics/glomo_base                                                    | json schema      | Page View | 3            |
            | version DL              | 20250414_5.0                                                            | string           | Page View | 3            |
            | page name               | app:privada:personas:tarjetas:debito:compras diferidas:detalle de linea | string           | Page View | 3            |
            | level 1                 | tarjetas                                                                | string           | Page View | 3            |
            | level 2                 | debito                                                                  | string           | Page View | 3            |
            | level 3                 | compras diferidas                                                       | string           | Page View | 3            |
            | level 4                 | detalle de linea                                                        | string           | Page View | 3            |
            | language                | ES                                                                      | string           | Page View | 3            |
            | page area               | privada                                                                 | string           | Page View | 3            |
            | page intent             | transaccion                                                             | string           | Page View | 3            |
            | channel                 | online                                                                  | string           | Page View | 3            |
            | page instance ID        | de                                                                      | string           | Page View | 3            |
            | version DL              | 20250414_5.0                                                            | string           | Page View | 3            |
            | page info version       | appVersion                                                              | regexp named     | Page View | 3            |
            | page segment            | personas                                                                | string           | Page View | 3            |
            | sysEnv                  | app                                                                     | string           | Page View | 3            |
            | business unit           | BBVA Mexico                                                             | string           | Page View | 3            |
            | site app name           | App BBVA Mexico                                                         | string           | Page View | 3            |
            | project name            | DIY Payments                                                            | string           | Page View | 3            |
            | device mobile           | si                                                                      | string           | Page View | 3            |
            | user userState          | logado                                                                  | string           | Page View | 3            |
            | profile ID              | profileID                                                               | regexp named     | Page View | 3            |
            | user segment global     | 003001                                                                  | string           | Page View | 3            |
            | user gender             | gender                                                                  | regexp named     | Page View | 3            |
            | user age                | age                                                                     | regexp named     | Page View | 3            |
            | internal campaign       |                                                                         | empty array      | Page View | 3            |
            | optimization attributes |                                                                         | empty array      | Page View | 3            |
            | application             |                                                                         | empty str object | Page View | 3            |
            | products attributes     |                                                                         | empty array      | Page View | 3            |

    @ANA_EVENT_FTMH014
    @analytics
    @ios @android @web @web-done
    @MX @backend(test) @vbank
    Scenario: View more details of deferred movement - Interaction Link
        Given a user with the following criteria
            | criteria           |
            | financing line     |
            | offers detail card |
        And the user accesses to the "operative" "debit" card product detail
        And the analytics interceptor service is initiated
        And the user accesses to Financing Dashboard
        And the user agrees to a deferred purchase "deferred purchase"
        When the user requests accesses to payment history
        Then the analytics events contains the following variables
            | item                    | value                                                                       | type             | event            |
            | analytics               | analytics/glomo_base                                                        | json schema      | Interaction Link |
            | version DL              | 20250414_5.0                                                                | string           | Interaction Link |
            | page name               | app:privada:personas:tarjetas:debito:compras diferidas:detalle diferimiento | string           | Interaction Link |
            | level 1                 | tarjetas                                                                    | string           | Interaction Link |
            | level 2                 | debito                                                                      | string           | Interaction Link |
            | level 3                 | compras diferidas                                                           | string           | Interaction Link |
            | level 4                 | detalle diferimiento                                                        | string           | Interaction Link |
            | language                | ES                                                                          | string           | Interaction Link |
            | page area               | privada                                                                     | string           | Interaction Link |
            | page intent             | transaccion                                                                 | string           | Interaction Link |
            | channel                 | online                                                                      | string           | Interaction Link |
            | page instance ID        | de                                                                          | string           | Interaction Link |
            | version DL              | 20250414_5.0                                                                | string           | Interaction Link |
            | page info version       | appVersion                                                                  | regexp named     | Interaction Link |
            | page segment            | personas                                                                    | string           | Interaction Link |
            | sysEnv                  | app                                                                         | string           | Interaction Link |
            | business unit           | BBVA Mexico                                                                 | string           | Interaction Link |
            | site app name           | App BBVA Mexico                                                             | string           | Interaction Link |
            | project name            | DIY Payments                                                                | string           | Interaction Link |
            | device mobile           | si                                                                          | string           | Interaction Link |
            | user userState          | logado                                                                      | string           | Interaction Link |
            | profile ID              | profileID                                                                   | regexp named     | Interaction Link |
            | user segment global     | 003001                                                                      | string           | Interaction Link |
            | user gender             | gender                                                                      | regexp named     | Interaction Link |
            | user age                | age                                                                         | regexp named     | Interaction Link |
            | custom fields           | diferimiento:amazon,estado diferimiento:en curso                            | string           | Interaction Link |
            | interaction level       | historial de pagos                                                          | string           | Interaction Link |
            | internal campaign       |                                                                             | empty array      | Interaction Link |
            | optimization attributes |                                                                             | empty array      | Interaction Link |
            | application             |                                                                             | empty str object | Interaction Link |
            | products attributes     |                                                                             | empty array      | Interaction Link |

    @ANA_EVENT_FTMH015
    @analytics
    @ios @android @web @web-done
    @MX @backend(test) @vbank
    Scenario: Share deferred movement detail - External Link
        Given a user with the following criteria
            | criteria           |
            | financing line     |
            | offers detail card |
        And the user accesses to the "operative" "debit" card product detail
        And the analytics interceptor service is initiated
        And the user accesses to Financing Dashboard
        And the user agrees to a deferred purchase "deferred purchase"
        When the user share movement detail
        Then the analytics events contains the following variables
            | item                    | value                                                                       | type             | event         |
            | analytics               | analytics/glomo_base                                                        | json schema      | External Link |
            | version DL              | 20250414_5.0                                                                | string           | External Link |
            | page name               | app:privada:personas:tarjetas:debito:compras diferidas:detalle diferimiento | string           | External Link |
            | level 1                 | tarjetas                                                                    | string           | External Link |
            | level 2                 | debito                                                                      | string           | External Link |
            | level 3                 | compras diferidas                                                           | string           | External Link |
            | level 4                 | detalle diferimiento                                                        | string           | External Link |
            | language                | ES                                                                          | string           | External Link |
            | page area               | privada                                                                     | string           | External Link |
            | page intent             | transaccion                                                                 | string           | External Link |
            | channel                 | online                                                                      | string           | External Link |
            | page instance ID        | de                                                                          | string           | External Link |
            | version DL              | 20250414_5.0                                                                | string           | External Link |
            | page info version       | appVersion                                                                  | regexp named     | External Link |
            | page segment            | personas                                                                    | string           | External Link |
            | sysEnv                  | app                                                                         | string           | External Link |
            | business unit           | BBVA Mexico                                                                 | string           | External Link |
            | site app name           | App BBVA Mexico                                                             | string           | External Link |
            | project name            | DIY Payments                                                                | string           | External Link |
            | link url                | compartir                                                                   | string           | External Link |
            | link name               | compartir                                                                   | string           | External Link |
            | device mobile           | si                                                                          | string           | External Link |
            | user userState          | logado                                                                      | string           | External Link |
            | profile ID              | profileID                                                                   | regexp named     | External Link |
            | user segment global     | 003001                                                                      | string           | External Link |
            | user gender             | gender                                                                      | regexp named     | External Link |
            | user age                | age                                                                         | regexp named     | External Link |
            | custom fields           | diferimiento:amazon,estado diferimiento:en curso                            | string           | External Link |
            | internal campaign       |                                                                             | empty array      | External Link |
            | optimization attributes |                                                                             | empty array      | External Link |
            | application             |                                                                             | empty str object | External Link |
            | products attributes     |                                                                             | empty array      | External Link |

    @ANA_EVENT_FTMH016
    @analytics
    @ios @android @web @web-done
    @MX @backend(test) @vbank @spherica
    Scenario: Filter results - Page View
        Given a user with the following criteria
            | criteria           |
            | financing line     |
            | offers detail card |
        And the user accesses to the "operative" "debit" card product detail
        And the user accesses to Financing Dashboard
        And the user agrees to filter
        And the analytics interceptor service is initiated
        When the user selects "none" and enters filter
        Then the analytics events contains the following variables
            | item                    | value                                                          | type             | event     | event number |
            | analytics               | analytics/glomo_base                                           | json schema      | Page View | 2            |
            | version DL              | 20250414_5.0                                                   | string           | Page View | 2            |
            | page name               | app:privada:personas:tarjetas:debito:compras diferidas:filtrar | string           | Page View | 2            |
            | level 1                 | tarjetas                                                       | string           | Page View | 2            |
            | level 2                 | debito                                                         | string           | Page View | 2            |
            | level 3                 | compras diferidas                                              | string           | Page View | 2            |
            | level 4                 | filtrar                                                        | string           | Page View | 2            |
            | language                | ES                                                             | string           | Page View | 2            |
            | page area               | privada                                                        | string           | Page View | 2            |
            | page intent             | transaccion                                                    | string           | Page View | 2            |
            | channel                 | online                                                         | string           | Page View | 2            |
            | page instance ID        | de                                                             | string           | Page View | 2            |
            | version DL              | 20250414_5.0                                                   | string           | Page View | 2            |
            | page info version       | appVersion                                                     | regexp named     | Page View | 2            |
            | page segment            | personas                                                       | string           | Page View | 2            |
            | sysEnv                  | app                                                            | string           | Page View | 2            |
            | business unit           | BBVA Mexico                                                    | string           | Page View | 2            |
            | site app name           | App BBVA Mexico                                                | string           | Page View | 2            |
            | project name            | DIY Payments                                                   | string           | Page View | 2            |
            | device mobile           | si                                                             | string           | Page View | 2            |
            | user userState          | logado                                                         | string           | Page View | 2            |
            | profile ID              | profileID                                                      | regexp named     | Page View | 2            |
            | user segment global     | 003001                                                         | string           | Page View | 2            |
            | user gender             | gender                                                         | regexp named     | Page View | 2            |
            | user age                | age                                                            | regexp named     | Page View | 2            |
            | internal campaign       |                                                                | empty array      | Page View | 2            |
            | optimization attributes |                                                                | empty array      | Page View | 2            |
            | application             |                                                                | empty str object | Page View | 2            |
            | products attributes     |                                                                | empty array      | Page View | 2            |

    @ANA_EVENT_FTMH017
    @analytics
    @ios @android @web @web-done
    @MX @backend(test) @vbank
    Scenario Outline: Attempts defer purchases when <case> - Page View
        Given a user with the following criteria
            | criteria           |
            | financing line     |
            | offers detail card |
        And the user accesses to the "operative" "debit" card product detail
        And the analytics interceptor service is initiated
        And the user accesses to Financing Dashboard
        When the user attempts to access to finance transaction multipurchase debit post hiring
        Then the analytics events contains the following variables
            | item                    | value                                                                  | type             | event     | event number |
            | analytics               | analytics/glomo_base                                                   | json schema      | Page View | 2            |
            | version DL              | 20250414_5.0                                                           | string           | Page View | 2            |
            | page name               | app:privada:personas:tarjetas:debito:financiamiento de compras:<level> | string           | Page View | 2            |
            | level 1                 | tarjetas                                                               | string           | Page View | 2            |
            | level 2                 | debito                                                                 | string           | Page View | 2            |
            | level 3                 | financiamiento de compras                                              | string           | Page View | 2            |
            | level 4                 | <level>                                                                | string           | Page View | 2            |
            | language                | ES                                                                     | string           | Page View | 2            |
            | page area               | privada                                                                | string           | Page View | 2            |
            | page intent             | transaccion                                                            | string           | Page View | 2            |
            | channel                 | online                                                                 | string           | Page View | 2            |
            | page instance ID        | de                                                                     | string           | Page View | 2            |
            | page info version       | appVersion                                                             | regexp named     | Page View | 2            |
            | page segment            | personas                                                               | string           | Page View | 2            |
            | sysEnv                  | app                                                                    | string           | Page View | 2            |
            | business unit           | BBVA Mexico                                                            | string           | Page View | 2            |
            | site app name           | App BBVA Mexico                                                        | string           | Page View | 2            |
            | project name            | DIY Payments                                                           | string           | Page View | 2            |
            | device mobile           | si                                                                     | string           | Page View | 2            |
            | user userState          | logado                                                                 | string           | Page View | 2            |
            | profile ID              | profileID                                                              | regexp named     | Page View | 2            |
            | user segment global     | 003001                                                                 | string           | Page View | 2            |
            | user gender             | gender                                                                 | regexp named     | Page View | 2            |
            | user age                | age                                                                    | regexp named     | Page View | 2            |
            | internal campaign       |                                                                        | empty array      | Page View | 2            |
            | optimization attributes |                                                                        | empty array      | Page View | 2            |
            | application             |                                                                        | empty str object | Page View | 2            |
            | products attributes     |                                                                        | empty array      | Page View | 2            |

        Examples:
            | case                  | level         |
            | reaches balance limit | liberar linea |
            | has no purchases      | sin compras   |

    @ANA_EVENT_FTMH018
    @analytics
    @ios @android @web @web-done
    @MX @backend(test) @vbank
    Scenario: Balance limit exceeded error - Page View
        Given a user with the following criteria
            | criteria           |
            | financing line     |
            | offers detail card |
        And the user accesses to the "operative" "debit" card product detail
        And the analytics interceptor service is initiated
        And the user accesses to Financing Dashboard
        And the user accesses to finance transaction multipurchase debit post hiring
        When the user to enter to months to defer step with a purchase "917" and "874"
        Then the analytics events contains the following variables
            | item                    | value                                                                         | type             | event     | event number |
            | analytics               | analytics/glomo_base                                                          | json schema      | Page View | 2            |
            | version DL              | 20250414_5.0                                                                  | string           | Page View | 2            |
            | page name               | app:privada:personas:tarjetas:debito:financiamiento de compras:saldo superado | string           | Page View | 2            |
            | level 1                 | tarjetas                                                                      | string           | Page View | 2            |
            | level 2                 | debito                                                                        | string           | Page View | 2            |
            | level 3                 | financiamiento de compras                                                     | string           | Page View | 2            |
            | level 4                 | saldo superado                                                                | string           | Page View | 2            |
            | language                | ES                                                                            | string           | Page View | 2            |
            | page area               | privada                                                                       | string           | Page View | 2            |
            | page intent             | transaccion                                                                   | string           | Page View | 2            |
            | channel                 | online                                                                        | string           | Page View | 2            |
            | page instance ID        | de                                                                            | string           | Page View | 2            |
            | page info version       | appVersion                                                                    | regexp named     | Page View | 2            |
            | page segment            | personas                                                                      | string           | Page View | 2            |
            | sysEnv                  | app                                                                           | string           | Page View | 2            |
            | business unit           | BBVA Mexico                                                                   | string           | Page View | 2            |
            | site app name           | App BBVA Mexico                                                               | string           | Page View | 2            |
            | project name            | DIY Payments                                                                  | string           | Page View | 2            |
            | device mobile           | si                                                                            | string           | Page View | 2            |
            | user userState          | logado                                                                        | string           | Page View | 2            |
            | profile ID              | profileID                                                                     | regexp named     | Page View | 2            |
            | user segment global     | 003001                                                                        | string           | Page View | 2            |
            | user gender             | gender                                                                        | regexp named     | Page View | 2            |
            | user age                | age                                                                           | regexp named     | Page View | 2            |
            | internal campaign       |                                                                               | empty array      | Page View | 2            |
            | optimization attributes |                                                                               | empty array      | Page View | 2            |
            | application             |                                                                               | empty str object | Page View | 2            |
            | products attributes     |                                                                               | empty array      | Page View | 2            |

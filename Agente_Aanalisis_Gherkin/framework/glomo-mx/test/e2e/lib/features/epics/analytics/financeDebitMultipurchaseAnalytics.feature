@financeDebitMultipurchaseAnalytics
Feature: Analytics - Finance Debit Multipurchase

    @ANA_EVENT_FTMD001
    @analytics
    @ios @android @web @web-done
    @MX @backend(test) @vbank
    Scenario: Access to offer from contract product section - App On Click Start
        Given a user with the following criteria
            | criteria       |
            | financing line |
            | offers         |
        And the user accesses contract product section
        And the analytics interceptor service is initiated
        When the user accesses to finance transaction multipurchase debit
        Then the analytics events contains the following variables
            | item                                         | value                                                                               | type         | event              |
            | analytics                                    | analytics/glomo_base                                                                | json schema  | App On Click Start |
            | version DL                                   | 20250414_5.0                                                                                                                                      | string       | App On Click Start |
            | page name                                    | app:privada:personas:posicion global                                                | string       | App On Click Start |
            | level 1                                      | posicion global                                                                     | string       | App On Click Start |
            | language                                     | ES                                                                                  | string       | App On Click Start |
            | page area                                    | privada                                                                             | string       | App On Click Start |
            | page intent                                  | informacion                                                                         | string       | App On Click Start |
            | channel                                      | online                                                                              | string       | App On Click Start |
            | page instance ID                             | de                                                                                  | string       | App On Click Start |
            | version DL                                   | 20250414_5.0                                                                                                                                      | string       | App On Click Start |
            | page info version                            | appVersion                                                                          | regexp named | App On Click Start |
            | page segment                                 | personas                                                                            | string       | App On Click Start |
            | sysEnv                                       | app                                                                                 | string       | App On Click Start |
            | business unit                                | BBVA Mexico                                                                         | string       | App On Click Start |
            | site app name                                | App BBVA Mexico                                                                     | string       | App On Click Start |
            | project name                                 | DIY Payments                                                                        | string       | App On Click Start |
            | device mobile                                | si                                                                                  | string       | App On Click Start |
            | user userState                               | logado                                                                              | string       | App On Click Start |
            | profile ID                                   | profileID                                                                           | regexp named | App On Click Start |
            | user segment global                          | 003001                                                                              | string       | App On Click Start |
            | user gender                                  | gender                                                                              | regexp named | App On Click Start |
            | user age                                     | age                                                                                 | regexp named | App On Click Start |
            | global application                           | purchase financing                                                                  | string       | App On Click Start |
            | application name                             | financiamiento de compras                                                           | string       | App On Click Start |
            | application type                             | operativa                                                                           | string       | App On Click Start |
            | application step                             | me interesa                                                                         | string       | App On Click Start |
            | fulfillment model                            | online                                                                              | string       | App On Click Start |
            | product primary category                     | tarjetas                                                                            | string       | App On Click Start |
            | product subtype                              | tarjetas debito                                                                     | string       | App On Click Start |
            | internal campaign attributes location        | contract product section--centro-5-16                                               | string       | App On Click Start |
            | internal campaign attributes campaign format | card                                                                                | string       | App On Click Start |
            | internal campaign attributes collective code | vd-                                                                                 | string       | App On Click Start |
            | internal campaign attributes name            | -sin mensaje.                                                                       | string       | App On Click Start |
            | internal campaign attributes product         | tarjetas                                                                            | string       | App On Click Start |
            | internal campaign attributes product code    | 0pyp                                                                                | string       | App On Click Start |
            | internal campaign attributes quantity        | 20946.09                                                                            | string       | App On Click Start |
            | internal campaign event name                 | IntCmpClick                                                                         | string       | App On Click Start |
            | internal campaign site action name           | contract product section--centro-5-16:card:vd-:-sin mensaje.:tarjetas:0pyp:20946.09 | string       | App On Click Start |
            | optimization attributes                      |                                                                                     | empty array  | App On Click Start |

    @ANA_EVENT_FTMD002
    @analytics
    @ios @android @web @web-done
    @MX @backend(test) @vbank
    Scenario: Access to offer from card detail - App On Click Start - App Page Visit
        Given a user with the following criteria
            | criteria       |
            | financing line |
            | offers         |
        And the user accesses to the "operative" "debit" card product detail
        And the analytics interceptor service is initiated
        When the user accesses to finance transaction multipurchase debit
        Then the analytics events contains the following variables
            | item                                         | value                                                                                                                   | type         | event                              |
            | analytics                                    | analytics/glomo_base                                                                                                    | json schema  | App On Click Start, App Page Visit |
            | version DL                                   | 20250414_5.0                                                                                                            | string       | App On Click Start, App Page Visit |
            | page name                                    | app:privada:personas:posicion global                                                                                    | string       | App On Click Start                 |
            | page name                                    | app:privada:personas:tarjetas:debito:financiamiento de compras:1 seleccion de compra                                    | string       | App Page Visit                     |
            | level 1                                      | posicion global                                                                                                         | string       | App On Click Start                 |
            | level 1                                      | tarjetas                                                                                                                | string       | App Page Visit                     |
            | level 2                                      | debito                                                                                                                  | string       | App Page Visit                     |
            | level 3                                      | financiamiento de compras                                                                                               | string       | App Page Visit                     |
            | level 4                                      | 1 seleccion de compra                                                                                                   | string       | App Page Visit                     |
            | language                                     | ES                                                                                                                      | string       | App On Click Start, App Page Visit |
            | page area                                    | privada                                                                                                                 | string       | App On Click Start, App Page Visit |
            | page intent                                  | informacion                                                                                                             | string       | App On Click Start                 |
            | page intent                                  | transaccion                                                                                                             | string       | App Page Visit                     |
            | channel                                      | online                                                                                                                  | string       | App On Click Start, App Page Visit |
            | page instance ID                             | de                                                                                                                      | string       | App On Click Start, App Page Visit |
            | version DL                                   | 20250414_5.0                                                                                                            | string       | App On Click Start, App Page Visit |
            | page info version                            | appVersion                                                                                                              | regexp named | App On Click Start, App Page Visit |
            | page segment                                 | personas                                                                                                                | string       | App On Click Start, App Page Visit |
            | sysEnv                                       | app                                                                                                                     | string       | App On Click Start, App Page Visit |
            | business unit                                | BBVA Mexico                                                                                                             | string       | App On Click Start, App Page Visit |
            | site app name                                | App BBVA Mexico                                                                                                         | string       | App On Click Start, App Page Visit |
            | project name                                 | DIY Payments                                                                                                            | string       | App On Click Start, App Page Visit |
            | device mobile                                | si                                                                                                                      | string       | App On Click Start, App Page Visit |
            | user userState                               | logado                                                                                                                  | string       | App On Click Start, App Page Visit |
            | profile ID                                   | profileID                                                                                                               | regexp named | App On Click Start, App Page Visit |
            | user segment global                          | 003001                                                                                                                  | string       | App On Click Start, App Page Visit |
            | user gender                                  | gender                                                                                                                  | regexp named | App On Click Start, App Page Visit |
            | user age                                     | age                                                                                                                     | regexp named | App On Click Start, App Page Visit |
            | global application                           | purchase financing                                                                                                      | string       | App On Click Start, App Page Visit |
            | application name                             | financiamiento de compras                                                                                               | string       | App On Click Start, App Page Visit |
            | application type                             | operativa                                                                                                               | string       | App On Click Start, App Page Visit |
            | application step                             | descubre como                                                                                                           | string       | App On Click Start                 |
            | application step                             | 1 seleccion de compra                                                                                                   | string       | App Page Visit                     |
            | fulfillment model                            | online                                                                                                                  | string       | App On Click Start, App Page Visit |
            | product primary category                     | tarjetas                                                                                                                | string       | App On Click Start, App Page Visit |
            | product subtype                              | tarjetas debito                                                                                                         | string       | App On Click Start, App Page Visit |
            | internal campaign attributes location        | card detail-purchase financing-centro-0-3                                                                               | string       | App On Click Start                 |
            | internal campaign attributes campaign format | card                                                                                                                    | string       | App On Click Start                 |
            | internal campaign attributes collective code | vd-                                                                                                                     | string       | App On Click Start                 |
            | internal campaign attributes name            | -difiere el monto de las compras que hiciste                                                                            | string       | App On Click Start                 |
            | internal campaign attributes product         | tarjetas                                                                                                                | string       | App On Click Start                 |
            | internal campaign attributes product code    | 0pyp                                                                                                                    | string       | App On Click Start                 |
            | internal campaign attributes quantity        |                                                                                                                         | string       | App On Click Start                 |
            | internal campaign event name                 | IntCmpClick                                                                                                             | string       | App On Click Start                 |
            | internal campaign site action name           | card detail-purchase financing-centro-0-3:card:vd-:-difiere el monto de las compras que hiciste:tarjetas:0pyp:undefined | string       | App On Click Start                 |
            | internal campaign                            |                                                                                                                         | empty array  | App Page Visit                     |
            | optimization attributes                      |                                                                                                                         | empty array  | App On Click Start, App Page Visit |

    @ANA_EVENT_FTMD003
    @analytics
    @ios @android @web @web-done
    @MX @backend(test) @vbank
    Scenario Outline: Selects a <element> element from step - App Started
        Given a user with the following criteria
            | criteria       |
            | financing line |
            | offers         |
        And the user accesses to the "operative" "debit" card product detail
        And the analytics interceptor service is initiated
        And the user accesses to finance transaction multipurchase debit
        When the user selects "<element>" element on step
        Then the analytics events contains the following variables
            | item                     | value                                                                                | type         | event       |
            | analytics                | analytics/glomo_base                                                                 | json schema  | App Started |
            | version DL               | 20250414_5.0                                                                         | string       | App Started |
            | page name                | app:privada:personas:tarjetas:debito:financiamiento de compras:1 seleccion de compra | string       | App Started |
            | level 1                  | tarjetas                                                                             | string       | App Started |
            | level 2                  | debito                                                                               | string       | App Started |
            | level 3                  | financiamiento de compras                                                            | string       | App Started |
            | level 4                  | 1 seleccion de compra                                                                | string       | App Started |
            | language                 | ES                                                                                   | string       | App Started |
            | page area                | privada                                                                              | string       | App Started |
            | page intent              | transaccion                                                                          | string       | App Started |
            | channel                  | online                                                                               | string       | App Started |
            | page instance ID         | de                                                                                   | string       | App Started |
            | version DL               | 20250414_5.0                                                                         | string       | App Started |
            | page info version        | appVersion                                                                           | regexp named | App Started |
            | page segment             | personas                                                                             | string       | App Started |
            | sysEnv                   | app                                                                                  | string       | App Started |
            | business unit            | BBVA Mexico                                                                          | string       | App Started |
            | site app name            | App BBVA Mexico                                                                      | string       | App Started |
            | project name             | DIY Payments                                                                         | string       | App Started |
            | device mobile            | si                                                                                   | string       | App Started |
            | user userState           | logado                                                                               | string       | App Started |
            | profile ID               | profileID                                                                            | regexp named | App Started |
            | user segment global      | 003001                                                                               | string       | App Started |
            | user gender              | gender                                                                               | regexp named | App Started |
            | user age                 | age                                                                                  | regexp named | App Started |
            | global application       | purchase financing                                                                   | string       | App Started |
            | application name         | financiamiento de compras                                                            | string       | App Started |
            | application type         | operativa                                                                            | string       | App Started |
            | application step         | <step>                                                                               | string       | App Started |
            | fulfillment model        | online                                                                               | string       | App Started |
            | product primary category | tarjetas                                                                             | string       | App Started |
            | product subtype          | tarjetas debito                                                                      | string       | App Started |
            | internal campaign        |                                                                                      | empty array  | App Started |
            | optimization attributes  |                                                                                      | empty array  | App Started |

        Examples:
            | element             | step               |
            | view more purchases | mostrar mas        |
            | purchase checkbox   | seleccionar compra |

    @ANA_EVENT_FTMD004
    @analytics
    @ios @android @web @web-done
    @MX @backend(test) @vbank
    Scenario: Selects months to defer - App Step 2
        Given a user with the following criteria
            | criteria       |
            | financing line |
            | offers         |
        And the user accesses to the "operative" "debit" card product detail
        And the analytics interceptor service is initiated
        And the user accesses to finance transaction multipurchase debit
        When the user to enter to months to defer step with a purchase "1740"
        Then the analytics events contains the following variables
            | item                     | value                                                                            | type         | event      |
            | analytics                | analytics/glomo_base                                                             | json schema  | App Step 2 |
            | version DL               | 20250414_5.0                                                                     | string       | App Step 2 |
            | page name                | app:privada:personas:tarjetas:debito:financiamiento de compras:2 meses a diferir | string       | App Step 2 |
            | level 1                  | tarjetas                                                                         | string       | App Step 2 |
            | level 2                  | debito                                                                           | string       | App Step 2 |
            | level 3                  | financiamiento de compras                                                        | string       | App Step 2 |
            | level 4                  | 2 meses a diferir                                                                | string       | App Step 2 |
            | language                 | ES                                                                               | string       | App Step 2 |
            | page area                | privada                                                                          | string       | App Step 2 |
            | page intent              | transaccion                                                                      | string       | App Step 2 |
            | channel                  | online                                                                           | string       | App Step 2 |
            | page instance ID         | de                                                                               | string       | App Step 2 |
            | version DL               | 20250414_5.0                                                                     | string       | App Step 2 |
            | page info version        | appVersion                                                                       | regexp named | App Step 2 |
            | page segment             | personas                                                                         | string       | App Step 2 |
            | sysEnv                   | app                                                                              | string       | App Step 2 |
            | business unit            | BBVA Mexico                                                                      | string       | App Step 2 |
            | site app name            | App BBVA Mexico                                                                  | string       | App Step 2 |
            | project name             | DIY Payments                                                                     | string       | App Step 2 |
            | device mobile            | si                                                                               | string       | App Step 2 |
            | user userState           | logado                                                                           | string       | App Step 2 |
            | profile ID               | profileID                                                                        | regexp named | App Step 2 |
            | user segment global      | 003001                                                                           | string       | App Step 2 |
            | user gender              | gender                                                                           | regexp named | App Step 2 |
            | user age                 | age                                                                              | regexp named | App Step 2 |
            | global application       | purchase financing                                                               | string       | App Step 2 |
            | application name         | financiamiento de compras                                                        | string       | App Step 2 |
            | application type         | operativa                                                                        | string       | App Step 2 |
            | application step         | 2 meses a diferir                                                                | string       | App Step 2 |
            | fulfillment model        | online                                                                           | string       | App Step 2 |
            | custom fields            | diferimiento:smart payment services                                              | string       | App Step 2 |
            | product primary category | tarjetas                                                                         | string       | App Step 2 |
            | product subtype          | tarjetas debito                                                                  | string       | App Step 2 |
            | internal campaign        |                                                                                  | empty array  | App Step 2 |
            | optimization attributes  |                                                                                  | empty array  | App Step 2 |

    @ANA_EVENT_FTMD005
    @analytics
    @ios @android @web @web-done
    @MX @backend(test) @vbank
    Scenario: Accepts terms and conditions - App Step 3
        Given a user with the following criteria
            | criteria       |
            | financing line |
            | offers         |
        And the user accesses to the "operative" "debit" card product detail
        And the analytics interceptor service is initiated
        And the user accesses to finance transaction multipurchase debit
        And the user to enter to months to defer step with a purchase "1740"
        When the user enters to terms and conditions with a period of "6" months
        Then the analytics events contains the following variables
            | item                       | value                                                                                   | type         | event      |
            | analytics                  | analytics/glomo_base                                                                    | json schema  | App Step 3 |
            | version DL                 | 20250414_5.0                                                                            | string       | App Step 3 |
            | page name                  | app:privada:personas:tarjetas:debito:financiamiento de compras:3 terminos y condiciones | string       | App Step 3 |
            | level 1                    | tarjetas                                                                                | string       | App Step 3 |
            | level 2                    | debito                                                                                  | string       | App Step 3 |
            | level 3                    | financiamiento de compras                                                               | string       | App Step 3 |
            | level 4                    | 3 terminos y condiciones                                                                | string       | App Step 3 |
            | language                   | ES                                                                                      | string       | App Step 3 |
            | page area                  | privada                                                                                 | string       | App Step 3 |
            | page intent                | transaccion                                                                             | string       | App Step 3 |
            | channel                    | online                                                                                  | string       | App Step 3 |
            | page instance ID           | de                                                                                      | string       | App Step 3 |
            | version DL                 | 20250414_5.0                                                                            | string       | App Step 3 |
            | page info version          | appVersion                                                                              | regexp named | App Step 3 |
            | page segment               | personas                                                                                | string       | App Step 3 |
            | sysEnv                     | app                                                                                     | string       | App Step 3 |
            | business unit              | BBVA Mexico                                                                             | string       | App Step 3 |
            | site app name              | App BBVA Mexico                                                                         | string       | App Step 3 |
            | project name               | DIY Payments                                                                            | string       | App Step 3 |
            | device mobile              | si                                                                                      | string       | App Step 3 |
            | user userState             | logado                                                                                  | string       | App Step 3 |
            | profile ID                 | profileID                                                                               | regexp named | App Step 3 |
            | user segment global        | 003001                                                                                  | string       | App Step 3 |
            | user gender                | gender                                                                                  | regexp named | App Step 3 |
            | user age                   | age                                                                                     | regexp named | App Step 3 |
            | global application         | purchase financing                                                                      | string       | App Step 3 |
            | application name           | financiamiento de compras                                                               | string       | App Step 3 |
            | application type           | operativa                                                                               | string       | App Step 3 |
            | application step           | 3 terminos y condiciones                                                                | string       | App Step 3 |
            | fulfillment model          | online                                                                                  | string       | App Step 3 |
            | custom fields              | diferimiento:smart payment services                                                     | string       | App Step 3 |
            | product primary category   | tarjetas                                                                                | string       | App Step 3 |
            | product subtype            | tarjetas debito                                                                         | string       | App Step 3 |
            | product amount             | 1740                                                                                    | string       | App Step 3 |
            | product payment amount     | 320.28                                                                                  | string       | App Step 3 |
            | product number of payments | 6                                                                                       | string       | App Step 3 |
            | product interest rate      | 34.8                                                                                    | string       | App Step 3 |
            | product currency           | MXN                                                                                     | string       | App Step 3 |
            | internal campaign          |                                                                                         | empty array  | App Step 3 |
            | optimization attributes    |                                                                                         | empty array  | App Step 3 |

    @ANA_EVENT_FTMD006
    @analytics
    @ios @android @web @tmpExclude @JIRA.GLOMOMX-254311
    @MX @backend(test) @vbank
    Scenario: Sees otp token modal - App Step 4
        Given a user with the following criteria
            | criteria       |
            | financing line |
            | with offer     |
        And the user accesses to the "operative" "debit" card product detail
        And the analytics interceptor service is initiated
        And the user accesses to finance transaction multipurchase debit
        And the user to enter to months to defer step with a purchase "769"
        And the user enters to terms and conditions with a period of "6" months
        When the user confirms terms and conditions step
        Then the analytics events contains the following variables
            | item                       | value                                                                | type         | event      |
            | analytics                  | analytics/glomo_base                                                 | json schema  | App Step 4 |
            | version DL                 | 20250414_5.0                                                         | string       | App Step 4 |
            | page name                  | app:privada:personas:tarjetas:debito:financiamiento de compras:4 otp | string       | App Step 4 |
            | level 1                    | tarjetas                                                             | string       | App Step 4 |
            | level 2                    | debito                                                               | string       | App Step 4 |
            | level 3                    | financiamiento de compras                                            | string       | App Step 4 |
            | level 4                    | 4 otp                                                                | string       | App Step 4 |
            | language                   | ES                                                                   | string       | App Step 4 |
            | page area                  | privada                                                              | string       | App Step 4 |
            | page intent                | transaccion                                                          | string       | App Step 4 |
            | channel                    | online                                                               | string       | App Step 4 |
            | page instance ID           | de                                                                   | string       | App Step 4 |
            | version DL                 | 20250414_5.0                                                         | string       | App Step 4 |
            | page info version          | appVersion                                                           | regexp named | App Step 4 |
            | page segment               | personas                                                             | string       | App Step 4 |
            | sysEnv                     | app                                                                  | string       | App Step 4 |
            | business unit              | BBVA Mexico                                                          | string       | App Step 4 |
            | site app name              | App BBVA Mexico                                                      | string       | App Step 4 |
            | project name               | DIY Payments                                                         | string       | App Step 4 |
            | device mobile              | si                                                                   | string       | App Step 4 |
            | user userState             | logado                                                               | string       | App Step 4 |
            | profile ID                 | profileID                                                            | regexp named | App Step 4 |
            | user segment global        | 003001                                                               | string       | App Step 4 |
            | user gender                | gender                                                               | regexp named | App Step 4 |
            | user age                   | age                                                                  | regexp named | App Step 4 |
            | global application         | purchase financing                                                   | string       | App Step 4 |
            | application name           | financiamiento de compras                                            | string       | App Step 4 |
            | application type           | operativa                                                            | string       | App Step 4 |
            | application step           | 4 otp                                                                | string       | App Step 4 |
            | fulfillment model          | online                                                               | string       | App Step 4 |
            | custom fields              | diferimiento:british columbia can, firma:token                       | string       | App Step 4 |
            | product primary category   | tarjetas                                                             | string       | App Step 4 |
            | product subtype            | tarjetas debito                                                      | string       | App Step 4 |
            | product amount             | 849.28                                                               | string       | App Step 4 |
            | product payment amount     | 141.55                                                               | string       | App Step 4 |
            | product number of payments | 6                                                                    | string       | App Step 4 |
            | product interest rate      | 0                                                                    | string       | App Step 4 |
            | product currency           | MXN                                                                  | string       | App Step 4 |
            | internal campaign          |                                                                      | empty array  | App Step 4 |
            | optimization attributes    |                                                                      | empty array  | App Step 4 |

    @ANA_EVENT_FTMD007
    @analytics
    @ios @android @web @web-done
    @MX @backend(test) @vbank
    Scenario: Contracting financing line - App Step 5
        Given a user with the following criteria
            | criteria       |
            | financing line |
            | offers         |
        And the user accesses to the "operative" "debit" card product detail
        And the analytics interceptor service is initiated
        And the user accesses to finance transaction multipurchase debit
        And the user to enter to months to defer step with a purchase "1218"
        And the user enters to terms and conditions with a period of "6" months
        When the user completes the deferral of purchase
        Then the analytics events contains the following variables
            | item                       | value                                                                                    | type         | event      |
            | analytics                  | analytics/glomo_base                                                                     | json schema  | App Step 5 |
            | version DL                 | 20250414_5.0                                                                             | string       | App Step 5 |
            | page name                  | app:privada:personas:tarjetas:debito:financiamiento de compras:5 contratacion finalizada | string       | App Step 5 |
            | level 1                    | tarjetas                                                                                 | string       | App Step 5 |
            | level 2                    | debito                                                                                   | string       | App Step 5 |
            | level 3                    | financiamiento de compras                                                                | string       | App Step 5 |
            | level 4                    | 5 contratacion finalizada                                                                | string       | App Step 5 |
            | language                   | ES                                                                                       | string       | App Step 5 |
            | page area                  | privada                                                                                  | string       | App Step 5 |
            | page intent                | transaccion                                                                              | string       | App Step 5 |
            | channel                    | online                                                                                   | string       | App Step 5 |
            | page instance ID           | de                                                                                       | string       | App Step 5 |
            | version DL                 | 20250414_5.0                                                                             | string       | App Step 5 |
            | page info version          | appVersion                                                                               | regexp named | App Step 5 |
            | page segment               | personas                                                                                 | string       | App Step 5 |
            | sysEnv                     | app                                                                                      | string       | App Step 5 |
            | business unit              | BBVA Mexico                                                                              | string       | App Step 5 |
            | site app name              | App BBVA Mexico                                                                          | string       | App Step 5 |
            | project name               | DIY Payments                                                                             | string       | App Step 5 |
            | device mobile              | si                                                                                       | string       | App Step 5 |
            | user userState             | logado                                                                                   | string       | App Step 5 |
            | profile ID                 | profileID                                                                                | regexp named | App Step 5 |
            | user segment global        | 003001                                                                                   | string       | App Step 5 |
            | user gender                | gender                                                                                   | regexp named | App Step 5 |
            | user age                   | age                                                                                      | regexp named | App Step 5 |
            | global application         | purchase financing                                                                       | string       | App Step 5 |
            | application name           | financiamiento de compras                                                                | string       | App Step 5 |
            | application type           | operativa                                                                                | string       | App Step 5 |
            | application step           | 5 contratacion finalizada                                                                | string       | App Step 5 |
            | fulfillment model          | online                                                                                   | string       | App Step 5 |
            | custom fields              | diferimiento:mas vision las haciend        , folio de operacion:000146731129082818       | string       | App Step 5 |
            | product primary category   | tarjetas                                                                                 | string       | App Step 5 |
            | product subtype            | tarjetas debito                                                                          | string       | App Step 5 |
            | product amount             | 1218                                                                                     | string       | App Step 5 |
            | product payment amount     | 141.55                                                                                   | string       | App Step 5 |
            | product number of payments | 6                                                                                        | string       | App Step 5 |
            | product interest rate      | 34.8                                                                                     | string       | App Step 5 |
            | product currency           | MXN                                                                                      | string       | App Step 5 |
            | internal campaign          |                                                                                          | empty array  | App Step 5 |
            | optimization attributes    |                                                                                          | empty array  | App Step 5 |

    @ANA_EVENT_FTMD008
    @analytics
    @ios @android @web @web-done
    @MX @backend(test) @vbank
    Scenario: See summary view - App Step 6
        Given a user with the following criteria
            | criteria       |
            | financing line |
            | offers         |
        When the user accesses to the "operative" "debit" card product detail
        And the analytics interceptor service is initiated
        And the user accesses to finance transaction multipurchase debit
        And the user to enter to months to defer step with a purchase "1740"
        And the user enters to terms and conditions with a period of "6" months
        And the user completes the deferral of purchase
        Then the user sees the summary view step
        And the analytics events contains the following variables
            | item                       | value                                                                         | type         | event      |
            | analytics                  | analytics/glomo_base                                                          | json schema  | App Step 6 |
            | version DL                 | 20250414_5.0                                                                          | string       | App Step 6 |
            | page name                  | app:privada:personas:tarjetas:debito:financiamiento de compras:6 confirmacion | string       | App Step 6 |
            | level 1                    | tarjetas                                                                      | string       | App Step 6 |
            | level 2                    | debito                                                                        | string       | App Step 6 |
            | level 3                    | financiamiento de compras                                                     | string       | App Step 6 |
            | level 4                    | 6 confirmacion                                                                | string       | App Step 6 |
            | language                   | ES                                                                            | string       | App Step 6 |
            | page area                  | privada                                                                       | string       | App Step 6 |
            | page intent                | transaccion                                                                   | string       | App Step 6 |
            | channel                    | online                                                                        | string       | App Step 6 |
            | page instance ID           | de                                                                            | string       | App Step 6 |
            | version DL                 | 20250414_5.0                                                                          | string       | App Step 6 |
            | page info version          | appVersion                                                                    | regexp named | App Step 6 |
            | page segment               | personas                                                                      | string       | App Step 6 |
            | sysEnv                     | app                                                                           | string       | App Step 6 |
            | business unit              | BBVA Mexico                                                                   | string       | App Step 6 |
            | site app name              | App BBVA Mexico                                                               | string       | App Step 6 |
            | project name               | DIY Payments                                                                  | string       | App Step 6 |
            | device mobile              | si                                                                            | string       | App Step 6 |
            | user userState             | logado                                                                        | string       | App Step 6 |
            | profile ID                 | profileID                                                                     | regexp named | App Step 6 |
            | user segment global        | 003001                                                                        | string       | App Step 6 |
            | user gender                | gender                                                                        | regexp named | App Step 6 |
            | user age                   | age                                                                           | regexp named | App Step 6 |
            | global application         | purchase financing                                                            | string       | App Step 6 |
            | application name           | financiamiento de compras                                                     | string       | App Step 6 |
            | application type           | operativa                                                                     | string       | App Step 6 |
            | application step           | 6 confirmacion                                                                | string       | App Step 6 |
            | fulfillment model          | online                                                                        | string       | App Step 6 |
            | custom fields              | diferimiento:smart payment services, folio de operacion:000146731129082818    | string       | App Step 6 |
            | product primary category   | tarjetas                                                                      | string       | App Step 6 |
            | product subtype            | tarjetas debito                                                               | string       | App Step 6 |
            | product amount             | 1740                                                                          | string       | App Step 6 |
            | product payment amount     | 141.55                                                                        | string       | App Step 6 |
            | product number of payments | 6                                                                             | string       | App Step 6 |
            | product interest rate      | 34.8                                                                          | string       | App Step 6 |
            | product currency           | MXN                                                                           | string       | App Step 6 |
            | internal campaign          |                                                                               | empty array  | App Step 6 |
            | optimization attributes    |                                                                               | empty array  | App Step 6 |

    @ANA_EVENT_FTMD009
    @analytics
    @ios @android @web @web-done
    @MX @backend(test) @vbank
    Scenario: Sees second otp token modal - App Step 7
        Given a user with the following criteria
            | criteria       |
            | financing line |
            | offers         |
        And the user accesses to the "operative" "debit" card product detail
        And the analytics interceptor service is initiated
        And the user accesses to finance transaction multipurchase debit
        And the user to enter to months to defer step with a purchase "1740"
        And the user enters to terms and conditions with a period of "6" months
        And the user completes the deferral of purchase
        When the user confirms the summary view step
        Then the analytics events contains the following variables
            | item                       | value                                                                      | type         | event      |
            | analytics                  | analytics/glomo_base                                                       | json schema  | App Step 7 |
            | version DL                 | 20250414_5.0                                                                          | string       | App Step 7 |
            | page name                  | app:privada:personas:tarjetas:debito:financiamiento de compras:7 otp       | string       | App Step 7 |
            | level 1                    | tarjetas                                                                   | string       | App Step 7 |
            | level 2                    | debito                                                                     | string       | App Step 7 |
            | level 3                    | financiamiento de compras                                                  | string       | App Step 7 |
            | level 4                    | 7 otp                                                                      | string       | App Step 7 |
            | language                   | ES                                                                         | string       | App Step 7 |
            | page area                  | privada                                                                    | string       | App Step 7 |
            | page intent                | transaccion                                                                | string       | App Step 7 |
            | channel                    | online                                                                     | string       | App Step 7 |
            | page instance ID           | de                                                                         | string       | App Step 7 |
            | version DL                 | 20250414_5.0                                                                          | string       | App Step 7 |
            | page info version          | appVersion                                                                 | regexp named | App Step 7 |
            | page segment               | personas                                                                   | string       | App Step 7 |
            | sysEnv                     | app                                                                        | string       | App Step 7 |
            | business unit              | BBVA Mexico                                                                | string       | App Step 7 |
            | site app name              | App BBVA Mexico                                                            | string       | App Step 7 |
            | project name               | DIY Payments                                                               | string       | App Step 7 |
            | device mobile              | si                                                                         | string       | App Step 7 |
            | user userState             | logado                                                                     | string       | App Step 7 |
            | profile ID                 | profileID                                                                  | regexp named | App Step 7 |
            | user segment global        | 003001                                                                     | string       | App Step 7 |
            | user gender                | gender                                                                     | regexp named | App Step 7 |
            | user age                   | age                                                                        | regexp named | App Step 7 |
            | global application         | purchase financing                                                         | string       | App Step 7 |
            | application name           | financiamiento de compras                                                  | string       | App Step 7 |
            | application type           | operativa                                                                  | string       | App Step 7 |
            | application step           | 7 otp                                                                      | string       | App Step 7 |
            | fulfillment model          | online                                                                     | string       | App Step 7 |
            | custom fields              | diferimiento:smart payment services, folio de operacion:000146731129082818 | string       | App Step 7 |
            | product primary category   | tarjetas                                                                   | string       | App Step 7 |
            | product subtype            | tarjetas debito                                                            | string       | App Step 7 |
            | product amount             | 1740                                                                       | string       | App Step 7 |
            | product payment amount     | 141.55                                                                     | string       | App Step 7 |
            | product number of payments | 6                                                                          | string       | App Step 7 |
            | product interest rate      | 34.8                                                                       | string       | App Step 7 |
            | product currency           | MXN                                                                        | string       | App Step 7 |
            | internal campaign          |                                                                            | empty array  | App Step 7 |
            | optimization attributes    |                                                                            | empty array  | App Step 7 |

    @ANA_EVENT_FTMD010
    @analytics
    @ios @android @web @web-done
    @MX @backend(test) @vbank
    Scenario: Access to successful contracting - App Completed
        Given a user with the following criteria
            | criteria       |
            | financing line |
            | offers         |
        And the user accesses to the "operative" "debit" card product detail
        And the analytics interceptor service is initiated
        And the user accesses to finance transaction multipurchase debit
        And the user to enter to months to defer step with a purchase "1740"
        And the user enters to terms and conditions with a period of "6" months
        And the user completes the deferral of purchase
        When the user signs the summary view step
        Then the analytics events contains the following variables
            | item                         | value                                                                         | type         | event         |
            | analytics                    | analytics/glomo_base                                                          | json schema  | App Completed |
            | version DL                   | 20250414_5.0                                                                          | string       | App Completed |
            | page name                    | app:privada:personas:tarjetas:debito:financiamiento de compras:pagina exitosa | string       | App Completed |
            | level 1                      | tarjetas                                                                      | string       | App Completed |
            | level 2                      | debito                                                                        | string       | App Completed |
            | level 3                      | financiamiento de compras                                                     | string       | App Completed |
            | level 4                      | pagina exitosa                                                                | string       | App Completed |
            | language                     | ES                                                                            | string       | App Completed |
            | page area                    | privada                                                                       | string       | App Completed |
            | page intent                  | transaccion                                                                   | string       | App Completed |
            | channel                      | online                                                                        | string       | App Completed |
            | page instance ID             | de                                                                            | string       | App Completed |
            | version DL                   | 20250414_5.0                                                                          | string       | App Completed |
            | page info version            | appVersion                                                                    | regexp named | App Completed |
            | page segment                 | personas                                                                      | string       | App Completed |
            | sysEnv                       | app                                                                           | string       | App Completed |
            | business unit                | BBVA Mexico                                                                   | string       | App Completed |
            | site app name                | App BBVA Mexico                                                               | string       | App Completed |
            | project name                 | DIY Payments                                                                  | string       | App Completed |
            | device mobile                | si                                                                            | string       | App Completed |
            | user userState               | logado                                                                        | string       | App Completed |
            | profile ID                   | profileID                                                                     | regexp named | App Completed |
            | user segment global          | 003001                                                                        | string       | App Completed |
            | user gender                  | gender                                                                        | regexp named | App Completed |
            | user age                     | age                                                                           | regexp named | App Completed |
            | global application           | purchase financing                                                            | string       | App Completed |
            | application name             | financiamiento de compras                                                     | string       | App Completed |
            | application type             | operativa                                                                     | string       | App Completed |
            | application step             | pagina exitosa                                                                | string       | App Completed |
            | fulfillment model            | online                                                                        | string       | App Completed |
            | custom fields                | diferimiento:smart payment services, folio de operacion:000146731129082818    | string       | App Completed |
            | application state            | finalizado                                                                    | string       | App Completed |
            | application operation number | 000146731129082818                                                            | string       | App Completed |
            | product primary category     | tarjetas                                                                      | string       | App Completed |
            | product subtype              | tarjetas debito                                                               | string       | App Completed |
            | product amount               | 1740                                                                          | string       | App Completed |
            | product payment amount       | 141.55                                                                        | string       | App Completed |
            | product number of payments   | 6                                                                             | string       | App Completed |
            | product interest rate        | 34.8                                                                          | string       | App Completed |
            | product currency             | MXN                                                                           | string       | App Completed |
            | internal campaign            |                                                                               | empty array  | App Completed |
            | optimization attributes      |                                                                               | empty array  | App Completed |

    @ANA_EVENT_FTMD011
    @analytics
    @ios @android @web @web-done
    @MX @backend(test) @vbank
    Scenario: See onboarding - Page View
        Given a user with the following criteria
            | criteria       |
            | financing line |
            | offers         |
        And the user accesses to the "operative" "debit" card product detail
        And the analytics interceptor service is initiated
        When the user accesses to onboarding screen
        Then the analytics events contains the following variables
            | item                    | value                                                                              | type             | event     |
            | analytics               | analytics/glomo_base                                                               | json schema      | Page View |
            | version DL              | 20250414_5.0                                                                       | string           | Page View |
            | page name               | app:privada:personas:tarjetas:debito:financiamiento de compras:difiere tus compras | string           | Page View |
            | level 1                 | tarjetas                                                                           | string           | Page View |
            | level 2                 | debito                                                                             | string           | Page View |
            | level 3                 | financiamiento de compras                                                          | string           | Page View |
            | level 4                 | difiere tus compras                                                                | string           | Page View |
            | language                | ES                                                                                 | string           | Page View |
            | page area               | privada                                                                            | string           | Page View |
            | page intent             | transaccion                                                                        | string           | Page View |
            | channel                 | online                                                                             | string           | Page View |
            | page instance ID        | de                                                                                 | string           | Page View |
            | page info version       | appVersion                                                                         | regexp named     | Page View |
            | page segment            | personas                                                                           | string           | Page View |
            | sysEnv                  | app                                                                                | string           | Page View |
            | business unit           | BBVA Mexico                                                                        | string           | Page View |
            | site app name           | App BBVA Mexico                                                                    | string           | Page View |
            | project name            | DIY Payments                                                                       | string           | Page View |
            | device mobile           | si                                                                                 | string           | Page View |
            | user userState          | logado                                                                             | string           | Page View |
            | profile ID              | profileID                                                                          | regexp named     | Page View |
            | user segment global     | 003001                                                                             | string           | Page View |
            | user gender             | gender                                                                             | regexp named     | Page View |
            | user age                | age                                                                                | regexp named     | Page View |
            | internal campaign       |                                                                                    | empty array      | Page View |
            | optimization attributes |                                                                                    | empty array      | Page View |
            | application             |                                                                                    | empty str object | Page View |
            | products attributes     |                                                                                    | empty array      | Page View |

    @ANA_EVENT_FTMD012
    @analytics
    @ios @android @web @web-done
    @MX @backend(test) @vbank
    Scenario: Purchases participants modal - Page View
        Given a user with the following criteria
            | criteria       |
            | financing line |
            | offers         |
        And the user accesses to the "operative" "debit" card product detail
        And the analytics interceptor service is initiated
        And the user accesses to finance transaction multipurchase debit
        When the user enters to participating purchases help screen
        Then the analytics events contains the following variables
            | item                    | value                                                                                | type             | event     | event number |
            | analytics               | analytics/glomo_base                                                                 | json schema      | Page View | 2            |
            | version DL              | 20250414_5.0                                                                         | string           | Page View | 2            |
            | page name               | app:privada:personas:tarjetas:debito:financiamiento de compras:compras participantes | string           | Page View | 2            |
            | level 1                 | tarjetas                                                                             | string           | Page View | 2            |
            | level 2                 | debito                                                                               | string           | Page View | 2            |
            | level 3                 | financiamiento de compras                                                            | string           | Page View | 2            |
            | level 4                 | compras participantes                                                                | string           | Page View | 2            |
            | language                | ES                                                                                   | string           | Page View | 2            |
            | page area               | privada                                                                              | string           | Page View | 2            |
            | page intent             | transaccion                                                                          | string           | Page View | 2            |
            | channel                 | online                                                                               | string           | Page View | 2            |
            | page instance ID        | de                                                                                   | string           | Page View | 2            |
            | page info version       | appVersion                                                                           | regexp named     | Page View | 2            |
            | page segment            | personas                                                                             | string           | Page View | 2            |
            | sysEnv                  | app                                                                                  | string           | Page View | 2            |
            | business unit           | BBVA Mexico                                                                          | string           | Page View | 2            |
            | site app name           | App BBVA Mexico                                                                      | string           | Page View | 2            |
            | project name            | DIY Payments                                                                         | string           | Page View | 2            |
            | device mobile           | si                                                                                   | string           | Page View | 2            |
            | user userState          | logado                                                                               | string           | Page View | 2            |
            | profile ID              | profileID                                                                            | regexp named     | Page View | 2            |
            | user segment global     | 003001                                                                               | string           | Page View | 2            |
            | user gender             | gender                                                                               | regexp named     | Page View | 2            |
            | user age                | age                                                                                  | regexp named     | Page View | 2            |
            | internal campaign       |                                                                                      | empty array      | Page View | 2            |
            | optimization attributes |                                                                                      | empty array      | Page View | 2            |
            | application             |                                                                                      | empty str object | Page View | 2            |
            | products attributes     |                                                                                      | empty array      | Page View | 2            |

    @ANA_EVENT_FTMD013
    @analytics
    @ios @android @web @web-done
    @MX @backend(test) @vbank
    Scenario Outline: <help button> help - Page View
        Given a user with the following criteria
            | criteria       |
            | financing line |
            | offers         |
        And the user accesses to the "operative" "debit" card product detail
        And the analytics interceptor service is initiated
        And the user accesses to finance transaction multipurchase debit
        And the user to enter to months to defer step with a purchase "1740"
        When the user enters to <help button> screen
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
            | help button             | level                     |
            | defer commission detail | comision por diferimiento |
            | first pay date          | fecha primer pago         |
            | cat commission help     | cat diferimiento          |

    @ANA_EVENT_FTMD014
    @analytics
    @ios @android @web @web-done
    @MX @backend(test) @vbank
    Scenario Outline: <detail button> detail information - Page View
        Given a user with the following criteria
            | criteria       |
            | financing line |
            | offers         |
        And the user accesses to the "operative" "debit" card product detail
        And the analytics interceptor service is initiated
        And the user accesses to finance transaction multipurchase debit
        And the user to enter to months to defer step with a purchase "1740"
        And the user enters to terms and conditions with a period of "6" months
        When the user enters to <detail button> screen
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
            | detail button      | level                                |
            | know the features  | caracteristicas linea financiamiento |
            | CAT of recruitment | cat linea financiamiento             |

    @ANA_EVENT_FTMD015
    @analytics
    @ios @android @web @web-done
    @MX @backend(test) @vbank
    Scenario: Purchases limit error - Page View
        Given a user with the following criteria
            | criteria       |
            | financing line |
            | offers         |
        And the user accesses to the "operative" "debit" card product detail
        And the analytics interceptor service is initiated
        And the user accesses to finance transaction multipurchase debit
        When the user selects more than five purchases
        Then the analytics events contains the following variables
            | item                    | value                                                                                             | type             | event     | event number |
            | analytics               | analytics/glomo_base                                                                              | json schema      | Page View | 2            |
            | version DL              | 20250414_5.0                                                                                      | string           | Page View | 2            |
            | page name               | app:privada:personas:tarjetas:debito:financiamiento de compras:error limite compras seleccionadas | string           | Page View | 2            |
            | level 1                 | tarjetas                                                                                          | string           | Page View | 2            |
            | level 2                 | debito                                                                                            | string           | Page View | 2            |
            | level 3                 | financiamiento de compras                                                                         | string           | Page View | 2            |
            | level 4                 | error limite compras seleccionadas                                                                | string           | Page View | 2            |
            | error page              | error limite compras seleccionadas                                                                | string           | Page View | 2            |
            | language                | ES                                                                                                | string           | Page View | 2            |
            | page area               | privada                                                                                           | string           | Page View | 2            |
            | page intent             | transaccion                                                                                       | string           | Page View | 2            |
            | channel                 | online                                                                                            | string           | Page View | 2            |
            | page instance ID        | de                                                                                                | string           | Page View | 2            |
            | page info version       | appVersion                                                                                        | regexp named     | Page View | 2            |
            | page segment            | personas                                                                                          | string           | Page View | 2            |
            | sysEnv                  | app                                                                                               | string           | Page View | 2            |
            | business unit           | BBVA Mexico                                                                                       | string           | Page View | 2            |
            | site app name           | App BBVA Mexico                                                                                   | string           | Page View | 2            |
            | project name            | DIY Payments                                                                                      | string           | Page View | 2            |
            | device mobile           | si                                                                                                | string           | Page View | 2            |
            | user userState          | logado                                                                                            | string           | Page View | 2            |
            | profile ID              | profileID                                                                                         | regexp named     | Page View | 2            |
            | user segment global     | 003001                                                                                            | string           | Page View | 2            |
            | user gender             | gender                                                                                            | regexp named     | Page View | 2            |
            | user age                | age                                                                                               | regexp named     | Page View | 2            |
            | internal campaign       |                                                                                                   | empty array      | Page View | 2            |
            | optimization attributes |                                                                                                   | empty array      | Page View | 2            |
            | application             |                                                                                                   | empty str object | Page View | 2            |
            | products attributes     |                                                                                                   | empty array      | Page View | 2            |

    @ANA_EVENT_FTMD016
    @analytics
    @ios @android @web @web-done
    @MX @backend(test) @vbank
    Scenario: Without purchases error - Page View
        Given a user with the following criteria
            | criteria       |
            | financing line |
            | offers         |
        And the user accesses to the "operative" "debit" card product detail
        And the analytics interceptor service is initiated
        When the user accesses to onboarding screen
        Then the analytics events contains the following variables
            | item                    | value                                                                      | type             | event     | event number |
            | analytics               | analytics/glomo_base                                                       | json schema      | Page View | 2            |
            | version DL              | 20250414_5.0                                                               | string           | Page View | 2            |
            | page name               | app:privada:personas:tarjetas:debito:financiamiento de compras:sin compras | string           | Page View | 2            |
            | level 1                 | tarjetas                                                                   | string           | Page View | 2            |
            | level 2                 | debito                                                                     | string           | Page View | 2            |
            | level 3                 | financiamiento de compras                                                  | string           | Page View | 2            |
            | level 4                 | sin compras                                                                | string           | Page View | 2            |
            | language                | ES                                                                         | string           | Page View | 2            |
            | page area               | privada                                                                    | string           | Page View | 2            |
            | page intent             | transaccion                                                                | string           | Page View | 2            |
            | channel                 | online                                                                     | string           | Page View | 2            |
            | page instance ID        | de                                                                         | string           | Page View | 2            |
            | page info version       | appVersion                                                                 | regexp named     | Page View | 2            |
            | page segment            | personas                                                                   | string           | Page View | 2            |
            | sysEnv                  | app                                                                        | string           | Page View | 2            |
            | business unit           | BBVA Mexico                                                                | string           | Page View | 2            |
            | site app name           | App BBVA Mexico                                                            | string           | Page View | 2            |
            | project name            | DIY Payments                                                               | string           | Page View | 2            |
            | device mobile           | si                                                                         | string           | Page View | 2            |
            | user userState          | logado                                                                     | string           | Page View | 2            |
            | profile ID              | profileID                                                                  | regexp named     | Page View | 2            |
            | user segment global     | 003001                                                                     | string           | Page View | 2            |
            | user gender             | gender                                                                     | regexp named     | Page View | 2            |
            | user age                | age                                                                        | regexp named     | Page View | 2            |
            | internal campaign       |                                                                            | empty array      | Page View | 2            |
            | optimization attributes |                                                                            | empty array      | Page View | 2            |
            | application             |                                                                            | empty str object | Page View | 2            |
            | products attributes     |                                                                            | empty array      | Page View | 2            |

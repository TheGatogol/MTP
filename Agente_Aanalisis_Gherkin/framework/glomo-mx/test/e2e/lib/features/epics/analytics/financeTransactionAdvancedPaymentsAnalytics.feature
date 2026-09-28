@financeTransactionAdvancedPaymentsAnalytics
Feature: Analytics - Finance Transaction Advanced Payments

    @ANA_EVENT_APA001
    @analytics
    @MX @web @android @ios
    @backend(test) @vbank
    @web-done
    Scenario: Advance Payments - App On Click Start - The customer enters the advance payment operative from the financing line details
        Given a user with the following criteria
            | criteria           |
            | financing line     |
            | offers detail card |
        And the user accesses to the "operative" "debit" card product detail
        And the analytics interceptor service is initiated
        When the user accesses the "no deferrals" section
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
            | global application       | purchase financing advanced payments                           | string       | App On Click Start |
            | application name         | anticipo de pagos diferimientos                                | string       | App On Click Start |
            | application type         | operativa                                                      | string       | App On Click Start |
            | application step         | anticipar pago                                                 | string       | App On Click Start |
            | fulfillment model        | online                                                         | string       | App On Click Start |
            | product primary category | tarjetas                                                       | string       | App On Click Start |
            | product subtype          | tarjetas debito                                                | string       | App On Click Start |
            | internal campaign        |                                                                | empty array  | App On Click Start |
            | optimization attributes  |                                                                | empty array  | App On Click Start |

    @ANA_EVENT_APA002
    @analytics
    @MX @web @android @ios
    @backend(test) @vbank
    @web-done
    Scenario: Advance Payments - App On Click Start - The customer enters the advance payment operative from the line cancellation pending payments modal
        Given a user with the following criteria
            | criteria        |
            | monthly payment |
        And the user attempts to access to Financing Cancel of Debit line
        And the analytics interceptor service is initiated
        When the user anticipates payment
        Then the analytics events contains the following variables
            | item                     | value                                                                                  | type         | event              |
            | analytics                | analytics/glomo_base                                                                   | json schema  | App On Click Start |
            | version DL               | 20250414_5.0                                                                           | string       | App On Click Start |
            | page name                | app:privada:personas:tarjetas:debito:compras diferidas:cancelar linea:pagos pendientes | string       | App On Click Start |
            | level 1                  | tarjetas                                                                               | string       | App On Click Start |
            | level 2                  | debito                                                                                 | string       | App On Click Start |
            | level 3                  | compras diferidas                                                                      | string       | App On Click Start |
            | level 4                  | cancelar linea                                                                         | string       | App On Click Start |
            | level 5                  | pagos pendientes                                                                       | string       | App On Click Start |
            | language                 | ES                                                                                     | string       | App On Click Start |
            | page area                | privada                                                                                | string       | App On Click Start |
            | page intent              | informacion                                                                            | string       | App On Click Start |
            | channel                  | online                                                                                 | string       | App On Click Start |
            | page instance ID         | de                                                                                     | string       | App On Click Start |
            | page info version        | appVersion                                                                             | regexp named | App On Click Start |
            | page segment             | personas                                                                               | string       | App On Click Start |
            | sysEnv                   | app                                                                                    | string       | App On Click Start |
            | business unit            | BBVA Mexico                                                                            | string       | App On Click Start |
            | site app name            | App BBVA Mexico                                                                        | string       | App On Click Start |
            | project name             | DIY Payments                                                                           | string       | App On Click Start |
            | device mobile            | si                                                                                     | string       | App On Click Start |
            | user userState           | logado                                                                                 | string       | App On Click Start |
            | profile ID               | profileID                                                                              | regexp named | App On Click Start |
            | user segment global      | 003001                                                                                 | string       | App On Click Start |
            | user gender              | gender                                                                                 | regexp named | App On Click Start |
            | user age                 | age                                                                                    | regexp named | App On Click Start |
            | global application       | purchase financing advanced payments                                                   | string       | App On Click Start |
            | application name         | anticipo de pagos diferimientos                                                        | string       | App On Click Start |
            | application type         | operativa                                                                              | string       | App On Click Start |
            | application step         | anticipar pago                                                                         | string       | App On Click Start |
            | fulfillment model        | online                                                                                 | string       | App On Click Start |
            | product primary category | tarjetas                                                                               | string       | App On Click Start |
            | product subtype          | tarjetas debito                                                                        | string       | App On Click Start |

    @ANA_EVENT_APA003
    @analytics
    @MX @web @android @ios
    @backend(test) @vbank
    @web-done
    Scenario: Advance Payments - App On Click Start - The customer enters the advance payment operative from the release financing line modal
        Given a user with the following criteria
            | criteria         |
            | advance payments |
        And the user accesses to the "operative" "debit" card product detail
        And the user accesses to Financing Dashboard
        And the analytics interceptor service is initiated
        When the user accesses to finance transaction multipurchase debit and access advance payment
        Then the analytics events contains the following variables
            | item                     | value                                                                        | type         | event              | event number |
            | analytics                | analytics/glomo_base                                                         | json schema  | App On Click Start | 2            |
            | version DL               | 20250414_5.0                                                                 | string       | App On Click Start | 2            |
            | page name                | app:privada:personas:tarjetas:debito:financiamiento de compras:liberar linea | string       | App On Click Start | 2            |
            | level 1                  | tarjetas                                                                     | string       | App On Click Start | 2            |
            | level 2                  | debito                                                                       | string       | App On Click Start | 2            |
            | level 3                  | financiamiento de compras                                                    | string       | App On Click Start | 2            |
            | level 4                  | liberar linea                                                                | string       | App On Click Start | 2            |
            | language                 | ES                                                                           | string       | App On Click Start | 2            |
            | page area                | privada                                                                      | string       | App On Click Start | 2            |
            | page intent              | informacion                                                                  | string       | App On Click Start | 2            |
            | channel                  | online                                                                       | string       | App On Click Start | 2            |
            | page instance ID         | de                                                                           | string       | App On Click Start | 2            |
            | page info version        | appVersion                                                                   | regexp named | App On Click Start | 2            |
            | page segment             | personas                                                                     | string       | App On Click Start | 2            |
            | sysEnv                   | app                                                                          | string       | App On Click Start | 2            |
            | business unit            | BBVA Mexico                                                                  | string       | App On Click Start | 2            |
            | site app name            | App BBVA Mexico                                                              | string       | App On Click Start | 2            |
            | project name             | DIY Payments                                                                 | string       | App On Click Start | 2            |
            | device mobile            | si                                                                           | string       | App On Click Start | 2            |
            | user userState           | logado                                                                       | string       | App On Click Start | 2            |
            | profile ID               | profileID                                                                    | regexp named | App On Click Start | 2            |
            | user segment global      | 003001                                                                       | string       | App On Click Start | 2            |
            | user gender              | gender                                                                       | regexp named | App On Click Start | 2            |
            | user age                 | age                                                                          | regexp named | App On Click Start | 2            |
            | global application       | purchase financing advanced payments                                         | string       | App On Click Start | 2            |
            | application name         | anticipo de pagos diferimientos                                              | string       | App On Click Start | 2            |
            | application type         | operativa                                                                    | string       | App On Click Start | 2            |
            | application step         | anticipar pago                                                               | string       | App On Click Start | 2            |
            | fulfillment model        | online                                                                       | string       | App On Click Start | 2            |
            | product primary category | tarjetas                                                                     | string       | App On Click Start | 2            |
            | product subtype          | tarjetas debito                                                              | string       | App On Click Start | 2            |
            | internal campaign        |                                                                              | empty array  | App On Click Start | 2            |
            | optimization attributes  |                                                                              | empty array  | App On Click Start | 2            |

    @ANA_EVENT_APA004
    @analytics
    @MX @web @android @ios
    @backend(test) @vbank
    @web-done
    Scenario: Advance Payments - App Page visit - The customer enters the select payment type step
        Given a user with the following criteria
            | criteria           |
            | financing line     |
            | offers detail card |
        And the user accesses to the "operative" "debit" card product detail
        And the analytics interceptor service is initiated
        When the user accesses the "anticipate payments" section
        Then the analytics events contains the following variables
            | item                     | value                                                                                | type         | event          |
            | analytics                | analytics/glomo_base                                                                 | json schema  | App Page Visit |
            | version DL               | 20250414_5.0                                                                         | string       | App Page Visit |
            | page name                | app:privada:personas:tarjetas:debito:compras diferidas:anticipar pago:1 tipo de pago | string       | App Page Visit |
            | level 1                  | tarjetas                                                                             | string       | App Page Visit |
            | level 2                  | debito                                                                               | string       | App Page Visit |
            | level 3                  | compras diferidas                                                                    | string       | App Page Visit |
            | level 4                  | anticipar pago                                                                       | string       | App Page Visit |
            | level 5                  | 1 tipo de pago                                                                       | string       | App Page Visit |
            | language                 | ES                                                                                   | string       | App Page Visit |
            | page area                | privada                                                                              | string       | App Page Visit |
            | page intent              | transaccion                                                                          | string       | App Page Visit |
            | channel                  | online                                                                               | string       | App Page Visit |
            | page instance ID         | de                                                                                   | string       | App Page Visit |
            | page info version        | appVersion                                                                           | regexp named | App Page Visit |
            | page segment             | personas                                                                             | string       | App Page Visit |
            | sysEnv                   | app                                                                                  | string       | App Page Visit |
            | business unit            | BBVA Mexico                                                                          | string       | App Page Visit |
            | site app name            | App BBVA Mexico                                                                      | string       | App Page Visit |
            | project name             | DIY Payments                                                                         | string       | App Page Visit |
            | device mobile            | si                                                                                   | string       | App Page Visit |
            | user userState           | logado                                                                               | string       | App Page Visit |
            | profile ID               | profileID                                                                            | regexp named | App Page Visit |
            | user segment global      | 003001                                                                               | string       | App Page Visit |
            | user gender              | gender                                                                               | regexp named | App Page Visit |
            | user age                 | age                                                                                  | regexp named | App Page Visit |
            | global application       | purchase financing advanced payments                                                 | string       | App Page Visit |
            | application name         | anticipo de pagos diferimientos                                                      | string       | App Page Visit |
            | application type         | operativa                                                                            | string       | App Page Visit |
            | application step         | 1 tipo de pago                                                                       | string       | App Page Visit |
            | fulfillment model        | online                                                                               | string       | App Page Visit |
            | product primary category | tarjetas                                                                             | string       | App Page Visit |
            | product subtype          | tarjetas debito                                                                      | string       | App Page Visit |
            | internal campaign        |                                                                                      | empty array  | App Page Visit |
            | optimization attributes  |                                                                                      | empty array  | App Page Visit |

    @ANA_EVENT_APA005
    @analytics
    @MX @web @android @ios
    @backend(test) @vbank
    @web-done
    Scenario: Advance Payments - App Started - The customer selects the payment type
        Given a user with the following criteria
            | criteria           |
            | financing line     |
            | offers detail card |
        And the user accesses to the "operative" "debit" card product detail
        And the user accesses the "anticipate payments" section
        And the analytics interceptor service is initiated
        When the user selects "advance payment" and continue
        Then the analytics events contains the following variables
            | item                     | value                                                                                | type         | event       |
            | analytics                | analytics/glomo_base                                                                 | json schema  | App Started |
            | version DL               | 20250414_5.0                                                                         | string       | App Started |
            | page name                | app:privada:personas:tarjetas:debito:compras diferidas:anticipar pago:1 tipo de pago | string       | App Started |
            | level 1                  | tarjetas                                                                             | string       | App Started |
            | level 2                  | debito                                                                               | string       | App Started |
            | level 3                  | compras diferidas                                                                    | string       | App Started |
            | level 4                  | anticipar pago                                                                       | string       | App Started |
            | level 5                  | 1 tipo de pago                                                                       | string       | App Started |
            | language                 | ES                                                                                   | string       | App Started |
            | page area                | privada                                                                              | string       | App Started |
            | page intent              | transaccion                                                                          | string       | App Started |
            | channel                  | online                                                                               | string       | App Started |
            | page instance ID         | de                                                                                   | string       | App Started |
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
            | global application       | purchase financing advanced payments                                                 | string       | App Started |
            | application name         | anticipo de pagos diferimientos                                                      | string       | App Started |
            | application type         | operativa                                                                            | string       | App Started |
            | application step         | anticipar pago                                                                       | string       | App Started |
            | fulfillment model        | online                                                                               | string       | App Started |
            | product primary category | tarjetas                                                                             | string       | App Started |
            | product subtype          | tarjetas debito                                                                      | string       | App Started |
            | internal campaign        |                                                                                      | empty array  | App Started |
            | optimization attributes  |                                                                                      | empty array  | App Started |

    @ANA_EVENT_APA006
    @analytics
    @MX @web @android @ios
    @backend(test) @vbank
    @web-done
    Scenario: Advance Payments - App Step 2 - The customer enters the select microloan step
        Given a user with the following criteria
            | criteria           |
            | financing line     |
            | offers detail card |
        And the user accesses to the "operative" "debit" card product detail
        And the user accesses the "anticipate payments" section
        And the analytics interceptor service is initiated
        When the user selects "advance payment" and continue
        Then the analytics events contains the following variables
            | item                     | value                                                                                          | type         | event      |
            | analytics                | analytics/glomo_base                                                                           | json schema  | App Step 2 |
            | version DL               | 20250414_5.0                                                                                   | string       | App Step 2 |
            | page name                | app:privada:personas:tarjetas:debito:compras diferidas:anticipar pago:2 seleccion diferimiento | string       | App Step 2 |
            | level 1                  | tarjetas                                                                                       | string       | App Step 2 |
            | level 2                  | debito                                                                                         | string       | App Step 2 |
            | level 3                  | compras diferidas                                                                              | string       | App Step 2 |
            | level 4                  | anticipar pago                                                                                 | string       | App Step 2 |
            | level 5                  | 2 seleccion diferimiento                                                                       | string       | App Step 2 |
            | language                 | ES                                                                                             | string       | App Step 2 |
            | page area                | privada                                                                                        | string       | App Step 2 |
            | page intent              | transaccion                                                                                    | string       | App Step 2 |
            | channel                  | online                                                                                         | string       | App Step 2 |
            | page instance ID         | de                                                                                             | string       | App Step 2 |
            | page info version        | appVersion                                                                                     | regexp named | App Step 2 |
            | page segment             | personas                                                                                       | string       | App Step 2 |
            | sysEnv                   | app                                                                                            | string       | App Step 2 |
            | business unit            | BBVA Mexico                                                                                    | string       | App Step 2 |
            | site app name            | App BBVA Mexico                                                                                | string       | App Step 2 |
            | project name             | DIY Payments                                                                                   | string       | App Step 2 |
            | device mobile            | si                                                                                             | string       | App Step 2 |
            | user userState           | logado                                                                                         | string       | App Step 2 |
            | profile ID               | profileID                                                                                      | regexp named | App Step 2 |
            | user segment global      | 003001                                                                                         | string       | App Step 2 |
            | user gender              | gender                                                                                         | regexp named | App Step 2 |
            | user age                 | age                                                                                            | regexp named | App Step 2 |
            | global application       | purchase financing advanced payments                                                           | string       | App Step 2 |
            | application name         | anticipo de pagos diferimientos                                                                | string       | App Step 2 |
            | application type         | operativa                                                                                      | string       | App Step 2 |
            | application step         | 2 seleccion diferimiento                                                                       | string       | App Step 2 |
            | fulfillment model        | online                                                                                         | string       | App Step 2 |
            | application typology     | anticipar pago                                                                                 | string       | App Step 2 |
            | product primary category | tarjetas                                                                                       | string       | App Step 2 |
            | product subtype          | tarjetas debito                                                                                | string       | App Step 2 |
            | internal campaign        |                                                                                                | empty array  | App Step 2 |
            | optimization attributes  |                                                                                                | empty array  | App Step 2 |

    @ANA_EVENT_APA007
    @analytics
    @MX @web @android @ios
    @backend(test) @vbank
    @web-done
    Scenario: Advance Payments - App Step 3 - The customer enters the select payment amount step
        Given a user with the following criteria
            | criteria       |
            | financing line |
            | many movements |
        And the user accesses to the "operative" "debit" card product detail
        And the user accesses the "anticipate payments" section
        And the user selects "advance payment" and continue
        And the analytics interceptor service is initiated
        When the user chooses a movement "continue" "0"
        Then the analytics events contains the following variables
            | item                     | value                                                                                 | type         | event      |
            | analytics                | analytics/glomo_base                                                                  | json schema  | App Step 3 |
            | version DL               | 20250414_5.0                                                                          | string       | App Step 3 |
            | page name                | app:privada:personas:tarjetas:debito:compras diferidas:anticipar pago:3 mensualidades | string       | App Step 3 |
            | level 1                  | tarjetas                                                                              | string       | App Step 3 |
            | level 2                  | debito                                                                                | string       | App Step 3 |
            | level 3                  | compras diferidas                                                                     | string       | App Step 3 |
            | level 4                  | anticipar pago                                                                        | string       | App Step 3 |
            | level 5                  | 3 mensualidades                                                                       | string       | App Step 3 |
            | language                 | ES                                                                                    | string       | App Step 3 |
            | page area                | privada                                                                               | string       | App Step 3 |
            | page intent              | transaccion                                                                           | string       | App Step 3 |
            | channel                  | online                                                                                | string       | App Step 3 |
            | page instance ID         | de                                                                                    | string       | App Step 3 |
            | page info version        | appVersion                                                                            | regexp named | App Step 3 |
            | page segment             | personas                                                                              | string       | App Step 3 |
            | sysEnv                   | app                                                                                   | string       | App Step 3 |
            | business unit            | BBVA Mexico                                                                           | string       | App Step 3 |
            | site app name            | App BBVA Mexico                                                                       | string       | App Step 3 |
            | project name             | DIY Payments                                                                          | string       | App Step 3 |
            | device mobile            | si                                                                                    | string       | App Step 3 |
            | user userState           | logado                                                                                | string       | App Step 3 |
            | profile ID               | profileID                                                                             | regexp named | App Step 3 |
            | user segment global      | 003001                                                                                | string       | App Step 3 |
            | user gender              | gender                                                                                | regexp named | App Step 3 |
            | user age                 | age                                                                                   | regexp named | App Step 3 |
            | global application       | purchase financing advanced payments                                                  | string       | App Step 3 |
            | application name         | anticipo de pagos diferimientos                                                       | string       | App Step 3 |
            | application type         | operativa                                                                             | string       | App Step 3 |
            | application step         | 3 mensualidades                                                                       | string       | App Step 3 |
            | fulfillment model        | online                                                                                | string       | App Step 3 |
            | application typology     | anticipar pago                                                                        | string       | App Step 3 |
            | custom fields            | diferimiento:british columbia can                                                     | string       | App Step 3 |
            | product primary category | tarjetas                                                                              | string       | App Step 3 |
            | product subtype          | tarjetas debito                                                                       | string       | App Step 3 |
            | product amount           | 108.5                                                                                 | string       | App Step 3 |
            | product currency         | MXN                                                                                   | string       | App Step 3 |
            | product primary category | tarjetas                                                                              | string       | App Step 3 |
            | product subtype          | tarjetas debito                                                                       | string       | App Step 3 |
            | internal campaign        |                                                                                       | empty array  | App Step 3 |
            | optimization attributes  |                                                                                       | empty array  | App Step 3 |

    @ANA_EVENT_APA008
    @analytics
    @MX @web @android @ios
    @backend(test) @vbank
    @web-done
    Scenario: Advance Payments - App Step 4 - The customer enters the select origin account step
        Given a user with the following criteria
            | criteria       |
            | financing line |
            | many movements |
        And the user accesses to the "operative" "debit" card product detail
        And the user accesses the "anticipate payments" section
        And the user selects "advance payment" and continue
        And the analytics interceptor service is initiated
        When the user chooses a movement "continue" "0"
        Then the analytics events contains the following variables
            | item                     | value                                                                                    | type         | event      |
            | analytics                | analytics/glomo_base                                                                     | json schema  | App Step 4 |
            | version DL               | 20250414_5.0                                                                             | string       | App Step 4 |
            | page name                | app:privada:personas:tarjetas:debito:compras diferidas:anticipar pago:4 seleccion cuenta | string       | App Step 4 |
            | level 1                  | tarjetas                                                                                 | string       | App Step 4 |
            | level 2                  | debito                                                                                   | string       | App Step 4 |
            | level 3                  | compras diferidas                                                                        | string       | App Step 4 |
            | level 4                  | anticipar pago                                                                           | string       | App Step 4 |
            | level 5                  | 4 seleccion cuenta                                                                       | string       | App Step 4 |
            | language                 | ES                                                                                       | string       | App Step 4 |
            | page area                | privada                                                                                  | string       | App Step 4 |
            | page intent              | transaccion                                                                              | string       | App Step 4 |
            | channel                  | online                                                                                   | string       | App Step 4 |
            | page instance ID         | de                                                                                       | string       | App Step 4 |
            | page info version        | appVersion                                                                               | regexp named | App Step 4 |
            | page segment             | personas                                                                                 | string       | App Step 4 |
            | sysEnv                   | app                                                                                      | string       | App Step 4 |
            | business unit            | BBVA Mexico                                                                              | string       | App Step 4 |
            | site app name            | App BBVA Mexico                                                                          | string       | App Step 4 |
            | project name             | DIY Payments                                                                             | string       | App Step 4 |
            | device mobile            | si                                                                                       | string       | App Step 4 |
            | user userState           | logado                                                                                   | string       | App Step 4 |
            | profile ID               | profileID                                                                                | regexp named | App Step 4 |
            | user segment global      | 003001                                                                                   | string       | App Step 4 |
            | user gender              | gender                                                                                   | regexp named | App Step 4 |
            | user age                 | age                                                                                      | regexp named | App Step 4 |
            | global application       | purchase financing advanced payments                                                     | string       | App Step 4 |
            | application name         | anticipo de pagos diferimientos                                                          | string       | App Step 4 |
            | application type         | operativa                                                                                | string       | App Step 4 |
            | application step         | 4 seleccion cuenta                                                                       | string       | App Step 4 |
            | fulfillment model        | online                                                                                   | string       | App Step 4 |
            | application typology     | anticipar pago                                                                           | string       | App Step 4 |
            | custom fields            | diferimiento:british columbia can,mensualidades reducidas:1                              | string       | App Step 4 |
            | product primary category | tarjetas                                                                                 | string       | App Step 4 |
            | product subtype          | tarjetas debito                                                                          | string       | App Step 4 |
            | product amount           | 108.5                                                                                    | string       | App Step 4 |
            | product currency         | MXN                                                                                      | string       | App Step 4 |
            | internal campaign        |                                                                                          | empty array  | App Step 4 |
            | optimization attributes  |                                                                                          | empty array  | App Step 4 |

    @ANA_EVENT_APA009
    @analytics
    @MX @web @android @ios
    @backend(test) @vbank
    @web-done
    Scenario: Advance Payments - App Step 5 - The customer enters the confirmation step
        Given a user with the following criteria
            | criteria       |
            | financing line |
            | many movements |
        And the user accesses to the "operative" "debit" card product detail
        And the user accesses the "anticipate payments" section
        And the user selects "advance payment" and continue
        And the user chooses a movement "continue" "0"
        And the analytics interceptor service is initiated
        When the user selects the origin account
        Then the analytics events contains the following variables
            | item                     | value                                                                                | type         | event      |
            | analytics                | analytics/glomo_base                                                                 | json schema  | App Step 5 |
            | version DL               | 20250414_5.0                                                                         | string       | App Step 5 |
            | page name                | app:privada:personas:tarjetas:debito:compras diferidas:anticipar pago:5 confirmacion | string       | App Step 5 |
            | level 1                  | tarjetas                                                                             | string       | App Step 5 |
            | level 2                  | debito                                                                               | string       | App Step 5 |
            | level 3                  | compras diferidas                                                                    | string       | App Step 5 |
            | level 4                  | anticipar pago                                                                       | string       | App Step 5 |
            | level 5                  | 5 confirmacion                                                                       | string       | App Step 5 |
            | language                 | ES                                                                                   | string       | App Step 5 |
            | page area                | privada                                                                              | string       | App Step 5 |
            | page intent              | transaccion                                                                          | string       | App Step 5 |
            | channel                  | online                                                                               | string       | App Step 5 |
            | page instance ID         | de                                                                                   | string       | App Step 5 |
            | page info version        | appVersion                                                                           | regexp named | App Step 5 |
            | page segment             | personas                                                                             | string       | App Step 5 |
            | sysEnv                   | app                                                                                  | string       | App Step 5 |
            | business unit            | BBVA Mexico                                                                          | string       | App Step 5 |
            | site app name            | App BBVA Mexico                                                                      | string       | App Step 5 |
            | project name             | DIY Payments                                                                         | string       | App Step 5 |
            | device mobile            | si                                                                                   | string       | App Step 5 |
            | user userState           | logado                                                                               | string       | App Step 5 |
            | profile ID               | profileID                                                                            | regexp named | App Step 5 |
            | user segment global      | 003001                                                                               | string       | App Step 5 |
            | user gender              | gender                                                                               | regexp named | App Step 5 |
            | user age                 | age                                                                                  | regexp named | App Step 5 |
            | global application       | purchase financing advanced payments                                                 | string       | App Step 5 |
            | application name         | anticipo de pagos diferimientos                                                      | string       | App Step 5 |
            | application type         | operativa                                                                            | string       | App Step 5 |
            | application step         | 5 confirmacion                                                                       | string       | App Step 5 |
            | fulfillment model        | online                                                                               | string       | App Step 5 |
            | application typology     | anticipar pago                                                                       | string       | App Step 5 |
            | custom fields            | diferimiento:british columbia can,mensualidades reducidas:1                          | string       | App Step 5 |
            | product primary category | tarjetas                                                                             | string       | App Step 5 |
            | product subtype          | tarjetas debito                                                                      | string       | App Step 5 |
            | product amount           | 108.5                                                                                | string       | App Step 5 |
            | product currency         | MXN                                                                                  | string       | App Step 5 |
            | internal campaign        |                                                                                      | empty array  | App Step 5 |
            | optimization attributes  |                                                                                      | empty array  | App Step 5 |

    @ANA_EVENT_APA010
    @analytics
    @MX @web @android @ios
    @backend(test) @vbank
    @web-done
    Scenario: Advance Payments - App Step 6 - The customer enters the otp step
        Given a user with the following criteria:
            | criteria       |
            | financing line |
            | many movements |
        And the user accesses to the "operative" "debit" card product detail
        And the user accesses the "anticipate payments" section
        And the user selects "advance payment" and continue
        And the user chooses a movement "continue" "0"
        And the analytics interceptor service is initiated
        When the user selects the origin account
        Then the analytics events contains the following variables
            | item                     | value                                                                       | type         | event      |
            | analytics                | analytics/glomo_base                                                        | json schema  | App Step 6 |
            | version DL               | 20250414_5.0                                                                | string       | App Step 6 |
            | page name                | app:privada:personas:tarjetas:debito:compras diferidas:anticipar pago:6 otp | string       | App Step 6 |
            | level 1                  | tarjetas                                                                    | string       | App Step 6 |
            | level 2                  | debito                                                                      | string       | App Step 6 |
            | level 3                  | compras diferidas                                                           | string       | App Step 6 |
            | level 4                  | anticipar pago                                                              | string       | App Step 6 |
            | level 5                  | 6 otp                                                                       | string       | App Step 6 |
            | language                 | ES                                                                          | string       | App Step 6 |
            | page area                | privada                                                                     | string       | App Step 6 |
            | page intent              | transaccion                                                                 | string       | App Step 6 |
            | channel                  | online                                                                      | string       | App Step 6 |
            | page instance ID         | de                                                                          | string       | App Step 6 |
            | page info version        | appVersion                                                                  | regexp named | App Step 6 |
            | page segment             | personas                                                                    | string       | App Step 6 |
            | sysEnv                   | app                                                                         | string       | App Step 6 |
            | business unit            | BBVA Mexico                                                                 | string       | App Step 6 |
            | site app name            | App BBVA Mexico                                                             | string       | App Step 6 |
            | project name             | DIY Payments                                                                | string       | App Step 6 |
            | device mobile            | si                                                                          | string       | App Step 6 |
            | user userState           | logado                                                                      | string       | App Step 6 |
            | profile ID               | profileID                                                                   | regexp named | App Step 6 |
            | user segment global      | 003001                                                                      | string       | App Step 6 |
            | user gender              | gender                                                                      | regexp named | App Step 6 |
            | user age                 | age                                                                         | regexp named | App Step 6 |
            | global application       | purchase financing advanced payments                                        | string       | App Step 6 |
            | application name         | anticipo de pagos diferimientos                                             | string       | App Step 6 |
            | application type         | operativa                                                                   | string       | App Step 6 |
            | application step         | 6 otp                                                                       | string       | App Step 6 |
            | fulfillment model        | online                                                                      | string       | App Step 6 |
            | application typology     | anticipar pago                                                              | string       | App Step 6 |
            | custom fields            | diferimiento:british columbia can,mensualidades reducidas:1                 | string       | App Step 6 |
            | product primary category | tarjetas                                                                    | string       | App Step 6 |
            | product subtype          | tarjetas debito                                                             | string       | App Step 6 |
            | product amount           | 108.5                                                                       | string       | App Step 6 |
            | product currency         | MXN                                                                         | string       | App Step 6 |
            | internal campaign        |                                                                             | empty array  | App Step 6 |
            | optimization attributes  |                                                                             | empty array  | App Step 6 |

    @ANA_EVENT_APA011
    @analytics
    @MX @web @android @ios
    @backend(test) @vbank
    @web-done
    Scenario: Advance Payments - App Completed - The customer enters the succes operation
        Given a user with the following criteria:
            | criteria       |
            | financing line |
            | many movements |
        And the user accesses to the "operative" "debit" card product detail
        And the user accesses the "anticipate payments" section
        And the user selects "advance payment" and continue
        And the user chooses a movement "continue" "0"
        And the analytics interceptor service is initiated
        When the user selects an account and continue
        Then the analytics events contains the following variables
            | item                         | value                                                                                | type         | event         |
            | analytics                    | analytics/glomo_base                                                                 | json schema  | App Completed |
            | version DL                   | 20250414_5.0                                                                         | string       | App Completed |
            | page name                    | app:privada:personas:tarjetas:debito:compras diferidas:anticipar pago:pagina exitosa | string       | App Completed |
            | level 1                      | tarjetas                                                                             | string       | App Completed |
            | level 2                      | debito                                                                               | string       | App Completed |
            | level 3                      | compras diferidas                                                                    | string       | App Completed |
            | level 4                      | anticipar pago                                                                       | string       | App Completed |
            | level 5                      | pagina exitosa                                                                       | string       | App Completed |
            | language                     | ES                                                                                   | string       | App Completed |
            | page area                    | privada                                                                              | string       | App Completed |
            | page intent                  | transaccion                                                                          | string       | App Completed |
            | channel                      | online                                                                               | string       | App Completed |
            | page instance ID             | de                                                                                   | string       | App Completed |
            | page info version            | appVersion                                                                           | regexp named | App Completed |
            | page segment                 | personas                                                                             | string       | App Completed |
            | sysEnv                       | app                                                                                  | string       | App Completed |
            | business unit                | BBVA Mexico                                                                          | string       | App Completed |
            | site app name                | App BBVA Mexico                                                                      | string       | App Completed |
            | project name                 | DIY Payments                                                                         | string       | App Completed |
            | device mobile                | si                                                                                   | string       | App Completed |
            | user userState               | logado                                                                               | string       | App Completed |
            | profile ID                   | profileID                                                                            | regexp named | App Completed |
            | user segment global          | 003001                                                                               | string       | App Completed |
            | user gender                  | gender                                                                               | regexp named | App Completed |
            | user age                     | age                                                                                  | regexp named | App Completed |
            | global application           | purchase financing advanced payments                                                 | string       | App Completed |
            | application name             | anticipo de pagos diferimientos                                                      | string       | App Completed |
            | application type             | operativa                                                                            | string       | App Completed |
            | application step             | pagina exitosa                                                                       | string       | App Completed |
            | fulfillment model            | online                                                                               | string       | App Completed |
            | application typology         | anticipar pago                                                                       | string       | App Completed |
            | custom fields                | diferimiento:british columbia can,mensualidades reducidas:1                          | string       | App Completed |
            | application state            | finalizado                                                                           | string       | App Completed |
            | application operation number | 000050855017635910                                                                   | string       | App Completed |
            | product primary category     | tarjetas                                                                             | string       | App Completed |
            | product subtype              | tarjetas debito                                                                      | string       | App Completed |
            | product amount               | 108.5                                                                                | string       | App Completed |
            | product currency             | MXN                                                                                  | string       | App Completed |

    @ANA_EVENT_APA012
    @analytics
    @MX @web @android @ios
    @backend(test) @vbank
    @web-done
    Scenario: Advance Payments - Page View - The customer enters the advance payment operative
        Given a user with the following criteria
            | criteria        |
            | monthly payment |
        And the user accesses to the "operative" "debit" card product detail
        And the analytics interceptor service is initiated
        When the user accesses the "anticipate payments" section
        Then the analytics events contains the following variables
            | item                | value                                                                                            | type         | event     | event number |
            | analytics           | analytics/glomo_base                                                                             | json schema  | Page View | 2            |
            | version DL          | 20250414_5.0                                                                                     | string       | Page View | 2            |
            | page name           | app:privada:personas:tarjetas:debito:compras diferidas:anticipar pago:informacion anticipar pago | string       | Page View | 2            |
            | level 1             | tarjetas                                                                                         | string       | Page View | 2            |
            | level 2             | debito                                                                                           | string       | Page View | 2            |
            | level 3             | compras diferidas                                                                                | string       | Page View | 2            |
            | level 4             | anticipar pago                                                                                   | string       | Page View | 2            |
            | level 5             | informacion anticipar pago                                                                       | string       | Page View | 2            |
            | language            | ES                                                                                               | string       | Page View | 2            |
            | page area           | privada                                                                                          | string       | Page View | 2            |
            | page intent         | transaccion                                                                                      | string       | Page View | 2            |
            | channel             | online                                                                                           | string       | Page View | 2            |
            | page instance ID    | de                                                                                               | string       | Page View | 2            |
            | page info version   | appVersion                                                                                       | regexp named | Page View | 2            |
            | page segment        | personas                                                                                         | string       | Page View | 2            |
            | sysEnv              | app                                                                                              | string       | Page View | 2            |
            | business unit       | BBVA Mexico                                                                                      | string       | Page View | 2            |
            | site app name       | App BBVA Mexico                                                                                  | string       | Page View | 2            |
            | project name        | DIY Payments                                                                                     | string       | Page View | 2            |
            | device mobile       | si                                                                                               | string       | Page View | 2            |
            | user userState      | logado                                                                                           | string       | Page View | 2            |
            | profile ID          | profileID                                                                                        | regexp named | Page View | 2            |
            | user segment global | 003001                                                                                           | string       | Page View | 2            |
            | user gender         | gender                                                                                           | regexp named | Page View | 2            |
            | user age            | age                                                                                              | regexp named | Page View | 2            |

    @ANA_EVENT_APA013
    @analytics
    @MX @web @android @ios
    @backend(test) @vbank
    @web-done
    Scenario: Advance Payments - App On Click Start - The customer enters the monthly payment operative
        Given a user with the following criteria
            | criteria        |
            | monthly payment |
        And the user accesses to the "operative" "debit" card product detail
        And the analytics interceptor service is initiated
        When the user accesses the "monthly payment" section
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
            | global application       | purchase financing monthly payments                              | string       | App On Click Start |
            | application name         | pago mensual diferimientos                                       | string       | App On Click Start |
            | application type         | operativa                                                        | string       | App On Click Start |
            | application step         | pago mensual                                                     | string       | App On Click Start |
            | fulfillment model        | online                                                           | string       | App On Click Start |
            | product primary category | tarjetas                                                         | string       | App On Click Start |
            | product subtype          | tarjetas debito                                                  | string       | App On Click Start |

    @ANA_EVENT_APA014
    @analytics
    @MX @web @android @ios
    @backend(test) @vbank
    @web-done
    Scenario: Advance Payments - App Page Visit - The customer enters the monthly payment step
        Given a user with the following criteria
            | criteria        |
            | monthly payment |
        And the user accesses to the "operative" "debit" card product detail
        And the analytics interceptor service is initiated
        When the user accesses the "monthly payment" section
        Then the analytics events contains the following variables
            | item                     | value                                                                                 | type         | event          |
            | analytics                | analytics/glomo_base                                                                  | json schema  | App Page Visit |
            | version DL               | 20250414_5.0                                                                          | string       | App Page Visit |
            | page name                | app:privada:personas:tarjetas:debito:compras diferidas:pago mensual:1 detalle de pago | string       | App Page Visit |
            | level 1                  | tarjetas                                                                              | string       | App Page Visit |
            | level 2                  | debito                                                                                | string       | App Page Visit |
            | level 3                  | compras diferidas                                                                     | string       | App Page Visit |
            | level 4                  | pago mensual                                                                          | string       | App Page Visit |
            | level 5                  | 1 detalle de pago                                                                     | string       | App Page Visit |
            | language                 | ES                                                                                    | string       | App Page Visit |
            | page area                | privada                                                                               | string       | App Page Visit |
            | page intent              | transaccion                                                                           | string       | App Page Visit |
            | channel                  | online                                                                                | string       | App Page Visit |
            | page instance ID         | de                                                                                    | string       | App Page Visit |
            | page info version        | appVersion                                                                            | regexp named | App Page Visit |
            | page segment             | personas                                                                              | string       | App Page Visit |
            | sysEnv                   | app                                                                                   | string       | App Page Visit |
            | business unit            | BBVA Mexico                                                                           | string       | App Page Visit |
            | site app name            | App BBVA Mexico                                                                       | string       | App Page Visit |
            | project name             | DIY Payments                                                                          | string       | App Page Visit |
            | device mobile            | si                                                                                    | string       | App Page Visit |
            | user userState           | logado                                                                                | string       | App Page Visit |
            | profile ID               | profileID                                                                             | regexp named | App Page Visit |
            | user segment global      | 003001                                                                                | string       | App Page Visit |
            | user gender              | gender                                                                                | regexp named | App Page Visit |
            | user age                 | age                                                                                   | regexp named | App Page Visit |
            | global application       | purchase financing monthly payments                                                   | string       | App Page Visit |
            | application name         | pago mensual diferimientos                                                            | string       | App Page Visit |
            | application type         | operativa                                                                             | string       | App Page Visit |
            | application step         | 1 detalle de pago                                                                     | string       | App Page Visit |
            | fulfillment model        | online                                                                                | string       | App Page Visit |
            | product primary category | tarjetas                                                                              | string       | App Page Visit |
            | product subtype          | tarjetas debito                                                                       | string       | App Page Visit |

    @ANA_EVENT_APA015
    @analytics
    @MX @web @android @ios
    @backend(test) @vbank
    @web-done
    Scenario: Advance Payments - App Started - The customer completes the monthly payment step
        Given a user with the following criteria
            | criteria        |
            | monthly payment |
        And the user accesses to the "operative" "debit" card product detail
        And the user accesses the "monthly payment" section
        And the analytics interceptor service is initiated
        When the user observes the payment and continues
        Then the analytics events contains the following variables
            | item                     | value                                                                                 | type         | event       |
            | analytics                | analytics/glomo_base                                                                  | json schema  | App Started |
            | version DL               | 20250414_5.0                                                                          | string       | App Started |
            | page name                | app:privada:personas:tarjetas:debito:compras diferidas:pago mensual:1 detalle de pago | string       | App Started |
            | level 1                  | tarjetas                                                                              | string       | App Started |
            | level 2                  | debito                                                                                | string       | App Started |
            | level 3                  | compras diferidas                                                                     | string       | App Started |
            | level 4                  | pago mensual                                                                          | string       | App Started |
            | level 5                  | 1 detalle de pago                                                                     | string       | App Started |
            | language                 | ES                                                                                    | string       | App Started |
            | page area                | privada                                                                               | string       | App Started |
            | page intent              | transaccion                                                                           | string       | App Started |
            | channel                  | online                                                                                | string       | App Started |
            | page instance ID         | de                                                                                    | string       | App Started |
            | page info version        | appVersion                                                                            | regexp named | App Started |
            | page segment             | personas                                                                              | string       | App Started |
            | sysEnv                   | app                                                                                   | string       | App Started |
            | business unit            | BBVA Mexico                                                                           | string       | App Started |
            | site app name            | App BBVA Mexico                                                                       | string       | App Started |
            | project name             | DIY Payments                                                                          | string       | App Started |
            | device mobile            | si                                                                                    | string       | App Started |
            | user userState           | logado                                                                                | string       | App Started |
            | profile ID               | profileID                                                                             | regexp named | App Started |
            | user segment global      | 003001                                                                                | string       | App Started |
            | user gender              | gender                                                                                | regexp named | App Started |
            | user age                 | age                                                                                   | regexp named | App Started |
            | global application       | purchase financing monthly payments                                                   | string       | App Started |
            | application name         | pago mensual diferimientos                                                            | string       | App Started |
            | application type         | operativa                                                                             | string       | App Started |
            | application step         | continuar                                                                             | string       | App Started |
            | fulfillment model        | online                                                                                | string       | App Started |
            | product primary category | tarjetas                                                                              | string       | App Started |
            | product subtype          | tarjetas debito                                                                       | string       | App Started |

    @ANA_EVENT_APA016
    @analytics
    @MX @web @android @ios
    @backend(test) @vbank
    @web-done
    Scenario: Advance Payments - App Step 2 - The customer enters the select origin account step
        Given a user with the following criteria
            | criteria        |
            | monthly payment |
        And the user accesses to the "operative" "debit" card product detail
        And the user accesses the "monthly payment" section
        And the analytics interceptor service is initiated
        When the user observes the payment and continues
        Then the analytics events contains the following variables
            | item                     | value                                                                                    | type         | event      |
            | analytics                | analytics/glomo_base                                                                     | json schema  | App Step 2 |
            | version DL               | 20250414_5.0                                                                             | string       | App Step 2 |
            | page name                | app:privada:personas:tarjetas:debito:compras diferidas:pago mensual:2 seleccionar cuenta | string       | App Step 2 |
            | level 1                  | tarjetas                                                                                 | string       | App Step 2 |
            | level 2                  | debito                                                                                   | string       | App Step 2 |
            | level 3                  | compras diferidas                                                                        | string       | App Step 2 |
            | level 4                  | pago mensual                                                                             | string       | App Step 2 |
            | level 5                  | 2 seleccionar cuenta                                                                     | string       | App Step 2 |
            | language                 | ES                                                                                       | string       | App Step 2 |
            | page area                | privada                                                                                  | string       | App Step 2 |
            | page intent              | transaccion                                                                              | string       | App Step 2 |
            | channel                  | online                                                                                   | string       | App Step 2 |
            | page instance ID         | de                                                                                       | string       | App Step 2 |
            | page info version        | appVersion                                                                               | regexp named | App Step 2 |
            | page segment             | personas                                                                                 | string       | App Step 2 |
            | sysEnv                   | app                                                                                      | string       | App Step 2 |
            | business unit            | BBVA Mexico                                                                              | string       | App Step 2 |
            | site app name            | App BBVA Mexico                                                                          | string       | App Step 2 |
            | project name             | DIY Payments                                                                             | string       | App Step 2 |
            | device mobile            | si                                                                                       | string       | App Step 2 |
            | user userState           | logado                                                                                   | string       | App Step 2 |
            | profile ID               | profileID                                                                                | regexp named | App Step 2 |
            | user segment global      | 003001                                                                                   | string       | App Step 2 |
            | user gender              | gender                                                                                   | regexp named | App Step 2 |
            | user age                 | age                                                                                      | regexp named | App Step 2 |
            | global application       | purchase financing monthly payments                                                      | string       | App Step 2 |
            | application name         | pago mensual diferimientos                                                               | string       | App Step 2 |
            | application type         | operativa                                                                                | string       | App Step 2 |
            | application step         | 2 seleccionar cuenta                                                                     | string       | App Step 2 |
            | fulfillment model        | online                                                                                   | string       | App Step 2 |
            | product primary category | tarjetas                                                                                 | string       | App Step 2 |
            | product subtype          | tarjetas debito                                                                          | string       | App Step 2 |
            | product amount           | 96.56                                                                                    | string       | App Step 2 |
            | product currency         | MXN                                                                                      | string       | App Step 2 |

    @ANA_EVENT_APA017
    @analytics
    @MX @web @android @ios
    @backend(test) @vbank
    @web-done
    Scenario: Advance Payments - App Step 3 - The customer enters the confirmation step
        Given a user with the following criteria
            | criteria        |
            | monthly payment |
        And the user accesses to the "operative" "debit" card product detail
        And the user accesses the "monthly payment" section
        And the user observes the payment and continues
        And the analytics interceptor service is initiated
        When the user selects the origin account
        Then the analytics events contains the following variables
            | item                     | value                                                                              | type         | event      |
            | analytics                | analytics/glomo_base                                                               | json schema  | App Step 3 |
            | version DL               | 20250414_5.0                                                                       | string       | App Step 3 |
            | page name                | app:privada:personas:tarjetas:debito:compras diferidas:pago mensual:3 confirmacion | string       | App Step 3 |
            | level 1                  | tarjetas                                                                           | string       | App Step 3 |
            | level 2                  | debito                                                                             | string       | App Step 3 |
            | level 3                  | compras diferidas                                                                  | string       | App Step 3 |
            | level 4                  | pago mensual                                                                       | string       | App Step 3 |
            | level 5                  | 3 confirmacion                                                                     | string       | App Step 3 |
            | language                 | ES                                                                                 | string       | App Step 3 |
            | page area                | privada                                                                            | string       | App Step 3 |
            | page intent              | transaccion                                                                        | string       | App Step 3 |
            | channel                  | online                                                                             | string       | App Step 3 |
            | page instance ID         | de                                                                                 | string       | App Step 3 |
            | page info version        | appVersion                                                                         | regexp named | App Step 3 |
            | page segment             | personas                                                                           | string       | App Step 3 |
            | sysEnv                   | app                                                                                | string       | App Step 3 |
            | business unit            | BBVA Mexico                                                                        | string       | App Step 3 |
            | site app name            | App BBVA Mexico                                                                    | string       | App Step 3 |
            | project name             | DIY Payments                                                                       | string       | App Step 3 |
            | device mobile            | si                                                                                 | string       | App Step 3 |
            | user userState           | logado                                                                             | string       | App Step 3 |
            | profile ID               | profileID                                                                          | regexp named | App Step 3 |
            | user segment global      | 003001                                                                             | string       | App Step 3 |
            | user gender              | gender                                                                             | regexp named | App Step 3 |
            | user age                 | age                                                                                | regexp named | App Step 3 |
            | global application       | purchase financing monthly payments                                                | string       | App Step 3 |
            | application name         | pago mensual diferimientos                                                         | string       | App Step 3 |
            | application type         | operativa                                                                          | string       | App Step 3 |
            | application step         | 3 confirmacion                                                                     | string       | App Step 3 |
            | fulfillment model        | online                                                                             | string       | App Step 3 |
            | product primary category | tarjetas                                                                           | string       | App Step 3 |
            | product subtype          | tarjetas debito                                                                    | string       | App Step 3 |
            | product amount           | 96.56                                                                              | string       | App Step 3 |
            | product currency         | MXN                                                                                | string       | App Step 3 |

    @ANA_EVENT_APA018
    @analytics
    @MX @web @android @ios
    @backend(test) @vbank
    @web-done
    Scenario: Advance Payments - App Step 4 - The customer enters the otp
        Given a user with the following criteria
            | criteria        |
            | monthly payment |
        And the user accesses to the "operative" "debit" card product detail
        And the user accesses the "monthly payment" section
        And the user observes the payment and continues
        And the analytics interceptor service is initiated
        When the user selects the origin account
        Then the analytics events contains the following variables
            | item                     | value                                                                     | type         | event      |
            | analytics                | analytics/glomo_base                                                      | json schema  | App Step 4 |
            | version DL               | 20250414_5.0                                                              | string       | App Step 4 |
            | page name                | app:privada:personas:tarjetas:debito:compras diferidas:pago mensual:4 otp | string       | App Step 4 |
            | level 1                  | tarjetas                                                                  | string       | App Step 4 |
            | level 2                  | debito                                                                    | string       | App Step 4 |
            | level 3                  | compras diferidas                                                         | string       | App Step 4 |
            | level 4                  | pago mensual                                                              | string       | App Step 4 |
            | level 5                  | 4 otp                                                                     | string       | App Step 4 |
            | language                 | ES                                                                        | string       | App Step 4 |
            | page area                | privada                                                                   | string       | App Step 4 |
            | page intent              | transaccion                                                               | string       | App Step 4 |
            | channel                  | online                                                                    | string       | App Step 4 |
            | page instance ID         | de                                                                        | string       | App Step 4 |
            | page info version        | appVersion                                                                | regexp named | App Step 4 |
            | page segment             | personas                                                                  | string       | App Step 4 |
            | sysEnv                   | app                                                                       | string       | App Step 4 |
            | business unit            | BBVA Mexico                                                               | string       | App Step 4 |
            | site app name            | App BBVA Mexico                                                           | string       | App Step 4 |
            | project name             | DIY Payments                                                              | string       | App Step 4 |
            | device mobile            | si                                                                        | string       | App Step 4 |
            | user userState           | logado                                                                    | string       | App Step 4 |
            | profile ID               | profileID                                                                 | regexp named | App Step 4 |
            | user segment global      | 003001                                                                    | string       | App Step 4 |
            | user gender              | gender                                                                    | regexp named | App Step 4 |
            | user age                 | age                                                                       | regexp named | App Step 4 |
            | global application       | purchase financing monthly payments                                       | string       | App Step 4 |
            | application name         | pago mensual diferimientos                                                | string       | App Step 4 |
            | application type         | operativa                                                                 | string       | App Step 4 |
            | application step         | 4 otp                                                                     | string       | App Step 4 |
            | fulfillment model        | online                                                                    | string       | App Step 4 |
            | product primary category | tarjetas                                                                  | string       | App Step 4 |
            | product subtype          | tarjetas debito                                                           | string       | App Step 4 |
            | product amount           | 96.56                                                                     | string       | App Step 4 |
            | product currency         | MXN                                                                       | string       | App Step 4 |

    @ANA_EVENT_APA019
    @analytics
    @MX @web @android @ios
    @backend(test) @vbank
    @web-done
    Scenario: Advance Payments - App Completed - The customer enters the succes
        Given a user with the following criteria
            | criteria        |
            | monthly payment |
        And the user accesses to the "operative" "debit" card product detail
        And the user accesses the "monthly payment" section
        And the user observes the payment and continues
        And the analytics interceptor service is initiated
        When the user selects an account and continue
        Then the analytics events contains the following variables
            | item                         | value                                                                              | type         | event         |
            | analytics                    | analytics/glomo_base                                                               | json schema  | App Completed |
            | version DL                   | 20250414_5.0                                                                       | string       | App Completed |
            | page name                    | app:privada:personas:tarjetas:debito:compras diferidas:pago mensual:pagina exitosa | string       | App Completed |
            | level 1                      | tarjetas                                                                           | string       | App Completed |
            | level 2                      | debito                                                                             | string       | App Completed |
            | level 3                      | compras diferidas                                                                  | string       | App Completed |
            | level 4                      | pago mensual                                                                       | string       | App Completed |
            | level 5                      | pagina exitosa                                                                     | string       | App Completed |
            | language                     | ES                                                                                 | string       | App Completed |
            | page area                    | privada                                                                            | string       | App Completed |
            | page intent                  | transaccion                                                                        | string       | App Completed |
            | channel                      | online                                                                             | string       | App Completed |
            | page instance ID             | de                                                                                 | string       | App Completed |
            | page info version            | appVersion                                                                         | regexp named | App Completed |
            | page segment                 | personas                                                                           | string       | App Completed |
            | sysEnv                       | app                                                                                | string       | App Completed |
            | business unit                | BBVA Mexico                                                                        | string       | App Completed |
            | site app name                | App BBVA Mexico                                                                    | string       | App Completed |
            | project name                 | DIY Payments                                                                       | string       | App Completed |
            | device mobile                | si                                                                                 | string       | App Completed |
            | user userState               | logado                                                                             | string       | App Completed |
            | profile ID                   | profileID                                                                          | regexp named | App Completed |
            | user segment global          | 003001                                                                             | string       | App Completed |
            | user gender                  | gender                                                                             | regexp named | App Completed |
            | user age                     | age                                                                                | regexp named | App Completed |
            | global application           | purchase financing monthly payments                                                | string       | App Completed |
            | application name             | pago mensual diferimientos                                                         | string       | App Completed |
            | application type             | operativa                                                                          | string       | App Completed |
            | application step             | pagina exitosa                                                                     | string       | App Completed |
            | fulfillment model            | online                                                                             | string       | App Completed |
            | application state            | finalizado                                                                         | string       | App Completed |
            | application operation number | 000051414779411287                                                                 | string       | App Completed |
            | product primary category     | tarjetas                                                                           | string       | App Completed |
            | product subtype              | tarjetas debito                                                                    | string       | App Completed |
            | product amount               | 96.56                                                                              | string       | App Completed |
            | product currency             | MXN                                                                                | string       | App Completed |

    @ANA_EVENT_APA020
    @analytics
    @MX @web @android @ios
    @backend(test) @vbank
    @web-done
    Scenario: Advance Payments - Page View - The customer has already paid the monthly installment and the modal opens
        Given a user with the following criteria
            | criteria        |
            | financing line  |
            | monthly payment |
        And the user accesses to the "operative" "debit" card product detail
        And the analytics interceptor service is initiated
        When the user accesses the "monthly payment" section
        Then the analytics events contains the following variables
            | item                | value                                                                             | type         | event     | event number |
            | analytics           | analytics/glomo_base                                                              | json schema  | Page View | 3            |
            | version DL          | 20250414_5.0                                                                      | string       | Page View | 3            |
            | page name           | app:privada:personas:tarjetas:debito:compras diferidas:pago realizado previamente | string       | Page View | 3            |
            | level 1             | tarjetas                                                                          | string       | Page View | 3            |
            | level 2             | debito                                                                            | string       | Page View | 3            |
            | level 3             | compras diferidas                                                                 | string       | Page View | 3            |
            | level 4             | pago realizado previamente                                                        | string       | Page View | 3            |
            | error page          | pago realizado previamente                                                        | string       | Page View | 3            |
            | language            | ES                                                                                | string       | Page View | 3            |
            | page area           | privada                                                                           | string       | Page View | 3            |
            | page intent         | transaccion                                                                       | string       | Page View | 3            |
            | channel             | online                                                                            | string       | Page View | 3            |
            | page instance ID    | de                                                                                | string       | Page View | 3            |
            | page info version   | appVersion                                                                        | regexp named | Page View | 3            |
            | page segment        | personas                                                                          | string       | Page View | 3            |
            | sysEnv              | app                                                                               | string       | Page View | 3            |
            | business unit       | BBVA Mexico                                                                       | string       | Page View | 3            |
            | site app name       | App BBVA Mexico                                                                   | string       | Page View | 3            |
            | project name        | DIY Payments                                                                      | string       | Page View | 3            |
            | device mobile       | si                                                                                | string       | Page View | 3            |
            | user userState      | logado                                                                            | string       | Page View | 3            |
            | profile ID          | profileID                                                                         | regexp named | Page View | 3            |
            | user segment global | 003001                                                                            | string       | Page View | 3            |
            | user gender         | gender                                                                            | regexp named | Page View | 3            |
            | user age            | age                                                                               | regexp named | Page View | 3            |

    @ANA_EVENT_APA021
    @analytics
    @MX @web @android @ios
    @backend(test) @vbank
    @web-done
    Scenario: Advance Payments - App On Click Start - The customer enters the overdue payments operative from financing line detail
        Given a user with the following criteria
            | criteria       |
            | financing line |
            | late payments  |
        And the user accesses to the "operative" "debit" card product detail
        And the analytics interceptor service is initiated
        When the user accesses the "pay overdue balance" section
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
            | global application       | purchase financing overdue payments                            | string       | App On Click Start |
            | application name         | pago vencido diferimientos                                     | string       | App On Click Start |
            | application type         | operativa                                                      | string       | App On Click Start |
            | application step         | pagar saldo vencido                                            | string       | App On Click Start |
            | fulfillment model        | online                                                         | string       | App On Click Start |
            | product primary category | tarjetas                                                       | string       | App On Click Start |
            | product subtype          | tarjetas debito                                                | string       | App On Click Start |

    @ANA_EVENT_APA022
    @analytics
    @MX @web @android @ios
    @backend(test) @vbank
    @web-done
    Scenario: Advance Payments - App On Click Start - The customer enters the overdue payments operative from pending installments modal
        Given a user with the following criteria
            | criteria       |
            | financing line |
            | late payments  |
        And the user attempts to access to Financing Cancel of Debit line
        And the analytics interceptor service is initiated
        When the user pays the balance due
        Then the analytics events contains the following variables
            | item                     | value                                                                                  | type         | event              |
            | analytics                | analytics/glomo_base                                                                   | json schema  | App On Click Start |
            | version DL               | 20250414_5.0                                                                           | string       | App On Click Start |
            | page name                | app:privada:personas:tarjetas:debito:compras diferidas:cancelar linea:pagos pendientes | string       | App On Click Start |
            | level 1                  | tarjetas                                                                               | string       | App On Click Start |
            | level 2                  | debito                                                                                 | string       | App On Click Start |
            | level 3                  | compras diferidas                                                                      | string       | App On Click Start |
            | level 4                  | cancelar linea                                                                         | string       | App On Click Start |
            | level 5                  | pagos pendientes                                                                       | string       | App On Click Start |
            | language                 | ES                                                                                     | string       | App On Click Start |
            | page area                | privada                                                                                | string       | App On Click Start |
            | page intent              | informacion                                                                            | string       | App On Click Start |
            | channel                  | online                                                                                 | string       | App On Click Start |
            | page instance ID         | de                                                                                     | string       | App On Click Start |
            | page info version        | appVersion                                                                             | regexp named | App On Click Start |
            | page segment             | personas                                                                               | string       | App On Click Start |
            | sysEnv                   | app                                                                                    | string       | App On Click Start |
            | business unit            | BBVA Mexico                                                                            | string       | App On Click Start |
            | site app name            | App BBVA Mexico                                                                        | string       | App On Click Start |
            | project name             | DIY Payments                                                                           | string       | App On Click Start |
            | device mobile            | si                                                                                     | string       | App On Click Start |
            | user userState           | logado                                                                                 | string       | App On Click Start |
            | profile ID               | profileID                                                                              | regexp named | App On Click Start |
            | user segment global      | 003001                                                                                 | string       | App On Click Start |
            | user gender              | gender                                                                                 | regexp named | App On Click Start |
            | user age                 | age                                                                                    | regexp named | App On Click Start |
            | global application       | purchase financing overdue payments                                                    | string       | App On Click Start |
            | application name         | pago vencido diferimientos                                                             | string       | App On Click Start |
            | application type         | operativa                                                                              | string       | App On Click Start |
            | application step         | pagar saldo vencido                                                                    | string       | App On Click Start |
            | fulfillment model        | online                                                                                 | string       | App On Click Start |
            | product primary category | tarjetas                                                                               | string       | App On Click Start |
            | product subtype          | tarjetas debito                                                                        | string       | App On Click Start |

    @ANA_EVENT_APA023
    @analytics
    @MX @web @android @ios
    @backend(test) @vbank
    @web-done
    Scenario: Advance Payments - App Page Visit - The customer enters the overdue payments step
        Given a user with the following criteria
            | criteria       |
            | financing line |
            | late payments  |
        And the user accesses to the "operative" "debit" card product detail
        And the analytics interceptor service is initiated
        When the user accesses the "pay overdue balance" section
        Then the analytics events contains the following variables
            | item                     | value                                                                                      | type         | event          |
            | analytics                | analytics/glomo_base                                                                       | json schema  | App Page Visit |
            | version DL               | 20250414_5.0                                                                               | string       | App Page Visit |
            | page name                | app:privada:personas:tarjetas:debito:compras diferidas:pagar saldo vencido:1 monto a pagar | string       | App Page Visit |
            | level 1                  | tarjetas                                                                                   | string       | App Page Visit |
            | level 2                  | debito                                                                                     | string       | App Page Visit |
            | level 3                  | compras diferidas                                                                          | string       | App Page Visit |
            | level 4                  | pagar saldo vencido                                                                        | string       | App Page Visit |
            | level 5                  | 1 monto a pagar                                                                            | string       | App Page Visit |
            | language                 | ES                                                                                         | string       | App Page Visit |
            | page area                | privada                                                                                    | string       | App Page Visit |
            | page intent              | transaccion                                                                                | string       | App Page Visit |
            | channel                  | online                                                                                     | string       | App Page Visit |
            | page instance ID         | de                                                                                         | string       | App Page Visit |
            | page info version        | appVersion                                                                                 | regexp named | App Page Visit |
            | page segment             | personas                                                                                   | string       | App Page Visit |
            | sysEnv                   | app                                                                                        | string       | App Page Visit |
            | business unit            | BBVA Mexico                                                                                | string       | App Page Visit |
            | site app name            | App BBVA Mexico                                                                            | string       | App Page Visit |
            | project name             | DIY Payments                                                                               | string       | App Page Visit |
            | device mobile            | si                                                                                         | string       | App Page Visit |
            | user userState           | logado                                                                                     | string       | App Page Visit |
            | profile ID               | profileID                                                                                  | regexp named | App Page Visit |
            | user segment global      | 003001                                                                                     | string       | App Page Visit |
            | user gender              | gender                                                                                     | regexp named | App Page Visit |
            | user age                 | age                                                                                        | regexp named | App Page Visit |
            | global application       | purchase financing overdue payments                                                        | string       | App Page Visit |
            | application name         | pago vencido diferimientos                                                                 | string       | App Page Visit |
            | application type         | operativa                                                                                  | string       | App Page Visit |
            | application step         | 1 monto a pagar                                                                            | string       | App Page Visit |
            | fulfillment model        | online                                                                                     | string       | App Page Visit |
            | product primary category | tarjetas                                                                                   | string       | App Page Visit |
            | product subtype          | tarjetas debito                                                                            | string       | App Page Visit |

    @ANA_EVENT_APA024
    @analytics
    @MX @web @android @ios
    @backend(test) @vbank
    @web-done
    Scenario: Advance Payments - App Started - The customer focus on the amount input
        Given a user with the following criteria
            | criteria       |
            | financing line |
            | late payments  |
        And the user accesses to the "operative" "debit" card product detail
        And the user accesses the "pay overdue balance" section
        And the analytics interceptor service is initiated
        When the user enters a larger amount "500"
        Then the analytics events contains the following variables
            | item                     | value                                                                                      | type         | event       |
            | analytics                | analytics/glomo_base                                                                       | json schema  | App Started |
            | version DL               | 20250414_5.0                                                                               | string       | App Started |
            | page name                | app:privada:personas:tarjetas:debito:compras diferidas:pagar saldo vencido:1 monto a pagar | string       | App Started |
            | level 1                  | tarjetas                                                                                   | string       | App Started |
            | level 2                  | debito                                                                                     | string       | App Started |
            | level 3                  | compras diferidas                                                                          | string       | App Started |
            | level 4                  | pagar saldo vencido                                                                        | string       | App Started |
            | level 5                  | 1 monto a pagar                                                                            | string       | App Started |
            | language                 | ES                                                                                         | string       | App Started |
            | page area                | privada                                                                                    | string       | App Started |
            | page intent              | transaccion                                                                                | string       | App Started |
            | channel                  | online                                                                                     | string       | App Started |
            | page instance ID         | de                                                                                         | string       | App Started |
            | page info version        | appVersion                                                                                 | regexp named | App Started |
            | page segment             | personas                                                                                   | string       | App Started |
            | sysEnv                   | app                                                                                        | string       | App Started |
            | business unit            | BBVA Mexico                                                                                | string       | App Started |
            | site app name            | App BBVA Mexico                                                                            | string       | App Started |
            | project name             | DIY Payments                                                                               | string       | App Started |
            | device mobile            | si                                                                                         | string       | App Started |
            | user userState           | logado                                                                                     | string       | App Started |
            | profile ID               | profileID                                                                                  | regexp named | App Started |
            | user segment global      | 003001                                                                                     | string       | App Started |
            | user gender              | gender                                                                                     | regexp named | App Started |
            | user age                 | age                                                                                        | regexp named | App Started |
            | global application       | purchase financing overdue payments                                                        | string       | App Started |
            | application name         | pago vencido diferimientos                                                                 | string       | App Started |
            | application type         | operativa                                                                                  | string       | App Started |
            | application step         | ingresar monto a pagar                                                                     | string       | App Started |
            | fulfillment model        | online                                                                                     | string       | App Started |
            | product primary category | tarjetas                                                                                   | string       | App Started |
            | product subtype          | tarjetas debito                                                                            | string       | App Started |

    @ANA_EVENT_APA025
    @analytics
    @MX @web @android @ios
    @backend(test) @vbank
    @web-done
    Scenario: Advance Payments - App Step 2 - The customer enters the select origin account step 2
        Given a user with the following criteria:
            | criteria       |
            | financing line |
            | late payments  |
        And the user accesses to the "operative" "debit" card product detail
        And the user accesses the "pay overdue balance" section
        And the analytics interceptor service is initiated
        When the user enters the amount "1" and continues
        Then the analytics events contains the following variables
            | item                     | value                                                                                           | type         | event      |
            | analytics                | analytics/glomo_base                                                                            | json schema  | App Step 2 |
            | version DL               | 20250414_5.0                                                                                    | string       | App Step 2 |
            | page name                | app:privada:personas:tarjetas:debito:compras diferidas:pagar saldo vencido:2 seleccionar cuenta | string       | App Step 2 |
            | level 1                  | tarjetas                                                                                        | string       | App Step 2 |
            | level 2                  | debito                                                                                          | string       | App Step 2 |
            | level 3                  | compras diferidas                                                                               | string       | App Step 2 |
            | level 4                  | pagar saldo vencido                                                                             | string       | App Step 2 |
            | level 5                  | 2 seleccionar cuenta                                                                            | string       | App Step 2 |
            | language                 | ES                                                                                              | string       | App Step 2 |
            | page area                | privada                                                                                         | string       | App Step 2 |
            | page intent              | transaccion                                                                                     | string       | App Step 2 |
            | channel                  | online                                                                                          | string       | App Step 2 |
            | page instance ID         | de                                                                                              | string       | App Step 2 |
            | page info version        | appVersion                                                                                      | regexp named | App Step 2 |
            | page segment             | personas                                                                                        | string       | App Step 2 |
            | sysEnv                   | app                                                                                             | string       | App Step 2 |
            | business unit            | BBVA Mexico                                                                                     | string       | App Step 2 |
            | site app name            | App BBVA Mexico                                                                                 | string       | App Step 2 |
            | project name             | DIY Payments                                                                                    | string       | App Step 2 |
            | device mobile            | si                                                                                              | string       | App Step 2 |
            | user userState           | logado                                                                                          | string       | App Step 2 |
            | profile ID               | profileID                                                                                       | regexp named | App Step 2 |
            | user segment global      | 003001                                                                                          | string       | App Step 2 |
            | user gender              | gender                                                                                          | regexp named | App Step 2 |
            | user age                 | age                                                                                             | regexp named | App Step 2 |
            | global application       | purchase financing overdue payments                                                             | string       | App Step 2 |
            | application name         | pago vencido diferimientos                                                                      | string       | App Step 2 |
            | application type         | operativa                                                                                       | string       | App Step 2 |
            | application step         | 2 seleccionar cuenta                                                                            | string       | App Step 2 |
            | fulfillment model        | online                                                                                          | string       | App Step 2 |
            | product primary category | tarjetas                                                                                        | string       | App Step 2 |
            | product subtype          | tarjetas debito                                                                                 | string       | App Step 2 |
            | product amount           | 1                                                                                               | string       | App Step 2 |
            | product currency         | MXN                                                                                             | string       | App Step 2 |

    @ANA_EVENT_APA026
    @analytics
    @MX @web @android @ios
    @backend(test) @vbank
    @web-done
    Scenario: Advance Payments - App Step 3 - The customer enters the confirmation step 2
        Given a user with the following criteria:
            | criteria       |
            | financing line |
            | late payments  |
        And the user accesses to the "operative" "debit" card product detail
        And the user accesses the "pay overdue balance" section
        And the user enters the amount "1" and continues
        And the analytics interceptor service is initiated
        When the user selects the origin account
        Then the analytics events contains the following variables
            | item                     | value                                                                                     | type         | event      |
            | analytics                | analytics/glomo_base                                                                      | json schema  | App Step 3 |
            | version DL               | 20250414_5.0                                                                              | string       | App Step 3 |
            | page name                | app:privada:personas:tarjetas:debito:compras diferidas:pagar saldo vencido:3 confirmacion | string       | App Step 3 |
            | level 1                  | tarjetas                                                                                  | string       | App Step 3 |
            | level 2                  | debito                                                                                    | string       | App Step 3 |
            | level 3                  | compras diferidas                                                                         | string       | App Step 3 |
            | level 4                  | pagar saldo vencido                                                                       | string       | App Step 3 |
            | level 5                  | 3 confirmacion                                                                            | string       | App Step 3 |
            | language                 | ES                                                                                        | string       | App Step 3 |
            | page area                | privada                                                                                   | string       | App Step 3 |
            | page intent              | transaccion                                                                               | string       | App Step 3 |
            | channel                  | online                                                                                    | string       | App Step 3 |
            | page instance ID         | de                                                                                        | string       | App Step 3 |
            | page info version        | appVersion                                                                                | regexp named | App Step 3 |
            | page segment             | personas                                                                                  | string       | App Step 3 |
            | sysEnv                   | app                                                                                       | string       | App Step 3 |
            | business unit            | BBVA Mexico                                                                               | string       | App Step 3 |
            | site app name            | App BBVA Mexico                                                                           | string       | App Step 3 |
            | project name             | DIY Payments                                                                              | string       | App Step 3 |
            | device mobile            | si                                                                                        | string       | App Step 3 |
            | user userState           | logado                                                                                    | string       | App Step 3 |
            | profile ID               | profileID                                                                                 | regexp named | App Step 3 |
            | user segment global      | 003001                                                                                    | string       | App Step 3 |
            | user gender              | gender                                                                                    | regexp named | App Step 3 |
            | user age                 | age                                                                                       | regexp named | App Step 3 |
            | global application       | purchase financing overdue payments                                                       | string       | App Step 3 |
            | application name         | pago vencido diferimientos                                                                | string       | App Step 3 |
            | application type         | operativa                                                                                 | string       | App Step 3 |
            | application step         | 3 confirmacion                                                                            | string       | App Step 3 |
            | fulfillment model        | online                                                                                    | string       | App Step 3 |
            | product primary category | tarjetas                                                                                  | string       | App Step 3 |
            | product subtype          | tarjetas debito                                                                           | string       | App Step 3 |
            | product amount           | 1                                                                                         | string       | App Step 3 |
            | product currency         | MXN                                                                                       | string       | App Step 3 |

    @ANA_EVENT_APA027
    @analytics
    @MX @web @android @ios
    @backend(test) @vbank
    @web-done
    Scenario: Advance Payments - App Step 4 - The customer enters the otp step
        Given a user with the following criteria:
            | criteria       |
            | financing line |
            | late payments  |
        And the user accesses to the "operative" "debit" card product detail
        And the user accesses the "pay overdue balance" section
        And the user enters the amount "2705" and continues
        And the analytics interceptor service is initiated
        When the user selects the origin account
        Then the analytics events contains the following variables
            | item                     | value                                                                            | type         | event      |
            | analytics                | analytics/glomo_base                                                             | json schema  | App Step 4 |
            | version DL               | 20250414_5.0                                                                     | string       | App Step 4 |
            | page name                | app:privada:personas:tarjetas:debito:compras diferidas:pagar saldo vencido:4 otp | string       | App Step 4 |
            | level 1                  | tarjetas                                                                         | string       | App Step 4 |
            | level 2                  | debito                                                                           | string       | App Step 4 |
            | level 3                  | compras diferidas                                                                | string       | App Step 4 |
            | level 4                  | pagar saldo vencido                                                              | string       | App Step 4 |
            | level 5                  | 4 otp                                                                            | string       | App Step 4 |
            | language                 | ES                                                                               | string       | App Step 4 |
            | page area                | privada                                                                          | string       | App Step 4 |
            | page intent              | transaccion                                                                      | string       | App Step 4 |
            | channel                  | online                                                                           | string       | App Step 4 |
            | page instance ID         | de                                                                               | string       | App Step 4 |
            | page info version        | appVersion                                                                       | regexp named | App Step 4 |
            | page segment             | personas                                                                         | string       | App Step 4 |
            | sysEnv                   | app                                                                              | string       | App Step 4 |
            | business unit            | BBVA Mexico                                                                      | string       | App Step 4 |
            | site app name            | App BBVA Mexico                                                                  | string       | App Step 4 |
            | project name             | DIY Payments                                                                     | string       | App Step 4 |
            | device mobile            | si                                                                               | string       | App Step 4 |
            | user userState           | logado                                                                           | string       | App Step 4 |
            | profile ID               | profileID                                                                        | regexp named | App Step 4 |
            | user segment global      | 003001                                                                           | string       | App Step 4 |
            | user gender              | gender                                                                           | regexp named | App Step 4 |
            | user age                 | age                                                                              | regexp named | App Step 4 |
            | global application       | purchase financing overdue payments                                              | string       | App Step 4 |
            | application name         | pago vencido diferimientos                                                       | string       | App Step 4 |
            | application type         | operativa                                                                        | string       | App Step 4 |
            | application step         | 4 otp                                                                            | string       | App Step 4 |
            | fulfillment model        | online                                                                           | string       | App Step 4 |
            | product primary category | tarjetas                                                                         | string       | App Step 4 |
            | product subtype          | tarjetas debito                                                                  | string       | App Step 4 |
            | product amount           | 2705                                                                             | string       | App Step 4 |
            | product currency         | MXN                                                                              | string       | App Step 4 |

    @ANA_EVENT_APA028
    @analytics
    @MX @web @android @ios
    @backend(test) @vbank
    @web-done
    Scenario: Advance Payments - App Completed - The customer enters the succes operation page
        Given a user with the following criteria:
            | criteria       |
            | financing line |
            | late payments  |
        And the user accesses to the "operative" "debit" card product detail
        And the user accesses the "pay overdue balance" section
        And the user enters the amount "2705" and continues
        And the analytics interceptor service is initiated
        When the user selects an account and continue
        Then the analytics events contains the following variables
            | item                         | value                                                                                     | type         | event         |
            | analytics                    | analytics/glomo_base                                                                      | json schema  | App Completed |
            | version DL                   | 20250414_5.0                                                                              | string       | App Completed |
            | page name                    | app:privada:personas:tarjetas:debito:compras diferidas:pagar saldo vencido:pagina exitosa | string       | App Completed |
            | level 1                      | tarjetas                                                                                  | string       | App Completed |
            | level 2                      | debito                                                                                    | string       | App Completed |
            | level 3                      | compras diferidas                                                                         | string       | App Completed |
            | level 4                      | pagar saldo vencido                                                                       | string       | App Completed |
            | level 5                      | pagina exitosa                                                                            | string       | App Completed |
            | language                     | ES                                                                                        | string       | App Completed |
            | page area                    | privada                                                                                   | string       | App Completed |
            | page intent                  | transaccion                                                                               | string       | App Completed |
            | channel                      | online                                                                                    | string       | App Completed |
            | page instance ID             | de                                                                                        | string       | App Completed |
            | page info version            | appVersion                                                                                | regexp named | App Completed |
            | page segment                 | personas                                                                                  | string       | App Completed |
            | sysEnv                       | app                                                                                       | string       | App Completed |
            | business unit                | BBVA Mexico                                                                               | string       | App Completed |
            | site app name                | App BBVA Mexico                                                                           | string       | App Completed |
            | project name                 | DIY Payments                                                                              | string       | App Completed |
            | device mobile                | si                                                                                        | string       | App Completed |
            | user userState               | logado                                                                                    | string       | App Completed |
            | profile ID                   | profileID                                                                                 | regexp named | App Completed |
            | user segment global          | 003001                                                                                    | string       | App Completed |
            | user gender                  | gender                                                                                    | regexp named | App Completed |
            | user age                     | age                                                                                       | regexp named | App Completed |
            | global application           | purchase financing overdue payments                                                       | string       | App Completed |
            | application name             | pago vencido diferimientos                                                                | string       | App Completed |
            | application type             | operativa                                                                                 | string       | App Completed |
            | application step             | pagina exitosa                                                                            | string       | App Completed |
            | fulfillment model            | online                                                                                    | string       | App Completed |
            | application state            | finalizado                                                                                | string       | App Completed |
            | application operation number | 000021013544266828                                                                        | string       | App Completed |
            | product primary category     | tarjetas                                                                                  | string       | App Completed |
            | product subtype              | tarjetas debito                                                                           | string       | App Completed |
            | product amount               | 2705                                                                                      | string       | App Completed |
            | product currency             | MXN                                                                                       | string       | App Completed |

    @ANA_EVENT_APA029
    @analytics
    @MX @web @android @ios
    @backend(test) @vbank
    @web-done
    Scenario: Advance Payments - Page View - The customer enters overdue payments and open info modal
        Given a user with the following criteria:
            | criteria       |
            | financing line |
            | late payments  |
        And the user accesses to the "operative" "debit" card product detail
        And the user accesses the "pay overdue balance" section
        And the analytics interceptor service is initiated
        When the user accesses overdue payment info modal
        Then the analytics events contains the following variables
            | item                          | value                                                                                                 | type             |  event          |
            | analytics                     | analytics/glomo_base                                                                                  | json schema      |  Page View      |
            | version DL                    | 20250414_5.0                                                                                          | string           |  Page View      |
            | page name                     | app:privada:personas:tarjetas:debito:compras diferidas:pagar saldo vencido:penalizacion pago tardio   | string           |  Page View      |
            | level 1                       | tarjetas                                                                                              | string           |  Page View      |
            | level 2                       | debito                                                                                                | string           |  Page View      |
            | level 3                       | compras diferidas                                                                                     | string           |  Page View      |
            | level 4                       | pagar saldo vencido                                                                                   | string           |  Page View      |
            | level 5                       | penalizacion pago tardio                                                                              | string           |  Page View      |
            | language                      | ES                                                                                                    | string           |  Page View      |
            | page area                     | privada                                                                                               | string           |  Page View      |
            | page intent                   | transaccion                                                                                           | string           |  Page View      |
            | channel                       | online                                                                                                | string           |  Page View      |
            | page instance ID              | de                                                                                                    | string           |  Page View      |
            | page info version             | appVersion                                                                                            | regexp named     |  Page View      |
            | page segment                  | personas                                                                                              | string           |  Page View      |
            | sysEnv                        | app                                                                                                   | string           |  Page View      |
            | business unit                 | BBVA Mexico                                                                                           | string           |  Page View      |
            | site app name                 | App BBVA Mexico                                                                                       | string           |  Page View      |
            | project name                  | DIY Payments                                                                                          | string           |  Page View      |
            | device mobile                 | si                                                                                                    | string           |  Page View      |
            | user userState                | logado                                                                                                | string           |  Page View      |
            | profile ID                    | profileID                                                                                             | regexp named     |  Page View      |
            | user segment global           | 003001                                                                                                | string           |  Page View      |
            | user gender                   | gender                                                                                                | regexp named     |  Page View      |
            | user age                      | age                                                                                                   | regexp named     |  Page View      |

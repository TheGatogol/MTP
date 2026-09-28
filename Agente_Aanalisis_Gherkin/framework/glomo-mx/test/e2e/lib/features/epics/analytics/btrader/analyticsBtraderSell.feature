@btraderAnalytics @btraderAnalyticsSell
Feature: Analytics - Btrader Sell

    @ANA_EVENT_SES001
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: App On Click Start CTA Desde Detalle Emisor
        Given a user with the following criteria
            | criteria |
            | btrader  |
        And the user accesses to btrader
        When the user opens the "investment" detail
        And the analytics interceptor service is initiated
        And the user select "sell" operative in investment detail
        Then the analytics events contains the following variables
            | item                                                       | value                                                     | type         | event              | event number |
            | analytics                                                  | analytics/glomo_base                                      | json schema  | App On Click Start | 1            |
            | version DL                                                 | 20250414_5.0                                              | string       | App On Click Start | 1            |
            | page name                                                  | app:privada:personas:contrato inversiones:detalle:emisora | string       | App On Click Start | 1            |
            | level 1                                                    | contrato inversiones                                      | string       | App On Click Start | 1            |
            | level 2                                                    | detalle                                                   | string       | App On Click Start | 1            |
            | level 3                                                    | emisora                                                   | string       | App On Click Start | 1            |
            | language                                                   | ES                                                        | string       | App On Click Start | 1            |
            | page area                                                  | privada                                                   | string       | App On Click Start | 1            |
            | page intent                                                | informacion                                               | string       | App On Click Start | 1            |
            | channel                                                    | online                                                    | string       | App On Click Start | 1            |
            | page instance ID                                           | de                                                        | string       | App On Click Start | 1            |
            | page info version                                          | appVersion                                                | regexp named | App On Click Start | 1            |
            | page segment                                               | personas                                                  | string       | App On Click Start | 1            |
            | sysEnv                                                     | app                                                       | string       | App On Click Start | 1            |
            | business unit                                              | BBVA Mexico                                               | string       | App On Click Start | 1            |
            | site app name                                              | App BBVA Mexico                                           | string       | App On Click Start | 1            |
            | project name                                               | DIY E2E Sales                                             | string       | App On Click Start | 1            |
            | device mobile                                              | si                                                        | string       | App On Click Start | 1            |
            | user userState                                             | logado                                                    | string       | App On Click Start | 1            |
            | profile ID                                                 | profileID                                                 | regexp named | App On Click Start | 1            |
            | user segment global                                        | 003001                                                    | string       | App On Click Start | 1            |
            | user gender                                                | gender                                                    | regexp named | App On Click Start | 1            |
            | user age                                                   | age                                                       | regexp named | App On Click Start | 1            |
            | global application                                         | sell investment                                           | string       | App On Click Start | 1            |
            | application name                                           | invertir venta                                            | string       | App On Click Start | 1            |
            | application type                                           | operativa                                                 | string       | App On Click Start | 1            |
            | application step                                           | vender titulos                                            | string       | App On Click Start | 1            |
            | fulfillment model                                          | online                                                    | string       | App On Click Start | 1            |
            | product primary category                                   | inversiones                                               | string       | App On Click Start | 1            |
            | product subtype                                            | fondos inversion                                          | string       | App On Click Start | 1            |
            | internal campaign                                          |                                                           | empty array  | App On Click Start | 1            |
            | optimization attributes                                    |                                                           | empty array  | App On Click Start | 1            |

    @ANA_EVENT_SES002
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: App Page Visit 1 - Orden de venta
        Given a user with the following criteria
            | criteria |
            | btrader  |
        And the user accesses to btrader
        When the user opens the "investment" detail
        And the analytics interceptor service is initiated
        And the user select "sell" operative in investment detail
        Then the analytics events contains the following variables
            | item                                                       | value                                                            | type         | event          | event number |
            | analytics                                                  | analytics/glomo_base                                             | json schema  | App Page Visit | 1            |
            | version DL                                                 | 20250414_5.0                                                     | string       | App Page Visit | 1            |
            | page name                                                  | app:privada:personas:contrato inversiones:venta:1 orden de venta | string       | App Page Visit | 1            |
            | level 1                                                    | contrato inversiones                                             | string       | App Page Visit | 1            |
            | level 2                                                    | venta                                                            | string       | App Page Visit | 1            |
            | level 3                                                    | 1 orden de venta                                                 | string       | App Page Visit | 1            |
            | language                                                   | ES                                                               | string       | App Page Visit | 1            |
            | page area                                                  | privada                                                          | string       | App Page Visit | 1            |
            | page intent                                                | transaccion                                                      | string       | App Page Visit | 1            |
            | channel                                                    | online                                                           | string       | App Page Visit | 1            |
            | page instance ID                                           | de                                                               | string       | App Page Visit | 1            |
            | page info version                                          | appVersion                                                       | regexp named | App Page Visit | 1            |
            | page segment                                               | personas                                                         | string       | App Page Visit | 1            |
            | sysEnv                                                     | app                                                              | string       | App Page Visit | 1            |
            | business unit                                              | BBVA Mexico                                                      | string       | App Page Visit | 1            |
            | site app name                                              | App BBVA Mexico                                                  | string       | App Page Visit | 1            |
            | project name                                               | DIY E2E Sales                                                    | string       | App Page Visit | 1            |
            | device mobile                                              | si                                                               | string       | App Page Visit | 1            |
            | user userState                                             | logado                                                           | string       | App Page Visit | 1            |
            | profile ID                                                 | profileID                                                        | regexp named | App Page Visit | 1            |
            | user segment global                                        | 003001                                                           | string       | App Page Visit | 1            |
            | user gender                                                | gender                                                           | regexp named | App Page Visit | 1            |
            | user age                                                   | age                                                              | regexp named | App Page Visit | 1            |
            | global application                                         | sell investment                                                  | string       | App Page Visit | 1            |
            | application name                                           | invertir venta                                                   | string       | App Page Visit | 1            |
            | application type                                           | operativa                                                        | string       | App Page Visit | 1            |
            | application step                                           | 1 orden de venta                                                 | string       | App Page Visit | 1            |
            | fulfillment model                                          | online                                                           | string       | App Page Visit | 1            |
            | product primary category                                   | inversiones                                                      | string       | App Page Visit | 1            |
            | product subtype                                            | fondos inversion                                                 | string       | App Page Visit | 1            |
            | internal campaign                                          |                                                                  | empty array  | App Page Visit | 1            |
            | optimization attributes                                    |                                                                  | empty array  | App Page Visit | 1            |

    @ANA_EVENT_SES003
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: App Started Seleccion Tipo Orden
        Given a user with the following criteria
            | criteria |
            | btrader  |
        And the user accesses to btrader
        When the user select an "apple" issuer and "stop" a "select type" share
        And the analytics interceptor service is initiated
        And the user create "limited" order sell
        Then the analytics events contains the following variables
            | item                                                       | value                                                            | type         | event       | event number |
            | analytics                                                  | analytics/glomo_base                                             | json schema  | App Started | 1            |
            | version DL                                                 | 20250414_5.0                                                     | string       | App Started | 1            |
            | page name                                                  | app:privada:personas:contrato inversiones:venta:1 orden de venta | string       | App Started | 1            |
            | level 1                                                    | contrato inversiones                                             | string       | App Started | 1            |
            | level 2                                                    | venta                                                            | string       | App Started | 1            |
            | level 3                                                    | 1 orden de venta                                                 | string       | App Started | 1            |
            | language                                                   | ES                                                               | string       | App Started | 1            |
            | page area                                                  | privada                                                          | string       | App Started | 1            |
            | page intent                                                | transaccion                                                      | string       | App Started | 1            |
            | channel                                                    | online                                                           | string       | App Started | 1            |
            | page instance ID                                           | de                                                               | string       | App Started | 1            |
            | page info version                                          | appVersion                                                       | regexp named | App Started | 1            |
            | page segment                                               | personas                                                         | string       | App Started | 1            |
            | sysEnv                                                     | app                                                              | string       | App Started | 1            |
            | business unit                                              | BBVA Mexico                                                      | string       | App Started | 1            |
            | site app name                                              | App BBVA Mexico                                                  | string       | App Started | 1            |
            | project name                                               | DIY E2E Sales                                                    | string       | App Started | 1            |
            | device mobile                                              | si                                                               | string       | App Started | 1            |
            | user userState                                             | logado                                                           | string       | App Started | 1            |
            | profile ID                                                 | profileID                                                        | regexp named | App Started | 1            |
            | user segment global                                        | 003001                                                           | string       | App Started | 1            |
            | user gender                                                | gender                                                           | regexp named | App Started | 1            |
            | user age                                                   | age                                                              | regexp named | App Started | 1            |
            | global application                                         | sell investment                                                  | string       | App Started | 1            |
            | application name                                           | invertir venta                                                   | string       | App Started | 1            |
            | application type                                           | operativa                                                        | string       | App Started | 1            |
            | application step                                           | continuar                                                        | string       | App Started | 1            |
            | fulfillment model                                          | online                                                           | string       | App Started | 1            |
            | product primary category                                   | inversiones                                                      | string       | App Started | 1            |
            | product subtype                                            | fondos inversion                                                 | string       | App Started | 1            |
            | internal campaign                                          |                                                                  | empty array  | App Started | 1            |
            | optimization attributes                                    |                                                                  | empty array  | App Started | 1            |

    @ANA_EVENT_SES004
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: App Step 2 Detalle de la Orden
        Given a user with the following criteria
            | criteria |
            | btrader  |
        And the user accesses to btrader
        When the user select an "apple" issuer and "stop" a "select type" share
        And the analytics interceptor service is initiated
        And the user create "limited" order sell
        Then the analytics events contains the following variables
            | item                                                       | value                                                           | type         | event      | event number |
            | analytics                                                  | analytics/glomo_base                                            | json schema  | App Step 2 | 1            |
            | version DL                                                 | 20250414_5.0                                                    | string       | App Step 2 | 1            |
            | page name                                                  | app:privada:personas:contrato inversiones:venta:2 detalle orden | string       | App Step 2 | 1            |
            | level 1                                                    | contrato inversiones                                            | string       | App Step 2 | 1            |
            | level 2                                                    | venta                                                           | string       | App Step 2 | 1            |
            | level 3                                                    | 2 detalle orden                                                 | string       | App Step 2 | 1            |
            | language                                                   | ES                                                              | string       | App Step 2 | 1            |
            | page area                                                  | privada                                                         | string       | App Step 2 | 1            |
            | page intent                                                | transaccion                                                     | string       | App Step 2 | 1            |
            | channel                                                    | online                                                          | string       | App Step 2 | 1            |
            | page instance ID                                           | de                                                              | string       | App Step 2 | 1            |
            | page info version                                          | appVersion                                                      | regexp named | App Step 2 | 1            |
            | page segment                                               | personas                                                        | string       | App Step 2 | 1            |
            | sysEnv                                                     | app                                                             | string       | App Step 2 | 1            |
            | business unit                                              | BBVA Mexico                                                     | string       | App Step 2 | 1            |
            | site app name                                              | App BBVA Mexico                                                 | string       | App Step 2 | 1            |
            | project name                                               | DIY E2E Sales                                                   | string       | App Step 2 | 1            |
            | device mobile                                              | si                                                              | string       | App Step 2 | 1            |
            | user userState                                             | logado                                                          | string       | App Step 2 | 1            |
            | profile ID                                                 | profileID                                                       | regexp named | App Step 2 | 1            |
            | user segment global                                        | 003001                                                          | string       | App Step 2 | 1            |
            | user gender                                                | gender                                                          | regexp named | App Step 2 | 1            |
            | user age                                                   | age                                                             | regexp named | App Step 2 | 1            |
            | global application                                         | sell investment                                                 | string       | App Step 2 | 1            |
            | application name                                           | invertir venta                                                  | string       | App Step 2 | 1            |
            | application type                                           | operativa                                                       | string       | App Step 2 | 1            |
            | application step                                           | 2 detalle orden                                                 | string       | App Step 2 | 1            |
            | fulfillment model                                          | online                                                          | string       | App Step 2 | 1            |
            | application typology                                       | limitada                                                        | string       | App Step 2 | 1            |
            | product primary category                                   | inversiones                                                     | string       | App Step 2 | 1            |
            | product subtype                                            | fondos inversion                                                | string       | App Step 2 | 1            |
            | internal campaign                                          |                                                                 | empty array  | App Step 2 | 1            |
            | optimization attributes                                    |                                                                 | empty array  | App Step 2 | 1            |

    @ANA_EVENT_SES005
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: App Step 3  Confirmacion
        Given a user with the following criteria
            | criteria |
            | btrader  |
        And the user accesses to btrader
        When the user select an "apple" issuer and "sell" a "limited" share
        And the analytics interceptor service is initiated
        And the user tries to sell "1" titles at "2770" and "continue"
        Then the analytics events contains the following variables
            | item                                                       | value                                                          | type         | event      |
            | analytics                                                  | analytics/glomo_base                                           | json schema  | App Step 3 |
            | version DL                                                 | 20250414_5.0                                                   | string       | App Step 3 |
            | page name                                                  | app:privada:personas:contrato inversiones:venta:3 confirmacion | string       | App Step 3 |
            | level 1                                                    | contrato inversiones                                           | string       | App Step 3 |
            | level 2                                                    | venta                                                          | string       | App Step 3 |
            | level 3                                                    | 3 confirmacion                                                 | string       | App Step 3 |
            | language                                                   | ES                                                             | string       | App Step 3 |
            | page area                                                  | privada                                                        | string       | App Step 3 |
            | page intent                                                | transaccion                                                    | string       | App Step 3 |
            | channel                                                    | online                                                         | string       | App Step 3 |
            | page instance ID                                           | de                                                             | string       | App Step 3 |
            | page info version                                          | appVersion                                                     | regexp named | App Step 3 |
            | page segment                                               | personas                                                       | string       | App Step 3 |
            | sysEnv                                                     | app                                                            | string       | App Step 3 |
            | business unit                                              | BBVA Mexico                                                    | string       | App Step 3 |
            | site app name                                              | App BBVA Mexico                                                | string       | App Step 3 |
            | project name                                               | DIY E2E Sales                                                  | string       | App Step 3 |
            | device mobile                                              | si                                                             | string       | App Step 3 |
            | user userState                                             | logado                                                         | string       | App Step 3 |
            | profile ID                                                 | profileID                                                      | regexp named | App Step 3 |
            | user segment global                                        | 003001                                                         | string       | App Step 3 |
            | user gender                                                | gender                                                         | regexp named | App Step 3 |
            | user age                                                   | age                                                            | regexp named | App Step 3 |
            | global application                                         | sell investment                                                | string       | App Step 3 |
            | application name                                           | invertir venta                                                 | string       | App Step 3 |
            | application type                                           | operativa                                                      | string       | App Step 3 |
            | application step                                           | 3 confirmacion                                                 | string       | App Step 3 |
            | fulfillment model                                          | online                                                         | string       | App Step 3 |
            | application typology                                       | limitada                                                       | string       | App Step 3 |
            | product primary category                                   | inversiones                                                    | string       | App Step 3 |
            | product subtype                                            | fondos inversion                                               | string       | App Step 3 |
            | product amount                                             | 2754.67                                                        | number       | App Step 3 |
            | product currency                                           | MXN                                                            | string       | App Step 3 |
            | product quantity                                           | 1                                                              | number       | App Step 3 |
            | product service charge                                     | 6.34                                                           | number       | App Step 3 |
            | internal campaign                                          |                                                                | empty array  | App Step 3 |
            | optimization attributes                                    |                                                                | empty array  | App Step 3 |

    @ANA_EVENT_SES006
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: App Completed Finalizado
        Given a user with the following criteria
            | criteria |
            | btrader  |
        And the user accesses to btrader
        When the user select an "apple" issuer and "sell" a "limited" share
        And the analytics interceptor service is initiated
        And the user tries to sell "1" titles at "2770" and "finish the sell"
        Then the analytics events contains the following variables
            | item                                                       | value                                                          | type         | event         |
            | analytics                                                  | analytics/glomo_base                                           | json schema  | App Completed |
            | version DL                                                 | 20250414_5.0                                                   | string       | App Completed |
            | page name                                                  | app:privada:personas:contrato inversiones:venta:pagina exitosa | string       | App Completed |
            | level 1                                                    | contrato inversiones                                           | string       | App Completed |
            | level 2                                                    | venta                                                          | string       | App Completed |
            | level 3                                                    | pagina exitosa                                                 | string       | App Completed |
            | language                                                   | ES                                                             | string       | App Completed |
            | page area                                                  | privada                                                        | string       | App Completed |
            | page intent                                                | transaccion                                                    | string       | App Completed |
            | channel                                                    | online                                                         | string       | App Completed |
            | page instance ID                                           | de                                                             | string       | App Completed |
            | page info version                                          | appVersion                                                     | regexp named | App Completed |
            | page segment                                               | personas                                                       | string       | App Completed |
            | sysEnv                                                     | app                                                            | string       | App Completed |
            | business unit                                              | BBVA Mexico                                                    | string       | App Completed |
            | site app name                                              | App BBVA Mexico                                                | string       | App Completed |
            | project name                                               | DIY E2E Sales                                                  | string       | App Completed |
            | device mobile                                              | si                                                             | string       | App Completed |
            | user userState                                             | logado                                                         | string       | App Completed |
            | profile ID                                                 | profileID                                                      | regexp named | App Completed |
            | user segment global                                        | 003001                                                         | string       | App Completed |
            | user gender                                                | gender                                                         | regexp named | App Completed |
            | user age                                                   | age                                                            | regexp named | App Completed |
            | global application                                         | sell investment                                                | string       | App Completed |
            | application name                                           | invertir venta                                                 | string       | App Completed |
            | application type                                           | operativa                                                      | string       | App Completed |
            | application step                                           | pagina exitosa                                                 | string       | App Completed |
            | fulfillment model                                          | online                                                         | string       | App Completed |
            | application typology                                       | limitada                                                       | string       | App Completed |
            | application state                                          | finalizado                                                     | string       | App Completed |
            | application operation number                               | 1212234120                                                     | string       | App Completed |
            | product primary category                                   | inversiones                                                    | string       | App Completed |
            | product subtype                                            | fondos inversion                                               | string       | App Completed |
            | product amount                                             | 2754.67                                                        | number       | App Completed |
            | product currency                                           | MXN                                                            | string       | App Completed |
            | product quantity                                           | 1                                                              | number       | App Completed |
            | product service charge                                     | 7.35                                                           | number       | App Completed |
            | internal campaign                                          |                                                                | empty array  | App Completed |

    @ANA_EVENT_SES007
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: HUELLA - Cambiar Vigencia
        Given a user with the following criteria
            | criteria |
            | btrader  |
        And the user accesses to btrader
        When the user select an "apple" issuer and "sell" a "limited" share
        And the analytics interceptor service is initiated
        And the user changes date
        Then the analytics events contains the following variables
            | item                    | value                                                            | type             | event     |
            | analytics               | analytics/glomo_base                                             | json schema      | Page View |
            | version DL              | 20250414_5.0                                                     | string           | Page View |
            | page name               | app:privada:personas:contrato inversiones:venta:cambiar vigencia | string           | Page View |
            | level 1                 | contrato inversiones                                             | string           | Page View |
            | level 2                 | venta                                                            | string           | Page View |
            | level 3                 | cambiar vigencia                                                 | string           | Page View |
            | language                | ES                                                               | string           | Page View |
            | page area               | privada                                                          | string           | Page View |
            | page intent             | transaccion                                                      | string           | Page View |
            | channel                 | online                                                           | string           | Page View |
            | page instance ID        | de                                                               | string           | Page View |
            | page info version       | appVersion                                                       | regexp named     | Page View |
            | page segment            | personas                                                         | string           | Page View |
            | sysEnv                  | app                                                              | string           | Page View |
            | business unit           | BBVA Mexico                                                      | string           | Page View |
            | site app name           | App BBVA Mexico                                                  | string           | Page View |
            | project name            | DIY E2E Sales                                                    | string           | Page View |
            | device mobile           | si                                                               | string           | Page View |
            | user userState          | logado                                                           | string           | Page View |
            | profile ID              | profileID                                                        | regexp named     | Page View |
            | user segment global     | 003001                                                           | string           | Page View |
            | user gender             | gender                                                           | regexp named     | Page View |
            | user age                | age                                                              | regexp named     | Page View |
            | internal campaign       |                                                                  | empty array      | Page View |
            | optimization attributes |                                                                  | empty array      | Page View |
            | application             |                                                                  | empty str object | Page View |
            | products attributes     |                                                                  | empty array      | Page View |

    @ANA_EVENT_SES008
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: HUELLA - Comision
        Given a user with the following criteria
            | criteria |
            | btrader  |
        And the user accesses to btrader
        When the user select an "apple" issuer and "sell" a "limited" share
        And the analytics interceptor service is initiated
        And the user observes the information to "sell commisions"
        Then the analytics events contains the following variables
            | item                    | value                                                    | type             | event     |
            | analytics               | analytics/glomo_base                                     | json schema      | Page View |
            | version DL              | 20250414_5.0                                             | string           | Page View |
            | page name               | app:privada:personas:contrato inversiones:venta:comision | string           | Page View |
            | level 1                 | contrato inversiones                                     | string           | Page View |
            | level 2                 | venta                                                    | string           | Page View |
            | level 3                 | comision                                                 | string           | Page View |
            | language                | ES                                                       | string           | Page View |
            | page area               | privada                                                  | string           | Page View |
            | page intent             | transaccion                                              | string           | Page View |
            | channel                 | online                                                   | string           | Page View |
            | page instance ID        | de                                                       | string           | Page View |
            | page info version       | appVersion                                               | regexp named     | Page View |
            | page segment            | personas                                                 | string           | Page View |
            | sysEnv                  | app                                                      | string           | Page View |
            | business unit           | BBVA Mexico                                              | string           | Page View |
            | site app name           | App BBVA Mexico                                          | string           | Page View |
            | project name            | DIY E2E Sales                                            | string           | Page View |
            | device mobile           | si                                                       | string           | Page View |
            | user userState          | logado                                                   | string           | Page View |
            | profile ID              | profileID                                                | regexp named     | Page View |
            | user segment global     | 003001                                                   | string           | Page View |
            | user gender             | gender                                                   | regexp named     | Page View |
            | user age                | age                                                      | regexp named     | Page View |
            | internal campaign       |                                                          | empty array      | Page View |
            | optimization attributes |                                                          | empty array      | Page View |
            | application             |                                                          | empty str object | Page View |
            | products attributes     |                                                          | empty array      | Page View |

    @ANA_EVENT_SES009
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: App On Click Start CTA Desde Detalle Producto
        Given a user with the following criteria
            | criteria |
            | btrader  |
        And the user accesses to btrader
        When the user accesses to swipe operatives
        And the analytics interceptor service is initiated
        And the user select "sell" option
        Then the analytics events contains the following variables
            | item                                                       | value                                                     | type         | event              | event number |
            | analytics                                                  | analytics/glomo_base                                      | json schema  | App On Click Start | 1            |
            | version DL                                                 | 20250414_5.0                                              | string       | App On Click Start | 1            |
            | page name                                                  | app:privada:personas:contrato inversiones:detalle:emisora | string       | App On Click Start | 1            |
            | level 1                                                    | contrato inversiones                                      | string       | App On Click Start | 1            |
            | level 2                                                    | detalle                                                   | string       | App On Click Start | 1            |
            | level 3                                                    | emisora                                                   | string       | App On Click Start | 1            |
            | language                                                   | ES                                                        | string       | App On Click Start | 1            |
            | page area                                                  | privada                                                   | string       | App On Click Start | 1            |
            | page intent                                                | informacion                                               | string       | App On Click Start | 1            |
            | channel                                                    | online                                                    | string       | App On Click Start | 1            |
            | page instance ID                                           | de                                                        | string       | App On Click Start | 1            |
            | page info version                                          | appVersion                                                | regexp named | App On Click Start | 1            |
            | page segment                                               | personas                                                  | string       | App On Click Start | 1            |
            | sysEnv                                                     | app                                                       | string       | App On Click Start | 1            |
            | business unit                                              | BBVA Mexico                                               | string       | App On Click Start | 1            |
            | site app name                                              | App BBVA Mexico                                           | string       | App On Click Start | 1            |
            | project name                                               | DIY E2E Sales                                             | string       | App On Click Start | 1            |
            | device mobile                                              | si                                                        | string       | App On Click Start | 1            |
            | user userState                                             | logado                                                    | string       | App On Click Start | 1            |
            | profile ID                                                 | profileID                                                 | regexp named | App On Click Start | 1            |
            | user segment global                                        | 003001                                                    | string       | App On Click Start | 1            |
            | user gender                                                | gender                                                    | regexp named | App On Click Start | 1            |
            | user age                                                   | age                                                       | regexp named | App On Click Start | 1            |
            | global application                                         | sell investment                                           | string       | App On Click Start | 1            |
            | application name                                           | invertir venta                                            | string       | App On Click Start | 1            |
            | application type                                           | operativa                                                 | string       | App On Click Start | 1            |
            | application step                                           | vender titulos                                            | string       | App On Click Start | 1            |
            | fulfillment model                                          | online                                                    | string       | App On Click Start | 1            |
            | product primary category                                   | inversiones                                               | string       | App On Click Start | 1            |
            | product subtype                                            | fondos inversion                                          | string       | App On Click Start | 1            |
            | internal campaign                                          |                                                           | empty array  | App On Click Start | 1            |
            | optimization attributes                                    |                                                           | empty array  | App On Click Start | 1            |

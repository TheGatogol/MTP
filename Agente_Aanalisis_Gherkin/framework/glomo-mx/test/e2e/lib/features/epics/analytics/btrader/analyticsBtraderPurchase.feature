@btraderAnalytics @btraderAnalyticsPurchase
Feature: Analytics - Btrader Purchase

    @ANA_EVENT_PST001
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: App On Click Start CTA Desde Detalle Producto
        Given a user with the following criteria
            | criteria |
            | btrader  |
        And the user accesses to btrader
        When the user opens the "investment" detail
        And the analytics interceptor service is initiated
        And the user select "purchases" operative in investment detail
        Then the analytics events contains the following variables
            | item                            | value                                                     | type         | event              | event number |
            | analytics                       | analytics/glomo_base                                      | json schema  | App On Click Start | 1            |
            | version DL                      | 20250414_5.0                                              | string       | App On Click Start | 1            |
            | page name                       | app:privada:personas:contrato inversiones:detalle:emisora | string       | App On Click Start | 1            |
            | level 1                         | contrato inversiones                                      | string       | App On Click Start | 1            |
            | level 2                         | detalle                                                   | string       | App On Click Start | 1            |
            | level 3                         | emisora                                                   | string       | App On Click Start | 1            |
            | language                        | ES                                                        | string       | App On Click Start | 1            |
            | page area                       | privada                                                   | string       | App On Click Start | 1            |
            | page intent                     | informacion                                               | string       | App On Click Start | 1            |
            | channel                         | online                                                    | string       | App On Click Start | 1            |
            | page instance ID                | de                                                        | string       | App On Click Start | 1            |
            | page info version               | appVersion                                                | regexp named | App On Click Start | 1            |
            | page segment                    | personas                                                  | string       | App On Click Start | 1            |
            | sysEnv                          | app                                                       | string       | App On Click Start | 1            |
            | business unit                   | BBVA Mexico                                               | string       | App On Click Start | 1            |
            | site app name                   | App BBVA Mexico                                           | string       | App On Click Start | 1            |
            | project name                    | DIY E2E Sales                                             | string       | App On Click Start | 1            |
            | device mobile                   | si                                                        | string       | App On Click Start | 1            |
            | user userState                  | logado                                                    | string       | App On Click Start | 1            |
            | profile ID                      | profileID                                                 | regexp named | App On Click Start | 1            |
            | user segment global             | 003001                                                    | string       | App On Click Start | 1            |
            | user gender                     | gender                                                    | regexp named | App On Click Start | 1            |
            | user age                        | age                                                       | regexp named | App On Click Start | 1            |
            | global application              | purchase investment                                       | string       | App On Click Start | 1            |
            | application name                | invertir compra                                           | string       | App On Click Start | 1            |
            | application type                | contratacion                                              | string       | App On Click Start | 1            |
            | application step                | comprar titulos                                           | string       | App On Click Start | 1            |
            | fulfillment model               | online                                                    | string       | App On Click Start | 1            |
            | product primary category        | inversiones                                               | string       | App On Click Start | 1            |
            | product subtype                 | fondos inversion                                          | string       | App On Click Start | 1            |
            | internal campaign               |                                                           | empty array  | App On Click Start | 1            |
            | optimization attributes         |                                                           | empty array  | App On Click Start | 1            |

    @ANA_EVENT_PST002
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: App Page Visit - Orden de Compra
        Given a user with the following criteria
            | criteria |
            | btrader  |
        And the user accesses to btrader
        When the user opens the "investment" detail
        And the analytics interceptor service is initiated
        And the user select "purchases" operative in investment detail
        Then the analytics events contains the following variables
            | item                                                       | value                                                              | type         | event          | event number |
            | analytics                                                  | analytics/glomo_base                                               | json schema  | App Page Visit | 1            |
            | version DL                                                 | 20250414_5.0                                                       | string       | App Page Visit | 1            |
            | page name                                                  | app:privada:personas:contrato inversiones:compra:1 orden de compra | string       | App Page Visit | 1            |
            | level 1                                                    | contrato inversiones                                               | string       | App Page Visit | 1            |
            | level 2                                                    | compra                                                             | string       | App Page Visit | 1            |
            | level 3                                                    | 1 orden de compra                                                  | string       | App Page Visit | 1            |
            | language                                                   | ES                                                                 | string       | App Page Visit | 1            |
            | page area                                                  | privada                                                            | string       | App Page Visit | 1            |
            | page intent                                                | transaccion                                                        | string       | App Page Visit | 1            |
            | channel                                                    | online                                                             | string       | App Page Visit | 1            |
            | page instance ID                                           | de                                                                 | string       | App Page Visit | 1            |
            | page info version                                          | appVersion                                                         | regexp named | App Page Visit | 1            |
            | page segment                                               | personas                                                           | string       | App Page Visit | 1            |
            | sysEnv                                                     | app                                                                | string       | App Page Visit | 1            |
            | business unit                                              | BBVA Mexico                                                        | string       | App Page Visit | 1            |
            | site app name                                              | App BBVA Mexico                                                    | string       | App Page Visit | 1            |
            | project name                                               | DIY E2E Sales                                                      | string       | App Page Visit | 1            |
            | device mobile                                              | si                                                                 | string       | App Page Visit | 1            |
            | user userState                                             | logado                                                             | string       | App Page Visit | 1            |
            | profile ID                                                 | profileID                                                          | regexp named | App Page Visit | 1            |
            | user segment global                                        | 003001                                                             | string       | App Page Visit | 1            |
            | user gender                                                | gender                                                             | regexp named | App Page Visit | 1            |
            | user age                                                   | age                                                                | regexp named | App Page Visit | 1            |
            | global application                                         | purchase investment                                                | string       | App Page Visit | 1            |
            | application name                                           | invertir compra                                                    | string       | App Page Visit | 1            |
            | application type                                           | contratacion                                                       | string       | App Page Visit | 1            |
            | application step                                           | 1 orden de compra                                                  | string       | App Page Visit | 1            |
            | fulfillment model                                          | online                                                             | string       | App Page Visit | 1            |
            | product primary category                                   | inversiones                                                        | string       | App Page Visit | 1            |
            | product subtype                                            | fondos inversion                                                   | string       | App Page Visit | 1            |
            | internal campaign                                          |                                                                    | empty array  | App Page Visit | 1            |
            | optimization attributes                                    |                                                                    | empty array  | App Page Visit | 1            |

    @ANA_EVENT_PST003
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: App Started - Seleccion Tipo Orden
        Given a user with the following criteria
            | criteria |
            | btrader  |
        And the user accesses to btrader
        And the analytics interceptor service is initiated
        When the user select an "apple" issuer and "purchases" a "limited" share
        Then the analytics events contains the following variables
            | item                                                       | value                                                              | type         | event       |
            | analytics                                                  | analytics/glomo_base                                               | json schema  | App Started |
            | version DL                                                 | 20250414_5.0                                                       | string       | App Started |
            | page name                                                  | app:privada:personas:contrato inversiones:compra:1 orden de compra | string       | App Started |
            | level 1                                                    | contrato inversiones                                               | string       | App Started |
            | level 2                                                    | compra                                                             | string       | App Started |
            | level 3                                                    | 1 orden de compra                                                  | string       | App Started |
            | language                                                   | ES                                                                 | string       | App Started |
            | page area                                                  | privada                                                            | string       | App Started |
            | page intent                                                | transaccion                                                        | string       | App Started |
            | channel                                                    | online                                                             | string       | App Started |
            | page instance ID                                           | de                                                                 | string       | App Started |
            | page info version                                          | appVersion                                                         | regexp named | App Started |
            | page segment                                               | personas                                                           | string       | App Started |
            | sysEnv                                                     | app                                                                | string       | App Started |
            | business unit                                              | BBVA Mexico                                                        | string       | App Started |
            | site app name                                              | App BBVA Mexico                                                    | string       | App Started |
            | project name                                               | DIY E2E Sales                                                      | string       | App Started |
            | device mobile                                              | si                                                                 | string       | App Started |
            | user userState                                             | logado                                                             | string       | App Started |
            | profile ID                                                 | profileID                                                          | regexp named | App Started |
            | user segment global                                        | 003001                                                             | string       | App Started |
            | user gender                                                | gender                                                             | regexp named | App Started |
            | user age                                                   | age                                                                | regexp named | App Started |
            | global application                                         | purchase investment                                                | string       | App Started |
            | application name                                           | invertir compra                                                    | string       | App Started |
            | application type                                           | contratacion                                                       | string       | App Started |
            | application step                                           | limitada                                                           | string       | App Started |
            | fulfillment model                                          | online                                                             | string       | App Started |
            | product primary category                                   | inversiones                                                        | string       | App Started |
            | product subtype                                            | fondos inversion                                                   | string       | App Started |
            | internal campaign                                          |                                                                    | empty array  | App Started |
            | optimization attributes                                    |                                                                    | empty array  | App Started |

    @ANA_EVENT_PST004
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: App Step 2 - Detalle de la Orden
        Given a user with the following criteria
            | criteria |
            | btrader  |
        And the user accesses to btrader
        And the analytics interceptor service is initiated
        When the user select an "apple" issuer and "purchases" a "limited" share
        Then the analytics events contains the following variables
            | item                                                       | value                                                            | type         | event      |
            | analytics                                                  | analytics/glomo_base                                             | json schema  | App Step 2 |
            | version DL                                                 | 20250414_5.0                                                     | string       | App Step 2 |
            | page name                                                  | app:privada:personas:contrato inversiones:compra:2 detalle orden | string       | App Step 2 |
            | level 1                                                    | contrato inversiones                                             | string       | App Step 2 |
            | level 2                                                    | compra                                                           | string       | App Step 2 |
            | level 3                                                    | 2 detalle orden                                                  | string       | App Step 2 |
            | language                                                   | ES                                                               | string       | App Step 2 |
            | page area                                                  | privada                                                          | string       | App Step 2 |
            | page intent                                                | transaccion                                                      | string       | App Step 2 |
            | channel                                                    | online                                                           | string       | App Step 2 |
            | page instance ID                                           | de                                                               | string       | App Step 2 |
            | page info version                                          | appVersion                                                       | regexp named | App Step 2 |
            | page segment                                               | personas                                                         | string       | App Step 2 |
            | sysEnv                                                     | app                                                              | string       | App Step 2 |
            | business unit                                              | BBVA Mexico                                                      | string       | App Step 2 |
            | site app name                                              | App BBVA Mexico                                                  | string       | App Step 2 |
            | project name                                               | DIY E2E Sales                                                    | string       | App Step 2 |
            | device mobile                                              | si                                                               | string       | App Step 2 |
            | user userState                                             | logado                                                           | string       | App Step 2 |
            | profile ID                                                 | profileID                                                        | regexp named | App Step 2 |
            | user segment global                                        | 003001                                                           | string       | App Step 2 |
            | user gender                                                | gender                                                           | regexp named | App Step 2 |
            | user age                                                   | age                                                              | regexp named | App Step 2 |
            | global application                                         | purchase investment                                              | string       | App Step 2 |
            | application name                                           | invertir compra                                                  | string       | App Step 2 |
            | application type                                           | contratacion                                                     | string       | App Step 2 |
            | application step                                           | 2 detalle orden                                                  | string       | App Step 2 |
            | fulfillment model                                          | online                                                           | string       | App Step 2 |
            | application typology                                       | limitada                                                         | string       | App Step 2 |
            | product primary category                                   | inversiones                                                      | string       | App Step 2 |
            | product subtype                                            | fondos inversion                                                 | string       | App Step 2 |
            | internal campaign                                          |                                                                  | empty array  | App Step 2 |
            | optimization attributes                                    |                                                                  | empty array  | App Step 2 |

    @ANA_EVENT_PST005
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: App Step 3 - Confirmacion
        Given a user with the following criteria
            | criteria |
            | btrader  |
        And the user accesses to btrader
        When the user select an "apple" issuer and "purchases" a "limited" share
        And the analytics interceptor service is initiated
        And the user tries to buy "1" titles at "2670" of "limited" shares and "finish"
        Then the analytics events contains the following variables
            | item                      | value                                                           | type         | event      |
            | analytics                 | analytics/glomo_base                                            | json schema  | App Step 3 |
            | version DL                | 20250414_5.0                                                    | string       | App Step 3 |
            | page name                 | app:privada:personas:contrato inversiones:compra:3 confirmacion | string       | App Step 3 |
            | level 1                   | contrato inversiones                                            | string       | App Step 3 |
            | level 2                   | compra                                                          | string       | App Step 3 |
            | level 3                   | 3 confirmacion                                                  | string       | App Step 3 |
            | language                  | ES                                                              | string       | App Step 3 |
            | page area                 | privada                                                         | string       | App Step 3 |
            | page intent               | transaccion                                                     | string       | App Step 3 |
            | channel                   | online                                                          | string       | App Step 3 |
            | page instance ID          | de                                                              | string       | App Step 3 |
            | page info version         | appVersion                                                      | regexp named | App Step 3 |
            | page segment              | personas                                                        | string       | App Step 3 |
            | sysEnv                    | app                                                             | string       | App Step 3 |
            | business unit             | BBVA Mexico                                                     | string       | App Step 3 |
            | site app name             | App BBVA Mexico                                                 | string       | App Step 3 |
            | project name              | DIY E2E Sales                                                   | string       | App Step 3 |
            | device mobile             | si                                                              | string       | App Step 3 |
            | user userState            | logado                                                          | string       | App Step 3 |
            | profile ID                | profileID                                                       | regexp named | App Step 3 |
            | user segment global       | 003001                                                          | string       | App Step 3 |
            | user gender               | gender                                                          | regexp named | App Step 3 |
            | user age                  | age                                                             | regexp named | App Step 3 |
            | global application        | purchase investment                                             | string       | App Step 3 |
            | application name          | invertir compra                                                 | string       | App Step 3 |
            | application type          | contratacion                                                    | string       | App Step 3 |
            | application step          | 3 confirmacion                                                  | string       | App Step 3 |
            | fulfillment model         | online                                                          | string       | App Step 3 |
            | application typology      | limitada                                                        | string       | App Step 3 |
            | product primary category  | inversiones                                                     | string       | App Step 3 |
            | product subtype           | fondos inversion                                                | string       | App Step 3 |
            | product amount            | 2677.12                                                         | number       | App Step 3 |
            | product currency          | MXN                                                             | string       | App Step 3 |
            | product quantity          | 1                                                               | number       | App Step 3 |
            | product service charge    | 6.14                                                            | number       | App Step 3 |
            | internal campaign         |                                                                 | empty array  | App Step 3 |
            | optimization attributes   |                                                                 | empty array  | App Step 3 |

    @ANA_EVENT_PST006
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: App Completed Contratado
        Given a user with the following criteria
            | criteria |
            | btrader  |
        And the user accesses to btrader
        When the user select an "apple" issuer and "purchases" a "limited" share
        And the analytics interceptor service is initiated
        And the user tries to buy "1" titles at "2670" of "limited" shares and "finish"
        Then the analytics events contains the following variables
            | item                         | value                                                           | type         | event         |
            | analytics                    | analytics/glomo_base                                            | json schema  | App Completed |
            | version DL                   | 20250414_5.0                                                    | string       | App Completed |
            | page name                    | app:privada:personas:contrato inversiones:compra:pagina exitosa | string       | App Completed |
            | level 1                      | contrato inversiones                                            | string       | App Completed |
            | level 2                      | compra                                                          | string       | App Completed |
            | level 3                      | pagina exitosa                                                  | string       | App Completed |
            | language                     | ES                                                              | string       | App Completed |
            | page area                    | privada                                                         | string       | App Completed |
            | page intent                  | transaccion                                                     | string       | App Completed |
            | channel                      | online                                                          | string       | App Completed |
            | page instance ID             | de                                                              | string       | App Completed |
            | page info version            | appVersion                                                      | regexp named | App Completed |
            | page segment                 | personas                                                        | string       | App Completed |
            | sysEnv                       | app                                                             | string       | App Completed |
            | business unit                | BBVA Mexico                                                     | string       | App Completed |
            | site app name                | App BBVA Mexico                                                 | string       | App Completed |
            | project name                 | DIY E2E Sales                                                   | string       | App Completed |
            | device mobile                | si                                                              | string       | App Completed |
            | user userState               | logado                                                          | string       | App Completed |
            | profile ID                   | profileID                                                       | regexp named | App Completed |
            | user segment global          | 003001                                                          | string       | App Completed |
            | user gender                  | gender                                                          | regexp named | App Completed |
            | user age                     | age                                                             | regexp named | App Completed |
            | global application           | purchase investment                                             | string       | App Completed |
            | application name             | invertir compra                                                 | string       | App Completed |
            | application type             | contratacion                                                    | string       | App Completed |
            | application step             | pagina exitosa                                                  | string       | App Completed |
            | fulfillment model            | online                                                          | string       | App Completed |
            | application typology         | limitada                                                        | string       | App Completed |
            | application state            | contratado                                                      | string       | App Completed |
            | application operation number | 9414543880                                                      | string       | App Completed |
            | product primary category     | inversiones                                                     | string       | App Completed |
            | product subtype              | fondos inversion                                                | string       | App Completed |
            | product amount               | 2677.12                                                         | number       | App Completed |
            | product currency             | MXN                                                             | string       | App Completed |
            | product quantity             | 1                                                               | number       | App Completed |
            | product service charge       | 7.12                                                            | number       | App Completed |
            | internal campaign            |                                                                 | empty array  | App Completed |
            | optimization attributes      |                                                                 | empty array  | App Completed |

    @ANA_EVENT_PST007
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: Huella Cambiar Vigencia
        Given a user with the following criteria
            | criteria |
            | btrader  |
        And the user accesses to btrader
        When the user select an "apple" issuer and "purchases" a "limited" share
        And the analytics interceptor service is initiated
        And the user changes date
        Then the analytics events contains the following variables
            | item                    | value                                                             | type             | event     |
            | analytics               | analytics/glomo_base                                              | json schema      | Page View |
            | version DL              | 20250414_5.0                                                      | string           | Page View |
            | page name               | app:privada:personas:contrato inversiones:compra:cambiar vigencia | string           | Page View |
            | level 1                 | contrato inversiones                                              | string           | Page View |
            | level 2                 | compra                                                            | string           | Page View |
            | level 3                 | cambiar vigencia                                                  | string           | Page View |
            | language                | ES                                                                | string           | Page View |
            | page area               | privada                                                           | string           | Page View |
            | page intent             | transaccion                                                       | string           | Page View |
            | channel                 | online                                                            | string           | Page View |
            | page instance ID        | de                                                                | string           | Page View |
            | page info version       | appVersion                                                        | regexp named     | Page View |
            | page segment            | personas                                                          | string           | Page View |
            | sysEnv                  | app                                                               | string           | Page View |
            | business unit           | BBVA Mexico                                                       | string           | Page View |
            | site app name           | App BBVA Mexico                                                   | string           | Page View |
            | project name            | DIY E2E Sales                                                     | string           | Page View |
            | device mobile           | si                                                                | string           | Page View |
            | user userState          | logado                                                            | string           | Page View |
            | profile ID              | profileID                                                         | regexp named     | Page View |
            | user segment global     | 003001                                                            | string           | Page View |
            | user gender             | gender                                                            | regexp named     | Page View |
            | user age                | age                                                               | regexp named     | Page View |
            | internal campaign       |                                                                   | empty array      | Page View |
            | optimization attributes |                                                                   | empty array      | Page View |
            | application             |                                                                   | empty str object | Page View |
            | products attributes     |                                                                   | empty array      | Page View |

    @ANA_EVENT_PST008
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: Huella - Comision
        Given a user with the following criteria
            | criteria |
            | btrader  |
        And the user accesses to btrader
        When the user select an "apple" issuer and "purchases" a "limited" share
        And the analytics interceptor service is initiated
        And the user observes the information to "commisions"
        Then the analytics events contains the following variables
            | item                    | value                                                     | type             | event     |
            | analytics               | analytics/glomo_base                                      | json schema      | Page View |
            | version DL              | 20250414_5.0                                              | string           | Page View |
            | page name               | app:privada:personas:contrato inversiones:compra:comision | string           | Page View |
            | level 1                 | contrato inversiones                                      | string           | Page View |
            | level 2                 | compra                                                    | string           | Page View |
            | level 3                 | comision                                                  | string           | Page View |
            | language                | ES                                                        | string           | Page View |
            | page area               | privada                                                   | string           | Page View |
            | page intent             | transaccion                                               | string           | Page View |
            | channel                 | online                                                    | string           | Page View |
            | page instance ID        | de                                                        | string           | Page View |
            | page info version       | appVersion                                                | regexp named     | Page View |
            | page segment            | personas                                                  | string           | Page View |
            | sysEnv                  | app                                                       | string           | Page View |
            | business unit           | BBVA Mexico                                               | string           | Page View |
            | site app name           | App BBVA Mexico                                           | string           | Page View |
            | project name            | DIY E2E Sales                                             | string           | Page View |
            | device mobile           | si                                                        | string           | Page View |
            | user userState          | logado                                                    | string           | Page View |
            | profile ID              | profileID                                                 | regexp named     | Page View |
            | user segment global     | 003001                                                    | string           | Page View |
            | user gender             | gender                                                    | regexp named     | Page View |
            | user age                | age                                                       | regexp named     | Page View |
            | internal campaign       |                                                           | empty array      | Page View |
            | optimization attributes |                                                           | empty array      | Page View |
            | application             |                                                           | empty str object | Page View |
            | products attributes     |                                                           | empty array      | Page View |

    @ANA_EVENT_PST009
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: App On Click Start CTA Desde Detalle Emisor
        Given a user with the following criteria
            | criteria |
            | btrader  |
        And the user accesses to btrader
        When the user accesses to swipe operatives
        And the analytics interceptor service is initiated
        And the user select "buy" option
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
            | global application                                         | purchase investment                                       | string       | App On Click Start | 1            |
            | application name                                           | invertir compra                                           | string       | App On Click Start | 1            |
            | application type                                           | contratacion                                              | string       | App On Click Start | 1            |
            | application step                                           | comprar titulos                                           | string       | App On Click Start | 1            |
            | fulfillment model                                          | online                                                    | string       | App On Click Start | 1            |
            | product primary category                                   | inversiones                                               | string       | App On Click Start | 1            |
            | product subtype                                            | fondos inversion                                          | string       | App On Click Start | 1            |
            | internal campaign                                          |                                                           | empty array  | App On Click Start | 1            |
            | optimization attributes                                    |                                                           | empty array  | App On Click Start | 1            |

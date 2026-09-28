@btraderAnalytics @btraderAnalyticsCancel
Feature: Analytics - Btrader Cancel

    @ANA_EVENT_SCO001
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: App On Click Start CTA Desde Detalle De la Orden
        Given a user with the following criteria
            | criteria |
            | btrader  |
        And the user accesses to btrader
        And the analytics interceptor service is initiated
        When the user cancel order and "observer the information about" cancellation
        Then the analytics events contains the following variables
            | item                     | value                                                         | type         | event              | event number |
            | analytics                | analytics/glomo_base                                          | json schema  | App On Click Start | 1            |
            | version DL               | 20250414_5.0                                                  | string       | App On Click Start | 1            |
            | page name                | app:privada:personas:contrato inversiones:detalle de la orden | string       | App On Click Start | 1            |
            | level 1                  | contrato inversiones                                          | string       | App On Click Start | 1            |
            | level 2                  | detalle de la orden                                           | string       | App On Click Start | 1            |
            | language                 | ES                                                            | string       | App On Click Start | 1            |
            | page area                | privada                                                       | string       | App On Click Start | 1            |
            | page intent              | informacion                                                   | string       | App On Click Start | 1            |
            | channel                  | online                                                        | string       | App On Click Start | 1            |
            | page instance ID         | de                                                            | string       | App On Click Start | 1            |
            | page info version        | appVersion                                                    | regexp named | App On Click Start | 1            |
            | page segment             | personas                                                      | string       | App On Click Start | 1            |
            | sysEnv                   | app                                                           | string       | App On Click Start | 1            |
            | business unit            | BBVA Mexico                                                   | string       | App On Click Start | 1            |
            | site app name            | App BBVA Mexico                                               | string       | App On Click Start | 1            |
            | project name             | DIY E2E Sales                                                 | string       | App On Click Start | 1            |
            | device mobile            | si                                                            | string       | App On Click Start | 1            |
            | user userState           | logado                                                        | string       | App On Click Start | 1            |
            | profile ID               | profileID                                                     | regexp named | App On Click Start | 1            |
            | user segment global      | 003001                                                        | string       | App On Click Start | 1            |
            | user gender              | gender                                                        | regexp named | App On Click Start | 1            |
            | user age                 | age                                                           | regexp named | App On Click Start | 1            |
            | global application       | cancel investment                                             | string       | App On Click Start | 1            |
            | application name         | invertir cancelar compra                                      | string       | App On Click Start | 1            |
            | application type         | operativa                                                     | string       | App On Click Start | 1            |
            | application step         | cancelar                                                      | string       | App On Click Start | 1            |
            | fulfillment model        | online                                                        | string       | App On Click Start | 1            |
            | product primary category | inversiones                                                   | string       | App On Click Start | 1            |
            | product subtype          | fondos inversion                                              | string       | App On Click Start | 1            |
            | internal campaign        |                                                               | empty array  | App On Click Start | 1            |
            | optimization attributes  |                                                               | empty array  | App On Click Start | 1            |

    @ANA_EVENT_SCO002
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: App Page Visit 1 - Orden de venta
        Given a user with the following criteria
            | criteria |
            | btrader  |
        And the user accesses to btrader
        And the analytics interceptor service is initiated
        When the user cancel order and "observer the information about" cancellation
        Then the analytics events contains the following variables
            | item                     | value                                                               | type         | event          | event number |
            | analytics                | analytics/glomo_base                                                | json schema  | App Page Visit | 1            |
            | version DL               | 20250414_5.0                                                        | string       | App Page Visit | 1            |
            | page name                | app:privada:personas:contrato inversiones:cancelar:1 orden de venta | string       | App Page Visit | 1            |
            | level 1                  | contrato inversiones                                                | string       | App Page Visit | 1            |
            | level 2                  | cancelar                                                            | string       | App Page Visit | 1            |
            | level 3                  | 1 orden de venta                                                    | string       | App Page Visit | 1            |
            | language                 | ES                                                                  | string       | App Page Visit | 1            |
            | page area                | privada                                                             | string       | App Page Visit | 1            |
            | page intent              | transaccion                                                         | string       | App Page Visit | 1            |
            | channel                  | online                                                              | string       | App Page Visit | 1            |
            | page instance ID         | de                                                                  | string       | App Page Visit | 1            |
            | page info version        | appVersion                                                          | regexp named | App Page Visit | 1            |
            | page segment             | personas                                                            | string       | App Page Visit | 1            |
            | sysEnv                   | app                                                                 | string       | App Page Visit | 1            |
            | business unit            | BBVA Mexico                                                         | string       | App Page Visit | 1            |
            | site app name            | App BBVA Mexico                                                     | string       | App Page Visit | 1            |
            | project name             | DIY E2E Sales                                                       | string       | App Page Visit | 1            |
            | device mobile            | si                                                                  | string       | App Page Visit | 1            |
            | user userState           | logado                                                              | string       | App Page Visit | 1            |
            | profile ID               | profileID                                                           | regexp named | App Page Visit | 1            |
            | user segment global      | 003001                                                              | string       | App Page Visit | 1            |
            | user gender              | gender                                                              | regexp named | App Page Visit | 1            |
            | user age                 | age                                                                 | regexp named | App Page Visit | 1            |
            | global application       | cancel investment                                                   | string       | App Page Visit | 1            |
            | application name         | invertir cancelar compra                                            | string       | App Page Visit | 1            |
            | application type         | operativa                                                           | string       | App Page Visit | 1            |
            | application step         | cancelar                                                            | string       | App Page Visit | 1            |
            | fulfillment model        | online                                                              | string       | App Page Visit | 1            |
            | product primary category | inversiones                                                         | string       | App Page Visit | 1            |
            | product subtype          | fondos inversion                                                    | string       | App Page Visit | 1            |
            | product quantity         | 1                                                                   | number       | App Page Visit | 1            |
            | internal campaign        |                                                                     | empty array  | App Page Visit | 1            |
            | optimization attributes  |                                                                     | empty array  | App Page Visit | 1            |

    @ANA_EVENT_SCO003
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario Outline: App Started Seleccion Tipo Orden <action>
        Given a user with the following criteria
            | criteria |
            | btrader  |
        And the user accesses to btrader
        When the user cancel order and "observer the information about" cancellation
        And the analytics interceptor service is initiated
        And the user "<action>" the cancel order
        Then the analytics events contains the following variables
            | item                     | value                                                               | type         | event       | event number |
            | analytics                | analytics/glomo_base                                                | json schema  | App Started | 1            |
            | version DL               | 20250414_5.0                                                        | string       | App Started | 1            |
            | page name                | app:privada:personas:contrato inversiones:cancelar:1 orden de venta | string       | App Started | 1            |
            | level 1                  | contrato inversiones                                                | string       | App Started | 1            |
            | level 2                  | cancelar                                                            | string       | App Started | 1            |
            | level 3                  | 1 orden de venta                                                    | string       | App Started | 1            |
            | language                 | ES                                                                  | string       | App Started | 1            |
            | page area                | privada                                                             | string       | App Started | 1            |
            | page intent              | transaccion                                                         | string       | App Started | 1            |
            | channel                  | online                                                              | string       | App Started | 1            |
            | page instance ID         | de                                                                  | string       | App Started | 1            |
            | page info version        | appVersion                                                          | regexp named | App Started | 1            |
            | page segment             | personas                                                            | string       | App Started | 1            |
            | sysEnv                   | app                                                                 | string       | App Started | 1            |
            | business unit            | BBVA Mexico                                                         | string       | App Started | 1            |
            | site app name            | App BBVA Mexico                                                     | string       | App Started | 1            |
            | project name             | DIY E2E Sales                                                       | string       | App Started | 1            |
            | device mobile            | si                                                                  | string       | App Started | 1            |
            | user userState           | logado                                                              | string       | App Started | 1            |
            | profile ID               | profileID                                                           | regexp named | App Started | 1            |
            | user segment global      | 003001                                                              | string       | App Started | 1            |
            | user gender              | gender                                                              | regexp named | App Started | 1            |
            | user age                 | age                                                                 | regexp named | App Started | 1            |
            | global application       | cancel investment                                                   | string       | App Started | 1            |
            | application name         | invertir cancelar compra                                            | string       | App Started | 1            |
            | application type         | operativa                                                           | string       | App Started | 1            |
            | application step         | <application step>                                                  | string       | App Started | 1            |
            | fulfillment model        | online                                                              | string       | App Started | 1            |
            | product primary category | inversiones                                                         | string       | App Started | 1            |
            | product subtype          | fondos inversion                                                    | string       | App Started | 1            |
            | product quantity         | 1                                                                   | number       | App Started | 1            |
            | internal campaign        |                                                                     | empty array  | App Started | 1            |
            | optimization attributes  |                                                                     | empty array  | App Started | 1            |
        Examples:
            | action     | application step |
            | cancel     | salir            |
            | exit modal | cerrar           |
            | confirm    | aceptar          |

    @ANA_EVENT_SCO004
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: App Completed Finalizado
        Given a user with the following criteria
            | criteria |
            | btrader  |
        And the user accesses to btrader
        And the analytics interceptor service is initiated
        When the user cancel order and "confirm" cancellation
        Then the analytics events contains the following variables
            | item                         | value                                                             | type         | event         | event number |
            | analytics                    | analytics/glomo_base                                              | json schema  | App Completed | 1            |
            | version DL                   | 20250414_5.0                                                      | string       | App Completed | 1            |
            | page name                    | app:privada:personas:contrato inversiones:cancelar:pagina exitosa | string       | App Completed | 1            |
            | level 1                      | contrato inversiones                                              | string       | App Completed | 1            |
            | level 2                      | cancelar                                                          | string       | App Completed | 1            |
            | level 3                      | pagina exitosa                                                    | string       | App Completed | 1            |
            | language                     | ES                                                                | string       | App Completed | 1            |
            | page area                    | privada                                                           | string       | App Completed | 1            |
            | page intent                  | transaccion                                                       | string       | App Completed | 1            |
            | channel                      | online                                                            | string       | App Completed | 1            |
            | page instance ID             | de                                                                | string       | App Completed | 1            |
            | page info version            | appVersion                                                        | regexp named | App Completed | 1            |
            | page segment                 | personas                                                          | string       | App Completed | 1            |
            | sysEnv                       | app                                                               | string       | App Completed | 1            |
            | business unit                | BBVA Mexico                                                       | string       | App Completed | 1            |
            | site app name                | App BBVA Mexico                                                   | string       | App Completed | 1            |
            | project name                 | DIY E2E Sales                                                     | string       | App Completed | 1            |
            | device mobile                | si                                                                | string       | App Completed | 1            |
            | user userState               | logado                                                            | string       | App Completed | 1            |
            | profile ID                   | profileID                                                         | regexp named | App Completed | 1            |
            | user segment global          | 003001                                                            | string       | App Completed | 1            |
            | user gender                  | gender                                                            | regexp named | App Completed | 1            |
            | user age                     | age                                                               | regexp named | App Completed | 1            |
            | global application           | cancel investment                                                 | string       | App Completed | 1            |
            | application name             | invertir cancelar compra                                          | string       | App Completed | 1            |
            | application type             | operativa                                                         | string       | App Completed | 1            |
            | application step             | pagina exitosa                                                    | string       | App Completed | 1            |
            | fulfillment model            | online                                                            | string       | App Completed | 1            |
            | application typology         | limitada                                                          | string       | App Completed | 1            |
            | application state            | finalizado                                                        | string       | App Completed | 1            |
            | application operation number | 5506978100                                                        | string       | App Completed | 1            |
            | product primary category     | inversiones                                                       | string       | App Completed | 1            |
            | product subtype              | fondos inversion                                                  | string       | App Completed | 1            |
            | product amount               | 2760                                                              | number       | App Completed | 1            |
            | product currency             | MXN                                                               | string       | App Completed | 1            |
            | product quantity             | 1                                                                 | number       | App Completed | 1            |
            | internal campaign            |                                                                   | empty array  | App Completed | 1            |
            | optimization attributes      |                                                                   | empty array  | App Completed | 1            |

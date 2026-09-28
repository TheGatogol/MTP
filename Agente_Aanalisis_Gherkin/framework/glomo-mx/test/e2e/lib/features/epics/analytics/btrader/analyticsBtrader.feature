@btraderAnalytics @btraderAnalyticsFeature
Feature: analytics - Btrader Product Detail

    @ANA_EVENT_TPD001
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: HUELLA - Detalle Producto
        Given a user with the following criteria
            | criteria |
            | btrader5  |
        When the user accesses to dashboard
        And the analytics interceptor service is initiated
        And the user accesses to btrader
        Then the analytics events contains the following variables
            | item                    | value                                             | type             | event     |
            | analytics               | analytics/glomo_base                              | json schema      | Page View |
            | version DL              | 20250414_5.0                                      | string           | Page View |
            | page name               | app:privada:personas:contrato inversiones:detalle | string           | Page View |
            | level 1                 | contrato inversiones                              | string           | Page View |
            | level 2                 | detalle                                           | string           | Page View |
            | language                | ES                                                | string           | Page View |
            | page area               | privada                                           | string           | Page View |
            | page intent             | informacion                                       | string           | Page View |
            | channel                 | online                                            | string           | Page View |
            | page instance ID        | de                                                | string           | Page View |
            | page info version       | appVersion                                        | regexp named     | Page View |
            | page segment            | personas                                          | string           | Page View |
            | sysEnv                  | app                                               | string           | Page View |
            | business unit           | BBVA Mexico                                       | string           | Page View |
            | site app name           | App BBVA Mexico                                   | string           | Page View |
            | project name            | DIY E2E Sales                                     | string           | Page View |
            | device mobile           | si                                                | string           | Page View |
            | user userState          | logado                                            | string           | Page View |
            | profile ID              | profileID                                         | regexp named     | Page View |
            | user segment global     | 003001                                            | string           | Page View |
            | user gender             | gender                                            | regexp named     | Page View |
            | user age                | age                                               | regexp named     | Page View |
            | internal campaign       |                                                   | empty array      | Page View |
            | optimization attributes |                                                   | empty array      | Page View |
            | application             |                                                   | empty str object | Page View |
            | products attributes     |                                                   | empty array      | Page View |

    @ANA_EVENT_TPD002
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: HUELLA - Detalle Emisora
        Given a user with the following criteria
            | criteria |
            | btrader  |
        When the user accesses to btrader
        And the analytics interceptor service is initiated
        And the user opens the "investment" detail
        Then the analytics events contains the following variables
            | item                    | value                                                     | type             | event     |
            | analytics               | analytics/glomo_base                                      | json schema      | Page View |
            | version DL              | 20250414_5.0                                              | string           | Page View |
            | page name               | app:privada:personas:contrato inversiones:detalle:emisora | string           | Page View |
            | level 1                 | contrato inversiones                                      | string           | Page View |
            | level 2                 | detalle                                                   | string           | Page View |
            | level 3                 | emisora                                                   | string           | Page View |
            | language                | ES                                                        | string           | Page View |
            | page area               | privada                                                   | string           | Page View |
            | page intent             | informacion                                               | string           | Page View |
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

    @ANA_EVENT_TPD003
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: HUELLA - Saldo Para Invertir
        Given a user with the following criteria
            | criteria |
            | btrader  |
        And the user accesses to btrader
        When the user opens the "investment" detail
        And the analytics interceptor service is initiated
        And the user opens the balance information to investment
        Then the analytics events contains the following variables
            | item                    | value                                                         | type             | event     |
            | analytics               | analytics/glomo_base                                          | json schema      | Page View |
            | version DL              | 20250414_5.0                                                  | string           | Page View |
            | page name               | app:privada:personas:contrato inversiones:saldo para invertir | string           | Page View |
            | level 1                 | contrato inversiones                                          | string           | Page View |
            | level 2                 | saldo para invertir                                           | string           | Page View |
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
            | project name            | DIY E2E Sales                                                 | string           | Page View |
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

    @ANA_EVENT_TPD004
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: HUELLA - Detalle Orden
        Given a user with the following criteria
            | criteria |
            | btrader  |
        When the user accesses to btrader
        And the analytics interceptor service is initiated
        And the user "accesses" to order list and "view" "orders"
        Then the analytics events contains the following variables
            | item                    | value                                                 | type             | event     |
            | analytics               | analytics/glomo_base                                  | json schema      | Page View |
            | version DL              | 20250414_5.0                                          | string           | Page View |
            | page name               | app:privada:personas:contrato inversiones:mis ordenes | string           | Page View |
            | level 1                 | contrato inversiones                                  | string           | Page View |
            | level 2                 | mis ordenes                                           | string           | Page View |
            | language                | ES                                                    | string           | Page View |
            | page area               | privada                                               | string           | Page View |
            | page intent             | informacion                                           | string           | Page View |
            | channel                 | online                                                | string           | Page View |
            | page instance ID        | de                                                    | string           | Page View |
            | page info version       | appVersion                                            | regexp named     | Page View |
            | page segment            | personas                                              | string           | Page View |
            | sysEnv                  | app                                                   | string           | Page View |
            | business unit           | BBVA Mexico                                           | string           | Page View |
            | site app name           | App BBVA Mexico                                       | string           | Page View |
            | project name            | DIY E2E Sales                                         | string           | Page View |
            | device mobile           | si                                                    | string           | Page View |
            | user userState          | logado                                                | string           | Page View |
            | profile ID              | profileID                                             | regexp named     | Page View |
            | user segment global     | 003001                                                | string           | Page View |
            | user gender             | gender                                                | regexp named     | Page View |
            | user age                | age                                                   | regexp named     | Page View |
            | internal campaign       |                                                       | empty array      | Page View |
            | optimization attributes |                                                       | empty array      | Page View |
            | application             |                                                       | empty str object | Page View |
            | products attributes     |                                                       | empty array      | Page View |

    @ANA_EVENT_TPD005
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: HUELLA - Detalle de la orden
        Given a user with the following criteria
            | criteria |
        And the user accesses to btrader
        When the user "accesses" to order list and "view" "orders"
        And the analytics interceptor service is initiated
        And the user select "a first order" detail
        Then the analytics events contains the following variables
            | item                    | value                                                         | type             | event     |
            | analytics               | analytics/glomo_base                                          | json schema      | Page View |
            | version DL              | 20250414_5.0                                                  | string           | Page View |
            | page name               | app:privada:personas:contrato inversiones:detalle de la orden | string           | Page View |
            | level 1                 | contrato inversiones                                          | string           | Page View |
            | level 2                 | detalle de la orden                                           | string           | Page View |
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
            | project name            | DIY E2E Sales                                                 | string           | Page View |
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

    @ANA_EVENT_TPD006
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: HUELLA - Edit alias
        Given a user with the following criteria
            | criteria |
            | btrader  |
        When the user accesses to btrader
        And the analytics interceptor service is initiated
        And the user accesses to btrader "edit alias"
        Then the analytics events contains the following variables
            | item                    | value                                                  | type             | event     | event number |
            | analytics               | analytics/glomo_base                                   | json schema      | Page View | 2            |
            | version DL              | 20250414_5.0                                           | string           | Page View | 2            |
            | page name               | app:privada:personas:contrato inversiones:editar alias | string           | Page View | 2            |
            | level 1                 | contrato inversiones                                   | string           | Page View | 2            |
            | level 2                 | editar alias                                           | string           | Page View | 2            |
            | language                | ES                                                     | string           | Page View | 2            |
            | page area               | privada                                                | string           | Page View | 2            |
            | page intent             | informacion                                            | string           | Page View | 2            |
            | channel                 | online                                                 | string           | Page View | 2            |
            | page instance ID        | de                                                     | string           | Page View | 2            |
            | page info version       | appVersion                                             | regexp named     | Page View | 2            |
            | page segment            | personas                                               | string           | Page View | 2            |
            | sysEnv                  | app                                                    | string           | Page View | 2            |
            | business unit           | BBVA Mexico                                            | string           | Page View | 2            |
            | site app name           | App BBVA Mexico                                        | string           | Page View | 2            |
            | project name            | DIY E2E Sales                                          | string           | Page View | 2            |
            | device mobile           | si                                                     | string           | Page View | 2            |
            | user userState          | logado                                                 | string           | Page View | 2            |
            | profile ID              | profileID                                              | regexp named     | Page View | 2            |
            | user segment global     | 003001                                                 | string           | Page View | 2            |
            | user gender             | gender                                                 | regexp named     | Page View | 2            |
            | user age                | age                                                    | regexp named     | Page View | 2            |
            | internal campaign       |                                                        | empty array      | Page View | 2            |
            | optimization attributes |                                                        | empty array      | Page View | 2            |
            | application             |                                                        | empty str object | Page View | 2            |
            | products attributes     |                                                        | empty array      | Page View | 2            |

    @ANA_EVENT_TPD007
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: HUELLA - Editar Alias Exitoso
        Given a user with the following criteria
            | criteria |
            | btrader  |
        When the user accesses to btrader "edit alias"
        And the analytics interceptor service is initiated
        And the user updates the current alias with the new alias "Juanito Banana"
        Then the analytics events contains the following variables
            | item                    | value                                                          | type             | event     |
            | analytics               | analytics/glomo_base                                           | json schema      | Page View |
            | version DL              | 20250414_5.0                                                   | string           | Page View |
            | page name               | app:privada:personas:contrato inversiones:editar alias exitoso | string           | Page View |
            | level 1                 | contrato inversiones                                           | string           | Page View |
            | level 2                 | editar alias exitoso                                           | string           | Page View |
            | language                | ES                                                             | string           | Page View |
            | page area               | privada                                                        | string           | Page View |
            | page intent             | informacion                                                    | string           | Page View |
            | channel                 | online                                                         | string           | Page View |
            | page instance ID        | de                                                             | string           | Page View |
            | page info version       | appVersion                                                     | regexp named     | Page View |
            | page segment            | personas                                                       | string           | Page View |
            | sysEnv                  | app                                                            | string           | Page View |
            | business unit           | BBVA Mexico                                                    | string           | Page View |
            | site app name           | App BBVA Mexico                                                | string           | Page View |
            | project name            | DIY E2E Sales                                                  | string           | Page View |
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

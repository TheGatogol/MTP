@boostInterbankTransfers
Feature: Analytics - Boost Interbank Transfers

    @ANA_EVENT_BIT001
    @analytics
    @ios @android @web @web-done
    @MX
    @backend(test) @vbank
    Scenario: Boost Interbank Transfers - App On Click Start
        Given a user with the following criteria
            | criteria                  |
            | inactive financial health |
        And the user accesses to dashboard
        And the user accesses to the first account product detail
        And the analytics interceptor service is initiated
        When the user accesses on message interbank transfers
        Then the analytics events contains the following variables:
            | item                     | value                                                      | type         | event |
            | analytics                | analytics/glomo_base                                       | json schema  | App On Click Start |
            | version DL               | 20250414_5.0                                               | string       | App On Click Start |
            | page name                | app:privada:personas:cuentas:detalle                       | string       | App On Click Start |
            | level 1                  | cuentas                                                    | string       | App On Click Start |
            | level 2                  | detalle                                                    | string       | App On Click Start |
            | language                 | ES                                                         | string       | App On Click Start |
            | page area                | privada                                                    | string       | App On Click Start |
            | page intent              | informacion                                                | string       | App On Click Start |
            | channel                  | online                                                     | string       | App On Click Start |
            | page instance ID         | de                                                         | string       | App On Click Start |
            | page info version        | appVersion                                                 | regexp named | App On Click Start |
            | page segment             | personas                                                   | string       | App On Click Start |
            | sysEnv                   | app                                                        | string       | App On Click Start |
            | business unit            | BBVA Mexico                                                | string       | App On Click Start |
            | site app name            | App BBVA Mexico                                            | string       | App On Click Start |
            | project name             | Glomo                                                      | string       | App On Click Start |
            | device mobile            | si                                                         | string       | App On Click Start |
            | user userState           | logado                                                     | string       | App On Click Start |
            | user segment global      | 003001                                                     | string       | App On Click Start |
            | profile ID               | profileID                                                  | regexp named | App On Click Start |
            | user gender              | gender                                                     | regexp named | App On Click Start |
            | user age                 | age                                                        | regexp named | App On Click Start |
            | global application       | international transfers                                    | string       | App On Click Start |
            | application name         | transferencias internacionales                             | string       | App On Click Start |
            | application type         | operativa                                                  | string       | App On Click Start |
            | application typology     | cuentas propias                                            | string       | App On Click Start |
            | application step         | detalle de cuenta                                          | string       | App On Click Start |
            | fulfillment model        | online                                                     | string       | App On Click Start |
            | product primary category | cuentas                                                    | string       | App On Click Start |
            | internal campaign        |                                                            | empty array  | App On Click Start |
            | optimization attributes  |                                                            | empty array  | App On Click Start |
            | qualified visits         |                                                            | empty array  | App On Click Start |

    @ANA_EVENT_BIT002
    @analytics
    @ios @android @web @web-done
    @MX
    @backend(test) @vbank
    Scenario: Boost Interbank Transfers - CV currency App On Click Start
        Given a user with the following criteria
            | criteria                  |
            | inactive financial health |
        And the user accesses to dashboard
        And the user accesses to the "usd" account product detail
        And the analytics interceptor service is initiated
        When the user accesses on message cv currency
        Then the analytics events contains the following variables:
            | item                     | value                                                      | type         | event |
            | analytics                | analytics/glomo_base                                       | json schema  | App On Click Start |
            | version DL               | 20250414_5.0                                               | string       | App On Click Start |
            | page name                | app:privada:personas:cuentas:detalle                       | string       | App On Click Start |
            | level 1                  | cuentas                                                    | string       | App On Click Start |
            | level 2                  | detalle                                                    | string       | App On Click Start |
            | language                 | ES                                                         | string       | App On Click Start |
            | page area                | privada                                                    | string       | App On Click Start |
            | page intent              | informacion                                                | string       | App On Click Start |
            | channel                  | online                                                     | string       | App On Click Start |
            | page instance ID         | de                                                         | string       | App On Click Start |
            | page info version        | appVersion                                                 | regexp named | App On Click Start |
            | page segment             | personas                                                   | string       | App On Click Start |
            | sysEnv                   | app                                                        | string       | App On Click Start |
            | business unit            | BBVA Mexico                                                | string       | App On Click Start |
            | site app name            | App BBVA Mexico                                            | string       | App On Click Start |
            | project name             | Glomo                                                      | string       | App On Click Start |
            | device mobile            | si                                                         | string       | App On Click Start |
            | user userState           | logado                                                     | string       | App On Click Start |
            | user segment global      | 003001                                                     | string       | App On Click Start |
            | profile ID               | profileID                                                  | regexp named | App On Click Start |
            | user gender              | gender                                                     | regexp named | App On Click Start |
            | user age                 | age                                                        | regexp named | App On Click Start |
            | global application       | transfers                                                  | string       | App On Click Start |
            | application name         | transferencias                                             | string       | App On Click Start |
            | application type         | operativa                                                  | string       | App On Click Start |
            | application step         | detalle de cuenta                                          | string       | App On Click Start |
            | fulfillment model        | online/offline                                             | string       | App On Click Start |
            | product primary category | cuentas                                                    | string       | App On Click Start |
            | internal campaign        |                                                            | empty array  | App On Click Start |
            | optimization attributes  |                                                            | empty array  | App On Click Start |
            | qualified visits         |                                                            | empty array  | App On Click Start |
            | application typology     |                                                            | empty array  | App On Click Start |

    @ANA_EVENT_BIT003
    @analytics
    @ios @android @web @web-done
    @MX
    @backend(test) @vbank
    Scenario: Boost Interbank Transfers Op Transfers - App On Click Start
        Given a user with the following criteria
            | criteria                  |
            |interbank transfer landing |
        And the user accesses the Login Screen
        And the user accesses to transfer from dashboard and selects a origin "pesos account"
        And the user selects a destinatary from "new recipient"
        And the user will transfer to an "save new contact boost interbank transfers" account by entering the destination number
        And the analytics interceptor service is initiated
        When the user accesses on link boost message interbank transfers
        Then the analytics events contains the following variables:
            | item                     | value                                | type         | event              |
            | analytics                | analytics/glomo_base                 | json schema  | App On Click Start |
            | version DL               | 20250414_5.0                         | string       | App On Click Start |
            | page name                | app:privada:personas:cuentas:detalle | string       | App On Click Start |
            | level 1                  | cuentas                              | string       | App On Click Start |
            | level 2                  | detalle                              | string       | App On Click Start |
            | language                 | ES                                   | string       | App On Click Start |
            | page area                | privada                              | string       | App On Click Start |
            | page intent              | informacion                          | string       | App On Click Start |
            | channel                  | online                               | string       | App On Click Start |
            | page instance ID         | de                                   | string       | App On Click Start |
            | page info version        | appVersion                           | regexp named | App On Click Start |
            | page segment             | personas                             | string       | App On Click Start |
            | sysEnv                   | app                                  | string       | App On Click Start |
            | business unit            | BBVA Mexico                          | string       | App On Click Start |
            | site app name            | App BBVA Mexico                      | string       | App On Click Start |
            | project name             | Glomo                                | string       | App On Click Start |
            | device mobile            | si                                   | string       | App On Click Start |
            | user userState           | logado                               | string       | App On Click Start |
            | user segment global      | 003001                               | string       | App On Click Start |
            | profile ID               | profileID                            | regexp named | App On Click Start |
            | user gender              | gender                               | regexp named | App On Click Start |
            | user age                 | age                                  | regexp named | App On Click Start |
            | global application       | international transfers              | string       | App On Click Start |
            | application name         | transferencias internacionales       | string       | App On Click Start |
            | application type         | operativa                            | string       | App On Click Start |
            | application step         | ir a transferencias internacionales  | string       | App On Click Start |
            | fulfillment model        | online                               | string       | App On Click Start |
            | product primary category | cuentas                              | string       | App On Click Start |
            | internal campaign        |                                      | empty array  | App On Click Start |
            | optimization attributes  |                                      | empty array  | App On Click Start |
            | qualified visits         |                                      | empty array  | App On Click Start |
            | application typology     | cuentas propias                      | string       | App On Click Start |

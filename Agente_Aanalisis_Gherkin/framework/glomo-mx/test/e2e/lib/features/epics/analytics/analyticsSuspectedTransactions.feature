@AnalyticsSuspectedTransactionsManagement
Feature: Analytics - Suspected Transactions Management

    @ANA_STM001
    @analytics
    @vbank
    @MX @android @ios
    @web
    @backend(test)
    @web-done
    Scenario Outline: Suspected Transactions - analytics event App Page View "<case>"
        Given a user with the following criteria
            | criteria        |
            | has suspected transaction |
            | user with notification    |
        And the user selects attempted "<case>" notification
        When the user opens attempted "<case>" notification
        Then the device contains the following variables
            | item                | value                                  | type         |
            | analytics           | analytics/glomo_base                   | json schema  |
            | version dl          | 20250414_5.0                           | string       |
            | page name           | app:privada:personas:compra sospechosa | string       |
            | level 1             | compra sospechosa                      | string       |
            | language            | ES                                     | string       |
            | page area           | privada                                | string       |
            | page intent         | informacion                            | string       |
            | channel             | online                                 | string       |
            | page instance ID    | de                                     | string       |
            | page info version   | appVersion                             | regexp named |
            | page segment        | personas                               | string       |
            | sysEnv              | app                                    | string       |
            | business unit       | BBVA Mexico                            | string       |
            | project name        | Glomo                                  | string       |
            | device mobile       | si                                     | string       |
            | user userState      | logado                                 | string       |
            | user segment global | 003001                                 | string       |
            | profile ID          | profileID                              | regexp named |
            | user age            | age                                    | regexp named |
            | user gender         | gender                                 | regexp named |
            | custom fields       | <custom_fields>                        | string       |

        Examples:
            | case                        | custom_fields                             |
            | purchase                    | fraude generado:compra con tarjeta fisica |
            | cardless withdrawal         | fraude generado:retiro sin tarjeta        |
            | service payment             | fraude generado:pago servicios            |
            | third parties transfer      | fraude generado:traspaso a terceros       |
            | atm withdrawal - bbva banks | fraude generado:retiro en atm             |

    @ANA_EVENT_STM002
    @analytics
    @vbank
    @MX @android @ios
    @web
    @backend(test)
    @web-done
    Scenario: The user confirms suspected transaction - Analytics Internal Link
        Given a user with the following criteria
            | criteria        |
            | has suspected transaction |
            | user with notification    |
        And the user accesses attempted "purchase" notification
        And the analytics interceptor service is initiated
        When the user confirms the movement
        Then the analytics events contains the following variables
            | item                | value                                     | type         | event         |
            | analytics           | analytics/glomo_base                      | json schema  | Internal Link |
            | version DL          | 20250414_5.0                              | string       | Internal Link |
            | page name           | app:privada:personas:compra sospechosa    | string       | Internal Link |
            | level 1             | compra sospechosa                         | string       | Internal Link |
            | language            | ES                                        | string       | Internal Link |
            | page area           | privada                                   | string       | Internal Link |
            | page intent         | informacion                               | string       | Internal Link |
            | channel             | online                                    | string       | Internal Link |
            | page instance ID    | de                                        | string       | Internal Link |
            | page info version   | appVersion                                | regexp named | Internal Link |
            | page segment        | personas                                  | string       | Internal Link |
            | sysEnv              | app                                       | string       | Internal Link |
            | business unit       | BBVA Mexico                               | string       | Internal Link |
            | site app name       | App BBVA Mexico                           | string       | Internal Link |
            | project name        | Glomo                                     | string       | Internal Link |
            | link name           | confirmar                                 | string       | Internal Link |
            | device mobile       | si                                        | string       | Internal Link |
            | user userState      | logado                                    | string       | Internal Link |
            | user segment global | 003001                                    | string       | Internal Link |
            | profile ID          | profileID                                 | regexp named | Internal Link |
            | user age            | age                                       | regexp named | Internal Link |
            | user gender         | gender                                    | regexp named | Internal Link |
            | custom fields       | fraude generado:compra con tarjeta fisica | string       | Internal Link |

    @ANA_EVENT_STM003
    @analytics
    @vbank
    @MX @android @ios
    @web
    @backend(test)
    @web-done
    Scenario: The user rejects suspected transaction - Analytics Internal Link
        Given a user with the following criteria
            | criteria        |
            | has suspected transaction |
            | user with notification    |
        And the user accesses attempted "purchase" notification
        And the analytics interceptor service is initiated
        When the user rejects the movement
        Then the analytics events contains the following variables
            | item                | value                                     | type         | event         |
            | analytics           | analytics/glomo_base                      | json schema  | Internal Link |
            | version DL          | 20250414_5.0                              | string       | Internal Link |
            | page name           | app:privada:personas:compra sospechosa    | string       | Internal Link |
            | level 1             | compra sospechosa                         | string       | Internal Link |
            | language            | ES                                        | string       | Internal Link |
            | page area           | privada                                   | string       | Internal Link |
            | page intent         | informacion                               | string       | Internal Link |
            | channel             | online                                    | string       | Internal Link |
            | page instance ID    | de                                        | string       | Internal Link |
            | page info version   | appVersion                                | regexp named | Internal Link |
            | page segment        | personas                                  | string       | Internal Link |
            | sysEnv              | app                                       | string       | Internal Link |
            | business unit       | BBVA Mexico                               | string       | Internal Link |
            | site app name       | App BBVA Mexico                           | string       | Internal Link |
            | project name        | Glomo                                     | string       | Internal Link |
            | link name           | rechazar                                  | string       | Internal Link |
            | device mobile       | si                                        | string       | Internal Link |
            | user userState      | logado                                    | string       | Internal Link |
            | user segment global | 003001                                    | string       | Internal Link |
            | profile ID          | profileID                                 | regexp named | Internal Link |
            | user age            | age                                       | regexp named | Internal Link |
            | user gender         | gender                                    | regexp named | Internal Link |
            | custom fields       | fraude generado:compra con tarjeta fisica | string       | Internal Link |

    @ANA_EVENT_STM004
    @analytics
    @vbank
    @MX @android @ios
    @web
    @backend(test)
    @web-done
    Scenario: The user confirms suspected transaction - Analytics Page View
        Given a user with the following criteria
            | criteria        |
            | has suspected transaction |
            | user with notification    |
        And the user accesses attempted "purchase" notification
        And the analytics interceptor service is initiated
        When the user confirms the movement
        Then the analytics events contains the following variables
            | item                | value                                                        | type         | event     |
            | analytics           | analytics/glomo_base                                         | json schema  | Page View |
            | version dl          | 20250414_5.0                                                 | string       | Page View |
            | page name           | app:privada:personas:compra sospechosa:movimiento confirmado | string       | Page View |
            | level 1             | compra sospechosa                                            | string       | Page View |
            | level 2             | movimiento confirmado                                        | string       | Page View |
            | language            | ES                                                           | string       | Page View |
            | page area           | privada                                                      | string       | Page View |
            | page intent         | informacion                                                  | string       | Page View |
            | channel             | online                                                       | string       | Page View |
            | page instance ID    | de                                                           | string       | Page View |
            | page info version   | appVersion                                                   | regexp named | Page View |
            | page segment        | personas                                                     | string       | Page View |
            | sysEnv              | app                                                          | string       | Page View |
            | business unit       | BBVA Mexico                                                  | string       | Page View |
            | project name        | Glomo                                                        | string       | Page View |
            | device mobile       | si                                                           | string       | Page View |
            | user userState      | logado                                                       | string       | Page View |
            | user segment global | 003001                                                       | string       | Page View |
            | profile ID          | profileID                                                    | regexp named | Page View |
            | user age            | age                                                          | regexp named | Page View |
            | user gender         | gender                                                       | regexp named | Page View |
            | custom fields       | fraude generado:compra con tarjeta fisica                    | string       | Page View |

    @ANA_EVENT_STM005
    @analytics
    @vbank
    @MX @android @ios
    @web
    @backend(test)
    @web-done
    Scenario: The user rejects suspected transaction - Analytics Page View
        Given a user with the following criteria
            | criteria        |
            | has suspected transaction |
            | user with notification    |
        And the user accesses attempted "purchase" notification
        And the analytics interceptor service is initiated
        When the user rejects the movement
        Then the analytics events contains the following variables
            | item                | value                                                       | type         | event     |
            | analytics           | analytics/glomo_base                                        | json schema  | Page View |
            | version dl          | 20250414_5.0                                                | string       | Page View |
            | page name           | app:privada:personas:compra sospechosa:movimiento rechazado | string       | Page View |
            | level 1             | compra sospechosa                                           | string       | Page View |
            | level 2             | movimiento rechazado                                        | string       | Page View |
            | language            | ES                                                          | string       | Page View |
            | page area           | privada                                                     | string       | Page View |
            | page intent         | informacion                                                 | string       | Page View |
            | channel             | online                                                      | string       | Page View |
            | page instance ID    | de                                                          | string       | Page View |
            | page info version   | appVersion                                                  | regexp named | Page View |
            | page segment        | personas                                                    | string       | Page View |
            | sysEnv              | app                                                         | string       | Page View |
            | business unit       | BBVA Mexico                                                 | string       | Page View |
            | project name        | Glomo                                                       | string       | Page View |
            | device mobile       | si                                                          | string       | Page View |
            | user userState      | logado                                                      | string       | Page View |
            | user segment global | 003001                                                      | string       | Page View |
            | profile ID          | profileID                                                   | regexp named | Page View |
            | user age            | age                                                         | regexp named | Page View |
            | user gender         | gender                                                      | regexp named | Page View |
            | custom fields       | fraude generado:compra con tarjeta fisica                   | string       | Page View |

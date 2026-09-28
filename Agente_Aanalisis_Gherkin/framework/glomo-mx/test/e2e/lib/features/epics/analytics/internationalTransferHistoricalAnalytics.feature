@internationalTransferHistoricalAnalytics
Feature: Analytics - International Transfer Historical

    @ANA_EVENT_ITH001
    @analytics
    @MX
    @android @ios @web
    @web-done
    @backend(test)
    @vbank
    Scenario: International Transfer Historical - Upgrade Account Alert - Page View
        Given a user with the following criteria
            | criteria                                   |
            | international transfers without n4 account |
        And the user accesses to operatives screen from "select operation"
        And the analytics interceptor service is initiated
        When the user accesses the "international transfers" operation
        Then the analytics events contains the following variables
            | item                    | value                                                                                  | type             | event     |
            | analytics               | analytics/glomo_base                                                                   | json schema      | Page View |
            | page name               | app:privada:personas:transferencias internacionales:historial:subir de nivel tu cuenta | string           | Page View |
            | level 1                 | transferencias internacionales                                                         | string           | Page View |
            | level 2                 | historial                                                                              | string           | Page View |
            | level 3                 | subir de nivel tu cuenta                                                               | string           | Page View |
            | language                | ES                                                                                     | string           | Page View |
            | page area               | privada                                                                                | string           | Page View |
            | page intent             | informacion                                                                            | string           | Page View |
            | channel                 | online                                                                                 | string           | Page View |
            | page instance ID        | de                                                                                     | string           | Page View |
            | version DL              | 20250414_5.0                                                                           | string           | Page View |
            | page info version       | appVersion                                                                             | regexp named     | Page View |
            | page segment            | personas                                                                               | string           | Page View |
            | sysEnv                  | app                                                                                    | string           | Page View |
            | business unit           | BBVA Mexico                                                                            | string           | Page View |
            | site app name           | App BBVA Mexico                                                                        | string           | Page View |
            | project name            | Glomo                                                                                  | string           | Page View |
            | device mobile           | si                                                                                     | string           | Page View |
            | user userState          | logado                                                                                 | string           | Page View |
            | user segment global     | 003001                                                                                 | string           | Page View |
            | profile ID              | profileID                                                                              | regexp named     | Page View |
            | user gender             | gender                                                                                 | regexp named     | Page View |
            | user age                | age                                                                                    | regexp named     | Page View |
            | internal campaign       |                                                                                        | empty array      | Page View |
            | optimization attributes |                                                                                        | empty array      | Page View |
            | application             |                                                                                        | empty str object | Page View |
            | products attributes     |                                                                                        | empty array      | Page View |

    @ANA_EVENT_ITH002
    @analytics
    @MX
    @android @ios @web
    @web-done
    @backend(test)
    @vbank
    Scenario Outline: International Transfer Historical - <entry_point> - <movement_type> - Page View
        Given a user with the following criteria
            | criteria                                    |
            | international transfers with one n4 account |
        And the user accesses to operatives screen from "<entry_point>"
        And the user accesses to international transfers panel screen
        And the analytics interceptor service is initiated
        When the user accesses to view movements "<movement_type>"
        Then the analytics events contains the following variables
            | item                    | value                                                                   | type             | event     |
            | analytics               | analytics/glomo_base                                                    | json schema      | Page View |
            | page name               | app:privada:personas:transferencias internacionales:historial:<level_3> | string           | Page View |
            | level 1                 | transferencias internacionales                                          | string           | Page View |
            | level 2                 | historial                                                               | string           | Page View |
            | level 3                 | <level_3>                                                               | string           | Page View |
            | language                | ES                                                                      | string           | Page View |
            | page area               | privada                                                                 | string           | Page View |
            | page intent             | informacion                                                             | string           | Page View |
            | channel                 | online                                                                  | string           | Page View |
            | page instance ID        | de                                                                      | string           | Page View |
            | version DL              | 20250414_5.0                                                            | string           | Page View |
            | page info version       | appVersion                                                              | regexp named     | Page View |
            | page segment            | personas                                                                | string           | Page View |
            | sysEnv                  | app                                                                     | string           | Page View |
            | business unit           | BBVA Mexico                                                             | string           | Page View |
            | site app name           | App BBVA Mexico                                                         | string           | Page View |
            | project name            | Glomo                                                                   | string           | Page View |
            | device mobile           | si                                                                      | string           | Page View |
            | user userState          | logado                                                                  | string           | Page View |
            | user segment global     | 003001                                                                  | string           | Page View |
            | profile ID              | profileID                                                               | regexp named     | Page View |
            | user gender             | gender                                                                  | regexp named     | Page View |
            | user age                | age                                                                     | regexp named     | Page View |
            | internal campaign       |                                                                         | empty array      | Page View |
            | optimization attributes |                                                                         | empty array      | Page View |
            | application             |                                                                         | empty str object | Page View |
            | products attributes     |                                                                         | empty array      | Page View |

        Examples:
            | entry_point      | movement_type | level_3   |
            | Select Operation | Sent          | enviadas  |
            | Select Operation | Received      | recibidas |
            | Account Detail   | Sent          | enviadas  |
            | Account Detail   | Received      | recibidas |

    @ANA_EVENT_ITH003
    @analytics
    @MX
    @android @ios @web
    @web-done
    @backend(test)
    @vbank
    Scenario: International Transfer Historical - Internal Link
        Given a user with the following criteria
            | criteria                                  |
            | international transfers many n4 accounts  |
        And the user accesses to operatives screen from "select operation"
        And the user accesses to international transfers panel screen
        And the analytics interceptor service is initiated
        When the user accesses to make an international transfer and has "many n4 account"
        And the user selects the first account
        Then the analytics events contains the following variables
            | item                    | value                                                       | type             | event         |
            | analytics               | analytics/glomo_base                                        | json schema      | Internal Link |
            | page name               | app:privada:personas:transferencias internacionales:cuentas | string           | Internal Link |
            | level 1                 | transferencias internacionales                              | string           | Internal Link |
            | level 2                 | cuentas                                                     | string           | Internal Link |
            | language                | ES                                                          | string           | Internal Link |
            | page area               | privada                                                     | string           | Internal Link |
            | page intent             | informacion                                                 | string           | Internal Link |
            | channel                 | online                                                      | string           | Internal Link |
            | page instance ID        | de                                                          | string           | Internal Link |
            | version DL              | 20250414_5.0                                                | string           | Internal Link |
            | page info version       | appVersion                                                  | regexp named     | Internal Link |
            | page segment            | personas                                                    | string           | Internal Link |
            | sysEnv                  | app                                                         | string           | Internal Link |
            | business unit           | BBVA Mexico                                                 | string           | Internal Link |
            | site app name           | App BBVA Mexico                                             | string           | Internal Link |
            | project name            | Glomo                                                       | string           | Internal Link |
            | link name               | seleccion cuenta                                            | string           | Internal Link |
            | device mobile           | si                                                          | string           | Internal Link |
            | user userState          | logado                                                      | string           | Internal Link |
            | user segment global     | 003001                                                      | string           | Internal Link |
            | user age                | age                                                         | regexp named     | Internal Link |
            | user gender             | gender                                                      | regexp named     | Internal Link |
            | user state              | lettersAndSpaceOrEmpty                                      | regexp named     | Internal Link |
            | profile ID              | profileID                                                   | regexp named     | Internal Link |
            | internal campaign       |                                                             | empty array      | Internal Link |
            | optimization attributes |                                                             | empty array      | Internal Link |
            | application             |                                                             | empty str object | Internal Link |
            | products attributes     |                                                             | empty array      | Internal Link |

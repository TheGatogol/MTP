@AnalyticsSuspectedTransactionDirectDebit
Feature: Analytics Suspected Transactions Direct Debit

    @ANA_EVENT_STD001
    @analytics
    @vbank
    @MX @web @android @ios
    @backend(test)
    @web-done
    Scenario: Validate Domiciliation button close no reply - analytics event Page View
        Given a user with the following criteria
            | criteria                   |
            | user suspected transaction |
        And the user accesses attempted "confirm" notification
        And the analytics interceptor service is initiated
        When the user confirm "exit" half modal page
        Then the analytics events contains the following variables
            | item                    | value                                                            | type             | event     |
            | analytics               | analytics/glomo_base                                             | json schema      | Page View |
            | version DL              | 20250414_5.0                                                     | string           | Page View |
            | page name               | app:privada:personas:confirma o rechazar:cargo domiciliado:salir | string           | Page View |
            | level 1                 | confirma o rechazar                                              | string           | Page View |
            | level 2                 | cargo domiciliado                                                | string           | Page View |
            | level 3                 | salir                                                            | string           | Page View |
            | language                | ES                                                               | string           | Page View |
            | page area               | privada                                                          | string           | Page View |
            | page intent             | informacion                                                      | string           | Page View |
            | channel                 | online                                                           | string           | Page View |
            | page instance ID        | de                                                               | string           | Page View |
            | page info version       | appVersion                                                       | regexp named     | Page View |
            | page segment            | personas                                                         | string           | Page View |
            | sysEnv                  | app                                                              | string           | Page View |
            | business unit           | BBVA Mexico                                                      | string           | Page View |
            | site app name           | App BBVA Mexico                                                  | string           | Page View |
            | project name            | Glomo                                                            | string           | Page View |
            | device mobile           | si                                                               | string           | Page View |
            | user userState          | logado                                                           | string           | Page View |
            | user segment global     | 003001                                                           | string           | Page View |
            | profile ID              | profileID                                                        | regexp named     | Page View |
            | user gender             | gender                                                           | regexp named     | Page View |
            | user age                | age                                                              | regexp named     | Page View |
            | internal campaign       |                                                                  | empty array      | Page View |
            | optimization attributes |                                                                  | empty array      | Page View |
            | application             |                                                                  | empty str object | Page View |
            | products attributes     |                                                                  | empty array      | Page View |

    @ANA_EVENT_STD002
    @analytics
    @vbank
    @MX @web @android @ios
    @backend(test)
    @web-done
    Scenario: Validate Domiciliation button close / continue exit the transaction - analytics Internal Link
        Given a user with the following criteria
            | criteria                   |
            | user suspected transaction |
        And the user accesses attempted "confirm" notification
        And the analytics interceptor service is initiated
        When the user confirm "exit" half modal page
        Then the analytics events contains the following variables
            | item                    | value                                                            | type             | event         |
            | analytics               | analytics/glomo_base                                             | json schema      | Internal Link |
            | version DL              | 20250414_5.0                                                     | string           | Internal Link |
            | page name               | app:privada:personas:confirma o rechazar:cargo domiciliado:salir | string           | Internal Link |
            | level 1                 | confirma o rechazar                                              | string           | Internal Link |
            | level 2                 | cargo domiciliado                                                | string           | Internal Link |
            | level 3                 | salir                                                            | string           | Internal Link |
            | language                | ES                                                               | string           | Internal Link |
            | page area               | privada                                                          | string           | Internal Link |
            | page intent             | informacion                                                      | string           | Internal Link |
            | channel                 | online                                                           | string           | Internal Link |
            | page instance ID        | de                                                               | string           | Internal Link |
            | page info version       | appVersion                                                       | regexp named     | Internal Link |
            | page segment            | personas                                                         | string           | Internal Link |
            | sysEnv                  | app                                                              | string           | Internal Link |
            | business unit           | BBVA Mexico                                                      | string           | Internal Link |
            | site app name           | App BBVA Mexico                                                  | string           | Internal Link |
            | project name            | Glomo                                                            | string           | Internal Link |
            | device mobile           | si                                                               | string           | Internal Link |
            | user userState          | logado                                                           | string           | Internal Link |
            | user segment global     | 003001                                                           | string           | Internal Link |
            | profile ID              | profileID                                                        | regexp named     | Internal Link |
            | user gender             | gender                                                           | regexp named     | Internal Link |
            | user age                | age                                                              | regexp named     | Internal Link |
            | link name               | salir                                                            | string           | Internal Link |
            | internal campaign       |                                                                  | empty array      | Internal Link |
            | optimization attributes |                                                                  | empty array      | Internal Link |
            | application             |                                                                  | empty str object | Internal Link |
            | products attributes     |                                                                  | empty array      | Internal Link |

    @ANA_EVENT_STD003
    @analytics
    @vbank
    @MX @web @android @ios
    @backend(test)
    @web-done
    Scenario: Confirm notification detail screen - analytics event Page View
        Given a user with the following criteria
            | criteria                   |
            | user suspected transaction |
        And the user accesses attempted "confirm" notification
        And the analytics interceptor service is initiated
        When the user "confirms" subscription the movement
        Then the analytics events contains the following variables
            | item                    | value                                                                                     | type             | event     |
            | analytics               | analytics/glomo_base                                                                      | json schema      | Page View |
            | version DL              | 20250414_5.0                                                                              | string           | Page View |
            | page name               | app:privada:personas:confirma o rechazar:cargo domiciliado:solicitud respondida:compartir | string           | Page View |
            | level 1                 | confirma o rechazar                                                                       | string           | Page View |
            | level 2                 | cargo domiciliado                                                                         | string           | Page View |
            | level 3                 | solicitud respondida                                                                      | string           | Page View |
            | level 4                 | compartir                                                                                 | string           | Page View |
            | language                | ES                                                                                        | string           | Page View |
            | page area               | privada                                                                                   | string           | Page View |
            | page intent             | informacion                                                                               | string           | Page View |
            | channel                 | online                                                                                    | string           | Page View |
            | page instance ID        | de                                                                                        | string           | Page View |
            | page info version       | appVersion                                                                                | regexp named     | Page View |
            | page segment            | personas                                                                                  | string           | Page View |
            | sysEnv                  | app                                                                                       | string           | Page View |
            | business unit           | BBVA Mexico                                                                               | string           | Page View |
            | site app name           | App BBVA Mexico                                                                           | string           | Page View |
            | project name            | Glomo                                                                                     | string           | Page View |
            | device mobile           | si                                                                                        | string           | Page View |
            | user userState          | logado                                                                                    | string           | Page View |
            | user segment global     | 003001                                                                                    | string           | Page View |
            | profile ID              | profileID                                                                                 | regexp named     | Page View |
            | user gender             | gender                                                                                    | regexp named     | Page View |
            | user age                | age                                                                                       | regexp named     | Page View |
            | internal campaign       |                                                                                           | empty array      | Page View |
            | optimization attributes |                                                                                           | empty array      | Page View |
            | application             |                                                                                           | empty str object | Page View |
            | products attributes     |                                                                                           | empty array      | Page View |

    @ANA_EVENT_STD004
    @analytics
    @vbank
    @MX @web @android @ios
    @backend(test)
    @web-done
    Scenario: Cancel Error detail screen - analytics event Page View
        Given a user with the following criteria
            | criteria                   |
            | user suspected transaction |
        And the user accesses attempted "confirm" notification
        And the analytics interceptor service is initiated
        When the user "confirms" subscription the movement
        Then the analytics events contains the following variables
            | item                    | value                                                                                   | type             | event     |
            | analytics               | analytics/glomo_base                                                                    | json schema      | Page View |
            | version DL              | 20250414_5.0                                                                            | string           | Page View |
            | page name               | app:privada:personas:confirma o rechazar:cargo domiciliado:error operacion no realizada | string           | Page View |
            | level 1                 | confirma o rechazar                                                                     | string           | Page View |
            | level 2                 | cargo domiciliado                                                                       | string           | Page View |
            | level 3                 | error operacion no realizada                                                            | string           | Page View |
            | error page              | error operacion no realizada                                                            | string           | Page View |
            | language                | ES                                                                                      | string           | Page View |
            | page area               | privada                                                                                 | string           | Page View |
            | page intent             | informacion                                                                             | string           | Page View |
            | channel                 | online                                                                                  | string           | Page View |
            | page instance ID        | de                                                                                      | string           | Page View |
            | page info version       | appVersion                                                                              | regexp named     | Page View |
            | page segment            | personas                                                                                | string           | Page View |
            | sysEnv                  | app                                                                                     | string           | Page View |
            | business unit           | BBVA Mexico                                                                             | string           | Page View |
            | site app name           | App BBVA Mexico                                                                         | string           | Page View |
            | project name            | Glomo                                                                                   | string           | Page View |
            | device mobile           | si                                                                                      | string           | Page View |
            | user userState          | logado                                                                                  | string           | Page View |
            | user segment global     | 003001                                                                                  | string           | Page View |
            | profile ID              | profileID                                                                               | regexp named     | Page View |
            | user gender             | gender                                                                                  | regexp named     | Page View |
            | user age                | age                                                                                     | regexp named     | Page View |
            | internal campaign       |                                                                                         | empty array      | Page View |
            | optimization attributes |                                                                                         | empty array      | Page View |
            | application             |                                                                                         | empty str object | Page View |
            | products attributes     |                                                                                         | empty array      | Page View |

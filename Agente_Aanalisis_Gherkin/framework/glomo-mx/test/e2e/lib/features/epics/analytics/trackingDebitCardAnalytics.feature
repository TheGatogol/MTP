@trackingDebitCardAnalytics
Feature: Analytics TrackingDebitCard

    @ANA_EVENT_TDC001
    @analytics
    @MX
    @vbank
    @backend(test)
    @web-done
    @web @android @ios
    Scenario Outline: See debit card tracking <status>
        Given a user with the following criteria
            | criteria                    |
            | debit card pending delivery |
            | <status>                    |
        And the user accesses to the "pending delivery virtual tdd" "debit" card product detail
        And the user accesses the entry point consult and confirm with "<status>"
        And the analytics interceptor service is initiated
        When the sms key "12345678" is entered
        Then the analytics events contains the following variables:
            | item                    | value                                                            | type             | event     |
            | analytics               | analytics/glomo_base                                             | json schema      | Page View |
            | page name               | app:privada:personas:tarjetas:rastreo tarjeta de debito:<level3> | string           | Page View |
            | level 1                 | tarjetas                                                         | string           | Page View |
            | level 2                 | rastreo tarjeta de debito                                        | string           | Page View |
            | level 3                 | <level3>                                                         | string           | Page View |
            | error page              | <errorPage>                                                      | string           | Page View |
            | language                | ES                                                               | string           | Page View |
            | page area               | privada                                                          | string           | Page View |
            | page intent             | informacion                                                      | string           | Page View |
            | channel                 | online                                                           | string           | Page View |
            | page instance ID        | de                                                               | string           | Page View |
            | version DL              | 20250414_5.0                                                     | string           | Page View |
            | page info version       | appVersion                                                       | regexp named     | Page View |
            | page segment            | personas                                                         | string           | Page View |
            | sysEnv                  | app                                                              | string           | Page View |
            | business unit           | BBVA Mexico                                                      | string           | Page View |
            | site app name           | App BBVA Mexico                                                  | string           | Page View |
            | project name            | Glomo                                                            | string           | Page View |
            | device mobile           | si                                                               | string           | Page View |
            | user userState          | logado                                                           | string           | Page View |
            | profile ID              | profileID                                                        | regexp named     | Page View |
            | user segment global     | 003001                                                           | string           | Page View |
            | internal campaign       |                                                                  | empty array      | Page View |
            | optimization attributes |                                                                  | empty array      | Page View |
            | application             |                                                                  | empty str object | Page View |
            | products attributes     |                                                                  | empty array      | Page View |
        Examples:
            | status               | level3                    | errorPage            |
            | request received     | en proceso de fabricacion |                      |
            | generation process   | fabricacion finalizada    |                      |
            | distribution process | en camino                 |                      |
            | delivered            | entregada                 |                      |
            | delivery expired     | error envio detenido      | error envio detenido |

    @ANA_EVENT_TDC002
    @analytics
    @MX
    @vbank
    @backend(test)
    @web-done
    @web @android @ios
    Scenario: See error detail when delivery expired status
        Given a user with the following criteria
            | criteria                    |
            | debit card pending delivery |
            | delivery expired            |
        And the user accesses to the "pending delivery virtual tdd" "debit" card product detail
        And the user accesses the entry point consult and confirm with "delivery expired"
        And the analytics interceptor service is initiated
        And the sms key "12345678" is entered
        When the user accesses details in delivery expired step
        Then the analytics events contains the following variables:
            | item                    | value                                                                        | type             | event     |
            | analytics               | analytics/glomo_base                                                         | json schema      | Page View |
            | page name               | app:privada:personas:tarjetas:rastreo tarjeta de debito:error envio detenido | string           | Page View |
            | level 1                 | tarjetas                                                                     | string           | Page View |
            | level 2                 | rastreo tarjeta de debito                                                    | string           | Page View |
            | level 3                 | error envio detenido                                                         | string           | Page View |
            | error page              | error envio detenido                                                         | string           | Page View |
            | language                | ES                                                                           | string           | Page View |
            | page area               | privada                                                                      | string           | Page View |
            | page intent             | informacion                                                                  | string           | Page View |
            | channel                 | online                                                                       | string           | Page View |
            | page instance ID        | de                                                                           | string           | Page View |
            | version DL              | 20250414_5.0                                                                 | string           | Page View |
            | page info version       | appVersion                                                                   | regexp named     | Page View |
            | page segment            | personas                                                                     | string           | Page View |
            | sysEnv                  | app                                                                          | string           | Page View |
            | business unit           | BBVA Mexico                                                                  | string           | Page View |
            | site app name           | App BBVA Mexico                                                              | string           | Page View |
            | project name            | Glomo                                                                        | string           | Page View |
            | device mobile           | si                                                                           | string           | Page View |
            | user userState          | logado                                                                       | string           | Page View |
            | profile ID              | profileID                                                                    | regexp named     | Page View |
            | user segment global     | 003001                                                                       | string           | Page View |
            | internal campaign       |                                                                              | empty array      | Page View |
            | optimization attributes |                                                                              | empty array      | Page View |
            | application             |                                                                              | empty str object | Page View |
            | products attributes     |                                                                              | empty array      | Page View |

    @ANA_EVENT_TDC003
    @analytics
    @MX
    @vbank
    @backend(test)
    @web-done
    @web @android @ios
    Scenario: The user cannot see the tracking of his card
        Given a user with the following criteria
            | criteria                    |
            | debit card pending delivery |
            | request received            |
        And the user accesses to the "pending delivery virtual tdd" "debit" card product detail
        And the user accesses the entry point consult and confirm with "delivered"
        And the analytics interceptor service is initiated
        When the sms key "12345678" is entered
        Then the analytics events contains the following variables:
            | item                    | value                                                                                   | type             | event     |
            | analytics               | analytics/glomo_base                                                                    | json schema      | Page View |
            | page name               | app:privada:personas:tarjetas:rastreo tarjeta de debito:error informacion no disponible | string           | Page View |
            | level 1                 | tarjetas                                                                                | string           | Page View |
            | level 2                 | rastreo tarjeta de debito                                                               | string           | Page View |
            | error page              | error informacion no disponible                                                         | string           | Page View |
            | language                | ES                                                                                      | string           | Page View |
            | page area               | privada                                                                                 | string           | Page View |
            | page intent             | informacion                                                                             | string           | Page View |
            | channel                 | online                                                                                  | string           | Page View |
            | page instance ID        | de                                                                                      | string           | Page View |
            | version DL              | 20250414_5.0                                                                            | string           | Page View |
            | page info version       | appVersion                                                                              | regexp named     | Page View |
            | page segment            | personas                                                                                | string           | Page View |
            | sysEnv                  | app                                                                                     | string           | Page View |
            | business unit           | BBVA Mexico                                                                             | string           | Page View |
            | site app name           | App BBVA Mexico                                                                         | string           | Page View |
            | project name            | Glomo                                                                                   | string           | Page View |
            | device mobile           | si                                                                                      | string           | Page View |
            | user userState          | logado                                                                                  | string           | Page View |
            | profile ID              | profileID                                                                               | regexp named     | Page View |
            | user segment global     | 003001                                                                                  | string           | Page View |
            | internal campaign       |                                                                                         | empty array      | Page View |
            | optimization attributes |                                                                                         | empty array      | Page View |
            | application             |                                                                                         | empty str object | Page View |
            | products attributes     |                                                                                         | empty array      | Page View |

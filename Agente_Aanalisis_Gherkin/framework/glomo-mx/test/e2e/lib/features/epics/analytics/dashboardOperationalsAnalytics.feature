@dashboardOperationalsAnalytics
Feature: Analytics - Dashboard Operationals

    @ANA_DOP001 @vbank
    @analytics
    @MX @web @android @ios
    @backend(test)
    @web-done
    Scenario: Dashboard Operationals - Transfer APP ONCLICK START from operations section
        Given a user with the following criteria
            | criteria |
            | accounts |
        When the user accesses to dashboard
        And the analytics interceptor service is initiated
        And the user accesses the "transfer" operation
        Then the analytics events contains the following variables
            | item                     | value                                | type         | event              |
            | analytics                | analytics/glomo_base                 | json schema  | App On Click Start |
            | page name                | app:privada:personas:posicion global | string       | App On Click Start |
            | level 1                  | posicion global                      | string       | App On Click Start |
            | language                 | ES                                   | string       | App On Click Start |
            | page area                | privada                              | string       | App On Click Start |
            | page intent              | informacion                          | string       | App On Click Start |
            | channel                  | online                               | string       | App On Click Start |
            | page instance ID         | de                                   | string       | App On Click Start |
            | version DL               | 20250414_5.0                         | string       | App On Click Start |
            | page info version        | appVersion                           | regexp named | App On Click Start |
            | page segment             | personas                             | string       | App On Click Start |
            | sysEnv                   | app                                  | string       | App On Click Start |
            | business unit            | BBVA Mexico                          | string       | App On Click Start |
            | site app name            | App BBVA Mexico                      | string       | App On Click Start |
            | project name             | Glomo                                | string       | App On Click Start |
            | device mobile            | si                                   | string       | App On Click Start |
            | user userState           | logado                               | string       | App On Click Start |
            | user segment global      | 003001                               | string       | App On Click Start |
            | user age                 | age                                  | regexp named | App On Click Start |
            | user gender              | gender                               | regexp named | App On Click Start |
            | user state               | lettersAndSpaceOrEmpty               | regexp named | App On Click Start |
            | profile ID               | profileID                            | regexp named | App On Click Start |
            | global application       | transfers                            | string       | App On Click Start |
            | application name         | transferencias                       | string       | App On Click Start |
            | application type         | operativa                            | string       | App On Click Start |
            | application step         | posicion global                      | string       | App On Click Start |
            | fulfillment model        | online                               | string       | App On Click Start |
            | product primary category | cuentas                              | string       | App On Click Start |
            | internal campaign        |                                      | empty array  | App On Click Start |
            | optimization attributes  |                                      | empty array  | App On Click Start |

    @ANA_DOP002 @vbank
    @analytics
    @MX @web @android @ios
    @backend(test)
    @web-done
    Scenario: Dashboard Operationals - Opportunities header INTERNAL LINK
        Given a user with the following criteria
            | criteria |
            | accounts |
        When the user accesses to dashboard
        And the analytics interceptor service is initiated
        And the user accesses the "opportunities" operation
        Then the analytics events contains the following variables
            | item                    | value                                | type             | event         |
            | analytics               | analytics/glomo_base                 | json schema      | Internal Link |
            | page name               | app:privada:personas:posicion global | string           | Internal Link |
            | level 1                 | posicion global                      | string           | Internal Link |
            | language                | ES                                   | string           | Internal Link |
            | page area               | privada                              | string           | Internal Link |
            | page intent             | informacion                          | string           | Internal Link |
            | channel                 | online                               | string           | Internal Link |
            | page instance ID        | de                                   | string           | Internal Link |
            | version DL              | 20250414_5.0                         | string           | Internal Link |
            | page info version       | appVersion                           | regexp named     | Internal Link |
            | page segment            | personas                             | string           | Internal Link |
            | sysEnv                  | app                                  | string           | Internal Link |
            | business unit           | BBVA Mexico                          | string           | Internal Link |
            | site app name           | App BBVA Mexico                      | string           | Internal Link |
            | project name            | Glomo                                | string           | Internal Link |
            | link name               | oportunidades header                 | string           | Internal Link |
            | device mobile           | si                                   | string           | Internal Link |
            | user userState          | logado                               | string           | Internal Link |
            | user segment global     | 003001                               | string           | Internal Link |
            | user age                | age                                  | regexp named     | Internal Link |
            | user gender             | gender                               | regexp named     | Internal Link |
            | user state              | lettersAndSpaceOrEmpty               | regexp named     | Internal Link |
            | profile ID              | profileID                            | regexp named     | Internal Link |
            | internal campaign       |                                      | empty array      | Internal Link |
            | optimization attributes |                                      | empty array      | Internal Link |
            | application             |                                      | empty str object | Internal Link |
            | products attributes     |                                      | empty array      | Internal Link |

    @ANA_DOP003 @vbank
    @analytics
    @MX @web @android @ios
    @backend(test)
    @web-done
    Scenario: Dashboard Operationals - Cardless withdrawal APP ONCLICK START from operations section
        Given a user with the following criteria
            | criteria |
            | accounts |
        When the user accesses to dashboard
        And the analytics interceptor service is initiated
        And the user accesses the "cardless withdrawal" operation
        Then the analytics events contains the following variables
            | item                     | value                                | type         | event              |
            | analytics                | analytics/glomo_base                 | json schema  | App On Click Start |
            | page name                | app:privada:personas:posicion global | string       | App On Click Start |
            | level 1                  | posicion global                      | string       | App On Click Start |
            | language                 | ES                                   | string       | App On Click Start |
            | page area                | privada                              | string       | App On Click Start |
            | page intent              | informacion                          | string       | App On Click Start |
            | channel                  | online                               | string       | App On Click Start |
            | page instance ID         | de                                   | string       | App On Click Start |
            | version DL               | 20250414_5.0                         | string       | App On Click Start |
            | page info version        | appVersion                           | regexp named | App On Click Start |
            | page segment             | personas                             | string       | App On Click Start |
            | sysEnv                   | app                                  | string       | App On Click Start |
            | business unit            | BBVA Mexico                          | string       | App On Click Start |
            | site app name            | App BBVA Mexico                      | string       | App On Click Start |
            | project name             | Glomo                                | string       | App On Click Start |
            | device mobile            | si                                   | string       | App On Click Start |
            | user userState           | logado                               | string       | App On Click Start |
            | user segment global      | 003001                               | string       | App On Click Start |
            | user age                 | age                                  | regexp named | App On Click Start |
            | user gender              | gender                               | regexp named | App On Click Start |
            | user state               | lettersAndSpaceOrEmpty               | regexp named | App On Click Start |
            | profile ID               | profileID                            | regexp named | App On Click Start |
            | global application       | cardless withdrawal                  | string       | App On Click Start |
            | application name         | retiro sin tarjeta                   | string       | App On Click Start |
            | application type         | operativa                            | string       | App On Click Start |
            | application step         | posicion global                      | string       | App On Click Start |
            | fulfillment model        | online                               | string       | App On Click Start |
            | product primary category | cuentas                              | string       | App On Click Start |
            | internal campaign        |                                      | empty array  | App On Click Start |
            | optimization attributes  |                                      | empty array  | App On Click Start |

    @ANA_DOP004 @vbank
    @analytics
    @MX @web @android @ios
    @backend(test)
    @web-done @vbank-modified
    Scenario: Dashboard Operationals - Mobile top up INTERNAL LINK
        Given a user with the following criteria
            | criteria |
            | accounts |
        When the user accesses to operationals page
        And the analytics interceptor service is initiated
        And the user accesses the "mobile top up" operation
        Then the analytics events contains the following variables
            | item                    | value                                | type             | event         |
            | analytics               | analytics/glomo_base                 | json schema      | Internal Link |
            | page name               | app:privada:personas:posicion global | string           | Internal Link |
            | level 1                 | posicion global                      | string           | Internal Link |
            | language                | ES                                   | string           | Internal Link |
            | page area               | privada                              | string           | Internal Link |
            | page intent             | informacion                          | string           | Internal Link |
            | channel                 | online                               | string           | Internal Link |
            | page instance ID        | de                                   | string           | Internal Link |
            | version DL              | 20250414_5.0                         | string           | Internal Link |
            | page info version       | appVersion                           | regexp named     | Internal Link |
            | page segment            | personas                             | string           | Internal Link |
            | sysEnv                  | app                                  | string           | Internal Link |
            | business unit           | BBVA Mexico                          | string           | Internal Link |
            | site app name           | App BBVA Mexico                      | string           | Internal Link |
            | project name            | Glomo                                | string           | Internal Link |
            | link name               | recargas y paquetes                  | string           | Internal Link |
            | device mobile           | si                                   | string           | Internal Link |
            | user userState          | logado                               | string           | Internal Link |
            | user segment global     | 003001                               | string           | Internal Link |
            | user age                | age                                  | regexp named     | Internal Link |
            | user gender             | gender                               | regexp named     | Internal Link |
            | user state              | lettersAndSpaceOrEmpty               | regexp named     | Internal Link |
            | profile ID              | profileID                            | regexp named     | Internal Link |
            | internal campaign       |                                      | empty array      | Internal Link |
            | optimization attributes |                                      | empty array      | Internal Link |
            | application             |                                      | empty str object | Internal Link |
            | products attributes     |                                      | empty array      | Internal Link |

    @ANA_DOP005 @vbank
    @analytics
    @MX @web @android @ios
    @backend(test)
    @web-done
    Scenario: Dashboard Operationals - Oportunidades footer INTERNAL LINK
        Given a user with the following criteria
            | criteria |
            | accounts |
        When the user accesses to dashboard
        And the analytics interceptor service is initiated
        And the user goes to Opportunities dashboard
        Then the analytics events contains the following variables
            | item                    | value                                | type             | event         |
            | analytics               | analytics/glomo_base                 | json schema      | Internal Link |
            | page name               | app:privada:personas:posicion global | string           | Internal Link |
            | level 1                 | posicion global                      | string           | Internal Link |
            | language                | ES                                   | string           | Internal Link |
            | page area               | privada                              | string           | Internal Link |
            | page intent             | informacion                          | string           | Internal Link |
            | channel                 | online                               | string           | Internal Link |
            | page instance ID        | de                                   | string           | Internal Link |
            | version DL              | 20250414_5.0                         | string           | Internal Link |
            | page info version       | appVersion                           | regexp named     | Internal Link |
            | page segment            | personas                             | string           | Internal Link |
            | sysEnv                  | app                                  | string           | Internal Link |
            | business unit           | BBVA Mexico                          | string           | Internal Link |
            | site app name           | App BBVA Mexico                      | string           | Internal Link |
            | project name            | Glomo                                | string           | Internal Link |
            | link name               | oportunidades footer                 | string           | Internal Link |
            | device mobile           | si                                   | string           | Internal Link |
            | user userState          | logado                               | string           | Internal Link |
            | user segment global     | 003001                               | string           | Internal Link |
            | user age                | age                                  | regexp named     | Internal Link |
            | user gender             | gender                               | regexp named     | Internal Link |
            | user state              | lettersAndSpaceOrEmpty               | regexp named     | Internal Link |
            | profile ID              | profileID                            | regexp named     | Internal Link |
            | internal campaign       |                                      | empty array      | Internal Link |
            | optimization attributes |                                      | empty array      | Internal Link |
            | application             |                                      | empty str object | Internal Link |
            | products attributes     |                                      | empty array      | Internal Link |

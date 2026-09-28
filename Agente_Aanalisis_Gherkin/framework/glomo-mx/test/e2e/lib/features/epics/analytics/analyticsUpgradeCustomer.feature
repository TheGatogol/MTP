@upgradeCustomerAnalytics
Feature: Analytics - Upgrade Customer

    @ANA_EVENT_UCO001
    @analytics
    @MX
    @web
    @vbank @android @ios
    @backend(test)
    @web-done
    Scenario: Confirm data processing - Page View
        Given a user with the following criteria
            | criteria                  |
            | account n2 with documents |
        And the user accesses to the first account product detail
        And the analytics interceptor service is initiated
        When the user accesses to upgrade customer from "operatives"
        Then the analytics events contains the following variables
            | item                    | value                                                                     | type         | event     |
            | analytics               | analytics/glomo_base                                                      | json schema  | Page View |
            | version DL              | 20250414_5.0                                                              | string       | Page View |
            | page name               | app:privada:personas:cuenta:ampliar cuenta:confirmar tratamiento de datos | string       | Page View |
            | level 1                 | cuenta                                                                    | string       | Page View |
            | level 2                 | ampliar cuenta                                                            | string       | Page View |
            | level 3                 | confirmar tratamiento de datos                                            | string       | Page View |
            | language                | ES                                                                        | string       | Page View |
            | page area               | privada                                                                   | string       | Page View |
            | page intent             | informacion                                                               | string       | Page View |
            | channel                 | online                                                                    | string       | Page View |
            | page instance ID        | de                                                                        | string       | Page View |
            | page info version       | appVersion                                                                | regexp named | Page View |
            | page segment            | personas                                                                  | string       | Page View |
            | sysEnv                  | app                                                                       | string       | Page View |
            | business unit           | BBVA Mexico                                                               | string       | Page View |
            | site app name           | App BBVA Mexico                                                           | string       | Page View |
            | project name            | Glomo                                                                     | string       | Page View |
            | device mobile           | si                                                                        | string       | Page View |
            | user userState          | logado                                                                    | string       | Page View |
            | user segment global     | 003001                                                                    | string       | Page View |
            | profile ID              | profileID                                                                 | regexp named | Page View |
            | user gender             | gender                                                                    | regexp named | Page View |
            | user age                | age                                                                       | regexp named | Page View |
            | custom fields           | segmento usuario:proactivos no nominados, modulos completados:00          | string       | Page View |
            | internal campaign       |                                                                           | empty array  | Page View |
            | optimization attributes |                                                                           | empty array  | Page View |
            | products attributes     |                                                                           | empty array  | Page View |

    @ANA_EVENT_UCO002
    @analytics
    @MX
    @web
    @vbank @android @ios
    @backend(test)
    @web-done
    Scenario Outline: <case> - Internal Link
        Given a user with the following criteria
            | criteria                  |
            | account n2 with documents |
        And the user accesses to the first account product detail
        And the user accesses to upgrade customer from "operatives"
        And the analytics interceptor service is initiated
        When the user enters the "<case>" modal
        Then the analytics events contains the following variables
           | item                    | value                                                                     | type         | event         |
           | analytics               | analytics/glomo_base                                                      | json schema  | Internal Link |
           | version DL              | 20250414_5.0                                                              | string       | Internal Link |
           | page name               | app:privada:personas:cuenta:ampliar cuenta:confirmar tratamiento de datos | string       | Internal Link |
           | level 1                 | cuenta                                                                    | string       | Internal Link |
           | level 2                 | ampliar cuenta                                                            | string       | Internal Link |
           | level 3                 | confirmar tratamiento de datos                                            | string       | Internal Link |
           | language                | ES                                                                        | string       | Internal Link |
           | page area               | privada                                                                   | string       | Internal Link |
           | page intent             | informacion                                                               | string       | Internal Link |
           | channel                 | online                                                                    | string       | Internal Link |
           | page instance ID        | de                                                                        | string       | Internal Link |
           | page info version       | appVersion                                                                | regexp named | Internal Link |
           | page segment            | personas                                                                  | string       | Internal Link |
           | sysEnv                  | app                                                                       | string       | Internal Link |
           | business unit           | BBVA Mexico                                                               | string       | Internal Link |
           | site app name           | App BBVA Mexico                                                           | string       | Internal Link |
           | project name            | Glomo                                                                     | string       | Internal Link |
           | device mobile           | si                                                                        | string       | Internal Link |
           | user userState          | logado                                                                    | string       | Internal Link |
           | user segment global     | 003001                                                                    | string       | Internal Link |
           | profile ID              | profileID                                                                 | regexp named | Internal Link |
           | user gender             | gender                                                                    | regexp named | Internal Link |
           | user age                | age                                                                       | regexp named | Internal Link |
           | custom fields           | segmento usuario:proactivos no nominados, modulos completados:00          | string       | Internal Link |
           | link name               | <link_name>                                                               | string       | Internal Link |
           | internal campaign       |                                                                           | empty array  | Internal Link |
           | optimization attributes |                                                                           | empty array  | Internal Link |
           | products attributes     |                                                                           | empty array  | Internal Link |

        Examples:
            | case              | link_name           |
            | Privacy           | aviso de privacidad |
            | Sworn Declaration | declaracion jurada  |

    @ANA_EVENT_UCO003
    @analytics
    @MX
    @web
    @vbank @android @ios
    @backend(test)
    @web-done
    Scenario: Go to a branch - Page View
        Given a user with the following criteria
            | criteria                  |
            | account n2 with documents |
        And the user accesses to the first account product detail
        And the user accesses to upgrade customer from "operatives" with "kyc completed"
        And the user gives consent to the "processing of documents" and the "account upgrade"
        And the analytics interceptor service is initiated
        When the user accepts the modal
        Then the analytics events contains the following variables
           | item                    | value                                                            | type         | event     |
           | analytics               | analytics/glomo_base                                             | json schema  | Page View |
           | version DL              | 20250414_5.0                                                     | string       | Page View |
           | page name               | app:privada:personas:cuenta:ampliar cuenta:acude a una sucursal  | string       | Page View |
           | level 1                 | cuenta                                                           | string       | Page View |
           | level 2                 | ampliar cuenta                                                   | string       | Page View |
           | level 3                 | acude a una sucursal                                             | string       | Page View |
           | language                | ES                                                               | string       | Page View |
           | page area               | privada                                                          | string       | Page View |
           | page intent             | informacion                                                      | string       | Page View |
           | channel                 | online                                                           | string       | Page View |
           | page instance ID        | de                                                               | string       | Page View |
           | page info version       | appVersion                                                       | regexp named | Page View |
           | page segment            | personas                                                         | string       | Page View |
           | sysEnv                  | app                                                              | string       | Page View |
           | business unit           | BBVA Mexico                                                      | string       | Page View |
           | site app name           | App BBVA Mexico                                                  | string       | Page View |
           | project name            | Glomo                                                            | string       | Page View |
           | device mobile           | si                                                               | string       | Page View |
           | user userState          | logado                                                           | string       | Page View |
           | user segment global     | 003001                                                           | string       | Page View |
           | profile ID              | profileID                                                        | regexp named | Page View |
           | user gender             | gender                                                           | regexp named | Page View |
           | user age                | age                                                              | regexp named | Page View |
           | custom fields           | segmento usuario:proactivos no nominados, modulos completados:00 | string       | Page View |
           | internal campaign       |                                                                  | empty array  | Page View |
           | optimization attributes |                                                                  | empty array  | Page View |
           | products attributes     |                                                                  | empty array  | Page View |

    @ANA_EVENT_UCO004
    @analytics
    @MX
    @web
    @vbank @android @ios
    @backend(test)
    @web-done
    Scenario: Information successfully updated - Page View
        Given a user with the following criteria
            | criteria                  |
            | account n2 with documents |
        And the user accesses to the first account product detail
        And the user accesses to upgrade customer from "operatives"
        And the user accesses to proceedings from "upgrade customer"
        And the analytics interceptor service is initiated
        When the user taps on the "confirm proceedings" option in proceedings
        Then the analytics events contains the following variables
           | item                    | value                                                                        | type         | event     | event number |
           | analytics               | analytics/glomo_base                                                         | json schema  | Page View | 2            |
           | version DL              | 20250414_5.0                                                                 | string       | Page View | 2            |
           | page name               | app:privada:personas:cuenta:ampliar cuenta:informacion actualizada con exito | string       | Page View | 2            |
           | level 1                 | cuenta                                                                       | string       | Page View | 2            |
           | level 2                 | ampliar cuenta                                                               | string       | Page View | 2            |
           | level 3                 | informacion actualizada con exito                                            | string       | Page View | 2            |
           | language                | ES                                                                           | string       | Page View | 2            |
           | page area               | privada                                                                      | string       | Page View | 2            |
           | page intent             | informacion                                                                  | string       | Page View | 2            |
           | channel                 | online                                                                       | string       | Page View | 2            |
           | page instance ID        | de                                                                           | string       | Page View | 2            |
           | page info version       | appVersion                                                                   | regexp named | Page View | 2            |
           | page segment            | personas                                                                     | string       | Page View | 2            |
           | sysEnv                  | app                                                                          | string       | Page View | 2            |
           | business unit           | BBVA Mexico                                                                  | string       | Page View | 2            |
           | site app name           | App BBVA Mexico                                                              | string       | Page View | 2            |
           | project name            | Glomo                                                                        | string       | Page View | 2            |
           | device mobile           | si                                                                           | string       | Page View | 2            |
           | user userState          | logado                                                                       | string       | Page View | 2            |
           | user segment global     | 003001                                                                       | string       | Page View | 2            |
           | profile ID              | profileID                                                                    | regexp named | Page View | 2            |
           | user gender             | gender                                                                       | regexp named | Page View | 2            |
           | user age                | age                                                                          | regexp named | Page View | 2            |
           | custom fields           | segmento usuario:proactivos no nominados, modulos completados:01;02;03       | string       | Page View | 2            |
           | internal campaign       |                                                                              | empty array  | Page View | 2            |
           | optimization attributes |                                                                              | empty array  | Page View | 2            |
           | products attributes     |                                                                              | empty array  | Page View | 2            |

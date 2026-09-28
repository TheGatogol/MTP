@insurancesAnalytics
Feature: Analytics - Insurances

    @ANA_IN001
    @analytics
    @ios @android @web
    @backend(test) @MX
    @vbank @web-done @glomo
    Scenario: Page view - Product Detail - insurances
        Given a user with the following criteria
            | criteria                      |
            | has active insurance          |
        When the user accesses the "active" insurance product detail
        Then the device contains the following variables
            | item                      | value                                                     | type             |
            | analytics                 | analytics/glomo_base                                      | json schema      |
            | version DL                | 20250414_5.0                                              | string           |
            | page name                 | app:privada:personas:seguros:detalle                      | string           |
            | level 1                   | seguros                                                   | string           |
            | level 2                   | detalle                                                   | string           |
            | language                  | ES                                                        | string           |
            | page area                 | privada                                                   | string           |
            | page intent               | informacion                                               | string           |
            | channel                   | online                                                    | string           |
            | page instance ID          | de                                                        | string           |
            | page info version         | appVersion                                                | regexp named     |
            | page segment              | personas                                                  | string           |
            | sysEnv                    | app                                                       | string           |
            | business unit             | BBVA Mexico                                               | string           |
            | site app name             | App BBVA Mexico                                           | string           |
            | project name              | Glomo                                                     | string           |
            | device mobile             | si                                                        | string           |
            | user userState            | logado                                                    | string           |
            | user segment global       | 003001                                                    | string           |
            | profile ID                | profileID                                                 | regexp named     |
            | user gender               | gender                                                    | regexp named     |
            | internal campaign         |                                                           | empty array      |
            | optimization attributes   |                                                           | empty array      |
            | application               |                                                           | empty str object |
            | products attributes		|                                                           | empty array      |

    @ANA_IN002
    @analytics
    @ios @android @web
    @backend(test) @MX
    @vbank @web-done @glomo
    Scenario: Page view - More Info - insurances
        Given a user with the following criteria
            | criteria                      |
            | has active insurance          |
        And the user accesses the "active" insurance product detail
        When the user accesses to the "active" insurance product detail more info
        Then the device contains the following variables
            | item                      | value                                                             | type             |
            | analytics                 | analytics/glomo_base                                              | json schema      |
            | version DL                | 20250414_5.0                                                      | string           |
            | page name                 | app:privada:personas:seguros:detalle:mas informacion              | string           |
            | level 1                   | seguros                                                           | string           |
            | level 2                   | detalle                                                           | string           |
            | level 3                   | mas informacion                                                   | string           |
            | language                  | ES                                                                | string           |
            | page area                 | privada                                                           | string           |
            | page intent               | informacion                                                       | string           |
            | channel                   | online                                                            | string           |
            | page instance ID          | de                                                                | string           |
            | page info version         | appVersion                                                        | regexp named     |
            | page segment              | personas                                                          | string           |
            | sysEnv                    | app                                                               | string           |
            | business unit             | BBVA Mexico                                                       | string           |
            | site app name             | App BBVA Mexico                                                   | string           |
            | project name              | Glomo                                                             | string           |
            | device mobile             | si                                                                | string           |
            | user userState            | logado                                                            | string           |
            | user segment global       | 003001                                                            | string           |
            | profile ID                | profileID                                                         | regexp named     |
            | user gender               | gender                                                            | regexp named     |
            | internal campaign         |                                                                   | empty array      |
            | optimization attributes   |                                                                   | empty array      |
            | application               |                                                                   | empty str object |
            | products attributes		|                                                                   | empty array      |

    @ANA_IN003
    @analytics
    @ios @android @web
    @backend(test) @MX @glomo
    @vbank @web-done
    Scenario: The user enters the insurance product detail and selects view policy
        Given a user with the following criteria
            | criteria                      |
            | has insurance policy          |
        And the user accesses the "active" insurance product detail
        And the analytics interceptor service is initiated
        When the user download the policy from "product detail"
        Then the analytics events contains the following variables
            | item                      | value                                           | type             | event         |
            | analytics                 | analytics/glomo_base                            | json schema      | Internal Link |
            | version DL                | 20250414_5.0                                    | string           | Internal Link |
            | page name                 | app:privada:personas:seguros:detalle            | string           | Internal Link |
            | level 1                   | seguros                                         | string           | Internal Link |
            | level 2                   | detalle                                         | string           | Internal Link |
            | link name                 | ver poliza                                      | string           | Internal Link |
            | language                  | ES                                              | string           | Internal Link |
            | page area                 | privada                                         | string           | Internal Link |
            | page intent               | informacion                                     | string           | Internal Link |
            | channel                   | online                                          | string           | Internal Link |
            | page instance ID          | de                                              | string           | Internal Link |
            | page info version         | appVersion                                      | regexp named     | Internal Link |
            | page segment              | personas                                        | string           | Internal Link |
            | sysEnv                    | app                                             | string           | Internal Link |
            | business unit             | BBVA Mexico                                     | string           | Internal Link |
            | site app name             | App BBVA Mexico                                 | string           | Internal Link |
            | project name              | Glomo                                           | string           | Internal Link |
            | device mobile             | si                                              | string           | Internal Link |
            | user userState            | logado                                          | string           | Internal Link |

    @ANA_IN004 @JIRA.GLOMOGL-20657 @manual
    @analytics
    @ios @android @web
    @backend(test) @MX
    @!vbank @web-done
    Scenario: The user consults his insurance policy from product detail
        Given a user with the following criteria
            | criteria                      |
            | has insurance policy          |
        And the analytics interceptor service is initiated
        And the user accesses the "active" insurance product detail
        When the user download the policy from "product detail"
        Then the analytics events contains the following variables
            | item                      | value                                                     | type             | event     |
            | analytics                 | analytics/glomo_base                                      | json schema      | Page View |
            | version DL                | 20250414_5.0                                              | string           | Page View |
            | page name                 | app:privada:personas:seguros:detalle:otp                  | string           | Page View |
            | level 1                   | seguros                                                   | string           | Page View |
            | level 2                   | detalle                                                   | string           | Page View |
            | level 3                   | otp                                                       | string           | Page View |
            | custom fields             | firma:token                                               | string           | Page View |
            | language                  | ES                                                        | string           | Page View |
            | page area                 | privada                                                   | string           | Page View |
            | page intent               | informacion                                               | string           | Page View |
            | channel                   | online                                                    | string           | Page View |
            | page instance ID          | de                                                        | string           | Page View |
            | page info version         | appVersion                                                | regexp named     | Page View |
            | page segment              | personas                                                  | string           | Page View |
            | sysEnv                    | app                                                       | string           | Page View |
            | business unit             | BBVA Mexico                                               | string           | Page View |
            | site app name             | App BBVA Mexico                                           | string           | Page View |
            | project name              | Glomo                                                     | string           | Page View |
            | device mobile             | si                                                        | string           | Page View |
            | user userState            | logado                                                    | string           | Page View |

    @ANA_IN005 @JIRA.GLOMOGL-20657 @manual
    @analytics
    @ios @android @web
    @backend(test) @MX
    @!vbank @web-done
    Scenario: The user consults his insurance policy from more info
        Given a user with the following criteria
            | criteria                      |
            | has insurance policy          |
        And the analytics interceptor service is initiated
        And the user accesses to the "active" insurance product detail more info
        When the user consults his insurance policy from "more info"
        Then the analytics events contains the following variables
            | item                      | value                                                     | type             | event     |
            | analytics                 | analytics/glomo_base                                      | json schema      | Page View |
            | version DL                | 20250414_5.0                                              | string           | Page View |
            | page name                 | app:privada:personas:seguros:detalle:otp                  | string           | Page View |
            | level 1                   | seguros                                                   | string           | Page View |
            | level 2                   | detalle                                                   | string           | Page View |
            | level 3                   | otp                                                       | string           | Page View |
            | custom fields             | firma:token                                               | string           | Page View |
            | language                  | ES                                                        | string           | Page View |
            | page area                 | privada                                                   | string           | Page View |
            | page intent               | informacion                                               | string           | Page View |
            | channel                   | online                                                    | string           | Page View |
            | page instance ID          | de                                                        | string           | Page View |
            | page info version         | appVersion                                                | regexp named     | Page View |
            | page segment              | personas                                                  | string           | Page View |
            | sysEnv                    | app                                                       | string           | Page View |
            | business unit             | BBVA Mexico                                               | string           | Page View |
            | site app name             | App BBVA Mexico                                           | string           | Page View |
            | project name              | Glomo                                                     | string           | Page View |
            | device mobile             | si                                                        | string           | Page View |
            | user userState            | logado                                                    | string           | Page View |

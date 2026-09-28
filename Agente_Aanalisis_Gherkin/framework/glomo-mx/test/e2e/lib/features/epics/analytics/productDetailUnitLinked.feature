@unitLinkedAnalytics
Feature: Unit Linked Analytics

    @ANA_ULD001
    @analytics
    @vbank
    @MX @android @ios @web
    @backend(test)
    @web-done
    Scenario: UnitLinked - Access to a portfolio
        Given a user with the following criteria
            | criteria           |
            | unit linked        |
        When the user accesses to unit linked
        Then the device contains the following variables:
            | item                       | value                                                    | type             |
            | analytics                  | analytics/glomo_base                                     | json schema      |
            | version DL                 | 20250414_5.0                                             | string           |
            | page name                  | app:privada:personas:polizas:detalle                     | string           |
            | level 1                    | polizas                                                  | string           |
            | level 2                    | detalle                                                  | string           |
            | language                   | ES                                                       | string           |
            | page area                  | privada                                                  | string           |
            | page intent                | informacion                                              | string           |
            | channel                    | online                                                   | string           |
            | page instance ID           | de                                                       | string           |
            | page segment               | personas                                                 | string           |
            | sysEnv                     | app                                                      | string           |
            | business unit              | BBVA Mexico                                              | string           |
            | site app name              | App BBVA Mexico                                          | string           |
            | project name               | Glomo                                                    | string           |
            | device mobile              | si                                                       | string           |
            | user userState             | logado                                                   | string           |
            | user segment global        | 003001                                                   | string           |
            | profile ID                 | profileID                                                | regexp named     |
            | user gender                | gender                                                   | regexp named     |
            | internal campaign          |                                                          | empty array      |
            | optimization attributes    |                                                          | empty array      |
            | application                |                                                          | empty str object |
            | products attributes        |                                                          | empty array      |

    @ANA_ULD002
    @analytics
    @vbank
    @MX @android @ios @web
    @backend(test)
    @web-done
    Scenario: UnitLinked - Access to policy detail
        Given a user with the following criteria
            | criteria           |
            | unit linked        |
        When the user accesses to unit linked
        And the user accesses to policy detail
        Then the device contains the following variables:
            | item                       | value                                                    | type             |
            | analytics                  | analytics/glomo_base                                     | json schema      |
            | version DL                 | 20250414_5.0                                             | string           |
            | page name                  | app:privada:personas:polizas:detalle:mas informacion     | string           |
            | level 1                    | polizas                                                  | string           |
            | level 2                    | detalle                                                  | string           |
            | level 3                    | mas informacion                                          | string           |
            | language                   | ES                                                       | string           |
            | page area                  | privada                                                  | string           |
            | page intent                | informacion                                              | string           |
            | channel                    | online                                                   | string           |
            | page instance ID           | de                                                       | string           |
            | page segment               | personas                                                 | string           |
            | sysEnv                     | app                                                      | string           |
            | business unit              | BBVA Mexico                                              | string           |
            | site app name              | App BBVA Mexico                                          | string           |
            | project name               | Glomo                                                    | string           |
            | device mobile              | si                                                       | string           |
            | user userState             | logado                                                   | string           |
            | user segment global        | 003001                                                   | string           |
            | profile ID                 | profileID                                                | regexp named     |
            | user gender                | gender                                                   | regexp named     |
            | internal campaign          |                                                          | empty array      |
            | optimization attributes    |                                                          | empty array      |
            | application                |                                                          | empty str object |
            | products attributes        |                                                          | empty array      |

    @ANA_ULD003 @vbank
    @analytics
    @MX @android @ios @web
    @backend(test)
    @web-done
    Scenario: UnitLinked - Access to edit alias
        Given a user with the following criteria
            | criteria           |
            | unit linked        |
        When the user accesses to unit linked
        And the user accesses the unit linked edit alias
        Then the device contains the following variables:
            | item                       | value                                                    | type             |
            | analytics                  | analytics/glomo_base                                     | json schema      |
            | version DL                 | 20250414_5.0                                             | string           |
            | page name                  | app:privada:personas:polizas:detalle:editar alias        | string           |
            | level 1                    | polizas                                                  | string           |
            | level 2                    | detalle                                                  | string           |
            | level 3                    | editar alias                                             | string           |
            | language                   | ES                                                       | string           |
            | page area                  | privada                                                  | string           |
            | page intent                | informacion                                              | string           |
            | channel                    | online                                                   | string           |
            | page instance ID           | de                                                       | string           |
            | page segment               | personas                                                 | string           |
            | sysEnv                     | app                                                      | string           |
            | business unit              | BBVA Mexico                                              | string           |
            | site app name              | App BBVA Mexico                                          | string           |
            | project name               | Glomo                                                    | string           |
            | device mobile              | si                                                       | string           |
            | user userState             | logado                                                   | string           |
            | user segment global        | 003001                                                   | string           |
            | profile ID                 | profileID                                                | regexp named     |
            | user gender                | gender                                                   | regexp named     |
            | user age                   | age                                                      | regexp named     |
            | internal campaign          |                                                          | empty array      |
            | optimization attributes    |                                                          | empty array      |
            | application                |                                                          | empty str object |
            | products attributes        |                                                          | empty array      |

    @ANA_ULD004
    @analytics
    @vbank
    @MX @android @ios @web
    @backend(test)
    @web-done
    Scenario: UnitLinked - Access to unit linked error
        Given a user with the following criteria
            | criteria           |
            | unit linked        |
        When the user accesses to unit linked
        Then the device contains the following variables:
            | item                       | value                                                                | type             |
            | analytics                  | analytics/glomo_base                                                 | json schema      |
            | version DL                 | 20250414_5.0                                                         | string           |
            | page name                  | app:privada:personas:polizas:detalle:error al mostrar informacion    | string           |
            | level 1                    | polizas                                                              | string           |
            | level 2                    | detalle                                                              | string           |
            | level 3                    | error al mostrar informacion                                         | string           |
            | error page                 | error al mostrar informacion                                         | string           |
            | language                   | ES                                                                   | string           |
            | page area                  | privada                                                              | string           |
            | page intent                | informacion                                                          | string           |
            | channel                    | online                                                               | string           |
            | page instance ID           | de                                                                   | string           |
            | page info version          | appVersion                                                           | regexp named     |
            | page segment               | personas                                                             | string           |
            | sysEnv                     | app                                                                  | string           |
            | business unit              | BBVA Mexico                                                          | string           |
            | site app name              | App BBVA Mexico                                                      | string           |
            | project name               | Glomo                                                                | string           |
            | device mobile              | si                                                                   | string           |
            | user userState             | logado                                                               | string           |
            | user segment global        | 003001                                                               | string           |
            | profile ID                 | profileID                                                            | regexp named     |
            | user gender                | gender                                                               | regexp named     |
            | user age                   | age                                                                  | regexp named     |
            | internal campaign          |                                                                      | empty array      |
            | optimization attributes    |                                                                      | empty array      |
            | application                |                                                                      | empty str object |
            | products attributes        |                                                                      | empty array      |

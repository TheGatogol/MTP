@editAliasAnalyticsBalloon
Feature: Analytics - Edit Alias

    @ANA_EVENT_EA001
    @analytics
    @web-done @ios @android
    @vbank
    @backend(test)
    @MX
    @web
    Scenario: Advanced foot print - page view - edit alias account
        Given a user with the following criteria
            | criteria                |
            | edit alias with account |
        And the user accesses to the first account product detail
        And the analytics interceptor service is initiated
        When the user accesses the edit alias account
        Then the analytics events contains the following variables:
            | item                     | value                                                              | type              | event     |
            | analytics                | analytics/glomo_base                                               | json schema       |Page View  |
            | version dl               | 20250414_5.0                                                       | string            |Page View  |
            | page name                | app:privada:personas:cuentas:detalle:editar alias                  | string            |Page View  |
            | level 1                  | cuentas                                                            | string            |Page View  |
            | level 2                  | detalle                                                            | string            |Page View  |
            | level 3                  | editar alias                                                       | string            |Page View  |
            | language                 | ES                                                                 | string            |Page View  |
            | page area                | privada                                                            | string            |Page View  |
            | page intent              | informacion                                                        | string            |Page View  |
            | channel                  | online                                                             | string            |Page View  |
            | page instance ID         | de                                                                 | string            |Page View  |
            | page info version        | appVersion                                                         | regexp named      |Page View  |
            | page segment             | personas                                                           | string            |Page View  |
            | sysEnv                   | app                                                                | string            |Page View  |
            | business unit            | BBVA Mexico                                                        | string            |Page View  |
            | site app name            | App BBVA Mexico                                                    | string            |Page View  |
            | project name             | Glomo                                                              | string            |Page View  |
            | device mobile            | si                                                                 | string            |Page View  |
            | user userState           | logado                                                             | string            |Page View  |
            | user segment global      | 003001                                                             | string            |Page View  |
            | profile ID               | profileID                                                          | regexp named      |Page View  |

    @ANA_EVENT_EA002
    @analytics
    @web-done @ios @android
    @vbank
    @backend(test)
    @MX
    @web
    Scenario: Advanced foot print - page view - edit alias credit card
        Given a user with the following criteria
            | criteria    |
            | edit alias card  |
        And the user accesses to the "operative" "credit" card product detail
        And the analytics interceptor service is initiated
        When the user accesses the edit alias
        Then the analytics events contains the following variables:
            | item                     | value                                                              | type              |  event      |
            | analytics                | analytics/glomo_base                                               | json schema       |  Page View  |
            | version dl               | 20250414_5.0                                                       | string            |  Page View  |
            | page name                | app:privada:personas:tarjetas:credito:detalle:editar alias         | string            |  Page View  |
            | level 1                  | tarjetas                                                           | string            |  Page View  |
            | level 2                  | credito                                                            | string            |  Page View  |
            | level 3                  | detalle                                                            | string            |  Page View  |
            | level 4                  | editar alias                                                       | string            |  Page View  |
            | language                 | ES                                                                 | string            |  Page View  |
            | page area                | privada                                                            | string            |  Page View  |
            | page intent              | informacion                                                        | string            |  Page View  |
            | channel                  | online                                                             | string            |  Page View  |
            | page instance ID         | de                                                                 | string            |  Page View  |
            | page info version        | appVersion                                                         | regexp named      |  Page View  |
            | page segment             | personas                                                           | string            |  Page View  |
            | sysEnv                   | app                                                                | string            |  Page View  |
            | business unit            | BBVA Mexico                                                        | string            |  Page View  |
            | site app name            | App BBVA Mexico                                                    | string            |  Page View  |
            | project name             | Glomo                                                              | string            |  Page View  |
            | device mobile            | si                                                                 | string            |  Page View  |
            | user userState           | logado                                                             | string            |  Page View  |
            | user segment global      | 003001                                                             | string            |  Page View  |
            | profile ID               | profileID                                                          | regexp named      |  Page View  |

    @ANA_EVENT_EA003
    @analytics
    @web-done @ios @android
    @vbank
    @backend(test)
    @MX
    @web
    Scenario: Advanced foot print - page view - edit alias debit card
        Given a user with the following criteria
            | criteria    |
            | edit alias card analitycs  |
        And the user accesses to the "operative" "debit" card product detail
        And the analytics interceptor service is initiated
        When the user accesses the edit alias
        Then the analytics events contains the following variables:
            | item                     | value                                                              | type              |  event      |
            | analytics                | analytics/glomo_base                                               | json schema       |  Page View  |
            | version dl               | 20250414_5.0                                                       | string            |  Page View  |
            | page name                | app:privada:personas:tarjetas:debito:detalle:editar alias          | string            |  Page View  |
            | level 1                  | tarjetas                                                           | string            |  Page View  |
            | level 2                  | debito                                                             | string            |  Page View  |
            | level 3                  | detalle                                                            | string            |  Page View  |
            | level 4                  | editar alias                                                       | string            |  Page View  |
            | language                 | ES                                                                 | string            |  Page View  |
            | page area                | privada                                                            | string            |  Page View  |
            | page intent              | informacion                                                        | string            |  Page View  |
            | channel                  | online                                                             | string            |  Page View  |
            | page instance ID         | de                                                                 | string            |  Page View  |
            | page info version        | appVersion                                                         | regexp named      |  Page View  |
            | page segment             | personas                                                           | string            |  Page View  |
            | sysEnv                   | app                                                                | string            |  Page View  |
            | business unit            | BBVA Mexico                                                        | string            |  Page View  |
            | site app name            | App BBVA Mexico                                                    | string            |  Page View  |
            | project name             | Glomo                                                              | string            |  Page View  |
            | device mobile            | si                                                                 | string            |  Page View  |
            | user userState           | logado                                                             | string            |  Page View  |
            | user segment global      | 003001                                                             | string            |  Page View  |
            | profile ID               | profileID                                                          | regexp named      |  Page View  |

    @ANA_EVENT_EA004
    @analytics
    @web-done @ios @android
    @vbank
    @MX
    @web
    @backend(test)
    Scenario: Advanced foot print - page view - edit alias equity contracts
        Given a user with the following criteria
            | criteria |
            | equity   |
        And the user accesses to equity
        And the analytics interceptor service is initiated
        When the user accesses the equity edit alias
        Then the analytics events contains the following variables:
            | item                    | value                                                               | type             | event     |
            | analytics               | analytics/glomo_base                                                | json schema      | Page View |
            | version DL              | 20250414_5.0                                                        | string           | Page View |
            | page name               | app:privada:patrimonial:contrato:detalle:editar alias               | string           | Page View |
            | level 1                 | contrato                                                            | string           | Page View |
            | level 2                 | detalle                                                             | string           | Page View |
            | level 3                 | editar alias                                                        | string           | Page View |
            | language                | ES                                                                  | string           | Page View |
            | page area               | privada                                                             | string           | Page View |
            | page intent             | informacion                                                         | string           | Page View |
            | channel                 | online                                                              | string           | Page View |
            | page instance ID        | de                                                                  | string           | Page View |
            | page info version       | appVersion                                                          | regexp named     | Page View |
            | page segment            | patrimonial                                                         | string           | Page View |
            | sysEnv                  | app                                                                 | string           | Page View |
            | business unit           | BBVA Mexico                                                         | string           | Page View |
            | site app name           | App BBVA Mexico                                                     | string           | Page View |
            | project name            | Glomo                                                               | string           | Page View |
            | device mobile           | si                                                                  | string           | Page View |
            | user userState          | logado                                                              | string           | Page View |
            | user segment global     | 003003                                                              | string           | Page View |
            | profile ID              | profileID                                                           | regexp named     | Page View |
            | user age                | age                                                                 | regexp named     | Page View |
            | user gender             | gender                                                              | regexp named     | Page View |
            | internal campaign       |                                                                     | empty array      | Page View |
            | optimization attributes |                                                                     | empty array      | Page View |
            | application             |                                                                     | empty str object | Page View |
            | products attributes     |                                                                     | empty array      | Page View |

    @ANA_EVENT_EA005
    @analytics
    @web-done @ios @android
    @vbank
    @MX
    @web
    @test
    Scenario: UnitLinked - Access to edit alias
        Given a user with the following criteria
            | criteria           |
            | unit linked        |
        When the user accesses to dashboard
        And the user accesses to unit linked
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

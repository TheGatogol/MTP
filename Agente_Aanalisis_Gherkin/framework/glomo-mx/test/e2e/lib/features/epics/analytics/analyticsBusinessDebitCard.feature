@analyticsBusinessDebitCard
Feature: Analytics - Business Debit Card

    @ANA_BDC001
    @analytics
    @ios @android
    @vbank
    @backend(test)
    @MX
    @web @web-done
    Scenario: User select a business debit card
        Given a user with the following criteria
            | criteria    |
            | business debit card |
        When the user accesses to the "business" "debit" card product detail
        Then the device contains the following variables
            | item                     | value                                                              | type              |
            | analytics                | analytics/glomo_base                                               | json schema       |
            | version dl               | 20250414_5.0                                                       | string            |
            | page name                | app:privada:personas:tarjetas:debito:empresarial:detalle           | string            |
            | level 1                  | tarjetas                                                           | string            |
            | level 2                  | debito                                                             | string            |
            | level 3                  | empresarial                                                        | string            |
            | level 4                  | detalle                                                            | string            |
            | language                 | ES                                                                 | string            |
            | page area                | privada                                                            | string            |
            | page intent              | informacion                                                        | string            |
            | channel                  | online                                                             | string            |
            | page instance ID         | de                                                                 | string            |
            | page info version        | appVersion                                                         | regexp named      |
            | page segment             | personas                                                           | string            |
            | sysEnv                   | app                                                                | string            |
            | business unit            | BBVA Mexico                                                        | string            |
            | site app name            | App BBVA Mexico                                                    | string            |
            | project name             | Glomo                                                              | string            |
            | device mobile            | si                                                                 | string            |
            | user userState           | logado                                                             | string            |
            | user segment global      | 003001                                                             | string            |
            | profile ID               | profileID                                                          | regexp named      |
            | internal campaign        |                                                                    | empty array       |
            | optimization attributes  |                                                                    | empty array       |
            | application              |                                                                    | empty str object  |
            | products attributes      |                                                                    | empty array       |

    @ANA_BDC002
    @manual @JIRA.GLOMOMX-173175
    @analytics
    @ios @android
    @vbank
    @backend(test)
    @MX
    @web
    Scenario: User entrance to Dynamic Cvv from Business Debit Card
        Given a user with the following criteria
            | criteria    |
            | business debit card |
        When the user accesses to the "business" "debit" card product detail
        And the user accesses to digital card screen
        Then the device contains the following variables
            | item                     | value                                                                              | type              |
            | analytics                | analytics/glomo_base                                                               | json schema       |
            | version dl               | 20250414_5.0                                                                       | string            |
            | page name                | app:privada:personas:tarjetas:debito:empresarial:detalle:mas informacion           | string            |
            | level 1                  | tarjetas                                                                           | string            |
            | level 2                  | debito                                                                             | string            |
            | level 3                  | empresarial                                                                        | string            |
            | level 4                  | detalle                                                                            | string            |
            | level 5                  | mas informacion                                                                    | string            |
            | language                 | ES                                                                                 | string            |
            | page area                | privada                                                                            | string            |
            | page intent              | informacion                                                                        | string            |
            | channel                  | online                                                                             | string            |
            | page instance ID         | de                                                                                 | string            |
            | page info version        | appVersion                                                                         | regexp named      |
            | page segment             | personas                                                                           | string            |
            | sysEnv                   | app                                                                                | string            |
            | business unit            | BBVA Mexico                                                                        | string            |
            | site app name            | App BBVA Mexico                                                                    | string            |
            | project name             | Glomo                                                                              | string            |
            | device mobile            | si                                                                                 | string            |
            | user userState           | logado                                                                             | string            |
            | user segment global      | 003001                                                                             | string            |
            | profile ID               | profileID                                                                          | regexp named      |
            | internal campaign        |                                                                                    | empty array       |
            | optimization attributes  |                                                                                    | empty array       |
            | application              |                                                                                    | empty str object  |
            | products attributes      |                                                                                    | empty array       |

    @ANA_BDC003
    @manual @JIRA.GLOMOMX-173175
    @analytics
    @ios @android
    @vbank
    @backend(test)
    @MX
    @web
    Scenario: User select Cvv Dynamic option
        Given a user with the following criteria
            | criteria            |
            | business debit card |
        When the user accesses to the "business" "debit" card product detail
        And the user accesses to digital card screen
        And the user actives dynamic CVV
        Then the device contains the following variables
            | item                     | value                                                                                               | type              |
            | analytics                | analytics/glomo_base                                                                                | json schema       |
            | version dl               | 20250414_5.0                                                                                        | string            |
            | page name                | app:privada:personas:tarjetas:debito:empresarial:detalle:mas informacion:error carga cvv            | string            |
            | level 1                  | tarjetas                                                                                            | string            |
            | level 2                  | debito                                                                                              | string            |
            | level 3                  | empresarial                                                                                         | string            |
            | level 4                  | detalle                                                                                             | string            |
            | level 5                  | mas informacion                                                                                     | string            |
            | level 6                  | error carga cvv                                                                                     | string            |
            | language                 | ES                                                                                                  | string            |
            | page area                | privada                                                                                             | string            |
            | page intent              | informacion                                                                                         | string            |
            | channel                  | online                                                                                              | string            |
            | page instance ID         | de                                                                                                  | string            |
            | page info version        | appVersion                                                                                          | regexp named      |
            | page segment             | personas                                                                                            | string            |
            | sysEnv                   | app                                                                                                 | string            |
            | business unit            | BBVA Mexico                                                                                         | string            |
            | site app name            | App BBVA Mexico                                                                                     | string            |
            | project name             | Glomo                                                                                               | string            |
            | device mobile            | si                                                                                                  | string            |
            | user userState           | logado                                                                                              | string            |
            | user segment global      | 003001                                                                                              | string            |
            | profile ID               | profileID                                                                                           | regexp named      |
            | internal campaign        |                                                                                                     | empty array       |
            | optimization attributes  |                                                                                                     | empty array       |
            | application              |                                                                                                     | empty str object  |
            | products attributes      |                                                                                                     | empty array       |

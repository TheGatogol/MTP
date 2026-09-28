@loanDetailAnalytics
Feature: Analytics - Loan Detail

    @ANA_LD001
    @analytics
    @web @ios @android
    @vbank @backend(test)
    @MX
    @web-done
    Scenario: Advanced foot print - page view - accesses loan
        Given a user with the following criteria
            | criteria            |
            | loan                |
        When the user accesses to loan
        Then the device contains the following variables
            | item                     | value                                                              | type              |
            | analytics                | analytics/glomo_base                                               | json schema       |
            | version dl               | 20250414_5.0                                                       | string            |
            | page name                | app:privada:personas:prestamos:detalle                             | string            |
            | level 1                  | prestamos                                                          | string            |
            | level 2                  | detalle                                                            | string            |
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
            | user gender              | gender                                                             | regexp named      |
            | user country             | lettersAndSpaceOrEmpty                                             | regexp named      |
            | user state               | lettersAndSpaceOrEmpty                                             | regexp named      |
            | internal campaign        |                                                                    | empty array       |
            | optimization attributes  |                                                                    | empty array       |
            | application              |                                                                    | empty str object  |
            | products attributes       |                                                                    | empty array       |

    @ANA_LD002
    @analytics
    @web @ios @android
    @vbank @backend(test)
    @MX
    @web-done
    Scenario: Advanced foot print - page view - accesses loan more information
        Given a user with the following criteria
            | criteria            |
            | loan                |
        And the user accesses to loan
        When the user accesses to more infomation loan
        Then the device contains the following variables
            | item                     | value                                                              | type              |
            | analytics                | analytics/glomo_base                                               | json schema       |
            | version dl               | 20250414_5.0                                                       | string            |
            | page name                | app:privada:personas:prestamos:detalle:mas informacion             | string            |
            | level 1                  | prestamos                                                          | string            |
            | level 2                  | detalle                                                            | string            |
            | level 3                  | mas informacion                                                    | string            |
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
            | user gender              | gender                                                             | regexp named      |
            | user country             | lettersAndSpaceOrEmpty                                             | regexp named      |
            | user state               | lettersAndSpaceOrEmpty                                             | regexp named      |
            | internal campaign        |                                                                    | empty array       |
            | optimization attributes  |                                                                    | empty array       |
            | application              |                                                                    | empty str object  |
            | products attributes       |                                                                    | empty array       |

    @ANA_LD003
    @analytics
    @web @ios @android
    @vbank @backend(test)
    @MX
    @web-done
    Scenario: Advanced foot print - page view - accesses loan edit alias
        Given a user with the following criteria
            | criteria        |
            | loan edit alias |
        And the user accesses to loan
        When the user accesses to edit alias
        Then the device contains the following variables
            | item                     | value                                                              | type              |
            | analytics                | analytics/glomo_base                                               | json schema       |
            | version dl               | 20250414_5.0                                                       | string            |
            | page name                | app:privada:personas:prestamos:detalle:editar alias                | string            |
            | level 1                  | prestamos                                                          | string            |
            | level 2                  | detalle                                                            | string            |
            | level 3                  | editar alias                                                       | string            |
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

@checksManagementServiceTermsAnalytics @checksManagementAnalytics @checksSectionAnalytics
Feature: Analytics checks Management Service terms

    @ANA_CMST001 @analyticsChecksManagementServiceTerms
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: Service Terms screen appears - Checks management activaded
        Given a user with the following criteria
          | criteria                                    |
          | pesos account with checks management active |
          | checks management option is false           |
        And the user accesses to checks operatives with checks management active
        When the user selects the checks management option
        Then the device contains the following variables
            | item                      | value                                                     | type             |
            | analytics                 | analytics/glomo_base                                      | json schema      |
            | version DL                | 20250414_5.0                                              | string           |
            | page name                 | app:privada:personas:cheques:activar proteccion:detalle   | string           |
            | level 1                   | cheques                                                   | string           |
            | level 2                   | activar proteccion                                        | string           |
            | level 3                   | detalle                                                   | string           |
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
            | user age                  | age                                                       | regexp named     |
            | user gender               | gender                                                    | regexp named     |
            | internal campaign         |                                                           | empty array      |
            | optimization attributes   |                                                           | empty array      |
            | application               |                                                           | empty str object |
            | products attributes       |                                                           | empty array      |

    @ANA_CMST002
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: Service Terms screen appears - Checks management not activaded
        Given a user with the following criteria
          | criteria                                    |
          | pesos account with checks management active |
        And the user accesses to checks operatives with checks management active
        When the user selects the checks management option with "not activated" service terms
        And the user declines the service terms
        Then the device contains the following variables
            | item                      | value                                                     | type             |
            | analytics                 | analytics/glomo_base                                      | json schema      |
            | version DL                | 20250414_5.0                                              | string           |
            | page name                 | app:privada:personas:cheques:declinar proteccion:detalle  | string           |
            | level 1                   | cheques                                                   | string           |
            | level 2                   | declinar proteccion                                       | string           |
            | level 3                   | detalle                                                   | string           |
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
            | user age                  | age                                                       | regexp named     |
            | user gender               | gender                                                    | regexp named     |
            | internal campaign         |                                                           | empty array      |
            | optimization attributes   |                                                           | empty array      |
            | application               |                                                           | empty str object |
            | products attributes        |                                                           | empty array      |

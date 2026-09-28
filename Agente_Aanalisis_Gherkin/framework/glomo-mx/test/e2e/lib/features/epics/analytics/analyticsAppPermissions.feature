@AnaAppPermissions
Feature: Analytics - App Permissions

    @ANA_EVENT_AP001
    @analytics
    @vbank
    @MX @android @ios
    @web
    @backend(test)
    @web-done
    Scenario: App Permissions - analytics event App Page View
        Given a user with the following criteria
            | criteria         |
            | app permissions  |
        And the user accesses to dashboard
        And the analytics interceptor service is initiated
        When the user accesses to app permissions
        Then the analytics events contains the following variables
            | item                     | value                                                  | type         | event     |
            | analytics	               | analytics/glomo_base                                   | json schema  | Page View |
            | version dl               | 20250414_5.0                                           | string       | Page View |
            | page name                | app:privada:personas:permisos aplicacion               | string       | Page View |
            | level 1                  | permisos aplicacion                                    | string       | Page View |
            | language                 | ES                                                     | string       | Page View |
            | page area                | privada                                                | string       | Page View |
            | page intent              | informacion                                            | string       | Page View |
            | channel                  | online                                                 | string       | Page View |
            | page instance ID         | de                                                     | string       | Page View |
            | page info version        | appVersion                                             | regexp named | Page View |
            | page segment             | personas                                               | string       | Page View |
            | sysEnv                   | app                                                    | string       | Page View |
            | business unit            | BBVA Mexico                                            | string       | Page View |
            | project name             | Glomo                                                  | string       | Page View |
            | device mobile            | si                                                     | string       | Page View |
            | user userState           | logado                                                 | string       | Page View |
            | user segment global      | 003001                                                 | string       | Page View |
            | profile ID               | profileID                                              | regexp named | Page View |
            | user age                 | age                                                    | regexp named | Page View |
            | user gender              | gender                                                 | regexp named | Page View |

    @ANA_EVENT_AP002
    @analytics
    @vbank
    @MX @android @ios
    @web
    @backend(test)
    @web-done
    Scenario: App Permissions - analytics event App Page View Modal
        Given a user with the following criteria
            | criteria         |
            | app permissions  |
        And the user accesses to dashboard
        When the user accesses to app permissions helps screen
        Then the device contains the following variables
            | item                     | value                                                  | type         |
            | analytics	               | analytics/glomo_base                                   | json schema  |
            | version dl               | 20250414_5.0                                           | string       |
            | page name                | app:privada:personas:permisos aplicacion:info          | string       |
            | level 1                  | permisos aplicacion                                    | string       |
            | level 2                  | info                                                   | string       |
            | language                 | ES                                                     | string       |
            | page intent              | informacion                                            | string       |
            | channel                  | online                                                 | string       |
            | page instance ID         | de                                                     | string       |
            | page info version        | appVersion                                             | regexp named |
            | page segment             | personas                                               | string       |
            | sysEnv                   | app                                                    | string       |
            | business unit            | BBVA Mexico                                            | string       |
            | project name             | Glomo                                                  | string       |
            | device mobile            | si                                                     | string       |
            | user userState           | logado                                                 | string       |
            | user segment global      | 003001                                                 | string       |
            | profile ID               | profileID                                              | regexp named |
            | user age                 | age                                                    | regexp named |
            | user gender              | gender                                                 | regexp named |

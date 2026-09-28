@financialHealthPushAdviceAnalytics
Feature: Analytics - Recurrent Payroll Financial Health

    @ANA_FHPA001
    @analytics
    @MX @vbank @backend(test)
    @ios @android @web
    @web-done
    Scenario: The user is shown the modal recurrent payroll
        Given a user with the following criteria
            | criteria          |
            | recurrent payroll |
        And the user accesses to dashboard
        When the user goes to "screen financial health advice" using deeplink navigation
        Then the device contains the following variables
            | item                    | value                                                               | type             |
            | analytics               | analytics/glomo_base                                                | json schema      |
            | version DL              | 20250414_5.0                                                        | string           |
            | page name               | app:privada:personas:notificaciones:nomina recibida apartados       | string           |
            | level 1                 | notificaciones                                                      | string           |
            | level 2                 | nomina recibida apartados                                           | string           |
            | language                | ES                                                                  | string           |
            | page area               | privada                                                             | string           |
            | page intent             | informacion                                                         | string           |
            | channel                 | online                                                              | string           |
            | page instance ID        | de                                                                  | string           |
            | page info version       | appVersion                                                          | regexp named     |
            | page segment            | personas                                                            | string           |
            | sysEnv                  | app                                                                 | string           |
            | business unit           | BBVA Mexico                                                         | string           |
            | site app name           | App BBVA Mexico                                                     | string           |
            | project name            | Glomo                                                               | string           |
            | device mobile           | si                                                                  | string           |
            | user userState          | logado                                                              | string           |
            | user segment global     | 003001                                                              | string           |
            | profile ID              | profileID                                                           | regexp named     |
            | internal campaign       |                                                                     | empty array      |
            | optimization attributes |                                                                     | empty array      |
            | application             |                                                                     | empty str object |
            | products attributes     |                                                                     | empty array      |

    @ANA_EVENT_FHPA002
    @analytics
    @MX @vbank @backend(test)
    @ios @android @web
    @web-done
    Scenario: The user accesses to pockets
        Given a user with the following criteria
            | criteria              |
            | recurrent payroll     |
        And the user accesses to dashboard
        And the user goes to "screen financial health advice" using deeplink navigation
        And the analytics interceptor service is initiated
        When the user accesses to pockets
        Then the analytics events contains the following variables
            | item                     | value                                                               | type             | event              |
            | analytics                | analytics/glomo_base                                                | json schema      | App On Click Start |
            | version DL               | 20250414_5.0                                                        | string           | App On Click Start |
            | page name                | app:privada:personas:notificaciones:nomina recibida apartados       | string           | App On Click Start |
            | level 1                  | notificaciones                                                      | string           | App On Click Start |
            | level 2                  | nomina recibida apartados                                           | string           | App On Click Start |
            | language                 | ES                                                                  | string           | App On Click Start |
            | page area                | privada                                                             | string           | App On Click Start |
            | page intent              | informacion                                                         | string           | App On Click Start |
            | channel                  | online                                                              | string           | App On Click Start |
            | page instance ID         | de                                                                  | string           | App On Click Start |
            | page info version        | appVersion                                                          | regexp named     | App On Click Start |
            | page segment             | personas                                                            | string           | App On Click Start |
            | sysEnv                   | app                                                                 | string           | App On Click Start |
            | business unit            | BBVA Mexico                                                         | string           | App On Click Start |
            | site app name            | App BBVA Mexico                                                     | string           | App On Click Start |
            | project name             | Glomo                                                               | string           | App On Click Start |
            | device mobile            | si                                                                  | string           | App On Click Start |
            | user userState           | logado                                                              | string           | App On Click Start |
            | user segment global      | 003001                                                              | string           | App On Click Start |
            | profile ID               | profileID                                                           | regexp named     | App On Click Start |
            | user gender              | gender                                                              | regexp named     | App On Click Start |
            | user age                 | age                                                                 | regexp named     | App On Click Start |
            | global application       | pockets                                                             | string           | App On Click Start |
            | application name         | crear apartado                                                      | string           | App On Click Start |
            | application type         | operativa                                                           | string           | App On Click Start |
            | application step         | crear apartado nomina                                               | string           | App On Click Start |
            | fulfillment model        | online                                                              | string           | App On Click Start |
            | product primary category | cuentas                                                             | string           | App On Click Start |
            | internal campaign        |                                                                     | empty array      | App On Click Start |
            | optimization attributes  |                                                                     | empty array      | App On Click Start |

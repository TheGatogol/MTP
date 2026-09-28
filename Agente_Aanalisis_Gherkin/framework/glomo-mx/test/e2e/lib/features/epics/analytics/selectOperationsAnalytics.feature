@selectOperations
Feature: Analytics - select operations

    @ANA_EVENT_SOP001
    @analytics
    @ios @android
    @vbank @backend(test) @web
    @MX
    @web-done @vbank-modified
    Scenario: Select Operations - app onclick start - click qr payment operation
        Given a user with the following criteria
                    | criteria                      |
                    | many level n4 accounts        |
        And the user accesses to operationals page
        And the analytics interceptor service is initiated
        When the user accesses the "qr payment" operation
        Then the analytics events contains the following variables
                | item                     | value                                                         | type          | event              |
                | analytics                | analytics/glomo_base                                          | json schema   | App On Click Start |
                | version DL               | 20250414_5.0                                                  | string        | App On Click Start |
                | page name                | app:privada:personas:posicion global                          | string        | App On Click Start |
                | level 1                  | posicion global                                               | string        | App On Click Start |
                | language                 | ES                                                            | string        | App On Click Start |
                | page area                | privada                                                       | string        | App On Click Start |
                | page intent              | informacion                                                   | string        | App On Click Start |
                | channel                  | online                                                        | string        | App On Click Start |
                | page instance ID         | de                                                            | string        | App On Click Start |
                | page info version        | appVersion                                                    | regexp named  | App On Click Start |
                | page segment             | personas                                                      | string        | App On Click Start |
                | sysEnv                   | app                                                           | string        | App On Click Start |
                | business unit            | BBVA Mexico                                                   | string        | App On Click Start |
                | site app name            | App BBVA Mexico                                               | string        | App On Click Start |
                | project name             | Glomo                                                         | string        | App On Click Start |
                | device mobile            | si                                                            | string        | App On Click Start |
                | user userState           | logado                                                        | string        | App On Click Start |
                | profile ID               | profileID                                                     | regexp named  | App On Click Start |
                | user segment global      | 003001                                                        | string        | App On Click Start |
                | user gender              | gender                                                        | regexp named  | App On Click Start |
                | user age                 | age                                                           | regexp named  | App On Click Start |
                | user state               | lettersAndSpaceOrEmpty                                        | regexp named  | App On Click Start |
                | global application       | qr payments                                                   | string        | App On Click Start |
                | application name         | operaciones con qr                                            | string        | App On Click Start |
                | application type         | operativa                                                     | string        | App On Click Start |
                | application step         | nueva pg operaciones con cuentas                              | string        | App On Click Start |
                | fulfillment model        | online                                                        | string        | App On Click Start |
                | product primary category | cuentas                                                       | string        | App On Click Start |
                | internal campaign        |                                                               | empty array   | App On Click Start |
                | optimization attributes  |                                                               | empty array   | App On Click Start |

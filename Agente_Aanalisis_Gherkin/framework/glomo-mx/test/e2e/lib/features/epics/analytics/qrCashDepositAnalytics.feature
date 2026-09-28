@qrCashDepositAnalytics
Feature: Analytics - QR Cash Deposit in ATM

    @ANA_EVENT_DOG001
    @MX
    @analytics
    @vbank @backend(test)
    @ios @android @web
    @web-done
    Scenario: QR Deposit Practicaja - Page View
        Given a user with the following criteria
            | criteria        |
            | account balance |
        And the user accesses to the operative account product detail
        And the user accesses to view account data
        And the analytics interceptor service is initiated
        When the user generates the QR deposit
        Then the analytics events contains the following variables:
            | item                | value                                                                   | type             | event     |
            | analytics           | analytics/glomo_base                                                    | json schema      | Page View |
            | version DL          | 20250414_5.0                                                            | string           | Page View |
            | page intent         | informacion                                                             | string           | Page View |
            | page segment        | personas                                                                | string           | Page View |
            | page name           | app:privada:personas:cuentas:detalle:datos de cuenta:qr para practicaja | string           | Page View |
            | sysEnv              | app                                                                     | string           | Page View |
            | channel             | online                                                                  | string           | Page View |
            | language            | ES                                                                      | string           | Page View |
            | level 1             | cuentas                                                                 | string           | Page View |
            | level 2             | detalle                                                                 | string           | Page View |
            | level 3             | datos de cuenta                                                         | string           | Page View |
            | level 4             | qr para practicaja                                                      | string           | Page View |
            | business unit       | BBVA Mexico                                                             | string           | Page View |
            | site app name       | App BBVA Mexico                                                         | string           | Page View |
            | project name        | Glomo                                                                   | string           | Page View |
            | page area           | privada                                                                 | string           | Page View |
            | device user agent   | GLOMO_MX/99.99.99 (Android;14;Samsung)                                  | string           | Page View |
            | device mobile       | si                                                                      | string           | Page View |
            | device root         |                                                                         | string           | Page View |
            | user userState      | logado                                                                  | string           | Page View |
            | user segment global | 003001                                                                  | string           | Page View |
            | user gender         | gender                                                                  | regexp named     | Page View |
            | user age            | age                                                                     | regexp named     | Page View |
            | application name    |                                                                         | empty str object | Page View |

    @ANA_EVENT_DOG002
    @MX
    @analytics
    @vbank @backend(test)
    @ios @android @web
    @web-done
    Scenario: QR Deposit Practicaja - External Link
        Given a user with the following criteria
            | criteria        |
            | account balance |
        And the user accesses to the operative account product detail
        And the user accesses to view account data
        And the user generates the QR deposit
        And the analytics interceptor service is initiated
        When the user taps on share QR deposit
        Then the analytics events contains the following variables
            | item                | value                                                                   | type             | event         |
            | analytics           | analytics/glomo_base                                                    | json schema      | External Link |
            | version DL          | 20250414_5.0                                                            | string           | External Link |
            | page intent         | informacion                                                             | string           | External Link |
            | page segment        | personas                                                                | string           | External Link |
            | page name           | app:privada:personas:cuentas:detalle:datos de cuenta:qr para practicaja | string           | External Link |
            | sysEnv              | app                                                                     | string           | External Link |
            | channel             | online                                                                  | string           | External Link |
            | language            | ES                                                                      | string           | External Link |
            | level 1             | cuentas                                                                 | string           | External Link |
            | level 2             | detalle                                                                 | string           | External Link |
            | level 3             | datos de cuenta                                                         | string           | External Link |
            | level 4             | qr para practicaja                                                      | string           | External Link |
            | business unit       | BBVA Mexico                                                             | string           | External Link |
            | site app name       | App BBVA Mexico                                                         | string           | External Link |
            | project name        | Glomo                                                                   | string           | External Link |
            | page area           | privada                                                                 | string           | External Link |
            | link url            | compartir qr para practicaja                                            | string           | External Link |
            | device user agent   | GLOMO_MX/99.99.99 (Android;14;Samsung)                                  | string           | External Link |
            | device mobile       | si                                                                      | string           | External Link |
            | device root         |                                                                         | string           | External Link |
            | user userState      | logado                                                                  | string           | External Link |
            | user segment global | 003001                                                                  | string           | External Link |
            | user gender         | gender                                                                  | regexp named     | External Link |
            | user age            | age                                                                     | regexp named     | External Link |
            | application name    |                                                                         | empty str object | External Link |

    @ANA_EVENT_DOG003
    @MX
    @analytics
    @vbank @backend(test)
    @ios @android @web
    @web-done
    Scenario: QR Deposit Practicaja - Error Page View
        Given a user with the following criteria
            | criteria        |
            | account balance |
        And the user accesses to the operative account product detail
        And the user accesses to view account data
        And the analytics interceptor service is initiated
        When the user generates the QR deposit with an error
        Then the analytics events contains the following variables:
            | item                | value                                                                                                 | type             | event     |
            | analytics           | analytics/glomo_base                                                                                  | json schema      | Page View |
            | version DL          | 20250414_5.0                                                                                          | string           | Page View |
            | page intent         | informacion                                                                                           | string           | Page View |
            | page segment        | personas                                                                                              | string           | Page View |
            | page name           | app:privada:personas:cuentas:detalle:datos de cuenta:qr para practicaja:error operacion no disponible | string           | Page View |
            | sysEnv              | app                                                                                                   | string           | Page View |
            | channel             | online                                                                                                | string           | Page View |
            | language            | ES                                                                                                    | string           | Page View |
            | level 1             | cuentas                                                                                               | string           | Page View |
            | level 2             | detalle                                                                                               | string           | Page View |
            | level 3             | datos de cuenta                                                                                       | string           | Page View |
            | level 4             | qr para practicaja                                                                                    | string           | Page View |
            | level 5             | error operacion no disponible                                                                         | string           | Page View |
            | business unit       | BBVA Mexico                                                                                           | string           | Page View |
            | site app name       | App BBVA Mexico                                                                                       | string           | Page View |
            | project name        | Glomo                                                                                                 | string           | Page View |
            | error page          | error operacion no disponible                                                                         | string           | Page View |
            | page area           | privada                                                                                               | string           | Page View |
            | device user agent   | GLOMO_MX/99.99.99 (Android;14;Samsung)                                                                | string           | Page View |
            | device mobile       | si                                                                                                    | string           | Page View |
            | device root         |                                                                                                       | string           | Page View |
            | user userState      | logado                                                                                                | string           | Page View |
            | user segment global | 003001                                                                                                | string           | Page View |
            | user gender         | gender                                                                                                | regexp named     | Page View |
            | user age            | age                                                                                                   | regexp named     | Page View |
            | application name    |                                                                                                       | empty str object | Page View |

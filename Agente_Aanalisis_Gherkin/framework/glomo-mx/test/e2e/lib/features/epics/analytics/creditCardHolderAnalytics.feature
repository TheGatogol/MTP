@creditCardHolderAnalytics
Feature: Credit Card Holder Analytics

    @ANA_CCH001
    @analytics
    @web @android @ios
    @MX @backend(test) @vbank
    @web-done
    Scenario: credit card holder - Click on date selector
        Given a user with the following criteria
            | criteria          |
            | credit card offer |
        And the user navigates to the "credit card holder old" section
        When the user accesses to the payment date selector
        Then the device contains the following variables:
            | item                     | value                                                                                          | type              |
            | analytics                | analytics/glomo_base                                                                           | json schema       |
            | version DL               | 20250414_5.0                                                                                   | string            |
            | page name                | app:privada:personas:tarjetas:tarjeta de credito one click:2 tipo de pago:cambio fecha de pago | string            |
            | level 1                  | tarjetas                                                                                       | string            |
            | level 2                  | tarjeta de credito one click                                                                   | string            |
            | level 3                  | 2 tipo de pago                                                                                 | string            |
            | level 4                  | cambio fecha de pago                                                                           | string            |
            | language                 | ES                                                                                             | string            |
            | page area                | privada                                                                                        | string            |
            | page intent              | transaccion                                                                                    | string            |
            | channel                  | online                                                                                         | string            |
            | page instance ID         | de                                                                                             | string            |
            | page info version        | appVersion                                                                                     | regexp named      |
            | page segment             | personas                                                                                       | string            |
            | sysEnv                   | app                                                                                            | string            |
            | business unit            | BBVA Mexico                                                                                    | string            |
            | site app name            | App BBVA Mexico                                                                                | string            |
            | project name             | Glomo                                                                                          | string            |
            | device mobile            | si                                                                                             | string            |
            | user userState           | logado                                                                                         | string            |
            | user segment global      | 003001                                                                                         | string            |
            | profile ID               | profileID                                                                                      | regexp named      |
            | user age                 | age                                                                                            | regexp named      |
            | user gender              | gender                                                                                         | regexp named      |
            | internal campaign        |                                                                                                | empty array       |
            | optimization attributes  |                                                                                                | empty array       |
            | application              |                                                                                                | empty str object  |
            | products attributes      |                                                                                                | empty array       |

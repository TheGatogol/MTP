@QRCardScannerAnalytics
Feature: Analytics QR Card Scanner

    @ANA_QL001
    @MX @native
    @backend(test) @android @ios
    @!vbank
    @analytics
    @manual @JIRA.GLOMOGL-20021
    Scenario: Complete process - Successful QR landing page display without remembered user.
        Given an user with a valid BBVA QR card
        And BBVA Mexico app installed
        And the app has not remembered user
        When the user scans the QR code from the camera of his phone
        Then the user sees the following items on the screen
            | item                      | value                                                         | json schema       |
            | analytics                 | analytics/glomo_base                                          | string            |
            | version DL                | 20250414_5.0                                                  | string            |
            | page name                 | app:privada:personas:tarjeta escaneada:detalle:tarjeta activa |                   |
            | level 1                   | tarjeta escaneada                                             | string            |
            | level 2                   | detalle                                                       | string            |
            | level 3                   | tarjeta activa                                                | string            |
            | language                  | ES                                                            | string            |
            | page area                 | privada                                                       | string            |
            | page intent               | informacion                                                   | string            |
            | channel                   | online                                                        | string            |
            | page instance ID          | de                                                            | string            |
            | page info versio          | appVersion                                                    | regexp named      |
            | page segment              | personas                                                      | string            |
            | sysEnv                    | app                                                           | string            |
            | business unit             | BBVA Mexico                                                   | string            |
            | site app name             | App BBVA Mexico                                               | string            |
            | project name              | Glomo                                                         | string            |
            | device mobile             | si                                                            | string            |
            | user userState            | logado                                                        | string            |
            | user segment global       | 003001                                                        | string            |
            | profile ID                | profileID                                                     | regexp named      |
            | user gender               | gender                                                        | regexp named      |
            | user age                  | age                                                           | regexp named      |
            | user country              | lettersAndSpaceOrEmpty                                        | regexp named      |
            | internal campaign         |                                                               | empty array       |
            | optimization attributes   |                                                               | empty array       |
            | application               |                                                               | empty str object  |
            | products attributes       |                                                               | empty array       |

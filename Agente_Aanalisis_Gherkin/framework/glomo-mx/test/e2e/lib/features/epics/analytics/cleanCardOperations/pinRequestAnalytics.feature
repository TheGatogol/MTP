@pinRequestAnalytics
Feature: Analytics - Clean Card Pin Request

    @ANA_CCPR001
    @analytics
    @web @android @ios
    @MX @backend(artichoke) @vbank
    @web-done
    Scenario: Analytics - Access to the pin request operative of a clean card - REQUEST PIN PAGE VIEW
        Given a user with the following criteria
            | criteria               |
            | Credit card            |
            | clean card inoperative |
        And the user accesses to the "clean card operative" "credit" card product detail
        When the user accesses the pin request view
        Then the device contains the following variables
            | item                    | value                                                      | type         |
            | analytics               | analytics/glomo_base                                       | json schema  |
            | version DL              | 20250414_5.0                                               | string       |
            | page name               | app:privada:personas:tarjetas:solicitar nip qr:1 solicitar | string       |
            | level 1                 | tarjetas                                                   | string       |
            | level 2                 | solicitar nip qr                                           | string       |
            | level 3                 | 1 solicitar                                                | string       |
            | language                | ES                                                         | string       |
            | page area               | privada                                                    | string       |
            | page intent             | informacion                                                | string       |
            | channel                 | online                                                     | string       |
            | page instance ID        | de                                                         | string       |
            | page info version       | appVersion                                                 | regexp named |
            | page segment            | personas                                                   | string       |
            | sysEnv                  | app                                                        | string       |
            | business unit           | BBVA Mexico                                                | string       |
            | site app name           | App BBVA Mexico                                            | string       |
            | project name            | Glomo                                                      | string       |
            | device mobile           | si                                                         | string       |
            | user userState          | logado                                                     | string       |
            | user segment global     | 003001                                                     | string       |
            | profile ID              | profileID                                                  | regexp named |
            | user age                | age                                                        | regexp named |
            | user gender             | gender                                                     | regexp named |
            | internal campaign       |                                                            | empty array  |
            | optimization attributes |                                                            | empty array  |

    @ANA_CCPR002
    @analytics
    @web @android @ios
    @MX @backend(artichoke) @vbank
    @web-done
    Scenario: Analytics - Access to the pin request operative of a clean card - PIN SUCCESS PAGE VIEW
        Given a user with the following criteria
            | criteria               |
            | Credit card            |
            | clean card inoperative |
        And the user accesses to the "clean card operative" "credit" card product detail
        And the user accesses the pin request view
        And the user tries to open scanner
        When the user scans the qr code of the "operative" card
        Then the device contains the following variables
            | item                    | value                                                         | type         |
            | analytics               | analytics/glomo_base                                          | json schema  |
            | version DL              | 20250414_5.0                                                  | string       |
            | page name               | app:privada:personas:tarjetas:solicitar nip qr:pagina exitosa | string       |
            | level 1                 | tarjetas                                                      | string       |
            | level 2                 | solicitar nip qr                                              | string       |
            | level 3                 | pagina exitosa                                                | string       |
            | language                | ES                                                            | string       |
            | page area               | privada                                                       | string       |
            | page intent             | informacion                                                   | string       |
            | channel                 | online                                                        | string       |
            | page instance ID        | de                                                            | string       |
            | page info version       | appVersion                                                    | regexp named |
            | page segment            | personas                                                      | string       |
            | sysEnv                  | app                                                           | string       |
            | business unit           | BBVA Mexico                                                   | string       |
            | site app name           | App BBVA Mexico                                               | string       |
            | project name            | Glomo                                                         | string       |
            | device mobile           | si                                                            | string       |
            | user userState          | logado                                                        | string       |
            | user segment global     | 003001                                                        | string       |
            | profile ID              | profileID                                                     | regexp named |
            | user age                | age                                                           | regexp named |
            | user gender             | gender                                                        | regexp named |
            | internal campaign       |                                                               | empty array  |
            | optimization attributes |                                                               | empty array  |

    @ANA_CCPR003
    @analytics
    @web @android @ios
    @MX @backend(artichoke) @vbank @web-done
    Scenario: Analytics - Access to the pin request operative of a clean card - READ ERROR PAGE VIEW
        Given a user with the following criteria
            | criteria               |
            | Credit card            |
            | clean card inoperative |
        And the user accesses to the "clean card operative" "credit" card product detail
        And the user accesses the pin request view
        And the user tries to open scanner
        When the user scans the qr code of the "process error" card
        Then the device contains the following variables
            | item                    | value                                                           | type         |
            | analytics               | analytics/glomo_base                                            | json schema  |
            | version DL              | 20250414_5.0                                                    | string       |
            | page name               | app:privada:personas:tarjetas:solicitar nip qr:error lectura qr | string       |
            | level 1                 | tarjetas                                                        | string       |
            | level 2                 | solicitar nip qr                                                | string       |
            | level 3                 | error lectura qr                                                | string       |
            | error page              | error lectura qr                                                | string       |
            | language                | ES                                                              | string       |
            | page area               | privada                                                         | string       |
            | page intent             | informacion                                                     | string       |
            | channel                 | online                                                          | string       |
            | page instance ID        | de                                                              | string       |
            | page info version       | appVersion                                                      | regexp named |
            | page segment            | personas                                                        | string       |
            | sysEnv                  | app                                                             | string       |
            | business unit           | BBVA Mexico                                                     | string       |
            | site app name           | App BBVA Mexico                                                 | string       |
            | project name            | Glomo                                                           | string       |
            | device mobile           | si                                                              | string       |
            | user userState          | logado                                                          | string       |
            | user segment global     | 003001                                                          | string       |
            | profile ID              | profileID                                                       | regexp named |
            | user age                | age                                                             | regexp named |
            | user gender             | gender                                                          | regexp named |
            | internal campaign       |                                                                 | empty array  |
            | optimization attributes |                                                                 | empty array  |

    @ANA_CCPR004
    @analytics
    @web @android @ios
    @MX @backend(artichoke) @vbank
    @web-done
    Scenario: Analytics - Access to the pin request operative of a clean card - PIN ERROR PAGE VIEW
        Given a user with the following criteria
            | criteria               |
            | Credit card            |
            | clean card inoperative |
        And the user accesses to the "clean card operative visualization error" "credit" card product detail
        And the user accesses the pin request view
        And the user tries to open scanner
        When the user scans the qr code of the "visualization error" card
        Then the device contains the following variables
            | item                    | value                                                               | type         |
            | analytics               | analytics/glomo_base                                                | json schema  |
            | version DL              | 20250414_5.0                                                        | string       |
            | page name               | app:privada:personas:tarjetas:solicitar nip qr:error visualizar nip | string       |
            | level 1                 | tarjetas                                                            | string       |
            | level 2                 | solicitar nip qr                                                    | string       |
            | level 3                 | error visualizar nip                                                | string       |
            | error page              | error visualizar nip                                                | string       |
            | language                | ES                                                                  | string       |
            | page area               | privada                                                             | string       |
            | page intent             | informacion                                                         | string       |
            | channel                 | online                                                              | string       |
            | page instance ID        | de                                                                  | string       |
            | page info version       | appVersion                                                          | regexp named |
            | page segment            | personas                                                            | string       |
            | sysEnv                  | app                                                                 | string       |
            | business unit           | BBVA Mexico                                                         | string       |
            | site app name           | App BBVA Mexico                                                     | string       |
            | project name            | Glomo                                                               | string       |
            | device mobile           | si                                                                  | string       |
            | user userState          | logado                                                              | string       |
            | user segment global     | 003001                                                              | string       |
            | profile ID              | profileID                                                           | regexp named |
            | user age                | age                                                                 | regexp named |
            | user gender             | gender                                                              | regexp named |
            | internal campaign       |                                                                     | empty array  |
            | optimization attributes |                                                                     | empty array  |

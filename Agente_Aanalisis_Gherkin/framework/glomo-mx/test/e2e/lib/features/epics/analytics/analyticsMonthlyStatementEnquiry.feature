@monthlyStatementEnquiryAnalytics
Feature: Analytics - Monthly Statement Enquiry

    @ANA_MSE001
    @analytics
    @MX @web
    @backend(test) @vbank
    @web-done
    Scenario: Monthly Statement Enquiry - page view - accesses Monthly Statement Enquiry Card
        Given a user with the following criteria
            | criteria          |
            | monthly statement |
        When the user accesses to the monthly statement enquiry card screen
        Then the device contains the following variables
            | item                    | value                                                  | type             |
            | analytics               | analytics/glomo_base                                   | json schema      |
            | version DL              | 20250414_5.0                                           | string           |
            | page name               | app:privada:personas:tarjetas:detalle:estado de cuenta | string           |
            | level 1                 | tarjetas                                               | string           |
            | level 2                 | detalle                                                | string           |
            | language                | ES                                                     | string           |
            | page area               | privada                                                | string           |
            | page intent             | informacion                                            | string           |
            | channel                 | online                                                 | string           |
            | page instance ID        | de                                                     | string           |
            | page info version       | appVersion                                             | regexp named     |
            | page segment            | personas                                               | string           |
            | sysEnv                  | app                                                    | string           |
            | business unit           | BBVA Mexico                                            | string           |
            | site app name           | App BBVA Mexico                                        | string           |
            | project name            | Glomo                                                  | string           |
            | device mobile           | si                                                     | string           |
            | user userState          | logado                                                 | string           |
            | user segment global     | 003001                                                 | string           |
            | profile ID              | profileID                                              | regexp named     |
            | user gender             | gender                                                 | regexp named     |
            | user age                | age                                                    | regexp named     |
            | internal campaign       |                                                        | empty array      |
            | optimization attributes |                                                        | empty array      |
            | application             |                                                        | empty str object |
            | products attributes     |                                                        | empty array      |

    @ANA_MSE002
    @analytics
    @MX @web
    @backend(test) @vbank
    @web-done
    Scenario: Monthly Statement Enquiry - page view - accesses Monthly Statement Enquiry Account
        Given a user with the following criteria
            | criteria          |
            | monthly statement |
        When the user accesses to the monthly statement enquiry account screen
        Then the device contains the following variables
            | item                    | value                                                 | type             |
            | analytics               | analytics/glomo_base                                  | json schema      |
            | version DL              | 20250414_5.0                                          | string           |
            | page name               | app:privada:personas:cuentas:detalle:estado de cuenta | string           |
            | level 1                 | cuentas                                               | string           |
            | level 2                 | detalle                                               | string           |
            | language                | ES                                                    | string           |
            | page area               | privada                                               | string           |
            | page intent             | informacion                                           | string           |
            | channel                 | online                                                | string           |
            | page instance ID        | de                                                    | string           |
            | page info version       | appVersion                                            | regexp named     |
            | page segment            | personas                                              | string           |
            | sysEnv                  | app                                                   | string           |
            | business unit           | BBVA Mexico                                           | string           |
            | site app name           | App BBVA Mexico                                       | string           |
            | project name            | Glomo                                                 | string           |
            | device mobile           | si                                                    | string           |
            | user userState          | logado                                                | string           |
            | user segment global     | 003001                                                | string           |
            | profile ID              | profileID                                             | regexp named     |
            | user gender             | gender                                                | regexp named     |
            | user age                | age                                                   | regexp named     |
            | internal campaign       |                                                       | empty array      |
            | optimization attributes |                                                       | empty array      |
            | application             |                                                       | empty str object |
            | products attributes     |                                                       | empty array      |

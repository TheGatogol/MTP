@fundProductDetailAnalytics
Feature: Analytics - Funds Product Detail

    @ANA_PDF001
    @analytics
    @MX
    @web
    @vbank
    @backend(test)
    @web-done
    Scenario: Fund Product Detail - App Page Visit
        Given a user with the following criteria
            | criteria         |
            | investment funds |
            | multiple funds   |
        When the user accesses to fund product detail
        Then the device contains the following variables
            | item                    | value                               | type         |
            | analytics               | analytics/glomo_base                | json schema  |
            | page name               | app:privada:personas:fondos:detalle | string       |
            | level 1                 | fondos                              | string       |
            | level 2                 | detalle                             | string       |
            | language                | ES                                  | string       |
            | page area               | privada                             | string       |
            | page intent             | informacion                         | string       |
            | channel                 | online                              | string       |
            | page instance ID        | de                                  | string       |
            | page info version       | appVersion                          | regexp named |
            | page segment            | personas                            | string       |
            | sysEnv                  | app                                 | string       |
            | business unit           | BBVA Mexico                         | string       |
            | site app name           | App BBVA Mexico                     | string       |
            | project name            | Glomo                               | string       |
            | device mobile           | si                                  | string       |
            | user userState          | logado                              | string       |
            | user segment global     | 003001                              | string       |
            | profile ID              | profileID                           | regexp named |
            | user age                | age                                 | regexp named |
            | user gender             | gender                              | regexp named |
            | internal campaign       |                                     | empty array  |
            | optimization attributes |                                     | empty array  |

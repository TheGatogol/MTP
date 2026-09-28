@monthlyStatementFundsAnalytics @monthlyStatementFunds
Feature: Analytics - Monthly Statement Enquiry Fund

    @ANA_EVENT_MSF001
    @analytics
    @backend(test)
    @MX
    @web @vbank
    @web-done
    @ios @android
    Scenario:  App onclick start  monthly Statement funds
        Given a user with the following criteria
            | criteria       |
            | equity monthly |
            | with statement |
        And the user accesses to fund product detail
        And the analytics interceptor service is initiated
        When the user enter to statement funds
        Then the analytics events contains the following variables
            | item                     | value                                          | type         | event              |
            | analytics                | analytics/glomo_base                           | json schema  | App On Click Start |
            | version DL               | 20250414_5.0                                   | string       | App On Click Start |
            | page name                | app:privada:patrimonial:contrato               | string       | App On Click Start |
            | level 1                  | contrato                                       | string       | App On Click Start |
            | language                 | ES                                             | string       | App On Click Start |
            | page area                | privada                                        | string       | App On Click Start |
            | page intent              | informacion                                    | string       | App On Click Start |
            | channel                  | online                                         | string       | App On Click Start |
            | page instance ID         | de                                             | string       | App On Click Start |
            | page info version        | appVersion                                     | regexp named | App On Click Start |
            | page segment             | patrimonial                                    | string       | App On Click Start |
            | sysEnv                   | app                                            | string       | App On Click Start |
            | business unit            | BBVA Mexico                                    | string       | App On Click Start |
            | site app name            | App BBVA Mexico                                | string       | App On Click Start |
            | project name             | DIY E2E Sales                                  | string       | App On Click Start |
            | device mobile            | si                                             | string       | App On Click Start |
            | user userState           | logado                                         | string       | App On Click Start |
            | user segment global      | 003001                                         | string       | App On Click Start |
            | profile ID               | profileID                                      | regexp named | App On Click Start |
            | user gender              | gender                                         | regexp named | App On Click Start |
            | user age                 | age                                            | regexp named | App On Click Start |
            | global application       | account statement funds                        | string       | App On Click Start |
            | application name         | estado de cuenta fondos                        | string       | App On Click Start |
            | application type         | operativa                                      | string       | App On Click Start |
            | application step         | detalle                                        | string       | App On Click Start |
            | fulfillment model        | online                                         | string       | App On Click Start |
            | product primary category | inversiones                                    | string       | App On Click Start |
            | product subtype          | fondos de inversion                            | string       | App On Click Start |

    @ANA_EVENT_MSF002
    @analytics
    @backend(test)
    @MX
    @web @vbank
    @web-done
    @ios @android
    Scenario:  App page visit  monthly Statement funds
        Given a user with the following criteria
            | criteria       |
            | equity monthly |
            | with statement |
        And the user accesses to fund product detail
        And the analytics interceptor service is initiated
        When the user enter to statement funds
        Then the analytics events contains the following variables
            | item                     | value                                                                              | type         | event          |
            | analytics                | analytics/glomo_base                                                               | json schema  | App Page Visit |
            | version DL               | 20250414_5.0                                                                       | string       | App Page Visit |
            | page name                | app:privada:patrimonial:inversiones:fondos:estado de cuenta:1 seleccion periodo    | string       | App Page Visit |
            | level 1                  | inversiones                                                                        | string       | App Page Visit |
            | level 2                  | fondos                                                                             | string       | App Page Visit |
            | level 3                  | estado de cuenta                                                                   | string       | App Page Visit |
            | level 4                  | 1 seleccion periodo                                                                | string       | App Page Visit |
            | language                 | ES                                                                                 | string       | App Page Visit |
            | page area                | privada                                                                            | string       | App Page Visit |
            | page intent              | informacion                                                                        | string       | App Page Visit |
            | channel                  | online                                                                             | string       | App Page Visit |
            | page instance ID         | de                                                                                 | string       | App Page Visit |
            | page info version        | appVersion                                                                         | regexp named | App Page Visit |
            | page segment             | patrimonial                                                                        | string       | App Page Visit |
            | sysEnv                   | app                                                                                | string       | App Page Visit |
            | business unit            | BBVA Mexico                                                                        | string       | App Page Visit |
            | site app name            | App BBVA Mexico                                                                    | string       | App Page Visit |
            | project name             | DIY E2E Sales                                                                      | string       | App Page Visit |
            | device mobile            | si                                                                                 | string       | App Page Visit |
            | user userState           | logado                                                                             | string       | App Page Visit |
            | user segment global      | 003001                                                                             | string       | App Page Visit |
            | user segment profile     | con estados de cuenta                                                              | string       | App Page Visit |
            | profile ID               | profileID                                                                          | regexp named | App Page Visit |
            | user gender              | gender                                                                             | regexp named | App Page Visit |
            | user age                 | age                                                                                | regexp named | App Page Visit |
            | global application       | account statement funds                                                            | string       | App Page Visit |
            | application name         | estado de cuenta fondos                                                            | string       | App Page Visit |
            | application type         | operativa                                                                          | string       | App Page Visit |
            | application step         | 1 seleccion periodo                                                                | string       | App Page Visit |
            | fulfillment model        | online                                                                             | string       | App Page Visit |
            | product primary category | inversiones                                                                        | string       | App Page Visit |
            | product subtype          | fondos de inversion                                                                | string       | App Page Visit |

    @ANA_EVENT_MSF003
    @analytics
    @backend(test)
    @MX
    @web @vbank
    @web-done
    @ios @android
    Scenario:  App started  monthly Statement funds
        Given a user with the following criteria
            | criteria       |
            | equity monthly |
            | with statement |
        And the user accesses to fund product detail
        And the user enter to statement funds
        And the analytics interceptor service is initiated
        When the user enter to multiple date "2024" statement funds "08"
        Then the analytics events contains the following variables
            | item                     | value                                                                            | type         | event       |
            | analytics                | analytics/glomo_base                                                             | json schema  | App Started |
            | version DL               | 20250414_5.0                                                                     | string       | App Started |
            | page name                | app:privada:patrimonial:inversiones:fondos:estado de cuenta:1 seleccion periodo  | string       | App Started |
            | level 1                  | inversiones                                                                      | string       | App Started |
            | level 2                  | fondos                                                                           | string       | App Started |
            | level 3                  | estado de cuenta                                                                 | string       | App Started |
            | level 4                  | 1 seleccion periodo                                                              | string       | App Started |
            | language                 | ES                                                                               | string       | App Started |
            | page area                | privada                                                                          | string       | App Started |
            | page intent              | informacion                                                                      | string       | App Started |
            | channel                  | online                                                                           | string       | App Started |
            | page instance ID         | de                                                                               | string       | App Started |
            | page info version        | appVersion                                                                       | regexp named | App Started |
            | page segment             | patrimonial                                                                      | string       | App Started |
            | sysEnv                   | app                                                                              | string       | App Started |
            | business unit            | BBVA Mexico                                                                      | string       | App Started |
            | site app name            | App BBVA Mexico                                                                  | string       | App Started |
            | project name             | DIY E2E Sales                                                                    | string       | App Started |
            | device mobile            | si                                                                               | string       | App Started |
            | user userState           | logado                                                                           | string       | App Started |
            | user segment global      | 003001                                                                           | string       | App Started |
            | profile ID               | profileID                                                                        | regexp named | App Started |
            | user gender              | gender                                                                           | regexp named | App Started |
            | user age                 | age                                                                              | regexp named | App Started |
            | global application       | account statement funds                                                          | string       | App Started |
            | application name         | estado de cuenta fondos                                                          | string       | App Started |
            | application type         | operativa                                                                        | string       | App Started |
            | application step         | otros estados de cuenta                                                          | string       | App Started |
            | fulfillment model        | online                                                                           | string       | App Started |
            | product primary category | inversiones                                                                      | string       | App Started |
            | product subtype          | fondos de inversion                                                              | string       | App Started |

    @ANA_EVENT_MSF004
    @analytics
    @backend(test)
    @MX
    @web @vbank
    @web-done
    @ios @android
    Scenario:  App step otp monthly Statement funds
        Given a user with the following criteria
            | criteria       |
            | equity monthly |
            | with statement |
        And the user accesses to fund product detail
        And the user enter to statement funds
        And the analytics interceptor service is initiated
        When the user enter to multiple date "2024" statement funds "08"
        Then the analytics events contains the following variables
            | item                     | value                                                                            | type         | event       |
            | analytics                | analytics/glomo_base                                                             | json schema  | App Step 2 |
            | version DL               | 20250414_5.0                                                                     | string       | App Step 2 |
            | page name                | app:privada:patrimonial:inversiones:fondos:estado de cuenta:2 otp                | string       | App Step 2 |
            | level 1                  | inversiones                                                                      | string       | App Step 2 |
            | level 2                  | fondos                                                                           | string       | App Step 2 |
            | level 3                  | estado de cuenta                                                                 | string       | App Step 2 |
            | level 4                  | 2 otp                                                                            | string       | App Step 2 |
            | language                 | ES                                                                               | string       | App Step 2 |
            | page area                | privada                                                                          | string       | App Step 2 |
            | page intent              | informacion                                                                      | string       | App Step 2 |
            | channel                  | online                                                                           | string       | App Step 2 |
            | page instance ID         | de                                                                               | string       | App Step 2 |
            | page info version        | appVersion                                                                       | regexp named | App Step 2 |
            | page segment             | patrimonial                                                                      | string       | App Step 2 |
            | sysEnv                   | app                                                                              | string       | App Step 2 |
            | business unit            | BBVA Mexico                                                                      | string       | App Step 2 |
            | site app name            | App BBVA Mexico                                                                  | string       | App Step 2 |
            | project name             | DIY E2E Sales                                                                    | string       | App Step 2 |
            | device mobile            | si                                                                               | string       | App Step 2 |
            | user userState           | logado                                                                           | string       | App Step 2 |
            | user segment global      | 003001                                                                           | string       | App Step 2 |
            | user segment profile     | con estados de cuenta                                                            | string       | App Step 2 |
            | profile ID               | profileID                                                                        | regexp named | App Step 2 |
            | user gender              | gender                                                                           | regexp named | App Step 2 |
            | user age                 | age                                                                              | regexp named | App Step 2 |
            | global application       | account statement funds                                                          | string       | App Step 2 |
            | application name         | estado de cuenta fondos                                                          | string       | App Step 2 |
            | application type         | operativa                                                                        | string       | App Step 2 |
            | application step         | 2 otp                                                                            | string       | App Step 2 |
            | fulfillment model        | online                                                                           | string       | App Step 2 |
            | product primary category | inversiones                                                                      | string       | App Step 2 |
            | product subtype          | fondos de inversion                                                              | string       | App Step 2 |
            | custom fields            | firma:token                                                                      | string       | App Step 2 |

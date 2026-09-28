@equityDetailAnalytics
Feature: Analytics - Equity Detail

    @ANA_ED001
    @analytics
    @MX @web @android @ios
    @backend(test) @vbank
    @web-done
    Scenario: Equity Detail - page view - accesses equity
        Given a user with the following criteria
            | criteria |
            | equity   |
        When the user accesses to equity
        Then the device contains the following variables
            | item                    | value                            | type             |
            | analytics               | analytics/glomo_base             | json schema      |
            | version DL              | 20250414_5.0                     | string           |
            | page name               | app:privada:patrimonial:contrato | string           |
            | level 1                 | contrato                         | string           |
            | language                | ES                               | string           |
            | page area               | privada                          | string           |
            | page intent             | informacion                      | string           |
            | channel                 | online                           | string           |
            | page instance ID        | de                               | string           |
            | page info version       | appVersion                       | regexp named     |
            | page segment            | patrimonial                      | string           |
            | sysEnv                  | app                              | string           |
            | business unit           | BBVA Mexico                      | string           |
            | site app name           | App BBVA Mexico                  | string           |
            | project name            | Glomo                            | string           |
            | device mobile           | si                               | string           |
            | user userState          | logado                           | string           |
            | user segment global     | 003001                           | string           |
            | profile ID              | profileID                        | regexp named     |
            | user age                | age                              | regexp named     |
            | user gender             | gender                           | regexp named     |
            | internal campaign       |                                  | empty array      |
            | optimization attributes |                                  | empty array      |
            | application             |                                  | empty str object |
            | products attributes     |                                  | empty array      |

    @ANA_ED002
    @analytics
    @MX @web @android @ios
    @backend(test) @vbank
    @web-done
    Scenario: Equity Detail - page view - more info
        Given a user with the following criteria
            | criteria |
            | equity   |
        When the user accesses to equity
        And the analytics interceptor service is initiated
        And the user accesses to equity detail
        Then the analytics events contains the following variables
            | item                    | value                                    | type             | event     |
            | analytics               | analytics/glomo_base                     | json schema      | Page View |
            | version DL              | 20250414_5.0                             | string           | Page View |
            | page name               | app:privada:patrimonial:contrato:detalle | string           | Page View |
            | level 1                 | contrato                                 | string           | Page View |
            | level 2                 | detalle                                  | string           | Page View |
            | language                | ES                                       | string           | Page View |
            | page area               | privada                                  | string           | Page View |
            | page intent             | informacion                              | string           | Page View |
            | channel                 | online                                   | string           | Page View |
            | page instance ID        | de                                       | string           | Page View |
            | page info version       | appVersion                               | regexp named     | Page View |
            | page segment            | patrimonial                              | string           | Page View |
            | sysEnv                  | app                                      | string           | Page View |
            | business unit           | BBVA Mexico                              | string           | Page View |
            | site app name           | App BBVA Mexico                          | string           | Page View |
            | project name            | Glomo                                    | string           | Page View |
            | device mobile           | si                                       | string           | Page View |
            | user userState          | logado                                   | string           | Page View |
            | user segment global     | 003001                                   | string           | Page View |
            | profile ID              | profileID                                | regexp named     | Page View |
            | user age                | age                                      | regexp named     | Page View |
            | user gender             | gender                                   | regexp named     | Page View |
            | internal campaign       |                                          | empty array      | Page View |
            | optimization attributes |                                          | empty array      | Page View |
            | application             |                                          | empty str object | Page View |
            | products attributes     |                                          | empty array      | Page View |

    # To record this scenario you must:
    # that the private banking portfolios
    # API fails
    @ANA_ED003
    @analytics
    @MX @web @android @ios
    @backend(test) @vbank @vbank-modified
    @web-done
    Scenario: Equity Detail - Error page view - accesses equity
        Given a user with the following criteria
            | criteria |
            | equity   |
        When the user accesses to equity
        Then the device contains the following variables
            | item                    | value                                              | type             |
            | analytics               | analytics/glomo_base                               | json schema      |
            | version DL              | 20250414_5.0                                       | string           |
            | page name               | app:privada:patrimonial:error informacion contrato | string           |
            | level 1                 | error informacion contrato                         | string           |
            | language                | ES                                                 | string           |
            | page area               | privada                                            | string           |
            | page intent             | informacion                                        | string           |
            | channel                 | online                                             | string           |
            | page instance ID        | de                                                 | string           |
            | page info version       | appVersion                                         | regexp named     |
            | page segment            | patrimonial                                        | string           |
            | sysEnv                  | app                                                | string           |
            | business unit           | BBVA Mexico                                        | string           |
            | site app name           | App BBVA Mexico                                    | string           |
            | project name            | Glomo                                              | string           |
            | error page              | error informacion contrato                         | string           |
            | device mobile           | si                                                 | string           |
            | user userState          | logado                                             | string           |
            | user segment global     | 003001                                             | string           |
            | profile ID              | profileID                                          | regexp named     |
            | user age                | age                                                | regexp named     |
            | user gender             | gender                                             | regexp named     |
            | internal campaign       |                                                    | empty array      |
            | optimization attributes |                                                    | empty array      |
            | application             |                                                    | empty str object |
            | products attributes     |                                                    | empty array      |

    # To record this scenario you must:
    # It is only possible by accesing
    # By url navigation
    @ANA_ED004
    @analytics
    @MX @web @android @ios
    @backend(test) @vbank
    @web-done
    Scenario: Equity Detail - Error page view - more info
        Given a user with the following criteria
            | criteria |
            | equity   |
        When the user accesses to equity detail error
        Then the device contains the following variables
            | item                    | value                                          | type             |
            | analytics               | analytics/glomo_base                           | json schema      |
            | version DL              | 20250414_5.0                                   | string           |
            | page name               | app:privada:patrimonial:error detalle contrato | string           |
            | level 1                 | error detalle contrato                         | string           |
            | language                | ES                                             | string           |
            | page area               | privada                                        | string           |
            | page intent             | informacion                                    | string           |
            | channel                 | online                                         | string           |
            | page instance ID        | de                                             | string           |
            | page info version       | appVersion                                     | regexp named     |
            | page segment            | patrimonial                                    | string           |
            | sysEnv                  | app                                            | string           |
            | business unit           | BBVA Mexico                                    | string           |
            | site app name           | App BBVA Mexico                                | string           |
            | project name            | Glomo                                          | string           |
            | error page              | error detalle contrato                         | string           |
            | device mobile           | si                                             | string           |
            | user userState          | logado                                         | string           |
            | user segment global     | 003001                                         | string           |
            | profile ID              | profileID                                      | regexp named     |
            | user age                | age                                            | regexp named     |
            | user gender             | gender                                         | regexp named     |
            | internal campaign       |                                                | empty array      |
            | optimization attributes |                                                | empty array      |
            | application             |                                                | empty str object |
            | products attributes     |                                                | empty array      |

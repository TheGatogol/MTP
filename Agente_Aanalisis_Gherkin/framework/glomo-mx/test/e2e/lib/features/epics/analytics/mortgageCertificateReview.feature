@mortgageCertificateReviewAnalytics
Feature: Analytics - Mortgage Certificate Review

    @ANA_MCR001
    @analytics
    @backend(test)
    @MX
    @web @vbank
    @web-done
    Scenario: Mortgage Certificate Review - Mortgage Certificate
        Given a user with the following criteria
            | criteria                     |
            | pending mortgage certificate |
        When the user accesses to mortgage certificate card
        Then the device contains the following variables
            | item                    | value                                                           | type             |
            | analytics               | analytics/glomo_base                                            | json schema      |
            | version DL              | 20250414_5.0                                                    | string           |
            | page name               | app:privada:personas:prestamos:certificado hipotecario          | string           |
            | level 1                 | prestamos                                                       | string           |
            | level 2                 | certificado hipotecario                                         | string           |
            | language                | ES                                                              | string           |
            | page area               | privada                                                         | string           |
            | page intent             | informacion                                                     | string           |
            | channel                 | online                                                          |  string          |
            | page instance ID        | de                                                              | string           |
            | page info version       | appVersion                                                      | regexp named     |
            | page segment            | personas                                                        | string           |
            | sysEnv                  | app                                                             | string           |
            | business unit           | BBVA Mexico                                                     | string           |
            | site app name           | App BBVA Mexico                                                 | string           |
            | project name            | Glomo                                                           | string           |
            | device mobile           | si                                                              | string           |
            | user userState          | logado                                                          | string           |
            | user segment global     | 003001                                                          | string           |
            | profile ID              | profileID                                                       | regexp named     |
            | user gender             | gender                                                          | regexp named     |
            | user age                | age                                                             | regexp named     |
            | internal campaign       |                                                                 | empty array      |
            | optimization attributes |                                                                 | empty array      |
            | application             |                                                                 | empty str object |
            | products attributes     |                                                                 | empty array      |

    @ANA_MCR002
    @analytics
    @backend(test)
    @MX
    @web @vbank
    @web-done
    Scenario: Mortgage Certificate Review - View Mortgage Certificate
        Given a user with the following criteria
            | criteria                     |
            | pending mortgage certificate |
        When the user accesses to mortgage certificate card
        And the user views its certificate
        Then the device contains the following variables
            | item                    | value                                                           | type             |
            | analytics               | analytics/glomo_base                                            | json schema      |
            | version DL              | 20250414_5.0                                                    | string           |
            | page name               | app:privada:personas:prestamos:certificado hipotecario          | string           |
            | level 1                 | prestamos                                                       | string           |
            | level 2                 | certificado hipotecario                                         | string           |
            | language                | ES                                                              | string           |
            | page area               | privada                                                         | string           |
            | page intent             | informacion                                                     | string           |
            | channel                 | online                                                          |  string          |
            | page instance ID        | de                                                              | string           |
            | page info version       | appVersion                                                      | regexp named     |
            | page segment            | personas                                                        | string           |
            | sysEnv                  | app                                                             | string           |
            | business unit           | BBVA Mexico                                                     | string           |
            | site app name           | App BBVA Mexico                                                 | string           |
            | project name            | Glomo                                                           | string           |
            | link name               | consultar certificado hipotecario                               | string           |
            | device mobile           | si                                                              | string           |
            | user userState          | logado                                                          | string           |
            | user segment global     | 003001                                                          | string           |
            | profile ID              | profileID                                                       | regexp named     |
            | user gender             | gender                                                          | regexp named     |
            | user age                | age                                                             | regexp named     |
            | internal campaign       |                                                                 | empty array      |
            | optimization attributes |                                                                 | empty array      |
            | application             |                                                                 | empty str object |
            | products attributes     |                                                                 | empty array      |

    @ANA_MCR003
    @analytics
    @backend(test)
    @MX
    @web @vbank
    @web-done
    Scenario: Mortgage Certificate Review - Certificate Cancellation
        Given a user with the following criteria
            | criteria                     |
            | pending mortgage certificate |
        When the user accesses to mortgage certificate card
        And the certificate is cancel by the user
        Then the device contains the following variables
            | item                    | value                                                                              | type             |
            | analytics               | analytics/glomo_base                                                               | json schema      |
            | version DL              | 20250414_5.0                                                                       | string           |
            | page name               | app:privada:personas:prestamos:certificado hipotecario:cancelar certificado        | string           |
            | level 1                 | prestamos                                                                          | string           |
            | level 2                 | certificado hipotecario                                                            | string           |
            | level 3                 | cancelar certificado                                                               | string           |
            | language                | ES                                                                                 | string           |
            | page area               | privada                                                                            | string           |
            | page intent             | informacion                                                                        | string           |
            | channel                 | online                                                                             | string           |
            | page instance ID        | de                                                                                 | string           |
            | page info version       | appVersion                                                                         | regexp named     |
            | page segment            | personas                                                                           | string           |
            | sysEnv                  | app                                                                                | string           |
            | business unit           | BBVA Mexico                                                                        | string           |
            | site app name           | App BBVA Mexico                                                                    | string           |
            | project name            | Glomo                                                                              | string           |
            | device mobile           | si                                                                                 | string           |
            | user userState          | logado                                                                             | string           |
            | user segment global     | 003001                                                                             | string           |
            | profile ID              | profileID                                                                          | regexp named     |
            | user gender             | gender                                                                             | regexp named     |
            | user age                | age                                                                                | regexp named     |
            | internal campaign       |                                                                                    | empty array      |
            | optimization attributes |                                                                                    | empty array      |
            | application             |                                                                                    | empty str object |
            | products attributes     |                                                                                    | empty array      |

    @ANA_MCR004
    @analytics
    @backend(test)
    @MX
    @web @vbank
    @web-done
    Scenario: Mortgage Certificate Review - Cancellation Success
        Given a user with the following criteria
            | criteria                     |
            | pending mortgage certificate |
        When the user accesses to mortgage certificate card
        And  the certificate is definitively canceled by the user "successfully"
        Then the device contains the following variables
            | item                    | value                                                                              | type             |
            | analytics               | analytics/glomo_base                                                               | json schema      |
            | version DL              | 20250414_5.0                                                                       | string           |
            | page name               | app:privada:personas:prestamos:certificado hipotecario:cancelacion exitosa         | string           |
            | level 1                 | prestamos                                                                          | string           |
            | level 2                 | certificado hipotecario                                                            | string           |
            | level 3                 | cancelacion exitosa                                                                | string           |
            | language                | ES                                                                                 | string           |
            | page area               | privada                                                                            | string           |
            | page intent             | informacion                                                                        | string           |
            | channel                 | online                                                                             | string           |
            | page instance ID        | de                                                                                 | string           |
            | page info version       | appVersion                                                                         | regexp named     |
            | page segment            | personas                                                                           | string           |
            | sysEnv                  | app                                                                                | string           |
            | business unit           | BBVA Mexico                                                                        | string           |
            | site app name           | App BBVA Mexico                                                                    | string           |
            | project name            | Glomo                                                                              | string           |
            | device mobile           | si                                                                                 | string           |
            | user userState          | logado                                                                             | string           |
            | user segment global     | 003001                                                                             | string           |
            | profile ID              | profileID                                                                          | regexp named     |
            | user gender             | gender                                                                             | regexp named     |
            | user age                | age                                                                                | regexp named     |
            | internal campaign       |                                                                                    | empty array      |
            | optimization attributes |                                                                                    | empty array      |
            | application             |                                                                                    | empty str object |
            | products attributes     |                                                                                    | empty array      |

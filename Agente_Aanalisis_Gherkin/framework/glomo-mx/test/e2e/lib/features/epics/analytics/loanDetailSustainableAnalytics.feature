@loanDetailSustainableAnalytics
Feature: Loan Payment Sustainable - Analytics

    @ANA_EVENT_LDS001
    @analytics
    @web @ios @android
    @vbank @backend(test)
    @MX
    @web-done
    Scenario: Validate The user access the product detail Sustainable - App Page Visit
        Given a user with the following criteria
            | criteria                  |
            | sustainability loan       |
        When the user accesses to loan
        And the analytics interceptor service is initiated
        And the user accesses to the more information modal
        Then the analytics events contains the following variables
            | item                     | value                                                                       | type         | event     |
            | analytics                | analytics/glomo_base                                                        | json schema  | Page View |
            | version dl               | 20250414_5.0                                                                | string       | Page View |
            | page name                | app:privada:personas:prestamos:detalle:mejorar tasa                         | string       | Page View |
            | level 1                  | prestamos                                                                   | string       | Page View |
            | level 2                  | detalle                                                                     | string       | Page View |
            | level 3                  | mejorar tasa                                                                | string       | Page View |
            | language                 | ES                                                                          | string       | Page View |
            | page area                | privada                                                                     | string       | Page View |
            | page intent              | informacion                                                                 | string       | Page View |
            | channel                  | online                                                                      | string       | Page View |
            | page instance ID         | de                                                                          | string       | Page View |
            | page info version        | appVersion                                                                  | regexp named | Page View |
            | page segment             | personas                                                                    | string       | Page View |
            | sysEnv                   | app                                                                         | string       | Page View |
            | business unit            | BBVA Mexico                                                                 | string       | Page View |
            | site app name            | App BBVA Mexico                                                             | string       | Page View |
            | project name             | Glomo                                                                       | string       | Page View |
            | user userState           | logado                                                                      | string       | Page View |
            | user segment global      | 003001                                                                      | string       | Page View |
            | profile ID               | profileID                                                                   | regexp named | Page View |

    @ANA_EVENT_LDS002
    @analytics
    @web @ios @android
    @vbank @backend(test)
    @MX
    @web-done
    Scenario: Validate page visit sustainability - Internal Link
        Given a user with the following criteria
            | criteria                  |
            | sustainability loan       |
        And the user accesses to loan
        And the analytics interceptor service is initiated
        When the user accesses to upload and send files
        Then the analytics events contains the following variables
            | item                     | value                                                                       | type         | event         |
            | analytics                | analytics/glomo_base                                                        | json schema  | Internal Link |
            | version dl               | 20250414_5.0                                                                | string       | Internal Link |
            | page name                | app:privada:personas:prestamos:detalle                                      | string       | Internal Link |
            | level 1                  | prestamos                                                                   | string       | Internal Link |
            | level 2                  | detalle                                                                     | string       | Internal Link |
            | link name                | subir y enviar facturas                                                     | string       | Internal Link |
            | page area                | privada                                                                     | string       | Internal Link |
            | page intent              | informacion                                                                 | string       | Internal Link |
            | channel                  | online                                                                      | string       | Internal Link |
            | page instance ID         | de                                                                          | string       | Internal Link |
            | page info version        | appVersion                                                                  | regexp named | Internal Link |
            | page segment             | personas                                                                    | string       | Internal Link |
            | sysEnv                   | app                                                                         | string       | Internal Link |
            | business unit            | BBVA Mexico                                                                 | string       | Internal Link |
            | site app name            | App BBVA Mexico                                                             | string       | Internal Link |
            | project name             | Glomo                                                                       | string       | Internal Link |
            | user userState           | logado                                                                      | string       | Internal Link |
            | user segment global      | 003001                                                                      | string       | Internal Link |
            | profile ID               | profileID                                                                   | regexp named | Internal Link |

    @ANA_EVENT_LDS003
    @analytics
    @web @ios @android
    @vbank @backend(test)
    @MX
    @web-done
    Scenario: Validate modal sustantibility loan - Page View
        Given a user with the following criteria
            | criteria                  |
            | sustainability loan       |
        And the user accesses to loan
        And the analytics interceptor service is initiated
        When the user accesses to upload and send files
        Then the analytics events contains the following variables
            | item                     | value                                                                       | type         | event     |
            | analytics                | analytics/glomo_base                                                        | json schema  | Page View |
            | version dl               | 20250414_5.0                                                                | string       | Page View |
            | page name                | app:privada:personas:prestamos:subir y enviar facturas                      | string       | Page View |
            | level 1                  | prestamos                                                                   | string       | Page View |
            | level 2                  | subir y enviar facturas                                                     | string       | Page View |
            | language                 | ES                                                                          | string       | Page View |
            | page area                | privada                                                                     | string       | Page View |
            | page intent              | informacion                                                                 | string       | Page View |
            | channel                  | online                                                                      | string       | Page View |
            | page instance ID         | de                                                                          | string       | Page View |
            | page info version        | appVersion                                                                  | regexp named | Page View |
            | page segment             | personas                                                                    | string       | Page View |
            | sysEnv                   | app                                                                         | string       | Page View |
            | business unit            | BBVA Mexico                                                                 | string       | Page View |
            | site app name            | App BBVA Mexico                                                             | string       | Page View |
            | project name             | Glomo                                                                       | string       | Page View |
            | user userState           | logado                                                                      | string       | Page View |
            | user segment global      | 003001                                                                      | string       | Page View |
            | profile ID               | profileID                                                                   | regexp named | Page View |

    @ANA_EVENT_LDS004
    @analytics
    @web @ios @android
    @vbank @backend(test)
    @MX
    @web-done
    Scenario: Validate the user access upload and send file - Page View
        Given a user with the following criteria
            | criteria                  |
            | sustainability loan       |
        And the user accesses to loan
        And the user accesses to upload and send files
        And the analytics interceptor service is initiated
        When the user continues from onboarding sustainable
        Then the analytics events contains the following variables
            | item                     | value                                                                       | type         | event     |
            | analytics                | analytics/glomo_base                                                        | json schema  | Page View |
            | version dl               | 20250414_5.0                                                                | string       | Page View |
            | page name                | app:privada:personas:prestamos:subir y enviar facturas:elegir archivo       | string       | Page View |
            | level 1                  | prestamos                                                                   | string       | Page View |
            | level 2                  | subir y enviar facturas                                                     | string       | Page View |
            | level 3                  | elegir archivo                                                              | string       | Page View |
            | language                 | ES                                                                          | string       | Page View |
            | page area                | privada                                                                     | string       | Page View |
            | page intent              | informacion                                                                 | string       | Page View |
            | channel                  | online                                                                      | string       | Page View |
            | page instance ID         | de                                                                          | string       | Page View |
            | page info version        | appVersion                                                                  | regexp named | Page View |
            | page segment             | personas                                                                    | string       | Page View |
            | sysEnv                   | app                                                                         | string       | Page View |
            | business unit            | BBVA Mexico                                                                 | string       | Page View |
            | site app name            | App BBVA Mexico                                                             | string       | Page View |
            | project name             | Glomo                                                                       | string       | Page View |
            | user userState           | logado                                                                      | string       | Page View |
            | user segment global      | 003001                                                                      | string       | Page View |
            | profile ID               | profileID                                                                   | regexp named | Page View |

    @ANA_EVENT_LDS005
    @analytics
    @web @ios @android
    @vbank @backend(test)
    @MX
    @web-done
    Scenario: Validate the user send files - Internal Link
        Given a user with the following criteria
            | criteria                  |
            | sustainability loan       |
        And the user accesses to upload and send files
        And the user continues to send invoices with files
        And the analytics interceptor service is initiated
        When the user selects upload file
        Then the analytics events contains the following variables
            | item                     | value                                                                             | type         | event          |
            | analytics                | analytics/glomo_base                                                              | json schema  | Internal Link  |
            | version dl               | 20250414_5.0                                                                      | string       | Internal Link  |
            | page name                | app:privada:personas:prestamos:subir y enviar facturas:elegir archivo             | string       | Internal Link  |
            | level 1                  | prestamos                                                                         | string       | Internal Link  |
            | level 2                  | subir y enviar facturas                                                           | string       | Internal Link  |
            | level 3                  | elegir archivo                                                                    | string       | Internal Link  |
            | link name                | subir otra factura                                                                | string       | Internal Link  |
            | channel                  | online                                                                            | string       | Internal Link  |
            | page info version        | appVersion                                                                        | regexp named | Internal Link  |
            | page segment             | personas                                                                          | string       | Internal Link  |
            | sysEnv                   | app                                                                               | string       | Internal Link  |
            | business unit            | BBVA Mexico                                                                       | string       | Internal Link  |
            | site app name            | App BBVA Mexico                                                                   | string       | Internal Link  |
            | user userState           | logado                                                                            | string       | Internal Link  |
            | profile ID               | profileID                                                                         | regexp named | Internal Link  |

    @ANA_LDS006
    @analytics
    @web @ios @android
    @vbank @backend(test)
    @MX
    @web-done
    Scenario: Validate the user access modal error size - Page View
        Given a user with the following criteria
            | criteria                  |
            | sustainability loan       |
        And the user accesses to loan
        And the user accesses to upload and send files
        When the user continues to send invoices with files
        Then the device contains the following variables
            | item                     | value                                                                                | type         |
            | analytics                | analytics/glomo_base                                                                 | json schema  |
            | version dl               | 20250414_5.0                                                                         | string       |
            | page name                | app:privada:personas:prestamos:subir y enviar facturas:error tamano archivo superado | string       |
            | level 1                  | prestamos                                                                            | string       |
            | level 2                  | subir y enviar facturas                                                              | string       |
            | level 3                  | error tamano archivo superado                                                        | string       |
            | error page               | error tamano archivo superado                                                        | string       |
            | language                 | ES                                                                                   | string       |
            | page area                | privada                                                                              | string       |
            | page intent              | informacion                                                                          | string       |
            | channel                  | online                                                                               | string       |
            | page instance ID         | de                                                                                   | string       |
            | page info version        | appVersion                                                                           | regexp named |
            | page segment             | personas                                                                             | string       |
            | sysEnv                   | app                                                                                  | string       |
            | business unit            | BBVA Mexico                                                                          | string       |
            | site app name            | App BBVA Mexico                                                                      | string       |
            | project name             | Glomo                                                                                | string       |
            | user userState           | logado                                                                               | string       |
            | profile ID               | profileID                                                                            | regexp named |

    @ANA_EVENT_LDS007
    @analytics
    @web @ios @android
    @vbank @backend(test)
    @MX
    @web-done
    Scenario: Validate the user access review information - Page View
        Given a user with the following criteria
            | criteria                  |
            | sustainability loan       |
        And the user accesses to loan
        And the user accesses to upload and send files
        And the user continues to send invoices with files
        And the analytics interceptor service is initiated
        When the user accesses to the review information modal
        Then the analytics events contains the following variables
            | item                     | value                                                                             | type         | event      |
            | analytics                | analytics/glomo_base                                                              | json schema  | Page View  |
            | version dl               | 20250414_5.0                                                                      | string       | Page View  |
            | page name                | app:privada:personas:prestamos:subir y enviar facturas:verificando informacion    | string       | Page View  |
            | level 1                  | prestamos                                                                         | string       | Page View  |
            | level 2                  | subir y enviar facturas                                                           | string       | Page View  |
            | level 3                  | verificando informacion                                                           | string       | Page View  |
            | language                 | ES                                                                                | string       | Page View  |
            | page area                | privada                                                                           | string       | Page View  |
            | page intent              | informacion                                                                       | string       | Page View  |
            | channel                  | online                                                                            | string       | Page View  |
            | page instance ID         | de                                                                                | string       | Page View  |
            | page info version        | appVersion                                                                        | regexp named | Page View  |
            | page segment             | personas                                                                          | string       | Page View  |
            | sysEnv                   | app                                                                               | string       | Page View  |
            | business unit            | BBVA Mexico                                                                       | string       | Page View  |
            | site app name            | App BBVA Mexico                                                                   | string       | Page View  |
            | project name             | Glomo                                                                             | string       | Page View  |
            | user userState           | logado                                                                            | string       | Page View  |
            | profile ID               | profileID                                                                         | regexp named | Page View  |

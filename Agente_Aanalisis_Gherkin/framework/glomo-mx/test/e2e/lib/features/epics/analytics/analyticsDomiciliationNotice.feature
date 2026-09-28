@analyticsDomiciliationNotice
Feature: Analytics - Domiciliation Notice Operations

    @ANA_DNO001
    @analytics
    @ios @android @web @web-done
    @MX @backend(test) @vbank
    Scenario: Nofitication detail - Page View
        Given a user with the following criteria
            | criteria             |
            | direct debit         |
            | domiciliation notice |
        When the user accesses "domiciliation notice" detail notification
        Then the device contains the following variables
            | item                    | value                                                            | type             |
            | analytics               | analytics/glomo_base                                             | json schema      |
            | version DL              | 20250414_5.0                                                     | string           |
            | page name               | app:privada:personas:notificaciones:avisos informativos:detalle  | string           |
            | level 1                 | notificaciones                                                   | string           |
            | level 2                 | avisos informativos                                              | string           |
            | language                | ES                                                               | string           |
            | page area               | privada                                                          | string           |
            | page intent             | informacion                                                      | string           |
            | channel                 | online                                                           | string           |
            | page instance ID        | de                                                               | string           |
            | page info version       | appVersion                                                       | regexp named     |
            | page segment            | personas                                                         | string           |
            | sysEnv                  | app                                                              | string           |
            | business unit           | BBVA Mexico                                                      | string           |
            | site app name           | App BBVA Mexico                                                  | string           |
            | project name            | Glomo                                                            | string           |
            | device mobile           | si                                                               | string           |
            | user segment global     | 003001                                                           | string           |
            | user age                | age                                                              | regexp named     |
            | internal campaign       |                                                                  | empty array      |
            | optimization attributes |                                                                  | empty array      |
            | products attributes     |                                                                  | empty array      |

    @ANA_DNO002
    @analytics
    @ios @android @web @web-done
    @MX @backend(test) @vbank
    Scenario: Confirm or rejected direct debit message - Page View
        Given a user with the following criteria
            | criteria             |
            | direct debit         |
            | domiciliation notice |
        When the user select confirm or rejected a notification
        Then the device contains the following variables
            | item                    | value                                                      | type             |
            | analytics               | analytics/glomo_base                                       | json schema      |
            | version DL              | 20250414_5.0                                               | string           |
            | page name               | app:privada:personas:confirma o rechazar:cargo domiciliado | string           |
            | level 1                 | confirma o rechazar                                        | string           |
            | level 2                 | cargo domiciliado                                          | string           |
            | language                | ES                                                         | string           |
            | page area               | privada                                                    | string           |
            | page intent             | informacion                                                | string           |
            | channel                 | online                                                     | string           |
            | page instance ID        | de                                                         | string           |
            | page info version       | appVersion                                                 | regexp named     |
            | page segment            | personas                                                   | string           |
            | sysEnv                  | app                                                        | string           |
            | business unit           | BBVA Mexico                                                | string           |
            | site app name           | App BBVA Mexico                                            | string           |
            | project name            | Glomo                                                      | string           |
            | device mobile           | si                                                         | string           |
            | user segment global     | 003001                                                     | string           |
            | user age                | age                                                        | regexp named     |
            | internal campaign       |                                                            | empty array      |
            | optimization attributes |                                                            | empty array      |
            | products attributes     |                                                            | empty array      |
            | custom fields           | cargo a producto:tarjeta debito                            | string           |

    @ANA_DNO003
    @analytics
    @ios @android @web @web-done
    @MX @backend(test) @vbank
    Scenario: Confirm charge - Page View
        Given a user with the following criteria
            | criteria                     |
            | direct debit                 |
            | domiciliation confirm charge |
        And the user select confirm or rejected a notification
        When the user completes the direct debit successfully
        Then the device contains the following variables
            | item                    | value                                                                       | type         |
            | analytics               | analytics/glomo_base                                                        | json schema  |
            | version DL              | 20250414_5.0                                                                | string       |
            | page name               | app:privada:personas:confirma o rechazar:cargo domiciliado:cargo confirmado | string       |
            | level 1                 | confirma o rechazar                                                         | string       |
            | level 2                 | cargo domiciliado                                                           | string       |
            | level 3                 | cargo confirmado                                                            | string       |
            | language                | ES                                                                          | string       |
            | page area               | privada                                                                     | string       |
            | page intent             | informacion                                                                 | string       |
            | channel                 | online                                                                      | string       |
            | page instance ID        | de                                                                          | string       |
            | page info version       | appVersion                                                                  | regexp named |
            | page segment            | personas                                                                    | string       |
            | sysEnv                  | app                                                                         | string       |
            | business unit           | BBVA Mexico                                                                 | string       |
            | site app name           | App BBVA Mexico                                                             | string       |
            | project name            | Glomo                                                                       | string       |
            | device mobile           | si                                                                          | string       |
            | user segment global     | 003001                                                                      | string       |
            | user age                | age                                                                         | regexp named |
            | internal campaign       |                                                                             | empty array  |
            | optimization attributes |                                                                             | empty array  |
            | products attributes     |                                                                             | empty array  |
            | custom fields           | cargo a producto:tarjeta debito                                             | string       |

    @ANA_DNO004
    @analytics
    @ios @android @web
    @MX @backend(test) @vbank @manual @JIRA.GLOMOMX-183460
    Scenario: Rejected charge - Page View
        Given a user with the following criteria
            | criteria                      |
            | direct debit                  |
            | domiciliation rejected charge |
        And the user select confirm or rejected a notification
        When the user declines direct debit notice
        Then the device contains the following variables
            | item                    | value                                                                      | type         |
            | analytics               | analytics/glomo_base                                                       | json schema  |
            | version DL              | 20250414_5.0                                                               | string       |
            | page name               | app:privada:personas:confirma o rechazar:cargo domiciliado:cargo rechazado | string       |
            | level 1                 | confirma o rechazar                                                        | string       |
            | level 2                 | cargo domiciliado                                                          | string       |
            | level 3                 | cargo rechazado                                                            | string       |
            | language                | ES                                                                         | string       |
            | page area               | privada                                                                    | string       |
            | page intent             | informacion                                                                | string       |
            | channel                 | online                                                                     | string       |
            | page instance ID        | de                                                                         | string       |
            | page info version       | appVersion                                                                 | regexp named |
            | page segment            | personas                                                                   | string       |
            | sysEnv                  | app                                                                        | string       |
            | business unit           | BBVA Mexico                                                                | string       |
            | site app name           | App BBVA Mexico                                                            | string       |
            | project name            | Glomo                                                                      | string       |
            | device mobile           | si                                                                         | string       |
            | user segment global     | 003001                                                                     | string       |
            | user age                | age                                                                        | regexp named |
            | internal campaign       |                                                                            | empty array  |
            | optimization attributes |                                                                            | empty array  |
            | products attributes     |                                                                            | empty array  |

    @ANA_DNO005
    @analytics
    @ios @android @web @web-done
    @MX @backend(test) @vbank
    Scenario: Request answered - Page View
        Given a user with the following criteria
            | criteria             |
            | direct debit         |
            | domiciliation notice |
        And the user select confirm or rejected a notification
        When the user accepts domiciliation payment
        Then the device contains the following variables
            | item                    | value                                                                           | type         |
            | analytics               | analytics/glomo_base                                                            | json schema  |
            | version DL              | 20250414_5.0                                                                    | string       |
            | page name               | app:privada:personas:confirma o rechazar:cargo domiciliado:solicitud respondida | string       |
            | level 1                 | confirma o rechazar                                                             | string       |
            | level 2                 | cargo domiciliado                                                               | string       |
            | level 3                 | solicitud respondida                                                            | string       |
            | language                | ES                                                                              | string       |
            | page area               | privada                                                                         | string       |
            | page intent             | informacion                                                                     | string       |
            | channel                 | online                                                                          | string       |
            | page instance ID        | de                                                                              | string       |
            | page info version       | appVersion                                                                      | regexp named |
            | page segment            | personas                                                                        | string       |
            | sysEnv                  | app                                                                             | string       |
            | business unit           | BBVA Mexico                                                                     | string       |
            | site app name           | App BBVA Mexico                                                                 | string       |
            | project name            | Glomo                                                                           | string       |
            | device mobile           | si                                                                              | string       |
            | user segment global     | 003001                                                                          | string       |
            | user age                | age                                                                             | regexp named |
            | internal campaign       |                                                                                 | empty array  |
            | optimization attributes |                                                                                 | empty array  |
            | products attributes     |                                                                                 | empty array  |

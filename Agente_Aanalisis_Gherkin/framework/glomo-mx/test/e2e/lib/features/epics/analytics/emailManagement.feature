@emailManagementAnalytics
Feature: Analytics - Email Management

    @ANA_EMA001
    @analytics
    @web @android @ios
    @MX
    @backend(test)
    @web-done
    @vbank
    Scenario: Email Management - Add Email
        Given a user with the following criteria
            | criteria           |
            | user without mail  |
        And the user accesses to profile screen
        When the user taps on "add mail" profile button
        Then the device contains the following variables
            | item                    | value                                                           | type             |
            | analytics               | analytics/glomo_base                                            | json schema      |
            | version DL              | 20250414_5.0                                                    | string           |
            | page name               | app:privada:personas:administracion de correo:agregar correo    | string           |
            | level 1                 | administracion de correo                                        | string           |
            | level 2                 | agregar correo                                                  | string           |
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

    @ANA_EMA002
    @analytics
    @web @android @ios
    @MX
    @backend(test)
    @web-done
    @vbank
    Scenario: Email Management - Pending Mail
        Given a user with the following criteria
            | criteria               |
            | user with mail pending |
        And the user accesses to profile screen
        When the user taps on "email show data" profile button
        And the user taps on "edit mail pencil" profile button
        Then the device contains the following variables
            | item                    | value                                                           | type             |
            | analytics               | analytics/glomo_base                                            | json schema      |
            | version DL              | 20250414_5.0                                                    | string           |
            | page name               | app:privada:personas:administracion de correo:actualizar correo | string           |
            | level 1                 | administracion de correo                                        | string           |
            | level 2                 | actualizar correo                                               | string           |
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

    @ANA_EMA003
    @analytics
    @web @android @ios
    @MX
    @backend(test)
    @web-done
    @vbank
    Scenario: Email Management - Validation
        Given a user with the following criteria
            | criteria               |
            | user with mail pending |
        And the user accesses to "update" email screen
        When the user adds or updates its mail "successfully"
        Then the device contains the following variables
            | item                    | value                                                                                | type             |
            | analytics               | analytics/glomo_base                                                                 | json schema      |
            | version DL              | 20250414_5.0                                                                         | string           |
            | page name               | app:privada:personas:administracion de correo:validar correo:1 validacion            | string           |
            | level 1                 | administracion de correo                                                             | string           |
            | level 2                 | validar correo                                                                       | string           |
            | level 3                 | 1 validacion                                                                         | string           |
            | language                | ES                                                                                   | string           |
            | page area               | privada                                                                              | string           |
            | page intent             | transaccion                                                                          | string           |
            | channel                 | online                                                                               |  string          |
            | page instance ID        | de                                                                                   | string           |
            | page info version       | appVersion                                                                           | regexp named     |
            | page segment            | personas                                                                             | string           |
            | sysEnv                  | app                                                                                  | string           |
            | business unit           | BBVA Mexico                                                                          | string           |
            | site app name           | App BBVA Mexico                                                                      | string           |
            | project name            | Glomo                                                                                | string           |
            | device mobile           | si                                                                                   | string           |
            | user userState          | logado                                                                               | string           |
            | user segment global     | 003001                                                                               | string           |
            | profile ID              | profileID                                                                            | regexp named     |
            | user gender             | gender                                                                               | regexp named     |
            | user age                | age                                                                                  | regexp named     |
            | internal campaign       |                                                                                      | empty array      |
            | optimization attributes |                                                                                      | empty array      |
            | application             |                                                                                      | empty str object |
            | products attributes     |                                                                                      | empty array      |

    @ANA_EMA004
    @analytics
    @web @android @ios
    @MX
    @backend(test)
    @web-done
    @vbank
    Scenario: Email Management - Security Code
        Given a user with the following criteria
            | criteria               |
            | user with mail pending |
        And the user accesses to "update" email screen
        When the user adds or updates its mail "successfully"
        And the user continues the email address update with a "none" otp code received by email
        Then the device contains the following variables
            | item                    | value                                                                                | type             |
            | analytics               | analytics/glomo_base                                                                 | json schema      |
            | version DL              | 20250414_5.0                                                                         | string           |
            | page name               | app:privada:personas:administracion de correo:validar correo:2 codigo de seguridad   | string           |
            | level 1                 | administracion de correo                                                             | string           |
            | level 2                 | validar correo                                                                       | string           |
            | level 3                 | 2 codigo de seguridad                                                                | string           |
            | language                | ES                                                                                   | string           |
            | page area               | privada                                                                              | string           |
            | page intent             | transaccion                                                                          | string           |
            | channel                 | online                                                                               |  string          |
            | page instance ID        | de                                                                                   | string           |
            | page info version       | appVersion                                                                           | regexp named     |
            | page segment            | personas                                                                             | string           |
            | sysEnv                  | app                                                                                  | string           |
            | business unit           | BBVA Mexico                                                                          | string           |
            | site app name           | App BBVA Mexico                                                                      | string           |
            | project name            | Glomo                                                                                | string           |
            | device mobile           | si                                                                                   | string           |
            | user userState          | logado                                                                               | string           |
            | user segment global     | 003001                                                                               | string           |
            | profile ID              | profileID                                                                            | regexp named     |
            | user gender             | gender                                                                               | regexp named     |
            | user age                | age                                                                                  | regexp named     |
            | internal campaign       |                                                                                      | empty array      |
            | optimization attributes |                                                                                      | empty array      |
            | application             |                                                                                      | empty str object |
            | products attributes     |                                                                                      | empty array      |

    @ANA_EMA005
    @analytics
    @web @android @ios
    @MX
    @backend(test)
    @web-done
    @vbank @vbank-modified
    #Edited vbank record to simulate right response (HTTP 200 OK)
    Scenario: Email Management - Success Page
        Given a user with the following criteria
            | criteria               |
            | user with mail pending |
        And the user accesses to "update" email screen
        When the user adds or updates its mail "successfully"
        And the user continues the email address update with a "right" otp code received by email
        Then the device contains the following variables
            | item                    | value                                                                                | type             |
            | analytics               | analytics/glomo_base                                                                 | json schema      |
            | version DL              | 20250414_5.0                                                                         | string           |
            | page name               | app:privada:personas:administracion de correo:validar correo:pagina exitosa          | string           |
            | level 1                 | administracion de correo                                                             | string           |
            | level 2                 | validar correo                                                                       | string           |
            | level 3                 | pagina exitosa                                                                       | string           |
            | language                | ES                                                                                   | string           |
            | page area               | privada                                                                              | string           |
            | page intent             | transaccion                                                                          | string           |
            | channel                 | online                                                                               |  string          |
            | page instance ID        | de                                                                                   | string           |
            | page info version       | appVersion                                                                           | regexp named     |
            | page segment            | personas                                                                             | string           |
            | sysEnv                  | app                                                                                  | string           |
            | business unit           | BBVA Mexico                                                                          | string           |
            | site app name           | App BBVA Mexico                                                                      | string           |
            | project name            | Glomo                                                                                | string           |
            | device mobile           | si                                                                                   | string           |
            | user userState          | logado                                                                               | string           |
            | user segment global     | 003001                                                                               | string           |
            | profile ID              | profileID                                                                            | regexp named     |
            | user gender             | gender                                                                               | regexp named     |
            | user age                | age                                                                                  | regexp named     |
            | internal campaign       |                                                                                      | empty array      |
            | optimization attributes |                                                                                      | empty array      |
            | application             |                                                                                      | empty str object |
            | products attributes     |                                                                                      | empty array      |

    @ANA_EMA006
    @analytics
    @web @android @ios
    @MX
    @backend(test)
    @web-done
    @vbank @vbank-modified
    #Edited vbank record to simulate service unavailable (HTTP 500)
    Scenario: Email Management - Saving Data Error
        Given a user with the following criteria
            | criteria           |
            | user without mail  |
        And the user accesses to "add" email screen
        When the user adds or updates its mail "unsuccessfully"
        Then the device contains the following variables
            | item                    | value                                                                                | type             |
            | analytics               | analytics/glomo_base                                                                 | json schema      |
            | version DL              | 20250414_5.0                                                                         | string           |
            | page name               | app:privada:personas:administracion de correo:agregar correo:error guardado de datos | string           |
            | level 1                 | administracion de correo                                                             | string           |
            | level 2                 | agregar correo                                                                       | string           |
            | level 3                 | error guardado de datos                                                              | string           |
            | error page              | error guardado de datos                                                              | string           |
            | language                | ES                                                                                   | string           |
            | page area               | privada                                                                              | string           |
            | page intent             | informacion                                                                          | string           |
            | channel                 | online                                                                               |  string          |
            | page instance ID        | de                                                                                   | string           |
            | page info version       | appVersion                                                                           | regexp named     |
            | page segment            | personas                                                                             | string           |
            | sysEnv                  | app                                                                                  | string           |
            | business unit           | BBVA Mexico                                                                          | string           |
            | site app name           | App BBVA Mexico                                                                      | string           |
            | project name            | Glomo                                                                                | string           |
            | device mobile           | si                                                                                   | string           |
            | user userState          | logado                                                                               | string           |
            | user segment global     | 003001                                                                               | string           |
            | profile ID              | profileID                                                                            | regexp named     |
            | user gender             | gender                                                                               | regexp named     |
            | user age                | age                                                                                  | regexp named     |
            | internal campaign       |                                                                                      | empty array      |
            | optimization attributes |                                                                                      | empty array      |
            | application             |                                                                                      | empty str object |
            | products attributes     |                                                                                      | empty array      |

    @ANA_EMA007
    @analytics
    @web @android @ios
    @MX
    @backend(test)
    @tmpExclude @JIRA.GLOMOMX-254311
    @vbank @vbank-modified
    #Edited vbank record to simulate wrong code error (HTTP 400 Bad Request)
    Scenario: Email Management - Wrong otp code
        Given a user with the following criteria
            | criteria               |
            | user with mail pending |
        And the user accesses to "update" email screen
        When the user adds or updates its mail "successfully"
        And the user continues the email address update with a "wrong" otp code received by email
        Then the user sees the "small" close confirmation modal
        And the device contains the following variables
            | item                    | value                                                                                | type             |
            | analytics               | analytics/glomo_base                                                                 | json schema      |
            | version DL              | 20250414_5.0                                                                         | string           |
            | page name               | app:privada:personas:administracion de correo:validar correo:codigo incorrecto       | string           |
            | level 1                 | administracion de correo                                                             | string           |
            | level 2                 | validar correo                                                                       | string           |
            | level 3                 | codigo incorrecto                                                                    | string           |
            | error page              | codigo incorrecto                                                                    | string           |
            | language                | ES                                                                                   | string           |
            | page area               | privada                                                                              | string           |
            | page intent             | informacion                                                                          | string           |
            | channel                 | online                                                                               |  string          |
            | page instance ID        | de                                                                                   | string           |
            | page info version       | appVersion                                                                           | regexp named     |
            | page segment            | personas                                                                             | string           |
            | sysEnv                  | app                                                                                  | string           |
            | business unit           | BBVA Mexico                                                                          | string           |
            | site app name           | App BBVA Mexico                                                                      | string           |
            | project name            | Glomo                                                                                | string           |
            | device mobile           | si                                                                                   | string           |
            | user userState          | logado                                                                               | string           |
            | user segment global     | 003001                                                                               | string           |
            | profile ID              | profileID                                                                            | regexp named     |
            | user gender             | gender                                                                               | regexp named     |
            | user age                | age                                                                                  | regexp named     |
            | internal campaign       |                                                                                      | empty array      |
            | optimization attributes |                                                                                      | empty array      |
            | application             |                                                                                      | empty str object |
            | products attributes     |                                                                                      | empty array      |

    @ANA_EMA008
    @analytics
    @web @android @ios
    @MX
    @backend(test)
    @web-done
    @vbank
    Scenario: Email Management - Leaving alert error
        Given a user with the following criteria
            | criteria               |
            | user with mail pending |
        And the user accesses to "update" email screen
        When the user adds or updates its mail "successfully"
        And the user wants to leave email validation process
        Then the device contains the following variables
            | item                    | value                                                                                | type             |
            | analytics               | analytics/glomo_base                                                                 | json schema      |
            | version DL              | 20250414_5.0                                                                         | string           |
            | page name               | app:privada:personas:administracion de correo:validar correo:alertamiento abandono   | string           |
            | level 1                 | administracion de correo                                                             | string           |
            | level 2                 | validar correo                                                                       | string           |
            | level 3                 | alertamiento abandono                                                                | string           |
            | error page              | alertamiento abandono                                                                | string           |
            | language                | ES                                                                                   | string           |
            | page area               | privada                                                                              | string           |
            | page intent             | informacion                                                                          | string           |
            | channel                 | online                                                                               |  string          |
            | page instance ID        | de                                                                                   | string           |
            | page info version       | appVersion                                                                           | regexp named     |
            | page segment            | personas                                                                             | string           |
            | sysEnv                  | app                                                                                  | string           |
            | business unit           | BBVA Mexico                                                                          | string           |
            | site app name           | App BBVA Mexico                                                                      | string           |
            | project name            | Glomo                                                                                | string           |
            | device mobile           | si                                                                                   | string           |
            | user userState          | logado                                                                               | string           |
            | user segment global     | 003001                                                                               | string           |
            | profile ID              | profileID                                                                            | regexp named     |
            | user gender             | gender                                                                               | regexp named     |
            | user age                | age                                                                                  | regexp named     |
            | internal campaign       |                                                                                      | empty array      |
            | optimization attributes |                                                                                      | empty array      |
            | application             |                                                                                      | empty str object |
            | products attributes     |                                                                                      | empty array      |

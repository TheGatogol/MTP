@keyRecoveryUpdateAnalytics
Feature: Analytics - KeyRecoveryUpdate

    @ANA_EVENT_KRU001
    @analytics @vbank
    @MX @backend(test) @web @ios @android
    @web-done
    Scenario: Page View - The user goes to access and signatures screen
        Given a user with the following criteria
            | criteria                  |
            | change password available |
        And the user accesses to dashboard
        And the user accesses to the sidebar
        And the analytics interceptor service is initiated
        When the user enters the main login and signatures screen
        Then the analytics events contains the following variables
            | item                    | value                                       | type             | event         |
            | analytics               | analytics/glomo_base                        | json schema      | Internal Link |
            | version DL              | 20250414_5.0                                | string           | Internal Link |
            | page name               | app:privada:personas:seguridad y privacidad | string           | Internal Link |
            | level 1                 | seguridad y privacidad                      | string           | Internal Link |
            | language                | ES                                          | string           | Internal Link |
            | page area               | privada                                     | string           | Internal Link |
            | page intent             | informacion                                 | string           | Internal Link |
            | channel                 | online                                      | string           | Internal Link |
            | page instance ID        | de                                          | string           | Internal Link |
            | page info version       | appVersion                                  | regexp named     | Internal Link |
            | page segment            | personas                                    | string           | Internal Link |
            | sysEnv                  | app                                         | string           | Internal Link |
            | business unit           | BBVA Mexico                                 | string           | Internal Link |
            | site app name           | App BBVA Mexico                             | string           | Internal Link |
            | project name            | Glomo                                       | string           | Internal Link |
            | link name               | accesos y firmas                            | string           | Internal Link |
            | device mobile           | si                                          | string           | Internal Link |
            | user userState          | logado                                      | string           | Internal Link |
            | user segment global     | 003001                                      | string           | Internal Link |
            | profile ID              | profileID                                   | regexp named     | Internal Link |
            | user gender             | gender                                      | regexp named     | Internal Link |
            | user country            | lettersAndSpaceOrEmpty                      | regexp named     | Internal Link |
            | internal campaign       |                                             | empty array      | Internal Link |
            | optimization attributes |                                             | empty array      | Internal Link |
            | application             |                                             | empty str object | Internal Link |
            | products attributes     |                                             | empty array      | Internal Link |

    @ANA_EVENT_KRU002
    @analytics @vbank
    @MX @backend(test) @web @ios @android
    @web-done
    Scenario: Page View - The user goes to change password option
        Given a user with the following criteria
            | criteria                  |
            | change password available |
        And the user enters the main login and signatures screen
        And the user closes initial modal in access and signatures screen
        And the analytics interceptor service is initiated
        When the user goes to change password option
        Then the analytics events contains the following variables
            | item                    | value                                                                    | type             | event     |
            | version DL              | 20250414_5.0                                                             | string           | Page View |
            | page name               | app:privada:personas:seguridad y privacidad:accesos:formato y contrasena | string           | Page View |
            | level 1                 | seguridad y privacidad                                                   | string           | Page View |
            | level 2                 | accesos                                                                  | string           | Page View |
            | level 3                 | formato y contrasena                                                     | string           | Page View |
            | language                | ES                                                                       | string           | Page View |
            | page area               | privada                                                                  | string           | Page View |
            | page intent             | informacion                                                              | string           | Page View |
            | channel                 | online                                                                   | string           | Page View |
            | page instance ID        | de                                                                       | string           | Page View |
            | page info version       | appVersion                                                               | regexp named     | Page View |
            | page segment            | personas                                                                 | string           | Page View |
            | sysEnv                  | app                                                                      | string           | Page View |
            | business unit           | BBVA Mexico                                                              | string           | Page View |
            | site app name           | App BBVA Mexico                                                          | string           | Page View |
            | project name            | Glomo                                                                    | string           | Page View |
            | device mobile           | si                                                                       | string           | Page View |
            | user userState          | logado                                                                   | string           | Page View |
            | user segment global     | 003001                                                                   | string           | Page View |
            | profile ID              | profileID                                                                | regexp named     | Page View |
            | user gender             | gender                                                                   | regexp named     | Page View |
            | user country            | lettersAndSpaceOrEmpty                                                   | regexp named     | Page View |
            | internal campaign       |                                                                          | empty array      | Page View |
            | optimization attributes |                                                                          | empty array      | Page View |
            | application             |                                                                          | empty str object | Page View |
            | products attributes     |                                                                          | empty array      | Page View |

    @ANA_EVENT_KRU003
    @analytics @vbank
    @MX @backend(test) @web @ios @android
    @web-done
    Scenario: Page View - The user goes to change password option and acepts the init modal
        Given a user with the following criteria
            | criteria                  |
            | change password available |
        And the user enters the main login and signatures screen
        And the user access to change password screen
        And the analytics interceptor service is initiated
        When the user accepts the modal
        Then the analytics events contains the following variables
            | item                    | value                                                                      | type             | event     |
            | analytics               | analytics/glomo_base                                                       | json schema      | Page View |
            | version DL              | 20250414_5.0                                                               | string           | Page View |
            | page name               | app:privada:personas:seguridad y privacidad:accesos:modifica tu contrasena | string           | Page View |
            | level 1                 | seguridad y privacidad                                                     | string           | Page View |
            | level 2                 | accesos                                                                    | string           | Page View |
            | level 3                 | modifica tu contrasena                                                     | string           | Page View |
            | language                | ES                                                                         | string           | Page View |
            | page area               | privada                                                                    | string           | Page View |
            | page intent             | informacion                                                                | string           | Page View |
            | channel                 | online                                                                     | string           | Page View |
            | page instance ID        | de                                                                         | string           | Page View |
            | page info version       | appVersion                                                                 | regexp named     | Page View |
            | page segment            | personas                                                                   | string           | Page View |
            | sysEnv                  | app                                                                        | string           | Page View |
            | business unit           | BBVA Mexico                                                                | string           | Page View |
            | site app name           | App BBVA Mexico                                                            | string           | Page View |
            | project name            | Glomo                                                                      | string           | Page View |
            | device mobile           | si                                                                         | string           | Page View |
            | user userState          | logado                                                                     | string           | Page View |
            | user segment global     | 003001                                                                     | string           | Page View |
            | profile ID              | profileID                                                                  | regexp named     | Page View |
            | user gender             | gender                                                                     | regexp named     | Page View |
            | user country            | lettersAndSpaceOrEmpty                                                     | regexp named     | Page View |
            | internal campaign       |                                                                            | empty array      | Page View |
            | optimization attributes |                                                                            | empty array      | Page View |
            | application             |                                                                            | empty str object | Page View |
            | products attributes     |                                                                            | empty array      | Page View |

    @ANA_EVENT_KRU004
    @analytics @vbank
    @MX @backend(test) @web @ios @android
    @web-done
    Scenario: Internal Link - The user try change password and clicks on modify button
        Given a user with the following criteria
            | criteria                  |
            | change password available |
        And the user enters the main login and signatures screen
        And the user access to change password screen
        And the user accepts the modal
        And the user completes form with "correct" current password
        And the analytics interceptor service is initiated
        When the user continue with password change
        Then the analytics events contains the following variables
            | item                    | value                                                                      | type             | event         |
            | analytics               | analytics/glomo_base                                                       | json schema      | Internal Link |
            | version DL              | 20250414_5.0                                                               | string           | Internal Link |
            | page name               | app:privada:personas:seguridad y privacidad:accesos:modifica tu contrasena | string           | Internal Link |
            | level 1                 | seguridad y privacidad                                                     | string           | Internal Link |
            | level 2                 | accesos                                                                    | string           | Internal Link |
            | level 3                 | modifica tu contrasena                                                     | string           | Internal Link |
            | language                | ES                                                                         | string           | Internal Link |
            | page area               | privada                                                                    | string           | Internal Link |
            | page intent             | informacion                                                                | string           | Internal Link |
            | channel                 | online                                                                     | string           | Internal Link |
            | page instance ID        | de                                                                         | string           | Internal Link |
            | page info version       | appVersion                                                                 | regexp named     | Internal Link |
            | page segment            | personas                                                                   | string           | Internal Link |
            | sysEnv                  | app                                                                        | string           | Internal Link |
            | business unit           | BBVA Mexico                                                                | string           | Internal Link |
            | site app name           | App BBVA Mexico                                                            | string           | Internal Link |
            | project name            | Glomo                                                                      | string           | Internal Link |
            | link name               | modificar                                                                  | string           | Internal Link |
            | device mobile           | si                                                                         | string           | Internal Link |
            | user userState          | logado                                                                     | string           | Internal Link |
            | user segment global     | 003001                                                                     | string           | Internal Link |
            | profile ID              | profileID                                                                  | regexp named     | Internal Link |
            | user gender             | gender                                                                     | regexp named     | Internal Link |
            | user country            | lettersAndSpaceOrEmpty                                                     | regexp named     | Internal Link |
            | internal campaign       |                                                                            | empty array      | Internal Link |
            | optimization attributes |                                                                            | empty array      | Internal Link |
            | application             |                                                                            | empty str object | Internal Link |
            | products attributes     |                                                                            | empty array      | Internal Link |

    @ANA_EVENT_KRU005
    @analytics @vbank
    @MX @backend(test) @web @ios @android
    @web-done
    Scenario: Page View - The user goes to change password and cancel the process
        Given a user with the following criteria
            | criteria                  |
            | change password available |
        And the user enters the main login and signatures screen
        And the user access to change password screen
        And the user accepts the modal
        And the analytics interceptor service is initiated
        When the user cancel password change
        Then the analytics events contains the following variables
            | item                    | value                                                                                       | type             | event     |
            | analytics               | analytics/glomo_base                                                                        | json schema      | Page View |
            | version DL              | 20250414_5.0                                                                                | string           | Page View |
            | page name               | app:privada:personas:seguridad y privacidad:accesos:modifica tu contrasena:cancelar proceso | string           | Page View |
            | level 1                 | seguridad y privacidad                                                                      | string           | Page View |
            | level 2                 | accesos                                                                                     | string           | Page View |
            | level 3                 | modifica tu contrasena                                                                      | string           | Page View |
            | level 4                 | cancelar proceso                                                                            | string           | Page View |
            | language                | ES                                                                                          | string           | Page View |
            | page area               | privada                                                                                     | string           | Page View |
            | page intent             | informacion                                                                                 | string           | Page View |
            | channel                 | online                                                                                      | string           | Page View |
            | page instance ID        | de                                                                                          | string           | Page View |
            | page info version       | appVersion                                                                                  | regexp named     | Page View |
            | page segment            | personas                                                                                    | string           | Page View |
            | sysEnv                  | app                                                                                         | string           | Page View |
            | business unit           | BBVA Mexico                                                                                 | string           | Page View |
            | site app name           | App BBVA Mexico                                                                             | string           | Page View |
            | project name            | Glomo                                                                                       | string           | Page View |
            | device mobile           | si                                                                                          | string           | Page View |
            | user userState          | logado                                                                                      | string           | Page View |
            | user segment global     | 003001                                                                                      | string           | Page View |
            | profile ID              | profileID                                                                                   | regexp named     | Page View |
            | user gender             | gender                                                                                      | regexp named     | Page View |
            | user country            | lettersAndSpaceOrEmpty                                                                      | regexp named     | Page View |
            | internal campaign       |                                                                                             | empty array      | Page View |
            | optimization attributes |                                                                                             | empty array      | Page View |
            | application             |                                                                                             | empty str object | Page View |
            | products attributes     |                                                                                             | empty array      | Page View |

    @ANA_EVENT_KRU006
    @analytics @vbank
    @MX @backend(test) @web @ios @android
    @web-done
    Scenario: Internal Link - The user press cancel button and then accept the exit modal
        Given a user with the following criteria
            | criteria                  |
            | change password available |
        And the user enters the main login and signatures screen
        And the user access to change password screen
        And the user accepts the modal
        And the user cancel password change
        And the analytics interceptor service is initiated
        When the user accepts the modal
        Then the analytics events contains the following variables
            | item                    | value                                                                                       | type             | event         |
            | analytics               | analytics/glomo_base                                                                        | json schema      | Internal Link |
            | version DL              | 20250414_5.0                                                                                | string           | Internal Link |
            | page name               | app:privada:personas:seguridad y privacidad:accesos:modifica tu contrasena:cancelar proceso | string           | Internal Link |
            | level 1                 | seguridad y privacidad                                                                      | string           | Internal Link |
            | level 2                 | accesos                                                                                     | string           | Internal Link |
            | level 3                 | modifica tu contrasena                                                                      | string           | Internal Link |
            | level 4                 | cancelar proceso                                                                            | string           | Internal Link |
            | language                | ES                                                                                          | string           | Internal Link |
            | page area               | privada                                                                                     | string           | Internal Link |
            | page intent             | informacion                                                                                 | string           | Internal Link |
            | channel                 | online                                                                                      | string           | Internal Link |
            | page instance ID        | de                                                                                          | string           | Internal Link |
            | page info version       | appVersion                                                                                  | regexp named     | Internal Link |
            | page segment            | personas                                                                                    | string           | Internal Link |
            | sysEnv                  | app                                                                                         | string           | Internal Link |
            | business unit           | BBVA Mexico                                                                                 | string           | Internal Link |
            | site app name           | App BBVA Mexico                                                                             | string           | Internal Link |
            | project name            | Glomo                                                                                       | string           | Internal Link |
            | link name               | salir del proceso                                                                           | string           | Internal Link |
            | device mobile           | si                                                                                          | string           | Internal Link |
            | user userState          | logado                                                                                      | string           | Internal Link |
            | user segment global     | 003001                                                                                      | string           | Internal Link |
            | profile ID              | profileID                                                                                   | regexp named     | Internal Link |
            | user gender             | gender                                                                                      | regexp named     | Internal Link |
            | user country            | lettersAndSpaceOrEmpty                                                                      | regexp named     | Internal Link |
            | internal campaign       |                                                                                             | empty array      | Internal Link |
            | optimization attributes |                                                                                             | empty array      | Internal Link |
            | application             |                                                                                             | empty str object | Internal Link |
            | products attributes     |                                                                                             | empty array      | Internal Link |

    @ANA_EVENT_KRU007
    @analytics @vbank
    @MX @backend(test) @web @ios @android
    @web-done
    Scenario: Internal Link - The user click on modify button and the otp sign in screen is displayed
        Given a user with the following criteria
            | criteria                  |
            | change password available |
        And the user enters the main login and signatures screen
        And the user access to change password screen
        And the user accepts the modal
        And the user completes form with "correct" current password
        And the analytics interceptor service is initiated
        When the user continue with password change
        Then the analytics events contains the following variables
            | item                    | value                                                                          | type             | event     |
            | analytics               | analytics/glomo_base                                                           | json schema      | Page View |
            | version DL              | 20250414_5.0                                                                   | string           | Page View |
            | page name               | app:privada:personas:seguridad y privacidad:accesos:modifica tu contrasena:otp | string           | Page View |
            | level 1                 | seguridad y privacidad                                                         | string           | Page View |
            | level 2                 | accesos                                                                        | string           | Page View |
            | level 3                 | modifica tu contrasena                                                         | string           | Page View |
            | level 4                 | otp                                                                            | string           | Page View |
            | language                | ES                                                                             | string           | Page View |
            | page area               | privada                                                                        | string           | Page View |
            | page intent             | informacion                                                                    | string           | Page View |
            | channel                 | online                                                                         | string           | Page View |
            | page instance ID        | de                                                                             | string           | Page View |
            | page info version       | appVersion                                                                     | regexp named     | Page View |
            | page segment            | personas                                                                       | string           | Page View |
            | sysEnv                  | app                                                                            | string           | Page View |
            | business unit           | BBVA Mexico                                                                    | string           | Page View |
            | site app name           | App BBVA Mexico                                                                | string           | Page View |
            | project name            | Glomo                                                                          | string           | Page View |
            | device mobile           | si                                                                             | string           | Page View |
            | user userState          | logado                                                                         | string           | Page View |
            | user segment global     | 003001                                                                         | string           | Page View |
            | profile ID              | profileID                                                                      | regexp named     | Page View |
            | user gender             | gender                                                                         | regexp named     | Page View |
            | user country            | lettersAndSpaceOrEmpty                                                         | regexp named     | Page View |
            | internal campaign       |                                                                                | empty array      | Page View |
            | optimization attributes |                                                                                | empty array      | Page View |
            | application             |                                                                                | empty str object | Page View |
            | products attributes     |                                                                                | empty array      | Page View |

    @ANA_EVENT_KRU008
    @analytics @vbank
    @MX @backend(test) @web @ios @android
    @web-done
    Scenario: Page View - The user change password successfully
        Given a user with the following criteria
            | criteria                  |
            | change password available |
        And the user enters the main login and signatures screen
        And the user access to change password screen
        And the user accepts the modal
        And the user completes form with "correct" current password
        And the user continue with password change
        And the analytics interceptor service is initiated
        When the user confirm the password change
        Then the analytics events contains the following variables
            | item                    | value                                                                      | type             | event     |
            | analytics               | analytics/glomo_base                                                       | json schema      | Page View |
            | version DL              | 20250414_5.0                                                               | string           | Page View |
            | page name               | app:privada:personas:seguridad y privacidad:accesos:contrasena actualizada | string           | Page View |
            | level 1                 | seguridad y privacidad                                                     | string           | Page View |
            | level 2                 | accesos                                                                    | string           | Page View |
            | level 3                 | contrasena actualizada                                                     | string           | Page View |
            | language                | ES                                                                         | string           | Page View |
            | page area               | privada                                                                    | string           | Page View |
            | page intent             | informacion                                                                | string           | Page View |
            | channel                 | online                                                                     | string           | Page View |
            | page instance ID        | de                                                                         | string           | Page View |
            | page info version       | appVersion                                                                 | regexp named     | Page View |
            | page segment            | personas                                                                   | string           | Page View |
            | sysEnv                  | app                                                                        | string           | Page View |
            | business unit           | BBVA Mexico                                                                | string           | Page View |
            | site app name           | App BBVA Mexico                                                            | string           | Page View |
            | project name            | Glomo                                                                      | string           | Page View |
            | device mobile           | si                                                                         | string           | Page View |
            | user userState          | logado                                                                     | string           | Page View |
            | user segment global     | 003001                                                                     | string           | Page View |
            | profile ID              | profileID                                                                  | regexp named     | Page View |
            | user gender             | gender                                                                     | regexp named     | Page View |
            | user country            | lettersAndSpaceOrEmpty                                                     | regexp named     | Page View |
            | internal campaign       |                                                                            | empty array      | Page View |
            | optimization attributes |                                                                            | empty array      | Page View |
            | application             |                                                                            | empty str object | Page View |
            | products attributes     |                                                                            | empty array      | Page View |

    @ANA_EVENT_KRU009
    @analytics @vbank
    @MX @backend(test) @web @ios @android
    @web-done
    Scenario: Page View - the user try change password with the current password incorrect and block the process
        Given a user with the following criteria
            | criteria                  |
            | change password available |
        And the user enters the main login and signatures screen
        And the user access to change password screen
        And the user accepts the modal
        And the user completes form with "incorrect" current password
        And the user retries to update password twice
        And the analytics interceptor service is initiated
        When the user confirm the password change
        Then the analytics events contains the following variables
            | item                    | value                                                                          | type             | event     |
            | analytics               | analytics/glomo_base                                                           | json schema      | Page View |
            | version DL              | 20250414_5.0                                                                   | string           | Page View |
            | page name               | app:privada:personas:seguridad y privacidad:accesos:error contrasena bloqueada | string           | Page View |
            | level 1                 | seguridad y privacidad                                                         | string           | Page View |
            | level 2                 | accesos                                                                        | string           | Page View |
            | level 3                 | error contrasena bloqueada                                                     | string           | Page View |
            | error page              | error contrasena bloqueada                                                     | string           | Page View |
            | language                | ES                                                                             | string           | Page View |
            | page area               | privada                                                                        | string           | Page View |
            | page intent             | informacion                                                                    | string           | Page View |
            | channel                 | online                                                                         | string           | Page View |
            | page instance ID        | de                                                                             | string           | Page View |
            | page info version       | appVersion                                                                     | regexp named     | Page View |
            | page segment            | personas                                                                       | string           | Page View |
            | sysEnv                  | app                                                                            | string           | Page View |
            | business unit           | BBVA Mexico                                                                    | string           | Page View |
            | site app name           | App BBVA Mexico                                                                | string           | Page View |
            | project name            | Glomo                                                                          | string           | Page View |
            | device mobile           | si                                                                             | string           | Page View |
            | user userState          | logado                                                                         | string           | Page View |
            | user segment global     | 003001                                                                         | string           | Page View |
            | profile ID              | profileID                                                                      | regexp named     | Page View |
            | user gender             | gender                                                                         | regexp named     | Page View |
            | user country            | lettersAndSpaceOrEmpty                                                         | regexp named     | Page View |
            | internal campaign       |                                                                                | empty array      | Page View |
            | optimization attributes |                                                                                | empty array      | Page View |
            | application             |                                                                                | empty str object | Page View |
            | products attributes     |                                                                                | empty array      | Page View |

    @ANA_EVENT_KRU010
    @analytics @vbank
    @MX @backend(test) @web @ios @android
    @web-done
    Scenario: Page View - the user try change password with the same password
        Given a user with the following criteria
            | criteria                  |
            | change password available |
        And the user enters the main login and signatures screen
        And the user access to change password screen
        And the user accepts the modal
        And the user completes the change password with the same password
        And the analytics interceptor service is initiated
        When the user confirm the password change
        Then the analytics events contains the following variables
            | item                    | value                                                                      | type             | event     |
            | analytics               | analytics/glomo_base                                                       | json schema      | Page View |
            | version DL              | 20250414_5.0                                                               | string           | Page View |
            | page name               | app:privada:personas:seguridad y privacidad:accesos:error contrasena igual | string           | Page View |
            | level 1                 | seguridad y privacidad                                                     | string           | Page View |
            | level 2                 | accesos                                                                    | string           | Page View |
            | level 3                 | error contrasena igual                                                     | string           | Page View |
            | error page              | error contrasena igual                                                     | string           | Page View |
            | language                | ES                                                                         | string           | Page View |
            | page area               | privada                                                                    | string           | Page View |
            | page intent             | informacion                                                                | string           | Page View |
            | channel                 | online                                                                     | string           | Page View |
            | page instance ID        | de                                                                         | string           | Page View |
            | page info version       | appVersion                                                                 | regexp named     | Page View |
            | page segment            | personas                                                                   | string           | Page View |
            | sysEnv                  | app                                                                        | string           | Page View |
            | business unit           | BBVA Mexico                                                                | string           | Page View |
            | site app name           | App BBVA Mexico                                                            | string           | Page View |
            | project name            | Glomo                                                                      | string           | Page View |
            | device mobile           | si                                                                         | string           | Page View |
            | user userState          | logado                                                                     | string           | Page View |
            | user segment global     | 003001                                                                     | string           | Page View |
            | profile ID              | profileID                                                                  | regexp named     | Page View |
            | user gender             | gender                                                                     | regexp named     | Page View |
            | user country            | lettersAndSpaceOrEmpty                                                     | regexp named     | Page View |
            | internal campaign       |                                                                            | empty array      | Page View |
            | optimization attributes |                                                                            | empty array      | Page View |
            | application             |                                                                            | empty str object | Page View |
            | products attributes     |                                                                            | empty array      | Page View |

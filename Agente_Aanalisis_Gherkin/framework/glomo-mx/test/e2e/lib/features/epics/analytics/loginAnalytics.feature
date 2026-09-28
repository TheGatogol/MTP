@loginAnalytics
Feature: Analytics Login

    @ANA_EVENT_LOG001
    @analytics
    @ios @android @native
    @MX @backend(test)
    @vbank
    @android-done @manual-ios @JIRA.GLOMOMX-225289
    Scenario: Access to login screen - analytic Page View event
        Given a user not logged and not cached
        And the user accesses to public Landing Screen
        And the analytics interceptor service is initiated
        When the user accesses the Login Screen
        Then the analytics events contains the following variables
            | item                    | value                     | type             | event     |
            | analytics               | analytics/glomo_base      | json schema      | Page View |
            | version DL              | 20250414_5.0              | string           | Page View |
            | page name               | app:publica:general:login | string           | Page View |
            | level 1                 | login                     | string           | Page View |
            | language                | ES                        | string           | Page View |
            | page area               | publica                   | string           | Page View |
            | page intent             | home                      | string           | Page View |
            | channel                 | online                    | string           | Page View |
            | page instance ID        | de                        | string           | Page View |
            | page info version       | appVersion                | regexp named     | Page View |
            | page segment            | general                   | string           | Page View |
            | sysEnv                  | app                       | string           | Page View |
            | business unit           | BBVA Mexico               | string           | Page View |
            | site app name           | App BBVA Mexico           | string           | Page View |
            | project name            | Glomo                     | string           | Page View |
            | device mobile           | si                        | string           | Page View |
            | user userState          | no logado                 | string           | Page View |
            | internal campaign       |                           | empty array      | Page View |
            | optimization attributes |                           | empty array      | Page View |
            | application             |                           | empty str object | Page View |
            | products attributes     |                           | empty array      | Page View |

    @ANA_EVENT_LOG002
    @analytics
    @ios @android @native
    @MX @backend(test)
    @vbank
    @android-done @manual-ios @JIRA.GLOMOMX-225289
    Scenario: User Credentials Login - analytic Login event
        Given a user with the following criteria
            | criteria                   |
            | user correct credentials   |
        And the user accesses the Login Screen
        And the analytics interceptor service is initiated
        When the user does login
        Then the analytics events contains the following variables
            | item                    | value                       | type             | event |
            | analytics               | analytics/glomo_base        | json schema      | Login |
            | version DL              | 20250414_5.0                | string           | Login |
            | page name               | app:privada:personas:login  | string           | Login |
            | level 1                 | login                       | string           | Login |
            | login type              | standard                    | string           | Login |
            | language                | ES                          | string           | Login |
            | page area               | privada                     | string           | Login |
            | page intent             | home                        | string           | Login |
            | channel                 | online                      | string           | Login |
            | page instance ID        | de                          | string           | Login |
            | page info version       | appVersion                  | regexp named     | Login |
            | page segment            | personas                    | string           | Login |
            | sysEnv                  | app                         | string           | Login |
            | business unit           | BBVA Mexico                 | string           | Login |
            | site app name           | App BBVA Mexico             | string           | Login |
            | project name            | Glomo                       | string           | Login |
            | device mobile           | si                          | string           | Login |
            | user userState          | logado                      | string           | Login |
            | user segment global     | 003001                      | string           | Login |
            | user country            | lettersAndSpaceOrEmpty      | regexp named     | Login |
            | user state              | lettersAndSpaceOrEmpty      | regexp named     | Login |
            | internal campaign       |                             | empty array      | Login |
            | optimization attributes |                             | empty array      | Login |
            | application             |                             | empty str object | Login |
            | products attributes     |                             | empty array      | Login |

    @ANA_EVENT_LOG003
    @analytics
    @ios @android @native
    @MX @backend(test)
    @vbank
    @manual @JIRA.GLOMOGL-21523
    Scenario: User Biometryc Touch Login - analytic Login event
        Given a user with the following criteria
            | criteria |
            | active   |
        And the user accesses to Login Page
        And the analytics interceptor service is initiated
        When the user does login
        Then the analytics events contains the following variables
            | item                    | value                       | type             | event |
            | analytics               | analytics/glomo_base        | json schema      | Login |
            | version DL              | 20250414_5.0                | string           | Login |
            | page name               | app:privada:personas:login  | string           | Login |
            | level 1                 | login                       | string           | Login |
            | login type              | touch id                    | string           | Login |
            | language                | ES                          | string           | Login |
            | page area               | privada                     | string           | Login |
            | page intent             | home                        | string           | Login |
            | channel                 | online                      | string           | Login |
            | page instance ID        | de                          | string           | Login |
            | page info version       | appVersion                  | regexp named     | Login |
            | page segment            | personas                    | string           | Login |
            | sysEnv                  | app                         | string           | Login |
            | business unit           | BBVA Mexico                 | string           | Login |
            | site app name           | App BBVA Mexico             | string           | Login |
            | project name            | Glomo                       | string           | Login |
            | device mobile           | si                          | string           | Login |
            | user userState          | logado                      | string           | Login |
            | internal campaign       |                             | empty array      | Login |
            | optimization attributes |                             | empty array      | Login |
            | application             |                             | empty str object | Login |
            | products attributes     |                             | empty array      | Login |

    @ANA_EVENT_LOG004
    @analytics
    @ios @android @native
    @MX @backend(test)
    @vbank
    @manual @JIRA.GLOMOGL-21523
    Scenario: User Biometryc Face Login - analytic Login event
        Given a user with the following criteria
            | criteria |
            | active   |
        And the user accesses to Login Page
        And the analytics interceptor service is initiated
        When the user does login
        Then the analytics events contains the following variables
            | item                    | value                     | type             | event |
            | analytics               | analytics/glomo_base      | json schema      | Login |
            | version DL              | 20250414_5.0              | string           | Login |
            | page name               | app:privad:personas:login | string           | Login |
            | level 1                 | login                     | string           | Login |
            | login type              | face id                   | string           | Login |
            | language                | ES                        | string           | Login |
            | page area               | privada                   | string           | Login |
            | page intent             | home                      | string           | Login |
            | channel                 | online                    | string           | Login |
            | page instance ID        | de                        | string           | Login |
            | page info version       | appVersion                | regexp named     | Login |
            | page segment            | personas                  | string           | Login |
            | sysEnv                  | app                       | string           | Login |
            | business unit           | BBVA Mexico               | string           | Login |
            | site app name           | App BBVA Mexico           | string           | Login |
            | project name            | Glomo                     | string           | Login |
            | device mobile           | si                        | string           | Login |
            | user userState          | logado                    | string           | Login |
            | internal campaign       |                           | empty array      | Login |
            | optimization attributes |                           | empty array      | Login |
            | application             |                           | empty str object | Login |
            | products attributes     |                           | empty array      | Login |

    @ANA_EVENT_LOG005
    @analytics
    @android @ios @native
    @MX @backend(test)
    @vbank
    @android-done @manual-ios @JIRA.GLOMOMX-225289
    Scenario: Login failed error credentials - analytic type link event
        Given a user with the following criteria
            | criteria                |
            | wrong credentials       |
        And the user accesses to public Landing Screen
        And the user accesses the Login Screen
        And the analytics interceptor service is initiated
        When the user does login
        Then the analytics events contains the following variables
            | item                    | value                     | type             | event              |
            | analytics               | analytics/glomo_base      | json schema      | Unsuccessful Login |
            | version DL              | 20250414_5.0              | string           | Unsuccessful Login |
            | page name               | app:publica:general:login | string           | Unsuccessful Login |
            | level 1                 | login                     | string           | Unsuccessful Login |
            | language                | ES                        | string           | Unsuccessful Login |
            | page area               | publica                   | string           | Unsuccessful Login |
            | page intent             | informacion               | string           | Unsuccessful Login |
            | channel                 | online                    | string           | Unsuccessful Login |
            | page instance ID        | de                        | string           | Unsuccessful Login |
            | page info version       | appVersion                | regexp named     | Unsuccessful Login |
            | page segment            | general                   | string           | Unsuccessful Login |
            | sysEnv                  | app                       | string           | Unsuccessful Login |
            | business unit           | BBVA Mexico               | string           | Unsuccessful Login |
            | site app name           | App BBVA Mexico           | string           | Unsuccessful Login |
            | project name            | Glomo                     | string           | Unsuccessful Login |
            | login type              | standard                  | string           | Unsuccessful Login |
            | device mobile           | si                        | string           | Unsuccessful Login |
            | user userState          | no logado                 | string           | Unsuccessful Login |
            | user segment global     | 003001                    | string           | Unsuccessful Login |
            | site error              | datos incorrectos         | string           | Unsuccessful Login |
            | profile ID              |                           | string           | Unsuccessful Login |
            | internal campaign       |                           | empty array      | Unsuccessful Login |
            | optimization attributes |                           | empty array      | Unsuccessful Login |
            | application             |                           | empty str object | Unsuccessful Login |
            | products attributes     |                           | empty array      | Unsuccessful Login |

    @ANA_EVENT_LOG006
    @analytics
    @ios @android @native
    @MX @backend(test)
    @vbank
    @android-done @manual-ios @JIRA.GLOMOMX-225289
    Scenario: Login failed blocked password - analytic type link event
        Given a user with the following criteria
            | criteria                |
            | blocked password        |
        And the user accesses to public Landing Screen
        And the user accesses the Login Screen
        And the analytics interceptor service is initiated
        When the user does login
        Then the analytics events contains the following variables
            | item                    | value                     | type             | event              | event number |
            | analytics               | analytics/glomo_base      | json schema      | Unsuccessful Login | 2            |
            | version DL              | 20250414_5.0              | string           | Unsuccessful Login | 2            |
            | page name               | app:publica:general:login | string           | Unsuccessful Login | 2            |
            | level 1                 | login                     | string           | Unsuccessful Login | 2            |
            | language                | ES                        | string           | Unsuccessful Login | 2            |
            | page area               | publica                   | string           | Unsuccessful Login | 2            |
            | page intent             | informacion               | string           | Unsuccessful Login | 2            |
            | channel                 | online                    | string           | Unsuccessful Login | 2            |
            | page instance ID        | de                        | string           | Unsuccessful Login | 2            |
            | page info version       | appVersion                | regexp named     | Unsuccessful Login | 2            |
            | page segment            | general                   | string           | Unsuccessful Login | 2            |
            | sysEnv                  | app                       | string           | Unsuccessful Login | 2            |
            | business unit           | BBVA Mexico               | string           | Unsuccessful Login | 2            |
            | site app name           | App BBVA Mexico           | string           | Unsuccessful Login | 2            |
            | project name            | Glomo                     | string           | Unsuccessful Login | 2            |
            | login type              | standard                  | string           | Unsuccessful Login | 2            |
            | device mobile           | si                        | string           | Unsuccessful Login | 2            |
            | user userState          | no logado                 | string           | Unsuccessful Login | 2            |
            | user segment global     | 003001                    | string           | Unsuccessful Login | 2            |
            | site error              | contrasena bloqueada      | string           | Unsuccessful Login | 2            |
            | internal campaign       |                           | empty array      | Unsuccessful Login | 2            |
            | optimization attributes |                           | empty array      | Unsuccessful Login | 2            |
            | application             |                           | empty str object | Unsuccessful Login | 2            |
            | products attributes     |                           | empty array      | Unsuccessful Login | 2            |

    @ANA_EVENT_LOG007
    @analytics
    @ios @android @native
    @MX @backend(test)
    @android-done @manual-ios @JIRA.GLOMOMX-225289
    @vbank
    Scenario: Login failed blocked password - analytic type view event
        Given a user with the following criteria
            | criteria                |
            | blocked password        |
        And the user accesses to public Landing Screen
        And the user accesses the Login Screen
        And the analytics interceptor service is initiated
        When the user does login
        Then the analytics events contains the following variables
            | item                    | value                                           | type             | event     |
            | analytics               | analytics/glomo_base                            | json schema      | Page View |
            | version DL              | 20250414_5.0                                    | string           | Page View |
            | page name               | app:publica:general:login:contrasena bloqueada  | string           | Page View |
            | level 1                 | login                                           | string           | Page View |
            | level 2                 | contrasena bloqueada                            | string           | Page View |
            | language                | ES                                              | string           | Page View |
            | page intent             | informacion                                     | string           | Page View |
            | channel                 | online                                          | string           | Page View |
            | page instance ID        | de                                              | string           | Page View |
            | page info version       | appVersion                                      | regexp named     | Page View |
            | page segment            | general                                         | string           | Page View |
            | sysEnv                  | app                                             | string           | Page View |
            | business unit           | BBVA Mexico                                     | string           | Page View |
            | site app name           | App BBVA Mexico                                 | string           | Page View |
            | project name            | Glomo                                           | string           | Page View |
            | device mobile           | si                                              | string           | Page View |
            | user userState          | no logado                                       | string           | Page View |
            | user segment global     | 003001                                          | string           | Page View |
            | profile ID              |                                                 | string           | Page View |
            | internal campaign       |                                                 | empty array      | Page View |
            | optimization attributes |                                                 | empty array      | Page View |
            | application             |                                                 | empty str object | Page View |
            | products attributes     |                                                 | empty array      | Page View |

    @ANA_EVENT_LOG008
    @analytics
    @ios @android @native
    @MX @backend(test)
    @android-done @manual-ios @JIRA.GLOMOMX-225289
    @vbank
    Scenario: Login failed blocked password - analytic type on click start event
        Given a user with the following criteria
            | criteria                |
            | blocked password        |
        And the user accesses to public Landing Screen
        And the user accesses the Login Screen
        And the user does login
        And the analytics interceptor service is initiated
        When the user goes to unlock password
        Then the analytics events contains the following variables
            | item                    | value                                           | type             | event              |
            | analytics               | analytics/glomo_base                            | json schema      | App On Click Start |
            | version DL              | 20250414_5.0                                    | string           | App On Click Start |
            | page name               | app:publica:general:login:contrasena bloqueada  | string           | App On Click Start |
            | level 1                 | login                                           | string           | App On Click Start |
            | level 2                 | contrasena bloqueada                            | string           | App On Click Start |
            | language                | ES                                              | string           | App On Click Start |
            | page area               | publica                                         | string           | App On Click Start |
            | page intent             | informacion                                     | string           | App On Click Start |
            | channel                 | online                                          | string           | App On Click Start |
            | page instance ID        | de                                              | string           | App On Click Start |
            | page info version       | appVersion                                      | regexp named     | App On Click Start |
            | page segment            | general                                         | string           | App On Click Start |
            | sysEnv                  | app                                             | string           | App On Click Start |
            | business unit           | BBVA Mexico                                     | string           | App On Click Start |
            | site app name           | App BBVA Mexico                                 | string           | App On Click Start |
            | project name            | Glomo                                           | string           | App On Click Start |
            | device mobile           | si                                              | string           | App On Click Start |
            | user userState          | no logado                                       | string           | App On Click Start |
            | user segment global     | 003001                                          | string           | App On Click Start |
            | profile ID              |                                                 | string           | App On Click Start |
            | global application      | access key recovery                             | string           | App On Click Start |
            | application type        | operativa                                       | string           | App On Click Start |
            | application name        | olvido contrasena                               | string           | App On Click Start |
            | application step        | desbloquear                                     | string           | App On Click Start |
            | fulfillment model       | online                                          | string           | App On Click Start |
            | internal campaign       |                                                 | empty array      | App On Click Start |
            | optimization attributes |                                                 | empty array      | App On Click Start |
            | products attributes     |                                                 | empty array      | App On Click Start |

    @ANA_EVENT_LOG009
    @analytics
    @ios @android @native
    @MX @backend(test)
    @vbank
    @manual @JIRA.GLOMOGL-21523
    Scenario: Biometric login failed - analytic type link event
        Given a user with the following criteria
            | criteria                     |
            | with biometrics capabilities |
            | with biometrics configured   |
            | with soft token seed         |
        And the user accesses to Login Page
        And the analytics interceptor service is initiated
        And the user does login
        When the biometric recognition fail
        Then the analytics events contains the following variables
            | item                    | value                     | type             | event              |
            | analytics               | analytics/glomo_base      | json schema      | Unsuccessful Login |
            | version DL              | 20250414_5.0              | string           | Unsuccessful Login |
            | page name               | app:publica:general:login | string           | Unsuccessful Login |
            | level 1                 | login                     | string           | Unsuccessful Login |
            | language                | ES                        | string           | Unsuccessful Login |
            | page area               | publica                   | string           | Unsuccessful Login |
            | page intent             | informacion               | string           | Unsuccessful Login |
            | channel                 | online                    | string           | Unsuccessful Login |
            | page instance ID        | de                        | string           | Unsuccessful Login |
            | page info version       | appVersion                | regexp named     | Unsuccessful Login |
            | page segment            | general                   | string           | Unsuccessful Login |
            | sysEnv                  | app                       | string           | Unsuccessful Login |
            | business unit           | BBVA Mexico               | string           | Unsuccessful Login |
            | site app name           | App BBVA Mexico           | string           | Unsuccessful Login |
            | project name            | Glomo                     | string           | Unsuccessful Login |
            | login type              | touch id                  | string           | Unsuccessful Login |
            | device mobile           | si                        | string           | Unsuccessful Login |
            | user userState          | no logado                 | string           | Unsuccessful Login |
            | user segment global     | 003001                    | string           | Unsuccessful Login |
            | profile ID              | profileID                 | string           | Unsuccessful Login |
            | error type              | error por biometria       | string           | Unsuccessful Login |
            | internal campaign       |                           | empty array      | Unsuccessful Login |
            | optimization attributes |                           | empty array      | Unsuccessful Login |
            | application             |                           | empty str object | Unsuccessful Login |
            | products attributes     |                           | empty array      | Unsuccessful Login |

    @ANA_EVENT_LOG010
    @analytics
    @ios @android @native
    @MX @backend(test)
    @vbank
    @manual @JIRA.GLOMOGL-21523
    Scenario: Biometric login failed several time - analytic type view event
        Given a user with the following criteria
            | criteria                     |
            | with biometrics capabilities |
            | with biometrics configured   |
            | with soft token seed         |
        And the user accesses to Login Page
        And the analytics interceptor service is initiated
        And the user does login
        When the biometric recognition fails several times
        Then the analytics events contains the following variables
            | item                    | value                                           | type             | event     |
            | analytics               | analytics/glomo_base                            | json schema      | Page View |
            | version DL              | 20250414_5.0                                    | string           | Page View |
            | page name               | app:publica:general:login:error del sistema     | string           | Page View |
            | level 1                 | login                                           | string           | Page View |
            | level 2                 | error del sistema                               | string           | Page View |
            | language                | ES                                              | string           | Page View |
            | page area               | publica                                         | string           | Page View |
            | page intent             | informacion                                     | string           | Page View |
            | channel                 | online                                          | string           | Page View |
            | page instance ID        | de                                              | string           | Page View |
            | page info version       | appVersion                                      | regexp named     | Page View |
            | page segment            | general                                         | string           | Page View |
            | sysEnv                  | app                                             | string           | Page View |
            | business unit           | BBVA Mexico                                     | string           | Page View |
            | site app name           | App BBVA Mexico                                 | string           | Page View |
            | project name            | Glomo                                           | string           | Page View |
            | device mobile           | si                                              | string           | Page View |
            | user userState          | no logado                                       | string           | Page View |
            | user segment global     | 003001                                          | string           | Page View |
            | profile ID              | profileID                                       | string           | Page View |
            | internal campaign       |                                                 | empty array      | Page View |
            | optimization attributes |                                                 | empty array      | Page View |
            | application             |                                                 | empty str object | Page View |
            | products attributes     |                                                 | empty array      | Page View |

    @ANA_EVENT_LOG011
    @analytics
    @ios @android @native
    @MX @backend(test)
    @vbank
    @manual @JIRA.GLOMOGL-21523
    Scenario: Biometric desconfigured login error - analytic type link event
        Given a user with the following criteria
            | criteria                     |
            | with biometrics capabilities |
            | with biometrics configured   |
            | with soft token seed         |
            | biometric desconfigured      |
        And the user accesses to Login Page
        And the analytics interceptor service is initiated
        And the user does login
        When the biometric recognition fail
        Then the analytics events contains the following variables
            | item                    | value                     | type             | event              |
            | analytics               | analytics/glomo_base      | json schema      | Unsuccessful Login |
            | version DL              | 20250414_5.0              | string           | Unsuccessful Login |
            | page name               | app:publica:general:login | string           | Unsuccessful Login |
            | level 1                 | login                     | string           | Unsuccessful Login |
            | language                | ES                        | string           | Unsuccessful Login |
            | page area               | publica                   | string           | Unsuccessful Login |
            | page intent             | informacion               | string           | Unsuccessful Login |
            | channel                 | online                    | string           | Unsuccessful Login |
            | page instance ID        | de                        | string           | Unsuccessful Login |
            | page info version       | appVersion                | regexp named     | Unsuccessful Login |
            | page segment            | general                   | string           | Unsuccessful Login |
            | sysEnv                  | app                       | string           | Unsuccessful Login |
            | business unit           | BBVA Mexico               | string           | Unsuccessful Login |
            | site app name           | App BBVA Mexico           | string           | Unsuccessful Login |
            | project name            | Glomo                     | string           | Unsuccessful Login |
            | login type              | touch id                  | string           | Unsuccessful Login |
            | device mobile           | si                        | string           | Unsuccessful Login |
            | user userState          | no logado                 | string           | Unsuccessful Login |
            | user segment global     | 003001                    | string           | Unsuccessful Login |
            | profile ID              | profileID                 | string           | Unsuccessful Login |
            | error type              | biometria desconfigurada  | string           | Unsuccessful Login |
            | internal campaign       |                           | empty array      | Unsuccessful Login |
            | optimization attributes |                           | empty array      | Unsuccessful Login |
            | application             |                           | empty str object | Unsuccessful Login |
            | products attributes     |                           | empty array      | Unsuccessful Login |

    @ANA_EVENT_LOG012
    @analytics
    @ios @android @native
    @MX @backend(test)
    @vbank
    @manual @JIRA.GLOMOGL-21523
    Scenario: Unvalaible fido service random error - analytic type link event
        Given a user with the following criteria
            | criteria                     |
            | with biometrics capabilities |
            | with biometrics configured   |
            | with soft token seed         |
        And the user accesses to Login Page
        And the analytics interceptor service is initiated
        And the user does login
        When the biometric recognition fail
        Then the analytics events contains the following variables
            | item                    | value                     | type             | event              |
            | analytics               | analytics/glomo_base      | json schema      | Unsuccessful Login |
            | version DL              | 20250414_5.0              | string           | Unsuccessful Login |
            | page name               | app:publica:general:login | string           | Unsuccessful Login |
            | level 1                 | login                     | string           | Unsuccessful Login |
            | language                | ES                        | string           | Unsuccessful Login |
            | page area               | publica                   | string           | Unsuccessful Login |
            | page intent             | informacion               | string           | Unsuccessful Login |
            | channel                 | online                    | string           | Unsuccessful Login |
            | page instance ID        | de                        | string           | Unsuccessful Login |
            | page info version       | appVersion                | regexp named     | Unsuccessful Login |
            | page segment            | general                   | string           | Unsuccessful Login |
            | sysEnv                  | app                       | string           | Unsuccessful Login |
            | business unit           | BBVA Mexico               | string           | Unsuccessful Login |
            | site app name           | App BBVA Mexico           | string           | Unsuccessful Login |
            | project name            | Glomo                     | string           | Unsuccessful Login |
            | login type              | touch id                  | string           | Unsuccessful Login |
            | device mobile           | si                        | string           | Unsuccessful Login |
            | user userState          | no logado                 | string           | Unsuccessful Login |
            | user segment global     | 003001                    | string           | Unsuccessful Login |
            | profile ID              | profileID                 | string           | Unsuccessful Login |
            | error type              | fallo ingreso app         | string           | Unsuccessful Login |
            | internal campaign       |                           | empty array      | Unsuccessful Login |
            | optimization attributes |                           | empty array      | Unsuccessful Login |
            | application             |                           | empty str object | Unsuccessful Login |
            | products attributes     |                           | empty array      | Unsuccessful Login |

    @ANA_EVENT_LOG013
    @analytics
    @ios @android @native
    @MX @backend(test)
    @vbank
    @manual @JIRA.GLOMOGL-21523
    Scenario: Unvalaible fido service random error - analytic type view event
        Given a user with the following criteria
            | criteria                     |
            | with biometrics capabilities |
            | with biometrics configured   |
            | with soft token seed         |
        And the user accesses to Login Page
        And the analytics interceptor service is initiated
        When the user does login
        Then the analytics events contains the following variables
            | item                    | value                                           | type             | event     |
            | analytics               | analytics/glomo_base                            | json schema      | Page View |
            | version DL              | 20250414_5.0                                    | string           | Page View |
            | page name               | app:publica:general:login:fallo ingreso app     | string           | Page View |
            | level 1                 | login                                           | string           | Page View |
            | level 2                 | fallo ingreso app                               | string           | Page View |
            | language                | ES                                              | string           | Page View |
            | page area               | publica                                         | string           | Page View |
            | page intent             | informacion                                     | string           | Page View |
            | channel                 | online                                          | string           | Page View |
            | page instance ID        | de                                              | string           | Page View |
            | page info version       | appVersion                                      | regexp named     | Page View |
            | page segment            | general                                         | string           | Page View |
            | sysEnv                  | app                                             | string           | Page View |
            | business unit           | BBVA Mexico                                     | string           | Page View |
            | site app name           | App BBVA Mexico                                 | string           | Page View |
            | project name            | Glomo                                           | string           | Page View |
            | device mobile           | si                                              | string           | Page View |
            | user userState          | no logado                                       | string           | Page View |
            | user segment global     | 003001                                          | string           | Page View |
            | profile ID              | profileID                                       | string           | Page View |
            | internal campaign       |                                                 | empty array      | Page View |
            | optimization attributes |                                                 | empty array      | Page View |
            | application             |                                                 | empty str object | Page View |
            | products attributes     |                                                 | empty array      | Page View |

    @ANA_EVENT_LOG014
    @analytics
    @ios @android @native
    @MX @backend(test)
    @vbank
    @manual @JIRA.GLOMOGL-21523
    Scenario: New register login error - analytic type link event
        Given a user with the following criteria
            | criteria                     |
            | with biometrics capabilities |
            | with biometrics configured   |
            | with soft token seed         |
            | needs register               |
        And the analytics interceptor service is initiated
        And the user does login
        When the biometric recognition fail
        Then the analytics events contains the following variables
            | item                    | value                        | type             | event              |
            | analytics               | analytics/glomo_base         | json schema      | Unsuccessful Login |
            | version DL              | 20250414_5.0                 | string           | Unsuccessful Login |
            | page name               | app:publica:general:login    | string           | Unsuccessful Login |
            | level 1                 | login                        | string           | Unsuccessful Login |
            | language                | ES                           | string           | Unsuccessful Login |
            | page area               | publica                      | string           | Unsuccessful Login |
            | page intent             | informacion                  | string           | Unsuccessful Login |
            | channel                 | online                       | string           | Unsuccessful Login |
            | page instance ID        | de                           | string           | Unsuccessful Login |
            | page info version       | appVersion                   | regexp named     | Unsuccessful Login |
            | page segment            | general                      | string           | Unsuccessful Login |
            | sysEnv                  | app                          | string           | Unsuccessful Login |
            | business unit           | BBVA Mexico                  | string           | Unsuccessful Login |
            | site app name           | App BBVA Mexico              | string           | Unsuccessful Login |
            | project name            | Glomo                        | string           | Unsuccessful Login |
            | login type              | touch id                     | string           | Unsuccessful Login |
            | device mobile           | si                           | string           | Unsuccessful Login |
            | user userState          | no logado                    | string           | Unsuccessful Login |
            | user segment global     | 003001                       | string           | Unsuccessful Login |
            | profile ID              | profileID                    | string           | Unsuccessful Login |
            | error type              | nuevo registro por seguridad | string           | Unsuccessful Login |
            | internal campaign       |                              | empty array      | Unsuccessful Login |
            | optimization attributes |                              | empty array      | Unsuccessful Login |
            | application             |                              | empty str object | Unsuccessful Login |
            | products attributes     |                              | empty array      | Unsuccessful Login |

    @ANA_EVENT_LOG015
    @analytics
    @ios @android @native
    @MX @backend(test)
    @vbank
    @manual @JIRA.GLOMOGL-21523
    Scenario: New register login error - analytic type view event
        Given a user with the following criteria
            | criteria                     |
            | with biometrics capabilities |
            | with biometrics configured   |
            | with soft token seed         |
            | needs register               |
        And the user accesses to Login Page
        And the analytics interceptor service is initiated
        And the user does login
        When the biometric recognition fails several times
        Then the analytics events contains the following variables
            | item                    | value                                                   | type             | event     |
            | analytics               | analytics/glomo_base                                    | json schema      | Page View |
            | version DL              | 20250414_5.0                                            | string           | Page View |
            | page name               | app:publica:general:login:nuevo registro por seguridad  | string           | Page View |
            | level 1                 | login                                                   | string           | Page View |
            | level 2                 | nuevo registro por seguridad                            | string           | Page View |
            | language                | ES                                                      | string           | Page View |
            | page area               | publica                                                 | string           | Page View |
            | page intent             | informacion                                             | string           | Page View |
            | channel                 | online                                                  | string           | Page View |
            | page instance ID        | de                                                      | string           | Page View |
            | page info version       | appVersion                                              | regexp named     | Page View |
            | page segment            | general                                                 | string           | Page View |
            | sysEnv                  | app                                                     | string           | Page View |
            | business unit           | BBVA Mexico                                             | string           | Page View |
            | site app name           | App BBVA Mexico                                         | string           | Page View |
            | project name            | Glomo                                                   | string           | Page View |
            | device mobile           | si                                                      | string           | Page View |
            | user userState          | no logado                                               | string           | Page View |
            | user segment global     | 003001                                                  | string           | Page View |
            | profile ID              | profileID                                               | string           | Page View |
            | internal campaign       |                                                         | empty array      | Page View |
            | optimization attributes |                                                         | empty array      | Page View |
            | application             |                                                         | empty str object | Page View |
            | products attributes     |                                                         | empty array      | Page View |

    @ANA_EVENT_LOG016
    @analytics
    @ios @android @native
    @MX @backend(test)
    @vbank
    @manual @JIRA.GLOMOGL-21523
    Scenario: New register login error - analytic type on click start event
        Given a user with the following criteria
            | criteria                     |
            | with biometrics capabilities |
            | with biometrics configured   |
            | with soft token seed         |
            | needs register               |
        And the user accesses to Login Page
        And the user does login
        And the analytics interceptor service is initiated
        When the user inits the register process
        Then the analytics events contains the following variables
            | item                    | value                                           | type             | event              |
            | analytics               | analytics/glomo_base                            | json schema      | App On Click Start |
            | version DL              | 20250414_5.0                                    | string           | App On Click Start |
            | page name               | app:publica:general:login:contrasena bloqueada  | string           | App On Click Start |
            | level 1                 | login                                           | string           | App On Click Start |
            | level 2                 | contrasena bloqueada                            | string           | App On Click Start |
            | language                | ES                                              | string           | App On Click Start |
            | page area               | publica                                         | string           | App On Click Start |
            | page intent             | informacion                                     | string           | App On Click Start |
            | channel                 | online                                          | string           | App On Click Start |
            | page instance ID        | de                                              | string           | App On Click Start |
            | page info version       | appVersion                                      | regexp named     | App On Click Start |
            | page segment            | general                                         | string           | App On Click Start |
            | sysEnv                  | app                                             | string           | App On Click Start |
            | business unit           | BBVA Mexico                                     | string           | App On Click Start |
            | site app name           | App BBVA Mexico                                 | string           | App On Click Start |
            | project name            | Glomo                                           | string           | App On Click Start |
            | device mobile           | si                                              | string           | App On Click Start |
            | user userState          | no logado                                       | string           | App On Click Start |
            | user segment global     | 003001                                          | string           | App On Click Start |
            | profile ID              | profileID                                       | string           | App On Click Start |
            | global application      | digital activation                              | string           | App On Click Start |
            | application type        | alta clientes                                   | string           | App On Click Start |
            | application name        | registro token movil                            | string           | App On Click Start |
            | application step        | desbloquear                                     | string           | App On Click Start |
            | fulfillment model       | online                                          | string           | App On Click Start |
            | internal campaign       |                                                 | empty array      | App On Click Start |
            | optimization attributes |                                                 | empty array      | App On Click Start |
            | products attributes     |                                                 | empty array      | App On Click Start |

    @ANA_EVENT_LOG017
    @analytics
    @ios @android @native
    @MX @backend(test)
    @vbank
    @manual @JIRA.GLOMOGL-21523
    Scenario: Configuration changed login error - analytic type link event
        Given a user with the following criteria
            | criteria                     |
            | with biometrics capabilities |
            | with biometrics configured   |
            | with soft token seed         |
            | configuration changed        |
        And the user accesses to Login Page
        And the analytics interceptor service is initiated
        When the user does login
        Then the analytics events contains the following variables
            | item                    | value                        | type             | event              |
            | analytics               | analytics/glomo_base         | json schema      | Unsuccessful Login |
            | version DL              | 20250414_5.0                 | string           | Unsuccessful Login |
            | page name               | app:publica:general:login    | string           | Unsuccessful Login |
            | level 1                 | login                        | string           | Unsuccessful Login |
            | language                | ES                           | string           | Unsuccessful Login |
            | page area               | publica                      | string           | Unsuccessful Login |
            | page intent             | informacion                  | string           | Unsuccessful Login |
            | channel                 | online                       | string           | Unsuccessful Login |
            | page instance ID        | de                           | string           | Unsuccessful Login |
            | page info version       | appVersion                   | regexp named     | Unsuccessful Login |
            | page segment            | general                      | string           | Unsuccessful Login |
            | sysEnv                  | app                          | string           | Unsuccessful Login |
            | business unit           | BBVA Mexico                  | string           | Unsuccessful Login |
            | site app name           | App BBVA Mexico              | string           | Unsuccessful Login |
            | project name            | Glomo                        | string           | Unsuccessful Login |
            | login type              | touch id                     | string           | Unsuccessful Login |
            | device mobile           | si                           | string           | Unsuccessful Login |
            | user userState          | no logado                    | string           | Unsuccessful Login |
            | user segment global     | 003001                       | string           | Unsuccessful Login |
            | profile ID              | profileID                    | string           | Unsuccessful Login |
            | error type              | configuracion cambiada       | string           | Unsuccessful Login |
            | internal campaign       |                              | empty array      | Unsuccessful Login |
            | optimization attributes |                              | empty array      | Unsuccessful Login |
            | application             |                              | empty str object | Unsuccessful Login |
            | products attributes     |                              | empty array      | Unsuccessful Login |

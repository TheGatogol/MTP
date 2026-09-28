@accesAndSignaturesAnalytics
Feature: Analytics - Access And Signature

    @ANA_EVENT_AAS001
    @analytics @MX
    @vbank @backend(test)
    @web @ios @android
    @web-done
    Scenario: AAS - The user goes to access and signatures screen and turn on the switch - App Onclick Start
        Given a user with the following criteria
            | criteria      |
            | fido enrolled |
        And the user access the "dashboard" screen
        And the user navigates to the access and signatures screen and closes the modal
        And the analytics interceptor service is initiated
        When the user wants turn on the biometrics switch on access tab page
        Then the analytics events contains the following variables
            | item                    | value                                                        | type         | event              |
            | analytics               | analytics/glomo_base                                         | json schema  | App On Click Start |
            | version DL              | 20250414_5.0                                                 | string       | App On Click Start |
            | page name               | app:privada:personas:seguridad y privacidad:accesos y firmas | string       | App On Click Start |
            | level 1                 | seguridad y privacidad                                       | string       | App On Click Start |
            | level 2                 | accesos y firmas                                             | string       | App On Click Start |
            | language                | ES                                                           | string       | App On Click Start |
            | page area               | privada                                                      | string       | App On Click Start |
            | page intent             | informacion                                                  | string       | App On Click Start |
            | channel                 | online                                                       | string       | App On Click Start |
            | page instance ID        | de                                                           | string       | App On Click Start |
            | page info version       | appVersion                                                   | regexp named | App On Click Start |
            | page segment            | personas                                                     | string       | App On Click Start |
            | sysEnv                  | app                                                          | string       | App On Click Start |
            | business unit           | BBVA Mexico                                                  | string       | App On Click Start |
            | site app name           | App BBVA Mexico                                              | string       | App On Click Start |
            | project name            | Glomo                                                        | string       | App On Click Start |
            | device mobile           | si                                                           | string       | App On Click Start |
            | user userState          | logado                                                       | string       | App On Click Start |
            | user segment global     | 003001                                                       | string       | App On Click Start |
            | profile ID              | profileID                                                    | regexp named | App On Click Start |
            | user gender             | gender                                                       | regexp named | App On Click Start |
            | user country            | lettersAndSpaceOrEmpty                                       | regexp named | App On Click Start |
            | user state              | lettersAndSpaceOrEmpty                                       | regexp named | App On Click Start |
            | global application      | fido enrollment                                              | string       | App On Click Start |
            | application name        | fido enrollment                                              | string       | App On Click Start |
            | application type        | autogestion                                                  | string       | App On Click Start |
            | application step        | activar switch huella digital                                | string       | App On Click Start |
            | fulfillment model       | online                                                       | string       | App On Click Start |
            | internal campaign       |                                                              | empty array  | App On Click Start |
            | optimization attributes |                                                              | empty array  | App On Click Start |
            | products attributes     |                                                              | empty array  | App On Click Start |

    @ANA_EVENT_AAS002
    @analytics @MX
    @vbank @backend(test)
    @web @ios @android
    @web-done
    Scenario: AAS - The user turns on the switch and see a modal - App Page Visit
        Given a user with the following criteria
            | criteria      |
            | fido enrolled |
        And the user access the "dashboard" screen
        And the user navigates to the access and signatures screen and closes the modal
        And the analytics interceptor service is initiated
        When the user wants turn on the biometrics switch on access tab page
        Then the analytics events contains the following variables
            | item                    | value                                                           | type         | event          |
            | analytics               | analytics/glomo_base                                            | json schema  | App Page Visit |
            | version DL              | 20250414_5.0                                                    | string       | App Page Visit |
            | page name               | app:privada:personas:fido enrollment:1 metodo de acceso y firma | string       | App Page Visit |
            | level 1                 | fido enrollment                                                 | string       | App Page Visit |
            | level 2                 | 1 metodo de acceso y firma                                      | string       | App Page Visit |
            | language                | ES                                                              | string       | App Page Visit |
            | page area               | privada                                                         | string       | App Page Visit |
            | page intent             | transaccion                                                     | string       | App Page Visit |
            | channel                 | online                                                          | string       | App Page Visit |
            | page instance ID        | de                                                              | string       | App Page Visit |
            | page info version       | appVersion                                                      | regexp named | App Page Visit |
            | page segment            | personas                                                        | string       | App Page Visit |
            | sysEnv                  | app                                                             | string       | App Page Visit |
            | business unit           | BBVA Mexico                                                     | string       | App Page Visit |
            | site app name           | App BBVA Mexico                                                 | string       | App Page Visit |
            | project name            | Glomo                                                           | string       | App Page Visit |
            | device mobile           | si                                                              | string       | App Page Visit |
            | user userState          | logado                                                          | string       | App Page Visit |
            | user segment global     | 003001                                                          | string       | App Page Visit |
            | profile ID              | profileID                                                       | regexp named | App Page Visit |
            | user gender             | gender                                                          | regexp named | App Page Visit |
            | user country            | lettersAndSpaceOrEmpty                                          | regexp named | App Page Visit |
            | user state              | lettersAndSpaceOrEmpty                                          | regexp named | App Page Visit |
            | global application      | fido enrollment                                                 | string       | App Page Visit |
            | application name        | fido enrollment                                                 | string       | App Page Visit |
            | application type        | autogestion                                                     | string       | App Page Visit |
            | application step        | 1 metodo de acceso y firma                                      | string       | App Page Visit |
            | fulfillment model       | online                                                          | string       | App Page Visit |
            | application typology    | touch id                                                        | string       | App Page Visit |
            | internal campaign       |                                                                 | empty array  | App Page Visit |
            | optimization attributes |                                                                 | empty array  | App Page Visit |
            | products attributes     |                                                                 | empty array  | App Page Visit |

    @ANA_EVENT_AAS003
    @analytics @MX
    @vbank @backend(test)
    @web @ios @android
    @web-done
    Scenario: AAS - The user access tap the configuration button to access fido - App Started - configuration
        Given a user with the following criteria
            | criteria      |
            | fido enrolled |
        And the user access the "dashboard" screen
        And the user navigates to the access and signatures screen and closes the modal
        And the user wants turn on the biometrics switch on access tab page
        And the analytics interceptor service is initiated
        When the user accesses to the fido configuration page
        Then the analytics events contains the following variables
            | item                    | value                                                           | type         | event       |
            | analytics               | analytics/glomo_base                                            | json schema  | App Started |
            | version DL              | 20250414_5.0                                                    | string       | App Started |
            | page name               | app:privada:personas:fido enrollment:1 metodo de acceso y firma | string       | App Started |
            | level 1                 | fido enrollment                                                 | string       | App Started |
            | level 2                 | 1 metodo de acceso y firma                                      | string       | App Started |
            | language                | ES                                                              | string       | App Started |
            | page area               | privada                                                         | string       | App Started |
            | page intent             | transaccion                                                     | string       | App Started |
            | channel                 | online                                                          | string       | App Started |
            | page instance ID        | de                                                              | string       | App Started |
            | page info version       | appVersion                                                      | regexp named | App Started |
            | page segment            | personas                                                        | string       | App Started |
            | sysEnv                  | app                                                             | string       | App Started |
            | business unit           | BBVA Mexico                                                     | string       | App Started |
            | site app name           | App BBVA Mexico                                                 | string       | App Started |
            | project name            | Glomo                                                           | string       | App Started |
            | device mobile           | si                                                              | string       | App Started |
            | user userState          | logado                                                          | string       | App Started |
            | user segment global     | 003001                                                          | string       | App Started |
            | profile ID              | profileID                                                       | regexp named | App Started |
            | user gender             | gender                                                          | regexp named | App Started |
            | user country            | lettersAndSpaceOrEmpty                                          | regexp named | App Started |
            | user state              | lettersAndSpaceOrEmpty                                          | regexp named | App Started |
            | global application      | fido enrollment                                                 | string       | App Started |
            | application name        | fido enrollment                                                 | string       | App Started |
            | application type        | autogestion                                                     | string       | App Started |
            | application step        | configurar                                                      | string       | App Started |
            | fulfillment model       | online                                                          | string       | App Started |
            | application typology    | touch id                                                        | string       | App Started |
            | internal campaign       |                                                                 | empty array  | App Started |
            | optimization attributes |                                                                 | empty array  | App Started |
            | products attributes     |                                                                 | empty array  | App Started |

    @ANA_EVENT_AAS004
    @analytics @MX
    @vbank @backend(test)
    @web @ios @android
    @web-done
    Scenario: AAS - The user access tap the another time button and stays in access and signatures screen - App Started - at another time
        Given a user with the following criteria
            | criteria      |
            | fido enrolled |
        And the user access the "dashboard" screen
        And the user navigates to the access and signatures screen and closes the modal
        And the user wants turn on the biometrics switch on access tab page
        And the analytics interceptor service is initiated
        When the user doesn't wants activate fido
        Then the analytics events contains the following variables
            | item                    | value                                                           | type         | event       |
            | analytics               | analytics/glomo_base                                            | json schema  | App Started |
            | version DL              | 20250414_5.0                                                    | string       | App Started |
            | page name               | app:privada:personas:fido enrollment:1 metodo de acceso y firma | string       | App Started |
            | level 1                 | fido enrollment                                                 | string       | App Started |
            | level 2                 | 1 metodo de acceso y firma                                      | string       | App Started |
            | language                | ES                                                              | string       | App Started |
            | page area               | privada                                                         | string       | App Started |
            | page intent             | transaccion                                                     | string       | App Started |
            | channel                 | online                                                          | string       | App Started |
            | page instance ID        | de                                                              | string       | App Started |
            | page info version       | appVersion                                                      | regexp named | App Started |
            | page segment            | personas                                                        | string       | App Started |
            | sysEnv                  | app                                                             | string       | App Started |
            | business unit           | BBVA Mexico                                                     | string       | App Started |
            | site app name           | App BBVA Mexico                                                 | string       | App Started |
            | project name            | Glomo                                                           | string       | App Started |
            | device mobile           | si                                                              | string       | App Started |
            | user userState          | logado                                                          | string       | App Started |
            | user segment global     | 003001                                                          | string       | App Started |
            | profile ID              | profileID                                                       | regexp named | App Started |
            | user gender             | gender                                                          | regexp named | App Started |
            | user country            | lettersAndSpaceOrEmpty                                          | regexp named | App Started |
            | user state              | lettersAndSpaceOrEmpty                                          | regexp named | App Started |
            | global application      | fido enrollment                                                 | string       | App Started |
            | application name        | fido enrollment                                                 | string       | App Started |
            | application type        | autogestion                                                     | string       | App Started |
            | application step        | en otro momento                                                 | string       | App Started |
            | fulfillment model       | online                                                          | string       | App Started |
            | application typology    | touch id                                                        | string       | App Started |
            | internal campaign       |                                                                 | empty array  | App Started |
            | optimization attributes |                                                                 | empty array  | App Started |
            | products attributes     |                                                                 | empty array  | App Started |

    @ANA_EVENT_AAS005
    @analytics @MX
    @vbank @backend(test)
    @web @ios @android
    @manual @JIRA.GLOMOGL-20071
    Scenario: AAS - The user acces to the fido activation screen - App Started - activated
        Given a user with the following criteria
            | criteria      |
            | fido enrolled |
        And the user access the "dashboard" screen
        And the user navigates to the access and signatures screen and closes the modal
        And the user turn on switch and goes to configuration
        And the analytics interceptor service is initiated
        When the user accesses to fido activation
        Then the analytics events contains the following variables
            | item                    | value                                                           | type         | event       |
            | analytics               | analytics/glomo_base                                            | json schema  | App Started |
            | version DL              | 20250414_5.0                                                    | string       | App Started |
            | page name               | app:privada:personas:fido enrollment:1 metodo de acceso y firma | string       | App Started |
            | level 1                 | fido enrollment                                                 | string       | App Started |
            | level 2                 | 1 metodo de acceso y firma                                      | string       | App Started |
            | language                | ES                                                              | string       | App Started |
            | page area               | privada                                                         | string       | App Started |
            | page intent             | transaccion                                                     | string       | App Started |
            | channel                 | online                                                          | string       | App Started |
            | page instance ID        | de                                                              | string       | App Started |
            | page info version       | appVersion                                                      | regexp named | App Started |
            | page segment            | personas                                                        | string       | App Started |
            | sysEnv                  | app                                                             | string       | App Started |
            | business unit           | BBVA Mexico                                                     | string       | App Started |
            | site app name           | App BBVA Mexico                                                 | string       | App Started |
            | project name            | Glomo                                                           | string       | App Started |
            | device mobile           | si                                                              | string       | App Started |
            | user userState          | logado                                                          | string       | App Started |
            | user segment global     | 003001                                                          | string       | App Started |
            | profile ID              | profileID                                                       | regexp named | App Started |
            | user gender             | gender                                                          | regexp named | App Started |
            | user country            | lettersAndSpaceOrEmpty                                          | regexp named | App Started |
            | user state              | lettersAndSpaceOrEmpty                                          | regexp named | App Started |
            | global application      | fido enrollment                                                 | string       | App Started |
            | application name        | fido enrollment                                                 | string       | App Started |
            | application type        | autogestion                                                     | string       | App Started |
            | application step        | activar                                                         | string       | App Started |
            | fulfillment model       | online                                                          | string       | App Started |
            | application typology    | touch id                                                        | string       | App Started |
            | internal campaign       |                                                                 | empty array  | App Started |
            | optimization attributes |                                                                 | empty array  | App Started |
            | products attributes     |                                                                 | empty array  | App Started |

    @ANA_EVENT_AAS006
    @analytics @MX
    @vbank @backend(test)
    @web @ios @android
    @manual @JIRA.GLOMOGL-20071
    Scenario: AAS - The user goes to the fido activation screen and enters to biometric - App Step 2 - view biometric
        Given a user with the following criteria
            | criteria      |
            | fido enrolled |
        And the user access the "dashboard" screen
        And the user navigates to the access and signatures screen and closes the modal
        And the user turn on switch and goes to configuration
        And the analytics interceptor service is initiated
        When the user accesses to fido activation
        Then the analytics events contains the following variables
            | item                    | value                                                    | type         | event      |
            | analytics               | analytics/glomo_base                                     | json schema  | App Step 2 |
            | version DL              | 20250414_5.0                                             | string       | App Step 2 |
            | page name               | app:privada:personas:fido enrollment:2 ingresa biometria | string       | App Step 2 |
            | level 1                 | fido enrollment                                          | string       | App Step 2 |
            | level 2                 | 2 ingresa biometria                                      | string       | App Step 2 |
            | language                | ES                                                       | string       | App Step 2 |
            | page area               | privada                                                  | string       | App Step 2 |
            | page intent             | transaccion                                              | string       | App Step 2 |
            | channel                 | online                                                   | string       | App Step 2 |
            | page instance ID        | de                                                       | string       | App Step 2 |
            | page info version       | appVersion                                               | regexp named | App Step 2 |
            | page segment            | personas                                                 | string       | App Step 2 |
            | sysEnv                  | app                                                      | string       | App Step 2 |
            | business unit           | BBVA Mexico                                              | string       | App Step 2 |
            | site app name           | App BBVA Mexico                                          | string       | App Step 2 |
            | project name            | Glomo                                                    | string       | App Step 2 |
            | device mobile           | si                                                       | string       | App Step 2 |
            | user userState          | logado                                                   | string       | App Step 2 |
            | user segment global     | 003001                                                   | string       | App Step 2 |
            | profile ID              | profileID                                                | regexp named | App Step 2 |
            | user gender             | gender                                                   | regexp named | App Step 2 |
            | user country            | lettersAndSpaceOrEmpty                                   | regexp named | App Step 2 |
            | user state              | lettersAndSpaceOrEmpty                                   | regexp named | App Step 2 |
            | global application      | fido enrollment                                          | string       | App Step 2 |
            | application name        | fido enrollment                                          | string       | App Step 2 |
            | application type        | autogestion                                              | string       | App Step 2 |
            | application step        | 2 ingresa biometria                                      | string       | App Step 2 |
            | fulfillment model       | online                                                   | string       | App Step 2 |
            | application typology    | touch id                                                 | string       | App Step 2 |
            | internal campaign       |                                                          | empty array  | App Step 2 |
            | optimization attributes |                                                          | empty array  | App Step 2 |
            | products attributes     |                                                          | empty array  | App Step 2 |

    @ANA_EVENT_AAS007
    @analytics @MX
    @vbank @backend(test)
    @web @ios @android
    @manual @JIRA.GLOMOGL-20071
    Scenario: AAS - The user request an otp - App Step 3 - otp
        Given a user with the following criteria
            | criteria        |
            | fido enrolled |
        And the user access the "dashboard" screen
        And the user navigates to the access and signatures screen and closes the modal
        And the user turn on switch and goes to configuration
        And the analytics interceptor service is initiated
        When the user accesses to fido activation
        Then the analytics events contains the following variables
            | item                    | value                                      | type         | event      |
            | analytics               | analytics/glomo_base                       | json schema  | App Step 3 |
            | version DL              | 20250414_5.0                               | string       | App Step 3 |
            | page name               | app:privada:personas:fido enrollment:3 otp | string       | App Step 3 |
            | level 1                 | fido enrollment                            | string       | App Step 3 |
            | level 2                 | 3 otp                                      | string       | App Step 3 |
            | language                | ES                                         | string       | App Step 3 |
            | page area               | privada                                    | string       | App Step 3 |
            | page intent             | transaccion                                | string       | App Step 3 |
            | channel                 | online                                     | string       | App Step 3 |
            | page instance ID        | de                                         | string       | App Step 3 |
            | page info version       | appVersion                                 | regexp named | App Step 3 |
            | page segment            | personas                                   | string       | App Step 3 |
            | sysEnv                  | app                                        | string       | App Step 3 |
            | business unit           | BBVA Mexico                                | string       | App Step 3 |
            | site app name           | App BBVA Mexico                            | string       | App Step 3 |
            | project name            | Glomo                                      | string       | App Step 3 |
            | device mobile           | si                                         | string       | App Step 3 |
            | user userState          | logado                                     | string       | App Step 3 |
            | user segment global     | 003001                                     | string       | App Step 3 |
            | profile ID              | profileID                                  | regexp named | App Step 3 |
            | user gender             | gender                                     | regexp named | App Step 3 |
            | user country            | lettersAndSpaceOrEmpty                     | regexp named | App Step 3 |
            | user state              | lettersAndSpaceOrEmpty                     | regexp named | App Step 3 |
            | global application      | fido enrollment                            | string       | App Step 3 |
            | application name        | fido enrollment                            | string       | App Step 3 |
            | application type        | autogestion                                | string       | App Step 3 |
            | application step        | 3 otp                                      | string       | App Step 3 |
            | fulfillment model       | online                                     | string       | App Step 3 |
            | application typology    | touch id                                   | string       | App Step 3 |
            | custom fields           | firma:token                                | string       | App Step 3 |
            | internal campaign       |                                            | empty array  | App Step 3 |
            | optimization attributes |                                            | empty array  | App Step 3 |
            | products attributes     |                                            | empty array  | App Step 3 |

    @ANA_AAS008
    @analytics @MX
    @vbank @backend(test)
    @web @ios @android
    @manual @JIRA.GLOMOGL-20071
    Scenario: AAS - The user finishes the process - App Completed - Page Success
        Given a user with the following criteria
            | criteria      |
            | fido enrolled |
        And the user access the "dashboard" screen
        And the user navigates to the access and signatures screen and closes the modal
        And the user turn on switch and goes to configuration
        And the analytics interceptor service is initiated
        When the user completes the registration process otp code
        Then the analytics events contains the following variables
            | item                    | value                                               | type         | event         |
            | analytics               | analytics/glomo_base                                | json schema  | App Completed |
            | version DL              | 20250414_5.0                                        | string       | App Completed |
            | page name               | app:privada:personas:fido enrollment:pagina exitosa | string       | App Completed |
            | level 1                 | fido enrollment                                     | string       | App Completed |
            | level 2                 | pagina exitosa                                      | string       | App Completed |
            | language                | ES                                                  | string       | App Completed |
            | page area               | privada                                             | string       | App Completed |
            | page intent             | transaccion                                         | string       | App Completed |
            | channel                 | online                                              | string       | App Completed |
            | page instance ID        | de                                                  | string       | App Completed |
            | page info version       | appVersion                                          | regexp named | App Completed |
            | page segment            | personas                                            | string       | App Completed |
            | sysEnv                  | app                                                 | string       | App Completed |
            | business unit           | BBVA Mexico                                         | string       | App Completed |
            | site app name           | App BBVA Mexico                                     | string       | App Completed |
            | project name            | Glomo                                               | string       | App Completed |
            | device mobile           | si                                                  | string       | App Completed |
            | user userState          | logado                                              | string       | App Completed |
            | user segment global     | 003001                                              | string       | App Completed |
            | profile ID              | profileID                                           | regexp named | App Completed |
            | user gender             | gender                                              | regexp named | App Completed |
            | user country            | lettersAndSpaceOrEmpty                              | regexp named | App Completed |
            | user state              | lettersAndSpaceOrEmpty                              | regexp named | App Completed |
            | global application      | fido enrollment                                     | string       | App Completed |
            | application name        | fido enrollment                                     | string       | App Completed |
            | application type        | autogestion                                         | string       | App Completed |
            | application step        | pagina exitosa                                      | string       | App Completed |
            | fulfillment model       | online                                              | string       | App Completed |
            | application typology    | touch id                                            | string       | App Completed |
            | application state       | finalizado                                          | string       | App Completed |
            | custom fields           | firma:token                                         | string       | App Completed |
            | internal campaign       |                                                     | empty array  | App Completed |
            | optimization attributes |                                                     | empty array  | App Completed |
            | products attributes     |                                                     | empty array  | App Completed |

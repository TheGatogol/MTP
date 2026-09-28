@contractSigningAnalytics
Feature: Analytics - Contract Signing

    @ANA_EVENT_CSF001
    @analytics @MX
    @vbank @backend(test)
    @web @ios @android
    @web-done
    Scenario: The user goes to access and signatures screen and turn on the switch - App Onclick Start
        Given a user with the following criteria
            | criteria                    |
            | deferred signature coowners |
        And the user accesses center notification
        And the analytics interceptor service is initiated
        When the user accesses "deferred signature coowners" in notification center
        Then the analytics events contains the following variables
            | item                | value                                          | type         | event              |
            | analytics           | analytics/glomo_base                           | json schema  | App On Click Start |
            | version DL          | 20250414_5.0                                   | string       | App On Click Start |
            | page name           | app:privada:patrimonial:notificaciones:detalle | string       | App On Click Start |
            | level 1             | notificaciones                                 | string       | App On Click Start |
            | level 2             | detalle                                        | string       | App On Click Start |
            | language            | ES                                             | string       | App On Click Start |
            | page area           | privada                                        | string       | App On Click Start |
            | page intent         | informacion                                    | string       | App On Click Start |
            | channel             | online                                         | string       | App On Click Start |
            | page instance ID    | de                                             | string       | App On Click Start |
            | page info version   | appVersion                                     | regexp named | App On Click Start |
            | page segment        | patrimonial                                    | string       | App On Click Start |
            | sysEnv              | app                                            | string       | App On Click Start |
            | business unit       | BBVA Mexico                                    | string       | App On Click Start |
            | site app name       | App BBVA Mexico                                | string       | App On Click Start |
            | project name        | Glomo                                          | string       | App On Click Start |
            | device mobile       | si                                             | string       | App On Click Start |
            | user userState      | logado                                         | string       | App On Click Start |
            | user segment global | 003003                                         | string       | App On Click Start |
            | profile ID          | profileID                                      | regexp named | App On Click Start |
            | user age            | age                                            | regexp named | App On Click Start |
            | user gender         | gender                                         | regexp named | App On Click Start |
            | user state          | lettersAndSpaceOrEmpty                         | regexp named | App On Click Start |
            | global application  | equity contract activation                     | string       | App On Click Start |
            | application name    | activacion contrato                            | string       | App On Click Start |
            | application type    | autogestion                                    | string       | App On Click Start |
            | application step    | detalle notificacion                           | string       | App On Click Start |
            | fulfillment model   | online                                         | string       | App On Click Start |

    @ANA_EVENT_CSF002
    @analytics @MX
    @vbank @backend(test)
    @web @ios @android
    @web-done
    Scenario: The user accesses the summary screen. - App Page Visit
        Given a user with the following criteria
            | criteria                    |
            | deferred signature coowners |
        And the user accesses center notification
        And the analytics interceptor service is initiated
        When the user accesses "deferred signature coowners" in notification center
        Then the analytics events contains the following variables
            | item                 | value                                                                | type         | event          |
            | analytics            | analytics/glomo_base                                                 | json schema  | App Page Visit |
            | version DL           | 20250414_5.0                                                         | string       | App Page Visit |
            | page name            | app:privada:patrimonial:activacion contrato:1 terminos y condiciones | string       | App Page Visit |
            | level 1              | activacion contrato                                                  | string       | App Page Visit |
            | level 2              | 1 terminos y condiciones                                             | string       | App Page Visit |
            | language             | ES                                                                   | string       | App Page Visit |
            | page area            | privada                                                              | string       | App Page Visit |
            | page intent          | informacion                                                          | string       | App Page Visit |
            | channel              | online                                                               | string       | App Page Visit |
            | page instance ID     | de                                                                   | string       | App Page Visit |
            | page info version    | appVersion                                                           | regexp named | App Page Visit |
            | page segment         | patrimonial                                                          | string       | App Page Visit |
            | sysEnv               | app                                                                  | string       | App Page Visit |
            | business unit        | BBVA Mexico                                                          | string       | App Page Visit |
            | site app name        | App BBVA Mexico                                                      | string       | App Page Visit |
            | project name         | Glomo                                                                | string       | App Page Visit |
            | device mobile        | si                                                                   | string       | App Page Visit |
            | user userState       | logado                                                               | string       | App Page Visit |
            | user segment global  | 003003                                                               | string       | App Page Visit |
            | profile ID           | profileID                                                            | regexp named | App Page Visit |
            | user age             | age                                                                  | regexp named | App Page Visit |
            | user gender          | gender                                                               | regexp named | App Page Visit |
            | user state           | lettersAndSpaceOrEmpty                                               | regexp named | App Page Visit |
            | global application   | equity contract activation                                           | string       | App Page Visit |
            | application name     | activacion contrato                                                  | string       | App Page Visit |
            | application typology | titular                                                              | string       | App Page Visit |
            | application type     | autogestion                                                          | string       | App Page Visit |
            | application step     | 1 terminos y condiciones                                             | string       | App Page Visit |
            | fulfillment model    | online                                                               | string       | App Page Visit |

    @ANA_EVENT_CSF003
    @analytics @MX
    @vbank @backend(test)
    @web @ios @android
    @web-done
    Scenario: The user selects terms and conditions. - App Started - configuration
        Given a user with the following criteria
            | criteria                    |
            | deferred signature coowners |
        And the user accesses center notification
        And the user accesses "deferred signature coowners" in notification center
        And the analytics interceptor service is initiated
        When the user check the summary screen
        Then the analytics events contains the following variables
            | item                | value                                                                | type         | event       |
            | analytics           | analytics/glomo_base                                                 | json schema  | App Started |
            | version DL          | 20250414_5.0                                                         | string       | App Started |
            | page name           | app:privada:patrimonial:activacion contrato:1 terminos y condiciones | string       | App Started |
            | level 1             | activacion contrato                                                  | string       | App Started |
            | level 2             | 1 terminos y condiciones                                             | string       | App Started |
            | language            | ES                                                                   | string       | App Started |
            | page area           | privada                                                              | string       | App Started |
            | page intent         | informacion                                                          | string       | App Started |
            | channel             | online                                                               | string       | App Started |
            | page instance ID    | de                                                                   | string       | App Started |
            | page info version   | appVersion                                                           | regexp named | App Started |
            | page segment        | patrimonial                                                          | string       | App Started |
            | sysEnv              | app                                                                  | string       | App Started |
            | business unit       | BBVA Mexico                                                          | string       | App Started |
            | site app name       | App BBVA Mexico                                                      | string       | App Started |
            | project name        | Glomo                                                                | string       | App Started |
            | device mobile       | si                                                                   | string       | App Started |
            | user userState      | logado                                                               | string       | App Started |
            | user segment global | 003003                                                               | string       | App Started |
            | profile ID          | profileID                                                            | regexp named | App Started |
            | user age            | age                                                                  | regexp named | App Started |
            | user gender         | gender                                                               | regexp named | App Started |
            | user state          | lettersAndSpaceOrEmpty                                               | regexp named | App Started |
            | global application  | equity contract activation                                           | string       | App Started |
            | application name    | activacion contrato                                                  | string       | App Started |
            | application type    | autogestion                                                          | string       | App Started |
            | application step    | aceptar terminos y condiciones                                       | string       | App Started |
            | fulfillment model   | online                                                               | string       | App Started |

    @ANA_EVENT_CSF004
    @analytics @MX
    @vbank @backend(test)
    @web @ios @android
    @web-done
    Scenario: The user confirms the signing process with collapsed step - App Step 2 - at another time
        Given a user with the following criteria
            | criteria                    |
            | deferred signature coowners |
        And the user accesses center notification
        And the user accesses "deferred signature coowners" in notification center
        And the user check the summary screen
        And the analytics interceptor service is initiated
        When the user confirms the signing process
        Then the analytics events contains the following variables
            | item                 | value                                                      | type         | event      |
            | analytics            | analytics/glomo_base                                       | json schema  | App Step 2 |
            | version DL           | 20250414_5.0                                               | string       | App Step 2 |
            | page name            | app:privada:patrimonial:activacion contrato:2 confirmacion | string       | App Step 2 |
            | level 1              | activacion contrato                                        | string       | App Step 2 |
            | level 2              | 2 confirmacion                                             | string       | App Step 2 |
            | language             | ES                                                         | string       | App Step 2 |
            | page area            | privada                                                    | string       | App Step 2 |
            | page intent          | informacion                                                | string       | App Step 2 |
            | channel              | online                                                     | string       | App Step 2 |
            | page instance ID     | de                                                         | string       | App Step 2 |
            | page info version    | appVersion                                                 | regexp named | App Step 2 |
            | page segment         | patrimonial                                                | string       | App Step 2 |
            | sysEnv               | app                                                        | string       | App Step 2 |
            | business unit        | BBVA Mexico                                                | string       | App Step 2 |
            | site app name        | App BBVA Mexico                                            | string       | App Step 2 |
            | project name         | Glomo                                                      | string       | App Step 2 |
            | device mobile        | si                                                         | string       | App Step 2 |
            | user userState       | logado                                                     | string       | App Step 2 |
            | user segment global  | 003003                                                     | string       | App Step 2 |
            | profile ID           | profileID                                                  | regexp named | App Step 2 |
            | user age             | age                                                        | regexp named | App Step 2 |
            | user gender          | gender                                                     | regexp named | App Step 2 |
            | user state           | lettersAndSpaceOrEmpty                                     | regexp named | App Step 2 |
            | global application   | equity contract activation                                 | string       | App Step 2 |
            | application name     | activacion contrato                                        | string       | App Step 2 |
            | application type     | autogestion                                                | string       | App Step 2 |
            | application type     | autogestion                                                | string       | App Step 2 |
            | application step     | 2 confirmacion                                             | string       | App Step 2 |
            | fulfillment model    | online                                                     | string       | App Step 2 |
            | application typology | titular                                                    | string       | App Step 2 |

    @ANA_EVENT_CSF005
    @analytics @MX
    @vbank @backend(test)
    @web @ios @android
    @web-done
    Scenario: The user accesses the token screen.- App Step 3 - activated
        Given a user with the following criteria
            | criteria                    |
            | deferred signature coowners |
        And the user accesses center notification
        And the user accesses "deferred signature coowners" in notification center
        And the user check the summary screen
        And the analytics interceptor service is initiated
        When the user confirms the signing process
        Then the analytics events contains the following variables
            | item                 | value                                             | type         | event      |
            | analytics            | analytics/glomo_base                              | json schema  | App Step 3 |
            | version DL           | 20250414_5.0                                      | string       | App Step 3 |
            | page name            | app:privada:patrimonial:activacion contrato:3 otp | string       | App Step 3 |
            | level 1              | activacion contrato                               | string       | App Step 3 |
            | level 2              | 3 otp                                             | string       | App Step 3 |
            | language             | ES                                                | string       | App Step 3 |
            | page area            | privada                                           | string       | App Step 3 |
            | page intent          | informacion                                       | string       | App Step 3 |
            | channel              | online                                            | string       | App Step 3 |
            | page instance ID     | de                                                | string       | App Step 3 |
            | page info version    | appVersion                                        | regexp named | App Step 3 |
            | page segment         | patrimonial                                       | string       | App Step 3 |
            | sysEnv               | app                                               | string       | App Step 3 |
            | business unit        | BBVA Mexico                                       | string       | App Step 3 |
            | site app name        | App BBVA Mexico                                   | string       | App Step 3 |
            | project name         | Glomo                                             | string       | App Step 3 |
            | device mobile        | si                                                | string       | App Step 3 |
            | user userState       | logado                                            | string       | App Step 3 |
            | user segment global  | 003003                                            | string       | App Step 3 |
            | profile ID           | profileID                                         | regexp named | App Step 3 |
            | user age             | age                                               | regexp named | App Step 3 |
            | user gender          | gender                                            | regexp named | App Step 3 |
            | user state           | lettersAndSpaceOrEmpty                            | regexp named | App Step 3 |
            | global application   | equity contract activation                        | string       | App Step 3 |
            | application name     | activacion contrato                               | string       | App Step 3 |
            | application type     | autogestion                                       | string       | App Step 3 |
            | application step     | 3 otp                                             | string       | App Step 3 |
            | fulfillment model    | online                                            | string       | App Step 3 |
            | application typology | titular                                           | string       | App Step 3 |
            | custom fields        | firma:token                                       | string       | App Step 3 |

    @ANA_EVENT_CSF006
    @analytics @MX
    @vbank @backend(test)
    @web @ios @android
    @web-done
    Scenario: The user successfully completes the process - App Completed
        Given a user with the following criteria
            | criteria                            |
            | deferred signature coowners success |
        And the user accesses center notification
        And the user accesses "happy path deferred signature coowners" in notification center
        And the user check the summary screen
        And the user confirms the signing process
        And the analytics interceptor service is initiated
        When the user confirm the token screen
        Then the analytics events contains the following variables
            | item                         | value                                                      | type         | event         |
            | analytics                    | analytics/glomo_base                                       | json schema  | App Completed |
            | version DL                   | 20250414_5.0                                               | string       | App Completed |
            | page name                    | app:privada:patrimonial:activacion contrato:pagina exitosa | string       | App Completed |
            | level 1                      | activacion contrato                                        | string       | App Completed |
            | level 2                      | pagina exitosa                                             | string       | App Completed |
            | language                     | ES                                                         | string       | App Completed |
            | page area                    | privada                                                    | string       | App Completed |
            | page intent                  | informacion                                                | string       | App Completed |
            | channel                      | online                                                     | string       | App Completed |
            | page instance ID             | de                                                         | string       | App Completed |
            | page info version            | appVersion                                                 | regexp named | App Completed |
            | page segment                 | patrimonial                                                | string       | App Completed |
            | sysEnv                       | app                                                        | string       | App Completed |
            | business unit                | BBVA Mexico                                                | string       | App Completed |
            | site app name                | App BBVA Mexico                                            | string       | App Completed |
            | project name                 | Glomo                                                      | string       | App Completed |
            | device mobile                | si                                                         | string       | App Completed |
            | user userState               | logado                                                     | string       | App Completed |
            | user segment global          | 003003                                                     | string       | App Completed |
            | profile ID                   | profileID                                                  | regexp named | App Completed |
            | user age                     | age                                                        | regexp named | App Completed |
            | user gender                  | gender                                                     | regexp named | App Completed |
            | user state                   | lettersAndSpaceOrEmpty                                     | regexp named | App Completed |
            | global application           | equity contract activation                                 | string       | App Completed |
            | application name             | activacion contrato                                        | string       | App Completed |
            | application type             | autogestion                                                | string       | App Completed |
            | application step             | pagina exitosa                                             | string       | App Completed |
            | fulfillment model            | online                                                     | string       | App Completed |
            | custom fields                | firma:token                                                | string       | App Completed |
            | application typology         | titular                                                    | string       | App Completed |
            | application state            | finalizado                                                 | string       | App Completed |
            | application operation number | 3954fafd09bb46398b9acbde3c047fe7                           | string       | App Completed |

    @ANA_EVENT_CSF007
    @analytics @MX
    @vbank @backend(test)
    @web @ios @android
    @web-done
    Scenario: The user agrees to sign and receives a retry error. - error
        Given a user with the following criteria
            | criteria                    |
            | deferred signature coowners |
        And the user accesses center notification
        And the user accesses "deferred signature coowners" in notification center
        And the analytics interceptor service is initiated
        When the user check the summary screen
        Then the analytics events contains the following variables
            | item                | value                                                                     | type         | event     |
            | analytics           | analytics/glomo_base                                                      | json schema  | Page View |
            | version DL          | 20250414_5.0                                                              | string       | Page View |
            | page name           | app:privada:patrimonial:activacion contrato:error operacion no finalizada | string       | Page View |
            | level 1             | activacion contrato                                                       | string       | Page View |
            | level 2             | error operacion no finalizada                                             | string       | Page View |
            | language            | ES                                                                        | string       | Page View |
            | page area           | privada                                                                   | string       | Page View |
            | page intent         | informacion                                                               | string       | Page View |
            | channel             | online                                                                    | string       | Page View |
            | page instance ID    | de                                                                        | string       | Page View |
            | page info version   | appVersion                                                                | regexp named | Page View |
            | page segment        | patrimonial                                                               | string       | Page View |
            | sysEnv              | app                                                                       | string       | Page View |
            | business unit       | BBVA Mexico                                                               | string       | Page View |
            | site app name       | App BBVA Mexico                                                           | string       | Page View |
            | project name        | Glomo                                                                     | string       | Page View |
            | device mobile       | si                                                                        | string       | Page View |
            | user userState      | logado                                                                    | string       | Page View |
            | user segment global | 003003                                                                    | string       | Page View |
            | profile ID          | profileID                                                                 | regexp named | Page View |
            | user age            | age                                                                       | regexp named | Page View |
            | user gender         | gender                                                                    | regexp named | Page View |
            | user state          | lettersAndSpaceOrEmpty                                                    | regexp named | Page View |

    @ANA_EVENT_CSF008
    @analytics @MX
    @vbank @backend(test)
    @web @ios @android
    @web-done
    Scenario: The signing process expired - Fingerprint
        Given a user with the following criteria
            | criteria                    |
            | deferred signature coowners |
        And the user accesses center notification
        And the analytics interceptor service is initiated
        When the user accesses "expired signature" in notification center
        Then the analytics events contains the following variables
            | item                | value                                                                | type         | event     | event number |
            | analytics           | analytics/glomo_base                                                 | json schema  | Page View | 4            |
            | version DL          | 20250414_5.0                                                         | string       | Page View | 4            |
            | page name           | app:privada:patrimonial:activacion contrato:proceso de firma vencido | string       | Page View | 4            |
            | level 1             | activacion contrato                                                  | string       | Page View | 4            |
            | level 2             | proceso de firma vencido                                             | string       | Page View | 4            |
            | language            | ES                                                                   | string       | Page View | 4            |
            | page area           | privada                                                              | string       | Page View | 4            |
            | page intent         | informacion                                                          | string       | Page View | 4            |
            | channel             | online                                                               | string       | Page View | 4            |
            | page instance ID    | de                                                                   | string       | Page View | 4            |
            | page info version   | appVersion                                                           | regexp named | Page View | 4            |
            | page segment        | patrimonial                                                          | string       | Page View | 4            |
            | sysEnv              | app                                                                  | string       | Page View | 4            |
            | business unit       | BBVA Mexico                                                          | string       | Page View | 4            |
            | site app name       | App BBVA Mexico                                                      | string       | Page View | 4            |
            | project name        | Glomo                                                                | string       | Page View | 4            |
            | device mobile       | si                                                                   | string       | Page View | 4            |
            | user userState      | logado                                                               | string       | Page View | 4            |
            | user segment global | 003003                                                               | string       | Page View | 4            |
            | profile ID          | profileID                                                            | regexp named | Page View | 4            |
            | user age            | age                                                                  | regexp named | Page View | 4            |
            | user gender         | gender                                                               | regexp named | Page View | 4            |
            | user state          | lettersAndSpaceOrEmpty                                               | regexp named | Page View | 4            |

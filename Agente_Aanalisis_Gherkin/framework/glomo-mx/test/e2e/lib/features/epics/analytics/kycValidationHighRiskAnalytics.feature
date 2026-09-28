@kycValidationHighRiskAnalytics
Feature: Analytics -  KYC Validation High Risk

    @ANA_EVENT_CAR001
    @web @ios @android
    @backend(test)
    @MX @vbank
    @web-done @analytics
    Scenario: App On Click Start - Access to financial relationships screen
        Given a user with the following criteria
            | criteria                 |
            | kyc validation high risk |
            | first time questionnaire |
        And the user accesses to profile screen
        And the analytics interceptor service is initiated
        When the user taps on "add kyc validation high risk" profile button
        Then the analytics events contains the following variables
            | item                | value                       | type         | event              |
            | analytics           | analytics/glomo_base        | json schema  | App On Click Start |
            | version DL          | 20250414_5.0                | string       | App On Click Start |
            | page intent         | informacion                 | string       | App On Click Start |
            | page segment        | personas                    | string       | App On Click Start |
            | page name           | app:privada:personas:perfil | string       | App On Click Start |
            | sysEnv              | app                         | string       | App On Click Start |
            | channel             | online                      | string       | App On Click Start |
            | language            | ES                          | string       | App On Click Start |
            | level 1             | perfil                      | string       | App On Click Start |
            | business unit       | BBVA Mexico                 | string       | App On Click Start |
            | site app name       | App BBVA Mexico             | string       | App On Click Start |
            | project name        | Glomo                       | string       | App On Click Start |
            | page area           | privada                     | string       | App On Click Start |
            | device mobile       | si                          | string       | App On Click Start |
            | device root         |                             | string       | App On Click Start |
            | user userState      | logado                      | string       | App On Click Start |
            | user segment global | 003001                      | string       | App On Click Start |
            | user gender         | gender                      | regexp named | App On Click Start |
            | user age            | age                         | regexp named | App On Click Start |
            | fulfillment model   | online/offline              | string       | App On Click Start |
            | application type    | autogestion                 | string       | App On Click Start |
            | application name    | validacion alto riesgo      | string       | App On Click Start |
            | application step    | perfil                      | string       | App On Click Start |
            | global application  | financial habits            | string       | App On Click Start |

    @ANA_EVENT_CAR002
    @web @ios @android
    @backend(test) @analytics
    @MX @vbank
    @web-done
    Scenario:  App Page Visit - kycValidationHighRisk
        Given a user with the following criteria
            | criteria                 |
            | kyc validation high risk |
            | first time questionnaire |
        And the user accesses to profile screen
        And the analytics interceptor service is initiated
        When the user taps on "add kyc validation high risk" profile button
        Then the analytics events contains the following variables
            | item                     | value                                                                | type         | event          |
            | analytics                | analytics/glomo_base                                                 | json schema  | App Page Visit |
            | version DL               | 20250414_5.0                                                         | string       | App Page Visit |
            | page intent              | informacion                                                          | string       | App Page Visit |
            | page segment             | personas                                                             | string       | App Page Visit |
            | page name                | app:privada:personas:validacion alto riesgo:1 relaciones financieras | string       | App Page Visit |
            | sysEnv                   | app                                                                  | string       | App Page Visit |
            | channel                  | online                                                               | string       | App Page Visit |
            | language                 | ES                                                                   | string       | App Page Visit |
            | level 1                  | validacion alto riesgo                                               | string       | App Page Visit |
            | level 2                  | 1 relaciones financieras                                             | string       | App Page Visit |
            | business unit            | BBVA Mexico                                                          | string       | App Page Visit |
            | site app name            | App BBVA Mexico                                                      | string       | App Page Visit |
            | project name             | Glomo                                                                | string       | App Page Visit |
            | page area                | privada                                                              | string       | App Page Visit |
            | device mobile            | si                                                                   | string       | App Page Visit |
            | device root              |                                                                      | string       | App Page Visit |
            | user userState           | logado                                                               | string       | App Page Visit |
            | user segment global      | 003001                                                               | string       | App Page Visit |
            | user gender              | gender                                                               | regexp named | App Page Visit |
            | user age                 | age                                                                  | regexp named | App Page Visit |
            | product primary category | cuentas                                                              | string       | App Page Visit |
            | fulfillment model        | online/offline                                                       | string       | App Page Visit |
            | application type         | autogestion                                                          | string       | App Page Visit |
            | application typology     | car                                                                  | string       | App Page Visit |
            | application name         | validacion alto riesgo                                               | string       | App Page Visit |
            | application step         | 1 relaciones financieras                                             | string       | App Page Visit |
            | global application       | financial habits                                                     | string       | App Page Visit |
            | custom fields            | modulos completados:01;02;03                                         | string       | App Page Visit |

    @ANA_EVENT_CAR003
    @web @ios @android
    @backend(test) @analytics
    @MX @vbank
    @web-done
    Scenario: App Started - Access to the financial relationships privacy notice
        Given a user with the following criteria
            | criteria                  |
            | proceedings kyc high risk |
        And the user accesses to profile screen
        And the user taps on "add kyc validation high risk" profile button
        And the analytics interceptor service is initiated
        When the user accesses the privacy notice modal
        Then the analytics events contains the following variables
            | item                     | value                                                                | type         | event       |
            | analytics                | analytics/glomo_base                                                 | json schema  | App Started |
            | version DL               | 20250414_5.0                                                         | string       | App Started |
            | page intent              | informacion                                                          | string       | App Started |
            | page segment             | personas                                                             | string       | App Started |
            | page name                | app:privada:personas:validacion alto riesgo:1 relaciones financieras | string       | App Started |
            | sysEnv                   | app                                                                  | string       | App Started |
            | channel                  | online                                                               | string       | App Started |
            | language                 | ES                                                                   | string       | App Started |
            | level 1                  | validacion alto riesgo                                               | string       | App Started |
            | level 2                  | 1 relaciones financieras                                             | string       | App Started |
            | business unit            | BBVA Mexico                                                          | string       | App Started |
            | site app name            | App BBVA Mexico                                                      | string       | App Started |
            | project name             | Glomo                                                                | string       | App Started |
            | page area                | privada                                                              | string       | App Started |
            | device mobile            | si                                                                   | string       | App Started |
            | device root              |                                                                      | string       | App Started |
            | user userState           | logado                                                               | string       | App Started |
            | user segment global      | 003001                                                               | string       | App Started |
            | user gender              | gender                                                               | regexp named | App Started |
            | user age                 | age                                                                  | regexp named | App Started |
            | product primary category | cuentas                                                              | string       | App Started |
            | fulfillment model        | online/offline                                                       | string       | App Started |
            | application type         | autogestion                                                          | string       | App Started |
            | application typology     | car                                                                  | string       | App Started |
            | application name         | validacion alto riesgo                                               | string       | App Started |
            | application step         | aviso de privacidad                                                  | string       | App Started |
            | global application       | financial habits                                                     | string       | App Started |
            | custom fields            | modulos completados:01;02;03                                         | string       | App Started |

    @ANA_EVENT_CAR004
    @analytics
    @web @ios @android
    @backend(test)
    @MX @vbank
    @web-done
    Scenario: App Started - Account use
        Given a user with the following criteria
            | criteria                  |
            | proceedings kyc high risk |
        And the user accesses to profile screen
        And the user taps on "add kyc validation high risk" profile button
        And the analytics interceptor service is initiated
        When the user goes to the "use of account" step
        Then the analytics events contains the following variables
            | item                     | value                                                                | type         | event       |
            | analytics                | analytics/glomo_base                                                 | json schema  | App Started |
            | version DL               | 20250414_5.0                                                         | string       | App Started |
            | page intent              | informacion                                                          | string       | App Started |
            | page segment             | personas                                                             | string       | App Started |
            | page name                | app:privada:personas:validacion alto riesgo:1 relaciones financieras | string       | App Started |
            | sysEnv                   | app                                                                  | string       | App Started |
            | channel                  | online                                                               | string       | App Started |
            | language                 | ES                                                                   | string       | App Started |
            | level 1                  | validacion alto riesgo                                               | string       | App Started |
            | level 2                  | 1 relaciones financieras                                             | string       | App Started |
            | business unit            | BBVA Mexico                                                          | string       | App Started |
            | site app name            | App BBVA Mexico                                                      | string       | App Started |
            | project name             | Glomo                                                                | string       | App Started |
            | page area                | privada                                                              | string       | App Started |
            | device mobile            | si                                                                   | string       | App Started |
            | device root              |                                                                      | string       | App Started |
            | user userState           | logado                                                               | string       | App Started |
            | user segment global      | 003001                                                               | string       | App Started |
            | user gender              | gender                                                               | regexp named | App Started |
            | user age                 | age                                                                  | regexp named | App Started |
            | product primary category | cuentas                                                              | string       | App Started |
            | fulfillment model        | online/offline                                                       | string       | App Started |
            | application type         | autogestion                                                          | string       | App Started |
            | application typology     | car                                                                  | string       | App Started |
            | application name         | validacion alto riesgo                                               | string       | App Started |
            | application step         | continuar                                                            | string       | App Started |
            | global application       | financial habits                                                     | string       | App Started |
            | custom fields            | modulos completados:01;02;03                                         | string       | App Started |

    @ANA_EVENT_CAR005
    @analytics
    @web @ios @android
    @backend(test)
    @MX @vbank
    @web-done
    Scenario: App Step 2 - Public Activity Section
        Given a user with the following criteria
            | criteria                 |
            | kyc validation high risk |
            | pep client               |
        And the user accesses to profile screen
        And the user taps on "add kyc validation high risk" profile button
        When the user selects yes to public position question
        Then the device contains the following variables
            | item                     | value                                                           | type         | App Step 2 |
            | analytics                | analytics/glomo_base                                            | json schema  | App Step 2 |
            | version DL               | 20250414_5.0                                                    | string       | App Step 2 |
            | page intent              | informacion                                                     | string       | App Step 2 |
            | page segment             | personas                                                        | string       | App Step 2 |
            | page name                | app:privada:personas:validacion alto riesgo:2 actividad publica | string       | App Step 2 |
            | sysEnv                   | app                                                             | string       | App Step 2 |
            | channel                  | online                                                          | string       | App Step 2 |
            | language                 | ES                                                              | string       | App Step 2 |
            | level 1                  | validacion alto riesgo                                          | string       | App Step 2 |
            | level 2                  | 2 actividad publica                                             | string       | App Step 2 |
            | business unit            | BBVA Mexico                                                     | string       | App Step 2 |
            | site app name            | App BBVA Mexico                                                 | string       | App Step 2 |
            | project name             | Glomo                                                           | string       | App Step 2 |
            | page area                | privada                                                         | string       | App Step 2 |
            | device mobile            | si                                                              | string       | App Step 2 |
            | device root              |                                                                 | string       | App Step 2 |
            | user userState           | logado                                                          | string       | App Step 2 |
            | user segment global      | 003001                                                          | string       | App Step 2 |
            | user gender              | gender                                                          | regexp named | App Step 2 |
            | user age                 | age                                                             | regexp named | App Step 2 |
            | product primary category | cuentas                                                         | string       | App Step 2 |
            | fulfillment model        | online/offline                                                  | string       | App Step 2 |
            | application type         | autogestion                                                     | string       | App Step 2 |
            | application typology     | pep                                                             | string       | App Step 2 |
            | application name         | validacion alto riesgo                                          | string       | App Step 2 |
            | application step         | 2 actividad publica                                             | string       | App Step 2 |
            | global application       | financial habits                                                | string       | App Step 2 |
            | custom fields            | modulos completados:01;02;03                                    | string       | App Step 2 |

    @ANA_EVENT_CAR006
    @analytics
    @web @ios @android
    @backend(test)
    @MX @vbank
    @web-done
    Scenario: App Completed - Questionnaire completed
        Given a user with the following criteria
            | criteria                  |
            | proceedings kyc high risk |
        And the user accesses to profile screen
        And the user accesses to proceedings kyc high risk questionaire
        And the analytics interceptor service is initiated
        When the user taps on the "update task kyc high risk proceedings" option in proceedings
        Then the analytics events contains the following variables
            | item                     | value                                                      | type         | event         |
            | analytics                | analytics/glomo_base                                       | json schema  | App Completed |
            | version DL               | 20250414_5.0                                               | string       | App Completed |
            | page intent              | informacion                                                | string       | App Completed |
            | page segment             | personas                                                   | string       | App Completed |
            | page name                | app:privada:personas:validacion alto riesgo:pagina exitosa | string       | App Completed |
            | sysEnv                   | app                                                        | string       | App Completed |
            | channel                  | online                                                     | string       | App Completed |
            | language                 | ES                                                         | string       | App Completed |
            | level 1                  | validacion alto riesgo                                     | string       | App Completed |
            | level 2                  | pagina exitosa                                             | string       | App Completed |
            | business unit            | BBVA Mexico                                                | string       | App Completed |
            | site app name            | App BBVA Mexico                                            | string       | App Completed |
            | project name             | Glomo                                                      | string       | App Completed |
            | page area                | privada                                                    | string       | App Completed |
            | device mobile            | si                                                         | string       | App Completed |
            | device root              |                                                            | string       | App Completed |
            | user userState           | logado                                                     | string       | App Completed |
            | user segment global      | 003001                                                     | string       | App Completed |
            | user gender              | gender                                                     | regexp named | App Completed |
            | user age                 | age                                                        | regexp named | App Completed |
            | product primary category | cuentas                                                    | string       | App Completed |
            | product state            | finalizado                                                 | string       | App Completed |
            | fulfillment model        | online/offline                                             | string       | App Completed |
            | application type         | autogestion                                                | string       | App Completed |
            | application typology     | car                                                        | string       | App Completed |
            | application name         | validacion alto riesgo                                     | string       | App Completed |
            | application step         | pagina exitosa                                             | string       | App Completed |
            | application state        | finalizado                                                 | string       | App Completed |
            | global application       | financial habits                                           | string       | App Completed |
            | custom fields            | modulos completados:01;02;03                               | string       | App Completed |

    @ANA_EVENT_CAR007
    @analytics
    @web @ios @android
    @backend(test)
    @MX @vbank
    @web-done
    Scenario: Page View - Use of Account
        Given a user with the following criteria
            | criteria                 |
            | kyc validation high risk |
            | first time questionnaire |
        And the user accesses to profile screen
        And the user taps on "add kyc validation high risk" profile button
        And the analytics interceptor service is initiated
        When the user goes to the "use of account" step
        Then the analytics events contains the following variables
            | item                 | value                                                     | type             | event     |
            | analytics            | analytics/glomo_base                                      | json schema      | Page View |
            | version DL           | 20250414_5.0                                              | string           | Page View |
            | page intent          | informacion                                               | string           | Page View |
            | page segment         | personas                                                  | string           | Page View |
            | page name            | app:privada:personas:validacion alto riesgo:uso de cuenta | string           | Page View |
            | sysEnv               | app                                                       | string           | Page View |
            | channel              | online                                                    | string           | Page View |
            | language             | ES                                                        | string           | Page View |
            | level 1              | validacion alto riesgo                                    | string           | Page View |
            | level 2              | uso de cuenta                                             | string           | Page View |
            | business unit        | BBVA Mexico                                               | string           | Page View |
            | site app name        | App BBVA Mexico                                           | string           | Page View |
            | project name         | Glomo                                                     | string           | Page View |
            | page area            | privada                                                   | string           | Page View |
            | device mobile        | si                                                        | string           | Page View |
            | device root          |                                                           | string           | Page View |
            | user userState       | logado                                                    | string           | Page View |
            | user segment global  | 003001                                                    | string           | Page View |
            | user segment profile | clientes alto riesgo                                      | string           | Page View |
            | user gender          | gender                                                    | regexp named     | Page View |
            | user age             | age                                                       | regexp named     | Page View |
            | custom fields        | modulos completados:01;02;03                              | string           | Page View |
            | application name     |                                                           | empty str object | Page View |

    @ANA_EVENT_CAR008
    @analytics
    @web @ios @android
    @backend(test)
    @MX @vbank
    @web-done
    Scenario: Page View - Privacy Notice Modal
        Given a user with the following criteria
            | criteria                 |
            | kyc validation high risk |
            | first time questionnaire |
        And the user accesses to profile screen
        And the user taps on "add kyc validation high risk" profile button
        And the analytics interceptor service is initiated
        When the user accesses the privacy notice modal
        Then the analytics events contains the following variables
            | item                 | value                                                           | type             | event     |
            | analytics            | analytics/glomo_base                                            | json schema      | Page View |
            | version DL           | 20250414_5.0                                                    | string           | Page View |
            | page intent          | informacion                                                     | string           | Page View |
            | page segment         | personas                                                        | string           | Page View |
            | page name            | app:privada:personas:validacion alto riesgo:aviso de privacidad | string           | Page View |
            | sysEnv               | app                                                             | string           | Page View |
            | channel              | online                                                          | string           | Page View |
            | language             | ES                                                              | string           | Page View |
            | level 1              | validacion alto riesgo                                          | string           | Page View |
            | level 2              | aviso de privacidad                                             | string           | Page View |
            | business unit        | BBVA Mexico                                                     | string           | Page View |
            | site app name        | App BBVA Mexico                                                 | string           | Page View |
            | project name         | Glomo                                                           | string           | Page View |
            | page area            | privada                                                         | string           | Page View |
            | device mobile        | si                                                              | string           | Page View |
            | device root          |                                                                 | string           | Page View |
            | user userState       | logado                                                          | string           | Page View |
            | user segment global  | 003001                                                          | string           | Page View |
            | user segment profile | clientes alto riesgo                                            | string           | Page View |
            | user gender          | gender                                                          | regexp named     | Page View |
            | user age             | age                                                             | regexp named     | Page View |
            | custom fields        | modulos completados:01;02;03                                    | string           | Page View |
            | application name     |                                                                 | empty str object | Page View |

    @ANA_EVENT_CAR009
    @analytics
    @web @ios @android
    @backend(test)
    @MX @vbank
    @web-done
    Scenario: Page View - Personal Information Step
        Given a user with the following criteria
            | criteria                 |
            | kyc validation high risk |
        And the user accesses to profile screen
        And the analytics interceptor service is initiated
        When the user accesses to the "personal information" questionnaire step
        Then the analytics events contains the following variables
            | item                 | value                                                            | type             | event     | event number |
            | analytics            | analytics/glomo_base                                             | json schema      | Page View | 2            |
            | version DL           | 20250414_5.0                                                     | string           | Page View | 2            |
            | page intent          | informacion                                                      | string           | Page View | 2            |
            | page segment         | personas                                                         | string           | Page View | 2            |
            | page name            | app:privada:personas:validacion alto riesgo:informacion personal | string           | Page View | 2            |
            | sysEnv               | app                                                              | string           | Page View | 2            |
            | channel              | online                                                           | string           | Page View | 2            |
            | language             | ES                                                               | string           | Page View | 2            |
            | level 1              | validacion alto riesgo                                           | string           | Page View | 2            |
            | level 2              | informacion personal                                             | string           | Page View | 2            |
            | business unit        | BBVA Mexico                                                      | string           | Page View | 2            |
            | site app name        | App BBVA Mexico                                                  | string           | Page View | 2            |
            | project name         | Glomo                                                            | string           | Page View | 2            |
            | page area            | privada                                                          | string           | Page View | 2            |
            | device mobile        | si                                                               | string           | Page View | 2            |
            | device root          |                                                                  | string           | Page View | 2            |
            | user userState       | logado                                                           | string           | Page View | 2            |
            | user segment global  | 003001                                                           | string           | Page View | 2            |
            | user segment profile | clientes alto riesgo                                             | string           | Page View | 2            |
            | user gender          | gender                                                           | regexp named     | Page View | 2            |
            | user age             | age                                                              | regexp named     | Page View | 2            |
            | custom fields        | modulos completados:01;02;03                                     | string           | Page View | 2            |
            | application name     |                                                                  | empty str object | Page View | 2            |

    @ANA_EVENT_CAR010
    @analytics
    @web @ios @android
    @backend(test)
    @MX @vbank
    @web-done
    Scenario: Page View - Work And Income Step
        Given a user with the following criteria
            | criteria                 |
            | kyc validation high risk |
        And the user accesses to profile screen
        And the analytics interceptor service is initiated
        When the user accesses to the "work and income" questionnaire step
        Then the analytics events contains the following variables
            | item                 | value                                                          | type             | event     | event number |
            | analytics            | analytics/glomo_base                                           | json schema      | Page View | 3            |
            | version DL           | 20250414_5.0                                                   | string           | Page View | 3            |
            | page intent          | informacion                                                    | string           | Page View | 3            |
            | page segment         | personas                                                       | string           | Page View | 3            |
            | page name            | app:privada:personas:validacion alto riesgo:trabajo e ingresos | string           | Page View | 3            |
            | channel              | online                                                         | string           | Page View | 3            |
            | sysEnv               | app                                                            | string           | Page View | 3            |
            | language             | ES                                                             | string           | Page View | 3            |
            | level 1              | validacion alto riesgo                                         | string           | Page View | 3            |
            | level 2              | trabajo e ingresos                                             | string           | Page View | 3            |
            | business unit        | BBVA Mexico                                                    | string           | Page View | 3            |
            | site app name        | App BBVA Mexico                                                | string           | Page View | 3            |
            | project name         | Glomo                                                          | string           | Page View | 3            |
            | page area            | privada                                                        | string           | Page View | 3            |
            | device mobile        | si                                                             | string           | Page View | 3            |
            | device root          |                                                                | string           | Page View | 3            |
            | user userState       | logado                                                         | string           | Page View | 3            |
            | user segment global  | 003001                                                         | string           | Page View | 3            |
            | user segment profile | clientes alto riesgo                                           | string           | Page View | 3            |
            | user gender          | gender                                                         | regexp named     | Page View | 3            |
            | user age             | age                                                            | regexp named     | Page View | 3            |
            | custom fields        | modulos completados:01;02;03                                   | string           | Page View | 3            |
            | application name     |                                                                | empty str object | Page View | 3            |

    @ANA_EVENT_CAR011
    @analytics
    @web @ios @android
    @backend(test)
    @MX @vbank
    @web-done
    Scenario: Page View - Validate the document upload screen in the work and income form
        Given a user with the following criteria
            | criteria                 |
            | kyc validation high risk |
            | business owner           |
        And the user accesses to profile screen
        And the user accesses to the "work and income" questionnaire step
        And the user fills the work income form "inside and outside of mexico"
        And the analytics interceptor service is initiated
        When the user enters to the document upload modal
        Then the analytics events contains the following variables
            | item                 | value                                                                      | type             | event     |
            | analytics            | analytics/glomo_base                                                       | json schema      | Page View |
            | version DL           | 20250414_5.0                                                               | string           | Page View |
            | page intent          | informacion                                                                | string           | Page View |
            | page segment         | personas                                                                   | string           | Page View |
            | page name            | app:privada:personas:validacion alto riesgo:requisitos carga de documentos | string           | Page View |
            | sysEnv               | app                                                                        | string           | Page View |
            | channel              | online                                                                     | string           | Page View |
            | language             | ES                                                                         | string           | Page View |
            | level 1              | validacion alto riesgo                                                     | string           | Page View |
            | level 2              | requisitos carga de documentos                                             | string           | Page View |
            | business unit        | BBVA Mexico                                                                | string           | Page View |
            | site app name        | App BBVA Mexico                                                            | string           | Page View |
            | project name         | Glomo                                                                      | string           | Page View |
            | page area            | privada                                                                    | string           | Page View |
            | device mobile        | si                                                                         | string           | Page View |
            | device root          |                                                                            | string           | Page View |
            | user userState       | logado                                                                     | string           | Page View |
            | user segment global  | 003001                                                                     | string           | Page View |
            | user segment profile | clientes alto riesgo                                                       | string           | Page View |
            | user gender          | gender                                                                     | regexp named     | Page View |
            | user age             | age                                                                        | regexp named     | Page View |
            | custom fields        | modulos completados:01;02;03                                               | string           | Page View |
            | application name     |                                                                            | empty str object | Page View |

    @ANA_EVENT_CAR012
    @analytics
    @web @ios @android
    @backend(test)
    @MX @vbank
    @web-done
    Scenario: Page View - Go to branch screen
        Given a user with the following criteria
            | criteria                 |
            | kyc validation high risk |
            | first time questionnaire |
        And the user accesses to profile screen
        And the analytics interceptor service is initiated
        When the user taps on "add kyc validation high risk" profile button
        Then the analytics events contains the following variables
            | item                 | value                                                           | type             | event     |
            | analytics            | analytics/glomo_base                                            | json schema      | Page View |
            | version DL           | 20250414_5.0                                                    | string           | Page View |
            | page intent          | informacion                                                     | string           | Page View |
            | page segment         | personas                                                        | string           | Page View |
            | page name            | app:privada:personas:validacion alto riesgo:error ir a sucursal | string           | Page View |
            | sysEnv               | app                                                             | string           | Page View |
            | channel              | online                                                          | string           | Page View |
            | language             | ES                                                              | string           | Page View |
            | level 1              | validacion alto riesgo                                          | string           | Page View |
            | level 2              | error ir a sucursal                                             | string           | Page View |
            | business unit        | BBVA Mexico                                                     | string           | Page View |
            | site app name        | App BBVA Mexico                                                 | string           | Page View |
            | project name         | Glomo                                                           | string           | Page View |
            | error page           | error ir a sucursal                                             | string           | Page View |
            | page area            | privada                                                         | string           | Page View |
            | device mobile        | si                                                              | string           | Page View |
            | device root          |                                                                 | string           | Page View |
            | user userState       | logado                                                          | string           | Page View |
            | user segment global  | 003001                                                          | string           | Page View |
            | user segment profile | clientes alto riesgo                                            | string           | Page View |
            | user gender          | gender                                                          | regexp named     | Page View |
            | user age             | age                                                             | regexp named     | Page View |
            | custom fields        | modulos completados:01;02;03                                    | string           | Page View |
            | application name     |                                                                 | empty str object | Page View |

    @ANA_EVENT_CAR013
    @analytics
    @web @ios @android
    @backend(test)
    @MX @vbank
    @web-done
    Scenario: Page View - Error section not saved
        Given a user with the following criteria
            | criteria                 |
            | kyc validation high risk |
            | first time questionnaire |
        And the user accesses to profile screen
        And the user taps on "add kyc validation high risk" profile button
        And the user goes to the "use of account" step
        And the analytics interceptor service is initiated
        When the user selects an option in source of income
        Then the analytics events contains the following variables
            | item                 | value                                                                 | type             | event     |
            | analytics            | analytics/glomo_base                                                  | json schema      | Page View |
            | version DL           | 20250414_5.0                                                          | string           | Page View |
            | page intent          | informacion                                                           | string           | Page View |
            | page segment         | personas                                                              | string           | Page View |
            | page name            | app:privada:personas:validacion alto riesgo:error seccion no guardada | string           | Page View |
            | sysEnv               | app                                                                   | string           | Page View |
            | channel              | online                                                                | string           | Page View |
            | language             | ES                                                                    | string           | Page View |
            | level 1              | validacion alto riesgo                                                | string           | Page View |
            | level 2              | error seccion no guardada                                             | string           | Page View |
            | business unit        | BBVA Mexico                                                           | string           | Page View |
            | site app name        | App BBVA Mexico                                                       | string           | Page View |
            | project name         | Glomo                                                                 | string           | Page View |
            | error page           | error seccion no guardada                                             | string           | Page View |
            | page area            | privada                                                               | string           | Page View |
            | device mobile        | si                                                                    | string           | Page View |
            | device root          |                                                                       | string           | Page View |
            | user userState       | logado                                                                | string           | Page View |
            | user segment global  | 003001                                                                | string           | Page View |
            | user segment profile | clientes alto riesgo                                                  | string           | Page View |
            | user gender          | gender                                                                | regexp named     | Page View |
            | user age             | age                                                                   | regexp named     | Page View |
            | custom fields        | modulos completados:01;02;03                                          | string           | Page View |
            | application name     |                                                                       | empty str object | Page View |

    @ANA_EVENT_CAR014
    @analytics
    @web @ios @android
    @backend(test)
    @MX @vbank
    @web-done
    Scenario: Page View - Error Operation not available
        Given a user with the following criteria
            | criteria                 |
            | kyc validation high risk |
            | first time questionnaire |
        And the user accesses to profile screen
        And the user taps on "add kyc validation high risk" profile button
        And the analytics interceptor service is initiated
        When the user taps on error modal retry button
        Then the analytics events contains the following variables
            | item                 | value                                                                     | type             | event     |
            | analytics            | analytics/glomo_base                                                      | json schema      | Page View |
            | version DL           | 20250414_5.0                                                              | string           | Page View |
            | page intent          | informacion                                                               | string           | Page View |
            | page segment         | personas                                                                  | string           | Page View |
            | page name            | app:privada:personas:validacion alto riesgo:error operacion no disponible | string           | Page View |
            | sysEnv               | app                                                                       | string           | Page View |
            | channel              | online                                                                    | string           | Page View |
            | language             | ES                                                                        | string           | Page View |
            | level 1              | validacion alto riesgo                                                    | string           | Page View |
            | level 2              | error operacion no disponible                                             | string           | Page View |
            | business unit        | BBVA Mexico                                                               | string           | Page View |
            | site app name        | App BBVA Mexico                                                           | string           | Page View |
            | project name         | Glomo                                                                     | string           | Page View |
            | error page           | error operacion no disponible                                             | string           | Page View |
            | page area            | privada                                                                   | string           | Page View |
            | device mobile        | si                                                                        | string           | Page View |
            | device root          |                                                                           | string           | Page View |
            | user userState       | logado                                                                    | string           | Page View |
            | user segment global  | 003001                                                                    | string           | Page View |
            | user segment profile | clientes alto riesgo                                                      | string           | Page View |
            | user gender          | gender                                                                    | regexp named     | Page View |
            | user age             | age                                                                       | regexp named     | Page View |
            | custom fields        | modulos completados:01;02;03                                              | string           | Page View |
            | application name     |                                                                           | empty str object | Page View |

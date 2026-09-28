@ocCarLoanAnalytics
Feature: Analytics - OC Car Loan Digital

    @ANA_EVENT_OCCL001
    @analytics
    @web @ios @android
    @MX
    @backend(test)
    @web-done
    @vbank
    Scenario:  ocCarLoan - App On Click Start - Access Point
        Given a user with the following criteria
            | criteria               |
            | digital car loan offer |
        When the user accesses contract product section
        And the analytics interceptor service is initiated
        And the user accesses the oc car loan offer tracking
        Then the analytics events contains the following variables
            | item                                            | value                                                                           | type         | event              |
            | analytics                                       | analytics/glomo_base                                                            | json schema  | App On Click Start |
            | version DL                                      | 20250414_5.0                                                                    | string       | App On Click Start |
            | page name                                       | app:privada:personas:oportunidades                                              | string       | App On Click Start |
            | level 1                                         | oportunidades                                                                   | string       | App On Click Start |
            | language                                        | ES                                                                              | string       | App On Click Start |
            | page area                                       | privada                                                                         | string       | App On Click Start |
            | page intent                                     | informacion                                                                     | string       | App On Click Start |
            | channel                                         | online                                                                          | string       | App On Click Start |
            | page instance ID                                | de                                                                              | string       | App On Click Start |
            | page segment                                    | personas                                                                        | string       | App On Click Start |
            | sysEnv                                          | app                                                                             | string       | App On Click Start |
            | business unit                                   | BBVA Mexico                                                                     | string       | App On Click Start |
            | site app name                                   | App BBVA Mexico                                                                 | string       | App On Click Start |
            | project name                                    | DIY E2E Sales                                                                   | string       | App On Click Start |
            | device mobile                                   | si                                                                              | string       | App On Click Start |
            | user userState                                  | logado                                                                          | string       | App On Click Start |
            | user segment global                             | 003001                                                                          | string       | App On Click Start |
            | profile ID                                      | profileID                                                                       | regexp named | App On Click Start |
            | user gender                                     | gender                                                                          | regexp named | App On Click Start |
            | user age                                        | age                                                                             | regexp named | App On Click Start |
            | global application                              | car loan                                                                        | string       | App On Click Start |
            | application name                                | firma prestamo vehicular                                                        | string       | App On Click Start |
            | application type                                | contratacion                                                                    | string       | App On Click Start |
            | application step                                | oportunidades                                                                   | string       | App On Click Start |
            | fulfillment model                               | online                                                                          | string       | App On Click Start |
            | product primary category                        | prestamos                                                                       | string       | App On Click Start |
            | product name                                    | credito auto                                                                    | string       | App On Click Start |
            | internal campaign attributes campaign format    | burbuja                                                                         | string       | App On Click Start |
            | internal campaign attributes collective code    |                                                                                 | string       | App On Click Start |
            | internal campaign attributes campaign name      | -solicitud de credito automotriz                                                | string       | App On Click Start |
            | internal campaign attributes product            | prestamos                                                                       | string       | App On Click Start |
            | internal campaign attributes product code       |                                                                                 | empty array  | App On Click Start |
            | internal campaign attributes quantity           |                                                                                 | empty array  | App On Click Start |
            | internal campaign event name                    | IntCmpClick                                                                     | string       | App On Click Start |
            | internal campaign site action name              | oportunidades--centro--:burbuja::-solicitud de credito automotriz:prestamos::   | string       | App On Click Start |

    @ANA_EVENT_OCCL002
    @analytics
    @web @ios @android
    @MX
    @backend(test)
    @web-done
    @vbank
    Scenario: ocCarLoan - App Page Visit - Indications Link
        Given a user with the following criteria
            | criteria               |
            | digital car loan offer |
        When the user accesses contract product section
        And the analytics interceptor service is initiated
        And the user accesses the oc car loan offer tracking
        Then the analytics events contains the following variables
            | item                                            | value                                                                           | type         | event              |
            | analytics                                       | analytics/glomo_base                                                            | json schema  | App Page Visit     |
            | version DL                                      | 20250414_5.0                                                                    | string       | App Page Visit     |
            | page name                                       | app:privada:personas:prestamos:firma prestamo vehicular:1 indicaciones          | string       | App Page Visit     |
            | level 1                                         | prestamos                                                                       | string       | App Page Visit     |
            | level 2                                         | firma prestamo vehicular                                                        | string       | App Page Visit     |
            | level 3                                         | 1 indicaciones                                                                  | string       | App Page Visit     |
            | language                                        | ES                                                                              | string       | App Page Visit     |
            | page area                                       | privada                                                                         | string       | App Page Visit     |
            | page intent                                     | transaccion                                                                     | string       | App Page Visit     |
            | channel                                         | online                                                                          | string       | App Page Visit     |
            | page instance ID                                | de                                                                              | string       | App Page Visit     |
            | page segment                                    | personas                                                                        | string       | App Page Visit     |
            | sysEnv                                          | app                                                                             | string       | App Page Visit     |
            | business unit                                   | BBVA Mexico                                                                     | string       | App Page Visit     |
            | site app name                                   | App BBVA Mexico                                                                 | string       | App Page Visit     |
            | project name                                    | DIY E2E Sales                                                                   | string       | App Page Visit     |
            | device mobile                                   | si                                                                              | string       | App Page Visit     |
            | user userState                                  | logado                                                                          | string       | App Page Visit     |
            | user segment global                             | 003001                                                                          | string       | App Page Visit     |
            | profile ID                                      | profileID                                                                       | regexp named | App Page Visit     |
            | user gender                                     | gender                                                                          | regexp named | App Page Visit     |
            | user age                                        | age                                                                             | regexp named | App Page Visit     |
            | global application                              | car loan                                                                        | string       | App Page Visit     |
            | application name                                | firma prestamo vehicular                                                        | string       | App Page Visit     |
            | application type                                | contratacion                                                                    | string       | App Page Visit     |
            | application step                                | 1 indicaciones                                                                  | string       | App Page Visit     |
            | fulfillment model                               | online                                                                          | string       | App Page Visit     |
            | product primary category                        | prestamos                                                                       | string       | App Page Visit     |
            | product name                                    | credito auto                                                                    | string       | App Page Visit     |
            | qualified visits                                | true                                                                            | string       | App Page Visit     |

    @ANA_EVENT_OCCL003
    @analytics
    @web @ios @android
    @MX
    @backend(test)
    @web-done
    @vbank
    Scenario: ocCarLoan - App Started - step levels descriptions
        Given a user with the following criteria
            | criteria               |
            | digital car loan offer |
        When the user accesses contract product section
        And the user accesses the oc car loan offer tracking
        And the analytics interceptor service is initiated
        And the user accesses the "account selection" section of oc car loan
        Then the analytics events contains the following variables
            | item                                            | value                                                                           | type         | event              |
            | version DL                                      | 20250414_5.0                                                                    | string       | App Started        |
            | page name                                       | app:privada:personas:prestamos:firma prestamo vehicular:1 indicaciones          | string       | App Started        |
            | level 1                                         | prestamos                                                                       | string       | App Started        |
            | level 2                                         | firma prestamo vehicular                                                        | string       | App Started        |
            | level 3                                         | 1 indicaciones                                                                  | string       | App Started        |
            | language                                        | ES                                                                              | string       | App Started        |
            | page area                                       | privada                                                                         | string       | App Started        |
            | page intent                                     | transaccion                                                                     | string       | App Started        |
            | channel                                         | online                                                                          | string       | App Started        |
            | page instance ID                                | de                                                                              | string       | App Started        |
            | page segment                                    | personas                                                                        | string       | App Started        |
            | sysEnv                                          | app                                                                             | string       | App Started        |
            | business unit                                   | BBVA Mexico                                                                     | string       | App Started        |
            | site app name                                   | App BBVA Mexico                                                                 | string       | App Started        |
            | project name                                    | DIY E2E Sales                                                                   | string       | App Started        |
            | device mobile                                   | si                                                                              | string       | App Started        |
            | user userState                                  | logado                                                                          | string       | App Started        |
            | user segment global                             | 003001                                                                          | string       | App Started        |
            | profile ID                                      | profileID                                                                       | regexp named | App Started        |
            | user gender                                     | gender                                                                          | regexp named | App Started        |
            | user age                                        | age                                                                             | regexp named | App Started        |
            | global application                              | car loan                                                                        | string       | App Started        |
            | application name                                | firma prestamo vehicular                                                        | string       | App Started        |
            | application type                                | contratacion                                                                    | string       | App Started        |
            | application step                                | consulta indicaciones                                                           | string       | App Started        |
            | fulfillment model                               | online                                                                          | string       | App Started        |
            | product primary category                        | prestamos                                                                       | string       | App Started        |
            | product name                                    | credito auto                                                                    | string       | App Started        |
            | qualified visits                                | true                                                                            | string       | App Started        |

    @ANA_EVENT_OCCL004
    @analytics
    @web @ios @android
    @MX
    @backend(test)
    @web-done
    @vbank
    Scenario: ocCarLoan - App Step 2 - account selection
        Given a user with the following criteria
            | criteria               |
            | digital car loan offer |
        When the user accesses contract product section
        And the user accesses the oc car loan offer tracking
        And the analytics interceptor service is initiated
        And the user accesses the "account selection" section of oc car loan
        Then the analytics events contains the following variables
            | item                                            | value                                                                           | type         | event              |
            | version DL                                      | 20250414_5.0                                                                    | string       | App Step 2         |
            | page name                                       | app:privada:personas:prestamos:firma prestamo vehicular:2 seleccion cuenta      | string       | App Step 2         |
            | level 1                                         | prestamos                                                                       | string       | App Step 2         |
            | level 2                                         | firma prestamo vehicular                                                        | string       | App Step 2         |
            | level 3                                         | 2 seleccion cuenta                                                              | string       | App Step 2         |
            | language                                        | ES                                                                              | string       | App Step 2         |
            | page area                                       | privada                                                                         | string       | App Step 2         |
            | page intent                                     | transaccion                                                                     | string       | App Step 2         |
            | channel                                         | online                                                                          | string       | App Step 2         |
            | page instance ID                                | de                                                                              | string       | App Step 2         |
            | page segment                                    | personas                                                                        | string       | App Step 2         |
            | sysEnv                                          | app                                                                             | string       | App Step 2         |
            | business unit                                   | BBVA Mexico                                                                     | string       | App Step 2         |
            | site app name                                   | App BBVA Mexico                                                                 | string       | App Step 2         |
            | project name                                    | DIY E2E Sales                                                                   | string       | App Step 2         |
            | device mobile                                   | si                                                                              | string       | App Step 2         |
            | user userState                                  | logado                                                                          | string       | App Step 2         |
            | user segment global                             | 003001                                                                          | string       | App Step 2         |
            | profile ID                                      | profileID                                                                       | regexp named | App Step 2         |
            | user gender                                     | gender                                                                          | regexp named | App Step 2         |
            | user age                                        | age                                                                             | regexp named | App Step 2         |
            | global application                              | car loan                                                                        | string       | App Step 2         |
            | application name                                | firma prestamo vehicular                                                        | string       | App Step 2         |
            | application type                                | contratacion                                                                    | string       | App Step 2         |
            | application step                                | 2 seleccion cuenta                                                              | string       | App Step 2         |
            | fulfillment model                               | online                                                                          | string       | App Step 2         |
            | application typology                            | gestion inicial                                                                 | string       | App Step 2         |
            | qualified visits                                | true                                                                            | string       | App Step 2         |
            | product primary category                        | prestamos                                                                       | string       | App Step 2         |
            | product name                                    | credito auto                                                                    | string       | App Step 2         |

    @ANA_EVENT_OCCL005
    @analytics
    @web @ios @android
    @MX
    @backend(test)
    @web-done
    @vbank
    Scenario: ocCarLoan - App Step 3 - contact signing
        Given a user with the following criteria
            | criteria                        |
            | digital car loan offer rejected |
        When the user accesses contract product section
        And the user accesses the oc car loan offer tracking
        And the analytics interceptor service is initiated
        And the user accesses the "sign documents" section of oc car loan
        Then the analytics events contains the following variables
            | item                                            | value                                                                           | type         | event              |
            | analytics                                       | analytics/glomo_base                                                            | json schema  | App Step 3         |
            | version DL                                      | 20250414_5.0                                                                    | string       | App Step 3         |
            | page name                                       | app:privada:personas:prestamos:firma prestamo vehicular:3 firma documentos      | string       | App Step 3         |
            | level 1                                         | prestamos                                                                       | string       | App Step 3         |
            | level 2                                         | firma prestamo vehicular                                                        | string       | App Step 3         |
            | level 3                                         | 3 firma documentos                                                              | string       | App Step 3         |
            | language                                        | ES                                                                              | string       | App Step 3         |
            | page area                                       | privada                                                                         | string       | App Step 3         |
            | page intent                                     | transaccion                                                                     | string       | App Step 3         |
            | channel                                         | online                                                                          | string       | App Step 3         |
            | page instance ID                                | de                                                                              | string       | App Step 3         |
            | page segment                                    | personas                                                                        | string       | App Step 3         |
            | sysEnv                                          | app                                                                             | string       | App Step 3         |
            | business unit                                   | BBVA Mexico                                                                     | string       | App Step 3         |
            | site app name                                   | App BBVA Mexico                                                                 | string       | App Step 3         |
            | project name                                    | DIY E2E Sales                                                                   | string       | App Step 3         |
            | device mobile                                   | si                                                                              | string       | App Step 3         |
            | user userState                                  | logado                                                                          | string       | App Step 3         |
            | user segment global                             | 003001                                                                          | string       | App Step 3         |
            | profile ID                                      | profileID                                                                       | regexp named | App Step 3         |
            | user gender                                     | gender                                                                          | regexp named | App Step 3         |
            | user age                                        | age                                                                             | regexp named | App Step 3         |
            | global application                              | car loan                                                                        | string       | App Step 3         |
            | application name                                | firma prestamo vehicular                                                        | string       | App Step 3         |
            | application type                                | contratacion                                                                    | string       | App Step 3         |
            | application step                                | 3 firma documentos                                                              | string       | App Step 3         |
            | fulfillment model                               | online                                                                          | string       | App Step 3         |
            | application typology                            | gestion inicial                                                                 | string       | App Step 3         |
            | qualified visits                                | true                                                                            | string       | App Step 3         |
            | product primary category                        | prestamos                                                                       | string       | App Step 3         |
            | product name                                    | credito auto                                                                    | string       | App Step 3         |

    @ANA_EVENT_OCCL006
    @analytics
    @web @ios @android
    @MX
    @backend(test)
    @web-done
    @vbank
    Scenario: ocCarLoan - App Step 4 - terms and conditions
        Given a user with the following criteria
            | criteria                        |
            | digital car loan offer rejected |
        When the user accesses contract product section
        And the user accesses the oc car loan offer tracking
        And the analytics interceptor service is initiated
        And the user accesses the "sign documents" section of oc car loan
        Then the analytics events contains the following variables
            | item                                            | value                                                                           | type         | event              |
            | analytics                                       | analytics/glomo_base                                                            | json schema  | App Step 4         |
            | version DL                                      | 20250414_5.0                                                                    | string       | App Step 4         |
            | page name                                       | app:privada:personas:prestamos:firma prestamo vehicular:4 terminos y condiciones| string       | App Step 4         |
            | level 1                                         | prestamos                                                                       | string       | App Step 4         |
            | level 2                                         | firma prestamo vehicular                                                        | string       | App Step 4         |
            | level 3                                         | 4 terminos y condiciones                                                        | string       | App Step 4         |
            | language                                        | ES                                                                              | string       | App Step 4         |
            | page area                                       | privada                                                                         | string       | App Step 4         |
            | page intent                                     | transaccion                                                                     | string       | App Step 4         |
            | channel                                         | online                                                                          | string       | App Step 4         |
            | page instance ID                                | de                                                                              | string       | App Step 4         |
            | page segment                                    | personas                                                                        | string       | App Step 4         |
            | sysEnv                                          | app                                                                             | string       | App Step 4         |
            | business unit                                   | BBVA Mexico                                                                     | string       | App Step 4         |
            | site app name                                   | App BBVA Mexico                                                                 | string       | App Step 4         |
            | project name                                    | DIY E2E Sales                                                                   | string       | App Step 4         |
            | device mobile                                   | si                                                                              | string       | App Step 4         |
            | user userState                                  | logado                                                                          | string       | App Step 4         |
            | user segment global                             | 003001                                                                          | string       | App Step 4         |
            | profile ID                                      | profileID                                                                       | regexp named | App Step 4         |
            | user gender                                     | gender                                                                          | regexp named | App Step 4         |
            | user age                                        | age                                                                             | regexp named | App Step 4         |
            | global application                              | car loan                                                                        | string       | App Step 4         |
            | application name                                | firma prestamo vehicular                                                        | string       | App Step 4         |
            | application type                                | contratacion                                                                    | string       | App Step 4         |
            | application step                                | 4 terminos y condiciones                                                        | string       | App Step 4         |
            | fulfillment model                               | online                                                                          | string       | App Step 4         |
            | application typology                            | gestion inicial                                                                 | string       | App Step 4         |
            | qualified visits                                | true                                                                            | string       | App Step 4         |
            | product primary category                        | prestamos                                                                       | string       | App Step 4         |
            | product name                                    | credito auto                                                                    | string       | App Step 4         |
            | product amount                                  | 179550                                                                          | number       | App Step 4         |
            | product currency                                | MXN                                                                             | string       | App Step 4         |

    @ANA_EVENT_OCCL007
    @analytics
    @web @ios @android
    @MX
    @backend(test)
    @web-done
    @vbank
    Scenario: ocCarLoan - App Step 5 - confirmation
        Given a user with the following criteria
            | criteria                        |
            | digital car loan offer rejected |
        When the user accesses contract product section
        And the user accesses the oc car loan offer tracking
        And the user accesses the "sign documents" section of oc car loan
        And the user completes the whole documents signing section
        And the analytics interceptor service is initiated
        And the user completes the signing process
        Then the analytics events contains the following variables
            | item                                            | value                                                                           | type         | event              |
            | analytics                                       | analytics/glomo_base                                                            | json schema  | App Step 5         |
            | version DL                                      | 20250414_5.0                                                                    | string       | App Step 5         |
            | page name                                       | app:privada:personas:prestamos:firma prestamo vehicular:5 confirmacion          | string       | App Step 5         |
            | level 1                                         | prestamos                                                                       | string       | App Step 5         |
            | level 2                                         | firma prestamo vehicular                                                        | string       | App Step 5         |
            | level 3                                         | 5 confirmacion                                                                  | string       | App Step 5         |
            | language                                        | ES                                                                              | string       | App Step 5         |
            | page area                                       | privada                                                                         | string       | App Step 5         |
            | page intent                                     | transaccion                                                                     | string       | App Step 5         |
            | channel                                         | online                                                                          | string       | App Step 5         |
            | page instance ID                                | de                                                                              | string       | App Step 5         |
            | page segment                                    | personas                                                                        | string       | App Step 5         |
            | sysEnv                                          | app                                                                             | string       | App Step 5         |
            | business unit                                   | BBVA Mexico                                                                     | string       | App Step 5         |
            | site app name                                   | App BBVA Mexico                                                                 | string       | App Step 5         |
            | project name                                    | DIY E2E Sales                                                                   | string       | App Step 5         |
            | device mobile                                   | si                                                                              | string       | App Step 5         |
            | user userState                                  | logado                                                                          | string       | App Step 5         |
            | user segment global                             | 003001                                                                          | string       | App Step 5         |
            | profile ID                                      | profileID                                                                       | regexp named | App Step 5         |
            | user gender                                     | gender                                                                          | regexp named | App Step 5         |
            | user age                                        | age                                                                             | regexp named | App Step 5         |
            | global application                              | car loan                                                                        | string       | App Step 5         |
            | application name                                | firma prestamo vehicular                                                        | string       | App Step 5         |
            | application type                                | contratacion                                                                    | string       | App Step 5         |
            | application step                                | 5 confirmacion                                                                  | string       | App Step 5         |
            | fulfillment model                               | online                                                                          | string       | App Step 5         |
            | application typology                            | gestion inicial                                                                 | string       | App Step 5         |
            | qualified visits                                | true                                                                            | string       | App Step 5         |
            | product primary category                        | prestamos                                                                       | string       | App Step 5         |
            | product name                                    | credito auto                                                                    | string       | App Step 5         |
            | product amount                                  | 179550                                                                          | number       | App Step 5         |
            | product currency                                | MXN                                                                             | string       | App Step 5         |

    @ANA_EVENT_OCCL008
    @analytics
    @web @ios @android
    @MX
    @backend(test)
    @web-done
    @vbank @vbank-modified
    Scenario: ocCarLoan - App Step 6 - otp
        Given a user with the following criteria
            | criteria                        |
            | digital car loan offer rejected |
        When the user accesses contract product section
        And the user accesses the oc car loan offer tracking
        And the user accesses the "sign documents" section of oc car loan
        And the user completes the whole documents signing section
        And the analytics interceptor service is initiated
        And the user completes the signing process
        Then the analytics events contains the following variables
            | item                                            | value                                                                           | type         | event              |
            | analytics                                       | analytics/glomo_base                                                            | json schema  | App Step 6         |
            | version DL                                      | 20250414_5.0                                                                    | string       | App Step 6         |
            | page name                                       | app:privada:personas:prestamos:firma prestamo vehicular:6 otp                   | string       | App Step 6         |
            | level 1                                         | prestamos                                                                       | string       | App Step 6         |
            | level 2                                         | firma prestamo vehicular                                                        | string       | App Step 6         |
            | level 3                                         | 6 otp                                                                           | string       | App Step 6         |
            | language                                        | ES                                                                              | string       | App Step 6         |
            | page area                                       | privada                                                                         | string       | App Step 6         |
            | page intent                                     | transaccion                                                                     | string       | App Step 6         |
            | channel                                         | online                                                                          | string       | App Step 6         |
            | page instance ID                                | de                                                                              | string       | App Step 6         |
            | page segment                                    | personas                                                                        | string       | App Step 6         |
            | sysEnv                                          | app                                                                             | string       | App Step 6         |
            | business unit                                   | BBVA Mexico                                                                     | string       | App Step 6         |
            | site app name                                   | App BBVA Mexico                                                                 | string       | App Step 6         |
            | project name                                    | DIY E2E Sales                                                                   | string       | App Step 6         |
            | device mobile                                   | si                                                                              | string       | App Step 6         |
            | user userState                                  | logado                                                                          | string       | App Step 6         |
            | user segment global                             | 003001                                                                          | string       | App Step 6         |
            | profile ID                                      | profileID                                                                       | regexp named | App Step 6         |
            | user gender                                     | gender                                                                          | regexp named | App Step 6         |
            | user age                                        | age                                                                             | regexp named | App Step 6         |
            | global application                              | car loan                                                                        | string       | App Step 6         |
            | application name                                | firma prestamo vehicular                                                        | string       | App Step 6         |
            | application type                                | contratacion                                                                    | string       | App Step 6         |
            | application step                                | 6 otp                                                                           | string       | App Step 6         |
            | fulfillment model                               | online                                                                          | string       | App Step 6         |
            | application typology                            | gestion inicial                                                                 | string       | App Step 6         |
            | qualified visits                                | true                                                                            | string       | App Step 6         |
            | custom fields                                   | firma:token                                                                     | string       | App Step 6         |
            | product primary category                        | prestamos                                                                       | string       | App Step 6         |
            | product name                                    | credito auto                                                                    | string       | App Step 6         |
            | product amount                                  | 470810.7                                                                        | number       | App Step 6         |
            | product currency                                | MXN                                                                             | string       | App Step 6         |

    @ANA_EVENT_OCCL009
    @analytics
    @web @ios @android
    @MX
    @backend(test)
    @web-done
    @vbank
    Scenario: ocCarLoan - App Completed - signing success
        Given a user with the following criteria
            | criteria                        |
            | digital car loan offer rejected |
        When the user accesses contract product section
        And the user accesses the oc car loan offer tracking
        And the analytics interceptor service is initiated
        And the user accesses the "sign documents success" section of oc car loan
        Then the analytics events contains the following variables
            | item                                            | value                                                                           | type         | event              |
            | analytics                                       | analytics/glomo_base                                                            | json schema  | App Completed      |
            | version DL                                      | 20250414_5.0                                                                    | string       | App Completed      |
            | page name                                       | app:privada:personas:prestamos:firma prestamo vehicular:pagina exitosa          | string       | App Completed      |
            | level 1                                         | prestamos                                                                       | string       | App Completed      |
            | level 2                                         | firma prestamo vehicular                                                        | string       | App Completed      |
            | level 3                                         | pagina exitosa                                                                  | string       | App Completed      |
            | language                                        | ES                                                                              | string       | App Completed      |
            | page area                                       | privada                                                                         | string       | App Completed      |
            | page intent                                     | transaccion                                                                     | string       | App Completed      |
            | channel                                         | online                                                                          | string       | App Completed      |
            | page instance ID                                | de                                                                              | string       | App Completed      |
            | page segment                                    | personas                                                                        | string       | App Completed      |
            | sysEnv                                          | app                                                                             | string       | App Completed      |
            | business unit                                   | BBVA Mexico                                                                     | string       | App Completed      |
            | site app name                                   | App BBVA Mexico                                                                 | string       | App Completed      |
            | project name                                    | DIY E2E Sales                                                                   | string       | App Completed      |
            | device mobile                                   | si                                                                              | string       | App Completed      |
            | user userState                                  | logado                                                                          | string       | App Completed      |
            | user segment global                             | 003001                                                                          | string       | App Completed      |
            | profile ID                                      | profileID                                                                       | regexp named | App Completed      |
            | user gender                                     | gender                                                                          | regexp named | App Completed      |
            | user age                                        | age                                                                             | regexp named | App Completed      |
            | global application                              | car loan                                                                        | string       | App Completed      |
            | application name                                | firma prestamo vehicular                                                        | string       | App Completed      |
            | application type                                | contratacion                                                                    | string       | App Completed      |
            | application step                                | pagina exitosa                                                                  | string       | App Completed      |
            | fulfillment model                               | online                                                                          | string       | App Completed      |
            | application typology                            | gestion inicial                                                                 | string       | App Completed      |
            | qualified visits                                | true                                                                            | string       | App Completed      |
            | custom fields                                   | firma:token                                                                     | string       | App Completed      |
            | application state                               | en revision                                                                     | string       | App Completed      |
            | application operation number                    | 5026351                                                                         | string       | App Completed      |
            | product primary category                        | prestamos                                                                       | string       | App Completed      |
            | product name                                    | credito auto                                                                    | string       | App Completed      |
            | product amount                                  | 470810.7                                                                        | number       | App Completed      |
            | product currency                                | MXN                                                                             | string       | App Completed      |
            | product state                                   | en revision                                                                     | string       | App Completed      |

    @ANA_EVENT_OCCL010
    @analytics
    @web @ios @android
    @MX
    @backend(test)
    @web-done
    @vbank
    Scenario: ocCarLoan - App Page View - banner offering the product
        Given a user with the following criteria
            | criteria               |
            | digital car loan offer |
        When the user accesses to dashboard
        And the analytics interceptor service is initiated
        And the user accesses contract product section
        Then the analytics events contains the following variables
            | item                                            | value                                                                           | type         | event     | event number |
            | analytics                                       | analytics/glomo_base                                                            | json schema  | Page View | 1            |
            | version DL                                      | 20250414_5.0                                                                    | string       | Page View | 1            |
            | page name                                       | app:privada:personas:oportunidades                                              | string       | Page View | 1            |
            | level 1                                         | oportunidades                                                                   | string       | Page View | 1            |
            | language                                        | ES                                                                              | string       | Page View | 1            |
            | page area                                       | privada                                                                         | string       | Page View | 1            |
            | channel                                         | online                                                                          | string       | Page View | 1            |
            | page instance ID                                | de                                                                              | string       | Page View | 1            |
            | page segment                                    | personas                                                                        | string       | Page View | 1            |
            | sysEnv                                          | app                                                                             | string       | Page View | 1            |
            | business unit                                   | BBVA Mexico                                                                     | string       | Page View | 1            |
            | site app name                                   | App BBVA Mexico                                                                 | string       | Page View | 1            |
            | project name                                    | DIY E2E Sales                                                                   | string       | Page View | 1            |
            | device mobile                                   | si                                                                              | string       | Page View | 1            |
            | user userState                                  | logado                                                                          | string       | Page View | 1            |
            | user segment global                             | 003001                                                                          | string       | Page View | 1            |
            | profile ID                                      | profileID                                                                       | regexp named | Page View | 1            |
            | user gender                                     | gender                                                                          | regexp named | Page View | 1            |
            | user age                                        | age                                                                             | regexp named | Page View | 1            |
            | internal campaign attributes location           | oportunidades--centro--                                                         | string       | Page View | 1            |
            | internal campaign attributes campaign format    | burbuja                                                                         | string       | Page View | 1            |
            | internal campaign attributes collective code    |                                                                                 | string       | Page View | 1            |
            | internal campaign attributes campaign name      | -solicitud de credito automotriz                                                | string       | Page View | 1            |
            | internal campaign attributes product            | prestamos                                                                       | string       | Page View | 1            |
            | internal campaign attributes product code       |                                                                                 | empty array  | Page View | 1            |
            | internal campaign attributes quantity           |                                                                                 | empty array  | Page View | 1            |

    @ANA_EVENT_OCCL011
    @analytics
    @web @ios @android
    @MX
    @backend(test)
    @web-done
    @vbank
    Scenario: ocCarLoan - App Page View - request detail
        Given a user with the following criteria
            | criteria               |
            | digital car loan offer |
        When the user accesses contract product section
        And the user accesses the oc car loan offer tracking
        And the analytics interceptor service is initiated
        And the user accesses the "details" section of oc car loan
        Then the analytics events contains the following variables
            | item                                            | value                                                                           | type         | event     |
            | analytics                                       | analytics/glomo_base                                                            | json schema  | Page View |
            | version DL                                      | 20250414_5.0                                                                    | string       | Page View |
            | page name                                       | app:privada:personas:prestamos:firma prestamo vehicular:detalle de solicitud    | string       | Page View |
            | level 1                                         | prestamos                                                                       | string       | Page View |
            | level 2                                         | firma prestamo vehicular                                                        | string       | Page View |
            | level 3                                         | detalle de solicitud                                                            | string       | Page View |
            | page area                                       | privada                                                                         | string       | Page View |
            | page intent                                     | transaccion                                                                     | string       | Page View |
            | channel                                         | online                                                                          | string       | Page View |
            | page instance ID                                | de                                                                              | string       | Page View |
            | page segment                                    | personas                                                                        | string       | Page View |
            | sysEnv                                          | app                                                                             | string       | Page View |
            | business unit                                   | BBVA Mexico                                                                     | string       | Page View |
            | site app name                                   | App BBVA Mexico                                                                 | string       | Page View |
            | project name                                    | DIY E2E Sales                                                                   | string       | Page View |
            | device mobile                                   | si                                                                              | string       | Page View |
            | user userState                                  | logado                                                                          | string       | Page View |
            | user segment global                             | 003001                                                                          | string       | Page View |
            | profile ID                                      | profileID                                                                       | regexp named | Page View |
            | user gender                                     | gender                                                                          | regexp named | Page View |
            | user age                                        | age                                                                             | regexp named | Page View |

    @ANA_EVENT_OCCL012
    @analytics
    @web @ios @android
    @MX
    @backend(test)
    @web-done
    @vbank
    Scenario: ocCarLoan - App Page View - irregular payment
        Given a user with the following criteria
            | criteria               |
            | digital car loan offer |
        When the user accesses contract product section
        And the user accesses the oc car loan offer tracking
        And the user accesses the "details" section of oc car loan
        And the analytics interceptor service is initiated
        And the user accesses to the "irregular payments" modal
        Then the analytics events contains the following variables
            | item                                            | value                                                                                         | type         | event     |
            | version DL                                      | 20250414_5.0                                                                                  | string       | Page View |
            | page name                                       | app:privada:personas:prestamos:firma prestamo vehicular:detalle de solicitud:pago irregular   | string       | Page View |
            | level 1                                         | prestamos                                                                                     | string       | Page View |
            | level 2                                         | firma prestamo vehicular                                                                      | string       | Page View |
            | level 3                                         | detalle de solicitud                                                                          | string       | Page View |
            | level 4                                         | pago irregular                                                                                | string       | Page View |
            | language                                        | ES                                                                                            | string       | Page View |
            | page area                                       | privada                                                                                       | string       | Page View |
            | page intent                                     | transaccion                                                                                   | string       | Page View |
            | channel                                         | online                                                                                        | string       | Page View |
            | page instance ID                                | de                                                                                            | string       | Page View |
            | page segment                                    | personas                                                                                      | string       | Page View |
            | sysEnv                                          | app                                                                                           | string       | Page View |
            | business unit                                   | BBVA Mexico                                                                                   | string       | Page View |
            | site app name                                   | App BBVA Mexico                                                                               | string       | Page View |
            | project name                                    | DIY E2E Sales                                                                                 | string       | Page View |
            | device mobile                                   | si                                                                                            | string       | Page View |
            | user userState                                  | logado                                                                                        | string       | Page View |
            | user segment global                             | 003001                                                                                        | string       | Page View |
            | profile ID                                      | profileID                                                                                     | regexp named | Page View |
            | user gender                                     | gender                                                                                        | regexp named | Page View |
            | user age                                        | age                                                                                           | regexp named | Page View |

    @ANA_EVENT_OCCL013
    @analytics
    @web @ios @android
    @MX
    @backend(test)
    @web-done
    @vbank
    Scenario: ocCarLoan - App Page View - monthly payment
        Given a user with the following criteria
            | criteria               |
            | digital car loan offer |
        When the user accesses contract product section
        And the user accesses the oc car loan offer tracking
        And the user accesses the "details" section of oc car loan
        And the analytics interceptor service is initiated
        And the user accesses to the "monthly payment" modal
        Then the analytics events contains the following variables
            | item                                            | value                                                                                         | type         | event     |
            | version DL                                      | 20250414_5.0                                                                                  | string       | Page View |
            | page name                                       | app:privada:personas:prestamos:firma prestamo vehicular:detalle de solicitud:pago mensual     | string       | Page View |
            | level 1                                         | prestamos                                                                                     | string       | Page View |
            | level 2                                         | firma prestamo vehicular                                                                      | string       | Page View |
            | level 3                                         | detalle de solicitud                                                                          | string       | Page View |
            | level 4                                         | pago mensual                                                                                  | string       | Page View |
            | language                                        | ES                                                                                            | string       | Page View |
            | page area                                       | privada                                                                                       | string       | Page View |
            | page intent                                     | transaccion                                                                                   | string       | Page View |
            | channel                                         | online                                                                                        | string       | Page View |
            | page instance ID                                | de                                                                                            | string       | Page View |
            | page segment                                    | personas                                                                                      | string       | Page View |
            | sysEnv                                          | app                                                                                           | string       | Page View |
            | business unit                                   | BBVA Mexico                                                                                   | string       | Page View |
            | site app name                                   | App BBVA Mexico                                                                               | string       | Page View |
            | project name                                    | DIY E2E Sales                                                                                 | string       | Page View |
            | device mobile                                   | si                                                                                            | string       | Page View |
            | user userState                                  | logado                                                                                        | string       | Page View |
            | user segment global                             | 003001                                                                                        | string       | Page View |
            | profile ID                                      | profileID                                                                                     | regexp named | Page View |
            | user gender                                     | gender                                                                                        | regexp named | Page View |
            | user age                                        | age                                                                                           | regexp named | Page View |

    @ANA_EVENT_OCCL014
    @analytics
    @web @ios @android
    @MX
    @backend(test)
    @web-done
    @vbank @vbank-modified
    #Edited vbank record to add beauty accessories data in the response
    Scenario: ocCarLoan - App Page View - beauty accessories
        Given a user with the following criteria
            | criteria               |
            | digital car loan offer |
        When the user accesses contract product section
        And the user accesses the oc car loan offer tracking
        And the user accesses the "details" section of oc car loan
        And the analytics interceptor service is initiated
        And the user accesses to the "aesthetic accessories" modal
        Then the analytics events contains the following variables
            | item                                            | value                                                                                               | type         | event     |
            | version DL                                      | 20250414_5.0                                                                                        | string       | Page View |
            | page name                                       | app:privada:personas:prestamos:firma prestamo vehicular:detalle de solicitud:accesorios estetica    | string       | Page View |
            | level 1                                         | prestamos                                                                                           | string       | Page View |
            | level 2                                         | firma prestamo vehicular                                                                            | string       | Page View |
            | level 3                                         | detalle de solicitud                                                                                | string       | Page View |
            | level 4                                         | accesorios estetica                                                                                 | string       | Page View |
            | language                                        | ES                                                                                                  | string       | Page View |
            | page area                                       | privada                                                                                             | string       | Page View |
            | page intent                                     | transaccion                                                                                         | string       | Page View |
            | channel                                         | online                                                                                              | string       | Page View |
            | page instance ID                                | de                                                                                                  | string       | Page View |
            | page segment                                    | personas                                                                                            | string       | Page View |
            | sysEnv                                          | app                                                                                                 | string       | Page View |
            | business unit                                   | BBVA Mexico                                                                                         | string       | Page View |
            | site app name                                   | App BBVA Mexico                                                                                     | string       | Page View |
            | project name                                    | DIY E2E Sales                                                                                       | string       | Page View |
            | device mobile                                   | si                                                                                                  | string       | Page View |
            | user userState                                  | logado                                                                                              | string       | Page View |
            | user segment global                             | 003001                                                                                              | string       | Page View |
            | profile ID                                      | profileID                                                                                           | regexp named | Page View |
            | user gender                                     | gender                                                                                              | regexp named | Page View |
            | user age                                        | age                                                                                                 | regexp named | Page View |

    @ANA_EVENT_OCCL015
    @analytics
    @web @ios @android
    @MX
    @backend(test)
    @web-done
    @vbank
    Scenario: ocCarLoan - App Page View - guaranteed value
        Given a user with the following criteria
            | criteria               |
            | digital car loan offer |
        When the user accesses contract product section
        And the user accesses the oc car loan offer tracking
        And the user accesses the "details" section of oc car loan
        And the analytics interceptor service is initiated
        And the user accesses to the "guaranteed value" modal
        Then the analytics events contains the following variables
            | item                                            | value                                                                                               | type         | event     |
            | version DL                                      | 20250414_5.0                                                                                        | string       | Page View |
            | page name                                       | app:privada:personas:prestamos:firma prestamo vehicular:detalle de solicitud:valor garantizado      | string       | Page View |
            | level 1                                         | prestamos                                                                                           | string       | Page View |
            | level 2                                         | firma prestamo vehicular                                                                            | string       | Page View |
            | level 3                                         | detalle de solicitud                                                                                | string       | Page View |
            | level 4                                         | valor garantizado                                                                                   | string       | Page View |
            | language                                        | ES                                                                                                  | string       | Page View |
            | page area                                       | privada                                                                                             | string       | Page View |
            | page intent                                     | transaccion                                                                                         | string       | Page View |
            | channel                                         | online                                                                                              | string       | Page View |
            | page instance ID                                | de                                                                                                  | string       | Page View |
            | page segment                                    | personas                                                                                            | string       | Page View |
            | sysEnv                                          | app                                                                                                 | string       | Page View |
            | business unit                                   | BBVA Mexico                                                                                         | string       | Page View |
            | site app name                                   | App BBVA Mexico                                                                                     | string       | Page View |
            | project name                                    | DIY E2E Sales                                                                                       | string       | Page View |
            | device mobile                                   | si                                                                                                  | string       | Page View |
            | user userState                                  | logado                                                                                              | string       | Page View |
            | user segment global                             | 003001                                                                                              | string       | Page View |
            | profile ID                                      | profileID                                                                                           | regexp named | Page View |
            | user gender                                     | gender                                                                                              | regexp named | Page View |
            | user age                                        | age                                                                                                 | regexp named | Page View |

    @ANA_EVENT_OCCL016
    @analytics
    @web @ios @android
    @MX
    @backend(test)
    @web-done
    @vbank
    Scenario: ocCarLoan - App Page View - pending advisory documents
        Given a user with the following criteria
            | criteria               |
            | digital car loan offer |
        When the user accesses contract product section
        And the analytics interceptor service is initiated
        And the user accesses the oc car loan offer tracking
        Then the analytics events contains the following variables
            | item                                            | value                                                                                    | type         | event     |
            | version DL                                      | 20250414_5.0                                                                             | string       | Page View |
            | page name                                       | app:privada:personas:prestamos:firma prestamo vehicular:pendiente documentos asesor      | string       | Page View |
            | level 1                                         | prestamos                                                                                | string       | Page View |
            | level 2                                         | firma prestamo vehicular                                                                 | string       | Page View |
            | level 3                                         | pendiente documentos asesor                                                              | string       | Page View |
            | language                                        | ES                                                                                       | string       | Page View |
            | page area                                       | privada                                                                                  | string       | Page View |
            | page intent                                     | transaccion                                                                              | string       | Page View |
            | channel                                         | online                                                                                   | string       | Page View |
            | page instance ID                                | de                                                                                       | string       | Page View |
            | page segment                                    | personas                                                                                 | string       | Page View |
            | sysEnv                                          | app                                                                                      | string       | Page View |
            | business unit                                   | BBVA Mexico                                                                              | string       | Page View |
            | site app name                                   | App BBVA Mexico                                                                          | string       | Page View |
            | project name                                    | DIY E2E Sales                                                                            | string       | Page View |
            | device mobile                                   | si                                                                                       | string       | Page View |
            | user userState                                  | logado                                                                                   | string       | Page View |
            | user segment global                             | 003001                                                                                   | string       | Page View |
            | profile ID                                      | profileID                                                                                | regexp named | Page View |
            | user gender                                     | gender                                                                                   | regexp named | Page View |
            | user age                                        | age                                                                                      | regexp named | Page View |

    @ANA_EVENT_OCCL017
    @analytics
    @web @ios @android
    @MX
    @backend(test)
    @web-done
    @vbank
    Scenario: ocCarLoan - App Page View - pending agency payment
        Given a user with the following criteria
            | criteria               |
            | digital car loan offer |
        When the user accesses contract product section
        And the analytics interceptor service is initiated
        And the user accesses the oc car loan offer tracking
        Then the analytics events contains the following variables
            | item                                            | value                                                                              | type         | event     |
            | version DL                                      | 20250414_5.0                                                                       | string       | Page View |
            | page name                                       | app:privada:personas:prestamos:firma prestamo vehicular:pendiente pago agencia     | string       | Page View |
            | level 1                                         | prestamos                                                                          | string       | Page View |
            | level 2                                         | firma prestamo vehicular                                                           | string       | Page View |
            | level 3                                         | pendiente pago agencia                                                             | string       | Page View |
            | language                                        | ES                                                                                 | string       | Page View |
            | page area                                       | privada                                                                            | string       | Page View |
            | page intent                                     | transaccion                                                                        | string       | Page View |
            | channel                                         | online                                                                             | string       | Page View |
            | page instance ID                                | de                                                                                 | string       | Page View |
            | page segment                                    | personas                                                                           | string       | Page View |
            | sysEnv                                          | app                                                                                | string       | Page View |
            | business unit                                   | BBVA Mexico                                                                        | string       | Page View |
            | site app name                                   | App BBVA Mexico                                                                    | string       | Page View |
            | project name                                    | DIY E2E Sales                                                                      | string       | Page View |
            | device mobile                                   | si                                                                                 | string       | Page View |
            | user userState                                  | logado                                                                             | string       | Page View |
            | user segment global                             | 003001                                                                             | string       | Page View |
            | profile ID                                      | profileID                                                                          | regexp named | Page View |
            | user gender                                     | gender                                                                             | regexp named | Page View |
            | user age                                        | age                                                                                | regexp named | Page View |

    @ANA_EVENT_OCCL018
    @analytics
    @web @ios @android
    @MX
    @backend(test)
    @web-done
    @vbank
    Scenario: ocCarLoan - App Page View - credit aproveed
        Given a user with the following criteria
            | criteria               |
            | digital car loan offer |
        When the user accesses contract product section
        And the analytics interceptor service is initiated
        And the user accesses the oc car loan offer tracking
        Then the analytics events contains the following variables
            | item                                            | value                                                                              | type         | event     |
            | version DL                                      | 20250414_5.0                                                                       | string       | Page View |
            | page name                                       | app:privada:personas:prestamos:firma prestamo vehicular:credito listo              | string       | Page View |
            | level 1                                         | prestamos                                                                          | string       | Page View |
            | level 2                                         | firma prestamo vehicular                                                           | string       | Page View |
            | level 3                                         | credito listo                                                                      | string       | Page View |
            | language                                        | ES                                                                                 | string       | Page View |
            | page area                                       | privada                                                                            | string       | Page View |
            | page intent                                     | transaccion                                                                        | string       | Page View |
            | channel                                         | online                                                                             | string       | Page View |
            | page instance ID                                | de                                                                                 | string       | Page View |
            | page segment                                    | personas                                                                           | string       | Page View |
            | sysEnv                                          | app                                                                                | string       | Page View |
            | business unit                                   | BBVA Mexico                                                                        | string       | Page View |
            | site app name                                   | App BBVA Mexico                                                                    | string       | Page View |
            | project name                                    | DIY E2E Sales                                                                      | string       | Page View |
            | device mobile                                   | si                                                                                 | string       | Page View |
            | user userState                                  | logado                                                                             | string       | Page View |
            | user segment global                             | 003001                                                                             | string       | Page View |
            | profile ID                                      | profileID                                                                          | regexp named | Page View |
            | user gender                                     | gender                                                                             | regexp named | Page View |
            | user age                                        | age                                                                                | regexp named | Page View |

    @ANA_EVENT_OCCL019
    @analytics
    @web @ios @android
    @MX
    @backend(test)
    @web-done
    @vbank @vbank-modified
    #Edited financial-overview response to simulate not available accounts case
    Scenario: ocCarLoan - Site Error - accounts not available
        Given a user with the following criteria
            | criteria               |
            | digital car loan offer |
        When the user accesses contract product section
        And the user accesses the oc car loan offer tracking
        And the analytics interceptor service is initiated
        And the user attempts to access the "account selection" section of oc car loan
        Then the analytics events contains the following variables
            | item                                            | value                                                                         | type         | event      |
            | analytics                                       | analytics/glomo_base                                                          | json schema  | Site Error |
            | version DL                                      | 20250414_5.0                                                                  | string       | Site Error |
            | page name                                       | app:privada:personas:prestamos:firma prestamo vehicular:2 seleccion cuenta    | string       | Site Error |
            | level 1                                         | prestamos                                                                     | string       | Site Error |
            | level 2                                         | firma prestamo vehicular                                                      | string       | Site Error |
            | level 3                                         | 2 seleccion cuenta                                                            | string       | Site Error |
            | language                                        | ES                                                                            | string       | Site Error |
            | page area                                       | privada                                                                       | string       | Site Error |
            | page intent                                     | transaccion                                                                   | string       | Site Error |
            | channel                                         | online                                                                        | string       | Site Error |
            | page instance ID                                | de                                                                            | string       | Site Error |
            | page segment                                    | personas                                                                      | string       | Site Error |
            | sysEnv                                          | app                                                                           | string       | Site Error |
            | business unit                                   | BBVA Mexico                                                                   | string       | Site Error |
            | site app name                                   | App BBVA Mexico                                                               | string       | Site Error |
            | project name                                    | DIY E2E Sales                                                                 | string       | Site Error |
            | device mobile                                   | si                                                                            | string       | Site Error |
            | user userState                                  | logado                                                                        | string       | Site Error |
            | user segment global                             | 003001                                                                        | string       | Site Error |
            | profile ID                                      | profileID                                                                     | regexp named | Site Error |
            | user gender                                     | gender                                                                        | regexp named | Site Error |
            | user age                                        | age                                                                           | regexp named | Site Error |

    @ANA_EVENT_OCCL020
    @analytics
    @web @ios @android
    @MX
    @backend(test)
    @web-done
    @vbank @vbank-modified
    #Edited vbank record to simulate an error(500 Internal Server Error)
    Scenario: ocCarLoan - App Page View - error page
        Given a user with the following criteria
            | criteria               |
            | digital car loan offer |
        When the user accesses contract product section
        And the analytics interceptor service is initiated
        And the user attempts to access the "tracking" section of oc car loan
        Then the analytics events contains the following variables
            | item                                            | value                                                                         | type         | event      | event number |
            | analytics                                       | analytics/glomo_base                                                          | json schema  | Page View  | 1            |
            | version DL                                      | 20250414_5.0                                                                  | string       | Page View  | 1            |
            | page name                                       | app:privada:personas:prestamos:firma prestamo vehicular:error de servicio     | string       | Page View  | 1            |
            | level 1                                         | prestamos                                                                     | string       | Page View  | 1            |
            | level 2                                         | firma prestamo vehicular                                                      | string       | Page View  | 1            |
            | level 3                                         | error de servicio                                                             | string       | Page View  | 1            |
            | language                                        | ES                                                                            | string       | Page View  | 1            |
            | page area                                       | privada                                                                       | string       | Page View  | 1            |
            | page intent                                     | transaccion                                                                   | string       | Page View  | 1            |
            | channel                                         | online                                                                        | string       | Page View  | 1            |
            | page instance ID                                | de                                                                            | string       | Page View  | 1            |
            | page segment                                    | personas                                                                      | string       | Page View  | 1            |
            | sysEnv                                          | app                                                                           | string       | Page View  | 1            |
            | business unit                                   | BBVA Mexico                                                                   | string       | Page View  | 1            |
            | site app name                                   | App BBVA Mexico                                                               | string       | Page View  | 1            |
            | project name                                    | DIY E2E Sales                                                                 | string       | Page View  | 1            |
            | device mobile                                   | si                                                                            | string       | Page View  | 1            |
            | user userState                                  | logado                                                                        | string       | Page View  | 1            |
            | user segment global                             | 003001                                                                        | string       | Page View  | 1            |
            | profile ID                                      | profileID                                                                     | regexp named | Page View  | 1            |
            | user gender                                     | gender                                                                        | regexp named | Page View  | 1            |
            | user age                                        | age                                                                           | regexp named | Page View  | 1            |

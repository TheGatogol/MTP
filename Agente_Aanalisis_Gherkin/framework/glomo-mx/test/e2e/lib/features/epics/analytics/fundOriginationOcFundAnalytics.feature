@FundOriginationOcFundAnalytics
Feature: Analytics - Fund Origination Oc Fund

    @ANA_EVENT_OCFS001
    @analytics
    @MX
    @web
    @vbank @backend(test)
    @web-done
    Scenario: Fund Origination Oc Fund - App Page Visit
        Given a user with the following criteria
            | criteria       |
            | oc fund simple |
        And the user accesses contract product section
        And the analytics interceptor service is initiated
        When the user accesses to fund card from opportunities
        Then the analytics events contains the following variables
            | item                                        | value                                                     | type         | event          |
            | analytics                                   | analytics/glomo_base                                      | json schema  | App Page Visit |
            | version DL                                  | 20250414_5.0                                              | string       | App Page Visit |
            | page instance ID                            | de                                                        | string       | App Page Visit |
            | sysEnv                                      | app                                                       | string       | App Page Visit |
            | page segment                                | personas                                                  | string       | App Page Visit |
            | page intent                                 | transaccion                                               | string       | App Page Visit |
            | business unit                               | BBVA Mexico                                               | string       | App Page Visit |
            | page area                                   | privada                                                   | string       | App Page Visit |
            | language                                    | ES                                                        | string       | App Page Visit |
            | channel                                     | online                                                    | string       | App Page Visit |
            | site app name                               | App BBVA Mexico                                           | string       | App Page Visit |
            | project name                                | Glomo                                                     | string       | App Page Visit |
            | level 1                                     | fondos inversion                                          | string       | App Page Visit |
            | level 2                                     | 1 invertir en fondo                                       | string       | App Page Visit |
            | page name                                   | app:privada:personas:fondos inversion:1 invertir en fondo | string       | App Page Visit |
            | device mobile                               | si                                                        | string       | App Page Visit |
            | user segment global                         | 003001                                                    | string       | App Page Visit |
            | user userState                              | logado                                                    | string       | App Page Visit |
            | profile ID                                  | profileID                                                 | regexp named | App Page Visit |
            | user gender                                 | gender                                                    | regexp named | App Page Visit |
            | user age                                    | age                                                       | regexp named | App Page Visit |
            | fulfillment model                           | online                                                    | string       | App Page Visit |
            | application step                            | 1 invertir en fondo                                       | string       | App Page Visit |
            | application state                           | inicio                                                    | string       | App Page Visit |
            | application name                            | fondos inversion                                          | string       | App Page Visit |
            | application type                            | contratacion                                              | string       | App Page Visit |
            | global application                          | investment service                                        | string       | App Page Visit |
            | product primary category                    | inversiones                                               | string       | App Page Visit |
            | internal campaign                           |                                                           | empty array  | App Page Visit |
            | optimization attributes                     |                                                           | empty array  | App Page Visit |

    @ANA_EVENT_OCFS002
    @analytics
    @MX
    @web
    @vbank @backend(test)
    @web-done
    Scenario: Fund Origination Oc Fund - App Started
        Given a user with the following criteria
            | criteria       |
            | oc fund simple |
        And the user accesses to fund card from opportunities
        And the analytics interceptor service is initiated
        When the user enters an amount of "1000"
        Then the analytics events contains the following variables
            | item                     | value                                                     | type         | event       |
            | analytics                | analytics/glomo_base                                      | json schema  | App Started |
            | version DL               | 20250414_5.0                                              | string       | App Started |
            | page instance ID         | de                                                        | string       | App Started |
            | sysEnv                   | app                                                       | string       | App Started |
            | page segment             | personas                                                  | string       | App Started |
            | page intent              | transaccion                                               | string       | App Started |
            | business unit            | BBVA Mexico                                               | string       | App Started |
            | page area                | privada                                                   | string       | App Started |
            | language                 | ES                                                        | string       | App Started |
            | channel                  | online                                                    | string       | App Started |
            | site app name            | App BBVA Mexico                                           | string       | App Started |
            | project name             | Glomo                                                     | string       | App Started |
            | level 1                  | fondos inversion                                          | string       | App Started |
            | level 2                  | 1 invertir en fondo                                       | string       | App Started |
            | page name                | app:privada:personas:fondos inversion:1 invertir en fondo | string       | App Started |
            | device mobile            | si                                                        | string       | App Started |
            | user segment global      | 003001                                                    | string       | App Started |
            | user userState           | logado                                                    | string       | App Started |
            | profile ID               | profileID                                                 | regexp named | App Started |
            | user gender              | gender                                                    | regexp named | App Started |
            | user age                 | age                                                       | regexp named | App Started |
            | fulfillment model        | online                                                    | string       | App Started |
            | application step         | confirmar inversion                                       | string       | App Started |
            | application name         | fondos inversion                                          | string       | App Started |
            | application type         | contratacion                                              | string       | App Started |
            | global application       | investment service                                        | string       | App Started |
            | product name             | bbvaliq                                                   | string       | App Started |
            | product subtype          | fondos de inversion                                       | string       | App Started |
            | product primary category | inversiones                                               | string       | App Started |
            | internal campaign        |                                                           | empty array  | App Started |
            | optimization attributes  |                                                           | empty array  | App Started |

    @ANA_EVENT_OCFS003
    @analytics
    @MX
    @web
    @vbank @backend(test)
    @web-done
    Scenario: Fund Origination Oc Fund - App Step 2
        Given a user with the following criteria
            | criteria       |
            | oc fund simple |
        And the user accesses to fund card from opportunities
        And the analytics interceptor service is initiated
        When the user goes to the "summary" step
        Then the analytics events contains the following variables
            | item                     | value                                                          | type         | event      |
            | analytics                | analytics/glomo_base                                           | json schema  | App Step 2 |
            | version DL               | 20250414_5.0                                                   | string       | App Step 2 |
            | page instance ID         | de                                                             | string       | App Step 2 |
            | sysEnv                   | app                                                            | string       | App Step 2 |
            | page segment             | personas                                                       | string       | App Step 2 |
            | page intent              | transaccion                                                    | string       | App Step 2 |
            | business unit            | BBVA Mexico                                                    | string       | App Step 2 |
            | page area                | privada                                                        | string       | App Step 2 |
            | language                 | ES                                                             | string       | App Step 2 |
            | channel                  | online                                                         | string       | App Step 2 |
            | site app name            | App BBVA Mexico                                                | string       | App Step 2 |
            | project name             | Glomo                                                          | string       | App Step 2 |
            | level 1                  | fondos inversion                                               | string       | App Step 2 |
            | level 2                  | 2 terminos y condiciones                                       | string       | App Step 2 |
            | page name                | app:privada:personas:fondos inversion:2 terminos y condiciones | string       | App Step 2 |
            | device mobile            | si                                                             | string       | App Step 2 |
            | user segment global      | 003001                                                         | string       | App Step 2 |
            | user userState           | logado                                                         | string       | App Step 2 |
            | profile ID               | profileID                                                      | regexp named | App Step 2 |
            | user gender              | gender                                                         | regexp named | App Step 2 |
            | user age                 | age                                                            | regexp named | App Step 2 |
            | fulfillment model        | online                                                         | string       | App Step 2 |
            | application step         | 2 terminos y condiciones                                       | string       | App Step 2 |
            | application name         | fondos inversion                                               | string       | App Step 2 |
            | application type         | contratacion                                                   | string       | App Step 2 |
            | global application       | investment service                                             | string       | App Step 2 |
            | product name             | bbvaliq                                                        | string       | App Step 2 |
            | product subtype          | fondos de inversion                                            | string       | App Step 2 |
            | product primary category | inversiones                                                    | string       | App Step 2 |
            | internal campaign        |                                                                | empty array  | App Step 2 |
            | optimization attributes  |                                                                | empty array  | App Step 2 |

    @ANA_EVENT_OCFS004
    @analytics
    @MX
    @web
    @vbank @backend(test)
    @web-done
    Scenario: Fund Origination Oc Fund - App Step 3
        Given a user with the following criteria
            | criteria       |
            | oc fund simple |
        And the user accesses to fund card from opportunities
        And the analytics interceptor service is initiated
        When the user goes to the "summary" step
        Then the analytics events contains the following variables
            | item                     | value                                                        | type         | event      |
            | analytics                | analytics/glomo_base                                         | json schema  | App Step 3 |
            | version DL               | 20250414_5.0                                                 | string       | App Step 3 |
            | page instance ID         | de                                                           | string       | App Step 3 |
            | sysEnv                   | app                                                          | string       | App Step 3 |
            | page segment             | personas                                                     | string       | App Step 3 |
            | page intent              | transaccion                                                  | string       | App Step 3 |
            | business unit            | BBVA Mexico                                                  | string       | App Step 3 |
            | page area                | privada                                                      | string       | App Step 3 |
            | language                 | ES                                                           | string       | App Step 3 |
            | channel                  | online                                                       | string       | App Step 3 |
            | site app name            | App BBVA Mexico                                              | string       | App Step 3 |
            | project name             | Glomo                                                        | string       | App Step 3 |
            | level 1                  | fondos inversion                                             | string       | App Step 3 |
            | level 2                  | 3 resumen de inversion                                       | string       | App Step 3 |
            | page name                | app:privada:personas:fondos inversion:3 resumen de inversion | string       | App Step 3 |
            | device mobile            | si                                                           | string       | App Step 3 |
            | user segment global      | 003001                                                       | string       | App Step 3 |
            | user userState           | logado                                                       | string       | App Step 3 |
            | profile ID               | profileID                                                    | regexp named | App Step 3 |
            | user gender              | gender                                                       | regexp named | App Step 3 |
            | user age                 | age                                                          | regexp named | App Step 3 |
            | fulfillment model        | online                                                       | string       | App Step 3 |
            | application step         | 3 resumen de inversion                                       | string       | App Step 3 |
            | application name         | fondos inversion                                             | string       | App Step 3 |
            | application type         | contratacion                                                 | string       | App Step 3 |
            | global application       | investment service                                           | string       | App Step 3 |
            | product name             | bbvaliq                                                      | string       | App Step 3 |
            | product subtype          | fondos de inversion                                          | string       | App Step 3 |
            | product primary category | inversiones                                                  | string       | App Step 3 |
            | internal campaign        |                                                              | empty array  | App Step 3 |
            | optimization attributes  |                                                              | empty array  | App Step 3 |

    @ANA_EVENT_OCFS005
    @analytics
    @MX
    @web
    @vbank @backend(test)
    @web-done
    Scenario: Fund Origination Oc Fund - App Step 4
        Given a user with the following criteria
            | criteria       |
            | oc fund simple |
        And the user accesses to fund card from opportunities
        And the analytics interceptor service is initiated
        When the user successfully completed the investment
        Then the analytics events contains the following variables
            | item                     | value                                       | type         | event      |
            | analytics                | analytics/glomo_base                        | json schema  | App Step 4 |
            | version DL               | 20250414_5.0                                | string       | App Step 4 |
            | page instance ID         | de                                          | string       | App Step 4 |
            | sysEnv                   | app                                         | string       | App Step 4 |
            | page segment             | personas                                    | string       | App Step 4 |
            | page intent              | transaccion                                 | string       | App Step 4 |
            | business unit            | BBVA Mexico                                 | string       | App Step 4 |
            | page area                | privada                                     | string       | App Step 4 |
            | language                 | ES                                          | string       | App Step 4 |
            | channel                  | online                                      | string       | App Step 4 |
            | site app name            | App BBVA Mexico                             | string       | App Step 4 |
            | project name             | Glomo                                       | string       | App Step 4 |
            | level 1                  | fondos inversion                            | string       | App Step 4 |
            | level 2                  | 4 otp                                       | string       | App Step 4 |
            | page name                | app:privada:personas:fondos inversion:4 otp | string       | App Step 4 |
            | device mobile            | si                                          | string       | App Step 4 |
            | user segment global      | 003001                                      | string       | App Step 4 |
            | user userState           | logado                                      | string       | App Step 4 |
            | profile ID               | profileID                                   | regexp named | App Step 4 |
            | user state               | lettersAndSpaceOrEmpty                      | regexp named | App Step 4 |
            | user gender              | gender                                      | regexp named | App Step 4 |
            | user age                 | age                                         | regexp named | App Step 4 |
            | fulfillment model        | online                                      | string       | App Step 4 |
            | application step         | 4 otp                                       | string       | App Step 4 |
            | application name         | fondos inversion                            | string       | App Step 4 |
            | application type         | contratacion                                | string       | App Step 4 |
            | global application       | investment service                          | string       | App Step 4 |
            | product name             | bbvaliq                                     | string       | App Step 4 |
            | product subtype          | fondos de inversion                         | string       | App Step 4 |
            | product primary category | inversiones                                 | string       | App Step 4 |
            | internal campaign        |                                             | empty array  | App Step 4 |
            | optimization attributes  |                                             | empty array  | App Step 4 |

    @ANA_EVENT_OCFS006
    @analytics
    @MX
    @web
    @vbank @backend(test)
    @web-done
    Scenario: Fund Origination Oc Fund - App Completed
        Given a user with the following criteria
            | criteria       |
            | oc fund simple |
        And the user accesses to fund card from opportunities
        And the analytics interceptor service is initiated
        When the user successfully completed the investment
        Then the analytics events contains the following variables
            | item                     | value                                                | type         | event         |
            | analytics                | analytics/glomo_base                                 | json schema  | App Completed |
            | version DL               | 20250414_5.0                                         | string       | App Completed |
            | page instance ID         | de                                                   | string       | App Completed |
            | sysEnv                   | app                                                  | string       | App Completed |
            | page segment             | personas                                             | string       | App Completed |
            | page intent              | transaccion                                          | string       | App Completed |
            | business unit            | BBVA Mexico                                          | string       | App Completed |
            | page area                | privada                                              | string       | App Completed |
            | language                 | ES                                                   | string       | App Completed |
            | channel                  | online                                               | string       | App Completed |
            | site app name            | App BBVA Mexico                                      | string       | App Completed |
            | project name             | Glomo                                                | string       | App Completed |
            | level 1                  | fondos inversion                                     | string       | App Completed |
            | level 2                  | pagina exitosa                                       | string       | App Completed |
            | page name                | app:privada:personas:fondos inversion:pagina exitosa | string       | App Completed |
            | device mobile            | si                                                   | string       | App Completed |
            | user segment global      | 003001                                               | string       | App Completed |
            | user userState           | logado                                               | string       | App Completed |
            | profile ID               | profileID                                            | regexp named | App Completed |
            | user state               | lettersAndSpaceOrEmpty                               | regexp named | App Completed |
            | user gender              | gender                                               | regexp named | App Completed |
            | user age                 | age                                                  | regexp named | App Completed |
            | fulfillment model        | online                                               | string       | App Completed |
            | application step         | pagina exitosa                                       | string       | App Completed |
            | application state        | aprobado                                             | string       | App Completed |
            | application name         | fondos inversion                                     | string       | App Completed |
            | application type         | contratacion                                         | string       | App Completed |
            | global application       | investment service                                   | string       | App Completed |
            | product name             | bbvaliq                                              | string       | App Completed |
            | product subtype          | fondos de inversion                                  | string       | App Completed |
            | product primary category | inversiones                                          | string       | App Completed |
            | internal campaign        |                                                      | empty array  | App Completed |
            | optimization attributes  |                                                      | empty array  | App Completed |

    @ANA_EVENT_OCFS007
    @analytics
    @MX
    @web
    @vbank @backend(test)
    @web-done
    Scenario: Fund Origination Oc Fund - App On Click Start
        Given a user with the following criteria
            | criteria       |
            | oc fund simple |
        And the user accesses contract product section
        And the analytics interceptor service is initiated
        When the user accesses to fund card from opportunities
        Then the analytics events contains the following variables
            | item                                        | value                                    | type         | event              |
            | analytics                                   | analytics/glomo_base                     | json schema  | App On Click Start |
            | version DL                                  | 20250414_5.0                             | string       | App On Click Start |
            | page instance ID                            | de                                       | string       | App On Click Start |
            | sysEnv                                      | app                                      | string       | App On Click Start |
            | page segment                                | personas                                 | string       | App On Click Start |
            | page intent                                 | informacion                              | string       | App On Click Start |
            | business unit                               | BBVA Mexico                              | string       | App On Click Start |
            | page area                                   | privada                                  | string       | App On Click Start |
            | language                                    | ES                                       | string       | App On Click Start |
            | channel                                     | online                                   | string       | App On Click Start |
            | site app name                               | App BBVA Mexico                          | string       | App On Click Start |
            | project name                                | Glomo                                    | string       | App On Click Start |
            | page name                                   | app:privada:personas:fondos de inversion | string       | App On Click Start |
            | device mobile                               | si                                       | string       | App On Click Start |
            | user segment global                         | 003001                                   | string       | App On Click Start |
            | user userState                              | logado                                   | string       | App On Click Start |
            | profile ID                                  | profileID                                | regexp named | App On Click Start |
            | fulfillment model                           | online                                   | string       | App On Click Start |
            | application step                            | invertir en fondo                        | string       | App On Click Start |
            | application name                            | fondos inversion                         | string       | App On Click Start |
            | application type                            | contratacion                             | string       | App On Click Start |
            | global application                          | investment service                       | string       | App On Click Start |
            | product primary category                    | inversiones                              | string       | App On Click Start |
            | internal campaign                           |                                          | empty array  | App On Click Start |
            | optimization attributes                     |                                          | empty array  | App On Click Start |

    @ANA_EVENT_OCFS008
    @analytics
    @MX
    @web
    @vbank @backend(test)
    @web-done
    Scenario: Fund Origination Oc Fund - Footprint - help faqs
        Given a user with the following criteria
            | criteria       |
            | oc fund simple |
        And the user accesses to fund card from opportunities
        And the analytics interceptor service is initiated
        When the user enters the "AEM help" modal
        Then the analytics events contains the following variables
            | item                    | value                                                         | type             | event     |
            | analytics               | analytics/glomo_base                                          | json schema      | Page View |
            | version DL              | 20250414_5.0                                                  | string           | Page View |
            | page instance ID        | de                                                            | string           | Page View |
            | sysEnv                  | app                                                           | string           | Page View |
            | page segment            | personas                                                      | string           | Page View |
            | page intent             | informacion                                                   | string           | Page View |
            | business unit           | BBVA Mexico                                                   | string           | Page View |
            | page area               | privada                                                       | string           | Page View |
            | language                | ES                                                            | string           | Page View |
            | channel                 | online                                                        | string           | Page View |
            | site app name           | App BBVA Mexico                                               | string           | Page View |
            | project name            | Glomo                                                         | string           | Page View |
            | level 1                 | fondos de inversion                                           | string           | Page View |
            | level 2                 | preguntas frecuentes                                          | string           | Page View |
            | page name               | app:privada:personas:fondos de inversion:preguntas frecuentes | string           | Page View |
            | device mobile           | si                                                            | string           | Page View |
            | user segment global     | 003001                                                        | string           | Page View |
            | user userState          | logado                                                        | string           | Page View |
            | profile ID              | profileID                                                     | regexp named     | Page View |
            | user gender             | gender                                                        | regexp named     | Page View |
            | user age                | age                                                           | regexp named     | Page View |
            | internal campaign       |                                                               | empty array      | Page View |
            | optimization attributes |                                                               | empty array      | Page View |
            | application             |                                                               | empty str object | Page View |
            | products attributes     |                                                               | empty array      | Page View |

    @ANA_EVENT_OCFS009
    @analytics
    @MX
    @web
    @vbank @backend(test)
    @web-done
    Scenario: Fund Origination Oc Fund - Footprint - account step
        Given a user with the following criteria
            | criteria        |
            | oc fund account |
        And the user accesses to fund card from opportunities
        And the analytics interceptor service is initiated
        When the user goes to the "account" step
        Then the analytics events contains the following variables
            | item                    | value                                                   | type             | event     |
            | analytics               | analytics/glomo_base                                    | json schema      | Page View |
            | version DL              | 20250414_5.0                                            | string           | Page View |
            | page instance ID        | de                                                      | string           | Page View |
            | sysEnv                  | app                                                     | string           | Page View |
            | page segment            | personas                                                | string           | Page View |
            | page intent             | informacion                                             | string           | Page View |
            | business unit           | BBVA Mexico                                             | string           | Page View |
            | page area               | privada                                                 | string           | Page View |
            | language                | ES                                                      | string           | Page View |
            | channel                 | online                                                  | string           | Page View |
            | site app name           | App BBVA Mexico                                         | string           | Page View |
            | project name            | Glomo                                                   | string           | Page View |
            | level 1                 | fondos de inversion                                     | string           | Page View |
            | level 2                 | asociar cuenta                                          | string           | Page View |
            | page name               | app:privada:personas:fondos de inversion:asociar cuenta | string           | Page View |
            | device mobile           | si                                                      | string           | Page View |
            | user segment global     | 003001                                                  | string           | Page View |
            | user userState          | logado                                                  | string           | Page View |
            | profile ID              | profileID                                               | regexp named     | Page View |
            | user gender             | gender                                                  | regexp named     | Page View |
            | user age                | age                                                     | regexp named     | Page View |
            | internal campaign       |                                                         | empty array      | Page View |
            | optimization attributes |                                                         | empty array      | Page View |
            | application             |                                                         | empty str object | Page View |
            | products attributes     |                                                         | empty array      | Page View |

    @ANA_EVENT_OCFS010
    @analytics
    @MX
    @web
    @vbank @backend(test)
    @web-done
    Scenario: Fund Origination Oc Fund - Footprint - help modal commission
        Given a user with the following criteria
            | criteria       |
            | oc fund simple |
        And the user accesses to fund card from opportunities
        And the user enters the "AEM help" modal
        And the analytics interceptor service is initiated
        When the user consult the "fees" question from the FAQ list
        Then the analytics events contains the following variables
            | item                    | value                                               | type             | event     |
            | analytics               | analytics/glomo_base                                | json schema      | Page View |
            | version DL              | 20250414_5.0                                        | string           | Page View |
            | page instance ID        | de                                                  | string           | Page View |
            | sysEnv                  | app                                                 | string           | Page View |
            | page segment            | personas                                            | string           | Page View |
            | page intent             | informacion                                         | string           | Page View |
            | business unit           | BBVA Mexico                                         | string           | Page View |
            | page area               | privada                                             | string           | Page View |
            | language                | ES                                                  | string           | Page View |
            | channel                 | online                                              | string           | Page View |
            | site app name           | App BBVA Mexico                                     | string           | Page View |
            | project name            | Glomo                                               | string           | Page View |
            | level 1                 | fondos de inversion                                 | string           | Page View |
            | level 2                 | comisiones                                          | string           | Page View |
            | page name               | app:privada:personas:fondos de inversion:comisiones | string           | Page View |
            | device mobile           | si                                                  | string           | Page View |
            | user segment global     | 003001                                              | string           | Page View |
            | user userState          | logado                                              | string           | Page View |
            | profile ID              | profileID                                           | regexp named     | Page View |
            | user gender             | gender                                              | regexp named     | Page View |
            | user age                | age                                                 | regexp named     | Page View |
            | internal campaign       |                                                     | empty array      | Page View |
            | optimization attributes |                                                     | empty array      | Page View |
            | application             |                                                     | empty str object | Page View |
            | products attributes     |                                                     | empty array      | Page View |

    @ANA_EVENT_OCFS011
    @analytics
    @MX
    @web
    @vbank @backend(test)
    @web-done
    Scenario: Fund Origination Oc Fund - Footprint - help modal performance
        Given a user with the following criteria
            | criteria       |
            | oc fund simple |
        And the user accesses to fund card from opportunities
        And the user enters the "AEM help" modal
        And the analytics interceptor service is initiated
        When the user consult the "performance" question from the FAQ list
        Then the analytics events contains the following variables
            | item                    | value                                                | type             | event     |
            | analytics               | analytics/glomo_base                                 | json schema      | Page View |
            | version DL              | 20250414_5.0                                         | string           | Page View |
            | page instance ID        | de                                                   | string           | Page View |
            | sysEnv                  | app                                                  | string           | Page View |
            | page segment            | personas                                             | string           | Page View |
            | page intent             | informacion                                          | string           | Page View |
            | business unit           | BBVA Mexico                                          | string           | Page View |
            | page area               | privada                                              | string           | Page View |
            | language                | ES                                                   | string           | Page View |
            | channel                 | online                                               | string           | Page View |
            | site app name           | App BBVA Mexico                                      | string           | Page View |
            | project name            | Glomo                                                | string           | Page View |
            | level 1                 | fondos de inversion                                  | string           | Page View |
            | level 2                 | rendimiento                                          | string           | Page View |
            | page name               | app:privada:personas:fondos de inversion:rendimiento | string           | Page View |
            | device mobile           | si                                                   | string           | Page View |
            | user segment global     | 003001                                               | string           | Page View |
            | user userState          | logado                                               | string           | Page View |
            | profile ID              | profileID                                            | regexp named     | Page View |
            | user gender             | gender                                               | regexp named     | Page View |
            | user age                | age                                                  | regexp named     | Page View |
            | internal campaign       |                                                      | empty array      | Page View |
            | optimization attributes |                                                      | empty array      | Page View |
            | application             |                                                      | empty str object | Page View |
            | products attributes     |                                                      | empty array      | Page View |

    @ANA_EVENT_OCFS012
    @analytics
    @MX
    @web
    @vbank @backend(test)
    @web-done
    Scenario: Fund Origination Oc Fund - Footprint - help modal increment
        Given a user with the following criteria
            | criteria       |
            | oc fund simple |
        And the user accesses to fund card from opportunities
        And the user enters the "AEM help" modal
        And the analytics interceptor service is initiated
        When the user consult the "fund contribution" question from the FAQ list
        Then the analytics events contains the following variables
            | item                    | value                                               | type             | event     |
            | analytics               | analytics/glomo_base                                | json schema      | Page View |
            | version DL              | 20250414_5.0                                        | string           | Page View |
            | page instance ID        | de                                                  | string           | Page View |
            | sysEnv                  | app                                                 | string           | Page View |
            | page segment            | personas                                            | string           | Page View |
            | page intent             | informacion                                         | string           | Page View |
            | business unit           | BBVA Mexico                                         | string           | Page View |
            | page area               | privada                                             | string           | Page View |
            | language                | ES                                                  | string           | Page View |
            | channel                 | online                                              | string           | Page View |
            | site app name           | App BBVA Mexico                                     | string           | Page View |
            | project name            | Glomo                                               | string           | Page View |
            | level 1                 | fondos de inversion                                 | string           | Page View |
            | level 2                 | incremento                                          | string           | Page View |
            | page name               | app:privada:personas:fondos de inversion:incremento | string           | Page View |
            | device mobile           | si                                                  | string           | Page View |
            | user segment global     | 003001                                              | string           | Page View |
            | user userState          | logado                                              | string           | Page View |
            | profile ID              | profileID                                           | regexp named     | Page View |
            | user gender             | gender                                              | regexp named     | Page View |
            | user age                | age                                                 | regexp named     | Page View |
            | internal campaign       |                                                     | empty array      | Page View |
            | optimization attributes |                                                     | empty array      | Page View |
            | application             |                                                     | empty str object | Page View |
            | products attributes     |                                                     | empty array      | Page View |

    @ANA_EVENT_OCFS013
    @analytics
    @MX
    @web
    @vbank @backend(test)
    @web-done
    Scenario: Fund Origination Oc Fund - Footprint - help modal risk
        Given a user with the following criteria
            | criteria       |
            | oc fund simple |
        And the user accesses to fund card from opportunities
        And the user enters the "AEM help" modal
        And the analytics interceptor service is initiated
        When the user consult the "risk" question from the FAQ list
        Then the analytics events contains the following variables
            | item                    | value                                           | type             | event     |
            | analytics               | analytics/glomo_base                            | json schema      | Page View |
            | version DL              | 20250414_5.0                                    | string           | Page View |
            | page instance ID        | de                                              | string           | Page View |
            | sysEnv                  | app                                             | string           | Page View |
            | page segment            | personas                                        | string           | Page View |
            | page intent             | informacion                                     | string           | Page View |
            | business unit           | BBVA Mexico                                     | string           | Page View |
            | page area               | privada                                         | string           | Page View |
            | language                | ES                                              | string           | Page View |
            | channel                 | online                                          | string           | Page View |
            | site app name           | App BBVA Mexico                                 | string           | Page View |
            | project name            | Glomo                                           | string           | Page View |
            | level 1                 | fondos de inversion                             | string           | Page View |
            | level 2                 | riesgo                                          | string           | Page View |
            | page name               | app:privada:personas:fondos de inversion:riesgo | string           | Page View |
            | device mobile           | si                                              | string           | Page View |
            | user segment global     | 003001                                          | string           | Page View |
            | user userState          | logado                                          | string           | Page View |
            | profile ID              | profileID                                       | regexp named     | Page View |
            | user gender             | gender                                          | regexp named     | Page View |
            | user age                | age                                             | regexp named     | Page View |
            | internal campaign       |                                                 | empty array      | Page View |
            | optimization attributes |                                                 | empty array      | Page View |
            | application             |                                                 | empty str object | Page View |
            | products attributes     |                                                 | empty array      | Page View |

    @ANA_EVENT_OCFS014
    @analytics
    @MX
    @web
    @vbank @backend(test)
    @web-done
    Scenario: Fund Origination Oc Fund - Footprint - help modal disponibility
        Given a user with the following criteria
            | criteria       |
            | oc fund simple |
        And the user accesses to fund card from opportunities
        And the user enters the "AEM help" modal
        And the analytics interceptor service is initiated
        When the user consult the "availability" question from the FAQ list
        Then the analytics events contains the following variables
            | item                    | value                                                   | type             | event     |
            | analytics               | analytics/glomo_base                                    | json schema      | Page View |
            | version DL              | 20250414_5.0                                            | string           | Page View |
            | page instance ID        | de                                                      | string           | Page View |
            | sysEnv                  | app                                                     | string           | Page View |
            | page segment            | personas                                                | string           | Page View |
            | page intent             | informacion                                             | string           | Page View |
            | business unit           | BBVA Mexico                                             | string           | Page View |
            | page area               | privada                                                 | string           | Page View |
            | language                | ES                                                      | string           | Page View |
            | channel                 | online                                                  | string           | Page View |
            | site app name           | App BBVA Mexico                                         | string           | Page View |
            | project name            | Glomo                                                   | string           | Page View |
            | level 1                 | fondos de inversion                                     | string           | Page View |
            | level 2                 | disponibilidad                                          | string           | Page View |
            | page name               | app:privada:personas:fondos de inversion:disponibilidad | string           | Page View |
            | device mobile           | si                                                      | string           | Page View |
            | user segment global     | 003001                                                  | string           | Page View |
            | user userState          | logado                                                  | string           | Page View |
            | profile ID              | profileID                                               | regexp named     | Page View |
            | user gender             | gender                                                  | regexp named     | Page View |
            | user age                | age                                                     | regexp named     | Page View |
            | internal campaign       |                                                         | empty array      | Page View |
            | optimization attributes |                                                         | empty array      | Page View |
            | application             |                                                         | empty str object | Page View |
            | products attributes     |                                                         | empty array      | Page View |

    @ANA_EVENT_OCFS015
    @analytics
    @MX
    @web
    @vbank @backend(test)
    @web-done
    Scenario: Fund Origination Oc Fund - Footprint - help modal investment
        Given a user with the following criteria
            | criteria       |
            | oc fund simple |
        And the user accesses to fund card from opportunities
        And the user enters the "AEM help" modal
        And the analytics interceptor service is initiated
        When the user consult the "investment" question from the FAQ list
        Then the analytics events contains the following variables
            | item                    | value                                              | type             | event     |
            | analytics               | analytics/glomo_base                               | json schema      | Page View |
            | version DL              | 20250414_5.0                                       | string           | Page View |
            | page instance ID        | de                                                 | string           | Page View |
            | sysEnv                  | app                                                | string           | Page View |
            | page segment            | personas                                           | string           | Page View |
            | page intent             | informacion                                        | string           | Page View |
            | business unit           | BBVA Mexico                                        | string           | Page View |
            | page area               | privada                                            | string           | Page View |
            | language                | ES                                                 | string           | Page View |
            | channel                 | online                                             | string           | Page View |
            | site app name           | App BBVA Mexico                                    | string           | Page View |
            | project name            | Glomo                                              | string           | Page View |
            | level 1                 | fondos de inversion                                | string           | Page View |
            | level 2                 | inversion                                          | string           | Page View |
            | page name               | app:privada:personas:fondos de inversion:inversion | string           | Page View |
            | device mobile           | si                                                 | string           | Page View |
            | user segment global     | 003001                                             | string           | Page View |
            | user userState          | logado                                             | string           | Page View |
            | profile ID              | profileID                                          | regexp named     | Page View |
            | user gender             | gender                                             | regexp named     | Page View |
            | user age                | age                                                | regexp named     | Page View |
            | internal campaign       |                                                    | empty array      | Page View |
            | optimization attributes |                                                    | empty array      | Page View |
            | application             |                                                    | empty str object | Page View |
            | products attributes     |                                                    | empty array      | Page View |

    @ANA_EVENT_OCFS016
    @analytics
    @MX
    @web
    @vbank @backend(test)
    @web-done
    Scenario: Fund Origination Oc Fund - Footprint - help modal titles
        Given a user with the following criteria
            | criteria       |
            | oc fund simple |
        And the user accesses to fund card from opportunities
        And the user enters the "AEM help" modal
        And the analytics interceptor service is initiated
        When the user consult the "titles" question from the FAQ list
        Then the analytics events contains the following variables
            | item                    | value                                            | type             | event     |
            | analytics               | analytics/glomo_base                             | json schema      | Page View |
            | version DL              | 20250414_5.0                                     | string           | Page View |
            | page instance ID        | de                                               | string           | Page View |
            | sysEnv                  | app                                              | string           | Page View |
            | page segment            | personas                                         | string           | Page View |
            | page intent             | informacion                                      | string           | Page View |
            | business unit           | BBVA Mexico                                      | string           | Page View |
            | page area               | privada                                          | string           | Page View |
            | language                | ES                                               | string           | Page View |
            | channel                 | online                                           | string           | Page View |
            | site app name           | App BBVA Mexico                                  | string           | Page View |
            | project name            | Glomo                                            | string           | Page View |
            | level 1                 | fondos de inversion                              | string           | Page View |
            | level 2                 | titulos                                          | string           | Page View |
            | page name               | app:privada:personas:fondos de inversion:titulos | string           | Page View |
            | device mobile           | si                                               | string           | Page View |
            | user segment global     | 003001                                           | string           | Page View |
            | user userState          | logado                                           | string           | Page View |
            | profile ID              | profileID                                        | regexp named     | Page View |
            | user gender             | gender                                           | regexp named     | Page View |
            | user age                | age                                              | regexp named     | Page View |
            | internal campaign       |                                                  | empty array      | Page View |
            | optimization attributes |                                                  | empty array      | Page View |
            | application             |                                                  | empty str object | Page View |
            | products attributes     |                                                  | empty array      | Page View |

    @ANA_EVENT_OCFS017
    @analytics
    @MX
    @web
    @vbank @backend(test)
    @web-done
    Scenario: Fund Origination Oc Fund - Footprint - help modal investment fund
        Given a user with the following criteria
            | criteria       |
            | oc fund simple |
        And the user accesses to fund card from opportunities
        And the user enters the "AEM help" modal
        And the analytics interceptor service is initiated
        When the user consult the "investment fund" question from the FAQ list
        Then the analytics events contains the following variables
            | item                    | value                                          | type             | event     |
            | analytics               | analytics/glomo_base                           | json schema      | Page View |
            | version DL              | 20250414_5.0                                   | string           | Page View |
            | page instance ID        | de                                             | string           | Page View |
            | sysEnv                  | app                                            | string           | Page View |
            | page segment            | personas                                       | string           | Page View |
            | page intent             | informacion                                    | string           | Page View |
            | business unit           | BBVA Mexico                                    | string           | Page View |
            | page area               | privada                                        | string           | Page View |
            | language                | ES                                             | string           | Page View |
            | channel                 | online                                         | string           | Page View |
            | site app name           | App BBVA Mexico                                | string           | Page View |
            | project name            | Glomo                                          | string           | Page View |
            | level 1                 | fondos de inversion                            | string           | Page View |
            | level 2                 | fondo                                          | string           | Page View |
            | page name               | app:privada:personas:fondos de inversion:fondo | string           | Page View |
            | device mobile           | si                                             | string           | Page View |
            | user segment global     | 003001                                         | string           | Page View |
            | user userState          | logado                                         | string           | Page View |
            | profile ID              | profileID                                      | regexp named     | Page View |
            | user gender             | gender                                         | regexp named     | Page View |
            | user age                | age                                            | regexp named     | Page View |
            | internal campaign       |                                                | empty array      | Page View |
            | optimization attributes |                                                | empty array      | Page View |
            | application             |                                                | empty str object | Page View |
            | products attributes     |                                                | empty array      | Page View |

    @ANA_EVENT_OCFS018
    @analytics
    @MX
    @web
    @vbank @backend(test) @vbank-modified
    @web-done
    @manual @JIRA.GLOMOMX-249517
    Scenario: Fund Origination Oc Fund - Footprint - error operation not available
        Given a user with the following criteria
            | criteria       |
            | oc fund simple |
        And the user accesses to fund card from opportunities
        And the analytics interceptor service is initiated
        And the user enters an amount of "1000"
        When the user retries "4" times small help modal
        Then the analytics events contains the following variables
            | item                    | value                                                                  | type             | event     |
            | analytics               | analytics/glomo_base                                                   | json schema      | Page View |
            | version DL              | 20250414_5.0                                                           | string           | Page View |
            | page instance ID        | de                                                                     | string           | Page View |
            | sysEnv                  | app                                                                    | string           | Page View |
            | page segment            | personas                                                               | string           | Page View |
            | page intent             | informacion                                                            | string           | Page View |
            | business unit           | BBVA Mexico                                                            | string           | Page View |
            | page area               | privada                                                                | string           | Page View |
            | language                | ES                                                                     | string           | Page View |
            | channel                 | online                                                                 | string           | Page View |
            | site app name           | App BBVA Mexico                                                        | string           | Page View |
            | project name            | Glomo                                                                  | string           | Page View |
            | level 1                 | fondos de inversion                                                    | string           | Page View |
            | level 2                 | error operacion no disponible                                          | string           | Page View |
            | error page              | error operacion no disponible                                          | string           | Page View |
            | page name               | app:privada:personas:fondos de inversion:error operacion no disponible | string           | Page View |
            | device mobile           | si                                                                     | string           | Page View |
            | user segment global     | 003001                                                                 | string           | Page View |
            | user userState          | logado                                                                 | string           | Page View |
            | profile ID              | profileID                                                              | regexp named     | Page View |
            | user gender             | gender                                                                 | regexp named     | Page View |
            | user age                | age                                                                    | regexp named     | Page View |
            | internal campaign       |                                                                        | empty array      | Page View |
            | optimization attributes |                                                                        | empty array      | Page View |
            | application             |                                                                        | empty str object | Page View |
            | products attributes     |                                                                        | empty array      | Page View |

    @ANA_EVENT_OCFS019
    @analytics
    @MX
    @web
    @vbank @backend(test) @vbank-modified
    @web-done
    @manual @JIRA.GLOMOMX-249517
    Scenario: Fund Origination Oc Fund - Footprint - error operation not found
        Given a user with the following criteria
            | criteria       |
            | oc fund simple |
        And the user accesses to fund card from opportunities
        And the user goes to the "summary" step
        And the user confirms the investment operation
        And the analytics interceptor service is initiated
        When the user retries "4" times small help modal
        Then the analytics events contains the following variables
            | item                    | value                                                                 | type             | event     |
            | analytics               | analytics/glomo_base                                                  | json schema      | Page View |
            | version DL              | 20250414_5.0                                                          | string           | Page View |
            | page instance ID        | de                                                                    | string           | Page View |
            | sysEnv                  | app                                                                   | string           | Page View |
            | page segment            | personas                                                              | string           | Page View |
            | page intent             | transaccion                                                           | string           | Page View |
            | business unit           | BBVA Mexico                                                           | string           | Page View |
            | page area               | privada                                                               | string           | Page View |
            | language                | ES                                                                    | string           | Page View |
            | channel                 | online                                                                | string           | Page View |
            | site app name           | App BBVA Mexico                                                       | string           | Page View |
            | project name            | Glomo                                                                 | string           | Page View |
            | level 1                 | fondos de inversion                                                   | string           | Page View |
            | level 2                 | error operacion no realizada                                          | string           | Page View |
            | error page              | error operacion no realizada                                          | string           | Page View |
            | page name               | app:privada:personas:fondos de inversion:error operacion no realizada | string           | Page View |
            | device mobile           | si                                                                    | string           | Page View |
            | user segment global     | 003001                                                                | string           | Page View |
            | user userState          | logado                                                                | string           | Page View |
            | profile ID              | profileID                                                             | regexp named     | Page View |
            | user gender             | gender                                                                | regexp named     | Page View |
            | user age                | age                                                                   | regexp named     | Page View |
            | internal campaign       |                                                                       | empty array      | Page View |
            | optimization attributes |                                                                       | empty array      | Page View |
            | application             |                                                                       | empty str object | Page View |
            | products attributes     |                                                                       | empty array      | Page View |

    @ANA_EVENT_OCFS020
    @analytics
    @MX
    @web
    @vbank @backend(test) @vbank-modified
    @web-done
    Scenario: Fund Origination Oc Fund - Footprint - error information not available
        Given a user with the following criteria
            | criteria       |
            | oc fund simple |
        And the user accesses contract product section
        And the analytics interceptor service is initiated
        When the user accesses to fund card from opportunities
        Then the analytics events contains the following variables
            | item                    | value                                                                    | type             | event     |
            | analytics               | analytics/glomo_base                                                     | json schema      | Page View |
            | version DL              | 20250414_5.0                                                             | string           | Page View |
            | page instance ID        | de                                                                       | string           | Page View |
            | sysEnv                  | app                                                                      | string           | Page View |
            | page segment            | personas                                                                 | string           | Page View |
            | page intent             | informacion                                                              | string           | Page View |
            | business unit           | BBVA Mexico                                                              | string           | Page View |
            | page area               | privada                                                                  | string           | Page View |
            | language                | ES                                                                       | string           | Page View |
            | channel                 | online                                                                   | string           | Page View |
            | site app name           | App BBVA Mexico                                                          | string           | Page View |
            | project name            | Glomo                                                                    | string           | Page View |
            | level 1                 | fondos de inversion                                                      | string           | Page View |
            | level 2                 | error informacion no disponible                                          | string           | Page View |
            | error page              | error informacion no disponible                                          | string           | Page View |
            | page name               | app:privada:personas:fondos de inversion:error informacion no disponible | string           | Page View |
            | device mobile           | si                                                                       | string           | Page View |
            | user segment global     | 003001                                                                   | string           | Page View |
            | user userState          | logado                                                                   | string           | Page View |
            | profile ID              | profileID                                                                | regexp named     | Page View |
            | user gender             | gender                                                                   | regexp named     | Page View |
            | user age                | age                                                                      | regexp named     | Page View |
            | internal campaign       |                                                                          | empty array      | Page View |
            | optimization attributes |                                                                          | empty array      | Page View |
            | application             |                                                                          | empty str object | Page View |
            | products attributes     |                                                                          | empty array      | Page View |

    @ANA_EVENT_OCFS021
    @analytics
    @MX
    @web
    @vbank @backend(test)
    @web-done
    Scenario: Fund Origination Oc Fund - Footprint - select all
        Given a user with the following criteria
            | criteria                  |
            | oc fund multiple accounts |
        And the user accesses to fund card from opportunities
        And the analytics interceptor service is initiated
        When the user goes to the "summary" step
        Then the analytics events contains the following variables
            | item                    | value                                                          | type             | event            |
            | analytics               | analytics/glomo_base                                           | json schema      | Interaction Link |
            | version DL              | 20250414_5.0                                                   | string           | Interaction Link |
            | page instance ID        | de                                                             | string           | Interaction Link |
            | sysEnv                  | app                                                            | string           | Interaction Link |
            | page segment            | personas                                                       | string           | Interaction Link |
            | page intent             | transaccion                                                    | string           | Interaction Link |
            | business unit           | BBVA Mexico                                                    | string           | Interaction Link |
            | page area               | privada                                                        | string           | Interaction Link |
            | language                | ES                                                             | string           | Interaction Link |
            | channel                 | online                                                         | string           | Interaction Link |
            | site app name           | App BBVA Mexico                                                | string           | Interaction Link |
            | project name            | Glomo                                                          | string           | Interaction Link |
            | level 1                 | fondos inversion                                               | string           | Interaction Link |
            | level 2                 | 2 terminos y condiciones                                       | string           | Interaction Link |
            | page name               | app:privada:personas:fondos inversion:2 terminos y condiciones | string           | Interaction Link |
            | device mobile           | si                                                             | string           | Interaction Link |
            | user segment global     | 003001                                                         | string           | Interaction Link |
            | user userState          | logado                                                         | string           | Interaction Link |
            | profile ID              | profileID                                                      | regexp named     | Interaction Link |
            | user gender             | gender                                                         | regexp named     | Interaction Link |
            | user age                | age                                                            | regexp named     | Interaction Link |
            | interaction level       | seleccionar todos                                              | string           | Interaction Link |
            | internal campaign       |                                                                | empty array      | Interaction Link |
            | optimization attributes |                                                                | empty array      | Interaction Link |
            | application             |                                                                | empty str object | Interaction Link |
            | products attributes     |                                                                | empty array      | Interaction Link |

    @ANA_EVENT_OCFS022
    @analytics
    @MX
    @web
    @vbank @backend(test)
    @web-done
    Scenario: Fund Origination Oc Fund - Custom tag - contract
        Given a user with the following criteria
            | criteria       |
            | oc fund simple |
        And the user accesses to fund card from opportunities
        And the user goes to the "legals" step
        And the analytics interceptor service is initiated
        When the user selects the "contract" document
        Then the analytics events contains the following variables
            | item                    | value                                                          | type             | event         |
            | analytics               | analytics/glomo_base                                           | json schema      | Download Link |
            | version DL              | 20250414_5.0                                                   | string           | Download Link |
            | page instance ID        | de                                                             | string           | Download Link |
            | sysEnv                  | app                                                            | string           | Download Link |
            | page segment            | personas                                                       | string           | Download Link |
            | page intent             | transaccion                                                    | string           | Download Link |
            | business unit           | BBVA Mexico                                                    | string           | Download Link |
            | page area               | privada                                                        | string           | Download Link |
            | language                | ES                                                             | string           | Download Link |
            | channel                 | online                                                         | string           | Download Link |
            | site app name           | App BBVA Mexico                                                | string           | Download Link |
            | project name            | Glomo                                                          | string           | Download Link |
            | level 1                 | fondos inversion                                               | string           | Download Link |
            | level 2                 | 2 terminos y condiciones                                       | string           | Download Link |
            | page name               | app:privada:personas:fondos inversion:2 terminos y condiciones | string           | Download Link |
            | link url                | contrato                                                       | string           | Download Link |
            | device mobile           | si                                                             | string           | Download Link |
            | user segment global     | 003001                                                         | string           | Download Link |
            | user userState          | logado                                                         | string           | Download Link |
            | profile ID              | profileID                                                      | regexp named     | Download Link |
            | user gender             | gender                                                         | regexp named     | Download Link |
            | user age                | age                                                            | regexp named     | Download Link |
            | internal campaign       |                                                                | empty array      | Download Link |
            | optimization attributes |                                                                | empty array      | Download Link |
            | application             |                                                                | empty str object | Download Link |
            | products attributes     |                                                                | empty array      | Download Link |

    @ANA_EVENT_OCFS023
    @analytics
    @MX
    @web
    @vbank @backend(test)
    @web-done
    Scenario: Fund Origination Oc Fund - Custom tag - information prospect
        Given a user with the following criteria
            | criteria       |
            | oc fund simple |
        And the user accesses to fund card from opportunities
        And the user goes to the "legals" step
        And the analytics interceptor service is initiated
        When the user selects the "information prospect" document
        Then the analytics events contains the following variables
            | item                    | value                                                          | type             | event         |
            | analytics               | analytics/glomo_base                                           | json schema      | Download Link |
            | version DL              | 20250414_5.0                                                   | string           | Download Link |
            | page instance ID        | de                                                             | string           | Download Link |
            | sysEnv                  | app                                                            | string           | Download Link |
            | page segment            | personas                                                       | string           | Download Link |
            | page intent             | transaccion                                                    | string           | Download Link |
            | business unit           | BBVA Mexico                                                    | string           | Download Link |
            | page area               | privada                                                        | string           | Download Link |
            | language                | ES                                                             | string           | Download Link |
            | channel                 | online                                                         | string           | Download Link |
            | site app name           | App BBVA Mexico                                                | string           | Download Link |
            | project name            | Glomo                                                          | string           | Download Link |
            | level 1                 | fondos inversion                                               | string           | Download Link |
            | level 2                 | 2 terminos y condiciones                                       | string           | Download Link |
            | page name               | app:privada:personas:fondos inversion:2 terminos y condiciones | string           | Download Link |
            | link url                | prospecto de informacion                                       | string           | Download Link |
            | device mobile           | si                                                             | string           | Download Link |
            | user segment global     | 003001                                                         | string           | Download Link |
            | user userState          | logado                                                         | string           | Download Link |
            | profile ID              | profileID                                                      | regexp named     | Download Link |
            | user gender             | gender                                                         | regexp named     | Download Link |
            | user age                | age                                                            | regexp named     | Download Link |
            | internal campaign       |                                                                | empty array      | Download Link |
            | optimization attributes |                                                                | empty array      | Download Link |
            | application             |                                                                | empty str object | Download Link |
            | products attributes     |                                                                | empty array      | Download Link |

    @ANA_EVENT_OCFS024
    @analytics
    @MX
    @web
    @vbank @backend(test)
    @web-done
    Scenario: Fund Origination Oc Fund - Custom tag - informative document
        Given a user with the following criteria
            | criteria       |
            | oc fund simple |
        And the user accesses to fund card from opportunities
        And the user goes to the "legals" step
        And the analytics interceptor service is initiated
        When the user selects the "informative" document
        Then the analytics events contains the following variables
            | item                    | value                                                          | type             | event         |
            | analytics               | analytics/glomo_base                                           | json schema      | Download Link |
            | version DL              | 20250414_5.0                                                   | string           | Download Link |
            | page instance ID        | de                                                             | string           | Download Link |
            | sysEnv                  | app                                                            | string           | Download Link |
            | page segment            | personas                                                       | string           | Download Link |
            | page intent             | transaccion                                                    | string           | Download Link |
            | business unit           | BBVA Mexico                                                    | string           | Download Link |
            | page area               | privada                                                        | string           | Download Link |
            | language                | ES                                                             | string           | Download Link |
            | channel                 | online                                                         | string           | Download Link |
            | site app name           | App BBVA Mexico                                                | string           | Download Link |
            | project name            | Glomo                                                          | string           | Download Link |
            | level 1                 | fondos inversion                                               | string           | Download Link |
            | level 2                 | 2 terminos y condiciones                                       | string           | Download Link |
            | page name               | app:privada:personas:fondos inversion:2 terminos y condiciones | string           | Download Link |
            | link url                | documento informativo                                          | string           | Download Link |
            | device mobile           | si                                                             | string           | Download Link |
            | user segment global     | 003001                                                         | string           | Download Link |
            | user userState          | logado                                                         | string           | Download Link |
            | profile ID              | profileID                                                      | regexp named     | Download Link |
            | user gender             | gender                                                         | regexp named     | Download Link |
            | user age                | age                                                            | regexp named     | Download Link |
            | internal campaign       |                                                                | empty array      | Download Link |
            | optimization attributes |                                                                | empty array      | Download Link |
            | application             |                                                                | empty str object | Download Link |
            | products attributes     |                                                                | empty array      | Download Link |

    @ANA_EVENT_OCFS025
    @analytics
    @MX
    @web
    @vbank @backend(test)
    @web-done
    Scenario: Fund Origination Oc Fund - Custom tag - service guide
        Given a user with the following criteria
            | criteria       |
            | oc fund simple |
        And the user accesses to fund card from opportunities
        And the user goes to the "legals" step
        And the analytics interceptor service is initiated
        When the user selects the "service guide" document
        Then the analytics events contains the following variables
            | item                    | value                                                          | type             | event         |
            | analytics               | analytics/glomo_base                                           | json schema      | Download Link |
            | version DL              | 20250414_5.0                                                   | string           | Download Link |
            | page instance ID        | de                                                             | string           | Download Link |
            | sysEnv                  | app                                                            | string           | Download Link |
            | page segment            | personas                                                       | string           | Download Link |
            | page intent             | transaccion                                                    | string           | Download Link |
            | business unit           | BBVA Mexico                                                    | string           | Download Link |
            | page area               | privada                                                        | string           | Download Link |
            | language                | ES                                                             | string           | Download Link |
            | channel                 | online                                                         | string           | Download Link |
            | site app name           | App BBVA Mexico                                                | string           | Download Link |
            | project name            | Glomo                                                          | string           | Download Link |
            | level 1                 | fondos inversion                                               | string           | Download Link |
            | level 2                 | 2 terminos y condiciones                                       | string           | Download Link |
            | page name               | app:privada:personas:fondos inversion:2 terminos y condiciones | string           | Download Link |
            | link url                | guia de servicio                                               | string           | Download Link |
            | device mobile           | si                                                             | string           | Download Link |
            | user segment global     | 003001                                                         | string           | Download Link |
            | user userState          | logado                                                         | string           | Download Link |
            | profile ID              | profileID                                                      | regexp named     | Download Link |
            | user gender             | gender                                                         | regexp named     | Download Link |
            | user age                | age                                                            | regexp named     | Download Link |
            | internal campaign       |                                                                | empty array      | Download Link |
            | optimization attributes |                                                                | empty array      | Download Link |
            | application             |                                                                | empty str object | Download Link |
            | products attributes     |                                                                | empty array      | Download Link |

    @ANA_EVENT_OCFS026
    @analytics
    @MX
    @web
    @vbank @backend(test)
    @web-done
    Scenario: Fund Origination Oc Fund - Custom tag - share receipt
        Given a user with the following criteria
            | criteria       |
            | oc fund simple |
        And the user accesses to fund card from opportunities
        And the user successfully completed the investment
        And the analytics interceptor service is initiated
        When the user selects the "share receipt" menu operative
        Then the analytics events contains the following variables
            | item                    | value                                                | type             | event         |
            | analytics               | analytics/glomo_base                                 | json schema      | External Link |
            | version DL              | 20250414_5.0                                         | string           | External Link |
            | page instance ID        | de                                                   | string           | External Link |
            | sysEnv                  | app                                                  | string           | External Link |
            | page segment            | personas                                             | string           | External Link |
            | page intent             | transaccion                                          | string           | External Link |
            | business unit           | BBVA Mexico                                          | string           | External Link |
            | page area               | privada                                              | string           | External Link |
            | language                | ES                                                   | string           | External Link |
            | channel                 | online                                               | string           | External Link |
            | site app name           | App BBVA Mexico                                      | string           | External Link |
            | project name            | Glomo                                                | string           | External Link |
            | level 1                 | fondos inversion                                     | string           | External Link |
            | level 2                 | pagina exitosa                                       | string           | External Link |
            | page name               | app:privada:personas:fondos inversion:pagina exitosa | string           | External Link |
            | link url                | compartir comprobante                                | string           | External Link |
            | device mobile           | si                                                   | string           | External Link |
            | user segment global     | 003001                                               | string           | External Link |
            | user userState          | logado                                               | string           | External Link |
            | profile ID              | profileID                                            | regexp named     | External Link |
            | user gender             | gender                                               | regexp named     | External Link |
            | user age                | age                                                  | regexp named     | External Link |
            | internal campaign       |                                                      | empty array      | External Link |
            | optimization attributes |                                                      | empty array      | External Link |
            | application             |                                                      | empty str object | External Link |
            | products attributes     |                                                      | empty array      | External Link |

    @ANA_EVENT_OCFS027
    @analytics
    @MX
    @web
    @vbank @backend(test)
    @web-done
    Scenario: Fund Origination Oc Fund - Custom tag - view documents
        Given a user with the following criteria
            | criteria       |
            | oc fund simple |
        And the user accesses to fund card from opportunities
        And the user successfully completed the investment
        And the analytics interceptor service is initiated
        When the user enters the "view documents" modal
        Then the analytics events contains the following variables
            | item                    | value                                                | type             | event         |
            | analytics               | analytics/glomo_base                                 | json schema      | Internal Link |
            | version DL              | 20250414_5.0                                         | string           | Internal Link |
            | page instance ID        | de                                                   | string           | Internal Link |
            | sysEnv                  | app                                                  | string           | Internal Link |
            | page segment            | personas                                             | string           | Internal Link |
            | page intent             | transaccion                                          | string           | Internal Link |
            | business unit           | BBVA Mexico                                          | string           | Internal Link |
            | page area               | privada                                              | string           | Internal Link |
            | language                | ES                                                   | string           | Internal Link |
            | channel                 | online                                               | string           | Internal Link |
            | site app name           | App BBVA Mexico                                      | string           | Internal Link |
            | project name            | Glomo                                                | string           | Internal Link |
            | level 1                 | fondos inversion                                     | string           | Internal Link |
            | level 2                 | pagina exitosa                                       | string           | Internal Link |
            | page name               | app:privada:personas:fondos inversion:pagina exitosa | string           | Internal Link |
            | link name               | documentos                                           | string           | Internal Link |
            | device mobile           | si                                                   | string           | Internal Link |
            | user segment global     | 003001                                               | string           | Internal Link |
            | user userState          | logado                                               | string           | Internal Link |
            | profile ID              | profileID                                            | regexp named     | Internal Link |
            | user gender             | gender                                               | regexp named     | Internal Link |
            | user age                | age                                                  | regexp named     | Internal Link |
            | internal campaign       |                                                      | empty array      | Internal Link |
            | optimization attributes |                                                      | empty array      | Internal Link |
            | application             |                                                      | empty str object | Internal Link |
            | products attributes     |                                                      | empty array      | Internal Link |

    @ANA_EVENT_OCFS028
    @analytics
    @MX
    @web
    @vbank @backend(test)
    @web-done
    Scenario: Fund Origination Oc Fund - Custom tag - my investments
        Given a user with the following criteria
            | criteria       |
            | oc fund simple |
        And the user accesses to fund card from opportunities
        And the user successfully completed the investment
        And the analytics interceptor service is initiated
        When the user selects the "my investments" menu operative
        Then the analytics events contains the following variables
            | item                    | value                                                | type             | event         |
            | analytics               | analytics/glomo_base                                 | json schema      | Internal Link |
            | version DL              | 20250414_5.0                                         | string           | Internal Link |
            | page instance ID        | de                                                   | string           | Internal Link |
            | sysEnv                  | app                                                  | string           | Internal Link |
            | page segment            | personas                                             | string           | Internal Link |
            | page intent             | transaccion                                          | string           | Internal Link |
            | business unit           | BBVA Mexico                                          | string           | Internal Link |
            | page area               | privada                                              | string           | Internal Link |
            | language                | ES                                                   | string           | Internal Link |
            | channel                 | online                                               | string           | Internal Link |
            | site app name           | App BBVA Mexico                                      | string           | Internal Link |
            | project name            | Glomo                                                | string           | Internal Link |
            | level 1                 | fondos inversion                                     | string           | Internal Link |
            | level 2                 | pagina exitosa                                       | string           | Internal Link |
            | page name               | app:privada:personas:fondos inversion:pagina exitosa | string           | Internal Link |
            | link name               | inversiones                                          | string           | Internal Link |
            | device mobile           | si                                                   | string           | Internal Link |
            | user segment global     | 003001                                               | string           | Internal Link |
            | user userState          | logado                                               | string           | Internal Link |
            | profile ID              | profileID                                            | regexp named     | Internal Link |
            | user gender             | gender                                               | regexp named     | Internal Link |
            | user age                | age                                                  | regexp named     | Internal Link |
            | internal campaign       |                                                      | empty array      | Internal Link |
            | optimization attributes |                                                      | empty array      | Internal Link |
            | application             |                                                      | empty str object | Internal Link |
            | products attributes     |                                                      | empty array      | Internal Link |

@analyticsCashZonePaymentsMpos
Feature: Analytics - Cash Zone Mpos

    @ANA_MPOS001
    @analytics
    @web @android @ios
    @MX @backend(test) @vbank
    @web-done
    Scenario: The user accesses the dashboard
        Given a user with the following criteria
            | criteria           |
            | mpos normal user   |
        When the user accesses to dashboard MPOS
        Then the device contains the following variables
            | item                    | value                                                   | type             |
            | analytics               | analytics/glomo_base                                    | json schema      |
            | version DL              | 20250414_5.0                                            | string           |
            | page name               | app:privada:personas:zona de cobro                      | string           |
            | level 1                 | zona de cobro                                           | string           |
            | language                | ES                                                      | string           |
            | channel                 | online                                                  | string           |
            | page area               | privada                                                 | string           |
            | page instance ID        | de                                                      | string           |
            | page info version       | appVersion                                              | regexp named     |
            | project name            | Mercurio                                                | string           |
            | profile ID              | profileID                                               | regexp named     |
            | page segment            | personas                                                | string           |
            | sysEnv                  | app                                                     | string           |
            | device mobile           | si                                                      | string           |
            | user segment global     | 003001                                                  | string           |
            | user gender             | gender                                                  | regexp named     |
            | user age                | age                                                     | regexp named     |
            | user userState          | logado                                                  | string           |
            | site app name           | App BBVA Mexico                                         | string           |
            | page intent             | informacion                                             | string           |

    @ANA_EVENT_MPOS002
    @analytics
    @web @android @ios
    @MX @backend(test) @vbank
    @web-done
    Scenario: The user accesses to calculator - App On Click Start
        Given a user with the following criteria
            | criteria           |
            | mpos normal user   |
        And the user accesses to dashboard MPOS
        And the analytics interceptor service is initiated
        When the user displays the calculator
        Then the analytics events contains the following variables
            | item                     | value                                                   | type             | event              |
            | version DL               | 20250414_5.0                                            | string           | App On Click Start |
            | analytics                | analytics/glomo_base                                    | json schema      | App On Click Start |
            | page name                | app:privada:personas:zona de cobro                      | string           | App On Click Start |
            | level 1                  | zona de cobro                                           | string           | App On Click Start |
            | channel                  | online                                                  | string           | App On Click Start |
            | language                 | ES                                                      | string           | App On Click Start |
            | page instance ID         | de                                                      | string           | App On Click Start |
            | page area                | privada                                                 | string           | App On Click Start |
            | page info version        | appVersion                                              | regexp named     | App On Click Start |
            | project name             | Mercurio                                                | string           | App On Click Start |
            | profile ID               | profileID                                               | regexp named     | App On Click Start |
            | page segment             | personas                                                | string           | App On Click Start |
            | sysEnv                   | app                                                     | string           | App On Click Start |
            | device mobile            | si                                                      | string           | App On Click Start |
            | user segment global      | 003001                                                  | string           | App On Click Start |
            | user gender              | gender                                                  | regexp named     | App On Click Start |
            | user age                 | age                                                     | regexp named     | App On Click Start |
            | user userState           | logado                                                  | string           | App On Click Start |
            | site app name            | App BBVA Mexico                                         | string           | App On Click Start |
            | page intent              | informacion                                             | string           | App On Click Start |
            | application step         | cobrar zona de cobro                                    | string           | App On Click Start |
            | fulfillment model        | online/offline                                          | string           | App On Click Start |
            | product primary category | cuentas                                                 | string           | App On Click Start |
            | application type         | operativa                                               | string           | App On Click Start |
            | global application       | collect                                                 | string           | App On Click Start |
            | application name         | cobrar en zona de cobro                                 | string           | App On Click Start |

    @ANA_EVENT_MPOS003
    @analytics
    @web @android @ios
    @MX @backend(test) @vbank
    @web-done
    Scenario: The user interacts with the tpv pad - App Started
        Given a user with the following criteria
            | criteria           |
            | mpos normal user   |
        And the user accesses to calculator mpos
        And the analytics interceptor service is initiated
        When the user interacts with calculator for the first time
        Then the analytics events contains the following variables
            | item                     | value                                                   | type             | event       |
            | version DL               | 20250414_5.0                                            | string           | App Started |
            | analytics                | analytics/glomo_base                                    | json schema      | App Started |
            | page name                | app:privada:personas:zona de cobro:cobrar:1 calculadora | string           | App Started |
            | level 1                  | zona de cobro                                           | string           | App Started |
            | level 2                  | cobrar                                                  | string           | App Started |
            | level 3                  | 1 calculadora                                           | string           | App Started |
            | channel                  | online                                                  | string           | App Started |
            | language                 | ES                                                      | string           | App Started |
            | page instance ID         | de                                                      | string           | App Started |
            | page area                | privada                                                 | string           | App Started |
            | page info version        | appVersion                                              | regexp named     | App Started |
            | project name             | Mercurio                                                | string           | App Started |
            | profile ID               | profileID                                               | regexp named     | App Started |
            | page segment             | personas                                                | string           | App Started |
            | sysEnv                   | app                                                     | string           | App Started |
            | device mobile            | si                                                      | string           | App Started |
            | user segment global      | 003001                                                  | string           | App Started |
            | user gender              | gender                                                  | regexp named     | App Started |
            | user age                 | age                                                     | regexp named     | App Started |
            | user userState           | logado                                                  | string           | App Started |
            | site app name            | App BBVA Mexico                                         | string           | App Started |
            | page intent              | informacion                                             | string           | App Started |
            | application step         | 1                                                       | string           | App Started |
            | fulfillment model        | online/offline                                          | string           | App Started |
            | product primary category | cuentas                                                 | string           | App Started |
            | application type         | operativa                                               | string           | App Started |
            | global application       | collect                                                 | string           | App Started |
            | application name         | cobrar en zona de cobro                                 | string           | App Started |

    @ANA_EVENT_MPOS004
    @analytics
    @web @android @ios
    @MX @backend(test) @vbank
    @web-done
    Scenario: The user confirms the amount - App Step 2
        Given a user with the following criteria
            | criteria           |
            | mpos normal user   |
        And the user accesses to calculator mpos
        And the analytics interceptor service is initiated
        When the user submits the charge
        Then the analytics events contains the following variables
            | item                     | value                                                       | type             | event       |
            | version DL               | 20250414_5.0                                                | string           | App Step 2  |
            | analytics                | analytics/glomo_base                                        | json schema      | App Step 2  |
            | page name                | app:privada:personas:zona de cobro:cobrar:2 metodo de cobro | string           | App Step 2  |
            | level 1                  | zona de cobro                                               | string           | App Step 2  |
            | level 2                  | cobrar                                                      | string           | App Step 2  |
            | level 3                  | 2 metodo de cobro                                           | string           | App Step 2  |
            | channel                  | online                                                      | string           | App Step 2  |
            | language                 | ES                                                          | string           | App Step 2  |
            | page instance ID         | de                                                          | string           | App Step 2  |
            | page area                | privada                                                     | string           | App Step 2  |
            | page info version        | appVersion                                                  | regexp named     | App Step 2  |
            | project name             | Mercurio                                                    | string           | App Step 2  |
            | profile ID               | profileID                                                   | regexp named     | App Step 2  |
            | page segment             | personas                                                    | string           | App Step 2  |
            | sysEnv                   | app                                                         | string           | App Step 2  |
            | device mobile            | si                                                          | string           | App Step 2  |
            | user segment global      | 003001                                                      | string           | App Step 2  |
            | user gender              | gender                                                      | regexp named     | App Step 2  |
            | user age                 | age                                                         | regexp named     | App Step 2  |
            | user userState           | logado                                                      | string           | App Step 2  |
            | site app name            | App BBVA Mexico                                             | string           | App Step 2  |
            | page intent              | informacion                                                 | string           | App Step 2  |
            | application step         | 2 metodo de cobro                                           | string           | App Step 2  |
            | fulfillment model        | online/offline                                              | string           | App Step 2  |
            | product primary category | cuentas                                                     | string           | App Step 2  |
            | application type         | operativa                                                   | string           | App Step 2  |
            | application typology     | 1                                                           | string           | App Step 2  |
            | global application       | collect                                                     | string           | App Step 2  |
            | application name         | cobrar en zona de cobro                                     | string           | App Step 2  |
            | product amount           | 0.01                                                        | string           | App Step 2  |
            | product currency         | MXN                                                         | string           | App Step 2  |

    @ANA_EVENT_MPOS005
    @analytics
    @web @android @ios
    @MX @backend(test) @vbank
    @web-done
    Scenario: The user chooses a payment method - App Step 3
        Given a user with the following criteria
            | criteria           |
            | mpos normal user   |
        And the user accesses to calculator mpos
        And the analytics interceptor service is initiated
        And the user submits the charge
        When the user choose "card" payment method
        Then the analytics events contains the following variables
            | item                     | value                                                       | type             | event      |
            | version DL               | 20250414_5.0                                                | string           | App Step 3 |
            | analytics                | analytics/glomo_base                                        | json schema      | App Step 3 |
            | page name                | app:privada:personas:zona de cobro:cobrar:3 resumen         | string           | App Step 3 |
            | level 1                  | zona de cobro                                               | string           | App Step 3 |
            | level 2                  | cobrar                                                      | string           | App Step 3 |
            | level 3                  | 3 resumen                                                   | string           | App Step 3 |
            | channel                  | online                                                      | string           | App Step 3 |
            | language                 | ES                                                          | string           | App Step 3 |
            | page instance ID         | de                                                          | string           | App Step 3 |
            | page area                | privada                                                     | string           | App Step 3 |
            | page info version        | appVersion                                                  | regexp named     | App Step 3 |
            | project name             | Mercurio                                                    | string           | App Step 3 |
            | profile ID               | profileID                                                   | regexp named     | App Step 3 |
            | page segment             | personas                                                    | string           | App Step 3 |
            | sysEnv                   | app                                                         | string           | App Step 3 |
            | device mobile            | si                                                          | string           | App Step 3 |
            | user segment global      | 003001                                                      | string           | App Step 3 |
            | user gender              | gender                                                      | regexp named     | App Step 3 |
            | user age                 | age                                                         | regexp named     | App Step 3 |
            | user userState           | logado                                                      | string           | App Step 3 |
            | site app name            | App BBVA Mexico                                             | string           | App Step 3 |
            | page intent              | informacion                                                 | string           | App Step 3 |
            | application step         | 3 resumen                                                   | string           | App Step 3 |
            | fulfillment model        | online/offline                                              | string           | App Step 3 |
            | product primary category | cuentas                                                     | string           | App Step 3 |
            | application type         | operativa                                                   | string           | App Step 3 |
            | application typology     | 1                                                           | string           | App Step 3 |
            | global application       | collect                                                     | string           | App Step 3 |
            | application name         | cobrar en zona de cobro                                     | string           | App Step 3 |
            | application process      | lector de tarjetas                                          | string           | App Step 3 |
            | product amount           | 0.01                                                        | string           | App Step 3 |
            | product currency         | MXN                                                         | string           | App Step 3 |

    @ANA_EVENT_MPOS006
    @analytics
    @web @android @ios
    @MX @backend(test) @vbank
    @web-done
    Scenario: The user makes a charge - App Completed
        Given a user with the following criteria
            | criteria           |
            | mpos normal user   |
        And the user accesses to calculator mpos
        And the analytics interceptor service is initiated
        And the user submits the charge
        And the user choose "card" payment method
        When the user continues with the charge process
        Then the analytics events contains the following variables
            | item                     | value                                                       | type             | event         |
            | version DL               | 20250414_5.0                                                | string           | App Completed |
            | analytics                | analytics/glomo_base                                        | json schema      | App Completed |
            | page name                | app:privada:personas:zona de cobro:cobrar:pagina exitosa    | string           | App Completed |
            | level 1                  | zona de cobro                                               | string           | App Completed |
            | level 2                  | cobrar                                                      | string           | App Completed |
            | level 3                  | pagina exitosa                                              | string           | App Completed |
            | channel                  | online                                                      | string           | App Completed |
            | language                 | ES                                                          | string           | App Completed |
            | page instance ID         | de                                                          | string           | App Completed |
            | page area                | privada                                                     | string           | App Completed |
            | page info version        | appVersion                                                  | regexp named     | App Completed |
            | project name             | Mercurio                                                    | string           | App Completed |
            | profile ID               | profileID                                                   | regexp named     | App Completed |
            | page segment             | personas                                                    | string           | App Completed |
            | sysEnv                   | app                                                         | string           | App Completed |
            | device mobile            | si                                                          | string           | App Completed |
            | user segment global      | 003001                                                      | string           | App Completed |
            | user gender              | gender                                                      | regexp named     | App Completed |
            | user age                 | age                                                         | regexp named     | App Completed |
            | user userState           | logado                                                      | string           | App Completed |
            | site app name            | App BBVA Mexico                                             | string           | App Completed |
            | page intent              | informacion                                                 | string           | App Completed |
            | application step         | pagina exitosa                                              | string           | App Completed |
            | fulfillment model        | online/offline                                              | string           | App Completed |
            | product primary category | cuentas                                                     | string           | App Completed |
            | application type         | operativa                                                   | string           | App Completed |
            | application typology     | 1                                                           | string           | App Completed |
            | global application       | collect                                                     | string           | App Completed |
            | application name         | cobrar en zona de cobro                                     | string           | App Completed |
            | application process      | lector de tarjetas                                          | string           | App Completed |
            | product amount           | 0.01                                                        | string           | App Completed |
            | product currency         | MXN                                                         | string           | App Completed |

    @ANA_EVENT_MPOS007
    @analytics
    @web @android @ios
    @MX @backend(test) @vbank
    @web-done
    Scenario: The user accesses to calculator - App Page Visit
        Given a user with the following criteria
            | criteria           |
            | mpos normal user   |
        And the user accesses to dashboard MPOS
        And the analytics interceptor service is initiated
        When the user displays the calculator
        Then the analytics events contains the following variables
            | item                     | value                                                      | type             | event          |
            | version DL               | 20250414_5.0                                               | string           | App Page Visit |
            | analytics                | analytics/glomo_base                                       | json schema      | App Page Visit |
            | page name                | app:privada:personas:zona de cobro:cobrar:1 calculadora    | string           | App Page Visit |
            | level 1                  | zona de cobro                                              | string           | App Page Visit |
            | level 2                  | cobrar                                                     | string           | App Page Visit |
            | level 3                  | 1 calculadora                                              | string           | App Page Visit |
            | channel                  | online                                                     | string           | App Page Visit |
            | language                 | ES                                                         | string           | App Page Visit |
            | page instance ID         | de                                                         | string           | App Page Visit |
            | page area                | privada                                                    | string           | App Page Visit |
            | page info version        | appVersion                                                 | regexp named     | App Page Visit |
            | project name             | Mercurio                                                   | string           | App Page Visit |
            | profile ID               | profileID                                                  | regexp named     | App Page Visit |
            | page segment             | personas                                                   | string           | App Page Visit |
            | sysEnv                   | app                                                        | string           | App Page Visit |
            | device mobile            | si                                                         | string           | App Page Visit |
            | user segment global      | 003001                                                     | string           | App Page Visit |
            | user gender              | gender                                                     | regexp named     | App Page Visit |
            | user age                 | age                                                        | regexp named     | App Page Visit |
            | user userState           | logado                                                     | string           | App Page Visit |
            | site app name            | App BBVA Mexico                                            | string           | App Page Visit |
            | page intent              | informacion                                                | string           | App Page Visit |
            | application step         | 1 calculadora                                              | string           | App Page Visit |
            | fulfillment model        | online/offline                                             | string           | App Page Visit |
            | product primary category | cuentas                                                    | string           | App Page Visit |
            | application type         | operativa                                                  | string           | App Page Visit |
            | global application       | collect                                                    | string           | App Page Visit |
            | application name         | cobrar en zona de cobro                                    | string           | App Page Visit |

    @ANA_EVENT_MPOS008
    @analytics
    @web @android @ios
    @MX @backend(qa) @vbank
    @web-done
    @manual @JIRA.GLOMOMX-254718
    Scenario: The user makes a tap on phone charge - App Completed
        Given a user with the following criteria
            | criteria           |
            | mpos normal user   |
        And the user accesses to dashboard MPOS
        And the analytics interceptor service is initiated
        And the user displays the calculator
        And the user submits the charge
        And the user choose "top" payment method
        When the user continues with the charge process
        Then the analytics events contains the following variables
            | item                     | value                                                       | type             | event         |
            | version DL               | 20250414_5.0                                                | string           | App Completed |
            | analytics                | analytics/glomo_base                                        | json schema      | App Completed |
            | page name                | app:privada:personas:zona de cobro:cobrar:pagina exitosa    | string           | App Completed |
            | level 1                  | zona de cobro                                               | string           | App Completed |
            | level 2                  | cobrar                                                      | string           | App Completed |
            | level 3                  | pagina exitosa                                              | string           | App Completed |
            | channel                  | online                                                      | string           | App Completed |
            | language                 | ES                                                          | string           | App Completed |
            | page instance ID         | de                                                          | string           | App Completed |
            | page area                | privada                                                     | string           | App Completed |
            | page info version        | appVersion                                                  | regexp named     | App Completed |
            | project name             | Mercurio                                                    | string           | App Completed |
            | profile ID               | profileID                                                   | regexp named     | App Completed |
            | page segment             | personas                                                    | string           | App Completed |
            | sysEnv                   | app                                                         | string           | App Completed |
            | device mobile            | si                                                          | string           | App Completed |
            | user segment global      | 003001                                                      | string           | App Completed |
            | user gender              | gender                                                      | regexp named     | App Completed |
            | user age                 | age                                                         | regexp named     | App Completed |
            | user userState           | logado                                                      | string           | App Completed |
            | site app name            | App BBVA Mexico                                             | string           | App Completed |
            | page intent              | informacion                                                 | string           | App Completed |
            | application step         | pagina exitosa                                              | string           | App Completed |
            | fulfillment model        | online/offline                                              | string           | App Completed |
            | product primary category | cuentas                                                     | string           | App Completed |
            | application type         | operativa                                                   | string           | App Completed |
            | application typology     | 1                                                           | string           | App Completed |
            | global application       | collect                                                     | string           | App Completed |
            | application name         | cobrar en zona de cobro                                     | string           | App Completed |
            | application process      | cobro con celular                                           | string           | App Completed |
            | product amount           | 0.01                                                        | string           | App Completed |
            | product currency         | MXN                                                         | string           | App Completed |

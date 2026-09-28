@payrollAccountLinkAnalytics
Feature: Analytics - Payroll Account Link

    @ANA_PAL001
    @analytics
    @MX @vbank @backend(test)
    @web-done @web @ios @android
    Scenario: Access the payroll page - Analytics Page View
        Given a user with the following criteria
            | criteria                    |
            | payroll account link        |
            | curp validated              |
        When the user accesses to payroll "account" screen
        And the user accesses to payroll "home" screen
        Then the device contains the following variables:
            | item                     | value                                      | type             |
            | analytics                | analytics/glomo_base                       | json schema      |
            | version DL               | 20250414_5.0                               | string           |
            | page name                | app:privada:personas:recibir nomina        | string           |
            | level 1                  | recibir nomina                             | string           |
            | language                 | ES                                         | string           |
            | page area                | privada                                    | string           |
            | page intent              | informacion                                | string           |
            | channel                  | online                                     | string           |
            | page instance ID         | de                                         | string           |
            | page info version        | appVersion                                 | regexp named     |
            | page segment             | personas                                   | string           |
            | sysEnv                   | app                                        | string           |
            | business unit            | BBVA Mexico                                | string           |
            | site app name            | App BBVA Mexico                            | string           |
            | project name             | Glomo                                      | string           |
            | device mobile            | si                                         | string           |
            | user userState           | logado                                     | string           |
            | user segment global      | 003001                                     | string           |
            | user gender              | gender                                     | regexp named     |
            | user age                 | age                                        | regexp named     |

    @ANA_EVENT_PAL002
    @analytics
    @MX @vbank @backend(test)
    @web-done @web @ios @android
    Scenario: Access the payroll link page - analytics event App On Click Start
        Given a user with the following criteria
            | criteria                    |
            | payroll account link 		  |
            | curp validated              |
        And the user accesses to payroll "account" screen
        And the user accesses to payroll "home" screen
        And the analytics interceptor service is initiated
        When the user accesses to payroll "main" screen
        Then the analytics events contains the following variables:
            | item                     | value                                      | type             | event              |
            | analytics                | analytics/glomo_base                       | json schema      | App On Click Start |
            | version DL               | 20250414_5.0                               | string           | App On Click Start |
            | page name                | app:privada:personas:recibir nomina        | string           | App On Click Start |
            | level 1                  | recibir nomina                             | string           | App On Click Start |
            | language                 | ES                                         | string           | App On Click Start |
            | page area                | privada                                    | string           | App On Click Start |
            | page intent              | informacion                                | string           | App On Click Start |
            | channel                  | online                                     | string           | App On Click Start |
            | page instance ID         | de                                         | string           | App On Click Start |
            | page info version        | appVersion                                 | regexp named     | App On Click Start |
            | page segment             | personas                                   | string           | App On Click Start |
            | sysEnv                   | app                                        | string           | App On Click Start |
            | business unit            | BBVA Mexico                                | string           | App On Click Start |
            | site app name            | App BBVA Mexico                            | string           | App On Click Start |
            | project name             | Glomo                                      | string           | App On Click Start |
            | device mobile            | si                                         | string           | App On Click Start |
            | user userState           | logado                                     | string           | App On Click Start |
            | user segment global      | 003001                                     | string           | App On Click Start |
            | user age                 | age                                        | regexp named     | App On Click Start |
            | global application       | payroll account linking                    | string           | App On Click Start |
            | application name         | vinculacion nomina                         | string           | App On Click Start |
            | application type         | operativa                                  | string           | App On Click Start |
            | application step         | desde recibir nomina                       | string           | App On Click Start |
            | fulfillment model        | online                                     | string           | App On Click Start |
			| user gender              | gender                                     | regexp named     | App On Click Start |
            | product primary category | cuentas                                    | string           | App On Click Start |

    @ANA_EVENT_PAL003
    @analytics
    @MX @vbank @backend(test)
    @web-done @web @ios @android
    Scenario: Access the onboarding payroll link - analytics event App Page Visit
        Given a user with the following criteria
            | criteria                    |
            | payroll account link 	      |
            | curp validated              |
        And the user accesses to payroll "account" screen
        And the analytics interceptor service is initiated
        When the user accesses to payroll "main" screen
        Then the analytics events contains the following variables:
            | item                     | value                                                      | type             | event          |
            | analytics                | analytics/glomo_base                                       | json schema      | App Page Visit |
            | version DL               | 20250414_5.0                                               | string           | App Page Visit |
            | page name                | app:privada:personas:vinculacion nomina:1 beneficios       | string           | App Page Visit |
            | level 1                  | vinculacion nomina                                         | string           | App Page Visit |
            | level 2                  | 1 beneficios                                               | string           | App Page Visit |
            | language                 | ES                                                         | string           | App Page Visit |
            | page area                | privada                                                    | string           | App Page Visit |
            | page intent              | transaccion                                                | string           | App Page Visit |
            | channel                  | online                                                     | string           | App Page Visit |
            | page instance ID         | de                                                         | string           | App Page Visit |
            | page info version        | appVersion                                                 | regexp named     | App Page Visit |
            | page segment             | personas                                                   | string           | App Page Visit |
            | sysEnv                   | app                                                        | string           | App Page Visit |
            | business unit            | BBVA Mexico                                                | string           | App Page Visit |
            | site app name            | App BBVA Mexico                                            | string           | App Page Visit |
            | project name             | Glomo                                                      | string           | App Page Visit |
            | device mobile            | si                                                         | string           | App Page Visit |
            | user userState           | logado                                                     | string           | App Page Visit |
            | user segment global      | 003001                                                     | string           | App Page Visit |
            | user age                 | age                                                        | regexp named     | App Page Visit |
			| user gender              | gender                                    				 	| regexp named     | App Page Visit |
            | global application       | payroll account linking                                    | string           | App Page Visit |
            | application name         | vinculacion nomina                                         | string           | App Page Visit |
            | application type         | operativa                                                  | string           | App Page Visit |
            | application step         | 1 beneficios                                               | string           | App Page Visit |
            | fulfillment model        | online                                                     | string           | App Page Visit |
            | qualified visits         | true                                                       | string           | App Page Visit |
            | product primary category | cuentas                                                    | string           | App Page Visit |

    @ANA_EVENT_PAL004
    @analytics
    @MX @vbank @backend(test)
    @web-done @web @ios @android
    Scenario: Accepts the onboarding payroll link - analytics event App Started
        Given a user with the following criteria
            | criteria                    |
            | payroll account link		  |
            | curp validated              |
        And the user accesses to payroll "account" screen
        And the analytics interceptor service is initiated
        When the user accesses to payroll "benefits" screen
        Then the analytics events contains the following variables:
            | item                     | value                                                      | type             | event       |
            | analytics                | analytics/glomo_base                                       | json schema      | App Started |
            | version DL               | 20250414_5.0                                               | string           | App Started |
            | page name                | app:privada:personas:vinculacion nomina:1 beneficios       | string           | App Started |
            | level 1                  | vinculacion nomina                                         | string           | App Started |
            | level 2                  | 1 beneficios                                               | string           | App Started |
            | language                 | ES                                                         | string           | App Started |
            | page area                | privada                                                    | string           | App Started |
            | page intent              | transaccion                                                | string           | App Started |
            | channel                  | online                                                     | string           | App Started |
            | page instance ID         | de                                                         | string           | App Started |
            | page info version        | appVersion                                                 | regexp named     | App Started |
            | page segment             | personas                                                   | string           | App Started |
            | sysEnv                   | app                                                        | string           | App Started |
            | business unit            | BBVA Mexico                                                | string           | App Started |
            | site app name            | App BBVA Mexico                                            | string           | App Started |
            | project name             | Glomo                                                      | string           | App Started |
            | device mobile            | si                                                         | string           | App Started |
            | user userState           | logado                                                     | string           | App Started |
            | user segment global      | 003001                                                     | string           | App Started |
            | user age                 | age                                                        | regexp named     | App Started |
			| user gender              | gender                                    				 	| regexp named     | App Started |
            | global application       | payroll account linking                                    | string           | App Started |
            | application name         | vinculacion nomina                                         | string           | App Started |
            | application type         | operativa                                                  | string           | App Started |
            | application step         | entendido                                                  | string           | App Started |
            | fulfillment model        | online                                                     | string           | App Started |
            | product primary category | cuentas                                                    | string           | App Started |

    @ANA_PAL005
    @analytics
    @MX @vbank @backend(test)
    @web-done @web @ios @android
    Scenario: The user access to payroll link benefits - Analytics App Step 2
        Given a user with the following criteria
            | criteria                    |
            | payroll account link 	 	  |
            | curp validated              |
        And the user accesses to payroll "account" screen
        When the user accesses to payroll "benefits" screen
        Then the device contains the following variables:
            | item                     | value                                                      | type             |
            | analytics                | analytics/glomo_base                                       | json schema      |
            | version DL               | 20250414_5.0                                               | string           |
            | page name                | app:privada:personas:vinculacion nomina:2 datos empresa    | string           |
            | level 1                  | vinculacion nomina                                         | string           |
            | level 2                  | 2 datos empresa                                            | string           |
            | language                 | ES                                                         | string           |
            | page area                | privada                                                    | string           |
            | page intent              | transaccion                                                | string           |
            | channel                  | online                                                     | string           |
            | page instance ID         | de                                                         | string           |
            | page info version        | appVersion                                                 | regexp named     |
            | page segment             | personas                                                   | string           |
            | sysEnv                   | app                                                        | string           |
            | business unit            | BBVA Mexico                                                | string           |
            | site app name            | App BBVA Mexico                                            | string           |
            | project name             | Glomo                                                      | string           |
            | device mobile            | si                                                         | string           |
            | user userState           | logado                                                     | string           |
            | user segment global      | 003001                                                     | string           |
            | user age                 | age                                                        | regexp named     |
			| user gender              | gender                                    				 	| regexp named     |
            | global application       | payroll account linking                                    | string           |
            | application name         | vinculacion nomina                                         | string           |
            | application type         | operativa                                                  | string           |
            | application step         | 2 datos empresa                                            | string           |
            | fulfillment model        | online                                                     | string           |
            | product primary category | cuentas                                                    | string           |
            | product name             | cuenta de ahorro                                           | string           |

    @ANA_PAL006
    @analytics
    @MX @vbank @backend(test)
    @web-done @web @ios @android
    Scenario: The user find info company - Analytics App Step 3
        Given a user with the following criteria
            | criteria                    |
            | payroll account link		  |
            | curp validated              |
        And the user accesses to payroll "account" screen
        And the user accesses to payroll "benefits" screen
        When the user introduces "4203842320" as a company code
        Then the device contains the following variables:
            | item                     | value                                                       | type             |
            | analytics                | analytics/glomo_base                                        | json schema      |
            | version DL               | 20250414_5.0                                                | string           |
            | page name                | app:privada:personas:vinculacion nomina:3 datos encontrados | string           |
            | level 1                  | vinculacion nomina                                          | string           |
            | level 2                  | 3 datos encontrados                                         | string           |
            | language                 | ES                                                          | string           |
            | page area                | privada                                                     | string           |
            | page intent              | transaccion                                                 | string           |
            | channel                  | online                                                      | string           |
            | page instance ID         | de                                                          | string           |
            | page info version        | appVersion                                                  | regexp named     |
            | page segment             | personas                                                    | string           |
            | sysEnv                   | app                                                         | string           |
            | business unit            | BBVA Mexico                                                 | string           |
            | site app name            | App BBVA Mexico                                             | string           |
            | project name             | Glomo                                                       | string           |
            | device mobile            | si                                                          | string           |
            | user userState           | logado                                                      | string           |
            | user segment global      | 003001                                                      | string           |
            | user age                 | age                                                         | regexp named     |
			| user gender              | gender                                    				 	 | regexp named     |
            | global application       | payroll account linking                                     | string           |
            | application name         | vinculacion nomina                                          | string           |
            | application type         | operativa                                                   | string           |
            | application step         | 3 datos encontrados                                         | string           |
            | fulfillment model        | online                                                      | string           |
            | product primary category | cuentas                                                     | string           |
            | product name             | cuenta de ahorro                                            | string           |

    @ANA_PAL007
    @analytics
    @MX @vbank @backend(test)
    @web-done @web @ios @android
    Scenario: The user confirms data company - Analytics App Step 4
        Given a user with the following criteria
            | criteria                    |
            | payroll account link		  |
            | curp validated              |
        And the user accesses to payroll "account" screen
        And the user accesses to payroll "benefits" screen
        When the user wants to check "terms and conditions" info page
        Then the device contains the following variables:
            | item                     | value                                                            | type             |
            | analytics                | analytics/glomo_base                                             | json schema      |
            | version DL               | 20250414_5.0                                                     | string           |
            | page name                | app:privada:personas:vinculacion nomina:4 terminos y condiciones | string           |
            | level 1                  | vinculacion nomina                                               | string           |
            | level 2                  | 4 terminos y condiciones                                         | string           |
            | language                 | ES                                                               | string           |
            | page area                | privada                                                          | string           |
            | page intent              | transaccion                                                      | string           |
            | channel                  | online                                                           | string           |
            | page instance ID         | de                                                               | string           |
            | page info version        | appVersion                                                       | regexp named     |
            | page segment             | personas                                                         | string           |
            | sysEnv                   | app                                                              | string           |
            | business unit            | BBVA Mexico                                                      | string           |
            | site app name            | App BBVA Mexico                                                  | string           |
            | project name             | Glomo                                                            | string           |
            | device mobile            | si                                                               | string           |
            | user userState           | logado                                                           | string           |
            | user segment global      | 003001                                                           | string           |
            | user age                 | age                                                              | regexp named     |
			| user gender              | gender                                    				 		  | regexp named     |
            | global application       | payroll account linking                                          | string           |
            | application name         | vinculacion nomina                                               | string           |
            | application type         | operativa                                                        | string           |
            | application step         | 4 terminos y condiciones                                         | string           |
            | fulfillment model        | online                                                           | string           |
            | product primary category | cuentas                                                          | string           |
            | product name             | cuenta de ahorro                                                 | string           |

    @ANA_PAL008
    @analytics
    @MX @vbank @backend(test)
    @web-done @web @ios @android
    Scenario: The user confirms terms and conditions - Analytics App Step 5
        Given a user with the following criteria
            | criteria                    |
            | payroll account link		  |
            | curp validated              |
        And the user accesses to payroll "account" screen
        And the user accesses to payroll "benefits" screen
        When the user accepts privacy notice and terms
        Then the device contains the following variables:
            | item                     | value                                                            | type             |
            | analytics                | analytics/glomo_base                                             | json schema      |
            | version DL               | 20250414_5.0                                                     | string           |
            | page name                | app:privada:personas:vinculacion nomina:5 confirmacion           | string           |
            | level 1                  | vinculacion nomina                                               | string           |
            | level 2                  | 5 confirmacion                                                   | string           |
            | language                 | ES                                                               | string           |
            | page area                | privada                                                          | string           |
            | page intent              | transaccion                                                      | string           |
            | channel                  | online                                                           | string           |
            | page instance ID         | de                                                               | string           |
            | page info version        | appVersion                                                       | regexp named     |
            | page segment             | personas                                                         | string           |
            | sysEnv                   | app                                                              | string           |
            | business unit            | BBVA Mexico                                                      | string           |
            | site app name            | App BBVA Mexico                                                  | string           |
            | project name             | Glomo                                                            | string           |
            | device mobile            | si                                                               | string           |
            | user userState           | logado                                                           | string           |
            | user segment global      | 003001                                                           | string           |
            | user age                 | age                                                              | regexp named     |
			| user gender              | gender                                    				 		  | regexp named     |
            | global application       | payroll account linking                                          | string           |
            | application name         | vinculacion nomina                                               | string           |
            | application type         | operativa                                                        | string           |
            | application step         | 5 confirmacion                                                   | string           |
            | fulfillment model        | online                                                           | string           |
            | product primary category | cuentas                                                          | string           |
            | product name             | cuenta de ahorro                                                 | string           |

    @ANA_EVENT_PAL009
    @analytics
    @MX @vbank @backend(test)
    @web-done @web @ios @android
    Scenario: Happy path Payroll link with company code - analytics event App Completed
        Given a user with the following criteria
            | criteria                    |
            | payroll account link		  |
            | curp validated              |
        And the user accesses to payroll "account" screen
        And the analytics interceptor service is initiated
        When the user accesses to payroll "success" screen
        Then the analytics events contains the following variables:
            | item                            | value                                                      | type             | event         |
            | analytics                       | analytics/glomo_base                                       | json schema      | App Completed |
            | version DL                      | 20250414_5.0                                               | string           | App Completed |
            | page name                       | app:privada:personas:vinculacion nomina:pagina exitosa     | string           | App Completed |
            | level 1                         | vinculacion nomina                                         | string           | App Completed |
            | level 2                         | pagina exitosa                                             | string           | App Completed |
            | language                        | ES                                                         | string           | App Completed |
            | page area                       | privada                                                    | string           | App Completed |
            | page intent                     | transaccion                                                | string           | App Completed |
            | channel                         | online                                                     | string           | App Completed |
            | page instance ID                | de                                                         | string           | App Completed |
            | page info version               | appVersion                                                 | regexp named     | App Completed |
            | page segment                    | personas                                                   | string           | App Completed |
            | sysEnv                          | app                                                        | string           | App Completed |
            | business unit                   | BBVA Mexico                                                | string           | App Completed |
            | site app name                   | App BBVA Mexico                                            | string           | App Completed |
            | project name                    | Glomo                                                      | string           | App Completed |
            | device mobile                   | si                                                         | string           | App Completed |
            | user userState                  | logado                                                     | string           | App Completed |
            | user segment global             | 003001                                                     | string           | App Completed |
            | user age                        | age                                                        | regexp named     | App Completed |
			| user gender              		  | gender                                    				   | regexp named     | App Completed |
            | global application              | payroll account linking                                    | string           | App Completed |
            | application name                | vinculacion nomina                                         | string           | App Completed |
            | application type                | operativa                                                  | string           | App Completed |
            | application step                | pagina exitosa                                             | string           | App Completed |
            | application state               | finalizado                                                 | string           | App Completed |
            | fulfillment model               | online                                                     | string           | App Completed |
            | product primary category        | cuentas                                                    | string           | App Completed |
            | product name                    | cuenta de ahorro                                           | string           | App Completed |

    @ANA_PAL010
    @analytics
    @MX @vbank @backend(test)
    @web-done @web @ios @android
    Scenario: Introduces company code using QR code - Analytics Page View
        Given a user with the following criteria
            | criteria                    |
            | payroll account link		  |
            | curp validated              |
        And the user accesses to payroll "account" screen
        And the user accesses to payroll "benefits" screen
        When the user decides use qr scan
        Then the device contains the following variables:
            | item                     | value                                                     | type             |
            | analytics                | analytics/glomo_base                                      | json schema      |
            | version DL               | 20250414_5.0                                              | string           |
            | page name                | app:privada:personas:vinculacion nomina:escanea qr        | string           |
            | level 1                  | vinculacion nomina                                        | string           |
            | level 2                  | escanea qr                                                | string           |
            | language                 | ES                                                        | string           |
            | page area                | privada                                                   | string           |
            | page intent              | transaccion                                               | string           |
            | channel                  | online                                                    | string           |
            | page instance ID         | de                                                        | string           |
            | page info version        | appVersion                                                | regexp named     |
            | page segment             | personas                                                  | string           |
            | sysEnv                   | app                                                       | string           |
            | business unit            | BBVA Mexico                                               | string           |
            | site app name            | App BBVA Mexico                                           | string           |
            | project name             | Glomo                                                     | string           |
            | device mobile            | si                                                        | string           |
            | user userState           | logado                                                    | string           |
            | user segment global      | 003001                                                    | string           |
            | user age                 | age                                                       | regexp named     |
			| user gender              | gender                                    				   | regexp named     |

    @ANA_PAL011
    @analytics
    @MX @vbank @backend(test)
    @web-done @web @ios @android
    Scenario: Introduces wrong company code - Analytics Error Page View
        Given a user with the following criteria
            | criteria                    |
            | payroll account link  	  |
            | curp validated              |
        And the user accesses to payroll "account" screen
        And the user accesses to payroll "benefits" screen
        When the user tries to send a wrong company code
        Then the device contains the following variables:
            | item                     | value                                                     | type             |
            | analytics                | analytics/glomo_base                                      | json schema      |
            | version DL               | 20250414_5.0                                              | string           |
            | page name                | app:privada:personas:vinculacion nomina:codigo invalido   | string           |
            | level 1                  | vinculacion nomina                                        | string           |
            | level 2                  | codigo invalido                                           | string           |
            | error page               | codigo invalido                                           | string           |
            | language                 | ES                                                        | string           |
            | page area                | privada                                                   | string           |
            | page intent              | transaccion                                               | string           |
            | channel                  | online                                                    | string           |
            | page instance ID         | de                                                        | string           |
            | page info version        | appVersion                                                | regexp named     |
            | page segment             | personas                                                  | string           |
            | sysEnv                   | app                                                       | string           |
            | business unit            | BBVA Mexico                                               | string           |
            | site app name            | App BBVA Mexico                                           | string           |
            | project name             | Glomo                                                     | string           |
            | device mobile            | si                                                        | string           |
            | user userState           | logado                                                    | string           |
            | user segment global      | 003001                                                    | string           |
            | user age                 | age                                                       | regexp named     |
			| user gender              | gender                                    				   | regexp named     |

    @ANA_PAL012
    @analytics
    @MX @vbank @backend(test)
    @web-done @web @ios @android
    Scenario: The user sees the error modal when service not available - Analytics Error Page View
        Given a user with the following criteria
            | criteria                    |
            | payroll account link active |
            | curp validated              |
        And the user accesses to payroll "account" screen
        And the user accesses to payroll "benefits" screen
        When the user tries to send a wrong company code
        Then the device contains the following variables:
            | item                     | value                                                            | type             |
            | analytics                | analytics/glomo_base                                             | json schema      |
            | version DL               | 20250414_5.0                                                     | string           |
            | page name                | app:privada:personas:vinculacion nomina:operacion no realizada   | string           |
            | level 1                  | vinculacion nomina                                               | string           |
            | level 2                  | operacion no realizada                                           | string           |
            | error page               | operacion no realizada                                           | string           |
            | language                 | ES                                                               | string           |
            | page area                | privada                                                          | string           |
            | page intent              | transaccion                                                      | string           |
            | channel                  | online                                                           | string           |
            | page instance ID         | de                                                               | string           |
            | page info version        | appVersion                                                       | regexp named     |
            | page segment             | personas                                                         | string           |
            | sysEnv                   | app                                                              | string           |
            | business unit            | BBVA Mexico                                                      | string           |
            | site app name            | App BBVA Mexico                                                  | string           |
            | project name             | Glomo                                                            | string           |
            | device mobile            | si                                                               | string           |
            | user userState           | logado                                                           | string           |
            | user segment global      | 003001                                                           | string           |
            | user age                 | age                                                              | regexp named     |
			| user gender              | gender                                    				   		  | regexp named     |

    @ANA_PAL013
    @analytics
    @MX @vbank @backend(test)
    @web-done @web @ios @android
    Scenario: The user sees the modal of existing request  - Analytics Error Page View
        Given a user with the following criteria
            | criteria                    |
            | payroll account link		  |
            | curp validated              |
        And the user accesses to payroll "account" screen
        And the user accesses to payroll "benefits" screen
        When the user accepts request payroll link
        Then the device contains the following variables:
            | item                     | value                                                            | type             |
            | analytics                | analytics/glomo_base                                             | json schema      |
            | version DL               | 20250414_5.0                                                     | string           |
            | page name                | app:privada:personas:vinculacion nomina:solicitud existente      | string           |
            | level 1                  | vinculacion nomina                                               | string           |
            | level 2                  | solicitud existente                                              | string           |
            | error page               | solicitud existente                                              | string           |
            | language                 | ES                                                               | string           |
            | page area                | privada                                                          | string           |
            | page intent              | transaccion                                                      | string           |
            | channel                  | online                                                           | string           |
            | page instance ID         | de                                                               | string           |
            | page info version        | appVersion                                                       | regexp named     |
            | page segment             | personas                                                         | string           |
            | sysEnv                   | app                                                              | string           |
            | business unit            | BBVA Mexico                                                      | string           |
            | site app name            | App BBVA Mexico                                                  | string           |
            | project name             | Glomo                                                            | string           |
            | device mobile            | si                                                               | string           |
            | user userState           | logado                                                           | string           |
            | user segment global      | 003001                                                           | string           |
            | user age                 | age                                                              | regexp named     |
			| user gender              | gender                                    				   		  | regexp named     |

    @ANA_PAL014
    @analytics
    @MX @vbank @backend(test)
    @web-done @web @ios @android
    Scenario: User with curp unvalidated sees a warning modal  - Analytics Page View
        Given a user with the following criteria
            | criteria                    |
            | payroll account link active |
            | curp unvalidated            |
        When the user tries to access to payroll account link main screen
        Then the device contains the following variables:
            | item                     | value                                                            | type             |
            | analytics                | analytics/glomo_base                                             | json schema      |
            | version DL               | 20250414_5.0                                                     | string           |
            | page name                | app:privada:personas:recibir nomina:validacion de curp           | string           |
            | level 1                  | recibir nomina                                                   | string           |
            | level 2                  | validacion de curp                                               | string           |
            | language                 | ES                                                               | string           |
            | page area                | privada                                                          | string           |
            | page intent              | informacion                                                      | string           |
            | channel                  | online                                                           | string           |
            | page instance ID         | de                                                               | string           |
            | page info version        | appVersion                                                       | regexp named     |
            | page segment             | personas                                                         | string           |
            | sysEnv                   | app                                                              | string           |
            | business unit            | BBVA Mexico                                                      | string           |
            | site app name            | App BBVA Mexico                                                  | string           |
            | project name             | Glomo                                                            | string           |
            | device mobile            | si                                                               | string           |
            | user userState           | logado                                                           | string           |
            | user segment global      | 003001                                                           | string           |
            | user age                 | age                                                              | regexp named     |
			| user gender              | gender                                    				   		  | regexp named     |

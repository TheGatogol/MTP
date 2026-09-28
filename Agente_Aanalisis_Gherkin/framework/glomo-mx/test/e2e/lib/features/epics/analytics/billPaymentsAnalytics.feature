@billPayments
Feature: Analytics - Bill Payments

    @ANA_EVENT_BP001
    @analytics
    @MX
    @vbank @backend(test)
    @ios @android @web
    @glomo
    @web-done
    Scenario: Bill Payments - analytics event App Page Visit
        Given a user with the following criteria
            | criteria                 |
            | bill payments            |
        And the user selects an account
        And the analytics interceptor service is initiated
        When the user goes to bill payments page
        Then the analytics events contains the following variables
            | item                     | value                                                  | type         | event          |
            | analytics	               | analytics/glomo_base                                   | json schema  | App Page Visit |
            | version dl               | 20250414_5.0                                           | string       | App Page Visit |
            | page name                | app:privada:personas:cuentas:pagar servicio:1 servicio | string       | App Page Visit |
            | level 1                  | cuentas                                                | string       | App Page Visit |
            | level 2                  | pagar servicio                                         | string       | App Page Visit |
            | level 3                  | 1 servicio                                             | string       | App Page Visit |
            | language                 | ES                                                     | string       | App Page Visit |
            | page area                | privada                                                | string       | App Page Visit |
            | page intent              | transaccion                                            | string       | App Page Visit |
            | channel                  | online                                                 | string       | App Page Visit |
            | page instance ID         | de                                                     | string       | App Page Visit |
            | page info version        | appVersion                                             | regexp named | App Page Visit |
            | page segment             | personas                                               | string       | App Page Visit |
            | sysEnv                   | app                                                    | string       | App Page Visit |
            | business unit            | BBVA Mexico                                            | string       | App Page Visit |
            | site app name            | App BBVA Mexico                                        | string       | App Page Visit |
            | project name             | Glomo                                                  | string       | App Page Visit |
            | device mobile            | si                                                     | string       | App Page Visit |
            | user userState           | logado                                                 | string       | App Page Visit |
            | user segment global      | 003001                                                 | string       | App Page Visit |
            | profile ID               | profileID                                              | regexp named | App Page Visit |
            | user age                 | age                                                    | regexp named | App Page Visit |
            | user gender              | gender                                                 | regexp named | App Page Visit |
            | global application       | bill payments                                          | string       | App Page Visit |
            | application name         | pagar servicio                                         | string       | App Page Visit |
            | application type         | operativa                                              | string       | App Page Visit |
            | application step         | 1 servicio                                             | string       | App Page Visit |
            | fulfillment model        | online                                                 | string       | App Page Visit |
            | product primary category | cuentas                                                | string       | App Page Visit |
            | internal campaign        |                                                        | empty array  | App Page Visit |
            | optimization attributes  |                                                        | empty array  | App Page Visit |

    @ANA_EVENT_BP002
    @analytics
    @MX
    @vbank @backend(test)
    @ios @android @web
    @glomo
    @web-done
    Scenario: Bill Payments - analytics events App Started
        Given a user with the following criteria
            | criteria                 |
            | bill payments            |
        And the user selects an account
        And the analytics interceptor service is initiated
        When the user is in the "select service" step of bill payments
        Then the analytics events contains the following variables
            | item                     | value                                                  | type         | event       |
            | analytics	               | analytics/glomo_base                                   | json schema  | App Started |
            | version dl               | 20250414_5.0                                           | string       | App Started |
            | page name                | app:privada:personas:cuentas:pagar servicio:1 servicio | string       | App Started |
            | level 1                  | cuentas                                                | string       | App Started |
            | level 2                  | pagar servicio                                         | string       | App Started |
            | level 3                  | 1 servicio                                             | string       | App Started |
            | language                 | ES                                                     | string       | App Started |
            | page area                | privada                                                | string       | App Started |
            | page intent              | transaccion                                            | string       | App Started |
            | channel                  | online                                                 | string       | App Started |
            | page instance ID         | de                                                     | string       | App Started |
            | page info version        | appVersion                                             | regexp named | App Started |
            | page segment             | personas                                               | string       | App Started |
            | sysEnv                   | app                                                    | string       | App Started |
            | business unit            | BBVA Mexico                                            | string       | App Started |
            | site app name            | App BBVA Mexico                                        | string       | App Started |
            | project name             | Glomo                                                  | string       | App Started |
            | device mobile            | si                                                     | string       | App Started |
            | user userState           | logado                                                 | string       | App Started |
            | user segment global      | 003001                                                 | string       | App Started |
            | profile ID               | profileID                                              | regexp named | App Started |
            | user age                 | age                                                    | regexp named | App Started |
            | user gender              | gender                                                 | regexp named | App Started |
            | global application       | bill payments                                          | string       | App Started |
            | application name         | pagar servicio                                         | string       | App Started |
            | application type         | operativa                                              | string       | App Started |
            | application step         | servicio nuevo                                         | string       | App Started |
            | fulfillment model        | online                                                 | string       | App Started |
            | product primary category | cuentas                                                | string       | App Started |
            | internal campaign        |                                                        | empty array  | App Started |
            | optimization attributes  |                                                        | empty array  | App Started |

    @ANA_EVENT_BP003
    @analytics
    @MX
    @vbank @backend(test)
    @ios @android @web
    @glomo
    @web-done
    Scenario: Bill Payments - analytics events App Step 2
        Given a user with the following criteria
            | criteria                 |
            | bill payments            |
        And the user selects an account
        And the analytics interceptor service is initiated
        When the user is in the "amount" step of bill payments
        Then the analytics events contains the following variables
            | item                     | value                                                  | type         | event      |
            | analytics	               | analytics/glomo_base                                   | json schema  | App Step 2 |
            | version dl               | 20250414_5.0                                           | string       | App Step 2 |
            | page name                | app:privada:personas:cuentas:pagar servicio:2 importe  | string       | App Step 2 |
            | level 1                  | cuentas                                                | string       | App Step 2 |
            | level 2                  | pagar servicio                                         | string       | App Step 2 |
            | level 3                  | 2 importe                                              | string       | App Step 2 |
            | language                 | ES                                                     | string       | App Step 2 |
            | page area                | privada                                                | string       | App Step 2 |
            | page intent              | transaccion                                            | string       | App Step 2 |
            | channel                  | online                                                 | string       | App Step 2 |
            | page instance ID         | de                                                     | string       | App Step 2 |
            | page info version        | appVersion                                             | regexp named | App Step 2 |
            | page segment             | personas                                               | string       | App Step 2 |
            | sysEnv                   | app                                                    | string       | App Step 2 |
            | business unit            | BBVA Mexico                                            | string       | App Step 2 |
            | site app name            | App BBVA Mexico                                        | string       | App Step 2 |
            | project name             | Glomo                                                  | string       | App Step 2 |
            | device mobile            | si                                                     | string       | App Step 2 |
            | user userState           | logado                                                 | string       | App Step 2 |
            | user segment global      | 003001                                                 | string       | App Step 2 |
            | profile ID               | profileID                                              | regexp named | App Step 2 |
            | user age                 | age                                                    | regexp named | App Step 2 |
            | user gender              | gender                                                 | regexp named | App Step 2 |
            | global application       | bill payments                                          | string       | App Step 2 |
            | application name         | pagar servicio                                         | string       | App Step 2 |
            | application type         | operativa                                              | string       | App Step 2 |
            | application step         | 2 importe                                              | string       | App Step 2 |
            | fulfillment model        | online                                                 | string       | App Step 2 |
            | application typology     | lettersAndSpaceOrEmpty                                 | regexp named | App Step 2 |
            | application process      | lettersAndSpaceOrEmpty                                 | regexp named | App Step 2 |
            | product primary category | cuentas                                                | string       | App Step 2 |
            | internal campaign        |                                                        | empty array  | App Step 2 |
            | optimization attributes  |                                                        | empty array  | App Step 2 |

    @ANA_EVENT_BP004
    @analytics
    @MX
    @vbank @backend(test)
    @ios @android @web
    @glomo
    @web-done
    Scenario: Bill Payments - analytics events App Step 3
        Given a user with the following criteria
            | criteria                 |
            | bill payments            |
        And the user selects an account
        And the analytics interceptor service is initiated
        When the user is in the "concept" step of bill payments
        Then the analytics events contains the following variables
            | item                     | value                                                  | type         | event      |
            | analytics	               | analytics/glomo_base                                   | json schema  | App Step 3 |
            | version dl               | 20250414_5.0                                           | string       | App Step 3 |
            | page name                | app:privada:personas:cuentas:pagar servicio:3 concepto | string       | App Step 3 |
            | level 1                  | cuentas                                                | string       | App Step 3 |
            | level 2                  | pagar servicio                                         | string       | App Step 3 |
            | level 3                  | 3 concepto                                             | string       | App Step 3 |
            | language                 | ES                                                     | string       | App Step 3 |
            | page area                | privada                                                | string       | App Step 3 |
            | page intent              | transaccion                                            | string       | App Step 3 |
            | channel                  | online                                                 | string       | App Step 3 |
            | page instance ID         | de                                                     | string       | App Step 3 |
            | page info version        | appVersion                                             | regexp named | App Step 3 |
            | page segment             | personas                                               | string       | App Step 3 |
            | sysEnv                   | app                                                    | string       | App Step 3 |
            | business unit            | BBVA Mexico                                            | string       | App Step 3 |
            | site app name            | App BBVA Mexico                                        | string       | App Step 3 |
            | project name             | Glomo                                                  | string       | App Step 3 |
            | device mobile            | si                                                     | string       | App Step 3 |
            | user userState           | logado                                                 | string       | App Step 3 |
            | user segment global      | 003001                                                 | string       | App Step 3 |
            | profile ID               | profileID                                              | regexp named | App Step 3 |
            | user age                 | age                                                    | regexp named | App Step 3 |
            | user gender              | gender                                                 | regexp named | App Step 3 |
            | global application       | bill payments                                          | string       | App Step 3 |
            | application name         | pagar servicio                                         | string       | App Step 3 |
            | application type         | operativa                                              | string       | App Step 3 |
            | application step         | 3 concepto                                             | string       | App Step 3 |
            | fulfillment model        | online                                                 | string       | App Step 3 |
            | application typology     | lettersAndSpaceOrEmpty                                 | regexp named | App Step 3 |
            | application process      | lettersAndSpaceOrEmpty                                 | regexp named | App Step 3 |
            | product primary category | cuentas                                                | string       | App Step 3 |
            | product amount           | alphaNumericLowerCaseSpace                             | regexp named | App Step 3 |
            | product currency         | MXN                                                    | string       | App Step 3 |
            | internal campaign        |                                                        | empty array  | App Step 3 |
            | optimization attributes  |                                                        | empty array  | App Step 3 |

    @ANA_EVENT_BP005
    @analytics
    @MX
    @vbank @backend(test)
    @ios @android @web
    @glomo
    @web-done
    Scenario: Bill Payments - analytics events App Step 4
        Given a user with the following criteria
            | criteria                 |
            | bill payments            |
        And the user selects an account
        And the analytics interceptor service is initiated
        When the user is in the "summary" step of bill payments
        Then the analytics events contains the following variables
            | item                     | value                                                      | type         | event      |
            | analytics	               | analytics/glomo_base                                       | json schema  | App Step 4 |
            | version dl               | 20250414_5.0                                               | string       | App Step 4 |
            | page name                | app:privada:personas:cuentas:pagar servicio:4 confirmacion | string       | App Step 4 |
            | level 1                  | cuentas                                                    | string       | App Step 4 |
            | level 2                  | pagar servicio                                             | string       | App Step 4 |
            | level 3                  | 4 confirmacion                                             | string       | App Step 4 |
            | language                 | ES                                                         | string       | App Step 4 |
            | page area                | privada                                                    | string       | App Step 4 |
            | page intent              | transaccion                                                | string       | App Step 4 |
            | channel                  | online                                                     | string       | App Step 4 |
            | page instance ID         | de                                                         | string       | App Step 4 |
            | page info version        | appVersion                                                 | regexp named | App Step 4 |
            | page segment             | personas                                                   | string       | App Step 4 |
            | sysEnv                   | app                                                        | string       | App Step 4 |
            | business unit            | BBVA Mexico                                                | string       | App Step 4 |
            | site app name            | App BBVA Mexico                                            | string       | App Step 4 |
            | project name             | Glomo                                                      | string       | App Step 4 |
            | device mobile            | si                                                         | string       | App Step 4 |
            | user userState           | logado                                                     | string       | App Step 4 |
            | user segment global      | 003001                                                     | string       | App Step 4 |
            | profile ID               | profileID                                                  | regexp named | App Step 4 |
            | user age                 | age                                                        | regexp named | App Step 4 |
            | user gender              | gender                                                     | regexp named | App Step 4 |
            | global application       | bill payments                                              | string       | App Step 4 |
            | application name         | pagar servicio                                             | string       | App Step 4 |
            | application type         | operativa                                                  | string       | App Step 4 |
            | application step         | 4 confirmacion                                             | string       | App Step 4 |
            | fulfillment model        | online                                                     | string       | App Step 4 |
            | application typology     | lettersAndSpaceOrEmpty                                     | regexp named | App Step 4 |
            | application process      | lettersAndSpaceOrEmpty                                     | regexp named | App Step 4 |
            | product primary category | cuentas                                                    | string       | App Step 4 |
            | product amount           | alphaNumericLowerCaseSpace                                 | regexp named | App Step 4 |
            | product currency         | MXN                                                        | string       | App Step 4 |
            | internal campaign        |                                                            | empty array  | App Step 4 |
            | optimization attributes  |                                                            | empty array  | App Step 4 |

    @ANA_EVENT_BP006
    @analytics
    @MX
    @vbank @backend(test)
    @ios @android @web
    @glomo
    @web-done
    Scenario: Bill Payments - analytics events App Step 5
        Given a user with the following criteria
            | criteria                 |
            | bill payments            |
        And the user selects an account
        And the analytics interceptor service is initiated
        When the user is in the "otp modal" step of bill payments
        Then the analytics events contains the following variables
            | item                     | value                                                      | type         | event      |
            | analytics	               | analytics/glomo_base                                       | json schema  | App Step 5 |
            | version dl               | 20250414_5.0                                               | string       | App Step 5 |
            | page name                | app:privada:personas:cuentas:pagar servicio:5 otp          | string       | App Step 5 |
            | level 1                  | cuentas                                                    | string       | App Step 5 |
            | level 2                  | pagar servicio                                             | string       | App Step 5 |
            | level 3                  | 5 otp                                                      | string       | App Step 5 |
            | language                 | ES                                                         | string       | App Step 5 |
            | page area                | privada                                                    | string       | App Step 5 |
            | page intent              | transaccion                                                | string       | App Step 5 |
            | channel                  | online                                                     | string       | App Step 5 |
            | page instance ID         | de                                                         | string       | App Step 5 |
            | page info version        | appVersion                                                 | regexp named | App Step 5 |
            | page segment             | personas                                                   | string       | App Step 5 |
            | sysEnv                   | app                                                        | string       | App Step 5 |
            | business unit            | BBVA Mexico                                                | string       | App Step 5 |
            | site app name            | App BBVA Mexico                                            | string       | App Step 5 |
            | project name             | Glomo                                                      | string       | App Step 5 |
            | device mobile            | si                                                         | string       | App Step 5 |
            | user userState           | logado                                                     | string       | App Step 5 |
            | user segment global      | 003001                                                     | string       | App Step 5 |
            | profile ID               | profileID                                                  | regexp named | App Step 5 |
            | user age                 | age                                                        | regexp named | App Step 5 |
            | user gender              | gender                                                     | regexp named | App Step 5 |
            | global application       | bill payments                                              | string       | App Step 5 |
            | application name         | pagar servicio                                             | string       | App Step 5 |
            | application type         | operativa                                                  | string       | App Step 5 |
            | application step         | 5 otp                                                      | string       | App Step 5 |
            | fulfillment model        | online                                                     | string       | App Step 5 |
            | application typology     | lettersAndSpaceOrEmpty                                     | regexp named | App Step 5 |
            | application process      | lettersAndSpaceOrEmpty                                     | regexp named | App Step 5 |
            | product primary category | cuentas                                                    | string       | App Step 5 |
            | product amount           | alphaNumericLowerCaseSpace                                 | regexp named | App Step 5 |
            | product currency         | MXN                                                        | string       | App Step 5 |
            | internal campaign        |                                                            | empty array  | App Step 5 |
            | optimization attributes  |                                                            | empty array  | App Step 5 |

    @ANA_EVENT_BP007
    @analytics
    @MX
    @vbank @backend(test)
    @ios @android @web
    @glomo
    @web-done
    Scenario: Bill Payments - analytics events App Completed
        Given a user with the following criteria
            | criteria                 |
            | bill payments            |
        And the user selects an account
        And the analytics interceptor service is initiated
        When the user is in the "review" step of bill payments
        Then the analytics events contains the following variables
            | item                         | value                                                      | type         | event         |
            | analytics	                   | analytics/glomo_base                                       | json schema  | App Completed |
            | version dl                   | 20250414_5.0                                               | string       | App Completed |
            | page name                    | app:privada:personas:cuentas:pagar servicio:pagina exitosa | string       | App Completed |
            | level 1                      | cuentas                                                    | string       | App Completed |
            | level 2                      | pagar servicio                                             | string       | App Completed |
            | level 3                      | pagina exitosa                                             | string       | App Completed |
            | language                     | ES                                                         | string       | App Completed |
            | page area                    | privada                                                    | string       | App Completed |
            | page intent                  | transaccion                                                | string       | App Completed |
            | channel                      | online                                                     | string       | App Completed |
            | page instance ID             | de                                                         | string       | App Completed |
            | page info version            | appVersion                                                 | regexp named | App Completed |
            | page segment                 | personas                                                   | string       | App Completed |
            | sysEnv                       | app                                                        | string       | App Completed |
            | business unit                | BBVA Mexico                                                | string       | App Completed |
            | site app name                | App BBVA Mexico                                            | string       | App Completed |
            | project name                 | Glomo                                                      | string       | App Completed |
            | device mobile                | si                                                         | string       | App Completed |
            | user userState               | logado                                                     | string       | App Completed |
            | user segment global          | 003001                                                     | string       | App Completed |
            | profile ID                   | profileID                                                  | regexp named | App Completed |
            | user age                     | age                                                        | regexp named | App Completed |
            | user gender                  | gender                                                     | regexp named | App Completed |
            | global application           | bill payments                                              | string       | App Completed |
            | application name             | pagar servicio                                             | string       | App Completed |
            | application type             | operativa                                                  | string       | App Completed |
            | application step             | pagina exitosa                                             | string       | App Completed |
            | fulfillment model            | online                                                     | string       | App Completed |
            | application typology         | lettersAndSpaceOrEmpty                                     | regexp named | App Completed |
            | application process          | lettersAndSpaceOrEmpty                                     | regexp named | App Completed |
            | application state            | finalizado                                                 | string       | App Completed |
            | application operation number | alphaNumericCaseSpace                                      | regexp named | App Completed |
            | product primary category     | cuentas                                                    | string       | App Completed |
            | product amount               | alphaNumericLowerCaseSpace                                 | regexp named | App Completed |
            | product currency             | MXN                                                        | string       | App Completed |
            | product state                | finalizado                                                 | string       | App Completed |
            | internal campaign            |                                                            | empty array  | App Completed |
            | optimization attributes      |                                                            | empty array  | App Completed |

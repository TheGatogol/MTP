@checksDepositAnalytics
Feature: Analytics checks deposits

    @ANA_EVENT_CD001
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: Access to check deposit list screen - app on click start
        Given a user with the following criteria
            | criteria          |
            | account in pesos  |
            | level n4 account  |
        And the user accesses to checks operatives with checks management active
        And the analytics interceptor service is initiated
        When the user accesses to check deposits list options screen
        Then the analytics events contains the following variables
            | item                     | value                                                   | type         |event             |
            | analytics                | analytics/glomo_base                                    | json schema  |App On Click Start|
            | version DL               | 20250414_5.0                                            | string       |App On Click Start|
            | page name                | app:privada:personas:cheques:operaciones con cheques    | string       |App On Click Start|
            | level 1                  | cheques                                                 | string       |App On Click Start|
            | level 2                  | operaciones con cheques                                 | string       |App On Click Start|
            | language                 | ES                                                      | string       |App On Click Start|
            | page area                | privada                                                 | string       |App On Click Start|
            | page intent              | informacion                                             | string       |App On Click Start|
            | channel                  | online                                                  | string       |App On Click Start|
            | page instance ID         | de                                                      | string       |App On Click Start|
            | page info version        | appVersion                                              | regexp named |App On Click Start|
            | page segment             | personas                                                | string       |App On Click Start|
            | sysEnv                   | app                                                     | string       |App On Click Start|
            | business unit            | BBVA Mexico                                             | string       |App On Click Start|
            | site app name            | App BBVA Mexico                                         | string       |App On Click Start|
            | project name             | Glomo                                                   | string       |App On Click Start|
            | device mobile            | si                                                      | string       |App On Click Start|
            | user userState           | logado                                                  | string       |App On Click Start|
            | user segment global      | 003001                                                  | string       |App On Click Start|
            | profile ID               | profileID                                               | regexp named |App On Click Start|
            | user age                 | age                                                     | regexp named |App On Click Start|
            | user gender              | gender                                                  | regexp named |App On Click Start|
            | global application       | check deposits                                          | string       |App On Click Start|
            | application name         | depositar cheque                                        | string       |App On Click Start|
            | application type         | operativa                                               | string       |App On Click Start|
            | application step         | operaciones con cheques                                 | string       |App On Click Start|
            | fulfillment model        | online/offline                                          | string       |App On Click Start|
            | internal campaign        |                                                         | empty array  |App On Click Start|
            | optimization attributes  |                                                         | empty array  |App On Click Start|

    @ANA_EVENT_CD002
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: Adding a check from list entering check deposit screen - app on click start
        Given a user with the following criteria
            | criteria          |
            | account in pesos  |
            | level n4 account  |
        And the user accesses the checks deposit list screen
        And the analytics interceptor service is initiated
        When the user selects the add check option
        Then the analytics events contains the following variables
            | item                     | value                                                | type         | event              |
            | analytics                | analytics/glomo_base                                 | json schema  | App On Click Start |
            | version DL               | 20250414_5.0                                         | string       | App On Click Start |
            | page name                | app:privada:personas:cheques:lista cheques           | string       | App On Click Start |
            | level 1                  | cheques                                              | string       | App On Click Start |
            | level 2                  | lista cheques                                        | string       | App On Click Start |
            | language                 | ES                                                   | string       | App On Click Start |
            | page area                | privada                                              | string       | App On Click Start |
            | page intent              | informacion                                          | string       | App On Click Start |
            | channel                  | online                                               | string       | App On Click Start |
            | page instance ID         | de                                                   | string       | App On Click Start |
            | page info version        | appVersion                                           | regexp named | App On Click Start |
            | page segment             | personas                                             | string       | App On Click Start |
            | sysEnv                   | app                                                  | string       | App On Click Start |
            | business unit            | BBVA Mexico                                          | string       | App On Click Start |
            | site app name            | App BBVA Mexico                                      | string       | App On Click Start |
            | project name             | Glomo                                                | string       | App On Click Start |
            | device mobile            | si                                                   | string       | App On Click Start |
            | user userState           | logado                                               | string       | App On Click Start |
            | user segment global      | 003001                                               | string       | App On Click Start |
            | profile ID               | profileID                                            | regexp named | App On Click Start |
            | user age                 | age                                                  | regexp named | App On Click Start |
            | user gender              | gender                                               | regexp named | App On Click Start |
            | global application       | check deposits                                       | string       | App On Click Start |
            | application name         | depositar cheque                                     | string       | App On Click Start |
            | application type         | operativa                                            | string       | App On Click Start |
            | application step         | lista cheques                                        | string       | App On Click Start |
            | fulfillment model        | online/offline                                       | string       | App On Click Start |
            | internal campaign        |                                                      | empty array  | App On Click Start |
            | optimization attributes  |                                                      | empty array  | App On Click Start |

    @ANA_EVENT_CD003
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: Access to checks deposit screen - app page visit
        Given a user with the following criteria
            | criteria          |
            | account in pesos  |
            | level n4 account  |
        And the user accesses the checks deposit list screen
        And the analytics interceptor service is initiated
        When the user selects the add check option
        Then the analytics events contains the following variables
            | item                     | value                                                 | type         | event          |
            | analytics                | analytics/glomo_base                                  | json schema  | App Page Visit |
            | version DL               | 20250414_5.0                                          | string       | App Page Visit |
            | page name                | app:privada:personas:depositar cheque:1 anadir cheque | string       | App Page Visit |
            | level 1                  | depositar cheque                                      | string       | App Page Visit |
            | level 2                  | 1 anadir cheque                                       | string       | App Page Visit |
            | language                 | ES                                                    | string       | App Page Visit |
            | page area                | privada                                               | string       | App Page Visit |
            | page intent              | transaccion                                           | string       | App Page Visit |
            | channel                  | online                                                | string       | App Page Visit |
            | page instance ID         | de                                                    | string       | App Page Visit |
            | page info version        | appVersion                                            | regexp named | App Page Visit |
            | page segment             | personas                                              | string       | App Page Visit |
            | sysEnv                   | app                                                   | string       | App Page Visit |
            | business unit            | BBVA Mexico                                           | string       | App Page Visit |
            | site app name            | App BBVA Mexico                                       | string       | App Page Visit |
            | project name             | Glomo                                                 | string       | App Page Visit |
            | device mobile            | si                                                    | string       | App Page Visit |
            | user userState           | logado                                                | string       | App Page Visit |
            | user segment global      | 003001                                                | string       | App Page Visit |
            | profile ID               | profileID                                             | regexp named | App Page Visit |
            | user age                 | age                                                   | regexp named | App Page Visit |
            | user gender              | gender                                                | regexp named | App Page Visit |
            | global application       | check deposits                                        | string       | App Page Visit |
            | application name         | depositar cheque                                      | string       | App Page Visit |
            | application type         | operativa                                             | string       | App Page Visit |
            | application step         | 1 anadir cheque                                       | string       | App Page Visit |
            | fulfillment model        | online/offline                                        | string       | App Page Visit |
            | product primary category | cuentas                                               | string       | App Page Visit |
            | internal campaign        |                                                       | empty array  | App Page Visit |
            | optimization attributes  |                                                       | empty array  | App Page Visit |

    @ANA_EVENT_CD004
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: Access to checks deposit screen - app started
        Given a user with the following criteria
            | criteria          |
            | account in pesos  |
            | level n4 account  |
        And the user accesses the checks deposit screen
        And the analytics interceptor service is initiated
        When the user accesses the check deposit aggregator page
        Then the analytics events contains the following variables
            | item                     | value                                                 | type         | event       |
            | analytics                | analytics/glomo_base                                  | json schema  | App Started |
            | version DL               | 20250414_5.0                                          | string       | App Started |
            | page name                | app:privada:personas:depositar cheque:1 anadir cheque | string       | App Started |
            | level 1                  | depositar cheque                                      | string       | App Started |
            | level 2                  | 1 anadir cheque                                       | string       | App Started |
            | language                 | ES                                                    | string       | App Started |
            | page area                | privada                                               | string       | App Started |
            | page intent              | transaccion                                           | string       | App Started |
            | channel                  | online                                                | string       | App Started |
            | page instance ID         | de                                                    | string       | App Started |
            | page info version        | appVersion                                            | regexp named | App Started |
            | page segment             | personas                                              | string       | App Started |
            | sysEnv                   | app                                                   | string       | App Started |
            | business unit            | BBVA Mexico                                           | string       | App Started |
            | site app name            | App BBVA Mexico                                       | string       | App Started |
            | project name             | Glomo                                                 | string       | App Started |
            | device mobile            | si                                                    | string       | App Started |
            | user userState           | logado                                                | string       | App Started |
            | user segment global      | 003001                                                | string       | App Started |
            | profile ID               | profileID                                             | regexp named | App Started |
            | user age                 | age                                                   | regexp named | App Started |
            | user gender              | gender                                                | regexp named | App Started |
            | global application       | check deposits                                        | string       | App Started |
            | application name         | depositar cheque                                      | string       | App Started |
            | application type         | operativa                                             | string       | App Started |
            | application step         | 1 anadir cheque                                       | string       | App Started |
            | fulfillment model        | online/offline                                        | string       | App Started |
            | product primary category | cuentas                                               | string       | App Started |
            | internal campaign        |                                                       | empty array  | App Started |
            | optimization attributes  |                                                       | empty array  | App Started |

    @ANA_EVENT_CD005
    @analytics

    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: Help icon in check deposit step screen - app started
        Given a user with the following criteria
            | criteria          |
            | account in pesos  |
            | level n4 account  |
        And the user accesses the checks deposit screen
        And the analytics interceptor service is initiated
        When the user asks for help management screen
        Then the analytics events contains the following variables
            | item                     | value                                                 | type         | event       |
            | analytics                | analytics/glomo_base                                  | json schema  | App Started |
            | version DL               | 20250414_5.0                                          | string       | App Started |
            | page name                | app:privada:personas:depositar cheque:1 anadir cheque | string       | App Started |
            | level 1                  | depositar cheque                                      | string       | App Started |
            | level 2                  | 1 anadir cheque                                       | string       | App Started |
            | language                 | ES                                                    | string       | App Started |
            | page area                | privada                                               | string       | App Started |
            | page intent              | transaccion                                           | string       | App Started |
            | channel                  | online                                                | string       | App Started |
            | page instance ID         | de                                                    | string       | App Started |
            | page info version        | appVersion                                            | regexp named | App Started |
            | page segment             | personas                                              | string       | App Started |
            | sysEnv                   | app                                                   | string       | App Started |
            | business unit            | BBVA Mexico                                           | string       | App Started |
            | site app name            | App BBVA Mexico                                       | string       | App Started |
            | project name             | Glomo                                                 | string       | App Started |
            | device mobile            | si                                                    | string       | App Started |
            | user userState           | logado                                                | string       | App Started |
            | user segment global      | 003001                                                | string       | App Started |
            | profile ID               | profileID                                             | regexp named | App Started |
            | user age                 | age                                                   | regexp named | App Started |
            | user gender              | gender                                                | regexp named | App Started |
            | global application       | check deposits                                        | string       | App Started |
            | application name         | depositar cheque                                      | string       | App Started |
            | application type         | operativa                                             | string       | App Started |
            | application step         | info cobro digital                                    | string       | App Started |
            | fulfillment model        | online/offline                                        | string       | App Started |
            | product primary category | cuentas                                               | string       | App Started |
            | internal campaign        |                                                       | empty array  | App Started |
            | optimization attributes  |                                                       | empty array  | App Started |

    @ANA_EVENT_CD006
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario:  Access to checks deposits aggregator screen  - app step 2
        Given a user with the following criteria
            | criteria          |
            | account in pesos  |
            | level n4 account  |
        And the user accesses the checks deposit screen
        When the user accesses the check deposit aggregator page
        Then the device contains the following variables
            | item                     | value                                                 | type         |
            | analytics                | analytics/glomo_base                                  | json schema  |
            | version DL               | 20250414_5.0                                          | string       |
            | page name                | app:privada:personas:depositar cheque:2 datos cheques | string       |
            | level 1                  | depositar cheque                                      | string       |
            | level 2                  | 2 datos cheques                                       | string       |
            | language                 | ES                                                    | string       |
            | page area                | privada                                               | string       |
            | page intent              | transaccion                                           | string       |
            | channel                  | online                                                | string       |
            | page instance ID         | de                                                    | string       |
            | page info version        | appVersion                                            | regexp named |
            | page segment             | personas                                              | string       |
            | sysEnv                   | app                                                   | string       |
            | business unit            | BBVA Mexico                                           | string       |
            | site app name            | App BBVA Mexico                                       | string       |
            | project name             | Glomo                                                 | string       |
            | device mobile            | si                                                    | string       |
            | user userState           | logado                                                | string       |
            | user segment global      | 003001                                                | string       |
            | profile ID               | profileID                                             | regexp named |
            | user age                 | age                                                   | regexp named |
            | user gender              | gender                                                | regexp named |
            | global application       | check deposits                                        | string       |
            | application name         | depositar cheque                                      | string       |
            | application type         | operativa                                             | string       |
            | application step         | 2 datos cheques                                       | string       |
            | fulfillment model        | online/offline                                        | string       |
            | product primary category | cuentas                                               | string       |
            | internal campaign        |                                                       | empty array  |
            | optimization attributes  |                                                       | empty array  |

    @ANA_EVENT_CD007
    @analytics

    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario:  Access to checks deposits photo screen  - app step 3
        Given a user with the following criteria
            | criteria          |
            | account in pesos  |
            | level n4 account  |
        And the user accesses the checks deposit screen
        When the user accesses the check deposit aggregator page
        And the user selects the add photos option
        Then the device contains the following variables
            | item                     | value                                               | type         |
            | analytics                | analytics/glomo_base                                | json schema  |
            | version DL               | 20250414_5.0                                        | string       |
            | page name                | app:privada:personas:depositar cheque:3 tomar fotos | string       |
            | level 1                  | depositar cheque                                    | string       |
            | level 2                  | 3 tomar fotos                                       | string       |
            | language                 | ES                                                  | string       |
            | page area                | privada                                             | string       |
            | page intent              | transaccion                                         | string       |
            | channel                  | online                                              | string       |
            | page instance ID         | de                                                  | string       |
            | page info version        | appVersion                                          | regexp named |
            | page segment             | personas                                            | string       |
            | sysEnv                   | app                                                 | string       |
            | business unit            | BBVA Mexico                                         | string       |
            | site app name            | App BBVA Mexico                                     | string       |
            | project name             | Glomo                                               | string       |
            | device mobile            | si                                                  | string       |
            | user userState           | logado                                              | string       |
            | user segment global      | 003001                                              | string       |
            | profile ID               | profileID                                           | regexp named |
            | user age                 | age                                                 | regexp named |
            | user gender              | gender                                              | regexp named |
            | global application       | check deposits                                      | string       |
            | application name         | depositar cheque                                    | string       |
            | application type         | operativa                                           | string       |
            | application step         | 3 tomar fotos                                       | string       |
            | fulfillment model        | online/offline                                      | string       |
            | product primary category | cuentas                                             | string       |
            | internal campaign        |                                                     | empty array  |
            | optimization attributes  |                                                     | empty array  |

    @ANA_EVENT_CD008
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario:  Modal information in front photo screen  - app step 4
        Given a user with the following criteria
            | criteria          |
            | account in pesos  |
            | level n4 account  |
        And the user accesses the check deposit photos page
        When the user takes a picture of the front part of the check
        Then the device contains the following variables
            | item                     | value                                                     | type         |
            | analytics                | analytics/glomo_base                                      | json schema  |
            | version DL               | 20250414_5.0                                              | string       |
            | page name                | app:privada:personas:depositar cheque:4 info foto frontal | string       |
            | level 1                  | depositar cheque                                          | string       |
            | level 2                  | 4 info foto frontal                                       | string       |
            | language                 | ES                                                        | string       |
            | page area                | privada                                                   | string       |
            | page intent              | transaccion                                               | string       |
            | channel                  | online                                                    | string       |
            | page instance ID         | de                                                        | string       |
            | page info version        | appVersion                                                | regexp named |
            | page segment             | personas                                                  | string       |
            | sysEnv                   | app                                                       | string       |
            | business unit            | BBVA Mexico                                               | string       |
            | site app name            | App BBVA Mexico                                           | string       |
            | project name             | Glomo                                                     | string       |
            | device mobile            | si                                                        | string       |
            | user userState           | logado                                                    | string       |
            | user segment global      | 003001                                                    | string       |
            | profile ID               | profileID                                                 | regexp named |
            | user age                 | age                                                       | regexp named |
            | user gender              | gender                                                    | regexp named |
            | global application       | check deposits                                            | string       |
            | application name         | depositar cheque                                          | string       |
            | application type         | operativa                                                 | string       |
            | application step         | 4 info foto frontal                                       | string       |
            | fulfillment model        | online/offline                                            | string       |
            | product primary category | cuentas                                                   | string       |
            | internal campaign        |                                                           | empty array  |
            | optimization attributes  |                                                           | empty array  |

    @ANA_EVENT_CD009
    @analytics

    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario:  Modal information in back photo screen  - app step 7
        Given a user with the following criteria
            | criteria          |
            | account in pesos  |
            | level n4 account  |
        And the user accesses the check deposit photos page
        When the user takes a picture of the back part of the check
        Then the device contains the following variables
            | item                     | value                                                     | type         |
            | analytics                | analytics/glomo_base                                      | json schema  |
            | version DL               | 20250414_5.0                                              | string       |
            | page name                | app:privada:personas:depositar cheque:7 info foto reverso | string       |
            | level 1                  | depositar cheque                                          | string       |
            | level 2                  | 7 info foto reverso                                       | string       |
            | language                 | ES                                                        | string       |
            | page area                | privada                                                   | string       |
            | page intent              | transaccion                                               | string       |
            | channel                  | online                                                    | string       |
            | page instance ID         | de                                                        | string       |
            | page info version        | appVersion                                                | regexp named |
            | page segment             | personas                                                  | string       |
            | sysEnv                   | app                                                       | string       |
            | business unit            | BBVA Mexico                                               | string       |
            | site app name            | App BBVA Mexico                                           | string       |
            | project name             | Glomo                                                     | string       |
            | device mobile            | si                                                        | string       |
            | user userState           | logado                                                    | string       |
            | user segment global      | 003001                                                    | string       |
            | profile ID               | profileID                                                 | regexp named |
            | user age                 | age                                                       | regexp named |
            | user gender              | gender                                                    | regexp named |
            | global application       | check deposits                                            | string       |
            | application name         | depositar cheque                                          | string       |
            | application type         | operativa                                                 | string       |
            | application step         | 7 info foto reverso                                       | string       |
            | fulfillment model        | online/offline                                            | string       |
            | product primary category | cuentas                                                   | string       |
            | internal campaign        |                                                           | empty array  |
            | optimization attributes  |                                                           | empty array  |

    @ANA_CD010
    @analytics
    @MX @manual @JIRA.GLOMOGL-20021
    @web @ios @android
    Scenario:  Permissions to use camera in checks deposits photo screen  - app step 5
        Given a user with the following criteria
            | criteria                             |
            | account in pesos check list          |
            | has 1 check deposited charged        |
        When the user accesses the check deposit photos page
        Then the device contains the following variables
            | item                     | value                                                | type         |
            | analytics                | analytics/glomo_base                                 | json schema  |
            | version DL               | 20250414_5.0                                         | string       |
            | page name                | app:privada:personas:depositar cheque:5 abrir camara | string       |
            | level 1                  | depositar cheque                                     | string       |
            | level 2                  | 5 abrir camara                                       | string       |
            | language                 | ES                                                   | string       |
            | page area                | privada                                              | string       |
            | page intent              | transaccion                                          | string       |
            | channel                  | online                                               | string       |
            | page instance ID         | de                                                   | string       |
            | page info version        | appVersion                                           | regexp named |
            | page segment             | personas                                             | string       |
            | sysEnv                   | app                                                  | string       |
            | business unit            | BBVA Mexico                                          | string       |
            | site app name            | App BBVA Mexico                                      | string       |
            | project name             | Glomo                                                | string       |
            | device mobile            | si                                                   | string       |
            | user userState           | logado                                               | string       |
            | prospect ID              | 003001                                               | string       |
            | profile ID               | profileID                                            | regexp named |
            | user age                 | age                                                  | regexp named |
            | user gender              | gender                                               | regexp named |
            | global application       | check deposits                                       | string       |
            | application name         | depositar cheque                                     | string       |
            | application type         | operativa                                            | string       |
            | application step         | 5 abrir camara                                       | string       |
            | fulfillment model        | online/offline                                       | string       |
            | product primary category | cuentas                                              | string       |
            | internal campaign        |                                                      | empty array  |
            | optimization attributes  |                                                      | empty array  |

    @ANA_CD011
    @analytics
    @MX @manual @JIRA.GLOMOGL-20021
    @web @ios @android
    Scenario:  Confirms the front photo capture in checks deposits photo screen  - app step 6
        Given a user with the following criteria
            | criteria                             |
            | account in pesos check list          |
            | has 1 check deposited charged        |
        And the user accesses the check deposit photos page
        When the user takes a picture of the front part of the check
        Then the device contains the following variables
            | item                     | value                                                          | type         |
            | analytics                | analytics/glomo_base                                           | json schema  |
            | version DL               | 20250414_5.0                                                   | string       |
            | page name                | app:privada:personas:depositar cheque:6 confirmar foto frontal | string       |
            | level 1                  | depositar cheque                                               | string       |
            | level 2                  | 6 confirmar foto frontal                                       | string       |
            | language                 | ES                                                             | string       |
            | page area                | privada                                                        | string       |
            | page intent              | transaccion                                                    | string       |
            | channel                  | online                                                         | string       |
            | page instance ID         | de                                                             | string       |
            | page info version        | appVersion                                                     | regexp named |
            | page segment             | personas                                                       | string       |
            | sysEnv                   | app                                                            | string       |
            | business unit            | BBVA Mexico                                                    | string       |
            | site app name            | App BBVA Mexico                                                | string       |
            | project name             | Glomo                                                          | string       |
            | device mobile            | si                                                             | string       |
            | user userState           | logado                                                         | string       |
            | user segment global      | 003001                                                         | string       |
            | profile ID               | profileID                                                      | regexp named |
            | user age                 | age                                                            | regexp named |
            | user gender              | gender                                                         | regexp named |
            | global application       | check deposits                                                 | string       |
            | application name         | depositar cheque                                               | string       |
            | application type         | operativa                                                      | string       |
            | application step         | 6 confirmar foto frontal                                       | string       |
            | fulfillment model        | online/offline                                                 | string       |
            | product primary category | cuentas                                                        | string       |
            | internal campaign        |                                                                | empty array  |
            | optimization attributes  |                                                                | empty array  |

    @ANA_CD012
    @analytics
    @MX @manual @JIRA.GLOMOGL-20021
    @web @ios @android
    Scenario:  Confirms the back photo capture in checks deposits photo screen  - app step 8
        Given a user with the following criteria
            | criteria                             |
            | account in pesos check list          |
            | has 1 check deposited charged        |
        And the user accesses the check deposit photos page
        When the user takes a picture of the back part of the check
        Then the device contains the following variables
            | item                     | value                                                   | type         |
            | analytics                | analytics/glomo_base                                    | json schema  |
            | version DL               | 20250414_5.0                                            | string       |
            | page name                | app:privada:personas:depositar cheque:8 confirmar fotos | string       |
            | level 1                  | depositar cheque                                        | string       |
            | level 2                  | 8 confirmar fotos                                       | string       |
            | language                 | ES                                                      | string       |
            | page area                | privada                                                 | string       |
            | page intent              | transaccion                                             | string       |
            | channel                  | online                                                  | string       |
            | page instance ID         | de                                                      | string       |
            | page info version        | appVersion                                              | regexp named |
            | page segment             | personas                                                | string       |
            | sysEnv                   | app                                                     | string       |
            | business unit            | BBVA Mexico                                             | string       |
            | site app name            | App BBVA Mexico                                         | string       |
            | project name             | Glomo                                                   | string       |
            | device mobile            | si                                                      | string       |
            | user userState           | logado                                                  | string       |
            | user segment global      | 003001                                                  | string       |
            | profile ID               | profileID                                               | regexp named |
            | user age                 | age                                                     | regexp named |
            | user gender              | gender                                                  | regexp named |
            | global application       | check deposits                                          | string       |
            | application name         | depositar cheque                                        | string       |
            | application type         | operativa                                               | string       |
            | application step         | 8 confirmar fotos                                       | string       |
            | fulfillment model        | online/offline                                          | string       |
            | product primary category | cuentas                                                 | string       |
            | internal campaign        |                                                         | empty array  |
            | optimization attributes  |                                                         | empty array  |

    @ANA_CD013
    @analytics
    @MX @manual @JIRA.GLOMOGL-20021
    @web @ios @android
    Scenario:  Information is extracted from the check in checks deposits aggregator screen  - app step 9
        Given a user with the following criteria
            | criteria                             |
            | account in pesos check list          |
            | has 1 check deposited charged        |
        And the user accesses to the take picture screen
        When the user continues the check release process
        Then the device contains the following variables
            | item                     | value                                                         | type         |
            | analytics                | analytics/glomo_base                                          | json schema  |
            | version DL               | 20250414_5.0                                                  | string       |
            | page name                | app:privada:personas:depositar cheque:9 informacion adicional | string       |
            | level 1                  | depositar cheque                                              | string       |
            | level 2                  | 9 informacion adicional                                       | string       |
            | language                 | ES                                                            | string       |
            | page area                | privada                                                       | string       |
            | page intent              | transaccion                                                   | string       |
            | channel                  | online                                                        | string       |
            | page instance ID         | de                                                            | string       |
            | page info version        | appVersion                                                    | regexp named |
            | page segment             | personas                                                      | string       |
            | sysEnv                   | app                                                           | string       |
            | business unit            | BBVA Mexico                                                   | string       |
            | site app name            | App BBVA Mexico                                               | string       |
            | project name             | Glomo                                                         | string       |
            | device mobile            | si                                                            | string       |
            | user userState           | logado                                                        | string       |
            | user segment global      | 003001                                                        | string       |
            | profile ID               | profileID                                                     | regexp named |
            | user age                 | age                                                           | regexp named |
            | user gender              | gender                                                        | regexp named |
            | global application       | check deposits                                                | string       |
            | application name         | depositar cheque                                              | string       |
            | application type         | operativa                                                     | string       |
            | application step         | 9 informacion adicional                                       | string       |
            | fulfillment model        | online/offline                                                | string       |
            | product primary category | cuentas                                                       | string       |
            | internal campaign        |                                                               | empty array  |
            | optimization attributes  |                                                               | empty array  |

    @ANA_CD014
    @analytics
    @MX @manual @JIRA.GLOMOGL-20021
    @web @ios @android
    Scenario:  Completes all the requirements of the steps and continues  - app step 10
        Given a user with the following criteria
            | criteria                             |
            | account in pesos check list          |
            | has 1 check deposited charged        |
        And the user accesses the check deposit aggregator page
        When the user continues the check release process
        Then the device contains the following variables
            | item                     | value                                            | type         |
            | analytics                | analytics/glomo_base                             | json schema  |
            | version DL               | 20250414_5.0                                     | string       |
            | page name                | app:privada:personas:depositar cheque:10 resumen | string       |
            | level 1                  | depositar cheque                                 | string       |
            | level 2                  | 10 resumen                                       | string       |
            | language                 | ES                                               | string       |
            | page area                | privada                                          | string       |
            | page intent              | transaccion                                      | string       |
            | channel                  | online                                           | string       |
            | page instance ID         | de                                               | string       |
            | page info version        | appVersion                                       | regexp named |
            | page segment             | personas                                         | string       |
            | sysEnv                   | app                                              | string       |
            | business unit            | BBVA Mexico                                      | string       |
            | site app name            | App BBVA Mexico                                  | string       |
            | project name             | Glomo                                            | string       |
            | device mobile            | si                                               | string       |
            | user userState           | logado                                           | string       |
            | user segment global      | 003001                                           | string       |
            | profile ID               | profileID                                        | regexp named |
            | user age                 | age                                              | regexp named |
            | user gender              | gender                                           | regexp named |
            | global application       | check deposits                                   | string       |
            | application name         | depositar cheque                                 | string       |
            | application type         | operativa                                        | string       |
            | application step         | 10 resumen                                       | string       |
            | fulfillment model        | online/offline                                   | string       |
            | product primary category | cuentas                                          | string       |
            | internal campaign        |                                                  | empty array  |
            | optimization attributes  |                                                  | empty array  |

    @ANA_CD015
    @analytics
    @MX @manual @JIRA.GLOMOGL-20021
    @web @ios @android
    Scenario:  Continues in summary check deposit screen  - app step 11
        Given a user with the following criteria
            | criteria                             |
            | account in pesos check list          |
            | has 1 check deposited charged        |
        And the user accesses the summary of the check deposit screen
        When the user continues the check release process
        Then the device contains the following variables
            | item                     | value                                                 | type         |
            | analytics                | analytics/glomo_base                                  | json schema  |
            | version DL               | 20250414_5.0                                          | string       |
            | page name                | app:privada:personas:depositar cheque:11 confirmacion | string       |
            | level 1                  | depositar cheque                                      | string       |
            | level 2                  | 11 confirmacion                                       | string       |
            | language                 | ES                                                    | string       |
            | page area                | privada                                               | string       |
            | page intent              | transaccion                                           | string       |
            | channel                  | online                                                | string       |
            | page instance ID         | de                                                    | string       |
            | page info version        | appVersion                                            | regexp named |
            | page segment             | personas                                              | string       |
            | sysEnv                   | app                                                   | string       |
            | business unit            | BBVA Mexico                                           | string       |
            | site app name            | App BBVA Mexico                                       | string       |
            | project name             | Glomo                                                 | string       |
            | device mobile            | si                                                    | string       |
            | user userState           | logado                                                | string       |
            | user segment global      | 003001                                                | string       |
            | profile ID               | profileID                                             | regexp named |
            | user age                 | age                                                   | regexp named |
            | user gender              | gender                                                | regexp named |
            | global application       | check deposits                                        | string       |
            | application name         | depositar cheque                                      | string       |
            | application type         | operativa                                             | string       |
            | application step         | 11 confirmacion                                       | string       |
            | fulfillment model        | online/offline                                        | string       |
            | application typology     | 1                                                     | string       |
            | product primary category | cuentas                                               | string       |
            | product amount           | 10000                                                 | string       |
            | product currency         | MXN                                                   | string       |
            | internal campaign        |                                                       | empty array  |
            | optimization attributes  |                                                       | empty array  |

    @ANA_CD016
    @analytics
    @MX @manual @JIRA.GLOMOGL-20021
    @web @ios @android
    Scenario:  Continues in otp check deposit screen  - app step 12
        Given a user with the following criteria
            | criteria                             |
            | account in pesos check list          |
            | has 1 check deposited charged        |
        And the user accesses the summary of the check deposit screen
        When the user continues the check release process
        Then the device contains the following variables
            | item                                        | value                                        | type         |
            | analytics                                   | analytics/glomo_base                         | json schema  |
            | version DL                                  | 20250414_5.0                                 | string       |
            | page name                                   | app:privada:personas:depositar cheque:12 otp | string       |
            | level 1                                     | depositar cheque                             | string       |
            | level 2                                     | 12 otp                                       | string       |
            | language                                    | ES                                           | string       |
            | page area                                   | privada                                      | string       |
            | page intent                                 | transaccion                                  | string       |
            | channel                                     | online                                       | string       |
            | page instance ID                            | de                                           | string       |
            | page info version                           | appVersion                                   | regexp named |
            | page segment                                | personas                                     | string       |
            | sysEnv                                      | app                                          | string       |
            | business unit                               | BBVA Mexico                                  | string       |
            | site app name                               | App BBVA Mexico                              | string       |
            | project name                                | Glomo                                        | string       |
            | device mobile                               | si                                           | string       |
            | user userState                              | logado                                       | string       |
            | prospect ID                                 | 003001                                       | string       |
            | profile ID                                  | profileID                                    | regexp named |
            | user age                                    | age                                          | regexp named |
            | user gender                                 | gender                                       | regexp named |
            | global application                          | check deposits                               | string       |
            | application name                            | depositar cheque                             | string       |
            | application type                            | operativa                                    | string       |
            | application step                            | 12 otp                                       | string       |
            | fulfillment model                           | online/offline                               | string       |
            | application typology                        | 1                                            | string       |
            | window.digitalData.application.customFields | firma:token                                  | string       |
            | product primary category                    | cuentas                                      | string       |
            | product amount                              | 10000                                        | string       |
            | product currency                            | MXN                                          | string       |
            | internal campaign                           |                                              | empty array  |
            | optimization attributes                     |                                              | empty array  |

    @ANA_CD017
    @analytics
    @MX @manual @JIRA.GLOMOGL-20021
    @web @ios @android
    Scenario:  Continues in otp check deposit screen  - app completed
        Given a user with the following criteria
            | criteria                             |
            | account in pesos check list          |
            | has 1 check deposited charged        |
        And the user accesses the otp of the check deposit screen
        And the analytics interceptor service is initiated
        When the user accesses to check deposit receipt screen
        Then the analytics events contains the following variables
            | item                                        | value                                                | type         | event         |
            | analytics                                   | analytics/glomo_base                                 | json schema  | App Completed |
            | version DL                                  | 20250414_5.0                                         | string       | App Completed |
            | page name                                   | app:privada:personas:depositar cheque:pagina exitosa | string       | App Completed |
            | level 1                                     | depositar cheque                                     | string       | App Completed |
            | level 2                                     | pagina exitosa                                       | string       | App Completed |
            | language                                    | ES                                                   | string       | App Completed |
            | page area                                   | privada                                              | string       | App Completed |
            | page intent                                 | transaccion                                          | string       | App Completed |
            | channel                                     | online                                               | string       | App Completed |
            | page instance ID                            | de                                                   | string       | App Completed |
            | page info version                           | appVersion                                           | regexp named | App Completed |
            | page segment                                | personas                                             | string       | App Completed |
            | sysEnv                                      | app                                                  | string       | App Completed |
            | business unit                               | BBVA Mexico                                          | string       | App Completed |
            | site app name                               | App BBVA Mexico                                      | string       | App Completed |
            | project name                                | Glomo                                                | string       | App Completed |
            | device mobile                               | si                                                   | string       | App Completed |
            | user userState                              | logado                                               | string       | App Completed |
            | user segment global                         | 003001                                               | string       | App Completed |
            | profile ID                                  | profileID                                            | regexp named | App Completed |
            | user age                                    | age                                                  | regexp named | App Completed |
            | user gender                                 | gender                                               | regexp named | App Completed |
            | global application                          | check deposits                                       | string       | App Completed |
            | application name                            | depositar cheque                                     | string       | App Completed |
            | application type                            | operativa                                            | string       | App Completed |
            | application step                            | pagina exitosa                                       | string       | App Completed |
            | fulfillment model                           | online/offline                                       | string       | App Completed |
            | application typology                        | 1                                                    | string       | App Completed |
            | window.digitalData.application.customFields | firma:token                                          | string       | App Completed |
            | application state                           | en revision                                          | string       | App Completed |
            | application operation number                | 12121323                                             | string       | App Completed |
            | product primary category                    | cuentas                                              | string       | App Completed |
            | product amount                              | 10000                                                | string       | App Completed |
            | product currency                            | MXN                                                  | string       | App Completed |
            | internal campaign                           |                                                      | empty array  | App Completed |
            | optimization attributes                     |                                                      | empty array  | App Completed |

    @ANA_CD018
    @analytics
    @MX @manual @JIRA.GLOMOGL-20021
    @ios @android @web
    Scenario: Continues in summary check deposit screen and sees a modal error - exceededLimitOperation
        Given a user with the following criteria
            | criteria                             |
            | account in pesos                     |
            | has 2 check deposited different days |
        And the user accesses the summary of the check deposit screen
        And the analytics interceptor service is initiated
        When the user continues the check release process
        Then the analytics events contains the following variables
            | item                    | value                                                       | type             | event     |
            | analytics               | analytics/glomo_base                                        | json schema      | Page View |
            | version DL              | 20250414_5.0                                                | string           | Page View |
            | page name               | app:privada:personas:depositar cheque:error limite excedido | string           | Page View |
            | level 1                 | depositar cheque                                            | string           | Page View |
            | level 2                 | error limite excedido                                       | string           | Page View |
            | error page              | error limite excedido                                       | string           | Page View |
            | language                | ES                                                          | string           | Page View |
            | page area               | privada                                                     | string           | Page View |
            | page intent             | transaccion                                                 | string           | Page View |
            | channel                 | online                                                      | string           | Page View |
            | page instance ID        | de                                                          | string           | Page View |
            | page info version       | appVersion                                                  | regexp named     | Page View |
            | page segment            | personas                                                    | string           | Page View |
            | sysEnv                  | app                                                         | string           | Page View |
            | business unit           | BBVA Mexico                                                 | string           | Page View |
            | site app name           | App BBVA Mexico                                             | string           | Page View |
            | project name            | Glomo                                                       | string           | Page View |
            | device mobile           | si                                                          | string           | Page View |
            | user userState          | logado                                                      | string           | Page View |
            | user segment global     | 003001                                                      | string           | Page View |
            | profile ID              | profileID                                                   | regexp named     | Page View |
            | user age                | age                                                         | regexp named     | Page View |
            | user gender             | gender                                                      | regexp named     | Page View |
            | internal campaign       |                                                             | empty array      | Page View |
            | optimization attributes |                                                             | empty array      | Page View |
            | application             |                                                             | empty str object | Page View |
            | products attributes     |                                                             | empty array      | Page View |

    @ANA_CD019
    @analytics
    @MX @manual @JIRA.GLOMOGL-20021
    @ios @android @web
    Scenario: Continues in summary check deposit screen and sees a modal error - magneticBandError
        Given a user with the following criteria
            | criteria                             |
            | account in pesos                     |
            | has 2 check deposited different days |
        And the user accesses the summary of the check deposit screen
        And the analytics interceptor service is initiated
        When the user continues the check release process
        Then the analytics events contains the following variables
            | item                    | value                                                        | type             | event     |
            | analytics               | analytics/glomo_base                                         | json schema      | Page View |
            | version DL              | 20250414_5.0                                                 | string           | Page View |
            | page name               | app:privada:personas:depositar cheque:error datos de cheques | string           | Page View |
            | level 1                 | depositar cheque                                             | string           | Page View |
            | level 2                 | error datos de cheques                                       | string           | Page View |
            | error page              | error datos de cheques                                       | string           | Page View |
            | language                | ES                                                           | string           | Page View |
            | page area               | privada                                                      | string           | Page View |
            | page intent             | transaccion                                                  | string           | Page View |
            | channel                 | online                                                       | string           | Page View |
            | page instance ID        | de                                                           | string           | Page View |
            | page info version       | appVersion                                                   | regexp named     | Page View |
            | page segment            | personas                                                     | string           | Page View |
            | sysEnv                  | app                                                          | string           | Page View |
            | business unit           | BBVA Mexico                                                  | string           | Page View |
            | site app name           | App BBVA Mexico                                              | string           | Page View |
            | project name            | Glomo                                                        | string           | Page View |
            | device mobile           | si                                                           | string           | Page View |
            | user userState          | logado                                                       | string           | Page View |
            | user segment global     | 003001                                                       | string           | Page View |
            | profile ID              | profileID                                                    | regexp named     | Page View |
            | user age                | age                                                          | regexp named     | Page View |
            | user gender             | gender                                                       | regexp named     | Page View |
            | internal campaign       |                                                              | empty array      | Page View |
            | optimization attributes |                                                              | empty array      | Page View |
            | application             |                                                              | empty str object | Page View |
            | products attributes     |                                                              | empty array      | Page View |

    @ANA_CD020
    @analytics
    @MX @manual @JIRA.GLOMOGL-20021
    @ios @android @web
    Scenario: Continues in summary check deposit screen and sees a modal error - nonExpectedCurrencyAmount
        Given a user with the following criteria
            | criteria                             |
            | account in pesos                     |
            | has 2 check deposited different days |
        And the user accesses the summary of the check deposit screen
        And the analytics interceptor service is initiated
        When the user continues the check release process
        Then the analytics events contains the following variables
            | item                    | value                                                              | type             | event     |
            | analytics               | analytics/glomo_base                                               | json schema      | Page View |
            | version DL              | 20250414_5.0                                                       | string           | Page View |
            | page name               | app:privada:personas:depositar cheque:error importe en otra divisa | string           | Page View |
            | level 1                 | depositar cheque                                                   | string           | Page View |
            | level 2                 | error importe en otra divisa                                       | string           | Page View |
            | error page              | error importe en otra divisa                                       | string           | Page View |
            | language                | ES                                                                 | string           | Page View |
            | page area               | privada                                                            | string           | Page View |
            | page intent             | transaccion                                                        | string           | Page View |
            | channel                 | online                                                             | string           | Page View |
            | page instance ID        | de                                                                 | string           | Page View |
            | page info version       | appVersion                                                         | regexp named     | Page View |
            | page segment            | personas                                                           | string           | Page View |
            | sysEnv                  | app                                                                | string           | Page View |
            | business unit           | BBVA Mexico                                                        | string           | Page View |
            | site app name           | App BBVA Mexico                                                    | string           | Page View |
            | project name            | Glomo                                                              | string           | Page View |
            | device mobile           | si                                                                 | string           | Page View |
            | user userState          | logado                                                             | string           | Page View |
            | user segment global     | 003001                                                             | string           | Page View |
            | profile ID              | profileID                                                          | regexp named     | Page View |
            | user age                | age                                                                | regexp named     | Page View |
            | user gender             | gender                                                             | regexp named     | Page View |
            | internal campaign       |                                                                    | empty array      | Page View |
            | optimization attributes |                                                                    | empty array      | Page View |
            | application             |                                                                    | empty str object | Page View |
            | products attributes     |                                                                    | empty array      | Page View |

    @ANA_CD021
    @analytics
    @MX @manual @JIRA.GLOMOGL-20021
    @ios @android @web
    Scenario: Continues in summary check deposit screen and sees a modal error - canceledAccount
        Given a user with the following criteria
            | criteria                             |
            | account in pesos                     |
            | has 2 check deposited different days |
        And the user accesses the summary of the check deposit screen
        And the analytics interceptor service is initiated
        When the user continues the check release process
        Then the analytics events contains the following variables
            | item                    | value                                                          | type             | event     |
            | analytics               | analytics/glomo_base                                           | json schema      | Page View |
            | version DL              | 20250414_5.0                                                   | string           | Page View |
            | page name               | app:privada:personas:depositar cheque:error en cuenta de cobro | string           | Page View |
            | level 1                 | depositar cheque                                               | string           | Page View |
            | level 2                 | error en cuenta de cobro                                       | string           | Page View |
            | error page              | error en cuenta de cobro                                       | string           | Page View |
            | language                | ES                                                             | string           | Page View |
            | page area               | privada                                                        | string           | Page View |
            | page intent             | transaccion                                                    | string           | Page View |
            | channel                 | online                                                         | string           | Page View |
            | page instance ID        | de                                                             | string           | Page View |
            | page info version       | appVersion                                                     | regexp named     | Page View |
            | page segment            | personas                                                       | string           | Page View |
            | sysEnv                  | app                                                            | string           | Page View |
            | business unit           | BBVA Mexico                                                    | string           | Page View |
            | site app name           | App BBVA Mexico                                                | string           | Page View |
            | project name            | Glomo                                                          | string           | Page View |
            | device mobile           | si                                                             | string           | Page View |
            | user userState          | logado                                                         | string           | Page View |
            | user segment global     | 003001                                                         | string           | Page View |
            | profile ID              | profileID                                                      | regexp named     | Page View |
            | user age                | age                                                            | regexp named     | Page View |
            | user gender             | gender                                                         | regexp named     | Page View |
            | internal campaign       |                                                                | empty array      | Page View |
            | optimization attributes |                                                                | empty array      | Page View |
            | application             |                                                                | empty str object | Page View |
            | products attributes     |                                                                | empty array      | Page View |

    @ANA_CD022
    @analytics
    @MX @manual @JIRA.GLOMOGL-20021
    @ios @android @web
    Scenario: Continues in summary check deposit screen and sees a modal error - unprotectedCheck
        Given a user with the following criteria
            | criteria                             |
            | account in pesos                     |
            | has 2 check deposited different days |
        And the user accesses the summary of the check deposit screen
        And the analytics interceptor service is initiated
        When the user continues the check release process
        Then the analytics events contains the following variables
            | item                    | value                                                          | type             | event     |
            | analytics               | analytics/glomo_base                                           | json schema      | Page View |
            | version DL              | 20250414_5.0                                                   | string           | Page View |
            | page name               | app:privada:personas:depositar cheque:error cheque no liberado | string           | Page View |
            | level 1                 | depositar cheque                                               | string           | Page View |
            | level 2                 | error cheque no liberado                                       | string           | Page View |
            | error page              | error cheque no liberado                                       | string           | Page View |
            | language                | ES                                                             | string           | Page View |
            | page area               | privada                                                        | string           | Page View |
            | page intent             | transaccion                                                    | string           | Page View |
            | channel                 | online                                                         | string           | Page View |
            | page instance ID        | de                                                             | string           | Page View |
            | page info version       | appVersion                                                     | regexp named     | Page View |
            | page segment            | personas                                                       | string           | Page View |
            | sysEnv                  | app                                                            | string           | Page View |
            | business unit           | BBVA Mexico                                                    | string           | Page View |
            | site app name           | App BBVA Mexico                                                | string           | Page View |
            | project name            | Glomo                                                          | string           | Page View |
            | device mobile           | si                                                             | string           | Page View |
            | user userState          | logado                                                         | string           | Page View |
            | user segment global     | 003001                                                         | string           | Page View |
            | profile ID              | profileID                                                      | regexp named     | Page View |
            | user age                | age                                                            | regexp named     | Page View |
            | user gender             | gender                                                         | regexp named     | Page View |
            | internal campaign       |                                                                | empty array      | Page View |
            | optimization attributes |                                                                | empty array      | Page View |
            | application             |                                                                | empty str object | Page View |
            | products attributes     |                                                                | empty array      | Page View |

    @ANA_CD023
    @analytics
    @MX @manual @JIRA.GLOMOGL-20021
    @ios @android @web
    Scenario: Continues in summary check deposit screen and sees a modal error - notHaveProtectionService
        Given a user with the following criteria
            | criteria                             |
            | account in pesos                     |
            | has 2 check deposited different days |
        And the user accesses the summary of the check deposit screen
        And the analytics interceptor service is initiated
        When the user continues the check release process
        Then the analytics events contains the following variables
            | item                    | value                                                                | type             | event     |
            | analytics               | analytics/glomo_base                                                 | json schema      | Page View |
            | version DL              | 20250414_5.0                                                         | string           | Page View |
            | page name               | app:privada:personas:depositar cheque:error medio de cobro no valido | string           | Page View |
            | level 1                 | depositar cheque                                                     | string           | Page View |
            | level 2                 | error medio de cobro no valido                                       | string           | Page View |
            | error page              | error medio de cobro no valido                                       | string           | Page View |
            | language                | ES                                                                   | string           | Page View |
            | page area               | privada                                                              | string           | Page View |
            | page intent             | transaccion                                                          | string           | Page View |
            | channel                 | online                                                               | string           | Page View |
            | page instance ID        | de                                                                   | string           | Page View |
            | page info version       | appVersion                                                           | regexp named     | Page View |
            | page segment            | personas                                                             | string           | Page View |
            | sysEnv                  | app                                                                  | string           | Page View |
            | business unit           | BBVA Mexico                                                          | string           | Page View |
            | site app name           | App BBVA Mexico                                                      | string           | Page View |
            | project name            | Glomo                                                                | string           | Page View |
            | device mobile           | si                                                                   | string           | Page View |
            | user userState          | logado                                                               | string           | Page View |
            | user segment global     | 003001                                                               | string           | Page View |
            | profile ID              | profileID                                                            | regexp named     | Page View |
            | user age                | age                                                                  | regexp named     | Page View |
            | user gender             | gender                                                               | regexp named     | Page View |
            | internal campaign       |                                                                      | empty array      | Page View |
            | optimization attributes |                                                                      | empty array      | Page View |
            | application             |                                                                      | empty str object | Page View |
            | products attributes     |                                                                      | empty array      | Page View |

    @ANA_CD024
    @analytics
    @MX @manual @JIRA.GLOMOGL-20021
    @ios @android @web
    Scenario: Continues in summary check deposit screen and sees a modal error - operationExceedingAllowedAmount
        Given a user with the following criteria
            | criteria                             |
            | account in pesos                     |
            | has 2 check deposited different days |
        And the user accesses the summary of the check deposit screen
        And the analytics interceptor service is initiated
        When the user continues the check release process
        Then the analytics events contains the following variables
            | item                    | value                                                             | type             | event     |
            | analytics               | analytics/glomo_base                                              | json schema      | Page View |
            | version DL              | 20250414_5.0                                                      | string           | Page View |
            | page name               | app:privada:personas:depositar cheque:error importe no autorizado | string           | Page View |
            | level 1                 | depositar cheque                                                  | string           | Page View |
            | level 2                 | error importe no autorizado                                       | string           | Page View |
            | error page              | error importe no autorizado                                       | string           | Page View |
            | language                | ES                                                                | string           | Page View |
            | page area               | privada                                                           | string           | Page View |
            | page intent             | transaccion                                                       | string           | Page View |
            | channel                 | online                                                            | string           | Page View |
            | page instance ID        | de                                                                | string           | Page View |
            | page info version       | appVersion                                                        | regexp named     | Page View |
            | page segment            | personas                                                          | string           | Page View |
            | sysEnv                  | app                                                               | string           | Page View |
            | business unit           | BBVA Mexico                                                       | string           | Page View |
            | site app name           | App BBVA Mexico                                                   | string           | Page View |
            | project name            | Glomo                                                             | string           | Page View |
            | device mobile           | si                                                                | string           | Page View |
            | user userState          | logado                                                            | string           | Page View |
            | user segment global     | 003001                                                            | string           | Page View |
            | profile ID              | profileID                                                         | regexp named     | Page View |
            | user age                | age                                                               | regexp named     | Page View |
            | user gender             | gender                                                            | regexp named     | Page View |
            | internal campaign       |                                                                   | empty array      | Page View |
            | optimization attributes |                                                                   | empty array      | Page View |
            | application             |                                                                   | empty str object | Page View |
            | products attributes     |                                                                   | empty array      | Page View |

    @ANA_CD025
    @analytics
    @MX @manual @JIRA.GLOMOGL-20021
    @ios @android @web
    Scenario: Continues in summary check deposit screen and sees a modal error - checkExpired
        Given a user with the following criteria
            | criteria                             |
            | account in pesos                     |
            | has 2 check deposited different days |
        And the user accesses the summary of the check deposit screen
        And the analytics interceptor service is initiated
        When the user continues the check release process
        Then the analytics events contains the following variables
            | item                    | value                                                          | type             | event     |
            | analytics               | analytics/glomo_base                                           | json schema      | Page View |
            | version DL              | 20250414_5.0                                                   | string           | Page View |
            | page name               | app:privada:personas:depositar cheque:error liberacion vencida | string           | Page View |
            | level 1                 | depositar cheque                                               | string           | Page View |
            | level 2                 | error liberacion vencida                                       | string           | Page View |
            | error page              | error liberacion vencida                                       | string           | Page View |
            | language                | ES                                                             | string           | Page View |
            | page area               | privada                                                        | string           | Page View |
            | page intent             | transaccion                                                    | string           | Page View |
            | channel                 | online                                                         | string           | Page View |
            | page instance ID        | de                                                             | string           | Page View |
            | page info version       | appVersion                                                     | regexp named     | Page View |
            | page segment            | personas                                                       | string           | Page View |
            | sysEnv                  | app                                                            | string           | Page View |
            | business unit           | BBVA Mexico                                                    | string           | Page View |
            | site app name           | App BBVA Mexico                                                | string           | Page View |
            | project name            | Glomo                                                          | string           | Page View |
            | device mobile           | si                                                             | string           | Page View |
            | user userState          | logado                                                         | string           | Page View |
            | user segment global     | 003001                                                         | string           | Page View |
            | profile ID              | profileID                                                      | regexp named     | Page View |
            | user age                | age                                                            | regexp named     | Page View |
            | user gender             | gender                                                         | regexp named     | Page View |
            | internal campaign       |                                                                | empty array      | Page View |
            | optimization attributes |                                                                | empty array      | Page View |
            | application             |                                                                | empty str object | Page View |
            | products attributes     |                                                                | empty array      | Page View |

    @ANA_CD026
    @analytics
    @MX @manual @JIRA.GLOMOGL-20021
    @ios @android @web
    Scenario: Continues in summary check deposit screen and sees a modal error - invalidCheck
        Given a user with the following criteria
            | criteria                             |
            | account in pesos                     |
            | has 2 check deposited different days |
        And the user accesses the summary of the check deposit screen
        And the analytics interceptor service is initiated
        When the user continues the check release process
        Then the analytics events contains the following variables
            | item                    | value                                                                   | type             | event     |
            | analytics               | analytics/glomo_base                                                    | json schema      | Page View |
            | version DL              | 20250414_5.0                                                            | string           | Page View |
            | page name               | app:privada:personas:depositar cheque:error el cheque no puede cobrarse | string           | Page View |
            | level 1                 | depositar cheque                                                        | string           | Page View |
            | level 2                 | error el cheque no puede cobrarse                                       | string           | Page View |
            | error page              | error el cheque no puede cobrarse                                       | string           | Page View |
            | language                | ES                                                                      | string           | Page View |
            | page area               | privada                                                                 | string           | Page View |
            | page intent             | transaccion                                                             | string           | Page View |
            | channel                 | online                                                                  | string           | Page View |
            | page instance ID        | de                                                                      | string           | Page View |
            | page info version       | appVersion                                                              | regexp named     | Page View |
            | page segment            | personas                                                                | string           | Page View |
            | sysEnv                  | app                                                                     | string           | Page View |
            | business unit           | BBVA Mexico                                                             | string           | Page View |
            | site app name           | App BBVA Mexico                                                         | string           | Page View |
            | project name            | Glomo                                                                   | string           | Page View |
            | device mobile           | si                                                                      | string           | Page View |
            | user userState          | logado                                                                  | string           | Page View |
            | user segment global     | 003001                                                                  | string           | Page View |
            | profile ID              | profileID                                                               | regexp named     | Page View |
            | user age                | age                                                                     | regexp named     | Page View |
            | user gender             | gender                                                                  | regexp named     | Page View |
            | internal campaign       |                                                                         | empty array      | Page View |
            | optimization attributes |                                                                         | empty array      | Page View |
            | application             |                                                                         | empty str object | Page View |
            | products attributes     |                                                                         | empty array      | Page View |

    @ANA_CD027
    @analytics
    @MX @manual @JIRA.GLOMOGL-20021
    @ios @android @web
    Scenario: Continues in summary check deposit screen and sees a modal error - accountBlocked
        Given a user with the following criteria
            | criteria                             |
            | account in pesos                     |
            | has 2 check deposited different days |
        And the user accesses the summary of the check deposit screen
        And the analytics interceptor service is initiated
        When the user continues the check release process
        Then the analytics events contains the following variables
            | item                    | value                                                 | type             | event     |
            | analytics               | analytics/glomo_base                                  | json schema      | Page View |
            | version DL              | 20250414_5.0                                          | string           | Page View |
            | page name               | app:privada:personas:depositar cheque:error en cuenta | string           | Page View |
            | level 1                 | depositar cheque                                      | string           | Page View |
            | level 2                 | error en cuenta                                       | string           | Page View |
            | error page              | error en cuenta                                       | string           | Page View |
            | language                | ES                                                    | string           | Page View |
            | page area               | privada                                               | string           | Page View |
            | page intent             | transaccion                                           | string           | Page View |
            | channel                 | online                                                | string           | Page View |
            | page instance ID        | de                                                    | string           | Page View |
            | page info version       | appVersion                                            | regexp named     | Page View |
            | page segment            | personas                                              | string           | Page View |
            | sysEnv                  | app                                                   | string           | Page View |
            | business unit           | BBVA Mexico                                           | string           | Page View |
            | site app name           | App BBVA Mexico                                       | string           | Page View |
            | project name            | Glomo                                                 | string           | Page View |
            | device mobile           | si                                                    | string           | Page View |
            | user userState          | logado                                                | string           | Page View |
            | user segment global     | 003001                                                | string           | Page View |
            | profile ID              | profileID                                             | regexp named     | Page View |
            | user age                | age                                                   | regexp named     | Page View |
            | user gender             | gender                                                | regexp named     | Page View |
            | internal campaign       |                                                       | empty array      | Page View |
            | optimization attributes |                                                       | empty array      | Page View |
            | application             |                                                       | empty str object | Page View |
            | products attributes     |                                                       | empty array      | Page View |

    @ANA_EVENT_CD028
    @analytics
    @MX @manual @JIRA.GLOMOGL-20021
    @ios @android @web @!vbank
    Scenario: Continues in summary check deposit screen and sees a modal error - invalidAmount
        Given a user with the following criteria
            | criteria                             |
            | account in pesos                     |
            | has 2 check deposited different days |
        And the user accesses the summary of the check deposit screen
        And the analytics interceptor service is initiated
        When the user continues the check release process
        Then the analytics events contains the following variables
            | item                    | value                                                        | type             | event     |
            | analytics               | analytics/glomo_base                                         | json schema      | Page View |
            | version DL              | 20250414_5.0                                                 | string           | Page View |
            | page name               | app:privada:personas:depositar cheque:error importe excedido | string           | Page View |
            | level 1                 | depositar cheque                                             | string           | Page View |
            | level 2                 | error importe excedido                                       | string           | Page View |
            | error page              | error importe excedido                                       | string           | Page View |
            | language                | ES                                                           | string           | Page View |
            | page area               | privada                                                      | string           | Page View |
            | page intent             | transaccion                                                  | string           | Page View |
            | channel                 | online                                                       | string           | Page View |
            | page instance ID        | de                                                           | string           | Page View |
            | page info version       | appVersion                                                   | regexp named     | Page View |
            | page segment            | personas                                                     | string           | Page View |
            | sysEnv                  | app                                                          | string           | Page View |
            | business unit           | BBVA Mexico                                                  | string           | Page View |
            | site app name           | App BBVA Mexico                                              | string           | Page View |
            | project name            | Glomo                                                        | string           | Page View |
            | device mobile           | si                                                           | string           | Page View |
            | user userState          | logado                                                       | string           | Page View |
            | user segment global     | 003001                                                       | string           | Page View |
            | profile ID              | profileID                                                    | regexp named     | Page View |
            | user age                | age                                                          | regexp named     | Page View |
            | user gender             | gender                                                       | regexp named     | Page View |
            | internal campaign       |                                                              | empty array      | Page View |
            | optimization attributes |                                                              | empty array      | Page View |
            | application             |                                                              | empty str object | Page View |
            | products attributes     |                                                              | empty array      | Page View |

    @ANA_EVENT_CD029
    @analytics
    @MX @manual @JIRA.GLOMOGL-20021
    @ios @android @web @!vbank
    Scenario: Continues in summary check deposit screen and sees a modal error - checksDocumentScanner
        Given a user with the following criteria
            | criteria                             |
            | account in pesos                     |
            | has 2 check deposited different days |
        And the user accesses the summary of the check deposit screen
        And the analytics interceptor service is initiated
        When the user continues the check release process
        Then the analytics events contains the following variables
            | item                    | value                                                         | type             | event     |
            | analytics               | analytics/glomo_base                                          | json schema      | Page View |
            | version DL              | 20250414_5.0                                                  | string           | Page View |
            | page name               | app:privada:personas:depositar cheque:error en digitalizacion | string           | Page View |
            | level 1                 | depositar cheque                                              | string           | Page View |
            | level 2                 | error en digitalizacion                                       | string           | Page View |
            | error page              | error en digitalizacion                                       | string           | Page View |
            | language                | ES                                                            | string           | Page View |
            | page area               | privada                                                       | string           | Page View |
            | page intent             | transaccion                                                   | string           | Page View |
            | channel                 | online                                                        | string           | Page View |
            | page instance ID        | de                                                            | string           | Page View |
            | page info version       | appVersion                                                    | regexp named     | Page View |
            | page segment            | personas                                                      | string           | Page View |
            | sysEnv                  | app                                                           | string           | Page View |
            | business unit           | BBVA Mexico                                                   | string           | Page View |
            | site app name           | App BBVA Mexico                                               | string           | Page View |
            | project name            | Glomo                                                         | string           | Page View |
            | device mobile           | si                                                            | string           | Page View |
            | user userState          | logado                                                        | string           | Page View |
            | user segment global     | 003001                                                        | string           | Page View |
            | profile ID              | profileID                                                     | regexp named     | Page View |
            | user age                | age                                                           | regexp named     | Page View |
            | user gender             | gender                                                        | regexp named     | Page View |
            | internal campaign       |                                                               | empty array      | Page View |
            | optimization attributes |                                                               | empty array      | Page View |
            | application             |                                                               | empty str object | Page View |
            | products attributes     |                                                               | empty array      | Page View |

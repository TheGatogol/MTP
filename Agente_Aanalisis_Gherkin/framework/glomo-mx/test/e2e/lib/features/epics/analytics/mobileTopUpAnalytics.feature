@mobileTopUp
Feature: Analytics - Mobile Top up

    @ANA_EVENT_MTU001
    @analytics
    @MX
    @vbank @backend(test)
    @ios @android @web
    @web-done
    @vbank-modified
    Scenario: Mobile Top Up - APP CLICK STARTED
        Given a user with the following criteria
            | criteria                    |
            | profile user mobile         |
            | account insufficent balance |
        And the user accesses to operationals page
        And the analytics interceptor service is initiated
        When the user accesses to page top up
        Then the analytics events contains the following variables
            | item                     | value                | type         | event              |
            | analytics                | analytics/glomo_base | json schema  | App On Click Start |
            | version DL               | 20250414_5.0         | string       | App On Click Start |
            | level 1                  | posicion global      | string       | App On Click Start |
            | language                 | ES                   | string       | App On Click Start |
            | page area                | privada              | string       | App On Click Start |
            | channel                  | online               | string       | App On Click Start |
            | page instance ID         | de                   | string       | App On Click Start |
            | page info version        | appVersion           | regexp named | App On Click Start |
            | page segment             | personas             | string       | App On Click Start |
            | sysEnv                   | app                  | string       | App On Click Start |
            | business unit            | BBVA Mexico          | string       | App On Click Start |
            | site app name            | App BBVA Mexico      | string       | App On Click Start |
            | project name             | Glomo                | string       | App On Click Start |
            | device mobile            | si                   | string       | App On Click Start |
            | user userState           | logado               | string       | App On Click Start |
            | user segment global      | 003001               | string       | App On Click Start |
            | user age                 | age                  | regexp named | App On Click Start |
            | user gender              | gender               | regexp named | App On Click Start |
            | global application       | mobile top up        | string       | App On Click Start |
            | application name         | recargar celular     | string       | App On Click Start |
            | application type         | operativa            | string       | App On Click Start |
            | application step         | recargas             | string       | App On Click Start |
            | fulfillment model        | online               | string       | App On Click Start |
            | product primary category | cuentas              | string       | App On Click Start |
            | internal campaign        |                      | empty array  | App On Click Start |
            | optimization attributes  |                      | empty array  | App On Click Start |

    @ANA_EVENT_MTU002
    @analytics
    @MX
    @vbank @backend(test)
    @ios @android @web
    @web-done
    @vbank-modified
    Scenario: Mobile Top Up - APP PAGE VISIT
        Given a user with the following criteria
            | criteria            |
            | profile user mobile |
            | accounts            |
        And the user accesses to operationals page
        And the analytics interceptor service is initiated
        When the user accesses to page top up
        Then the analytics events contains the following variables
            | item                     | value                                                               | type         | event          |
            | analytics                | analytics/glomo_base                                                | json schema  | App Page Visit |
            | version DL               | 20250414_5.0                                                        | string       | App Page Visit |
            | page name                | app:privada:personas:cuentas:recargar celular:1 seleccion cuenta    | string       | App Page Visit |
            | level 1                  | cuentas                                                             | string       | App Page Visit |
            | level 2                  | recargar celular                                                    | string       | App Page Visit |
            | level 3                  | 1 seleccion cuenta                                                  | string       | App Page Visit |
            | language                 | ES                                                                  | string       | App Page Visit |
            | page area                | privada                                                             | string       | App Page Visit |
            | page intent              | transaccion                                                         | string       | App Page Visit |
            | channel                  | online                                                              | string       | App Page Visit |
            | page instance ID         | de                                                                  | string       | App Page Visit |
            | page info version        | appVersion                                                          | regexp named | App Page Visit |
            | page segment             | personas                                                            | string       | App Page Visit |
            | sysEnv                   | app                                                                 | string       | App Page Visit |
            | business unit            | BBVA Mexico                                                         | string       | App Page Visit |
            | site app name            | App BBVA Mexico                                                     | string       | App Page Visit |
            | project name             | Glomo                                                               | string       | App Page Visit |
            | device mobile            | si                                                                  | string       | App Page Visit |
            | user userState           | logado                                                              | string       | App Page Visit |
            | user segment global      | 003001                                                              | string       | App Page Visit |
            | user age                 | age                                                                 | regexp named | App Page Visit |
            | user gender              | gender                                                              | regexp named | App Page Visit |
            | global application       | mobile top up                                                       | string       | App Page Visit |
            | application name         | recargar celular                                                    | string       | App Page Visit |
            | application type         | operativa                                                           | string       | App Page Visit |
            | application step         | 1 seleccion cuenta                                                  | string       | App Page Visit |
            | fulfillment model        | online                                                              | string       | App Page Visit |
            | product primary category | cuentas                                                             | string       | App Page Visit |
            | internal campaign        |                                                                     | empty array  | App Page Visit |
            | optimization attributes  |                                                                     | empty array  | App Page Visit |

    @ANA_EVENT_MTU003
    @analytics
    @MX
    @vbank @backend(test)
    @ios @android @web
    @web-done
    @vbank-modified
    Scenario: Mobile Top Up - APP STARTED
        Given a user with the following criteria
            | criteria            |
            | profile user mobile |
            | accounts            |
        And the user accesses to operationals page
        And the analytics interceptor service is initiated
        When the user accesses to page top up
        And the user "accesses view more accounts" in step 1
        Then the analytics events contains the following variables
            | item                     | value                                                               | type         | event       |
            | analytics                | analytics/glomo_base                                                | json schema  | App Started |
            | version DL               | 20250414_5.0                                                        | string       | App Started |
            | page name                | app:privada:personas:cuentas:recargar celular:1 seleccion cuenta    | string       | App Started |
            | level 1                  | cuentas                                                             | string       | App Started |
            | level 2                  | recargar celular                                                    | string       | App Started |
            | language                 | ES                                                                  | string       | App Started |
            | level 3                  | 1 seleccion cuenta                                                  | string       | App Started |
            | page area                | privada                                                             | string       | App Started |
            | page intent              | transaccion                                                         | string       | App Started |
            | channel                  | online                                                              | string       | App Started |
            | page instance ID         | de                                                                  | string       | App Started |
            | page info version        | appVersion                                                          | regexp named | App Started |
            | page segment             | personas                                                            | string       | App Started |
            | sysEnv                   | app                                                                 | string       | App Started |
            | business unit            | BBVA Mexico                                                         | string       | App Started |
            | site app name            | App BBVA Mexico                                                     | string       | App Started |
            | project name             | Glomo                                                               | string       | App Started |
            | device mobile            | si                                                                  | string       | App Started |
            | user userState           | logado                                                              | string       | App Started |
            | user segment global      | 003001                                                              | string       | App Started |
            | user age                 | age                                                                 | regexp named | App Started |
            | user gender              | gender                                                              | regexp named | App Started |
            | global application       | mobile top up                                                       | string       | App Started |
            | application name         | recargar celular                                                    | string       | App Started |
            | application type         | operativa                                                           | string       | App Started |
            | application step         | ver todas                                                           | string       | App Started |
            | fulfillment model        | online                                                              | string       | App Started |
            | product primary category | cuentas                                                             | string       | App Started |
            | internal campaign        |                                                                     | empty array  | App Started |
            | optimization attributes  |                                                                     | empty array  | App Started |

    @ANA_EVENT_MTU004
    @analytics
    @MX
    @vbank @backend(test)
    @ios @android @web
    @web-done
    @vbank-modified
    Scenario: Mobile Top Up - APP STEP 2
        Given a user with the following criteria
            | criteria            |
            | profile user mobile |
            | account             |
        And the user accesses to operationals page
        And the analytics interceptor service is initiated
        When the user accesses to page top up
        And the user accesses the "my phone number" from mobile top up
        Then the analytics events contains the following variables
            | item                     | value                                                           | type         | event      |
            | analytics                | analytics/glomo_base                                            | json schema  | App Step 2 |
            | version DL               | 20250414_5.0                                                    | string       | App Step 2 |
            | page name                | app:privada:personas:cuentas:recargar celular:2 destinatario    | string       | App Step 2 |
            | level 1                  | cuentas                                                         | string       | App Step 2 |
            | level 2                  | recargar celular                                                | string       | App Step 2 |
            | level 3                  | 2 destinatario                                                  | string       | App Step 2 |
            | language                 | ES                                                              | string       | App Step 2 |
            | page area                | privada                                                         | string       | App Step 2 |
            | page intent              | transaccion                                                     | string       | App Step 2 |
            | channel                  | online                                                          | string       | App Step 2 |
            | page instance ID         | de                                                              | string       | App Step 2 |
            | page info version        | appVersion                                                      | regexp named | App Step 2 |
            | page segment             | personas                                                        | string       | App Step 2 |
            | sysEnv                   | app                                                             | string       | App Step 2 |
            | business unit            | BBVA Mexico                                                     | string       | App Step 2 |
            | site app name            | App BBVA Mexico                                                 | string       | App Step 2 |
            | project name             | Glomo                                                           | string       | App Step 2 |
            | device mobile            | si                                                              | string       | App Step 2 |
            | user userState           | logado                                                          | string       | App Step 2 |
            | user segment global      | 003001                                                          | string       | App Step 2 |
            | user age                 | age                                                             | regexp named | App Step 2 |
            | user gender              | gender                                                          | regexp named | App Step 2 |
            | global application       | mobile top up                                                   | string       | App Step 2 |
            | application name         | recargar celular                                                | string       | App Step 2 |
            | application type         | operativa                                                       | string       | App Step 2 |
            | application step         | 2 destinatario                                                  | string       | App Step 2 |
            | fulfillment model        | online                                                          | string       | App Step 2 |
            | product primary category | cuentas                                                         | string       | App Step 2 |
            | internal campaign        |                                                                 | empty array  | App Step 2 |
            | optimization attributes  |                                                                 | empty array  | App Step 2 |

    @ANA_EVENT_MTU005
    @analytics
    @MX
    @vbank @backend(test)
    @ios @android @web
    @web-done
    @vbank-modified
    Scenario Outline: Mobile Top Up - APP STEP 3
        Given a user with the following criteria
            | criteria            |
            | profile user mobile |
            | account             |
        And the user accesses to operationals page
        And the analytics interceptor service is initiated
        When the user accesses to page top up
        And the user accesses the "my phone number" from mobile top up
        And the user select the company "<company>"
        Then the analytics events contains the following variables
            | item                     | value                                                    | type         | event      |
            | analytics                | analytics/glomo_base                                     | json schema  | App Step 3 |
            | version DL               | 20250414_5.0                                             | string       | App Step 3 |
            | page name                | app:privada:personas:cuentas:recargar celular:3 monto    | string       | App Step 3 |
            | level 1                  | cuentas                                                  | string       | App Step 3 |
            | level 2                  | recargar celular                                         | string       | App Step 3 |
            | level 3                  | 3 monto                                                  | string       | App Step 3 |
            | language                 | ES                                                       | string       | App Step 3 |
            | page area                | privada                                                  | string       | App Step 3 |
            | page intent              | transaccion                                              | string       | App Step 3 |
            | channel                  | online                                                   | string       | App Step 3 |
            | page instance ID         | de                                                       | string       | App Step 3 |
            | page info version        | appVersion                                               | regexp named | App Step 3 |
            | page segment             | personas                                                 | string       | App Step 3 |
            | sysEnv                   | app                                                      | string       | App Step 3 |
            | business unit            | BBVA Mexico                                              | string       | App Step 3 |
            | site app name            | App BBVA Mexico                                          | string       | App Step 3 |
            | project name             | Glomo                                                    | string       | App Step 3 |
            | device mobile            | si                                                       | string       | App Step 3 |
            | user userState           | logado                                                   | string       | App Step 3 |
            | user segment global      | 003001                                                   | string       | App Step 3 |
            | user age                 | age                                                      | regexp named | App Step 3 |
            | user gender              | gender                                                   | regexp named | App Step 3 |
            | global application       | mobile top up                                            | string       | App Step 3 |
            | application name         | recargar celular                                         | string       | App Step 3 |
            | application type         | operativa                                                | string       | App Step 3 |
            | application typology     | unefon                                                   | string       | App Step 3 |
            | application step         | 3 monto                                                  | string       | App Step 3 |
            | fulfillment model        | online                                                   | string       | App Step 3 |
            | product primary category | cuentas                                                  | string       | App Step 3 |
            | internal campaign        |                                                          | empty array  | App Step 3 |
            | optimization attributes  |                                                          | empty array  | App Step 3 |

        Examples:
            | company |
            | UNEFON  |

    @ANA_EVENT_MTU006
    @analytics
    @MX
    @vbank @backend(test)
    @ios @android @web
    @web-done
    @vbank-modified
    Scenario Outline: Mobile Top Up - APP STEP 4
        Given a user with the following criteria
            | criteria            |
            | profile user mobile |
            | account             |
        And the user accesses to operationals page
        And the analytics interceptor service is initiated
        When the user accesses to page top up
        And the user accesses the "my phone number" from mobile top up
        And the user select the company "<company>"
        And the user selects the amount of "<amount>" in step 3 to access "confirm mobile top-up" screen
        Then the analytics events contains the following variables
            | item                     | value                                                           | type         | event      |
            | analytics                | analytics/glomo_base                                            | json schema  | App Step 4 |
            | version DL               | 20250414_5.0                                                    | string       | App Step 4 |
            | page name                | app:privada:personas:cuentas:recargar celular:4 confirmacion    | string       | App Step 4 |
            | level 1                  | cuentas                                                         | string       | App Step 4 |
            | level 2                  | recargar celular                                                | string       | App Step 4 |
            | level 3                  | 4 confirmacion                                                  | string       | App Step 4 |
            | language                 | ES                                                              | string       | App Step 4 |
            | page area                | privada                                                         | string       | App Step 4 |
            | page intent              | transaccion                                                     | string       | App Step 4 |
            | channel                  | online                                                          | string       | App Step 4 |
            | page instance ID         | de                                                              | string       | App Step 4 |
            | page info version        | appVersion                                                      | regexp named | App Step 4 |
            | page segment             | personas                                                        | string       | App Step 4 |
            | sysEnv                   | app                                                             | string       | App Step 4 |
            | business unit            | BBVA Mexico                                                     | string       | App Step 4 |
            | site app name            | App BBVA Mexico                                                 | string       | App Step 4 |
            | project name             | Glomo                                                           | string       | App Step 4 |
            | device mobile            | si                                                              | string       | App Step 4 |
            | user userState           | logado                                                          | string       | App Step 4 |
            | user segment global      | 003001                                                          | string       | App Step 4 |
            | user age                 | age                                                             | regexp named | App Step 4 |
            | user gender              | gender                                                          | regexp named | App Step 4 |
            | global application       | mobile top up                                                   | string       | App Step 4 |
            | application name         | recargar celular                                                | string       | App Step 4 |
            | application type         | operativa                                                       | string       | App Step 4 |
            | application typology     | unefon                                                          | string       | App Step 4 |
            | application step         | 4 confirmacion                                                  | string       | App Step 4 |
            | fulfillment model        | online                                                          | string       | App Step 4 |
            | product primary category | cuentas                                                         | string       | App Step 4 |
            | product currency         | MXN                                                             | string       | App Step 4 |
            | internal campaign        |                                                                 | empty array  | App Step 4 |
            | optimization attributes  |                                                                 | empty array  | App Step 4 |
        Examples:
            | company | amount |
            | UNEFON  | 50     |

    @ANA_EVENT_MTU007
    @analytics
    @MX
    @vbank @backend(test)
    @ios @android @web
    @web-done
    @vbank-modified
    Scenario: Mobile Top Up - APP STEP 5
        Given a user with the following criteria
            | criteria            |
            | profile user mobile |
            | account             |
        And the user accesses to operationals page
        And the analytics interceptor service is initiated
        When the user accesses to page top up
        And the user accesses the "my phone number" from mobile top up
        And the user select the company "UNEFON"
        And the user selects the amount of "50" in step 3 to access "sign operation" screen
        Then the analytics events contains the following variables
            | item                     | value                                                  | type         | event      |
            | analytics                | analytics/glomo_base                                   | json schema  | App Step 5 |
            | version DL               | 20250414_5.0                                           | string       | App Step 5 |
            | page name                | app:privada:personas:cuentas:recargar celular:5 otp    | string       | App Step 5 |
            | level 1                  | cuentas                                                | string       | App Step 5 |
            | level 2                  | recargar celular                                       | string       | App Step 5 |
            | level 3                  | 5 otp                                                  | string       | App Step 5 |
            | language                 | ES                                                     | string       | App Step 5 |
            | page area                | privada                                                | string       | App Step 5 |
            | page intent              | transaccion                                            | string       | App Step 5 |
            | channel                  | online                                                 | string       | App Step 5 |
            | page instance ID         | de                                                     | string       | App Step 5 |
            | page info version        | appVersion                                             | regexp named | App Step 5 |
            | page segment             | personas                                               | string       | App Step 5 |
            | sysEnv                   | app                                                    | string       | App Step 5 |
            | business unit            | BBVA Mexico                                            | string       | App Step 5 |
            | site app name            | App BBVA Mexico                                        | string       | App Step 5 |
            | project name             | Glomo                                                  | string       | App Step 5 |
            | device mobile            | si                                                     | string       | App Step 5 |
            | user userState           | logado                                                 | string       | App Step 5 |
            | user segment global      | 003001                                                 | string       | App Step 5 |
            | user age                 | age                                                    | regexp named | App Step 5 |
            | user gender              | gender                                                 | regexp named | App Step 5 |
            | global application       | mobile top up                                          | string       | App Step 5 |
            | application name         | recargar celular                                       | string       | App Step 5 |
            | application type         | operativa                                              | string       | App Step 5 |
            | application typology     | unefon                                                 | string       | App Step 5 |
            | application step         | 5 otp                                                  | string       | App Step 5 |
            | fulfillment model        | online                                                 | string       | App Step 5 |
            | custom fields            | firma:token                                            | string       | App Step 5 |
            | product primary category | cuentas                                                | string       | App Step 5 |
            | product currency         | MXN                                                    | string       | App Step 5 |
            | internal campaign        |                                                        | empty array  | App Step 5 |
            | optimization attributes  |                                                        | empty array  | App Step 5 |

    @ANA_EVENT_MTU008
    @analytics
    @MX
    @vbank @backend(test)
    @ios @android @web
    @web-done
    @vbank-modified
    Scenario: Mobile Top Up - SELECT COMPANY
        Given a user with the following criteria
            | criteria            |
            | profile user mobile |
            | account             |
        And the user accesses to operationals page
        When the user accesses to page top up
        And the analytics interceptor service is initiated
        And the user accesses the "my phone number" from mobile top up
        Then the analytics events contains the following variables
            | item                    | value                                                              | type             | event     |
            | analytics               | analytics/glomo_base                                               | json schema      | Page View |
            | version DL              | 20250414_5.0                                                       | string           | Page View |
            | page name               | app:privada:personas:cuentas:recargar celular:ingresar compania    | string           | Page View |
            | level 1                 | cuentas                                                            | string           | Page View |
            | level 2                 | recargar celular                                                   | string           | Page View |
            | level 3                 | ingresar compania                                                  | string           | Page View |
            | language                | ES                                                                 | string           | Page View |
            | page area               | privada                                                            | string           | Page View |
            | page intent             | transaccion                                                        | string           | Page View |
            | channel                 | online                                                             | string           | Page View |
            | page instance ID        | de                                                                 | string           | Page View |
            | version DL              | 20250414_5.0                                                       | string           | Page View |
            | page info version       | appVersion                                                         | regexp named     | Page View |
            | page segment            | personas                                                           | string           | Page View |
            | sysEnv                  | app                                                                | string           | Page View |
            | business unit           | BBVA Mexico                                                        | string           | Page View |
            | site app name           | App BBVA Mexico                                                    | string           | Page View |
            | project name            | Glomo                                                              | string           | Page View |
            | device mobile           | si                                                                 | string           | Page View |
            | user userState          | logado                                                             | string           | Page View |
            | user segment global     | 003001                                                             | string           | Page View |
            | user age                | age                                                                | regexp named     | Page View |
            | user gender             | gender                                                             | regexp named     | Page View |
            | internal campaign       |                                                                    | empty array      | Page View |
            | optimization attributes |                                                                    | empty array      | Page View |
            | application             |                                                                    | empty str object | Page View |
            | products attributes     |                                                                    | empty array      | Page View |

    @ANA_EVENT_MTU009
    @analytics
    @MX
    @vbank @backend(test)
    @ios @android @web
    @web-done
    @vbank-modified
    Scenario: Mobile Top Up -  NEW NUMBER
        Given a user with the following criteria
            | criteria            |
            | profile user mobile |
            | account             |
        And the user accesses to operationals page
        When the user accesses to page top up
        And the analytics interceptor service is initiated
        And the user accesses the "my new phone number" from mobile top up
        Then the analytics events contains the following variables
            | item                    | value                                                           | type             | event     |
            | analytics               | analytics/glomo_base                                            | json schema      | Page View |
            | version DL              | 20250414_5.0                                                    | string           | Page View |
            | page name               | app:privada:personas:cuentas:recargar celular:nuevo celular     | string           | Page View |
            | level 1                 | cuentas                                                         | string           | Page View |
            | level 2                 | recargar celular                                                | string           | Page View |
            | language                | ES                                                              | string           | Page View |
            | page area               | privada                                                         | string           | Page View |
            | page intent             | transaccion                                                     | string           | Page View |
            | channel                 | online                                                          | string           | Page View |
            | page instance ID        | de                                                              | string           | Page View |
            | version DL              | 20250414_5.0                                                    | string           | Page View |
            | page info version       | appVersion                                                      | regexp named     | Page View |
            | page segment            | personas                                                        | string           | Page View |
            | sysEnv                  | app                                                             | string           | Page View |
            | business unit           | BBVA Mexico                                                     | string           | Page View |
            | site app name           | App BBVA Mexico                                                 | string           | Page View |
            | project name            | Glomo                                                           | string           | Page View |
            | device mobile           | si                                                              | string           | Page View |
            | user userState          | logado                                                          | string           | Page View |
            | user segment global     | 003001                                                          | string           | Page View |
            | user age                | age                                                             | regexp named     | Page View |
            | user gender             | gender                                                          | regexp named     | Page View |
            | internal campaign       |                                                                 | empty array      | Page View |
            | optimization attributes |                                                                 | empty array      | Page View |
            | application             |                                                                 | empty str object | Page View |
            | products attributes     |                                                                 | empty array      | Page View |

    @ANA_EVENT_MTU010
    @analytics
    @MX
    @vbank @backend(test)
    @ios @android @web
    @web-done
    @vbank-modified
    Scenario: Mobile Top Up - SITE ERROR
        Given a user with the following criteria
            | criteria                    |
            | profile user mobile         |
            | account insufficent balance |
        And the user accesses to operationals page
        And the analytics interceptor service is initiated
        When the user accesses to page top up
        Then the analytics events contains the following variables
            | item                     | value                                                                | type         | event      |
            | analytics                | analytics/glomo_base                                                 | json schema  | Site Error |
            | page name                | app:privada:personas:cuentas:recargar celular:1 seleccion cuenta     | string       | Site Error |
            | level 1                  | cuentas                                                              | string       | Site Error |
            | level 2                  | recargar celular                                                     | string       | Site Error |
            | level 3                  | 1 seleccion cuenta                                                   | string       | Site Error |
            | language                 | ES                                                                   | string       | Site Error |
            | page area                | privada                                                              | string       | Site Error |
            | page intent              | transaccion                                                          | string       | Site Error |
            | channel                  | online                                                               | string       | Site Error |
            | page instance ID         | de                                                                   | string       | Site Error |
            | version DL               | 20250414_5.0                                                         | string       | Site Error |
            | page info version        | appVersion                                                           | regexp named | Site Error |
            | page segment             | personas                                                             | string       | Site Error |
            | sysEnv                   | app                                                                  | string       | Site Error |
            | business unit            | BBVA Mexico                                                          | string       | Site Error |
            | site app name            | App BBVA Mexico                                                      | string       | Site Error |
            | project name             | Glomo                                                                | string       | Site Error |
            | device mobile            | si                                                                   | string       | Site Error |
            | user userState           | logado                                                               | string       | Site Error |
            | user segment global      | 003001                                                               | string       | Site Error |
            | user age                 | age                                                                  | regexp named | Site Error |
            | user gender              | gender                                                               | regexp named | Site Error |
            | internal campaign        |                                                                      | empty array  | Site Error |
            | optimization attributes  |                                                                      | empty array  | Site Error |
            | site error               | error saldo insuficiente                                             | string       | Site Error |

    @ANA_EVENT_MTU011
    @analytics
    @MX
    @vbank @backend(test)
    @ios @android @web
    @web-done
    @vbank-modified
    Scenario Outline: Mobile Top Up - APP COMPLETED <status>
        Given a user with the following criteria
            | criteria            |
            | profile user mobile |
            | account             |
        And the user accesses to operationals page
        And the analytics interceptor service is initiated
        When the user accesses to page top up
        And the user accesses the "my phone number" from mobile top up
        And the user select the company "<company>"
        And the user selects the amount of "<amount>" in step 3 to access "the review" screen
        Then the analytics events contains the following variables
            | item                     | value                                                           | type         | event         |
            | analytics                | analytics/glomo_base                                            | json schema  | App Completed |
            | version DL               | 20250414_5.0                                                    | string       | App Completed |
            | page name                | app:privada:personas:cuentas:recargar celular:pagina exitosa    | string       | App Completed |
            | level 1                  | cuentas                                                         | string       | App Completed |
            | level 2                  | recargar celular                                                | string       | App Completed |
            | level 3                  | pagina exitosa                                                  | string       | App Completed |
            | language                 | ES                                                              | string       | App Completed |
            | page area                | privada                                                         | string       | App Completed |
            | page intent              | transaccion                                                     | string       | App Completed |
            | channel                  | online                                                          | string       | App Completed |
            | page instance ID         | de                                                              | string       | App Completed |
            | page info version        | appVersion                                                      | regexp named | App Completed |
            | page segment             | personas                                                        | string       | App Completed |
            | sysEnv                   | app                                                             | string       | App Completed |
            | business unit            | BBVA Mexico                                                     | string       | App Completed |
            | site app name            | App BBVA Mexico                                                 | string       | App Completed |
            | project name             | Glomo                                                           | string       | App Completed |
            | device mobile            | si                                                              | string       | App Completed |
            | user userState           | logado                                                          | string       | App Completed |
            | user segment global      | 003001                                                          | string       | App Completed |
            | user age                 | age                                                             | regexp named | App Completed |
            | user gender              | gender                                                          | regexp named | App Completed |
            | global application       | mobile top up                                                   | string       | App Completed |
            | application name         | recargar celular                                                | string       | App Completed |
            | application type         | operativa                                                       | string       | App Completed |
            | application typology     | <typology>                                                      | string       | App Completed |
            | application step         | pagina exitosa                                                  | string       | App Completed |
            | application state        | <state>                                                         | string       | App Completed |
            | fulfillment model        | online                                                          | string       | App Completed |
            | custom fields            | firma:token                                                     | string       | App Completed |
            | product primary category | cuentas                                                         | string       | App Completed |
            | product amount           | <amount>                                                        | number       | App Completed |
            | product currency         | MXN                                                             | string       | App Completed |
            | product state            | <state>                                                         | string       | App Completed |
            | internal campaign        |                                                                 | empty array  | App Completed |
            | optimization attributes  |                                                                 | empty array  | App Completed |

        Examples:
            | company | amount | state       | status       | typology |
            | UNEFON  | 50     | finalizado  | ENDED        | unefon   |
            | BAIT    | 100    | en revision | UNDER REVIEW | bait     |

    @ANA_EVENT_MTU012
    @analytics
    @MX
    @vbank @backend(test)
    @ios @android @web
    @web-done
    @vbank-modified
    Scenario: Mobile Top Up -  TOP UPS
        Given a user with the following criteria
            | criteria            |
            | profile user mobile |
            | accounts            |
        And the user accesses to operationals page
        And the analytics interceptor service is initiated
        When the user accesses to page top up
        Then the analytics events contains the following variables
            | item                    | value                                                           | type             | event     |
            | analytics               | analytics/glomo_base                                            | json schema      | Page View |
            | version DL              | 20250414_5.0                                                    | string           | Page View |
            | page name               | app:privada:personas:cuentas:recargas                           | string           | Page View |
            | level 1                 | cuentas                                                         | string           | Page View |
            | level 2                 | recargas                                                        | string           | Page View |
            | language                | ES                                                              | string           | Page View |
            | page area               | privada                                                         | string           | Page View |
            | page intent             | transaccion                                                     | string           | Page View |
            | channel                 | online                                                          | string           | Page View |
            | page instance ID        | de                                                              | string           | Page View |
            | version DL              | 20250414_5.0                                                    | string           | Page View |
            | page info version       | appVersion                                                      | regexp named     | Page View |
            | page segment            | personas                                                        | string           | Page View |
            | sysEnv                  | app                                                             | string           | Page View |
            | business unit           | BBVA Mexico                                                     | string           | Page View |
            | site app name           | App BBVA Mexico                                                 | string           | Page View |
            | project name            | Glomo                                                           | string           | Page View |
            | device mobile           | si                                                              | string           | Page View |
            | user userState          | logado                                                          | string           | Page View |
            | user segment global     | 003001                                                          | string           | Page View |
            | user age                | age                                                             | regexp named     | Page View |
            | user gender             | gender                                                          | regexp named     | Page View |
            | internal campaign       |                                                                 | empty array      | Page View |
            | optimization attributes |                                                                 | empty array      | Page View |
            | application             |                                                                 | empty str object | Page View |
            | products attributes     |                                                                 | empty array      | Page View |

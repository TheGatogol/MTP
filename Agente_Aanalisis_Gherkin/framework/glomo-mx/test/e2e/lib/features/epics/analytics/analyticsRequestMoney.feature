@analyticsRequestMoney
Feature: Analytics - request money

    @ANA_EVENT_REM001
    @analytics
    @web @android @ios
    @MX @backend(test) @vbank
    @web-done
    Scenario: Funnel - Request Money - APP ONCLICK START 2
        Given a user with the following criteria
            | criteria      |
            | request money |
        And the user accesses to dashboard
        And the analytics interceptor service is initiated
        When the user accesses the money request operation
        Then the analytics events contains the following variables
            | item                    | value                                | type             | event              |
            | analytics               | analytics/glomo_base                 | json schema      | App On Click Start |
            | version DL              | 20250414_5.0                         | string           | App On Click Start |
            | page name               | app:privada:personas:cuentas:detalle | string           | App On Click Start |
            | level 1                 | cuentas                              | string           | App On Click Start |
            | level 2                 | detalle                              | string           | App On Click Start |
            | language                | ES                                   | string           | App On Click Start |
            | page area               | privada                              | string           | App On Click Start |
            | page intent             | informacion                          | string           | App On Click Start |
            | channel                 | online                               | string           | App On Click Start |
            | page instance ID        | de                                   | string           | App On Click Start |
            | page info version       | appVersion                           | regexp named     | App On Click Start |
            | page segment            | personas                             | string           | App On Click Start |
            | sysEnv                  | app                                  | string           | App On Click Start |
            | business unit           | BBVA Mexico                          | string           | App On Click Start |
            | site app name           | App BBVA Mexico                      | string           | App On Click Start |
            | project name            | Glomo                                | string           | App On Click Start |
            | device mobile           | si                                   | string           | App On Click Start |
            | user userState          | logado                               | string           | App On Click Start |
            | profile ID              | profileID                            | regexp named     | App On Click Start |
            | user segment global     | 003001                               | string           | App On Click Start |
            | user gender             | gender                               | regexp named     | App On Click Start |
            | user age                | age                                  | regexp named     | App On Click Start |
            | global application      | youngsters request money             | string           | App On Click Start |
            | application name        | solicitar dinero                     | string           | App On Click Start |
            | application type        | operativa                            | string           | App On Click Start |
            | application step        | pedir mi dinero                      | string           | App On Click Start |
            | fulfillment model       | online                               | string           | App On Click Start |
            | internal campaign       |                                      | empty array      | App On Click Start |
            | optimization attributes |                                      | empty array      | App On Click Start |
            | products attributes     |                                      | empty array      | App On Click Start |

    @ANA_EVENT_REM002
    @analytics
    @web @android @ios
    @MX @backend(test) @vbank
    @web-done
    Scenario: Funnel - Request Money - APP PAGE VISIT
        Given a user with the following criteria
            | criteria      |
            | request money |
        And the user accesses to dashboard
        And the user accesses the money request operation
        And the analytics interceptor service is initiated
        When the user accesses to request money page
        Then the analytics events contains the following variables
            | item                    | value                                               | type             | event          |
            | analytics               | analytics/glomo_base                                | json schema      | App Page Visit |
            | version DL              | 20250414_5.0                                        | string           | App Page Visit |
            | page name               | app:privada:personas:cuentas:jovenes:1 pedir dinero | string           | App Page Visit |
            | level 1                 | cuentas                                             | string           | App Page Visit |
            | level 2                 | jovenes                                             | string           | App Page Visit |
            | level 3                 | 1 pedir dinero                                      | string           | App Page Visit |
            | language                | ES                                                  | string           | App Page Visit |
            | page area               | privada                                             | string           | App Page Visit |
            | page intent             | informacion                                         | string           | App Page Visit |
            | channel                 | online                                              | string           | App Page Visit |
            | page instance ID        | de                                                  | string           | App Page Visit |
            | page info version       | appVersion                                          | regexp named     | App Page Visit |
            | page segment            | personas                                            | string           | App Page Visit |
            | sysEnv                  | app                                                 | string           | App Page Visit |
            | business unit           | BBVA Mexico                                         | string           | App Page Visit |
            | site app name           | App BBVA Mexico                                     | string           | App Page Visit |
            | project name            | Glomo                                               | string           | App Page Visit |
            | device mobile           | si                                                  | string           | App Page Visit |
            | user userState          | logado                                              | string           | App Page Visit |
            | profile ID              | profileID                                           | regexp named     | App Page Visit |
            | user segment global     | 003001                                              | string           | App Page Visit |
            | user gender             | gender                                              | regexp named     | App Page Visit |
            | user age                | age                                                 | regexp named     | App Page Visit |
            | global application      | youngsters request money                            | string           | App Page Visit |
            | application name        | solicitar dinero                                    | string           | App Page Visit |
            | application type        | operativa                                           | string           | App Page Visit |
            | application step        | pedir mi dinero                                     | string           | App Page Visit |
            | fulfillment model       | online                                              | string           | App Page Visit |
            | internal campaign       |                                                     | empty array      | App Page Visit |
            | optimization attributes |                                                     | empty array      | App Page Visit |
            | products attributes     |                                                     | empty array      | App Page Visit |

    @ANA_REM003
    @analytics
    @web @android @ios
    @MX @backend(test) @vbank
    @web-done
    Scenario: Funnel - Request Money - APP STARTED
        Given a user with the following criteria
            | criteria      |
            | request money |
        And the user accesses to dashboard
        And the user accesses the money request operation
        And the user accesses to request money page
        When the user types in the text box
        Then the device contains the following variables:
            | item                    | value                                               | type             |
            | analytics               | analytics/glomo_base                                | json schema      |
            | version DL              | 20250414_5.0                                        | string           |
            | page name               | app:privada:personas:cuentas:jovenes:1 pedir dinero | string           |
            | level 1                 | cuentas                                             | string           |
            | level 2                 | jovenes                                             | string           |
            | level 3                 | 1 pedir dinero                                      | string           |
            | language                | ES                                                  | string           |
            | page area               | privada                                             | string           |
            | page intent             | informacion                                         | string           |
            | channel                 | online                                              | string           |
            | page instance ID        | de                                                  | string           |
            | page info version       | appVersion                                          | regexp named     |
            | page segment            | personas                                            | string           |
            | sysEnv                  | app                                                 | string           |
            | business unit           | BBVA Mexico                                         | string           |
            | site app name           | App BBVA Mexico                                     | string           |
            | project name            | Glomo                                               | string           |
            | device mobile           | si                                                  | string           |
            | user userState          | logado                                              | string           |
            | profile ID              | profileID                                           | regexp named     |
            | user segment global     | 003001                                              | string           |
            | user gender             | gender                                              | regexp named     |
            | user age                | age                                                 | regexp named     |
            | global application      | youngsters request money                            | string           |
            | application name        | solicitar dinero                                    | string           |
            | application type        | operativa                                           | string           |
            | application step        | enviar mensaje de solicitud                         | string           |
            | fulfillment model       | online                                              | string           |
            | internal campaign       |                                                     | empty array      |
            | optimization attributes |                                                     | empty array      |
            | products attributes     |                                                     | empty array      |

    @ANA_EVENT_REM004
    @analytics
    @web @android @ios
    @MX @backend(test) @vbank
    @web-done
    Scenario: Funnel - Request Money - APP COMPLETED
        Given a user with the following criteria
            | criteria      |
            | request money |
        And the user accesses to dashboard
        And the user accesses the money request operation
        And the analytics interceptor service is initiated
        When the user sends message and accesses to pending request page
        Then the analytics events contains the following variables
            | item                    | value                                               | type             | event         |
            | analytics               | analytics/glomo_base                                | json schema      | App Completed |
            | version DL              | 20250414_5.0                                        | string           | App Completed |
            | page name               | app:privada:personas:cuentas:jovenes:pagina exitosa | string           | App Completed |
            | level 1                 | cuentas                                             | string           | App Completed |
            | level 2                 | jovenes                                             | string           | App Completed |
            | level 3                 | pagina exitosa                                      | string           | App Completed |
            | language                | ES                                                  | string           | App Completed |
            | page area               | privada                                             | string           | App Completed |
            | page intent             | informacion                                         | string           | App Completed |
            | channel                 | online                                              | string           | App Completed |
            | page instance ID        | de                                                  | string           | App Completed |
            | page info version       | appVersion                                          | regexp named     | App Completed |
            | page segment            | personas                                            | string           | App Completed |
            | sysEnv                  | app                                                 | string           | App Completed |
            | business unit           | BBVA Mexico                                         | string           | App Completed |
            | site app name           | App BBVA Mexico                                     | string           | App Completed |
            | project name            | Glomo                                               | string           | App Completed |
            | device mobile           | si                                                  | string           | App Completed |
            | user userState          | logado                                              | string           | App Completed |
            | profile ID              | profileID                                           | regexp named     | App Completed |
            | user segment global     | 003001                                              | string           | App Completed |
            | user gender             | gender                                              | regexp named     | App Completed |
            | user age                | age                                                 | regexp named     | App Completed |
            | global application      | youngsters request money                            | string           | App Completed |
            | application name        | solicitar dinero                                    | string           | App Completed |
            | application type        | operativa                                           | string           | App Completed |
            | application step        | pedir mi dinero                                     | string           | App Completed |
            | application state       | finalizado                                          | string           | App Completed |
            | fulfillment model       | online                                              | string           | App Completed |
            | internal campaign       |                                                     | empty array      | App Completed |
            | optimization attributes |                                                     | empty array      | App Completed |
            | products attributes     |                                                     | empty array      | App Completed |

    @ANA_REM005
    @analytics
    @web @android @ios
    @MX @backend(test) @vbank
    @web-done
    Scenario: Huella - Request Money - Pedir mi Dinero
        Given a user with the following criteria
            | criteria      |
            | request money |
        And the user accesses to dashboard
        And the user accesses the money request operation
        When the user change next slide number "1"
        Then the device contains the following variables:
            | item                    | value                                                | type             |
            | analytics               | analytics/glomo_base                                 | json schema      |
            | version DL              | 20250414_5.0                                         | string           |
            | page name               | app:privada:personas:cuentas:jovenes:pedir mi dinero | string           |
            | level 1                 | cuentas                                              | string           |
            | level 2                 | jovenes                                              | string           |
            | level 3                 | pedir mi dinero                                      | string           |
            | language                | ES                                                   | string           |
            | page area               | privada                                              | string           |
            | page intent             | informacion                                          | string           |
            | channel                 | online                                               | string           |
            | page instance ID        | de                                                   | string           |
            | page info version       | appVersion                                           | regexp named     |
            | page segment            | personas                                             | string           |
            | sysEnv                  | app                                                  | string           |
            | business unit           | BBVA Mexico                                          | string           |
            | site app name           | App BBVA Mexico                                      | string           |
            | project name            | Glomo                                                | string           |
            | device mobile           | si                                                   | string           |
            | user userState          | logado                                               | string           |
            | profile ID              | profileID                                            | regexp named     |
            | user segment global     | 003001                                               | string           |
            | user gender             | gender                                               | regexp named     |
            | user age                | age                                                  | regexp named     |
            | internal campaign       |                                                      | empty array      |
            | optimization attributes |                                                      | empty array      |
            | application             |                                                      | empty str object |
            | products attributes     |                                                      | empty array      |

    @ANA_REM006
    @analytics
    @web @android @ios
    @MX @backend(test) @vbank
    @web-done
    Scenario: Huella - Request Money -  Cuanto Dinero Puedo Pedir
        Given a user with the following criteria
            | criteria      |
            | request money |
        And the user accesses to dashboard
        And the user accesses the money request operation
        When the user change next slide number "2"
        Then the device contains the following variables:
            | item                    | value                                                          | type             |
            | analytics               | analytics/glomo_base                                           | json schema      |
            | version DL              | 20250414_5.0                                                   | string           |
            | page name               | app:privada:personas:cuentas:jovenes:cuanto dinero puedo pedir | string           |
            | level 1                 | cuentas                                                        | string           |
            | level 2                 | jovenes                                                        | string           |
            | level 3                 | cuanto dinero puedo pedir                                      | string           |
            | language                | ES                                                             | string           |
            | page area               | privada                                                        | string           |
            | page intent             | informacion                                                    | string           |
            | channel                 | online                                                         | string           |
            | page instance ID        | de                                                             | string           |
            | page info version       | appVersion                                                     | regexp named     |
            | page segment            | personas                                                       | string           |
            | sysEnv                  | app                                                            | string           |
            | business unit           | BBVA Mexico                                                    | string           |
            | site app name           | App BBVA Mexico                                                | string           |
            | project name            | Glomo                                                          | string           |
            | device mobile           | si                                                             | string           |
            | user userState          | logado                                                         | string           |
            | profile ID              | profileID                                                      | regexp named     |
            | user segment global     | 003001                                                         | string           |
            | user gender             | gender                                                         | regexp named     |
            | user age                | age                                                            | regexp named     |
            | internal campaign       |                                                                | empty array      |
            | optimization attributes |                                                                | empty array      |
            | application             |                                                                | empty str object |
            | products attributes     |                                                                | empty array      |

    @ANA_REM007
    @analytics
    @web @android @ios
    @MX @backend(test) @vbank
    @web-done
    Scenario: Huella - Request Money - Como Puedo Ahorrar
        Given a user with the following criteria
            | criteria      |
            | request money |
        And the user accesses to dashboard
        And the user accesses the money request operation
        When the user change next slide number "3"
        Then the device contains the following variables:
            | item                    | value                                                   | type             |
            | analytics               | analytics/glomo_base                                    | json schema      |
            | version DL              | 20250414_5.0                                            | string           |
            | page name               | app:privada:personas:cuentas:jovenes:como puedo ahorrar | string           |
            | level 1                 | cuentas                                                 | string           |
            | level 2                 | jovenes                                                 | string           |
            | level 3                 | como puedo ahorrar                                      | string           |
            | language                | ES                                                      | string           |
            | page area               | privada                                                 | string           |
            | page intent             | informacion                                             | string           |
            | channel                 | online                                                  | string           |
            | page instance ID        | de                                                      | string           |
            | page info version       | appVersion                                              | regexp named     |
            | page segment            | personas                                                | string           |
            | sysEnv                  | app                                                     | string           |
            | business unit           | BBVA Mexico                                             | string           |
            | site app name           | App BBVA Mexico                                         | string           |
            | project name            | Glomo                                                   | string           |
            | device mobile           | si                                                      | string           |
            | user userState          | logado                                                  | string           |
            | profile ID              | profileID                                               | regexp named     |
            | user segment global     | 003001                                                  | string           |
            | user gender             | gender                                                  | regexp named     |
            | user age                | age                                                     | regexp named     |
            | internal campaign       |                                                         | empty array      |
            | optimization attributes |                                                         | empty array      |
            | application             |                                                         | empty str object |
            | products attributes     |                                                         | empty array      |

    @ANA_REM008
    @analytics
    @web @android @ios
    @MX @backend(test) @vbank
    @web-done
    Scenario: Huella - Request Money - Cuando Recibo Dinero
        Given a user with the following criteria
            | criteria      |
            | request money |
        And the user accesses to dashboard
        And the user accesses the money request operation
        When the user accesses to all the slides and goes to the request money page
        Then the device contains the following variables:
            | item                    | value                                                     | type             |
            | analytics               | analytics/glomo_base                                      | json schema      |
            | version DL              | 20250414_5.0                                              | string           |
            | page name               | app:privada:personas:cuentas:jovenes:cuando recibo dinero | string           |
            | level 1                 | cuentas                                                   | string           |
            | level 2                 | jovenes                                                   | string           |
            | level 3                 | cuando recibo dinero                                      | string           |
            | language                | ES                                                        | string           |
            | page area               | privada                                                   | string           |
            | page intent             | informacion                                               | string           |
            | channel                 | online                                                    | string           |
            | page instance ID        | de                                                        | string           |
            | page info version       | appVersion                                                | regexp named     |
            | page segment            | personas                                                  | string           |
            | sysEnv                  | app                                                       | string           |
            | business unit           | BBVA Mexico                                               | string           |
            | site app name           | App BBVA Mexico                                           | string           |
            | project name            | Glomo                                                     | string           |
            | device mobile           | si                                                        | string           |
            | user userState          | logado                                                    | string           |
            | profile ID              | profileID                                                 | regexp named     |
            | user segment global     | 003001                                                    | string           |
            | user gender             | gender                                                    | regexp named     |
            | user age                | age                                                       | regexp named     |
            | internal campaign       |                                                           | empty array      |
            | optimization attributes |                                                           | empty array      |
            | application             |                                                           | empty str object |
            | products attributes     |                                                           | empty array      |

    @ANA_EVENT_REM009
    @analytics
    @web @android @ios
    @MX @backend(test) @vbank
    @web-done
    Scenario: Funnel - Request Money - APP ONCLICK START
        Given a user with the following criteria
            | criteria      |
            | request money |
        When the user accesses to dashboard
        And the analytics interceptor service is initiated
        And the user accesses the "request money" operation
        Then the analytics events contains the following variables
            | item                    | value                                | type             | event              |
            | analytics               | analytics/glomo_base                 | json schema      | App On Click Start |
            | version DL              | 20250414_5.0                         | string           | App On Click Start |
            | page name               | app:privada:personas:posicion global | string           | App On Click Start |
            | level 1                 | posicion global                      | string           | App On Click Start |
            | language                | ES                                   | string           | App On Click Start |
            | page area               | privada                              | string           | App On Click Start |
            | page intent             | informacion                          | string           | App On Click Start |
            | channel                 | online                               | string           | App On Click Start |
            | page instance ID        | de                                   | string           | App On Click Start |
            | page info version       | appVersion                           | regexp named     | App On Click Start |
            | page segment            | personas                             | string           | App On Click Start |
            | sysEnv                  | app                                  | string           | App On Click Start |
            | business unit           | BBVA Mexico                          | string           | App On Click Start |
            | site app name           | App BBVA Mexico                      | string           | App On Click Start |
            | project name            | Glomo                                | string           | App On Click Start |
            | device mobile           | si                                   | string           | App On Click Start |
            | user userState          | logado                               | string           | App On Click Start |
            | profile ID              | profileID                            | regexp named     | App On Click Start |
            | user segment global     | 003001                               | string           | App On Click Start |
            | user gender             | gender                               | regexp named     | App On Click Start |
            | user age                | age                                  | regexp named     | App On Click Start |
            | global application      | youngsters request money             | string           | App On Click Start |
            | application name        | solicitar dinero                     | string           | App On Click Start |
            | application type        | operativa                            | string           | App On Click Start |
            | application step        | posicion global                      | string           | App On Click Start |
            | fulfillment model       | online                               | string           | App On Click Start |
            | internal campaign       |                                      | empty array      | App On Click Start |
            | optimization attributes |                                      | empty array      | App On Click Start |
            | products attributes     |                                      | empty array      | App On Click Start |

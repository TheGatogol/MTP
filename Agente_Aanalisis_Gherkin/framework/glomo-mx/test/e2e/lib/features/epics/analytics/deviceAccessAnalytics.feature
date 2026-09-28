@deviceAccessAnalytics
Feature: Analytics - Device Access

    @ANA_EVENT_DAC001
    @analytics
    @MX @vbank @backend(test)
    @ios @android @web @web-done
    Scenario: Device Access - App On Click Start Card
        Given a user with the following criteria
            | criteria                |
            | reactivation nonaccount |
        And the user accesses the Login Screen
        And the analytics interceptor service is initiated
        And the user reactivates his account
        When the user accesses to reactivation screen and begins the process
        Then the analytics events contains the following variables
            | item                    | value                              | type        | event              |
            | analytics               | analytics/glomo_base               | json schema | App On Click Start |
            | version DL              | 20250414_5.0                       | string      | App On Click Start |
            | page instance ID        | de                                 | string      | App On Click Start |
            | sysEnv                  | app                                | string      | App On Click Start |
            | page segment            | general                            | string      | App On Click Start |
            | page intent             | informacion                        | string      | App On Click Start |
            | business unit           | BBVA Mexico                        | string      | App On Click Start |
            | page area               | publica                            | string      | App On Click Start |
            | language                | ES                                 | string      | App On Click Start |
            | channel                 | online                             | string      | App On Click Start |
            | site app name           | App BBVA Mexico                    | string      | App On Click Start |
            | project name            | Glomo                              | string      | App On Click Start |
            | level 1                 | identificacion                     | string      | App On Click Start |
            | page name               | app:publica:general:identificacion | string      | App On Click Start |
            | device mobile           | si                                 | string      | App On Click Start |
            | user userState          | no logado                          | string      | App On Click Start |
            | fulfillment model       | online                             | string      | App On Click Start |
            | application step        | continuar                          | string      | App On Click Start |
            | application name        | recuperacion token movil           | string      | App On Click Start |
            | application type        | alta clientes                      | string      | App On Click Start |
            | global application      | reactivate mobile services         | string      | App On Click Start |
            | application typology    | reactivacion tarjeta               | string      | App On Click Start |
            | internal campaign       |                                    | empty array | App On Click Start |
            | optimization attributes |                                    | empty array | App On Click Start |
            | products attributes     |                                    | empty array | App On Click Start |

    @ANA_EVENT_DAC002
    @analytics
    @MX @vbank @backend(test)
    @ios @android @web @web-done
    Scenario: Device Access - App On Click Start Non Account
        Given a user with the following criteria
            | criteria                |
            | reactivation nonaccount |
        And the user accesses the Login Screen
        And the analytics interceptor service is initiated
        And the user reactivates his account
        When the user does not have a card or account
        Then the analytics events contains the following variables
            | item                    | value                              | type        | event              |
            | analytics               | analytics/glomo_base               | json schema | App On Click Start |
            | version DL              | 20250414_5.0                       | string      | App On Click Start |
            | page instance ID        | de                                 | string      | App On Click Start |
            | sysEnv                  | app                                | string      | App On Click Start |
            | page segment            | general                            | string      | App On Click Start |
            | page intent             | informacion                        | string      | App On Click Start |
            | business unit           | BBVA Mexico                        | string      | App On Click Start |
            | page area               | publica                            | string      | App On Click Start |
            | language                | ES                                 | string      | App On Click Start |
            | channel                 | online                             | string      | App On Click Start |
            | site app name           | App BBVA Mexico                    | string      | App On Click Start |
            | project name            | Glomo                              | string      | App On Click Start |
            | level 1                 | identificacion                     | string      | App On Click Start |
            | page name               | app:publica:general:identificacion | string      | App On Click Start |
            | device mobile           | si                                 | string      | App On Click Start |
            | user userState          | no logado                          | string      | App On Click Start |
            | fulfillment model       | online                             | string      | App On Click Start |
            | application step        | identificate sin tarjeta o cuenta  | string      | App On Click Start |
            | application name        | recuperacion token movil           | string      | App On Click Start |
            | application type        | alta clientes                      | string      | App On Click Start |
            | global application      | reactivate mobile services         | string      | App On Click Start |
            | application typology    | reactivacion monoproducto          | string      | App On Click Start |
            | internal campaign       |                                    | empty array | App On Click Start |
            | optimization attributes |                                    | empty array | App On Click Start |
            | products attributes     |                                    | empty array | App On Click Start |

    @ANA_EVENT_DAC003
    @analytics
    @MX @manual @JIRA.GLOMOGL-36902
    @!vbank @backend(test)
    @android @ios @web
    Scenario: Device Access - App Page Visit
        Given a user with the following criteria
            | criteria             |
            | customer card number |
        And the user accesses the Login Screen
        And the analytics interceptor service is initiated
        When the user reactivates his account
        Then the analytics events contains the following variables
            | item                    | value                                                                     | type        | event           |
            | analytics               | analytics/glomo_base                                                      | json schema | App Page Visits |
            | version DL              | 20230830_4.2                                                              | string      | App Page Visits |
            | page instance ID        | pro                                                                       | string      | App Page Visits |
            | sysEnv                  | app                                                                       | string      | App Page Visits |
            | page segment            | general                                                                   | string      | App Page Visits |
            | page intent             | informacion                                                               | string      | App Page Visits |
            | business unit           | BBVA Mexico                                                               | string      | App Page Visits |
            | page area               | publica                                                                   | string      | App Page Visits |
            | language                | ES                                                                        | string      | App Page Visits |
            | channel                 | online                                                                    | string      | App Page Visits |
            | site app name           | App BBVA Mexico                                                           | string      | App Page Visits |
            | project name            | Glomo                                                                     | string      | App Page Visits |
            | level 1                 | recuperacion token movil                                                  | string      | App Page Visits |
            | level 2                 | 1 solicitud de huella facial                                              | string      | App Page Visits |
            | page name               | app:publica:general:recuperacion token movil:1 solicitud de huella facial | string      | App Page Visits |
            | device mobile           | no                                                                        | string      | App Page Visits |
            | user userState          | no logado                                                                 | string      | App Page Visits |
            | fulfillment model       | online                                                                    | string      | App Page Visits |
            | application step        | 1 solicitud de huella facial                                              | string      | App Page Visits |
            | application state       | inicio                                                                    | string      | App Page Visits |
            | application name        | recuperacion token movil                                                  | string      | App Page Visits |
            | application type        | alta clientes                                                             | string      | App Page Visits |
            | global application      | reactivate mobile services                                                | string      | App Page Visits |
            | application typology    | reactivacion tarjeta                                                      | string      | App Page Visits |
            | internal campaign       |                                                                           | empty array | App Page Visits |
            | optimization attributes |                                                                           | empty array | App Page Visits |
            | products attributes     |                                                                           | empty array | App Page Visits |

    @ANA_EVENT_DAC004
    @analytics
    @MX @manual @JIRA.GLOMOGL-36902
    @!vbank @backend(test)
    @android @ios @web
    Scenario: Device Access - App Started
        Given a user with the following criteria
            | criteria             |
            | customer card number |
        And the user accesses the Login Screen
        And the analytics interceptor service is initiated
        When the user reactivates his account
        Then the analytics events contains the following variables
            | item                    | value                                                                     | type        | event       |
            | analytics               | analytics/glomo_base                                                      | json schema | App Started |
            | version DL              | 20230830_4.2                                                              | string      | App Started |
            | page instance ID        | pro                                                                       | string      | App Started |
            | sysEnv                  | app                                                                       | string      | App Started |
            | page segment            | general                                                                   | string      | App Started |
            | page intent             | informacion                                                               | string      | App Started |
            | business unit           | BBVA Mexico                                                               | string      | App Started |
            | page area               | publica                                                                   | string      | App Started |
            | language                | ES                                                                        | string      | App Started |
            | channel                 | online                                                                    | string      | App Started |
            | site app name           | App BBVA Mexico                                                           | string      | App Started |
            | project name            | Glomo                                                                     | string      | App Started |
            | level 1                 | recuperacion token movil                                                  | string      | App Started |
            | level 2                 | 1 solicitud de huella facial                                              | string      | App Started |
            | page name               | app:publica:general:recuperacion token movil:1 solicitud de huella facial | string      | App Started |
            | device mobile           | no                                                                        | string      | App Started |
            | user userState          | no logado                                                                 | string      | App Started |
            | fulfillment model       | online                                                                    | string      | App Started |
            | application step        | iniciar verificacion                                                      | string      | App Started |
            | application name        | recuperacion token movil                                                  | string      | App Started |
            | application type        | alta clientes                                                             | string      | App Started |
            | global application      | reactivate mobile services                                                | string      | App Started |
            | application typology    | reactivacion tarjeta                                                      | string      | App Started |
            | internal campaign       |                                                                           | empty array | App Started |
            | optimization attributes |                                                                           | empty array | App Started |
            | products attributes     |                                                                           | empty array | App Started |

    @ANA_EVENT_DAC005
    @analytics
    @MX @manual @JIRA.GLOMOGL-36902
    @!vbank @backend(test)
    @android @ios @web
    Scenario: Device Access - App Step 2
        Given a user with the following criteria
            | criteria             |
            | customer card number |
        And the user accesses the Login Screen
        And the analytics interceptor service is initiated
        When the user reactivates his account
        Then the analytics events contains the following variables
            | item                    | value                                                              | type        | event      |
            | analytics               | analytics/glomo_base                                               | json schema | App Step 2 |
            | version DL              | 20230830_4.2                                                       | string      | App Step 2 |
            | page instance ID        | pro                                                                | string      | App Step 2 |
            | sysEnv                  | app                                                                | string      | App Step 2 |
            | page segment            | general                                                            | string      | App Step 2 |
            | page intent             | informacion                                                        | string      | App Step 2 |
            | business unit           | BBVA Mexico                                                        | string      | App Step 2 |
            | page area               | publica                                                            | string      | App Step 2 |
            | language                | ES                                                                 | string      | App Step 2 |
            | channel                 | online                                                             | string      | App Step 2 |
            | site app name           | App BBVA Mexico                                                    | string      | App Step 2 |
            | project name            | Glomo                                                              | string      | App Step 2 |
            | level 1                 | recuperacion token movil                                           | string      | App Step 2 |
            | level 2                 | 2 validacion de datos                                              | string      | App Step 2 |
            | page name               | app:publica:general:recuperacion token movil:2 validacion de datos | string      | App Step 2 |
            | device mobile           | no                                                                 | string      | App Step 2 |
            | user userState          | no logado                                                          | string      | App Step 2 |
            | fulfillment model       | online                                                             | string      | App Step 2 |
            | application step        | 2 validacion de datos                                              | string      | App Step 2 |
            | application name        | recuperacion token movil                                           | string      | App Step 2 |
            | application type        | alta clientes                                                      | string      | App Step 2 |
            | global application      | reactivate mobile services                                         | string      | App Step 2 |
            | application typology    | reactivacion tarjeta                                               | string      | App Step 2 |
            | internal campaign       |                                                                    | empty array | App Step 2 |
            | optimization attributes |                                                                    | empty array | App Step 2 |
            | products attributes     |                                                                    | empty array | App Step 2 |

    @ANA_EVENT_DAC006
    @analytics
    @MX @manual @JIRA.GLOMOGL-36902
    @!vbank @backend(test)
    @android @ios @web
    Scenario: Device Access - App Completed
        Given a user with the following criteria
            | criteria             |
            | customer card number |
        And the user accesses the Login Screen
        And the analytics interceptor service is initiated
        When the user reactivates his account
        Then the analytics events contains the following variables
        | item                    | value                                                       | type        | event         |
        | analytics               | analytics/glomo_base                                        | json schema | App Completed |
        | version DL              | 20230830_4.2                                                | string      | App Completed |
        | page instance ID        | pro                                                         | string      | App Completed |
        | sysEnv                  | app                                                         | string      | App Completed |
        | page segment            | general                                                     | string      | App Completed |
        | page intent             | informacion                                                 | string      | App Completed |
        | business unit           | BBVA Mexico                                                 | string      | App Completed |
        | page area               | publica                                                     | string      | App Completed |
        | language                | ES                                                          | string      | App Completed |
        | channel                 | online                                                      | string      | App Completed |
        | site app name           | App BBVA Mexico                                             | string      | App Completed |
        | project name            | Glomo                                                       | string      | App Completed |
        | level 1                 | recuperacion token movil                                    | string      | App Completed |
        | level 2                 | pagina exitosa                                              | string      | App Completed |
        | page name               | app:publica:general:recuperacion token movil:pagina exitosa | string      | App Completed |
        | device mobile           | no                                                          | string      | App Completed |
        | user userState          | no logado                                                   | string      | App Completed |
        | fulfillment model       | online                                                      | string      | App Completed |
        | application step        | pagina exitosa                                              | string      | App Completed |
        | application state       | finalizado                                                  | string      | App Completed |
        | application name        | recuperacion token movil                                    | string      | App Completed |
        | application type        | alta clientes                                               | string      | App Completed |
        | global application      | reactivate mobile services                                  | string      | App Completed |
        | application typology    | reactivacion tarjeta                                        | string      | App Completed |
        | internal campaign       |                                                             | empty array | App Completed |
        | optimization attributes |                                                             | empty array | App Completed |
        | products attributes     |                                                             | empty array | App Completed |

    @ANA_EVENT_DAC007
    @analytics
    @MX @manual @JIRA.GLOMOGL-36902
    @!vbank @backend(test)
    @android @ios @web
    Scenario: Device Access - Internal Link
        Given a user with the following criteria
            | criteria             |
            | customer card number |
        And the user accesses the Login Screen
        And the analytics interceptor service is initiated
        When the user reactivates his account
        Then the analytics events contains the following variables
            | item                    | value                                                             | type             | event         |
            | analytics               | analytics/glomo_base                                              | json schema      | Internal Link |
            | version DL              | 20230830_4.2                                                      | string           | Internal Link |
            | page instance ID        | pro                                                               | string           | Internal Link |
            | sysEnv                  | app                                                               | string           | Internal Link |
            | page segment            | general                                                           | string           | Internal Link |
            | page intent             | informacion                                                       | string           | Internal Link |
            | business unit           | BBVA Mexico                                                       | string           | Internal Link |
            | page area               | publica                                                           | string           | Internal Link |
            | language                | ES                                                                | string           | Internal Link |
            | channel                 | online                                                            | string           | Internal Link |
            | site app name           | App BBVA Mexico                                                   | string           | Internal Link |
            | project name            | Glomo                                                             | string           | Internal Link |
            | level 1                 | recuperacion token movil                                          | string           | Internal Link |
            | level 2                 | solicitud de llamada                                              | string           | Internal Link |
            | page name               | app:publica:general:recuperacion token movil:solicitud de llamada | string           | Internal Link |
            | link name               | solicitar llamada                                                 | string           | Internal Link |
            | device mobile           | no                                                                | string           | Internal Link |
            | user userState          | no logado                                                         | string           | Internal Link |
            | internal campaign       |                                                                   | empty array      | Internal Link |
            | optimization attributes |                                                                   | empty array      | Internal Link |
            | application             |                                                                   | empty str object | Internal Link |
            | products attributes     |                                                                   | empty array      | Internal Link |

    @ANA_EVENT_DAC008
    @analytics
    @MX @manual @JIRA.GLOMOGL-36902
    @!vbank @backend(test)
    @android @ios @web
    Scenario: Device Access - Footprint Description
        Given a user with the following criteria
            | criteria             |
            | customer card number |
        And the user accesses the Login Screen
        And the analytics interceptor service is initiated
        When the user reactivates his account
        Then the analytics events contains the following variables
            | item                    | value                                                    | type             | event     |
            | analytics               | analytics/glomo_base                                     | json schema      | Page View |
            | version DL              | 20250414_5.0                                             | string           | Page View |
            | page name               | app:publica:general:recuperacion token movil:descripcion | string           | Page View |
            | level 1                 | recuperacion token movil                                 | string           | Page View |
            | level 2                 | solicitud de llamada                                     | string           | Page View |
            | language                | ES                                                       | string           | Page View |
            | page area               | publica                                                  | string           | Page View |
            | page intent             | informacion                                              | string           | Page View |
            | channel                 | online                                                   | string           | Page View |
            | page instance ID        | de                                                       | string           | Page View |
            | page info version       | appVersion                                               | regexp named     | Page View |
            | page segment            | general                                                  | string           | Page View |
            | sysEnv                  | app                                                      | string           | Page View |
            | business unit           | BBVA Mexico                                              | string           | Page View |
            | site app name           | App BBVA Mexico                                          | string           | Page View |
            | project name            | Glomo                                                    | string           | Page View |
            | device mobile           | si                                                       | string           | Page View |
            | user userState          | no logado                                                | string           | Page View |
            | user segment global     | 003001                                                   | string           | Page View |
            | internal campaign       |                                                          | empty array      | Page View |
            | optimization attributes |                                                          | empty array      | Page View |
            | application             |                                                          | empty str object | Page View |
            | products attributes     |                                                          | empty array      | Page View |

    @ANA_EVENT_DAC009
    @analytics
    @MX @manual @JIRA.GLOMOGL-36902
    @!vbank @backend(test)
    @android @ios @web
    Scenario: Device Access - Footprint Call Request
        Given a user with the following criteria
            | criteria             |
            | customer card number |
        And the user accesses the Login Screen
        And the analytics interceptor service is initiated
        When the user reactivates his account
        Then the analytics events contains the following variables
            | item                    | value                                                             | type             | event     |
            | analytics               | analytics/glomo_base                                              | json schema      | Page View |
            | version DL              | 20250414_5.0                                                      | string           | Page View |
            | page name               | app:publica:general:recuperacion token movil:solicitud de llamada | string           | Page View |
            | level 1                 | recuperacion token movil                                          | string           | Page View |
            | level 2                 | solicitud de llamada                                              | string           | Page View |
            | language                | ES                                                                | string           | Page View |
            | page area               | publica                                                           | string           | Page View |
            | page intent             | informacion                                                       | string           | Page View |
            | channel                 | online                                                            | string           | Page View |
            | page instance ID        | de                                                                | string           | Page View |
            | page info version       | appVersion                                                        | regexp named     | Page View |
            | page segment            | general                                                           | string           | Page View |
            | sysEnv                  | app                                                               | string           | Page View |
            | business unit           | BBVA Mexico                                                       | string           | Page View |
            | site app name           | App BBVA Mexico                                                   | string           | Page View |
            | project name            | Glomo                                                             | string           | Page View |
            | device mobile           | si                                                                | string           | Page View |
            | user userState          | no logado                                                         | string           | Page View |
            | user segment global     | 003001                                                            | string           | Page View |
            | internal campaign       |                                                                   | empty array      | Page View |
            | optimization attributes |                                                                   | empty array      | Page View |
            | application             |                                                                   | empty str object | Page View |
            | products attributes     |                                                                   | empty array      | Page View |

    @ANA_EVENT_DAC010
    @analytics
    @MX @manual @JIRA.GLOMOGL-36902
    @!vbank @backend(test)
    @android @ios @web
    Scenario: Device Access - App Page View Error - Application blocked
        Given a user with the following criteria
            | criteria             |
            | customer card number |
            | status blocked       |
        And the user begins the process without card or account
        And the analytics interceptor service is initiated
        When the user block the application
        Then the analytics events contains the following variables
            | item                    | value                                                             | type             | event     |
            | analytics               | analytics/glomo_base                                              | json schema      | Page View |
            | version DL              | 20250414_5.0                                                      | string           | Page View |
            | page name               | app:publica:general:recuperacion token movil:aplicacion bloqueada | string           | Page View |
            | level 1                 | recuperacion token movil                                          | string           | Page View |
            | level 2                 | aplicacion bloqueada                                              | string           | Page View |
            | error page              | aplicacion bloqueada                                              | string           | Page View |
            | language                | ES                                                                | string           | Page View |
            | page area               | publica                                                           | string           | Page View |
            | page intent             | informacion                                                       | string           | Page View |
            | channel                 | online                                                            | string           | Page View |
            | page instance ID        | de                                                                | string           | Page View |
            | page info version       | appVersion                                                        | regexp named     | Page View |
            | page segment            | general                                                           | string           | Page View |
            | sysEnv                  | app                                                               | string           | Page View |
            | business unit           | BBVA Mexico                                                       | string           | Page View |
            | site app name           | App BBVA Mexico                                                   | string           | Page View |
            | project name            | Glomo                                                             | string           | Page View |
            | device mobile           | si                                                                | string           | Page View |
            | user userState          | no logado                                                         | string           | Page View |
            | user segment global     | 003001                                                            | string           | Page View |
            | internal campaign       |                                                                   | empty array      | Page View |
            | optimization attributes |                                                                   | empty array      | Page View |
            | application             |                                                                   | empty str object | Page View |
            | products attributes     |                                                                   | empty array      | Page View |

    @ANA_EVENT_DAC011
    @analytics
    @MX @manual @JIRA.GLOMOGL-36902
    @!vbank @backend(test)
    @android @ios @web
    Scenario: Device Access - App Page View - Unassociated card error
        Given a user with the following criteria
            | criteria             |
            | customer card number |
            | status blocked       |
        And the user reactivates his account
        And the user inserts card number
        And the analytics interceptor service is initiated
        When the user accesses to verification page
        Then the analytics events contains the following variables
            | item                    | value                                                            | type             | event     |
            | analytics               | analytics/glomo_base                                             | json schema      | Page View |
            | version DL              | 20250414_5.0                                                     | string           | Page View |
            | page name               | app:publica:general:recuperacion token movil:tarjeta no asociada | string           | Page View |
            | level 1                 | recuperacion token movil                                         | string           | Page View |
            | level 2                 | tarjeta no asociada                                              | string           | Page View |
            | error page              | tarjeta no asociada                                              | string           | Page View |
            | language                | ES                                                               | string           | Page View |
            | page area               | publica                                                          | string           | Page View |
            | page intent             | informacion                                                      | string           | Page View |
            | channel                 | online                                                           | string           | Page View |
            | page instance ID        | de                                                               | string           | Page View |
            | page info version       | appVersion                                                       | regexp named     | Page View |
            | page segment            | general                                                          | string           | Page View |
            | sysEnv                  | app                                                              | string           | Page View |
            | business unit           | BBVA Mexico                                                      | string           | Page View |
            | site app name           | App BBVA Mexico                                                  | string           | Page View |
            | project name            | Glomo                                                            | string           | Page View |
            | device mobile           | si                                                               | string           | Page View |
            | user userState          | no logado                                                        | string           | Page View |
            | internal campaign       |                                                                  | empty array      | Page View |
            | optimization attributes |                                                                  | empty array      | Page View |
            | application             |                                                                  | empty str object | Page View |
            | products attributes     |                                                                  | empty array      | Page View |

    @ANA_EVENT_DAC012
    @analytics
    @MX @manual @JIRA.GLOMOGL-36902
    @!vbank @backend(test)
    @android @ios @web
    Scenario: Device Access - App Page View Error - Something is wrong
        Given a user with the following criteria
            | criteria             |
            | customer card number |
            | status blocked       |
        And the user begins the process without card or account
        And the analytics interceptor service is initiated
        When the user does not take good photos
        Then the analytics events contains the following variables
            | item                    | value                                                        | type             | event     |
            | analytics               | analytics/glomo_base                                         | json schema      | Page View |
            | version DL              | 20250414_5.0                                                 | string           | Page View |
            | page name               | app:publica:general:recuperacion token movil:algo salio mal  | string           | Page View |
            | level 1                 | recuperacion token movil                                     | string           | Page View |
            | level 2                 | algo salio mal                                               | string           | Page View |
            | error page              | algo salio mal                                               | string           | Page View |
            | language                | ES                                                           | string           | Page View |
            | page area               | publica                                                      | string           | Page View |
            | page intent             | informacion                                                  | string           | Page View |
            | channel                 | online                                                       | string           | Page View |
            | page instance ID        | de                                                           | string           | Page View |
            | page info version       | appVersion                                                   | regexp named     | Page View |
            | page segment            | general                                                      | string           | Page View |
            | sysEnv                  | app                                                          | string           | Page View |
            | business unit           | BBVA Mexico                                                  | string           | Page View |
            | site app name           | App BBVA Mexico                                              | string           | Page View |
            | project name            | Glomo                                                        | string           | Page View |
            | device mobile           | si                                                           | string           | Page View |
            | user userState          | no logado                                                    | string           | Page View |
            | internal campaign       |                                                              | empty array      | Page View |
            | optimization attributes |                                                              | empty array      | Page View |
            | application             |                                                              | empty str object | Page View |
            | products attributes     |                                                              | empty array      | Page View |

    @ANA_EVENT_DAC013
    @analytics
    @MX @manual @JIRA.GLOMOGL-36902
    @!vbank @backend(test)
    @android @ios @web
    Scenario: Device Access - App Page View Error - Identity incorrect
        Given a user with the following criteria
            | criteria             |
            | customer card number |
            | status blocked       |
        And the user begins the process without card or account
        And the analytics interceptor service is initiated
        When the user user identity is not confirmed
        Then the analytics events contains the following variables
            | item                    | value                                                              | type             | event     |
            | analytics               | analytics/glomo_base                                               | json schema      | Page View |
            | version DL              | 20250414_5.0                                                       | string           | Page View |
            | page name               | app:publica:general:recuperacion token movil:identidad incorrecta  | string           | Page View |
            | level 1                 | recuperacion token movil                                           | string           | Page View |
            | level 2                 | identidad incorrecta                                               | string           | Page View |
            | error page              | identidad incorrecta                                               | string           | Page View |
            | language                | ES                                                                 | string           | Page View |
            | page area               | publica                                                            | string           | Page View |
            | page intent             | informacion                                                        | string           | Page View |
            | channel                 | online                                                             | string           | Page View |
            | page instance ID        | de                                                                 | string           | Page View |
            | page info version       | appVersion                                                         | regexp named     | Page View |
            | page segment            | general                                                            | string           | Page View |
            | sysEnv                  | app                                                                | string           | Page View |
            | business unit           | BBVA Mexico                                                        | string           | Page View |
            | site app name           | App BBVA Mexico                                                    | string           | Page View |
            | project name            | Glomo                                                              | string           | Page View |
            | device mobile           | si                                                                 | string           | Page View |
            | user userState          | no logado                                                          | string           | Page View |
            | internal campaign       |                                                                    | empty array      | Page View |
            | optimization attributes |                                                                    | empty array      | Page View |
            | application             |                                                                    | empty str object | Page View |
            | products attributes     |                                                                    | empty array      | Page View |

    @ANA_EVENT_DAC014
    @analytics
    @MX @manual @JIRA.GLOMOGL-36902
    @!vbank @backend(test)
    @android @ios @web
    Scenario: Device Access - App Page View - Facial recognition blocked error
        Given a user with the following criteria
            | criteria             |
            | customer card number |
            | biometric client     |
        And the user begins the reactivation process and requests facial verification
        And the user scan his face but the service responds with an error several times
        And the analytics interceptor service is initiated
        When the user user accesses to the facial recognition blocked modal
        Then the analytics events contains the following variables
            | item                    | value                                                                        | type             | event     |
            | analytics               | analytics/glomo_base                                                         | json schema      | Page View |
            | version DL              | 20250414_5.0                                                                 | string           | Page View |
            | page name               | app:publica:general:recuperacion token movil:reconocimiento facial bloqueado | string           | Page View |
            | level 1                 | recuperacion token movil                                                     | string           | Page View |
            | level 2                 | reconocimiento facial bloqueado                                              | string           | Page View |
            | error page              | reconocimiento facial bloqueado                                              | string           | Page View |
            | language                | ES                                                                           | string           | Page View |
            | page area               | publica                                                                      | string           | Page View |
            | page intent             | informacion                                                                  | string           | Page View |
            | channel                 | online                                                                       | string           | Page View |
            | page instance ID        | de                                                                           | string           | Page View |
            | page info version       | appVersion                                                                   | regexp named     | Page View |
            | page segment            | general                                                                      | string           | Page View |
            | sysEnv                  | app                                                                          | string           | Page View |
            | business unit           | BBVA Mexico                                                                  | string           | Page View |
            | site app name           | App BBVA Mexico                                                              | string           | Page View |
            | project name            | Glomo                                                                        | string           | Page View |
            | device mobile           | si                                                                           | string           | Page View |
            | user userState          | no logado                                                                    | string           | Page View |
            | internal campaign       |                                                                              | empty array      | Page View |
            | optimization attributes |                                                                              | empty array      | Page View |
            | application             |                                                                              | empty str object | Page View |
            | products attributes     |                                                                              | empty array      | Page View |

    @ANA_EVENT_DAC015
    @analytics
    @MX @manual @JIRA.GLOMOGL-36902
    @!vbank @backend(test)
    @android @ios @web
    Scenario: Device Access - External Link - I dont have a Qr
        Given a user with the following criteria
            | criteria             |
            | customer card number |
            | biometric client     |
        And the user accesses to the reactivation screen and beggins the process
        And the user starts the scan of the Qr of the card
        And the analytics interceptor service is initiated
        When the user taps in the I don't have a QR tab
        Then the analytics events contains the following variables
            | item                    | value                                           | type             | event         |
            | analytics               | analytics/glomo_base                            | json schema      | Page View     |
            | version DL              | 20250414_5.0                                    | string           | Page View     |
            | page name               | app:publica:general:recuperacion token movil:qr | string           | Page View     |
            | level 1                 | recuperacion token movil                        | string           | Page View     |
            | level 2                 | qr                                              | string           | Page View     |
            | link url                | tengo un qr                                     | string           | External Link |
            | language                | ES                                              | string           | Page View     |
            | page area               | publica                                         | string           | Page View     |
            | page intent             | informacion                                     | string           | Page View     |
            | channel                 | online                                          | string           | Page View     |
            | page instance ID        | de                                              | string           | Page View     |
            | page info version       | appVersion                                      | regexp named     | Page View     |
            | page segment            | general                                         | string           | Page View     |
            | sysEnv                  | app                                             | string           | Page View     |
            | business unit           | BBVA Mexico                                     | string           | Page View     |
            | site app name           | App BBVA Mexico                                 | string           | Page View     |
            | project name            | Glomo                                           | string           | Page View     |
            | device mobile           | si                                              | string           | Page View     |
            | user userState          | no logado                                       | string           | Page View     |
            | internal campaign       |                                                 | empty array      | Page View     |
            | optimization attributes |                                                 | empty array      | Page View     |
            | application             |                                                 | empty str object | Page View     |
            | products attributes     |                                                 | empty array      | Page View     |

    @ANA_EVENT_DAC016
    @analytics
    @MX @manual @JIRA.GLOMOGL-36902
    @!vbank @backend(test)
    @android @ios @web
    Scenario: Device Access - App Page View - Repeat registration error
        Given a user with the following criteria
            | criteria             |
            | customer card number |
            | status c4            |
        And the user accesses the Login Screen
        And the analytics interceptor service is initiated
        When the user reactivates his account
        Then the analytics events contains the following variables
            | item                    | value                                                         | type             | event     |
            | analytics               | analytics/glomo_base                                          | json schema      | Page View |
            | version DL              | 20250414_5.0                                                  | string           | Page View |
            | page name               | app:publica:general:recuperacion token movil:repetir registro | string           | Page View |
            | level 1                 | recuperacion token movil                                      | string           | Page View |
            | level 2                 | repetir registro                                              | string           | Page View |
            | error page              | repetir registro                                              | string           | Page View |
            | language                | ES                                                            | string           | Page View |
            | page area               | publica                                                       | string           | Page View |
            | page intent             | informacion                                                   | string           | Page View |
            | channel                 | online                                                        | string           | Page View |
            | page instance ID        | de                                                            | string           | Page View |
            | page info version       | appVersion                                                    | regexp named     | Page View |
            | page segment            | general                                                       | string           | Page View |
            | sysEnv                  | app                                                           | string           | Page View |
            | business unit           | BBVA Mexico                                                   | string           | Page View |
            | site app name           | App BBVA Mexico                                               | string           | Page View |
            | project name            | Glomo                                                         | string           | Page View |
            | device mobile           | si                                                            | string           | Page View |
            | user userState          | no logado                                                     | string           | Page View |
            | internal campaign       |                                                               | empty array      | Page View |
            | optimization attributes |                                                               | empty array      | Page View |
            | application             |                                                               | empty str object | Page View |
            | products attributes     |                                                               | empty array      | Page View |

    @ANA_EVENT_DAC017
    @analytics
    @MX @manual @JIRA.GLOMOGL-36902
    @!vbank @backend(test)
    @android @ios @web
    Scenario: Device Access - App Page View - Invalid card error
        Given a user with the following criteria
            | criteria             |
            | customer card number |
        And the user reactivates his account
        And the user inserts card number
        And the analytics interceptor service is initiated
        When the user accesses to verification page
        Then the analytics events contains the following variables
            | item                    | value                                                          | type             | event     |
            | analytics               | analytics/glomo_base                                           | json schema      | Page View |
            | version DL              | 20250414_5.0                                                   | string           | Page View |
            | page name               | app:publica:general:recuperacion token movil:tarjeta no valida | string           | Page View |
            | level 1                 | recuperacion token movil                                       | string           | Page View |
            | level 2                 | tarjeta no valida                                              | string           | Page View |
            | error page              | tarjeta no valida                                              | string           | Page View |
            | language                | ES                                                             | string           | Page View |
            | page area               | publica                                                        | string           | Page View |
            | page intent             | informacion                                                    | string           | Page View |
            | channel                 | online                                                         | string           | Page View |
            | page instance ID        | de                                                             | string           | Page View |
            | page info version       | appVersion                                                     | regexp named     | Page View |
            | page segment            | general                                                        | string           | Page View |
            | sysEnv                  | app                                                            | string           | Page View |
            | business unit           | BBVA Mexico                                                    | string           | Page View |
            | site app name           | App BBVA Mexico                                                | string           | Page View |
            | project name            | Glomo                                                          | string           | Page View |
            | device mobile           | si                                                             | string           | Page View |
            | user userState          | no logado                                                      | string           | Page View |
            | internal campaign       |                                                                | empty array      | Page View |
            | optimization attributes |                                                                | empty array      | Page View |
            | application             |                                                                | empty str object | Page View |
            | products attributes     |                                                                | empty array      | Page View |

    @ANA_EVENT_DAC018
    @analytics
    @MX @manual @JIRA.GLOMOGL-36902
    @!vbank @backend(test)
    @android @ios @web
    Scenario: Device Access - App Page View - Retry with card
        Given a user with the following criteria
        | criteria             |
        | customer card number |
        And the user reactivates his account
        And the user inserts card number
        And the analytics interceptor service is initiated
        When the user accesses to verification page
        Then the analytics events contains the following variables
            | item                    | value                                                               | type             | event     |
            | analytics               | analytics/glomo_base                                                | json schema      | Page View |
            | version DL              | 20250414_5.0                                                        | string           | Page View |
            | page name               | app:publica:general:recuperacion token movil:reintentar con tarjeta | string           | Page View |
            | level 1                 | recuperacion token movil                                            | string           | Page View |
            | level 2                 | reintentar con tarjeta                                              | string           | Page View |
            | error page              | reintentar con tarjeta                                              | string           | Page View |
            | language                | ES                                                                  | string           | Page View |
            | page area               | publica                                                             | string           | Page View |
            | page intent             | informacion                                                         | string           | Page View |
            | channel                 | online                                                              | string           | Page View |
            | page instance ID        | de                                                                  | string           | Page View |
            | page info version       | appVersion                                                          | regexp named     | Page View |
            | page segment            | general                                                             | string           | Page View |
            | sysEnv                  | app                                                                 | string           | Page View |
            | business unit           | BBVA Mexico                                                         | string           | Page View |
            | site app name           | App BBVA Mexico                                                     | string           | Page View |
            | project name            | Glomo                                                               | string           | Page View |
            | device mobile           | si                                                                  | string           | Page View |
            | user userState          | no logado                                                           | string           | Page View |
            | internal campaign       |                                                                     | empty array      | Page View |
            | optimization attributes |                                                                     | empty array      | Page View |
            | application             |                                                                     | empty str object | Page View |
            | products attributes     |                                                                     | empty array      | Page View |

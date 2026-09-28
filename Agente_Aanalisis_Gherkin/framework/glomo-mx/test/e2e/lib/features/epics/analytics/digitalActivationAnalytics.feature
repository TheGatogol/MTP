@digitalActivationAnalytics
Feature: Analytics - Digital Activation

    @ANA_EVENT_DIA001
    @analytics
    @MX @manual @JIRA.GLOMOGL-20021
    @vbank @backend(test)
    @ios @android @web
    Scenario: Register Digital Activation - APP Onclick Start
        Given a user with the following criteria
            | criteria             |
            | debit card cancelled |
        And a user accesses the application
        And the analytics interceptor service is initiated
        When the user accesses to Digital Activation Flow
        Then the analytics events contains the following variables:
            | item                    | value                     | type         | event             |
            | analytics               | analytics/glomo_base      | json schema  | App Onclick Start |
            | version DL              | 20250414_5.0              | string       | App Onclick Start |
            | page name               | app:publica:general:login | string       | App Onclick Start |
            | level 1                 | login                     | string       | App Onclick Start |
            | language                | ES                        | string       | App Onclick Start |
            | page area               | publica                   | string       | App Onclick Start |
            | page intent             | home                      | string       | App Onclick Start |
            | channel                 | online                    | string       | App Onclick Start |
            | page instance ID        | de                        | string       | App Onclick Start |
            | page info version       | appVersion                | regexp named | App Onclick Start |
            | page segment            | general                   | string       | App Onclick Start |
            | sysEnv                  | app                       | string       | App Onclick Start |
            | business unit           | BBVA Mexico               | string       | App Onclick Start |
            | site app name           | App BBVA Mexico           | string       | App Onclick Start |
            | project name            | Glomo                     | string       | App Onclick Start |
            | device mobile           | si                        | string       | App Onclick Start |
            | user userState          | no logado                 | string       | App Onclick Start |
            | prospect ID             | 1234567890                | string       | App Onclick Start |
            | user segment profile    | desconocido               | string       | App Onclick Start |
            | global application      | digital activation        | string       | App Onclick Start |
            | application name        | registro token movil      | string       | App Onclick Start |
            | application type        | alta clientes             | string       | App Onclick Start |
            | application step        | login                     | string       | App Onclick Start |
            | fulfillment model       | online                    | string       | App Onclick Start |
            | internal campaign       |                           | empty array  | App Onclick Start |
            | optimization attributes |                           | empty array  | App Onclick Start |
            | products attributes     |                           | empty array  | App Onclick Start |

    @ANA_EVENT_DIA002
    @analytics
    @MX
    @vbank @backend(test)
    @ios @android @web
    @web-done
    Scenario: Register Digital Activation - App Page Visit
        Given a user with the following criteria
            | criteria             |
            | debit card cancelled |
        And a user accesses the application
        And the analytics interceptor service is initiated
        When the user accesses to Digital Activation Flow
        Then the analytics events contains the following variables
            | item                    | value                                             | type         | event          |
            | analytics               | analytics/glomo_base                              | json schema  | App Page Visit |
            | version DL              | 20250414_5.0                                      | string       | App Page Visit |
            | page name               | app:publica:personas:registro token movil:1 datos | string       | App Page Visit |
            | level 1                 | registro token movil                              | string       | App Page Visit |
            | level 2                 | 1 datos                                           | string       | App Page Visit |
            | language                | ES                                                | string       | App Page Visit |
            | page area               | publica                                           | string       | App Page Visit |
            | page intent             | informacion                                       | string       | App Page Visit |
            | channel                 | online                                            | string       | App Page Visit |
            | page instance ID        | de                                                | string       | App Page Visit |
            | page info version       | appVersion                                        | regexp named | App Page Visit |
            | page segment            | personas                                          | string       | App Page Visit |
            | sysEnv                  | app                                               | string       | App Page Visit |
            | business unit           | BBVA Mexico                                       | string       | App Page Visit |
            | site app name           | App BBVA Mexico                                   | string       | App Page Visit |
            | project name            | Glomo                                             | string       | App Page Visit |
            | device mobile           | si                                                | string       | App Page Visit |
            | user userState          | no logado                                         | string       | App Page Visit |
            | user segment profile    | desconocido                                       | string       | App Page Visit |
            | global application      | digital activation                                | string       | App Page Visit |
            | application name        | registro token movil                              | string       | App Page Visit |
            | application type        | alta clientes                                     | string       | App Page Visit |
            | application step        | 1 datos                                           | string       | App Page Visit |
            | fulfillment model       | online                                            | string       | App Page Visit |
            | qualified visits        | false                                             | string       | App Page Visit |
            | internal campaign       |                                                   | empty array  | App Page Visit |
            | optimization attributes |                                                   | empty array  | App Page Visit |
            | products attributes     |                                                   | empty array  | App Page Visit |

    @ANA_EVENT_DIA003
    @analytics
    @MX
    @vbank @backend(test)
    @ios @android @web
    @web-done
    Scenario: Register Digital Activation - APP Started
        Given a user with the following criteria
            | criteria             |
            | debit card cancelled |
        And the user accesses to Digital Activation Flow
        And the analytics interceptor service is initiated
        When the user completes the Digital Activation Flow
        Then the analytics events contains the following variables:
            | item                    | value                                             | type         | event       |
            | analytics               | analytics/glomo_base                              | json schema  | App Started |
            | version DL              | 20250414_5.0                                      | string       | App Started |
            | page name               | app:publica:personas:registro token movil:1 datos | string       | App Started |
            | level 1                 | registro token movil                              | string       | App Started |
            | level 2                 | 1 datos                                           | string       | App Started |
            | language                | ES                                                | string       | App Started |
            | page area               | publica                                           | string       | App Started |
            | page intent             | informacion                                       | string       | App Started |
            | channel                 | online                                            | string       | App Started |
            | page instance ID        | de                                                | string       | App Started |
            | page info version       | appVersion                                        | regexp named | App Started |
            | page segment            | personas                                          | string       | App Started |
            | sysEnv                  | app                                               | string       | App Started |
            | business unit           | BBVA Mexico                                       | string       | App Started |
            | site app name           | App BBVA Mexico                                   | string       | App Started |
            | project name            | Glomo                                             | string       | App Started |
            | device mobile           | si                                                | string       | App Started |
            | user userState          | no logado                                         | string       | App Started |
            | user segment profile    | desconocido                                       | string       | App Started |
            | global application      | digital activation                                | string       | App Started |
            | application name        | registro token movil                              | string       | App Started |
            | application type        | alta clientes                                     | string       | App Started |
            | application step        | click numero celular                              | string       | App Started |
            | fulfillment model       | online                                            | string       | App Started |
            | internal campaign       |                                                   | empty array  | App Started |
            | optimization attributes |                                                   | empty array  | App Started |
            | products attributes     |                                                   | empty array  | App Started |

    @ANA_EVENT_DIA004
    @analytics
    @MX @manual @JIRA.GLOMOGL-20021
    @vbank @backend(test)
    @ios @android @web
    Scenario: Register Digital Activation - APP Step 2
        Given a user with the following criteria
            | criteria             |
            | debit card cancelled |
        And the user accesses to Digital Activation Flow
        And the analytics interceptor service is initiated
        When the user completes the Digital Activation Flow
        Then the analytics events contains the following variables:
            | item                    | value                                                              | type         | event      |
            | analytics               | analytics/glomo_base                                               | json schema  | App Step 2 |
            | version DL              | 20250414_5.0                                                       | string       | App Step 2 |
            | page name               | app:publica:personas:registro token movil:2 terminos y condiciones | string       | App Step 2 |
            | level 1                 | registro token movil                                               | string       | App Step 2 |
            | level 2                 | 2 terminos y condiciones                                           | string       | App Step 2 |
            | language                | ES                                                                 | string       | App Step 2 |
            | page area               | publica                                                            | string       | App Step 2 |
            | page intent             | informacion                                                        | string       | App Step 2 |
            | channel                 | online                                                             | string       | App Step 2 |
            | page instance ID        | de                                                                 | string       | App Step 2 |
            | page info version       | appVersion                                                         | regexp named | App Step 2 |
            | page segment            | personas                                                           | string       | App Step 2 |
            | sysEnv                  | app                                                                | string       | App Step 2 |
            | business unit           | BBVA Mexico                                                        | string       | App Step 2 |
            | site app name           | App BBVA Mexico                                                    | string       | App Step 2 |
            | project name            | Glomo                                                              | string       | App Step 2 |
            | device mobile           | si                                                                 | string       | App Step 2 |
            | user userState          | no logado                                                          | string       | App Step 2 |
            | prospect ID             | 1234567890                                                         | string       | App Step 2 |
            | user segment profile    | cliente adicional                                                  | string       | App Step 2 |
            | global application      | digital activation                                                 | string       | App Step 2 |
            | application name        | registro token movil                                               | string       | App Step 2 |
            | application type        | alta clientes                                                      | string       | App Step 2 |
            | application typology    | registro normal                                                    | string       | App Step 2 |
            | application step        | 2 terminos y condiciones                                           | string       | App Step 2 |
            | fulfillment model       | online                                                             | string       | App Step 2 |
            | internal campaign       |                                                                    | empty array  | App Step 2 |
            | optimization attributes |                                                                    | empty array  | App Step 2 |
            | products attributes     |                                                                    | empty array  | App Step 2 |

    @ANA_EVENT_DIA005
    @analytics
    @MX @manual @JIRA.GLOMOGL-20021
    @vbank @backend(test)
    @ios @android @web
    Scenario: Register Digital Activation - APP Step 3
        Given a user with the following criteria
            | criteria             |
            | debit card cancelled |
        And the user accesses to Digital Activation Flow
        And the analytics interceptor service is initiated
        When the user completes the Digital Activation Flow
        Then the analytics events contains the following variables:
            | item                    | value                                                  | type         | event      |
            | analytics               | analytics/glomo_base                                   | json schema  | App Step 3 |
            | version DL              | 20250414_5.0                                           | string       | App Step 3 |
            | page name               | app:publica:personas:registro token movil:3 contrasena | string       | App Step 3 |
            | level 1                 | registro token movil                                   | string       | App Step 3 |
            | level 2                 | 3 contrasena                                           | string       | App Step 3 |
            | language                | ES                                                     | string       | App Step 3 |
            | page area               | publica                                                | string       | App Step 3 |
            | page intent             | informacion                                            | string       | App Step 3 |
            | channel                 | online                                                 | string       | App Step 3 |
            | page instance ID        | de                                                     | string       | App Step 3 |
            | page info version       | appVersion                                             | regexp named | App Step 3 |
            | page segment            | personas                                               | string       | App Step 3 |
            | sysEnv                  | app                                                    | string       | App Step 3 |
            | business unit           | BBVA Mexico                                            | string       | App Step 3 |
            | site app name           | App BBVA Mexico                                        | string       | App Step 3 |
            | project name            | Glomo                                                  | string       | App Step 3 |
            | device mobile           | si                                                     | string       | App Step 3 |
            | user userState          | no logado                                              | string       | App Step 3 |
            | prospect ID             | 1234567890                                             | string       | App Step 3 |
            | user segment profile    | cliente adicional                                      | string       | App Step 3 |
            | global application      | digital activation                                     | string       | App Step 3 |
            | application name        | registro token movil                                   | string       | App Step 3 |
            | application type        | alta clientes                                          | string       | App Step 3 |
            | application typology    | registro normal                                        | string       | App Step 3 |
            | application step        | 3 contrasena                                           | string       | App Step 3 |
            | fulfillment model       | online                                                 | string       | App Step 3 |
            | internal campaign       |                                                        | empty array  | App Step 3 |
            | optimization attributes |                                                        | empty array  | App Step 3 |
            | products attributes     |                                                        | empty array  | App Step 3 |

    @ANA_EVENT_DIA006
    @analytics
    @MX @manual @JIRA.GLOMOGL-20021
    @vbank @backend(test)
    @ios @android @web
    Scenario: Register Digital Activation -  APP Step 4
        Given a user with the following criteria
            | criteria             |
            | debit card cancelled |
        And the user accesses to Digital Activation Flow
        And the analytics interceptor service is initiated
        When the user completes the Digital Activation Flow
        Then the analytics events contains the following variables:
            | item                    | value                                                    | type         | event      |
            | analytics               | analytics/glomo_base                                     | json schema  | App Step 4 |
            | version DL              | 20250414_5.0                                             | string       | App Step 4 |
            | page name               | app:publica:personas:registro token movil:4 confirmacion | string       | App Step 4 |
            | level 1                 | registro token movil                                     | string       | App Step 4 |
            | level 2                 | 4 confirmacion                                           | string       | App Step 4 |
            | language                | ES                                                       | string       | App Step 4 |
            | page area               | publica                                                  | string       | App Step 4 |
            | page intent             | informacion                                              | string       | App Step 4 |
            | channel                 | online                                                   | string       | App Step 4 |
            | page instance ID        | de                                                       | string       | App Step 4 |
            | page info version       | appVersion                                               | regexp named | App Step 4 |
            | page segment            | personas                                                 | string       | App Step 4 |
            | sysEnv                  | app                                                      | string       | App Step 4 |
            | business unit           | BBVA Mexico                                              | string       | App Step 4 |
            | site app name           | App BBVA Mexico                                          | string       | App Step 4 |
            | project name            | Glomo                                                    | string       | App Step 4 |
            | device mobile           | si                                                       | string       | App Step 4 |
            | user userState          | no logado                                                | string       | App Step 4 |
            | prospect ID             | 1234567890                                               | string       | App Step 4 |
            | user segment profile    | cliente adicional                                        | string       | App Step 4 |
            | global application      | digital activation                                       | string       | App Step 4 |
            | application name        | registro token movil                                     | string       | App Step 4 |
            | application type        | alta clientes                                            | string       | App Step 4 |
            | application typology    | registro normal                                          | string       | App Step 4 |
            | application step        | 4 confirmacion                                           | string       | App Step 4 |
            | fulfillment model       | online                                                   | string       | App Step 4 |
            | internal campaign       |                                                          | empty array  | App Step 4 |
            | optimization attributes |                                                          | empty array  | App Step 4 |
            | products attributes     |                                                          | empty array  | App Step 4 |

    @ANA_EVENT_DIA007
    @analytics
    @MX @manual @JIRA.GLOMOGL-20021
    @vbank @backend(test)
    @ios @android @web
    Scenario: Register Digital Activation - App Completed (Contratado)
        Given a user with the following criteria
            | criteria             |
            | debit card cancelled |
        And the user accesses to Digital Activation Flow
        And the analytics interceptor service is initiated
        When the user completes the Digital Activation Flow
        Then the analytics events contains the following variables:
            | item                    | value                                                    | type         | event         |
            | analytics               | analytics/glomo_base                                     | json schema  | App Completed |
            | version DL              | 20250414_5.0                                             | string       | App Completed |
            | page name               | app:publica:personas:registro token movil:pagina exitosa | string       | App Completed |
            | level 1                 | registro token movil                                     | string       | App Completed |
            | level 2                 | pagina exitosa                                           | string       | App Completed |
            | language                | ES                                                       | string       | App Completed |
            | page area               | publica                                                  | string       | App Completed |
            | page intent             | informacion                                              | string       | App Completed |
            | channel                 | online                                                   | string       | App Completed |
            | page instance ID        | de                                                       | string       | App Completed |
            | page info version       | appVersion                                               | regexp named | App Completed |
            | page segment            | personas                                                 | string       | App Completed |
            | sysEnv                  | app                                                      | string       | App Completed |
            | business unit           | BBVA Mexico                                              | string       | App Completed |
            | site app name           | App BBVA Mexico                                          | string       | App Completed |
            | project name            | Glomo                                                    | string       | App Completed |
            | device mobile           | si                                                       | string       | App Completed |
            | user userState          | no logado                                                | string       | App Completed |
            | prospect ID             | 1234567890                                               | string       | App Completed |
            | user segment profile    | cliente adicional                                        | string       | App Completed |
            | global application      | digital activation                                       | string       | App Completed |
            | application name        | registro token movil                                     | string       | App Completed |
            | application type        | alta clientes                                            | string       | App Completed |
            | application typology    | registro normal                                          | string       | App Completed |
            | application step        | pagina exitosa                                           | string       | App Completed |
            | application state       | finalizado                                               | string       | App Completed |
            | fulfillment model       | online                                                   | string       | App Completed |
            | product state           | finalizado                                               | string       | App Completed |
            | internal campaign       |                                                          | empty array  | App Completed |
            | optimization attributes |                                                          | empty array  | App Completed |
            | products attributes     |                                                          | empty array  | App Completed |

    @ANA_EVENT_DIA008
    @analytics
    @MX @manual @JIRA.GLOMOGL-20021
    @vbank @backend(test)
    @ios @android @web
    Scenario: Digital Activation - APP Onclick Start
        Given a user with the following criteria
            | criteria             |
            | debit card cancelled |
        And the user accesses to Digital Activation Flow
        And the analytics interceptor service is initiated
        When the user completes the Digital Activation Flow
        Then the analytics events contains the following variables:
            | item                    | value                                           | type         | event             |
            | analytics               | analytics/glomo_base                            | json schema  | App Onclick Start |
            | version DL              | 20250414_5.0                                    | string       | App Onclick Start |
            | page name               | app:publica:personas:token movil:pagina exitosa | string       | App Onclick Start |
            | level 1                 | token movil                                     | string       | App Onclick Start |
            | level 2                 | pagina exitosa                                  | string       | App Onclick Start |
            | language                | ES                                              | string       | App Onclick Start |
            | page area               | publica                                         | string       | App Onclick Start |
            | page intent             | informacion                                     | string       | App Onclick Start |
            | channel                 | online                                          | string       | App Onclick Start |
            | page instance ID        | de                                              | string       | App Onclick Start |
            | page info version       | appVersion                                      | regexp named | App Onclick Start |
            | page segment            | personas                                        | string       | App Onclick Start |
            | sysEnv                  | app                                             | string       | App Onclick Start |
            | business unit           | BBVA Mexico                                     | string       | App Onclick Start |
            | site app name           | App BBVA Mexico                                 | string       | App Onclick Start |
            | project name            | Glomo                                           | string       | App Onclick Start |
            | device mobile           | si                                              | string       | App Onclick Start |
            | user userState          | no logado                                       | string       | App Onclick Start |
            | prospect ID             | 1234567890                                      | string       | App Onclick Start |
            | user segment profile    | cliente adicional                               | string       | App Onclick Start |
            | global application      | digital activation                              | string       | App Onclick Start |
            | application name        | token movil                                     | string       | App Onclick Start |
            | application type        | alta clientes                                   | string       | App Onclick Start |
            | application step        | pagina exitosa                                  | string       | App Onclick Start |
            | fulfillment model       | online                                          | string       | App Onclick Start |
            | internal campaign       |                                                 | empty array  | App Onclick Start |
            | optimization attributes |                                                 | empty array  | App Onclick Start |
            | products attributes     |                                                 | empty array  | App Onclick Start |

    @ANA_EVENT_DIA009
    @analytics
    @MX @manual @JIRA.GLOMOGL-20021
    @vbank @backend(test)
    @ios @android @web
    Scenario: Digital Activation - APP Page Visit
        Given a user with the following criteria
            | criteria             |
            | debit card cancelled |
        And the user accesses to Digital Activation following
        And the user completes the Digital Activation Flow
        And the analytics interceptor service is initiated
        When the user closes success registration modal
        Then the analytics events contains the following variables:
            | item                                            | value                                                           | type         | event          |
            | analytics                                       | analytics/glomo_base                                            | json schema  | App Page Visit |
            | version DL                                      | 20250414_5.0                                                    | string       | App Page Visit |
            | page name                                       | app:publica:personas:token movil:1 activa tus servicios moviles | string       | App Page Visit |
            | level 1                                         | token movil                                                     | string       | App Page Visit |
            | level 2                                         | 1 activa tus servicios moviles                                  | string       | App Page Visit |
            | language                                        | ES                                                              | string       | App Page Visit |
            | page area                                       | publica                                                         | string       | App Page Visit |
            | page intent                                     | informacion                                                     | string       | App Page Visit |
            | channel                                         | online                                                          | string       | App Page Visit |
            | page instance ID                                | de                                                              | string       | App Page Visit |
            | page info version                               | appVersion                                                      | regexp named | App Page Visit |
            | page segment                                    | personas                                                        | string       | App Page Visit |
            | sysEnv                                          | app                                                             | string       | App Page Visit |
            | business unit                                   | BBVA Mexico                                                     | string       | App Page Visit |
            | site app name                                   | App BBVA Mexico                                                 | string       | App Page Visit |
            | project name                                    | Glomo                                                           | string       | App Page Visit |
            | device mobile                                   | si                                                              | string       | App Page Visit |
            | user userState                                  | no logado                                                       | string       | App Page Visit |
            | prospect ID                                     | 1234567890                                                      | string       | App Page Visit |
            | user segment profile                            | cliente adicional                                               | string       | App Page Visit |
            | global application                              | digital activation                                              | string       | App Page Visit |
            | application name                                | token movil                                                     | string       | App Page Visit |
            | application type                                | alta clientes                                                   | string       | App Page Visit |
            | application step                                | 1 activa tus servicios moviles                                  | string       | App Page Visit |
            | fulfillment model                               | online                                                          | string       | App Page Visit |
            | window.digitalData.application.isQualifiedVisit | false                                                           | string       | App Page Visit |
            | internal campaign                               |                                                                 | empty array  | App Page Visit |
            | optimization attributes                         |                                                                 | empty array  | App Page Visit |
            | products attributes                             |                                                                 | empty array  | App Page Visit |

    @ANA_EVENT_DIA010
    @analytics
    @MX @manual @JIRA.GLOMOGL-20021
    @vbank @backend(test)
    @ios @android @web
    Scenario: Digital Activation - APP Started
        Given a user with the following criteria
            | criteria             |
            | debit card cancelled |
        And the user accesses to Digital Activation following
        And the user completes the Digital Activation Flow
        And the user closes success registration modal
        And the analytics interceptor service is initiated
        When the user initiates call to customer support
        Then the analytics events contains the following variables:
            | item                    | value                                                           | type         | event       |
            | analytics               | analytics/glomo_base                                            | json schema  | App Started |
            | version DL              | 20250414_5.0                                                    | string       | App Started |
            | page name               | app:publica:personas:token movil:1 activa tus servicios moviles | string       | App Started |
            | level 1                 | token movil                                                     | string       | App Started |
            | level 2                 | 1 activa tus servicios moviles                                  | string       | App Started |
            | language                | ES                                                              | string       | App Started |
            | page area               | publica                                                         | string       | App Started |
            | page intent             | informacion                                                     | string       | App Started |
            | channel                 | online                                                          | string       | App Started |
            | page instance ID        | de                                                              | string       | App Started |
            | page info version       | appVersion                                                      | regexp named | App Started |
            | page segment            | personas                                                        | string       | App Started |
            | sysEnv                  | app                                                             | string       | App Started |
            | business unit           | BBVA Mexico                                                     | string       | App Started |
            | site app name           | App BBVA Mexico                                                 | string       | App Started |
            | project name            | Glomo                                                           | string       | App Started |
            | device mobile           | si                                                              | string       | App Started |
            | user userState          | no logado                                                       | string       | App Started |
            | prospect ID             | 1234567890                                                      | string       | App Started |
            | user segment profile    | cliente adicional                                               | string       | App Started |
            | global application      | digital activation                                              | string       | App Started |
            | application name        | token movil                                                     | string       | App Started |
            | application type        | alta clientes                                                   | string       | App Started |
            | application step        | solicitar llamada                                               | string       | App Started |
            | fulfillment model       | online                                                          | string       | App Started |
            | internal campaign       |                                                                 | empty array  | App Started |
            | optimization attributes |                                                                 | empty array  | App Started |
            | products attributes     |                                                                 | empty array  | App Started |

    @ANA_EVENT_DIA011
    @analytics
    @MX @manual @JIRA.GLOMOGL-20021
    @vbank @backend(test)
    @ios @android @web
    Scenario: Digital Activation - APP Step 2
        Given a user with the following criteria
            | criteria             |
            | debit card cancelled |
        And the user accesses to Digital Activation following
        And the user completes the Digital Activation Flow
        And the analytics interceptor service is initiated
        When the user requests call after closing success registration modal
        Then the analytics events contains the following variables:
            | item                    | value                                                   | type         | event      |
            | analytics               | analytics/glomo_base                                    | json schema  | App Step 2 |
            | version DL              | 20250414_5.0                                            | string       | App Step 2 |
            | page name               | app:publica:personas:token movil:2 solicitud de llamada | string       | App Step 2 |
            | level 1                 | token movil                                             | string       | App Step 2 |
            | level 2                 | 2 solicitud de llamada                                  | string       | App Step 2 |
            | language                | ES                                                      | string       | App Step 2 |
            | page area               | publica                                                 | string       | App Step 2 |
            | page intent             | informacion                                             | string       | App Step 2 |
            | channel                 | online                                                  | string       | App Step 2 |
            | page instance ID        | de                                                      | string       | App Step 2 |
            | page info version       | appVersion                                              | regexp named | App Step 2 |
            | page segment            | personas                                                | string       | App Step 2 |
            | sysEnv                  | app                                                     | string       | App Step 2 |
            | business unit           | BBVA Mexico                                             | string       | App Step 2 |
            | site app name           | App BBVA Mexico                                         | string       | App Step 2 |
            | project name            | Glomo                                                   | string       | App Step 2 |
            | device mobile           | si                                                      | string       | App Step 2 |
            | user userState          | no logado                                               | string       | App Step 2 |
            | prospect ID             | 1234567890                                              | string       | App Step 2 |
            | user segment profile    | cliente adicional                                       | string       | App Step 2 |
            | global application      | digital activation                                      | string       | App Step 2 |
            | application name        | token movil                                             | string       | App Step 2 |
            | application type        | alta clientes                                           | string       | App Step 2 |
            | application step        | 2 solicitud de llamada                                  | string       | App Step 2 |
            | fulfillment model       | online                                                  | string       | App Step 2 |
            | internal campaign       |                                                         | empty array  | App Step 2 |
            | optimization attributes |                                                         | empty array  | App Step 2 |
            | products attributes     |                                                         | empty array  | App Step 2 |

    @ANA_EVENT_DIA012
    @analytics
    @MX @manual @JIRA.GLOMOGL-20021
    @vbank @backend(test)
    @ios @android @web
    Scenario: Digital Activation - APP Completed (Contratado)
        Given a user with the following criteria
            | criteria             |
            | debit card cancelled |
        And the user accesses to Digital Activation following
        And the user completes the Digital Activation Flow
        And the user closes success registration modal
        And the analytics interceptor service is initiated
        When the user requests call after closing success registration modal
        Then the analytics events contains the following variables:
            | item                    | value                                           | type         | event         |
            | analytics               | analytics/glomo_base                            | json schema  | App Completed |
            | version DL              | 20250414_5.0                                    | string       | App Completed |
            | page name               | app:publica:personas:token movil:pagina exitosa | string       | App Completed |
            | level 1                 | token movil                                     | string       | App Completed |
            | level 2                 | pagina exitosa                                  | string       | App Completed |
            | language                | ES                                              | string       | App Completed |
            | page area               | publica                                         | string       | App Completed |
            | page intent             | informacion                                     | string       | App Completed |
            | channel                 | online                                          | string       | App Completed |
            | page instance ID        | de                                              | string       | App Completed |
            | page info version       | appVersion                                      | regexp named | App Completed |
            | page segment            | personas                                        | string       | App Completed |
            | sysEnv                  | app                                             | string       | App Completed |
            | business unit           | BBVA Mexico                                     | string       | App Completed |
            | site app name           | App BBVA Mexico                                 | string       | App Completed |
            | project name            | Glomo                                           | string       | App Completed |
            | device mobile           | si                                              | string       | App Completed |
            | user userState          | no logado                                       | string       | App Completed |
            | prospect ID             | 1234567890                                      | string       | App Completed |
            | user segment profile    | cliente adicional                               | string       | App Completed |
            | global application      | digital activation                              | string       | App Completed |
            | application name        | token movil                                     | string       | App Completed |
            | application type        | alta clientes                                   | string       | App Completed |
            | application step        | pagina exitosa                                  | string       | App Completed |
            | application state       | contratado                                      | string       | App Completed |
            | fulfillment model       | online                                          | string       | App Completed |
            | product state           | contratado                                      | string       | App Completed |
            | internal campaign       |                                                 | empty array  | App Completed |
            | optimization attributes |                                                 | empty array  | App Completed |
            | products attributes     |                                                 | empty array  | App Completed |

    @ANA_EVENT_DIA013
    @analytics
    @MX
    @vbank @backend(test)
    @ios @android @web
    @web-done
    Scenario: Digital Activation - Page View - Datos de la Tarjeta
        Given a user with the following criteria
            | criteria              |
            | debit card cancelled  |
        And the user accesses to Digital Activation Flow
        And the analytics interceptor service is initiated
        When the user completes the Digital Activation Flow
        Then the analytics events contains the following variables:
            | item                    | value                                                         | type         | event     |
            | analytics               | analytics/glomo_base                                          | json schema  | Page View |
            | version DL              | 20250414_5.0                                                  | string       | Page View |
            | page name               | app:publica:personas:registro token movil:datos de la tarjeta | string       | Page View |
            | level 1                 | registro token movil                                          | string       | Page View |
            | level 2                 | datos de la tarjeta                                           | string       | Page View |
            | language                | ES                                                            | string       | Page View |
            | page area               | publica                                                       | string       | Page View |
            | page intent             | informacion                                                   | string       | Page View |
            | channel                 | online                                                        | string       | Page View |
            | page instance ID        | de                                                            | string       | Page View |
            | page info version       | appVersion                                                    | regexp named | Page View |
            | page segment            | personas                                                      | string       | Page View |
            | sysEnv                  | app                                                           | string       | Page View |
            | business unit           | BBVA Mexico                                                   | string       | Page View |
            | site app name           | App BBVA Mexico                                               | string       | Page View |
            | project name            | Glomo                                                         | string       | Page View |
            | device mobile           | si                                                            | string       | Page View |
            | internal campaign       |                                                               | empty array  | Page View |
            | optimization attributes |                                                               | empty array  | Page View |
            | products attributes     |                                                               | empty array  | Page View |

    @ANA_EVENT_DIA014
    @analytics
    @MX @manual @JIRA.GLOMOGL-20021
    @vbank @backend(test)
    @ios @android @web
    Scenario: Digital Activation - Page View - Informacion Identidad
        Given a user with the following criteria
            | criteria             |
            | debit card cancelled |
        And the user accesses to Digital Activation Flow
        And the analytics interceptor service is initiated
        When the user completes the Digital Activation Flow
        Then the analytics events contains the following variables:
            | item                    | value                                                           | type             | event     |
            | analytics               | analytics/glomo_base                                            | json schema      | Page View |
            | version DL              | 20250414_5.0                                                    | string           | Page View |
            | page name               | app:publica:personas:registro token movil:informacion identidad | string           | Page View |
            | level 1                 | registro token movil                                            | string           | Page View |
            | level 2                 | informacion identidad                                           | string           | Page View |
            | language                | ES                                                              | string           | Page View |
            | page area               | publica                                                         | string           | Page View |
            | page intent             | informacion                                                     | string           | Page View |
            | channel                 | online                                                          | string           | Page View |
            | page instance ID        | de                                                              | string           | Page View |
            | page info version       | appVersion                                                      | regexp named     | Page View |
            | page segment            | personas                                                        | string           | Page View |
            | sysEnv                  | app                                                             | string           | Page View |
            | business unit           | BBVA Mexico                                                     | string           | Page View |
            | site app name           | App BBVA Mexico                                                 | string           | Page View |
            | project name            | Glomo                                                           | string           | Page View |
            | device mobile           | si                                                              | string           | Page View |
            | user userState          | no logado                                                       | string           | Page View |
            | prospect ID             | 1234567890                                                      | string           | Page View |
            | user segment profile    | cliente adicional                                               | string           | Page View |
            | internal campaign       |                                                                 | empty array      | Page View |
            | optimization attributes |                                                                 | empty array      | Page View |
            | application             |                                                                 | empty str object | Page View |
            | products attributes     |                                                                 | empty array      | Page View |

    @ANA_EVENT_DIA015
    @analytics
    @MX @manual @JIRA.GLOMOGL-20021
    @vbank @backend(test)
    @ios @android @web
    Scenario: Digital Activation - Page View - Verificacion de Identidad
        Given a user with the following criteria
            | criteria             |
            | debit card cancelled |
        And the user accesses to Digital Activation Flow
        And the analytics interceptor service is initiated
        When the user completes the Digital Activation Flow
        Then the analytics events contains the following variables:
            | item                    | value                                                               | type             | event     |
            | analytics               | analytics/glomo_base                                                | json schema      | Page View |
            | version DL              | 20250414_5.0                                                        | string           | Page View |
            | page name               | app:publica:personas:registro token movil:verificacion de identidad | string           | Page View |
            | level 1                 | registro token movil                                                | string           | Page View |
            | level 2                 | verificacion de identidad                                           | string           | Page View |
            | language                | ES                                                                  | string           | Page View |
            | page area               | publica                                                             | string           | Page View |
            | page intent             | informacion                                                         | string           | Page View |
            | channel                 | online                                                              | string           | Page View |
            | page instance ID        | de                                                                  | string           | Page View |
            | page info version       | appVersion                                                          | regexp named     | Page View |
            | page segment            | personas                                                            | string           | Page View |
            | sysEnv                  | app                                                                 | string           | Page View |
            | business unit           | BBVA Mexico                                                         | string           | Page View |
            | site app name           | App BBVA Mexico                                                     | string           | Page View |
            | project name            | Glomo                                                               | string           | Page View |
            | device mobile           | si                                                                  | string           | Page View |
            | user userState          | no logado                                                           | string           | Page View |
            | prospect ID             | 1234567890                                                          | string           | Page View |
            | user segment profile    | cliente adicional                                                   | string           | Page View |
            | internal campaign       |                                                                     | empty array      | Page View |
            | optimization attributes |                                                                     | empty array      | Page View |
            | application             |                                                                     | empty str object | Page View |
            | products attributes     |                                                                     | empty array      | Page View |

    @ANA_EVENT_DIA016
    @analytics
    @MX @manual @JIRA.GLOMOGL-20021
    @vbank @backend(test)
    @ios @android @web
    Scenario: Digital Activation - Page View - Indicaciones INE
        Given a user with the following criteria
            | criteria             |
            | debit card cancelled |
        And the user accesses to Digital Activation Flow
        And the analytics interceptor service is initiated
        When the user completes the Digital Activation Flow
        Then the analytics events contains the following variables:
            | item                    | value                                                      | type             | event     |
            | analytics               | analytics/glomo_base                                       | json schema      | Page View |
            | version DL              | 20250414_5.0                                               | string           | Page View |
            | page name               | app:publica:personas:registro token movil:indicaciones ine | string           | Page View |
            | level 1                 | registro token movil                                       | string           | Page View |
            | level 2                 | indicaciones ine                                           | string           | Page View |
            | language                | ES                                                         | string           | Page View |
            | page area               | publica                                                    | string           | Page View |
            | page intent             | informacion                                                | string           | Page View |
            | channel                 | online                                                     | string           | Page View |
            | page instance ID        | de                                                         | string           | Page View |
            | page info version       | appVersion                                                 | regexp named     | Page View |
            | page segment            | personas                                                   | string           | Page View |
            | sysEnv                  | app                                                        | string           | Page View |
            | business unit           | BBVA Mexico                                                | string           | Page View |
            | site app name           | App BBVA Mexico                                            | string           | Page View |
            | project name            | Glomo                                                      | string           | Page View |
            | device mobile           | si                                                         | string           | Page View |
            | user userState          | no logado                                                  | string           | Page View |
            | prospect ID             | 1234567890                                                 | string           | Page View |
            | user segment profile    | cliente adicional                                          | string           | Page View |
            | internal campaign       |                                                            | empty array      | Page View |
            | optimization attributes |                                                            | empty array      | Page View |
            | application             |                                                            | empty str object | Page View |
            | products attributes     |                                                            | empty array      | Page View |

    @ANA_EVENT_DIA017
    @analytics
    @MX @manual @JIRA.GLOMOGL-20021
    @vbank @backend(test)
    @ios @android @web
    Scenario: Digital Activation - Page View - Indicaciones Selfie
        Given a user with the following criteria
            | criteria             |
            | debit card cancelled |
        And the user accesses to Digital Activation Flow
        And the analytics interceptor service is initiated
        When the user completes the Digital Activation Flow
        Then the analytics events contains the following variables:
            | item                    | value                                                         | type             | event     |
            | analytics               | analytics/glomo_base                                          | json schema      | Page View |
            | version DL              | 20250414_5.0                                                  | string           | Page View |
            | page name               | app:publica:personas:registro token movil:indicaciones selfie | string           | Page View |
            | level 1                 | registro token movil                                          | string           | Page View |
            | level 2                 | indicaciones selfie                                           | string           | Page View |
            | language                | ES                                                            | string           | Page View |
            | page area               | publica                                                       | string           | Page View |
            | page intent             | informacion                                                   | string           | Page View |
            | channel                 | online                                                        | string           | Page View |
            | page instance ID        | de                                                            | string           | Page View |
            | page info version       | appVersion                                                    | regexp named     | Page View |
            | page segment            | personas                                                      | string           | Page View |
            | sysEnv                  | app                                                           | string           | Page View |
            | business unit           | BBVA Mexico                                                   | string           | Page View |
            | site app name           | App BBVA Mexico                                               | string           | Page View |
            | project name            | Glomo                                                         | string           | Page View |
            | device mobile           | si                                                            | string           | Page View |
            | user userState          | no logado                                                     | string           | Page View |
            | prospect ID             | 1234567890                                                    | string           | Page View |
            | user segment profile    | cliente adicional                                             | string           | Page View |
            | internal campaign       |                                                               | empty array      | Page View |
            | optimization attributes |                                                               | empty array      | Page View |
            | application             |                                                               | empty str object | Page View |
            | products attributes     |                                                               | empty array      | Page View |

    @ANA_EVENT_DIA018
    @analytics
    @MX @manual @JIRA.GLOMOGL-20021
    @vbank @backend(test)
    @ios @android @web
    Scenario: Digital Activation - Page View - Validacion Identidad Exitosa
        Given a user with the following criteria
            | criteria             |
            | debit card cancelled |
        And the user accesses to Digital Activation Flow
        And the analytics interceptor service is initiated
        When the user completes the Digital Activation Flow
        Then the analytics events contains the following variables:
            | item                    | value                                                                  | type             | event     |
            | analytics               | analytics/glomo_base                                                   | json schema      | Page View |
            | version DL              | 20250414_5.0                                                           | string           | Page View |
            | page name               | app:publica:personas:registro token movil:validacion identidad exitosa | string           | Page View |
            | level 1                 | registro token movil                                                   | string           | Page View |
            | level 2                 | validacion identidad exitosa                                           | string           | Page View |
            | language                | ES                                                                     | string           | Page View |
            | page area               | publica                                                                | string           | Page View |
            | page intent             | informacion                                                            | string           | Page View |
            | channel                 | online                                                                 | string           | Page View |
            | page instance ID        | de                                                                     | string           | Page View |
            | page info version       | appVersion                                                             | regexp named     | Page View |
            | page segment            | personas                                                               | string           | Page View |
            | sysEnv                  | app                                                                    | string           | Page View |
            | business unit           | BBVA Mexico                                                            | string           | Page View |
            | site app name           | App BBVA Mexico                                                        | string           | Page View |
            | project name            | Glomo                                                                  | string           | Page View |
            | device mobile           | si                                                                     | string           | Page View |
            | user userState          | no logado                                                              | string           | Page View |
            | prospect ID             | 1234567890                                                             | string           | Page View |
            | user segment profile    | cliente adicional                                                      | string           | Page View |
            | internal campaign       |                                                                        | empty array      | Page View |
            | optimization attributes |                                                                        | empty array      | Page View |
            | application             |                                                                        | empty str object | Page View |
            | products attributes     |                                                                        | empty array      | Page View |

    @ANA_EVENT_DIA019
    @analytics
    @MX @manual @JIRA.GLOMOGL-20021
    @vbank @backend(test)
    @ios @android @web
    Scenario: Digital Activation - Page View - OTP
        Given a user with the following criteria
            | criteria             |
            | debit card cancelled |
        And the user accesses to Digital Activation Flow
        And the analytics interceptor service is initiated
        When the user completes the Digital Activation Flow
        Then the analytics events contains the following variables:
            | item                    | value                                         | type             | event     |
            | analytics               | analytics/glomo_base                          | json schema      | Page View |
            | version DL              | 20250414_5.0                                  | string           | Page View |
            | page name               | app:publica:personas:registro token movil:otp | string           | Page View |
            | level 1                 | registro token movil                          | string           | Page View |
            | level 2                 | otp                                           | string           | Page View |
            | language                | ES                                            | string           | Page View |
            | page area               | publica                                       | string           | Page View |
            | page intent             | informacion                                   | string           | Page View |
            | channel                 | online                                        | string           | Page View |
            | page instance ID        | de                                            | string           | Page View |
            | page info version       | appVersion                                    | regexp named     | Page View |
            | page segment            | personas                                      | string           | Page View |
            | sysEnv                  | app                                           | string           | Page View |
            | business unit           | BBVA Mexico                                   | string           | Page View |
            | site app name           | App BBVA Mexico                               | string           | Page View |
            | project name            | Glomo                                         | string           | Page View |
            | device mobile           | si                                            | string           | Page View |
            | user userState          | no logado                                     | string           | Page View |
            | prospect ID             | 1234567890                                    | string           | Page View |
            | user segment profile    | cliente adicional                             | string           | Page View |
            | internal campaign       |                                               | empty array      | Page View |
            | optimization attributes |                                               | empty array      | Page View |
            | application             |                                               | empty str object | Page View |
            | products attributes     |                                               | empty array      | Page View |

    @ANA_EVENT_DIA020
    @analytics
    @MX @manual @JIRA.GLOMOGL-20021
    @vbank @backend(test)
    @ios @android @web
    Scenario: Digital Activation - Page View - Ingreso de Firma
        Given a user with the following criteria
            | criteria             |
            | debit card cancelled |
        And the user accesses to Digital Activation Flow
        And the analytics interceptor service is initiated
        When the user completes the Digital Activation Flow
        Then the analytics events contains the following variables:
            | item                    | value                                                      | type             | event     |
            | analytics               | analytics/glomo_base                                       | json schema      | Page View |
            | version DL              | 20250414_5.0                                               | string           | Page View |
            | page name               | app:publica:personas:registro token movil:ingreso de firma | string           | Page View |
            | level 1                 | registro token movil                                       | string           | Page View |
            | level 2                 | ingreso de firma                                           | string           | Page View |
            | language                | ES                                                         | string           | Page View |
            | page area               | publica                                                    | string           | Page View |
            | page intent             | informacion                                                | string           | Page View |
            | channel                 | online                                                     | string           | Page View |
            | page instance ID        | de                                                         | string           | Page View |
            | page info version       | appVersion                                                 | regexp named     | Page View |
            | page segment            | personas                                                   | string           | Page View |
            | sysEnv                  | app                                                        | string           | Page View |
            | business unit           | BBVA Mexico                                                | string           | Page View |
            | site app name           | App BBVA Mexico                                            | string           | Page View |
            | project name            | Glomo                                                      | string           | Page View |
            | device mobile           | si                                                         | string           | Page View |
            | user userState          | no logado                                                  | string           | Page View |
            | prospect ID             | 1234567890                                                 | string           | Page View |
            | user segment profile    | cliente adicional                                          | string           | Page View |
            | internal campaign       |                                                            | empty array      | Page View |
            | optimization attributes |                                                            | empty array      | Page View |
            | application             |                                                            | empty str object | Page View |
            | products attributes     |                                                            | empty array      | Page View |

    @ANA_EVENT_DIA021
    @analytics
    @MX @manual @JIRA.GLOMOGL-20021
    @vbank @backend(test)
    @ios @android @web
    Scenario: Digital Activation - Page View - Crear Nueva Contrasena
        Given a user with the following criteria
            | criteria             |
            | debit card cancelled |
        And the user accesses to Digital Activation Flow
        And the analytics interceptor service is initiated
        When the user completes the Digital Activation Flow
        Then the analytics events contains the following variables:
            | item                    | value                                                            | type             | event     |
            | analytics               | analytics/glomo_base                                             | json schema      | Page View |
            | version DL              | 20250414_5.0                                                     | string           | Page View |
            | page name               | app:publica:personas:registro token movil:crear nueva contrasena | string           | Page View |
            | level 1                 | registro token movil                                             | string           | Page View |
            | level 2                 | crear nueva contrasena                                           | string           | Page View |
            | language                | ES                                                               | string           | Page View |
            | page area               | publica                                                          | string           | Page View |
            | page intent             | informacion                                                      | string           | Page View |
            | channel                 | online                                                           | string           | Page View |
            | page instance ID        | de                                                               | string           | Page View |
            | page info version       | appVersion                                                       | regexp named     | Page View |
            | page segment            | personas                                                         | string           | Page View |
            | sysEnv                  | app                                                              | string           | Page View |
            | business unit           | BBVA Mexico                                                      | string           | Page View |
            | site app name           | App BBVA Mexico                                                  | string           | Page View |
            | project name            | Glomo                                                            | string           | Page View |
            | device mobile           | si                                                               | string           | Page View |
            | user userState          | no logado                                                        | string           | Page View |
            | prospect ID             | 1234567890                                                       | string           | Page View |
            | user segment profile    | cliente adicional                                                | string           | Page View |
            | internal campaign       |                                                                  | empty array      | Page View |
            | optimization attributes |                                                                  | empty array      | Page View |
            | application             |                                                                  | empty str object | Page View |
            | products attributes     |                                                                  | empty array      | Page View |

    @ANA_EVENT_DIA022
    @analytics
    @MX @manual @JIRA.GLOMOGL-20021
    @vbank @backend(test)
    @ios @android @web
    Scenario: Digital Activation - Page View - Fecha de Nacimiento
        Given a user with the following criteria
            | criteria             |
            | debit card cancelled |
        And the user accesses to Digital Activation Flow
        And the analytics interceptor service is initiated
        When the user completes the Digital Activation Flow
        Then the analytics events contains the following variables:
            | item                    | value                                                         | type             | event     |
            | analytics               | analytics/glomo_base                                          | json schema      | Page View |
            | version DL              | 20250414_5.0                                                  | string           | Page View |
            | page name               | app:publica:personas:registro token movil:fecha de nacimiento | string           | Page View |
            | level 1                 | registro token movil                                          | string           | Page View |
            | level 2                 | fecha de nacimiento                                           | string           | Page View |
            | language                | ES                                                            | string           | Page View |
            | page area               | publica                                                       | string           | Page View |
            | page intent             | informacion                                                   | string           | Page View |
            | channel                 | online                                                        | string           | Page View |
            | page instance ID        | de                                                            | string           | Page View |
            | page info version       | appVersion                                                    | regexp named     | Page View |
            | page segment            | personas                                                      | string           | Page View |
            | sysEnv                  | app                                                           | string           | Page View |
            | business unit           | BBVA Mexico                                                   | string           | Page View |
            | site app name           | App BBVA Mexico                                               | string           | Page View |
            | project name            | Glomo                                                         | string           | Page View |
            | device mobile           | si                                                            | string           | Page View |
            | user userState          | no logado                                                     | string           | Page View |
            | prospect ID             | 1234567890                                                    | string           | Page View |
            | internal campaign       |                                                               | empty array      | Page View |
            | optimization attributes |                                                               | empty array      | Page View |
            | application             |                                                               | empty str object | Page View |
            | products attributes     |                                                               | empty array      | Page View |

    @ANA_EVENT_DIA023
    @analytics
    @MX @manual @JIRA.GLOMOGL-20021
    @vbank @backend(test)
    @ios @android @web
    Scenario: Digital Activation - Page View - APP no Disponible
        Given a user with the following criteria
            | criteria             |
            | debit card cancelled |
        And the user accesses to Digital Activation Flow
        And the analytics interceptor service is initiated
        When the user completes the Digital Activation Flow
        Then the analytics events contains the following variables:
            | item                    | value                                                       | type             | event     |
            | analytics               | analytics/glomo_base                                        | json schema      | Page View |
            | version DL              | 20250414_5.0                                                | string           | Page View |
            | page name               | app:publica:personas:registro token movil:app no disponible | string           | Page View |
            | level 1                 | registro token movil                                        | string           | Page View |
            | level 2                 | app no disponible                                           | string           | Page View |
            | error page              | app no disponible                                           | string           | Page View |
            | language                | ES                                                          | string           | Page View |
            | page area               | publica                                                     | string           | Page View |
            | page intent             | informacion                                                 | string           | Page View |
            | channel                 | online                                                      | string           | Page View |
            | page instance ID        | de                                                          | string           | Page View |
            | page info version       | appVersion                                                  | regexp named     | Page View |
            | page segment            | personas                                                    | string           | Page View |
            | sysEnv                  | app                                                         | string           | Page View |
            | business unit           | BBVA Mexico                                                 | string           | Page View |
            | site app name           | App BBVA Mexico                                             | string           | Page View |
            | project name            | Glomo                                                       | string           | Page View |
            | device mobile           | si                                                          | string           | Page View |
            | user userState          | no logado                                                   | string           | Page View |
            | prospect ID             | 1234567890                                                  | string           | Page View |
            | internal campaign       |                                                             | empty array      | Page View |
            | optimization attributes |                                                             | empty array      | Page View |
            | application             |                                                             | empty str object | Page View |
            | products attributes     |                                                             | empty array      | Page View |

    @ANA_EVENT_DIA024
    @analytics
    @MX @manual @JIRA.GLOMOGL-20021
    @vbank @backend(test)
    @ios @android @web
    Scenario: Digital Activation - Page View - Token Bloqueado
        Given a user with the following criteria
            | criteria             |
            | debit card cancelled |
        And the user accesses to Digital Activation Flow
        And the analytics interceptor service is initiated
        When the user completes the Digital Activation Flow
        Then the analytics events contains the following variables:
            | item                    | value                                                     | type             | event     |
            | analytics               | analytics/glomo_base                                      | json schema      | Page View |
            | version DL              | 20250414_5.0                                              | string           | Page View |
            | page name               | app:publica:personas:registro token movil:token bloqueado | string           | Page View |
            | level 1                 | registro token movil                                      | string           | Page View |
            | level 2                 | token bloqueado                                           | string           | Page View |
            | error page              | token bloqueado                                           | string           | Page View |
            | language                | ES                                                        | string           | Page View |
            | page area               | publica                                                   | string           | Page View |
            | page intent             | informacion                                               | string           | Page View |
            | channel                 | online                                                    | string           | Page View |
            | page instance ID        | de                                                        | string           | Page View |
            | page info version       | appVersion                                                | regexp named     | Page View |
            | page segment            | personas                                                  | string           | Page View |
            | sysEnv                  | app                                                       | string           | Page View |
            | business unit           | BBVA Mexico                                               | string           | Page View |
            | site app name           | App BBVA Mexico                                           | string           | Page View |
            | project name            | Glomo                                                     | string           | Page View |
            | device mobile           | si                                                        | string           | Page View |
            | user userState          | no logado                                                 | string           | Page View |
            | prospect ID             | 1234567890                                                | string           | Page View |
            | internal campaign       |                                                           | empty array      | Page View |
            | optimization attributes |                                                           | empty array      | Page View |
            | application             |                                                           | empty str object | Page View |
            | products attributes     |                                                           | empty array      | Page View |

    @ANA_EVENT_DIA025
    @analytics
    @MX
    @vbank @backend(test)
    @ios @android @web
    @web-done
    Scenario: Digital Activation - Page View - Error Titularidad Tarjeta
        Given a user with the following criteria
            | criteria             |
            | debit card cancelled |
        And the user accesses to Digital Activation Flow
        And the analytics interceptor service is initiated
        When the user enters the contact information of additional
        Then the analytics events contains the following variables:
            | item                    | value                                                               | type             | event     |
            | analytics               | analytics/glomo_base                                                | json schema      | Page View |
            | version DL              | 20250414_5.0                                                        | string           | Page View |
            | page name               | app:publica:personas:registro token movil:error titularidad tarjeta | string           | Page View |
            | level 1                 | registro token movil                                                | string           | Page View |
            | level 2                 | error titularidad tarjeta                                           | string           | Page View |
            | error page              | error titularidad tarjeta                                           | string           | Page View |
            | language                | ES                                                                  | string           | Page View |
            | page area               | publica                                                             | string           | Page View |
            | page intent             | informacion                                                         | string           | Page View |
            | channel                 | online                                                              | string           | Page View |
            | page instance ID        | de                                                                  | string           | Page View |
            | page info version       | appVersion                                                          | regexp named     | Page View |
            | page segment            | personas                                                            | string           | Page View |
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

    @ANA_EVENT_DIA026
    @analytics
    @MX @manual @JIRA.GLOMOGL-20021
    @vbank @backend(test)
    @ios @android @web
    Scenario: Digital Activation - Page View - Error Completar Activacion
        Given a user with the following criteria
            | criteria             |
            | debit card cancelled |
        And the user accesses to Digital Activation Flow
        And the analytics interceptor service is initiated
        When the user completes the Digital Activation Flow
        Then the analytics events contains the following variables:
            | item                    | value                                                                | type             | event     |
            | analytics               | analytics/glomo_base                                                 | json schema      | Page View |
            | version DL              | 20250414_5.0                                                         | string           | Page View |
            | page name               | app:publica:personas:registro token movil:error completar activacion | string           | Page View |
            | level 1                 | registro token movil                                                 | string           | Page View |
            | level 2                 | error completar activacion                                           | string           | Page View |
            | error page              | error completar activacion                                           | string           | Page View |
            | language                | ES                                                                   | string           | Page View |
            | page area               | publica                                                              | string           | Page View |
            | page intent             | informacion                                                          | string           | Page View |
            | channel                 | online                                                               | string           | Page View |
            | page instance ID        | de                                                                   | string           | Page View |
            | page info version       | appVersion                                                           | regexp named     | Page View |
            | page segment            | personas                                                             | string           | Page View |
            | sysEnv                  | app                                                                  | string           | Page View |
            | business unit           | BBVA Mexico                                                          | string           | Page View |
            | site app name           | App BBVA Mexico                                                      | string           | Page View |
            | project name            | Glomo                                                                | string           | Page View |
            | device mobile           | si                                                                   | string           | Page View |
            | user userState          | no logado                                                            | string           | Page View |
            | prospect ID             | 1234567890                                                           | string           | Page View |
            | internal campaign       |                                                                      | empty array      | Page View |
            | optimization attributes |                                                                      | empty array      | Page View |
            | application             |                                                                      | empty str object | Page View |
            | products attributes     |                                                                      | empty array      | Page View |

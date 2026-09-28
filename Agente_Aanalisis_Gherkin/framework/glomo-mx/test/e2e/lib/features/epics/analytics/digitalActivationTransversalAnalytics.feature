@transversalEnrollmentAnalytics
Feature: Analytics - Digital Activation Transversal Enrollment

    @ANA_EVENT_DATE001
    @analytics
    @MX @vbank @backend(test)
    @ios @android @web @web-done
    Scenario: App On Click Start
        Given a user with the following criteria
            | criteria                                       |
            | transversal enrollment without card or account |
        And a user accesses the application
        And the analytics interceptor service is initiated
        When the user accesses to non account client section
        Then the analytics events contains the following variables
            | item                    | value                            | type         | event              |
            | analytics               | analytics/glomo_base             | json schema  | App On Click Start |
            | version DL              | 20250414_5.0                     | string       | App On Click Start |
            | page name               | app:publica:general:identificate | string       | App On Click Start |
            | level 1                 | identificate                     | string       | App On Click Start |
            | language                | ES                               | string       | App On Click Start |
            | page area               | publica                          | string       | App On Click Start |
            | page intent             | informacion                      | string       | App On Click Start |
            | channel                 | online                           | string       | App On Click Start |
            | page instance ID        | de                               | string       | App On Click Start |
            | page info version       | appVersion                       | regexp named | App On Click Start |
            | page segment            | general                          | string       | App On Click Start |
            | sysEnv                  | app                              | string       | App On Click Start |
            | business unit           | BBVA Mexico                      | string       | App On Click Start |
            | site app name           | App BBVA Mexico                  | string       | App On Click Start |
            | project name            | Glomo                            | string       | App On Click Start |
            | device mobile           | si                               | string       | App On Click Start |
            | user userState          | no logado                        | string       | App On Click Start |
            | global application      | digital activation               | string       | App On Click Start |
            | application name        | afiliacion digital               | string       | App On Click Start |
            | application type        | alta clientes                    | string       | App On Click Start |
            | fulfillment model       | online                           | string       | App On Click Start |
            | application step        | no tengo tarjeta                 | string       | App On Click Start |
            | internal campaign       |                                  | empty array  | App On Click Start |
            | optimization attributes |                                  | empty array  | App On Click Start |
            | products attributes     |                                  | empty array  | App On Click Start |

    @ANA_EVENT_DATE002
    @analytics
    @MX @vbank @backend(test)
    @ios @android @web @web-done
    Scenario: App Page Visit
        Given a user with the following criteria
            | criteria                                       |
            | transversal enrollment without card or account |
        And a user accesses the application
        And the analytics interceptor service is initiated
        When the user accesses to non account client section
        Then the analytics events contains the following variables
            | item                    | value                                                  | type         | event          |
            | analytics               | analytics/glomo_base                                   | json schema  | App Page Visit |
            | version DL              | 20250414_5.0                                           | string       | App Page Visit |
            | page name               | app:publica:general:registro basico:1 datos personales | string       | App Page Visit |
            | level 1                 | registro basico                                        | string       | App Page Visit |
            | level 2                 | 1 datos personales                                     | string       | App Page Visit |
            | language                | ES                                                     | string       | App Page Visit |
            | page area               | publica                                                | string       | App Page Visit |
            | page intent             | informacion                                            | string       | App Page Visit |
            | channel                 | online                                                 | string       | App Page Visit |
            | page instance ID        | de                                                     | string       | App Page Visit |
            | page info version       | appVersion                                             | regexp named | App Page Visit |
            | page segment            | general                                                | string       | App Page Visit |
            | sysEnv                  | app                                                    | string       | App Page Visit |
            | business unit           | BBVA Mexico                                            | string       | App Page Visit |
            | site app name           | App BBVA Mexico                                        | string       | App Page Visit |
            | project name            | Glomo                                                  | string       | App Page Visit |
            | device mobile           | si                                                     | string       | App Page Visit |
            | user userState          | no logado                                              | string       | App Page Visit |
            | global application      | digital activation                                     | string       | App Page Visit |
            | application name        | afiliacion digital                                     | string       | App Page Visit |
            | application type        | alta clientes                                          | string       | App Page Visit |
            | fulfillment model       | online                                                 | string       | App Page Visit |
            | application step        | 1 datos personales                                     | string       | App Page Visit |
            | internal campaign       |                                                        | empty array  | App Page Visit |
            | optimization attributes |                                                        | empty array  | App Page Visit |
            | products attributes     |                                                        | empty array  | App Page Visit |

    @ANA_EVENT_DATE003
    @analytics
    @MX @vbank @backend(test)
    @ios @android @web @web-done
    Scenario Outline: App Started - <input>
        Given a user with the following criteria
            | criteria                                       |
            | transversal enrollment without card or account |
        And a user accesses the application
        And the analytics interceptor service is initiated
        And the user accesses to non account client section
        When the user taps on "<input>" item
        Then the analytics events contains the following variables
            | item                    | value                                                  | type         | event       |
            | analytics               | analytics/glomo_base                                   | json schema  | App Started |
            | version DL              | 20250414_5.0                                           | string       | App Started |
            | page name               | app:publica:general:registro basico:1 datos personales | string       | App Started |
            | level 1                 | registro basico                                        | string       | App Started |
            | level 2                 | 1 datos personales                                     | string       | App Started |
            | language                | ES                                                     | string       | App Started |
            | page area               | publica                                                | string       | App Started |
            | page intent             | informacion                                            | string       | App Started |
            | channel                 | online                                                 | string       | App Started |
            | page instance ID        | de                                                     | string       | App Started |
            | page info version       | appVersion                                             | regexp named | App Started |
            | page segment            | general                                                | string       | App Started |
            | sysEnv                  | app                                                    | string       | App Started |
            | business unit           | BBVA Mexico                                            | string       | App Started |
            | site app name           | App BBVA Mexico                                        | string       | App Started |
            | project name            | Glomo                                                  | string       | App Started |
            | device mobile           | si                                                     | string       | App Started |
            | user userState          | no logado                                              | string       | App Started |
            | global application      | digital activation                                     | string       | App Started |
            | application name        | afiliacion digital                                     | string       | App Started |
            | application type        | alta clientes                                          | string       | App Started |
            | fulfillment model       | online                                                 | string       | App Started |
            | application step        | <item>                                                 | string       | App Started |
            | internal campaign       |                                                        | empty array  | App Started |
            | optimization attributes |                                                        | empty array  | App Started |
            | products attributes     |                                                        | empty array  | App Started |
        Examples:
            | item              | input                 |
            | escanea tu ine    | ine tooltip           |
            | nombre            | name                  |
            | primer apellido   | first lastname        |
            | segundo apellido  | second lastname       |
            | fecha nacimiento  | birthdate             |
            | lugar nacimiento  | birthplace            |
            | genero hombre     | sex option male       |
            | genero mujer      | sex option female     |
            | genero no binario | sex option non binary |
            | numero ine        | number ine            |

    @ANA_EVENT_DATE004
    @analytics
    @MX @vbank @backend(test)
    @ios @android @web @web-done
    Scenario: App Step 2
        Given a user with the following criteria
            | criteria                |
            | transversal monoproduct |
        And a user accesses the application
        And the analytics interceptor service is initiated
        And the user accesses to non account client section and enters "correct" personal data
        When the user registers current address information and "not" continue
        Then the analytics events contains the following variables
            | item                    | value                                           | type         | event      |
            | analytics               | analytics/glomo_base                            | json schema  | App Step 2 |
            | version DL              | 20250414_5.0                                    | string       | App Step 2 |
            | page name               | app:publica:general:registro basico:2 domicilio | string       | App Step 2 |
            | level 1                 | registro basico                                 | string       | App Step 2 |
            | level 2                 | 2 domicilio                                     | string       | App Step 2 |
            | language                | ES                                              | string       | App Step 2 |
            | page area               | publica                                         | string       | App Step 2 |
            | page intent             | informacion                                     | string       | App Step 2 |
            | channel                 | online                                          | string       | App Step 2 |
            | page instance ID        | de                                              | string       | App Step 2 |
            | page info version       | appVersion                                      | regexp named | App Step 2 |
            | page segment            | general                                         | string       | App Step 2 |
            | sysEnv                  | app                                             | string       | App Step 2 |
            | business unit           | BBVA Mexico                                     | string       | App Step 2 |
            | site app name           | App BBVA Mexico                                 | string       | App Step 2 |
            | project name            | Glomo                                           | string       | App Step 2 |
            | device mobile           | si                                              | string       | App Step 2 |
            | user userState          | no logado                                       | string       | App Step 2 |
            | global application      | digital activation                              | string       | App Step 2 |
            | application name        | afiliacion digital                              | string       | App Step 2 |
            | application type        | alta clientes                                   | string       | App Step 2 |
            | fulfillment model       | online                                          | string       | App Step 2 |
            | application step        | 2 domicilio                                     | string       | App Step 2 |
            | internal campaign       |                                                 | empty array  | App Step 2 |
            | optimization attributes |                                                 | empty array  | App Step 2 |
            | products attributes     |                                                 | empty array  | App Step 2 |

    @ANA_EVENT_DATE005
    @analytics
    @MX @vbank @backend(test)
    @ios @android @web @web-done
    Scenario: App Step 3
        Given a user with the following criteria
            | criteria                                       |
            | transversal enrollment without card or account |
        And a user accesses the application
        And the analytics interceptor service is initiated
        And the user accesses to non account client section and enters "correct" personal data
        When the user registers current address information and "selects" continue
        Then the analytics events contains the following variables
            | item                    | value                                                   | type         | event      |
            | analytics               | analytics/glomo_base                                    | json schema  | App Step 3 |
            | version DL              | 20250414_5.0                                            | string       | App Step 3 |
            | page name               | app:publica:general:registro basico:3 datos de contacto | string       | App Step 3 |
            | level 1                 | registro basico                                         | string       | App Step 3 |
            | level 2                 | 3 datos de contacto                                     | string       | App Step 3 |
            | language                | ES                                                      | string       | App Step 3 |
            | page area               | publica                                                 | string       | App Step 3 |
            | page intent             | informacion                                             | string       | App Step 3 |
            | channel                 | online                                                  | string       | App Step 3 |
            | page instance ID        | de                                                      | string       | App Step 3 |
            | page info version       | appVersion                                              | regexp named | App Step 3 |
            | page segment            | general                                                 | string       | App Step 3 |
            | sysEnv                  | app                                                     | string       | App Step 3 |
            | business unit           | BBVA Mexico                                             | string       | App Step 3 |
            | site app name           | App BBVA Mexico                                         | string       | App Step 3 |
            | project name            | Glomo                                                   | string       | App Step 3 |
            | device mobile           | si                                                      | string       | App Step 3 |
            | user userState          | no logado                                               | string       | App Step 3 |
            | global application      | digital activation                                      | string       | App Step 3 |
            | application name        | afiliacion digital                                      | string       | App Step 3 |
            | application type        | alta clientes                                           | string       | App Step 3 |
            | fulfillment model       | online                                                  | string       | App Step 3 |
            | application step        | 3 datos de contacto                                     | string       | App Step 3 |
            | internal campaign       |                                                         | empty array  | App Step 3 |
            | optimization attributes |                                                         | empty array  | App Step 3 |
            | products attributes     |                                                         | empty array  | App Step 3 |

    @ANA_EVENT_DATE006
    @analytics
    @MX @vbank @backend(test)
    @ios @android @web @web-done
    Scenario: App Step 4
        Given a user with the following criteria
            | criteria                                       |
            | transversal enrollment without card or account |
        And a user accesses the application
        And the analytics interceptor service is initiated
        And the user accesses to non account client section and enters "correct" personal data
        And the user registers current address information and "selects" continue
        When the user registers their current contact information with "valid" phone
        Then the analytics events contains the following variables
            | item                    | value                                    |type         | event      |
            | analytics               | analytics/glomo_base                     |json schema  | App Step 4 |
            | version DL              | 20250414_5.0                             |string       | App Step 4 |
            | page name               | app:publica:general:registro basico:4 otp|string       | App Step 4 |
            | level 1                 | registro basico                          |string       | App Step 4 |
            | level 2                 | 4 otp                                    |string       | App Step 4 |
            | language                | ES                                       |string       | App Step 4 |
            | page area               | publica                                  |string       | App Step 4 |
            | page intent             | informacion                              |string       | App Step 4 |
            | channel                 | online                                   |string       | App Step 4 |
            | page instance ID        | de                                       |string       | App Step 4 |
            | page info version       | appVersion                               |regexp named | App Step 4 |
            | page segment            | general                                  |string       | App Step 4 |
            | sysEnv                  | app                                      |string       | App Step 4 |
            | business unit           | BBVA Mexico                              |string       | App Step 4 |
            | site app name           | App BBVA Mexico                          |string       | App Step 4 |
            | project name            | Glomo                                    |string       | App Step 4 |
            | device mobile           | si                                       |string       | App Step 4 |
            | user userState          | no logado                                |string       | App Step 4 |
            | global application      | digital activation                       |string       | App Step 4 |
            | application name        | afiliacion digital                       |string       | App Step 4 |
            | application type        | alta clientes                            |string       | App Step 4 |
            | fulfillment model       | online                                   |string       | App Step 4 |
            | application step        | 4 otp                                    |string       | App Step 4 |
            | custom fields           | firma:sms                                |string       | App Step 4 |
            | internal campaign       |                                          |empty array  | App Step 4 |
            | optimization attributes |                                          |empty array  | App Step 4 |
            | products attributes     |                                          |empty array  | App Step 4 |

    @ANA_EVENT_DATE007
    @analytics
    @MX @vbank @backend(test)
    @ios @android @web @web-done
    Scenario: App Step 5
        Given a user with the following criteria
            | criteria                                       |
            | transversal enrollment without card or account |
        And a user accesses the application
        And the analytics interceptor service is initiated
        And the user accesses to non account client section and enters "correct" personal data
        And the user registers current address information and "selects" continue
        When the user registers their current contact information with "valid" phone
        Then the analytics events contains the following variables
            | item                    | value                                                        | type         | event      |
            | analytics               | analytics/glomo_base                                         | json schema  | App Step 5 |
            | version DL              | 20250414_5.0                                                 | string       | App Step 5 |
            | page name               | app:publica:general:registro basico:5 contrato unico digital | string       | App Step 5 |
            | level 1                 | registro basico                                              | string       | App Step 5 |
            | level 2                 | 5 contrato unico digital                                     | string       | App Step 5 |
            | language                | ES                                                           | string       | App Step 5 |
            | page area               | publica                                                      | string       | App Step 5 |
            | page intent             | informacion                                                  | string       | App Step 5 |
            | channel                 | online                                                       | string       | App Step 5 |
            | page instance ID        | de                                                           | string       | App Step 5 |
            | page info version       | appVersion                                                   | regexp named | App Step 5 |
            | page segment            | general                                                      | string       | App Step 5 |
            | sysEnv                  | app                                                          | string       | App Step 5 |
            | business unit           | BBVA Mexico                                                  | string       | App Step 5 |
            | site app name           | App BBVA Mexico                                              | string       | App Step 5 |
            | project name            | Glomo                                                        | string       | App Step 5 |
            | device mobile           | si                                                           | string       | App Step 5 |
            | user userState          | no logado                                                    | string       | App Step 5 |
            | global application      | digital activation                                           | string       | App Step 5 |
            | application name        | afiliacion digital                                           | string       | App Step 5 |
            | application type        | alta clientes                                                | string       | App Step 5 |
            | fulfillment model       | online                                                       | string       | App Step 5 |
            | application step        | 5 contrato unico digital                                     | string       | App Step 5 |
            | custom fields           | firma:sms                                                    | string       | App Step 5 |
            | internal campaign       |                                                              | empty array  | App Step 5 |
            | optimization attributes |                                                              | empty array  | App Step 5 |
            | products attributes     |                                                              | empty array  | App Step 5 |

    @ANA_EVENT_DATE008
    @analytics
    @MX @vbank @backend(test)
    @ios @android @web @web-done
    Scenario: App Step 6
        Given a user with the following criteria
            | criteria                                       |
            | transversal enrollment without card or account |
        And a user accesses the application
        And the analytics interceptor service is initiated
        And the user accesses to non account client section and enters "correct" personal data
        And the user registers current address information and "selects" continue
        And the user registers their current contact information with "valid" phone
        And the sms key "12345678" is entered
        When the user accepts sign contract and "close" otp
        Then the analytics events contains the following variables
            | item                    | value                                            | type         | event      |
            | analytics               | analytics/glomo_base                             | json schema  | App Step 6 |
            | version DL              | 20250414_5.0                                     | string       | App Step 6 |
            | page name               | app:publica:general:registro basico:6 contrasena | string       | App Step 6 |
            | level 1                 | registro basico                                  | string       | App Step 6 |
            | level 2                 | 6 contrasena                                     | string       | App Step 6 |
            | language                | ES                                               | string       | App Step 6 |
            | page area               | publica                                          | string       | App Step 6 |
            | page intent             | informacion                                      | string       | App Step 6 |
            | channel                 | online                                           | string       | App Step 6 |
            | page instance ID        | de                                               | string       | App Step 6 |
            | page info version       | appVersion                                       | regexp named | App Step 6 |
            | page segment            | general                                          | string       | App Step 6 |
            | sysEnv                  | app                                              | string       | App Step 6 |
            | business unit           | BBVA Mexico                                      | string       | App Step 6 |
            | site app name           | App BBVA Mexico                                  | string       | App Step 6 |
            | project name            | Glomo                                            | string       | App Step 6 |
            | device mobile           | si                                               | string       | App Step 6 |
            | user userState          | no logado                                        | string       | App Step 6 |
            | global application      | digital activation                               | string       | App Step 6 |
            | application name        | afiliacion digital                               | string       | App Step 6 |
            | application type        | alta clientes                                    | string       | App Step 6 |
            | fulfillment model       | online                                           | string       | App Step 6 |
            | application step        | 6 contrasena                                     | string       | App Step 6 |
            | custom fields           | firma:sms                                        | string       | App Step 6 |
            | internal campaign       |                                                  | empty array  | App Step 6 |
            | optimization attributes |                                                  | empty array  | App Step 6 |
            | products attributes     |                                                  | empty array  | App Step 6 |

    @ANA_EVENT_DATE009
    @analytics
    @MX @vbank @backend(test)
    @ios @android @web @web-done
    Scenario: App Step 7
        Given a user with the following criteria
            | criteria                                       |
            | transversal enrollment without card or account |
        And a user accesses the application
        And the analytics interceptor service is initiated
        And the user accesses to non account client section and enters "correct" personal data
        And the user registers current address information and "selects" continue
        And the user registers their current contact information with "valid" phone
        And the user accepts sign contract and "close" otp
        When the user enters password data
        Then the analytics events contains the following variables
            | item                    | value                                              | type         | event      |
            | analytics               | analytics/glomo_base                               | json schema  | App Step 7 |
            | version DL              | 20250414_5.0                                       | string       | App Step 7 |
            | page name               | app:publica:general:registro basico:7 confirmacion | string       | App Step 7 |
            | level 1                 | registro basico                                    | string       | App Step 7 |
            | level 2                 | 7 confirmacion                                     | string       | App Step 7 |
            | language                | ES                                                 | string       | App Step 7 |
            | page area               | publica                                            | string       | App Step 7 |
            | page intent             | informacion                                        | string       | App Step 7 |
            | channel                 | online                                             | string       | App Step 7 |
            | page instance ID        | de                                                 | string       | App Step 7 |
            | page info version       | appVersion                                         | regexp named | App Step 7 |
            | page segment            | general                                            | string       | App Step 7 |
            | sysEnv                  | app                                                | string       | App Step 7 |
            | business unit           | BBVA Mexico                                        | string       | App Step 7 |
            | site app name           | App BBVA Mexico                                    | string       | App Step 7 |
            | project name            | Glomo                                              | string       | App Step 7 |
            | device mobile           | si                                                 | string       | App Step 7 |
            | user userState          | no logado                                          | string       | App Step 7 |
            | global application      | digital activation                                 | string       | App Step 7 |
            | application name        | afiliacion digital                                 | string       | App Step 7 |
            | application type        | alta clientes                                      | string       | App Step 7 |
            | fulfillment model       | online                                             | string       | App Step 7 |
            | application step        | 7 confirmacion                                     | string       | App Step 7 |
            | custom fields           | firma:sms                                          | string       | App Step 7 |
            | internal campaign       |                                                    | empty array  | App Step 7 |
            | optimization attributes |                                                    | empty array  | App Step 7 |
            | products attributes     |                                                    | empty array  | App Step 7 |

    @ANA_EVENT_DATE010
    @analytics
    @MX @vbank @backend(test)
    @ios @android @web @web-done
    Scenario: App Completed
        Given a user with the following criteria
            | criteria                                       |
            | transversal enrollment without card or account |
        And a user accesses the application
        And the analytics interceptor service is initiated
        And the user accesses to non account client section and enters "correct" personal data
        And the user registers current address information and "selects" continue
        And the user registers their current contact information with "valid" phone
        And the user accepts sign contract and "close" otp
        When the user enters password data and tries to register an account
        Then the analytics events contains the following variables
            | item                    | value                                               | type        | event         |
            | analytics               | analytics/glomo_base                                | json schema | App Completed |
            | version DL              | 20250414_5.0                                        | string      | App Completed |
            | page name               | app:publica:general:registro basico:pagina exitosa  | string      | App Completed |
            | level 1                 | registro basico                                     | string      | App Completed |
            | level 2                 | pagina exitosa                                      | string      | App Completed |
            | language                | ES                                                  | string      | App Completed |
            | page area               | publica                                             | string      | App Completed |
            | page intent             | informacion                                         | string      | App Completed |
            | channel                 | online                                              | string      | App Completed |
            | page instance ID        | de                                                  | string      | App Completed |
            | page info version       | appVersion                                          | regexp named| App Completed |
            | page segment            | general                                             | string      | App Completed |
            | sysEnv                  | app                                                 | string      | App Completed |
            | business unit           | BBVA Mexico                                         | string      | App Completed |
            | site app name           | App BBVA Mexico                                     | string      | App Completed |
            | project name            | Glomo                                               | string      | App Completed |
            | device mobile           | si                                                  | string      | App Completed |
            | user userState          | no logado                                           | string      | App Completed |
            | global application      | digital activation                                  | string      | App Completed |
            | application name        | afiliacion digital                                  | string      | App Completed |
            | application type        | alta clientes                                       | string      | App Completed |
            | fulfillment model       | online                                              | string      | App Completed |
            | application step        | pagina exitosa                                      | string      | App Completed |
            | custom fields           | firma:sms                                           | string      | App Completed |
            | application state       | finalizado                                          | string      | App Completed |

    @ANA_EVENT_DATE011
    @analytics
    @MX @vbank @backend(test)
    @ios @android @web @web-done
    Scenario: Page View - Escanear INE
        Given a user with the following criteria
            | criteria                                       |
            | transversal enrollment without card or account |
        And a user accesses the application
        And the user accesses to non account client section
        When the user taps on "ine tooltip" item
        Then the device contains the following variables
            | item                    | value                                                            | type             |
            | analytics               | analytics/glomo_base                                             | json schema      |
            | version DL              | 20250414_5.0                                                     | string           |
            | page name               | app:publica:general:registro basico:recomendaciones escanear ine | string           |
            | level 1                 | registro basico                                                  | string           |
            | level 2                 | recomendaciones escanear ine                                     | string           |
            | language                | ES                                                               | string           |
            | page area               | publica                                                          | string           |
            | page intent             | informacion                                                      | string           |
            | channel                 | online                                                           | string           |
            | page instance ID        | de                                                               | string           |
            | page info version       | appVersion                                                       | regexp named     |
            | page segment            | general                                                          | string           |
            | sysEnv                  | app                                                              | string           |
            | business unit           | BBVA Mexico                                                      | string           |
            | site app name           | App BBVA Mexico                                                  | string           |
            | project name            | Glomo                                                            | string           |
            | device mobile           | si                                                               | string           |
            | user userState          | no logado                                                        | string           |
            | internal campaign       |                                                                  | empty array      |
            | optimization attributes |                                                                  | empty array      |
            | application             |                                                                  | empty str object |
            | products attributes     |                                                                  | empty array      |

    @ANA_EVENT_DATE012
    @analytics
    @MX @vbank @backend(test)
    @ios @android @web @web-done
    Scenario: Page View - Firma
        Given a user with the following criteria
            | criteria                                       |
            | transversal enrollment without card or account |
        And a user accesses the application
        And the user accesses to non account client section and enters "correct" personal data
        And the user registers current address information and "selects" continue
        And the user registers their current contact information with "valid" phone
        When the user accepts sign contract and "continue" otp
        Then the device contains the following variables
            | item                    | value                                     | type             |
            | analytics               | analytics/glomo_base                      | json schema      |
            | version DL              | 20250414_5.0                              | string           |
            | page name               | app:publica:general:registro basico:firma | string           |
            | level 1                 | registro basico                           | string           |
            | level 2                 | firma                                     | string           |
            | language                | ES                                        | string           |
            | page area               | publica                                   | string           |
            | page intent             | informacion                               | string           |
            | channel                 | online                                    | string           |
            | page instance ID        | de                                        | string           |
            | page info version       | appVersion                                | regexp named     |
            | page segment            | general                                   | string           |
            | sysEnv                  | app                                       | string           |
            | business unit           | BBVA Mexico                               | string           |
            | site app name           | App BBVA Mexico                           | string           |
            | project name            | Glomo                                     | string           |
            | device mobile           | si                                        | string           |
            | user userState          | no logado                                 | string           |
            | internal campaign       |                                           | empty array      |
            | optimization attributes |                                           | empty array      |
            | application             |                                           | empty str object |
            | products attributes     |                                           | empty array      |

    @ANA_EVENT_DATE013
    @analytics
    @MX @vbank @backend(test)
    @ios @android @web @web-done
    Scenario: Page View - Numero INE
        Given a user with the following criteria
            | criteria                                       |
            | transversal enrollment without card or account |
        And a user accesses the application
        And the user accesses to non account client section
        When the user taps on "help id" item
        Then the device contains the following variables
            | item                    | value                                          | type             |
            | analytics               | analytics/glomo_base                           | json schema      |
            | version DL              | 20250414_5.0                                   | string           |
            | page name               | app:publica:general:registro basico:numero ine | string           |
            | level 1                 | registro basico                                | string           |
            | level 2                 | numero ine                                     | string           |
            | language                | ES                                             | string           |
            | page area               | publica                                        | string           |
            | page intent             | informacion                                    | string           |
            | channel                 | online                                         | string           |
            | page instance ID        | de                                             | string           |
            | page info version       | appVersion                                     | regexp named     |
            | page segment            | general                                        | string           |
            | sysEnv                  | app                                            | string           |
            | business unit           | BBVA Mexico                                    | string           |
            | site app name           | App BBVA Mexico                                | string           |
            | project name            | Glomo                                          | string           |
            | device mobile           | si                                             | string           |
            | user userState          | no logado                                      | string           |
            | internal campaign       |                                                | empty array      |
            | optimization attributes |                                                | empty array      |
            | application             |                                                | empty str object |
            | products attributes     |                                                | empty array      |

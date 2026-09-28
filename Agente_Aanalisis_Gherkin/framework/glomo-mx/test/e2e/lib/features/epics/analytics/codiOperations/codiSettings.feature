@codiSettingsAnalytics
Feature: Analytics - CoDi operative - Settings

    @ANA_CODISETT001
    @analytics @MX @backend(test) @vbank
    @web @ios @android @manual @JIRA.GLOMOMX-159689
    Scenario: The user accesses to CoDi settings - Analytics Page View
        Given a user with the following criteria
            | criteria    |
            | enroll codi |
        And the user accesses to dashboard
        When the user accesses to "CoDi" settings
        Then the device contains the following variables
            | item                    | value                                                      | type             |
            | analytics               | analytics/glomo_base                                       | json schema      |
            | version DL              | 20250414_5.0                                               | string           |
            | page name               | app:privada:personas:configuracion:operaciones qr mas codi | string           |
            | level 1                 | configuracion                                              | string           |
            | level 2                 | operaciones qr mas codi                                    | string           |
            | language                | ES                                                         | string           |
            | page area               | privada                                                    | string           |
            | page intent             | informacion                                                | string           |
            | channel                 | online                                                     | string           |
            | page instance ID        | de                                                         | string           |
            | page info version       | appVersion                                                 | regexp named     |
            | page segment            | personas                                                   | string           |
            | sysEnv                  | app                                                        | string           |
            | business unit           | BBVA Mexico                                                | string           |
            | site app name           | App BBVA Mexico                                            | string           |
            | project name            | Glomo                                                      | string           |
            | device mobile           | si                                                         | string           |
            | user userState          | logado                                                     | string           |
            | profile ID              | profileID                                                  | regexp named     |
            | user segment global     | 003001                                                     | string           |
            | user gender             | gender                                                     | regexp named     |
            | user age                | age                                                        | regexp named     |
            | internal campaign       |                                                            | empty array      |
            | optimization attributes |                                                            | empty array      |
            | application             |                                                            | empty str object |
            | products attributes     |                                                            | empty array      |

    @ANA_CODISETT002
    @analytics @MX @backend(test) @vbank
    @web @ios @android @manual @JIRA.GLOMOMX-159689
    Scenario: Entra a terminos y condiciones - Analytics External link
        Given a user with the following criteria
            | criteria    |
            | enroll codi |
        And the user accesses to dashboard
        When the user accesses to "CoDi" settings
        Then the device contains the following variables
            | item                    | value                                                      | type             |
            | analytics               | analytics/glomo_base                                       | json schema      |
            | version DL              | 20250414_5.0                                               | string           |
            | page name               | app:privada:personas:configuracion:operaciones qr mas codi | string           |
            | level 1                 | configuracion                                              | string           |
            | level 2                 | operaciones qr mas codi                                    | string           |
            | language                | ES                                                         | string           |
            | page area               | privada                                                    | string           |
            | page intent             | informacion                                                | string           |
            | channel                 | online                                                     | string           |
            | page instance ID        | de                                                         | string           |
            | page info version       | appVersion                                                 | regexp named     |
            | page segment            | personas                                                   | string           |
            | sysEnv                  | app                                                        | string           |
            | business unit           | BBVA Mexico                                                | string           |
            | site app name           | App BBVA Mexico                                            | string           |
            | project name            | Glomo                                                      | string           |
            | device mobile           | si                                                         | string           |
            | user userState          | logado                                                     | string           |
            | profile ID              | profileID                                                  | regexp named     |
            | user segment global     | 003001                                                     | string           |
            | user gender             | gender                                                     | regexp named     |
            | user age                | age                                                        | regexp named     |
            | link url                | terminos y condiciones                                     | string           |
            | internal campaign       |                                                            | empty array      |
            | optimization attributes |                                                            | empty array      |
            | application             |                                                            | empty str object |
            | products attributes     |                                                            | empty array      |

    @ANA_CODISETT003
    @analytics @MX @backend(test) @vbank
    @web @ios @android @manual @JIRA.GLOMOMX-159689
    Scenario: The user selects CoDi BBVA as their default app - Analytics Page View
        Given a user with the following criteria
            | criteria    |
            | enroll codi |
        And the user accesses to dashboard
        And the user accesses to "CoDi" settings
        When the user accesses to "Change default app" settings
        Then the device contains the following variables
            | item                    | value                                                       | type             |
            | analytics               | analytics/glomo_base                                        | json schema      |
            | version DL              | 20250414_5.0                                                | string           |
            | page name               | app:privada:personas:configuracion:codi:establecer app bbva | string           |
            | level 1                 | configuracion                                               | string           |
            | level 2                 | codi                                                        | string           |
            | level 3                 | establecer app bbva                                         | string           |
            | language                | ES                                                          | string           |
            | page area               | privada                                                     | string           |
            | page intent             | informacion                                                 | string           |
            | channel                 | online                                                      | string           |
            | page instance ID        | de                                                          | string           |
            | page info version       | appVersion                                                  | regexp named     |
            | page segment            | personas                                                    | string           |
            | sysEnv                  | app                                                         | string           |
            | business unit           | BBVA Mexico                                                 | string           |
            | site app name           | App BBVA Mexico                                             | string           |
            | project name            | Glomo                                                       | string           |
            | device mobile           | si                                                          | string           |
            | user userState          | logado                                                      | string           |
            | profile ID              | profileID                                                   | regexp named     |
            | user segment global     | 003001                                                      | string           |
            | user gender             | gender                                                      | regexp named     |
            | user age                | age                                                         | regexp named     |
            | internal campaign       |                                                             | empty array      |
            | optimization attributes |                                                             | empty array      |
            | application             |                                                             | empty str object |
            | products attributes     |                                                             | empty array      |

    @ANA_CODISETT004
    @analytics @MX @backend(test) @vbank
    @web @ios @android @manual @JIRA.GLOMOMX-159689
    Scenario: The user selects and accepts CoDi BBVA as their default application - Analytics Page View
        Given a user with the following criteria
            | criteria    |
            | enroll codi |
        And the user accesses to dashboard
        And the user accesses to "CoDi" settings
        When the user accesses to "Change default app" settings
        Then the device contains the following variables
            | item                    | value                                                      | type             |
            | analytics               | analytics/glomo_base                                       | json schema      |
            | version DL              | 20250414_5.0                                               | string           |
            | page name               | app:privada:personas:configuracion:codi:confirmar app bbva | string           |
            | level 1                 | configuracion                                              | string           |
            | level 2                 | codi                                                       | string           |
            | level 3                 | confirmar app bbva                                         | string           |
            | language                | ES                                                         | string           |
            | page area               | privada                                                    | string           |
            | page intent             | informacion                                                | string           |
            | channel                 | online                                                     | string           |
            | page instance ID        | de                                                         | string           |
            | page info version       | appVersion                                                 | regexp named     |
            | page segment            | personas                                                   | string           |
            | sysEnv                  | app                                                        | string           |
            | business unit           | BBVA Mexico                                                | string           |
            | site app name           | App BBVA Mexico                                            | string           |
            | project name            | Glomo                                                      | string           |
            | device mobile           | si                                                         | string           |
            | user userState          | logado                                                     | string           |
            | profile ID              | profileID                                                  | regexp named     |
            | user segment global     | 003001                                                     | string           |
            | user gender             | gender                                                     | regexp named     |
            | user age                | age                                                        | regexp named     |
            | internal campaign       |                                                            | empty array      |
            | optimization attributes |                                                            | empty array      |
            | application             |                                                            | empty str object |
            | products attributes     |                                                            | empty array      |

    @ANA_CODISETT005
    @analytics @MX @backend(test) @vbank
    @web @ios @android @manual @JIRA.GLOMOMX-159689
    Scenario: El usuario selecciona de manera exitosa codi - Analytics Page View
        Given a user with the following criteria
            | criteria    |
            | enroll codi |
        And the user accesses to dashboard
        And the user accesses to "CoDi" settings
        When the user accesses to "Change default app" settings
        Then the device contains the following variables
            | item                    | value                                                  | type             |
            | analytics               | analytics/glomo_base                                   | json schema      |
            | version DL              | 20250414_5.0                                           | string           |
            | page name               | app:privada:personas:configuracion:codi:pagina exitosa | string           |
            | level 1                 | configuracion                                          | string           |
            | level 2                 | codi                                                   | string           |
            | level 3                 | pagina exitosa                                         | string           |
            | language                | ES                                                     | string           |
            | page area               | privada                                                | string           |
            | page intent             | informacion                                            | string           |
            | channel                 | online                                                 | string           |
            | page instance ID        | de                                                     | string           |
            | page info version       | appVersion                                             | regexp named     |
            | page segment            | personas                                               | string           |
            | sysEnv                  | app                                                    | string           |
            | business unit           | BBVA Mexico                                            | string           |
            | site app name           | App BBVA Mexico                                        | string           |
            | project name            | Glomo                                                  | string           |
            | device mobile           | si                                                     | string           |
            | user userState          | logado                                                 | string           |
            | profile ID              | profileID                                              | regexp named     |
            | user segment global     | 003001                                                 | string           |
            | user gender             | gender                                                 | regexp named     |
            | user age                | age                                                    | regexp named     |
            | internal campaign       |                                                        | empty array      |
            | optimization attributes |                                                        | empty array      |
            | application             |                                                        | empty str object |
            | products attributes     |                                                        | empty array      |

    @ANA_CODISETT006
    @analytics @MX @backend(test) @vbank
    @web @ios @android @manual @JIRA.GLOMOMX-159689
    Scenario: El usuario visualiza la opcion de Sver mas sobre CoDi - Analytics Page View
        Given a user with the following criteria
            | criteria    |
            | enroll codi |
        And the user accesses to dashboard
        And the user accesses to "CoDi" settings
        When the user accesses to "Change default app" settings
        Then the device contains the following variables
            | item                    | value                                                           | type             |
            | analytics               | analytics/glomo_base                                            | json schema      |
            | version DL              | 20250414_5.0                                                    | string           |
            | page name               | app:privada:personas:configuracion:codi:saber mas sobre el codi | string           |
            | level 1                 | configuracion                                                   | string           |
            | level 2                 | codi                                                            | string           |
            | level 3                 | saber mas sobre el codi                                         | string           |
            | language                | ES                                                              | string           |
            | page area               | privada                                                         | string           |
            | page intent             | informacion                                                     | string           |
            | channel                 | online                                                          | string           |
            | page instance ID        | de                                                              | string           |
            | page info version       | appVersion                                                      | regexp named     |
            | page segment            | personas                                                        | string           |
            | sysEnv                  | app                                                             | string           |
            | business unit           | BBVA Mexico                                                     | string           |
            | site app name           | App BBVA Mexico                                                 | string           |
            | project name            | Glomo                                                           | string           |
            | device mobile           | si                                                              | string           |
            | user userState          | logado                                                          | string           |
            | profile ID              | profileID                                                       | regexp named     |
            | user segment global     | 003001                                                          | string           |
            | user gender             | gender                                                          | regexp named     |
            | user age                | age                                                             | regexp named     |
            | internal campaign       |                                                                 | empty array      |
            | optimization attributes |                                                                 | empty array      |
            | application             |                                                                 | empty str object |
            | products attributes     |                                                                 | empty array      |

    @ANA_CODISETT007
    @analytics @MX @backend(test) @vbank
    @web @ios @android @manual @JIRA.GLOMOMX-159689
    Scenario: El usuario selecciona la opcion de borrar registro de codi - Analytics Page View
        Given a user with the following criteria
            | criteria    |
            | enroll codi |
        And the user accesses to dashboard
        And the user accesses to "CoDi" settings
        When the user accesses to "Change default app" settings
        Then the device contains the following variables
            | item                    | value                                                        | type             |
            | analytics               | analytics/glomo_base                                         | json schema      |
            | version DL              | 20250414_5.0                                                 | string           |
            | page name               | app:privada:personas:configuracion:codi:borrar registro codi | string           |
            | level 1                 | configuracion                                                | string           |
            | level 2                 | codi                                                         | string           |
            | level 3                 | borrar registro codi                                         | string           |
            | language                | ES                                                           | string           |
            | page area               | privada                                                      | string           |
            | page intent             | informacion                                                  | string           |
            | channel                 | online                                                       | string           |
            | page instance ID        | de                                                           | string           |
            | page info version       | appVersion                                                   | regexp named     |
            | page segment            | personas                                                     | string           |
            | sysEnv                  | app                                                          | string           |
            | business unit           | BBVA Mexico                                                  | string           |
            | site app name           | App BBVA Mexico                                              | string           |
            | project name            | Glomo                                                        | string           |
            | device mobile           | si                                                           | string           |
            | user userState          | logado                                                       | string           |
            | profile ID              | profileID                                                    | regexp named     |
            | user segment global     | 003001                                                       | string           |
            | user gender             | gender                                                       | regexp named     |
            | user age                | age                                                          | regexp named     |
            | internal campaign       |                                                              | empty array      |
            | optimization attributes |                                                              | empty array      |
            | application             |                                                              | empty str object |
            | products attributes     |                                                              | empty array      |

    @ANA_CODISETT008
    @analytics @MX @backend(test) @vbank
    @web @ios @android @manual @JIRA.GLOMOMX-159689
    Scenario: El usuario selecciona y confirma la opcion de borrar registro de codi - Analytics Internal Link
        Given a user with the following criteria
            | criteria    |
            | enroll codi |
        And the user accesses to dashboard
        And the user accesses to "CoDi" settings
        When the user accesses to "Change default app" settings
        Then the device contains the following variables
            | item                    | value                                                        | type             |
            | analytics               | analytics/glomo_base                                         | json schema      |
            | version DL              | 20250414_5.0                                                 | string           |
            | page name               | app:privada:personas:configuracion:codi:borrar registro codi | string           |
            | level 1                 | configuracion                                                | string           |
            | level 2                 | codi                                                         | string           |
            | level 3                 | borrar registro codi                                         | string           |
            | language                | ES                                                           | string           |
            | page area               | privada                                                      | string           |
            | page intent             | informacion                                                  | string           |
            | channel                 | online                                                       | string           |
            | page instance ID        | de                                                           | string           |
            | page info version       | appVersion                                                   | regexp named     |
            | page segment            | personas                                                     | string           |
            | sysEnv                  | app                                                          | string           |
            | business unit           | BBVA Mexico                                                  | string           |
            | site app name           | App BBVA Mexico                                              | string           |
            | project name            | Glomo                                                        | string           |
            | link name               | borrar registro codi                                         | string           |
            | device mobile           | si                                                           | string           |
            | user userState          | logado                                                       | string           |
            | profile ID              | profileID                                                    | regexp named     |
            | user segment global     | 003001                                                       | string           |
            | user gender             | gender                                                       | regexp named     |
            | user age                | age                                                          | regexp named     |
            | internal campaign       |                                                              | empty array      |
            | optimization attributes |                                                              | empty array      |
            | application             |                                                              | empty str object |
            | products attributes     |                                                              | empty array      |

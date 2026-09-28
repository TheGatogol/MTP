@fiscalDataAnalytics
Feature: Fiscal Data Editing Analytics

    @ANA_EVENT_FDE001
    @analytics
    @web @android @ios
    @web-done
    @backend(test) @alternate-scenarios-smoke
    @MX @vbank
    Scenario: Fiscal Reform - App Page Visit
        Given a user with the following criteria
            | criteria         |
            | fiscal data user |
        And the user accesses to profile screen
        And the analytics interceptor service is initiated
        When the user accesses the fiscal data detail
        Then the analytics events contains the following variables
            | item                    | value                                                       | type         | event          |
            | analytics               | analytics/glomo_base                                        | json schema  | App Page Visit |
            | version DL              | 20250414_5.0                                                | string       | App Page Visit |
            | page name               | app:privada:personas:editar datos fiscales:1 reforma fiscal | string       | App Page Visit |
            | level 1                 | editar datos fiscales                                       | string       | App Page Visit |
            | level 2                 | 1 reforma fiscal                                            | string       | App Page Visit |
            | language                | ES                                                          | string       | App Page Visit |
            | page area               | privada                                                     | string       | App Page Visit |
            | page intent             | informacion                                                 | string       | App Page Visit |
            | channel                 | online                                                      | string       | App Page Visit |
            | page instance ID        | de                                                          | string       | App Page Visit |
            | page info version       | appVersion                                                  | regexp named | App Page Visit |
            | page segment            | personas                                                    | string       | App Page Visit |
            | sysEnv                  | app                                                         | string       | App Page Visit |
            | business unit           | BBVA Mexico                                                 | string       | App Page Visit |
            | site app name           | App BBVA Mexico                                             | string       | App Page Visit |
            | project name            | Glomo                                                       | string       | App Page Visit |
            | device mobile           | si                                                          | string       | App Page Visit |
            | user userState          | logado                                                      | string       | App Page Visit |
            | user segment global     | 003001                                                      | string       | App Page Visit |
            | profile ID              | profileID                                                   | regexp named | App Page Visit |
            | global application      | tax documentation                                           | string       | App Page Visit |
            | application name        | editar datos fiscales                                       | string       | App Page Visit |
            | application type        | autogestion                                                 | string       | App Page Visit |
            | application step        | 1 reforma fiscal                                            | string       | App Page Visit |
            | fulfillment model       | online                                                      | string       | App Page Visit |
            | user age                | age                                                         | regexp named | App Page Visit |
            | user gender             | gender                                                      | regexp named | App Page Visit |
            | internal campaign       |                                                             | empty array  | App Page Visit |
            | optimization attributes |                                                             | empty array  | App Page Visit |
            | products attributes     |                                                             | empty array  | App Page Visit |

    @ANA_FDE002
    @analytics
    @web-done
    @web @android @ios
    @MX
    @backend(test) @alternate-scenarios-smoke
    @vbank
    Scenario: Fiscal Reform - App Started
        Given a user with the following criteria
            | criteria         |
            | fiscal data user |
        And the user accesses to profile screen
        When the user accesses the fiscal data detail
        And the analytics interceptor service is initiated
        And the user accept the modal of the tax reform
        Then the analytics events contains the following variables
            | item                    | value                                                       | type         | event       |
            | analytics               | analytics/glomo_base                                        | json schema  | App Started |
            | version DL              | 20250414_5.0                                                | string       | App Started |
            | page name               | app:privada:personas:editar datos fiscales:1 reforma fiscal | string       | App Started |
            | level 1                 | editar datos fiscales                                       | string       | App Started |
            | level 2                 | 1 reforma fiscal                                            | string       | App Started |
            | language                | ES                                                          | string       | App Started |
            | page area               | privada                                                     | string       | App Started |
            | page intent             | informacion                                                 | string       | App Started |
            | channel                 | online                                                      | string       | App Started |
            | page instance ID        | de                                                          | string       | App Started |
            | page info version       | appVersion                                                  | regexp named | App Started |
            | page segment            | personas                                                    | string       | App Started |
            | sysEnv                  | app                                                         | string       | App Started |
            | business unit           | BBVA Mexico                                                 | string       | App Started |
            | site app name           | App BBVA Mexico                                             | string       | App Started |
            | project name            | Glomo                                                       | string       | App Started |
            | device mobile           | si                                                          | string       | App Started |
            | user userState          | logado                                                      | string       | App Started |
            | user segment global     | 003001                                                      | string       | App Started |
            | profile ID              | profileID                                                   | regexp named | App Started |
            | global application      | tax documentation                                           | string       | App Started |
            | application name        | editar datos fiscales                                       | string       | App Started |
            | application type        | autogestion                                                 | string       | App Started |
            | application step        | entendido                                                   | string       | App Started |
            | fulfillment model       | online                                                      | string       | App Started |
            | user age                | age                                                         | regexp named | App Started |
            | user gender             | gender                                                      | regexp named | App Started |
            | internal campaign       |                                                             | empty array  | App Started |
            | optimization attributes |                                                             | empty array  | App Started |
            | products attributes     |                                                             | empty array  | App Started |

    @ANA_FDE003
    @analytics
    @web-done
    @web @android @ios
    @MX
    @backend(test)
    @vbank
    Scenario: Fiscal Reform - App Step 2
        Given a user with the following criteria
            | criteria         |
            | fiscal data user |
        And the user accesses to profile screen
        When the user accesses the fiscal data detail
        And the analytics interceptor service is initiated
        And the user accept the modal of the tax reform
        And the user goes to the "tax data" step
        Then the analytics events contains the following variables
            | item                    | value                                                       | type         | event       |
            | analytics               | analytics/glomo_base                                        | json schema  | App Step 2  |
            | version DL              | 20250414_5.0                                                | string       | App Step 2  |
            | page name               | app:privada:personas:editar datos fiscales:2 datos fiscales | string       | App Step 2  |
            | level 1                 | editar datos fiscales                                       | string       | App Step 2  |
            | level 2                 | 2 datos fiscales                                            | string       | App Step 2  |
            | language                | ES                                                          | string       | App Step 2  |
            | page area               | privada                                                     | string       | App Step 2  |
            | page intent             | informacion                                                 | string       | App Step 2  |
            | channel                 | online                                                      | string       | App Step 2  |
            | page instance ID        | de                                                          | string       | App Step 2  |
            | page info version       | appVersion                                                  | regexp named | App Step 2  |
            | page segment            | personas                                                    | string       | App Step 2  |
            | sysEnv                  | app                                                         | string       | App Step 2  |
            | business unit           | BBVA Mexico                                                 | string       | App Step 2  |
            | site app name           | App BBVA Mexico                                             | string       | App Step 2  |
            | project name            | Glomo                                                       | string       | App Step 2  |
            | device mobile           | si                                                          | string       | App Step 2  |
            | user userState          | logado                                                      | string       | App Step 2  |
            | user segment global     | 003001                                                      | string       | App Step 2  |
            | profile ID              | profileID                                                   | regexp named | App Step 2  |
            | global application      | tax documentation                                           | string       | App Step 2  |
            | application name        | editar datos fiscales                                       | string       | App Step 2  |
            | application type        | autogestion                                                 | string       | App Step 2  |
            | application step        | 2 datos fiscales                                            | string       | App Step 2  |
            | fulfillment model       | online                                                      | string       | App Step 2  |
            | user age                | age                                                         | regexp named | App Step 2  |
            | user gender             | gender                                                      | regexp named | App Step 2  |
            | internal campaign       |                                                             | empty array  | App Step 2  |
            | optimization attributes |                                                             | empty array  | App Step 2  |
            | products attributes     |                                                             | empty array  | App Step 2  |

    @ANA_EVENT_FDE004
    @analytics
    @web-done
    @web @android @ios
    @MX
    @backend(test)
    @vbank
    Scenario: Fiscal Reform - App Step 3
        Given a user with the following criteria
            | criteria         |
            | fiscal data user |
        And the user accesses to profile screen
        When the user accesses the fiscal data detail
        And the user accept the modal of the tax reform
        And the analytics interceptor service is initiated
        And the user goes to the "tax address" step
        Then the analytics events contains the following variables
            | item                    | value                                                         | type         | event      |
            | analytics               | analytics/glomo_base                                          | json schema  | App Step 3 |
            | version DL              | 20250414_5.0                                                  | string       | App Step 3 |
            | page name               | app:privada:personas:editar datos fiscales:3 domicilio fiscal | string       | App Step 3 |
            | level 1                 | editar datos fiscales                                         | string       | App Step 3 |
            | level 2                 | 3 domicilio fiscal                                            | string       | App Step 3 |
            | language                | ES                                                            | string       | App Step 3 |
            | page area               | privada                                                       | string       | App Step 3 |
            | page intent             | informacion                                                   | string       | App Step 3 |
            | channel                 | online                                                        | string       | App Step 3 |
            | page instance ID        | de                                                            | string       | App Step 3 |
            | page info version       | appVersion                                                    | regexp named | App Step 3 |
            | page segment            | personas                                                      | string       | App Step 3 |
            | sysEnv                  | app                                                           | string       | App Step 3 |
            | business unit           | BBVA Mexico                                                   | string       | App Step 3 |
            | site app name           | App BBVA Mexico                                               | string       | App Step 3 |
            | project name            | Glomo                                                         | string       | App Step 3 |
            | device mobile           | si                                                            | string       | App Step 3 |
            | user userState          | logado                                                        | string       | App Step 3 |
            | user segment global     | 003001                                                        | string       | App Step 3 |
            | profile ID              | profileID                                                     | regexp named | App Step 3 |
            | global application      | tax documentation                                             | string       | App Step 3 |
            | application name        | editar datos fiscales                                         | string       | App Step 3 |
            | application type        | autogestion                                                   | string       | App Step 3 |
            | application step        | 3 domicilio fiscal                                            | string       | App Step 3 |
            | fulfillment model       | online                                                        | string       | App Step 3 |
            | user age                | age                                                           | regexp named | App Step 3 |
            | user gender             | gender                                                        | regexp named | App Step 3 |
            | internal campaign       |                                                               | empty array  | App Step 3 |
            | optimization attributes |                                                               | empty array  | App Step 3 |
            | products attributes     |                                                               | empty array  | App Step 3 |

    @ANA_FDE005
    @analytics
    @web-done
    @web @android @ios
    @MX
    @backend(test)
    @vbank
    Scenario: Fiscal Reform - App Step 4
        Given a user with the following criteria
            | criteria         |
            | fiscal data user |
        And the user accesses to profile screen
        When the user accesses the fiscal data detail
        And the user accept the modal of the tax reform
        And the user goes to the "use of tax data" step
        Then the device contains the following variables
            | item                    | value                                                              | type         |
            | analytics               | analytics/glomo_base                                               | json schema  |
            | version DL              | 20250414_5.0                                                       | string       |
            | page name               | app:privada:personas:editar datos fiscales:4 uso de datos fiscales | string       |
            | level 1                 | editar datos fiscales                                              | string       |
            | level 2                 | 4 uso de datos fiscales                                            | string       |
            | language                | ES                                                                 | string       |
            | page area               | privada                                                            | string       |
            | page intent             | informacion                                                        | string       |
            | channel                 | online                                                             | string       |
            | page instance ID        | de                                                                 | string       |
            | page info version       | appVersion                                                         | regexp named |
            | page segment            | personas                                                           | string       |
            | sysEnv                  | app                                                                | string       |
            | business unit           | BBVA Mexico                                                        | string       |
            | site app name           | App BBVA Mexico                                                    | string       |
            | project name            | Glomo                                                              | string       |
            | device mobile           | si                                                                 | string       |
            | user userState          | logado                                                             | string       |
            | user segment global     | 003001                                                             | string       |
            | profile ID              | profileID                                                          | regexp named |
            | global application      | tax documentation                                                  | string       |
            | application name        | editar datos fiscales                                              | string       |
            | application type        | autogestion                                                        | string       |
            | application step        | 4 uso de datos fiscales                                            | string       |
            | fulfillment model       | online                                                             | string       |
            | user age                | age                                                                | regexp named |
            | user gender             | gender                                                             | regexp named |
            | internal campaign       |                                                                    | empty array  |
            | optimization attributes |                                                                    | empty array  |
            | products attributes     |                                                                    | empty array  |

    @ANA_FDE006
    @analytics
    @web-done
    @web @android @ios
    @MX
    @backend(test)
    @vbank
    Scenario: Fiscal Reform - App Step 5
        Given a user with the following criteria
            | criteria         |
            | fiscal data user |
        And the user accesses to profile screen
        When the user accesses the fiscal data detail
        And the user accept the modal of the tax reform
        And the user goes to the "tax data summary" step
        And the user confirms all changes for fiscal data
        Then the device contains the following variables
            | item                    | value                                                     | type         |
            | analytics               | analytics/glomo_base                                      | json schema  |
            | version DL              | 20250414_5.0                                              | string       |
            | page name               | app:privada:personas:editar datos fiscales:5 confirmacion | string       |
            | level 1                 | editar datos fiscales                                     | string       |
            | level 2                 | 5 confirmacion                                            | string       |
            | language                | ES                                                        | string       |
            | page area               | privada                                                   | string       |
            | page intent             | informacion                                               | string       |
            | channel                 | online                                                    | string       |
            | page instance ID        | de                                                        | string       |
            | page info version       | appVersion                                                | regexp named |
            | page segment            | personas                                                  | string       |
            | sysEnv                  | app                                                       | string       |
            | business unit           | BBVA Mexico                                               | string       |
            | site app name           | App BBVA Mexico                                           | string       |
            | project name            | Glomo                                                     | string       |
            | device mobile           | si                                                        | string       |
            | user userState          | logado                                                    | string       |
            | user segment global     | 003001                                                    | string       |
            | profile ID              | profileID                                                 | regexp named |
            | global application      | tax documentation                                         | string       |
            | application name        | editar datos fiscales                                     | string       |
            | application type        | autogestion                                               | string       |
            | application step        | 5 confirmacion                                            | string       |
            | fulfillment model       | online                                                    | string       |
            | user age                | age                                                       | regexp named |
            | user gender             | gender                                                    | regexp named |
            | internal campaign       |                                                           | empty array  |
            | optimization attributes |                                                           | empty array  |
            | products attributes     |                                                           | empty array  |

    @ANA_FDE007
    @analytics
    @web-done
    @web @android @ios
    @MX
    @backend(test)
    @vbank
    Scenario: Fiscal Reform - App Completed
        Given a user with the following criteria
            | criteria         |
            | fiscal data user |
        And the user accesses to profile screen
        When the user accesses the fiscal data detail
        And the user accept the modal of the tax reform
        And the user goes to the "tax data summary" step
        And the user confirms the fiscal data update
        Then the device contains the following variables
            | item                         | value                                                     | type         |
            | analytics                    | analytics/glomo_base                                      | json schema  |
            | version DL                   | 20250414_5.0                                              | string       |
            | page name                    | app:privada:personas:editar datos fiscales:pagina exitosa | string       |
            | level 1                      | editar datos fiscales                                     | string       |
            | level 2                      | pagina exitosa                                            | string       |
            | language                     | ES                                                        | string       |
            | page area                    | privada                                                   | string       |
            | page intent                  | informacion                                               | string       |
            | channel                      | online                                                    | string       |
            | page instance ID             | de                                                        | string       |
            | page info version            | appVersion                                                | regexp named |
            | page segment                 | personas                                                  | string       |
            | sysEnv                       | app                                                       | string       |
            | business unit                | BBVA Mexico                                               | string       |
            | site app name                | App BBVA Mexico                                           | string       |
            | project name                 | Glomo                                                     | string       |
            | device mobile                | si                                                        | string       |
            | user userState               | logado                                                    | string       |
            | user segment global          | 003001                                                    | string       |
            | profile ID                   | profileID                                                 | regexp named |
            | global application           | tax documentation                                         | string       |
            | application name             | editar datos fiscales                                     | string       |
            | application type             | autogestion                                               | string       |
            | application step             | pagina exitosa                                            | string       |
            | fulfillment model            | online                                                    | string       |
            | user age                     | age                                                       | regexp named |
            | user gender                  | gender                                                    | regexp named |
            | application state            | finalizado                                                | string       |
            | application operation number | cape630609i70                                             | string       |
            | custom fields                | firma:token                                               | string       |
            | internal campaign            |                                                           | empty array  |
            | optimization attributes      |                                                           | empty array  |
            | products attributes          |                                                           | empty array  |

    @ANA_FDE008
    @analytics
    @web-done
    @web @android @ios
    @MX
    @backend(test)
    @vbank @manual @JIRA.GLOMOGL-23888
    Scenario: Fiscal Reform - Huella Page View
        Given a user with the following criteria
            | criteria         |
            | fiscal data user |
        And the user accesses to profile screen
        When the user accesses the fiscal data detail
        And the user accept the modal of the tax reform
        And the user enters the "about tax reform" modal
        Then the device contains the following variables
            | item                    | value                                                                 | type             |
            | analytics               | analytics/glomo_base                                                  | json schema      |
            | version DL              | 20250414_5.0                                                          | string           |
            | page name               | app:privada:personas:editar datos fiscales:informacion regimen fiscal | string           |
            | level 1                 | editar datos fiscales                                                 | string           |
            | level 2                 | informacion regimen fiscal                                            | string           |
            | language                | ES                                                                    | string           |
            | page area               | privada                                                               | string           |
            | page intent             | informacion                                                           | string           |
            | channel                 | online                                                                | string           |
            | page instance ID        | de                                                                    | string           |
            | page info version       | appVersion                                                            | regexp named     |
            | page segment            | personas                                                              | string           |
            | sysEnv                  | app                                                                   | string           |
            | business unit           | BBVA Mexico                                                           | string           |
            | site app name           | App BBVA Mexico                                                       | string           |
            | project name            | Glomo                                                                 | string           |
            | device mobile           | si                                                                    | string           |
            | user userState          | logado                                                                | string           |
            | user segment global     | 003001                                                                | string           |
            | profile ID              | profileID                                                             | regexp named     |
            | user age                | age                                                                   | regexp named     |
            | user gender             | gender                                                                | regexp named     |
            | internal campaign       |                                                                       | empty array      |
            | optimization attributes |                                                                       | empty array      |
            | application             |                                                                       | empty str object |
            | products attributes     |                                                                       | empty array      |

    @ANA_FDE009
    @analytics
    @web-done
    @web @android @ios
    @MX
    @backend(test)
    @vbank @manual @JIRA.GLOMOGL-23888
    Scenario: Fiscal Reform - Error Generico
        Given a user with the following criteria
            | criteria         |
            | fiscal data user |
        And the user accesses to profile screen
        When the user accesses the fiscal data detail
        And the user accept the modal of the tax reform
        And the user goes to the "tax data summary" step
        And the user confirms the fiscal data update
        Then the device contains the following variables
            | item                    | value                                                        | type             |
            | analytics               | analytics/glomo_base                                         | json schema      |
            | version DL              | 20250414_5.0                                                 | string           |
            | page name               | app:privada:personas:editar datos fiscales:error de servicio | string           |
            | level 1                 | editar datos fiscales                                        | string           |
            | level 2                 | error de servicio                                            | string           |
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
            | user segment global     | 003001                                                       | string           |
            | profile ID              | profileID                                                    | regexp named     |
            | user age                | age                                                          | regexp named     |
            | user gender             | gender                                                       | regexp named     |
            | error page              | error de servicio                                            | string           |
            | internal campaign       |                                                              | empty array      |
            | optimization attributes |                                                              | empty array      |
            | application             |                                                              | empty str object |
            | products attributes     |                                                              | empty array      |

    @ANA_FDE010
    @analytics
    @web-done
    @web @android @ios
    @backend(test)
    @MX @vbank @manual @JIRA.GLOMOGL-23888
    Scenario: Fiscal Reform - App On Click Start
        Given a user with the following criteria
            | criteria         |
            | fiscal data user |
        And the user accesses to profile screen
        And the analytics interceptor service is initiated
        When the user accesses the fiscal data detail
        Then the analytics events contains the following variables
            | item                    | value                          | type         | event              |
            | analytics               | analytics/glomo_base           | json schema  | App On Click Start |
            | version DL              | 20250414_5.0                   | string       | App On Click Start |
            | page name               | app:privada:personas:mi perfil | string       | App On Click Start |
            | level 1                 | mi perfil                      | string       | App On Click Start |
            | language                | ES                             | string       | App On Click Start |
            | page area               | privada                        | string       | App On Click Start |
            | page intent             | informacion                    | string       | App On Click Start |
            | channel                 | online                         | string       | App On Click Start |
            | page instance ID        | de                             | string       | App On Click Start |
            | page info version       | appVersion                     | regexp named | App On Click Start |
            | page segment            | personas                       | string       | App On Click Start |
            | sysEnv                  | app                            | string       | App On Click Start |
            | business unit           | BBVA Mexico                    | string       | App On Click Start |
            | site app name           | App BBVA Mexico                | string       | App On Click Start |
            | project name            | Glomo                          | string       | App On Click Start |
            | device mobile           | si                             | string       | App On Click Start |
            | user userState          | logado                         | string       | App On Click Start |
            | user segment global     | 003001                         | string       | App On Click Start |
            | profile ID              | profileID                      | regexp named | App On Click Start |
            | global application      | tax documentation              | string       | App On Click Start |
            | application name        | editar datos fiscales          | string       | App On Click Start |
            | application type        | autogestion                    | string       | App On Click Start |
            | application step        | mi perfil                      | string       | App On Click Start |
            | fulfillment model       | online                         | string       | App On Click Start |
            | user age                | age                            | regexp named | App On Click Start |
            | user gender             | gender                         | regexp named | App On Click Start |
            | internal campaign       |                                | empty array  | App On Click Start |
            | optimization attributes |                                | empty array  | App On Click Start |
            | products attributes     |                                | empty array  | App On Click Start |

@sustainabilityCarbonFootprintOffsetAnalytics
Feature: Analytics - Sustainability Carbon Footprint Offset

    @ANA_EVENT_SCFO001
    @analytics @MX
    @web @android @ios
    @backend(test)
    @vbank @web-done
    Scenario: The user clicks on the button - Contribute to forestry projects
        Given a user with the following criteria
            | criteria                                    |
            | sustainability carbon footprint offset user |
        And the user accesses to sustainability section
        And the user accesses to sustainability carbon footprint offset section
        And the analytics interceptor service is initiated
        When the user accesses to the contribution project
        Then the analytics events contains the following variables:
            | item                    | value                                                    | type         | event              |
            | analytics               | analytics/glomo_base                                     | json schema  | App On Click Start |
            | page name               | app:privada:personas:sostenibilidad:proyectos forestales | string       | App On Click Start |
            | level 1                 | sostenibilidad                                           | string       | App On Click Start |
            | level 2                 | proyectos forestales                                     | string       | App On Click Start |
            | language                | ES                                                       | string       | App On Click Start |
            | page area               | privada                                                  | string       | App On Click Start |
            | page intent             | informacion                                              | string       | App On Click Start |
            | channel                 | online                                                   | string       | App On Click Start |
            | page instance ID        | de                                                       | string       | App On Click Start |
            | version DL              | 20250414_5.0                                             | string       | App On Click Start |
            | page info version       | appVersion                                               | regexp named | App On Click Start |
            | page segment            | personas                                                 | string       | App On Click Start |
            | sysEnv                  | app                                                      | string       | App On Click Start |
            | business unit           | BBVA Mexico                                              | string       | App On Click Start |
            | site app name           | App BBVA Mexico                                          | string       | App On Click Start |
            | project name            | Glomo                                                    | string       | App On Click Start |
            | user segment global     | 003001                                                   | string       | App On Click Start |
            | device mobile           | si                                                       | string       | App On Click Start |
            | user userState          | logado                                                   | string       | App On Click Start |
            | profile ID              | profileID                                                | regexp named | App On Click Start |
            | user gender             | gender                                                   | regexp named | App On Click Start |
            | user age                | age                                                      | regexp named | App On Click Start |
            | global application      | forestry project contribution                            | string       | App On Click Start |
            | application type        | operativa                                                | string       | App On Click Start |
            | application name        | aportar a proyecto forestal                              | string       | App On Click Start |
            | application step        | aportar a proyectos forestales                           | string       | App On Click Start |
            | fulfillment model       | online                                                   | string       | App On Click Start |
            | internal campaign       |                                                          | empty array  | App On Click Start |
            | optimization attributes |                                                          | empty array  | App On Click Start |
            | products attributes     |                                                          | empty array  | App On Click Start |

    @ANA_EVENT_SCFO002
    @analytics @MX
    @web @android @ios
    @backend(test)
    @vbank @web-done
    Scenario: The user enters the project list section
        Given a user with the following criteria
            | criteria                                    |
            | sustainability carbon footprint offset user |
        And the user accesses to sustainability section
        And the user accesses to sustainability carbon footprint offset section
        And the analytics interceptor service is initiated
        When the user accesses to the contribution project
        Then the analytics events contains the following variables:
            | item                    | value                                                                                  | type         | event          |
            | analytics               | analytics/glomo_base                                                                   | json schema  | App Page Visit |
            | page name               | app:privada:personas:sostenibilidad:aportar a proyecto forestal:1 seleccionar proyecto | string       | App Page Visit |
            | level 1                 | sostenibilidad                                                                         | string       | App Page Visit |
            | level 2                 | aportar a proyecto forestal                                                            | string       | App Page Visit |
            | level 3                 | 1 seleccionar proyecto                                                                 | string       | App Page Visit |
            | language                | ES                                                                                     | string       | App Page Visit |
            | page area               | privada                                                                                | string       | App Page Visit |
            | page intent             | transaccion                                                                            | string       | App Page Visit |
            | channel                 | online                                                                                 | string       | App Page Visit |
            | page instance ID        | de                                                                                     | string       | App Page Visit |
            | version DL              | 20250414_5.0                                                                           | string       | App Page Visit |
            | page info version       | appVersion                                                                             | regexp named | App Page Visit |
            | page segment            | personas                                                                               | string       | App Page Visit |
            | sysEnv                  | app                                                                                    | string       | App Page Visit |
            | business unit           | BBVA Mexico                                                                            | string       | App Page Visit |
            | site app name           | App BBVA Mexico                                                                        | string       | App Page Visit |
            | project name            | Glomo                                                                                  | string       | App Page Visit |
            | user segment global     | 003001                                                                                 | string       | App Page Visit |
            | device mobile           | si                                                                                     | string       | App Page Visit |
            | user userState          | logado                                                                                 | string       | App Page Visit |
            | profile ID              | profileID                                                                              | regexp named | App Page Visit |
            | user gender             | gender                                                                                 | regexp named | App Page Visit |
            | user age                | age                                                                                    | regexp named | App Page Visit |
            | global application      | forestry project contribution                                                          | string       | App Page Visit |
            | application type        | operativa                                                                              | string       | App Page Visit |
            | application name        | aportar a proyecto forestal                                                            | string       | App Page Visit |
            | application step        | 1 seleccionar proyecto                                                                 | string       | App Page Visit |
            | fulfillment model       | online                                                                                 | string       | App Page Visit |
            | internal campaign       |                                                                                        | empty array  | App Page Visit |
            | optimization attributes |                                                                                        | empty array  | App Page Visit |
            | products attributes     |                                                                                        | empty array  | App Page Visit |

    @ANA_EVENT_SCFO003
    @analytics @MX
    @web @android @ios
    @backend(test)
    @vbank @web-done
    Scenario: The user enters the project list section and selects a project
        Given a user with the following criteria
            | criteria                                    |
            | sustainability carbon footprint offset user |
        And the user accesses to sustainability section
        And the user accesses to sustainability carbon footprint offset section
        And the user accesses to the contribution project
        And the analytics interceptor service is initiated
        When the user selects a project in step one
        Then the analytics events contains the following variables:
            | item                    | value                                                                                  | type         | event       |
            | analytics               | analytics/glomo_base                                                                   | json schema  | App Started |
            | page name               | app:privada:personas:sostenibilidad:aportar a proyecto forestal:1 seleccionar proyecto | string       | App Started |
            | level 1                 | sostenibilidad                                                                         | string       | App Started |
            | level 2                 | aportar a proyecto forestal                                                            | string       | App Started |
            | level 3                 | 1 seleccionar proyecto                                                                 | string       | App Started |
            | language                | ES                                                                                     | string       | App Started |
            | page area               | privada                                                                                | string       | App Started |
            | page intent             | transaccion                                                                            | string       | App Started |
            | channel                 | online                                                                                 | string       | App Started |
            | page instance ID        | de                                                                                     | string       | App Started |
            | version DL              | 20250414_5.0                                                                           | string       | App Started |
            | page info version       | appVersion                                                                             | regexp named | App Started |
            | page segment            | personas                                                                               | string       | App Started |
            | sysEnv                  | app                                                                                    | string       | App Started |
            | business unit           | BBVA Mexico                                                                            | string       | App Started |
            | site app name           | App BBVA Mexico                                                                        | string       | App Started |
            | project name            | Glomo                                                                                  | string       | App Started |
            | user segment global     | 003001                                                                                 | string       | App Started |
            | device mobile           | si                                                                                     | string       | App Started |
            | user userState          | logado                                                                                 | string       | App Started |
            | profile ID              | profileID                                                                              | regexp named | App Started |
            | user gender             | gender                                                                                 | regexp named | App Started |
            | user age                | age                                                                                    | regexp named | App Started |
            | global application      | forestry project contribution                                                          | string       | App Started |
            | application type        | operativa                                                                              | string       | App Started |
            | application name        | aportar a proyecto forestal                                                            | string       | App Started |
            | application step        | seleccionar proyecto                                                                   | string       | App Started |
            | fulfillment model       | online                                                                                 | string       | App Started |
            | internal campaign       |                                                                                        | empty array  | App Started |
            | optimization attributes |                                                                                        | empty array  | App Started |
            | products attributes     |                                                                                        | empty array  | App Started |

    @ANA_EVENT_SCFO004
    @analytics @MX
    @web @android @ios
    @backend(test)
    @vbank @web-done
    Scenario: The user enters the project list section and clicks on - see more
        Given a user with the following criteria
            | criteria                                    |
            | sustainability carbon footprint offset user |
        And the user accesses to sustainability section
        And the user accesses to sustainability carbon footprint offset section
        And the analytics interceptor service is initiated
        When the user accesses to forestry project detail in step one
        Then the analytics events contains the following variables:
            | item                    | value                                                                                  | type         | event       |
            | analytics               | analytics/glomo_base                                                                   | json schema  | App Started |
            | page name               | app:privada:personas:sostenibilidad:aportar a proyecto forestal:1 seleccionar proyecto | string       | App Started |
            | level 1                 | sostenibilidad                                                                         | string       | App Started |
            | level 2                 | aportar a proyecto forestal                                                            | string       | App Started |
            | level 3                 | 1 seleccionar proyecto                                                                 | string       | App Started |
            | language                | ES                                                                                     | string       | App Started |
            | page area               | privada                                                                                | string       | App Started |
            | page intent             | transaccion                                                                            | string       | App Started |
            | channel                 | online                                                                                 | string       | App Started |
            | page instance ID        | de                                                                                     | string       | App Started |
            | version DL              | 20250414_5.0                                                                           | string       | App Started |
            | page info version       | appVersion                                                                             | regexp named | App Started |
            | page segment            | personas                                                                               | string       | App Started |
            | sysEnv                  | app                                                                                    | string       | App Started |
            | business unit           | BBVA Mexico                                                                            | string       | App Started |
            | site app name           | App BBVA Mexico                                                                        | string       | App Started |
            | project name            | Glomo                                                                                  | string       | App Started |
            | user segment global     | 003001                                                                                 | string       | App Started |
            | device mobile           | si                                                                                     | string       | App Started |
            | user userState          | logado                                                                                 | string       | App Started |
            | profile ID              | profileID                                                                              | regexp named | App Started |
            | user gender             | gender                                                                                 | regexp named | App Started |
            | user age                | age                                                                                    | regexp named | App Started |
            | global application      | forestry project contribution                                                          | string       | App Started |
            | application type        | operativa                                                                              | string       | App Started |
            | application name        | aportar a proyecto forestal                                                            | string       | App Started |
            | application step        | ver mas                                                                                | string       | App Started |
            | fulfillment model       | online                                                                                 | string       | App Started |
            | internal campaign       |                                                                                        | empty array  | App Started |
            | optimization attributes |                                                                                        | empty array  | App Started |
            | products attributes     |                                                                                        | empty array  | App Started |

    @ANA_EVENT_SCFO005
    @analytics @MX
    @web @android @ios
    @backend(test)
    @vbank @web-done
    Scenario: The user enters the contribution section (step 2)
        Given a user with the following criteria
            | criteria                                    |
            | sustainability carbon footprint offset user |
        And the user accesses to sustainability section
        And the user accesses to sustainability carbon footprint offset section
        And the analytics interceptor service is initiated
        When the user accesses to the contribution of second step
        Then the analytics events contains the following variables:
            | item                    | value                                                                        | type         | event      |
            | analytics               | analytics/glomo_base                                                         | json schema  | App Step 2 |
            | page name               | app:privada:personas:sostenibilidad:aportar a proyecto forestal:2 aportacion | string       | App Step 2 |
            | level 1                 | sostenibilidad                                                               | string       | App Step 2 |
            | level 2                 | aportar a proyecto forestal                                                  | string       | App Step 2 |
            | level 3                 | 2 aportacion                                                                 | string       | App Step 2 |
            | language                | ES                                                                           | string       | App Step 2 |
            | page area               | privada                                                                      | string       | App Step 2 |
            | page intent             | transaccion                                                                  | string       | App Step 2 |
            | channel                 | online                                                                       | string       | App Step 2 |
            | page instance ID        | de                                                                           | string       | App Step 2 |
            | version DL              | 20250414_5.0                                                                 | string       | App Step 2 |
            | page info version       | appVersion                                                                   | regexp named | App Step 2 |
            | page segment            | personas                                                                     | string       | App Step 2 |
            | sysEnv                  | app                                                                          | string       | App Step 2 |
            | business unit           | BBVA Mexico                                                                  | string       | App Step 2 |
            | site app name           | App BBVA Mexico                                                              | string       | App Step 2 |
            | project name            | Glomo                                                                        | string       | App Step 2 |
            | user segment global     | 003001                                                                       | string       | App Step 2 |
            | device mobile           | si                                                                           | string       | App Step 2 |
            | user userState          | logado                                                                       | string       | App Step 2 |
            | profile ID              | profileID                                                                    | regexp named | App Step 2 |
            | user gender             | gender                                                                       | regexp named | App Step 2 |
            | user age                | age                                                                          | regexp named | App Step 2 |
            | global application      | forestry project contribution                                                | string       | App Step 2 |
            | application type        | operativa                                                                    | string       | App Step 2 |
            | application name        | aportar a proyecto forestal                                                  | string       | App Step 2 |
            | application step        | 2 aportacion                                                                 | string       | App Step 2 |
            | fulfillment model       | online                                                                       | string       | App Step 2 |
            | internal campaign       |                                                                              | empty array  | App Step 2 |
            | optimization attributes |                                                                              | empty array  | App Step 2 |
            | products attributes     |                                                                              | empty array  | App Step 2 |

    @ANA_EVENT_SCFO006
    @analytics @MX
    @web @android @ios
    @backend(test)
    @vbank @web-done
    Scenario: The user enters the payment method section (step 3)
        Given a user with the following criteria
            | criteria                                    |
            | sustainability carbon footprint offset user |
        And the user accesses to sustainability section
        And the user accesses to sustainability carbon footprint offset section
        And the analytics interceptor service is initiated
        When the user accesses to the payment method of third step
        Then the analytics events contains the following variables:
            | item                     | value                                                                           | type         | event      |
            | analytics                | analytics/glomo_base                                                            | json schema  | App Step 3 |
            | page name                | app:privada:personas:sostenibilidad:aportar a proyecto forestal:3 forma de pago | string       | App Step 3 |
            | level 1                  | sostenibilidad                                                                  | string       | App Step 3 |
            | level 2                  | aportar a proyecto forestal                                                     | string       | App Step 3 |
            | level 3                  | 3 forma de pago                                                                 | string       | App Step 3 |
            | language                 | ES                                                                              | string       | App Step 3 |
            | page area                | privada                                                                         | string       | App Step 3 |
            | page intent              | transaccion                                                                     | string       | App Step 3 |
            | channel                  | online                                                                          | string       | App Step 3 |
            | page instance ID         | de                                                                              | string       | App Step 3 |
            | version DL               | 20250414_5.0                                                                    | string       | App Step 3 |
            | page info version        | appVersion                                                                      | regexp named | App Step 3 |
            | page segment             | personas                                                                        | string       | App Step 3 |
            | sysEnv                   | app                                                                             | string       | App Step 3 |
            | business unit            | BBVA Mexico                                                                     | string       | App Step 3 |
            | site app name            | App BBVA Mexico                                                                 | string       | App Step 3 |
            | project name             | Glomo                                                                           | string       | App Step 3 |
            | user segment global      | 003001                                                                          | string       | App Step 3 |
            | device mobile            | si                                                                              | string       | App Step 3 |
            | user userState           | logado                                                                          | string       | App Step 3 |
            | profile ID               | profileID                                                                       | regexp named | App Step 3 |
            | user gender              | gender                                                                          | regexp named | App Step 3 |
            | user age                 | age                                                                             | regexp named | App Step 3 |
            | global application       | forestry project contribution                                                   | string       | App Step 3 |
            | application type         | operativa                                                                       | string       | App Step 3 |
            | application name         | aportar a proyecto forestal                                                     | string       | App Step 3 |
            | application step         | 3 forma de pago                                                                 | string       | App Step 3 |
            | fulfillment model        | online                                                                          | string       | App Step 3 |
            | product primary category | tarjetas                                                                        | string       | App Step 3 |
            | internal campaign        |                                                                                 | empty array  | App Step 3 |
            | optimization attributes  |                                                                                 | empty array  | App Step 3 |

    @ANA_EVENT_SCFO007
    @analytics @MX
    @web @android @ios
    @backend(test)
    @vbank @web-done
    Scenario: The user enters the confirmation section (step 4)
        Given a user with the following criteria
            | criteria                                    |
            | sustainability carbon footprint offset user |
        And the user accesses to sustainability section
        And the user accesses to sustainability carbon footprint offset section
        And the user accesses the payment method and selects to pay with BBVA points
        And the analytics interceptor service is initiated
        When the user accesses to the summary of the entire operation
        Then the analytics events contains the following variables:
            | item                     | value                                                                          | type         | event      |
            | analytics                | analytics/glomo_base                                                           | json schema  | App Step 4 |
            | page name                | app:privada:personas:sostenibilidad:aportar a proyecto forestal:4 confirmacion | string       | App Step 4 |
            | level 1                  | sostenibilidad                                                                 | string       | App Step 4 |
            | level 2                  | aportar a proyecto forestal                                                    | string       | App Step 4 |
            | level 3                  | 4 confirmacion                                                                 | string       | App Step 4 |
            | language                 | ES                                                                             | string       | App Step 4 |
            | page area                | privada                                                                        | string       | App Step 4 |
            | page intent              | transaccion                                                                    | string       | App Step 4 |
            | channel                  | online                                                                         | string       | App Step 4 |
            | page instance ID         | de                                                                             | string       | App Step 4 |
            | version DL               | 20250414_5.0                                                                   | string       | App Step 4 |
            | page info version        | appVersion                                                                     | regexp named | App Step 4 |
            | page segment             | personas                                                                       | string       | App Step 4 |
            | sysEnv                   | app                                                                            | string       | App Step 4 |
            | business unit            | BBVA Mexico                                                                    | string       | App Step 4 |
            | site app name            | App BBVA Mexico                                                                | string       | App Step 4 |
            | project name             | Glomo                                                                          | string       | App Step 4 |
            | user segment global      | 003001                                                                         | string       | App Step 4 |
            | device mobile            | si                                                                             | string       | App Step 4 |
            | user userState           | logado                                                                         | string       | App Step 4 |
            | profile ID               | profileID                                                                      | regexp named | App Step 4 |
            | user gender              | gender                                                                         | regexp named | App Step 4 |
            | user age                 | age                                                                            | regexp named | App Step 4 |
            | global application       | forestry project contribution                                                  | string       | App Step 4 |
            | application type         | operativa                                                                      | string       | App Step 4 |
            | application name         | aportar a proyecto forestal                                                    | string       | App Step 4 |
            | application step         | 4 confirmacion                                                                 | string       | App Step 4 |
            | fulfillment model        | online                                                                         | string       | App Step 4 |
            | application typology     | 3500                                                                             | string       | App Step 4 |
            | product primary category | tarjetas                                                                       | string       | App Step 4 |
            | product subtype          | tarjetas credito                                                               | string       | App Step 4 |
            | product name             |                                                                                | string       | App Step 4 |
            | product amount           | 376                                                                              | string       | App Step 4 |
            | product payment amount   | 0                                                                              | string       | App Step 4 |
            | product currency         | MXN                                                                            | string       | App Step 4 |
            | product payment type     | puntos bbva                                                                    | string       | App Step 4 |
            | product service charge   | 0                                                                              | string       | App Step 4 |
            | internal campaign        |                                                                                | empty array  | App Step 4 |
            | optimization attributes  |                                                                                | empty array  | App Step 4 |

    @ANA_EVENT_SCFO008
    @analytics @MX
    @web @android @ios
    @backend(test)
    @!vbank
    @manual @JIRA.GLOMOGL-31643
    Scenario: OTP golden screen displayed
        Given a user with the following criteria
            | criteria                             |
            | sustainability with carbon footprint |
        When the user accesses to sustainability section
        Then the analytics events contains the following variables:
            | item                    | value                                                                 | type             | event     |
            | analytics               | analytics/glomo_base                                                  | json schema      | Page View |
            | page name               | app:privada:personas:sostenibilidad:aportar a proyecto forestal:5 otp | string           | Page View |
            | level 1                 | sostenibilidad                                                        | string           | Page View |
            | level 2                 | aportar a proyecto forestal                                           | string           | Page View |
            | level 3                 | 5 otp                                                                 | string           | Page View |
            | language                | ES                                                                    | string           | Page View |
            | page area               | privada                                                               | string           | Page View |
            | page intent             | transaccion                                                           | string           | Page View |
            | channel                 | online                                                                | string           | Page View |
            | page instance ID        | de                                                                    | string           | Page View |
            | version DL              | 20250414_5.0                                                          | string           | Page View |
            | page info version       | appVersion                                                            | regexp named     | Page View |
            | page segment            | personas                                                              | string           | Page View |
            | sysEnv                  | app                                                                   | string           | Page View |
            | business unit           | BBVA Mexico                                                           | string           | Page View |
            | site app name           | App BBVA Mexico                                                       | string           | Page View |
            | project name            | Glomo                                                                 | string           | Page View |
            | user segment global     | 003001                                                                | string           | Page View |
            | device mobile           | si                                                                    | string           | Page View |
            | user userState          | logado                                                                | string           | Page View |
            | profile ID              | profileID                                                             | regexp named     | Page View |
            | user gender             | gender                                                                | regexp named     | Page View |
            | user age                | age                                                                   | regexp named     | Page View |
            | custom fields           | firma:token                                                           | string           | Page View |
            | internal campaign       |                                                                       | empty array      | Page View |
            | optimization attributes |                                                                       | empty array      | Page View |
            | application             |                                                                       | empty str object | Page View |
            | products attributes     |                                                                       | empty array      | Page View |

    @ANA_EVENT_SCFO009
    @analytics @MX
    @web @android @ios
    @backend(test)
    @!vbank
    @manual @JIRA.GLOMOGL-31643
    Scenario: Proof of successful contribution is shown
        Given a user with the following criteria
            | criteria                             |
            | sustainability with carbon footprint |
        When the user accesses to sustainability section
        Then the analytics events contains the following variables:
            | item                         | value                                                                          | type         | event         |
            | analytics                    | analytics/glomo_base                                                           | json schema  | App Completed |
            | page name                    | app:privada:personas:sostenibilidad:aportar a proyecto forestal:pagina exitosa | string       | App Completed |
            | level 1                      | sostenibilidad                                                                 | string       | App Completed |
            | level 2                      | aportar a proyecto forestal                                                    | string       | App Completed |
            | level 3                      | pagina exitosa                                                                 | string       | App Completed |
            | language                     | ES                                                                             | string       | App Completed |
            | page area                    | privada                                                                        | string       | App Completed |
            | page intent                  | transaccion                                                                    | string       | App Completed |
            | channel                      | online                                                                         | string       | App Completed |
            | page instance ID             | de                                                                             | string       | App Completed |
            | version DL                   | 20250414_5.0                                                                   | string       | App Completed |
            | page info version            | appVersion                                                                     | regexp named | App Completed |
            | page segment                 | personas                                                                       | string       | App Completed |
            | sysEnv                       | app                                                                            | string       | App Completed |
            | business unit                | BBVA Mexico                                                                    | string       | App Completed |
            | site app name                | App BBVA Mexico                                                                | string       | App Completed |
            | project name                 | Glomo                                                                          | string       | App Completed |
            | user segment global          | 003001                                                                         | string       | App Completed |
            | device mobile                | si                                                                             | string       | App Completed |
            | user userState               | logado                                                                         | string       | App Completed |
            | profile ID                   | profileID                                                                      | regexp named | App Completed |
            | user gender                  | gender                                                                         | regexp named | App Completed |
            | user age                     | age                                                                            | regexp named | App Completed |
            | global application           | forestry project contribution                                                  | string       | App Completed |
            | application type             | operativa                                                                      | string       | App Completed |
            | application name             | aportar a proyecto forestal                                                    | string       | App Completed |
            | application step             | pagina exitosa                                                                 | string       | App Completed |
            | fulfillment model            | online                                                                         | string       | App Completed |
            | application typology         | 162                                                                            | string       | App Completed |
            | custom fields                | firma:token                                                                    | string       | App Completed |
            | application operation number | 1234566                                                                        | string       | App Completed |
            | application state            | finalizado                                                                     | string       | App Completed |
            | product primary category     | tarjetas                                                                       | string       | App Completed |
            | product subtype              | tarjetas credito                                                               | string       | App Completed |
            | product name                 | digital bbva                                                                   | string       | App Completed |
            | product amount               | 350                                                                            | string       | App Completed |
            | product payment amount       | 188                                                                            | string       | App Completed |
            | product currency             | MXN                                                                            | string       | App Completed |
            | product payment type         | dinero y puntos bbva                                                           | string       | App Completed |
            | product service charge       | 0                                                                              | string       | App Completed |
            | internal campaign            |                                                                                | empty array  | App Completed |
            | optimization attributes      |                                                                                | empty array  | App Completed |

    @ANA_EVENT_SCFO010
    @analytics @MX
    @web @android @ios
    @backend(test)
    @vbank @web-done
    Scenario: The user enters the flow of contributions to forestry projects
        Given a user with the following criteria
            | criteria                                    |
            | sustainability carbon footprint offset user |
        And the user accesses to sustainability section
        And the analytics interceptor service is initiated
        When the user accesses to sustainability carbon footprint offset section
        Then the analytics events contains the following variables:
            | item                    | value                                                    | type             | event     |
            | analytics               | analytics/glomo_base                                     | json schema      | Page View |
            | page name               | app:privada:personas:sostenibilidad:proyectos forestales | string           | Page View |
            | level 1                 | sostenibilidad                                           | string           | Page View |
            | level 2                 | proyectos forestales                                     | string           | Page View |
            | language                | ES                                                       | string           | Page View |
            | page area               | privada                                                  | string           | Page View |
            | page intent             | informacion                                              | string           | Page View |
            | channel                 | online                                                   | string           | Page View |
            | page instance ID        | de                                                       | string           | Page View |
            | version DL              | 20250414_5.0                                             | string           | Page View |
            | page info version       | appVersion                                               | regexp named     | Page View |
            | page segment            | personas                                                 | string           | Page View |
            | sysEnv                  | app                                                      | string           | Page View |
            | business unit           | BBVA Mexico                                              | string           | Page View |
            | site app name           | App BBVA Mexico                                          | string           | Page View |
            | project name            | Glomo                                                    | string           | Page View |
            | user segment global     | 003001                                                   | string           | Page View |
            | device mobile           | si                                                       | string           | Page View |
            | user userState          | logado                                                   | string           | Page View |
            | profile ID              | profileID                                                | regexp named     | Page View |
            | user gender             | gender                                                   | regexp named     | Page View |
            | user age                | age                                                      | regexp named     | Page View |
            | internal campaign       |                                                          | empty array      | Page View |
            | optimization attributes |                                                          | empty array      | Page View |
            | application             |                                                          | empty str object | Page View |
            | products attributes     |                                                          | empty array      | Page View |

    @ANA_EVENT_SCFO011
    @analytics @MX
    @web @android @ios
    @backend(test)
    @vbank @web-done
    Scenario: The user presses see more in the project carousel
        Given a user with the following criteria
            | criteria                                    |
            | sustainability carbon footprint offset user |
        And the user accesses to sustainability section
        And the user accesses to sustainability carbon footprint offset section
        And the analytics interceptor service is initiated
        When the user accesses to projects list in the project carousel
        Then the analytics events contains the following variables:
            | item                    | value                                                              | type             | event     |
            | analytics               | analytics/glomo_base                                               | json schema      | Page View |
            | page name               | app:privada:personas:sostenibilidad:proyectos forestales:proyectos | string           | Page View |
            | level 1                 | sostenibilidad                                                     | string           | Page View |
            | level 2                 | proyectos forestales                                               | string           | Page View |
            | level 3                 | proyectos                                                          | string           | Page View |
            | language                | ES                                                                 | string           | Page View |
            | page area               | privada                                                            | string           | Page View |
            | page intent             | informacion                                                        | string           | Page View |
            | channel                 | online                                                             | string           | Page View |
            | page instance ID        | de                                                                 | string           | Page View |
            | version DL              | 20250414_5.0                                                       | string           | Page View |
            | page info version       | appVersion                                                         | regexp named     | Page View |
            | page segment            | personas                                                           | string           | Page View |
            | sysEnv                  | app                                                                | string           | Page View |
            | business unit           | BBVA Mexico                                                        | string           | Page View |
            | site app name           | App BBVA Mexico                                                    | string           | Page View |
            | project name            | Glomo                                                              | string           | Page View |
            | user segment global     | 003001                                                             | string           | Page View |
            | device mobile           | si                                                                 | string           | Page View |
            | user userState          | logado                                                             | string           | Page View |
            | profile ID              | profileID                                                          | regexp named     | Page View |
            | user gender             | gender                                                             | regexp named     | Page View |
            | user age                | age                                                                | regexp named     | Page View |
            | internal campaign       |                                                                    | empty array      | Page View |
            | optimization attributes |                                                                    | empty array      | Page View |
            | application             |                                                                    | empty str object | Page View |
            | products attributes     |                                                                    | empty array      | Page View |

    @ANA_EVENT_SCFO012
    @analytics @MX
    @web @android @ios
    @backend(test)
    @vbank @web-done
    Scenario: The user selects a project
        Given a user with the following criteria
            | criteria                                    |
            | sustainability carbon footprint offset user |
        And the user accesses to sustainability section
        And the user accesses to sustainability carbon footprint offset section
        And the analytics interceptor service is initiated
        When the user accesses to project detail from carousel
        Then the analytics events contains the following variables:
            | item                    | value                                                                         | type             | event     |
            | analytics               | analytics/glomo_base                                                          | json schema      | Page View |
            | page name               | app:privada:personas:sostenibilidad:proyectos forestales:detalle del proyecto | string           | Page View |
            | level 1                 | sostenibilidad                                                                | string           | Page View |
            | level 2                 | proyectos forestales                                                          | string           | Page View |
            | level 3                 | detalle del proyecto                                                          | string           | Page View |
            | language                | ES                                                                            | string           | Page View |
            | page area               | privada                                                                       | string           | Page View |
            | page intent             | informacion                                                                   | string           | Page View |
            | channel                 | online                                                                        | string           | Page View |
            | page instance ID        | de                                                                            | string           | Page View |
            | version DL              | 20250414_5.0                                                                  | string           | Page View |
            | page info version       | appVersion                                                                    | regexp named     | Page View |
            | page segment            | personas                                                                      | string           | Page View |
            | sysEnv                  | app                                                                           | string           | Page View |
            | business unit           | BBVA Mexico                                                                   | string           | Page View |
            | site app name           | App BBVA Mexico                                                               | string           | Page View |
            | project name            | Glomo                                                                         | string           | Page View |
            | user segment global     | 003001                                                                        | string           | Page View |
            | device mobile           | si                                                                            | string           | Page View |
            | user userState          | logado                                                                        | string           | Page View |
            | profile ID              | profileID                                                                     | regexp named     | Page View |
            | user gender             | gender                                                                        | regexp named     | Page View |
            | user age                | age                                                                           | regexp named     | Page View |
            | internal campaign       |                                                                               | empty array      | Page View |
            | optimization attributes |                                                                               | empty array      | Page View |
            | application             |                                                                               | empty str object | Page View |
            | products attributes     |                                                                               | empty array      | Page View |

    @ANA_EVENT_SCFO013
    @analytics @MX
    @web @android @ios
    @backend(test)
    @vbank @web-done
    Scenario: The user and selects TDC with points
        Given a user with the following criteria
            | criteria                                    |
            | sustainability carbon footprint offset user |
        And the user accesses to sustainability section
        And the user accesses to sustainability carbon footprint offset section
        And the analytics interceptor service is initiated
        When the user accesses the payment method and selects to pay with BBVA points
        Then the analytics events contains the following variables:
            | item                    | value                                                                       | type             | event     |
            | analytics               | analytics/glomo_base                                                        | json schema      | Page View |
            | page name               | app:privada:personas:sostenibilidad:aportar a proyecto forestal:puntos bbva | string           | Page View |
            | level 1                 | sostenibilidad                                                              | string           | Page View |
            | level 2                 | aportar a proyecto forestal                                                 | string           | Page View |
            | level 3                 | puntos bbva                                                                 | string           | Page View |
            | language                | ES                                                                          | string           | Page View |
            | page area               | privada                                                                     | string           | Page View |
            | page intent             | informacion                                                                 | string           | Page View |
            | channel                 | online                                                                      | string           | Page View |
            | page instance ID        | de                                                                          | string           | Page View |
            | version DL              | 20250414_5.0                                                                | string           | Page View |
            | page info version       | appVersion                                                                  | regexp named     | Page View |
            | page segment            | personas                                                                    | string           | Page View |
            | sysEnv                  | app                                                                         | string           | Page View |
            | business unit           | BBVA Mexico                                                                 | string           | Page View |
            | site app name           | App BBVA Mexico                                                             | string           | Page View |
            | project name            | Glomo                                                                       | string           | Page View |
            | user segment global     | 003001                                                                      | string           | Page View |
            | device mobile           | si                                                                          | string           | Page View |
            | user userState          | logado                                                                      | string           | Page View |
            | profile ID              | profileID                                                                   | regexp named     | Page View |
            | user gender             | gender                                                                      | regexp named     | Page View |
            | user age                | age                                                                         | regexp named     | Page View |
            | internal campaign       |                                                                             | empty array      | Page View |
            | optimization attributes |                                                                             | empty array      | Page View |
            | application             |                                                                             | empty str object | Page View |
            | products attributes     |                                                                             | empty array      | Page View |

    @ANA_EVENT_SCFO014
    @analytics @MX
    @web @android @ios
    @backend(test)
    @vbank @web-done
    Scenario: The error you require a digital card is displayed.
        Given a user with the following criteria
            | criteria                                                          |
            | sustainability carbon footprint offset user without digital cards |
        And the user accesses to sustainability section
        And the user accesses to sustainability carbon footprint offset section
        And the analytics interceptor service is initiated
        When the user accesses to the contribution project
        Then the analytics events contains the following variables:
            | item                    | value                                                                                                | type             | event     |
            | analytics               | analytics/glomo_base                                                                                 | json schema      | Page View |
            | page name               | app:privada:personas:sostenibilidad:aportar a proyecto forestal:requieres una tarjeta digital activa | string           | Page View |
            | level 1                 | sostenibilidad                                                                                       | string           | Page View |
            | level 2                 | aportar a proyecto forestal                                                                          | string           | Page View |
            | level 3                 | requieres una tarjeta digital activa                                                                 | string           | Page View |
            | language                | ES                                                                                                   | string           | Page View |
            | page area               | privada                                                                                              | string           | Page View |
            | page intent             | informacion                                                                                          | string           | Page View |
            | channel                 | online                                                                                               | string           | Page View |
            | page instance ID        | de                                                                                                   | string           | Page View |
            | version DL              | 20250414_5.0                                                                                         | string           | Page View |
            | page info version       | appVersion                                                                                           | regexp named     | Page View |
            | page segment            | personas                                                                                             | string           | Page View |
            | sysEnv                  | app                                                                                                  | string           | Page View |
            | business unit           | BBVA Mexico                                                                                          | string           | Page View |
            | site app name           | App BBVA Mexico                                                                                      | string           | Page View |
            | project name            | Glomo                                                                                                | string           | Page View |
            | user segment global     | 003001                                                                                               | string           | Page View |
            | device mobile           | si                                                                                                   | string           | Page View |
            | user userState          | logado                                                                                               | string           | Page View |
            | profile ID              | profileID                                                                                            | regexp named     | Page View |
            | user gender             | gender                                                                                               | regexp named     | Page View |
            | user age                | age                                                                                                  | regexp named     | Page View |
            | internal campaign       |                                                                                                      | empty array      | Page View |
            | optimization attributes |                                                                                                      | empty array      | Page View |
            | application             |                                                                                                      | empty str object | Page View |
            | products attributes     |                                                                                                      | empty array      | Page View |

    @ANA_EVENT_SCFO015
    @analytics @MX
    @web @android @ios
    @backend(test)
    @vbank @web-done
    Scenario: An error is displayed when trying to obtain the list of projects and clicking on retry
        Given a user with the following criteria
            | criteria                                    |
            | sustainability carbon footprint offset user |
        And the user accesses to sustainability section
        And the analytics interceptor service is initiated
        And the user accesses to sustainability carbon footprint offset section
        When the user retrys operation with the "link"
        Then the analytics events contains the following variables:
            | item                    | value                                                    | type             | event      |
            | analytics               | analytics/glomo_base                                     | json schema      | Site Error |
            | page name               | app:privada:personas:sostenibilidad:proyectos forestales | string           | Site Error |
            | level 1                 | sostenibilidad                                           | string           | Site Error |
            | level 2                 | proyectos forestales                                     | string           | Site Error |
            | language                | ES                                                       | string           | Site Error |
            | page area               | privada                                                  | string           | Site Error |
            | page intent             | informacion                                              | string           | Site Error |
            | channel                 | online                                                   | string           | Site Error |
            | page instance ID        | de                                                       | string           | Site Error |
            | version DL              | 20250414_5.0                                             | string           | Site Error |
            | page info version       | appVersion                                               | regexp named     | Site Error |
            | page segment            | personas                                                 | string           | Site Error |
            | sysEnv                  | app                                                      | string           | Site Error |
            | business unit           | BBVA Mexico                                              | string           | Site Error |
            | site app name           | App BBVA Mexico                                          | string           | Site Error |
            | project name            | Glomo                                                    | string           | Site Error |
            | user segment global     | 003001                                                   | string           | Site Error |
            | device mobile           | si                                                       | string           | Site Error |
            | user userState          | logado                                                   | string           | Site Error |
            | profile ID              | profileID                                                | regexp named     | Site Error |
            | user gender             | gender                                                   | regexp named     | Site Error |
            | user age                | age                                                      | regexp named     | Site Error |
            | site error              | ha ocurrido un error                                     | string           | Site Error |
            | internal campaign       |                                                          | empty array      | Site Error |
            | optimization attributes |                                                          | empty array      | Site Error |
            | application             |                                                          | empty str object | Site Error |
            | products attributes     |                                                          | empty array      | Site Error |

    @ANA_EVENT_SCFO016
    @analytics @MX
    @web @android @ios
    @backend(test)
    @!vbank
    @manual @JIRA.GLOMOGL-31643
    Scenario: An error is displayed in the service that processes the payment
        Given a user with the following criteria
            | criteria                                    |
            | sustainability carbon footprint offset user |
        And the user accesses to sustainability section
        And the user accesses to sustainability carbon footprint offset section
        When the user accesses to the contribution project
        Then the analytics events contains the following variables:
            | item                    | value                                                                                        | type             | event     |
            | analytics               | analytics/glomo_base                                                                         | json schema      | Page View |
            | page name               | app:privada:personas:sostenibilidad:aportar a proyecto forestal:no se puede realizar el pago | string           | Page View |
            | level 1                 | sostenibilidad                                                                               | string           | Page View |
            | level 2                 | aportar a proyecto forestal                                                                  | string           | Page View |
            | level 3                 | no se puede realizar el pago                                                                 | string           | Page View |
            | error page              | no se puede realizar el pago                                                                 | string           | Page View |
            | language                | ES                                                                                           | string           | Page View |
            | page area               | privada                                                                                      | string           | Page View |
            | page intent             | informacion                                                                                  | string           | Page View |
            | channel                 | online                                                                                       | string           | Page View |
            | page instance ID        | de                                                                                           | string           | Page View |
            | version DL              | 20250414_5.0                                                                                 | string           | Page View |
            | page info version       | appVersion                                                                                   | regexp named     | Page View |
            | page segment            | personas                                                                                     | string           | Page View |
            | sysEnv                  | app                                                                                          | string           | Page View |
            | business unit           | BBVA Mexico                                                                                  | string           | Page View |
            | site app name           | App BBVA Mexico                                                                              | string           | Page View |
            | project name            | Glomo                                                                                        | string           | Page View |
            | user segment global     | 003001                                                                                       | string           | Page View |
            | device mobile           | si                                                                                           | string           | Page View |
            | user userState          | logado                                                                                       | string           | Page View |
            | profile ID              | profileID                                                                                    | regexp named     | Page View |
            | user gender             | gender                                                                                       | regexp named     | Page View |
            | user age                | age                                                                                          | regexp named     | Page View |
            | internal campaign       |                                                                                              | empty array      | Page View |
            | optimization attributes |                                                                                              | empty array      | Page View |
            | application             |                                                                                              | empty str object | Page View |
            | products attributes     |                                                                                              | empty array      | Page View |

    @ANA_EVENT_SCFO017
    @analytics @MX
    @web @android @ios
    @backend(test)
    @vbank @web-done @vbank-modified
    #Edited vbank record to simulate all cards with zero amount in financialOverview, listCards and getRewards
    Scenario: In the payment method section all cards are displayed without sufficient balance
        Given a user with the following criteria
            | criteria                                    |
            | sustainability carbon footprint offset user |
        And the user accesses to sustainability section
        And the user accesses to sustainability carbon footprint offset section
        And the user accesses to the contribution of second step
        And the analytics interceptor service is initiated
        When the user accesses to the payment method
        Then the analytics events contains the following variables:
            | item                    | value                                                                           | type             | event      |
            | analytics               | analytics/glomo_base                                                            | json schema      | Site Error |
            | page name               | app:privada:personas:sostenibilidad:aportar a proyecto forestal:3 forma de pago | string           | Site Error |
            | level 1                 | sostenibilidad                                                                  | string           | Site Error |
            | level 2                 | aportar a proyecto forestal                                                     | string           | Site Error |
            | level 3                 | 3 forma de pago                                                                 | string           | Site Error |
            | language                | ES                                                                              | string           | Site Error |
            | page area               | privada                                                                         | string           | Site Error |
            | page intent             | transaccion                                                                     | string           | Site Error |
            | channel                 | online                                                                          | string           | Site Error |
            | page instance ID        | de                                                                              | string           | Site Error |
            | version DL              | 20250414_5.0                                                                    | string           | Site Error |
            | page info version       | appVersion                                                                      | regexp named     | Site Error |
            | page segment            | personas                                                                        | string           | Site Error |
            | sysEnv                  | app                                                                             | string           | Site Error |
            | business unit           | BBVA Mexico                                                                     | string           | Site Error |
            | site app name           | App BBVA Mexico                                                                 | string           | Site Error |
            | project name            | Glomo                                                                           | string           | Site Error |
            | user segment global     | 003001                                                                          | string           | Site Error |
            | device mobile           | si                                                                              | string           | Site Error |
            | user userState          | logado                                                                          | string           | Site Error |
            | profile ID              | profileID                                                                       | regexp named     | Site Error |
            | user gender             | gender                                                                          | regexp named     | Site Error |
            | user age                | age                                                                             | regexp named     | Site Error |
            | site error              | sin saldo suficiente en todas las tarjetas                                      | string           | Site Error |
            | internal campaign       |                                                                                 | empty array      | Site Error |
            | optimization attributes |                                                                                 | empty array      | Site Error |
            | application             |                                                                                 | empty str object | Site Error |
            | products attributes     |                                                                                 | empty array      | Site Error |

    @ANA_EVENT_SCFO018
    @analytics @MX
    @web @android @ios
    @backend(test)
    @vbank @web-done
    Scenario: Validate thank you for contributing screen
        Given a user with the following criteria
            | criteria                                    |
            | sustainability carbon footprint offset user |
            | with contributions                          |
        And the user accesses to sustainability section
        And the analytics interceptor service is initiated
        When the user accesses to sustainability carbon footprint offset section
        Then the analytics events contains the following variables:
            | item                    | value                                                                           | type             | event     |
            | analytics               | analytics/glomo_base                                                            | json schema      | Page View |
            | page name               | app:privada:personas:sostenibilidad:proyectos forestales:gracias por contribuir | string           | Page View |
            | level 1                 | sostenibilidad                                                                  | string           | Page View |
            | level 2                 | proyectos forestales                                                            | string           | Page View |
            | level 3                 | gracias por contribuir                                                          | string           | Page View |
            | language                | ES                                                                              | string           | Page View |
            | page area               | privada                                                                         | string           | Page View |
            | page intent             | informacion                                                                     | string           | Page View |
            | channel                 | online                                                                          | string           | Page View |
            | page instance ID        | de                                                                              | string           | Page View |
            | version DL              | 20250414_5.0                                                                    | string           | Page View |
            | page info version       | appVersion                                                                      | regexp named     | Page View |
            | page segment            | personas                                                                        | string           | Page View |
            | sysEnv                  | app                                                                             | string           | Page View |
            | business unit           | BBVA Mexico                                                                     | string           | Page View |
            | site app name           | App BBVA Mexico                                                                 | string           | Page View |
            | project name            | Glomo                                                                           | string           | Page View |
            | user segment global     | 003001                                                                          | string           | Page View |
            | device mobile           | si                                                                              | string           | Page View |
            | user userState          | logado                                                                          | string           | Page View |
            | profile ID              | profileID                                                                       | regexp named     | Page View |
            | user gender             | gender                                                                          | regexp named     | Page View |
            | user age                | age                                                                             | regexp named     | Page View |
            | internal campaign       |                                                                                 | empty array      | Page View |
            | optimization attributes |                                                                                 | empty array      | Page View |
            | application             |                                                                                 | empty str object | Page View |
            | products attributes     |                                                                                 | empty array      | Page View |

    @ANA_EVENT_SCFO019
    @analytics @MX
    @web @android @ios
    @backend(test)
    @vbank @web-done
    Scenario: Validate option see more of your contributions section
        Given a user with the following criteria
            | criteria                                    |
            | sustainability carbon footprint offset user |
            | with contributions                          |
        And the user accesses to sustainability section
        And the user accesses to sustainability carbon footprint offset section
        And the analytics interceptor service is initiated
        When the user enters into the "contributions learn more" screen
        Then the analytics events contains the following variables:
            | item                    | value                                                                            | type             | event     |
            | analytics               | analytics/glomo_base                                                             | json schema      | Page View |
            | page name               | app:privada:personas:sostenibilidad:proyectos forestales:listado de aportaciones | string           | Page View |
            | level 1                 | sostenibilidad                                                                   | string           | Page View |
            | level 2                 | proyectos forestales                                                             | string           | Page View |
            | level 3                 | listado de aportaciones                                                          | string           | Page View |
            | language                | ES                                                                               | string           | Page View |
            | page area               | privada                                                                          | string           | Page View |
            | page intent             | informacion                                                                      | string           | Page View |
            | channel                 | online                                                                           | string           | Page View |
            | page instance ID        | de                                                                               | string           | Page View |
            | version DL              | 20250414_5.0                                                                     | string           | Page View |
            | page info version       | appVersion                                                                       | regexp named     | Page View |
            | page segment            | personas                                                                         | string           | Page View |
            | sysEnv                  | app                                                                              | string           | Page View |
            | business unit           | BBVA Mexico                                                                      | string           | Page View |
            | site app name           | App BBVA Mexico                                                                  | string           | Page View |
            | project name            | Glomo                                                                            | string           | Page View |
            | user segment global     | 003001                                                                           | string           | Page View |
            | device mobile           | si                                                                               | string           | Page View |
            | user userState          | logado                                                                           | string           | Page View |
            | profile ID              | profileID                                                                        | regexp named     | Page View |
            | user gender             | gender                                                                           | regexp named     | Page View |
            | user age                | age                                                                              | regexp named     | Page View |
            | internal campaign       |                                                                                  | empty array      | Page View |
            | optimization attributes |                                                                                  | empty array      | Page View |
            | application             |                                                                                  | empty str object | Page View |
            | products attributes     |                                                                                  | empty array      | Page View |

    @ANA_EVENT_SCFO020
    @analytics @MX
    @web @android @ios
    @backend(test)
    @vbank @web-done
    Scenario: Check the details of a contribution made
        Given a user with the following criteria
            | criteria                                    |
            | sustainability carbon footprint offset user |
            | with contributions                          |
        And the user accesses to sustainability section
        And the user accesses to sustainability carbon footprint offset section
        And the user enters into the "contributions learn more" screen
        And the analytics interceptor service is initiated
        When the user enters into the contribution detail
        Then the analytics events contains the following variables:
            | item                    | value                                                                                               | type             | event     |
            | analytics               | analytics/glomo_base                                                                                | json schema      | Page View |
            | page name               | app:privada:personas:sostenibilidad:proyectos forestales:listado de aportaciones:detalle aportacion | string           | Page View |
            | level 1                 | sostenibilidad                                                                                      | string           | Page View |
            | level 2                 | proyectos forestales                                                                                | string           | Page View |
            | level 3                 | listado de aportaciones                                                                             | string           | Page View |
            | level 4                 | detalle aportacion                                                                                  | string           | Page View |
            | language                | ES                                                                                                  | string           | Page View |
            | page area               | privada                                                                                             | string           | Page View |
            | page intent             | informacion                                                                                         | string           | Page View |
            | channel                 | online                                                                                              | string           | Page View |
            | page instance ID        | de                                                                                                  | string           | Page View |
            | version DL              | 20250414_5.0                                                                                        | string           | Page View |
            | page info version       | appVersion                                                                                          | regexp named     | Page View |
            | page segment            | personas                                                                                            | string           | Page View |
            | sysEnv                  | app                                                                                                 | string           | Page View |
            | business unit           | BBVA Mexico                                                                                         | string           | Page View |
            | site app name           | App BBVA Mexico                                                                                     | string           | Page View |
            | project name            | Glomo                                                                                               | string           | Page View |
            | user segment global     | 003001                                                                                              | string           | Page View |
            | device mobile           | si                                                                                                  | string           | Page View |
            | user userState          | logado                                                                                              | string           | Page View |
            | profile ID              | profileID                                                                                           | regexp named     | Page View |
            | user gender             | gender                                                                                              | regexp named     | Page View |
            | user age                | age                                                                                                 | regexp named     | Page View |
            | internal campaign       |                                                                                                     | empty array      | Page View |
            | optimization attributes |                                                                                                     | empty array      | Page View |
            | application             |                                                                                                     | empty str object | Page View |
            | products attributes     |                                                                                                     | empty array      | Page View |

    @ANA_EVENT_SCFO021
    @analytics @MX
    @web @android @ios
    @backend(test)
    @vbank @web-done
    Scenario: Validate option see more of emissions this year section
        Given a user with the following criteria
            | criteria                                    |
            | sustainability carbon footprint offset user |
            | with contributions                          |
        And the user accesses to sustainability section
        And the user accesses to sustainability carbon footprint offset section
        And the analytics interceptor service is initiated
        When the user accesses to the emissions learn more screen
        Then the analytics events contains the following variables:
            | item                    | value                                                                     | type             | event     |
            | analytics               | analytics/glomo_base                                                      | json schema      | Page View |
            | page name               | app:privada:personas:sostenibilidad:proyectos forestales:tus emisiones c02| string           | Page View |
            | level 1                 | sostenibilidad                                                            | string           | Page View |
            | level 2                 | proyectos forestales                                                      | string           | Page View |
            | level 3                 | tus emisiones c02                                                         | string           | Page View |
            | language                | ES                                                                        | string           | Page View |
            | page area               | privada                                                                   | string           | Page View |
            | page intent             | informacion                                                               | string           | Page View |
            | channel                 | online                                                                    | string           | Page View |
            | page instance ID        | de                                                                        | string           | Page View |
            | version DL              | 20250414_5.0                                                              | string           | Page View |
            | page info version       | appVersion                                                                | regexp named     | Page View |
            | page segment            | personas                                                                  | string           | Page View |
            | sysEnv                  | app                                                                       | string           | Page View |
            | business unit           | BBVA Mexico                                                               | string           | Page View |
            | site app name           | App BBVA Mexico                                                           | string           | Page View |
            | project name            | Glomo                                                                     | string           | Page View |
            | user segment global     | 003001                                                                    | string           | Page View |
            | device mobile           | si                                                                        | string           | Page View |
            | user userState          | logado                                                                    | string           | Page View |
            | profile ID              | profileID                                                                 | regexp named     | Page View |
            | user gender             | gender                                                                    | regexp named     | Page View |
            | user age                | age                                                                       | regexp named     | Page View |
            | internal campaign       |                                                                           | empty array      | Page View |
            | optimization attributes |                                                                           | empty array      | Page View |
            | application             |                                                                           | empty str object | Page View |
            | products attributes     |                                                                           | empty array      | Page View |

    @ANA_EVENT_SCFO022
    @analytics @MX
    @web @android @ios
    @backend(test)
    @vbank @web-done
    Scenario: Validate sustainability detail page
        Given a user with the following criteria
            | criteria                                    |
            | sustainability carbon footprint offset user |
            | with contributions                          |
        And the user accesses to sustainability section
        And the user accesses to sustainability carbon footprint offset section
        And the analytics interceptor service is initiated
        When the user enters into the sustainability detail page
        Then the analytics events contains the following variables:
            | item                    | value                                                                           | type             | event     |
            | analytics               | analytics/glomo_base                                                            | json schema      | Page View |
            | page name               | app:privada:personas:sostenibilidad:proyectos forestales:detalle sostenibilidad | string           | Page View |
            | level 1                 | sostenibilidad                                                                  | string           | Page View |
            | level 2                 | proyectos forestales                                                            | string           | Page View |
            | level 3                 | detalle sostenibilidad                                                          | string           | Page View |
            | language                | ES                                                                              | string           | Page View |
            | page area               | privada                                                                         | string           | Page View |
            | page intent             | informacion                                                                     | string           | Page View |
            | channel                 | online                                                                          | string           | Page View |
            | page instance ID        | de                                                                              | string           | Page View |
            | version DL              | 20250414_5.0                                                                    | string           | Page View |
            | page info version       | appVersion                                                                      | regexp named     | Page View |
            | page segment            | personas                                                                        | string           | Page View |
            | sysEnv                  | app                                                                             | string           | Page View |
            | business unit           | BBVA Mexico                                                                     | string           | Page View |
            | site app name           | App BBVA Mexico                                                                 | string           | Page View |
            | project name            | Glomo                                                                           | string           | Page View |
            | user segment global     | 003001                                                                          | string           | Page View |
            | device mobile           | si                                                                              | string           | Page View |
            | user userState          | logado                                                                          | string           | Page View |
            | profile ID              | profileID                                                                       | regexp named     | Page View |
            | user gender             | gender                                                                          | regexp named     | Page View |
            | user age                | age                                                                             | regexp named     | Page View |
            | internal campaign       |                                                                                 | empty array      | Page View |
            | optimization attributes |                                                                                 | empty array      | Page View |
            | application             |                                                                                 | empty str object | Page View |
            | products attributes     |                                                                                 | empty array      | Page View |

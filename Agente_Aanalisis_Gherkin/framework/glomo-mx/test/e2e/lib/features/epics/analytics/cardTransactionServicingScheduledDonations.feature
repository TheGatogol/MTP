@cardTransactionServicingScheduledDonationsAnalytics
Feature: Analytics - Card Transaction Servicing Scheduled Donations Analytics

    @ANA_EVENT_SCD001
    @analytics
    @MX @web @backend(test) @vbank @web-done
    @android @ios
    @vbank-modified
    Scenario: The user clicks on the button “Card Transaction Servicing Scheduled Donations”
        Given a user with the following criteria
            | criteria       |
            | analytics user |
        And the user accesses contract product section
        And the analytics interceptor service is initiated
        When the user accesses to the card transaction servicing scheduled donations offer detail
        Then the analytics events contains the following variables:
            | item                                         | value                                                                           | type         | event              |
            | analytics                                    | analytics/glomo_base                                                            | json schema  | App On Click Start |
            | page name                                    | app:privada:personas:oportunidades                                              | string       | App On Click Start |
            | level 1                                      | oportunidades                                                                   | string       | App On Click Start |
            | language                                     | ES                                                                              | string       | App On Click Start |
            | page area                                    | privada                                                                         | string       | App On Click Start |
            | page intent                                  | informacion                                                                     | string       | App On Click Start |
            | channel                                      | online                                                                          | string       | App On Click Start |
            | page instance ID                             | de                                                                              | string       | App On Click Start |
            | version DL                                   | 20250414_5.0                                                                    | string       | App On Click Start |
            | page info version                            | appVersion                                                                      | regexp named | App On Click Start |
            | page segment                                 | personas                                                                        | string       | App On Click Start |
            | sysEnv                                       | app                                                                             | string       | App On Click Start |
            | business unit                                | BBVA Mexico                                                                     | string       | App On Click Start |
            | site app name                                | App BBVA Mexico                                                                 | string       | App On Click Start |
            | project name                                 | Glomo                                                                           | string       | App On Click Start |
            | user segment global                          | 003001                                                                          | string       | App On Click Start |
            | device mobile                                | si                                                                              | string       | App On Click Start |
            | user userState                               | logado                                                                          | string       | App On Click Start |
            | profile ID                                   | profileID                                                                       | regexp named | App On Click Start |
            | user gender                                  | gender                                                                          | regexp named | App On Click Start |
            | user age                                     | age                                                                             | regexp named | App On Click Start |
            | global application                           | donation payments                                                               | string       | App On Click Start |
            | application type                             | operativa                                                                       | string       | App On Click Start |
            | application name                             | donaciones                                                                      | string       | App On Click Start |
            | application step                             | me interesa                                                                     | string       | App On Click Start |
            | fulfillment model                            | online                                                                          | string       | App On Click Start |
            | internal campaign attributes location        | contract product section--superior-1-1                                          | string       | App On Click Start |
            | internal campaign attributes campaign format | card                                                                            | string       | App On Click Start |
            | internal campaign attributes name            | -juntos por la educacion                                                        | string       | App On Click Start |
            | internal campaign attributes product         | cuentas                                                                         | string       | App On Click Start |
            | internal campaign event name                 | IntCmpClick                                                                     | string       | App On Click Start |
            | internal campaign site action name           | contract product section--superior-1-1:card::-juntos por la educacion:cuentas:: | string       | App On Click Start |
            | optimization attributes                      |                                                                                 | empty array  | App On Click Start |
            | products attributes                          |                                                                                 | empty array  | App On Click Start |

    @ANA_EVENT_SCD002
    @analytics
    @web @ios @android
    @MX @backend(test) @vbank @web-done
    Scenario: Card Transaction Servicing Scheduled Donations - App Page Visit
        Given a user with the following criteria
            | criteria       |
            | analytics user |
        And the user accesses contract product section
        And the analytics interceptor service is initiated
        When the user accesses to the card transaction servicing scheduled donations offer detail
        Then the analytics events contains the following variables
            | item                    | value                                                | type         | event          |
            | analytics               | analytics/glomo_base                                 | json schema  | App Page Visit |
            | version DL              | 20250414_5.0                                         | string       | App Page Visit |
            | page name               | app:privada:personas:cuentas:donaciones:1 beneficios | string       | App Page Visit |
            | level 1                 | cuentas                                              | string       | App Page Visit |
            | level 2                 | donaciones                                           | string       | App Page Visit |
            | level 3                 | 1 beneficios                                         | string       | App Page Visit |
            | language                | ES                                                   | string       | App Page Visit |
            | page area               | privada                                              | string       | App Page Visit |
            | page intent             | transaccion                                          | string       | App Page Visit |
            | channel                 | online                                               | string       | App Page Visit |
            | page instance ID        | de                                                   | string       | App Page Visit |
            | page info version       | appVersion                                           | regexp named | App Page Visit |
            | page segment            | personas                                             | string       | App Page Visit |
            | sysEnv                  | app                                                  | string       | App Page Visit |
            | business unit           | BBVA Mexico                                          | string       | App Page Visit |
            | site app name           | App BBVA Mexico                                      | string       | App Page Visit |
            | project name            | Glomo                                                | string       | App Page Visit |
            | device mobile           | si                                                   | string       | App Page Visit |
            | user userState          | logado                                               | string       | App Page Visit |
            | profile ID              | profileID                                            | regexp named | App Page Visit |
            | user segment global     | 003001                                               | string       | App Page Visit |
            | user gender             | gender                                               | regexp named | App Page Visit |
            | user age                | age                                                  | regexp named | App Page Visit |
            | global application      | donation payments                                    | string       | App Page Visit |
            | application name        | donaciones                                           | string       | App Page Visit |
            | application type        | operativa                                            | string       | App Page Visit |
            | application step        | 1 beneficios                                         | string       | App Page Visit |
            | fulfillment model       | online                                               | string       | App Page Visit |
            | internal campaign       |                                                      | empty array  | App Page Visit |
            | optimization attributes |                                                      | empty array  | App Page Visit |
            | products attributes     |                                                      | empty array  | App Page Visit |

    @ANA_EVENT_SCD003
    @analytics
    @web @ios @android
    @MX @backend(test) @vbank @web-done
    Scenario: Card Transaction Servicing Scheduled Donations- App Started
        Given a user with the following criteria
            | criteria             |
            | analytics user three |
        And the user accesses contract product section
        And the user accesses to the card transaction servicing scheduled donations offer detail
        And the analytics interceptor service is initiated
        When the user accesses to the step of the card transaction servicing scheduled donations offer
        Then the analytics events contains the following variables
            | item                    | value                                                | type         | event       |
            | analytics               | analytics/glomo_base                                 | json schema  | App Started |
            | version DL              | 20250414_5.0                                         | string       | App Started |
            | page name               | app:privada:personas:cuentas:donaciones:1 beneficios | string       | App Started |
            | level 1                 | cuentas                                              | string       | App Started |
            | level 2                 | donaciones                                           | string       | App Started |
            | level 3                 | 1 beneficios                                         | string       | App Started |
            | language                | ES                                                   | string       | App Started |
            | page area               | privada                                              | string       | App Started |
            | page intent             | transaccion                                          | string       | App Started |
            | channel                 | online                                               | string       | App Started |
            | page instance ID        | de                                                   | string       | App Started |
            | page info version       | appVersion                                           | regexp named | App Started |
            | page segment            | personas                                             | string       | App Started |
            | sysEnv                  | app                                                  | string       | App Started |
            | business unit           | BBVA Mexico                                          | string       | App Started |
            | site app name           | App BBVA Mexico                                      | string       | App Started |
            | project name            | Glomo                                                | string       | App Started |
            | device mobile           | si                                                   | string       | App Started |
            | user userState          | logado                                               | string       | App Started |
            | profile ID              | profileID                                            | regexp named | App Started |
            | user segment global     | 003001                                               | string       | App Started |
            | user gender             | gender                                               | regexp named | App Started |
            | user age                | age                                                  | regexp named | App Started |
            | global application      | donation payments                                    | string       | App Started |
            | application name        | donaciones                                           | string       | App Started |
            | application type        | operativa                                            | string       | App Started |
            | application step        | continuar                                            | string       | App Started |
            | fulfillment model       | online                                               | string       | App Started |
            | internal campaign       |                                                      | empty array  | App Started |
            | optimization attributes |                                                      | empty array  | App Started |
            | products attributes     |                                                      | empty array  | App Started |

    @ANA_EVENT_SCD004
    @analytics
    @web @ios @android
    @MX @backend(test) @vbank @web-done
    Scenario: Card Transaction Servicing Scheduled Donations - App Step 2
        Given a user with the following criteria
            | criteria       |
            | analytics user |
        And the user accesses contract product section
        And the user accesses to the card transaction servicing scheduled donations offer detail
        And the analytics interceptor service is initiated
        When the user accesses to the step of the card transaction servicing scheduled donations offer
        Then the analytics events contains the following variables
            | item                    | value                                             | type         | event      |
            | analytics               | analytics/glomo_base                              | json schema  | App Step 2 |
            | version DL              | 20250414_5.0                                      | string       | App Step 2 |
            | page name               | app:privada:personas:cuentas:donaciones:2 importe | string       | App Step 2 |
            | level 1                 | cuentas                                           | string       | App Step 2 |
            | level 2                 | donaciones                                        | string       | App Step 2 |
            | level 3                 | 2 importe                                         | string       | App Step 2 |
            | language                | ES                                                | string       | App Step 2 |
            | page area               | privada                                           | string       | App Step 2 |
            | page intent             | transaccion                                       | string       | App Step 2 |
            | channel                 | online                                            | string       | App Step 2 |
            | page instance ID        | de                                                | string       | App Step 2 |
            | page info version       | appVersion                                        | regexp named | App Step 2 |
            | page segment            | personas                                          | string       | App Step 2 |
            | sysEnv                  | app                                               | string       | App Step 2 |
            | business unit           | BBVA Mexico                                       | string       | App Step 2 |
            | site app name           | App BBVA Mexico                                   | string       | App Step 2 |
            | project name            | Glomo                                             | string       | App Step 2 |
            | device mobile           | si                                                | string       | App Step 2 |
            | user userState          | logado                                            | string       | App Step 2 |
            | profile ID              | profileID                                         | regexp named | App Step 2 |
            | user segment global     | 003001                                            | string       | App Step 2 |
            | user gender             | gender                                            | regexp named | App Step 2 |
            | user age                | age                                               | regexp named | App Step 2 |
            | global application      | donation payments                                 | string       | App Step 2 |
            | application name        | donaciones                                        | string       | App Step 2 |
            | application type        | operativa                                         | string       | App Step 2 |
            | application step        | 2 importe                                         | string       | App Step 2 |
            | fulfillment model       | online                                            | string       | App Step 2 |
            | internal campaign       |                                                   | empty array  | App Step 2 |
            | optimization attributes |                                                   | empty array  | App Step 2 |

    @ANA_EVENT_SCD005
    @analytics
    @web @ios @android
    @MX @backend(test) @vbank @web-done
    Scenario: Card Transaction Servicing Scheduled Donations - App Step 3
        Given a user with the following criteria
            | criteria       |
            | analytics user |
        And the user accesses contract product section
        And the user accesses to the card transaction servicing scheduled donations offer detail
        And the analytics interceptor service is initiated
        When the user completes the steps until confirmation
        Then the analytics events contains the following variables
            | item                    | value                                                  | type         | event      |
            | analytics               | analytics/glomo_base                                   | json schema  | App Step 3 |
            | version DL              | 20250414_5.0                                           | string       | App Step 3 |
            | page name               | app:privada:personas:cuentas:donaciones:3 confirmacion | string       | App Step 3 |
            | level 1                 | cuentas                                                | string       | App Step 3 |
            | level 2                 | donaciones                                             | string       | App Step 3 |
            | level 3                 | 3 confirmacion                                         | string       | App Step 3 |
            | language                | ES                                                     | string       | App Step 3 |
            | page area               | privada                                                | string       | App Step 3 |
            | page intent             | transaccion                                            | string       | App Step 3 |
            | channel                 | online                                                 | string       | App Step 3 |
            | page instance ID        | de                                                     | string       | App Step 3 |
            | page info version       | appVersion                                             | regexp named | App Step 3 |
            | page segment            | personas                                               | string       | App Step 3 |
            | sysEnv                  | app                                                    | string       | App Step 3 |
            | business unit           | BBVA Mexico                                            | string       | App Step 3 |
            | site app name           | App BBVA Mexico                                        | string       | App Step 3 |
            | project name            | Glomo                                                  | string       | App Step 3 |
            | device mobile           | si                                                     | string       | App Step 3 |
            | user userState          | logado                                                 | string       | App Step 3 |
            | profile ID              | profileID                                              | regexp named | App Step 3 |
            | user segment global     | 003001                                                 | string       | App Step 3 |
            | user gender             | gender                                                 | regexp named | App Step 3 |
            | user age                | age                                                    | regexp named | App Step 3 |
            | global application      | donation payments                                      | string       | App Step 3 |
            | application name        | donaciones                                             | string       | App Step 3 |
            | application type        | operativa                                              | string       | App Step 3 |
            | application step        | 3 confirmacion                                         | string       | App Step 3 |
            | fulfillment model       | online                                                 | string       | App Step 3 |
            | internal campaign       |                                                        | empty array  | App Step 3 |
            | optimization attributes |                                                        | empty array  | App Step 3 |

    @ANA_EVENT_SCD006
    @analytics
    @web @ios @android
    @MX @backend(test) @vbank @web-done
    Scenario: Card Transaction Servicing Scheduled Donations - App Step 4
        Given a user with the following criteria
            | criteria       |
            | analytics user |
        And the user accesses contract product section
        And the user accesses to the card transaction servicing scheduled donations offer detail
        And the user completes the steps until confirmation
        And the analytics interceptor service is initiated
        When the user confirm transaction
        Then the analytics events contains the following variables
            | item                    | value                                         | type         | event      |
            | analytics               | analytics/glomo_base                          | json schema  | App Step 4 |
            | version DL              | 20250414_5.0                                  | string       | App Step 4 |
            | page name               | app:privada:personas:cuentas:donaciones:4 otp | string       | App Step 4 |
            | level 1                 | cuentas                                       | string       | App Step 4 |
            | level 2                 | donaciones                                    | string       | App Step 4 |
            | level 3                 | 4 otp                                         | string       | App Step 4 |
            | language                | ES                                            | string       | App Step 4 |
            | page area               | privada                                       | string       | App Step 4 |
            | page intent             | transaccion                                   | string       | App Step 4 |
            | channel                 | online                                        | string       | App Step 4 |
            | page instance ID        | de                                            | string       | App Step 4 |
            | page info version       | appVersion                                    | regexp named | App Step 4 |
            | page segment            | personas                                      | string       | App Step 4 |
            | sysEnv                  | app                                           | string       | App Step 4 |
            | business unit           | BBVA Mexico                                   | string       | App Step 4 |
            | site app name           | App BBVA Mexico                               | string       | App Step 4 |
            | project name            | Glomo                                         | string       | App Step 4 |
            | device mobile           | si                                            | string       | App Step 4 |
            | user userState          | logado                                        | string       | App Step 4 |
            | profile ID              | profileID                                     | regexp named | App Step 4 |
            | user segment global     | 003001                                        | string       | App Step 4 |
            | user gender             | gender                                        | regexp named | App Step 4 |
            | user age                | age                                           | regexp named | App Step 4 |
            | global application      | donation payments                             | string       | App Step 4 |
            | application name        | donaciones                                    | string       | App Step 4 |
            | application type        | operativa                                     | string       | App Step 4 |
            | application step        | 4 otp                                         | string       | App Step 4 |
            | fulfillment model       | online                                        | string       | App Step 4 |
            | custom fields           | firma:token                                   | string       | App Step 4 |
            | internal campaign       |                                               | empty array  | App Step 4 |
            | optimization attributes |                                               | empty array  | App Step 4 |

    @ANA_EVENT_SCD007
    @analytics
    @web @ios @android
    @MX @backend(test) @vbank @web-done
    Scenario: Card Transaction Servicing Scheduled Donations - App Completed
        Given a user with the following criteria
            | criteria       |
            | analytics user |
        And the user accesses contract product section
        And the user accesses to the card transaction servicing scheduled donations offer detail
        And the user completes the steps until confirmation
        And the analytics interceptor service is initiated
        When the user confirm transaction on step
        Then the analytics events contains the following variables
            | item                         | value                                                  | type         | event         |
            | analytics                    | analytics/glomo_base                                   | json schema  | App Completed |
            | version DL                   | 20250414_5.0                                           | string       | App Completed |
            | page name                    | app:privada:personas:cuentas:donaciones:pagina exitosa | string       | App Completed |
            | level 1                      | cuentas                                                | string       | App Completed |
            | level 2                      | donaciones                                             | string       | App Completed |
            | level 3                      | pagina exitosa                                         | string       | App Completed |
            | language                     | ES                                                     | string       | App Completed |
            | page area                    | privada                                                | string       | App Completed |
            | page intent                  | transaccion                                            | string       | App Completed |
            | channel                      | online                                                 | string       | App Completed |
            | page instance ID             | de                                                     | string       | App Completed |
            | page info version            | appVersion                                             | regexp named | App Completed |
            | page segment                 | personas                                               | string       | App Completed |
            | sysEnv                       | app                                                    | string       | App Completed |
            | business unit                | BBVA Mexico                                            | string       | App Completed |
            | site app name                | App BBVA Mexico                                        | string       | App Completed |
            | project name                 | Glomo                                                  | string       | App Completed |
            | device mobile                | si                                                     | string       | App Completed |
            | user userState               | logado                                                 | string       | App Completed |
            | profile ID                   | profileID                                              | regexp named | App Completed |
            | user segment global          | 003001                                                 | string       | App Completed |
            | user gender                  | gender                                                 | regexp named | App Completed |
            | user age                     | age                                                    | regexp named | App Completed |
            | global application           | donation payments                                      | string       | App Completed |
            | application name             | donaciones                                             | string       | App Completed |
            | application type             | operativa                                              | string       | App Completed |
            | application step             | pagina exitosa                                         | string       | App Completed |
            | fulfillment model            | online                                                 | string       | App Completed |
            | application state            | finalizado                                             | string       | App Completed |
            | custom fields                | firma:token                                            | string       | App Completed |
            | application operation number | 08055PATL770418I58                                     | string       | App Completed |
            | custom fields                | firma:token                                            | string       | App Completed |
            | internal campaign            |                                                        | empty array  | App Completed |
            | optimization attributes      |                                                        | empty array  | App Completed |

    @ANA_EVENT_SCD008
    @analytics
    @web @ios @android
    @MX @backend(test) @vbank @web-done
    Scenario: Card Transaction Servicing Scheduled Donations - HUELLA - Origen
        Given a user with the following criteria
            | criteria            |
            | analytics user four |
        And the user accesses contract product section
        And the user accesses to the card transaction servicing scheduled donations offer detail
        And the user accesses to the step of the card transaction servicing scheduled donations offer
        And the analytics interceptor service is initiated
        When the user accesses to modify account section
        Then the analytics events contains the following variables
            | item                    | value                                          | type             | event     |
            | analytics               | analytics/glomo_base                           | json schema      | Page View |
            | version DL              | 20250414_5.0                                   | string           | Page View |
            | page name               | app:privada:personas:cuentas:donaciones:origen | string           | Page View |
            | level 1                 | cuentas                                        | string           | Page View |
            | level 2                 | donaciones                                     | string           | Page View |
            | level 3                 | origen                                         | string           | Page View |
            | language                | ES                                             | string           | Page View |
            | page area               | privada                                        | string           | Page View |
            | page intent             | transaccion                                    | string           | Page View |
            | channel                 | online                                         | string           | Page View |
            | page instance ID        | de                                             | string           | Page View |
            | page info version       | appVersion                                     | regexp named     | Page View |
            | page segment            | personas                                       | string           | Page View |
            | sysEnv                  | app                                            | string           | Page View |
            | business unit           | BBVA Mexico                                    | string           | Page View |
            | site app name           | App BBVA Mexico                                | string           | Page View |
            | project name            | Glomo                                          | string           | Page View |
            | device mobile           | si                                             | string           | Page View |
            | user userState          | logado                                         | string           | Page View |
            | user segment global     | 003001                                         | string           | Page View |
            | profile ID              | profileID                                      | regexp named     | Page View |
            | user gender             | gender                                         | regexp named     | Page View |
            | user age                | age                                            | regexp named     | Page View |
            | internal campaign       |                                                | empty array      | Page View |
            | optimization attributes |                                                | empty array      | Page View |
            | application             |                                                | empty str object | Page View |
            | products attributes     |                                                | empty array      | Page View |

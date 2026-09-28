@cutOffDateAnalytics
Feature: Cut Off Date Analytics

    @ANA_EVENT_COD001
    @analytics
    @web @ios @android
    @MX @backend(test) @vbank @web-done
    Scenario: Access operative - App On Click Start
        Given a user with the following criteria
            | criteria            |
            | cut off date        |
            | change cut off date |
        And the user accesses to the "operative" "credit" card product detail
        And the analytics interceptor service is initiated
        When the user accesses to cut off date operative
        Then the analytics events contains the following variables
            | item                     | value                                         | type         | event              |
            | analytics                | analytics/glomo_base                          | json schema  | App On Click Start |
            | version DL               | 20250414_5.0                                  | string       | App On Click Start |
            | page instance ID         | de                                            | string       | App On Click Start |
            | sysEnv                   | app                                           | string       | App On Click Start |
            | page segment             | personas                                      | string       | App On Click Start |
            | page intent              | informacion                                   | string       | App On Click Start |
            | business unit            | BBVA Mexico                                   | string       | App On Click Start |
            | page area                | privada                                       | string       | App On Click Start |
            | language                 | ES                                            | string       | App On Click Start |
            | channel                  | online                                        | string       | App On Click Start |
            | site app name            | App BBVA Mexico                               | string       | App On Click Start |
            | project name             | Glomo                                         | string       | App On Click Start |
            | level 1                  | tarjetas                                      | string       | App On Click Start |
            | level 2                  | credito                                       | string       | App On Click Start |
            | level 3                  | detalle                                       | string       | App On Click Start |
            | page name                | app:privada:personas:tarjetas:credito:detalle | string       | App On Click Start |
            | device mobile            | si                                            | string       | App On Click Start |
            | device root              |                                               | string       | App On Click Start |
            | user segment global      | 003001                                        | string       | App On Click Start |
            | user userState           | logado                                        | string       | App On Click Start |
            | profile ID               | profileID                                     | regexp named | App On Click Start |
            | user gender              | gender                                        | regexp named | App On Click Start |
            | user age                 | age                                           | regexp named | App On Click Start |
            | fulfillment model        | online                                        | string       | App On Click Start |
            | application step         | cambiar fecha de pago                         | string       | App On Click Start |
            | application name         | cambiar fecha de pago                         | string       | App On Click Start |
            | application type         | operativa                                     | string       | App On Click Start |
            | global application       | cut off date card                             | string       | App On Click Start |
            | product subtype          | tarjetas credito                              | string       | App On Click Start |
            | product primary category | tarjetas                                      | string       | App On Click Start |
            | internal campaign        |                                               | empty array  | App On Click Start |
            | optimization attributes  |                                               | empty array  | App On Click Start |

    @ANA_EVENT_COD002
    @analytics
    @web @ios @android
    @MX @backend(test) @vbank @web-done
    Scenario: Init operative - App Page Visit
        Given a user with the following criteria
            | criteria            |
            | cut off date        |
            | update cut off date |
        And the user accesses to the "operative" "credit" card product detail
        And the analytics interceptor service is initiated
        When the user accesses to cut off date operative
        Then the analytics events contains the following variables
            | item                     | value                                                                           | type         | event          |
            | analytics                | analytics/glomo_base                                                            | json schema  | App Page Visit |
            | version DL               | 20250414_5.0                                                                    | string       | App Page Visit |
            | page instance ID         | de                                                                              | string       | App Page Visit |
            | sysEnv                   | app                                                                             | string       | App Page Visit |
            | page segment             | personas                                                                        | string       | App Page Visit |
            | page intent              | transaccion                                                                     | string       | App Page Visit |
            | business unit            | BBVA Mexico                                                                     | string       | App Page Visit |
            | page area                | privada                                                                         | string       | App Page Visit |
            | language                 | ES                                                                              | string       | App Page Visit |
            | channel                  | online                                                                          | string       | App Page Visit |
            | site app name            | App BBVA Mexico                                                                 | string       | App Page Visit |
            | project name             | Glomo                                                                           | string       | App Page Visit |
            | level 1                  | tarjetas                                                                        | string       | App Page Visit |
            | level 2                  | credito                                                                         | string       | App Page Visit |
            | level 3                  | cambiar fecha de pago                                                           | string       | App Page Visit |
            | level 4                  | 1 seleccionar fecha                                                             | string       | App Page Visit |
            | page name                | app:privada:personas:tarjetas:credito:cambiar fecha de pago:1 seleccionar fecha | string       | App Page Visit |
            | device mobile            | si                                                                              | string       | App Page Visit |
            | device root              |                                                                                 | string       | App Page Visit |
            | user segment global      | 003001                                                                          | string       | App Page Visit |
            | user userState           | logado                                                                          | string       | App Page Visit |
            | profile ID               | profileID                                                                       | regexp named | App Page Visit |
            | user gender              | gender                                                                          | regexp named | App Page Visit |
            | user age                 | age                                                                             | regexp named | App Page Visit |
            | fulfillment model        | online                                                                          | string       | App Page Visit |
            | application step         | 1 seleccionar fecha                                                             | string       | App Page Visit |
            | application state        | inicio                                                                          | string       | App Page Visit |
            | application name         | cambiar fecha de pago                                                           | string       | App Page Visit |
            | application type         | operativa                                                                       | string       | App Page Visit |
            | global application       | cut off date card                                                               | string       | App Page Visit |
            | product subtype          | tarjetas credito                                                                | string       | App Page Visit |
            | product primary category | tarjetas                                                                        | string       | App Page Visit |
            | internal campaign        |                                                                                 | empty array  | App Page Visit |
            | optimization attributes  |                                                                                 | empty array  | App Page Visit |

    @ANA_EVENT_COD003
    @analytics
    @web @ios @android
    @MX @backend(test) @vbank @web-done
    Scenario: Select a new date - App Started
        Given a user with the following criteria
            | criteria            |
            | cut off date        |
            | update cut off date |
        And the user accesses to the "operative" "credit" card product detail
        And the user accesses to cut off date operative
        And the analytics interceptor service is initiated
        When the user "selects" a new date
        Then the analytics events contains the following variables
            | item                     | value                                                                           | type         | event       |
            | analytics                | analytics/glomo_base                                                            | json schema  | App Started |
            | version DL               | 20250414_5.0                                                                    | string       | App Started |
            | page instance ID         | de                                                                              | string       | App Started |
            | sysEnv                   | app                                                                             | string       | App Started |
            | page segment             | personas                                                                        | string       | App Started |
            | page intent              | transaccion                                                                     | string       | App Started |
            | business unit            | BBVA Mexico                                                                     | string       | App Started |
            | page area                | privada                                                                         | string       | App Started |
            | language                 | ES                                                                              | string       | App Started |
            | channel                  | online                                                                          | string       | App Started |
            | site app name            | App BBVA Mexico                                                                 | string       | App Started |
            | project name             | Glomo                                                                           | string       | App Started |
            | level 1                  | tarjetas                                                                        | string       | App Started |
            | level 2                  | credito                                                                         | string       | App Started |
            | level 3                  | cambiar fecha de pago                                                           | string       | App Started |
            | level 4                  | 1 seleccionar fecha                                                             | string       | App Started |
            | page name                | app:privada:personas:tarjetas:credito:cambiar fecha de pago:1 seleccionar fecha | string       | App Started |
            | device mobile            | si                                                                              | string       | App Started |
            | device root              |                                                                                 | string       | App Started |
            | user segment global      | 003001                                                                          | string       | App Started |
            | user userState           | logado                                                                          | string       | App Started |
            | profile ID               | profileID                                                                       | regexp named | App Started |
            | user gender              | gender                                                                          | regexp named | App Started |
            | user age                 | age                                                                             | regexp named | App Started |
            | fulfillment model        | online                                                                          | string       | App Started |
            | application step         | seleccion fecha de pago                                                         | string       | App Started |
            | application name         | cambiar fecha de pago                                                           | string       | App Started |
            | application type         | operativa                                                                       | string       | App Started |
            | global application       | cut off date card                                                               | string       | App Started |
            | product subtype          | tarjetas credito                                                                | string       | App Started |
            | product primary category | tarjetas                                                                        | string       | App Started |
            | internal campaign        |                                                                                 | empty array  | App Started |
            | optimization attributes  |                                                                                 | empty array  | App Started |

    @ANA_EVENT_COD004
    @analytics
    @web @ios @android
    @MX @backend(test) @vbank @web-done
    Scenario: Enter sign - App Step 2
        Given a user with the following criteria
            | criteria            |
            | cut off date        |
            | update cut off date |
        And the user accesses to the "operative" "credit" card product detail
        And the user accesses to cut off date operative
        And the analytics interceptor service is initiated
        When the user "changes" card cut off date operation
        Then the analytics events contains the following variables
            | item                     | value                                                             | type         | event      |
            | analytics                | analytics/glomo_base                                              | json schema  | App Step 2 |
            | version DL               | 20250414_5.0                                                      | string       | App Step 2 |
            | page instance ID         | de                                                                | string       | App Step 2 |
            | sysEnv                   | app                                                               | string       | App Step 2 |
            | page segment             | personas                                                          | string       | App Step 2 |
            | page intent              | transaccion                                                       | string       | App Step 2 |
            | business unit            | BBVA Mexico                                                       | string       | App Step 2 |
            | page area                | privada                                                           | string       | App Step 2 |
            | language                 | ES                                                                | string       | App Step 2 |
            | channel                  | online                                                            | string       | App Step 2 |
            | site app name            | App BBVA Mexico                                                   | string       | App Step 2 |
            | project name             | Glomo                                                             | string       | App Step 2 |
            | level 1                  | tarjetas                                                          | string       | App Step 2 |
            | level 2                  | credito                                                           | string       | App Step 2 |
            | level 3                  | cambiar fecha de pago                                             | string       | App Step 2 |
            | level 4                  | 2 otp                                                             | string       | App Step 2 |
            | page name                | app:privada:personas:tarjetas:credito:cambiar fecha de pago:2 otp | string       | App Step 2 |
            | device mobile            | si                                                                | string       | App Step 2 |
            | device root              |                                                                   | string       | App Step 2 |
            | user segment global      | 003001                                                            | string       | App Step 2 |
            | user userState           | logado                                                            | string       | App Step 2 |
            | profile ID               | profileID                                                         | regexp named | App Step 2 |
            | user gender              | gender                                                            | regexp named | App Step 2 |
            | user age                 | age                                                               | regexp named | App Step 2 |
            | fulfillment model        | online                                                            | string       | App Step 2 |
            | application step         | 2 otp                                                             | string       | App Step 2 |
            | application name         | cambiar fecha de pago                                             | string       | App Step 2 |
            | application type         | operativa                                                         | string       | App Step 2 |
            | global application       | cut off date card                                                 | string       | App Step 2 |
            | custom fields            | firma:token                                                       | string       | App Step 2 |
            | product subtype          | tarjetas credito                                                  | string       | App Step 2 |
            | product primary category | tarjetas                                                          | string       | App Step 2 |
            | internal campaign        |                                                                   | empty array  | App Step 2 |
            | optimization attributes  |                                                                   | empty array  | App Step 2 |

    @ANA_EVENT_COD005
    @analytics
    @web @ios @android
    @MX @backend(test) @vbank @web-done
    Scenario: Pending Hiring - App Completed
        Given a user with the following criteria
            | criteria            |
            | cut off date        |
            | change cut off date |
        And the user accesses to the "operative" "credit" card product detail
        And the user accesses to cut off date operative
        And the analytics interceptor service is initiated
        When the user "changes" card cut off date operation
        Then the analytics events contains the following variables
            | item                     | value                                                                      | type         | event         |
            | analytics                | analytics/glomo_base                                                       | json schema  | App Completed |
            | version DL               | 20250414_5.0                                                               | string       | App Completed |
            | page instance ID         | de                                                                         | string       | App Completed |
            | sysEnv                   | app                                                                        | string       | App Completed |
            | page segment             | personas                                                                   | string       | App Completed |
            | page intent              | transaccion                                                                | string       | App Completed |
            | business unit            | BBVA Mexico                                                                | string       | App Completed |
            | page area                | privada                                                                    | string       | App Completed |
            | language                 | ES                                                                         | string       | App Completed |
            | channel                  | online                                                                     | string       | App Completed |
            | site app name            | App BBVA Mexico                                                            | string       | App Completed |
            | project name             | Glomo                                                                      | string       | App Completed |
            | level 1                  | tarjetas                                                                   | string       | App Completed |
            | level 2                  | credito                                                                    | string       | App Completed |
            | level 3                  | cambiar fecha de pago                                                      | string       | App Completed |
            | level 4                  | pagina exitosa                                                             | string       | App Completed |
            | page name                | app:privada:personas:tarjetas:credito:cambiar fecha de pago:pagina exitosa | string       | App Completed |
            | device mobile            | si                                                                         | string       | App Completed |
            | device root              |                                                                            | string       | App Completed |
            | user segment global      | 003001                                                                     | string       | App Completed |
            | user userState           | logado                                                                     | string       | App Completed |
            | profile ID               | profileID                                                                  | regexp named | App Completed |
            | user gender              | gender                                                                     | regexp named | App Completed |
            | user age                 | age                                                                        | regexp named | App Completed |
            | fulfillment model        | online                                                                     | string       | App Completed |
            | application step         | pagina exitosa                                                             | string       | App Completed |
            | application state        | en revision                                                                | string       | App Completed |
            | application name         | cambiar fecha de pago                                                      | string       | App Completed |
            | application type         | operativa                                                                  | string       | App Completed |
            | global application       | cut off date card                                                          | string       | App Completed |
            | custom fields            | firma:token                                                                | string       | App Completed |
            | product state            | en revision                                                                | string       | App Completed |
            | product subtype          | tarjetas credito                                                           | string       | App Completed |
            | product primary category | tarjetas                                                                   | string       | App Completed |
            | internal campaign        |                                                                            | empty array  | App Completed |
            | optimization attributes  |                                                                            | empty array  | App Completed |

    @ANA_EVENT_COD006
    @analytics
    @web @ios @android
    @MX @backend(test) @vbank @web-done
    Scenario: Confirmed Hiring - App Completed
        Given a user with the following criteria
            | criteria            |
            | cut off date        |
            | change cut off date |
        And the user accesses to the "operative" "credit" card product detail
        And the user accesses to cut off date operative
        And the analytics interceptor service is initiated
        When the user "changes" card cut off date operation
        Then the analytics events contains the following variables
            | item                     | value                                                                      | type         | event         |
            | analytics                | analytics/glomo_base                                                       | json schema  | App Completed |
            | version DL               | 20250414_5.0                                                               | string       | App Completed |
            | page instance ID         | de                                                                         | string       | App Completed |
            | sysEnv                   | app                                                                        | string       | App Completed |
            | page segment             | personas                                                                   | string       | App Completed |
            | page intent              | transaccion                                                                | string       | App Completed |
            | business unit            | BBVA Mexico                                                                | string       | App Completed |
            | page area                | privada                                                                    | string       | App Completed |
            | language                 | ES                                                                         | string       | App Completed |
            | channel                  | online                                                                     | string       | App Completed |
            | site app name            | App BBVA Mexico                                                            | string       | App Completed |
            | project name             | Glomo                                                                      | string       | App Completed |
            | level 1                  | tarjetas                                                                   | string       | App Completed |
            | level 2                  | credito                                                                    | string       | App Completed |
            | level 3                  | cambiar fecha de pago                                                      | string       | App Completed |
            | level 4                  | pagina exitosa                                                             | string       | App Completed |
            | page name                | app:privada:personas:tarjetas:credito:cambiar fecha de pago:pagina exitosa | string       | App Completed |
            | device mobile            | si                                                                         | string       | App Completed |
            | device root              |                                                                            | string       | App Completed |
            | user segment global      | 003001                                                                     | string       | App Completed |
            | user userState           | logado                                                                     | string       | App Completed |
            | profile ID               | profileID                                                                  | regexp named | App Completed |
            | user gender              | gender                                                                     | regexp named | App Completed |
            | user age                 | age                                                                        | regexp named | App Completed |
            | fulfillment model        | online                                                                     | string       | App Completed |
            | application step         | pagina exitosa                                                             | string       | App Completed |
            | application state        | finalizado                                                                 | string       | App Completed |
            | application name         | cambiar fecha de pago                                                      | string       | App Completed |
            | application type         | operativa                                                                  | string       | App Completed |
            | global application       | cut off date card                                                          | string       | App Completed |
            | custom fields            | firma:token                                                                | string       | App Completed |
            | product state            | finalizado                                                                 | string       | App Completed |
            | product subtype          | tarjetas credito                                                           | string       | App Completed |
            | product primary category | tarjetas                                                                   | string       | App Completed |
            | internal campaign        |                                                                            | empty array  | App Completed |
            | optimization attributes  |                                                                            | empty array  | App Completed |

    @ANA_EVENT_COD007
    @analytics
    @web @ios @android
    @MX @backend(test) @vbank @web-done
    Scenario: Pending payment - Page View
        Given a user with the following criteria
            | criteria                 |
            | cut off date             |
            | with out minimum payment |
        And the user accesses to the "operative" "credit" card product detail
        And the analytics interceptor service is initiated
        When the user accesses to cut off date operative
        Then the analytics events contains the following variables
            | item                    | value                                                                      | type             | event     |
            | analytics               | analytics/glomo_base                                                       | json schema      | Page View |
            | version DL              | 20250414_5.0                                                               | string           | Page View |
            | page instance ID        | de                                                                         | string           | Page View |
            | sysEnv                  | app                                                                        | string           | Page View |
            | page segment            | personas                                                                   | string           | Page View |
            | page intent             | informacion                                                                | string           | Page View |
            | business unit           | BBVA Mexico                                                                | string           | Page View |
            | page area               | privada                                                                    | string           | Page View |
            | language                | ES                                                                         | string           | Page View |
            | channel                 | online                                                                     | string           | Page View |
            | site app name           | App BBVA Mexico                                                            | string           | Page View |
            | project name            | Glomo                                                                      | string           | Page View |
            | level 1                 | tarjetas                                                                   | string           | Page View |
            | level 2                 | credito                                                                    | string           | Page View |
            | level 3                 | cambiar fecha de pago                                                      | string           | Page View |
            | level 4                 | pago pendiente                                                             | string           | Page View |
            | page name               | app:privada:personas:tarjetas:credito:cambiar fecha de pago:pago pendiente | string           | Page View |
            | device mobile           | si                                                                         | string           | Page View |
            | device root             |                                                                            | string           | Page View |
            | user segment global     | 003001                                                                     | string           | Page View |
            | user userState          | logado                                                                     | string           | Page View |
            | profile ID              | profileID                                                                  | regexp named     | Page View |
            | user gender             | gender                                                                     | regexp named     | Page View |
            | user age                | age                                                                        | regexp named     | Page View |
            | internal campaign       |                                                                            | empty array      | Page View |
            | optimization attributes |                                                                            | empty array      | Page View |
            | application             |                                                                            | empty str object | Page View |
            | products attributes     |                                                                            | empty array      | Page View |

    @ANA_EVENT_COD008
    @analytics
    @web @ios @android
    @MX @backend(test) @vbank @web-done
    Scenario: Not posible change date - Page View
        Given a user with the following criteria
            | criteria                     |
            | cut off date                 |
            | not eligible to apply change |
        And the user accesses to the "operative" "credit" card product detail
        And the analytics interceptor service is initiated
        When the user accesses to cut off date operative
        Then the analytics events contains the following variables
            | item                    | value                                                                                   | type             | event     |
            | analytics               | analytics/glomo_base                                                                    | json schema      | Page View |
            | version DL              | 20250414_5.0                                                                            | string           | Page View |
            | page instance ID        | de                                                                                      | string           | Page View |
            | sysEnv                  | app                                                                                     | string           | Page View |
            | page segment            | personas                                                                                | string           | Page View |
            | page intent             | informacion                                                                             | string           | Page View |
            | business unit           | BBVA Mexico                                                                             | string           | Page View |
            | page area               | privada                                                                                 | string           | Page View |
            | language                | ES                                                                                      | string           | Page View |
            | channel                 | online                                                                                  | string           | Page View |
            | site app name           | App BBVA Mexico                                                                         | string           | Page View |
            | project name            | Glomo                                                                                   | string           | Page View |
            | level 1                 | tarjetas                                                                                | string           | Page View |
            | level 2                 | credito                                                                                 | string           | Page View |
            | level 3                 | cambiar fecha de pago                                                                   | string           | Page View |
            | level 4                 | no es posible cambiar fecha                                                             | string           | Page View |
            | page name               | app:privada:personas:tarjetas:credito:cambiar fecha de pago:no es posible cambiar fecha | string           | Page View |
            | device mobile           | si                                                                                      | string           | Page View |
            | device root             |                                                                                         | string           | Page View |
            | user segment global     | 003001                                                                                  | string           | Page View |
            | user userState          | logado                                                                                  | string           | Page View |
            | profile ID              | profileID                                                                               | regexp named     | Page View |
            | user gender             | gender                                                                                  | regexp named     | Page View |
            | user age                | age                                                                                     | regexp named     | Page View |
            | internal campaign       |                                                                                         | empty array      | Page View |
            | optimization attributes |                                                                                         | empty array      | Page View |
            | application             |                                                                                         | empty str object | Page View |
            | products attributes     |                                                                                         | empty array      | Page View |

    @ANA_EVENT_COD009
    @analytics
    @web @ios @android
    @MX @backend(test) @vbank @web-done
    Scenario: Pending change - Page View
        Given a user with the following criteria
            | criteria                |
            | cut off date            |
            | has pending change date |
        And the user accesses to the "operative" "credit" card product detail
        And the analytics interceptor service is initiated
        When the user accesses to cut off date operative
        Then the analytics events contains the following variables
            | item                    | value                                                                                 | type             | event     |
            | analytics               | analytics/glomo_base                                                                  | json schema      | Page View |
            | version DL              | 20250414_5.0                                                                          | string           | Page View |
            | page instance ID        | de                                                                                    | string           | Page View |
            | sysEnv                  | app                                                                                   | string           | Page View |
            | page segment            | personas                                                                              | string           | Page View |
            | page intent             | informacion                                                                           | string           | Page View |
            | business unit           | BBVA Mexico                                                                           | string           | Page View |
            | page area               | privada                                                                               | string           | Page View |
            | language                | ES                                                                                    | string           | Page View |
            | channel                 | online                                                                                | string           | Page View |
            | site app name           | App BBVA Mexico                                                                       | string           | Page View |
            | project name            | Glomo                                                                                 | string           | Page View |
            | level 1                 | tarjetas                                                                              | string           | Page View |
            | level 2                 | credito                                                                               | string           | Page View |
            | level 3                 | cambiar fecha de pago                                                                 | string           | Page View |
            | level 4                 | cambio se aplicara pronto                                                             | string           | Page View |
            | page name               | app:privada:personas:tarjetas:credito:cambiar fecha de pago:cambio se aplicara pronto | string           | Page View |
            | device mobile           | si                                                                                    | string           | Page View |
            | device root             |                                                                                       | string           | Page View |
            | user segment global     | 003001                                                                                | string           | Page View |
            | user userState          | logado                                                                                | string           | Page View |
            | profile ID              | profileID                                                                             | regexp named     | Page View |
            | user age                | age                                                                                   | regexp named     | Page View |
            | user gender             | gender                                                                                | regexp named     | Page View |
            | internal campaign       |                                                                                       | empty array      | Page View |
            | optimization attributes |                                                                                       | empty array      | Page View |
            | application             |                                                                                       | empty str object | Page View |
            | products attributes     |                                                                                       | empty array      | Page View |

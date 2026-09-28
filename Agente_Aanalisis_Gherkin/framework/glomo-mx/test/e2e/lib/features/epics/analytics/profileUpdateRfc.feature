@UpdateRfcAnalytics
Feature: Analytics - Profile Update Rfc

    @ANA_EVENT_PUR001
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: Profile Update Rfc - APP ON CLICK START
        Given a user with the following criteria
            | criteria        |
            | update rfc user |
        And the user accesses to profile screen
        And the analytics interceptor service is initiated
        When the user accesses to update cfdis
        Then the analytics events contains the following variables
            | item                    | value                       | type         |  event             |
            | analytics               | analytics/glomo_base        | json schema  | App On Click Start |
            | version DL              | 20250414_5.0                | string       | App On Click Start |
            | page name               | app:privada:personas:perfil | string       | App On Click Start |
            | level 1                 | perfil                      | string       | App On Click Start |
            | language                | ES                          | string       | App On Click Start |
            | page area               | privada                     | string       | App On Click Start |
            | page intent             | informacion                 | string       | App On Click Start |
            | channel                 | online                      | string       | App On Click Start |
            | page instance ID        | de                          | string       | App On Click Start |
            | page info version       | appVersion                  | regexp named | App On Click Start |
            | page segment            | personas                    | string       | App On Click Start |
            | sysEnv                  | app                         | string       | App On Click Start |
            | business unit           | BBVA Mexico                 | string       | App On Click Start |
            | site app name           | App BBVA Mexico             | string       | App On Click Start |
            | project name            | Glomo                       | string       | App On Click Start |
            | device mobile           | si                          | string       | App On Click Start |
            | user userState          | logado                      | string       | App On Click Start |
            | user segment global     | 003001                      | string       | App On Click Start |
            | profile ID              | profileID                   | regexp named | App On Click Start |
            | user age                | age                         | regexp named | App On Click Start |
            | user gender             | gender                      | regexp named | App On Click Start |
            | global application      | digital tax receipt         | string       | App On Click Start |
            | application name        | comprobante fiscal cfdi     | string       | App On Click Start |
            | application type        | autogestion                 | string       | App On Click Start |
            | application step        | solicitud ajuste cfdi       | string       | App On Click Start |
            | fulfillment model       | online                      | string       | App On Click Start |
            | internal campaign       |                             | empty array  | App On Click Start |
            | optimization attributes |                             | empty array  | App On Click Start |
            | products attributes     |                             | empty array  | App On Click Start |

    @ANA_EVENT_PUR002
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: Profile Update Rfc - APP PAGE VISIT
        Given a user with the following criteria
            | criteria        |
            | update rfc user |
        And the user accesses to profile screen
        And the analytics interceptor service is initiated
        When the user accesses to update cfdis
        Then the analytics events contains the following variables
            | item                    | value                                | type         |  event         |
            | analytics               | analytics/glomo_base                 | json schema  | App Page Visit |
            | version DL              | 20250414_5.0                         | string       | App Page Visit |
            | page name               | app:privada:personas:solicitud ajuste cfdi:1 seleccion de producto   | string | App Page Visit |
            | level 1                 | solicitud ajuste cfdi                | string       | App Page Visit |
            | level 2                 | 1 seleccion de producto              | string       | App Page Visit |
            | language                | ES                                   | string       | App Page Visit |
            | page area               | privada                              | string       | App Page Visit |
            | page intent             | informacion                          | string       | App Page Visit |
            | channel                 | online                               | string       | App Page Visit |
            | page instance ID        | de                                   | string       | App Page Visit |
            | page info version       | appVersion                           | regexp named | App Page Visit |
            | page segment            | personas                             | string       | App Page Visit |
            | sysEnv                  | app                                  | string       | App Page Visit |
            | business unit           | BBVA Mexico                          | string       | App Page Visit |
            | site app name           | App BBVA Mexico                      | string       | App Page Visit |
            | project name            | Glomo                                | string       | App Page Visit |
            | device mobile           | si                                   | string       | App Page Visit |
            | user userState          | logado                               | string       | App Page Visit |
            | user segment global     | 003001                               | string       | App Page Visit |
            | profile ID              | profileID                            | regexp named | App Page Visit |
            | user age                | age                                  | regexp named | App Page Visit |
            | user gender             | gender                               | regexp named | App Page Visit |
            | global application      | digital tax receipt                  | string       | App Page Visit |
            | application name        | comprobante fiscal cfdi              | string       | App Page Visit |
            | application type        | autogestion                          | string       | App Page Visit |
            | application step        | 1 seleccion de producto              | string       | App Page Visit |
            | fulfillment model       | online                               | string       | App Page Visit |
            | internal campaign       |                                      | empty array  | App Page Visit |
            | optimization attributes |                                      | empty array  | App Page Visit |
            | products attributes     |                                      | empty array  | App Page Visit |

    @ANA_EVENT_PUR003
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: the user select one product - APP STARTED
        Given a user with the following criteria
            | criteria        |
            | update rfc user |
        And  the user access to update rfc with account "normal"
        And the analytics interceptor service is initiated
        When the user selects product for cancelation and rebranding
        Then the analytics events contains the following variables
            | item                    | value                                | type         |  event      |
            | analytics               | analytics/glomo_base                 | json schema  | App Started |
            | version DL              | 20250414_5.0                         | string       | App Started |
            | page name               | app:privada:personas:solicitud ajuste cfdi:1 seleccion de producto| string | App Started |
            | level 1                 | solicitud ajuste cfdi                | string       | App Started |
            | level 2                 | 1 seleccion de producto              | string       | App Started |
            | language                | ES                                   | string       | App Started |
            | page area               | privada                              | string       | App Started |
            | page intent             | informacion                          | string       | App Started |
            | channel                 | online                               | string       | App Started |
            | page instance ID        | de                                   | string       | App Started |
            | page info version       | appVersion                           | regexp named | App Started |
            | page segment            | personas                             | string       | App Started |
            | sysEnv                  | app                                  | string       | App Started |
            | business unit           | BBVA Mexico                          | string       | App Started |
            | site app name           | App BBVA Mexico                      | string       | App Started |
            | project name            | Glomo                                | string       | App Started |
            | device mobile           | si                                   | string       | App Started |
            | user userState          | logado                               | string       | App Started |
            | user segment global     | 003001                               | string       | App Started |
            | profile ID              | profileID                            | regexp named | App Started |
            | user age                | age                                  | regexp named | App Started |
            | user gender             | gender                               | regexp named | App Started |
            | global application      | digital tax receipt                  | string       | App Started |
            | application name        | comprobante fiscal cfdi              | string       | App Started |
            | application type        | autogestion                          | string       | App Started |
            | application step        | selecciona un producto               | string       | App Started |
            | fulfillment model       | online                               | string       | App Started |
            | internal campaign       |                                      | empty array  | App Started |
            | optimization attributes |                                      | empty array  | App Started |
            | products attributes     |                                      | empty array  | App Started |

    @ANA_EVENT_PUR004
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: the user accesses to screen select period - APP STEP 2
        Given a user with the following criteria
            | criteria        |
            | update rfc user |
        And the user access to update rfc with account "normal"
        And the analytics interceptor service is initiated
        When the user selects product for cancelation and rebranding
        Then the analytics events contains the following variables
            | item                    | value                                | type         |  event     |
            | analytics               | analytics/glomo_base                 | json schema  | App Step 2 |
            | version DL              | 20250414_5.0                         | string       | App Step 2 |
            | page name               | app:privada:personas:solicitud ajuste cfdi:2 seleccion de periodo| string | App Step 2 |
            | level 1                 | solicitud ajuste cfdi                | string       | App Step 2 |
            | level 2                 | 2 seleccion de periodo               | string       | App Step 2 |
            | language                | ES                                   | string       | App Step 2 |
            | page area               | privada                              | string       | App Step 2 |
            | page intent             | informacion                          | string       | App Step 2 |
            | channel                 | online                               | string       | App Step 2 |
            | page instance ID        | de                                   | string       | App Step 2 |
            | page info version       | appVersion                           | regexp named | App Step 2 |
            | page segment            | personas                             | string       | App Step 2 |
            | sysEnv                  | app                                  | string       | App Step 2 |
            | business unit           | BBVA Mexico                          | string       | App Step 2 |
            | site app name           | App BBVA Mexico                      | string       | App Step 2 |
            | project name            | Glomo                                | string       | App Step 2 |
            | device mobile           | si                                   | string       | App Step 2 |
            | user userState          | logado                               | string       | App Step 2 |
            | user segment global     | 003001                               | string       | App Step 2 |
            | profile ID              | profileID                            | regexp named | App Step 2 |
            | user age                | age                                  | regexp named | App Step 2 |
            | user gender             | gender                               | regexp named | App Step 2 |
            | global application      | digital tax receipt                  | string       | App Step 2 |
            | application name        | comprobante fiscal cfdi              | string       | App Step 2 |
            | application type        | autogestion                          | string       | App Step 2 |
            | application step        | 2 seleccion de periodo               | string       | App Step 2 |
            | fulfillment model       | online                               | string       | App Step 2 |
            | internal campaign       |                                      | empty array  | App Step 2 |
            | optimization attributes |                                      | empty array  | App Step 2 |
            | products attributes     |                                      | empty array  | App Step 2 |

    @ANA_EVENT_PUR005
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: the user accesses to confirm CDFI screen - APP STEP 3
        Given a user with the following criteria
            | criteria        |
            | update rfc user |
        And the user starts the application at date:
            | hour  | 10   |
            | day   | 10   |
            | month | 10   |
            | year  | 2024 |
        And the user access to update rfc with account "normal"
        And the analytics interceptor service is initiated
        When the user requests cfdis with product for cancelation and rebranding
        Then the analytics events contains the following variables
            | item                    | value                                | type         |  event     |
            | analytics               | analytics/glomo_base                 | json schema  | App Step 3 |
            | version DL              | 20250414_5.0                         | string       | App Step 3 |
            | page name               | app:privada:personas:solicitud ajuste cfdi:3 confirmacion cfdi   | string | App Step 3 |
            | level 1                 | solicitud ajuste cfdi                | string       | App Step 3 |
            | level 2                 | 3 confirmacion cfdi                  | string       | App Step 3 |
            | language                | ES                                   | string       | App Step 3 |
            | page area               | privada                              | string       | App Step 3 |
            | page intent             | informacion                          | string       | App Step 3 |
            | channel                 | online                               | string       | App Step 3 |
            | page instance ID        | de                                   | string       | App Step 3 |
            | page info version       | appVersion                           | regexp named | App Step 3 |
            | page segment            | personas                             | string       | App Step 3 |
            | sysEnv                  | app                                  | string       | App Step 3 |
            | business unit           | BBVA Mexico                          | string       | App Step 3 |
            | site app name           | App BBVA Mexico                      | string       | App Step 3 |
            | project name            | Glomo                                | string       | App Step 3 |
            | device mobile           | si                                   | string       | App Step 3 |
            | user userState          | logado                               | string       | App Step 3 |
            | user segment global     | 003001                               | string       | App Step 3 |
            | profile ID              | profileID                            | regexp named | App Step 3 |
            | user age                | age                                  | regexp named | App Step 3 |
            | user gender             | gender                               | regexp named | App Step 3 |
            | global application      | digital tax receipt                  | string       | App Step 3 |
            | application name        | comprobante fiscal cfdi              | string       | App Step 3 |
            | application type        | autogestion                          | string       | App Step 3 |
            | application step        | 3 confirmacion cfdi                  | string       | App Step 3 |
            | fulfillment model       | online                               | string       | App Step 3 |
            | internal campaign       |                                      | empty array  | App Step 3 |
            | optimization attributes |                                      | empty array  | App Step 3 |
            | products attributes     |                                      | empty array  | App Step 3 |

    @ANA_EVENT_PUR006
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: the user accesses to terms and conditions screen - APP STEP 4
        Given a user with the following criteria
            | criteria        |
            | update rfc user |
        And the user starts the application at date:
            | hour  | 10   |
            | day   | 10   |
            | month | 10   |
            | year  | 2024 |
        And the user access to update rfc with account "normal"
        And the user requests cfdis with product for cancelation and rebranding
        And the analytics interceptor service is initiated
        When the user continues group cfdis
        Then the analytics events contains the following variables
            | item                    | value                                | type         |  event     |
            | analytics               | analytics/glomo_base                 | json schema  | App Step 4 |
            | version DL              | 20250414_5.0                         | string       | App Step 4 |
            | page name               | app:privada:personas:solicitud ajuste cfdi:4 terminos y condiciones | string       | App Step 4 |
            | level 1                 | solicitud ajuste cfdi                | string       | App Step 4 |
            | level 2                 | 4 terminos y condiciones             | string       | App Step 4 |
            | language                | ES                                   | string       | App Step 4 |
            | page area               | privada                              | string       | App Step 4 |
            | page intent             | informacion                          | string       | App Step 4 |
            | channel                 | online                               | string       | App Step 4 |
            | page instance ID        | de                                   | string       | App Step 4 |
            | page info version       | appVersion                           | regexp named | App Step 4 |
            | page segment            | personas                             | string       | App Step 4 |
            | sysEnv                  | app                                  | string       | App Step 4 |
            | business unit           | BBVA Mexico                          | string       | App Step 4 |
            | site app name           | App BBVA Mexico                      | string       | App Step 4 |
            | project name            | Glomo                                | string       | App Step 4 |
            | device mobile           | si                                   | string       | App Step 4 |
            | user userState          | logado                               | string       | App Step 4 |
            | user segment global     | 003001                               | string       | App Step 4 |
            | profile ID              | profileID                            | regexp named | App Step 4 |
            | user age                | age                                  | regexp named | App Step 4 |
            | user gender             | gender                               | regexp named | App Step 4 |
            | global application      | digital tax receipt                  | string       | App Step 4 |
            | application name        | comprobante fiscal cfdi              | string       | App Step 4 |
            | application type        | autogestion                          | string       | App Step 4 |
            | application step        | 4 terminos y condiciones             | string       | App Step 4 |
            | fulfillment model       | online                               | string       | App Step 4 |
            | internal campaign       |                                      | empty array  | App Step 4 |
            | optimization attributes |                                      | empty array  | App Step 4 |
            | products attributes     |                                      | empty array  | App Step 4 |

    @ANA_EVENT_PUR007
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: the user accesses to confirm adjustment screen - APP STEP 5
        Given a user with the following criteria
            | criteria        |
            | update rfc user |
        And the user starts the application at date:
            | hour  | 10   |
            | day   | 10   |
            | month | 10   |
            | year  | 2024 |
        And the user access to update rfc with account "normal"
        And the user requests cfdis with product for cancelation and rebranding
        And the user continues group cfdis
        And the analytics interceptor service is initiated
        When the user accepts terms and conditions of cancelation and rebranding
        Then the analytics events contains the following variables
            | item                    | value                                | type         |  event     |
            | analytics               | analytics/glomo_base                 | json schema  | App Step 5 |
            | version DL              | 20250414_5.0                         | string       | App Step 5 |
            | page name               | app:privada:personas:solicitud ajuste cfdi:5 confirmar ajuste    | string       | App Step 5 |
            | level 1                 | solicitud ajuste cfdi                | string       | App Step 5 |
            | level 2                 | 5 confirmar ajuste                   | string       | App Step 5 |
            | language                | ES                                   | string       | App Step 5 |
            | page area               | privada                              | string       | App Step 5 |
            | page intent             | informacion                          | string       | App Step 5 |
            | channel                 | online                               | string       | App Step 5 |
            | page instance ID        | de                                   | string       | App Step 5 |
            | page info version       | appVersion                           | regexp named | App Step 5 |
            | page segment            | personas                             | string       | App Step 5 |
            | sysEnv                  | app                                  | string       | App Step 5 |
            | business unit           | BBVA Mexico                          | string       | App Step 5 |
            | site app name           | App BBVA Mexico                      | string       | App Step 5 |
            | project name            | Glomo                                | string       | App Step 5 |
            | device mobile           | si                                   | string       | App Step 5 |
            | user userState          | logado                               | string       | App Step 5 |
            | user segment global     | 003001                               | string       | App Step 5 |
            | profile ID              | profileID                            | regexp named | App Step 5 |
            | user age                | age                                  | regexp named | App Step 5 |
            | user gender             | gender                               | regexp named | App Step 5 |
            | global application      | digital tax receipt                  | string       | App Step 5 |
            | application name        | comprobante fiscal cfdi              | string       | App Step 5 |
            | application type        | autogestion                          | string       | App Step 5 |
            | application step        | 5 confirmar ajuste                   | string       | App Step 5 |
            | fulfillment model       | online                               | string       | App Step 5 |
            | internal campaign       |                                      | empty array  | App Step 5 |
            | optimization attributes |                                      | empty array  | App Step 5 |
            | products attributes     |                                      | empty array  | App Step 5 |

    @ANA_EVENT_PUR008
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: the user accesses to success screen - APP COMPLETED
        Given a user with the following criteria
            | criteria        |
            | update rfc user |
        And the user starts the application at date:
            | hour  | 10   |
            | day   | 10   |
            | month | 10   |
            | year  | 2024 |
        And the user access to update rfc with account "normal"
        And the user requests cfdis with product for cancelation and rebranding
        And the user continues group cfdis
        And the user accepts terms and conditions of cancelation and rebranding
        And the analytics interceptor service is initiated
        When the user confirms the cancelation and rebranding cfdis
        Then the analytics events contains the following variables
            | item                    | value                                | type         |  event        |
            | analytics               | analytics/glomo_base                 | json schema  | App Completed |
            | version DL              | 20250414_5.0                         | string       | App Completed |
            | page name               | app:privada:personas:solicitud ajuste cfdi:pagina exitosa           | string | App Completed |
            | level 1                 | solicitud ajuste cfdi                | string       | App Completed |
            | level 2                 | pagina exitosa                       | string       | App Completed |
            | language                | ES                                   | string       | App Completed |
            | page area               | privada                              | string       | App Completed |
            | page intent             | informacion                          | string       | App Completed |
            | channel                 | online                               | string       | App Completed |
            | page instance ID        | de                                   | string       | App Completed |
            | page info version       | appVersion                           | regexp named | App Completed |
            | page segment            | personas                             | string       | App Completed |
            | sysEnv                  | app                                  | string       | App Completed |
            | business unit           | BBVA Mexico                          | string       | App Completed |
            | site app name           | App BBVA Mexico                      | string       | App Completed |
            | project name            | Glomo                                | string       | App Completed |
            | device mobile           | si                                   | string       | App Completed |
            | user userState          | logado                               | string       | App Completed |
            | user segment global     | 003001                               | string       | App Completed |
            | profile ID              | profileID                            | regexp named | App Completed |
            | user age                | age                                  | regexp named | App Completed |
            | user gender             | gender                               | regexp named | App Completed |
            | global application      | digital tax receipt                  | string       | App Completed |
            | application name        | comprobante fiscal cfdi              | string       | App Completed |
            | application type        | autogestion                          | string       | App Completed |
            | application step        | pagina exitosa                       | string       | App Completed |
            | application state       | finalizado                           | string       | App Completed |
            | fulfillment model       | online                               | string       | App Completed |
            | internal campaign       |                                      | empty array  | App Completed |
            | optimization attributes |                                      | empty array  | App Completed |
            | products attributes     |                                      | empty array  | App Completed |

    @ANA_EVENT_PUR009
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: the user accesses adjustment other cfdi - APP ON CLICK START
        Given a user with the following criteria
            | criteria        |
            | update rfc user |
        And the user starts the application at date:
            | hour  | 10   |
            | day   | 10   |
            | month | 10   |
            | year  | 2024 |
        And the user finalizes the cancellation and rebranding of a product
        And the analytics interceptor service is initiated
        When the user cancels and rebrands other product
        Then the analytics events contains the following variables
            | item                    | value                                | type         |  event             |
            | analytics               | analytics/glomo_base                 | json schema  | App On Click Start |
            | version DL              | 20250414_5.0                         | string       | App On Click Start |
            | page name               | app:privada:personas:solicitud ajuste cfdi:pagina exitosa                | string | App On Click Start |
            | level 1                 | solicitud ajuste cfdi                | string       | App On Click Start |
            | level 2                 | pagina exitosa                       | string       | App On Click Start |
            | language                | ES                                   | string       | App On Click Start |
            | page area               | privada                              | string       | App On Click Start |
            | page intent             | informacion                          | string       | App On Click Start |
            | channel                 | online                               | string       | App On Click Start |
            | page instance ID        | de                                   | string       | App On Click Start |
            | page info version       | appVersion                           | regexp named | App On Click Start |
            | page segment            | personas                             | string       | App On Click Start |
            | sysEnv                  | app                                  | string       | App On Click Start |
            | business unit           | BBVA Mexico                          | string       | App On Click Start |
            | site app name           | App BBVA Mexico                      | string       | App On Click Start |
            | project name            | Glomo                                | string       | App On Click Start |
            | device mobile           | si                                   | string       | App On Click Start |
            | user userState          | logado                               | string       | App On Click Start |
            | user segment global     | 003001                               | string       | App On Click Start |
            | profile ID              | profileID                            | regexp named | App On Click Start |
            | user age                | age                                  | regexp named | App On Click Start |
            | user gender             | gender                               | regexp named | App On Click Start |
            | global application      | digital tax receipt                  | string       | App On Click Start |
            | application name        | comprobante fiscal cfdi              | string       | App On Click Start |
            | application type        | autogestion                          | string       | App On Click Start |
            | application step        | solicitar otro ajuste                | string       | App On Click Start |
            | fulfillment model       | online                               | string       | App On Click Start |
            | internal campaign       |                                      | empty array  | App On Click Start |
            | optimization attributes |                                      | empty array  | App On Click Start |
            | products attributes     |                                      | empty array  | App On Click Start |

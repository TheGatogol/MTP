@requestDebitCardAnalytics
Feature: Analytics Request Debit Card

    @ANA_EVENT_RDC001
    @analytics
    @web @ios @android
    @vbank @backend(test)
    @web-done
    @MX
    Scenario: The user accesses to the request debit card screen - APP PAGE VISIT
        Given a user with the following criteria
            | criteria           |
            | debit card request |
        And the user accesses to dashboard
        And the analytics interceptor service is initiated
        When the user accesses to debit card request offer
        Then the analytics events contains the following variables
            | item                     | value                                                              | type         | event          |
            | analytics                | analytics/glomo_base                                               | json schema  | App Page Visit |
            | page name                | app:privada:personas:tarjetas:tarjeta de debito fisica:1 solicitud | string       | App Page Visit |
            | level 1                  | tarjetas                                                           | string       | App Page Visit |
            | level 2                  | tarjeta de debito fisica                                           | string       | App Page Visit |
            | level 3                  | 1 solicitud                                                        | string       | App Page Visit |
            | language                 | ES                                                                 | string       | App Page Visit |
            | page area                | privada                                                            | string       | App Page Visit |
            | page intent              | transaccion                                                        | string       | App Page Visit |
            | channel                  | online                                                             | string       | App Page Visit |
            | page instance ID         | de                                                                 | string       | App Page Visit |
            | version DL               | 20250414_5.0                                                       | string       | App Page Visit |
            | page info version        | appVersion                                                         | regexp named | App Page Visit |
            | page segment             | personas                                                           | string       | App Page Visit |
            | sysEnv                   | app                                                                | string       | App Page Visit |
            | business unit            | BBVA Mexico                                                        | string       | App Page Visit |
            | site app name            | App BBVA Mexico                                                    | string       | App Page Visit |
            | project name             | Glomo                                                              | string       | App Page Visit |
            | device mobile            | si                                                                 | string       | App Page Visit |
            | user userState           | logado                                                             | string       | App Page Visit |
            | profile ID               | profileID                                                          | regexp named | App Page Visit |
            | user segment global      | 003001                                                             | string       | App Page Visit |
            | global application       | credit card holder                                                 | string       | App Page Visit |
            | application name         | tarjeta de debito fisica                                           | string       | App Page Visit |
            | application type         | contratacion                                                       | string       | App Page Visit |
            | application step         | 1 solicitud                                                        | string       | App Page Visit |
            | fulfillment model        | online                                                             | string       | App Page Visit |
            | qualified visits         | true                                                               | string       | App Page Visit |
            | product primary category | tarjetas                                                           | string       | App Page Visit |
            | product subtype          | tarjetas debito                                                    | string       | App Page Visit |
            | product name             | tarjeta debito nomina                                              | string       | App Page Visit |
            | internal campaign        |                                                                    | empty array  | App Page Visit |
            | optimization attributes  |                                                                    | empty array  | App Page Visit |

    @ANA_EVENT_RDC002
    @analytics
    @web @ios @android
    @vbank @backend(test)
    @web-done
    @MX
    Scenario: The user makes step 1 of debit card request feature - APP STARTED
        Given a user with the following criteria
            | criteria           |
            | debit card request |
        And the user accesses to debit card request offer
        And the analytics interceptor service is initiated
        When the user is in the "delivery address" step of debit card request
        Then the analytics events contains the following variables
            | item                     | value                                                              | type         | event       |
            | analytics                | analytics/glomo_base                                               | json schema  | App Started |
            | page name                | app:privada:personas:tarjetas:tarjeta de debito fisica:1 solicitud | string       | App Started |
            | level 1                  | tarjetas                                                           | string       | App Started |
            | level 2                  | tarjeta de debito fisica                                           | string       | App Started |
            | level 3                  | 1 solicitud                                                        | string       | App Started |
            | language                 | ES                                                                 | string       | App Started |
            | page area                | privada                                                            | string       | App Started |
            | page intent              | transaccion                                                        | string       | App Started |
            | channel                  | online                                                             | string       | App Started |
            | page instance ID         | de                                                                 | string       | App Started |
            | version DL               | 20250414_5.0                                                       | string       | App Started |
            | page info version        | appVersion                                                         | regexp named | App Started |
            | page segment             | personas                                                           | string       | App Started |
            | sysEnv                   | app                                                                | string       | App Started |
            | business unit            | BBVA Mexico                                                        | string       | App Started |
            | site app name            | App BBVA Mexico                                                    | string       | App Started |
            | project name             | Glomo                                                              | string       | App Started |
            | device mobile            | si                                                                 | string       | App Started |
            | user userState           | logado                                                             | string       | App Started |
            | profile ID               | profileID                                                          | regexp named | App Started |
            | user segment global      | 003001                                                             | string       | App Started |
            | global application       | credit card holder                                                 | string       | App Started |
            | application name         | tarjeta de debito fisica                                           | string       | App Started |
            | application type         | contratacion                                                       | string       | App Started |
            | application step         | lo quiero                                                          | string       | App Started |
            | fulfillment model        | online                                                             | string       | App Started |
            | product primary category | tarjetas                                                           | string       | App Started |
            | product subtype          | tarjetas debito                                                    | string       | App Started |
            | product name             | tarjeta debito nomina                                              | string       | App Started |
            | internal campaign        |                                                                    | empty array  | App Started |
            | optimization attributes  |                                                                    | empty array  | App Started |

    @ANA_EVENT_RDC003
    @analytics
    @web @ios @android
    @vbank @backend(test)
    @web-done
    @MX
    Scenario: The user makes step 2 of debit card request feature - APP STEP2
        Given a user with the following criteria
            | criteria           |
            | debit card request |
        And the user accesses to debit card request offer
        And the analytics interceptor service is initiated
        When the user is in the "shipping summary" step of debit card request
        Then the analytics events contains the following variables
            | item                     | value                                                                         | type         | event      |
            | analytics                | analytics/glomo_base                                                          | json schema  | App Step 2 |
            | page name                | app:privada:personas:tarjetas:tarjeta de debito fisica:2 direccion de entrega | string       | App Step 2 |
            | level 1                  | tarjetas                                                                      | string       | App Step 2 |
            | level 2                  | tarjeta de debito fisica                                                      | string       | App Step 2 |
            | level 3                  | 2 direccion de entrega                                                        | string       | App Step 2 |
            | language                 | ES                                                                            | string       | App Step 2 |
            | page area                | privada                                                                       | string       | App Step 2 |
            | page intent              | transaccion                                                                   | string       | App Step 2 |
            | channel                  | online                                                                        | string       | App Step 2 |
            | page instance ID         | de                                                                            | string       | App Step 2 |
            | version DL               | 20250414_5.0                                                                  | string       | App Step 2 |
            | page info version        | appVersion                                                                    | regexp named | App Step 2 |
            | page segment             | personas                                                                      | string       | App Step 2 |
            | sysEnv                   | app                                                                           | string       | App Step 2 |
            | business unit            | BBVA Mexico                                                                   | string       | App Step 2 |
            | site app name            | App BBVA Mexico                                                               | string       | App Step 2 |
            | project name             | Glomo                                                                         | string       | App Step 2 |
            | device mobile            | si                                                                            | string       | App Step 2 |
            | user userState           | logado                                                                        | string       | App Step 2 |
            | profile ID               | profileID                                                                     | regexp named | App Step 2 |
            | user segment global      | 003001                                                                        | string       | App Step 2 |
            | global application       | credit card holder                                                            | string       | App Step 2 |
            | application name         | tarjeta de debito fisica                                                      | string       | App Step 2 |
            | application type         | contratacion                                                                  | string       | App Step 2 |
            | application step         | 2 direccion de entrega                                                        | string       | App Step 2 |
            | fulfillment model        | online                                                                        | string       | App Step 2 |
            | product primary category | tarjetas                                                                      | string       | App Step 2 |
            | product subtype          | tarjetas debito                                                               | string       | App Step 2 |
            | product name             | tarjeta debito nomina                                                         | string       | App Step 2 |
            | internal campaign        |                                                                               | empty array  | App Step 2 |
            | optimization attributes  |                                                                               | empty array  | App Step 2 |

    @ANA_EVENT_RDC004
    @analytics
    @web @ios @android
    @vbank @backend(test)
    @web-done
    @MX
    Scenario: The user makes step 2 of debit card request feature - HUELLA OTP
        Given a user with the following criteria
            | criteria           |
            | debit card request |
        And the user is in the "shipping summary" step of debit card request
        And the analytics interceptor service is initiated
        When the user confirms contract of debit card request
        Then the analytics events contains the following variables
            | item                     | value                                                        | type         | event      |
            | analytics                | analytics/glomo_base                                         | json schema  | App Step 4 |
            | page name                | app:privada:personas:tarjetas:tarjeta de debito fisica:4 otp | string       | App Step 4 |
            | level 1                  | tarjetas                                                     | string       | App Step 4 |
            | level 2                  | tarjeta de debito fisica                                     | string       | App Step 4 |
            | level 3                  | 4 otp                                                        | string       | App Step 4 |
            | language                 | ES                                                           | string       | App Step 4 |
            | page area                | privada                                                      | string       | App Step 4 |
            | page intent              | transaccion                                                  | string       | App Step 4 |
            | channel                  | online                                                       | string       | App Step 4 |
            | page instance ID         | de                                                           | string       | App Step 4 |
            | version DL               | 20250414_5.0                                                 | string       | App Step 4 |
            | page info version        | appVersion                                                   | regexp named | App Step 4 |
            | page segment             | personas                                                     | string       | App Step 4 |
            | sysEnv                   | app                                                          | string       | App Step 4 |
            | business unit            | BBVA Mexico                                                  | string       | App Step 4 |
            | site app name            | App BBVA Mexico                                              | string       | App Step 4 |
            | project name             | Glomo                                                        | string       | App Step 4 |
            | device mobile            | si                                                           | string       | App Step 4 |
            | user userState           | logado                                                       | string       | App Step 4 |
            | profile ID               | profileID                                                    | regexp named | App Step 4 |
            | user segment global      | 003001                                                       | string       | App Step 4 |
            | global application       | credit card holder                                           | string       | App Step 4 |
            | application name         | tarjeta de debito fisica                                     | string       | App Step 4 |
            | application type         | contratacion                                                 | string       | App Step 4 |
            | application step         | 4 otp                                                        | string       | App Step 4 |
            | fulfillment model        | online                                                       | string       | App Step 4 |
            | product primary category | tarjetas                                                     | string       | App Step 4 |
            | product subtype          | tarjetas debito                                              | string       | App Step 4 |
            | product name             | tarjeta debito nomina                                        | string       | App Step 4 |
            | internal campaign        |                                                              | empty array  | App Step 4 |
            | optimization attributes  |                                                              | empty array  | App Step 4 |

    @ANA_EVENT_RDC005
    @analytics
    @web @ios @android
    @vbank @backend(test)
    @web-done
    @MX
    Scenario: The user successfully completes debit card request - APP COMPLETE
        Given a user with the following criteria
            | criteria           |
            | debit card request |
        And the user is in the "shipping summary" step of debit card request
        And the user confirms contract of debit card request
        And the analytics interceptor service is initiated
        When the user confirms the sms key to finalize debit card request
        Then the analytics events contains the following variables
            | item                         | value                                                                 | type         | event         |
            | analytics                    | analytics/glomo_base                                                  | json schema  | App Completed |
            | page name                    | app:privada:personas:tarjetas:tarjeta de debito fisica:pagina exitosa | string       | App Completed |
            | level 1                      | tarjetas                                                              | string       | App Completed |
            | level 2                      | tarjeta de debito fisica                                              | string       | App Completed |
            | level 3                      | pagina exitosa                                                        | string       | App Completed |
            | language                     | ES                                                                    | string       | App Completed |
            | page area                    | privada                                                               | string       | App Completed |
            | page intent                  | transaccion                                                           | string       | App Completed |
            | channel                      | online                                                                | string       | App Completed |
            | page instance ID             | de                                                                    | string       | App Completed |
            | version DL                   | 20250414_5.0                                                          | string       | App Completed |
            | page info version            | appVersion                                                            | regexp named | App Completed |
            | page segment                 | personas                                                              | string       | App Completed |
            | sysEnv                       | app                                                                   | string       | App Completed |
            | business unit                | BBVA Mexico                                                           | string       | App Completed |
            | site app name                | App BBVA Mexico                                                       | string       | App Completed |
            | project name                 | Glomo                                                                 | string       | App Completed |
            | device mobile                | si                                                                    | string       | App Completed |
            | user userState               | logado                                                                | string       | App Completed |
            | profile ID                   | profileID                                                             | regexp named | App Completed |
            | user segment global          | 003001                                                                | string       | App Completed |
            | global application           | credit card holder                                                    | string       | App Completed |
            | application name             | tarjeta de debito fisica                                              | string       | App Completed |
            | application type             | contratacion                                                          | string       | App Completed |
            | application step             | pagina exitosa                                                        | string       | App Completed |
            | fulfillment model            | online                                                                | string       | App Completed |
            | application state            | contratado                                                            | string       | App Completed |
            | application operation number | 3158060811                                                            | string       | App Completed |
            | product primary category     | tarjetas                                                              | string       | App Completed |
            | product subtype              | tarjetas debito                                                       | string       | App Completed |
            | product name                 | tarjeta debito nomina                                                 | string       | App Completed |
            | product state                | finalizado                                                            | string       | App Completed |
            | internal campaign            |                                                                       | empty array  | App Completed |
            | optimization attributes      |                                                                       | empty array  | App Completed |
            | custom fields                | firma:token                                                           | string       | App Completed |

    @ANA_EVENT_RDC006
    @analytics
    @web @ios @android
    @vbank @backend(test)
    @web-done
    @MX
    Scenario: The user makes step 1 and tap on show delivery address of debit card request feature - HUELLA ADDRESS UNMASKED
        Given a user with the following criteria
            | criteria           |
            | debit card request |
        And the user is in the "delivery address" step of debit card request
        And the analytics interceptor service is initiated
        And the user tap on show delivery address
        When the sms key "12345678" is entered
        Then the analytics events contains the following variables
            | item                    | value                                                                         | type             | event         |
            | analytics               | analytics/glomo_base                                                          | json schema      | Internal Link |
            | page name               | app:privada:personas:tarjetas:tarjeta de debito fisica:2 direccion de entrega | string           | Internal Link |
            | level 1                 | tarjetas                                                                      | string           | Internal Link |
            | level 2                 | tarjeta de debito fisica                                                      | string           | Internal Link |
            | level 3                 | 2 direccion de entrega                                                        | string           | Internal Link |
            | language                | ES                                                                            | string           | Internal Link |
            | page area               | privada                                                                       | string           | Internal Link |
            | page intent             | transaccion                                                                   | string           | Internal Link |
            | channel                 | online                                                                        | string           | Internal Link |
            | page instance ID        | de                                                                            | string           | Internal Link |
            | version DL              | 20250414_5.0                                                                  | string           | Internal Link |
            | page info version       | appVersion                                                                    | regexp named     | Internal Link |
            | page segment            | personas                                                                      | string           | Internal Link |
            | sysEnv                  | app                                                                           | string           | Internal Link |
            | business unit           | BBVA Mexico                                                                   | string           | Internal Link |
            | site app name           | App BBVA Mexico                                                               | string           | Internal Link |
            | project name            | Glomo                                                                         | string           | Internal Link |
            | device mobile           | si                                                                            | string           | Internal Link |
            | user userState          | logado                                                                        | string           | Internal Link |
            | profile ID              | profileID                                                                     | regexp named     | Internal Link |
            | user segment global     | 003001                                                                        | string           | Internal Link |
            | internal campaign       |                                                                               | empty array      | Internal Link |
            | optimization attributes |                                                                               | empty array      | Internal Link |
            | application             |                                                                               | empty str object | Internal Link |
            | products attributes     |                                                                               | empty array      | Internal Link |
            | link name               | mostrar datos                                                                 | string           | Internal Link |

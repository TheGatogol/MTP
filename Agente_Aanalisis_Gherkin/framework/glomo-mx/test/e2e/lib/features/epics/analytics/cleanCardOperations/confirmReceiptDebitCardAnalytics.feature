@confirmReceiptDebitCardAnalytics
Feature: Analytics Clean Card Confirm Receipt Debit Card

    @ANA_EVENT_CRDC001
    @analytics
    @MX
    @vbank
    @backend(test)
    @web-done
    @web @android @ios
    Scenario: Access the tdd receipt confirmation flow
        Given a user with the following criteria
            | criteria                    |
            | debit card pending delivery |
            | debit card confirmation     |
        And the user accesses to the "pending delivery virtual tdd" "debit" card product detail
        And the user accesses the entry point consult and confirm with "delivered"
        And the analytics interceptor service is initiated
        And the sms key "12345678" is entered
        When the user accesses the link confirm receipt
        Then the analytics events contains the following variables:
            | item                     | value                                                                               | type         | event          |
            | analytics                | analytics/glomo_base                                                                | json schema  | App Page Visit |
            | page name                | app:privada:personas:tarjetas:recepcion tarjeta de debito fisica:1 tarjeta recibida | string       | App Page Visit |
            | level 1                  | tarjetas                                                                            | string       | App Page Visit |
            | level 2                  | recepcion tarjeta de debito fisica                                                  | string       | App Page Visit |
            | level 3                  | 1 tarjeta recibida                                                                  | string       | App Page Visit |
            | language                 | ES                                                                                  | string       | App Page Visit |
            | page area                | privada                                                                             | string       | App Page Visit |
            | page intent              | transaccion                                                                         | string       | App Page Visit |
            | channel                  | online                                                                              | string       | App Page Visit |
            | page instance ID         | de                                                                                  | string       | App Page Visit |
            | version DL               | 20250414_5.0                                                                        | string       | App Page Visit |
            | page info version        | appVersion                                                                          | regexp named | App Page Visit |
            | page segment             | personas                                                                            | string       | App Page Visit |
            | sysEnv                   | app                                                                                 | string       | App Page Visit |
            | business unit            | BBVA Mexico                                                                         | string       | App Page Visit |
            | site app name            | App BBVA Mexico                                                                     | string       | App Page Visit |
            | project name             | Glomo                                                                               | string       | App Page Visit |
            | device mobile            | si                                                                                  | string       | App Page Visit |
            | user userState           | logado                                                                              | string       | App Page Visit |
            | profile ID               | profileID                                                                           | regexp named | App Page Visit |
            | user segment global      | 003001                                                                              | string       | App Page Visit |
            | user gender              | gender                                                                              | regexp named | App Page Visit |
            | user age                 | age                                                                                 | regexp named | App Page Visit |
            | global application       | credit card holder                                                                  | string       | App Page Visit |
            | application name         | recepcion tarjeta de debito fisica                                                  | string       | App Page Visit |
            | application type         | operativa                                                                           | string       | App Page Visit |
            | application step         | 1 tarjeta recibida                                                                  | string       | App Page Visit |
            | fulfillment model        | online                                                                              | string       | App Page Visit |
            | product primary category | tarjetas                                                                            | string       | App Page Visit |
            | product subtype          | tarjetas debito                                                                     | string       | App Page Visit |
            | internal campaign        |                                                                                     | empty array  | App Page Visit |
            | optimization attributes  |                                                                                     | empty array  | App Page Visit |

    @ANA_EVENT_CRDC002
    @analytics
    @MX
    @vbank
    @backend(test)
    @web-done
    @web @android @ios
    Scenario: Agree to scan the qr code of your physical card for confirmation
        Given a user with the following criteria
            | criteria                    |
            | debit card pending delivery |
            | debit card confirmation     |
        And the user accesses to the "pending delivery virtual tdd" "debit" card product detail
        And the user accesses the entry point consult and confirm with "delivered"
        And the analytics interceptor service is initiated
        And the sms key "12345678" is entered
        And the user accesses the link confirm receipt
        When the user accesses to native scan reader
        Then the analytics events contains the following variables:
            | item                     | value                                                                      | type         | event      |
            | analytics                | analytics/glomo_base                                                       | json schema  | App Step 2 |
            | page name                | app:privada:personas:tarjetas:recepcion tarjeta de debito fisica:2 escaneo | string       | App Step 2 |
            | level 1                  | tarjetas                                                                   | string       | App Step 2 |
            | level 2                  | recepcion tarjeta de debito fisica                                         | string       | App Step 2 |
            | level 3                  | 2 escaneo                                                                  | string       | App Step 2 |
            | language                 | ES                                                                         | string       | App Step 2 |
            | page area                | privada                                                                    | string       | App Step 2 |
            | page intent              | transaccion                                                                | string       | App Step 2 |
            | channel                  | online                                                                     | string       | App Step 2 |
            | page instance ID         | de                                                                         | string       | App Step 2 |
            | version DL               | 20250414_5.0                                                               | string       | App Step 2 |
            | page info version        | appVersion                                                                 | regexp named | App Step 2 |
            | page segment             | personas                                                                   | string       | App Step 2 |
            | sysEnv                   | app                                                                        | string       | App Step 2 |
            | business unit            | BBVA Mexico                                                                | string       | App Step 2 |
            | site app name            | App BBVA Mexico                                                            | string       | App Step 2 |
            | project name             | Glomo                                                                      | string       | App Step 2 |
            | device mobile            | si                                                                         | string       | App Step 2 |
            | user userState           | logado                                                                     | string       | App Step 2 |
            | profile ID               | profileID                                                                  | regexp named | App Step 2 |
            | user segment global      | 003001                                                                     | string       | App Step 2 |
            | user gender              | gender                                                                     | regexp named | App Step 2 |
            | user age                 | age                                                                        | regexp named | App Step 2 |
            | global application       | credit card holder                                                         | string       | App Step 2 |
            | application name         | recepcion tarjeta de debito fisica                                         | string       | App Step 2 |
            | application type         | operativa                                                                  | string       | App Step 2 |
            | application step         | 2 escaneo                                                                  | string       | App Step 2 |
            | fulfillment model        | online                                                                     | string       | App Step 2 |
            | product primary category | tarjetas                                                                   | string       | App Step 2 |
            | product subtype          | tarjetas debito                                                            | string       | App Step 2 |
            | internal campaign        |                                                                            | empty array  | App Step 2 |
            | optimization attributes  |                                                                            | empty array  | App Step 2 |

    @ANA_EVENT_CRDC003
    @analytics
    @MX
    @vbank
    @backend(test)
    @tmpExclude @JIRA.GLOMOMX-254311
    @web @android @ios
    Scenario: Access to confirmation of receipt of a clean card - successful confirmation
        Given a user with the following criteria
            | criteria                    |
            | debit card pending delivery |
            | debit card confirmation     |
        And the user accesses to the "pending delivery virtual tdd" "debit" card product detail
        And the user accesses the entry point consult and confirm with "delivered"
        And the analytics interceptor service is initiated
        And the sms key "12345678" is entered
        And the user accesses the link confirm receipt
        And the user accesses to native scan reader
        When the user scans the qr code of the "debit card confirmation"
        Then the analytics events contains the following variables:
            | item                     | value                                                                           | type         | event         |
            | analytics                | analytics/glomo_base                                                            | json schema  | App Completed |
            | page name                | app:privada:personas:tarjetas:recepcion tarjeta de debito fisica:pagina exitosa | string       | App Completed |
            | level 1                  | tarjetas                                                                        | string       | App Completed |
            | level 2                  | recepcion tarjeta de debito fisica                                              | string       | App Completed |
            | level 3                  | pagina exitosa                                                                  | string       | App Completed |
            | language                 | ES                                                                              | string       | App Completed |
            | page area                | privada                                                                         | string       | App Completed |
            | page intent              | transaccion                                                                     | string       | App Completed |
            | channel                  | online                                                                          | string       | App Completed |
            | page instance ID         | de                                                                              | string       | App Completed |
            | version DL               | 20250414_5.0                                                                    | string       | App Completed |
            | page info version        | appVersion                                                                      | regexp named | App Completed |
            | page segment             | personas                                                                        | string       | App Completed |
            | sysEnv                   | app                                                                             | string       | App Completed |
            | business unit            | BBVA Mexico                                                                     | string       | App Completed |
            | site app name            | App BBVA Mexico                                                                 | string       | App Completed |
            | project name             | Glomo                                                                           | string       | App Completed |
            | device mobile            | si                                                                              | string       | App Completed |
            | user userState           | logado                                                                          | string       | App Completed |
            | profile ID               | profileID                                                                       | regexp named | App Completed |
            | user segment global      | 003001                                                                          | string       | App Completed |
            | user gender              | gender                                                                          | regexp named | App Completed |
            | user age                 | age                                                                             | regexp named | App Completed |
            | global application       | credit card holder                                                              | string       | App Completed |
            | application name         | recepcion tarjeta de debito fisica                                              | string       | App Completed |
            | application type         | operativa                                                                       | string       | App Completed |
            | application step         | pagina exitosa                                                                  | string       | App Completed |
            | fulfillment model        | online                                                                          | string       | App Completed |
            | application state        | finalizado                                                                      | string       | App Completed |
            | custom fields            | firma:token                                                                     | string       | App Completed |
            | product primary category | tarjetas                                                                        | string       | App Completed |
            | product subtype          | tarjetas debito                                                                 | string       | App Completed |
            | internal campaign        |                                                                                 | empty array  | App Completed |
            | optimization attributes  |                                                                                 | empty array  | App Completed |

    @ANA_EVENT_CRDC004
    @analytics
    @MX
    @vbank
    @backend(test)
    @web-done
    @web @android @ios @tmpExclude @JIRA.GLOMOMX-186671
    Scenario: Access to confirmation of receipt of clean card - QR code scanned is invalid
        Given a user with the following criteria
            | criteria                    |
            | debit card pending delivery |
            | debit card confirmation     |
        And the user accesses to the "pending delivery virtual tdd" "debit" card product detail
        And the user accesses the entry point consult and confirm with "delivered"
        And the sms key "12345678" is entered
        And the analytics interceptor service is initiated
        And the user accesses the link confirm receipt
        And the user accesses to native scan reader
        When the user scans the qr code of the "debit card confirmation invalid"
        Then the analytics events contains the following variables:
            | item                    | value                                                                             | type             | event     |
            | analytics               | analytics/glomo_base                                                              | json schema      | Page View |
            | version DL              | 20250414_5.0                                                                      | string           | Page View |
            | page name               | app:privada:personas:tarjetas:recepcion tarjeta de debito fisica:error lectura qr | string           | Page View |
            | level 1                 | tarjetas                                                                          | string           | Page View |
            | level 2                 | recepcion tarjeta de debito fisica                                                | string           | Page View |
            | level 3                 | error lectura qr                                                                  | string           | Page View |
            | error page              | error lectura qr                                                                  | string           | Page View |
            | language                | ES                                                                                | string           | Page View |
            | page area               | privada                                                                           | string           | Page View |
            | page intent             | informacion                                                                       | string           | Page View |
            | channel                 | online                                                                            | string           | Page View |
            | page instance ID        | de                                                                                | string           | Page View |
            | page info version       | appVersion                                                                        | regexp named     | Page View |
            | page segment            | personas                                                                          | string           | Page View |
            | sysEnv                  | app                                                                               | string           | Page View |
            | business unit           | BBVA Mexico                                                                       | string           | Page View |
            | site app name           | App BBVA Mexico                                                                   | string           | Page View |
            | project name            | Glomo                                                                             | string           | Page View |
            | device mobile           | si                                                                                | string           | Page View |
            | user userState          | logado                                                                            | string           | Page View |
            | user segment global     | 003001                                                                            | string           | Page View |
            | profile ID              | profileID                                                                         | regexp named     | Page View |
            | user gender             | gender                                                                            | regexp named     | Page View |
            | user age                | age                                                                               | regexp named     | Page View |
            | internal campaign       |                                                                                   | empty array      | Page View |
            | optimization attributes |                                                                                   | empty array      | Page View |
            | application             |                                                                                   | empty str object | Page View |
            | products attributes     |                                                                                   | empty array      | Page View |

    @ANA_EVENT_CRDC005
    @analytics
    @MX
    @vbank
    @backend(test)
    @web-done
    @web @android @ios
    Scenario: Access to confirmation of receipt of clean card - We had a problem
        Given a user with the following criteria
            | criteria                |
            | debit card confirmation |
        And the user accesses to the "pending delivery virtual tdd" "debit" card product detail
        And the user accesses the entry point consult and confirm with "delivered"
        And the sms key "12345678" is entered
        And the user accesses the link confirm receipt
        And the user accesses to native scan reader
        And the analytics interceptor service is initiated
        When the user scans the qr code of the "debit card confirmation"
        Then the analytics events contains the following variables:
            | item                    | value                                                                                      | type             | event     |
            | analytics               | analytics/glomo_base                                                                       | json schema      | Page View |
            | version DL              | 20250414_5.0                                                                               | string           | Page View |
            | page name               | app:privada:personas:tarjetas:recepcion tarjeta de debito fisica:error tuvimos un problema | string           | Page View |
            | level 1                 | tarjetas                                                                                   | string           | Page View |
            | level 2                 | recepcion tarjeta de debito fisica                                                         | string           | Page View |
            | level 3                 | error tuvimos un problema                                                                  | string           | Page View |
            | error page              | error tuvimos un problema                                                                  | string           | Page View |
            | language                | ES                                                                                         | string           | Page View |
            | page area               | privada                                                                                    | string           | Page View |
            | page intent             | informacion                                                                                | string           | Page View |
            | channel                 | online                                                                                     | string           | Page View |
            | page instance ID        | de                                                                                         | string           | Page View |
            | page info version       | appVersion                                                                                 | regexp named     | Page View |
            | page segment            | personas                                                                                   | string           | Page View |
            | sysEnv                  | app                                                                                        | string           | Page View |
            | business unit           | BBVA Mexico                                                                                | string           | Page View |
            | site app name           | App BBVA Mexico                                                                            | string           | Page View |
            | project name            | Glomo                                                                                      | string           | Page View |
            | device mobile           | si                                                                                         | string           | Page View |
            | user userState          | logado                                                                                     | string           | Page View |
            | user segment global     | 003001                                                                                     | string           | Page View |
            | profile ID              | profileID                                                                                  | regexp named     | Page View |
            | user gender             | gender                                                                                     | regexp named     | Page View |
            | user age                | age                                                                                        | regexp named     | Page View |
            | internal campaign       |                                                                                            | empty array      | Page View |
            | optimization attributes |                                                                                            | empty array      | Page View |
            | application             |                                                                                            | empty str object | Page View |
            | products attributes     |                                                                                            | empty array      | Page View |

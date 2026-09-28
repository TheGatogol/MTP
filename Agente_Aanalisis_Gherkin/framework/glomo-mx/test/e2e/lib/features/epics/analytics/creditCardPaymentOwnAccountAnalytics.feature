@creditCardPaymentOwnAccountAnalytics
Feature: Analytics Credit Card Payment Own Account

    @ANA_OWA001
    @analytics
    @MX @vbank @backend(test)
    @web @ios @android
    @web-done
    Scenario: Access to Credit Card Payment Own Account -- Page View -- select card
        Given a user with the following criteria
            | criteria                  |
            | account in pesos          |
            | account with credit cards |
        And the user accesses to the first account product detail
        And the user accesses the pay card operative
        When the user accesses the "pay card" screen
        Then the device contains the following variables
            | item                | value                                                       | type         |
            | page name           | app:privada:personas:tarjetas:pagar tarjeta:tarjeta a pagar | string       |
            | level 1             | tarjetas                                                    | string       |
            | level 2             | pagar tarjeta                                               | string       |
            | level 3             | tarjeta a pagar                                             | string       |
            | language            | ES                                                          | string       |
            | page area           | privada                                                     | string       |
            | page intent         | transaccion                                                 | string       |
            | channel             | online                                                      | string       |
            | page instance ID    | de                                                          | string       |
            | page info version   | appVersion                                                  | regexp named |
            | page segment        | personas                                                    | string       |
            | sysEnv              | app                                                         | string       |
            | business unit       | BBVA Mexico                                                 | string       |
            | site app name       | App BBVA Mexico                                             | string       |
            | project name        | DIY Payments                                                | string       |
            | user userState      | logado                                                      | string       |
            | user segment global | 003001                                                      | string       |
            | profile ID          | profileID                                                   | regexp named |

    @ANA_OWA002
    @analytics
    @ios @android @web
    @MX @vbank @backend(test)
    @web-done
    Scenario: Access to Credit Card Payment Own Account - Other Amount - Page Visit
        Given a user with the following criteria
            | criteria                  |
            | account in pesos          |
            | account with credit cards |
        And the user accesses to the first account product detail
        And the user accesses the pay card operative
        And the user accesses the "pay card" screen
        When the user selects card payment method "other import"
        Then the device contains the following variables
            | item                     | value                                               | type         |
            | page name                | app:privada:personas:tarjetas:pagar tarjeta:1 monto | string       |
            | level 1                  | tarjetas                                            | string       |
            | level 2                  | pagar tarjeta                                       | string       |
            | level 3                  | 1 monto                                             | string       |
            | language                 | ES                                                  | string       |
            | page area                | privada                                             | string       |
            | page intent              | transaccion                                         | string       |
            | channel                  | online                                              | string       |
            | page instance ID         | de                                                  | string       |
            | page info version        | appVersion                                          | regexp named |
            | page segment             | personas                                            | string       |
            | sysEnv                   | app                                                 | string       |
            | business unit            | BBVA Mexico                                         | string       |
            | site app name            | App BBVA Mexico                                     | string       |
            | project name             | DIY Payments                                        | string       |
            | user userState           | logado                                              | string       |
            | user segment global      | 003001                                              | string       |
            | profile ID               | profileID                                           | regexp named |
            | global application       | credit card payments                                | string       |
            | application name         | pagar tarjeta                                       | string       |
            | application type         | operativa                                           | string       |
            | application step         | 1 monto                                             | string       |
            | fulfillment model        | online                                              | string       |
            | application typology     | tarjetas propias                                    | string       |
            | product primary category | tarjetas                                            | string       |
            | product subtype          | tarjetas credito                                    | string       |
            | product name             | oro bbva                                            | string       |

    @ANA_EVENT_OWA003
    @analytics
    @ios @android @web
    @MX @vbank @backend(test)
    @web-done
    Scenario: Access to Credit Card Payment Own Account - Other Amount - App Started
        Given a user with the following criteria
            | criteria                  |
            | account in pesos          |
            | account with credit cards |
        And the user accesses to the first account product detail
        And the analytics interceptor service is initiated
        And the user accesses the pay card operative
        And the user accesses the "pay card" screen
        And the user selects card payment method "other import"
        When the user continue with the payment
        Then the analytics events contains the following variables
            | item                     | value                                               | type         | event       |
            | page name                | app:privada:personas:tarjetas:pagar tarjeta:1 monto | string       | App Started |
            | level 1                  | tarjetas                                            | string       | App Started |
            | level 2                  | pagar tarjeta                                       | string       | App Started |
            | level 3                  | 1 monto                                             | string       | App Started |
            | language                 | ES                                                  | string       | App Started |
            | page area                | privada                                             | string       | App Started |
            | page intent              | transaccion                                         | string       | App Started |
            | channel                  | online                                              | string       | App Started |
            | page instance ID         | de                                                  | string       | App Started |
            | page info version        | appVersion                                          | regexp named | App Started |
            | page segment             | personas                                            | string       | App Started |
            | sysEnv                   | app                                                 | string       | App Started |
            | business unit            | BBVA Mexico                                         | string       | App Started |
            | site app name            | App BBVA Mexico                                     | string       | App Started |
            | project name             | DIY Payments                                        | string       | App Started |
            | user userState           | logado                                              | string       | App Started |
            | user segment global      | 003001                                              | string       | App Started |
            | profile ID               | profileID                                           | regexp named | App Started |
            | global application       | credit card payments                                | string       | App Started |
            | application name         | pagar tarjeta                                       | string       | App Started |
            | application type         | operativa                                           | string       | App Started |
            | application step         | otro importe                                        | string       | App Started |
            | fulfillment model        | online                                              | string       | App Started |
            | application typology     | tarjetas propias                                    | string       | App Started |
            | product primary category | tarjetas                                            | string       | App Started |
            | product subtype          | tarjetas credito                                    | string       | App Started |
            | product name             | oro bbva                                            | string       | App Started |

    @ANA_OWA004
    @analytics
    @ios @android @web
    @MX @vbank @backend(test)
    @web-done
    Scenario: Access to Credit Card Payment Own Account - Other Amount - App Completed
        Given a user with the following criteria
            | criteria                  |
            | account in pesos          |
            | account with credit cards |
        And the user accesses to the first account product detail
        And the user accesses the pay card operative
        And the user accesses the "pay card" screen
        And the user selects card payment method "other import"
        When the user continue with confirm modal
        Then the device contains the following variables
            | item                         | value                                                      | type         |
            | page name                    | app:privada:personas:tarjetas:pagar tarjeta:pagina exitosa | string       |
            | level 1                      | tarjetas                                                   | string       |
            | level 2                      | pagar tarjeta                                              | string       |
            | level 3                      | pagina exitosa                                             | string       |
            | language                     | ES                                                         | string       |
            | page area                    | privada                                                    | string       |
            | page intent                  | transaccion                                                | string       |
            | channel                      | online                                                     | string       |
            | page instance ID             | de                                                         | string       |
            | page info version            | appVersion                                                 | regexp named |
            | page segment                 | personas                                                   | string       |
            | sysEnv                       | app                                                        | string       |
            | business unit                | BBVA Mexico                                                | string       |
            | site app name                | App BBVA Mexico                                            | string       |
            | project name                 | DIY Payments                                               | string       |
            | user userState               | logado                                                     | string       |
            | user segment global          | 003001                                                     | string       |
            | profile ID                   | profileID                                                  | regexp named |
            | global application           | credit card payments                                       | string       |
            | application name             | pagar tarjeta                                              | string       |
            | application type             | operativa                                                  | string       |
            | application step             | pagina exitosa                                             | string       |
            | fulfillment model            | online                                                     | string       |
            | application typology         | tarjetas propias                                           | string       |
            | application state            | finalizado                                                 | string       |
            | application operation number | alphaNumericCaseSpace                                      | regexp named |
            | product primary category     | tarjetas                                                   | string       |
            | product subtype              | tarjetas credito                                           | string       |
            | product name                 | oro bbva                                                   | string       |
            | product amount               | 500                                                        | number       |
            | product currency             | mxn                                                        | string       |

    @ANA_OWA005
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: Access to Credit Card Payment Own Account -- Page View -- select account
        Given a user with the following criteria
            | criteria                  |
            | account in pesos          |
            | account with credit cards |
        And the user accesses to operationals page
        When the user accesses to the payCard operative
        And the user accesses the "pay card" screen
        Then the device contains the following variables
            | item                | value                                                        | type         |
            | page name           | app:privada:personas:tarjetas:pagar tarjeta:seleccion cuenta | string       |
            | level 1             | tarjetas                                                     | string       |
            | level 2             | pagar tarjeta                                                | string       |
            | level 3             | seleccion cuenta                                             | string       |
            | language            | ES                                                           | string       |
            | page area           | privada                                                      | string       |
            | page intent         | transaccion                                                  | string       |
            | channel             | online                                                       | string       |
            | page instance ID    | de                                                           | string       |
            | page info version   | appVersion                                                   | regexp named |
            | page segment        | personas                                                     | string       |
            | sysEnv              | app                                                          | string       |
            | business unit       | BBVA Mexico                                                  | string       |
            | site app name       | App BBVA Mexico                                              | string       |
            | project name        | DIY Payments                                                 | string       |
            | user userState      | logado                                                       | string       |
            | user segment global | 003001                                                       | string       |
            | profile ID          | profileID                                                    | regexp named |

    @ANA_OWA006
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: Access to Credit Card Payment Own Account -- Page View -- account in pesos
        Given a user with the following criteria
            | criteria                  |
            | account in pesos          |
            | account with credit cards |
        And the user accesses to operationals page
        And the user accesses to the payCard operative
        And the user accesses the "pay card" screen
        When the user wants to switch accounts
        Then the device contains the following variables
            | item                | value                                                          | type         |
            | page name           | app:privada:personas:tarjetas:pagar tarjeta:cuenta deuda pesos | string       |
            | level 1             | tarjetas                                                       | string       |
            | level 2             | pagar tarjeta                                                  | string       |
            | level 3             | cuenta deuda pesos                                             | string       |
            | language            | ES                                                             | string       |
            | page area           | privada                                                        | string       |
            | page intent         | transaccion                                                    | string       |
            | channel             | online                                                         | string       |
            | page instance ID    | de                                                             | string       |
            | page info version   | appVersion                                                     | regexp named |
            | page segment        | personas                                                       | string       |
            | sysEnv              | app                                                            | string       |
            | business unit       | BBVA Mexico                                                    | string       |
            | site app name       | App BBVA Mexico                                                | string       |
            | project name        | DIY Payments                                                   | string       |
            | user userState      | logado                                                         | string       |
            | user segment global | 003001                                                         | string       |
            | profile ID          | profileID                                                      | regexp named |

    @ANA_EVENT_OWA007
    @analytics
    @ios @android @web
    @MX @vbank @backend(test)
    @web-done
    Scenario: Access to Credit Card Payment Own Account - Other Amount - App Step 2
        Given a user with the following criteria
            | criteria                  |
            | account in pesos          |
            | account with credit cards |
        And the user accesses to the first account product detail
        And the analytics interceptor service is initiated
        And the user accesses the pay card operative
        And the user accesses the "pay card" screen
        And the user selects card payment method "other import"
        When the user continue with the payment
        Then the analytics events contains the following variables
            | item                     | value                                                      | type         | event      |
            | page name                | app:privada:personas:tarjetas:pagar tarjeta:2 confirmacion | string       | App Step 2 |
            | level 1                  | tarjetas                                                   | string       | App Step 2 |
            | level 2                  | pagar tarjeta                                              | string       | App Step 2 |
            | level 3                  | 2 confirmacion                                             | string       | App Step 2 |
            | language                 | ES                                                         | string       | App Step 2 |
            | page area                | privada                                                    | string       | App Step 2 |
            | page intent              | transaccion                                                | string       | App Step 2 |
            | channel                  | online                                                     | string       | App Step 2 |
            | page instance ID         | de                                                         | string       | App Step 2 |
            | page info version        | appVersion                                                 | regexp named | App Step 2 |
            | page segment             | personas                                                   | string       | App Step 2 |
            | sysEnv                   | app                                                        | string       | App Step 2 |
            | business unit            | BBVA Mexico                                                | string       | App Step 2 |
            | site app name            | App BBVA Mexico                                            | string       | App Step 2 |
            | project name             | DIY Payments                                               | string       | App Step 2 |
            | user userState           | logado                                                     | string       | App Step 2 |
            | user segment global      | 003001                                                     | string       | App Step 2 |
            | profile ID               | profileID                                                  | regexp named | App Step 2 |
            | global application       | credit card payments                                       | string       | App Step 2 |
            | application name         | pagar tarjeta                                              | string       | App Step 2 |
            | application type         | operativa                                                  | string       | App Step 2 |
            | application step         | 2 confirmacion                                             | string       | App Step 2 |
            | fulfillment model        | online                                                     | string       | App Step 2 |
            | application typology     | tarjetas propias                                           | string       | App Step 2 |
            | product primary category | tarjetas                                                   | string       | App Step 2 |
            | product subtype          | tarjetas credito                                           | string       | App Step 2 |
            | product name             | oro bbva                                                   | string       | App Step 2 |
            | product amount           | 500                                                        | number       | App Step 2 |
            | product currency         | mxn                                                        | string       | App Step 2 |

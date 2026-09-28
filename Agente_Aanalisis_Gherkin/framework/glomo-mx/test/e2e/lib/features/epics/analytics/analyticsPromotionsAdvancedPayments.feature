@analyticsPromotionsAdvancedPayments
Feature: Analytics - Promotions Advanced Payments

    @ANA_EVENT_PAP001
    @analytics
    @web @android @ios
    @MX @backend(test) @vbank
    @web-done
    Scenario: Show "Operative Promotions Advanced Payment" - APP ONCLICK START
        Given a user with the following criteria
            | criteria                     |
            | Credit card                  |
            | promotions advanced payments |
            | account                      |
        And the user accesses to the "operative" "credit" card product detail
        And the analytics interceptor service is initiated
        When the user accesses to promotions advanced payments
        Then the analytics events contains the following variables
            | item                | value                                         | type         | event              |
            | analytics           | analytics/glomo_base                          | json schema  | App On Click Start |
            | version dl          | 20250414_5.0                                  | string       | App On Click Start |
            | page name           | app:privada:personas:tarjetas:credito:detalle | string       | App On Click Start |
            | level 1             | tarjetas                                      | string       | App On Click Start |
            | level 2             | credito                                       | string       | App On Click Start |
            | level 3             | detalle                                       | string       | App On Click Start |
            | language            | ES                                            | string       | App On Click Start |
            | page area           | privada                                       | string       | App On Click Start |
            | page intent         | informacion                                   | string       | App On Click Start |
            | channel             | online                                        | string       | App On Click Start |
            | page instance ID    | de                                            | string       | App On Click Start |
            | page info version   | appVersion                                    | regexp named | App On Click Start |
            | page segment        | personas                                      | string       | App On Click Start |
            | sysEnv              | app                                           | string       | App On Click Start |
            | business unit       | BBVA Mexico                                   | string       | App On Click Start |
            | site app name       | App BBVA Mexico                               | string       | App On Click Start |
            | project name        | DIY Payments                                  | string       | App On Click Start |
            | device mobile       | si                                            | string       | App On Click Start |
            | user userState      | logado                                        | string       | App On Click Start |
            | user segment global | 003001                                        | string       | App On Click Start |
            | profile ID          | profileID                                     | regexp named | App On Click Start |
            | user gender         | gender                                        | regexp named | App On Click Start |
            | user age            | age                                           | regexp named | App On Click Start |
            | global application  | advances payments promotions                  | string       | App On Click Start |
            | application name    | anticipo promocion                            | string       | App On Click Start |
            | application type    | operativa                                     | string       | App On Click Start |
            | fulfillment model   | online                                        | string       | App On Click Start |
            | application step    | pagar anticipo a promocion                    | string       | App On Click Start |

    @ANA_EVENT_PAP002
    @analytics
    @web @ios @android
    @MX @vbank @backend(test) @web-done
    Scenario: Show "Credit card data" - APP PAGE VISIT
        Given a user with the following criteria
            | criteria                     |
            | Credit card                  |
            | promotions advanced payments |
            | account                      |
        And the user accesses to the "operative" "credit" card product detail
        And the analytics interceptor service is initiated
        When the user accesses to promotions advanced payments
        Then the analytics events contains the following variables
            | item                     | value                                                       | type         | event          | event number |
            | analytics                | analytics/glomo_base                                        | json schema  | App Page Visit | 1            |
            | version dl               | 20250414_5.0                                                | string       | App Page Visit | 1            |
            | page name                | app:privada:personas:pagar anticipo a promocion:1 promocion | string       | App Page Visit | 1            |
            | level 1                  | pagar anticipo a promocion                                  | string       | App Page Visit | 1            |
            | level 2                  | 1 promocion                                                 | string       | App Page Visit | 1            |
            | language                 | ES                                                          | string       | App Page Visit | 1            |
            | page area                | privada                                                     | string       | App Page Visit | 1            |
            | page intent              | transaccion                                                 | string       | App Page Visit | 1            |
            | channel                  | online                                                      | string       | App Page Visit | 1            |
            | page instance ID         | de                                                          | string       | App Page Visit | 1            |
            | page info version        | appVersion                                                  | regexp named | App Page Visit | 1            |
            | page segment             | personas                                                    | string       | App Page Visit | 1            |
            | sysEnv                   | app                                                         | string       | App Page Visit | 1            |
            | business unit            | BBVA Mexico                                                 | string       | App Page Visit | 1            |
            | site app name            | App BBVA Mexico                                             | string       | App Page Visit | 1            |
            | project name             | DIY Payments                                                | string       | App Page Visit | 1            |
            | device mobile            | si                                                          | string       | App Page Visit | 1            |
            | user userState           | logado                                                      | string       | App Page Visit | 1            |
            | user segment global      | 003001                                                      | string       | App Page Visit | 1            |
            | profile ID               | profileID                                                   | regexp named | App Page Visit | 1            |
            | user gender              | gender                                                      | regexp named | App Page Visit | 1            |
            | user age                 | age                                                         | regexp named | App Page Visit | 1            |
            | global application       | advances payments promotions                                | string       | App Page Visit | 1            |
            | application name         | anticipo promocion                                          | string       | App Page Visit | 1            |
            | application type         | operativa                                                   | string       | App Page Visit | 1            |
            | fulfillment model        | online                                                      | string       | App Page Visit | 1            |
            | application step         | 1 promocion                                                 | string       | App Page Visit | 1            |
            | product primary category | tarjetas                                                    | string       | App Page Visit | 1            |
            | product subtype          | tarjetas credito                                            | string       | App Page Visit | 1            |
            | product name             | educacicn bbva                                              | string       | App Page Visit | 1            |
            | product amount           | 10624.33                                                    | number       | App Page Visit | 1            |
            | product currency         | MXN                                                         | string       | App Page Visit | 1            |

    @ANA_EVENT_PAP003
    @analytics
    @web @ios @android
    @MX @vbank @backend(test) @web-done
    Scenario: Show "Promotions List" - APP STARTED
        Given a user with the following criteria
            | criteria                     |
            | Credit card                  |
            | promotions advanced payments |
            | account                      |
        And the user accesses to the "operative" "credit" card product detail
        And the user accesses to promotions advanced payments
        And the analytics interceptor service is initiated
        When the user enters import "100" in amount pay step
        Then the analytics events contains the following variables
            | item                     | value                                                       | type         | event       |
            | analytics                | analytics/glomo_base                                        | json schema  | App Started |
            | version dl               | 20250414_5.0                                                | string       | App Started |
            | page name                | app:privada:personas:pagar anticipo a promocion:1 promocion | string       | App Started |
            | level 1                  | pagar anticipo a promocion                                  | string       | App Started |
            | level 2                  | 1 promocion                                                 | string       | App Started |
            | language                 | ES                                                          | string       | App Started |
            | page area                | privada                                                     | string       | App Started |
            | page intent              | transaccion                                                 | string       | App Started |
            | channel                  | online                                                      | string       | App Started |
            | page instance ID         | de                                                          | string       | App Started |
            | page info version        | appVersion                                                  | regexp named | App Started |
            | page segment             | personas                                                    | string       | App Started |
            | sysEnv                   | app                                                         | string       | App Started |
            | business unit            | BBVA Mexico                                                 | string       | App Started |
            | site app name            | App BBVA Mexico                                             | string       | App Started |
            | project name             | DIY Payments                                                | string       | App Started |
            | device mobile            | si                                                          | string       | App Started |
            | user userState           | logado                                                      | string       | App Started |
            | user segment global      | 003001                                                      | string       | App Started |
            | profile ID               | profileID                                                   | regexp named | App Started |
            | user gender              | gender                                                      | regexp named | App Started |
            | user age                 | age                                                         | regexp named | App Started |
            | global application       | advances payments promotions                                | string       | App Started |
            | application name         | anticipo promocion                                          | string       | App Started |
            | application type         | operativa                                                   | string       | App Started |
            | fulfillment model        | online                                                      | string       | App Started |
            | application step         | months_without_interest-mpo 27hermosillo mu                 | string       | App Started |
            | product primary category | tarjetas                                                    | string       | App Started |
            | product subtype          | tarjetas credito                                            | string       | App Started |
            | product name             | educacicn bbva                                              | string       | App Started |
            | product amount           | 10624.33                                                    | number       | App Started |
            | product currency         | MXN                                                         | string       | App Started |

    @ANA_EVENT_PAP004
    @analytics
    @web @ios @android
    @MX @vbank @backend(test) @web-done
    Scenario: Show "Import List" - APP STEP 2
        Given a user with the following criteria
            | criteria                     |
            | Credit card                  |
            | promotions advanced payments |
            | account                      |
        And the user accesses to the "operative" "credit" card product detail
        And the user accesses to promotions advanced payments
        And the analytics interceptor service is initiated
        When the user enters import "100" in amount pay step
        Then the analytics events contains the following variables
            | item                     | value                                                     | type         | event      |
            | analytics                | analytics/glomo_base                                      | json schema  | App Step 2 |
            | version dl               | 20250414_5.0                                              | string       | App Step 2 |
            | page name                | app:privada:personas:pagar anticipo a promocion:2 importe | string       | App Step 2 |
            | level 1                  | pagar anticipo a promocion                                | string       | App Step 2 |
            | level 2                  | 2 importe                                                 | string       | App Step 2 |
            | language                 | ES                                                        | string       | App Step 2 |
            | page area                | privada                                                   | string       | App Step 2 |
            | page intent              | transaccion                                               | string       | App Step 2 |
            | channel                  | online                                                    | string       | App Step 2 |
            | page instance ID         | de                                                        | string       | App Step 2 |
            | page info version        | appVersion                                                | regexp named | App Step 2 |
            | page segment             | personas                                                  | string       | App Step 2 |
            | sysEnv                   | app                                                       | string       | App Step 2 |
            | business unit            | BBVA Mexico                                               | string       | App Step 2 |
            | site app name            | App BBVA Mexico                                           | string       | App Step 2 |
            | project name             | DIY Payments                                              | string       | App Step 2 |
            | device mobile            | si                                                        | string       | App Step 2 |
            | user userState           | logado                                                    | string       | App Step 2 |
            | user segment global      | 003001                                                    | string       | App Step 2 |
            | profile ID               | profileID                                                 | regexp named | App Step 2 |
            | user gender              | gender                                                    | regexp named | App Step 2 |
            | user age                 | age                                                       | regexp named | App Step 2 |
            | global application       | advances payments promotions                              | string       | App Step 2 |
            | application name         | anticipo promocion                                        | string       | App Step 2 |
            | application type         | operativa                                                 | string       | App Step 2 |
            | fulfillment model        | online                                                    | string       | App Step 2 |
            | application step         | 2 importe                                                 | string       | App Step 2 |
            | product primary category | tarjetas                                                  | string       | App Step 2 |
            | product subtype          | tarjetas credito                                          | string       | App Step 2 |
            | product name             | educacicn bbva                                            | string       | App Step 2 |
            | product amount           | 10624.33                                                  | number       | App Step 2 |
            | product currency         | MXN                                                       | string       | App Step 2 |
            | application typology     | mpo 27hermosillo mu                                       | string       | App Step 2 |

    @ANA_EVENT_PAP005
    @analytics
    @web @ios @android
    @MX @vbank @backend(test) @web-done
    Scenario: Show "Accounts List" - APP STEP 3
        Given a user with the following criteria
            | criteria                     |
            | Credit card                  |
            | promotions advanced payments |
            | account                      |
        And the user accesses to the "operative" "credit" card product detail
        And the user accesses to promotions advanced payments
        And the analytics interceptor service is initiated
        When the user accesses to show more accounts
        Then the analytics events contains the following variables
            | item                     | value                                                              | type         | event      |
            | analytics                | analytics/glomo_base                                               | json schema  | App Step 3 |
            | version dl               | 20250414_5.0                                                       | string       | App Step 3 |
            | page name                | app:privada:personas:pagar anticipo a promocion:3 cuenta de retiro | string       | App Step 3 |
            | level 1                  | pagar anticipo a promocion                                         | string       | App Step 3 |
            | level 2                  | 3 cuenta de retiro                                                 | string       | App Step 3 |
            | language                 | ES                                                                 | string       | App Step 3 |
            | page area                | privada                                                            | string       | App Step 3 |
            | page intent              | transaccion                                                        | string       | App Step 3 |
            | channel                  | online                                                             | string       | App Step 3 |
            | page instance ID         | de                                                                 | string       | App Step 3 |
            | page info version        | appVersion                                                         | regexp named | App Step 3 |
            | page segment             | personas                                                           | string       | App Step 3 |
            | sysEnv                   | app                                                                | string       | App Step 3 |
            | business unit            | BBVA Mexico                                                        | string       | App Step 3 |
            | site app name            | App BBVA Mexico                                                    | string       | App Step 3 |
            | project name             | DIY Payments                                                       | string       | App Step 3 |
            | device mobile            | si                                                                 | string       | App Step 3 |
            | user userState           | logado                                                             | string       | App Step 3 |
            | user segment global      | 003001                                                             | string       | App Step 3 |
            | profile ID               | profileID                                                          | regexp named | App Step 3 |
            | user gender              | gender                                                             | regexp named | App Step 3 |
            | user age                 | age                                                                | regexp named | App Step 3 |
            | global application       | advances payments promotions                                       | string       | App Step 3 |
            | application name         | anticipo promocion                                                 | string       | App Step 3 |
            | application type         | operativa                                                          | string       | App Step 3 |
            | fulfillment model        | online                                                             | string       | App Step 3 |
            | application step         | 3 cuenta de retiro                                                 | string       | App Step 3 |
            | product primary category | tarjetas                                                           | string       | App Step 3 |
            | product subtype          | tarjetas credito                                                   | string       | App Step 3 |
            | product name             | educacicn bbva                                                     | string       | App Step 3 |
            | product amount           | 10624.33                                                           | number       | App Step 3 |
            | product currency         | MXN                                                                | string       | App Step 3 |
            | application typology     | mpo 27hermosillo mu                                                | string       | App Step 3 |

    @ANA_EVENT_PAP006
    @analytics
    @web @ios @android
    @MX @vbank @backend(test) @web-done
    Scenario: Show "Summary" - APP STEP 4
        Given a user with the following criteria
            | criteria                     |
            | Credit card                  |
            | promotions advanced payments |
            | account                      |
        And the user accesses to the "operative" "credit" card product detail
        And the user accesses to promotions advanced payments
        And the user reaches to "monthly payment" payment
        And the analytics interceptor service is initiated
        When the user exits promotions advanced payments when "on the summary screen"
        Then the analytics events contains the following variables
            | item                       | value                                                          | type         | event      |
            | analytics                  | analytics/glomo_base                                           | json schema  | App Step 4 |
            | version dl                 | 20250414_5.0                                                   | string       | App Step 4 |
            | page name                  | app:privada:personas:pagar anticipo a promocion:4 confirmacion | string       | App Step 4 |
            | level 1                    | pagar anticipo a promocion                                     | string       | App Step 4 |
            | level 2                    | 4 confirmacion                                                 | string       | App Step 4 |
            | language                   | ES                                                             | string       | App Step 4 |
            | page area                  | privada                                                        | string       | App Step 4 |
            | page intent                | transaccion                                                    | string       | App Step 4 |
            | channel                    | online                                                         | string       | App Step 4 |
            | page instance ID           | de                                                             | string       | App Step 4 |
            | page info version          | appVersion                                                     | regexp named | App Step 4 |
            | page segment               | personas                                                       | string       | App Step 4 |
            | sysEnv                     | app                                                            | string       | App Step 4 |
            | business unit              | BBVA Mexico                                                    | string       | App Step 4 |
            | site app name              | App BBVA Mexico                                                | string       | App Step 4 |
            | project name               | DIY Payments                                                   | string       | App Step 4 |
            | device mobile              | si                                                             | string       | App Step 4 |
            | user userState             | logado                                                         | string       | App Step 4 |
            | user segment global        | 003001                                                         | string       | App Step 4 |
            | profile ID                 | profileID                                                      | regexp named | App Step 4 |
            | user gender                | gender                                                         | regexp named | App Step 4 |
            | user age                   | age                                                            | regexp named | App Step 4 |
            | global application         | advances payments promotions                                   | string       | App Step 4 |
            | application name           | anticipo promocion                                             | string       | App Step 4 |
            | application type           | operativa                                                      | string       | App Step 4 |
            | fulfillment model          | online                                                         | string       | App Step 4 |
            | application step           | 4 confirmacion                                                 | string       | App Step 4 |
            | product primary category   | tarjetas                                                       | string       | App Step 4 |
            | product subtype            | tarjetas credito                                               | string       | App Step 4 |
            | product name               | educacicn bbva                                                 | string       | App Step 4 |
            | product amount             | 10624.33                                                       | number       | App Step 4 |
            | product currency           | MXN                                                            | string       | App Step 4 |
            | application typology       | mpo 27hermosillo mu                                            | string       | App Step 4 |
            | product primary category 1 | cuentas                                                        | string       | App Step 4 |
            | product name 1             | libreton premium                                               | string       | App Step 4 |
            | product amount 1           | 1880                                                           | number       | App Step 4 |
            | product currency 1         | MXN                                                            | string       | App Step 4 |

    @ANA_EVENT_PAP007
    @analytics
    @web @ios @android
    @MX @vbank @backend(test) @web-done
    Scenario: Show "Accounts List" - APP COMPLETED
        Given a user with the following criteria
            | criteria                     |
            | Credit card                  |
            | promotions advanced payments |
            | account                      |
        And the user accesses to the "operative" "credit" card product detail
        And the user accesses to promotions advanced payments
        And the user reaches to "other amount" payment
        And the analytics interceptor service is initiated
        When the user pays promotion advanced
        Then the analytics events contains the following variables
            | item                         | value                                                          | type         | event         |
            | analytics                    | analytics/glomo_base                                           | json schema  | App Completed |
            | version dl                   | 20250414_5.0                                                   | string       | App Completed |
            | page name                    | app:privada:personas:pagar anticipo a promocion:pagina exitosa | string       | App Completed |
            | level 1                      | pagar anticipo a promocion                                     | string       | App Completed |
            | level 2                      | pagina exitosa                                                 | string       | App Completed |
            | language                     | ES                                                             | string       | App Completed |
            | page area                    | privada                                                        | string       | App Completed |
            | page intent                  | transaccion                                                    | string       | App Completed |
            | channel                      | online                                                         | string       | App Completed |
            | page instance ID             | de                                                             | string       | App Completed |
            | page info version            | appVersion                                                     | regexp named | App Completed |
            | page segment                 | personas                                                       | string       | App Completed |
            | sysEnv                       | app                                                            | string       | App Completed |
            | business unit                | BBVA Mexico                                                    | string       | App Completed |
            | site app name                | App BBVA Mexico                                                | string       | App Completed |
            | project name                 | DIY Payments                                                   | string       | App Completed |
            | device mobile                | si                                                             | string       | App Completed |
            | user userState               | logado                                                         | string       | App Completed |
            | user segment global          | 003001                                                         | string       | App Completed |
            | profile ID                   | profileID                                                      | regexp named | App Completed |
            | user gender                  | gender                                                         | regexp named | App Completed |
            | user age                     | age                                                            | regexp named | App Completed |
            | global application           | advances payments promotions                                   | string       | App Completed |
            | application name             | anticipo promocion                                             | string       | App Completed |
            | application type             | operativa                                                      | string       | App Completed |
            | fulfillment model            | online                                                         | string       | App Completed |
            | application state            | finalizado                                                     | string       | App Completed |
            | application operation number | 7111439482                                                     | string       | App Completed |
            | application step             | pagina exitosa                                                 | string       | App Completed |
            | product primary category     | tarjetas                                                       | string       | App Completed |
            | product subtype              | tarjetas credito                                               | string       | App Completed |
            | product name                 | platinum bbva                                                  | string       | App Completed |
            | product amount               | 580865.5                                                       | number       | App Completed |
            | product currency             | MXN                                                            | string       | App Completed |
            | application typology         | seg banorte9715723                                             | string       | App Completed |
            | product primary category 1   | cuentas                                                        | string       | App Completed |
            | product name 1               | maestra particulares                                           | string       | App Completed |
            | product amount 1             | 10                                                             | number       | App Completed |
            | product currency 1           | MXN                                                            | string       | App Completed |
            | custom fields                | firma:token                                                    | string       | App Completed |

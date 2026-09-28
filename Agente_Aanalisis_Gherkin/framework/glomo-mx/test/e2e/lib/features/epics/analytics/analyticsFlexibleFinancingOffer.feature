@analyticsflexibleFinancingOffer
Feature: Analytics - Flexible Financing Offer

    @ANA_EVENT_FFO001
    @analytics
    @ios @android @web @web-done
    @MX @backend(test) @vbank
    Scenario: Access to apply promotion - App On Click Start
        Given a user with the following criteria
            | criteria                 |
            | flexible financing offer |
            | multi msi                |
        And the user accesses to dashboard
        And the analytics interceptor service is initiated
        When the user goes to "modular offering flexible financing offer" using deeplink navigation
        Then the analytics events contains the following variables
            | item                | value                                                             | type         | event              |
            | analytics           | analytics/glomo_base                                              | json schema  | App On Click Start |
            | version DL          | 20250414_5.0                                                      | string       | App On Click Start |
            | page intent         | informacion                                                       | string       | App On Click Start |
            | page segment        | personas                                                          | string       | App On Click Start |
            | page name           | app:privada:personas:notificaciones:ofertas y promociones:detalle | string       | App On Click Start |
            | sysEnv              | app                                                               | string       | App On Click Start |
            | channel             | online                                                            | string       | App On Click Start |
            | language            | ES                                                                | string       | App On Click Start |
            | level 1             | notificaciones                                                    | string       | App On Click Start |
            | level 2             | ofertas y promociones                                             | string       | App On Click Start |
            | level 3             | detalle                                                           | string       | App On Click Start |
            | business unit       | BBVA Mexico                                                       | string       | App On Click Start |
            | site app name       | App BBVA Mexico                                                   | string       | App On Click Start |
            | project name        | Glomo                                                             | string       | App On Click Start |
            | page area           | privada                                                           | string       | App On Click Start |
            | device user agent   | GLOMO_MX/99.99.99 (Android;14;Samsung)                            | string       | App On Click Start |
            | device mobile       | si                                                                | string       | App On Click Start |
            | device root         |                                                                   | string       | App On Click Start |
            | user userState      | logado                                                            | string       | App On Click Start |
            | user segment global | 003001                                                            | string       | App On Click Start |
            | user gender         | gender                                                            | regexp named | App On Click Start |
            | user age            | age                                                               | regexp named | App On Click Start |
            | fulfillment model   | online                                                            | string       | App On Click Start |
            | application type    | operativa                                                         | string       | App On Click Start |
            | application name    | promocion diferimiento de compras                                 | string       | App On Click Start |
            | application step    | diferir compra                                                    | string       | App On Click Start |
            | global application  | flexible financing offer                                          | string       | App On Click Start |

    @ANA_EVENT_FFO002
    @analytics
    @ios @android @web @web-done
    @MX @backend(test) @vbank
    Scenario: Access to apply promotion - App Page Visit
        Given a user with the following criteria
            | criteria                 |
            | flexible financing offer |
            | fixed msi                |
        And the user accesses to dashboard
        And the analytics interceptor service is initiated
        When the user goes to "modular offering flexible financing offer" using deeplink navigation
        Then the analytics events contains the following variables
            | item                       | value                                                                 | type         | event          |
            | analytics                  | analytics/glomo_base                                                  | json schema  | App Page Visit |
            | version DL                 | 20250414_5.0                                                          | string       | App Page Visit |
            | page intent                | transaccion                                                           | string       | App Page Visit |
            | page segment               | personas                                                              | string       | App Page Visit |
            | page name                  | app:privada:personas:promocion diferimiento de compras:1 confirmacion | string       | App Page Visit |
            | sysEnv                     | app                                                                   | string       | App Page Visit |
            | channel                    | online                                                                | string       | App Page Visit |
            | language                   | ES                                                                    | string       | App Page Visit |
            | level 1                    | promocion diferimiento de compras                                     | string       | App Page Visit |
            | level 2                    | 1 confirmacion                                                        | string       | App Page Visit |
            | business unit              | BBVA Mexico                                                           | string       | App Page Visit |
            | site app name              | App BBVA Mexico                                                       | string       | App Page Visit |
            | project name               | Glomo                                                                 | string       | App Page Visit |
            | page area                  | privada                                                               | string       | App Page Visit |
            | device user agent          | GLOMO_MX/99.99.99 (Android;14;Samsung)                                | string       | App Page Visit |
            | device mobile              | si                                                                    | string       | App Page Visit |
            | device root                |                                                                       | string       | App Page Visit |
            | user userState             | logado                                                                | string       | App Page Visit |
            | user segment global        | 003001                                                                | string       | App Page Visit |
            | user segment profile       | unica promocion                                                       | string       | App Page Visit |
            | user gender                | gender                                                                | regexp named | App Page Visit |
            | user age                   | age                                                                   | regexp named | App Page Visit |
            | product primary category   | tarjetas                                                              | string       | App Page Visit |
            | product subtype            | tarjetas credito                                                      | string       | App Page Visit |
            | product name               | tarjeta vive bbva                                                     | string       | App Page Visit |
            | product amount             | 186                                                                   | number       | App Page Visit |
            | product currency           | mxn                                                                   | string       | App Page Visit |
            | product payment amount     | 37.2                                                                  | number       | App Page Visit |
            | product number of payments | 5                                                                     | number       | App Page Visit |
            | fulfillment model          | online                                                                | string       | App Page Visit |
            | application type           | operativa                                                             | string       | App Page Visit |
            | application name           | promocion diferimiento de compras                                     | string       | App Page Visit |
            | application step           | 1 confirmacion                                                        | string       | App Page Visit |
            | global application         | flexible financing offer                                              | string       | App Page Visit |

    @ANA_EVENT_FFO003
    @analytics
    @web @ios @android
    @MX @backend(test) @vbank @web-done
    Scenario: Access to promotion - App Started - Confirmacion step
        Given a user with the following criteria
            | criteria                 |
            | flexible financing offer |
            | fixed msi                |
        And the user accesses to dashboard
        And the user goes to "modular offering flexible financing offer" using deeplink navigation
        And the analytics interceptor service is initiated
        When the user confirms to apply the promotion
        Then the analytics events contains the following variables
            | item                       | value                                                                 | type         | event       |
            | analytics                  | analytics/glomo_base                                                  | json schema  | App Started |
            | version DL                 | 20250414_5.0                                                          | string       | App Started |
            | page intent                | transaccion                                                           | string       | App Started |
            | page segment               | personas                                                              | string       | App Started |
            | page name                  | app:privada:personas:promocion diferimiento de compras:1 confirmacion | string       | App Started |
            | sysEnv                     | app                                                                   | string       | App Started |
            | channel                    | online                                                                | string       | App Started |
            | language                   | ES                                                                    | string       | App Started |
            | level 1                    | promocion diferimiento de compras                                     | string       | App Started |
            | level 2                    | 1 confirmacion                                                        | string       | App Started |
            | business unit              | BBVA Mexico                                                           | string       | App Started |
            | site app name              | App BBVA Mexico                                                       | string       | App Started |
            | project name               | Glomo                                                                 | string       | App Started |
            | page area                  | privada                                                               | string       | App Started |
            | device user agent          | GLOMO_MX/99.99.99 (Android;14;Samsung)                                | string       | App Started |
            | device mobile              | si                                                                    | string       | App Started |
            | device root                |                                                                       | string       | App Started |
            | user userState             | logado                                                                | string       | App Started |
            | user segment global        | 003001                                                                | string       | App Started |
            | user segment profile       | unica promocion                                                       | string       | App Started |
            | user gender                | gender                                                                | regexp named | App Started |
            | user age                   | age                                                                   | regexp named | App Started |
            | product primary category   | tarjetas                                                              | string       | App Started |
            | product subtype            | tarjetas credito                                                      | string       | App Started |
            | product name               | tarjeta vive bbva                                                     | string       | App Started |
            | product amount             | 186                                                                   | number       | App Started |
            | product currency           | mxn                                                                   | string       | App Started |
            | product payment amount     | 37.2                                                                  | number       | App Started |
            | product number of payments | 5                                                                     | number       | App Started |
            | fulfillment model          | online                                                                | string       | App Started |
            | application type           | operativa                                                             | string       | App Started |
            | application name           | promocion diferimiento de compras                                     | string       | App Started |
            | application step           | confirmar                                                             | string       | App Started |
            | global application         | flexible financing offer                                              | string       | App Started |

    @ANA_EVENT_FFO004
    @analytics
    @web @ios @android
    @MX @backend(test) @vbank @web-done
    Scenario: Access to apply promotion - App Started - Ver mas step
        Given a user with the following criteria
            | criteria                 |
            | flexible financing offer |
            | fixed msi                |
        And the user accesses to dashboard
        And the user goes to "modular offering flexible financing offer" using deeplink navigation
        And the analytics interceptor service is initiated
        When the user deploys the "promotion detail" modal
        Then the analytics events contains the following variables
            | item                       | value                                                                 | type         | event       |
            | analytics                  | analytics/glomo_base                                                  | json schema  | App Started |
            | version DL                 | 20250414_5.0                                                          | string       | App Started |
            | page intent                | transaccion                                                           | string       | App Started |
            | page segment               | personas                                                              | string       | App Started |
            | page name                  | app:privada:personas:promocion diferimiento de compras:1 confirmacion | string       | App Started |
            | sysEnv                     | app                                                                   | string       | App Started |
            | channel                    | online                                                                | string       | App Started |
            | language                   | ES                                                                    | string       | App Started |
            | level 1                    | promocion diferimiento de compras                                     | string       | App Started |
            | level 2                    | 1 confirmacion                                                        | string       | App Started |
            | business unit              | BBVA Mexico                                                           | string       | App Started |
            | site app name              | App BBVA Mexico                                                       | string       | App Started |
            | project name               | Glomo                                                                 | string       | App Started |
            | page area                  | privada                                                               | string       | App Started |
            | device user agent          | GLOMO_MX/99.99.99 (Android;14;Samsung)                                | string       | App Started |
            | device mobile              | si                                                                    | string       | App Started |
            | device root                |                                                                       | string       | App Started |
            | user userState             | logado                                                                | string       | App Started |
            | user segment global        | 003001                                                                | string       | App Started |
            | user segment profile       | unica promocion                                                       | string       | App Started |
            | user gender                | gender                                                                | regexp named | App Started |
            | user age                   | age                                                                   | regexp named | App Started |
            | product primary category   | tarjetas                                                              | string       | App Started |
            | product subtype            | tarjetas credito                                                      | string       | App Started |
            | product name               | tarjeta vive bbva                                                     | string       | App Started |
            | product amount             | 186                                                                   | number       | App Started |
            | product currency           | mxn                                                                   | string       | App Started |
            | product payment amount     | 37.2                                                                  | number       | App Started |
            | product number of payments | 5                                                                     | number       | App Started |
            | fulfillment model          | online                                                                | string       | App Started |
            | application type           | operativa                                                             | string       | App Started |
            | application name           | promocion diferimiento de compras                                     | string       | App Started |
            | application step           | ver mas                                                               | string       | App Started |
            | global application         | flexible financing offer                                              | string       | App Started |

    @ANA_EVENT_FFO005
    @analytics
    @web @ios @android
    @MX @backend(test) @vbank @web-done
    Scenario: Access to apply promotion - App Started - Modificar step
        Given a user with the following criteria
            | criteria                 |
            | flexible financing offer |
            | multi skip               |
        And the user accesses to dashboard
        And the user goes to "modular offering flexible financing offer" using deeplink navigation
        And the user accepts the onboarding
        And the user "accepts" "skip payment" promotion to apply
        And the analytics interceptor service is initiated
        When the user "consults" the promotion selected
        Then the analytics events contains the following variables
            | item                       | value                                                                 | type         | event       |
            | analytics                  | analytics/glomo_base                                                  | json schema  | App Started |
            | version DL                 | 20250414_5.0                                                          | string       | App Started |
            | page intent                | transaccion                                                           | string       | App Started |
            | page segment               | personas                                                              | string       | App Started |
            | page name                  | app:privada:personas:promocion diferimiento de compras:1 confirmacion | string       | App Started |
            | sysEnv                     | app                                                                   | string       | App Started |
            | channel                    | online                                                                | string       | App Started |
            | language                   | ES                                                                    | string       | App Started |
            | level 1                    | promocion diferimiento de compras                                     | string       | App Started |
            | level 2                    | 1 confirmacion                                                        | string       | App Started |
            | business unit              | BBVA Mexico                                                           | string       | App Started |
            | site app name              | App BBVA Mexico                                                       | string       | App Started |
            | project name               | Glomo                                                                 | string       | App Started |
            | page area                  | privada                                                               | string       | App Started |
            | device user agent          | GLOMO_MX/99.99.99 (Android;14;Samsung)                                | string       | App Started |
            | device mobile              | si                                                                    | string       | App Started |
            | device root                |                                                                       | string       | App Started |
            | user userState             | logado                                                                | string       | App Started |
            | user segment global        | 003001                                                                | string       | App Started |
            | user segment profile       | multiples promociones                                                 | string       | App Started |
            | user gender                | gender                                                                | regexp named | App Started |
            | user age                   | age                                                                   | regexp named | App Started |
            | product primary category   | tarjetas                                                              | string       | App Started |
            | product subtype            | tarjetas credito                                                      | string       | App Started |
            | product name               | tarjeta vive bbva                                                     | string       | App Started |
            | product amount             | 210                                                                   | number       | App Started |
            | product currency           | mxn                                                                   | string       | App Started |
            | product payment amount     |                                                                       | string       | App Started |
            | product number of payments | 0                                                                     | number       | App Started |
            | fulfillment model          | online                                                                | string       | App Started |
            | application type           | operativa                                                             | string       | App Started |
            | application name           | promocion diferimiento de compras                                     | string       | App Started |
            | application step           | modificar                                                             | string       | App Started |
            | global application         | flexible financing offer                                              | string       | App Started |

    @ANA_EVENT_FFO006
    @analytics
    @web @ios @android
    @MX @backend(test) @vbank @web-done
    Scenario: Access to apply promotion - App Completed - Success step
        Given a user with the following criteria
            | criteria                 |
            | flexible financing offer |
            | fixed msi                |
        And the user accesses to dashboard
        And the user goes to "modular offering flexible financing offer" using deeplink navigation
        And the analytics interceptor service is initiated
        When the user confirms to apply the promotion
        Then the analytics events contains the following variables
            | item                         | value                                                                 | type         | event         |
            | analytics                    | analytics/glomo_base                                                  | json schema  | App Completed |
            | version DL                   | 20250414_5.0                                                          | string       | App Completed |
            | page intent                  | transaccion                                                           | string       | App Completed |
            | page segment                 | personas                                                              | string       | App Completed |
            | page name                    | app:privada:personas:promocion diferimiento de compras:pagina exitosa | string       | App Completed |
            | sysEnv                       | app                                                                   | string       | App Completed |
            | channel                      | online                                                                | string       | App Completed |
            | language                     | ES                                                                    | string       | App Completed |
            | level 1                      | promocion diferimiento de compras                                     | string       | App Completed |
            | level 2                      | pagina exitosa                                                        | string       | App Completed |
            | business unit                | BBVA Mexico                                                           | string       | App Completed |
            | site app name                | App BBVA Mexico                                                       | string       | App Completed |
            | project name                 | Glomo                                                                 | string       | App Completed |
            | page area                    | privada                                                               | string       | App Completed |
            | device user agent            | GLOMO_MX/99.99.99 (Android;14;Samsung)                                | string       | App Completed |
            | device mobile                | si                                                                    | string       | App Completed |
            | device root                  |                                                                       | string       | App Completed |
            | user userState               | logado                                                                | string       | App Completed |
            | user segment global          | 003001                                                                | string       | App Completed |
            | user segment profile         | unica promocion                                                       | string       | App Completed |
            | user gender                  | gender                                                                | regexp named | App Completed |
            | user age                     | age                                                                   | regexp named | App Completed |
            | product primary category     | tarjetas                                                              | string       | App Completed |
            | product subtype              | tarjetas credito                                                      | string       | App Completed |
            | product name                 | tarjeta vive bbva                                                     | string       | App Completed |
            | product amount               | 186                                                                   | number       | App Completed |
            | product currency             | mxn                                                                   | string       | App Completed |
            | product payment amount       | 37.2                                                                  | number       | App Completed |
            | product number of payments   | 5                                                                     | number       | App Completed |
            | fulfillment model            | online                                                                | string       | App Completed |
            | application operation number | 003975066501822                                                       | string       | App Completed |
            | application type             | operativa                                                             | string       | App Completed |
            | application name             | promocion diferimiento de compras                                     | string       | App Completed |
            | application step             | pagina exitosa                                                        | string       | App Completed |
            | application state            | finalizado                                                            | string       | App Completed |
            | global application           | flexible financing offer                                              | string       | App Completed |

    @ANA_EVENT_FFO007
    @analytics
    @web @ios @android
    @MX @backend(test) @vbank @web-done
    Scenario: Access to apply promotion - Page View - Seleccion plazo
        Given a user with the following criteria
            | criteria                 |
            | flexible financing offer |
            | multi msi                |
        And the user accesses to dashboard
        And the user goes to "modular offering flexible financing offer" using deeplink navigation
        And the analytics interceptor service is initiated
        When the user accepts the onboarding
        Then the analytics events contains the following variables
            | item                 | value                                                                  | type             | event     |
            | analytics            | analytics/glomo_base                                                   | json schema      | Page View |
            | version DL           | 20250414_5.0                                                           | string           | Page View |
            | page intent          | informacion                                                            | string           | Page View |
            | page segment         | personas                                                               | string           | Page View |
            | page name            | app:privada:personas:promocion diferimiento de compras:seleccion plazo | string           | Page View |
            | sysEnv               | app                                                                    | string           | Page View |
            | channel              | online                                                                 | string           | Page View |
            | language             | ES                                                                     | string           | Page View |
            | level 1              | promocion diferimiento de compras                                      | string           | Page View |
            | level 2              | seleccion plazo                                                        | string           | Page View |
            | business unit        | BBVA Mexico                                                            | string           | Page View |
            | site app name        | App BBVA Mexico                                                        | string           | Page View |
            | project name         | Glomo                                                                  | string           | Page View |
            | page area            | privada                                                                | string           | Page View |
            | device user agent    | GLOMO_MX/99.99.99 (Android;14;Samsung)                                 | string           | Page View |
            | device mobile        | si                                                                     | string           | Page View |
            | device root          |                                                                        | string           | Page View |
            | user userState       | logado                                                                 | string           | Page View |
            | user segment global  | 003001                                                                 | string           | Page View |
            | user segment profile | multiples promociones                                                  | string           | Page View |
            | user gender          | gender                                                                 | regexp named     | Page View |
            | user age             | age                                                                    | regexp named     | Page View |
            | application name     |                                                                        | empty str object | Page View |

    @ANA_EVENT_FFO008
    @analytics
    @web @ios @android
    @MX @backend(test) @vbank @web-done
    Scenario: Access to apply promotion - Page View - Onboarding
        Given a user with the following criteria
            | criteria                 |
            | flexible financing offer |
            | multi msi                |
        And the user accesses to dashboard
        And the analytics interceptor service is initiated
        When the user goes to "modular offering flexible financing offer" using deeplink navigation
        Then the analytics events contains the following variables
            | item                 | value                                                             | type             | event     |
            | analytics            | analytics/glomo_base                                              | json schema      | Page View |
            | version DL           | 20250414_5.0                                                      | string           | Page View |
            | page intent          | informacion                                                       | string           | Page View |
            | page segment         | personas                                                          | string           | Page View |
            | page name            | app:privada:personas:promocion diferimiento de compras:onboarding | string           | Page View |
            | sysEnv               | app                                                               | string           | Page View |
            | channel              | online                                                            | string           | Page View |
            | language             | ES                                                                | string           | Page View |
            | level 1              | promocion diferimiento de compras                                 | string           | Page View |
            | level 2              | onboarding                                                        | string           | Page View |
            | business unit        | BBVA Mexico                                                       | string           | Page View |
            | site app name        | App BBVA Mexico                                                   | string           | Page View |
            | project name         | Glomo                                                             | string           | Page View |
            | page area            | privada                                                           | string           | Page View |
            | device user agent    | GLOMO_MX/99.99.99 (Android;14;Samsung)                            | string           | Page View |
            | device mobile        | si                                                                | string           | Page View |
            | device root          |                                                                   | string           | Page View |
            | user userState       | logado                                                            | string           | Page View |
            | user segment global  | 003001                                                            | string           | Page View |
            | user segment profile | multiples promociones                                             | string           | Page View |
            | user gender          | gender                                                            | regexp named     | Page View |
            | user age             | age                                                               | regexp named     | Page View |
            | application name     |                                                                   | empty str object | Page View |

    @ANA_EVENT_FFO009
    @analytics
    @web @ios @android
    @MX @backend(test) @vbank @web-done
    Scenario: Access to apply promotion - Page View - Seleccion fecha de pago
        Given a user with the following criteria
            | criteria                 |
            | flexible financing offer |
            | multi skip               |
        And the user accesses to dashboard
        And the user goes to "modular offering flexible financing offer" using deeplink navigation
        And the analytics interceptor service is initiated
        When the user accepts the onboarding
        Then the analytics events contains the following variables
            | item                 | value                                                                          | type             | event     |
            | analytics            | analytics/glomo_base                                                           | json schema      | Page View |
            | version DL           | 20250414_5.0                                                                   | string           | Page View |
            | page intent          | informacion                                                                    | string           | Page View |
            | page segment         | personas                                                                       | string           | Page View |
            | page name            | app:privada:personas:promocion diferimiento de compras:seleccion fecha de pago | string           | Page View |
            | sysEnv               | app                                                                            | string           | Page View |
            | channel              | online                                                                         | string           | Page View |
            | language             | ES                                                                             | string           | Page View |
            | level 1              | promocion diferimiento de compras                                              | string           | Page View |
            | level 2              | seleccion fecha de pago                                                        | string           | Page View |
            | business unit        | BBVA Mexico                                                                    | string           | Page View |
            | site app name        | App BBVA Mexico                                                                | string           | Page View |
            | project name         | Glomo                                                                          | string           | Page View |
            | page area            | privada                                                                        | string           | Page View |
            | device user agent    | GLOMO_MX/99.99.99 (Android;14;Samsung)                                         | string           | Page View |
            | device mobile        | si                                                                             | string           | Page View |
            | device root          |                                                                                | string           | Page View |
            | user userState       | logado                                                                         | string           | Page View |
            | user segment global  | 003001                                                                         | string           | Page View |
            | user segment profile | multiples promociones                                                          | string           | Page View |
            | user gender          | gender                                                                         | regexp named     | Page View |
            | user age             | age                                                                            | regexp named     | Page View |
            | application name     |                                                                                | empty str object | Page View |

    @ANA_EVENT_FFO010
    @analytics
    @web @ios @android
    @MX @backend(test) @vbank @web-done
    Scenario: Access to apply promotion - Page View - Seleccion de promocion
        Given a user with the following criteria
            | criteria                 |
            | flexible financing offer |
            | multi combo              |
        And the user accesses to dashboard
        And the user goes to "modular offering flexible financing offer" using deeplink navigation
        And the analytics interceptor service is initiated
        When the user accepts the onboarding
        Then the analytics events contains the following variables
            | item                 | value                                                                         | type             | event     |
            | analytics            | analytics/glomo_base                                                          | json schema      | Page View |
            | version DL           | 20250414_5.0                                                                  | string           | Page View |
            | page intent          | informacion                                                                   | string           | Page View |
            | page segment         | personas                                                                      | string           | Page View |
            | page name            | app:privada:personas:promocion diferimiento de compras:seleccion de promocion | string           | Page View |
            | sysEnv               | app                                                                           | string           | Page View |
            | channel              | online                                                                        | string           | Page View |
            | language             | ES                                                                            | string           | Page View |
            | level 1              | promocion diferimiento de compras                                             | string           | Page View |
            | level 2              | seleccion de promocion                                                        | string           | Page View |
            | business unit        | BBVA Mexico                                                                   | string           | Page View |
            | site app name        | App BBVA Mexico                                                               | string           | Page View |
            | project name         | Glomo                                                                         | string           | Page View |
            | page area            | privada                                                                       | string           | Page View |
            | device user agent    | GLOMO_MX/99.99.99 (Android;14;Samsung)                                        | string           | Page View |
            | device mobile        | si                                                                            | string           | Page View |
            | device root          |                                                                               | string           | Page View |
            | user userState       | logado                                                                        | string           | Page View |
            | user segment global  | 003001                                                                        | string           | Page View |
            | user segment profile | multiples promociones                                                         | string           | Page View |
            | user gender          | gender                                                                        | regexp named     | Page View |
            | user age             | age                                                                           | regexp named     | Page View |
            | application name     |                                                                               | empty str object | Page View |

    @ANA_EVENT_FFO011
    @analytics
    @web @ios @android
    @MX @backend(test) @vbank @web-done
    Scenario: Access to apply promotion - Page View - Ya esta no disponible
        Given a user with the following criteria
            | criteria                 |
            | flexible financing offer |
            | fixed msi                |
        And the user accesses to dashboard
        And the analytics interceptor service is initiated
        When the user goes to "modular offering flexible financing offer" using deeplink navigation
        Then the analytics events contains the following variables
            | item                 | value                                                                        | type             | event     |
            | analytics            | analytics/glomo_base                                                         | json schema      | Page View |
            | version DL           | 20250414_5.0                                                                 | string           | Page View |
            | page intent          | informacion                                                                  | string           | Page View |
            | page segment         | personas                                                                     | string           | Page View |
            | page name            | app:privada:personas:promocion diferimiento de compras:ya esta no disponible | string           | Page View |
            | sysEnv               | app                                                                          | string           | Page View |
            | channel              | online                                                                       | string           | Page View |
            | language             | ES                                                                           | string           | Page View |
            | level 1              | promocion diferimiento de compras                                            | string           | Page View |
            | level 2              | ya esta no disponible                                                        | string           | Page View |
            | business unit        | BBVA Mexico                                                                  | string           | Page View |
            | site app name        | App BBVA Mexico                                                              | string           | Page View |
            | project name         | Glomo                                                                        | string           | Page View |
            | page area            | privada                                                                      | string           | Page View |
            | device user agent    | GLOMO_MX/99.99.99 (Android;14;Samsung)                                       | string           | Page View |
            | device mobile        | si                                                                           | string           | Page View |
            | device root          |                                                                              | string           | Page View |
            | user userState       | logado                                                                       | string           | Page View |
            | user segment global  | 003001                                                                       | string           | Page View |
            | user segment profile | unica promocion                                                              | string           | Page View |
            | user gender          | gender                                                                       | regexp named     | Page View |
            | user age             | age                                                                          | regexp named     | Page View |
            | application name     |                                                                              | empty str object | Page View |

    @ANA_EVENT_FFO012
    @analytics
    @web @ios @android
    @MX @backend(test) @vbank @web-done
    Scenario: Access to apply promotion - Page View - Ya aplicada a esta compra
        Given a user with the following criteria
            | criteria                 |
            | flexible financing offer |
            | fixed msi                |
        And the user accesses to dashboard
        And the user goes to "modular offering flexible financing offer" using deeplink navigation
        And the analytics interceptor service is initiated
        When the user confirms to apply the promotion
        Then the analytics events contains the following variables
            | item                 | value                                                                            | type             | event     |
            | analytics            | analytics/glomo_base                                                             | json schema      | Page View |
            | version DL           | 20250414_5.0                                                                     | string           | Page View |
            | page intent          | informacion                                                                      | string           | Page View |
            | page segment         | personas                                                                         | string           | Page View |
            | page name            | app:privada:personas:promocion diferimiento de compras:ya aplicada a esta compra | string           | Page View |
            | sysEnv               | app                                                                              | string           | Page View |
            | channel              | online                                                                           | string           | Page View |
            | language             | ES                                                                               | string           | Page View |
            | level 1              | promocion diferimiento de compras                                                | string           | Page View |
            | level 2              | ya aplicada a esta compra                                                        | string           | Page View |
            | business unit        | BBVA Mexico                                                                      | string           | Page View |
            | site app name        | App BBVA Mexico                                                                  | string           | Page View |
            | project name         | Glomo                                                                            | string           | Page View |
            | page area            | privada                                                                          | string           | Page View |
            | device user agent    | GLOMO_MX/99.99.99 (Android;14;Samsung)                                           | string           | Page View |
            | device mobile        | si                                                                               | string           | Page View |
            | device root          |                                                                                  | string           | Page View |
            | user userState       | logado                                                                           | string           | Page View |
            | user segment global  | 003001                                                                           | string           | Page View |
            | user segment profile | unica promocion                                                                  | string           | Page View |
            | user gender          | gender                                                                           | regexp named     | Page View |
            | user age             | age                                                                              | regexp named     | Page View |
            | application name     |                                                                                  | empty str object | Page View |

    @ANA_EVENT_FFO013
    @analytics
    @web @ios @android
    @MX @backend(test) @vbank @web-done
    Scenario: Access to apply promotion - Page View - Compra en aclaracion
        Given a user with the following criteria
            | criteria                 |
            | flexible financing offer |
            | fixed msi                |
        And the user accesses to dashboard
        And the user goes to "modular offering flexible financing offer" using deeplink navigation
        And the analytics interceptor service is initiated
        When the user confirms to apply the promotion
        Then the analytics events contains the following variables
            | item                 | value                                                                       | type             | event     |
            | analytics            | analytics/glomo_base                                                        | json schema      | Page View |
            | version DL           | 20250414_5.0                                                                | string           | Page View |
            | page intent          | informacion                                                                 | string           | Page View |
            | page segment         | personas                                                                    | string           | Page View |
            | page name            | app:privada:personas:promocion diferimiento de compras:compra en aclaracion | string           | Page View |
            | sysEnv               | app                                                                         | string           | Page View |
            | channel              | online                                                                      | string           | Page View |
            | language             | ES                                                                          | string           | Page View |
            | level 1              | promocion diferimiento de compras                                           | string           | Page View |
            | level 2              | compra en aclaracion                                                        | string           | Page View |
            | business unit        | BBVA Mexico                                                                 | string           | Page View |
            | site app name        | App BBVA Mexico                                                             | string           | Page View |
            | project name         | Glomo                                                                       | string           | Page View |
            | page area            | privada                                                                     | string           | Page View |
            | device user agent    | GLOMO_MX/99.99.99 (Android;14;Samsung)                                      | string           | Page View |
            | device mobile        | si                                                                          | string           | Page View |
            | device root          |                                                                             | string           | Page View |
            | user userState       | logado                                                                      | string           | Page View |
            | user segment global  | 003001                                                                      | string           | Page View |
            | user segment profile | unica promocion                                                             | string           | Page View |
            | user gender          | gender                                                                      | regexp named     | Page View |
            | user age             | age                                                                         | regexp named     | Page View |
            | application name     |                                                                             | empty str object | Page View |

    @ANA_EVENT_FFO014
    @analytics
    @web @ios @android
    @MX @backend(test) @vbank @web-done
    Scenario: Access to apply promotion - Page View - Compra en solictud de devolucion
        Given a user with the following criteria
            | criteria                 |
            | flexible financing offer |
            | fixed msi                |
        And the user accesses to dashboard
        And the user goes to "modular offering flexible financing offer" using deeplink navigation
        And the analytics interceptor service is initiated
        When the user confirms to apply the promotion
        Then the analytics events contains the following variables
            | item                 | value                                                                                   | type             | event     |
            | analytics            | analytics/glomo_base                                                                    | json schema      | Page View |
            | version DL           | 20250414_5.0                                                                            | string           | Page View |
            | page intent          | informacion                                                                             | string           | Page View |
            | page segment         | personas                                                                                | string           | Page View |
            | page name            | app:privada:personas:promocion diferimiento de compras:compra en solictud de devolucion | string           | Page View |
            | sysEnv               | app                                                                                     | string           | Page View |
            | channel              | online                                                                                  | string           | Page View |
            | language             | ES                                                                                      | string           | Page View |
            | level 1              | promocion diferimiento de compras                                                       | string           | Page View |
            | level 2              | compra en solictud de devolucion                                                        | string           | Page View |
            | business unit        | BBVA Mexico                                                                             | string           | Page View |
            | site app name        | App BBVA Mexico                                                                         | string           | Page View |
            | project name         | Glomo                                                                                   | string           | Page View |
            | page area            | privada                                                                                 | string           | Page View |
            | device user agent    | GLOMO_MX/99.99.99 (Android;14;Samsung)                                                  | string           | Page View |
            | device mobile        | si                                                                                      | string           | Page View |
            | device root          |                                                                                         | string           | Page View |
            | user userState       | logado                                                                                  | string           | Page View |
            | user segment global  | 003001                                                                                  | string           | Page View |
            | user segment profile | unica promocion                                                                         | string           | Page View |
            | user gender          | gender                                                                                  | regexp named     | Page View |
            | user age             | age                                                                                     | regexp named     | Page View |
            | application name     |                                                                                         | empty str object | Page View |

    @ANA_EVENT_FFO015
    @analytics
    @web @ios @android
    @MX @backend(test) @vbank @web-done
    Scenario: Access to apply promotion - Page View - No es posible aplicar promocion
        Given a user with the following criteria
            | criteria                 |
            | flexible financing offer |
            | fixed msi                |
        And the user accesses to dashboard
        And the user goes to "modular offering flexible financing offer" using deeplink navigation
        And the analytics interceptor service is initiated
        When the user confirms to apply the promotion
        Then the analytics events contains the following variables
            | item                 | value                                                                                  | type             | event     |
            | analytics            | analytics/glomo_base                                                                   | json schema      | Page View |
            | version DL           | 20250414_5.0                                                                           | string           | Page View |
            | page intent          | informacion                                                                            | string           | Page View |
            | page segment         | personas                                                                               | string           | Page View |
            | page name            | app:privada:personas:promocion diferimiento de compras:no es posible aplicar promocion | string           | Page View |
            | sysEnv               | app                                                                                    | string           | Page View |
            | channel              | online                                                                                 | string           | Page View |
            | language             | ES                                                                                     | string           | Page View |
            | level 1              | promocion diferimiento de compras                                                      | string           | Page View |
            | level 2              | no es posible aplicar promocion                                                        | string           | Page View |
            | business unit        | BBVA Mexico                                                                            | string           | Page View |
            | site app name        | App BBVA Mexico                                                                        | string           | Page View |
            | project name         | Glomo                                                                                  | string           | Page View |
            | page area            | privada                                                                                | string           | Page View |
            | device user agent    | GLOMO_MX/99.99.99 (Android;14;Samsung)                                                 | string           | Page View |
            | device mobile        | si                                                                                     | string           | Page View |
            | device root          |                                                                                        | string           | Page View |
            | user userState       | logado                                                                                 | string           | Page View |
            | user segment global  | 003001                                                                                 | string           | Page View |
            | user segment profile | unica promocion                                                                        | string           | Page View |
            | user gender          | gender                                                                                 | regexp named     | Page View |
            | user age             | age                                                                                    | regexp named     | Page View |
            | application name     |                                                                                        | empty str object | Page View |

    @ANA_EVENT_FFO016
    @analytics
    @web @ios @android
    @MX @backend(test) @vbank @web-done
    Scenario: Access to apply promotion - Page View - Liberar linea de credito
        Given a user with the following criteria
            | criteria                 |
            | flexible financing offer |
            | fixed msi                |
        And the user accesses to dashboard
        And the user goes to "modular offering flexible financing offer" using deeplink navigation
        And the analytics interceptor service is initiated
        When the user confirms to apply the promotion
        Then the analytics events contains the following variables
            | item                 | value                                                                           | type             | event     |
            | analytics            | analytics/glomo_base                                                            | json schema      | Page View |
            | version DL           | 20250414_5.0                                                                    | string           | Page View |
            | page intent          | informacion                                                                     | string           | Page View |
            | page segment         | personas                                                                        | string           | Page View |
            | page name            | app:privada:personas:promocion diferimiento de compras:liberar linea de credito | string           | Page View |
            | sysEnv               | app                                                                             | string           | Page View |
            | channel              | online                                                                          | string           | Page View |
            | language             | ES                                                                              | string           | Page View |
            | level 1              | promocion diferimiento de compras                                               | string           | Page View |
            | level 2              | liberar linea de credito                                                        | string           | Page View |
            | business unit        | BBVA Mexico                                                                     | string           | Page View |
            | site app name        | App BBVA Mexico                                                                 | string           | Page View |
            | project name         | Glomo                                                                           | string           | Page View |
            | page area            | privada                                                                         | string           | Page View |
            | device user agent    | GLOMO_MX/99.99.99 (Android;14;Samsung)                                          | string           | Page View |
            | device mobile        | si                                                                              | string           | Page View |
            | device root          |                                                                                 | string           | Page View |
            | user userState       | logado                                                                          | string           | Page View |
            | user segment global  | 003001                                                                          | string           | Page View |
            | user segment profile | unica promocion                                                                 | string           | Page View |
            | user gender          | gender                                                                          | regexp named     | Page View |
            | user age             | age                                                                             | regexp named     | Page View |
            | application name     |                                                                                 | empty str object | Page View |

    @ANA_EVENT_FFO017
    @analytics
    @web @ios @android
    @MX @backend(test) @vbank @web-done
    Scenario: Access to apply promotion - Page View - Pagos pendientes
        Given a user with the following criteria
            | criteria                 |
            | flexible financing offer |
            | fixed msi                |
        And the user accesses to dashboard
        And the user goes to "modular offering flexible financing offer" using deeplink navigation
        And the analytics interceptor service is initiated
        When the user confirms to apply the promotion
        Then the analytics events contains the following variables
            | item                 | value                                                                   | type             | event     |
            | analytics            | analytics/glomo_base                                                    | json schema      | Page View |
            | version DL           | 20250414_5.0                                                            | string           | Page View |
            | page intent          | informacion                                                             | string           | Page View |
            | page segment         | personas                                                                | string           | Page View |
            | page name            | app:privada:personas:promocion diferimiento de compras:pagos pendientes | string           | Page View |
            | sysEnv               | app                                                                     | string           | Page View |
            | channel              | online                                                                  | string           | Page View |
            | language             | ES                                                                      | string           | Page View |
            | level 1              | promocion diferimiento de compras                                       | string           | Page View |
            | level 2              | pagos pendientes                                                        | string           | Page View |
            | business unit        | BBVA Mexico                                                             | string           | Page View |
            | site app name        | App BBVA Mexico                                                         | string           | Page View |
            | project name         | Glomo                                                                   | string           | Page View |
            | page area            | privada                                                                 | string           | Page View |
            | device user agent    | GLOMO_MX/99.99.99 (Android;14;Samsung)                                  | string           | Page View |
            | device mobile        | si                                                                      | string           | Page View |
            | device root          |                                                                         | string           | Page View |
            | user userState       | logado                                                                  | string           | Page View |
            | user segment global  | 003001                                                                  | string           | Page View |
            | user segment profile | unica promocion                                                         | string           | Page View |
            | user gender          | gender                                                                  | regexp named     | Page View |
            | user age             | age                                                                     | regexp named     | Page View |
            | application name     |                                                                         | empty str object | Page View |

    @ANA_EVENT_FFO018
    @analytics
    @web @ios @android
    @MX @backend(test) @vbank @web-done
    Scenario: Access to apply promotion - Page View - Pronto promociones
        Given a user with the following criteria
            | criteria                 |
            | flexible financing offer |
            | fixed msi                |
        And the user accesses to dashboard
        And the user goes to "modular offering flexible financing offer" using deeplink navigation
        And the analytics interceptor service is initiated
        When the user confirms to apply the promotion
        Then the analytics events contains the following variables
            | item                 | value                                                                     | type             | event     |
            | analytics            | analytics/glomo_base                                                      | json schema      | Page View |
            | version DL           | 20250414_5.0                                                              | string           | Page View |
            | page intent          | informacion                                                               | string           | Page View |
            | page segment         | personas                                                                  | string           | Page View |
            | page name            | app:privada:personas:promocion diferimiento de compras:pronto promociones | string           | Page View |
            | sysEnv               | app                                                                       | string           | Page View |
            | channel              | online                                                                    | string           | Page View |
            | language             | ES                                                                        | string           | Page View |
            | level 1              | promocion diferimiento de compras                                         | string           | Page View |
            | level 2              | pronto promociones                                                        | string           | Page View |
            | business unit        | BBVA Mexico                                                               | string           | Page View |
            | site app name        | App BBVA Mexico                                                           | string           | Page View |
            | project name         | Glomo                                                                     | string           | Page View |
            | page area            | privada                                                                   | string           | Page View |
            | device user agent    | GLOMO_MX/99.99.99 (Android;14;Samsung)                                    | string           | Page View |
            | device mobile        | si                                                                        | string           | Page View |
            | device root          |                                                                           | string           | Page View |
            | user userState       | logado                                                                    | string           | Page View |
            | user segment global  | 003001                                                                    | string           | Page View |
            | user segment profile | unica promocion                                                           | string           | Page View |
            | user gender          | gender                                                                    | regexp named     | Page View |
            | user age             | age                                                                       | regexp named     | Page View |
            | application name     |                                                                           | empty str object | Page View |

    @ANA_EVENT_FFO019
    @analytics
    @web @ios @android
    @MX @backend(test) @vbank @web-done
    Scenario: Access to apply promotion - Page View - No disponible por ahora
        Given a user with the following criteria
            | criteria                 |
            | flexible financing offer |
            | fixed msi                |
        And the user accesses to dashboard
        And the user goes to "modular offering flexible financing offer" using deeplink navigation
        And the analytics interceptor service is initiated
        When the user confirms to apply the promotion
        Then the analytics events contains the following variables
            | item                 | value                                                                          | type             | event     |
            | analytics            | analytics/glomo_base                                                           | json schema      | Page View |
            | version DL           | 20250414_5.0                                                                   | string           | Page View |
            | page intent          | informacion                                                                    | string           | Page View |
            | page segment         | personas                                                                       | string           | Page View |
            | page name            | app:privada:personas:promocion diferimiento de compras:no disponible por ahora | string           | Page View |
            | sysEnv               | app                                                                            | string           | Page View |
            | channel              | online                                                                         | string           | Page View |
            | language             | ES                                                                             | string           | Page View |
            | level 1              | promocion diferimiento de compras                                              | string           | Page View |
            | level 2              | no disponible por ahora                                                        | string           | Page View |
            | business unit        | BBVA Mexico                                                                    | string           | Page View |
            | site app name        | App BBVA Mexico                                                                | string           | Page View |
            | project name         | Glomo                                                                          | string           | Page View |
            | page area            | privada                                                                        | string           | Page View |
            | device user agent    | GLOMO_MX/99.99.99 (Android;14;Samsung)                                         | string           | Page View |
            | device mobile        | si                                                                             | string           | Page View |
            | device root          |                                                                                | string           | Page View |
            | user userState       | logado                                                                         | string           | Page View |
            | user segment global  | 003001                                                                         | string           | Page View |
            | user segment profile | unica promocion                                                                | string           | Page View |
            | user gender          | gender                                                                         | regexp named     | Page View |
            | user age             | age                                                                            | regexp named     | Page View |
            | application name     |                                                                                | empty str object | Page View |

    @ANA_EVENT_FFO020
    @analytics
    @web @ios @android
    @MX @backend(test) @vbank @web-done
    Scenario: Access to apply promotion - Page View - Error operacion no disponible
        Given a user with the following criteria
            | criteria                 |
            | flexible financing offer |
            | fixed msi                |
        And the user accesses to dashboard
        And the user goes to "modular offering flexible financing offer" using deeplink navigation
        And the analytics interceptor service is initiated
        When the user retries "3" times
        Then the analytics events contains the following variables
            | item                 | value                                                                                | type             | event     |
            | analytics            | analytics/glomo_base                                                                 | json schema      | Page View |
            | version DL           | 20250414_5.0                                                                         | string           | Page View |
            | page intent          | informacion                                                                          | string           | Page View |
            | page segment         | personas                                                                             | string           | Page View |
            | page name            | app:privada:personas:promocion diferimiento de compras:error operacion no disponible | string           | Page View |
            | sysEnv               | app                                                                                  | string           | Page View |
            | channel              | online                                                                               | string           | Page View |
            | language             | ES                                                                                   | string           | Page View |
            | level 1              | promocion diferimiento de compras                                                    | string           | Page View |
            | level 2              | error operacion no disponible                                                        | string           | Page View |
            | business unit        | BBVA Mexico                                                                          | string           | Page View |
            | site app name        | App BBVA Mexico                                                                      | string           | Page View |
            | project name         | Glomo                                                                                | string           | Page View |
            | error page           | error operacion no disponible                                                        | string           | Page View |
            | page area            | privada                                                                              | string           | Page View |
            | device user agent    | GLOMO_MX/99.99.99 (Android;14;Samsung)                                               | string           | Page View |
            | device mobile        | si                                                                                   | string           | Page View |
            | device root          |                                                                                      | string           | Page View |
            | user userState       | logado                                                                               | string           | Page View |
            | user segment global  | 003001                                                                               | string           | Page View |
            | user segment profile | unica promocion                                                                      | string           | Page View |
            | user gender          | gender                                                                               | regexp named     | Page View |
            | user age             | age                                                                                  | regexp named     | Page View |
            | application name     |                                                                                      | empty str object | Page View |

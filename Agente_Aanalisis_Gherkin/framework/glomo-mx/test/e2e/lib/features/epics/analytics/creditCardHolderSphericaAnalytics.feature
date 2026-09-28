@creditCardHolderSphericaAnalytics
Feature: Credit Card Holder Spherica Analytics

    @ANA_CCHS001
    @analytics
    @web @android @ios
    @MX @backend(test) @vbank
    @web-done
    Scenario: credit card holder - Click on the offer
        Given a user with the following criteria
            | criteria               |
            | credit card offer unam |
        And the user accesses to dashboard
        And the analytics interceptor service is initiated
        When the user accesses to the "TARJETA DE CREDITO" offer
        Then the analytics events contains the following variables
            | item                                         | value                                          | type         | event              | event number |
            | analytics                                    | analytics/glomo_base                           | json schema  | App On Click Start | 2            |
            | page name                                    | app:privada:personas:posicion global:destacado | string       | App On Click Start | 2            |
            | level 1                                      | posicion global                                | string       | App On Click Start | 2            |
            | level 2                                      | destacado                                      | string       | App On Click Start | 2            |
            | language                                     | ES                                             | string       | App On Click Start | 2            |
            | page area                                    | privada                                        | string       | App On Click Start | 2            |
            | page intent                                  | informacion                                    | string       | App On Click Start | 2            |
            | channel                                      | online                                         | string       | App On Click Start | 2            |
            | page instance ID                             | de                                             | string       | App On Click Start | 2            |
            | version DL                                   | 20250414_5.0                                   | string       | App On Click Start | 2            |
            | page info version                            | appVersion                                     | regexp named | App On Click Start | 2            |
            | page segment                                 | personas                                       | string       | App On Click Start | 2            |
            | sysEnv                                       | app                                            | string       | App On Click Start | 2            |
            | business unit                                | BBVA Mexico                                    | string       | App On Click Start | 2            |
            | site app name                                | App BBVA Mexico                                | string       | App On Click Start | 2            |
            | site app name                                | App BBVA Mexico                                | string       | App On Click Start | 2            |
            | project name                                 | Glomo                                          | string       | App On Click Start | 2            |
            | device mobile                                | si                                             | string       | App On Click Start | 2            |
            | user userState                               | logado                                         | string       | App On Click Start | 2            |
            | profile ID                                   | profileID                                      | regexp named | App On Click Start | 2            |
            | user segment global                          | 003001                                         | string       | App On Click Start | 2            |
            | global application                           | credit card holder                             | string       | App On Click Start | 2            |
            | application name                             | tarjeta de credito one click                   | string       | App On Click Start | 2            |
            | application type                             | contratacion                                   | string       | App On Click Start | 2            |
            | application step                             | posicion global                                | string       | App On Click Start | 2            |
            | fulfillment model                            | online/offline                                 | string       | App On Click Start | 2            |
            | custom fields                                | tipo de cliente:n4                             | string       | App On Click Start | 2            |
            | product primary category                     | tarjetas                                       | string       | App On Click Start | 2            |
            | product subtype                              | tarjetas credito                               | string       | App On Click Start | 2            |
            | internal campaign attributes location        | dashboard destacado-nba-centro-3-1-5           | string       | App On Click Start | 2            |
            | internal campaign attributes campaign format | carrusel                                       | string       | App On Click Start | 2            |
            | internal campaign attributes collective code | -                                              | string       | App On Click Start | 2            |
            | internal campaign attributes name            | -contrata una tarjeta de credito con una linea | string       | App On Click Start | 2            |
            | internal campaign attributes product         |                                                | string       | App On Click Start | 2            |
            | internal campaign attributes product code    | 0TDC                                           | string       | App On Click Start | 2            |
            | internal campaign attributes quantity        | 300000                                         | number       | App On Click Start | 2            |
            | internal campaign event name                 | IntCmpClick                                    | string       | App On Click Start | 2            |
            | internal campaign site action name           |                                                | string       | App On Click Start | 2            |

    @ANA_CCHS002
    @analytics
    @web @android @ios
    @MX @backend(test) @vbank
    @web-done
    Scenario: credit card holder - App Page Visit
        Given a user with the following criteria
            | criteria               |
            | credit card offer unam |
        And the user goes to the offers section
        And  the analytics interceptor service is initiated
        When the user navigates to the offers and opportunities section
        Then the analytics events contains the following variables
            | item                     | value                                                                   | type         | event          |
            | analytics                | analytics/glomo_base                                                    | json schema  | App Page Visit |
            | page name                | app:privada:personas:tarjetas:tarjeta de credito one click:1 beneficios | string       | App Page Visit |
            | level 1                  | tarjetas                                                                | string       | App Page Visit |
            | level 2                  | tarjeta de credito one click                                            | string       | App Page Visit |
            | level 3                  | 1 beneficios                                                            | string       | App Page Visit |
            | language                 | ES                                                                      | string       | App Page Visit |
            | page area                | privada                                                                 | string       | App Page Visit |
            | page intent              | transaccion                                                             | string       | App Page Visit |
            | channel                  | online                                                                  | string       | App Page Visit |
            | page instance ID         | de                                                                      | string       | App Page Visit |
            | version DL               | 20250414_5.0                                                            | string       | App Page Visit |
            | page info version        | appVersion                                                              | regexp named | App Page Visit |
            | page segment             | personas                                                                | string       | App Page Visit |
            | sysEnv                   | app                                                                     | string       | App Page Visit |
            | business unit            | BBVA Mexico                                                             | string       | App Page Visit |
            | site app name            | App BBVA Mexico                                                         | string       | App Page Visit |
            | project name             | Glomo                                                                   | string       | App Page Visit |
            | device mobile            | si                                                                      | string       | App Page Visit |
            | user userState           | logado                                                                  | string       | App Page Visit |
            | profile ID               | profileID                                                               | regexp named | App Page Visit |
            | user segment global      | 003001                                                                  | string       | App Page Visit |
            | global application       | credit card holder                                                      | string       | App Page Visit |
            | application process      | proceso preaprobado                                                     | string       | App Page Visit |
            | application name         | tarjeta de credito one click                                            | string       | App Page Visit |
            | application type         | contratacion                                                            | string       | App Page Visit |
            | application step         | 1 beneficios                                                            | string       | App Page Visit |
            | fulfillment model        | online/offline                                                          | string       | App Page Visit |
            | custom fields            | tipo de cliente:n4                                                      | string       | App Page Visit |
            | qualified visits         | true                                                                    | string       | App Page Visit |
            | product primary category | tarjetas                                                                | string       | App Page Visit |
            | product subtype          | tarjetas credito                                                        | string       | App Page Visit |
            | user segment profile     | contratacion app                                                        | string       | App Page Visit |

    @ANA_CCHS003
    @analytics
    @web @android @ios
    @MX @backend(test) @vbank
    @web-done
    Scenario: credit card holder - App started
        Given a user with the following criteria
            | criteria               |
            | credit card offer unam |
        And the user navigates to the "credit card holder" section
        And the analytics interceptor service is initiated
        When the user performs "continue from the offer page" with "normal"
        Then the analytics events contains the following variables
            | item                     | value                                                                   | type         | event       |
            | analytics                | analytics/glomo_base                                                    | json schema  | App Started |
            | page name                | app:privada:personas:tarjetas:tarjeta de credito one click:1 beneficios | string       | App Started |
            | level 1                  | tarjetas                                                                | string       | App Started |
            | level 2                  | tarjeta de credito one click                                            | string       | App Started |
            | level 3                  | 1 beneficios                                                            | string       | App Started |
            | language                 | ES                                                                      | string       | App Started |
            | page area                | privada                                                                 | string       | App Started |
            | page intent              | transaccion                                                             | string       | App Started |
            | channel                  | online                                                                  | string       | App Started |
            | page instance ID         | de                                                                      | string       | App Started |
            | version DL               | 20250414_5.0                                                            | string       | App Started |
            | page info version        | appVersion                                                              | regexp named | App Started |
            | page segment             | personas                                                                | string       | App Started |
            | sysEnv                   | app                                                                     | string       | App Started |
            | business unit            | BBVA Mexico                                                             | string       | App Started |
            | site app name            | App BBVA Mexico                                                         | string       | App Started |
            | project name             | Glomo                                                                   | string       | App Started |
            | device mobile            | si                                                                      | string       | App Started |
            | user userState           | logado                                                                  | string       | App Started |
            | profile ID               | profileID                                                               | regexp named | App Started |
            | user segment global      | 003001                                                                  | string       | App Started |
            | global application       | credit card holder                                                      | string       | App Started |
            | application offer        | beneficio 0028                                                          | string       | App Started |
            | application process      | proceso preaprobado                                                     | string       | App Started |
            | application name         | tarjeta de credito one click                                            | string       | App Started |
            | application type         | contratacion                                                            | string       | App Started |
            | application step         | ver oferta                                                              | string       | App Started |
            | fulfillment model        | online/offline                                                          | string       | App Started |
            | custom fields            | tipo de cliente:n4                                                      | string       | App Started |
            | product primary category | tarjetas                                                                | string       | App Started |
            | product subtype          | tarjetas credito                                                        | string       | App Started |
            | user segment profile     | contratacion app                                                        | string       | App Started |

    @ANA_CCHS004
    @analytics
    @web @android @ios
    @MX @backend(test) @vbank
    @web-done
    Scenario: credit card holder - App Step Your Card
        Given a user with the following criteria
            | criteria               |
            | credit card offer unam |
        And the user navigates to the "credit card holder" section
        And the analytics interceptor service is initiated
        When the user performs "continue from the offer page" with "normal"
        Then the analytics events contains the following variables
            | item                     | value                                                                  | type         | event      |
            | analytics                | analytics/glomo_base                                                   | json schema  | App Step 2 |
            | page name                | app:privada:personas:tarjetas:tarjeta de credito one click:2 solicitud | string       | App Step 2 |
            | level 1                  | tarjetas                                                               | string       | App Step 2 |
            | level 2                  | tarjeta de credito one click                                           | string       | App Step 2 |
            | level 3                  | 2 solicitud                                                            | string       | App Step 2 |
            | language                 | ES                                                                     | string       | App Step 2 |
            | page area                | privada                                                                | string       | App Step 2 |
            | page intent              | transaccion                                                            | string       | App Step 2 |
            | channel                  | online                                                                 | string       | App Step 2 |
            | page instance ID         | de                                                                     | string       | App Step 2 |
            | version DL               | 20250414_5.0                                                           | string       | App Step 2 |
            | page info version        | appVersion                                                             | regexp named | App Step 2 |
            | page segment             | personas                                                               | string       | App Step 2 |
            | sysEnv                   | app                                                                    | string       | App Step 2 |
            | business unit            | BBVA Mexico                                                            | string       | App Step 2 |
            | site app name            | App BBVA Mexico                                                        | string       | App Step 2 |
            | project name             | Glomo                                                                  | string       | App Step 2 |
            | device mobile            | si                                                                     | string       | App Step 2 |
            | user userState           | logado                                                                 | string       | App Step 2 |
            | profile ID               | profileID                                                              | regexp named | App Step 2 |
            | user segment global      | 003001                                                                 | string       | App Step 2 |
            | global application       | credit card holder                                                     | string       | App Step 2 |
            | application offer        | beneficio 0028                                                         | string       | App Step 2 |
            | application process      | proceso preaprobado                                                    | string       | App Step 2 |
            | application name         | tarjeta de credito one click                                           | string       | App Step 2 |
            | application type         | contratacion                                                           | string       | App Step 2 |
            | application step         | 2 solicitud                                                            | string       | App Step 2 |
            | fulfillment model        | online/offline                                                         | string       | App Step 2 |
            | custom fields            | tipo de cliente:n4                                                     | string       | App Step 2 |
            | product primary category | tarjetas                                                               | string       | App Step 2 |
            | product subtype          | tarjetas credito                                                       | string       | App Step 2 |
            | product name             | tarjeta afinidad unam bbva                                             | string       | App Step 2 |
            | product amount           | 300000                                                                 | number       | App Step 2 |
            | product currency         | MXN                                                                    | string       | App Step 2 |
            | user segment profile     | contratacion app                                                       | string       | App Step 2 |

    @ANA_CCHS005
    @analytics
    @web @android @ios
    @MX @backend(test) @vbank
    @web-done
    Scenario: credit card holder - App Step Payment Settings
        Given a user with the following criteria
            | criteria               |
            | credit card offer unam |
        And the user navigates to the "credit card holder" section
        And the analytics interceptor service is initiated
        When the user performs "continue from the payment settings" with "normal"
        Then the analytics events contains the following variables
            | item                     | value                                                                     | type         | event      |
            | analytics                | analytics/glomo_base                                                      | json schema  | App Step 3 |
            | page name                | app:privada:personas:tarjetas:tarjeta de credito one click:3 tipo de pago | string       | App Step 3 |
            | level 1                  | tarjetas                                                                  | string       | App Step 3 |
            | level 2                  | tarjeta de credito one click                                              | string       | App Step 3 |
            | level 3                  | 3 tipo de pago                                                            | string       | App Step 3 |
            | language                 | ES                                                                        | string       | App Step 3 |
            | page area                | privada                                                                   | string       | App Step 3 |
            | page intent              | transaccion                                                               | string       | App Step 3 |
            | channel                  | online                                                                    | string       | App Step 3 |
            | page instance ID         | de                                                                        | string       | App Step 3 |
            | version DL               | 20250414_5.0                                                              | string       | App Step 3 |
            | page info version        | appVersion                                                                | regexp named | App Step 3 |
            | page segment             | personas                                                                  | string       | App Step 3 |
            | sysEnv                   | app                                                                       | string       | App Step 3 |
            | business unit            | BBVA Mexico                                                               | string       | App Step 3 |
            | site app name            | App BBVA Mexico                                                           | string       | App Step 3 |
            | project name             | Glomo                                                                     | string       | App Step 3 |
            | device mobile            | si                                                                        | string       | App Step 3 |
            | user userState           | logado                                                                    | string       | App Step 3 |
            | profile ID               | profileID                                                                 | regexp named | App Step 3 |
            | user segment global      | 003001                                                                    | string       | App Step 3 |
            | global application       | credit card holder                                                        | string       | App Step 3 |
            | application offer        | beneficio 0028                                                            | string       | App Step 3 |
            | application process      | proceso preaprobado                                                       | string       | App Step 3 |
            | application name         | tarjeta de credito one click                                              | string       | App Step 3 |
            | application type         | contratacion                                                              | string       | App Step 3 |
            | application step         | 3 tipo de pago                                                            | string       | App Step 3 |
            | fulfillment model        | online/offline                                                            | string       | App Step 3 |
            | custom fields            | tipo de cliente:n4                                                        | string       | App Step 3 |
            | product primary category | tarjetas                                                                  | string       | App Step 3 |
            | product subtype          | tarjetas credito                                                          | string       | App Step 3 |
            | product name             | tarjeta afinidad unam bbva                                                | string       | App Step 3 |
            | product amount           | 300000                                                                    | number       | App Step 3 |
            | product currency         | MXN                                                                       | string       | App Step 3 |
            | user segment profile     | contratacion app                                                          | string       | App Step 3 |

    @ANA_CCHS006
    @analytics
    @web @android @ios
    @MX @backend(test) @vbank
    @web-done
    Scenario: credit card holder - App Step Delivery Address
        Given a user with the following criteria
            | criteria               |
            | credit card offer unam |
        And the user navigates to the "credit card holder" section
        And the analytics interceptor service is initiated
        When the user performs "continue from the delivery address" with "normal"
        Then the analytics events contains the following variables
            | item                     | value                                                                        | type         | event      |
            | analytics                | analytics/glomo_base                                                         | json schema  | App Step 4 |
            | page name                | app:privada:personas:tarjetas:tarjeta de credito one click:4 direccion envio | string       | App Step 4 |
            | level 1                  | tarjetas                                                                     | string       | App Step 4 |
            | level 2                  | tarjeta de credito one click                                                 | string       | App Step 4 |
            | level 3                  | 4 direccion envio                                                            | string       | App Step 4 |
            | language                 | ES                                                                           | string       | App Step 4 |
            | page area                | privada                                                                      | string       | App Step 4 |
            | page intent              | transaccion                                                                  | string       | App Step 4 |
            | channel                  | online                                                                       | string       | App Step 4 |
            | page instance ID         | de                                                                           | string       | App Step 4 |
            | version DL               | 20250414_5.0                                                                 | string       | App Step 4 |
            | page info version        | appVersion                                                                   | regexp named | App Step 4 |
            | page segment             | personas                                                                     | string       | App Step 4 |
            | sysEnv                   | app                                                                          | string       | App Step 4 |
            | business unit            | BBVA Mexico                                                                  | string       | App Step 4 |
            | site app name            | App BBVA Mexico                                                              | string       | App Step 4 |
            | project name             | Glomo                                                                        | string       | App Step 4 |
            | device mobile            | si                                                                           | string       | App Step 4 |
            | user userState           | logado                                                                       | string       | App Step 4 |
            | profile ID               | profileID                                                                    | regexp named | App Step 4 |
            | user segment global      | 003001                                                                       | string       | App Step 4 |
            | global application       | credit card holder                                                           | string       | App Step 4 |
            | application offer        | beneficio 0028                                                               | string       | App Step 4 |
            | application process      | proceso preaprobado                                                          | string       | App Step 4 |
            | custom fields            | tipo de cliente:n4,tipo de domiciliacion:pago mínimo                         | string       | App Step 4 |
            | application name         | tarjeta de credito one click                                                 | string       | App Step 4 |
            | application type         | contratacion                                                                 | string       | App Step 4 |
            | application step         | 4 direccion envio                                                            | string       | App Step 4 |
            | fulfillment model        | online/offline                                                               | string       | App Step 4 |
            | product primary category | tarjetas                                                                     | string       | App Step 4 |
            | product subtype          | tarjetas credito                                                             | string       | App Step 4 |
            | product name             | tarjeta afinidad unam bbva                                                   | string       | App Step 4 |
            | product amount           | 300000                                                                       | number       | App Step 4 |
            | product currency         | MXN                                                                          | string       | App Step 4 |
            | user segment profile     | contratacion app                                                             | string       | App Step 4 |

    @ANA_CCHS007
    @analytics
    @web @android @ios
    @MX @backend(test) @vbank
    @web-done
    Scenario: credit card holder - App Step Terms and Condition
        Given a user with the following criteria
            | criteria               |
            | credit card offer unam |
        And the user navigates to the "credit card holder" section
        And the analytics interceptor service is initiated
        When the user performs "continue from the terms and conditions" with "normal"
        Then the analytics events contains the following variables
            | item                     | value                                                                               | type         | event      |
            | analytics                | analytics/glomo_base                                                                | json schema  | App Step 5 |
            | page name                | app:privada:personas:tarjetas:tarjeta de credito one click:5 terminos y condiciones | string       | App Step 5 |
            | level 1                  | tarjetas                                                                            | string       | App Step 5 |
            | level 2                  | tarjeta de credito one click                                                        | string       | App Step 5 |
            | level 3                  | 5 terminos y condiciones                                                            | string       | App Step 5 |
            | language                 | ES                                                                                  | string       | App Step 5 |
            | page area                | privada                                                                             | string       | App Step 5 |
            | page intent              | transaccion                                                                         | string       | App Step 5 |
            | channel                  | online                                                                              | string       | App Step 5 |
            | page instance ID         | de                                                                                  | string       | App Step 5 |
            | version DL               | 20250414_5.0                                                                        | string       | App Step 5 |
            | page info version        | appVersion                                                                          | regexp named | App Step 5 |
            | page segment             | personas                                                                            | string       | App Step 5 |
            | sysEnv                   | app                                                                                 | string       | App Step 5 |
            | business unit            | BBVA Mexico                                                                         | string       | App Step 5 |
            | site app name            | App BBVA Mexico                                                                     | string       | App Step 5 |
            | project name             | Glomo                                                                               | string       | App Step 5 |
            | device mobile            | si                                                                                  | string       | App Step 5 |
            | user userState           | logado                                                                              | string       | App Step 5 |
            | profile ID               | profileID                                                                           | regexp named | App Step 5 |
            | user segment global      | 003001                                                                              | string       | App Step 5 |
            | global application       | credit card holder                                                                  | string       | App Step 5 |
            | application typology     | domicilio                                                                           | string       | App Step 5 |
            | application offer        | beneficio 0028                                                                      | string       | App Step 5 |
            | application process      | proceso preaprobado                                                                 | string       | App Step 5 |
            | custom fields            | tipo de cliente:n4,tipo de domiciliacion:pago mínimo                                | string       | App Step 5 |
            | application name         | tarjeta de credito one click                                                        | string       | App Step 5 |
            | application type         | contratacion                                                                        | string       | App Step 5 |
            | application step         | 5 terminos y condiciones                                                            | string       | App Step 5 |
            | fulfillment model        | online/offline                                                                      | string       | App Step 5 |
            | product primary category | tarjetas                                                                            | string       | App Step 5 |
            | product subtype          | tarjetas credito                                                                    | string       | App Step 5 |
            | product name             | tarjeta afinidad unam bbva                                                          | string       | App Step 5 |
            | product amount           | 300000                                                                              | number       | App Step 5 |
            | product currency         | MXN                                                                                 | string       | App Step 5 |
            | user segment profile     | contratacion app                                                                    | string       | App Step 5 |

    @ANA_CCHS008
    @analytics
    @web @android @ios
    @MX @backend(test) @vbank
    @web-done
    Scenario: credit card holder - App Step Summary
        Given a user with the following criteria
            | criteria               |
            | credit card offer unam |
        And the user navigates to the "credit card holder" section
        And the analytics interceptor service is initiated
        When the user performs "request card" with "normal"
        Then the analytics events contains the following variables
                | item                     | value                                                                     | type         | event      |
                | analytics                | analytics/glomo_base                                                      | json schema  | App Step 6 |
                | page name                | app:privada:personas:tarjetas:tarjeta de credito one click:6 confirmacion | string       | App Step 6 |
                | level 1                  | tarjetas                                                                  | string       | App Step 6 |
                | level 2                  | tarjeta de credito one click                                              | string       | App Step 6 |
                | level 3                  | 6 confirmacion                                                            | string       | App Step 6 |
                | language                 | ES                                                                        | string       | App Step 6 |
                | page area                | privada                                                                   | string       | App Step 6 |
                | page intent              | transaccion                                                               | string       | App Step 6 |
                | channel                  | online                                                                    | string       | App Step 6 |
                | page instance ID         | de                                                                        | string       | App Step 6 |
                | version DL               | 20250414_5.0                                                              | string       | App Step 6 |
                | page info version        | appVersion                                                                | regexp named | App Step 6 |
                | page segment             | personas                                                                  | string       | App Step 6 |
                | sysEnv                   | app                                                                       | string       | App Step 6 |
                | business unit            | BBVA Mexico                                                               | string       | App Step 6 |
                | site app name            | App BBVA Mexico                                                           | string       | App Step 6 |
                | project name             | Glomo                                                                     | string       | App Step 6 |
                | device mobile            | si                                                                        | string       | App Step 6 |
                | user userState           | logado                                                                    | string       | App Step 6 |
                | profile ID               | profileID                                                                 | regexp named | App Step 6 |
                | user segment global      | 003001                                                                    | string       | App Step 6 |
                | global application       | credit card holder                                                        | string       | App Step 6 |
                | application typology     | domicilio                                                                 | string       | App Step 6 |
                | application offer        | beneficio 0028                                                            | string       | App Step 6 |
                | application process      | proceso preaprobado                                                       | string       | App Step 6 |
                | custom fields            | tipo de cliente:n4,tipo de domiciliacion:pago mínimo                      | string       | App Step 6 |
                | application name         | tarjeta de credito one click                                              | string       | App Step 6 |
                | application type         | contratacion                                                              | string       | App Step 6 |
                | application step         | 6 confirmacion                                                            | string       | App Step 6 |
                | fulfillment model        | online/offline                                                            | string       | App Step 6 |
                | product primary category | tarjetas                                                                  | string       | App Step 6 |
                | product subtype          | tarjetas credito                                                          | string       | App Step 6 |
                | product name             | tarjeta afinidad unam bbva                                                | string       | App Step 6 |
                | product amount           | 300000                                                                    | number       | App Step 6 |
                | product currency         | MXN                                                                       | string       | App Step 6 |
                | user segment profile     | contratacion app                                                          | string       | App Step 6 |

    @ANA_CCHS009
    @analytics
    @web @android @ios
    @MX @backend(test) @vbank
    @web-done
    Scenario: credit card holder - App completed successfully
        Given a user with the following criteria
            | criteria                   |
            | credit card holder success |
        And the user navigates to the "credit card holder" section
        And the user performs "request card" with "normal"
        And the analytics interceptor service is initiated
        When the user enters the OTP in the credit card holder section
        Then the analytics events contains the following variables
            | item                         | value                                                                     | type         | event         |
            | analytics                    | analytics/glomo_base                                                      | json schema  | App Completed |
            | page name                    | app:privada:personas:tarjetas:tarjeta de credito one click:pagina exitosa | string       | App Completed |
            | level 1                      | tarjetas                                                                  | string       | App Completed |
            | level 2                      | tarjeta de credito one click                                              | string       | App Completed |
            | level 3                      | pagina exitosa                                                            | string       | App Completed |
            | language                     | ES                                                                        | string       | App Completed |
            | page area                    | privada                                                                   | string       | App Completed |
            | page intent                  | transaccion                                                               | string       | App Completed |
            | channel                      | online                                                                    | string       | App Completed |
            | page instance ID             | de                                                                        | string       | App Completed |
            | version DL                   | 20250414_5.0                                                              | string       | App Completed |
            | page info version            | appVersion                                                                | regexp named | App Completed |
            | page segment                 | personas                                                                  | string       | App Completed |
            | sysEnv                       | app                                                                       | string       | App Completed |
            | business unit                | BBVA Mexico                                                               | string       | App Completed |
            | site app name                | App BBVA Mexico                                                           | string       | App Completed |
            | project name                 | Glomo                                                                     | string       | App Completed |
            | device mobile                | si                                                                        | string       | App Completed |
            | user userState               | logado                                                                    | string       | App Completed |
            | profile ID                   | profileID                                                                 | regexp named | App Completed |
            | user segment global          | 003001                                                                    | string       | App Completed |
            | global application           | credit card holder                                                        | string       | App Completed |
            | application typology         | domicilio                                                                 | string       | App Completed |
            | application offer            | beneficio 0028                                                            | string       | App Completed |
            | application process          | proceso preaprobado                                                       | string       | App Completed |
            | custom fields                | firma:token, tipo de cliente:n2,tipo de domiciliacion:pago mínimo         | string       | App Completed |
            | application name             | tarjeta de credito one click                                              | string       | App Completed |
            | application type             | contratacion                                                              | string       | App Completed |
            | application step             | pagina exitosa                                                            | string       | App Completed |
            | fulfillment model            | online/offline                                                            | string       | App Completed |
            | application state            | contratado                                                                | string       | App Completed |
            | application operation number | 6203211921                                                                | string       | App Completed |
            | product primary category     | tarjetas                                                                  | string       | App Completed |
            | product subtype              | tarjetas credito                                                          | string       | App Completed |
            | product name                 | tarjeta oro bbva                                                          | string       | App Completed |
            | product amount               | 300000                                                                    | number       | App Completed |
            | product currency             | MXN                                                                       | string       | App Completed |
            | product state                | contratado                                                                | string       | App Completed |
            | user segment profile         | contratacion app                                                          | string       | App Completed |

    @ANA_CCHS010
    @analytics
    @web @android @ios
    @MX @backend(test) @vbank
    @web-done
    Scenario: credit card holder - App completed rejected
        Given a user with the following criteria
            | criteria                      |
            | credit card holder bad bureau |
        And the user navigates to the "credit card holder" section
        And the user performs "request card" with "normal"
        And the analytics interceptor service is initiated
        When the user enters the OTP in the credit card holder section
        Then the analytics events contains the following variables
            | item                                       | value                                                                     | type         | event         |
            | analytics                                  | analytics/glomo_base                                                      | json schema  | App Completed |
            | page name                                  | app:privada:personas:tarjetas:tarjeta de credito one click:pagina exitosa | string       | App Completed |
            | level 1                                    | tarjetas                                                                  | string       | App Completed |
            | level 2                                    | tarjeta de credito one click                                              | string       | App Completed |
            | level 3                                    | pagina exitosa                                                            | string       | App Completed |
            | language                                   | ES                                                                        | string       | App Completed |
            | page area                                  | privada                                                                   | string       | App Completed |
            | page intent                                | transaccion                                                               | string       | App Completed |
            | channel                                    | online                                                                    | string       | App Completed |
            | page instance ID                           | de                                                                        | string       | App Completed |
            | version DL                                 | 20250414_5.0                                                              | string       | App Completed |
            | page info version                          | appVersion                                                                | regexp named | App Completed |
            | page segment                               | personas                                                                  | string       | App Completed |
            | sysEnv                                     | app                                                                       | string       | App Completed |
            | business unit                              | BBVA Mexico                                                               | string       | App Completed |
            | site app name                              | App BBVA Mexico                                                           | string       | App Completed |
            | project name                               | Glomo                                                                     | string       | App Completed |
            | device mobile                              | si                                                                        | string       | App Completed |
            | user userState                             | logado                                                                    | string       | App Completed |
            | profile ID                                 | profileID                                                                 | regexp named | App Completed |
            | user segment global                        | 003001                                                                    | string       | App Completed |
            | global application                         | credit card holder                                                        | string       | App Completed |
            | application typology                       | domicilio                                                                 | string       | App Completed |
            | application offer                          | beneficio 0028                                                            | string       | App Completed |
            | application process                        | proceso preaprobado                                                       | string       | App Completed |
            | custom fields                              | firma:token, tipo de cliente:n2,tipo de domiciliacion:pago mínimo         | string       | App Completed |
            | application name                           | tarjeta de credito one click                                              | string       | App Completed |
            | application type                           | contratacion                                                              | string       | App Completed |
            | application step                           | pagina exitosa                                                            | string       | App Completed |
            | fulfillment model                          | online/offline                                                            | string       | App Completed |
            | application state                          | rechazado                                                                 | string       | App Completed |
            | product primary category                   | tarjetas                                                                  | string       | App Completed |
            | product subtype                            | tarjetas credito                                                          | string       | App Completed |
            | product name                               | tarjeta afinidad unam bbva                                                | string       | App Completed |
            | product amount                             | 300000                                                                    | number       | App Completed |
            | product currency                           | MXN                                                                       | string       | App Completed |
            | product state                              | rechazado                                                                 | string       | App Completed |
            | user segment profile                       | contratacion app                                                          | string       | App Completed |

    @ANA_CCHS011
    @analytics
    @web @android @ios
    @MX @backend(test) @vbank
    @web-done
    Scenario: credit card holder - App completed pending
        Given a user with the following criteria
            | criteria                   |
            | credit card holder pending |
        And the user navigates to the "credit card holder" section
        And the user performs "request card" with "normal"
        And the analytics interceptor service is initiated
        When the user enters the OTP in the credit card holder section
        Then the analytics events contains the following variables
            | item                     | value                                                                     | type         | event         |
            | analytics                | analytics/glomo_base                                                      | json schema  | App Completed |
            | page name                | app:privada:personas:tarjetas:tarjeta de credito one click:pagina exitosa | string       | App Completed |
            | level 1                  | tarjetas                                                                  | string       | App Completed |
            | level 2                  | tarjeta de credito one click                                              | string       | App Completed |
            | level 3                  | pagina exitosa                                                            | string       | App Completed |
            | language                 | ES                                                                        | string       | App Completed |
            | page area                | privada                                                                   | string       | App Completed |
            | page intent              | transaccion                                                               | string       | App Completed |
            | channel                  | online                                                                    | string       | App Completed |
            | page instance ID         | de                                                                        | string       | App Completed |
            | version DL               | 20250414_5.0                                                              | string       | App Completed |
            | page info version        | appVersion                                                                | regexp named | App Completed |
            | page segment             | personas                                                                  | string       | App Completed |
            | sysEnv                   | app                                                                       | string       | App Completed |
            | business unit            | BBVA Mexico                                                               | string       | App Completed |
            | site app name            | App BBVA Mexico                                                           | string       | App Completed |
            | project name             | Glomo                                                                     | string       | App Completed |
            | device mobile            | si                                                                        | string       | App Completed |
            | user userState           | logado                                                                    | string       | App Completed |
            | profile ID               | profileID                                                                 | regexp named | App Completed |
            | user segment global      | 003001                                                                    | string       | App Completed |
            | global application       | credit card holder                                                        | string       | App Completed |
            | application typology     | domicilio                                                                 | string       | App Completed |
            | application offer        | beneficio 0028                                                            | string       | App Completed |
            | application process      | proceso preaprobado                                                       | string       | App Completed |
            | custom fields            | firma:token, tipo de cliente:n4,tipo de domiciliacion:pago mínimo         | string       | App Completed |
            | application name         | tarjeta de credito one click                                              | string       | App Completed |
            | application type         | contratacion                                                              | string       | App Completed |
            | application step         | pagina exitosa                                                            | string       | App Completed |
            | fulfillment model        | online/offline                                                            | string       | App Completed |
            | application state        | en revision                                                               | string       | App Completed |
            | product primary category | tarjetas                                                                  | string       | App Completed |
            | product subtype          | tarjetas credito                                                          | string       | App Completed |
            | product name             | tarjeta afinidad unam bbva                                                | string       | App Completed |
            | product amount           | 170900                                                                    | number       | App Completed |
            | product currency         | MXN                                                                       | string       | App Completed |
            | product state            | en revision                                                               | string       | App Completed |
            | user segment profile     | contratacion app                                                          | string       | App Completed |

    @ANA_CCHS012
    @analytics
    @web @android @ios
    @MX @backend(test) @vbank
    @web-done
    Scenario: credit card holder - Footprint Page View
        Given a user with the following criteria
            | criteria                   |
            | credit card offer unam     |
        And the user accesses to dashboard
        And the analytics interceptor service is initiated
        When the user navigates to the offer section
        Then the analytics events contains the following variables
            | item                                           | value                                                                            | type         | event     | event number |
            | analytics                                      | analytics/glomo_base                                                             | json schema  | Page View | 1            |
            | version DL                                     | 20250414_5.0                                                                     | string       | Page View | 1            |
            | page name                                      | app:privada:personas:posicion global:destacado                                   | string       | Page View | 1            |
            | level 1                                        | posicion global                                                                  | string       | Page View | 1            |
            | level 2                                        | destacado                                                                        | string       | Page View | 1            |
            | language                                       | ES                                                                               | string       | Page View | 1            |
            | page area                                      | privada                                                                          | string       | Page View | 1            |
            | page intent                                    | informacion                                                                      | string       | Page View | 1            |
            | channel                                        | online                                                                           | string       | Page View | 1            |
            | page instance ID                               | de                                                                               | string       | Page View | 1            |
            | page info version                              | appVersion                                                                       | regexp named | Page View | 1            |
            | page segment                                   | personas                                                                         | string       | Page View | 1            |
            | sysEnv                                         | app                                                                              | string       | Page View | 1            |
            | business unit                                  | BBVA Mexico                                                                      | string       | Page View | 1            |
            | site app name                                  | App BBVA Mexico                                                                  | string       | Page View | 1            |
            | project name                                   | Futura                                                                           | string       | Page View | 1            |
            | device mobile                                  | si                                                                               | string       | Page View | 1            |
            | user userState                                 | logado                                                                           | string       | Page View | 1            |
            | user segment global                            | 003001                                                                           | string       | Page View | 1            |
            | profile ID                                     | profileID                                                                        | regexp named | Page View | 1            |
            | internal campaign attributes location          | dashboard destacado-te puede interesar-superior-1-1-5                            | string       | Page View | 1            |
            | internal campaign attributes campaign format   | carrusel                                                                         | string       | Page View | 1            |
            | internal campaign attributes collective code   | -                                                                                | string       | Page View | 1            |
            | internal campaign attributes name              | Contrata una tarjeta de crédito con una línea                                    | string       | Page View | 1            |
            | internal campaign attributes product           |                                                                                  | string       | Page View | 1            |
            | internal campaign attributes product code      |                                                                                  | string       | Page View | 1            |
            | internal campaign attributes quantity          | 300000                                                                           | string       | Page View | 1            |
            | internal campaign attributes location 1        | dashboard destacado-te puede interesar-superior-2-2-5                            | string       | Page View | 1            |
            | internal campaign attributes campaign format 1 | carrusel                                                                         | string       | Page View | 1            |
            | internal campaign attributes collective code 1 | -                                                                                | string       | Page View | 1            |
            | internal campaign attributes campaign name 1   | Con Pagaré, tu dinero seguro crece. Invierte hoy mismo. Comienza desde $2,000.00 | string       | Page View | 1            |
            | internal campaign attributes product 1         |                                                                                  | string       | Page View | 1            |
            | internal campaign attributes product code 1    |                                                                                  | string       | Page View | 1            |
            | internal campaign attributes quantity 1        |                                                                                  | string       | Page View | 1            |

    @ANA_CCHS013
    @analytics
    @web @android @ios
    @MX @backend(test) @vbank
    @web-done
    Scenario: credit card holder - Error Operation not carried out
        Given a user with the following criteria
            | criteria               |
            | credit card offer unam |
        And the user navigates to the "credit card holder" section
        And the analytics interceptor service is initiated
        When the user performs "continue from the offer page" with "normal"
        Then the analytics events contains the following variables
            | item                 | value                                                                                   | type         | event     |
            | version DL           | 20250414_5.0                                                                            | string       | Page View |
            | page name            | app:privada:personas:tarjetas:tarjeta de credito one click:error operacion no realizada | string       | Page View |
            | level 1              | tarjetas                                                                                | string       | Page View |
            | level 2              | tarjeta de credito one click                                                            | string       | Page View |
            | level 3              | error operacion no realizada                                                            | string       | Page View |
            | error page           | error operacion no realizada                                                            | string       | Page View |
            | language             | ES                                                                                      | string       | Page View |
            | page area            | privada                                                                                 | string       | Page View |
            | page intent          | transaccion                                                                             | string       | Page View |
            | channel              | online                                                                                  | string       | Page View |
            | page instance ID     | de                                                                                      | string       | Page View |
            | page info version    | appVersion                                                                              | regexp named | Page View |
            | page segment         | personas                                                                                | string       | Page View |
            | sysEnv               | app                                                                                     | string       | Page View |
            | business unit        | BBVA Mexico                                                                             | string       | Page View |
            | site app name        | App BBVA Mexico                                                                         | string       | Page View |
            | project name         | Glomo                                                                                   | string       | Page View |
            | device mobile        | si                                                                                      | string       | Page View |
            | user userState       | logado                                                                                  | string       | Page View |
            | profile ID           | profileID                                                                               | regexp named | Page View |
            | user segment global  | 003001                                                                                  | string       | Page View |
            | user segment profile | beneficio 0028                                                                          | string       | Page View |

    @ANA_CCHS014
    @analytics
    @web @android @ios
    @MX @backend(test) @vbank
    @web-done
    Scenario: credit card holder - RFC Validation Error
        Given a user with the following criteria
            | criteria                        |
            | credit card holder outdated rfc |
        And the user navigates to the "credit card holder" section
        And the user performs "continue from the offer information with rfc" with "normal"
        And the analytics interceptor service is initiated
        When the user continues from the RFC
        Then the analytics events contains the following variables
            | item                 | value                                                                           | type         | event     |
            | version DL           | 20250414_5.0                                                                    | string       | Page View |
            | page name            | app:privada:personas:tarjetas:tarjeta de credito one click:error validacion rfc | string       | Page View |
            | level 1              | tarjetas                                                                        | string       | Page View |
            | level 2              | tarjeta de credito one click                                                    | string       | Page View |
            | level 3              | error validacion rfc                                                            | string       | Page View |
            | language             | ES                                                                              | string       | Page View |
            | page area            | privada                                                                         | string       | Page View |
            | page intent          | transaccion                                                                     | string       | Page View |
            | channel              | online                                                                          | string       | Page View |
            | page instance ID     | de                                                                              | string       | Page View |
            | page info version    | appVersion                                                                      | regexp named | Page View |
            | page segment         | personas                                                                        | string       | Page View |
            | sysEnv               | app                                                                             | string       | Page View |
            | business unit        | BBVA Mexico                                                                     | string       | Page View |
            | site app name        | App BBVA Mexico                                                                 | string       | Page View |
            | project name         | Glomo                                                                           | string       | Page View |
            | device mobile        | si                                                                              | string       | Page View |
            | user userState       | logado                                                                          | string       | Page View |
            | user segment global  | 003001                                                                          | string       | Page View |
            | profile ID           | profileID                                                                       | regexp named | Page View |
            | user gender          | gender                                                                          | regexp named | Page View |
            | user age             | age                                                                             | regexp named | Page View |
            | error page           | error validacion rfc                                                            | string       | Page View |
            | user segment profile | beneficio 0028                                                                  | string       | Page View |

    @ANA_CCHS015
    @analytics
    @web @android @ios
    @MX @backend(test) @vbank
    @web-done
    Scenario: credit card holder - View Otp
        Given a user with the following criteria
            | criteria               |
            | credit card offer unam |
        And the user navigates to the "credit card holder" section
        And the analytics interceptor service is initiated
        When the user performs "request card" with "normal"
        Then the analytics events contains the following variables
            | item                 | value                                                             | type         | event     |
            | page name            | app:privada:personas:tarjetas:tarjeta de credito one click:otp    | string       | Page View |
            | level 1              | tarjetas                                                          | string       | Page View |
            | level 2              | tarjeta de credito one click                                      | string       | Page View |
            | level 3              | otp                                                               | string       | Page View |
            | language             | ES                                                                | string       | Page View |
            | page area            | privada                                                           | string       | Page View |
            | page intent          | transaccion                                                       | string       | Page View |
            | channel              | online                                                            | string       | Page View |
            | page instance ID     | de                                                                | string       | Page View |
            | version DL           | 20250414_5.0                                                      | string       | Page View |
            | page info version    | appVersion                                                        | regexp named | Page View |
            | page segment         | personas                                                          | string       | Page View |
            | sysEnv               | app                                                               | string       | Page View |
            | business unit        | BBVA Mexico                                                       | string       | Page View |
            | site app name        | App BBVA Mexico                                                   | string       | Page View |
            | project name         | Glomo                                                             | string       | Page View |
            | device mobile        | si                                                                | string       | Page View |
            | user userState       | logado                                                            | string       | Page View |
            | profile ID           | profileID                                                         | regexp named | Page View |
            | user segment global  | 003001                                                            | string       | Page View |
            | custom fields        | firma:token, tipo de cliente:n4,tipo de domiciliacion:pago mínimo | string       | Page View |
            | user segment profile | beneficio 0028                                                    | string       | Page View |

    @ANA_CCHS016
    @analytics
    @web @android @ios
    @MX @backend(test) @vbank
    @web-done
    Scenario: credit card holder - Payment Type
        Given a user with the following criteria
            | criteria               |
            | credit card offer unam |
        And the user navigates to the "credit card holder" section
        And the analytics interceptor service is initiated
        When the user performs "change payment deadline from the payment settings" with "normal"
        Then the analytics events contains the following variables
        | item                | value                                                                     | type         | event            |
        | analytics           | analytics/glomo_base                                                      | json schema  | Interaction Link |
        | version DL          | 20250414_5.0                                                              | string       | Interaction Link |
        | page name           | app:privada:personas:tarjetas:tarjeta de credito one click:3 tipo de pago | string       | Interaction Link |
        | level 1             | tarjetas                                                                  | string       | Interaction Link |
        | level 2             | tarjeta de credito one click                                              | string       | Interaction Link |
        | level 3             | 3 tipo de pago                                                            | string       | Interaction Link |
        | language            | ES                                                                        | string       | Interaction Link |
        | page area           | privada                                                                   | string       | Interaction Link |
        | page intent         | transaccion                                                               | string       | Interaction Link |
        | channel             | online                                                                    | string       | Interaction Link |
        | page instance ID    | de                                                                        | string       | Interaction Link |
        | page info version   | appVersion                                                                | regexp named | Interaction Link |
        | page segment        | personas                                                                  | string       | Interaction Link |
        | sysEnv              | app                                                                       | string       | Interaction Link |
        | business unit       | BBVA Mexico                                                               | string       | Interaction Link |
        | site app name       | App BBVA Mexico                                                           | string       | Interaction Link |
        | project name        | Glomo                                                                     | string       | Interaction Link |
        | device mobile       | si                                                                        | string       | Interaction Link |
        | user userState      | logado                                                                    | string       | Interaction Link |
        | user segment global | 003001                                                                    | string       | Interaction Link |
        | profile ID          | profileID                                                                 | regexp named | Interaction Link |
        | user gender         | gender                                                                    | regexp named | Interaction Link |
        | user age            | age                                                                       | regexp named | Interaction Link |
        | interaction level   | cambio fecha limite de pago                                               | string       | Interaction Link |
        | user segment profile| contratacion app                                                          | string       | Interaction Link |

    @ANA_CCHS017
    @analytics
    @web @android @ios
    @MX @backend(test) @vbank
    @web-done
    Scenario: credit card holder - Paymet Direct Debil Modal
        Given a user with the following criteria
            | criteria               |
            | credit card offer unam |
        And the user navigates to the "credit card holder" section
        And the analytics interceptor service is initiated
        When the user performs "view direct debit payment information from the payment settings" with "normal"
        Then the analytics events contains the following variables
            | item                | value                                                                                            | type         | event     |
            | analytics           | analytics/glomo_base                                                                             | json schema  | Page View |
            | version DL          | 20250414_5.0                                                                                     | string       | Page View |
            | page name           | app:privada:personas:tarjetas:tarjeta de credito one click:3 tipo de pago:pago por domiciliacion | string       | Page View |
            | level 1             | tarjetas                                                                                         | string       | Page View |
            | level 2             | tarjeta de credito one click                                                                     | string       | Page View |
            | level 3             | 3 tipo de pago                                                                                   | string       | Page View |
            | level 4             | pago por domiciliacion                                                                           | string       | Page View |
            | language            | ES                                                                                               | string       | Page View |
            | page area           | privada                                                                                          | string       | Page View |
            | page intent         | transaccion                                                                                      | string       | Page View |
            | channel             | online                                                                                           | string       | Page View |
            | page instance ID    | de                                                                                               | string       | Page View |
            | page info version   | appVersion                                                                                       | regexp named | Page View |
            | page segment        | personas                                                                                         | string       | Page View |
            | sysEnv              | app                                                                                              | string       | Page View |
            | business unit       | BBVA Mexico                                                                                      | string       | Page View |
            | site app name       | App BBVA Mexico                                                                                  | string       | Page View |
            | project name        | Glomo                                                                                            | string       | Page View |
            | device mobile       | si                                                                                               | string       | Page View |
            | user userState      | logado                                                                                           | string       | Page View |
            | user segment global | 003001                                                                                           | string       | Page View |
            | profile ID          | profileID                                                                                        | regexp named | Page View |
            | user gender         | gender                                                                                           | regexp named | Page View |
            | user age            | age                                                                                              | regexp named | Page View |

    @ANA_CCHS018
    @analytics
    @web @android @ios
    @MX @backend(test) @vbank
    @web-done
    Scenario: credit card holder - Payment Direct Debil Modal
        Given a user with the following criteria
            | criteria               |
            | credit card offer unam |
        And the user navigates to the "credit card holder" section
        And the analytics interceptor service is initiated
        When the user performs "view delivery address information from delivery address" with "normal"
        Then the analytics events contains the following variables
        | item                | value                                                                                              | type         | event     |
        | analytics           | analytics/glomo_base                                                                               | json schema  | Page View |
        | version DL          | 20250414_5.0                                                                                       | string       | Page View |
        | page name           | app:privada:personas:tarjetas:tarjeta de credito one click:4 direccion de envio:entrega de tarjeta | string       | Page View |
        | level 1             | tarjetas                                                                                           | string       | Page View |
        | level 2             | tarjeta de credito one click                                                                       | string       | Page View |
        | level 3             | 4 direccion de envio                                                                               | string       | Page View |
        | level 4             | entrega de tarjeta                                                                                 | string       | Page View |
        | language            | ES                                                                                                 | string       | Page View |
        | page area           | privada                                                                                            | string       | Page View |
        | page intent         | transaccion                                                                                        | string       | Page View |
        | channel             | online                                                                                             | string       | Page View |
        | page instance ID    | de                                                                                                 | string       | Page View |
        | page info version   | appVersion                                                                                         | regexp named | Page View |
        | page segment        | personas                                                                                           | string       | Page View |
        | sysEnv              | app                                                                                                | string       | Page View |
        | business unit       | BBVA Mexico                                                                                        | string       | Page View |
        | site app name       | App BBVA Mexico                                                                                    | string       | Page View |
        | project name        | Glomo                                                                                              | string       | Page View |
        | device mobile       | si                                                                                                 | string       | Page View |
        | user userState      | logado                                                                                             | string       | Page View |
        | user segment global | 003001                                                                                             | string       | Page View |
        | profile ID          | profileID                                                                                          | regexp named | Page View |
        | user gender         | gender                                                                                             | regexp named | Page View |
        | user age            | age                                                                                                | regexp named | Page View |

    @ANA_CCHS019
    @analytics
    @web @android @ios
    @MX @backend(test) @vbank
    @web-done
    Scenario: credit card holder - Link Pdf
        Given a user with the following criteria
            | criteria               |
            | credit card offer unam |
        And the user navigates to the "credit card holder" section
        And the analytics interceptor service is initiated
        When the user performs "view direct debit form information from terms and conditions" with "normal"
        Then the analytics events contains the following variables
            | item                | value                                                                               | type         | event         |
            | version DL          | 20250414_5.0                                                                        | string       | Download Link |
            | page name           | app:privada:personas:tarjetas:tarjeta de credito one click:5 terminos y condiciones | string       | Download Link |
            | level 1             | tarjetas                                                                            | string       | Download Link |
            | level 2             | tarjeta de credito one click                                                        | string       | Download Link |
            | level 3             | 5 terminos y condiciones                                                            | string       | Download Link |
            | language            | ES                                                                                  | string       | Download Link |
            | page area           | privada                                                                             | string       | Download Link |
            | page intent         | transaccion                                                                         | string       | Download Link |
            | channel             | online                                                                              | string       | Download Link |
            | page instance ID    | de                                                                                  | string       | Download Link |
            | page info version   | appVersion                                                                          | regexp named | Download Link |
            | page segment        | personas                                                                            | string       | Download Link |
            | sysEnv              | app                                                                                 | string       | Download Link |
            | business unit       | BBVA Mexico                                                                         | string       | Download Link |
            | site app name       | App BBVA Mexico                                                                     | string       | Download Link |
            | project name        | Glomo                                                                               | string       | Download Link |
            | device mobile       | si                                                                                  | string       | Download Link |
            | user userState      | logado                                                                              | string       | Download Link |
            | user segment global | 003001                                                                              | string       | Download Link |
            | profile ID          | profileID                                                                           | regexp named | Download Link |
            | user gender         | gender                                                                              | regexp named | Download Link |
            | user age            | age                                                                                 | regexp named | Download Link |
            | link url            | Formato de domiciliación                                                            | string       | Download Link |

    @ANA_CCHS020
    @analytics
    @web @android @ios
    @MX @backend(test) @vbank
    @web-done
    Scenario: credit card holder - Link Successful Page
        Given a user with the following criteria
            | criteria                   |
            | credit card holder success |
        And the user navigates to the "credit card holder" section
        And the analytics interceptor service is initiated
        When the user performs "view documents from the receipt" with "normal"
        Then the analytics events contains the following variables
        | item                | value                                                                     | type         | event         |
        | analytics           | analytics/glomo_base                                                      | json schema  | External Link |
        | version DL          | 20250414_5.0                                                              | string       | External Link |
        | page name           | app:privada:personas:tarjetas:tarjeta de credito one click:pagina exitosa | string       | External Link |
        | level 1             | tarjetas                                                                  | string       | External Link |
        | level 2             | tarjeta de credito one click                                              | string       | External Link |
        | level 3             | pagina exitosa                                                            | string       | External Link |
        | language            | ES                                                                        | string       | External Link |
        | page area           | privada                                                                   | string       | External Link |
        | page intent         | transaccion                                                               | string       | External Link |
        | channel             | online                                                                    | string       | External Link |
        | page instance ID    | de                                                                        | string       | External Link |
        | page info version   | appVersion                                                                | regexp named | External Link |
        | page segment        | personas                                                                  | string       | External Link |
        | sysEnv              | app                                                                       | string       | External Link |
        | business unit       | BBVA Mexico                                                               | string       | External Link |
        | site app name       | App BBVA Mexico                                                           | string       | External Link |
        | project name        | Glomo                                                                     | string       | External Link |
        | device mobile       | si                                                                        | string       | External Link |
        | user userState      | logado                                                                    | string       | External Link |
        | user segment global | 003001                                                                    | string       | External Link |
        | profile ID          | profileID                                                                 | regexp named | External Link |
        | user gender         | gender                                                                    | regexp named | External Link |
        | user age            | age                                                                       | regexp named | External Link |
        | link url            | ver documentos                                                            | string       | External Link |
        | user segment profile| contratacion app                                                          | string       | External Link |

    @ANA_CCHS021
    @analytics
    @web @android @ios
    @MX @backend(test) @vbank
    @web-done
    Scenario: credit card holder - Modal knows the details
        Given a user with the following criteria
            | criteria               |
            | credit card offer unam |
        And the user navigates to the "credit card holder" section
        And  the analytics interceptor service is initiated
        When the user performs "view benefits from the offer page" with "normal"
        Then the analytics events contains the following variables
            | item                | value                                                                           | type         | event     |
            | analytics           | analytics/glomo_base                                                            | json schema  | Page View |
            | version DL          | 20250414_5.0                                                                    | string       | Page View |
            | page name           | app:privada:personas:tarjetas:tarjeta de credito one click:1 beneficios:detalle | string       | Page View |
            | level 1             | tarjetas                                                                        | string       | Page View |
            | level 2             | tarjeta de credito one click                                                    | string       | Page View |
            | level 3             | 1 beneficios                                                                    | string       | Page View |
            | level 4             | detalle                                                                         | string       | Page View |
            | language            | ES                                                                              | string       | Page View |
            | page area           | privada                                                                         | string       | Page View |
            | page intent         | transaccion                                                                     | string       | Page View |
            | channel             | online                                                                          | string       | Page View |
            | page instance ID    | de                                                                              | string       | Page View |
            | page info version   | appVersion                                                                      | regexp named | Page View |
            | page segment        | personas                                                                        | string       | Page View |
            | sysEnv              | app                                                                             | string       | Page View |
            | business unit       | BBVA Mexico                                                                     | string       | Page View |
            | site app name       | App BBVA Mexico                                                                 | string       | Page View |
            | project name        | Glomo                                                                           | string       | Page View |
            | device mobile       | si                                                                              | string       | Page View |
            | user userState      | logado                                                                          | string       | Page View |
            | user segment global | 003001                                                                          | string       | Page View |
            | profile ID          | profileID                                                                       | regexp named | Page View |
            | user gender         | gender                                                                          | regexp named | Page View |
            | user age            | age                                                                             | regexp named | Page View |

    @ANA_CCHS022
    @analytics
    @web @android @ios
    @MX @backend(test) @vbank
    @web-done
    Scenario: credit card holder - Footprint rfc
        Given a user with the following criteria
            | criteria               |
            | credit card holder rfc |
        And the user navigates to the "credit card holder" section
        And  the analytics interceptor service is initiated
        When the user performs "enter rfc with less than 10 characters in the fiscal data" with "normal"
        Then the analytics events contains the following variables
            | item                 | value                                                                           | type         | event     |
            | version DL           | 20250414_5.0                                                                    | string       | Page View |
            | page name            | app:privada:personas:tarjetas:tarjeta de credito one click:tus datos            | string       | Page View |
            | level 1              | tarjetas                                                                        | string       | Page View |
            | level 2              | tarjeta de credito one click                                                    | string       | Page View |
            | level 3              | tus datos                                                                       | string       | Page View |
            | language             | ES                                                                              | string       | Page View |
            | page area            | privada                                                                         | string       | Page View |
            | page intent          | transaccion                                                                     | string       | Page View |
            | channel              | online                                                                          | string       | Page View |
            | page instance ID     | de                                                                              | string       | Page View |
            | page info version    | appVersion                                                                      | regexp named | Page View |
            | page segment         | personas                                                                        | string       | Page View |
            | sysEnv               | app                                                                             | string       | Page View |
            | business unit        | BBVA Mexico                                                                     | string       | Page View |
            | site app name        | App BBVA Mexico                                                                 | string       | Page View |
            | project name         | Glomo                                                                           | string       | Page View |
            | device mobile        | si                                                                              | string       | Page View |
            | user userState       | logado                                                                          | string       | Page View |
            | user segment global  | 003001                                                                          | string       | Page View |
            | profile ID           | profileID                                                                       | regexp named | Page View |
            | user gender          | gender                                                                          | regexp named | Page View |
            | user age             | age                                                                             | regexp named | Page View |
            | custom fields        | tipo de proceso: proceso preaprobado                                            | string       | Page View |
            | user segment profile | beneficio GB0T                                                                  | string       | Page View |

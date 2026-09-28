@mposDigitalSalesAnalytics
Feature: Analytics - Mpos Digital Sales

    @ANA_EVENT_MPDS001
    @analytics
    @MX
    @vbank @backend(test)
    @web @ios @android
    @web-done
    Scenario: Mpos Digital Sales - App On Click Start Oportunities
        Given a user with the following criteria
            | criteria     |
            | one account  |
            | oc cash zone |
        And the user accesses contract product section
        And the analytics interceptor service is initiated
        When the user accesses to card oc cash zone offer from "opportunities"
        Then the analytics events contains the following variables
            | item                                         | value                                                                                                                        | type         | event              |
            | analytics                                    | analytics/glomo_base                                                                                                         | json schema  | App On Click Start |
            | page name                                    | app:privada:personas:oportunidades                                                                                           | string       | App On Click Start |
            | level 1                                      | oportunidades                                                                                                                | string       | App On Click Start |
            | language                                     | ES                                                                                                                           | string       | App On Click Start |
            | page area                                    | privada                                                                                                                      | string       | App On Click Start |
            | page intent                                  | informacion                                                                                                                  | string       | App On Click Start |
            | channel                                      | online                                                                                                                       | string       | App On Click Start |
            | page instance ID                             | de                                                                                                                           | string       | App On Click Start |
            | version DL                                   | 20250414_5.0                                                                                                                 | string       | App On Click Start |
            | page info version                            | appVersion                                                                                                                   | regexp named | App On Click Start |
            | page segment                                 | personas                                                                                                                     | string       | App On Click Start |
            | sysEnv                                       | app                                                                                                                          | string       | App On Click Start |
            | project name                                 | Mercurio                                                                                                                     | string       | App On Click Start |
            | business unit                                | BBVA Mexico                                                                                                                  | string       | App On Click Start |
            | site app name                                | App BBVA Mexico                                                                                                              | string       | App On Click Start |
            | device mobile                                | si                                                                                                                           | string       | App On Click Start |
            | user userState                               | logado                                                                                                                       | string       | App On Click Start |
            | profile ID                                   | profileID                                                                                                                    | regexp named | App On Click Start |
            | user segment global                          | 003001                                                                                                                       | string       | App On Click Start |
            | user gender                                  | gender                                                                                                                       | regexp named | App On Click Start |
            | user age                                     | age                                                                                                                          | regexp named | App On Click Start |
            | global application                           | onboarding mpos                                                                                                              | string       | App On Click Start |
            | application name                             | contratar zona de cobro                                                                                                      | string       | App On Click Start |
            | application type                             | contratacion                                                                                                                 | string       | App On Click Start |
            | fulfillment model                            | online/offline                                                                                                               | string       | App On Click Start |
            | application step                             | oportunidades                                                                                                                | string       | App On Click Start |
            | product primary category                     | cuentas                                                                                                                      | string       | App On Click Start |
            | internal campaign attributes campaign format | list                                                                                                                         | string       | App On Click Start |
            | internal campaign attributes name            | -acepta mas formas de pago y sube tus ventas al contratar con openpay                                                        | string       | App On Click Start |
            | internal campaign attributes product         | cuentas                                                                                                                      | string       | App On Click Start |
            | internal campaign event name                 | IntCmpClick                                                                                                                  | string       | App On Click Start |
            | internal campaign site action name           | contract product section--centro-10-15:list::-acepta mas formas de pago y sube tus ventas al contratar con openpay:cuentas:: | string       | App On Click Start |
            | optimization attributes                      |                                                                                                                              | empty array  | App On Click Start |

    @ANA_EVENT_MPDS002
    @analytics
    @MX
    @vbank @backend(test)
    @web @ios @android
    @web-done
    Scenario: Mpos Digital Sales  - App page visit
        Given a user with the following criteria
            | criteria     |
            | one account  |
            | oc cash zone |
        And the user accesses contract product section
        And the analytics interceptor service is initiated
        When the user accesses to card oc cash zone offer from "opportunities"
        Then the analytics events contains the following variables
            | item                     | value                                                | type         | event          |
            | analytics                | analytics/glomo_base                                 | json schema  | App Page Visit |
            | version DL               | 20250414_5.0                                         | string       | App Page Visit |
            | page name                | app:privada:personas:zona de cobro:1 caracteristicas | string       | App Page Visit |
            | level 1                  | zona de cobro                                        | string       | App Page Visit |
            | level 2                  | 1 caracteristicas                                    | string       | App Page Visit |
            | language                 | ES                                                   | string       | App Page Visit |
            | page area                | privada                                              | string       | App Page Visit |
            | page intent              | transaccion                                          | string       | App Page Visit |
            | channel                  | online                                               | string       | App Page Visit |
            | page instance ID         | de                                                   | string       | App Page Visit |
            | page info version        | appVersion                                           | regexp named | App Page Visit |
            | page segment             | personas                                             | string       | App Page Visit |
            | sysEnv                   | app                                                  | string       | App Page Visit |
            | business unit            | BBVA Mexico                                          | string       | App Page Visit |
            | site app name            | App BBVA Mexico                                      | string       | App Page Visit |
            | project name             | Mercurio                                             | string       | App Page Visit |
            | device mobile            | si                                                   | string       | App Page Visit |
            | user userState           | logado                                               | string       | App Page Visit |
            | user segment global      | 003001                                               | string       | App Page Visit |
            | profile ID               | profileID                                            | regexp named | App Page Visit |
            | user gender              | gender                                               | regexp named | App Page Visit |
            | user age                 | age                                                  | regexp named | App Page Visit |
            | application typology     | con selector de lector                               | string       | App Page Visit |
            | global application       | onboarding mpos                                      | string       | App Page Visit |
            | application name         | contratar zona de cobro                              | string       | App Page Visit |
            | application type         | contratacion                                         | string       | App Page Visit |
            | fulfillment model        | online/offline                                       | string       | App Page Visit |
            | application step         | 1 caracteristicas                                    | string       | App Page Visit |
            | product primary category | cuentas                                              | string       | App Page Visit |
            | qualified visits         | true                                                 | string       | App Page Visit |
            | internal campaign        |                                                      | empty array  | App Page Visit |
            | optimization attributes  |                                                      | empty array  | App Page Visit |

    @ANA_EVENT_MPDS003
    @analytics
    @MX
    @vbank @backend(test)
    @web @ios @android
    @web-done
    Scenario: Mpos Digital Sales  - App Started continue
        Given a user with the following criteria
            | criteria     |
            | one account  |
            | oc cash zone |
        And the user accesses contract product section
        And the user accesses to card oc cash zone offer from "opportunities"
        And the analytics interceptor service is initiated
        When the user accesses to the "order data" step of the oc cash zone offer
        Then the analytics events contains the following variables
            | item                     | value                                                | type         | event       |
            | analytics                | analytics/glomo_base                                 | json schema  | App Started |
            | version DL               | 20250414_5.0                                         | string       | App Started |
            | page name                | app:privada:personas:zona de cobro:1 caracteristicas | string       | App Started |
            | level 1                  | zona de cobro                                        | string       | App Started |
            | level 2                  | 1 caracteristicas                                    | string       | App Started |
            | language                 | ES                                                   | string       | App Started |
            | page area                | privada                                              | string       | App Started |
            | page intent              | transaccion                                          | string       | App Started |
            | channel                  | online                                               | string       | App Started |
            | page instance ID         | de                                                   | string       | App Started |
            | page info version        | appVersion                                           | regexp named | App Started |
            | page segment             | personas                                             | string       | App Started |
            | sysEnv                   | app                                                  | string       | App Started |
            | business unit            | BBVA Mexico                                          | string       | App Started |
            | site app name            | App BBVA Mexico                                      | string       | App Started |
            | project name             | Mercurio                                             | string       | App Started |
            | device mobile            | si                                                   | string       | App Started |
            | user userState           | logado                                               | string       | App Started |
            | user segment global      | 003001                                               | string       | App Started |
            | profile ID               | profileID                                            | regexp named | App Started |
            | user gender              | gender                                               | regexp named | App Started |
            | user age                 | age                                                  | regexp named | App Started |
            | application typology     | con selector de lector                               | string       | App Started |
            | global application       | onboarding mpos                                      | string       | App Started |
            | application name         | contratar zona de cobro                              | string       | App Started |
            | application type         | contratacion                                         | string       | App Started |
            | fulfillment model        | online/offline                                       | string       | App Started |
            | application step         | continuar                                            | string       | App Started |
            | product primary category | cuentas                                              | string       | App Started |
            | internal campaign        |                                                      | empty array  | App Started |
            | optimization attributes  |                                                      | empty array  | App Started |

    @ANA_EVENT_MPDS004
    @analytics
    @MX
    @vbank @backend(test)
    @web @ios @android
    @web-done
    Scenario: Mpos Digital Sales - App Step 2
        Given a user with the following criteria
            | criteria     |
            | one account  |
            | oc cash zone |
        And the user accesses contract product section
        And the user accesses to card oc cash zone offer from "opportunities"
        And the analytics interceptor service is initiated
        When the user accesses to the "order data" step of the oc cash zone offer
        Then the analytics events contains the following variables
            | item                     | value                                                      | type         | event      |
            | analytics                | analytics/glomo_base                                       | json schema  | App Step 2 |
            | page name                | app:privada:personas:zona de cobro:2 datos de contratacion | string       | App Step 2 |
            | level 1                  | zona de cobro                                              | string       | App Step 2 |
            | level 2                  | 2 datos de contratacion                                    | string       | App Step 2 |
            | language                 | ES                                                         | string       | App Step 2 |
            | page area                | privada                                                    | string       | App Step 2 |
            | page intent              | transaccion                                                | string       | App Step 2 |
            | channel                  | online                                                     | string       | App Step 2 |
            | page instance ID         | de                                                         | string       | App Step 2 |
            | version DL               | 20250414_5.0                                               | string       | App Step 2 |
            | page info version        | appVersion                                                 | regexp named | App Step 2 |
            | page segment             | personas                                                   | string       | App Step 2 |
            | sysEnv                   | app                                                        | string       | App Step 2 |
            | project name             | Mercurio                                                   | string       | App Step 2 |
            | business unit            | BBVA Mexico                                                | string       | App Step 2 |
            | site app name            | App BBVA Mexico                                            | string       | App Step 2 |
            | device mobile            | si                                                         | string       | App Step 2 |
            | user userState           | logado                                                     | string       | App Step 2 |
            | profile ID               | profileID                                                  | regexp named | App Step 2 |
            | user segment global      | 003001                                                     | string       | App Step 2 |
            | user gender              | gender                                                     | regexp named | App Step 2 |
            | user age                 | age                                                        | regexp named | App Step 2 |
            | application typology     | con selector de lector                                     | string       | App Step 2 |
            | global application       | onboarding mpos                                            | string       | App Step 2 |
            | application name         | contratar zona de cobro                                    | string       | App Step 2 |
            | application type         | contratacion                                               | string       | App Step 2 |
            | application step         | 2 datos de contratacion                                    | string       | App Step 2 |
            | fulfillment model        | online/offline                                             | string       | App Step 2 |
            | product primary category | cuentas                                                    | string       | App Step 2 |
            | internal campaign        |                                                            | empty array  | App Step 2 |
            | optimization attributes  |                                                            | empty array  | App Step 2 |

    @ANA_EVENT_MPDS005
    @analytics
    @MX
    @vbank @backend(test)
    @web @ios @android
    @web-done
    Scenario: Mpos Digital Sales - App Step 3
        Given a user with the following criteria
            | criteria     |
            | one account  |
            | oc cash zone |
        And the user accesses contract product section
        And the user accesses to card oc cash zone offer from "opportunities"
        And the analytics interceptor service is initiated
        When the user accesses to the "income account" step of the oc cash zone offer
        Then the analytics events contains the following variables
            | item                     | value                                                | type         | event      |
            | analytics                | analytics/glomo_base                                 | json schema  | App Step 3 |
            | page name                | app:privada:personas:zona de cobro:3 cuenta de abono | string       | App Step 3 |
            | level 1                  | zona de cobro                                        | string       | App Step 3 |
            | level 2                  | 3 cuenta de abono                                    | string       | App Step 3 |
            | language                 | ES                                                   | string       | App Step 3 |
            | page area                | privada                                              | string       | App Step 3 |
            | page intent              | transaccion                                          | string       | App Step 3 |
            | channel                  | online                                               | string       | App Step 3 |
            | page instance ID         | de                                                   | string       | App Step 3 |
            | version DL               | 20250414_5.0                                         | string       | App Step 3 |
            | page info version        | appVersion                                           | regexp named | App Step 3 |
            | page segment             | personas                                             | string       | App Step 3 |
            | sysEnv                   | app                                                  | string       | App Step 3 |
            | project name             | Mercurio                                             | string       | App Step 3 |
            | business unit            | BBVA Mexico                                          | string       | App Step 3 |
            | site app name            | App BBVA Mexico                                      | string       | App Step 3 |
            | device mobile            | si                                                   | string       | App Step 3 |
            | user userState           | logado                                               | string       | App Step 3 |
            | profile ID               | profileID                                            | regexp named | App Step 3 |
            | user segment global      | 003001                                               | string       | App Step 3 |
            | user gender              | gender                                               | regexp named | App Step 3 |
            | user age                 | age                                                  | regexp named | App Step 3 |
            | application typology     | con selector de lector                               | string       | App Step 3 |
            | global application       | onboarding mpos                                      | string       | App Step 3 |
            | application name         | contratar zona de cobro                              | string       | App Step 3 |
            | application type         | contratacion                                         | string       | App Step 3 |
            | application step         | 3 cuenta de abono                                    | string       | App Step 3 |
            | fulfillment model        | online/offline                                       | string       | App Step 3 |
            | product primary category | cuentas                                              | string       | App Step 3 |
            | internal campaign        |                                                      | empty array  | App Step 3 |
            | optimization attributes  |                                                      | empty array  | App Step 3 |

    @ANA_EVENT_MPDS006
    @analytics
    @MX
    @vbank @backend(test)
    @web @ios @android
    @web-done
    Scenario: Mpos Digital Sales - App Step 4
        Given a user with the following criteria
            | criteria     |
            | one account  |
            | oc cash zone |
        And the user accesses contract product section
        And the user accesses to card oc cash zone offer from "opportunities"
        And the analytics interceptor service is initiated
        When the user accesses to the "terms and conditions" step of the oc cash zone offer
        Then the analytics events contains the following variables
            | item                     | value                                                       | type         | event      |
            | analytics                | analytics/glomo_base                                        | json schema  | App Step 4 |
            | page name                | app:privada:personas:zona de cobro:4 terminos y condiciones | string       | App Step 4 |
            | level 1                  | zona de cobro                                               | string       | App Step 4 |
            | level 2                  | 4 terminos y condiciones                                    | string       | App Step 4 |
            | language                 | ES                                                          | string       | App Step 4 |
            | page area                | privada                                                     | string       | App Step 4 |
            | page intent              | transaccion                                                 | string       | App Step 4 |
            | channel                  | online                                                      | string       | App Step 4 |
            | page instance ID         | de                                                          | string       | App Step 4 |
            | version DL               | 20250414_5.0                                                | string       | App Step 4 |
            | page info version        | appVersion                                                  | regexp named | App Step 4 |
            | page segment             | personas                                                    | string       | App Step 4 |
            | sysEnv                   | app                                                         | string       | App Step 4 |
            | project name             | Mercurio                                                    | string       | App Step 4 |
            | business unit            | BBVA Mexico                                                 | string       | App Step 4 |
            | site app name            | App BBVA Mexico                                             | string       | App Step 4 |
            | device mobile            | si                                                          | string       | App Step 4 |
            | user userState           | logado                                                      | string       | App Step 4 |
            | profile ID               | profileID                                                   | regexp named | App Step 4 |
            | user segment global      | 003001                                                      | string       | App Step 4 |
            | user gender              | gender                                                      | regexp named | App Step 4 |
            | user age                 | age                                                         | regexp named | App Step 4 |
            | application typology     | con selector de lector                                      | string       | App Step 4 |
            | global application       | onboarding mpos                                             | string       | App Step 4 |
            | application name         | contratar zona de cobro                                     | string       | App Step 4 |
            | application type         | contratacion                                                | string       | App Step 4 |
            | application step         | 4 terminos y condiciones                                    | string       | App Step 4 |
            | fulfillment model        | online/offline                                              | string       | App Step 4 |
            | product primary category | cuentas                                                     | string       | App Step 4 |
            | application process      | con lector openpay mini                                     | string       | App Step 4 |
            | internal campaign        |                                                             | empty array  | App Step 4 |
            | optimization attributes  |                                                             | empty array  | App Step 4 |

    @ANA_EVENT_MPDS007
    @analytics
    @MX
    @vbank @backend(test)
    @web @ios @android
    @web-done
    Scenario: Mpos Digital Sales - App Step 5
        Given a user with the following criteria
            | criteria     |
            | one account  |
            | oc cash zone |
        And the user accesses contract product section
        And the user accesses to card oc cash zone offer from "opportunities"
        And the analytics interceptor service is initiated
        When the user accesses to the "summary" step of the oc cash zone offer
        Then the analytics events contains the following variables
            | item                     | value                                             | type         | event      |
            | analytics                | analytics/glomo_base                              | json schema  | App Step 5 |
            | page name                | app:privada:personas:zona de cobro:5 confirmacion | string       | App Step 5 |
            | level 1                  | zona de cobro                                     | string       | App Step 5 |
            | level 2                  | 5 confirmacion                                    | string       | App Step 5 |
            | language                 | ES                                                | string       | App Step 5 |
            | page area                | privada                                           | string       | App Step 5 |
            | page intent              | transaccion                                       | string       | App Step 5 |
            | channel                  | online                                            | string       | App Step 5 |
            | page instance ID         | de                                                | string       | App Step 5 |
            | version DL               | 20250414_5.0                                      | string       | App Step 5 |
            | page info version        | appVersion                                        | regexp named | App Step 5 |
            | page segment             | personas                                          | string       | App Step 5 |
            | sysEnv                   | app                                               | string       | App Step 5 |
            | project name             | Mercurio                                          | string       | App Step 5 |
            | business unit            | BBVA Mexico                                       | string       | App Step 5 |
            | site app name            | App BBVA Mexico                                   | string       | App Step 5 |
            | device mobile            | si                                                | string       | App Step 5 |
            | user userState           | logado                                            | string       | App Step 5 |
            | profile ID               | profileID                                         | regexp named | App Step 5 |
            | user segment global      | 003001                                            | string       | App Step 5 |
            | user gender              | gender                                            | regexp named | App Step 5 |
            | user age                 | age                                               | regexp named | App Step 5 |
            | application typology     | con selector de lector                            | string       | App Step 5 |
            | global application       | onboarding mpos                                   | string       | App Step 5 |
            | application name         | contratar zona de cobro                           | string       | App Step 5 |
            | application type         | contratacion                                      | string       | App Step 5 |
            | application step         | 5 confirmacion                                    | string       | App Step 5 |
            | fulfillment model        | online/offline                                    | string       | App Step 5 |
            | product primary category | cuentas                                           | string       | App Step 5 |
            | application process      | con lector openpay mini                           | string       | App Step 5 |
            | internal campaign        |                                                   | empty array  | App Step 5 |
            | optimization attributes  |                                                   | empty array  | App Step 5 |

    @ANA_EVENT_MPDS008
    @analytics
    @MX
    @vbank @backend(test)
    @web @ios @android
    @web-done
    Scenario: Mpos Digital Sales - App Completed
        Given a user with the following criteria
            | criteria     |
            | one account  |
            | oc cash zone |
        And the user accesses contract product section
        And the user accesses to card oc cash zone offer from "opportunities"
        And the analytics interceptor service is initiated
        And the user accesses to the "summary" step of the oc cash zone offer
        And the user confirms the contract
        When the user confirm token
        Then the analytics events contains the following variables
            | item                         | value                                             | type         | event         |
            | analytics                    | analytics/glomo_base                              | json schema  | App Completed |
            | page name                    | app:privada:personas:zona de cobro:pagina exitosa | string       | App Completed |
            | level 1                      | zona de cobro                                     | string       | App Completed |
            | level 2                      | pagina exitosa                                    | string       | App Completed |
            | language                     | ES                                                | string       | App Completed |
            | page area                    | privada                                           | string       | App Completed |
            | page intent                  | transaccion                                       | string       | App Completed |
            | channel                      | online                                            | string       | App Completed |
            | page instance ID             | de                                                | string       | App Completed |
            | version DL                   | 20250414_5.0                                      | string       | App Completed |
            | page info version            | appVersion                                        | regexp named | App Completed |
            | page segment                 | personas                                          | string       | App Completed |
            | sysEnv                       | app                                               | string       | App Completed |
            | project name                 | Mercurio                                          | string       | App Completed |
            | business unit                | BBVA Mexico                                       | string       | App Completed |
            | site app name                | App BBVA Mexico                                   | string       | App Completed |
            | device mobile                | si                                                | string       | App Completed |
            | user userState               | logado                                            | string       | App Completed |
            | profile ID                   | profileID                                         | regexp named | App Completed |
            | user segment global          | 003001                                            | string       | App Completed |
            | user gender                  | gender                                            | regexp named | App Completed |
            | user age                     | age                                               | regexp named | App Completed |
            | application typology         | con selector de lector                            | string       | App Completed |
            | global application           | onboarding mpos                                   | string       | App Completed |
            | application name             | contratar zona de cobro                           | string       | App Completed |
            | application type             | contratacion                                      | string       | App Completed |
            | application step             | pagina exitosa                                    | string       | App Completed |
            | fulfillment model            | online/offline                                    | string       | App Completed |
            | application state            | contratado                                        | string       | App Completed |
            | application operation number | 3866649471                                        | string       | App Completed |
            | product primary category     | cuentas                                           | string       | App Completed |
            | product amount               | 578.84                                            | number       | App Completed |
            | product currency             | MXN                                               | string       | App Completed |
            | custom fields                | firma:token                                       | string       | App Completed |
            | product state                | contratado                                        | string       | App Completed |
            | application process          | con lector openpay mini                           | string       | App Completed |
            | internal campaign            |                                                   | empty array  | App Completed |
            | optimization attributes      |                                                   | empty array  | App Completed |

    @ANA_EVENT_MPDS009
    @analytics
    @MX
    @vbank @backend(test)
    @web @ios @android
    @web-done
    Scenario: Mpos Digital Sales - Footprint Page view details of payment method modal
        Given a user with the following criteria
            | criteria     |
            | one account  |
            | oc cash zone |
        And the user accesses contract product section
        And the user accesses to card oc cash zone offer from "opportunities"
        And the analytics interceptor service is initiated
        When the user accesses to the "more info reader" modal
        Then the analytics events contains the following variables
            | item                    | value                                                        | type             | event     |
            | analytics               | analytics/glomo_base                                         | json schema      | Page View |
            | page name               | app:privada:personas:zona de cobro:detalles metodos de cobro | string           | Page View |
            | level 1                 | zona de cobro                                                | string           | Page View |
            | level 2                 | detalles metodos de cobro                                    | string           | Page View |
            | language                | ES                                                           | string           | Page View |
            | page area               | privada                                                      | string           | Page View |
            | page intent             | transaccion                                                  | string           | Page View |
            | channel                 | online                                                       | string           | Page View |
            | page instance ID        | de                                                           | string           | Page View |
            | version DL              | 20250414_5.0                                                 | string           | Page View |
            | page info version       | appVersion                                                   | regexp named     | Page View |
            | page segment            | personas                                                     | string           | Page View |
            | sysEnv                  | app                                                          | string           | Page View |
            | project name            | Mercurio                                                     | string           | Page View |
            | business unit           | BBVA Mexico                                                  | string           | Page View |
            | site app name           | App BBVA Mexico                                              | string           | Page View |
            | device mobile           | si                                                           | string           | Page View |
            | user userState          | logado                                                       | string           | Page View |
            | profile ID              | profileID                                                    | regexp named     | Page View |
            | user segment global     | 003001                                                       | string           | Page View |
            | user gender             | gender                                                       | regexp named     | Page View |
            | user age                | age                                                          | regexp named     | Page View |
            | internal campaign       |                                                              | empty array      | Page View |
            | optimization attributes |                                                              | empty array      | Page View |
            | application             |                                                              | empty str object | Page View |
            | products attributes     |                                                              | empty array      | Page View |

    @ANA_EVENT_MPDS010
    @analytics
    @MX
    @vbank @backend(test)
    @web @ios @android
    @web-done
    Scenario: Mpos Digital Sales - Footprint Page view commissions information modal
        Given a user with the following criteria
            | criteria     |
            | one account  |
            | oc cash zone |
        And the user accesses contract product section
        And the user accesses to card oc cash zone offer from "opportunities"
        And the analytics interceptor service is initiated
        When the user accesses to the "more info commissions" modal
        Then the analytics events contains the following variables
            | item                    | value                                                     | type             | event     |
            | analytics               | analytics/glomo_base                                      | json schema      | Page View |
            | page name               | app:privada:personas:zona de cobro:informacion comisiones | string           | Page View |
            | level 1                 | zona de cobro                                             | string           | Page View |
            | level 2                 | informacion comisiones                                    | string           | Page View |
            | language                | ES                                                        | string           | Page View |
            | page area               | privada                                                   | string           | Page View |
            | page intent             | transaccion                                               | string           | Page View |
            | channel                 | online                                                    | string           | Page View |
            | page instance ID        | de                                                        | string           | Page View |
            | version DL              | 20250414_5.0                                              | string           | Page View |
            | page info version       | appVersion                                                | regexp named     | Page View |
            | page segment            | personas                                                  | string           | Page View |
            | sysEnv                  | app                                                       | string           | Page View |
            | project name            | Mercurio                                                  | string           | Page View |
            | business unit           | BBVA Mexico                                               | string           | Page View |
            | site app name           | App BBVA Mexico                                           | string           | Page View |
            | device mobile           | si                                                        | string           | Page View |
            | user userState          | logado                                                    | string           | Page View |
            | profile ID              | profileID                                                 | regexp named     | Page View |
            | user segment global     | 003001                                                    | string           | Page View |
            | user gender             | gender                                                    | regexp named     | Page View |
            | user age                | age                                                       | regexp named     | Page View |
            | internal campaign       |                                                           | empty array      | Page View |
            | optimization attributes |                                                           | empty array      | Page View |
            | application             |                                                           | empty str object | Page View |
            | products attributes     |                                                           | empty array      | Page View |

    @ANA_EVENT_MPDS011
    @analytics
    @MX
    @vbank @backend(test)
    @web @ios @android
    @web-done
    Scenario: Mpos Digital Sales - Footprint Page view privacy notice modal
        Given a user with the following criteria
            | criteria     |
            | one account  |
            | oc cash zone |
        And the user accesses contract product section
        And the user accesses to card oc cash zone offer from "opportunities"
        And the user accesses to the "order data" step of the oc cash zone offer
        And the analytics interceptor service is initiated
        When the user accesses to the "privacy notice" modal
        Then the analytics events contains the following variables
            | item                    | value                                                  | type             | event     |
            | analytics               | analytics/glomo_base                                   | json schema      | Page View |
            | page name               | app:privada:personas:zona de cobro:aviso de privacidad | string           | Page View |
            | level 1                 | zona de cobro                                          | string           | Page View |
            | level 2                 | aviso de privacidad                                    | string           | Page View |
            | language                | ES                                                     | string           | Page View |
            | page area               | privada                                                | string           | Page View |
            | page intent             | transaccion                                            | string           | Page View |
            | channel                 | online                                                 | string           | Page View |
            | page instance ID        | de                                                     | string           | Page View |
            | version DL              | 20250414_5.0                                           | string           | Page View |
            | page info version       | appVersion                                             | regexp named     | Page View |
            | page segment            | personas                                               | string           | Page View |
            | sysEnv                  | app                                                    | string           | Page View |
            | project name            | Mercurio                                               | string           | Page View |
            | business unit           | BBVA Mexico                                            | string           | Page View |
            | site app name           | App BBVA Mexico                                        | string           | Page View |
            | device mobile           | si                                                     | string           | Page View |
            | user userState          | logado                                                 | string           | Page View |
            | profile ID              | profileID                                              | regexp named     | Page View |
            | user segment global     | 003001                                                 | string           | Page View |
            | user gender             | gender                                                 | regexp named     | Page View |
            | user age                | age                                                    | regexp named     | Page View |
            | internal campaign       |                                                        | empty array      | Page View |
            | optimization attributes |                                                        | empty array      | Page View |
            | application             |                                                        | empty str object | Page View |
            | products attributes     |                                                        | empty array      | Page View |

    @ANA_EVENT_MPDS012
    @analytics
    @MX
    @vbank @backend(test)
    @web @ios @android
    @web-done
    Scenario: Mpos Digital Sales - Footprint Page view delivery information modal
        Given a user with the following criteria
            | criteria     |
            | one account  |
            | oc cash zone |
        And the user accesses contract product section
        And the user accesses to card oc cash zone offer from "opportunities"
        And the user accesses to the "delivery address" step of the oc cash zone offer
        And the analytics interceptor service is initiated
        When the user accesses to the "more info delivery address" modal
        Then the analytics events contains the following variables
            | item                    | value                                                | type             | event     |
            | analytics               | analytics/glomo_base                                 | json schema      | Page View |
            | page name               | app:privada:personas:zona de cobro:informacion envio | string           | Page View |
            | level 1                 | zona de cobro                                        | string           | Page View |
            | level 2                 | informacion envio                                    | string           | Page View |
            | language                | ES                                                   | string           | Page View |
            | page area               | privada                                              | string           | Page View |
            | page intent             | transaccion                                          | string           | Page View |
            | channel                 | online                                               | string           | Page View |
            | page instance ID        | de                                                   | string           | Page View |
            | version DL              | 20250414_5.0                                         | string           | Page View |
            | page info version       | appVersion                                           | regexp named     | Page View |
            | page segment            | personas                                             | string           | Page View |
            | sysEnv                  | app                                                  | string           | Page View |
            | project name            | Mercurio                                             | string           | Page View |
            | business unit           | BBVA Mexico                                          | string           | Page View |
            | site app name           | App BBVA Mexico                                      | string           | Page View |
            | device mobile           | si                                                   | string           | Page View |
            | user userState          | logado                                               | string           | Page View |
            | profile ID              | profileID                                            | regexp named     | Page View |
            | user segment global     | 003001                                               | string           | Page View |
            | user gender             | gender                                               | regexp named     | Page View |
            | user age                | age                                                  | regexp named     | Page View |
            | internal campaign       |                                                      | empty array      | Page View |
            | optimization attributes |                                                      | empty array      | Page View |
            | application             |                                                      | empty str object | Page View |
            | products attributes     |                                                      | empty array      | Page View |

    @ANA_EVENT_MPDS013
    @analytics
    @MX
    @vbank @vbank-modified @backend(test)
    @web @ios @android
    @web-done
    Scenario: Mpos Digital Sales - Footprint Page view contract not available error
        Given a user with the following criteria
            | criteria     |
            | one account  |
            | oc cash zone |
        And the user accesses contract product section
        And the user accesses to card oc cash zone offer from "opportunities"
        And the analytics interceptor service is initiated
        When the user retries the operation "3" times
        Then the analytics events contains the following variables
            | item                    | value                                                        | type             | event     |
            | analytics               | analytics/glomo_base                                         | json schema      | Page View |
            | page name               | app:privada:personas:zona de cobro:informacion no disponible | string           | Page View |
            | level 1                 | zona de cobro                                                | string           | Page View |
            | level 2                 | informacion no disponible                                    | string           | Page View |
            | error page              | informacion no disponible                                    | string           | Page View |
            | language                | ES                                                           | string           | Page View |
            | page area               | privada                                                      | string           | Page View |
            | page intent             | transaccion                                                  | string           | Page View |
            | channel                 | online                                                       | string           | Page View |
            | page instance ID        | de                                                           | string           | Page View |
            | version DL              | 20250414_5.0                                                 | string           | Page View |
            | page info version       | appVersion                                                   | regexp named     | Page View |
            | page segment            | personas                                                     | string           | Page View |
            | sysEnv                  | app                                                          | string           | Page View |
            | project name            | Mercurio                                                     | string           | Page View |
            | business unit           | BBVA Mexico                                                  | string           | Page View |
            | site app name           | App BBVA Mexico                                              | string           | Page View |
            | device mobile           | si                                                           | string           | Page View |
            | user userState          | logado                                                       | string           | Page View |
            | profile ID              | profileID                                                    | regexp named     | Page View |
            | user segment global     | 003001                                                       | string           | Page View |
            | user gender             | gender                                                       | regexp named     | Page View |
            | user age                | age                                                          | regexp named     | Page View |
            | internal campaign       |                                                              | empty array      | Page View |
            | optimization attributes |                                                              | empty array      | Page View |
            | application             |                                                              | empty str object | Page View |
            | products attributes     |                                                              | empty array      | Page View |

    @ANA_EVENT_MPDS014
    @analytics
    @MX
    @vbank @backend(test)
    @web @ios @android
    @web-done
    Scenario: Mpos Digital Sales - Footprint Page view add card reader step
        Given a user with the following criteria
            | criteria     |
            | one account  |
            | oc cash zone |
        And the user accesses contract product section
        And the user accesses to card oc cash zone offer from "opportunities"
        And the analytics interceptor service is initiated
        When the user accesses to the "add card reader" step of the oc cash zone offer
        Then the analytics events contains the following variables
            | item                    | value                                                        | type             | event     |
            | analytics               | analytics/glomo_base                                         | json schema      | Page View |
            | version DL              | 20250414_5.0                                                 | string           | Page View |
            | page name               | app:privada:personas:zona de cobro:anadir lector de tarjetas | string           | Page View |
            | level 1                 | zona de cobro                                                | string           | Page View |
            | level 2                 | anadir lector de tarjetas                                    | string           | Page View |
            | language                | ES                                                           | string           | Page View |
            | page area               | privada                                                      | string           | Page View |
            | page intent             | transaccion                                                  | string           | Page View |
            | channel                 | online                                                       | string           | Page View |
            | page instance ID        | de                                                           | string           | Page View |
            | page info version       | appVersion                                                   | regexp named     | Page View |
            | page segment            | personas                                                     | string           | Page View |
            | sysEnv                  | app                                                          | string           | Page View |
            | business unit           | BBVA Mexico                                                  | string           | Page View |
            | site app name           | App BBVA Mexico                                              | string           | Page View |
            | project name            | Mercurio                                                     | string           | Page View |
            | device mobile           | si                                                           | string           | Page View |
            | user userState          | logado                                                       | string           | Page View |
            | user segment global     | 003001                                                       | string           | Page View |
            | profile ID              | profileID                                                    | regexp named     | Page View |
            | user gender             | gender                                                       | regexp named     | Page View |
            | user age                | age                                                          | regexp named     | Page View |
            | internal campaign       |                                                              | empty array      | Page View |
            | optimization attributes |                                                              | empty array      | Page View |
            | application             |                                                              | empty str object | Page View |
            | products attributes     |                                                              | empty array      | Page View |

    @ANA_EVENT_MPDS015
    @analytics
    @MX
    @vbank @backend(test)
    @web @ios @android
    @web-done
    Scenario: Mpos Digital Sales - Footprint Page view delivery address step
        Given a user with the following criteria
            | criteria     |
            | one account  |
            | oc cash zone |
        And the user accesses contract product section
        And the user accesses to card oc cash zone offer from "opportunities"
        And the user accesses to the "add card reader" step of the oc cash zone offer
        And the analytics interceptor service is initiated
        When the user accesses to the "delivery address" step of the oc cash zone offer
        Then the analytics events contains the following variables
            | item                    | value                                                 | type             | event     |
            | analytics               | analytics/glomo_base                                  | json schema      | Page View |
            | version DL              | 20250414_5.0                                          | string           | Page View |
            | page name               | app:privada:personas:zona de cobro:direccion de envio | string           | Page View |
            | level 1                 | zona de cobro                                         | string           | Page View |
            | level 2                 | direccion de envio                                    | string           | Page View |
            | language                | ES                                                    | string           | Page View |
            | page area               | privada                                               | string           | Page View |
            | page intent             | transaccion                                           | string           | Page View |
            | channel                 | online                                                | string           | Page View |
            | page instance ID        | de                                                    | string           | Page View |
            | page info version       | appVersion                                            | regexp named     | Page View |
            | page segment            | personas                                              | string           | Page View |
            | sysEnv                  | app                                                   | string           | Page View |
            | business unit           | BBVA Mexico                                           | string           | Page View |
            | site app name           | App BBVA Mexico                                       | string           | Page View |
            | project name            | Mercurio                                              | string           | Page View |
            | device mobile           | si                                                    | string           | Page View |
            | user userState          | logado                                                | string           | Page View |
            | user segment global     | 003001                                                | string           | Page View |
            | profile ID              | profileID                                             | regexp named     | Page View |
            | user gender             | gender                                                | regexp named     | Page View |
            | user age                | age                                                   | regexp named     | Page View |
            | internal campaign       |                                                       | empty array      | Page View |
            | optimization attributes |                                                       | empty array      | Page View |
            | application             |                                                       | empty str object | Page View |
            | products attributes     |                                                       | empty array      | Page View |

    @ANA_EVENT_MPDS016
    @analytics
    @MX
    @vbank @backend(test)
    @web @ios @android
    @web-done
    Scenario: Mpos Digital Sales - Footprint Page view payment account step
        Given a user with the following criteria
            | criteria     |
            | one account  |
            | oc cash zone |
        And the user accesses contract product section
        And the user accesses to card oc cash zone offer from "opportunities"
        And the user accesses to the "delivery address" step of the oc cash zone offer
        And the analytics interceptor service is initiated
        When the user accesses to the "payment account" step of the oc cash zone offer
        Then the analytics events contains the following variables
            | item                    | value                                            | type             | event     |
            | analytics               | analytics/glomo_base                             | json schema      | Page View |
            | version DL              | 20250414_5.0                                     | string           | Page View |
            | page name               | app:privada:personas:zona de cobro:datos de pago | string           | Page View |
            | level 1                 | zona de cobro                                    | string           | Page View |
            | level 2                 | datos de pago                                    | string           | Page View |
            | language                | ES                                               | string           | Page View |
            | page area               | privada                                          | string           | Page View |
            | page intent             | transaccion                                      | string           | Page View |
            | channel                 | online                                           | string           | Page View |
            | page instance ID        | de                                               | string           | Page View |
            | page info version       | appVersion                                       | regexp named     | Page View |
            | page segment            | personas                                         | string           | Page View |
            | sysEnv                  | app                                              | string           | Page View |
            | business unit           | BBVA Mexico                                      | string           | Page View |
            | site app name           | App BBVA Mexico                                  | string           | Page View |
            | project name            | Mercurio                                         | string           | Page View |
            | device mobile           | si                                               | string           | Page View |
            | user userState          | logado                                           | string           | Page View |
            | user segment global     | 003001                                           | string           | Page View |
            | profile ID              | profileID                                        | regexp named     | Page View |
            | user gender             | gender                                           | regexp named     | Page View |
            | user age                | age                                              | regexp named     | Page View |
            | internal campaign       |                                                  | empty array      | Page View |
            | optimization attributes |                                                  | empty array      | Page View |
            | application             |                                                  | empty str object | Page View |
            | products attributes     |                                                  | empty array      | Page View |

    @ANA_EVENT_MPDS017
    @analytics
    @MX
    @vbank @backend(test)
    @web @ios @android
    @web-done
    Scenario: Mpos Digital Sales - Footprint Page view otp modal
        Given a user with the following criteria
            | criteria     |
            | one account  |
            | oc cash zone |
        And the user accesses contract product section
        And the user accesses to card oc cash zone offer from "opportunities"
        And the user accesses to the "summary" step of the oc cash zone offer
        And the analytics interceptor service is initiated
        When the user confirms the contract
        Then the analytics events contains the following variables
            | item                    | value                                  | type             | event     |
            | analytics               | analytics/glomo_base                   | json schema      | Page View |
            | version DL              | 20250414_5.0                           | string           | Page View |
            | page name               | app:privada:personas:zona de cobro:otp | string           | Page View |
            | level 1                 | zona de cobro                          | string           | Page View |
            | level 2                 | otp                                    | string           | Page View |
            | language                | ES                                     | string           | Page View |
            | page area               | privada                                | string           | Page View |
            | page intent             | transaccion                            | string           | Page View |
            | channel                 | online                                 | string           | Page View |
            | page instance ID        | de                                     | string           | Page View |
            | page info version       | appVersion                             | regexp named     | Page View |
            | page segment            | personas                               | string           | Page View |
            | sysEnv                  | app                                    | string           | Page View |
            | business unit           | BBVA Mexico                            | string           | Page View |
            | site app name           | App BBVA Mexico                        | string           | Page View |
            | project name            | Mercurio                               | string           | Page View |
            | device mobile           | si                                     | string           | Page View |
            | user userState          | logado                                 | string           | Page View |
            | user segment global     | 003001                                 | string           | Page View |
            | profile ID              | profileID                              | regexp named     | Page View |
            | user gender             | gender                                 | regexp named     | Page View |
            | user age                | age                                    | regexp named     | Page View |
            | custom fields           | firma:token                            | string           | Page View |
            | internal campaign       |                                        | empty array      | Page View |
            | optimization attributes |                                        | empty array      | Page View |
            | application             |                                        | empty str object | Page View |
            | products attributes     |                                        | empty array      | Page View |

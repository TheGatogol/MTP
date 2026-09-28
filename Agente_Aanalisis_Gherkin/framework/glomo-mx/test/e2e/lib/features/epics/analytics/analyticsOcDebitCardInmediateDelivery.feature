@ocDebitCardInmediateDeliveryAnalytics
Feature: Analytics Oc Debit Card Inmediate Delivery

    @ANA_EVENT_LINCA001
    @analytics
    @MX @web @ios @android
    @backend(test) @vbank @web-done
    Scenario: App On Click Start + Click Through
        Given a user with the following criteria
            | criteria       |
            | linkcard offer |
        And the user accesses to card detail
        And the analytics interceptor service is initiated
        When the user accesses to linkcard
        Then the analytics events contains the following variables:
            | item                                                              | value                                                                                                             | type          | event                 |
            | analytics                                                         | analytics/glomo_base                                                                                              | json schema   | App On Click Start    |
            | version DL                                                        | 20250414_5.0                                                                                                      | string        | App On Click Start    |
            | page name                                                         | app:privada:personas:cuentas:detalle                                                                              | string        | App On Click Start    |
            | level 1                                                           | cuentas                                                                                                           | string        | App On Click Start    |
            | level 2                                                           | detalle                                                                                                           | string        | App On Click Start    |
            | language                                                          | ES                                                                                                                | string        | App On Click Start    |
            | page area                                                         | privada                                                                                                           | string        | App On Click Start    |
            | page intent                                                       | informacion                                                                                                       | string        | App On Click Start    |
            | channel                                                           | online                                                                                                            | string        | App On Click Start    |
            | page instance ID                                                  | de                                                                                                                | string        | App On Click Start    |
            | page info version                                                 | appVersion                                                                                                        | regexp named  | App On Click Start    |
            | page segment                                                      | personas                                                                                                          | string        | App On Click Start    |
            | sysEnv                                                            | app                                                                                                               | string        | App On Click Start    |
            | business unit                                                     | BBVA Mexico                                                                                                       | string        | App On Click Start    |
            | site app name                                                     | App BBVA Mexico                                                                                                   | string        | App On Click Start    |
            | project name                                                      | Glomo                                                                                                             | string        | App On Click Start    |
            | device mobile                                                     | si                                                                                                                | string        | App On Click Start    |
            | user userState                                                    | logado                                                                                                            | string        | App On Click Start    |
            | user segment global                                               | 003001                                                                                                            | string        | App On Click Start    |
            | profile ID                                                        | profileID                                                                                                         | regexp named  | App On Click Start    |
            | user gender                                                       | gender                                                                                                            | regexp named  | App On Click Start    |
            | user age                                                          | age                                                                                                               | regexp named  | App On Click Start    |
            | global application                                                | account card delivery                                                                                             | string        | App On Click Start    |
            | application name                                                  | solicitar tarjeta fisica jovenes                                                                                  | string        | App On Click Start    |
            | application type                                                  | operativa                                                                                                         | string        | App On Click Start    |
            | application step                                                  | me interesa                                                                                                       | string        | App On Click Start    |
            | fulfillment model                                                 | online                                                                                                            | string        | App On Click Start    |
            | product primary category                                          | cuentas                                                                                                           | string        | App On Click Start    |
            | product name                                                      | cuenta link card                                                                                                  | string        | App On Click Start    |
            | internal campaign attributes location                             | contract product section--centro-1-1                                                                              | string        | App On Click Start    |
            | internal campaign attributes campaign format                      | card                                                                                                              | string        | App On Click Start    |
            | internal campaign attributes collective code                      | VD-123456                                                                                                         | string        | App On Click Start    |
            | internal campaign attributes name                                 | -quieres darle a tu hijo o hija la link card fisica                                                               | string        | App On Click Start    |
            | internal campaign attributes product                              | cuentas                                                                                                           | string        | App On Click Start    |
            | internal campaign attributes product code                         |                                                                                                                   | string        | App On Click Start    |
            | internal campaign attributes quantity                             |                                                                                                                   | string        | App On Click Start    |
            | internal campaign event name                                      | IntCmpClick                                                                                                       | string        | App On Click Start    |
            | internal campaign site action name                                | contract product section--centro-1-1:card:VD-123456:-quieres darle a tu hijo o hija la link card fisica:cuentas:: | string        | App On Click Start    |
            | optimization attributes                                           |                                                                                                                   | empty array   | App On Click Start    |

    @ANA_EVENT_LINCA002
    @analytics
    @MX @web @ios @android
    @backend(test) @vbank @web-done
    Scenario: App Page Visit
        Given a user with the following criteria
            | criteria       |
            | linkcard offer |
        And the user accesses to card detail
        And the analytics interceptor service is initiated
        When the user accesses to linkcard
        Then the analytics events contains the following variables:
            | item                      | value                                                                         | type          | event             |
            | analytics                 | analytics/glomo_base                                                          | json schema   | App Page Visit    |
            | version DL                | 20250414_5.0                                                                  | string        | App Page Visit    |
            | page name                 | app:privada:personas:cuentas:solicitar tarjeta fisica jovenes:1 beneficios    | string        | App Page Visit    |
            | level 1                   | cuentas                                                                       | string        | App Page Visit    |
            | level 2                   | solicitar tarjeta fisica jovenes                                              | string        | App Page Visit    |
            | level 3                   | 1 beneficios                                                                  | string        | App Page Visit    |
            | language                  | ES                                                                            | string        | App Page Visit    |
            | page area                 | privada                                                                       | string        | App Page Visit    |
            | page intent               | transaccion                                                                   | string        | App Page Visit    |
            | channel                   | online                                                                        | string        | App Page Visit    |
            | page instance ID          | de                                                                            | string        | App Page Visit    |
            | page info version         | appVersion                                                                    | regexp named  | App Page Visit    |
            | page segment              | personas                                                                      | string        | App Page Visit    |
            | sysEnv                    | app                                                                           | string        | App Page Visit    |
            | business unit             | BBVA Mexico                                                                   | string        | App Page Visit    |
            | site app name             | App BBVA Mexico                                                               | string        | App Page Visit    |
            | project name              | Glomo                                                                         | string        | App Page Visit    |
            | device mobile             | si                                                                            | string        | App Page Visit    |
            | user userState            | logado                                                                        | string        | App Page Visit    |
            | user segment global       | 003001                                                                        | string        | App Page Visit    |
            | profile ID                | profileID                                                                     | regexp named  | App Page Visit    |
            | user gender               | gender                                                                        | regexp named  | App Page Visit    |
            | user age                  | age                                                                           | regexp named  | App Page Visit    |
            | global application        | account card delivery                                                         | string        | App Page Visit    |
            | application name          | solicitar tarjeta fisica jovenes                                              | string        | App Page Visit    |
            | application type          | operativa                                                                     | string        | App Page Visit    |
            | application step          | 1 beneficios                                                                  | string        | App Page Visit    |
            | fulfillment model         | online                                                                        | string        | App Page Visit    |
            | product primary category  | cuentas                                                                       | string        | App Page Visit    |
            | product name              | cuenta link card                                                              | string        | App Page Visit    |
            | internal campaign         |                                                                               | empty array   | App Page Visit    |
            | optimization attributes   |                                                                               | empty array   | App Page Visit    |

    @ANA_EVENT_LINCA003
    @analytics
    @MX @web @ios @android
    @backend(test) @vbank @web-done
    Scenario: App Started
        Given a user with the following criteria
                | criteria          |
                | linkcard offer    |
        And the user accesses to childs linkcard
        And the analytics interceptor service is initiated
        When the user continues multistep
        Then the analytics events contains the following variables:
            | item                      | value                                                                         | type          | event         |
            | analytics                 | analytics/glomo_base                                                          | json schema   | App Started   |
            | version DL                | 20250414_5.0                                                                  | string        | App Started   |
            | page name                 | app:privada:personas:cuentas:solicitar tarjeta fisica jovenes:1 beneficios    | string        | App Started   |
            | level 1                   | cuentas                                                                       | string        | App Started   |
            | level 2                   | solicitar tarjeta fisica jovenes                                              | string        | App Started   |
            | level 3                   | 1 beneficios                                                                  | string        | App Started   |
            | language                  | ES                                                                            | string        | App Started   |
            | page area                 | privada                                                                       | string        | App Started   |
            | page intent               | transaccion                                                                   | string        | App Started   |
            | channel                   | online                                                                        | string        | App Started   |
            | page instance ID          | de                                                                            | string        | App Started   |
            | page info version         | appVersion                                                                    | regexp named  | App Started   |
            | page segment              | personas                                                                      | string        | App Started   |
            | sysEnv                    | app                                                                           | string        | App Started   |
            | business unit             | BBVA Mexico                                                                   | string        | App Started   |
            | site app name             | App BBVA Mexico                                                               | string        | App Started   |
            | project name              | Glomo                                                                         | string        | App Started   |
            | device mobile             | si                                                                            | string        | App Started   |
            | user userState            | logado                                                                        | string        | App Started   |
            | user segment global       | 003001                                                                        | string        | App Started   |
            | profile ID                | profileID                                                                     | regexp named  | App Started   |
            | user gender               | gender                                                                        | regexp named  | App Started   |
            | user age                  | age                                                                           | regexp named  | App Started   |
            | global application        | account card delivery                                                         | string        | App Started   |
            | application name          | solicitar tarjeta fisica jovenes                                              | string        | App Started   |
            | application type          | operativa                                                                     | string        | App Started   |
            | application step          | continuar                                                                     | string        | App Started   |
            | fulfillment model         | online                                                                        | string        | App Started   |
            | product primary category  | cuentas                                                                       | string        | App Started   |
            | product name              | cuenta link card                                                              | string        | App Started   |
            | internal campaign         |                                                                               | empty array   | App Started   |
            | optimization attributes   |                                                                               | empty array   | App Started   |

    @ANA_EVENT_LINCA004
    @analytics
    @MX @web @ios @android
    @backend(test) @vbank @web-done
    Scenario: App Step 2
        Given a user with the following criteria
                | criteria          |
                | linkcard offer    |
        And the user accesses to childs linkcard
        And the analytics interceptor service is initiated
        When the user continues multistep
        Then the analytics events contains the following variables:
            | item                      | value                                                                             | type          | event         |
            | analytics                 | analytics/glomo_base                                                              | json schema   | App Step 2    |
            | version DL                | 20250414_5.0                                                                      | string        | App Step 2    |
            | page name                 | app:privada:personas:cuentas:solicitar tarjeta fisica jovenes:2 direccion envio   | string        | App Step 2    |
            | level 1                   | cuentas                                                                           | string        | App Step 2    |
            | level 2                   | solicitar tarjeta fisica jovenes                                                  | string        | App Step 2    |
            | level 3                   | 2 direccion envio                                                                 | string        | App Step 2    |
            | language                  | ES                                                                                | string        | App Step 2    |
            | page area                 | privada                                                                           | string        | App Step 2    |
            | page intent               | transaccion                                                                       | string        | App Step 2    |
            | channel                   | online                                                                            | string        | App Step 2    |
            | page instance ID          | de                                                                                | string        | App Step 2    |
            | page info version         | appVersion                                                                        | regexp named  | App Step 2    |
            | page segment              | personas                                                                          | string        | App Step 2    |
            | sysEnv                    | app                                                                               | string        | App Step 2    |
            | business unit             | BBVA Mexico                                                                       | string        | App Step 2    |
            | site app name             | App BBVA Mexico                                                                   | string        | App Step 2    |
            | project name              | Glomo                                                                             | string        | App Step 2    |
            | device mobile             | si                                                                                | string        | App Step 2    |
            | user userState            | logado                                                                            | string        | App Step 2    |
            | user segment global       | 003001                                                                            | string        | App Step 2    |
            | profile ID                | profileID                                                                         | regexp named  | App Step 2    |
            | user gender               | gender                                                                            | regexp named  | App Step 2    |
            | user age                  | age                                                                               | regexp named  | App Step 2    |
            | global application        | account card delivery                                                             | string        | App Step 2    |
            | application name          | solicitar tarjeta fisica jovenes                                                  | string        | App Step 2    |
            | application type          | operativa                                                                         | string        | App Step 2    |
            | application step          | 2 direccion envio                                                                 | string        | App Step 2    |
            | fulfillment model         | online                                                                            | string        | App Step 2    |
            | product primary category  | cuentas                                                                           | string        | App Step 2    |
            | product name              | cuenta link card                                                                  | string        | App Step 2    |
            | internal campaign         |                                                                                   | empty array   | App Step 2    |
            | optimization attributes   |                                                                                   | empty array   | App Step 2    |

    @ANA_EVENT_LINCA005
    @analytics
    @MX @web @ios @android
    @backend(test) @vbank @web-done
    Scenario: App Step 3
        Given a user with the following criteria
                | criteria          |
                | linkcard offer    |
        And the user accesses to childs linkcard
        And the user taps the "address" in the debit card immediate delivery screen
        And the analytics interceptor service is initiated
        When the user continues card cover step
        Then the analytics events contains the following variables:
            | item                      | value                                                                             | type          | event         |
            | analytics                 | analytics/glomo_base                                                              | json schema   | App Step 3    |
            | version DL                | 20250414_5.0                                                                      | string        | App Step 3    |
            | page name                 | app:privada:personas:cuentas:solicitar tarjeta fisica jovenes:3 personalizacion   | string        | App Step 3    |
            | level 1                   | cuentas                                                                           | string        | App Step 3    |
            | level 2                   | solicitar tarjeta fisica jovenes                                                  | string        | App Step 3    |
            | level 3                   | 3 personalizacion                                                                 | string        | App Step 3    |
            | language                  | ES                                                                                | string        | App Step 3    |
            | page area                 | privada                                                                           | string        | App Step 3    |
            | page intent               | transaccion                                                                       | string        | App Step 3    |
            | channel                   | online                                                                            | string        | App Step 3    |
            | page instance ID          | de                                                                                | string        | App Step 3    |
            | page info version         | appVersion                                                                        | regexp named  | App Step 3    |
            | page segment              | personas                                                                          | string        | App Step 3    |
            | sysEnv                    | app                                                                               | string        | App Step 3    |
            | business unit             | BBVA Mexico                                                                       | string        | App Step 3    |
            | site app name             | App BBVA Mexico                                                                   | string        | App Step 3    |
            | project name              | Glomo                                                                             | string        | App Step 3    |
            | device mobile             | si                                                                                | string        | App Step 3    |
            | user userState            | logado                                                                            | string        | App Step 3    |
            | user segment global       | 003001                                                                            | string        | App Step 3    |
            | profile ID                | profileID                                                                         | regexp named  | App Step 3    |
            | user gender               | gender                                                                            | regexp named  | App Step 3    |
            | user age                  | age                                                                               | regexp named  | App Step 3    |
            | global application        | account card delivery                                                             | string        | App Step 3    |
            | application name          | solicitar tarjeta fisica jovenes                                                  | string        | App Step 3    |
            | application type          | operativa                                                                         | string        | App Step 3    |
            | application step          | 3 personalizacion                                                                 | string        | App Step 3    |
            | fulfillment model         | online                                                                            | string        | App Step 3    |
            | product primary category  | cuentas                                                                           | string        | App Step 3    |
            | product name              | cuenta link card                                                                  | string        | App Step 3    |
            | product amount            | 0                                                                                 | number        | App Step 3    |
            | product currency          | MXN                                                                               | string        | App Step 3    |
            | internal campaign         |                                                                                   | empty array   | App Step 3    |
            | optimization attributes   |                                                                                   | empty array   | App Step 3    |

    @ANA_EVENT_LINCA006
    @analytics
    @MX @web @ios @android
    @backend(test) @vbank @web-done
    Scenario: App Step 4
        Given a user with the following criteria
                | criteria          |
                | linkcard offer    |
        And the user accesses to childs linkcard
        And the user taps the "card color and nickname" in the debit card immediate delivery screen
        And the analytics interceptor service is initiated
        When the user continues step card cover
        Then the analytics events contains the following variables:
            | item                      | value                                                                         | type          | event         |
            | analytics                 | analytics/glomo_base                                                          | json schema   | App Step 4    |
            | version DL                | 20250414_5.0                                                                  | string        | App Step 4    |
            | page name                 | app:privada:personas:cuentas:solicitar tarjeta fisica jovenes:4 confirmacion  | string        | App Step 4    |
            | level 1                   | cuentas                                                                       | string        | App Step 4    |
            | level 2                   | solicitar tarjeta fisica jovenes                                              | string        | App Step 4    |
            | level 3                   | 4 confirmacion                                                                | string        | App Step 4    |
            | language                  | ES                                                                            | string        | App Step 4    |
            | page area                 | privada                                                                       | string        | App Step 4    |
            | page intent               | transaccion                                                                   | string        | App Step 4    |
            | channel                   | online                                                                        | string        | App Step 4    |
            | page instance ID          | de                                                                            | string        | App Step 4    |
            | page info version         | appVersion                                                                    | regexp named  | App Step 4    |
            | page segment              | personas                                                                      | string        | App Step 4    |
            | sysEnv                    | app                                                                           | string        | App Step 4    |
            | business unit             | BBVA Mexico                                                                   | string        | App Step 4    |
            | site app name             | App BBVA Mexico                                                               | string        | App Step 4    |
            | project name              | Glomo                                                                         | string        | App Step 4    |
            | device mobile             | si                                                                            | string        | App Step 4    |
            | user userState            | logado                                                                        | string        | App Step 4    |
            | user segment global       | 003001                                                                        | string        | App Step 4    |
            | profile ID                | profileID                                                                     | regexp named  | App Step 4    |
            | user gender               | gender                                                                        | regexp named  | App Step 4    |
            | user age                  | age                                                                           | regexp named  | App Step 4    |
            | global application        | account card delivery                                                         | string        | App Step 4    |
            | application name          | solicitar tarjeta fisica jovenes                                              | string        | App Step 4    |
            | application type          | operativa                                                                     | string        | App Step 4    |
            | application step          | 4 confirmacion                                                                | string        | App Step 4    |
            | fulfillment model         | online                                                                        | string        | App Step 4    |
            | product primary category  | cuentas                                                                       | string        | App Step 4    |
            | product name              | cuenta link card                                                              | string        | App Step 4    |
            | product amount            | 0                                                                             | number        | App Step 4    |
            | product currency          | MXN                                                                           | string        | App Step 4    |
            | internal campaign         |                                                                               | empty array   | App Step 4    |
            | optimization attributes   |                                                                               | empty array   | App Step 4    |

    @ANA_EVENT_LINCA007
    @analytics
    @MX @web @ios @android
    @backend(test) @vbank @web-done
    Scenario: App Completed - Finalized
        Given a user with the following criteria
                | criteria          |
                | linkcard offer    |
        And the user accesses to childs linkcard
        And the user taps the "finish resume" in the debit card immediate delivery screen
        And the analytics interceptor service is initiated
        When the user finishes the process
        Then the analytics events contains the following variables:
            | item                          | value                                                                         | type          | event         |
            | analytics                     | analytics/glomo_base                                                          | json schema   | App Completed |
            | version DL                    | 20250414_5.0                                                                  | string        | App Completed |
            | page name                     | app:privada:personas:cuentas:solicitar tarjeta fisica jovenes:pagina exitosa  | string        | App Completed |
            | level 1                       | cuentas                                                                       | string        | App Completed |
            | level 2                       | solicitar tarjeta fisica jovenes                                              | string        | App Completed |
            | level 3                       | pagina exitosa                                                                | string        | App Completed |
            | language                      | ES                                                                            | string        | App Completed |
            | page area                     | privada                                                                       | string        | App Completed |
            | page intent                   | transaccion                                                                   | string        | App Completed |
            | channel                       | online                                                                        | string        | App Completed |
            | page instance ID              | de                                                                            | string        | App Completed |
            | page info version             | appVersion                                                                    | regexp named  | App Completed |
            | page segment                  | personas                                                                      | string        | App Completed |
            | sysEnv                        | app                                                                           | string        | App Completed |
            | business unit                 | BBVA Mexico                                                                   | string        | App Completed |
            | site app name                 | App BBVA Mexico                                                               | string        | App Completed |
            | project name                  | Glomo                                                                         | string        | App Completed |
            | device mobile                 | si                                                                            | string        | App Completed |
            | user userState                | logado                                                                        | string        | App Completed |
            | user segment global           | 003001                                                                        | string        | App Completed |
            | profile ID                    | profileID                                                                     | regexp named  | App Completed |
            | user gender                   | gender                                                                        | regexp named  | App Completed |
            | user age                      | age                                                                           | regexp named  | App Completed |
            | global application            | account card delivery                                                         | string        | App Completed |
            | application name              | solicitar tarjeta fisica jovenes                                              | string        | App Completed |
            | application type              | operativa                                                                     | string        | App Completed |
            | application step              | pagina exitosa                                                                | string        | App Completed |
            | fulfillment model             | online                                                                        | string        | App Completed |
            | application state             | finalizado                                                                    | string        | App Completed |
            | application operation number  | 0119041512                                                                    | string        | App Completed |
            | product primary category      | cuentas                                                                       | string        | App Completed |
            | product name                  | cuenta link card                                                              | string        | App Completed |
            | product amount                | 0                                                                             | number        | App Completed |
            | product currency              | MXN                                                                           | string        | App Completed |
            | product state                 | finalizado                                                                    | string        | App Completed |
            | custom fields                 | firma:token                                                                   | string        | App Completed |
            | internal campaign             |                                                                               | empty array   | App Completed |
            | optimization attributes       |                                                                               | empty array   | App Completed |

    @ANA_EVENT_LINCA008
    @analytics
    @MX @web @ios @android
    @backend(test) @vbank @web-done
    Scenario: Footprint - Page View - OTP
        Given a user with the following criteria
                | criteria          |
                | linkcard offer    |
        And the user accesses to childs linkcard
        And the analytics interceptor service is initiated
        When the user taps the "hide address" in the debit card immediate delivery screen
        Then the analytics events contains the following variables:
        | item                      | value                                                             | type              | event     |
        | analytics                 | analytics/glomo_base                                              | json schema       | Page View |
        | version DL                | 20250414_5.0                                                      | string            | Page View |
        | page name                 | app:privada:personas:cuentas:solicitar tarjeta fisica jovenes:otp | string            | Page View |
        | level 1                   | cuentas                                                           | string            | Page View |
        | level 2                   | solicitar tarjeta fisica jovenes                                  | string            | Page View |
        | level 3                   | otp                                                               | string            | Page View |
        | language                  | ES                                                                | string            | Page View |
        | page area                 | privada                                                           | string            | Page View |
        | page intent               | transaccion                                                       | string            | Page View |
        | channel                   | online                                                            | string            | Page View |
        | page instance ID          | de                                                                | string            | Page View |
        | page info version         | appVersion                                                        | regexp named      | Page View |
        | page segment              | personas                                                          | string            | Page View |
        | sysEnv                    | app                                                               | string            | Page View |
        | business unit             | BBVA Mexico                                                       | string            | Page View |
        | site app name             | App BBVA Mexico                                                   | string            | Page View |
        | project name              | DIY E2E Sales                                                     | string            | Page View |
        | device mobile             | si                                                                | string            | Page View |
        | user userState            | logado                                                            | string            | Page View |
        | user segment global       | 003001                                                            | string            | Page View |
        | profile ID                | profileID                                                         | regexp named      | Page View |
        | user gender               | gender                                                            | regexp named      | Page View |
        | user age                  | age                                                               | regexp named      | Page View |
        | custom fields             | firma:token                                                       | string            | Page View |
        | internal campaign         |                                                                   | empty array       | Page View |
        | optimization attributes   |                                                                   | empty array       | Page View |
        | application               |                                                                   | empty str object  | Page View |
        | products attributes       |                                                                   | empty array       | Page View |

    @ANA_EVENT_LINCA009
    @analytics
    @MX @web @ios @android
    @backend(test) @vbank @web-done
    Scenario: Campaign Print - Offer Product Detail
        Given a user with the following criteria
                | criteria          |
                | linkcard offer    |
        And the user accesses to dashboard
        And the analytics interceptor service is initiated
        When the user accesses to card detail
        Then the analytics events contains the following variables:
        | item                                                              | value                                                 | type              | event     | event number |
        | analytics                                                         | analytics/glomo_base                                  | json schema       | Page View | 2            |
        | version DL                                                        | 20250414_5.0                                          | string            | Page View | 2            |
        | page name                                                         | app:privada:personas:cuentas:detalle                  | string            | Page View | 2            |
        | level 1                                                           | cuentas                                               | string            | Page View | 2            |
        | level 2                                                           | detalle                                               | string            | Page View | 2            |
        | language                                                          | ES                                                    | string            | Page View | 2            |
        | page area                                                         | privada                                               | string            | Page View | 2            |
        | page intent                                                       | informacion                                           | string            | Page View | 2            |
        | channel                                                           | online                                                | string            | Page View | 2            |
        | page instance ID                                                  | de                                                    | string            | Page View | 2            |
        | page info version                                                 | appVersion                                            | regexp named      | Page View | 2            |
        | page segment                                                      | personas                                              | string            | Page View | 2            |
        | sysEnv                                                            | app                                                   | string            | Page View | 2            |
        | business unit                                                     | BBVA Mexico                                           | string            | Page View | 2            |
        | site app name                                                     | App BBVA Mexico                                       | string            | Page View | 2            |
        | project name                                                      | DIY E2E Sales                                         | string            | Page View | 2            |
        | device mobile                                                     | si                                                    | string            | Page View | 2            |
        | user userState                                                    | logado                                                | string            | Page View | 2            |
        | user segment global                                               | 003001                                                | string            | Page View | 2            |
        | profile ID                                                        | profileID                                             | regexp named      | Page View | 2            |
        | user gender                                                       | gender                                                | regexp named      | Page View | 2            |
        | user age                                                          | age                                                   | regexp named      | Page View | 2            |
        | internal campaign attributes location                             | contract product section--superior-1-1                | string            | Page View | 2            |
        | internal campaign attributes campaign format                      | list                                                  | string            | Page View | 2            |
        | internal campaign attributes collective code                      | VD                                                    | string            | Page View | 2            |
        | internal campaign attributes name                                 | -quieres darle a tu hijo o hija la link card fisica   | string            | Page View | 2            |
        | internal campaign attributes product                              | cuentas                                               | string            | Page View | 2            |
        | internal campaign attributes product code                         |                                                       | string            | Page View | 2            |
        | internal campaign attributes quantity                             |                                                       | string            | Page View | 2            |
        | optimization attributes                                           |                                                       | empty array       | Page View | 2            |
        | application                                                       |                                                       | empty str object  | Page View | 2            |
        | products attributes                                               |                                                       | empty array       | Page View | 2            |

    @ANA_EVENT_LINCA010
    @analytics
    @MX @web @ios @android
    @backend(test) @vbank @web-done
    Scenario: Error Page - Section Load Error
        Given a user with the following criteria
                | criteria          |
                | linkcard offer    |
        And the user accesses to childs linkcard
        And the user taps the "finish resume" in the debit card immediate delivery screen
        And the analytics interceptor service is initiated
        When the user tries finishes the process
        Then the analytics events contains the following variables:
        | item                      | value                                                                                 | type              | event     |
        | analytics                 | analytics/glomo_base                                                                  | json schema       | Page View |
        | version DL                | 20250414_5.0                                                                          | string            | Page View |
        | page name                 | app:privada:personas:cuentas:solicitar tarjeta fisica jovenes:error carga de seccion  | string            | Page View |
        | level 1                   | cuentas                                                                               | string            | Page View |
        | level 2                   | solicitar tarjeta fisica jovenes                                                      | string            | Page View |
        | level 3                   | error carga de seccion                                                                | string            | Page View |
        | language                  | ES                                                                                    | string            | Page View |
        | page area                 | privada                                                                               | string            | Page View |
        | page intent               | informacion                                                                           | string            | Page View |
        | channel                   | online                                                                                | string            | Page View |
        | page instance ID          | de                                                                                    | string            | Page View |
        | page info version         | appVersion                                                                            | regexp named      | Page View |
        | page segment              | personas                                                                              | string            | Page View |
        | sysEnv                    | app                                                                                   | string            | Page View |
        | business unit             | BBVA Mexico                                                                           | string            | Page View |
        | site app name             | App BBVA Mexico                                                                       | string            | Page View |
        | project name              | Glomo                                                                                 | string            | Page View |
        | device mobile             | si                                                                                    | string            | Page View |
        | user userState            | logado                                                                                | string            | Page View |
        | user segment global       | 003001                                                                                | string            | Page View |
        | profile ID                | profileID                                                                             | regexp named      | Page View |
        | user gender               | gender                                                                                | regexp named      | Page View |
        | user age                  | age                                                                                   | regexp named      | Page View |
        | error page                | error carga de seccion                                                                | string            | Page View |
        | internal campaign         |                                                                                       | empty array       | Page View |
        | optimization attributes   |                                                                                       | empty array       | Page View |
        | application               |                                                                                       | empty str object  | Page View |
        | products attributes       |                                                                                       | empty array       | Page View |

@internationalRefundsAnalytics
Feature: Analytics - International Refunds

    @ANA_EVENT_IR001
    @analytics
    @MX
    @vbank @backend(test)
    @ios @android @web
    @web-done
    Scenario Outline: International Refunds App On Click Start from <entry_point>
        Given a user with the following criteria
            | criteria                                    |
            | international transfers with one n4 account |
        And the user accesses to detail with de following data
            | movementType | status              | entrypoint    |
            | received     | pending information | <entry_point> |
        And the analytics interceptor service is initiated
        When the user selects complete data
        Then the analytics events contains the following variables:
            | item                    | value                                                                   | type         | event              |
            | analytics               | analytics/glomo_base                                                    | json schema  | App On Click Start |
            | version DL              | 20250414_5.0                                                            | string       | App On Click Start |
            | page name               | app:privada:personas:transferencias internacionales:historial:recibidas | string       | App On Click Start |
            | level 1                 | transferencias internacionales                                          | string       | App On Click Start |
            | level 2                 | historial                                                               | string       | App On Click Start |
            | level 3                 | recibidas                                                               | string       | App On Click Start |
            | language                | ES                                                                      | string       | App On Click Start |
            | page area               | privada                                                                 | string       | App On Click Start |
            | page intent             | informacion                                                             | string       | App On Click Start |
            | channel                 | online                                                                  | string       | App On Click Start |
            | page instance ID        | de                                                                      | string       | App On Click Start |
            | page info version       | appVersion                                                              | regexp named | App On Click Start |
            | page segment            | personas                                                                | string       | App On Click Start |
            | sysEnv                  | app                                                                     | string       | App On Click Start |
            | business unit           | BBVA Mexico                                                             | string       | App On Click Start |
            | site app name           | App BBVA Mexico                                                         | string       | App On Click Start |
            | project name            | Glomo                                                                   | string       | App On Click Start |
            | device mobile           | si                                                                      | string       | App On Click Start |
            | user userState          | logado                                                                  | string       | App On Click Start |
            | profile ID              | profileID                                                               | regexp named | App On Click Start |
            | user segment global     | 003001                                                                  | string       | App On Click Start |
            | user age                | age                                                                     | regexp named | App On Click Start |
            | user gender             | gender                                                                  | regexp named | App On Click Start |
            | global application      | international transfers                                                 | string       | App On Click Start |
            | application name        | transferencias internacionales recibidas                                | string       | App On Click Start |
            | application type        | operativa                                                               | string       | App On Click Start |
            | application step        | completar informacion                                                   | string       | App On Click Start |
            | fulfillment model       | online                                                                  | string       | App On Click Start |
            | internal campaign       |                                                                         | empty array  | App On Click Start |
            | optimization attributes |                                                                         | empty array  | App On Click Start |
            | products attributes     |                                                                         | empty array  | App On Click Start |

        Examples:
            | entry_point      |
            | select operation |
            | account detail   |

    @ANA_EVENT_IR002
    @analytics
    @MX
    @vbank @backend(test)
    @ios @android @web
    @web-done
    Scenario Outline: International Refunds App Page Visit from <entry_point>
        Given a user with the following criteria
            | criteria                                    |
            | international transfers with one n4 account |
        And the user accesses to detail with de following data
            | movementType | status              | entrypoint    |
            | received     | pending information | <entry_point> |
        And the analytics interceptor service is initiated
        When the user selects complete data
        Then the analytics events contains the following variables:
            | item                     | value                                                                               | type         | event          |
            | analytics                | analytics/glomo_base                                                                | json schema  | App Page Visit |
            | version DL               | 20250414_5.0                                                                        | string       | App Page Visit |
            | page name                | app:privada:personas:transferencias internacionales recibidas:1 agregar informacion | string       | App Page Visit |
            | level 1                  | transferencias internacionales recibidas                                            | string       | App Page Visit |
            | level 2                  | 1 agregar informacion                                                               | string       | App Page Visit |
            | language                 | ES                                                                                  | string       | App Page Visit |
            | page area                | privada                                                                             | string       | App Page Visit |
            | page intent              | transaccion                                                                         | string       | App Page Visit |
            | channel                  | online                                                                              | string       | App Page Visit |
            | page instance ID         | de                                                                                  | string       | App Page Visit |
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
            | user age                 | age                                                                                 | regexp named | App Page Visit |
            | user gender              | gender                                                                              | regexp named | App Page Visit |
            | global application       | international transfers                                                             | string       | App Page Visit |
            | application name         | transferencias internacionales recibidas                                            | string       | App Page Visit |
            | application type         | operativa                                                                           | string       | App Page Visit |
            | application step         | 1 agregar informacion                                                               | string       | App Page Visit |
            | fulfillment model        | online                                                                              | string       | App Page Visit |
            | qualified visits         | true                                                                                | string       | App Page Visit |
            | application typology     | bbva colombia                                                                       | string       | App Page Visit |
            | product primary category | cuentas                                                                             | string       | App Page Visit |
            | product amount           | 88100                                                                               | string       | App Page Visit |
            | product currency         | USD                                                                                 | string       | App Page Visit |
            | internal campaign        |                                                                                     | empty array  | App Page Visit |
            | optimization attributes  |                                                                                     | empty array  | App Page Visit |

        Examples:
            | entry_point      |
            | select operation |
            | account detail   |

    @ANA_EVENT_IR003
    @analytics
    @MX
    @vbank @backend(test)
    @ios @android @web
    @web-done
    Scenario Outline: International Refunds App Started from <entry_point>
        Given a user with the following criteria
            | criteria                                    |
            | international transfers with one n4 account |
        And the user accesses to complete data from "<entry_point>"
        And the analytics interceptor service is initiated
        When the user starts to complete data
        Then the analytics events contains the following variables:
            | item                     | value                                                                               | type         | event       |
            | analytics                | analytics/glomo_base                                                                | json schema  | App Started |
            | version DL               | 20250414_5.0                                                                        | string       | App Started |
            | page name                | app:privada:personas:transferencias internacionales recibidas:1 agregar informacion | string       | App Started |
            | level 1                  | transferencias internacionales recibidas                                            | string       | App Started |
            | level 2                  | 1 agregar informacion                                                               | string       | App Started |
            | language                 | ES                                                                                  | string       | App Started |
            | page area                | privada                                                                             | string       | App Started |
            | page intent              | transaccion                                                                         | string       | App Started |
            | channel                  | online                                                                              | string       | App Started |
            | page instance ID         | de                                                                                  | string       | App Started |
            | page info version        | appVersion                                                                          | regexp named | App Started |
            | page segment             | personas                                                                            | string       | App Started |
            | sysEnv                   | app                                                                                 | string       | App Started |
            | business unit            | BBVA Mexico                                                                         | string       | App Started |
            | site app name            | App BBVA Mexico                                                                     | string       | App Started |
            | project name             | Glomo                                                                               | string       | App Started |
            | device mobile            | si                                                                                  | string       | App Started |
            | user userState           | logado                                                                              | string       | App Started |
            | profile ID               | profileID                                                                           | regexp named | App Started |
            | user segment global      | 003001                                                                              | string       | App Started |
            | user age                 | age                                                                                 | regexp named | App Started |
            | user gender              | gender                                                                              | regexp named | App Started |
            | global application       | international transfers                                                             | string       | App Started |
            | application name         | transferencias internacionales recibidas                                            | string       | App Started |
            | application type         | operativa                                                                           | string       | App Started |
            | application step         | relacion con el remitente                                                           | string       | App Started |
            | fulfillment model        | online                                                                              | string       | App Started |
            | application typology     | bbva colombia                                                                       | string       | App Started |
            | product primary category | cuentas                                                                             | string       | App Started |
            | product amount           | 88100                                                                               | string       | App Started |
            | product currency         | USD                                                                                 | string       | App Started |
            | internal campaign        |                                                                                     | empty array  | App Started |
            | optimization attributes  |                                                                                     | empty array  | App Started |

        Examples:
            | entry_point      |
            | select operation |
            | account detail   |

    @ANA_EVENT_IR004
    @analytics
    @MX
    @vbank @backend(test)
    @ios @android @web
    @web-done
    Scenario Outline: International Refunds App step 2 from <entry_point>
        Given a user with the following criteria
            | criteria                                    |
            | international transfers with one n4 account |
        And the user accesses to complete data from "<entry_point>"
        And the analytics interceptor service is initiated
        When the user fills in his additional information
        Then the analytics events contains the following variables:
            | item                     | value                                                                                                                                                                                    | type         | event      |
            | analytics                | analytics/glomo_base                                                                                                                                                                     | json schema  | App Step 2 |
            | version DL               | 20250414_5.0                                                                                                                                                                             | string       | App Step 2 |
            | page name                | app:privada:personas:transferencias internacionales recibidas:2 confirmar                                                                                                                | string       | App Step 2 |
            | level 1                  | transferencias internacionales recibidas                                                                                                                                                 | string       | App Step 2 |
            | level 2                  | 2 confirmar                                                                                                                                                                              | string       | App Step 2 |
            | language                 | ES                                                                                                                                                                                       | string       | App Step 2 |
            | page area                | privada                                                                                                                                                                                  | string       | App Step 2 |
            | page intent              | transaccion                                                                                                                                                                              | string       | App Step 2 |
            | channel                  | online                                                                                                                                                                                   | string       | App Step 2 |
            | page instance ID         | de                                                                                                                                                                                       | string       | App Step 2 |
            | page info version        | appVersion                                                                                                                                                                               | regexp named | App Step 2 |
            | page segment             | personas                                                                                                                                                                                 | string       | App Step 2 |
            | sysEnv                   | app                                                                                                                                                                                      | string       | App Step 2 |
            | business unit            | BBVA Mexico                                                                                                                                                                              | string       | App Step 2 |
            | site app name            | App BBVA Mexico                                                                                                                                                                          | string       | App Step 2 |
            | project name             | Glomo                                                                                                                                                                                    | string       | App Step 2 |
            | device mobile            | si                                                                                                                                                                                       | string       | App Step 2 |
            | user userState           | logado                                                                                                                                                                                   | string       | App Step 2 |
            | profile ID               | profileID                                                                                                                                                                                | regexp named | App Step 2 |
            | user segment global      | 003001                                                                                                                                                                                   | string       | App Step 2 |
            | user age                 | age                                                                                                                                                                                      | regexp named | App Step 2 |
            | user gender              | gender                                                                                                                                                                                   | regexp named | App Step 2 |
            | global application       | international transfers                                                                                                                                                                  | string       | App Step 2 |
            | application name         | transferencias internacionales recibidas                                                                                                                                                 | string       | App Step 2 |
            | application type         | operativa                                                                                                                                                                                | string       | App Step 2 |
            | application step         | 2 confirmar                                                                                                                                                                              | string       | App Step 2 |
            | fulfillment model        | online                                                                                                                                                                                   | string       | App Step 2 |
            | application typology     | bbva colombia                                                                                                                                                                            | string       | App Step 2 |
            | custom fields            | relacion:comercial,motivo de la transferencia:credito,campo actividad economica:informado,check actividad economica en el extranjero:no,campo actividad economica en el extranjero:vacio | string       | App Step 2 |
            | application offer        | credito                                                                                                                                                                                  | string       | App Step 2 |
            | product primary category | cuentas                                                                                                                                                                                  | string       | App Step 2 |
            | product amount           | 88100                                                                                                                                                                                    | string       | App Step 2 |
            | product currency         | USD                                                                                                                                                                                      | string       | App Step 2 |
            | internal campaign        |                                                                                                                                                                                          | empty array  | App Step 2 |
            | optimization attributes  |                                                                                                                                                                                          | empty array  | App Step 2 |

        Examples:
            | entry_point      |
            | select operation |
            | account detail   |

    @ANA_EVENT_IR005
    @analytics
    @MX
    @vbank @backend(test)
    @ios @android @web
    @web-done
    Scenario Outline: International Refunds App Completed 2 from <entry_point>
        Given a user with the following criteria
            | criteria                                    |
            | international transfers with one n4 account |
        And the user accesses to complete data from "<entry_point>"
        And the analytics interceptor service is initiated
        When the user send his data
        Then the analytics events contains the following variables:
            | item                         | value                                                                                                                                                                                    | type         | event         |
            | version DL                   | 20250414_5.0                                                                                                                                                                             | string       | App Completed |
            | page name                    | app:privada:personas:transferencias internacionales recibidas:pagina exitosa                                                                                                             | string       | App Completed |
            | level 1                      | transferencias internacionales recibidas                                                                                                                                                 | string       | App Completed |
            | level 2                      | pagina exitosa                                                                                                                                                                           | string       | App Completed |
            | language                     | ES                                                                                                                                                                                       | string       | App Completed |
            | page area                    | privada                                                                                                                                                                                  | string       | App Completed |
            | page intent                  | transaccion                                                                                                                                                                              | string       | App Completed |
            | channel                      | online                                                                                                                                                                                   | string       | App Completed |
            | page instance ID             | de                                                                                                                                                                                       | string       | App Completed |
            | page info version            | appVersion                                                                                                                                                                               | regexp named | App Completed |
            | page segment                 | personas                                                                                                                                                                                 | string       | App Completed |
            | sysEnv                       | app                                                                                                                                                                                      | string       | App Completed |
            | business unit                | BBVA Mexico                                                                                                                                                                              | string       | App Completed |
            | site app name                | App BBVA Mexico                                                                                                                                                                          | string       | App Completed |
            | project name                 | Glomo                                                                                                                                                                                    | string       | App Completed |
            | device mobile                | si                                                                                                                                                                                       | string       | App Completed |
            | user userState               | logado                                                                                                                                                                                   | string       | App Completed |
            | profile ID                   | profileID                                                                                                                                                                                | regexp named | App Completed |
            | user segment global          | 003001                                                                                                                                                                                   | string       | App Completed |
            | user age                     | age                                                                                                                                                                                      | regexp named | App Completed |
            | user gender                  | gender                                                                                                                                                                                   | regexp named | App Completed |
            | global application           | international transfers                                                                                                                                                                  | string       | App Completed |
            | application name             | transferencias internacionales recibidas                                                                                                                                                 | string       | App Completed |
            | application type             | operativa                                                                                                                                                                                | string       | App Completed |
            | application step             | pagina exitosa                                                                                                                                                                           | string       | App Completed |
            | fulfillment model            | online                                                                                                                                                                                   | string       | App Completed |
            | application typology         | bbva colombia                                                                                                                                                                            | string       | App Completed |
            | custom fields                | relacion:comercial,motivo de la transferencia:credito,campo actividad economica:informado,check actividad economica en el extranjero:no,campo actividad economica en el extranjero:vacio | string       | App Completed |
            | application offer            | credito                                                                                                                                                                                  | string       | App Completed |
            | application state            | finalizado                                                                                                                                                                               | string       | App Completed |
            | application operation number | VcBPuWbQ0DzsF_qc_aVlEg                                                                                                                                                                   | string       | App Completed |
            | product primary category     | cuentas                                                                                                                                                                                  | string       | App Completed |
            | product amount               | 88100                                                                                                                                                                                    | string       | App Completed |
            | product currency             | USD                                                                                                                                                                                      | string       | App Completed |
            | internal campaign            |                                                                                                                                                                                          | empty array  | App Completed |
            | optimization attributes      |                                                                                                                                                                                          | empty array  | App Completed |

        Examples:
            | entry_point      |
            | select operation |
            | account detail   |

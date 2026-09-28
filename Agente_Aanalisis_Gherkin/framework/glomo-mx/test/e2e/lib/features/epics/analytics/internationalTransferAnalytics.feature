@internationalTransferAnalytics
Feature: Analytics - International Transfer

    Background:
        Given a user with the following criteria
            | criteria                                    |
            | international transfers with one n4 account |

    @ANA_EVENT_IT001
    @analytics
    @MX
    @vbank @backend(test)
    @ios @android @web
    @web-done
    Scenario Outline: International Transfers from <entry_point> - App On Click Start, App Page Visit
        Given the user accesses to operatives screen from "<entry_point>"
        And the analytics interceptor service is initiated
        When the user accesses to international transfers panel screen
        Then the analytics events contains the following variables:
            | item                     | value                                                           | type         | event                              |
            | analytics                | analytics/glomo_base                                            | json schema  | App On Click Start, App Page Visit |
            | version DL               | 20250414_5.0                                                    | string       | App On Click Start, App Page Visit |
            | page name                | app:privada:personas:<level_1><separator><level_2>              | string       | App On Click Start                 |
            | page name                | app:privada:personas:transferencias internacionales:1 historial | string       | App Page Visit                     |
            | level 1                  | <level_1>                                                       | string       | App On Click Start                 |
            | level 1                  | transferencias internacionales                                  | string       | App Page Visit                     |
            | level 2                  | <level_2>                                                       | string       | App On Click Start                 |
            | level 2                  | 1 historial                                                     | string       | App Page Visit                     |
            | language                 | ES                                                              | string       | App On Click Start, App Page Visit |
            | page area                | privada                                                         | string       | App On Click Start, App Page Visit |
            | page intent              | informacion                                                     | string       | App On Click Start                 |
            | page intent              | transaccion                                                     | string       | App Page Visit                     |
            | channel                  | online                                                          | string       | App On Click Start, App Page Visit |
            | page instance ID         | de                                                              | string       | App On Click Start, App Page Visit |
            | page info version        | appVersion                                                      | regexp named | App On Click Start, App Page Visit |
            | page segment             | personas                                                        | string       | App On Click Start, App Page Visit |
            | sysEnv                   | app                                                             | string       | App On Click Start, App Page Visit |
            | business unit            | BBVA Mexico                                                     | string       | App On Click Start, App Page Visit |
            | site app name            | App BBVA Mexico                                                 | string       | App On Click Start, App Page Visit |
            | project name             | Glomo                                                           | string       | App On Click Start, App Page Visit |
            | device mobile            | si                                                              | string       | App On Click Start, App Page Visit |
            | user userState           | logado                                                          | string       | App On Click Start, App Page Visit |
            | profile ID               | profileID                                                       | regexp named | App On Click Start, App Page Visit |
            | user segment global      | 003001                                                          | string       | App On Click Start, App Page Visit |
            | user age                 | age                                                             | regexp named | App On Click Start, App Page Visit |
            | user gender              | gender                                                          | regexp named | App On Click Start, App Page Visit |
            | global application       | international transfers                                         | string       | App On Click Start, App Page Visit |
            | application name         | transferencias internacionales                                  | string       | App On Click Start, App Page Visit |
            | application type         | operativa                                                       | string       | App On Click Start, App Page Visit |
            | application step         | <application_step>                                              | string       | App On Click Start                 |
            | application step         | 1 historial                                                     | string       | App Page Visit                     |
            | fulfillment model        | online                                                          | string       | App On Click Start, App Page Visit |
            | qualified visits         | true                                                            | string       | App Page Visit                     |
            | product primary category | cuentas                                                         | string       | App On Click Start, App Page Visit |
            | internal campaign        |                                                                 | empty array  | App On Click Start, App Page Visit |
            | optimization attributes  |                                                                 | empty array  | App On Click Start, App Page Visit |

        Examples:
            | entry_point      | level_1         | level_2 | application_step          | separator |
            | account detail   | cuentas         | detalle | detalle de cuenta         | :         |
            | select operation | posicion global |         | operativa posicion global |           |

    @ANA_EVENT_IT002
    @analytics
    @MX
    @vbank @backend(test)
    @ios @android @web
    @web-done
    Scenario Outline: International Transfers from <entry_point> to <application_step> - App Started, App Step 2
        Given the user accesses to operatives screen from "<entry_point>"
        And the analytics interceptor service is initiated
        When the user accesses to <screen>
        Then the analytics events contains the following variables:
            | item                     | value                                                           | type         | event       |
            | analytics                | analytics/glomo_base                                            | json schema  | App Started |
            | version DL               | 20250414_5.0                                                    | string       | App Started |
            | page name                | app:privada:personas:transferencias internacionales:1 historial | string       | App Started |
            | level 1                  | transferencias internacionales                                  | string       | App Started |
            | level 2                  | 1 historial                                                     | string       | App Started |
            | language                 | ES                                                              | string       | App Started |
            | page area                | privada                                                         | string       | App Started |
            | page intent              | transaccion                                                     | string       | App Started |
            | channel                  | online                                                          | string       | App Started |
            | page instance ID         | de                                                              | string       | App Started |
            | page info version        | appVersion                                                      | regexp named | App Started |
            | page segment             | personas                                                        | string       | App Started |
            | sysEnv                   | app                                                             | string       | App Started |
            | business unit            | BBVA Mexico                                                     | string       | App Started |
            | site app name            | App BBVA Mexico                                                 | string       | App Started |
            | project name             | Glomo                                                           | string       | App Started |
            | device mobile            | si                                                              | string       | App Started |
            | user userState           | logado                                                          | string       | App Started |
            | profile ID               | profileID                                                       | regexp named | App Started |
            | user segment global      | 003001                                                          | string       | App Started |
            | user age                 | age                                                             | regexp named | App Started |
            | user gender              | gender                                                          | regexp named | App Started |
            | global application       | international transfers                                         | string       | App Started |
            | application name         | transferencias internacionales                                  | string       | App Started |
            | application type         | operativa                                                       | string       | App Started |
            | application step         | <application_step>                                              | string       | App Started |
            | fulfillment model        | online                                                          | string       | App Started |
            | product primary category | cuentas                                                         | string       | App Started |
            | internal campaign        |                                                                 | empty array  | App Started |
            | optimization attributes  |                                                                 | empty array  | App Started |

        Examples:
            | application_step | entry_point      | screen                                                  |
            | nueva            | account detail   | make an international transfer and has "one n4 account" |
            | enviadas         | account detail   | view movements "sent"                                   |
            | recibidas        | account detail   | view movements "received"                               |
            | nueva            | select operation | make an international transfer and has "one n4 account" |
            | enviadas         | select operation | view movements "sent"                                   |
            | recibidas        | select operation | view movements "received"                               |

    @ANA_EVENT_IT003
    @analytics
    @MX
    @vbank @backend(test)
    @ios @android @web
    @web-done
    Scenario Outline: International Transfers from <entry_point> - App Step 2
        Given the user accesses to operatives screen from "<entry_point>"
        And the analytics interceptor service is initiated
        And the user accesses to make an international transfer and has "one n4 account"
        When the user select continue modal
        Then the analytics events contains the following variables:
            | item                     | value                                                              | type         | event      |
            | analytics                | analytics/glomo_base                                               | json schema  | App Step 2 |
            | version DL               | 20250414_5.0                                                       | string       | App Step 2 |
            | page name                | app:privada:personas:transferencias internacionales:2 destinatario | string       | App Step 2 |
            | level 1                  | transferencias internacionales                                     | string       | App Step 2 |
            | level 2                  | 2 destinatario                                                     | string       | App Step 2 |
            | language                 | ES                                                                 | string       | App Step 2 |
            | page area                | privada                                                            | string       | App Step 2 |
            | page intent              | transaccion                                                        | string       | App Step 2 |
            | channel                  | online                                                             | string       | App Step 2 |
            | page instance ID         | de                                                                 | string       | App Step 2 |
            | page info version        | appVersion                                                         | regexp named | App Step 2 |
            | page segment             | personas                                                           | string       | App Step 2 |
            | sysEnv                   | app                                                                | string       | App Step 2 |
            | business unit            | BBVA Mexico                                                        | string       | App Step 2 |
            | site app name            | App BBVA Mexico                                                    | string       | App Step 2 |
            | project name             | Glomo                                                              | string       | App Step 2 |
            | device mobile            | si                                                                 | string       | App Step 2 |
            | user userState           | logado                                                             | string       | App Step 2 |
            | profile ID               | profileID                                                          | regexp named | App Step 2 |
            | user segment global      | 003001                                                             | string       | App Step 2 |
            | user age                 | age                                                                | regexp named | App Step 2 |
            | user gender              | gender                                                             | regexp named | App Step 2 |
            | global application       | international transfers                                            | string       | App Step 2 |
            | application name         | transferencias internacionales                                     | string       | App Step 2 |
            | application type         | operativa                                                          | string       | App Step 2 |
            | application step         | 2 destinatario                                                     | string       | App Step 2 |
            | fulfillment model        | online                                                             | string       | App Step 2 |
            | product primary category | cuentas                                                            | string       | App Step 2 |
            | internal campaign        |                                                                    | empty array  | App Step 2 |
            | optimization attributes  |                                                                    | empty array  | App Step 2 |

        Examples:
            | entry_point      |
            | account detail   |
            | select operation |

    @ANA_EVENT_IT004
    @analytics
    @MX
    @vbank @backend(test)
    @ios @android @web
    @web-done
    Scenario Outline: International Transfers from <entry_point> - Page view
        Given the user accesses to operatives screen from "<entry_point>"
        And the analytics interceptor service is initiated
        And the user accesses to make an international transfer and has "one n4 account"
        And the user select continue modal
        When the user select recipient
        Then the analytics events contains the following variables:
            | item                    | value                                                                  | type             | event     |
            | analytics               | analytics/glomo_base                                                   | json schema      | Page View |
            | version DL              | 20250414_5.0                                                           | string           | Page View |
            | page name               | app:privada:personas:transferencias internacionales:nuevo destinatario | string           | Page View |
            | level 1                 | transferencias internacionales                                         | string           | Page View |
            | level 2                 | nuevo destinatario                                                     | string           | Page View |
            | language                | ES                                                                     | string           | Page View |
            | page area               | privada                                                                | string           | Page View |
            | page intent             | transaccion                                                            | string           | Page View |
            | channel                 | online                                                                 | string           | Page View |
            | page instance ID        | de                                                                     | string           | Page View |
            | page info version       | appVersion                                                             | regexp named     | Page View |
            | page segment            | personas                                                               | string           | Page View |
            | sysEnv                  | app                                                                    | string           | Page View |
            | business unit           | BBVA Mexico                                                            | string           | Page View |
            | site app name           | App BBVA Mexico                                                        | string           | Page View |
            | project name            | Glomo                                                                  | string           | Page View |
            | device mobile           | si                                                                     | string           | Page View |
            | user userState          | logado                                                                 | string           | Page View |
            | profile ID              | profileID                                                              | regexp named     | Page View |
            | user segment global     | 003001                                                                 | string           | Page View |
            | user age                | age                                                                    | regexp named     | Page View |
            | user gender             | gender                                                                 | regexp named     | Page View |
            | internal campaign       |                                                                        | empty array      | Page View |
            | optimization attributes |                                                                        | empty array      | Page View |
            | application             |                                                                        | empty str object | Page View |

        Examples:
            | entry_point      |
            | account detail   |
            | select operation |

    @ANA_EVENT_IT005
    @analytics
    @MX
    @vbank @backend(test)
    @ios @android @web
    @web-done
    Scenario Outline: International Transfers from <entry_point> - App Step 3
        Given the user accesses to operatives screen from "<entry_point>"
        And the analytics interceptor service is initiated
        And the user accesses to make an international transfer and has "one n4 account"
        And the user select continue modal
        And the user select recipient
        When the user fill bank code
        Then the analytics events contains the following variables:
            | item                     | value                                                                     | type         | event      |
            | analytics                | analytics/glomo_base                                                      | json schema  | App Step 3 |
            | version DL               | 20250414_5.0                                                              | string       | App Step 3 |
            | page name                | app:privada:personas:transferencias internacionales:3 datos banco destino | string       | App Step 3 |
            | level 1                  | transferencias internacionales                                            | string       | App Step 3 |
            | level 2                  | 3 datos banco destino                                                     | string       | App Step 3 |
            | language                 | ES                                                                        | string       | App Step 3 |
            | page area                | privada                                                                   | string       | App Step 3 |
            | page intent              | transaccion                                                               | string       | App Step 3 |
            | channel                  | online                                                                    | string       | App Step 3 |
            | page instance ID         | de                                                                        | string       | App Step 3 |
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
            | user age                 | age                                                                       | regexp named | App Step 3 |
            | user gender              | gender                                                                    | regexp named | App Step 3 |
            | global application       | international transfers                                                   | string       | App Step 3 |
            | application name         | transferencias internacionales                                            | string       | App Step 3 |
            | application type         | operativa                                                                 | string       | App Step 3 |
            | application step         | 3 datos banco destino                                                     | string       | App Step 3 |
            | fulfillment model        | online                                                                    | string       | App Step 3 |
            | product primary category | cuentas                                                                   | string       | App Step 3 |
            | internal campaign        |                                                                           | empty array  | App Step 3 |
            | optimization attributes  |                                                                           | empty array  | App Step 3 |

        Examples:
            | entry_point      |
            | account detail   |
            | select operation |

    @ANA_EVENT_IT006
    @analytics
    @MX
    @vbank @backend(test)
    @ios @android @web
    @web-done
    Scenario Outline: International Transfers from <entry_point> - App Step 4
        Given the user accesses to operatives screen from "<entry_point>"
        And the analytics interceptor service is initiated
        And the user accesses to make an international transfer and has "one n4 account"
        And the user select continue modal
        When the user continues the flow to the beneficiary data
        Then the analytics events contains the following variables:
            | item                     | value                                                                     | type         | event      |
            | analytics                | analytics/glomo_base                                                      | json schema  | App Step 4 |
            | version DL               | 20250414_5.0                                                              | string       | App Step 4 |
            | page name                | app:privada:personas:transferencias internacionales:4 actividad economica | string       | App Step 4 |
            | level 1                  | transferencias internacionales                                            | string       | App Step 4 |
            | level 2                  | 4 actividad economica                                                     | string       | App Step 4 |
            | language                 | ES                                                                        | string       | App Step 4 |
            | page area                | privada                                                                   | string       | App Step 4 |
            | page intent              | transaccion                                                               | string       | App Step 4 |
            | channel                  | online                                                                    | string       | App Step 4 |
            | page instance ID         | de                                                                        | string       | App Step 4 |
            | page info version        | appVersion                                                                | regexp named | App Step 4 |
            | page segment             | personas                                                                  | string       | App Step 4 |
            | sysEnv                   | app                                                                       | string       | App Step 4 |
            | business unit            | BBVA Mexico                                                               | string       | App Step 4 |
            | site app name            | App BBVA Mexico                                                           | string       | App Step 4 |
            | project name             | Glomo                                                                     | string       | App Step 4 |
            | device mobile            | si                                                                        | string       | App Step 4 |
            | user userState           | logado                                                                    | string       | App Step 4 |
            | profile ID               | profileID                                                                 | regexp named | App Step 4 |
            | user segment global      | 003001                                                                    | string       | App Step 4 |
            | user age                 | age                                                                       | regexp named | App Step 4 |
            | user gender              | gender                                                                    | regexp named | App Step 4 |
            | global application       | international transfers                                                   | string       | App Step 4 |
            | application name         | transferencias internacionales                                            | string       | App Step 4 |
            | application type         | operativa                                                                 | string       | App Step 4 |
            | application step         | 4 actividad economica                                                     | string       | App Step 4 |
            | fulfillment model        | online                                                                    | string       | App Step 4 |
            | application typology     | jpmorgan chase bank na                                                    | string       | App Step 4 |
            | custom fields            | relacion:comercial,pais:estados unidos de america                         | string       | App Step 4 |
            | product primary category | cuentas                                                                   | string       | App Step 4 |
            | internal campaign        |                                                                           | empty array  | App Step 4 |
            | optimization attributes  |                                                                           | empty array  | App Step 4 |

        Examples:
            | entry_point      |
            | account detail   |
            | select operation |

    @ANA_EVENT_IT007
    @analytics
    @MX
    @vbank @backend(test)
    @ios @android @web
    @web-done
    Scenario Outline: International Transfers <entry_point> <economic_activity> - App Step 5
        Given the user accesses to operatives screen from "<entry_point>"
        And the analytics interceptor service is initiated
        And the user accesses to make an international transfer and has "one n4 account"
        And the user select continue modal
        And the user continues the flow to the beneficiary data
        When the user enter her activity economic "<economic_activity>"
        Then the analytics events contains the following variables:
            | item                     | value                                                                              | type         | event      |
            | analytics                | analytics/glomo_base                                                               | json schema  | App Step 5 |
            | version DL               | 20250414_5.0                                                                       | string       | App Step 5 |
            | page name                | app:privada:personas:transferencias internacionales:5 importe                      | string       | App Step 5 |
            | level 1                  | transferencias internacionales                                                     | string       | App Step 5 |
            | level 2                  | 5 importe                                                                          | string       | App Step 5 |
            | language                 | ES                                                                                 | string       | App Step 5 |
            | page area                | privada                                                                            | string       | App Step 5 |
            | page intent              | transaccion                                                                        | string       | App Step 5 |
            | channel                  | online                                                                             | string       | App Step 5 |
            | page instance ID         | de                                                                                 | string       | App Step 5 |
            | page info version        | appVersion                                                                         | regexp named | App Step 5 |
            | page segment             | personas                                                                           | string       | App Step 5 |
            | sysEnv                   | app                                                                                | string       | App Step 5 |
            | business unit            | BBVA Mexico                                                                        | string       | App Step 5 |
            | site app name            | App BBVA Mexico                                                                    | string       | App Step 5 |
            | project name             | Glomo                                                                              | string       | App Step 5 |
            | device mobile            | si                                                                                 | string       | App Step 5 |
            | user userState           | logado                                                                             | string       | App Step 5 |
            | profile ID               | profileID                                                                          | regexp named | App Step 5 |
            | user segment global      | 003001                                                                             | string       | App Step 5 |
            | user age                 | age                                                                                | regexp named | App Step 5 |
            | user gender              | gender                                                                             | regexp named | App Step 5 |
            | global application       | international transfers                                                            | string       | App Step 5 |
            | application name         | transferencias internacionales                                                     | string       | App Step 5 |
            | application type         | operativa                                                                          | string       | App Step 5 |
            | application step         | 5 importe                                                                          | string       | App Step 5 |
            | fulfillment model        | online                                                                             | string       | App Step 5 |
            | application typology     | jpmorgan chase bank na                                                             | string       | App Step 5 |
            | custom fields            | relacion:comercial,pais:estados unidos de america,<custom_field_economic_activity> | string       | App Step 5 |
            | product primary category | cuentas                                                                            | string       | App Step 5 |
            | internal campaign        |                                                                                    | empty array  | App Step 5 |
            | optimization attributes  |                                                                                    | empty array  | App Step 5 |

        Examples:
            | entry_point      | economic_activity | custom_field_economic_activity                                                                                                         |
            | account detail   | local             | campo actividad economica:informado,check actividad economica en el extranjero:no,campo actividad economica en el extranjero:vacio     |
            | account detail   | foreign           | campo actividad economica:informado,check actividad economica en el extranjero:si,campo actividad economica en el extranjero:informado |
            | select operation | local             | campo actividad economica:informado,check actividad economica en el extranjero:no,campo actividad economica en el extranjero:vacio     |
            | select operation | foreign           | campo actividad economica:informado,check actividad economica en el extranjero:si,campo actividad economica en el extranjero:informado |

    @ANA_EVENT_IT008
    @analytics
    @MX
    @vbank @backend(test)
    @ios @android @web
    @web-done
    Scenario Outline: International Transfers <entry_point> - App Step 6
        Given the user accesses to operatives screen from "<entry_point>"
        And the analytics interceptor service is initiated
        And the user accesses to make an international transfer and has "one n4 account"
        And the user select continue modal
        When the user continues the flow to the amount
        Then the analytics events contains the following variables:
            | item                     | value                                                                                                                                                                                | type         | event      |
            | analytics                | analytics/glomo_base                                                                                                                                                                 | json schema  | App Step 6 |
            | version DL               | 20250414_5.0                                                                                                                                                                         | string       | App Step 6 |
            | page name                | app:privada:personas:transferencias internacionales:6 concepto                                                                                                                       | string       | App Step 6 |
            | level 1                  | transferencias internacionales                                                                                                                                                       | string       | App Step 6 |
            | level 2                  | 6 concepto                                                                                                                                                                           | string       | App Step 6 |
            | language                 | ES                                                                                                                                                                                   | string       | App Step 6 |
            | page area                | privada                                                                                                                                                                              | string       | App Step 6 |
            | page intent              | transaccion                                                                                                                                                                          | string       | App Step 6 |
            | channel                  | online                                                                                                                                                                               | string       | App Step 6 |
            | page instance ID         | de                                                                                                                                                                                   | string       | App Step 6 |
            | page info version        | appVersion                                                                                                                                                                           | regexp named | App Step 6 |
            | page segment             | personas                                                                                                                                                                             | string       | App Step 6 |
            | sysEnv                   | app                                                                                                                                                                                  | string       | App Step 6 |
            | business unit            | BBVA Mexico                                                                                                                                                                          | string       | App Step 6 |
            | site app name            | App BBVA Mexico                                                                                                                                                                      | string       | App Step 6 |
            | project name             | Glomo                                                                                                                                                                                | string       | App Step 6 |
            | device mobile            | si                                                                                                                                                                                   | string       | App Step 6 |
            | user userState           | logado                                                                                                                                                                               | string       | App Step 6 |
            | profile ID               | profileID                                                                                                                                                                            | regexp named | App Step 6 |
            | user segment global      | 003001                                                                                                                                                                               | string       | App Step 6 |
            | user age                 | age                                                                                                                                                                                  | regexp named | App Step 6 |
            | user gender              | gender                                                                                                                                                                               | regexp named | App Step 6 |
            | global application       | international transfers                                                                                                                                                              | string       | App Step 6 |
            | application name         | transferencias internacionales                                                                                                                                                       | string       | App Step 6 |
            | application type         | operativa                                                                                                                                                                            | string       | App Step 6 |
            | application step         | 6 concepto                                                                                                                                                                           | string       | App Step 6 |
            | fulfillment model        | online                                                                                                                                                                               | string       | App Step 6 |
            | application typology     | jpmorgan chase bank na                                                                                                                                                               | string       | App Step 6 |
            | custom fields            | relacion:comercial,pais:estados unidos de america,campo actividad economica:informado,check actividad economica en el extranjero:no,campo actividad economica en el extranjero:vacio | string       | App Step 6 |
            | application process      | usd                                                                                                                                                                                  | string       | App Step 6 |
            | product primary category | cuentas                                                                                                                                                                              | string       | App Step 6 |
            | product amount           | 300                                                                                                                                                                                  | string       | App Step 6 |
            | product quantity         | 15                                                                                                                                                                                   | string       | App Step 6 |
            | product currency         | MXN                                                                                                                                                                                  | string       | App Step 6 |
            | internal campaign        |                                                                                                                                                                                      | empty array  | App Step 6 |
            | optimization attributes  |                                                                                                                                                                                      | empty array  | App Step 6 |

        Examples:
            | entry_point      |
            | account detail   |
            | select operation |

    @ANA_EVENT_IT009
    @analytics
    @MX
    @vbank @backend(test)
    @ios @android @web
    @web-done
    Scenario Outline: International Transfers <entry_point> - App Step 7
        Given the user accesses to operatives screen from "<entry_point>"
        And the analytics interceptor service is initiated
        And the user accesses to make an international transfer and has "one n4 account"
        And the user select continue modal
        When the user to continues the flow up to the concept
        Then the analytics events contains the following variables:
            | item                     | value                                                                                                                                                                                | type         | event      |
            | analytics                | analytics/glomo_base                                                                                                                                                                 | json schema  | App Step 7 |
            | version DL               | 20250414_5.0                                                                                                                                                                         | string       | App Step 7 |
            | page name                | app:privada:personas:transferencias internacionales:7 confirmacion                                                                                                                   | string       | App Step 7 |
            | level 1                  | transferencias internacionales                                                                                                                                                       | string       | App Step 7 |
            | level 2                  | 7 confirmacion                                                                                                                                                                       | string       | App Step 7 |
            | language                 | ES                                                                                                                                                                                   | string       | App Step 7 |
            | page area                | privada                                                                                                                                                                              | string       | App Step 7 |
            | page intent              | transaccion                                                                                                                                                                          | string       | App Step 7 |
            | channel                  | online                                                                                                                                                                               | string       | App Step 7 |
            | page instance ID         | de                                                                                                                                                                                   | string       | App Step 7 |
            | page info version        | appVersion                                                                                                                                                                           | regexp named | App Step 7 |
            | page segment             | personas                                                                                                                                                                             | string       | App Step 7 |
            | sysEnv                   | app                                                                                                                                                                                  | string       | App Step 7 |
            | business unit            | BBVA Mexico                                                                                                                                                                          | string       | App Step 7 |
            | site app name            | App BBVA Mexico                                                                                                                                                                      | string       | App Step 7 |
            | project name             | Glomo                                                                                                                                                                                | string       | App Step 7 |
            | device mobile            | si                                                                                                                                                                                   | string       | App Step 7 |
            | user userState           | logado                                                                                                                                                                               | string       | App Step 7 |
            | profile ID               | profileID                                                                                                                                                                            | regexp named | App Step 7 |
            | user segment global      | 003001                                                                                                                                                                               | string       | App Step 7 |
            | user age                 | age                                                                                                                                                                                  | regexp named | App Step 7 |
            | user gender              | gender                                                                                                                                                                               | regexp named | App Step 7 |
            | global application       | international transfers                                                                                                                                                              | string       | App Step 7 |
            | application name         | transferencias internacionales                                                                                                                                                       | string       | App Step 7 |
            | application type         | operativa                                                                                                                                                                            | string       | App Step 7 |
            | application step         | 7 confirmacion                                                                                                                                                                       | string       | App Step 7 |
            | fulfillment model        | online                                                                                                                                                                               | string       | App Step 7 |
            | application typology     | jpmorgan chase bank na                                                                                                                                                               | string       | App Step 7 |
            | custom fields            | relacion:comercial,pais:estados unidos de america,campo actividad economica:informado,check actividad economica en el extranjero:no,campo actividad economica en el extranjero:vacio | string       | App Step 7 |
            | application process      | usd                                                                                                                                                                                  | string       | App Step 7 |
            | application offer        | adquisicion bienes inmuebles o muebles                                                                                                                                               | string       | App Step 7 |
            | product primary category | cuentas                                                                                                                                                                              | string       | App Step 7 |
            | product amount           | 300                                                                                                                                                                                  | string       | App Step 7 |
            | product quantity         | 15                                                                                                                                                                                   | string       | App Step 7 |
            | product currency         | MXN                                                                                                                                                                                  | string       | App Step 7 |
            | internal campaign        |                                                                                                                                                                                      | empty array  | App Step 7 |
            | optimization attributes  |                                                                                                                                                                                      | empty array  | App Step 7 |

        Examples:
            | entry_point      |
            | account detail   |
            | select operation |

    @ANA_EVENT_IT010
    @analytics
    @MX
    @vbank @backend(test)
    @ios @android @web
    @web-done
    Scenario Outline: International Transfers <entry_point> - App Step 8
        Given the user accesses to operatives screen from "<entry_point>"
        And the analytics interceptor service is initiated
        And the user accesses to make an international transfer and has "one n4 account"
        And the user select continue modal
        When the user to continues the flow up to otp
        Then the analytics events contains the following variables:
            | item                     | value                                                                                                                                                                                            | type         | event      |
            | analytics                | analytics/glomo_base                                                                                                                                                                             | json schema  | App Step 8 |
            | version DL               | 20250414_5.0                                                                                                                                                                                     | string       | App Step 8 |
            | page name                | app:privada:personas:transferencias internacionales:8 otp                                                                                                                                        | string       | App Step 8 |
            | level 1                  | transferencias internacionales                                                                                                                                                                   | string       | App Step 8 |
            | level 2                  | 8 otp                                                                                                                                                                                            | string       | App Step 8 |
            | language                 | ES                                                                                                                                                                                               | string       | App Step 8 |
            | page area                | privada                                                                                                                                                                                          | string       | App Step 8 |
            | page intent              | transaccion                                                                                                                                                                                      | string       | App Step 8 |
            | channel                  | online                                                                                                                                                                                           | string       | App Step 8 |
            | page instance ID         | de                                                                                                                                                                                               | string       | App Step 8 |
            | page info version        | appVersion                                                                                                                                                                                       | regexp named | App Step 8 |
            | page segment             | personas                                                                                                                                                                                         | string       | App Step 8 |
            | sysEnv                   | app                                                                                                                                                                                              | string       | App Step 8 |
            | business unit            | BBVA Mexico                                                                                                                                                                                      | string       | App Step 8 |
            | site app name            | App BBVA Mexico                                                                                                                                                                                  | string       | App Step 8 |
            | project name             | Glomo                                                                                                                                                                                            | string       | App Step 8 |
            | device mobile            | si                                                                                                                                                                                               | string       | App Step 8 |
            | user userState           | logado                                                                                                                                                                                           | string       | App Step 8 |
            | profile ID               | profileID                                                                                                                                                                                        | regexp named | App Step 8 |
            | user age                 | age                                                                                                                                                                                              | regexp named | App Step 8 |
            | user gender              | gender                                                                                                                                                                                           | regexp named | App Step 8 |
            | global application       | international transfers                                                                                                                                                                          | string       | App Step 8 |
            | application name         | transferencias internacionales                                                                                                                                                                   | string       | App Step 8 |
            | application type         | operativa                                                                                                                                                                                        | string       | App Step 8 |
            | application step         | 8 otp                                                                                                                                                                                            | string       | App Step 8 |
            | fulfillment model        | online                                                                                                                                                                                           | string       | App Step 8 |
            | application typology     | jpmorgan chase bank na                                                                                                                                                                           | string       | App Step 8 |
            | custom fields            | relacion:comercial,pais:estados unidos de america,campo actividad economica:informado,check actividad economica en el extranjero:no,campo actividad economica en el extranjero:vacio,firma:token | string       | App Step 8 |
            | application process      | usd                                                                                                                                                                                              | string       | App Step 8 |
            | application offer        | adquisicion bienes inmuebles o muebles                                                                                                                                                           | string       | App Step 8 |
            | product primary category | cuentas                                                                                                                                                                                          | string       | App Step 8 |
            | product amount           | 300                                                                                                                                                                                              | string       | App Step 8 |
            | product quantity         | 15                                                                                                                                                                                               | string       | App Step 8 |
            | product currency         | MXN                                                                                                                                                                                              | string       | App Step 8 |
            | internal campaign        |                                                                                                                                                                                                  | empty array  | App Step 8 |
            | optimization attributes  |                                                                                                                                                                                                  | empty array  | App Step 8 |

        Examples:
            | entry_point      |
            | account detail   |
            | select operation |

    @ANA_EVENT_IT011
    @analytics
    @MX
    @vbank @backend(test)
    @ios @android @web
    @web-done
    Scenario Outline: International Transfer <entry_point> - App Completed - <ending>
        Given the user accesses to operatives screen from "<entry_point>"
        And the analytics interceptor service is initiated
        And the user accesses to make an international transfer and has "one n4 account"
        And the user select continue modal
        And the user to continues the flow up to success with "<data>" data
        When the sms key "12345678" is entered
        Then the analytics events contains the following variables
            | item                         | value                                                                                                                                                                                            | type         | event         |
            | analytics                    | analytics/glomo_base                                                                                                                                                                             | json schema  | App Completed |
            | version DL                   | 20250414_5.0                                                                                                                                                                                     | string       | App Completed |
            | page name                    | app:privada:personas:transferencias internacionales:pagina exitosa                                                                                                                               | string       | App Completed |
            | level 1                      | transferencias internacionales                                                                                                                                                                   | string       | App Completed |
            | level 2                      | pagina exitosa                                                                                                                                                                                   | string       | App Completed |
            | language                     | ES                                                                                                                                                                                               | string       | App Completed |
            | page area                    | privada                                                                                                                                                                                          | string       | App Completed |
            | page intent                  | transaccion                                                                                                                                                                                      | string       | App Completed |
            | channel                      | online                                                                                                                                                                                           | string       | App Completed |
            | page instance ID             | de                                                                                                                                                                                               | string       | App Completed |
            | page info version            | appVersion                                                                                                                                                                                       | regexp named | App Completed |
            | page segment                 | personas                                                                                                                                                                                         | string       | App Completed |
            | sysEnv                       | app                                                                                                                                                                                              | string       | App Completed |
            | business unit                | BBVA Mexico                                                                                                                                                                                      | string       | App Completed |
            | site app name                | App BBVA Mexico                                                                                                                                                                                  | string       | App Completed |
            | project name                 | Glomo                                                                                                                                                                                            | string       | App Completed |
            | device mobile                | si                                                                                                                                                                                               | string       | App Completed |
            | user userState               | logado                                                                                                                                                                                           | string       | App Completed |
            | profile ID                   | profileID                                                                                                                                                                                        | regexp named | App Completed |
            | user segment global          | 003001                                                                                                                                                                                           | string       | App Completed |
            | user age                     | age                                                                                                                                                                                              | regexp named | App Completed |
            | user gender                  | gender                                                                                                                                                                                           | regexp named | App Completed |
            | global application           | international transfers                                                                                                                                                                          | string       | App Completed |
            | application name             | transferencias internacionales                                                                                                                                                                   | string       | App Completed |
            | application type             | operativa                                                                                                                                                                                        | string       | App Completed |
            | application step             | pagina exitosa                                                                                                                                                                                   | string       | App Completed |
            | fulfillment model            | online                                                                                                                                                                                           | string       | App Completed |
            | application typology         | jpmorgan chase bank na                                                                                                                                                                           | string       | App Completed |
            | custom fields                | relacion:comercial,pais:estados unidos de america,campo actividad economica:informado,check actividad economica en el extranjero:no,campo actividad economica en el extranjero:vacio,firma:token | string       | App Completed |
            | application process          | usd                                                                                                                                                                                              | string       | App Completed |
            | application offer            | adquisicion bienes inmuebles o muebles                                                                                                                                                           | string       | App Completed |
            | application state            | <status>                                                                                                                                                                                         | string       | App Completed |
            | application operation number | <operation_number>                                                                                                                                                                               | string       | App Completed |
            | product primary category     | cuentas                                                                                                                                                                                          | string       | App Completed |
            | product amount               | 300                                                                                                                                                                                              | string       | App Completed |
            | product quantity             | 15                                                                                                                                                                                               | string       | App Completed |
            | product currency             | MXN                                                                                                                                                                                              | string       | App Completed |
            | internal campaign            |                                                                                                                                                                                                  | empty array  | App Completed |
            | optimization attributes      |                                                                                                                                                                                                  | empty array  | App Completed |

        Examples:
            | entry_point      | ending     | status     | operation_number | data    |
            | account detail   | Successful | finalizado | 3606395          | valid   |
            | select operation | Successful | finalizado | 3606395          | valid   |
            | account detail   | Rejected   | rechazado  |                  | invalid |
            | select operation | Rejected   | rechazado  |                  | invalid |

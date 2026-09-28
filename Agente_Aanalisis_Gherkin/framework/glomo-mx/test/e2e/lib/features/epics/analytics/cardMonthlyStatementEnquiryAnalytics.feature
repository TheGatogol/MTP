@cardMonthlyStatementEnquiryAnalytics @flexibleFinancingAnalytics
Feature: Analytics -  Monthly Statement Enquiry - Card Flexible Financing

    @ANA_EVENT_FMSE001
    @MX
    @analytics
    @web @android @ios @web-done
    @backend(artichoke)
    @vbank
    Scenario: Access to cancel of line page - App On Click Start - App Page Visit.
        Given a user with the following criteria
            | criteria                  |
            | flexible financing        |
            | monthly statement enquiry |
            | various account status    |
        And the user accesses to the "operative" "debit" card product detail
        And the analytics interceptor service is initiated
        When the user accesses to the monthly statement enquiry
        Then the analytics events contains the following variables
            | item                     | value                                                                                      | type         | event                              |
            | analytics                | analytics/glomo_base                                                                       | json schema  | App On Click Start, App Page Visit |
            | version DL               | 20250414_5.0                                                                               | string       | App On Click Start, App Page Visit |
            | page name                | app:privada:personas:tarjetas:debito:compras diferidas:detalle                             | string       | App On Click Start                 |
            | page name                | app:privada:personas:tarjetas:debito:compras diferidas:estado de cuenta:1 periodo consulta | string       | App Page Visit                     |
            | level 1                  | tarjetas                                                                                   | string       | App On Click Start, App Page Visit |
            | level 2                  | debito                                                                                     | string       | App On Click Start, App Page Visit |
            | level 3                  | compras diferidas                                                                          | string       | App On Click Start, App Page Visit |
            | level 4                  | detalle                                                                                    | string       | App On Click Start                 |
            | level 4                  | estado de cuenta                                                                           | string       | App Page Visit                     |
            | level 5                  | 1 periodo consulta                                                                         | string       | App Page Visit                     |
            | language                 | ES                                                                                         | string       | App On Click Start, App Page Visit |
            | page area                | privada                                                                                    | string       | App On Click Start, App Page Visit |
            | page intent              | informacion                                                                                | string       | App On Click Start                 |
            | page intent              | transaccion                                                                                | string       | App Page Visit                     |
            | channel                  | online                                                                                     | string       | App On Click Start, App Page Visit |
            | page instance ID         | de                                                                                         | string       | App On Click Start, App Page Visit |
            | page info version        | appVersion                                                                                 | regexp named | App On Click Start, App Page Visit |
            | page segment             | personas                                                                                   | string       | App On Click Start, App Page Visit |
            | sysEnv                   | app                                                                                        | string       | App On Click Start, App Page Visit |
            | business unit            | BBVA Mexico                                                                                | string       | App On Click Start, App Page Visit |
            | site app name            | App BBVA Mexico                                                                            | string       | App On Click Start, App Page Visit |
            | project name             | DIY Payments                                                                               | string       | App On Click Start, App Page Visit |
            | device mobile            | si                                                                                         | string       | App On Click Start, App Page Visit |
            | user userState           | logado                                                                                     | string       | App On Click Start, App Page Visit |
            | profile ID               | profileID                                                                                  | regexp named | App On Click Start, App Page Visit |
            | user segment global      | 003001                                                                                     | string       | App On Click Start, App Page Visit |
            | user gender              | gender                                                                                     | regexp named | App On Click Start, App Page Visit |
            | user age                 | age                                                                                        | regexp named | App On Click Start, App Page Visit |
            | global application       | purchase financing statement account                                                       | string       | App On Click Start, App Page Visit |
            | application name         | estado de cuenta diferimientos                                                             | string       | App On Click Start, App Page Visit |
            | application type         | operativa                                                                                  | string       | App On Click Start, App Page Visit |
            | application step         | ver estado de cuenta                                                                       | string       | App On Click Start                 |
            | application step         | 1 periodo consulta                                                                         | string       | App Page Visit                     |
            | fulfillment model        | online                                                                                     | string       | App On Click Start, App Page Visit |
            | product primary category | tarjetas                                                                                   | string       | App On Click Start, App Page Visit |
            | product subtype          | tarjetas debito                                                                            | string       | App On Click Start, App Page Visit |
            | internal campaign        |                                                                                            | empty array  | App On Click Start, App Page Visit |
            | optimization attributes  |                                                                                            | empty array  | App On Click Start, App Page Visit |

    @ANA_FMSE002
    @MX
    @analytics
    @web @android @ios @web-done
    @backend(artichoke)
    @vbank
    Scenario Outline: Select <status> status - App Started.
        Given a user with the following criteria
            | criteria                  |
            | flexible financing        |
            | monthly statement enquiry |
            | various account status    |
        And the user accesses to the "operative" "debit" card product detail
        And the user accesses to the monthly statement enquiry
        When the user "selects" the "<status>" status
        Then the device contains the following variables
            | item                     | value                                                                                      | type         |
            | analytics                | analytics/glomo_base                                                                       | json schema  |
            | version DL               | 20250414_5.0                                                                               | string       |
            | page name                | app:privada:personas:tarjetas:debito:compras diferidas:estado de cuenta:1 periodo consulta | string       |
            | level 1                  | tarjetas                                                                                   | string       |
            | level 2                  | debito                                                                                     | string       |
            | level 3                  | compras diferidas                                                                          | string       |
            | level 4                  | estado de cuenta                                                                           | string       |
            | level 5                  | 1 periodo consulta                                                                         | string       |
            | language                 | ES                                                                                         | string       |
            | page area                | privada                                                                                    | string       |
            | page intent              | transaccion                                                                                | string       |
            | channel                  | online                                                                                     | string       |
            | page instance ID         | de                                                                                         | string       |
            | page info version        | appVersion                                                                                 | regexp named |
            | page segment             | personas                                                                                   | string       |
            | sysEnv                   | app                                                                                        | string       |
            | business unit            | BBVA Mexico                                                                                | string       |
            | site app name            | App BBVA Mexico                                                                            | string       |
            | project name             | DIY Payments                                                                               | string       |
            | device mobile            | si                                                                                         | string       |
            | user userState           | logado                                                                                     | string       |
            | profile ID               | profileID                                                                                  | regexp named |
            | user segment global      | 003001                                                                                     | string       |
            | user gender              | gender                                                                                     | regexp named |
            | user age                 | age                                                                                        | regexp named |
            | global application       | purchase financing statement account                                                       | string       |
            | application name         | estado de cuenta diferimientos                                                             | string       |
            | application type         | operativa                                                                                  | string       |
            | application step         | <text>                                                                                     | string       |
            | fulfillment model        | online                                                                                     | string       |
            | product primary category | tarjetas                                                                                   | string       |
            | product subtype          | tarjetas debito                                                                            | string       |
            | internal campaign        |                                                                                            | empty array  |
            | optimization attributes  |                                                                                            | empty array  |

        Examples:
            | status        | text                    |
            | other account | otros estados de cuenta |
            | last account  | ultimo estado de cuenta |

    @ANA_EVENT_FMSE003
    @MX
    @analytics
    @web @android @ios
    @backend(artichoke)
    @vbank
    @web-done
    Scenario: View account status - App Completed.
        Given a user with the following criteria
            | criteria                  |
            | flexible financing        |
            | monthly statement enquiry |
            | various account status    |
        And the user accesses to the "operative" "debit" card product detail
        And the user accesses to the monthly statement enquiry
        And the analytics interceptor service is initiated
        When the user "consults" the "last account" status
        Then the analytics events contains the following variables
            | item                     | value                                                                                  | type         | event         |
            | analytics                | analytics/glomo_base                                                                   | json schema  | App Completed |
            | version DL               | 20250414_5.0                                                                           | string       | App Completed |
            | page name                | app:privada:personas:tarjetas:debito:compras diferidas:estado de cuenta:pagina exitosa | string       | App Completed |
            | level 5                  | pagina exitosa                                                                         | string       | App Completed |
            | language                 | ES                                                                                     | string       | App Completed |
            | page area                | privada                                                                                | string       | App Completed |
            | page intent              | transaccion                                                                            | string       | App Completed |
            | channel                  | online                                                                                 | string       | App Completed |
            | page instance ID         | de                                                                                     | string       | App Completed |
            | page info version        | appVersion                                                                             | regexp named | App Completed |
            | page segment             | personas                                                                               | string       | App Completed |
            | sysEnv                   | app                                                                                    | string       | App Completed |
            | business unit            | BBVA Mexico                                                                            | string       | App Completed |
            | site app name            | App BBVA Mexico                                                                        | string       | App Completed |
            | project name             | DIY Payments                                                                           | string       | App Completed |
            | device mobile            | si                                                                                     | string       | App Completed |
            | user userState           | logado                                                                                 | string       | App Completed |
            | profile ID               | profileID                                                                              | regexp named | App Completed |
            | user segment global      | 003001                                                                                 | string       | App Completed |
            | user gender              | gender                                                                                 | regexp named | App Completed |
            | user age                 | age                                                                                    | regexp named | App Completed |
            | global application       | purchase financing statement account                                                   | string       | App Completed |
            | application name         | estado de cuenta diferimientos                                                         | string       | App Completed |
            | application type         | operativa                                                                              | string       | App Completed |
            | application step         | pagina exitosa                                                                         | string       | App Completed |
            | application state        | finalizado                                                                             | string       | App Completed |
            | product primary category | tarjetas                                                                               | string       | App Completed |
            | product subtype          | tarjetas debito                                                                        | string       | App Completed |
            | internal campaign        |                                                                                        | empty array  | App Completed |
            | optimization attributes  |                                                                                        | empty array  | App Completed |

    @ANA_FMSE004
    @MX
    @analytics
    @web @android @ios @web-done
    @backend(artichoke)
    @vbank
    Scenario: Download Account Status Report
        Given a user with the following criteria
            | criteria                  |
            | flexible financing        |
            | monthly statement enquiry |
            | various account status    |
        And the user accesses to the "operative" "debit" card product detail
        And the user accesses to the monthly statement enquiry
        And the user "consults" the "last account" status
        When the user downloads account status report
        Then the device contains the following variables
            | item                    | value                                                                                  | type             |
            | analytics               | analytics/glomo_base                                                                   | json schema      |
            | version DL              | 20250414_5.0                                                                           | string           |
            | page name               | app:privada:personas:tarjetas:debito:compras diferidas:estado de cuenta:pagina exitosa | string           |
            | level 1                 | tarjetas                                                                               | string           |
            | level 2                 | debito                                                                                 | string           |
            | level 3                 | compras diferidas                                                                      | string           |
            | level 4                 | estado de cuenta                                                                       | string           |
            | level 5                 | pagina exitosa                                                                         | string           |
            | link url                | descargar_estado_de_cuenta                                                             | string           |
            | language                | ES                                                                                     | string           |
            | page area               | privada                                                                                | string           |
            | page intent             | transaccion                                                                            | string           |
            | channel                 | online                                                                                 | string           |
            | page instance ID        | de                                                                                     | string           |
            | page info version       | appVersion                                                                             | regexp named     |
            | page segment            | personas                                                                               | string           |
            | sysEnv                  | app                                                                                    | string           |
            | business unit           | BBVA Mexico                                                                            | string           |
            | site app name           | App BBVA Mexico                                                                        | string           |
            | project name            | DIY Payments                                                                           | string           |
            | device mobile           | si                                                                                     | string           |
            | user userState          | logado                                                                                 | string           |
            | profile ID              | profileID                                                                              | regexp named     |
            | user segment global     | 003001                                                                                 | string           |
            | user gender             | gender                                                                                 | regexp named     |
            | user age                | age                                                                                    | regexp named     |
            | internal campaign       |                                                                                        | empty array      |
            | optimization attributes |                                                                                        | empty array      |
            | application             |                                                                                        | empty str object |
            | products attributes     |                                                                                        | empty array      |

    @ANA_FMSE005
    @MX
    @analytics
    @web @android @ios
    @backend(artichoke)
    @vbank
    @web-done
    Scenario: Client Without Account Status Screen
        Given a user with the following criteria
            | criteria                  |
            | flexible financing        |
            | monthly statement enquiry |
            | Without account status    |
        And the user accesses to the "operative" "debit" card product detail
        When the user accesses to the monthly statement enquiry
        Then the device contains the following variables
            | item                    | value                                                                               | type             |
            | analytics               | analytics/glomo_base                                                                | json schema      |
            | version DL              | 20250414_5.0                                                                        | string           |
            | page name               | app:privada:personas:tarjetas:debito:compras diferidas:estado de cuenta:sin estados | string           |
            | level 1                 | tarjetas                                                                            | string           |
            | level 2                 | debito                                                                              | string           |
            | level 3                 | compras diferidas                                                                   | string           |
            | level 4                 | estado de cuenta                                                                    | string           |
            | level 5                 | sin estados                                                                         | string           |
            | language                | ES                                                                                  | string           |
            | page area               | privada                                                                             | string           |
            | page intent             | transaccion                                                                         | string           |
            | channel                 | online                                                                              | string           |
            | page instance ID        | de                                                                                  | string           |
            | page info version       | appVersion                                                                          | regexp named     |
            | page segment            | personas                                                                            | string           |
            | sysEnv                  | app                                                                                 | string           |
            | business unit           | BBVA Mexico                                                                         | string           |
            | site app name           | App BBVA Mexico                                                                     | string           |
            | project name            | DIY Payments                                                                        | string           |
            | device mobile           | si                                                                                  | string           |
            | user userState          | logado                                                                              | string           |
            | profile ID              | profileID                                                                           | regexp named     |
            | user segment global     | 003001                                                                              | string           |
            | user gender             | gender                                                                              | regexp named     |
            | user age                | age                                                                                 | regexp named     |
            | internal campaign       |                                                                                     | empty array      |
            | optimization attributes |                                                                                     | empty array      |
            | application             |                                                                                     | empty str object |
            | products attributes     |                                                                                     | empty array      |

    @ANA_EVENT_FMSE006
    @MX
    @analytics
    @web @android @ios @web-done
    @backend(artichoke)
    @vbank
    Scenario: Error Accessing to the monthly statement Enquiry
        Given a user with the following criteria
            | criteria                  |
            | flexible financing        |
            | monthly statement enquiry |
            | various account status    |
        And the user accesses to the "operative" "debit" card product detail
        And the user attempts to access to the monthly statement enquiry
        And the analytics interceptor service is initiated
        When the user retries "3" times
        Then the analytics events contains the following variables
            | item                    | value                                                                                                | type             | event     | event number |
            | analytics               | analytics/glomo_base                                                                                 | json schema      | Page View | 1            |
            | version DL              | 20250414_5.0                                                                                         | string           | Page View | 1            |
            | page name               | app:privada:personas:tarjetas:debito:compras diferidas:estado de cuenta:error operacion no realizada | string           | Page View | 1            |
            | level 1                 | tarjetas                                                                                             | string           | Page View | 1            |
            | level 2                 | debito                                                                                               | string           | Page View | 1            |
            | level 3                 | compras diferidas                                                                                    | string           | Page View | 1            |
            | level 4                 | estado de cuenta                                                                                     | string           | Page View | 1            |
            | level 5                 | error operacion no realizada                                                                         | string           | Page View | 1            |
            | error page              | error operacion no realizada                                                                         | string           | Page View | 1            |
            | language                | ES                                                                                                   | string           | Page View | 1            |
            | page area               | privada                                                                                              | string           | Page View | 1            |
            | page intent             | transaccion                                                                                          | string           | Page View | 1            |
            | channel                 | online                                                                                               | string           | Page View | 1            |
            | page instance ID        | de                                                                                                   | string           | Page View | 1            |
            | page info version       | appVersion                                                                                           | regexp named     | Page View | 1            |
            | page segment            | personas                                                                                             | string           | Page View | 1            |
            | sysEnv                  | app                                                                                                  | string           | Page View | 1            |
            | business unit           | BBVA Mexico                                                                                          | string           | Page View | 1            |
            | site app name           | App BBVA Mexico                                                                                      | string           | Page View | 1            |
            | project name            | DIY Payments                                                                                         | string           | Page View | 1            |
            | device mobile           | si                                                                                                   | string           | Page View | 1            |
            | user userState          | logado                                                                                               | string           | Page View | 1            |
            | profile ID              | profileID                                                                                            | regexp named     | Page View | 1            |
            | user segment global     | 003001                                                                                               | string           | Page View | 1            |
            | user gender             | gender                                                                                               | regexp named     | Page View | 1            |
            | user age                | age                                                                                                  | regexp named     | Page View | 1            |
            | internal campaign       |                                                                                                      | empty array      | Page View | 1            |
            | optimization attributes |                                                                                                      | empty array      | Page View | 1            |
            | application             |                                                                                                      | empty str object | Page View | 1            |
            | products attributes     |                                                                                                      | empty array      | Page View | 1            |

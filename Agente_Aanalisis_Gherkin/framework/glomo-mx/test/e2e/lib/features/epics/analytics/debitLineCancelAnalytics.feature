@debitLineCancelAnalytics @flexibleFinancingAnalytics
Feature: Analytics - Finance Line Cancellation

    @ANA_EVENT_DLC001
    @MX
    @analytics
    @web @android @ios @web-done
    @backend(artichoke)
    @vbank
    Scenario: Access to cancel of line page - App On Click Start - App Page Visit.
        Given a user with the following criteria
            | criteria                 |
            | financial line active    |
            | without outstanding debt |
        And the user access the "dashboard" screen
        And the analytics interceptor service is initiated
        When the user accesses to Financing Cancel of Debit line
        Then the analytics events contains the following variables
            | item                     | value                                                                              | type         | event                              |
            | analytics                | analytics/glomo_base                                                               | json schema  | App On Click Start, App Page Visit |
            | version DL               | 20250414_5.0                                                                       | string       | App On Click Start, App Page Visit |
            | page name                | app:privada:personas:tarjetas:debito:compras diferidas:operativa                   | string       | App On Click Start                 |
            | page name                | app:privada:personas:tarjetas:debito:compras diferidas:cancelar linea:1 beneficios | string       | App Page Visit                     |
            | level 1                  | tarjetas                                                                           | string       | App On Click Start, App Page Visit |
            | level 2                  | debito                                                                             | string       | App On Click Start, App Page Visit |
            | level 3                  | compras diferidas                                                                  | string       | App On Click Start, App Page Visit |
            | level 4                  | operativa                                                                          | string       | App On Click Start                 |
            | level 4                  | cancelar linea                                                                     | string       | App Page Visit                     |
            | level 5                  | 1 beneficios                                                                       | string       | App Page Visit                     |
            | language                 | ES                                                                                 | string       | App On Click Start, App Page Visit |
            | page area                | privada                                                                            | string       | App On Click Start, App Page Visit |
            | page intent              | informacion                                                                        | string       | App On Click Start                 |
            | page intent              | transaccion                                                                        | string       | App Page Visit                     |
            | channel                  | online                                                                             | string       | App On Click Start, App Page Visit |
            | page instance ID         | de                                                                                 | string       | App On Click Start, App Page Visit |
            | page info version        | appVersion                                                                         | regexp named | App On Click Start, App Page Visit |
            | page segment             | personas                                                                           | string       | App On Click Start, App Page Visit |
            | sysEnv                   | app                                                                                | string       | App On Click Start, App Page Visit |
            | business unit            | BBVA Mexico                                                                        | string       | App On Click Start, App Page Visit |
            | site app name            | App BBVA Mexico                                                                    | string       | App On Click Start, App Page Visit |
            | project name             | DIY Payments                                                                       | string       | App On Click Start, App Page Visit |
            | device mobile            | si                                                                                 | string       | App On Click Start, App Page Visit |
            | user userState           | logado                                                                             | string       | App On Click Start, App Page Visit |
            | profile ID               | profileID                                                                          | regexp named | App On Click Start, App Page Visit |
            | user segment global      | 003001                                                                             | string       | App On Click Start, App Page Visit |
            | user gender              | gender                                                                             | regexp named | App On Click Start, App Page Visit |
            | user age                 | age                                                                                | regexp named | App On Click Start, App Page Visit |
            | global application       | purchase financing cancel credit line                                              | string       | App On Click Start, App Page Visit |
            | application name         | cancelacion linea diferimientos                                                    | string       | App On Click Start, App Page Visit |
            | application type         | operativa                                                                          | string       | App On Click Start, App Page Visit |
            | application step         | cancelar linea                                                                     | string       | App On Click Start                 |
            | application step         | 1 beneficios                                                                       | string       | App Page Visit                     |
            | fulfillment model        | online                                                                             | string       | App On Click Start, App Page Visit |
            | product primary category | tarjetas                                                                           | string       | App On Click Start, App Page Visit |
            | product subtype          | tarjetas debito                                                                    | string       | App On Click Start, App Page Visit |
            | internal campaign        |                                                                                    | empty array  | App On Click Start, App Page Visit |
            | optimization attributes  |                                                                                    | empty array  | App On Click Start, App Page Visit |

    @ANA_EVENT_DLC002
    @MX
    @analytics
    @web @android @ios @web-done
    @backend(artichoke)
    @vbank
    Scenario: Access to cancellation reason section - App Started - App Step 2.
        Given a user with the following criteria
            | criteria                 |
            | financial line active    |
            | without outstanding debt |
        And the user accesses to Financing Cancel of Debit line
        And the analytics interceptor service is initiated
        When the user continues from onboarding
        Then the analytics events contains the following variables
            | item                     | value                                                                                      | type         | event                   |
            | analytics                | analytics/glomo_base                                                                       | json schema  | App Started, App Step 2 |
            | version DL               | 20250414_5.0                                                                               | string       | App Started, App Step 2 |
            | page name                | app:privada:personas:tarjetas:debito:compras diferidas:cancelar linea:1 beneficios         | string       | App Started             |
            | page name                | app:privada:personas:tarjetas:debito:compras diferidas:cancelar linea:2 motivo cancelacion | string       | App Step 2              |
            | level 1                  | tarjetas                                                                                   | string       | App Started, App Step 2 |
            | level 2                  | debito                                                                                     | string       | App Started, App Step 2 |
            | level 3                  | compras diferidas                                                                          | string       | App Started, App Step 2 |
            | level 4                  | cancelar linea                                                                             | string       | App Started, App Step 2 |
            | level 5                  | 1 beneficios                                                                               | string       | App Started             |
            | level 5                  | 2 motivo cancelacion                                                                       | string       | App Step 2              |
            | language                 | ES                                                                                         | string       | App Started, App Step 2 |
            | page area                | privada                                                                                    | string       | App Started, App Step 2 |
            | page intent              | transaccion                                                                                | string       | App Started, App Step 2 |
            | channel                  | online                                                                                     | string       | App Started, App Step 2 |
            | page instance ID         | de                                                                                         | string       | App Started, App Step 2 |
            | page info version        | appVersion                                                                                 | regexp named | App Started, App Step 2 |
            | page segment             | personas                                                                                   | string       | App Started, App Step 2 |
            | sysEnv                   | app                                                                                        | string       | App Started, App Step 2 |
            | business unit            | BBVA Mexico                                                                                | string       | App Started, App Step 2 |
            | site app name            | App BBVA Mexico                                                                            | string       | App Started, App Step 2 |
            | project name             | DIY Payments                                                                               | string       | App Started, App Step 2 |
            | device mobile            | si                                                                                         | string       | App Started, App Step 2 |
            | user userState           | logado                                                                                     | string       | App Started, App Step 2 |
            | profile ID               | profileID                                                                                  | regexp named | App Started, App Step 2 |
            | user segment global      | 003001                                                                                     | string       | App Started, App Step 2 |
            | user gender              | gender                                                                                     | regexp named | App Started, App Step 2 |
            | user age                 | age                                                                                        | regexp named | App Started, App Step 2 |
            | global application       | purchase financing cancel credit line                                                      | string       | App Started, App Step 2 |
            | application name         | cancelacion linea diferimientos                                                            | string       | App Started, App Step 2 |
            | application type         | operativa                                                                                  | string       | App Started, App Step 2 |
            | application step         | continuar                                                                                  | string       | App Started             |
            | application step         | 2 motivo cancelacion                                                                       | string       | App Step 2              |
            | fulfillment model        | online                                                                                     | string       | App Started, App Step 2 |
            | product primary category | tarjetas                                                                                   | string       | App Started, App Step 2 |
            | product subtype          | tarjetas debito                                                                            | string       | App Started, App Step 2 |
            | internal campaign        |                                                                                            | empty array  | App Started, App Step 2 |
            | optimization attributes  |                                                                                            | empty array  | App Started, App Step 2 |

    @ANA_DLC003
    @MX
    @analytics
    @web @android @ios @web-done
    @backend(artichoke)
    @vbank
    Scenario: Select reason - App Step 3.
        Given a user with the following criteria
            | criteria                 |
            | financial line active    |
            | without outstanding debt |
        And the user accesses to Financing Cancel of Debit line
        And the user continues from onboarding
        When the user selects "date pay" reason and continues
        Then the device contains the following variables
            | item                     | value                                                                                    | type         |
            | analytics                | analytics/glomo_base                                                                     | json schema  |
            | version DL               | 20250414_5.0                                                                             | string       |
            | page name                | app:privada:personas:tarjetas:debito:compras diferidas:cancelar linea:3 seleccion cuenta | string       |
            | level 1                  | tarjetas                                                                                 | string       |
            | level 2                  | debito                                                                                   | string       |
            | level 3                  | compras diferidas                                                                        | string       |
            | level 4                  | cancelar linea                                                                           | string       |
            | level 5                  | 3 seleccion cuenta                                                                       | string       |
            | language                 | ES                                                                                       | string       |
            | page area                | privada                                                                                  | string       |
            | page intent              | transaccion                                                                              | string       |
            | channel                  | online                                                                                   | string       |
            | page instance ID         | de                                                                                       | string       |
            | page info version        | appVersion                                                                               | regexp named |
            | page segment             | personas                                                                                 | string       |
            | sysEnv                   | app                                                                                      | string       |
            | business unit            | BBVA Mexico                                                                              | string       |
            | site app name            | App BBVA Mexico                                                                          | string       |
            | project name             | DIY Payments                                                                             | string       |
            | device mobile            | si                                                                                       | string       |
            | user userState           | logado                                                                                   | string       |
            | profile ID               | profileID                                                                                | regexp named |
            | user segment global      | 003001                                                                                   | string       |
            | user gender              | gender                                                                                   | regexp named |
            | user age                 | age                                                                                      | regexp named |
            | global application       | purchase financing cancel credit line                                                    | string       |
            | application name         | cancelacion linea diferimientos                                                          | string       |
            | application type         | operativa                                                                                | string       |
            | application step         | 3 seleccion cuenta                                                                       | string       |
            | fulfillment model        | online                                                                                   | string       |
            | custom fields            | motivo cancelacion:la fecha de pago no se adapta a mis tiempos                           | string       |
            | product primary category | tarjetas                                                                                 | string       |
            | product subtype          | tarjetas debito                                                                          | string       |
            | internal campaign        |                                                                                          | empty array  |
            | optimization attributes  |                                                                                          | empty array  |

    @ANA_DLC004
    @MX
    @analytics
    @web @android @ios @web-done
    @backend(artichoke)
    @vbank
    Scenario: Access to summary section - App Step 4.
        Given a user with the following criteria
            | criteria                 |
            | financial line active    |
            | without outstanding debt |
        And the user accesses to Financing Cancel of Debit line
        And the user continues from onboarding
        When the user selects "date pay" reason and confirm detail
        Then the device contains the following variables
            | item                     | value                                                                                | type         |
            | analytics                | analytics/glomo_base                                                                 | json schema  |
            | version DL               | 20250414_5.0                                                                         | string       |
            | page name                | app:privada:personas:tarjetas:debito:compras diferidas:cancelar linea:4 confirmacion | string       |
            | level 1                  | tarjetas                                                                             | string       |
            | level 2                  | debito                                                                               | string       |
            | level 3                  | compras diferidas                                                                    | string       |
            | level 4                  | cancelar linea                                                                       | string       |
            | level 5                  | 4 confirmacion                                                                       | string       |
            | language                 | ES                                                                                   | string       |
            | page area                | privada                                                                              | string       |
            | page intent              | transaccion                                                                          | string       |
            | channel                  | online                                                                               | string       |
            | page instance ID         | de                                                                                   | string       |
            | page info version        | appVersion                                                                           | regexp named |
            | page segment             | personas                                                                             | string       |
            | sysEnv                   | app                                                                                  | string       |
            | business unit            | BBVA Mexico                                                                          | string       |
            | site app name            | App BBVA Mexico                                                                      | string       |
            | project name             | DIY Payments                                                                         | string       |
            | device mobile            | si                                                                                   | string       |
            | user userState           | logado                                                                               | string       |
            | profile ID               | profileID                                                                            | regexp named |
            | user segment global      | 003001                                                                               | string       |
            | user gender              | gender                                                                               | regexp named |
            | user age                 | age                                                                                  | regexp named |
            | global application       | purchase financing cancel credit line                                                | string       |
            | application name         | cancelacion linea diferimientos                                                      | string       |
            | application type         | operativa                                                                            | string       |
            | application step         | 4 confirmacion                                                                       | string       |
            | fulfillment model        | online                                                                               | string       |
            | custom fields            | motivo cancelacion:la fecha de pago no se adapta a mis tiempos                       | string       |
            | product primary category | tarjetas                                                                             | string       |
            | product subtype          | tarjetas debito                                                                      | string       |
            | internal campaign        |                                                                                      | empty array  |
            | optimization attributes  |                                                                                      | empty array  |

    @ANA_DLC005
    @MX
    @analytics
    @web @android @ios @web-done
    @backend(artichoke)
    @vbank
    Scenario: Successful cancellation - App Step 5.
        Given a user with the following criteria
            | criteria                 |
            | financial line active    |
            | without outstanding debt |
        And the user accesses to Financing Cancel of Debit line
        And the user continues from onboarding
        When the user selects "date pay" reason and cancel line
        Then the device contains the following variables
            | item                     | value                                                                       | type         |
            | analytics                | analytics/glomo_base                                                        | json schema  |
            | version DL               | 20250414_5.0                                                                | string       |
            | page name                | app:privada:personas:tarjetas:debito:compras diferidas:cancelar linea:5 otp | string       |
            | level 1                  | tarjetas                                                                    | string       |
            | level 2                  | debito                                                                      | string       |
            | level 3                  | compras diferidas                                                           | string       |
            | level 4                  | cancelar linea                                                              | string       |
            | level 5                  | 5 otp                                                                       | string       |
            | language                 | ES                                                                          | string       |
            | page area                | privada                                                                     | string       |
            | page intent              | transaccion                                                                 | string       |
            | channel                  | online                                                                      | string       |
            | page instance ID         | de                                                                          | string       |
            | page info version        | appVersion                                                                  | regexp named |
            | page segment             | personas                                                                    | string       |
            | sysEnv                   | app                                                                         | string       |
            | business unit            | BBVA Mexico                                                                 | string       |
            | site app name            | App BBVA Mexico                                                             | string       |
            | project name             | DIY Payments                                                                | string       |
            | device mobile            | si                                                                          | string       |
            | user userState           | logado                                                                      | string       |
            | profile ID               | profileID                                                                   | regexp named |
            | user segment global      | 003001                                                                      | string       |
            | user gender              | gender                                                                      | regexp named |
            | user age                 | age                                                                         | regexp named |
            | global application       | purchase financing cancel credit line                                       | string       |
            | application name         | cancelacion linea diferimientos                                             | string       |
            | application type         | operativa                                                                   | string       |
            | application step         | 5 otp                                                                       | string       |
            | fulfillment model        | online                                                                      | string       |
            | custom fields            | motivo cancelacion:la fecha de pago no se adapta a mis tiempos              | string       |
            | product primary category | tarjetas                                                                    | string       |
            | product subtype          | tarjetas debito                                                             | string       |
            | internal campaign        |                                                                             | empty array  |
            | optimization attributes  |                                                                             | empty array  |

    @ANA_DLC006
    @MX
    @analytics
    @web @android @ios @web-done
    @backend(artichoke)
    @vbank
    Scenario: Successful cancellation - App Completed.
        Given a user with the following criteria
            | criteria                 |
            | financial line active    |
            | without outstanding debt |
            | with email               |
        And the user accesses to Financing Cancel of Debit line
        And the user continues from onboarding
        And the user selects "date pay" reason and cancel line
        When the user fills the otp correctly
        Then the device contains the following variables
            | item                         | value                                                                                | type         |
            | analytics                    | analytics/glomo_base                                                                 | json schema  |
            | version DL                   | 20250414_5.0                                                                         | string       |
            | page name                    | app:privada:personas:tarjetas:debito:compras diferidas:cancelar linea:pagina exitosa | string       |
            | level 1                      | tarjetas                                                                             | string       |
            | level 2                      | debito                                                                               | string       |
            | level 3                      | compras diferidas                                                                    | string       |
            | level 4                      | cancelar linea                                                                       | string       |
            | level 5                      | pagina exitosa                                                                       | string       |
            | language                     | ES                                                                                   | string       |
            | page area                    | privada                                                                              | string       |
            | page intent                  | transaccion                                                                          | string       |
            | channel                      | online                                                                               | string       |
            | page instance ID             | de                                                                                   | string       |
            | page info version            | appVersion                                                                           | regexp named |
            | page segment                 | personas                                                                             | string       |
            | sysEnv                       | app                                                                                  | string       |
            | business unit                | BBVA Mexico                                                                          | string       |
            | site app name                | App BBVA Mexico                                                                      | string       |
            | project name                 | DIY Payments                                                                         | string       |
            | device mobile                | si                                                                                   | string       |
            | user userState               | logado                                                                               | string       |
            | profile ID                   | profileID                                                                            | regexp named |
            | user segment global          | 003001                                                                               | string       |
            | user gender                  | gender                                                                               | regexp named |
            | user age                     | age                                                                                  | regexp named |
            | global application           | purchase financing cancel credit line                                                | string       |
            | application name             | cancelacion linea diferimientos                                                      | string       |
            | application type             | operativa                                                                            | string       |
            | application step             | pagina exitosa                                                                       | string       |
            | fulfillment model            | online                                                                               | string       |
            | custom fields                | motivo cancelacion:la fecha de pago no se adapta a mis tiempos                       | string       |
            | application state            | finalizado                                                                           | string       |
            | application operation number | 98273489234AAS                                                                       | string       |
            | product primary category     | tarjetas                                                                             | string       |
            | product subtype              | tarjetas debito                                                                      | string       |
            | internal campaign            |                                                                                      | empty array  |
            | optimization attributes      |                                                                                      | empty array  |

    @ANA_DLC007
    @MX
    @analytics
    @web @android @ios @web-done
    @backend(artichoke)
    @vbank
    Scenario: Access to cancel of line page with outstanding debt
        Given a user with the following criteria
            | criteria              |
            | financial line active |
            | outstanding debt      |
        When the user attempts to access to Financing Cancel of Debit line
        Then the device contains the following variables
            | item                    | value                                                                                  | type             |
            | analytics               | analytics/glomo_base                                                                   | json schema      |
            | version DL              | 20250414_5.0                                                                           | string           |
            | page name               | app:privada:personas:tarjetas:debito:compras diferidas:cancelar linea:pagos pendientes | string           |
            | level 1                 | tarjetas                                                                               | string           |
            | level 2                 | debito                                                                                 | string           |
            | level 3                 | compras diferidas                                                                      | string           |
            | level 4                 | cancelar linea                                                                         | string           |
            | level 5                 | pagos pendientes                                                                       | string           |
            | language                | ES                                                                                     | string           |
            | page area               | privada                                                                                | string           |
            | page intent             | informacion                                                                            | string           |
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
            | optimization attributes |                                                                                        | empty array      |

    @ANA_DLC008
    @MX
    @analytics
    @web @android @ios @web-done
    @backend(artichoke)
    @vbank
    Scenario: Error Accessing to the monthly statement Enquiry
        Given a user with the following criteria
            | criteria              |
            | financial line active |
            | error to cancel line  |
        And the user accesses to Financing Cancel of Debit line
        And the user continues from onboarding
        And the user selects "date pay" reason and cancel line
        When the user retries "3" more times
        Then the device contains the following variables
            | item                    | value                                                                                              | type             |
            | analytics               | analytics/glomo_base                                                                               | json schema      |
            | version DL              | 20250414_5.0                                                                                       | string           |
            | page name               | app:privada:personas:tarjetas:debito:compras diferidas:cancelar linea:error operacion no realizada | string           |
            | level 1                 | tarjetas                                                                                           | string           |
            | level 2                 | debito                                                                                             | string           |
            | level 3                 | compras diferidas                                                                                  | string           |
            | level 4                 | cancelar linea                                                                                     | string           |
            | level 5                 | error operacion no realizada                                                                       | string           |
            | error page              | error operacion no realizada                                                                       | string           |
            | language                | ES                                                                                                 | string           |
            | page area               | privada                                                                                            | string           |
            | page intent             | informacion                                                                                        | string           |
            | channel                 | online                                                                                             | string           |
            | page instance ID        | de                                                                                                 | string           |
            | page info version       | appVersion                                                                                         | regexp named     |
            | page segment            | personas                                                                                           | string           |
            | sysEnv                  | app                                                                                                | string           |
            | business unit           | BBVA Mexico                                                                                        | string           |
            | site app name           | App BBVA Mexico                                                                                    | string           |
            | project name            | DIY Payments                                                                                       | string           |
            | device mobile           | si                                                                                                 | string           |
            | user userState          | logado                                                                                             | string           |
            | profile ID              | profileID                                                                                          | regexp named     |
            | user segment global     | 003001                                                                                             | string           |
            | user gender             | gender                                                                                             | regexp named     |
            | user age                | age                                                                                                | regexp named     |
            | internal campaign       |                                                                                                    | empty array      |
            | optimization attributes |                                                                                                    | empty array      |
            | application             |                                                                                                    | empty str object |
            | optimization attributes |                                                                                                    | empty array      |

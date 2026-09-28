@nonPreapprovedCreditCard
Feature: Analytics - Non Preapproved Credit Card

    @ANA_NPA001
    @analytics
    @MX @web @ios @android @vbank @test @web-done
    Scenario: Non pre approved - Happy path
        Given a user with the following criteria
            | criteria          |
            | NPA Offer         |
            | NPA Happy Path    |
        When the user enters the non pre approved offer "successfully"
        Then the device contains the following variables
        | item                    | value                                                      | type             |
        | analytics               | analytics/glomo_base                                       | json schema      |
        | version DL              | 20250414_5.0                                               | string           |
        | page name               | app:privada:personas:tdc no preaprobados:autorizacion buro | string           |
        | level 1                 | tdc no preaprobados                                        | string           |
        | level 2                 | autorizacion buro                                          | string           |
        | language                | ES                                                         | string           |
        | page area               | privada                                                    | string           |
        | page intent             | informacion                                                | string           |
        | channel                 | online                                                     | string           |
        | page instance ID        | de                                                         | string           |
        | page info version       | appVersion                                                 | regexp named     |
        | page segment            | personas                                                   | string           |
        | sysEnv                  | app                                                        | string           |
        | business unit           | BBVA Mexico                                                | string           |
        | site app name           | App BBVA Mexico                                            | string           |
        | project name            | Glomo                                                      | string           |
        | device mobile           | si                                                         | string           |
        | user userState          | logado                                                     | string           |
        | user segment global     | 003001                                                     | string           |
        | profile ID              | profileID                                                  | regexp named     |
        | user gender             | gender                                                     | regexp named     |
        | user age                | age                                                        | regexp named     |
        | internal campaign       |                                                            | empty array      |
        | optimization attributes |                                                            | empty array      |
        | application             |                                                            | empty str object |
        | products attributes     |                                                            | empty array      |

    @ANA_NPA002
    @analytics
    @MX @web @ios @android @vbank @test @web-done
    Scenario: Non pre approved - Happy path otp
        Given a user with the following criteria
            | criteria          |
            | NPA Offer         |
            | NPA Happy Path    |
        When the user attempts to enter the non pre approved offer
        Then the device contains the following variables
        | item                    | value                                        | type             |
        | analytics               | analytics/glomo_base                         | json schema      |
        | version DL              | 20250414_5.0                                 | string           |
        | page name               | app:privada:personas:tdc no preaprobados:otp | string           |
        | level 1                 | tdc no preaprobados                          | string           |
        | level 2                 | otp                                          | string           |
        | language                | ES                                           | string           |
        | page area               | privada                                      | string           |
        | page intent             | transaccion                                  | string           |
        | channel                 | online                                       | string           |
        | page instance ID        | de                                           | string           |
        | page info version       | appVersion                                   | regexp named     |
        | page segment            | personas                                     | string           |
        | sysEnv                  | app                                          | string           |
        | business unit           | BBVA Mexico                                  | string           |
        | site app name           | App BBVA Mexico                              | string           |
        | project name            | Glomo                                        | string           |
        | device mobile           | si                                           | string           |
        | user userState          | logado                                       | string           |
        | user segment global     | 003001                                       | string           |
        | profile ID              | profileID                                    | regexp named     |
        | user gender             | gender                                       | regexp named     |
        | user age                | age                                          | regexp named     |
        | internal campaign       |                                              | empty array      |
        | optimization attributes |                                              | empty array      |
        | application             |                                              | empty str object |
        | products attributes     |                                              | empty array      |

    @ANA_NPA003
    @analytics
    @MX @web @ios @android
    @vbank @test @web-done @vbank-modified
    Scenario: Verify elements in offer screen for Happy Path
        Given a user with the following criteria
            | criteria          |
            | NPA Offer         |
            | NPA Happy Path    |
        When the user enters the non pre approved offer and advances
        Then the device contains the following variables
        | item                     | value                                                                   | type         |
        | analytics                | analytics/glomo_base                                                    | json schema  |
        | version DL               | 20250414_5.0                                                            | string       |
        | page name                | app:privada:personas:tarjetas:tarjeta de credito one click:1 simulacion | string       |
        | level 1                  | tarjetas                                                                | string       |
        | level 2                  | tarjeta de credito one click                                            | string       |
        | level 3                  | 1 simulacion                                                            | string       |
        | language                 | ES                                                                      | string       |
        | page area                | privada                                                                 | string       |
        | page intent              | transaccion                                                             | string       |
        | channel                  | online                                                                  | string       |
        | page instance ID         | de                                                                      | string       |
        | page info version        | appVersion                                                              | regexp named |
        | page segment             | personas                                                                | string       |
        | sysEnv                   | app                                                                     | string       |
        | business unit            | BBVA Mexico                                                             | string       |
        | site app name            | App BBVA Mexico                                                         | string       |
        | project name             | Glomo                                                                   | string       |
        | device mobile            | si                                                                      | string       |
        | user userState           | logado                                                                  | string       |
        | user segment global      | 003001                                                                  | string       |
        | profile ID               | profileID                                                               | regexp named |
        | user gender              | gender                                                                  | regexp named |
        | user age                 | age                                                                     | regexp named |
        | global application       | credit card holder                                                      | string       |
        | application name         | tarjeta de credito one click                                            | string       |
        | application type         | contratacion                                                            | string       |
        | application process      | proceso no preaprobado                                                  | string       |
        | application step         | 1 simulacion                                                            | string       |
        | fulfillment model        | online                                                                  | string       |
        | qualified visits         | true                                                                    | string       |
        | product primary category | tarjetas                                                                | string       |
        | product subtype          | tarjetas credito                                                        | string       |
        | product name             | tarjeta oro                                                             | string       |
        | product amount           | 20000                                                                   | number       |
        | internal campaign        |                                                                         | empty array  |
        | optimization attributes  |                                                                         | empty array  |

    @ANA_NPA004
    @analytics
    @MX @web @ios @android
    @vbank @test @web-done @vbank-modified
    Scenario: Verify credit card modal info
        Given a user with the following criteria
            | criteria          |
            | NPA Offer         |
            | NPA Happy Path    |
        When the user enters the non pre approved offer and advances
        And the user accesses to more info on credit card offer screen
        Then the device contains the following variables
        | item                     | value                                                                   | type         |
        | analytics                | analytics/glomo_base                                                    | json schema  |
        | version DL               | 20250414_5.0                                                            | string       |
        | page name                | app:privada:personas:tarjetas:tarjeta de credito one click:1 simulacion | string       |
        | level 1                  | tarjetas                                                                | string       |
        | level 2                  | tarjeta de credito one click                                            | string       |
        | level 3                  | 1 simulacion                                                            | string       |
        | language                 | ES                                                                      | string       |
        | page area                | privada                                                                 | string       |
        | page intent              | transaccion                                                             | string       |
        | channel                  | online                                                                  | string       |
        | page instance ID         | de                                                                      | string       |
        | page info version        | appVersion                                                              | regexp named |
        | page segment             | personas                                                                | string       |
        | sysEnv                   | app                                                                     | string       |
        | business unit            | BBVA Mexico                                                             | string       |
        | site app name            | App BBVA Mexico                                                         | string       |
        | project name             | Glomo                                                                   | string       |
        | device mobile            | si                                                                      | string       |
        | user userState           | logado                                                                  | string       |
        | user segment global      | 003001                                                                  | string       |
        | profile ID               | profileID                                                               | regexp named |
        | user gender              | gender                                                                  | regexp named |
        | user age                 | age                                                                     | regexp named |
        | global application       | credit card holder                                                      | string       |
        | application name         | tarjeta de credito one click                                            | string       |
        | application type         | contratacion                                                            | string       |
        | application process      | proceso no preaprobado                                                  | string       |
        | application step         | info cuota                                                              | string       |
        | fulfillment model        | online                                                                  | string       |
        | product primary category | tarjetas                                                                | string       |
        | product subtype          | tarjetas credito                                                        | string       |
        | product name             | tarjeta oro                                                             | string       |
        | product amount           | 20000                                                                   | number       |
        | internal campaign        |                                                                         | empty array  |
        | optimization attributes  |                                                                         | empty array  |

    @ANA_NPA005
    @analytics
    @MX @web @ios @android
    @vbank @test @web-done @vbank-modified
    Scenario: Verify credit card continue
        Given a user with the following criteria
            | criteria          |
            | NPA Offer         |
            | NPA Happy Path    |
        When the user enters the non pre approved offer and advances
        And the analytics interceptor service is initiated
        And the user agrees to the bureau check and accesses the otp
        Then the analytics events contains the following variables
        | item                     | value                                                                   | type         | event       |
        | analytics                | analytics/glomo_base                                                    | json schema  | App Started |
        | version DL               | 20250414_5.0                                                            | string       | App Started |
        | page name                | app:privada:personas:tarjetas:tarjeta de credito one click:1 simulacion | string       | App Started |
        | level 1                  | tarjetas                                                                | string       | App Started |
        | level 2                  | tarjeta de credito one click                                            | string       | App Started |
        | level 3                  | 1 simulacion                                                            | string       | App Started |
        | language                 | ES                                                                      | string       | App Started |
        | page area                | privada                                                                 | string       | App Started |
        | page intent              | transaccion                                                             | string       | App Started |
        | channel                  | online                                                                  | string       | App Started |
        | page instance ID         | de                                                                      | string       | App Started |
        | page info version        | appVersion                                                              | regexp named | App Started |
        | page segment             | personas                                                                | string       | App Started |
        | sysEnv                   | app                                                                     | string       | App Started |
        | business unit            | BBVA Mexico                                                             | string       | App Started |
        | site app name            | App BBVA Mexico                                                         | string       | App Started |
        | project name             | Glomo                                                                   | string       | App Started |
        | device mobile            | si                                                                      | string       | App Started |
        | user userState           | logado                                                                  | string       | App Started |
        | user segment global      | 003001                                                                  | string       | App Started |
        | profile ID               | profileID                                                               | regexp named | App Started |
        | user gender              | gender                                                                  | regexp named | App Started |
        | user age                 | age                                                                     | regexp named | App Started |
        | global application       | credit card holder                                                      | string       | App Started |
        | application name         | tarjeta de credito one click                                            | string       | App Started |
        | application type         | contratacion                                                            | string       | App Started |
        | application process      | proceso no preaprobado                                                  | string       | App Started |
        | application step         | solicitar                                                               | string       | App Started |
        | fulfillment model        | online                                                                  | string       | App Started |
        | product primary category | tarjetas                                                                | string       | App Started |
        | product subtype          | tarjetas credito                                                        | string       | App Started |
        | product name             | tarjeta oro                                                             | string       | App Started |
        | product amount           | 20000                                                                   | number       | App Started |
        | internal campaign        |                                                                         | empty array  | App Started |
        | optimization attributes  |                                                                         | empty array  | App Started |

    @ANA_NPA006
    @analytics
    @MX @web @ios @android
    @vbank @test @web-done @vbank-modified
    Scenario: Rejection  for missing personal information
        Given a user with the following criteria
            | criteria                 |
            | NPA Offer                |
            | NPA Missing Profile Info |
        When the user enters the non pre approved offer "unsuccessfully"
        Then the device contains the following variables
        | item                     | value                                                                     | type         |
        | analytics                | analytics/glomo_base                                                      | json schema  |
        | version DL               | 20250414_5.0                                                              | string       |
        | page name                | app:privada:personas:tarjetas:tarjeta de credito one click:pagina exitosa | string       |
        | level 1                  | tarjetas                                                                  | string       |
        | level 2                  | tarjeta de credito one click                                              | string       |
        | level 3                  | pagina exitosa                                                            | string       |
        | language                 | ES                                                                        | string       |
        | page area                | privada                                                                   | string       |
        | page intent              | transaccion                                                               | string       |
        | channel                  | online                                                                    | string       |
        | page instance ID         | de                                                                        | string       |
        | page info version        | appVersion                                                                | regexp named |
        | page segment             | personas                                                                  | string       |
        | sysEnv                   | app                                                                       | string       |
        | business unit            | BBVA Mexico                                                               | string       |
        | site app name            | App BBVA Mexico                                                           | string       |
        | project name             | Glomo                                                                     | string       |
        | device mobile            | si                                                                        | string       |
        | user userState           | logado                                                                    | string       |
        | user segment global      | 003001                                                                    | string       |
        | profile ID               | profileID                                                                 | regexp named |
        | user gender              | gender                                                                    | regexp named |
        | user age                 | age                                                                       | regexp named |
        | user segment profile     | rechazo por falta de documentos                                           | string       |
        | global application       | credit card holder                                                        | string       |
        | application name         | tarjeta de credito one click                                              | string       |
        | application type         | contratacion                                                              | string       |
        | application process      | proceso no preaprobado                                                    | string       |
        | application step         | pagina exitosa                                                            | string       |
        | application state        | rechazado                                                                 | string       |
        | fulfillment model        | online                                                                    | string       |
        | product primary category | tarjetas                                                                  | string       |
        | product subtype          | tarjetas credito                                                          | string       |
        | internal campaign        |                                                                           | empty array  |
        | optimization attributes  |                                                                           | empty array  |

    @ANA_NPA007
    @analytics
    @MX @web @ios @android
    @vbank @test @web-done @vbank-modified
    Scenario: Negative response with solution
        Given a user with the following criteria
            | criteria            |
            | NPA Offer           |
            | NPA Bureau Rejected |
        When the user attempts to enter the non pre approved offer
        Then the device contains the following variables
        | item                     | value                                                                     | type         |
        | analytics                | analytics/glomo_base                                                      | json schema  |
        | version DL               | 20250414_5.0                                                              | string       |
        | page name                | app:privada:personas:tarjetas:tarjeta de credito one click:pagina exitosa | string       |
        | level 1                  | tarjetas                                                                  | string       |
        | level 2                  | tarjeta de credito one click                                              | string       |
        | level 3                  | pagina exitosa                                                            | string       |
        | language                 | ES                                                                        | string       |
        | page area                | privada                                                                   | string       |
        | page intent              | transaccion                                                               | string       |
        | channel                  | online                                                                    | string       |
        | page instance ID         | de                                                                        | string       |
        | page info version        | appVersion                                                                | regexp named |
        | page segment             | personas                                                                  | string       |
        | sysEnv                   | app                                                                       | string       |
        | business unit            | BBVA Mexico                                                               | string       |
        | site app name            | App BBVA Mexico                                                           | string       |
        | project name             | Glomo                                                                     | string       |
        | device mobile            | si                                                                        | string       |
        | user userState           | logado                                                                    | string       |
        | user segment global      | 003001                                                                    | string       |
        | profile ID               | profileID                                                                 | regexp named |
        | user gender              | gender                                                                    | regexp named |
        | user age                 | age                                                                       | regexp named |
        | user segment profile     | rechazo por buro con solucion                                             | string       |
        | global application       | credit card holder                                                        | string       |
        | application name         | tarjeta de credito one click                                              | string       |
        | application type         | contratacion                                                              | string       |
        | application process      | proceso no preaprobado                                                    | string       |
        | application step         | pagina exitosa                                                            | string       |
        | application state        | rechazado                                                                 | string       |
        | fulfillment model        | online                                                                    | string       |
        | product primary category | tarjetas                                                                  | string       |
        | product subtype          | tarjetas credito                                                          | string       |
        | internal campaign        |                                                                           | empty array  |
        | optimization attributes  |                                                                           | empty array  |

    @ANA_NPA008
    @analytics
    @MX @web @ios @android
    @vbank @test @web-done @vbank-modified
    Scenario: Rejected for insufficient pay capacity
        Given a user with the following criteria
            | criteria            |
            | NPA Offer           |
            | NPA Lacking Money   |
        When the user attempts to enter the non pre approved offer
        Then the device contains the following variables
        | item                     | value                                                                     | type         |
        | analytics                | analytics/glomo_base                                                      | json schema  |
        | version DL               | 20250414_5.0                                                              | string       |
        | page name                | app:privada:personas:tarjetas:tarjeta de credito one click:pagina exitosa | string       |
        | level 1                  | tarjetas                                                                  | string       |
        | level 2                  | tarjeta de credito one click                                              | string       |
        | level 3                  | pagina exitosa                                                            | string       |
        | language                 | ES                                                                        | string       |
        | page area                | privada                                                                   | string       |
        | page intent              | transaccion                                                               | string       |
        | channel                  | online                                                                    | string       |
        | page instance ID         | de                                                                        | string       |
        | page info version        | appVersion                                                                | regexp named |
        | page segment             | personas                                                                  | string       |
        | sysEnv                   | app                                                                       | string       |
        | business unit            | BBVA Mexico                                                               | string       |
        | site app name            | App BBVA Mexico                                                           | string       |
        | project name             | Glomo                                                                     | string       |
        | device mobile            | si                                                                        | string       |
        | user userState           | logado                                                                    | string       |
        | user segment global      | 003001                                                                    | string       |
        | profile ID               | profileID                                                                 | regexp named |
        | user gender              | gender                                                                    | regexp named |
        | user age                 | age                                                                       | regexp named |
        | user segment profile     | rechazo por salud financiera                                              | string       |
        | global application       | credit card holder                                                        | string       |
        | application name         | tarjeta de credito one click                                              | string       |
        | application type         | contratacion                                                              | string       |
        | application process      | proceso no preaprobado                                                    | string       |
        | application step         | pagina exitosa                                                            | string       |
        | application state        | rechazado                                                                 | string       |
        | fulfillment model        | online                                                                    | string       |
        | product primary category | tarjetas                                                                  | string       |
        | product subtype          | tarjetas credito                                                          | string       |
        | internal campaign        |                                                                           | empty array  |
        | optimization attributes  |                                                                           | empty array  |

    @ANA_NPA009
    @analytics
    @MX @web @ios @android
    @vbank @test @web-done @vbank-modified
    Scenario: Negative response without solution
        Given a user with the following criteria
            | criteria             |
            | NPA Offer            |
            | NPA Without Solution |
        When the user attempts to enter the non pre approved offer
        Then the device contains the following variables
        | item                     | value                                                                     | type         |
        | analytics                | analytics/glomo_base                                                      | json schema  |
        | version DL               | 20250414_5.0                                                              | string       |
        | page name                | app:privada:personas:tarjetas:tarjeta de credito one click:pagina exitosa | string       |
        | level 1                  | tarjetas                                                                  | string       |
        | level 2                  | tarjeta de credito one click                                              | string       |
        | level 3                  | pagina exitosa                                                            | string       |
        | language                 | ES                                                                        | string       |
        | page area                | privada                                                                   | string       |
        | page intent              | transaccion                                                               | string       |
        | channel                  | online                                                                    | string       |
        | page instance ID         | de                                                                        | string       |
        | page info version        | appVersion                                                                | regexp named |
        | page segment             | personas                                                                  | string       |
        | sysEnv                   | app                                                                       | string       |
        | business unit            | BBVA Mexico                                                               | string       |
        | site app name            | App BBVA Mexico                                                           | string       |
        | project name             | Glomo                                                                     | string       |
        | device mobile            | si                                                                        | string       |
        | user userState           | logado                                                                    | string       |
        | user segment global      | 003001                                                                    | string       |
        | profile ID               | profileID                                                                 | regexp named |
        | user gender              | gender                                                                    | regexp named |
        | user age                 | age                                                                       | regexp named |
        | user segment profile     | rechazo por buro sin solucion                                             | string       |
        | global application       | credit card holder                                                        | string       |
        | application name         | tarjeta de credito one click                                              | string       |
        | application type         | contratacion                                                              | string       |
        | application process      | proceso no preaprobado                                                    | string       |
        | application step         | pagina exitosa                                                            | string       |
        | application state        | rechazado                                                                 | string       |
        | fulfillment model        | online                                                                    | string       |
        | product primary category | tarjetas                                                                  | string       |
        | product subtype          | tarjetas credito                                                          | string       |
        | internal campaign        |                                                                           | empty array  |
        | optimization attributes  |                                                                           | empty array  |

    @ANA_NPA010
    @analytics
    @MX @web @ios @android
    @vbank @test @web-done @vbank-modified
    Scenario: Verify amount input
        Given a user with the following criteria
            | criteria          |
            | NPA Offer         |
            | NPA Happy Path    |
        When the user enters the non pre approved offer and advances
        And the user enters "40000" as a new amount
        Then the device contains the following variables
        | item                     | value                                                                   | type         |
        | analytics                | analytics/glomo_base                                                    | json schema  |
        | version DL               | 20250414_5.0                                                            | string       |
        | page name                | app:privada:personas:tarjetas:tarjeta de credito one click:1 simulacion | string       |
        | level 1                  | tarjetas                                                                | string       |
        | level 2                  | tarjeta de credito one click                                            | string       |
        | level 3                  | 1 simulacion                                                            | string       |
        | language                 | ES                                                                      | string       |
        | page area                | privada                                                                 | string       |
        | page intent              | transaccion                                                             | string       |
        | channel                  | online                                                                  | string       |
        | page instance ID         | de                                                                      | string       |
        | page info version        | appVersion                                                              | regexp named |
        | page segment             | personas                                                                | string       |
        | sysEnv                   | app                                                                     | string       |
        | business unit            | BBVA Mexico                                                             | string       |
        | site app name            | App BBVA Mexico                                                         | string       |
        | project name             | Glomo                                                                   | string       |
        | device mobile            | si                                                                      | string       |
        | user userState           | logado                                                                  | string       |
        | user segment global      | 003001                                                                  | string       |
        | profile ID               | profileID                                                               | regexp named |
        | user gender              | gender                                                                  | regexp named |
        | user age                 | age                                                                     | regexp named |
        | global application       | credit card holder                                                      | string       |
        | application name         | tarjeta de credito one click                                            | string       |
        | application type         | contratacion                                                            | string       |
        | application process      | proceso no preaprobado                                                  | string       |
        | application step         | importe a solicitar                                                     | string       |
        | fulfillment model        | online                                                                  | string       |
        | product primary category | tarjetas                                                                | string       |
        | product subtype          | tarjetas credito                                                        | string       |
        | product name             | tarjeta oro                                                             | string       |
        | product amount           | 20000                                                                   | number       |
        | internal campaign        |                                                                         | empty array  |
        | optimization attributes  |                                                                         | empty array  |

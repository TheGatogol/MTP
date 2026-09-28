@ClarificationsCareManagementAnalytics
Feature: Analytics - ClarificationsCareManagement

    @ANA_EVENT_CCM001
    @analytics
    @MX
    @web @ios @android
    @vbank @backend(test)
    @web-done
    Scenario: Clarifications Management - App On Click Start
        Given a user with the following criteria
            | criteria                         |
            | clarifications management        |
            | clarification register           |
        And the user accesses to clarification movement detail of "AZUL BBVA" "TARJETA DE CREDITO"
        And the analytics interceptor service is initiated
        When the user accesses to clarification screen
        Then the analytics events contains the following variables
            | item                           | value                                                                                            | type         | event              |
            | analytics                      | analytics/glomo_base                                                                             | json schema  | App On Click Start |
            | page name                      | app:privada:personas:tarjetas:credito:detalle:movimientos                                        | string       | App On Click Start |
            | level 1                        | tarjetas                                                                                         | string       | App On Click Start |
            | level 2                        | credito                                                                                          | string       | App On Click Start |
            | level 3                        | detalle                                                                                          | string       | App On Click Start |
            | level 4                        | movimientos                                                                                      | string       | App On Click Start |
            | language                       | ES                                                                                               | string       | App On Click Start |
            | page area                      | privada                                                                                          | string       | App On Click Start |
            | page intent                    | informacion                                                                                      | string       | App On Click Start |
            | channel                        | online                                                                                           | string       | App On Click Start |
            | page instance ID               | de                                                                                               | string       | App On Click Start |
            | page segment                   | personas                                                                                         | string       | App On Click Start |
            | sysEnv                         | app                                                                                              | string       | App On Click Start |
            | business unit                  | BBVA Mexico                                                                                      | string       | App On Click Start |
            | site app name                  | App BBVA Mexico                                                                                  | string       | App On Click Start |
            | page info version              | appVersion                                                                                       | regexp named | App On Click Start |
            | project name                   | Glomo                                                                                            | string       | App On Click Start |
            | device mobile                  | si                                                                                               | string       | App On Click Start |
            | user userState                 | logado                                                                                           | string       | App On Click Start |
            | profile ID                     | profileID                                                                                        | regexp named | App On Click Start |
            | user segment global            | 003001                                                                                           | string       | App On Click Start |
            | user gender                    | gender                                                                                           | regexp named | App On Click Start |
            | user age                       | age                                                                                              | regexp named | App On Click Start |
            | global application             | clarification management                                                                         | string       | App On Click Start |
            | application name               | aclaracion recibo unimovimiento                                                                  | string       | App On Click Start |
            | application type               | operativa                                                                                        | string       | App On Click Start |
            | application step               | reportar movimiento                                                                              | string       | App On Click Start |
            | fulfillment model              | online                                                                                           | string       | App On Click Start |
            | product primary category       | tarjetas                                                                                         | string       | App On Click Start |
            | product subtype                | tarjetas credito                                                                                 | string       | App On Click Start |
            | product name                   | azul bbva                                                                                        | string       | App On Click Start |
            | product currency               | MXN                                                                                              | string       | App On Click Start |
            | product amount                 | 255                                                                                              | number       | App On Click Start |

    @ANA_EVENT_CCM002
    @analytics
    @MX
    @web @ios @android
    @vbank @backend(test)
    @web-done
    Scenario: Clarifications Management - App Page Visit
        Given a user with the following criteria
            | criteria                         |
            | clarifications management        |
            | clarification register           |
        And the user accesses to clarification movement detail of "AZUL BBVA" "TARJETA DE CREDITO"
        And the analytics interceptor service is initiated
        When the user accesses to clarification screen
        Then the analytics events contains the following variables
            | item                           | value                                                                                            | type         | event          |
            | analytics                      | analytics/glomo_base                                                                             | json schema  | App Page Visit |
            | page name                      | app:privada:personas:tarjetas:credito:aclaracion recibo unimovimiento:1 motivo de reporte        | string       | App Page Visit |
            | level 1                        | tarjetas                                                                                         | string       | App Page Visit |
            | level 2                        | credito                                                                                          | string       | App Page Visit |
            | level 3                        | aclaracion recibo unimovimiento                                                                  | string       | App Page Visit |
            | level 4                        | 1 motivo de reporte                                                                              | string       | App Page Visit |
            | language                       | ES                                                                                               | string       | App Page Visit |
            | page area                      | privada                                                                                          | string       | App Page Visit |
            | page intent                    | informacion                                                                                      | string       | App Page Visit |
            | channel                        | online                                                                                           | string       | App Page Visit |
            | page instance ID               | de                                                                                               | string       | App Page Visit |
            | page segment                   | personas                                                                                         | string       | App Page Visit |
            | sysEnv                         | app                                                                                              | string       | App Page Visit |
            | business unit                  | BBVA Mexico                                                                                      | string       | App Page Visit |
            | site app name                  | App BBVA Mexico                                                                                  | string       | App Page Visit |
            | page info version              | appVersion                                                                                       | regexp named | App Page Visit |
            | project name                   | Glomo                                                                                            | string       | App Page Visit |
            | device mobile                  | si                                                                                               | string       | App Page Visit |
            | user userState                 | logado                                                                                           | string       | App Page Visit |
            | profile ID                     | profileID                                                                                        | regexp named | App Page Visit |
            | user segment global            | 003001                                                                                           | string       | App Page Visit |
            | user gender                    | gender                                                                                           | regexp named | App Page Visit |
            | user age                       | age                                                                                              | regexp named | App Page Visit |
            | global application             | clarification management                                                                         | string       | App Page Visit |
            | application name               | aclaracion recibo unimovimiento                                                                  | string       | App Page Visit |
            | application type               | operativa                                                                                        | string       | App Page Visit |
            | application step               | 1 motivo de reporte                                                                              | string       | App Page Visit |
            | fulfillment model              | online                                                                                           | string       | App Page Visit |
            | product primary category       | tarjetas                                                                                         | string       | App Page Visit |
            | product subtype                | tarjetas credito                                                                                 | string       | App Page Visit |
            | product name                   | azul bbva                                                                                        | string       | App Page Visit |
            | product currency               | MXN                                                                                              | string       | App Page Visit |
            | product amount                 | 255                                                                                              | number       | App Page Visit |

    @ANA_EVENT_CCM003
    @analytics
    @MX
    @web @ios @android
    @vbank @backend(test)
    @web-done
    Scenario: Clarifications Management - App Started
        Given a user with the following criteria
            | criteria                         |
            | clarifications management        |
            | clarification register           |
        And the user accesses to "AZUL BBVA" "TARJETA DE CREDITO" card and selects "request payment" movement
        And the analytics interceptor service is initiated
        When the user selects the "card stolen" option of clarifications payment
        Then the analytics events contains the following variables
            | item                           | value                                                                                            | type         | event         |
            | analytics                      | analytics/glomo_base                                                                             | json schema  | App Started   |
            | page name                      | app:privada:personas:tarjetas:credito:aclaracion recibo unimovimiento:1 motivo de reporte        | string       | App Started   |
            | level 1                        | tarjetas                                                                                         | string       | App Started   |
            | level 2                        | credito                                                                                          | string       | App Started   |
            | level 3                        | aclaracion recibo unimovimiento                                                                  | string       | App Started   |
            | level 4                        | 1 motivo de reporte                                                                              | string       | App Started   |
            | language                       | ES                                                                                               | string       | App Started   |
            | page area                      | privada                                                                                          | string       | App Started   |
            | page intent                    | informacion                                                                                      | string       | App Started   |
            | channel                        | online                                                                                           | string       | App Started   |
            | page instance ID               | de                                                                                               | string       | App Started   |
            | page segment                   | personas                                                                                         | string       | App Started   |
            | sysEnv                         | app                                                                                              | string       | App Started   |
            | business unit                  | BBVA Mexico                                                                                      | string       | App Started   |
            | site app name                  | App BBVA Mexico                                                                                  | string       | App Started   |
            | page info version              | appVersion                                                                                       | regexp named | App Started   |
            | project name                   | Glomo                                                                                            | string       | App Started   |
            | device mobile                  | si                                                                                               | string       | App Started   |
            | user userState                 | logado                                                                                           | string       | App Started   |
            | profile ID                     | profileID                                                                                        | regexp named | App Started   |
            | user segment global            | 003001                                                                                           | string       | App Started   |
            | user gender                    | gender                                                                                           | regexp named | App Started   |
            | user age                       | age                                                                                              | regexp named | App Started   |
            | global application             | clarification management                                                                         | string       | App Started   |
            | application name               | aclaracion recibo unimovimiento                                                                  | string       | App Started   |
            | application type               | operativa                                                                                        | string       | App Started   |
            | application step               | me robaron mi tarjeta                                                                            | string       | App Started   |
            | fulfillment model              | online                                                                                           | string       | App Started   |
            | product primary category       | tarjetas                                                                                         | string       | App Started   |
            | product subtype                | tarjetas credito                                                                                 | string       | App Started   |
            | product name                   | azul bbva                                                                                        | string       | App Started   |
            | product currency               | MXN                                                                                              | string       | App Started   |
            | product amount                 | 255                                                                                              | number       | App Started   |

    @ANA_EVENT_CCM004
    @analytics
    @MX
    @web @ios @android
    @vbank @backend(test)
    @web-done
    Scenario: Clarifications Management - App Step 2
        Given a user with the following criteria
            | criteria                         |
            | clarifications management        |
            | clarification register           |
        And the user accesses to "AZUL BBVA" "TARJETA DE CREDITO" card and selects "request payment" movement
        And the analytics interceptor service is initiated
        When the user selects "unauthorized payment" option of clarifications payment
        Then the analytics events contains the following variables
            | item                           | value                                                                                            | type         | event         |
            | analytics                      | analytics/glomo_base                                                                             | json schema  | App Step 2    |
            | page name                      | app:privada:personas:tarjetas:credito:aclaracion recibo unimovimiento:2 tipo de atencion         | string       | App Step 2    |
            | level 1                        | tarjetas                                                                                         | string       | App Step 2    |
            | level 2                        | credito                                                                                          | string       | App Step 2    |
            | level 3                        | aclaracion recibo unimovimiento                                                                  | string       | App Step 2    |
            | level 4                        | 2 tipo de atencion                                                                               | string       | App Step 2    |
            | language                       | ES                                                                                               | string       | App Step 2    |
            | page area                      | privada                                                                                          | string       | App Step 2    |
            | page intent                    | informacion                                                                                      | string       | App Step 2    |
            | channel                        | online                                                                                           | string       | App Step 2    |
            | page instance ID               | de                                                                                               | string       | App Step 2    |
            | page segment                   | personas                                                                                         | string       | App Step 2    |
            | sysEnv                         | app                                                                                              | string       | App Step 2    |
            | business unit                  | BBVA Mexico                                                                                      | string       | App Step 2    |
            | site app name                  | App BBVA Mexico                                                                                  | string       | App Step 2    |
            | page info version              | appVersion                                                                                       | regexp named | App Step 2    |
            | project name                   | Glomo                                                                                            | string       | App Step 2    |
            | device mobile                  | si                                                                                               | string       | App Step 2    |
            | user userState                 | logado                                                                                           | string       | App Step 2    |
            | profile ID                     | profileID                                                                                        | regexp named | App Step 2    |
            | user segment global            | 003001                                                                                           | string       | App Step 2    |
            | user gender                    | gender                                                                                           | regexp named | App Step 2    |
            | user age                       | age                                                                                              | regexp named | App Step 2    |
            | global application             | clarification management                                                                         | string       | App Step 2    |
            | application name               | aclaracion recibo unimovimiento                                                                  | string       | App Step 2    |
            | application type               | operativa                                                                                        | string       | App Step 2    |
            | application step               | 2 tipo de atencion                                                                               | string       | App Step 2    |
            | fulfillment model              | online                                                                                           | string       | App Step 2    |
            | product primary category       | tarjetas                                                                                         | string       | App Step 2    |
            | product subtype                | tarjetas credito                                                                                 | string       | App Step 2    |
            | product name                   | azul bbva                                                                                        | string       | App Step 2    |
            | product currency               | MXN                                                                                              | string       | App Step 2    |
            | product amount                 | 255                                                                                              | number       | App Step 2    |

    @ANA_EVENT_CCM005
    @analytics
    @MX
    @web @ios @android
    @vbank @backend(test)
    @web-done
    Scenario: Clarifications Management - App Step 3
        Given a user with the following criteria
            | criteria                         |
            | clarifications management        |
            | clarification register           |
        And the user accesses to "AZUL BBVA" "TARJETA DE CREDITO" card and selects "request payment" movement
        And the user selects "unauthorized payment" option of clarifications payment
        And the analytics interceptor service is initiated
        When the user selects "request refund" attention type
        Then the analytics events contains the following variables
            | item                           | value                                                                                            | type         | event       |
            | analytics                      | analytics/glomo_base                                                                             | json schema  | App Step 3  |
            | page name                      | app:privada:personas:tarjetas:credito:aclaracion recibo unimovimiento:3 confirmacion             | string       | App Step 3  |
            | level 1                        | tarjetas                                                                                         | string       | App Step 3  |
            | level 2                        | credito                                                                                          | string       | App Step 3  |
            | level 3                        | aclaracion recibo unimovimiento                                                                  | string       | App Step 3  |
            | level 4                        | 3 confirmacion                                                                                   | string       | App Step 3  |
            | language                       | ES                                                                                               | string       | App Step 3  |
            | page area                      | privada                                                                                          | string       | App Step 3  |
            | page intent                    | informacion                                                                                      | string       | App Step 3  |
            | channel                        | online                                                                                           | string       | App Step 3  |
            | page instance ID               | de                                                                                               | string       | App Step 3  |
            | page segment                   | personas                                                                                         | string       | App Step 3  |
            | sysEnv                         | app                                                                                              | string       | App Step 3  |
            | business unit                  | BBVA Mexico                                                                                      | string       | App Step 3  |
            | site app name                  | App BBVA Mexico                                                                                  | string       | App Step 3  |
            | page info version              | appVersion                                                                                       | regexp named | App Step 3  |
            | project name                   | Glomo                                                                                            | string       | App Step 3  |
            | device mobile                  | si                                                                                               | string       | App Step 3  |
            | user userState                 | logado                                                                                           | string       | App Step 3  |
            | profile ID                     | profileID                                                                                        | regexp named | App Step 3  |
            | user segment global            | 003001                                                                                           | string       | App Step 3  |
            | user gender                    | gender                                                                                           | regexp named | App Step 3  |
            | user age                       | age                                                                                              | regexp named | App Step 3  |
            | application typology           | solicitar devolucion                                                                             | string       | App Step 3  |
            | global application             | clarification management                                                                         | string       | App Step 3  |
            | application name               | aclaracion recibo unimovimiento                                                                  | string       | App Step 3  |
            | application type               | operativa                                                                                        | string       | App Step 3  |
            | application step               | 3 confirmacion                                                                                   | string       | App Step 3  |
            | fulfillment model              | online                                                                                           | string       | App Step 3  |
            | product primary category       | tarjetas                                                                                         | string       | App Step 3  |
            | product subtype                | tarjetas credito                                                                                 | string       | App Step 3  |
            | product name                   | azul bbva                                                                                        | string       | App Step 3  |
            | product currency               | MXN                                                                                              | string       | App Step 3  |
            | product amount                 | 255                                                                                              | number       | App Step 3  |

    @ANA_CCM006
    @analytics
    @MX
    @web @ios @android
    @vbank @backend(test)
    @web-done
    Scenario: Clarifications Management - App Completed En Revision
        Given a user with the following criteria
            | criteria                         |
            | clarifications management        |
            | clarification register           |
        And the user accesses to "AZUL BBVA" "TARJETA DE CREDITO" card and selects "request payment" movement
        And the user selects "unauthorized payment" option of clarifications payment
        And the user selects "init clarification" attention type
        When the user confirms payment clarifications
        Then the device contains the following variables
            | item                           | value                                                                                            | type         |
            | analytics                      | analytics/glomo_base                                                                             | json schema  |
            | page name                      | app:privada:personas:tarjetas:credito:aclaracion recibo unimovimiento:aclaracion:pagina exitosa  | string       |
            | level 1                        | tarjetas                                                                                         | string       |
            | level 2                        | credito                                                                                          | string       |
            | level 3                        | aclaracion recibo unimovimiento                                                                  | string       |
            | level 4                        | aclaracion                                                                                       | string       |
            | language                       | ES                                                                                               | string       |
            | page area                      | privada                                                                                          | string       |
            | page intent                    | informacion                                                                                      | string       |
            | channel                        | online                                                                                           | string       |
            | page instance ID               | de                                                                                               | string       |
            | page segment                   | personas                                                                                         | string       |
            | sysEnv                         | app                                                                                              | string       |
            | business unit                  | BBVA Mexico                                                                                      | string       |
            | site app name                  | App BBVA Mexico                                                                                  | string       |
            | page info version              | appVersion                                                                                       | regexp named |
            | project name                   | Glomo                                                                                            | string       |
            | device mobile                  | si                                                                                               | string       |
            | user userState                 | logado                                                                                           | string       |
            | profile ID                     | profileID                                                                                        | regexp named |
            | user segment global            | 003001                                                                                           | string       |
            | user gender                    | gender                                                                                           | regexp named |
            | user age                       | age                                                                                              | regexp named |
            | application typology           | solicitar aclaracion                                                                             | string       |
            | global application             | clarification management                                                                         | string       |
            | application name               | aclaracion recibo unimovimiento                                                                  | string       |
            | application type               | operativa                                                                                        | string       |
            | application step               | pagina exitosa                                                                                   | string       |
            | fulfillment model              | online                                                                                           | string       |
            | application state              | en revision                                                                                      | string       |
            | application operation number   | alphaNumericCaseSpace                                                                            | regexp named |
            | product primary category       | tarjetas                                                                                         | string       |
            | product subtype                | tarjetas credito                                                                                 | string       |
            | product name                   | azul bbva                                                                                        | string       |
            | product currency               | MXN                                                                                              | string       |
            | product amount                 | 255                                                                                              | number       |

    @ANA_CCM007
    @analytics
    @MX
    @web @ios @android
    @vbank @backend(test)
    @web-done
    Scenario: Clarifications Management - App Completed Aprovado
        Given a user with the following criteria
            | criteria                         |
            | clarifications management        |
            | clarification register           |
        And the user accesses to "AZUL BBVA" "TARJETA DE CREDITO" card and selects "request payment" movement
        And the user selects "unauthorized payment" option of clarifications payment
        And the user selects "request refund" attention type
        When the user confirms payment refund
        Then the device contains the following variables
            | item                           | value                                                                                            | type         |
            | analytics                      | analytics/glomo_base                                                                             | json schema  |
            | page name                      | app:privada:personas:tarjetas:credito:aclaracion recibo unimovimiento:abono:pagina exitosa       | string       |
            | level 1                        | tarjetas                                                                                         | string       |
            | level 2                        | credito                                                                                          | string       |
            | level 3                        | aclaracion recibo unimovimiento                                                                  | string       |
            | level 4                        | abono                                                                                            | string       |
            | language                       | ES                                                                                               | string       |
            | page area                      | privada                                                                                          | string       |
            | page intent                    | informacion                                                                                      | string       |
            | channel                        | online                                                                                           | string       |
            | page instance ID               | de                                                                                               | string       |
            | page segment                   | personas                                                                                         | string       |
            | sysEnv                         | app                                                                                              | string       |
            | business unit                  | BBVA Mexico                                                                                      | string       |
            | site app name                  | App BBVA Mexico                                                                                  | string       |
            | page info version              | appVersion                                                                                       | regexp named |
            | project name                   | Glomo                                                                                            | string       |
            | device mobile                  | si                                                                                               | string       |
            | user userState                 | logado                                                                                           | string       |
            | profile ID                     | profileID                                                                                        | regexp named |
            | user segment global            | 003001                                                                                           | string       |
            | user gender                    | gender                                                                                           | regexp named |
            | user age                       | age                                                                                              | regexp named |
            | application typology           | solicitar devolucion                                                                             | string       |
            | global application             | clarification management                                                                         | string       |
            | application name               | aclaracion recibo unimovimiento                                                                  | string       |
            | application type               | operativa                                                                                        | string       |
            | application step               | pagina exitosa                                                                                   | string       |
            | fulfillment model              | online                                                                                           | string       |
            | application state              | aprobado                                                                                         | string       |
            | application operation number   | alphaNumericCaseSpace                                                                            | regexp named |
            | product primary category       | tarjetas                                                                                         | string       |
            | product subtype                | tarjetas credito                                                                                 | string       |
            | product name                   | azul bbva                                                                                        | string       |
            | product currency               | MXN                                                                                              | string       |
            | product amount                 | 255                                                                                              | number       |

    @ANA_CCM008
    @analytics
    @MX
    @web @ios @android
    @vbank @backend(test)
    @web-done
    @timemachine
    Scenario: Clarifications Management - PAGE VIEW - Direct Debit Blocking Step
        Given a user with the following criteria
            | criteria                             |
            | has direct debit movement analytic   |
        And the user starts the application at date:
            | hour  | 12                      |
        And the user accesses to account and selects a movement from "transaction" displacement
        And the user selects "unauthorized payment" option of clarifications payment
        When the user selects "default clarification for direct debit" attention type
        Then the device contains the following variables
            | item                           | value                                                                              | type         |
            | analytics                      | analytics/glomo_base                                                               | json schema  |
            | page name                      | app:privada:personas:cuentas:aclaracion recibo unimovimiento:bloqueo domiciliacion | string       |
            | level 1                        | cuentas                                                                            | string       |
            | level 2                        | aclaracion recibo unimovimiento                                                    | string       |
            | level 3                        | bloqueo domiciliacion                                                              | string       |
            | language                       | ES                                                                                 | string       |
            | page area                      | privada                                                                            | string       |
            | page intent                    | informacion                                                                        | string       |
            | channel                        | online                                                                             | string       |
            | page instance ID               | de                                                                                 | string       |
            | page segment                   | personas                                                                           | string       |
            | sysEnv                         | app                                                                                | string       |
            | business unit                  | BBVA Mexico                                                                        | string       |
            | site app name                  | App BBVA Mexico                                                                    | string       |
            | page info version              | appVersion                                                                         | regexp named |
            | project name                   | Glomo                                                                              | string       |
            | device mobile                  | si                                                                                 | string       |
            | user userState                 | logado                                                                             | string       |
            | profile ID                     | profileID                                                                          | regexp named |
            | user segment global            | 003001                                                                             | string       |
            | user gender                    | gender                                                                             | regexp named |
            | user age                       | age                                                                                | regexp named |

    @ANA_CCM009
    @analytics
    @MX
    @web @ios @android
    @vbank @backend(test)
    @web-done
    Scenario: Clarifications Management - PAGE VIEW - Init Clarification Error
        Given a user with the following criteria
            | criteria                             |
            | has direct debit movement analytic   |
        And the user starts the application at date:
            | hour  | 12                      |
        And the user accesses to account and selects a movement from "transaction" displacement
        When the user selects "unauthorized payment" option of clarifications payment
        Then the device contains the following variables
            | item                           | value                                                                                 | type         |
            | analytics                      | analytics/glomo_base                                                                  | json schema  |
            | page name                      | app:privada:personas:cuentas:aclaracion recibo unimovimiento:error iniciar aclaracion | string       |
            | level 1                        | cuentas                                                                               | string       |
            | level 2                        | aclaracion recibo unimovimiento                                                       | string       |
            | level 3                        | error iniciar aclaracion                                                              | string       |
            | language                       | ES                                                                                    | string       |
            | page area                      | privada                                                                               | string       |
            | page intent                    | informacion                                                                           | string       |
            | channel                        | online                                                                                | string       |
            | page instance ID               | de                                                                                    | string       |
            | page segment                   | personas                                                                              | string       |
            | sysEnv                         | app                                                                                   | string       |
            | business unit                  | BBVA Mexico                                                                           | string       |
            | site app name                  | App BBVA Mexico                                                                       | string       |
            | page info version              | appVersion                                                                            | regexp named |
            | project name                   | Glomo                                                                                 | string       |
            | device mobile                  | si                                                                                    | string       |
            | user userState                 | logado                                                                                | string       |
            | profile ID                     | profileID                                                                             | regexp named |
            | user segment global            | 003001                                                                                | string       |
            | user gender                    | gender                                                                                | regexp named |
            | user age                       | age                                                                                   | regexp named |

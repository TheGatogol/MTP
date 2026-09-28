@ocPayrollPortabilityAnalytics
Feature: Analytics - OC Payroll Portability

    @ANA_OCPPO001
    @analytics
    @ios @android @web @tmpExclude @JIRA.GLOMOMX-254311
    @backend(test) @MX @vbank
    Scenario: OC Payroll Portability - App Page Visit
        Given a user with the following criteria
            | criteria                        |
            | payroll portability one account |
        When the user goes to the payroll portability operation
        Then the device contains the following variables
            | item                     | value                                                         | type         |
            | analytics                | analytics/glomo_base                                          | json schema  |
            | version DL               | 20250414_5.0                                                  | string       |
            | page name                | app:privada:personas:cuentas:portabilidad nomina:1 beneficios | string       |
            | level 1                  | cuentas                                                       | string       |
            | level 2                  | portabilidad nomina                                           | string       |
            | level 3                  | 1 beneficios                                                  | string       |
            | language                 | ES                                                            | string       |
            | page area                | privada                                                       | string       |
            | page intent              | transaccion                                                   | string       |
            | channel                  | online                                                        | string       |
            | page instance ID         | de                                                            | string       |
            | page info version        | appVersion                                                    | regexp named |
            | page segment             | personas                                                      | string       |
            | sysEnv                   | app                                                           | string       |
            | business unit            | BBVA Mexico                                                   | string       |
            | site app name            | App BBVA Mexico                                               | string       |
            | project name             | Glomo                                                         | string       |
            | device mobile            | si                                                            | string       |
            | user userState           | logado                                                        | string       |
            | user segment global      | 003001                                                        | string       |
            | profile ID               | profileID                                                     | regexp named |
            | user gender              | gender                                                        | regexp named |
            | user age                 | age                                                           | regexp named |
            | global application       | payroll portability                                           | string       |
            | application name         | portabilidad nomina                                           | string       |
            | application type         | contratacion                                                  | string       |
            | application typology     | flujo normal                                                  | string       |
            | application step         | 1 beneficios                                                  | string       |
            | fulfillment model        | online                                                        | string       |
            | qualified visits         | true                                                          | string       |
            | product primary category | cuentas                                                       | string       |
            | product name             | cuenta nomina                                                 | string       |
            | internal campaign        |                                                               | empty array  |
            | optimization attributes  |                                                               | empty array  |

    @ANA_EVENT_OCPPO002
    @analytics
    @ios @android @web
    @MX @vbank
    @tmpExclude @JIRA.GLOMOMX-254311 @backend(test)
    Scenario: OC Payroll Portability - App Started - App step 2
        Given a user with the following criteria
            | criteria                        |
            | payroll portability one account |
        And the user goes to the payroll portability operation
        And the analytics interceptor service is initiated
        When the user start oc payroll portability process
        Then the analytics events contains the following variables
            | item                     | value                                                                  | type         | event                   |
            | analytics                | analytics/glomo_base                                                   | json schema  | App Started, App Step 2 |
            | version DL               | 20250414_5.0                                                           | string       | App Started, App Step 2 |
            | page name                | app:privada:personas:cuentas:portabilidad nomina:1 beneficios          | string       | App Started             |
            | page name                | app:privada:personas:cuentas:portabilidad nomina:2 fecha de nacimiento | string       | App Step 2              |
            | level 1                  | cuentas                                                                | string       | App Started, App Step 2 |
            | level 2                  | portabilidad nomina                                                    | string       | App Started, App Step 2 |
            | level 3                  | 1 beneficios                                                           | string       | App Started             |
            | level 3                  | 2 fecha de nacimiento                                                  | string       | App Step 2              |
            | language                 | ES                                                                     | string       | App Started, App Step 2 |
            | page area                | privada                                                                | string       | App Started, App Step 2 |
            | page intent              | transaccion                                                            | string       | App Started, App Step 2 |
            | channel                  | online                                                                 | string       | App Started, App Step 2 |
            | page instance ID         | de                                                                     | string       | App Started, App Step 2 |
            | page info version        | appVersion                                                             | regexp named | App Started, App Step 2 |
            | page segment             | personas                                                               | string       | App Started, App Step 2 |
            | sysEnv                   | app                                                                    | string       | App Started, App Step 2 |
            | business unit            | BBVA Mexico                                                            | string       | App Started, App Step 2 |
            | site app name            | App BBVA Mexico                                                        | string       | App Started, App Step 2 |
            | project name             | Glomo                                                                  | string       | App Started, App Step 2 |
            | device mobile            | si                                                                     | string       | App Started, App Step 2 |
            | user userState           | logado                                                                 | string       | App Started, App Step 2 |
            | user segment global      | 003001                                                                 | string       | App Started, App Step 2 |
            | profile ID               | profileID                                                              | regexp named | App Started, App Step 2 |
            | user gender              | gender                                                                 | regexp named | App Started, App Step 2 |
            | user age                 | age                                                                    | regexp named | App Started, App Step 2 |
            | global application       | payroll portability                                                    | string       | App Started, App Step 2 |
            | application name         | portabilidad nomina                                                    | string       | App Started, App Step 2 |
            | application type         | contratacion                                                           | string       | App Started, App Step 2 |
            | application typology     | flujo normal                                                           | string       | App Started, App Step 2 |
            | application step         | iniciar                                                                | string       | App Started             |
            | application step         | 2 fecha de nacimiento                                                  | string       | App Step 2              |
            | fulfillment model        | online                                                                 | string       | App Started, App Step 2 |
            | product primary category | cuentas                                                                | string       | App Started, App Step 2 |
            | product name             | cuenta nomina                                                          | string       | App Started, App Step 2 |
            | internal campaign        |                                                                        | empty array  | App Started, App Step 2 |
            | optimization attributes  |                                                                        | empty array  | App Started, App Step 2 |

    @ANA_OCPPO003
    @analytics
    @ios @android @web
    @backend(test) @MX @vbank
    @tmpExclude @JIRA.GLOMOMX-254311
    Scenario: OC Payroll Portability - App step 3
        Given a user with the following criteria
            | criteria                        |
            | payroll portability one account |
        And the user goes to the payroll portability operation
        And the user start oc payroll portability process
        When the user "confirms" his birth date
        Then the device contains the following variables
            | item                     | value                                                            | type         |
            | analytics                | analytics/glomo_base                                             | json schema  |
            | version DL               | 20250414_5.0                                                     | string       |
            | page name                | app:privada:personas:cuentas:portabilidad nomina:3 nomina origen | string       |
            | level 1                  | cuentas                                                          | string       |
            | level 2                  | portabilidad nomina                                              | string       |
            | level 3                  | 3 nomina origen                                                  | string       |
            | language                 | ES                                                               | string       |
            | page area                | privada                                                          | string       |
            | page intent              | transaccion                                                      | string       |
            | channel                  | online                                                           | string       |
            | page instance ID         | de                                                               | string       |
            | page info version        | appVersion                                                       | regexp named |
            | page segment             | personas                                                         | string       |
            | sysEnv                   | app                                                              | string       |
            | business unit            | BBVA Mexico                                                      | string       |
            | site app name            | App BBVA Mexico                                                  | string       |
            | project name             | Glomo                                                            | string       |
            | device mobile            | si                                                               | string       |
            | user userState           | logado                                                           | string       |
            | user segment global      | 003001                                                           | string       |
            | profile ID               | profileID                                                        | regexp named |
            | user gender              | gender                                                           | regexp named |
            | user age                 | age                                                              | regexp named |
            | global application       | payroll portability                                              | string       |
            | application name         | portabilidad nomina                                              | string       |
            | application type         | contratacion                                                     | string       |
            | application typology     | flujo normal                                                     | string       |
            | application step         | 3 nomina origen                                                  | string       |
            | fulfillment model        | online                                                           | string       |
            | product primary category | cuentas                                                          | string       |
            | product name             | cuenta nomina                                                    | string       |
            | internal campaign        |                                                                  | empty array  |
            | optimization attributes  |                                                                  | empty array  |

    @ANA_OCPPO004
    @analytics
    @ios @android @web
    @backend(test) @MX @vbank
    @tmpExclude @JIRA.GLOMOMX-254311
    Scenario: OC Payroll Portability - Huella Page View
        Given a user with the following criteria
            | criteria                        |
            | payroll portability one account |
        And the user goes to the payroll portability operation
        And the user start oc payroll portability process
        And the user "confirms" his birth date
        When the user enter "card number" and select bank to oc payroll portability
        Then the device contains the following variables
            | item                    | value                                                                | type             |
            | analytics               | analytics/glomo_base                                                 | json schema      |
            | version DL              | 20250414_5.0                                                         | string           |
            | page name               | app:privada:personas:cuentas:portabilidad nomina:seleccion de cuenta | string           |
            | level 1                 | cuentas                                                              | string           |
            | level 2                 | portabilidad nomina                                                  | string           |
            | level 3                 | seleccion de cuenta                                                  | string           |
            | language                | ES                                                                   | string           |
            | page area               | privada                                                              | string           |
            | page intent             | transaccion                                                          | string           |
            | channel                 | online                                                               | string           |
            | page instance ID        | de                                                                   | string           |
            | page info version       | appVersion                                                           | regexp named     |
            | page segment            | personas                                                             | string           |
            | sysEnv                  | app                                                                  | string           |
            | business unit           | BBVA Mexico                                                          | string           |
            | site app name           | App BBVA Mexico                                                      | string           |
            | project name            | Glomo                                                                | string           |
            | device mobile           | si                                                                   | string           |
            | user userState          | logado                                                               | string           |
            | user segment global     | 003001                                                               | string           |
            | profile ID              | profileID                                                            | regexp named     |
            | user gender             | gender                                                               | regexp named     |
            | user age                | age                                                                  | regexp named     |
            | internal campaign       |                                                                      | empty array      |
            | optimization attributes |                                                                      | empty array      |
            | application             |                                                                      | empty str object |
            | products attributes     |                                                                      | empty array      |

    @ANA_OCPPO005
    @analytics
    @ios @android @web
    @backend(test) @MX @vbank
    @tmpExclude @JIRA.GLOMOMX-254311
    Scenario: OC Payroll Portability - App step 4
        Given a user with the following criteria
            | criteria                        |
            | payroll portability one account |
        And the user goes to the payroll portability operation
        And the user start oc payroll portability process
        And the user "confirms" his birth date
        And the user enter "card number" and select bank to oc payroll portability
        When the user selects "unique" account to oc payroll portability
        Then the device contains the following variables
            | item                     | value                                                                     | type         |
            | analytics                | analytics/glomo_base                                                      | json schema  |
            | version DL               | 20250414_5.0                                                              | string       |
            | page name                | app:privada:personas:cuentas:portabilidad nomina:4 terminos y condiciones | string       |
            | level 1                  | cuentas                                                                   | string       |
            | level 2                  | portabilidad nomina                                                       | string       |
            | level 3                  | 4 terminos y condiciones                                                  | string       |
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
            | global application       | payroll portability                                                       | string       |
            | application name         | portabilidad nomina                                                       | string       |
            | application type         | contratacion                                                              | string       |
            | application typology     | flujo normal                                                              | string       |
            | application step         | 4 terminos y condiciones                                                  | string       |
            | fulfillment model        | online                                                                    | string       |
            | product primary category | cuentas                                                                   | string       |
            | product name             | cuenta nomina                                                             | string       |
            | internal campaign        |                                                                           | empty array  |
            | optimization attributes  |                                                                           | empty array  |

    @ANA_OCPPO006
    @analytics
    @ios @android @web
    @backend(test) @MX @vbank
    @tmpExclude @JIRA.GLOMOMX-254311
    Scenario: OC Payroll Portability - App step 5
        Given a user with the following criteria
            | criteria                        |
            | payroll portability one account |
        And the user goes to the payroll portability operation
        And the user start oc payroll portability process
        And the user "confirms" his birth date
        And the user enter "card number" and select bank to oc payroll portability
        And the user selects "unique" account to oc payroll portability
        When the user accepts payroll terms and conditions
        Then the device contains the following variables
            | item                     | value                                                           | type         |
            | analytics                | analytics/glomo_base                                            | json schema  |
            | version DL               | 20250414_5.0                                                    | string       |
            | page name                | app:privada:personas:cuentas:portabilidad nomina:5 confirmacion | string       |
            | level 1                  | cuentas                                                         | string       |
            | level 2                  | portabilidad nomina                                             | string       |
            | level 3                  | 5 confirmacion                                                  | string       |
            | language                 | ES                                                              | string       |
            | page area                | privada                                                         | string       |
            | page intent              | transaccion                                                     | string       |
            | channel                  | online                                                          | string       |
            | page instance ID         | de                                                              | string       |
            | page info version        | appVersion                                                      | regexp named |
            | page segment             | personas                                                        | string       |
            | sysEnv                   | app                                                             | string       |
            | business unit            | BBVA Mexico                                                     | string       |
            | site app name            | App BBVA Mexico                                                 | string       |
            | project name             | Glomo                                                           | string       |
            | device mobile            | si                                                              | string       |
            | user userState           | logado                                                          | string       |
            | user segment global      | 003001                                                          | string       |
            | profile ID               | profileID                                                       | regexp named |
            | user gender              | gender                                                          | regexp named |
            | user age                 | age                                                             | regexp named |
            | global application       | payroll portability                                             | string       |
            | application name         | portabilidad nomina                                             | string       |
            | application type         | contratacion                                                    | string       |
            | application typology     | flujo normal                                                    | string       |
            | application step         | 5 confirmacion                                                  | string       |
            | fulfillment model        | online                                                          | string       |
            | product primary category | cuentas                                                         | string       |
            | product name             | cuenta nomina                                                   | string       |
            | internal campaign        |                                                                 | empty array  |
            | optimization attributes  |                                                                 | empty array  |

    @ANA_OCPPO007
    @analytics
    @ios @android @web
    @backend(test) @MX @vbank
    @tmpExclude @JIRA.GLOMOMX-254311
    Scenario: OC Payroll Portability - App step 6
        Given a user with the following criteria
            | criteria                        |
            | payroll portability one account |
        And the user goes to the payroll portability operation
        When the user request the payroll portability offer with the "unique" account
        Then the device contains the following variables
            | item                     | value                                                  | type         |
            | analytics                | analytics/glomo_base                                   | json schema  |
            | version DL               | 20250414_5.0                                           | string       |
            | page name                | app:privada:personas:cuentas:portabilidad nomina:6 otp | string       |
            | level 1                  | cuentas                                                | string       |
            | level 2                  | portabilidad nomina                                    | string       |
            | level 3                  | 6 otp                                                  | string       |
            | language                 | ES                                                     | string       |
            | page area                | privada                                                | string       |
            | page intent              | transaccion                                            | string       |
            | channel                  | online                                                 | string       |
            | page instance ID         | de                                                     | string       |
            | page info version        | appVersion                                             | regexp named |
            | page segment             | personas                                               | string       |
            | sysEnv                   | app                                                    | string       |
            | business unit            | BBVA Mexico                                            | string       |
            | site app name            | App BBVA Mexico                                        | string       |
            | project name             | Glomo                                                  | string       |
            | device mobile            | si                                                     | string       |
            | user userState           | logado                                                 | string       |
            | user segment global      | 003001                                                 | string       |
            | profile ID               | profileID                                              | regexp named |
            | user gender              | gender                                                 | regexp named |
            | user age                 | age                                                    | regexp named |
            | global application       | payroll portability                                    | string       |
            | application name         | portabilidad nomina                                    | string       |
            | application type         | contratacion                                           | string       |
            | application typology     | flujo normal                                           | string       |
            | application step         | 6 otp                                                  | string       |
            | fulfillment model        | online                                                 | string       |
            | product primary category | cuentas                                                | string       |
            | product name             | cuenta nomina                                          | string       |
            | internal campaign        |                                                        | empty array  |
            | optimization attributes  |                                                        | empty array  |

    @ANA_OCPPO008
    @analytics
    @ios @android @web
    @backend(test) @MX @vbank
    @tmpExclude @JIRA.GLOMOMX-254311
    Scenario: OC Payroll Portability - App Completed (Approved)
        Given a user with the following criteria
            | criteria                        |
            | payroll portability one account |
        And the user goes to the payroll portability operation
        And the user request the payroll portability offer with the "unique" account
        When the user signs oc payroll portability operation
        Then the device contains the following variables
            | item                         | value                                                           | type         |
            | analytics                    | analytics/glomo_base                                            | json schema  |
            | version DL                   | 20250414_5.0                                                    | string       |
            | page name                    | app:privada:personas:cuentas:portabilidad nomina:pagina exitosa | string       |
            | level 1                      | cuentas                                                         | string       |
            | level 2                      | portabilidad nomina                                             | string       |
            | level 3                      | pagina exitosa                                                  | string       |
            | language                     | ES                                                              | string       |
            | page area                    | privada                                                         | string       |
            | page intent                  | transaccion                                                     | string       |
            | channel                      | online                                                          | string       |
            | page instance ID             | de                                                              | string       |
            | page info version            | appVersion                                                      | regexp named |
            | page segment                 | personas                                                        | string       |
            | sysEnv                       | app                                                             | string       |
            | business unit                | BBVA Mexico                                                     | string       |
            | site app name                | App BBVA Mexico                                                 | string       |
            | project name                 | Glomo                                                           | string       |
            | device mobile                | si                                                              | string       |
            | user userState               | logado                                                          | string       |
            | user segment global          | 003001                                                          | string       |
            | profile ID                   | profileID                                                       | regexp named |
            | user gender                  | gender                                                          | regexp named |
            | user age                     | age                                                             | regexp named |
            | global application           | payroll portability                                             | string       |
            | application name             | portabilidad nomina                                             | string       |
            | application type             | contratacion                                                    | string       |
            | application typology         | flujo normal                                                    | string       |
            | application step             | pagina exitosa                                                  | string       |
            | application state            | aprobado                                                        | string       |
            | application operation number | 8238273                                                         | string       |
            | fulfillment model            | online                                                          | string       |
            | product primary category     | cuentas                                                         | string       |
            | product name                 | cuenta nomina                                                   | string       |
            | product state                | aprobado                                                        | string       |
            | internal campaign            |                                                                 | empty array  |
            | optimization attributes      |                                                                 | empty array  |

    @ANA_OCPPO009
    @analytics
    @ios @android @web
    @backend(test) @MX @vbank
    @tmpExclude @JIRA.GLOMOMX-254311
    Scenario: OC Payroll Portability - App Completed (Wrong birth date)
        Given a user with the following criteria
            | criteria                        |
            | payroll portability one account |
        And the user goes to the payroll portability operation
        And the user start oc payroll portability process
        When the user "rejects" his birth date
        Then the device contains the following variables
            | item                     | value                                                           | type         |
            | analytics                | analytics/glomo_base                                            | json schema  |
            | version DL               | 20250414_5.0                                                    | string       |
            | page name                | app:privada:personas:cuentas:portabilidad nomina:pagina exitosa | string       |
            | level 1                  | cuentas                                                         | string       |
            | level 2                  | portabilidad nomina                                             | string       |
            | level 3                  | pagina exitosa                                                  | string       |
            | language                 | ES                                                              | string       |
            | page area                | privada                                                         | string       |
            | page intent              | transaccion                                                     | string       |
            | channel                  | online                                                          | string       |
            | page instance ID         | de                                                              | string       |
            | page info version        | appVersion                                                      | regexp named |
            | page segment             | personas                                                        | string       |
            | sysEnv                   | app                                                             | string       |
            | business unit            | BBVA Mexico                                                     | string       |
            | site app name            | App BBVA Mexico                                                 | string       |
            | project name             | Glomo                                                           | string       |
            | device mobile            | si                                                              | string       |
            | user userState           | logado                                                          | string       |
            | user segment global      | 003001                                                          | string       |
            | profile ID               | profileID                                                       | regexp named |
            | user gender              | gender                                                          | regexp named |
            | user age                 | age                                                             | regexp named |
            | user segment profile     | fecha de nacimiento incorrecta                                  | string       |
            | global application       | payroll portability                                             | string       |
            | application name         | portabilidad nomina                                             | string       |
            | application type         | contratacion                                                    | string       |
            | application typology     | flujo normal                                                    | string       |
            | application step         | pagina exitosa                                                  | string       |
            | application state        | rechazado                                                       | string       |
            | fulfillment model        | online                                                          | string       |
            | product primary category | cuentas                                                         | string       |
            | product name             | cuenta nomina                                                   | string       |
            | product state            | rechazado                                                       | string       |
            | internal campaign        |                                                                 | empty array  |
            | optimization attributes  |                                                                 | empty array  |

    @ANA_OCPPO010
    @analytics
    @ios @android @web
    @backend(test) @MX @vbank
    @tmpExclude @JIRA.GLOMOMX-254311
    Scenario: OC Payroll Portability - App Completed (Payroll in progress)
        Given a user with the following criteria
            | criteria                        |
            | payroll portability one account |
        And the user goes to the payroll portability operation
        And the user request the payroll portability offer with the "unique" account
        When the user signs oc payroll portability operation with payroll in progress
        Then the device contains the following variables
            | item                         | value                                                           | type         |
            | analytics                    | analytics/glomo_base                                            | json schema  |
            | version DL                   | 20250414_5.0                                                    | string       |
            | page name                    | app:privada:personas:cuentas:portabilidad nomina:pagina exitosa | string       |
            | level 1                      | cuentas                                                         | string       |
            | level 2                      | portabilidad nomina                                             | string       |
            | level 3                      | pagina exitosa                                                  | string       |
            | language                     | ES                                                              | string       |
            | page area                    | privada                                                         | string       |
            | page intent                  | transaccion                                                     | string       |
            | channel                      | online                                                          | string       |
            | page instance ID             | de                                                              | string       |
            | page info version            | appVersion                                                      | regexp named |
            | page segment                 | personas                                                        | string       |
            | sysEnv                       | app                                                             | string       |
            | business unit                | BBVA Mexico                                                     | string       |
            | site app name                | App BBVA Mexico                                                 | string       |
            | project name                 | Glomo                                                           | string       |
            | device mobile                | si                                                              | string       |
            | user userState               | logado                                                          | string       |
            | user segment global          | 003001                                                          | string       |
            | profile ID                   | profileID                                                       | regexp named |
            | user gender                  | gender                                                          | regexp named |
            | user age                     | age                                                             | regexp named |
            | user segment profile         | portabilidad de nomina activada                                 | string       |
            | global application           | payroll portability                                             | string       |
            | application name             | portabilidad nomina                                             | string       |
            | application type             | contratacion                                                    | string       |
            | application typology         | flujo normal                                                    | string       |
            | application step             | pagina exitosa                                                  | string       |
            | application state            | rechazado                                                       | string       |
            | fulfillment model            | online                                                          | string       |
            | product primary category     | cuentas                                                         | string       |
            | product name                 | cuenta nomina                                                   | string       |
            | product state                | rechazado                                                       | string       |
            | internal campaign            |                                                                 | empty array  |
            | optimization attributes      |                                                                 | empty array  |

@ocPayrollAdvanceAnalytics
Feature: Analytics - OC Payroll Advance

    @ANA_OPA001
    @analytics
    @web
    @web-done
    @MX @vbank @backend(test)
    Scenario: OC Payroll Advance - APP PAGE VISIT
        Given the user "5529391074" and "password00"
        And the user accesses contract product section
        And the analytics interceptor service is initiated
        When the user accesses to the payroll advance operation "without callme back"
        Then the analytics events contains the following variables:
            | item                     | value                                                    | type         | event          |
            | analytics                | analytics/glomo_base                                     | json schema  | App Page Visit |
            | version DL               | 20250414_5.0                                             | string       | App Page Visit |
            | page name                | app:privada:personas:prestamos:adelanto sueldo:1 detalle | string       | App Page Visit |
            | level 1                  | prestamos                                                | string       | App Page Visit |
            | level 2                  | adelanto sueldo                                          | string       | App Page Visit |
            | level 3                  | 1 detalle                                                | string       | App Page Visit |
            | language                 | ES                                                       | string       | App Page Visit |
            | page area                | privada                                                  | string       | App Page Visit |
            | page intent              | transaccion                                              | string       | App Page Visit |
            | channel                  | online                                                   | string       | App Page Visit |
            | page instance ID         | de                                                       | string       | App Page Visit |
            | page info version        | appVersion                                               | regexp named | App Page Visit |
            | page segment             | personas                                                 | string       | App Page Visit |
            | sysEnv                   | app                                                      | string       | App Page Visit |
            | business unit            | BBVA Mexico                                              | string       | App Page Visit |
            | site app name            | App BBVA Mexico                                          | string       | App Page Visit |
            | project name             | DIY E2E Sales                                            | string       | App Page Visit |
            | device mobile            | si                                                       | string       | App Page Visit |
            | user userState           | logado                                                   | string       | App Page Visit |
            | user segment global      | 003001                                                   | string       | App Page Visit |
            | profile ID               | profileID                                                | regexp named | App Page Visit |
            | user gender              | gender                                                   | regexp named | App Page Visit |
            | user age                 | age                                                      | regexp named | App Page Visit |
            | global application       | payroll advance                                          | string       | App Page Visit |
            | application name         | adelanto sueldo                                          | string       | App Page Visit |
            | application type         | contratacion                                             | string       | App Page Visit |
            | fulfillment model        | online/offline                                           | string       | App Page Visit |
            | application step         | 1 detalle                                                | string       | App Page Visit |
            | product primary category | prestamos                                                | string       | App Page Visit |
            | product name             | adelanto sueldo                                          | string       | App Page Visit |
            | internal campaign        |                                                          | empty array  | App Page Visit |
            | optimization attributes  |                                                          | empty array  | App Page Visit |

    @ANA_OPA002
    @analytics
    @web
    @web-done
    @MX @vbank @backend(test)
    Scenario: OC Payroll Advance - APP STARTED (Step: 'monto')
        Given the user "5529391074" and "password00"
        And the user accesses to the payroll advance operation "without callme back"
        And the analytics interceptor service is initiated
        When the user modifies the suggested amount for an amount of "200"
        Then the analytics events contains the following variables:
            | item                     | value                                                    | type         | event       |
            | analytics                | analytics/glomo_base                                     | json schema  | App Started |
            | version DL               | 20250414_5.0                                             | string       | App Started |
            | page name                | app:privada:personas:prestamos:adelanto sueldo:1 detalle | string       | App Started |
            | level 1                  | prestamos                                                | string       | App Started |
            | level 2                  | adelanto sueldo                                          | string       | App Started |
            | level 3                  | 1 detalle                                                | string       | App Started |
            | language                 | ES                                                       | string       | App Started |
            | page area                | privada                                                  | string       | App Started |
            | page intent              | transaccion                                              | string       | App Started |
            | channel                  | online                                                   | string       | App Started |
            | page instance ID         | de                                                       | string       | App Started |
            | page info version        | appVersion                                               | regexp named | App Started |
            | page segment             | personas                                                 | string       | App Started |
            | sysEnv                   | app                                                      | string       | App Started |
            | business unit            | BBVA Mexico                                              | string       | App Started |
            | site app name            | App BBVA Mexico                                          | string       | App Started |
            | project name             | DIY E2E Sales                                            | string       | App Started |
            | device mobile            | si                                                       | string       | App Started |
            | user userState           | logado                                                   | string       | App Started |
            | user segment global      | 003001                                                   | string       | App Started |
            | profile ID               | profileID                                                | regexp named | App Started |
            | user gender              | gender                                                   | regexp named | App Started |
            | user age                 | age                                                      | regexp named | App Started |
            | global application       | payroll advance                                          | string       | App Started |
            | application name         | adelanto sueldo                                          | string       | App Started |
            | application type         | contratacion                                             | string       | App Started |
            | fulfillment model        | online/offline                                           | string       | App Started |
            | application step         | monto                                                    | string       | App Started |
            | product primary category | prestamos                                                | string       | App Started |
            | product name             | adelanto sueldo                                          | string       | App Started |
            | internal campaign        |                                                          | empty array  | App Started |
            | optimization attributes  |                                                          | empty array  | App Started |

    @ANA_OPA003
    @analytics
    @web
    @web-done
    @MX @vbank @backend(test)
    Scenario: OC Payroll Advance - APP STEP 2
        Given the user "5529391074" and "password00"
        And the user accesses to the payroll advance operation "without callme back"
        And the analytics interceptor service is initiated
        When the user accepts amount
        Then the analytics events contains the following variables:
            | item                       | value                                                                   | type         | event      |
            | analytics                  | analytics/glomo_base                                                    | json schema  | App Step 2 |
            | version DL                 | 20250414_5.0                                                            | string       | App Step 2 |
            | page name                  | app:privada:personas:prestamos:adelanto sueldo:2 terminos y condiciones | string       | App Step 2 |
            | level 1                    | prestamos                                                               | string       | App Step 2 |
            | level 2                    | adelanto sueldo                                                         | string       | App Step 2 |
            | level 3                    | 2 terminos y condiciones                                                | string       | App Step 2 |
            | language                   | ES                                                                      | string       | App Step 2 |
            | page area                  | privada                                                                 | string       | App Step 2 |
            | page intent                | transaccion                                                             | string       | App Step 2 |
            | channel                    | online                                                                  | string       | App Step 2 |
            | page instance ID           | de                                                                      | string       | App Step 2 |
            | page info version          | appVersion                                                              | regexp named | App Step 2 |
            | page segment               | personas                                                                | string       | App Step 2 |
            | sysEnv                     | app                                                                     | string       | App Step 2 |
            | business unit              | BBVA Mexico                                                             | string       | App Step 2 |
            | site app name              | App BBVA Mexico                                                         | string       | App Step 2 |
            | project name               | DIY E2E Sales                                                           | string       | App Step 2 |
            | device mobile              | si                                                                      | string       | App Step 2 |
            | user userState             | logado                                                                  | string       | App Step 2 |
            | user segment global        | 003001                                                                  | string       | App Step 2 |
            | profile ID                 | profileID                                                               | regexp named | App Step 2 |
            | user gender                | gender                                                                  | regexp named | App Step 2 |
            | user age                   | age                                                                     | regexp named | App Step 2 |
            | global application         | payroll advance                                                         | string       | App Step 2 |
            | application name           | adelanto sueldo                                                         | string       | App Step 2 |
            | application type           | contratacion                                                            | string       | App Step 2 |
            | fulfillment model          | online/offline                                                          | string       | App Step 2 |
            | application step           | 2 terminos y condiciones                                                | string       | App Step 2 |
            | product primary category   | prestamos                                                               | string       | App Step 2 |
            | product name               | adelanto sueldo                                                         | string       | App Step 2 |
            | product amount             | 429                                                                     | number       | App Step 2 |
            | product payment amount     | 107.25                                                                  | number       | App Step 2 |
            | product number of payments | 2                                                                       | number       | App Step 2 |
            | product interest rate      | 6                                                                       | number       | App Step 2 |
            | product currency           | MXN                                                                     | string       | App Step 2 |

    @ANA_OPA004
    @analytics
    @web
    @web-done
    @MX @vbank @backend(test)
    Scenario: OC Payroll Advance - APP STEP 3
        Given the user "5529391074" and "password00"
        And the user accesses to the payroll advance operation "without callme back"
        And the analytics interceptor service is initiated
        When the user accepts checklist conditions
        Then the analytics events contains the following variables:
            | item                       | value                                                         | type         | event      |
            | analytics                  | analytics/glomo_base                                          | json schema  | App Step 3 |
            | version DL                 | 20250414_5.0                                                  | string       | App Step 3 |
            | page name                  | app:privada:personas:prestamos:adelanto sueldo:3 confirmacion | string       | App Step 3 |
            | level 1                    | prestamos                                                     | string       | App Step 3 |
            | level 2                    | adelanto sueldo                                               | string       | App Step 3 |
            | level 3                    | 3 confirmacion                                                | string       | App Step 3 |
            | language                   | ES                                                            | string       | App Step 3 |
            | page area                  | privada                                                       | string       | App Step 3 |
            | page intent                | transaccion                                                   | string       | App Step 3 |
            | channel                    | online                                                        | string       | App Step 3 |
            | page instance ID           | de                                                            | string       | App Step 3 |
            | page info version          | appVersion                                                    | regexp named | App Step 3 |
            | page segment               | personas                                                      | string       | App Step 3 |
            | sysEnv                     | app                                                           | string       | App Step 3 |
            | business unit              | BBVA Mexico                                                   | string       | App Step 3 |
            | site app name              | App BBVA Mexico                                               | string       | App Step 3 |
            | project name               | DIY E2E Sales                                                 | string       | App Step 3 |
            | device mobile              | si                                                            | string       | App Step 3 |
            | user userState             | logado                                                        | string       | App Step 3 |
            | user segment global        | 003001                                                        | string       | App Step 3 |
            | profile ID                 | profileID                                                     | regexp named | App Step 3 |
            | user gender                | gender                                                        | regexp named | App Step 3 |
            | user age                   | age                                                           | regexp named | App Step 3 |
            | global application         | payroll advance                                               | string       | App Step 3 |
            | application name           | adelanto sueldo                                               | string       | App Step 3 |
            | application type           | contratacion                                                  | string       | App Step 3 |
            | fulfillment model          | online/offline                                                | string       | App Step 3 |
            | application step           | 3 confirmacion                                                | string       | App Step 3 |
            | product primary category   | prestamos                                                     | string       | App Step 3 |
            | product name               | adelanto sueldo                                               | string       | App Step 3 |
            | product amount             | 429                                                           | number       | App Step 3 |
            | product payment amount     | 107.25                                                        | number       | App Step 3 |
            | product number of payments | 2                                                             | number       | App Step 3 |
            | product interest rate      | 6                                                             | number       | App Step 3 |
            | product currency           | MXN                                                           | string       | App Step 3 |

    @ANA_OPA005
    @analytics
    @web
    @web-done
    @MX @vbank @backend(test)
    Scenario: OC Payroll Advance - APP STEP 4
        Given the user "5529391074" and "password00"
        And the user accesses to the payroll advance operation "without callme back"
        And the analytics interceptor service is initiated
        When the user accepts payroll terms
        Then the analytics events contains the following variables:
            | item                       | value                                                | type         | event      |
            | analytics                  | analytics/glomo_base                                 | json schema  | App Step 4 |
            | version DL                 | 20250414_5.0                                         | string       | App Step 4 |
            | page name                  | app:privada:personas:prestamos:adelanto sueldo:4 otp | string       | App Step 4 |
            | level 1                    | prestamos                                            | string       | App Step 4 |
            | level 2                    | adelanto sueldo                                      | string       | App Step 4 |
            | level 3                    | 4 otp                                                | string       | App Step 4 |
            | language                   | ES                                                   | string       | App Step 4 |
            | page area                  | privada                                              | string       | App Step 4 |
            | page intent                | transaccion                                          | string       | App Step 4 |
            | channel                    | online                                               | string       | App Step 4 |
            | page instance ID           | de                                                   | string       | App Step 4 |
            | page info version          | appVersion                                           | regexp named | App Step 4 |
            | page segment               | personas                                             | string       | App Step 4 |
            | sysEnv                     | app                                                  | string       | App Step 4 |
            | business unit              | BBVA Mexico                                          | string       | App Step 4 |
            | site app name              | App BBVA Mexico                                      | string       | App Step 4 |
            | project name               | DIY E2E Sales                                        | string       | App Step 4 |
            | device mobile              | si                                                   | string       | App Step 4 |
            | user userState             | logado                                               | string       | App Step 4 |
            | user segment global        | 003001                                               | string       | App Step 4 |
            | profile ID                 | profileID                                            | regexp named | App Step 4 |
            | user gender                | gender                                               | regexp named | App Step 4 |
            | user age                   | age                                                  | regexp named | App Step 4 |
            | global application         | payroll advance                                      | string       | App Step 4 |
            | application name           | adelanto sueldo                                      | string       | App Step 4 |
            | application type           | contratacion                                         | string       | App Step 4 |
            | fulfillment model          | online/offline                                       | string       | App Step 4 |
            | application step           | 4 otp                                                | string       | App Step 4 |
            | product primary category   | prestamos                                            | string       | App Step 4 |
            | product name               | adelanto sueldo                                      | string       | App Step 4 |
            | product amount             | 429                                                  | number       | App Step 4 |
            | product payment amount     | 107.25                                               | number       | App Step 4 |
            | product number of payments | 2                                                    | number       | App Step 4 |
            | product interest rate      | 6                                                    | number       | App Step 4 |
            | product currency           | MXN                                                  | string       | App Step 4 |

    @ANA_OPA006
    @analytics
    @web
    @web-done
    @MX @vbank @backend(test)
    Scenario: OC Payroll Advance - APP COMPLETED
        Given the user "5529391074" and "password00"
        And the user accesses to the payroll advance operation "without callme back"
        And the user accepts payroll terms
        And the analytics interceptor service is initiated
        When the user confirms the sms key to finalize the payroll advance
        Then the analytics events contains the following variables:
            | item                         | value                                                         | type         | event         |
            | analytics                    | analytics/glomo_base                                          | json schema  | App Completed |
            | version DL                   | 20250414_5.0                                                  | string       | App Completed |
            | page name                    | app:privada:personas:prestamos:adelanto sueldo:pagina exitosa | string       | App Completed |
            | level 1                      | prestamos                                                     | string       | App Completed |
            | level 2                      | adelanto sueldo                                               | string       | App Completed |
            | level 3                      | pagina exitosa                                                | string       | App Completed |
            | language                     | ES                                                            | string       | App Completed |
            | page area                    | privada                                                       | string       | App Completed |
            | page intent                  | transaccion                                                   | string       | App Completed |
            | channel                      | online                                                        | string       | App Completed |
            | page instance ID             | de                                                            | string       | App Completed |
            | page info version            | appVersion                                                    | regexp named | App Completed |
            | page segment                 | personas                                                      | string       | App Completed |
            | sysEnv                       | app                                                           | string       | App Completed |
            | business unit                | BBVA Mexico                                                   | string       | App Completed |
            | site app name                | App BBVA Mexico                                               | string       | App Completed |
            | project name                 | DIY E2E Sales                                                 | string       | App Completed |
            | device mobile                | si                                                            | string       | App Completed |
            | user userState               | logado                                                        | string       | App Completed |
            | user segment global          | 003001                                                        | string       | App Completed |
            | profile ID                   | profileID                                                     | regexp named | App Completed |
            | user gender                  | gender                                                        | regexp named | App Completed |
            | user age                     | age                                                           | regexp named | App Completed |
            | global application           | payroll advance                                               | string       | App Completed |
            | application name             | adelanto sueldo                                               | string       | App Completed |
            | application type             | contratacion                                                  | string       | App Completed |
            | fulfillment model            | online/offline                                                | string       | App Completed |
            | application step             | pagina exitosa                                                | string       | App Completed |
            | application state            | contratado                                                    | string       | App Completed |
            | application operation number | 0499379868                                                    | string       | App Completed |
            | product primary category     | prestamos                                                     | string       | App Completed |
            | product name                 | adelanto sueldo                                               | string       | App Completed |
            | product amount               | 429                                                           | number       | App Completed |
            | product payment amount       | 107.25                                                        | number       | App Completed |
            | product number of payments   | 2                                                             | number       | App Completed |
            | product interest rate        | 6                                                             | number       | App Completed |
            | product currency             | MXN                                                           | string       | App Completed |

    @ANA_OPA007
    @analytics
    @web
    @web-done
    @MX @vbank @backend(test)
    Scenario: OC Payroll Advance - MARK COMMISSION
        Given the user "5529391074" and "password00"
        And the user accesses to the payroll advance operation "without callme back"
        And the analytics interceptor service is initiated
        When the user open tooltip commission information
        Then the analytics events contains the following variables:
            | item                | value                                                                          | type         | event     |
            | analytics           | analytics/glomo_base                                                           | json schema  | Page View |
            | version DL          | 20250414_5.0                                                                   | string       | Page View |
            | page name           | app:privada:personas:prestamos:adelanto sueldo:1 detalle:comision por apertura | string       | Page View |
            | level 1             | prestamos                                                                      | string       | Page View |
            | level 2             | adelanto sueldo                                                                | string       | Page View |
            | level 3             | 1 detalle                                                                      | string       | Page View |
            | level 4             | comision por apertura                                                          | string       | Page View |
            | language            | ES                                                                             | string       | Page View |
            | page area           | privada                                                                        | string       | Page View |
            | page intent         | transaccion                                                                    | string       | Page View |
            | channel             | online                                                                         | string       | Page View |
            | page instance ID    | de                                                                             | string       | Page View |
            | page info version   | appVersion                                                                     | regexp named | Page View |
            | page segment        | personas                                                                       | string       | Page View |
            | sysEnv              | app                                                                            | string       | Page View |
            | business unit       | BBVA Mexico                                                                    | string       | Page View |
            | site app name       | App BBVA Mexico                                                                | string       | Page View |
            | project name        | DIY E2E Sales                                                                  | string       | Page View |
            | device mobile       | si                                                                             | string       | Page View |
            | user userState      | logado                                                                         | string       | Page View |
            | user segment global | 003001                                                                         | string       | Page View |
            | profile ID          | profileID                                                                      | regexp named | Page View |
            | user gender         | gender                                                                         | regexp named | Page View |
            | user age            | age                                                                            | regexp named | Page View |

    @ANA_OPA008
    @analytics
    @web
    @web-done
    @MX @vbank @backend(test)
    Scenario: OC Payroll Advance - MARK CAT
        Given the user "5529391074" and "password00"
        And the user accesses to the payroll advance operation "without callme back"
        And the analytics interceptor service is initiated
        When the user open tooltip cat information
        Then the analytics events contains the following variables:
            | item                | value                                                                      | type         | event     |
            | analytics           | analytics/glomo_base                                                       | json schema  | Page View |
            | version DL          | 20250414_5.0                                                               | string       | Page View |
            | page name           | app:privada:personas:prestamos:adelanto sueldo:1 detalle:costo anual total | string       | Page View |
            | level 1             | prestamos                                                                  | string       | Page View |
            | level 2             | adelanto sueldo                                                            | string       | Page View |
            | level 3             | 1 detalle                                                                  | string       | Page View |
            | level 4             | costo anual total                                                          | string       | Page View |
            | language            | ES                                                                         | string       | Page View |
            | page area           | privada                                                                    | string       | Page View |
            | page intent         | transaccion                                                                | string       | Page View |
            | channel             | online                                                                     | string       | Page View |
            | page instance ID    | de                                                                         | string       | Page View |
            | page info version   | appVersion                                                                 | regexp named | Page View |
            | page segment        | personas                                                                   | string       | Page View |
            | sysEnv              | app                                                                        | string       | Page View |
            | business unit       | BBVA Mexico                                                                | string       | Page View |
            | site app name       | App BBVA Mexico                                                            | string       | Page View |
            | project name        | DIY E2E Sales                                                              | string       | Page View |
            | device mobile       | si                                                                         | string       | Page View |
            | user userState      | logado                                                                     | string       | Page View |
            | user segment global | 003001                                                                     | string       | Page View |
            | profile ID          | profileID                                                                  | regexp named | Page View |
            | user gender         | gender                                                                     | regexp named | Page View |
            | user age            | age                                                                        | regexp named | Page View |

    @ANA_OPA009
    @analytics
    @web
    @web-done
    @MX @vbank @backend(test)
    Scenario: OC Payroll Advance - MARK BUREAU
        Given the user "5529391074" and "password00"
        And the user accesses to the payroll advance operation "without callme back"
        And the user accepts amount
        And the analytics interceptor service is initiated
        When the user accesses modal bureau
        Then the analytics events contains the following variables:
            | item                | value                                                                                  | type         | event     |
            | analytics           | analytics/glomo_base                                                                   | json schema  | Page View |
            | version DL          | 20250414_5.0                                                                           | string       | Page View |
            | page name           | app:privada:personas:prestamos:adelanto sueldo:2 terminos y condiciones:historial buro | string       | Page View |
            | level 1             | prestamos                                                                              | string       | Page View |
            | level 2             | adelanto sueldo                                                                        | string       | Page View |
            | level 3             | 2 terminos y condiciones                                                               | string       | Page View |
            | level 4             | historial buro                                                                         | string       | Page View |
            | language            | ES                                                                                     | string       | Page View |
            | page area           | privada                                                                                | string       | Page View |
            | page intent         | transaccion                                                                            | string       | Page View |
            | channel             | online                                                                                 | string       | Page View |
            | page instance ID    | de                                                                                     | string       | Page View |
            | page info version   | appVersion                                                                             | regexp named | Page View |
            | page segment        | personas                                                                               | string       | Page View |
            | sysEnv              | app                                                                                    | string       | Page View |
            | business unit       | BBVA Mexico                                                                            | string       | Page View |
            | site app name       | App BBVA Mexico                                                                        | string       | Page View |
            | project name        | DIY E2E Sales                                                                          | string       | Page View |
            | device mobile       | si                                                                                     | string       | Page View |
            | user userState      | logado                                                                                 | string       | Page View |
            | user segment global | 003001                                                                                 | string       | Page View |
            | profile ID          | profileID                                                                              | regexp named | Page View |
            | user gender         | gender                                                                                 | regexp named | Page View |
            | user age            | age                                                                                    | regexp named | Page View |

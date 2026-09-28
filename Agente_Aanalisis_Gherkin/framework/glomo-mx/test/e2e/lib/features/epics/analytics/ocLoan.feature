@ocLoanAnalytics
Feature: Analytics - Oc Loan

    @ANA_EVENT_OCLOAN001
    @MX @web @vbank @backend(test)
    @ios @android @web-done @analytics
    Scenario: OC Loan - App Step 3
        Given a user with the following criteria
            | criteria  |
            | PPI offer |
        And the user accesses to dashboard
        And the analytics interceptor service is initiated
        When the user goes to "oc loan web plus glomo" using deeplink navigation
        Then the analytics events contains the following variables:
            | item                     | value                                                                   | type         | event      |
            | analytics                | analytics/glomo_base                                                    | json schema  | App Step 3 |
            | version DL               | 20250414_5.0                                                            | string       | App Step 3 |
            | page area                | privada                                                                 | string       | App Step 3 |
            | level 1                  | prestamo personal privada                                               | string       | App Step 3 |
            | level 2                  | 3 terminos y condiciones                                                | string       | App Step 3 |
            | sysEnv                   | app                                                                     | string       | App Step 3 |
            | channel                  | online                                                                  | string       | App Step 3 |
            | language                 | ES                                                                      | string       | App Step 3 |
            | page name                | app:privada:personas:prestamo personal privada:3 terminos y condiciones | string       | App Step 3 |
            | page intent              | transaccion                                                             | string       | App Step 3 |
            | page segment             | personas                                                                | string       | App Step 3 |
            | project name             | DIY E2E Sales                                                           | string       | App Step 3 |
            | site app name            | App BBVA Mexico                                                         | string       | App Step 3 |
            | business unit            | BBVA Mexico                                                             | string       | App Step 3 |
            | device mobile            | si                                                                      | string       | App Step 3 |
            | user gender              | gender                                                                  | regexp named | App Step 3 |
            | user userState           | logado                                                                  | string       | App Step 3 |
            | user age                 | age                                                                     | regexp named | App Step 3 |
            | profile ID               | profileID                                                               | regexp named | App Step 3 |
            | application step         | 3 terminos y condiciones                                                | string       | App Step 3 |
            | application typology     | preaprobado                                                             | string       | App Step 3 |
            | application name         | prestamo personal privada                                               | string       | App Step 3 |
            | application type         | contratacion                                                            | string       | App Step 3 |
            | fulfillment model        | online                                                                  | string       | App Step 3 |
            | global application       | oc loans                                                                | string       | App Step 3 |
            | products term            | 60                                                                      | number       | App Step 3 |
            | product amount           | 20000                                                                   | number       | App Step 3 |
            | product currency         | MXN                                                                     | string       | App Step 3 |
            | product payment type     | mensual                                                                 | string       | App Step 3 |
            | product name             | prestamo personal inmediato                                             | string       | App Step 3 |
            | product interest rate    | 45.75                                                                   | number       | App Step 3 |
            | product payment amount   | 993.45                                                                  | number       | App Step 3 |
            | product service charge   | 2.5                                                                     | number       | App Step 3 |
            | product subtype          | prestamo personal                                                       | string       | App Step 3 |
            | product primary category | prestamos                                                               | string       | App Step 3 |
            | internal campaign        |                                                                         | empty array  | App Step 3 |
            | optimization attributes  |                                                                         | empty array  | App Step 3 |

    @ANA_EVENT_OCLOAN002
    @MX @web @vbank @backend(test)
    @ios @android @web-done @analytics
    Scenario: OC Loan - App Step 4
        Given a user with the following criteria
            | criteria  |
            | PPI offer |
        And the user accesses to dashboard
        And the analytics interceptor service is initiated
        When the user goes to "oc loan web plus glomo" using deeplink navigation
        And the user with "ppi offer" continues with the contracting process
        Then the analytics events contains the following variables:
            | item                     | value                                                         | type         | event      |
            | analytics                | analytics/glomo_base                                          | json schema  | App Step 4 |
            | version DL               | 20250414_5.0                                                  | string       | App Step 4 |
            | page area                | privada                                                       | string       | App Step 4 |
            | level 1                  | prestamo personal privada                                     | string       | App Step 4 |
            | level 2                  | 4 confirmacion                                                | string       | App Step 4 |
            | sysEnv                   | app                                                           | string       | App Step 4 |
            | channel                  | online                                                        | string       | App Step 4 |
            | language                 | ES                                                            | string       | App Step 4 |
            | page name                | app:privada:personas:prestamo personal privada:4 confirmacion | string       | App Step 4 |
            | page intent              | transaccion                                                   | string       | App Step 4 |
            | page segment             | personas                                                      | string       | App Step 4 |
            | project name             | DIY E2E Sales                                                 | string       | App Step 4 |
            | site app name            | App BBVA Mexico                                               | string       | App Step 4 |
            | business unit            | BBVA Mexico                                                   | string       | App Step 4 |
            | device mobile            | si                                                            | string       | App Step 4 |
            | user gender              | gender                                                        | regexp named | App Step 4 |
            | user userState           | logado                                                        | string       | App Step 4 |
            | user age                 | age                                                           | regexp named | App Step 4 |
            | profile ID               | profileID                                                     | regexp named | App Step 4 |
            | application step         | 4 confirmacion                                                | string       | App Step 4 |
            | application typology     | preaprobado                                                   | string       | App Step 4 |
            | application name         | prestamo personal privada                                     | string       | App Step 4 |
            | application type         | contratacion                                                  | string       | App Step 4 |
            | fulfillment model        | online                                                        | string       | App Step 4 |
            | global application       | oc loans                                                      | string       | App Step 4 |
            | products term            | 60                                                            | number       | App Step 4 |
            | product amount           | 20000                                                         | number       | App Step 4 |
            | product currency         | MXN                                                           | string       | App Step 4 |
            | product payment type     | mensual                                                       | string       | App Step 4 |
            | product name             | prestamo personal inmediato                                   | string       | App Step 4 |
            | product interest rate    | 45.75                                                         | number       | App Step 4 |
            | product payment amount   | 993.45                                                        | number       | App Step 4 |
            | product service charge   | 2.5                                                           | number       | App Step 4 |
            | product subtype          | prestamo personal                                             | string       | App Step 4 |
            | product primary category | prestamos                                                     | string       | App Step 4 |
            | internal campaign        |                                                               | empty array  | App Step 4 |
            | optimization attributes  |                                                               | empty array  | App Step 4 |

    @ANA_EVENT_OCLOAN003
    @MX @web @vbank @backend(test)
    @ios @android @web-done @analytics
    Scenario: OC Loan - App Step 5
        Given a user with the following criteria
            | criteria  |
            | PPI offer |
        And the user accesses to dashboard
        And the analytics interceptor service is initiated
        When the user goes to "oc loan web plus glomo" using deeplink navigation
        And the user confirms the contacting
        Then the analytics events contains the following variables:
            | item                     | value                                                | type         | event      |
            | analytics                | analytics/glomo_base                                 | json schema  | App Step 5 |
            | version DL               | 20250414_5.0                                         | string       | App Step 5 |
            | page area                | privada                                              | string       | App Step 5 |
            | level 1                  | prestamo personal privada                            | string       | App Step 5 |
            | level 2                  | 5 otp                                                | string       | App Step 5 |
            | sysEnv                   | app                                                  | string       | App Step 5 |
            | channel                  | online                                               | string       | App Step 5 |
            | language                 | ES                                                   | string       | App Step 5 |
            | page name                | app:privada:personas:prestamo personal privada:5 otp | string       | App Step 5 |
            | page intent              | transaccion                                          | string       | App Step 5 |
            | page segment             | personas                                             | string       | App Step 5 |
            | project name             | DIY E2E Sales                                        | string       | App Step 5 |
            | site app name            | App BBVA Mexico                                      | string       | App Step 5 |
            | business unit            | BBVA Mexico                                          | string       | App Step 5 |
            | device mobile            | si                                                   | string       | App Step 5 |
            | user gender              | gender                                               | regexp named | App Step 5 |
            | user userState           | logado                                               | string       | App Step 5 |
            | user age                 | age                                                  | regexp named | App Step 5 |
            | profile ID               | profileID                                            | regexp named | App Step 5 |
            | application step         | 5 otp                                                | string       | App Step 5 |
            | application typology     | preaprobado                                          | string       | App Step 5 |
            | application name         | prestamo personal privada                            | string       | App Step 5 |
            | application type         | contratacion                                         | string       | App Step 5 |
            | custom fields            | firma:token                                          | string       | App Step 5 |
            | fulfillment model        | online                                               | string       | App Step 5 |
            | global application       | oc loans                                             | string       | App Step 5 |
            | products term            | 60                                                   | number       | App Step 5 |
            | product amount           | 20000                                                | number       | App Step 5 |
            | product currency         | MXN                                                  | string       | App Step 5 |
            | product payment type     | mensual                                              | string       | App Step 5 |
            | product name             | prestamo personal inmediato                          | string       | App Step 5 |
            | product interest rate    | 45.75                                                | number       | App Step 5 |
            | product payment amount   | 993.45                                               | number       | App Step 5 |
            | product service charge   | 2.5                                                  | number       | App Step 5 |
            | product subtype          | prestamo personal                                    | string       | App Step 5 |
            | product primary category | prestamos                                            | string       | App Step 5 |
            | internal campaign        |                                                      | empty array  | App Step 5 |
            | optimization attributes  |                                                      | empty array  | App Step 5 |

    @ANA_EVENT_OCLOAN004
    @MX @web @vbank @backend(test)
    @ios @android @tmpExclude @JIRA.GLOMOMX-254311 @analytics
    Scenario: OC Loan - App Completed
        Given a user with the following criteria
            | criteria  |
            | PPI offer |
        And the user accesses to dashboard
        And the analytics interceptor service is initiated
        When the user goes to "oc loan web plus glomo" using deeplink navigation
        And the user with "ppi offer" enters the otp
        Then the analytics events contains the following variables:
            | item                         | value                                                         | type         | event         |
            | analytics                    | analytics/glomo_base                                          | json schema  | App Completed |
            | version DL                   | 20250414_5.0                                                  | string       | App Completed |
            | page area                    | privada                                                       | string       | App Completed |
            | level 1                      | prestamo personal privada                                     | string       | App Completed |
            | level 2                      | pagina exitosa                                                | string       | App Completed |
            | sysEnv                       | app                                                           | string       | App Completed |
            | channel                      | online                                                        | string       | App Completed |
            | language                     | ES                                                            | string       | App Completed |
            | page name                    | app:privada:personas:prestamo personal privada:pagina exitosa | string       | App Completed |
            | page intent                  | transaccion                                                   | string       | App Completed |
            | page segment                 | personas                                                      | string       | App Completed |
            | project name                 | DIY E2E Sales                                                 | string       | App Completed |
            | site app name                | App BBVA Mexico                                               | string       | App Completed |
            | business unit                | BBVA Mexico                                                   | string       | App Completed |
            | device mobile                | si                                                            | string       | App Completed |
            | user gender                  | gender                                                        | regexp named | App Completed |
            | user userState               | logado                                                        | string       | App Completed |
            | user age                     | age                                                           | regexp named | App Completed |
            | profile ID                   | profileID                                                     | regexp named | App Completed |
            | application step             | pagina exitosa                                                | string       | App Completed |
            | application state            | contratado                                                    | string       | App Completed |
            | application typology         | preaprobado                                                   | string       | App Completed |
            | application name             | prestamo personal privada                                     | string       | App Completed |
            | application type             | contratacion                                                  | string       | App Completed |
            | custom fields                | firma:token                                                   | string       | App Completed |
            | fulfillment model            | online                                                        | string       | App Completed |
            | global application           | oc loans                                                      | string       | App Completed |
            | application operation number | 0030559139                                                    | string       | App Completed |
            | products term                | 60                                                            | number       | App Completed |
            | product amount               | 20000                                                         | number       | App Completed |
            | product currency             | MXN                                                           | string       | App Completed |
            | product payment type         | mensual                                                       | string       | App Completed |
            | product name                 | prestamo personal inmediato                                   | string       | App Completed |
            | product interest rate        | 45.75                                                         | number       | App Completed |
            | product payment amount       | 993.44                                                        | number       | App Completed |
            | product service charge       | 2.5                                                           | number       | App Completed |
            | product subtype              | prestamo personal                                             | string       | App Completed |
            | product primary category     | prestamos                                                     | string       | App Completed |
            | product state                | contratado                                                    | string       | App Completed |
            | internal campaign            |                                                               | empty array  | App Completed |
            | optimization attributes      |                                                               | empty array  | App Completed |

    @ANA_EVENT_OCLOAN005
    @MX @web @vbank @backend(test)
    @ios @android @web-done @analytics
    Scenario: OC Loan - Page View
        Given a user with the following criteria
            | criteria  |
            | PPI offer |
        And the user accesses to dashboard
        And the analytics interceptor service is initiated
        When the user goes to "oc loan web plus glomo" using deeplink navigation
        And the user tries to enters the loan details again
        Then the analytics events contains the following variables:
            | item                    | value                                                                        | type             | event     |
            | analytics               | analytics/glomo_base                                                         | json schema      | Page View |
            | version DL              | 20250414_5.0                                                                 | string           | Page View |
            | sysEnv                  | app                                                                          | string           | Page View |
            | page segment            | personas                                                                     | string           | Page View |
            | page intent             | transaccion                                                                  | string           | Page View |
            | business unit           | BBVA Mexico                                                                  | string           | Page View |
            | page area               | privada                                                                      | string           | Page View |
            | language                | ES                                                                           | string           | Page View |
            | channel                 | online                                                                       | string           | Page View |
            | site app name           | App BBVA Mexico                                                              | string           | Page View |
            | project name            | DIY E2E Sales                                                                | string           | Page View |
            | level 1                 | prestamo personal privada                                                    | string           | Page View |
            | level 2                 | error operacion no disponible                                                | string           | Page View |
            | page name               | app:privada:personas:prestamo personal privada:error operacion no disponible | string           | Page View |
            | error page              | error operacion no disponible                                                | string           | Page View |
            | device mobile           | si                                                                           | string           | Page View |
            | user userState          | logado                                                                       | string           | Page View |
            | user gender             | gender                                                                       | regexp named     | Page View |
            | user age                | age                                                                          | regexp named     | Page View |
            | profile ID              | profileID                                                                    | regexp named     | Page View |
            | internal campaign       |                                                                              | empty array      | Page View |
            | optimization attributes |                                                                              | empty array      | Page View |
            | application             |                                                                              | empty str object | Page View |

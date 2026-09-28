@instantCashAnalytics
Feature: Analytics - Instant Cash

    @ANA_IC001
    @analytics
    @web
    @web-done
    @MX @vbank @backend(test)
    Scenario: Instant Cash - App Page Visit
        Given a user with the following criteria
            | criteria       |
            | credit card    |
            | efi offer      |
        When the user navigates to instant cash screen
        Then the device contains the following variables
            | item                     | value                                                       | type         |
            | version DL               | 20250414_5.0                                                | string       |
            | page name                | app:privada:personas:efectivo inmediato one click:1 detalle | string       |
            | level 1                  | efectivo inmediato one click                                | string       |
            | level 2                  | 1 detalle                                                   | string       |
            | language                 | ES                                                          | string       |
            | page area                | privada                                                     | string       |
            | page intent              | transaccion                                                 | string       |
            | channel                  | online                                                      | string       |
            | page instance ID         | de                                                          | string       |
            | page info version        | appVersion                                                  | regexp named |
            | page segment             | personas                                                    | string       |
            | sysEnv                   | app                                                         | string       |
            | business unit            | BBVA Mexico                                                 | string       |
            | site app name            | App BBVA Mexico                                             | string       |
            | project name             | DIY E2E Sales                                               | string       |
            | device mobile            | si                                                          | string       |
            | user userState           | logado                                                      | string       |
            | user segment global      | 003001                                                      | string       |
            | user age                 | age                                                         | regexp named |
            | global application       | instant cash oc                                             | string       |
            | application name         | efectivo inmediato one click                                | string       |
            | application type         | contratacion                                                | string       |
            | application step         | 1 detalle                                                   | string       |
            | product primary category | tarjetas                                                    | string       |
            | product name             | efectivo inmediato                                          | string       |
            | internal campaign        |                                                             | empty array  |
            | optimization attributes  |                                                             | empty array  |

    @ANA_IC002
    @analytics
    @web
    @web-done
    @MX @vbank @backend(test)
    Scenario: Instant Cash - App Started
        Given a user with the following criteria
            | criteria       |
            | credit card    |
            | efi offer      |
        And the user navigates to instant cash screen
        When the user modifies instant cash offer amount with "0"
        Then the device contains the following variables
            | item                     | value                                                       | type         |
            | version DL               | 20250414_5.0                                                | string       |
            | page name                | app:privada:personas:efectivo inmediato one click:1 detalle | string       |
            | level 1                  | efectivo inmediato one click                                | string       |
            | level 2                  | 1 detalle                                                   | string       |
            | language                 | ES                                                          | string       |
            | page area                | privada                                                     | string       |
            | page intent              | transaccion                                                 | string       |
            | channel                  | online                                                      | string       |
            | page instance ID         | de                                                          | string       |
            | page info version        | appVersion                                                  | regexp named |
            | page segment             | personas                                                    | string       |
            | sysEnv                   | app                                                         | string       |
            | business unit            | BBVA Mexico                                                 | string       |
            | site app name            | App BBVA Mexico                                             | string       |
            | project name             | DIY E2E Sales                                               | string       |
            | device mobile            | si                                                          | string       |
            | user userState           | logado                                                      | string       |
            | user segment global      | 003001                                                      | string       |
            | user age                 | age                                                         | regexp named |
            | global application       | instant cash oc                                             | string       |
            | application name         | efectivo inmediato one click                                | string       |
            | application type         | contratacion                                                | string       |
            | application step         | importe                                                     | string       |
            | product primary category | tarjetas                                                    | string       |
            | product name             | efectivo inmediato                                          | string       |
            | internal campaign        |                                                             | empty array  |
            | optimization attributes  |                                                             | empty array  |

    @ANA_EVENT_IC003
    @analytics
    @web
    @web-done
    @MX @vbank @backend(test)
    Scenario: Instant Cash - App Step 2
        Given a user with the following criteria
            | criteria       |
            | credit card    |
            | efi offer      |
        And the user navigates to instant cash screen
        And the analytics interceptor service is initiated
        When the user navigates to "product selection" step of instant cash
        Then the analytics events contains the following variables
            | item                       | value                                                                  | type         | event                              |
            | version DL                 | 20250414_5.0                                                           | string       | App Step 2                         |
            | page name                  | app:privada:personas:efectivo inmediato one click:2 cuenta de deposito | string       | App Step 2                         |
            | level 1                    | efectivo inmediato one click                                           | string       | App Step 2                         |
            | level 2                    | 2 cuenta de deposito                                                   | string       | App Step 2                         |
            | language                   | ES                                                                     | string       | App Step 2                         |
            | page area                  | privada                                                                | string       | App Step 2                         |
            | page intent                | transaccion                                                            | string       | App Step 2                         |
            | channel                    | online                                                                 | string       | App Step 2                         |
            | page instance ID           | de                                                                     | string       | App Step 2                         |
            | page info version          | appVersion                                                             | regexp named | App Step 2                         |
            | page segment               | personas                                                               | string       | App Step 2                         |
            | sysEnv                     | app                                                                    | string       | App Step 2                         |
            | business unit              | BBVA Mexico                                                            | string       | App Step 2                         |
            | site app name              | App BBVA Mexico                                                        | string       | App Step 2                         |
            | project name               | DIY E2E Sales                                                          | string       | App Step 2                         |
            | device mobile              | si                                                                     | string       | App Step 2                         |
            | user userState             | logado                                                                 | string       | App Step 2                         |
            | user segment global        | 003001                                                                 | string       | App Step 2                         |
            | user age                   | age                                                                    | regexp named | App Step 2                         |
            | global application         | instant cash oc                                                        | string       | App Step 2                         |
            | application name           | efectivo inmediato one click                                           | string       | App Step 2                         |
            | application type           | contratacion                                                           | string       | App Step 2                         |
            | application step           | 2 cuenta de deposito                                                   | string       | App Step 2                         |
            | product primary category   | tarjetas                                                               | string       | App Step 2                         |
            | product name               | efectivo inmediato                                                     | string       | App Step 2                         |
            | product payment amount     | 528.25                                                                 | number       | App Step 2                         |
            | product payment type       | mensual                                                                | string       | App Step 2                         |
            | product currency           | MXN                                                                    | string       | App Step 2                         |
            | product interest rate      | 38                                                                     | number       | App Step 2                         |
            | internal campaign          |                                                                        | empty array  | App Step 2                         |
            | internal campaign          |                                                                        | empty array  | App Step 2                         |
            | optimization attributes    |                                                                        | empty array  | App Step 2                         |

    @ANA_IC004
    @analytics
    @web
    @web-done
    @MX @vbank @backend(test)
    Scenario: Instant Cash - App Step 3
        Given a user with the following criteria
            | criteria       |
            | credit card    |
            | efi offer      |
        And the user navigates to instant cash screen
        And the user navigates to "product selection" step of instant cash
        When the user navigates to "terms and conditions" step of instant cash
        Then the device contains the following variables
            | item                       | value                                                                      | type         |
            | version DL                 | 20250414_5.0                                                               | string       |
            | page name                  | app:privada:personas:efectivo inmediato one click:3 terminos y condiciones | string       |
            | level 1                    | efectivo inmediato one click                                               | string       |
            | level 2                    | 3 terminos y condiciones                                                   | string       |
            | language                   | ES                                                                         | string       |
            | page area                  | privada                                                                    | string       |
            | page intent                | transaccion                                                                | string       |
            | channel                    | online                                                                     | string       |
            | page instance ID           | de                                                                         | string       |
            | page info version          | appVersion                                                                 | regexp named |
            | page segment               | personas                                                                   | string       |
            | sysEnv                     | app                                                                        | string       |
            | business unit              | BBVA Mexico                                                                | string       |
            | site app name              | App BBVA Mexico                                                            | string       |
            | project name               | DIY E2E Sales                                                              | string       |
            | device mobile              | si                                                                         | string       |
            | user userState             | logado                                                                     | string       |
            | user segment global        | 003001                                                                     | string       |
            | user age                   | age                                                                        | regexp named |
            | global application         | instant cash oc                                                            | string       |
            | application name           | efectivo inmediato one click                                               | string       |
            | application type           | contratacion                                                               | string       |
            | application step           | 3 terminos y condiciones                                                   | string       |
            | product primary category   | tarjetas                                                                   | string       |
            | product name               | efectivo inmediato                                                         | string       |
            | product payment amount     | 19125.43                                                                   | number       |
            | product payment type       | mensual                                                                    | string       |
            | product currency           | MXN                                                                        | string       |
            | product interest rate      | 36                                                                         | number       |
            | internal campaign          |                                                                            | empty array  |
            | internal campaign          |                                                                            | empty array  |
            | optimization attributes    |                                                                            | empty array  |

    @ANA_IC005
    @analytics
    @web
    @web-done
    @MX @vbank @backend(test)
    Scenario: Instant Cash - App Step 4
        Given a user with the following criteria
            | criteria       |
            | credit card    |
            | efi offer      |
        And the user navigates to instant cash screen
        And the user navigates to "product selection" step of instant cash
        And the user navigates to "terms and conditions" step of instant cash
        When the user navigates to "summary preview" step of instant cash
        Then the device contains the following variables
            | item                       | value                                                                  | type         |
            | version DL                 | 20250414_5.0                                                           | string       |
            | page name                  | app:privada:personas:efectivo inmediato one click:4 confirmacion       | string       |
            | level 1                    | efectivo inmediato one click                                           | string       |
            | level 2                    | 4 confirmacion                                                         | string       |
            | language                   | ES                                                                     | string       |
            | page area                  | privada                                                                | string       |
            | page intent                | transaccion                                                            | string       |
            | channel                    | online                                                                 | string       |
            | page instance ID           | de                                                                     | string       |
            | page info version          | appVersion                                                             | regexp named |
            | page segment               | personas                                                               | string       |
            | sysEnv                     | app                                                                    | string       |
            | business unit              | BBVA Mexico                                                            | string       |
            | site app name              | App BBVA Mexico                                                        | string       |
            | project name               | DIY E2E Sales                                                          | string       |
            | device mobile              | si                                                                     | string       |
            | user userState             | logado                                                                 | string       |
            | user segment global        | 003001                                                                 | string       |
            | user age                   | age                                                                    | regexp named |
            | global application         | instant cash oc                                                        | string       |
            | application name           | efectivo inmediato one click                                           | string       |
            | application type           | contratacion                                                           | string       |
            | application step           | 4 confirmacion                                                         | string       |
            | product primary category   | tarjetas                                                               | string       |
            | product name               | efectivo inmediato                                                     | string       |
            | product payment amount     | 7376.93                                                                | number       |
            | product payment type       | mensual                                                                | string       |
            | product currency           | MXN                                                                    | string       |
            | product interest rate      | 36                                                                     | number       |
            | internal campaign          |                                                                        | empty array  |
            | internal campaign          |                                                                        | empty array  |
            | optimization attributes    |                                                                        | empty array  |

    @ANA_IC006
    @analytics
    @web
    @web-done
    @MX @vbank @backend(test)
    Scenario: Instant Cash - App Completed - Success
        Given a user with the following criteria
            | criteria       |
            | credit card    |
            | efi offer      |
        And the user navigates to instant cash screen
        And the user navigates to "product selection" step of instant cash
        And the user navigates to "terms and conditions" step of instant cash
        And the user navigates to "summary preview" step of instant cash
        When the user navigates to the successful screen of instant cash hiring
        Then the device contains the following variables
            | item                         | value                                                                  | type         |
            | version DL                   | 20250414_5.0                                                           | string       |
            | page name                    | app:privada:personas:efectivo inmediato one click:pagina exitosa       | string       |
            | level 1                      | efectivo inmediato one click                                           | string       |
            | level 2                      | pagina exitosa                                                         | string       |
            | language                     | ES                                                                     | string       |
            | page area                    | privada                                                                | string       |
            | page intent                  | transaccion                                                            | string       |
            | channel                      | online                                                                 | string       |
            | page instance ID             | de                                                                     | string       |
            | page info version            | appVersion                                                             | regexp named |
            | page segment                 | personas                                                               | string       |
            | sysEnv                       | app                                                                    | string       |
            | business unit                | BBVA Mexico                                                            | string       |
            | site app name                | App BBVA Mexico                                                        | string       |
            | project name                 | DIY E2E Sales                                                          | string       |
            | device mobile                | si                                                                     | string       |
            | user userState               | logado                                                                 | string       |
            | user segment global          | 003001                                                                 | string       |
            | user age                     | age                                                                    | regexp named |
            | global application           | instant cash oc                                                        | string       |
            | application name             | efectivo inmediato one click                                           | string       |
            | application type             | contratacion                                                           | string       |
            | application step             | pagina exitosa                                                         | string       |
            | application state            | contratado                                                             | string       |
            | application operation number | 0038403360                                                             | string       |
            | product primary category     | tarjetas                                                               | string       |
            | product name                 | efectivo inmediato                                                     | string       |
            | product payment amount       | 7376.93                                                                | number       |
            | product payment type         | mensual                                                                | string       |
            | product currency             | MXN                                                                    | string       |
            | product interest rate        | 36                                                                     | number       |
            | product state                | contratado                                                             | string       |
            | internal campaign            |                                                                        | empty array  |
            | internal campaign            |                                                                        | empty array  |
            | optimization attributes      |                                                                        | empty array  |

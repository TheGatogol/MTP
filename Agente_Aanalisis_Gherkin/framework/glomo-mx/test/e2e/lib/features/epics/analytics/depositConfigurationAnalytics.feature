@depositConfigurationAnalytics
Feature: Analytics - Deposit Configuration

    @ANA_DDC001
    @analytics
    @MX
    @vbank @backend(test)
    @ios @android @web
    @web-done
    Scenario: Deposit Configuration - App Page Visit
        Given a user with the following criteria
            | criteria          |
            | deposits purchase |
        And the user accesses to dashboard
        And the analytics interceptor service is initiated
        And the user select deposit "0089in0326"
        When the user selects deposit configuration
        Then the analytics events contains the following variables
        | item                    | value                                         | type             | event           |
        | analytics               | analytics/glomo_base                          | json schema      | App Page Visit  |
        | version DL              | 20250414_5.0                                  | string           | App Page Visit  |
        | page name               | app:privada:personas:inversiones:cambio instruccion plazo:1 nueva instruccion| string           | App Page Visit  |
        | level 1                 | inversiones                                   | string           | App Page Visit  |
        | level 2                 | cambio instruccion plazo                      | string           | App Page Visit  |
        | level 3                 | 1 nueva instruccion                           | string           | App Page Visit  |
        | language                | ES                                            | string           | App Page Visit  |
        | page area               | privada                                       | string           | App Page Visit  |
        | page intent             | transaccion                                   | string           | App Page Visit  |
        | channel                 | online                                        | string           | App Page Visit  |
        | page instance ID        | de                                            | string           | App Page Visit  |
        | page info version       | appVersion                                    | regexp named     | App Page Visit  |
        | page segment            | personas                                      | string           | App Page Visit  |
        | sysEnv                  | app                                           | string           | App Page Visit  |
        | business unit           | BBVA Mexico                                   | string           | App Page Visit  |
        | site app name           | App BBVA Mexico                               | string           | App Page Visit  |
        | project name            | DIY E2E Sales                                 | string           | App Page Visit  |
        | device mobile           | si                                            | string           | App Page Visit  |
        | user userState          | logado                                        | string           | App Page Visit  |
        | profile ID              | profileID                                     | regexp named     | App Page Visit  |
        | user segment global     | 003001                                        | string           | App Page Visit  |
        | global application      | deposits configuration                        | string           | App Page Visit  |
        | application name        | cambio instruccion plazo                      | string           | App Page Visit  |
        | application type        | operativa                                     | string           | App Page Visit  |
        | application step        | 1 nueva instruccion                           | string           | App Page Visit  |
        | fulfillment model       | online                                        | string           | App Page Visit  |
        | product primary category| inversiones                                   | string           | App Page Visit  |
        | product name            | plazos                                        | string           | App Page Visit  |
        | product amount          | 2111                                          | string           | App Page Visit  |
        | product currency        | MXN                                           | string           | App Page Visit  |

    @ANA_DDC002
    @analytics
    @MX
    @vbank @backend(test)
    @ios @android @web
    @web-done
    Scenario: Deposit Configuration - App Started
        Given a user with the following criteria
            | criteria          |
            | deposits purchase |
        And the user accesses to dashboard
        And the user accesses to configuration for deposit "0326"
        And the analytics interceptor service is initiated
        When the user selects new instruction
        Then the analytics events contains the following variables
        | item                    | value                                         | type             | event           |
        | analytics               | analytics/glomo_base                          | json schema      | App Started     |
        | version DL              | 20250414_5.0                                  | string           | App Started     |
        | page name               | app:privada:personas:inversiones:cambio instruccion plazo:1 nueva instruccion| string           | App Started     |
        | level 1                 | inversiones                                   | string           | App Started     |
        | level 2                 | cambio instruccion plazo                      | string           | App Started     |
        | level 3                 | 1 nueva instruccion                           | string           | App Started     |
        | language                | ES                                            | string           | App Started     |
        | page area               | privada                                       | string           | App Started     |
        | page intent             | transaccion                                   | string           | App Started     |
        | channel                 | online                                        | string           | App Started     |
        | page instance ID        | de                                            | string           | App Started     |
        | page info version       | appVersion                                    | regexp named     | App Started     |
        | page segment            | personas                                      | string           | App Started     |
        | sysEnv                  | app                                           | string           | App Started     |
        | business unit           | BBVA Mexico                                   | string           | App Started     |
        | site app name           | App BBVA Mexico                               | string           | App Started     |
        | project name            | DIY E2E Sales                                 | string           | App Started     |
        | device mobile           | si                                            | string           | App Started     |
        | user userState          | logado                                        | string           | App Started     |
        | profile ID              | profileID                                     | regexp named     | App Started     |
        | user segment global     | 003001                                        | string           | App Started     |
        | global application      | deposits configuration                        | string           | App Started     |
        | application name        | cambio instruccion plazo                      | string           | App Started     |
        | application type        | operativa                                     | string           | App Started     |
        | application step        | renovar inversion con ganancias               | string           | App Started     |
        | fulfillment model       | online                                        | string           | App Started     |
        | product primary category| inversiones                                   | string           | App Started     |
        | product name            | plazos                                        | string           | App Started     |
        | product amount          | 2111                                          | string           | App Started     |
        | product currency        | MXN                                           | string           | App Started     |

    @ANA_DDC003
    @analytics
    @MX
    @vbank @backend(test)
    @ios @android @web
    @web-done
    Scenario: Deposit Configuration - App Step 2
        Given a user with the following criteria
            | criteria          |
            | deposits purchase |
        And the user accesses to dashboard
        And the user accesses to configuration for deposit "0326"
        And the user selects new instruction
        And the analytics interceptor service is initiated
        When the user continues the config process
        Then the analytics events contains the following variables
        | item                    | value                                         | type             | event           |
        | analytics               | analytics/glomo_base                          | json schema      | App Step 2      |
        | version DL              | 20250414_5.0                                  | string           | App Step 2      |
        | page name               | app:privada:personas:inversiones:cambio instruccion plazo:2 confirmacion| string           | App Step 2      |
        | level 1                 | inversiones                                   | string           | App Step 2      |
        | level 2                 | cambio instruccion plazo                      | string           | App Step 2      |
        | level 3                 | 2 confirmacion                                | string           | App Step 2      |
        | language                | ES                                            | string           | App Step 2      |
        | page area               | privada                                       | string           | App Step 2      |
        | page intent             | transaccion                                   | string           | App Step 2      |
        | channel                 | online                                        | string           | App Step 2      |
        | page instance ID        | de                                            | string           | App Step 2      |
        | page info version       | appVersion                                    | regexp named     | App Step 2      |
        | page segment            | personas                                      | string           | App Step 2      |
        | sysEnv                  | app                                           | string           | App Step 2      |
        | business unit           | BBVA Mexico                                   | string           | App Step 2      |
        | site app name           | App BBVA Mexico                               | string           | App Step 2      |
        | project name            | DIY E2E Sales                                 | string           | App Step 2      |
        | device mobile           | si                                            | string           | App Step 2      |
        | user userState          | logado                                        | string           | App Step 2      |
        | profile ID              | profileID                                     | regexp named     | App Step 2      |
        | user segment global     | 003001                                        | string           | App Step 2      |
        | global application      | deposits configuration                        | string           | App Step 2      |
        | application name        | cambio instruccion plazo                      | string           | App Step 2      |
        | application type        | operativa                                     | string           | App Step 2      |
        | application typology    | renovar inversion con ganancias               | string           | App Step 2      |
        | application step        | 2 confirmacion                                | string           | App Step 2      |
        | fulfillment model       | online                                        | string           | App Step 2      |
        | product primary category| inversiones                                   | string           | App Step 2      |
        | product name            | plazos                                        | string           | App Step 2      |
        | product amount          | 2111                                          | string           | App Step 2      |
        | product currency        | MXN                                           | string           | App Step 2      |

    @ANA_DDC004
    @analytics
    @MX
    @vbank @backend(test)
    @ios @android @web
    @web-done
    Scenario: Deposit Configuration - App Completed
        Given a user with the following criteria
            | criteria          |
            | deposits purchase |
        And the user accesses to dashboard
        And the user accesses to configuration for deposit "0326"
        And the analytics interceptor service is initiated
        And the user selects renovation configuration
        When the user accesses deposit configuration review
        Then the analytics events contains the following variables
        | item                    | value                                         | type             | event           |
        | analytics               | analytics/glomo_base                          | json schema      | App Completed     |
        | version DL              | 20250414_5.0                                  | string           | App Completed     |
        | page name               | app:privada:personas:inversiones:cambio instruccion plazo:pagina exitosa | string           | App Completed     |
        | level 1                 | inversiones                                   | string           | App Completed     |
        | level 2                 | cambio instruccion plazo                      | string           | App Completed     |
        | level 3                 | pagina exitosa                                | string           | App Completed     |
        | language                | ES                                            | string           | App Completed     |
        | page area               | privada                                       | string           | App Completed     |
        | page intent             | transaccion                                   | string           | App Completed     |
        | channel                 | online                                        | string           | App Completed     |
        | page instance ID        | de                                            | string           | App Completed     |
        | page info version       | appVersion                                    | regexp named     | App Completed     |
        | page segment            | personas                                      | string           | App Completed     |
        | sysEnv                  | app                                           | string           | App Completed     |
        | business unit           | BBVA Mexico                                   | string           | App Completed     |
        | site app name           | App BBVA Mexico                               | string           | App Completed     |
        | project name            | DIY E2E Sales                                 | string           | App Completed     |
        | device mobile           | si                                            | string           | App Completed     |
        | user userState          | logado                                        | string           | App Completed     |
        | profile ID              | profileID                                     | regexp named     | App Completed     |
        | user segment global     | 003001                                        | string           | App Completed     |
        | global application      | deposits configuration                        | string           | App Completed     |
        | application name        | cambio instruccion plazo                      | string           | App Completed     |
        | application type        | operativa                                     | string           | App Completed     |
        | application typology    | renovar inversion con ganancias               | string           | App Completed     |
        | application step        | pagina exitosa                                | string           | App Completed     |
        | fulfillment model       | online                                        | string           | App Completed     |
        | product primary category| inversiones                                   | string           | App Completed     |
        | product name            | plazos                                        | string           | App Completed     |
        | product amount          | 2111                                          | string           | App Completed     |
        | product currency        | MXN                                           | string           | App Completed     |

@updateNationalIdAnalytics
Feature: Analytics - ID

    @ANA_ID001
    @analytics
    @MX @web
    @vbank @web-done
    @backend(test)
    Scenario: Page visit - Identification
        Given a user with the following criteria
            | criteria  |
            | id add    |
        And the user accesses to profile screen
        When the user accesses to add "identification" screen
        Then the device contains the following variables
            | item                    | value                                                                    | type             |
            | version DL              | 20250414_5.0                                                             | string           |
            | page name               | app:privada:personas:actualizar identificacion:1 datos de identificacion | string           |
            | level 1                 | actualizar identificacion                                                | string           |
            | level 2                 | 1 datos de identificacion                                                | string           |
            | language                | ES                                                                       | string           |
            | page area               | privada                                                                  | string           |
            | page intent             | transaccion                                                              | string           |
            | channel                 | online                                                                   | string           |
            | page instance ID        | de                                                                       | string           |
            | page info version       | appVersion                                                               | regexp named     |
            | page segment            | personas                                                                 | string           |
            | sysEnv                  | app                                                                      | string           |
            | business unit           | BBVA Mexico                                                              | string           |
            | site app name           | App BBVA Mexico                                                          | string           |
            | project name            | Glomo                                                                    | string           |
            | device mobile           | si                                                                       | string           |
            | user segment global     | 003001                                                                   | string           |
            | user age                | age                                                                      | regexp named     |
            | global application      | id validation                                                            | string           |
            | application name        | actualizar identificacion                                                | string           |
            | application type        | operativa                                                                | string           |
            | application step        | 1 datos de identificacion                                                | string           |
            | fulfillment model       | online                                                                   | string           |
            | qualified visits        | false                                                                    | boolean          |

    @ANA_ID002
    @analytics
    @MX @web
    @vbank @web-done
    @backend(test)
    Scenario: Page App Started - Identification
        Given a user with the following criteria
            | criteria  |
            | id add    |
        And the user accesses to profile screen
        And the user accesses to add "identification" screen
        When the user accepts the privacy notice
        Then the device contains the following variables
            | item                    | value                                                                    | type             |
            | version DL              | 20250414_5.0                                                             | string           |
            | page name               | app:privada:personas:actualizar identificacion:1 datos de identificacion | string           |
            | level 1                 | actualizar identificacion                                                | string           |
            | level 2                 | 1 datos de identificacion                                                | string           |
            | language                | ES                                                                       | string           |
            | page area               | privada                                                                  | string           |
            | page intent             | transaccion                                                              | string           |
            | channel                 | online                                                                   | string           |
            | page instance ID        | de                                                                       | string           |
            | page info version       | appVersion                                                               | regexp named     |
            | page segment            | personas                                                                 | string           |
            | sysEnv                  | app                                                                      | string           |
            | business unit           | BBVA Mexico                                                              | string           |
            | site app name           | App BBVA Mexico                                                          | string           |
            | project name            | Glomo                                                                    | string           |
            | device mobile           | si                                                                       | string           |
            | user segment global     | 003001                                                                   | string           |
            | user age                | age                                                                      | regexp named     |
            | global application      | id validation                                                            | string           |
            | application name        | actualizar identificacion                                                | string           |
            | application type        | operativa                                                                | string           |
            | application step        | check datos personales                                                 | string           |
            | fulfillment model       | online                                                                   | string           |

    @ANA_ID003
    @analytics
    @MX @web
    @vbank @web-done
    @backend(test)
    Scenario: Page App Step 2 - Identification
        Given a user with the following criteria
            | criteria  |
            | id add    |
        And the user accesses to profile screen
        And the user accesses to add "identification" screen
        And the analytics interceptor service is initiated
        When the user reads the recommendations to scan the ID
        Then the analytics events contains the following variables
            | item                    | value                                                                    | type             |event     |
            | version DL              | 20250414_5.0                                                             | string           |App Step 2|
            | page name               | app:privada:personas:actualizar identificacion:2 recomendaciones escaneo | string           |App Step 2|
            | level 1                 | actualizar identificacion                                                | string           |App Step 2|
            | level 2                 | 2 recomendaciones escaneo                                                | string           |App Step 2|
            | language                | ES                                                                       | string           |App Step 2|
            | page area               | privada                                                                  | string           |App Step 2|
            | page intent             | transaccion                                                              | string           |App Step 2|
            | channel                 | online                                                                   | string           |App Step 2|
            | page instance ID        | de                                                                       | string           |App Step 2|
            | page info version       | appVersion                                                               | regexp named     |App Step 2|
            | page segment            | personas                                                                 | string           |App Step 2|
            | sysEnv                  | app                                                                      | string           |App Step 2|
            | business unit           | BBVA Mexico                                                              | string           |App Step 2|
            | site app name           | App BBVA Mexico                                                          | string           |App Step 2|
            | project name            | Glomo                                                                    | string           |App Step 2|
            | device mobile           | si                                                                       | string           |App Step 2|
            | user segment global     | 003001                                                                   | string           |App Step 2|
            | user age                | age                                                                      | regexp named     |App Step 2|
            | global application      | id validation                                                            | string           |App Step 2|
            | application name        | actualizar identificacion                                                | string           |App Step 2|
            | application type        | operativa                                                                | string           |App Step 2|
            | application step        | 2 recomendaciones escaneo                                               | string            |App Step 2|
            | fulfillment model       | online                                                                   | string           |App Step 2|

    ####### This test must be run manually because it's necessary to use veridas plugin ######
    @ANA_ID004
    @analytics
    @MX @web
    @vbank @manual @JIRA.GLOMOGL-23505
    @backend(test)
    Scenario: Page App Step 3 - Identification
        Given a user with the following criteria
            | criteria  |
            | id add    |
        And the user accesses to profile screen
        And the user accesses to add "identification" screen
        And the user reads the recommendations to scan the ID
        When the user scann their identification
        Then the device contains the following variables
            | item                    | value                                                                    | type             |
            | version DL              | 20250414_5.0                                                             | string           |
            | page name               | app:privada:personas:actualizar identificacion:3 captura cedula          | string           |
            | level 1                 | actualizar identificacion                                                | string           |
            | level 2                 | 3 captura cedula                                                         | string           |
            | language                | ES                                                                       | string           |
            | page area               | privada                                                                  | string           |
            | page intent             | transaccion                                                              | string           |
            | channel                 | online                                                                   | string           |
            | page instance ID        | de                                                                       | string           |
            | page info version       | appVersion                                                               | regexp named     |
            | page segment            | personas                                                                 | string           |
            | sysEnv                  | app                                                                      | string           |
            | business unit           | BBVA Mexico                                                              | string           |
            | site app name           | App BBVA Mexico                                                          | string           |
            | project name            | Glomo                                                                    | string           |
            | device mobile           | si                                                                       | string           |
            | user segment global     | 003001                                                                   | string           |
            | user age                | age                                                                      | regexp named     |
            | global application      | id validation                                                            | string           |
            | application name        | actualizar identificacion                                                | string           |
            | application type        | operativa                                                                | string           |
            | application step        | 3 captura cedula                                                         | string           |
            | fulfillment model       | online                                                                   | string           |

    ####### This tests must be run manually because it's necessary to use veridas plugin ######
    @ANA_ID005
    @analytics
    @MX @web
    @vbank @manual @JIRA.GLOMOGL-23505
    @backend(test)
    Scenario: Page App Step 4 - Identification
        Given a user with the following criteria
            | criteria  |
            | id add    |
        And the user accesses to profile screen
        And the user accesses to add "identification" screen
        And the user accepts the privacy notice
        And the user reads the recommendations to scan the ID
        And the user scann their identification
        When the user takes a selfie
        Then the device contains the following variables
            | item                    | value                                                                    | type             |
            | version DL              | 20250414_5.0                                                             | string           |
            | page name               | app:privada:personas:actualizar identificacion:4 captura selfie          | string           |
            | level 1                 | actualizar identificacion                                                | string           |
            | level 2                 | 4 captura selfie                                                         | string           |
            | language                | ES                                                                       | string           |
            | page area               | privada                                                                  | string           |
            | page intent             | transaccion                                                              | string           |
            | channel                 | online                                                                   | string           |
            | page instance ID        | de                                                                       | string           |
            | page info version       | appVersion                                                               | regexp named     |
            | page segment            | personas                                                                 | string           |
            | sysEnv                  | app                                                                      | string           |
            | business unit           | BBVA Mexico                                                              | string           |
            | site app name           | App BBVA Mexico                                                          | string           |
            | project name            | Glomo                                                                    | string           |
            | device mobile           | si                                                                       | string           |
            | user segment global     | 003001                                                                   | string           |
            | user age                | age                                                                      | regexp named     |
            | global application      | id validation                                                            | string           |
            | application name        | actualizar identificacion                                                | string           |
            | application type        | operativa                                                                | string           |
            | application step        | 4 captura selfie                                                         | string           |
            | fulfillment model       | online                                                                   | string           |

    ####### This tests must be run manually because it's necessary to use veridas plugin ######
    @ANA_ID006
    @analytics
    @MX @web
    @vbank @manual @JIRA.GLOMOGL-23505
    @backend(test)
    Scenario: Page App Step 5 - Identification
        Given a user with the following criteria
            | criteria  |
            | id add    |
        And the user accesses to profile screen
        And the user accesses to add "identification" screen
        And the user reads the recommendations to scan the ID
        And the user scann their identification
        And the user takes a selfie
        And the user accepts the privacy notice
        When the user continues to the second step
        Then the device contains the following variables
            | item                    | value                                                                    | type             |
            | version DL              | 20250414_5.0                                                             | string           |
            | page name               | app:privada:personas:actualizar identificacion:5 datos del documento     | string           |
            | level 1                 | actualizar identificacion                                                | string           |
            | level 2                 | 5 datos del documento                                                    | string           |
            | language                | ES                                                                       | string           |
            | page area               | privada                                                                  | string           |
            | page intent             | transaccion                                                              | string           |
            | channel                 | online                                                                   | string           |
            | page instance ID        | de                                                                       | string           |
            | page info version       | appVersion                                                               | regexp named     |
            | page segment            | personas                                                                 | string           |
            | sysEnv                  | app                                                                      | string           |
            | business unit           | BBVA Mexico                                                              | string           |
            | site app name           | App BBVA Mexico                                                          | string           |
            | project name            | Glomo                                                                    | string           |
            | device mobile           | si                                                                       | string           |
            | user segment global     | 003001                                                                   | string           |
            | user age                | age                                                                      | regexp named     |
            | global application      | id validation                                                            | string           |
            | application name        | actualizar identificacion                                                | string           |
            | application type        | operativa                                                                | string           |
            | application step        | 5 datos del documento                                                    | string           |
            | fulfillment model       | online                                                                   | string           |

    ####### This tests must be run manually because it's necessary to use veridas plugin ######
    @ANA_ID007
    @analytics
    @MX @web
    @vbank @manual @JIRA.GLOMOGL-23505
    @backend(test)
    Scenario: Page App Step 6 - Identification
        Given a user with the following criteria
            | criteria  |
            | id add    |
        And the user accesses to profile screen
        And the user accesses to add "identification" screen
        And the user reads the recommendations to scan the ID
        And the user scann their identification
        And the user takes a selfie
        And the user accepts the privacy notice
        And the user continues to the second step
        When the user continues to the resume screen
        Then the device contains the following variables
            | item                    | value                                                                    | type             |
            | version DL              | 20250414_5.0                                                             | string           |
            | page name               | app:privada:personas:actualizar identificacion:6 confirmacion            | string           |
            | level 1                 | actualizar identificacion                                                | string           |
            | level 2                 | 6 confirmacion                                                           | string           |
            | language                | ES                                                                       | string           |
            | page area               | privada                                                                  | string           |
            | page intent             | transaccion                                                              | string           |
            | channel                 | online                                                                   | string           |
            | page instance ID        | de                                                                       | string           |
            | page info version       | appVersion                                                               | regexp named     |
            | page segment            | personas                                                                 | string           |
            | sysEnv                  | app                                                                      | string           |
            | business unit           | BBVA Mexico                                                              | string           |
            | site app name           | App BBVA Mexico                                                          | string           |
            | project name            | Glomo                                                                    | string           |
            | device mobile           | si                                                                       | string           |
            | user segment global     | 003001                                                                   | string           |
            | user age                | age                                                                      | regexp named     |
            | global application      | id validation                                                            | string           |
            | application name        | actualizar identificacion                                                | string           |
            | application type        | operativa                                                                | string           |
            | application step        | 6 confirmacion                                                           | string           |
            | fulfillment model       | online                                                                   | string           |

    @ANA_ID008
    @analytics
    @MX @web
    @vbank @web-done
    @backend(test)
    Scenario: Footprint Completa la Actualizacion - Identification
        Given a user with the following criteria
            | criteria            |
            | has incomplete id   |
        And the user accesses to profile screen
        And the user taps on "personal info show data" profile button
        When the user accesses to edit "identification" screen
        Then the device contains the following variables
            | item                    | value                                                                    | type             |
            | version DL              | 20250414_5.0                                                             | string           |
            | page name               | app:privada:personas:actualizar identificacion:completa la actualizacion | string           |
            | level 1                 | actualizar identificacion                                                | string           |
            | level 2                 | completa la actualizacion                                                | string           |
            | language                | ES                                                                       | string           |
            | page area               | privada                                                                  | string           |
            | page intent             | informacion                                                              | string           |
            | channel                 | online                                                                   | string           |
            | page instance ID        | de                                                                       | string           |
            | page info version       | appVersion                                                               | regexp named     |
            | page segment            | personas                                                                 | string           |
            | sysEnv                  | app                                                                      | string           |
            | business unit           | BBVA Mexico                                                              | string           |
            | site app name           | App BBVA Mexico                                                          | string           |
            | project name            | Glomo                                                                    | string           |
            | device mobile           | si                                                                       | string           |
            | user segment global     | 003001                                                                   | string           |
            | user age                | age                                                                      | regexp named     |

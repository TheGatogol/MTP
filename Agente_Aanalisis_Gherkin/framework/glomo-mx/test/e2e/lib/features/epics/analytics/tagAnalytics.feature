@TeleViaPaseTagsAnalytics
Feature: Analytics - TeleVia Operations

    @ANA_TELEVIA001
    @analytics
    @MX @web @backend(test) @vbank @web-done
    @vbank-modified
    Scenario: Access to Tag Registration TeleVia - Happy Path
        Given a user with the following criteria
            | criteria             |
            | televia without tags |
        When the user accesses to operationals page
        And the user go to register a tag without any tags registered
        Then the device contains the following variables
            | item                 | value                                                          | type         |
            | page name            | app:privada:personas:registrar tag:1 detalle                   | string       |
            | level 1              | registrar tag                                                  | string       |
            | level 2              | 1 detalle                                                      | string       |
            | language             | ES                                                             | string       |
            | page area            | privada                                                        | string       |
            | page intent          | transaccion                                                    | string       |
            | channel              | online                                                         | string       |
            | page instance ID     | de                                                             | string       |
            | version DL           | 20250414_5.0                                                   | string       |
            | page info version    | appVersion                                                     | regexp named |
            | page segment         | personas                                                       | string       |
            | sysEnv               | app                                                            | string       |
            | business unit        | BBVA Mexico                                                    | string       |
            | site app name        | App BBVA Mexico                                                | string       |
            | device mobile        | si                                                             | string       |
            | user segment global  | 003001                                                         | string       |
            | user age             | age                                                            | regexp named |
            | global application   | tag registration                                               | string       |
            | application name     | registrar tag                                                  | string       |
            | application type     | operativa                                                      | string       |
            | application step     | 1 detalle                                                      | string       |
            | fulfillment model    | online                                                         | string       |

    @ANA_TELEVIA002
    @analytics
    @MX @web @backend(test) @vbank @web-done
    @vbank-modified
    Scenario: TeleVia - Analytics App Started Click
        Given a user with the following criteria
            | criteria             |
            | televia without tags |
        When the user accesses to operationals page
        And the user go to register a tag without any tags registered
        And the user interact "information tag manual" section from tag registration
        Then the device contains the following variables
            | item                 | value                                                          | type         |
            | page name            | app:privada:personas:registrar tag:3 registro                  | string       |
            | level 1              | registrar tag                                                  | string       |
            | level 2              | 3 registro                                                     | string       |
            | language             | ES                                                             | string       |
            | page area            | privada                                                        | string       |
            | page intent          | transaccion                                                    | string       |
            | channel              | online                                                         | string       |
            | page instance ID     | de                                                             | string       |
            | version DL           | 20250414_5.0                                                   | string       |
            | page info version    | appVersion                                                     | regexp named |
            | page segment         | personas                                                       | string       |
            | sysEnv               | app                                                            | string       |
            | business unit        | BBVA Mexico                                                    | string       |
            | site app name        | App BBVA Mexico                                                | string       |
            | device mobile        | si                                                             | string       |
            | user segment global  | 003001                                                         | string       |
            | user age             | age                                                            | regexp named |
            | global application   | tag registration                                               | string       |
            | application type     | operativa                                                      | string       |
            | application step     | 3 registro                                                     | string       |

    @ANA_TELEVIA003
    @analytics
    @MX @web @backend(test) @vbank @web-done
    @vbank-modified
    Scenario: TeleVia - Terms And Conditions Step
        Given a user with the following criteria
            | criteria             |
            | televia without tags |
        When the user accesses to operationals page
        And the user go to register a tag without any tags registered
        And the user interact "information tag manual" section from tag registration
        And the user fill information tag form and continue the process
        Then the device contains the following variables
            | item                 | value                                                          | type         |
            | page name            | app:privada:personas:registrar tag:4 terminos y condiciones    | string       |
            | level 1              | registrar tag                                                  | string       |
            | level 2              | 4 terminos y condiciones                                       | string       |
            | language             | ES                                                             | string       |
            | page area            | privada                                                        | string       |
            | page intent          | transaccion                                                    | string       |
            | channel              | online                                                         | string       |
            | page instance ID     | de                                                             | string       |
            | version DL           | 20250414_5.0                                                   | string       |
            | page info version    | appVersion                                                     | regexp named |
            | page segment         | personas                                                       | string       |
            | sysEnv               | app                                                            | string       |
            | business unit        | BBVA Mexico                                                    | string       |
            | site app name        | App BBVA Mexico                                                | string       |
            | device mobile        | si                                                             | string       |
            | user segment global  | 003001                                                         | string       |
            | user age             | age                                                            | regexp named |
            | global application   | tag registration                                               | string       |
            | application type     | operativa                                                      | string       |
            | application step     | 4 terminos y condiciones                                       | string       |

    @ANA_TELEVIA004
    @analytics
    @MX @web @backend(test) @vbank @web-done
    @vbank-modified
    Scenario: TeleVia - Analyticts Tag list already registered
        Given a user with the following criteria
            | criteria             |
            | televia without tags |
        When the user accesses to operationals page
        And the user go to register a tag without any tags registered
        And the user interact "term and condition" section from tag registration
        Then the device contains the following variables
            | item                 | value                                                          | type         |
            | page name            | app:privada:personas:registrar tag:5 confirmacion              | string       |
            | level 1              | registrar tag                                                  | string       |
            | level 2              | 5 confirmacion                                                 | string       |
            | language             | ES                                                             | string       |
            | page area            | privada                                                        | string       |
            | page intent          | transaccion                                                    | string       |
            | channel              | online                                                         | string       |
            | page instance ID     | de                                                             | string       |
            | version DL           | 20250414_5.0                                                   | string       |
            | page info version    | appVersion                                                     | regexp named |
            | page segment         | personas                                                       | string       |
            | sysEnv               | app                                                            | string       |
            | business unit        | BBVA Mexico                                                    | string       |
            | site app name        | App BBVA Mexico                                                | string       |
            | device mobile        | si                                                             | string       |
            | user segment global  | 003001                                                         | string       |
            | user age             | age                                                            | regexp named |
            | global application   | tag registration                                               | string       |
            | application type     | operativa                                                      | string       |
            | application step     | 5 confirmacion                                                 | string       |

    @ANA_TELEVIA005
    @analytics
    @MX @web @backend(test) @vbank @web-done
    @vbank-modified
    Scenario: TeleVia - more information about Cost
        Given a user with the following criteria
            | criteria             |
            | televia without tags |
        When the user accesses to operationals page
        And the user go to register a tag without any tags registered
        And the user open "more information" about cost
        Then the device contains the following variables
            | item                 | value                                                          | type         |
            | page name            | app:privada:personas:registrar tag:1 detalle                   | string       |
            | level 1              | registrar tag                                                  | string       |
            | level 2              | 1 detalle                                                      | string       |
            | language             | ES                                                             | string       |
            | page area            | privada                                                        | string       |
            | page intent          | transaccion                                                    | string       |
            | channel              | online                                                         | string       |
            | page instance ID     | de                                                             | string       |
            | version DL           | 20250414_5.0                                                   | string       |
            | page info version    | appVersion                                                     | regexp named |
            | page segment         | personas                                                       | string       |
            | sysEnv               | app                                                            | string       |
            | business unit        | BBVA Mexico                                                    | string       |
            | site app name        | App BBVA Mexico                                                | string       |
            | device mobile        | si                                                             | string       |
            | user segment global  | 003001                                                         | string       |
            | user age             | age                                                            | regexp named |
            | global application   | tag registration                                               | string       |
            | application type     | operativa                                                      | string       |
            | application step     | mas informacion                                                | string       |

    @ANA_TELEVIA006
    @analytics
    @MX @web @backend(test) @vbank @web-done
    @vbank-modified
    Scenario: TeleVia - information about Cost
        Given a user with the following criteria
            | criteria             |
            | televia without tags |
        When the user accesses to operationals page
        And the user go to register a tag without any tags registered
        And the user open "information" about cost
        Then the device contains the following variables
            | item                 | value                                                          | type         |
            | page name            | app:privada:personas:registrar tag:1 detalle                   | string       |
            | level 1              | registrar tag                                                  | string       |
            | level 2              | 1 detalle                                                      | string       |
            | language             | ES                                                             | string       |
            | page area            | privada                                                        | string       |
            | page intent          | transaccion                                                    | string       |
            | channel              | online                                                         | string       |
            | page instance ID     | de                                                             | string       |
            | version DL           | 20250414_5.0                                                   | string       |
            | page info version    | appVersion                                                     | regexp named |
            | page segment         | personas                                                       | string       |
            | sysEnv               | app                                                            | string       |
            | business unit        | BBVA Mexico                                                    | string       |
            | site app name        | App BBVA Mexico                                                | string       |
            | device mobile        | si                                                             | string       |
            | user segment global  | 003001                                                         | string       |
            | user age             | age                                                            | regexp named |
            | global application   | tag registration                                               | string       |
            | application type     | operativa                                                      | string       |
            | application step     | info costo                                                     | string       |

    @ANA_TELEVIA007
    @analytics
    @MX @web @backend(test) @vbank @web-done
    @vbank-modified
    Scenario: Tag Registration TeleVia - Operator interaction
        Given a user with the following criteria
            | criteria             |
            | televia without tags |
        When the user accesses to operationals page
        And the user go to register a tag without any tags registered
        And the user interact "operator" section from tag registration
        Then the device contains the following variables
            | item                 | value                                                          | type         |
            | page name            | app:privada:personas:registrar tag:2 tipo de registro          | string       |
            | level 1              | registrar tag                                                  | string       |
            | level 2              | 2 tipo de registro                                             | string       |
            | language             | ES                                                             | string       |
            | page area            | privada                                                        | string       |
            | page intent          | transaccion                                                    | string       |
            | channel              | online                                                         | string       |
            | page instance ID     | de                                                             | string       |
            | version DL           | 20250414_5.0                                                   | string       |
            | page info version    | appVersion                                                     | regexp named |
            | page segment         | personas                                                       | string       |
            | sysEnv               | app                                                            | string       |
            | business unit        | BBVA Mexico                                                    | string       |
            | site app name        | App BBVA Mexico                                                | string       |
            | device mobile        | si                                                             | string       |
            | user segment global  | 003001                                                         | string       |
            | user age             | age                                                            | regexp named |
            | global application   | tag registration                                               | string       |
            | application type     | operativa                                                      | string       |
            | application step     | 2 tipo de registro                                             | string       |

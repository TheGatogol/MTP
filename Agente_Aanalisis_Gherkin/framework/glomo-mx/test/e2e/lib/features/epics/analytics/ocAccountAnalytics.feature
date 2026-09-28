@ocAccountAnalytics
Feature: Analytics - OC Accounts

    @ANA_EVENT_OCA001
    @analytics
    @web
    @web-done
    @backend(test)
    @MX @vbank
    @ios @android
    Scenario: OC Account - Click Through - App On Click Start
        Given a user with the following criteria
            | criteria              |
            | oc account with offer |
        And the user accesses contract product section
        And the analytics interceptor service is initiated
        When the user accesses to offer oc account
        Then the analytics events contains the following variables:
            | item                                         | value                                    | type         | event              |
            | analytics                                    | analytics/glomo_base                     | json schema  | App On Click Start |
            | page instance ID                             | de                                       | string       | App On Click Start |
            | page area                                    | privada                                  | string       | App On Click Start |
            | version DL                                   | 20250414_5.0                             | string       | App On Click Start |
            | business unit                                | BBVA Mexico                              | string       | App On Click Start |
            | channel                                      | online                                   | string       | App On Click Start |
            | language                                     | ES                                       | string       | App On Click Start |
            | level 1                                      | oportunidades                            | string       | App On Click Start |
            | page intent                                  | informacion                              | string       | App On Click Start |
            | page name                                    | app:privada:personas:oportunidades       | string       | App On Click Start |
            | page segment                                 | personas                                 | string       | App On Click Start |
            | project name                                 | Glomo                                    | string       | App On Click Start |
            | site app name                                | App BBVA Mexico                          | string       | App On Click Start |
            | sysEnv                                       | app                                      | string       | App On Click Start |
            | user age                                     | age                                      | regexp named | App On Click Start |
            | device mobile                                | si                                       | string       | App On Click Start |
            | user gender                                  | gender                                   | regexp named | App On Click Start |
            | profile ID                                   | profileID                                | regexp named | App On Click Start |
            | user segment global                          | 003001                                   | string       | App On Click Start |
            | user userState                               | logado                                   | string       | App On Click Start |
            | internal campaign attributes campaign format | card                                     | string       | App On Click Start |
            | internal campaign attributes name            | -una cuenta hecha para ti                | string       | App On Click Start |
            | internal campaign attributes collective code | vd-                                      | string       | App On Click Start |
            | internal campaign attributes location        | contract product section--centro-0-12-1  | string       | App On Click Start |
            | internal campaign attributes product         | cuentas                                  | string       | App On Click Start |
            | internal campaign attributes product code    |                                          | string       | App On Click Start |
            | internal campaign attributes quantity        |                                          | string       | App On Click Start |
            | internal campaign event name                 | IntCmpClick                              | string       | App On Click Start |
            | application name                             | contratar cuenta                         | string       | App On Click Start |
            | application type                             | contratacion                             | string       | App On Click Start |
            | fulfillment model                            | online                                   | string       | App On Click Start |
            | global application                           | account sing up                          | string       | App On Click Start |
            | application step                             | oportunidades me interesa                | string       | App On Click Start |
            | product primary category                     | cuentas                                  | string       | App On Click Start |
            | product name                                 | libreton basico                          | string       | App On Click Start |

    @ANA_EVENT_OCA002
    @analytics
    @web
    @web-done
    @backend(test)
    @MX @vbank
    @ios @android
    Scenario: OC Account - Your Account - App Page Visit
        Given a user with the following criteria
            | criteria              |
            | oc account with offer |
        And the user accesses contract product section
        And the analytics interceptor service is initiated
        When the user accesses to offer oc account
        Then the analytics events contains the following variables:
            | item                     | value                                                     | type         | event          |
            | analytics                | analytics/glomo_base                                      | json schema  | App Page Visit |
            | page instance ID         | de                                                        | string       | App Page Visit |
            | version DL               | 20250414_5.0                                              | string       | App Page Visit |
            | page area                | privada                                                   | string       | App Page Visit |
            | business unit            | BBVA Mexico                                               | string       | App Page Visit |
            | channel                  | online                                                    | string       | App Page Visit |
            | language                 | ES                                                        | string       | App Page Visit |
            | level 1                  | cuentas                                                   | string       | App Page Visit |
            | level 2                  | contratar cuenta                                          | string       | App Page Visit |
            | level 3                  | 1 tu cuenta                                               | string       | App Page Visit |
            | page intent              | transaccion                                               | string       | App Page Visit |
            | page name                | app:privada:personas:cuentas:contratar cuenta:1 tu cuenta | string       | App Page Visit |
            | page segment             | personas                                                  | string       | App Page Visit |
            | project name             | Glomo                                                     | string       | App Page Visit |
            | site app name            | App BBVA Mexico                                           | string       | App Page Visit |
            | sysEnv                   | app                                                       | string       | App Page Visit |
            | user age                 | age                                                       | regexp named | App Page Visit |
            | device mobile            | si                                                        | string       | App Page Visit |
            | user gender              | gender                                                    | regexp named | App Page Visit |
            | profile ID               | profileID                                                 | regexp named | App Page Visit |
            | user segment global      | 003001                                                    | string       | App Page Visit |
            | user userState           | logado                                                    | string       | App Page Visit |
            | application name         | contratar cuenta                                          | string       | App Page Visit |
            | application type         | contratacion                                              | string       | App Page Visit |
            | fulfillment model        | online                                                    | string       | App Page Visit |
            | global application       | account sing up                                           | string       | App Page Visit |
            | application step         | 1 tu cuenta                                               | string       | App Page Visit |
            | product primary category | cuentas                                                   | string       | App Page Visit |
            | product name             | libreton basico                                           | string       | App Page Visit |

    @ANA_EVENT_OCA003
    @analytics
    @web
    @web-done
    @backend(test)
    @MX @vbank
    @ios @android
    Scenario Outline: OC Account - <app_step_key> - App Started
        Given a user with the following criteria
            | criteria              |
            | oc account with offer |
        And the user accesses to offer oc account
        And the analytics interceptor service is initiated
        When the user accesses to "<app_step_key>" from offer page
        Then the analytics events contains the following variables:
            | item                     | value                                                     | type         | event       |
            | analytics                | analytics/glomo_base                                      | json schema  | App Started |
            | page instance ID         | de                                                        | string       | App Started |
            | version DL               | 20250414_5.0                                              | string       | App Started |
            | page area                | privada                                                   | string       | App Started |
            | business unit            | BBVA Mexico                                               | string       | App Started |
            | channel                  | online                                                    | string       | App Started |
            | language                 | ES                                                        | string       | App Started |
            | level 1                  | cuentas                                                   | string       | App Started |
            | level 2                  | contratar cuenta                                          | string       | App Started |
            | level 3                  | 1 tu cuenta                                               | string       | App Started |
            | page intent              | transaccion                                               | string       | App Started |
            | page name                | app:privada:personas:cuentas:contratar cuenta:1 tu cuenta | string       | App Started |
            | page segment             | personas                                                  | string       | App Started |
            | project name             | Glomo                                                     | string       | App Started |
            | site app name            | App BBVA Mexico                                           | string       | App Started |
            | sysEnv                   | app                                                       | string       | App Started |
            | user age                 | age                                                       | regexp named | App Started |
            | device mobile            | si                                                        | string       | App Started |
            | user gender              | gender                                                    | regexp named | App Started |
            | profile ID               | profileID                                                 | regexp named | App Started |
            | user segment global      | 003001                                                    | string       | App Started |
            | user userState           | logado                                                    | string       | App Started |
            | application name         | contratar cuenta                                          | string       | App Started |
            | application type         | contratacion                                              | string       | App Started |
            | fulfillment model        | online                                                    | string       | App Started |
            | global application       | account sing up                                           | string       | App Started |
            | application step         | <app_step>                                                | string       | App Started |
            | product primary category | cuentas                                                   | string       | App Started |
            | product name             | libreton basico                                           | string       | App Started |

        Examples:
            | app_step_key  | app_step  |
            | Know more     | saber mas |
            | Personal data | continuar |

    @ANA_EVENT_OCA004
    @analytics
    @web
    @web-done
    @backend(test)
    @MX @vbank
    @ios @android
    Scenario: OC Account - Personal Data - App Step 2
        Given a user with the following criteria
            | criteria              |
            | oc account with offer |
        And the user accesses to offer oc account
        And the analytics interceptor service is initiated
        When the user accesses to "personal data" from offer page
        Then the analytics events contains the following variables:
            | item                     | value                                                                        | type         | event      |
            | analytics                | analytics/glomo_base                                                         | json schema  | App Step 2 |
            | page instance ID         | de                                                                           | string       | App Step 2 |
            | version DL               | 20250414_5.0                                                                 | string       | App Step 2 |
            | page area                | privada                                                                      | string       | App Step 2 |
            | business unit            | BBVA Mexico                                                                  | string       | App Step 2 |
            | channel                  | online                                                                       | string       | App Step 2 |
            | language                 | ES                                                                           | string       | App Step 2 |
            | level 1                  | cuentas                                                                      | string       | App Step 2 |
            | level 2                  | contratar cuenta                                                             | string       | App Step 2 |
            | level 3                  | 2 datos personales y direccion                                               | string       | App Step 2 |
            | page intent              | transaccion                                                                  | string       | App Step 2 |
            | page name                | app:privada:personas:cuentas:contratar cuenta:2 datos personales y direccion | string       | App Step 2 |
            | page segment             | personas                                                                     | string       | App Step 2 |
            | project name             | Glomo                                                                        | string       | App Step 2 |
            | site app name            | App BBVA Mexico                                                              | string       | App Step 2 |
            | sysEnv                   | app                                                                          | string       | App Step 2 |
            | user age                 | age                                                                          | regexp named | App Step 2 |
            | device mobile            | si                                                                           | string       | App Step 2 |
            | user gender              | gender                                                                       | regexp named | App Step 2 |
            | profile ID               | profileID                                                                    | regexp named | App Step 2 |
            | user segment global      | 003001                                                                       | string       | App Step 2 |
            | user userState           | logado                                                                       | string       | App Step 2 |
            | application name         | contratar cuenta                                                             | string       | App Step 2 |
            | application type         | contratacion                                                                 | string       | App Step 2 |
            | fulfillment model        | online                                                                       | string       | App Step 2 |
            | global application       | account sing up                                                              | string       | App Step 2 |
            | application step         | 2 datos personales y direccion                                               | string       | App Step 2 |
            | product primary category | cuentas                                                                      | string       | App Step 2 |
            | product name             | libreton basico                                                              | string       | App Step 2 |

    @ANA_EVENT_OCA005
    @analytics
    @web
    @web-done
    @backend(test)
    @MX @vbank
    @ios @android
    Scenario: OC Account - Terms and Conditions - App Step 3
        Given a user with the following criteria
            | criteria              |
            | oc account with offer |
        And the user accesses to offer oc account
        And the analytics interceptor service is initiated
        When the user continues to terms and conditions
        Then the analytics events contains the following variables:
            | item                     | value                                                                  | type         | event      |
            | analytics                | analytics/glomo_base                                                   | json schema  | App Step 3 |
            | page instance ID         | de                                                                     | string       | App Step 3 |
            | version DL               | 20250414_5.0                                                           | string       | App Step 3 |
            | page area                | privada                                                                | string       | App Step 3 |
            | business unit            | BBVA Mexico                                                            | string       | App Step 3 |
            | channel                  | online                                                                 | string       | App Step 3 |
            | language                 | ES                                                                     | string       | App Step 3 |
            | level 1                  | cuentas                                                                | string       | App Step 3 |
            | level 2                  | contratar cuenta                                                       | string       | App Step 3 |
            | level 3                  | 3 terminos y condiciones                                               | string       | App Step 3 |
            | page intent              | transaccion                                                            | string       | App Step 3 |
            | page name                | app:privada:personas:cuentas:contratar cuenta:3 terminos y condiciones | string       | App Step 3 |
            | page segment             | personas                                                               | string       | App Step 3 |
            | project name             | Glomo                                                                  | string       | App Step 3 |
            | site app name            | App BBVA Mexico                                                        | string       | App Step 3 |
            | sysEnv                   | app                                                                    | string       | App Step 3 |
            | user age                 | age                                                                    | regexp named | App Step 3 |
            | device mobile            | si                                                                     | string       | App Step 3 |
            | user gender              | gender                                                                 | regexp named | App Step 3 |
            | profile ID               | profileID                                                              | regexp named | App Step 3 |
            | user segment global      | 003001                                                                 | string       | App Step 3 |
            | user userState           | logado                                                                 | string       | App Step 3 |
            | application name         | contratar cuenta                                                       | string       | App Step 3 |
            | application type         | contratacion                                                           | string       | App Step 3 |
            | fulfillment model        | online                                                                 | string       | App Step 3 |
            | global application       | account sing up                                                        | string       | App Step 3 |
            | application step         | 3 terminos y condiciones                                               | string       | App Step 3 |
            | product primary category | cuentas                                                                | string       | App Step 3 |
            | product name             | libreton basico                                                        | string       | App Step 3 |

    @ANA_EVENT_OCA006
    @analytics
    @web
    @web-done
    @backend(test)
    @MX @vbank
    @ios @android
    Scenario: OC Account - Confirmation - App Step 4
        Given a user with the following criteria
            | criteria              |
            | oc account with offer |
        And the user accesses to offer oc account
        And the analytics interceptor service is initiated
        When the user confirms terms and conditions of contract account
        Then the analytics events contains the following variables:
            | item                     | value                                                        | type         | event      |
            | analytics                | analytics/glomo_base                                         | json schema  | App Step 4 |
            | page instance ID         | de                                                           | string       | App Step 4 |
            | version DL               | 20250414_5.0                                                 | string       | App Step 4 |
            | page area                | privada                                                      | string       | App Step 4 |
            | business unit            | BBVA Mexico                                                  | string       | App Step 4 |
            | channel                  | online                                                       | string       | App Step 4 |
            | language                 | ES                                                           | string       | App Step 4 |
            | level 1                  | cuentas                                                      | string       | App Step 4 |
            | level 2                  | contratar cuenta                                             | string       | App Step 4 |
            | level 3                  | 4 confirmacion                                               | string       | App Step 4 |
            | page intent              | transaccion                                                  | string       | App Step 4 |
            | page name                | app:privada:personas:cuentas:contratar cuenta:4 confirmacion | string       | App Step 4 |
            | page segment             | personas                                                     | string       | App Step 4 |
            | project name             | Glomo                                                        | string       | App Step 4 |
            | site app name            | App BBVA Mexico                                              | string       | App Step 4 |
            | sysEnv                   | app                                                          | string       | App Step 4 |
            | user age                 | age                                                          | regexp named | App Step 4 |
            | device mobile            | si                                                           | string       | App Step 4 |
            | user gender              | gender                                                       | regexp named | App Step 4 |
            | profile ID               | profileID                                                    | regexp named | App Step 4 |
            | user segment global      | 003001                                                       | string       | App Step 4 |
            | user userState           | logado                                                       | string       | App Step 4 |
            | application name         | contratar cuenta                                             | string       | App Step 4 |
            | application type         | contratacion                                                 | string       | App Step 4 |
            | fulfillment model        | online                                                       | string       | App Step 4 |
            | global application       | account sing up                                              | string       | App Step 4 |
            | application step         | 4 confirmacion                                               | string       | App Step 4 |
            | product primary category | cuentas                                                      | string       | App Step 4 |
            | product name             | libreton basico                                              | string       | App Step 4 |

    @ANA_EVENT_OCA007
    @analytics
    @web
    @web-done
    @backend(test)
    @MX @vbank
    @ios @android
    Scenario: OC Account - OTP - Page View
        Given a user with the following criteria
            | criteria              |
            | oc account with offer |
        And the user accesses to offer oc account
        And the analytics interceptor service is initiated
        When the user confirms the contracting of the account
        Then the analytics events contains the following variables:
            | item                | value                                             | type         | event     |
            | analytics           | analytics/glomo_base                              | json schema  | Page View |
            | page instance ID    | de                                                | string       | Page View |
            | version DL          | 20250414_5.0                                      | string       | Page View |
            | page area           | privada                                           | string       | Page View |
            | business unit       | BBVA Mexico                                       | string       | Page View |
            | channel             | online                                            | string       | Page View |
            | language            | ES                                                | string       | Page View |
            | level 1             | cuentas                                           | string       | Page View |
            | level 2             | contratar cuenta                                  | string       | Page View |
            | level 3             | otp                                               | string       | Page View |
            | page intent         | transaccion                                       | string       | Page View |
            | page name           | app:privada:personas:cuentas:contratar cuenta:otp | string       | Page View |
            | page segment        | personas                                          | string       | Page View |
            | project name        | Glomo                                             | string       | Page View |
            | site app name       | App BBVA Mexico                                   | string       | Page View |
            | sysEnv              | app                                               | string       | Page View |
            | user age            | age                                               | regexp named | Page View |
            | device mobile       | si                                                | string       | Page View |
            | user gender         | gender                                            | regexp named | Page View |
            | profile ID          | profileID                                         | regexp named | Page View |
            | user segment global | 003001                                            | string       | Page View |
            | user userState      | logado                                            | string       | Page View |
            | custom fields       | firma:token                                       | string       | Page View |

    @ANA_EVENT_OCA008
    @analytics
    @web
    @web-done
    @backend(test)
    @MX @vbank
    @ios @android
    Scenario: OC Account - Sign Up - App Completed
        Given a user with the following criteria
            | criteria              |
            | oc account with offer |
        And the user accesses to offer oc account
        And the analytics interceptor service is initiated
        And the user confirms the contracting of the account
        When the sms key "11111111" is entered
        Then the analytics events contains the following variables:
            | item                         | value                                                        | type         | event         |
            | analytics                    | analytics/glomo_base                                         | json schema  | App Completed |
            | page instance ID             | de                                                           | string       | App Completed |
            | version DL                   | 20250414_5.0                                                 | string       | App Completed |
            | page area                    | privada                                                      | string       | App Completed |
            | business unit                | BBVA Mexico                                                  | string       | App Completed |
            | channel                      | online                                                       | string       | App Completed |
            | language                     | ES                                                           | string       | App Completed |
            | level 1                      | cuentas                                                      | string       | App Completed |
            | level 2                      | contratar cuenta                                             | string       | App Completed |
            | level 3                      | pagina exitosa                                               | string       | App Completed |
            | page intent                  | transaccion                                                  | string       | App Completed |
            | page name                    | app:privada:personas:cuentas:contratar cuenta:pagina exitosa | string       | App Completed |
            | page segment                 | personas                                                     | string       | App Completed |
            | project name                 | Glomo                                                        | string       | App Completed |
            | site app name                | App BBVA Mexico                                              | string       | App Completed |
            | sysEnv                       | app                                                          | string       | App Completed |
            | user age                     | age                                                          | regexp named | App Completed |
            | device mobile                | si                                                           | string       | App Completed |
            | user gender                  | gender                                                       | regexp named | App Completed |
            | profile ID                   | profileID                                                    | regexp named | App Completed |
            | user segment global          | 003001                                                       | string       | App Completed |
            | user userState               | logado                                                       | string       | App Completed |
            | application name             | contratar cuenta                                             | string       | App Completed |
            | application type             | contratacion                                                 | string       | App Completed |
            | custom fields                | firma:token                                                  | string       | App Completed |
            | fulfillment model            | online                                                       | string       | App Completed |
            | global application           | account sing up                                              | string       | App Completed |
            | application operation number | 1234567890                                                   | string       | App Completed |
            | application state            | contratado                                                   | string       | App Completed |
            | application step             | pagina exitosa                                               | string       | App Completed |
            | product primary category     | cuentas                                                      | string       | App Completed |
            | product name                 | libreton basico                                              | string       | App Completed |
            | product state                | contratado                                                   | string       | App Completed |

    @ANA_EVENT_OCA009
    @analytics
    @web
    @web-done
    @backend(test)
    @MX @vbank
    @ios @android
    Scenario: OC Account - Know more - Page View
        Given a user with the following criteria
            | criteria              |
            | oc account with offer |
        And the user accesses to offer oc account
        And the analytics interceptor service is initiated
        When the user accesses to "know more" from offer page
        Then the analytics events contains the following variables:
            | item                | value                                                                    | type         | event     |
            | analytics           | analytics/glomo_base                                                     | json schema  | Page View |
            | page instance ID    | de                                                                       | string       | Page View |
            | version DL          | 20250414_5.0                                                             | string       | Page View |
            | page area           | privada                                                                  | string       | Page View |
            | business unit       | BBVA Mexico                                                              | string       | Page View |
            | channel             | online                                                                   | string       | Page View |
            | language            | ES                                                                       | string       | Page View |
            | level 1             | cuentas                                                                  | string       | Page View |
            | level 2             | contratar cuenta                                                         | string       | Page View |
            | level 3             | saber mas amplia tu cuenta                                               | string       | Page View |
            | page intent         | transaccion                                                              | string       | Page View |
            | page name           | app:privada:personas:cuentas:contratar cuenta:saber mas amplia tu cuenta | string       | Page View |
            | page segment        | personas                                                                 | string       | Page View |
            | project name        | Glomo                                                                    | string       | Page View |
            | site app name       | App BBVA Mexico                                                          | string       | Page View |
            | sysEnv              | app                                                                      | string       | Page View |
            | user age            | age                                                                      | regexp named | Page View |
            | device mobile       | si                                                                       | string       | Page View |
            | user gender         | gender                                                                   | regexp named | Page View |
            | profile ID          | profileID                                                                | regexp named | Page View |
            | user segment global | 003001                                                                   | string       | Page View |
            | user userState      | logado                                                                   | string       | Page View |

    @ANA_EVENT_OCA010
    @analytics
    @web
    @web-done
    @backend(test)
    @MX @vbank
    @ios @android
    Scenario: OC Account - Upgrade Account - Page View
        Given a user with the following criteria
            | criteria              |
            | oc account with offer |
        And the user accesses to offer oc account
        And the analytics interceptor service is initiated
        When the user updates his account
        Then the analytics events contains the following variables:
            | item                | value                                                              | type         | event     | event number |
            | analytics           | analytics/glomo_base                                               | json schema  | Page View | 2            |
            | page instance ID    | de                                                                 | string       | Page View | 2            |
            | version DL          | 20250414_5.0                                                       | string       | Page View | 2            |
            | page area           | privada                                                            | string       | Page View | 2            |
            | business unit       | BBVA Mexico                                                        | string       | Page View | 2            |
            | channel             | online                                                             | string       | Page View | 2            |
            | language            | ES                                                                 | string       | Page View | 2            |
            | level 1             | cuentas                                                            | string       | Page View | 2            |
            | level 2             | contratar cuenta                                                   | string       | Page View | 2            |
            | level 3             | ampliacion de cuenta                                               | string       | Page View | 2            |
            | page intent         | transaccion                                                        | string       | Page View | 2            |
            | page name           | app:privada:personas:cuentas:contratar cuenta:ampliacion de cuenta | string       | Page View | 2            |
            | page segment        | personas                                                           | string       | Page View | 2            |
            | project name        | Glomo                                                              | string       | Page View | 2            |
            | site app name       | App BBVA Mexico                                                    | string       | Page View | 2            |
            | sysEnv              | app                                                                | string       | Page View | 2            |
            | user age            | age                                                                | regexp named | Page View | 2            |
            | device mobile       | si                                                                 | string       | Page View | 2            |
            | user gender         | gender                                                             | regexp named | Page View | 2            |
            | profile ID          | profileID                                                          | regexp named | Page View | 2            |
            | user segment global | 003001                                                             | string       | Page View | 2            |
            | user userState      | logado                                                             | string       | Page View | 2            |

    @ANA_EVENT_OCA011
    @analytics
    @web
    @web-done
    @backend(test)
    @MX @vbank
    @ios @android
    Scenario: OC Account - Service Not Available - Error
        Given a user with the following criteria
            | criteria              |
            | oc account with offer |
        And the user accesses to offer oc account
        And the user confirms the contracting of the account
        When the sms key "11111111" is entered
        And the analytics interceptor service is initiated
        And the user retries to call the service 3 times
        Then the analytics events contains the following variables:
            | item                | value                                                                      | type         | event     | event number |
            | analytics           | analytics/glomo_base                                                       | json schema  | Page View | 4            |
            | page instance ID    | de                                                                         | string       | Page View | 4            |
            | version DL          | 20250414_5.0                                                               | string       | Page View | 4            |
            | page area           | privada                                                                    | string       | Page View | 4            |
            | business unit       | BBVA Mexico                                                                | string       | Page View | 4            |
            | channel             | online                                                                     | string       | Page View | 4            |
            | error page          | error servicio no disponible                                               | string       | Page View | 4            |
            | language            | ES                                                                         | string       | Page View | 4            |
            | level 1             | cuentas                                                                    | string       | Page View | 4            |
            | level 2             | contratar cuenta                                                           | string       | Page View | 4            |
            | level 3             | error servicio no disponible                                               | string       | Page View | 4            |
            | page intent         | transaccion                                                                | string       | Page View | 4            |
            | page name           | app:privada:personas:cuentas:contratar cuenta:error servicio no disponible | string       | Page View | 4            |
            | page segment        | personas                                                                   | string       | Page View | 4            |
            | project name        | Glomo                                                                      | string       | Page View | 4            |
            | site app name       | App BBVA Mexico                                                            | string       | Page View | 4            |
            | sysEnv              | app                                                                        | string       | Page View | 4            |
            | user age            | age                                                                        | regexp named | Page View | 4            |
            | device mobile       | si                                                                         | string       | Page View | 4            |
            | user gender         | gender                                                                     | regexp named | Page View | 4            |
            | profile ID          | profileID                                                                  | regexp named | Page View | 4            |
            | user segment global | 003001                                                                     | string       | Page View | 4            |
            | user userState      | logado                                                                     | string       | Page View | 4            |

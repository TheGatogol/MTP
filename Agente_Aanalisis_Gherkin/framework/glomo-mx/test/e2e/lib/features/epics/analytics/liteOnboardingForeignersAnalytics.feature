@liteOnBoardingForeingAnalytics
Feature: Analytics - Oboarding Foreigners

    @ANA_EVENT_LOF001
    @analytics
    @MX
    @vbank @backend(test)
    @ios @android @web
    @web-done
    Scenario: Onboarding Foreigners - App onclick start
        Given a user with the following criteria
            | criteria                 |
            | open new account foreing |
        And the user is in the Welcome screen
        And the analytics interceptor service is initiated
        When the user accesses the foreign country
        Then the analytics events contains the following variables
            | item                                         | value                                                 | type         | event              |
            | analytics                                    | analytics/glomo_base                                  | json schema  | App On Click Start |
            | version DL                                   | 20250414_5.0                                          | string       | App On Click Start |
            | page name                                    | app:publica:general:afiliacion basica:nacionalidad    | string       | App On Click Start |
            | level 1                                      | afiliacion basica                                     | string       | App On Click Start |
            | level 2                                      | nacionalidad                                          | string       | App On Click Start |
            | language                                     | ES                                                    | string       | App On Click Start |
            | page area                                    | publica                                               | string       | App On Click Start |
            | page intent                                  | transaccion                                           | string       | App On Click Start |
            | channel                                      | online                                                | string       | App On Click Start |
            | page instance ID                             | de                                                    | string       | App On Click Start |
            | page info version                            | appVersion                                            | regexp named | App On Click Start |
            | page segment                                 | general                                               | string       | App On Click Start |
            | sysEnv                                       | app                                                   | string       | App On Click Start |
            | business unit                                | BBVA Mexico                                           | string       | App On Click Start |
            | site app name                                | App BBVA Mexico                                       | string       | App On Click Start |
            | project name                                 | Glomo                                                 | string       | App On Click Start |
            | device mobile                                | si                                                    | string       | App On Click Start |
            | user userState                               | no logado                                             | string       | App On Click Start |
            | global application                           | onboarding account foreign                            | string       | App On Click Start |
            | application name                             | cuenta digital extranjeros                            | string       | App On Click Start |
            | application type                             | alta clientes                                         | string       | App On Click Start |
            | fulfillment model                            | online                                                | string       | App On Click Start |
            | application step                             | extranjera                                            | string       | App On Click Start |
            | product primary category                     | cuentas                                               | string       | App On Click Start |
            | product name                                 | libreton basico                                       | string       | App On Click Start |

    @ANA_EVENT_LOF002
    @analytics
    @android @ios @web-done
    @MX @backend(test) @vbank
    @web
    Scenario: Onboarding Foreigners - App Page Visit
        Given a user with the following criteria
            | criteria                 |
            | open new account foreing |
        And the user is in the Welcome screen
        And the analytics interceptor service is initiated
        When the user accesses the foreign country
        Then the analytics events contains the following variables
            | item                     | value                                               | type         | event          |
            | analytics                | analytics/glomo_base                                | json schema  | App Page Visit |
            | version DL               | 20250414_5.0                                        | string       | App Page Visit |
            | page name                | app:publica:general:afiliacion basica:1 beneficios  | string       | App Page Visit |
            | level 1                  | afiliacion basica                                   | string       | App Page Visit |
            | level 2                  | 1 beneficios                                        | string       | App Page Visit |
            | language                 | ES                                                  | string       | App Page Visit |
            | page area                | publica                                             | string       | App Page Visit |
            | page intent              | transaccion                                         | string       | App Page Visit |
            | channel                  | online                                              | string       | App Page Visit |
            | page instance ID         | de                                                  | string       | App Page Visit |
            | page info version        | appVersion                                          | regexp named | App Page Visit |
            | page segment             | general                                             | string       | App Page Visit |
            | sysEnv                   | app                                                 | string       | App Page Visit |
            | business unit            | BBVA Mexico                                         | string       | App Page Visit |
            | site app name            | App BBVA Mexico                                     | string       | App Page Visit |
            | project name             | Glomo                                               | string       | App Page Visit |
            | device mobile            | si                                                  | string       | App Page Visit |
            | user userState           | no logado                                           | string       | App Page Visit |
            | global application       | onboarding account foreign                          | string       | App Page Visit |
            | application name         | cuenta digital extranjeros                          | string       | App Page Visit |
            | application type         | alta clientes                                       | string       | App Page Visit |
            | fulfillment model        | online                                              | string       | App Page Visit |
            | application step         | 1 beneficios                                        | string       | App Page Visit |
            | product primary category | cuentas                                             | string       | App Page Visit |
            | product name             | libreton basico                                     | string       | App Page Visit |

    @ANA_EVENT_LOF003
    @analytics
    @android @ios @web-done
    @MX @backend(test) @vbank
    @web
    Scenario: Onboarding Foreigners - App Started
        Given a user with the following criteria
            | criteria                 |
            | open new account foreing |
        And the user is in the Welcome screen
        When the user accesses the foreign country
        And the analytics interceptor service is initiated
        And the user accesses for the first time and enters personal data
        Then the analytics events contains the following variables
            | item                     | value                                                | type         | event       |
            | analytics                | analytics/DIY E2E Sales_base                         | json schema  | App Started |
            | version DL               | 20250414_5.0                                         | string       | App Started |
            | page name                | app:publica:general:afiliacion basica:1 beneficios   | string       | App Started |
            | level 1                  | afiliacion basica                                    | string       | App Started |
            | level 2                  | 1 beneficios                                         | string       | App Started |
            | language                 | ES                                                   | string       | App Started |
            | page area                | publica                                              | string       | App Started |
            | page intent              | transaccion                                          | string       | App Started |
            | channel                  | online                                               | string       | App Started |
            | page instance ID         | de                                                   | string       | App Started |
            | page info version        | appVersion                                           | regexp named | App Started |
            | page segment             | general                                              | string       | App Started |
            | sysEnv                   | app                                                  | string       | App Started |
            | business unit            | BBVA Mexico                                          | string       | App Started |
            | site app name            | App BBVA Mexico                                      | string       | App Started |
            | project name             | Glomo                                                | string       | App Started |
            | device mobile            | si                                                   | string       | App Started |
            | user userState           | no logado                                            | string       | App Started |
            | global application       | onboarding account foreign                           | string       | App Started |
            | application name         | cuenta digital extranjeros                           | string       | App Started |
            | application type         | alta clientes                                        | string       | App Started |
            | fulfillment model        | online                                               | string       | App Started |
            | application step         | abrir cuenta                                         | string       | App Started |
            | product primary category | cuentas                                              | string       | App Started |
            | product name             | libreton basico                                      | string       | App Started |

    @ANA_EVENT_LOF004
    @analytics
    @android @ios @web-done
    @MX @backend(test) @vbank
    @web
    Scenario: Onboarding Foreigners - App Step 2
        Given a user with the following criteria
            | criteria                 |
            | open new account foreing |
        And the user is in the Welcome screen
        When the user accesses the foreign country
        And the analytics interceptor service is initiated
        And the user accesses for the first time and enters personal data
        Then the analytics events contains the following variables
            | item                     | value                                                    | type         | event      |
            | analytics                | analytics/glomo_base                                     | json schema  | App Step 2 |
            | version DL               | 20250414_5.0                                             | string       | App Step 2 |
            | page name                | app:publica:general:afiliacion basica:2 datos personales | string       | App Step 2 |
            | level 1                  | afiliacion basica                                        | string       | App Step 2 |
            | level 2                  | 2 datos personales                                       | string       | App Step 2 |
            | language                 | ES                                                       | string       | App Step 2 |
            | page area                | publica                                                  | string       | App Step 2 |
            | page intent              | transaccion                                              | string       | App Step 2 |
            | channel                  | online                                                   | string       | App Step 2 |
            | page instance ID         | de                                                       | string       | App Step 2 |
            | page info version        | appVersion                                               | regexp named | App Step 2 |
            | page segment             | general                                                  | string       | App Step 2 |
            | sysEnv                   | app                                                      | string       | App Step 2 |
            | business unit            | BBVA Mexico                                              | string       | App Step 2 |
            | site app name            | App BBVA Mexico                                          | string       | App Step 2 |
            | project name             | Glomo                                                    | string       | App Step 2 |
            | device mobile            | si                                                       | string       | App Step 2 |
            | user userState           | no logado                                                | string       | App Step 2 |
            | global application       | onboarding account foreign                               | string       | App Step 2 |
            | application name         | cuenta digital extranjeros                               | string       | App Step 2 |
            | application type         | alta clientes                                            | string       | App Step 2 |
            | fulfillment model        | online                                                   | string       | App Step 2 |
            | application step         | 2 datos personales                                       | string       | App Step 2 |
            | product primary category | cuentas                                                  | string       | App Step 2 |
            | product name             | libreton basico                                          | string       | App Step 2 |

    @ANA_EVENT_LOF005
    @analytics
    @android @ios @web-done
    @MX @backend(test) @vbank
    @web
    Scenario: Onboarding Foreigners - App Step 3
        Given a user with the following criteria
            | criteria                 |
            | open new account foreing |
        And the user is in the Welcome screen
        When the user accesses the foreign country
        And the analytics interceptor service is initiated
        And the user accesses for the first time and enters personal data
        Then the analytics events contains the following variables
            | item                     | value                                                  | type         | event      |
            | analytics                | analytics/glomo_base                                   | json schema  | App Step 3 |
            | version DL               | 20250414_5.0                                           | string       | App Step 3 |
            | page name                | app:publica:general:afiliacion basica:3 domicilio      | string       | App Step 3 |
            | level 1                  | afiliacion basica                                      | string       | App Step 3 |
            | level 2                  | 3 domicilio                                            | string       | App Step 3 |
            | language                 | ES                                                     | string       | App Step 3 |
            | page area                | publica                                                | string       | App Step 3 |
            | page intent              | transaccion                                            | string       | App Step 3 |
            | channel                  | online                                                 | string       | App Step 3 |
            | page instance ID         | de                                                     | string       | App Step 3 |
            | page info version        | appVersion                                             | regexp named | App Step 3 |
            | page segment             | general                                                | string       | App Step 3 |
            | sysEnv                   | app                                                    | string       | App Step 3 |
            | business unit            | BBVA Mexico                                            | string       | App Step 3 |
            | site app name            | App BBVA Mexico                                        | string       | App Step 3 |
            | project name             | Glomo                                                  | string       | App Step 3 |
            | device mobile            | si                                                     | string       | App Step 3 |
            | user userState           | no logado                                              | string       | App Step 3 |
            | global application       | onboarding account foreign                             | string       | App Step 3 |
            | application name         | cuenta digital extranjeros                             | string       | App Step 3 |
            | application type         | alta clientes                                          | string       | App Step 3 |
            | fulfillment model        | online                                                 | string       | App Step 3 |
            | application step         | 3 domicilio                                            | string       | App Step 3 |
            | product primary category | cuentas                                                | string       | App Step 3 |
            | product name             | libreton basico                                        | string       | App Step 3 |

    @ANA_EVENT_LOF006
    @analytics
    @android @ios @web-done
    @MX @backend(test) @vbank
    @web
    Scenario: Onboarding Foreigners - Huella nacionalidad
        Given a user with the following criteria
            | criteria                 |
            | open new account foreing |
        And the user is in the Welcome screen
        And the analytics interceptor service is initiated
        When the user accesses the foreign country
        Then the analytics events contains the following variables
            | item                     | value                                                 | type         | event     |
            | analytics                | analytics/glomo_base                                  | json schema  | Page View |
            | version DL               | 20250414_5.0                                          | string       | Page View |
            | page name                | app:publica:general:afiliacion basica:nacionalidad    | string       | Page View |
            | level 1                  | afiliacion basica                                     | string       | Page View |
            | level 2                  | nacionalidad                                          | string       | Page View |
            | language                 | ES                                                    | string       | Page View |
            | page area                | publica                                               | string       | Page View |
            | page intent              | transaccion                                           | string       | Page View |
            | channel                  | online                                                | string       | Page View |
            | page instance ID         | de                                                    | string       | Page View |
            | page info version        | appVersion                                            | regexp named | Page View |
            | page segment             | general                                               | string       | Page View |
            | sysEnv                   | app                                                   | string       | Page View |
            | business unit            | BBVA Mexico                                           | string       | Page View |
            | site app name            | App BBVA Mexico                                       | string       | Page View |
            | project name             | Glomo                                                 | string       | Page View |
            | device mobile            | si                                                    | string       | Page View |
            | user userState           | no logado                                             | string       | Page View |

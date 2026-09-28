@AnaOnBoardingN2
Feature: Analytics - OnBoarding Digital Account N2

    @ANA_EVENT_ONB001
    @analytics
    @MX
    @vbank @backend(test)
    @ios @android @web
    @web-done
    Scenario: Digital Account - Page View - Account detail
        Given a user with the following criteria
            | criteria        |
            | open an account |
        And the user is in the Welcome screen
        And the analytics interceptor service is initiated
        When the user goes to "register account"
        Then the analytics events contains the following variables
            | item                    | value                                                   | type             | event     | event number |
            | analytics               | analytics/glomo_base                                    | json schema      | Page View | 2            |
            | version DL              | 20250414_5.0                                            | string           | Page View | 2            |
            | page name               | app:publica:general:afiliacion basica:detalle de cuenta | string           | Page View | 2            |
            | level 1                 | afiliacion basica                                       | string           | Page View | 2            |
            | level 2                 | detalle de cuenta                                       | string           | Page View | 2            |
            | language                | ES                                                      | string           | Page View | 2            |
            | page area               | publica                                                 | string           | Page View | 2            |
            | page intent             | informacion                                             | string           | Page View | 2            |
            | channel                 | online                                                  | string           | Page View | 2            |
            | page instance ID        | de                                                      | string           | Page View | 2            |
            | page info version       | appVersion                                              | regexp named     | Page View | 2            |
            | page segment            | general                                                 | string           | Page View | 2            |
            | sysEnv                  | app                                                     | string           | Page View | 2            |
            | business unit           | BBVA Mexico                                             | string           | Page View | 2            |
            | site app name           | App BBVA Mexico                                         | string           | Page View | 2            |
            | project name            | Open Market                                                   | string           | Page View | 2            |
            | device mobile           | si                                                      | string           | Page View | 2            |
            | user userState          | no logado                                               | string           | Page View | 2            |
            | internal campaign       |                                                         | empty array      | Page View | 2            |
            | optimization attributes |                                                         | empty array      | Page View | 2            |
            | application             |                                                         | empty str object | Page View | 2            |
            | products attributes     |                                                         | empty array      | Page View | 2            |

    @ANA_EVENT_ONB002
    @analytics
    @MX
    @vbank @backend(test)
    @ios @android @web
    @web-done
    Scenario: Digital Account - App On Click Start
        Given a user with the following criteria
            | criteria        |
            | open an account |
        And the user is in the Welcome screen
        And the analytics interceptor service is initiated
        When the user goes to "screen open account"
        Then the analytics events contains the following variables
            | item                     | value                                                   | type         | event              |
            | analytics                | analytics/glomo_base                                    | json schema  | App On Click Start |
            | version DL               | 20250414_5.0                                            | string       | App On Click Start |
            | page name                | app:publica:general:afiliacion basica:detalle de cuenta | string       | App On Click Start |
            | level 1                  | afiliacion basica                                       | string       | App On Click Start |
            | level 2                  | detalle de cuenta                                       | string       | App On Click Start |
            | language                 | ES                                                      | string       | App On Click Start |
            | page area                | publica                                                 | string       | App On Click Start |
            | page intent              | informacion                                             | string       | App On Click Start |
            | channel                  | online                                                  | string       | App On Click Start |
            | page instance ID         | de                                                      | string       | App On Click Start |
            | page info version        | appVersion                                              | regexp named | App On Click Start |
            | page segment             | general                                                 | string       | App On Click Start |
            | sysEnv                   | app                                                     | string       | App On Click Start |
            | business unit            | BBVA Mexico                                             | string       | App On Click Start |
            | site app name            | App BBVA Mexico                                         | string       | App On Click Start |
            | project name             | Open Market                                                   | string       | App On Click Start |
            | device mobile            | si                                                      | string       | App On Click Start |
            | user userState           | no logado                                               | string       | App On Click Start |
            | global application       | onboarding account                                              | string       | App On Click Start |
            | application name         | afiliacion basica                                       | string       | App On Click Start |
            | application type         | alta clientes                                           | string       | App On Click Start |
            | application step         | abrir cuenta detalle                                    | string       | App On Click Start |
            | fulfillment model        | online                                                  | string       | App On Click Start |
            | product primary category | cuentas                                                 | string       | App On Click Start |
            | product name             | cuenta digital                                          | string       | App On Click Start |
            | internal campaign        |                                                         | empty array  | App On Click Start |
            | optimization attributes  |                                                         | empty array  | App On Click Start |

    @ANA_EVENT_ONB003
    @analytics
    @MX
    @vbank @backend(test)
    @ios @android @web
    @web-done
    Scenario: Digital Account - App Page Visit
        Given a user with the following criteria
            | criteria        |
            | open an account |
        And the user is in the Welcome screen
        And the analytics interceptor service is initiated
        When the user goes to "screen open account"
        Then the analytics events contains the following variables
            | item                     | value                                                    | type         | event          |
            | analytics                | analytics/glomo_base                                     | json schema  | App Page Visit |
            | version DL               | 20250414_5.0                                             | string       | App Page Visit |
            | page name                | app:publica:general:afiliacion basica:1 datos personales | string       | App Page Visit |
            | level 1                  | afiliacion basica                                        | string       | App Page Visit |
            | level 2                  | 1 datos personales                                       | string       | App Page Visit |
            | language                 | ES                                                       | string       | App Page Visit |
            | page area                | publica                                                  | string       | App Page Visit |
            | page intent              | informacion                                              | string       | App Page Visit |
            | channel                  | online                                                   | string       | App Page Visit |
            | page instance ID         | de                                                       | string       | App Page Visit |
            | page info version        | appVersion                                               | regexp named | App Page Visit |
            | page segment             | general                                                  | string       | App Page Visit |
            | sysEnv                   | app                                                      | string       | App Page Visit |
            | business unit            | BBVA Mexico                                              | string       | App Page Visit |
            | site app name            | App BBVA Mexico                                          | string       | App Page Visit |
            | project name             | Open Market                                                    | string       | App Page Visit |
            | device mobile            | si                                                       | string       | App Page Visit |
            | user userState           | no logado                                                | string       | App Page Visit |
            | global application       | onboarding account                                               | string       | App Page Visit |
            | application name         | afiliacion basica                                        | string       | App Page Visit |
            | application type         | alta clientes                                            | string       | App Page Visit |
            | application step         | 1 datos personales                                       | string       | App Page Visit |
            | fulfillment model        | online                                                   | string       | App Page Visit |
            | qualified visits         | true                                                     | string       | App Page Visit |
            | product primary category | cuentas                                                  | string       | App Page Visit |
            | product name             | cuenta digital                                           | string       | App Page Visit |
            | internal campaign        |                                                          | empty array  | App Page Visit |
            | optimization attributes  |                                                          | empty array  | App Page Visit |

    @ANA_EVENT_ONB004
    @analytics
    @MX
    @vbank @backend(test)
    @ios @android @web
    @web-done
    Scenario: Digital Account - App Started - Scan button click
        Given a user with the following criteria
            | criteria        |
            | open an account |
        And the user is in the Welcome screen
        And the analytics interceptor service is initiated
        And the user goes to "screen open account"
        When the user accesses to "scan recomendations" modal
        Then the analytics events contains the following variables
            | item                     | value                                                    | type         | event       |
            | analytics                | analytics/glomo_base                                     | json schema  | App Started |
            | version DL               | 20250414_5.0                                             | string       | App Started |
            | page name                | app:publica:general:afiliacion basica:1 datos personales | string       | App Started |
            | level 1                  | afiliacion basica                                        | string       | App Started |
            | level 2                  | 1 datos personales                                       | string       | App Started |
            | language                 | ES                                                       | string       | App Started |
            | page area                | publica                                                  | string       | App Started |
            | page intent              | informacion                                              | string       | App Started |
            | channel                  | online                                                   | string       | App Started |
            | page instance ID         | de                                                       | string       | App Started |
            | page info version        | appVersion                                               | regexp named | App Started |
            | page segment             | general                                                  | string       | App Started |
            | sysEnv                   | app                                                      | string       | App Started |
            | business unit            | BBVA Mexico                                              | string       | App Started |
            | site app name            | App BBVA Mexico                                          | string       | App Started |
            | project name             | Open Market                                                    | string       | App Started |
            | device mobile            | si                                                       | string       | App Started |
            | user userState           | no logado                                                | string       | App Started |
            | global application       | onboarding account                                               | string       | App Started |
            | application name         | afiliacion basica                                        | string       | App Started |
            | application type         | alta clientes                                            | string       | App Started |
            | application step         | escanea tu ine                                           | string       | App Started |
            | fulfillment model        | online                                                   | string       | App Started |
            | product primary category | cuentas                                                  | string       | App Started |
            | product name             | cuenta digital                                           | string       | App Started |
            | internal campaign        |                                                          | empty array  | App Started |
            | optimization attributes  |                                                          | empty array  | App Started |

    @ANA_EVENT_ONB005
    @analytics
    @MX
    @vbank @backend(test)
    @ios @android @web
    @web-done
    @manual @JIRA.GLOMOMX-237722
    Scenario Outline: Digital Account - App Started - <case>
        Given a user with the following criteria
            | criteria        |
            | open an account |
        And the user is in the Welcome screen
        And the analytics interceptor service is initiated
        And the user goes to "screen open account"
        When the user taps on "<field>" item
        Then the analytics events contains the following variables
            | item                     | value                                                    | type         | event       |
            | analytics                | analytics/glomo_base                                     | json schema  | App Started |
            | version DL               | 20250414_5.0                                             | string       | App Started |
            | page name                | app:publica:general:afiliacion basica:1 datos personales | string       | App Started |
            | level 1                  | afiliacion basica                                        | string       | App Started |
            | level 2                  | 1 datos personales                                       | string       | App Started |
            | language                 | ES                                                       | string       | App Started |
            | page area                | publica                                                  | string       | App Started |
            | page intent              | transaccion                                              | string       | App Started |
            | channel                  | online                                                   | string       | App Started |
            | page instance ID         | de                                                       | string       | App Started |
            | page info version        | appVersion                                               | regexp named | App Started |
            | page segment             | general                                                  | string       | App Started |
            | sysEnv                   | app                                                      | string       | App Started |
            | business unit            | BBVA Mexico                                              | string       | App Started |
            | site app name            | App BBVA Mexico                                          | string       | App Started |
            | project name             | Open Market                                                    | string       | App Started |
            | device mobile            | si                                                       | string       | App Started |
            | user userState           | no logado                                                | string       | App Started |
            | global application       | onboarding account                                               | string       | App Started |
            | application name         | afiliacion basica                                        | string       | App Started |
            | application type         | alta clientes                                            | string       | App Started |
            | application step         | <step>                                                   | string       | App Started |
            | fulfillment model        | online                                                   | string       | App Started |
            | product primary category | cuentas                                                  | string       | App Started |
            | product name             | cuenta digital                                           | string       | App Started |
            | internal campaign        |                                                          | empty array  | App Started |
            | optimization attributes  |                                                          | empty array  | App Started |

        Examples:
            | case                    | field                 | step                |
            | Name input              | name                  | nombre              |
            | First lastname input    | first lastname        | primer apellido     |
            | Second lastname input   | second lastname       | segundo apellido    |
            | Birthdate input         | birthdate             | fecha nacimiento    |
            | Birthplace input        | birthplace            | lugar nacimiento    |
            | Male gender Input       | sex option male       | genero hombre       |
            | Female gender Input     | sex option female     | genero mujer        |
            | Non binary gender Input | sex option non binary | genero no binario   |
            | Button Help Icon        | ine tooltip           | info identificacion |
            | Number INE Input        | number ine            | numero ine          |

    @ANA_EVENT_ONB006
    @analytics
    @MX
    @vbank @backend(test)
    @ios @android @web
    @web-done
    Scenario Outline: Digital Account - App Step 2 - <case>
        Given a user with the following criteria
            | criteria        |
            | <criteria>      |
        And the user is in the Welcome screen
        And the analytics interceptor service is initiated
        When the user accesses for the first time and enters "correct" personal data
        Then the analytics events contains the following variables
            | item                     | value                                             | type         | event      |
            | analytics                | analytics/glomo_base                              | json schema  | App Step 2 |
            | version DL               | 20250414_5.0                                      | string       | App Step 2 |
            | page name                | app:publica:general:afiliacion basica:2 domicilio | string       | App Step 2 |
            | level 1                  | afiliacion basica                                 | string       | App Step 2 |
            | level 2                  | 2 domicilio                                       | string       | App Step 2 |
            | language                 | ES                                                | string       | App Step 2 |
            | page area                | publica                                           | string       | App Step 2 |
            | page intent              | transaccion                                       | string       | App Step 2 |
            | channel                  | online                                            | string       | App Step 2 |
            | page instance ID         | de                                                | string       | App Step 2 |
            | page info version        | appVersion                                        | regexp named | App Step 2 |
            | page segment             | general                                           | string       | App Step 2 |
            | sysEnv                   | app                                               | string       | App Step 2 |
            | business unit            | BBVA Mexico                                       | string       | App Step 2 |
            | site app name            | App BBVA Mexico                                   | string       | App Step 2 |
            | project name             | Open Market                                             | string       | App Step 2 |
            | device mobile            | si                                                | string       | App Step 2 |
            | user userState           | no logado                                         | string       | App Step 2 |
            | application typology     | <step>                                            | string       | App Step 2 |
            | global application       | onboarding account                                        | string       | App Step 2 |
            | application name         | afiliacion basica                                 | string       | App Step 2 |
            | application type         | alta clientes                                     | string       | App Step 2 |
            | application step         | 2 domicilio                                       | string       | App Step 2 |
            | fulfillment model        | online                                            | string       | App Step 2 |
            | product primary category | cuentas                                           | string       | App Step 2 |
            | product name             | cuenta digital                                    | string       | App Step 2 |
            | internal campaign        |                                                   | empty array  | App Step 2 |
            | optimization attributes  |                                                   | empty array  | App Step 2 |
        Examples:
            | case                          | step                |criteria                    |
            | Male gender Input             | genero hombre       |open an account male        |
            | Female gender Input           | genero mujer        |open an account female      |
            | Non binary gender Input       | genero no binario   |open an account non binary  |

    @ANA_EVENT_ONB007
    @analytics
    @MX
    @vbank @backend(test)
    @ios @android @web
    @web-done
    Scenario Outline: Digital Account - App Step 3 - <case>
        Given a user with the following criteria
            | criteria        |
            | <criteria>      |
        And the user is in the Welcome screen
        And the analytics interceptor service is initiated
        And the user accesses for the first time and enters "correct" personal data
        When the user registers current address information and "selects" continue
        Then the analytics events contains the following variables
            | item                     | value                                                     | type         | event      |
            | analytics                | analytics/glomo_base                                      | json schema  | App Step 3 |
            | version DL               | 20250414_5.0                                              | string       | App Step 3 |
            | page name                | app:publica:general:afiliacion basica:3 datos de contacto | string       | App Step 3 |
            | level 1                  | afiliacion basica                                         | string       | App Step 3 |
            | level 2                  | 3 datos de contacto                                       | string       | App Step 3 |
            | language                 | ES                                                        | string       | App Step 3 |
            | page area                | publica                                                   | string       | App Step 3 |
            | page intent              | informacion                                               | string       | App Step 3 |
            | channel                  | online                                                    | string       | App Step 3 |
            | page instance ID         | de                                                        | string       | App Step 3 |
            | page info version        | appVersion                                                | regexp named | App Step 3 |
            | page segment             | general                                                   | string       | App Step 3 |
            | sysEnv                   | app                                                       | string       | App Step 3 |
            | business unit            | BBVA Mexico                                               | string       | App Step 3 |
            | site app name            | App BBVA Mexico                                           | string       | App Step 3 |
            | project name             | Open Market                                                     | string       | App Step 3 |
            | device mobile            | si                                                        | string       | App Step 3 |
            | user userState           | no logado                                                 | string       | App Step 3 |
            | application typology     | <step>                                                    | string       | App Step 3 |
            | global application       | onboarding account                                                | string       | App Step 3 |
            | application name         | afiliacion basica                                         | string       | App Step 3 |
            | application type         | alta clientes                                             | string       | App Step 3 |
            | application step         | 3 datos de contacto                                       | string       | App Step 3 |
            | fulfillment model        | online                                                    | string       | App Step 3 |
            | product primary category | cuentas                                                   | string       | App Step 3 |
            | product name             | cuenta digital                                            | string       | App Step 3 |
            | internal campaign        |                                                           | empty array  | App Step 3 |
            | optimization attributes  |                                                           | empty array  | App Step 3 |
        Examples:
            | case                          | step                |criteria                    |
            | Male gender Input             | genero hombre       |open an account male        |
            | Female gender Input           | genero mujer        |open an account female      |
            | Non binary gender Input       | genero no binario   |open an account non binary  |

    @ANA_EVENT_ONB008
    @analytics
    @MX
    @vbank @backend(test)
    @ios @android @web
    @web-done
    Scenario Outline: Digital Account - App Step 4 - <case>
        Given a user with the following criteria
            | criteria        |
            | <criteria>      |
        And the user is in the Welcome screen
        And the analytics interceptor service is initiated
        And the user accesses for the first time and enters "correct" personal data
        And the user registers current address information and "selects" continue
        When the user registers their current contact information with "valid" phone
        Then the analytics events contains the following variables
            | item                     | value                                             | type         | event      |
            | analytics                | analytics/glomo_base                              | json schema  | App Step 4 |
            | version DL               | 20250414_5.0                                      | string       | App Step 4 |
            | page name                | app:publica:general:afiliacion basica:4 contratos | string       | App Step 4 |
            | level 1                  | afiliacion basica                                 | string       | App Step 4 |
            | level 2                  | 4 contratos                                       | string       | App Step 4 |
            | language                 | ES                                                | string       | App Step 4 |
            | page area                | publica                                           | string       | App Step 4 |
            | page intent              | informacion                                       | string       | App Step 4 |
            | channel                  | online                                            | string       | App Step 4 |
            | page instance ID         | de                                                | string       | App Step 4 |
            | page info version        | appVersion                                        | regexp named | App Step 4 |
            | page segment             | general                                           | string       | App Step 4 |
            | sysEnv                   | app                                               | string       | App Step 4 |
            | business unit            | BBVA Mexico                                       | string       | App Step 4 |
            | site app name            | App BBVA Mexico                                   | string       | App Step 4 |
            | project name             | Open Market                                             | string       | App Step 4 |
            | device mobile            | si                                                | string       | App Step 4 |
            | user userState           | no logado                                         | string       | App Step 4 |
            | prospect ID              | <prospectID>                                      | string       | App Step 4 |
            | application typology     | <step>                                            | string       | App Step 4 |
            | global application       | onboarding account                                        | string       | App Step 4 |
            | application name         | afiliacion basica                                 | string       | App Step 4 |
            | application type         | alta clientes                                     | string       | App Step 4 |
            | application step         | 4 contratos                                       | string       | App Step 4 |
            | fulfillment model        | online                                            | string       | App Step 4 |
            | product primary category | cuentas                                           | string       | App Step 4 |
            | product name             | cuenta digital                                    | string       | App Step 4 |
            | internal campaign        |                                                   | empty array  | App Step 4 |
            | optimization attributes  |                                                   | empty array  | App Step 4 |
        Examples:
            | case                    | step                |criteria                    |prospectID                |
            | Male gender Input       | genero hombre       |open an account male        |54ks4cBlH878qfWgSHVT_w    |
            | Female gender Input     | genero mujer        |open an account female      |r37bmITn8M6WIFuz7Se2Ew    |
            | Non bnary gender Input  | genero no binario   |open an account non binary  |i4LoAPpUzybBy8OO1M6m-Q    |

    @ANA_EVENT_ONB009
    @analytics
    @MX
    @vbank @backend(test)
    @ios @android @web
    @web-done
    Scenario Outline: Digital Account - App Step 5 - <case>
        Given a user with the following criteria
            | criteria        |
            | <criteria>      |
        And the user is in the Welcome screen
        And the analytics interceptor service is initiated
        And the user accesses for the first time and enters "correct" personal data
        And the user registers current address information and "selects" continue
        And the user registers their current contact information with "valid" phone
        When the user accepts terms and conditions of contracts and "wants" to sign
        Then the analytics events contains the following variables
            | item                     | value                                              | type         | event      |
            | analytics                | analytics/glomo_base                               | json schema  | App Step 5 |
            | version DL               | 20250414_5.0                                       | string       | App Step 5 |
            | page name                | app:publica:general:afiliacion basica:5 contrasena | string       | App Step 5 |
            | level 1                  | afiliacion basica                                  | string       | App Step 5 |
            | level 2                  | 5 contrasena                                       | string       | App Step 5 |
            | language                 | ES                                                 | string       | App Step 5 |
            | page area                | publica                                            | string       | App Step 5 |
            | page intent              | transaccion                                        | string       | App Step 5 |
            | channel                  | online                                             | string       | App Step 5 |
            | page instance ID         | de                                                 | string       | App Step 5 |
            | page info version        | appVersion                                         | regexp named | App Step 5 |
            | page segment             | general                                            | string       | App Step 5 |
            | sysEnv                   | app                                                | string       | App Step 5 |
            | business unit            | BBVA Mexico                                        | string       | App Step 5 |
            | site app name            | App BBVA Mexico                                    | string       | App Step 5 |
            | project name             | Open Market                                              | string       | App Step 5 |
            | device mobile            | si                                                 | string       | App Step 5 |
            | user userState           | no logado                                          | string       | App Step 5 |
            | prospect ID              | <prospectID>                                       | string       | App Step 5 |
            | application typology     | <step>                                             | string       | App Step 5 |
            | global application       | onboarding account                                         | string       | App Step 5 |
            | application name         | afiliacion basica                                  | string       | App Step 5 |
            | application type         | alta clientes                                      | string       | App Step 5 |
            | application step         | 5 contrasena                                       | string       | App Step 5 |
            | fulfillment model        | online                                             | string       | App Step 5 |
            | product primary category | cuentas                                            | string       | App Step 5 |
            | product name             | cuenta digital                                     | string       | App Step 5 |
            | application process      | historial credito seleccionado                     | string       | App Step 5 |
            | internal campaign        |                                                    | empty array  | App Step 5 |
            | optimization attributes  |                                                    | empty array  | App Step 5 |
        Examples:
            | case                    | step                |criteria                    |prospectID                |
            | Male gender Input       | genero hombre       |open an account male        |54ks4cBlH878qfWgSHVT_w    |
            | Female gender Input     | genero mujer        |open an account female      |r37bmITn8M6WIFuz7Se2Ew    |
            | Non bnary gender Input  | genero no binario   |open an account non binary  |i4LoAPpUzybBy8OO1M6m-Q    |

    @ANA_EVENT_ONB010
    @analytics
    @MX
    @vbank @backend(test)
    @ios @android @web
    @web-done
    Scenario Outline: Digital Account - App Step 6 - <case>
        Given a user with the following criteria
            | criteria        |
            | <criteria>      |
        And the user is in the Welcome screen
        And the analytics interceptor service is initiated
        And the user accesses for the first time and enters "correct" personal data
        And the user registers current address information and "selects" continue
        And the user registers their current contact information with "valid" phone
        And the user accepts terms and conditions of contracts and "wants" to sign
        When the user enters password data
        Then the analytics events contains the following variables
            | item                     | value                                                | type         | event      |
            | analytics                | analytics/glomo_base                                 | json schema  | App Step 6 |
            | version DL               | 20250414_5.0                                         | string       | App Step 6 |
            | page name                | app:publica:general:afiliacion basica:6 confirmacion | string       | App Step 6 |
            | level 1                  | afiliacion basica                                    | string       | App Step 6 |
            | level 2                  | 6 confirmacion                                       | string       | App Step 6 |
            | language                 | ES                                                   | string       | App Step 6 |
            | page area                | publica                                              | string       | App Step 6 |
            | page intent              | transaccion                                          | string       | App Step 6 |
            | channel                  | online                                               | string       | App Step 6 |
            | page instance ID         | de                                                   | string       | App Step 6 |
            | page info version        | appVersion                                           | regexp named | App Step 6 |
            | page segment             | general                                              | string       | App Step 6 |
            | sysEnv                   | app                                                  | string       | App Step 6 |
            | business unit            | BBVA Mexico                                          | string       | App Step 6 |
            | site app name            | App BBVA Mexico                                      | string       | App Step 6 |
            | project name             | Open Market                                                | string       | App Step 6 |
            | device mobile            | si                                                   | string       | App Step 6 |
            | user userState           | no logado                                            | string       | App Step 6 |
            | prospect ID              | <prospectID>                                         | string       | App Step 6 |
            | application typology     | <step>                                               | string       | App Step 6 |
            | global application       | onboarding account                                           | string       | App Step 6 |
            | application name         | afiliacion basica                                    | string       | App Step 6 |
            | application type         | alta clientes                                        | string       | App Step 6 |
            | application step         | 6 confirmacion                                       | string       | App Step 6 |
            | fulfillment model        | online                                               | string       | App Step 6 |
            | product primary category | cuentas                                              | string       | App Step 6 |
            | product name             | cuenta digital                                       | string       | App Step 6 |
            | application process      | historial credito seleccionado                       | string       | App Step 6 |
            | internal campaign        |                                                      | empty array  | App Step 6 |
            | optimization attributes  |                                                      | empty array  | App Step 6 |
        Examples:
            | case                    | step                |criteria                    |prospectID                |
            | Male gender Input       | genero hombre       |open an account male        |54ks4cBlH878qfWgSHVT_w    |
            | Female gender Input     | genero mujer        |open an account female      |r37bmITn8M6WIFuz7Se2Ew    |
            | Non bnary gender Input  | genero no binario   |open an account non binary  |i4LoAPpUzybBy8OO1M6m-Q    |

    @ANA_EVENT_ONB011
    @analytics
    @web @ios @android
    @manual @JIRA.GLOMOGL-20021
    @MX @backend(test) @vbank @web-done
    Scenario: Digital Account - Page View ID Scan impossible error
        Given a user with the following criteria
            | criteria        |
            | open an account |
        And the user is in the Welcome screen
        And the analytics interceptor service is initiated
        And the user goes to "screen open account"
        When the user accesses to "scan recomendations" modal
        Then the analytics events contains the following variables
            | item                    | value                                                                     | type             | event     | event number |
            | analytics               | analytics/glomo_base                                                      | json schema      | Page View | 2            |
            | version DL              | 20250414_5.0                                                              | string           | Page View | 2            |
            | page name               | app:publica:general:afiliacion basica:error no es posible escanear tu INE | string           | Page View | 2            |
            | level 1                 | afiliacion basica                                                         | string           | Page View | 2            |
            | level 2                 | error no es posible escanear tu INE                                       | string           | Page View | 2            |
            | error page              | error no es posible escanear tu INE                                       | string           | Page View | 2            |
            | language                | ES                                                                        | string           | Page View | 2            |
            | page area               | publica                                                                   | string           | Page View | 2            |
            | page intent             | informacion                                                               | string           | Page View | 2            |
            | channel                 | online                                                                    | string           | Page View | 2            |
            | page instance ID        | de                                                                        | string           | Page View | 2            |
            | page info version       | appVersion                                                                | regexp named     | Page View | 2            |
            | page segment            | general                                                                   | string           | Page View | 2            |
            | sysEnv                  | app                                                                       | string           | Page View | 2            |
            | business unit           | BBVA Mexico                                                               | string           | Page View | 2            |
            | site app name           | App BBVA Mexico                                                           | string           | Page View | 2            |
            | project name            | Glomo                                                                     | string           | Page View | 2            |
            | device mobile           | si                                                                        | string           | Page View | 2            |
            | user userState          | no logado                                                                 | string           | Page View | 2            |
            | internal campaign       |                                                                           | empty array      | Page View | 2            |
            | optimization attributes |                                                                           | empty array      | Page View | 2            |
            | application             |                                                                           | empty str object | Page View | 2            |
            | products attributes     |                                                                           | empty array      | Page View | 2            |

    @ANA_EVENT_ONB012
    @analytics
    @MX
    @vbank @backend(test)
    @ios @android @web
    @web-done
    Scenario Outline: Digital Account - App Completed - <case>
        Given a user with the following criteria
            | criteria        |
            | <criteria>      |
        And the user is in the Welcome screen
        And the analytics interceptor service is initiated
        And the user accesses for the first time and enters "correct" personal data
        And the user registers current address information and "selects" continue
        And the user registers their current contact information with "valid" phone
        And the user accepts terms and conditions of contracts and "wants" to sign
        When the user enters password data and registers an account with otp
        Then the analytics events contains the following variables
            | item                         | value                                                | type         | event         |
            | analytics                    | analytics/glomo_base                                 | json schema  | App Completed |
            | version DL                   | 20250414_5.0                                         | string       | App Completed |
            | page name                    | app:publica:general:afiliacion basica:pagina exitosa | string       | App Completed |
            | level 1                      | afiliacion basica                                    | string       | App Completed |
            | level 2                      | pagina exitosa                                       | string       | App Completed |
            | language                     | ES                                                   | string       | App Completed |
            | page area                    | publica                                              | string       | App Completed |
            | page intent                  | transaccion                                          | string       | App Completed |
            | channel                      | online                                               | string       | App Completed |
            | page instance ID             | de                                                   | string       | App Completed |
            | page info version            | appVersion                                           | regexp named | App Completed |
            | page segment                 | general                                              | string       | App Completed |
            | sysEnv                       | app                                                  | string       | App Completed |
            | business unit                | BBVA Mexico                                          | string       | App Completed |
            | site app name                | App BBVA Mexico                                      | string       | App Completed |
            | project name                 | Open Market                                                | string       | App Completed |
            | device mobile                | si                                                   | string       | App Completed |
            | user userState               | no logado                                            | string       | App Completed |
            | prospect ID                  | <prospectID>                                         | string       | App Completed |
            | application typology         | <step>                                               | string       | App Completed |
            | global application           | onboarding account                                           | string       | App Completed |
            | application name             | afiliacion basica                                    | string       | App Completed |
            | application type             | alta clientes                                        | string       | App Completed |
            | application step             | pagina exitosa                                       | string       | App Completed |
            | fulfillment model            | online                                               | string       | App Completed |
            | application state            | contratado                                           | string       | App Completed |
            | application operation number | <applicationOperationNumber>                         | string       | App Completed |
            | custom fields                | firma:sms                                            | string       | App Completed |
            | product primary category     | cuentas                                              | string       | App Completed |
            | product name                 | cuenta digital                                       | string       | App Completed |
            | product state                | contratado                                           | string       | App Completed |
            | application process          | historial credito seleccionado                       | string       | App Completed |
            | internal campaign            |                                                      | empty array  | App Completed |
            | optimization attributes      |                                                      | empty array  | App Completed |
        Examples:
            | case                    | step                |criteria                    |prospectID                |applicationOperationNumber     |
            | Male gender Input       | genero hombre       |open an account male        |BlkMcc0nnOfgZxkb_wPSyQ    |0038132318                     |
            | Female gender Input     | genero mujer        |open an account female      |HwS26EkuDH2wD3NiNrmA6g    |0097813473                     |
            | Non bnary gender Input  | genero no binario   |open an account non binary  |F64qeB-xaFSm6RgFsPfuzg    |0000356829                     |

    @ANA_EVENT_ONB013
    @analytics
    @web @ios @android
    @MX @backend(test) @vbank @web-done
    Scenario: Digital Account - Page View - ID Scan
        Given a user with the following criteria
            | criteria        |
            | open an account |
        And the user is in the Welcome screen
        And the user goes to "screen open account"
        And the analytics interceptor service is initiated
        When the user accesses to "scan recomendations" modal
        Then the analytics events contains the following variables
            | item                    | value                                                | type             | event     |
            | analytics               | analytics/glomo_base                                 | json schema      | Page View |
            | version DL              | 20250414_5.0                                         | string           | Page View |
            | page name               | app:publica:general:afiliacion basica:escanea tu ine | string           | Page View |
            | level 1                 | afiliacion basica                                    | string           | Page View |
            | level 2                 | escanea tu ine                                       | string           | Page View |
            | language                | ES                                                   | string           | Page View |
            | page area               | publica                                              | string           | Page View |
            | page intent             | transaccion                                          | string           | Page View |
            | channel                 | online                                               | string           | Page View |
            | page instance ID        | de                                                   | string           | Page View |
            | page info version       | appVersion                                           | regexp named     | Page View |
            | page segment            | general                                              | string           | Page View |
            | sysEnv                  | app                                                  | string           | Page View |
            | business unit           | BBVA Mexico                                          | string           | Page View |
            | site app name           | App BBVA Mexico                                      | string           | Page View |
            | project name            | Open Market                                                | string           | Page View |
            | device mobile           | si                                                   | string           | Page View |
            | user userState          | no logado                                            | string           | Page View |
            | internal campaign       |                                                      | empty array      | Page View |
            | optimization attributes |                                                      | empty array      | Page View |
            | application             |                                                      | empty str object | Page View |
            | products attributes     |                                                      | empty array      | Page View |

    @ANA_EVENT_ONB014
    @analytics
    @MX
    @vbank @backend(test)
    @ios @android @web
    @web-done
    Scenario: Digital Account - Page View - Signature
        Given a user with the following criteria
            | criteria        |
            | open an account |
        And the user is in the Welcome screen
        And the user accesses for the first time and enters "correct" personal data
        And the user registers current address information and "selects" continue
        And the user registers their current contact information with "valid" phone
        And the analytics interceptor service is initiated
        When the user accepts terms and conditions of contracts and "wants" to sign
        Then the analytics events contains the following variables
            | item                    | value                                                           | type             | event     |
            | analytics               | analytics/glomo_base                                            | json schema      | Page View |
            | version DL              | 20250414_5.0                                                    | string           | Page View |
            | page name               | app:publica:general:afiliacion basica:4 contratos:firma digital | string           | Page View |
            | level 1                 | afiliacion basica                                               | string           | Page View |
            | level 2                 | 4 contratos                                                     | string           | Page View |
            | level 3                 | firma digital                                                   | string           | Page View |
            | language                | ES                                                              | string           | Page View |
            | page area               | publica                                                         | string           | Page View |
            | page intent             | transaccion                                                     | string           | Page View |
            | channel                 | online                                                          | string           | Page View |
            | page instance ID        | de                                                              | string           | Page View |
            | page info version       | appVersion                                                      | regexp named     | Page View |
            | page segment            | general                                                         | string           | Page View |
            | sysEnv                  | app                                                             | string           | Page View |
            | business unit           | BBVA Mexico                                                     | string           | Page View |
            | site app name           | App BBVA Mexico                                                 | string           | Page View |
            | project name            | Open Market                                                     | string           | Page View |
            | device mobile           | si                                                              | string           | Page View |
            | user userState          | no logado                                                       | string           | Page View |
            | internal campaign       |                                                                 | empty array      | Page View |
            | optimization attributes |                                                                 | empty array      | Page View |
            | application             |                                                                 | empty str object | Page View |
            | products attributes     |                                                                 | empty array      | Page View |

    @ANA_EVENT_ONB015
    @analytics
    @MX
    @vbank @backend(test)
    @web @ios @android
    @web-done
    Scenario: Digital Account - Page View - Service not available
        Given a user with the following criteria
            | criteria        |
            | open an account |
        And the user is in the Welcome screen
        And the user goes to "register account"
        And the analytics interceptor service is initiated
        And the user accepts the modal
        When the user accepts the modal
        Then the analytics events contains the following variables
            | item                    | value                                                              | type             | event     |
            | analytics               | analytics/glomo_base                                               | json schema      | Page View |
            | version DL              | 20250414_5.0                                                       | string           | Page View |
            | page name               | app:publica:general:afiliacion basica:error servicio no disponible | string           | Page View |
            | level 1                 | afiliacion basica                                                  | string           | Page View |
            | level 2                 | error servicio no disponible                                       | string           | Page View |
            | error page              | error servicio no disponible                                       | string           | Page View |
            | language                | ES                                                                 | string           | Page View |
            | page area               | publica                                                            | string           | Page View |
            | page intent             | informacion                                                        | string           | Page View |
            | channel                 | online                                                             | string           | Page View |
            | page instance ID        | de                                                                 | string           | Page View |
            | page info version       | appVersion                                                         | regexp named     | Page View |
            | page segment            | general                                                            | string           | Page View |
            | sysEnv                  | app                                                                | string           | Page View |
            | business unit           | BBVA Mexico                                                        | string           | Page View |
            | site app name           | App BBVA Mexico                                                    | string           | Page View |
            | project name            | Open Market                                                              | string           | Page View |
            | device mobile           | si                                                                 | string           | Page View |
            | user userState          | no logado                                                          | string           | Page View |
            | internal campaign       |                                                                    | empty array      | Page View |
            | optimization attributes |                                                                    | empty array      | Page View |
            | application             |                                                                    | empty str object | Page View |
            | products attributes     |                                                                    | empty array      | Page View |

    @ANA_EVENT_ONB016
    @analytics
    @web @ios @android
    @MX @backend(test) @vbank @web-done
    Scenario: Digital Account - Page View - Incorrect data error
        Given a user with the following criteria
            | criteria        |
            | open an account |
        And the user is in the Welcome screen
        And the user accesses for the first time and enters "incorrect" personal data
        And the user cancels the operation modal
        And the user accesses to personal data
        And the user cancels the operation modal
        And the analytics interceptor service is initiated
        When the user accesses to personal data
        Then the analytics events contains the following variables
            | item                    | value                                                         | type             | event     |
            | analytics               | analytics/glomo_base                                          | json schema      | Page View |
            | version DL              | 20250414_5.0                                                  | string           | Page View |
            | page name               | app:publica:general:afiliacion basica:error datos incorrectos | string           | Page View |
            | level 1                 | afiliacion basica                                             | string           | Page View |
            | level 2                 | error datos incorrectos                                       | string           | Page View |
            | error page              | error datos incorrectos                                       | string           | Page View |
            | language                | ES                                                            | string           | Page View |
            | page area               | publica                                                       | string           | Page View |
            | page intent             | informacion                                                   | string           | Page View |
            | channel                 | online                                                        | string           | Page View |
            | page instance ID        | de                                                            | string           | Page View |
            | page info version       | appVersion                                                    | regexp named     | Page View |
            | page segment            | general                                                       | string           | Page View |
            | sysEnv                  | app                                                           | string           | Page View |
            | business unit           | BBVA Mexico                                                   | string           | Page View |
            | site app name           | App BBVA Mexico                                               | string           | Page View |
            | project name            | Open Market                                                         | string           | Page View |
            | device mobile           | si                                                            | string           | Page View |
            | user userState          | no logado                                                     | string           | Page View |
            | internal campaign       |                                                               | empty array      | Page View |
            | optimization attributes |                                                               | empty array      | Page View |
            | application             |                                                               | empty str object | Page View |
            | products attributes     |                                                               | empty array      | Page View |

    @ANA_EVENT_ONB017
    @analytics
    @web @ios @android
    @MX @backend(test) @vbank @web-done
    Scenario: Digital Account - App Completed - Already registered data error
        Given a user with the following criteria
            | criteria        |
            | open an account |
        And the user is in the Welcome screen
        And the user accesses for the first time and enters "correct" personal data
        And the user registers current address information and "selects" continue
        And the analytics interceptor service is initiated
        When the user registers their current contact information with "valid" phone
        Then the analytics events contains the following variables
            | item                    | value                     | type             | event         |
            | analytics               | analytics/glomo_base      | json schema      | App Completed |
            | version DL              | 20250414_5.0              | string           | App Completed |
            | page name               | app:publica:general:afiliacion basica:pagina exitosa | string           | App Completed |
            | level 1                 | afiliacion basica         | string           | App Completed |
            | level 2                 | pagina exitosa            | string           | App Completed |
            | language                | ES                        | string           | App Completed |
            | page area               | publica                   | string           | App Completed |
            | page intent             | informacion               | string           | App Completed |
            | channel                 | online                    | string           | App Completed |
            | page instance ID        | de                        | string           | App Completed |
            | page info version       | appVersion                | regexp named     | App Completed |
            | page segment            | general                   | string           | App Completed |
            | sysEnv                  | app                       | string           | App Completed |
            | business unit           | BBVA Mexico               | string           | App Completed |
            | site app name           | App BBVA Mexico           | string           | App Completed |
            | project name            | Open Market               | string           | App Completed |
            | device mobile           | si                        | string           | App Completed |
            | user userState          | no logado                 | string           | App Completed |
            | application review reason | error datos ya registrados | string         | App Completed |
            | application state       | en revision               | string           | App Completed |
            | internal campaign       |                           | empty array      | App Completed |
            | optimization attributes |                           | empty array      | App Completed |
            | products attributes     |                           | empty array      | App Completed |

    @ANA_EVENT_ONB018
    @analytics
    @web @ios @android
    @MX @backend(test) @vbank @web-done
    Scenario: Digital Account - Page View - Data validation error
        Given a user with the following criteria
            | criteria        |
            | open an account |
        And the user is in the Welcome screen
        And the analytics interceptor service is initiated
        When the user accesses for the first time and enters "incorrect" personal data
        Then the analytics events contains the following variables
            | item                    | value                                                           | type             | event     | event number |
            | analytics               | analytics/glomo_base                                            | json schema      | Page View | 3            |
            | version DL              | 20250414_5.0                                                    | string           | Page View | 3            |
            | page name               | app:publica:general:afiliacion basica:error validacion de datos | string           | Page View | 3            |
            | level 1                 | afiliacion basica                                               | string           | Page View | 3            |
            | level 2                 | error validacion de datos                                       | string           | Page View | 3            |
            | error page              | error validacion de datos                                       | string           | Page View | 3            |
            | language                | ES                                                              | string           | Page View | 3            |
            | page area               | publica                                                         | string           | Page View | 3            |
            | page intent             | informacion                                                     | string           | Page View | 3            |
            | channel                 | online                                                          | string           | Page View | 3            |
            | page instance ID        | de                                                              | string           | Page View | 3            |
            | page info version       | appVersion                                                      | regexp named     | Page View | 3            |
            | page segment            | general                                                         | string           | Page View | 3            |
            | sysEnv                  | app                                                             | string           | Page View | 3            |
            | business unit           | BBVA Mexico                                                     | string           | Page View | 3            |
            | site app name           | App BBVA Mexico                                                 | string           | Page View | 3            |
            | project name            | Open Market                                                           | string           | Page View | 3            |
            | device mobile           | si                                                              | string           | Page View | 3            |
            | user userState          | no logado                                                       | string           | Page View | 3            |
            | internal campaign       |                                                                 | empty array      | Page View | 3            |
            | optimization attributes |                                                                 | empty array      | Page View | 3            |
            | application             |                                                                 | empty str object | Page View | 3            |
            | products attributes     |                                                                 | empty array      | Page View | 3            |

    @ANA_EVENT_ONB019
    @analytics
    @web @ios @android
    @MX @backend(test) @vbank @web-done
    Scenario: Digital Account - Page View - Contact data error
        Given a user with the following criteria
            | criteria        |
            | open an account |
        And the user is in the Welcome screen
        And the user accesses for the first time and enters "correct" personal data
        And the user registers current address information and "selects" continue
        And the analytics interceptor service is initiated
        When the user registers their current contact information with "invalid" phone
        Then the analytics events contains the following variables
            | item                    | value                                                         | type             | event     |
            | analytics               | analytics/glomo_base                                          | json schema      | Page View |
            | version DL              | 20250414_5.0                                                  | string           | Page View |
            | page name               | app:publica:general:afiliacion basica:error datos de contacto | string           | Page View |
            | level 1                 | afiliacion basica                                             | string           | Page View |
            | level 2                 | error datos de contacto                                       | string           | Page View |
            | error page              | error datos de contacto                                       | string           | Page View |
            | language                | ES                                                            | string           | Page View |
            | page area               | publica                                                       | string           | Page View |
            | page intent             | informacion                                                   | string           | Page View |
            | channel                 | online                                                        | string           | Page View |
            | page instance ID        | de                                                            | string           | Page View |
            | page info version       | appVersion                                                    | regexp named     | Page View |
            | page segment            | general                                                       | string           | Page View |
            | sysEnv                  | app                                                           | string           | Page View |
            | business unit           | BBVA Mexico                                                   | string           | Page View |
            | site app name           | App BBVA Mexico                                               | string           | Page View |
            | project name            | Glomo                                                         | string           | Page View |
            | device mobile           | si                                                            | string           | Page View |
            | user userState          | no logado                                                     | string           | Page View |
            | internal campaign       |                                                               | empty array      | Page View |
            | optimization attributes |                                                               | empty array      | Page View |
            | application             |                                                               | empty str object | Page View |
            | products attributes     |                                                               | empty array      | Page View |

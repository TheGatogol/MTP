@upgradeAccountCustomer
Feature: Analytics - Upgrade Account Customer

    @ANA_UAC001
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: Upgrade Account Customer - App Page Visit
        Given a user with the following criteria
            | criteria                                  |
            | account that should upgrade from N2 to N4 |
        And the user accesses to upgradable account
        And the analytics interceptor service is initiated
        When the user navigates to account upgrade requirements
        Then the analytics events contains the following variables:
            | item                     | value                                                           | type         | event          |
            | analytics                | analytics/glomo_base                                            | json schema  | App Page Visit |
            | page name                | app:privada:personas:cuentas:actualizar expediente:1 requisitos | string       | App Page Visit |
            | level 1                  | cuentas                                                         | string       | App Page Visit |
            | level 2                  | actualizar expediente                                           | string       | App Page Visit |
            | level 3                  | 1 requisitos                                                    | string       | App Page Visit |
            | language                 | ES                                                              | string       | App Page Visit |
            | page area                | privada                                                         | string       | App Page Visit |
            | page intent              | transaccion                                                     | string       | App Page Visit |
            | channel                  | online                                                          | string       | App Page Visit |
            | page instance ID         | de                                                              | string       | App Page Visit |
            | version DL               | 20250414_5.0                                                    | string       | App Page Visit |
            | page info version        | appVersion                                                      | regexp named | App Page Visit |
            | page segment             | personas                                                        | string       | App Page Visit |
            | sysEnv                   | app                                                             | string       | App Page Visit |
            | business unit            | BBVA Mexico                                                     | string       | App Page Visit |
            | site app name            | App BBVA Mexico                                                 | string       | App Page Visit |
            | project name             | Open Market                                                     | string       | App Page Visit |
            | device mobile            | si                                                              | string       | App Page Visit |
            | user userState           | logado                                                          | string       | App Page Visit |
            | user segment global      | 003001                                                          | string       | App Page Visit |
            | profile ID               | profileID                                                       | regexp named | App Page Visit |
            | global application       | upgrade customer                                                | string       | App Page Visit |
            | application name         | actualizar expediente                                           | string       | App Page Visit |
            | application type         | autogestion                                                     | string       | App Page Visit |
            | application step         | 1 requisitos                                                    | string       | App Page Visit |
            | fulfillment model        | online                                                          | string       | App Page Visit |
            | product primary category | cuentas                                                         | string       | App Page Visit |
            | internal campaign        |                                                                 | empty array  | App Page Visit |
            | optimization attributes  |                                                                 | empty array  | App Page Visit |

    @ANA_UAC002
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: Upgrade Account Customer - App Step 2
        Given a user with the following criteria
            | criteria                                  |
            | account that should upgrade from N2 to N4 |
        And the user navigates to account upgrade requirements
        And the analytics interceptor service is initiated
        When the user goes to the prequestions page
        Then the analytics events contains the following variables:
            | item                     | value                                                             | type         | event      |
            | analytics                | analytics/glomo_base                                              | json schema  | App Step 2 |
            | page name                | app:privada:personas:cuentas:actualizar expediente:2 cuestionario | string       | App Step 2 |
            | level 1                  | cuentas                                                           | string       | App Step 2 |
            | level 2                  | actualizar expediente                                             | string       | App Step 2 |
            | level 3                  | 2 cuestionario                                                    | string       | App Step 2 |
            | language                 | ES                                                                | string       | App Step 2 |
            | page area                | privada                                                           | string       | App Step 2 |
            | page intent              | transaccion                                                       | string       | App Step 2 |
            | channel                  | online                                                            | string       | App Step 2 |
            | page instance ID         | de                                                                | string       | App Step 2 |
            | version DL               | 20250414_5.0                                                      | string       | App Step 2 |
            | page info version        | appVersion                                                        | regexp named | App Step 2 |
            | page segment             | personas                                                          | string       | App Step 2 |
            | sysEnv                   | app                                                               | string       | App Step 2 |
            | business unit            | BBVA Mexico                                                       | string       | App Step 2 |
            | site app name            | App BBVA Mexico                                                   | string       | App Step 2 |
            | project name             | Open Market                                                       | string       | App Step 2 |
            | device mobile            | si                                                                | string       | App Step 2 |
            | user userState           | logado                                                            | string       | App Step 2 |
            | user segment global      | 003001                                                            | string       | App Step 2 |
            | profile ID               | profileID                                                         | regexp named | App Step 2 |
            | global application       | upgrade customer                                                  | string       | App Step 2 |
            | application name         | actualizar expediente                                             | string       | App Step 2 |
            | application type         | autogestion                                                       | string       | App Step 2 |
            | application step         | 2 cuestionario                                                    | string       | App Step 2 |
            | fulfillment model        | online                                                            | string       | App Step 2 |
            | product primary category | cuentas                                                           | string       | App Step 2 |
            | internal campaign        |                                                                   | empty array  | App Step 2 |
            | optimization attributes  |                                                                   | empty array  | App Step 2 |

    @ANA_UAC003
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    @tmpExclude @JIRA.GLOMOMX-192448
    Scenario: Screen prequestions - App Step 3
        Given a user with the following criteria
            | criteria                                  |
            | account that should upgrade from N2 to N4 |
        And the user navigates to account upgrade requirements
        And the user goes to the prequestions page
        And the analytics interceptor service is initiated
        When the user navigates to account upgrade multistep
        Then the analytics events contains the following variables:
            | item                     | value                                                                   | type         | event      |
            | analytics                | analytics/glomo_base                                                    | json schema  | App Step 3 |
            | page name                | app:privada:personas:cuentas:actualizar expediente:3 verifica identidad | string       | App Step 3 |
            | level 1                  | cuentas                                                                 | string       | App Step 3 |
            | level 2                  | actualizar expediente                                                   | string       | App Step 3 |
            | level 3                  | 3 verifica identidad                                                    | string       | App Step 3 |
            | language                 | ES                                                                      | string       | App Step 3 |
            | page area                | privada                                                                 | string       | App Step 3 |
            | page intent              | transaccion                                                             | string       | App Step 3 |
            | channel                  | online                                                                  | string       | App Step 3 |
            | page instance ID         | de                                                                      | string       | App Step 3 |
            | version DL               | 20250414_5.0                                                            | string       | App Step 3 |
            | page info version        | appVersion                                                              | regexp named | App Step 3 |
            | page segment             | personas                                                                | string       | App Step 3 |
            | sysEnv                   | app                                                                     | string       | App Step 3 |
            | business unit            | BBVA Mexico                                                             | string       | App Step 3 |
            | site app name            | App BBVA Mexico                                                         | string       | App Step 3 |
            | project name             | Open Market                                                             | string       | App Step 3 |
            | device mobile            | si                                                                      | string       | App Step 3 |
            | user userState           | logado                                                                  | string       | App Step 3 |
            | user segment global      | 003001                                                                  | string       | App Step 3 |
            | profile ID               | profileID                                                               | regexp named | App Step 3 |
            | global application       | upgrade customer                                                        | string       | App Step 3 |
            | application name         | actualizar expediente                                                   | string       | App Step 3 |
            | application type         | autogestion                                                             | string       | App Step 3 |
            | application step         | 3 verifica identidad                                                    | string       | App Step 3 |
            | fulfillment model        | online                                                                  | string       | App Step 3 |
            | product primary category | cuentas                                                                 | string       | App Step 3 |
            | internal campaign        |                                                                         | empty array  | App Step 3 |
            | optimization attributes  |                                                                         | empty array  | App Step 3 |

    @ANA_UAC004
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    @tmpExclude @JIRA.GLOMOMX-192448
    Scenario: Upgrade Account Customer - App Step 4
        Given a user with the following criteria
            | criteria                                  |
            | account that should upgrade from N2 to N4 |
        And the user navigates to account upgrade requirements
        And the user goes to the prequestions page
        And the analytics interceptor service is initiated
        And the user navigates to account upgrade multistep
        When the user accepts the consent
        Then the analytics events contains the following variables:
            | item                     | value                                                               | type         | event      |
            | analytics                | analytics/glomo_base                                                | json schema  | App Step 4 |
            | page name                | app:privada:personas:cuentas:actualizar expediente:4 consentimiento | string       | App Step 4 |
            | level 1                  | cuentas                                                             | string       | App Step 4 |
            | level 2                  | actualizar expediente                                               | string       | App Step 4 |
            | level 3                  | 4 consentimiento                                                    | string       | App Step 4 |
            | language                 | ES                                                                  | string       | App Step 4 |
            | page area                | privada                                                             | string       | App Step 4 |
            | page intent              | transaccion                                                         | string       | App Step 4 |
            | channel                  | online                                                              | string       | App Step 4 |
            | page instance ID         | de                                                                  | string       | App Step 4 |
            | version DL               | 20250414_5.0                                                        | string       | App Step 4 |
            | page info version        | appVersion                                                          | regexp named | App Step 4 |
            | page segment             | personas                                                            | string       | App Step 4 |
            | sysEnv                   | app                                                                 | string       | App Step 4 |
            | business unit            | BBVA Mexico                                                         | string       | App Step 4 |
            | site app name            | App BBVA Mexico                                                     | string       | App Step 4 |
            | project name             | Open Market                                                         | string       | App Step 4 |
            | device mobile            | si                                                                  | string       | App Step 4 |
            | user userState           | logado                                                              | string       | App Step 4 |
            | user segment global      | 003001                                                              | string       | App Step 4 |
            | profile ID               | profileID                                                           | regexp named | App Step 4 |
            | global application       | upgrade customer                                                    | string       | App Step 4 |
            | application name         | actualizar expediente                                               | string       | App Step 4 |
            | application type         | autogestion                                                         | string       | App Step 4 |
            | application step         | 4 consentimiento                                                    | string       | App Step 4 |
            | fulfillment model        | online                                                              | string       | App Step 4 |
            | product primary category | cuentas                                                             | string       | App Step 4 |
            | internal campaign        |                                                                     | empty array  | App Step 4 |
            | optimization attributes  |                                                                     | empty array  | App Step 4 |

    @ANA_UAC005 @manual @JIRA.GLOMOGL-20021
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: Upgrade Account Customer - App Step 5
        Given a user with the following criteria
            | criteria                                  |
            | account that should upgrade from N2 to N4 |
        And the user navigates to account upgrade requirements
        And the user goes to the prequestions page
        And the analytics interceptor service is initiated
        And the user navigates to account upgrade multistep
        And the user accepted the consent on 'Continuar' button
        When the user confirms his identity document
        Then the analytics events contains the following variables:
            | item                     | value                                                               | type         | event      |
            | analytics                | analytics/glomo_base                                                | json schema  | App Step 4 |
            | page name                | app:privada:personas:cuentas:actualizar expediente:5 captura cedula | string       | App Step 4 |
            | level 1                  | cuentas                                                             | string       | App Step 4 |
            | level 2                  | actualizar expediente                                               | string       | App Step 4 |
            | level 3                  | 5 captura cedula                                                    | string       | App Step 4 |
            | language                 | ES                                                                  | string       | App Step 4 |
            | page area                | privada                                                             | string       | App Step 4 |
            | page intent              | transaccion                                                         | string       | App Step 4 |
            | channel                  | online                                                              | string       | App Step 4 |
            | page instance ID         | de                                                                  | string       | App Step 4 |
            | version DL               | 20250414_5.0                                                        | string       | App Step 4 |
            | page info version        | appVersion                                                          | regexp named | App Step 4 |
            | page segment             | personas                                                            | string       | App Step 4 |
            | sysEnv                   | app                                                                 | string       | App Step 4 |
            | business unit            | BBVA Mexico                                                         | string       | App Step 4 |
            | site app name            | App BBVA Mexico                                                     | string       | App Step 4 |
            | project name             | Open Market                                                         | string       | App Step 4 |
            | device mobile            | si                                                                  | string       | App Step 4 |
            | user userState           | logado                                                              | string       | App Step 4 |
            | user segment global      | 003001                                                              | string       | App Step 4 |
            | profile ID               | profileID                                                           | regexp named | App Step 4 |
            | global application       | upgrade customer                                                    | string       | App Step 4 |
            | application name         | actualizar expediente                                               | string       | App Step 4 |
            | application type         | autogestion                                                         | string       | App Step 4 |
            | application step         | 5 captura cedula                                                    | string       | App Step 4 |
            | fulfillment model        | online                                                              | string       | App Step 4 |
            | product primary category | cuentas                                                             | string       | App Step 4 |
            | internal campaign        |                                                                     | empty array  | App Step 4 |
            | optimization attributes  |                                                                     | empty array  | App Step 4 |

    @ANA_UAC006 @manual @JIRA.GLOMOGL-20021
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: Upgrade Account Customer - App Step 6
        Given a user with the following criteria
            | criteria                                  |
            | account that should upgrade from N2 to N4 |
        And the user navigates to account upgrade requirements
        And the user goes to the prequestions page
        And the analytics interceptor service is initiated
        And the user navigates to account upgrade multistep
        And the user accepted the consent on 'Continuar' button
        When the user confirms his identity selfie
        Then the analytics events contains the following variables:
            | item                     | value                                                               | type         | event      |
            | analytics                | analytics/glomo_base                                                | json schema  | App Step 4 |
            | page name                | app:privada:personas:cuentas:actualizar expediente:6 captura selfie | string       | App Step 4 |
            | level 1                  | cuentas                                                             | string       | App Step 4 |
            | level 2                  | actualizar expediente                                               | string       | App Step 4 |
            | level 3                  | 6 captura selfie                                                    | string       | App Step 4 |
            | language                 | ES                                                                  | string       | App Step 4 |
            | page area                | privada                                                             | string       | App Step 4 |
            | page intent              | transaccion                                                         | string       | App Step 4 |
            | channel                  | online                                                              | string       | App Step 4 |
            | page instance ID         | de                                                                  | string       | App Step 4 |
            | version DL               | 20250414_5.0                                                        | string       | App Step 4 |
            | page info version        | appVersion                                                          | regexp named | App Step 4 |
            | page segment             | personas                                                            | string       | App Step 4 |
            | sysEnv                   | app                                                                 | string       | App Step 4 |
            | business unit            | BBVA Mexico                                                         | string       | App Step 4 |
            | site app name            | App BBVA Mexico                                                     | string       | App Step 4 |
            | project name             | Open Market                                                         | string       | App Step 4 |
            | device mobile            | si                                                                  | string       | App Step 4 |
            | user userState           | logado                                                              | string       | App Step 4 |
            | user segment global      | 003001                                                              | string       | App Step 4 |
            | profile ID               | profileID                                                           | regexp named | App Step 4 |
            | global application       | upgrade customer                                                    | string       | App Step 4 |
            | application name         | actualizar expediente                                               | string       | App Step 4 |
            | application type         | autogestion                                                         | string       | App Step 4 |
            | application step         | 6 captura selfie                                                    | string       | App Step 4 |
            | fulfillment model        | online                                                              | string       | App Step 4 |
            | product primary category | cuentas                                                             | string       | App Step 4 |
            | internal campaign        |                                                                     | empty array  | App Step 4 |
            | optimization attributes  |                                                                     | empty array  | App Step 4 |

    @ANA_UAC007 @manual @JIRA.GLOMOGL-20021
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: Upgrade Account Customer - App Step 7
        Given a user with the following criteria
            | criteria                                  |
            | account that should upgrade from N2 to N4 |
        And the user navigates to account upgrade requirements
        And the user goes to the prequestions page
        And the analytics interceptor service is initiated
        And the user navigates to account upgrade multistep
        And the user accepted the consent on 'Continuar' button
        When the user adds fields input with personal data
        Then the analytics events contains the following variables:
            | item                     | value                                                                 | type         | event      |
            | analytics                | analytics/glomo_base                                                  | json schema  | App Step 7 |
            | page name                | app:privada:personas:cuentas:actualizar expediente:7 datos personales | string       | App Step 7 |
            | level 1                  | cuentas                                                               | string       | App Step 7 |
            | level 2                  | actualizar expediente                                                 | string       | App Step 7 |
            | level 3                  | 7 datos personales                                                    | string       | App Step 7 |
            | language                 | ES                                                                    | string       | App Step 7 |
            | page area                | privada                                                               | string       | App Step 7 |
            | page intent              | transaccion                                                           | string       | App Step 7 |
            | channel                  | online                                                                | string       | App Step 7 |
            | page instance ID         | de                                                                    | string       | App Step 7 |
            | version DL               | 20250414_5.0                                                          | string       | App Step 7 |
            | page info version        | appVersion                                                            | regexp named | App Step 7 |
            | page segment             | personas                                                              | string       | App Step 7 |
            | sysEnv                   | app                                                                   | string       | App Step 7 |
            | business unit            | BBVA Mexico                                                           | string       | App Step 7 |
            | site app name            | App BBVA Mexico                                                       | string       | App Step 7 |
            | project name             | Open Market                                                           | string       | App Step 7 |
            | device mobile            | si                                                                    | string       | App Step 7 |
            | user userState           | logado                                                                | string       | App Step 7 |
            | user segment global      | 003001                                                                | string       | App Step 7 |
            | profile ID               | profileID                                                             | regexp named | App Step 7 |
            | global application       | upgrade customer                                                      | string       | App Step 7 |
            | application name         | actualizar expediente                                                 | string       | App Step 7 |
            | application type         | autogestion                                                           | string       | App Step 7 |
            | application step         | 7 datos personales                                                    | string       | App Step 7 |
            | fulfillment model        | online                                                                | string       | App Step 7 |
            | product primary category | cuentas                                                               | string       | App Step 7 |
            | internal campaign        |                                                                       | empty array  | App Step 7 |
            | optimization attributes  |                                                                       | empty array  | App Step 7 |

    @ANA_UAC008 @manual @JIRA.GLOMOGL-20021
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: Upgrade Account Customer - App Step 8
        Given a user with the following criteria
            | criteria                                  |
            | account that should upgrade from N2 to N4 |
        And the user navigates to account upgrade requirements
        And the user goes to the prequestions page
        And the analytics interceptor service is initiated
        And the user navigates to account upgrade multistep
        And the user accepted the consent on 'Continuar' button
        When the user update his address
        Then the analytics events contains the following variables:
            | item                     | value                                                                 | type         | event      |
            | analytics                | analytics/glomo_base                                                  | json schema  | App Step 8 |
            | page name                | app:privada:personas:cuentas:actualizar expediente:8 direccion actual | string       | App Step 8 |
            | level 1                  | cuentas                                                               | string       | App Step 8 |
            | level 2                  | actualizar expediente                                                 | string       | App Step 8 |
            | level 3                  | 8 direccion actual                                                    | string       | App Step 8 |
            | language                 | ES                                                                    | string       | App Step 8 |
            | page area                | privada                                                               | string       | App Step 8 |
            | page intent              | transaccion                                                           | string       | App Step 8 |
            | channel                  | online                                                                | string       | App Step 8 |
            | page instance ID         | de                                                                    | string       | App Step 8 |
            | version DL               | 20250414_5.0                                                          | string       | App Step 8 |
            | page info version        | appVersion                                                            | regexp named | App Step 8 |
            | page segment             | personas                                                              | string       | App Step 8 |
            | sysEnv                   | app                                                                   | string       | App Step 8 |
            | business unit            | BBVA Mexico                                                           | string       | App Step 8 |
            | site app name            | App BBVA Mexico                                                       | string       | App Step 8 |
            | project name             | Open Market                                                           | string       | App Step 8 |
            | device mobile            | si                                                                    | string       | App Step 8 |
            | user userState           | logado                                                                | string       | App Step 8 |
            | user segment global      | 003001                                                                | string       | App Step 8 |
            | profile ID               | profileID                                                             | regexp named | App Step 8 |
            | global application       | upgrade customer                                                      | string       | App Step 8 |
            | application name         | actualizar expediente                                                 | string       | App Step 8 |
            | application type         | autogestion                                                           | string       | App Step 8 |
            | application step         | 8 direccion actual                                                    | string       | App Step 8 |
            | fulfillment model        | online                                                                | string       | App Step 8 |
            | product primary category | cuentas                                                               | string       | App Step 8 |
            | internal campaign        |                                                                       | empty array  | App Step 8 |
            | optimization attributes  |                                                                       | empty array  | App Step 8 |

    @ANA_UAC009 @manual @JIRA.GLOMOGL-20021
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: Upgrade Account Customer - App Step 9
        Given a user with the following criteria
            | criteria                                  |
            | account that should upgrade from N2 to N4 |
        And the user navigates to account upgrade requirements
        And the user goes to the prequestions page
        And the analytics interceptor service is initiated
        And the user navigates to account upgrade multistep
        And the user accepted the consent on 'Continuar' button
        When the user accesses to financial operations
        Then the analytics events contains the following variables:
            | item                     | value                                                                        | type         | event      |
            | analytics                | analytics/glomo_base                                                         | json schema  | App Step 9 |
            | page name                | app:privada:personas:cuentas:actualizar expediente:9 operaciones financieras | string       | App Step 9 |
            | level 1                  | cuentas                                                                      | string       | App Step 9 |
            | level 2                  | actualizar expediente                                                        | string       | App Step 9 |
            | level 3                  | 9 operaciones financieras                                                    | string       | App Step 9 |
            | language                 | ES                                                                           | string       | App Step 9 |
            | page area                | privada                                                                      | string       | App Step 9 |
            | page intent              | transaccion                                                                  | string       | App Step 9 |
            | channel                  | online                                                                       | string       | App Step 9 |
            | page instance ID         | de                                                                           | string       | App Step 9 |
            | version DL               | 20250414_5.0                                                                 | string       | App Step 9 |
            | page info version        | appVersion                                                                   | regexp named | App Step 9 |
            | page segment             | personas                                                                     | string       | App Step 9 |
            | sysEnv                   | app                                                                          | string       | App Step 9 |
            | business unit            | BBVA Mexico                                                                  | string       | App Step 9 |
            | site app name            | App BBVA Mexico                                                              | string       | App Step 9 |
            | project name             | Open Market                                                                  | string       | App Step 9 |
            | device mobile            | si                                                                           | string       | App Step 9 |
            | user userState           | logado                                                                       | string       | App Step 9 |
            | user segment global      | 003001                                                                       | string       | App Step 9 |
            | profile ID               | profileID                                                                    | regexp named | App Step 9 |
            | global application       | upgrade customer                                                             | string       | App Step 9 |
            | application name         | actualizar expediente                                                        | string       | App Step 9 |
            | application type         | autogestion                                                                  | string       | App Step 9 |
            | application step         | 9 operaciones financieras                                                    | string       | App Step 9 |
            | fulfillment model        | online                                                                       | string       | App Step 9 |
            | product primary category | cuentas                                                                      | string       | App Step 9 |
            | internal campaign        |                                                                              | empty array  | App Step 9 |
            | optimization attributes  |                                                                              | empty array  | App Step 9 |

    @ANA_UAC010 @manual @JIRA.GLOMOGL-20021
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: Upgrade Account Customer - App Step 10
        Given a user with the following criteria
            | criteria                                  |
            | account that should upgrade from N2 to N4 |
        And the user navigates to account upgrade requirements
        And the user goes to the prequestions page
        And the analytics interceptor service is initiated
        And the user navigates to account upgrade multistep
        And the user accepted the consent on 'Continuar' button
        When the user accesses his account management
        Then the analytics events contains the following variables:
            | item                     | value                                                                     | type         | event       |
            | analytics                | analytics/glomo_base                                                      | json schema  | App Step 10 |
            | page name                | app:privada:personas:cuentas:actualizar expediente:10 manejo de la cuenta | string       | App Step 10 |
            | level 1                  | cuentas                                                                   | string       | App Step 10 |
            | level 2                  | actualizar expediente                                                     | string       | App Step 10 |
            | level 3                  | 10 manejo de la cuenta                                                    | string       | App Step 10 |
            | language                 | ES                                                                        | string       | App Step 10 |
            | page area                | privada                                                                   | string       | App Step 10 |
            | page intent              | transaccion                                                               | string       | App Step 10 |
            | channel                  | online                                                                    | string       | App Step 10 |
            | page instance ID         | de                                                                        | string       | App Step 10 |
            | version DL               | 20250414_5.0                                                              | string       | App Step 10 |
            | page info version        | appVersion                                                                | regexp named | App Step 10 |
            | page segment             | personas                                                                  | string       | App Step 10 |
            | sysEnv                   | app                                                                       | string       | App Step 10 |
            | business unit            | BBVA Mexico                                                               | string       | App Step 10 |
            | site app name            | App BBVA Mexico                                                           | string       | App Step 10 |
            | project name             | Open Market                                                               | string       | App Step 10 |
            | device mobile            | si                                                                        | string       | App Step 10 |
            | user userState           | logado                                                                    | string       | App Step 10 |
            | user segment global      | 003001                                                                    | string       | App Step 10 |
            | profile ID               | profileID                                                                 | regexp named | App Step 10 |
            | global application       | upgrade customer                                                          | string       | App Step 10 |
            | application name         | actualizar expediente                                                     | string       | App Step 10 |
            | application type         | autogestion                                                               | string       | App Step 10 |
            | application step         | 10 manejo de la cuenta                                                    | string       | App Step 10 |
            | fulfillment model        | online                                                                    | string       | App Step 10 |
            | product primary category | cuentas                                                                   | string       | App Step 10 |
            | internal campaign        |                                                                           | empty array  | App Step 10 |
            | optimization attributes  |                                                                           | empty array  | App Step 10 |

    @ANA_UAC011 @manual @JIRA.GLOMOGL-20021
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: Upgrade Account Customer - App Step 11
        Given a user with the following criteria
            | criteria                                  |
            | account that should upgrade from N2 to N4 |
        And the user navigates to account upgrade requirements
        And the user goes to the prequestions page
        And the analytics interceptor service is initiated
        And the user navigates to account upgrade multistep
        And the user accepted the consent on 'Continuar' button
        When the user accepts all the terms
        Then the analytics events contains the following variables:
            | item                     | value                                                                        | type         | event       |
            | analytics                | analytics/glomo_base                                                         | json schema  | App Step 11 |
            | page name                | app:privada:personas:cuentas:actualizar expediente:11 terminos y condiciones | string       | App Step 11 |
            | level 1                  | cuentas                                                                      | string       | App Step 11 |
            | level 2                  | actualizar expediente                                                        | string       | App Step 11 |
            | level 3                  | 11 terminos y condiciones                                                    | string       | App Step 11 |
            | language                 | ES                                                                           | string       | App Step 11 |
            | page area                | privada                                                                      | string       | App Step 11 |
            | page intent              | transaccion                                                                  | string       | App Step 11 |
            | channel                  | online                                                                       | string       | App Step 11 |
            | page instance ID         | de                                                                           | string       | App Step 11 |
            | version DL               | 20250414_5.0                                                                 | string       | App Step 11 |
            | page info version        | appVersion                                                                   | regexp named | App Step 11 |
            | page segment             | personas                                                                     | string       | App Step 11 |
            | sysEnv                   | app                                                                          | string       | App Step 11 |
            | business unit            | BBVA Mexico                                                                  | string       | App Step 11 |
            | site app name            | App BBVA Mexico                                                              | string       | App Step 11 |
            | project name             | Open Market                                                                  | string       | App Step 11 |
            | device mobile            | si                                                                           | string       | App Step 11 |
            | user userState           | logado                                                                       | string       | App Step 11 |
            | user segment global      | 003001                                                                       | string       | App Step 11 |
            | profile ID               | profileID                                                                    | regexp named | App Step 11 |
            | global application       | upgrade customer                                                             | string       | App Step 11 |
            | application name         | actualizar expediente                                                        | string       | App Step 11 |
            | application type         | autogestion                                                                  | string       | App Step 11 |
            | application step         | 11 terminos y condiciones                                                    | string       | App Step 11 |
            | fulfillment model        | online                                                                       | string       | App Step 11 |
            | product primary category | cuentas                                                                      | string       | App Step 11 |
            | internal campaign        |                                                                              | empty array  | App Step 11 |
            | optimization attributes  |                                                                              | empty array  | App Step 11 |

    @ANA_UAC012 @manual @JIRA.GLOMOGL-20021
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: Upgrade Account Customer - App Step 12
        Given a user with the following criteria
            | criteria                                  |
            | account that should upgrade from N2 to N4 |
        And the user navigates to account upgrade requirements
        And the user goes to the prequestions page
        And the analytics interceptor service is initiated
        And the user navigates to account upgrade multistep
        And the user accepted the consent on 'Continuar' button
        When the user confirms all his data
        Then the analytics events contains the following variables:
            | item                     | value                                                              | type         | event       |
            | analytics                | analytics/glomo_base                                               | json schema  | App Step 12 |
            | page name                | app:privada:personas:cuentas:actualizar expediente:12 confirmacion | string       | App Step 12 |
            | level 1                  | cuentas                                                            | string       | App Step 12 |
            | level 2                  | actualizar expediente                                              | string       | App Step 12 |
            | level 3                  | 12 confirmacion                                                    | string       | App Step 12 |
            | language                 | ES                                                                 | string       | App Step 12 |
            | page area                | privada                                                            | string       | App Step 12 |
            | page intent              | transaccion                                                        | string       | App Step 12 |
            | channel                  | online                                                             | string       | App Step 12 |
            | page instance ID         | de                                                                 | string       | App Step 12 |
            | version DL               | 20250414_5.0                                                       | string       | App Step 12 |
            | page info version        | appVersion                                                         | regexp named | App Step 12 |
            | page segment             | personas                                                           | string       | App Step 12 |
            | sysEnv                   | app                                                                | string       | App Step 12 |
            | business unit            | BBVA Mexico                                                        | string       | App Step 12 |
            | site app name            | App BBVA Mexico                                                    | string       | App Step 12 |
            | project name             | Open Market                                                        | string       | App Step 12 |
            | device mobile            | si                                                                 | string       | App Step 12 |
            | user userState           | logado                                                             | string       | App Step 12 |
            | user segment global      | 003001                                                             | string       | App Step 12 |
            | profile ID               | profileID                                                          | regexp named | App Step 12 |
            | global application       | upgrade customer                                                   | string       | App Step 12 |
            | application name         | actualizar expediente                                              | string       | App Step 12 |
            | application type         | autogestion                                                        | string       | App Step 12 |
            | application step         | 12 confirmacion                                                    | string       | App Step 12 |
            | fulfillment model        | online                                                             | string       | App Step 12 |
            | product primary category | cuentas                                                            | string       | App Step 12 |
            | internal campaign        |                                                                    | empty array  | App Step 12 |
            | optimization attributes  |                                                                    | empty array  | App Step 12 |

    @ANA_UAC013 @manual @JIRA.GLOMOGL-20021
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: Upgrade Account Customer - App Step 13
        Given a user with the following criteria
            | criteria                                  |
            | account that should upgrade from N2 to N4 |
        And the user navigates to account upgrade requirements
        And the user goes to the prequestions page
        And the analytics interceptor service is initiated
        And the user navigates to account upgrade multistep
        And the user accepted the consent on 'Continuar' button
        When the user confirms the key
        Then the analytics events contains the following variables:
            | item                     | value                                                     | type         | event       |
            | analytics                | analytics/glomo_base                                      | json schema  | App Step 13 |
            | page name                | app:privada:personas:cuentas:actualizar expediente:13 otp | string       | App Step 13 |
            | level 1                  | cuentas                                                   | string       | App Step 13 |
            | level 2                  | actualizar expediente                                     | string       | App Step 13 |
            | level 3                  | 13 otp                                                    | string       | App Step 13 |
            | language                 | ES                                                        | string       | App Step 13 |
            | page area                | privada                                                   | string       | App Step 13 |
            | page intent              | transaccion                                               | string       | App Step 13 |
            | channel                  | online                                                    | string       | App Step 13 |
            | page instance ID         | de                                                        | string       | App Step 13 |
            | version DL               | 20250414_5.0                                              | string       | App Step 13 |
            | page info version        | appVersion                                                | regexp named | App Step 13 |
            | page segment             | personas                                                  | string       | App Step 13 |
            | sysEnv                   | app                                                       | string       | App Step 13 |
            | business unit            | BBVA Mexico                                               | string       | App Step 13 |
            | site app name            | App BBVA Mexico                                           | string       | App Step 13 |
            | project name             | Open Market                                               | string       | App Step 13 |
            | device mobile            | si                                                        | string       | App Step 13 |
            | user userState           | logado                                                    | string       | App Step 13 |
            | user segment global      | 003001                                                    | string       | App Step 13 |
            | profile ID               | profileID                                                 | regexp named | App Step 13 |
            | global application       | upgrade customer                                          | string       | App Step 13 |
            | application name         | actualizar expediente                                     | string       | App Step 13 |
            | application type         | autogestion                                               | string       | App Step 13 |
            | application step         | 13 otp                                                    | string       | App Step 13 |
            | custom fields            | firma:sms                                                 | string       | App Step 13 |
            | fulfillment model        | online                                                    | string       | App Step 13 |
            | product primary category | cuentas                                                   | string       | App Step 13 |
            | internal campaign        |                                                           | empty array  | App Step 13 |
            | optimization attributes  |                                                           | empty array  | App Step 13 |

    @ANA_UAC014 @manual @JIRA.GLOMOGL-20021
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: Upgrade Account Customer - App Complete - Success
        Given a user with the following criteria
            | criteria                                  |
            | account that should upgrade from N2 to N4 |
        And the user navigates to account upgrade requirements
        And the user goes to the prequestions page
        And the analytics interceptor service is initiated
        When the user navigates to account upgrade multistep
        And the user accepted the consent on 'Continuar' button
        Then the analytics events contains the following variables:
            | item                     | value                                                             | type         | event        |
            | analytics                | analytics/glomo_base                                              | json schema  | App Complete |
            | page name                | app:privada:personas:cuentas:actualizar expediente:pagina exitosa | string       | App Complete |
            | level 1                  | cuentas                                                           | string       | App Complete |
            | level 2                  | actualizar expediente                                             | string       | App Complete |
            | level 3                  | pagina exitosa                                                    | string       | App Complete |
            | language                 | ES                                                                | string       | App Complete |
            | page area                | privada                                                           | string       | App Complete |
            | page intent              | transaccion                                                       | string       | App Complete |
            | channel                  | online                                                            | string       | App Complete |
            | page instance ID         | de                                                                | string       | App Complete |
            | version DL               | 20250414_5.0                                                      | string       | App Complete |
            | page info version        | appVersion                                                        | regexp named | App Complete |
            | page segment             | personas                                                          | string       | App Complete |
            | sysEnv                   | app                                                               | string       | App Complete |
            | business unit            | BBVA Mexico                                                       | string       | App Complete |
            | site app name            | App BBVA Mexico                                                   | string       | App Complete |
            | project name             | Open Market                                                       | string       | App Complete |
            | device mobile            | si                                                                | string       | App Complete |
            | user userState           | logado                                                            | string       | App Complete |
            | user segment global      | 003001                                                            | string       | App Complete |
            | profile ID               | profileID                                                         | regexp named | App Complete |
            | global application       | upgrade customer                                                  | string       | App Complete |
            | application name         | actualizar expediente                                             | string       | App Complete |
            | application type         | autogestion                                                       | string       | App Complete |
            | application step         | pagina exitosa                                                    | string       | App Complete |
            | custom fields            | firma:sms                                                         | string       | App Complete |
            | application step         | en revision                                                       | string       | App Complete |
            | fulfillment model        | online                                                            | string       | App Complete |
            | product primary category | cuentas                                                           | string       | App Complete |
            | internal campaign        |                                                                   | empty array  | App Complete |
            | optimization attributes  |                                                                   | empty array  | App Complete |

    @ANA_UAC015
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: Upgrade Account Customer - App Completed - Reject
        Given a user with the following criteria
            | criteria                                  |
            | account that should upgrade from N2 to N4 |
        And the user navigates to account upgrade requirements
        When the user goes to the prequestions page
        And the analytics interceptor service is initiated
        And the user chooses the answer 'Si' later on 'Continuar'
        Then the analytics events contains the following variables:
            | item                     | value                                                             | type         | event         |
            | analytics                | analytics/glomo_base                                              | json schema  | App Completed |
            | page name                | app:privada:personas:cuentas:actualizar expediente:pagina exitosa | string       | App Completed |
            | level 1                  | cuentas                                                           | string       | App Completed |
            | level 2                  | actualizar expediente                                             | string       | App Completed |
            | level 3                  | pagina exitosa                                                    | string       | App Completed |
            | language                 | ES                                                                | string       | App Completed |
            | page area                | privada                                                           | string       | App Completed |
            | page intent              | transaccion                                                       | string       | App Completed |
            | channel                  | online                                                            | string       | App Completed |
            | page instance ID         | de                                                                | string       | App Completed |
            | version DL               | 20250414_5.0                                                      | string       | App Completed |
            | page info version        | appVersion                                                        | regexp named | App Completed |
            | page segment             | personas                                                          | string       | App Completed |
            | sysEnv                   | app                                                               | string       | App Completed |
            | business unit            | BBVA Mexico                                                       | string       | App Completed |
            | site app name            | App BBVA Mexico                                                   | string       | App Completed |
            | project name             | Open Market                                                       | string       | App Completed |
            | device mobile            | si                                                                | string       | App Completed |
            | user userState           | logado                                                            | string       | App Completed |
            | user segment global      | 003001                                                            | string       | App Completed |
            | user segment profile     | usuario ppe                                                       | string       | App Completed |
            | profile ID               | profileID                                                         | regexp named | App Completed |
            | global application       | upgrade customer                                                  | string       | App Completed |
            | application name         | actualizar expediente                                             | string       | App Completed |
            | application type         | autogestion                                                       | string       | App Completed |
            | application step         | pagina exitosa                                                    | string       | App Completed |
            | fulfillment model        | online                                                            | string       | App Completed |
            | application state        | rechazado                                                         | string       | App Completed |
            | product primary category | cuentas                                                           | string       | App Completed |
            | product state            | rechazado                                                         | string       | App Completed |
            | internal campaign        |                                                                   | empty array  | App Completed |
            | optimization attributes  |                                                                   | empty array  | App Completed |

    @ANA_UAC016
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: Privacy Modal - Page View
        Given a user with the following criteria
            | criteria                                  |
            | account that should upgrade from N2 to N4 |
        And the user navigates to account upgrade requirements
        And the analytics interceptor service is initiated
        When the user accesses to Notice of Privacy
        Then the analytics events contains the following variables:
            | item                    | value                                                                  | type             | event     |
            | analytics               | analytics/glomo_base                                                   | json schema      | Page View |
            | page name               | app:privada:personas:cuentas:actualizar expediente:aviso de privacidad | string           | Page View |
            | level 1                 | cuentas                                                                | string           | Page View |
            | level 2                 | actualizar expediente                                                  | string           | Page View |
            | level 3                 | aviso de privacidad                                                    | string           | Page View |
            | language                | ES                                                                     | string           | Page View |
            | page area               | privada                                                                | string           | Page View |
            | page intent             | transaccion                                                            | string           | Page View |
            | channel                 | online                                                                 | string           | Page View |
            | page instance ID        | de                                                                     | string           | Page View |
            | version DL              | 20250414_5.0                                                           | string           | Page View |
            | page info version       | appVersion                                                             | regexp named     | Page View |
            | page segment            | personas                                                               | string           | Page View |
            | sysEnv                  | app                                                                    | string           | Page View |
            | business unit           | BBVA Mexico                                                            | string           | Page View |
            | site app name           | App BBVA Mexico                                                        | string           | Page View |
            | project name            | Open Market                                                            | string           | Page View |
            | device mobile           | si                                                                     | string           | Page View |
            | user userState          | logado                                                                 | string           | Page View |
            | user segment global     | 003001                                                                 | string           | Page View |
            | profile ID              | profileID                                                              | regexp named     | Page View |
            | internal campaign       |                                                                        | empty array      | Page View |
            | optimization attributes |                                                                        | empty array      | Page View |
            | application             |                                                                        | empty str object | Page View |
            | products attributes     |                                                                        | empty array      | Page View |

    @ANA_UAC017
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    @manual @JIRA.GLOMOMX-254718
    Scenario: The user  press what is PEP - Page View
        Given a user with the following criteria
            | criteria                                  |
            | account that should upgrade from N2 to N4 |
        And the user navigates to account upgrade requirements
        When the user goes to the prequestions page
        And the analytics interceptor service is initiated
        And the user accesses to 'Que es PEP'
        Then the analytics events contains the following variables:
            | item                    | value                                                                             | type             | event     |
            | analytics               | analytics/glomo_base                                                              | json schema      | Page View |
            | page name               | app:privada:personas:cuentas:actualizar expediente:persona politicamente expuesta | string           | Page View |
            | level 1                 | cuentas                                                                           | string           | Page View |
            | level 2                 | actualizar expediente                                                             | string           | Page View |
            | level 3                 | persona politicamente expuesta                                                    | string           | Page View |
            | language                | ES                                                                                | string           | Page View |
            | page area               | privada                                                                           | string           | Page View |
            | page intent             | transaccion                                                                       | string           | Page View |
            | channel                 | online                                                                            | string           | Page View |
            | page instance ID        | de                                                                                | string           | Page View |
            | version DL              | 20250414_5.0                                                                      | string           | Page View |
            | page info version       | appVersion                                                                        | regexp named     | Page View |
            | page segment            | personas                                                                          | string           | Page View |
            | sysEnv                  | app                                                                               | string           | Page View |
            | business unit           | BBVA Mexico                                                                       | string           | Page View |
            | site app name           | App BBVA Mexico                                                                   | string           | Page View |
            | project name            | Open Market                                                                       | string           | Page View |
            | device mobile           | si                                                                                | string           | Page View |
            | user userState          | logado                                                                            | string           | Page View |
            | user segment global     | 003001                                                                            | string           | Page View |
            | profile ID              | profileID                                                                         | regexp named     | Page View |
            | internal campaign       |                                                                                   | empty array      | Page View |
            | optimization attributes |                                                                                   | empty array      | Page View |
            | application             |                                                                                   | empty str object | Page View |
            | products attributes     |                                                                                   | empty array      | Page View |

    @ANA_UAC018 @manual @JIRA.GLOMOGL-20021
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario:  Addres Edition- Page View
        Given a user with the following criteria
            | criteria                                  |
            | account that should upgrade from N2 to N4 |
        And the user navigates to account upgrade requirements
        And the user goes to the prequestions page
        And the analytics interceptor service is initiated
        When the user navigates to account upgrade multistep
        And the user accepted the consent on 'Continuar' button
        And the user arrives at the update address step by selecting the pencil icon
        Then the analytics events contains the following variables:
            | item                    | value                                                                | type             | event     |
            | analytics               | analytics/glomo_base                                                 | json schema      | Page View |
            | page name               | app:privada:personas:cuentas:actualizar expediente:edicion domicilio | string           | Page View |
            | level 1                 | cuentas                                                              | string           | Page View |
            | level 2                 | actualizar expediente                                                | string           | Page View |
            | level 3                 | edicion domicilio                                                    | string           | Page View |
            | language                | ES                                                                   | string           | Page View |
            | page area               | privada                                                              | string           | Page View |
            | page intent             | transaccion                                                          | string           | Page View |
            | channel                 | online                                                               | string           | Page View |
            | page instance ID        | de                                                                   | string           | Page View |
            | version DL              | 20250414_5.0                                                         | string           | Page View |
            | page info version       | appVersion                                                           | regexp named     | Page View |
            | page segment            | personas                                                             | string           | Page View |
            | sysEnv                  | app                                                                  | string           | Page View |
            | business unit           | BBVA Mexico                                                          | string           | Page View |
            | site app name           | App BBVA Mexico                                                      | string           | Page View |
            | project name            | Open Market                                                          | string           | Page View |
            | device mobile           | si                                                                   | string           | Page View |
            | user userState          | logado                                                               | string           | Page View |
            | user segment global     | 003001                                                               | string           | Page View |
            | profile ID              | profileID                                                            | regexp named     | Page View |
            | internal campaign       |                                                                      | empty array      | Page View |
            | optimization attributes |                                                                      | empty array      | Page View |
            | application             |                                                                      | empty str object | Page View |
            | products attributes     |                                                                      | empty array      | Page View |

    @ANA_UAC019 @manual @JIRA.GLOMOGL-20021
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario:  Current Address - Page View
        Given a user with the following criteria
            | criteria                                  |
            | account that should upgrade from N2 to N4 |
        And the user navigates to account upgrade requirements
        And the user goes to the prequestions page
        And the analytics interceptor service is initiated
        When the user navigates to account upgrade multistep
        And the user accepted the consent on 'Continuar' button
        And the user arrives the step of updating the address selects a voucher to add it to the application
        Then the analytics events contains the following variables:
            | item                    | value                                                                 | type             | event     |
            | analytics               | analytics/glomo_base                                                  | json schema      | Page View |
            | page name               | app:privada:personas:cuentas:actualizar expediente:8 direccion actual | string           | Page View |
            | level 1                 | cuentas                                                               | string           | Page View |
            | level 2                 | actualizar expediente                                                 | string           | Page View |
            | level 3                 | 8 direccion actual                                                    | string           | Page View |
            | language                | ES                                                                    | string           | Page View |
            | page area               | privada                                                               | string           | Page View |
            | page intent             | transaccion                                                           | string           | Page View |
            | channel                 | online                                                                | string           | Page View |
            | page instance ID        | de                                                                    | string           | Page View |
            | version DL              | 20250414_5.0                                                          | string           | Page View |
            | page info version       | appVersion                                                            | regexp named     | Page View |
            | page segment            | personas                                                              | string           | Page View |
            | sysEnv                  | app                                                                   | string           | Page View |
            | business unit           | BBVA Mexico                                                           | string           | Page View |
            | site app name           | App BBVA Mexico                                                       | string           | Page View |
            | project name            | Open Market                                                           | string           | Page View |
            | device mobile           | si                                                                    | string           | Page View |
            | user userState          | logado                                                                | string           | Page View |
            | user segment global     | 003001                                                                | string           | Page View |
            | profile ID              | profileID                                                             | regexp named     | Page View |
            | internal campaign       |                                                                       | empty array      | Page View |
            | optimization attributes |                                                                       | empty array      | Page View |
            | application             |                                                                       | empty str object | Page View |
            | products attributes     |                                                                       | empty array      | Page View |

    @ANA_UAC020 @manual @JIRA.GLOMOGL-20021
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario:  Operations - Page View
        Given a user with the following criteria
            | criteria                                  |
            | account that should upgrade from N2 to N4 |
        And the user navigates to account upgrade requirements
        And the user goes to the prequestions page
        And the analytics interceptor service is initiated
        When the user navigates to account upgrade multistep
        And the user accepted the consent on 'Continuar' button
        And the user arrives the step of financial Operations selects example of operations
        Then the analytics events contains the following variables:
            | item                    | value                                                          | type             | event     |
            | analytics               | analytics/glomo_base                                           | json schema      | Page View |
            | page name               | app:privada:personas:cuentas:actualizar expediente:operaciones | string           | Page View |
            | level 1                 | cuentas                                                        | string           | Page View |
            | level 2                 | actualizar expediente                                          | string           | Page View |
            | level 3                 | operaciones                                                    | string           | Page View |
            | language                | ES                                                             | string           | Page View |
            | page area               | privada                                                        | string           | Page View |
            | page intent             | transaccion                                                    | string           | Page View |
            | channel                 | online                                                         | string           | Page View |
            | page instance ID        | de                                                             | string           | Page View |
            | version DL              | 20250414_5.0                                                   | string           | Page View |
            | page info version       | appVersion                                                     | regexp named     | Page View |
            | page segment            | personas                                                       | string           | Page View |
            | sysEnv                  | app                                                            | string           | Page View |
            | business unit           | BBVA Mexico                                                    | string           | Page View |
            | site app name           | App BBVA Mexico                                                | string           | Page View |
            | project name            | Open Market                                                    | string           | Page View |
            | device mobile           | si                                                             | string           | Page View |
            | user userState          | logado                                                         | string           | Page View |
            | user segment global     | 003001                                                         | string           | Page View |
            | profile ID              | profileID                                                      | regexp named     | Page View |
            | internal campaign       |                                                                | empty array      | Page View |
            | optimization attributes |                                                                | empty array      | Page View |
            | application             |                                                                | empty str object | Page View |
            | products attributes     |                                                                | empty array      | Page View |

    @ANA_UAC021 @manual @JIRA.GLOMOGL-20021
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario:  Error Operation not Performed - Page View
        Given a user with the following criteria
            | criteria                                  |
            | account that should upgrade from N2 to N4 |
        And the user navigates to account upgrade requirements
        And the user goes to the prequestions page
        And the analytics interceptor service is initiated
        When the user navigates to account upgrade multistep
        And the user accepted the consent on 'Continuar' button
        Then the analytics events contains the following variables:
            | item                    | value                                                                           | type             | event     |
            | analytics               | analytics/glomo_base                                                            | json schema      | Page View |
            | page name               | app:privada:personas:cuentas:actualizar expediente:error operacion no realizada | string           | Page View |
            | level 1                 | cuentas                                                                         | string           | Page View |
            | level 2                 | actualizar expediente                                                           | string           | Page View |
            | level 3                 | error operacion no realizada                                                    | string           | Page View |
            | error page              | error operacion no realizada                                                    | string           | Page View |
            | language                | ES                                                                              | string           | Page View |
            | page area               | privada                                                                         | string           | Page View |
            | page intent             | transaccion                                                                     | string           | Page View |
            | channel                 | online                                                                          | string           | Page View |
            | page instance ID        | de                                                                              | string           | Page View |
            | version DL              | 20250414_5.0                                                                    | string           | Page View |
            | page info version       | appVersion                                                                      | regexp named     | Page View |
            | page segment            | personas                                                                        | string           | Page View |
            | sysEnv                  | app                                                                             | string           | Page View |
            | business unit           | BBVA Mexico                                                                     | string           | Page View |
            | site app name           | App BBVA Mexico                                                                 | string           | Page View |
            | project name            | Open Market                                                                     | string           | Page View |
            | device mobile           | si                                                                              | string           | Page View |
            | user userState          | logado                                                                          | string           | Page View |
            | user segment global     | 003001                                                                          | string           | Page View |
            | profile ID              | profileID                                                                       | regexp named     | Page View |
            | internal campaign       |                                                                                 | empty array      | Page View |
            | optimization attributes |                                                                                 | empty array      | Page View |
            | application             |                                                                                 | empty str object | Page View |
            | products attributes     |                                                                                 | empty array      | Page View |

    @ANA_UAC022 @manual @JIRA.GLOMOGL-20021
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario:  Error Validation - Page View
        Given a user with the following criteria
            | criteria                                  |
            | account that should upgrade from N2 to N4 |
        And the user navigates to account upgrade requirements
        And the user goes to the prequestions page
        And the analytics interceptor service is initiated
        When the user navigates to account upgrade multistep
        And the user accepted the consent on 'Continuar' button
        Then the analytics events contains the following variables:
            | item                    | value                                                               | type             | event     |
            | analytics               | analytics/glomo_base                                                | json schema      | Page View |
            | page name               | app:privada:personas:cuentas:actualizar expediente:error validacion | string           | Page View |
            | level 1                 | cuentas                                                             | string           | Page View |
            | level 2                 | actualizar expediente                                               | string           | Page View |
            | level 3                 | error validacion                                                    | string           | Page View |
            | error page              | error validacion                                                    | string           | Page View |
            | language                | ES                                                                  | string           | Page View |
            | page area               | privada                                                             | string           | Page View |
            | page intent             | transaccion                                                         | string           | Page View |
            | channel                 | online                                                              | string           | Page View |
            | page instance ID        | de                                                                  | string           | Page View |
            | version DL              | 20250414_5.0                                                        | string           | Page View |
            | page info version       | appVersion                                                          | regexp named     | Page View |
            | page segment            | personas                                                            | string           | Page View |
            | sysEnv                  | app                                                                 | string           | Page View |
            | business unit           | BBVA Mexico                                                         | string           | Page View |
            | site app name           | App BBVA Mexico                                                     | string           | Page View |
            | project name            | Open Market                                                         | string           | Page View |
            | device mobile           | si                                                                  | string           | Page View |
            | user userState          | logado                                                              | string           | Page View |
            | user segment global     | 003001                                                              | string           | Page View |
            | profile ID              | profileID                                                           | regexp named     | Page View |
            | internal campaign       |                                                                     | empty array      | Page View |
            | optimization attributes |                                                                     | empty array      | Page View |
            | application             |                                                                     | empty str object | Page View |
            | products attributes     |                                                                     | empty array      | Page View |

    @ANA_UAC023 @manual @JIRA.GLOMOGL-20021
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario:  Communication Interrupted Error - Page View
        Given a user with the following criteria
            | criteria                                  |
            | account that should upgrade from N2 to N4 |
        And the user navigates to account upgrade requirements
        And the user goes to the prequestions page
        And the analytics interceptor service is initiated
        When the user navigates to account upgrade multistep
        And the user accepted the consent on 'Continuar' button
        Then the analytics events contains the following variables:
            | item                    | value                                                                              | type             | event     |
            | analytics               | analytics/glomo_base                                                               | json schema      | Page View |
            | page name               | app:privada:personas:cuentas:actualizar expediente:error comunicacion interrumpida | string           | Page View |
            | level 1                 | cuentas                                                                            | string           | Page View |
            | level 2                 | actualizar expediente                                                              | string           | Page View |
            | level 3                 | error comunicacion interrumpida                                                    | string           | Page View |
            | error page              | error comunicacion interrumpida                                                    | string           | Page View |
            | language                | ES                                                                                 | string           | Page View |
            | page area               | privada                                                                            | string           | Page View |
            | page intent             | transaccion                                                                        | string           | Page View |
            | channel                 | online                                                                             | string           | Page View |
            | page instance ID        | de                                                                                 | string           | Page View |
            | version DL              | 20250414_5.0                                                                       | string           | Page View |
            | page info version       | appVersion                                                                         | regexp named     | Page View |
            | page segment            | personas                                                                           | string           | Page View |
            | sysEnv                  | app                                                                                | string           | Page View |
            | business unit           | BBVA Mexico                                                                        | string           | Page View |
            | site app name           | App BBVA Mexico                                                                    | string           | Page View |
            | project name            | Open Market                                                                        | string           | Page View |
            | device mobile           | si                                                                                 | string           | Page View |
            | user userState          | logado                                                                             | string           | Page View |
            | user segment global     | 003001                                                                             | string           | Page View |
            | profile ID              | profileID                                                                          | regexp named     | Page View |
            | internal campaign       |                                                                                    | empty array      | Page View |
            | optimization attributes |                                                                                    | empty array      | Page View |
            | application             |                                                                                    | empty str object | Page View |
            | products attributes     |                                                                                    | empty array      | Page View |

    @ANA_UAC024
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: Upgrade Account Customer - App On Click Start
        Given a user with the following criteria
            | criteria                                  |
            | account that should upgrade from N2 to N4 |
        And the user accesses to upgradable account
        And the analytics interceptor service is initiated
        When the user navigates to account upgrade requirements
        Then the analytics events contains the following variables:
            | item                     | value                                                           | type         | event              |
            | analytics                | analytics/glomo_base                                            | json schema  | App On Click Start |
            | page name                | app:privada:personas:cuentas:detalle                            | string       | App On Click Start |
            | level 1                  | cuentas                                                         | string       | App On Click Start |
            | level 2                  | detalle                                                         | string       | App On Click Start |
            | language                 | ES                                                              | string       | App On Click Start |
            | page area                | privada                                                         | string       | App On Click Start |
            | page intent              | informacion                                                     | string       | App On Click Start |
            | channel                  | online                                                          | string       | App On Click Start |
            | page instance ID         | de                                                              | string       | App On Click Start |
            | version DL               | 20250414_5.0                                                    | string       | App On Click Start |
            | page info version        | appVersion                                                      | regexp named | App On Click Start |
            | page segment             | personas                                                        | string       | App On Click Start |
            | sysEnv                   | app                                                             | string       | App On Click Start |
            | business unit            | BBVA Mexico                                                     | string       | App On Click Start |
            | site app name            | App BBVA Mexico                                                 | string       | App On Click Start |
            | project name             | Open Market                                                     | string       | App On Click Start |
            | device mobile            | si                                                              | string       | App On Click Start |
            | user userState           | logado                                                          | string       | App On Click Start |
            | user segment global      | 003001                                                          | string       | App On Click Start |
            | profile ID               | profileID                                                       | regexp named | App On Click Start |
            | global application       | upgrade customer                                                | string       | App On Click Start |
            | application name         | actualizar expediente                                           | string       | App On Click Start |
            | application type         | autogestion                                                     | string       | App On Click Start |
            | application step         | comenzar                                                        | string       | App On Click Start |
            | fulfillment model        | online                                                          | string       | App On Click Start |
            | product primary category | cuentas                                                         | string       | App On Click Start |
            | internal campaign        |                                                                 | empty array  | App On Click Start |
            | optimization attributes  |                                                                 | empty array  | App On Click Start |

    @ANA_UAC025
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: Upgrade Account Customer - App Started
        Given a user with the following criteria
            | criteria                                  |
            | account that should upgrade from N2 to N4 |
        And the user navigates to account upgrade requirements
        And the analytics interceptor service is initiated
        When the user goes to the prequestions page
        Then the analytics events contains the following variables:
            | item                     | value                                                             | type         | event       |
            | analytics                | analytics/glomo_base                                              | json schema  | App Started |
            | page name                | app:privada:personas:cuentas:actualizar expediente:1 requisitos   | string       | App Started |
            | level 1                  | cuentas                                                           | string       | App Started |
            | level 2                  | actualizar expediente                                             | string       | App Started |
            | level 3                  | 1 requisitos                                                      | string       | App Started |
            | language                 | ES                                                                | string       | App Started |
            | page area                | privada                                                           | string       | App Started |
            | page intent              | transaccion                                                       | string       | App Started |
            | channel                  | online                                                            | string       | App Started |
            | page instance ID         | de                                                                | string       | App Started |
            | version DL               | 20250414_5.0                                                      | string       | App Started |
            | page info version        | appVersion                                                        | regexp named | App Started |
            | page segment             | personas                                                          | string       | App Started |
            | sysEnv                   | app                                                               | string       | App Started |
            | business unit            | BBVA Mexico                                                       | string       | App Started |
            | site app name            | App BBVA Mexico                                                   | string       | App Started |
            | project name             | Open Market                                                       | string       | App Started |
            | device mobile            | si                                                                | string       | App Started |
            | user userState           | logado                                                            | string       | App Started |
            | user segment global      | 003001                                                            | string       | App Started |
            | profile ID               | profileID                                                         | regexp named | App Started |
            | global application       | upgrade customer                                                  | string       | App Started |
            | application name         | actualizar expediente                                             | string       | App Started |
            | application type         | autogestion                                                       | string       | App Started |
            | application step         | continua                                                          | string       | App Started |
            | fulfillment model        | online                                                            | string       | App Started |
            | product primary category | cuentas                                                           | string       | App Started |
            | internal campaign        |                                                                   | empty array  | App Started |
            | optimization attributes  |                                                                   | empty array  | App Started |

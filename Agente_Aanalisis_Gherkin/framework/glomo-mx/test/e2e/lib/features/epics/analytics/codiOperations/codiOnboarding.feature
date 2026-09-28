@codiOnboardingAnalytics
Feature: Analytics - CoDi operative - Onboarding

    @ANA_EVENT_CODI001
    @analytics @MX @backend(test) @vbank
    @web @ios @android @web-done
    Scenario: The user accesses to CoDi operative from the sidebar - Analytics Page View
        Given a user with the following criteria
            | criteria       |
            | enroll codi    |
        And the user accesses to dashboard
        And the analytics interceptor service is initiated
        When the user accesses to "QR operative and CoDi" item located in the sidebar
        Then the analytics events contains the following variables
            | item                    | value                                | type             | event     | event number |
            | analytics               | analytics/glomo_base                 | json schema      | Page View | 1            |
            | version DL              | 20250414_5.0                         | string           | Page View | 1            |
            | page name               | app:privada:general:informacion codi | string           | Page View | 1            |
            | level 1                 | informacion codi                     | string           | Page View | 1            |
            | language                | ES                                   | string           | Page View | 1            |
            | page area               | privada                              | string           | Page View | 1            |
            | page intent             | transaccion                          | string           | Page View | 1            |
            | channel                 | online                               | string           | Page View | 1            |
            | page instance ID        | de                                   | string           | Page View | 1            |
            | page info version       | appVersion                           | regexp named     | Page View | 1            |
            | page segment            | general                              | string           | Page View | 1            |
            | sysEnv                  | app                                  | string           | Page View | 1            |
            | business unit           | BBVA Mexico                          | string           | Page View | 1            |
            | site app name           | App BBVA Mexico                      | string           | Page View | 1            |
            | project name            | Glomo                                | string           | Page View | 1            |
            | device mobile           | si                                   | string           | Page View | 1            |
            | user userState          | logado                               | string           | Page View | 1            |
            | profile ID              | profileID                            | regexp named     | Page View | 1            |
            | user segment global     | 003001                               | string           | Page View | 1            |
            | user gender             | gender                               | regexp named     | Page View | 1            |
            | user age                | age                                  | regexp named     | Page View | 1            |
            | internal campaign       |                                      | empty array      | Page View | 1            |
            | optimization attributes |                                      | empty array      | Page View | 1            |
            | application             |                                      | empty str object | Page View | 1            |
            | products attributes     |                                      | empty array      | Page View | 1            |

    @ANA_CODI002
    @analytics @MX @backend(test) @vbank
    @web @ios @android @manual @JIRA.GLOMOMX-159689
    Scenario: The user accesses the enrollment page - Analytics App Page Visit
        Given a user with the following criteria
            | criteria       |
            | no enroll codi |
        And the user accesses to dashboard
        And the user accesses to "QR operative and CoDi" item located in the sidebar
        When the user selects "enroll now" in the enroll process
        Then the device contains the following variables
            | item                    | value                                             | type         |
            | analytics               | analytics/glomo_base                              | json schema  |
            | version DL              | 20250414_5.0                                      | string       |
            | page name               | app:privada:personas:registro codi:1 confirmacion | string       |
            | level 1                 | registro codi                                     | string       |
            | level 2                 | 1 confirmacion                                    | string       |
            | language                | ES                                                | string       |
            | page area               | privada                                           | string       |
            | page intent             | transaccion                                       | string       |
            | channel                 | online                                            | string       |
            | page instance ID        | de                                                | string       |
            | page info version       | appVersion                                        | regexp named |
            | page segment            | personas                                          | string       |
            | sysEnv                  | app                                               | string       |
            | business unit           | BBVA Mexico                                       | string       |
            | site app name           | App BBVA Mexico                                   | string       |
            | project name            | Glomo                                             | string       |
            | device mobile           | si                                                | string       |
            | user userState          | logado                                            | string       |
            | profile ID              | profileID                                         | regexp named |
            | user segment global     | 003001                                            | string       |
            | user gender             | gender                                            | regexp named |
            | user age                | age                                               | regexp named |
            | global application      | mobile transfer activation                        | string       |
            | application name        | registro codi                                     | string       |
            | application type        | autogestion                                       | string       |
            | application step        | 1 confirmacion                                    | string       |
            | fulfillment model       | online                                            | string       |
            | internal campaign       |                                                   | empty array  |
            | optimization attributes |                                                   | empty array  |
            | products attributes     |                                                   | empty array  |

    @ANA_CODI003
    @analytics @MX @backend(test) @vbank
    @web @ios @android @manual @JIRA.GLOMOMX-159689
    Scenario: The user accepts the terms and conditions of CoDi - Analytics App Started
        Given a user with the following criteria
            | criteria       |
            | no enroll codi |
        And the user accesses to dashboard
        And the user accesses to "QR operative and CoDi" item located in the sidebar
        And the user selects "enroll now" in the enroll process
        When the user accepts the terms and conditions
        Then the device contains the following variables
            | item                    | value                                             | type         |
            | analytics               | analytics/glomo_base                              | json schema  |
            | version DL              | 20250414_5.0                                      | string       |
            | page name               | app:privada:personas:registro codi:1 confirmacion | string       |
            | level 1                 | registro codi                                     | string       |
            | level 2                 | 1 confirmacion                                    | string       |
            | language                | ES                                                | string       |
            | page area               | privada                                           | string       |
            | page intent             | transaccion                                       | string       |
            | channel                 | online                                            | string       |
            | page instance ID        | de                                                | string       |
            | page info version       | appVersion                                        | regexp named |
            | page segment            | personas                                          | string       |
            | sysEnv                  | app                                               | string       |
            | business unit           | BBVA Mexico                                       | string       |
            | site app name           | App BBVA Mexico                                   | string       |
            | project name            | Glomo                                             | string       |
            | device mobile           | si                                                | string       |
            | user userState          | logado                                            | string       |
            | profile ID              | profileID                                         | regexp named |
            | user segment global     | 003001                                            | string       |
            | user gender             | gender                                            | regexp named |
            | user age                | age                                               | regexp named |
            | global application      | mobile transfer activation                        | string       |
            | application name        | registro codi                                     | string       |
            | application type        | autogestion                                       | string       |
            | application step        | acepto terminos                                   | string       |
            | fulfillment model       | online                                            | string       |
            | internal campaign       |                                                   | empty array  |
            | optimization attributes |                                                   | empty array  |
            | products attributes     |                                                   | empty array  |

    @ANA_CODI004
    @analytics @MX @backend(test) @vbank
    @web @ios @android @manual @JIRA.GLOMOMX-159689
    Scenario: The user registers her accounts in CoDi - Analytics App step 2
        Given a user with the following criteria
            | criteria       |
            | no enroll codi |
        And the user accesses to dashboard
        And the user accesses to "QR operative and CoDi" item located in the sidebar
        And the user selects "enroll now" in the enroll process
        When the user accesses to "enroll account" option of enroll codi
        Then the device contains the following variables
            | item                    | value                                    | type         |
            | analytics               | analytics/glomo_base                     | json schema  |
            | version DL              | 20250414_5.0                             | string       |
            | page name               | app:privada:personas:registro codi:2 otp | string       |
            | level 1                 | registro codi                            | string       |
            | level 2                 | 2 otp                                    | string       |
            | language                | ES                                       | string       |
            | page area               | privada                                  | string       |
            | page intent             | transaccion                              | string       |
            | channel                 | online                                   | string       |
            | page instance ID        | de                                       | string       |
            | page info version       | appVersion                               | regexp named |
            | page segment            | personas                                 | string       |
            | sysEnv                  | app                                      | string       |
            | business unit           | BBVA Mexico                              | string       |
            | site app name           | App BBVA Mexico                          | string       |
            | project name            | Glomo                                    | string       |
            | device mobile           | si                                       | string       |
            | user userState          | logado                                   | string       |
            | profile ID              | profileID                                | regexp named |
            | user segment global     | 003001                                   | string       |
            | user gender             | gender                                   | regexp named |
            | user age                | age                                      | regexp named |
            | global application      | mobile transfer activation               | string       |
            | application name        | registro codi                            | string       |
            | application type        | autogestion                              | string       |
            | application step        | 2 otp                                    | string       |
            | fulfillment model       | online                                   | string       |
            | custom fields           | firma:token                              | string       |
            | internal campaign       |                                          | empty array  |
            | optimization attributes |                                          | empty array  |
            | products attributes     |                                          | empty array  |

    @ANA_CODI005
    @analytics @MX @backend(test) @vbank
    @web @ios @android @manual @JIRA.GLOMOMX-159689
    Scenario: The user successfully registers her accounts in CoDi - Analytics App Completed
        Given a user with the following criteria
            | criteria       |
            | no enroll codi |
        And the user accesses to dashboard
        And the user accesses to "QR operative and CoDi" item located in the sidebar
        And the user selects "enroll now" in the enroll process
        And the user accesses to "enroll account" option of enroll codi
        When the user insert sms code
        Then the device contains the following variables
            | item                    | value                                             | type         |
            | analytics               | analytics/glomo_base                              | json schema  |
            | version DL              | 20250414_5.0                                      | string       |
            | page name               | app:privada:personas:registro codi:pagina exitosa | string       |
            | level 1                 | registro codi                                     | string       |
            | level 2                 | pagina exitosa                                    | string       |
            | language                | ES                                                | string       |
            | page area               | privada                                           | string       |
            | page intent             | transaccion                                       | string       |
            | channel                 | online                                            | string       |
            | page instance ID        | de                                                | string       |
            | page info version       | appVersion                                        | regexp named |
            | page segment            | personas                                          | string       |
            | sysEnv                  | app                                               | string       |
            | business unit           | BBVA Mexico                                       | string       |
            | site app name           | App BBVA Mexico                                   | string       |
            | project name            | Glomo                                             | string       |
            | device mobile           | si                                                | string       |
            | user userState          | logado                                            | string       |
            | profile ID              | profileID                                         | regexp named |
            | user segment global     | 003001                                            | string       |
            | user gender             | gender                                            | regexp named |
            | user age                | age                                               | regexp named |
            | global application      | mobile transfer activation                        | string       |
            | application name        | registro codi                                     | string       |
            | application type        | autogestion                                       | string       |
            | application step        | 2 otp                                             | string       |
            | fulfillment model       | online                                            | string       |
            | custom fields           | firma:token                                       | string       |
            | internal campaign       |                                                   | empty array  |
            | optimization attributes |                                                   | empty array  |
            | products attributes     |                                                   | empty array  |

    @ANA_CODI006
    @analytics @MX @backend(test) @vbank
    @web @ios @android @manual @JIRA.GLOMOMX-159689
    Scenario: estamos validando tu registro - todo: Edit scenario
        Given a user with the following criteria
            | criteria       |
            | no enroll codi |
        And the user accesses to dashboard
        And the user accesses to "QR operative and CoDi" item located in the sidebar
        And the user selects "enroll now" in the enroll process
        When the user accesses to "enroll account"
        Then the device contains the following variables
            | item                    | value                                                            | type         |
            | analytics               | analytics/glomo_base                                             | json schema  |
            | version DL              | 20250414_5.0                                                     | string       |
            | page name               | app:privada:personas:registro codi:estamos validando tu registro | string       |
            | level 1                 | registro codi                                                    | string       |
            | level 2                 | estamos validando tu registro                                    | string       |
            | language                | ES                                                               | string       |
            | page area               | privada                                                          | string       |
            | page intent             | transaccion                                                      | string       |
            | channel                 | online                                                           | string       |
            | page instance ID        | de                                                               | string       |
            | page info version       | appVersion                                                       | regexp named |
            | page segment            | personas                                                         | string       |
            | sysEnv                  | app                                                              | string       |
            | business unit           | BBVA Mexico                                                      | string       |
            | site app name           | App BBVA Mexico                                                  | string       |
            | project name            | Glomo                                                            | string       |
            | device mobile           | si                                                               | string       |
            | user userState          | logado                                                           | string       |
            | profile ID              | profileID                                                        | regexp named |
            | user segment global     | 003001                                                           | string       |
            | user gender             | gender                                                           | regexp named |
            | user age                | age                                                              | regexp named |
            | internal campaign       |                                                                  | empty array  |
            | optimization attributes |                                                                  | empty array  |
            | products attributes     |                                                                  | empty array  |

    @ANA_CODI007
    @analytics @MX @backend(test) @vbank
    @web @ios @android @manual @JIRA.GLOMOMX-159689
    Scenario: codi no esta disponible  - todo: Edit scenario
        Given a user with the following criteria
            | criteria       |
            | no enroll codi |
        And the user accesses to dashboard
        And the user accesses to "QR operative and CoDi" item located in the sidebar
        And the user selects "enroll now" in the enroll process
        When the user accesses to "enroll account"
        Then the device contains the following variables
            | item                    | value                                                      | type         |
            | analytics               | analytics/glomo_base                                       | json schema  |
            | version DL              | 20250414_5.0                                               | string       |
            | page name               | app:privada:personas:registro codi:codi no esta disponible | string       |
            | level 1                 | registro codi                                              | string       |
            | level 2                 | codi no esta disponible                                    | string       |
            | language                | ES                                                         | string       |
            | page area               | privada                                                    | string       |
            | page intent             | transaccion                                                | string       |
            | channel                 | online                                                     | string       |
            | page instance ID        | de                                                         | string       |
            | page info version       | appVersion                                                 | regexp named |
            | page segment            | personas                                                   | string       |
            | sysEnv                  | app                                                        | string       |
            | business unit           | BBVA Mexico                                                | string       |
            | site app name           | App BBVA Mexico                                            | string       |
            | project name            | Glomo                                                      | string       |
            | device mobile           | si                                                         | string       |
            | user userState          | logado                                                     | string       |
            | profile ID              | profileID                                                  | regexp named |
            | user segment global     | 003001                                                     | string       |
            | user gender             | gender                                                     | regexp named |
            | user age                | age                                                        | regexp named |
            | internal campaign       |                                                            | empty array  |
            | optimization attributes |                                                            | empty array  |
            | products attributes     |                                                            | empty array  |

    @ANA_CODI008
    @analytics @MX @backend(test) @vbank
    @web @ios @android @manual @JIRA.GLOMOMX-159689
    Scenario: bbva app predeterminada codi  - todo: Edit scenario
        Given a user with the following criteria
            | criteria       |
            | no enroll codi |
        And the user accesses to dashboard
        And the user accesses to "QR operative and CoDi" item located in the sidebar
        And the user selects "enroll now" in the enroll process
        When the user accesses to "enroll account"
        Then the device contains the following variables
            | item                    | value                                                           | type         |
            | analytics               | analytics/glomo_base                                            | json schema  |
            | version DL              | 20250414_5.0                                                    | string       |
            | page name               | app:privada:personas:registro codi:bbva app predeterminada codi | string       |
            | level 1                 | registro codi                                                   | string       |
            | level 2                 | bbva app predeterminada codi                                    | string       |
            | language                | ES                                                              | string       |
            | page area               | privada                                                         | string       |
            | page intent             | transaccion                                                     | string       |
            | channel                 | online                                                          | string       |
            | page instance ID        | de                                                              | string       |
            | page info version       | appVersion                                                      | regexp named |
            | page segment            | personas                                                        | string       |
            | sysEnv                  | app                                                             | string       |
            | business unit           | BBVA Mexico                                                     | string       |
            | site app name           | App BBVA Mexico                                                 | string       |
            | project name            | Glomo                                                           | string       |
            | device mobile           | si                                                              | string       |
            | user userState          | logado                                                          | string       |
            | profile ID              | profileID                                                       | regexp named |
            | user segment global     | 003001                                                          | string       |
            | user gender             | gender                                                          | regexp named |
            | user age                | age                                                             | regexp named |
            | internal campaign       |                                                                 | empty array  |
            | optimization attributes |                                                                 | empty array  |
            | products attributes     |                                                                 | empty array  |

    @ANA_CODI009
    @analytics @MX @backend(test) @vbank
    @web @ios @android @manual @JIRA.GLOMOMX-159689
    Scenario: bbva app predeterminada codi - internal link  - todo: Edit scenario
        Given a user with the following criteria
            | criteria       |
            | no enroll codi |
        And the user accesses to dashboard
        And the user accesses to "QR operative and CoDi" item located in the sidebar
        And the user selects "enroll now" in the enroll process
        When the user accesses to "enroll account"
        Then the device contains the following variables
            | item                    | value                                                           | type         |
            | analytics               | analytics/glomo_base                                            | json schema  |
            | version DL              | 20250414_5.0                                                    | string       |
            | page name               | app:privada:personas:registro codi:bbva app predeterminada codi | string       |
            | level 1                 | registro codi                                                   | string       |
            | level 2                 | bbva app predeterminada codi                                    | string       |
            | language                | ES                                                              | string       |
            | page area               | privada                                                         | string       |
            | page intent             | transaccion                                                     | string       |
            | channel                 | online                                                          | string       |
            | page instance ID        | de                                                              | string       |
            | page info version       | appVersion                                                      | regexp named |
            | page segment            | personas                                                        | string       |
            | sysEnv                  | app                                                             | string       |
            | business unit           | BBVA Mexico                                                     | string       |
            | site app name           | App BBVA Mexico                                                 | string       |
            | project name            | Glomo                                                           | string       |
            | device mobile           | si                                                              | string       |
            | user userState          | logado                                                          | string       |
            | profile ID              | profileID                                                       | regexp named |
            | user segment global     | 003001                                                          | string       |
            | user gender             | gender                                                          | regexp named |
            | user age                | age                                                             | regexp named |
            | link name               | seleccionar app bbva predeterminada para codi                   | string       |
            | internal campaign       |                                                                 | empty array  |
            | optimization attributes |                                                                 | empty array  |
            | products attributes     |                                                                 | empty array  |

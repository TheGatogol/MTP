@nationalIdValidationAnalytics
Feature: Analytics - National Id Validation

    @ANA_EVENT_NIV001
    @analytics
    @vbank
    @MX @web @android @ios
    @backend(test)
    @web-done
    Scenario: App on Click Start - National Id Validation
        Given a user with the following criteria
            | criteria               |
            | national id validation |
        And the user accesses to profile screen
        And the analytics interceptor service is initiated
        When the user accesses to add "ine identification" screen
        Then the analytics events contains the following variables
            | item                    | value                       | type         | event              |
            | analytics               | analytics/glomo_base        | json schema  | App On Click Start |
            | version DL              | 20250414_5.0                | string       | App On Click Start |
            | page name               | app:privada:personas:perfil | string       | App On Click Start |
            | level 1                 | perfil                      | string       | App On Click Start |
            | language                | ES                          | string       | App On Click Start |
            | page area               | privada                     | string       | App On Click Start |
            | page intent             | informacion                 | string       | App On Click Start |
            | channel                 | online                      | string       | App On Click Start |
            | page instance ID        | de                          | string       | App On Click Start |
            | page info version       | appVersion                  | regexp named | App On Click Start |
            | page segment            | personas                    | string       | App On Click Start |
            | sysEnv                  | app                         | string       | App On Click Start |
            | business unit           | BBVA Mexico                 | string       | App On Click Start |
            | site app name           | App BBVA Mexico             | string       | App On Click Start |
            | project name            | Glomo                       | string       | App On Click Start |
            | device mobile           | si                          | string       | App On Click Start |
            | user userState          | logado                      | string       | App On Click Start |
            | user segment global     | 003001                      | string       | App On Click Start |
            | profile ID              | profileID                   | regexp named | App On Click Start |
            | user gender             | gender                      | regexp named | App On Click Start |
            | user age                | age                         | regexp named | App On Click Start |
            | global application      | customer update             | string       | App On Click Start |
            | application name        | validar identidad           | string       | App On Click Start |
            | application type        | autogestion                 | string       | App On Click Start |
            | fulfillment model       | offline/online              | string       | App On Click Start |
            | application step        | perfil                      | string       | App On Click Start |
            | internal campaign       |                             | empty array  | App On Click Start |
            | optimization attributes |                             | empty array  | App On Click Start |
            | products attributes     |                             | empty array  | App On Click Start |

    @ANA_EVENT_NIV002
    @analytics
    @vbank
    @MX @web @android @ios
    @backend(test)
    @web-done
    Scenario: App Page Visit - National Id Validation Load
        Given a user with the following criteria
            | criteria               |
            | national id validation |
        And the user accesses to profile screen
        And the user accesses to add "ine identification" screen
        And the analytics interceptor service is initiated
        When the user accepts privacy notice
        Then the analytics events contains the following variables
            | item                    | value                                                         | type         | event          |
            | analytics               | analytics/glomo_base                                          | json schema  | App Page Visit |
            | version DL              | 20250414_5.0                                                  | string       | App Page Visit |
            | page name               | app:privada:personas:validacion de identidad:1 consentimiento | string       | App Page Visit |
            | level 1                 | validacion de identidad                                       | string       | App Page Visit |
            | level 2                 | 1 consentimiento                                              | string       | App Page Visit |
            | language                | ES                                                            | string       | App Page Visit |
            | page area               | privada                                                       | string       | App Page Visit |
            | page intent             | informacion                                                   | string       | App Page Visit |
            | channel                 | online                                                        | string       | App Page Visit |
            | page instance ID        | de                                                            | string       | App Page Visit |
            | page info version       | appVersion                                                    | regexp named | App Page Visit |
            | page segment            | personas                                                      | string       | App Page Visit |
            | sysEnv                  | app                                                           | string       | App Page Visit |
            | business unit           | BBVA Mexico                                                   | string       | App Page Visit |
            | site app name           | App BBVA Mexico                                               | string       | App Page Visit |
            | project name            | Glomo                                                         | string       | App Page Visit |
            | device mobile           | si                                                            | string       | App Page Visit |
            | user userState          | logado                                                        | string       | App Page Visit |
            | user segment global     | 003001                                                        | string       | App Page Visit |
            | profile ID              | profileID                                                     | regexp named | App Page Visit |
            | user gender             | gender                                                        | regexp named | App Page Visit |
            | user age                | age                                                           | regexp named | App Page Visit |
            | user segment profile    | perfil                                                        | string       | App Page Visit |
            | application typology    | national id selfie                                            | string       | App Page Visit |
            | global application      | customer update                                               | string       | App Page Visit |
            | application name        | validar identidad                                             | string       | App Page Visit |
            | application type        | autogestion                                                   | string       | App Page Visit |
            | fulfillment model       | offline/online                                                | string       | App Page Visit |
            | application step        | 1 consentimiento                                              | string       | App Page Visit |
            | custom fields           |                                                               | string       | App Page Visit |
            | internal campaign       |                                                               | empty array  | App Page Visit |
            | optimization attributes |                                                               | empty array  | App Page Visit |

    @ANA_EVENT_NIV003
    @analytics
    @vbank
    @MX @web @android @ios
    @backend(test)
    @web-done
    Scenario: App Started - The user sees privacy notice
        Given a user with the following criteria
            | criteria               |
            | national id validation |
        And the user accesses to profile screen
        And the user accesses to add "ine identification" screen
        And the analytics interceptor service is initiated
        When the user accepts privacy notice
        Then the analytics events contains the following variables
            | item                    | value                                                         | type         | event          |
            | analytics               | analytics/glomo_base                                          | json schema  | App Started    |
            | version DL              | 20250414_5.0                                                  | string       | App Started    |
            | page name               | app:privada:personas:validacion de identidad:1 consentimiento | string       | App Started    |
            | level 1                 | validacion de identidad                                       | string       | App Started    |
            | level 2                 | 1 consentimiento                                              | string       | App Started    |
            | language                | ES                                                            | string       | App Started    |
            | page area               | privada                                                       | string       | App Started    |
            | page intent             | informacion                                                   | string       | App Started    |
            | channel                 | online                                                        | string       | App Started    |
            | page instance ID        | de                                                            | string       | App Started    |
            | page info version       | appVersion                                                    | regexp named | App Started    |
            | page segment            | personas                                                      | string       | App Started    |
            | sysEnv                  | app                                                           | string       | App Started    |
            | business unit           | BBVA Mexico                                                   | string       | App Started    |
            | site app name           | App BBVA Mexico                                               | string       | App Started    |
            | project name            | Glomo                                                         | string       | App Started    |
            | device mobile           | si                                                            | string       | App Started    |
            | user userState          | logado                                                        | string       | App Started    |
            | user segment global     | 003001                                                        | string       | App Started    |
            | profile ID              | profileID                                                     | regexp named | App Started    |
            | user gender             | gender                                                        | regexp named | App Started    |
            | user age                | age                                                           | regexp named | App Started    |
            | user segment profile    | perfil                                                        | string       | App Started    |
            | application typology    | national id selfie                                            | string       | App Started    |
            | global application      | customer update                                               | string       | App Started    |
            | application name        | validar identidad                                             | string       | App Started    |
            | application type        | autogestion                                                   | string       | App Started    |
            | fulfillment model       | offline/online                                                | string       | App Started    |
            | application step        | aviso de privacidad                                           | string       | App Started    |
            | custom fields           |                                                               | string       | App Started    |
            | internal campaign       |                                                               | empty array  | App Started    |
            | optimization attributes |                                                               | empty array  | App Started    |

    @ANA_EVENT_NIV004
    @analytics
    @vbank
    @MX @web @android @ios
    @backend(test)
    @web-done
    Scenario: Page view - The user sees onboarding
        Given a user with the following criteria
            | criteria               |
            | national id validation |
        And the user accesses to profile screen
        And the analytics interceptor service is initiated
        When the user accesses to add "ine identification" screen
        Then the analytics events contains the following variables
            | item                    | value                                                             | type         | event       |
            | analytics               | analytics/glomo_base                                              | json schema  | Page View   |
            | version DL              | 20250414_5.0                                                      | string       | Page View   |
            | page name               | app:privada:personas:validacion de identidad:ten tu ine a la mano | string       | Page View   |
            | level 1                 | validacion de identidad                                           | string       | Page View   |
            | level 2                 | ten tu ine a la mano                                              | string       | Page View   |
            | language                | ES                                                                | string       | Page View   |
            | page area               | privada                                                           | string       | Page View   |
            | page intent             | informacion                                                       | string       | Page View   |
            | channel                 | online                                                            | string       | Page View   |
            | page instance ID        | de                                                                | string       | Page View   |
            | page info version       | appVersion                                                        | regexp named | Page View   |
            | page segment            | personas                                                          | string       | Page View   |
            | sysEnv                  | app                                                               | string       | Page View   |
            | business unit           | BBVA Mexico                                                       | string       | Page View   |
            | site app name           | App BBVA Mexico                                                   | string       | Page View   |
            | project name            | Glomo                                                             | string       | Page View   |
            | device mobile           | si                                                                | string       | Page View   |
            | user userState          | logado                                                            | string       | Page View   |
            | user segment global     | 003001                                                            | string       | Page View   |
            | profile ID              | profileID                                                         | regexp named | Page View   |
            | user gender             | gender                                                            | regexp named | Page View   |
            | user age                | age                                                               | regexp named | Page View   |
            | custom fields           | segmento usuario:perfil                                           | string       | Page View   |
            | internal campaign       |                                                                   | empty array  | Page View   |
            | optimization attributes |                                                                   | empty array  | Page View   |
            | products attributes     |                                                                   | empty array  | Page View   |

    @ANA_EVENT_NIV005
    @analytics
    @vbank
    @MX @web @android @ios
    @backend(test)
    @web-done
    Scenario: Page view - The user sees privacy notice
        Given a user with the following criteria
            | criteria               |
            | national id validation |
        And the user accesses to profile screen
        And the user accesses to add "ine identification" screen
        And the analytics interceptor service is initiated
        When the user accepts privacy notice
        Then the analytics events contains the following variables
            | item                    | value                                                                             | type         | event       |
            | analytics               | analytics/glomo_base                                                              | json schema  | Page View   |
            | version DL              | 20250414_5.0                                                                      | string       | Page View   |
            | page name               | app:privada:personas:validacion de identidad:2 consentimiento:aviso de privacidad | string       | Page View   |
            | level 1                 | validacion de identidad                                                           | string       | Page View   |
            | level 2                 | 2 consentimiento                                                                  | string       | Page View   |
            | level 3                 | aviso de privacidad                                                               | string       | Page View   |
            | language                | ES                                                                                | string       | Page View   |
            | page area               | privada                                                                           | string       | Page View   |
            | page intent             | informacion                                                                       | string       | Page View   |
            | channel                 | online                                                                            | string       | Page View   |
            | page instance ID        | de                                                                                | string       | Page View   |
            | page info version       | appVersion                                                                        | regexp named | Page View   |
            | page segment            | personas                                                                          | string       | Page View   |
            | sysEnv                  | app                                                                               | string       | Page View   |
            | business unit           | BBVA Mexico                                                                       | string       | Page View   |
            | site app name           | App BBVA Mexico                                                                   | string       | Page View   |
            | project name            | Glomo                                                                             | string       | Page View   |
            | device mobile           | si                                                                                | string       | Page View   |
            | user userState          | logado                                                                            | string       | Page View   |
            | user segment global     | 003001                                                                            | string       | Page View   |
            | profile ID              | profileID                                                                         | regexp named | Page View   |
            | user gender             | gender                                                                            | regexp named | Page View   |
            | user age                | age                                                                               | regexp named | Page View   |
            | custom fields           | segmento usuario:perfil                                                           | string       | Page View   |
            | internal campaign       |                                                                                   | empty array  | Page View   |
            | optimization attributes |                                                                                   | empty array  | Page View   |
            | products attributes     |                                                                                   | empty array  | Page View   |

    @ANA_EVENT_NIV006
    @analytics
    @vbank
    @MX @web @android @ios
    @backend(test)
    @web-done
    Scenario: Page view - The user sees capture identity step
        Given a user with the following criteria
            | criteria               |
            | national id validation |
        And the user accesses to profile screen
        And the user accesses to add "ine identification" screen
        And the analytics interceptor service is initiated
        When the user accepts recommendations to scan ine
        Then the analytics events contains the following variables
            | item                    | value                                                               | type         | event       |
            | analytics               | analytics/glomo_base                                                | json schema  | Page View   |
            | version DL              | 20250414_5.0                                                        | string       | Page View   |
            | page name               | app:privada:personas:validacion de identidad:identificacion oficial | string       | Page View   |
            | level 1                 | validacion de identidad                                             | string       | Page View   |
            | level 2                 | identificacion oficial                                              | string       | Page View   |
            | language                | ES                                                                  | string       | Page View   |
            | page area               | privada                                                             | string       | Page View   |
            | page intent             | informacion                                                         | string       | Page View   |
            | channel                 | online                                                              | string       | Page View   |
            | page instance ID        | de                                                                  | string       | Page View   |
            | page info version       | appVersion                                                          | regexp named | Page View   |
            | page segment            | personas                                                            | string       | Page View   |
            | sysEnv                  | app                                                                 | string       | Page View   |
            | business unit           | BBVA Mexico                                                         | string       | Page View   |
            | site app name           | App BBVA Mexico                                                     | string       | Page View   |
            | project name            | Glomo                                                               | string       | Page View   |
            | device mobile           | si                                                                  | string       | Page View   |
            | user userState          | logado                                                              | string       | Page View   |
            | user segment global     | 003001                                                              | string       | Page View   |
            | profile ID              | profileID                                                           | regexp named | Page View   |
            | user gender             | gender                                                              | regexp named | Page View   |
            | user age                | age                                                                 | regexp named | Page View   |
            | custom fields           | segmento usuario:perfil                                             | string       | Page View   |
            | internal campaign       |                                                                     | empty array  | Page View   |
            | optimization attributes |                                                                     | empty array  | Page View   |
            | products attributes     |                                                                     | empty array  | Page View   |

    @ANA_EVENT_NIV007
    @analytics
    @vbank
    @MX @web @android @ios
    @backend(test)
    @web-done
    Scenario: Page view - The user sees recommendations to scan ine
        Given a user with the following criteria
            | criteria               |
            | national id validation |
        And the user accesses to profile screen
        And the user accesses to add "ine identification" screen
        And the analytics interceptor service is initiated
        When the user accepts recommendations to scan ine
        Then the analytics events contains the following variables
            | item                    | value                                                                     | type         | event       | event number |
            | analytics               | analytics/glomo_base                                                      | json schema  | Page View   | 2            |
            | version DL              | 20250414_5.0                                                              | string       | Page View   | 2            |
            | page name               | app:privada:personas:validacion de identidad:recomendaciones:escanear ine | string       | Page View   | 2            |
            | level 1                 | validacion de identidad                                                   | string       | Page View   | 2            |
            | level 2                 | recomendaciones                                                           | string       | Page View   | 2            |
            | level 3                 | escanear ine                                                              | string       | Page View   | 2            |
            | language                | ES                                                                        | string       | Page View   | 2            |
            | page area               | privada                                                                   | string       | Page View   | 2            |
            | page intent             | informacion                                                               | string       | Page View   | 2            |
            | channel                 | online                                                                    | string       | Page View   | 2            |
            | page instance ID        | de                                                                        | string       | Page View   | 2            |
            | page info version       | appVersion                                                                | regexp named | Page View   | 2            |
            | page segment            | personas                                                                  | string       | Page View   | 2            |
            | sysEnv                  | app                                                                       | string       | Page View   | 2            |
            | business unit           | BBVA Mexico                                                               | string       | Page View   | 2            |
            | site app name           | App BBVA Mexico                                                           | string       | Page View   | 2            |
            | project name            | Glomo                                                                     | string       | Page View   | 2            |
            | device mobile           | si                                                                        | string       | Page View   | 2            |
            | user userState          | logado                                                                    | string       | Page View   | 2            |
            | user segment global     | 003001                                                                    | string       | Page View   | 2            |
            | profile ID              | profileID                                                                 | regexp named | Page View   | 2            |
            | user gender             | gender                                                                    | regexp named | Page View   | 2            |
            | user age                | age                                                                       | regexp named | Page View   | 2            |
            | custom fields           | segmento usuario:perfil                                                   | string       | Page View   | 2            |
            | internal campaign       |                                                                           | empty array  | Page View   | 2            |
            | optimization attributes |                                                                           | empty array  | Page View   | 2            |
            | products attributes     |                                                                           | empty array  | Page View   | 2            |

    @ANA_EVENT_NIV008
    @analytics
    @vbank
    @MX @web @android @ios
    @backend(test)
    @web-done
    Scenario: Internal Link - The user interacts with scan ine module
        Given a user with the following criteria
            | criteria               |
            | national id validation |
        And the user accesses to profile screen
        And the user accesses to add "ine identification" screen
        And the analytics interceptor service is initiated
        When the user accepts recommendations to scan ine
        Then the analytics events contains the following variables
            | item                    | value                                                               | type         | event         |
            | analytics               | analytics/glomo_base                                                | json schema  | Internal Link |
            | version DL              | 20250414_5.0                                                        | string       | Internal Link |
            | page name               | app:privada:personas:validacion de identidad:identificacion oficial | string       | Internal Link |
            | level 1                 | validacion de identidad                                             | string       | Internal Link |
            | level 2                 | identificacion oficial                                              | string       | Internal Link |
            | language                | ES                                                                  | string       | Internal Link |
            | page area               | privada                                                             | string       | Internal Link |
            | page intent             | informacion                                                         | string       | Internal Link |
            | channel                 | online                                                              | string       | Internal Link |
            | page instance ID        | de                                                                  | string       | Internal Link |
            | page info version       | appVersion                                                          | regexp named | Internal Link |
            | page segment            | personas                                                            | string       | Internal Link |
            | sysEnv                  | app                                                                 | string       | Internal Link |
            | business unit           | BBVA Mexico                                                         | string       | Internal Link |
            | site app name           | App BBVA Mexico                                                     | string       | Internal Link |
            | project name            | Glomo                                                               | string       | Internal Link |
            | device mobile           | si                                                                  | string       | Internal Link |
            | user userState          | logado                                                              | string       | Internal Link |
            | user segment global     | 003001                                                              | string       | Internal Link |
            | profile ID              | profileID                                                           | regexp named | Internal Link |
            | user gender             | gender                                                              | regexp named | Internal Link |
            | user age                | age                                                                 | regexp named | Internal Link |
            | link name               | escanear ine                                                        | string       | Internal Link |
            | custom fields           | segmento usuario:perfil                                             | string       | Internal Link |
            | internal campaign       |                                                                     | empty array  | Internal Link |
            | optimization attributes |                                                                     | empty array  | Internal Link |
            | products attributes     |                                                                     | empty array  | Internal Link |

    @ANA_EVENT_NIV009
    @analytics
    @vbank
    @MX @web @android @ios
    @backend(test)
    @web-done
    Scenario: Page View - Error Operation Not Performed
        Given a user with the following criteria
            | criteria               |
            | national id validation |
        And the user accesses to profile screen
        And the user accesses to add "ine identification" screen
        And the analytics interceptor service is initiated
        When the user completes consent step
        Then the analytics events contains the following variables
            | item                 | value                                                                      | type         | event     |
            | analytics            | analytics/glomo_base                                                       | json schema  | Page View  |
            | version DL           | 20250414_5.0                                                               | string       | Page View |
            | page name            | app:privada:personas:validacion de identidad:error operacion no realizada  | string       | Page View |
            | level 1              | validacion de identidad                                                    | string       | Page View |
            | level 2              | error operacion no realizada                                               | string       | Page View |
            | language             | ES                                                                         | string       | Page View |
            | page area            | privada                                                                    | string       | Page View |
            | page intent          | informacion                                                                | string       | Page View |
            | channel              | online                                                                     | string       | Page View |
            | page instance ID     | de                                                                         | string       | Page View |
            | page info version    | appVersion                                                                 | regexp named | Page View |
            | page segment         | personas                                                                   | string       | Page View |
            | sysEnv               | app                                                                        | string       | Page View |
            | business unit        | BBVA Mexico                                                                | string       | Page View |
            | site app name        | App BBVA Mexico                                                            | string       | Page View |
            | project name         | Glomo                                                                      | string       | Page View |
            | device mobile        | si                                                                         | string       | Page View |
            | user userState       | logado                                                                     | string       | Page View |
            | user segment global  | 003001                                                                     | string       | Page View |
            | profile ID           | profileID                                                                  | regexp named | Page View |
            | user gender          | gender                                                                     | regexp named | Page View |
            | user age             | age                                                                        | regexp named | Page View |
            | error page           | error operacion no realizada                                               | string       | Page View |
            | custom fields        | segmento usuario:perfil                                                    | string       | Page View |

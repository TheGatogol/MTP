@facialRecognitionAnalytics
Feature: Analytics - Facial Recognition

    @ANA_FAR001
    @analytics
    @android @ios @web-done
    @MX @backend(test) @vbank
    @web
    Scenario: Facial Recognition - App Page Visit
        Given a user with the following criteria
            | criteria                                 |
            | facial recognition previously configured |
        When the user accesses the security reactivation flow
        Then the device contains the following variables
            | item                    | value                                                   | type         |
            | analytics               | analytics/glomo_base                                    | json schema  |
            | version DL              | 20250414_5.0                                            | string       |
            | page name               | app:privada:personas:enrolamiento facial:1 autorizacion | string       |
            | level 1                 | enrolamiento facial                                     | string       |
            | level 2                 | 1 autorizacion                                          | string       |
            | language                | ES                                                      | string       |
            | page area               | privada                                                 | string       |
            | page intent             | informacion                                             | string       |
            | channel                 | online                                                  | string       |
            | page instance ID        | de                                                      | string       |
            | page info version       | appVersion                                              | regexp named |
            | page segment            | personas                                                | string       |
            | sysEnv                  | app                                                     | string       |
            | business unit           | BBVA Mexico                                             | string       |
            | site app name           | App BBVA Mexico                                         | string       |
            | project name            | Glomo                                                   | string       |
            | device mobile           | si                                                      | string       |
            | user userState          | logado                                                  | string       |
            | user segment global     | 003001                                                  | string       |
            | profile ID              | profileID                                               | regexp named |
            | user gender             | gender                                                  | regexp named |
            | user age                | age                                                     | regexp named |
            | global application      | face id enrollment                                      | string       |
            | application name        | enrolamiento facial                                     | string       |
            | application type        | autogestion                                             | string       |
            | application step        | 1 autorizacion                                          | string       |
            | fulfillment model       |                                                         | string       |
            | application typology    | registro facial primera vez                             | string       |
            | internal campaign       |                                                         | empty array  |
            | optimization attributes |                                                         | empty array  |
            | products attributes     |                                                         | empty array  |

    @ANA_FAR002
    @analytics
    @android @ios @web-done
    @MX @backend(test) @vbank
    @web
    Scenario: Facial Recognition - App Started Notice of Privacy
        Given a user with the following criteria
            | criteria                                 |
            | facial recognition previously configured |
        And the user accesses the security reactivation flow
        When the user accesses to the "privacy notice" modal
        Then the device contains the following variables
            | item                    | value                                                   | type         |
            | analytics               | analytics/glomo_base                                    | json schema  |
            | version DL              | 20250414_5.0                                            | string       |
            | page name               | app:privada:personas:enrolamiento facial:1 autorizacion | string       |
            | level 1                 | enrolamiento facial                                     | string       |
            | level 2                 | 1 autorizacion                                          | string       |
            | language                | ES                                                      | string       |
            | page area               | privada                                                 | string       |
            | page intent             | informacion                                             | string       |
            | channel                 | online                                                  | string       |
            | page instance ID        | de                                                      | string       |
            | page info version       | appVersion                                              | regexp named |
            | page segment            | personas                                                | string       |
            | sysEnv                  | app                                                     | string       |
            | business unit           | BBVA Mexico                                             | string       |
            | site app name           | App BBVA Mexico                                         | string       |
            | project name            | Glomo                                                   | string       |
            | device mobile           | si                                                      | string       |
            | user userState          | logado                                                  | string       |
            | user segment global     | 003001                                                  | string       |
            | profile ID              | profileID                                               | regexp named |
            | user gender             | gender                                                  | regexp named |
            | user age                | age                                                     | regexp named |
            | global application      | face id enrollment                                      | string       |
            | application name        | enrolamiento facial                                     | string       |
            | application type        | autogestion                                             | string       |
            | application step        | aviso de privacidad                                     | string       |
            | fulfillment model       |                                                         | string       |
            | application typology    | registro facial primera vez                             | string       |
            | internal campaign       |                                                         | empty array  |
            | optimization attributes |                                                         | empty array  |
            | products attributes     |                                                         | empty array  |

    @ANA_FAR003
    @analytics
    @android @ios @web-done
    @MX @backend(test) @vbank
    @web
    Scenario: Facial Recognition - App Started Check Box
        Given a user with the following criteria
            | criteria                                 |
            | facial recognition previously configured |
        And the user accesses the security reactivation flow
        When the user authorizes the use of data biometrics
        Then the device contains the following variables
            | item                    | value                                                   | type         |
            | analytics               | analytics/glomo_base                                    | json schema  |
            | version DL              | 20250414_5.0                                            | string       |
            | page name               | app:privada:personas:enrolamiento facial:1 autorizacion | string       |
            | level 1                 | enrolamiento facial                                     | string       |
            | level 2                 | 1 autorizacion                                          | string       |
            | language                | ES                                                      | string       |
            | page area               | privada                                                 | string       |
            | page intent             | informacion                                             | string       |
            | channel                 | online                                                  | string       |
            | page instance ID        | de                                                      | string       |
            | page info version       | appVersion                                              | regexp named |
            | page segment            | personas                                                | string       |
            | sysEnv                  | app                                                     | string       |
            | business unit           | BBVA Mexico                                             | string       |
            | site app name           | App BBVA Mexico                                         | string       |
            | project name            | Glomo                                                   | string       |
            | device mobile           | si                                                      | string       |
            | user userState          | logado                                                  | string       |
            | user segment global     | 003001                                                  | string       |
            | profile ID              | profileID                                               | regexp named |
            | user gender             | gender                                                  | regexp named |
            | user age                | age                                                     | regexp named |
            | global application      | face id enrollment                                      | string       |
            | application name        | enrolamiento facial                                     | string       |
            | application type        | autogestion                                             | string       |
            | application step        | check autorizo                                          | string       |
            | fulfillment model       |                                                         | string       |
            | application typology    | registro facial primera vez                             | string       |
            | internal campaign       |                                                         | empty array  |
            | optimization attributes |                                                         | empty array  |
            | products attributes     |                                                         | empty array  |

    @ANA_FAR004
    @analytics
    @android @ios @web-done
    @MX @backend(test) @vbank
    @web
    Scenario: Facial Recognition - App Step 3
        Given a user with the following criteria
            | criteria                                 |
            | facial recognition previously configured |
        And the user accesses the security reactivation flow
        And the user authorizes the use of data biometrics and start registration
        When the user accesses to the camera
        Then the device contains the following variables
            | item                    | value                                                 | type         |
            | analytics               | analytics/glomo_base                                  | json schema  |
            | version DL              | 20250414_5.0                                          | string       |
            | page name               | app:privada:personas:enrolamiento facial:3 tomar foto | string       |
            | level 1                 | enrolamiento facial                                   | string       |
            | level 2                 | 3 tomar foto                                          | string       |
            | language                | ES                                                    | string       |
            | page area               | privada                                               | string       |
            | page intent             | informacion                                           | string       |
            | channel                 | online                                                | string       |
            | page instance ID        | de                                                    | string       |
            | page info version       | appVersion                                            | regexp named |
            | page segment            | personas                                              | string       |
            | sysEnv                  | app                                                   | string       |
            | business unit           | BBVA Mexico                                           | string       |
            | site app name           | App BBVA Mexico                                       | string       |
            | project name            | Glomo                                                 | string       |
            | device mobile           | si                                                    | string       |
            | user userState          | logado                                                | string       |
            | user segment global     | 003001                                                | string       |
            | profile ID              | profileID                                             | regexp named |
            | user gender             | gender                                                | regexp named |
            | user age                | age                                                   | regexp named |
            | global application      | face id enrollment                                    | string       |
            | application name        | enrolamiento facial                                   | string       |
            | application type        | autogestion                                           | string       |
            | application step        | 3 tomar foto                                          | string       |
            | fulfillment model       |                                                       | string       |
            | application typology    | registro facial actualizacion                         | string       |
            | internal campaign       |                                                       | empty array  |
            | optimization attributes |                                                       | empty array  |
            | products attributes     |                                                       | empty array  |

    @ANA_FAR005
    @analytics
    @android @ios @web-done
    @MX @backend(test) @vbank
    @web
    Scenario: Facial Recognition - App Step 4
        Given a user with the following criteria
            | criteria                                 |
            | facial recognition previously configured |
        And the user accesses the security reactivation flow
        And the user authorizes the use of data biometrics and start registration
        When the user continues to the start registry screen
        Then the device contains the following variables
            | item                    | value                                                     | type         |
            | analytics               | analytics/glomo_base                                      | json schema  |
            | version DL              | 20250414_5.0                                              | string       |
            | page name               | app:privada:personas:enrolamiento facial:4 confirmar foto | string       |
            | level 1                 | enrolamiento facial                                       | string       |
            | level 2                 | 4 confirmar foto                                          | string       |
            | language                | ES                                                        | string       |
            | page area               | privada                                                   | string       |
            | page intent             | informacion                                               | string       |
            | channel                 | online                                                    | string       |
            | page instance ID        | de                                                        | string       |
            | page info version       | appVersion                                                | regexp named |
            | page segment            | personas                                                  | string       |
            | sysEnv                  | app                                                       | string       |
            | business unit           | BBVA Mexico                                               | string       |
            | site app name           | App BBVA Mexico                                           | string       |
            | project name            | Glomo                                                     | string       |
            | device mobile           | si                                                        | string       |
            | user userState          | logado                                                    | string       |
            | user segment global     | 003001                                                    | string       |
            | profile ID              | profileID                                                 | regexp named |
            | user gender             | gender                                                    | regexp named |
            | user age                | age                                                       | regexp named |
            | global application      | face id enrollment                                        | string       |
            | application name        | enrolamiento facial                                       | string       |
            | application type        | autogestion                                               | string       |
            | application step        | 4 confirmar foto                                          | string       |
            | fulfillment model       |                                                           | string       |
            | application typology    | registro facial primera vez                               | string       |
            | internal campaign       |                                                           | empty array  |
            | optimization attributes |                                                           | empty array  |
            | products attributes     |                                                           | empty array  |

    @ANA_FAR006
    @analytics
    @android @ios @web-done
    @MX @backend(test) @vbank
    @web
    Scenario: Facial Recognition - App Completed
        Given a user with the following criteria
            | criteria                                 |
            | facial recognition previously configured |
        And the user accesses the security reactivation flow
        And the user authorizes the use of data biometrics and start registration
        And the user continues to the start registry screen
        And the user navigates to the face picture screen
        When the user navigates to the success screen
        Then the device contains the following variables
            | item                    | value                                                   | type         |
            | analytics               | analytics/glomo_base                                    | json schema  |
            | version DL              | 20250414_5.0                                            | string       |
            | page name               | app:privada:personas:enrolamiento facial:pagina exitosa | string       |
            | level 1                 | enrolamiento facial                                     | string       |
            | level 2                 | pagina exitosa                                          | string       |
            | language                | ES                                                      | string       |
            | page area               | privada                                                 | string       |
            | page intent             | informacion                                             | string       |
            | channel                 | online                                                  | string       |
            | page instance ID        | de                                                      | string       |
            | page info version       | appVersion                                              | regexp named |
            | page segment            | personas                                                | string       |
            | sysEnv                  | app                                                     | string       |
            | business unit           | BBVA Mexico                                             | string       |
            | site app name           | App BBVA Mexico                                         | string       |
            | project name            | Glomo                                                   | string       |
            | device mobile           | si                                                      | string       |
            | user userState          | logado                                                  | string       |
            | user segment global     | 003001                                                  | string       |
            | profile ID              | profileID                                               | regexp named |
            | user gender             | gender                                                  | regexp named |
            | user age                | age                                                     | regexp named |
            | global application      | face id enrollment                                      | string       |
            | application name        | enrolamiento facial                                     | string       |
            | application type        | autogestion                                             | string       |
            | application step        | pagina exitosa                                          | string       |
            | fulfillment model       |                                                         | string       |
            | application state       | finalizado                                              | string       |
            | application typology    | registro facial primera vez                             | string       |
            | internal campaign       |                                                         | empty array  |
            | optimization attributes |                                                         | empty array  |
            | products attributes     |                                                         | empty array  |

    @ANA_FAR007
    @analytics
    @android @ios @web-done
    @MX @backend(test) @vbank
    @web
    Scenario: Facial Recognition - Page View Camera Event
        Given a user with the following criteria
            | criteria                                 |
            | facial recognition previously configured |
        And the user accesses the security reactivation flow
        And the user authorizes the use of data biometrics and start registration
        When the user refuses camera access
        Then the device contains the following variables
            | item                    | value                                                    | type         |
            | analytics               | analytics/glomo_base                                     | json schema  |
            | version DL              | 20250414_5.0                                             | string       |
            | page name               | app:privada:personas:enrolamiento facial:permisos camara | string       |
            | level 1                 | enrolamiento facial                                      | string       |
            | level 2                 | permisos camara                                          | string       |
            | language                | ES                                                       | string       |
            | page area               | privada                                                  | string       |
            | page intent             | informacion                                              | string       |
            | channel                 | online                                                   | string       |
            | page instance ID        | de                                                       | string       |
            | page info version       | appVersion                                               | regexp named |
            | page segment            | personas                                                 | string       |
            | sysEnv                  | app                                                      | string       |
            | business unit           | BBVA Mexico                                              | string       |
            | site app name           | App BBVA Mexico                                          | string       |
            | project name            | Glomo                                                    | string       |
            | device mobile           | si                                                       | string       |
            | user userState          | logado                                                   | string       |
            | user segment global     | 003001                                                   | string       |
            | profile ID              | profileID                                                | regexp named |
            | user gender             | gender                                                   | regexp named |
            | user age                | age                                                      | regexp named |
            | global application      |                                                          | string       |
            | application name        |                                                          | string       |
            | application type        |                                                          | string       |
            | application step        |                                                          | string       |
            | fulfillment model       |                                                          | string       |
            | application typology    |                                                          | string       |
            | internal campaign       |                                                          | empty array  |
            | optimization attributes |                                                          | empty array  |
            | products attributes     |                                                          | empty array  |

    @ANA_FAR008
    @analytics
    @android @ios @web-done
    @MX @backend(test) @vbank
    @web
    Scenario: Facial Recognition - Facial Print Registration Error
        Given a user with the following criteria
            | criteria                                 |
            | facial recognition previously configured |
        And the user accesses the security reactivation flow
        And the user authorizes the use of data biometrics and start registration
        And the user continues to the start registry screen
        When the user tries to use zoom and authentication method fails
        Then the device contains the following variables
            | item                    | value                                                                 | type         |
            | analytics               | analytics/glomo_base                                                  | json schema  |
            | version DL              | 20250414_5.0                                                          | string       |
            | page name               | app:privada:personas:enrolamiento facial:error registro huella facial | string       |
            | level 1                 | enrolamiento facial                                                   | string       |
            | level 2                 | error registro huella facial                                          | string       |
            | error page              | error registro huella facial                                          | string       |
            | language                | ES                                                                    | string       |
            | page area               | privada                                                               | string       |
            | page intent             | informacion                                                           | string       |
            | channel                 | online                                                                | string       |
            | page instance ID        | de                                                                    | string       |
            | page info version       | appVersion                                                            | regexp named |
            | page segment            | personas                                                              | string       |
            | sysEnv                  | app                                                                   | string       |
            | business unit           | BBVA Mexico                                                           | string       |
            | site app name           | App BBVA Mexico                                                       | string       |
            | project name            | Glomo                                                                 | string       |
            | device mobile           | si                                                                    | string       |
            | user userState          | logado                                                                | string       |
            | user segment global     | 003001                                                                | string       |
            | profile ID              | profileID                                                             | regexp named |
            | user gender             | gender                                                                | regexp named |
            | user age                | age                                                                   | regexp named |
            | global application      |                                                                       | string       |
            | application name        |                                                                       | string       |
            | application type        |                                                                       | string       |
            | application step        |                                                                       | string       |
            | fulfillment model       |                                                                       | string       |
            | application typology    |                                                                       | string       |
            | internal campaign       |                                                                       | empty array  |
            | optimization attributes |                                                                       | empty array  |
            | products attributes     |                                                                       | empty array  |

    @ANA_EVENT_FAR009
    @analytics
    @android @ios @web-done
    @MX @backend(test) @vbank
    @web
    Scenario: Facial Recognition - Page view See More
        Given a user with the following criteria
            | criteria                                 |
            | facial recognition previously configured |
        And the user accesses the security reactivation flow
        And the analytics interceptor service is initiated
        When the user accesses to the "more info" modal
        Then the analytics events contains the following variables:
            | item                    | value                                              | type         | event     |
            | analytics               | analytics/glomo_base                               | json schema  | Page View |
            | version DL              | 20250414_5.0                                       | string       | Page View |
            | page name               | app:privada:personas:enrolamiento facial:saber mas | string       | Page View |
            | level 1                 | enrolamiento facial                                | string       | Page View |
            | level 2                 | saber mas                                          | string       | Page View |
            | language                | ES                                                 | string       | Page View |
            | page area               | privada                                            | string       | Page View |
            | page intent             | informacion                                        | string       | Page View |
            | channel                 | online                                             | string       | Page View |
            | page instance ID        | de                                                 | string       | Page View |
            | page info version       | appVersion                                         | regexp named | Page View |
            | page segment            | personas                                           | string       | Page View |
            | sysEnv                  | app                                                | string       | Page View |
            | business unit           | BBVA Mexico                                        | string       | Page View |
            | site app name           | App BBVA Mexico                                    | string       | Page View |
            | project name            | Glomo                                              | string       | Page View |
            | device mobile           | si                                                 | string       | Page View |
            | user userState          | logado                                             | string       | Page View |
            | user segment global     | 003001                                             | string       | Page View |
            | profile ID              | profileID                                          | regexp named | Page View |
            | user gender             | gender                                             | regexp named | Page View |
            | user age                | age                                                | regexp named | Page View |
            | global application      |                                                    | string       | Page View |
            | application name        |                                                    | string       | Page View |
            | application type        |                                                    | string       | Page View |
            | application step        |                                                    | string       | Page View |
            | fulfillment model       |                                                    | string       | Page View |
            | application typology    |                                                    | string       | Page View |
            | internal campaign       |                                                    | empty array  | Page View |
            | optimization attributes |                                                    | empty array  | Page View |
            | products attributes     |                                                    | empty array  | Page View |

    @ANA_EVENT_FAR010
    @analytics
    @android @ios @web-done
    @MX @backend(test) @vbank
    @web
    Scenario: Facial Recognition - App Step 2
        Given a user with the following criteria
            | criteria                                 |
            | facial recognition previously configured |
        And the user accesses the security reactivation flow
        And the analytics interceptor service is initiated
        When the user authorizes the use of data biometrics and start registration
        Then the analytics events contains the following variables:
            | item                    | value                                                       | type         | event      |
            | analytics               | analytics/glomo_base                                        | json schema  | App Step 2 |
            | version DL              | 20250414_5.0                                                | string       | App Step 2 |
            | page name               | app:privada:personas:enrolamiento facial:2 antes de empezar | string       | App Step 2 |
            | level 1                 | enrolamiento facial                                         | string       | App Step 2 |
            | level 2                 | 2 antes de empezar                                          | string       | App Step 2 |
            | language                | ES                                                          | string       | App Step 2 |
            | page area               | privada                                                     | string       | App Step 2 |
            | page intent             | informacion                                                 | string       | App Step 2 |
            | channel                 | online                                                      | string       | App Step 2 |
            | page instance ID        | de                                                          | string       | App Step 2 |
            | page info version       | appVersion                                                  | regexp named | App Step 2 |
            | page segment            | personas                                                    | string       | App Step 2 |
            | sysEnv                  | app                                                         | string       | App Step 2 |
            | business unit           | BBVA Mexico                                                 | string       | App Step 2 |
            | site app name           | App BBVA Mexico                                             | string       | App Step 2 |
            | project name            | Glomo                                                       | string       | App Step 2 |
            | device mobile           | si                                                          | string       | App Step 2 |
            | user userState          | logado                                                      | string       | App Step 2 |
            | user segment global     | 003001                                                      | string       | App Step 2 |
            | profile ID              | profileID                                                   | regexp named | App Step 2 |
            | user gender             | gender                                                      | regexp named | App Step 2 |
            | user age                | age                                                         | regexp named | App Step 2 |
            | global application      | face id enrollment                                          | string       | App Step 2 |
            | application name        | enrolamiento facial                                         | string       | App Step 2 |
            | application type        | autogestion                                                 | string       | App Step 2 |
            | application step        | 2 antes de empezar                                          | string       | App Step 2 |
            | fulfillment model       |                                                             | string       | App Step 2 |
            | application typology    | registro facial primera vez                                 | string       | App Step 2 |
            | internal campaign       |                                                             | empty array  | App Step 2 |
            | optimization attributes |                                                             | empty array  | App Step 2 |
            | products attributes     |                                                             | empty array  | App Step 2 |

    @ANA_EVENT_FAR011
    @analytics
    @android @ios @web-done
    @MX @backend(test) @vbank
    @web
    Scenario: Facial Recognition - App Started See More
        Given a user with the following criteria
            | criteria                                 |
            | facial recognition previously configured |
        And the user accesses the security reactivation flow
        And the analytics interceptor service is initiated
        When the user accesses to the "more info" modal
        Then the analytics events contains the following variables:
            | item                    | value                                                   | type         | event       |
            | analytics               | analytics/glomo_base                                    | json schema  | App Started |
            | version DL              | 20250414_5.0                                            | string       | App Started |
            | page name               | app:privada:personas:enrolamiento facial:1 autorizacion | string       | App Started |
            | level 1                 | enrolamiento facial                                     | string       | App Started |
            | level 2                 | 1 autorizacion                                          | string       | App Started |
            | language                | ES                                                      | string       | App Started |
            | page area               | privada                                                 | string       | App Started |
            | page intent             | informacion                                             | string       | App Started |
            | channel                 | online                                                  | string       | App Started |
            | page instance ID        | de                                                      | string       | App Started |
            | page info version       | appVersion                                              | regexp named | App Started |
            | page segment            | personas                                                | string       | App Started |
            | sysEnv                  | app                                                     | string       | App Started |
            | business unit           | BBVA Mexico                                             | string       | App Started |
            | site app name           | App BBVA Mexico                                         | string       | App Started |
            | project name            | Glomo                                                   | string       | App Started |
            | device mobile           | si                                                      | string       | App Started |
            | user userState          | logado                                                  | string       | App Started |
            | user segment global     | 003001                                                  | string       | App Started |
            | profile ID              | profileID                                               | regexp named | App Started |
            | user gender             | gender                                                  | regexp named | App Started |
            | user age                | age                                                     | regexp named | App Started |
            | global application      | face id enrollment                                      | string       | App Started |
            | application name        | enrolamiento facial                                     | string       | App Started |
            | application type        | autogestion                                             | string       | App Started |
            | application step        | saber mas                                               | string       | App Started |
            | fulfillment model       |                                                         | string       | App Started |
            | application typology    | registro facial primera vez                             | string       | App Started |
            | internal campaign       |                                                         | empty array  | App Started |
            | optimization attributes |                                                         | empty array  | App Started |
            | products attributes     |                                                         | empty array  | App Started |

    @ANA_FAR012
    @analytics
    @android @ios @web-done
    @MX @backend(test) @vbank
    @web
    Scenario: Facial Recognition - Ine Validation Error
        Given a user with the following criteria
            | criteria                                 |
            | facial recognition previously configured |
        And the user accesses the security reactivation flow
        And the user authorizes the use of data biometrics and start registration
        And the user continues to the start registry screen
        When the user navigates to the face picture screen
        Then the device contains the following variables
            | item                    | value                                                         | type         |
            | analytics               | analytics/glomo_base                                          | json schema  |
            | version DL              | 20250414_5.0                                                  | string       |
            | page name               | app:privada:personas:enrolamiento facial:error validacion ine | string       |
            | level 1                 | enrolamiento facial                                           | string       |
            | level 2                 | error validacion ine                                          | string       |
            | error page              | error validacion ine                                          | string       |
            | language                | ES                                                            | string       |
            | page area               | privada                                                       | string       |
            | page intent             | informacion                                                   | string       |
            | channel                 | online                                                        | string       |
            | page instance ID        | de                                                            | string       |
            | page info version       | appVersion                                                    | regexp named |
            | page segment            | personas                                                      | string       |
            | sysEnv                  | app                                                           | string       |
            | business unit           | BBVA Mexico                                                   | string       |
            | site app name           | App BBVA Mexico                                               | string       |
            | project name            | Glomo                                                         | string       |
            | device mobile           | si                                                            | string       |
            | user userState          | logado                                                        | string       |
            | user segment global     | 003001                                                        | string       |
            | profile ID              | profileID                                                     | regexp named |
            | user gender             | gender                                                        | regexp named |
            | user age                | age                                                           | regexp named |
            | global application      |                                                               | string       |
            | application name        |                                                               | string       |
            | application type        |                                                               | string       |
            | application step        |                                                               | string       |
            | fulfillment model       |                                                               | string       |
            | application typology    |                                                               | string       |
            | internal campaign       |                                                               | empty array  |
            | optimization attributes |                                                               | empty array  |
            | products attributes     |                                                               | empty array  |

    @ANA_FAR013
    @analytics
    @android @ios @web-done
    @MX @backend(test) @vbank
    @web
    Scenario: Facial Recognition - Ine Communication Error
        Given a user with the following criteria
            | criteria                                 |
            | facial recognition previously configured |
        And the user accesses the security reactivation flow
        And the user authorizes the use of data biometrics and start registration
        And the user continues to the start registry screen
        When the user navigates to the face picture screen
        Then the device contains the following variables
            | item                    | value                                                              | type         |
            | analytics               | analytics/glomo_base                                               | json schema  |
            | version DL              | 20250414_5.0                                                       | string       |
            | page name               | app:privada:personas:enrolamiento facial:error de comunicacion ine | string       |
            | level 1                 | enrolamiento facial                                                | string       |
            | level 2                 | error de comunicacion ine                                          | string       |
            | error page              | error de comunicacion ine                                          | string       |
            | language                | ES                                                                 | string       |
            | page area               | privada                                                            | string       |
            | page intent             | informacion                                                        | string       |
            | channel                 | online                                                             | string       |
            | page instance ID        | de                                                                 | string       |
            | page info version       | appVersion                                                         | regexp named |
            | page segment            | personas                                                           | string       |
            | sysEnv                  | app                                                                | string       |
            | business unit           | BBVA Mexico                                                        | string       |
            | site app name           | App BBVA Mexico                                                    | string       |
            | project name            | Glomo                                                              | string       |
            | device mobile           | si                                                                 | string       |
            | user userState          | logado                                                             | string       |
            | user segment global     | 003001                                                             | string       |
            | profile ID              | profileID                                                          | regexp named |
            | user gender             | gender                                                             | regexp named |
            | user age                | age                                                                | regexp named |
            | global application      |                                                                    | string       |
            | application name        |                                                                    | string       |
            | application type        |                                                                    | string       |
            | application step        |                                                                    | string       |
            | fulfillment model       |                                                                    | string       |
            | application typology    |                                                                    | string       |
            | internal campaign       |                                                                    | empty array  |
            | optimization attributes |                                                                    | empty array  |
            | products attributes     |                                                                    | empty array  |

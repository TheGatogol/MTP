@postalAddressNomineesAnalytics
Feature:  Analytics - Postal Address Nominees

    @ANA_EVENT_PAN001
    @analytics
    @MX
    @web
    @ios @android
    @vbank
    @backend(test)
    @web-done
    Scenario: The user accesses to the postal address nominees operation - App On Click Start, App Page Visit
        Given a user with the following criteria
            | criteria                |
            | postal address nominees |
        And the user accesses the "postal address nominees" operation
        And the analytics interceptor service is initiated
        When the user accepts the modal
        Then the analytics events contains the following variables
            | item                    | value                                                       | type         | event                              |
            | analytics               | analytics/glomo_base                                        | json schema  | App On Click Start, App Page Visit |
            | version DL              | 20250414_5.0                                                | string       | App On Click Start, App Page Visit |
            | page name               | app:privada:personas:gestionar direccion:informacion previa | string       | App On Click Start                 |
            | page name               | app:privada:personas:gestionar direccion:1 direccion        | string       | App Page Visit                     |
            | level 1                 | gestionar direccion                                         | string       | App On Click Start, App Page Visit |
            | level 2                 | informacion previa                                          | string       | App On Click Start                 |
            | level 2                 | 1 direccion                                                 | string       | App Page Visit                     |
            | language                | ES                                                          | string       | App On Click Start, App Page Visit |
            | page area               | privada                                                     | string       | App On Click Start, App Page Visit |
            | page intent             | informacion                                                 | string       | App On Click Start                 |
            | page intent             | transaccion                                                 | string       | App Page Visit                     |
            | channel                 | online                                                      | string       | App On Click Start, App Page Visit |
            | page instance ID        | de                                                          | string       | App On Click Start, App Page Visit |
            | page info version       | appVersion                                                  | regexp named | App On Click Start, App Page Visit |
            | page segment            | personas                                                    | string       | App On Click Start, App Page Visit |
            | sysEnv                  | app                                                         | string       | App On Click Start, App Page Visit |
            | business unit           | BBVA Mexico                                                 | string       | App On Click Start, App Page Visit |
            | site app name           | App BBVA Mexico                                             | string       | App On Click Start, App Page Visit |
            | project name            | Glomo                                                       | string       | App On Click Start, App Page Visit |
            | device mobile           | si                                                          | string       | App On Click Start, App Page Visit |
            | user userState          | logado                                                      | string       | App On Click Start, App Page Visit |
            | profile ID              | profileID                                                   | regexp named | App On Click Start, App Page Visit |
            | user segment global     | 003001                                                      | string       | App On Click Start, App Page Visit |
            | user segment profile    | usuario nominado masivo                                     | string       | App On Click Start, App Page Visit |
            | user gender             | gender                                                      | regexp named | App On Click Start, App Page Visit |
            | user age                | age                                                         | regexp named | App On Click Start, App Page Visit |
            | custom fields           | agregar direccion                                           | string       | App On Click Start, App Page Visit |
            | global application      | manage postal address                                       | string       | App On Click Start, App Page Visit |
            | application name        | gestionar direccion                                         | string       | App On Click Start, App Page Visit |
            | application type        | operativa                                                   | string       | App On Click Start, App Page Visit |
            | application step        | informacion previa                                          | string       | App On Click Start                 |
            | application step        | 1 direccion                                                 | string       | App Page Visit                     |
            | fulfillment model       | online                                                      | string       | App On Click Start, App Page Visit |
            | internal campaign       |                                                             | empty array  | App On Click Start, App Page Visit |
            | optimization attributes |                                                             | empty array  | App On Click Start, App Page Visit |
            | products attributes     |                                                             | empty array  | App On Click Start, App Page Visit |

    @ANA_PAN002
    @analytics
    @MX
    @web
    @ios @android
    @vbank
    @backend(test)
    @web-done
    Scenario: The user sees the postal address nominees notification modal - Page View
        Given a user with the following criteria
            | criteria                |
            | postal address nominees |
        When the user accesses the "postal address nominees" operation
        Then the device contains the following variables
            | item                    | value                                                       | type             |
            | analytics               | analytics/glomo_base                                        | json schema      |
            | version DL              | 20250414_5.0                                                | string           |
            | page name               | app:privada:personas:gestionar direccion:informacion previa | string           |
            | level 1                 | gestionar direccion                                         | string           |
            | level 2                 | informacion previa                                          | string           |
            | language                | ES                                                          | string           |
            | page area               | privada                                                     | string           |
            | page intent             | informacion                                                 | string           |
            | channel                 | online                                                      | string           |
            | page instance ID        | de                                                          | string           |
            | page info version       | appVersion                                                  | regexp named     |
            | page segment            | personas                                                    | string           |
            | sysEnv                  | app                                                         | string           |
            | business unit           | BBVA Mexico                                                 | string           |
            | site app name           | App BBVA Mexico                                             | string           |
            | project name            | Glomo                                                       | string           |
            | device mobile           | si                                                          | string           |
            | user userState          | logado                                                      | string           |
            | user segment global     | 003001                                                      | string           |
            | profile ID              | profileID                                                   | regexp named     |
            | internal campaign       |                                                             | empty array      |
            | optimization attributes |                                                             | empty array      |
            | application             |                                                             | empty str object |
            | products attributes     |                                                             | empty array      |

    @ANA_PAN003
    @analytics
    @MX
    @web
    @ios @android
    @vbank
    @backend(test)
    @web-done
    Scenario Outline: The user first enters <input> on the update address form - App started
        Given a user with the following criteria
            | criteria                |
            | postal address nominees |
        And the user accesses the "postal address nominees" operation
        And the user accepts the modal
        When the user fills the update address form with the following data
            | input        | value        |
            | <input form> | <value form> |
        Then the device contains the following variables
            | item                    | value                                                | type         |
            | analytics               | analytics/glomo_base                                 | json schema  |
            | version DL              | 20250414_5.0                                         | string       |
            | page name               | app:privada:personas:gestionar direccion:1 direccion | string       |
            | level 1                 | gestionar direccion                                  | string       |
            | level 2                 | 1 direccion                                          | string       |
            | language                | ES                                                   | string       |
            | page area               | privada                                              | string       |
            | page intent             | transaccion                                          | string       |
            | channel                 | online                                               | string       |
            | page instance ID        | de                                                   | string       |
            | page info version       | appVersion                                           | regexp named |
            | page segment            | personas                                             | string       |
            | sysEnv                  | app                                                  | string       |
            | business unit           | BBVA Mexico                                          | string       |
            | site app name           | App BBVA Mexico                                      | string       |
            | project name            | Glomo                                                | string       |
            | device mobile           | si                                                   | string       |
            | user userState          | logado                                               | string       |
            | profile ID              | profileID                                            | regexp named |
            | user segment global     | 003001                                               | string       |
            | user segment profile    | usuario nominado masivo                              | string       |
            | user gender             | gender                                               | regexp named |
            | user age                | age                                                  | regexp named |
            | custom fields           | agregar direccion                                    | string       |
            | global application      | manage postal address                                | string       |
            | application name        | gestionar direccion                                  | string       |
            | application type        | operativa                                            | string       |
            | application step        | <input>                                              | string       |
            | fulfillment model       | online                                               | string       |
            | internal campaign       |                                                      | empty array  |
            | optimization attributes |                                                      | empty array  |
            | products attributes     |                                                      | empty array  |

        Examples:
            | input           | input form            | value form |
            | calle           | street name input     | 41         |
            | numero exterior | exterior number input | 532A       |
            | numero interior | interior number input | 12         |
            | codigo postal   | postal code input     | 97000      |

    @ANA_PAN004
    @analytics
    @MX
    @web
    @ios @android
    @vbank
    @backend(test)
    @web-done
    Scenario: The user continues the postal address nominees operation - App Step 4
        Given a user with the following criteria
            | criteria                |
            | postal address nominees |
        And the user accesses the "postal address nominees" operation
        And the user accepts the modal
        And the user fills the update address form with the following data
            | input                 | value |
            | street name input     | 41    |
            | exterior number input | 532A  |
            | interior number input | 12    |
            | postal code input     | 97000 |
            | neighborhood          |       |
        When the user doesnt completely accepts the form
        Then the device contains the following variables
            | item                    | value                                          | type         |
            | analytics               | analytics/glomo_base                           | json schema  |
            | version DL              | 20250414_5.0                                   | string       |
            | page name               | app:privada:personas:gestionar direccion:4 otp | string       |
            | level 1                 | gestionar direccion                            | string       |
            | level 2                 | 4 otp                                          | string       |
            | language                | ES                                             | string       |
            | page area               | privada                                        | string       |
            | page intent             | transaccion                                    | string       |
            | channel                 | online                                         | string       |
            | page instance ID        | de                                             | string       |
            | page info version       | appVersion                                     | regexp named |
            | page segment            | personas                                       | string       |
            | sysEnv                  | app                                            | string       |
            | business unit           | BBVA Mexico                                    | string       |
            | site app name           | App BBVA Mexico                                | string       |
            | project name            | Glomo                                          | string       |
            | device mobile           | si                                             | string       |
            | user userState          | logado                                         | string       |
            | profile ID              | profileID                                      | regexp named |
            | user segment global     | 003001                                         | string       |
            | user segment profile    | usuario nominado masivo                        | string       |
            | user gender             | gender                                         | regexp named |
            | user age                | age                                            | regexp named |
            | custom fields           | agregar direccion                              | string       |
            | global application      | manage postal address                          | string       |
            | application name        | gestionar direccion                            | string       |
            | application type        | operativa                                      | string       |
            | application step        | 4 otp                                          | string       |
            | fulfillment model       | online                                         | string       |
            | internal campaign       |                                                | empty array  |
            | optimization attributes |                                                | empty array  |
            | products attributes     |                                                | empty array  |

    @ANA_PAN005
    @analytics
    @MX
    @web
    @ios @android
    @vbank
    @backend(test)
    @web-done
    Scenario: The user completes the postal address nominees process - App Completed
        Given a user with the following criteria
            | criteria                |
            | postal address nominees |
        And the user accesses the "postal address nominees" operation
        And the user accepts the modal
        And the user fills the update address form with the following data
            | input                 | value |
            | street name input     | 41    |
            | exterior number input | 532A  |
            | interior number input | 12    |
            | postal code input     | 97000 |
            | neighborhood          |       |
        When the user correctly accepts the form
        Then the device contains the following variables
            | item                    | value                                                   | type         |
            | analytics               | analytics/glomo_base                                    | json schema  |
            | version DL              | 20250414_5.0                                            | string       |
            | page name               | app:privada:personas:gestionar direccion:pagina exitosa | string       |
            | level 1                 | gestionar direccion                                     | string       |
            | level 2                 | pagina exitosa                                          | string       |
            | language                | ES                                                      | string       |
            | page area               | privada                                                 | string       |
            | page intent             | transaccion                                             | string       |
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
            | profile ID              | profileID                                               | regexp named |
            | user segment global     | 003001                                                  | string       |
            | user segment profile    | usuario nominado masivo                                 | string       |
            | user gender             | gender                                                  | regexp named |
            | user age                | age                                                     | regexp named |
            | custom fields           | agregar direccion                                       | string       |
            | global application      | manage postal address                                   | string       |
            | application name        | gestionar direccion                                     | string       |
            | application type        | operativa                                               | string       |
            | application step        | pagina exitosa                                          | string       |
            | fulfillment model       | online                                                  | string       |
            | internal campaign       |                                                         | empty array  |
            | optimization attributes |                                                         | empty array  |
            | products attributes     |                                                         | empty array  |

    @ANA_PAN006
    @analytics
    @MX
    @web
    @ios @android
    @vbank
    @backend(test)
    @web-done
    Scenario: The user enters the privacy notice screen - Page View
        Given a user with the following criteria
            | criteria                |
            | postal address nominees |
        And the user accesses the "postal address nominees" operation
        And the user accepts the modal
        When the user goes to the privacy notice screen
        Then the device contains the following variables
            | item                    | value                                                        | type             |
            | analytics               | analytics/glomo_base                                         | json schema      |
            | version DL              | 20250414_5.0                                                 | string           |
            | page name               | app:privada:personas:gestionar direccion:aviso de privacidad | string           |
            | level 1                 | gestionar direccion                                          | string           |
            | level 2                 | aviso de privacidad                                          | string           |
            | language                | ES                                                           | string           |
            | page area               | privada                                                      | string           |
            | page intent             | transaccion                                                  | string           |
            | channel                 | online                                                       | string           |
            | page instance ID        | de                                                           | string           |
            | page info version       | appVersion                                                   | regexp named     |
            | page segment            | personas                                                     | string           |
            | sysEnv                  | app                                                          | string           |
            | business unit           | BBVA Mexico                                                  | string           |
            | site app name           | App BBVA Mexico                                              | string           |
            | project name            | Glomo                                                        | string           |
            | device mobile           | si                                                           | string           |
            | user userState          | logado                                                       | string           |
            | user segment global     | 003001                                                       | string           |
            | profile ID              | profileID                                                    | regexp named     |
            | internal campaign       |                                                              | empty array      |
            | optimization attributes |                                                              | empty array      |
            | application             |                                                              | empty str object |
            | products attributes     |                                                              | empty array      |

    @ANA_PAN007
    @analytics
    @MX
    @web
    @ios @android
    @vbank
    @backend(test)
    @web-done
    Scenario: The user sees the loading data error screen - Page View
        Given a user with the following criteria
            | criteria                |
            | postal address nominees |
        And the user accesses the "postal address nominees" operation
        And the user accepts the modal
        And the user fills the update address form with the following data
            | input                 | value |
            | street name input     | 41    |
            | exterior number input | 532A  |
            | interior number input | 12    |
            | postal code input     | 97000 |
            | neighborhood          |       |
        When the user mistakenly accepts the form
        Then the device contains the following variables
            | item                    | value                                                      | type             |
            | analytics               | analytics/glomo_base                                       | json schema      |
            | version DL              | 20250414_5.0                                               | string           |
            | page name               | app:privada:personas:gestionar direccion:error de servicio | string           |
            | level 1                 | gestionar direccion                                        | string           |
            | level 2                 | error de servicio                                          | string           |
            | error page              | error de servicio                                          | string           |
            | language                | ES                                                         | string           |
            | page area               | privada                                                    | string           |
            | page intent             | transaccion                                                | string           |
            | channel                 | online                                                     | string           |
            | page instance ID        | de                                                         | string           |
            | page info version       | appVersion                                                 | regexp named     |
            | page segment            | personas                                                   | string           |
            | sysEnv                  | app                                                        | string           |
            | business unit           | BBVA Mexico                                                | string           |
            | site app name           | App BBVA Mexico                                            | string           |
            | project name            | Glomo                                                      | string           |
            | device mobile           | si                                                         | string           |
            | user userState          | logado                                                     | string           |
            | user segment global     | 003001                                                     | string           |
            | profile ID              | profileID                                                  | regexp named     |
            | internal campaign       |                                                            | empty array      |
            | optimization attributes |                                                            | empty array      |
            | application             |                                                            | empty str object |
            | products attributes     |                                                            | empty array      |

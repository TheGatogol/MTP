@emergencyVehicleCrashReportsAnalytics
Feature: Analytics - Emergency Vehicle Crash Reports

    @ANA_EVENT_VC001
    @analytics
    @MX @vbank
    @web @ios @android
    @backend(test)
    @web-done
    Scenario: Vehicule Crash - Huella - Location
        Given a user with the following criteria
            | criteria                  |
            | emergency vehicle reports |
        And the user accesses to dashboard
        And the user goes to "emergency reports" using deeplink navigation
        When the user access to "vehicle crash" menu from "vehicle" screen
        Then the device contains the following variables
            | item                    | value                                                      | type             |
            | analytics               | analytics/glomo_base                                       | json schema      |
            | version DL              | 20250414_5.0                                               | string           |
            | page name               | app:privada:personas:emergencias:vehiculo:choque:ubicacion | string           |
            | level 1                 | emergencias                                                | string           |
            | level 2                 | vehiculo                                                   | string           |
            | level 3                 | choque                                                     | string           |
            | level 4                 | ubicacion                                                  | string           |
            | language                | ES                                                         | string           |
            | page area               | privada                                                    | string           |
            | page intent             | informacion                                                | string           |
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
            | user gender             | gender                                                     | regexp named     |
            | user age                | age                                                        | regexp named     |
            | internal campaign       |                                                            | empty array      |
            | optimization attributes |                                                            | empty array      |
            | application             |                                                            | empty str object |
            | products attributes     |                                                            | empty array      |

    @ANA_EVENT_VC002
    @analytics
    @MX @vbank
    @web @ios @android
    @backend(test)
    @web-done
    Scenario: Vehicule Crash - Huella - Services
        Given a user with the following criteria
            | criteria                  |
            | emergency vehicle reports |
        And the user accesses to dashboard
        And the user goes to "emergency reports" using deeplink navigation
        And the user access to "vehicle crash" menu from "vehicle" screen
        And the analytics interceptor service is initiated
        When the user accepts "accept location" action
        Then the analytics events contains the following variables
            | item                    | value                                                      | type             | event     |
            | analytics               | analytics/glomo_base                                       | json schema      | Page View |
            | version DL              | 20250414_5.0                                               | string           | Page View |
            | page name               | app:privada:personas:emergencias:vehiculo:choque:servicios | string           | Page View |
            | level 1                 | emergencias                                                | string           | Page View |
            | level 2                 | vehiculo                                                   | string           | Page View |
            | level 3                 | choque                                                     | string           | Page View |
            | level 4                 | servicios                                                  | string           | Page View |
            | language                | ES                                                         | string           | Page View |
            | page area               | privada                                                    | string           | Page View |
            | page intent             | informacion                                                | string           | Page View |
            | channel                 | online                                                     | string           | Page View |
            | page instance ID        | de                                                         | string           | Page View |
            | page info version       | appVersion                                                 | regexp named     | Page View |
            | page segment            | personas                                                   | string           | Page View |
            | sysEnv                  | app                                                        | string           | Page View |
            | business unit           | BBVA Mexico                                                | string           | Page View |
            | site app name           | App BBVA Mexico                                            | string           | Page View |
            | project name            | Glomo                                                      | string           | Page View |
            | device mobile           | si                                                         | string           | Page View |
            | user userState          | logado                                                     | string           | Page View |
            | user segment global     | 003001                                                     | string           | Page View |
            | profile ID              | profileID                                                  | regexp named     | Page View |
            | user gender             | gender                                                     | regexp named     | Page View |
            | user age                | age                                                        | regexp named     | Page View |
            | internal campaign       |                                                            | empty array      | Page View |
            | optimization attributes |                                                            | empty array      | Page View |
            | application             |                                                            | empty str object | Page View |
            | products attributes     |                                                            | empty array      | Page View |

    @ANA_EVENT_VC003
    @analytics
    @MX @vbank
    @web @ios @android
    @backend(test)
    @web-done
    Scenario: Vehicule Crash - Huella - Resume
        Given a user with the following criteria
            | criteria                  |
            | emergency vehicle reports |
        And the user accesses to dashboard
        And the user goes to "emergency reports" using deeplink navigation
        And the user access to "vehicle crash" menu from "vehicle" screen
        And the user accepts "accept location" action
        And the analytics interceptor service is initiated
        When the user accepts "accept services" action
        Then the analytics events contains the following variables
            | item                    | value                                                    | type             | event     |
            | analytics               | analytics/glomo_base                                     | json schema      | Page View |
            | version DL              | 20250414_5.0                                             | string           | Page View |
            | page name               | app:privada:personas:emergencias:vehiculo:choque:resumen | string           | Page View |
            | level 1                 | emergencias                                              | string           | Page View |
            | level 2                 | vehiculo                                                 | string           | Page View |
            | level 3                 | choque                                                   | string           | Page View |
            | level 4                 | resumen                                                  | string           | Page View |
            | language                | ES                                                       | string           | Page View |
            | page area               | privada                                                  | string           | Page View |
            | page intent             | informacion                                              | string           | Page View |
            | channel                 | online                                                   | string           | Page View |
            | page instance ID        | de                                                       | string           | Page View |
            | page info version       | appVersion                                               | regexp named     | Page View |
            | page segment            | personas                                                 | string           | Page View |
            | sysEnv                  | app                                                      | string           | Page View |
            | business unit           | BBVA Mexico                                              | string           | Page View |
            | site app name           | App BBVA Mexico                                          | string           | Page View |
            | project name            | Glomo                                                    | string           | Page View |
            | device mobile           | si                                                       | string           | Page View |
            | user userState          | logado                                                   | string           | Page View |
            | user segment global     | 003001                                                   | string           | Page View |
            | profile ID              | profileID                                                | regexp named     | Page View |
            | user gender             | gender                                                   | regexp named     | Page View |
            | user age                | age                                                      | regexp named     | Page View |
            | custom fields           | ambulancia:si,vehiculo puede circular:si                 | string           | Page View |
            | internal campaign       |                                                          | empty array      | Page View |
            | optimization attributes |                                                          | empty array      | Page View |
            | application             |                                                          | empty str object | Page View |
            | products attributes     |                                                          | empty array      | Page View |

    @ANA_EVENT_VC004
    @analytics
    @MX @vbank
    @web @ios @android
    @backend(test)
    @web-done
    Scenario: Vehicule Crash - Huella - Successfully Crash
        Given a user with the following criteria
            | criteria                  |
            | emergency vehicle reports |
        And the user accesses to dashboard
        And the user goes to "emergency reports" using deeplink navigation
        When the user access to report "vehicle crash" for select "create report"
        Then the device contains the following variables
            | item                    | value                                                            | type             |
            | analytics               | analytics/glomo_base                                             | json schema      |
            | version DL              | 20250414_5.0                                                     | string           |
            | page name               | app:privada:personas:emergencias:vehiculo:choque:reporte exitoso | string           |
            | level 1                 | emergencias                                                      | string           |
            | level 2                 | vehiculo                                                         | string           |
            | level 3                 | choque                                                           | string           |
            | level 4                 | reporte exitoso                                                  | string           |
            | language                | ES                                                               | string           |
            | page area               | privada                                                          | string           |
            | page intent             | informacion                                                      | string           |
            | channel                 | online                                                           | string           |
            | page instance ID        | de                                                               | string           |
            | page info version       | appVersion                                                       | regexp named     |
            | page segment            | personas                                                         | string           |
            | sysEnv                  | app                                                              | string           |
            | business unit           | BBVA Mexico                                                      | string           |
            | site app name           | App BBVA Mexico                                                  | string           |
            | project name            | Glomo                                                            | string           |
            | device mobile           | si                                                               | string           |
            | user userState          | logado                                                           | string           |
            | user segment global     | 003001                                                           | string           |
            | profile ID              | profileID                                                        | regexp named     |
            | user gender             | gender                                                           | regexp named     |
            | user age                | age                                                              | regexp named     |
            | custom fields           | ambulancia:si,vehiculo puede circular:no                         | string           |
            | internal campaign       |                                                                  | empty array      |
            | optimization attributes |                                                                  | empty array      |
            | application             |                                                                  | empty str object |
            | products attributes     |                                                                  | empty array      |

    @ANA_EVENT_VC005
    @analytics
    @MX @vbank
    @web @ios @android
    @backend(test)
    @web-done
    Scenario: Vehicule Crash - Huella - Change Location
        Given a user with the following criteria
            | criteria                  |
            | emergency vehicle reports |
        And the user accesses to dashboard
        And the user goes to "emergency reports" using deeplink navigation
        And the user access to "vehicle crash" menu from "vehicle" screen
        And the analytics interceptor service is initiated
        When the user accepts "change address" action
        Then the analytics events contains the following variables
            | item                    | value                                                              | type             | event     |
            | analytics               | analytics/glomo_base                                               | json schema      | Page View |
            | version DL              | 20250414_5.0                                                       | string           | Page View |
            | page name               | app:privada:personas:emergencias:vehiculo:choque:cambiar ubicacion | string           | Page View |
            | level 1                 | emergencias                                                        | string           | Page View |
            | level 2                 | vehiculo                                                           | string           | Page View |
            | level 3                 | choque                                                             | string           | Page View |
            | level 4                 | cambiar ubicacion                                                  | string           | Page View |
            | language                | ES                                                                 | string           | Page View |
            | page area               | privada                                                            | string           | Page View |
            | page intent             | informacion                                                        | string           | Page View |
            | channel                 | online                                                             | string           | Page View |
            | page instance ID        | de                                                                 | string           | Page View |
            | page info version       | appVersion                                                         | regexp named     | Page View |
            | page segment            | personas                                                           | string           | Page View |
            | sysEnv                  | app                                                                | string           | Page View |
            | business unit           | BBVA Mexico                                                        | string           | Page View |
            | site app name           | App BBVA Mexico                                                    | string           | Page View |
            | project name            | Glomo                                                              | string           | Page View |
            | device mobile           | si                                                                 | string           | Page View |
            | user userState          | logado                                                             | string           | Page View |
            | user segment global     | 003001                                                             | string           | Page View |
            | profile ID              | profileID                                                          | regexp named     | Page View |
            | user gender             | gender                                                             | regexp named     | Page View |
            | user age                | age                                                                | regexp named     | Page View |
            | internal campaign       |                                                                    | empty array      | Page View |
            | optimization attributes |                                                                    | empty array      | Page View |
            | application             |                                                                    | empty str object | Page View |
            | products attributes     |                                                                    | empty array      | Page View |

    @ANA_EVENT_VC006
    @analytics
    @MX @vbank
    @web @ios @android
    @backend(test)
    @web-done @glomo
    Scenario Outline: Access to the modal succes - <selection>
        Given a user with the following criteria
            | criteria                  |
            | emergency vehicle reports |
        And the user accesses to dashboard
        And the user goes to "emergency reports" using deeplink navigation
        And the user access to report "vehicle crash" for select "create report"
        And the analytics interceptor service is initiated
        When the user accepts "<selection>" action
        Then the analytics events contains the following variables
            | item                    | value                                                            | type             | event         |
            | analytics               | analytics/glomo_base                                             | json schema      | External Link |
            | version DL              | 20250414_5.0                                                     | string           | External Link |
            | page name               | app:privada:personas:emergencias:vehiculo:choque:reporte exitoso | string           | External Link |
            | level 1                 | emergencias                                                      | string           | External Link |
            | level 2                 | vehiculo                                                         | string           | External Link |
            | level 3                 | choque                                                           | string           | External Link |
            | level 4                 | reporte exitoso                                                  | string           | External Link |
            | language                | ES                                                               | string           | External Link |
            | page area               | privada                                                          | string           | External Link |
            | page intent             | informacion                                                      | string           | External Link |
            | channel                 | online                                                           | string           | External Link |
            | page instance ID        | de                                                               | string           | External Link |
            | page info version       | appVersion                                                       | regexp named     | External Link |
            | page segment            | personas                                                         | string           | External Link |
            | sysEnv                  | app                                                              | string           | External Link |
            | business unit           | BBVA Mexico                                                      | string           | External Link |
            | site app name           | App BBVA Mexico                                                  | string           | External Link |
            | project name            | Glomo                                                            | string           | External Link |
            | device mobile           | si                                                               | string           | External Link |
            | user userState          | logado                                                           | string           | External Link |
            | user segment global     | 003001                                                           | string           | External Link |
            | profile ID              | profileID                                                        | regexp named     | External Link |
            | user gender             | gender                                                           | regexp named     | External Link |
            | user age                | age                                                              | regexp named     | External Link |
            | link url                | <value>                                                          | string           | External Link |
            | internal campaign       |                                                                  | empty array      | External Link |
            | optimization attributes |                                                                  | empty array      | External Link |
            | application             |                                                                  | empty str object | External Link |
            | products attributes     |                                                                  | empty array      | External Link |

        Examples:
            | selection                    | value                          |
            | call crash in success screen | llama a la linea de asistencia |
            | view policy crash            | ver poliza                     |

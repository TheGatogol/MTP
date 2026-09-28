@emergencyVehicleTheftReportsAnalytics
Feature: Analytics - Emergency Vehicle Theft Reports

    @ANA_RRV001
    @analytics
    @MX
    @vbank @android @ios
    @web
    @backend(test)
    @web-done
    Scenario: Vehicule Theft Location - Huella - Theft
        Given a user with the following criteria
            | criteria                  |
            | emergency vehicle reports |
        And the user accesses to dashboard
        And the user goes to "emergency reports" using deeplink navigation
        When the user access to "vehicle theft" menu from "vehicle" screen
        Then the device contains the following variables
            | item                    | value                                                                 | type             |
            | analytics               | analytics/glomo_base                                                  | json schema      |
            | version DL              | 20250414_5.0                                                          | string           |
            | page name               | app:privada:personas:emergencias:vehiculo:robo:ubicacion del vehiculo | string           |
            | level 1                 | emergencias                                                           | string           |
            | level 2                 | vehiculo                                                              | string           |
            | level 3                 | robo                                                                  | string           |
            | level 4                 | ubicacion del vehiculo                                                | string           |
            | language                | ES                                                                    | string           |
            | page area               | privada                                                               | string           |
            | page intent             | informacion                                                           | string           |
            | channel                 | online                                                                | string           |
            | page instance ID        | de                                                                    | string           |
            | page info version       | appVersion                                                            | regexp named     |
            | page segment            | personas                                                              | string           |
            | sysEnv                  | app                                                                   | string           |
            | business unit           | BBVA Mexico                                                           | string           |
            | site app name           | App BBVA Mexico                                                       | string           |
            | project name            | Glomo                                                                 | string           |
            | device mobile           | si                                                                    | string           |
            | user userState          | logado                                                                | string           |
            | user segment global     | 003001                                                                | string           |
            | profile ID              | profileID                                                             | regexp named     |
            | user gender             | gender                                                                | regexp named     |
            | user age                | age                                                                   | regexp named     |
            | internal campaign       |                                                                       | empty array      |
            | optimization attributes |                                                                       | empty array      |
            | application             |                                                                       | empty str object |
            | products attributes     |                                                                       | empty array      |

    @ANA_RRV002
    @analytics
    @MX
    @vbank @android @ios
    @web
    @backend(test)
    @web-done
    Scenario: Vehicule Theft - Huella - Successfully Theft
        Given a user with the following criteria
            | criteria                  |
            | emergency vehicle reports |
        And the user accesses to dashboard
        And the user goes to "emergency reports" using deeplink navigation
        When the user access to report "vehicle theft" for select "create report"
        Then the device contains the following variables
            | item                    | value                                                          | type             |
            | analytics               | analytics/glomo_base                                           | json schema      |
            | version DL              | 20250414_5.0                                                   | string           |
            | page name               | app:privada:personas:emergencias:vehiculo:robo:reporte exitoso | string           |
            | level 1                 | emergencias                                                    | string           |
            | level 2                 | vehiculo                                                       | string           |
            | level 3                 | robo                                                           | string           |
            | level 4                 | reporte exitoso                                                | string           |
            | language                | ES                                                             | string           |
            | page area               | privada                                                        | string           |
            | page intent             | informacion                                                    | string           |
            | channel                 | online                                                         | string           |
            | page instance ID        | de                                                             | string           |
            | page info version       | appVersion                                                     | regexp named     |
            | page segment            | personas                                                       | string           |
            | sysEnv                  | app                                                            | string           |
            | business unit           | BBVA Mexico                                                    | string           |
            | site app name           | App BBVA Mexico                                                | string           |
            | project name            | Glomo                                                          | string           |
            | device mobile           | si                                                             | string           |
            | user userState          | logado                                                         | string           |
            | user segment global     | 003001                                                         | string           |
            | profile ID              | profileID                                                      | regexp named     |
            | user gender             | gender                                                         | regexp named     |
            | user age                | age                                                            | regexp named     |
            | internal campaign       |                                                                | empty array      |
            | optimization attributes |                                                                | empty array      |
            | application             |                                                                | empty str object |
            | products attributes     |                                                                | empty array      |

    @ANA_RRV003
    @analytics
    @MX
    @vbank @android @ios
    @web
    @backend(test)
    @web-done
    Scenario: Vehicule Theft - Huella - In Progress Theft
        Given a user with the following criteria
            | criteria                  |
            | emergency vehicle reports |
        And the user accesses to dashboard
        And the user goes to "emergency reports" using deeplink navigation
        When the user access to report "vehicle theft" for select "create report"
        Then the device contains the following variables
            | item                    | value                                                           | type             |
            | analytics               | analytics/glomo_base                                            | json schema      |
            | version DL              | 20250414_5.0                                                    | string           |
            | page name               | app:privada:personas:emergencias:vehiculo:robo:reporte en curso | string           |
            | level 1                 | emergencias                                                     | string           |
            | level 2                 | vehiculo                                                        | string           |
            | level 3                 | robo                                                            | string           |
            | level 4                 | reporte en curso                                                | string           |
            | language                | ES                                                              | string           |
            | page area               | privada                                                         | string           |
            | page intent             | informacion                                                     | string           |
            | channel                 | online                                                          | string           |
            | page instance ID        | de                                                              | string           |
            | page info version       | appVersion                                                      | regexp named     |
            | page segment            | personas                                                        | string           |
            | sysEnv                  | app                                                             | string           |
            | business unit           | BBVA Mexico                                                     | string           |
            | site app name           | App BBVA Mexico                                                 | string           |
            | project name            | Glomo                                                           | string           |
            | device mobile           | si                                                              | string           |
            | user userState          | logado                                                          | string           |
            | user segment global     | 003001                                                          | string           |
            | profile ID              | profileID                                                       | regexp named     |
            | user gender             | gender                                                          | regexp named     |
            | user age                | age                                                             | regexp named     |
            | internal campaign       |                                                                 | empty array      |
            | optimization attributes |                                                                 | empty array      |
            | application             |                                                                 | empty str object |
            | products attributes     |                                                                 | empty array      |

    @ANA_RRV004
    @analytics
    @MX
    @vbank @android @ios
    @web
    @backend(test)
    @web-done
    Scenario: Vehicule Theft - Huella External - In Progress Theft - Call
        Given a user with the following criteria
            | criteria                  |
            | emergency vehicle reports |
        And the user accesses to dashboard
        And the user goes to "emergency reports" using deeplink navigation
        When the user access to report "vehicle theft" for select "call detected theft"
        Then the device contains the following variables
            | item                    | value                                                           | type             |
            | analytics               | analytics/glomo_base                                            | json schema      |
            | version DL              | 20250414_5.0                                                    | string           |
            | page name               | app:privada:personas:emergencias:vehiculo:robo:reporte en curso | string           |
            | level 1                 | emergencias                                                     | string           |
            | level 2                 | vehiculo                                                        | string           |
            | level 3                 | robo                                                            | string           |
            | level 4                 | reporte en curso                                                | string           |
            | link url                | llamar                                                          | string           |
            | language                | ES                                                              | string           |
            | page area               | privada                                                         | string           |
            | page intent             | informacion                                                     | string           |
            | channel                 | online                                                          | string           |
            | page instance ID        | de                                                              | string           |
            | page info version       | appVersion                                                      | regexp named     |
            | page segment            | personas                                                        | string           |
            | sysEnv                  | app                                                             | string           |
            | business unit           | BBVA Mexico                                                     | string           |
            | site app name           | App BBVA Mexico                                                 | string           |
            | project name            | Glomo                                                           | string           |
            | device mobile           | si                                                              | string           |
            | user userState          | logado                                                          | string           |
            | user segment global     | 003001                                                          | string           |
            | profile ID              | profileID                                                       | regexp named     |
            | user gender             | gender                                                          | regexp named     |
            | user age                | age                                                             | regexp named     |
            | internal campaign       |                                                                 | empty array      |
            | optimization attributes |                                                                 | empty array      |
            | application             |                                                                 | empty str object |
            | products attributes     |                                                                 | empty array      |

    @ANA_RRV005
    @analytics
    @MX
    @vbank @android @ios
    @web
    @backend(test)
    @web-done
    Scenario: Vehicule Theft - Huella External - Successfully - Policy
        Given a user with the following criteria
            | criteria                  |
            | emergency vehicle reports |
        And the user accesses to dashboard
        And the user goes to "emergency reports" using deeplink navigation
        When the user access to report "vehicle theft" for select "policy success theft"
        Then the device contains the following variables
            | item                    | value                                                          | type             |
            | analytics               | analytics/glomo_base                                           | json schema      |
            | version DL              | 20250414_5.0                                                   | string           |
            | page name               | app:privada:personas:emergencias:vehiculo:robo:reporte exitoso | string           |
            | level 1                 | emergencias                                                    | string           |
            | level 2                 | vehiculo                                                       | string           |
            | level 3                 | robo                                                           | string           |
            | level 4                 | reporte exitoso                                                | string           |
            | link url                | ver poliza                                                     | string           |
            | language                | ES                                                             | string           |
            | page area               | privada                                                        | string           |
            | page intent             | informacion                                                    | string           |
            | channel                 | online                                                         | string           |
            | page instance ID        | de                                                             | string           |
            | page info version       | appVersion                                                     | regexp named     |
            | page segment            | personas                                                       | string           |
            | sysEnv                  | app                                                            | string           |
            | business unit           | BBVA Mexico                                                    | string           |
            | site app name           | App BBVA Mexico                                                | string           |
            | project name            | Glomo                                                          | string           |
            | device mobile           | si                                                             | string           |
            | user userState          | logado                                                         | string           |
            | user segment global     | 003001                                                         | string           |
            | profile ID              | profileID                                                      | regexp named     |
            | user gender             | gender                                                         | regexp named     |
            | user age                | age                                                            | regexp named     |
            | internal campaign       |                                                                | empty array      |
            | optimization attributes |                                                                | empty array      |
            | application             |                                                                | empty str object |
            | products attributes     |                                                                | empty array      |

    @ANA_RRV006
    @analytics
    @MX
    @vbank @android @ios
    @web
    @backend(test)
    @web-done
    Scenario: Vehicule Theft - Huella - Resume
        Given a user with the following criteria
            | criteria                  |
            | emergency vehicle reports |
        And the user accesses to dashboard
        And the user goes to "emergency reports" using deeplink navigation
        When the user access to report "vehicle theft" for select "accept change geolocation"
        Then the device contains the following variables
            | item                    | value                                                  | type             |
            | analytics               | analytics/glomo_base                                   | json schema      |
            | version DL              | 20250414_5.0                                           | string           |
            | page name               | app:privada:personas:emergencias:vehiculo:robo:resumen | string           |
            | level 1                 | emergencias                                            | string           |
            | level 2                 | vehiculo                                               | string           |
            | level 3                 | robo                                                   | string           |
            | level 4                 | resumen                                                | string           |
            | language                | ES                                                     | string           |
            | page area               | privada                                                | string           |
            | page intent             | informacion                                            | string           |
            | channel                 | online                                                 | string           |
            | page instance ID        | de                                                     | string           |
            | page info version       | appVersion                                             | regexp named     |
            | page segment            | personas                                               | string           |
            | sysEnv                  | app                                                    | string           |
            | business unit           | BBVA Mexico                                            | string           |
            | site app name           | App BBVA Mexico                                        | string           |
            | project name            | Glomo                                                  | string           |
            | device mobile           | si                                                     | string           |
            | user userState          | logado                                                 | string           |
            | user segment global     | 003001                                                 | string           |
            | profile ID              | profileID                                              | regexp named     |
            | user gender             | gender                                                 | regexp named     |
            | user age                | age                                                    | regexp named     |
            | internal campaign       |                                                        | empty array      |
            | optimization attributes |                                                        | empty array      |
            | application             |                                                        | empty str object |
            | products attributes     |                                                        | empty array      |

    @ANA_RRV007
    @analytics
    @MX
    @vbank @android @ios
    @web
    @backend(test)
    @web-done
    Scenario: Vehicule Theft - Huella - Change Location
        Given a user with the following criteria
            | criteria                  |
            | emergency vehicle reports |
        And the user accesses to dashboard
        And the user goes to "emergency reports" using deeplink navigation
        When the user access to report "vehicle theft" for select "change geolocation"
        Then the device contains the following variables
            | item                    | value                                                                         | type             |
            | analytics               | analytics/glomo_base                                                          | json schema      |
            | version DL              | 20250414_5.0                                                                  | string           |
            | page name               | app:privada:personas:emergencias:vehiculo:robo:cambiar ubicacion del vehiculo | string           |
            | level 1                 | emergencias                                                                   | string           |
            | level 2                 | vehiculo                                                                      | string           |
            | level 3                 | robo                                                                          | string           |
            | level 4                 | cambiar ubicacion del vehiculo                                                | string           |
            | language                | ES                                                                            | string           |
            | page area               | privada                                                                       | string           |
            | page intent             | informacion                                                                   | string           |
            | channel                 | online                                                                        | string           |
            | page instance ID        | de                                                                            | string           |
            | page info version       | appVersion                                                                    | regexp named     |
            | page segment            | personas                                                                      | string           |
            | sysEnv                  | app                                                                           | string           |
            | business unit           | BBVA Mexico                                                                   | string           |
            | site app name           | App BBVA Mexico                                                               | string           |
            | project name            | Glomo                                                                         | string           |
            | device mobile           | si                                                                            | string           |
            | user userState          | logado                                                                        | string           |
            | user segment global     | 003001                                                                        | string           |
            | profile ID              | profileID                                                                     | regexp named     |
            | user gender             | gender                                                                        | regexp named     |
            | user age                | age                                                                           | regexp named     |
            | internal campaign       |                                                                               | empty array      |
            | optimization attributes |                                                                               | empty array      |
            | application             |                                                                               | empty str object |
            | products attributes     |                                                                               | empty array      |

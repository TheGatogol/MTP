@emergencyCarVehicleGlassReportsAnalytics
Feature: Analytics - Emergency Car Vehicle Glass Reports

    @ANA_EVENT_CRI001
    @analytics
    @MX @vbank
    @web @ios @android
    @backend(test)
    @web-done
    Scenario: Vehicule Glass - Footprint - Date
        Given a user with the following criteria
            | criteria                |
            | emergency glass reports |
        And the user accesses to dashboard
        And the user goes to "emergency reports" using deeplink navigation
        When the user access to report "vehicle glass" for select "date"
        Then the device contains the following variables
            | item                    | value                                                                           | type             |
            | analytics               | analytics/glomo_base                                                            | json schema      |
            | version DL              | 20250414_5.0                                                                    | string           |
            | page name               | app:privada:personas:emergencias:vehiculo:dano de cristales:fecha del siniestro | string           |
            | level 1                 | emergencias                                                                     | string           |
            | level 2                 | vehiculo                                                                        | string           |
            | level 3                 | dano de cristales                                                               | string           |
            | level 4                 | fecha del siniestro                                                             | string           |
            | language                | ES                                                                              | string           |
            | page area               | privada                                                                         | string           |
            | page intent             | informacion                                                                     | string           |
            | channel                 | online                                                                          | string           |
            | page instance ID        | de                                                                              | string           |
            | page info version       | appVersion                                                                      | regexp named     |
            | page segment            | personas                                                                        | string           |
            | sysEnv                  | app                                                                             | string           |
            | business unit           | BBVA Mexico                                                                     | string           |
            | site app name           | App BBVA Mexico                                                                 | string           |
            | project name            | Glomo                                                                           | string           |
            | device mobile           | si                                                                              | string           |
            | user userState          | logado                                                                          | string           |
            | user segment global     | 003001                                                                          | string           |
            | profile ID              | profileID                                                                       | regexp named     |
            | user gender             | gender                                                                          | regexp named     |
            | user age                | age                                                                             | regexp named     |
            | internal campaign       |                                                                                 | empty array      |
            | optimization attributes |                                                                                 | empty array      |
            | application             |                                                                                 | empty str object |
            | products attributes     |                                                                                 | empty array      |

    @ANA_EVENT_CRI002
    @analytics
    @MX @vbank
    @web @ios @android
    @backend(test)
    @web-done
    Scenario: Vehicule Glass - Footprint - Damaged Glass
        Given a user with the following criteria
            | criteria                |
            | emergency glass reports |
        And the user accesses to dashboard
        And the user goes to "emergency reports" using deeplink navigation
        When the user access to report "vehicle glass" for select "damaged glass"
        Then the device contains the following variables
            | item                    | value                                                                         | type             |
            | analytics               | analytics/glomo_base                                                          | json schema      |
            | version DL              | 20250414_5.0                                                                  | string           |
            | page name               | app:privada:personas:emergencias:vehiculo:dano de cristales:cristales danados | string           |
            | level 1                 | emergencias                                                                   | string           |
            | level 2                 | vehiculo                                                                      | string           |
            | level 3                 | dano de cristales                                                             | string           |
            | level 4                 | cristales danados                                                             | string           |
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

    @ANA_EVENT_CRI003
    @analytics
    @MX @vbank
    @web @ios @android
    @backend(test)
    @web-done
    Scenario: Vehicule Glass - Footprint - Location
        Given a user with the following criteria
            | criteria                |
            | emergency glass reports |
        And the user accesses to dashboard
        And the user goes to "emergency reports" using deeplink navigation
        When the user access to report "vehicle glass" for select "location"
        Then the device contains the following variables
            | item                    | value                                                                 | type             |
            | analytics               | analytics/glomo_base                                                  | json schema      |
            | version DL              | 20250414_5.0                                                          | string           |
            | page name               | app:privada:personas:emergencias:vehiculo:dano de cristales:ubicacion | string           |
            | level 1                 | emergencias                                                           | string           |
            | level 2                 | vehiculo                                                              | string           |
            | level 3                 | dano de cristales                                                     | string           |
            | level 4                 | ubicacion                                                             | string           |
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
            | custom fields           | cristalera:seleccionada por bbva                                      | string           |
            | internal campaign       |                                                                       | empty array      |
            | optimization attributes |                                                                       | empty array      |
            | application             |                                                                       | empty str object |
            | products attributes     |                                                                       | empty array      |

    @ANA_EVENT_CRI004
    @analytics
    @MX @vbank
    @web @ios @android
    @backend(test)
    @web-done
    Scenario: Vehicule Glass - Footprint - Edit Location
        Given a user with the following criteria
            | criteria                |
            | emergency glass reports |
        And the user accesses to dashboard
        And the user goes to "emergency reports" using deeplink navigation
        When the user access to report "vehicle glass" for select "change location"
        Then the device contains the following variables
            | item                    | value                                                                         | type             |
            | analytics               | analytics/glomo_base                                                          | json schema      |
            | version DL              | 20250414_5.0                                                                  | string           |
            | page name               | app:privada:personas:emergencias:vehiculo:dano de cristales:cambiar ubicacion | string           |
            | level 1                 | emergencias                                                                   | string           |
            | level 2                 | vehiculo                                                                      | string           |
            | level 3                 | dano de cristales                                                             | string           |
            | level 4                 | cambiar ubicacion                                                             | string           |
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
            | custom fields           | cristalera:seleccionada por bbva                                              | string           |
            | internal campaign       |                                                                               | empty array      |
            | optimization attributes |                                                                               | empty array      |
            | application             |                                                                               | empty str object |
            | products attributes     |                                                                               | empty array      |

    @ANA_EVENT_CRI005
    @analytics
    @MX @vbank
    @web @ios @android
    @backend(test)
    @web-done
    Scenario: Vehicule Glass - Footprint - Summary
        Given a user with the following criteria
            | criteria                |
            | emergency glass reports |
        And the user accesses to dashboard
        And the user goes to "emergency reports" using deeplink navigation
        When the user access to report "vehicle glass" for select "resume"
        Then the device contains the following variables
            | item                    | value                                                               | type             |
            | analytics               | analytics/glomo_base                                                | json schema      |
            | version DL              | 20250414_5.0                                                        | string           |
            | page name               | app:privada:personas:emergencias:vehiculo:dano de cristales:resumen | string           |
            | level 1                 | emergencias                                                         | string           |
            | level 2                 | vehiculo                                                            | string           |
            | level 3                 | dano de cristales                                                   | string           |
            | level 4                 | resumen                                                             | string           |
            | language                | ES                                                                  | string           |
            | page area               | privada                                                             | string           |
            | page intent             | informacion                                                         | string           |
            | channel                 | online                                                              | string           |
            | page instance ID        | de                                                                  | string           |
            | page info version       | appVersion                                                          | regexp named     |
            | page segment            | personas                                                            | string           |
            | sysEnv                  | app                                                                 | string           |
            | business unit           | BBVA Mexico                                                         | string           |
            | site app name           | App BBVA Mexico                                                     | string           |
            | project name            | Glomo                                                               | string           |
            | device mobile           | si                                                                  | string           |
            | user userState          | logado                                                              | string           |
            | user segment global     | 003001                                                              | string           |
            | profile ID              | profileID                                                           | regexp named     |
            | user gender             | gender                                                              | regexp named     |
            | user age                | age                                                                 | regexp named     |
            | custom fields           | 9365                                                                | string           |
            | internal campaign       |                                                                     | empty array      |
            | optimization attributes |                                                                     | empty array      |
            | application             |                                                                     | empty str object |
            | products attributes     |                                                                     | empty array      |

    @ANA_EVENT_CRI006
    @analytics
    @MX @vbank
    @web @ios @android
    @backend(test)
    @web-done
    Scenario: Vehicule Glass - Footprint - Create Report
        Given a user with the following criteria
            | criteria                |
            | emergency glass reports |
        And the user accesses to dashboard
        And the user goes to "emergency reports" using deeplink navigation
        When the user access to report "vehicle glass" for select "create report"
        Then the device contains the following variables
            | item                    | value                                                                        | type             |
            | analytics               | analytics/glomo_base                                                         | json schema      |
            | version DL              | 20250414_5.0                                                                 | string           |
            | page name               | app:privada:personas:emergencias:vehiculo:dano de cristales:reporte recibido | string           |
            | level 1                 | emergencias                                                                  | string           |
            | level 2                 | vehiculo                                                                     | string           |
            | level 3                 | dano de cristales                                                            | string           |
            | level 4                 | reporte recibido                                                             | string           |
            | language                | ES                                                                           | string           |
            | page area               | privada                                                                      | string           |
            | page intent             | informacion                                                                  | string           |
            | channel                 | online                                                                       | string           |
            | page instance ID        | de                                                                           | string           |
            | page info version       | appVersion                                                                   | regexp named     |
            | page segment            | personas                                                                     | string           |
            | sysEnv                  | app                                                                          | string           |
            | business unit           | BBVA Mexico                                                                  | string           |
            | site app name           | App BBVA Mexico                                                              | string           |
            | project name            | Glomo                                                                        | string           |
            | device mobile           | si                                                                           | string           |
            | user userState          | logado                                                                       | string           |
            | user segment global     | 003001                                                                       | string           |
            | profile ID              | profileID                                                                    | regexp named     |
            | user gender             | gender                                                                       | regexp named     |
            | user age                | age                                                                          | regexp named     |
            | custom fields           | 9365                                                                         | string           |
            | internal campaign       |                                                                              | empty array      |
            | optimization attributes |                                                                              | empty array      |
            | application             |                                                                              | empty str object |
            | products attributes     |                                                                              | empty array      |

    @ANA_EVENT_CRI007
    @analytics
    @MX @vbank
    @web @ios @android
    @backend(test)
    @web-done
    Scenario: Vehicule Glass - Footprint - Communication Error
        Given a user with the following criteria
            | criteria                |
            | emergency glass reports |
        And the user accesses to dashboard
        And the user goes to "emergency reports" using deeplink navigation
        And the user access to report "vehicle glass" for select "location"
        When the user retries "4" times
        Then the device contains the following variables
            | item                    | value                                                                             | type             |
            | analytics               | analytics/glomo_base                                                              | json schema      |
            | version DL              | 20250414_5.0                                                                      | string           |
            | page name               | app:privada:personas:emergencias:vehiculo:dano de cristales:error de comunicacion | string           |
            | level 1                 | emergencias                                                                       | string           |
            | level 2                 | vehiculo                                                                          | string           |
            | level 3                 | dano de cristales                                                                 | string           |
            | level 4                 | error de comunicacion                                                             | string           |
            | error page              | error de comunicacion                                                             | string           |
            | language                | ES                                                                                | string           |
            | page area               | privada                                                                           | string           |
            | page intent             | informacion                                                                       | string           |
            | channel                 | online                                                                            | string           |
            | page instance ID        | de                                                                                | string           |
            | page info version       | appVersion                                                                        | regexp named     |
            | page segment            | personas                                                                          | string           |
            | sysEnv                  | app                                                                               | string           |
            | business unit           | BBVA Mexico                                                                       | string           |
            | site app name           | App BBVA Mexico                                                                   | string           |
            | project name            | Glomo                                                                             | string           |
            | device mobile           | si                                                                                | string           |
            | user userState          | logado                                                                            | string           |
            | user segment global     | 003001                                                                            | string           |
            | profile ID              | profileID                                                                         | regexp named     |
            | user gender             | gender                                                                            | regexp named     |
            | user age                | age                                                                               | regexp named     |
            | internal campaign       |                                                                                   | empty array      |
            | optimization attributes |                                                                                   | empty array      |
            | application             |                                                                                   | empty str object |
            | products attributes     |                                                                                   | empty array      |

    @ANA_EVENT_CRI008
    @analytics
    @MX @vbank
    @web @ios @android
    @backend(test)
    @web-done
    Scenario: Vehicule Glass - Footprint - Create Report Error
        Given a user with the following criteria
            | criteria                |
            | emergency glass reports |
        And the user accesses to dashboard
        And the user goes to "emergency reports" using deeplink navigation
        When the user access to report "vehicle glass" for select "create report"
        Then the device contains the following variables
            | item                    | value                                                                                         | type             |
            | analytics               | analytics/glomo_base                                                                          | json schema      |
            | version DL              | 20250414_5.0                                                                                  | string           |
            | page name               | app:privada:personas:emergencias:vehiculo:dano de cristales:error al continuar con el reporte | string           |
            | level 1                 | emergencias                                                                                   | string           |
            | level 2                 | vehiculo                                                                                      | string           |
            | level 3                 | dano de cristales                                                                             | string           |
            | level 4                 | error al continuar con el reporte                                                             | string           |
            | error page              | error al continuar con el reporte                                                             | string           |
            | language                | ES                                                                                            | string           |
            | page area               | privada                                                                                       | string           |
            | page intent             | informacion                                                                                   | string           |
            | channel                 | online                                                                                        | string           |
            | page instance ID        | de                                                                                            | string           |
            | page info version       | appVersion                                                                                    | regexp named     |
            | page segment            | personas                                                                                      | string           |
            | sysEnv                  | app                                                                                           | string           |
            | business unit           | BBVA Mexico                                                                                   | string           |
            | site app name           | App BBVA Mexico                                                                               | string           |
            | project name            | Glomo                                                                                         | string           |
            | device mobile           | si                                                                                            | string           |
            | user userState          | logado                                                                                        | string           |
            | user segment global     | 003001                                                                                        | string           |
            | profile ID              | profileID                                                                                     | regexp named     |
            | user gender             | gender                                                                                        | regexp named     |
            | user age                | age                                                                                           | regexp named     |
            | internal campaign       |                                                                                               | empty array      |
            | optimization attributes |                                                                                               | empty array      |
            | application             |                                                                                               | empty str object |
            | products attributes     |                                                                                               | empty array      |

    @ANA_EVENT_CRI009
    @analytics
    @MX @vbank
    @web @ios @android
    @backend(test)
    @web-done
    Scenario: Vehicule Glass - External Link - In Progress - Call Error
        Given a user with the following criteria
            | criteria                |
            | emergency glass reports |
        And the user accesses to dashboard
        And the user goes to "emergency reports" using deeplink navigation
        And the analytics interceptor service is initiated
        When the user access to report "vehicle glass" for select "call in progress"
        Then the analytics events contains the following variables
            | item                    | value                                                                                         | type             | event          |
            | analytics               | analytics/glomo_base                                                                          | json schema      | External Link  |
            | version DL              | 20250414_5.0                                                                                  | string           | External Link  |
            | page name               | app:privada:personas:emergencias:vehiculo:dano de cristales:error al continuar con el reporte | string           | External Link  |
            | level 1                 | emergencias                                                                                   | string           | External Link  |
            | level 2                 | vehiculo                                                                                      | string           | External Link  |
            | level 3                 | dano de cristales                                                                             | string           | External Link  |
            | level 4                 | error al continuar con el reporte                                                             | string           | External Link  |
            | error page              | error al continuar con el reporte                                                             | string           | External Link  |
            | link url                | llamar                                                                                        | string           | External Link  |
            | language                | ES                                                                                            | string           | External Link  |
            | page area               | privada                                                                                       | string           | External Link  |
            | page intent             | informacion                                                                                   | string           | External Link  |
            | channel                 | online                                                                                        | string           | External Link  |
            | page instance ID        | de                                                                                            | string           | External Link  |
            | page info version       | appVersion                                                                                    | regexp named     | External Link  |
            | page segment            | personas                                                                                      | string           | External Link  |
            | sysEnv                  | app                                                                                           | string           | External Link  |
            | business unit           | BBVA Mexico                                                                                   | string           | External Link  |
            | site app name           | App BBVA Mexico                                                                               | string           | External Link  |
            | project name            | Glomo                                                                                         | string           | External Link  |
            | device mobile           | si                                                                                            | string           | External Link  |
            | user userState          | logado                                                                                        | string           | External Link  |
            | user segment global     | 003001                                                                                        | string           | External Link  |
            | profile ID              | profileID                                                                                     | regexp named     | External Link  |
            | user gender             | gender                                                                                        | regexp named     | External Link  |
            | user age                | age                                                                                           | regexp named     | External Link  |
            | internal campaign       |                                                                                               | empty array      | External Link  |
            | optimization attributes |                                                                                               | empty array      | External Link  |
            | application             |                                                                                               | empty str object | External Link  |
            | products attributes     |                                                                                               | empty array      | External Link  |

    @ANA_EVENT_CRI010
    @analytics
    @MX @vbank
    @web @ios @android
    @backend(test)
    @web-done
    Scenario: Vehicule Glass - External Link - Communication - Call Error
        Given a user with the following criteria
            | criteria                |
            | emergency glass reports |
        And the user accesses to dashboard
        And the user goes to "emergency reports" using deeplink navigation
        And the analytics interceptor service is initiated
        When the user access to report "vehicle glass" for select "call in communication"
        Then the analytics events contains the following variables
            | item                    | value                                                                             | type             | event         |
            | analytics               | analytics/glomo_base                                                              | json schema      | External Link |
            | version DL              | 20250414_5.0                                                                      | string           | External Link |
            | page name               | app:privada:personas:emergencias:vehiculo:dano de cristales:error de comunicacion | string           | External Link |
            | level 1                 | emergencias                                                                       | string           | External Link |
            | level 2                 | vehiculo                                                                          | string           | External Link |
            | level 3                 | dano de cristales                                                                 | string           | External Link |
            | level 4                 | error de comunicacion                                                             | string           | External Link |
            | error page              | error de comunicacion                                                             | string           | External Link |
            | link url                | llamar                                                                            | string           | External Link |
            | language                | ES                                                                                | string           | External Link |
            | page area               | privada                                                                           | string           | External Link |
            | page intent             | informacion                                                                       | string           | External Link |
            | channel                 | online                                                                            | string           | External Link |
            | page instance ID        | de                                                                                | string           | External Link |
            | page info version       | appVersion                                                                        | regexp named     | External Link |
            | page segment            | personas                                                                          | string           | External Link |
            | sysEnv                  | app                                                                               | string           | External Link |
            | business unit           | BBVA Mexico                                                                       | string           | External Link |
            | site app name           | App BBVA Mexico                                                                   | string           | External Link |
            | project name            | Glomo                                                                             | string           | External Link |
            | device mobile           | si                                                                                | string           | External Link |
            | user userState          | logado                                                                            | string           | External Link |
            | user segment global     | 003001                                                                            | string           | External Link |
            | profile ID              | profileID                                                                         | regexp named     | External Link |
            | user gender             | gender                                                                            | regexp named     | External Link |
            | user age                | age                                                                               | regexp named     | External Link |
            | internal campaign       |                                                                                   | empty array      | External Link |
            | optimization attributes |                                                                                   | empty array      | External Link |
            | application             |                                                                                   | empty str object | External Link |
            | products attributes     |                                                                                   | empty array      | External Link |

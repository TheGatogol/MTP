@atmLocatorAnalytics
Feature: Analytics - ATM Locator

    @ANA_ATM001
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    # Welcome modal for ATMs & Branches locator page
    Scenario: User enters Branches and ATMs Locator page for first Time
        Given a user with the following criteria
            | criteria        |
            | active feedback |
        And the user accesses to dashboard
        And the analytics interceptor service is initiated
        When the user enters private Branches and ATMs Locator page for the first time
        Then the analytics events contains the following variables
            | item                    | value                                                | type             | event     |
            | analytics               | analytics/glomo_base                                 | json schema      | Page View |
            | level 1                 | sucursales y cajeros                                 | string           | Page View |
            | level 2                 | informacion                                          | string           | Page View |
            | version DL              | 20250414_5.0                                         | string           | Page View |
            | page name               | app:publica:general:sucursales y cajeros:informacion | string           | Page View |
            | language                | ES                                                   | string           | Page View |
            | page area               | publica                                              | string           | Page View |
            | page intent             | informacion                                          | string           | Page View |
            | channel                 | online                                               | string           | Page View |
            | page instance ID        | de                                                   | string           | Page View |
            | page info version       | appVersion                                           | regexp named     | Page View |
            | page segment            | general                                              | string           | Page View |
            | sysEnv                  | app                                                  | string           | Page View |
            | business unit           | BBVA Mexico                                          | string           | Page View |
            | site app name           | App BBVA Mexico                                      | string           | Page View |
            | project name            | Glomo                                                | string           | Page View |
            | device mobile           | si                                                   | string           | Page View |
            | user userState          | logado                                               | string           | Page View |
            | user segment global     | 003001                                               | string           | Page View |
            | profile ID              | profileID                                            | regexp named     | Page View |
            | internal campaign       |                                                      | empty array      | Page View |
            | optimization attributes |                                                      | empty array      | Page View |
            | application             |                                                      | empty str object | Page View |
            | products attributes     |                                                      | empty array      | Page View |

    @ANA_ATM002
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    @manual @JIRA.GLOMOGL-20193
    # Native location permissions modal
    Scenario: User enters Branches and ATMs Locator page in public zone
        Given the user accesses the Login Screen
        And the analytics interceptor service is initiated
        When the user enters Branches and ATMs Locator page
        Then the analytics events contains the following variables
            | item                    | value                                                | type             | event         |
            | analytics               | analytics/glomo_base                                 | json schema      | Internal Link |
            | version DL              | 20250414_5.0                                         | string           | Internal Link |
            | page name               | app:publica:general:sucursales y cajeros:informacion | string           | Internal Link |
            | level 1                 | sucursales y cajeros                                 | string           | Internal Link |
            | level 2                 | informacion                                          | string           | Internal Link |
            | language                | ES                                                   | string           | Internal Link |
            | page area               | publica                                              | string           | Internal Link |
            | page intent             | informacion                                          | string           | Internal Link |
            | channel                 | online                                               | string           | Internal Link |
            | page instance ID        | de                                                   | string           | Internal Link |
            | page info version       | appVersion                                           | regexp named     | Internal Link |
            | page segment            | general                                              | string           | Internal Link |
            | sysEnv                  | app                                                  | string           | Internal Link |
            | business unit           | BBVA Mexico                                          | string           | Internal Link |
            | site app name           | App BBVA Mexico                                      | string           | Internal Link |
            | project name            | Glomo                                                | string           | Internal Link |
            | link name               | rechazar                                             | string           | Internal Link |
            | device mobile           | si                                                   | string           | Internal Link |
            | user userState          | logado                                               | string           | Internal Link |
            | user segment global     | 003001                                               | string           | Internal Link |
            | profile ID              | profileID                                            | regexp named     | Internal Link |
            | profile ID              | profileID                                            | regexp named     | Internal Link |
            | internal campaign       |                                                      | empty array      | Internal Link |
            | optimization attributes |                                                      | empty array      | Internal Link |
            | application             |                                                      | empty str object | Internal Link |
            | products attributes     |                                                      | empty array      | Internal Link |

    @ANA_ATM003
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: User allows device location and enters Branches and ATMs Locator page
        Given a user with the following criteria
            | criteria        |
            | active feedback |
        And the user accesses to dashboard
        And the analytics interceptor service is initiated
        When the user enters private Branches and ATMs Locator page
        Then the analytics events contains the following variables
            | item                    | value                                         | type             | event     |
            | analytics               | analytics/glomo_base                          | json schema      | Page View |
            | version DL              | 20250414_5.0                                  | string           | Page View |
            | page name               | app:publica:general:sucursales y cajeros:mapa | string           | Page View |
            | level 1                 | sucursales y cajeros                          | string           | Page View |
            | level 2                 | mapa                                          | string           | Page View |
            | language                | ES                                            | string           | Page View |
            | page area               | publica                                       | string           | Page View |
            | page intent             | informacion                                   | string           | Page View |
            | channel                 | online                                        | string           | Page View |
            | page instance ID        | de                                            | string           | Page View |
            | page info version       | appVersion                                    | regexp named     | Page View |
            | page segment            | general                                       | string           | Page View |
            | sysEnv                  | app                                           | string           | Page View |
            | business unit           | BBVA Mexico                                   | string           | Page View |
            | site app name           | App BBVA Mexico                               | string           | Page View |
            | project name            | Glomo                                         | string           | Page View |
            | device mobile           | si                                            | string           | Page View |
            | user userState          | logado                                        | string           | Page View |
            | user segment global     | 003001                                        | string           | Page View |
            | profile ID              | profileID                                     | regexp named     | Page View |
            | profile ID              | profileID                                     | regexp named     | Page View |
            | internal campaign       |                                               | empty array      | Page View |
            | optimization attributes |                                               | empty array      | Page View |
            | application             |                                               | empty str object | Page View |
            | products attributes     |                                               | empty array      | Page View |

    @ANA_ATM004
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: User swipes over the map and wants to see full list of pois
        Given a user with the following criteria
            | criteria        |
            | active feedback |
        And the user accesses to dashboard
        And a moves to the location " 19.433433873982867" "-99.12954888652594"
        And the user accesses to private "atmLocator"
        And the analytics interceptor service is initiated
        And user swipes "2" times "left" along the map
        When the user accesses to the branches list
        Then the analytics events contains the following variables
            | item                    | value                                            | type             | event     |
            | analytics               | analytics/glomo_base                             | json schema      | Page View |
            | version DL              | 20250414_5.0                                     | string           | Page View |
            | page name               | app:publica:general:sucursales y cajeros:listado | string           | Page View |
            | level 1                 | sucursales y cajeros                             | string           | Page View |
            | level 2                 | listado                                          | string           | Page View |
            | language                | ES                                               | string           | Page View |
            | page area               | publica                                          | string           | Page View |
            | page intent             | informacion                                      | string           | Page View |
            | channel                 | online                                           | string           | Page View |
            | page instance ID        | de                                               | string           | Page View |
            | page info version       | appVersion                                       | regexp named     | Page View |
            | page segment            | general                                          | string           | Page View |
            | sysEnv                  | app                                              | string           | Page View |
            | business unit           | BBVA Mexico                                      | string           | Page View |
            | site app name           | App BBVA Mexico                                  | string           | Page View |
            | project name            | Glomo                                            | string           | Page View |
            | device mobile           | si                                               | string           | Page View |
            | user userState          | logado                                           | string           | Page View |
            | user segment global     | 003001                                           | string           | Page View |
            | profile ID              | profileID                                        | regexp named     | Page View |
            | profile ID              | profileID                                        | regexp named     | Page View |
            | internal campaign       |                                                  | empty array      | Page View |
            | optimization attributes |                                                  | empty array      | Page View |
            | application             |                                                  | empty str object | Page View |
            | products attributes     |                                                  | empty array      | Page View |

    @ANA_ATM005
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: User enters search place and search for a place with no near pois
        Given a user with the following criteria
            | criteria        |
            | active feedback |
        And the user accesses to dashboard
        And a moves to the location "19.432608" "-99.133209"
        And the user accesses to private "searchPlace"
        And the user starts typing on the search input the desire location address with no near pois
        When the user selects one of the items on the list but no near pois were found
        Then the device contains the following variables
            | item                    | value                                                              | type             |
            | analytics               | analytics/glomo_base                                               | json schema      |
            | version DL              | 20250414_5.0                                                       | string           |
            | page name               | app:publica:general:sucursales y cajeros:sin resultado de busqueda | string           |
            | level 1                 | sucursales y cajeros                                               | string           |
            | level 2                 | sin resultado de busqueda                                          | string           |
            | language                | ES                                                                 | string           |
            | page area               | publica                                                            | string           |
            | page intent             | informacion                                                        | string           |
            | channel                 | online                                                             | string           |
            | page instance ID        | de                                                                 | string           |
            | page info version       | appVersion                                                         | regexp named     |
            | page segment            | general                                                            | string           |
            | sysEnv                  | app                                                                | string           |
            | business unit           | BBVA Mexico                                                        | string           |
            | site app name           | App BBVA Mexico                                                    | string           |
            | project name            | Glomo                                                              | string           |
            | device mobile           | si                                                                 | string           |
            | user userState          | logado                                                             | string           |
            | user segment global     | 003001                                                             | string           |
            | profile ID              | profileID                                                          | regexp named     |
            | profile ID              | profileID                                                          | regexp named     |
            | internal campaign       |                                                                    | empty array      |
            | optimization attributes |                                                                    | empty array      |
            | application             |                                                                    | empty str object |
            | products attributes     |                                                                    | empty array      |

    @ANA_ATM006
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: User interacts with a branch point and selects the branch card
        Given a user with the following criteria
            | criteria        |
            | active feedback |
        And the user accesses to dashboard
        And a moves to the location "19.432608" "-99.133209"
        And the analytics interceptor service is initiated
        When the user accesses to private "poisDetail"
        Then the analytics events contains the following variables
            | item                    | value                                                     | type             | event     | event number |
            | analytics               | analytics/glomo_base                                      | json schema      | Page View | 2            |
            | version DL              | 20250414_5.0                                              | string           | Page View | 2            |
            | page name               | app:publica:general:sucursales y cajeros:detalle sucursal | string           | Page View | 2            |
            | level 1                 | sucursales y cajeros                                      | string           | Page View | 2            |
            | level 2                 | detalle sucursal                                          | string           | Page View | 2            |
            | language                | ES                                                        | string           | Page View | 2            |
            | page area               | publica                                                   | string           | Page View | 2            |
            | page intent             | informacion                                               | string           | Page View | 2            |
            | channel                 | online                                                    | string           | Page View | 2            |
            | page instance ID        | de                                                        | string           | Page View | 2            |
            | page info version       | appVersion                                                | regexp named     | Page View | 2            |
            | page segment            | general                                                   | string           | Page View | 2            |
            | sysEnv                  | app                                                       | string           | Page View | 2            |
            | business unit           | BBVA Mexico                                               | string           | Page View | 2            |
            | site app name           | App BBVA Mexico                                           | string           | Page View | 2            |
            | project name            | Glomo                                                     | string           | Page View | 2            |
            | device mobile           | si                                                        | string           | Page View | 2            |
            | user userState          | logado                                                    | string           | Page View | 2            |
            | user segment global     | 003001                                                    | string           | Page View | 2            |
            | profile ID              | profileID                                                 | regexp named     | Page View | 2            |
            | profile ID              | profileID                                                 | regexp named     | Page View | 2            |
            | internal campaign       |                                                           | empty array      | Page View | 2            |
            | optimization attributes |                                                           | empty array      | Page View | 2            |
            | application             |                                                           | empty str object | Page View | 2            |
            | products attributes     |                                                           | empty array      | Page View | 2            |

    @ANA_ATM007
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: User interacts with a branch point and selects the branch card and shares location of branch
        Given a user with the following criteria
            | criteria        |
            | active feedback |
        And the user accesses to dashboard
        And a moves to the location "19.432608" "-99.133209"
        And the user accesses to private "poisDetail"
        And the analytics interceptor service is initiated
        When the user shares location of the branch
        Then the analytics events contains the following variables
            | item                    | value                                                     | type             | event         |
            | analytics               | analytics/glomo_base                                      | json schema      | External Link |
            | version DL              | 20250414_5.0                                              | string           | External Link |
            | page name               | app:publica:general:sucursales y cajeros:detalle sucursal | string           | External Link |
            | level 1                 | sucursales y cajeros                                      | string           | External Link |
            | level 2                 | detalle sucursal                                          | string           | External Link |
            | language                | ES                                                        | string           | External Link |
            | page area               | publica                                                   | string           | External Link |
            | page intent             | informacion                                               | string           | External Link |
            | channel                 | online                                                    | string           | External Link |
            | page instance ID        | de                                                        | string           | External Link |
            | page info version       | appVersion                                                | regexp named     | External Link |
            | page segment            | general                                                   | string           | External Link |
            | sysEnv                  | app                                                       | string           | External Link |
            | business unit           | BBVA Mexico                                               | string           | External Link |
            | site app name           | App BBVA Mexico                                           | string           | External Link |
            | project name            | Glomo                                                     | string           | External Link |
            | link url                | compartir                                                 | string           | External Link |
            | device mobile           | si                                                        | string           | External Link |
            | user userState          | logado                                                    | string           | External Link |
            | user segment global     | 003001                                                    | string           | External Link |
            | profile ID              | profileID                                                 | regexp named     | External Link |
            | profile ID              | profileID                                                 | regexp named     | External Link |
            | internal campaign       |                                                           | empty array      | External Link |
            | optimization attributes |                                                           | empty array      | External Link |
            | application             |                                                           | empty str object | External Link |
            | products attributes     |                                                           | empty array      | External Link |

    @ANA_ATM008
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    @vbank-modified
    Scenario: The user reserves a turn at the branch and reserves a turn at the branch
        Given a user with the following criteria
            | criteria        |
            | active feedback |
        And the user accesses to dashboard
        And a moves to the location "19.432608" "-99.133209"
        And the user accesses to private "poisDetail"
        And the analytics interceptor service is initiated
        When the user book a branch appointment
        Then the analytics events contains the following variables
            | item                    | value                                                     | type             | event         |
            | analytics               | analytics/glomo_base                                      | json schema      | Internal Link |
            | version DL              | 20250414_5.0                                              | string           | Internal Link |
            | page name               | app:publica:general:sucursales y cajeros:detalle sucursal | string           | Internal Link |
            | level 1                 | sucursales y cajeros                                      | string           | Internal Link |
            | level 2                 | detalle sucursal                                          | string           | Internal Link |
            | language                | ES                                                        | string           | Internal Link |
            | page area               | publica                                                   | string           | Internal Link |
            | page intent             | informacion                                               | string           | Internal Link |
            | channel                 | online                                                    | string           | Internal Link |
            | page instance ID        | de                                                        | string           | Internal Link |
            | page info version       | appVersion                                                | regexp named     | Internal Link |
            | page segment            | general                                                   | string           | Internal Link |
            | sysEnv                  | app                                                       | string           | Internal Link |
            | business unit           | BBVA Mexico                                               | string           | Internal Link |
            | site app name           | App BBVA Mexico                                           | string           | Internal Link |
            | project name            | Glomo                                                     | string           | Internal Link |
            | link name               | agendar turno                                             | string           | Internal Link |
            | device mobile           | si                                                        | string           | Internal Link |
            | user userState          | logado                                                    | string           | Internal Link |
            | user segment global     | 003001                                                    | string           | Internal Link |
            | profile ID              | profileID                                                 | regexp named     | Internal Link |
            | profile ID              | profileID                                                 | regexp named     | Internal Link |
            | internal campaign       |                                                           | empty array      | Internal Link |
            | optimization attributes |                                                           | empty array      | Internal Link |
            | application             |                                                           | empty str object | Internal Link |
            | products attributes     |                                                           | empty array      | Internal Link |

    @ANA_ATM009
    @analytics
    @MX @vbank @tmpExclude @JIRA.GLOMOMX-254621 @backend(test)
    @web @ios @android
    Scenario: The user wants to know the route to the selected branch
        Given a user with the following criteria
            | criteria        |
            | active feedback |
        And the user accesses to dashboard
        And a moves to the location "19.432608" "-99.133209"
        And the user accesses to private "poisDetail"
        And the analytics interceptor service is initiated
        When the user wants to know the route to the branch
        Then the analytics events contains the following variables
            | item                    | value                                                     | type             | event         |
            | analytics               | analytics/glomo_base                                      | json schema      | External Link |
            | version DL              | 20250414_5.0                                              | string           | External Link |
            | page name               | app:publica:general:sucursales y cajeros:detalle sucursal | string           | External Link |
            | level 1                 | sucursales y cajeros                                      | string           | External Link |
            | level 2                 | detalle sucursal                                          | string           | External Link |
            | language                | ES                                                        | string           | External Link |
            | page area               | publica                                                   | string           | External Link |
            | page intent             | informacion                                               | string           | External Link |
            | channel                 | online                                                    | string           | External Link |
            | page instance ID        | de                                                        | string           | External Link |
            | page info version       | appVersion                                                | regexp named     | External Link |
            | page segment            | general                                                   | string           | External Link |
            | sysEnv                  | app                                                       | string           | External Link |
            | business unit           | BBVA Mexico                                               | string           | External Link |
            | site app name           | App BBVA Mexico                                           | string           | External Link |
            | project name            | Glomo                                                     | string           | External Link |
            | link url                | ruta                                                      | string           | External Link |
            | device mobile           | si                                                        | string           | External Link |
            | user userState          | logado                                                    | string           | External Link |
            | user segment global     | 003001                                                    | string           | External Link |
            | profile ID              | profileID                                                 | regexp named     | External Link |
            | profile ID              | profileID                                                 | regexp named     | External Link |
            | internal campaign       |                                                           | empty array      | External Link |
            | optimization attributes |                                                           | empty array      | External Link |
            | application             |                                                           | empty str object | External Link |
            | products attributes     |                                                           | empty array      | External Link |

    @ANA_ATM010
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    @vbank-modified
    # Modified service /pois/v0/bank-pois response with status 500 and deleted payload of near pois
    Scenario: User allows device location and enters Branches and ATMs Locator page and simulate error backend
        Given a user with the following criteria
            | criteria        |
            | active feedback |
        And the user accesses to dashboard
        When a moves to the location "19.432608" "-99.133209"
        And the user accesses to private "atmLocator" without connection
        Then the user sees an error modal open
        And the device contains the following variables
            | item                    | value                                                     | type             |
            | analytics               | analytics/glomo_base                                      | json schema      |
            | version DL              | 20250414_5.0                                              | string           |
            | page name               | app:publica:general:sucursales y cajeros:error de backend | string           |
            | level 1                 | sucursales y cajeros                                      | string           |
            | level 2                 | error de backend                                          | string           |
            | error page              | error de backend                                          | string           |
            | language                | ES                                                        | string           |
            | page area               | publica                                                   | string           |
            | page intent             | informacion                                               | string           |
            | channel                 | online                                                    | string           |
            | page instance ID        | de                                                        | string           |
            | page info version       | appVersion                                                | regexp named     |
            | page segment            | general                                                   | string           |
            | sysEnv                  | app                                                       | string           |
            | business unit           | BBVA Mexico                                               | string           |
            | site app name           | App BBVA Mexico                                           | string           |
            | project name            | Glomo                                                     | string           |
            | device mobile           | si                                                        | string           |
            | user userState          | logado                                                    | string           |
            | user segment global     | 003001                                                    | string           |
            | profile ID              | profileID                                                 | regexp named     |
            | profile ID              | profileID                                                 | regexp named     |
            | internal campaign       |                                                           | empty array      |
            | optimization attributes |                                                           | empty array      |
            | application             |                                                           | empty str object |
            | products attributes     |                                                           | empty array      |

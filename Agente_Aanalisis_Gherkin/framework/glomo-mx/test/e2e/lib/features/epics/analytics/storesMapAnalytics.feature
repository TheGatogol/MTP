@rewardsStoresMapAnalytics
Feature: Analytics - Stores Map

    @ANA_EVENT_RMOC001
    @analytics
    @android @ios @native
    @MX @backend(test) @vbank @no-data-manager
    @tmpExclude @JIRA.GLOMOMX-180582
    Scenario: Accept the geolocation permissions
        Given the user "5513204283" and "Glomo2024"
        And the user accesses to dashboard
        And the analytics interceptor service is initiated
        When the user accesses to map of commerce from rewards landing
        Then the analytics events contains the following variables
            | item                    | value                                                               | type             | event                    | event number |
            | analytics               | analytics/glomo_base                                                | json schema      | Internal Link            | 2            |
            | analytics               | analytics/glomo_base                                                | json schema      | Page View                | 3            |
            | page name               | app:privada:personas:puntos:usar mis puntos                         | string           | Internal Link            | 2            |
            | page name               | app:privada:personas:puntos:usar mis puntos:pagar en comercios:mapa | string           | Page View                | 3            |
            | level 1                 | puntos                                                              | string           | Internal Link, Page View | 2            |
            | level 1                 | puntos                                                              | string           | Page View                | 3            |
            | level 2                 | usar mis puntos                                                     | string           | Internal Link, Page View | 2            |
            | level 2                 | usar mis puntos                                                     | string           | Page View                | 3            |
            | level 3                 | pagar en comercios                                                  | string           | Page View                | 3            |
            | level 4                 | mapa                                                                | string           | Page View                | 3            |
            | language                | ES                                                                  | string           | Internal Link            | 2            |
            | language                | ES                                                                  | string           | Page View                | 3            |
            | page area               | privada                                                             | string           | Internal Link            | 2            |
            | page area               | privada                                                             | string           | Page View                | 3            |
            | page intent             | informacion                                                         | string           | Internal Link            | 2            |
            | page intent             | informacion                                                         | string           | Page View                | 3            |
            | channel                 | online                                                              | string           | Internal Link            | 2            |
            | channel                 | online                                                              | string           | Page View                | 3            |
            | page instance ID        | de                                                                  | string           | Internal Link            | 2            |
            | page instance ID        | de                                                                  | string           | Page View                | 3            |
            | version DL              | 20250414_5.0                                                        | string           | Internal Link            | 2            |
            | version DL              | 20250414_5.0                                                        | string           | Page View                | 3            |
            | page info version       | appVersion                                                          | regexp named     | Internal Link            | 2            |
            | page info version       | appVersion                                                          | regexp named     | Page View                | 3            |
            | page segment            | personas                                                            | string           | Internal Link            | 2            |
            | page segment            | personas                                                            | string           | Page View                | 3            |
            | sysEnv                  | app                                                                 | string           | Internal Link            | 2            |
            | sysEnv                  | app                                                                 | string           | Page View                | 3            |
            | business unit           | BBVA Mexico                                                         | string           | Internal Link            | 2            |
            | business unit           | BBVA Mexico                                                         | string           | Page View                | 3            |
            | site app name           | App BBVA Mexico                                                     | string           | Internal Link            | 2            |
            | site app name           | App BBVA Mexico                                                     | string           | Page View                | 3            |
            | project name            | Rewards                                                             | string           | Internal Link            | 2            |
            | project name            | Rewards                                                             | string           | Page View                | 3            |
            | link name               | paga con tus puntos                                                 | string           | Internal Link            | 2            |
            | device mobile           | si                                                                  | string           | Internal Link            | 2            |
            | device mobile           | si                                                                  | string           | Page View                | 3            |
            | user userState          | logado                                                              | string           | Internal Link            | 2            |
            | user userState          | logado                                                              | string           | Page View                | 3            |
            | user segment global     | 003001                                                              | string           | Internal Link            | 2            |
            | user segment global     | 003001                                                              | string           | Page View                | 3            |
            | profile ID              | profileID                                                           | regexp named     | Internal Link            | 2            |
            | profile ID              | profileID                                                           | regexp named     | Page View                | 3            |
            | user gender             | gender                                                              | regexp named     | Internal Link            | 2            |
            | user gender             | gender                                                              | regexp named     | Page View                | 3            |
            | user age                | age                                                                 | regexp named     | Internal Link            | 2            |
            | user age                | age                                                                 | regexp named     | Page View                | 3            |
            | internal campaign       |                                                                     | empty array      | Internal Link            | 2            |
            | internal campaign       |                                                                     | empty array      | Page View                | 3            |
            | optimization attributes |                                                                     | empty array      | Internal Link            | 2            |
            | optimization attributes |                                                                     | empty array      | Page View                | 3            |
            | application             |                                                                     | empty str object | Internal Link            | 2            |
            | application             |                                                                     | empty str object | Page View                | 3            |
            | products attributes     |                                                                     | empty array      | Internal Link            | 2            |
            | products attributes     |                                                                     | empty array      | Page View                | 3            |

    @ANA_EVENT_RMOC002
    @analytics
    @android @ios @native
    @MX @backend(artichoke) @no-data-manager
    @vbank @ios-done
    @tmpExclude @JIRA.GLOMOMX-180582
    Scenario: Internal Server Error - Access to Map of Commerce
        Given the user "9988770001" and "micd1122"
        And the user accesses to dashboard
        And the user accesses to map of commerce from rewards landing
        And the analytics interceptor service is initiated
        When the user retries "3" times
        Then the analytics events contains the following variables
            | item                    | value                                                                                                 | type             | event     |
            | analytics               | analytics/glomo_base                                                                                  | json schema      | Page View |
            | page name               | app:privada:personas:puntos:usar mis puntos:pagar en comercios:error no podemos cargar info comercios | string           | Page View |
            | level 1                 | puntos                                                                                                | string           | Page View |
            | level 2                 | usar mis puntos                                                                                       | string           | Page View |
            | level 3                 | pagar en comercios                                                                                    | string           | Page View |
            | level 4                 | error no podemos cargar info comercios                                                                | string           | Page View |
            | error page              | error no podemos cargar info comercios                                                                | string           | Page View |
            | language                | ES                                                                                                    | string           | Page View |
            | page area               | privada                                                                                               | string           | Page View |
            | page intent             | informacion                                                                                           | string           | Page View |
            | channel                 | online                                                                                                | string           | Page View |
            | page instance ID        | de                                                                                                    | string           | Page View |
            | version DL              | 20250414_5.0                                                                                          | string           | Page View |
            | page info version       | appVersion                                                                                            | regexp named     | Page View |
            | page segment            | personas                                                                                              | string           | Page View |
            | sysEnv                  | app                                                                                                   | string           | Page View |
            | business unit           | BBVA Mexico                                                                                           | string           | Page View |
            | site app name           | App BBVA Mexico                                                                                       | string           | Page View |
            | project name            | Rewards                                                                                               | string           | Page View |
            | device mobile           | si                                                                                                    | string           | Page View |
            | user userState          | logado                                                                                                | string           | Page View |
            | user segment global     | 003001                                                                                                | string           | Page View |
            | profile ID              | profileID                                                                                             | regexp named     | Page View |
            | user gender             | gender                                                                                                | regexp named     | Page View |
            | user age                | age                                                                                                   | regexp named     | Page View |
            | internal campaign       |                                                                                                       | empty array      | Page View |
            | optimization attributes |                                                                                                       | empty array      | Page View |
            | application             |                                                                                                       | empty str object | Page View |
            | products attributes     |                                                                                                       | empty array      | Page View |

    @ANA_EVENT_RMOC003
    @analytics
    @android @ios @native @ios-done
    @MX @backend(artichoke) @no-data-manager @vbank
    @tmpExclude @JIRA.GLOMOMX-180872
    #Advice: First, record the test to get the shops that appear on the map (31,glomo,_promotions_v1_stores,GET,1).
    #Then you choose one and put it in the step definition
    #The values in the table depend on the selected commerce. In this case the commerce does not have a telephone number
    Scenario: Accesses to list mode
        Given the user "9988770001" and "micd1122"
        And the user accesses to map of commerce from rewards landing
        And the analytics interceptor service is initiated
        When the user changes to list mode
        Then the analytics events contains the following variables
            | item                    | value                                                                | type             | event     |
            | analytics               | analytics/glomo_base                                                 | json schema      | Page View |
            | page name               | app:privada:personas:puntos:usar mis puntos:pagar en comercios:lista | string           | Page View |
            | level 1                 | puntos                                                               | string           | Page View |
            | level 2                 | usar mis puntos                                                      | string           | Page View |
            | level 3                 | pagar en comercios                                                   | string           | Page View |
            | level 4                 | lista                                                                | string           | Page View |
            | language                | ES                                                                   | string           | Page View |
            | page area               | privada                                                              | string           | Page View |
            | page intent             | informacion                                                          | string           | Page View |
            | channel                 | online                                                               | string           | Page View |
            | page instance ID        | de                                                                   | string           | Page View |
            | version DL              | 20250414_5.0                                                         | string           | Page View |
            | page info version       | appVersion                                                           | regexp named     | Page View |
            | page segment            | personas                                                             | string           | Page View |
            | sysEnv                  | app                                                                  | string           | Page View |
            | business unit           | BBVA Mexico                                                          | string           | Page View |
            | site app name           | App BBVA Mexico                                                      | string           | Page View |
            | project name            | Rewards                                                              | string           | Page View |
            | device mobile           | si                                                                   | string           | Page View |
            | user userState          | logado                                                               | string           | Page View |
            | user segment global     | 003001                                                               | string           | Page View |
            | profile ID              | profileID                                                            | regexp named     | Page View |
            | user gender             | gender                                                               | regexp named     | Page View |
            | user age                | age                                                                  | regexp named     | Page View |
            | internal campaign       |                                                                      | empty array      | Page View |
            | optimization attributes |                                                                      | empty array      | Page View |
            | application             |                                                                      | empty str object | Page View |
            | products attributes     |                                                                      | empty array      | Page View |

    @ANA_EVENT_RMOC004
    @analytics
    @android @ios @native
    @MX @backend(artichoke) @no-data-manager @vbank
    @manual @JIRA.GLOMOGL-29203
    #Advice: First, record the test to get the shops that appear on the map (,glomo,_promotions_v1_stores,GET,1).
    #Then you choose one and put it in the step definition
    Scenario: Access to commerce detail
        Given the user "9988770001" and "micd1122"
        And the user accesses to map of commerce from rewards landing
        And the analytics interceptor service is initiated
        When the user accesses "LA LONJA" commerce on the map
        Then the analytics events contains the following variables
            | item                    | value                                                                           | type             | event     |
            | analytics               | analytics/glomo_base                                                            | json schema      | Page View |
            | page name               | app:privada:personas:puntos:usar mis puntos:pagar en comercios:detalle comercio | string           | Page View |
            | level 1                 | puntos                                                                          | string           | Page View |
            | level 2                 | usar mis puntos                                                                 | string           | Page View |
            | level 3                 | pagar en comercios                                                              | string           | Page View |
            | level 4                 | detalle comercio                                                                | string           | Page View |
            | language                | ES                                                                              | string           | Page View |
            | page area               | privada                                                                         | string           | Page View |
            | page intent             | informacion                                                                     | string           | Page View |
            | channel                 | online                                                                          | string           | Page View |
            | page instance ID        | de                                                                              | string           | Page View |
            | version DL              | 20250414_5.0                                                                    | string           | Page View |
            | page info version       | appVersion                                                                      | regexp named     | Page View |
            | page segment            | personas                                                                        | string           | Page View |
            | sysEnv                  | app                                                                             | string           | Page View |
            | business unit           | BBVA Mexico                                                                     | string           | Page View |
            | site app name           | App BBVA Mexico                                                                 | string           | Page View |
            | project name            | Rewards                                                                         | string           | Page View |
            | device mobile           | si                                                                              | string           | Page View |
            | user userState          | logado                                                                          | string           | Page View |
            | user segment global     | 003001                                                                          | string           | Page View |
            | profile ID              | profileID                                                                       | regexp named     | Page View |
            | user gender             | gender                                                                          | regexp named     | Page View |
            | user age                | age                                                                             | regexp named     | Page View |
            | internal campaign       |                                                                                 | empty array      | Page View |
            | optimization attributes |                                                                                 | empty array      | Page View |
            | application             |                                                                                 | empty str object | Page View |
            | products attributes     |                                                                                 | empty array      | Page View |

    @ANA_EVENT_RMOC005
    @analytics
    @android @ios @native @ios-done
    @MX @backend(artichoke) @no-data-manager
    @vbank
    @tmpExclude @JIRA.GLOMOMX-180582
    Scenario: Access to search a commerce
        Given the user "9988770001" and "micd1122"
        And the user accesses to map of commerce from rewards landing
        And the analytics interceptor service is initiated
        When the user accesses to search a commerce
        Then the analytics events contains the following variables
            | item                    | value                                                                          | type             | event     |
            | analytics               | analytics/glomo_base                                                           | json schema      | Page View |
            | page name               | app:privada:personas:puntos:usar mis puntos:pagar en comercios:buscar comercio | string           | Page View |
            | level 1                 | puntos                                                                         | string           | Page View |
            | level 2                 | usar mis puntos                                                                | string           | Page View |
            | level 3                 | pagar en comercios                                                             | string           | Page View |
            | level 4                 | buscar comercio                                                                | string           | Page View |
            | language                | ES                                                                             | string           | Page View |
            | page area               | privada                                                                        | string           | Page View |
            | page intent             | informacion                                                                    | string           | Page View |
            | channel                 | online                                                                         | string           | Page View |
            | page instance ID        | de                                                                             | string           | Page View |
            | version DL              | 20250414_5.0                                                                   | string           | Page View |
            | page info version       | appVersion                                                                     | regexp named     | Page View |
            | page segment            | personas                                                                       | string           | Page View |
            | sysEnv                  | app                                                                            | string           | Page View |
            | business unit           | BBVA Mexico                                                                    | string           | Page View |
            | site app name           | App BBVA Mexico                                                                | string           | Page View |
            | project name            | Rewards                                                                        | string           | Page View |
            | device mobile           | si                                                                             | string           | Page View |
            | user userState          | logado                                                                         | string           | Page View |
            | user segment global     | 003001                                                                         | string           | Page View |
            | profile ID              | profileID                                                                      | regexp named     | Page View |
            | user gender             | gender                                                                         | regexp named     | Page View |
            | user age                | age                                                                            | regexp named     | Page View |
            | internal campaign       |                                                                                | empty array      | Page View |
            | optimization attributes |                                                                                | empty array      | Page View |
            | application             |                                                                                | empty str object | Page View |
            | products attributes     |                                                                                | empty array      | Page View |

    @ANA_EVENT_RMOC006
    @analytics
    @android @ios @native
    @MX @backend(artichoke) @no-data-manager
    @vbank @manual @JIRA.GLOMOGL-29203
    Scenario: Show list mode when there are commerce to display
        Given the user "9988770001" and "micd1122"
        And the user accesses to map of commerce from rewards landing
        And the user accesses to search a commerce
        And the analytics interceptor service is initiated
        When the user searches "CUSPIDE" commerce
        Then the analytics events contains the following variables
            | item                      | value                                                                             | type             | event     |
            | analytics                 | analytics/glomo_base                                                              | json schema      | Page View |
            | page name                 | app:privada:personas:puntos:usar mis puntos:pagar en comercios:resultado busqueda | string           | Page View |
            | level 1                   | puntos                                                                            | string           | Page View |
            | level 2                   | usar mis puntos                                                                   | string           | Page View |
            | level 3                   | pagar en comercios                                                                | string           | Page View |
            | level 4                   | resultado busqueda                                                                | string           | Page View |
            | language                  | ES                                                                                | string           | Page View |
            | page area                 | privada                                                                           | string           | Page View |
            | page intent               | informacion                                                                       | string           | Page View |
            | channel                   | online                                                                            | string           | Page View |
            | page instance ID          | de                                                                                | string           | Page View |
            | version DL                | 20250414_5.0                                                                      | string           | Page View |
            | page info version         | appVersion                                                                        | regexp named     | Page View |
            | page segment              | personas                                                                          | string           | Page View |
            | sysEnv                    | app                                                                               | string           | Page View |
            | business unit             | BBVA Mexico                                                                       | string           | Page View |
            | site app name             | App BBVA Mexico                                                                   | string           | Page View |
            | project name              | Rewards                                                                           | string           | Page View |
            | device mobile             | si                                                                                | string           | Page View |
            | user userState            | logado                                                                            | string           | Page View |
            | user segment global       | 003001                                                                            | string           | Page View |
            | profile ID                | profileID                                                                         | regexp named     | Page View |
            | user gender               | gender                                                                            | regexp named     | Page View |
            | user age                  | age                                                                               | regexp named     | Page View |
            | on site search result     | 54                                                                                | string           | Page View |
            | on site search term       |                                                                                   | string           | Page View |
            | on site search enter term | cuspide                                                                           | string           | Page View |
            | internal campaign         |                                                                                   | empty array      | Page View |
            | optimization attributes   |                                                                                   | empty array      | Page View |
            | application               |                                                                                   | empty str object | Page View |
            | products attributes       |                                                                                   | empty array      | Page View |

    @ANA_EVENT_RMOC007
    @analytics
    @android @ios @native
    @MX @backend(artichoke) @no-data-manager
    @vbank @manual @JIRA.GLOMOGL-29203
    Scenario: Searh commerce - No results - Map of commerce
        Given the user "9988770001" and "micd1122"
        And the user accesses to map of commerce from rewards landing
        And the user accesses to search a commerce
        And the analytics interceptor service is initiated
        When the user searches "MERCADONA" commerce
        Then the analytics events contains the following variables
            | item                    | value                                                                                      | type             | event     |
            | analytics               | analytics/glomo_base                                                                       | json schema      | Page View |
            | page name               | app:privada:personas:puntos:usar mis puntos:pagar en comercios:sin resultado busqueda mapa | string           | Page View |
            | level 1                 | puntos                                                                                     | string           | Page View |
            | level 2                 | usar mis puntos                                                                            | string           | Page View |
            | level 3                 | pagar en comercios                                                                         | string           | Page View |
            | level 4                 | sin resultado busqueda mapa                                                                | string           | Page View |
            | language                | ES                                                                                         | string           | Page View |
            | page area               | privada                                                                                    | string           | Page View |
            | page intent             | informacion                                                                                | string           | Page View |
            | channel                 | online                                                                                     | string           | Page View |
            | page instance ID        | de                                                                                         | string           | Page View |
            | version DL              | 20250414_5.0                                                                               | string           | Page View |
            | page info version       | appVersion                                                                                 | regexp named     | Page View |
            | page segment            | personas                                                                                   | string           | Page View |
            | sysEnv                  | app                                                                                        | string           | Page View |
            | business unit           | BBVA Mexico                                                                                | string           | Page View |
            | site app name           | App BBVA Mexico                                                                            | string           | Page View |
            | project name            | Rewards                                                                                    | string           | Page View |
            | device mobile           | si                                                                                         | string           | Page View |
            | user userState          | logado                                                                                     | string           | Page View |
            | user segment global     | 003001                                                                                     | string           | Page View |
            | profile ID              | profileID                                                                                  | regexp named     | Page View |
            | user gender             | gender                                                                                     | regexp named     | Page View |
            | user age                | age                                                                                        | regexp named     | Page View |
            | internal campaign       |                                                                                            | empty array      | Page View |
            | optimization attributes |                                                                                            | empty array      | Page View |
            | application             |                                                                                            | empty str object | Page View |
            | products attributes     |                                                                                            | empty array      | Page View |

    @ANA_EVENT_RMOC008
    @analytics
    @android @ios @native
    @MX @backend(artichoke) @no-data-manager
    @vbank @manual @JIRA.GLOMOGL-29203
    Scenario: Search commerce - No results - List results
        Given the user "9988770001" and "micd1122"
        And the user accesses to map of commerce from rewards landing
        And the user changes to list mode
        And the user accesses to search a commerce
        And the analytics interceptor service is initiated
        When the user searches "MERCADONA" commerce
        Then the analytics events contains the following variables
            | item                    | value                                                                                       | type             | event     |
            | analytics               | analytics/glomo_base                                                                        | json schema      | Page View |
            | page name               | app:privada:personas:puntos:usar mis puntos:pagar en comercios:sin resultado busqueda lista | string           | Page View |
            | level 1                 | puntos                                                                                      | string           | Page View |
            | level 2                 | usar mis puntos                                                                             | string           | Page View |
            | level 3                 | pagar en comercios                                                                          | string           | Page View |
            | level 4                 | sin resultado busqueda lista                                                                | string           | Page View |
            | language                | ES                                                                                          | string           | Page View |
            | page area               | privada                                                                                     | string           | Page View |
            | page intent             | informacion                                                                                 | string           | Page View |
            | channel                 | online                                                                                      | string           | Page View |
            | page instance ID        | de                                                                                          | string           | Page View |
            | version DL              | 20250414_5.0                                                                                | string           | Page View |
            | page info version       | appVersion                                                                                  | regexp named     | Page View |
            | page segment            | personas                                                                                    | string           | Page View |
            | sysEnv                  | app                                                                                         | string           | Page View |
            | business unit           | BBVA Mexico                                                                                 | string           | Page View |
            | site app name           | App BBVA Mexico                                                                             | string           | Page View |
            | project name            | Rewards                                                                                     | string           | Page View |
            | device mobile           | si                                                                                          | string           | Page View |
            | user userState          | logado                                                                                      | string           | Page View |
            | user segment global     | 003001                                                                                      | string           | Page View |
            | profile ID              | profileID                                                                                   | regexp named     | Page View |
            | user gender             | gender                                                                                      | regexp named     | Page View |
            | user age                | age                                                                                         | regexp named     | Page View |
            | internal campaign       |                                                                                             | empty array      | Page View |
            | optimization attributes |                                                                                             | empty array      | Page View |
            | application             |                                                                                             | empty str object | Page View |
            | products attributes     |                                                                                             | empty array      | Page View |

    @ANA_EVENT_RMOC009
    @analytics
    @android @ios @native
    @MX @backend(artichoke) @no-data-manager
    @vbank @ios-done @android-done
    @tmpExclude @JIRA.GLOMOMX-180582
    Scenario: Error location services
        Given the user "9988770001" and "micd1122"
        And the user accesses to dashboard
        And the analytics interceptor service is initiated
        When the user tries to opens to map of commerce from rewards landing
        And the user "denies" permissions to access
        Then the analytics events contains the following variables
            | item                    | value                                                                                   | type             | event         | event number |
            | analytics               | analytics/glomo_base                                                                    | json schema      | Page View     | 3            |
            | page name               | app:privada:personas:puntos:usar mis puntos:pagar en comercios:error permisos ubicacion | string           | Page View     | 3            |
            | level 1                 | puntos                                                                                  | string           | Page View     | 3            |
            | level 2                 | usar mis puntos                                                                         | string           | Page View     | 3            |
            | level 3                 | pagar en comercios                                                                      | string           | Page View     | 3            |
            | level 4                 | error permisos ubicacion                                                                | string           | Page View     | 3            |
            | error page              | error permisos ubicacion                                                                | string           | Page View     | 3            |
            | language                | ES                                                                                      | string           | Page View     | 3            |
            | page area               | privada                                                                                 | string           | Page View     | 3            |
            | page intent             | informacion                                                                             | string           | Page View     | 3            |
            | channel                 | online                                                                                  | string           | Page View     | 3            |
            | page instance ID        | de                                                                                      | string           | Page View     | 3            |
            | version DL              | 20250414_5.0                                                                            | string           | Page View     | 3            |
            | page info version       | appVersion                                                                              | regexp named     | Page View     | 3            |
            | page segment            | personas                                                                                | string           | Page View     | 3            |
            | sysEnv                  | app                                                                                     | string           | Page View     | 3            |
            | business unit           | BBVA Mexico                                                                             | string           | Page View     | 3            |
            | site app name           | App BBVA Mexico                                                                         | string           | Page View     | 3            |
            | project name            | Rewards                                                                                 | string           | Page View     | 3            |
            | device mobile           | si                                                                                      | string           | Page View     | 3            |
            | user userState          | logado                                                                                  | string           | Page View     | 3            |
            | user segment global     | 003001                                                                                  | string           | Page View     | 3            |
            | profile ID              | profileID                                                                               | regexp named     | Page View     | 3            |
            | user gender             | gender                                                                                  | regexp named     | Page View     | 3            |
            | user age                | age                                                                                     | regexp named     | Page View     | 3            |
            | internal campaign       |                                                                                         | empty array      | Page View     | 3            |
            | optimization attributes |                                                                                         | empty array      | Page View     | 3            |
            | application             |                                                                                         | empty str object | Page View     | 3            |
            | products attributes     |                                                                                         | empty array      | Page View     | 3            |

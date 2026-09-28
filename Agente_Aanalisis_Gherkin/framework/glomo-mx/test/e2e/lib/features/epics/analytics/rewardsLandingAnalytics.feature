@rewardsLandingAnalytics
Feature: Analytics - Rewards Landing

    @ANA_EVENT_RWL001
    @analytics
    @ios @android @web @web-done
    @MX @backend(artichoke) @vbank
    Scenario: Footprint - internal link - dashboard
        Given a user with the following criteria
            | criteria          |
            | card with points  |
        And the user accesses to dashboard
        And the analytics interceptor service is initiated
        When the user accesses to Rewards Landing
        Then the analytics events contains the following variables
            | item                    | value                                            | type             | event         |
            | analytics               | analytics/glomo_base                             | json schema      | Internal Link |
            | page name               | app:privada:personas:posicion global:destacado   | string           | Internal Link |
            | level 1                 | posicion global                                  | string           | Internal Link |
            | level 2                 | destacado                                        | string           | Internal Link |
            | language                | ES                                               | string           | Internal Link |
            | page area               | privada                                          | string           | Internal Link |
            | page intent             | informacion                                      | string           | Internal Link |
            | channel                 | online                                           | string           | Internal Link |
            | page instance ID        | de                                               | string           | Internal Link |
            | version DL              | 20250414_5.0                                     | string           | Internal Link |
            | page info version       | appVersion                                       | regexp named     | Internal Link |
            | page segment            | personas                                         | string           | Internal Link |
            | sysEnv                  | app                                              | string           | Internal Link |
            | business unit           | BBVA Mexico                                      | string           | Internal Link |
            | site app name           | App BBVA Mexico                                  | string           | Internal Link |
            | project name            | Glomo                                            | string           | Internal Link |
            | link name               | colecciona todas la insignias mostrar insignias  | string           | Internal Link |
            | device mobile           | si                                               | string           | Internal Link |
            | user userState          | logado                                           | string           | Internal Link |
            | user segment global     | 003001                                           | string           | Internal Link |
            | profile ID              | profileID                                        | regexp named     | Internal Link |
            | user gender             | gender                                           | regexp named     | Internal Link |
            | user age                | age                                              | regexp named     | Internal Link |
            | internal campaign       |                                                  | empty array      | Internal Link |
            | optimization attributes |                                                  | empty array      | Internal Link |
            | application             |                                                  | empty str object | Internal Link |
            | products attributes     |                                                  | empty array      | Internal Link |

    @ANA_EVENT_RWL002
    @analytics
    @ios @android @web @web-done
    @MX @backend(artichoke) @vbank
    Scenario: Footprint - internal link - card product detail
        Given a user with the following criteria
            | criteria         |
            | card with points |
            | multi product    |
        And the user accesses to the "operative" "credit" card product detail
        And the analytics interceptor service is initiated
        When the user accesses to Landing of Points from one of the cards
        Then the analytics events contains the following variables
            | item                    | value                                         | type             | event         |
            | analytics               | analytics/glomo_base                          | json schema      | Internal Link |
            | page name               | app:privada:personas:tarjetas:credito:detalle | string           | Internal Link |
            | level 1                 | tarjetas                                      | string           | Internal Link |
            | level 2                 | credito                                       | string           | Internal Link |
            | level 3                 | detalle                                       | string           | Internal Link |
            | language                | ES                                            | string           | Internal Link |
            | page area               | privada                                       | string           | Internal Link |
            | page intent             | informacion                                   | string           | Internal Link |
            | channel                 | online                                        | string           | Internal Link |
            | page instance ID        | de                                            | string           | Internal Link |
            | version DL              | 20250414_5.0                                  | string           | Internal Link |
            | page info version       | appVersion                                    | regexp named     | Internal Link |
            | page segment            | personas                                      | string           | Internal Link |
            | sysEnv                  | app                                           | string           | Internal Link |
            | business unit           | BBVA Mexico                                   | string           | Internal Link |
            | site app name           | App BBVA Mexico                               | string           | Internal Link |
            | project name            | Rewards                                       | string           | Internal Link |
            | link name               | usa tus puntos                                | string           | Internal Link |
            | device mobile           | si                                            | string           | Internal Link |
            | user userState          | logado                                        | string           | Internal Link |
            | user segment global     | 003001                                        | string           | Internal Link |
            | profile ID              | profileID                                     | regexp named     | Internal Link |
            | user gender             | gender                                        | regexp named     | Internal Link |
            | user age                | age                                           | regexp named     | Internal Link |
            | internal campaign       |                                               | empty array      | Internal Link |
            | optimization attributes |                                               | empty array      | Internal Link |
            | application             |                                               | empty str object | Internal Link |
            | products attributes     |                                               | empty array      | Internal Link |

    @ANA_EVENT_RWL003
    @analytics
    @ios @android @web @web-done
    @backend(artichoke) @vbank @MX
    Scenario: Footprint - Page View - points
        Given a user with the following criteria
            | criteria          |
            | single product    |
        And the user accesses to dashboard
        And the analytics interceptor service is initiated
        When the user accesses to Rewards Landing
        Then the analytics events contains the following variables
            | item                    | value                             | type             | event     |
            | analytics               | analytics/glomo_base              | json schema      | Page View |
            | page name               | app:privada:personas:puntos       | string           | Page View |
            | level 1                 | puntos                            | string           | Page View |
            | language                | ES                                | string           | Page View |
            | page area               | privada                           | string           | Page View |
            | page intent             | informacion                       | string           | Page View |
            | channel                 | online                            | string           | Page View |
            | page instance ID        | de                                | string           | Page View |
            | version DL              | 20250414_5.0                      | string           | Page View |
            | page info version       | appVersion                        | regexp named     | Page View |
            | page segment            | personas                          | string           | Page View |
            | sysEnv                  | app                               | string           | Page View |
            | business unit           | BBVA Mexico                       | string           | Page View |
            | site app name           | App BBVA Mexico                   | string           | Page View |
            | project name            | Rewards                           | string           | Page View |
            | device mobile           | si                                | string           | Page View |
            | user userState          | logado                            | string           | Page View |
            | user segment global     | 003001                            | string           | Page View |
            | profile ID              | profileID                         | regexp named     | Page View |
            | user gender             | gender                            | regexp named     | Page View |
            | user age                | age                               | regexp named     | Page View |
            | custom fields           | productos con puntos:monoproducto | string           | Page View |
            | internal campaign       |                                   | empty array      | Page View |
            | optimization attributes |                                   | empty array      | Page View |
            | application             |                                   | empty str object | Page View |
            | products attributes     |                                   | empty array      | Page View |

    @ANA_EVENT_RWL004
    @analytics
    @ios @android @web @web-done
    @backend(artichoke) @vbank @MX
    Scenario: Footprint - Page View - points - use my points
        Given a user with the following criteria
            | criteria          |
            | card with points  |
        And the user accesses to Rewards Landing
        And the analytics interceptor service is initiated
        When the user uses use my points
        Then the analytics events contains the following variables
          | item                    | value                                         | type              | event          |
          | analytics               | analytics/glomo_base                          | json schema       | Page View      |
          | page name               | app:privada:personas:puntos:usar mis puntos   | string            | Page View      |
          | level 1                 | puntos                                        | string            | Page View      |
          | level 2                 | usar mis puntos                               | string            | Page View      |
          | language                | ES                                            | string            | Page View      |
          | page area               | privada                                       | string            | Page View      |
          | page intent             | informacion                                   | string            | Page View      |
          | channel                 | online                                        | string            | Page View      |
          | page instance ID        | de                                            | string            | Page View      |
          | version DL              | 20250414_5.0                                  | string            | Page View      |
          | page info version       | appVersion                                    | regexp named      | Page View      |
          | page segment            | personas                                      | string            | Page View      |
          | sysEnv                  | app                                           | string            | Page View      |
          | business unit           | BBVA Mexico                                   | string            | Page View      |
          | site app name           | App BBVA Mexico                               | string            | Page View      |
          | project name            | Rewards                                       | string            | Page View      |
          | device mobile           | si                                            | string            | Page View      |
          | user userState          | logado                                        | string            | Page View      |
          | user segment global     | 003001                                        | string            | Page View      |
          | profile ID              | profileID                                     | regexp named      | Page View      |
          | user gender             | gender                                        | regexp named      | Page View      |
          | user age                | age                                           | regexp named      | Page View      |
          | internal campaign       |                                               | empty array       | Page View      |
          | optimization attributes |                                               | empty array       | Page View      |
          | application             |                                               | empty str object  | Page View      |
          | products attributes     |                                               | empty array       | Page View      |

    @ANA_EVENT_RWL005
    @analytics
    @ios @android @web @web-done
    @backend(artichoke) @vbank @MX
    Scenario: Footprint - Page View - points - how use my points crea
        Given a user with the following criteria
            | criteria          |
            | single product    |
            | Crea card         |
        And the user accesses to Rewards Landing
        And the analytics interceptor service is initiated
        When the user uses use my points
        Then the analytics events contains the following variables
          | item                    | value                                                 | type              | event          |
          | analytics               | analytics/glomo_base                                  | json schema       | Page View      |
          | page name               | app:privada:personas:puntos:como usar mis puntos crea | string            | Page View      |
          | level 1                 | puntos                                                | string            | Page View      |
          | level 2                 | como usar mis puntos crea                             | string            | Page View      |
          | language                | ES                                                    | string            | Page View      |
          | page area               | privada                                               | string            | Page View      |
          | page intent             | informacion                                           | string            | Page View      |
          | channel                 | online                                                | string            | Page View      |
          | page instance ID        | de                                                    | string            | Page View      |
          | version DL              | 20250414_5.0                                          | string            | Page View      |
          | page info version       | appVersion                                            | regexp named      | Page View      |
          | page segment            | personas                                              | string            | Page View      |
          | sysEnv                  | app                                                   | string            | Page View      |
          | business unit           | BBVA Mexico                                           | string            | Page View      |
          | site app name           | App BBVA Mexico                                       | string            | Page View      |
          | project name            | Rewards                                               | string            | Page View      |
          | device mobile           | si                                                    | string            | Page View      |
          | user userState          | logado                                                | string            | Page View      |
          | user segment global     | 003001                                                | string            | Page View      |
          | profile ID              | profileID                                             | regexp named      | Page View      |
          | user gender             | gender                                                | regexp named      | Page View      |
          | user age                | age                                                   | regexp named      | Page View      |
          | internal campaign       |                                                       | empty array       | Page View      |
          | optimization attributes |                                                       | empty array       | Page View      |
          | application             |                                                       | empty str object  | Page View      |
          | products attributes     |                                                       | empty array       | Page View      |

    @ANA_EVENT_RWL006
    @analytics
    @ios @android @web @web-done @tmpExclude @JIRA.GLOMOMX-166513
    @backend(artichoke) @vbank @MX
    Scenario: Footprint - Page View - points - how get my points
        Given a user with the following criteria
            | criteria            |
            | card without points |
            | multi product       |
        And the user accesses to Rewards Landing
        And the analytics interceptor service is initiated
        When the user accesses help on how to collect points
        Then the analytics events contains the following variables
          | item                    | value                                             | type              | event          |
          | analytics               | analytics/glomo_base                              | json schema       | Page View      |
          | page name               | app:privada:personas:puntos:como acumular puntos  | string            | Page View      |
          | level 1                 | puntos                                            | string            | Page View      |
          | level 2                 | como acumular puntos                              | string            | Page View      |
          | language                | ES                                                | string            | Page View      |
          | page area               | privada                                           | string            | Page View      |
          | page intent             | informacion                                       | string            | Page View      |
          | channel                 | online                                            | string            | Page View      |
          | page instance ID        | de                                                | string            | Page View      |
          | version DL              | 20250414_5.0                                      | string            | Page View      |
          | page info version       | appVersion                                        | regexp named      | Page View      |
          | page segment            | personas                                          | string            | Page View      |
          | sysEnv                  | app                                               | string            | Page View      |
          | business unit           | BBVA Mexico                                       | string            | Page View      |
          | site app name           | App BBVA Mexico                                   | string            | Page View      |
          | project name            | Rewards                                           | string            | Page View      |
          | device mobile           | si                                                | string            | Page View      |
          | user userState          | logado                                            | string            | Page View      |
          | user segment global     | 003001                                            | string            | Page View      |
          | profile ID              | profileID                                         | regexp named      | Page View      |
          | user gender             | gender                                            | regexp named      | Page View      |
          | user age                | age                                               | regexp named      | Page View      |
          | internal campaign       |                                                   | empty array       | Page View      |
          | optimization attributes |                                                   | empty array       | Page View      |
          | application             |                                                   | empty str object  | Page View      |
          | products attributes     |                                                   | empty array       | Page View      |

    @ANA_EVENT_RWL007
    @analytics
    @ios @android @web @web-done
    @backend(artichoke) @vbank @MX
    Scenario: Error - Max calls error accessing landing rewards
        Given a user with the following criteria
            | criteria              |
            | error loading points  |
        And the user accesses to dashboard
        And the user accesses to "Rewards Landing" item located in the sidebar
        And the analytics interceptor service is initiated
        When the user retries "3" times
        Then the analytics events contains the following variables
            | item                    | value                                                   | type             | event     |
            | analytics               | analytics/glomo_base                                    | json schema      | Page View |
            | page name               | app:privada:personas:puntos:error informacion de puntos | string           | Page View |
            | level 1                 | puntos                                                  | string           | Page View |
            | level 2                 | error informacion de puntos                             | string           | Page View |
            | error page              | error informacion de puntos                             | string           | Page View |
            | language                | ES                                                      | string           | Page View |
            | page area               | privada                                                 | string           | Page View |
            | page intent             | informacion                                             | string           | Page View |
            | channel                 | online                                                  | string           | Page View |
            | page instance ID        | de                                                      | string           | Page View |
            | version DL              | 20250414_5.0                                            | string           | Page View |
            | page info version       | appVersion                                              | regexp named     | Page View |
            | page segment            | personas                                                | string           | Page View |
            | sysEnv                  | app                                                     | string           | Page View |
            | business unit           | BBVA Mexico                                             | string           | Page View |
            | site app name           | App BBVA Mexico                                         | string           | Page View |
            | project name            | Rewards                                                 | string           | Page View |
            | device mobile           | si                                                      | string           | Page View |
            | user userState          | logado                                                  | string           | Page View |
            | user segment global     | 003001                                                  | string           | Page View |
            | profile ID              | profileID                                               | regexp named     | Page View |
            | user gender             | gender                                                  | regexp named     | Page View |
            | user age                | age                                                     | regexp named     | Page View |
            | internal campaign       |                                                         | empty array      | Page View |
            | optimization attributes |                                                         | empty array      | Page View |
            | application             |                                                         | empty str object | Page View |
            | products attributes     |                                                         | empty array      | Page View |

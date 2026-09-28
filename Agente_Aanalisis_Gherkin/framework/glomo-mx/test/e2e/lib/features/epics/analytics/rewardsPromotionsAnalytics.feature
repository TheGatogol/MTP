@rewardsPromotionsAnalytics
Feature: Analytics - Rewards Promotions

    @ANA_EVENT_RWP001
    @analytics
    @ios @android @web @web-done
    @MX @backend(artichoke) @vbank
    Scenario Outline: Footprint - Page View - promotions
        Given a user with the following criteria
            | criteria                  |
            | all promotions categories |
        And the user accesses to dashboard
        And the analytics interceptor service is initiated
        When the user accesses to Landing Promotions from sidebar
        Then the analytics events contains the following variables
            | item                                           | value                                                                  | type             | event     | event number |
            | analytics                                      | analytics/glomo_base                                                   | json schema      | Page View | 2            |
            | page name                                      | app:privada:personas:promociones                                       | string           | Page View | 2            |
            | level 1                                        | promociones                                                            | string           | Page View | 2            |
            | language                                       | ES                                                                     | string           | Page View | 2            |
            | page area                                      | privada                                                                | string           | Page View | 2            |
            | page intent                                    | informacion                                                            | string           | Page View | 2            |
            | channel                                        | online                                                                 | string           | Page View | 2            |
            | page instance ID                               | de                                                                     | string           | Page View | 2            |
            | version DL                                     | 20250414_5.0                                                           | string           | Page View | 2            |
            | page info version                              | appVersion                                                             | regexp named     | Page View | 2            |
            | page segment                                   | personas                                                               | string           | Page View | 2            |
            | sysEnv                                         | app                                                                    | string           | Page View | 2            |
            | business unit                                  | BBVA Mexico                                                            | string           | Page View | 2            |
            | site app name                                  | App BBVA Mexico                                                        | string           | Page View | 2            |
            | project name                                   | Rewards                                                                | string           | Page View | 2            |
            | device mobile                                  | si                                                                     | string           | Page View | 2            |
            | user userState                                 | logado                                                                 | string           | Page View | 2            |
            | user segment global                            | 003001                                                                 | string           | Page View | 2            |
            | profile ID                                     | profileID                                                              | regexp named     | Page View | 2            |
            | user gender                                    | gender                                                                 | regexp named     | Page View | 2            |
            | user age                                       | age                                                                    | regexp named     | Page View | 2            |
            | custom fields                                  | categoria seleccionadaalimentacionbares y restaurantessupermercados    | string           | Page View | 2            |
            | internal campaign attributes location          | points redeem-promociones especiales-superior-1-5                      | string           | Page View | 2            |
            | internal campaign attributes campaign format   | carrusel                                                               | string           | Page View | 2            |
            | internal campaign attributes collective code   | PY-                                                                    | string           | Page View | 2            |
            | internal campaign attributes campaign name     | -ishop-loyalty_points                                                  | string           | Page View | 2            |
            | internal campaign attributes product           |                                                                        | string           | Page View | 2            |
            | internal campaign attributes product code      |                                                                        | string           | Page View | 2            |
            | internal campaign attributes quantity          | <quantity>                                                             | string           | Page View | 2            |
            | internal campaign attributes location 1        | points redeem-promociones especiales-superior-2-5                      | string           | Page View | 2            |
            | internal campaign attributes campaign format 1 | carrusel                                                               | string           | Page View | 2            |
            | internal campaign attributes collective code 1 | PY-                                                                    | string           | Page View | 2            |
            | internal campaign attributes campaign name 1   | -b the travel brand-post_payment                                       | string           | Page View | 2            |
            | internal campaign attributes product 1         |                                                                        | string           | Page View | 2            |
            | internal campaign attributes product code 1    |                                                                        | string           | Page View | 2            |
            | internal campaign attributes quantity 1        | <quantity 1>                                                           | string           | Page View | 2            |
            | internal campaign attributes location 2        | points redeem-promociones especiales-superior-3-5                      | string           | Page View | 2            |
            | internal campaign attributes campaign format 2 | carrusel                                                               | string           | Page View | 2            |
            | internal campaign attributes collective code 2 | PY-                                                                    | string           | Page View | 2            |
            | internal campaign attributes campaign name 2   | -uvk basadre-loyalty_points                                            | string           | Page View | 2            |
            | internal campaign attributes product 2         |                                                                        | string           | Page View | 2            |
            | internal campaign attributes product code 2    |                                                                        | string           | Page View | 2            |
            | internal campaign attributes quantity 2        | <quantity 2>                                                           | string           | Page View | 2            |
            | internal campaign attributes location 3        | points redeem-promociones especiales-superior-4-5                      | string           | Page View | 2            |
            | internal campaign attributes campaign format 3 | carrusel                                                               | string           | Page View | 2            |
            | internal campaign attributes collective code 3 | PY-                                                                    | string           | Page View | 2            |
            | internal campaign attributes campaign name 3   | -uvk basadre-gift                                                      | string           | Page View | 2            |
            | internal campaign attributes product 3         |                                                                        | string           | Page View | 2            |
            | internal campaign attributes product code 3    |                                                                        | string           | Page View | 2            |
            | internal campaign attributes quantity 3        | <quantity 3>                                                           | string           | Page View | 2            |
            | internal campaign attributes location 4        | points redeem-promociones especiales-superior-5-5                      | string           | Page View | 2            |
            | internal campaign attributes campaign format 4 | carrusel                                                               | string           | Page View | 2            |
            | internal campaign attributes collective code 4 | PY-                                                                    | string           | Page View | 2            |
            | internal campaign attributes campaign name 4   | -kayyak-loyalty_points                                                 | string           | Page View | 2            |
            | internal campaign attributes product 4         |                                                                        | string           | Page View | 2            |
            | internal campaign attributes product code 4    |                                                                        | string           | Page View | 2            |
            | internal campaign attributes quantity 4        | <quantity 4>                                                           | string           | Page View | 2            |
            | optimization attributes                        |                                                                        | empty array      | Page View | 2            |
            | application                                    |                                                                        | empty str object | Page View | 2            |
            | products attributes                            |                                                                        | empty array      | Page View | 2            |
        @spherica
        Examples:
            | quantity | quantity 1 | quantity 2 | quantity 3 | quantity 4 |
            | 0        | 20         |            |            | 70         |

    @ANA_EVENT_RWP002
    @analytics
    @ios @android @web @web-done
    @MX @backend(artichoke) @vbank
    Scenario: Footprint - Page view - Searcher modal
        Given a user with the following criteria
            | criteria                  |
            | all promotions categories |
        And the user accesses to dashboard
        And the analytics interceptor service is initiated
        When the user accesses to promotions searcher from "dashboard sidebar"
        Then the analytics events contains the following variables
            | item                    | value                                     | type             | event     | event number |
            | analytics               | analytics/glomo_base                      | json schema      | Page View | 3            |
            | page name               | app:privada:personas:promociones:buscador | string           | Page View | 3            |
            | level 1                 | promociones                               | string           | Page View | 3            |
            | level 2                 | buscador                                  | string           | Page View | 3            |
            | language                | ES                                        | string           | Page View | 3            |
            | page area               | privada                                   | string           | Page View | 3            |
            | page intent             | informacion                               | string           | Page View | 3            |
            | channel                 | online                                    | string           | Page View | 3            |
            | page instance ID        | de                                        | string           | Page View | 3            |
            | version DL              | 20250414_5.0                              | string           | Page View | 3            |
            | page info version       | appVersion                                | regexp named     | Page View | 3            |
            | page segment            | personas                                  | string           | Page View | 3            |
            | sysEnv                  | app                                       | string           | Page View | 3            |
            | business unit           | BBVA Mexico                               | string           | Page View | 3            |
            | site app name           | App BBVA Mexico                           | string           | Page View | 3            |
            | project name            | Rewards                                   | string           | Page View | 3            |
            | device mobile           | si                                        | string           | Page View | 3            |
            | user userState          | logado                                    | string           | Page View | 3            |
            | user segment global     | 003001                                    | string           | Page View | 3            |
            | profile ID              | profileID                                 | regexp named     | Page View | 3            |
            | user gender             | gender                                    | regexp named     | Page View | 3            |
            | user age                | age                                       | regexp named     | Page View | 3            |
            | internal campaign       |                                           | empty array      | Page View | 3            |
            | optimization attributes |                                           | empty array      | Page View | 3            |
            | application             |                                           | empty str object | Page View | 3            |
            | products attributes     |                                           | empty array      | Page View | 3            |

    @ANA_EVENT_RWP003
    @analytics
    @ios @android @web @web-done
    @MX @backend(artichoke) @vbank
    Scenario: Footprint - Page View - promotion detail
        Given a user with the following criteria
            | criteria                        |
            | all promotions categories       |
            | enrollment promotion invitation |
        And the user accesses to dashboard
        And the user accesses to Landing Promotions from dashboard
        And the analytics interceptor service is initiated
        When the user accesses to "special" promotion detail "online"
        Then the analytics events contains the following variables
            | item                    | value                                                 | type             | event     |
            | analytics               | analytics/glomo_base                                  | json schema      | Page View |
            | page name               | app:privada:personas:promociones:detalle de promocion | string           | Page View |
            | level 1                 | promociones                                           | string           | Page View |
            | level 2                 | detalle de promocion                                  | string           | Page View |
            | language                | ES                                                    | string           | Page View |
            | page area               | privada                                               | string           | Page View |
            | page intent             | informacion                                           | string           | Page View |
            | channel                 | online                                                | string           | Page View |
            | page instance ID        | de                                                    | string           | Page View |
            | version DL              | 20250414_5.0                                          | string           | Page View |
            | page info version       | appVersion                                            | regexp named     | Page View |
            | page segment            | personas                                              | string           | Page View |
            | sysEnv                  | app                                                   | string           | Page View |
            | business unit           | BBVA Mexico                                           | string           | Page View |
            | site app name           | App BBVA Mexico                                       | string           | Page View |
            | project name            | Rewards                                               | string           | Page View |
            | device mobile           | si                                                    | string           | Page View |
            | user userState          | logado                                                | string           | Page View |
            | user segment global     | 003001                                                | string           | Page View |
            | profile ID              | profileID                                             | regexp named     | Page View |
            | user gender             | gender                                                | regexp named     | Page View |
            | user age                | age                                                   | regexp named     | Page View |
            | internal campaign       |                                                       | empty array      | Page View |
            | optimization attributes |                                                       | empty array      | Page View |
            | application             |                                                       | empty str object | Page View |
            | products attributes     |                                                       | empty array      | Page View |

    @ANA_EVENT_RWP004
    @analytics
    @ios @android @web @web-done
    @MX @backend(artichoke) @vbank
    Scenario: Error - promotion detail
        Given a user with the following criteria
            | criteria                  |
            | all promotions categories |
        And the user accesses to Landing Promotions from sidebar
        And the user accesses to "special" promotion detail "online"
        And the analytics interceptor service is initiated
        When the user retries "3" times big modal
        Then the analytics events contains the following variables
            | item                    | value                                                                                       | type              | event          |
            | analytics               | analytics/glomo_base                                                                        | json schema       | Page View      |
            | page name               | app:privada:personas:promociones:detalle de promocion:error no se puede cargar la seccion   | string            | Page View      |
            | level 1                 | promociones                                                                                 | string            | Page View      |
            | level 2                 | detalle de promocion                                                                        | string            | Page View      |
            | level 3                 | error no se puede cargar la seccion                                                         | string            | Page View      |
            | error page              | error no se puede cargar la seccion                                                         | string            | Page View      |
            | language                | ES                                                                                          | string            | Page View      |
            | page area               | privada                                                                                     | string            | Page View      |
            | page intent             | informacion                                                                                 | string            | Page View      |
            | channel                 | online                                                                                      | string            | Page View      |
            | page instance ID        | de                                                                                          | string            | Page View      |
            | version DL              | 20250414_5.0                                                                                | string            | Page View      |
            | page info version       | appVersion                                                                                  | regexp named      | Page View      |
            | page segment            | personas                                                                                    | string            | Page View      |
            | sysEnv                  | app                                                                                         | string            | Page View      |
            | business unit           | BBVA Mexico                                                                                 | string            | Page View      |
            | site app name           | App BBVA Mexico                                                                             | string            | Page View      |
            | project name            | Rewards                                                                                     | string            | Page View      |
            | device mobile           | si                                                                                          | string            | Page View      |
            | user userState          | logado                                                                                      | string            | Page View      |
            | user segment global     | 003001                                                                                      | string            | Page View      |
            | profile ID              | profileID                                                                                   | regexp named      | Page View      |
            | user gender             | gender                                                                                      | regexp named      | Page View      |
            | user age                | age                                                                                         | regexp named      | Page View      |
            | internal campaign       |                                                                                             | empty array       | Page View      |
            | optimization attributes |                                                                                             | empty array       | Page View      |
            | application             |                                                                                             | empty str object  | Page View      |
            | products attributes     |                                                                                             | empty array       | Page View      |

    @ANA_EVENT_RWP005
    @analytics
    @ios @android @web @web-done
    @MX @backend(artichoke) @vbank
    Scenario: Click Through - promotions
        Given a user with the following criteria
            | criteria                  |
            | all promotions categories |
        And the user accesses to Landing Promotions from sidebar
        And the analytics interceptor service is initiated
        When the user accesses to "standard" promotion detail "descuentos" from "carrousel"
        Then the analytics events contains the following variables
            | item                               | value                                                                                                     | type             | event         |
            | analytics                          | analytics/glomo_base                                                                                      | json schema      | Click Through |
            | page name                          | app:privada:personas:promociones                                                                          | string           | Click Through |
            | level 1                            | promociones                                                                                               | string           | Click Through |
            | language                           | ES                                                                                                        | string           | Click Through |
            | page area                          | privada                                                                                                   | string           | Click Through |
            | page intent                        | informacion                                                                                               | string           | Click Through |
            | channel                            | online                                                                                                    | string           | Click Through |
            | page instance ID                   | de                                                                                                        | string           | Click Through |
            | version DL                         | 20241031_4.3                                                                                              | string           | Click Through |
            | page info version                  | appVersion                                                                                                | regexp named     | Click Through |
            | page segment                       | personas                                                                                                  | string           | Click Through |
            | sysEnv                             | app                                                                                                       | string           | Click Through |
            | business unit                      | BBVA Mexico                                                                                               | string           | Click Through |
            | site app name                      | App BBVA Mexico                                                                                           | string           | Click Through |
            | project name                       | Rewards                                                                                                   | string           | Click Through |
            | device mobile                      | si                                                                                                        | string           | Click Through |
            | user userState                     | logado                                                                                                    | string           | Click Through |
            | user segment global                | 003001                                                                                                    | string           | Click Through |
            | profile ID                         | profileID                                                                                                 | regexp named     | Click Through |
            | user gender                        | gender                                                                                                    | regexp named     | Click Through |
            | user age                           | age                                                                                                       | regexp named     | Click Through |
            | internal campaign event name       | IntCmpClick                                                                                               | string           | Click Through |
            | internal campaign site action name | points redeem-promociones especiales-superior-1-5:carrusel:PY-:-ishop-loyalty_points::financiacion al 0%: | String           | Click Through |
            | optimization attributes            |                                                                                                           | empty array      | Click Through |
            | application                        |                                                                                                           | empty str object | Click Through |
            | products attributes                |                                                                                                           | empty array      | Click Through |

    @ANA_EVENT_RWP006
    @analytics
    @ios @android @web @web-done
    @MX @backend(artichoke) @vbank
    Scenario: Footprint - internal link - promotions
        Given a user with the following criteria
            | criteria                  |
            | all promotions categories |
        And the user accesses to Landing Promotions from sidebar
        And the analytics interceptor service is initiated
        When the user accesses to "favourite" carousel list promotions
        Then the analytics events contains the following variables
            | item                    | value                            | type             | event         |
            | analytics               | analytics/glomo_base             | json schema      | Internal Link |
            | page name               | app:privada:personas:promociones | string           | Internal Link |
            | level 1                 | promociones                      | string           | Internal Link |
            | language                | ES                               | string           | Internal Link |
            | page area               | privada                          | string           | Internal Link |
            | page intent             | informacion                      | string           | Internal Link |
            | channel                 | online                           | string           | Internal Link |
            | page instance ID        | de                               | string           | Internal Link |
            | version DL              | 20250414_5.0                     | string           | Internal Link |
            | page info version       | appVersion                       | regexp named     | Internal Link |
            | page segment            | personas                         | string           | Internal Link |
            | sysEnv                  | app                              | string           | Internal Link |
            | business unit           | BBVA Mexico                      | string           | Internal Link |
            | site app name           | App BBVA Mexico                  | string           | Internal Link |
            | project name            | Rewards                          | string           | Internal Link |
            | link name               | ver todas favoritas              | string           | Internal Link |
            | device mobile           | si                               | string           | Internal Link |
            | user userState          | logado                           | string           | Internal Link |
            | user segment global     | 003001                           | string           | Internal Link |
            | profile ID              | profileID                        | regexp named     | Internal Link |
            | user gender             | gender                           | regexp named     | Internal Link |
            | user age                | age                              | regexp named     | Internal Link |
            | internal campaign       |                                  | empty array      | Internal Link |
            | optimization attributes |                                  | empty array      | Internal Link |
            | application             |                                  | empty str object | Internal Link |
            | products attributes     |                                  | empty array      | Internal Link |

    @ANA_EVENT_RWP007
    @analytics @spherica
    @ios @android @web @web-done
    @MX @backend(artichoke) @vbank
    Scenario: Footprint - Page View - favorite categories results
        Given a user with the following criteria
            | criteria                  |
            | all promotions categories |
        And the user accesses to Landing Promotions from dashboard
        And the user accesses spherica favorite categories selection screen
        And the analytics interceptor service is initiated
        When the user selects "1" favorite categories and accepts
        Then the analytics events contains the following variables
            | item                    | value                                                        | type             | event     |
            | analytics               | analytics/glomo_base                                         | json schema      | Page View |
            | page name               | app:privada:personas:promociones:elegir favoritas:resultados | string           | Page View |
            | level 1                 | promociones                                                  | string           | Page View |
            | level 2                 | elegir favoritas                                             | string           | Page View |
            | level 3                 | resultados                                                   | string           | Page View |
            | language                | ES                                                           | string           | Page View |
            | page area               | privada                                                      | string           | Page View |
            | page intent             | informacion                                                  | string           | Page View |
            | channel                 | online                                                       | string           | Page View |
            | page instance ID        | de                                                           | string           | Page View |
            | version DL              | 20250414_5.0                                                 | string           | Page View |
            | page info version       | appVersion                                                   | regexp named     | Page View |
            | page segment            | personas                                                     | string           | Page View |
            | sysEnv                  | app                                                          | string           | Page View |
            | business unit           | BBVA Mexico                                                  | string           | Page View |
            | site app name           | App BBVA Mexico                                              | string           | Page View |
            | project name            | Rewards                                                      | string           | Page View |
            | device mobile           | si                                                           | string           | Page View |
            | user userState          | logado                                                       | string           | Page View |
            | user segment global     | 003001                                                       | string           | Page View |
            | profile ID              | profileID                                                    | regexp named     | Page View |
            | user gender             | gender                                                       | regexp named     | Page View |
            | user age                | age                                                          | regexp named     | Page View |
            | on site search term     | restaurants,supermarket,food_and_gourmet                     | string           | Page View |
            | internal campaign       |                                                              | empty array      | Page View |
            | optimization attributes |                                                              | empty array      | Page View |
            | application             |                                                              | empty str object | Page View |
            | products attributes     |                                                              | empty array      | Page View |

    @ANA_EVENT_RWP008
    @analytics
    @ios @android @web @web-done
    @MX @backend(artichoke) @vbank
    Scenario Outline: Footprint - internal link - favorite categories
        Given a user with the following criteria
            | criteria                      |
            | without categories favourites |
        And the user accesses to Landing Promotions from sidebar
        And the analytics interceptor service is initiated
        When the user accesses <access> favorite categories selection screen
        Then the analytics events contains the following variables
            | item                    | value                            | type             | event         |
            | analytics               | analytics/glomo_base             | json schema      | Internal Link |
            | page name               | app:privada:personas:promociones | string           | Internal Link |
            | level 1                 | promociones                      | string           | Internal Link |
            | language                | ES                               | string           | Internal Link |
            | page area               | privada                          | string           | Internal Link |
            | page intent             | informacion                      | string           | Internal Link |
            | channel                 | online                           | string           | Internal Link |
            | page instance ID        | de                               | string           | Internal Link |
            | version DL		      | 20250414_5.0	                 | string           | Internal Link |
            | page info version       | appVersion                       | regexp named     | Internal Link |
            | page segment            | personas                         | string           | Internal Link |
            | sysEnv                  | app                              | string           | Internal Link |
            | business unit           | BBVA Mexico                      | string           | Internal Link |
            | site app name           | App BBVA Mexico                  | string           | Internal Link |
            | project name            | Rewards                          | string           | Internal Link |
            | link name               | <link name>                      | string           | Internal Link |
            | device mobile           | si                               | string           | Internal Link |
            | user userState          | logado                           | string           | Internal Link |
            | user segment global     | 003001                           | string           | Internal Link |
            | profile ID              | profileID                        | regexp named     | Internal Link |
            | user gender             | gender                           | regexp named     | Internal Link |
            | user age                | age                              | regexp named     | Internal Link |
            | internal campaign       |                                  | empty array      | Internal Link |
            | optimization attributes |                                  | empty array      | Internal Link |
            | application             |                                  | empty str object | Internal Link |
            | products attributes     |                                  | empty array      | Internal Link |

        @spherica
        Examples:
            | access   | link name        |
            | spherica | elegir favoritas |

    @ANA_EVENT_RWP009
    @analytics
    @ios @android @web @web-done
    @MX @backend(artichoke) @vbank
    Scenario Outline: Footprint - Page View - favorite categories
        Given a user with the following criteria
            | criteria                      |
            | without categories favourites |
        And the user accesses to Landing Promotions from sidebar
        And the analytics interceptor service is initiated
        When the user accesses <access> favorite categories selection screen
        Then the analytics events contains the following variables
            | item                    | value                                             | type             | event     |
            | analytics	              | analytics/glomo_base	                          | json schema	     | Page View |
            | page name	              | app:privada:personas:promociones:elegir favoritas | string           | Page View |
            | level 1		          | promociones                                       | string           | Page View |
            | level 2		          | elegir favoritas                                  | string           | Page View |
            | language		          | ES	                                              | string           | Page View |
            | page area		          | privada	                                          | string           | Page View |
            | page intent		      | informacion	                                      | string           | Page View |
            | channel		          | online	                                          | string           | Page View |
            | page instance ID        | de	                                              | string           | Page View |
            | version DL		      | 20250414_5.0	                                  | string           | Page View |
            | page info version	      | appVersion	                                      | regexp named     | Page View |
            | page segment		      | personas	                                      | string           | Page View |
            | sysEnv		          | app	                                              | string           | Page View |
            | business unit	          | BBVA Mexico	                                      | string           | Page View |
            | site app name	          | App BBVA Mexico	                                  | string           | Page View |
            | project name		      | Rewards	                                          | string           | Page View |
            | device mobile	          | si	                                              | string           | Page View |
            | user userState	      | logado	                                          | string           | Page View |
            | user segment global     | 003001	                                          | string           | Page View |
            | profile ID		      | profileID	                                      | regexp named     | Page View |
            | user gender	          | gender	                                          | regexp named     | Page View |
            | user age		          | age	                                              | regexp named     | Page View |
            | internal campaign		  |                                                   | empty array	     | Page View |
            | optimization attributes |	                                                  | empty array	     | Page View |
            | application		      |                                                   | empty str object | Page View |
            | products attributes	  |	                                                  | empty array	     | Page View |

        @spherica
        Examples:
            | access   |
            | spherica |

    @ANA_RWP010
    @analytics
    @ios @android @web @web-done
    @MX @backend(artichoke) @vbank
    Scenario: Error - load promotions
        Given a user with the following criteria
            | criteria                 |
            | fail promotions carousel |
        And the user accesses to Landing Promotions from dashboard
        When the user retries "3" more times in "carousel list" error message
        Then the device contains the following variables
            | item                    | value                                                    | type             |
            | analytics               | analytics/glomo_base                                     | json schema      |
            | page name               | app:privada:personas:promociones:error carga promociones | string           |
            | level 1                 | promociones                                              | string           |
            | level 2                 | error carga promociones                                  | string           |
            | error page              | error carga promociones                                  | string           |
            | language                | ES                                                       | string           |
            | page area               | privada                                                  | string           |
            | page intent             | informacion                                              | string           |
            | channel                 | online                                                   | string           |
            | page instance ID        | de                                                       | string           |
            | version DL              | 20250414_5.0                                             | string           |
            | page info version       | appVersion                                               | regexp named     |
            | page segment            | personas                                                 | string           |
            | sysEnv                  | app                                                      | string           |
            | business unit           | BBVA Mexico                                              | string           |
            | site app name           | App BBVA Mexico                                          | string           |
            | project name            | Rewards                                                  | string           |
            | device mobile           | si                                                       | string           |
            | user userState          | logado                                                   | string           |
            | user segment global     | 003001                                                   | string           |
            | profile ID              | profileID                                                | regexp named     |
            | user gender             | gender                                                   | regexp named     |
            | user age                | age                                                      | regexp named     |
            | internal campaign       |                                                          | empty array      |
            | optimization attributes |                                                          | empty array      |
            | application             |                                                          | empty str object |
            | products attributes     |                                                          | empty array      |

    @ANA_EVENT_RWP011
    @analytics
    @ios @android @web @web-done
    @MX @backend(artichoke) @vbank
    Scenario: Footprint - Page View - Searcher Results
        Given a user with the following criteria
            | criteria          |
            | active promotions |
        And the user accesses to promotions searcher from "dashboard sidebar"
        And the analytics interceptor service is initiated
        When the user searches promotions by "starbucks"
        Then the analytics events contains the following variables
            | item                      | value                                                | type             | event     |
            | analytics	                | analytics/glomo_base                                 | json schema      | Page View |
            | page name	                | app:privada:personas:promociones:buscador:resultados | string           | Page View |
            | level 1		            | promociones                                          | string           | Page View |
            | level 2		            | buscador                                             | string           | Page View |
            | level 3		            | resultados                                           | string           | Page View |
            | language		            | ES	                                               | string           | Page View |
            | page area		            | privada                                              | string           | Page View |
            | page intent		        | informacion	                                       | string           | Page View |
            | channel		            | online	                                           | string           | Page View |
            | page instance ID          | de	                                               | string           | Page View |
            | version DL		        | 20250414_5.0	                                       | string           | Page View |
            | page info version	        | appVersion	                                       | regexp named     | Page View |
            | page segment		        | personas	                                           | string           | Page View |
            | sysEnv		            | app	                                               | string           | Page View |
            | business unit	            | BBVA Mexico	                                       | string           | Page View |
            | site app name	            | App BBVA Mexico	                                   | string           | Page View |
            | project name		        | Rewards	                                           | string           | Page View |
            | device mobile	            | si	                                               | string           | Page View |
            | user userState	        | logado	                                           | string           | Page View |
            | user segment global       | 003001	                                           | string           | Page View |
            | profile ID		        | profileID	                                           | regexp named     | Page View |
            | user gender	            | gender	                                           | regexp named     | Page View |
            | user age		            | age	                                               | regexp named     | Page View |
            | internal campaign		    |                                                      | empty array      | Page View |
            | optimization attributes   |	                                                   | empty array      | Page View |
            | application		        |                                                      | empty str object | Page View |
            | products attributes	    |	                                                   | empty array      | Page View |
            | on site search result     | 0                                                    | string           | Page View |
            | on site search term       |        	                                           | string           | Page View |
            | on site search enter term | starbucks                                            | string           | Page View |

    @ANA_EVENT_RWP012
    @analytics
    @ios @android @web @web-done
    @MX @backend(artichoke) @vbank
    Scenario: Error - Searcher Results
        Given a user with the following criteria
            | criteria                  |
            | active promotions         |
            | error promotions searcher |
        And the user accesses to promotions searcher from "dashboard sidebar"
        And the user filters promotions by "mixed filters"
        And the analytics interceptor service is initiated
        When the user retries promotions modal error "3" more times
        Then the analytics events contains the following variables
            | item                    | value                                                                             | type             | event     |
            | analytics               | analytics/glomo_base                                                              | json schema      | Page View |
            | page name               | app:privada:personas:promociones:buscador:error no podemos cargar las promociones | string           | Page View |
            | level 1                 | promociones                                                                       | string           | Page View |
            | level 2                 | buscador                                                                          | string           | Page View |
            | level 3                 | error no podemos cargar las promociones                                           | string           | Page View |
            | error page              | error no podemos cargar las promociones                                           | string           | Page View |
            | language                | ES                                                                                | string           | Page View |
            | page area               | privada                                                                           | string           | Page View |
            | page intent             | informacion                                                                       | string           | Page View |
            | channel                 | online                                                                            | string           | Page View |
            | page instance ID        | de                                                                                | string           | Page View |
            | version DL              | 20250414_5.0                                                                      | string           | Page View |
            | page info version       | appVersion                                                                        | regexp named     | Page View |
            | page segment            | personas                                                                          | string           | Page View |
            | sysEnv                  | app                                                                               | string           | Page View |
            | business unit           | BBVA Mexico                                                                       | string           | Page View |
            | site app name           | App BBVA Mexico                                                                   | string           | Page View |
            | project name            | Rewards                                                                           | string           | Page View |
            | device mobile           | si                                                                                | string           | Page View |
            | user userState          | logado                                                                            | string           | Page View |
            | user segment global     | 003001                                                                            | string           | Page View |
            | profile ID              | profileID                                                                         | regexp named     | Page View |
            | user gender             | gender                                                                            | regexp named     | Page View |
            | user age                | age                                                                               | regexp named     | Page View |
            | internal campaign       |                                                                                   | empty array      | Page View |
            | optimization attributes |                                                                                   | empty array      | Page View |
            | application             |                                                                                   | empty str object | Page View |
            | products attributes     |                                                                                   | empty array      | Page View |

    @ANA_EVENT_RWP013
    @analytics
    @ios @android @web @web-done
    @MX @backend(artichoke) @vbank @spherica
    Scenario: Error - favorite categories
        Given a user with the following criteria
            | criteria                   |
            | n errors modify categories |
        And the user accesses to Landing Promotions from sidebar
        And the user accesses spherica favorite categories selection screen
        And the user selects "3" favorite categories and accepts
        And the analytics interceptor service is initiated
        When the user retries "3" times error modal
        Then the analytics events contains the following variables
            | item                    | value                                                                           | type             | event     |
            | analytics	              | analytics/glomo_base	                                                        | json schema      | Page View |
            | page name	              | app:privada:personas:promociones:elegir favoritas:error operacion no disponible | string           | Page View |
            | level 1		          | promociones                                                                     | string           | Page View |
            | level 2		          | elegir favoritas                                                                | string           | Page View |
            | level 3		          | error operacion no disponible                                                   | string           | Page View |
            | error page	          | error operacion no disponible                                                   | string           | Page View |
            | language		          | ES	                                                                            | string           | Page View |
            | page area		          | privada	                                                                        | string           | Page View |
            | page intent		      | informacion	                                                                    | string           | Page View |
            | channel		          | online	                                                                        | string           | Page View |
            | page instance ID        | de	                                                                            | string           | Page View |
            | version DL		      | 20250414_5.0	                                                                | string           | Page View |
            | page info version	      | appVersion	                                                                    | regexp named     | Page View |
            | page segment		      | personas	                                                                    | string           | Page View |
            | sysEnv		          | app	                                                                            | string           | Page View |
            | business unit	          | BBVA Mexico	                                                                    | string           | Page View |
            | site app name	          | App BBVA Mexico	                                                                | string           | Page View |
            | project name		      | Rewards	                                                                        | string           | Page View |
            | device mobile	          | si	                                                                            | string           | Page View |
            | user userState	      | logado	                                                                        | string           | Page View |
            | user segment global     | 003001	                                                                        | string           | Page View |
            | profile ID		      | profileID	                                                                    | regexp named     | Page View |
            | user gender	          | gender	                                                                        | regexp named     | Page View |
            | user age		          | age	                                                                            | regexp named     | Page View |
            | internal campaign		  |                                                                                 | empty array      | Page View |
            | optimization attributes |	                                                                                | empty array      | Page View |
            | application		      |                                                                                 | empty str object | Page View |
            | products attributes	  |	                                                                                | empty array      | Page View |

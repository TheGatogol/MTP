@loyaltyPointsTransactionsAnalytics
Feature: Rewards - Loyalty Points Transactions Analytics

    @ANA_EVENT_LPT001
    @analytics
    @ios @android @web @web-done
    @MX @backend(artichoke) @vbank
    Scenario: Footprint - interaction link - tab loyalty points from detail
        Given a user with the following criteria
            | criteria         |
            | loyalty points   |
            | card with points |
            | multi product    |
        And the user accesses to dashboard
        And the user accesses to "Rewards Landing" item located in the sidebar
        And the user accesses to Landing of Points from one of the cards
        And the analytics interceptor service is initiated
        When the user displays "period" transaction tab
        Then the analytics events contains the following variables
            | item                    | value                                         | type             | event            |
            | analytics               | analytics/glomo_base                          | json schema      | Interaction Link |
            | page name               | app:privada:personas:puntos:detalle de puntos | string           | Interaction Link |
            | level 1                 | puntos                                        | string           | Interaction Link |
            | level 2                 | detalle de puntos                             | string           | Interaction Link |
            | language                | ES                                            | string           | Interaction Link |
            | page area               | privada                                       | string           | Interaction Link |
            | page intent             | informacion                                   | string           | Interaction Link |
            | channel                 | online                                        | string           | Interaction Link |
            | page instance ID        | de                                            | string           | Interaction Link |
            | page info version       | appVersion                                    | regexp named     | Interaction Link |
            | page segment            | personas                                      | string           | Interaction Link |
            | sysEnv                  | app                                           | string           | Interaction Link |
            | business unit           | BBVA Mexico                                   | string           | Interaction Link |
            | site app name           | App BBVA Mexico                               | string           | Interaction Link |
            | project name            | Rewards                                       | string           | Interaction Link |
            | interaction level       | movimientos por periodo                       | string           | Interaction Link |
            | device mobile           | si                                            | string           | Interaction Link |
            | user userState          | logado                                        | string           | Interaction Link |
            | user segment global     | 003001                                        | string           | Interaction Link |
            | profile ID              | profileID                                     | regexp named     | Interaction Link |
            | user gender             | gender                                        | regexp named     | Interaction Link |
            | user age                | age                                           | regexp named     | Interaction Link |
            | internal campaign       |                                               | empty array      | Interaction Link |
            | optimization attributes |                                               | empty array      | Interaction Link |
            | application             |                                               | empty str object | Interaction Link |
            | products attributes     |                                               | empty array      | Interaction Link |

    @ANA_EVENT_LPT002
    @analytics
    @ios @android @web @web-done
    @MX @backend(artichoke) @vbank
    Scenario: Footprint - interaction link - tab loyalty points
        Given a user with the following criteria
            | criteria          |
            | loyalty points    |
            | single product    |
            | card with points  |
        And the user accesses to dashboard
        And the user accesses to "Rewards Landing" item located in the sidebar
        And the analytics interceptor service is initiated
        When the user displays "period" transaction tab
        Then the analytics events contains the following variables
            | item                    | value                       | type             | event            |
            | analytics               | analytics/glomo_base        | json schema      | Interaction Link |
            | page name               | app:privada:personas:puntos | string           | Interaction Link |
            | level 1                 | puntos                      | string           | Interaction Link |
            | language                | ES                          | string           | Interaction Link |
            | page area               | privada                     | string           | Interaction Link |
            | page intent             | informacion                 | string           | Interaction Link |
            | channel                 | online                      | string           | Interaction Link |
            | page instance ID        | de                          | string           | Interaction Link |
            | page info version       | appVersion                  | regexp named     | Interaction Link |
            | page segment            | personas                    | string           | Interaction Link |
            | sysEnv                  | app                         | string           | Interaction Link |
            | business unit           | BBVA Mexico                 | string           | Interaction Link |
            | site app name           | App BBVA Mexico             | string           | Interaction Link |
            | project name            | Rewards                     | string           | Interaction Link |
            | interaction level       | movimientos por periodo     | string           | Interaction Link |
            | device mobile           | si                          | string           | Interaction Link |
            | user userState          | logado                      | string           | Interaction Link |
            | user segment global     | 003001                      | string           | Interaction Link |
            | profile ID              | profileID                   | regexp named     | Interaction Link |
            | user gender             | gender                      | regexp named     | Interaction Link |
            | user age                | age                         | regexp named     | Interaction Link |
            | internal campaign       |                             | empty array      | Interaction Link |
            | optimization attributes |                             | empty array      | Interaction Link |
            | application             |                             | empty str object | Interaction Link |
            | products attributes     |                             | empty array      | Interaction Link |

    @ANA_EVENT_LPT003
    @analytics
    @ios @android @web @web-done
    @backend(artichoke) @vbank @MX
    Scenario: Error - Max calls error accessing tab loyalty points
        Given a user with the following criteria
            | criteria                |
            | loyalty points          |
            | error transactions list |
        And the user accesses to dashboard
        And the user accesses to "Rewards Landing" item located in the sidebar
        And the user displays "period" transaction tab
        And the analytics interceptor service is initiated
        When the user retries "3" times
        Then the analytics events contains the following variables
            | item                    | value                                            | type             | event      |
            | analytics	              | analytics/glomo_base	                         | json schema	    | Site Error |
            | page name	              | app:privada:personas:puntos      	             | string	        | Site Error |
            | level 1	              | puntos	                                         | string	        | Site Error |
            | language	              | ES	                                             | string	        | Site Error |
            | page area	              | privada	                                         | string	        | Site Error |
            | page intent	          | informacion	                                     | string	        | Site Error |
            | channel	              | online	                                         | string	        | Site Error |
            | page instance ID	      | de	                                             | string	        | Site Error |
            | page info version	      | appVersion	                                     | regexp named	    | Site Error |
            | page segment	          | personas	                                     | string	        | Site Error |
            | sysEnv	              | app	                                             | string	        | Site Error |
            | business unit	          | BBVA Mexico	                                     | string	        | Site Error |
            | site app name	          | App BBVA Mexico	                                 | string	        | Site Error |
            | project name	          | Rewards	                                         | string	        | Site Error |
            | device mobile	          | si	                                             | string	        | Site Error |
            | user userState	      | logado	                                         | string	        | Site Error |
            | user segment global	  | 003001	                                         | string	        | Site Error |
            | profile ID	          | profileID	                                     | regexp named	    | Site Error |
            | user gender	          | gender	                                         | regexp named	    | Site Error |
            | user age	              | age	                                             | regexp named	    | Site Error |
            | site error	          | error carga de movimientos	                     | string	        | Site Error |
            | internal campaign		  |                                                  | empty array	    | Site Error |
            | optimization attributes |		                                             | empty array	    | Site Error |
            | application		      |                                                  | empty str object	| Site Error |
            | products attributes	  |                                                  | empty array	    | Site Error |

    @ANA_EVENT_LPT004
    @analytics
    @ios @android @web @web-done
    @backend(artichoke) @vbank @MX
    Scenario: Error - Max calls error accessing tab loyalty points from detail
        Given a user with the following criteria
            | criteria                |
            | loyalty points          |
            | card with points        |
            | multi product           |
            | error transactions list |
        And the user accesses to dashboard
        And the user accesses to "Rewards Landing" item located in the sidebar
        And the user accesses to Landing of Points from one of the cards
        And the user displays "period" transaction tab
        And the analytics interceptor service is initiated
        When the user retries "3" times
        Then the analytics events contains the following variables
            | item                    | value                                            | type             | event            |
            | analytics	              | analytics/glomo_base	                         | json schema	    | Site Error       |
            | page name	              | app:privada:personas:puntos:detalle de puntos	 | string	        | Site Error       |
            | level 1	              | puntos	                                         | string	        | Site Error       |
            | level 2	              | detalle de puntos	                             | string	        | Site Error       |
            | language	              | ES	                                             | string	        | Site Error       |
            | page area	              | privada	                                         | string	        | Site Error       |
            | page intent	          | informacion	                                     | string	        | Site Error       |
            | channel	              | online	                                         | string	        | Site Error       |
            | page instance ID	      | de	                                             | string	        | Site Error       |
            | page info version	      | appVersion	                                     | regexp named	    | Site Error       |
            | page segment	          | personas	                                     | string	        | Site Error       |
            | sysEnv	              | app	                                             | string	        | Site Error       |
            | business unit	          | BBVA Mexico	                                     | string	        | Site Error       |
            | site app name	          | App BBVA Mexico	                                 | string	        | Site Error       |
            | project name	          | Rewards	                                         | string	        | Site Error       |
            | device mobile	          | si	                                             | string	        | Site Error       |
            | user userState	      | logado	                                         | string	        | Site Error       |
            | user segment global	  | 003001	                                         | string	        | Site Error       |
            | profile ID	          | profileID	                                     | regexp named	    | Site Error       |
            | user gender	          | gender	                                         | regexp named	    | Site Error       |
            | user age	              | age	                                             | regexp named	    | Site Error       |
            | internal campaign		  |                                                  | empty array	    | Site Error       |
            | site error	          | error carga de movimientos	                     | string	        | Site Error       |
            | optimization attributes |		                                             | empty array	    | Site Error       |
            | application		      |                                                  | empty str object	| Site Error       |
            | products attributes	  |                                                  | empty array	    | Site Error       |

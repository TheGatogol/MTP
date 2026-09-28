@cardlessWithdrawalHistoricAnalytics
Feature: Analytics Cardless Withdrawal Historic

    @ANA_CWH001
    @analytics
    @web @ios @android
    @vbank @backend(test)
    @MX @web-done
    @no-data-manager
    Scenario: advanced foot print - page view - accesses cardllesWithdrawal Historic
        Given the user "5569631477" and "glomo2021"
        When the user accesses to "cardless withdrawal historic" item located in the sidebar
        Then the device contains the following variables
            | item                    | value                                             | type             |
            | page name               | app:privada:personas:historial:retiro sin tarjeta | string           |
            | level 1                 | historial                                         | string           |
            | level 2                 | retiro sin tarjeta                                | string           |
            | language                | ES                                                | string           |
            | page area               | privada                                           | string           |
            | page intent             | informacion                                       | string           |
            | channel                 | online                                            | string           |
            | page instance ID        | de                                                | string           |
            | version DL              | 20250414_5.0                                      | string           |
            | page info version       | appVersion                                        | regexp named     |
            | page segment            | personas                                          | string           |
            | sysEnv                  | app                                               | string           |
            | business unit           | BBVA Mexico                                       | string           |
            | site app name           | App BBVA Mexico                                   | string           |
            | project name            | Glomo                                             | string           |
            | device mobile           | si                                                | string           |
            | user userState          | logado                                            | string           |
            | user segment global     | 003001                                            | string           |
            | profile ID              | profileID                                         | regexp named     |
            | user gender             | gender                                            | regexp named     |
            | user age                | age                                               | regexp named     |
            | user state              | lettersAndSpaceOrEmpty                            | regexp named     |
            | internal campaign       |                                                   | empty array      |
            | optimization attributes |                                                   | empty array      |
            | application             |                                                   | empty str object |
            | products attributes     |                                                   | empty array      |

    @ANA_CWH0002
    @analytics
    @vbank
    @MX @android @ios
    @web
    @backend(test)
    @web-done
    @spherica
    Scenario: CardlessWithdrawal - go info modal when flow is spherica
        Given a user with the following criteria
            | criteria                     |
            | cardless withdrawal historic |
            | cardless withdrawal pending  |
            | multiple accounts            |
        And the user accesses to "cardless withdrawal historic" item located in the sidebar
        And the user accesses to cardless withdrawal with "pending payment" status
        When the user accesses info modal cardlessWithdrawal
        Then the device contains the following variables
            |item	                  | value	                                                                | type             |
            | page name	              | app:privada:personas:cuentas:retiro sin tarjeta:opciones de retiro	    | string           |
            | level 1	              | cuentas	                                                                | string           |
            | level 2	              | retiro sin tarjeta	                                                    | string           |
            | level 3	              | opciones de retiro	                                                    | string           |
            | language	              | ES	                                                                    | string           |
            | page area               | privada	                                                                | string           |
            | page intent	          | informacion	                                                            | string           |
            | channel	              | online	                                                                | string           |
            | page instance ID	      | de	                                                                    | string           |
            | page info version	      | appVersion	                                                            | regexp named     |
            | page segment	          | personas	                                                            | string           |
            | sysEnv	              | app	                                                                    | string           |
            | business unit	          | BBVA Mexico	                                                            | string           |
            | site app name	          | App BBVA Mexico	                                                        | string           |
            | project name      	  | Glomo	                                                                | string           |
            | device mobile     	  | si	                                                                    | string           |
            | user userState          | logado	                                                                | string           |
            | user segment global	  | 003001	                                                                | string           |
            | profile ID	          | profileID	                                                            | regexp named     |
            | user gender	          | gender	                                                                | regexp named     |
            | user age   	          | age                                                                     | regexp named     |
            | internal campaign		  |                                                                         | empty array      |
            | optimization attributes |                                                                         | empty array      |
            | application		      |                                                                         | empty str object |
            | products attributes	  |                                                                         | empty array      |

    @ANA_CWH003
    @MX @backend(test)
    @web @ios @android @web-done
    @manual @JIRA.GLOMOGL-31703
    Scenario: The user verifies the stores to cardless withdrawal historic commerce
        Given a user with the following criteria
            | criteria                     |
            | cardless withdrawal historic |
            | cardless withdrawal expired  |
            | multiple accounts            |
        And the user accesses to "cardless withdrawal historic" item located in the sidebar
        And the user accesses to cardless withdrawal with "pending payment" status
        And the user access to cardless withdrawal commerce
        When the user access to the available shops
        Then the device contains the following variables
            |item	                  | value	                                                                | type             |
            | page name	              | app:privada:personas:cuentas:retiro sin tarjeta:comercios	            | string           |
            | level 1	              | cuentas	                                                                | string           |
            | level 2	              | retiro sin tarjeta                                                      | string           |
            | level 3	              | comercios                                                               | string           |
            | language	              | ES	                                                                    | string           |
            | page area               | privada	                                                                | string           |
            | page intent	          | informacion	                                                            | string           |
            | channel	              | online	                                                                | string           |
            | page instance ID	      | de	                                                                    | string           |
            | page info version	      | appVersion	                                                            | regexp named     |
            | page segment	          | personas	                                                            | string           |
            | sysEnv	              | app	                                                                    | string           |
            | business unit	          | BBVA Mexico	                                                            | string           |
            | site app name	          | App BBVA Mexico	                                                        | string           |
            | project name      	  | Glomo	                                                                | string           |
            | device mobile     	  | si	                                                                    | string           |
            | user userState          | logado	                                                                | string           |
            | user segment global	  | 003001	                                                                | string           |
            | profile ID	          | profileID	                                                            | regexp named     |
            | user gender	          | gender	                                                                | regexp named     |
            | user age		          | age                                                                     | regexp named     |
            | internal campaign		  |                                                                         | empty array      |
            | optimization attributes |                                                                         | empty array      |
            | application		      |                                                                         | empty str object |
            | products attributes	  |                                                                         | empty array      |

    @ANA_EVENT_CWH004
    @vbank
    @analytics
    @MX @android @ios
    @web
    @backend(test)
    @web-done
    Scenario: Generate qr to commerce but response an error
        Given a user with the following criteria
            | criteria                     	|
            | multiple accounts            	|
            | cardless withdrawal pending  	|
            | multiple accounts          	|
        And the user accesses to "cardless withdrawal historic" item located in the sidebar
        And the user accesses to cardless withdrawal with "pending payment" status
        And the analytics interceptor service is initiated
        When the user selects cardless withdrawal commerce
        Then the analytics events contains the following variables
            | item	                  | value	                                                                | type             | event     |
            | page name	              | app:privada:personas:cuentas:retiro sin tarjeta:error generacion de qr	| string           | Page View |
            | level 1	              | cuentas	                                                                | string           | Page View |
            | level 2	              | retiro sin tarjeta                                                      | string           | Page View |
            | level 3	              | error generacion de qr                                                  | string           | Page View |
            | error page              | error generacion de qr                                                  | string           | Page View |
            | language	              | ES	                                                                    | string           | Page View |
            | page area               | privada	                                                                | string           | Page View |
            | page intent	          | informacion	                                                            | string           | Page View |
            | channel	              | online	                                                                | string           | Page View |
            | page instance ID	      | de	                                                                    | string           | Page View |
            | version DL              | 20250414_5.0                                                            | string           | Page View |
            | page info version	      | appVersion	                                                            | regexp named     | Page View |
            | page segment	          | personas	                                                            | string           | Page View |
            | sysEnv	              | app	                                                                    | string           | Page View |
            | business unit	          | BBVA Mexico	                                                            | string           | Page View |
            | site app name	          | App BBVA Mexico	                                                        | string           | Page View |
            | project name      	  | Glomo	                                                                | string           | Page View |
            | device mobile     	  | si	                                                                    | string           | Page View |
            | user userState          | logado	                                                                | string           | Page View |
            | user segment global	  | 003001	                                                                | string           | Page View |
            | profile ID	          | profileID	                                                            | regexp named     | Page View |
            | user gender	          | gender	                                                                | regexp named     | Page View |
            | user age		          | age                                                                     | regexp named     | Page View |
            | internal campaign		  |                                                                         | empty array      | Page View |
            | optimization attributes |                                                                         | empty array      | Page View |
            | application		      |                                                                         | empty str object | Page View |
            | products attributes	  |                                                                         | empty array      | Page View |

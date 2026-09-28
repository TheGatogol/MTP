@commonAccountProductDetailAnalytics
Feature: Analytics - Common Account Product Detail

    @ANA_CAPD001
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: Page View - Access to the new detail product of the common account
        Given a user with the following criteria
            | criteria           |
            | common account     |
            | one account        |
        And the user accesses to dashboard
        And the analytics interceptor service is initiated
        When the user accesses to the operative account product detail
        Then the analytics events contains the following variables
            | item                    | value                                | type         | event     |
            | analytics	              | analytics/glomo_base	             | json schema  | Page View |
            | version DL	          | 20250414_5.0	                     | string	    | Page View |
            | page name	              | app:privada:personas:cuentas         | string	    | Page View |
            | level 1	              | cuentas	                             | string	    | Page View |
            | language	              | ES	                                 | string	    | Page View |
            | page area	              | privada	                             | string	    | Page View |
            | page intent	          | informacion	                         | string	    | Page View |
            | channel	              | online	                             | string	    | Page View |
            | page instance ID	      | de	                                 | string	    | Page View |
            | page info version	      | appVersion	                         | regexp named | Page View |
            | page segment	          | personas	                         | string	    | Page View |
            | sysEnv	              | app	                                 | string	    | Page View |
            | business unit	          | BBVA Mexico	                         | string	    | Page View |
            | site app name	          | App BBVA Mexico	                     | string	    | Page View |
            | project name	          | Glomo	                             | string	    | Page View |
            | device mobile	          | si	                                 | string	    | Page View |
            | user userState	      | logado	                             | string	    | Page View |
            | user segment global     |	003001	                             | string	    | Page View |
            | profile ID	          | profileID	                         | regexp named | Page View |
            | user age	              | age	                                 | regexp named | Page View |
            | user gender	          | gender	                             | regexp named | Page View |
            | internal campaign	      |                                      | empty array  | Page View |
            | optimization attributes |	                                     | empty array  | Page View |
            | products attributes	  |                                      | empty array  | Page View |

    @ANA_CAPD002
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: Page View - Access to the account data
        Given a user with the following criteria
            | criteria           |
            | common account     |
            | one account        |
        And the user accesses to the operative account product detail
        When the user accesses to view account data
        Then the device contains the following variables
            | item                    | value                                | type         |
            | analytics	              | analytics/glomo_base	             | json schema  |
            | version DL	          | 20250414_5.0	                     | string	    |
            | page name	              | app:privada:personas:cuentas:detalle | string	    |
            | level 2	              | detalle                              | string	    |
            | language	              | ES	                                 | string	    |
            | page area	              | privada	                             | string	    |
            | page intent	          | informacion	                         | string	    |
            | channel	              | online	                             | string	    |
            | page instance ID	      | de	                                 | string	    |
            | page info version	      | appVersion	                         | regexp named |
            | page segment	          | personas	                         | string	    |
            | sysEnv	              | app	                                 | string	    |
            | business unit	          | BBVA Mexico	                         | string	    |
            | site app name	          | App BBVA Mexico	                     | string	    |
            | project name	          | Glomo	                             | string	    |
            | device mobile	          | si	                                 | string	    |
            | user userState	      | logado	                             | string	    |
            | user segment global     |	003001	                             | string	    |
            | profile ID	          | profileID	                         | regexp named |
            | user age	              | age	                                 | regexp named |
            | user gender	          | gender	                             | regexp named |
            | internal campaign	      |                                      | empty array  |
            | optimization attributes |	                                     | empty array  |
            | products attributes	  |                                      | empty array  |

    @ANA_CAPD003
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: Error - The service fails to get the account information
        Given a user with the following criteria
            | criteria           |
            | common account     |
            | one account        |
        And the user accesses to the operative account product detail
        When the user retries to "account information" access "2" more times
        Then the device contains the following variables
            | item                    | value                                      | type         |
            | analytics	              | analytics/glomo_base	                   | json schema  |
            | version DL	          | 20250414_5.0	                           | string	      |
            | page name	              | app:privada:personas:cuentas:error cuentas | string	      |
            | level 1	              | cuentas	                                   | string	      |
            | level 2	              | error cuentas                              | string	      |
            | language	              | ES	                                       | string	      |
            | page area	              | privada	                                   | string	      |
            | page intent	          | informacion	                               | string	      |
            | channel	              | online	                                   | string	      |
            | page instance ID	      | de	                                       | string	      |
            | page info version	      | appVersion	                               | regexp named |
            | page segment	          | personas	                               | string	      |
            | sysEnv	              | app	                                       | string	      |
            | business unit	          | BBVA Mexico	                               | string	      |
            | site app name	          | App BBVA Mexico	                           | string	      |
            | project name	          | Glomo	                                   | string	      |
            | device mobile	          | si	                                       | string	      |
            | user userState	      | logado	                                   | string	      |
            | user segment global     |	003001	                                   | string	      |
            | profile ID	          | profileID	                               | regexp named |
            | user age	              | age	                                       | regexp named |
            | user gender	          | gender	                                   | regexp named |
            | internal campaign	      |                                            | empty array  |
            | optimization attributes |	                                           | empty array  |
            | products attributes	  |                                            | empty array  |

    @ANA_CAPD004
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: Page View - Movements of the account
        Given a user with the following criteria
            | criteria                  |
            | common account            |
            | multiple accounts         |
            | more than 5 movements     |
        And the user accesses to the a checking account product detail with "more than 5 movements"
        When the user accesses to all his account movements
        Then the device contains the following variables
            | item                    | value                                            | type         |
            | analytics	              | analytics/glomo_base	                         | json schema  |
            | version DL	          | 20250414_5.0	                                 | string	    |
            | page name	              | app:privada:personas:cuentas:detalle:movimientos | string	    |
            | level 1	              | cuentas	                                         | string	    |
            | level 2	              | detalle                                          | string	    |
            | language	              | ES	                                             | string	    |
            | page area	              | privada	                                         | string	    |
            | page intent	          | informacion	                                     | string	    |
            | channel	              | online	                                         | string	    |
            | page instance ID	      | de	                                             | string	    |
            | page info version	      | appVersion	                                     | regexp named |
            | page segment	          | personas	                                     | string	    |
            | sysEnv	              | app	                                             | string	    |
            | business unit	          | BBVA Mexico	                                     | string	    |
            | site app name	          | App BBVA Mexico	                                 | string	    |
            | project name	          | Glomo	                                         | string	    |
            | device mobile	          | si	                                             | string	    |
            | user userState	      | logado	                                         | string	    |
            | user segment global     |	003001	                                         | string	    |
            | profile ID	          | profileID	                                     | regexp named |
            | user age	              | age	                                             | regexp named |
            | user gender	          | gender	                                         | regexp named |
            | internal campaign	      |                                                  | empty array  |
            | optimization attributes |	                                                 | empty array  |
            | products attributes	  |                                                  | empty array  |

    @ANA_CAPD005
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: Page View - Account without movements
        Given a user with the following criteria
            | criteria                  |
            | common account            |
            | account with transactions |
        When the user accesses to the a checking account product detail with "no movements"
        Then the device contains the following variables
            | item                    | value                                                   | type         |
            | analytics	              | analytics/glomo_base	                                | json schema  |
            | version DL	          | 20250414_5.0	                                        | string	   |
            | page name	              | app:privada:personas:cuentas:detalle:no hay movimientos | string	   |
            | level 1	              | cuentas	                                                | string	   |
            | level 2	              | detalle                                                 | string	   |
            | level 3	              | no hay movimientos                                      | string	   |
            | language	              | ES	                                                    | string	   |
            | page area	              | privada	                                                | string	   |
            | page intent	          | informacion	                                            | string	   |
            | channel	              | online	                                                | string	   |
            | page instance ID	      | de	                                                    | string	   |
            | page info version	      | appVersion	                                            | regexp named |
            | page segment	          | personas	                                            | string	   |
            | sysEnv	              | app	                                                    | string	   |
            | business unit	          | BBVA Mexico	                                            | string	   |
            | site app name	          | App BBVA Mexico	                                        | string	   |
            | project name	          | Glomo	                                                | string	   |
            | device mobile	          | si	                                                    | string	   |
            | user userState	      | logado	                                                | string	   |
            | user segment global     |	003001	                                                | string	   |
            | profile ID	          | profileID	                                            | regexp named |
            | user age	              | age	                                                    | regexp named |
            | user gender	          | gender	                                                | regexp named |
            | internal campaign	      |                                                         | empty array  |
            | optimization attributes |	                                                        | empty array  |
            | products attributes	  |                                                         | empty array  |

    @ANA_CAPD006
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: Error - Last movements
        Given a user with the following criteria
            | criteria                  |
            | common account            |
            | multiple accounts         |
            | more than 5 movements     |
        When the user accesses to the a checking account product detail with "more than 5 movements"
        Then the device contains the following variables
            | item                    | value                                                   | type          |
            | analytics	              | analytics/glomo_base	                                | json schema   |
            | version DL	          | 20250414_5.0	                                        | string	    |
            | page name	              | app:privada:personas:cuentas:detalle:error movimientos  | string	    |
            | level 1	              | cuentas	                                                | string	    |
            | level 2	              | detalle                                                 | string	    |
            | language	              | ES	                                                    | string	    |
            | page area	              | privada	                                                | string	    |
            | page intent	          | informacion	                                            | string	    |
            | channel	              | online	                                                | string	    |
            | page instance ID	      | de	                                                    | string	    |
            | page info version	      | appVersion	                                            | regexp named  |
            | page segment	          | personas	                                            | string	    |
            | sysEnv	              | app	                                                    | string	    |
            | business unit	          | BBVA Mexico	                                            | string	    |
            | site app name	          | App BBVA Mexico	                                        | string	    |
            | project name	          | Glomo	                                                | string	    |
            | device mobile	          | si	                                                    | string	    |
            | user userState	      | logado	                                                | string	    |
            | user segment global     |	003001	                                                | string	    |
            | profile ID	          | profileID	                                            | regexp named  |
            | user age	              | age	                                                    | regexp named  |
            | user gender	          | gender	                                                | regexp named  |
            | site error              | error movimientos                                       | string        |
            | internal campaign	      |                                                         | empty array   |
            | optimization attributes |	                                                        | empty array   |
            | products attributes	  |                                                         | empty array   |

    @ANA_CAPD007
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: Page View - Movement detail
        Given a user with the following criteria
            | criteria                  |
            | common account            |
            | multiple accounts         |
            | more than 5 movements     |
        And the user accesses to the a checking account product detail with "more than 5 movements"
        When the user accesses the details of a movement from "transaction"
        Then the device contains the following variables
            | item                    | value                                                                   | type          |
            | analytics	              | analytics/glomo_base	                                                | json schema   |
            | version DL	          | 20250414_5.0	                                                        | string	    |
            | page name	              | app:privada:personas:cuentas:detalle:movimientos:detalle de movimiento  | string	    |
            | level 1	              | cuentas	                                                                | string	    |
            | level 2	              | detalle                                                                 | string	    |
            | level 3	              | movimientos                                                             | string	    |
            | level 4	              | detalle de movimiento                                                   | string	    |
            | language	              | ES	                                                                    | string	    |
            | page area	              | privada	                                                                | string	    |
            | page intent	          | informacion	                                                            | string	    |
            | channel	              | online	                                                                | string	    |
            | page instance ID	      | de	                                                                    | string	    |
            | page info version	      | appVersion	                                                            | regexp named  |
            | page segment	          | personas	                                                            | string	    |
            | sysEnv	              | app	                                                                    | string	    |
            | business unit	          | BBVA Mexico	                                                            | string	    |
            | site app name	          | App BBVA Mexico	                                                        | string	    |
            | project name	          | Glomo	                                                                | string	    |
            | device mobile	          | si	                                                                    | string	    |
            | user userState	      | logado	                                                                | string	    |
            | user segment global     |	003001	                                                                | string	    |
            | profile ID	          | profileID	                                                            | regexp named  |
            | user age	              | age	                                                                    | regexp named  |
            | user gender	          | gender	                                                                | regexp named  |
            | internal campaign	      |                                                                         | empty array   |
            | optimization attributes |	                                                                        | empty array   |
            | products attributes	  |                                                                         | empty array   |

    @ANA_CAPD008
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: Internal Link - Movement detail - Share voucher
        Given a user with the following criteria
            | criteria                  |
            | common account            |
            | multiple accounts         |
            | more than 5 movements     |
        And the user accesses to the a checking account product detail with "more than 5 movements"
        And the user accesses the details of a movement from "transaction"
        When the user selects the corresponding operative
        Then the device contains the following variables
            | item                    | value                                                                   | type          |
            | analytics	              | analytics/glomo_base	                                                | json schema   |
            | version DL	          | 20250414_5.0	                                                        | string	    |
            | page name	              | app:privada:personas:cuentas:detalle:movimientos:detalle de movimiento  | string	    |
            | level 1	              | cuentas	                                                                | string	    |
            | level 2	              | detalle                                                                 | string	    |
            | level 3	              | movimientos                                                             | string	    |
            | level 4	              | detalle de movimiento                                                   | string	    |
            | language	              | ES	                                                                    | string	    |
            | page area	              | privada	                                                                | string	    |
            | page intent	          | informacion	                                                            | string	    |
            | channel	              | online	                                                                | string	    |
            | page instance ID	      | de	                                                                    | string	    |
            | page info version	      | appVersion	                                                            | regexp named  |
            | page segment	          | personas	                                                            | string	    |
            | sysEnv	              | app	                                                                    | string	    |
            | business unit	          | BBVA Mexico	                                                            | string	    |
            | site app name	          | App BBVA Mexico	                                                        | string	    |
            | project name	          | Glomo	                                                                | string	    |
            | link name               | compartir                                                               | string	    |
            | device mobile	          | si	                                                                    | string	    |
            | user userState	      | logado	                                                                | string	    |
            | user segment global     |	003001	                                                                | string	    |
            | profile ID	          | profileID	                                                            | regexp named  |
            | user age	              | age	                                                                    | regexp named  |
            | user gender	          | gender	                                                                | regexp named  |
            | internal campaign	      |                                                                         | empty array   |
            | optimization attributes |	                                                                        | empty array   |
            | products attributes	  |                                                                         | empty array   |

    @ANA_EVENT_CAPD009
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: External Link - Share account detail
        Given a user with the following criteria
            | criteria           |
            | common account     |
            | one account        |
        And the user accesses to the operative account product detail
        And the user accesses to view account data
        And the analytics interceptor service is initiated
        When the user wants share his data
        Then the analytics events contains the following variables
            | item                    | value                                   | type          |    event      |
            | analytics	              | analytics/glomo_base	                | json schema   | External Link |
            | version DL	          | 20250414_5.0	                        | string	    | External Link |
            | page name	              | app:privada:personas:cuentas:detalle    | string	    | External Link |
            | level 1	              | cuentas	                                | string	    | External Link |
            | level 2	              | detalle	                                | string	    | External Link |
            | link name	              | compartir                               | string	    | External Link |
            | link url	              | ^[a-zA-Z0-9\-_=]{0,}$                   | regex         | External Link |
            | language	              | ES	                                    | string	    | External Link |
            | page area	              | privada	                                | string	    | External Link |
            | page intent	          | informacion	                            | string	    | External Link |
            | channel	              | online	                                | string	    | External Link |
            | page instance ID	      | de	                                    | string	    | External Link |
            | page info version	      | appVersion	                            | regexp named  | External Link |
            | page segment	          | personas	                            | string	    | External Link |
            | sysEnv	              | app	                                    | string	    | External Link |
            | business unit	          | BBVA Mexico	                            | string	    | External Link |
            | site app name	          | App BBVA Mexico	                        | string	    | External Link |
            | project name	          | Glomo	                                | string	    | External Link |
            | device mobile	          | si	                                    | string	    | External Link |
            | user userState	      | logado	                                | string	    | External Link |
            | user segment global     |	003001	                                | string	    | External Link |
            | profile ID	          | profileID	                            | regexp named  | External Link |
            | user age	              | age	                                    | regexp named  | External Link |
            | user gender	          | gender	                                | regexp named  | External Link |
            | internal campaign	      |                                         | empty array   | External Link |
            | optimization attributes |	                                        | empty array   | External Link |
            | products attributes	  |                                         | empty array   | External Link |

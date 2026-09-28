@analyticsBuyNowPayLater
Feature: Analytics - Buy now pay later

    @ANA_BNPL001
    @analytics
    @web-done @ios @android
    @vbank
    @backend(test)
    @MX
    @web
    Scenario: The user views the details of the disposition line
        Given a user with the following criteria
            | criteria         |
            | aftersales       |
            | financing line   |
            | choose your term |
        And the user accesses to the "operative" "debit" card product detail
        When the user accesses to the provision page "BBVA Choose Your Term"
        Then the device contains the following variables
            | item                     | value                                                                                              | type              |
            | analytics	               | analytics/glomo_base	                                                                            | json schema       |
            | version DL	           | 20250414_5.0	                                                                                    | string            |
            | page name	               | app:privada:personas:credito revolvente:detalle compras y disponible linea de credito	            | string            |
            | level 1	               | credito revolvente	                                                                                | string            |
            | level 2	               | detalle compras y disponible linea de credito	                                                    | string            |
            | language	               | ES	                                                                                                | string            |
            | page area	               | privada                                                                            	            | string            |
            | page intent	           | informacion	                                                                                    | string            |
            | channel	               | online	                                                                                            | string            |
            | page instance ID         | de	                                                                                                | string            |
            | page info version	       | appVersion	                                                                                        | regexp named      |
            | page segment	           | personas	                                                                                        | string            |
            | sysEnv	               | app	                                                                                            | string            |
            | business unit	           | BBVA Mexico	                                                                                    | string            |
            | site app name	           | App BBVA Mexico	                                                                                | string            |
            | project name	           | Glomo	                                                                                            | string            |
            | device mobile	           | si                 	                                                                            | string            |
            | user userState	       | logado	                                                                                            | string            |
            | user segment global	   | 003001       	                                                                                    | string            |
            | profile ID	           | profileID	                                                                                        | regexp named      |
            | user gender	           | gender	                                                                                            | regexp named      |
            | user age	               | age	                                                                                            | regexp named      |
            | internal campaign        | 		                                                                                            | empty array       |
            | optimization attributes  |     		                                                                                        | empty array       |
            | application		       |                                                                                                    | empty str object  |
            | products attributes	   |                                                                                                    | empty array       |

    @ANA_BNPL002
    @analytics
    @web-done @ios @android
    @vbank
    @backend(test)
    @MX
    @web
    Scenario: The user views the details of the disposition line and the payment history
        Given a user with the following criteria
            | criteria         |
            | aftersales       |
            | financing line   |
            | choose your term |
        And the user accesses to the "operative" "debit" card product detail
        And the user accesses to the provision page "various product"
        When the user access to the disposition detail and payment history
        Then the device contains the following variables
            | item                     | value                                                                                              | type              | event number |
            | analytics	               | analytics/glomo_base	                                                                            | json schema       | 2            |
            | version DL	           | 20250414_5.0	                                                                                    | string            | 2            |
            | page name	               | app:privada:personas:credito revolvente:detalle compras y disponible linea de credito:disposicion	| string            | 2            |
            | level 1	               | credito revolvente	                                                                                | string            | 2            |
            | level 2	               | detalle compras y disponible linea de credito	                                                    | string            | 2            |
            | level 3	               | disposicion	                                                                                    | string            | 2            |
            | language	               | ES	                                                                                                | string            | 2            |
            | page area	               | privada                                                                            	            | string            | 2            |
            | page intent	           | informacion	                                                                                    | string            | 2            |
            | channel	               | online	                                                                                            | string            | 2            |
            | page instance ID         | de	                                                                                                | string            | 2            |
            | page info version	       | appVersion	                                                                                        | regexp named      | 2            |
            | page segment	           | personas	                                                                                        | string            | 2            |
            | sysEnv	               | app	                                                                                            | string            | 2            |
            | business unit	           | BBVA Mexico	                                                                                    | string            | 2            |
            | site app name	           | App BBVA Mexico	                                                                                | string            | 2            |
            | project name	           | Glomo	                                                                                            | string            | 2            |
            | device mobile	           | si                 	                                                                            | string            | 2            |
            | user userState	       | logado	                                                                                            | string            | 2            |
            | user segment global	   | 003001       	                                                                                    | string            | 2            |
            | profile ID	           | profileID	                                                                                        | regexp named      | 2            |
            | user gender	           | gender	                                                                                            | regexp named      | 2            |
            | user age	               | age	                                                                                            | regexp named      | 2            |
            | internal campaign        | 		                                                                                            | empty array       | 2            |
            | optimization attributes  |     		                                                                                        | empty array       | 2            |
            | application		       |                                                                                                    | empty str object  | 2            |
            | products attributes	   |                                                                                                    | empty array       | 2            |

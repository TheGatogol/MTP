@analyticsCardCreditCardPaymentPromise
Feature: Analytics - Credit Card Payment Promise

    @ANA_EVENT_CCPP001
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario:  Analytics - Card Credit Card Payment Promise - App On Click Start
        Given a user with the following criteria
            | criteria                           |
            | credit card payment promise client |
        And the user accesses to dashboard
        And the user goes to "screen credit card payment promise" using deeplink navigation
        And the analytics interceptor service is initiated
        When the user select payment promise option
        Then the analytics events contains the following variables
            | item	                  | value	                                          | type          | event              |
            | analytics	              | analytics/glomo_base	                          | json schema   | App On Click Start |
            | version DL	          | 20250414_5.0	                                  | string        | App On Click Start |
            | page name	              | app:privada:personas:tarjetas:pagar tarjeta       | string        | App On Click Start |
            | level 1	              | tarjetas	                                      | string        | App On Click Start |
            | level 2	              | pagar tarjeta	                                  | string        | App On Click Start |
            | language	              | ES	                                              | string        | App On Click Start |
            | page area	              | privada	                                          | string        | App On Click Start |
            | page intent	          | informacion	                                      | string        | App On Click Start |
            | channel	              | online	                                          | string        | App On Click Start |
            | page instance ID        | de	                                              | string        | App On Click Start |
            | page info version	      | appVersion	                                      | regexp named  | App On Click Start |
            | page segment	          | personas	                                      | string        | App On Click Start |
            | sysEnv	              | app	                                              | string        | App On Click Start |
            | business unit	          | BBVA Mexico	                                      | string        | App On Click Start |
            | site app name	          | App BBVA Mexico       	                          | string        | App On Click Start |
            | project name	          | DIY Payments	                                  | string        | App On Click Start |
            | device mobile	          | si	                                              | string        | App On Click Start |
            | user userState	      | logado	                                          | string        | App On Click Start |
            | user segment global	  | 003001	                                          | string        | App On Click Start |
            | profile ID	          | profileID	                                      | regexp named  | App On Click Start |
            | global application	  | payment commitment credit card	                  | string        | App On Click Start |
            | application name	      | compromiso pago tarjeta                 	      | string        | App On Click Start |
            | application type	      | operativa	                                      | string        | App On Click Start |
            | application step	      | acceder                                 	      | string        | App On Click Start |
            | fulfillment model	      | online	                                          | string        | App On Click Start |
            | internal campaign		  |                                                   | empty array   | App On Click Start |
            | optimization attributes |                                                   | empty array   | App On Click Start |
            | products attributes	  |                                                   | empty array   | App On Click Start |

    @ANA_EVENT_CCPP002
    @analytics
    @web @ios @android
    @vbank @backend(test)
    @MX @web-done
    Scenario:  Analytics - Card Credit Card Payment Promise - App Page Visit
        Given a user with the following criteria
            | criteria                           |
            | credit card payment promise client |
        And the user accesses to dashboard
        And the user goes to "screen credit card payment promise" using deeplink navigation
        And the analytics interceptor service is initiated
        When the user select payment promise option
        Then the analytics events contains the following variables
            | item	                   | value	                                                                | type          | event          |
            | analytics	               | analytics/glomo_base	                                                | json schema   | App Page Visit |
            | version DL	           | 20250414_5.0	                                                        | string        | App Page Visit |
            | page name	               | app:privada:personas:tarjetas:compromiso de pago:1 compromiso de pago  | string        | App Page Visit |
            | level 1	               | tarjetas	                                                            | string        | App Page Visit |
            | level 2	               | compromiso de pago	                                                    | string        | App Page Visit |
            | level 3	               | 1 compromiso de pago	                                                | string        | App Page Visit |
            | language	               | ES	                                                                    | string        | App Page Visit |
            | page area	               | privada	                                                            | string        | App Page Visit |
            | page intent	           | transaccion	                                                        | string        | App Page Visit |
            | channel	               | online	                                                                | string        | App Page Visit |
            | page instance ID         | de	                                                                    | string        | App Page Visit |
            | page info version	       | appVersion	                                                            | regexp named  | App Page Visit |
            | page segment	           | personas	                                                            | string        | App Page Visit |
            | sysEnv	               | app	                                                                | string        | App Page Visit |
            | business unit	           | BBVA Mexico	                                                        | string        | App Page Visit |
            | site app name	           | App BBVA Mexico       	                                                | string        | App Page Visit |
            | project name	           | DIY Payments	                                                        | string        | App Page Visit |
            | device mobile	           | si	                                                                    | string        | App Page Visit |
            | user userState	       | logado	                                                                | string        | App Page Visit |
            | user segment global	   | 003001	                                                                | string        | App Page Visit |
            | profile ID	           | profileID	                                                            | regexp named  | App Page Visit |
            | global application	   | payment commitment credit card	                                        | string        | App Page Visit |
            | application name	       | compromiso pago tarjeta                                       	        | string        | App Page Visit |
            | application type	       | operativa	                                                            | string        | App Page Visit |
            | application step	       | 1 compromiso de pago                                         	        | string        | App Page Visit |
            | fulfillment model	       | online	                                                                | string        | App Page Visit |
            | product primary category | tarjetas                                                               | string        | App Page Visit |
            | product subtype          | tarjetas credito                                                       | string        | App Page Visit |
            | product name             | oro bbva                                                               | string        | App Page Visit |
            | internal campaign		   |                                                                        | empty array   | App Page Visit |
            | optimization attributes  |                                                                        | empty array   | App Page Visit |

    @ANA_EVENT_CCPP003
    @analytics
    @web @ios @android
    @vbank @backend(test)
    @MX @web-done
    Scenario:  Analytics - Card Credit Card Payment Promise - App Started
        Given a user with the following criteria
            | criteria                           |
            | credit card payment promise client |
        And the user accesses to dashboard
        And the user goes to "screen credit card payment promise" using deeplink navigation
        And the user select payment promise option
        And the analytics interceptor service is initiated
        When the user open the promise calendar to select date
        Then the analytics events contains the following variables
            | item	                   | value	                                                                | type          | event       |
            | analytics	               | analytics/glomo_base	                                                | json schema   | App Started |
            | version DL	           | 20250414_5.0	                                                        | string        | App Started |
            | page name	               | app:privada:personas:tarjetas:compromiso de pago:1 compromiso de pago  | string        | App Started |
            | level 1	               | tarjetas	                                                            | string        | App Started |
            | level 2	               | compromiso de pago	                                                    | string        | App Started |
            | level 3	               | 1 compromiso de pago	                                                | string        | App Started |
            | language	               | ES	                                                                    | string        | App Started |
            | page area	               | privada	                                                            | string        | App Started |
            | page intent	           | transaccion	                                                        | string        | App Started |
            | channel	               | online	                                                                | string        | App Started |
            | page instance ID         | de	                                                                    | string        | App Started |
            | page info version	       | appVersion	                                                            | regexp named  | App Started |
            | page segment	           | personas	                                                            | string        | App Started |
            | sysEnv	               | app	                                                                | string        | App Started |
            | business unit	           | BBVA Mexico	                                                        | string        | App Started |
            | site app name	           | App BBVA Mexico       	                                                | string        | App Started |
            | project name	           | DIY Payments	                                                        | string        | App Started |
            | device mobile	           | si	                                                                    | string        | App Started |
            | user userState	       | logado	                                                                | string        | App Started |
            | user segment global	   | 003001	                                                                | string        | App Started |
            | profile ID	           | profileID	                                                            | regexp named  | App Started |
            | global application	   | payment commitment credit card	                                        | string        | App Started |
            | application name	       | compromiso pago tarjeta                                       	        | string        | App Started |
            | application type	       | operativa	                                                            | string        | App Started |
            | application step	       | seleccionar fecha pago                                       	        | string        | App Started |
            | fulfillment model	       | online	                                                                | string        | App Started |
            | product primary category | tarjetas                                                               | string        | App Started |
            | product subtype          | tarjetas credito                                                       | string        | App Started |
            | product name             | oro bbva                                                               | string        | App Started |
            | internal campaign		   |                                                                        | empty array   | App Started |
            | optimization attributes  |                                                                        | empty array   | App Started |

    @ANA_EVENT_CCPP004
    @analytics
    @web @ios @android
    @vbank @backend(test)
    @MX @web-done
    Scenario:  Analytics - Card Credit Card Payment Promise - App Step 2
        Given a user with the following criteria
            | criteria                           |
            | credit card payment promise client |
        And the user accesses to dashboard
        And the user goes to "screen credit card payment promise" using deeplink navigation
        And the user open payment promise form and select a payment date
        And the analytics interceptor service is initiated
        When the user confirm payment promise date
        Then the analytics events contains the following variables
            | item	                   | value	                                                                | type          | event      |
            | analytics	               | analytics/glomo_base	                                                | json schema   | App Step 2 |
            | version DL	           | 20250414_5.0	                                                        | string        | App Step 2 |
            | page name	               | app:privada:personas:tarjetas:compromiso de pago:2 importe             | string        | App Step 2 |
            | level 1	               | tarjetas	                                                            | string        | App Step 2 |
            | level 2	               | compromiso de pago	                                                    | string        | App Step 2 |
            | level 3	               | 2 importe          	                                                | string        | App Step 2 |
            | language	               | ES	                                                                    | string        | App Step 2 |
            | page area	               | privada	                                                            | string        | App Step 2 |
            | page intent	           | transaccion	                                                        | string        | App Step 2 |
            | channel	               | online	                                                                | string        | App Step 2 |
            | page instance ID         | de	                                                                    | string        | App Step 2 |
            | page info version	       | appVersion	                                                            | regexp named  | App Step 2 |
            | page segment	           | personas	                                                            | string        | App Step 2 |
            | sysEnv	               | app	                                                                | string        | App Step 2 |
            | business unit	           | BBVA Mexico	                                                        | string        | App Step 2 |
            | site app name	           | App BBVA Mexico       	                                                | string        | App Step 2 |
            | project name	           | DIY Payments	                                                        | string        | App Step 2 |
            | device mobile	           | si	                                                                    | string        | App Step 2 |
            | user userState	       | logado	                                                                | string        | App Step 2 |
            | user segment global	   | 003001	                                                                | string        | App Step 2 |
            | profile ID	           | profileID	                                                            | regexp named  | App Step 2 |
            | global application	   | payment commitment credit card	                                        | string        | App Step 2 |
            | application name	       | compromiso pago tarjeta                                       	        | string        | App Step 2 |
            | application type	       | operativa	                                                            | string        | App Step 2 |
            | application step	       | 2 importe                                                     	        | string        | App Step 2 |
            | fulfillment model	       | online	                                                                | string        | App Step 2 |
            | product primary category | tarjetas                                                               | string        | App Step 2 |
            | product subtype          | tarjetas credito                                                       | string        | App Step 2 |
            | product name             | oro bbva                                                               | string        | App Step 2 |
            | internal campaign		   |                                                                        | empty array   | App Step 2 |
            | optimization attributes  |                                                                        | empty array   | App Step 2 |

    @ANA_EVENT_CCPP005
    @analytics
    @web @ios @android
    @vbank @backend(test)
    @MX @web-done
    Scenario:  Analytics - Card Credit Card Payment Promise - App Step 3
        Given a user with the following criteria
            | criteria                    |
            | credit card payment promise |
        And the user accesses to dashboard
        And the user goes to "screen credit card payment promise" using deeplink navigation
        And the user open payment promise form and confirm a payment date
        And the analytics interceptor service is initiated
        When the user select a payment promise amount
        Then the analytics events contains the following variables
            | item	                   | value	                                                                | type          | event      |
            | analytics	               | analytics/glomo_base	                                                | json schema   | App Step 3 |
            | version DL	           | 20250414_5.0	                                                        | string        | App Step 3 |
            | page name	               | app:privada:personas:tarjetas:compromiso de pago:3 metodo de pago      | string        | App Step 3 |
            | level 1	               | tarjetas	                                                            | string        | App Step 3 |
            | level 2	               | compromiso de pago	                                                    | string        | App Step 3 |
            | level 3	               | 3 metodo de pago          	                                            | string        | App Step 3 |
            | language	               | ES	                                                                    | string        | App Step 3 |
            | page area	               | privada	                                                            | string        | App Step 3 |
            | page intent	           | transaccion	                                                        | string        | App Step 3 |
            | channel	               | online	                                                                | string        | App Step 3 |
            | page instance ID         | de	                                                                    | string        | App Step 3 |
            | page info version	       | appVersion	                                                            | regexp named  | App Step 3 |
            | page segment	           | personas	                                                            | string        | App Step 3 |
            | sysEnv	               | app	                                                                | string        | App Step 3 |
            | business unit	           | BBVA Mexico	                                                        | string        | App Step 3 |
            | site app name	           | App BBVA Mexico       	                                                | string        | App Step 3 |
            | project name	           | DIY Payments	                                                        | string        | App Step 3 |
            | device mobile	           | si	                                                                    | string        | App Step 3 |
            | user userState	       | logado	                                                                | string        | App Step 3 |
            | user segment global	   | 003001	                                                                | string        | App Step 3 |
            | profile ID	           | profileID	                                                            | regexp named  | App Step 3 |
            | global application	   | payment commitment credit card	                                        | string        | App Step 3 |
            | application name	       | compromiso pago tarjeta                                       	        | string        | App Step 3 |
            | application type	       | operativa	                                                            | string        | App Step 3 |
            | application step	       | 3 metodo de pago                                              	        | string        | App Step 3 |
            | fulfillment model	       | online	                                                                | string        | App Step 3 |
            | product primary category | tarjetas                                                               | string        | App Step 3 |
            | product subtype          | tarjetas credito                                                       | string        | App Step 3 |
            | product name             | oro bbva                                                               | string        | App Step 3 |
            | product amount	       | 10 	                                                                | string	    | App Step 3 |
            | product currency	       | MXN	                                                                | string	    | App Step 3 |
            | internal campaign		   |                                                                        | empty array   | App Step 3 |
            | optimization attributes  |                                                                        | empty array   | App Step 3 |

    @ANA_EVENT_CCPP006
    @analytics
    @web @ios @android
    @vbank @backend(test)
    @MX @web-done
    Scenario:  Analytics - Card Credit Card Payment Promise - App Step 4
        Given a user with the following criteria
            | criteria                           |
            | credit card payment promise client |
        And the user accesses to dashboard
        And the user goes to "screen credit card payment promise" using deeplink navigation
        And the user open payment promise form to fill date and amount steps
        And the analytics interceptor service is initiated
        When the user select a payment method
        Then the analytics events contains the following variables
            | item	                   | value	                                                                | type          | event      |
            | analytics	               | analytics/glomo_base	                                                | json schema   | App Step 4 |
            | version DL	           | 20250414_5.0	                                                        | string        | App Step 4 |
            | page name	               | app:privada:personas:tarjetas:compromiso de pago:4 confirmacion        | string        | App Step 4 |
            | level 1	               | tarjetas	                                                            | string        | App Step 4 |
            | level 2	               | compromiso de pago	                                                    | string        | App Step 4 |
            | level 3	               | 4 confirmacion          	                                            | string        | App Step 4 |
            | language	               | ES	                                                                    | string        | App Step 4 |
            | page area	               | privada	                                                            | string        | App Step 4 |
            | page intent	           | transaccion	                                                        | string        | App Step 4 |
            | channel	               | online	                                                                | string        | App Step 4 |
            | page instance ID         | de	                                                                    | string        | App Step 4 |
            | page info version	       | appVersion	                                                            | regexp named  | App Step 4 |
            | page segment	           | personas	                                                            | string        | App Step 4 |
            | sysEnv	               | app	                                                                | string        | App Step 4 |
            | business unit	           | BBVA Mexico	                                                        | string        | App Step 4 |
            | site app name	           | App BBVA Mexico       	                                                | string        | App Step 4 |
            | project name	           | DIY Payments	                                                        | string        | App Step 4 |
            | device mobile	           | si	                                                                    | string        | App Step 4 |
            | user userState	       | logado	                                                                | string        | App Step 4 |
            | user segment global	   | 003001	                                                                | string        | App Step 4 |
            | profile ID	           | profileID	                                                            | regexp named  | App Step 4 |
            | global application	   | payment commitment credit card	                                        | string        | App Step 4 |
            | application name	       | compromiso pago tarjeta                                       	        | string        | App Step 4 |
            | application type	       | operativa	                                                            | string        | App Step 4 |
            | application step	       | 4 confirmacion                                             	        | string        | App Step 4 |
            | fulfillment model	       | online	                                                                | string        | App Step 4 |
            | application typology	   | desde cuentas bbva	                                                    | string	    | App Step 4 |
            | product primary category | tarjetas                                                               | string        | App Step 4 |
            | product subtype          | tarjetas credito                                                       | string        | App Step 4 |
            | product name             | oro bbva                                                               | string        | App Step 4 |
            | product amount	       | 10 	                                                                | string	    | App Step 4 |
            | product currency	       | MXN	                                                                | string	    | App Step 4 |
            | internal campaign		   |                                                                        | empty array   | App Step 4 |
            | optimization attributes  |                                                                        | empty array   | App Step 4 |

    @ANA_EVENT_CCPP007
    @analytics
    @web @ios @android
    @vbank @backend(test)
    @MX @web-done
    Scenario:  Analytics - Card Credit Card Payment Promise - App Step Completed
        Given a user with the following criteria
            | criteria                           |
            | credit card payment promise client |
        And the user accesses to dashboard
        And the user goes to "screen credit card payment promise" using deeplink navigation
        And the open and fill payment promise form
        And the analytics interceptor service is initiated
        When the user generate a promise
        Then the analytics events contains the following variables
            | item	                   | value	                                                                | type          | event         |
            | analytics	               | analytics/glomo_base	                                                | json schema   | App Completed |
            | version DL	           | 20250414_5.0	                                                        | string        | App Completed |
            | page name	               | app:privada:personas:tarjetas:compromiso de pago:pagina exitosa        | string        | App Completed |
            | level 1	               | tarjetas	                                                            | string        | App Completed |
            | level 2	               | compromiso de pago	                                                    | string        | App Completed |
            | level 3	               | pagina exitosa          	                                            | string        | App Completed |
            | language	               | ES	                                                                    | string        | App Completed |
            | page area	               | privada	                                                            | string        | App Completed |
            | page intent	           | transaccion	                                                        | string        | App Completed |
            | channel	               | online	                                                                | string        | App Completed |
            | page instance ID         | de	                                                                    | string        | App Completed |
            | page info version	       | appVersion	                                                            | regexp named  | App Completed |
            | page segment	           | personas	                                                            | string        | App Completed |
            | sysEnv	               | app	                                                                | string        | App Completed |
            | business unit	           | BBVA Mexico	                                                        | string        | App Completed |
            | site app name	           | App BBVA Mexico       	                                                | string        | App Completed |
            | project name	           | DIY Payments	                                                        | string        | App Completed |
            | device mobile	           | si	                                                                    | string        | App Completed |
            | user userState	       | logado	                                                                | string        | App Completed |
            | user segment global	   | 003001	                                                                | string        | App Completed |
            | profile ID	           | profileID	                                                            | regexp named  | App Completed |
            | global application	   | payment commitment credit card	                                        | string        | App Completed |
            | application name	       | compromiso pago tarjeta                                       	        | string        | App Completed |
            | application type	       | operativa	                                                            | string        | App Completed |
            | application step	       | pagina exitosa                                             	        | string        | App Completed |
            | fulfillment model	       | online	                                                                | string        | App Completed |
            | application typology	   | desde cuentas bbva	                                                    | string	    | App Completed |
            | application state	       | finalizado	                                                            | string	    | App Completed |
            | product primary category | tarjetas                                                               | string        | App Completed |
            | product subtype          | tarjetas credito                                                       | string        | App Completed |
            | product name             | oro bbva                                                               | string        | App Completed |
            | product amount	       | 10 	                                                                | string	    | App Completed |
            | product currency	       | MXN	                                                                | string	    | App Completed |
            | internal campaign		   |                                                                        | empty array   | App Completed |
            | optimization attributes  |                                                                        | empty array   | App Completed |

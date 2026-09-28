@analyticsLoansPaymentPledge
Feature: Analytics - Loans Payment Pledge

    @ANA_EVENT_LPP001
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android @spherica
    Scenario:  Analytics - Loans Payment Pledge - App On Click Start
        Given a user with the following criteria
            | criteria                           |
            | loan payment pledge receipt amount |
        And the user accesses to dashboard
        And the user goes to "screen loans payment pledge" using deeplink navigation
        And the analytics interceptor service is initiated
        When the user select payment pledge option
        Then the analytics events contains the following variables
            | item	                   | value	                            | type         | event              |
            | analytics	               | analytics/glomo_base	            | json schema  | App On Click Start |
            | version DL	           | 20250414_5.0	                    | string	   | App On Click Start |
            | page instance ID         | de	                                | string	   | App On Click Start |
            | sysEnv	               | app	                            | string	   | App On Click Start |
            | page segment	           | personas	                        | string	   | App On Click Start |
            | page intent	           | informacion	                    | string	   | App On Click Start |
            | business unit	           | BBVA Mexico	                    | string	   | App On Click Start |
            | page area	               | privada	                        | string	   | App On Click Start |
            | language	               | ES	                                | string	   | App On Click Start |
            | channel	               | online	                            | string	   | App On Click Start |
            | site app name	           | App BBVA Mexico	                | string	   | App On Click Start |
            | project name	           | DIY Payments	                    | string	   | App On Click Start |
            | level 1	               | pagar credito	                    | string	   | App On Click Start |
            | page name	               | app:privada:personas:pagar credito | string	   | App On Click Start |
            | device mobile	           | si	                                | string	   | App On Click Start |
            | user segment global	   | 003001	                            | string	   | App On Click Start |
            | user userState	       | logado	                            | string	   | App On Click Start |
            | profile ID               | profileID                          | regexp named | App On Click Start |
            | user gender	           | gender	                            | regexp named | App On Click Start |
            | user age 	               | 70	                                | string	   | App On Click Start |
            | fulfillment model	       | online	                            | string	   | App On Click Start |
            | application step	       | programar fecha compromiso         | string	   | App On Click Start |
            | application name	       | compromiso de pago	                | string	   | App On Click Start |
            | application type	       | operativa	                        | string	   | App On Click Start |
            | global application	   | payment commitment	                | string	   | App On Click Start |
            | product primary category | prestamos	                        | string	   | App On Click Start |
            | internal campaign		   |                                    | empty array  | App On Click Start |
            | optimization attributes  |                                    | empty array  | App On Click Start |

    @ANA_EVENT_LPP002
    @analytics
    @web @ios @android
    @vbank @backend(test)
    @MX @web-done @spherica
    Scenario:  Analytics - Loans Payment Pledge - App Page Visit
        Given a user with the following criteria
            | criteria                           |
            | loan payment pledge receipt amount |
        And the user accesses to dashboard
        And the user goes to "screen loans payment pledge" using deeplink navigation
        And the analytics interceptor service is initiated
        When the user select payment pledge option
        Then the analytics events contains the following variables
            | item	                   | value	                                                     | type         | event          |
            | analytics	               | analytics/glomo_base	                                     | json schema  | App Page Visit |
            | version DL	           | 20250414_5.0	                                             | string	    | App Page Visit |
            | page instance ID         | de	                                                         | string	    | App Page Visit |
            | sysEnv	               | app	                                                     | string	    | App Page Visit |
            | page segment	           | personas	                                                 | string	    | App Page Visit |
            | page intent	           | transaccion	                                             | string	    | App Page Visit |
            | business unit	           | BBVA Mexico	                                             | string	    | App Page Visit |
            | page area	               | privada	                                                 | string	    | App Page Visit |
            | language	               | ES	                                                         | string	    | App Page Visit |
            | channel	               | online	                                                     | string	    | App Page Visit |
            | site app name	           | App BBVA Mexico	                                         | string	    | App Page Visit |
            | project name	           | DIY Payments	                                             | string	    | App Page Visit |
            | level 1	               | compromiso de pago                                          | string	    | App Page Visit |
            | level 2	               | 1 seleccionar fecha 	                                     | string	    | App Page Visit |
            | page name	               | app:privada:personas:compromiso de pago:1 seleccionar fecha | string	    | App Page Visit |
            | device mobile	           | si	                                                         | string	    | App Page Visit |
            | user segment global	   | 003001	                                                     | string	    | App Page Visit |
            | user userState	       | logado	                                                     | string	    | App Page Visit |
            | profile ID               | profileID                                                   | regexp named | App Page Visit |
            | user gender	           | gender	                                                     | regexp named | App Page Visit |
            | user age 	               | 70	                                                         | string	    | App Page Visit |
            | fulfillment model	       | online	                                                     | string	    | App Page Visit |
            | application step	       | 1 seleccionar fecha	                                     | string	    | App Page Visit |
            | application state	       | inicio	                                                     | string	    | App Page Visit |
            | application name	       | compromiso de pago	                                         | string	    | App Page Visit |
            | application type	       | operativa	                                                 | string	    | App Page Visit |
            | global application	   | payment commitment	                                         | string	    | App Page Visit |
            | product primary category | prestamos	                                                 | string	    | App Page Visit |
            | internal campaign		   |                                                             | empty array  | App Page Visit |
            | optimization attributes  |                                                             | empty array  | App Page Visit |

    @ANA_EVENT_LPP003
    @analytics
    @web @ios @android
    @vbank @backend(test)
    @MX @web-done @spherica
    Scenario:  Analytics - Loans Payment Pledge - App Started
        Given a user with the following criteria
            | criteria                           |
            | loan payment pledge receipt amount |
        And the user accesses to dashboard
        And the user goes to "screen loans payment pledge" using deeplink navigation
        And the user select payment pledge option
        And the analytics interceptor service is initiated
        When the user select date
        Then the analytics events contains the following variables
            | item	                   | value	                                                     | type         | event       |
            | analytics	               | analytics/glomo_base	                                     | json schema  | App Started |
            | version DL	           | 20250414_5.0	                                             | string	    | App Started |
            | page instance ID         | de	                                                         | string	    | App Started |
            | sysEnv	               | app	                                                     | string	    | App Started |
            | page segment	           | personas	                                                 | string	    | App Started |
            | page intent	           | transaccion	                                             | string	    | App Started |
            | business unit	           | BBVA Mexico	                                             | string	    | App Started |
            | page area	               | privada	                                                 | string	    | App Started |
            | language	               | ES	                                                         | string	    | App Started |
            | channel	               | online	                                                     | string	    | App Started |
            | site app name	           | App BBVA Mexico	                                         | string	    | App Started |
            | project name	           | DIY Payments	                                             | string	    | App Started |
            | level 1	               | compromiso de pago                                          | string	    | App Started |
            | level 2	               | 1 seleccionar fecha 	                                     | string	    | App Started |
            | page name	               | app:privada:personas:compromiso de pago:1 seleccionar fecha | string	    | App Started |
            | device mobile	           | si	                                                         | string	    | App Started |
            | user segment global	   | 003001	                                                     | string	    | App Started |
            | user userState	       | logado	                                                     | string	    | App Started |
            | profile ID               | profileID                                                   | regexp named | App Started |
            | user gender	           | gender	                                                     | regexp named | App Started |
            | user age 	               | 70	                                                         | string	    | App Started |
            | fulfillment model	       | online	                                                     | string	    | App Started |
            | application step	       | seleccionar fecha 	                                         | string	    | App Started |
            | application name	       | compromiso de pago	                                         | string	    | App Started |
            | application type	       | operativa	                                                 | string	    | App Started |
            | global application	   | payment commitment	                                         | string	    | App Started |
            | product primary category | prestamos	                                                 | string	    | App Started |
            | optimization attributes  |                                                             | empty array  | App Started |

    @ANA_EVENT_LPP004
    @analytics
    @web @ios @android
    @vbank @backend(test)
    @MX @web-done @spherica
    Scenario:  Analytics - Loans Payment Pledgee - App Step 2
        Given a user with the following criteria
            | criteria                           |
            | loan payment pledge receipt amount |
        And the user accesses to dashboard
        And the user goes to "screen loans payment pledge" using deeplink navigation
        And the user select loan payment option and select date radio
        And the analytics interceptor service is initiated
        When the user confirm date
        Then the analytics events contains the following variables
            | item	                   | value	                                           | type         | event      |
            | analytics	               | analytics/glomo_base	                           | json schema  | App Step 2 |
            | version DL	           | 20250414_5.0	                                   | string	      | App Step 2 |
            | page instance ID         | de	                                               | string	      | App Step 2 |
            | sysEnv	               | app	                                           | string	      | App Step 2 |
            | page segment	           | personas	                                       | string	      | App Step 2 |
            | page intent	           | transaccion	                                   | string	      | App Step 2 |
            | business unit	           | BBVA Mexico	                                   | string	      | App Step 2 |
            | page area	               | privada	                                       | string	      | App Step 2 |
            | language	               | ES	                                               | string	      | App Step 2 |
            | channel	               | online	                                           | string	      | App Step 2 |
            | site app name	           | App BBVA Mexico	                               | string	      | App Step 2 |
            | project name	           | DIY Payments	                                   | string	      | App Step 2 |
            | level 1	               | compromiso de pago                                | string	      | App Step 2 |
            | level 2	               | 2 importe 	                                       | string	      | App Step 2 |
            | page name	               | app:privada:personas:compromiso de pago:2 importe | string	      | App Step 2 |
            | device mobile	           | si	                                               | string	      | App Step 2 |
            | user segment global	   | 003001	                                           | string	      | App Step 2 |
            | user userState	       | logado	                                           | string	      | App Step 2 |
            | profile ID               | profileID                                         | regexp named | App Step 2 |
            | user gender	           | gender	                                           | regexp named | App Step 2 |
            | user age 	               | 70	                                               | string	      | App Step 2 |
            | fulfillment model	       | online	                                           | string	      | App Step 2 |
            | application step	       | 2 importe         	                               | string	      | App Step 2 |
            | application name	       | compromiso de pago	                               | string	      | App Step 2 |
            | application type	       | operativa	                                       | string	      | App Step 2 |
            | global application	   | payment commitment	                               | string	      | App Step 2 |
            | product primary category | prestamos	                                       | string	      | App Step 2 |
            | internal campaign		   |                                                   | empty array  | App Step 2 |
            | optimization attributes  |                                                   | empty array  | App Step 2 |

    @ANA_EVENT_LPP005
    @analytics
    @web @ios @android
    @vbank @backend(test)
    @MX @web-done @spherica
    Scenario:  Analytics - Loans Payment Pledge - App Step 3
        Given a user with the following criteria
            | criteria                           |
            | loan payment pledge receipt amount |
        And the user accesses to dashboard
        And the user goes to "screen loans payment pledge" using deeplink navigation
        And the user select loan payment pledge option and select date
        And the analytics interceptor service is initiated
        When the user confirm amount
        Then the analytics events contains the following variables
            | item	                   | value	                                                | type          | event      |
            | analytics	               | analytics/glomo_base	                                | json schema   | App Step 3 |
            | version DL	           | 20250414_5.0	                                        | string	    | App Step 3 |
            | page instance ID         | de	                                                    | string	    | App Step 3 |
            | sysEnv	               | app	                                                | string	    | App Step 3 |
            | page segment	           | personas	                                            | string	    | App Step 3 |
            | page intent	           | transaccion	                                        | string	    | App Step 3 |
            | business unit	           | BBVA Mexico	                                        | string	    | App Step 3 |
            | page area	               | privada	                                            | string	    | App Step 3 |
            | language	               | ES	                                                    | string	    | App Step 3 |
            | channel	               | online	                                                | string	    | App Step 3 |
            | site app name	           | App BBVA Mexico	                                    | string	    | App Step 3 |
            | project name	           | DIY Payments	                                        | string	    | App Step 3 |
            | level 1	               | compromiso de pago                                     | string	    | App Step 3 |
            | level 2	               | 3 confirmacion       	                                | string	    | App Step 3 |
            | page name	               | app:privada:personas:compromiso de pago:3 confirmacion | string	    | App Step 3 |
            | device mobile	           | si	                                                    | string	    | App Step 3 |
            | user segment global	   | 003001	                                                | string	    | App Step 3 |
            | user userState	       | logado	                                                | string	    | App Step 3 |
            | profile ID               | profileID                                              | regexp named  | App Step 3 |
            | user gender	           | gender	                                                | regexp named  | App Step 3 |
            | user age 	               | 70	                                                    | string	    | App Step 3 |
            | fulfillment model	       | online	                                                | string	    | App Step 3 |
            | application step	       | 3 confirmacion         	                            | string	    | App Step 3 |
            | application name	       | compromiso de pago	                                    | string	    | App Step 3 |
            | application type	       | operativa	                                            | string	    | App Step 3 |
            | global application	   | payment commitment	                                    | string	    | App Step 3 |
            | product primary category | prestamos	                                            | string	    | App Step 3 |
            | internal campaign		   |                                                        | empty array   | App Step 3 |
            | optimization attributes  |                                                        | empty array   | App Step 3 |

    @ANA_EVENT_LPP006
    @analytics
    @web @ios @android
    @vbank @backend(test)
    @MX @web-done @spherica
    Scenario:  Analytics - Loans Payment Pledge - App Step Completed
        Given a user with the following criteria
            | criteria                           |
            | loan payment pledge receipt amount |
        And the user accesses to dashboard
        And the user goes to "screen loans payment pledge" using deeplink navigation
        And the user fill payment pledge form with "receipt amount" option
        And the analytics interceptor service is initiated
        When the user confirm payment pledge resume
        Then the analytics events contains the following variables
            | item	                   | value	                                                | type         | event         |
            | analytics	               | analytics/glomo_base	                                | json schema  | App Completed |
            | version DL	           | 20250414_5.0	                                        | string	   | App Completed |
            | page instance ID         | de	                                                    | string	   | App Completed |
            | sysEnv	               | app	                                                | string	   | App Completed |
            | page segment	           | personas	                                            | string	   | App Completed |
            | page intent	           | transaccion	                                        | string	   | App Completed |
            | business unit	           | BBVA Mexico	                                        | string	   | App Completed |
            | page area	               | privada	                                            | string	   | App Completed |
            | language	               | ES	                                                    | string	   | App Completed |
            | channel	               | online	                                                | string	   | App Completed |
            | site app name	           | App BBVA Mexico	                                    | string	   | App Completed |
            | project name	           | DIY Payments	                                        | string	   | App Completed |
            | level 1	               | compromiso de pago                                     | string	   | App Completed |
            | level 2	               | pagina exitosa    	                                    | string	   | App Completed |
            | page name	               | app:privada:personas:compromiso de pago:pagina exitosa | string	   | App Completed |
            | device mobile	           | si	                                                    | string	   | App Completed |
            | user segment global	   | 003001	                                                | string	   | App Completed |
            | user userState	       | logado	                                                | string	   | App Completed |
            | profile ID               | profileID                                              | regexp named | App Completed |
            | user gender	           | gender	                                                | regexp named | App Completed |
            | user age 	               | 70	                                                    | string	   | App Completed |
            | fulfillment model	       | online	                                                | string	   | App Completed |
            | application step	       | pagina exitosa       	                                | string	   | App Completed |
            | application state	       | finalizado           	                                | string	   | App Completed |
            | application name	       | compromiso de pago	                                    | string	   | App Completed |
            | application type	       | operativa	                                            | string	   | App Completed |
            | global application	   | payment commitment	                                    | string	   | App Completed |
            | product state            | finalizado	                                            | string	   | App Completed |
            | product amount           | 6611.27	                                            | string	   | App Completed |
            | product currency         | MXN	                                                | string	   | App Completed |
            | product payment date     | 20250626                                               | string	   | App Completed |
            | product name             | Consumir préstamo	                                    | string	   | App Completed |
            | product subtype          | CREDITON NOMINA C/SEGURO DE VIDA Y DESEMPLEO           | string	   | App Completed |
            | product primary category | prestamos	                                            | string	   | App Completed |
            | internal campaign		   |                                                        | empty array  | App Completed |
            | optimization attributes  |                                                        | empty array  | App Completed |

    @ANA_EVENT_LPP007
    @analytics
    @web @ios @android
    @vbank @backend(test)
    @MX @web-done @spherica
    Scenario:  Analytics - Loans Payment Pledge - Unavailable Information
        Given a user with the following criteria
            | criteria                           |
            | loan payment pledge receipt amount |
        And the user accesses to dashboard
        And the analytics interceptor service is initiated
        When the user goes to "screen loans payment pledge error" using deeplink navigation
        Then the analytics events contains the following variables
            | item	              | value	                                                                | type         | event     |
            | analytics	          | analytics/glomo_base	                                                | json schema  | Page View |
            | version DL	      | 20250414_5.0	                                                        | string	   | Page View |
            | page instance ID    | de	                                                                    | string	   | Page View |
            | sysEnv	          | app	                                                                    | string	   | Page View |
            | page segment	      | personas	                                                            | string	   | Page View |
            | page intent	      | transaccion	                                                            | string	   | Page View |
            | business unit	      | BBVA Mexico	                                                            | string	   | Page View |
            | page area	          | privada	                                                                | string	   | Page View |
            | language	          | ES	                                                                    | string	   | Page View |
            | channel	          | online	                                                                | string	   | Page View |
            | site app name	      | App BBVA Mexico	                                                        | string	   | Page View |
            | project name	      | DIY Payments	                                                        | string	   | Page View |
            | level 1	          | compromiso de pago                                                      | string	   | Page View |
            | level 2	          | error informacion no disponible    	                                    | string	   | Page View |
            | page name	          | app:privada:personas:compromiso de pago:error informacion no disponible | string	   | Page View |
            | device mobile	      | si	                                                                    | string	   | Page View |
            | user segment global | 003001	                                                                | string	   | Page View |
            | user userState	  | logado	                                                                | string	   | Page View |
            | profile ID          | profileID                                                               | regexp named | Page View |
            | user gender	      | gender	                                                                | regexp named | Page View |
            | user age 	          | 70	                                                                    | string	   | Page View |

    @ANA_EVENT_LPP008
    @analytics
    @web @ios @android
    @vbank @backend(test)
    @MX @web-done @spherica
    Scenario:  Analytics - Loans Payment Pledge - Unavailable Operation
        Given a user with the following criteria
            | criteria                           |
            | loan payment pledge receipt amount |
        And the user accesses to dashboard
        And the user goes to "screen loans payment pledge" using deeplink navigation
        And the user fill promise data with first date
        And the analytics interceptor service is initiated
        When the user confirm payment pledge resume
        Then the analytics events contains the following variables
            | item	              | value	                                                             | type         | event     |
            | analytics	          | analytics/glomo_base	                                             | json schema  | Page View |
            | version DL	      | 20250414_5.0	                                                     | string	    | Page View |
            | page instance ID    | de	                                                                 | string	    | Page View |
            | sysEnv	          | app	                                                                 | string	    | Page View |
            | page segment	      | personas	                                                         | string	    | Page View |
            | page intent	      | transaccion	                                                         | string	    | Page View |
            | business unit	      | BBVA Mexico	                                                         | string	    | Page View |
            | page area	          | privada	                                                             | string	    | Page View |
            | language	          | ES	                                                                 | string	    | Page View |
            | channel	          | online	                                                             | string	    | Page View |
            | site app name	      | App BBVA Mexico	                                                     | string	    | Page View |
            | project name	      | DIY Payments	                                                     | string	    | Page View |
            | level 1	          | compromiso de pago                                                   | string	    | Page View |
            | level 2	          | error operacion no realizada    	                                 | string	    | Page View |
            | page name	          | app:privada:personas:compromiso de pago:error operacion no realizada | string	    | Page View |
            | device mobile	      | si	                                                                 | string	    | Page View |
            | user segment global | 003001	                                                             | string	    | Page View |
            | user userState	  | logado	                                                             | string	    | Page View |
            | profile ID          | profileID                                                            | regexp named | Page View |
            | user gender	      | gender	                                                             | regexp named | Page View |
            | user age 	          | 70	                                                                 | string	    | Page View |

@cardlessWithdrawalAnalytics
Feature: Analytics Cardless Withdrawal

    @ANA_CW001
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: Cardless Withdrawal - Hoja informativa
        Given a user with the following criteria
            | criteria |
            | accounts |
            | multiple accounts |
            | cardless withdrawal |
            | success withdrawal |
        When the user accesses to option "cardless Withdrawal" operative
        Then the device contains the following variables
            | item              | value                                                            | type         |
            | page name         | app:privada:personas:cuentas:retiro sin tarjeta:hoja informativa | string       |
            | level 1           | cuentas                                                          | string       |
            | level 2           | retiro sin tarjeta                                               | string       |
            | level 3           | hoja informativa                                                 | string       |
            | language          | ES                                                               | string       |
            | page area         | privada                                                          | string       |
            | page intent       | informacion                                                      | string       |
            | channel           | online                                                           | string       |
            | page instance ID  | de                                                               | string       |
            | page info version | appVersion                                                       | regexp named |
            | page segment      | personas                                                         | string       |
            | site app name     | App BBVA Mexico                                                  | string       |
            | project name      | Glomo                                                            | string       |

    @ANA_CW002
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: Cardless Withdrawal - Page Visit - Paso 2 concepto
        Given a user with the following criteria
            | criteria            |
            | accounts            |
            | multiple accounts   |
            | cardless withdrawal |
            | success withdrawal  |
        And the user accesses to option "cardless Withdrawal" operative
        And the analytics interceptor service is initiated
        When the user select account and import
        Then the analytics events contains the following variables:
            | item                     | value                                                      | type         | event      |
            | page name                | app:privada:personas:cuentas:retiro sin tarjeta:2 concepto | string       | App Step 2 |
            | level 1                  | cuentas                                                    | string       | App Step 2 |
            | level 2                  | retiro sin tarjeta                                         | string       | App Step 2 |
            | level 3                  | 2 concepto                                                 | string       | App Step 2 |
            | language                 | ES                                                         | string       | App Step 2 |
            | page area                | privada                                                    | string       | App Step 2 |
            | page intent              | informacion                                                | string       | App Step 2 |
            | channel                  | online                                                     | string       | App Step 2 |
            | page instance ID         | de                                                         | string       | App Step 2 |
            | page info version        | appVersion                                                 | regexp named | App Step 2 |
            | page segment             | personas                                                   | string       | App Step 2 |
            | site app name            | App BBVA Mexico                                            | string       | App Step 2 |
            | project name             | Glomo                                                      | string       | App Step 2 |
            | global application       | cardless withdrawal                                        | string       | App Step 2 |
            | application name         | retiro sin tarjeta                                         | string       | App Step 2 |
            | application step         | 2 concepto                                                 | string       | App Step 2 |
            | product primary category | cuentas                                                    | string       | App Step 2 |
            | product amount           | Otro importe                                               | string       | App Step 2 |

    @ANA_CW003
    @analytics
    @MX @vbank @web-done @backend(test) @tmpExclude @JIRA.GLOMOMX-172850
    @web @ios @android
    Scenario: Cardless Withdrawal - Page Visit - Paso 3 confirmacion
        Given a user with the following criteria
            | criteria            |
            | common account      |
            | multiple accounts   |
            | success withdrawal  |
            | cardless withdrawal |
        And the user accesses the "account cardless withdrawal" screen
        And the user select an amount
        And the analytics interceptor service is initiated
        When the user enters a concept
        Then the analytics events contains the following variables:
            | item                     | value                                                          | type         |  event      |
            | page name                | app:privada:personas:cuentas:retiro sin tarjeta:3 confirmacion | string       |  App Step 3 |
            | level 1                  | cuentas                                                        | string       |  App Step 3 |
            | level 2                  | retiro sin tarjeta                                             | string       |  App Step 3 |
            | level 3                  | 3 confirmacion                                                 | string       |  App Step 3 |
            | language                 | ES                                                             | string       |  App Step 3 |
            | page area                | privada                                                        | string       |  App Step 3 |
            | page intent              | informacion                                                    | string       |  App Step 3 |
            | channel                  | online                                                         | string       |  App Step 3 |
            | page instance ID         | de                                                             | string       |  App Step 3 |
            | page info version        | appVersion                                                     | regexp named |  App Step 3 |
            | page segment             | personas                                                       | string       |  App Step 3 |
            | site app name            | App BBVA Mexico                                                | string       |  App Step 3 |
            | project name             | Glomo                                                          | string       |  App Step 3 |
            | global application       | cardless withdrawal                                            | string       |  App Step 3 |
            | application name         | retiro sin tarjeta                                             | string       |  App Step 3 |
            | application step         | 3 confirmacion                                                 | string       |  App Step 3 |
            | product primary category | cuentas                                                        | string       |  App Step 3 |
            | product amount           | 100                                                            | string       |  App Step 3 |

    @ANA_CW004
    @analytics
    @ios @android @web
    @backend(test) @MX @vbank
    @web-done @tmpExclude @JIRA.GLOMOMX-172850
    Scenario: App completed
        Given a user with the following criteria
            | criteria            |
            | common account      |
            | multiple accounts   |
            | success withdrawal  |
            | cardless withdrawal |
        And the user accesses the "account cardless withdrawal" screen
        And the user select an amount
        And the user enters a concept
        And the user continue with the withdrawal
        When the user continue with the OTP modal
        Then the device contains the following variables
            | item                     | value                                                          | type         |
            | page name                | app:privada:personas:cuentas:retiro sin tarjeta:pagina exitosa | string       |
            | level 1                  | cuentas                                                        | string       |
            | level 2                  | retiro sin tarjeta                                             | string       |
            | level 3                  | pagina exitosa                                                 | string       |
            | language                 | ES                                                             | string       |
            | page area                | privada                                                        | string       |
            | page intent              | informacion                                                    | string       |
            | channel                  | online                                                         | string       |
            | page instance ID         | de                                                             | string       |
            | page info version        | appVersion                                                     | regexp named |
            | page segment             | personas                                                       | string       |
            | site app name            | App BBVA Mexico                                                | string       |
            | project name             | Glomo                                                          | string       |
            | global application       | cardless withdrawal                                            | string       |
            | application name         | retiro sin tarjeta                                             | string       |
            | application step         | pagina exitosa                                                 | string       |
            | application state        | finalizado                                                     | string       |
            | product primary category | cuentas                                                        | string       |

    @ANA_CW005
    @MX @backend(test)
    @web @ios @android @web-done
    @manual @JIRA.GLOMOGL-31703
    Scenario: Internal Link generate qr to commerce
        Given a user with the following criteria
            | criteria            |
            | common account      |
            | multiple accounts   |
            | success withdrawal  |
            | cardless withdrawal |
        And the user accesses the "account cardless withdrawal" screen
        And the user select an amount
        And the user enters a concept
        And the user continue with the withdrawal
        And the user continue with the OTP modal
        When the user continue with a cardless withdrawal in a commerce
        Then the device contains the following variables
            | item                       | value                                                            | type              |
            | page name	                 |  app:privada:personas:cuentas:retiro sin tarjeta:pagina exitosa	| string            |
            | level 1	                 |  cuentas	                                                        | string            |
            | level 2	                 |  retiro sin tarjeta	                                            | string            |
            | level 3	                 |  pagina exitosa	                                                | string            |
            | link name	                 |  generar qr para comercio	                                    | string            |
            | language	                 |  ES	                                                            | string            |
            | page area	                 |  privada	                                                        | string            |
            | page intent	             |  transaccion	                                                    | string            |
            | channel	                 |  online	                                                        | string            |
            | page instance ID	         |  de	                                                            | string            |
            | version DL	             |  20250414_5.0	                                                | string            |
            | page info version	         |  appVersion	                                                    | regexp named      |
            | page segment	             |  personas	                                                    | string            |
            | sysEnv	                 |  app	                                                            | string            |
            | business unit	             |  BBVA Mexico	                                                    | string            |
            | site app name	             |  App BBVA Mexico	                                                | string            |
            | project name	             |  Glomo	                                                        | string            |
            | device mobile	             |  si	                                                            | string            |
            | user userState	         |  logado	                                                        | string            |
            | user segment global	     |  003005	                                                        | string            |
            | profile ID	             |  profileID	                                                    | regexp named      |
            | internal campaign		     |                                                                  | empty array       |
            | optimization attributes	 |                                                                  | empty array       |
            | application		         |                                                                  | empty str object  |
            | products attributes		 |                                                                  | empty array       |

    @ANA_CW006
    @MX @backend(test)
    @web @ios @android @web-done
    @manual @JIRA.GLOMOGL-31703
    Scenario: Footprint Qr to commerce
        Given a user with the following criteria
            | criteria            |
            | common account      |
            | multiple accounts   |
            | success withdrawal  |
            | cardless withdrawal |
        And the user accesses the "account cardless withdrawal" screen
        And the user select an amount
        And the user enters a concept
        And the user continue with the withdrawal
        And the user continue with the OTP modal
        When the user continue with a cardless withdrawal in a commerce
        Then the device contains the following variables
            | item                       | value                                                                                | type              |
            | page name	                 |  app:privada:personas:cuentas:retiro sin tarjeta:detalle:qr para comercio	        | string            |
            | level 1	                 |  cuentas	                                                                            | string            |
            | level 2	                 |  retiro sin tarjeta	                                                                | string            |
            | level 3	                 |  detalle	                                                                            | string            |
            | level 4	                 |  qr para comercio	                                                                | string            |
            | language	                 |  ES	                                                                                | string            |
            | page area	                 |  privada	                                                                            | string            |
            | page intent	             |  transaccion	                                                                        | string            |
            | channel	                 |  online	                                                                            | string            |
            | page instance ID	         |  de	                                                                                | string            |
            | version DL	             |  20250414_5.0	                                                                    | string            |
            | page info version	         |  appVersion	                                                                        | regexp named      |
            | page segment	             |  personas	                                                                        | string            |
            | sysEnv	                 |  app	                                                                                | string            |
            | business unit	             |  BBVA Mexico	                                                                        | string            |
            | site app name	             |  App BBVA Mexico	                                                                    | string            |
            | project name	             |  Glomo	                                                                            | string            |
            | device mobile	             |  si	                                                                                | string            |
            | user userState	         |  logado	                                                                            | string            |
            | user segment global	     |  003005	                                                                            | string            |
            | profile ID	             |  profileID	                                                                        | regexp named      |
            | internal campaign		     |                                                                                      | empty array       |
            | optimization attributes    |                                                                                      | empty array       |
            | application		         |                                                                                      | empty str object  |
            | products attributes		 |                                                                                      | empty array       |

    @ANA_CW007
    @analytics
    @ios @android @web
    @MX
    @vbank
    @web-done
    @backend(test)
    @spherica
    Scenario: Cardless Withdrawal Digital Card Activation Modal Analytics - Page View
        Given a user with the following criteria
            | criteria                      |
            | cardless withdrawal helvetica |
            | multiple accounts             |
            | status expired                |
        And the user accesses to dashboard
        And the user accesses to option "cardless withdrawal" operative
        And the user close modal
        And the analytics interceptor service is initiated
        When the user selects account on cardless withdrawal screen
        Then the analytics events contains the following variables:
            | item                    | value                                                                   | type             | event     |
            | page name	              | app:privada:personas:cuentas:retiro sin tarjeta:activar tarjeta digital | string           | Page View |
            | level 1	              | cuentas	                                                                | string           | Page View |
            | level 2	              | retiro sin tarjeta	                                                    | string           | Page View |
            | level 3	              | activar tarjeta digital	                                                | string           | Page View |
            | language	              | ES	                                                                    | string           | Page View |
            | page area	              | privada	                                                                | string           | Page View |
            | page intent	          | informacion	                                                            | string           | Page View |
            | channel	              | online	                                                                | string           | Page View |
            | page instance ID	      | de	                                                                    | string           | Page View |
            | version DL	          | 20250414_5.0	                                                        | string           | Page View |
            | page info version	      | appVersion	                                                            | regexp named     | Page View |
            | page segment	          | personas	                                                            | string           | Page View |
            | sysEnv	              | app	                                                                    | string           | Page View |
            | business unit	          | BBVA Mexico	                                                            | string           | Page View |
            | site app name	          | App BBVA Mexico	                                                        | string           | Page View |
            | project name	          | Glomo	                                                                | string           | Page View |
            | device mobile	          | si	                                                                    | string           | Page View |
            | user userState	      | logado	                                                                | string           | Page View |
            | user segment global	  | 003001	                                                                | string           | Page View |
            | profile ID	          | profileID	                                                            | regexp named     | Page View |
            | user gender             | gender                                                                  | regexp named     | Page View |
            | user age                | age                                                                     | regexp named     | Page View |
            | internal campaign		  |                                                                         | empty array      | Page View |
            | optimization attributes |                                                                         | empty array      | Page View |
            | application		      |                                                                         | empty str object | Page View |
            | products attributes     |                                                                         | empty array      | Page View |

    @ANA_CW008
    @MX
    @analytics
    @vbank @backend(test)
    @ios @android @web
    @web-done
    @spherica
    Scenario: Fraud Movement Error - App Completed
        Given a user with the following criteria
            | criteria            |
            | aric fraud error    |
        And the user accesses to option "cardless Withdrawal" operative
        And the analytics interceptor service is initiated
        When the user does not complete the cardless withdrawal due to a fraud error
        Then the analytics events contains the following variables:
            | item                          | value                                                          | type         | event         |
            | analytics                     | analytics/glomo_base                                           | json schema  | App Completed |
            | version DL                    | 20250414_5.0                                                   | string       | App Completed |
            | page name                     | app:privada:personas:cuentas:retiro sin tarjeta:pagina exitosa | string       | App Completed |
            | level 1                       | cuentas                                                        | string       | App Completed |
            | level 2                       | retiro sin tarjeta                                             | string       | App Completed |
            | level 3                       | pagina exitosa                                                 | string       | App Completed |
            | language                      | ES                                                             | string       | App Completed |
            | page area                     | privada                                                        | string       | App Completed |
            | page intent                   | informacion                                                    | string       | App Completed |
            | channel                       | online                                                         | string       | App Completed |
            | page instance ID              | de                                                             | string       | App Completed |
            | page info version             | appVersion                                                     | regexp named | App Completed |
            | page segment                  | personas                                                       | string       | App Completed |
            | sysEnv                        | app                                                            | string       | App Completed |
            | business unit                 | BBVA Mexico                                                    | string       | App Completed |
            | site app name                 | App BBVA Mexico                                                | string       | App Completed |
            | project name                  | Glomo                                                          | string       | App Completed |
            | device mobile                 | si                                                             | string       | App Completed |
            | user userState                | logado                                                         | string       | App Completed |
            | profile ID                    | profileID                                                      | regexp named | App Completed |
            | user segment global           | 003001                                                         | string       | App Completed |
            | user gender                   | gender                                                         | regexp named | App Completed |
            | user age                      | age                                                            | regexp named | App Completed |
            | user segment profile	        | rechazado por posible fraude del movimiento                    | string	    | App Completed |
            | global application            | cardless withdrawal                                            | string       | App Completed |
            | application name              | retiro sin tarjeta                                             | string       | App Completed |
            | application type              | operativa                                                      | string       | App Completed |
            | application step              | pagina exitosa                                                 | string       | App Completed |
            | fulfillment model             | online                                                         | string       | App Completed |
            | application state             | en revision                                                    | string       | App Completed |
            | custom fields                 | firma:token                                                    | string       | App Completed |
            | product primary category      | cuentas                                                        | string       | App Completed |
            | product amount                | 2000                                                           | number       | App Completed |
            | product currency              | MXN                                                            | string       | App Completed |
            | internal campaign             |                                                                | empty array  | App Completed |
            | optimization attributes       |                                                                | empty array  | App Completed |

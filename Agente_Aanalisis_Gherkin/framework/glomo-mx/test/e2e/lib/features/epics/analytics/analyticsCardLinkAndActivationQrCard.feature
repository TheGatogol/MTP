@analyticsCardLinkAndActivationQrCard
Feature: Analytics - Card Link And Activation Qr Card

    @ANA_EVENT_CAM001
    @analytics
    @MX
    @web
    @vbank
    @backend(test)
    @ios
    @android
    @web-done
    Scenario: App On Click Start - Validate the link to activate the card
        Given a user with the following criteria
            | criteria           |
            | qr card activation |
        And the user accesses to card detail
        And the analytics interceptor service is initiated
        When the user accesses to card link activation
        Then the analytics events contains the following variables
            | item	                   | value	                              | type         | event              |
            | analytics	               | analytics/glomo_base	              | json schema  | App On Click Start |
            | version DL               | 20250414_5.0	                      | string       | App On Click Start |
            | page name	               | app:privada:personas:cuentas:detalle | string       | App On Click Start |
            | level 1	               | cuentas                              | string       | App On Click Start |
            | level 2	               | detalle                              | string       | App On Click Start |
            | language	               | ES                                   | string       | App On Click Start |
            | page area	               | privada                              | string       | App On Click Start |
            | page intent              | informacion                          | string       | App On Click Start |
            | channel                  | online                               | string       | App On Click Start |
            | page instance ID         | de                                   | string       | App On Click Start |
            | page info version        | appVersion                           | regexp named | App On Click Start |
            | page segment             | personas                             | string       | App On Click Start |
            | sysEnv	               | app                                  | string       | App On Click Start |
            | business unit	           | BBVA Mexico                          | string       | App On Click Start |
            | site app name	           | App BBVA Mexico                      | string       | App On Click Start |
            | project name	           | Glomo                                | string       | App On Click Start |
            | device mobile	           | si                                   | string       | App On Click Start |
            | user userState	       | logado                               | string       | App On Click Start |
            | user segment global      | 003001                               | string       | App On Click Start |
            | profile ID	           | profileID                            | regexp named | App On Click Start |
            | user gender	           | gender                               | regexp named | App On Click Start |
            | user age	               | age                                  | regexp named | App On Click Start |
            | global application       | card activation qr                   | string       | App On Click Start |
            | application name         | activar tdd qr                       | string       | App On Click Start |
            | application type         | operativa                            | string       | App On Click Start |
            | application step         | activar tarjeta                      | string       | App On Click Start |
            | fulfillment model        | online                               | string       | App On Click Start |
            | product primary category | cuentas                              | string       | App On Click Start |
            | product name             | cuenta nomina                        | string       | App On Click Start |
            | internal campaign        |                                      | empty array  | App On Click Start |
            | optimization attributes  |                                      | empty array  | App On Click Start |

    @ANA_EVENT_CAM002
    @analytics
    @MX
    @web
    @vbank
    @backend(test)
    @ios
    @android
    @web-done
    Scenario: App Page Visit - Validate the link to activate the card
        Given a user with the following criteria
            | criteria           |
            | qr card activation |
        And the user accesses to card detail
        And the analytics interceptor service is initiated
        When the user accesses to card link activation
        Then the analytics events contains the following variables
            | item	                   | value	                                                       | type         | event          |
            | analytics	               | analytics/glomo_base	                                       | json schema  | App Page Visit |
            | version DL               | 20250414_5.0	                                               | string       | App Page Visit |
            | page name	               | app:privada:personas:cuentas:activar tdd qr:1 activar tarjeta | string       | App Page Visit |
            | level 1	               | cuentas                                                       | string       | App Page Visit |
            | level 2	               | activar tdd qr                                                | string       | App Page Visit |
            | level 3	               | 1 activar tarjeta                                             | string       | App Page Visit |
            | language	               | ES                                                            | string       | App Page Visit |
            | page area	               | privada                                                       | string       | App Page Visit |
            | page intent              | transaccion                                                   | string       | App Page Visit |
            | channel                  | online                                                        | string       | App Page Visit |
            | page instance ID         | de                                                            | string       | App Page Visit |
            | page info version        | appVersion                                                    | regexp named | App Page Visit |
            | page segment             | personas                                                      | string       | App Page Visit |
            | sysEnv	               | app                                                           | string       | App Page Visit |
            | business unit	           | BBVA Mexico                                                   | string       | App Page Visit |
            | site app name	           | App BBVA Mexico                                               | string       | App Page Visit |
            | project name	           | Glomo                                                         | string       | App Page Visit |
            | device mobile	           | si                                                            | string       | App Page Visit |
            | user userState	       | logado                                                        | string       | App Page Visit |
            | user segment global      | 003001                                                        | string       | App Page Visit |
            | profile ID	           | profileID                                                     | regexp named | App Page Visit |
            | user gender	           | gender                                                        | regexp named | App Page Visit |
            | user age	               | age                                                           | regexp named | App Page Visit |
            | global application       | card activation qr                                            | string       | App Page Visit |
            | application name         | activar tdd qr                                                | string       | App Page Visit |
            | application type         | operativa                                                     | string       | App Page Visit |
            | application step         | 1 activar tarjeta                                             | string       | App Page Visit |
            | fulfillment model        | online                                                        | string       | App Page Visit |
            | product primary category | cuentas                                                       | string       | App Page Visit |
            | product name             | cuenta nomina                                                 | string       | App Page Visit |
            | internal campaign        |                                                               | empty array  | App Page Visit |
            | optimization attributes  |                                                               | empty array  | App Page Visit |

    @ANA_EVENT_CAM003
    @analytics
    @MX
    @web
    @vbank
    @backend(test)
    @ios
    @android
    @web-done
    Scenario: App Started - Validate that the user accesses the more information modal
        Given a user with the following criteria
            | criteria           |
            | qr card activation |
        And the user accesses to card link activation
        And the analytics interceptor service is initiated
        When the user accesses the information section
        Then the analytics events contains the following variables
            | item	                   | value	                                                       | type         | event       |
            | analytics	               | analytics/glomo_base	                                       | json schema  | App Started |
            | version DL               | 20250414_5.0	                                               | string       | App Started |
            | page name	               | app:privada:personas:cuentas:activar tdd qr:1 activar tarjeta | string       | App Started |
            | level 1	               | cuentas                                                       | string       | App Started |
            | level 2	               | activar tdd qr                                                | string       | App Started |
            | level 3	               | 1 activar tarjeta                                             | string       | App Started |
            | language	               | ES                                                            | string       | App Started |
            | page area	               | privada                                                       | string       | App Started |
            | page intent              | transaccion                                                   | string       | App Started |
            | channel                  | online                                                        | string       | App Started |
            | page instance ID         | de                                                            | string       | App Started |
            | page info version        | appVersion                                                    | regexp named | App Started |
            | page segment             | personas                                                      | string       | App Started |
            | sysEnv	               | app                                                           | string       | App Started |
            | business unit	           | BBVA Mexico                                                   | string       | App Started |
            | site app name	           | App BBVA Mexico                                               | string       | App Started |
            | project name	           | Glomo                                                         | string       | App Started |
            | device mobile	           | si                                                            | string       | App Started |
            | user userState	       | logado                                                        | string       | App Started |
            | user segment global      | 003001                                                        | string       | App Started |
            | profile ID	           | profileID                                                     | regexp named | App Started |
            | user gender	           | gender                                                        | regexp named | App Started |
            | user age	               | age                                                           | regexp named | App Started |
            | global application       | card activation qr                                            | string       | App Started |
            | application name         | activar tdd qr                                                | string       | App Started |
            | application type         | operativa                                                     | string       | App Started |
            | application step         | mas informacion                                               | string       | App Started |
            | fulfillment model        | online                                                        | string       | App Started |
            | product primary category | cuentas                                                       | string       | App Started |
            | product name             | cuenta nomina                                                 | string       | App Started |
            | internal campaign        |                                                               | empty array  | App Started |
            | optimization attributes  |                                                               | empty array  | App Started |

    @ANA_EVENT_CAM004
    @manual @JIRA.GLOMOGL-31703
    @analytics
    @MX
    @web
    @!vbank
    @backend(test)
    @ios
    @android
    Scenario: App Completed - Validate that the user can perform a successful activation
        Given a user with the following criteria
            | criteria           |
            | qr card activation |
        And the user accesses to card link activation
        And the analytics interceptor service is initiated
        When the user scans and attempts to activate her card
        Then the analytics events contains the following variables
            | item	                   | value	                                                       | type         | event         |
            | analytics	               | analytics/glomo_base	                                       | json schema  | App Completed |
            | version DL               | 20250414_5.0	                                               | string       | App Completed |
            | page name	               | app:privada:personas:cuentas:activar tdd qr:1 activar tarjeta | string       | App Completed |
            | level 1	               | cuentas                                                       | string       | App Completed |
            | level 2	               | activar tdd qr                                                | string       | App Completed |
            | level 3	               | pagina exitosa                                                | string       | App Completed |
            | language	               | ES                                                            | string       | App Completed |
            | page area	               | privada                                                       | string       | App Completed |
            | page intent              | transaccion                                                   | string       | App Completed |
            | channel                  | online                                                        | string       | App Completed |
            | page instance ID         | de                                                            | string       | App Completed |
            | page info version        | appVersion                                                    | regexp named | App Completed |
            | page segment             | personas                                                      | string       | App Completed |
            | sysEnv	               | app                                                           | string       | App Completed |
            | business unit	           | BBVA Mexico                                                   | string       | App Completed |
            | site app name	           | App BBVA Mexico                                               | string       | App Completed |
            | project name	           | Glomo                                                         | string       | App Completed |
            | device mobile	           | si                                                            | string       | App Completed |
            | user userState	       | logado                                                        | string       | App Completed |
            | user segment global      | 003001                                                        | string       | App Completed |
            | profile ID	           | profileID                                                     | regexp named | App Completed |
            | user gender	           | gender                                                        | regexp named | App Completed |
            | user age	               | age                                                           | regexp named | App Completed |
            | global application       | card activation qr                                            | string       | App Completed |
            | application name         | activar tdd qr                                                | string       | App Completed |
            | application type         | operativa                                                     | string       | App Completed |
            | application step         | pagina exitosa                                                | string       | App Completed |
            | application state        | finalizado                                                    | string       | App Completed |
            | fulfillment model        | online                                                        | string       | App Completed |
            | product primary category | cuentas                                                       | string       | App Completed |
            | product name             | cuenta nomina                                                 | string       | App Completed |
            | product state            | finalizado                                                    | string       | App Completed |
            | internal campaign        |                                                               | empty array  | App Completed |
            | optimization attributes  |                                                               | empty array  | App Completed |

    @ANA_EVENT_CAM005
    @analytics
    @MX
    @web
    @vbank
    @backend(test)
    @ios
    @android
    @web-done
    Scenario: Page View - Validate that the user accesses the more information modal
        Given a user with the following criteria
            | criteria           |
            | qr card activation |
        And the user accesses to card link activation
        And the analytics interceptor service is initiated
        When the user accesses the information section
        Then the analytics events contains the following variables
            | item	                  | value	                                                    | type         | event     |
            | analytics	              | analytics/glomo_base	                                    | json schema  | Page View |
            | version DL              | 20250414_5.0	                                            | string       | Page View |
            | page name	              | app:privada:personas:cuentas:activar tdd qr:mas informacion | string       | Page View |
            | level 1	              | cuentas                                                     | string       | Page View |
            | level 2	              | activar tdd qr                                              | string       | Page View |
            | level 3	              | mas informacion                                             | string       | Page View |
            | language	              | ES                                                          | string       | Page View |
            | page area	              | privada                                                     | string       | Page View |
            | page intent             | transaccion                                                 | string       | Page View |
            | channel                 | online                                                      | string       | Page View |
            | page instance ID        | de                                                          | string       | Page View |
            | page info version       | appVersion                                                  | regexp named | Page View |
            | page segment            | personas                                                    | string       | Page View |
            | sysEnv	              | app                                                         | string       | Page View |
            | business unit	          | BBVA Mexico                                                 | string       | Page View |
            | site app name	          | App BBVA Mexico                                             | string       | Page View |
            | project name	          | Glomo                                                       | string       | Page View |
            | device mobile	          | si                                                          | string       | Page View |
            | user userState	      | logado                                                      | string       | Page View |
            | user segment global     | 003001                                                      | string       | Page View |
            | profile ID	          | profileID                                                   | regexp named | Page View |
            | user gender	          | gender                                                      | regexp named | Page View |
            | user age	              | age                                                         | regexp named | Page View |
            | internal campaign       |                                                             | empty array  | Page View |
            | optimization attributes |                                                             | empty array  | Page View |

    @ANA_EVENT_CAM006
    @analytics
    @MX
    @web
    @vbank
    @backend(test)
    @ios
    @android
    @web-done
    Scenario: Internal Link - Validate that the user accesses the details of a frequently asked question
        Given a user with the following criteria
            | criteria           |
            | qr card activation |
        And the user accesses to card link activation
        And the user accesses the information section
        And the analytics interceptor service is initiated
        When the user accesses the question about "card without numbers"
        Then the analytics events contains the following variables
            | item	                  | value	                                         | type         | event         |
            | analytics	              | analytics/glomo_base	                         | json schema  | Internal Link |
            | version DL              | 20250414_5.0	                                 | string       | Internal Link |
            | page name	              | app:privada:personas:cuentas:activar tdd qr:faqs | string       | Internal Link |
            | level 1	              | cuentas                                          | string       | Internal Link |
            | level 2	              | activar tdd qr                                   | string       | Internal Link |
            | level 3	              | faqs                                             | string       | Internal Link |
            | link name	              | que es una tarjeta sin numeros                   | string       | Internal Link |
            | language	              | ES                                               | string       | Internal Link |
            | page area	              | privada                                          | string       | Internal Link |
            | page intent             | transaccion                                      | string       | Internal Link |
            | channel                 | online                                           | string       | Internal Link |
            | page instance ID        | de                                               | string       | Internal Link |
            | page info version       | appVersion                                       | regexp named | Internal Link |
            | page segment            | personas                                         | string       | Internal Link |
            | sysEnv	              | app                                              | string       | Internal Link |
            | business unit	          | BBVA Mexico                                      | string       | Internal Link |
            | site app name	          | App BBVA Mexico                                  | string       | Internal Link |
            | project name	          | Glomo                                            | string       | Internal Link |
            | device mobile	          | si                                               | string       | Internal Link |
            | user userState	      | logado                                           | string       | Internal Link |
            | user segment global     | 003001                                           | string       | Internal Link |
            | profile ID	          | profileID                                        | regexp named | Internal Link |
            | user gender	          | gender                                           | regexp named | Internal Link |
            | user age	              | age                                              | regexp named | Internal Link |
            | internal campaign       |                                                  | empty array  | Internal Link |
            | optimization attributes |                                                  | empty array  | Internal Link |

    @ANA_EVENT_CAM007
    @manual @JIRA.GLOMOGL-31703
    @analytics
    @MX
    @web
    @!vbank
    @backend(test)
    @ios
    @android
    Scenario: Page View - Validate that the user displays error modal when the card cannot be activated
        Given a user with the following criteria
            | criteria           |
            | qr card activation |
        And the user accesses to card link activation
        And the analytics interceptor service is initiated
        When the user scans and attempts to activate her card
        Then the analytics events contains the following variables
            | item	                  | value	                                                                  | type         | event     |
            | analytics	              | analytics/glomo_base	                                                  | json schema  | Page View |
            | version DL              | 20250414_5.0	                                                          | string       | Page View |
            | page name	              | app:privada:personas:cuentas:activar tdd qr:error activacion no realizada | string       | Page View |
            | level 1	              | cuentas                                                                   | string       | Page View |
            | level 2	              | activar tdd qr                                                            | string       | Page View |
            | level 3	              | error activacion no realizada                                             | string       | Page View |
            | erro page	              | error activacion no realizada                                             | string       | Page View |
            | language	              | ES                                                                        | string       | Page View |
            | page area	              | privada                                                                   | string       | Page View |
            | page intent             | transaccion                                                               | string       | Page View |
            | channel                 | online                                                                    | string       | Page View |
            | page instance ID        | de                                                                        | string       | Page View |
            | page info version       | appVersion                                                                | regexp named | Page View |
            | page segment            | personas                                                                  | string       | Page View |
            | sysEnv	              | app                                                                       | string       | Page View |
            | business unit	          | BBVA Mexico                                                               | string       | Page View |
            | site app name	          | App BBVA Mexico                                                           | string       | Page View |
            | project name	          | Glomo                                                                     | string       | Page View |
            | device mobile	          | si                                                                        | string       | Page View |
            | user userState	      | logado                                                                    | string       | Page View |
            | user segment global     | 003001                                                                    | string       | Page View |
            | profile ID	          | profileID                                                                 | regexp named | Page View |
            | user gender	          | gender                                                                    | regexp named | Page View |
            | user age	              | age                                                                       | regexp named | Page View |
            | internal campaign       |                                                                           | empty array  | Page View |
            | optimization attributes |                                                                           | empty array  | Page View |

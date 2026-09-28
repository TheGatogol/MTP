@PointsRedeemPurchasesByCampaignsAnalytics
Feature: Analytics - Points Redeem Purchases By Campaigns

    @ANA_EVENT_PRPBC001
    @analytics
    @ios @android @web @web-done
    @MX @backend(test) @vbank
    Scenario: Points Redeem Purchases By Campaigns - App On Click Start
        Given a user with the following criteria
            | criteria                              |
            | points redeem purchases by campaign   |
        And the user accesses center notification
        And the analytics interceptor service is initiated
        When the user accesses the pay with points detail notification
        Then the analytics events contains the following variables
            | item                     | value                                                                                      | type         | event          |
            | analytics	               | analytics/glomo_base	                                                                    | json schema  | App On Click Start |
            | version DL	           | 20250414_5.0	                                                                            | string       | App On Click Start |
            | page name	               | app:privada:personas:notificaciones:detalle                                                | string       | App On Click Start |
            | level 1	               | notificaciones     	                                                                    | string       | App On Click Start |
            | level 2	               | detalle    	                                                                            | string       | App On Click Start |
            | language	               | ES	                                                                                        | string       | App On Click Start |
            | page area	               | privada	                                                                                | string       | App On Click Start |
            | page intent	           | informacion	                                                                            | string       | App On Click Start |
            | channel	               | online	                                                                                    | string       | App On Click Start |
            | page instance ID	       | de	                                                                                        | string       | App On Click Start |
            | page info version	       | appVersion	                                                                                | regexp named | App On Click Start |
            | page segment	           | personas	                                                                                | string       | App On Click Start |
            | sysEnv	               | app	                                                                                    | string       | App On Click Start |
            | business unit	           | BBVA Mexico	                                                                            | string       | App On Click Start |
            | site app name	           | App BBVA Mexico	                                                                        | string       | App On Click Start |
            | project name	           | Rewards	                                                                                | string       | App On Click Start |
            | device mobile	           | si	                                                                                        | string       | App On Click Start |
            | user userState	       | logado	                                                                                    | string       | App On Click Start |
            | user segment global      | 003001	                                                                                    | string       | App On Click Start |
            | profile ID	           | profileID	                                                                                | regexp named | App On Click Start |
            | user gender	           | gender	                                                                                    | regexp named | App On Click Start |
            | user age	               | age	                                                                                    | regexp named | App On Click Start |
            | global application       | loyalty points redeem                                                                      | string       | App On Click Start |
            | application name         | usar mis puntos promocion                                                                  | string       | App On Click Start |
            | application offer        | tus puntos valen doble                                                                     | string       | App On Click Start |
            | application type         | operativa                                                                                  | string       | App On Click Start |
            | application step         | detalle                                                                                    | string       | App On Click Start |
            | fulfillment model        | online                                                                                     | string       | App On Click Start |

    @ANA_EVENT_PRPBC002
    @analytics
    @ios @android @web @web-done
    @MX @backend(test) @vbank
    Scenario: Points Redeem Purchases By Campaigns - Page Visit
        Given a user with the following criteria
            | criteria                              |
            | points redeem purchases by campaign   |
        And the user accesses center notification
        And the analytics interceptor service is initiated
        When the user accesses the pay with points detail notification
        Then the analytics events contains the following variables
            | item                     | value                                                                                      | type         | event          |
            | analytics	               | analytics/glomo_base	                                                                    | json schema  | App Page Visit |
            | version DL	           | 20250414_5.0	                                                                            | string       | App Page Visit |
            | page name	               | app:privada:personas:puntos y promociones:puntos bbva:usar mis puntos promocion:1 resumen  | string       | App Page Visit |
            | level 1	               | puntos y promociones	                                                                    | string       | App Page Visit |
            | level 2	               | puntos bbva	                                                                            | string       | App Page Visit |
            | level 3	               | usar mis puntos promocion	                                                                | string       | App Page Visit |
            | level 4	               | 1 resumen	                                                                                | string       | App Page Visit |
            | language	               | ES	                                                                                        | string       | App Page Visit |
            | page area	               | privada	                                                                                | string       | App Page Visit |
            | page intent	           | transaccion	                                                                            | string       | App Page Visit |
            | channel	               | online	                                                                                    | string       | App Page Visit |
            | page instance ID	       | de	                                                                                        | string       | App Page Visit |
            | page info version	       | appVersion	                                                                                | regexp named | App Page Visit |
            | page segment	           | personas	                                                                                | string       | App Page Visit |
            | sysEnv	               | app	                                                                                    | string       | App Page Visit |
            | business unit	           | BBVA Mexico	                                                                            | string       | App Page Visit |
            | site app name	           | App BBVA Mexico	                                                                        | string       | App Page Visit |
            | project name	           | Rewards	                                                                                | string       | App Page Visit |
            | device mobile	           | si	                                                                                        | string       | App Page Visit |
            | user userState	       | logado	                                                                                    | string       | App Page Visit |
            | user segment global      | 003001	                                                                                    | string       | App Page Visit |
            | profile ID	           | profileID	                                                                                | regexp named | App Page Visit |
            | user gender	           | gender	                                                                                    | regexp named | App Page Visit |
            | user age	               | age	                                                                                    | regexp named | App Page Visit |
            | global application       | loyalty points redeem                                                                      | string       | App Page Visit |
            | application name         | usar mis puntos promocion                                                                  | string       | App Page Visit |
            | application offer        | tus puntos valen doble                                                                     | string       | App Page Visit |
            | application type         | operativa                                                                                  | string       | App Page Visit |
            | application step         | 1 resumen                                                                                  | string       | App Page Visit |
            | application state        | inicio                                                                                     | string       | App Page Visit |
            | fulfillment model        | online                                                                                     | string       | App Page Visit |
            | application typology     | na guara coffee                                                                             | string       | App Page Visit |
            | product primary category | tarjetas                                                                                   | string       | App Page Visit |
            | product subtype          |                                                                                            | string       | App Page Visit |
            | product name             |                                                                                            | string       | App Page Visit |

    @ANA_EVENT_PRPBC003
    @analytics
    @ios @android @web @web-done
    @MX @backend(test) @vbank
    Scenario: Points Redeem Purchases By Campaigns - App Started Modal
        Given a user with the following criteria
            | criteria                              |
            | points redeem purchases by campaign   |
        And the user accesses center notification
        And the user accesses the pay with points detail notification
        And the analytics interceptor service is initiated
        When the user opens the "show details" modal for a "posted" transaction
        Then the analytics events contains the following variables
            | item                     | value                                                                                        | type         | event       |
            | analytics	               | analytics/glomo_base	                                                                      | json schema  | App Started |
            | version DL	           | 20250414_5.0	                                                                              | string       | App Started |
            | page name	               | app:privada:personas:puntos y promociones:puntos bbva:usar mis puntos promocion:1 resumen    | string       | App Started |
            | level 1	               | puntos y promociones	                                                                      | string       | App Started |
            | level 2	               | puntos bbva	                                                                              | string       | App Started |
            | level 3	               | usar mis puntos promocion	                                                                  | string       | App Started |
            | level 4	               | 1 resumen	                                                                                  | string       | App Started |
            | language	               | ES	                                                                                          | string       | App Started |
            | page area	               | privada	                                                                                  | string       | App Started |
            | page intent	           | transaccion	                                                                              | string       | App Started |
            | channel	               | online	                                                                                      | string       | App Started |
            | page instance ID	       | de	                                                                                          | string       | App Started |
            | page info version	       | appVersion	                                                                                  | regexp named | App Started |
            | page segment	           | personas	                                                                                  | string       | App Started |
            | sysEnv	               | app	                                                                                      | string       | App Started |
            | business unit	           | BBVA Mexico	                                                                              | string       | App Started |
            | site app name	           | App BBVA Mexico	                                                                          | string       | App Started |
            | project name	           | Rewards	                                                                                  | string       | App Started |
            | device mobile	           | si	                                                                                          | string       | App Started |
            | user userState	       | logado	                                                                                      | string       | App Started |
            | user segment global      | 003001	                                                                                      | string       | App Started |
            | profile ID	           | profileID	                                                                                  | regexp named | App Started |
            | user gender	           | gender	                                                                                      | regexp named | App Started |
            | user age	               | age	                                                                                      | regexp named | App Started |
            | global application       | loyalty points redeem                                                                        | string       | App Started |
            | application name         | usar mis puntos promocion                                                                    | string       | App Started |
            | application offer        | tus puntos valen doble                                                                       | string       | App Started |
            | application type         | operativa                                                                                    | string       | App Started |
            | application step         | mostrar detalles                                                                             | string       | App Started |
            | fulfillment model        | online                                                                                       | string       | App Started |
            | application typology     | na guara coffee                                                                              | string       | App Started |
            | product primary category | tarjetas                                                                                     | string       | App Started |
            | product subtype          |                                                                                              | string       | App Started |
            | product name             |                                                                                              | string       | App Started |

    @ANA_EVENT_PRPBC004
    @analytics
    @ios @android @web @web-done
    @MX @backend(test) @vbank
    Scenario: Points Redeem Purchases By Campaigns - App Started Pay With Points
        Given a user with the following criteria
            | criteria                                                    |
            | points redeem purchases by campaign with transit purchase   |
        And the user accesses center notification
        And the user accesses the pay with points detail notification
        And the analytics interceptor service is initiated
        When the user completes a payment with points for a "posted" transaction
        Then the analytics events contains the following variables
            | item                     | value                                                                                        | type         | event       |
            | analytics	               | analytics/glomo_base	                                                                      | json schema  | App Started |
            | version DL	           | 20250414_5.0	                                                                              | string       | App Started |
            | page name	               | app:privada:personas:puntos y promociones:puntos bbva:usar mis puntos promocion:1 resumen    | string       | App Started |
            | level 1	               | puntos y promociones	                                                                      | string       | App Started |
            | level 2	               | puntos bbva	                                                                              | string       | App Started |
            | level 3	               | usar mis puntos promocion	                                                                  | string       | App Started |
            | level 4	               | 1 resumen	                                                                                  | string       | App Started |
            | language	               | ES	                                                                                          | string       | App Started |
            | page area	               | privada	                                                                                  | string       | App Started |
            | page intent	           | transaccion	                                                                              | string       | App Started |
            | channel	               | online	                                                                                      | string       | App Started |
            | page instance ID	       | de	                                                                                          | string       | App Started |
            | page info version	       | appVersion	                                                                                  | regexp named | App Started |
            | page segment	           | personas	                                                                                  | string       | App Started |
            | sysEnv	               | app	                                                                                      | string       | App Started |
            | business unit	           | BBVA Mexico	                                                                              | string       | App Started |
            | site app name	           | App BBVA Mexico	                                                                          | string       | App Started |
            | project name	           | Rewards	                                                                                  | string       | App Started |
            | device mobile	           | si	                                                                                          | string       | App Started |
            | user userState	       | logado	                                                                                      | string       | App Started |
            | user segment global      | 003001	                                                                                      | string       | App Started |
            | profile ID	           | profileID	                                                                                  | regexp named | App Started |
            | user gender	           | gender	                                                                                      | regexp named | App Started |
            | user age	               | age	                                                                                      | regexp named | App Started |
            | global application       | loyalty points redeem                                                                        | string       | App Started |
            | application name         | usar mis puntos promocion                                                                    | string       | App Started |
            | application offer        | tus puntos valen doble                                                                       | string       | App Started |
            | application type         | operativa                                                                                    | string       | App Started |
            | application step         | pagar con puntos                                                                             | string       | App Started |
            | fulfillment model        | online                                                                                       | string       | App Started |
            | application typology     | na guara coffee                                                                              | string       | App Started |
            | product primary category | tarjetas                                                                                     | string       | App Started |
            | product subtype          |                                                                                              | string       | App Started |
            | product name             |                                                                                              | string       | App Started |

    @ANA_EVENT_PRPBC005
    @analytics
    @ios @android @web @web-done
    @MX @backend(test) @vbank
    Scenario: Points Redeem Purchases By Campaigns - App Completed
        Given a user with the following criteria
            | criteria                                                    |
            | points redeem purchases by campaign with transit purchase   |
        And the user accesses center notification
        And the user accesses the pay with points detail notification
        And the analytics interceptor service is initiated
        When the user completes a payment with points for a "posted" transaction
        Then the analytics events contains the following variables
            | item                     | value                                                                                      | type         | event         |
            | analytics	               | analytics/glomo_base	                                                                    | json schema  | App Completed |
            | version DL	           | 20250414_5.0	                                                                            | string       | App Completed |
            | page name	               | app:privada:personas:puntos y promociones:puntos bbva:usar mis puntos promocion:pagina exitosa  | string       | App Completed |
            | level 1	               | puntos y promociones	                                                                    | string       | App Completed |
            | level 2	               | puntos bbva	                                                                            | string       | App Completed |
            | level 3	               | usar mis puntos promocion	                                                                | string       | App Completed |
            | level 4	               | pagina exitosa	                                                                            | string       | App Completed |
            | language	               | ES	                                                                                        | string       | App Completed |
            | page area	               | privada	                                                                                | string       | App Completed |
            | page intent	           | transaccion	                                                                            | string       | App Completed |
            | channel	               | online	                                                                                    | string       | App Completed |
            | page instance ID	       | de	                                                                                        | string       | App Completed |
            | page info version	       | appVersion	                                                                                | regexp named | App Completed |
            | page segment	           | personas	                                                                                | string       | App Completed |
            | sysEnv	               | app	                                                                                    | string       | App Completed |
            | business unit	           | BBVA Mexico	                                                                            | string       | App Completed |
            | site app name	           | App BBVA Mexico	                                                                        | string       | App Completed |
            | project name	           | Rewards	                                                                                | string       | App Completed |
            | device mobile	           | si	                                                                                        | string       | App Completed |
            | user userState	       | logado	                                                                                    | string       | App Completed |
            | user segment global      | 003001	                                                                                    | string       | App Completed |
            | profile ID	           | profileID	                                                                                | regexp named | App Completed |
            | user gender	           | gender	                                                                                    | regexp named | App Completed |
            | user age	               | age	                                                                                    | regexp named | App Completed |
            | global application       | loyalty points redeem                                                                      | string       | App Completed |
            | application name         | usar mis puntos promocion                                                                  | string       | App Completed |
            | application offer        | tus puntos valen doble                                                                     | string       | App Completed |
            | application type         | operativa                                                                                  | string       | App Completed |
            | application step         | pagina exitosa                                                                             | string       | App Completed |
            | application state        | finalizado                                                                                 | string       | App Completed |
            | fulfillment model        | online                                                                                     | string       | App Completed |
            | application typology     | na guara coffee                                                                            | string       | App Completed |
            | product primary category | tarjetas                                                                                   | string       | App Completed |
            | product subtype          |                                                                                            | string       | App Completed |
            | product name             |                                                                                            | string       | App Completed |

    @ANA_EVENT_PRPBC006
    @analytics
    @ios @android @web @web-done
    @MX @backend(test) @vbank
    Scenario: Points Redeem Purchases By Campaigns - Error Operation Not Performed
        Given a user with the following criteria
            | criteria                              |
            | points redeem purchases by campaign   |
        And the user accesses center notification
        And the analytics interceptor service is initiated
        When the user accesses the pay with points detail notification
        Then the analytics events contains the following variables
            | item                     | value                                                                                                         | type         | event     | event number |
            | analytics	               | analytics/glomo_base	                                                                                       | json schema  | Page View | 4            |
            | version DL	           | 20250414_5.0	                                                                                               | string       | Page View | 4            |
            | page name	               | app:privada:personas:puntos y promociones:puntos bbva:usar mis puntos promocion:error operacion no realizada  | string       | Page View | 4            |
            | level 1	               | puntos y promociones	                                                                                       | string       | Page View | 4            |
            | level 2	               | puntos bbva	                                                                                               | string       | Page View | 4            |
            | level 3	               | usar mis puntos promocion	                                                                                   | string       | Page View | 4            |
            | level 4	               | error operacion no realizada   	                                                                           | string       | Page View | 4            |
            | language	               | ES	                                                                                                           | string       | Page View | 4            |
            | page area	               | privada	                                                                                                   | string       | Page View | 4            |
            | page intent	           | transaccion	                                                                                               | string       | Page View | 4            |
            | channel	               | online	                                                                                                       | string       | Page View | 4            |
            | page instance ID	       | de	                                                                                                           | string       | Page View | 4            |
            | page info version	       | appVersion	                                                                                                   | regexp named | Page View | 4            |
            | page segment	           | personas	                                                                                                   | string       | Page View | 4            |
            | sysEnv	               | app	                                                                                                       | string       | Page View | 4            |
            | business unit	           | BBVA Mexico	                                                                                               | string       | Page View | 4            |
            | site app name	           | App BBVA Mexico	                                                                                           | string       | Page View | 4            |
            | project name	           | Rewards	                                                                                                   | string       | Page View | 4            |
            | device mobile	           | si	                                                                                                           | string       | Page View | 4            |
            | user userState	       | logado	                                                                                                       | string       | Page View | 4            |
            | user segment global      | 003001	                                                                                                       | string       | Page View | 4            |
            | profile ID	           | profileID	                                                                                                   | regexp named | Page View | 4            |

    @ANA_EVENT_PRPBC007
    @analytics
    @ios @android @web @web-done
    @MX @backend(test) @vbank
    Scenario: Points Redeem Purchases By Campaigns - Error Information Not Available
        Given a user with the following criteria
            | criteria                              |
            | points redeem purchases by campaign   |
        And the user accesses center notification
        And the user accesses the pay with points detail notification
        And the analytics interceptor service is initiated
        When the user completes a payment with points for a "posted" transaction
        Then the analytics events contains the following variables
            | item                     | value                                                                                                            | type         | event     |
            | analytics	               | analytics/glomo_base	                                                                                          | json schema  | Page View |
            | version DL	           | 20250414_5.0	                                                                                                  | string       | Page View |
            | page name	               | app:privada:personas:puntos y promociones:puntos bbva:usar mis puntos promocion:error informacion no disponible  | string       | Page View |
            | level 1	               | puntos y promociones	                                                                                          | string       | Page View |
            | level 2	               | puntos bbva	                                                                                                  | string       | Page View |
            | level 3	               | usar mis puntos promocion	                                                                                      | string       | Page View |
            | level 4	               | error informacion no disponible	                                                                              | string       | Page View |
            | language	               | ES	                                                                                                              | string       | Page View |
            | page area	               | privada	                                                                                                      | string       | Page View |
            | page intent	           | transaccion	                                                                                                  | string       | Page View |
            | channel	               | online	                                                                                                          | string       | Page View |
            | page instance ID	       | de	                                                                                                              | string       | Page View |
            | page info version	       | appVersion	                                                                                                      | regexp named | Page View |
            | page segment	           | personas	                                                                                                      | string       | Page View |
            | sysEnv	               | app	                                                                                                          | string       | Page View |
            | business unit	           | BBVA Mexico	                                                                                                  | string       | Page View |
            | site app name	           | App BBVA Mexico	                                                                                              | string       | Page View |
            | project name	           | Rewards	                                                                                                      | string       | Page View |
            | device mobile	           | si	                                                                                                              | string       | Page View |
            | user userState	       | logado	                                                                                                          | string       | Page View |
            | user segment global      | 003001	                                                                                                          | string       | Page View |
            | profile ID	           | profileID	                                                                                                      | regexp named | Page View |

    @ANA_EVENT_PRPBC008
    @analytics
    @ios @android @web @web-done
    @MX @backend(test) @vbank
    Scenario: Points Redeem Purchases By Campaigns - Show Modal Internal Link
        Given a user with the following criteria
            | criteria                              |
            | points redeem purchases by campaign   |
        And the user accesses center notification
        And the user accesses the pay with points detail notification
        And the analytics interceptor service is initiated
        When the user opens the "show details" modal for a "posted" transaction
        Then the analytics events contains the following variables
            | item                     | value                                                                                      | type         | event         |
            | analytics	               | analytics/glomo_base	                                                                    | json schema  | Internal Link |
            | version DL	           | 20250414_5.0	                                                                            | string       | Internal Link |
            | page name	               | app:privada:personas:puntos y promociones:puntos bbva:usar mis puntos promocion:1 resumen  | string       | Internal Link |
            | level 1	               | puntos y promociones	                                                                    | string       | Internal Link |
            | level 2	               | puntos bbva	                                                                            | string       | Internal Link |
            | level 3	               | usar mis puntos promocion	                                                                | string       | Internal Link |
            | level 4	               | 1 resumen	                                                                                | string       | Internal Link |
            | language	               | ES	                                                                                        | string       | Internal Link |
            | page area	               | privada	                                                                                | string       | Internal Link |
            | page intent	           | transaccion	                                                                            | string       | Internal Link |
            | channel	               | online	                                                                                    | string       | Internal Link |
            | page instance ID	       | de	                                                                                        | string       | Internal Link |
            | page info version	       | appVersion	                                                                                | regexp named | Internal Link |
            | page segment	           | personas	                                                                                | string       | Internal Link |
            | sysEnv	               | app	                                                                                    | string       | Internal Link |
            | business unit	           | BBVA Mexico	                                                                            | string       | Internal Link |
            | site app name	           | App BBVA Mexico	                                                                        | string       | Internal Link |
            | project name	           | Rewards	                                                                                | string       | Internal Link |
            | device mobile	           | si	                                                                                        | string       | Internal Link |
            | user userState	       | logado	                                                                                    | string       | Internal Link |
            | user segment global      | 003001	                                                                                    | string       | Internal Link |
            | profile ID	           | profileID	                                                                                | regexp named | Internal Link |
            | user gender	           | gender	                                                                                    | regexp named | Internal Link |
            | user age	               | age	                                                                                    | regexp named | Internal Link |

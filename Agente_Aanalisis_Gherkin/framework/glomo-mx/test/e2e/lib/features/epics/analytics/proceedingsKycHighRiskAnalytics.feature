@proceedingsKycHighRiskValidationAnalytics
Feature: Analytics - Proceedings Kyc High Risk Validation

    @ANA_EVENT_KHP001
    @analytics
    @web @android @ios
    @MX @vbank
    @web-done @backend(test)
    Scenario: Page View - Update information
        Given a user with the following criteria
            | criteria                  |
            | proceedings kyc high risk |
        And the user accesses to profile screen
        And the user taps on "add kyc validation high risk" profile button
        And the user goes to the "use of account" step
        And the analytics interceptor service is initiated
        When the user continues account user
        Then the analytics events contains the following variables
            | item                    | value                                                                     | type             | event     |
            | analytics	              | analytics/glomo_base	                                                  | json schema      | Page View |
            | version DL	          | 20250414_5.0	                                                          | string           | Page View |
            | page name	              | app:privada:personas:cuenta:actualizar informacion:relaciones financieras | string           | Page View |
            | level 1	              | cuenta	                                                                  | string           | Page View |
            | level 2	              | actualizar informacion	                                                  | string           | Page View |
            | level 3	              | relaciones financieras	                                                  | string           | Page View |
            | language	              | ES	                                                                      | string           | Page View |
            | page intent	          | informacion	                                                              | string           | Page View |
            | channel	              | online	                                                                  | string           | Page View |
            | page area	              | privada	                                                                  | string           | Page View |
            | page instance ID	      | de	                                                                      | string           | Page View |
            | page info version	      | appVersion	                                                              | regexp named     | Page View |
            | page segment	          | personas	                                                              | string           | Page View |
            | sysEnv	              | app	                                                                      | string           | Page View |
            | business unit	          | BBVA Mexico	                                                              | string           | Page View |
            | site app name	          | App BBVA Mexico                                                           | string           | Page View |
            | project name	          | Glomo                                                                     | string           | Page View |
            | device mobile	          | si                                                                        | string           | Page View |
            | user userState          | logado                                                                    | string           | Page View |
            | user segment global     | 003001                                                                    | string           | Page View |
            | profile ID              | profileID                                                                 | regexp named     | Page View |
            | user gender             | gender                                                                    | regexp named     | Page View |
            | user age                | age                                                                       | regexp named     | Page View |
            | custom fields           | modulos completados:01;02;03, perfil geografico:nacional                  | string           | Page View |
            | user segment profile    | clientes alto riesgo                                                      | string           | Page View |
            | internal campaign       |                   	                                                      | empty array      | Page View |
            | optimization attributes |                   	                                                      | empty array      | Page View |
            | application             |                   	                                                      | empty str object | Page View |
            | products attributes     |                   	                                                      | empty array      | Page View |

    @ANA_EVENT_KHP002
    @analytics
    @web @android @ios
    @MX @vbank @web-done
    @backend(test)
    Scenario: Internal link - continues proceedings kyc high risk questionaire
        Given a user with the following criteria
            | criteria                                     |
            | proceedings kyc high risk all questionnaries |
        And the user accesses to profile screen
        And the analytics interceptor service is initiated
        When the user accesses to proceedings kyc high risk questionaire
        Then the analytics events contains the following variables
            | item                    | value                                                                     | type             | event         |
            | analytics	              | analytics/glomo_base	                                                  | json schema      | Internal Link |
            | version DL	          | 20250414_5.0	                                                          | string           | Internal Link |
            | page name	              | app:privada:personas:cuenta:actualizar informacion:relaciones financieras | string           | Internal Link |
            | level 1	              | cuenta	                                                                  | string           | Internal Link |
            | level 2	              | actualizar informacion	                                                  | string           | Internal Link |
            | level 3	              | relaciones financieras	                                                  | string           | Internal Link |
            | language	              | ES	                                                                      | string           | Internal Link |
            | page area	              | privada	                                                                  | string           | Internal Link |
            | page intent	          | informacion	                                                              | string           | Internal Link |
            | channel	              | online	                                                                  | string           | Internal Link |
            | page instance ID	      | de	                                                                      | string           | Internal Link |
            | page info version	      | appVersion	                                                              | regexp named     | Internal Link |
            | page segment	          | personas	                                                              | string           | Internal Link |
            | sysEnv	              | app	                                                                      | string           | Internal Link |
            | business unit	          | BBVA Mexico	                                                              | string           | Internal Link |
            | site app name	          | App BBVA Mexico	                                                          | string           | Internal Link |
            | project name	          | Glomo	                                                                  | string           | Internal Link |
            | device mobile	          | si	                                                                      | string           | Internal Link |
            | user userState          | logado	                                                                  | string           | Internal Link |
            | user segment global     | 003001	                                                                  | string           | Internal Link |
            | profile ID              | profileID	                                                              | regexp named     | Internal Link |
            | user gender             | gender	                                                                  | regexp named     | Internal Link |
            | user age                | age	                                                                      | regexp named     | Internal Link |
            | custom fields           | modulos completados:01;02;03, perfil geografico:nacional	              | string           | Internal Link |
            | link name               | cuestionario de relaciones financieras	                                  | string           | Internal Link |
            | user segment profile    | clientes alto riesgo                                                      | string           | Internal Link |
            | internal campaign       |                   	                                                      | empty array      | Internal Link |
            | optimization attributes |                   	                                                      | empty array      | Internal Link |
            | application             |                   	                                                      | empty str object | Internal Link |
            | products attributes     |                   	                                                      | empty array      | Internal Link |

    @ANA_EVENT_KHP003
    @analytics
    @web @android @ios
    @MX @vbank
    @web-done @backend(test)
    Scenario: Internal link - proceedings kyc high risk confirm questionaire
        Given a user with the following criteria
            | criteria                                     |
            | proceedings kyc high risk all questionnaries |
        And the user accesses to profile screen
        And the user accesses to proceedings kyc high risk questionaire
        And the analytics interceptor service is initiated
        When the user confirms info kyc high risk module
        Then the analytics events contains the following variables
            | item                    | value                                                                     | type             | event         |
            | analytics	              | analytics/glomo_base	                                                  | json schema      | Internal Link |
            | version DL	          | 20250414_5.0	                                                          | string           | Internal Link |
            | page name	              | app:privada:personas:cuenta:actualizar informacion:relaciones financieras | string           | Internal Link |
            | level 1	              | cuenta	                                                                  | string           | Internal Link |
            | level 2	              | actualizar informacion	                                                  | string           | Internal Link |
            | level 3	              | relaciones financieras	                                                  | string           | Internal Link |
            | language	              | ES	                                                                      | string           | Internal Link |
            | page area	              | privada	                                                                  | string           | Internal Link |
            | page intent	          | informacion	                                                              | string           | Internal Link |
            | channel	              | online	                                                                  | string           | Internal Link |
            | page instance ID	      | de	                                                                      | string           | Internal Link |
            | page info version	      | appVersion	                                                              | regexp named     | Internal Link |
            | page segment	          | personas	                                                              | string           | Internal Link |
            | sysEnv	              | app	                                                                      | string           | Internal Link |
            | business unit	          | BBVA Mexico	                                                              | string           | Internal Link |
            | site app name	          | App BBVA Mexico	                                                          | string           | Internal Link |
            | project name	          | Glomo	                                                                  | string           | Internal Link |
            | device mobile	          | si	                                                                      | string           | Internal Link |
            | user userState          | logado	                                                                  | string           | Internal Link |
            | user segment global     | 003001	                                                                  | string           | Internal Link |
            | profile ID              | profileID	                                                              | regexp named     | Internal Link |
            | user gender             | gender	                                                                  | regexp named     | Internal Link |
            | user age                | age	                                                                      | regexp named     | Internal Link |
            | custom fields           | modulos completados:01;02;03, perfil geografico:nacional	              | string           | Internal Link |
            | link name               | confirmar cuestionario financiero	                                      | string           | Internal Link |
            | user segment profile    | clientes alto riesgo                                                      | string           | Internal Link |
            | internal campaign       |                   	                                                      | empty array      | Internal Link |
            | optimization attributes |                   	                                                      | empty array      | Internal Link |
            | application             |                   	                                                      | empty str object | Internal Link |
            | products attributes     |                   	                                                      | empty array      | Internal Link |

    @ANA_EVENT_KHP004
    @analytics
    @web @android @ios
    @MX @vbank @web-done
    @backend(test)
    Scenario: Page View - Data Update
        Given a user with the following criteria
            | criteria                                     |
            | proceedings kyc high risk all questionnaries |
        And the user accesses to profile screen
        And the user accesses to proceedings kyc high risk questionaire
        And the analytics interceptor service is initiated
        When the user taps on the "update task kyc high risk proceedings" option in proceedings
        Then the analytics events contains the following variables
            | item                    | value                                                                                                      | type             | event     |
            | analytics	              | analytics/glomo_base	                                                                                   | json schema      | Page View |
            | version DL	          | 20250414_5.0	                                                                                           | string           | Page View |
            | page name	              | app:privada:personas:cuenta:actualizar informacion:relaciones financieras:confirmar actualizacion de datos | string           | Page View |
            | level 1	              | cuenta	                                                                                                   | string           | Page View |
            | level 2	              | actualizar informacion	                                                                                   | string           | Page View |
            | level 3	              | relaciones financieras	                                                                                   | string           | Page View |
            | level 4	              | confirmar actualizacion de datos	                                                                       | string           | Page View |
            | language	              | ES	                                                                                                       | string           | Page View |
            | page area	              | privada	                                                                                                   | string           | Page View |
            | page intent	          | informacion	                                                                                               | string           | Page View |
            | channel	              | online	                                                                                                   | string           | Page View |
            | page instance ID	      | de	                                                                                                       | string           | Page View |
            | page info version	      | appVersion	                                                                                               | regexp named     | Page View |
            | page segment	          | personas	                                                                                               | string           | Page View |
            | sysEnv	              | app	                                                                                                       | string           | Page View |
            | business unit	          | BBVA Mexico	                                                                                               | string           | Page View |
            | site app name	          | App BBVA Mexico	                                                                                           | string           | Page View |
            | project name	          | Glomo	                                                                                                   | string           | Page View |
            | device mobile	          | si	                                                                                                       | string           | Page View |
            | user userState          | logado	                                                                                                   | string           | Page View |
            | user segment global     | 003001	                                                                                                   | string           | Page View |
            | profile ID              | profileID	                                                                                               | regexp named     | Page View |
            | user gender             | gender	                                                                                                   | regexp named     | Page View |
            | user age                | age	                                                                                                       | regexp named     | Page View |
            | custom fields           | modulos completados:01;02;03, perfil geografico:nacional	                                               | string           | Page View |
            | user segment profile    | clientes alto riesgo                                                                                       | string           | Page View |
            | internal campaign       |                   	                                                                                       | empty array      | Page View |
            | optimization attributes |                   	                                                                                       | empty array      | Page View |
            | application             |                   	                                                                                       | empty str object | Page View |
            | products attributes     |                   	                                                                                       | empty array      | Page View |

    @ANA_EVENT_KHP005
    @analytics
    @web @android @ios
    @MX @vbank
    @web-done @backend(test)
    Scenario: Error page - confirm all data proceedings kyc high risk with errors
        Given a user with the following criteria
            | criteria                     |
            | proceedings kyc high risk    |
        And the user accesses to proceedings from "profile"
        And the analytics interceptor service is initiated
        When the user tries to complete proceedings update task kyc high risk
        Then the analytics events contains the following variables
            | item                    | value                                                                                                  | type             | event     |
            | analytics	              | analytics/glomo_base	                                                                               | json schema      | Page View |
            | version DL	          | 20250414_5.0	                                                                                       | string           | Page View |
            | page name	              | app:privada:personas:cuenta:actualizar informacion:relaciones financieras:error operacion no realizada | string           | Page View |
            | level 1	              | cuenta	                                                                                               | string           | Page View |
            | level 2	              | actualizar informacion	                                                                               | string           | Page View |
            | level 3	              | relaciones financieras	                                                                               | string           | Page View |
            | level 4	              | error operacion no realizada	                                                                       | string           | Page View |
            | language	              | ES	                                                                                                   | string           | Page View |
            | page area	              | privada	                                                                                               | string           | Page View |
            | page intent	          | informacion	                                                                                           | string           | Page View |
            | channel	              | online	                                                                                               | string           | Page View |
            | page instance ID	      | de	                                                                                                   | string           | Page View |
            | page info version	      | appVersion	                                                                                           | regexp named     | Page View |
            | page segment	          | personas	                                                                                           | string           | Page View |
            | sysEnv	              | app	                                                                                                   | string           | Page View |
            | business unit	          | BBVA Mexico	                                                                                           | string           | Page View |
            | site app name	          | App BBVA Mexico	                                                                                       | string           | Page View |
            | project name	          | Glomo	                                                                                               | string           | Page View |
            | device mobile	          | si	                                                                                                   | string           | Page View |
            | user userState          | logado	                                                                                               | string           | Page View |
            | user segment global     | 003001	                                                                                               | string           | Page View |
            | profile ID              | profileID	                                                                                           | regexp named     | Page View |
            | user gender             | gender	                                                                                               | regexp named     | Page View |
            | user age                | age	                                                                                                   | regexp named     | Page View |
            | custom fields           | modulos completados:01;02, perfil geografico:nacional                                                  | string           | Page View |
            | user segment profile    | clientes alto riesgo                                                                                   | string           | Page View |
            | internal campaign       |                   	                                                                                   | empty array      | Page View |
            | optimization attributes |                   	                                                                                   | empty array      | Page View |
            | application             |                   	                                                                                   | empty str object | Page View |
            | products attributes     |                   	                                                                                   | empty array      | Page View |

    @ANA_EVENT_KHP006
    @analytics
    @web @android @ios
    @MX @vbank @web-done
    @backend(test)
    Scenario: Page view - updated information in validation process
        Given a user with the following criteria
            | criteria                  |
            | proceedings kyc high risk |
        And the user accesses to profile screen
        And the user accesses to proceedings kyc high risk questionaire
        And the analytics interceptor service is initiated
        When the user taps on the "update task kyc high risk proceedings" option in proceedings
        Then the analytics events contains the following variables
            | item                    | value                                                                                               | type             | event     | event number |
            | analytics	              | analytics/glomo_base	                                                                            | json schema      | Page View | 2            |
            | version DL	          | 20250414_5.0	                                                                                    | string           | Page View | 2            |
            | page name	              | app:privada:personas:cuenta:relaciones financieras:informacion actualizada en proceso de validacion	| string           | Page View | 2            |
            | level 1	              | cuenta	                                                                                            | string           | Page View | 2            |
            | level 2	              | relaciones financieras	                                                                            | string           | Page View | 2            |
            | level 3	              | informacion actualizada en proceso de validacion	                                                | string           | Page View | 2            |
            | language	              | ES	                                                                                                | string           | Page View | 2            |
            | page area	              | privada	                                                                                            | string           | Page View | 2            |
            | page intent	          | informacion	                                                                                        | string           | Page View | 2            |
            | channel	              | online	                                                                                            | string           | Page View | 2            |
            | page instance ID	      | de	                                                                                                | string           | Page View | 2            |
            | page info version	      | appVersion	                                                                                        | regexp named     | Page View | 2            |
            | page segment	          | personas	                                                                                        | string           | Page View | 2            |
            | sysEnv	              | app	                                                                                                | string           | Page View | 2            |
            | business unit	          | BBVA Mexico	                                                                                        | string           | Page View | 2            |
            | site app name	          | App BBVA Mexico	                                                                                    | string           | Page View | 2            |
            | project name	          | Glomo	                                                                                            | string           | Page View | 2            |
            | device mobile	          | si	                                                                                                | string           | Page View | 2            |
            | user userState          | logado	                                                                                            | string           | Page View | 2            |
            | user segment global     | 003001	                                                                                            | string           | Page View | 2            |
            | profile ID              | profileID	                                                                                        | regexp named     | Page View | 2            |
            | user gender             | gender	                                                                                            | regexp named     | Page View | 2            |
            | user age                | age	                                                                                                | regexp named     | Page View | 2            |
            | custom fields           | modulos completados:01;02;03, perfil geografico:nacional	                                        | string           | Page View | 2            |
            | user segment profile    | clientes alto riesgo                                                                                | string           | Page View | 2            |
            | internal campaign       |                   	                                                                                | empty array      | Page View | 2            |
            | optimization attributes |                   	                                                                                | empty array      | Page View | 2            |
            | application             |                   	                                                                                | empty str object | Page View | 2            |
            | products attributes     |                   	                                                                                | empty array      | Page View | 2            |

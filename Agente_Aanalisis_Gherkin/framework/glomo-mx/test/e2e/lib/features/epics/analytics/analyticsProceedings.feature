@proceedingsAnalytics
Feature: Analytics - proceedings mx

    @ANA_PHY001
    @analytics
    @MX
    @web
    @vbank @android @ios
    @backend(test)
    @web-done
    Scenario: Page view - When user accesses to proceedings
        Given a user with the following criteria
            | criteria             |
            | n2 account           |
            | account with payroll |
        And the user accesses to the first account product detail
        When the user accesses to proceedings from "upgrade account"
        Then the device contains the following variables
            | item                    | value                                                             | type         |
            | version DL              | 20250414_5.0                                                      | string       |
            | page name               | app:privada:personas:cuenta:actualizar informacion:ampliar cuenta | string       |
            | level 1                 | cuenta                                                            | string       |
            | level 2                 | actualizar informacion                                            | string       |
            | level 3                 | ampliar cuenta                                                    | string       |
            | language                | ES                                                                | string       |
            | page area               | privada                                                           | string       |
            | page intent             | informacion                                                       | string       |
            | channel                 | online                                                            | string       |
            | page instance ID        | de                                                                | string       |
            | page info version       | appVersion                                                        | regexp named |
            | page segment            | personas                                                          | string       |
            | sysEnv                  | app                                                               | string       |
            | business unit           | BBVA Mexico                                                       | string       |
            | site app name           | App BBVA Mexico                                                   | string       |
            | project name            | Glomo                                                             | string       |
            | device mobile	          | si                                                                | string       |
            | user userState          | logado                                                            | string       |
            | user segment global     | 003001                                                            | string       |
            | profile ID              | profileID                                                         | regexp named |
            | user gender             | gender                                                            | regexp named |
            | user age                | age                                                               | regexp named |
            | custom fields           | segmento usuario:proactivos no nominados, modulos completados:02  | string       |
            | internal campaign       |                                                                   | empty array  |
            | optimization attributes |                                                                   | empty array  |
            | products attributes     |                                                                   | empty array  |

    @ANA_PHY002
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: App Page View - When user navigate to proceedings portability
        Given a user with the following criteria
            | criteria               |
            | payroll portability n2 |
        And the user accesses to payroll "account" screen
        When the user accesses to proceedings from "payroll"
        Then the device contains the following variables
            | item                    | value                                                             | type         |
            | analytics	              | analytics/glomo_base	                                          | json schema  |
            | version DL              | 20250414_5.0	                                                  | string       |
            | page name	              | app:privada:personas:cuenta:actualizar informacion:cambiar nomina | string       |
            | level 1	              | cuenta                                                            | string       |
            | level 2	              | actualizar informacion                                            | string       |
            | level 3	              | cambiar nomina                                                    | string       |
            | language	              | ES                                                                | string       |
            | page area	              | privada                                                           | string       |
            | page intent             | informacion                                                       | string       |
            | channel                 | online                                                            | string       |
            | page instance ID        | de                                                                | string       |
            | page info version       | appVersion                                                        | regexp named |
            | page segment            | personas                                                          | string       |
            | sysEnv	              | app                                                               | string       |
            | business unit	          | BBVA Mexico                                                       | string       |
            | site app name	          | App BBVA Mexico                                                   | string       |
            | project name	          | Glomo                                                             | string       |
            | device mobile	          | si                                                                | string       |
            | user userState	      | logado                                                            | string       |
            | user segment global     | 003001                                                            | string       |
            | profile ID	          | profileID                                                         | regexp named |
            | user gender	          | gender                                                            | regexp named |
            | user age	              | age                                                               | regexp named |
            | custom fields           | segmento usuario:proactivos no nominados, modulos completados:01  | string       |
            | internal campaign	      |	                                                                  | empty array  |
            | optimization attributes |		                                                              | empty array  |
            | products attributes     |                                                                   | empty array  |

    @ANA_PHY003
    @analytics
    @MX @vbank @backend(test)
    @web @ios @android
    @web-done
    Scenario: Internal link - When user access to internal link address
        Given a user with the following criteria
            | criteria               |
            | payroll portability n2 |
        And the user accesses to payroll "account" screen
        And the user accesses to proceedings from "payroll"
        When the user taps on the "confirm information validation" option in proceedings
        Then the device contains the following variables
            | item                    | value                                                               | type         |
            | analytics	              | analytics/glomo_base	                                            | json schema  |
            | version DL              | 20250414_5.0	                                                    | string       |
            | page name	              | app:privada:personas:cuenta:actualizar informacion:cambiar nomina   | string       |
            | level 1	              | cuenta                                                              | string       |
            | level 2	              | actualizar informacion                                              | string       |
            | level 3	              | cambiar nomina                                                      | string       |
            | language	              | ES                                                                  | string       |
            | page area	              | privada                                                             | string       |
            | page intent             | informacion                                                         | string       |
            | channel                 | online                                                              | string       |
            | page instance ID        | de                                                                  | string       |
            | page info version       | appVersion                                                          | regexp named |
            | page segment            | personas                                                            | string       |
            | sysEnv	              | app                                                                 | string       |
            | business unit	          | BBVA Mexico                                                         | string       |
            | site app name   	      | App BBVA Mexico                                                     | string       |
            | project name	          | Glomo                                                               | string       |
            | device mobile	          | si                                                                  | string       |
            | user userState	      | logado                                                              | string       |
            | user segment global     | 003001                                                              | string       |
            | profile ID	          | profileID                                                           | regexp named |
            | user gender	          | gender                                                              | regexp named |
            | user age	              | age                                                                 | regexp named |
            | custom fields           | segmento usuario:proactivos no nominados, modulos completados:01;02 | string       |
            | link name               | confirmemos tu informacion                                          | string       |
            | internal campaign	      |	                                                                    | empty array  |
            | optimization attributes |		                                                                | empty array  |
            | products attributes     |                                                                     | empty array  |

    @ANA_EVENT_PHY004
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: App Page View - When user access to confirm
        Given a user with the following criteria
            | criteria               |
            | payroll portability n2 |
        And the user accesses to payroll "account" screen
        And the user accesses to proceedings from "payroll"
        And the analytics interceptor service is initiated
        When the user taps on the "confirm" option in proceedings
        Then the analytics events contains the following variables
            | item                    | value                                                                                              | type         | event     |
            | analytics	              | analytics/glomo_base	                                                                           | json schema  | Page View |
            | version DL              | 20250414_5.0	                                                                                   | string       | Page View |
            | page name	              | app:privada:personas:cuenta:actualizar informacion:cambiar nomina:confirmar actualizacion de datos | string       | Page View |
            | level 1	              | cuenta                                                                                             | string       | Page View |
            | level 2	              | actualizar informacion                                                                             | string       | Page View |
            | level 3	              | cambiar nomina                                                                                     | string       | Page View |
            | level 4	              | confirmar actualizacion de datos                                                                   | string       | Page View |
            | language	              | ES                                                                                                 | string       | Page View |
            | page area	              | privada                                                                                            | string       | Page View |
            | page intent             | informacion                                                                                        | string       | Page View |
            | channel                 | online                                                                                             | string       | Page View |
            | page instance ID        | de                                                                                                 | string       | Page View |
            | page info version       | appVersion                                                                                         | regexp named | Page View |
            | page segment            | personas                                                                                           | string       | Page View |
            | sysEnv	              | app                                                                                                | string       | Page View |
            | business unit	          | BBVA Mexico                                                                                        | string       | Page View |
            | site app name	          | App BBVA Mexico                                                                                    | string       | Page View |
            | project name	          | Glomo                                                                                              | string       | Page View |
            | device mobile	          | si                                                                                                 | string       | Page View |
            | user userState	      | logado                                                                                             | string       | Page View |
            | user segment global     | 003001                                                                                             | string       | Page View |
            | profile ID	          | profileID                                                                                          | regexp named | Page View |
            | user gender	          | gender                                                                                             | regexp named | Page View |
            | user age	              | age                                                                                                | regexp named | Page View |
            | custom fields           | segmento usuario:proactivos no nominados, modulos completados:01;02                                | string       | Page View |
            | internal campaign	      |	                                                                                                   | empty array  | Page View |
            | optimization attributes |		                                                                                               | empty array  | Page View |
            | products attributes     |                                                                                                    | empty array  | Page View |

    @ANA_EVENT_PHY005
    @vbank
    @analytics
    @MX @android @ios
    @web @web-done
    @backend(test)
    Scenario: Internal Link - When the user click in step 1
        Given a user with the following criteria
            | criteria                |
            | n2 account              |
            | account without payroll |
        And the user accesses to the first account product detail
        And the user accesses to proceedings from "upgrade account"
        And the analytics interceptor service is initiated
        When the user taps on the "identity validation" option in proceedings
        Then the analytics events contains the following variables
            | item                    | value                                                             | type         | event         |
            | analytics               | analytics/glomo_base                                              | json schema  | Internal Link |
            | version DL              | 20250414_5.0                                                      | string       | Internal Link |
            | page name               | app:privada:personas:cuenta:actualizar informacion:ampliar cuenta | string       | Internal Link |
            | level 1                 | cuenta                                                            | string       | Internal Link |
            | level 2                 | actualizar informacion                                            | string       | Internal Link |
            | level 3                 | ampliar cuenta                                                    | string       | Internal Link |
            | language                | ES                                                                | string       | Internal Link |
            | page area               | privada                                                           | string       | Internal Link |
            | page intent             | informacion                                                       | string       | Internal Link |
            | channel                 | online                                                            | string       | Internal Link |
            | page instance ID        | de                                                                | string       | Internal Link |
            | page info version       | appVersion                                                        | regexp named | Internal Link |
            | page segment            | personas                                                          | string       | Internal Link |
            | sysEnv                  | app                                                               | string       | Internal Link |
            | business unit           | BBVA Mexico                                                       | string       | Internal Link |
            | site app name           | App BBVA Mexico                                                   | string       | Internal Link |
            | project name            | Glomo                                                             | string       | Internal Link |
            | device mobile	          | si                                                                | string       | Internal Link |
            | user userState          | logado                                                            | string       | Internal Link |
            | user segment global     | 003001                                                            | string       | Internal Link |
            | profile ID              | profileID                                                         | regexp named | Internal Link |
            | user gender             | gender                                                            | regexp named | Internal Link |
            | user age                | age                                                               | regexp named | Internal Link |
            | custom fields           | segmento usuario:proactivos no nominados, modulos completados:02  | string       | Internal Link |
            | link name               | validemos tu identidad                                            | string       | Internal Link |
            | internal campaign       |                                                                   | empty array  | Internal Link |
            | optimization attributes |                                                                   | empty array  | Internal Link |
            | products attributes     |                                                                   | empty array  | Internal Link |

    @ANA_EVENT_PHY006
    @vbank
    @analytics
    @MX @android @ios
    @web @web-done
    @backend(test)
    Scenario: Internal Link - When the user click in step 2
        Given a user with the following criteria
            | criteria                       |
            | proceedings kyc module pending |
        And the user accesses to the first account product detail
        And the user accesses to proceedings from "upgrade account"
        And the analytics interceptor service is initiated
        When the user taps on the "kyc validation" option in proceedings
        Then the analytics events contains the following variables
            | item                    | value                                                             | type         | event         |
            | analytics               | analytics/glomo_base                                              | json schema  | Internal Link |
            | version DL              | 20250414_5.0                                                      | string       | Internal Link |
            | page name               | app:privada:personas:cuenta:actualizar informacion:ampliar cuenta | string       | Internal Link |
            | level 1                 | cuenta                                                            | string       | Internal Link |
            | level 2                 | actualizar informacion                                            | string       | Internal Link |
            | level 3                 | ampliar cuenta                                                    | string       | Internal Link |
            | language                | ES                                                                | string       | Internal Link |
            | page area               | privada                                                           | string       | Internal Link |
            | page intent             | informacion                                                       | string       | Internal Link |
            | channel                 | online                                                            | string       | Internal Link |
            | page instance ID        | de                                                                | string       | Internal Link |
            | page info version       | appVersion                                                        | regexp named | Internal Link |
            | page segment            | personas                                                          | string       | Internal Link |
            | sysEnv                  | app                                                               | string       | Internal Link |
            | business unit           | BBVA Mexico                                                       | string       | Internal Link |
            | site app name           | App BBVA Mexico                                                   | string       | Internal Link |
            | project name            | Glomo                                                             | string       | Internal Link |
            | device mobile	          | si                                                                | string       | Internal Link |
            | user userState          | logado                                                            | string       | Internal Link |
            | user segment global     | 003001                                                            | string       | Internal Link |
            | profile ID              | profileID                                                         | regexp named | Internal Link |
            | user gender             | gender                                                            | regexp named | Internal Link |
            | user age                | age                                                               | regexp named | Internal Link |
            | custom fields           | segmento usuario:proactivos no nominados, modulos completados:01  | string       | Internal Link |
            | link name               | cuentanos tus habitos financieros                                 | string       | Internal Link |
            | internal campaign       |                                                                   | empty array  | Internal Link |
            | optimization attributes |                                                                   | empty array  | Internal Link |
            | products attributes     |                                                                   | empty array  | Internal Link |

    @ANA_EVENT_PHY007
    @vbank
    @analytics
    @MX @android @ios
    @web @web-done
    @backend(test)
    Scenario: Internal Link - When the user click in step 3
        Given a user with the following criteria
            | criteria                                  |
            | account that should upgrade from n2 to n4 |
        And the user accesses to the first account product detail
        And the user accesses to proceedings from "upgrade account"
        And the analytics interceptor service is initiated
        When the user taps on the "confirm information validation" option in proceedings
        Then the analytics events contains the following variables
            | item                    | value                                                               | type         | event         |
            | analytics               | analytics/glomo_base                                                | json schema  | Internal Link |
            | version DL              | 20250414_5.0                                                        | string       | Internal Link |
            | page name               | app:privada:personas:cuenta:actualizar informacion:ampliar cuenta   | string       | Internal Link |
            | level 1                 | cuenta                                                              | string       | Internal Link |
            | level 2                 | actualizar informacion                                              | string       | Internal Link |
            | level 3                 | ampliar cuenta                                                      | string       | Internal Link |
            | language                | ES                                                                  | string       | Internal Link |
            | page area               | privada                                                             | string       | Internal Link |
            | page intent             | informacion                                                         | string       | Internal Link |
            | channel                 | online                                                              | string       | Internal Link |
            | page instance ID        | de                                                                  | string       | Internal Link |
            | page info version       | appVersion                                                          | regexp named | Internal Link |
            | page segment            | personas                                                            | string       | Internal Link |
            | sysEnv                  | app                                                                 | string       | Internal Link |
            | business unit           | BBVA Mexico                                                         | string       | Internal Link |
            | site app name           | App BBVA Mexico                                                     | string       | Internal Link |
            | project name            | Glomo                                                               | string       | Internal Link |
            | device mobile	          | si                                                                  | string       | Internal Link |
            | user userState          | logado                                                              | string       | Internal Link |
            | user segment global     | 003001                                                              | string       | Internal Link |
            | profile ID              | profileID                                                           | regexp named | Internal Link |
            | user gender             | gender                                                              | regexp named | Internal Link |
            | user age                | age                                                                 | regexp named | Internal Link |
            | custom fields           | segmento usuario:proactivos no nominados, modulos completados:01;02 | string       | Internal Link |
            | link name               | confirmemos tu informacion                                          | string       | Internal Link |
            | internal campaign       |                                                                     | empty array  | Internal Link |
            | optimization attributes |                                                                     | empty array  | Internal Link |
            | products attributes     |                                                                     | empty array  | Internal Link |

    @ANA_PHY008
    @analytics
    @MX @vbank @backend(test)
    @web @ios @android @web-done
    Scenario: App Page View - When user access to confirm information
        Given a user with the following criteria
            | criteria                                  |
            | account that should upgrade from n2 to n4 |
        And the user accesses to the first account product detail
        And the user accesses to proceedings from "upgrade account"
        When the user taps on the "confirm information client" option in proceedings
        Then the device contains the following variables
            | item                     | value                                                                            | type             |
            | analytics	               | analytics/glomo_base	                                                          | json schema      |
            | version DL               | 20250414_5.0	                                                                  | string           |
            | page name	               | app:privada:personas:cuenta:actualizar informacion:ampliar cuenta:otp            | string           |
            | level 1	               | cuenta                                                                           | string           |
            | level 2	               | actualizar informacion                                                           | string           |
            | level 3	               | ampliar cuenta                                                                   | string           |
            | level 4	               | otp                                                                              | string           |
            | language	               | ES                                                                               | string           |
            | page area	               | privada                                                                          | string           |
            | page intent              | informacion                                                                      | string           |
            | channel                  | online                                                                           | string           |
            | page instance ID         | de                                                                               | string           |
            | page info version        | appVersion                                                                       | regexp named     |
            | page segment             | personas                                                                         | string           |
            | sysEnv	               | app                                                                              | string           |
            | business unit	           | BBVA Mexico                                                                      | string           |
            | site app name	           | App BBVA Mexico                                                                  | string           |
            | project name	           | Glomo                                                                            | string           |
            | device mobile	           | si                                                                               | string           |
            | user userState	       | logado                                                                           | string           |
            | user segment global      | 003001                                                                           | string           |
            | profile ID	           | profileID                                                                        | regexp named     |
            | user gender	           | gender                                                                           | regexp named     |
            | user age	               | age                                                                              | regexp named     |
            | custom fields            | segmento usuario:proactivos no nominados, firma:token, modulos completados:01;02 | string           |
            | internal campaign	       |	                                                                              | empty array      |
            | optimization attributes  |		                                                                          | empty array      |
            | products attributes      |                                                                                  | empty array      |

    @ANA_PHY009
    @analytics
    @MX @vbank @backend(test)
    @web @ios @android @web-done
    Scenario: App Page View - When user confirm proceedings
        Given a user with the following criteria
            | criteria                      |
            | proceedings modules completed |
        And the user accesses to the first account product detail
        And the user accesses to proceedings from "upgrade account"
        When the user taps on the "confirm proceedings" option in proceedings
        Then the device contains the following variables
            | item                    | value                                                                                              | type         |
            | version DL              | 20250414_5.0                                                                                       | string       |
            | page name               | app:privada:personas:cuenta:actualizar informacion:ampliar cuenta:confirmar actualizacion de datos | string       |
            | level 1                 | cuenta                                                                                             | string       |
            | level 2                 | actualizar informacion                                                                             | string       |
            | level 3                 | ampliar cuenta                                                                                     | string       |
            | level 4                 | confirmar actualizacion de datos                                                                   | string       |
            | language                | ES                                                                                                 | string       |
            | page area               | privada                                                                                            | string       |
            | page intent             | informacion                                                                                        | string       |
            | channel                 | online                                                                                             | string       |
            | page instance ID        | de                                                                                                 | string       |
            | page info version       | appVersion                                                                                         | regexp named |
            | page segment            | personas                                                                                           | string       |
            | sysEnv                  | app                                                                                                | string       |
            | business unit           | BBVA Mexico                                                                                        | string       |
            | site app name           | App BBVA Mexico                                                                                    | string       |
            | project name            | Glomo                                                                                              | string       |
            | device mobile	          | si                                                                                                 | string       |
            | user userState          | logado                                                                                             | string       |
            | user segment global     | 003001                                                                                             | string       |
            | profile ID              | profileID                                                                                          | regexp named |
            | user gender             | gender                                                                                             | regexp named |
            | user age                | age                                                                                                | regexp named |
            | custom fields           | segmento usuario:proactivos nominados, modulos completados:01;02;03                                | string       |
            | internal campaign       |                                                                                                    | empty array  |
            | optimization attributes |                                                                                                    | empty array  |
            | products attributes     |                                                                                                    | empty array  |

    @ANA_EVENT_PHY010
    @analytics
    @MX @vbank @backend(test)
    @web @ios @android @web-done
    Scenario: App Page View - Error operation not performed
        Given a user with the following criteria
            | criteria                      |
            | proceedings modules completed |
        And the user accesses to the first account product detail
        And the user accesses to proceedings from "upgrade account"
        And the analytics interceptor service is initiated
        When the user tries to complete proceedings
        Then the analytics events contains the following variables
            | item                    | value                                                                                          | type         | event     | event number |
            | version DL              | 20250414_5.0                                                                                   | string       | Page View | 2            |
            | page name               | app:privada:personas:cuenta:actualizar informacion:ampliar cuenta:error operacion no realizada | string       | Page View | 2            |
            | level 1                 | cuenta                                                                                         | string       | Page View | 2            |
            | level 2                 | actualizar informacion                                                                         | string       | Page View | 2            |
            | level 3                 | ampliar cuenta                                                                                 | string       | Page View | 2            |
            | level 4                 | error operacion no realizada                                                                   | string       | Page View | 2            |
            | language                | ES                                                                                             | string       | Page View | 2            |
            | page area               | privada                                                                                        | string       | Page View | 2            |
            | page intent             | informacion                                                                                    | string       | Page View | 2            |
            | channel                 | online                                                                                         | string       | Page View | 2            |
            | page instance ID        | de                                                                                             | string       | Page View | 2            |
            | page info version       | appVersion                                                                                     | regexp named | Page View | 2            |
            | page segment            | personas                                                                                       | string       | Page View | 2            |
            | sysEnv                  | app                                                                                            | string       | Page View | 2            |
            | business unit           | BBVA Mexico                                                                                    | string       | Page View | 2            |
            | site app name           | App BBVA Mexico                                                                                | string       | Page View | 2            |
            | project name            | Glomo                                                                                          | string       | Page View | 2            |
            | device mobile	          | si                                                                                             | string       | Page View | 2            |
            | user userState          | logado                                                                                         | string       | Page View | 2            |
            | user segment global     | 003001                                                                                         | string       | Page View | 2            |
            | profile ID              | profileID                                                                                      | regexp named | Page View | 2            |
            | user gender             | gender                                                                                         | regexp named | Page View | 2            |
            | user age                | age                                                                                            | regexp named | Page View | 2            |
            | custom fields           | segmento usuario:proactivos nominados, modulos completados:01;02;03                            | string       | Page View | 2            |
            | error page              | error operacion no realizada                                                                   | string       | Page View | 2            |
            | internal campaign       |                                                                                                | empty array  | Page View | 2            |
            | optimization attributes |                                                                                                | empty array  | Page View | 2            |
            | products attributes     |                                                                                                | empty array  | Page View | 2            |

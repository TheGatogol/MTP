@kycValidationAnalytics
Feature: Analytics - KYC validation

    @ANA_EVENT_KYC001
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: App OnClick Start - kyc profile entry
        Given a user with the following criteria
            | criteria       |
            | kyc validation |
        And the user accesses to profile screen
        And the analytics interceptor service is initiated
        When the user taps on "add kyc validation" profile button
        Then the analytics events contains the following variables
            | item                    | value                       | type         | event              |
            | analytics	              | analytics/glomo_base	    | json schema  | App On Click Start |
            | version DL              |	20250414_5.0	            | string       | App On Click Start |
            | page name	              | app:privada:personas:perfil	| string       | App On Click Start |
            | level 1	              | perfil                      | string       | App On Click Start |
            | language	              | ES                          | string       | App On Click Start |
            | page area	              | privada                     | string       | App On Click Start |
            | page intent             |	informacion                 | string       | App On Click Start |
            | channel                 |	online                      | string       | App On Click Start |
            | page instance ID        |	de                          | string       | App On Click Start |
            | page info version       |	appVersion                  | regexp named | App On Click Start |
            | page segment            |	personas                    | string       | App On Click Start |
            | sysEnv	              | app                         | string       | App On Click Start |
            | business unit	          | BBVA Mexico                 | string       | App On Click Start |
            | site app name	          | App BBVA Mexico             | string       | App On Click Start |
            | project name	          | Glomo                       | string       | App On Click Start |
            | device mobile	          | si                          | string       | App On Click Start |
            | user userState	      | logado                      | string       | App On Click Start |
            | user segment global     |	003001                      | string       | App On Click Start |
            | profile ID	          | profileID                   | regexp named | App On Click Start |
            | user gender	          | gender                      | regexp named | App On Click Start |
            | user age	              | age                         | regexp named | App On Click Start |
            | global application      | financial habits            | string       | App On Click Start |
            | application name	      | habitos financieros         | string       | App On Click Start |
            | application type	      | autogestion                 | string       | App On Click Start |
            | fulfillment model	      | online/offline              | string       | App On Click Start |
            | application step	      | perfil                      | string       | App On Click Start |
            | internal campaign	      |	                            | empty array  | App On Click Start |
            | optimization attributes |		                        | empty array  | App On Click Start |
            | products attributes	  |	                            | empty array  | App On Click Start |

    @ANA_EVENT_KYC002
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: App Page Visit - kyc profile entry
        Given a user with the following criteria
            | criteria       |
            | kyc validation |
        And the user accesses to profile screen
        And the analytics interceptor service is initiated
        When the user taps on "add kyc validation" profile button
        Then the analytics events contains the following variables
            | item                     | value                                                         | type         | event          |
            | analytics	               | analytics/glomo_base	                                       | json schema  | App Page Visit |
            | version DL               | 20250414_5.0	                                               | string       | App Page Visit |
            | page name	               | app:privada:personas:habitos financieros:1 informacion previa | string       | App Page Visit |
            | level 1	               | habitos financieros                                           | string       | App Page Visit |
            | level 2	               | 1 informacion previa                                          | string       | App Page Visit |
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
            | user segment profile     | perfil                                                        | string       | App Page Visit |
            | global application       | financial habits                                              | string       | App Page Visit |
            | application name	       | habitos financieros                                           | string       | App Page Visit |
            | application type	       | autogestion                                                   | string       | App Page Visit |
            | fulfillment model	       | online/offline                                                | string       | App Page Visit |
            | application step	       | 1 informacion previa                                          | string       | App Page Visit |
            | custom fields	           |                                                               | string       | App Page Visit |
            | application typology	   | perfil                                                        | string       | App Page Visit |
            | internal campaign	       |	                                                           | empty array  | App Page Visit |
            | optimization attributes  |		                                                       | empty array  | App Page Visit |

    @ANA_EVENT_KYC003
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: App Started - kyc validation
        Given a user with the following criteria
            | criteria       |
            | kyc validation |
        And the user accesses to profile screen
        And the user taps on "add kyc validation" profile button
        And the analytics interceptor service is initiated
        When the user view the form
        Then the analytics events contains the following variables
            | item                     | value                                                         | type         | event       |
            | version DL               | 20250414_5.0	                                               | string       | App Started |
            | analytics	               | analytics/glomo_base	                                       | json schema  | App Started |
            | page name	               | app:privada:personas:habitos financieros:1 informacion previa | string       | App Started |
            | level 1	               | habitos financieros                                           | string       | App Started |
            | level 2	               | 1 informacion previa                                          | string       | App Started |
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
            | user segment profile     | perfil                                                        | string       | App Started |
            | global application       | financial habits                                              | string       | App Started |
            | application name	       | habitos financieros                                           | string       | App Started |
            | application type	       | autogestion                                                   | string       | App Started |
            | fulfillment model	       | online/offline                                                | string       | App Started |
            | application step	       | continuar                                                     | string       | App Started |
            | custom fields	           |                                                               | string       | App Started |
            | application typology	   | perfil                                                        | string       | App Started |
            | internal campaign	       |	                                                           | empty array  | App Started |
            | optimization attributes  |		                                                       | empty array  | App Started |

    @ANA_EVENT_KYC004
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: App Step 2 - kyc validation
        Given a user with the following criteria
            | criteria       |
            | kyc validation |
        And the user accesses to profile screen
        And the user taps on "add kyc validation" profile button
        And the analytics interceptor service is initiated
        When the user view the form
        Then the analytics events contains the following variables
            | item                     | value                                                         | type         | event      |
            | analytics	               | analytics/glomo_base	                                       | json schema  | App Step 2 |
            | version DL               | 20250414_5.0	                                               | string       | App Step 2 |
            | page name	               | app:privada:personas:habitos financieros:2 cuestionario       | string       | App Step 2 |
            | level 1	               | habitos financieros                                           | string       | App Step 2 |
            | level 2	               | 2 cuestionario                                                | string       | App Step 2 |
            | language	               | ES                                                            | string       | App Step 2 |
            | page area	               | privada                                                       | string       | App Step 2 |
            | page intent              | transaccion                                                   | string       | App Step 2 |
            | channel                  | online                                                        | string       | App Step 2 |
            | page instance ID         | de                                                            | string       | App Step 2 |
            | page info version        | appVersion                                                    | regexp named | App Step 2 |
            | page segment             | personas                                                      | string       | App Step 2 |
            | sysEnv	               | app                                                           | string       | App Step 2 |
            | business unit	           | BBVA Mexico                                                   | string       | App Step 2 |
            | site app name	           | App BBVA Mexico                                               | string       | App Step 2 |
            | project name	           | Glomo                                                         | string       | App Step 2 |
            | device mobile	           | si                                                            | string       | App Step 2 |
            | user userState	       | logado                                                        | string       | App Step 2 |
            | user segment global      | 003001                                                        | string       | App Step 2 |
            | profile ID	           | profileID                                                     | regexp named | App Step 2 |
            | user gender	           | gender                                                        | regexp named | App Step 2 |
            | user age	               | age                                                           | regexp named | App Step 2 |
            | user segment profile     | perfil                                                        | string       | App Step 2 |
            | global application       | financial habits                                              | string       | App Step 2 |
            | application name	       | habitos financieros                                           | string       | App Step 2 |
            | application type	       | autogestion                                                   | string       | App Step 2 |
            | fulfillment model	       | online/offline                                                | string       | App Step 2 |
            | application step	       | 2 cuestionario                                                | string       | App Step 2 |
            | custom fields	           |                                                               | string       | App Step 2 |
            | application typology	   | perfil                                                        | string       | App Step 2 |
            | internal campaign	       |	                                                           | empty array  | App Step 2 |
            | optimization attributes  |		                                                       | empty array  | App Step 2 |

    @ANA_EVENT_KYC005
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: App Step 3 - kyc validation
        Given a user with the following criteria
            | criteria       |
            | kyc validation |
        And the user accesses to profile screen
        And the user taps on "add kyc validation" profile button
        And the analytics interceptor service is initiated
        And the user view the form
        When the user answers the questionnaire down to the last detail
        Then the analytics events contains the following variables
            | item                     | value                                                         | type         | event      |
            | analytics	               | analytics/glomo_base	                                       | json schema  | App Step 3 |
            | version DL               | 20250414_5.0	                                               | string       | App Step 3 |
            | page name	               | app:privada:personas:habitos financieros:3 confirmacion       | string       | App Step 3 |
            | level 1	               | habitos financieros                                           | string       | App Step 3 |
            | level 2	               | 3 confirmacion                                                | string       | App Step 3 |
            | language	               | ES                                                            | string       | App Step 3 |
            | page area	               | privada                                                       | string       | App Step 3 |
            | page intent              | transaccion                                                   | string       | App Step 3 |
            | channel                  | online                                                        | string       | App Step 3 |
            | page instance ID         | de                                                            | string       | App Step 3 |
            | page info version        | appVersion                                                    | regexp named | App Step 3 |
            | page segment             | personas                                                      | string       | App Step 3 |
            | sysEnv	               | app                                                           | string       | App Step 3 |
            | business unit	           | BBVA Mexico                                                   | string       | App Step 3 |
            | site app name	           | App BBVA Mexico                                               | string       | App Step 3 |
            | project name	           | Glomo                                                         | string       | App Step 3 |
            | device mobile	           | si                                                            | string       | App Step 3 |
            | user userState	       | logado                                                        | string       | App Step 3 |
            | user segment global      | 003001                                                        | string       | App Step 3 |
            | profile ID	           | profileID                                                     | regexp named | App Step 3 |
            | user gender	           | gender                                                        | regexp named | App Step 3 |
            | user age	               | age                                                           | regexp named | App Step 3 |
            | user segment profile     | perfil                                                        | string       | App Step 3 |
            | global application       | financial habits                                              | string       | App Step 3 |
            | application name	       | habitos financieros                                           | string       | App Step 3 |
            | application type	       | autogestion                                                   | string       | App Step 3 |
            | fulfillment model	       | online/offline                                                | string       | App Step 3 |
            | application step	       | 3 confirmacion                                                | string       | App Step 3 |
            | custom fields	           |                                                               | string       | App Step 3 |
            | application typology	   | perfil                                                        | string       | App Step 3 |
            | internal campaign	       |	                                                           | empty array  | App Step 3 |
            | optimization attributes  |		                                                       | empty array  | App Step 3 |

    @ANA_EVENT_KYC006
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: App Step 4 - kyc validation
        Given a user with the following criteria
            | criteria       |
            | kyc validation |
        And the user accesses to profile screen
        And the user taps on "add kyc validation" profile button
        And the analytics interceptor service is initiated
        When the user answers the form successfully with "simple case"
        Then the analytics events contains the following variables
            | item                     | value                                                         | type         | event      |
            | analytics	               | analytics/glomo_base	                                       | json schema  | App Step 4 |
            | version DL               | 20250414_5.0	                                               | string       | App Step 4 |
            | page name	               | app:privada:personas:habitos financieros:4 otp                | string       | App Step 4 |
            | level 1	               | habitos financieros                                           | string       | App Step 4 |
            | level 2	               | 4 otp                                                         | string       | App Step 4 |
            | language	               | ES                                                            | string       | App Step 4 |
            | page area	               | privada                                                       | string       | App Step 4 |
            | page intent              | transaccion                                                   | string       | App Step 4 |
            | channel                  | online                                                        | string       | App Step 4 |
            | page instance ID         | de                                                            | string       | App Step 4 |
            | page info version        | appVersion                                                    | regexp named | App Step 4 |
            | page segment             | personas                                                      | string       | App Step 4 |
            | sysEnv	               | app                                                           | string       | App Step 4 |
            | business unit	           | BBVA Mexico                                                   | string       | App Step 4 |
            | site app name	           | App BBVA Mexico                                               | string       | App Step 4 |
            | project name	           | Glomo                                                         | string       | App Step 4 |
            | device mobile	           | si                                                            | string       | App Step 4 |
            | user userState	       | logado                                                        | string       | App Step 4 |
            | user segment global      | 003001                                                        | string       | App Step 4 |
            | profile ID	           | profileID                                                     | regexp named | App Step 4 |
            | user gender	           | gender                                                        | regexp named | App Step 4 |
            | user age	               | age                                                           | regexp named | App Step 4 |
            | user segment profile     | perfil                                                        | string       | App Step 4 |
            | global application       | financial habits                                              | string       | App Step 4 |
            | application name	       | habitos financieros                                           | string       | App Step 4 |
            | application type	       | autogestion                                                   | string       | App Step 4 |
            | fulfillment model	       | online/offline                                                | string       | App Step 4 |
            | application step	       | 4 otp                                                         | string       | App Step 4 |
            | custom fields	           | firma:token                                                   | string       | App Step 4 |
            | application typology	   | perfil                                                        | string       | App Step 4 |
            | internal campaign	       |	                                                           | empty array  | App Step 4 |
            | optimization attributes  |		                                                       | empty array  | App Step 4 |

    @ANA_EVENT_KYC007
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: App Completed - kyc validation
        Given a user with the following criteria
            | criteria       |
            | kyc validation |
        And the user accesses to profile screen
        And the user taps on "add kyc validation" profile button
        And the analytics interceptor service is initiated
        When the user answers the form successfully with "simple case"
        Then the analytics events contains the following variables
            | item                         | value                                                         | type         | event         |
            | analytics	                   | analytics/glomo_base	                                       | json schema  | App Completed |
            | version DL                   | 20250414_5.0	                                               | string       | App Completed |
            | page name	                   | app:privada:personas:habitos financieros:pagina exitosa       | string       | App Completed |
            | level 1	                   | habitos financieros                                           | string       | App Completed |
            | level 2	                   | pagina exitosa                                                | string       | App Completed |
            | language	                   | ES                                                            | string       | App Completed |
            | page area	                   | privada                                                       | string       | App Completed |
            | page intent                  | transaccion                                                   | string       | App Completed |
            | channel                      | online                                                        | string       | App Completed |
            | page instance ID             | de                                                            | string       | App Completed |
            | page info version            | appVersion                                                    | regexp named | App Completed |
            | page segment                 | personas                                                      | string       | App Completed |
            | sysEnv	                   | app                                                           | string       | App Completed |
            | business unit	               | BBVA Mexico                                                   | string       | App Completed |
            | site app name	               | App BBVA Mexico                                               | string       | App Completed |
            | project name	               | Glomo                                                         | string       | App Completed |
            | device mobile	               | si                                                            | string       | App Completed |
            | user userState	           | logado                                                        | string       | App Completed |
            | user segment global          | 003001                                                        | string       | App Completed |
            | profile ID	               | profileID                                                     | regexp named | App Completed |
            | user gender	               | gender                                                        | regexp named | App Completed |
            | user age	                   | age                                                           | regexp named | App Completed |
            | user segment profile         | perfil                                                        | string       | App Completed |
            | global application           | financial habits                                              | string       | App Completed |
            | application name	           | habitos financieros                                           | string       | App Completed |
            | application type	           | autogestion                                                   | string       | App Completed |
            | fulfillment model	           | online/offline                                                | string       | App Completed |
            | application state            | finalizado                                                    | string       | App Completed |
            | application operation number | alphaNumericCaseSpace                                         | regexp named | App Completed |
            | application step	           | pagina exitosa                                                | string       | App Completed |
            | custom fields	               | firma:token                                                   | string       | App Completed |
            | application typology	       | perfil                                                        | string       | App Completed |
            | internal campaign	           |	                                                           | empty array  | App Completed |
            | optimization attributes      |		                                                       | empty array  | App Completed |

    @ANA_EVENT_KYC008
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: App Page View - kyc validation footprint
        Given a user with the following criteria
            | criteria       |
            | kyc validation |
        And the user accesses to profile screen
        And the user taps on "add kyc validation" profile button
        And the analytics interceptor service is initiated
        And the user view the form
        When the user answers the form successfully with "risk"
        Then the analytics events contains the following variables
            | item                     | value                                                         | type             | event     |
            | analytics	               | analytics/glomo_base	                                       | json schema      | Page View |
            | version DL               | 20250414_5.0	                                               | string           | Page View |
            | page name	               | app:privada:personas:habitos financieros:acude a una sucursal | string           | Page View |
            | level 1	               | habitos financieros                                           | string           | Page View |
            | level 2	               | acude a una sucursal                                          | string           | Page View |
            | language	               | ES                                                            | string           | Page View |
            | page area	               | privada                                                       | string           | Page View |
            | page intent              | transaccion                                                   | string           | Page View |
            | channel                  | online                                                        | string           | Page View |
            | page instance ID         | de                                                            | string           | Page View |
            | page info version        | appVersion                                                    | regexp named     | Page View |
            | page segment             | personas                                                      | string           | Page View |
            | sysEnv	               | app                                                           | string           | Page View |
            | business unit	           | BBVA Mexico                                                   | string           | Page View |
            | site app name	           | App BBVA Mexico                                               | string           | Page View |
            | project name	           | Glomo                                                         | string           | Page View |
            | device mobile	           | si                                                            | string           | Page View |
            | user userState	       | logado                                                        | string           | Page View |
            | user segment global      | 003001                                                        | string           | Page View |
            | profile ID	           | profileID                                                     | regexp named     | Page View |
            | user gender	           | gender                                                        | regexp named     | Page View |
            | user age	               | age                                                           | regexp named     | Page View |
            | optimization attributes  |		                                                       | empty array      | Page View |
            | internal campaign	       |	                                                           | empty array      | Page View |
            | application              |                                                               | empty str object | Page View |
            | products attributes      |                                                               | empty array      | Page View |

    @ANA_EVENT_KYC009
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android @vbank-modified
    # REQUIRED: edit the last service to have an error response and display the required modal in the test
    Scenario: App Page View - kyc validation footprint Error
        Given a user with the following criteria
            | criteria       |
            | kyc validation |
        And the user accesses to profile screen
        And the user taps on "add kyc validation" profile button
        And the analytics interceptor service is initiated
        And the user view the form
        When the user retries request
        Then the analytics events contains the following variables
            | item                     | value                                                                    | type             | event     |
            | analytics	               | analytics/glomo_base	                                                  | json schema      | Page View |
            | version DL               | 20250414_5.0	                                                          | string           | Page View |
            | page name	               | app:privada:personas:habitos financieros:error informacion no disponible | string           | Page View |
            | level 1	               | habitos financieros                                                      | string           | Page View |
            | level 2	               | error informacion no disponible                                          | string           | Page View |
            | language	               | ES                                                                       | string           | Page View |
            | page area	               | privada                                                                  | string           | Page View |
            | page intent              | transaccion                                                              | string           | Page View |
            | channel                  | online                                                                   | string           | Page View |
            | page instance ID         | de                                                                       | string           | Page View |
            | page info version        | appVersion                                                               | regexp named     | Page View |
            | page segment             | personas                                                                 | string           | Page View |
            | sysEnv	               | app                                                                      | string           | Page View |
            | business unit	           | BBVA Mexico                                                              | string           | Page View |
            | site app name	           | App BBVA Mexico                                                          | string           | Page View |
            | project name	           | Glomo                                                                    | string           | Page View |
            | device mobile	           | si                                                                       | string           | Page View |
            | user userState	       | logado                                                                   | string           | Page View |
            | user segment global      | 003001                                                                   | string           | Page View |
            | profile ID	           | profileID                                                                | regexp named     | Page View |
            | user gender	           | gender                                                                   | regexp named     | Page View |
            | user age	               | age                                                                      | regexp named     | Page View |
            | error page               | error informacion no disponible                                          | string           | Page View |
            | internal campaign	       |	                                                                      | empty array      | Page View |
            | optimization attributes  |		                                                                  | empty array      | Page View |
            | application              |                                                                          | empty str object | Page View |
            | products attributes      |                                                                          | empty array      | Page View |

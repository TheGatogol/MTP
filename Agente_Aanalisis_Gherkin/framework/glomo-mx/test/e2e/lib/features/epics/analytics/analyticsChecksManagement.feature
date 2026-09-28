@analyticsCheckManagement
Feature: Analytics Check Management

    @ANA_CMA001
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: Authorizing a check in checks management authorize screen entering from checks section screen
        Given a user with the following criteria
            | criteria                                    |
            | pesos account with checks management active |
            | has accepted the management service terms   |
        And the user accesses to checks operatives with checks management active
        And the user selects the checks management option with "activated" service terms
        When the user selects the option to add check
        Then the device contains the following variables
            | item                      | value                                                | type             |
            | analytics                 | analytics/glomo_base                                 | json schema      |
            | version DL                | 20250414_5.0                                         | string           |
            | page name                 | app:privada:personas:cheques:datos cheques           | string           |
            | level 1                   | cheques                                              | string           |
            | level 2                   | datos cheques                                        | string           |
            | language                  | ES                                                   | string           |
            | page area                 | privada                                              | string           |
            | page intent               | informacion                                          | string           |
            | channel                   | online                                               | string           |
            | page instance ID          | de                                                   | string           |
            | page info version         | appVersion                                           | regexp named     |
            | page segment              | personas                                             | string           |
            | sysEnv                    | app                                                  | string           |
            | business unit             | BBVA Mexico                                          | string           |
            | site app name             | App BBVA Mexico                                      | string           |
            | project name              | Glomo                                                | string           |
            | device mobile             | si                                                   | string           |
            | user userState            | logado                                               | string           |
            | user segment global       | 003001                                               | string           |
            | profile ID                | profileID                                            | regexp named     |
            | user age                  | age                                                  | regexp named     |
            | user gender               | gender                                               | regexp named     |
            | internal campaign         |                                                      | empty array      |
            | optimization attributes   |                                                      | empty array      |
            | application               |                                                      | empty str object |
            | products attributes       |                                                      | empty array      |

    @ANA_CMA002
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: Edits check in the filled check management data step
        Given a user with the following criteria
            | criteria                                     |
            | pesos account with checks management active  |
            | has accepted the management service terms    |
        And the user has filled check management data step
        And the analytics interceptor service is initiated
        When the user edits the check
        Then the analytics events contains the following variables
            | item                      | value                                                      | type             | event     |
            | analytics                 | analytics/glomo_base                                       | json schema      | Page View |
            | version DL                | 20250414_5.0                                               | string           | Page View |
            | page name                 | app:privada:personas:cheques:datos cheques:editar cheque   | string           | Page View |
            | level 1                   | cheques                                                    | string           | Page View |
            | level 2                   | datos cheques                                              | string           | Page View |
            | level 3                   | editar cheque                                              | string           | Page View |
            | language                  | ES                                                         | string           | Page View |
            | page area                 | privada                                                    | string           | Page View |
            | page intent               | informacion                                                | string           | Page View |
            | channel                   | online                                                     | string           | Page View |
            | page instance ID          | de                                                         | string           | Page View |
            | page info version         | appVersion                                                 | regexp named     | Page View |
            | page segment              | personas                                                   | string           | Page View |
            | sysEnv                    | app                                                        | string           | Page View |
            | business unit             | BBVA Mexico                                                | string           | Page View |
            | site app name             | App BBVA Mexico                                            | string           | Page View |
            | project name              | Glomo                                                      | string           | Page View |
            | device mobile             | si                                                         | string           | Page View |
            | user userState            | logado                                                     | string           | Page View |
            | user segment global       | 003001                                                     | string           | Page View |
            | profile ID                | profileID                                                  | regexp named     | Page View |
            | user age                  | age                                                        | regexp named     | Page View |
            | user gender               | gender                                                     | regexp named     | Page View |
            | internal campaign         |                                                            | empty array      | Page View |
            | optimization attributes   |                                                            | empty array      | Page View |
            | application               |                                                            | empty str object | Page View |
            | products attributes        |                                                            | empty array      | Page View |

    @ANA_CMA003
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: Removes check in the filled check management data step
        Given a user with the following criteria
            | criteria                                     |
            | pesos account with checks management active  |
            | has accepted the management service terms    |
        And the user is in the warning delete check screen
        When the user confirms check removal
        Then the device contains the following variables
            | item                      | value                                                      | type             |
            | analytics                 | analytics/glomo_base                                       | json schema      |
            | version DL                | 20250414_5.0                                               | string           |
            | page name                 | app:privada:personas:cheques:datos cheques:eliminar cheque | string           |
            | level 1                   | cheques                                                    | string           |
            | level 2                   | datos cheques                                              | string           |
            | level 3                   | eliminar cheque                                            | string           |
            | language                  | ES                                                         | string           |
            | page area                 | privada                                                    | string           |
            | page intent               | informacion                                                | string           |
            | channel                   | online                                                     | string           |
            | page instance ID          | de                                                         | string           |
            | page info version         | appVersion                                                 | regexp named     |
            | page segment              | personas                                                   | string           |
            | sysEnv                    | app                                                        | string           |
            | business unit             | BBVA Mexico                                                | string           |
            | site app name             | App BBVA Mexico                                            | string           |
            | project name              | Glomo                                                      | string           |
            | link name             	| eliminar cheque	                                         | string           |
            | device mobile             | si                                                         | string           |
            | user userState            | logado                                                     | string           |
            | user segment global       | 003001                                                     | string           |
            | profile ID                | profileID                                                  | regexp named     |
            | user age                  | age                                                        | regexp named     |
            | user gender               | gender                                                     | regexp named     |
            | internal campaign         |                                                            | empty array      |
            | optimization attributes   |                                                            | empty array      |
            | application               |                                                            | empty str object |
            | products attributes        |                                                            | empty array      |

    @ANA_CMA004
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: Continues in the check management summary screen
        Given a user with the following criteria
            | criteria                                     |
            | pesos account with checks management active  |
            | has accepted the management service terms    |
        And the user accesses to checks operatives with checks management active
        And the user selects the checks management option with "activated" service terms
        And the user selects the option to add check
        And the user fill a check
        When the user goes to the "summary" step
        Then the device contains the following variables
            | item                      | value                                                      | type             |
            | analytics                 | analytics/glomo_base                                       | json schema      |
            | version DL                | 20250414_5.0                                               | string           |
            | page name                 | app:privada:personas:cheques:liberar cheques:3 confirmacion| string           |
            | level 1                   | cheques                                                    | string           |
            | level 2                   | liberar cheques                                            | string           |
            | level 3                   | 3 confirmacion                                             | string           |
            | language                  | ES                                                         | string           |
            | page area                 | privada                                                    | string           |
            | page intent               | informacion                                                | string           |
            | channel                   | online                                                     | string           |
            | page instance ID          | de                                                         | string           |
            | page info version         | appVersion                                                 | regexp named     |
            | page segment              | personas                                                   | string           |
            | sysEnv                    | app                                                        | string           |
            | business unit             | BBVA Mexico                                                | string           |
            | site app name             | App BBVA Mexico                                            | string           |
            | project name              | Glomo                                                      | string           |
            | device mobile             | si                                                         | string           |
            | user userState            | logado                                                     | string           |
            | user segment global       | 003001                                                     | string           |
            | profile ID                | profileID                                                  | regexp named     |
            | user age                  | age                                                        | regexp named     |
            | user gender               | gender                                                     | regexp named     |
            | global application        | check deposits                                             | string           |
            | application name          | liberar cheques                                            | string           |
            | application type          | operativa                                                  | string           |
            | application step          | 3 confirmacion                                             | string           |
            | fulfillment model         | online                                                     | string           |
            | application typology      | 1                                                          | string           |
            | internal campaign         |                                                            | empty array      |
            | optimization attributes   |                                                            | empty array      |
            | products attributes       |                                                            | empty array      |

    @ANA_CMA005
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: Continues in the check management summary screen - Simulate
        Given a user with the following criteria
            | criteria                                     |
            | pesos account with checks management active  |
            | has accepted the management service terms    |
        And the user accesses to checks operatives with checks management active
        And the user selects the checks management option with "activated" service terms
        And the user selects the option to add check
        And the user fill a check
        When the user goes to the "summary" step
        Then the device contains the following variables
            | item                    | value                                                       | type        |
            | analytics               | analytics/glomo_base                                        | json schema |
            | version DL              | 20250414_5.0                                                | string      |
            | page name               | app:privada:personas:cheques:liberar cheques:3 confirmacion | string      |
            | level 1                 | cheques                                                     | string      |
            | level 2                 | liberar cheques                                             | string      |
            | level 3                 | 3 confirmacion                                              | string      |
            | language                | ES                                                          | string      |
            | page area               | privada                                                     | string      |
            | page intent             | informacion                                                 | string      |
            | channel                 | online                                                      | string      |
            | page instance ID        | de                                                          | string      |
            | page info version       | appVersion                                                  | regexp name |
            | page segment            | personas                                                    | string      |
            | sysEnv                  | app                                                         | string      |
            | business unit           | BBVA Mexico                                                 | string      |
            | site app name           | App BBVA Mexico                                             | string      |
            | project name            | Glomo                                                       | string      |
            | device mobile           | si                                                          | string      |
            | user userState          | logado                                                      | string      |
            | user segment global     | 003001                                                      | string      |
            | profile ID              | profileID                                                   | regexp name |
            | user age                | age                                                         | regexp name |
            | user gender             | gender                                                      | regexp name |
            | global application      | check deposits                                              | string      |
            | application name        | liberar cheques                                             | string      |
            | application type        | operativa                                                   | string      |
            | application step        | 3 confirmacion                                              | string      |
            | fulfillment model       | online                                                      | string      |
            | application typology    | 1                                                           | string      |
            | internal campaign       |                                                             | empty array |
            | optimization attributes |                                                             | empty array |
            | products attributes     |                                                             | empty array |

    @ANA_CMA006
    @analytics
    @MX @vbank @web-done @backend(test) @manual @JIRA.GLOMOGL-26754
    @web @ios @android
    Scenario: Signs the check management operation and receives management confirmation receipt
        Given a user with the following criteria
            | criteria                                     |
            | pesos account with checks management active  |
            | has accepted the management service terms    |
        And the user accesses to the signing screen of check management operation
        When the user signs
        Then the device contains the following variables
            | item                         | value                                                       | type             |
            | analytics                    | analytics/glomo_base                                        | json schema      |
            | version DL                   | 20250414_5.0                                                | string           |
            | page name                    | app:privada:personas:cheques:liberar cheques:pagina exitosa | string           |
            | level 1                      | cheques                                                     | string           |
            | level 2                      | liberar cheques                                             | string           |
            | level 3                      | pagina exitosa                                              | string           |
            | language                     | ES                                                          | string           |
            | page area                    | privada                                                     | string           |
            | page intent                  | informacion                                                 | string           |
            | channel                      | online                                                      | string           |
            | page instance ID             | de                                                          | string           |
            | page info version            | appVersion                                                  | regexp named     |
            | page segment                 | personas                                                    | string           |
            | sysEnv                       | app                                                         | string           |
            | business unit                | BBVA Mexico                                                 | string           |
            | site app name                | App BBVA Mexico                                             | string           |
            | project name                 | Glomo                                                       | string           |
            | device mobile                | si                                                          | string           |
            | user userState               | logado                                                      | string           |
            | user segment global          | 003001                                                      | string           |
            | profile ID                   | profileID                                                   | regexp named     |
            | user age                     | age                                                         | regexp named     |
            | user gender                  | gender                                                      | regexp named     |
            | global application           | check deposits                                              | string           |
            | application name             | liberar cheques                                             | string           |
            | application type             | operativa                                                   | string           |
            | application step             | pagina exitosa                                              | string           |
            | fulfillment model            | online                                                      | string           |
            | application typology         | 1                                                           | string           |
            | custom fields                | firma:token	                                             | string           |
            | application state	           | finalizado                                                  | string           |
            | application operation number | 5345345                                                     | string           |
            | internal campaign            |                                                             | empty array      |
            | optimization attributes      |                                                             | empty array      |
            | products attributes          |                                                             | empty array      |

    @ANA_CMA007
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario Outline: Adding "<check_num_input>" and "<amount_input>" in management add check screen
        Given a user with the following criteria
            | criteria                                     |
            | pesos account with checks management active  |
            | has accepted the management service terms    |
        And the user accesses to checks operatives with checks management active
        And the user selects the checks management option with "activated" service terms
        And the user selects the option to add check
        When the user adds a check and fill "<check_num_input>" "<amount_input>"
        Then the device contains the following variables
            | item                      | value                                                      | type             |
            | analytics                 | analytics/glomo_base                                       | json schema      |
            | version DL                | 20250414_5.0                                               | string           |
            | page name                 | app:privada:personas:cheques:liberar cheques:1 anadir cheque | string           |
            | level 1                   | cheques                                                    | string           |
            | level 2                   | liberar cheques                                            | string           |
            | level 3                   | 1 anadir cheque                                           | string           |
            | language                  | ES                                                         | string           |
            | page area                 | privada                                                    | string           |
            | page intent               | informacion                                                | string           |
            | channel                   | online                                                     | string           |
            | page instance ID          | de                                                         | string           |
            | page info version         | appVersion                                                 | regexp named     |
            | page segment              | personas                                                   | string           |
            | sysEnv                    | app                                                        | string           |
            | business unit             | BBVA Mexico                                                | string           |
            | site app name             | App BBVA Mexico                                            | string           |
            | project name              | Glomo                                                      | string           |
            | device mobile             | si                                                         | string           |
            | user userState            | logado                                                     | string           |
            | user segment global       | 003001                                                     | string           |
            | profile ID                | profileID                                                  | regexp named     |
            | user age                  | age                                                        | regexp named     |
            | user gender               | gender                                                     | regexp named     |
            | global application        | check deposits                                             | string           |
            | application name          | liberar cheques                                            | string           |
            | application type          | operativa                                                  | string           |
            | application step          | <value_step>                                              | string           |
            | fulfillment model         | online                                                     | string           |
            | internal campaign         |                                                            | empty array      |
            | optimization attributes   |                                                            | empty array      |
            | products attributes        |                                                            | empty array      |

        Examples:
            | check_num_input | amount_input | value_step |
            | empty           | empty        |  anadir cheque |
            | empty           | valid_amount |  importe   |
            | valid_number    | empty        |  numero de cheque |

    @ANA_CMA008
    @analytics
    @MX @vbank @web-done @test
    @web @ios @android
    Scenario: Signs the check management operation
        Given a user with the following criteria
            | criteria                                     |
            | pesos account with checks management active  |
            | has accepted the management service terms    |
        And the user accesses to checks operatives with checks management active
        And the user selects the checks management option with "activated" service terms
        And the user selects the option to add check
        And the user fill a check
        And the user goes to the "summary" step
        When the user confirms simulation
        Then the device contains the following variables
            |item	                                    | value	                                                | type       |
            |analytics                                  | analytics/glomo_base	                                | json schema|
            |version DL	                                | 20250414_5.0	                                        | string     |
            |page name	                                | app:privada:personas:cheques:liberar cheques:4 otp	| string     |
            |level 1	                                | cheques	                                            | string     |
            |level 2	                                | liberar cheques	                                    | string     |
            |level 3	                                | 4 otp	                                                | string     |
            |language	                                | ES	                                                | string     |
            |page area	                                | privada	                                            | string     |
            |page intent	                            | informacion	                                        | string     |
            |channel	                                | online	                                            | string     |
            |page instance ID	                        | de	                                                | string     |
            |page info version	                        | appVersion	                                        | regexp name|
            |page segment	                            | personas	                                            | string     |
            |sysEnv	                                    | app	                                                | string     |
            |business unit	                            | BBVA Mexico	                                        | string     |
            |site app name	                            | App BBVA Mexico	                                    | string     |
            |project name	                            | Glomo	                                                | string     |
            |device mobile	                            | si	                                                | string     |
            |user userState	                            | logado	                                            | string     |
            |user segment global	                    | 003001	                                            | string     |
            |profile ID	                                | profileID	                                            | regexp name|
            |user age	                                | age	                                                | regexp name|
            |user gender	                            | gender	                                            | regexp name|
            |global application	                        | check deposits	                                    | string     |
            |application name	                        | liberar cheques	                                    | string     |
            |application type	                        | operativa	                                            | string     |
            |application step	                        | 4 otp	                                                | string     |
            |fulfillment model	                        | online	                                            | string     |
            |application typology	                    | 1	                                                    | string     |
            |custom fields                              | firma:token	                                        | string     |
            |internal campaign		                    |                                                       | empty array|
            |optimization attributes		            |                                                       | empty array|
            |products attributes		                |                                                       | empty array|

    @ANA_CMA009
    @analytics
    @MX @vbank @web-done @test
    @web @ios @android
    Scenario: Removes check in the filled check management data step without confirm
        Given a user with the following criteria
            | criteria                                     |
            | pesos account with checks management active  |
            | has accepted the management service terms    |
        When the user is in the warning delete check screen
        Then the device contains the following variables
            | item                      | value                                                      | type             |
            | analytics                 | analytics/glomo_base                                       | json schema      |
            | version DL                | 20250414_5.0                                               | string           |
            | page name                 | app:privada:personas:cheques:datos cheques:eliminar cheque | string           |
            | level 1                   | cheques                                                    | string           |
            | level 2                   | datos cheques                                              | string           |
            | level 3                   | eliminar cheque                                            | string           |
            | language                  | ES                                                         | string           |
            | page area                 | privada                                                    | string           |
            | page intent               | informacion                                                | string           |
            | channel                   | online                                                     | string           |
            | page instance ID          | de                                                         | string           |
            | page info version         | appVersion                                                 | regexp named     |
            | page segment              | personas                                                   | string           |
            | sysEnv                    | app                                                        | string           |
            | business unit             | BBVA Mexico                                                | string           |
            | site app name             | App BBVA Mexico                                            | string           |
            | project name              | Glomo                                                      | string           |
            | device mobile             | si                                                         | string           |
            | user userState            | logado                                                     | string           |
            | user segment global       | 003001                                                     | string           |
            | profile ID                | profileID                                                  | regexp named     |
            | user age                  | age                                                        | regexp named     |
            | user gender               | gender                                                     | regexp named     |
            | internal campaign         |                                                            | empty array      |
            | optimization attributes   |                                                            | empty array      |
            | application               |                                                            | empty str object |
            | products attributes       |                                                            | empty array      |

    @ANA_CMA010
    @analytics
    @MX @vbank @web-done @test
    @web @ios @android
    Scenario: Adding first check
        Given a user with the following criteria
            | criteria                                     |
            | pesos account with checks management active  |
            | has accepted the management service terms    |
        And the user accesses to checks operatives with checks management active
        And the user selects the checks management option with "activated" service terms
        And the user selects the option to add check
        And the analytics interceptor service is initiated
        When the user adds a check
        Then the analytics events contains the following variables
            | item	                   | value                          	        | type        |event             |
            | analytics	               | analytics/glomo_base	                    | json schema |App On Click Start|
            | version DL	           | 20250414_5.0	                            | string      |App On Click Start|
            | page name                | app:privada:personas:cheques:datos cheques	| string      |App On Click Start|
            | level 1                  | cheques	                                | string      |App On Click Start|
            | level 2                  | datos cheques	                            | string      |App On Click Start|
            | language                 | ES	                                        | string      |App On Click Start|
            | page area	               | privada	                                | string      |App On Click Start|
            | page intent	           | informacion	                            | string      |App On Click Start|
            | channel                  | online	                                    | string      |App On Click Start|
            | page instance ID	       | de	                                        | string      |App On Click Start|
            | page info version	       | appVersion	                                | regexp name |App On Click Start|
            | page segment	           | personas	                                | string      |App On Click Start|
            | sysEnv	               | app	                                    | string      |App On Click Start|
            | business unit	           | BBVA Mexico	                            | string      |App On Click Start|
            | site app name	           | App BBVA Mexico	                        | string      |App On Click Start|
            | project name	           | Glomo	                                    | string      |App On Click Start|
            | device mobile	           | si	                                        | string      |App On Click Start|
            | user userState	       | logado	                                    | string      |App On Click Start|
            | user segment global	   | 003001	                                    | string      |App On Click Start|
            | profile ID	           | profileID	                                | regexp name |App On Click Start|
            | user age	               | age                                        | regexp name |App On Click Start|
            | user gender	           | gender	                                    | regexp name |App On Click Start|
            | global application	   | check deposits	                            | string      |App On Click Start|
            | application name	       | liberar cheques	                        | string      |App On Click Start|
            | application type	       | operativa                                  | string      |App On Click Start|
            | application step	       | datos cheques	                            | string      |App On Click Start|
            | fulfillment model	       | online	                                    | string      |App On Click Start|
            | internal campaign		   |                                            | empty array |App On Click Start|
            | optimization attributes  |                                            | empty array |App On Click Start|
            | products attributes	   |                                            | empty array |App On Click Start|

    @ANA_CMA011
    @analytics
    @MX @vbank @web-done @test
    @web @ios @android
    Scenario: Show checks information in checks management authorize screen before add a check
        Given a user with the following criteria
            | criteria                                     |
            | pesos account with checks management active  |
            | has accepted the management service terms    |
        And the user go to the checks authorize screen
        And the analytics interceptor service is initiated
        When the user fill a check
        Then the analytics events contains the following variables
            |item	                    | value	                                                            | type         | event      |
            |analytics	                | analytics/glomo_base	                                            | json schema  | App Step 2 |
            |version DL	                | 20250414_5.0	                                                    | string       | App Step 2 |
            |page name	                | app:privada:personas:cheques:liberar cheques:2 confirmar datos	| string       | App Step 2 |
            |level 1	                | cheques	                                                        | string       | App Step 2 |
            |level 2	                | liberar cheques	                                                | string       | App Step 2 |
            |level 3	                | 2 confirmar datos	                                                | string       | App Step 2 |
            |language	                | ES	                                                            | string       | App Step 2 |
            |page area	                | privada	                                                        | string       | App Step 2 |
            |page intent	            | informacion	                                                    | string       | App Step 2 |
            |channel	                | online	                                                        | string       | App Step 2 |
            |page instance ID	        | de	                                                            | string       | App Step 2 |
            |page info version	        | appVersion	                                                    | regexp named | App Step 2 |
            |page segment	            | personas	                                                        | string       | App Step 2 |
            |sysEnv	                    | app	                                                            | string       | App Step 2 |
            |business unit	            | BBVA Mexico	                                                    | string       | App Step 2 |
            |site app name	            | App BBVA Mexico	                                                | string       | App Step 2 |
            |project name	            | Glomo	                                                            | string       | App Step 2 |
            |device mobile	            | si	                                                            | string       | App Step 2 |
            |user userState	            | logado	                                                        | string       | App Step 2 |
            |user segment global      	| 003001	                                                        | string       | App Step 2 |
            |profile ID	                | profileID	                                                        | regexp named | App Step 2 |
            |user age	                | age	                                                            | regexp named | App Step 2 |
            |user gender	            | gender                                                     	    | regexp named | App Step 2 |
            |global application	        | check deposits	                                                | string       | App Step 2 |
            |application name	        | liberar cheques	                                                | string       | App Step 2 |
            |application type	        | operativa	                                                        | string       | App Step 2 |
            |application step	        | 2 confirmar datos	                                                | string       | App Step 2 |
            |fulfillment model	        | online	                                                        | string       | App Step 2 |
            |internal campaign	        | 	                                                                | empty array  | App Step 2 |
            |optimization attributes	| 	                                                                | empty array  | App Step 2 |
            |products attributes		|                                                                   | empty array  | App Step 2 |

    @ANA_CMA012
    @analytics
    @MX @vbank @web-done @test
    @web @ios @android
    Scenario: Canceling the addition of a check
        Given a user with the following criteria
            | criteria                                     |
            | pesos account with checks management active  |
            | has accepted the management service terms    |
        And the user go to the checks authorize screen
        And the user go to add check screen
        And the analytics interceptor service is initiated
        When the user cancel the fill
        Then the analytics events contains the following variables
            | item	                    | value	                                                       | type            | event       |
            | analytics	                | analytics/glomo_base	                                       | json schema     | App Started |
            | version DL	            | 20250414_5.0	                                               | string          | App Started |
            | page name	                | app:privada:personas:cheques:liberar cheques:1 anadir cheque | string          | App Started |
            | level 1	                | cheques	                                                   | string          | App Started |
            | level 2	                | liberar cheques	                                           | string          | App Started |
            | level 3	                | 1 anadir cheque	                                           | string          | App Started |
            | language	                | ES	                                                       | string          | App Started |
            | page area	                | privada	                                                   | string          | App Started |
            | page intent	            | informacion	                                               | string          | App Started |
            | channel	                | online	                                                   | string          | App Started |
            | page instance ID	        | de	                                                       | string          | App Started |
            | page info version	        | appVersion	                                               | regexp named    | App Started |
            | page segment	            | personas	                                                   | string          | App Started |
            | sysEnv	                | app	                                                       | string          | App Started |
            | business unit	            | BBVA Mexico	                                               | string          | App Started |
            | site app name	            | App BBVA Mexico	                                           | string          | App Started |
            | project name	            | Glomo	                                                       | string          | App Started |
            | device mobile	            | si	                                                       | string          | App Started |
            | user userState	        | logado	                                                   | string          | App Started |
            | user segment global	    | 003001	                                                   | string          | App Started |
            | profile ID	            | profileID	                                                   | regexp named    | App Started |
            | user age	                | age	                                                       | regexp named    | App Started |
            | user gender	            | gender	                                                   | regexp named    | App Started |
            | global application	    | check deposits	                                           | string          | App Started |
            | application name	        | liberar cheques	                                           | string          | App Started |
            | application type	        | operativa	                                                   | string          | App Started |
            | application step	        | cancelar      	                                           | string          | App Started |
            | fulfillment model	        | online	                                                   | string          | App Started |
            | internal campaign		    |                                                              | empty array     | App Started |
            | optimization attributes   | 		                                                       | empty array     | App Started |
            | products attributes	    | 	                                                           | empty array     | App Started |

@curpAnalytics
Feature: Analytics - CURP

    @ANA_CUR001
    @analytics
    @MX @web
    @vbank @web-done
    @backend(test)
    Scenario: Page Visit - Curp Analytics
        Given a user with the following criteria
            | criteria              |
            | curp add analytics    |
        When the user accesses to add "curp" screen
        Then the device contains the following variables
        | item                    | value                                                | type         |
        | version DL              | 20250414_5.0                                         | string       |
        | page name               | app:privada:personas:agregar curp:1 ingresa tu clave | string       |
        | level 1                 | agregar curp                                         | string       |
        | level 2                 | 1 ingresa tu clave                                   | string       |
        | language                | ES                                                   | string       |
        | page area               | privada                                              | string       |
        | page intent             | informacion                                          | string       |
        | channel                 | online                                               | string       |
        | page instance ID        | de                                                   | string       |
        | page info version       | appVersion                                           | regexp named |
        | page segment            | personas                                             | string       |
        | sysEnv                  | app                                                  | string       |
        | business unit           | BBVA Mexico                                          | string       |
        | site app name           | App BBVA Mexico                                      | string       |
        | project name            | Glomo                                                | string       |
        | device mobile           | si                                                   | string       |
        | user userState          | logado                                               | string       |
        | user segment global     | 003001                                               | string       |
        | user age                | age                                                  | regexp named |
        | global application      | curp validation                                      | string       |
        | application name        | agregar curp                                         | string       |
        | application type        | operativa                                            | string       |
        | application step        | 1 ingresa tu clave                                   | string       |
        | fulfillment model       | online                                               | string       |
        | internal campaign       |                                                      | empty array  |
        | optimization attributes |                                                      | empty array  |
        | products attributes     |                                                      | empty array  |

    @ANA_CUR002
    @analytics
    @android @ios
    @web @web-done
    @backend(test) @MX @vbank
    Scenario: App Started Privacy Notice Case - CURP Analytics
        Given a user with the following criteria
            | criteria             |
            | curp add analytics   |
        And the user accesses to add "curp" screen
        When the user accesses to link notice privacy curp screen
        Then the device contains the following variables
            | item	                    | value	                                                | type          |
            | version DL	            | 20250414_5.0	                                        | string        |
            | page name	                | app:privada:personas:agregar curp:1 ingresa tu clave	| string        |
            | level 1	                | agregar curp 	                                        | string        |
            | level 2	                | 1 ingresa tu clave                                   	| string        |
            | language	                | ES	                                                | string        |
            | page area	                | privada	                                            | string        |
            | page intent	            | informacion	                                        | string        |
            | channel	                | online	                                            | string        |
            | page instance ID	        | de	                                                | string        |
            | version DL	            | 20250414_5.0	                                        | string        |
            | page info version	        | appVersion	                                        | regexp named  |
            | page segment	            | personas	                                            | string        |
            | sysEnv	                | app	                                                | string        |
            | business unit	            | BBVA Mexico	                                        | string        |
            | site app name	            | App BBVA Mexico	                                    | string        |
            | project name	            | Glomo	                                                | string        |
            | device mobile	            | si	                                                | string        |
            | user userState	        | logado	                                            | string        |
            | user segment global       | 003001	                                            | string        |
            | user age	                | age	                                                | regexp named  |
            | global application	    | curp validation	                                    | string        |
            | application name	        | agregar curp	                                        | string        |
            | application type	        | operativa	                                            | string        |
            | application step	        | aviso de privacidad	                                | string        |
            | fulfillment model	        | online	                                            | string        |

    @ANA_CUR003
    @analytics
    @MX @web
    @vbank @web-done
    @backend(test)
    Scenario: Page View Confirm CURP - Curp Analytics
        Given a user with the following criteria
            | criteria                |
            | curp confirmation       |
            | curp confirm national   |
        And the user accesses to profile screen
        And the user taps on "personal info show data" profile button
        When the user taps on "confirm curp" profile button
        Then the device contains the following variables
            | item                    | value                                                | type             |
            | page name               | app:privada:personas:agregar curp:confirmar curp     | string           |
            | level 1                 | agregar curp                                         | string           |
            | level 2                 | confirmar curp                                       | string           |
            | language                | ES                                                   | string           |
            | page area               | privada                                              | string           |
            | page intent             | informacion                                          | string           |
            | channel                 | online                                               | string           |
            | page instance ID        | de                                                   | string           |
            | page info version       | appVersion                                           | regexp named     |
            | page segment            | personas                                             | string           |
            | sysEnv                  | app                                                  | string           |
            | business unit           | BBVA Mexico                                          | string           |
            | site app name           | App BBVA Mexico                                      | string           |
            | project name            | Glomo                                                | string           |
            | device mobile           | si                                                   | string           |
            | user userState          | logado                                               | string           |
            | user segment global     | 003001                                               | string           |
            | internal campaign	      |	                                                     | empty array      |
            | optimization attributes |		                                                 | empty array      |
            | application	          |	                                                     | empty str object |
            | products attributes	  |                                                      | empty array      |

    @ANA_CUR004
    @analytics
    @MX @web
    @vbank @web-done
    @backend(test)
    Scenario: Page View Confirmar Mexican User - Curp Analytics
        Given a user with the following criteria
            | criteria                |
            | curp confirmation       |
            | curp confirm national   |
        And the user accesses to profile screen
        And the user taps on "personal info show data" profile button
        And the user accesses to edit "curp" screen
        And the analytics interceptor service is initiated
        When the user continues after typing curp
        Then the analytics events contains the following variables
            | item                    | value                                                                 | type             | event         |
            | page name               | app:privada:personas:agregar curp:confirmar curp usuario mexicano     | string           | Page View     |
            | level 1                 | agregar curp                                                          | string           | Page View     |
            | level 2                 | confirmar curp usuario mexicano                                       | string           | Page View     |
            | language                | ES                                                                    | string           | Page View     |
            | page area               | privada                                                               | string           | Page View     |
            | page intent             | informacion                                                           | string           | Page View     |
            | channel                 | online                                                                | string           | Page View     |
            | page instance ID        | de                                                                    | string           | Page View     |
            | page info version       | appVersion                                                            | regexp named     | Page View     |
            | page segment            | personas                                                              | string           | Page View     |
            | sysEnv                  | app                                                                   | string           | Page View     |
            | business unit           | BBVA Mexico                                                           | string           | Page View     |
            | site app name           | App BBVA Mexico                                                       | string           | Page View     |
            | project name            | Glomo                                                                 | string           | Page View     |
            | device mobile           | si                                                                    | string           | Page View     |
            | user userState          | logado                                                                | string           | Page View     |
            | user segment global     | 003001                                                                | string           | Page View     |
            | internal campaign	      |	                                                                      | empty array      | Page View     |
            | optimization attributes |		                                                                  | empty array      | Page View     |
            | application	          |	                                                                      | empty str object | Page View     |
            | products attributes	  |                                                                       | empty array      | Page View     |

    @ANA_CUR005
    @analytics
    @MX @web
    @vbank @web-done
    @backend(test)
    Scenario: Page View Confirm Foreign User - Curp Analytics
        Given a user with the following criteria
            | criteria                  |
            | curp confirm foreign      |
        And the user accesses to profile screen
        And the user taps on "personal info show data" profile button
        And the user accesses to edit "curp" screen
        And the analytics interceptor service is initiated
        When the user continues after typing curp
        Then the analytics events contains the following variables
        | item                    | value                                                                   | type             | event         |
        | page name               | app:privada:personas:agregar curp:confirmar curp usuario extranjero     | string           | Page View     |
        | level 1                 | agregar curp                                                            | string           | Page View     |
        | level 2                 | confirmar curp usuario extranjero                                       | string           | Page View     |
        | language                | ES                                                                      | string           | Page View     |
        | page area               | privada                                                                 | string           | Page View     |
        | page intent             | informacion                                                             | string           | Page View     |
        | channel                 | online                                                                  | string           | Page View     |
        | page instance ID        | de                                                                      | string           | Page View     |
        | page info version       | appVersion                                                              | regexp named     | Page View     |
        | page segment            | personas                                                                | string           | Page View     |
        | sysEnv                  | app                                                                     | string           | Page View     |
        | business unit           | BBVA Mexico                                                             | string           | Page View     |
        | site app name           | App BBVA Mexico                                                         | string           | Page View     |
        | project name            | Glomo                                                                   | string           | Page View     |
        | device mobile           | si                                                                      | string           | Page View     |
        | user userState          | logado                                                                  | string           | Page View     |
        | user segment global     | 003001                                                                  | string           | Page View     |
        | internal campaign	      |	                                                                        | empty array      | Page View     |
        | optimization attributes |		                                                                    | empty array      | Page View     |
        | application	          |	                                                                        | empty str object | Page View     |
        | products attributes	  |                                                                         | empty array      | Page View     |

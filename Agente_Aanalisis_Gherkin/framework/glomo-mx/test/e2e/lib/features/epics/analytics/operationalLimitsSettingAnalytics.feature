@operationalLimitsSettingsAnalitycs
Feature: Analytics - Operational Limits Settings

    @ANA_OLS001
    @analytics
    @MX
    @web
    @vbank
    @test
    @web-done
    Scenario: Analytics - Operational Limits Settings - PageView
        Given a user with the following criteria
            | criteria                   |
            | operational limits settings analytics |
        When the user accesses to operational limits settings
        Then the device contains the following variables
            | item                     | value                                                                  | type         |
            | analytics	               | analytics/glomo_base	                                                | json schema  |
            | version DL	           | 20250414_5.0	                                                        | string       |
            | page name	               | app:privada:personas:configuracion:limites de operacion:informacion	| string       |
            | level 1	               | configuracion	                                                        | string       |
            | level 2	               | limites de operacion	                                                | string       |
            | level 3	               | informacion	                                                        | string       |
            | language	               | ES	                                                                    | string       |
            | page area	               | privada	                                                            | string       |
            | page intent	           | informacion	                                                        | string       |
            | channel	               | online	                                                                | string       |
            | page instance ID	       | de	                                                                    | string       |
            | page info version	       | appVersion	                                                            | regexp named |
            | page segment	           | personas	                                                            | string       |
            | sysEnv	               | app	                                                                | string       |
            | business unit	           | BBVA Mexico	                                                        | string       |
            | site app name	           | App BBVA Mexico	                                                    | string       |
            | project name	           | Glomo	                                                                | string       |
            | device mobile	           | si	                                                                    | string       |
            | user userState	       | logado	                                                                | string       |
            | user segment global	   | 003001	                                                                | string       |
            | profile ID	           | profileID	                                                            | regexp named |
            | user gender	           | gender	                                                                | regexp named |
            | user age	               | age	                                                                | regexp named |
            | internal campaign		   |                                                                        | empty array  |
            | optimization attributes  | 	                                                                    | empty array  |
            | application		       |                                                                        | empty str object |
            | products attributes	   | 	                                                                    | empty array  |

    @ANA_OLS002
    @analytics
    @web @android @ios
    @MX @test @vbank
    @web-done
    Scenario: Analytics - Limit operation
        Given a user with the following criteria
            | criteria                    |
            | operational limits settings analytics |
        When the user accesses to operational limits settings with previous login "onboarding operational limits help"
        Then the device contains the following variables
            | item                     | value                                                                  | type         |
            | analytics	               | analytics/glomo_base	                                                | json schema  |
            | version DL	           | 20250414_5.0	                                                        | string       |
            | page name	               | app:privada:personas:configuracion:limites de operacion:detalle        | string       |
            | level 1	               | configuracion	                                                        | string       |
            | level 2	               | limites de operacion	                                                | string       |
            | level 3	               | detalle                           	                                    | string       |
            | language	               | ES	                                                                    | string       |
            | page area	               | privada	                                                            | string       |
            | page intent	           | informacion	                                                        | string       |
            | channel	               | online	                                                                | string       |
            | page instance ID	       | de	                                                                    | string       |
            | page info version	       | appVersion	                                                            | regexp named |
            | page segment	           | personas	                                                            | string       |
            | sysEnv	               | app	                                                                | string       |
            | business unit	           | BBVA Mexico	                                                        | string       |
            | site app name	           | App BBVA Mexico	                                                    | string       |
            | project name	           | Glomo	                                                                | string       |
            | device mobile	           | si	                                                                    | string       |
            | user userState	       | logado	                                                                | string       |
            | user segment global	   | 003001	                                                                | string       |
            | profile ID	           | profileID	                                                            | regexp named |
            | user gender	           | gender	                                                                | regexp named |
            | user age	               | age	                                                                | regexp named |
            | internal campaign		   |                                                                        | empty array  |
            | optimization attributes  | 	                                                                    | empty array  |
            | application		       |                                                                        | empty str object |
            | products attributes	   | 	                                                                    | empty array  |

    @ANA_OLS003
    @analytics
    @web @android @ios
    @MX @test @vbank
    @web-done
    Scenario: Analytics - Limit operation modify
        Given a user with the following criteria
            | criteria                    |
            | operational limits settings analytics |
        And the user accesses to operational limits settings
        When the user "modify" limit "operation"
        Then the device contains the following variables
            | item                     | value                                                                  | type         |
            | analytics	               | analytics/glomo_base	                                                | json schema  |
            | version DL	           | 20250414_5.0	                                                        | string       |
            | page name	               | app:privada:personas:configuracion:limites de operacion:modificar limite por operacion| string       |
            | level 1	               | configuracion	                                                        | string       |
            | level 2	               | limites de operacion	                                                | string       |
            | level 3	               | modificar limite por operacion                           	            | string       |
            | language	               | ES	                                                                    | string       |
            | page area	               | privada	                                                            | string       |
            | page intent	           | informacion	                                                        | string       |
            | channel	               | online	                                                                | string       |
            | page instance ID	       | de	                                                                    | string       |
            | page info version	       | appVersion	                                                            | regexp named |
            | page segment	           | personas	                                                            | string       |
            | sysEnv	               | app	                                                                | string       |
            | business unit	           | BBVA Mexico	                                                        | string       |
            | site app name	           | App BBVA Mexico	                                                    | string       |
            | project name	           | Glomo	                                                                | string       |
            | device mobile	           | si	                                                                    | string       |
            | user userState	       | logado	                                                                | string       |
            | user segment global	   | 003001	                                                                | string       |
            | profile ID	           | profileID	                                                            | regexp named |
            | user gender	           | gender	                                                                | regexp named |
            | user age	               | age	                                                                | regexp named |
            | internal campaign		   |                                                                        | empty array  |
            | optimization attributes  | 	                                                                    | empty array  |
            | application		       |                                                                        | empty str object |
            | products attributes	   | 	                                                                    | empty array  |

    @ANA_OLS004
    @analytics
    @web @android @ios
    @MX @test @vbank
    @web-done
    Scenario: Analytics - Limit daily modify
        Given a user with the following criteria
            | criteria                    |
            | operational limits settings analytics |
        And the user accesses to operational limits settings
        When the user "modify" limit "daily"
        Then the device contains the following variables
            | item                     | value                                                                  | type         |
            | analytics	               | analytics/glomo_base	                                                | json schema  |
            | version DL	           | 20250414_5.0	                                                        | string       |
            | page name	               | app:privada:personas:configuracion:limites de operacion:modificar limite diario                             | string       |
            | level 1	               | configuracion	                                                        | string       |
            | level 2	               | limites de operacion	                                                | string       |
            | level 3	               | modificar limite diario                           	                                    | string       |
            | language	               | ES	                                                                    | string       |
            | page area	               | privada	                                                            | string       |
            | page intent	           | informacion	                                                        | string       |
            | channel	               | online	                                                                | string       |
            | page instance ID	       | de	                                                                    | string       |
            | page info version	       | appVersion	                                                            | regexp named |
            | page segment	           | personas	                                                            | string       |
            | sysEnv	               | app	                                                                | string       |
            | business unit	           | BBVA Mexico	                                                        | string       |
            | site app name	           | App BBVA Mexico	                                                    | string       |
            | project name	           | Glomo	                                                                | string       |
            | device mobile	           | si	                                                                    | string       |
            | user userState	       | logado	                                                                | string       |
            | user segment global	   | 003001	                                                                | string       |
            | profile ID	           | profileID	                                                            | regexp named |
            | user gender	           | gender	                                                                | regexp named |
            | user age	               | age	                                                                | regexp named |
            | internal campaign		   |                                                                        | empty array  |
            | optimization attributes  | 	                                                                    | empty array  |
            | application		       |                                                                        | empty str object |
            | products attributes	   | 	                                                                    | empty array  |

    @ANA_OLS005
    @analytics
    @web @android @ios
    @MX @test @vbank
    @web-done
    Scenario: Analytics - Limit montly modify
        Given a user with the following criteria
            | criteria                    |
            | operational limits settings analytics |
        And the user accesses to operational limits settings
        When the user "modify" limit "montly"
        Then the device contains the following variables
            | item                     | value                                                                  | type         |
            | analytics	               | analytics/glomo_base	                                                | json schema  |
            | version DL	           | 20250414_5.0	                                                        | string       |
            | page name	               | app:privada:personas:configuracion:limites de operacion:modificar limite mensual                           | string       |
            | level 1	               | configuracion	                                                        | string       |
            | level 2	               | limites de operacion	                                                | string       |
            | level 3	               | modificar limite mensual                           	                                    | string       |
            | language	               | ES	                                                                    | string       |
            | page area	               | privada	                                                            | string       |
            | page intent	           | informacion	                                                        | string       |
            | channel	               | online	                                                                | string       |
            | page instance ID	       | de	                                                                    | string       |
            | page info version	       | appVersion	                                                            | regexp named |
            | page segment	           | personas	                                                            | string       |
            | sysEnv	               | app	                                                                | string       |
            | business unit	           | BBVA Mexico	                                                        | string       |
            | site app name	           | App BBVA Mexico	                                                    | string       |
            | project name	           | Glomo	                                                                | string       |
            | device mobile	           | si	                                                                    | string       |
            | user userState	       | logado	                                                                | string       |
            | user segment global	   | 003001	                                                                | string       |
            | profile ID	           | profileID	                                                            | regexp named |
            | user gender	           | gender	                                                                | regexp named |
            | user age	               | age	                                                                | regexp named |
            | internal campaign		   |                                                                        | empty array  |
            | optimization attributes  | 	                                                                    | empty array  |
            | application		       |                                                                        | empty str object |
            | products attributes	   | 	                                                                    | empty array  |

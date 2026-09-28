@address
Feature: Analytics - Address

    @ANA_PAD001
    @analytics
    @MX @manual @JIRA.GLOMOMX-254597
    @vbank @backend(test)
    @ios @android @web
    @web-done
    Scenario: Page View Requirements - Update Postal Address
        Given a user with the following criteria
            | criteria          |
            | without address   |
        And the user accesses to profile screen
        When the user taps on "Add address" profile button
        Then the device contains the following variables
            | item                    | value	                                              | type             |
            | version DL              | 20250414_5.0	                                      | string           |
            | page name               | app:privada:personas:gestionar direccion:requisitos   | string           |
            | level 1                 | gestionar direccion	                                  | string           |
            | level 2                 | requisitos	                                          | string           |
            | language                | ES	                                                  | string           |
            | page area               | privada	                                              | string           |
            | page intent             | informacion	                                          | string           |
            | channel                 | online	                                              | string           |
            | page instance ID        | de	                                                  | string           |
            | page info version       | appVersion	                                          | regexp named     |
            | page segment            | personas	                                          | string           |
            | sysEnv                  | app	                                                  | string           |
            | business unit           | BBVA Mexico	                                          | string           |
            | site app name           | App BBVA Mexico	                                      | string           |
            | project name            | Glomo	                                              | string           |
            | device mobile           | si	                                                  | string           |
            | user userState          | logado	                                              | string           |
            | user segment global     | 003001	                                              | string           |
            | internal campaign       |                                                       | empty array      |
            | optimization attributes |                                                       | empty array      |
            | application name        | gestionar direccion                                   | string           |
            | application step        | requisitos                                            | string           |
            | products attributes     |                                                       | empty array      |
            | fulfillment model       | online                                                | string           |

    @ANA_PAD002
    @analytics
    @MX @manual @JIRA.GLOMOMX-254597
    @vbank @backend(test)
    @ios @android @web
    @web-done
    Scenario: Page Visit - Update Postal Address
        Given a user with the following criteria
            | criteria          |
            | without address   |
        When the user accesses to add "Address" screen
        Then the device contains the following variables
            | item                 | value	                                              | type          |
            | version DL           | 20250414_5.0	                                      | string        |
            | page name            | app:privada:personas:gestionar direccion:1 direccion | string        |
            | level 1              | gestionar direccion	                              | string        |
            | level 2              | 1 direccion	                                      | string        |
            | language             | ES	                                                  | string        |
            | page area            | privada	                                          | string        |
            | page intent          | transaccion	                                      | string        |
            | channel              | online	                                              | string        |
            | page instance ID     | de	                                                  | string        |
            | page info version    | appVersion	                                          | regexp named  |
            | page segment         | personas	                                          | string        |
            | sysEnv               | app	                                              | string        |
            | business unit        | BBVA Mexico	                                      | string        |
            | site app name        | App BBVA Mexico	                                  | string        |
            | project name         | Glomo	                                              | string        |
            | device mobile        | si	                                                  | string        |
            | user userState       | logado	                                              | string        |
            | user segment global  | 003001	                                              | string        |
            | user segment profile | usuario proactivo      	                          | string        |
            | user age             | age	                                              | regexp named  |
            | custom fields        | actualizar direccion	                              | string        |
            | global application   | manage postal address	                              | string        |
            | application name     | gestionar direccion	                              | string        |
            | application type     | operativa	                                          | string        |
            | application step     | 1 direccion                                          | string        |
            | fulfillment model    | online	                                              | string        |

    @ANA_PAD003
    @analytics
    @MX @manual @JIRA.GLOMOMX-254597
    @vbank @backend(test)
    @ios @android @web
    @web-done
    Scenario: App Started Street - Update Postal Address
        Given a user with the following criteria
            | criteria          |
            | without address   |
        And the user accesses to add "Address" screen
        When the user enters his address starting with the "street"
        Then the device contains the following variables
            | item                 | value	                                              | type          |
            | version DL           | 20250414_5.0	                                      | string        |
            | page name            | app:privada:personas:gestionar direccion:1 direccion | string        |
            | level 1              | gestionar direccion	                              | string        |
            | level 2              | 1 direccion	                                      | string        |
            | language             | ES	                                                  | string        |
            | page area            | privada	                                          | string        |
            | page intent          | transaccion	                                      | string        |
            | channel              | online	                                              | string        |
            | page instance ID     | de	                                                  | string        |
            | page info version    | appVersion	                                          | regexp named  |
            | page segment         | personas	                                          | string        |
            | sysEnv               | app	                                              | string        |
            | business unit        | BBVA Mexico	                                      | string        |
            | site app name        | App BBVA Mexico	                                  | string        |
            | project name         | Glomo	                                              | string        |
            | device mobile        | si	                                                  | string        |
            | user userState       | logado	                                              | string        |
            | user segment global  | 003001	                                              | string        |
            | user segment profile | usuario proactivo      	                          | string        |
            | user age             | age	                                              | regexp named  |
            | custom fields        | actualizar direccion	                              | string        |
            | global application   | manage postal address	                              | string        |
            | application name     | gestionar direccion	                              | string        |
            | application type     | operativa	                                          | string        |
            | application step     | calle                                                | string        |
            | fulfillment model    | online	                                              | string        |

    @ANA_PAD004
    @analytics
    @MX @manual @JIRA.GLOMOMX-254597
    @vbank @backend(test)
    @ios @android @web
    @web-done
    Scenario: App Started Ext Number - Update Postal Address
        Given a user with the following criteria
            | criteria          |
            | without address   |
        And the user accesses to add "Address" screen
        When the user enters his address starting with the "exterior number"
        Then the device contains the following variables
            | item                 | value	                                              | type          |
            | version DL           | 20250414_5.0	                                      | string        |
            | page name            | app:privada:personas:gestionar direccion:1 direccion | string        |
            | level 1              | gestionar direccion	                              | string        |
            | level 2              | 1 direccion	                                      | string        |
            | language             | ES	                                                  | string        |
            | page area            | privada	                                          | string        |
            | page intent          | transaccion	                                      | string        |
            | channel              | online	                                              | string        |
            | page instance ID     | de	                                                  | string        |
            | page info version    | appVersion	                                          | regexp named  |
            | page segment         | personas	                                          | string        |
            | sysEnv               | app	                                              | string        |
            | business unit        | BBVA Mexico	                                      | string        |
            | site app name        | App BBVA Mexico	                                  | string        |
            | project name         | Glomo	                                              | string        |
            | device mobile        | si	                                                  | string        |
            | user userState       | logado	                                              | string        |
            | user segment global  | 003001	                                              | string        |
            | user segment profile | usuario proactivo      	                          | string        |
            | user age             | age	                                              | regexp named  |
            | custom fields        | actualizar direccion                                 | string        |
            | global application   | manage postal address	                              | string        |
            | application name     | gestionar direccion	                              | string        |
            | application type     | operativa	                                          | string        |
            | application step     | numero exterior                                      | string        |
            | fulfillment model    | online	                                              | string        |

    @ANA_PAD005
    @analytics
    @MX @manual @JIRA.GLOMOMX-254597
    @vbank @backend(test)
    @ios @android @web
    @web-done
    Scenario: App Started Postal Code - Update Postal Address
        Given a user with the following criteria
            | criteria          |
            | without address   |
        And the user accesses to add "Address" screen
        When the user enters his address starting with the "postal code"
        Then the device contains the following variables
            | item                 | value	                                              | type          |
            | version DL           | 20250414_5.0	                                      | string        |
            | page name            | app:privada:personas:gestionar direccion:1 direccion | string        |
            | level 1              | gestionar direccion	                              | string        |
            | level 2              | 1 direccion	                                      | string        |
            | language             | ES	                                                  | string        |
            | page area            | privada	                                          | string        |
            | page intent          | transaccion	                                      | string        |
            | channel              | online	                                              | string        |
            | page instance ID     | de	                                                  | string        |
            | page info version    | appVersion	                                          | regexp named  |
            | page segment         | personas	                                          | string        |
            | sysEnv               | app	                                              | string        |
            | business unit        | BBVA Mexico	                                      | string        |
            | site app name        | App BBVA Mexico	                                  | string        |
            | project name         | Glomo	                                              | string        |
            | device mobile        | si	                                                  | string        |
            | user userState       | logado	                                              | string        |
            | user segment global  | 003001	                                              | string        |
            | user segment profile | usuario proactivo      	                          | string        |
            | user age             | age	                                              | regexp named  |
            | custom fields        | actualizar direccion	                              | string        |
            | global application   | manage postal address	                              | string        |
            | application name     | gestionar direccion	                              | string        |
            | application type     | operativa	                                          | string        |
            | application step     | codigo postal                                        | string        |
            | fulfillment model    | online	                                              | string        |

    @ANA_PAD006
    @analytics
    @MX @manual @JIRA.GLOMOMX-254597
    @vbank @backend(test)
    @ios @android @web
    @web-done
    Scenario: App Step 2 - Update Postal Address
        Given a user with the following criteria
            | criteria          |
            | without address   |
        And the user accesses to add "Address" screen
        When the user fills address form
        Then the device contains the following variables
            | item                 | value	                                                | type          |
            | version DL           | 20250414_5.0	                                        | string        |
            | page name            | app:privada:personas:gestionar direccion:2 comprobante | string        |
            | level 1              | gestionar direccion	                                | string        |
            | level 2              | 2 comprobante	                                        | string        |
            | language             | ES	                                                    | string        |
            | page area            | privada	                                            | string        |
            | page intent          | transaccion	                                        | string        |
            | channel              | online	                                                | string        |
            | page instance ID     | de	                                                    | string        |
            | page info version    | appVersion	                                            | regexp named  |
            | page segment         | personas	                                            | string        |
            | sysEnv               | app	                                                | string        |
            | business unit        | BBVA Mexico	                                        | string        |
            | site app name        | App BBVA Mexico	                                    | string        |
            | project name         | Glomo	                                                | string        |
            | device mobile        | si	                                                    | string        |
            | user userState       | logado	                                                | string        |
            | user segment global  | 003001	                                                | string        |
            | user segment profile | usuario proactivo      	                            | string        |
            | user age             | age	                                                | regexp named  |
            | custom fields        | actualizar direccion	                                | string        |
            | global application   | manage postal address	                                | string        |
            | application name     | gestionar direccion	                                | string        |
            | application type     | operativa	                                            | string        |
            | application step     | 2 comprobante                                          | string        |
            | fulfillment model    | online	                                                | string        |

    @ANA_PAD007
    @analytics
    @MX @manual @JIRA.GLOMOMX-254597
    @vbank @backend(test)
    @ios @android @web
    @web-done
    Scenario: Page View Elegir o Tomar Fotografia - Update Postal Address
        Given a user with the following criteria
            | criteria          |
            | without address   |
        And the user accesses to add "Address" screen
        When the user accesses to "choose or take photo" screen
        Then the device contains the following variables
            | item                      | value	                                                              | type             |
            | version DL	            | 20250414_5.0	                                                      | string           |
            | page name	                | app:privada:personas:gestionar direccion:elegir o tomar fotografia  | string           |
            | level 1	                | gestionar direccion	                                              | string           |
            | level 2	                | elegir o tomar fotografia	                                          | string           |
            | language	                | ES	                                                              | string           |
            | page area	                | privada	                                                          | string           |
            | page intent	            | transaccion	                                                      | string           |
            | channel	                | online	                                                          | string           |
            | page instance ID	        | de	                                                              | string           |
            | page info version	        | appVersion	                                                      | regexp named     |
            | page segment	            | personas	                                                          | string           |
            | sysEnv	                | app	                                                              | string           |
            | business unit	            | BBVA Mexico	                                                      | string           |
            | site app name	            | App BBVA Mexico	                                                  | string           |
            | project name	            | Glomo	                                                              | string           |
            | device mobile	            | si	                                                              | string           |
            | user userState	        | logado	                                                          | string           |
            | user segment global       | 003001	                                                          | string           |
            | internal campaign         |     		                                                          | empty array      |
            | optimization attributes   |             		                                                  | empty array      |
            | application               | 		                                                              | empty str object |
            | products attributes       |         		                                                      | empty array      |

    @ANA_PAD008
    @analytics
    @MX @manual @JIRA.GLOMOMX-254597
    @vbank @backend(test)
    @ios @android @web
    @web-done
    Scenario: Page View Recomendaciones Foto - Update Postal Address
        Given a user with the following criteria
            | criteria          |
            | without address   |
        And the user accesses to add "Address" screen
        And the user accesses to "choose or take photo" screen
        When the user accesses to "upload file" info modal
        Then the device contains the following variables
            | item                      | value	                                                              | type             |
            | version DL	            | 20250414_5.0	                                                      | string           |
            | page name	                | app:privada:personas:gestionar direccion:recomendaciones foto       | string           |
            | level 1	                | gestionar direccion	                                              | string           |
            | level 2	                | recomendaciones foto  	                                          | string           |
            | language	                | ES	                                                              | string           |
            | page area	                | privada	                                                          | string           |
            | page intent	            | transaccion	                                                      | string           |
            | channel	                | online	                                                          | string           |
            | page instance ID	        | de	                                                              | string           |
            | page info version	        | appVersion	                                                      | regexp named     |
            | page segment	            | personas	                                                          | string           |
            | sysEnv	                | app	                                                              | string           |
            | business unit	            | BBVA Mexico	                                                      | string           |
            | site app name	            | App BBVA Mexico	                                                  | string           |
            | project name	            | Glomo	                                                              | string           |
            | device mobile	            | si	                                                              | string           |
            | user userState	        | logado	                                                          | string           |
            | user segment global       | 003001	                                                          | string           |
            | internal campaign         |     		                                                          | empty array      |
            | optimization attributes   |             		                                                  | empty array      |
            | application               | 		                                                              | empty str object |
            | products attributes       |         		                                                      | empty array      |

    @ANA_PAD009
    @analytics
    @MX @manual @JIRA.GLOMOMX-254597
    @vbank @backend(test)
    @ios @android @web
    @web-done
    Scenario: Page View Aviso de privacidad - Update Postal Address
        Given a user with the following criteria
            | criteria          |
            | without address   |
        And the user accesses to add "Address" screen
        And the user accesses to "choose or take photo" screen
        When the user accesses to "notice of privacy" info modal
        Then the device contains the following variables
            | item                      | value	                                                              | type             |
            | version DL	            | 20250414_5.0	                                                      | string           |
            | page name	                | app:privada:personas:gestionar direccion:aviso de privacidad        | string           |
            | level 1	                | gestionar direccion	                                              | string           |
            | level 2	                | aviso de privacidad     	                                          | string           |
            | language	                | ES	                                                              | string           |
            | page area	                | privada	                                                          | string           |
            | page intent	            | transaccion	                                                      | string           |
            | channel	                | online	                                                          | string           |
            | page instance ID	        | de	                                                              | string           |
            | page info version	        | appVersion	                                                      | regexp named     |
            | page segment	            | personas	                                                          | string           |
            | sysEnv	                | app	                                                              | string           |
            | business unit	            | BBVA Mexico	                                                      | string           |
            | site app name	            | App BBVA Mexico	                                                  | string           |
            | project name	            | Glomo	                                                              | string           |
            | device mobile	            | si	                                                              | string           |
            | user userState	        | logado	                                                          | string           |
            | user segment global       | 003001	                                                          | string           |
            | internal campaign         |     		                                                          | empty array      |
            | optimization attributes   |             		                                                  | empty array      |
            | application               | 		                                                              | empty str object |
            | products attributes       |         		                                                      | empty array      |

    @ANA_PAD010
    @analytics
    @MX @manual @JIRA.GLOMOMX-254597
    @vbank @backend(test)
    @ios @android @web
    @web-done
    Scenario: Page View Recomendaciones PDF - Update Postal Address
        Given a user with the following criteria
            | criteria          |
            | without address   |
        And the user accesses to add "Address" screen
        And the user accesses to "attach pdf" screen
        When the user accesses to "upload file" info modal
        Then the device contains the following variables
            | item                      | value	                                                              | type             |
            | version DL	            | 20250414_5.0	                                                      | string           |
            | page name	                | app:privada:personas:gestionar direccion:recomendaciones pdf       | string           |
            | level 1	                | gestionar direccion	                                              | string           |
            | level 2	                | recomendaciones pdf  	                                          | string           |
            | language	                | ES	                                                              | string           |
            | page area	                | privada	                                                          | string           |
            | page intent	            | transaccion	                                                      | string           |
            | channel	                | online	                                                          | string           |
            | page instance ID	        | de	                                                              | string           |
            | page info version	        | appVersion	                                                      | regexp named     |
            | page segment	            | personas	                                                          | string           |
            | sysEnv	                | app	                                                              | string           |
            | business unit	            | BBVA Mexico	                                                      | string           |
            | site app name	            | App BBVA Mexico	                                                  | string           |
            | project name	            | Glomo	                                                              | string           |
            | device mobile	            | si	                                                              | string           |
            | user userState	        | logado	                                                          | string           |
            | user segment global       | 003001	                                                          | string           |
            | internal campaign         |     		                                                          | empty array      |
            | optimization attributes   |             		                                                  | empty array      |
            | application               | 		                                                              | empty str object |
            | products attributes       |         		                                                      | empty array      |

    @ANA_PAD011
    @analytics
    @MX @manual @JIRA.GLOMOMX-254597
    @vbank @backend(test)
    @ios @android @web
    @web-done
    Scenario: App Step 3 - Update Postal Address
        Given a user with the following criteria
            | criteria          |
            | without address   |
        And the user accesses to add "Address" screen
        And the user accesses to "attach pdf" screen
        And the user completes information to "elector credential" proof
        When the user accesses to summary screen from "attach PDF" screen
        Then the device contains the following variables
            | item                 | value	                                                 | type          |
            | version DL           | 20250414_5.0	                                         | string        |
            | page name            | app:privada:personas:gestionar direccion:3 confirmacion | string        |
            | level 1              | gestionar direccion	                                 | string        |
            | level 2              | 3 confirmacion	                                         | string        |
            | language             | ES	                                                     | string        |
            | page area            | privada	                                             | string        |
            | page intent          | transaccion	                                         | string        |
            | channel              | online	                                                 | string        |
            | page instance ID     | de	                                                     | string        |
            | page info version    | appVersion	                                             | regexp named  |
            | page segment         | personas	                                             | string        |
            | sysEnv               | app	                                                 | string        |
            | business unit        | BBVA Mexico	                                         | string        |
            | site app name        | App BBVA Mexico	                                     | string        |
            | project name         | Glomo	                                                 | string        |
            | device mobile        | si	                                                     | string        |
            | user userState       | logado	                                                 | string        |
            | user segment global  | 003001	                                                 | string        |
            | user segment profile | usuario proactivo	                                     | string        |
            | user age             | age	                                                 | regexp named  |
            | custom fields        | actualizar direccion	                                 | string        |
            | global application   | manage postal address	                                 | string        |
            | application name     | gestionar direccion	                                 | string        |
            | application type     | operativa	                                             | string        |
            | application step     | 3 confirmacion                                          | string        |
            | fulfillment model    | online	                                                 | string        |

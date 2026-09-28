@NewAdditionalCardAnalytics
Feature: Analytics - New Additional Card

    @ANA_NAC001
    @analytics
    @vbank
    @MX @test
    @no-spherica
    @web @ios @android @tmpExclude @JIRA.GLOMOMX-254311
    Scenario: Access to request an additional card - App On Click Start
        Given a user with the following criteria
            | criteria            |
            | tdc additional card |
        And the user go to detail card to add cards
        And the user displays the additional credit cards module
        And the analytics interceptor service is initiated
        When the user request an additional credit card
        Then the analytics events contains the following variables
            | item                     | value                                         | type         | event              |
            | analytics                | analytics/glomo_base                          | json schema  | App On Click Start |
            | version DL               | 20250414_5.0                                  | string       | App On Click Start |
            | page name                | app:privada:personas:tarjetas:credito:detalle | string       | App On Click Start |
            | level 1                  | tarjetas                                      | string       | App On Click Start |
            | level 2                  | credito                                       | string       | App On Click Start |
            | level 3                  | detalle                                       | string       | App On Click Start |
            | language                 | ES                                            | string       | App On Click Start |
            | page area                | privada                                       | string       | App On Click Start |
            | page intent              | informacion                                   | string       | App On Click Start |
            | channel                  | online                                        | string       | App On Click Start |
            | page instance ID         | de                                            | string       | App On Click Start |
            | page info version        | appVersion                                    | regexp named | App On Click Start |
            | page segment             | personas                                      | string       | App On Click Start |
            | sysEnv                   | app                                           | string       | App On Click Start |
            | business unit            | BBVA Mexico                                   | string       | App On Click Start |
            | site app name            | App BBVA Mexico                               | string       | App On Click Start |
            | project name             | Glomo                                         | string       | App On Click Start |
            | device mobile            | si                                            | string       | App On Click Start |
            | user userState           | logado                                        | string       | App On Click Start |
            | user segment global      | 003001                                        | string       | App On Click Start |
            | global application       | additional credit card                        | string       | App On Click Start |
            | application name         | tarjeta de credito adicional                  | string       | App On Click Start |
            | application type         | contratacion                                  | string       | App On Click Start |
            | application step         | solicitar tarjeta adicional                   | string       | App On Click Start |
            | product primary category | tarjetas                                      | string       | App On Click Start |
            | product subtype          | tarjetas credito                              | string       | App On Click Start |

    @ANA_NAC002
    @analytics
    @vbank
    @MX @test
    @no-spherica
    @web @ios @android @web-done
    Scenario: Access to request an additional card - App Page Visit 1 Solicitud
        Given a user with the following criteria
            | criteria            |
            | tdc additional card |
        When the user go to request an additional credit card
        Then the device contains the following variables
            | item                     | value                                                                  | type         |
            | analytics                | analytics/glomo_base                                                   | json schema  |
            | version DL               | 20250414_5.0                                                           | string       |
            | page name                | app:privada:personas:tarjetas:tarjeta de credito adicional:1 solicitud | string       |
            | level 1                  | tarjetas                                                               | string       |
            | level 2                  | tarjeta de credito adicional                                           | string       |
            | level 3                  | 1 solicitud                                                            | string       |
            | language                 | ES                                                                     | string       |
            | page area                | privada                                                                | string       |
            | page intent              | transaccion                                                            | string       |
            | channel                  | online                                                                 | string       |
            | page instance ID         | de                                                                     | string       |
            | page info version        | appVersion                                                             | regexp named |
            | page segment             | personas                                                               | string       |
            | sysEnv                   | app                                                                    | string       |
            | business unit            | BBVA Mexico                                                            | string       |
            | site app name            | App BBVA Mexico                                                        | string       |
            | project name             | Glomo                                                                  | string       |
            | device mobile            | si                                                                     | string       |
            | user userState           | logado                                                                 | string       |
            | profile ID               | profileID                                                              | regexp named |
            | user segment global      | 003001                                                                 | string       |
            | global application       | additional credit card                                                 | string       |
            | application name         | tarjeta de credito adicional                                           | string       |
            | application type         | contratacion                                                           | string       |
            | application step         | 1 solicitud                                                            | string       |
            | qualified visits         | true                                                                   | string       |
            | product primary category | tarjetas                                                               | string       |
            | product subtype          | tarjetas credito                                                       | string       |
            | product name             | platinum bbva                                                          | string       |

    @ANA_NAC003
    @analytics
    @vbank
    @MX @test
    @no-spherica
    @web @ios @android @web-done
    Scenario: Additional Credit Card Step - Interact with credit limit textbox - App Started
        Given a user with the following criteria
            | criteria            |
            | tdc additional card |
        And the user go to request an additional credit card
        And the user interact with "additional card" step and "active" flag state
        And the analytics interceptor service is initiated
        When the user interact with "credit limit" step and "inactive" flag state
        Then the analytics events contains the following variables
            | item                     | value                                                                  | type         | event       |
            | analytics                | analytics/glomo_base                                                   | json schema  | App Started |
            | version DL               | 20250414_5.0                                                           | string       | App Started |
            | page name                | app:privada:personas:tarjetas:tarjeta de credito adicional:1 solicitud | string       | App Started |
            | level 1                  | tarjetas                                                               | string       | App Started |
            | level 2                  | tarjeta de credito adicional                                           | string       | App Started |
            | level 3                  | 1 solicitud                                                            | string       | App Started |
            | language                 | ES                                                                     | string       | App Started |
            | page area                | privada                                                                | string       | App Started |
            | page intent              | transaccion                                                            | string       | App Started |
            | channel                  | online                                                                 | string       | App Started |
            | page instance ID         | de                                                                     | string       | App Started |
            | page info version        | appVersion                                                             | regexp named | App Started |
            | page segment             | personas                                                               | string       | App Started |
            | sysEnv                   | app                                                                    | string       | App Started |
            | business unit            | BBVA Mexico                                                            | string       | App Started |
            | site app name            | App BBVA Mexico                                                        | string       | App Started |
            | project name             | Glomo                                                                  | string       | App Started |
            | device mobile            | si                                                                     | string       | App Started |
            | user userState           | logado                                                                 | string       | App Started |
            | profile ID               | profileID                                                              | regexp named | App Started |
            | user segment global      | 003001                                                                 | string       | App Started |
            | global application       | additional credit card                                                 | string       | App Started |
            | application name         | tarjeta de credito adicional                                           | string       | App Started |
            | application type         | contratacion                                                           | string       | App Started |
            | application step         | linea credito                                                          | string       | App Started |
            | product primary category | tarjetas                                                               | string       | App Started |
            | product subtype          | tarjetas credito                                                       | string       | App Started |
            | product name             | platinum bbva                                                          | string       | App Started |

    @ANA_NAC004
    @analytics
    @vbank
    @MX @test
    @no-spherica
    @web @ios @android @web-done
    Scenario: Interact Shipment Address Step - APP STEP 2
        Given a user with the following criteria
            | criteria            |
            | tdc additional card |
        And the user go to request an additional credit card
        And the analytics interceptor service is initiated
        When the user interact with "all data" step and "active" flag state
        Then the analytics events contains the following variables
            | item                     | value                                                                        | type         | event      |
            | analytics                | analytics/glomo_base                                                         | json schema  | App Step 2 |
            | version DL               | 20250414_5.0                                                                 | string       | App Step 2 |
            | page name                | app:privada:personas:tarjetas:tarjeta de credito adicional:2 direccion envio | string       | App Step 2 |
            | level 1                  | tarjetas                                                                     | string       | App Step 2 |
            | level 2                  | tarjeta de credito adicional                                                 | string       | App Step 2 |
            | level 3                  | 2 direccion envio                                                            | string       | App Step 2 |
            | language                 | ES                                                                           | string       | App Step 2 |
            | page area                | privada                                                                      | string       | App Step 2 |
            | page intent              | transaccion                                                                  | string       | App Step 2 |
            | channel                  | online                                                                       | string       | App Step 2 |
            | page instance ID         | de                                                                           | string       | App Step 2 |
            | page info version        | appVersion                                                                   | regexp named | App Step 2 |
            | page segment             | personas                                                                     | string       | App Step 2 |
            | sysEnv                   | app                                                                          | string       | App Step 2 |
            | business unit            | BBVA Mexico                                                                  | string       | App Step 2 |
            | site app name            | App BBVA Mexico                                                              | string       | App Step 2 |
            | project name             | Glomo                                                                        | string       | App Step 2 |
            | device mobile            | si                                                                           | string       | App Step 2 |
            | user userState           | logado                                                                       | string       | App Step 2 |
            | profile ID               | profileID                                                                    | regexp named | App Step 2 |
            | user segment global      | 003001                                                                       | string       | App Step 2 |
            | global application       | additional credit card                                                       | string       | App Step 2 |
            | application name         | tarjeta de credito adicional                                                 | string       | App Step 2 |
            | application type         | contratacion                                                                 | string       | App Step 2 |
            | application step         | 2 direccion envio                                                            | string       | App Step 2 |
            | product primary category | tarjetas                                                                     | string       | App Step 2 |
            | product subtype          | tarjetas credito                                                             | string       | App Step 2 |
            | product name             | platinum bbva                                                                | string       | App Step 2 |
            | product amount           | 1000                                                                         | number       | App Step 2 |
            | product currency         | MXN                                                                          | string       | App Step 2 |

    @ANA_NAC005
    @analytics
    @vbank
    @MX @test
    @no-spherica
    @web @ios @android @web-done
    Scenario: Interact Legal Terms Step - APP STEP 3
        Given a user with the following criteria
            | criteria            |
            | new additional card |
        And the user go to request an additional credit card
        And the analytics interceptor service is initiated
        When the user interact with "shipment address" step and "active" flag state
        Then the analytics events contains the following variables
            | item                     | value                                                                               | type         | event      |
            | analytics                | analytics/glomo_base                                                                | json schema  | App Step 3 |
            | version DL               | 20250414_5.0                                                                        | string       | App Step 3 |
            | page name                | app:privada:personas:tarjetas:tarjeta de credito adicional:3 terminos y condiciones | string       | App Step 3 |
            | level 1                  | tarjetas                                                                            | string       | App Step 3 |
            | level 2                  | tarjeta de credito adicional                                                        | string       | App Step 3 |
            | level 3                  | 3 terminos y condiciones                                                            | string       | App Step 3 |
            | language                 | ES                                                                                  | string       | App Step 3 |
            | page area                | privada                                                                             | string       | App Step 3 |
            | page intent              | transaccion                                                                         | string       | App Step 3 |
            | channel                  | online                                                                              | string       | App Step 3 |
            | page instance ID         | de                                                                                  | string       | App Step 3 |
            | page info version        | appVersion                                                                          | regexp named | App Step 3 |
            | page segment             | personas                                                                            | string       | App Step 3 |
            | sysEnv                   | app                                                                                 | string       | App Step 3 |
            | business unit            | BBVA Mexico                                                                         | string       | App Step 3 |
            | site app name            | App BBVA Mexico                                                                     | string       | App Step 3 |
            | project name             | Glomo                                                                               | string       | App Step 3 |
            | device mobile            | si                                                                                  | string       | App Step 3 |
            | user userState           | logado                                                                              | string       | App Step 3 |
            | profile ID               | profileID                                                                           | regexp named | App Step 3 |
            | user segment global      | 003001                                                                              | string       | App Step 3 |
            | global application       | additional credit card                                                              | string       | App Step 3 |
            | application typology     | domicilio                                                                           | string       | App Step 3 |
            | application name         | tarjeta de credito adicional                                                        | string       | App Step 3 |
            | application type         | contratacion                                                                        | string       | App Step 3 |
            | application step         | 3 terminos y condiciones                                                            | string       | App Step 3 |
            | product primary category | tarjetas                                                                            | string       | App Step 3 |
            | product subtype          | tarjetas credito                                                                    | string       | App Step 3 |
            | product name             | rayados bbva                                                                      | string       | App Step 3 |
            | product amount           | 1000                                                                                | number       | App Step 3 |
            | product currency         | MXN                                                                                 | string       | App Step 3 |

    @ANA_NAC006
    @analytics
    @vbank
    @MX @test
    @no-spherica
    @web @ios @android @web-done
    Scenario: Interact Summary Step - APP STEP 4
        Given a user with the following criteria
            | criteria            |
            | tdc additional card |
        And the user go to request an additional credit card
        And the analytics interceptor service is initiated
        When the user interact with "legal terms" step and "active" flag state
        Then the analytics events contains the following variables
            | item                     | value                                                                     | type         | event      |
            | analytics                | analytics/glomo_base                                                      | json schema  | App Step 4 |
            | version DL               | 20250414_5.0                                                              | string       | App Step 4 |
            | page name                | app:privada:personas:tarjetas:tarjeta de credito adicional:4 confirmacion | string       | App Step 4 |
            | level 1                  | tarjetas                                                                  | string       | App Step 4 |
            | level 2                  | tarjeta de credito adicional                                              | string       | App Step 4 |
            | level 3                  | 4 confirmacion                                                            | string       | App Step 4 |
            | language                 | ES                                                                        | string       | App Step 4 |
            | page area                | privada                                                                   | string       | App Step 4 |
            | page intent              | transaccion                                                               | string       | App Step 4 |
            | channel                  | online                                                                    | string       | App Step 4 |
            | page instance ID         | de                                                                        | string       | App Step 4 |
            | page info version        | appVersion                                                                | regexp named | App Step 4 |
            | page segment             | personas                                                                  | string       | App Step 4 |
            | sysEnv                   | app                                                                       | string       | App Step 4 |
            | business unit            | BBVA Mexico                                                               | string       | App Step 4 |
            | site app name            | App BBVA Mexico                                                           | string       | App Step 4 |
            | project name             | Glomo                                                                     | string       | App Step 4 |
            | device mobile            | si                                                                        | string       | App Step 4 |
            | user userState           | logado                                                                    | string       | App Step 4 |
            | profile ID               | profileID                                                                 | regexp named | App Step 4 |
            | user segment global      | 003001                                                                    | string       | App Step 4 |
            | global application       | additional credit card                                                    | string       | App Step 4 |
            | application typology     | domicilio                                                                 | string       | App Step 4 |
            | application name         | tarjeta de credito adicional                                              | string       | App Step 4 |
            | application type         | contratacion                                                              | string       | App Step 4 |
            | application step         | 4 confirmacion                                                            | string       | App Step 4 |
            | product primary category | tarjetas                                                                  | string       | App Step 4 |
            | product subtype          | tarjetas credito                                                          | string       | App Step 4 |
            | product name             | platinum bbva                                                             | string       | App Step 4 |
            | product amount           | 1000                                                                      | number       | App Step 4 |
            | product currency         | MXN                                                                       | string       | App Step 4 |

    @ANA_NAC007
    @analytics
    @vbank
    @MX @test
    @no-spherica
    @web @ios @android @web-done
    Scenario: Interact OTP Step - APP STEP 5
        Given a user with the following criteria
            | criteria               |
            | additional cc infinite |
        And the user go to request an additional credit card
        And the analytics interceptor service is initiated
        When the user interact with "summary" step and "active" flag state
        Then the analytics events contains the following variables
            | item                     | value                                                                     | type         | event      |
            | analytics                | analytics/glomo_base                                                      | json schema  | App Step 5 |
            | version DL               | 20250414_5.0                                                              | string       | App Step 5 |
            | page name                | app:privada:personas:tarjetas:tarjeta de credito adicional:5 otp          | string       | App Step 5 |
            | level 1                  | tarjetas                                                                  | string       | App Step 5 |
            | level 2                  | tarjeta de credito adicional                                              | string       | App Step 5 |
            | level 3                  | 5 otp                                                                     | string       | App Step 5 |
            | language                 | ES                                                                        | string       | App Step 5 |
            | page area                | privada                                                                   | string       | App Step 5 |
            | page intent              | transaccion                                                               | string       | App Step 5 |
            | channel                  | online                                                                    | string       | App Step 5 |
            | page instance ID         | de                                                                        | string       | App Step 5 |
            | page info version        | appVersion                                                                | regexp named | App Step 5 |
            | page segment             | personas                                                                  | string       | App Step 5 |
            | sysEnv                   | app                                                                       | string       | App Step 5 |
            | business unit            | BBVA Mexico                                                               | string       | App Step 5 |
            | site app name            | App BBVA Mexico                                                           | string       | App Step 5 |
            | project name             | Glomo                                                                     | string       | App Step 5 |
            | device mobile            | si                                                                        | string       | App Step 5 |
            | user userState           | logado                                                                    | string       | App Step 5 |
            | profile ID               | profileID                                                                 | regexp named | App Step 5 |
            | user segment global      | 003001                                                                    | string       | App Step 5 |
            | global application       | additional credit card                                                    | string       | App Step 5 |
            | application typology     | domicilio                                                                 | string       | App Step 5 |
            | application name         | tarjeta de credito adicional                                              | string       | App Step 5 |
            | application type         | contratacion                                                              | string       | App Step 5 |
            | application step         | 5 otp                                                                     | string       | App Step 5 |
            | product primary category | tarjetas                                                                  | string       | App Step 5 |
            | product subtype          | tarjetas credito                                                          | string       | App Step 5 |
            | product name             | infinite bbva                                                             | string       | App Step 5 |
            | product amount           | 1000                                                                      | number       | App Step 5 |
            | product currency         | MXN                                                                       | string       | App Step 5 |
            | custom fields            | firma:sms        	                                                       | string       | App Step 5 |

    @ANA_NAC008
    @analytics
    @vbank
    @MX @test
    @no-spherica
    @web @ios @android @web-done
    Scenario: Interact OTP Step - APP COMPLETED
        Given a user with the following criteria
            | criteria                    |
            | additional card success ana |
        And the user go to request an additional credit card
        And the analytics interceptor service is initiated
        And the user interact with "summary" step and "active" flag state
        When the user try request additional credit card
        Then the analytics events contains the following variables
            | item                         | value                                                                     | type         | event         |
            | analytics                    | analytics/glomo_base                                                      | json schema  | App Completed |
            | version DL                   | 20250414_5.0                                                              | string       | App Completed |
            | page name                    | app:privada:personas:tarjetas:tarjeta de credito adicional:pagina exitosa | string       | App Completed |
            | level 1                      | tarjetas                                                                  | string       | App Completed |
            | level 2                      | tarjeta de credito adicional                                              | string       | App Completed |
            | level 3                      | pagina exitosa                                                            | string       | App Completed |
            | language                     | ES                                                                        | string       | App Completed |
            | page area                    | privada                                                                   | string       | App Completed |
            | page intent                  | transaccion                                                               | string       | App Completed |
            | channel                      | online                                                                    | string       | App Completed |
            | page instance ID             | de                                                                        | string       | App Completed |
            | page info version            | appVersion                                                                | regexp named | App Completed |
            | page segment                 | personas                                                                  | string       | App Completed |
            | sysEnv                       | app                                                                       | string       | App Completed |
            | business unit                | BBVA Mexico                                                               | string       | App Completed |
            | site app name                | App BBVA Mexico                                                           | string       | App Completed |
            | project name                 | Glomo                                                                     | string       | App Completed |
            | device mobile                | si                                                                        | string       | App Completed |
            | user userState               | logado                                                                    | string       | App Completed |
            | profile ID                   | profileID                                                                 | regexp named | App Completed |
            | user segment global          | 003001                                                                    | string       | App Completed |
            | global application           | additional credit card                                                    | string       | App Completed |
            | application typology         | domicilio                                                                 | string       | App Completed |
            | application name             | tarjeta de credito adicional                                              | string       | App Completed |
            | application type             | contratacion                                                              | string       | App Completed |
            | application step             | pagina exitosa                                                            | string       | App Completed |
            | application state            | finalizado                                                                | string       | App Completed |
            | application operation number | alphaNumericCaseSpace                                                     | regexp named | App Completed |
            | product primary category     | tarjetas                                                                  | string       | App Completed |
            | product subtype              | tarjetas credito                                                          | string       | App Completed |
            | product name                 | platinum bbva                                                             | string       | App Completed |
            | product amount               | 1000                                                                      | number       | App Completed |
            | product currency             | MXN                                                                       | string       | App Completed |
            | product state                | finalizado                                                                | string       | App Completed |
            | custom fields                | firma:sms        	                                                       | string       | App Completed |

    @ANA_NAC009
    @analytics
    @vbank
    @MX @test
    @no-spherica
    @web @ios @android @web-done
    Scenario: Access to request an additional card - App Page View Beneficios
        Given a user with the following criteria
            | criteria            |
            | new additional card |
        And the user go to detail card to add cards
        And the analytics interceptor service is initiated
        And the user displays the additional credit cards module
        When the user request an additional credit card
        Then the analytics events contains the following variables
            | item                     | value                                                                  | type         | event     |
            | analytics                | analytics/glomo_base                                                   | json schema  | Page View |
            | version DL               | 20250414_5.0                                                           | string       | Page View |
            | page name                | app:privada:personas:tarjetas:tarjeta de credito adicional:beneficios  | string       | Page View |
            | level 1                  | tarjetas                                                               | string       | Page View |
            | level 2                  | tarjeta de credito adicional                                           | string       | Page View |
            | level 3                  | beneficios                                                             | string       | Page View |
            | language                 | ES                                                                     | string       | Page View |
            | page area                | privada                                                                | string       | Page View |
            | page intent              | transaccion                                                            | string       | Page View |
            | channel                  | online                                                                 | string       | Page View |
            | page instance ID         | de                                                                     | string       | Page View |
            | page info version        | appVersion                                                             | regexp named | Page View |
            | page segment             | personas                                                               | string       | Page View |
            | sysEnv                   | app                                                                    | string       | Page View |
            | business unit            | BBVA Mexico                                                            | string       | Page View |
            | site app name            | App BBVA Mexico                                                        | string       | Page View |
            | project name             | Glomo                                                                  | string       | Page View |
            | device mobile            | si                                                                     | string       | Page View |
            | user userState           | logado                                                                 | string       | Page View |
            | profile ID               | profileID                                                              | regexp named | Page View |
            | user segment global      | 003001                                                                 | string       | Page View |

    @ANA_NAC010
    @analytics
    @vbank @vbank-modified
    @MX @backend(test)
    @no-spherica
    @web @ios @android @web-done
    Scenario: Error OTP by requesting an Additional Credit Card - App Page View Errot OTP
        Given a user with the following criteria
            | criteria                 |
            | new additional card      |
        And the user go to request an additional credit card
        And the analytics interceptor service is initiated
        And the user interact with "summary" step and "active" flag state
        When the user try request additional credit card
        Then the analytics events contains the following variables
            | item                     | value                                                                  | type         | event     |
            | analytics                | analytics/glomo_base                                                   | json schema  | Page View |
            | version DL               | 20250414_5.0                                                           | string       | Page View |
            | page name                | app:privada:personas:tarjetas:tarjeta de credito adicional:error otp   | string       | Page View |
            | level 1                  | tarjetas                                                               | string       | Page View |
            | level 2                  | tarjeta de credito adicional                                           | string       | Page View |
            | level 3                  | error otp                                                              | string       | Page View |
            | error page               | error otp                                                              | string       | Page View |
            | language                 | ES                                                                     | string       | Page View |
            | page area                | privada                                                                | string       | Page View |
            | page intent              | transaccion                                                            | string       | Page View |
            | channel                  | online                                                                 | string       | Page View |
            | page instance ID         | de                                                                     | string       | Page View |
            | page info version        | appVersion                                                             | regexp named | Page View |
            | page segment             | personas                                                               | string       | Page View |
            | sysEnv                   | app                                                                    | string       | Page View |
            | business unit            | BBVA Mexico                                                            | string       | Page View |
            | site app name            | App BBVA Mexico                                                        | string       | Page View |
            | project name             | Glomo                                                                  | string       | Page View |
            | device mobile            | si                                                                     | string       | Page View |
            | user userState           | logado                                                                 | string       | Page View |
            | profile ID               | profileID                                                              | regexp named | Page View |
            | user segment global      | 003001                                                                 | string       | Page View |

    @ANA_NAC011
    @analytics
    @vbank
    @MX @test
    @no-spherica
    @web @ios @android @web-done
    Scenario: Branch list - choose a branch
        Given a user with the following criteria
            | criteria            |
            | tdc additional card |
        And the user go to request an additional credit card
        And the analytics interceptor service is initiated
        When the user "choose a branch" from address step
        Then the analytics events contains the following variables
            | item                     | value                                                                      | type         | event     |
            | analytics                | analytics/glomo_base                                                       | json schema  | Page View |
            | version DL               | 20250414_5.0                                                               | string       | Page View |
            | page name                | app:privada:personas:tarjetas:tarjeta de credito adicional:mapa sucursal   | string       | Page View |
            | level 1                  | tarjetas                                                                   | string       | Page View |
            | level 2                  | tarjeta de credito adicional                                               | string       | Page View |
            | level 3                  | mapa sucursal                                                              | string       | Page View |
            | language                 | ES                                                                         | string       | Page View |
            | page area                | privada                                                                    | string       | Page View |
            | page intent              | transaccion                                                                | string       | Page View |
            | channel                  | online                                                                     | string       | Page View |
            | page instance ID         | de                                                                         | string       | Page View |
            | page info version        | appVersion                                                                 | regexp named | Page View |
            | page segment             | personas                                                                   | string       | Page View |
            | sysEnv                   | app                                                                        | string       | Page View |
            | business unit            | BBVA Mexico                                                                | string       | Page View |
            | site app name            | App BBVA Mexico                                                            | string       | Page View |
            | project name             | Glomo                                                                      | string       | Page View |
            | device mobile            | si                                                                         | string       | Page View |
            | user userState           | logado                                                                     | string       | Page View |
            | profile ID               | profileID                                                                  | regexp named | Page View |
            | user segment global      | 003001                                                                     | string       | Page View |

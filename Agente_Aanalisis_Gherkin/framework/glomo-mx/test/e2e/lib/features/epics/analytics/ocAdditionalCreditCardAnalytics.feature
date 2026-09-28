@ocAdditionalCreditCardAnalytics
Feature: Analytics - OC Additional Credit Card

    @ANA_EVENT_TCA001
    @analytics
    @MX @vbank
    @web @ios @android
    @spherica
    @backend(test)
    @web-done
    Scenario: Additional Credit Card - App On Click Start
        Given a user with the following criteria
            | criteria                      |
            | additional credit card renapo |
        And the user accesses to the "gold" "credit" card product detail
        And the user displays the additional credit cards module
        And the analytics interceptor service is initiated
        When the user accesses to additional credit card
        Then the analytics events contains the following variables:
            | item                     | value                                         | type         | event              |
            | analytics                | analytics/glomo_base                          | json schema  | App On Click Start |
            | page name                | app:privada:personas:tarjetas:credito:detalle | string       | App On Click Start |
            | level 1                  | tarjetas                                      | string       | App On Click Start |
            | level 2                  | credito                                       | string       | App On Click Start |
            | level 3                  | detalle                                       | string       | App On Click Start |
            | language                 | ES                                            | string       | App On Click Start |
            | page area                | privada                                       | string       | App On Click Start |
            | page intent              | informacion                                   | string       | App On Click Start |
            | channel                  | online                                        | string       | App On Click Start |
            | page instance ID         | de                                            | string       | App On Click Start |
            | version DL               | 20250414_5.0                                  | string       | App On Click Start |
            | page info version        | appVersion                                    | regexp named | App On Click Start |
            | page segment             | personas                                      | string       | App On Click Start |
            | sysEnv                   | app                                           | string       | App On Click Start |
            | business unit            | BBVA Mexico                                   | string       | App On Click Start |
            | site app name            | App BBVA Mexico                               | string       | App On Click Start |
            | project name             | Glomo                                         | string       | App On Click Start |
            | device mobile            | si                                            | string       | App On Click Start |
            | user userState           | logado                                        | string       | App On Click Start |
            | profile ID               | profileID                                     | regexp named | App On Click Start |
            | user segment global      | 003001                                        | string       | App On Click Start |
            | global application       | additional credit card                        | string       | App On Click Start |
            | application name         | tarjeta de credito adicional                  | string       | App On Click Start |
            | application type         | contratacion                                  | string       | App On Click Start |
            | application step         | solicitar tarjeta adicional                   | string       | App On Click Start |
            | fulfillment model        | online                                        | string       | App On Click Start |
            | product primary category | tarjetas                                      | string       | App On Click Start |
            | product subtype          | tarjetas credito                              | string       | App On Click Start |
            | internal campaign        |                                               | empty array  | App On Click Start |
            | optimization attributes  |                                               | empty array  | App On Click Start |

    @ANA_EVENT_TCA002
    @analytics
    @MX @vbank
    @web @ios @android
    @spherica
    @backend(test)
    @web-done
    Scenario: Additional Credit Card - App Page Visit
        Given a user with the following criteria
            | criteria                      |
            | additional credit card renapo |
        And the user accesses to the "gold" "credit" card product detail
        And the user displays the additional credit cards module
        And the analytics interceptor service is initiated
        When the user accesses to additional credit card
        Then the analytics events contains the following variables:
            | item                     | value                                                                  | type         | event          |
            | analytics                | analytics/glomo_base                                                   | json schema  | App Page Visit |
            | page name                | app:privada:personas:tarjetas:tarjeta de credito adicional:1 solicitud | string       | App Page Visit |
            | level 1                  | tarjetas                                                               | string       | App Page Visit |
            | level 2                  | tarjeta de credito adicional                                           | string       | App Page Visit |
            | level 3                  | 1 solicitud                                                            | string       | App Page Visit |
            | language                 | ES                                                                     | string       | App Page Visit |
            | page area                | privada                                                                | string       | App Page Visit |
            | page intent              | transaccion                                                            | string       | App Page Visit |
            | channel                  | online                                                                 | string       | App Page Visit |
            | page instance ID         | de                                                                     | string       | App Page Visit |
            | version DL               | 20250414_5.0                                                           | string       | App Page Visit |
            | page info version        | appVersion                                                             | regexp named | App Page Visit |
            | page segment             | personas                                                               | string       | App Page Visit |
            | sysEnv                   | app                                                                    | string       | App Page Visit |
            | business unit            | BBVA Mexico                                                            | string       | App Page Visit |
            | site app name            | App BBVA Mexico                                                        | string       | App Page Visit |
            | project name             | Glomo                                                                  | string       | App Page Visit |
            | device mobile            | si                                                                     | string       | App Page Visit |
            | user userState           | logado                                                                 | string       | App Page Visit |
            | profile ID               | profileID                                                              | regexp named | App Page Visit |
            | user segment global      | 003001                                                                 | string       | App Page Visit |
            | user gender              | gender                                                                 | regexp named | App Page Visit |
            | user age                 | age                                                                    | regexp named | App Page Visit |
            | global application       | additional credit card                                                 | string       | App Page Visit |
            | application name         | tarjeta de credito adicional                                           | string       | App Page Visit |
            | application type         | contratacion                                                           | string       | App Page Visit |
            | application step         | 1 solicitud                                                            | string       | App Page Visit |
            | fulfillment model        | online                                                                 | string       | App Page Visit |
            | qualified visits         | true                                                                   | string       | App Page Visit |
            | product primary category | tarjetas                                                               | string       | App Page Visit |
            | product subtype          | tarjetas credito                                                       | string       | App Page Visit |
            | product name             | oro bbva                                                               | string       | App Page Visit |
            | internal campaign        |                                                                        | empty array  | App Page Visit |
            | optimization attributes  |                                                                        | empty array  | App Page Visit |

    @ANA_EVENT_TCA003
    @analytics
    @MX @vbank
    @web @ios @android
    @spherica
    @backend(test)
    @web-done
    Scenario: Additional Credit Card - App Started
        Given a user with the following criteria
            | criteria                      |
            | additional credit card renapo |
        And the user accesses to the "gold" "credit" card product detail
        And the user displays the additional credit cards module
        And the user accesses to additional credit card
        And the analytics interceptor service is initiated
        When the user goes to the "enter lower balance" step
        Then the analytics events contains the following variables:
            | item                     | value                                                                  | type         | event       |
            | analytics                | analytics/glomo_base                                                   | json schema  | App Started |
            | page name                | app:privada:personas:tarjetas:tarjeta de credito adicional:1 solicitud | string       | App Started |
            | level 1                  | tarjetas                                                               | string       | App Started |
            | level 2                  | tarjeta de credito adicional                                           | string       | App Started |
            | level 3                  | 1 solicitud                                                            | string       | App Started |
            | language                 | ES                                                                     | string       | App Started |
            | page area                | privada                                                                | string       | App Started |
            | page intent              | transaccion                                                            | string       | App Started |
            | channel                  | online                                                                 | string       | App Started |
            | page instance ID         | de                                                                     | string       | App Started |
            | version DL               | 20250414_5.0                                                           | string       | App Started |
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
            | user gender              | gender                                                                 | regexp named | App Started |
            | user age                 | age                                                                    | regexp named | App Started |
            | global application       | additional credit card                                                 | string       | App Started |
            | application name         | tarjeta de credito adicional                                           | string       | App Started |
            | application type         | contratacion                                                           | string       | App Started |
            | application step         | linea credito                                                          | string       | App Started |
            | fulfillment model        | online                                                                 | string       | App Started |
            | product primary category | tarjetas                                                               | string       | App Started |
            | product subtype          | tarjetas credito                                                       | string       | App Started |
            | product name             | oro bbva                                                               | string       | App Started |
            | internal campaign        |                                                                        | empty array  | App Started |
            | optimization attributes  |                                                                        | empty array  | App Started |

    @ANA_EVENT_TCA004
    @analytics
    @MX @vbank
    @web @ios @android
    @spherica
    @backend(test)
    @web-done
    Scenario: Additional Credit Card - App Step 2
        Given a user with the following criteria
            | criteria                      |
            | additional credit card renapo |
        And the user accesses to the "gold" "credit" card product detail
        And the user displays the additional credit cards module
        And the user accesses to additional credit card
        And the analytics interceptor service is initiated
        When the user goes to the "shipping address" step
        Then the analytics events contains the following variables:
            | item                     | value                                                                        | type         | event      |
            | analytics                | analytics/glomo_base                                                         | json schema  | App Step 2 |
            | page name                | app:privada:personas:tarjetas:tarjeta de credito adicional:2 direccion envio | string       | App Step 2 |
            | level 1                  | tarjetas                                                                     | string       | App Step 2 |
            | level 2                  | tarjeta de credito adicional                                                 | string       | App Step 2 |
            | level 3                  | 2 direccion envio                                                            | string       | App Step 2 |
            | language                 | ES                                                                           | string       | App Step 2 |
            | page area                | privada                                                                      | string       | App Step 2 |
            | page intent              | transaccion                                                                  | string       | App Step 2 |
            | channel                  | online                                                                       | string       | App Step 2 |
            | page instance ID         | de                                                                           | string       | App Step 2 |
            | version DL               | 20250414_5.0                                                                 | string       | App Step 2 |
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
            | user gender              | gender                                                                       | regexp named | App Step 2 |
            | user age                 | age                                                                          | regexp named | App Step 2 |
            | global application       | additional credit card                                                       | string       | App Step 2 |
            | application name         | tarjeta de credito adicional                                                 | string       | App Step 2 |
            | application type         | contratacion                                                                 | string       | App Step 2 |
            | application step         | 2 direccion envio                                                            | string       | App Step 2 |
            | fulfillment model        | online                                                                       | string       | App Step 2 |
            | product primary category | tarjetas                                                                     | string       | App Step 2 |
            | product subtype          | tarjetas credito                                                             | string       | App Step 2 |
            | product name             | oro bbva                                                                     | string       | App Step 2 |
            | custom fields            | lugar de nacimiento: tamaulipas, genero: genero mujer                        | string       | App Step 2 |
            | internal campaign        |                                                                              | empty array  | App Step 2 |
            | optimization attributes  |                                                                              | empty array  | App Step 2 |

    @ANA_EVENT_TCA005
    @analytics
    @MX @vbank
    @web @ios @android
    @spherica
    @backend(test)
    @web-done
    Scenario: Additional Credit Card - App Step 3
        Given a user with the following criteria
            | criteria                      |
            | additional credit card renapo |
        And the user accesses to the "gold" "credit" card product detail
        And the user displays the additional credit cards module
        And the user accesses to additional credit card
        And the analytics interceptor service is initiated
        When the user goes to the "terms and conditions" step
        Then the analytics events contains the following variables:
            | item                     | value                                                                               | type         | event      |
            | analytics                | analytics/glomo_base                                                                | json schema  | App Step 3 |
            | page name                | app:privada:personas:tarjetas:tarjeta de credito adicional:3 terminos y condiciones | string       | App Step 3 |
            | level 1                  | tarjetas                                                                            | string       | App Step 3 |
            | level 2                  | tarjeta de credito adicional                                                        | string       | App Step 3 |
            | level 3                  | 3 terminos y condiciones                                                            | string       | App Step 3 |
            | language                 | ES                                                                                  | string       | App Step 3 |
            | page area                | privada                                                                             | string       | App Step 3 |
            | page intent              | transaccion                                                                         | string       | App Step 3 |
            | channel                  | online                                                                              | string       | App Step 3 |
            | page instance ID         | de                                                                                  | string       | App Step 3 |
            | version DL               | 20250414_5.0                                                                        | string       | App Step 3 |
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
            | user gender              | gender                                                                              | regexp named | App Step 3 |
            | user age                 | age                                                                                 | regexp named | App Step 3 |
            | global application       | additional credit card                                                              | string       | App Step 3 |
            | application typology     | domicilio                                                                           | string       | App Step 3 |
            | application name         | tarjeta de credito adicional                                                        | string       | App Step 3 |
            | application type         | contratacion                                                                        | string       | App Step 3 |
            | application step         | 3 terminos y condiciones                                                            | string       | App Step 3 |
            | fulfillment model        | online                                                                              | string       | App Step 3 |
            | product primary category | tarjetas                                                                            | string       | App Step 3 |
            | product subtype          | tarjetas credito                                                                    | string       | App Step 3 |
            | product name             | oro bbva                                                                            | string       | App Step 3 |
            | custom fields            | lugar de nacimiento: tamaulipas, genero: genero mujer                               | string       | App Step 3 |
            | internal campaign        |                                                                                     | empty array  | App Step 3 |
            | optimization attributes  |                                                                                     | empty array  | App Step 3 |

    @ANA_EVENT_TCA006
    @analytics
    @MX @vbank
    @web @ios @android
    @spherica
    @backend(test)
    @web-done
    Scenario: Additional Credit Card - App Step 4
        Given a user with the following criteria
            | criteria                      |
            | additional credit card renapo |
        And the user accesses to the "gold" "credit" card product detail
        And the user displays the additional credit cards module
        And the user accesses to additional credit card
        And the analytics interceptor service is initiated
        When the user goes to the "summary" step
        Then the analytics events contains the following variables:
            | item                     | value                                                                     | type         | event      |
            | analytics                | analytics/glomo_base                                                      | json schema  | App Step 4 |
            | page name                | app:privada:personas:tarjetas:tarjeta de credito adicional:4 confirmacion | string       | App Step 4 |
            | level 1                  | tarjetas                                                                  | string       | App Step 4 |
            | level 2                  | tarjeta de credito adicional                                              | string       | App Step 4 |
            | level 3                  | 4 confirmacion                                                            | string       | App Step 4 |
            | language                 | ES                                                                        | string       | App Step 4 |
            | page area                | privada                                                                   | string       | App Step 4 |
            | page intent              | transaccion                                                               | string       | App Step 4 |
            | channel                  | online                                                                    | string       | App Step 4 |
            | page instance ID         | de                                                                        | string       | App Step 4 |
            | version DL               | 20250414_5.0                                                              | string       | App Step 4 |
            | page info version        | appVersion                                                                | regexp named | App Step 4 |
            | page segment             | personas                                                                  | string       | App Step 4 |
            | sysEnv                   | app                                                                       | string       | App Step 4 |
            | business unit            | BBVA Mexico                                                               | string       | App Step 4 |
            | site app name            | App BBVA Mexico                                                           | string       | App Step 4 |
            | project name             | Glomo                                                                     | string       | App Step 4 |
            | device mobile            | si                                                                        | string       | App Step 4 |
            | user userState           | logado                                                                    | string       | App Step 4 |
            | user gender              | gender                                                                    | regexp named | App Step 4 |
            | user age                 | age                                                                       | regexp named | App Step 4 |
            | global application       | additional credit card                                                    | string       | App Step 4 |
            | application typology     | domicilio                                                                 | string       | App Step 4 |
            | application name         | tarjeta de credito adicional                                              | string       | App Step 4 |
            | application type         | contratacion                                                              | string       | App Step 4 |
            | application step         | 4 confirmacion                                                            | string       | App Step 4 |
            | fulfillment model        | online                                                                    | string       | App Step 4 |
            | product primary category | tarjetas                                                                  | string       | App Step 4 |
            | product subtype          | tarjetas credito                                                          | string       | App Step 4 |
            | product name             | oro bbva                                                                  | string       | App Step 4 |
            | custom fields            | lugar de nacimiento: tamaulipas, genero: genero mujer                     | string       | App Step 4 |
            | internal campaign        |                                                                           | empty array  | App Step 4 |
            | optimization attributes  |                                                                           | empty array  | App Step 4 |

    @ANA_EVENT_TCA007
    @analytics
    @MX @vbank
    @web @ios @android
    @spherica
    @backend(test)
    @web-done
    Scenario: Additional Credit Card - App Step 5
        Given a user with the following criteria
            | criteria                      |
            | additional credit card renapo |
        And the user accesses to the "gold" "credit" card product detail
        And the user displays the additional credit cards module
        And the user accesses to additional credit card
        And the analytics interceptor service is initiated
        When the user goes to the "hire" step
        Then the analytics events contains the following variables:
            | item                     | value                                                              | type         | event      |
            | analytics                | analytics/glomo_base                                               | json schema  | App Step 5 |
            | page name                | app:privada:personas:tarjetas:tarjeta de credito adicional:5 otp   | string       | App Step 5 |
            | level 1                  | tarjetas                                                           | string       | App Step 5 |
            | level 2                  | tarjeta de credito adicional                                       | string       | App Step 5 |
            | level 3                  | 5 otp                                                              | string       | App Step 5 |
            | language                 | ES                                                                 | string       | App Step 5 |
            | page area                | privada                                                            | string       | App Step 5 |
            | page intent              | transaccion                                                        | string       | App Step 5 |
            | channel                  | online                                                             | string       | App Step 5 |
            | page instance ID         | de                                                                 | string       | App Step 5 |
            | version DL               | 20250414_5.0                                                       | string       | App Step 5 |
            | page info version        | appVersion                                                         | regexp named | App Step 5 |
            | page segment             | personas                                                           | string       | App Step 5 |
            | sysEnv                   | app                                                                | string       | App Step 5 |
            | business unit            | BBVA Mexico                                                        | string       | App Step 5 |
            | site app name            | App BBVA Mexico                                                    | string       | App Step 5 |
            | project name             | Glomo                                                              | string       | App Step 5 |
            | device mobile            | si                                                                 | string       | App Step 5 |
            | user userState           | logado                                                             | string       | App Step 5 |
            | profile ID               | profileID                                                          | regexp named | App Step 5 |
            | user segment global      | 003001                                                             | string       | App Step 5 |
            | user gender              | gender                                                             | regexp named | App Step 5 |
            | user age                 | age                                                                | regexp named | App Step 5 |
            | global application       | additional credit card                                             | string       | App Step 5 |
            | application typology     | domicilio                                                          | string       | App Step 5 |
            | application name         | tarjeta de credito adicional                                       | string       | App Step 5 |
            | application type         | contratacion                                                       | string       | App Step 5 |
            | application step         | 5 otp                                                              | string       | App Step 5 |
            | fulfillment model        | online                                                             | string       | App Step 5 |
            | product primary category | tarjetas                                                           | string       | App Step 5 |
            | product subtype          | tarjetas credito                                                   | string       | App Step 5 |
            | product name             | oro bbva                                                           | string       | App Step 5 |
            | custom fields            | lugar de nacimiento: tamaulipas, genero: genero mujer, firma:token | string       | App Step 5 |
            | internal campaign        |                                                                    | empty array  | App Step 5 |
            | optimization attributes  |                                                                    | empty array  | App Step 5 |

    @ANA_EVENT_TCA008
    @analytics
    @MX @vbank
    @web @ios @android
    @spherica
    @backend(test)
    @web-done
    Scenario: Additional Credit Card - App Completed
        Given a user with the following criteria
            | criteria                      |
            | additional credit card renapo |
        And the user accesses to the "gold" "credit" card product detail
        And the user displays the additional credit cards module
        And the user accesses to additional credit card
        And the user goes to the "hire" step
        And the analytics interceptor service is initiated
        When the user confirms the token signature
        Then the analytics events contains the following variables:
            | item                         | value                                                                     | type         | event         |
            | analytics                    | analytics/glomo_base                                                      | json schema  | App Completed |
            | page name                    | app:privada:personas:tarjetas:tarjeta de credito adicional:pagina exitosa | string       | App Completed |
            | level 1                      | tarjetas                                                                  | string       | App Completed |
            | level 2                      | tarjeta de credito adicional                                              | string       | App Completed |
            | level 3                      | pagina exitosa                                                            | string       | App Completed |
            | language                     | ES                                                                        | string       | App Completed |
            | page area                    | privada                                                                   | string       | App Completed |
            | page intent                  | transaccion                                                               | string       | App Completed |
            | channel                      | online                                                                    | string       | App Completed |
            | page instance ID             | de                                                                        | string       | App Completed |
            | version DL                   | 20250414_5.0                                                              | string       | App Completed |
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
            | fulfillment model            | online                                                                    | string       | App Completed |
            | application state            | finalizado                                                                | string       | App Completed |
            | application operation number | A0005015                                                                  | string       | App Completed |
            | product primary category     | tarjetas                                                                  | string       | App Completed |
            | product subtype              | tarjetas credito                                                          | string       | App Completed |
            | product name                 | oro bbva                                                                  | string       | App Completed |
            | product state                | finalizado                                                                | string       | App Completed |
            | custom fields                | lugar de nacimiento: tamaulipas, genero: genero mujer, firma:token        | string       | App Completed |
            | internal campaign            |                                                                           | empty array  | App Completed |
            | optimization attributes      |                                                                           | empty array  | App Completed |

    @ANA_EVENT_TCA009
    @analytics
    @MX @vbank
    @web @ios @android
    @spherica
    @backend(test)
    @web-done
    Scenario: Additional Credit Card - Huella - Benefits
        Given a user with the following criteria
            | criteria                      |
            | additional credit card renapo |
        And the user accesses to the "gold" "credit" card product detail
        And the user displays the additional credit cards module
        And the analytics interceptor service is initiated
        When the user accesses to additional credit card
        Then the analytics events contains the following variables:
            | item                    | value                                                                 | type             | event     |
            | analytics               | analytics/glomo_base                                                  | json schema      | Page View |
            | version DL              | 20250414_5.0                                                          | string           | Page View |
            | page name               | app:privada:personas:tarjetas:tarjeta de credito adicional:beneficios | string           | Page View |
            | level 1                 | tarjetas                                                              | string           | Page View |
            | level 2                 | tarjeta de credito adicional                                          | string           | Page View |
            | level 3                 | beneficios                                                            | string           | Page View |
            | language                | ES                                                                    | string           | Page View |
            | page area               | privada                                                               | string           | Page View |
            | page intent             | transaccion                                                           | string           | Page View |
            | channel                 | online                                                                | string           | Page View |
            | page instance ID        | de                                                                    | string           | Page View |
            | page info version       | appVersion                                                            | regexp named     | Page View |
            | page segment            | personas                                                              | string           | Page View |
            | sysEnv                  | app                                                                   | string           | Page View |
            | business unit           | BBVA Mexico                                                           | string           | Page View |
            | site app name           | App BBVA Mexico                                                       | string           | Page View |
            | project name            | Glomo                                                                 | string           | Page View |
            | device mobile           | si                                                                    | string           | Page View |
            | user userState          | logado                                                                | string           | Page View |
            | profile ID              | profileID                                                             | regexp named     | Page View |
            | user segment global     | 003001                                                                | string           | Page View |
            | internal campaign       |                                                                       | empty array      | Page View |
            | optimization attributes |                                                                       | empty array      | Page View |
            | application             |                                                                       | empty str object | Page View |
            | products attributes     |                                                                       | empty array      | Page View |

    @ANA_EVENT_TCA010
    @analytics
    @MX @vbank
    @web @ios @android
    @spherica
    @backend(test)
    @web-done
    Scenario: Additional Credit Card - Huella - Branch
        Given a user with the following criteria
            | criteria                      |
            | additional credit card renapo |
        And the user accesses to the "gold" "credit" card product detail
        And the user displays the additional credit cards module
        And the user accesses to additional credit card
        And the analytics interceptor service is initiated
        When the user accesses to the branch locator
        Then the analytics events contains the following variables:
            | item                    | value                                                                    | type             | event     |
            | analytics               | analytics/glomo_base                                                     | json schema      | Page View |
            | version DL              | 20250414_5.0                                                             | string           | Page View |
            | page name               | app:privada:personas:tarjetas:tarjeta de credito adicional:mapa sucursal | string           | Page View |
            | level 1                 | tarjetas                                                                 | string           | Page View |
            | level 2                 | tarjeta de credito adicional                                             | string           | Page View |
            | level 3                 | mapa sucursal                                                            | string           | Page View |
            | language                | ES                                                                       | string           | Page View |
            | page area               | privada                                                                  | string           | Page View |
            | page intent             | transaccion                                                              | string           | Page View |
            | channel                 | online                                                                   | string           | Page View |
            | page instance ID        | de                                                                       | string           | Page View |
            | page info version       | appVersion                                                               | regexp named     | Page View |
            | page segment            | personas                                                                 | string           | Page View |
            | sysEnv                  | app                                                                      | string           | Page View |
            | business unit           | BBVA Mexico                                                              | string           | Page View |
            | site app name           | App BBVA Mexico                                                          | string           | Page View |
            | project name            | Glomo                                                                    | string           | Page View |
            | device mobile           | si                                                                       | string           | Page View |
            | user userState          | logado                                                                   | string           | Page View |
            | profile ID              | profileID                                                                | regexp named     | Page View |
            | user segment global     | 003001                                                                   | string           | Page View |
            | internal campaign       |                                                                          | empty array      | Page View |
            | optimization attributes |                                                                          | empty array      | Page View |
            | application             |                                                                          | empty str object | Page View |
            | products attributes     |                                                                          | empty array      | Page View |

    @ANA_EVENT_TCA011
    @analytics
    @MX @vbank
    @web @ios @android
    @spherica
    @backend(test)
    @web-done
    Scenario: Additional Credit Card - Huella - Privacy Notice
        Given a user with the following criteria
            | criteria                      |
            | additional credit card renapo |
        And the user accesses to the "gold" "credit" card product detail
        And the user displays the additional credit cards module
        And the user accesses to additional credit card
        And the analytics interceptor service is initiated
        When the user goes to the "privacy notice" step
        Then the analytics events contains the following variables:
            | item                    | value                                                                          | type             | event     |
            | analytics               | analytics/glomo_base                                                           | json schema      | Page View |
            | version DL              | 20250414_5.0                                                                   | string           | Page View |
            | page name               | app:privada:personas:tarjetas:tarjeta de credito adicional:aviso de privacidad | string           | Page View |
            | level 1                 | tarjetas                                                                       | string           | Page View |
            | level 2                 | tarjeta de credito adicional                                                   | string           | Page View |
            | level 3                 | aviso de privacidad                                                            | string           | Page View |
            | language                | ES                                                                             | string           | Page View |
            | page area               | privada                                                                        | string           | Page View |
            | page intent             | transaccion                                                                    | string           | Page View |
            | channel                 | online                                                                         | string           | Page View |
            | page instance ID        | de                                                                             | string           | Page View |
            | page info version       | appVersion                                                                     | regexp named     | Page View |
            | page segment            | personas                                                                       | string           | Page View |
            | sysEnv                  | app                                                                            | string           | Page View |
            | business unit           | BBVA Mexico                                                                    | string           | Page View |
            | site app name           | App BBVA Mexico                                                                | string           | Page View |
            | project name            | Glomo                                                                          | string           | Page View |
            | device mobile           | si                                                                             | string           | Page View |
            | user userState          | logado                                                                         | string           | Page View |
            | profile ID              | profileID                                                                      | regexp named     | Page View |
            | user segment global     | 003001                                                                         | string           | Page View |
            | internal campaign       |                                                                                | empty array      | Page View |
            | optimization attributes |                                                                                | empty array      | Page View |
            | application             |                                                                                | empty str object | Page View |
            | products attributes     |                                                                                | empty array      | Page View |

    @ANA_EVENT_TCA012
    @analytics
    @MX @vbank
    @web @ios @android
    @spherica
    @backend(test)
    @web-done
    Scenario: Additional Credit Card - Huella Error - Service Unavailable
        Given a user with the following criteria
            | criteria                      |
            | additional credit card renapo |
        And the user accesses to the "gold" "credit" card product detail
        And the user displays the additional credit cards module
        And the analytics interceptor service is initiated
        When the user accesses to additional credit card
        Then the analytics events contains the following variables:
            | item                    | value                                                                                   | type             | event     | event number |
            | analytics               | analytics/glomo_base                                                                    | json schema      | Page View | 3            |
            | version DL              | 20250414_5.0                                                                            | string           | Page View | 3            |
            | page name               | app:privada:personas:tarjetas:tarjeta de credito adicional:error servicio no disponible | string           | Page View | 3            |
            | level 1                 | tarjetas                                                                                | string           | Page View | 3            |
            | level 2                 | tarjeta de credito adicional                                                            | string           | Page View | 3            |
            | level 3                 | error servicio no disponible                                                            | string           | Page View | 3            |
            | error page              | error servicio no disponible                                                            | string           | Page View | 3            |
            | language                | ES                                                                                      | string           | Page View | 3            |
            | page area               | privada                                                                                 | string           | Page View | 3            |
            | page intent             | transaccion                                                                             | string           | Page View | 3            |
            | channel                 | online                                                                                  | string           | Page View | 3            |
            | page instance ID        | de                                                                                      | string           | Page View | 3            |
            | page info version       | appVersion                                                                              | regexp named     | Page View | 3            |
            | page segment            | personas                                                                                | string           | Page View | 3            |
            | sysEnv                  | app                                                                                     | string           | Page View | 3            |
            | business unit           | BBVA Mexico                                                                             | string           | Page View | 3            |
            | site app name           | App BBVA Mexico                                                                         | string           | Page View | 3            |
            | project name            | Glomo                                                                                   | string           | Page View | 3            |
            | device mobile           | si                                                                                      | string           | Page View | 3            |
            | user userState          | logado                                                                                  | string           | Page View | 3            |
            | profile ID              | profileID                                                                               | regexp named     | Page View | 3            |
            | user segment global     | 003001                                                                                  | string           | Page View | 3            |
            | internal campaign       |                                                                                         | empty array      | Page View | 3            |
            | optimization attributes |                                                                                         | empty array      | Page View | 3            |
            | application             |                                                                                         | empty str object | Page View | 3            |
            | products attributes     |                                                                                         | empty array      | Page View | 3            |

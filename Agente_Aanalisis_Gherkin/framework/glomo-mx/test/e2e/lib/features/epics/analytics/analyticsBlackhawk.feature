@blackhawkAnalytics
Feature: Analytics Blackhawk

    @ANA_BH001
    @analytics
    @vbank
    @MX @android @ios
    @web
    @backend(test)
    @web-done
    Scenario: The user selects a brand of cards to buy -- App On Click Start
        Given a user with the following criteria
            | criteria           |
            | multiple accounts  |
            | account in pesos   |
            | blackhawk cards    |
        And the user accesses to "gift cards" operative from top up operationals
        And the analytics interceptor service is initiated
        When the user goes to purchase, choosing the "first" brand and "fixed" amount card
        Then the analytics events contains the following variables
            | item	                   | value	                                                   | type         | event              |
            | analytics                | analytics/glomo_base                                      | json schema  | App On Click Start |
            | version DL               | 20250414_5.0                                              | string       | App On Click Start |
            | page name                | app:privada:personas:tarjetas de regalo:lista de tarjetas | string       | App On Click Start |
            | level 1                  | tarjetas de regalo                                        | string       | App On Click Start |
            | level 2                  | lista de tarjetas                                         | string       | App On Click Start |
            | language                 | ES                                                        | string       | App On Click Start |
            | page area                | privada                                                   | string       | App On Click Start |
            | page intent              | informacion                                               | string       | App On Click Start |
            | channel                  | online                                                    | string       | App On Click Start |
            | page instance ID         | de                                                        | string       | App On Click Start |
            | page info version        | appVersion                                                | regexp named | App On Click Start |
            | page segment             | personas                                                  | string       | App On Click Start |
            | sysEnv                   | app                                                       | string       | App On Click Start |
            | business unit            | BBVA Mexico                                               | string       | App On Click Start |
            | site app name            | App BBVA Mexico                                           | string       | App On Click Start |
            | project name             | Glomo                                                     | string       | App On Click Start |
            | device mobile            | si                                                        | string       | App On Click Start |
            | user userState           | logado                                                    | string       | App On Click Start |
            | profile ID               | profileID                                                 | regexp named | App On Click Start |
            | user segment global      | 003001                                                    | string       | App On Click Start |
            | user gender              | gender                                                    | regexp named | App On Click Start |
            | user age                 | age                                                       | regexp named | App On Click Start |
            | global application       | gift card purchase                                        | string       | App On Click Start |
            | application name         | tarjetas de regalo                                        | string       | App On Click Start |
            | application type         | contratacion                                              | string       | App On Click Start |
            | application step         | me interesa                                               | string       | App On Click Start |
            | fulfillment model        | online                                                    | string       | App On Click Start |
            | product primary category | tarjetas                                                  | string       | App On Click Start |
            | product subtype          | tarjetas regalo                                           | string       | App On Click Start |

    @ANA_BH002
    @analytics
    @vbank
    @MX @android @ios
    @web
    @backend(test)
    @web-done
    Scenario: The user will buy a card of a certain brand -- App Page Visit
        Given a user with the following criteria
            | criteria           |
            | multiple accounts  |
            | account in pesos   |
            | blackhawk cards    |
        And the user accesses to "gift cards" operative from top up operationals
        And the analytics interceptor service is initiated
        When the user goes to purchase, choosing the "first" brand and "fixed" amount card
        Then the analytics events contains the following variables
            | item	                   | value	                                                   | type         | event          |
            | analytics                | analytics/glomo_base                                      | json schema  | App Page Visit |
            | version DL               | 20250414_5.0                                              | string       | App Page Visit |
            | page name                | app:privada:personas:tarjetas de regalo:1 detalle         | string       | App Page Visit |
            | level 1                  | tarjetas de regalo                                        | string       | App Page Visit |
            | level 2                  | 1 detalle                                                 | string       | App Page Visit |
            | language                 | ES                                                        | string       | App Page Visit |
            | page area                | privada                                                   | string       | App Page Visit |
            | page intent              | transaccion                                               | string       | App Page Visit |
            | channel                  | online                                                    | string       | App Page Visit |
            | page instance ID         | de                                                        | string       | App Page Visit |
            | page info version        | appVersion                                                | regexp named | App Page Visit |
            | page segment             | personas                                                  | string       | App Page Visit |
            | sysEnv                   | app                                                       | string       | App Page Visit |
            | business unit            | BBVA Mexico                                               | string       | App Page Visit |
            | site app name            | App BBVA Mexico                                           | string       | App Page Visit |
            | project name             | Glomo                                                     | string       | App Page Visit |
            | device mobile            | si                                                        | string       | App Page Visit |
            | user userState           | logado                                                    | string       | App Page Visit |
            | profile ID               | profileID                                                 | regexp named | App Page Visit |
            | user segment global      | 003001                                                    | string       | App Page Visit |
            | user gender              | gender                                                    | regexp named | App Page Visit |
            | user age                 | age                                                       | regexp named | App Page Visit |
            | global application       | gift card purchase                                        | string       | App Page Visit |
            | application name         | tarjetas de regalo                                        | string       | App Page Visit |
            | application type         | contratacion                                              | string       | App Page Visit |
            | application step         | 1 detalle                                                 | string       | App Page Visit |
            | fulfillment model        | online                                                    | string       | App Page Visit |
            | product primary category | tarjetas                                                  | string       | App Page Visit |
            | product subtype          | tarjetas regalo                                           | string       | App Page Visit |

    @ANA_BH003
    @analytics
    @vbank
    @MX @android @ios
    @web
    @backend(test)
    @web-done
    Scenario: The user selects the card to buy - App Started
        Given a user with the following criteria
            | criteria           |
            | multiple accounts  |
            | account in pesos   |
            | blackhawk cards    |
        And the user accesses to "gift cards" operative from top up operationals
        And the analytics interceptor service is initiated
        When the user goes to purchase, choosing the "first" brand and "fixed" amount card
        Then the analytics events contains the following variables
            | item	                   | value	                                                   | type         | event       |
            | analytics                | analytics/glomo_base                                      | json schema  | App Started |
            | version DL               | 20250414_5.0                                              | string       | App Started |
            | page name                | app:privada:personas:tarjetas de regalo:1 detalle         | string       | App Started |
            | level 1                  | tarjetas de regalo                                        | string       | App Started |
            | level 2                  | 1 detalle                                                 | string       | App Started |
            | language                 | ES                                                        | string       | App Started |
            | page area                | privada                                                   | string       | App Started |
            | page intent              | transaccion                                               | string       | App Started |
            | channel                  | online                                                    | string       | App Started |
            | page instance ID         | de                                                        | string       | App Started |
            | page info version        | appVersion                                                | regexp named | App Started |
            | page segment             | personas                                                  | string       | App Started |
            | sysEnv                   | app                                                       | string       | App Started |
            | business unit            | BBVA Mexico                                               | string       | App Started |
            | site app name            | App BBVA Mexico                                           | string       | App Started |
            | project name             | Glomo                                                     | string       | App Started |
            | device mobile            | si                                                        | string       | App Started |
            | user userState           | logado                                                    | string       | App Started |
            | profile ID               | profileID                                                 | regexp named | App Started |
            | user segment global      | 003001                                                    | string       | App Started |
            | user gender              | gender                                                    | regexp named | App Started |
            | user age                 | age                                                       | regexp named | App Started |
            | global application       | gift card purchase                                        | string       | App Started |
            | application name         | tarjetas de regalo                                        | string       | App Started |
            | application type         | contratacion                                              | string       | App Started |
            | application step         | google 100mxn egift 100                                   | string       | App Started |
            | fulfillment model        | online                                                    | string       | App Started |
            | product primary category | tarjetas                                                  | string       | App Started |
            | product subtype          | tarjetas regalo                                           | string       | App Started |

    @ANA_BH004
    @analytics
    @vbank
    @MX @android @ios
    @web
    @backend(test)
    @web-done
    Scenario: The user selects account - App Step 2
        Given a user with the following criteria
            | criteria           |
            | multiple accounts  |
            | account in pesos   |
            | blackhawk cards    |
        And the user accesses to "gift cards" operative from top up operationals
        And the analytics interceptor service is initiated
        When the user goes to purchase, choosing the "first" brand and "fixed" amount card
        Then the analytics events contains the following variables
            | item	                   | value	                                                    | type         | event      |
            | analytics                | analytics/glomo_base                                       | json schema  | App Step 2 |
            | version DL               | 20250414_5.0                                               | string       | App Step 2 |
            | page name                | app:privada:personas:tarjetas de regalo:2 seleccion cuenta | string       | App Step 2 |
            | level 1                  | tarjetas de regalo                                         | string       | App Step 2 |
            | level 2                  | 2 seleccion cuenta                                         | string       | App Step 2 |
            | language                 | ES                                                         | string       | App Step 2 |
            | page area                | privada                                                    | string       | App Step 2 |
            | page intent              | transaccion                                                | string       | App Step 2 |
            | channel                  | online                                                     | string       | App Step 2 |
            | page instance ID         | de                                                         | string       | App Step 2 |
            | page info version        | appVersion                                                 | regexp named | App Step 2 |
            | page segment             | personas                                                   | string       | App Step 2 |
            | sysEnv                   | app                                                        | string       | App Step 2 |
            | business unit            | BBVA Mexico                                                | string       | App Step 2 |
            | site app name            | App BBVA Mexico                                            | string       | App Step 2 |
            | project name             | Glomo                                                      | string       | App Step 2 |
            | device mobile            | si                                                         | string       | App Step 2 |
            | user userState           | logado                                                     | string       | App Step 2 |
            | profile ID               | profileID                                                  | regexp named | App Step 2 |
            | user segment global      | 003001                                                     | string       | App Step 2 |
            | user gender              | gender                                                     | regexp named | App Step 2 |
            | user age                 | age                                                        | regexp named | App Step 2 |
            | global application       | gift card purchase                                         | string       | App Step 2 |
            | application name         | tarjetas de regalo                                         | string       | App Step 2 |
            | application type         | contratacion                                               | string       | App Step 2 |
            | application step         | 2 seleccion cuenta                                         | string       | App Step 2 |
            | fulfillment model        | online                                                     | string       | App Step 2 |
            | product primary category | tarjetas                                                   | string       | App Step 2 |
            | product subtype          | tarjetas regalo                                            | string       | App Step 2 |
            | product name             | tarjeta google play                                        | string       | App Step 2 |
            | product amount           | 100                                                        | Number       | App Step 2 |
            | product currency         | MXN                                                        | string       | App Step 2 |

    @ANA_BH005
    @analytics
    @vbank
    @MX @android @ios
    @web
    @backend(test)
    @web-done
    Scenario: The user is in the terms step - App Step 3
        Given a user with the following criteria
            | criteria           |
            | multiple accounts  |
            | account in pesos   |
            | blackhawk cards    |
        And the user accesses to "gift cards" operative from top up operationals
        And the analytics interceptor service is initiated
        And the user goes to purchase, choosing the "first" brand and "fixed" amount card
        When the user continues to the "terms" step of the card purchase
        Then the analytics events contains the following variables
            | item	                   | value	                                                          | type         | event      |
            | analytics                | analytics/glomo_base                                             | json schema  | App Step 3 |
            | version DL               | 20250414_5.0                                                     | string       | App Step 3 |
            | page name                | app:privada:personas:tarjetas de regalo:3 terminos y condiciones | string       | App Step 3 |
            | level 1                  | tarjetas de regalo                                               | string       | App Step 3 |
            | level 2                  | 3 terminos y condiciones                                         | string       | App Step 3 |
            | language                 | ES                                                               | string       | App Step 3 |
            | page area                | privada                                                          | string       | App Step 3 |
            | page intent              | transaccion                                                      | string       | App Step 3 |
            | channel                  | online                                                           | string       | App Step 3 |
            | page instance ID         | de                                                               | string       | App Step 3 |
            | page info version        | appVersion                                                       | regexp named | App Step 3 |
            | page segment             | personas                                                         | string       | App Step 3 |
            | sysEnv                   | app                                                              | string       | App Step 3 |
            | business unit            | BBVA Mexico                                                      | string       | App Step 3 |
            | site app name            | App BBVA Mexico                                                  | string       | App Step 3 |
            | project name             | Glomo                                                            | string       | App Step 3 |
            | device mobile            | si                                                               | string       | App Step 3 |
            | user userState           | logado                                                           | string       | App Step 3 |
            | profile ID               | profileID                                                        | regexp named | App Step 3 |
            | user segment global      | 003001                                                           | string       | App Step 3 |
            | user gender              | gender                                                           | regexp named | App Step 3 |
            | user age                 | age                                                              | regexp named | App Step 3 |
            | global application       | gift card purchase                                               | string       | App Step 3 |
            | application name         | tarjetas de regalo                                               | string       | App Step 3 |
            | application type         | contratacion                                                     | string       | App Step 3 |
            | application step         | 3 terminos y condiciones                                         | string       | App Step 3 |
            | fulfillment model        | online                                                           | string       | App Step 3 |
            | product primary category | tarjetas                                                         | string       | App Step 3 |
            | product subtype          | tarjetas regalo                                                  | string       | App Step 3 |
            | product name             | tarjeta google play                                              | string       | App Step 3 |
            | product amount           | 100                                                              | Number       | App Step 3 |
            | product currency         | MXN                                                              | string       | App Step 3 |

    @ANA_BH006
    @analytics
    @vbank
    @MX @android @ios
    @web
    @backend(test)
    @web-done
    Scenario: The user sees the purchase summary - App Step 4
        Given a user with the following criteria
            | criteria           |
            | multiple accounts  |
            | account in pesos   |
            | blackhawk cards    |
        And the user accesses to "gift cards" operative from top up operationals
        And the analytics interceptor service is initiated
        And the user goes to purchase, choosing the "first" brand and "fixed" amount card
        When the user continues to the "summary" step of the card purchase
        Then the analytics events contains the following variables
            | item	                   | value	                                                          | type         | event      |
            | analytics                | analytics/glomo_base                                             | json schema  | App Step 4 |
            | version DL               | 20250414_5.0                                                     | string       | App Step 4 |
            | page name                | app:privada:personas:tarjetas de regalo:4 confirmacion           | string       | App Step 4 |
            | level 1                  | tarjetas de regalo                                               | string       | App Step 4 |
            | level 2                  | 4 confirmacion                                                   | string       | App Step 4 |
            | language                 | ES                                                               | string       | App Step 4 |
            | page area                | privada                                                          | string       | App Step 4 |
            | page intent              | transaccion                                                      | string       | App Step 4 |
            | channel                  | online                                                           | string       | App Step 4 |
            | page instance ID         | de                                                               | string       | App Step 4 |
            | page info version        | appVersion                                                       | regexp named | App Step 4 |
            | page segment             | personas                                                         | string       | App Step 4 |
            | sysEnv                   | app                                                              | string       | App Step 4 |
            | business unit            | BBVA Mexico                                                      | string       | App Step 4 |
            | site app name            | App BBVA Mexico                                                  | string       | App Step 4 |
            | project name             | Glomo                                                            | string       | App Step 4 |
            | device mobile            | si                                                               | string       | App Step 4 |
            | user userState           | logado                                                           | string       | App Step 4 |
            | profile ID               | profileID                                                        | regexp named | App Step 4 |
            | user segment global      | 003001                                                           | string       | App Step 4 |
            | user gender              | gender                                                           | regexp named | App Step 4 |
            | user age                 | age                                                              | regexp named | App Step 4 |
            | global application       | gift card purchase                                               | string       | App Step 4 |
            | application name         | tarjetas de regalo                                               | string       | App Step 4 |
            | application type         | contratacion                                                     | string       | App Step 4 |
            | application step         | 4 confirmacion                                                   | string       | App Step 4 |
            | fulfillment model        | online                                                           | string       | App Step 4 |
            | product primary category | tarjetas                                                         | string       | App Step 4 |
            | product subtype          | tarjetas regalo                                                  | string       | App Step 4 |
            | product name             | tarjeta google play                                              | string       | App Step 4 |
            | product amount           | 100                                                              | Number       | App Step 4 |
            | product currency         | MXN                                                              | string       | App Step 4 |

    @ANA_BH007
    @analytics
    @vbank
    @MX @android @ios
    @web
    @backend(test)
    @web-done @vbank-modified
    Scenario: The user is in the OTP step of the card purchase - App Step 5
        Given a user with the following criteria
            | criteria           |
            | multiple accounts  |
            | account in pesos   |
            | blackhawk cards    |
        And the user accesses to "gift cards" operative from top up operationals
        And the analytics interceptor service is initiated
        And the user goes to purchase, choosing the "first" brand and "fixed" amount card
        And the user continues to the "summary" step of the card purchase
        When the user completes the card purchase
        Then the analytics events contains the following variables
            | item	                   | value	                                                          | type         | event      |
            | analytics                | analytics/glomo_base                                             | json schema  | App Step 5 |
            | version DL               | 20250414_5.0                                                     | string       | App Step 5 |
            | page name                | app:privada:personas:tarjetas de regalo:5 otp                    | string       | App Step 5 |
            | level 1                  | tarjetas de regalo                                               | string       | App Step 5 |
            | level 2                  | 5 otp                                                            | string       | App Step 5 |
            | language                 | ES                                                               | string       | App Step 5 |
            | page area                | privada                                                          | string       | App Step 5 |
            | page intent              | transaccion                                                      | string       | App Step 5 |
            | channel                  | online                                                           | string       | App Step 5 |
            | page instance ID         | de                                                               | string       | App Step 5 |
            | page info version        | appVersion                                                       | regexp named | App Step 5 |
            | page segment             | personas                                                         | string       | App Step 5 |
            | sysEnv                   | app                                                              | string       | App Step 5 |
            | business unit            | BBVA Mexico                                                      | string       | App Step 5 |
            | site app name            | App BBVA Mexico                                                  | string       | App Step 5 |
            | project name             | Glomo                                                            | string       | App Step 5 |
            | device mobile            | si                                                               | string       | App Step 5 |
            | user userState           | logado                                                           | string       | App Step 5 |
            | profile ID               | profileID                                                        | regexp named | App Step 5 |
            | user segment global      | 003001                                                           | string       | App Step 5 |
            | user gender              | gender                                                           | regexp named | App Step 5 |
            | user age                 | age                                                              | regexp named | App Step 5 |
            | global application       | gift card purchase                                               | string       | App Step 5 |
            | application name         | tarjetas de regalo                                               | string       | App Step 5 |
            | application type         | contratacion                                                     | string       | App Step 5 |
            | application step         | 5 otp                                                            | string       | App Step 5 |
            | fulfillment model        | online                                                           | string       | App Step 5 |
            | product primary category | tarjetas                                                         | string       | App Step 5 |
            | product subtype          | tarjetas regalo                                                  | string       | App Step 5 |
            | product name             | tarjeta google play                                              | string       | App Step 5 |
            | product amount           | 100                                                              | Number       | App Step 5 |
            | product currency         | MXN                                                              | string       | App Step 5 |

    @ANA_BH008
    @analytics
    @vbank
    @MX @android @ios
    @web
    @backend(test)
    @web-done @vbank-modified
    Scenario: The user completes the purchase of the card  - App Completed
        Given a user with the following criteria
            | criteria           |
            | multiple accounts  |
            | account in pesos   |
            | blackhawk cards    |
        And the user accesses to "gift cards" operative from top up operationals
        And the analytics interceptor service is initiated
        And the user goes to purchase, choosing the "first" brand and "fixed" amount card
        And the user continues to the "summary" step of the card purchase
        When the user completes the card purchase
        Then the analytics events contains the following variables
            | item	                       | value	                                                          | type         | event         |
            | analytics                    | analytics/glomo_base                                             | json schema  | App Completed |
            | version DL                   | 20250414_5.0                                                     | string       | App Completed |
            | page name                    | app:privada:personas:tarjetas de regalo:pagina exitosa           | string       | App Completed |
            | level 1                      | tarjetas de regalo                                               | string       | App Completed |
            | level 2                      | pagina exitosa                                                   | string       | App Completed |
            | language                     | ES                                                               | string       | App Completed |
            | page area                    | privada                                                          | string       | App Completed |
            | page intent                  | transaccion                                                      | string       | App Completed |
            | channel                      | online                                                           | string       | App Completed |
            | page instance ID             | de                                                               | string       | App Completed |
            | page info version            | appVersion                                                       | regexp named | App Completed |
            | page segment                 | personas                                                         | string       | App Completed |
            | sysEnv                       | app                                                              | string       | App Completed |
            | business unit                | BBVA Mexico                                                      | string       | App Completed |
            | site app name                | App BBVA Mexico                                                  | string       | App Completed |
            | project name                 | Glomo                                                            | string       | App Completed |
            | device mobile                | si                                                               | string       | App Completed |
            | user userState               | logado                                                           | string       | App Completed |
            | profile ID                   | profileID                                                        | regexp named | App Completed |
            | user segment global          | 003001                                                           | string       | App Completed |
            | user gender                  | gender                                                           | regexp named | App Completed |
            | user age                     | age                                                              | regexp named | App Completed |
            | global application           | gift card purchase                                               | string       | App Completed |
            | application name             | tarjetas de regalo                                               | string       | App Completed |
            | application type             | contratacion                                                     | string       | App Completed |
            | application step             | pagina exitosa                                                   | string       | App Completed |
            | fulfillment model            | online                                                           | string       | App Completed |
            | application operation number | 0033231196                                                       | string       | App Completed |
            | product primary category     | tarjetas                                                         | string       | App Completed |
            | product subtype              | tarjetas regalo                                                  | string       | App Completed |
            | product name                 | tarjeta google play                                              | string       | App Completed |
            | product amount               | 100                                                              | Number       | App Completed |
            | product currency             | MXN                                                              | string       | App Completed |
            | product state                | contratado                                                       | string       | App Completed |

    @ANA_BH009
    @analytics
    @vbank
    @MX @android @ios
    @web
    @backend(test)
    @web-done
    Scenario: the user accesses to gift cards for the first time -- Page View -- Init
        Given a user with the following criteria
            | criteria           |
            | multiple accounts  |
            | account in pesos   |
            | blackhawk cards    |
        When the user accesses to "gift cards" operative from top up operationals
        Then the device contains the following variables
            | item	                       | value	                                                          | type         |
            | analytics                    | analytics/glomo_base                                             | json schema  |
            | version DL                   | 20250414_5.0                                                     | string       |
            | page name                    | app:privada:personas:tarjetas de regalo:inicio                   | string       |
            | level 1                      | tarjetas de regalo                                               | string       |
            | level 2                      | inicio                                                           | string       |
            | language                     | ES                                                               | string       |
            | page area                    | privada                                                          | string       |
            | page intent                  | informacion                                                      | string       |
            | channel                      | online                                                           | string       |
            | page instance ID             | de                                                               | string       |
            | page info version            | appVersion                                                       | regexp named |
            | page segment                 | personas                                                         | string       |
            | sysEnv                       | app                                                              | string       |
            | business unit                | BBVA Mexico                                                      | string       |
            | site app name                | App BBVA Mexico                                                  | string       |
            | project name                 | Glomo                                                            | string       |
            | device mobile                | si                                                               | string       |
            | user userState               | logado                                                           | string       |
            | profile ID                   | profileID                                                        | regexp named |
            | user segment global          | 003001                                                           | string       |
            | user gender                  | gender                                                           | regexp named |
            | user age                     | age                                                              | regexp named |

    @ANA_BH010
    @analytics
    @vbank
    @MX @android @ios
    @web
    @backend(test)
    @web-done
    Scenario: The user consults more information gift cards -- Page View -- Information
        Given a user with the following criteria
            | criteria           |
            | multiple accounts  |
            | account in pesos   |
            | blackhawk cards    |
        And the user accesses to "gift cards" operative from top up operationals
        When the user consults more information about gift cards from the "onBoarding"
        Then the device contains the following variables
            | item	                       | value	                                                           | type         |
            | analytics                    | analytics/glomo_base                                              | json schema  |
            | version DL                   | 20250414_5.0                                                      | string       |
            | page name                    | app:privada:personas:tarjetas de regalo:informacion               | string       |
            | level 1                      | tarjetas de regalo                                                | string       |
            | level 2                      | informacion                                                       | string       |
            | language                     | ES                                                                | string       |
            | page area                    | privada                                                           | string       |
            | page intent                  | informacion                                                       | string       |
            | channel                      | online                                                            | string       |
            | page instance ID             | de                                                                | string       |
            | page info version            | appVersion                                                        | regexp named |
            | page segment                 | personas                                                          | string       |
            | sysEnv                       | app                                                               | string       |
            | business unit                | BBVA Mexico                                                       | string       |
            | site app name                | App BBVA Mexico                                                   | string       |
            | project name                 | Glomo                                                             | string       |
            | device mobile                | si                                                                | string       |
            | user userState               | logado                                                            | string       |
            | profile ID                   | profileID                                                         | regexp named |
            | user segment global          | 003001                                                            | string       |
            | user gender                  | gender                                                            | regexp named |
            | user age                     | age                                                               | regexp named |

    @ANA_BH011
    @analytics
    @vbank
    @MX @android @ios
    @web
    @backend(test)
    @web-done
    Scenario: The user consults the list of cards -- Page View - List Cards
        Given a user with the following criteria
            | criteria           |
            | multiple accounts  |
            | account in pesos   |
            | blackhawk cards    |
        And the user accesses to "gift cards" operative from top up operationals
        When the user consults the list of card brands
        Then the device contains the following variables
            | item	                       | value	                                                           | type         |
            | Analytics                    | analytics/dashboard_base                                          | json schema  |
            | version DL                   | 20250414_5.0                                                      | string       |
            | page name                    | app:privada:personas:tarjetas de regalo:lista de tarjetas         | string       |
            | level 1                      | tarjetas de regalo                                                | string       |
            | level 2                      | lista de tarjetas                                                 | string       |
            | language                     | ES                                                                | string       |
            | page area                    | privada                                                           | string       |
            | page intent                  | informacion                                                       | string       |
            | channel                      | online                                                            | string       |
            | page instance ID             | de                                                                | string       |
            | page info version            | appVersion                                                        | regexp named |
            | page segment                 | personas                                                          | string       |
            | sysEnv                       | app                                                               | string       |
            | business unit                | BBVA Mexico                                                       | string       |
            | site app name                | App BBVA Mexico                                                   | string       |
            | project name                 | Glomo                                                             | string       |
            | user userState               | logado                                                            | string       |
            | profile ID                   | profileID                                                         | regexp named |
            | user segment global          | 003001                                                            | string       |
            | user gender                  | gender                                                            | regexp named |
            | user age                     | age                                                               | regexp named |

    @ANA_BH012
    @analytics
    @vbank
    @MX @android @ios
    @web
    @backend(test)
    @web-done
    Scenario: The user selects a card with a custom amount-- Page View - Custom Amount
        Given a user with the following criteria
            | criteria           |
            | multiple accounts  |
            | account in pesos   |
            | blackhawk cards    |
        And the user accesses to "gift cards" operative from top up operationals
        When the user goes to purchase, choosing the "first" brand and "custom" amount card
        Then the device contains the following variables
            | item	                       | value	                                                           | type         |
            | analytics                    | analytics/glomo_base                                              | json schema  |
            | version DL                   | 20250414_5.0                                                      | string       |
            | page name                    | app:privada:personas:tarjetas de regalo:personalizar monto        | string       |
            | level 1                      | tarjetas de regalo                                                | string       |
            | level 2                      | personalizar monto                                                | string       |
            | language                     | ES                                                                | string       |
            | page area                    | privada                                                           | string       |
            | page intent                  | informacion                                                       | string       |
            | channel                      | online                                                            | string       |
            | page instance ID             | de                                                                | string       |
            | page info version            | appVersion                                                        | regexp named |
            | page segment                 | personas                                                          | string       |
            | sysEnv                       | app                                                               | string       |
            | business unit                | BBVA Mexico                                                       | string       |
            | site app name                | App BBVA Mexico                                                   | string       |
            | project name                 | Glomo                                                             | string       |
            | device mobile                | si                                                                | string       |
            | user userState               | logado                                                            | string       |
            | profile ID                   | profileID                                                         | regexp named |
            | user segment global          | 003001                                                            | string       |
            | user gender                  | gender                                                            | regexp named |
            | user age                     | age                                                               | regexp named |

    @ANA_BH013
    @analytics
    @vbank
    @MX @android @ios
    @web
    @backend(test)
    @web-done @vbank-modified
    Scenario: The user gets the card code -- Page View - Sign-out notice
        Given a user with the following criteria
            | criteria           |
            | multiple accounts  |
            | account in pesos   |
            | blackhawk cards    |
        And the user accesses to "gift cards" operative from top up operationals
        And the user goes to purchase, choosing the "first" brand and "valid custom" amount card
        And the user continues to the "summary" step of the card purchase
        And the user completes the card purchase
        When the user "gets" gift card code
        Then the device contains the following variables
            | item	                       | value	                                                           | type         |
            | analytics                    | analytics/glomo_base                                              | json schema  |
            | version DL                   | 20250414_5.0                                                      | string       |
            | page name                    | app:privada:personas:tarjetas de regalo:aviso cierre de sesion    | string       |
            | level 1                      | tarjetas de regalo                                                | string       |
            | level 2                      | aviso cierre de sesion                                            | string       |
            | language                     | ES                                                                | string       |
            | page area                    | privada                                                           | string       |
            | page intent                  | informacion                                                       | string       |
            | channel                      | online                                                            | string       |
            | page instance ID             | de                                                                | string       |
            | page info version            | appVersion                                                        | regexp named |
            | page segment                 | personas                                                          | string       |
            | sysEnv                       | app                                                               | string       |
            | business unit                | BBVA Mexico                                                       | string       |
            | site app name                | App BBVA Mexico                                                   | string       |
            | project name                 | Glomo                                                             | string       |
            | device mobile                | si                                                                | string       |
            | user userState               | logado                                                            | string       |
            | profile ID                   | profileID                                                         | regexp named |
            | user segment global          | 003001                                                            | string       |
            | user gender                  | gender                                                            | regexp named |
            | user age                     | age                                                               | regexp named |

    @ANA_BH014
    @analytics
    @vbank
    @MX @android @ios
    @web
    @backend(test)
    @web-done @vbank-modified
    Scenario: The user gets the card code -- Page View - Internal Link
        Given a user with the following criteria
        | criteria           |
        | multiple accounts  |
        | account in pesos   |
        | blackhawk cards    |
        And the user accesses to "gift cards" operative from top up operationals
        And the user goes to purchase, choosing the "first" brand and "valid custom" amount card
        And the user continues to the "summary" step of the card purchase
        And the user completes the card purchase
        When the user "accepts get" gift card code
        Then the device contains the following variables
            | item	                       | value	                                                                                       | type         |
            | analytics                    | analytics/glomo_base                                                                          | json schema  |
            | version DL                   | 20250414_5.0                                                                                  | string       |
            | page name                    | app:privada:personas:tarjetas de regalo:aviso cierre de sesion                                | string       |
            | level 1                      | tarjetas de regalo                                                                            | string       |
            | level 2                      | aviso cierre de sesion                                                                        | string       |
            | link url                     | click continuar                                                                               | string       |
            | language                     | ES                                                                                            | string       |
            | page area                    | privada                                                                                       | string       |
            | page intent                  | informacion                                                                                   | string       |
            | channel                      | online                                                                                        | string       |
            | page instance ID             | de                                                                                            | string       |
            | page info version            | appVersion                                                                                    | regexp named |
            | page segment                 | personas                                                                                      | string       |
            | sysEnv                       | app                                                                                           | string       |
            | business unit                | BBVA Mexico                                                                                   | string       |
            | site app name                | App BBVA Mexico                                                                               | string       |
            | project name                 | Glomo                                                                                         | string       |
            | device mobile                | si                                                                                            | string       |
            | user userState               | logado                                                                                        | string       |
            | profile ID                   | profileID                                                                                     | regexp named |
            | user segment global          | 003001                                                                                        | string       |
            | user gender                  | gender                                                                                        | regexp named |
            | user age                     | age                                                                                           | regexp named |

    @ANA_BH015
    @analytics
    @vbank
    @MX @android @ios
    @web
    @backend(test)
    @web-done
    Scenario: Gift Card list - FAQS -- Page view - frequent questions
        Given a user with the following criteria
            | criteria           |
            | multiple accounts  |
            | account in pesos   |
            | blackhawk cards    |
        And the user accesses to "gift cards" operative from top up operationals
        When the user goes to gift FAQ section
        Then the device contains the following variables
            | item	                       | value	                                                           | type         |
            | analytics                    | analytics/glomo_base                                              | json schema  |
            | version DL                   | 20250414_5.0                                                      | string       |
            | page name                    | app:privada:personas:tarjetas de regalo:preguntas frecuentes      | string       |
            | level 1                      | tarjetas de regalo                                                | string       |
            | level 2                      | preguntas frecuentes                                              | string       |
            | language                     | ES                                                                | string       |
            | page area                    | privada                                                           | string       |
            | page intent                  | informacion                                                       | string       |
            | channel                      | online                                                            | string       |
            | page instance ID             | de                                                                | string       |
            | page info version            | appVersion                                                        | regexp named |
            | page segment                 | personas                                                          | string       |
            | sysEnv                       | app                                                               | string       |
            | business unit                | BBVA Mexico                                                       | string       |
            | site app name                | App BBVA Mexico                                                   | string       |
            | project name                 | Glomo                                                             | string       |
            | device mobile                | si                                                                | string       |
            | user userState               | logado                                                            | string       |
            | profile ID                   | profileID                                                         | regexp named |
            | user segment global          | 003001                                                            | string       |
            | user gender                  | gender                                                            | regexp named |
            | user age                     | age                                                               | regexp named |

    @ANA_BH016
    @analytics
    @vbank
    @MX @android @ios
    @web
    @backend(test)
    @web-done
    Scenario: Gift Card list - FAQS -- Page Vew - FAQ detail
        Given a user with the following criteria
            | criteria           |
            | multiple accounts  |
            | account in pesos   |
            | blackhawk cards    |
        And the user accesses to "gift cards" operative from top up operationals
        And the user goes to gift FAQ section
        When the user consult the "first" question
        Then the device contains the following variables
            | item	                       | value	                                                                                       | type         |
            | analytics                    | analytics/glomo_base                                                                          | json schema  |
            | version DL                   | 20250414_5.0                                                                                  | string       |
            | page name                    | app:privada:personas:tarjetas de regalo:preguntas frecuentes:como canjeo mi tarjeta de regalo | string       |
            | level 1                      | tarjetas de regalo                                                                            | string       |
            | level 2                      | preguntas frecuentes                                                                          | string       |
            | level 3                      | como canjeo mi tarjeta de regalo                                                              | string       |
            | language                     | ES                                                                                            | string       |
            | page area                    | privada                                                                                       | string       |
            | page intent                  | informacion                                                                                   | string       |
            | channel                      | online                                                                                        | string       |
            | page instance ID             | de                                                                                            | string       |
            | page info version            | appVersion                                                                                    | regexp named |
            | page segment                 | personas                                                                                      | string       |
            | sysEnv                       | app                                                                                           | string       |
            | business unit                | BBVA Mexico                                                                                   | string       |
            | site app name                | App BBVA Mexico                                                                               | string       |
            | project name                 | Glomo                                                                                         | string       |
            | device mobile                | si                                                                                            | string       |
            | user userState               | logado                                                                                        | string       |
            | profile ID                   | profileID                                                                                     | regexp named |
            | user segment global          | 003001                                                                                        | string       |
            | user gender                  | gender                                                                                        | regexp named |
            | user age                     | age                                                                                           | regexp named |

    @ANA_BH017
    @analytics
    @vbank
    @MX @android @ios
    @web
    @backend(test)
    @web-done @vbank-modified
    Scenario: There is an error in the purchase service -- Page View - Information not available
        Given a user with the following criteria
            | criteria           |
            | multiple accounts  |
            | account in pesos   |
            | blackhawk cards    |
        And the user accesses to "gift cards" operative from top up operationals
        When the user consults the list of card brands
        Then the device contains the following variables
            | item	                       | value	                                                                                       | type         |
            | analytics                    | analytics/glomo_base                                                                          | json schema  |
            | version DL                   | 20250414_5.0                                                                                  | string       |
            | page name                    | app:privada:personas:tarjetas de regalo:informacion no disponible                             | string       |
            | level 1                      | tarjetas de regalo                                                                            | string       |
            | level 2                      | informacion no disponible                                                                     | string       |
            | error page                   | informacion no disponible                                                                     | string       |
            | language                     | ES                                                                                            | string       |
            | page area                    | privada                                                                                       | string       |
            | page intent                  | informacion                                                                                   | string       |
            | channel                      | online                                                                                        | string       |
            | page instance ID             | de                                                                                            | string       |
            | page info version            | appVersion                                                                                    | regexp named |
            | page segment                 | personas                                                                                      | string       |
            | sysEnv                       | app                                                                                           | string       |
            | business unit                | BBVA Mexico                                                                                   | string       |
            | site app name                | App BBVA Mexico                                                                               | string       |
            | project name                 | Glomo                                                                                         | string       |
            | device mobile                | si                                                                                            | string       |
            | user userState               | logado                                                                                        | string       |
            | profile ID                   | profileID                                                                                     | regexp named |
            | user segment global          | 003001                                                                                        | string       |
            | user gender                  | gender                                                                                        | regexp named |
            | user age                     | age                                                                                           | regexp named |

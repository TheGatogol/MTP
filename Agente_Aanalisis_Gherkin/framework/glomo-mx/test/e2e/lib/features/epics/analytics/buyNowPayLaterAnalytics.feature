@buyNowPayLaterRemainingAnalytics
Feature: Buy Now Pay Later Analytics

    @ANA_EVENT_BNPLR001
    @analytics
    @MX
    @web
    @vbank @android @ios
    @backend(test)
    @web-done
    Scenario: Show offer page - App On Click Start
        Given a user with the following criteria
              | criteria                                  |
              | buy now pay later with approved microloan |
        And the user accesses to dashboard
        And the analytics interceptor service is initiated
        And the user goes to "buy now pay later remaining" using deeplink navigation
        When the user gets the step one of multistep
        Then the analytics events contains the following variables
            | item                       | value                                                | type         | event              |
            | analytics                  | analytics/glomo_base                                 | json schema  | App On Click Start |
            | version DL                 | 20250414_5.0                                         | string       | App On Click Start |
            | page name                  | app:privada:personas:credito revolvente:elegir plazo | string       | App On Click Start |
            | level 1                    | credito revolvente                                   | string       | App On Click Start |
            | level 2                    | elegir plazo                                         | string       | App On Click Start |
            | language                   | ES                                                   | string       | App On Click Start |
            | page area                  | privada                                              | string       | App On Click Start |
            | page intent                | informacion                                          | string       | App On Click Start |
            | channel                    | online                                               | string       | App On Click Start |
            | page instance ID           | de                                                   | string       | App On Click Start |
            | page info version          | appVersion                                           | regexp named | App On Click Start |
            | page segment               | personas                                             | string       | App On Click Start |
            | sysEnv                     | app                                                  | string       | App On Click Start |
            | business unit              | BBVA Mexico                                          | string       | App On Click Start |
            | site app name              | App BBVA Mexico                                      | string       | App On Click Start |
            | project name               | Glomo                                                | string       | App On Click Start |
            | device mobile              | si                                                   | string       | App On Click Start |
            | user userState             | logado                                               | string       | App On Click Start |
            | user segment global        | 003001                                               | string       | App On Click Start |
            | profile ID                 | profileID                                            | regexp named | App On Click Start |
            | user gender                | gender                                               | regexp named | App On Click Start |
            | user age                   | age                                                  | regexp named | App On Click Start |
            | application typology       | miguel angel sabines lopez                           | string       | App On Click Start |
            | global application         | revolving credit line                                | string       | App On Click Start |
            | application name           | bbva elije tu plazo                                  | string       | App On Click Start |
            | application type           | contratacion                                         | string       | App On Click Start |
            | fulfillment model          | online                                               | string       | App On Click Start |
            | application step           | elegir plazo                                         | string       | App On Click Start |
            | product primary category   | cuentas                                              | string       | App On Click Start |
            | product name               | libreton basico                                      | string       | App On Click Start |
            | product amount             | 267.21                                               | number       | App On Click Start |
            | product currency           | MXN                                                  | string       | App On Click Start |
            | product payment amount     | 89.07                                                | number       | App On Click Start |
            | product number of payments | 3                                                    | number       | App On Click Start |
            | product payment type       | mensual                                              | string       | App On Click Start |

    @ANA_EVENT_BNPLR002
    @analytics
    @MX
    @web
    @vbank @android @ios
    @backend(test)
    @web-done
    Scenario: Show multistep page - App Page Visit
        Given a user with the following criteria
            | criteria                                  |
            | buy now pay later with approved microloan |
        And the user accesses to dashboard
        And the analytics interceptor service is initiated
        And the user goes to "buy now pay later remaining" using deeplink navigation
        When the user gets the step one of multistep
        Then the analytics events contains the following variables
            | item                       | value                                                            | type         | event          |
            | analytics                  | analytics/glomo_base                                             | json schema  | App Page Visit |
            | version DL                 | 20250414_5.0                                                     | string       | App Page Visit |
            | page name                  | app:privada:personas:credito revolvente:1 terminos y condiciones | string       | App Page Visit |
            | level 1                    | credito revolvente                                               | string       | App Page Visit |
            | level 2                    | 1 terminos y condiciones                                         | string       | App Page Visit |
            | language                   | ES                                                               | string       | App Page Visit |
            | page area                  | privada                                                          | string       | App Page Visit |
            | page intent                | informacion                                                      | string       | App Page Visit |
            | channel                    | online                                                           | string       | App Page Visit |
            | page instance ID           | de                                                               | string       | App Page Visit |
            | page info version          | appVersion                                                       | regexp named | App Page Visit |
            | page segment               | personas                                                         | string       | App Page Visit |
            | sysEnv                     | app                                                              | string       | App Page Visit |
            | business unit              | BBVA Mexico                                                      | string       | App Page Visit |
            | site app name              | App BBVA Mexico                                                  | string       | App Page Visit |
            | project name               | Glomo                                                            | string       | App Page Visit |
            | device mobile              | si                                                               | string       | App Page Visit |
            | user userState             | logado                                                           | string       | App Page Visit |
            | profile ID                 | profileID                                                        | regexp named | App Page Visit |
            | user segment global        | 003001                                                           | string       | App Page Visit |
            | user gender                | gender                                                           | regexp named | App Page Visit |
            | user age                   | age                                                              | regexp named | App Page Visit |
            | application typology       | miguel angel sabines lopez                                       | string       | App Page Visit |
            | global application         | revolving credit line                                            | string       | App Page Visit |
            | application name           | bbva elije tu plazo                                              | string       | App Page Visit |
            | application type           | contratacion                                                     | string       | App Page Visit |
            | fulfillment model          | online                                                           | string       | App Page Visit |
            | application step           | 1 terminos y condiciones                                         | string       | App Page Visit |
            | product primary category   | cuentas                                                          | string       | App Page Visit |
            | product name               | libreton basico                                                  | string       | App Page Visit |
            | product amount             | 267.21                                                           | number       | App Page Visit |
            | product currency           | MXN                                                              | string       | App Page Visit |
            | product payment amount     | 89.07                                                            | number       | App Page Visit |
            | product number of payments | 3                                                                | number       | App Page Visit |
            | product payment type       | mensual                                                          | string       | App Page Visit |
            | qualified visits           | true                                                             | string       | App Page Visit |

    @ANA_EVENT_BNPLR003
    @analytics
    @MX
    @web
    @vbank @android @ios
    @backend(test)
    @web-done
    Scenario: Show multistep page - App Started
        Given a user with the following criteria
            | criteria                                  |
            | buy now pay later with approved microloan |
        And the user accesses to dashboard
        And the user goes to "buy now pay later remaining" using deeplink navigation
        And the analytics interceptor service is initiated
        And the user gets the step one of multistep
        When the user gets to the buy now pay later summary
        Then the analytics events contains the following variables
            | item                       | value                                                            | type         | event       |
            | analytics                  | analytics/glomo_base                                             | json schema  | App Started |
            | version DL                 | 20250414_5.0                                                     | string       | App Started |
            | page name                  | app:privada:personas:credito revolvente:1 terminos y condiciones | string       | App Started |
            | level 1                    | credito revolvente                                               | string       | App Started |
            | level 2                    | 1 terminos y condiciones                                         | string       | App Started |
            | language                   | ES                                                               | string       | App Started |
            | page area                  | privada                                                          | string       | App Started |
            | page intent                | informacion                                                      | string       | App Started |
            | channel                    | online                                                           | string       | App Started |
            | page instance ID           | de                                                               | string       | App Started |
            | page info version          | appVersion                                                       | regexp named | App Started |
            | page segment               | personas                                                         | string       | App Started |
            | sysEnv                     | app                                                              | string       | App Started |
            | business unit              | BBVA Mexico                                                      | string       | App Started |
            | site app name              | App BBVA Mexico                                                  | string       | App Started |
            | project name               | Glomo                                                            | string       | App Started |
            | device mobile              | si                                                               | string       | App Started |
            | user userState             | logado                                                           | string       | App Started |
            | profile ID                 | profileID                                                        | regexp named | App Started |
            | user segment global        | 003001                                                           | string       | App Started |
            | user gender                | gender                                                           | regexp named | App Started |
            | user age                   | age                                                              | regexp named | App Started |
            | application typology       | miguel angel sabines lopez                                       | string       | App Started |
            | global application         | revolving credit line                                            | string       | App Started |
            | application name           | bbva elije tu plazo                                              | string       | App Started |
            | application type           | contratacion                                                     | string       | App Started |
            | fulfillment model          | online                                                           | string       | App Started |
            | application step           | lei y acepto terminos y condiciones                              | string       | App Started |
            | product primary category   | cuentas                                                          | string       | App Started |
            | product name               | libreton basico                                                  | string       | App Started |
            | product amount             | 267.21                                                           | number       | App Started |
            | product currency           | MXN                                                              | string       | App Started |
            | product payment amount     | 89.07                                                            | number       | App Started |
            | product number of payments | 3                                                                | number       | App Started |
            | product payment type       | mensual                                                          | string       | App Started |

    @ANA_EVENT_BNPLR004
    @analytics
    @MX
    @web
    @vbank @android @ios
    @backend(test)
    @web-done
    Scenario: Show summary page - App Step 2
        Given a user with the following criteria
            | criteria                                  |
            | buy now pay later with approved microloan |
        And the user accesses to dashboard
        And the user goes to "buy now pay later remaining" using deeplink navigation
        And the analytics interceptor service is initiated
        And the user gets the step one of multistep
        When the user gets to the buy now pay later summary
        Then the analytics events contains the following variables
            | item                       | value                                                  | type         | event      |
            | analytics                  | analytics/glomo_base                                   | json schema  | App Step 2 |
            | version DL                 | 20250414_5.0                                           | string       | App Step 2 |
            | page name                  | app:privada:personas:credito revolvente:2 confirmacion | string       | App Step 2 |
            | level 1                    | credito revolvente                                     | string       | App Step 2 |
            | level 2                    | 2 confirmacion                                         | string       | App Step 2 |
            | language                   | ES                                                     | string       | App Step 2 |
            | page area                  | privada                                                | string       | App Step 2 |
            | page intent                | informacion                                            | string       | App Step 2 |
            | channel                    | online                                                 | string       | App Step 2 |
            | page instance ID           | de                                                     | string       | App Step 2 |
            | page info version          | appVersion                                             | regexp named | App Step 2 |
            | page segment               | personas                                               | string       | App Step 2 |
            | sysEnv                     | app                                                    | string       | App Step 2 |
            | business unit              | BBVA Mexico                                            | string       | App Step 2 |
            | site app name              | App BBVA Mexico                                        | string       | App Step 2 |
            | project name               | Glomo                                                  | string       | App Step 2 |
            | device mobile              | si                                                     | string       | App Step 2 |
            | user userState             | logado                                                 | string       | App Step 2 |
            | user segment global        | 003001                                                 | string       | App Step 2 |
            | profile ID                 | profileID                                              | regexp named | App Step 2 |
            | user gender                | gender                                                 | regexp named | App Step 2 |
            | user age                   | age                                                    | regexp named | App Step 2 |
            | application typology       | miguel angel sabines lopez                             | string       | App Step 2 |
            | global application         | revolving credit line                                  | string       | App Step 2 |
            | application name           | bbva elije tu plazo                                    | string       | App Step 2 |
            | application type           | contratacion                                           | string       | App Step 2 |
            | fulfillment model          | online                                                 | string       | App Step 2 |
            | application step           | 2 confirmacion                                         | string       | App Step 2 |
            | product primary category   | cuentas                                                | string       | App Step 2 |
            | product name               | libreton basico                                        | string       | App Step 2 |
            | product amount             | 267.21                                                 | number       | App Step 2 |
            | product currency           | MXN                                                    | string       | App Step 2 |
            | product payment amount     | 89.07                                                  | number       | App Step 2 |
            | product number of payments | 3                                                      | number       | App Step 2 |
            | product payment type       | mensual                                                | string       | App Step 2 |

    @ANA_EVENT_BNPLR005
    @analytics
    @MX
    @web
    @vbank @android @ios
    @backend(test)
    @web-done
    Scenario: Show otp screen - App Step 3
        Given a user with the following criteria
            | criteria                                  |
            | buy now pay later with approved microloan |
        And the user accesses to dashboard
        And the user goes to "buy now pay later remaining" using deeplink navigation
        And the analytics interceptor service is initiated
        And the user gets the step one of multistep
        When the user gets to the buy now pay later summary
        Then the analytics events contains the following variables
            | item                       | value                                         | type         | event      |
            | analytics                  | analytics/glomo_base                          | json schema  | App Step 3 |
            | version DL                 | 20250414_5.0                                  | string       | App Step 3 |
            | page name                  | app:privada:personas:credito revolvente:3 otp | string       | App Step 3 |
            | level 1                    | credito revolvente                            | string       | App Step 3 |
            | level 2                    | 3 otp                                         | string       | App Step 3 |
            | language                   | ES                                            | string       | App Step 3 |
            | page area                  | privada                                       | string       | App Step 3 |
            | page intent                | informacion                                   | string       | App Step 3 |
            | channel                    | online                                        | string       | App Step 3 |
            | page instance ID           | de                                            | string       | App Step 3 |
            | page info version          | appVersion                                    | regexp named | App Step 3 |
            | page segment               | personas                                      | string       | App Step 3 |
            | sysEnv                     | app                                           | string       | App Step 3 |
            | business unit              | BBVA Mexico                                   | string       | App Step 3 |
            | site app name              | App BBVA Mexico                               | string       | App Step 3 |
            | project name               | Glomo                                         | string       | App Step 3 |
            | device mobile              | si                                            | string       | App Step 3 |
            | user userState             | logado                                        | string       | App Step 3 |
            | profile ID                 | profileID                                     | regexp named | App Step 3 |
            | user segment global        | 003001                                        | string       | App Step 3 |
            | user gender                | gender                                        | regexp named | App Step 3 |
            | user age                   | age                                           | regexp named | App Step 3 |
            | application typology       | miguel angel sabines lopez                    | string       | App Step 3 |
            | global application         | revolving credit line                         | string       | App Step 3 |
            | application name           | bbva elije tu plazo                           | string       | App Step 3 |
            | application type           | contratacion                                  | string       | App Step 3 |
            | fulfillment model          | online                                        | string       | App Step 3 |
            | application step           | 3 otp                                         | string       | App Step 3 |
            | product primary category   | cuentas                                       | string       | App Step 3 |
            | product name               | libreton basico                               | string       | App Step 3 |
            | product amount             | 267.21                                        | number       | App Step 3 |
            | product currency           | MXN                                           | string       | App Step 3 |
            | product payment amount     | 89.07                                         | number       | App Step 3 |
            | product number of payments | 3                                             | number       | App Step 3 |
            | product payment type       | mensual                                       | string       | App Step 3 |
            | custom fields              | firma:token                                   | string       | App Step 3 |

    @ANA_EVENT_BNPLR006
    @analytics
    @MX
    @web
    @vbank @android @ios
    @backend(test)
    @web-done
    Scenario: Show otp screen - App Completed
        Given a user with the following criteria
            | criteria                                  |
            | buy now pay later with approved microloan |
        And the user accesses to dashboard
        And the user goes to "buy now pay later remaining" using deeplink navigation
        And the analytics interceptor service is initiated
        And the user gets the step one of multistep
        And the user gets to the buy now pay later summary
        When the user accesses to the buy now pay later success page
        Then the analytics events contains the following variables:
            | item                         | value                                                  | type         | event         |
            | analytics                    | analytics/glomo_base                                   | json schema  | App Completed |
            | version DL                   | 20250414_5.0                                           | string       | App Completed |
            | page name                    | app:privada:personas:credito revolvente:pagina exitosa | string       | App Completed |
            | level 1                      | credito revolvente                                     | string       | App Completed |
            | level 2                      | pagina exitosa                                         | string       | App Completed |
            | language                     | ES                                                     | string       | App Completed |
            | page area                    | privada                                                | string       | App Completed |
            | page intent                  | informacion                                            | string       | App Completed |
            | channel                      | online                                                 | string       | App Completed |
            | page instance ID             | de                                                     | string       | App Completed |
            | page info version            | appVersion                                             | regexp named | App Completed |
            | page segment                 | personas                                               | string       | App Completed |
            | sysEnv                       | app                                                    | string       | App Completed |
            | business unit                | BBVA Mexico                                            | string       | App Completed |
            | site app name                | App BBVA Mexico                                        | string       | App Completed |
            | project name                 | Glomo                                                  | string       | App Completed |
            | device mobile                | si                                                     | string       | App Completed |
            | user userState               | logado                                                 | string       | App Completed |
            | user segment global          | 003001                                                 | string       | App Completed |
            | profile ID                   | profileID                                              | regexp named | App Completed |
            | user gender                  | gender                                                 | regexp named | App Completed |
            | user age                     | age                                                    | regexp named | App Completed |
            | application typology         | miguel angel sabines lopez                             | string       | App Completed |
            | global application           | revolving credit line                                  | string       | App Completed |
            | application name             | bbva elije tu plazo                                    | string       | App Completed |
            | application type             | contratacion                                           | string       | App Completed |
            | fulfillment model            | online                                                 | string       | App Completed |
            | application state            | contratado                                             | string       | App Completed |
            | application operation number | BNP0152998322087720250506195320864                     | string       | App Completed |
            | application step             | pagina exitosa                                         | string       | App Completed |
            | product primary category     | cuentas                                                | string       | App Completed |
            | product name                 | libreton basico                                        | string       | App Completed |
            | product amount               | 267.21                                                 | number       | App Completed |
            | product currency             | MXN                                                    | string       | App Completed |
            | product payment amount       | 89.07                                                  | number       | App Completed |
            | product number of payments   | 3                                                      | number       | App Completed |
            | product payment type         | mensual                                                | string       | App Completed |
            | custom fields                | firma:token                                            | string       | App Completed |
            | product state                | contratado                                             | string       | App Completed |

    @ANA_EVENT_BNPLR007
    @analytics
    @MX
    @web
    @vbank @android @ios
    @backend(test)
    @web-done
    Scenario: Show offer page - Page View
        Given a user with the following criteria
              | criteria                                  |
              | buy now pay later with approved microloan |
        And the user accesses to dashboard
        And the analytics interceptor service is initiated
        When the user goes to "buy now pay later remaining" using deeplink navigation
        Then the analytics events contains the following variables
            | item                | value                                                | type         | event     |
            | analytics           | analytics/glomo_base                                 | json schema  | Page View |
            | version DL          | 20250414_5.0                                         | string       | Page View |
            | page name           | app:privada:personas:credito revolvente:elegir plazo | string       | Page View |
            | level 1             | credito revolvente                                   | string       | Page View |
            | level 2             | elegir plazo                                         | string       | Page View |
            | language            | ES                                                   | string       | Page View |
            | page area           | privada                                              | string       | Page View |
            | page intent         | informacion                                          | string       | Page View |
            | channel             | online                                               | string       | Page View |
            | page instance ID    | de                                                   | string       | Page View |
            | page info version   | appVersion                                           | regexp named | Page View |
            | page segment        | personas                                             | string       | Page View |
            | sysEnv              | app                                                  | string       | Page View |
            | business unit       | BBVA Mexico                                          | string       | Page View |
            | site app name       | App BBVA Mexico                                      | string       | Page View |
            | project name        | Glomo                                                | string       | Page View |
            | device mobile       | si                                                   | string       | Page View |
            | user userState      | logado                                               | string       | Page View |
            | user segment global | 003001                                               | string       | Page View |
            | profile ID          | profileID                                            | regexp named | Page View |
            | user age            | age                                                  | regexp named | Page View |
            | user gender         | gender                                               | regexp named | Page View |

    @ANA_EVENT_BNPLR008
    @analytics
    @MX
    @web
    @vbank @android @ios
    @backend(test)
    @web-done
    Scenario: Show modal Error - Page View
        Given a user with the following criteria
            | criteria                                  |
            | buy now pay later with approved microloan |
        And the user accesses to dashboard
        And the analytics interceptor service is initiated
        When the user goes to "buy now pay later remaining" using deeplink navigation
        Then the analytics events contains the following variables:
            | item                | value                                                                    | type         | event     |
            | analytics           | analytics/glomo_base                                                     | json schema  | Page View |
            | version DL          | 20250414_5.0                                                             | string       | Page View |
            | page name           | app:privada:personas:credito revolvente:error no es posible pagar compra | string       | Page View |
            | level 1             | credito revolvente                                                       | string       | Page View |
            | level 2             | error no es posible pagar compra                                         | string       | Page View |
            | language            | ES                                                                       | string       | Page View |
            | page area           | privada                                                                  | string       | Page View |
            | page intent         | informacion                                                              | string       | Page View |
            | channel             | online                                                                   | string       | Page View |
            | page instance ID    | de                                                                       | string       | Page View |
            | page info version   | appVersion                                                               | regexp named | Page View |
            | page segment        | personas                                                                 | string       | Page View |
            | sysEnv              | app                                                                      | string       | Page View |
            | business unit       | BBVA Mexico                                                              | string       | Page View |
            | site app name       | App BBVA Mexico                                                          | string       | Page View |
            | project name        | Glomo                                                                    | string       | Page View |
            | device mobile       | si                                                                       | string       | Page View |
            | user userState      | logado                                                                   | string       | Page View |
            | user segment global | 003001                                                                   | string       | Page View |
            | profile ID          | profileID                                                                | regexp named | Page View |
            | user age            | age                                                                      | regexp named | Page View |
            | user gender         | gender                                                                   | regexp named | Page View |
            | user gender         | gender                                                                   | regexp named | Page View |
            | error page          | error no es posible pagar compra                                         | string       | Page View |

    @ANA_EVENT_BNPLR009
    @analytics
    @MX
    @web
    @vbank @android @ios
    @backend(test)
    @web-done
    Scenario: Show modalError BlackList - Page View
        Given a user with the following criteria
              | criteria                                           |
              | buy now pay later with approved microloan rejected |
        And the user accesses to dashboard
        And the analytics interceptor service is initiated
        When the user goes to "buy now pay later remaining" using deeplink navigation
        Then the analytics events contains the following variables
            | item                | value                                                                | type         | event     |
            | analytics           | analytics/glomo_base                                                 | json schema  | Page View |
            | version DL          | 20250414_5.0                                                         | string       | Page View |
            | page name           | app:privada:personas:credito revolvente:error otorgamiento de plazos | string       | Page View |
            | level 1             | credito revolvente                                                   | string       | Page View |
            | level 2             | error otorgamiento de plazos                                         | string       | Page View |
            | language            | ES                                                                   | string       | Page View |
            | page area           | privada                                                              | string       | Page View |
            | page intent         | informacion                                                          | string       | Page View |
            | channel             | online                                                               | string       | Page View |
            | page instance ID    | de                                                                   | string       | Page View |
            | page info version   | appVersion                                                           | regexp named | Page View |
            | page segment        | personas                                                             | string       | Page View |
            | sysEnv              | app                                                                  | string       | Page View |
            | business unit       | BBVA Mexico                                                          | string       | Page View |
            | site app name       | App BBVA Mexico                                                      | string       | Page View |
            | project name        | Glomo                                                                | string       | Page View |
            | device mobile       | si                                                                   | string       | Page View |
            | user userState      | logado                                                               | string       | Page View |
            | user segment global | 003001                                                               | string       | Page View |
            | profile ID          | profileID                                                            | regexp named | Page View |
            | user age            | age                                                                  | regexp named | Page View |
            | user gender         | gender                                                               | regexp named | Page View |
            | error page          | error otorgamiento de plazos                                         | string       | Page View |

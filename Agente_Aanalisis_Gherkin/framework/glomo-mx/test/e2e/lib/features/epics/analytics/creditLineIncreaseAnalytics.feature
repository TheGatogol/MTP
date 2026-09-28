@creditLineIncreaseAnalytics
Feature: Analytics - Credit Line Increase

    @ANA_ILC001
    @analytics
    @vbank
    @MX @web @android @ios
    @backend(test)
    @web-done
    Scenario: Page View - Account Update
        Given a user with the following criteria
            | criteria                   |
            | credit line increase offer |
        And the user accesses to dashboard
        And the user goes to "credit line increase nilc" using deeplink navigation
        When the user enters accordions "analytics credit"
        Then the device contains the following variables
            | item                    | value                                                                              | type             |
            | analytics               | analytics/glomo_base                                                               | json schema      |
            | version DL              | 20250414_5.0                                                                       | string           |
            | page name               | app:privada:personas:incremento de linea credito one click:actualizacion de cuenta | string           |
            | level 1                 | incremento de linea credito one click                                              | string           |
            | level 2                 | actualizacion de cuenta                                                            | string           |
            | language                | ES                                                                                 | string           |
            | page area               | privada                                                                            | string           |
            | page intent             | informacion                                                                        | string           |
            | channel                 | online                                                                             | string           |
            | page instance ID        | de                                                                                 | string           |
            | page info version       | appVersion                                                                         | regexp named     |
            | page segment            | personas                                                                           | string           |
            | sysEnv                  | app                                                                                | string           |
            | business unit           | BBVA Mexico                                                                        | string           |
            | site app name           | App BBVA Mexico                                                                    | string           |
            | project name            | DIY E2E Sales                                                                      | string           |
            | device mobile           | si                                                                                 | string           |
            | user userState          | logado                                                                             | string           |
            | user segment global     | 003001                                                                             | string           |
            | profile ID              | profileID                                                                          | regexp named     |
            | user gender             | gender                                                                             | regexp named     |
            | user age                | age                                                                                | regexp named     |
            | internal campaign       |                                                                                    | empty array      |
            | optimization attributes |                                                                                    | empty array      |
            | application             |                                                                                    | empty str object |
            | products attributes     |                                                                                    | empty array      |

    @ANA_ILC002
    @analytics
    @vbank
    @MX @web @android @ios
    @backend(test)
    @web-done
    Scenario: Page View - Updated Account
        Given a user with the following criteria
            | criteria                   |
            | credit line increase offer |
        And the user accesses center notification
        And the user open credit line notification credit line increase
        When the user goes to nCreditLineIncrease page
        Then the device contains the following variables
            | item                    | value                                                                         | type             |
            | analytics               | analytics/glomo_base                                                          | json schema      |
            | version DL              | 20250414_5.0                                                                  | string           |
            | page name               | app:privada:personas:incremento de linea credito one click:cuenta actualizada | string           |
            | level 1                 | incremento de linea credito one click                                         | string           |
            | level 2                 | cuenta actualizada                                                            | string           |
            | language                | ES                                                                            | string           |
            | page area               | privada                                                                       | string           |
            | page intent             | informacion                                                                   | string           |
            | channel                 | online                                                                        | string           |
            | page instance ID        | de                                                                            | string           |
            | page info version       | appVersion                                                                    | regexp named     |
            | page segment            | personas                                                                      | string           |
            | sysEnv                  | app                                                                           | string           |
            | business unit           | BBVA Mexico                                                                   | string           |
            | site app name           | App BBVA Mexico                                                               | string           |
            | project name            | DIY E2E Sales                                                                 | string           |
            | device mobile           | si                                                                            | string           |
            | user userState          | logado                                                                        | string           |
            | user segment global     | 003001                                                                        | string           |
            | profile ID              | profileID                                                                     | regexp named     |
            | user gender             | gender                                                                        | regexp named     |
            | user age                | age                                                                           | regexp named     |
            | internal campaign       |                                                                               | empty array      |
            | optimization attributes |                                                                               | empty array      |
            | application             |                                                                               | empty str object |
            | products attributes     |                                                                               | empty array      |

    @ANA_ILC003
    @analytics
    @vbank
    @MX @web @android @ios
    @backend(test)
    @web-done
    Scenario: Page View - Error, operation not available
        Given a user with the following criteria
            | criteria                   |
            | credit line increase offer |
        And the user accesses to dashboard
        And the user goes to "credit line increase nilc" using deeplink navigation
        When the user enters accordions "analytics credit"
        Then the device contains the following variables
            | item                    | value                                                                                    | type             |
            | analytics               | analytics/glomo_base                                                                     | json schema      |
            | version DL              | 20250414_5.0                                                                             | string           |
            | page name               | app:privada:personas:incremento de linea credito one click:error operacion no disponible | string           |
            | level 1                 | incremento de linea credito one click                                                    | string           |
            | level 2                 | error operacion no disponible                                                            | string           |
            | error page              | error operacion no disponible                                                            | string           |
            | language                | ES                                                                                       | string           |
            | page area               | privada                                                                                  | string           |
            | page intent             | informacion                                                                              | string           |
            | channel                 | online                                                                                   | string           |
            | page instance ID        | de                                                                                       | string           |
            | page info version       | appVersion                                                                               | regexp named     |
            | page segment            | personas                                                                                 | string           |
            | sysEnv                  | app                                                                                      | string           |
            | business unit           | BBVA Mexico                                                                              | string           |
            | site app name           | App BBVA Mexico                                                                          | string           |
            | project name            | DIY E2E Sales                                                                            | string           |
            | device mobile           | si                                                                                       | string           |
            | user userState          | logado                                                                                   | string           |
            | user segment global     | 003001                                                                                   | string           |
            | profile ID              | profileID                                                                                | regexp named     |
            | user gender             | gender                                                                                   | regexp named     |
            | user age                | age                                                                                      | regexp named     |
            | internal campaign       |                                                                                          | empty array      |
            | optimization attributes |                                                                                          | empty array      |
            | application             |                                                                                          | empty str object |
            | products attributes     |                                                                                          | empty array      |

    @ANA_ILC004
    @analytics
    @vbank
    @MX @web @android @ios
    @backend(test)
    @web-done
    Scenario: App Onclick Start - Oportunidades
        Given a user with the following criteria
            | criteria                   |
            | credit line increase offer |
        And the user accesses contract product section
        And the analytics interceptor service is initiated
        When the user navigates to the offers and opportunities section
        Then the analytics events contains the following variables:
            | item                                         | value                                                                                                                                     | type         | event              |
            | analytics                                    | analytics/glomo_base                                                                                                                      | json schema  | App On Click Start |
            | version DL                                   | 20250414_5.0                                                                                                                              | string       | App On Click Start |
            | page name                                    | app:privada:personas:oportunidades                                                                                                        | string       | App On Click Start |
            | level 1                                      | oportunidades                                                                                                                             | string       | App On Click Start |
            | language                                     | ES                                                                                                                                        | string       | App On Click Start |
            | page area                                    | privada                                                                                                                                   | string       | App On Click Start |
            | page intent                                  | informacion                                                                                                                               | string       | App On Click Start |
            | channel                                      | online                                                                                                                                    | string       | App On Click Start |
            | page instance ID                             | de                                                                                                                                        | string       | App On Click Start |
            | page info version                            | appVersion                                                                                                                                | regexp named | App On Click Start |
            | page segment                                 | personas                                                                                                                                  | string       | App On Click Start |
            | sysEnv                                       | app                                                                                                                                       | string       | App On Click Start |
            | business unit                                | BBVA Mexico                                                                                                                               | string       | App On Click Start |
            | site app name                                | App BBVA Mexico                                                                                                                           | string       | App On Click Start |
            | project name                                 | Glomo                                                                                                                                     | string       | App On Click Start |
            | device mobile                                | si                                                                                                                                        | string       | App On Click Start |
            | user userState                               | logado                                                                                                                                    | string       | App On Click Start |
            | user segment global                          | 003001                                                                                                                                    | string       | App On Click Start |
            | profile ID                                   | profileID                                                                                                                                 | regexp named | App On Click Start |
            | user gender                                  | gender                                                                                                                                    | regexp named | App On Click Start |
            | user age                                     | age                                                                                                                                       | regexp named | App On Click Start |
            | global application                           | credit limit increase oc                                                                                                                  | string       | App On Click Start |
            | application name                             | incremento de linea credito one click                                                                                                     | string       | App On Click Start |
            | application type                             | contratacion                                                                                                                              | string       | App On Click Start |
            | fulfillment model                            | online                                                                                                                                    | string       | App On Click Start |
            | application step                             | oportunidades                                                                                                                             | string       | App On Click Start |
            | product primary category                     | tarjetas                                                                                                                                  | string       | App On Click Start |
            | product subtype                              | tarjetas credito                                                                                                                          | string       | App On Click Start |
            | internal campaign attributes location        | contract product section--superior-1-16                                                                                                   | string       | App On Click Start |
            | internal campaign attributes campaign format | list                                                                                                                                      | string       | App On Click Start |
            | internal campaign attributes collective code |                                                                                                                                           | string       | App On Click Start |
            | internal campaign attributes name            | -si aceptas esta oferta tu tarjeta aumentara su linea de credito                                                                          | string       | App On Click Start |
            | internal campaign attributes product         | n-limit-increase                                                                                                                          | string       | App On Click Start |
            | internal campaign attributes product code    |                                                                                                                                           | string       | App On Click Start |
            | internal campaign attributes quantity        | 15500.00                                                                                                                                  | string       | App On Click Start |
            | internal campaign event name                 | IntCmpClick                                                                                                                               | string       | App On Click Start |
            | internal campaign site action name           | contract product section--superior-1-16:list::-si aceptas esta oferta tu tarjeta aumentara su linea de credito:n-limit-increase::15500.00 | string       | App On Click Start |
            | optimization attributes                      |                                                                                                                                           | empty array  | App On Click Start |

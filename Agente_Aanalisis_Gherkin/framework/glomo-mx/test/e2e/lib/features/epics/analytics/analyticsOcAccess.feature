@ocAccessAnalytics
Feature: Analytics - OC Access

    @ANA_OA001
    @analytics
    @web @ios @android
    @vbank @backend(test)
    @web-done
    @MX
    Scenario: Analytics - OC Access with offer - PAGE VIEW
        Given a user with the following criteria
            | criteria |
            | offers   |
        And device with notifications enabled
        And the analytics interceptor service is initiated
        When the user accesses to dashboard
        Then the analytics events contains the following variables
            | item                                         | value                                 | type             | event     | event number |
            | analytics                                    | analytics/glomo_base                  | json schema      | Page View | 2            |
            | version DL                                   | 20250414_5.0                          | string           | Page View | 2            |
            | page name                                    | app:privada:personas:posicion global  | string           | Page View | 2            |
            | level 1                                      | posicion global                       | string           | Page View | 2            |
            | language                                     | ES                                    | string           | Page View | 2            |
            | page area                                    | privada                               | string           | Page View | 2            |
            | page intent                                  | informacion                           | string           | Page View | 2            |
            | channel                                      | online                                | string           | Page View | 2            |
            | page instance ID                             | de                                    | string           | Page View | 2            |
            | page info version                            | appVersion                            | regexp named     | Page View | 2            |
            | page segment                                 | personas                              | string           | Page View | 2            |
            | sysEnv                                       | app                                   | string           | Page View | 2            |
            | business unit                                | BBVA Mexico                           | string           | Page View | 2            |
            | site app name                                | App BBVA Mexico                       | string           | Page View | 2            |
            | project name                                 | Glomo                                 | string           | Page View | 2            |
            | device mobile                                | si                                    | string           | Page View | 2            |
            | user userState                               | logado                                | string           | Page View | 2            |
            | user segment global                          | 003001                                | string           | Page View | 2            |
            | profile ID                                   | profileID                             | regexp named     | Page View | 2            |
            | user gender                                  | gender                                | regexp named     | Page View | 2            |
            | user age                                     | age                                   | regexp named     | Page View | 2            |
            | internal campaign attributes location        | dashboard--centro-1-1                 | string           | Page View | 2            |
            | internal campaign attributes campaign format | card                                  | string           | Page View | 2            |
            | internal campaign attributes collective code |                                       | string           | Page View | 2            |
            | internal campaign attributes campaign name   | -¿necesitas dinero? obten un prestamo | string           | Page View | 2            |
            | internal campaign attributes product         | prestamos                             | string           | Page View | 2            |
            | internal campaign attributes product code    |                                       | string           | Page View | 2            |
            | internal campaign attributes quantity        | 12300.00                              | string           | Page View | 2            |
            | optimization attributes                      |                                       | empty array      | Page View | 2            |
            | application                                  |                                       | empty str object | Page View | 2            |
            | products attributes                          |                                       | empty array      | Page View | 2            |

    @ANA_OA002
    @analytics
    @web @ios @android
    @vbank @backend(test)
    @web-done
    @MX
    Scenario: Analytics - OC Access without offer - PAGE VIEW
        Given a user with the following criteria
            | criteria |
            | offers   |
        And device with notifications enabled
        And the analytics interceptor service is initiated
        When the user accesses to dashboard
        Then the analytics events contains the following variables
            | item                    | value                                | type             | event     | event number |
            | analytics               | analytics/glomo_base                 | json schema      | Page View | 2            |
            | version DL              | 20250414_5.0                         | string           | Page View | 2            |
            | page name               | app:privada:personas:posicion global | string           | Page View | 2            |
            | level 1                 | posicion global                      | string           | Page View | 2            |
            | language                | ES                                   | string           | Page View | 2            |
            | page area               | privada                              | string           | Page View | 2            |
            | page intent             | informacion                          | string           | Page View | 2            |
            | channel                 | online                               | string           | Page View | 2            |
            | page instance ID        | de                                   | string           | Page View | 2            |
            | page info version       | appVersion                           | regexp named     | Page View | 2            |
            | page segment            | personas                             | string           | Page View | 2            |
            | sysEnv                  | app                                  | string           | Page View | 2            |
            | business unit           | BBVA Mexico                          | string           | Page View | 2            |
            | site app name           | App BBVA Mexico                      | string           | Page View | 2            |
            | project name            | Glomo                                | string           | Page View | 2            |
            | device mobile           | si                                   | string           | Page View | 2            |
            | user userState          | logado                               | string           | Page View | 2            |
            | user segment global     | 003001                               | string           | Page View | 2            |
            | profile ID              | profileID                            | regexp named     | Page View | 2            |
            | user gender             | gender                               | regexp named     | Page View | 2            |
            | user age                | age                                  | regexp named     | Page View | 2            |
            | internal campaign       |                                      | empty array      | Page View | 2            |
            | optimization attributes |                                      | empty array      | Page View | 2            |
            | application             |                                      | empty str object | Page View | 2            |
            | products attributes     |                                      | empty array      | Page View | 2            |

    @ANA_OA003
    @analytics
    @web @ios @android
    @vbank @backend(test)
    @web-done
    @MX
    Scenario: Analytics - OC Access - CLICK CLOSE
        Given a user with the following criteria
            | criteria |
            | offers   |
        And the user accesses to dashboard
        And the analytics interceptor service is initiated
        When the user close the offer
        Then the analytics events contains the following variables:
            | item                                         | value                                                                               | type             | event       |
            | analytics                                    | analytics/glomo_base                                                                | json schema      | Click Close |
            | version DL                                   | 20250414_5.0                                                                        | string           | Click Close |
            | page name                                    | app:privada:personas:posicion global                                                | string           | Click Close |
            | level 1                                      | posicion global                                                                     | string           | Click Close |
            | language                                     | ES                                                                                  | string           | Click Close |
            | page area                                    | privada                                                                             | string           | Click Close |
            | page intent                                  | informacion                                                                         | string           | Click Close |
            | channel                                      | online                                                                              | string           | Click Close |
            | page instance ID                             | de                                                                                  | string           | Click Close |
            | page info version                            | appVersion                                                                          | regexp named     | Click Close |
            | page segment                                 | personas                                                                            | string           | Click Close |
            | sysEnv                                       | app                                                                                 | string           | Click Close |
            | business unit                                | BBVA Mexico                                                                         | string           | Click Close |
            | site app name                                | App BBVA Mexico                                                                     | string           | Click Close |
            | project name                                 | Glomo                                                                               | string           | Click Close |
            | device mobile                                | si                                                                                  | string           | Click Close |
            | user userState                               | logado                                                                              | string           | Click Close |
            | user segment global                          | 003001                                                                              | string           | Click Close |
            | profile ID                                   | profileID                                                                           | regexp named     | Click Close |
            | user gender                                  | gender                                                                              | regexp named     | Click Close |
            | user age                                     | age                                                                                 | regexp named     | Click Close |
            | internal campaign attributes location        | dashboard--centro-1-1                                                               | string           | Click Close |
            | internal campaign attributes campaign format | card                                                                                | string           | Click Close |
            | internal campaign attributes collective code |                                                                                     | string           | Click Close |
            | internal campaign attributes campaign name   | -necesitas dinero obten un prestamo                                                 | string           | Click Close |
            | internal campaign attributes product         | prestamos                                                                           | string           | Click Close |
            | internal campaign attributes product code    |                                                                                     | string           | Click Close |
            | internal campaign attributes quantity        | 12300.00                                                                            | string           | Click Close |
            | internal campaign event name                 | IntCmpClose                                                                         | string           | Click Close |
            | internal campaign site action name           | dashboard--centro-1-1:card::-necesitas dinero obten un prestamo:prestamos::12300.00 | string           | Click Close |
            | optimization attributes                      |                                                                                     | empty array      | Click Close |
            | application                                  |                                                                                     | empty str object | Click Close |
            | products attributes                          |                                                                                     | empty array      | Click Close |

    @ANA_OA004
    @analytics
    @web @ios @android
    @vbank @backend(test)
    @web-done
    @MX
    Scenario: Analytics - OC Access - APP ON CLICK START
        Given a user with the following criteria
            | criteria |
            | offers   |
        When the user accesses to dashboard
        And the analytics interceptor service is initiated
        And the user accesses to the "consumer loan" offer
        Then the analytics events contains the following variables:
            | item                                         | value                                                                               | type         | event              |
            | analytics                                    | analytics/glomo_base                                                                | json schema  | App On Click Start |
            | version DL                                   | 20250414_5.0                                                                        | string       | App On Click Start |
            | page name                                    | app:privada:personas:posicion global                                                | string       | App On Click Start |
            | level 1                                      | posicion global                                                                     | string       | App On Click Start |
            | language                                     | ES                                                                                  | string       | App On Click Start |
            | page area                                    | privada                                                                             | string       | App On Click Start |
            | page intent                                  | informacion                                                                         | string       | App On Click Start |
            | channel                                      | online                                                                              | string       | App On Click Start |
            | page instance ID                             | de                                                                                  | string       | App On Click Start |
            | page info version                            | appVersion                                                                          | regexp named | App On Click Start |
            | page segment                                 | personas                                                                            | string       | App On Click Start |
            | sysEnv                                       | app                                                                                 | string       | App On Click Start |
            | business unit                                | BBVA Mexico                                                                         | string       | App On Click Start |
            | site app name                                | App BBVA Mexico                                                                     | string       | App On Click Start |
            | project name                                 | Glomo                                                                               | string       | App On Click Start |
            | device mobile                                | si                                                                                  | string       | App On Click Start |
            | user userState                               | logado                                                                              | string       | App On Click Start |
            | user segment global                          | 003001                                                                              | string       | App On Click Start |
            | profile ID                                   | profileID                                                                           | regexp named | App On Click Start |
            | user gender                                  | gender                                                                              | regexp named | App On Click Start |
            | user age                                     | age                                                                                 | regexp named | App On Click Start |
            | global application                           | preapproved loan                                                                    | string       | App On Click Start |
            | application name                             | prestamo personal one click                                                         | string       | App On Click Start |
            | application type                             | contratacion                                                                        | string       | App On Click Start |
            | application step                             | posicion global                                                                     | string       | App On Click Start |
            | fulfillment model                            | online/offline                                                                      | string       | App On Click Start |
            | internal campaign attributes location        | dashboard--centro-1-1                                                               | string       | App On Click Start |
            | internal campaign attributes campaign format | card                                                                                | string       | App On Click Start |
            | internal campaign attributes collective code |                                                                                     | string       | App On Click Start |
            | internal campaign attributes campaign name   | -necesitas dinero obten un prestamo                                                 | string       | App On Click Start |
            | internal campaign attributes product         | prestamos                                                                           | string       | App On Click Start |
            | internal campaign attributes product code    |                                                                                     | string       | App On Click Start |
            | internal campaign attributes quantity        | 12300.00                                                                            | string       | App On Click Start |
            | internal campaign event name                 | IntCmpClick                                                                         | string       | App On Click Start |
            | internal campaign site action name           | dashboard--centro-1-1:card::-necesitas dinero obten un prestamo:prestamos::12300.00 | string       | App On Click Start |
            | optimization attributes                      |                                                                                     | empty array  | App On Click Start |
            | products attributes                          |                                                                                     | empty array  | App On Click Start |

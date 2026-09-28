@frequentServicesPaymentsAnalytics
Feature: Analytics - Frequent Services Payments

    @ANA_EVENT_OPR001
    @analytics
    @android @ios @web-done
    @MX @backend(test) @vbank
    @web
    Scenario: Frequent service payment - App Completed
        Given a user with the following criteria
            | criteria                     |
            | frequent operations services |
        And the user accesses to dashboard
        And the analytics interceptor service is initiated
        When the user finish a bill payment "suggested service"
        Then the analytics events contains the following variables:
            | item                         | value                                                                     | type         | event         |
            | analytics                    | analytics/glomo_base                                                      | json schema  | App Completed |
            | version DL                   | 20250414_5.0                                                              | string       | App Completed |
            | page name                    | app:privada:personas:operaciones frecuentes:pago servicios:pagina exitosa | string       | App Completed |
            | level 1                      | operaciones frecuentes                                                    | string       | App Completed |
            | level 2                      | pago servicios                                                            | string       | App Completed |
            | level 3                      | pagina exitosa                                                            | string       | App Completed |
            | language                     | ES                                                                        | string       | App Completed |
            | page area                    | privada                                                                   | string       | App Completed |
            | page intent                  | informacion                                                               | string       | App Completed |
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
            | user gender                  | gender                                                                    | regexp named | App Completed |
            | user age                     | age                                                                       | regexp named | App Completed |
            | global application           | smart frequent operation                                                  | string       | App Completed |
            | application name             | realizar operacion frecuente inteligente                                  | string       | App Completed |
            | application type             | operativa                                                                 | string       | App Completed |
            | application step             | pagina exitosa                                                            | string       | App Completed |
            | fulfillment model            | online                                                                    | string       | App Completed |
            | application typology         | journey operaciones frecuentes                                            | string       | App Completed |
            | application process          | bradescard                                                                | string       | App Completed |
            | application state            | finalizado                                                                | string       | App Completed |
            | application operation number | 0245072388                                                                | string       | App Completed |
            | custom fields                | id operacion frecuente:NEjDsU7DkTlGai1rNy1RYzNESsOxRDBl,firma:token       | string       | App Completed |
            | internal campaign            |                                                                           | empty array  | App Completed |
            | optimization attributes      |                                                                           | empty array  | App Completed |

    @ANA_EVENT_OPR002
    @analytics
    @android @ios @web-done
    @MX @backend(test) @vbank
    @web
    Scenario: User enter to a frequent service - App Page Visit
        Given a user with the following criteria
            | criteria                     |
            | frequent operations services |
        And the user accesses to dashboard
        And the analytics interceptor service is initiated
        When the user select the card to enter to a frequent service
        Then the analytics events contains the following variables:
            | item                    | value                                                                     | type         | event          |
            | analytics               | analytics/glomo_base                                                      | json schema  | App Page Visit |
            | version DL              | 20250414_5.0                                                              | string       | App Page Visit |
            | page name               | app:privada:personas:operaciones frecuentes:pago servicios:1 confirmacion | string       | App Page Visit |
            | level 1                 | operaciones frecuentes                                                    | string       | App Page Visit |
            | level 2                 | pago servicios                                                            | string       | App Page Visit |
            | level 3                 | 1 confirmacion                                                            | string       | App Page Visit |
            | language                | ES                                                                        | string       | App Page Visit |
            | page area               | privada                                                                   | string       | App Page Visit |
            | page intent             | informacion                                                               | string       | App Page Visit |
            | channel                 | online                                                                    | string       | App Page Visit |
            | page instance ID        | de                                                                        | string       | App Page Visit |
            | page info version       | appVersion                                                                | regexp named | App Page Visit |
            | page segment            | personas                                                                  | string       | App Page Visit |
            | sysEnv                  | app                                                                       | string       | App Page Visit |
            | business unit           | BBVA Mexico                                                               | string       | App Page Visit |
            | site app name           | App BBVA Mexico                                                           | string       | App Page Visit |
            | project name            | Glomo                                                                     | string       | App Page Visit |
            | device mobile           | si                                                                        | string       | App Page Visit |
            | user userState          | logado                                                                    | string       | App Page Visit |
            | profile ID              | profileID                                                                 | regexp named | App Page Visit |
            | user segment global     | 003001                                                                    | string       | App Page Visit |
            | user gender             | gender                                                                    | regexp named | App Page Visit |
            | user age                | age                                                                       | regexp named | App Page Visit |
            | global application      | smart frequent operation                                                  | string       | App Page Visit |
            | application name        | realizar operacion frecuente inteligente                                  | string       | App Page Visit |
            | application type        | operativa                                                                 | string       | App Page Visit |
            | application step        | 1 confirmacion                                                            | string       | App Page Visit |
            | fulfillment model       | online                                                                    | string       | App Page Visit |
            | application typology    | journey operaciones frecuentes                                            | string       | App Page Visit |
            | application process     | bradescard                                                                | string       | App Page Visit |
            | custom fields           | id operacion frecuente:NEjDsU7DkTlGai1rNy1RYzNESsOxRDBl                   | string       | App Page Visit |
            | internal campaign       |                                                                           | empty array  | App Page Visit |
            | optimization attributes |                                                                           | empty array  | App Page Visit |

    @ANA_EVENT_OPR003
    @analytics
    @android @ios @web-done
    @MX @backend(test) @vbank
    @web
    Scenario: User enter to a frequent service - App Started
        Given a user with the following criteria
            | criteria                     |
            | frequent operations services |
        And the user accesses to dashboard
        And the analytics interceptor service is initiated
        And the user select the card to enter to a frequent service
        When the user changes the amount and confirms the change
        Then the analytics events contains the following variables:
            | item                    | value                                                                     | type         | event       |
            | analytics               | analytics/glomo_base                                                      | json schema  | App Started |
            | version DL              | 20250414_5.0                                                              | string       | App Started |
            | page name               | app:privada:personas:operaciones frecuentes:pago servicios:1 confirmacion | string       | App Started |
            | level 1                 | operaciones frecuentes                                                    | string       | App Started |
            | level 2                 | pago servicios                                                            | string       | App Started |
            | level 3                 | 1 confirmacion                                                            | string       | App Started |
            | language                | ES                                                                        | string       | App Started |
            | page area               | privada                                                                   | string       | App Started |
            | page intent             | informacion                                                               | string       | App Started |
            | channel                 | online                                                                    | string       | App Started |
            | page instance ID        | de                                                                        | string       | App Started |
            | page info version       | appVersion                                                                | regexp named | App Started |
            | page segment            | personas                                                                  | string       | App Started |
            | sysEnv                  | app                                                                       | string       | App Started |
            | business unit           | BBVA Mexico                                                               | string       | App Started |
            | site app name           | App BBVA Mexico                                                           | string       | App Started |
            | project name            | Glomo                                                                     | string       | App Started |
            | device mobile           | si                                                                        | string       | App Started |
            | user userState          | logado                                                                    | string       | App Started |
            | profile ID              | profileID                                                                 | regexp named | App Started |
            | user segment global     | 003001                                                                    | string       | App Started |
            | user gender             | gender                                                                    | regexp named | App Started |
            | user age                | age                                                                       | regexp named | App Started |
            | global application      | smart frequent operation                                                  | string       | App Started |
            | application name        | realizar operacion frecuente inteligente                                  | string       | App Started |
            | application type        | operativa                                                                 | string       | App Started |
            | application step        | editar importe                                                            | string       | App Started |
            | fulfillment model       | online                                                                    | string       | App Started |
            | application typology    | journey operaciones frecuentes                                            | string       | App Started |
            | application process     | bradescard                                                                | string       | App Started |
            | custom fields           | id operacion frecuente:NEjDsU7DkTlGai1rNy1RYzNESsOxRDBl                   | string       | App Started |
            | internal campaign       |                                                                           | empty array  | App Started |
            | optimization attributes |                                                                           | empty array  | App Started |

    @ANA_EVENT_OPR004
    @analytics
    @android @ios @web-done
    @MX @backend(test) @vbank
    @web
    Scenario: The user enters the OTP - Page View
        Given a user with the following criteria
            | criteria                     |
            | frequent operations services |
        And the user accesses to dashboard
        And the analytics interceptor service is initiated
        When the user finish a bill payment "suggested service"
        Then the analytics events contains the following variables:
            | item                    | value                                                          | type             | event     |
            | analytics               | analytics/glomo_base                                           | json schema      | Page View |
            | version DL              | 20250414_5.0                                                   | string           | Page View |
            | page name               | app:privada:personas:operaciones frecuentes:pago servicios:otp | string           | Page View |
            | level 1                 | operaciones frecuentes                                         | string           | Page View |
            | level 2                 | pago servicios                                                 | string           | Page View |
            | level 3                 | otp                                                            | string           | Page View |
            | language                | ES                                                             | string           | Page View |
            | page area               | privada                                                        | string           | Page View |
            | page intent             | informacion                                                    | string           | Page View |
            | channel                 | online                                                         | string           | Page View |
            | page instance ID        | de                                                             | string           | Page View |
            | page info version       | appVersion                                                     | regexp named     | Page View |
            | page segment            | personas                                                       | string           | Page View |
            | sysEnv                  | app                                                            | string           | Page View |
            | business unit           | BBVA Mexico                                                    | string           | Page View |
            | site app name           | App BBVA Mexico                                                | string           | Page View |
            | project name            | Glomo                                                          | string           | Page View |
            | device mobile           | si                                                             | string           | Page View |
            | user userState          | logado                                                         | string           | Page View |
            | profile ID              | profileID                                                      | regexp named     | Page View |
            | user segment global     | 003001                                                         | string           | Page View |
            | user gender             | gender                                                         | regexp named     | Page View |
            | user age                | age                                                            | regexp named     | Page View |
            | custom fields           | firma:token                                                    | string           | Page View |
            | internal campaign       |                                                                | empty array      | Page View |
            | optimization attributes |                                                                | empty array      | Page View |
            | application             |                                                                | empty str object | Page View |
            | products attributes     |                                                                | empty array      | Page View |

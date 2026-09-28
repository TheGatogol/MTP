@creditBureauAuthorizationAnalytics
Feature: Analytics - Credit Bureau Authorization

    @ANA_EVENT_CBA001
    @analytics
    @MX
    @web
    @android @ios
    @vbank
    @backend(test)
    @web-done
    Scenario: The user accesses the credit bureau authorization operation - App Page Visit
        Given a user with the following criteria
            | criteria                     |
            | credit bureau user analytics |
        And the user starts the application at date:
            | day   | 20   |
            | month | 9    |
            | year  | 2023 |
        And the user accesses to dashboard
        And the analytics interceptor service is initiated
        When the user accesses the credit bureau authorization notification
        Then the analytics events contains the following variables
            | item                    | value                                                      | type         | event          |
            | analytics               | analytics/glomo_base                                       | json schema  | App Page Visit |
            | version DL              | 20250414_5.0                                               | string       | App Page Visit |
            | page name               | app:privada:personas:autorizacion credito buro:1 solicitud | string       | App Page Visit |
            | level 1                 | autorizacion credito buro                                  | string       | App Page Visit |
            | level 2                 | 1 solicitud                                                | string       | App Page Visit |
            | language                | ES                                                         | string       | App Page Visit |
            | page area               | privada                                                    | string       | App Page Visit |
            | page intent             | informacion                                                | string       | App Page Visit |
            | channel                 | online                                                     | string       | App Page Visit |
            | page instance ID        | de                                                         | string       | App Page Visit |
            | page info version       | appVersion                                                 | regexp named | App Page Visit |
            | page segment            | personas                                                   | string       | App Page Visit |
            | sysEnv                  | app                                                        | string       | App Page Visit |
            | business unit           | BBVA Mexico                                                | string       | App Page Visit |
            | site app name           | App BBVA Mexico                                            | string       | App Page Visit |
            | project name            | Glomo                                                      | string       | App Page Visit |
            | device mobile           | si                                                         | string       | App Page Visit |
            | user userState          | logado                                                     | string       | App Page Visit |
            | user segment global     | 003001                                                     | string       | App Page Visit |
            | profile ID              | profileID                                                  | regexp named | App Page Visit |
            | user gender             | gender                                                     | regexp named | App Page Visit |
            | user age                | age                                                        | regexp named | App Page Visit |
            | global application      | credit bureau authorization                                | string       | App Page Visit |
            | application name        | autorizacion credito buro                                  | string       | App Page Visit |
            | application type        | operativa                                                  | string       | App Page Visit |
            | fulfillment model       | online                                                     | string       | App Page Visit |
            | application typology    | proceso nomina vinculante                                  | string       | App Page Visit |
            | application step        | 1 solicitud                                                | string       | App Page Visit |
            | internal campaign       |                                                            | empty array  | App Page Visit |
            | optimization attributes |                                                            | empty array  | App Page Visit |
            | products attributes     |                                                            | empty array  | App Page Visit |

    @ANA_EVENT_CBA002
    @analytics
    @MX
    @web
    @android @ios
    @vbank
    @backend(test)
    @web-done
    Scenario: The user continues the credit authorization operation - App Step 2
        Given a user with the following criteria
            | criteria                     |
            | credit bureau user analytics |
        And the user starts the application at date:
            | day   | 20   |
            | month | 9    |
            | year  | 2023 |
        And the user accesses the credit bureau authorization notification
        And the user checks the authorization checklist "1" times
        And the analytics interceptor service is initiated
        When the user "fails" at authorizing the credit bureau
        Then the analytics events contains the following variables
            | item                    | value                                                | type         | event      |
            | analytics               | analytics/glomo_base                                 | json schema  | App Step 2 |
            | version DL              | 20250414_5.0                                         | string       | App Step 2 |
            | page name               | app:privada:personas:autorizacion credito buro:2 otp | string       | App Step 2 |
            | level 1                 | autorizacion credito buro                            | string       | App Step 2 |
            | level 2                 | 2 otp                                                | string       | App Step 2 |
            | language                | ES                                                   | string       | App Step 2 |
            | page area               | privada                                              | string       | App Step 2 |
            | page intent             | informacion                                          | string       | App Step 2 |
            | channel                 | online                                               | string       | App Step 2 |
            | page instance ID        | de                                                   | string       | App Step 2 |
            | page info version       | appVersion                                           | regexp named | App Step 2 |
            | page segment            | personas                                             | string       | App Step 2 |
            | sysEnv                  | app                                                  | string       | App Step 2 |
            | business unit           | BBVA Mexico                                          | string       | App Step 2 |
            | site app name           | App BBVA Mexico                                      | string       | App Step 2 |
            | project name            | Glomo                                                | string       | App Step 2 |
            | device mobile           | si                                                   | string       | App Step 2 |
            | user userState          | logado                                               | string       | App Step 2 |
            | user segment global     | 003001                                               | string       | App Step 2 |
            | profile ID              | profileID                                            | regexp named | App Step 2 |
            | user gender             | gender                                               | regexp named | App Step 2 |
            | user age                | age                                                  | regexp named | App Step 2 |
            | global application      | credit bureau authorization                          | string       | App Step 2 |
            | application name        | autorizacion credito buro                            | string       | App Step 2 |
            | application type        | operativa                                            | string       | App Step 2 |
            | fulfillment model       | online                                               | string       | App Step 2 |
            | application typology    | proceso nomina vinculante                            | string       | App Step 2 |
            | application step        | 2 otp                                                | string       | App Step 2 |
            | internal campaign       |                                                      | empty array  | App Step 2 |
            | optimization attributes |                                                      | empty array  | App Step 2 |
            | products attributes     |                                                      | empty array  | App Step 2 |

    @ANA_EVENT_CBA003
    @analytics
    @MX
    @web
    @android @ios
    @vbank
    @backend(test)
    @web-done
    Scenario: The user authorizes the credit bureau - App Completed
        Given a user with the following criteria
            | criteria                     |
            | credit bureau user analytics |
        And the user starts the application at date:
            | day   | 20   |
            | month | 9    |
            | year  | 2023 |
        And the user accesses the credit bureau authorization notification
        And the user checks the authorization checklist "1" times
        And the analytics interceptor service is initiated
        When the user "succeeds" at authorizing the credit bureau
        Then the analytics events contains the following variables
            | item                    | value                                                         | type         | event         |
            | analytics               | analytics/glomo_base                                          | json schema  | App Completed |
            | version DL              | 20250414_5.0                                                  | string       | App Completed |
            | page name               | app:privada:personas:autorizacion credito buro:pagina exitosa | string       | App Completed |
            | level 1                 | autorizacion credito buro                                     | string       | App Completed |
            | level 2                 | pagina exitosa                                                | string       | App Completed |
            | language                | ES                                                            | string       | App Completed |
            | page area               | privada                                                       | string       | App Completed |
            | page intent             | informacion                                                   | string       | App Completed |
            | channel                 | online                                                        | string       | App Completed |
            | page instance ID        | de                                                            | string       | App Completed |
            | page info version       | appVersion                                                    | regexp named | App Completed |
            | page segment            | personas                                                      | string       | App Completed |
            | sysEnv                  | app                                                           | string       | App Completed |
            | business unit           | BBVA Mexico                                                   | string       | App Completed |
            | site app name           | App BBVA Mexico                                               | string       | App Completed |
            | project name            | Glomo                                                         | string       | App Completed |
            | device mobile           | si                                                            | string       | App Completed |
            | user userState          | logado                                                        | string       | App Completed |
            | user segment global     | 003001                                                        | string       | App Completed |
            | profile ID              | profileID                                                     | regexp named | App Completed |
            | user gender             | gender                                                        | regexp named | App Completed |
            | user age                | age                                                           | regexp named | App Completed |
            | global application      | credit bureau authorization                                   | string       | App Completed |
            | application name        | autorizacion credito buro                                     | string       | App Completed |
            | application type        | operativa                                                     | string       | App Completed |
            | fulfillment model       | online                                                        | string       | App Completed |
            | application typology    | proceso nomina vinculante                                     | string       | App Completed |
            | application step        | pagina exitosa                                                | string       | App Completed |
            | application state       | finalizado                                                    | string       | App Completed |
            | internal campaign       |                                                               | empty array  | App Completed |
            | optimization attributes |                                                               | empty array  | App Completed |
            | products attributes     |                                                               | empty array  | App Completed |

    @ANA_EVENT_CBA004
    @analytics
    @MX
    @web
    @android @ios
    @vbank
    @backend(test)
    @web-done
    Scenario: The user accesses the credit bureau authorization modal - App Started
        Given a user with the following criteria
            | criteria                     |
            | credit bureau user analytics |
        And the user starts the application at date:
            | day   | 20   |
            | month | 9    |
            | year  | 2023 |
        And the user accesses the credit bureau authorization notification
        And the analytics interceptor service is initiated
        When the user enters the "authorization" modal
        Then the analytics events contains the following variables
            | item                    | value                                                      | type         | event       |
            | analytics               | analytics/glomo_base                                       | json schema  | App Started |
            | version DL              | 20250414_5.0                                               | string       | App Started |
            | page name               | app:privada:personas:autorizacion credito buro:1 solicitud | string       | App Started |
            | level 1                 | autorizacion credito buro                                  | string       | App Started |
            | level 2                 | 1 solicitud                                                | string       | App Started |
            | language                | ES                                                         | string       | App Started |
            | page area               | privada                                                    | string       | App Started |
            | page intent             | informacion                                                | string       | App Started |
            | channel                 | online                                                     | string       | App Started |
            | page instance ID        | de                                                         | string       | App Started |
            | page info version       | appVersion                                                 | regexp named | App Started |
            | page segment            | personas                                                   | string       | App Started |
            | sysEnv                  | app                                                        | string       | App Started |
            | business unit           | BBVA Mexico                                                | string       | App Started |
            | site app name           | App BBVA Mexico                                            | string       | App Started |
            | project name            | Glomo                                                      | string       | App Started |
            | device mobile           | si                                                         | string       | App Started |
            | user userState          | logado                                                     | string       | App Started |
            | user segment global     | 003001                                                     | string       | App Started |
            | profile ID              | profileID                                                  | regexp named | App Started |
            | user gender             | gender                                                     | regexp named | App Started |
            | user age                | age                                                        | regexp named | App Started |
            | global application      | credit bureau authorization                                | string       | App Started |
            | application name        | autorizacion credito buro                                  | string       | App Started |
            | application type        | operativa                                                  | string       | App Started |
            | fulfillment model       | online                                                     | string       | App Started |
            | application typology    | proceso nomina vinculante                                  | string       | App Started |
            | application step        | ver autorizacion                                           | string       | App Started |
            | internal campaign       |                                                            | empty array  | App Started |
            | optimization attributes |                                                            | empty array  | App Started |
            | products attributes     |                                                            | empty array  | App Started |

    @ANA_EVENT_CBA005
    @analytics
    @MX
    @web
    @android @ios
    @vbank
    @backend(test)
    @web-done
    Scenario: The user checks on the authorization checklist - App Started
        Given a user with the following criteria
            | criteria                     |
            | credit bureau user analytics |
        And the user starts the application at date:
            | day   | 20   |
            | month | 9    |
            | year  | 2023 |
        And the user accesses the credit bureau authorization notification
        And the analytics interceptor service is initiated
        When the user checks the authorization checklist "2" times
        Then the analytics events contains the following variables
            | item                    | value                                                      | type         | event       |
            | analytics               | analytics/glomo_base                                       | json schema  | App Started |
            | version DL              | 20250414_5.0                                               | string       | App Started |
            | page name               | app:privada:personas:autorizacion credito buro:1 solicitud | string       | App Started |
            | level 1                 | autorizacion credito buro                                  | string       | App Started |
            | level 2                 | 1 solicitud                                                | string       | App Started |
            | language                | ES                                                         | string       | App Started |
            | page area               | privada                                                    | string       | App Started |
            | page intent             | informacion                                                | string       | App Started |
            | channel                 | online                                                     | string       | App Started |
            | page instance ID        | de                                                         | string       | App Started |
            | page info version       | appVersion                                                 | regexp named | App Started |
            | page segment            | personas                                                   | string       | App Started |
            | sysEnv                  | app                                                        | string       | App Started |
            | business unit           | BBVA Mexico                                                | string       | App Started |
            | site app name           | App BBVA Mexico                                            | string       | App Started |
            | project name            | Glomo                                                      | string       | App Started |
            | device mobile           | si                                                         | string       | App Started |
            | user userState          | logado                                                     | string       | App Started |
            | user segment global     | 003001                                                     | string       | App Started |
            | profile ID              | profileID                                                  | regexp named | App Started |
            | user gender             | gender                                                     | regexp named | App Started |
            | user age                | age                                                        | regexp named | App Started |
            | global application      | credit bureau authorization                                | string       | App Started |
            | application name        | autorizacion credito buro                                  | string       | App Started |
            | application type        | operativa                                                  | string       | App Started |
            | fulfillment model       | online                                                     | string       | App Started |
            | application typology    | proceso nomina vinculante                                  | string       | App Started |
            | application step        | check he leido                                             | string       | App Started |
            | internal campaign       |                                                            | empty array  | App Started |
            | optimization attributes |                                                            | empty array  | App Started |
            | products attributes     |                                                            | empty array  | App Started |

    @ANA_EVENT_CBA006
    @analytics
    @MX
    @web
    @android @ios
    @vbank
    @backend(test)
    @web-done
    Scenario: The user accepts bureau consult step - App Started
        Given a user with the following criteria
            | criteria                     |
            | credit bureau user analytics |
        And the user starts the application at date:
            | day   | 20   |
            | month | 9    |
            | year  | 2023 |
        And the user accesses the credit bureau authorization notification
        And the user checks the authorization checklist "1" times
        And the analytics interceptor service is initiated
        When the user "fails" at authorizing the credit bureau
        Then the analytics events contains the following variables
            | item                    | value                                                      | type         | event       |
            | analytics               | analytics/glomo_base                                       | json schema  | App Started |
            | version DL              | 20250414_5.0                                               | string       | App Started |
            | page name               | app:privada:personas:autorizacion credito buro:1 solicitud | string       | App Started |
            | level 1                 | autorizacion credito buro                                  | string       | App Started |
            | level 2                 | 1 solicitud                                                | string       | App Started |
            | language                | ES                                                         | string       | App Started |
            | page area               | privada                                                    | string       | App Started |
            | page intent             | informacion                                                | string       | App Started |
            | channel                 | online                                                     | string       | App Started |
            | page instance ID        | de                                                         | string       | App Started |
            | page info version       | appVersion                                                 | regexp named | App Started |
            | page segment            | personas                                                   | string       | App Started |
            | sysEnv                  | app                                                        | string       | App Started |
            | business unit           | BBVA Mexico                                                | string       | App Started |
            | site app name           | App BBVA Mexico                                            | string       | App Started |
            | project name            | Glomo                                                      | string       | App Started |
            | device mobile           | si                                                         | string       | App Started |
            | user userState          | logado                                                     | string       | App Started |
            | user segment global     | 003001                                                     | string       | App Started |
            | profile ID              | profileID                                                  | regexp named | App Started |
            | user gender             | gender                                                     | regexp named | App Started |
            | user age                | age                                                        | regexp named | App Started |
            | global application      | credit bureau authorization                                | string       | App Started |
            | application name        | autorizacion credito buro                                  | string       | App Started |
            | application type        | operativa                                                  | string       | App Started |
            | fulfillment model       | online                                                     | string       | App Started |
            | application typology    | proceso nomina vinculante                                  | string       | App Started |
            | application step        | aceptar                                                    | string       | App Started |
            | internal campaign       |                                                            | empty array  | App Started |
            | optimization attributes |                                                            | empty array  | App Started |
            | products attributes     |                                                            | empty array  | App Started |

    @ANA_EVENT_CBA007
    @analytics
    @MX
    @web
    @android @ios
    @vbank
    @backend(test)
    @web-done
    Scenario: The user accesses and views the credit bureau authorization modal - Page View
        Given a user with the following criteria
            | criteria                     |
            | credit bureau user analytics |
        And the user starts the application at date:
            | day   | 20   |
            | month | 9    |
            | year  | 2023 |
        And the user accesses the credit bureau authorization notification
        And the analytics interceptor service is initiated
        When the user enters the "authorization" modal
        Then the analytics events contains the following variables
            | item                    | value                                                           | type             | event     |
            | analytics               | analytics/glomo_base                                            | json schema      | Page View |
            | version DL              | 20250414_5.0                                                    | string           | Page View |
            | page name               | app:privada:personas:autorizacion credito buro:ver autorizacion | string           | Page View |
            | level 1                 | autorizacion credito buro                                       | string           | Page View |
            | level 2                 | ver autorizacion                                                | string           | Page View |
            | language                | ES                                                              | string           | Page View |
            | page area               | privada                                                         | string           | Page View |
            | page intent             | informacion                                                     | string           | Page View |
            | channel                 | online                                                          | string           | Page View |
            | page instance ID        | de                                                              | string           | Page View |
            | page info version       | appVersion                                                      | regexp named     | Page View |
            | page segment            | personas                                                        | string           | Page View |
            | sysEnv                  | app                                                             | string           | Page View |
            | business unit           | BBVA Mexico                                                     | string           | Page View |
            | site app name           | App BBVA Mexico                                                 | string           | Page View |
            | project name            | Glomo                                                           | string           | Page View |
            | device mobile           | si                                                              | string           | Page View |
            | user userState          | logado                                                          | string           | Page View |
            | user segment global     | 003001                                                          | string           | Page View |
            | profile ID              | profileID                                                       | regexp named     | Page View |
            | user gender             | gender                                                          | regexp named     | Page View |
            | user age                | age                                                             | regexp named     | Page View |
            | internal campaign       |                                                                 | empty array      | Page View |
            | optimization attributes |                                                                 | empty array      | Page View |
            | application             |                                                                 | empty str object | Page View |
            | products attributes     |                                                                 | empty array      | Page View |

    @ANA_EVENT_CBA008
    @analytics
    @MX
    @web
    @android @ios
    @vbank
    @backend(test)
    @web-done
    Scenario: The user sees an error modal when the service fails - Page View
        Given a user with the following criteria
            | criteria                     |
            | credit bureau user analytics |
        And the user starts the application at date:
            | day   | 20   |
            | month | 9    |
            | year  | 2023 |
        And the user accesses the credit bureau authorization notification
        And the user checks the authorization checklist "1" times
        And the analytics interceptor service is initiated
        And the user "fails" at authorizing the credit bureau
        When the user retries the operation "3" times
        Then the analytics events contains the following variables
            | item                    | value                                                    | type             | event     |
            | analytics               | analytics/glomo_base                                     | json schema      | Page View |
            | version DL              | 20250414_5.0                                             | string           | Page View |
            | page name               | app:privada:personas:autorizacion credito buro:error otp | string           | Page View |
            | level 1                 | autorizacion credito buro                                | string           | Page View |
            | level 2                 | error otp                                                | string           | Page View |
            | error page              | error otp                                                | string           | Page View |
            | language                | ES                                                       | string           | Page View |
            | page area               | privada                                                  | string           | Page View |
            | page intent             | informacion                                              | string           | Page View |
            | channel                 | online                                                   | string           | Page View |
            | page instance ID        | de                                                       | string           | Page View |
            | page info version       | appVersion                                               | regexp named     | Page View |
            | page segment            | personas                                                 | string           | Page View |
            | sysEnv                  | app                                                      | string           | Page View |
            | business unit           | BBVA Mexico                                              | string           | Page View |
            | site app name           | App BBVA Mexico                                          | string           | Page View |
            | project name            | Glomo                                                    | string           | Page View |
            | device mobile           | si                                                       | string           | Page View |
            | user userState          | logado                                                   | string           | Page View |
            | user segment global     | 003001                                                   | string           | Page View |
            | profile ID              | profileID                                                | regexp named     | Page View |
            | user gender             | gender                                                   | regexp named     | Page View |
            | user age                | age                                                      | regexp named     | Page View |
            | internal campaign       |                                                          | empty array      | Page View |
            | optimization attributes |                                                          | empty array      | Page View |
            | application             |                                                          | empty str object | Page View |
            | products attributes     |                                                          | empty array      | Page View |

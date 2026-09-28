@AnaNotificationsList
Feature: Analytics - Notification List

    @ANA_EVENT_NL001
    @analytics
    @vbank
    @MX @android @ios
    @web
    @backend(test)
    @web-done
    @manual @JIRA.GLOMOMX-160270
    Scenario: Notification List - analytics event App Page View
        Given a user with the following criteria
            | criteria              |
            | notifications online  |
        And the user accesses to dashboard
        And the analytics interceptor service is initiated
        When the user accesses notifications List
        Then the analytics events contains the following variables
            | item                     | value                                                  | type         | event     |
            | analytics	               | analytics/glomo_base                                   | json schema  | Page View |
            | version dl               | 20250414_5.0                                           | string       | Page View |
            | page name                | app:privada:personas:notificaciones                    | string       | Page View |
            | level 1                  | notificaciones                                         | string       | Page View |
            | language                 | ES                                                     | string       | Page View |
            | page area                | privada                                                | string       | Page View |
            | page intent              | informacion                                            | string       | Page View |
            | channel                  | online                                                 | string       | Page View |
            | page instance ID         | de                                                     | string       | Page View |
            | page info version        | appVersion                                             | regexp named | Page View |
            | page segment             | personas                                               | string       | Page View |
            | sysEnv                   | app                                                    | string       | Page View |
            | business unit            | BBVA Mexico                                            | string       | Page View |
            | project name             | Glomo                                                  | string       | Page View |
            | device mobile            | si                                                     | string       | Page View |
            | user userState           | logado                                                 | string       | Page View |
            | user segment global      | 003001                                                 | string       | Page View |
            | profile ID               | profileID                                              | regexp named | Page View |
            | user age                 | age                                                    | regexp named | Page View |
            | user gender              | gender                                                 | regexp named | Page View |

    @ANA_EVENT_NL002
    @analytics
    @vbank
    @MX @android @ios
    @web
    @backend(test)
    @web-done
    @manual @JIRA.GLOMOMX-160270
    Scenario: Notification List - analytics event App Page View detail expense
        Given a user with the following criteria
            | criteria              |
            | notifications online  |
        And the user accesses to dashboard
        And the user accesses notifications List
        And the analytics interceptor service is initiated
        When the user accesses access detail notification expense
        Then the analytics events contains the following variables
            | item                     | value                                                              | type         | event     |
            | analytics	               | analytics/glomo_base                                               | json schema  | Page View |
            | version dl               | 20250414_5.0                                                       | string       | Page View |
            | page name                | app:privada:personas:notificaciones:movimientos de dinero:detalle  | string       | Page View |
            | level 1                  | notificaciones                                                     | string       | Page View |
            | level 2                  | movimientos de dinero                                              | string       | Page View |
            | level 3                  | detalle                                                            | string       | Page View |
            | language                 | ES                                                                 | string       | Page View |
            | page area                | privada                                                            | string       | Page View |
            | page intent              | informacion                                                        | string       | Page View |
            | channel                  | online                                                             | string       | Page View |
            | page instance ID         | de                                                                 | string       | Page View |
            | page info version        | appVersion                                                         | regexp named | Page View |
            | page segment             | personas                                                           | string       | Page View |
            | sysEnv                   | app                                                                | string       | Page View |
            | business unit            | BBVA Mexico                                                        | string       | Page View |
            | project name             | Glomo                                                              | string       | Page View |
            | device mobile            | si                                                                 | string       | Page View |
            | user userState           | logado                                                             | string       | Page View |
            | user segment global      | 003001                                                             | string       | Page View |
            | profile ID               | profileID                                                          | regexp named | Page View |
            | user age                 | age                                                                | regexp named | Page View |
            | user gender              | gender                                                             | regexp named | Page View |

    @ANA_EVENT_NL003
    @analytics
    @vbank
    @MX @android @ios
    @web
    @backend(test)
    @web-done
    @manual @JIRA.GLOMOMX-160270
    Scenario: Notification List - analytics event App Page View detail alert
        Given a user with the following criteria
            | criteria              |
            | notifications online  |
        And the user accesses to dashboard
        And the user accesses notifications List
        And the analytics interceptor service is initiated
        When the user accesses access detail notification alert
        Then the analytics events contains the following variables
            | item                     | value                                                              | type         | event     |
            | analytics	               | analytics/glomo_base                                               | json schema  | Page View |
            | version dl               | 20250414_5.0                                                       | string       | Page View |
            | page name                | app:privada:personas:notificaciones:avisos informativos:detalle    | string       | Page View |
            | level 1                  | notificaciones                                                     | string       | Page View |
            | level 2                  | avisos informativos                                                | string       | Page View |
            | level 3                  | detalle                                                            | string       | Page View |
            | language                 | ES                                                                 | string       | Page View |
            | page area                | privada                                                            | string       | Page View |
            | page intent              | informacion                                                        | string       | Page View |
            | channel                  | online                                                             | string       | Page View |
            | page instance ID         | de                                                                 | string       | Page View |
            | page info version        | appVersion                                                         | regexp named | Page View |
            | page segment             | personas                                                           | string       | Page View |
            | sysEnv                   | app                                                                | string       | Page View |
            | business unit            | BBVA Mexico                                                        | string       | Page View |
            | project name             | Glomo                                                              | string       | Page View |
            | device mobile            | si                                                                 | string       | Page View |
            | user userState           | logado                                                             | string       | Page View |
            | user segment global      | 003001                                                             | string       | Page View |
            | profile ID               | profileID                                                          | regexp named | Page View |
            | user age                 | age                                                                | regexp named | Page View |
            | user gender              | gender                                                             | regexp named | Page View |

    @ANA_EVENT_NL004
    @analytics
    @vbank
    @MX @android @ios
    @web
    @backend(test)
    @web-done
    @manual @JIRA.GLOMOMX-160270
    Scenario: Notification List - analytics event App Page View detail promotion
        Given a user with the following criteria
            | criteria              |
            | notifications online  |
        And the user accesses to dashboard
        And the user accesses notifications List
        And the analytics interceptor service is initiated
        When the user accesses access detail notification promotion
        Then the analytics events contains the following variables
            | item                     | value                                                              | type         | event     |
            | analytics	               | analytics/glomo_base                                               | json schema  | Page View |
            | version dl               | 20250414_5.0                                                       | string       | Page View |
            | page name                | app:privada:personas:notificaciones:ofertas y promociones:detalle  | string       | Page View |
            | level 1                  | notificaciones                                                     | string       | Page View |
            | level 2                  | ofertas y promociones                                              | string       | Page View |
            | level 3                  | detalle                                                            | string       | Page View |
            | language                 | ES                                                                 | string       | Page View |
            | page area                | privada                                                            | string       | Page View |
            | page intent              | informacion                                                        | string       | Page View |
            | channel                  | online                                                             | string       | Page View |
            | page instance ID         | de                                                                 | string       | Page View |
            | page info version        | appVersion                                                         | regexp named | Page View |
            | page segment             | personas                                                           | string       | Page View |
            | sysEnv                   | app                                                                | string       | Page View |
            | business unit            | BBVA Mexico                                                        | string       | Page View |
            | project name             | Glomo                                                              | string       | Page View |
            | device mobile            | si                                                                 | string       | Page View |
            | user userState           | logado                                                             | string       | Page View |
            | user segment global      | 003001                                                             | string       | Page View |
            | profile ID               | profileID                                                          | regexp named | Page View |
            | user age                 | age                                                                | regexp named | Page View |
            | user gender              | gender                                                             | regexp named | Page View |

    @ANA_EVENT_NL005
    @analytics
    @vbank
    @MX @android @ios
    @web
    @backend(test)

    @web-done
    @manual @JIRA.GLOMOMX-160270
    Scenario: Notification List - analytics event App Page View whitout notifications
        Given a user with the following criteria
            | criteria               |
            | notifications offline  |
        And the user accesses to dashboard
        And the analytics interceptor service is initiated
        When the user accesses notifications List
        Then the analytics events contains the following variables
            | item                     | value                                                                          | type         | event     |
            | analytics	               | analytics/glomo_base                                                           | json schema  | Page View |
            | version dl               | 20250414_5.0                                                                   | string       | Page View |
            | page name                | app:privada:personas:notificaciones:sin notificaciones                         | string       | Page View |
            | level 1                  | notificaciones                                                                 | string       | Page View |
            | level 2                  | sin notificaciones                                                             | string       | Page View |
            | language                 | ES                                                                             | string       | Page View |
            | page area                | privada                                                                        | string       | Page View |
            | page intent              | informacion                                                                    | string       | Page View |
            | channel                  | online                                                                         | string       | Page View |
            | page instance ID         | de                                                                             | string       | Page View |
            | page info version        | appVersion                                                                     | regexp named | Page View |
            | page segment             | personas                                                                       | string       | Page View |
            | sysEnv                   | app                                                                            | string       | Page View |
            | business unit            | BBVA Mexico                                                                    | string       | Page View |
            | project name             | Glomo                                                                          | string       | Page View |
            | device mobile            | si                                                                             | string       | Page View |
            | user userState           | logado                                                                         | string       | Page View |
            | user segment global      | 003001                                                                         | string       | Page View |
            | profile ID               | profileID                                                                      | regexp named | Page View |
            | user age                 | age                                                                            | regexp named | Page View |
            | user gender              | gender                                                                         | regexp named | Page View |

    @ANA_EVENT_NL006
    @analytics
    @vbank
    @MX @android @ios
    @web
    @backend(test)

    @web-done
    @manual @JIRA.GLOMOMX-160270
    Scenario: Notification List - analytics event App Page View filter page
        Given a user with the following criteria
            | criteria              |
            | notifications online  |
        And the user accesses to dashboard
        And the user accesses notifications List
        And the analytics interceptor service is initiated
        When the user accesses notification filter list
        Then the analytics events contains the following variables
            | item                     | value                                                  | type         | event     |
            | analytics	               | analytics/glomo_base                                   | json schema  | Page View |
            | version dl               | 20250414_5.0                                           | string       | Page View |
            | page name                | app:privada:personas:notificaciones:filtrar            | string       | Page View |
            | level 1                  | notificaciones                                         | string       | Page View |
            | level 2                  | filtrar                                                | string       | Page View |
            | language                 | ES                                                     | string       | Page View |
            | page area                | privada                                                | string       | Page View |
            | page intent              | informacion                                            | string       | Page View |
            | channel                  | online                                                 | string       | Page View |
            | page instance ID         | de                                                     | string       | Page View |
            | page info version        | appVersion                                             | regexp named | Page View |
            | page segment             | personas                                               | string       | Page View |
            | sysEnv                   | app                                                    | string       | Page View |
            | business unit            | BBVA Mexico                                            | string       | Page View |
            | project name             | Glomo                                                  | string       | Page View |
            | device mobile            | si                                                     | string       | Page View |
            | user userState           | logado                                                 | string       | Page View |
            | user segment global      | 003001                                                 | string       | Page View |
            | profile ID               | profileID                                              | regexp named | Page View |
            | user age                 | age                                                    | regexp named | Page View |
            | user gender              | gender                                                 | regexp named | Page View |

    @ANA_EVENT_NL007
    @analytics
    @vbank
    @MX @android @ios
    @web
    @backend(test)

    @web-done
    @manual @JIRA.GLOMOMX-160270
    Scenario: Notification List - analytics event App Page View result page
        Given a user with the following criteria
            | criteria              |
            | notifications online  |
        And the user accesses to dashboard
        And the user accesses notifications List
        And the user accesses notification filter list
        And the analytics interceptor service is initiated
        When the user accesses notification result list
        Then the analytics events contains the following variables
            | item                     | value                                                  | type         | event     |
            | analytics	               | analytics/glomo_base                                   | json schema  | Page View |
            | version dl               | 20250414_5.0                                           | string       | Page View |
            | page name                | app:privada:personas:notificaciones:resultados         | string       | Page View |
            | level 1                  | notificaciones                                         | string       | Page View |
            | level 2                  | resultados                                             | string       | Page View |
            | language                 | ES                                                     | string       | Page View |
            | page area                | privada                                                | string       | Page View |
            | page intent              | informacion                                            | string       | Page View |
            | channel                  | online                                                 | string       | Page View |
            | page instance ID         | de                                                     | string       | Page View |
            | page info version        | appVersion                                             | regexp named | Page View |
            | page segment             | personas                                               | string       | Page View |
            | sysEnv                   | app                                                    | string       | Page View |
            | business unit            | BBVA Mexico                                            | string       | Page View |
            | project name             | Glomo                                                  | string       | Page View |
            | device mobile            | si                                                     | string       | Page View |
            | user userState           | logado                                                 | string       | Page View |
            | user segment global      | 003001                                                 | string       | Page View |
            | profile ID               | profileID                                              | regexp named | Page View |
            | user age                 | age                                                    | regexp named | Page View |
            | user gender              | gender                                                 | regexp named | Page View |

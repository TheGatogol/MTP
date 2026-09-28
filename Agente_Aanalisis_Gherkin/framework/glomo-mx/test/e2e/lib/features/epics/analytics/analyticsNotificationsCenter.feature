@AnaNotificationsListPhaseTwo
Feature: Analytics - Notification List Phase Two

    @ANA_EVENT_NLPT001
    @analytics
    @vbank
    @MX @android @ios
    @web
    @backend(test)
    @web-done
    Scenario: Notification List Phase Two - analytics event App Page View Phase Two
        Given a user with the following criteria
            | criteria              |
            | notifications phase 2 |
        And the user accesses to dashboard
        And the analytics interceptor service is initiated
        When the user accesses center notification
        Then the analytics events contains the following variables
            | item                | value                                                  | type         | event     |
            | analytics           | analytics/glomo_base                                   | json schema  | Page View |
            | version dl          | 20250414_5.0                                           | string       | Page View |
            | page name           | app:privada:personas:notificaciones                    | string       | Page View |
            | level 1             | notificaciones                                         | string       | Page View |
            | language            | ES                                                     | string       | Page View |
            | page area           | privada                                                | string       | Page View |
            | page intent         | informacion                                            | string       | Page View |
            | channel             | online                                                 | string       | Page View |
            | page instance ID    | de                                                     | string       | Page View |
            | page info version   | appVersion                                             | regexp named | Page View |
            | page segment        | personas                                               | string       | Page View |
            | sysEnv              | app                                                    | string       | Page View |
            | business unit       | BBVA Mexico                                            | string       | Page View |
            | project name        | Glomo                                                  | string       | Page View |
            | device mobile       | si                                                     | string       | Page View |
            | user userState      | logado                                                 | string       | Page View |
            | user segment global | 003001                                                 | string       | Page View |
            | profile ID          | profileID                                              | regexp named | Page View |
            | user age            | age                                                    | regexp named | Page View |
            | user gender         | gender                                                 | regexp named | Page View |

    @ANA_NLPT002
    @analytics
    @vbank
    @MX @android @ios
    @web
    @backend(test)
    @web-done
    Scenario: Notification List Phase Two - analytics event App Page View detail Phase Two
        Given a user with the following criteria
            | criteria              |
            | notifications phase 2 |
        And the user accesses to dashboard
        And the user accesses center notification
        When the user access detail notification "expense"
        Then the device contains the following variables
            | item              | value                                                             | type         |
            | analytics         | analytics/glomo_base                                              | json schema  |
            | version DL        | 20250414_5.0                                                      | string       |
            | page name         | app:privada:personas:notificaciones:movimientos de dinero:detalle | string       |
            | level 1           | notificaciones                                                    | string       |
            | level 2           | movimientos de dinero                                             | string       |
            | level 3           | detalle                                                           | string       |
            | language          | ES                                                                | string       |
            | page area         | privada                                                           | string       |
            | page intent       | informacion                                                       | string       |
            | channel           | online                                                            | string       |
            | page instance ID  | de                                                                | string       |
            | page info version | appVersion                                                        | regexp named |
            | page segment      | personas                                                          | string       |
            | sysEnv            | app                                                               | string       |
            | business unit     | BBVA Mexico                                                       | string       |
            | site app name     | App BBVA Mexico                                                   | string       |
            | device mobile     | si                                                                | string       |
            | user userState    | logado                                                            | string       |
            | profile ID        | profileID                                                         | regexp named |
            | project name      | Glomo                                                             | string       |
            | user age          | age                                                               | regexp named |
            | user gender       | gender                                                            | regexp named |

    @ANA_NLPT003
    @analytics
    @vbank
    @MX @android @ios
    @web
    @backend(test)
    @web-done
    Scenario: Notification List Phase Two - analytics event App Page View detail alert Phase Two
        Given a user with the following criteria
            | criteria              |
            | notifications phase 2 |
        And the user accesses to dashboard
        When the user accesses center notification
        And the user access detail notification "alert"
        Then the device contains the following variables
            | item                | value                                                           | type         |
            | analytics           | analytics/glomo_base                                            | json schema  |
            | version dl          | 20250414_5.0                                                    | string       |
            | page name           | app:privada:personas:notificaciones:mensajes importantes:detalle | string       |
            | level 1             | notificaciones                                                  | string       |
            | level 2             | mensajes importantes                                            | string       |
            | level 3             | detalle                                                         | string       |
            | language            | ES                                                              | string       |
            | page area           | privada                                                         | string       |
            | page intent         | informacion                                                     | string       |
            | channel             | online                                                          | string       |
            | page instance ID    | de                                                              | string       |
            | page info version   | appVersion                                                      | regexp named |
            | page segment        | personas                                                        | string       |
            | sysEnv              | app                                                             | string       |
            | business unit       | BBVA Mexico                                                     | string       |
            | project name        | Glomo                                                           | string       |
            | device mobile       | si                                                              | string       |
            | user userState      | logado                                                          | string       |
            | user segment global | 003001                                                          | string       |
            | profile ID          | profileID                                                       | regexp named |
            | user age            | age                                                             | regexp named |
            | user gender         | gender                                                          | regexp named |

    @ANA_NLPT004
    @analytics
    @vbank
    @MX @android @ios
    @web
    @backend(test)
    @web-done
    Scenario: Notification List - analytics event App Page View detail promotion Phase Two
        Given a user with the following criteria
            | criteria              |
            | notifications phase 2 |
        And the user accesses to dashboard
        And the user accesses center notification
        When the user access detail notification "promotion"
        Then the device contains the following variables
            | item                | value                                                             | type         |
            | analytics           | analytics/glomo_base                                              | json schema  |
            | version dl          | 20250414_5.0                                                      | string       |
            | page name           | app:privada:personas:notificaciones:ofertas y promociones:detalle | string       |
            | level 1             | notificaciones                                                    | string       |
            | level 2             | ofertas y promociones                                             | string       |
            | level 3             | detalle                                                           | string       |
            | language            | ES                                                                | string       |
            | page area           | privada                                                           | string       |
            | page intent         | informacion                                                       | string       |
            | channel             | online                                                            | string       |
            | page instance ID    | de                                                                | string       |
            | page info version   | appVersion                                                        | regexp named |
            | page segment        | personas                                                          | string       |
            | sysEnv              | app                                                               | string       |
            | business unit       | BBVA Mexico                                                       | string       |
            | project name        | Glomo                                                             | string       |
            | device mobile       | si                                                                | string       |
            | user userState      | logado                                                            | string       |
            | user segment global | 003001                                                            | string       |
            | profile ID          | profileID                                                         | regexp named |
            | user age            | age                                                               | regexp named |
            | user gender         | gender                                                            | regexp named |

    @ANA_NLPT005
    @analytics
    @vbank
    @MX @android @ios
    @web
    @backend(test)
    @web-done
    Scenario: Notification List - analytics event App Page View informative warning Phase Two
        Given a user with the following criteria
            | criteria              |
            | notifications phase 2 |
        And the user accesses to dashboard
        And the user accesses center notification
        When the user access detail notification "informative warning"
        Then the device contains the following variables
            | item                | value                                                            | type         |
            | analytics           | analytics/glomo_base                                             | json schema  |
            | version DL          | 20250414_5.0                                                     | string       |
            | page name           | app:privada:personas:notificaciones:avisos informativos:detalle  | string       |
            | level 1             | notificaciones                                                   | string       |
            | level 2             | avisos informativos                                              | string       |
            | level 3             | detalle                                                          | string       |
            | language            | ES                                                               | string       |
            | page area           | privada                                                          | string       |
            | page intent         | informacion                                                      | string       |
            | channel             | online                                                           | string       |
            | page instance ID    | de                                                               | string       |
            | page info version   | appVersion                                                       | regexp named |
            | page segment        | personas                                                         | string       |
            | sysEnv              | app                                                              | string       |
            | business unit       | BBVA Mexico                                                      | string       |
            | device mobile       | si                                                               | string       |
            | user userState      | logado                                                           | string       |
            | user segment global | 003001                                                           | string       |
            | profile ID          | profileID                                                        | regexp named |
            | project name        | Glomo                                                            | string       |
            | user age            | age                                                              | regexp named |
            | user gender         | gender                                                           | regexp named |

    @ANA_EVENT_NLPT006
    @analytics
    @vbank
    @MX @android @ios
    @web
    @backend(test)
    @web-done
    Scenario: Notification List - analytics event App Page View whitout notifications Phase Two
        Given a user with the following criteria
            | criteria              |
            | notifications phase 2 |
        And the user accesses to dashboard
        And the analytics interceptor service is initiated
        When the user accesses center notification
        Then the analytics events contains the following variables
            | item                | value                                                  | type         | event     |
            | analytics           | analytics/glomo_base                                   | json schema  | Page View |
            | version dl          | 20250414_5.0                                           | string       | Page View |
            | page name           | app:privada:personas:notificaciones:sin notificaciones | string       | Page View |
            | level 1             | notificaciones                                         | string       | Page View |
            | language            | ES                                                     | string       | Page View |
            | page area           | privada                                                | string       | Page View |
            | page intent         | informacion                                            | string       | Page View |
            | channel             | online                                                 | string       | Page View |
            | page instance ID    | de                                                     | string       | Page View |
            | page info version   | appVersion                                             | regexp named | Page View |
            | page segment        | personas                                               | string       | Page View |
            | sysEnv              | app                                                    | string       | Page View |
            | business unit       | BBVA Mexico                                            | string       | Page View |
            | project name        | Glomo                                                  | string       | Page View |
            | device mobile       | si                                                     | string       | Page View |
            | user userState      | logado                                                 | string       | Page View |
            | user segment global | 003001                                                 | string       | Page View |
            | profile ID          | profileID                                              | regexp named | Page View |
            | user age            | age                                                    | regexp named | Page View |
            | user gender         | gender                                                 | regexp named | Page View |

    @ANA_EVENT_NLPT007
    @analytics
    @vbank
    @MX @android @ios
    @web
    @backend(test)
    @web-done
    Scenario: Notification List - analytics event App Page View filter page Phase Two
        Given a user with the following criteria
            | criteria              |
            | notifications phase 2 |
        And the user accesses to dashboard
        And the user accesses center notification
        And the analytics interceptor service is initiated
        When the user access notification filter list
        Then the analytics events contains the following variables
            | item                | value                                       | type         | event     |
            | analytics           | analytics/glomo_base                        | json schema  | Page View |
            | version dl          | 20250414_5.0                                | string       | Page View |
            | page name           | app:privada:personas:notificaciones:filtrar | string       | Page View |
            | level 1             | notificaciones                              | string       | Page View |
            | level 2             | filtrar                                     | string       | Page View |
            | language            | ES                                          | string       | Page View |
            | page area           | privada                                     | string       | Page View |
            | page intent         | informacion                                 | string       | Page View |
            | channel             | online                                      | string       | Page View |
            | page instance ID    | de                                          | string       | Page View |
            | page info version   | appVersion                                  | regexp named | Page View |
            | page segment        | personas                                    | string       | Page View |
            | sysEnv              | app                                         | string       | Page View |
            | business unit       | BBVA Mexico                                 | string       | Page View |
            | project name        | Glomo                                       | string       | Page View |
            | device mobile       | si                                          | string       | Page View |
            | user userState      | logado                                      | string       | Page View |
            | user segment global | 003001                                      | string       | Page View |
            | profile ID          | profileID                                   | regexp named | Page View |
            | user age            | age                                         | regexp named | Page View |
            | user gender         | gender                                      | regexp named | Page View |

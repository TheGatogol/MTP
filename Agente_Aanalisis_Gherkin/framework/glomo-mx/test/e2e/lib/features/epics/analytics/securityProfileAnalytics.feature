@SecurityProfile @SecurityProfileAnalytics
Feature: Analytics - Security Profile

    @ANA_EVENT_SP001
    @analytics
    @MX @backend(test)
    @ios @android @web @web-done
    @vbank
    Scenario: Page View - User accesses to security profile page
        Given a user with the following criteria
            | criteria                |
            | security profile detail |
        And the user accesses to dashboard
        And the analytics interceptor service is initiated
        When the user access to security profile
        Then the analytics events contains the following variables:
            | item                    | value                                                               | type             | event     |
            | version DL              | 20250414_5.0                                                        | string           | Page View |
            | analytics               | analytics/glomo_base                                                | json schema      | Page View |
            | page name               | app:privada:general:seguridad y privacidad:seguridad adicional      | string           | Page View |
            | level 1                 | seguridad y privacidad                                              | string           | Page View |
            | level 2                 | seguridad adicional                                                 | string           | Page View |
            | language                | ES                                                                  | string           | Page View |
            | page area               | privada                                                             | string           | Page View |
            | page intent             | informacion                                                         | string           | Page View |
            | channel                 | online                                                              | string           | Page View |
            | page instance ID        | de                                                                  | string           | Page View |
            | page info version       | appVersion                                                          | regexp named     | Page View |
            | page segment            | general                                                             | string           | Page View |
            | sysEnv                  | app                                                                 | string           | Page View |
            | business unit           | BBVA Mexico                                                         | string           | Page View |
            | site app name           | App BBVA Mexico                                                     | string           | Page View |
            | project name            | Glomo                                                               | string           | Page View |
            | device mobile           | si                                                                  | string           | Page View |
            | user userState          | logado                                                              | string           | Page View |
            | user segment global     | 003001                                                              | string           | Page View |
            | profile ID              | profileID                                                           | regexp named     | Page View |
            | user age                | age                                                                 | regexp named     | Page View |
            | user gender             | gender                                                              | regexp named     | Page View |
            | custom fields           | securityLevel                                                       | regexp named     | Page View |
            | internal campaign       |                                                                     | empty array      | Page View |
            | optimization attributes |                                                                     | empty array      | Page View |
            | application             |                                                                     | empty str object | Page View |
            | products attributes     |                                                                     | empty array      | Page View |

    @ANA_EVENT_SP002
    @analytics
    @MX @backend(test)
    @ios @android @web @web-done
    @vbank
    Scenario: Internal Link - User accesses to screen lock from security profile
        Given a user with the following criteria
            | criteria                |
            | security profile detail |
        And the user accesses to dashboard
        And the user access to security profile
        And the analytics interceptor service is initiated
        When the user accesses to "screen lock" option on the security profile site
        Then the analytics events contains the following variables:
            | item                    | value                                                               | type             | event         |
            | version DL              | 20250414_5.0                                                        | string           | Internal Link |
            | analytics               | analytics/glomo_base                                                | json schema      | Internal Link |
            | page name               | app:privada:general:seguridad y privacidad:seguridad adicional      | string           | Internal Link |
            | level 1                 | seguridad y privacidad                                              | string           | Internal Link |
            | level 2                 | seguridad adicional                                                 | string           | Internal Link |
            | link name               | activa el bloqueo de pantalla                                       | string           | Internal Link |
            | language                | ES                                                                  | string           | Internal Link |
            | page area               | privada                                                             | string           | Internal Link |
            | page intent             | informacion                                                         | string           | Internal Link |
            | channel                 | online                                                              | string           | Internal Link |
            | page instance ID        | de                                                                  | string           | Internal Link |
            | page info version       | appVersion                                                          | regexp named     | Internal Link |
            | page segment            | general                                                             | string           | Internal Link |
            | sysEnv                  | app                                                                 | string           | Internal Link |
            | business unit           | BBVA Mexico                                                         | string           | Internal Link |
            | site app name           | App BBVA Mexico                                                     | string           | Internal Link |
            | project name            | Glomo                                                               | string           | Internal Link |
            | device mobile           | si                                                                  | string           | Internal Link |
            | user userState          | logado                                                              | string           | Internal Link |
            | user segment global     | 003001                                                              | string           | Internal Link |
            | profile ID              | profileID                                                           | regexp named     | Internal Link |
            | user age                | age                                                                 | regexp named     | Internal Link |
            | user gender             | gender                                                              | regexp named     | Internal Link |
            | custom fields           | securityLevel                                                       | regexp named     | Internal Link |
            | internal campaign       |                                                                     | empty array      | Internal Link |
            | optimization attributes |                                                                     | empty array      | Internal Link |
            | application             |                                                                     | empty str object | Internal Link |
            | products attributes     |                                                                     | empty array      | Internal Link |

    @ANA_EVENT_SP003
    @analytics
    @MX @backend(test)
    @ios @android @web @web-done
    @vbank
    Scenario: Internal Link - User accesses to notifications from security profile
        Given a user with the following criteria
            | criteria                |
            | security profile detail |
        And the user accesses to dashboard
        And the user access to security profile
        And the analytics interceptor service is initiated
        When the user accesses to "notifications" option on the security profile site
        Then the analytics events contains the following variables:
            | item                    | value                                                               | type             | event         |
            | version DL              | 20250414_5.0                                                        | string           | Internal Link |
            | analytics               | analytics/glomo_base                                                | json schema      | Internal Link |
            | page name               | app:privada:general:seguridad y privacidad:seguridad adicional      | string           | Internal Link |
            | level 1                 | seguridad y privacidad                                              | string           | Internal Link |
            | level 2                 | seguridad adicional                                                 | string           | Internal Link |
            | link name               | activa las notificaciones                                           | string           | Internal Link |
            | language                | ES                                                                  | string           | Internal Link |
            | page area               | privada                                                             | string           | Internal Link |
            | page intent             | informacion                                                         | string           | Internal Link |
            | channel                 | online                                                              | string           | Internal Link |
            | page instance ID        | de                                                                  | string           | Internal Link |
            | page info version       | appVersion                                                          | regexp named     | Internal Link |
            | page segment            | general                                                             | string           | Internal Link |
            | sysEnv                  | app                                                                 | string           | Internal Link |
            | business unit           | BBVA Mexico                                                         | string           | Internal Link |
            | site app name           | App BBVA Mexico                                                     | string           | Internal Link |
            | project name            | Glomo                                                               | string           | Internal Link |
            | device mobile           | si                                                                  | string           | Internal Link |
            | user userState          | logado                                                              | string           | Internal Link |
            | user segment global     | 003001                                                              | string           | Internal Link |
            | profile ID              | profileID                                                           | regexp named     | Internal Link |
            | user age                | age                                                                 | regexp named     | Internal Link |
            | user gender             | gender                                                              | regexp named     | Internal Link |
            | custom fields           | securityLevel                                                       | regexp named     | Internal Link |
            | internal campaign       |                                                                     | empty array      | Internal Link |
            | optimization attributes |                                                                     | empty array      | Internal Link |
            | application             |                                                                     | empty str object | Internal Link |
            | products attributes     |                                                                     | empty array      | Internal Link |

    @ANA_EVENT_SP004
    @analytics
    @MX @backend(test)
    @ios @android @web @web-done
    @vbank
    Scenario: Internal Link - User accesses to security tips from security profile
        Given a user with the following criteria
            | criteria                |
            | security profile detail |
        And the user accesses to dashboard
        And the user access to security profile
        And the analytics interceptor service is initiated
        When the user accesses to "security tips" option on the security profile site
        Then the analytics events contains the following variables:
            | item                    | value                                                               | type             | event         |
            | version DL              | 20250414_5.0                                                        | string           | Internal Link |
            | analytics               | analytics/glomo_base                                                | json schema      | Internal Link |
            | page name               | app:privada:general:seguridad y privacidad:seguridad adicional      | string           | Internal Link |
            | level 1                 | seguridad y privacidad                                              | string           | Internal Link |
            | level 2                 | seguridad adicional                                                 | string           | Internal Link |
            | link name               | revisa los consejos de seguridad                                    | string           | Internal Link |
            | language                | ES                                                                  | string           | Internal Link |
            | page area               | privada                                                             | string           | Internal Link |
            | page intent             | informacion                                                         | string           | Internal Link |
            | channel                 | online                                                              | string           | Internal Link |
            | page instance ID        | de                                                                  | string           | Internal Link |
            | page info version       | appVersion                                                          | regexp named     | Internal Link |
            | page segment            | general                                                             | string           | Internal Link |
            | sysEnv                  | app                                                                 | string           | Internal Link |
            | business unit           | BBVA Mexico                                                         | string           | Internal Link |
            | site app name           | App BBVA Mexico                                                     | string           | Internal Link |
            | project name            | Glomo                                                               | string           | Internal Link |
            | device mobile           | si                                                                  | string           | Internal Link |
            | user userState          | logado                                                              | string           | Internal Link |
            | user segment global     | 003001                                                              | string           | Internal Link |
            | profile ID              | profileID                                                           | regexp named     | Internal Link |
            | user age                | age                                                                 | regexp named     | Internal Link |
            | user gender             | gender                                                              | regexp named     | Internal Link |
            | custom fields           | securityLevel                                                       | regexp named     | Internal Link |
            | internal campaign       |                                                                     | empty array      | Internal Link |
            | optimization attributes |                                                                     | empty array      | Internal Link |
            | application             |                                                                     | empty str object | Internal Link |
            | products attributes     |                                                                     | empty array      | Internal Link |

    @ANA_EVENT_SP005
    @analytics
    @MX @backend(test)
    @ios @android @web @web-done
    @vbank
    Scenario: Internal Link - User accesses to discreet mode from security profile
        Given a user with the following criteria
            | criteria                |
            | security profile detail |
        And the user accesses to dashboard
        And the user access to security profile
        And the analytics interceptor service is initiated
        When the user accesses to "discreet mode" option on the security profile site
        Then the analytics events contains the following variables:
            | item                    | value                                                               | type             | event         |
            | version DL              | 20250414_5.0                                                        | string           | Internal Link |
            | analytics               | analytics/glomo_base                                                | json schema      | Internal Link |
            | page name               | app:privada:general:seguridad y privacidad:seguridad adicional      | string           | Internal Link |
            | level 1                 | seguridad y privacidad                                              | string           | Internal Link |
            | level 2                 | seguridad adicional                                                 | string           | Internal Link |
            | link name               | activa el modo discreto                                             | string           | Internal Link |
            | language                | ES                                                                  | string           | Internal Link |
            | page area               | privada                                                             | string           | Internal Link |
            | page intent             | informacion                                                         | string           | Internal Link |
            | channel                 | online                                                              | string           | Internal Link |
            | page instance ID        | de                                                                  | string           | Internal Link |
            | page info version       | appVersion                                                          | regexp named     | Internal Link |
            | page segment            | general                                                             | string           | Internal Link |
            | sysEnv                  | app                                                                 | string           | Internal Link |
            | business unit           | BBVA Mexico                                                         | string           | Internal Link |
            | site app name           | App BBVA Mexico                                                     | string           | Internal Link |
            | project name            | Glomo                                                               | string           | Internal Link |
            | device mobile           | si                                                                  | string           | Internal Link |
            | user userState          | logado                                                              | string           | Internal Link |
            | user segment global     | 003001                                                              | string           | Internal Link |
            | profile ID              | profileID                                                           | regexp named     | Internal Link |
            | user age                | age                                                                 | regexp named     | Internal Link |
            | user gender             | gender                                                              | regexp named     | Internal Link |
            | custom fields           | securityLevel                                                       | regexp named     | Internal Link |
            | internal campaign       |                                                                     | empty array      | Internal Link |
            | optimization attributes |                                                                     | empty array      | Internal Link |
            | application             |                                                                     | empty str object | Internal Link |
            | products attributes     |                                                                     | empty array      | Internal Link |

    @ANA_EVENT_SP006
    @analytics
    @MX @backend(test)
    @ios @android @web @web-done
    @vbank
    Scenario: Internal Link - User accesses to fido from security profile
        Given a user with the following criteria
            | criteria                |
            | security profile detail |
        And the user accesses to dashboard
        And the user access to security profile
        And the analytics interceptor service is initiated
        When the user accesses to "fido" option on the security profile site
        Then the analytics events contains the following variables:
            | item                    | value                                                               | type             | event         |
            | version DL              | 20250414_5.0                                                        | string           | Internal Link |
            | analytics               | analytics/glomo_base                                                | json schema      | Internal Link |
            | page name               | app:privada:general:seguridad y privacidad:seguridad adicional      | string           | Internal Link |
            | level 1                 | seguridad y privacidad                                              | string           | Internal Link |
            | level 2                 | seguridad adicional                                                 | string           | Internal Link |
            | link name               | acceso agil y seguro                                                | string           | Internal Link |
            | language                | ES                                                                  | string           | Internal Link |
            | page area               | privada                                                             | string           | Internal Link |
            | page intent             | informacion                                                         | string           | Internal Link |
            | channel                 | online                                                              | string           | Internal Link |
            | page instance ID        | de                                                                  | string           | Internal Link |
            | page info version       | appVersion                                                          | regexp named     | Internal Link |
            | page segment            | general                                                             | string           | Internal Link |
            | sysEnv                  | app                                                                 | string           | Internal Link |
            | business unit           | BBVA Mexico                                                         | string           | Internal Link |
            | site app name           | App BBVA Mexico                                                     | string           | Internal Link |
            | project name            | Glomo                                                               | string           | Internal Link |
            | device mobile           | si                                                                  | string           | Internal Link |
            | user userState          | logado                                                              | string           | Internal Link |
            | user segment global     | 003001                                                              | string           | Internal Link |
            | profile ID              | profileID                                                           | regexp named     | Internal Link |
            | user age                | age                                                                 | regexp named     | Internal Link |
            | user gender             | gender                                                              | regexp named     | Internal Link |
            | custom fields           | securityLevel                                                       | regexp named     | Internal Link |
            | internal campaign       |                                                                     | empty array      | Internal Link |
            | optimization attributes |                                                                     | empty array      | Internal Link |
            | application             |                                                                     | empty str object | Internal Link |
            | products attributes     |                                                                     | empty array      | Internal Link |

    @ANA_EVENT_SP007
    @analytics
    @MX @backend(test)
    @ios @android @web @web-done
    @vbank
    Scenario: Internal Link - User accesses to identity document from security profile
        Given a user with the following criteria
            | criteria                |
            | security profile detail |
        And the user accesses to dashboard
        And the user access to security profile
        And the analytics interceptor service is initiated
        When the user accesses to "identity document" option on the security profile site
        Then the analytics events contains the following variables:
            | item                    | value                                                               | type             | event         |
            | version DL              | 20250414_5.0                                                        | string           | Internal Link |
            | analytics               | analytics/glomo_base                                                | json schema      | Internal Link |
            | page name               | app:privada:general:seguridad y privacidad:seguridad adicional      | string           | Internal Link |
            | level 1                 | seguridad y privacidad                                              | string           | Internal Link |
            | level 2                 | seguridad adicional                                                 | string           | Internal Link |
            | link name               | actualiza tu identificacion                                         | string           | Internal Link |
            | language                | ES                                                                  | string           | Internal Link |
            | page area               | privada                                                             | string           | Internal Link |
            | page intent             | informacion                                                         | string           | Internal Link |
            | channel                 | online                                                              | string           | Internal Link |
            | page instance ID        | de                                                                  | string           | Internal Link |
            | page info version       | appVersion                                                          | regexp named     | Internal Link |
            | page segment            | general                                                             | string           | Internal Link |
            | sysEnv                  | app                                                                 | string           | Internal Link |
            | business unit           | BBVA Mexico                                                         | string           | Internal Link |
            | site app name           | App BBVA Mexico                                                     | string           | Internal Link |
            | project name            | Glomo                                                               | string           | Internal Link |
            | device mobile           | si                                                                  | string           | Internal Link |
            | user userState          | logado                                                              | string           | Internal Link |
            | user segment global     | 003001                                                              | string           | Internal Link |
            | profile ID              | profileID                                                           | regexp named     | Internal Link |
            | user age                | age                                                                 | regexp named     | Internal Link |
            | user gender             | gender                                                              | regexp named     | Internal Link |
            | custom fields           | securityLevel                                                       | regexp named     | Internal Link |
            | internal campaign       |                                                                     | empty array      | Internal Link |
            | optimization attributes |                                                                     | empty array      | Internal Link |
            | application             |                                                                     | empty str object | Internal Link |
            | products attributes     |                                                                     | empty array      | Internal Link |

    @ANA_EVENT_SP008
    @analytics
    @MX @backend(test)
    @ios @android @web @web-done
    @vbank
    Scenario: Page View - User accesses to completed actions page
        Given a user with the following criteria
            | criteria                |
            | security profile detail |
        And the user accesses to dashboard
        And the user access to security profile
        And the analytics interceptor service is initiated
        When the user access to completed actions
        Then the analytics events contains the following variables:
            | item                    | value                                                                   | type             | event     |
            | version DL              | 20250414_5.0                                                            | string           | Page View |
            | analytics               | analytics/glomo_base                                                    | json schema      | Page View |
            | page name               | app:privada:general:seguridad y privacidad:recomendaciones completadas  | string           | Page View |
            | level 1                 | seguridad y privacidad                                                  | string           | Page View |
            | level 2                 | recomendaciones completadas                                             | string           | Page View |
            | language                | ES                                                                      | string           | Page View |
            | page area               | privada                                                                 | string           | Page View |
            | page intent             | informacion                                                             | string           | Page View |
            | channel                 | online                                                                  | string           | Page View |
            | page instance ID        | de                                                                      | string           | Page View |
            | page info version       | appVersion                                                              | regexp named     | Page View |
            | page segment            | general                                                                 | string           | Page View |
            | sysEnv                  | app                                                                     | string           | Page View |
            | business unit           | BBVA Mexico                                                             | string           | Page View |
            | site app name           | App BBVA Mexico                                                         | string           | Page View |
            | project name            | Glomo                                                                   | string           | Page View |
            | device mobile           | si                                                                      | string           | Page View |
            | user userState          | logado                                                                  | string           | Page View |
            | user segment global     | 003001                                                                  | string           | Page View |
            | profile ID              | profileID                                                               | regexp named     | Page View |
            | user age                | age                                                                     | regexp named     | Page View |
            | user gender             | gender                                                                  | regexp named     | Page View |
            | internal campaign       |                                                                         | empty array      | Page View |
            | optimization attributes |                                                                         | empty array      | Page View |
            | application             |                                                                         | empty str object | Page View |
            | products attributes     |                                                                         | empty array      | Page View |

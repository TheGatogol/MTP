@emergencyZoneAnalytics
Feature: Analytics - emergency zone

    @ANA_EZ001
    @analytics
    @web
    @web-done
    @backend(test)
    @MX
    @vbank
    Scenario: EZ - Visit The Page Of The Emergency Zone Application
        Given a user with the following criteria
            | criteria       |
            | emergency zone |
        And the user accesses to dashboard
        And the analytics interceptor service is initiated
        When the user enters the emergency zone menu
        Then the analytics events contains the following variables:
            | item                    | value                                                      | type             | event     |
            | analytics               | analytics/glomo_base                                       | json schema      | Page View |
            | version DL              | 20250414_5.0                                               | string           | Page View |
            | page name               | app:privada:personas:emergencias:operaciones de emergencia | string           | Page View |
            | level 1                 | emergencias                                                | string           | Page View |
            | level 2                 | operaciones de emergencia                                  | string           | Page View |
            | language                | ES                                                         | string           | Page View |
            | page area               | privada                                                    | string           | Page View |
            | page intent             | informacion                                                | string           | Page View |
            | channel                 | online                                                     | string           | Page View |
            | page instance ID        | de                                                         | string           | Page View |
            | page info version       | appVersion                                                 | regexp named     | Page View |
            | page segment            | personas                                                   | string           | Page View |
            | sysEnv                  | app                                                        | string           | Page View |
            | business unit           | BBVA Mexico                                                | string           | Page View |
            | site app name           | App BBVA Mexico                                            | string           | Page View |
            | project name            | Glomo                                                      | string           | Page View |
            | device mobile           | si                                                         | string           | Page View |
            | user userState          | logado                                                     | string           | Page View |
            | user segment global     | 003001                                                     | string           | Page View |
            | profile ID              | profileID                                                  | regexp named     | Page View |
            | user gender             | gender                                                     | regexp named     | Page View |
            | user age                | age                                                        | regexp named     | Page View |
            | internal campaign       |                                                            | empty array      | Page View |
            | optimization attributes |                                                            | empty array      | Page View |
            | application             |                                                            | empty str object | Page View |
            | products attributes     |                                                            | empty array      | Page View |

    @ANA_EZ002
    @analytics
    @web
    @web-done
    @backend(test)
    @MX
    @vbank
    Scenario: EZ - Load Event When Tapping On A First Element Of The Main List
        Given a user with the following criteria
            | criteria       |
            | emergency zone |
        And the user accesses to dashboard
        And the analytics interceptor service is initiated
        When the user enters the section where I can't find my card or it was stolen
        Then the analytics events contains the following variables:
            | item                    | value                                                      | type             | event         |
            | analytics               | analytics/glomo_base                                       | json schema      | Internal Link |
            | version DL              | 20250414_5.0                                               | string           | Internal Link |
            | page name               | app:privada:personas:emergencias:operaciones de emergencia | string           | Internal Link |
            | level 1                 | emergencias                                                | string           | Internal Link |
            | level 2                 | operaciones de emergencia                                  | string           | Internal Link |
            | language                | ES                                                         | string           | Internal Link |
            | page area               | privada                                                    | string           | Internal Link |
            | page intent             | informacion                                                | string           | Internal Link |
            | channel                 | online                                                     | string           | Internal Link |
            | page instance ID        | de                                                         | string           | Internal Link |
            | page info version       | appVersion                                                 | regexp named     | Internal Link |
            | page segment            | personas                                                   | string           | Internal Link |
            | sysEnv                  | app                                                        | string           | Internal Link |
            | business unit           | BBVA Mexico                                                | string           | Internal Link |
            | site app name           | App BBVA Mexico                                            | string           | Internal Link |
            | project name            | Glomo                                                      | string           | Internal Link |
            | link name               | no encuentro o me robaron mi tarjeta                       | string           | Internal Link |
            | device mobile           | si                                                         | string           | Internal Link |
            | user userState          | logado                                                     | string           | Internal Link |
            | user segment global     | 003001                                                     | string           | Internal Link |
            | profile ID              | profileID                                                  | regexp named     | Internal Link |
            | user gender             | gender                                                     | regexp named     | Internal Link |
            | user age                | age                                                        | regexp named     | Internal Link |
            | internal campaign       |                                                            | empty array      | Internal Link |
            | optimization attributes |                                                            | empty array      | Internal Link |
            | application             |                                                            | empty str object | Internal Link |
            | products attributes     |                                                            | empty array      | Internal Link |

    @ANA_EZ003
    @analytics
    @web
    @web-done
    @backend(test)
    @MX
    @vbank
    Scenario: EZ - I Can't Find Or My Card Was Stolen
        Given a user with the following criteria
            | criteria       |
            | emergency zone |
        And the user accesses to dashboard
        And the user enters the emergency zone menu
        And the analytics interceptor service is initiated
        When the user enters the section where I can't find my card or it was stolen
        Then the analytics events contains the following variables:
            | item                    | value                                                                 | type             | event     |
            | analytics               | analytics/glomo_base                                                  | json schema      | Page View |
            | version DL              | 20250414_5.0                                                          | string           | Page View |
            | page name               | app:privada:personas:emergencias:no encuentro o me robaron mi tarjeta | string           | Page View |
            | level 1                 | emergencias                                                           | string           | Page View |
            | level 2                 | no encuentro o me robaron mi tarjeta                                  | string           | Page View |
            | language                | ES                                                                    | string           | Page View |
            | page area               | privada                                                               | string           | Page View |
            | page intent             | informacion                                                           | string           | Page View |
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
            | user segment global     | 003001                                                                | string           | Page View |
            | profile ID              | profileID                                                             | regexp named     | Page View |
            | user gender             | gender                                                                | regexp named     | Page View |
            | user age                | age                                                                   | regexp named     | Page View |
            | internal campaign       |                                                                       | empty array      | Page View |
            | optimization attributes |                                                                       | empty array      | Page View |
            | application             |                                                                       | empty str object | Page View |
            | products attributes     |                                                                       | empty array      | Page View |

    @ANA_EZ004
    @analytics
    @web
    @web-done
    @backend(test)
    @MX
    @vbank
    Scenario: EZ - Turn Card On Or Off
        Given a user with the following criteria
            | criteria       |
            | emergency zone |
        And the user accesses to dashboard
        And the user enters the section where I can't find my card or it was stolen
        And the analytics interceptor service is initiated
        When the user enter to toggle card section
        Then the analytics events contains the following variables:
            | item                    | value                                                      | type             | event     |
            | analytics               | analytics/glomo_base                                       | json schema      | Page View |
            | version DL              | 20250414_5.0                                               | string           | Page View |
            | page name               | app:privada:personas:emergencias:apagar o encender tarjeta | string           | Page View |
            | level 1                 | emergencias                                                | string           | Page View |
            | level 2                 | apagar o encender tarjeta                                  | string           | Page View |
            | language                | ES                                                         | string           | Page View |
            | page area               | privada                                                    | string           | Page View |
            | page intent             | informacion                                                | string           | Page View |
            | channel                 | online                                                     | string           | Page View |
            | page instance ID        | de                                                         | string           | Page View |
            | page info version       | appVersion                                                 | regexp named     | Page View |
            | page segment            | personas                                                   | string           | Page View |
            | sysEnv                  | app                                                        | string           | Page View |
            | business unit           | BBVA Mexico                                                | string           | Page View |
            | site app name           | App BBVA Mexico                                            | string           | Page View |
            | project name            | Glomo                                                      | string           | Page View |
            | device mobile           | si                                                         | string           | Page View |
            | user userState          | logado                                                     | string           | Page View |
            | user segment global     | 003001                                                     | string           | Page View |
            | profile ID              | profileID                                                  | regexp named     | Page View |
            | user gender             | gender                                                     | regexp named     | Page View |
            | user age                | age                                                        | regexp named     | Page View |
            | user age                | age                                                        | regexp named     | Page View |
            | internal campaign       |                                                            | empty array      | Page View |
            | optimization attributes |                                                            | empty array      | Page View |
            | application             |                                                            | empty str object | Page View |
            | products attributes     |                                                            | empty array      | Page View |

    @ANA_EZ005
    @analytics
    @web @spherica
    @web-done
    @backend(test)
    @MX
    @vbank
    Scenario: EZ - Power Off Button Card Spherica
        Given a user with the following criteria
            | criteria       |
            | emergency zone |
        And the user accesses to dashboard
        And the user enter to toggle card section
        And the analytics interceptor service is initiated
        When the user turn on or off a card
        Then the analytics events contains the following variables:
            | item                    | value                                                      | type             | event            |
            | analytics               | analytics/glomo_base                                       | json schema      | Interaction Link |
            | version DL              | 20250414_5.0                                               | string           | Interaction Link |
            | page name               | app:privada:personas:emergencias:apagar o encender tarjeta | string           | Interaction Link |
            | level 1                 | emergencias                                                | string           | Interaction Link |
            | level 2                 | apagar o encender tarjeta                                  | string           | Interaction Link |
            | language                | ES                                                         | string           | Interaction Link |
            | page area               | privada                                                    | string           | Interaction Link |
            | page intent             | informacion                                                | string           | Interaction Link |
            | channel                 | online                                                     | string           | Interaction Link |
            | page instance ID        | de                                                         | string           | Interaction Link |
            | page info version       | appVersion                                                 | regexp named     | Interaction Link |
            | page segment            | personas                                                   | string           | Interaction Link |
            | sysEnv                  | app                                                        | string           | Interaction Link |
            | business unit           | BBVA Mexico                                                | string           | Interaction Link |
            | site app name           | App BBVA Mexico                                            | string           | Interaction Link |
            | project name            | Glomo                                                      | string           | Interaction Link |
            | link name               | apagar tarjeta                                             | string           | Interaction Link |
            | device mobile           | si                                                         | string           | Interaction Link |
            | user userState          | logado                                                     | string           | Interaction Link |
            | user segment global     | 003001                                                     | string           | Interaction Link |
            | profile ID              | profileID                                                  | regexp named     | Interaction Link |
            | user gender             | gender                                                     | regexp named     | Interaction Link |
            | user age                | age                                                        | regexp named     | Interaction Link |
            | internal campaign       |                                                            | empty array      | Interaction Link |
            | optimization attributes |                                                            | empty array      | Interaction Link |
            | application             |                                                            | empty str object | Interaction Link |
            | products attributes     |                                                            | empty array      | Interaction Link |

    @ANA_EZ006
    @analytics
    @web
    @web-done
    @backend(test)
    @MX
    @vbank
    Scenario: EZ - Lock Card
        Given a user with the following criteria
            | criteria       |
            | emergency zone |
        And the user accesses to dashboard
        And the user enters the section where I can't find my card or it was stolen
        And the analytics interceptor service is initiated
        When the user enter to lock card section
        Then the analytics events contains the following variables:
            | item                    | value                                             | type             | event     |
            | analytics               | analytics/glomo_base                              | json schema      | Page View |
            | version DL              | 20250414_5.0                                      | string           | Page View |
            | page name               | app:privada:personas:emergencias:bloquear tarjeta | string           | Page View |
            | level 1                 | emergencias                                       | string           | Page View |
            | level 2                 | bloquear tarjeta                                  | string           | Page View |
            | language                | ES                                                | string           | Page View |
            | page area               | privada                                           | string           | Page View |
            | page intent             | informacion                                       | string           | Page View |
            | channel                 | online                                            | string           | Page View |
            | page instance ID        | de                                                | string           | Page View |
            | page info version       | appVersion                                        | regexp named     | Page View |
            | page segment            | personas                                          | string           | Page View |
            | sysEnv                  | app                                               | string           | Page View |
            | business unit           | BBVA Mexico                                       | string           | Page View |
            | site app name           | App BBVA Mexico                                   | string           | Page View |
            | project name            | Glomo                                             | string           | Page View |
            | device mobile           | si                                                | string           | Page View |
            | user userState          | logado                                            | string           | Page View |
            | user segment global     | 003001                                            | string           | Page View |
            | profile ID              | profileID                                         | regexp named     | Page View |
            | user gender             | gender                                            | regexp named     | Page View |
            | user age                | age                                               | regexp named     | Page View |
            | user age                | age                                               | regexp named     | Page View |
            | internal campaign       |                                                   | empty array      | Page View |
            | optimization attributes |                                                   | empty array      | Page View |
            | application             |                                                   | empty str object | Page View |
            | products attributes     |                                                   | empty array      | Page View |

    @ANA_EZ007
    @analytics
    @web
    @web-done
    @backend(test)
    @MX
    @vbank
    Scenario: EZ - Need To Change Password
        Given a user with the following criteria
            | criteria       |
            | emergency zone |
        And the user accesses to dashboard
        And the user enters the emergency zone menu
        And the analytics interceptor service is initiated
        When the user enter to need to change my password section
        Then the analytics events contains the following variables:
            | item                    | value                                                           | type             | event     |
            | analytics               | analytics/glomo_base                                            | json schema      | Page View |
            | version DL              | 20250414_5.0                                                    | string           | Page View |
            | page name               | app:privada:personas:emergencias:necesito cambiar mi contrasena | string           | Page View |
            | level 1                 | emergencias                                                     | string           | Page View |
            | level 2                 | necesito cambiar mi contrasena                                  | string           | Page View |
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
            | user age                | age                                                             | regexp named     | Page View |
            | internal campaign       |                                                                 | empty array      | Page View |
            | optimization attributes |                                                                 | empty array      | Page View |
            | application             |                                                                 | empty str object | Page View |
            | products attributes     |                                                                 | empty array      | Page View |

    @ANA_EZ008
    @analytics
    @web
    @web-done
    @backend(test)
    @MX
    @vbank
    Scenario: EZ - I Need Cash And My Card Doesn't Work
        Given a user with the following criteria
            | criteria       |
            | emergency zone |
        And the user accesses to dashboard
        And the user enters the emergency zone menu
        And the analytics interceptor service is initiated
        When the user enter to need cash section
        Then the analytics events contains the following variables:
            | item                    | value                                                                       | type             | event     |
            | analytics               | analytics/glomo_base                                                        | json schema      | Page View |
            | version DL              | 20250414_5.0                                                                | string           | Page View |
            | page name               | app:privada:personas:emergencias:necesito efectivo y mi tarjeta no funciona | string           | Page View |
            | level 1                 | emergencias                                                                 | string           | Page View |
            | level 2                 | necesito efectivo y mi tarjeta no funciona                                  | string           | Page View |
            | language                | ES                                                                          | string           | Page View |
            | page area               | privada                                                                     | string           | Page View |
            | page intent             | informacion                                                                 | string           | Page View |
            | channel                 | online                                                                      | string           | Page View |
            | page instance ID        | de                                                                          | string           | Page View |
            | page info version       | appVersion                                                                  | regexp named     | Page View |
            | page segment            | personas                                                                    | string           | Page View |
            | sysEnv                  | app                                                                         | string           | Page View |
            | business unit           | BBVA Mexico                                                                 | string           | Page View |
            | site app name           | App BBVA Mexico                                                             | string           | Page View |
            | project name            | Glomo                                                                       | string           | Page View |
            | device mobile           | si                                                                          | string           | Page View |
            | user userState          | logado                                                                      | string           | Page View |
            | user segment global     | 003001                                                                      | string           | Page View |
            | profile ID              | profileID                                                                   | regexp named     | Page View |
            | user gender             | gender                                                                      | regexp named     | Page View |
            | user age                | age                                                                         | regexp named     | Page View |
            | user age                | age                                                                         | regexp named     | Page View |
            | internal campaign       |                                                                             | empty array      | Page View |
            | optimization attributes |                                                                             | empty array      | Page View |
            | application             |                                                                             | empty str object | Page View |
            | products attributes     |                                                                             | empty array      | Page View |

    @ANA_EZ009
    @analytics
    @web
    @web-done
    @backend(test)
    @MX
    @vbank
    Scenario: EZ - Error When Turning Off The Card
        Given a user with the following criteria
            | criteria       |
            | emergency zone |
        And the user accesses to dashboard
        And the user enter to toggle card section
        And the analytics interceptor service is initiated
        When the user turn on or off a card
        Then the analytics events contains the following variables:
            | item                    | value                                                               | type             | event     |
            | analytics               | analytics/glomo_base                                                | json schema      | Page View |
            | version DL              | 20250414_5.0                                                        | string           | Page View |
            | page name               | app:privada:personas:emergencias:error no es posible apagar tarjeta | string           | Page View |
            | level 1                 | emergencias                                                         | string           | Page View |
            | level 2                 | error no es posible apagar tarjeta                                  | string           | Page View |
            | error page              | error no es posible apagar tarjeta                                  | string           | Page View |
            | language                | ES                                                                  | string           | Page View |
            | page area               | privada                                                             | string           | Page View |
            | page intent             | informacion                                                         | string           | Page View |
            | channel                 | online                                                              | string           | Page View |
            | page instance ID        | de                                                                  | string           | Page View |
            | page info version       | appVersion                                                          | regexp named     | Page View |
            | page segment            | personas                                                            | string           | Page View |
            | sysEnv                  | app                                                                 | string           | Page View |
            | business unit           | BBVA Mexico                                                         | string           | Page View |
            | site app name           | App BBVA Mexico                                                     | string           | Page View |
            | project name            | Glomo                                                               | string           | Page View |
            | device mobile           | si                                                                  | string           | Page View |
            | user userState          | logado                                                              | string           | Page View |
            | user segment global     | 003001                                                              | string           | Page View |
            | profile ID              | profileID                                                           | regexp named     | Page View |
            | user gender             | gender                                                              | regexp named     | Page View |
            | user age                | age                                                                 | regexp named     | Page View |
            | internal campaign       |                                                                     | empty array      | Page View |
            | optimization attributes |                                                                     | empty array      | Page View |
            | application             |                                                                     | empty str object | Page View |
            | products attributes     |                                                                     | empty array      | Page View |

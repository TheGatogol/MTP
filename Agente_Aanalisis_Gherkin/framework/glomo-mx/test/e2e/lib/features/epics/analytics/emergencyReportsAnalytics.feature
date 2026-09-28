@emergencyReportsAnalytics
Feature: Analytics - Emergency Reports

    @ANA_ER001
    @analytics
    @MX
    @web
    @vbank @android @ios
    @backend(test)
    @web-done
    Scenario: Access to the emergency reports screen
        Given a user with the following criteria
            | criteria            |
            | emergency reports   |
        And the user accesses to dashboard
        And the analytics interceptor service is initiated
        When the user goes to "emergency reports" using deeplink navigation
        Then the analytics events contains the following variables
            | item                     | value                                                                | type         | event     |
            | analytics                | analytics/glomo_base                                                 | json schema  | Page View |
            | page name                | app:privada:personas:emergencias:de que es tu emergencia             | string       | Page View |
            | level 1                  | emergencias                                                          | string       | Page View |
            | level 2                  | de que es tu emergencia                                              | string       | Page View |
            | language                 | ES                                                                   | string       | Page View |
            | page area                | privada                                                              | string       | Page View |
            | page intent              | informacion                                                          | string       | Page View |
            | channel                  | online                                                               | string       | Page View |
            | page instance ID         | de                                                                   | string       | Page View |
            | page info version        | appVersion                                                           | regexp named | Page View |
            | page segment             | personas                                                             | string       | Page View |
            | sysEnv                   | app                                                                  | string       | Page View |
            | business unit            | BBVA Mexico                                                          | string       | Page View |
            | site app name            | App BBVA Mexico                                                      | string       | Page View |
            | project name             | Glomo                                                                | string       | Page View |
            | device mobile            | si                                                                   | string       | Page View |
            | user userState           | logado                                                               | string       | Page View |
            | profile ID               | profileID                                                            | regexp named | Page View |
            | user segment global      | 003001                                                               | string       | Page View |
            | user gender              | gender                                                               | regexp named | Page View |
            | user age                 | age                                                                  | regexp named | Page View |

    @ANA_ER002
    @analytics
    @MX
    @web
    @vbank @android @ios
    @backend(test)
    @web-done
    Scenario Outline: Access to the emergency reports menu screen - <emergency>
        Given a user with the following criteria
            | criteria            |
            | emergency reports   |
        And the user accesses to dashboard
        And the user goes to "emergency reports" using deeplink navigation
        When the user access to "<emergency>" screen
        Then the device contains the following variables
            | item                     | value                                                                | type         |
            | analytics                | analytics/glomo_base                                                 | json schema  |
            | page name                | app:privada:personas:emergencias:<page_name>                         | string       |
            | level 1                  | emergencias                                                          | string       |
            | level 2                  | <page_name>                                                          | string       |
            | language                 | ES                                                                   | string       |
            | page area                | privada                                                              | string       |
            | page intent              | informacion                                                          | string       |
            | channel                  | online                                                               | string       |
            | page instance ID         | de                                                                   | string       |
            | page info version        | appVersion                                                           | regexp named |
            | page segment             | personas                                                             | string       |
            | sysEnv                   | app                                                                  | string       |
            | business unit            | BBVA Mexico                                                          | string       |
            | site app name            | App BBVA Mexico                                                      | string       |
            | project name             | Glomo                                                                | string       |
            | device mobile            | si                                                                   | string       |
            | user userState           | logado                                                               | string       |
            | profile ID               | profileID                                                            | regexp named |
            | user segment global      | 003001                                                               | string       |
            | user gender              | gender                                                               | regexp named |
            | user age                 | age                                                                  | regexp named |

        Examples:
            | emergency | page_name |
            | card      | tarjetas  |
            | vehicle   | vehiculo  |

    @ANA_ER003
    @analytics
    @MX
    @web
    @vbank @android @ios
    @backend(test)
    @web-done
    Scenario: Access to lost or stolen card internaly
        Given a user with the following criteria
            | criteria            |
            | emergency reports   |
        And the user accesses to dashboard
        And the user goes to "emergency reports" using deeplink navigation
        And the user access to "card" screen
        And the analytics interceptor service is initiated
        When the user access to report "lost or stolen" screen
        Then the analytics events contains the following variables
            | item                     | value                                                                | type         | event         |
            | analytics                | analytics/glomo_base                                                 | json schema  | Internal Link |
            | page name                | app:privada:personas:emergencias:tarjetas                            | string       | Internal Link |
            | level 1                  | emergencias                                                          | string       | Internal Link |
            | level 2                  | tarjetas                                                             | string       | Internal Link |
            | language                 | ES                                                                   | string       | Internal Link |
            | page area                | privada                                                              | string       | Internal Link |
            | page intent              | informacion                                                          | string       | Internal Link |
            | channel                  | online                                                               | string       | Internal Link |
            | page instance ID         | de                                                                   | string       | Internal Link |
            | page info version        | appVersion                                                           | regexp named | Internal Link |
            | page segment             | personas                                                             | string       | Internal Link |
            | sysEnv                   | app                                                                  | string       | Internal Link |
            | business unit            | BBVA Mexico                                                          | string       | Internal Link |
            | site app name            | App BBVA Mexico                                                      | string       | Internal Link |
            | project name             | Glomo                                                                | string       | Internal Link |
            | link name                | robo o extravio de tarjeta                                           | string       | Internal Link |
            | device mobile            | si                                                                   | string       | Internal Link |
            | user userState           | logado                                                               | string       | Internal Link |
            | profile ID               | profileID                                                            | regexp named | Internal Link |
            | user segment global      | 003001                                                               | string       | Internal Link |
            | user gender              | gender                                                               | regexp named | Internal Link |
            | user age                 | age                                                                  | regexp named | Internal Link |

    @ANA_ER004
    @analytics
    @MX
    @web
    @vbank @android @ios
    @backend(test)
    @web-done
    Scenario: Access to rejected card internaly
        Given a user with the following criteria
            | criteria            |
            | emergency reports   |
        And the user accesses to dashboard
        And the user goes to "emergency reports" using deeplink navigation
        And the user access to "card" screen
        When the user access to report "rejected" screen
        Then the device contains the following variables
            | item                     | value                                                                | type         |
            | analytics                | analytics/glomo_base                                                 | json schema  |
            | page name                | app:privada:personas:emergencias:tarjetas                            | string       |
            | level 1                  | emergencias                                                          | string       |
            | level 2                  | tarjetas                                                             | string       |
            | language                 | ES                                                                   | string       |
            | page area                | privada                                                              | string       |
            | page intent              | informacion                                                          | string       |
            | channel                  | online                                                               | string       |
            | page instance ID         | de                                                                   | string       |
            | page info version        | appVersion                                                           | regexp named |
            | page segment             | personas                                                             | string       |
            | sysEnv                   | app                                                                  | string       |
            | business unit            | BBVA Mexico                                                          | string       |
            | site app name            | App BBVA Mexico                                                      | string       |
            | project name             | Glomo                                                                | string       |
            | link name                | tarjeta rechazada                                                    | string       |
            | device mobile            | si                                                                   | string       |
            | user userState           | logado                                                               | string       |
            | profile ID               | profileID                                                            | regexp named |
            | user segment global      | 003001                                                               | string       |
            | user gender              | gender                                                               | regexp named |
            | user age                 | age                                                                  | regexp named |

    @ANA_ER005
    @analytics
    @MX
    @web
    @vbank @android @ios
    @backend(test)
    @web-done
    Scenario: Report service error in the screen
        Given a user with the following criteria
            | criteria            |
            | emergency reports   |
        And the user accesses to dashboard
        When the user goes to "emergency reports" using deeplink navigation
        Then the device contains the following variables
            | item                     | value                                                                       | type         |
            | analytics                | analytics/glomo_base                                                        | json schema  |
            | page name                | app:privada:personas:emergencias:error de comunicacion                      | string       |
            | level 1                  | emergencias                                                                 | string       |
            | level 2                  | error de comunicacion                                                       | string       |
            | error page               | error de comunicacion                                                       | string       |
            | language                 | ES                                                                          | string       |
            | page area                | privada                                                                     | string       |
            | page intent              | informacion                                                                 | string       |
            | channel                  | online                                                                      | string       |
            | page instance ID         | de                                                                          | string       |
            | page info version        | appVersion                                                                  | regexp named |
            | page segment             | personas                                                                    | string       |
            | sysEnv                   | app                                                                         | string       |
            | business unit            | BBVA Mexico                                                                 | string       |
            | site app name            | App BBVA Mexico                                                             | string       |
            | project name             | Glomo                                                                       | string       |
            | device mobile            | si                                                                          | string       |
            | user userState           | logado                                                                      | string       |
            | profile ID               | profileID                                                                   | regexp named |
            | user segment global      | 003001                                                                      | string       |
            | user gender              | gender                                                                      | regexp named |
            | user age                 | age                                                                         | regexp named |

    @ANA_ER006
    @analytics
    @MX
    @web
    @vbank @android @ios
    @backend(test)
    @web-done @vbank-modified
    Scenario: Access to change policy screen
        Given a user with the following criteria
            | criteria            |
            | emergency reports   |
        And the user accesses to dashboard
        And the user goes to "emergency reports" using deeplink navigation
        And the user access to "vehicle" screen
        When the user access to report "change" screen
        Then the device contains the following variables
            | item                     | value                                                                       | type         |
            | analytics                | analytics/glomo_base                                                        | json schema  |
            | page name                | app:privada:personas:emergencias:vehiculo:cambiar poliza                    | string       |
            | level 1                  | emergencias                                                                 | string       |
            | level 2                  | vehiculo                                                                    | string       |
            | level 3                  | cambiar poliza                                                              | string       |
            | language                 | ES                                                                          | string       |
            | page area                | privada                                                                     | string       |
            | page intent              | informacion                                                                 | string       |
            | channel                  | online                                                                      | string       |
            | page instance ID         | de                                                                          | string       |
            | page info version        | appVersion                                                                  | regexp named |
            | page segment             | personas                                                                    | string       |
            | sysEnv                   | app                                                                         | string       |
            | business unit            | BBVA Mexico                                                                 | string       |
            | site app name            | App BBVA Mexico                                                             | string       |
            | project name             | Glomo                                                                       | string       |
            | device mobile            | si                                                                          | string       |
            | user userState           | logado                                                                      | string       |
            | profile ID               | profileID                                                                   | regexp named |
            | user segment global      | 003001                                                                      | string       |
            | user gender              | gender                                                                      | regexp named |
            | user age                 | age                                                                         | regexp named |

    @ANA_ER007
    @analytics
    @MX
    @web
    @vbank @android @ios
    @backend(test)
    @web-done
    Scenario: Access to faqs vehicle screen
        Given a user with the following criteria
            | criteria            |
            | emergency reports   |
        And the user accesses to dashboard
        And the user goes to "emergency reports" using deeplink navigation
        And the user access to "vehicle" screen
        When the user access to "faqs" screen
        Then the device contains the following variables
            | item                     | value                                                                       | type         |
            | analytics                | analytics/glomo_base                                                        | json schema  |
            | page name                | app:privada:personas:emergencias:vehiculo:preguntas frecuentes              | string       |
            | level 1                  | emergencias                                                                 | string       |
            | level 2                  | vehiculo                                                                    | string       |
            | level 3                  | preguntas frecuentes                                                        | string       |
            | language                 | ES                                                                          | string       |
            | page area                | privada                                                                     | string       |
            | page intent              | informacion                                                                 | string       |
            | channel                  | online                                                                      | string       |
            | page instance ID         | de                                                                          | string       |
            | page info version        | appVersion                                                                  | regexp named |
            | page segment             | personas                                                                    | string       |
            | sysEnv                   | app                                                                         | string       |
            | business unit            | BBVA Mexico                                                                 | string       |
            | site app name            | App BBVA Mexico                                                             | string       |
            | project name             | Glomo                                                                       | string       |
            | device mobile            | si                                                                          | string       |
            | user userState           | logado                                                                      | string       |
            | profile ID               | profileID                                                                   | regexp named |
            | user segment global      | 003001                                                                      | string       |
            | user gender              | gender                                                                      | regexp named |
            | user age                 | age                                                                         | regexp named |

    @ANA_ER008
    @analytics
    @MX
    @web
    @vbank @android @ios
    @backend(test)
    @web-done
    Scenario: Report service error vehicle in the screen
        Given a user with the following criteria
            | criteria            |
            | emergency reports   |
        And the user accesses to dashboard
        And the user goes to "emergency reports" using deeplink navigation
        And the user access to "vehicle" screen
        When the user access to report "change" screen
        Then the device contains the following variables
            | item                     | value                                                                       | type         |
            | page name                | app:privada:personas:emergencias:vehiculo:error de comunicacion             | string       |
            | analytics                | analytics/glomo_base                                                        | json schema  |
            | level 1                  | emergencias                                                                 | string       |
            | level 2                  | vehiculo                                                                    | string       |
            | level 3                  | error de comunicacion                                                       | string       |
            | error page               | error de comunicacion                                                       | string       |
            | language                 | ES                                                                          | string       |
            | page area                | privada                                                                     | string       |
            | page intent              | informacion                                                                 | string       |
            | channel                  | online                                                                      | string       |
            | page instance ID         | de                                                                          | string       |
            | page info version        | appVersion                                                                  | regexp named |
            | page segment             | personas                                                                    | string       |
            | sysEnv                   | app                                                                         | string       |
            | business unit            | BBVA Mexico                                                                 | string       |
            | site app name            | App BBVA Mexico                                                             | string       |
            | project name             | Glomo                                                                       | string       |
            | device mobile            | si                                                                          | string       |
            | user userState           | logado                                                                      | string       |
            | profile ID               | profileID                                                                   | regexp named |
            | user segment global      | 003001                                                                      | string       |
            | user gender              | gender                                                                      | regexp named |
            | user age                 | age                                                                         | regexp named |

    @ANA_EVENT_ER009
    @analytics
    @MX
    @web @ios @android
    @vbank
    @backend(test)
    @web-done
    Scenario: The user goes to dashboard from emergency reports
        Given a user with the following criteria
            | criteria            |
            | emergency reports   |
        And the user accesses to dashboard
        And the user accesses to "emergency reports" item located in the sidebar
        And the analytics interceptor service is initiated
        When the user access emergency report sidebar private
        Then the analytics events contains the following variables
            | item                      | value                                                           | type             | event         |
            | version DL                | 20250414_5.0                                                    | string           | Internal Link |
            | page name                 | app:privada:personas:posicion global                            | string           | Internal Link |
            | level 1                   | posicion global                                                 | string           | Internal Link |
            | link name                 | sidebar emergencias                                             | string           | Internal Link |
            | language                  | ES                                                              | string           | Internal Link |
            | page area                 | privada                                                         | string           | Internal Link |
            | page intent               | informacion                                                     | string           | Internal Link |
            | channel                   | online                                                          | string           | Internal Link |
            | page instance ID          | de                                                              | string           | Internal Link |
            | page info version         | appVersion                                                      | regexp named     | Internal Link |
            | page segment              | personas                                                        | string           | Internal Link |
            | sysEnv                    | app                                                             | string           | Internal Link |
            | business unit             | BBVA Mexico                                                     | string           | Internal Link |
            | site app name             | App BBVA Mexico                                                 | string           | Internal Link |
            | device mobile             | si                                                              | string           | Internal Link |
            | user segment global       | 003001                                                          | string           | Internal Link |
            | profile ID                | profileID                                                       | regexp named     | Internal Link |
            | user country              | lettersAndSpaceOrEmpty                                          | regexp named     | Internal Link |

    @ANA_EVENT_ER010
    @analytics
    @MX
    @web @ios @android
    @vbank
    @backend(test)
    @web-done
    Scenario: Access to sidebar the emergency reports screen
        Given a user with the following criteria
            | criteria            |
            | emergency reports   |
        And the user accesses the Login Screen
        And the user accesses to "emergency reports" item located in the sidebar
        And the analytics interceptor service is initiated
        When the user access emergency report sidebar cached
        Then the analytics events contains the following variables
            | item                      | value                                                           | type             | event         |
            | version DL                | 20250414_5.0                                                    | string           | Internal Link |
            | page name                 | app:publica:general:login                                       | string           | Internal Link |
            | level 1                   | login                                                           | string           | Internal Link |
            | link name                 | sidebar emergencias                                             | string           | Internal Link |
            | language                  | ES                                                              | string           | Internal Link |
            | page area                 | publica                                                         | string           | Internal Link |
            | page intent               | informacion                                                     | string           | Internal Link |
            | channel                   | online                                                          | string           | Internal Link |
            | page instance ID          | de                                                              | string           | Internal Link |
            | page info version         | appVersion                                                      | regexp named     | Internal Link |
            | page segment              | general                                                         | string           | Internal Link |
            | sysEnv                    | app                                                             | string           | Internal Link |
            | business unit             | BBVA Mexico                                                     | string           | Internal Link |
            | site app name             | App BBVA Mexico                                                 | string           | Internal Link |
            | device mobile             | si                                                              | string           | Internal Link |
            | user segment global       | 003001                                                          | string           | Internal Link |
            | user country              | lettersAndSpaceOrEmpty                                          | regexp named     | Internal Link |
